import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function CharacteristicEquation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                定義だけでは、無限にある <InlineMath math="\lambda" /> の候補からどのように固有値を見つければよいのかわかりません。
                ここでは、前回学んだ「行列式」を使って固有値を計算する方法を導きます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 特性方程式の導出
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">特性方程式の導出</h2>

            <p>
                固有値・固有ベクトルの定義式を変形してみましょう。
            </p>
            <BlockMath math="A\mathbf{x} = \lambda \mathbf{x} \iff A\mathbf{x} - \lambda \mathbf{x} = \mathbf{0} \iff (A - \lambda I)\mathbf{x} = \mathbf{0}" />
            <p>
                ここで、<InlineMath math="\mathbf{x} \neq \mathbf{0}" /> という条件が重要です。
                もし行列 <InlineMath math="(A - \lambda I)" /> が逆行列を持てば、
                <InlineMath math="\mathbf{x} = (A - \lambda I)^{-1}\mathbf{0} = \mathbf{0}" /> となってしまい、<InlineMath math="\mathbf{x} \neq \mathbf{0}" /> に矛盾します。
            </p>
            <p className="mt-2">
                したがって、<InlineMath math="\mathbf{x} \neq \mathbf{0}" /> なる解が存在するためには、
                <InlineMath math="(A - \lambda I)" /> が逆行列を持たない（特異行列である）必要があります。
                つまり、その行列式が <InlineMath math="0" /> でなければなりません。
            </p>

            {/* Definition 6.2-1 */}
            <ContentBox type="definition" title="Definition 6.2-1 （特性方程式）">
                <p>
                    <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> の固有値 <InlineMath math="\lambda" /> は、次の方程式の解として得られる。
                </p>
                <BlockMath math="\det(A - \lambda I) = 0" />
                <p>
                    この方程式を <InlineMath math="A" /> の<strong>特性方程式</strong>（characteristic equation）といい、
                    左辺の多項式 <InlineMath math="\phi_A(\lambda) = \det(A - \lambda I)" /> を<strong>特性多項式</strong>という。
                </p>
            </ContentBox>

            {/* Example 6.2-1 */}
            <ContentBox type="example" title="Example 6.2-1">
                <p>次の行列の固有値を求めよ。</p>
                <BlockMath math="A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    特性方程式 <InlineMath math="\det(A - \lambda I) = 0" /> を解く。
                </p>
                <BlockMath math="A - \lambda I = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} - \lambda \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix}" />
                <p>
                    行列式を計算すると、
                </p>
                <BlockMath math="
                    \begin{aligned}
                    \det(A - \lambda I) &= (4-\lambda)(3-\lambda) - 1 \cdot 2 \\
                    &= \lambda^2 - 7\lambda + 12 - 2 \\
                    &= \lambda^2 - 7\lambda + 10 \\
                    &= (\lambda - 2)(\lambda - 5)
                    \end{aligned}
                " />
                <p>
                    よって、特性方程式 <InlineMath math="(\lambda - 2)(\lambda - 5) = 0" /> より、
                    固有値は <InlineMath math="\lambda = 2, 5" />。
                </p>
            </ContentBox>

            {/* Example 6.2-2 */}
            <ContentBox type="example" title="Example 6.2-2 （重解を持つ場合）">
                <p>次の行列の固有値を求めよ。</p>
                <BlockMath math="B = \begin{pmatrix} 3 & -1 \\ 1 & 1 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    特性方程式 <InlineMath math="\det(B - \lambda I) = 0" /> を解く。
                </p>
                <BlockMath math="
                    \begin{aligned}
                    \det(B - \lambda I) &= (3-\lambda)(1-\lambda) - (-1) \cdot 1 \\
                    &= \lambda^2 - 4\lambda + 3 + 1 \\
                    &= \lambda^2 - 4\lambda + 4 \\
                    &= (\lambda - 2)^2
                    \end{aligned}
                " />
                <p>
                    よって <InlineMath math="(\lambda - 2)^2 = 0" /> より、
                    固有値は <InlineMath math="\lambda = 2" /> （重解）。
                </p>
            </ContentBox>

            <ContentBox type="note" title="Note">
                <p>
                    対角行列や三角行列の固有値は、その対角成分と一致します。
                    これは <InlineMath math="\det(A - \lambda I)" /> が対角成分の積（Theorem 4.4-3）になることから直ちにわかります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 トレースと行列式
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">固有値とトレース・行列式の関係</h2>

            <p>
                固有値 <InlineMath math="\lambda_1, \lambda_2" /> と、行列の成分には美しい関係があります。
                その前に、新しい言葉を一つ定義しておきましょう。
            </p>

            {/* Definition 6.2-2 */}
            <ContentBox type="definition" title="Definition 6.2-2 （トレース）">
                <p>
                    正方行列 <InlineMath math="A" /> の対角成分の総和を、<InlineMath math="A" /> の<strong>トレース</strong>（trace, 跡）といい、
                    <InlineMath math="\text{tr}(A)" /> で表す。
                </p>
                <BlockMath math="\text{tr}(A) = a_{11} + a_{22} + \dots + a_{nn} = \sum_{i=1}^n a_{ii}" />
            </ContentBox>

            <p className="mt-4">
                このトレースと行列式は、実は固有値と非常に深い関係があります。
            </p>

            {/* Theorem 6.2-1 */}
            <ContentBox type="theorem" title="Theorem 6.2-1 （解と係数の関係）">
                <p>
                    <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> の固有値を <InlineMath math="\lambda_1, \lambda_2, \dots, \lambda_n" /> （重解を含む）とすると、
                    以下の関係が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <strong>和</strong>: <InlineMath math="\sum_{i=1}^n \lambda_i = \text{tr}(A)" /> （固有値の総和はトレースに等しい）
                    </li>
                    <li>
                        <strong>積</strong>: <InlineMath math="\prod_{i=1}^n \lambda_i = \det(A)" /> （固有値の総積は行列式に等しい）
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof Outline">
                <p>
                    特性多項式 <InlineMath math="\phi_A(\lambda) = \det(A - \lambda I)" /> を考える。
                    これは <InlineMath math="\lambda" /> の <InlineMath math="n" /> 次多項式であり、固有値 <InlineMath math="\lambda_1, \dots, \lambda_n" /> を根に持つため、次のように因数分解できる。
                </p>
                <BlockMath math="\det(A - \lambda I) = (-1)^n (\lambda - \lambda_1)(\lambda - \lambda_2) \dots (\lambda - \lambda_n)" />
                <p>
                    この式の両辺の係数を比較する。
                </p>
                <p>
                    <strong>(1) <InlineMath math="\lambda^{n-1}" /> の係数</strong><br />
                    右辺を展開したときの <InlineMath math="\lambda^{n-1}" /> の係数は<br />
                    <InlineMath math="(-1)^n \times (-\sum \lambda_i) = (-1)^{n+1} \sum \lambda_i" />。<br />
                    一方、左辺の行列式を展開したとき、<InlineMath math="\lambda^{n-1}" /> の項は対角成分の積 <InlineMath math="(a_{11}-\lambda)\dots(a_{nn}-\lambda)" /> からのみ現れる。<br />
                    その係数は <InlineMath math="(-1)^{n-1} \sum a_{ii} = (-1)^{n-1} \text{tr}(A)" />。<br />
                    よって <InlineMath math="\sum \lambda_i = \text{tr}(A)" />。
                </p>
                <p>
                    <strong>(2) 定数項（<InlineMath math="\lambda=0" />）</strong><br />
                    両辺に <InlineMath math="\lambda = 0" /> を代入すると、
                    左辺は <InlineMath math="\det(A)" />。<br />
                    右辺は <InlineMath math="(-1)^n (-\lambda_1)\dots(-\lambda_n) = (-1)^{2n} \prod \lambda_i = \prod \lambda_i" />。<br />
                    よって <InlineMath math="\prod \lambda_i = \det(A)" />。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="Verification">
                <p>
                    先ほどの例 <InlineMath math="A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}" /> で確認してみましょう。
                    固有値は <InlineMath math="2, 5" /> でした。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li>和: <InlineMath math="2 + 5 = 7" />。一方 <InlineMath math="\text{tr}(A) = 4 + 3 = 7" />。（一致）</li>
                    <li>積: <InlineMath math="2 \times 5 = 10" />。一方 <InlineMath math="\det(A) = 12 - 2 = 10" />。（一致）</li>
                </ul>
                <p>
                    計算ミスを防ぐための検算として非常に有効です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>固有値は特性方程式 <InlineMath math="\det(A - \lambda I) = 0" /> の解として求まる。</li>
                    <li>特性多項式は <InlineMath math="n" /> 次方程式であり、最大で <InlineMath math="n" /> 個の固有値（重解含む）を持つ。</li>
                    <li>固有値の和はトレース、積は行列式に等しい。</li>
                </ul>
            </ContentBox>
        </section >
    );
}
