import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LatticeAndFundamentalParallelogram() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                楕円関数論において、複素平面上で二重の周期を持つ関数を扱うための基礎となるのが「格子」という概念です。本節では、格子の厳密な定義と、格子を基準として複素平面を分割する際に現れる「基本周期平行四辺形」について解説します。これらは、後続の章で複素トーラスや楕円関数を構成する際の最も根幹となる幾何学的な枠組みを与えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">格子の定義</h2>

            <p>
                まず、複素平面上に規則的に並ぶ点の集合である格子を定義します。格子は、実数体上では独立な2つの複素数を基底として、その整数係数の線形結合全体として表されます。
            </p>

            <ContentBox type="definition" title={<span>Definition 2.1-1 (<b>格子</b>)</span>}>
                <p>
                    2つの複素数 <InlineMath math="\omega_1, \omega_2 \in \mathbb{C}" /> が実数上で一次独立である、すなわち <InlineMath math="\omega_2/\omega_1 \notin \mathbb{R}" /> を満たすとする。このとき、集合
                </p>
                <BlockMath math="\Lambda = \{m\omega_1 + n\omega_2 \mid m, n \in \mathbb{Z}\}" />
                <p>
                    を複素平面上の<b>格子（lattice）</b>という。また、<InlineMath math="\omega_1, \omega_2" /> をこの格子の<b>基底</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                同じ格子を生成する基底の選び方は一通りではありません。そこで、議論を簡明にするために、基底の順序に対して一定の向き付けを行うのが通例です。
            </p>

            <ContentBox type="definition" title="Definition 2.1-2 (規格化条件)">
                <p>
                    格子の基底 <InlineMath math="\omega_1, \omega_2" /> に対して、
                </p>
                <BlockMath math="\text{Im}\left(\frac{\omega_2}{\omega_1}\right) > 0" />
                <p>
                    を満たすように順序を選ぶ。これを<b>規格化条件</b>と呼ぶ。このとき、比 <InlineMath math="\tau = \omega_2/\omega_1" /> を格子の<b>モジュラス（modulus）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                この規格化条件は、複素平面上で <InlineMath math="\omega_1" /> から <InlineMath math="\omega_2" /> へ向かう角が正の向き（反時計回り）であることを意味します。では、具体的な格子の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-1">
                <p>
                    <InlineMath math="\omega_1 = 1" />、<InlineMath math="\omega_2 = i" /> と選ぶと、格子は <InlineMath math="\Lambda = \mathbb{Z} + i\mathbb{Z}" /> となる。これを<b>ガウス格子</b>と呼ぶ。
                    このとき、<InlineMath math="\text{Im}(i/1) = 1 > 0" /> であり規格化条件を満たす。モジュラスは <InlineMath math="\tau = i" /> である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-2">
                <p>
                    <InlineMath math="\omega_1 = 1" />、<InlineMath math="\omega_2 = e^{2\pi i/3} = -1/2 + i\sqrt{3}/2" /> と選ぶと、格子は正三角形の頂点の集まりとなる。これを<b>アイゼンシュタイン格子</b>と呼ぶ。
                    このときも <InlineMath math="\text{Im}(e^{2\pi i/3}/1) = \sqrt{3}/2 > 0" /> であり、規格化条件を満たす。モジュラスは <InlineMath math="\tau = e^{2\pi i/3}" /> である。
                </p>
            </ContentBox>

            <p>
                ガウス格子は正方形を並べたような配置を、アイゼンシュタイン格子は正六角形（または正三角形）の敷き詰めを構成する最も対称性の高い格子です。これらは今後の議論でも頻繁に登場します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本周期平行四辺形</h2>

            <p>
                格子 <InlineMath math="\Lambda" /> が与えられたとき、複素平面全体は格子点を頂点とする平行四辺形の網の目によって覆い尽くされます。その基本単位となる領域を定義します。
            </p>

            <ContentBox type="definition" title={<span>Definition 2.1-3 (<b>基本周期平行四辺形</b>)</span>}>
                <p>
                    格子 <InlineMath math="\Lambda" /> の基底 <InlineMath math="\omega_1, \omega_2" /> に対して、
                </p>
                <BlockMath math="\Pi = \{s\omega_1 + t\omega_2 \mid 0 \leq s, t < 1\}" />
                <p>
                    で定義される集合を、この基底に関する<b>基本周期平行四辺形</b>（fundamental period parallelogram）と呼ぶ。
                </p>
            </ContentBox>

            <p>
                基本周期平行四辺形は、境界の2辺を含み、残りの2辺を含まない「半開」の領域として定義されています。これにより、複素平面上の任意の点は、ある格子点からの平行移動によってただ一つだけ <InlineMath math="\Pi" /> 内の点と対応づけられます。
            </p>

            <ContentBox type="remark" title="基本領域としての役割">
                <p>
                    基本周期平行四辺形 <InlineMath math="\Pi" /> は、商空間 <InlineMath math="\mathbb{C}/\Lambda" /> の代表元の集合、すなわち<b>基本領域</b>を与えます。楕円関数（二重周期関数）は格子 <InlineMath math="\Lambda" /> による平行移動で不変であるため、そのすべての性質や振る舞いは、単一の基本周期平行四辺形 <InlineMath math="\Pi" /> 上の挙動を調べるだけで完全に決定されます。次節以降で学ぶ留数や零点・極の個数も、この <InlineMath math="\Pi" /> 内での積分を通じて解析されます。
                </p>
            </ContentBox>

            <p>
                先ほど挙げた例について、対応する基本周期平行四辺形の形状を確認しておきましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-3">
                <p>
                    ガウス格子（<InlineMath math="\omega_1 = 1, \omega_2 = i" />）の基本周期平行四辺形は、頂点 <InlineMath math="0, 1, 1+i, i" /> を持つ一辺の長さが1の<b>正方形</b>（の半開領域）となる。
                    一方、アイゼンシュタイン格子（<InlineMath math="\omega_1 = 1, \omega_2 = e^{2\pi i/3}" />）の基本周期平行四辺形は、頂点 <InlineMath math="0, 1, 1+e^{2\pi i/3}, e^{2\pi i/3}" /> を持つ、内角が <InlineMath math="\pi/3, 2\pi/3" /> の<b>菱形</b>となる。
                </p>
            </ContentBox>

            <p>
                このように、格子の基底の選び方によって基本領域の幾何学的な形状が定まります。次節では、この基本周期平行四辺形の対辺を貼り合わせることで得られる「複素トーラス」という幾何学的対象について解説します。
            </p>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>格子 <InlineMath math="\Lambda = \omega_1\mathbb{Z} + \omega_2\mathbb{Z}" /> は実数上で独立な2つの複素数を基底とする点群である。</li>
                    <li>基底には通常 <InlineMath math="\text{Im}(\omega_2/\omega_1) > 0" /> という規格化条件を課す。</li>
                    <li>基本周期平行四辺形 <InlineMath math="\Pi" /> は、楕円関数の挙動を調べるための基本領域として機能する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
