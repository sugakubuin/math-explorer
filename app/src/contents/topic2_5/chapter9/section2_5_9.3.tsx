import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IsometriesInMetricSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                位相空間において「同相」という概念が空間を同一視する基準であったように、
                距離空間においては「距離の構造を完全に保つか」という、より厳しい同一視の基準が必要となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">等長写像の定義</h2>

            <p>
                距離を数値として保存する写像を定義します。
            </p>

            <ContentBox type="definition" title="Definition 9.3-1 (等長写像・等長同型)">
                <p>
                    距離空間 <InlineMath math="(X, d_X)" /> から <InlineMath math="(Y, d_Y)" /> への写像 <InlineMath math="f: X \to Y" /> が<strong>等長写像 (Isometry)</strong> であるとは、
                    任意の <InlineMath math="x, x' \in X" /> に対して
                    <BlockMath math="d_Y(f(x), f(x')) = d_X(x, x')" />
                    が成り立つことをいう。
                </p>
                <p className="mt-4">
                    さらに、 <InlineMath math="f" /> が全単射であるとき、これを<strong>等長同型写像</strong>と呼び、 <InlineMath math="X" /> と <InlineMath math="Y" /> は<strong>等長同型</strong>であるという。
                </p>
            </ContentBox>

            <p className="mt-4">
                等長写像は、単に位相（開集合の集まり）を保つだけでなく、空間の「サイズ」や「形状」に関する情報を完全に維持します。
            </p>

            <ContentBox type="example" title="Example 9.3-1 (等長写像の例)">
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>平面 <InlineMath math="\mathbb{R}^2" /> における回転、平行移動、鏡映はすべて等長同型である。</li>
                    <li>包含写像 <InlineMath math="i: [0, 1] \to \mathbb{R}" /> は全射ではないが等長写像である。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">等長写像の性質</h2>

            <p>
                等長写像は距離を保つため、自動的に非常に強い連続性や単射性が保証されます。
            </p>

            <ContentBox type="proposition" title="Proposition 9.3-1 (等長写像の位相的性質)">
                <p>
                    等長写像 <InlineMath math="f: X \to Y" /> に対して、次が成り立つ：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li><InlineMath math="f" /> は単射である。</li>
                    <li><InlineMath math="f" /> は一様連続（したがって連続）である。</li>
                    <li>全単射な等長写像（等長同型）は、同相写像である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="f(x) = f(y)" /> ならば <InlineMath math="d_Y(f(x), f(y)) = 0" /> である。等長性より <InlineMath math="d_X(x, y) = 0" /> となり、距離の公理より <InlineMath math="x = y" /> となる。よって単射である。
                </p>
                <p className="mt-4">
                    (2) 任意の <InlineMath math="\varepsilon > 0" /> に対し、 <InlineMath math="\delta = \varepsilon" /> ととれば、
                    <InlineMath math="d_X(x, y) < \delta \implies d_Y(f(x), f(y)) = d_X(x, y) < \varepsilon" />
                    となり、一様連続性が証明される。
                </p>
                <p className="mt-4">
                    (3) <InlineMath math="f" /> が全単射な等長写像であるとする。(2) より <InlineMath math="f" /> は連続である。
                    また、逆写像 <InlineMath math="f^{-1}: Y \to X" /> についても、任意の <InlineMath math="y, y' \in Y" /> に対し、
                    <BlockMath math="\begin{aligned} d_X(f^{-1}(y), f^{-1}(y')) &= d_Y(f(f^{-1}(y)), f(f^{-1}(y')))\\ &= d_Y(y, y') \end{aligned}" />
                    が成り立つため、 <InlineMath math="f^{-1}" /> も等長写像である。
                    したがって <InlineMath math="f^{-1}" /> も連続であり、 <InlineMath math="f" /> は同相写像となる。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <ContentBox type="remark" title="同相との違い">
                <p>
                    同相は「ゴムのように伸び縮みしてもよい」という緩い基準でしたが、等長同型は「距離を 1 ミリも変えてはならない」という非常に厳しい基準です。
                    例えば、大きな円と小さな円は数学的（位相的）には同相ですが、等長同型ではありません。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>等長写像</strong>： 2点間の距離を不変に保つ写像。</li>
                    <li><strong>自動的な性質</strong>： 等長写像は常に単射かつ連続となる。</li>
                    <li><strong>同一視の基準</strong>： 距離空間としての本質的な違いがないことを「等長同型」で表現する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
