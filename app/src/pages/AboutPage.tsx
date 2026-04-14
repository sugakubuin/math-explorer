import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <SEO title="サイトについて | Math Explorer" url="/about" description="Math Explorerについて。サイトの目的や運営者情報、お問い合わせはこちら。" />
            <div className="container mx-auto px-6 md:px-8 py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-8 font-sans tracking-tight leading-tight">
                        サイトについて<br />
                        <span className="text-2xl md:text-3xl font-normal">
                            (About & Privacy Policy)
                        </span>
                    </h1>

                    <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 w-full max-w-none">
                        <p className="lead text-xl md:text-2xl mb-12 leading-relaxed">
                            Math Explorerは、大学数学の広大な世界を網羅的に俯瞰し、
                            迷わずに学びを進めるための学習ロードマップサイトです。
                        </p>

                        <div className="space-y-16">
                            {/* 目的と機能 */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                                    当サイトの目的・機能
                                </h2>
                                <p className="mb-4">
                                    大学数学は分野が多岐にわたり、それぞれのつながりが見えにくいため
                                    「次に何を学べばいいのか」「この知識はどこで使うのか」
                                    といった疑問を持ちがちです。
                                </p>
                                <p className="mb-4">
                                    当サイトでは、数学の各分野を体系的に整理し、
                                    前提知識や次のステップを明確にすることで、
                                    独学や学習の補助として役立つことを目指しています。
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>ロードマップ:</strong> 数学の各分野をレベル別に可視化</li>
                                    <li><strong>体系的リンク:</strong> 必要な前提知識へスムーズにアクセス</li>
                                    <li><strong>トピック詳細:</strong> 各単元の概要や学ぶべき重要項目を解説</li>
                                    <li><strong>演習問題:</strong> 各単元の理解度を確認するための演習問題</li>
                                </ul>
                            </section>

                            <section className="bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                                    各種規約・お問い合わせ
                                </h2>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                                    広告の配信、免責事項、お問い合わせに関しては以下の専門ページをご確認ください。
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/privacy" className="text-primary hover:underline font-bold">
                                        プライバシーポリシー・免責事項
                                    </Link>
                                    <span className="text-slate-300 dark:text-slate-700">|</span>
                                    <Link to="/contact" className="text-primary hover:underline font-bold">
                                        お問い合わせ
                                    </Link>
                                </div>
                            </section>

                            {/* 運営者プロフィール */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                                    運営者プロフィール
                                </h2>
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                                    {/* アイコン画像プレースホルダー */}
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-200 dark:bg-slate-800 flex-shrink-0 flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-900 shadow-md">
                                        <svg className="w-12 h-12 text-slate-400 dark:text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                                            ぶいん
                                        </h3>
                                        <p className="text-sm text-primary font-bold mb-4">
                                            某大学数学科
                                        </p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                                            このサイトが数学を学ぶ手助けになれたら嬉しいです。
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
