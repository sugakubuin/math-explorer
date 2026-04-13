import { roadmapData } from '../data/roadmapData';
import { hasTopicContent } from '../data/contentAvailability';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    Construction,
    Triangle,
    BarChart,
    Layers,
    Binary,
    BookOpen,
    Sigma,
    Activity,
    LineChart,
    AreaChart,
    Calculator,
    Superscript,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import AdSense from '../components/ads/AdSense';
import MathText from '../components/math/MathText';

const getStageTheme = (stageId: string) => {
    switch (stageId) {
        case 'stage-1': // Lv.1 Basic -> Blue
            return {
                card: 'bg-blue-50/50 border-blue-200 hover:shadow-blue-900/10 hover:border-blue-300 dark:bg-blue-900/10 dark:border-blue-900',
                icon: 'text-blue-500',
                badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
                title: 'group-hover:text-blue-700 dark:group-hover:text-blue-300',
                footer: 'group-hover:bg-blue-100/50 dark:group-hover:bg-blue-900/30'
            };
        case 'stage-2': // Lv.2 Standard -> Emerald (Green)
            return {
                card: 'bg-emerald-50/50 border-emerald-200 hover:shadow-emerald-900/10 hover:border-emerald-300 dark:bg-emerald-900/10 dark:border-emerald-900',
                icon: 'text-emerald-500',
                badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
                title: 'group-hover:text-emerald-700 dark:group-hover:text-emerald-300',
                footer: 'group-hover:bg-emerald-100/50 dark:group-hover:bg-emerald-900/30'
            };
        case 'stage-3': // Lv.3 Specialized -> Amber (Orange)
            return {
                card: 'bg-amber-50/50 border-amber-200 hover:shadow-amber-900/10 hover:border-amber-300 dark:bg-amber-900/10 dark:border-amber-900',
                icon: 'text-amber-500',
                badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
                title: 'group-hover:text-amber-700 dark:group-hover:text-amber-300',
                footer: 'group-hover:bg-amber-100/50 dark:group-hover:bg-amber-900/30'
            };
        case 'stage-4': // Lv.4 Advanced -> Violet (Purple)
            return {
                card: 'bg-violet-50/50 border-violet-200 hover:shadow-violet-900/10 hover:border-violet-300 dark:bg-violet-900/10 dark:border-violet-900',
                icon: 'text-violet-500',
                badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
                title: 'group-hover:text-violet-700 dark:group-hover:text-violet-300',
                footer: 'group-hover:bg-violet-100/50 dark:group-hover:bg-violet-900/30'
            };
        case 'stage-5': // Lv.5 Master -> Rose (Red/Pink)
            return {
                card: 'bg-rose-50/50 border-rose-200 hover:shadow-rose-900/10 hover:border-rose-300 dark:bg-rose-900/10 dark:border-rose-900',
                icon: 'text-rose-500',
                badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
                title: 'group-hover:text-rose-700 dark:group-hover:text-rose-300',
                footer: 'group-hover:bg-rose-100/50 dark:group-hover:bg-rose-900/30'
            };
        case 'stage-applied': // Applied -> Indigo
            return {
                card: 'bg-indigo-50/50 border-indigo-200 hover:shadow-indigo-900/10 hover:border-indigo-300 dark:bg-indigo-900/10 dark:border-indigo-900',
                icon: 'text-indigo-500',
                badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
                title: 'group-hover:text-indigo-700 dark:group-hover:text-indigo-300',
                footer: 'group-hover:bg-indigo-100/50 dark:group-hover:bg-indigo-900/30'
            };
        default:
            return {
                card: 'bg-slate-50/50 border-slate-200 hover:shadow-slate-900/10 hover:border-slate-300 dark:bg-slate-900/10 dark:border-slate-900',
                icon: 'text-slate-500',
                badge: 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300',
                title: 'group-hover:text-slate-700 dark:group-hover:text-slate-300',
                footer: 'group-hover:bg-slate-100/50 dark:group-hover:bg-slate-900/30'
            };
    }
};

