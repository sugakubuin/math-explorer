import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeierstrassEllipticCurves() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章までに、ワイエルシュトラスの <InlineMath math="\wp" /> 関数が満たす微分方程式 <InlineMath math="(\wp')^2 = 4\wp^3 - g_2\wp - g_3" /> について学びました。本節では、この方程式から自然に定まる代数曲線である「楕円曲線」を導入します。とくに、判別式 <InlineMath math="\Delta \neq 0" /> という条件が曲線の非特異性とどのように結びついているかを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ワイエルシュトラス形式の楕円曲線</h2>

            <p>
                <InlineMath math="\wp" /> 関数の微分方程式を動機として、複素平面（あるいは射影平面）上の代数曲線を定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (ワイエルシュトラス形式の楕円曲線)">
                <p>
                    複素数 <InlineMath math="g_2, g_3 \in \mathbb{C}" /> が判別式条件 <InlineMath math="\Delta = g_2^3 - 27g_3^2 \neq 0" /> を満たすとする。このとき、アフィン方程式
                </p>
                <BlockMath math="E : y^2 = 4x^3 - g_2 x - g_3" />
                <p>
                    によって定まる曲線を<b>ワイエルシュトラス形式の楕円曲線（Weierstrass form of an elliptic curve）</b>と呼ぶ。厳密には、これを射影平面 <InlineMath math="\mathbb{CP}^2" /> に埋め込み、同次方程式 <InlineMath math="Y^2 Z = 4X^3 - g_2 X Z^2 - g_3 Z^3" /> で考え、無限遠点 <InlineMath math="O = [0:1:0]" /> を加えたものを楕円曲線とする。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1">
                <p>
                    <InlineMath math="g_2 = 4" />, <InlineMath math="g_3 = 0" /> の場合を考える。方程式は
                </p>
                <BlockMath math="y^2 = 4x^3 - 4x = 4x(x-1)(x+1)" />
                <p>
                    となる。このとき、判別式は <InlineMath math="\Delta = 4^3 - 27(0)^2 = 64 \neq 0" /> であり、非特異な楕円曲線を定める。
                </p>
            </ContentBox>

            <p>
                代数曲線が「滑らか」である（特異点を持たない）ことは、幾何学的に非常に重要です。楕円曲線の場合、この滑らかさは判別式がゼロでないことと同値になります。
            </p>

            <ContentBox type="proposition" title="Proposition 5.1-1">
                <p>
                    条件 <InlineMath math="\Delta \neq 0" /> は、アフィン曲線 <InlineMath math="E : y^2 = 4x^3 - g_2 x - g_3" /> が非特異（すべての点で接線がただ一つ定まる）であるための必要十分条件である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    多項式 <InlineMath math="F(x,y) = y^2 - 4x^3 + g_2 x + g_3" /> を考える。曲線上の点 <InlineMath math="(x,y)" /> が特異点であるとは、<InlineMath math="F(x,y) = 0" /> かつ偏微分 <InlineMath math="F_x(x,y) = 0, F_y(x,y) = 0" /> が同時に成り立つことである。
                </p>
                <BlockMath math="F_x = -12x^2 + g_2 = 0 \implies g_2 = 12x^2" />
                <BlockMath math="F_y = 2y = 0 \implies y = 0" />
                <p>
                    <InlineMath math="y = 0" /> を元の方程式 <InlineMath math="F(x,y) = 0" /> に代入すると、<InlineMath math="-4x^3 + g_2 x + g_3 = 0" /> を得る。<InlineMath math="g_2 = 12x^2" /> を代入して、
                </p>
                <BlockMath math="\begin{aligned} -4x^3 + (12x^2)x + g_3 = 0 &\implies 8x^3 + g_3 = 0 \\ &\implies g_3 = -8x^3 \end{aligned}" />
                <p>
                    したがって、特異点が存在するための必要十分条件は、ある <InlineMath math="x" /> について <InlineMath math="g_2 = 12x^2" /> かつ <InlineMath math="g_3 = -8x^3" /> となることである。このとき判別式を計算すると、
                </p>
                <BlockMath math="\begin{aligned} \Delta &= g_2^3 - 27g_3^2 \\ &= (12x^2)^3 - 27(-8x^3)^2 \\ &= 1728x^6 - 1728x^6 = 0 \end{aligned}" />
                <p>
                    となる。逆に <InlineMath math="\Delta = 0" /> であれば、右辺の3次式が重根を持つため特異点が生じる。よって、<InlineMath math="\Delta \neq 0" /> は特異点が存在しないための必要十分条件である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特異点の例</h2>

            <p>
                判別式がゼロになる場合、曲線はどのような特異点を持つのか、具体的な例で確認しましょう。
            </p>

            <ContentBox type="example" title="Example 5.1-2">
                <p>
                    <InlineMath math="\Delta = 0" /> となる代表的な2つのケースを挙げる。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <b>尖点（カスプ）の例：</b> <InlineMath math="g_2 = 0, g_3 = 0" /> のとき、方程式は <InlineMath math="y^2 = 4x^3" /> となる。<InlineMath math="\Delta = 0" /> であり、原点 <InlineMath math="(0,0)" /> において微分が消え、幾何学的には尖った点（カスプ）を持つ。
                    </li>
                    <li>
                        <b>結節点（ノード）の例：</b> 右辺が重根を持つように <InlineMath math="y^2 = 4x^2(x-1)" /> （すなわち <InlineMath math="y^2 = 4x^3 - 4x^2" />、変数をシフトしてワイエルシュトラス標準形に直すと <InlineMath math="\Delta = 0" /> となる）を考える。この曲線は原点 <InlineMath math="(0,0)" /> において自身と交差し、2つの異なる接線を持つ結節点となる。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="remark" title="楕円関数論との整合性">
                <p>
                    Chapter 3 (§3.5) にて、格子 <InlineMath math="\Lambda" /> に付随する <InlineMath math="g_2, g_3" /> から作られる判別式 <InlineMath math="\Delta" /> が常に <InlineMath math="0" /> でないことを示しました。これは、任意の複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> から作られる代数曲線が、常に特異点を持たない滑らかな曲線になることを保証しています。楕円曲線という言葉は、まさにこの「<InlineMath math="\Delta \neq 0" />」という条件によって非特異性を獲得した種数1の代数曲線を指します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ワイエルシュトラス形式の楕円曲線は <InlineMath math="y^2 = 4x^3 - g_2 x - g_3" /> で定義され、無限遠点 <InlineMath math="O" /> を持つ。</li>
                    <li>曲線が非特異（滑らか）であるための必要十分条件は、判別式 <InlineMath math="\Delta = g_2^3 - 27g_3^2 \neq 0" /> である。</li>
                    <li><InlineMath math="\Delta = 0" /> の場合、曲線は尖点や結節点といった特異点を持つ退化した曲線となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
