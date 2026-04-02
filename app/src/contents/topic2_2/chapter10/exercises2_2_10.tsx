import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter10() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="10" number={1}>
                    <p>
                        パラメータ曲線 <InlineMath math="\mathbf{r}(t)" /> が正則（正則曲線）であるための、速度ベクトル <InlineMath math="\mathbf{r}'(t)" /> に関する条件を数式で記せ（Definition 10.1-2）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\mathbf{r}'(t) \neq \mathbf{0}" />
                        <p>（区間内のすべての点 <InlineMath math="t" /> において、速度ベクトルが零ベクトルにならないこと。）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={2}>
                    <p>
                        <InlineMath math="C^1" /> 級曲線 <InlineMath math="\mathbf{r}(t)" /> （<InlineMath math="a \le t \le b" />）の弧長 <InlineMath math="L" /> を求める定積分の公式を記せ（Theorem 10.2-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="L = \int_a^b \|\mathbf{r}'(t)\| \, dt" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={3}>
                    <p>
                        パラメータ曲面 <InlineMath math="\mathbf{r}(u, v)" /> における微小な面積要素 <InlineMath math="dS" /> を、接ベクトル <InlineMath math="\mathbf{r}_u" /> と <InlineMath math="\mathbf{r}_v" /> の外積を用いて表せ（Theorem 10.3-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="dS = \|\mathbf{r}_u \times \mathbf{r}_v\| \, du \, dv" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="10" number={4}>
                    <p>
                        空間曲線 <InlineMath math="\mathbf{r}(t) = \begin{pmatrix} 3\cos t \\ 3\sin t \\ 4t \end{pmatrix}" /> について、区間 <InlineMath math="0 \le t \le 2\pi" /> における弧長 <InlineMath math="L" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、速度ベクトル <InlineMath math="\mathbf{r}'(t)" /> を計算する。
                        </p>
                        <BlockMath math="\mathbf{r}'(t) = \begin{pmatrix} -3\sin t \\ 3\cos t \\ 4 \end{pmatrix}" />
                        <p>
                            速度ベクトルの大きさを求める。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \|\mathbf{r}'(t)\| &= \sqrt{(-3\sin t)^2 + (3\cos t)^2 + 4^2} \\
                            &= \sqrt{9\sin^2 t + 9\cos^2 t + 16} \\
                            &= \sqrt{9(\sin^2 t + \cos^2 t) + 16} \\
                            &= \sqrt{9 + 16} = \sqrt{25} = 5
                            \end{aligned}
                        " />
                        <p>
                            弧長は速度ベクトルの大きさを積分して得られる。
                        </p>
                        <BlockMath math="L = \int_0^{2\pi} 5 \, dt = \left[ 5t \right]_0^{2\pi} = 10\pi" />
                        <p>
                            よって、弧長は <InlineMath math="10\pi" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={5}>
                    <p>
                        曲面 <InlineMath math="\mathbf{r}(u,v) = \begin{pmatrix} u \\ v \\ u^2+v^2 \end{pmatrix}" /> について、接ベクトル <InlineMath math="\mathbf{r}_u" /> と <InlineMath math="\mathbf{r}_v" /> を計算し、外積 <InlineMath math="\mathbf{r}_u \times \mathbf{r}_v" /> を求めよ。<br />
                        また、これがすべての <InlineMath math="(u,v)" /> で正則な曲面であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            各パラメータでの偏微分を計算して接ベクトルを求める。
                        </p>
                        <BlockMath math="\mathbf{r}_u = \begin{pmatrix} 1 \\ 0 \\ 2u \end{pmatrix}, \quad \mathbf{r}_v = \begin{pmatrix} 0 \\ 1 \\ 2v \end{pmatrix}" />
                        <p>
                            外積 <InlineMath math="\mathbf{r}_u \times \mathbf{r}_v" /> を計算する。
                        </p>
                        <BlockMath math="
                            \mathbf{r}_u \times \mathbf{r}_v = \begin{pmatrix} 0(2v) - (2u)(1) \\ (2u)(0) - 1(2v) \\ 1(1) - 0(0) \end{pmatrix} = \begin{pmatrix} -2u \\ -2v \\ 1 \end{pmatrix}
                        " />
                        <p>
                            正則性の条件は <InlineMath math="\mathbf{r}_u \times \mathbf{r}_v \neq \mathbf{0}" /> である。
                        </p>
                        <p>
                            求めた外積の第3成分（<InlineMath math="z" /> 成分）は常に <InlineMath math="1" /> であり、<InlineMath math="u, v" /> がどのような値であっても零ベクトル <InlineMath math="\mathbf{0}" /> になることはない。
                            したがって、この曲面はすべての <InlineMath math="(u,v)" /> において正則である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={6}>
                    <p>
                        弧長パラメータ <InlineMath math="s" /> で表された正則曲線 <InlineMath math="\mathbf{r}(s)" /> について、単位接ベクトル <InlineMath math="\mathbf{T}(s) = \mathbf{r}'(s)" /> は定義により常に大きさが <InlineMath math="1" />（<InlineMath math="\mathbf{T}(s) \cdot \mathbf{T}(s) = 1" />）である。<br />
                        この関係式の両辺を <InlineMath math="s" /> で微分することにより、単位接ベクトル <InlineMath math="\mathbf{T}(s)" /> とその導関数 <InlineMath math="\mathbf{T}'(s)" /> が常に直交することを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            仮定より、すべての <InlineMath math="s" /> に対して
                        </p>
                        <BlockMath math="\mathbf{T}(s) \cdot \mathbf{T}(s) = 1" />
                        <p>
                            が成り立つ。この等式の両辺を <InlineMath math="s" /> で微分する。内積の微分法則により、
                        </p>
                        <BlockMath math="\mathbf{T}'(s) \cdot \mathbf{T}(s) + \mathbf{T}(s) \cdot \mathbf{T}'(s) = 0" />
                        <p>
                            内積は可換（<InlineMath math="\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}" />）であるから、
                        </p>
                        <BlockMath math="2 (\mathbf{T}(s) \cdot \mathbf{T}'(s)) = 0 \implies \mathbf{T}(s) \cdot \mathbf{T}'(s) = 0" />
                        <p>
                            内積が <InlineMath math="0" /> であることは、2つのベクトルが直交していることを意味する。よって、<InlineMath math="\mathbf{T}(s)" /> と <InlineMath math="\mathbf{T}'(s)" /> は常に直交する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={7}>
                    <p>
                        半径 <InlineMath math="R" /> の円を弧長パラメータ <InlineMath math="s" /> で表した曲線 <InlineMath math="\mathbf{r}(s) = \begin{pmatrix} R\cos(s/R) \\ R\sin(s/R) \\ 0 \end{pmatrix}" /> （<InlineMath math="R > 0" />）について、単位接ベクトル <InlineMath math="\mathbf{T}(s)" />、曲率 <InlineMath math="\kappa(s)" />、および主法線ベクトル <InlineMath math="\mathbf{N}(s)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、単位接ベクトル <InlineMath math="\mathbf{T}(s) = \mathbf{r}'(s)" /> を計算する。合成関数の微分により中身の微分 <InlineMath math="\frac{1}{R}" /> がかかる。
                        </p>
                        <BlockMath math="\mathbf{T}(s) = \begin{pmatrix} -R \sin(s/R) \cdot \frac{1}{R} \\ R \cos(s/R) \cdot \frac{1}{R} \\ 0 \end{pmatrix} = \begin{pmatrix} -\sin(s/R) \\ \cos(s/R) \\ 0 \end{pmatrix}" />
                        <p>
                            次に、これをさらに微分して <InlineMath math="\mathbf{T}'(s) = \mathbf{r}''(s)" /> を求める。
                        </p>
                        <BlockMath math="\mathbf{T}'(s) = \begin{pmatrix} -\frac{1}{R}\cos(s/R) \\ -\frac{1}{R}\sin(s/R) \\ 0 \end{pmatrix}" />
                        <p>
                            曲率 <InlineMath math="\kappa(s)" /> は <InlineMath math="\mathbf{T}'(s)" /> の大きさである。
                        </p>
                        <BlockMath math="\begin{aligned}
                            \kappa(s) &= \|\mathbf{T}'(s)\| \\
                            &= \sqrt{\left(-\frac{1}{R}\cos(s/R)\right)^2 + \left(-\frac{1}{R}\sin(s/R)\right)^2 + 0} \\
                            &= \sqrt{\frac{1}{R^2}(\cos^2(s/R) + \sin^2(s/R))} \\
                            &= \frac{1}{R}
                            \end{aligned}
                        " />
                        <p>
                            主法線ベクトル <InlineMath math="\mathbf{N}(s)" /> は <InlineMath math="\mathbf{T}'(s)" /> をその大きさ（曲率）で割った単位ベクトルである。
                        </p>
                        <BlockMath math="\mathbf{N}(s) = \frac{\mathbf{T}'(s)}{\kappa(s)} = R \begin{pmatrix} -\frac{1}{R}\cos(s/R) \\ -\frac{1}{R}\sin(s/R) \\ 0 \end{pmatrix} = \begin{pmatrix} -\cos(s/R) \\ -\sin(s/R) \\ 0 \end{pmatrix}" />
                        <p>
                            （常に円の中心を向くベクトルとなる。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="10" number={8}>
                    <p>
                        問題7の円の曲線について、従法線ベクトル <InlineMath math="\mathbf{B}(s) = \mathbf{T}(s) \times \mathbf{N}(s)" /> を計算せよ。<br />
                        また、その結果を用いて導関数 <InlineMath math="\mathbf{B}'(s)" /> を計算し、この曲線の捩率（ねじれりつ）<InlineMath math="\tau(s)" /> がいくつになるか答えよ。<br />
                        （フルネ・セレの公式 <InlineMath math="\mathbf{B}' = -\tau \mathbf{N}" /> を用いよ。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            問題7の結果より、
                        </p>
                        <BlockMath math="\mathbf{T}(s) = \begin{pmatrix} -\sin(s/R) \\ \cos(s/R) \\ 0 \end{pmatrix}, \quad \mathbf{N}(s) = \begin{pmatrix} -\cos(s/R) \\ -\sin(s/R) \\ 0 \end{pmatrix}" />
                        <p>
                            従法線ベクトル <InlineMath math="\mathbf{B}(s)" /> はこれらの外積である。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \mathbf{B}(s) &= \mathbf{T}(s) \times \mathbf{N}(s) \\
                            &= \begin{pmatrix}
                            (\cos(s/R))(0) - (0)(-\sin(s/R)) \\
                            (0)(-\cos(s/R)) - (-\sin(s/R))(0) \\
                            (-\sin(s/R))(-\sin(s/R)) - (\cos(s/R))(-\cos(s/R))
                            \end{pmatrix} \\
                            &= \begin{pmatrix} 0 \\ 0 \\ \sin^2(s/R) + \cos^2(s/R) \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}
                            \end{aligned}
                        " />
                        <p>
                            定数ベクトル <InlineMath math="\mathbf{B}(s) = (0, 0, 1)^T" /> を <InlineMath math="s" /> で微分すると、
                        </p>
                        <BlockMath math="\mathbf{B}'(s) = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}" />
                        <p>
                            フルネ・セレの公式 <InlineMath math="\mathbf{B}'(s) = -\tau(s) \mathbf{N}(s)" /> より、<InlineMath math="\mathbf{N}(s)" /> は零ベクトルではないため、
                        </p>
                        <BlockMath math="\tau(s) = 0" />
                        <p>
                            となる。平面に完全に含まれる曲線の捩率は常に <InlineMath math="0" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={9}>
                    <p>
                        曲線 <InlineMath math="\mathbf{r}(t) = \begin{pmatrix} e^t \cos t \\ e^t \sin t \\ 0 \end{pmatrix}" /> （<InlineMath math="t \ge 0" />）について考える。
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>速度ベクトル <InlineMath math="\mathbf{r}'(t)" /> の大きさ <InlineMath math="\|\mathbf{r}'(t)\|" /> を求めよ。</li>
                        <li><InlineMath math="t=0" /> を基準点としたときの弧長 <InlineMath math="s(t) = \int_0^t \|\mathbf{r}'(\tau)\| \, d\tau" /> を求めよ。</li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            <strong>1. 速度ベクトルの大きさの計算：</strong><br />
                            積の微分法則を用いて各成分を微分する。
                        </p>
                        <BlockMath math="\mathbf{r}'(t) = \begin{pmatrix} e^t \cos t - e^t \sin t \\ e^t \sin t + e^t \cos t \\ 0 \end{pmatrix} = e^t \begin{pmatrix} \cos t - \sin t \\ \sin t + \cos t \\ 0 \end{pmatrix}" />
                        <p>
                            その大きさを計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \|\mathbf{r}'(t)\|^2 &= (e^t)^2 \left( (\cos t - \sin t)^2 + (\sin t + \cos t)^2 \right) \\
                            &= e^{2t} \bigl( (\cos^2 t - 2\sin t\cos t + \sin^2 t) \\
                            &\qquad + (\sin^2 t + 2\sin t\cos t + \cos^2 t) \bigr) \\
                            &= e^{2t} \left( 1 - 2\sin t\cos t + 1 + 2\sin t\cos t \right) \\
                            &= e^{2t} (2) = 2e^{2t}
                            \end{aligned}
                        " />
                        <p>
                            したがって、<InlineMath math="\|\mathbf{r}'(t)\| = \sqrt{2e^{2t}} = \sqrt{2}e^t" /> である。
                        </p>
                        <p className="mt-4">
                            <strong>2. 弧長の計算：</strong><br />
                            公式に従って積分する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            s(t) &= \int_0^t \sqrt{2} e^\tau \, d\tau \\
                            &= \sqrt{2} \left[ e^\tau \right]_0^t \\
                            &= \sqrt{2}(e^t - 1)
                            \end{aligned}
                        " />
                        <p>
                            これが求める弧長 <InlineMath math="s" /> とパラメータ <InlineMath math="t" /> の関係式である。（逆に解けば <InlineMath math="t = \ln\left(\frac{s}{\sqrt{2}} + 1\right)" /> となり、弧長パラメータ表示を作ることができる。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={10}>
                    <p>
                        半径 <InlineMath math="R" /> の球面は <InlineMath math="\mathbf{r}(\theta, \phi) = \begin{pmatrix} R\sin\theta\cos\phi \\ R\sin\theta\sin\phi \\ R\cos\theta \end{pmatrix}" /> とパラメータ表示される。<br />
                        この曲面の面積要素 <InlineMath math="dS = \|\mathbf{r}_\theta \times \mathbf{r}_\phi\| \, d\theta \, d\phi" /> を計算せよ。<br />
                        また、その結果を用いて全領域（<InlineMath math="0 \le \theta \le \pi, \, 0 \le \phi \le 2\pi" />）で二重積分を行い、球の表面積が <InlineMath math="4\pi R^2" /> になることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            偏導関数（接ベクトル）を計算する。
                        </p>
                        <BlockMath math="\mathbf{r}_\theta = \begin{pmatrix} R\cos\theta\cos\phi \\ R\cos\theta\sin\phi \\ -R\sin\theta \end{pmatrix}, \quad \mathbf{r}_\phi = \begin{pmatrix} -R\sin\theta\sin\phi \\ R\sin\theta\cos\phi \\ 0 \end{pmatrix}" />
                        <p>
                            外積 <InlineMath math="\mathbf{r}_\theta \times \mathbf{r}_\phi" /> を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \mathbf{r}_\theta \times \mathbf{r}_\phi &= \begin{pmatrix}
                            (R\cos\theta\sin\phi)(0) - (-R\sin\theta)(R\sin\theta\cos\phi) \\
                            (-R\sin\theta)(-R\sin\theta\sin\phi) - (R\cos\theta\cos\phi)(0) \\
                            (R\cos\theta\cos\phi)(R\sin\theta\cos\phi) - (R\cos\theta\sin\phi)(-R\sin\theta\sin\phi)
                            \end{pmatrix} \\
                            &= \begin{pmatrix}
                            R^2\sin^2\theta\cos\phi \\
                            R^2\sin^2\theta\sin\phi \\
                            R^2\sin\theta\cos\theta(\cos^2\phi + \sin^2\phi)
                            \end{pmatrix} \\
                            &= R^2\sin\theta \begin{pmatrix} \sin\theta\cos\phi \\ \sin\theta\sin\phi \\ \cos\theta \end{pmatrix}
                            \end{aligned}
                        " />
                        <p>
                            このベクトルの大きさを求める。（括弧内のベクトルは元の位置ベクトルの方向であり、大きさは <InlineMath math="1" /> である。）
                        </p>
                        <BlockMath math="\begin{aligned}
                            \|\mathbf{r}_\theta \times \mathbf{r}_\phi\| &= R^2\sin\theta \sqrt{\sin^2\theta\cos^2\phi + \sin^2\theta\sin^2\phi + \cos^2\theta} \\
                            &= R^2\sin\theta \sqrt{\sin^2\theta + \cos^2\theta} = R^2\sin\theta
                            \end{aligned}
                        " />
                        <p>
                            （<InlineMath math="0 \le \theta \le \pi" /> より <InlineMath math="\sin\theta \ge 0" /> なので絶対値は不要。）<br />
                            よって面積要素は <InlineMath math="dS = R^2\sin\theta \, d\theta \, d\phi" /> である。
                        </p>
                        <p>
                            球の表面積 <InlineMath math="S" /> を求めるため、全領域で積分する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            S &= \int_0^{2\pi} \int_0^\pi R^2\sin\theta \, d\theta \, d\phi \\
                            &= R^2 \left( \int_0^{2\pi} d\phi \right) \left( \int_0^\pi \sin\theta \, d\theta \right) \\
                            &= R^2 (2\pi) \left[ -\cos\theta \right]_0^\pi \\
                            &= 2\pi R^2 (-\cos\pi + \cos 0) \\
                            &= 2\pi R^2 (1 + 1) = 4\pi R^2
                            \end{aligned}
                        " />
                        <p>
                            以上より、球の表面積が <InlineMath math="4\pi R^2" /> であることが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
