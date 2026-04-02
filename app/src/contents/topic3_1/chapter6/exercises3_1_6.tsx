import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_1_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        ガウスの発散定理 (Theorem 6.1-1) の公式を記述し、各項の物理的な意味を簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            公式： <BlockMath math="\oiint_{\partial V} \mathbf{F} \cdot d\mathbf{S} = \iiint_V (\text{div}\, \mathbf{F})\, dV" />
                        </p>
                        <p>
                            物理的な意味：
                            <ul className="list-disc list-inside space-y-1">
                                <li><strong>左辺</strong>：領域の表面から正味で逃げ出していくベクトル場の総量（流束）。</li>
                                <li><strong>右辺</strong>：領域内部で発生している「湧き出し」の総和。</li>
                            </ul>
                            「内部で発生した湧き出しの分だけ、表面から漏れ出していく」という保存則的な意味を持つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        ガウスの法則（静電場）の積分形 <InlineMath math="\oiint_S \mathbf{E} \cdot d\mathbf{S} = Q/\varepsilon_0" /> から、微分形 <InlineMath math="\text{div}\, \mathbf{E} = \rho_e/\varepsilon_0" /> を導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            発散定理を左辺に適用すると、
                            <BlockMath math="\oiint_S \mathbf{E} \cdot d\mathbf{S} = \iiint_V (\text{div}\, \mathbf{E})\, dV" />
                        </p>
                        <p>
                            全電荷 <InlineMath math="Q" /> は電荷密度 <InlineMath math="\rho_e" /> の体積分であることから、
                            <BlockMath math="\iiint_V (\text{div}\, \mathbf{E})\, dV = \iiint_V \frac{\rho_e}{\varepsilon_0}\, dV" />
                        </p>
                        <p>
                            これが任意の領域 <InlineMath math="V" /> について成り立つことから、
                            <BlockMath math="\text{div}\, \mathbf{E} = \frac{\rho_e}{\varepsilon_0}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        非圧縮性流体（密度 <InlineMath math="\rho" /> が一定）の連続の方程式（§6.3参照）を、流速 <InlineMath math="\mathbf{v}" /> を用いた簡単な形に変形せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            一般的な連続の方程式は <InlineMath math="\frac{\partial \rho}{\partial t} + \text{div}(\rho \mathbf{v}) = 0" /> である。
                        </p>
                        <p>
                            <InlineMath math="\rho" /> が定数であるとき、 <InlineMath math="\partial \rho / \partial t = 0" /> であり、 <InlineMath math="\text{div}(\rho \mathbf{v}) = \rho\, \text{div}\, \mathbf{v}" /> となる。
                        </p>
                        <p>
                            よって <InlineMath math="\rho\, \text{div}\, \mathbf{v} = 0" /> より：
                            <BlockMath math="\text{div}\, \mathbf{v} = 0" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F} = (x^2, y^2, z^2)" /> の、単位立方体 <InlineMath math="V = [0, 1]^3" /> の表面を貫く外向き総フラックスを、発散定理を用いて計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            発散を計算すると：
                            <BlockMath math="\text{div}\, \mathbf{F} = 2x + 2y + 2z" />
                        </p>
                        <p>
                            領域内において体積分を実行する：
                            <BlockMath math="\begin{aligned} \iiint_V (2x + 2y + 2z) dV &= 2 \int_0^1 \int_0^1 \int_0^1 (x+y+z) dx dy dz \\ &= 2 \left[ \frac{1}{2} + \frac{1}{2} + \frac{1}{2} \right] = 3 \end{aligned}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        公式 <InlineMath math="V = \frac{1}{3} \oiint \mathbf{r} \cdot d\mathbf{S}" /> を用い、半径 <InlineMath math="R" /> の球の体積が <InlineMath math="\frac{4}{3}\pi R^3" /> となることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            動径ベクトル <InlineMath math="\mathbf{r}" /> の発散は <InlineMath math="\text{div}\, \mathbf{r} = 1 + 1 + 1 = 3" /> である。
                            発散定理より：
                            <BlockMath math="\oiint_S \mathbf{r} \cdot d\mathbf{S} = \iiint_V 3\, dV = 3V" />
                        </p>
                        <p>
                            一方、球面上で <InlineMath math="\mathbf{r} \cdot \hat{\mathbf{n}} = R" /> であるため（§5.4参照）：
                            <BlockMath math="\oiint_S \mathbf{r} \cdot d\mathbf{S} = \oiint_S R\, dS = R \times (4\pi R^2) = 4\pi R^3" />
                        </p>
                        <p>
                            よって、 <InlineMath math="3V = 4\pi R^3 \implies V = \frac{4}{3}\pi R^3" /> となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F} = (x, y, z)" /> について、円柱領域 <InlineMath math="V = \{ (x, y, z) \mid x^2 + y^2 \le a^2, 0 \le z \le h \}" /> で発散定理の両辺が一致することを確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>右辺（体積分）：</b>
                            <InlineMath math="\text{div}\, \mathbf{F} = 3" /> なので：
                            <BlockMath math="\iiint_V 3\, dV = 3 \times (\text{円柱の体積}) = 3\pi a^2 h" />
                        </p>
                        <p>
                            <b>左辺（面積分）：</b>
                            境界は側面、上面、下面の 3 つに分かれる。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>側面：§5.4 Example 5.4-2 と同様に、フラックスは <InlineMath math="2\pi a^2 h" /> 。</li>
                            <li>上面（ <InlineMath math="z=h" /> ）： <InlineMath math="\hat{\mathbf{n}} = (0,0,1)" /> より <InlineMath math="\mathbf{F} \cdot \hat{\mathbf{n}} = z = h" /> 。面積分は <InlineMath math="h \times (\pi a^2) = \pi a^2 h" /> 。</li>
                            <li>下面（ <InlineMath math="z=0" /> ）： <InlineMath math="\hat{\mathbf{n}} = (0,0,-1)" /> より <InlineMath math="\mathbf{F} \cdot \hat{\mathbf{n}} = -z = 0" /> 。</li>
                        </ul>
                        <p>
                            合計： <InlineMath math="2\pi a^2 h + \pi a^2 h + 0 = 3\pi a^2 h" /> 。両辺は一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        一様な電荷密度 <InlineMath math="\rho_0" /> を持つ半径 <InlineMath math="R" /> の球体内部における電場 <InlineMath math="\mathbf{E}" /> が、ガウスの法則微分形 <InlineMath math="\text{div}\, \mathbf{E} = \rho_0/\varepsilon_0" /> を満たすことを確認せよ。
                        ただし、内部電場は <InlineMath math="\mathbf{E} = \frac{\rho_0}{3\varepsilon_0}\mathbf{r}" /> で与えられるとする。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ベクトル場 <InlineMath math="\mathbf{r} = (x, y, z)" /> の発散は 3 である。よって、
                            <BlockMath math="\begin{aligned} \text{div}\, \mathbf{E} &= \text{div} \left( \frac{\rho_0}{3\varepsilon_0} \mathbf{r} \right) = \frac{\rho_0}{3\varepsilon_0} \text{div}\, \mathbf{r} \\ &= \frac{\rho_0}{3\varepsilon_0} \cdot 3 = \frac{\rho_0}{\varepsilon_0} \end{aligned}" />
                        </p>
                        <p>
                            したがって、ガウスの法則が点ごとに満たされていることが示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        逆二乗則の場 <InlineMath math="\mathbf{F} = \frac{\mathbf{r}}{r^3}" /> の、原点を含まないような任意の閉曲面 <InlineMath math="S" /> 上での流束を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            原点を含まない領域においては、場 <InlineMath math="\mathbf{F}" /> は正則であり、§1.4 等で示した通り <InlineMath math="\text{div}\, \mathbf{F} = 0" /> が常に成り立つ。
                        </p>
                        <p>
                            したがって、ガウスの発散定理より：
                            <BlockMath math="\oiint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_V 0\, dV = 0" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        質量保存則と同様に、エネルギー量（温度 <InlineMath math="T" /> ）について考える。熱流ベクトルがフーリエの法則 <InlineMath math="\mathbf{q} = -k \nabla T" /> に従い、内部に熱源がないとき、発散定理を用いて熱伝導方程式 <InlineMath math="\frac{\partial T}{\partial t} = \alpha \Delta T" /> の構成を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            領域内の熱エネルギーの変化は、表面からの熱流フラックスに等しい：
                            <BlockMath math="\iiint C \rho \frac{\partial T}{\partial t}\, dV = - \oiint \mathbf{q} \cdot d\mathbf{S}" />
                        </p>
                        <p>
                            右辺を発散定理とフーリエの法則により書き換えると：
                            <BlockMath math="- \oiint \mathbf{q} \cdot d\mathbf{S} = - \iiint \text{div}(-k \nabla T)\, dV = \iiint k \Delta T\, dV" />
                        </p>
                        <p>
                            任意の領域で成り立つことから、 <InlineMath math="C\rho \frac{\partial T}{\partial t} = k \Delta T" /> となり、係数を <InlineMath math="\alpha = k/C\rho" /> とおけば熱伝導方程式が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        グリーンの第一恒等式 <BlockMath math="\iiint_V (f \Delta g + \nabla f \cdot \nabla g)\, dV = \oiint_{\partial V} f \nabla g \cdot d\mathbf{S}" /> を、発散定理を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ベクトル場 <InlineMath math="\mathbf{G} = f \nabla g" /> の発散を計算する。
                            積の公式（Theorem 1.4-1 の変形）より：
                            <BlockMath math="\text{div}(f \nabla g) = f \text{div}(\nabla g) + \nabla f \cdot \nabla g = f \Delta g + \nabla f \cdot \nabla g" />
                        </p>
                        <p>
                            これを発散定理に代入する：
                            <BlockMath math="\iiint_V \text{div}(f \nabla g)\, dV = \oiint_{\partial V} f \nabla g \cdot d\mathbf{S}" />
                        </p>
                        <p>
                            左辺に先ほどの計算結果を代入すると、求める恒等式が得られる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
