import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="8" number={1}>
                    <p>
                        方程式 <InlineMath math="F(x, y) = 0" /> が点 <InlineMath math="(a, b)" /> の近傍で陰関数 <InlineMath math="y = f(x)" /> を定めるための、陰関数定理（Theorem 8.1-1）における2つの条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li><InlineMath math="F(a, b) = 0" /> （点が図形上にあること）</li>
                            <li><InlineMath math="F_y(a, b) \neq 0" /> （<InlineMath math="y" /> 方向の偏微分が <InlineMath math="0" /> でないこと）</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>
                        多変数関数において、<InlineMath math="m" /> 個の方程式 <InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{y}) = \mathbf{0}" /> から <InlineMath math="m" /> 個の変数 <InlineMath math="\mathbf{y}" /> を <InlineMath math="n" /> 個の変数 <InlineMath math="\mathbf{x}" /> の関数として解くための、多変数陰関数定理（Theorem 8.2-1）における非零条件をヤコビ行列を用いて記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\mathbf{y}" /> に関するヤコビ行列の行列式が <InlineMath math="0" /> でないこと。すなわち、
                        </p>
                        <BlockMath math="\det J_{\mathbf{y}} \mathbf{F}(\mathbf{a}, \mathbf{b}) \neq 0" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>
                        方程式 <InlineMath math="F(x, y, z) = 0" /> で表される曲面上の点 <InlineMath math="P(a, b, c)" /> における法線ベクトルの一つを、関数 <InlineMath math="F" /> の偏導関数を用いて表せ。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\mathbf{n} = \nabla F(a, b, c) = (F_x(a,b,c), F_y(a,b,c), F_z(a,b,c))" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="8" number={4}>
                    <p>
                        方程式 <InlineMath math="x^3 + y^3 - 3xy = 0" /> で定まる曲線について、陰関数微分法を用いて導関数 <InlineMath math="\frac{dy}{dx}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="F(x, y) = x^3 + y^3 - 3xy" /> とおく。偏導関数は
                        </p>
                        <BlockMath math="F_x = 3x^2 - 3y, \quad F_y = 3y^2 - 3x" />
                        <p>
                            である。陰関数の微分公式より、
                        </p>
                        <BlockMath math="\frac{dy}{dx} = -\frac{F_x}{F_y} = -\frac{3x^2 - 3y}{3y^2 - 3x} = -\frac{x^2 - y}{y^2 - x} = \frac{x^2 - y}{x - y^2}" />
                        <p>
                            となる。（ただし <InlineMath math="x \neq y^2" /> とする。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p>
                        方程式 <InlineMath math="x^2 + \frac{y^2}{4} = 1" /> で定まる楕円上の点 <InlineMath math="\left(\frac{1}{\sqrt{2}}, \sqrt{2}\right)" /> における接線の方程式を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="F(x, y) = x^2 + \frac{y^2}{4} - 1" /> とおく。偏導関数は
                        </p>
                        <BlockMath math="F_x = 2x, \quad F_y = \frac{y}{2}" />
                        <p>
                            点 <InlineMath math="\left(\frac{1}{\sqrt{2}}, \sqrt{2}\right)" /> での値を計算する。
                        </p>
                        <BlockMath math="F_x\left(\frac{1}{\sqrt{2}}, \sqrt{2}\right) = \frac{2}{\sqrt{2}} = \sqrt{2}" />
                        <BlockMath math="F_y\left(\frac{1}{\sqrt{2}}, \sqrt{2}\right) = \frac{\sqrt{2}}{2} = \frac{1}{\sqrt{2}}" />
                        <p>
                            接線の方程式は <InlineMath math="F_x(a,b)(x-a) + F_y(a,b)(y-b) = 0" /> であるから、
                        </p>
                        <BlockMath math="\sqrt{2} \left(x - \frac{1}{\sqrt{2}}\right) + \frac{1}{\sqrt{2}} (y - \sqrt{2}) = 0" />
                        <p>
                            展開して整理する。
                        </p>
                        <BlockMath math="\sqrt{2} x - 1 + \frac{1}{\sqrt{2}} y - 1 = 0 \implies \sqrt{2} x + \frac{1}{\sqrt{2}} y = 2" />
                        <p>
                            （両辺に <InlineMath math="\sqrt{2}" /> を掛けると <InlineMath math="2x + y = 2\sqrt{2}" /> となる。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>
                        曲面 <InlineMath math="z = x^2 + y^2" /> 上の点 <InlineMath math="(1, 2, 5)" /> における接平面の方程式を求めよ。<br />
                        （ヒント：方程式を <InlineMath math="F(x,y,z) = 0" /> の形に変形せよ。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            方程式を <InlineMath math="F(x, y, z) = x^2 + y^2 - z = 0" /> とする。勾配ベクトルを計算する。
                        </p>
                        <BlockMath math="\nabla F = (2x, 2y, -1)" />
                        <p>
                            点 <InlineMath math="(1, 2, 5)" /> での勾配ベクトル（法線ベクトル）は
                        </p>
                        <BlockMath math="\mathbf{n} = \nabla F(1, 2, 5) = (2(1), 2(2), -1) = (2, 4, -1)" />
                        <p>
                            である。よって接平面の方程式は、
                        </p>
                        <BlockMath math="2(x - 1) + 4(y - 2) - 1(z - 5) = 0" />
                        <p>
                            展開して整理する。
                        </p>
                        <BlockMath math="2x - 2 + 4y - 8 - z + 5 = 0 \implies 2x + 4y - z = 5" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={7}>
                    <p>
                        方程式 <InlineMath math="e^z - xyz = 1" /> は点 <InlineMath math="(1, 1, 0)" /> の近傍で陰関数 <InlineMath math="z = f(x, y)" /> を定める。<br />
                        点 <InlineMath math="(1, 1)" /> における偏微分係数 <InlineMath math="\frac{\partial z}{\partial x}" /> および <InlineMath math="\frac{\partial z}{\partial y}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="F(x, y, z) = e^z - xyz - 1" /> とおく。偏導関数は
                        </p>
                        <BlockMath math="F_x = -yz, \quad F_y = -xz, \quad F_z = e^z - xy" />
                        <p>
                            である。陰関数の偏微分公式 <InlineMath math="\frac{\partial z}{\partial x} = -\frac{F_x}{F_z}" /> と <InlineMath math="\frac{\partial z}{\partial y} = -\frac{F_y}{F_z}" /> を用いる。
                        </p>
                        <p>
                            点 <InlineMath math="(1, 1, 0)" /> における各偏微分係数の値を計算する。
                        </p>
                        <BlockMath math="F_x(1, 1, 0) = -(1)(0) = 0" />
                        <BlockMath math="F_y(1, 1, 0) = -(1)(0) = 0" />
                        <BlockMath math="F_z(1, 1, 0) = e^0 - (1)(1) = 1 - 1 = 0" />
                        <p>
                            おっと、<InlineMath math="F_z(1, 1, 0) = 0" /> となってしまった。これは陰関数定理の条件 <InlineMath math="F_z \neq 0" /> を満たしていない！
                        </p>
                        <p>
                            <strong>注意：</strong> 問題設定の確認。方程式 <InlineMath math="e^z - xyz = 1" /> に <InlineMath math="x=1, y=1, z=0" /> を代入すると <InlineMath math="e^0 - 0 = 1" /> で式は成り立つが、<InlineMath math="F_z = 0" /> のため、通常の陰関数定理はこの点では使えない。<br />
                            （この関数は <InlineMath math="z" /> について解く際に分岐が生じる特異点である。）<br />
                            したがって、偏微分係数 <InlineMath math="\frac{\partial z}{\partial x}" /> および <InlineMath math="\frac{\partial z}{\partial y}" /> は<strong>定義されない（存在しない）</strong>。
                        </p>
                        <p className="mt-4 text-sm text-slate-500">
                            ※ 別の点、例えば <InlineMath math="(e, 1, 1)" /> などを考えた場合は計算可能である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="8" number={8}>
                    <p>
                        方程式 <InlineMath math="x^2 + y^2 + z^2 = 3" /> で定まる関数 <InlineMath math="z = f(x, y)" /> （<InlineMath math="z > 0" /> とする）について、方程式の両辺を直接偏微分する方法により、点 <InlineMath math="(1, 1, 1)" /> における2階偏導関数 <InlineMath math="\frac{\partial^2 z}{\partial x^2}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            方程式 <InlineMath math="x^2 + y^2 + z^2 = 3" /> の両辺を <InlineMath math="x" /> で偏微分する（<InlineMath math="y" /> は定数扱い）。
                        </p>
                        <BlockMath math="2x + 0 + 2z \frac{\partial z}{\partial x} = 0 \implies x + z \frac{\partial z}{\partial x} = 0" />
                        <p>
                            ここから、1階偏導関数は <InlineMath math="\frac{\partial z}{\partial x} = -\frac{x}{z}" /> となる。点 <InlineMath math="(1, 1, 1)" /> では <InlineMath math="\frac{\partial z}{\partial x} = -1" /> である。
                        </p>
                        <p>
                            次に、式 <InlineMath math="x + z \frac{\partial z}{\partial x} = 0" /> の両辺をさらに <InlineMath math="x" /> で偏微分する。<InlineMath math="z" /> も <InlineMath math="\frac{\partial z}{\partial x}" /> も <InlineMath math="x" /> の関数であるから積の微分を用いる。
                        </p>
                        <BlockMath math="1 + \frac{\partial z}{\partial x} \cdot \frac{\partial z}{\partial x} + z \cdot \frac{\partial^2 z}{\partial x^2} = 0" />
                        <p>
                            点 <InlineMath math="(1, 1, 1)" /> での値を代入する。<InlineMath math="z = 1" />、<InlineMath math="\frac{\partial z}{\partial x} = -1" /> である。
                        </p>
                        <BlockMath math="1 + (-1)^2 + 1 \cdot \frac{\partial^2 z}{\partial x^2} = 0" />
                        <BlockMath math="1 + 1 + \frac{\partial^2 z}{\partial x^2} = 0 \implies \frac{\partial^2 z}{\partial x^2} = -2" />
                        <p>
                            よって、求める値は <InlineMath math="-2" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={9}>
                    <p>
                        連立方程式
                        <BlockMath math="\begin{aligned} u^2 + v^2 + x^2 - y^2 &= 0 \\ u + v - x + y &= 0 \end{aligned}" />
                        は、点 <InlineMath math="(x,y,u,v) = (1, 1, 0, 0)" /> の近傍で、<InlineMath math="u, v" /> を <InlineMath math="x, y" /> の関数として定めるか判定せよ。<br />
                        （ヤコビ行列の行列式を用いて定理 8.2-1 の条件を確認せよ。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="F_1 = u^2 + v^2 + x^2 - y^2" />、<InlineMath math="F_2 = u + v - x + y" /> とおく。<br />
                            <InlineMath math="u, v" /> を <InlineMath math="x, y" /> の関数として解くためには、<InlineMath math="u, v" /> に関するヤコビ行列の行列式が <InlineMath math="0" /> でないことを確認すればよい。
                        </p>
                        <p>
                            ヤコビ行列を計算する。
                        </p>
                        <BlockMath math="J_{(u,v)} \mathbf{F} = \begin{pmatrix} \frac{\partial F_1}{\partial u} & \frac{\partial F_1}{\partial v} \\ \frac{\partial F_2}{\partial u} & \frac{\partial F_2}{\partial v} \end{pmatrix} = \begin{pmatrix} 2u & 2v \\ 1 & 1 \end{pmatrix}" />
                        <p>
                            点 <InlineMath math="(x,y,u,v) = (1, 1, 0, 0)" /> におけるヤコビ行列は、
                        </p>
                        <BlockMath math="J_{(u,v)} \mathbf{F}(1, 1, 0, 0) = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}" />
                        <p>
                            その行列式は
                        </p>
                        <BlockMath math="\det J = (0)(1) - (0)(1) = 0" />
                        <p>
                            である。行列式が <InlineMath math="0" /> となってしまったため、陰関数定理の条件を満たさず、この方程式系から<strong>一意な陰関数 <InlineMath math="u(x,y), v(x,y)" /> は定まらない</strong>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={10}>
                    <p>
                        方程式 <InlineMath math="F(x, y) = x^3 + y^3 - 3xy = 0" /> のグラフ（デカルトの正葉線）において、接線が水平（<InlineMath math="x" /> 軸と平行）になる点の座標を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            接線が水平になる条件は、傾き <InlineMath math="\frac{dy}{dx} = 0" /> である。
                            陰関数微分法より、
                        </p>
                        <BlockMath math="\frac{dy}{dx} = -\frac{F_x}{F_y} = -\frac{3x^2 - 3y}{3y^2 - 3x} = 0" />
                        <p>
                            したがって、分子が <InlineMath math="0" />、すなわち <InlineMath math="3x^2 - 3y = 0 \implies y = x^2" /> が成り立つ必要がある。（このとき分母 <InlineMath math="F_y \neq 0" /> を後で確認する。）
                        </p>
                        <p>
                            <InlineMath math="y = x^2" /> を元の方程式に代入する。
                        </p>
                        <BlockMath math="\begin{aligned}
                            x^3 + (x^2)^3 &- 3x(x^2) = 0 \\
                            &\implies x^3 + x^6 - 3x^3 = 0 \\
                            &\implies x^6 - 2x^3 = 0 \\
                            &\implies x^3(x^3 - 2) = 0
                        \end{aligned}
                        " />
                        <p>
                            よって <InlineMath math="x = 0" /> または <InlineMath math="x = \sqrt[3]{2}" />。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>
                                <InlineMath math="x = 0" /> のとき、<InlineMath math="y = 0" />。しかしこの点 <InlineMath math="(0,0)" /> では分母 <InlineMath math="F_y = 3(0)^2 - 3(0) = 0" /> となり、陰関数定理の条件を満たさず、接線は定義できない（特異点）。
                            </li>
                            <li>
                                <InlineMath math="x = \sqrt[3]{2} = 2^{1/3}" /> のとき、<InlineMath math="y = (2^{1/3})^2 = 2^{2/3} = \sqrt[3]{4}" />。<br />
                                このとき分母は <InlineMath math="F_y = 3(2^{4/3}) - 3(2^{1/3}) \neq 0" /> であり問題ない。
                            </li>
                        </ul>
                        <p>
                            したがって、接線が水平になる点は <strong><InlineMath math="(2^{1/3}, 2^{2/3})" /></strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
