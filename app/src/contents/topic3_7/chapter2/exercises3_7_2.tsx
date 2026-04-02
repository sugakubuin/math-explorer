import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_7_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        確率空間 <b><InlineMath math="(\Omega, \mathcal{F}, P)" /></b> 上の関数 <b><InlineMath math="X : \Omega \to \mathbb{R}" /></b> が<b>確率変数</b>であるための定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-1 より、任意のボレル集合 <b><InlineMath math="B \in \mathcal{B}(\mathbb{R})" /></b> に対して、その逆像が事象族に属することである。
                        </p>
                        <BlockMath math="X^{-1}(B) = \{ \omega \in \Omega \mid X(\omega) \in B \} \in \mathcal{F}" />
                        <p>
                            これは、<b><InlineMath math="X" /></b> が可測空間 <b><InlineMath math="(\Omega, \mathcal{F})" /></b> から <b><InlineMath math="(\mathbb{R}, \mathcal{B}(\mathbb{R}))" /></b> への可測関数であることを意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        累積分布関数 (CDF) <b><InlineMath math="F_X(x)" /></b> が満たすべき 3 つの性質（漸近、単調性、連続性）を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.2-1 より、以下の性質を満たす。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li><b>漸近的な値</b>： <b><InlineMath math="\lim_{x \to -\infty} F(x) = 0" /></b> かつ <b><InlineMath math="\lim_{x \to +\infty} F(x) = 1" /></b> である。</li>
                            <li><b>単調非減少性</b>： <b><InlineMath math="x < y \implies F(x) \leq F(y)" /></b> である。</li>
                            <li><b>右連続性</b>： 任意の <b><InlineMath math="x \in \mathbb{R}" /></b> に対して、 <b><InlineMath math="\lim_{y \searrow x} F(y) = F(x)" /></b> である。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        連続型確率変数における確率密度関数 (PDF) <b><InlineMath math="f(x)" /></b> が満たすべき正規化条件を式で示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.4-1 より、全区間での積分値が 1 になることである。
                        </p>
                        <BlockMath math="\int_{-\infty}^\infty f(x) \, dx = 1" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        成功確率 <b><InlineMath math="p = 0.4" /></b> の独立なベルヌーイ試行を <b><InlineMath math="n = 5" /></b> 回繰り返す。
                        このとき、成功回数 <b><InlineMath math="X" /></b> が 2 回となる確率 <b><InlineMath math="P(X=2)" /></b> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 2.3-2 より、<b>二項分布</b> <b><InlineMath math="B(5, 0.4)" /></b> の確率質量関数を用いる。
                        </p>
                        <BlockMath math="\begin{aligned} P(X = 2) &= \binom{5}{2} (0.4)^2 (1 - 0.4)^{5 - 2} \\ &= 10 \times 0.16 \times 0.6^3 \\ &= 10 \times 0.16 \times 0.216 = 0.3456 \end{aligned}" />
                        <p>
                            答え： <b>0.3456</b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        平均発生回数が <b><InlineMath math="\lambda = 3" /></b> であるポアソン分布に従う事象について、
                        「一度も発生しない」確率 <b><InlineMath math="P(X=0)" /></b> を求めよ（<b><InlineMath math="e \approx 2.718" /></b> とする）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 2.3-3 より、<b>ポアソン分布</b> <b><InlineMath math="Po(3)" /></b> の確率質量関数を用いる。
                        </p>
                        <BlockMath math="P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}" />
                        <p>
                            <b><InlineMath math="k=0, \lambda=3" /></b> を代入すると：
                            <BlockMath math="P(X = 0) = \frac{e^{-3} 3^0}{0!} = e^{-3} = \frac{1}{e^3} \approx \frac{1}{2.718^3} \approx 0.0498" />
                        </p>
                        <p>
                            答え： <b>約 0.0498</b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        パラメータ <b><InlineMath math="\lambda" /></b> の指数分布に従う確率変数 <b><InlineMath math="X" /></b> に対して、
                        累積分布関数 <b><InlineMath math="F(x)" /></b> を <b><InlineMath math="x \geq 0" /></b> の範囲で求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 2.4-3 の確率密度関数 <b><InlineMath math="f(t) = \lambda e^{-\lambda t}" /></b> を <b><InlineMath math="0" /></b> から <b><InlineMath math="x" /></b> まで積分する。
                        </p>
                        <BlockMath math="\begin{aligned} F(x) = \int_0^x \lambda e^{-\lambda t} \, dt &= \left[ -e^{-\lambda t} \right]_0^x \\ &= -e^{-\lambda x} - (-e^0) = 1 - e^{-\lambda x} \end{aligned}" />
                        <p>
                            答え： <b><InlineMath math="F(x) = 1 - e^{-\lambda x}" /></b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        2 つの確率変数 <b><InlineMath math="X, Y" /></b> の結合密度関数が
                        <b><InlineMath math="f(x, y) = 1" /></b> （<b><InlineMath math="0 \leq x, y \leq 1" /></b>）、および 0 （その他）
                        で与えられているとき、<b><InlineMath math="X" /></b> の周辺密度関数 <b><InlineMath math="f_X(x)" /></b> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.5-2 より、<b><InlineMath math="y" /></b> について全区間で積分する。
                        </p>
                        <BlockMath math="f_X(x) = \int_0^1 1 \, dy = [y]_0^1 = 1 \quad (0 \leq x \leq 1)" />
                        <p>
                            答え： <b><InlineMath math="f_X(x) = 1" /></b> （<b><InlineMath math="0 \leq x \leq 1" /></b>）、および 0 （その他）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        指数分布の<b>無記憶性</b> <b><InlineMath math="P(X > s + t \mid X > s) = P(X > t)" /></b> を、
                        問題 6 で求めた累積分布関数（または生存関数 <b><InlineMath math="P(X > x) = e^{-\lambda x}" /></b> ）を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            条件付き確率の定義に従い、計算を行う。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                左辺を計算する：
                                <BlockMath math="P(X > s + t \mid X > s) = \frac{P(X > s + t \cap X > s)}{P(X > s)}" />
                            </li>
                            <li>
                                <b><InlineMath math="s, t > 0" /></b> より、<b><InlineMath math="X > s + t" /></b> ならば必ず <b><InlineMath math="X > s" /></b> であるから：
                                <BlockMath math="P(X > s + t \cap X > s) = P(X > s + t)" />
                            </li>
                            <li>
                                指数分布の生存関数 <b><InlineMath math="P(X > x) = e^{-\lambda x}" /></b> を代入すると：
                                <BlockMath math="\frac{P(X > s + t)}{P(X > s)} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = \frac{e^{-\lambda s} e^{-\lambda t}}{e^{-\lambda s}} = e^{-\lambda t}" />
                            </li>
                            <li>
                                これは <b><InlineMath math="P(X > t)" /></b> そのものである。
                            </li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        正規分布 <b><InlineMath math="N(\mu, \sigma^2)" /></b> の密度関数が全実数上で積分して 1 になることを、
                        標準正規分布 <b><InlineMath math="N(0, 1)" /></b> の場合のガウス積分 <b><InlineMath math="\int_{-\infty}^\infty e^{-z^2/2} dz = \sqrt{2\pi}" /></b> を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            正規分布の密度関数の積分に対して、変数変換（標準化）を行う。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                積分を書き下す：
                                <BlockMath math="I = \int_{-\infty}^\infty \frac{1}{\sqrt{2\pi}\sigma} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right) dx" />
                            </li>
                            <li>
                                <b><InlineMath math="z = (x - \mu) / \sigma" /></b> と変数変換すると、 <b><InlineMath math="dx = \sigma dz" /></b> であり：
                                <BlockMath math="I = \int_{-\infty}^\infty \frac{1}{\sqrt{2\pi}\sigma} e^{-z^2/2} \cdot \sigma dz = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^\infty e^{-z^2/2} dz" />
                            </li>
                            <li>
                                ガウス積分の結果 <b><InlineMath math="\sqrt{2\pi}" /></b> を代入すると：
                                <BlockMath math="I = \frac{1}{\sqrt{2\pi}} \cdot \sqrt{2\pi} = 1" />
                            </li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        2 つの確率変数が「無相関」であっても「独立」とは限らないことを、
                        <b><InlineMath math="\theta" /></b> が <b><InlineMath math="[0, 2\pi]" /></b> 上の一様分布に従うときの <b><InlineMath math="X = \cos \theta" /></b>, <b><InlineMath math="Y = \sin \theta" /></b> の例（Example 2.5-2）を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            統計的な指標（共分散）と、分布の自立性（独立性）の違いに注目する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>従属性：</b> <b><InlineMath math="X^2 + Y^2 = 1" /></b> という明確な関数関係があるため、<b><InlineMath math="X" /></b> の値が決まれば <b><InlineMath math="Y" /></b> は 2 点に絞られる。したがって、これらは決して独立ではない。
                            </li>
                            <li>
                                <b>無相関性：</b> 共分散を計算すると、一周期での <b><InlineMath math="\sin \theta \cos \theta" /></b> の積分は 0 になる。
                                <BlockMath math="E[XY] = \frac{1}{2\pi} \int_0^{2\pi} \cos \theta \sin \theta \, d\theta = \frac{1}{4\pi} \int_0^{2\pi} \sin 2\theta \, d\theta = 0" />
                                また <b><InlineMath math="E[X]=0, E[Y]=0" /></b> であるから <b><InlineMath math="\mathrm{Cov}(X, Y) = 0" /></b> となる。
                            </li>
                            <li>
                                <b>結論：</b> この例は、共分散や相関係数が 0 （線形な連動がない）であっても、変数間に強い非線形な従属性が存在しうることを示している。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
