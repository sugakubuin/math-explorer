import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="border-t py-8 md:py-12 bg-gray-50/50 dark:bg-gray-900/10">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-8 mx-auto">
                <p className="text-center text-sm leading-loose text-slate-500 dark:text-slate-400 md:text-left">
                    &copy; 2026 Math Explorer
                </p>
                <div className="flex gap-4">
                    <Link 
                        to="/about" 
                        className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                    >
                        About & Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
