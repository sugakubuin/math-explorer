import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        等式制約付き極値問題におけるラグランジュの未定乗数法（Theorem 7.2-1）において、目的関数を <InlineMath math="f(\mathbf{x})" />、制約条件を <InlineMath math="g(\mathbf{x}) = 0" /> とする。<br />
                        関数が制約 <InlineMath math="S" /> 上の点 <InlineMath math="\mathbf{a}" /> で極値をとり、かつ <InlineMath math="\mathbf{a}" /> が正則点（<InlineMath math="\nabla g(\mathbf{a}) \neq \mathbf{0}" />）であるとき、ある実数 <InlineMath math="\lambda" /> が存在して成り立つ関係式を勾配ベクトル <InlineMath math="\nabla f" />, <InlineMath math="\nabla g" /> を用いて記せ。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\nabla f(\mathbf{a}) = \lambda \nabla g(\mathbf{a})" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        目的関数 <InlineMath math="f(\mathbf{x})" /> と制約条件 <InlineMath math="g(\mathbf{x}) = 0" /> に対応するラグランジアン関数 <InlineMath math="L(\mathbf{x}, \lambda)" /> の定義式を記せ（Definition 7.2-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="L(\mathbf{x}, \lambda) = f(\mathbf{x}) - \lambda g(\mathbf{x})" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        <InlineMath math="m" /> 個の制約条件 <InlineMath math="g_1(\mathbf{x}) = 0, \dots, g_m(\mathbf{x}) = 0" /> が与えられたとき、ラグランジュの未定乗数法における点 <InlineMath math="\mathbf{a}" /> での「制約の正則性条件」とは、<InlineMath math="m" /> 個の勾配ベクトル <InlineMath math="\nabla g_1(\mathbf{a}), \dots, \nabla g_m(\mathbf{a})" /> がどのような性質を持つことか、簡潔に答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="m" /> 個の勾配ベクトルが互いに<strong>線形独立</strong>であること。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        ラグランジュの未定乗数法を用いて、制約条件 <InlineMath math="x^2 + y^2 = 1" /> の下で、関数 <InlineMath math="f(x, y) = x + y" /> の最大値と最小値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            制約条件を <InlineMath math="g(x, y) = x^2 + y^2 - 1 = 0" /> とする。<br />
                            ラグランジアンは
                        </p>
                        <BlockMath math="L(x, y, \lambda) = x + y - \lambda(x^2 + y^2 - 1)" />
                        <p>
                            停留点条件 <InlineMath math="\nabla L = \mathbf{0}" /> より、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            L_x &= 1 - 2\lambda x = 0 \implies x = \frac{1}{2\lambda} \\
                            L_y &= 1 - 2\lambda y = 0 \implies y = \frac{1}{2\lambda} \\
                            L_\lambda &= -(x^2 + y^2 - 1) = 0 \implies x^2 + y^2 = 1
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="x" /> と <InlineMath math="y" /> の式を制約条件に代入する。
                        </p>
                        <BlockMath math="\left(\frac{1}{2\lambda}\right)^2 + \left(\frac{1}{2\lambda}\right)^2 = 1 \implies \frac{2}{4\lambda^2} = 1 \implies \lambda^2 = \frac{1}{2}" />
                        <p>
                            よって <InlineMath math="\lambda = \pm \frac{1}{\sqrt{2}}" />。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>
                                <InlineMath math="\lambda = \frac{1}{\sqrt{2}}" /> のとき、<InlineMath math="x = \frac{\sqrt{2}}{2} = \frac{1}{\sqrt{2}}, y = \frac{1}{\sqrt{2}}" />。<br />
                                このとき <InlineMath math="f(x, y) = \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}} = \sqrt{2}" />。
                            </li>
                            <li>
                                <InlineMath math="\lambda = -\frac{1}{\sqrt{2}}" /> のとき、<InlineMath math="x = -\frac{1}{\sqrt{2}}, y = -\frac{1}{\sqrt{2}}" />。<br />
                                このとき <InlineMath math="f(x, y) = -\frac{1}{\sqrt{2}} - \frac{1}{\sqrt{2}} = -\sqrt{2}" />。
                            </li>
                        </ul>
                        <p>
                            円周 <InlineMath math="x^2 + y^2 = 1" /> は有界閉集合（コンパクト）であり、関数 <InlineMath math="f(x,y)" /> は連続であるため、必ず最大値と最小値を持つ。<br />
                            したがって、<strong>最大値は <InlineMath math="\sqrt{2}" /></strong>、<strong>最小値は <InlineMath math="-\sqrt{2}" /></strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        ラグランジュの未定乗数法を用いて、制約条件 <InlineMath math="2x + y = 10" /> の下で、関数 <InlineMath math="f(x, y) = xy" /> の最大値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            制約条件を <InlineMath math="g(x, y) = 2x + y - 10 = 0" /> とする。<br />
                            ラグランジアンは
                        </p>
                        <BlockMath math="L(x, y, \lambda) = xy - \lambda(2x + y - 10)" />
                        <p>
                            停留点条件 <InlineMath math="\nabla L = \mathbf{0}" /> より、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            L_x &= y - 2\lambda = 0 \implies y = 2\lambda \\
                            L_y &= x - \lambda = 0 \implies x = \lambda \\
                            L_\lambda &= -(2x + y - 10) = 0 \implies 2x + y = 10
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="x = \lambda" />, <InlineMath math="y = 2\lambda" /> を制約条件に代入する。
                        </p>
                        <BlockMath math="2(\lambda) + 2\lambda = 10 \implies 4\lambda = 10 \implies \lambda = \frac{5}{2}" />
                        <p>
                            このとき、<InlineMath math="x = \frac{5}{2}" />, <InlineMath math="y = 5" /> となる。<br />
                            関数 <InlineMath math="f" /> の値は
                        </p>
                        <BlockMath math="f\left(\frac{5}{2}, 5\right) = \frac{5}{2} \cdot 5 = \frac{25}{2}" />
                        <p>
                            となる。幾何学的に（あるいは2次関数の性質から）これが最大値であることがわかる。
                        </p>
                        <p>
                            よって、<strong>最大値は <InlineMath math="\frac{25}{2}" /></strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        制約条件が <InlineMath math="g(x, y) = y - x^3 = 0" /> の下で、目的関数 <InlineMath math="f(x, y) = x" /> の極値をラグランジュの未定乗数法を用いて探そうとすると、どのような連立方程式が得られるか。<br />
                        また、その方程式が解を持たないことを示せ（なぜ極値が存在しないのか簡潔に説明せよ）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ラグランジアンは <InlineMath math="L(x, y, \lambda) = x - \lambda(y - x^3)" /> である。<br />
                            連立方程式は以下のようになる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            L_x &= 1 + 3\lambda x^2 = 0 \\
                            L_y &= -\lambda = 0 \\
                            L_\lambda &= -(y - x^3) = 0
                            \end{aligned}
                        " />
                        <p>
                            第2式より <InlineMath math="\lambda = 0" /> である。<br />
                            これを第1式に代入すると <InlineMath math="1 + 0 = 0" /> となり、<strong>矛盾が生じる</strong>。よってこの方程式系は解を持たない。
                        </p>
                        <p>
                            幾何学的には、制約曲線 <InlineMath math="y = x^3" /> 上で関数 <InlineMath math="f(x,y) = x" /> を考えることは、曲線上の <InlineMath math="x" /> 座標そのものの最大値・最小値を探すことである。<br />
                            曲線 <InlineMath math="y = x^3" /> は <InlineMath math="x" /> が <InlineMath math="-\infty" /> から <InlineMath math="\infty" /> まですべての実数値をとるため、最大値も最小値も（極値すら）存在しない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        ラグランジュの未定乗数法を用いて、3次元空間内の平面 <InlineMath math="x + y + z = 1" /> と円柱面 <InlineMath math="x^2 + y^2 = 1" /> の交線上における、関数 <InlineMath math="f(x, y, z) = z" /> の最大値と最小値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            制約条件が2つあるため、<InlineMath math="g_1(x, y, z) = x + y + z - 1 = 0" />、<InlineMath math="g_2(x, y, z) = x^2 + y^2 - 1 = 0" /> とおく。<br />
                            ラグランジアンは
                        </p>
                        <BlockMath math="\begin{aligned}
                            &L(x, y, z, \lambda_1, \lambda_2) \\
                            &= z - \lambda_1(x + y + z - 1) - \lambda_2(x^2 + y^2 - 1) \\
                            &= z - \lambda_1(x + y + z - 1) - \lambda_2(x^2 + y^2 - 1)
                        \end{aligned}
                        " />
                        <p>
                            偏微分を <InlineMath math="0" /> とおくと、次の連立方程式を得る。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            L_x &= -\lambda_1 - 2\lambda_2 x = 0 \implies \lambda_1 = -2\lambda_2 x \\
                            L_y &= -\lambda_1 - 2\lambda_2 y = 0 \implies \lambda_1 = -2\lambda_2 y \\
                            L_z &= 1 - \lambda_1 = 0 \implies \lambda_1 = 1 \\
                            g_1 &= x + y + z - 1 = 0 \\
                            g_2 &= x^2 + y^2 - 1 = 0
                            \end{aligned}
                        " />
                        <p>
                            第3式より <InlineMath math="\lambda_1 = 1" />。これを第1式と第2式に代入する。
                        </p>
                        <BlockMath math="1 = -2\lambda_2 x, \quad 1 = -2\lambda_2 y" />
                        <p>
                            ここから <InlineMath math="-2\lambda_2 x = -2\lambda_2 y \implies \lambda_2(x - y) = 0" />。<br />
                            もし <InlineMath math="\lambda_2 = 0" /> だとすると <InlineMath math="1 = 0" /> となり矛盾。よって <InlineMath math="\lambda_2 \neq 0" /> であり、<strong><InlineMath math="x = y" /></strong> が導かれる。
                        </p>
                        <p>
                            <InlineMath math="x = y" /> を <InlineMath math="g_2" /> に代入する。
                        </p>
                        <BlockMath math="x^2 + x^2 = 1 \implies 2x^2 = 1 \implies x = \pm \frac{1}{\sqrt{2}}" />
                        <p>
                            これを用いて <InlineMath math="g_1" /> から <InlineMath math="z" /> を求める。
                        </p>
                        <BlockMath math="z = 1 - x - y = 1 - 2x" />
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>
                                <InlineMath math="x = \frac{1}{\sqrt{2}}" /> のとき、<InlineMath math="y = \frac{1}{\sqrt{2}}" />。<br />
                                このとき <InlineMath math="z = 1 - \frac{2}{\sqrt{2}} = 1 - \sqrt{2}" />。
                            </li>
                            <li>
                                <InlineMath math="x = -\frac{1}{\sqrt{2}}" /> のとき、<InlineMath math="y = -\frac{1}{\sqrt{2}}" />。<br />
                                このとき <InlineMath math="z = 1 - \left(-\frac{2}{\sqrt{2}}\right) = 1 + \sqrt{2}" />。
                            </li>
                        </ul>
                        <p>
                            交線は有界閉集合（楕円）であるため最大・最小値が存在する。<br />
                            よって、<strong>最大値は <InlineMath math="1 + \sqrt{2}" /></strong>、<strong>最小値は <InlineMath math="1 - \sqrt{2}" /></strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        体積が一定値 <InlineMath math="V" /> である直方体の箱（ふた付き）のうち、表面積が最小となるのはどのような形状か。<br />
                        辺の長さを <InlineMath math="x, y, z" /> としてラグランジュの未定乗数法を用いて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            目的関数（表面積）を <InlineMath math="f(x, y, z) = 2(xy + yz + zx)" /> とする。<br />
                            制約条件は体積 <InlineMath math="V" /> より、<InlineMath math="g(x, y, z) = xyz - V = 0" /> である。（<InlineMath math="x, y, z > 0" /> とする）
                        </p>
                        <p>
                            ラグランジアンは
                        </p>
                        <BlockMath math="L(x, y, z, \lambda) = 2(xy + yz + zx) - \lambda(xyz - V)" />
                        <p>
                            停留点条件より、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            L_x &= 2(y + z) - \lambda yz = 0 \\
                            &\implies \lambda = \frac{2(y+z)}{yz} = 2\left(\frac{1}{z} + \frac{1}{y}\right) \\
                            L_y &= 2(x + z) - \lambda xz = 0 \\
                            &\implies \lambda = \frac{2(x+z)}{xz} = 2\left(\frac{1}{z} + \frac{1}{x}\right) \\
                            L_z &= 2(x + y) - \lambda xy = 0 \\
                            &\implies \lambda = \frac{2(x+y)}{xy} = 2\left(\frac{1}{y} + \frac{1}{x}\right)
                            \end{aligned}
                        " />
                        <p>
                            これらの式がすべて等しいことから、
                        </p>
                        <BlockMath math="\frac{1}{z} + \frac{1}{y} = \frac{1}{z} + \frac{1}{x} \implies \frac{1}{y} = \frac{1}{x} \implies x = y" />
                        <BlockMath math="\frac{1}{z} + \frac{1}{x} = \frac{1}{y} + \frac{1}{x} \implies \frac{1}{z} = \frac{1}{y} \implies y = z" />
                        <p>
                            したがって、<InlineMath math="x = y = z" /> である。
                        </p>
                        <p>
                            制約条件 <InlineMath math="xyz = V" /> に代入すると、<InlineMath math="x^3 = V \implies x = V^{1/3}" />。<br />
                            よって、表面積を最小にするのは<strong>立方体</strong>のときである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
