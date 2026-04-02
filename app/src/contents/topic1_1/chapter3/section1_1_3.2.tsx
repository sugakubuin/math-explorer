import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function ElementaryRowOperations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                連立方程式の解を変えずに式を変形する操作（加減法や代入法）は、実は行列の行に対する3種類の単純な操作に集約されます。
                これらの操作を通じて行列を簡単な形（階段行列）に変形することが、解法の中核です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 行基本変形
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">行基本変形</h2>

            {/* Definition 3.2-1 */}
            <ContentBox type="definition" title="Definition 3.2-1 （行基本変形）">
                <p>
                    行列の行に対して行う以下の3種類の操作を<strong>行基本変形</strong>（elementary row operations）という。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                    <li>
                        <strong>行の入れ替え</strong>（Row swapping）
                        <BlockMath math="R_i \leftrightarrow R_j" />
                    </li>
                    <li>
                        <strong>ある行を <InlineMath math="c" /> 倍する</strong>（Scalar multiplication, <InlineMath math="c \neq 0" />）
                        <BlockMath math="R_i \leftarrow c R_i" />
                    </li>
                    <li>
                        <strong>ある行に他の行の <InlineMath math="c" /> 倍を加える</strong>（Adding a multiple of one row to another）
                        <BlockMath math="R_i \leftarrow R_i + c R_j" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-1 （行基本変形の具体例）">
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <strong>行の入れ替え</strong>: 1行目と2行目を入れ替える。
                        <BlockMath math="\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \xrightarrow{R_1 \leftrightarrow R_2} \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}" />
                    </li>
                    <li>
                        <strong>ある行を定数倍</strong>: 1行目を3倍する。
                        <BlockMath math="\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \xrightarrow{R_1 \leftarrow 3R_1} \begin{pmatrix} 3 & 6 \\ 3 & 4 \end{pmatrix}" />
                    </li>
                    <li>
                        <strong>ある行に他の行の定数倍を加える</strong>: 2行目に1行目の <InlineMath math="-3" /> 倍を加える（<InlineMath math="3" /> を消去する操作）。
                        <BlockMath math="\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \xrightarrow{R_2 \leftarrow R_2 - 3R_1} \begin{pmatrix} 1 & 2 \\ 3-3(1) & 4-3(2) \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix}" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="note" title="Important （解の保存）">
                <p>
                    拡大係数行列に行基本変形を行っても、対応する連立方程式の<strong>解は変わらない</strong>（同値変形である）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof Outline （同値性の確認）">
                <p>
                    1. <strong>行の入れ替え</strong>: 式の順番を変えるだけなので解は不変。
                </p>
                <p>
                    2. <strong>定数倍</strong>: 両辺を <InlineMath math="c \neq 0" /> 倍しても、<InlineMath math="1/c" /> 倍すれば元に戻るため同値。
                </p>
                <p>
                    3. <strong>定数倍を加える</strong>: <InlineMath math="L_i" /> を <InlineMath math="i" /> 行目の式とすると、
                    新方程式系は <InlineMath math="L_i' = L_i + cL_j" /> となる。<InlineMath math="L_i=0, L_j=0" /> ならば当然 <InlineMath math="L_i'=0" /> も成り立つ。
                    逆の操作（<InlineMath math="-c" /> 倍を加える）で元に戻せるため、解集合は完全に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 階段行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">階段行列</h2>

            <p>
                行基本変形を繰り返して、行列を「階段状」にすることで、方程式を解きやすい形にします。
            </p>

            {/* Definition 3.2-2 */}
            <ContentBox type="definition" title="Definition 3.2-2 （行階段形・簡約行階段形）">
                <p>
                    以下の条件を満たす行列を<strong>行階段形</strong>（Row Echelon Form, REF）という：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>すべての成分が0である行（零行）は、一番下にある。</li>
                    <li>各行の最初の非ゼロ成分（<strong>主成分</strong>またはピボット）は、その上の行の主成分より右側にある。</li>
                    <li>（主成分の下の成分はすべて0である）</li>
                </ul>
                <p className="mt-4">
                    さらに以下の条件も満たすとき、<strong>簡約行階段形</strong>（Reduced Row Echelon Form, RREF）という：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>各行の主成分はすべて <InlineMath math="1" /> である。</li>
                    <li>主成分を含む列において、主成分以外の成分はすべて <InlineMath math="0" /> である。</li>
                </ul>
            </ContentBox>

            {/* Example 3.2-2 */}
            <ContentBox type="example" title="Example 3.2-2 （階段形の例）">
                <p><strong>行階段形 (REF)</strong>:</p>
                <BlockMath math="\begin{pmatrix} \mathbf{2} & 3 & 4 & 5 \\ 0 & \mathbf{1} & -2 & 3 \\ 0 & 0 & 0 & \mathbf{5} \\ 0 & 0 & 0 & 0 \end{pmatrix}" />
                <p>主成分（太字）が右下がりに並んでいる。</p>

                <p className="mt-4"><strong>簡約行階段形 (RREF)</strong>:</p>
                <BlockMath math="\begin{pmatrix} \mathbf{1} & 0 & 3 & 0 \\ 0 & \mathbf{1} & -2 & 0 \\ 0 & 0 & 0 & \mathbf{1} \\ 0 & 0 & 0 & 0 \end{pmatrix}" />
                <p>主成分はすべて1で、その上下は0になっている。</p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 3.2-1 （簡約化の一意性）">
                <p>
                    任意の行列は、行基本変形によってただ一つの簡約行階段形に変形できる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （簡約化の一意性の証明）">
                <p>
                    行列 <InlineMath math="A" /> の簡約行階段形（RREF）が一意であることを、列数 <InlineMath math="n" /> に関する数学的帰納法で証明する。
                </p>
                <p className="mt-2">
                    <strong>1. <InlineMath math="n=1" /> の場合</strong>
                    <br />
                    <InlineMath math="A" /> が零ベクトルなら RREF も零ベクトル（一意）。
                    非零成分を持つなら、行基本変形により第1成分を1、他を0にできる（<InlineMath math="\mathbf{e}_1" />）。これも一意である。
                </p>
                <p className="mt-2">
                    <strong>2. <InlineMath math="n-1" /> 列まで成り立つと仮定する</strong>
                    <br />
                    行列 <InlineMath math="A" /> （<InlineMath math="n" /> 列）から2つの RREF、<InlineMath math="R" /> と <InlineMath math="S" /> が得られたとする。
                    <InlineMath math="R, S" /> の「最初の <InlineMath math="n-1" /> 列」からなる行列を <InlineMath math="R', S'" /> とすると、
                    これらもまた（<InlineMath math="n-1" /> 列の行列としての）RREF の条件を満たす。
                    <InlineMath math="A" /> の最初の <InlineMath math="n-1" /> 列からなる行列 <InlineMath math="A'" /> を考えると、
                    <InlineMath math="R', S'" /> はともに <InlineMath math="A'" /> の RREF であるから、帰納法の仮定より <InlineMath math="R' = S'" />。
                </p>
                <p className="mt-2">
                    あとは最後の <InlineMath math="n" /> 列目が一致することを示せばよい。
                    連立方程式 <InlineMath math="A\mathbf{x} = \mathbf{0}" /> の解集合は行基本変形で不変なので、
                    <InlineMath math="R\mathbf{x} = \mathbf{0}" /> と <InlineMath math="S\mathbf{x} = \mathbf{0}" /> の解集合は一致する。
                    <InlineMath math="R' = S'" /> より、<InlineMath math="R" /> と <InlineMath math="S" /> の違いは <InlineMath math="n" /> 列目だけである。
                </p>
                <ul className="list-disc list-inside ml-4 mt-1">
                    <li>
                        もし <InlineMath math="n" /> 列目が主成分を含む列（ピボット列）なら、
                        RREFの定義よりその主成分は1で、他の成分は0でなければならない。
                        ピボットの位置は <InlineMath math="R'=S'" /> の階数構造によって一意に決まるため、<InlineMath math="R" /> と <InlineMath math="S" /> の <InlineMath math="n" /> 列目は一致する。
                    </li>
                    <li>
                        もし <InlineMath math="n" /> 列目が自由変数の列（主成分を含まない）なら、
                        その列の成分は、<InlineMath math="x_n = 1, x_{k>n}=0" /> としたときの解 <InlineMath math="\mathbf{x}" /> によって一意に定まる
                        （<InlineMath math="x_n" /> を移項してピボット変数で表した係数そのものになるため）。
                        解集合が同じである以上、この係数も一致しなければならない。
                    </li>
                </ul>
                <p className="mt-2">
                    よって <InlineMath math="n" /> 列目も一致し、<InlineMath math="R = S" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>行基本変形</strong>: 行の入れ替え、定数倍、定数倍の加算。これらは解を変えない。</li>
                    <li><strong>階段行列</strong>: 主成分が右下がりに並ぶ行列。</li>
                    <li><strong>簡約化</strong>: 主成分を1にし、その列の他成分を0にする操作。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
