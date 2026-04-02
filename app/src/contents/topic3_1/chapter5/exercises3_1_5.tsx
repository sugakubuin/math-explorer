import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_1_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        半径 <InlineMath math="R" /> 、高さ <InlineMath math="h" /> の円柱の側面 <InlineMath math="x^2 + y^2 = R^2 \quad (0 \le z \le h)" /> を 2 つのパラメータ <InlineMath math="\theta, z" /> を用いてパラメータ表示し、接ベクトル <InlineMath math="\mathbf{r}_\theta, \mathbf{r}_z" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            媒介変数 <InlineMath math="\theta" /> と <InlineMath math="z" /> を用いて：
                            <BlockMath math="\mathbf{r}(\theta, z) = (R \cos \theta, R \sin \theta, z) \quad (0 \le \theta \le 2\pi, \; 0 \le z \le h)" />
                        </p>
                        <p>
                            接ベクトルは各パラメータによる微分である：
                        </p>
                        <BlockMath math="\begin{aligned} \mathbf{r}_\theta &= \frac{\partial \mathbf{r}}{\partial \theta} = (-R \sin \theta, R \cos \theta, 0) \\ \mathbf{r}_z &= \frac{\partial \mathbf{r}}{\partial z} = (0, 0, 1) \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        グラフ形式で与えられた曲面 <InlineMath math="z = x^2 + y^2" /> の、任意の点における法線ベクトル <InlineMath math="\mathbf{N}" /> を求めよ（§5.1参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(x, y) = x^2 + y^2" /> とおくと、 Example 5.1-2 の公式より：
                            <BlockMath math="\mathbf{N} = (-f_x, -f_y, 1) = (-2x, -2y, 1)" />
                        </p>
                        <p>
                            (※パラメータ表示を <InlineMath math="\mathbf{r}(x, y) = (x, y, x^2+y^2)" /> とした時の外積 <InlineMath math="\mathbf{r}_x \times \mathbf{r}_y" /> に相当する)
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        <InlineMath math="xy" /> 平面上の領域 <InlineMath math="D" /> （ <InlineMath math="z=0" /> ）を極座標 <InlineMath math="(r, \theta)" /> で表したときの面積要素 <InlineMath math="dS" /> の式を、面積要素の一般定義（Definition 5.2-1）から導け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            パラメータ表示 <InlineMath math="\mathbf{r}(r, \theta) = (r \cos \theta, r \sin \theta, 0)" /> を用いる。
                        </p>
                        <BlockMath math="\begin{aligned} \mathbf{r}_r &= (\cos \theta, \sin \theta, 0) \\ \mathbf{r}_\theta &= (-r \sin \theta, r \cos \theta, 0) \\ \mathbf{r}_r \times \mathbf{r}_\theta &= (0, 0, r \cos^2 \theta + r \sin^2 \theta) = (0, 0, r) \end{aligned}" />
                        <p>
                            この外積の大きさは <InlineMath math="|\mathbf{r}_r \times \mathbf{r}_\theta| = r" /> であるため、面積要素は：
                            <BlockMath math="dS = r\, dr\, d\theta" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        平面 <InlineMath math="x + y + z = 1" /> のうち、第一八分限（ <InlineMath math="x \ge 0, y \ge 0, z \ge 0" /> ）に含まれる部分の面積を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            曲面を <InlineMath math="z = 1 - x - y" /> とし、底面を <InlineMath math="xy" /> 平面上の三角形領域 <InlineMath math="D = \{ (x, y) \mid x+y \le 1, x \ge 0, y \ge 0 \}" /> とする。
                        </p>
                        <p>
                            法線ベクトルは <InlineMath math="\mathbf{N} = (-(-1), -(-1), 1) = (1, 1, 1)" /> であり、その大きさは <InlineMath math="|\mathbf{N}| = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}" /> である。
                        </p>
                        <BlockMath math="\begin{aligned} A(S) &= \iint_D \sqrt{3}\, dA = \sqrt{3} \times (\text{底面の三角形の面積}) \\ &= \sqrt{3} \times \left( \frac{1}{2} \cdot 1 \cdot 1 \right) = \frac{\sqrt{3}}{2} \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        半径 <InlineMath math="R" /> の上半球面 <InlineMath math="S = \{ (x, y, z) \mid x^2 + y^2 + z^2 = R^2, \; z \ge 0 \}" /> 上で、スカラー場 <InlineMath math="f(x, y, z) = z" /> の面積分を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            球座標パラメータ <InlineMath math="\phi, \theta" /> を用いる。球面上で <InlineMath math="z = R \cos \phi" /> であり、面積要素は <InlineMath math="dS = R^2 \sin \phi\, d\phi\, d\theta" /> である（§5.2 Example 5.2-1参照）。
                        </p>
                        <BlockMath math="\begin{aligned} \iint_S z\, dS &= \int_0^{2\pi} \int_0^{\pi/2} (R \cos \phi) (R^2 \sin \phi)\, d\phi\, d\theta \\ &= 2\pi R^3 \int_0^{\pi/2} \sin \phi \cos \phi\, d\phi \\ &= 2\pi R^3 \left[ \frac{1}{2}\sin^2 \phi \right]_0^{\pi/2} = 2\pi R^3 \cdot \frac{1}{2} = \pi R^3 \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F} = (x, y, 0)" /> の、円柱の側面 <InlineMath math="x^2 + y^2 = a^2 \quad (0 \le z \le h)" /> を貫く外向きフラックスを求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            円柱面上の点における外向き単位法線ベクトルは <InlineMath math="\hat{\mathbf{n}} = (x/a, y/a, 0)" /> である。
                        </p>
                        <p>
                            内積を計算すると：
                            <BlockMath math="\mathbf{F} \cdot \hat{\mathbf{n}} = (x, y, 0) \cdot (x/a, y/a, 0) = \frac{x^2 + y^2}{a} = \frac{a^2}{a} = a" />
                        </p>
                        <p>
                            したがって求めるフラックスは：
                            <BlockMath math="\iint_S a\, dS = a \times (\text{円柱側面の面積}) = a (2\pi a h) = 2\pi a^2 h" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        原点から一点への動径ベクトル <InlineMath math="\mathbf{r} = (x, y, z)" /> について、半径 <InlineMath math="R" /> の球面における単位法線ベクトル <InlineMath math="\hat{\mathbf{n}}" /> を求め、内積 <InlineMath math="\mathbf{r} \cdot \hat{\mathbf{n}}" /> の値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            球面の法線は中心から放射状に伸びるため、点における外向きの正規化された法線は点自身を半径で割ったものになる。
                            <BlockMath math="\hat{\mathbf{n}} = \frac{\mathbf{r}}{|\mathbf{r}|} = \frac{\mathbf{r}}{R}" />
                        </p>
                        <p>
                            内積をとると：
                            <BlockMath math="\mathbf{r} \cdot \hat{\mathbf{n}} = \mathbf{r} \cdot \frac{\mathbf{r}}{R} = \frac{|\mathbf{r}|^2}{R} = \frac{R^2}{R} = R" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        円錐面 <InlineMath math="z = \sqrt{x^2 + y^2}" /> のうち、 <InlineMath math="0 \le z \le H" /> の範囲にある部分の面積を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            グラフ形式 <InlineMath math="z = f(x, y)" /> と見て、偏微分を求める。
                            <BlockMath math="f_x = \frac{x}{\sqrt{x^2+y^2}}, \quad f_y = \frac{y}{\sqrt{x^2+y^2}}" />
                        </p>
                        <p>
                            面積要素の係数は：
                            <BlockMath math="\sqrt{1 + f_x^2 + f_y^2} = \sqrt{1 + \frac{x^2}{x^2+y^2} + \frac{y^2}{x^2+y^2}} = \sqrt{1 + 1} = \sqrt{2}" />
                        </p>
                        <p>
                            底面は半径 <InlineMath math="H" /> の円盤 <InlineMath math="D" /> となるため、面積は：
                            <BlockMath math="A(S) = \iint_D \sqrt{2}\, dA = \sqrt{2} \pi H^2" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F} = (y, x, 1)" /> の、 3 点 <InlineMath math="(1,0,0), (0,1,0), (0,0,1)" /> を頂点とする三角形 <InlineMath math="S" /> を通る外向き（原点と反対方向）フラックスを求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            三角形を含む平面は <InlineMath math="x + y + z = 1" /> であり、外向き法線は <InlineMath math="\mathbf{N} = (1, 1, 1)" /> である（大きさ <InlineMath math="\sqrt{3}" />）。
                        </p>
                        <p>
                            Definition 5.4-2 のパラメータ表示形式を用いる（ <InlineMath math="dS = \mathbf{N}\, dA" /> ）。三角形底面領域を <InlineMath math="D" /> とすると：
                        </p>
                        <BlockMath math="\begin{aligned} \iint_S \mathbf{F} \cdot d\mathbf{S} &= \iint_D (y, x, 1) \cdot (1, 1, 1)\, dA \\ &= \iint_D (x + y + 1)\, dA \end{aligned}" />
                        <p>
                            底面領域 <InlineMath math="D" /> （面積 1/2, 重心 (1/3, 1/3)）で積分すると、
                        </p>
                        <BlockMath math="\iint_D (x+y+1) dA = \text{Area}(D) \times (x_{\text{center}} + y_{\text{center}} + 1) = \frac{1}{2} \left( \frac{1}{3} + \frac{1}{3} + 1 \right) = \frac{5}{6}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        任意の閉曲面 <InlineMath math="S" /> に対して、外向き単位法線ベクトル場 <InlineMath math="\hat{\mathbf{n}}" /> を全周で面積分した結果が零ベクトルとなること（ <InlineMath math="\oiint_S \hat{\mathbf{n}} dS = \mathbf{0}" /> ）を、各成分ごとにガウスの発散定理を想定して（または直感的に）示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="x" /> 成分について検討する。積分は次のように書ける：
                            <BlockMath math="\oiint_S n_x\, dS = \oiint_S (1, 0, 0) \cdot \hat{\mathbf{n}}\, dS" />
                        </p>
                        <p>
                            第 6 章で詳しく学ぶガウスの発散定理を用いると、これはベクトル場 <InlineMath math="\mathbf{G} = (1, 0, 0)" /> の発散を領域 <InlineMath math="V" /> で体積分したものに等しい。
                            <BlockMath math="\text{div}\, \mathbf{G} = \frac{\partial 1}{\partial x} + 0 + 0 = 0" />
                        </p>
                        <p>
                            したがって <InlineMath math="\oiint_S n_x\, dS = \iiint_V 0\, dV = 0" /> である。 <InlineMath math="y, z" /> 成分についても同様に示すことができ、結果として零ベクトルが得られる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
