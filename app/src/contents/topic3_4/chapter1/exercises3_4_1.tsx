import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_4_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        周期 <InlineMath math="2\pi" /> の可積分関数 <InlineMath math="f" /> に対し、その<b>複素フーリエ係数</b> <InlineMath math="c_n" /> の定義式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-2 に基づき、次のように定義される。
                        </p>
                        <BlockMath math="c_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-inx} dx \quad (n \in \mathbb{Z})" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        <b>ディリクレ核 (Dirichlet kernel)</b> <InlineMath math="D_N(x)" /> の定義式を和の形、および閉じた形の式の両方で記せ。また、その全区間積分の値 <InlineMath math="\int_{-\pi}^{\pi} D_N(x) dx" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-2 に基づき、
                        </p>
                        <BlockMath math="D_N(x) = \sum_{n=-N}^{N} e^{inx} = \frac{\sin\left((N+1/2)x\right)}{\sin(x/2)}" />
                        <p>
                            積分の値については、
                        </p>
                        <BlockMath math="\int_{-\pi}^{\pi} D_N(x) dx = \sum_{n=-N}^{N} \int_{-\pi}^{\pi} e^{inx} dx" />
                        <p>
                            ここで、 <InlineMath math="n \neq 0" /> の項はすべて積分値 0 となり、 <InlineMath math="n = 0" /> の項のみが <InlineMath math="\int_{-\pi}^{\pi} 1 dx = 2\pi" /> として残る。したがって、
                        </p>
                        <BlockMath math="\int_{-\pi}^{\pi} D_N(x) dx = 2\pi" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        複素フーリエ係数を用いて、<b>パーセバルの等式 (Parseval's equality)</b> の主張を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.3-2 に基づき、二乗可積分関数 <InlineMath math="f \in L^2([-\pi, \pi])" /> に対して以下が成り立つ。
                        </p>
                        <BlockMath math="\frac{1}{2\pi} \int_{-\pi}^{\pi} |f(x)|^2 dx = \sum_{n=-\infty}^{\infty} |c_n|^2" />
                        <p>
                            これは、時間領域のエネルギーと周波数領域の成分の二乗和が一致することを意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        区間 <InlineMath math="(-\pi, \pi)" /> で <InlineMath math="f(x) = x" /> と定義される周期関数の複素フーリエ係数 <InlineMath math="c_n" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 1.1-6 の実形式の議論に基づき計算する。 <InlineMath math="c_0 = 0" /> は明らか（平均値 0）。 <InlineMath math="n \neq 0" /> に対して：
                        </p>
                        <BlockMath math="\begin{aligned} c_n &= \frac{1}{2\pi} \int_{-\pi}^{\pi} x e^{-inx} dx \\ &= \frac{1}{2\pi} \left( \left[ x \frac{e^{-inx}}{-in} \right]_{-\pi}^{\pi} - \int_{-\pi}^{\pi} \frac{e^{-inx}}{-in} dx \right) \\ &= \frac{1}{2\pi} \left( \frac{\pi e^{-in\pi} - (-\pi) e^{in\pi}}{-in} + 0 \right) \\ &= \frac{1}{2\pi} \frac{2\pi (-1)^n}{-in} = \frac{i(-1)^n}{n} \end{aligned}" />
                        <p>
                            したがって、 <InlineMath math="c_n = \frac{i(-1)^n}{n}" /> ( <InlineMath math="n \neq 0" /> ) となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        複素フーリエ係数 <InlineMath math="c_n" /> と、実形式のフーリエ係数 <InlineMath math="a_n, b_n" /> の間の対応関係（Proposition 1.1-4）を、 <InlineMath math="c_n" /> を用いて <InlineMath math="a_n, b_n" /> を表す形で記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            複素指数関数と三角関数の関係より、 <InlineMath math="n \ge 1" /> に対して：
                        </p>
                        <BlockMath math="a_n = c_n + c_{-n}, \quad b_n = i(c_n - c_{-n})" />
                        <p>
                            定数項については、
                        </p>
                        <BlockMath math="a_0 = 2c_0" />
                        <p>
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        矩形波 <InlineMath math="f(x) = \text{sgn}(x) \quad (-\pi < x < \pi)" /> について、不連続点 <InlineMath math="x = 0" /> におけるフーリエ級数の収束値を、<b>ディリクレの各点収束定理</b>を用いて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.2-3 によれば、不連続点における収束先は
                        </p>
                        <BlockMath math="\frac{f(0^+) + f(0^-)}{2}" />
                        <p>
                            である。矩形波の定義より <InlineMath math="f(0^+) = 1" />、 <InlineMath math="f(0^-) = -1" /> であるから、
                        </p>
                        <BlockMath math="\frac{1 + (-1)}{2} = 0" />
                        <p>
                            となる。実際に級数展開はすべての正弦関数の和であり、 <InlineMath math="x=0" /> で値 0 をとる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                         <InlineMath math="f(x) = x \sim 2 \sum_{n=1}^\infty \frac{(-1)^{n+1}}{n} \sin nx" /> に対してパーセバルの等式を適用し、<b>バーゼル問題</b>の解 <InlineMath math="\sum_{n=1}^\infty \frac{1}{n^2}" /> の値を導き出せ（Example 1.3-2）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            実形式のパーセバルの等式 <InlineMath math="\frac{1}{2\pi} \int_{-\pi}^{\pi} x^2 dx = \frac{a_0^2}{4} + \frac{1}{2} \sum a_n^2 + \frac{1}{2} \sum b_n^2" /> を用いる。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>左辺: <InlineMath math="\frac{1}{2\pi} \int_{-\pi}^{\pi} x^2 dx = \frac{1}{2\pi} [\frac{x^3}{3}]_{-\pi}^{\pi} = \frac{\pi^2}{3}" /></li>
                            <li>右辺: <InlineMath math="a_n = 0" /> であり、 <InlineMath math="b_n = \frac{2(-1)^{n+1}}{n}" /> より、 <InlineMath math="\frac{1}{2} \sum_{n=1}^\infty \frac{4}{n^2} = 2 \sum_{n=1}^\infty \frac{1}{n^2}" /></li>
                        </ul>
                        <p className="mt-2">
                            これらを等置して、
                            <BlockMath math="\frac{\pi^2}{3} = 2 \sum_{n=1}^\infty \frac{1}{n^2} \implies \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        不連続点付近で発生する<b>ギブス現象 (Gibbs phenomenon)</b> について、項数 <InlineMath math="N" /> を無限大にしたとき、オーバーシュートの高さを規定する積分式を記し、それが元の段差に対して約何パーセントの超過となるか述べよ（Theorem 1.4-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            矩形波の部分和の極大値は、 <InlineMath math="N \to \infty" /> で以下の積分値に収束する。
                        </p>
                        <BlockMath math="\frac{1}{\pi} \int_0^{\pi} \frac{\sin t}{t} dt \approx 1.08949..." />
                        <p>
                            これは、本来の目的値である 1 に対して約 <b>8.9% (約 9%)</b> のオーバーシュートが発生していることを示している。特筆すべきは、項数を増やしてもこの「高さ」自体は減衰せず、不連続点の直近に集中し続ける点である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        <b>フェエール総和法 (Fejer summation)</b> において、フェエール核 <InlineMath math="F_N(x)" /> がディリクレ核 <InlineMath math="D_N(x)" /> と異なり、ギブス現象による振動を抑えられる数学的な理由を説明せよ（Definition 1.4-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            最大の理由は、<b>フェエール核の非負性</b>にある。
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>ディリクレ核 <InlineMath math="D_N" /> は負の値をとることがあり、これが激しい振動（オーバーシュート）を引き起こす。</li>
                            <li>フェエール核 <InlineMath math="F_N" /> は <InlineMath math="\sin^2" /> の形式を含み、常に <InlineMath math="F_N(x) \ge 0" /> である。</li>
                            <li>核が非負であることは、近似に際して「畳み込みによる重み付き平均」が常に順方向に行われることを意味し、不自然なピーク（ヒゲ）を平滑化して一様な収束へと導く。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        関数のエネルギー（ <InlineMath math="L^2" /> ノルム）の観点から見た場合、フーリエ部分和 <InlineMath math="S_N f" /> はどのような意味で「最良の近似」となっているか述べよ（Theorem 1.3-1 アウトライン参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            フーリエ部分和 <InlineMath math="S_N f" /> は、 <InlineMath math="L^2" /> 空間において、三角関数系 <InlineMath math="\{e^{inx} \mid |n| \le N\}" /> で張られる部分空間への<b>直交射影</b>となっている。
                        </p>
                        <p className="mt-2">
                            直交射影の性質、すなわち「点と平面の最短距離」の原理により、複素係数 <InlineMath math="c_n" /> を用いたフーリエ部分和は、同じ次数のすべての三角多項式の中で<b>平均二乗誤差を最小にする</b>という意味で、最良の近似（ベストプロキシメーション）となっている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
