import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm border-blue-100 dark:bg-slate-900 dark:border-slate-800">
            <div className="container flex h-16 items-center justify-between px-6 md:px-8 mx-auto">
                <Link to="/" className="flex items-center space-x-3 group">
                    <Logo className="h-10 w-10 text-4xl transition-transform group-hover:scale-110" />
                    <span className="font-bold text-xl tracking-tight text-primary dark:text-blue-100">
                        Math Explorer
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-bold">
                    <Link
                        to="/roadmap"
                        className={`transition-colors hover:text-primary ${location.pathname === '/roadmap' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
                    >
                        ロードマップ
                    </Link>
                    <Link
                        to="/mathematician-timeline"
                        className={`transition-colors hover:text-primary ${location.pathname === '/mathematician-timeline' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
                    >
                        近世数学史年表
                    </Link>
                    <Link
                        to="/about"
                        className="text-slate-500 transition-colors hover:text-primary dark:text-slate-400"
                    >
                        サイトについて
                    </Link>
                    <SearchBar />
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-500 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b bg-white overflow-hidden shadow-lg dark:bg-slate-900"
                    >
                        <div className="container py-6 flex flex-col space-y-4 px-6">
                            <SearchBar isMobile />
                            <Link
                                to="/roadmap"
                                className="text-lg font-bold text-slate-700 hover:text-primary py-2 px-4 rounded-lg hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-slate-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                ロードマップ
                            </Link>
                            <Link
                                to="/mathematician-timeline"
                                className="text-lg font-bold text-slate-700 hover:text-primary py-2 px-4 rounded-lg hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-slate-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                近世数学史年表
                            </Link>
                            <Link
                                to="/about"
                                className="text-lg font-bold text-slate-700 hover:text-primary py-2 px-4 rounded-lg hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-slate-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                サイトについて
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
