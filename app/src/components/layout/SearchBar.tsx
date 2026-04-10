import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, X, ChevronRight, Filter } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { roadmapData, getStageByTopicId } from '../../data/roadmapData';
import { searchIndex } from '../../data/searchIndex';

const getTopicBadgeColor = (topicId: string): string => {
    const stageId = getStageByTopicId(topicId)?.id;
    switch (stageId) {
        case 'stage-1': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
        case 'stage-2': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
        case 'stage-3': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';
        case 'stage-4': return 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300';
        case 'stage-5': return 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300';
        case 'stage-applied': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
        default: return 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300';
    }
};

interface SearchResult {
    topicId: string;
    topicTitle: string;
    chapterId: string;
    chapterTitle: string;
    sectionId: string;
    sectionTitle: string;
    sectionDescription: string;
    matchField: 'title' | 'description' | 'tag';
    matchTags?: string[];
}

/** roadmapData を平坦化して全セクション一覧を作る（初回のみ） */
function buildIndex(): Omit<SearchResult, 'matchField'>[] {
    const entries: Omit<SearchResult, 'matchField'>[] = [];
    for (const stage of roadmapData) {
        for (const topic of stage.topics) {
            for (const chapter of topic.chapters) {
                for (const section of chapter.sections) {
                    const key = `${topic.id}|${chapter.id}|${section.id}`;
                    entries.push({
                        topicId: topic.id,
                        topicTitle: topic.title,
                        chapterId: chapter.id,
                        chapterTitle: chapter.title,
                        sectionId: section.id,
                        sectionTitle: section.title,
                        sectionDescription: section.description ?? '',
                        tags: searchIndex[key] || [],
                    } as any);
                }
            }
        }
    }
    return entries;
}

const MAX_RESULTS = 20;

