import { motion } from 'framer-motion';
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

                            {/* 免責事項・学習上の注意 */}
                            <section className="bg-amber-50 dark:bg-amber-900/20 p-6 sm:p-8 rounded-2xl border border-amber-200 dark:border-amber-800/50">
                                <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                                    学習上の注意と免責事項
                                </h2>
                                <p className="mb-4 font-medium text-amber-800 dark:text-amber-200">
                                    <strong>当サイトはあくまで学習の補助であり、本格的な学習の代替となるものではありません。</strong>
                                </p>
                                <p className="mb-4 text-amber-900/80 dark:text-amber-200/80">
                                    本格的に数学を学ぶ際には、本サイトの情報のみに依存せず、
                                    <strong>必ず信頼のおける専門書、教科書、または大学の講義資料などを併用して学習を進めることを強く推奨します。</strong>
                                </p>
                                <p className="text-sm text-amber-900/70 dark:text-amber-200/70 mt-6 pt-6 border-t border-amber-200 dark:border-amber-800/50">
                                    当サイトに掲載されている情報については、可能な限り正確を期していますが、その内容の正確性や安全性を保証するものではありません。当サイトの情報を用いて行う一切の行為、および生じた損害について、管理人は一切の責任を負いません。
                                </p>
                            </section>

                            {/* プライバシーポリシー */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                                    プライバシーポリシー・広告について
                                </h2>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-3">
                                            Google AdSense について
                                        </h3>
                                        <p className="text-base text-slate-600 dark:text-slate-400">
                                            当サイトでは、第三者配信の広告サービス「Google AdSense（グーグルアドセンス）」を利用しています。
                                            Googleなどの第三者配信事業者は、Cookieを使用して、ユーザーが当サイトや他のウェブサイトに過去にアクセスした際の情報に基づいて広告を配信します。
                                            ユーザーは、<a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Googleの広告設定</a>でパーソナライズ広告を無効にすることができます。
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-3">
                                            Amazon アソシエイト・プログラムについて
                                        </h3>
                                        <p className="text-base text-slate-600 dark:text-slate-400">
                                            当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。<br />
                                            第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookieを設定したりこれを認識したりする場合があります。
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-3">
                                            Cookie（クッキー）の使用について
                                        </h3>
                                        <p className="text-base text-slate-600 dark:text-slate-400">
                                            当サイトでは、広告配信やサイトの利用状況分析のためにCookieを使用しています。
                                            Cookieから得られる情報は匿名であり、個人を特定するものではありません。
                                            お使いのブラウザの設定により、Cookieの受け取りを拒否することも可能です。
                                        </p>
                                    </div>
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
                                        {/* 実際の画像を使用する場合はこちらをアンコメントしてsrcを設定してください */}
                                        {/* <img src="/profile-icon.jpg" alt="プロフィール画像" className="w-full h-full object-cover" /> */}
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

                            {/* お問い合わせ */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                                    お問い合わせ
                                </h2>
                                <p className="mb-6 text-slate-600 dark:text-slate-400">
                                    ご意見やご感想、記事の誤植のご指摘などがございましたら、以下のX（旧Twitter）アカウントへのDM、またはお問い合わせフォームよりお気軽にご連絡ください。
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* Xアカウントリンク */}
                                    <a
                                        href="https://x.com/katomura_buin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center space-x-3 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 group"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className="h-5 w-5 fill-slate-900 dark:fill-slate-100 group-hover:fill-slate-700 dark:group-hover:fill-slate-300 transition-colors"
                                        >
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                        </svg>
                                        <span className="text-slate-700 dark:text-slate-200 font-bold group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                            @katomura_buin
                                        </span>
                                    </a>

                                    {/* Googleフォームのリンク */}
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSdFfuToSCHuf-Pim65rwxOTc8nMrl818bxOaLuf6A-Qk3_Wtw/viewform?usp=publish-editor"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white border border-transparent shadow-sm hover:shadow-md transition-all duration-200 font-bold"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span>お問い合わせフォーム</span>
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
