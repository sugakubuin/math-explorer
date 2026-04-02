import React from 'react';

export type ContentBoxType = 'definition' | 'theorem' | 'lemma' | 'proposition' | 'corollary' | 'axiom' | 'example' | 'proof' | 'remark' | 'column' | 'note';

interface ContentBoxProps {
    type: ContentBoxType;
    title?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const styles: Record<ContentBoxType, {
    border: string;
    bg: string;
    text: string;
    titleColor: string;
    icon?: string;
}> = {
    definition: {
        border: 'border-blue-500',
        bg: 'bg-blue-50 dark:bg-blue-950/20',
        text: 'text-slate-800 dark:text-slate-200',
        titleColor: 'text-blue-700 dark:text-blue-400',
    },
    theorem: {
        border: 'border-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-950/20',
        text: 'text-slate-800 dark:text-slate-200',
        titleColor: 'text-purple-700 dark:text-purple-400',
    },
    lemma: {
        border: 'border-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-950/20',
        text: 'text-slate-800 dark:text-slate-200',
        titleColor: 'text-purple-700 dark:text-purple-400',
    },
    proposition: {
        border: 'border-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-950/20',
        text: 'text-slate-800 dark:text-slate-200',
        titleColor: 'text-purple-700 dark:text-purple-400',
    },
    corollary: {
        border: 'border-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-950/20',
        text: 'text-slate-800 dark:text-slate-200',
        titleColor: 'text-purple-700 dark:text-purple-400',
    },
    axiom: {
        border: 'border-red-500',
        bg: 'bg-red-50 dark:bg-red-950/20',
        text: 'text-slate-800 dark:text-slate-200',
        titleColor: 'text-red-700 dark:text-red-400',
    },
    example: {
        border: 'border-emerald-500',
        bg: 'bg-emerald-50 dark:bg-emerald-950/20',
        text: 'text-slate-800 dark:text-slate-200',
        titleColor: 'text-emerald-700 dark:text-emerald-400',
    },
    proof: {
        border: 'border-amber-400', // Yellow was requested, amber is better for visibility
        bg: 'bg-amber-50 dark:bg-amber-950/20',
        text: 'text-slate-700 dark:text-slate-300',
        titleColor: 'text-amber-700 dark:text-amber-400',
    },
    remark: {
        border: 'border-slate-400',
        bg: 'bg-slate-50 dark:bg-slate-800/50',
        text: 'text-slate-700 dark:text-slate-300',
        titleColor: 'text-slate-600 dark:text-slate-400',
    },
    note: { // Alias for remark
        border: 'border-slate-400',
        bg: 'bg-slate-50 dark:bg-slate-800/50',
        text: 'text-slate-700 dark:text-slate-300',
        titleColor: 'text-slate-600 dark:text-slate-400',
    },
    column: {
        border: 'border-rose-500',
        bg: 'bg-rose-50 dark:bg-rose-950/20',
        text: 'text-rose-900 dark:text-rose-100', // Columns often have specific text color
        titleColor: 'text-rose-700 dark:text-rose-400',
    },
};

export default function ContentBox({ type, title, children, className = '' }: ContentBoxProps) {
    const style = styles[type] || styles.note;

    return (
        <div className={`my-8 rounded-lg border-l-4 p-4 md:p-6 shadow-sm overflow-hidden ${style.border} ${style.bg} ${className}`}>
            {title && (
                <h4 className={`text-sm font-bold tracking-wider mb-3 ${style.titleColor}`}>
                    {title}
                </h4>
            )}
            <div className={`leading-relaxed overflow-x-auto overflow-y-hidden hide-scrollbar [&_.katex]:whitespace-nowrap ${style.text}`}>
                {children}
            </div>
        </div>
    );
}
