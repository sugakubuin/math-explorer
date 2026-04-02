import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import ScrollToTopButton from './ScrollToTopButton';
import AdSense from '../ads/AdSense';
import ScrollManager from './ScrollManager.tsx';

export default function Layout() {
    const location = useLocation();
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            <Header />
            <ScrollManager />
            <main className="flex-1">
                <Outlet key={location.pathname} />
                
                <div className="container mx-auto px-6 md:px-8 py-8 mt-8 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-center text-xs text-slate-400 mb-2">Advertisement</div>
                    <AdSense slot="" format="auto" responsive={true} />
                </div>
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}
