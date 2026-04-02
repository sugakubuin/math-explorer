import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_7_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        離散型確率変数の組 <b><InlineMath math="(X, Y)" /></b> の結合確率分布が次の表で与えられているとする。
                        値 <b><InlineMath math="E[X \mid Y = 1]" /></b> を求めよ。
                    </p>
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700 my-4 text-center">
                        <thead>
                            <tr>
                                <th><InlineMath math="X \setminus Y" /></th>
                                <th>0</th>
                                <th>1</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                            <tr>
                                <td><b>0</b></td>
                                <td>0.2</td>
                                <td>0.3</td>
                            </tr>
                            <tr>
                                <td><b>1</b></td>
                                <td>0.1</td>
                                <td>0.4</td>
                            </tr>
                        </tbody>
                    </table>
                    <ExerciseSolution>
                        <p>
                            Definition 5.1-1 を用いる。まず周辺確率 <b><InlineMath math="P(Y = 1)" /></b> を求める：
                            <BlockMath math="\begin{aligned} P(Y = 1) &= P(X = 0, Y = 1) + P(X = 1, Y = 1) \\ &= 0.3 + 0.4 = 0.7 \end{aligned}" />
                        </p>
                        <p>
                            条件付き期待値の定義より：
                            <BlockMath math="\begin{aligned} E[X \mid Y = 1] &= \sum_x x \frac{P(X = x, Y = 1)}{P(Y = 1)} \\ &= 0 \cdot \frac{0.3}{0.7} + 1 \cdot \frac{0.4}{0.7} = \frac{4}{7} \end{aligned}" />
                        </p>
                        <p>
                            答え： <b>4/7</b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        測度論的な条件付き期待値の定義（Definition 5.2-1）において、 <b><InlineMath math="Z = E[X \mid \mathcal{G}]" /></b> が満たすべき 2 つの条件を簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-1">
                            <li><b>可測性</b>： <b><InlineMath math="Z" /></b> は <b><InlineMath math="\mathcal{G}" /></b>-可測である。</li>
                            <li><b>積分の一致</b>： 任意の <b><InlineMath math="G \in \mathcal{G}" /></b> に対して、 <b><InlineMath math="\int_G Z dP = \int_G X dP" /></b> が成り立つ。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        条件付き期待値の性質（Theorem 5.3-1）のうち、 <b>「タワー性」</b> と <b>「取り出し性」</b> の公式をそれぞれ記述せよ（ただし <b><InlineMath math="\mathcal{H} \subset \mathcal{G}" /></b> とし、必要な可測性は仮定する）。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li><b>タワー性</b>： <b><InlineMath math="E[E[X \mid \mathcal{G}] \mid \mathcal{H}] = E[X \mid \mathcal{H}]" /></b> a.s.</li>
                            <li><b>取り出し性</b>： <b><InlineMath math="Z" /></b> が <b><InlineMath math="\mathcal{G}" /></b>-可測ならば、 <b><InlineMath math="E[ZX \mid \mathcal{G}] = Z E[X \mid \mathcal{G}]" /></b> a.s.</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        全期待値の法則（Theorem 5.1-1）の応用として、 <b>「ランダムな個数の和の期待値」</b> を考える。
                        互いに独立に平均 <b><InlineMath math="\mu" /></b> の分布に従う確率変数列 <b><InlineMath math="X_1, X_2, \ldots" /></b> と、それらと独立に平均 <b><InlineMath math="\lambda" /></b> のポアソン分布に従う確率変数 <b><InlineMath math="N" /></b> に対し、
                        和 <b><InlineMath math="S = \sum_{i=1}^N X_i" /></b> （ <b><InlineMath math="N=0" /></b> のとき <b><InlineMath math="S=0" /></b> ）の期待値 <b><InlineMath math="E[S]" /></b> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            全期待値の法則 <b><InlineMath math="E[S] = E[E[S \mid N]]" /></b> を用いる。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b><InlineMath math="N=n" /></b> （固定）のとき、 <b><InlineMath math="S = \sum_{i=1}^n X_i" /></b> である。
                                各 <b><InlineMath math="X_i" /></b> の平均は <b><InlineMath math="\mu" /></b> なので、 <b><InlineMath math="E[S \mid N=n] = n\mu" /></b>。
                                したがって、 <b><InlineMath math="E[S \mid N] = N\mu" /></b> となる。
                            </li>
                            <li>
                                全体の期待値を計算する：
                                <BlockMath math="E[S] = E[E[S \mid N]] = E[N\mu] = \mu E[N]" />
                            </li>
                            <li>
                                <b><InlineMath math="E[N] = \lambda" /></b> なので、 <b><InlineMath math="E[S] = \mu\lambda" /></b> となる。
                            </li>
                        </ol>
                        <p>
                            答え： <b><InlineMath math="\mu\lambda" /></b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        結合密度関数が <b><InlineMath math="f(x, y) = x + y \quad (0 \le x, y \le 1)" /></b> で与えられる連続型確率変数のペア <b><InlineMath math="(X, Y)" /></b> を考える。
                        条件付き期待値 <b><InlineMath math="E[X \mid Y = y]" /></b> を <b><InlineMath math="y" /></b> の関数として求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            周辺密度関数 <b><InlineMath math="f_Y(y)" /></b> と条件付き密度関数 <b><InlineMath math="f_{X \mid Y}(x \mid y)" /></b> を順に求める。
                        </p>
                        <BlockMath math="f_Y(y) = \int_0^1 (x + y) dx = \left[ \frac{1}{2}x^2 + xy \right]_0^1 = \frac{1}{2} + y" />
                        <BlockMath math="f_{X \mid Y}(x \mid y) = \frac{x + y}{1/2 + y}" />
                        <p>
                            これを用いて条件付き期待値を計算する：
                        </p>
                        <BlockMath math="\begin{aligned} E[X \mid Y = y] &= \int_0^1 x \frac{x + y}{1/2 + y} dx \\ &= \frac{1}{1/2 + y} \int_0^1 (x^2 + xy) dx \\ &= \frac{1}{1/2 + y} \left( \frac{1}{3} + \frac{1}{2}y \right) = \frac{2 + 3y}{3 + 6y} \end{aligned}" />
                        <p>
                            答え： <b><InlineMath math="\frac{2 + 3y}{3 + 6y}" /></b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        確率変数 <b><InlineMath math="X" /></b> が部分 <b><InlineMath math="\sigma" /></b>-加法族 <b><InlineMath math="\mathcal{G}" /></b> に対して可測であるとき、 <b><InlineMath math="E[X \mid \mathcal{G}] = X" /></b> a.s. であることを、定義（Definition 5.2-1）に基づいて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義にある 2 条件を満たすことを確認する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>可測性</b>： <b><InlineMath math="Z = X" /></b> とおくと、仮定より <b><InlineMath math="X" /></b> は <b><InlineMath math="\mathcal{G}" /></b>-可測であるから、第 1 条件を満たす。
                            </li>
                            <li>
                                <b>積分の一致</b>： 任意の <b><InlineMath math="G \in \mathcal{G}" /></b> に対して、 <b><InlineMath math="\int_G Z dP = \int_G X dP" /></b> は <b><InlineMath math="Z=X" /></b> であれば恒等的に成り立つため、第 2 条件を満たす。
                            </li>
                        </ol>
                        <p>
                            以上より、 <b><InlineMath math="X" /></b> は <b><InlineMath math="X" /></b> 自身の条件付き期待値の定義を満たし、 a.s. 一意性から結論が得られる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        条件付き期待値の <b>「単調性」</b> （Theorem 5.3-1）の証明において、 <b><InlineMath math="X \le Y" /></b> ならば <b><InlineMath math="E[X \mid \mathcal{G}] \le E[Y \mid \mathcal{G}]" /></b> a.s. であることを、積分の一致条件を用いて示せ。（ヒント： <b><InlineMath math="A = \{E[X|\mathcal{G}] > E[Y|\mathcal{G}]\} \in \mathcal{G}" /></b> を考える）
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b><InlineMath math="A = \{E[X|\mathcal{G}] > E[Y|\mathcal{G}]\} \in \mathcal{G}" /></b> とし、 <b><InlineMath math="P(A) = 0" /></b> であることを示す。
                            定義の積分一致条件より、
                        </p>
                        <BlockMath math="\int_A E[X|\mathcal{G}] dP = \int_A X dP, \quad \int_A E[Y|\mathcal{G}] dP = \int_A Y dP" />
                        <p>
                            これより、
                        </p>
                        <BlockMath math="\int_A (E[X|\mathcal{G}] - E[Y|\mathcal{G}]) dP = \int_A (X - Y) dP" />
                        <p>
                            仮定 <b><InlineMath math="X \le Y" /></b> より右辺は <b><InlineMath math="\le 0" /></b> である。
                            一方、 <b><InlineMath math="A" /></b> 上で <b><InlineMath math="E[X|\mathcal{G}] - E[Y|\mathcal{G}] > 0" /></b> であるから、もし <b><InlineMath math="P(A) > 0" /></b> ならば左辺は厳密に <b><InlineMath math="> 0" /></b> となり矛盾する。
                            したがって <b><InlineMath math="P(A) = 0" /></b> であり、 <b><InlineMath math="E[X \mid \mathcal{G}] \le E[Y \mid \mathcal{G}]" /></b> a.s. が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        独立に標準正規分布 <b><InlineMath math="\mathcal{N}(0, 1)" /></b> に従う確率変数 <b><InlineMath math="X, Y" /></b> に対し、条件付き期待値 <b><InlineMath math="E[X \mid X+Y]" /></b> を求めよ。
                        （ヒント： <b><InlineMath math="E[X \mid X+Y] + E[Y \mid X+Y]" /></b> と対称性を利用せよ）
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>和の性質</b>： 条件付き期待値の線形性より、
                                <BlockMath math="E[X \mid X+Y] + E[Y \mid X+Y] = E[X+Y \mid X+Y]" />
                                <b><InlineMath math="X+Y" /></b> は <b><InlineMath math="\sigma(X+Y)" /></b>-可測であるから、 §5.3 の性質より <b><InlineMath math="E[X+Y \mid X+Y] = X+Y" /></b>。
                            </li>
                            <li>
                                <b>対称性</b>： <b><InlineMath math="X, Y" /></b> は i.i.d. であるため、 <b><InlineMath math="(X, X+Y)" /></b> と <b><InlineMath math="(Y, X+Y)" /></b> は同一の結合分布を持つ。
                                したがって、 <b><InlineMath math="E[X \mid X+Y] = E[Y \mid X+Y]" /></b> a.s. である。
                            </li>
                            <li>
                                <b>結論</b>：
                                <BlockMath math="2 E[X \mid X+Y] = X + Y \implies E[X \mid X+Y] = \frac{X+Y}{2}" />
                            </li>
                        </ol>
                        <p>
                            答え： <b><InlineMath math="(X+Y)/2" /></b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        <b><InlineMath math="\mathcal{H} \subset \mathcal{G}" /></b> のとき、タワー性 <b><InlineMath math="E[E[X \mid \mathcal{G}] \mid \mathcal{H}] = E[X \mid \mathcal{H}]" /></b> a.s. が成り立つことを、定義の 2 条件を精査することで詳細に証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b><InlineMath math="Z = E[E[X | \mathcal{G}] | \mathcal{H}]" /></b> とおき、これが <b><InlineMath math="E[X | \mathcal{H}]" /></b> の定義を満たすことを示す。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>可測性</b>： <b><InlineMath math="Z" /></b> は外側の条件付き期待値の定義により <b><InlineMath math="\mathcal{H}" /></b>-可測である。
                            </li>
                            <li>
                                <b>積分の一致</b>： 任意の <b><InlineMath math="H \in \mathcal{H}" /></b> をとる。 <b><InlineMath math="Z" /></b> の <b><InlineMath math="\mathcal{H}" /></b> に関する定義より、
                                <BlockMath math="\int_H Z dP = \int_H E[X \mid \mathcal{G}] dP" />
                                ここで <b><InlineMath math="\mathcal{H} \subset \mathcal{G}" /></b> であるから <b><InlineMath math="H \in \mathcal{G}" /></b> でもある。
                                すると <b><InlineMath math="E[X \mid \mathcal{G}]" /></b> の <b><InlineMath math="\mathcal{G}" /></b> に関する定義より、
                                <BlockMath math="\int_H E[X \mid \mathcal{G}] dP = \int_H X dP" />
                                以上を合わせると、 <b><InlineMath math="\int_H Z dP = \int_H X dP" /></b> となり、積分一致条件を満たす。
                            </li>
                        </ol>
                        <p>
                            <b><InlineMath math="Z" /></b> は <b><InlineMath math="E[X \mid \mathcal{H}]" /></b> の定義をすべて満たし、 a.s. 一意性から両者は一致する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        <b><InlineMath math="X \in L^2" /></b> のとき、任意の <b><InlineMath math="\mathcal{G}" /></b>-可測な <b><InlineMath math="Z \in L^2" /></b> に対して次が成り立つことを示せ（ <b><InlineMath math="L^2" /></b> 射影の性質、 §5.2 備考参照）。
                        <BlockMath math="E[(X - Z)^2] \ge E[(X - E[X \mid \mathcal{G}])^2]" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b><InlineMath math="\hat{X} = E[X \mid \mathcal{G}]" /></b> とおく。
                            <BlockMath math="\begin{aligned} (X - Z)^2 &= (X - \hat{X} + \hat{X} - Z)^2 \\ &= (X - \hat{X})^2 + 2(X - \hat{X})(\hat{X} - Z) + (\hat{X} - Z)^2 \end{aligned}" />
                            両辺の期待値をとる。第 2 項の期待値について、全期待値の法則と取り出し性を用いる。 <b><InlineMath math="\hat{X} - Z" /></b> は <b><InlineMath math="\mathcal{G}" /></b>-可測であるから、
                            <BlockMath math="\begin{aligned} E[(X - \hat{X})(\hat{X} - Z)] &= E[E[(X - \hat{X})(\hat{X} - Z) \mid \mathcal{G}]] \\ &= E[(\hat{X} - Z) E[X - \hat{X} \mid \mathcal{G}]] \end{aligned}" />
                            線形性により <b><InlineMath math="E[X - \hat{X} \mid \mathcal{G}] = E[X \mid \mathcal{G}] - \hat{X} = 0" /></b> であるから、この項は 0 となり消去される。
                            したがって、
                            <BlockMath math="E[(X - Z)^2] = E[(X - \hat{X})^2] + E[(\hat{X} - Z)^2]" />
                            <b><InlineMath math="E[(\hat{X} - Z)^2] \ge 0" /></b> であるから、 <b><InlineMath math="E[(X - Z)^2] \ge E[(X - \hat{X})^2]" /></b> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
