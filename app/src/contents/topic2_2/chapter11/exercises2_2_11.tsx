import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter11() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="11" number={1}>
                    <p>
                        空間内の正則曲線 <InlineMath math="C" /> がパラメータ <InlineMath math="t" /> （<InlineMath math="a \le t \le b" />）を用いて <InlineMath math="\mathbf{r}(t)" /> で与えられているとき、スカラー関数 <InlineMath math="f(\mathbf{x})" /> の <InlineMath math="C" /> に沿った線積分 <InlineMath math="\int_C f(\mathbf{x}) \, ds" /> を <InlineMath math="t" /> の定積分として計算する公式を記せ（Proposition 11.1-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\int_C f(\mathbf{x}) \, ds = \int_a^b f(\mathbf{r}(t)) \|\mathbf{r}'(t)\| \, dt" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={2}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F}" /> が保存力場であるとは、あるスカラー関数（ポテンシャル関数）<InlineMath math="f" /> を用いてどのように表されることか、数式で記せ（Definition 11.2-2）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\mathbf{F} = \nabla f" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={3}>
                    <p>
                        平面領域 <InlineMath math="D" /> とその正の向きの境界 <InlineMath math="\partial D" /> について、グリーンの定理（Theorem 11.4-1）の等式を記せ。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\oint_{\partial D} (P\, dx + Q\, dy) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dx \, dy" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="11" number={4}>
                    <p>
                        上半円周を表す曲線 <InlineMath math="C: \mathbf{r}(t) = \begin{pmatrix} R\cos t \\ R\sin t \end{pmatrix}" /> （<InlineMath math="0 \le t \le \pi" />）に沿って、スカラー関数 <InlineMath math="f(x, y) = y" /> の線積分 <InlineMath math="\int_C y \, ds" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、速度ベクトルとその大きさを計算する。
                        </p>
                        <BlockMath math="\mathbf{r}'(t) = \begin{pmatrix} -R\sin t \\ R\cos t \end{pmatrix}" />
                        <BlockMath math="\begin{aligned}
                            \|\mathbf{r}'(t)\| &= \sqrt{(-R\sin t)^2 + (R\cos t)^2} \\
                            &= \sqrt{R^2(\sin^2 t + \cos^2 t)} = R
                            \end{aligned}
                        " />
                        <p>
                            曲線上の点で <InlineMath math="f(\mathbf{r}(t)) = y(t) = R\sin t" /> である。
                        </p>
                        <p>
                            公式に従って定積分を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_C y \, ds &= \int_0^\pi (R\sin t) \cdot R \, dt \\
                            &= R^2 \int_0^\pi \sin t \, dt \\
                            &= R^2 \big[ -\cos t \big]_0^\pi \\
                            &= R^2 (-\cos\pi + \cos 0) = R^2(1 + 1) = 2R^2
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={5}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F}(x, y) = \begin{pmatrix} xy \\ x^2 \end{pmatrix}" /> について、点 <InlineMath math="(0,0)" /> から <InlineMath math="(1,1)" /> まで放物線 <InlineMath math="y = x^2" /> に沿って進む経路 <InlineMath math="C" /> 上での線積分 <InlineMath math="\int_C \mathbf{F} \cdot d\mathbf{r}" /> を求めよ。<br />
                        （ヒント：パラメータとして <InlineMath math="x = t" /> とし、<InlineMath math="\mathbf{r}(t) = (t, t^2)" /> で <InlineMath math="0 \le t \le 1" /> を用いるとよい。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            経路 <InlineMath math="C" /> を <InlineMath math="\mathbf{r}(t) = \begin{pmatrix} t \\ t^2 \end{pmatrix}" /> （<InlineMath math="0 \le t \le 1" />）とパラメータ表示する。
                        </p>
                        <p>
                            接ベクトルは <InlineMath math="\mathbf{r}'(t) = \begin{pmatrix} 1 \\ 2t \end{pmatrix}" />（すなわち <InlineMath math="dx = 1 dt" />, <InlineMath math="dy = 2t dt" />）である。
                        </p>
                        <p>
                            ベクトル場に経路を代入すると、
                        </p>
                        <BlockMath math="\mathbf{F}(\mathbf{r}(t)) = \begin{pmatrix} t \cdot t^2 \\ t^2 \end{pmatrix} = \begin{pmatrix} t^3 \\ t^2 \end{pmatrix}" />
                        <p>
                            内積 <InlineMath math="\mathbf{F} \cdot \mathbf{r}'(t)" /> を計算する。
                        </p>
                        <BlockMath math="\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = t^3 \cdot 1 + t^2 \cdot 2t = t^3 + 2t^3 = 3t^3" />
                        <p>
                            積分を実行する。
                        </p>
                        <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^1 3t^3 \, dt = 3 \left[ \frac{t^4}{4} \right]_0^1 = \frac{3}{4}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={6}>
                    <p>
                        グリーンの定理による面積公式（Corollary 11.4-1）の一つである <InlineMath math="S = \frac{1}{2}\oint_{\partial D} (x \, dy - y \, dx)" /> を用いて、半径 <InlineMath math="R" /> の円（境界は <InlineMath math="\mathbf{r}(t) = (R\cos t, R\sin t), \, 0 \le t \le 2\pi" />）の面積を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            円周上の点について、<InlineMath math="x = R\cos t, \, y = R\sin t" /> であるから、微分は
                        </p>
                        <BlockMath math="dx = -R\sin t \, dt, \quad dy = R\cos t \, dt" />
                        <p>
                            となる。被積分関数をパラメータ <InlineMath math="t" /> で表す。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            x \, dy - y \, dx &= (R\cos t)(R\cos t \, dt) - (R\sin t)(-R\sin t \, dt) \\
                            &= R^2\cos^2 t \, dt + R^2\sin^2 t \, dt \\
                            &= R^2(\cos^2 t + \sin^2 t) \, dt = R^2 \, dt
                            \end{aligned}
                        " />
                        <p>
                            面積公式に代入して積分する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            S &= \frac{1}{2} \int_0^{2\pi} R^2 \, dt \\
                            &= \frac{R^2}{2} \big[ t \big]_0^{2\pi} = \frac{R^2}{2} (2\pi) = \pi R^2
                            \end{aligned}
                        " />
                        <p>
                            （公式通り、円の面積 <InlineMath math="\pi R^2" /> が得られた。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={7}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F}(x, y) = \begin{pmatrix} y \\ x \end{pmatrix}" /> は保存力場であり、ポテンシャル関数 <InlineMath math="f(x, y) = xy" /> を持つ。<br />
                        線積分の基本定理（Theorem 11.2-1）を用いて、点 <InlineMath math="(0,0)" /> から点 <InlineMath math="(1,2)" /> までの任意の経路 <InlineMath math="C" /> に沿った線積分 <InlineMath math="\int_C \mathbf{F} \cdot d\mathbf{r}" /> の値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ベクトル場が保存力場であるとき、線積分の値は経路の形によらず、始点と終点のポテンシャルの差だけで決まる。
                        </p>
                        <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = \int_C \nabla f \cdot d\mathbf{r} = f(\text{終点}) - f(\text{始点})" />
                        <p>
                            始点は <InlineMath math="\mathbf{A} = (0, 0)" />、終点は <InlineMath math="\mathbf{B} = (1, 2)" /> である。
                        </p>
                        <p>
                            ポテンシャル関数 <InlineMath math="f(x, y) = xy" /> に代入する。
                        </p>
                        <BlockMath math="f(1, 2) = 1 \cdot 2 = 2" />
                        <BlockMath math="f(0, 0) = 0 \cdot 0 = 0" />
                        <p>
                            したがって、求める線積分の値は
                        </p>
                        <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = 2 - 0 = 2" />
                        <p>
                            である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="11" number={8}>
                    <p>
                        平面 <InlineMath math="z = 1 - x - y" /> の第1八分空間（<InlineMath math="x \ge 0, y \ge 0, z \ge 0" />）に含まれる部分を曲面 <InlineMath math="S" /> とする。<br />
                        <InlineMath math="S" /> 上のスカラー関数 <InlineMath math="f(x, y, z) = x" /> の面積分 <InlineMath math="\iint_S x \, dS" /> を求めよ。<br />
                        （ヒント：<InlineMath math="S" /> を <InlineMath math="x, y" /> をパラメータとして表し、面積素 <InlineMath math="dS" /> を計算せよ。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            曲面 <InlineMath math="S" /> は <InlineMath math="\mathbf{r}(x, y) = \begin{pmatrix} x \\ y \\ 1-x-y \end{pmatrix}" /> とパラメータ表示できる。<br />
                            パラメータ領域 <InlineMath math="D" /> は、<InlineMath math="z \ge 0 \implies 1-x-y \ge 0 \implies x+y \le 1" /> となるため、三角形領域 <InlineMath math="D = \{ (x, y) \mid x \ge 0, y \ge 0, x+y \le 1 \}" /> である。
                        </p>
                        <p>
                            接ベクトルと外積を計算する。
                        </p>
                        <BlockMath math="\mathbf{r}_x = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}, \quad \mathbf{r}_y = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}" />
                        <BlockMath math="\mathbf{r}_x \times \mathbf{r}_y = \begin{pmatrix} (0)(-1) - (-1)(1) \\ (-1)(0) - (1)(-1) \\ (1)(1) - (0)(0) \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}" />
                        <p>
                            面積素は <InlineMath math="dS = \|\mathbf{r}_x \times \mathbf{r}_y\| \, dx \, dy = \sqrt{1^2 + 1^2 + 1^2} \, dx \, dy = \sqrt{3} \, dx \, dy" /> である。
                        </p>
                        <p>
                            積分を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \iint_S x \, dS &= \iint_D x \sqrt{3} \, dx \, dy \\
                            &= \sqrt{3} \int_0^1 \int_0^{1-x} x \, dy \, dx \\
                            &= \sqrt{3} \int_0^1 x \big[ y \big]_0^{1-x} dx \\
                            &= \sqrt{3} \int_0^1 x(1-x) \, dx \\
                            &= \sqrt{3} \int_0^1 (x - x^2) \, dx \\
                            &= \sqrt{3} \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_0^1 = \sqrt{3} \left( \frac{1}{2} - \frac{1}{3} \right) = \frac{\sqrt{3}}{6}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={9}>
                    <p>
                        ベクトル場 <InlineMath math="\mathbf{F}(x, y, z) = \begin{pmatrix} x \\ y \\ z \end{pmatrix}" /> と、半径 <InlineMath math="R" /> の球面上半分の曲面 <InlineMath math="S" />
                    </p>
                    <BlockMath math="\mathbf{r}(\theta, \phi) = \begin{pmatrix} R\sin\theta\cos\phi \\ R\sin\theta\sin\phi \\ R\cos\theta \end{pmatrix} \quad \left(0 \le \theta \le \frac{\pi}{2}, \, 0 \le \phi \le 2\pi\right)" />
                    <p>
                        を考える。外向き（球の中心から遠ざかる向き）の法線をとるとき、流束 <InlineMath math="\iint_S \mathbf{F} \cdot d\mathbf{S}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Chapter 10 (Example 10.4-1) の結果より、外積ベクトルは
                        </p>
                        <BlockMath math="\mathbf{r}_\theta \times \mathbf{r}_\phi = R^2\sin\theta \begin{pmatrix} \sin\theta\cos\phi \\ \sin\theta\sin\phi \\ \cos\theta \end{pmatrix} = R\sin\theta \mathbf{r}(\theta, \phi)" />
                        <p>
                            である。<InlineMath math="R\sin\theta \ge 0" /> であり、位置ベクトル <InlineMath math="\mathbf{r}" /> の方向は原点から外に向かっているので、この外積ベクトルは求める「外向き法線」の要件を満たす。したがって流束は
                        </p>
                        <BlockMath math="\iint_S \mathbf{F} \cdot (\mathbf{r}_\theta \times \mathbf{r}_\phi) \, d\theta \, d\phi" />
                        <p>
                            と計算できる。
                        </p>
                        <p>
                            ベクトル場は <InlineMath math="\mathbf{F}(\mathbf{r}) = \mathbf{r}" /> であるため、内積は
                        </p>
                        <BlockMath math="\mathbf{F} \cdot (\mathbf{r}_\theta \times \mathbf{r}_\phi) = \mathbf{r} \cdot (R\sin\theta \mathbf{r}) = R\sin\theta \|\mathbf{r}\|^2" />
                        <p>
                            球面上では <InlineMath math="\|\mathbf{r}\|^2 = R^2" /> であるから、内積は <InlineMath math="R^3\sin\theta" /> となる。
                        </p>
                        <p>
                            流束を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \iint_S \mathbf{F} \cdot d\mathbf{S} &= \int_0^{2\pi} \int_0^{\pi/2} R^3\sin\theta \, d\theta \, d\phi \\
                            &= R^3 \left( \int_0^{2\pi} d\phi \right) \left( \int_0^{\pi/2} \sin\theta \, d\theta \right) \\
                            &= R^3 (2\pi) \big[ -\cos\theta \big]_0^{\pi/2} \\
                            &= 2\pi R^3 (0 - (-1)) = 2\pi R^3
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={10}>
                    <p>
                        グリーンの定理の等式を具体例で検証する。<br />
                        ベクトル場 <InlineMath math="\mathbf{F} = (P, Q) = (-y, x)" /> と、単位円板 <InlineMath math="D = \{ (x, y) \mid x^2 + y^2 \le 1 \}" /> およびその境界である単位円周 <InlineMath math="\partial D" /> （反時計回り）について、定理の左辺（線積分）と右辺（二重積分）をそれぞれ計算し、それらが一致することを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>[ 左辺の線積分の計算 ]</strong>
                        </p>
                        <p>
                            境界 <InlineMath math="\partial D" /> を <InlineMath math="\mathbf{r}(t) = (\cos t, \sin t)" /> （<InlineMath math="0 \le t \le 2\pi" />）とパラメータ表示する。
                        </p>
                        <BlockMath math="dx = -\sin t \, dt, \quad dy = \cos t \, dt" />
                        <p>
                            線積分は
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            &\oint_{\partial D} (P\, dx + Q\, dy) \\
                            &= \oint_{\partial D} (-y \, dx + x \, dy) \\
                            &= \int_0^{2\pi} \big( -(\sin t)(-\sin t) + (\cos t)(\cos t) \big) \, dt \\
                            &= \int_0^{2\pi} (\sin^2 t + \cos^2 t) \, dt \\
                            &= \int_0^{2\pi} 1 \, dt = 2\pi
                            \end{aligned}
                        " />
                        <p className="mt-4">
                            <strong>[ 右辺の二重積分の計算 ]</strong>
                        </p>
                        <p>
                            被積分関数を計算する。<InlineMath math="P = -y, Q = x" /> である。
                        </p>
                        <BlockMath math="\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = \frac{\partial}{\partial x}(x) - \frac{\partial}{\partial y}(-y) = 1 - (-1) = 2" />
                        <p>
                            二重積分は
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dx \, dy &= \iint_D 2 \, dx \, dy \\
                            &= 2 \iint_D 1 \, dx \, dy \\
                            &= 2 \times (\text{単位円板の面積}) \\
                            &= 2 \times (\pi \cdot 1^2) = 2\pi
                            \end{aligned}
                        " />
                        <p>
                            左辺と右辺の計算結果がともに <InlineMath math="2\pi" /> となり、グリーンの定理が成り立つことが確認できた。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
