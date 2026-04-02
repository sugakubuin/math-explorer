import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_2_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        関数 <InlineMath math="f(x, y) = x^2 y + \sin y" /> について、<InlineMath math="x" /> に関する偏導関数 <InlineMath math="f_x(x,y)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.2-1 より、<InlineMath math="y" /> を定数とみなして <InlineMath math="x" /> について微分する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            f_x(x,y) &= \frac{\partial}{\partial x}(x^2 y + \sin y) \\
                            &= y \frac{\partial}{\partial x}(x^2) + \frac{\partial}{\partial x}(\sin y) \\
                            &= y(2x) + 0 \\
                            &= 2xy
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        Theorem 5.3-1 （偏微分が連続ならば全微分可能）に関する以下の文の空欄に適する言葉を答えよ。
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md my-4">
                        <p>
                            関数 <InlineMath math="f(x, y)" /> の偏導関数 <InlineMath math="f_x, f_y" /> が存在して、点 <InlineMath math="(a, b)" /> の近傍で（　　）であるならば、<InlineMath math="f(x, y)" /> は点 <InlineMath math="(a, b)" /> において全微分可能である。
                        </p>
                    </div>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.3-1 にある通り、偏導関数が「連続」であることが全微分可能の十分条件である。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> 連続
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        多変数関数の合成関数の微分（連鎖律、Theorem 5.4-1）において、<InlineMath math="z = f(x, y)" /> であり <InlineMath math="x = x(t), y = y(t)" /> のとき、<InlineMath math="\frac{dz}{dt}" /> を表す公式を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.4-1 のパターン1より、
                        </p>
                        <BlockMath math="\frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt}" />
                        <p>である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        関数 <InlineMath math="f(x, y) = x^3 y^2 + e^{xy}" /> について、偏導関数 <InlineMath math="f_x(x,y)" /> と <InlineMath math="f_y(x,y)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="y" /> を定数とみなして <InlineMath math="x" /> で微分する。合成関数の微分により <InlineMath math="(e^{xy})_x' = y e^{xy}" /> となる。
                        </p>
                        <BlockMath math="f_x(x,y) = 3x^2 y^2 + y e^{xy}" />
                        <p>
                            次に、<InlineMath math="x" /> を定数とみなして <InlineMath math="y" /> で微分する。<InlineMath math="(e^{xy})_y' = x e^{xy}" /> となる。
                        </p>
                        <BlockMath math="f_y(x,y) = 2x^3 y + x e^{xy}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        関数 <InlineMath math="f(x, y) = x^2 \cos y" /> について、シュワルツの定理が成り立つこと、すなわち混合偏導関数 <InlineMath math="f_{xy}" /> と <InlineMath math="f_{yx}" /> が等しくなることを計算によって確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず <InlineMath math="f_x" /> と <InlineMath math="f_y" /> を求める。
                        </p>
                        <BlockMath math="f_x = 2x \cos y" />
                        <BlockMath math="f_y = -x^2 \sin y" />
                        <p>
                            次に混合偏導関数を計算する。<InlineMath math="f_{xy}" /> は <InlineMath math="f_x" /> を <InlineMath math="y" /> で偏微分する。
                        </p>
                        <BlockMath math="f_{xy} = \frac{\partial}{\partial y}(2x \cos y) = -2x \sin y" />
                        <p>
                            <InlineMath math="f_{yx}" /> は <InlineMath math="f_y" /> を <InlineMath math="x" /> で偏微分する。
                        </p>
                        <BlockMath math="f_{yx} = \frac{\partial}{\partial x}(-x^2 \sin y) = -2x \sin y" />
                        <p>
                            よって、<InlineMath math="f_{xy} = f_{yx} = -2x \sin y" /> となり、シュワルツの定理が成り立つことが確認できた。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        関数 <InlineMath math="z = x^2 + 3xy + y^2" /> において、点 <InlineMath math="(1, 2)" /> における全微分 <InlineMath math="dz" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.3-2 より、全微分は <InlineMath math="dz = z_x dx + z_y dy" /> である。
                        </p>
                        <p>
                            偏導関数を計算する。
                        </p>
                        <BlockMath math="z_x = 2x + 3y" />
                        <BlockMath math="z_y = 3x + 2y" />
                        <p>
                            点 <InlineMath math="(1, 2)" /> における偏微分係数を求める。
                        </p>
                        <BlockMath math="z_x(1,2) = 2(1) + 3(2) = 8" />
                        <BlockMath math="z_y(1,2) = 3(1) + 2(2) = 7" />
                        <p>
                            したがって、求める全微分 <InlineMath math="dz" /> は、
                        </p>
                        <BlockMath math="dz = 8 dx + 7 dy" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        陰関数定理（Proposition 5.4-2）を用いて、方程式 <InlineMath math="x^3 + y^3 - 3xy = 0" /> で定められる関数 <InlineMath math="y(x)" /> の導関数 <InlineMath math="\frac{dy}{dx}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="F(x,y) = x^3 + y^3 - 3xy" /> とおく。偏導関数 <InlineMath math="F_x, F_y" /> を計算する。
                        </p>
                        <BlockMath math="F_x = 3x^2 - 3y = 3(x^2 - y)" />
                        <BlockMath math="F_y = 3y^2 - 3x = 3(y^2 - x)" />
                        <p>
                            Proposition 5.4-2 より、<InlineMath math="\frac{dy}{dx} = -\frac{F_x}{F_y}" /> であるから代入する。
                        </p>
                        <BlockMath math="
                            \frac{dy}{dx} = -\frac{3(x^2 - y)}{3(y^2 - x)} = -\frac{x^2 - y}{y^2 - x} = \frac{y - x^2}{y^2 - x}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        関数 <InlineMath math="f(x,y) = x^3 + y^3 - 3xy" /> の極値をすべて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. まず臨界点を求めるため、<InlineMath math="f_x = 0, f_y = 0" /> を解く。
                        </p>
                        <BlockMath math="f_x = 3x^2 - 3y = 0 \implies y = x^2 \quad \dots (1)" />
                        <BlockMath math="f_y = 3y^2 - 3x = 0 \implies x = y^2 \quad \dots (2)" />
                        <p>
                            (1) を (2) に代入すると、<InlineMath math="x = (x^2)^2 = x^4" /> より <InlineMath math="x^4 - x = 0" />。
                        </p>
                        <BlockMath math="x(x^3 - 1) = x(x-1)(x^2+x+1) = 0" />
                        <p>
                            実数解は <InlineMath math="x = 0, 1" />。これに対応する <InlineMath math="y" /> は (1) より <InlineMath math="y = 0, 1" />。
                            よって臨界点は <InlineMath math="(0,0)" /> と <InlineMath math="(1,1)" /> の2点である。
                        </p>

                        <p className="mt-4">
                            2. 2階偏導関数を計算する。
                        </p>
                        <BlockMath math="f_{xx} = 6x, \quad f_{yy} = 6y, \quad f_{xy} = -3" />
                        <p>ヘッシアン <InlineMath math="D = f_{xx}f_{yy} - (f_{xy})^2" /> を求める。</p>
                        <BlockMath math="D(x,y) = (6x)(6y) - (-3)^2 = 36xy - 9" />

                        <p className="mt-4">
                            3. 各臨界点について判定する。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>
                                <strong>点 <InlineMath math="(0,0)" /> の場合：</strong><br />
                                <InlineMath math="D(0,0) = -9 < 0" /> なので、この点は<strong>鞍点</strong>であり極値を持たない。
                            </li>
                            <li>
                                <strong>点 <InlineMath math="(1,1)" /> の場合：</strong><br />
                                <InlineMath math="D(1,1) = 36(1)(1) - 9 = 27 > 0" /> であり、<InlineMath math="f_{xx}(1,1) = 6 > 0" /> である。
                                したがって、この点で<strong>極小値</strong>をとる。
                            </li>
                        </ul>
                        <p>
                            極小値は <InlineMath math="f(1,1) = 1^3 + 1^3 - 3(1)(1) = -1" />。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        ラグランジュの未定乗数法を用いて、条件 <InlineMath math="x^2 + \frac{y^2}{4} = 1" /> のもとで、関数 <InlineMath math="f(x,y) = 2x + y" /> の最大値と最小値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            条件式を <InlineMath math="g(x,y) = x^2 + \frac{y^2}{4} - 1 = 0" /> とおく。ラグランジュの未定乗数法の連立方程式を立てる。
                        </p>
                        <BlockMath math="\begin{cases} f_x = \lambda g_x \implies 2 = \lambda (2x) \implies 1 = \lambda x \quad \dots (1) \\ f_y = \lambda g_y \implies 1 = \lambda \left(\frac{y}{2}\right) \implies 2 = \lambda y \quad \dots (2) \\ x^2 + \frac{y^2}{4} = 1 \quad \dots (3) \end{cases}" />
                        <p>
                            (1)より <InlineMath math="\lambda \neq 0" /> であるから、<InlineMath math="x = \frac{1}{\lambda}" />。<br />
                            (2)より <InlineMath math="y = \frac{2}{\lambda}" />。
                        </p>
                        <p>
                            これらを (3) に代入する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \left(\frac{1}{\lambda}\right)^2 + \frac{1}{4}\left(\frac{2}{\lambda}\right)^2 &= 1 \\
                            \frac{1}{\lambda^2} + \frac{1}{\lambda^2} &= 1 \\
                            \frac{2}{\lambda^2} &= 1 \implies \lambda^2 = 2 \implies \lambda = \pm\sqrt{2}
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="\lambda" /> の値に応じて <InlineMath math="(x,y)" /> の組が決まる。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><InlineMath math="\lambda = \sqrt{2}" /> のとき：<InlineMath math="x = \frac{1}{\sqrt{2}}, y = \frac{2}{\sqrt{2}} = \sqrt{2}" />。
                                このとき <InlineMath math="f = 2\left(\frac{1}{\sqrt{2}}\right) + \sqrt{2} = 2\sqrt{2}" />。
                            </li>
                            <li><InlineMath math="\lambda = -\sqrt{2}" /> のとき：<InlineMath math="x = -\frac{1}{\sqrt{2}}, y = -\sqrt{2}" />。
                                このとき <InlineMath math="f = 2\left(-\frac{1}{\sqrt{2}}\right) - \sqrt{2} = -2\sqrt{2}" />。
                            </li>
                        </ul>
                        <p>
                            したがって、最大値は <InlineMath math="2\sqrt{2}" />、最小値は <InlineMath math="-2\sqrt{2}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        極座標変換 <InlineMath math="x = r \cos \theta, y = r \sin \theta" /> を行う。<br />
                        関数 <InlineMath math="z = f(x,y)" /> について、Proposition 5.4-1 にある偏微分の変換則を用いて、
                        <BlockMath math="x \frac{\partial z}{\partial x} + y \frac{\partial z}{\partial y} = r \frac{\partial z}{\partial r}" />
                        が成り立つことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            連鎖律より、<InlineMath math="r" /> と <InlineMath math="\theta" /> による偏微分は次のように表される。
                        </p>
                        <BlockMath math="\frac{\partial z}{\partial r} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial r} = \cos\theta \frac{\partial z}{\partial x} + \sin\theta \frac{\partial z}{\partial y}" />
                        <BlockMath math="\frac{\partial z}{\partial \theta} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial \theta} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial \theta} = -r\sin\theta \frac{\partial z}{\partial x} + r\cos\theta \frac{\partial z}{\partial y}" />
                        <p>
                            証明すべき等式の右辺 <InlineMath math="r \frac{\partial z}{\partial r}" /> を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            r \frac{\partial z}{\partial r} &= r \left( \cos\theta \frac{\partial z}{\partial x} + \sin\theta \frac{\partial z}{\partial y} \right) \\
                            &= (r \cos\theta) \frac{\partial z}{\partial x} + (r \sin\theta) \frac{\partial z}{\partial y}
                            \end{aligned}
                        " />
                        <p>
                            極座標の定義より <InlineMath math="x = r \cos \theta, y = r \sin \theta" /> であるから、これを代入する。
                        </p>
                        <BlockMath math="= x \frac{\partial z}{\partial x} + y \frac{\partial z}{\partial y}" />
                        <p>
                            ゆえに、左辺と一致し証明された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
