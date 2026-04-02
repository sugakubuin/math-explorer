import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_7_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        確率変数列 <b><InlineMath math="\{X_n\}" /></b> の次の 3 つの収束概念について、その定義式を記述せよ。
                    </p>
                    <ul className="list-decimal list-inside space-y-1 mt-2">
                        <li><b>概収束</b> (a.s.)</li>
                        <li><b>確率収束</b> (in probability)</li>
                        <li><b>分布収束</b> (in distribution)</li>
                    </ul>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li><b>概収束</b>： <b><InlineMath math="P(\lim_{n \to \infty} X_n = X) = 1" /></b></li>
                            <li><b>確率収束</b>： 任意の <b><InlineMath math="\varepsilon > 0" /></b> に対して <b><InlineMath math="\lim_{n \to \infty} P(|X_n - X| > \varepsilon) = 0" /></b></li>
                            <li><b>分布収束</b>： 分布関数 <b><InlineMath math="F_X" /></b> のすべての連続点 <b><InlineMath math="x" /></b> において <b><InlineMath math="\lim_{n \to \infty} F_{X_n}(x) = F_X(x)" /></b></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        確率収束と概収束の関係について答えよ。<InlineMath math="X_n \xrightarrow{P} X" /> ならば常に <InlineMath math="X_n \to X" /> a.s. といえるか。また、一般には概収束しない場合、部分列に関してどのような性質が成り立つか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            常に概収束するとは限らない（逆は一般には成立しない）。ただし、確率収束する列からは、必ず概収束する部分列 <InlineMath math="\{X_{n_k}\}" /> を取り出すことができる（Theorem 6.2-2）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        <b>一様可積分性</b>（Definition 6.3-2）の定義式を記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            確率変数族 <b><InlineMath math="\{X_n\}" /></b> が一様可積分であるとは、
                            <BlockMath math="\lim_{M \to \infty} \sup_n E[|X_n| 1_{\{|X_n| > M\}}] = 0" />
                            が成り立つことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        確率変数列 <b><InlineMath math="X_n \sim \mathcal{N}(0, 1/n^2)" /></b> を考える。
                        概収束の判定条件（Theorem 6.1-1）を用いて、 <b><InlineMath math="X_n \to 0" /></b> a.s. であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <b><InlineMath math="\varepsilon > 0" /></b> に対して、チェビシェフの不等式を用いると：
                            <BlockMath math="P(|X_n| > \varepsilon) \le \frac{E[X_n^2]}{\varepsilon^2} = \frac{1}{n^2 \varepsilon^2}" />
                        </p>
                        <p>
                            この確率の和を計算すると：
                            <BlockMath math="\sum_{n=1}^\infty P(|X_n| > \varepsilon) \le \frac{1}{\varepsilon^2} \sum_{n=1}^\infty \frac{1}{n^2}" />
                        </p>
                        <p>
                            右辺の級数は収束するため、 §6.1 の判定条件により <b><InlineMath math="X_n \to 0" /></b> a.s. が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        概収束するならば確率収束すること（Theorem 6.2-1）を、事象の包含関係 <b><InlineMath math="\{|X_n - X| > \varepsilon\} \subset \bigcup_{k=n}^\infty \{|X_k - X| > \varepsilon\}" /></b> を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            概収束の定義より <b><InlineMath math="P\left(\bigcup_{k=n}^\infty \{|X_k - X| > \varepsilon\}\right) \to 0 \quad (n \to \infty)" /></b> が成り立つ。
                            測度の単調性より、
                            <BlockMath math="P(|X_n - X| > \varepsilon) \le P\left(\bigcup_{k=n}^\infty \{|X_k - X| > \varepsilon\}\right)" />
                            である。右辺が 0 に収束するため、はさみうちの原理より
                            <BlockMath math="\lim_{n \to \infty} P(|X_n - X| > \varepsilon) = 0" />
                            となり、確率収束の目的の定義を得る。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        標本空間 <b><InlineMath math="\Omega = [0, 1]" /></b> 上の一様分布において、 <b><InlineMath math="X_n(\omega) = \omega^n" /></b> と定義する。
                        この列が 0 に <b><InlineMath math="L^p" /></b> 収束（ <b><InlineMath math="p \ge 1" /></b> ）することを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義に従い期待値を計算する：
                            <BlockMath math="E[|X_n - 0|^p] = E[\omega^{np}] = \int_0^1 \omega^{np} d\omega" />
                        </p>
                        <p>
                            これを積分すると：
                            <BlockMath math="E[|X_n|^p] = \left[ \frac{\omega^{np+1}}{np+1} \right]_0^1 = \frac{1}{np+1}" />
                        </p>
                        <p>
                            <b><InlineMath math="n \to \infty" /></b> のとき <b><InlineMath math="1/(np+1) \to 0" /></b> であるから、定義により 0 に <b><InlineMath math="L^p" /></b> 収束する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        分布収束の極限が定数 <b><InlineMath math="c" /></b> である（ <b><InlineMath math="P(X=c)=1" /></b> ）とき、
                        分布収束と確率収束は同値である（Theorem 6.4-1 の例外条件）。
                        このことを用いて、 <b><InlineMath math="X_n \xrightarrow{d} 0 \implies X_n \xrightarrow{P} 0" /></b> を証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <b><InlineMath math="\varepsilon > 0" /></b> に対して、 <b><InlineMath math="P(|X_n| > \varepsilon) = P(X_n < -\varepsilon) + P(X_n > \varepsilon)" /></b> である。
                            定数 <b><InlineMath math="0" /></b> の分布関数は <b><InlineMath math="F(x) = 0 \quad (x < 0)" /></b> および <b><InlineMath math="F(x) = 1 \quad (x \ge 0)" /></b> である。
                            不連続点は 0 のみであるから、 <b><InlineMath math="\pm \varepsilon" /></b> では収束が保証される。
                        </p>
                        <p>
                            <b><InlineMath math="F_{X_n}(-\varepsilon) \to F( - \varepsilon) = 0" /></b>。
                            また <b><InlineMath math="P(X_n \le \varepsilon) \to F(\varepsilon) = 1" /></b> より、 <b><InlineMath math="P(X_n > \varepsilon) = 1 - P(X_n \le \varepsilon) \to 0" /></b>。
                            以上より <b><InlineMath math="P(|X_n| > \varepsilon) \to 0" /></b> となり、確率収束が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        <b>「型渡り関数（Typewriter sequence）」</b> の例を考える。
                        <b><InlineMath math="\Omega = [0, 1]" /></b> 上の一様分布において、
                        <b><InlineMath math="n = 2^k + m \quad (0 \le m < 2^k)" /></b> に対して
                        <b><InlineMath math="X_n = 1_{[m/2^k, (m+1)/2^k]}" /></b> と定義する。
                        この列が 0 に確率収束するが、どの <b><InlineMath math="\omega \in [0, 1]" /></b> においても 0 に収束しないことを示せ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>確率収束</b>： <b><InlineMath math="P(|X_n| > \varepsilon) = P(X_n = 1) = 1/2^k" /></b> である（ただし <b><InlineMath math="0 < \varepsilon < 1" /></b> ）。
                                <b><InlineMath math="n \to \infty" /></b> のとき <b><InlineMath math="k \to \infty" /></b> となるため、確率は 0 に収束する。
                            </li>
                            <li>
                                <b>各点非収束</b>： 任意の <b><InlineMath math="\omega \in [0, 1]" /></b> に対し、各 <b><InlineMath math="k" /></b> において <b><InlineMath math="\omega \in [m/2^k, (m+1)/2^k]" /></b> となる <b><InlineMath math="m" /></b> が必ず存在する。
                                つまり、どのような <b><InlineMath math="\omega" /></b> に対しても、 <b><InlineMath math="X_n(\omega) = 1" /></b> となる <b><InlineMath math="n" /></b> が無限に存在する。
                                同様に <b><InlineMath math="X_n(\omega) = 0" /></b> となる <b><InlineMath math="n" /></b> も無限に存在するため、 <b><InlineMath math="X_n(\omega)" /></b> は極限を持たず、 0 に概収束することはない。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        確率収束するが <b><InlineMath math="L^1" /></b> 収束しない例（Example 6.3-1 参照）として、
                        <b><InlineMath math="X_n = n 1_{[0, 1/n]}" /></b> （ <b><InlineMath math="\Omega = [0, 1]" /></b> 上の一様分布）を考える。
                        このとき、 <b><InlineMath math="X_n \xrightarrow{P} 0" /></b> だが <b><InlineMath math="E[|X_n|]" /></b> が 0 に収束しないことを示せ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <b>確率収束</b>： 任意の <b><InlineMath math="\varepsilon > 0" /></b> に対し、十分大きな <b><InlineMath math="n" /></b> で <b><InlineMath math="n > \varepsilon" /></b> となる。
                                このとき <b><InlineMath math="P(|X_n| > \varepsilon) = P(X_n = n) = 1/n" /></b> となる。
                                <b><InlineMath math="\lim_{n \to \infty} 1/n = 0" /></b> であるから、 <b><InlineMath math="X_n \xrightarrow{P} 0" /></b> である。
                            </li>
                            <li>
                                <b>L1 ノルム</b>： <b><InlineMath math="E[|X_n - 0|] = E[n 1_{[0, 1/n]}] = n \cdot P([0, 1/n]) = n \cdot \frac{1}{n} = 1" /></b>。
                                したがって期待値は常に 1 であり、 0 に収束しない。
                            </li>
                        </ul>
                        <p>
                            一様可積分性 (§6.3) が満たされない場合、確率の収束が平均（期待値）の収束を保証しない典型例である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        <b>確率収束の連続写像不変性</b>： <b><InlineMath math="X_n \xrightarrow{P} X" /></b> であり、関数 <b><InlineMath math="f" /></b> が連続であるとき、 <b><InlineMath math="f(X_n) \xrightarrow{P} f(X)" /></b> が成り立つことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意に <b><InlineMath math="\varepsilon, \delta > 0" /></b> を固定する。
                            <b><InlineMath math="f" /></b> が連続、特に有界閉集合上で一様連続である性質を用いる（ <b><InlineMath math="X" /></b> がタイト (§6.4) であるため、十分大きな <b><InlineMath math="M" /></b> で <b><InlineMath math="P(|X| > M) < \delta" /></b> とできる）。
                        </p>
                        <p>
                            <b><InlineMath math="K = [-M, M]" /></b> 上で <b><InlineMath math="f" /></b> は一様連続なので、ある <b><InlineMath math="\eta > 0" /></b> が存在し、
                            <b><InlineMath math="|x-y| < \eta" /></b> かつ <b><InlineMath math="x, y \in K" /></b> ならば <b><InlineMath math="|f(x)-f(y)| < \varepsilon" /></b> となる。
                        </p>
                        <BlockMath math="P(|f(X_n) - f(X)| > \varepsilon) \le P(|X_n - X| > \eta) + P(|X| > M)" />
                        <p>
                            <b><InlineMath math="n \to \infty" /></b> のとき第 1 項は確率収束の定義より 0 に収束し、第 2 項は <b><InlineMath math="\delta" /></b> 未満である。
                            <b><InlineMath math="\delta" /></b> は任意に小さくできるため、結論を得る。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
