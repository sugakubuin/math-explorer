import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

export default function NotFoundPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <SEO title="404 - ページが見つかりません | Math Explorer" description="お探しのページは見つかりませんでした。" />
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-9xl font-extrabold text-slate-200 dark:text-slate-800 tracking-tighter">
                        404
                    </h1>
                    <div className="mt-[-2rem]">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            ページが見つかりません
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                            申し訳ありませんが、お探しのページは削除されたか、URLが変更された可能性があります。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-blue-100 text-blue-700 font-bold shadow-md hover:bg-blue-200 hover:scale-105 transition-all duration-300 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                            >
                                ホームに戻る
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
