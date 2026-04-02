import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DivergenceTheoremProof() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ガウスの発散定理の証明は、グリーンの定理と同様に、領域を特定の方向に「単純な領域」へと分割し、微分積分学の基本定理を適用することで導かれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明の方針</h2>

            <p>
                ベクトル場 <InlineMath math="\mathbf{F} = (F_1, F_2, F_3)" /> に対して、発散定理の両辺を展開すると：
                <BlockMath math="\begin{aligned} &\oiint_{\partial V} (F_1\, dS_x + F_2\, dS_y + F_3\, dS_z) \\ &\quad = \iiint_V \left( \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z} \right) dV \end{aligned}" />
                となります。これを証明するためには、各成分ごとに等号が成り立つことを示せば十分です。ここでは <InlineMath math="z" /> 成分についての関係
                <BlockMath math="\iiint_V \frac{\partial F_3}{\partial z}\, dV = \oiint_{\partial V} F_3 \mathbf{k} \cdot \mathbf{n}\, dS" />
                （ただし <InlineMath math="\mathbf{k} = (0, 0, 1)" />）を中心に見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">縦線型領域での導出</h2>

            <ContentBox type="proof" title="Proof (z 成分について)">
                <p>
                    領域 <InlineMath math="V" /> が、ある <InlineMath math="xy" /> 平面上の領域 <InlineMath math="D" /> を底面として、
                    <BlockMath math="V = \{ (x, y, z) \mid (x, y) \in D, \; g_1(x, y) \le z \le g_2(x, y) \}" />
                    のように記述できるものとする。左辺の体積分を計算すると：
                    <BlockMath math="\begin{aligned} &\iiint_V \frac{\partial F_3}{\partial z}\, dV \\ &\quad = \iint_D \left[ \int_{g_1(x, y)}^{g_2(x, y)} \frac{\partial F_3}{\partial z}\, dz \right] dA \\ &\quad = \iint_D [ F_3(x, y, g_2(x, y)) - F_3(x, y, g_1(x, y)) ]\, dA \end{aligned}" />
                </p>
                <p>
                    一方、境界曲面 <InlineMath math="\partial V" /> 上の面積分を考える。
                    境界は「上面 <InlineMath math="S_2" />」「下面 <InlineMath math="S_1" />」「側面」に分かれるが、側面は <InlineMath math="z" /> 軸に平行であるため、外向き法線ベクトル <InlineMath math="\mathbf{n}" /> は <InlineMath math="\mathbf{k}" /> と直交し、 <InlineMath math="F_3 \mathbf{k} \cdot \mathbf{n} = 0" /> となり寄与しない。
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>上面 <InlineMath math="S_2" /></strong>： <InlineMath math="\mathbf{n} \cdot \mathbf{k} > 0" /> であり、面積要素の <InlineMath math="z" /> 成分は <InlineMath math="\mathbf{n} \cdot \mathbf{k} \, dS = dA" />。
                        したがって、 <InlineMath math="\iint_{S_2} F_3 \mathbf{k} \cdot \mathbf{n}\, dS = \iint_D F_3(x, y, g_2(x, y))\, dA" />。
                    </li>
                    <li>
                        <strong>下面 <InlineMath math="S_1" /></strong>： <InlineMath math="\mathbf{n} \cdot \mathbf{k} < 0" /> であり、面積要素の <InlineMath math="z" /> 成分は <InlineMath math="\mathbf{n} \cdot \mathbf{k} \, dS = -dA" />。
                        したがって、 <InlineMath math="\iint_{S_1} F_3 \mathbf{k} \cdot \mathbf{n}\, dS = -\iint_D F_3(x, y, g_1(x, y))\, dA" />。
                    </li>
                </ul>
                <p>
                    これらを足し合わせることで、体積分と面積分が一致することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                <InlineMath math="x, y" /> 成分についても同様に示すことができ、それらを加算することで発散定理全体が証明されます。
                一般の形状の領域も、有限個のこのような「単純な領域」に分割することで拡張可能です。
            </p>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>証明の本質</strong>：高次元の積分を逐次積分に直し、内側の積分に「微分積分学の基本定理」を適用する。</li>
                    <li><strong>相殺の原理</strong>：複数の領域を合わせたとき、内部境界では法線が逆向きになるため面積分の寄与が打ち消し合う。</li>
                    <li><strong>重要性</strong>：この証明手法は、ベクトル演算子（発散）が「単位体積あたりの湧き出し」として定義された背景そのものである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
