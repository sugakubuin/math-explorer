import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_7_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        2 つの事象 <b><InlineMath math="A, B" /></b> が<b>独立</b>であるための定義を、数式を用いて記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.1-1 より、積事象の確率がそれぞれの確率の積に等しいことである。
                        </p>
                        <BlockMath math="P(A \cap B) = P(A)P(B)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        確率変数列 <b><InlineMath math="X_1, \ldots, X_n" /></b> が独立であるための定義を、 <b><InlineMath math="\sigma" /></b>-加法族の言葉を用いて述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.2-1 より、各確率変数が生成する <b><InlineMath math="\sigma" /></b>-加法族 <b><InlineMath math="\sigma(X_i)" /></b> どうしが独立であること、すなわち任意の <b><InlineMath math="A_i \in \sigma(X_i)" /></b> に対して事象族 <b><InlineMath math="\{A_i\}" /></b> が相互独立であることである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        独立な確率変数 <b><InlineMath math="X, Y" /></b> に対して成り立つ共分散 <b><InlineMath math="\mathrm{Cov}(X, Y)" /></b> の性質を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 4.4-1 より、独立ならば <b><InlineMath math="X" /></b> と <b><InlineMath math="Y" /></b> は<b>無相関</b>であり、共分散は 0 となる。
                        </p>
                        <BlockMath math="\mathrm{Cov}(X, Y) = 0" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        事象 <b><InlineMath math="A, B" /></b> が独立であるとき、 <b><InlineMath math="A" /></b> と <b><InlineMath math="B^c" /></b> も独立であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 4.1-1 の証明に従い、積事象を分解する。
                        </p>
                        <BlockMath math="P(A \cap B^c) = P(A) - P(A \cap B)" />
                        <p>
                            仮定より <b><InlineMath math="P(A \cap B) = P(A)P(B)" /></b> なので：
                            <BlockMath math="\begin{aligned} P(A \cap B^c) &= P(A) - P(A)P(B) \\ &= P(A)(1 - P(B)) = P(A)P(B^c) \end{aligned}" />
                        </p>
                        <p>
                            積事象の確率が積に分解されたため、独立である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        連続型確率変数の独立性を判定するための<b>密度関数の分解条件</b>（Theorem 4.2-1）を記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            結合密度関数が周辺密度関数の積に分解されることである：
                        </p>
                        <BlockMath math="f_{X_1, \ldots, X_n}(x_1, \ldots, x_n) = f_{X_1}(x_1) f_{X_2}(x_2) \cdots f_{X_n}(x_n)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        独立な確率変数 <b><InlineMath math="X_1 \sim \mathcal{N}(10, 4)" /></b> と <b><InlineMath math="X_2 \sim \mathcal{N}(20, 9)" /></b> の和 <b><InlineMath math="Y = X_1 + X_2" /></b> が従う分布を選択肢から選べ。
                    </p>
                    <ul className="list-alpha list-inside space-y-1 mt-2">
                        <li><b>a</b>: <b><InlineMath math="\mathcal{N}(30, 13)" /></b></li>
                        <li><b>b</b>: <b><InlineMath math="\mathcal{N}(30, \sqrt{13})" /></b></li>
                        <li><b>c</b>: <b><InlineMath math="\mathcal{N}(30, 5)" /></b></li>
                        <li><b>d</b>: <b><InlineMath math="\mathcal{N}(30, 25)" /></b></li>
                    </ul>
                    <ExerciseSolution>
                        <p>
                            Example 4.3-1 （正規分布の畳み込み）より、独立な正規分布の和は正規分布に従い、平均と分散はそれぞれ足し合わされる。
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>平均： <b><InlineMath math="10 + 20 = 30" /></b></li>
                            <li>分散： <b><InlineMath math="4 + 9 = 13" /></b></li>
                        </ul>
                        <p>
                            したがって、答えは <b>a</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        独立な確率変数 <b><InlineMath math="X, Y" /></b> に対して、 <b><InlineMath math="E[X]=2, E[X^2]=5, E[Y]=3, E[Y^2]=10" /></b> である。
                        期待値の性質（Theorem 4.3-1）を用いて、 <b><InlineMath math="E[X^2 Y + XY^2]" /></b> の値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            期待値の線形性および独立積の期待値公式を用いる。 <b><InlineMath math="X, Y" /></b> が独立であれば、 <b><InlineMath math="X^2" /></b> と <b><InlineMath math="Y" /></b> 、および <b><InlineMath math="X" /></b> と <b><InlineMath math="Y^2" /></b> も独立である。
                        </p>
                        <BlockMath math="\begin{aligned} E[X^2 Y + XY^2] &= E[X^2 Y] + E[XY^2] \\ &= E[X^2]E[Y] + E[X]E[Y^2] \\ &= 5 \times 3 + 2 \times 10 = 15 + 20 = 35 \end{aligned}" />
                        <p>
                            答え： <b>35</b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        独立な一様分布に従う確率変数 <b><InlineMath math="X, Y \sim U(0, 1)" /></b> に対して、和 <b><InlineMath math="Z = X + Y" /></b> の密度関数 <b><InlineMath math="f_Z(z)" /></b> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.3-3 （畳み込み公式）を用いる。 <b><InlineMath math="f_X(x) = f_Y(x) = 1_{\{0 \le x \le 1\}}" /></b> である。
                        </p>
                        <BlockMath math="f_Z(z) = \int_{-\infty}^\infty f_X(z - y) f_Y(y) dy = \int_0^1 f_X(z - y) dy" />
                        <p>
                            被積分関数が 1 となる条件は <b><InlineMath math="0 \le z - y \le 1" /></b> 、すなわち <b><InlineMath math="z - 1 \le y \le z" /></b> である。 <b><InlineMath math="y \in [0, 1]" /></b> との共通部分により、 <b><InlineMath math="z" /></b> の範囲で場合分けを行う。
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li><b><InlineMath math="0 \le z \le 1" /></b> のとき： 積分範囲は <b><InlineMath math="[0, z]" /></b> となり、 <b><InlineMath math="f_Z(z) = z" /></b>。</li>
                            <li><b><InlineMath math="1 < z \le 2" /></b> のとき： 積分範囲は <b><InlineMath math="[z-1, 1]" /></b> となり、 <b><InlineMath math="f_Z(z) = 1 - (z-1) = 2 - z" /></b>。</li>
                        </ul>
                        <p>
                            以上より、 <b><InlineMath math="f_Z(z) = (1 - |z - 1|)_+" /></b> （三角形分布）が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        モーメント母関数 <b><InlineMath math="M(t)" /></b> を用いて、独立和の性質 <b><InlineMath math="M_{X+Y}(t) = M_X(t) M_Y(t)" /></b> を示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            MGF の定義と、独立積の期待値の公式（Theorem 4.3-1）を用いる。
                        </p>
                        <BlockMath math="\begin{aligned} M_{X+Y}(t) &= E[e^{t(X+Y)}] \\ &= E[e^{tX} \cdot e^{tY}] \end{aligned}" />
                        <p>
                            <b><InlineMath math="X, Y" /></b> が独立であれば、その関数 <b><InlineMath math="e^{tX}, e^{tY}" /></b> も独立であるから：
                            <BlockMath math="\begin{aligned} E[e^{tX} e^{tY}] &= E[e^{tX}] E[e^{tY}] \\ &= M_X(t) M_Y(t) \end{aligned}" />
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        <b><InlineMath math="X \sim \mathcal{N}(0, 1)" /></b> と、 <b><InlineMath math="X" /></b> と独立に <b><InlineMath math="P(S=1)=P(S=-1)=1/2" /></b> を満たす確率変数 <b><InlineMath math="S" /></b> を考える。
                        <b><InlineMath math="Y = SX" /></b> と定義するとき、 <b><InlineMath math="X" /></b> と <b><InlineMath math="Y" /></b> は無相関であるが独立ではないことを示せ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>無相関性</b>： <b><InlineMath math="E[X]=0" /></b> かつ <b><InlineMath math="E[Y] = E[S]E[X] = 0 \cdot 0 = 0" /></b> である。
                                共分散 <b><InlineMath math="E[XY] = E[SX^2] = E[S]E[X^2] = 0 \cdot 1 = 0" /></b> となるため、無相関である。
                            </li>
                            <li>
                                <b>非独立性</b>： <b><InlineMath math="|Y| = |SX| = |X|" /></b> が常に成り立つ。
                                よって <b><InlineMath math="P(|X| < 1, |Y| > 1) = 0" /></b> であるが、独立であれば <b><InlineMath math="P(|X| < 1)P(|Y| > 1) > 0" /></b> となるはずであり（<b><InlineMath math="Y" /></b> も標準正規分布に従うため）、矛盾する。
                            </li>
                        </ol>
                        <p>
                            相関係数が捉えられない非線形な従属性 (§4.4 参照) の重要な例である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
