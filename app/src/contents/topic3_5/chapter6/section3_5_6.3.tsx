import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SeparationOfVariablesWave() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                有限の長さを持つ弦の振動は、端点での反射（境界条件）によって複雑なパターンを生み出します。
                この問題を解くための最も強力な道具が<b>分離変数法</b>です。
                これにより、任意の振動を、単純な幾何学的形状を持つ「固有モード」の重ね合わせとして理解することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定在波と固有モード</h2>

            <p className="leading-relaxed">
                両端が固定された長さ <InlineMath math="L" /> の弦（<InlineMath math="0 \le x \le L" />）における、基本振動の形を求めます。
            </p>

            <ContentBox type="example" title="Example 6.3-1 (固有モードの計算)">
                <p>
                    境界条件 <InlineMath math="u(0, t) = u(L, t) = 0" /> の下で、解を <InlineMath math="u(x, t) = X(x)T(t)" /> と仮定する。
                    これを <InlineMath math="u_{tt} = c^2 u_{xx}" /> に代入し、定数 <InlineMath math="-\lambda" /> を用いて分離すると、
                    <BlockMath math="\frac{T''(t)}{c^2 T(t)} = \frac{X''(x)}{X(x)} = -\lambda" />
                    を得る。境界条件を満たす非自明な解が存在するのは <InlineMath math="\lambda_n = (n\pi/L)^2 \ (n=1, 2, \dots)" /> のときであり、
                    対応する空間解は <InlineMath math="X_n(x) = \sin(n\pi x/L)" /> である。
                </p>
                <p>
                    これに対する時間の解は <InlineMath math="T_n(t) = A_n \cos(\omega_n t) + B_n \sin(\omega_n t) \ (\omega_n = cn\pi/L)" /> となり、
                    各モードの解は次のような<b>定在波</b>（Standing Wave）となる：
                    <BlockMath math="u_n(x, t) = \sin\left(\frac{n\pi x}{L}\right) \left[ A_n \cos\left(\frac{cn\pi t}{L}\right) + B_n \sin\left(\frac{cn\pi t}{L}\right) \right]" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                一般の初期条件 <InlineMath math="u(x, 0) = f(x), \ u_t(x, 0) = g(x)" /> を満たすには、これらのモードを無限に重ね合わせる必要があります。
            </p>

            <ContentBox type="example" title="Example 6.3-2 (フーリエ展開による初期条件の充足)">
                <p>
                    初期変位 <InlineMath math="u(x, 0) = f(x) = x(L-x)" />、初期速度 <InlineMath math="u_t(x, 0) = 0" /> の場合を考える。
                    このとき一般解は <InlineMath math="u(x, t) = \sum_{n=1}^\infty A_n \sin(n\pi x/L) \cos(cn\pi t/L)" /> と書ける。
                    係数 <InlineMath math="A_n" /> は初期変位のフーリエ正弦展開により、
                    <BlockMath math="A_n = \frac{2}{L} \int_0^L x(L-x) \sin\left(\frac{n\pi x}{L}\right) dx = \frac{8L^2}{(n\pi)^3} \quad (n: \text{odd})" />
                    と求められる（偶数次はゼロ）。このように、初期状態は複数の固有モードの和として完全に記述される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">エネルギー解釈と倍音</h2>

            <p className="leading-relaxed">
                物理的には、各固有モードは異なる音程（周波数）に対応しています。
            </p>

            <ContentBox type="remark" title="倍音（Overtones）と音楽の関係">
                <p>
                    最も低い周波数 <InlineMath math="\omega_1 = c\pi/L" /> を持つ <InlineMath math="n=1" /> のモードを「基本振動」と呼び、
                    それ以上の <InlineMath math="n=2, 3, \dots" /> のモードを「倍音」と呼ぶ。
                    実際に弦を弾いたときの「音色」は、これらの倍音がどのような割合（係数 <InlineMath math="A_n, B_n" />）で含まれているかによって決まる。
                    音楽における豊かな響きは、偏微分方程式の解の重ね合わせという数学的事実に基づいている。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                さて、外界と熱のやり取りがない絶縁された系において「熱の総量」が保存されるのと同様に、
                振動する弦においても「力学的エネルギー」が保存されます。
            </p>

            <ContentBox type="proposition" title="Proposition 6.3-1 (波動方程式のエネルギー保存則)">
                <p>
                    波動方程式 <InlineMath math="u_{tt} = c^2 u_{xx}" /> において、固定境界条件の下での全エネルギー
                    <BlockMath math="E(t) = \frac{1}{2} \int_0^L \left[ (u_t)^2 + c^2 (u_x)^2 \right] dx" />
                    は時間によらず不変である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    エネルギー <InlineMath math="E(t)" /> を時間 <InlineMath math="t" /> で微分する：
                    <BlockMath math="\frac{dE}{dt} = \int_0^L (u_t u_{tt} + c^2 u_x u_{xt}) dx" />
                    方程式 <InlineMath math="u_{tt} = c^2 u_{xx}" /> を代入し、第 2 項に部分積分を適用すると、
                    <BlockMath math="\begin{aligned} \frac{dE}{dt} &= \int_0^L (u_t \cdot c^2 u_{xx} + c^2 u_x u_{xt}) dx \\ &= c^2 \int_0^L \frac{\partial}{\partial x}(u_t u_x) dx = c^2 [u_t u_x]_0^L \end{aligned}" />
                    境界条件 <InlineMath math="u(0, t) = u(L, t) = 0" /> より、端点での速度は常に <InlineMath math="u_t = 0" /> なので、
                    最右辺の境界項はゼロとなる。よって <InlineMath math="dE/dt = 0" /> であり、エネルギーの保存が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                このエネルギー保存則は、単に物理的な直感を確認するだけでなく、解の一意性を証明するための非常に強力な数学的基盤となります。
                次節では、このエネルギー法を用いて解の一意性と適切性を論じます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有限境界の下では、分離変数法によって解を固有モード（定在波）の和として構成できる。</li>
                    <li>弦の各振動モードは整数のインデックス <InlineMath math="n" /> を持ち、音楽的には基本音と倍音に対応する。</li>
                    <li>全エネルギー（運動エネルギーとポテンシャルエネルギーの和）は時間不変である。</li>
                    <li>エネルギー保存の証明過程において、境界条件が重要な役割を果たしている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
