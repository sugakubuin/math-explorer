import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_3_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        集合 <InlineMath math="X" /> 上の集合族 <InlineMath math="\mathcal{A}" /> が<b>集合代数</b> (algebra) であるために満たすべき3つの条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-1（集合代数）に基づき、以下の3条件を満たす必要がある。
                        </p>
                        <ul className="list-decimal list-inside space-y-2 mt-2">
                            <li><InlineMath math="X \in \mathcal{A}" /></li>
                            <li><InlineMath math="A \in \mathcal{A} \implies A^c \in \mathcal{A}" /></li>
                            <li><InlineMath math="A, B \in \mathcal{A} \implies A \cup B \in \mathcal{A}" /></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        <b><InlineMath math="\sigma" />-加法族</b> (<InlineMath math="\sigma" />-algebra) の定義において、集合代数の条件から強化された点は何か。具体的に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-2（σ-加法族）にある通り、集合代数の条件 (iii)「有限和について閉じている」が、<b>「可算無限和について閉じている」</b>という条件に強化されている。
                        </p>
                        <BlockMath math="A_1, A_2, \ldots \in \mathcal{A} \implies \bigcup_{n=1}^\infty A_n \in \mathcal{A}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        可測空間 <InlineMath math="(X, \mathcal{A})" /> 上の関数 <InlineMath math="\mu : \mathcal{A} \to [0, +\infty]" /> が<b>測度</b>であるための定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-1（測度）に基づき、以下の2条件を満たす必要がある。
                        </p>
                        <ul className="list-decimal list-inside space-y-2 mt-2">
                            <li><InlineMath math="\mu(\emptyset) = 0" /></li>
                            <li>
                                <b><InlineMath math="\sigma" />-加法性</b>: 互いに素な可算集合列 <InlineMath math="\{A_n\}_{n=1}^\infty \subset \mathcal{A}" /> に対して、
                                <BlockMath math="\mu\left(\bigcup_{n=1}^\infty A_n\right) = \sum_{n=1}^\infty \mu(A_n)" />
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        <InlineMath math="X = \{1, 2, 3\}" /> とし、集合族 <InlineMath math="\mathcal{A} = \{\emptyset, \{1\}, \{2, 3\}, X\}" /> を考える。
                        この <InlineMath math="\mathcal{A}" /> が <InlineMath math="\sigma" />-加法族であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-2 の条件を順に確認する。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>空集合 <InlineMath math="\emptyset" /> と全体集合 <InlineMath math="X" /> が含まれている。</li>
                            <li>補集合について： <InlineMath math="\{1\}^c = \{2, 3\}" />, <InlineMath math="\{2, 3\}^c = \{1\}" /> は共に <InlineMath math="\mathcal{A}" /> に属する。</li>
                            <li>和集合について： <InlineMath math="\{1\} \cup \{2, 3\} = X" /> であり、これも <InlineMath math="\mathcal{A}" /> に属する。その他の組み合わせも明らか。</li>
                        </ul>
                        <p className="mt-2">
                            以上の有限回の操作で閉じていることから集合代数であり、有限集合上の集合代数は常に可算和についても閉じるため、<InlineMath math="\mathcal{A}" /> は <b><InlineMath math="\sigma" />-加法族</b>である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        測度の<b>単調性</b>（<InlineMath math="A \subset B \implies \mu(A) \leq \mu(B)" />）を、測度の定義を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.2-1 の証明と同様に行う。
                        </p>
                        <p>
                            <InlineMath math="B = A \cup (B \setminus A)" /> と表せる。ここで <InlineMath math="A" /> と <InlineMath math="B \setminus A" /> は互いに素である。
                            測度の可算加法性（有限個の場合も含む）より、
                            <BlockMath math="\mu(B) = \mu(A) + \mu(B \setminus A)" />
                        </p>
                        <p>
                            測度の値域は <InlineMath math="[0, +\infty]" /> なので <InlineMath math="\mu(B \setminus A) \geq 0" /> である。
                            したがって、 <InlineMath math="\mu(B) \geq \mu(A)" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        実数直線 <InlineMath math="\mathbb{R}" /> 上のルベーグ測度 <InlineMath math="\lambda" /> について、集合列 <InlineMath math="A_n = [1, 2 - 1/n]" /> を考える。
                        測度の連続性を用いて、極限 <InlineMath math="\lim_{n\to\infty} \lambda(A_n)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            この集合列は <InlineMath math="A_1 \subset A_2 \subset \dots" /> という単調増加列である。
                            その和集合は <InlineMath math="\bigcup_{n=1}^\infty A_n = [1, 2)" /> となる。
                        </p>
                        <p>
                            Theorem 1.2-1（下からの連続性）より：
                            <BlockMath math="\lim_{n\to\infty} \lambda(A_n) = \lambda\left(\bigcup_{n=1}^\infty A_n\right) = \lambda([1, 2))" />
                        </p>
                        <p>
                            区間 <InlineMath math="[1, 2)" /> の長さは <InlineMath math="2 - 1 = 1" /> なので、求める極限値は <b>1</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        集合 <InlineMath math="X = \{a, b\}" /> 上で、 <InlineMath math="\mu^*(\{a\}) = 0.6, \, \mu^*(\{b\}) = 0.6, \, \mu^*(\{a, b\}) = 1.0, \, \mu^*(\emptyset) = 0" /> で定義される外測度を考える。
                        このとき、一元集合 <InlineMath math="A = \{a\}" /> は<b>カラテオドリの可測条件</b>を満たすか判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-2 に従い、試験集合 <InlineMath math="E = \{a, b\}" /> に対して条件が成り立つか確認する。
                        </p>
                        <p>
                            左辺： <InlineMath math="\mu^*(E) = \mu^*(\{a, b\}) = 1.0" />
                        </p>
                        <p>
                            右辺： <InlineMath math="\mu^*(E \cap A) + \mu^*(E \cap A^c) = \mu^*(\{a\}) + \mu^*(\{b\}) = 0.6 + 0.6 = 1.2" />
                        </p>
                        <p>
                            <InlineMath math="1.0 \neq 1.2" /> であるため、集合 <InlineMath math="A" /> は<b>可測条件を満たさない</b>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        測度の<b>劣 <InlineMath math="\sigma" />-加法性</b>：
                        <BlockMath math="\mu\left(\bigcup_{n=1}^\infty A_n\right) \leq \sum_{n=1}^\infty \mu(A_n)" />
                        を、互いに素な集合列を作る手法（Proposition 1.2-2）を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="B_1 = A_1" /> とし、 <InlineMath math="n \geq 2" /> に対して <InlineMath math="B_n = A_n \setminus (\bigcup_{i=1}^{n-1} A_i)" /> と定義する。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>構成より <InlineMath math="\{B_n\}" /> は互いに素な可測集合列である。</li>
                            <li>和集合は不変である： <InlineMath math="\bigcup B_n = \bigcup A_n" /></li>
                            <li>各 <InlineMath math="n" /> で <InlineMath math="B_n \subset A_n" /> が成り立つ。</li>
                        </ul>
                        <p className="mt-4">
                            測度の <InlineMath math="\sigma" />-加法性と単調性より：
                            <BlockMath math="\mu\left(\bigcup_{n=1}^\infty A_n\right) = \mu\left(\bigcup_{n=1}^\infty B_n\right) = \sum_{n=1}^\infty \mu(B_n) \leq \sum_{n=1}^\infty \mu(A_n)" />
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        測度の上からの連続性（Theorem 1.2-1(2)）において、仮定 <b><InlineMath math="\mu(A_1) < \infty" /></b> が欠けている場合に結論が成り立たない例を、数え上げ測度を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="X = \mathbb{N}" /> 上の数え上げ測度 <InlineMath math="\mu" /> を考える。
                            集合列として <InlineMath math="A_n = \{n, n+1, \dots \}" /> をとる。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>これは <InlineMath math="A_1 \supset A_2 \supset \dots" /> という単調減少列である。</li>
                            <li>各 <InlineMath math="n" /> について <InlineMath math="\mu(A_n) = \infty" /> であるため、その極限は <InlineMath math="\lim \mu(A_n) = \infty" /> となる。</li>
                            <li>一方、共通部分は <InlineMath math="\bigcap_{n=1}^\infty A_n = \emptyset" /> である。なぜなら、任意の自然数 <InlineMath math="k" /> は <InlineMath math="A_{k+1}" /> には属さないためである。</li>
                            <li>したがって <InlineMath math="\mu(\bigcap A_n) = \mu(\emptyset) = 0" /> となる。</li>
                        </ul>
                        <p className="mt-4">
                            このように <InlineMath math="0 \neq \infty" /> となり結論が成り立たない。これは <InlineMath math="\mu(A_1) = \infty" /> であることに起因する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        ルベーグ測度の構成において、ボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> がボレル可測集合の逆像についても閉じているのはなぜか。
                        生成系 <InlineMath math="\mathcal{G} = \{(a, b) \mid a < b\}" /> の議論を用いて説明せよ（Definition 1.1-4 関連）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> は、開区間全体からなる族 <InlineMath math="\mathcal{G}" /> により生成される（Definition 1.1-4）。
                        </p>
                        <p>
                            可測関数 <InlineMath math="f" /> は、定義により任意の開区間（ボレル集合）の逆像 <InlineMath math="f^{-1}((a, b))" /> が可測集合になることを保証する。
                        </p>
                        <p>
                            集合族 <InlineMath math="\mathcal{F} = \{ B \in \mathcal{B}(\mathbb{R}) \mid f^{-1}(B) \in \mathcal{A} \}" /> を考えると：
                            <ul className="list-decimal list-inside space-y-2 mt-2">
                                <li><InlineMath math="\mathcal{G} \subset \mathcal{F}" /> である。</li>
                                <li>逆像は集合演算と可換である（ <InlineMath math="f^{-1}(B^c) = (f^{-1}(B))^c" />, <InlineMath math="f^{-1}(\cup B_n) = \cup f^{-1}(B_n)" /> ）ため、 <InlineMath math="\mathcal{F}" /> は <InlineMath math="\sigma" />-加法族になる。</li>
                            </ul>
                        </p>
                        <p className="mt-4">
                            <InlineMath math="\mathcal{F}" /> は生成系を含む <InlineMath math="\sigma" />-加法族であるから、最小性より <InlineMath math="\mathcal{B}(\mathbb{R}) \subset \mathcal{F}" /> である。
                            すなわち、すべてのボレル集合の逆像は可測集合になる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
