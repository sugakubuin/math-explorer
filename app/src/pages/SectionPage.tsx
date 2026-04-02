import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Construction } from 'lucide-react';
import { getTopicById, getStageByTopicId } from '../data/roadmapData';
import { hasTopicContent } from '../data/contentAvailability';
import AmazonAffiliate from '../components/ads/AmazonAffiliate';
import AdSense from '../components/ads/AdSense';
import SEO from '../components/seo/SEO';
// Dynamic Import Loading Strategy will handle routing components based on IDs.

export default function SectionPage() {
    const { topicId, chapterId, sectionId } = useParams();

    const topic = getTopicById(topicId || "");
    const chapter = topic?.chapters.find(c => c.id === chapterId);
    const section = chapter?.sections.find(s => s.id === sectionId);
    const stage = topic ? getStageByTopicId(topic.id) : undefined;
    const theme = getStageTheme(stage?.id);

    // Navigation Logic
    const { prev, next } = React.useMemo(() => {
        if (!topic || !chapter || !section) return { prev: null, next: null };

        let prev: { chapterId: string; section: { id: string; title: string } } | null = null;
        let next: { chapterId: string; section: { id: string; title: string } } | null = null;

        // Flatten sections with chapter info for easier traversal within the topic
        const allSections: { chapterId: string; section: typeof section }[] = [];
        topic.chapters.forEach(c => {
            c.sections.forEach(s => {
                allSections.push({ chapterId: c.id, section: s });
            });
        });

        const currentIndex = allSections.findIndex(
            item => item.chapterId === chapter.id && item.section.id === section.id
        );

        if (currentIndex > 0) {
            prev = allSections[currentIndex - 1];
        }
        if (currentIndex !== -1 && currentIndex < allSections.length - 1) {
            next = allSections[currentIndex + 1];
        }

        return { prev, next };
    }, [topic, chapter, section]);

    // Table of Contents Logic
    const [toc, setToc] = React.useState<{ id: string; text: string }[]>([]);
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const updateToc = () => {
            if (!contentRef.current) return;
            const headers = Array.from(contentRef.current.querySelectorAll('h2'));
            const tocData = headers.map((header, index) => {
                if (!header.id) {
                    header.id = `section-header-${index}`;
                }
                return {
                    id: header.id,
                    text: header.textContent || '',
                };
            });

            setToc(prev => {
                if (prev.length === tocData.length && prev.every((item, i) => item.id === tocData[i].id && item.text === tocData[i].text)) {
                    return prev;
                }
                return tocData;
            });
        };

        // Initial update
        updateToc();

        // Setup observer to watch for React.lazy content loading
        if (contentRef.current) {
            const observer = new MutationObserver(() => {
                updateToc();
            });

            observer.observe(contentRef.current, {
                childList: true,
                subtree: true,
                characterData: true
            });

            return () => observer.disconnect();
        }
    }, [topicId, chapterId, sectionId]); // Re-run when page changes

    const scrollToHeader = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (!topic || !chapter || !section) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Section not found</h1>
                    <Link to={`/roadmap/${topicId}/${chapterId}`} className="text-primary hover:underline mt-4 inline-block">
                        Return to {chapter?.title || "Chapter"}
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
        if (!topicId || !chapterId || !sectionId) return null;

        const topicFormatted = topicId.replace('-', '_');
        return React.lazy(() =>
            import(`../contents/topic${topicFormatted}/chapter${chapterId}/section${topicFormatted}_${sectionId}.tsx`)
                .catch(err => {
                    console.error("Failed to load component:", err);
                    return {
                        default: () => (
                            <div className="flex flex-col items-center justify-center text-slate-400 text-center py-12">
                                <Construction className="h-16 w-16 mb-4 opacity-50" />
                                <h3 className="text-xl font-bold mb-2">Content Under Construction</h3>
                                <p>このセクションは準備中です。<br />{sectionId} のコンテンツは未作成です。</p>
                            </div>
                        )
                    };
                })
        );
    }, [topicId, chapterId, sectionId]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <SEO 
                title={`${section.title} | ${topic.title} | Math Explorer`} 
                description={section.description || `${topic.title}の「${section.title}」に関する内容です。`} 
                url={`/roadmap/${topic.id}/${chapter.id}/${section.id}`} 
                type="article"
                jsonLd={{
                    '@type': 'LearningResource',
                    name: `§${section.id} ${section.title}`,
                    description: section.description || `${topic.title}の「${section.title}」に関する内容です。`,
                    learningResourceType: 'Textbook Section',
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
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-blue-100 shadow-sm sticky top-16 z-30 dark:bg-slate-900 dark:border-slate-800">
                <div className="container mx-auto px-6 md:px-8 py-4">
                    <div className="flex flex-wrap items-center gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <Link to="/roadmap" className="hover:text-primary transition-colors whitespace-nowrap">ロードマップ</Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <Link to={`/roadmap/${topicId}`} className="hover:text-primary transition-colors whitespace-nowrap">{topic.id} {topic.title}</Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <Link to={`/roadmap/${topicId}/${chapterId}`} className="hover:text-primary transition-colors whitespace-nowrap">{chapter.id}. {chapter.title}</Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">§{section.id} {section.title}</span>
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
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`h-8 px-3 rounded-md flex items-center justify-center font-bold text-sm shadow-sm border ${theme.idBox}`}>
                                    <span>{topic.id}</span>
                                </div>
                                <div className="font-bold text-slate-600 dark:text-slate-400">
                                    {topic.title}
                                </div>
                            </div>
                            <div className="text-xl font-bold text-slate-700 dark:text-slate-300">
                                <span className="text-slate-400 dark:text-slate-500 mr-2">Chapter {chapter.id}.</span>
                                {chapter.title}
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 dark:text-white">
                            §{section.id} {section.title}
                        </h1>
                        {section.description && (
                            <p className="text-lg text-slate-600 mb-8 dark:text-slate-400">
                                {section.description}
                            </p>
                        )}

                        {/* Top Navigation & TOC Area */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 mb-12 border border-slate-100 dark:border-slate-800">
                            {/* Navigation Buttons (Top) */}
                            <div className="flex flex-row gap-2 sm:gap-4 justify-between mb-8">
                                {prev ? (
                                    <Link
                                        to={`/roadmap/${topicId}/${prev.chapterId}/${prev.section.id}`}
                                        className="flex-1 flex items-center p-3 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-md transition-all group min-w-0"
                                    >
                                        <div className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mr-3 sm:mr-4">
                                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 rotate-180" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Previous</div>
                                            <div className="font-semibold text-xs sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2 sm:truncate">
                                                §{prev.section.id} {prev.section.title}
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="flex-1" />
                                )}

                                {next ? (
                                    <Link
                                        to={`/roadmap/${topicId}/${next.chapterId}/${next.section.id}`}
                                        className="flex-1 flex items-center justify-end p-3 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-md transition-all group text-right min-w-0"
                                    >
                                        <div className="min-w-0">
                                            <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Next</div>
                                            <div className="font-semibold text-xs sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2 sm:truncate">
                                                §{next.section.id} {next.section.title}
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

                            {/* Table of Contents */}
                            {toc.length > 0 && (
                                <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                                        Contents
                                    </h3>
                                    <nav className="flex flex-col gap-2">
                                        {toc.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToHeader(item.id)}
                                                className="text-left text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-1 pl-3 border-l-2 border-transparent hover:border-primary"
                                            >
                                                {item.text}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            )}
                        </div>

                        {/* Top AdSense slot */}
                        <div className="mb-12 mt-4 text-center relative z-0">
                            <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Advertisement</div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800 p-2 sm:p-4 overflow-hidden min-h-[100px] flex items-center justify-center">
                                <AdSense slot="" format="auto" responsive={true} />
                            </div>
                        </div>

                        <div ref={contentRef} className="content-container bg-white rounded-2xl border border-blue-100 p-5 sm:p-8 md:p-12 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            {/* Inline style specifically injected for mobile font scaling without overriding tailwind constraints fully */}
                            <style>{`
                                @media (max-width: 639px) {
                                    .content-container .prose { font-size: 0.9rem; line-height: 1.6; }
                                    .content-container .prose p, .content-container .prose li { font-size: 0.9rem; line-height: 1.6; }
                                    .content-container .prose h1 { font-size: 1.5rem; margin-top: 1.25em; margin-bottom: 0.5em; }
                                    .content-container .prose h2 { font-size: 1.25rem; margin-top: 1.25em; margin-bottom: 0.5em; line-height: 1.4; }
                                    .content-container .prose h3 { font-size: 1.1rem; margin-top: 1em; margin-bottom: 0.5em; line-height: 1.5; }
                                    .content-container .prose .katex { font-size: 1.05em; }
                                    .content-container .content-box-title { font-size: 0.9rem; }
                                    .content-container .prose hr { margin-top: 2em; margin-bottom: 2em; }
                                }
                            `}</style>
                            {ContentComponent ? (
                                <React.Suspense fallback={
                                    <div className="flex justify-center items-center py-24">
                                        <div className="animate-spin w-10 h-10 rounded-full border-4 border-blue-100 border-t-primary dark:border-blue-900 dark:border-t-blue-400" />
                                    </div>
                                }>
                                    <ContentComponent />

                                    <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
                                        <AmazonAffiliate keyword={topic.title} />
                                    </div>
                                </React.Suspense>
                            ) : (
                                <div className="flex flex-col items-center justify-center text-slate-400 text-center py-12">
                                    <Construction className="h-16 w-16 mb-4 opacity-50" />
                                    <h3 className="text-xl font-bold mb-2">Content Not Found</h3>
                                    <p>指定されたセクションが見つかりません。</p>
                                </div>
                            )}
                        </div>

                        {/* Navigation Buttons (Bottom) */}
                        <div className="flex flex-row gap-2 sm:gap-4 justify-between mt-12">
                            {prev ? (
                                <Link
                                    to={`/roadmap/${topicId}/${prev.chapterId}/${prev.section.id}`}
                                    className="flex-1 flex items-center p-3 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-md transition-all group min-w-0"
                                >
                                    <div className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mr-3 sm:mr-4">
                                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 rotate-180" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Previous</div>
                                        <div className="font-semibold text-xs sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2 sm:truncate">
                                            §{prev.section.id} {prev.section.title}
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}

                            {next ? (
                                <Link
                                    to={`/roadmap/${topicId}/${next.chapterId}/${next.section.id}`}
                                    className="flex-1 flex items-center justify-end p-3 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-md transition-all group text-right min-w-0"
                                >
                                    <div className="min-w-0">
                                        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Next</div>
                                        <div className="font-semibold text-xs sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2 sm:truncate">
                                            §{next.section.id} {next.section.title}
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
