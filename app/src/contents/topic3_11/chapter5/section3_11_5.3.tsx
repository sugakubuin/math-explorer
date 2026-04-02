import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionGramDeterminant() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは外積（体積形式）を用いて体積を定義してきましたが、空間に内積が備わっている場合、ベクトルの長さと角度の情報（内積の値）のみから体積を計算することができます。そのための強力な道具がグラム行列式です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">グラム行列と体積</h2>

            <p className="leading-relaxed">
                まず、与えられたベクトルの組に対して、互いの内積を並べた行列を定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 5.3-1 (グラム行列)"
            >
                <p>
                    内積空間 <InlineMath math="V" /> 上のベクトル <InlineMath math="v_1, \ldots, v_k" /> に対して、成分が内積で与えられる <InlineMath math="k \times k" /> 行列
                    <BlockMath math="G_{ij} = \langle v_i, v_j \rangle \quad (1 \leq i, j \leq k)" />
                    を<strong>グラム行列（Gram matrix）</strong>という。
                </p>
                <p>
                    この行列の行列式 <InlineMath math="\det G" /> を、<InlineMath math="v_1, \ldots, v_k" /> の<strong>グラミアン（Gramian）</strong>またはグラム行列式と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このグラム行列式は、ベクトルたちが張る図形の「体積の 2 乗」に等しいという極めて美しい幾何学的意味を持ちます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 5.3-1 (グラム行列式と体積)"
            >
                <p>
                    ベクトル <InlineMath math="v_1, \ldots, v_k \in V" /> が張る平行体の <InlineMath math="k" /> 次元体積（<InlineMath math="k" /> 次元ルベーグ測度）を <InlineMath math="\mathrm{vol}_k(v_1, \ldots, v_k)" /> とすると、その 2 乗はグラム行列式に等しい。
                    <BlockMath math="\mathrm{vol}_k(v_1, \ldots, v_k)^2 = \det G" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    まず <InlineMath math="k = n" />（フルランク）の場合を考える。<InlineMath math="v_i" /> を正規直交基底の線形結合として <InlineMath math="v_i = \sum_j A_{ji} e_j" /> と書く。すると、行列 <InlineMath math="A" /> の列ベクトルが <InlineMath math="v_i" /> となる。
                </p>
                <p>
                    このとき、内積の性質からグラム行列 <InlineMath math="G" /> は行列の積 <InlineMath math="A^T A" /> に等しくなる。行列式の性質から、
                    <BlockMath math="\det G = \det(A^T A) = \det(A^T)\det(A) = (\det A)^2" />
                    となる。一方、体積形式による定義より、正規直交基底における行列の行列式 <InlineMath math="\det A" /> は符号付き体積そのものであり、その 2 乗は体積の 2 乗 <InlineMath math="\mathrm{vol}_n^2" /> に等しい。
                </p>
                <p>
                    <InlineMath math="k < n" /> の場合は、<InlineMath math="v_1, \ldots, v_k" /> が張る <InlineMath math="k" /> 次元の部分空間に制限して考えれば、同様の議論が適用でき、グラム行列は変わらないため定理が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 5.3-1 (<InlineMath math="\mathbb{R}^3" /> での三角形の面積)</span>}
            >
                <p>
                    <InlineMath math="\mathbb{R}^3" /> において、<InlineMath math="v_1 = (1, 0, 0), v_2 = (0, 1, 0)" /> が張る平行四辺形の面積を考える。グラム行列は
                    <BlockMath math="G = \begin{pmatrix} \langle v_1, v_1 \rangle & \langle v_1, v_2 \rangle \\ \langle v_2, v_1 \rangle & \langle v_2, v_2 \rangle \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}" />
                    となる。
                </p>
                <p>
                    この行列式は <InlineMath math="\det G = 1" /> であるため、平行四辺形の面積の 2 乗は 1 であり、面積は 1 となる。これらを 2 辺とする三角形の面積はその半分であるため <InlineMath math="1/2" /> である。これは直感と一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">グラム行列式と線形独立性</h2>

            <p className="leading-relaxed">
                体積が 0 になることはベクトルが「ペシャンコに潰れている」、すなわち線形従属であることと同値でした。したがって、グラム行列式はベクトルの線形独立性を判定する強力なツールになります。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 5.3-1"
            >
                <p>
                    ベクトル <InlineMath math="v_1, \ldots, v_k" /> が線形従属であるための必要十分条件は、そのグラム行列式が <InlineMath math="0" /> になることである。
                    <BlockMath math="v_1, \ldots, v_k \text{ が線形従属} \iff \det G = 0" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    行列 <InlineMath math="A" /> を、列ベクトルが <InlineMath math="v_i" /> となる行列とする。前述の通り <InlineMath math="G = A^T A" /> である。
                </p>
                <p>
                    <InlineMath math="G" /> の核（kernel）を考える。<InlineMath math="Gx = 0" /> とすると、<InlineMath math="x^T G x = 0" /> より <InlineMath math="x^T A^T A x = 0" />、すなわち <InlineMath math="\|Ax\|^2 = 0" /> となり、<InlineMath math="Ax = 0" /> を得る。逆も明らかである。
                    したがって、<InlineMath math="\ker G = \ker A" /> である。
                </p>
                <p>
                    <InlineMath math="\det G = 0" /> は <InlineMath math="G" /> が正則でない（<InlineMath math="\ker G \neq \{0\}" />）ことと同値であり、それは <InlineMath math="\ker A \neq \{0\}" />、すなわち列ベクトル <InlineMath math="v_1, \ldots, v_k" /> が線形従属であることと同値である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.3-2 (3 ベクトルのグラム行列式)"
            >
                <p>
                    <InlineMath math="\mathbb{R}^3" /> において、<InlineMath math="v_1 = (1, 1, 0), v_2 = (0, 1, 1), v_3 = (1, 2, 1)" /> とする。ここで <InlineMath math="v_3 = v_1 + v_2" /> であるため、これらは線形従属である。
                </p>
                <p>
                    グラム行列を計算すると、
                    <BlockMath math="G = \begin{pmatrix} 2 & 1 & 3 \\ 1 & 2 & 3 \\ 3 & 3 & 6 \end{pmatrix}" />
                    となる。第 3 行が第 1 行と第 2 行の和になっているため、この行列の行列式は <InlineMath math="\det G = 0" /> である。
                    これは、3つのベクトルが 2次元の平面内に収まっており、それらが張る 3次元の「体積」が 0 になっていることを示している。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="グラム行列式と微分幾何"
            >
                <p>
                    多様体論（4-5）において、リーマン多様体の局所座標における計量テンソルの行列式を <InlineMath math="g" /> とおくと、体積素子は <InlineMath math="\sqrt{\det g} \, dx^1 \wedge \cdots \wedge dx^n" /> で与えられます。この <InlineMath math="\sqrt{\det g}" /> という係数は、まさに Theorem 5.3-1 の局所的な表現に他なりません。内積（計量）さえあれば空間の体積を計算できるという事実は、一般相対性理論などにおいても本質的な役割を果たします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ベクトルの組の内積を並べた行列をグラム行列といい、その行列式（グラミアン）はベクトルが張る平行体の体積の 2 乗に等しい。</li>
                    <li>グラム行列式を計算することで、空間の次元や座標の選び方によらず、内積の情報のみから体積を求めることができる。</li>
                    <li>グラム行列式が <InlineMath math="0" /> になることは、ベクトルの組が線形従属であることの必要十分条件である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
