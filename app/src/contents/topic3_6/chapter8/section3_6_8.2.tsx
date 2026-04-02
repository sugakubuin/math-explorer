import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EulerLagrangeEquationsForMultipleVariables() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節では多変数関数の汎関数を定義しました。
                本節では、この汎関数が極値を取るために満たすべき偏微分方程式である、<b>多変数オイラー＝ラグランジュ方程式</b>を導出します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多変数 E-L 方程式の導出</h2>

            <p className="leading-relaxed">
                変分方向 <InlineMath math="\eta(x, y)" /> （ただし境界上で <InlineMath math="\eta = 0" />）に対して、汎関数の第一変分を計算します。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-1 (多変数 E-L 方程式)">
                <p>
                    汎関数 <InlineMath math="J[u] = \iint_\Omega F(x, y, u, u_x, u_y) \, dA" /> が極値をとる関数 <InlineMath math="u(x, y)" /> は、領域 <InlineMath math="\Omega" /> 内で次の偏微分方程式を満たす：
                    <BlockMath math="F_u - \frac{\partial}{\partial x} F_{u_x} - \frac{\partial}{\partial y} F_{u_y} = 0" />
                    これは、よく知られた勾配演算子を用いて <InlineMath math="F_u - \text{div} (F_{u_x}, F_{u_y}) = 0" /> と書くこともできる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、第一変分 <InlineMath math="\delta J[u; \eta]" /> を計算すると：
                    <BlockMath math="\delta J = \iint_\Omega (F_u \eta + F_{u_x} \eta_x + F_{u_y} \eta_y) \, dA = 0" />
                    第2項と第3項に対して、多変数の部分積分（グリーンの第一恒等式やガウスの発散定理）を適用する。
                    <BlockMath math="\iint_\Omega (F_{u_x} \eta_x + F_{u_y} \eta_y) \, dA = \iint_\Omega \text{div} (\eta \vec{V}) \, dA - \iint_\Omega \eta \left( \frac{\partial F_{u_x}}{\partial x} + \frac{\partial F_{u_y}}{\partial y} \right) \, dA" />
                    （ここで <InlineMath math="\vec{V} = (F_{u_x}, F_{u_y})" />)。
                    境界上で <InlineMath math="\eta = 0" /> であるため、ガウスの発散定理により面積分項（第1項）は消滅する。
                    結果として、
                    <BlockMath math="\iint_\Omega \eta \left( F_u - \frac{\partial F_{u_x}}{\partial x} - \frac{\partial F_{u_y}}{\partial y} \right) \, dA = 0" />
                    が任意の <InlineMath math="\eta" /> に対して成り立つため、括弧内が 0 に等しい。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 8.2-1 (ディリクレ積分からのラプラス方程式の導出)">
                <p>
                    ディリクレ積分 <InlineMath math="F = \frac{1}{2}(u_x^2 + u_y^2)" /> を考える。このとき、
                    <BlockMath math="F_u = 0, \quad F_{u_x} = u_x, \quad F_{u_y} = u_y" />
                    となる。これらを E-L 方程式に代入すると、
                    <BlockMath math="0 - \frac{\partial}{\partial x}(u_x) - \frac{\partial}{\partial y}(u_y) = 0 \implies - (u_{xx} + u_{yy}) = 0" />
                    すなわち、ラプラス方程式 <InlineMath math="\Delta u = 0" /> が得られる。
                    これにより、「ディリクレ積分の最小化問題（エネルギー最小化）」が「調和関数」を求める問題と等価であることを変分法的に理解できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極小曲面方程式</h2>

            <p className="leading-relaxed">
                面積汎関数を最小化する場合の方程式も見ていきましょう。
            </p>

            <ContentBox type="example" title="Example 8.2-2 (極小曲面方程式の導出)">
                <p>
                    面積汎関数 <InlineMath math="F = \sqrt{1 + u_x^2 + u_y^2}" /> を考える。
                    偏導関数は <InlineMath math="F_{u_x} = \frac{u_x}{W}" />、<InlineMath math="F_{u_y} = \frac{u_y}{W}" /> （ただし <InlineMath math="W = \sqrt{1 + u_x^2 + u_y^2}" />) であり、E-L 方程式は次のようになる：
                    <BlockMath math="\frac{\partial}{\partial x} \left( \frac{u_x}{W} \right) + \frac{\partial}{\partial y} \left( \frac{u_y}{W} \right) = 0" />
                    この方程式は、幾何学において曲面の<b>平均曲率 <InlineMath math="H" /> が 0</b> であることを意味している。
                    これを「極小曲面方程式（Minimal Surface Equation）」と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="変分と楕円型 PDE の深い関係">
                <p>
                    導出されたラプラス方程式や極小曲面方程式は、数学的には「楕円型」と呼ばれるクラスの偏微分方程式に属します。
                    これは偶然ではなく、汎関数の「曲率」（第二変分の符号）が正であること、すなわちエネルギーが凸性を持っていることと密接に関連しています。
                    変分問題の視点を持つことは、PDE の解の存在や正則性を証明するための強力な武器になります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                これまで滑らかな関数を前提に議論してきましたが、現実に解を構成しようとすると壁にぶつかります。
                次節では、現代数学がこの壁をどのように乗り越えたのか、その入門的な動機付けを見てみましょう。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多重積分汎関数の変分からは、偏微分方程式の形をした E-L 方程式が導かれる。</li>
                    <li>ガウスの発散定理を用いることで、領域内の微分方程式と境界上の条件を結びつけることができる。</li>
                    <li>ディリクレ積分の変分から、物理学・幾何学の基本方程式であるラプラス方程式が導かれる。</li>
                    <li>汎関数の最小化という物理的・幾何学的な動機が、楕円型偏微分方程式論の起源となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
