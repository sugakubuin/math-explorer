import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function InverseMatrixDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                「逆行列」は、実数における「逆数」に相当する概念です。
                <InlineMath math="ax = 1" /> となる <InlineMath math="x" /> が <InlineMath math="1/a" /> であったように、
                行列の世界でも <InlineMath math="AX = I" /> となる <InlineMath math="X" /> を考えます。
                しかし、すべての行列に逆行列が存在するわけではありません。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 逆行列の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">逆行列の定義</h2>

            {/* Definition 5.1-1 */}
            <ContentBox type="definition" title="Definition 5.1-1 （正則行列と逆行列）">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> に対して、
                    <BlockMath math="AX = XA = I" />
                    を満たす <InlineMath math="X" /> が存在するとき、<InlineMath math="A" /> は<strong>正則</strong>（regular, invertible）であるという。
                    この <InlineMath math="X" /> を <InlineMath math="A" /> の<strong>逆行列</strong>（inverse matrix）と呼び、<InlineMath math="A^{-1}" /> で表す。
                </p>
                <BlockMath math="AA^{-1} = A^{-1}A = I" />
            </ContentBox>

            <ContentBox type="note" title="Note">
                <p>
                    逆行列が存在しない行列は、<strong>特異行列</strong>（singular matrix）と呼ばれます。
                </p>
            </ContentBox>

            {/* Theorem 5.1-1 */}
            <ContentBox type="theorem" title="Theorem 5.1-1 （逆行列の一意性）">
                <p>
                    行列 <InlineMath math="A" /> が正則であるとき、その逆行列 <InlineMath math="A^{-1}" /> はただ一つ存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="X" /> と <InlineMath math="Y" /> がともに <InlineMath math="A" /> の逆行列であると仮定する。
                    すなわち、<InlineMath math="AX = XA = I" /> かつ <InlineMath math="AY = YA = I" /> が成り立つとする。
                    このとき、
                </p>
                <BlockMath math="X = XI = X(AY) = (XA)Y = IY = Y" />
                <p>
                    より、<InlineMath math="X = Y" /> でなければならない。
                    したがって、逆行列はただ一つに定まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 正則性条件
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">逆行列の存在条件</h2>

            <p>
                どのようなときに逆行列が存在するのでしょうか。
                実は、前章で学んだ「行列式」がその判定基準になります。
            </p>

            {/* Theorem 5.1-2 */}
            <ContentBox type="theorem" title="Theorem 5.1-2 （正則条件）">
                <p>
                    <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> が正則であること（逆行列を持つこと）と、
                    行列式が <InlineMath math="0" /> でないことは同値である。
                </p>
                <BlockMath math="A \text{ is invertible} \iff \det(A) \neq 0" />
            </ContentBox>

            <ContentBox type="proof" title="Proof Outline">
                <p>
                    <InlineMath math="(\Rightarrow)" /> もし <InlineMath math="A" /> が正則なら、<InlineMath math="AA^{-1} = I" />。
                    両辺の行列式をとると、<InlineMath math="|A||A^{-1}| = |I| = 1" />。
                    よって <InlineMath math="|A| \neq 0" />。
                    <br />
                    <InlineMath math="(\Leftarrow)" /> もし <InlineMath math="|A| \neq 0" /> なら、余因子行列 <InlineMath math="\tilde{A}" /> を用いて
                    <InlineMath math="A \tilde{A} = |A| I" /> が成り立つ。
                    両辺を <InlineMath math="|A|" /> で割れば <InlineMath math="A (\frac{1}{|A|}\tilde{A}) = I" /> となり、逆行列が存在する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* Example 5.1-1 */}
            <ContentBox type="example" title="Example 5.1-1">
                <p>次の行列は正則か判定せよ。</p>
                <p>
                    (1) <InlineMath math="A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    (2) <InlineMath math="B = \begin{pmatrix} 2 & 4 \\ 3 & 6 \end{pmatrix}" />
                </p>
                <p className="font-bold mt-4">解．</p>
                <p>
                    <strong>(1)</strong>
                    行列式は <InlineMath math="2 \cdot 3 - 1 \cdot 5 = 6 - 5 = 1 \neq 0" />。
                    よって正則であり、逆行列を持つ。
                </p>
                <p>
                    <strong>(2)</strong>
                    行列式は <InlineMath math="2 \cdot 6 - 4 \cdot 3 = 12 - 12 = 0" />。
                    よって特異行列であり、逆行列を持たない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>正則行列</strong>: <InlineMath math="AX=I" /> となる逆行列 <InlineMath math="X" /> を持つ行列。</li>
                    <li>逆行列が存在すれば、それは唯一つに定まる。</li>
                    <li>正則である条件は <InlineMath math="\det A \neq 0" />。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
