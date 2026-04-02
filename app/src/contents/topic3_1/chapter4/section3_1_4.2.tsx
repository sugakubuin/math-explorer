import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GreensTheoremProof() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                グリーンの定理を一般の領域に対して厳密に証明するのは複雑ですが、基本的な領域（縦線型・横線型）に対して証明し、それを組み合わせて一般領域へ拡張する、という手法をとることで、そのエッセンスを理解することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単純な領域での証明</h2>

            <p>
                まず、 <InlineMath math="y" /> 方向に単純な「縦線型領域」について考えます。
            </p>

            <ContentBox type="proof" title="Proof (縦線型領域の場合)">
                <p>
                    領域 <InlineMath math="D" /> を <InlineMath math="a \le x \le b, \; g_1(x) \le y \le g_2(x)" /> と記述できるものとする。
                    ここで定理の項のうち、 <InlineMath math="P" /> に注目する：
                    <BlockMath math="\iint_D \frac{\partial P}{\partial y}\, dy\, dx = \int_a^b \left[ \int_{g_1(x)}^{g_2(x)} \frac{\partial P}{\partial y}\, dy \right] dx" />
                    内側の積分を微分積分学の基本定理で実行すると：
                    <BlockMath math="\int_a^b [ P(x, g_2(x)) - P(x, g_1(x)) ]\, dx" />
                </p>
                <p>
                    一方、境界 <InlineMath math="\partial D" /> に沿った線積分 <InlineMath math="\oint_{\partial D} P\, dx" /> を計算する。
                    境界は「下の曲線 <InlineMath math="C_1" />」「右の直線」「上の曲線 <InlineMath math="C_2" />（逆向き）」「左の直線」に分かれるが、垂直な直線部では <InlineMath math="dx = 0" /> なので寄与しない。
                    <BlockMath math="\begin{aligned} \oint_{\partial D} P\, dx &= \int_{C_1} P\, dx + \int_{C_2} P\, dx \\ &= \int_a^b P(x, g_1(x))\, dx + \int_b^a P(x, g_2(x))\, dx \\ &= \int_a^b P(x, g_1(x))\, dx - \int_a^b P(x, g_2(x))\, dx \\ &= -\int_a^b [ P(x, g_2(x)) - P(x, g_1(x)) ]\, dx \end{aligned}" />
                    以上より、 <InlineMath math="\iint_D \frac{\partial P}{\partial y}\, dA = -\oint_{\partial D} P\, dx" /> が得られた。
                </p>
            </ContentBox>

            <p>
                同様にして、 <InlineMath math="x" /> 方向に単純な領域（横線型領域）を考えることで、
                <BlockMath math="\iint_D \frac{\partial Q}{\partial x}\, dA = \oint_{\partial D} Q\, dy" />
                を示すことができます。これら 2 式を足し合わせることで、グリーンの定理が完成します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般領域への拡張</h2>

            <p>
                一般の滑らかな境界を持つ領域は、有限個の縦線型および横線型領域に「分割」することができます。
            </p>

            <ContentBox type="remark" title="領域の分割と相殺">
                <p>
                    領域を <InlineMath math="D_1, D_2" /> に分割したとき、二重積分は単に足し合わせとなります。
                    一方、線積分については、<strong>分割された内側の境界（切り口）</strong>では、 <InlineMath math="D_1" /> の境界としての向きと <InlineMath math="D_2" /> の境界としての向きが<strong>逆</strong>になります。
                    そのため、内側の境界での線積分は互いに相殺し、最終的に外周部分 <InlineMath math="\partial D" /> の積分だけが残ります。
                    <BlockMath math="\oint_{\partial D_1} + \oint_{\partial D_2} = \oint_{\partial D}" />
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>証明の核</strong>：二重積分の内側の積分に「微分積分学の基本定理」を適用すること。</li>
                    <li><strong>符号の注意</strong>：積分の向きと偏微分の順序により、 <InlineMath math="P" /> の項にはマイナスがつく。</li>
                    <li><strong>相殺の原理</strong>：複雑な領域も分割して考えることができ、内部境界の寄与は消える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
