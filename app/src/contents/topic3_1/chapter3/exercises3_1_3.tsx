import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_1_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        原点 <InlineMath math="(0, 0, 0)" /> から 点 <InlineMath math="(1, 1, 1)" /> へ向かう線分をパラメータ表示せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            媒介変数 <InlineMath math="t" /> を用いて、各成分が <InlineMath math="t" /> に比例するように設定する。
                        </p>
                        <BlockMath math="\mathbf{r}(t) = (t, t, t) \quad (0 \le t \le 1)" />
                        <p>
                            (または <InlineMath math="x(t)=t, y(t)=t, z(t)=t" /> )
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        半径 <InlineMath math="R" /> の半円 <InlineMath math="x^2 + y^2 = R^2, \; y \ge 0" /> の長さを、弧長要素 <InlineMath math="ds" /> を用いた積分によって求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            円のパラメータ表示 <InlineMath math="\mathbf{r}(t) = (R\cos t, R\sin t) \quad (0 \le t \le \pi)" /> を用いる。
                        </p>
                        <BlockMath math="\begin{aligned} \mathbf{r}'(t) &= (-R\sin t, R\cos t) \\ &\implies |\mathbf{r}'(t)| = \sqrt{(-R\sin t)^2 + (R\cos t)^2} = R \end{aligned}" />
                        <p>
                            したがって、弧長要素は <InlineMath math="ds = R\,dt" /> である。全領域で積分すると：
                        </p>
                        <BlockMath math="L = \int_0^\pi R\,dt = [Rt]_0^\pi = \pi R" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        球座標系 <InlineMath math="(r, \phi, \theta)" /> における微小体積要素 <InlineMath math="dV" /> の式を示せ（§3.3参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            球座標系のラメ係数は <InlineMath math="h_r = 1, h_\phi = r, h_\theta = r\sin\phi" /> である。
                            Proposition 3.3-1 より、体積要素はそれらの積である。
                        </p>
                        <BlockMath math="dV = h_r h_\phi h_\theta\, dr\, d\phi\, d\theta = r^2 \sin\phi\, dr\, d\phi\, d\theta" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F} = (y, -x, 0)" /> に沿って、曲線 <InlineMath math="C: \mathbf{r}(t) = (t, t^2, 0) \quad (0 \le t \le 1)" /> を動くときの線積分（仕事）を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-3 に従い計算する。
                            <BlockMath math="\mathbf{r}'(t) = (1, 2t, 0)" />
                        </p>
                        <p>
                            ベクトル場の値を曲線上で求めると：
                            <BlockMath math="\mathbf{F}(\mathbf{r}(t)) = (t^2, -t, 0)" />
                        </p>
                        <p>
                            内積をとると：
                            <BlockMath math="\mathbf{F} \cdot \mathbf{r}' = (t^2)(1) + (-t)(2t) + 0 = t^2 - 2t^2 = -t^2" />
                        </p>
                        <p>
                            積分を実行する：
                            <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^1 (-t^2)\, dt = \left[ -\frac{1}{3}t^3 \right]_0^1 = -\frac{1}{3}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        密度が高さに比例する針金 <InlineMath math="C: \mathbf{r}(t) = (\cos t, \sin t, t) \quad (0 \le t \le 2\pi)" /> （らせん）の全質量を求めよ。密度の比例定数を 1 とし、密度関数を <InlineMath math="\rho(x, y, z) = z" /> とする。
                    </p>
                    <ExerciseSolution>
                        <p>
                            スカラー場の線積分（Definition 3.1-2）を用いる。
                            <BlockMath math="\begin{aligned} \mathbf{r}'(t) &= (-\sin t, \cos t, 1) \\ &\implies |\mathbf{r}'(t)| = \sqrt{\sin^2 t + \cos^2 t + 1} = \sqrt{2} \end{aligned}" />
                        </p>
                        <p>
                            弧長要素は <InlineMath math="ds = \sqrt{2}\,dt" /> である。全質量 <InlineMath math="M" /> は：
                        </p>
                        <BlockMath math="\begin{aligned} M = \int_C z\,ds &= \int_0^{2\pi} t (\sqrt{2}\,dt) \\ &= \sqrt{2} \left[ \frac{1}{2}t^2 \right]_0^{2\pi} \\ &= \sqrt{2} \cdot \frac{4\pi^2}{2} = 2\sqrt{2}\pi^2 \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        一様なベクトル場 <InlineMath math="\mathbf{F} = (0, 0, 1)" /> の、 <InlineMath math="xy" /> 平面上の 3 点 <InlineMath math="(0,0,0), (1,0,0), (0,1,0)" /> を頂点とする三角形 <InlineMath math="S" /> を貫くフラックスを求めよ。法線は <InlineMath math="z" /> 軸正の向きとする。
                    </p>
                    <ExerciseSolution>
                        <p>
                            三角形の面において、単位法線ベクトルは <InlineMath math="\hat{\mathbf{n}} = (0, 0, 1)" /> である。
                            したがって、 <InlineMath math="\mathbf{F} \cdot \hat{\mathbf{n}} = (0,0,1) \cdot (0,0,1) = 1" /> となる。
                        </p>
                        <BlockMath math="\Phi = \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S 1\, dS" />
                        <p>
                            これは単に三角形の面積に等しい。
                            <BlockMath math="\text{Area} = \frac{1}{2} \times 1 \times 1 = \frac{1}{2}" />
                        </p>
                        <p>
                            したがって、 <InlineMath math="\Phi = 1/2" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        円柱座標系を用いて、半径 <InlineMath math="a" /> 、高さ <InlineMath math="h" /> の円柱 <InlineMath math="V = \{ (r, \theta, z) \mid 0 \le r \le a, 0 \le \theta < 2\pi, 0 \le z \le h \}" /> の体積を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            円柱座標の体積要素 <InlineMath math="dV = r\, dr\, d\theta\, dz" /> を用いて積分する。
                        </p>
                        <BlockMath math="\begin{aligned} \text{Volume}(V) &= \iiint_V dV = \int_0^h \int_0^{2\pi} \int_0^a r\, dr\, d\theta\, dz \\ &= \left( \int_0^a r\, dr \right) \left( \int_0^{2\pi} d\theta \right) \left( \int_0^h dz \right) \\ &= \left[ \frac{1}{2}r^2 \right]_0^a \cdot 2\pi \cdot h = \frac{1}{2}a^2 \cdot 2\pi h = \pi a^2 h \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F} = \mathbf{r} = (x, y, z)" /> の、半径 <InlineMath math="a" /> の上半球面 <InlineMath math="S: x^2 + y^2 + z^2 = a^2, \; z \ge 0" /> を貫く外向きのフラックスを求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            球面上の点において、外向き単位法線ベクトルは <InlineMath math="\hat{\mathbf{n}} = \mathbf{r}/a" /> である。
                        </p>
                        <BlockMath math="\mathbf{F} \cdot \hat{\mathbf{n}} = \mathbf{r} \cdot \frac{\mathbf{r}}{a} = \frac{|\mathbf{r}|^2}{a}" />
                        <p>
                            球面上では <InlineMath math="|\mathbf{r}| = a" /> なので、 <InlineMath math="\mathbf{F} \cdot \hat{\mathbf{n}} = a^2/a = a" /> となる。
                        </p>
                        <p>
                            面積分（Definition 3.2-2）を実行する：
                            <BlockMath math="\begin{aligned} \iint_S \mathbf{F} \cdot d\mathbf{S} &= \iint_S a\, dS = a \iint_S dS \\ &= a \times (\text{上半球の面積}) = a (2\pi a^2) = 2\pi a^3 \end{aligned}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        球座標系を用い、半径 <InlineMath math="R" /> の上半球 <InlineMath math="V: x^2 + y^2 + z^2 \le R^2, \; z \ge 0" /> における関数 <InlineMath math="f = z" /> の体積積分を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            球座標において <InlineMath math="z = r \cos\phi" /> であり、積分範囲は <InlineMath math="0 \le r \le R, 0 \le \phi \le \pi/2, 0 \le \theta < 2\pi" /> である。
                        </p>
                        <BlockMath math="\begin{aligned} \iiint_V z\, dV &= \int_0^R \int_0^{\pi/2} \int_0^{2\pi} (r \cos\phi) (r^2 \sin\phi)\, d\theta\, d\phi\, dr \\ &= \left( \int_0^R r^3 dr \right) \left( \int_0^{2\pi} d\theta \right) \left( \int_0^{\pi/2} \sin\phi \cos\phi\, d\phi \right) \\ &= \left[ \frac{1}{4}r^4 \right]_0^R \cdot 2\pi \cdot \left[ \frac{1}{2}\sin^2\phi \right]_0^{\pi/2} \\ &= \frac{R^4}{4} \cdot 2\pi \cdot \frac{1}{2} = \frac{\pi R^4}{4} \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F}" /> がスカラー場 <InlineMath math="f" /> の勾配（ <InlineMath math="\mathbf{F} = \nabla f" /> ）でかけるとき、任意の曲線 <InlineMath math="C" /> に沿った線積分の値は、曲線の始点 <InlineMath math="\mathbf{P}_0 = \mathbf{r}(a)" /> と終点 <InlineMath math="\mathbf{P}_1 = \mathbf{r}(b)" /> での関数の値の差 <InlineMath math="f(\mathbf{P}_1) - f(\mathbf{P}_0)" /> で与えられることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-3 の線積分の定義と連鎖律を用いる。
                        </p>
                        <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\, dt" />
                        <p>
                            ここで、多変数関数の連鎖律より
                            <BlockMath math="\frac{d}{dt} f(\mathbf{r}(t)) = \nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t)" />
                            である。したがって積分は、
                            <BlockMath math="\begin{aligned} \int_a^b \frac{d}{dt} f(\mathbf{r}(t))\, dt &= [f(\mathbf{r}(t))]_a^b \\ &= f(\mathbf{r}(b)) - f(\mathbf{r}(a)) \end{aligned}" />
                            となり、定理が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
