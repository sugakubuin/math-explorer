import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpenCheck } from 'lucide-react';
import { roadmapData, getStageByTopicId } from '../data/roadmapData';
import { hasTopicContent } from '../data/contentAvailability';
import SEO from '../components/seo/SEO';
import MathText from '../components/math/MathText';

export default function ChapterPage() {
    const { topicId, chapterId } = useParams();

    // Find the topic and chapter


    const topic = roadmapData
        .flatMap(stage => stage.topics)
        .find(t => t.id === topicId);

    const stage = topic ? getStageByTopicId(topic.id) : undefined;
    const chapter = topic?.chapters.find(c => c.id === chapterId);
    
    const theme = getStageTheme(stage?.id);

    // Navigation Logic
    const { prev, next } = React.useMemo(() => {
        if (!topic || !chapter) return { prev: null, next: null };

        let prev: { id: string; title: string } | null = null;
        let next: { id: string; title: string } | null = null;

        const currentIndex = topic.chapters.findIndex(c => c.id === chapter.id);

        if (currentIndex > 0) {
            prev = topic.chapters[currentIndex - 1];
        }
        if (currentIndex !== -1 && currentIndex < topic.chapters.length - 1) {
            next = topic.chapters[currentIndex + 1];
        }

        return { prev, next };
    }, [topic, chapter]);

    if (!topic || !chapter) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <SEO title="Chapter not found | Math Explorer" />
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Chapter not found</h1>
                    <Link to={`/roadmap/${topicId}`} className="text-primary hover:underline mt-4 inline-block">
                        Return to {topic?.title || "Topic"}
                    </Link>
                </div>
            </div>
        );
    }

    // コンテンツが存在しないトピックはロードマップにリダイレクト
    if (!hasTopicContent(topic.id)) {
        return <Navigate to="/roadmap" replace />;
    }



    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <SEO 
                title={`${chapter.title} | ${topic.title} | Math Explorer`} 
                description={chapter.description || `${topic.title}の${chapter.title}について学びます。`} 
                url={`/roadmap/${topic.id}/${chapter.id}`}
                jsonLd={{
                    '@type': 'Course',
                    name: `${topic.title} - Chapter ${chapter.id}. ${chapter.title}`,
                    description: chapter.description || `${topic.title}の${chapter.title}について学びます。`,
                    provider: {
                        '@type': 'Organization',
                        name: 'Math Explorer',
                        url: 'https://mathematics-explorer.netlify.app/',
                    },
                    hasCourseInstance: {
                        '@type': 'CourseInstance',
                        name: `Chapter ${chapter.id}. ${chapter.title}`,
                        courseWorkload: `${chapter.sections.length} sections`,
                    },
                }}
            />
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-blue-100 shadow-sm sticky top-16 z-30 dark:bg-slate-900 dark:border-slate-800">
                <div className="container mx-auto px-6 md:px-8 py-4">
                    <div className="flex flex-wrap items-center gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <Link to="/roadmap" className="hover:text-primary transition-colors whitespace-nowrap">ロードマップ</Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <Link to={`/roadmap/${topicId}`} className="hover:text-primary transition-colors whitespace-nowrap">{topic.id} <MathText text={topic.title} /></Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{chapter.id}. <MathText text={chapter.title} /></span>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-6 md:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`h-12 px-4 rounded-lg flex items-center justify-center font-bold text-xl shadow-sm border ${theme.idBox}`}>
                                    <span>{topic.id}</span>
                                </div>
                                <div className="text-xl font-bold text-slate-600 dark:text-slate-400">
                                    <MathText text={topic.title} />
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                                <span className="text-slate-400 dark:text-slate-500 mr-2">Chapter {chapter.id}.</span>
                                <MathText text={chapter.title} />
                            </h1>
                        </div>
                        <p className="text-lg text-slate-600 mb-12 dark:text-slate-400">
                            <MathText text={chapter.description || ''} />
                        </p>

                        {/* Navigation Buttons (Top) */}
                        <div className="flex flex-row gap-2 sm:gap-4 justify-between mb-8">
                            {prev ? (
                                <Link
                                    to={`/roadmap/${topicId}/${prev.id}`}
                                    className="flex-1 flex items-center p-3 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-md transition-all group min-w-0"
                                >
                                    <div className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mr-3 sm:mr-4">
                                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 rotate-180" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                                            <span className="sm:hidden">Prev</span>
                                            <span className="hidden sm:inline">Previous Chapter</span>
                                        </div>
                                        <div className="font-semibold text-xs sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            Chapter {prev.id}. <MathText text={prev.title} />
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}

                            {next ? (
                                <Link
                                    to={`/roadmap/${topicId}/${next.id}`}
                                    className="flex-1 flex items-center justify-end p-3 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-md transition-all group text-right min-w-0"
                                >
                                    <div className="min-w-0">
                                        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                                            <span className="sm:hidden">Next</span>
                                            <span className="hidden sm:inline">Next Chapter</span>
                                        </div>
                                        <div className="font-semibold text-xs sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            Chapter {next.id}. <MathText text={next.title} />
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

                        {/* Section List */}
                        <div className="space-y-4">
                            {chapter.sections && chapter.sections.length > 0 ? (
                                chapter.sections.map((section) => (
                                    <Link
                                        key={section.id}
                                        to={`/roadmap/${topicId}/${chapterId}/${section.id}`}
                                        className="block group"
                                    >
                                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-md transition-all hover:border-blue-200 dark:hover:border-blue-800">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                        §{section.id} <MathText text={section.title} />
                                                    </h3>
                                                    {section.description && (
                                                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                                                            <MathText text={section.description} />
                                                        </p>
                                                    )}
                                                </div>
                                                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                                    <p className="text-slate-500 dark:text-slate-400">No sections available yet.</p>
                                </div>
                            )}
                        </div>

                        {/* Exercise Card */}
                        <div className="mt-8">
                            <Link
                                to={`/roadmap/${topicId}/${chapterId}/exercises`}
                                className="block group"
                            >
                                <div className="bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-800 rounded-xl p-6 hover:shadow-md transition-all hover:border-sky-300 dark:hover:border-sky-700">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400">
                                                <BookOpenCheck className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                                    演習問題
                                                </h3>
                                                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
                                                    この章の理解度を確認する練習問題集
                                                </p>
                                            </div>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-sky-500 transition-colors" />
                                    </div>
                                </div>
                            </Link>
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