const getTopicIcon = (title: string, className: string) => {
    // 線形代数・行列 → Grid（格子状で行列らしい）
    if (title.includes('線形代数') || title.includes('行列'))
        return <Binary className={className} />;

    // 数値計算・方程式 → Calculator
    if (title.includes('数値') || title.includes('計算') || title.includes('制御') || title.includes('最適化') || title.includes('暗号') || title.includes('符号'))
        return <Calculator className={className} />;

    // 微積分・解析 → AreaChart（積分の面積感が出る）
    if (title.includes('微積分') || title.includes('積分'))
        return <AreaChart className={className} />;

    // 関数・極限・実解析 → LineChart（グラフ・収束のイメージ）
    if (title.includes('解析') || title.includes('関数') || title.includes('極限') || title.includes('微分'))
        return <LineChart className={className} />;

    // 集合・位相・論理 → Layers（階層・包含関係のイメージ）
    if (title.includes('集合') || title.includes('位相') || title.includes('論理'))
        return <Layers className={className} />;

    // 統計・確率・データ → BarChart
    if (title.includes('統計') || title.includes('確率') || title.includes('データ'))
        return <BarChart className={className} />;

    // 幾何・多様体・トポロジー → Triangle
    if (title.includes('幾何') || title.includes('曲面') || title.includes('多様体') || title.includes('トポロジー'))
        return <Triangle className={className} />;

    // 代数・群・環・体 → Superscript（指数・冪の記法イメージ）
    if (title.includes('代数') || title.includes('群') || title.includes('環') || title.includes('体'))
        return <Superscript className={className} />;

    // 級数・べき級数・フーリエ → Sigma
    if (title.includes('級数') || title.includes('フーリエ') || title.includes('数理'))
        return <Sigma className={className} />;

    // 物理・応用 → Activity（波形）
    if (title.includes('物理') || title.includes('応用') || title.includes('力学'))
        return <Activity className={className} />;

    return <BookOpen className={className} />;
};

