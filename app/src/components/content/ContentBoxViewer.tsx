import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { getSectionLoader } from '../../utils/sectionLoader';

interface ContentBoxViewerProps {
    /** トピックID (例: "2-1") */
    topicId: string;
    /** チャプターID (例: "1") */
    chapterId: string;
    /** セクションID (例: "1.3") */
    sectionId: string;
    /** マッチさせる ContentBox タイトル文字列 */
    targetTitle: string;
}

/**
 * 指定されたセクションコンポーネントを動的にロードし、
 * ターゲットタイトルに一致する ContentBox のみを表示するコンポーネント。
 */
export default function ContentBoxViewer({ topicId, chapterId, sectionId, targetTitle }: ContentBoxViewerProps) {
    const hiddenRef = useRef<HTMLDivElement>(null);
    const displayRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);
    const [hasError, setHasError] = useState(false);

    const SectionComponent = useMemo(() => {
        const loader = getSectionLoader(topicId, chapterId, sectionId);
        if (!loader) {
            setHasError(true);
            return null;
        }
        return React.lazy(() =>
            (loader() as Promise<{ default: React.ComponentType }>).catch(() => {
                setHasError(true);
                return { default: () => null as React.ReactElement | null };
            })
        );
    }, [topicId, chapterId, sectionId]);

    /** タイトルからユニークな識別子部分を抽出 */
    const titleIdentifier = useMemo(() => {
        const match = targetTitle.match(/^([A-Za-z]+\s+[\d.]+-\d+)/);
        return match ? match[1] : targetTitle.substring(0, Math.min(25, targetTitle.length));
    }, [targetTitle]);

    const extractContent = useCallback(() => {
        const hidden = hiddenRef.current;
        const display = displayRef.current;
        if (!hidden || !display) return false;

        const boxes = hidden.querySelectorAll('div.border-l-4');
        for (const box of boxes) {
            const h4 = box.querySelector('h4');
            if (!h4) continue;
            const text = h4.textContent || '';
            if (text.includes(titleIdentifier)) {
                const clone = box.cloneNode(true) as HTMLElement;
                clone.style.marginTop = '0';
                clone.style.marginBottom = '0';
                display.innerHTML = '';
                display.appendChild(clone);
                return true;
            }
        }
        return false;
    }, [titleIdentifier]);

    useEffect(() => {
        if (isReady || hasError || !SectionComponent) return;

        const hidden = hiddenRef.current;
        if (!hidden) return;

        if (extractContent()) { setIsReady(true); return; }

        const observer = new MutationObserver(() => {
            if (extractContent()) {
                setIsReady(true);
                observer.disconnect();
            }
        });
        observer.observe(hidden, { childList: true, subtree: true });

        const timeout = setTimeout(() => {
            setIsReady(true);
            observer.disconnect();
        }, 5000);

        return () => { observer.disconnect(); clearTimeout(timeout); };
    }, [extractContent, isReady, hasError, SectionComponent]);

    if (hasError || !SectionComponent) {
        return (
            <div className="text-sm text-slate-400 dark:text-slate-500 italic py-2">
                コンテンツの読み込みに失敗しました。
            </div>
        );
    }

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
                <div className="flex justify-center py-6">
                    <div className="animate-spin w-6 h-6 rounded-full border-2 border-blue-100 border-t-blue-500 dark:border-slate-700 dark:border-t-blue-400" />
                </div>
            )}
            <div
                ref={displayRef}
                className={`content-box-viewer prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 transition-opacity duration-200 ${isReady ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
            />
        </>
    );
}
