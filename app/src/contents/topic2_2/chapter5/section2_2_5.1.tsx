import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ChainRuleProof() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 4 で導入した「全微分可能性」の威力が最も発揮されるのが、合成関数の微分法則（連鎖律、Chain Rule）です。
                1変数の場合、<InlineMath math="y = f(u)" />, <InlineMath math="u = g(x)" /> ならば <InlineMath math="\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx}" /> となりましたが、
                多変数の場合は各変数への依存関係が枝分かれするため、偏導関数の「和」として表現されます。
                本節では、全微分の定義を用いてその厳密な証明を与えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多変数の連鎖律</h2>

            <ContentBox type="theorem" title="Theorem 5.1-1 (多変数連鎖律の厳密な証明)">
                <p className="leading-relaxed">
                    2つの関数 <InlineMath math="x = x(t), y = y(t)" /> が点 <InlineMath math="t = a" /> で微分可能であり、
                    2変数関数 <InlineMath math="z = f(x, y)" /> が対応する点 <InlineMath math="(x(a), y(a))" /> で<strong>全微分可能</strong>であるとする。
                </p>
                <p className="leading-relaxed mt-2">
                    このとき、合成関数 <InlineMath math="z(t) = f(x(t), y(t))" /> は <InlineMath math="t = a" /> で微分可能であり、次の<strong>連鎖律</strong>が成り立つ：
                </p>
                <BlockMath math="\frac{dz}{dt}(a) = \frac{\partial f}{\partial x}\left(x(a), y(a)\right) \frac{dx}{dt}(a) + \frac{\partial f}{\partial y}\left(x(a), y(a)\right) \frac{dy}{dt}(a)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    全微分可能性の定義を直接用いて証明する。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="t" /> の増分を <InlineMath math="\Delta t" /> とし、それに伴う <InlineMath math="x, y" /> の増分を
                    <InlineMath math="\Delta x = x(a + \Delta t) - x(a)" />, <InlineMath math="\Delta y = y(a + \Delta t) - y(a)" /> とする。
                    このときの <InlineMath math="z" /> の増分 <InlineMath math="\Delta z = f(x(a) + \Delta x, y(a) + \Delta y) - f(x(a), y(a))" /> を評価する。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="f" /> は <InlineMath math="(x(a), y(a))" /> で全微分可能なので、Definition 4.3-1 より
                </p>
                <BlockMath math="\Delta z = \frac{\partial f}{\partial x} \Delta x + \frac{\partial f}{\partial y} \Delta y + \varepsilon(\Delta x, \Delta y)" />
                <p className="leading-relaxed">
                    と書ける。ここで <InlineMath math="(\Delta x, \Delta y) \to (0, 0)" /> のとき <InlineMath math="\frac{\varepsilon(\Delta x, \Delta y)}{\sqrt{\Delta x^2 + \Delta y^2}} \to 0" /> である。
                    （ただし <InlineMath math="\Delta x = \Delta y = 0" /> のときは <InlineMath math="\varepsilon(0, 0) = 0" /> と定めることで、原点でも連続になる。）
                </p>
                <p className="leading-relaxed mt-2">
                    両辺を <InlineMath math="\Delta t \neq 0" /> で割ると、
                </p>
                <BlockMath math="\frac{\Delta z}{\Delta t} = \frac{\partial f}{\partial x} \frac{\Delta x}{\Delta t} + \frac{\partial f}{\partial y} \frac{\Delta y}{\Delta t} + \frac{\varepsilon(\Delta x, \Delta y)}{\Delta t}" />
                <p className="leading-relaxed">
                    <InlineMath math="\Delta t \to 0" /> の極限を考える。仮定より <InlineMath math="x(t), y(t)" /> は微分可能なので、
                    <InlineMath math="\frac{\Delta x}{\Delta t} \to \frac{dx}{dt}, \frac{\Delta y}{\Delta t} \to \frac{dy}{dt}" /> である。
                    残るは第3項が <InlineMath math="0" /> に収束することの証明である。第3項を次のように変形する：
                </p>
                <BlockMath math="\frac{\varepsilon(\Delta x, \Delta y)}{\Delta t} = \frac{\varepsilon(\Delta x, \Delta y)}{\sqrt{\Delta x^2 + \Delta y^2}} \cdot \frac{\sqrt{\Delta x^2 + \Delta y^2}}{\Delta t}" />
                <p className="leading-relaxed">
                    （もし <InlineMath math="\Delta x = \Delta y = 0" /> ならばこの項全体を <InlineMath math="0" /> とする。）
                    <InlineMath math="x(t), y(t)" /> は微分可能（よって連続）なので、<InlineMath math="\Delta t \to 0" /> のとき <InlineMath math="\Delta x \to 0, \Delta y \to 0" /> である。
                    したがって、先の性質より第1因子は <InlineMath math="0" /> に収束する。
                    一方、第2因子の絶対値は
                </p>
                <BlockMath math="\begin{aligned} \frac{\sqrt{\Delta x^2 + \Delta y^2}}{|\Delta t|} & = \sqrt{\left(\frac{\Delta x}{\Delta t}\right)^2 + \left(\frac{\Delta y}{\Delta t}\right)^2} \\ & \to \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2} \end{aligned}" />
                <p className="leading-relaxed">
                    となり、有界である。
                    （「0に収束するもの」×「有界なもの」は 0 に収束する。）
                    したがって第3項は <InlineMath math="0" /> に収束する。
                </p>
                <p className="leading-relaxed mt-2">
                    ゆえに、<InlineMath math="\Delta t \to 0" /> の極限をとると、
                </p>
                <BlockMath math="\frac{dz}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt}" />
                <p className="leading-relaxed">
                    が得られ、定理が証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="全微分可能性の必要性">
                <p className="leading-relaxed">
                    証明の中で注目すべきは、単なる偏微分可能ではなく<strong>全微分가능性</strong>が本質的に使われている点です。
                    <InlineMath math="f" /> が偏微分可能であるだけ（<InlineMath math="x" /> 軸と <InlineMath math="y" /> 軸方向の情報しか持たない）では、
                    <InlineMath math="(x(t), y(t))" /> という<strong>斜めの経路</strong>に沿った変化を正しく評価することができず、連鎖律は成り立ちません。
                </p>
                <p className="leading-relaxed mt-2">
                    具体例として、Example 4.2-1 で挙げた
                    <InlineMath math="f(x, y) = \frac{x^2 y}{x^4 + y^2}" /> （原点で <InlineMath math="f(0,0)=0" />、偏導関数は両方 <InlineMath math="0" />）を考えましょう。
                    <InlineMath math="x(t) = t, y(t) = t^2" /> とおくと、原点で <InlineMath math="x'(0)=1, y'(0)=0" /> です。もし連鎖律が成り立つなら
                    <InlineMath math="(f \circ c)'(0) = f_x(0,0)x'(0) + f_y(0,0)y'(0) = 0 \cdot 1 + 0 \cdot 0 = 0" /> のはずですが、
                    実際には <InlineMath math="f(x(t), y(t)) = f(t, t^2) = \frac{1}{2}" /> （定数関数）なので、原点での連続性すら破綻しており微分係数の意味をなしません。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多変数の連鎖律は、各中間変数（<InlineMath math="x, y" />）を経由する変化の「和」として表される。</li>
                    <li>証明には「全微分可能性（1次近似の誤差が高次無限小であること）」が不可欠である。</li>
                    <li>単なる偏微分可能性だけでは、経路が斜めに交差する場合に変化を追えず、連鎖律は破綻する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
