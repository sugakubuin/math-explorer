import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_2_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        関数 <InlineMath math="f(x) = 4x^3" /> の不定積分を、積分定数を <InlineMath math="C" /> として求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.1-1 （基本的な不定積分の公式）より、<InlineMath math="\displaystyle \int x^\alpha \, dx = \frac{x^{\alpha+1}}{\alpha+1} + C" /> である。
                            また、Proposition 3.1-1 の定数倍の性質を用いる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int 4x^3 \, dx &= 4 \int x^3 \, dx \\
                            &= 4 \left( \frac{x^4}{4} \right) + C \\
                            &= x^4 + C
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        次の定積分を計算せよ。
                    </p>
                    <BlockMath math="\int_0^2 (3x^2 - 2x + 1) \, dx" />
                    <ExerciseSolution>
                        <p>
                            Theorem 3.3-2 （微積分の第2基本定理）を用いる。まず被積分関数の原始関数を求める。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^2 (3x^2 - 2x + 1) \, dx &= \left[ x^3 - x^2 + x \right]_0^2 \\
                            &= (2^3 - 2^2 + 2) - (0^3 - 0^2 + 0) \\
                            &= 8 - 4 + 2 \\
                            &= 6
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        Theorem 3.3-1 （微積分の第1基本定理）を用いて、次の関数 <InlineMath math="S(x)" /> の導関数 <InlineMath math="S'(x)" /> を求めよ。
                    </p>
                    <BlockMath math="S(x) = \int_1^x \sin(t^2) \, dt" />
                    <ExerciseSolution>
                        <p>
                            Theorem 3.3-1 より、<InlineMath math="\displaystyle \frac{d}{dx} \left( \int_a^x f(t) \, dt \right) = f(x)" /> である。
                        </p>
                        <p>
                            被積分関数は <InlineMath math="f(t) = \sin(t^2)" /> であり、下端は定数 <InlineMath math="a = 1" /> なので、そのまま <InlineMath math="t" /> を <InlineMath math="x" /> に置き換えればよい。
                        </p>
                        <BlockMath math="S'(x) = \sin(x^2)" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        置換積分法を用いて、次の不定積分を求めよ。
                    </p>
                    <BlockMath math="\int x e^{x^2} \, dx" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="t = x^2" /> とおく。両辺を <InlineMath math="x" /> で微分すると、<InlineMath math="\frac{dt}{dx} = 2x" /> すなわち <InlineMath math="dt = 2x \, dx" /> となる。
                        </p>
                        <p>
                            与式に <InlineMath math="x \, dx = \frac{1}{2} dt" /> を代入する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int e^{x^2} \cdot x \, dx &= \int e^t \left(\frac{1}{2} dt\right) \\
                            &= \frac{1}{2} \int e^t \, dt \\
                            &= \frac{1}{2} e^t + C
                            \end{aligned}
                        " />
                        <p>
                            最後に <InlineMath math="t" /> を <InlineMath math="x" /> の式に戻す。
                        </p>
                        <BlockMath math="= \frac{1}{2} e^{x^2} + C" />
                        <p>（<InlineMath math="C" /> は積分定数）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        部分積分法を用いて、次の不定積分を求めよ。
                    </p>
                    <BlockMath math="\int x \cos x \, dx" />
                    <ExerciseSolution>
                        <p>
                            Theorem 3.5-1 （部分積分）の公式 <InlineMath math="\int f'(x) g(x) \, dx = f(x)g(x) - \int f(x) g'(x) \, dx" /> を用いる。
                        </p>
                        <p>
                            多項式である <InlineMath math="x" /> を微分する側 <InlineMath math="g(x)" /> に選び、<InlineMath math="\cos x" /> を積分する側 <InlineMath math="f'(x)" /> に選ぶ。
                        </p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li><InlineMath math="f'(x) = \cos x \implies f(x) = \sin x" /></li>
                            <li><InlineMath math="g(x) = x \implies g'(x) = 1" /></li>
                        </ul>
                        <p>公式に当てはめる。</p>
                        <BlockMath math="
                            \begin{aligned}
                            \int (\cos x) \cdot x \, dx &= \sin x \cdot x - \int \sin x \cdot 1 \, dx \\
                            &= x \sin x - (-\cos x) + C \\
                            &= x \sin x + \cos x + C
                            \end{aligned}
                        " />
                        <p>（<InlineMath math="C" /> は積分定数）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        放物線 <InlineMath math="y = x^2" /> と直線 <InlineMath math="y = x + 2" /> で囲まれた図形の面積 <InlineMath math="S" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、2つのグラフの交点を求めるため、方程式を解く。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            x^2 &= x + 2 \\
                            x^2 - x - 2 &= 0 \\
                            (x - 2)(x + 1) &= 0 \implies x = -1, 2
                            \end{aligned}
                        " />
                        <p>
                            区間 <InlineMath math="[-1, 2]" /> において、<InlineMath math="x = 0" /> を代入すると直線側は <InlineMath math="2" />、放物線側は <InlineMath math="0" /> なので、直線 <InlineMath math="y = x + 2" /> の方が上にある。
                        </p>
                        <p>
                            したがって、求める面積 <InlineMath math="S" /> は上の式から下の式を引いた積分となる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            S &= \int_{-1}^2 \{(x + 2) - x^2\} \, dx \\
                            &= \left[ -\frac{x^3}{3} + \frac{x^2}{2} + 2x \right]_{-1}^2 \\
                            &= \left( -\frac{8}{3} + \frac{4}{2} + 4 \right) - \left( \frac{1}{3} + \frac{1}{2} - 2 \right) \\
                            &= \left( -\frac{8}{3} + 6 \right) - \left( \frac{5}{6} - 2 \right) \\
                            &= \frac{10}{3} - \left( -\frac{7}{6} \right) \\
                            &= \frac{20}{6} + \frac{7}{6} = \frac{27}{6} = \frac{9}{2}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        定積分の置換積分を用いて、次の定積分を計算せよ。
                    </p>
                    <BlockMath math="\int_0^1 (2x + 1)^3 \, dx" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="t = 2x + 1" /> とおく。微分して <InlineMath math="dt = 2 \, dx" />、すなわち <InlineMath math="dx = \frac{1}{2} dt" /> である。
                        </p>
                        <p>
                            積分区間の対応を調べる。
                            <InlineMath math="x" /> が <InlineMath math="0" /> から <InlineMath math="1" /> まで変化するとき、<InlineMath math="t" /> は <InlineMath math="1" /> から <InlineMath math="3" /> まで変化する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^1 (2x + 1)^3 \, dx &= \int_1^3 t^3 \left(\frac{1}{2} dt\right) \\
                            &= \frac{1}{2} \left[ \frac{t^4}{4} \right]_1^3 \\
                            &= \frac{1}{8} (3^4 - 1^4) \\
                            &= \frac{1}{8} (81 - 1) = \frac{80}{8} = 10
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        円板法（Proposition 3.6-2）を用いて、関数 <InlineMath math="y = \sqrt{x}" /> （<InlineMath math="0 \le x \le 4" />）、<InlineMath math="x" /> 軸、および直線 <InlineMath math="x = 4" /> で囲まれた領域を <InlineMath math="x" /> 軸の周りに1回転させてできる立体の体積 <InlineMath math="V" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 3.6-2 より、<InlineMath math="x" /> 軸周りの回転体の体積 <InlineMath math="V" /> は <InlineMath math="\displaystyle V = \pi \int_a^b \{f(x)\}^2 \, dx" /> で与えられる。
                        </p>
                        <p>
                            <InlineMath math="f(x) = \sqrt{x}" />、区間は <InlineMath math="[0, 4]" /> であるから代入する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            V &= \pi \int_0^4 (\sqrt{x})^2 \, dx \\
                            &= \pi \int_0^4 x \, dx \\
                            &= \pi \left[ \frac{x^2}{2} \right]_0^4 \\
                            &= \pi \left( \frac{16}{2} - 0 \right) \\
                            &= 8\pi
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        三角置換を用いて、次の定積分（半径 <InlineMath math="2" /> の円の四半分の面積）を計算せよ。
                    </p>
                    <BlockMath math="\int_0^2 \sqrt{4 - x^2} \, dx" />
                    <ExerciseSolution>
                        <p>
                            被積分関数に <InlineMath math="\sqrt{a^2 - x^2}" /> の形が含まれているので、<InlineMath math="x = 2 \sin \theta" /> とおく。
                        </p>
                        <p>
                            <InlineMath math="x" /> で微分して <InlineMath math="dx = 2 \cos \theta \, d\theta" /> となる。
                        </p>
                        <p>
                            積分区間の対応を調べる。<InlineMath math="x = 0 \implies \theta = 0" />、<InlineMath math="x = 2 \implies \sin \theta = 1 \implies \theta = \pi/2" />。
                        </p>
                        <p>
                            また、<InlineMath math="\sqrt{4 - x^2} = \sqrt{4 - 4\sin^2\theta} = \sqrt{4\cos^2\theta} = 2\cos\theta" /> （<InlineMath math="0 \le \theta \le \pi/2" /> では <InlineMath math="\cos\theta \ge 0" />）。
                        </p>
                        <p>これらを代入して積分を計算する。</p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^2 \sqrt{4 - x^2} \, dx &= \int_0^{\pi/2} (2 \cos \theta) (2 \cos \theta \, d\theta) \\
                            &= 4 \int_0^{\pi/2} \cos^2 \theta \, d\theta
                            \end{aligned}
                        " />
                        <p>
                            半角の公式 <InlineMath math="\cos^2 \theta = \frac{1 + \cos 2\theta}{2}" /> を用いる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            &= 4 \int_0^{\pi/2} \frac{1 + \cos 2\theta}{2} \, d\theta \\
                            &= 2 \int_0^{\pi/2} (1 + \cos 2\theta) \, d\theta \\
                            &= 2 \left[ \theta + \frac{1}{2}\sin 2\theta \right]_0^{\pi/2} \\
                            &= 2 \left\{ \left(\frac{\pi}{2} + \frac{1}{2}\sin\pi\right) - (0 + 0) \right\} \\
                            &= 2 \left( \frac{\pi}{2} + 0 \right) = \pi
                            \end{aligned}
                        " />
                        <p className="text-sm mt-2 text-slate-500">
                            （これは半径2の円の面積 <InlineMath math="4\pi" /> の <InlineMath math="1/4" /> に一致している。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        部分積分を2回繰り返すことで、次の不定積分を求めよ。
                    </p>
                    <BlockMath math="I = \int e^x \cos x \, dx" />
                    <ExerciseSolution>
                        <p>
                            指数関数と三角関数の積である。どちらを積分側に選んでもよいが、ここでは <InlineMath math="e^x" /> を積分する側とする。<br />
                            <InlineMath math="f'(x) = e^x \implies f(x) = e^x" />、<InlineMath math="g(x) = \cos x \implies g'(x) = -\sin x" /> として部分積分を1回行う。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            I &= e^x \cos x - \int e^x (-\sin x) \, dx \\
                            &= e^x \cos x + \int e^x \sin x \, dx
                            \end{aligned}
                        " />
                        <p>
                            残った積分 <InlineMath math="\int e^x \sin x \, dx" /> に対して、もう一度部分積分を行う。
                            同じく <InlineMath math="e^x" /> を積分側、<InlineMath math="\sin x" /> を微分側とする。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int e^x \sin x \, dx &= e^x \sin x - \int e^x (\cos x) \, dx \\
                            &= e^x \sin x - I
                            \end{aligned}
                        " />
                        <p>
                            これを元の式に代入する。
                        </p>
                        <BlockMath math="I = e^x \cos x + e^x \sin x - I" />
                        <p>
                            方程式として <InlineMath math="I" /> について解く（右辺の <InlineMath math="-I" /> を左辺に移項）。
                        </p>
                        <BlockMath math="2I = e^x (\cos x + \sin x)" />
                        <BlockMath math="I = \frac{e^x}{2} (\sin x + \cos x)" />
                        <p>
                            不定積分であるため、最後に積分定数 <InlineMath math="C" /> を付加する。
                        </p>
                        <BlockMath math="\int e^x \cos x \, dx = \frac{e^x}{2} (\sin x + \cos x) + C" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
