import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function GaussianElimination() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                前節で学んだ「行基本変形」を使って、与えられた連立方程式の拡大係数行列を「簡約行階段形」に変形し、
                そこから解を読み取るアルゴリズムを<strong>ガウスの消去法</strong>（Gaussian elimination）または<strong>掃き出し法</strong>といいます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 ガウスの消去法のアルゴリズム
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">ガウスの消去法のアルゴリズム</h2>

            <ContentBox type="definition" title="Algorithm 3.3-1 （ガウスの消去法）">
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        <strong>拡大係数行列を作る</strong>: 与えられた連立方程式から行列 <InlineMath math="[A \mid \mathbf{b}]" /> を作る。
                    </li>
                    <li>
                        <strong>前進消去（Forward Elimination）</strong>:
                        <ul className="list-disc list-inside ml-4 mt-1">
                            <li>1列目から順に見ていく。</li>
                            <li>0でない成分を持つ行を選び、一番上に持ってくる（行の入れ替え）。</li>
                            <li>その成分（主成分）を使って、それより下の行の成分をすべて0にする（<InlineMath math="R_i - c R_1" />）。</li>
                            <li>次の列・次の行へ進み、同様の操作を繰り返して<strong>行階段形</strong>にする。</li>
                        </ul>
                    </li>
                    <li>
                        <strong>後退代入（Backward Substitution）</strong>:
                        <ul className="list-disc list-inside ml-4 mt-1">
                            <li>一番下の行から順に見ていく。</li>
                            <li>主成分を1にする（定数倍）。</li>
                            <li>その主成分を使って、それより上の行の成分をすべて0にする。</li>
                            <li>これを繰り返して<strong>簡約行階段形</strong>にする。</li>
                        </ul>
                    </li>
                    <li>
                        <strong>解の読み取り</strong>: 変形後の行列から、対応する方程式を書き下して解を得る。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="note" title="解法の正当性">
                <p>
                    Theorem 3.2-1 より、行基本変形を行っても連立方程式の解集合は変わりません。
                    最終的に得られる簡約行階段形は、それぞれの変数が「定数」または「他の自由変数」で表される形になっており、
                    そこから直接解を読み取ることができます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* Example 3.3-1 */}
            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 3.3-1">
                <p>次の連立方程式をガウスの消去法で解け。</p>
                <BlockMath math="\begin{cases} x + 2y + z = 3 \\ 2x + 5y - z = -4 \\ 3x - 2y - z = 5 \end{cases}" />
                <p className="font-bold mt-4">解．</p>
                <p>拡大係数行列を作る。</p>
                <BlockMath math="\begin{pmatrix} 1 & 2 & 1 & 3 \\ 2 & 5 & -1 & -4 \\ 3 & -2 & -1 & 5 \end{pmatrix}" />

                <p className="mt-4"><strong>Step 1: 1列目の消去</strong></p>
                <p>
                    1行目の <InlineMath math="x" /> の係数「1」を使って、2行目と3行目の <InlineMath math="x" /> を消す。
                    <br />
                    <InlineMath math="R_2 \leftarrow R_2 - 2R_1" />
                    <br />
                    <InlineMath math="R_3 \leftarrow R_3 - 3R_1" />
                </p>
                <BlockMath math="\xrightarrow{R_2-2R_1, R_3-3R_1} \begin{pmatrix} 1 & 2 & 1 & 3 \\ 0 & 1 & -3 & -10 \\ 0 & -8 & -4 & -4 \end{pmatrix}" />

                <p className="mt-4"><strong>Step 2: 2列目の消去</strong></p>
                <p>
                    2行目の <InlineMath math="y" /> の係数「1」を使って、3行目の <InlineMath math="y" /> を消す。
                    <br />
                    <InlineMath math="R_3 \leftarrow R_3 + 8R_2" />
                </p>
                <BlockMath math="\xrightarrow{R_3+8R_2} \begin{pmatrix} 1 & 2 & 1 & 3 \\ 0 & 1 & -3 & -10 \\ 0 & 0 & -28 & -84 \end{pmatrix}" />

                <p className="mt-4"><strong>Step 3: 簡約化（後退代入）</strong></p>
                <p>
                    3行目を <InlineMath math="-28" /> で割って <InlineMath math="z" /> の係数を1にする。
                    <br />
                    <InlineMath math="R_3 \leftarrow -\frac{1}{28}R_3" />
                </p>
                <BlockMath math="\xrightarrow{-\frac{1}{28}R_3} \begin{pmatrix} 1 & 2 & 1 & 3 \\ 0 & 1 & -3 & -10 \\ 0 & 0 & 1 & 3 \end{pmatrix}" />
                <p>
                    この時点で <InlineMath math="z = 3" /> が確定。
                    これを使って上の行の <InlineMath math="z" /> を消す。
                    <br />
                    <InlineMath math="R_2 \leftarrow R_2 + 3R_3" />
                    <br />
                    <InlineMath math="R_1 \leftarrow R_1 - 1R_3" />
                </p>
                <BlockMath math="\xrightarrow{R_2+3R_3, R_1-R_3} \begin{pmatrix} 1 & 2 & 0 & 0 \\ 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & 3 \end{pmatrix}" />
                <p>
                    最後に2行目の <InlineMath math="y" /> を使って1行目の <InlineMath math="y" /> を消す。
                    <br />
                    <InlineMath math="R_1 \leftarrow R_1 - 2R_2" />
                </p>
                <BlockMath math="\xrightarrow{R_1-2R_2} \begin{pmatrix} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & 3 \end{pmatrix}" />

                <p className="mt-4">
                    これより、<InlineMath math="x=2, y=-1, z=3" /> が得られる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>前進消去</strong>: 上から下へ、階段を作るイメージで係数を消していく。</li>
                    <li><strong>後退代入</strong>: 下から上へ、値を確定させて代入していく。</li>
                    <li><strong>簡約行階段形</strong>: 最終形。ここから解が一目でわかる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
