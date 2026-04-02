import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_1_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        グリーンの定理 (Theorem 4.1-1) の数式を記述し、境界曲線 <InlineMath math="\partial D" /> の「正の向き」について説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            グリーンの定理の公式は以下の通りである：
                            <BlockMath math="\oint_{\partial D} (P\, dx + Q\, dy) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx\, dy" />
                        </p>
                        <p>
                            境界の<strong>正の向き</strong>とは、その向きに沿って進んだとき、領域の内部が常に<strong>左側</strong>に見えるような向き（平面上では反時計回り）である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        グリーンの定理の被積分関数 <InlineMath math="\partial_x Q - \partial_y P" /> は、ベクトル場 <InlineMath math="\mathbf{F} = (P, Q)" /> のどのような物理量（§1.3, §4.4参照）に対応するか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            被積分関数 <InlineMath math="\partial_x Q - \partial_y P" /> は、ベクトル場の<strong>回転 (rot / curl)</strong> の垂直成分（ <InlineMath math="z" /> 成分）に相当する。
                        </p>
                        <p>
                            これは点における「渦の強さ」を表しており、定理は「内部の磁束（渦）の総和が、境界に沿った流れの蓄積（循環）に等しい」ことを示している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        グリーンの定理を用いて、長方形領域 <InlineMath math="D = [0, a] \times [0, b]" /> の面積を、線積分 <InlineMath math="\oint_{\partial D} x\, dy" /> を計算することで求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            線積分を 4 つの辺に分けて計算する。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>下辺（ <InlineMath math="y=0" /> ）： <InlineMath math="dy=0" /> なので積分の寄与は 0 。</li>
                            <li>右辺（ <InlineMath math="x=a" /> ）： <InlineMath math="y" /> は 0 から <InlineMath math="b" /> まで動き、 <InlineMath math="\int_0^b a\, dy = ab" /> 。</li>
                            <li>上辺（ <InlineMath math="y=b" /> ）： <InlineMath math="dy=0" /> なので積分の寄与は 0 。</li>
                            <li>左辺（ <InlineMath math="x=0" /> ）： <InlineMath math="x=0" /> なので積分の寄与は 0 。</li>
                        </ul>
                        <p>
                            したがって全周での線積分は <InlineMath math="ab" /> となり、これは長方形の面積に等しい。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        正方形領域 <InlineMath math="D = [0, 1] \times [0, 1]" /> とその境界 <InlineMath math="C" /> について、次の線積分をグリーンの定理を用いて計算せよ。
                        <BlockMath math="\oint_C (y^2\, dx + x^2\, dy)" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="P = y^2, \; Q = x^2" /> とおくと：
                            <BlockMath math="\frac{\partial Q}{\partial x} = 2x, \quad \frac{\partial P}{\partial y} = 2y" />
                        </p>
                        <p>
                            グリーンの定理より：
                            <BlockMath math="\begin{aligned} \oint_C (y^2\, dx + x^2\, dy) &= \iint_D (2x - 2y)\, dx\, dy \\ &= \int_0^1 \int_0^1 (2x - 2y)\, dx\, dy \\ &= \int_0^1 [x^2 - 2xy]_0^1\, dy \\ &= \int_0^1 (1 - 2y)\, dy = [y - y^2]_0^1 = 0 \end{aligned}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        面積公式 <InlineMath math="A = \frac{1}{2} \oint_{\partial D} (x\, dy - y\, dx)" /> を用いて、半径 <InlineMath math="R" /> の円の面積が <InlineMath math="\pi R^2" /> になることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            パラメータ表示 <InlineMath math="x = R\cos t, y = R\sin t \; (0 \le t \le 2\pi)" /> を用いる。
                        </p>
                        <BlockMath math="dx = -R\sin t\, dt, \quad dy = R\cos t\, dt" />
                        <p>
                            被積分関数は：
                            <BlockMath math="\begin{aligned} x\, dy - y\, dx &= (R\cos t)(R\cos t\, dt) - (R\sin t)(-R\sin t\, dt) \\ &= (R^2 \cos^2 t + R^2 \sin^2 t)\, dt = R^2 dt \end{aligned}" />
                        </p>
                        <p>
                            面積は：
                            <BlockMath math="A = \frac{1}{2} \int_0^{2\pi} R^2\, dt = \frac{1}{2} [R^2 t]_0^{2\pi} = \pi R^2" />
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        法線形式のグリーンの定理 (Theorem 4.4-2) を用いて、ベクトル場 <InlineMath math="\mathbf{F} = (x, y)" /> の、単位円板 <InlineMath math="D" /> からの総流束（フラックス）を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず発散を計算する。
                            <BlockMath math="\text{div}\, \mathbf{F} = \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} = 1 + 1 = 2" />
                        </p>
                        <p>
                            法線形式のグリーンの定理より、フラックスは発散の面積分に等しい：
                            <BlockMath math="\Phi = \iint_D (\text{div}\, \mathbf{F})\, dA = \iint_D 2\, dA = 2 \times (\text{面積}) = 2\pi" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        ベクトル場 <InlineMath math="P = xy, \; Q = x+y" /> について、正方形領域 <InlineMath math="D = [0, 1] \times [0, 1]" /> でグリーンの定理が成り立つことを、両辺を計算して確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>右辺（内部積分）：</b>
                            <BlockMath math="\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1 - x" />
                            <BlockMath math="\int_0^1 \int_0^1 (1 - x)\, dx\, dy = \int_0^1 [x - \frac{1}{2}x^2]_0^1\, dy = \int_0^1 \frac{1}{2}\, dy = \frac{1}{2}" />
                        </p>
                        <p>
                            <b>左辺（境界積分）：</b>
                            <ul className="list-disc list-inside space-y-1">
                                <li>下辺（ <InlineMath math="y=0, dy=0" /> ）： <InlineMath math="\int_0^1 (x \cdot 0) dx = 0" /></li>
                                <li>右辺（ <InlineMath math="x=1, dx=0" /> ）： <InlineMath math="\int_0^1 (1+y) dy = [y + \frac{1}{2}y^2]_0^1 = 3/2" /></li>
                                <li>上辺（ <InlineMath math="y=1, dy=0" /> ）： <InlineMath math="\int_1^0 (x \cdot 1) dx = [x^2/2]_1^0 = -1/2" /></li>
                                <li>左辺（ <InlineMath math="x=0, dx=0" /> ）： <InlineMath math="\int_1^0 (0+y) dy = -1/2" /></li>
                            </ul>
                            合計： <InlineMath math="0 + 3/2 - 1/2 - 1/2 = 1/2" />
                        </p>
                        <p>
                            両辺が一致することが確認された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        放物線 <InlineMath math="y = x^2" /> と直線 <InlineMath math="y = x" /> によって囲まれる領域の面積を、グリーンの面積公式を用いて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            領域 <InlineMath math="D" /> は <InlineMath math="0 \le x \le 1, \; x^2 \le y \le x" /> である。
                            境界 <InlineMath math="\partial D" /> を 2 つの部分に分ける。
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><InlineMath math="C_1" /> : <InlineMath math="y = x^2" /> に沿って 0 から 1 へ移動。</li>
                            <li><InlineMath math="C_2" /> : <InlineMath math="y = x" /> に沿って 1 から 0 へ移動。</li>
                        </ul>
                        <p>公式 <InlineMath math="A = \oint x\, dy" /> を用いる。</p>
                        <BlockMath math="\begin{aligned} A &= \int_{C_1} x\, dy + \int_{C_2} x\, dy \\ &= \int_0^1 x(2x dx) + \int_1^0 x(dx) \\ &= \int_0^1 2x^2\, dx + \left[ \frac{1}{2}x^2 \right]_1^0 = \frac{2}{3} - \frac{1}{2} = \frac{1}{6} \end{aligned}" />
                        <p>
                            (通常の重積分 <InlineMath math="\int_0^1 (x - x^2) dx = 1/2 - 1/3 = 1/6" /> と一致する。)
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        穴のあいた領域について、定理がどう拡張されるかを述べる。
                        もし領域 <InlineMath math="D" /> が外側の境界 <InlineMath math="C_1" /> と内側の境界（穴） <InlineMath math="C_2" /> を持つとき、グリーンの定理の左辺はどう記述されるべきか。向きに注意して答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            「領域を常に左側に見る」向きが正の向きである。
                        </p>
                        <p>
                            したがって、外側の境界 <InlineMath math="C_1" /> は<strong>反時計回り</strong>、内側の境界 <InlineMath math="C_2" /> は<strong>時計回り</strong>に積分する必要がある。
                        </p>
                        <BlockMath math="\begin{aligned} \oint_{C_1,\text{ccw}} (P\, dx + Q\, dy) + &\oint_{C_2,\text{cw}} (P\, dx + Q\, dy) \\ &= \iint_D (\partial_x Q - \partial_y P)\, dA \end{aligned}" />
                        <p>
                            これは §4.2 の「領域の分割と相殺」の考え方を、切れ目を入れて 1 つに繋げることで導くことができる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        単連結な領域 <InlineMath math="D" /> 上で、ベクトル場 <InlineMath math="\mathbf{F} = (P, Q)" /> が常に <InlineMath math="\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}" /> を満たすとする。
                        このとき、領域内の任意の閉曲線 <InlineMath math="C" /> に沿った線積分 <InlineMath math="\oint_C \mathbf{F} \cdot d\mathbf{r}" /> が 0 になることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            グリーンの定理を用いる。
                            曲線 <InlineMath math="C" /> が囲む領域を <InlineMath math="D'" /> とすると、 <InlineMath math="D' \subset D" /> である。
                        </p>
                        <BlockMath math="\oint_C (P\, dx + Q\, dy) = \iint_{D'} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\, dA" />
                        <p>
                            仮定より被積分関数は常に 0 である。
                        </p>
                        <BlockMath math="\iint_{D'} 0\, dA = 0" />
                        <p>
                            したがって、 <InlineMath math="\oint_C \mathbf{F} \cdot d\mathbf{r} = 0" /> となる。
                        </p>
                        <p>
                            (これは線積分が経路に依らないことの十分条件であり、保存力場の重要な性質である。)
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
