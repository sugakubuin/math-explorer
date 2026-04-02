import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // 画面を少し下（300px）にスクロールした際にボタンを表示する
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 p-3 rounded-full bg-primary/90 text-primary-foreground shadow-lg hover:bg-primary hover:shadow-xl hover:-translate-y-1 transition-all z-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="ページトップへ戻る"
        >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
    );
}
