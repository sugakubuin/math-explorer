import React from 'react';
import { InlineMath } from 'react-katex';

interface MathTextProps {
    text: string;
}

export default function MathText({ text }: MathTextProps) {
    if (!text) return null;

    // $...$ で文字列を分割
    const parts = text.split(/(\$[^$]+\$)/g);

    return (
        <React.Fragment>
            {parts.map((part, index) => {
                // $ で始まって $ で終わる場合は数式としてレンダリング
                if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
                    const mathExpr = part.slice(1, -1);
                    return <InlineMath key={index} math={mathExpr} />;
                }
                // それ以外は通常のテキストとして出力
                return <React.Fragment key={index}>{part}</React.Fragment>;
            })}
        </React.Fragment>
    );
}
