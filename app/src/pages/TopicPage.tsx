import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, GitBranch, Construction, BookText, ScrollText } from 'lucide-react';
import { roadmapData, getTopicById, getStageByTopicId } from '../data/roadmapData';
import { hasTopicContent } from '../data/contentAvailability';
import SEO from '../components/seo/SEO';
import AdSense from '../components/ads/AdSense';

const getStageTheme = (stageId: string | undefined) => {
    switch (stageId) {
        case 'stage-1':
            return {
                idBox: 'bg-blue-50 border-blue-200 text-blue-700',
                text: 'text-blue-700'
            };
        case 'stage-2':
            return {
                idBox: 'bg-emerald-50 border-emerald-200 text-emerald-700',
                text: 'text-emerald-700'
            };
        case 'stage-3':
            return {
                idBox: 'bg-amber-50 border-amber-200 text-amber-700',
                text: 'text-amber-700'
            };
        case 'stage-4':
            return {
                idBox: 'bg-violet-50 border-violet-200 text-violet-700',
                text: 'text-violet-700'
            };
        case 'stage-5':
            return {
                idBox: 'bg-rose-50 border-rose-200 text-rose-700',
                text: 'text-rose-700'
            };
        case 'stage-applied':
            return {
                idBox: 'bg-indigo-50 border-indigo-200 text-indigo-700',
                text: 'text-indigo-700'
            };
        default:
            return {
                idBox: 'bg-slate-50 border-slate-200 text-slate-700',
                text: 'text-slate-700'
            };
    }
};

