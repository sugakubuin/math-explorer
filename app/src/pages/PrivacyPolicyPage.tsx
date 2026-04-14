import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <SEO title="プライバシーポリシー | Math Explorer" url="/privacy" description="Math Explorerのプライバシーポリシー。Google AdSenseやAmazonアソシエイト、Cookieの利用について記載しています。" />
            <div className="container mx-auto px-6 md:px-8 py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-8 font-sans tracking-tight leading-tight">
                        プライバシーポリシー
                    </h1>

                    <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 w-full max-w-none">
                        <p className="mb-12">
                            Math Explorer（以下、「当サイト」）における、ユーザーの個人情報の取扱いおよび広告の配信について以下の通り定めます。
                        </p>

                        <div className="space-y-16">
                            {/* プライバシーポリシー */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                                    広告の配信について
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

                            <section>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                                    免責事項
                                </h2>
                                <p className="mb-4">
                                    当サイトに掲載されている情報については、可能な限り正確を期していますが、その内容の正確性や安全性を保証するものではありません。当サイトの情報を用いて行う一切の行為、および生じた損害について、管理人は一切の責任を負いません。
                                </p>
                                <p>
                                    また、当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                                    著作権について
                                </h2>
                                <p>
                                    当サイトに掲載されている文章、画像、プログラム等の著作権は当サイト管理人に帰属します。
                                    これらの情報を無断で転載、複製、配布することを禁止します。
                                </p>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
