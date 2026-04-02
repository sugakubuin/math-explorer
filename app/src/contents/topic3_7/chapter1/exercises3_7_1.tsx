import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_7_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        1 個のサイコロを投げる試行において、標本空間を <b><InlineMath math="\Omega = \{1, 2, 3, 4, 5, 6\}" /></b> とする。
                        事象 <b><InlineMath math="A = \{2, 4, 6\}" /></b> （偶数の目が出る）と事象 <b><InlineMath math="B = \{1, 2, 3\}" /></b> （3 以下の目が出る）に対して、
                        以下の事象を要素の書き並べ（外延的な表記）で示せ。
                    </p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>積事象 <b><InlineMath math="A \cap B" /></b></li>
                        <li>和事象 <b><InlineMath math="A \cup B" /></b></li>
                        <li>余事象 <b><InlineMath math="A^c" /></b></li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-2 より、集合の演算を適用する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li><b><InlineMath math="A \cap B = \{2, 4, 6\} \cap \{1, 2, 3\} = \{2\}" /></b></li>
                            <li><b><InlineMath math="A \cup B = \{2, 4, 6\} \cup \{1, 2, 3\} = \{1, 2, 3, 4, 6\}" /></b></li>
                            <li><b><InlineMath math="A^c = \Omega \setminus \{2, 4, 6\} = \{1, 3, 5\}" /></b></li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        標本空間 <b><InlineMath math="\Omega" /></b> 上の <b><InlineMath math="\sigma" /></b>-加法族 <b><InlineMath math="\mathcal{F}" /></b> が満たすべき 3 つの条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-1 より、以下の条件を満たす集合族を <b><InlineMath math="\sigma" /></b>-加法族と呼ぶ。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li><b><InlineMath math="\Omega \in \mathcal{F}" /></b> であること。</li>
                            <li><b><InlineMath math="A \in \mathcal{F} \implies A^c \in \mathcal{F}" /></b> であること（補集合について閉じている）。</li>
                            <li><b><InlineMath math="A_n \in \mathcal{F} \, (n=1, 2, \ldots) \implies \bigcup_{n=1}^\infty A_n \in \mathcal{F}" /></b> であること（可算無限和について閉じている）。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        確率測度 <b><InlineMath math="P" /></b> の定義に含まれる <b><InlineMath math="\sigma" /></b>-加法性の公理を、数式を用いて記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-1 より、互いに素な事象列 <b><InlineMath math="A_n \in \mathcal{F} \, (n=1, 2, \ldots)" /></b> （すなわち <b><InlineMath math="i \neq j \implies A_i \cap A_j = \emptyset" /></b>）に対して、次が成り立つことである。
                        </p>
                        <BlockMath math="P\left( \bigcup_{n=1}^\infty A_n \right) = \sum_{n=1}^\infty P(A_n)" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        事象 <b><InlineMath math="A, B" /></b> に対して、<b><InlineMath math="P(A) = 0.6" /></b>, <b><InlineMath math="P(B) = 0.5" /></b>, <b><InlineMath math="P(A \cap B) = 0.3" /></b> であるとき、
                        和事象の確率 <b><InlineMath math="P(A \cup B)" /></b> と、補事象の積 <b><InlineMath math="P(A^c \cap B^c)" /></b> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.3-1 の諸性質を用いる。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>包除原理</b>より：
                                <BlockMath math="\begin{aligned} P(A \cup B) &= P(A) + P(B) - P(A \cap B) \\ &= 0.6 + 0.5 - 0.3 = 0.8 \end{aligned}" />
                            </li>
                            <li>
                                <b>ド・モルガンの法則</b>および余事象の確率より：
                                <BlockMath math="\begin{aligned} P(A^c \cap B^c) &= P((A \cup B)^c) \\ &= 1 - P(A \cup B) = 1 - 0.8 = 0.2 \end{aligned}" />
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        事象の単調減少列 <b><InlineMath math="B_1 \supset B_2 \supset \cdots" /></b> に対して、
                        その極限 <b><InlineMath math="\bigcap_{n=1}^\infty B_n" /></b> が空集合 <b><InlineMath math="\emptyset" /></b> であるとき、
                        確率の極限 <b><InlineMath math="\lim_{n \to \infty} P(B_n)" /></b> はいくらになるか。根拠となる定理名とともに答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.3-1（<b>確率測度の連続性</b>）より、単調減少列の極限確率は、共通部分の確率に一致する。
                        </p>
                        <BlockMath math="\lim_{n \to \infty} P(B_n) = P\left( \bigcap_{n=1}^\infty B_n \right) = P(\emptyset) = 0" />
                        <p>
                            よって、答えは <b>0</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        ある工場で製造される製品が「不良品である」事象を <b><InlineMath math="A" /></b>、
                        「検査で陽性と判定される」事象を <b><InlineMath math="B" /></b> とする。
                        不良品の割合が 5% であり、不良品が正しく陽性と判定される確率が 90%、
                        良品が誤って陽性と判定される確率が 10% であるとき、
                        製品を 1 つ取り出したとき、それが「検査で陽性と判定される」確率 <b><InlineMath math="P(B)" /></b> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.4-1（<b>全確率の公式</b>）を用いる。
                            与えられた条件は以下の通り：
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>有病率（不良率）：<b><InlineMath math="P(A) = 0.05" /></b>（よって <b><InlineMath math="P(A^c) = 0.95" /></b>）</li>
                            <li>感度：<b><InlineMath math="P(B \mid A) = 0.9" /></b></li>
                            <li>偽陽性率：<b><InlineMath math="P(B \mid A^c) = 0.1" /></b></li>
                        </ul>
                        <p>
                            全確率の公式より：
                            <BlockMath math="\begin{aligned} P(B) &= P(B \mid A)P(A) + P(B \mid A^c)P(A^c) \\ &= 0.9 \times 0.05 + 0.1 \times 0.95 \\ &= 0.045 + 0.095 = 0.14 \end{aligned}" />
                        </p>
                        <p>
                            答え： <b>0.14</b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        事象 <b><InlineMath math="A, B" /></b> に対して <b><InlineMath math="P(B) > 0" /></b> とする。
                        条件付き確率の定義 <b><InlineMath math="P(A \mid B) = P(A \cap B) / P(B)" /></b> から出発して、
                        積事象の確率に関する<b>乗法定理</b>（Proposition 1.4-1）の 2 事象版を導け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            条件付き確率の定義式の両辺に <b><InlineMath math="P(B)" /></b> をかけることで直ちに得られる。
                        </p>
                        <BlockMath math="P(A \mid B) \cdot P(B) = \frac{P(A \cap B)}{P(B)} \cdot P(B) = P(A \cap B)" />
                        <p>
                            したがって、<b><InlineMath math="P(A \cap B) = P(A \mid B) P(B)" /></b> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        問題 6 （工場の検査）において、ある製品が「陽性と判定された」とき、
                        その製品が「実際に不良品である」条件付き確率 <b><InlineMath math="P(A \mid B)" /></b> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.4-2（<b>ベイズの定理</b>）を用いる。
                        </p>
                        <p>
                            <BlockMath math="P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}" />
                        </p>
                        <p>
                            問題 6 の結果、<b><InlineMath math="P(B) = 0.14" /></b> および分子 <b><InlineMath math="P(B \mid A)P(A) = 0.045" /></b> を代入すると：
                            <BlockMath math="P(A \mid B) = \frac{0.045}{0.14} = \frac{45}{140} = \frac{9}{28} \approx 0.321" />
                        </p>
                        <p>
                            答え： <b>約 32.1%</b>
                        </p>
                        <p>
                            §1.4 備考などで触れられているように、検査の感度が 90% と高くても、母集団における不良率が低い場合、陽性判定が出ても実際に不良品である確率はそれほど高くない（この場合は約 1/3）ことがわかる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        事象列 <b><InlineMath math="\{A_n\}" /></b> に対して、上極限事象 <b><InlineMath math="\limsup_{n \to \infty} A_n" /></b> が
                        「 <b><InlineMath math="A_n" /></b> が無限回起こる」という意味を持つことを、集合演算の定義（Definition 1.1-3）から考察せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            上極限事象の定義は <b><InlineMath math="\bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k" /></b> である。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                各 <b><InlineMath math="n" /></b> について <b><InlineMath math="B_n = \bigcup_{k=n}^\infty A_k" /></b> は、
                                「第 <b><InlineMath math="n" /></b> 回目以降のどこかで、少なくとも一度は <b><InlineMath math="A_k" /></b> が起こる」ことを意味する。
                            </li>
                            <li>
                                これら全ての <b><InlineMath math="n" /></b> について共有点を持つ（積集合をとる）ことは、
                                「どれほど大きな <b><InlineMath math="n" /></b> を選んでも、それ以降に必ず <b><InlineMath math="A_k" /></b> が起こる」ことを要請している。
                            </li>
                            <li>
                                これは、<b><InlineMath math="A_n" /></b> が有限回しか起こらない（＝ある番号以降は二度と起こらない）状況を否定しており、
                                結局「<b><InlineMath math="A_n" /></b> が無限回起こる」ことと等価になる。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        確率測度の公理（Definition 1.3-1）のみを用いて、
                        有限個の事象 <b><InlineMath math="A, B" /></b> に対する劣加法性 <b><InlineMath math="P(A \cup B) \leq P(A) + P(B)" /></b> を証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.3-1 の証明方針に従い、和集合を互いに素な集合に分解する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b><InlineMath math="A \cup B = A \cup (B \setminus (A \cap B))" /></b> と分解すると、右辺の 2 つの集合は互いに素である。
                            </li>
                            <li>
                                確率の加法性公理より、<b><InlineMath math="P(A \cup B) = P(A) + P(B \setminus (A \cap B))" /></b> となる。
                            </li>
                            <li>
                                また、<b><InlineMath math="B = (A \cap B) \cup (B \setminus (A \cap B))" /></b> であり、これも互いに素な分解であるから、
                                <b><InlineMath math="P(B) = P(A \cap B) + P(B \setminus (A \cap B))" /></b> であり、
                                よって <b><InlineMath math="P(B \setminus (A \cap B)) = P(B) - P(A \cap B)" /></b> である。
                            </li>
                            <li>
                                2 と 3 を合わせると、<b>包除原理</b> <b><InlineMath math="P(A \cup B) = P(A) + P(B) - P(A \cap B)" /></b> が得られる。
                            </li>
                            <li>
                                確率の定義より <b><InlineMath math="P(A \cap B) \geq 0" /></b> であるため、
                                <b><InlineMath math="P(A \cup B) \leq P(A) + P(B)" /></b> が成り立つ。
                            </li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