export default function TopicPage() {
    const { topicId } = useParams();

    // Find the topic across all stages
    const topic = roadmapData
        .flatMap(stage => stage.topics)
        .find(t => t.id === topicId);

    const stage = topic ? getStageByTopicId(topic.id) : undefined;

    if (!topic) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <SEO title="Topic not found | Math Explorer" />
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Topic not found</h1>
                    <Link to="/roadmap" className="text-primary hover:underline mt-4 inline-block">
                        Return to Roadmap
                    </Link>
                </div>
            </div>
        );
    }

    const hasContent = hasTopicContent(topic.id);

    const theme = getStageTheme(stage?.id);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <SEO
                title={`${topic.title} | Math Explorer`}
                description={`${topic.title}について学ぶ。収録チャプター数: ${topic.chapters.length}`}
                url={`/roadmap/${topic.id}`}
                jsonLd={{
                    '@type': 'Course',
                    name: topic.title,
                    description: `${topic.title}について学ぶ。収録チャプター数: ${topic.chapters.length}`,
                    provider: {
                        '@type': 'Organization',
                        name: 'Math Explorer',
                        url: 'https://mathematics-explorer.netlify.app/',
                    },
                    hasCourseInstance: topic.chapters.map(ch => ({
                        '@type': 'CourseInstance',
                        name: `Chapter ${ch.id}. ${ch.title}`,
                        description: ch.description || '',
                    })),
                }}
            />
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-blue-100 shadow-sm sticky top-16 z-30 dark:bg-slate-900 dark:border-slate-800">
                <div className="container mx-auto px-6 md:px-8 py-4">
                    <div className="flex flex-wrap items-center gap-y-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                        <Link to="/roadmap" className="hover:text-primary transition-colors flex items-center whitespace-nowrap">
                            ロードマップ
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{topic.id} {topic.title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex items-start gap-6 mb-8">
                            <div className={`h-20 w-20 rounded-2xl flex items-center justify-center font-bold text-3xl shadow-lg border-2 ${theme.idBox} shrink-0`}>
                                <span>{topic.id}</span>
                            </div>
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
                                    {topic.title}
                                </h1>

                                {/* Removed Level Label */}

                                {/* Prerequisites Section */}
                                {topic.prerequisites && topic.prerequisites.length > 0 && (
                                    <div className="mt-4 flex flex-col items-start gap-3">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-sm font-semibold text-slate-400 mr-2">前提知識:</span>
                                            {topic.prerequisites.map(preId => {
                                                const preTopic = getTopicById(preId);
                                                return preTopic ? (
                                                    <Link
                                                        key={preId}
                                                        to={`/roadmap/${preId}`}
                                                        className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-primary hover:border-blue-200 transition-colors shadow-sm"
                                                    >
                                                        <span className="opacity-50 mr-2 border-r border-slate-200 pr-2">{preTopic.id}</span>
                                                        {preTopic.title}
                                                    </Link>
                                                ) : (
                                                    <span key={preId} className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-500">
                                                        {preId}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        <Link
                                            to={`/roadmap/${topic.id}/flow`}
                                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                                        >
                                            <GitBranch className="w-4 h-4 mr-1.5" />
                                            学習フローを見る &rarr;
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Table of Contents */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 mb-8 border border-slate-100 dark:border-slate-800">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                            Contents
                        </h3>
                        <nav className="flex flex-col gap-2">
                            {topic.chapters.map((chapter) => (
                                <button
                                    key={chapter.id}
                                    onClick={() => {
                                        const el = document.getElementById(`topic-chapter-${chapter.id}`);
                                        if (el) {
                                            const y = el.getBoundingClientRect().top + window.scrollY - 160;
                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                        }
                                    }}
                                    className="text-left text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-1 pl-3 border-l-2 border-transparent hover:border-primary"
                                >
                                    Chapter {chapter.id}. {chapter.title}
                                </button>
                            ))}
                            {hasContent && (
                                <>
                                    <div className="border-t border-slate-200 dark:border-slate-700 my-1" />
                                    <button
                                        onClick={() => {
                                            const el = document.getElementById('topic-list-nav');
                                            if (el) {
                                                const y = el.getBoundingClientRect().top + window.scrollY - 160;
                                                window.scrollTo({ top: y, behavior: 'smooth' });
                                            }
                                        }}
                                        className="text-left text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1 pl-3 border-l-2 border-transparent hover:border-blue-500"
                                    >
                                        定義一覧
                                    </button>
                                    <button
                                        onClick={() => {
                                            const el = document.getElementById('topic-list-nav');
                                            if (el) {
                                                const y = el.getBoundingClientRect().top + window.scrollY - 160;
                                                window.scrollTo({ top: y, behavior: 'smooth' });
                                            }
                                        }}
                                        className="text-left text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors py-1 pl-3 border-l-2 border-transparent hover:border-purple-500"
                                    >
                                        命題一覧
                                    </button>
                                </>
                            )}
                        </nav>
                    </div>

                    <div className="mb-8 text-center relative z-0">
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Advertisement</div>
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-2 sm:p-4 overflow-hidden min-h-[100px] flex items-center justify-center">
                            <AdSense slot="" format="auto" responsive={true} />
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-1">
                        {topic.chapters.map((chapter, index) => (
                            <motion.div
                                key={chapter.id}
                                id={`topic-chapter-${chapter.id}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="relative overflow-hidden rounded-xl"
                            >
                                {!hasContent && (
                                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                                        <div className="w-full flex items-center justify-center gap-1.5 py-1.5 border-y-2 border-red-400/80 dark:border-red-500/60 bg-red-50/90 dark:bg-red-950/50 backdrop-blur-sm">
                                            <Construction className="w-4 h-4 text-red-500 shrink-0" />
                                            <span className="text-xs font-bold text-red-500 tracking-[0.15em] uppercase">
                                                Coming Soon
                                            </span>
                                        </div>
                                    </div>
                                )}
                                {hasContent ? (
                                    <Link
                                        to={`/roadmap/${topic.id}/${chapter.id}`}
                                        className="group block bg-white rounded-xl border border-blue-100 p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all dark:bg-slate-900 dark:border-slate-800"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors dark:text-slate-200">
                                                    <span className="text-slate-400 dark:text-slate-500 mr-2">Chapter {chapter.id}.</span>
                                                    {chapter.title}
                                                </h3>
                                                {chapter.description && (
                                                    <p className="mt-1 text-slate-500 text-sm dark:text-slate-400 mb-3">
                                                        {chapter.description}
                                                    </p>
                                                )}
                                                {/* Sections List */}
                                                {chapter.sections && chapter.sections.length > 0 && (
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                                                        {chapter.sections.map(section => (
                                                            <div key={section.id} className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-700 flex items-center">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 shrink-0"></div>
                                                                <span className="truncate">§{section.id} {section.title}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-primary transition-colors" />
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="group block bg-slate-50/50 rounded-xl border border-slate-200 p-6 dark:bg-slate-900/30 dark:border-slate-800 opacity-60">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-500 dark:text-slate-400">
                                                    <span className="mr-2">Chapter {chapter.id}.</span>
                                                    {chapter.title}
                                                </h3>
                                                {chapter.description && (
                                                    <p className="mt-1 text-slate-400 text-sm dark:text-slate-500 mb-3">
                                                        {chapter.description}
                                                    </p>
                                                )}
                                                {chapter.sections && chapter.sections.length > 0 && (
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                                                        {chapter.sections.map(section => (
                                                            <div key={section.id} className="text-sm text-slate-400 dark:text-slate-500 bg-slate-100/50 dark:bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-700 flex items-center">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50 mr-2 shrink-0"></div>
                                                                <span className="truncate">§{section.id} {section.title}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Definition & Proposition List Navigation */}
                    {hasContent && (
                        <div id="topic-list-nav" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link
                                to={`/roadmap/${topic.id}/definitions`}
                                className="group block"
                            >
                                <div className="bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800/50 rounded-xl p-6 hover:shadow-md transition-all hover:border-blue-300 dark:hover:border-blue-700">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                                            <BookText className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                定義一覧
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-sm">
                                                定義をまとめて閲覧 & クイズで確認
                                            </p>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                    </div>
                                </div>
                            </Link>
                            <Link
                                to={`/roadmap/${topic.id}/propositions`}
                                className="group block"
                            >
                                <div className="bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/50 rounded-xl p-6 hover:shadow-md transition-all hover:border-purple-300 dark:hover:border-purple-700">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                                            <ScrollText className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                命題一覧
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-sm">
                                                定理・命題などをまとめて閲覧 & クイズで確認
                                            </p>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-purple-500 transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
