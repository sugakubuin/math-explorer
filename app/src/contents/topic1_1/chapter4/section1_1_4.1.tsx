import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function Determinant2x2() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                行列式（determinant）は、正方行列に対して定義される「特別な数値」です。
                行列式を使うと、連立方程式の解の公式を作ったり、
                図形の面積や体積の拡大率を知ることができます。
                まずは最も基本的な <InlineMath math="2 \times 2" /> 行列の場合から見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 2次行列式
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">2次行列式</h2>

            {/* Definition 4.1-1 */}
            <ContentBox type="definition" title="Definition 4.1-1 （2次の行列式）">
                <p>
                    <InlineMath math="2 \times 2" /> 行列 <InlineMath math="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" /> に対して、
                    その<strong>行列式</strong>（determinant）を次のように定義し、<InlineMath math="\det(A)" /> や <InlineMath math="|A|" /> で表す。
                </p>
                <BlockMath math="\det(A) = |A| = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc" />
            </ContentBox>

            {/* Example 4.1-1 */}
            <ContentBox type="example" title="Example 4.1-1">
                <p>次の行列の行列式を求めよ。</p>
                <p>
                    (1) <InlineMath math="A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    (2) <InlineMath math="B = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}" />
                </p>
                <p className="font-bold mt-4">解．</p>
                <p>
                    <strong>(1)</strong>
                    <BlockMath math="\det(A) = 3 \cdot 2 - 1 \cdot 5 = 6 - 5 = 1" />
                </p>
                <p>
                    <strong>(2)</strong>
                    <BlockMath math="\det(B) = 1 \cdot 4 - 2 \cdot 2 = 4 - 4 = 0" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 幾何学的意味
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">幾何学的意味（符号付き面積）</h2>

            <p>
                <InlineMath math="ad - bc" /> という値は何を表しているのでしょうか。
                実は、行列によって作られる平行四辺形の面積と密接な関係があります。
            </p>

            {/* Theorem 4.1-1 */}
            <ContentBox type="theorem" title="Theorem 4.1-1 （行列式と面積）">
                <p>
                    2つのベクトル <InlineMath math="\mathbf{a} = \begin{pmatrix} a \\ c \end{pmatrix}, \mathbf{b} = \begin{pmatrix} b \\ d \end{pmatrix}" /> が張る平行四辺形の面積 <InlineMath math="S" /> は、
                    これらを列ベクトルとして並べた行列 <InlineMath math="A = [\mathbf{a}, \mathbf{b}]" /> の行列式の絶対値に等しい。
                </p>
                <BlockMath math="S = |\det(A)| = |ad - bc|" />
                <p>
                    行列式の符号（プラス・マイナス）は、ベクトル <InlineMath math="\mathbf{a}" /> から <InlineMath math="\mathbf{b}" /> への回転の向きに関係しており、
                    「符号付き面積」とも呼ばれる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof Outline">
                <p>
                    簡単のため、<InlineMath math="\mathbf{a}" /> が <InlineMath math="x" /> 軸上にあるように座標を回転させても面積は変わらない。
                    あるいは、ベクトルを極座標表示して計算することで、<InlineMath math="S = |\mathbf{a}||\mathbf{b}|\sin\theta" /> が <InlineMath math="|ad-bc|" /> と一致することを確認できる。
                </p>
                <p className="mt-2">
                    また、図形的に長方形から余分な三角形や台形を引くことで
                    <BlockMath math="(a+b)(c+d) - 2 \cdot \frac{1}{2}bd - 2 \cdot \frac{1}{2}ac - 2 \cdot \frac{1}{2}bc - \dots" />
                    のように計算しても導出できる（<InlineMath math="a,b,c,d > 0" /> の場合などで図を描いてみるとよい）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* Example 4.1-2 */}
            <ContentBox type="example" title="Example 4.1-2">
                <p>
                    2点 <InlineMath math="A(3, 1), B(1, 2)" /> と原点 <InlineMath math="O" /> を頂点とする三角形 <InlineMath math="OAB" /> の面積を求めよ。
                </p>
                <p className="font-bold mt-4">解．</p>
                <p>
                    三角形 <InlineMath math="OAB" /> の面積は、<InlineMath math="\overrightarrow{OA}, \overrightarrow{OB}" /> が張る平行四辺形の面積の半分である。
                </p>
                <BlockMath math="\overrightarrow{OA} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}, \quad \overrightarrow{OB} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}" />
                <p>より、</p>
                <BlockMath math="\begin{aligned}\text{Area} &= \frac{1}{2} \left| \det \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix} \right| = \frac{1}{2} |3 \cdot 2 - 1 \cdot 1| \\ &= \frac{1}{2} |6 - 1| = \frac{5}{2}. \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="2 \times 2" /> 行列式は「たすき掛けの差」: <InlineMath math="ad - bc" />。</li>
                    <li>行列式は、ベクトルが張る平行四辺形の「符号付き面積」を表す。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
