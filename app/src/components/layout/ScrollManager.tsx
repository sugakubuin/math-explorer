import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Disable default browser scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const hasHash = !!window.location.hash;

        // 1. Restore scroll position for the current path
        const savedPosition = sessionStorage.getItem(`scroll_position_${pathname}`);
        const targetScroll = savedPosition && !hasHash ? parseInt(savedPosition, 10) : 0;

        let isRestoring = !hasHash;
        // Track when we first reached the target, to allow a grace period for layout shifts
        let reachedTargetAt: number | null = null;

        const mountTime = Date.now();

        // Function to stop restoration if the user interacts with the page
        const stopRestoration = () => {
            // Ignore events in the first 300ms to skip "back swipe" gestures
            if (Date.now() - mountTime < 300) return;
            isRestoring = false;
        };

        // Listen for manual interaction (wheel, touch, click, etc.)
        window.addEventListener('wheel', stopRestoration, { passive: true });
        window.addEventListener('touchstart', stopRestoration, { passive: true });
        window.addEventListener('mousedown', stopRestoration, { passive: true });
        window.addEventListener('keydown', stopRestoration, { passive: true });

        const performScroll = () => {
            if (!isRestoring) return;

            window.scrollTo(0, targetScroll);

            // Check if we've actually reached the target position
            if (Math.abs(window.scrollY - targetScroll) < 2) {
                if (!reachedTargetAt) {
                    reachedTargetAt = Date.now();
                }
            } else {
                // Page height was insufficient - we got clamped. Reset reachedTargetAt
                // so we keep trying until the page is tall enough.
                reachedTargetAt = null;
            }
        };

        // Attempt initial scroll
        performScroll();

        // Use ResizeObserver to detect layout changes (like AdSense loading)
        // and re-trigger scroll if we're still in restoration mode
        const resizeObserver = new ResizeObserver(() => {
            if (isRestoring) {
                performScroll();
            }
        });
        resizeObserver.observe(document.body);

        // Fallback timers to ensure we keep trying for a bit
        // Extended to 3.5s to account for slow AdSense loading
        const timeoutIds = [100, 300, 600, 1000, 1500, 2000, 2500, 3000, 3500].map(delay => 
            setTimeout(() => {
                if (isRestoring) {
                    performScroll();
                    // End restoration if we've been at the target for 500ms+ (layout is stable)
                    if (reachedTargetAt && Date.now() - reachedTargetAt > 500) {
                        isRestoring = false;
                    }
                }
                if (delay === 3500) isRestoring = false; // Hard stop after 3.5 seconds
            }, delay)
        );

        let scrollTimeoutId: ReturnType<typeof setTimeout>;

        // 3. Save scroll position on scroll event
        const handleScroll = () => {
            // Only save if we are NOT in restoration mode.
            // This prevents "capped" scroll positions (when the page height hasn't fully loaded)
            // from overwriting the correct target scroll position.
            if (!isRestoring) {
                clearTimeout(scrollTimeoutId);
                scrollTimeoutId = setTimeout(() => {
                    sessionStorage.setItem(`scroll_position_${pathname}`, window.scrollY.toString());
                }, 150); // Debounce to prevent saving clamped values during layout unmounts
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', stopRestoration);
            window.removeEventListener('touchstart', stopRestoration);
            window.removeEventListener('mousedown', stopRestoration);
            window.removeEventListener('keydown', stopRestoration);
            resizeObserver.disconnect();
            timeoutIds.forEach(id => clearTimeout(id));
            clearTimeout(scrollTimeoutId);
        };
    }, [pathname]);

    return null;
}

