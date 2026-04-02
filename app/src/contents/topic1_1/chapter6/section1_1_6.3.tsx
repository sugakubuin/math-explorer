import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function EigenvectorCalculation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                固有値 <InlineMath math="\lambda" /> が求まったら、次はそれに対応する「固有ベクトル」を求めます。
                これは、連立1次方程式を解く作業に他なりません。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 固有ベクトルの計算手順
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">固有ベクトルの計算手順</h2>

            <p>
                固有ベクトル <InlineMath math="\mathbf{x}" /> は、以下の斉次連立1次方程式の解として求まります。
            </p>
            <BlockMath math="(A - \lambda I)\mathbf{x} = \mathbf{0}" />
            <p>
                この方程式を、Chapter 3 で学んだガウスの消去法などを用いて解きます。
                ただし、非自明な解（<InlineMath math="\mathbf{x} \neq \mathbf{0}" />）が必ず存在するため、解は一意には定まらず、パラメータ（自由度）を含む形になります。
            </p>

            {/* Example 6.3-1 */}
            <ContentBox type="example" title="Example 6.3-1">
                <p>
                    Example 6.2-1 で求めた固有値 <InlineMath math="\lambda = 2, 5" /> について、
                    行列 <InlineMath math="A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}" /> のそれぞれの固有ベクトルを求めよ。
                </p>
                <p className="font-bold mt-4">解．</p>

                <p className="font-bold text-blue-600 mt-4">(i) <InlineMath math="\lambda = 2" /> のとき</p>
                <p>
                    <InlineMath math="(A - 2I)\mathbf{x} = \mathbf{0}" /> を解く。
                </p>
                <BlockMath math="A - 2I = \begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}" />
                <p>
                    方程式は <InlineMath math="\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />。<br />
                    整理すると <InlineMath math="2x + y = 0" /> となる（2つの式は同じ）。
                </p>
                <p>
                    よって <InlineMath math="y = -2x" />。
                    <InlineMath math="x = c_1" />（定数）とおくと、
                </p>
                <BlockMath math="\mathbf{x} = \begin{pmatrix} c_1 \\ -2c_1 \end{pmatrix} = c_1 \begin{pmatrix} 1 \\ -2 \end{pmatrix} \quad (c_1 \neq 0)" />
                <p>
                    これが <InlineMath math="\lambda = 2" /> に対する固有ベクトルである。
                    代表元として <InlineMath math="\mathbf{p}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}" /> を選ぶことが多い。
                </p>

                <p className="font-bold text-blue-600 mt-4">(ii) <InlineMath math="\lambda = 5" /> のとき</p>
                <p>
                    <InlineMath math="(A - 5I)\mathbf{x} = \mathbf{0}" /> を解く。
                </p>
                <BlockMath math="A - 5I = \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}" />
                <p>
                    方程式は <InlineMath math="\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />。<br />
                    整理すると <InlineMath math="-x + y = 0 \iff x = y" /> となる（第2式は第1式の <InlineMath math="-2" /> 倍）。
                </p>
                <p>
                    <InlineMath math="x = c_2" />（定数）とおくと、
                </p>
                <BlockMath math="\mathbf{x} = \begin{pmatrix} c_2 \\ c_2 \end{pmatrix} = c_2 \begin{pmatrix} 1 \\ 1 \end{pmatrix} \quad (c_2 \neq 0)" />
                <p>
                    これが <InlineMath math="\lambda = 5" /> に対する固有ベクトルである。
                    代表元として <InlineMath math="\mathbf{p}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}" /> を選ぶ。
                </p>
            </ContentBox>

            {/* Example 6.3-2 */}
            <ContentBox type="example" title="Example 6.3-2 （重解を持つ場合）">
                <p>
                    Example 6.2-2 の行列 <InlineMath math="B = \begin{pmatrix} 3 & -1 \\ 1 & 1 \end{pmatrix}" /> の固有ベクトルを求めよ。
                    （固有値は <InlineMath math="\lambda = 2" /> （重解）のみであった。）
                </p>
                <p className="font-bold mt-4">解．</p>
                <p>
                    <InlineMath math="(B - 2I)\mathbf{x} = \mathbf{0}" /> を解く。
                </p>
                <BlockMath math="B - 2I = \begin{pmatrix} 3-2 & -1 \\ 1 & 1-2 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ 1 & -1 \end{pmatrix}" />
                <p>
                    方程式は <InlineMath math="\begin{pmatrix} 1 & -1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />。<br />
                    整理すると <InlineMath math="x - y = 0 \iff x = y" /> となる。
                </p>
                <p>
                    <InlineMath math="x = c" />（定数）とおくと、
                </p>
                <BlockMath math="\mathbf{x} = \begin{pmatrix} c \\ c \end{pmatrix} = c \begin{pmatrix} 1 \\ 1 \end{pmatrix} \quad (c \neq 0)" />
                <p>
                    よって固有ベクトルは <InlineMath math="\mathbf{p} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}" /> の定数倍のみである。
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    この例のように、固有値が重解であっても、独立な固有ベクトルが1つしか見つからない場合があります。
                    （このような場合、行列は対角化できません。詳しくは次節で扱います。）
                </p>
            </ContentBox>

            {/* Example 6.3-3 */}
            <ContentBox type="example" title="Example 6.3-3 （重解で独立な固有ベクトルが複数とれる場合）">
                <p>次の行列の固有ベクトルを求めよ。</p>
                <BlockMath math="C = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    この行列は対角行列なので、対角成分がそのまま固有値になる。
                    固有値は <InlineMath math="\lambda = 2" /> （重解）、<InlineMath math="3" />。
                </p>
                <p className="font-bold text-blue-600 mt-4">(i) <InlineMath math="\lambda = 2" /> のとき</p>
                <p>
                    <InlineMath math="(C - 2I)\mathbf{x} = \mathbf{0}" /> を解く。
                </p>
                <BlockMath math="C - 2I = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}" />
                <p>
                    方程式は <InlineMath math="0x + 0y + z = 0 \Rightarrow z = 0" />。
                    <InlineMath math="x, y" /> には制約がないため、自由に値をとれる。
                </p>
                <p>
                    <InlineMath math="x = c_1, y = c_2" />（定数）とおくと、
                </p>
                <BlockMath math="\mathbf{x} = \begin{pmatrix} c_1 \\ c_2 \\ 0 \end{pmatrix} = c_1 \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \quad ((c_1, c_2) \neq (0, 0))" />
                <p>
                    よって、独立な固有ベクトルとして以下の2つがとれる。
                </p>
                <BlockMath math="\mathbf{p}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \quad \mathbf{p}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}" />
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    このように、重解であっても独立な固有ベクトルが複数（重解の数だけ）見つかる場合もあります。
                    この場合は対角化可能です。
                </p>

                <p className="font-bold text-blue-600 mt-4">(ii) <InlineMath math="\lambda = 3" /> のとき</p>
                <p>
                    同様に計算すると <InlineMath math="x=0, y=0" /> となり、固有ベクトルは <InlineMath math="\mathbf{p}_3 = {}^t(0, 0, 1)" /> となる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="Note">
                <p>
                    固有ベクトルを求める際、もし方程式の解がまた「<InlineMath math="\mathbf{x} = \mathbf{0}" /> のみ」になってしまったら計算ミスです。
                    固有値 <InlineMath math="\lambda" /> が正しく求められていれば、必ず無限個の解（パラメータを含む解）が見つかるはずです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>各固有値 <InlineMath math="\lambda" /> について <InlineMath math="(A-\lambda I)\mathbf{x}=\mathbf{0}" /> を解く。</li>
                    <li>解は定数倍の自由度を持つ（幾何学的には直線や平面などになる）。</li>
                    <li>重解を持つ場合、独立な固有ベクトルの数に注意が必要。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
