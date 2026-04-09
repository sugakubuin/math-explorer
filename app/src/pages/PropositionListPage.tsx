import React, { useMemo, useRef, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ScrollText } from 'lucide-react';
import { roadmapData, getStageByTopicId } from '../data/roadmapData';
import allContentBoxData from 'virtual:content-box-data';
import { PROPOSITION_TYPES } from '../types/contentBoxTypes';
import { getSectionLoader } from '../utils/sectionLoader';
import AdSense from '../components/ads/AdSense';
import SEO from '../components/seo/SEO';

const getStageTheme = (stageId: string | undefined) => {
    switch (stageId) {
        case 'stage-1': return { idBox: 'bg-blue-50 border-blue-200 text-blue-700' };
        case 'stage-2': return { idBox: 'bg-emerald-50 border-emerald-200 text-emerald-700' };
        case 'stage-3': return { idBox: 'bg-amber-50 border-amber-200 text-amber-700' };
        case 'stage-4': return { idBox: 'bg-violet-50 border-violet-200 text-violet-700' };
        case 'stage-5': return { idBox: 'bg-rose-50 border-rose-200 text-rose-700' };
        case 'stage-applied': return { idBox: 'bg-indigo-50 border-indigo-200 text-indigo-700' };
        default: return { idBox: 'bg-slate-50 border-slate-200 text-slate-700' };
    }
};