export default function Roadmap() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <SEO
                title="ロードマップ | Math Explorer"
                url="/roadmap"
                description="基礎から応用まで、数学の広大な世界を体系的に学ぶためのガイドです。"
                jsonLd={{
                    '@type': 'ItemList',
                    name: '大学数学ロードマップ',
                    description: '基礎から応用まで、数学の広大な世界を体系的に学ぶためのガイドです。',
                    itemListElement: roadmapData
                        .flatMap(stage => stage.topics)
                        .filter(topic => hasTopicContent(topic.id))
                        .map((topic, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            name: topic.title,
                            url: `https://mathematics-explorer.netlify.app/roadmap/${topic.id}`,
                        })),
                }}
            />
            {/* Hero Section */}
            <div className="bg-white border-b border-blue-100 pb-16 pt-20 px-6 dark:bg-slate-900 dark:border-slate-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        大学数学ロードマップ
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        基礎から応用まで、数学の広大な世界を体系的に学ぶためのガイドです。
                        興味のある分野や、現在のレベルに合わせて学習を進めてください。
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-8 py-16">
                <div className="max-w-7xl mx-auto space-y-20">
                    {roadmapData.map((stage) => (
                        <div
                            key={stage.id}
                            className="relative"
                        >
                            {/* Stage-4の前にAdSenseを表示 */}
                            {stage.id === 'stage-4' && (
                                <div className="mb-16 text-center relative z-0">
                                    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Advertisement</div>
                                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-2 sm:p-4 overflow-hidden min-h-[280px] flex items-center justify-center">
                                        <AdSense slot="" format="auto" responsive={true} />
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center space-x-4 mb-10">
                                <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent dark:from-blue-800"></div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white px-4 min-w-fit">
                                    <MathText text={stage.title} />
                                </h2>
                                <div className="h-px flex-1 bg-gradient-to-l from-blue-200 to-transparent dark:from-blue-800"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                                {stage.topics.map((topic) => {
                                    const theme = getStageTheme(stage.id);
                                    const hasContent = hasTopicContent(topic.id);

                                    return (
                                        <motion.div
                                            key={topic.id}
                                            whileHover={hasContent ? { y: -5 } : undefined}
                                            className="h-full"
                                        >
                                            {hasContent ? (
                                            <Link
                                                to={`/roadmap/${topic.id}`}
                                                className={`group block relative overflow-hidden rounded-xl border transition-all hover:shadow-lg h-full flex flex-col ${theme.card}`}
                                            >
                                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                                    {getTopicIcon(topic.title, `w-12 h-12 rotate-12 ${theme.icon}`)}
                                                </div>

                                                <div className="p-4 relative z-10 flex-1 flex flex-col">
                                                    <div className="mb-2 flex flex-wrap items-center gap-1">
                                                        <span className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-mono font-bold ${theme.badge}`}>
                                                            {topic.id}
                                                        </span>
                                                    </div>

                                                    <h3 className={`mb-2 text-base font-bold text-slate-800 dark:text-white transition-colors line-clamp-2 ${theme.title}`}>
                                                        <MathText text={topic.title} />
                                                    </h3>

                                                    <div className="mt-auto space-y-2">
                                                        {topic.prerequisites && topic.prerequisites.length > 0 && (
                                                            <div className="flex flex-wrap gap-1 mt-1">
                                                                <span className="text-[9px] text-slate-400 font-semibold uppercase pt-0.5 hidden sm:inline">Pre:</span>
                                                                {topic.prerequisites.map(preId => (
                                                                    <span key={preId} className="flex items-center text-[10px] text-slate-500 bg-white/50 px-1 py-0.5 rounded border border-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">
                                                                        {preId}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                        <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1 flex items-center gap-1">
                                                            <BookOpen className="w-3 h-3" />
                                                            {topic.chapters.length} chapters
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`px-3 py-2 flex justify-end items-center transition-colors bg-white/30 ${theme.footer}`}>
                                                    <ChevronRight className={`h-4 w-4 text-slate-300 transition-colors ${theme.icon}`} />
                                                </div>
                                            </Link>
                                            ) : (
                                            <Link
                                                to={`/roadmap/${topic.id}`}
                                                className={`group block relative overflow-hidden rounded-xl border transition-all hover:shadow-lg h-full flex flex-col ${theme.card}`}
                                            >
                                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                                    {getTopicIcon(topic.title, `w-12 h-12 rotate-12 ${theme.icon}`)}
                                                </div>

                                                {/* Coming Soon 帯 */}
                                                <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/30 dark:bg-slate-950/30 rounded-xl pointer-events-none">
                                                    <div className="w-full flex items-center justify-center gap-1.5 py-1.5 border-y-2 border-red-400/80 dark:border-red-500/60 bg-red-50/90 dark:bg-red-950/50 backdrop-blur-sm">
                                                        <Construction className="w-3.5 h-3.5 text-red-500 shrink-0" />
                                                        <span className="text-xs font-bold text-red-500 tracking-[0.15em] uppercase">
                                                            Coming Soon
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="p-4 relative z-10 flex-1 flex flex-col opacity-70 group-hover:opacity-100 transition-opacity">
                                                    <div className="mb-2 flex flex-wrap items-center gap-1">
                                                        <span className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-mono font-bold ${theme.badge}`}>
                                                            {topic.id}
                                                        </span>
                                                    </div>

                                                    <h3 className={`mb-2 text-base font-bold text-slate-800 dark:text-white transition-colors line-clamp-2 ${theme.title}`}>
                                                        <MathText text={topic.title} />
                                                    </h3>

                                                    <div className="mt-auto space-y-2">
                                                        {topic.prerequisites && topic.prerequisites.length > 0 && (
                                                            <div className="flex flex-wrap gap-1 mt-1">
                                                                <span className="text-[9px] text-slate-400 font-semibold uppercase pt-0.5 hidden sm:inline">Pre:</span>
                                                                {topic.prerequisites.map(preId => (
                                                                    <span key={preId} className="flex items-center text-[10px] text-slate-500 bg-white/50 px-1 py-0.5 rounded border border-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">
                                                                        {preId}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                        <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1 flex items-center gap-1">
                                                            <BookOpen className="w-3 h-3" />
                                                            {topic.chapters.length} chapters
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`px-3 py-2 flex justify-end items-center transition-colors bg-white/30 opacity-70 group-hover:opacity-100 ${theme.footer}`}>
                                                    <ChevronRight className={`h-4 w-4 text-slate-300 transition-colors ${theme.icon}`} />
                                                </div>
                                            </Link>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
