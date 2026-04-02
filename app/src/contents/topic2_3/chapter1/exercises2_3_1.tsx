import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        有理数体 <InlineMath math="\mathbb{Q}" /> のデデキント切断 <InlineMath math="(A, B)" /> が満たすべき3つの条件を挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-1 より、以下の3条件である：
                        </p>
                        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
                            <li><strong>分割性：</strong> <InlineMath math="\mathbb{Q} = A \cup B, A \cap B = \emptyset, A \neq \emptyset, B \neq \emptyset" /> である。</li>
                            <li><strong>順序性：</strong> 任意の <InlineMath math="a \in A" /> と <InlineMath math="b \in B" /> に対して <InlineMath math="a < b" /> が成り立つ。</li>
                            <li><strong>最大元の非存在：</strong> 下組 <InlineMath math="A" /> は最大元を持たない。（※定義の流儀により上組が最小元を持たないとしてもよいが、本教材では A に制約を置いている）</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        有理数列 <InlineMath math="\{a_n\}" /> がコーシー列であることの定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-1 より、任意の有理数 <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="N" /> が存在し、<InlineMath math="m, n \ge N" /> となるすべての <InlineMath math="m, n" /> について次が成り立つことである：
                        </p>
                        <BlockMath math="|a_m - a_n| < \varepsilon" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        デデキント切断による構成とコーシー列による構成は、どのような意味で「同じもの」とみなせるか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.4-1 および §1.4 備考より、完備順序体として<strong>同型（Isomorphic）</strong>である。
                            これは、2つの実数体の間に、加法・乗法・順序関係をすべて保存する全単射写像が存在することを意味し、数学的構造として一意であることを示している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        有理数 <InlineMath math="2" /> を表すデデキント切断 <InlineMath math="(A, B)" /> を集合の内包的記法で表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-2 における「最小元が上組に含まれる」流儀に基づくと、有理数 <InlineMath math="r" /> は下組を <InlineMath math="\{x \in \mathbb{Q} \mid x < r\}" /> とする切断に対応する。
                        </p>
                        <p className="mt-2">
                            したがって、<InlineMath math="2" /> を表す切断は：
                        </p>
                        <BlockMath math="A = \{x \in \mathbb{Q} \mid x < 2\}, \quad B = \{x \in \mathbb{Q} \mid x \ge 2\}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        有理数列 <InlineMath math="a_n = \frac{1}{n}" /> がコーシー列であることを定義に基づいて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の有理数 <InlineMath math="\varepsilon > 0" /> をとる。アルキメデスの原理より（または直感的に）<InlineMath math="\frac{2}{N} < \varepsilon" /> を満たす自然数 <InlineMath math="N" /> を選ぶことができる。
                        </p>
                        <p className="mt-2">
                            このとき、任意の <InlineMath math="m, n \ge N" /> について、三角不等式より：
                        </p>
                        <BlockMath math="|a_m - a_n| = \left| \frac{1}{m} - \frac{1}{n} \right| \le \frac{1}{m} + \frac{1}{n} \le \frac{1}{N} + \frac{1}{N} = \frac{2}{N} < \varepsilon" />
                        <p className="mt-2">
                            よって、Definition 1.3-1 の条件を満たし、<InlineMath math="a_n = 1/n" /> はコーシー列である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        2つの実数（切断）<InlineMath math="x = (A_x, B_x)" /> と <InlineMath math="y = (A_y, B_y)" /> の和 <InlineMath math="x + y" /> の下組 <InlineMath math="A_{x+y}" /> がどのように定義されるか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.2-1 より、下組同士の元をすべて足し合わせた集合として定義される：
                        </p>
                        <BlockMath math="A_{x+y} = \{a + b \mid a \in A_x, b \in A_y\}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        2つの有理コーシー列 <InlineMath math="a_n = \frac{1}{n}" /> と <InlineMath math="b_n = 0" /> が同値であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-2 より、差の数列が 0 に収束することを示せばよい。
                        </p>
                        <BlockMath math="\lim_{n \to \infty} (a_n - b_n) = \lim_{n \to \infty} \left( \frac{1}{n} - 0 \right) = \lim_{n \to \infty} \frac{1}{n} = 0" />
                        <p className="mt-2">
                            任意の有理数 <InlineMath math="\varepsilon > 0" /> に対し、<InlineMath math="n \ge N \implies 1/n < \varepsilon" /> となる <InlineMath math="N" /> が存在するため、定義の条件 <InlineMath math="|a_n - b_n| < \varepsilon" /> が満たされる。よって <InlineMath math="\{a_n\} \sim \{b_n\}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        <InlineMath math="x^2 = 3" /> を満たすような有理数 <InlineMath math="x" /> は存在しないことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.1-1 の証明と同様に背理法を用いる。<InlineMath math="\sqrt{3}" /> が有理数であると仮定し、互いに素な自然数 <InlineMath math="p, q" /> を用いて <InlineMath math="\sqrt{3} = p/q" /> と表す。
                        </p>
                        <BlockMath math="3 = \frac{p^2}{q^2} \implies p^2 = 3q^2" />
                        <p className="mt-2">
                            <InlineMath math="p^2" /> は 3 の倍数なので、<InlineMath math="p" /> も 3 の倍数である（3は素数より）。<InlineMath math="p = 3k" /> とおくと：
                        </p>
                        <BlockMath math="(3k)^2 = 3q^2 \implies 9k^2 = 3q^2 \implies 3k^2 = q^2" />
                        <p className="mt-2">
                            <InlineMath math="q^2" /> は 3 の倍数となり、<InlineMath math="q" /> も 3 の倍数である。
                        </p>
                        <p className="mt-2">
                            すると <InlineMath math="p, q" /> は共に 3 を公約数に持つことになり、互いに素であるという仮定に矛盾する。したがって、<InlineMath math="\sqrt{3}" /> は有理数ではない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        次の集合 <InlineMath math="A" /> がデデキント切断の下組の条件を満たすことを証明せよ。
                    </p>
                    <BlockMath math="A = \{ q \in \mathbb{Q} \mid q < 0 \text{ または } q^2 < 2 \}" />
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-1 の条件を確認する。
                        </p>
                        <p className="mt-2">
                            (1) <InlineMath math="0 \in A" /> より <InlineMath math="A \neq \emptyset" />。<InlineMath math="2^2 = 4 > 2" /> より <InlineMath math="2 \notin A" /> なので <InlineMath math="B = \mathbb{Q} \setminus A \neq \emptyset" />。
                        </p>
                        <p className="mt-2">
                            (2) <InlineMath math="a \in A" /> かつ <InlineMath math="b \in B" /> とする。<InlineMath math="B" /> の定義より <InlineMath math="b \ge 0" /> かつ <InlineMath math="b^2 \ge 2" /> である。<InlineMath math="a < 0" /> ならば明らかに <InlineMath math="a < b" />。 <InlineMath math="a \ge 0" /> ならば <InlineMath math="a^2 < 2 \le b^2" /> より <InlineMath math="a < b" />。
                        </p>
                        <p className="mt-2">
                            (3) <InlineMath math="a \in A" /> （特に <InlineMath math="a > 0" />）に対し、<InlineMath math="a < r < \sqrt{2}" /> となる有理数 <InlineMath math="r" /> が存在すれば最大元を持たないと言える。有理数の稠密性または具体的な構成（例：<InlineMath math="r = a + \frac{2-a^2}{a+2}" />）により、<InlineMath math="a < r" /> かつ <InlineMath math="r^2 < 2" /> を満たす有理数 <InlineMath math="r" /> は常に存在する。
                        </p>
                        <p className="mt-2">
                            よって <InlineMath math="A" /> はデデキント切断の下組の条件を満たす。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        コーシー列の同値類からデデキント切断への同型写像を構成する際、同値類 <InlineMath math="x = [\{a_n\}]" /> に対応する下組 <InlineMath math="A_x" /> はどのように定義されたか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.4-1 の証明（Step 1）より、次のように定義される：
                        </p>
                        <BlockMath math="A_x = \{ q \in \mathbb{Q} \mid \exists \varepsilon > 0, \exists N \in \mathbb{N}, \forall n \ge N, \; q < a_n - \varepsilon \}" />
                        <p className="mt-2">
                            これは、「コーシー列 <InlineMath math="\{a_n\}" /> が収束しようとしている極限値よりも、有理数的に確実に（一定の幅 <InlineMath math="\varepsilon" /> を持って）小さい有理数」の集合を集めたものである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
