import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function InverseMatrixCalculation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                逆行列の定義がわかったところで、成分が与えられたときに実際に逆行列を求める方法を学びます。
                ここでは「公式」を使った方法を紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 2次正方行列の逆行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">2次正方行列の逆行列公式</h2>

            {/* Formula 5.2-1 */}
            <ContentBox type="proposition" title="Formula 5.2-1 （2次逆行列の公式）">
                <p>
                    <InlineMath math="2 \times 2" /> 行列 <InlineMath math="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" /> が <InlineMath math="ad-bc \neq 0" /> のとき、
                    その逆行列は次の式で与えられる。
                </p>
                <BlockMath math="A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}" />
                <p>
                    <strong>覚え方</strong>: 主対角成分 <InlineMath math="(a, d)" /> を入れ替え、副対角成分 <InlineMath math="(b, c)" /> の符号を反転させ、行列式の逆数をかける。
                </p>
            </ContentBox>

            {/* Example 5.2-1 */}
            <ContentBox type="example" title="Example 5.2-1">
                <p>次の行列の逆行列を求めよ。</p>
                <BlockMath math="A = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    まず行列式を計算する。
                </p>
                <BlockMath math="|A| = 3 \cdot 2 - 5 \cdot 1 = 6 - 5 = 1" />
                <p>
                    よって逆行列が存在し、公式より
                </p>
                <BlockMath math="A^{-1} = \frac{1}{1} \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}" />
            </ContentBox>

            <ContentBox type="note" title="Verification （検算）">
                <p>
                    求めた行列が本当に逆行列になっているか確認してみましょう。
                </p>
                <BlockMath math="\begin{aligned} AA^{-1} = &\ \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 6-5 & -15+15 \\ 2-2 & -5+6 \end{pmatrix} \\ 
                    = &\ \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 余因子行列による一般公式
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">余因子行列による一般公式</h2>

            <p>
                <InlineMath math="3 \times 3" /> 以上の行列についても、余因子を使った公式が存在します。
            </p>

            {/* Definition 5.2-2 */}
            <ContentBox type="definition" title="Definition 5.2-2 （余因子行列）">
                <p>
                    行列 <InlineMath math="A" /> の各成分 <InlineMath math="a_{ij}" /> を余因子 <InlineMath math="C_{ij}" /> に置き換えて転置した行列
                    <InlineMath math="{}^t C" /> を、<InlineMath math="A" /> の<strong>余因子行列</strong>（adjugate matrix）といい、<InlineMath math="\tilde{A}" /> や <InlineMath math="\text{adj}(A)" /> で表す。
                </p>
                <BlockMath math="\tilde{A} = \begin{pmatrix} C_{11} & C_{21} & \dots \\ C_{12} & C_{22} & \dots \\ \vdots & \vdots & \ddots \end{pmatrix}" />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    注意: 余因子の添字 <InlineMath math="(i, j)" /> が転置されていることに注意してください。
                    <InlineMath math="C_{ij}" /> は <InlineMath math="(j, i)" /> 成分の位置に来ます。
                </p>
            </ContentBox>

            {/* Theorem 5.2-1 */}
            <ContentBox type="theorem" title="Theorem 5.2-1 （逆行列の一般公式）">
                <p>
                    <InlineMath math="|A| \neq 0" /> のとき、逆行列は次式で与えられる。
                </p>
                <BlockMath math="A^{-1} = \frac{1}{|A|} \tilde{A}" />
            </ContentBox>

            {/* Example 5.2-2 */}
            <ContentBox type="example" title="Example 5.2-2 （3次逆行列）">
                <p>
                    次の行列の逆行列を求めよ。
                </p>
                <BlockMath math="B = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 2 \\ 2 & 0 & 1 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    まず行列式を求める（サラスの方法）。
                </p>
                <BlockMath math="|B| = 1 + 8 + 0 - 0 - 0 - 0 = 9" />
                <p>
                    次に各余因子 <InlineMath math="C_{ij}" /> を求める。
                </p>
                <BlockMath math="C_{11} = 1, C_{12} = 4, C_{13} = -2" />
                <BlockMath math="C_{21} = -2, C_{22} = 1, C_{23} = 4" />
                <BlockMath math="C_{31} = 4, C_{32} = -2, C_{33} = 1" />
                <p>
                    これらを並べて転置した余因子行列を作り、<InlineMath math="1/9" /> 倍する。
                </p>
                <BlockMath math="B^{-1} = \frac{1}{9} \begin{pmatrix} 1 & -2 & 4 \\ 4 & 1 & -2 \\ -2 & 4 & 1 \end{pmatrix}" />
            </ContentBox>

            <ContentBox type="note" title="Note">
                <p>
                    <InlineMath math="3 \times 3" /> の場合でも余因子を9個計算するのは大変です。
                    手計算では、次節で紹介する「掃き出し法」の方が計算ミスが少なく推奨されます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="2 \times 2" /> 逆行列は公式 <InlineMath math="\frac{1}{\det A} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}" /> で即答できるように。</li>
                    <li>一般の <InlineMath math="n \times n" /> 逆行列は余因子行列を使って表せる。</li>
                    <li>計算量が多いので、サイズが大きい場合は別の方法（掃き出し法）を使うことが多い。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
