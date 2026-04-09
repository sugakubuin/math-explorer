import { useState, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, BrainCircuit, Shuffle, ArrowRight, RotateCcw, ExternalLink, ListOrdered, Eye } from 'lucide-react';
import { roadmapData, getStageByTopicId } from '../data/roadmapData';
import allContentBoxData from 'virtual:content-box-data';
import { DEFINITION_TYPES, PROPOSITION_TYPES } from '../types/contentBoxTypes';
import type { ContentBoxMeta } from '../types/contentBoxTypes';
import ContentBoxViewer from '../components/content/ContentBoxViewer';
import SEO from '../components/seo/SEO';

const TYPE_LABELS: Record<string, { label: string; color: string }> = {
    definition: { label: 'Definition', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400' },
    theorem: { label: 'Theorem', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400' },
    proposition: { label: 'Proposition', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400' },
    lemma: { label: 'Lemma', color: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400' },
    corollary: { label: 'Corollary', color: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-400' },
};

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

function shuffleArray<T>(arr: T[]): T[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

interface ContentQuizPageProps {
    mode: 'definitions' | 'propositions';
}

export default function ContentQuizPage({ mode }: ContentQuizPageProps) {
    const { topicId } = useParams();
    const [selectedChapters, setSelectedChapters] = useState<Set<string>>(new Set());
    const [isRandom, setIsRandom] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [quizOrder, setQuizOrder] = useState<number[]>([]);
    const [isStarted, setIsStarted] = useState(false);

    const isDefinitionMode = mode === 'definitions';

    const topic = roadmapData
        .flatMap(stage => stage.topics)
        .find(t => t.id === topicId);

    const stage = topic ? getStageByTopicId(topic.id) : undefined;
    const theme = getStageTheme(stage?.id);

    const allItems = useMemo(() => {
        const targetTypes = isDefinitionMode
            ? (DEFINITION_TYPES as readonly string[])
            : (PROPOSITION_TYPES as readonly string[]);
        return allContentBoxData.filter(
            item => item.topicId === topicId && targetTypes.includes(item.type)
        );
    }, [topicId, isDefinitionMode]);

    const chapters = useMemo(() => {
        const chapterIds = [...new Set(allItems.map(d => d.chapterId))];
        return chapterIds
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map(id => ({
                id,
                title: topic?.chapters.find(c => c.id === id)?.title || `Chapter ${id}`,
            }));
    }, [allItems, topic]);

    // 複数選択フィルター: 空 = 全選択
    const filteredItems = useMemo(() => {
        if (selectedChapters.size === 0) return allItems;
        return allItems.filter(d => selectedChapters.has(d.chapterId));
    }, [allItems, selectedChapters]);

    const toggleChapter = useCallback((chapterId: string) => {
        setSelectedChapters(prev => {
            const next = new Set(prev);
            if (next.has(chapterId)) next.delete(chapterId);
            else next.add(chapterId);
            return next;
        });
    }, []);

    const startQuiz = useCallback(() => {
        if (filteredItems.length === 0) return;
        const indices = Array.from({ length: filteredItems.length }, (_, i) => i);
        setQuizOrder(isRandom ? shuffleArray(indices) : indices);
        setCurrentIndex(0);
        setIsRevealed(false);
        setIsStarted(true);
    }, [filteredItems, isRandom]);

    const goNext = useCallback(() => {
        if (currentIndex < quizOrder.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsRevealed(false);
        }
    }, [currentIndex, quizOrder]);

    const goPrev = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setIsRevealed(false);
        }
    }, [currentIndex]);

    const restart = useCallback(() => {
        setIsStarted(false);
        setCurrentIndex(0);
        setIsRevealed(false);
    }, []);

    const currentItem: ContentBoxMeta | null = isStarted && quizOrder.length > 0
        ? filteredItems[quizOrder[currentIndex]] || null
        : null;

    const isFinished = isStarted && currentIndex >= quizOrder.length - 1 && isRevealed;

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

    const listPath = `/roadmap/${topicId}/${isDefinitionMode ? 'definitions' : 'propositions'}`;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* フォントサイズ調整 */}
            <style>{`
                .quiz-answer-area .content-box-viewer .border-l-4 { font-size: 0.95rem; line-height: 1.6; }
                .quiz-answer-area .content-box-viewer .border-l-4 p,
                .quiz-answer-area .content-box-viewer .border-l-4 li { font-size: 0.95rem; line-height: 1.6; }
                .quiz-answer-area .content-box-viewer .border-l-4 .katex { font-size: 1.05em; }
                @media (max-width: 639px) {
                    .quiz-answer-area .content-box-viewer .border-l-4 { font-size: 0.875rem; }
                    .quiz-answer-area .content-box-viewer .border-l-4 p,
                    .quiz-answer-area .content-box-viewer .border-l-4 li { font-size: 0.875rem; }
                }
            `}</style>
            <SEO
                title={`${isDefinitionMode ? '定義' : '命題'}クイズ | ${topic.title} | Math Explorer`}
                description={`${topic.title}の${isDefinitionMode ? '定義' : '命題'}クイズ。タイトルから内容を思い出しましょう。`}
                url={`/roadmap/${topic.id}/${isDefinitionMode ? 'definitions' : 'propositions'}/quiz`}
            />

            {/* Breadcrumb */}
            <div className="bg-white border-b border-blue-100 shadow-sm sticky top-16 z-30 dark:bg-slate-900 dark:border-slate-800">
                <div className="container mx-auto px-6 md:px-8 py-4">
                    <div className="flex flex-wrap items-center gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <Link to="/roadmap" className="hover:text-primary transition-colors whitespace-nowrap">ロードマップ</Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <Link to={`/roadmap/${topicId}`} className="hover:text-primary transition-colors whitespace-nowrap">{topic.id} {topic.title}</Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <Link to={listPath} className="hover:text-primary transition-colors whitespace-nowrap">{isDefinitionMode ? '定義一覧' : '命題一覧'}</Link>
                        <ChevronRight className="h-4 w-4 mx-1 md:mx-2 shrink-0" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">クイズ</span>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-6 md:px-8 py-12">
                <div className="max-w-3xl mx-auto">
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
                            <div className="flex items-center gap-3">
                                <BrainCircuit className={`h-8 w-8 ${isDefinitionMode ? 'text-blue-500' : 'text-purple-500'}`} />
                                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                                    {isDefinitionMode ? '定義' : '命題'}クイズ
                                </h1>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                                タイトルを見て、その内容を思い出しましょう。「確認する」ボタンで内容が表示されます。
                            </p>
                        </div>

                        {!isStarted ? (
                            /* Setup Screen */
                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6">クイズの設定</h2>

                                {/* Chapter Filter: 複数選択トグル */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
                                        出題範囲
                                        <span className="font-normal text-xs text-slate-400 ml-2">
                                            （タップで選択 / 未選択は全チャプター対象）
                                        </span>
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {chapters.map(ch => {
                                            const count = allItems.filter(d => d.chapterId === ch.id).length;
                                            const isActive = selectedChapters.has(ch.id);
                                            return (
                                                <button
                                                    key={ch.id}
                                                    onClick={() => toggleChapter(ch.id)}
                                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                                                        isActive
                                                            ? (isDefinitionMode
                                                                ? 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/40 dark:text-blue-400 dark:border-blue-700'
                                                                : 'bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-900/40 dark:text-purple-400 dark:border-purple-700')
                                                            : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                                                    }`}
                                                >
                                                    Ch.{ch.id} {ch.title} ({count})
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                                        {selectedChapters.size === 0
                                            ? `全チャプターから出題（${allItems.length}問）`
                                            : `選択中のチャプターから出題（${filteredItems.length}問）`}
                                    </p>
                                </div>

                                {/* Order Mode */}
                                <div className="mb-8">
                                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">出題順序</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => setIsRandom(true)}
                                            className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                                                isRandom
                                                    ? (isDefinitionMode
                                                        ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-600'
                                                        : 'border-purple-500 bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-600')
                                                    : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300'
                                            }`}
                                        >
                                            <Shuffle className="h-4 w-4" />
                                            ランダム
                                        </button>
                                        <button
                                            onClick={() => setIsRandom(false)}
                                            className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                                                !isRandom
                                                    ? (isDefinitionMode
                                                        ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-600'
                                                        : 'border-purple-500 bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-600')
                                                    : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300'
                                            }`}
                                        >
                                            <ListOrdered className="h-4 w-4" />
                                            順番通り
                                        </button>
                                    </div>
                                </div>

                                {/* Start Button */}
                                <button
                                    onClick={startQuiz}
                                    disabled={filteredItems.length === 0}
                                    className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed ${
                                        isDefinitionMode
                                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600'
                                            : 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600'
                                    }`}
                                >
                                    クイズを開始（{filteredItems.length}問）
                                </button>
                            </div>
                        ) : (
                            /* Quiz Screen */
                            <div>
                                {/* Progress Bar */}
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
                                        <span>問題 {currentIndex + 1} / {quizOrder.length}</span>
                                        <span>{Math.round(((currentIndex + (isRevealed ? 1 : 0)) / quizOrder.length) * 100)}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className={`h-full rounded-full ${isDefinitionMode ? 'bg-blue-500' : 'bg-purple-500'}`}
                                            initial={false}
                                            animate={{ width: `${((currentIndex + (isRevealed ? 1 : 0)) / quizOrder.length) * 100}%` }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </div>

                                {/* Question Card */}
                                {currentItem && (
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${currentIndex}-${currentItem.title}`}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.2 }}
                                            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
                                        >
                                            {/* Question */}
                                            <div className="p-6 md:p-8">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider ${TYPE_LABELS[currentItem.type]?.color || 'bg-slate-100 text-slate-700'}`}>
                                                        {TYPE_LABELS[currentItem.type]?.label || currentItem.type}
                                                    </span>
                                                    <span className="text-xs text-slate-400 dark:text-slate-500">
                                                        §{currentItem.sectionId}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
                                                    {currentItem.title}
                                                </h3>

                                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                                                    この{isDefinitionMode ? '定義' : '命題'}の内容を思い出せますか？
                                                </p>
                                            </div>

                                            {/* Answer Area */}
                                            {isRevealed ? (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={`quiz-answer-area border-t-2 ${isDefinitionMode ? 'border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/10' : 'border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10'} p-6 md:p-8`}
                                                >
                                                    <ContentBoxViewer
                                                        topicId={currentItem.topicId}
                                                        chapterId={currentItem.chapterId}
                                                        sectionId={currentItem.sectionId}
                                                        targetTitle={currentItem.title}
                                                    />
                                                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                                                        <Link
                                                            to={`/roadmap/${topicId}/${currentItem.chapterId}/${currentItem.sectionId}`}
                                                            className={`inline-flex items-center gap-2 text-sm font-semibold ${isDefinitionMode ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'} hover:underline`}
                                                        >
                                                            <ExternalLink className="h-4 w-4" />
                                                            §{currentItem.sectionId} のページで確認する →
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <div className="p-6 md:p-8 border-t border-slate-100 dark:border-slate-800">
                                                    <button
                                                        onClick={() => setIsRevealed(true)}
                                                        className={`w-full py-3 rounded-xl font-semibold text-white transition-all shadow-sm hover:shadow-md ${
                                                            isDefinitionMode
                                                                ? 'bg-blue-600 hover:bg-blue-700'
                                                                : 'bg-purple-600 hover:bg-purple-700'
                                                        }`}
                                                    >
                                                        <span className="flex items-center justify-center gap-2">
                                                            <Eye className="h-4 w-4" />
                                                            確認する
                                                        </span>
                                                    </button>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                )}

                                {/* Navigation */}
                                <div className="flex items-center justify-between mt-6">
                                    <button
                                        onClick={goPrev}
                                        disabled={currentIndex === 0}
                                        className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        ← 前の問題
                                    </button>

                                    {isFinished ? (
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={restart}
                                                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                            >
                                                <RotateCcw className="h-3.5 w-3.5" />
                                                もう一度
                                            </button>
                                            <Link
                                                to={listPath}
                                                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors ${isDefinitionMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'}`}
                                            >
                                                一覧へ戻る
                                            </Link>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={goNext}
                                            disabled={currentIndex >= quizOrder.length - 1}
                                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                        >
                                            次の問題 <ArrowRight className="h-3.5 w-3.5" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