function SectionBoxExtractor({ topicId, chapterId, sectionId, filterBorderClasses }: {
    topicId: string;
    chapterId: string;
    sectionId: string;
    filterBorderClasses: string[];
}) {
    const hiddenRef = useRef<HTMLDivElement>(null);
    const displayRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);
    const navigate = useNavigate();

    const SectionComponent = useMemo(() => {
        const loader = getSectionLoader(topicId, chapterId, sectionId);
        if (!loader) return null;
        return React.lazy(() =>
            (loader() as Promise<{ default: React.ComponentType }>).catch(() => ({
                default: () => null as React.ReactElement | null,
            }))
        );
    }, [topicId, chapterId, sectionId]);

    useEffect(() => {
        if (isReady || !SectionComponent) return;

        const extract = () => {
            const hidden = hiddenRef.current;
            const display = displayRef.current;
            if (!hidden || !display) return false;

            const boxes = Array.from(hidden.querySelectorAll('div.border-l-4'));
            let found = false;
            boxes.forEach((box, index) => {
                const hasMatch = filterBorderClasses.some(cls => box.classList.contains(cls));
                if (hasMatch) {
                    const clone = box.cloneNode(true) as HTMLElement;
                    clone.style.marginTop = '0';
                    clone.style.marginBottom = '0';
                    
                    const container = document.createElement('div');
                    container.className = 'mb-10';
                    container.appendChild(clone);
                    
                    const linkWrapper = document.createElement('div');
                    linkWrapper.className = 'flex justify-end mt-2 mr-2';
                    const link = document.createElement('a');
                    link.href = `/roadmap/${topicId}/${chapterId}/${sectionId}#content-box-${index}`;
                    link.className = 'text-sm font-medium text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors flex items-center gap-1 cursor-pointer';
                    link.innerHTML = `<span>§${sectionId} で確認する</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
                    link.onclick = (e) => {
                        e.preventDefault();
                        navigate(`/roadmap/${topicId}/${chapterId}/${sectionId}#content-box-${index}`);
                    };
                    linkWrapper.appendChild(link);
                    container.appendChild(linkWrapper);

                    display.appendChild(container);
                    found = true;
                }
            });
            return found;
        };

        const hidden = hiddenRef.current;
        if (!hidden) return;

        if (extract()) { setIsReady(true); return; }

        const observer = new MutationObserver(() => {
            if (extract()) {
                setIsReady(true);
                observer.disconnect();
            }
        });
        observer.observe(hidden, { childList: true, subtree: true });

        const timeout = setTimeout(() => {
            setIsReady(true);
            observer.disconnect();
        }, 8000);

        return () => { observer.disconnect(); clearTimeout(timeout); };
    }, [isReady, SectionComponent, filterBorderClasses]);

    if (!SectionComponent) return null;

    return (
        <>
            <div ref={hiddenRef} style={{ position: 'absolute', left: '-9999px', width: '700px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                <React.Suspense fallback={null}>
                    <div className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
                        <SectionComponent />
                    </div>
                </React.Suspense>
            </div>
            {!isReady && (
                <div className="flex justify-center py-3">
                    <div className="animate-spin w-5 h-5 rounded-full border-2 border-purple-100 border-t-purple-500 dark:border-slate-700 dark:border-t-purple-400" />
                </div>
            )}
            <div
                ref={displayRef}
                className={`transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
            />
        </>
    );
}

export default function PropositionListPage() {
    const { topicId } = useParams();

    const topic = roadmapData
        .flatMap(stage => stage.topics)
        .find(t => t.id === topicId);

    const stage = topic ? getStageByTopicId(topic.id) : undefined;
    const theme = getStageTheme(stage?.id);

    const propositions = useMemo(() => {
        return allContentBoxData.filter(
            item => item.topicId === topicId && (PROPOSITION_TYPES as readonly string[]).includes(item.type)
        );
    }, [topicId]);

    // セクション単位でグループ化（重複ロードを防ぐ）
    const sectionsByChapter = useMemo(() => {
        const chapterMap: Record<string, { chapterId: string; chapterTitle: string; sections: string[] }> = {};
        for (const prop of propositions) {
            if (!chapterMap[prop.chapterId]) {
                chapterMap[prop.chapterId] = {
                    chapterId: prop.chapterId,
                    chapterTitle: topic?.chapters.find(c => c.id === prop.chapterId)?.title || '',
                    sections: [],
                };
            }
            if (!chapterMap[prop.chapterId].sections.includes(prop.sectionId)) {
                chapterMap[prop.chapterId].sections.push(prop.sectionId);
            }
        }
        return Object.values(chapterMap).sort((a, b) => parseInt(a.chapterId) - parseInt(b.chapterId));
    }, [propositions, topic]);

    const scrollToChapter = (chapterId: string) => {
        const element = document.getElementById(`prop-chapter-${chapterId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

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

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <SEO
                title={`命題一覧 | ${topic.title} | Math Explorer`}
                description={`${topic.title}の命題一覧。全${propositions.length}件の定理・命題・補題をチャプター別に確認できます。`}
                url={`/roadmap/${topic.id}/propositions`}
            />

            {/* Breadcrumb */}
            <div className="bg-white border-b border-blue-100 shadow-sm sticky top-16 z-30 dark:bg-slate-900 dark:border-slate-800">
                <div className="container mx-auto px-6 md:px-8 py-4">
                    <div className="flex flex-wrap items-center gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <Link to="/roadmap" className="hover:text-primary transition-colors whitespace-nowrap">ロードマップ</Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <Link to={`/roadmap/${topicId}`} className="hover:text-primary transition-colors whitespace-nowrap">{topic.id} {topic.title}</Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">命題一覧</span>
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
                                    {topic.title}
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <ScrollText className="h-8 w-8 text-purple-500" />
                                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                                    命題一覧
                                </h1>
                                <span className="text-sm text-slate-400 dark:text-slate-500 self-end mb-1">({propositions.length}件)</span>
                            </div>

                        </div>

                        {/* Table of Contents */}
                        {sectionsByChapter.length > 0 && (
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 mb-8 border border-slate-100 dark:border-slate-800">
                                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                                    Contents
                                </h3>
                                <nav className="flex flex-col gap-2">
                                    {sectionsByChapter.map(({ chapterId, chapterTitle }) => (
                                        <button
                                            key={chapterId}
                                            onClick={() => scrollToChapter(chapterId)}
                                            className="text-left text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-1 pl-3 border-l-2 border-transparent hover:border-primary"
                                        >
                                            Chapter {chapterId}. {chapterTitle}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        )}

                        {/* Top AdSense slot */}
                        <div className="mb-12 mt-4 text-center relative z-0">
                            <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Advertisement</div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800 p-2 sm:p-4 overflow-hidden min-h-[100px] flex items-center justify-center">
                                <AdSense slot="" format="auto" responsive={true} />
                            </div>
                        </div>

                        {/* モバイル用のフォントサイズ調整（セクションページと同じ） */}
                        <style>{`
                            @media (max-width: 639px) {
                                .prop-list-content .prose { font-size: 0.9rem; line-height: 1.6; }
                                .prop-list-content .prose p, .prop-list-content .prose li { font-size: 0.9rem; line-height: 1.6; }
                                .prop-list-content .prose .katex { font-size: 1.05em; }
                            }
                        `}</style>

                        {/* Proposition List - チャプター別に連続表示 */}
                        <div className="prop-list-content space-y-10">
                            {sectionsByChapter.map(({ chapterId, chapterTitle, sections }) => (
                                <div key={chapterId} id={`prop-chapter-${chapterId}`}>
                                    <h2 className="text-base font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2 sticky top-28 bg-slate-50 dark:bg-slate-950 py-2 z-20">
                                        <span className="text-slate-400 dark:text-slate-500">Chapter {chapterId}.</span>
                                        {chapterTitle}
                                    </h2>
                                    <div className="bg-white rounded-2xl border border-blue-100 p-5 sm:p-8 md:p-12 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                                        <div className="prose prose-slate dark:prose-invert max-w-none">
                                            {sections.sort((a, b) => parseFloat(a) - parseFloat(b)).map(sectionId => (
                                                <SectionBoxExtractor
                                                    key={`${chapterId}-${sectionId}`}
                                                    topicId={topicId!}
                                                    chapterId={chapterId}
                                                    sectionId={sectionId}
                                                    filterBorderClasses={['border-purple-500']}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Floating Quiz Button */}
            <Link
                to={`/roadmap/${topicId}/propositions/quiz`}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 inline-flex items-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
                クイズで確認
            </Link>
        </div>
    );
}
