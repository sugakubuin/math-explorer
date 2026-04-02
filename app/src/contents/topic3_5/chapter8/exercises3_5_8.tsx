import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_5_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="8" number={1}>
                    <p>
                        2 次元の関数 <InlineMath math="u(x, y) = x^2 - y^2" /> が調和関数であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            調和関数の定義 <InlineMath math="\Delta u = 0" />（Definition 8.1-1）を確認する。
                            各変数について 2 階微分を計算すると：
                            <BlockMath math="\begin{aligned} \frac{\partial u}{\partial x} = 2x, \quad &\frac{\partial^2 u}{\partial x^2} = 2 \\ \frac{\partial u}{\partial y} = -2y, \quad &\frac{\partial^2 u}{\partial y^2} = -2 \end{aligned}" />
                        </p>
                        <p>
                            これらを足し合わせると：
                            <BlockMath math="\Delta u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0" />
                            となり、全平面で調和関数であることが示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>
                        平均値定理（Theorem 8.2-1）によれば、3 次元の調和関数 <InlineMath math="u" /> の点 <InlineMath math="\mathbf{x}_0" /> における値は、
                        <InlineMath math="\mathbf{x}_0" /> を中心とする半径 <InlineMath math="R" /> の球面上の平均値に等しい。
                        このとき、球面平均の重み係数（表面積の逆数）はいくらか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            3 次元空間における半径 <InlineMath math="R" /> の球の表面積は <InlineMath math="4\pi R^2" /> である。
                            よって球面平均は次のように表される：
                            <BlockMath math="u(\mathbf{x}_0) = \frac{1}{4\pi R^2} \int_{|\mathbf{x}-\mathbf{x}_0|=R} u(\mathbf{x}) dS" />
                            したがって、求める重み係数は <b><InlineMath math="1/(4\pi R^2)" /></b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>
                        有界な領域 <InlineMath math="\Omega" /> において、非定数な調和関数が境界ではなく内部の点 <InlineMath math="\mathbf{x} \in \Omega" /> で最大値を取ることはあるか。
                        強最大値原理（Theorem 8.2-2）に基づいて答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            強最大値原理によれば、連結な領域において調和関数が内部で最大値を取るならば、その関数は領域全体で定数でなければならない。
                        </p>
                        <p>
                            問題文には「非定数な」調和関数とあるため、この関数が内部で最大値を取ることは<b>あり得ない</b>。
                            非定数な調和関数の最大値（および最小値）は、必ず境界 <InlineMath math="\partial \Omega" /> 上のどこかで達成される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="8" number={4}>
                    <p>
                        3 次元の基本解 <InlineMath math="\Phi(x) = -\frac{1}{4\pi |x|}" /> が、原点以外の点 <InlineMath math="x \neq 0" /> でラプラス方程式 <InlineMath math="\Delta \Phi = 0" /> を満たすことを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            放射対称な関数のラプラシアンの公式 <InlineMath math="\Delta f(r) = f''(r) + \frac{2}{r}f'(r)" /> を用いる（<InlineMath math="r = |x|" />）。
                            <InlineMath math="f(r) = -1/(4\pi r)" /> とおくと：
                            <BlockMath math="\begin{aligned} f'(r) &= \frac{1}{4\pi r^2} \\ f''(r) &= -\frac{2}{4\pi r^3} \end{aligned}" />
                        </p>
                        <p>
                            これらを代入すると：
                            <BlockMath math="\Delta f = -\frac{2}{4\pi r^3} + \frac{2}{r} \left( \frac{1}{4\pi r^2} \right) = -\frac{2}{4\pi r^3} + \frac{2}{4\pi r^3} = 0" />
                            となり、<InlineMath math="r > 0" /> においてラプラス方程式を満たすことが示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p>
                        領域 <InlineMath math="\Omega" /> におけるノイマン問題
                        <BlockMath math="\Delta u = f \ (\Omega), \quad \frac{\partial u}{\partial n} = g \ (\partial \Omega)" />
                        において、ソース項 <InlineMath math="f \equiv 1" />、境界条件 <InlineMath math="g \equiv 0" /> の場合、解が存在するか判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ノイマン問題の適合条件（Theorem 8.3-1）を確認する：
                            <BlockMath math="\int_{\Omega} f dx = \int_{\partial \Omega} g dS" />
                        </p>
                        <p>
                            左辺は <InlineMath math="\int_{\Omega} 1 dx = \text{Vol}(\Omega) > 0" /> である。
                            一方、右辺は <InlineMath math="\int_{\partial \Omega} 0 dS = 0" /> である。
                        </p>
                        <p>
                            両者が一致しないため、この問題設定では<b>解は存在しない</b>。
                            物理的には、内部で熱が発生し続けている（<InlineMath math="f=1" />）のに、境界が断熱されている（<InlineMath math="g=0" />）ため、
                            平衡状態（ラプラス方程式の状態）に達することができないことを意味している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>
                        上半空間 <InlineMath math="\Omega = \{(x, y) \in \mathbb{R}^2 \mid y > 0\}" /> における（ディリクレ条件の）グリーン関数を、鏡像法を用いて構成せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            2 次元の基本解は <InlineMath math="\Phi(x, y) = \frac{1}{2\pi} \ln \sqrt{x^2+y^2}" /> である。
                            点 <InlineMath math="P(x_0, y_0)" /> の、境界 <InlineMath math="y=0" /> に関する鏡像点は <InlineMath math="P^*(x_0, -y_0)" /> である。
                        </p>
                        <p>
                            グリーン関数 <InlineMath math="G" /> は、基本解から鏡像点によるポテンシャルを引いた形で作る（Example 8.5-1）：
                            <BlockMath math="G((x, y), (x_0, y_0)) = \frac{1}{2\pi} \ln \sqrt{(x-x_0)^2 + (y-y_0)^2} - \frac{1}{2\pi} \ln \sqrt{(x-x_0)^2 + (y+y_0)^2}" />
                        </p>
                        <p>
                            境界 <InlineMath math="y=0" /> 上では、第 1 項と第 2 項が同じ値になり、<InlineMath math="G = 0" /> が満たされる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={7}>
                    <p>
                        ポアソン積分公式によれば、単位円板内の調和関数は、境界（円周）上の値 <InlineMath math="g(\theta)" /> を用いて次のように表される：
                        <BlockMath math="u(r, \phi) = \frac{1 - r^2}{2\pi} \int_0^{2\pi} \frac{g(\theta)}{1 - 2r\cos(\theta - \phi) + r^2} d\theta" />
                        この公式を用いて、円の中心 <InlineMath math="r=0" /> における値 <InlineMath math="u(0, \phi)" /> を計算し、平均値定理と一致することを確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            公式に <InlineMath math="r = 0" /> を代入する：
                            <BlockMath math="u(0, \phi) = \frac{1 - 0^2}{2\pi} \int_0^{2\pi} \frac{g(\theta)}{1 - 0 + 0} d\theta = \frac{1}{2\pi} \int_0^{2\pi} g(\theta) d\theta" />
                        </p>
                        <p>
                            これは、境界の値の 1 周分（<InlineMath math="2\pi" />）の平均をとったものであり、
                            2 次元の平均値定理において球面平均に対応している。よって結果は一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="8" number={8}>
                    <p>
                        全空間 <InlineMath math="\mathbb{R}^n" /> で定義された有界な調和関数は定数に限られること（調和関数に対するリウヴィルの定理）を、平均値定理を用いて証明の概略を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 任意の 2 点 <InlineMath math="x, y" /> をとる。平均値定理（球体平均）より：
                            <BlockMath math="u(x) = \frac{1}{|B_R(x)|} \int_{B_R(x)} u(z) dz, \quad u(y) = \frac{1}{|B_R(y)|} \int_{B_R(y)} u(z) dz" />
                        </p>
                        <p>
                            2. 差の絶対値を評価する：
                            <BlockMath math="|u(x) - u(y)| = \frac{1}{|B_R|} \left| \int_{B_R(x)} u dz - \int_{B_R(y)} u dz \right|" />
                            共通部分以外の領域を <InlineMath math="\Delta B" /> とすると：
                            <BlockMath math="|u(x) - u(y)| \le \frac{1}{|B_R|} \int_{\Delta B} |u(z)| dz" />
                        </p>
                        <p>
                            3. <InlineMath math="u" /> が有界（<InlineMath math="|u| \le M" />）であるとすると、
                            <BlockMath math="|u(x) - u(y)| \le \frac{M \cdot \text{Vol}(\Delta B)}{\text{Vol}(B_R)}" />
                        </p>
                        <p>
                            4. 半径 <InlineMath math="R" /> を大きくすると、体積の比 <InlineMath math="\text{Vol}(\Delta B) / \text{Vol}(B_R)" /> は 0 に収束する。
                            したがって <InlineMath math="u(x) = u(y)" /> となり、関数は定数である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={9}>
                    <p>
                        グリーンの第一恒等式 <InlineMath math="\int_{\Omega} (u \Delta u + |\nabla u|^2) dx = \int_{\partial \Omega} u \frac{\partial u}{\partial n} dS" /> 
                        を用いて、ディリクレ境界条件の下でラプラス方程式の解が一意であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 2つの解 <InlineMath math="u_1, u_2" /> の差 <InlineMath math="w = u_1 - u_2" /> を考える。
                            <InlineMath math="w" /> は調和（<InlineMath math="\Delta w = 0" />）であり、境界上で <InlineMath math="w = 0" /> である。
                        </p>
                        <p>
                            2. 恒等式において <InlineMath math="u = w" /> とおくと：
                            <BlockMath math="\int_{\Omega} (w \Delta w + |\nabla w|^2) dx = \int_{\partial \Omega} w \frac{\partial w}{\partial n} dS" />
                        </p>
                        <p>
                            3. <InlineMath math="\Delta w = 0" /> および境界上での <InlineMath math="w = 0" /> を代入すると：
                            <BlockMath math="\int_{\Omega} |\nabla w|^2 dx = 0" />
                        </p>
                        <p>
                            4. 被積分関数が常に非負であるため、積分値が 0 ならば領域全体で <InlineMath math="\nabla w = 0" /> でなければならない。
                            よって <InlineMath math="w" /> は定数であり、境界で 0 であることから <InlineMath math="w \equiv 0" /> を得る。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={10}>
                    <p>
                        球のグリーン関数（Example 8.5-2）の構成手法である「反転法」において、
                        単位球内の点 <InlineMath math="x" /> と境界上の点 <InlineMath math="y \in \partial B_1" />、および反転点 <InlineMath math="x^* = x / |x|^2" /> の間に成立する幾何学的関係
                        <InlineMath math="|y - x| = |x| |y - x^*|" />
                        を証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            両辺を 2 乗して、<InlineMath math="|y|=1" /> を用いて展開する。
                            <BlockMath math="\text{LHS}^2 = |y-x|^2 = |y|^2 - 2x\cdot y + |x|^2 = 1 - 2x\cdot y + |x|^2" />
                        </p>
                        <p>
                            右辺については：
                            <BlockMath math="\begin{aligned} \text{RHS}^2 = |x|^2 |y - x/|x|^2|^2 &= |x|^2 ( |y|^2 - 2y\cdot \frac{x}{|x|^2} + \frac{|x|^2}{|x|^4} ) \\ &= |x|^2 ( 1 - \frac{2x\cdot y}{|x|^2} + \frac{1}{|x|^2} ) \\ &= |x|^2 - 2x\cdot y + 1 \end{aligned}" />
                        </p>
                        <p>
                            展開結果が一致するため、等号が成立する。
                            この性質により、グリーン関数の定義式 <InlineMath math="G = \Phi(y-x) - \Phi(|x|(y-x^*))" /> の 2 つの成分が球面上（<InlineMath math="|y|=1" />）で相殺され、<InlineMath math="G=0" /> を満たすことが保証される。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
