import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_4_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        次の内包的記法で表された集合を、外延的記法（要素を列挙する形）で表せ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li><InlineMath math="A = \{ n \in \mathbb{N} \mid n \text{ は 12 の約数 } \}" /></li>
                        <li><InlineMath math="B = \{ x \in \mathbb{R} \mid x^2 - 5x + 6 = 0 \}" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>12 の正の約数を列挙して、<b><InlineMath math="A = \{1, 2, 3, 4, 6, 12\}" /></b>。</li>
                            <li>方程式 <InlineMath math="(x-2)(x-3) = 0" /> の解を求めて、<b><InlineMath math="B = \{2, 3\}" /></b>。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        <InlineMath math="A = \{1, 2\}" /> とするとき、次の集合を外延的記法で表せ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li><InlineMath math="A" /> のべき集合 <InlineMath math="\mathcal{P}(A)" /></li>
                        <li>直積集合 <InlineMath math="A \times A" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><InlineMath math="A" /> のすべての部分集合を列挙して、<b><InlineMath math="\mathcal{P}(A) = \{ \emptyset, \{1\}, \{2\}, \{1, 2\} \}" /></b>。</li>
                            <li><InlineMath math="A" /> の元のすべての順序対を列挙して、<b><InlineMath math="A \times A = \{ (1, 1), (1, 2), (2, 1), (2, 2) \}" /></b>。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        集合 <InlineMath math="A, B, C" /> が次のように与えられているとき、指定された集合を求めよ。<br />
                        <InlineMath math="A = \{1, 2, 3, 4\}, \ B = \{3, 4, 5, 6\}, \ C = \{2, 4, 6, 8\}" />
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li><InlineMath math="(A \cap B) \cup C" /></li>
                        <li><InlineMath math="A \setminus (B \cup C)" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <InlineMath math="A \cap B = \{3, 4\}" /> であるから、<br />
                                <b><InlineMath math="(A \cap B) \cup C = \{3, 4\} \cup \{2, 4, 6, 8\} = \{2, 3, 4, 6, 8\}" /></b>。
                            </li>
                            <li>
                                <InlineMath math="B \cup C = \{2, 3, 4, 5, 6, 8\}" /> であるから、<br />
                                <b><InlineMath math="A \setminus (B \cup C) = \{1, 2, 3, 4\} \setminus \{2, 3, 4, 5, 6, 8\} = \{1\}" /></b>。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        集合の包含関係について、以下の命題が真か偽か答えよ。偽の場合は反例を挙げよ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li><InlineMath math="A \subset B" /> かつ <InlineMath math="B \subset C" /> ならば <InlineMath math="A \subset C" /> である。</li>
                        <li><InlineMath math="A \cup B = A \cup C" /> ならば <InlineMath math="B = C" /> である。</li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <b>真</b>。定義より、任意の <InlineMath math="x \in A" /> について <InlineMath math="x \in B" /> であり、さらに <InlineMath math="x \in C" /> となるため、<InlineMath math="A \subset C" /> が成り立つ。
                            </li>
                            <li>
                                <b>偽</b>。反例として、<InlineMath math="A = \{1, 2\}, B = \{1\}, C = \{2\}" /> とすると、<InlineMath math="A \cup B = \{1, 2\}, A \cup C = \{1, 2\}" /> となり等しいが、<InlineMath math="B \neq C" /> である。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        全体集合を <InlineMath math="U = \{ n \in \mathbb{N} \mid n \leq 10 \}" /> とし、その部分集合を <InlineMath math="A = \{2, 4, 6, 8, 10\}, \ B = \{3, 6, 9\}" /> とする。<br />
                        ド・モルガンの法則 <InlineMath math="(A \cup B)^c = A^c \cap B^c" /> が成り立つことを、各辺の集合を具体的に求めて確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、各集合の補集合と和集合を求める：
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><InlineMath math="A \cup B = \{2, 3, 4, 6, 8, 9, 10\}" /></li>
                            <li><InlineMath math="A^c = \{1, 3, 5, 7, 9\}" /></li>
                            <li><InlineMath math="B^c = \{1, 2, 4, 5, 7, 8, 10\}" /></li>
                        </ul>
                        <p className="mt-4">
                            各辺を計算すると：
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>左辺：<InlineMath math="(A \cup B)^c = \{1, 5, 7\}" /></li>
                            <li>右辺：<InlineMath math="A^c \cap B^c = \{1, 5, 7\}" /></li>
                        </ul>
                        <p className="mt-4">
                            両者は一致するため、ド・モルガンの法則が成り立つことが確認できた。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        空集合 <InlineMath math="\emptyset" /> と、ある空ではない集合 <InlineMath math="A" /> について、次の問いに答えよ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li>直積集合 <InlineMath math="A \times \emptyset" /> はどのような集合か。</li>
                        <li>空集合のべき集合 <InlineMath math="\mathcal{P}(\emptyset)" /> を求めよ。</li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <b>空集合 <InlineMath math="\emptyset" /></b>。直積の定義は <InlineMath math="\{ (a, b) \mid a \in A, b \in \emptyset \}" /> であるが、<InlineMath math="\emptyset" /> には元が存在しないため、順序対を構成することができない。
                            </li>
                            <li>
                                <b><InlineMath math="\{ \emptyset \}" /></b>。空集合の唯一の部分集合は空集合自身である。よってそれを元に持つ集合となる。（空集合ではないことに注意）
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        自然数の集合族 <InlineMath math="A_n = \{ x \in \mathbb{N} \mid x \geq n \} \ (n \in \mathbb{N})" /> について、次の集合を求めよ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li><InlineMath math="\bigcup_{n=1}^{10} A_n" /></li>
                        <li><InlineMath math="\bigcap_{n=1}^{\infty} A_n" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <InlineMath math="A_1 \supset A_2 \supset \dots \supset A_{10}" /> であるから、和集合は最も大きい <b><InlineMath math="A_1 = \mathbb{N}" /></b> である。
                            </li>
                            <li>
                                任意の自然数 <InlineMath math="k" /> に対して、それより大きい <InlineMath math="n = k+1" /> を選べば <InlineMath math="k \notin A_n" /> となる。よって、すべての <InlineMath math="n" /> に共通して属する自然数は存在しない。したがって <b><InlineMath math="\emptyset" /></b> である。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        任意の集合 <InlineMath math="A, B, C" /> について、次の分配法則が成り立つことを証明せよ。
                        <BlockMath math="A \cup (B \cap C) = (A \cup B) \cap (A \cup C)" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.1-2 に従い、両方向の包含関係を示す。
                        </p>
                        <p className="mt-4">
                            <b>(i) <InlineMath math="A \cup (B \cap C) \subset (A \cup B) \cap (A \cup C)" /> の証明：</b><br />
                            <InlineMath math="x \in A \cup (B \cap C)" /> とすると、<InlineMath math="x \in A" /> または <InlineMath math="x \in B \cap C" /> である。
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><InlineMath math="x \in A" /> のとき、<InlineMath math="x \in A \cup B" /> かつ <InlineMath math="x \in A \cup C" /> であるから、<InlineMath math="x \in (A \cup B) \cap (A \cup C)" />。</li>
                            <li><InlineMath math="x \in B \cap C" /> のとき、<InlineMath math="x \in B" /> かつ <InlineMath math="x \in C" /> である。よって <InlineMath math="x \in A \cup B" /> かつ <InlineMath math="x \in A \cup C" /> となり、<InlineMath math="x \in (A \cup B) \cap (A \cup C)" />。</li>
                        </ul>
                        <p className="mt-4">
                            <b>(ii) <InlineMath math="(A \cup B) \cap (A \cup C) \subset A \cup (B \cap C)" /> の証明：</b><br />
                            <InlineMath math="x \in (A \cup B) \cap (A \cup C)" /> とすると、<InlineMath math="x \in A \cup B" /> かつ <InlineMath math="x \in A \cup C" /> である。
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><InlineMath math="x \in A" /> ならば、直ちに <InlineMath math="x \in A \cup (B \cap C)" /> である。</li>
                            <li><InlineMath math="x \notin A" /> と仮定すると、<InlineMath math="x \in A \cup B \implies x \in B" /> であり、同様に <InlineMath math="x \in A \cup C \implies x \in C" /> である。よって <InlineMath math="x \in B \cap C" /> となり、<InlineMath math="x \in A \cup (B \cap C)" /> が成り立つ。</li>
                        </ul>
                        <p className="mt-4">
                            以上より、両方向の包含関係が示されたため、等号が成立する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        <b>ラッセルのパラドックス</b>に関連して、次の問いに答えよ。<br />
                        集合 <InlineMath math="R" /> を <InlineMath math="R = \{ x \mid x \notin x \}" /> と定義したとき、<InlineMath math="R \in R" /> および <InlineMath math="R \notin R" /> のいずれの仮定も矛盾を導くことを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.4-1 の証明に基づき説明する：
                        </p>
                        <ol className="list-decimal list-inside space-y-4 mt-2">
                            <li>
                                <b><InlineMath math="R \in R" /> と仮定した場合</b>：<br />
                                <InlineMath math="R" /> は自身の定義を満たす元であるはずだが、定義によれば「自分自身を元として含まない（<InlineMath math="x \notin x" />）」必要がある。これは矛盾である。
                            </li>
                            <li>
                                <b><InlineMath math="R \notin R" /> と仮定した場合</b>：<br />
                                <InlineMath math="R" /> は「自分自身を元として含まない」という性質を満たしている。集合 <InlineMath math="R" /> はまさにその性質を満たすものすべての集まりであるから、定義より <InlineMath math="R" /> は <InlineMath math="R" /> の元でなければならない（<InlineMath math="R \in R" />）。これは矛盾である。
                            </li>
                        </ol>
                        <p className="mt-4">
                            どちらのケースも矛盾するため、「いかなる条件からも自由に集合を作れる」という素朴な前提が誤りであることが示される。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        公理的集合論における<b>分出公理（Axiom Schema of Separation）</b>の役割について簡潔に述べよ。特に、どのようにしてラッセルのパラドックスを回避しているかに触れよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            分出公理は、任意の条件 <InlineMath math="P(x)" /> から新しい集合を無制限に作るのではなく、<b>「既知の集合 <InlineMath math="A" /> の中から条件を満たす元のみを取り出して部分集合を構成する」</b>ことを定める公理である（<InlineMath math="\{ x \in A \mid P(x) \}" />）。
                        </p>
                        <p className="mt-4">
                            この公理の下では、ラッセルの集合 <InlineMath math="R_A = \{ x \in A \mid x \notin x \}" /> を考えても、
                        </p>
                        <BlockMath math="R_A \in R_A \iff (R_A \in A \text{ かつ } R_A \notin R_A)" />
                        <p>
                            という形になる。ここから導かれるのは「<InlineMath math="R_A \notin A" />」という結論のみであり、自己矛盾は生じない。つまり、「すべての集合を含むような全的な集合（宇宙）」が存在しないことを保証することで、パラドックスの発生を防いでいる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