export default function SearchBar({ isMobile = false }: { isMobile?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    const index = useMemo(() => buildIndex(), []);

    const results = useMemo<SearchResult[]>(() => {
        const q = query.trim().toLowerCase();
        if (q.length === 0) return [];

        const matched: SearchResult[] = [];
        for (const entry of index) {
            if (matched.length >= MAX_RESULTS) break;

            // 分野フィルター (Topic)
            if (selectedTopicId !== 'all' && entry.topicId !== selectedTopicId) {
                continue;
            }

            const tags = (entry as any).tags as string[] || [];
            const matchedTags = tags.filter(t => t.toLowerCase().includes(q));

            if (entry.sectionTitle.toLowerCase().includes(q)) {
                matched.push({ ...entry, matchField: 'title' });
            } else if (matchedTags.length > 0) {
                matched.push({ ...entry, matchField: 'tag', matchTags: matchedTags });
            } else if (entry.sectionDescription.toLowerCase().includes(q)) {
                matched.push({ ...entry, matchField: 'description' });
            } else if (entry.chapterTitle.toLowerCase().includes(q)) {
                matched.push({ ...entry, matchField: 'title' });
            } else if (entry.topicTitle.toLowerCase().includes(q)) {
                matched.push({ ...entry, matchField: 'title' });
            }
        }
        return matched;
    }, [query, index, selectedTopicId]);

    const currentTopicId = useMemo(() => {
        const match = location.pathname.match(/\/roadmap\/([^/]+)/);
        return match ? match[1] : null;
    }, [location.pathname]);

    const topics = useMemo(() => {
        const all = roadmapData.flatMap(s => s.topics.map(t => ({ id: t.id, title: t.title })));
        if (!currentTopicId) return all;

        const current = all.filter(t => t.id === currentTopicId);
        const others = all.filter(t => t.id !== currentTopicId);
        return [...current, ...others];
    }, [currentTopicId]);

    const placeholder = useMemo(() => {
        if (selectedTopicId === 'all') return 'セクションを検索…';
        const topic = topics.find(t => t.id === selectedTopicId);
        return topic ? `${topic.id} ${topic.title} から検索…` : 'セクションを検索…';
    }, [selectedTopicId, topics]);

    const open = useCallback(() => {
        setIsOpen(true);
        // フォーカスを少し遅らせてアニメーション後にフォーカス
        setTimeout(() => inputRef.current?.focus(), 100);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
        setQuery('');
        setIsFilterOpen(false);
    }, []);

    const handleSelect = useCallback(
        (r: SearchResult) => {
            close();
            navigate(`/roadmap/${r.topicId}/${r.chapterId}/${r.sectionId}#section-title`);
        },
        [close, navigate],
    );

    // Escape キーで閉じる
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        if (isOpen) {
            document.addEventListener('keydown', onKeyDown);
            return () => document.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, close]);

    // 外側クリックで閉じる
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                close();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', onClick);
            return () => document.removeEventListener('mousedown', onClick);
        }
    }, [isOpen, close]);

    /** クエリ文字列にマッチした箇所をハイライト */
    const highlight = (text: string) => {
        const q = query.trim();
        if (!q) return text;
        const idx = text.toLowerCase().indexOf(q.toLowerCase());
        if (idx === -1) return text;
        return (
            <>
                {text.slice(0, idx)}
                <span className="text-primary font-semibold">{text.slice(idx, idx + q.length)}</span>
                {text.slice(idx + q.length)}
            </>
        );
    };

    /* ── モバイル版 ── */
    if (isMobile) {
        return (
            <div className="px-4 py-2" ref={containerRef}>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={placeholder}
                        className="w-full pl-9 pr-12 py-2.5 rounded-lg
                            bg-slate-100 dark:bg-slate-800
                            text-slate-700 dark:text-slate-200
                            placeholder:text-slate-400
                            focus:outline-none focus:ring-2 focus:ring-primary/40
                            text-sm transition-colors"
                    />
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className={`absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-md transition-all ${isFilterOpen
                                ? 'bg-primary/10 text-primary'
                                : 'text-slate-400 hover:text-slate-600'
                            }`}
                        aria-label="フィルター"
                    >
                        <Filter className="h-4 w-4" />
                    </button>
                </div>

                {/* Topic Filters (Mobile) */}
                <AnimatePresence>
                    {isFilterOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 flex flex-col gap-1 max-h-[200px] overflow-y-auto no-scrollbar border-t border-slate-100 dark:border-slate-800 pt-2"
                        >
                            <button
                                onClick={() => {
                                    setSelectedTopicId('all');
                                    setIsFilterOpen(false);
                                }}
                                className={`px-4 py-2 text-left text-[11px] font-bold transition-all ${selectedTopicId === 'all'
                                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                                    }`}
                            >
                                すべての分野
                            </button>
                            {topics.map((topic) => (
                                <button
                                    key={topic.id}
                                    onClick={() => {
                                        setSelectedTopicId(topic.id);
                                        setIsFilterOpen(false);
                                    }}
                                    className={`px-4 py-2 text-left text-[11px] font-medium transition-all flex items-center justify-between ${selectedTopicId === topic.id
                                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    <span className="truncate flex items-center gap-1.5">
                                        <span className={`font-mono font-bold px-1 py-0.5 rounded text-[9px] flex-shrink-0 ${getTopicBadgeColor(topic.id)}`}>{topic.id}</span>
                                        {topic.title}
                                    </span>
                                    {topic.id === currentTopicId && (
                                        <span className="ml-2 text-[9px] bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 px-1 py-0.5 rounded leading-none">現在地</span>
                                    )}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {results.length > 0 && (
                    <div className="mt-2 max-h-64 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                        {results.map((r, i) => (
                            <button
                                key={`${r.topicId}-${r.chapterId}-${r.sectionId}-${i}`}
                                onClick={() => handleSelect(r)}
                                className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors border-b last:border-b-0 border-slate-100 dark:border-slate-700"
                            >
                                <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 mb-0.5">
                                    <span>{r.topicTitle}</span>
                                    <ChevronRight className="h-3 w-3" />
                                    <span>Ch.{r.chapterId} {r.chapterTitle}</span>
                                </div>
                                <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                                    §{r.sectionId}　{highlight(r.sectionTitle)}
                                </div>
                                {r.matchField === 'description' && r.sectionDescription && (
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                                        {highlight(r.sectionDescription)}
                                    </div>
                                )}
                                {r.matchField === 'tag' && r.matchTags && (
                                    <div className="flex flex-wrap gap-1 mt-1.5">
                                        {r.matchTags.slice(0, 3).map((tag, idx) => (
                                            <span key={idx} className="text-[10px] bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 px-1.5 py-0.5 rounded border border-blue-100 dark:border-blue-800">
                                                {highlight(tag)}
                                            </span>
                                        ))}
                                        {r.matchTags.length > 3 && <span className="text-[10px] text-slate-400">...</span>}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                )}

                {query.trim().length > 0 && results.length === 0 && (
                    <div className="mt-2 text-center text-sm text-slate-400 py-4">
                        「{query}」に一致するセクションはありません
                    </div>
                )}
            </div>
        );
    }

    /* ── デスクトップ版 ── */
    return (
        <div className="relative" ref={containerRef}>
            {/* トリガーボタン */}
            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.button
                        key="search-icon"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={open}
                        className="p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-blue-50 dark:text-slate-400 dark:hover:text-blue-300 dark:hover:bg-slate-800 transition-colors"
                        aria-label="検索"
                    >
                        <Search className="h-5 w-5" />
                    </motion.button>
                ) : (
                    <motion.div
                        key="search-input"
                        initial={{ width: 40, opacity: 0 }}
                        animate={{ width: 280, opacity: 1 }}
                        exit={{ width: 40, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="flex items-center"
                    >
                        <div className="relative w-full">
                            <div className="relative flex items-center">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder={placeholder}
                                    className="w-full pl-9 pr-8 py-1.5 rounded-lg
                                        bg-slate-100 dark:bg-slate-800
                                        text-slate-700 dark:text-slate-200
                                        placeholder:text-slate-400
                                        focus:outline-none focus:ring-2 focus:ring-primary/40
                                    text-sm transition-colors"
                                />
                                <button
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    className={`absolute right-8 top-1/2 -translate-y-1/2 p-1 rounded-md transition-all ${selectedTopicId !== 'all' || isFilterOpen
                                            ? 'text-primary'
                                            : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                    title="フィルター"
                                >
                                    <Filter className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={close}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Topics & Results Dropdown (Desktop) */}
                            <AnimatePresence>
                                {(query.trim().length > 0 || isFilterOpen) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="absolute right-0 top-full mt-2 w-[400px] bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl z-[110] overflow-hidden flex flex-col"
                                    >
                                        <div className="flex border-b border-slate-100 dark:border-slate-800">
                                            {isFilterOpen && (
                                                <div className="w-[160px] flex-shrink-0 border-r border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 max-h-[300px] overflow-y-auto no-scrollbar">
                                                    <div className="p-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">トピック</div>
                                                    <button
                                                        onClick={() => setSelectedTopicId('all')}
                                                        className={`w-full text-left px-3 py-2 text-[11px] font-bold transition-all ${selectedTopicId === 'all'
                                                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600'
                                                                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                                                            }`}
                                                    >
                                                        すべて
                                                    </button>
                                                    {topics.map((topic) => (
                                                        <button
                                                            key={topic.id}
                                                            onClick={() => {
                                                                setSelectedTopicId(topic.id);
                                                            }}
                                                            className={`w-full text-left px-3 py-2 text-[11px] font-medium transition-all group ${selectedTopicId === topic.id
                                                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600'
                                                                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                                                                }`}
                                                        >
                                                            <div className="truncate flex items-center gap-1.5">
                                                            <span className={`font-mono font-bold px-1 py-0.5 rounded text-[9px] flex-shrink-0 ${getTopicBadgeColor(topic.id)}`}>{topic.id}</span>
                                                            <span className="truncate">{topic.title}</span>
                                                        </div>
                                                            {topic.id === currentTopicId && (
                                                                <div className="text-[9px] text-amber-600 dark:text-amber-400 mt-0.5 font-bold">現在地</div>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex-1 max-h-[300px] overflow-y-auto bg-white dark:bg-slate-900">
                                                {query.trim().length > 0 ? (
                                                    results.length > 0 ? (
                                                        results.map((r, i) => (
                                                            <button
                                                                key={`${r.topicId}-${r.chapterId}-${r.sectionId}-${i}`}
                                                                onClick={() => handleSelect(r)}
                                                                className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors
                                                                    border-b last:border-b-0 border-slate-100 dark:border-slate-800
                                                                    group cursor-pointer"
                                                            >
                                                                <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1 mb-0.5">
                                                                    <span className="truncate">{r.topicTitle}</span>
                                                                    <ChevronRight className="h-3 w-3 flex-shrink-0" />
                                                                    <span className="truncate">Ch.{r.chapterId} {r.chapterTitle}</span>
                                                                </div>
                                                                <div className="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors leading-tight">
                                                                    §{r.sectionId}　{highlight(r.sectionTitle)}
                                                                </div>
                                                                {r.matchField === 'description' && r.sectionDescription && (
                                                                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                                                                        {highlight(r.sectionDescription)}
                                                                    </div>
                                                                )}
                                                                {r.matchField === 'tag' && r.matchTags && (
                                                                    <div className="flex flex-wrap gap-1 mt-1 text-[9px]">
                                                                        {r.matchTags.slice(0, 3).map((tag, idx) => (
                                                                            <span key={idx} className="bg-blue-50/50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 px-1 rounded border border-blue-100/50 dark:border-blue-800/50">
                                                                                #{highlight(tag)}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </button>
                                                        ))
                                                    ) : (
                                                        <div className="p-8 text-center text-slate-400 text-[11px]">
                                                            一致なし
                                                        </div>
                                                    )
                                                ) : (
                                                    <div className="p-8 text-center text-slate-400 text-[11px]">
                                                        {isFilterOpen
                                                            ? 'トピックを選択してください'
                                                            : 'キーワードを入力してください'}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
