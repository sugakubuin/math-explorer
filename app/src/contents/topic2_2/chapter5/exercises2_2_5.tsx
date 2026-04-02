import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        関数 <InlineMath math="x = x(t)" />, <InlineMath math="y = y(t)" /> が微分可能であり、2変数関数 <InlineMath math="z = f(x, y)" /> が全微分可能であるとする。<br />
                        このとき、合成関数 <InlineMath math="z(t) = f(x(t), y(t))" /> の導関数 <InlineMath math="\frac{dz}{dt}" /> を与える連鎖律の公式を記せ（Theorem 5.1-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\frac{dz}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        2変数ベクトル値関数 <InlineMath math="\boldsymbol{f}(x, y) = \begin{pmatrix} f_1(x, y) \\ f_2(x, y) \end{pmatrix}" /> のヤコビ行列 <InlineMath math="J_{\boldsymbol{f}}(x, y)" /> の定義式を、偏導関数を成分とする <InlineMath math="2 \times 2" /> 行列として記せ（Definition 5.2-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="J_{\boldsymbol{f}}(x, y) = \begin{pmatrix} 
                        \frac{\partial f_1}{\partial x} & \frac{\partial f_1}{\partial y} \\
                        \frac{\partial f_2}{\partial x} & \frac{\partial f_2}{\partial y}
                        \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        シュワルツの定理（Theorem 5.3-1）によれば、2変数関数 <InlineMath math="f(x, y)" /> について、ある条件を満たすとき混合偏導関数の順序交換 <InlineMath math="f_{xy} = f_{yx}" /> が成り立つ。<br />
                        そのために必要な <InlineMath math="f_{xy}" /> および <InlineMath math="f_{yx}" /> に関する条件（関数の「良さ」のクラス）を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            混合偏導関数 <InlineMath math="f_{xy}" /> と <InlineMath math="f_{yx}" /> が存在し、かつそれらが<strong>連続</strong>であること（<InlineMath math="C^2" /> 級関数であること）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        <InlineMath math="z = x^2 y" />、<InlineMath math="x = e^t" />、<InlineMath math="y = \sin t" /> のとき、多変数の連鎖律を用いて導関数 <InlineMath math="\frac{dz}{dt}" /> を <InlineMath math="t" /> の式として求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            連鎖律の公式は <InlineMath math="\frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}" /> である。
                        </p>
                        <p>
                            まず、各偏微分・微分を計算する。
                        </p>
                        <BlockMath math="\frac{\partial z}{\partial x} = 2xy, \quad \frac{\partial z}{\partial y} = x^2" />
                        <BlockMath math="\frac{dx}{dt} = e^t, \quad \frac{dy}{dt} = \cos t" />
                        <p>
                            これらを連鎖律に代入する。
                        </p>
                        <BlockMath math="\frac{dz}{dt} = (2xy)(e^t) + (x^2)(\cos t)" />
                        <p>
                            <InlineMath math="x, y" /> を <InlineMath math="t" /> の式で置き換える。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \frac{dz}{dt} &= 2(e^t)(\sin t)(e^t) + (e^t)^2(\cos t) \\
                            &= 2e^{2t}\sin t + e^{2t}\cos t \\
                            &= e^{2t}(2\sin t + \cos t)
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        極座標変換 <InlineMath math="x = r \cos \theta, y = r \sin \theta" /> を考える。<br />
                        この変換に対応する写像 <InlineMath math="\boldsymbol{g}(r, \theta) = \begin{pmatrix} r \cos \theta \\ r \sin \theta \end{pmatrix}" /> のヤコビ行列 <InlineMath math="J_{\boldsymbol{g}}(r, \theta)" /> を求め、さらにそのヤコビアン（行列式） <InlineMath math="\det J_{\boldsymbol{g}}(r, \theta)" /> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            成分関数は <InlineMath math="g_1(r, \theta) = r \cos \theta" />、<InlineMath math="g_2(r, \theta) = r \sin \theta" /> である。<br />
                            偏導関数を計算する。
                        </p>
                        <BlockMath math="\frac{\partial g_1}{\partial r} = \cos \theta, \quad \frac{\partial g_1}{\partial \theta} = -r \sin \theta" />
                        <BlockMath math="\frac{\partial g_2}{\partial r} = \sin \theta, \quad \frac{\partial g_2}{\partial \theta} = r \cos \theta" />
                        <p>
                            したがって、ヤコビ行列は
                        </p>
                        <BlockMath math="J_{\boldsymbol{g}}(r, \theta) = \begin{pmatrix} 
                        \cos \theta & -r \sin \theta \\
                        \sin \theta & r \cos \theta
                        \end{pmatrix}" />
                        <p>
                            となる。<br />
                            次に、この行列式（ヤコビアン）を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \det J_{\boldsymbol{g}}(r, \theta) &= (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta) \\
                            &= r \cos^2 \theta + r \sin^2 \theta \\
                            &= r(\cos^2 \theta + \sin^2 \theta) \\
                            &= r
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        関数 <InlineMath math="f(x, y) = x^3 e^y - y^2 \sin x" /> について、2階混合偏導関数 <InlineMath math="f_{xy}" /> と <InlineMath math="f_{yx}" /> をそれぞれ計算し、それらが一致することを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、1階偏導関数 <InlineMath math="f_x" /> と <InlineMath math="f_y" /> を求める。
                        </p>
                        <BlockMath math="f_x = \frac{\partial}{\partial x}(x^3 e^y - y^2 \sin x) = 3x^2 e^y - y^2 \cos x" />
                        <BlockMath math="f_y = \frac{\partial}{\partial y}(x^3 e^y - y^2 \sin x) = x^3 e^y - 2y \sin x" />
                        <p>
                            次に、混合偏導関数を計算する。
                        </p>
                        <p>
                            <InlineMath math="f_{xy}" /> （<InlineMath math="f_x" /> を <InlineMath math="y" /> で偏微分）：
                        </p>
                        <BlockMath math="f_{xy} = \frac{\partial}{\partial y}(3x^2 e^y - y^2 \cos x) = 3x^2 e^y - 2y \cos x" />
                        <p>
                            <InlineMath math="f_{yx}" /> （<InlineMath math="f_y" /> を <InlineMath math="x" /> で偏微分）：
                        </p>
                        <BlockMath math="f_{yx} = \frac{\partial}{\partial x}(x^3 e^y - 2y \sin x) = 3x^2 e^y - 2y \cos x" />
                        <p>
                            結果が一致することが確認できた。
                        </p>
                        <BlockMath math="f_{xy} = f_{yx} = 3x^2 e^y - 2y \cos x" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        変数変換 <InlineMath math="x = u + v" />, <InlineMath math="y = u - v" /> により、関数 <InlineMath math="z = f(x, y)" /> を <InlineMath math="Z(u, v) = f(u+v, u-v)" /> と見なす。<br />
                        連鎖律を用いて <InlineMath math="Z_u" /> と <InlineMath math="Z_v" /> を、<InlineMath math="f_x" /> と <InlineMath math="f_y" /> を用いて表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            連鎖律より、
                        </p>
                        <BlockMath math="Z_u = \frac{\partial Z}{\partial u} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial u} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial u}" />
                        <BlockMath math="Z_v = \frac{\partial Z}{\partial v} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial v} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial v}" />
                        <p>
                            変換式 <InlineMath math="x = u + v" />, <InlineMath math="y = u - v" /> の偏微分を計算する。
                        </p>
                        <BlockMath math="\frac{\partial x}{\partial u} = 1, \quad \frac{\partial y}{\partial u} = 1" />
                        <BlockMath math="\frac{\partial x}{\partial v} = 1, \quad \frac{\partial y}{\partial v} = -1" />
                        <p>
                            これらを代入して、
                        </p>
                        <BlockMath math="Z_u = f_x \cdot 1 + f_y \cdot 1 = f_x + f_y" />
                        <BlockMath math="Z_v = f_x \cdot 1 + f_y \cdot (-1) = f_x - f_y" />
                        <p>
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        <InlineMath math="f(x, y) = x y^2" /> のとき、変数変換 <InlineMath math="x = r \cos \theta" />, <InlineMath math="y = r \sin \theta" /> を行った後の関数 <InlineMath math="Z(r, \theta) = f(r \cos \theta, r \sin \theta)" /> について、連鎖律を用いて <InlineMath math="\frac{\partial Z}{\partial r}" /> と <InlineMath math="\frac{\partial Z}{\partial \theta}" /> を計算せよ。<br />
                        また、直接 <InlineMath math="Z(r, \theta)" /> を <InlineMath math="r, \theta" /> の式としてから偏微分して、結果が一致することを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>連鎖律を用いる方法：</strong>
                        </p>
                        <BlockMath math="f_x = y^2, \quad f_y = 2xy" />
                        <p>
                            極座標の連鎖律公式より、
                        </p>
                        <BlockMath math="Z_r = f_x \cos\theta + f_y \sin\theta = y^2 \cos\theta + 2xy \sin\theta" />
                        <BlockMath math="Z_\theta = -f_x r\sin\theta + f_y r\cos\theta = -y^2 r\sin\theta + 2xy r\cos\theta" />
                        <p>
                            これらに <InlineMath math="x = r\cos\theta, y = r\sin\theta" /> を代入する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            Z_r &= (r\sin\theta)^2 \cos\theta + 2(r\cos\theta)(r\sin\theta) \sin\theta \\
                            &= r^2 \sin^2\theta \cos\theta + 2r^2 \cos\theta \sin^2\theta \\
                            &= 3r^2 \sin^2\theta \cos\theta
                            \end{aligned}
                        " />
                        <BlockMath math="
                            \begin{aligned}
                            Z_\theta &= -(r\sin\theta)^2 r\sin\theta + 2(r\cos\theta)(r\sin\theta) r\cos\theta \\
                            &= -r^3 \sin^3\theta + 2r^3 \cos^2\theta \sin\theta
                            \end{aligned}
                        " />
                        <p className="mt-4">
                            <strong>直接計算する方法：</strong>
                        </p>
                        <p>
                            <InlineMath math="Z(r, \theta)" /> の式を作る。
                        </p>
                        <BlockMath math="Z(r, \theta) = (r \cos\theta)(r \sin\theta)^2 = r^3 \cos\theta \sin^2\theta" />
                        <p>
                            これを <InlineMath math="r" /> と <InlineMath math="\theta" /> で偏微分する。
                        </p>
                        <BlockMath math="Z_r = \frac{\partial}{\partial r}(r^3 \cos\theta \sin^2\theta) = 3r^2 \cos\theta \sin^2\theta" />
                        <BlockMath math="
                            \begin{aligned}
                            Z_\theta &= r^3 \frac{\partial}{\partial \theta}(\cos\theta \cdot \sin^2\theta) \\
                            &= r^3 \left( (-\sin\theta)\sin^2\theta + \cos\theta(2\sin\theta\cos\theta) \right) \\
                            &= r^3(-\sin^3\theta + 2\cos^2\theta\sin\theta) \\
                            &= -r^3\sin^3\theta + 2r^3\cos^2\theta\sin\theta
                            \end{aligned}
                        " />
                        <p>
                            連鎖律を用いた結果と直接計算した結果が完全に一致することが確認できた。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        問題7の変数変換 <InlineMath math="x = u + v" />, <InlineMath math="y = u - v" /> について、2階偏導関数 <InlineMath math="Z_{uu}" /> を <InlineMath math="f_{xx}, f_{xy}, f_{yy}" /> を用いて表せ。<br />
                        （関数 <InlineMath math="f" /> は <InlineMath math="C^2" /> 級であり、<InlineMath math="f_{xy} = f_{yx}" /> が成り立つとする。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            問題7より、1階偏導関数は次のように表される。
                        </p>
                        <BlockMath math="Z_u = f_x + f_y" />
                        <p>
                            これは、微分作用素として
                        </p>
                        <BlockMath math="\frac{\partial}{\partial u} = \frac{\partial}{\partial x} + \frac{\partial}{\partial y}" />
                        <p>
                            が成り立つことを意味する。
                        </p>
                        <p>
                            <InlineMath math="Z_{uu}" /> を計算するため、<InlineMath math="Z_u" /> にもう一度 <InlineMath math="\frac{\partial}{\partial u}" /> を適用する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            Z_{uu} &= \frac{\partial}{\partial u}(Z_u) \\
                            &= \left(\frac{\partial}{\partial x} + \frac{\partial}{\partial y}\right)(f_x + f_y) \\
                            &= \frac{\partial}{\partial x}(f_x + f_y) + \frac{\partial}{\partial y}(f_x + f_y) \\
                            &= (f_{xx} + f_{yx}) + (f_{xy} + f_{yy})
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="f" /> は <InlineMath math="C^2" /> 級であるためシュワルツの定理より <InlineMath math="f_{yx} = f_{xy}" /> が成り立つ。
                            これを代入して整理する。
                        </p>
                        <BlockMath math="Z_{uu} = f_{xx} + 2f_{xy} + f_{yy}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        定理 5.1-1 の証明において、合成関数の微分 <InlineMath math="\frac{dz}{dt}" /> が偏微分 <InlineMath math="\frac{\partial f}{\partial x}" /> などの和で表されるための評価を行う際、<InlineMath math="f(x, y)" /> が「偏微分可能」であるだけでは不十分であり、「全微分可能」であることが本質的に用いられている。<br />
                        全微分可能性による 1次近似式
                    </p>
                    <BlockMath math="\Delta z = \frac{\partial f}{\partial x} \Delta x + \frac{\partial f}{\partial y} \Delta y + \varepsilon(\Delta x, \Delta y)" />
                    <p>
                        のどのような性質が、連鎖律の証明を完結させるために決定的な役割を果たしているか、簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            連鎖律の証明では、両辺を <InlineMath math="\Delta t" /> で割って極限をとる際、誤差項の処理
                        </p>
                        <BlockMath math="\lim_{\Delta t \to 0} \frac{\varepsilon(\Delta x, \Delta y)}{\Delta t} = 0" />
                        <p>
                            を示す必要がある。全微分可能性の定義には
                        </p>
                        <BlockMath math="\lim_{(\Delta x, \Delta y) \to (0,0)} \frac{\varepsilon(\Delta x, \Delta y)}{\sqrt{\Delta x^2 + \Delta y^2}} = 0" />
                        <p>
                            という性質が含まれているため、誤差項を
                        </p>
                        <BlockMath math="\frac{\varepsilon(\Delta x, \Delta y)}{\sqrt{\Delta x^2 + \Delta y^2}} \cdot \frac{\sqrt{\Delta x^2 + \Delta y^2}}{\Delta t}" />
                        <p>
                            と分解でき、「<InlineMath math="0" /> に収束する部分」×「有界な部分」として全体が <InlineMath math="0" /> に収束することを示せる。
                        </p>
                        <p>
                            単なる偏微分可能性では、誤差項が座標軸方向（<InlineMath math="\Delta x=0" /> または <InlineMath math="\Delta y=0" />）でしか小さくならないため、斜めの経路（<InlineMath math="\Delta x" /> と <InlineMath math="\Delta y" /> が同時に変化する経路）において誤差項が <InlineMath math="\Delta t" /> よりも速く <InlineMath math="0" /> に収束する保証が得られず、証明が成り立たない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
