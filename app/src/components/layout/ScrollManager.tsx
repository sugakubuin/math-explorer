import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Disable default browser scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // 1. Restore scroll position for the current path
        const savedPosition = sessionStorage.getItem(`scroll_position_${pathname}`);
        const targetScroll = savedPosition ? parseInt(savedPosition, 10) : 0;

        // Attempt to scroll immediately
        window.scrollTo(0, targetScroll);

        // 2. Add a fallback to ensure scroll happens even if content renders late
        // (This helps with Framer Motion or other async rendering)
        const timeoutId = setTimeout(() => {
            window.scrollTo(0, targetScroll);
        }, 100);

        // 3. Save scroll position on scroll event
        const handleScroll = () => {
            sessionStorage.setItem(`scroll_position_${pathname}`, window.scrollY.toString());
        };

        // Use a slight throttle by default or just raw (browser optimized usually)
        // For simplicity and immediate capturing, raw is fine, but extensive logging might be heavy.
        // Given React event pooling isn't issue here (native), direct is fine.
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [pathname]);

    return null;
}
