import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_7_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        ルベーグ積分に基づく期待値の定義において、一般の確率変数 <b><InlineMath math="X" /></b> の期待値 <b><InlineMath math="E[X]" /></b> が定義されるための条件を、正の部分 <b><InlineMath math="X^+" /></b> と負の部分 <b><InlineMath math="X^-" /></b> を用いて述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-3 より、<b><InlineMath math="E[X^+]" /></b> または <b><InlineMath math="E[X^-]" /></b> の少なくとも一方が有限（<b><InlineMath math="< \infty" /></b>）であることが必要である。
                        </p>
                        <p>
                            特に、両方が有限であるとき、 <b><InlineMath math="X" /></b> は<b>可積分</b>であるといい、期待値は <b><InlineMath math="E[X] = E[X^+] - E[X^-]" /></b> で定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        期待値の基本性質である<b>線形性</b>と<b>単調性</b>を、数式を用いて記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.2-1 より、以下の性質が成り立つ。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><b>線形性</b>： <b><InlineMath math="E[aX + bY] = aE[X] + bE[Y]" /></b> （ここで <b><InlineMath math="a, b" /></b> は定数）</li>
                            <li><b>単調性</b>： <b><InlineMath math="X \le Y \text{ a.s.}" /></b> ならば <b><InlineMath math="E[X] \le E[Y]" /></b></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        確率変数 <b><InlineMath math="X" /></b> の分散 <b><InlineMath math="\mathrm{Var}(X)" /></b> の定義、および期待値を用いた計算用公式を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.3-1 および Proposition 3.3-1 より：
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><b>定義</b>： <b><InlineMath math="\mathrm{Var}(X) = E[(X - E[X])^2]" /></b></li>
                            <li><b>公式</b>： <b><InlineMath math="\mathrm{Var}(X) = E[X^2] - (E[X])^2" /></b></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        標準正規分布 <b><InlineMath math="X \sim \mathcal{N}(0, 1)" /></b> に対して、 <b><InlineMath math="E[X^2] = 1" /></b> となることを、部分積分を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 3.1-2 に従い計算する。
                        </p>
                        <BlockMath math="E[X^2] = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^\infty x^2 e^{-x^2/2} dx" />
                        <p>
                            ここで <b><InlineMath math="x^2 e^{-x^2/2} = (-x) \cdot (+ e^{-x^2/2})'" /></b> （実際には <b><InlineMath math="(e^{-x^2/2})' = -x e^{-x^2/2}" /></b> より <b><InlineMath math="x^2 e^{-x^2/2} = x \cdot (-e^{-x^2/2})'" /></b>） と考えて部分積分を行う。
                        </p>
                        <BlockMath math="\begin{aligned} E[X^2] &= \frac{1}{\sqrt{2\pi}} \left( [x(-e^{-x^2/2})]_{-\infty}^\infty + \int_{-\infty}^\infty e^{-x^2/2} dx \right) \\ &= \frac{1}{\sqrt{2\pi}} (0 + \sqrt{2\pi}) = 1 \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        ある非負の確率変数 <b><InlineMath math="X" /></b> の期待値が 10 であるとき、 <b><InlineMath math="X" /></b> が 50 以上になる確率は最大でいくらか。<b>マルコフの不等式</b>を用いて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.2-4 （マルコフの不等式） <b><InlineMath math="P(X \ge a) \le E[X]/a" /></b> を用いる。
                        </p>
                        <p>
                            <b><InlineMath math="E[X] = 10, a = 50" /></b> を代入すると：
                            <BlockMath math="P(X \ge 50) \le \frac{10}{50} = 0.2" />
                        </p>
                        <p>
                            答え： <b>0.2 (20%)</b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        期待値 100、分散 25 の分布に従うデータにおいて、 85 以上 115 以下の範囲にデータが含まれる確率は少なくともいくらか。<b>チェビシェフの不等式</b>を用いて見積もれ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.2-5 （チェビシェフの不等式） <b><InlineMath math="P(|X - E[X]| \ge a) \le \mathrm{Var}(X)/a^2" /></b> を用いる。
                        </p>
                        <p>
                            「85 以上 115 以下」の外側は <b><InlineMath math="|X - 100| > 15" /></b> である。
                            <b><InlineMath math="a = 15, \mathrm{Var}(X) = 25" /></b> を代入すると：
                            <BlockMath math="P(|X - 100| \ge 15) \le \frac{25}{15^2} = \frac{25}{225} = \frac{1}{9}" />
                        </p>
                        <p>
                            求める確率はその余事象であるから：
                            <BlockMath math="P(85 \le X \le 115) \ge 1 - \frac{1}{9} = \frac{8}{9}" />
                        </p>
                        <p>
                            答え： <b>8/9（約 88.9%）以上</b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        2 つの独立な確率変数 <b><InlineMath math="X, Y" /></b> に対して、 <b><InlineMath math="\mathrm{Var}(X) = 4" /></b>, <b><InlineMath math="\mathrm{Var}(Y) = 9" /></b> である。
                        このとき、 <b><InlineMath math="\mathrm{Var}(2X - 3Y)" /></b> の値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 3.3-1 の分散の性質を用いる。独立性より和の分散は個別の分散の和になる。
                        </p>
                        <BlockMath math="\begin{aligned} \mathrm{Var}(2X - 3Y) &= \mathrm{Var}(2X) + \mathrm{Var}(-3Y) \\ &= 2^2 \mathrm{Var}(X) + (-3)^2 \mathrm{Var}(Y) \\ &= 4 \times 4 + 9 \times 9 = 16 + 81 = 97 \end{aligned}" />
                        <p>
                            答え： <b>97</b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        2 乗可積分な確率変数に対して成り立つ<b>コーシー・シュワルツの不等式</b>（Theorem 3.3-1）の数式を記述し、その幾何学的な意味（ヒルベルト空間の言葉を用いたもの）を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            数式： <b><InlineMath math="E[|XY|] \le \sqrt{E[X^2]} \sqrt{E[Y^2]}" /></b>
                        </p>
                        <p>
                            幾何学的意味： §3.3 備考にあるように、 <b><InlineMath math="L^2" /></b> 空間に内積 <b><InlineMath math="\langle X, Y \rangle = E[XY]" /></b> を導入すると、この不等式は「2 つのベクトルの内積の絶対値は、それぞれのノルムの積以下である」というヒルベルト空間における標準的な性質を表している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        標本空間 <b><InlineMath math="\Omega = [0, 1]" /></b> 上のルベーグ測度を <b><InlineMath math="P" /></b> とし、確率変数列 <b><InlineMath math="X_n(\omega) = n \sin(\omega/n)" /></b> を考える。
                        極限 <b><InlineMath math="\lim_{n \to \infty} E[X_n]" /></b> を求めよ。また、期待値と極限の順序交換を正当化する根拠となる定理名を述べよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>各点収束</b>： <b><InlineMath math="\lim_{n \to \infty} n \sin(\omega/n) = \omega" /></b> である（<b><InlineMath math="\sin x \approx x" /></b> の極限より）。
                            </li>
                            <li>
                                <b>可積分な支配関数</b>： すべての <b><InlineMath math="x \ge 0" /></b> に対して <b><InlineMath math="|\sin x| \le x" /></b> であるから、 <b><InlineMath math="|X_n(\omega)| = n |\sin(\omega/n)| \le n (\omega/n) = \omega" /></b>。
                                <b><InlineMath math="Y(\omega) = \omega" /></b> は <b><InlineMath math="[0, 1]" /></b> 上で可積分（<b><InlineMath math="E[Y] = 1/2" /></b>）である。
                            </li>
                            <li>
                                <b>定理の適用</b>： Theorem 3.2-3 （<b>支配収束定理</b>）により、極限と期待値の順序交換が許される。
                                <BlockMath math="\lim_{n \to \infty} E[X_n] = E[\lim_{n \to \infty} X_n] = E[\omega] = \int_0^1 \omega \, d\omega = \frac{1}{2}" />
                            </li>
                        </ol>
                        <p>
                            答え： <b>1/2</b>、定理名：<b>支配収束定理</b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        平均発生回数 <b><InlineMath math="\lambda" /></b> のポアソン分布 <b><InlineMath math="Po(\lambda)" /></b> のモーメント母関数 <b><InlineMath math="M_X(t) = \exp(\lambda(e^t - 1))" /></b> を用いて、 2 次モーメント <b><InlineMath math="E[X^2]" /></b> および分散 <b><InlineMath math="\mathrm{Var}(X)" /></b> を導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.4-1 （MGF とモーメントの関係）より、 2 回微分を利用する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>1 回微分</b>： <b><InlineMath math="M_X'(t) = \lambda e^t \exp(\lambda(e^t - 1))" /></b>
                            </li>
                            <li>
                                <b>2 回微分</b>： 積の微分公式を用いて、
                                <BlockMath math="M_X''(t) = \lambda e^t \exp(\lambda(e^t - 1)) + (\lambda e^t)^2 \exp(\lambda(e^t - 1))" />
                            </li>
                            <li>
                                <b>2 次モーメント</b>： <b><InlineMath math="t=0" /></b> を代入して、
                                <BlockMath math="E[X^2] = M_X''(0) = \lambda \cdot 1 \cdot e^0 + \lambda^2 \cdot 1^2 \cdot e^0 = \lambda + \lambda^2" />
                            </li>
                            <li>
                                <b>分散</b>： 公式 <b><InlineMath math="\mathrm{Var}(X) = E[X^2] - (E[X])^2" /></b> および <b><InlineMath math="E[X] = \lambda" /></b> より、
                                <BlockMath math="\mathrm{Var}(X) = (\lambda + \lambda^2) - \lambda^2 = \lambda" />
                            </li>
                        </ol>
                        <p>
                            ポアソン分布では期待値と分散が一致するという重要な性質 (§3.3 参照) が確認できる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
