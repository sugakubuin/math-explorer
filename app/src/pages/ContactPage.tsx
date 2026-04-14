import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <SEO title="お問い合わせ | Math Explorer" url="/contact" description="Math Explorerへのお問い合わせはこちら。ご意見やご感想、誤植のご指摘などお気軽にご連絡ください。" />
            <div className="container mx-auto px-6 md:px-8 py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-8 font-sans tracking-tight leading-tight">
                        お問い合わせ
                    </h1>

                    <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 w-full max-w-none">
                        <p className="mb-12">
                            当サイトに関するご意見・ご感想、記事内容の誤り、その他お問い合わせにつきましては、
                            以下の窓口よりお気軽にご連絡ください。
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* お問い合わせフォーム（Google Forms） */}
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                                    お問い合わせフォーム
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                                    Googleフォームからのお問い合わせはこちらから。内容を確認次第、必要に応じて返信させていただきます。
                                </p>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSdFfuToSCHuf-Pim65rwxOTc8nMrl818bxOaLuf6A-Qk3_Wtw/viewform?usp=publish-editor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-md hover:shadow-lg"
                                >
                                    フォームを開く
                                </a>
                            </div>

                            {/* X (Twitter) */}
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-900 dark:fill-slate-100">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                                    公式 X (旧Twitter)
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                                    急を要する場合や、軽いご指摘などはDMでも受け付けております。お気軽にフォロー＆メッセージください。
                                </p>
                                <a
                                    href="https://x.com/katomura_buin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white font-bold hover:bg-slate-800 dark:hover:bg-white transition-all shadow-md hover:shadow-lg"
                                >
                                    @katomura_buin
                                </a>
                            </div>
                        </div>

                        <section className="bg-amber-50 dark:bg-amber-900/10 p-8 rounded-2xl border border-amber-200 dark:border-amber-800/30">
                            <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                                返信に関するご注意
                            </h2>
                            <ul className="text-sm text-amber-800/80 dark:text-amber-200/60 space-y-2 list-disc pl-5">
                                <li>お問い合わせ内容によっては、返信にお時間をいただく場合や、お答えできない場合がございます。</li>
                                <li>特定の数学の課題や宿題の代行・回答についてはお答えできませんのでご了承ください。</li>
                                <li>ご入力いただいた個人情報は、お問い合わせへの回答目的以外には使用いたしません。</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
