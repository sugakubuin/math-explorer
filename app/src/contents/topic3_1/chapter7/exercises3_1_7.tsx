import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_1_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        ストークスの定理 (Theorem 7.1-1) の公式を記述し、領域の境界曲線の向き（右ねじの法則）について説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            公式： <BlockMath math="\oint_{\partial S} \mathbf{F} \cdot d\mathbf{r} = \iint_S (\text{rot}\, \mathbf{F}) \cdot d\mathbf{S}" />
                        </p>
                        <p>
                            境界曲線の正の向きとは、曲面の単位法線ベクトル <InlineMath math="\hat{\mathbf{n}}" /> の方向に右ねじを回したときに、ねじの指が回る方向に境界を進む向きである。
                        </p>
                        <p>
                            例えるなら、「頭を法線の方向にして、曲面の『表』の上を歩くとき、常に自分の左側に曲面の内部が見えるように進む向き」である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        アンペールの法則の積分形 <InlineMath math="\oint_C \mathbf{B} \cdot d\mathbf{r} = \mu_0 I" /> が、ストークスの定理によって微分形 <InlineMath math="\text{rot}\, \mathbf{B} = \mu_0 \mathbf{J}" /> と等価であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            全電流 <InlineMath math="I" /> は電流密度 <InlineMath math="\mathbf{J}" /> の面積分である：
                            <BlockMath math="\mu_0 I = \iint_S \mu_0 \mathbf{J} \cdot d\mathbf{S}" />
                        </p>
                        <p>
                            左辺にストークスの定理を適用すると：
                            <BlockMath math="\oint_C \mathbf{B} \cdot d\mathbf{r} = \iint_S (\text{rot}\, \mathbf{B}) \cdot d\mathbf{S}" />
                        </p>
                        <p>
                            したがって、 <BlockMath math="\iint_S (\text{rot}\, \mathbf{B}) \cdot d\mathbf{S} = \iint_S \mu_0 \mathbf{J} \cdot d\mathbf{S}" />
                            これが任意の曲面 <InlineMath math="S" /> に対して成り立つことから、 <InlineMath math="\text{rot}\, \mathbf{B} = \mu_0 \mathbf{J}" /> が成り立つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        ヘルムホルツの分解定理 (Theorem 7.4-1) によれば、滑らかなベクトル場はどのような 2 つの成分の和として表現できるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            一意に次の 2 つのベクトル場の和として分解できる：
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>非回転場 (Irrotational field)</strong>：あるスカラーポテンシャルの勾配 <InlineMath math="-\nabla \phi" /> として表され、回転が 0 である。</li>
                            <li><strong>非発散場 (Solenoidal field)</strong>：あるベクトルポテンシャルの回転 <InlineMath math="\nabla \times \mathbf{A}" /> として表され、発散が 0 である。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F} = (y, -x, 0)" /> について、単位円板 <InlineMath math="D = \{ (x, y, 0) \mid x^2 + y^2 \le 1 \}" /> 上でストークスの定理の両辺が一致することを確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>右辺（面積分）：</b>
                            <InlineMath math="\text{rot}\, \mathbf{F} = (0, 0, -1 - 1) = (0, 0, -2)" /> であり、法線は <InlineMath math="\hat{\mathbf{n}} = (0, 0, 1)" /> である。
                            <BlockMath math="\iint_D (-2) dA = -2 \pi" />
                        </p>
                        <p>
                            <b>左辺（線積分）：</b>
                            境界曲線を <InlineMath math="\mathbf{r}(t) = (\cos t, \sin t, 0)" /> とすると、
                            <BlockMath math="\begin{aligned} \oint \mathbf{F} \cdot d\mathbf{r} &= \int_0^{2\pi} (\sin t, -\cos t, 0) \cdot (-\sin t, \cos t, 0) dt \\ &= \int_0^{2\pi} (-\sin^2 t - \cos^2 t) dt = \int_0^{2\pi} -1 dt = -2\pi \end{aligned}" />
                        </p>
                        <p>
                            両辺が一致することが確認された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F} = (z, x, y)" /> の、 <InlineMath math="xy" /> 平面上の正方形領域 <InlineMath math="[0, 1] \times [0, 1]" /> の境界に沿った循環を、ストークスの定理を用いて計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            回転を計算すると：
                            <BlockMath math="\text{rot}\, \mathbf{F} = \det \begin{pmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \partial_x & \partial_y & \partial_z \\ z & x & y \end{pmatrix} = (1, 1, 1)" />
                        </p>
                        <p>
                            <InlineMath math="xy" /> 平面上の法線は <InlineMath math="\hat{\mathbf{n}} = (0, 0, 1)" /> であるため、内積は 1 となる。
                        </p>
                        <BlockMath math="\iint_S (\text{rot}\, \mathbf{F}) \cdot \hat{\mathbf{n}} dS = \iint_S 1 dS = 1 \times 1 = 1" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        任意の保存力場 <InlineMath math="\mathbf{F} = \nabla f" /> の閉曲線に沿った線積分が常に 0 になることを、ストークスの定理を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ストークスの定理より、
                            <BlockMath math="\oint_C (\nabla f) \cdot d\mathbf{r} = \iint_S (\text{rot}(\nabla f)) \cdot d\mathbf{S}" />
                        </p>
                        <p>
                            ベクトル解析の恒等式（Theorem 1.4-1）より、勾配の回転は常に零ベクトルである：
                            <BlockMath math="\text{rot}(\nabla f) = \mathbf{0}" />
                        </p>
                        <p>
                            したがって、 <BlockMath math="\iint_S \mathbf{0} \cdot d\mathbf{S} = 0" />
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        ファラデーの電磁誘導の法則 <InlineMath math="\text{rot}\, \mathbf{E} = -\partial \mathbf{B}/\partial t" /> において、磁場 <InlineMath math="\mathbf{B}" /> が空間的に一様（位置に依らない）であるとき、電場の循環と磁場の時間変化の関係を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ストークスの定理により電場の循環は回転の面積分に等しい：
                            <BlockMath math="\oint_C \mathbf{E} \cdot d\mathbf{r} = \iint_S (\text{rot}\, \mathbf{E}) \cdot d\mathbf{S} = \iint_S (-\partial \mathbf{B}/\partial t) \cdot d\mathbf{S}" />
                        </p>
                        <p>
                            <InlineMath math="\partial \mathbf{B}/\partial t" /> が空間的に一様であるとき、これを積分記号の外に出すことができる。
                            <BlockMath math="\oint_C \mathbf{E} \cdot d\mathbf{r} = - \frac{\partial \mathbf{B}}{\partial t} \cdot \iint_S d\mathbf{S} = - \frac{\partial \mathbf{B}}{\partial t} \cdot \mathbf{A}" />
                            ここで <InlineMath math="\mathbf{A}" /> は曲面の投影面積ベクトルに相当する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F} = (y, z, x)" /> について、平面 <InlineMath math="z = 1 - x" /> と円柱 <InlineMath math="x^2 + y^2 = 1" /> の交線として定義される閉曲線 <InlineMath math="C" /> に沿った線積分を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\text{rot}\, \mathbf{F} = (-1, -1, -1)" /> である。
                            境界を <InlineMath math="C" /> とし、平面 <InlineMath math="z = 1 - x" /> 上の円板を曲面 <InlineMath math="S" /> とする。
                        </p>
                        <p>
                            グラフ型曲面 <InlineMath math="z = f(x, y) = 1 - x" /> の法線ベクトルは <InlineMath math="\mathbf{N} = (-(-1), -0, 1) = (1, 0, 1)" /> である。
                        </p>
                        <BlockMath math="\begin{aligned} \oint_C \mathbf{F} \cdot d\mathbf{r} &= \iint_D (-1, -1, -1) \cdot (1, 0, 1) dA \\ &= \iint_D (-1 - 1) dA = -2 \iint_D dA \\ &= -2 \times (\text{半径 1 の円の面積}) = -2\pi \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        任意の閉曲面 <InlineMath math="S" /> に対して、 <InlineMath math="\oiint_S (\text{rot}\, \mathbf{F}) \cdot d\mathbf{S} = 0" /> が成り立つことを、ストークスの定理を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            閉曲面 <InlineMath math="S" /> を、共通の境界曲線 <InlineMath math="C" /> を持つ 2 つの曲面 <InlineMath math="S_1, S_2" /> に分割する。
                        </p>
                        <p>
                            各曲面にストークスの定理を適用すると：
                            <BlockMath math="\iint_{S_1} (\text{rot}\, \mathbf{F}) \cdot \mathbf{n}_1 dS = \oint_C \mathbf{F} \cdot d\mathbf{r}" />
                            <BlockMath math="\iint_{S_2} (\text{rot}\, \mathbf{F}) \cdot \mathbf{n}_2 dS = \oint_{-C} \mathbf{F} \cdot d\mathbf{r} = - \oint_C \mathbf{F} \cdot d\mathbf{r}" />
                        </p>
                        <p>
                            (※ <InlineMath math="S_1, S_2" /> の合わせ目が閉曲面として一貫した「外向き」になるように選ぶと、反時計回りと時計回りで境界の向きが互いに逆になる。)
                        </p>
                        <p>
                            これらを足し合わせることで、結果は 0 となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        一様な磁場 <InlineMath math="\mathbf{B} = (0, 0, B_0)" /> に対して、ベクトルポテンシャル <InlineMath math="\mathbf{A} = \frac{1}{2}\mathbf{B} \times \mathbf{r}" /> を定義する。これが <InlineMath math="\text{rot}\, \mathbf{A} = \mathbf{B}" /> を満たすことを計算により確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\mathbf{A}" /> の成分を求める。
                            <BlockMath math="\mathbf{A} = \frac{1}{2} \begin{pmatrix} 0 \\ 0 \\ B_0 \end{pmatrix} \times \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \frac{1}{2} \begin{pmatrix} -B_0 y \\ B_0 x \\ 0 \end{pmatrix}" />
                        </p>
                        <p>
                            この回転を計算すると：
                            <BlockMath math="\begin{aligned} \text{rot}\, \mathbf{A} &= \frac{1}{2} \det \begin{pmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \partial_x & \partial_y & \partial_z \\ -B_0 y & B_0 x & 0 \end{pmatrix} \\ &= \frac{1}{2} (0, 0, B_0 - (-B_0)) = (0, 0, B_0) = \mathbf{B} \end{aligned}" />
                        </p>
                        <p>
                            計算により一致が確認された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
