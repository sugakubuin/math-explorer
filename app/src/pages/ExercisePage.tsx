import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Construction, BookOpenCheck } from 'lucide-react';
import SEO from '../components/seo/SEO';
import MathText from '../components/math/MathText';
import { getTopicById, getStageByTopicId } from '../data/roadmapData';
import { hasTopicContent } from '../data/contentAvailability';

export default function ExercisePage() {
    const { topicId, chapterId } = useParams();

    const topic = getTopicById(topicId || '');
    const chapter = topic?.chapters.find(c => c.id === chapterId);
    const stage = topic ? getStageByTopicId(topic.id) : undefined;
    const theme = getStageTheme(stage?.id);

    // Chapter Navigation Logic
    const { prevChapter, nextChapter } = React.useMemo(() => {
        if (!topic || !chapter) return { prevChapter: null, nextChapter: null };
        const idx = topic.chapters.findIndex(c => c.id === chapter.id);
        return {
            prevChapter: idx > 0 ? topic.chapters[idx - 1] : null,
            nextChapter: idx !== -1 && idx < topic.chapters.length - 1 ? topic.chapters[idx + 1] : null,
        };
    }, [topic, chapter]);

    if (!topic || !chapter) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <SEO title="演習問題が見つかりません | Math Explorer" />
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Chapter not found</h1>
                    <Link to={`/roadmap/${topicId}`} className="text-primary hover:underline mt-4 inline-block">
                        Return to Topic
                    </Link>
                </div>
            </div>
        );
    }

    // コンテンツが存在しないトピックはロードマップにリダイレクト
    if (!hasTopicContent(topic.id)) {
        return <Navigate to="/roadmap" replace />;
    }

    const ContentComponent = React.useMemo(() => {
        if (!topicId || !chapterId) return null;
        const topicFormatted = topicId.replace('-', '_');
        return React.lazy(() =>
            import(`../contents/topic${topicFormatted}/chapter${chapterId}/exercises${topicFormatted}_${chapterId}.tsx`)
                .catch(err => {
                    console.error('Failed to load exercises:', err);
                    return {
                        default: () => (
                            <div className="flex flex-col items-center justify-center text-slate-400 text-center py-12">
                                <Construction className="h-16 w-16 mb-4 opacity-50" />
                                <h3 className="text-xl font-bold mb-2">演習問題は準備中です</h3>
                                <p>この章の演習問題はまだ作成されていません。</p>
                            </div>
                        ),
                    };
                })
        );
    }, [topicId, chapterId]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <SEO
                title={`演習問題 | ${chapter.title} | Math Explorer`}
                description={`${topic.title}「${chapter.title}」の演習問題。確認問題・基本問題・発展問題の3段階で理解度を確認します。`}
                url={`/roadmap/${topic.id}/${chapter.id}/exercises`}
                jsonLd={{
                    '@type': 'LearningResource',
                    name: `演習問題 - ${chapter.title}`,
                    description: `${topic.title}「${chapter.title}」の演習問題。確認問題・基本問題・発展問題の3段階で理解度を確認します。`,
                    learningResourceType: 'Exercise',
                    isPartOf: {
                        '@type': 'Course',
                        name: topic.title,
                        url: `https://mathematics-explorer.netlify.app/roadmap/${topic.id}`,
                    },
                    provider: {
                        '@type': 'Organization',
                        name: 'Math Explorer',
                        url: 'https://mathematics-explorer.netlify.app/',
                    },
                }}
            />
            {/* Breadcrumb */}
            <div className="bg-white border-b border-blue-100 shadow-sm sticky top-16 z-30 dark:bg-slate-900 dark:border-slate-800">
                <div className="container mx-auto px-6 md:px-8 py-4">
                    <div className="flex flex-wrap items-center gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <Link to="/roadmap" className="hover:text-primary transition-colors whitespace-nowrap">ロードマップ</Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <Link to={`/roadmap/${topicId}`} className="hover:text-primary transition-colors whitespace-nowrap">{topic.id} <MathText text={topic.title} /></Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <Link to={`/roadmap/${topicId}/${chapterId}`} className="hover:text-primary transition-colors whitespace-nowrap">{chapter.id}. <MathText text={chapter.title} /></Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">演習問題</span>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-6 md:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`h-8 px-3 rounded-md flex items-center justify-center font-bold text-sm shadow-sm border ${theme.idBox}`}>
                                    <span>{topic.id}</span>
                                </div>
                                <div className="font-bold text-slate-600 dark:text-slate-400">
                                    <MathText text={topic.title} />
                                </div>
                            </div>
                            <div className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">
                                <span className="text-slate-400 dark:text-slate-500 mr-2">Chapter {chapter.id}.</span>
                                <MathText text={chapter.title} />
                            </div>
                            <div className="flex items-center gap-3">
                                <BookOpenCheck className="h-8 w-8 text-blue-500" />
                                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                                    演習問題
                                </h1>
                            </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                            この章の理解度を確認しましょう。問題は<strong>確認問題</strong>（基本的な定義・概念の確認）、<strong>基本問題</strong>（計算問題や簡単な証明問題）、<strong>発展問題</strong>（応用・発展的な証明問題）の3段階に分かれています。
                        </p>

                        {/* Chapter Navigation (Top) */}
                        <div className="flex flex-row gap-2 sm:gap-4 justify-between mb-10">
                            {prevChapter ? (
                                <Link
                                    to={`/roadmap/${topicId}/${prevChapter.id}/exercises`}
                                    className="flex-1 flex items-center p-3 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-md transition-all group min-w-0"
                                >
                                    <div className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mr-3 sm:mr-4">
                                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 rotate-180" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Previous</div>
                                        <div className="font-semibold text-xs sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            Chapter {prevChapter.id}. <MathText text={prevChapter.title} />
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}

                            {nextChapter ? (
                                <Link
                                    to={`/roadmap/${topicId}/${nextChapter.id}/exercises`}
                                    className="flex-1 flex items-center justify-end p-3 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-md transition-all group text-right min-w-0"
                                >
                                    <div className="min-w-0">
                                        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Next</div>
                                        <div className="font-semibold text-xs sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            Chapter {nextChapter.id}. <MathText text={nextChapter.title} />
                                        </div>
                                    </div>
                                    <div className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ml-3 sm:ml-4">
                                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}
                        </div>

                        {/* Exercise Content */}
                        <div className="content-container">
                            <style>{`
                                @media (max-width: 639px) {
                                    .content-container .prose { font-size: 0.9rem; line-height: 1.6; }
                                    .content-container .prose p, .content-container .prose li { font-size: 0.9rem; line-height: 1.6; }
                                    .content-container .prose .katex { font-size: 1.05em; }
                                }
                            `}</style>
                            {ContentComponent ? (
                                <React.Suspense
                                    fallback={
                                        <div className="flex justify-center items-center py-24">
                                            <div className="animate-spin w-10 h-10 rounded-full border-4 border-blue-100 border-t-primary dark:border-blue-900 dark:border-t-blue-400" />
                                        </div>
                                    }
                                >
                                    <ContentComponent />
                                </React.Suspense>
                            ) : (
                                <div className="flex flex-col items-center justify-center text-slate-400 text-center py-12">
                                    <Construction className="h-16 w-16 mb-4 opacity-50" />
                                    <h3 className="text-xl font-bold mb-2">演習問題を準備中です</h3>
                                    <p>この章の演習問題はまだ作成されていません。</p>
                                </div>
                            )}
                        </div>

                        {/* Chapter Navigation (Bottom) */}
                        <div className="flex flex-row gap-2 sm:gap-4 justify-between mt-12">
                            {prevChapter ? (
                                <Link
                                    to={`/roadmap/${topicId}/${prevChapter.id}/exercises`}
                                    className="flex-1 flex items-center p-3 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-md transition-all group min-w-0"
                                >
                                    <div className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mr-3 sm:mr-4">
                                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 rotate-180" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Previous</div>
                                        <div className="font-semibold text-xs sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            Chapter {prevChapter.id}. <MathText text={prevChapter.title} />
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}

                            {nextChapter ? (
                                <Link
                                    to={`/roadmap/${topicId}/${nextChapter.id}/exercises`}
                                    className="flex-1 flex items-center justify-end p-3 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-md transition-all group text-right min-w-0"
                                >
                                    <div className="min-w-0">
                                        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Next</div>
                                        <div className="font-semibold text-xs sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            Chapter {nextChapter.id}. <MathText text={nextChapter.title} />
                                        </div>
                                    </div>
                                    <div className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ml-3 sm:ml-4">
                                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

const getStageTheme = (stageId: string | undefined) => {
    switch (stageId) {
        case 'stage-1':
            return { idBox: 'bg-blue-50 border-blue-200 text-blue-700' };
        case 'stage-2':
            return { idBox: 'bg-emerald-50 border-emerald-200 text-emerald-700' };
        case 'stage-3':
            return { idBox: 'bg-amber-50 border-amber-200 text-amber-700' };
        case 'stage-4':
            return { idBox: 'bg-violet-50 border-violet-200 text-violet-700' };
        case 'stage-5':
            return { idBox: 'bg-rose-50 border-rose-200 text-rose-700' };
        case 'stage-applied':
            return { idBox: 'bg-indigo-50 border-indigo-200 text-indigo-700' };
        default:
            return { idBox: 'bg-slate-50 border-slate-200 text-slate-700' };
    }
};
