import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

type CategoryType = 'confirmation' | 'basic' | 'advanced';

const categoryMeta: Record<CategoryType, { label: string; sublabel: string; color: string; bg: string; border: string; badge: string }> = {
    confirmation: {
        label: '確認問題',
        sublabel: 'Confirmation',
        color: 'text-emerald-700 dark:text-emerald-400',
        bg: 'bg-emerald-50 dark:bg-emerald-950/30',
        border: 'border-emerald-200 dark:border-emerald-800',
        badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400',
    },
    basic: {
        label: '基本問題',
        sublabel: 'Basic',
        color: 'text-blue-700 dark:text-blue-400',
        bg: 'bg-blue-50 dark:bg-blue-950/30',
        border: 'border-blue-200 dark:border-blue-800',
        badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400',
    },
    advanced: {
        label: '発展問題',
        sublabel: 'Advanced',
        color: 'text-amber-700 dark:text-amber-400',
        bg: 'bg-amber-50 dark:bg-amber-950/30',
        border: 'border-amber-200 dark:border-amber-800',
        badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400',
    },
};

export function ExerciseCategory({ type, children }: { type: CategoryType; children: React.ReactNode }) {
    const meta = categoryMeta[type];
    return (
        <div className="mb-12">
            <div className={`flex items-center gap-3 mb-6 pb-3 border-b-2 ${meta.border}`}>
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider ${meta.badge}`}>
                    {meta.sublabel}
                </span>
                <h2 className={`text-xl font-extrabold ${meta.color}`}>
                    {meta.label}
                </h2>
            </div>
            <div className="space-y-6">
                {children}
            </div>
        </div>
    );
}

export function ExerciseProblem({ chapterId, number, children }: { chapterId: string; number: number; children: React.ReactNode }) {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <div className="p-5 sm:p-6">
                <div className="mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wide">
                        問題 {chapterId}.{number}
                    </span>
                </div>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 [&_.katex]:whitespace-nowrap overflow-x-auto overflow-y-hidden hide-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function ExerciseSolution({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
            <button
                onClick={() => setOpen(v => !v)}
                className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
            >
                <CheckCircle2 className="h-4 w-4" />
                <span>{open ? '解答を閉じる' : '解答を見る'}</span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="mt-4 p-4 sm:p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 [&_.katex]:whitespace-nowrap overflow-x-auto overflow-y-hidden hide-scrollbar">
                            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                                解答
                            </div>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
