import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_1_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        次のスカラー場 <InlineMath math="f(x, y, z)" /> の勾配 <InlineMath math="\nabla f" /> を求めよ。
                    </p>
                    <BlockMath math="f(x, y, z) = x^2 y - 2yz + z^3" />
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-3 に従い、各成分を偏微分して求める。
                        </p>
                        <BlockMath math="\begin{aligned} \frac{\partial f}{\partial x} &= 2xy \\ \frac{\partial f}{\partial y} &= x^2 - 2z \\ \frac{\partial f}{\partial z} &= -2y + 3z^2 \end{aligned}" />
                        <p>
                            したがって、
                        </p>
                        <BlockMath math="\nabla f = (2xy, x^2 - 2z, -2y + 3z^2)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        次のベクトル場 <InlineMath math="\mathbf{V}(x, y, z)" /> の発散 <InlineMath math="\text{div}\, \mathbf{V}" /> を求めよ。
                    </p>
                    <BlockMath math="\mathbf{V} = (x^2, \sin y, e^z)" />
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-2 より、各成分の偏微分の和をとる。
                        </p>
                        <BlockMath math="\begin{aligned} \text{div}\, \mathbf{V} &= \frac{\partial}{\partial x}(x^2) + \frac{\partial}{\partial y}(\sin y) + \frac{\partial}{\partial z}(e^z) \\ &= 2x + \cos y + e^z \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        次のベクトル場 <InlineMath math="\mathbf{F}(x, y, z)" /> の回転 <InlineMath math="\text{rot}\, \mathbf{F}" /> を求めよ。
                    </p>
                    <BlockMath math="\mathbf{F} = (y, z, x)" />
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-1 の定義式に従って計算する。
                        </p>
                        <BlockMath math="\begin{aligned} \text{rot}\, \mathbf{F} &= \left( \frac{\partial x}{\partial y} - \frac{\partial z}{\partial z}, \; \frac{\partial y}{\partial z} - \frac{\partial x}{\partial x}, \; \frac{\partial z}{\partial x} - \frac{\partial y}{\partial y} \right) \\ &= (0 - 1, \; 0 - 1, \; 0 - 1) \\ &= (-1, -1, -1) \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        スカラー場 <InlineMath math="f(x, y, z) = xy^2 z^3" /> について、点 <InlineMath math="(1, 1, 1)" /> におけるベクトル <InlineMath math="\mathbf{a} = (1, 2, 2)" /> 方向の方向微分を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、勾配 <InlineMath math="\nabla f" /> を計算する。
                        </p>
                        <BlockMath math="\nabla f = (y^2 z^3, 2xyz^3, 3xy^2 z^2)" />
                        <p>
                            点 <InlineMath math="(1, 1, 1)" /> では、 <InlineMath math="\nabla f(1, 1, 1) = (1, 2, 3)" /> である。
                        </p>
                        <p>
                            次に、単位方向ベクトル <InlineMath math="\mathbf{u}" /> を求める。
                        </p>
                        <BlockMath math="\mathbf{u} = \frac{\mathbf{a}}{|\mathbf{a}|} = \frac{(1, 2, 2)}{\sqrt{1^2+2^2+2^2}} = \frac{1}{3}(1, 2, 2)" />
                        <p>
                            Theorem 1.1-1 より、方向微分は内積で与えられる。
                        </p>
                        <BlockMath math="\begin{aligned} D_{\mathbf{u}}f &= \nabla f \cdot \mathbf{u} \\ &= (1, 2, 3) \cdot \frac{1}{3}(1, 2, 2) \\ &= \frac{1(1) + 2(2) + 3(2)}{3} = \frac{11}{3} \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        曲面 <InlineMath math="x^2 + y^2 + z^2 = 3" /> の点 <InlineMath math="(1, 1, 1)" /> における単位法線ベクトルを 1 つ求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(x, y, z) = x^2 + y^2 + z^2" /> とおくと、曲面は等値面 <InlineMath math="f(x, y, z) = 3" /> である。
                            Theorem 1.1-2 より、勾配ベクトル <InlineMath math="\nabla f" /> は等値面に直交する（法線ベクトルである）。
                        </p>
                        <BlockMath math="\nabla f = (2x, 2y, 2z)" />
                        <p>
                            点 <InlineMath math="(1, 1, 1)" /> における法線ベクトルは <InlineMath math="\mathbf{v} = (2, 2, 2)" /> である。
                            これを正規化して単位法線ベクトルを得る。
                        </p>
                        <BlockMath math="\hat{\mathbf{n}} = \frac{\mathbf{v}}{|\mathbf{v}|} = \frac{(2, 2, 2)}{\sqrt{2^2+2^2+2^2}} = \frac{1}{\sqrt{3}}(1, 1, 1)" />
                        <p>
                            (向かい側のベクトル <InlineMath math="-\frac{1}{\sqrt{3}}(1, 1, 1)" /> も正解である。)
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F} = (-y, x, 0)" /> について、発散が 0 になることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            各成分を定義式に代入する。
                        </p>
                        <BlockMath math="\begin{aligned} \text{div}\, \mathbf{F} &= \frac{\partial}{\partial x}(-y) + \frac{\partial}{\partial y}(x) + \frac{\partial}{\partial z}(0) \\ &= 0 + 0 + 0 = 0 \end{aligned}" />
                        <p>
                            したがって、この場は全空間で非圧縮である（Remark 「発散の直感的な意味」参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        スカラー場 <InlineMath math="f = e^x \sin y" /> のラプラス演算を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.4-1 に従い、2階偏微分の和をとる。
                        </p>
                        <BlockMath math="\begin{aligned} \frac{\partial f}{\partial x} &= e^x \sin y \implies \frac{\partial^2 f}{\partial x^2} = e^x \sin y \\ \frac{\partial f}{\partial y} &= e^x \cos y \implies \frac{\partial^2 f}{\partial y^2} = -e^x \sin y \end{aligned}" />
                        <p>
                            よって、
                        </p>
                        <BlockMath math="\Delta f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2} = e^x \sin y - e^x \sin y + 0 = 0" />
                        <p>
                            この場はラプラス方程式を満たす。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        ベクトル三重積の公式（Proposition 1.4-2, BAC-CAB則）
                        <BlockMath math="\mathbf{A} \times (\mathbf{B} \times \mathbf{C}) = \mathbf{B}(\mathbf{A} \cdot \mathbf{C}) - \mathbf{C}(\mathbf{A} \cdot \mathbf{B})" />
                        が、 <InlineMath math="\mathbf{A} = (1, 1, 0), \mathbf{B} = (0, 1, 1), \mathbf{C} = (1, 0, 1)" /> のとき成り立つことを計算して確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>左辺の計算：</b>
                        </p>
                        <BlockMath math="\begin{aligned} &\mathbf{B} \times \mathbf{C} \\ &= (1\cdot 1 - 1\cdot 0, \; 1\cdot 1 - 0\cdot 1, \; 0\cdot 0 - 1\cdot 1) \\ &= (1, 1, -1) \\ &\mathbf{A} \times (\mathbf{B} \times \mathbf{C}) \\ &= (1(-1) - 0\cdot 1, \; 0\cdot 1 - 1(-1), \; 1\cdot 1 - 1\cdot 1) \\ &= (-1, 1, 0) \end{aligned}" />
                        <p>
                            <b>右辺の計算：</b>
                        </p>
                        <BlockMath math="\begin{aligned} \mathbf{A} \cdot \mathbf{C} &= 1(1) + 1(0) + 0(1) = 1 \\ \mathbf{A} \cdot \mathbf{B} &= 1(0) + 1(1) + 0(1) = 1 \\ \mathbf{B}(\mathbf{A} \cdot \mathbf{C}) - \mathbf{C}(\mathbf{A} \cdot \mathbf{B}) &= 1(0, 1, 1) - 1(1, 0, 1) \\ &= (-1, 1, 0) \end{aligned}" />
                        <p>
                            以上より、両辺の結果が一致することが確認された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        基本恒等式 <InlineMath math="\text{rot}(\nabla f) = \mathbf{0}" /> (Theorem 1.4-1) を、 <InlineMath math="f(x, y, z) = x^2 y z" /> の場合に具体的に計算して確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず勾配を計算する。
                        </p>
                        <BlockMath math="\nabla f = (2xyz, x^2 z, x^2 y)" />
                        <p>
                            次にこのベクトルの回転を計算する。
                        </p>
                        <BlockMath math="\begin{aligned} \text{rot}(\nabla f) &= \biggl( \frac{\partial(x^2 y)}{\partial y} - \frac{\partial(x^2 z)}{\partial z}, \; \frac{\partial(2xyz)}{\partial z} - \frac{\partial(x^2 y)}{\partial x}, \\ &\qquad \; \frac{\partial(x^2 z)}{\partial x} - \frac{\partial(2xyz)}{\partial y} \biggr) \\ &= (x^2 - x^2, \; 2xy - 2xy, \; 2xz - 2xz) \\ &= (0, 0, 0) \end{aligned}" />
                        <p>
                            したがって、 <InlineMath math="\text{rot}(\nabla f) = \mathbf{0}" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        点 <InlineMath math="\mathbf{r}" /> の速度ベクトルが一定の角速度ベクトル <InlineMath math="\boldsymbol{\omega}" /> を用いて <InlineMath math="\mathbf{v} = \boldsymbol{\omega} \times \mathbf{r}" /> と表されるとき（剛体回転）、
                        <InlineMath math="\text{rot}\, \mathbf{v} = 2\boldsymbol{\omega}" /> が成り立つことの証明の概略を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            座標系を適切にとり、 <InlineMath math="\boldsymbol{\omega} = (0, 0, \omega)" /> と仮定しても一般性を失わない。
                            このとき、位置ベクトル <InlineMath math="\mathbf{r} = (x, y, z)" /> との外積を計算すると：
                        </p>
                        <BlockMath math="\mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 0 & 0 & \omega \\ x & y & z \end{vmatrix} = (-\omega y, \omega x, 0)" />
                        <p>
                            この回転を計算すると、Example 1.3-1 と同様の計算展開により：
                        </p>
                        <BlockMath math="\begin{aligned} \text{rot}\, \mathbf{v} &= \biggl( \frac{\partial 0}{\partial y} - \frac{\partial (\omega x)}{\partial z}, \; \frac{\partial (-\omega y)}{\partial z} - \frac{\partial 0}{\partial x}, \\ &\qquad \; \frac{\partial (\omega x)}{\partial x} - \frac{\partial (-\omega y)}{\partial y} \biggr) \\ &= (0, 0, \omega - (-\omega)) \\ &= (0, 0, 2\omega) = 2\boldsymbol{\omega} \end{aligned}" />
                        <p>
                            以上より、 <InlineMath math="\text{rot}(\boldsymbol{\omega} \times \mathbf{r}) = 2\boldsymbol{\omega}" /> が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
