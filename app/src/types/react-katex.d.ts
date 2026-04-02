declare module 'react-katex' {
    import { FC, HTMLAttributes } from 'react';

    export interface MathProps extends HTMLAttributes<HTMLSpanElement> {
        math: string;
        block?: boolean;
        errorColor?: string;
        renderError?: (error: Error | TypeError) => JSX.Element;
        settings?: any;
    }

    export const InlineMath: FC<MathProps>;
    export const BlockMath: FC<MathProps>;
}
