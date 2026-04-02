import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LaplaceInverseSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ラプラス領域での代数計算を終えた後、最終的な解を得るためには結果を時間領域に戻す必要があります。この逆操作を <b>逆ラプラス変換 (Inverse Laplace Transform)</b> と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ブロムウィッチ積分と複素積分</h2>

            <p>
                逆ラプラス変換の厳密な定義は、複素平面上の縦線に沿った積分として与えられます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (ブロムウィッチ積分)">
                <p>
                    <InlineMath math="F(s)" /> の逆ラプラス変換 <InlineMath math="f(t)" /> は、すべての極よりも右側の直線 <InlineMath math="\text{Re}(s) = \sigma" /> に沿った複素積分で計算できる：
                </p>
                <BlockMath math="f(t) = \mathcal{L}^{-1}[F(s)] = \frac{1}{2\pi i} \int_{\sigma - i\infty}^{\sigma + i\infty} F(s) e^{st} ds" />
                <p>
                    実用的には、左半平面を閉じる経路（ジョルダンの補助定理）を用い、留数定理によって計算される：
                </p>
                <BlockMath math="f(t) = \sum_{k} \text{Res}[F(s)e^{st}; s_k]" />
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-1 (留数定理による逆変換計算)">
                <p>
                    <InlineMath math="F(s) = \frac{1}{(s-1)(s-2)}" /> の逆変換を留数定理を用いて求めます。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>極 <InlineMath math="s=1" /> での留数：<InlineMath math="\lim_{s \to 1} (s-1) \frac{e^{st}}{(s-1)(s-2)} = \frac{e^t}{1-2} = -e^t" /></li>
                    <li>極 <InlineMath math="s=2" /> での留数：<InlineMath math="\lim_{s \to 2} (s-2) \frac{e^{st}}{(s-1)(s-2)} = \frac{e^{2t}}{2-1} = e^{2t}" /></li>
                </ul>
                <p>
                    よって、<InlineMath math="f(t) = e^{2t} - e^t" /> となります。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    留数定理を用いて <InlineMath math="f(t)" /> を計算する。<InlineMath math="F(s)e^{st}" /> が有限個の極 <InlineMath math="\{s_k\}" /> を持ち、負の無限遠で急速に減衰する場合、留数の和が時間領域の信号を与える。
                </p>
                <p>
                    例えば、単純極 <InlineMath math="s_k" /> の留数は <InlineMath math="\lim_{s \to s_k} (s-s_k) F(s) e^{st} = C_k e^{s_k t}" /> となり、これは時間領域での指数関数的な項に対応する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分分数分解法と計算例</h2>

            <p>
                実際の問題では、積分を直接計算するよりも、有理関数を単純な項に分解し、既知の変換対応を利用するのが一般的です。
            </p>

            <ContentBox type="proposition" title="Proposition 6.3-2 (部分分数分解法)">
                <p>
                    <InlineMath math="F(s) = \frac{P(s)}{Q(s)}" />（<InlineMath math="\deg P < \deg Q" />）の形の場合、<InlineMath math="Q(s)" /> を因数分解し、各項を逆変換する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (部分分数分解法の正当性)">
                <p>
                    ブロムウィッチ積分の留数定理による表示（Theorem 6.3-1）を考えると、逆ラプラス変換は各極での留数の和：
                    <BlockMath math="f(t) = \sum_k \text{Res}[F(s)e^{st}; s_k]" />
                    で与えられる。
                </p>
                <p>
                    もし <InlineMath math="s_k" /> が単純極であれば、留数は <InlineMath math="c_k e^{s_k t}" />（ここで <InlineMath math="c_k" /> は <InlineMath math="F(s)" /> の極における留数）となる。
                    これは <InlineMath math="F(s)" /> を <InlineMath math="\sum \frac{c_k}{s-s_k}" /> と部分分数分解し、各項を個別に逆変換した結果と完全に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-2 (単純極：異なる実根)">
                <p>
                    <InlineMath math="F(s) = \frac{s+3}{(s+1)(s+2)}" /> の逆変換を求めます。
                </p>
                <p>
                    部分分数分解により：
                </p>
                <BlockMath math="F(s) = \frac{2}{s+1} - \frac{1}{s+2}" />
                <p>
                    これらを逆変換して：
                </p>
                <BlockMath math="f(t) = 2e^{-t} - e^{-2t} \quad (t \geq 0)" />
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-3 (複素共役な極：減衰振動)">
                <p>
                    <InlineMath math="F(s) = \frac{1}{s^2+2s+5} = \frac{1}{(s+1)^2+4}" /> の逆変換を求めます。
                </p>
                <p>
                    標準的な形 <InlineMath math="\frac{\omega}{(s-a)^2+\omega^2}" /> に合わせて整理すると：
                </p>
                <BlockMath math="f(t) = \frac{1}{2} e^{-t} \sin(2t)" />
                <p>
                    実部 $-1$ が減衰時定数を、虚部 $2$ が振動周波数を決定しています。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-4 (重極の場合)">
                <p>
                    <InlineMath math="F(s) = \frac{1}{(s+1)^2}" /> の逆変換を求めます。
                </p>
                <p>
                    §6.1 の表（<InlineMath math="\mathcal{L}[t^1] = 1/s^2" />）と周波数シフト則（<InlineMath math="s \to s+1" />）を用いると：
                </p>
                <BlockMath math="f(t) = t e^{-t}" />
                <p>
                    留数による計算では、<InlineMath math="\frac{d}{ds}[e^{st}]_{s=-1} = t e^{-st}" /> となることからも確認できます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>逆変換は、複素平面上の極における「留数」を集める操作として理解できる。</li>
                    <li>有理関数の場合は、部分分数分解によって既知の基本関数の形に持ち込むのが最も効率的である。</li>
                    <li>極の性質（実根、複素根、重根）が、時間領域での信号の振る舞い（指数減衰、減衰振動、多項式的増大）を決定づけている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
