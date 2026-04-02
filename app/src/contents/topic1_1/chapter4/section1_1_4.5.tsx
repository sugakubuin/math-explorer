import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function CramersRule() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                行列式の応用の一つとして、連立1次方程式の解を「公式」として与えるクラメルの公式があります。
                歴史的にはガウスの消去法より前に発見されましたが、計算量が多いため実用計算には向きません。
                しかし、理論的な解析や文字式を含む方程式には非常に有用です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 クラメルの公式
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">クラメルの公式</h2>

            {/* Theorem 4.5-1 */}
            <ContentBox type="theorem" title="Theorem 4.5-1 （クラメルの公式）">
                <p>
                    <InlineMath math="n" /> 元連立1次方程式 <InlineMath math="A\mathbf{x} = \mathbf{b}" /> において、
                    係数行列 <InlineMath math="A" /> の行列式が <InlineMath math="|A| \neq 0" /> ならば、解 <InlineMath math="\mathbf{x} = {}^t(x_1, \dots, x_n)" /> は一意に定まり、以下の式で与えられる。
                </p>
                <BlockMath math="x_j = \frac{|A_j|}{|A|} \quad (j=1, 2, \dots, n)" />
                <p>
                    ここで <InlineMath math="A_j" /> は、行列 <InlineMath math="A" /> の第 <InlineMath math="j" /> 列を定数項ベクトル <InlineMath math="\mathbf{b}" /> に置き換えた行列である。
                </p>
                <BlockMath math="A_j = [\mathbf{a}_1, \dots, \mathbf{a}_{j-1}, \mathbf{b}, \mathbf{a}_{j+1}, \dots, \mathbf{a}_n]" />
            </ContentBox>

            <ContentBox type="proof" title="Proof Outline">
                <p>
                    解 <InlineMath math="\mathbf{x}" /> が存在するとき、<InlineMath math="\mathbf{b} = x_1\mathbf{a}_1 + \dots + x_n\mathbf{a}_n" /> と書ける。
                    行列式 <InlineMath math="|A_j| = |\mathbf{a}_1, \dots, \mathbf{b}, \dots, \mathbf{a}_n|" /> の <InlineMath math="\mathbf{b}" /> にこの式を代入し、行列式の多重線形性を使って展開する。
                    <InlineMath math="\mathbf{a}_k (k \neq j)" /> を含む項は同じ列が2つあるため0になり、<InlineMath math="x_j\mathbf{a}_j" /> の項だけが残る。
                    よって <InlineMath math="|A_j| = x_j |A|" /> となり、<InlineMath math="|A| \neq 0" /> より <InlineMath math="x_j = \frac{|A_j|}{|A|}" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* Example 4.5-1 */}
            <ContentBox type="example" title="Example 4.5-1 （クラメルの公式による解法）">
                <p>次の連立方程式をクラメルの公式を用いて解け。</p>
                <BlockMath math="\begin{cases} 2x + 3y = 7 \\ 5x - y = 9 \end{cases}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    まず係数行列 <InlineMath math="A" /> の行列式を計算する。
                </p>
                <BlockMath math="|A| = \begin{vmatrix} 2 & 3 \\ 5 & -1 \end{vmatrix} = 2(-1) - 3 \cdot 5 = -2 - 15 = -17" />
                <p>
                    次に、<InlineMath math="x" /> に対応する行列式 <InlineMath math="|A_1|" /> を計算する（第1列を定数項 <InlineMath math="\begin{pmatrix} 7 \\ 9 \end{pmatrix}" /> に置き換える）。
                </p>
                <BlockMath math="|A_1| = \begin{vmatrix} 7 & 3 \\ 9 & -1 \end{vmatrix} = 7(-1) - 3 \cdot 9 = -7 - 27 = -34" />
                <p>
                    次に、<InlineMath math="y" /> に対応する行列式 <InlineMath math="|A_2|" /> を計算する（第2列を定数項に置き換える）。
                </p>
                <BlockMath math="|A_2| = \begin{vmatrix} 2 & 7 \\ 5 & 9 \end{vmatrix} = 2 \cdot 9 - 7 \cdot 5 = 18 - 35 = -17" />
                <p>
                    よって、
                </p>
                <BlockMath math="x = \frac{|A_1|}{|A|} = \frac{-34}{-17} = 2, \quad y = \frac{|A_2|}{|A|} = \frac{-17}{-17} = 1" />
                <p>
                    解は <InlineMath math="(x, y) = (2, 1)" />。
                </p>
            </ContentBox>

            <ContentBox type="note" title="Note （計算量の問題）">
                <p>
                    <InlineMath math="n" /> 変数の連立方程式を解くとき、ガウスの消去法の計算量は <InlineMath math="O(n^3)" /> ですが、
                    クラメルの公式を定義通り計算すると <InlineMath math="(n+1)" /> 個の行列式計算が必要となり、計算量が非常に大きくなります（<InlineMath math="n!" /> のオーダー）。
                    そのため、数値計算ではガウスの消去法（LU分解）が使われます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§4.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>クラメルの公式</strong>: 解を行列式の比で表す公式。</li>
                    <li><InlineMath math="|A| \neq 0" /> のときに限り使える（一意解の場合）。</li>
                    <li>手計算は <InlineMath math="2 \times 2, 3 \times 3" /> くらいまで。大きな系では非効率。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
