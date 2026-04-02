import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_3_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        可測空間 <InlineMath math="(X, \mathcal{A})" /> 上の関数 <InlineMath math="f : X \to \mathbb{R}" /> が<b>可測である</b>ことの定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-1（可測関数）に基づき、任意の <InlineMath math="a \in \mathbb{R}" /> に対して逆像
                            <BlockMath math="\{x \in X \mid f(x) > a\}" />
                            が可測集合（ <InlineMath math="\mathcal{A}" /> の元）となることをいう。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        集合 <InlineMath math="A \subset X" /> の<b>特性関数</b> <InlineMath math="\mathbf{1}_A(x)" /> が可測関数となるための必要十分条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 2.1-3（代表的な可測関数）にある通り、 <b><InlineMath math="A" /> が可測集合（ <InlineMath math="A \in \mathcal{A}" /> ）であること</b>が条件である。
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            ※ <InlineMath math="\{ \mathbf{1}_A > 0.5 \}" /> は <InlineMath math="A" /> そのものになるため、逆像が可測であるためには <InlineMath math="A" /> が可測でなければならない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> 上の関数列について、<b>概収束</b> (convergence almost everywhere) と<b>測度収束</b> (convergence in measure) の定義をそれぞれ述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.4-1, 2.4-2 に基づく。
                        </p>
                        <ul className="list-decimal list-inside space-y-4 mt-2">
                            <li>
                                <b>概収束</b>：測度 0 の集合を除いた領域で各点収束すること。
                                <BlockMath math="\mu(\{x \in X \mid \lim_{n\to\infty} f_n(x) \neq f(x)\}) = 0" />
                            </li>
                            <li>
                                <b>測度収束</b>：任意の <InlineMath math="\epsilon > 0" /> に対して、誤差が <InlineMath math="\epsilon" /> 以上となる集合の測度が 0 に近づくこと。
                                <BlockMath math="\lim_{n\to\infty} \mu(\{x \in X \mid |f_n(x) - f(x)| > \epsilon\}) = 0" />
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        拡張実数値可測関数 <InlineMath math="f : X \to [-\infty, +\infty]" /> に対して、集合 <InlineMath math="\{x \in X \mid f(x) = +\infty\}" /> も可測集合であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-2（拡張実数値可測関数）にあるように、集合 <InlineMath math="\{f = +\infty\}" /> は次のように可算個の共通部分で表せる。
                        </p>
                        <BlockMath math="\{f = +\infty\} = \bigcap_{n=1}^\infty \{x \in X \mid f(x) > n\}" />
                        <p>
                            <InlineMath math="f" /> は拡張実数値可測関数であるから、任意の <InlineMath math="n \in \mathbb{N}" /> に対し集合 <InlineMath math="\{f > n\}" /> は <InlineMath math="\mathcal{A}" /> に属する（可測）。
                            <InlineMath math="\sigma" />-加法族は可算共通部分について閉じているため、その極限である <InlineMath math="\{f = +\infty\}" /> もまた <InlineMath math="\mathcal{A}" /> に属し、可測集合である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        可測関数 <InlineMath math="f" /> と定数 <InlineMath math="c > 0" /> に対し、関数 <InlineMath math="cf" /> も可測であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="a \in \mathbb{R}" /> に対して、集合として等式 <InlineMath math="\{x \in X \mid cf(x) > a\} = \{x \in X \mid f(x) > a/c\}" /> が成り立つ。
                        </p>
                        <p>
                            右辺は <InlineMath math="f" /> の可測性より、任意の <InlineMath math="b \in \mathbb{R}" /> （ここでは <InlineMath math="b = a/c" /> ）に対してその逆像が可測集合となることから可測である。
                        </p>
                        <p>
                            よって左辺も可測集合であり、 <InlineMath math="cf" /> は可測である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        関数 <InlineMath math="s(x) = \mathbf{1}_{[0, 1]}(x) + 2\mathbf{1}_{[0.5, 2]}(x)" /> を、互いに素な集合の和としての<b>標準形</b>（Definition 2.3-1）に書き直せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            各領域における関数の値を確認する。
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li><InlineMath math="0 \leq x < 0.5" /> のとき、 <InlineMath math="s(x) = 1 + 0 = 1" /></li>
                            <li><InlineMath math="0.5 \leq x \leq 1" /> のとき、 <InlineMath math="s(x) = 1 + 2 = 3" /></li>
                            <li><InlineMath math="1 < x \leq 2" /> のとき、 <InlineMath math="s(x) = 0 + 2 = 2" /></li>
                            <li>それ以外（ <InlineMath math="x < 0" /> または <InlineMath math="x > 2" /> ）のとき、 <InlineMath math="s(x) = 0" /></li>
                        </ul>
                        <p className="mt-2">
                            よって、特性関数の線形結合としての標準形は以下の通り。
                            <BlockMath math="s(x) = 1 \cdot \mathbf{1}_{[0, 0.5)}(x) + 3 \cdot \mathbf{1}_{[0.5, 1]}(x) + 2 \cdot \mathbf{1}_{(1, 2]}(x) + 0 \cdot \mathbf{1}_{(-\infty, 0) \cup (2, \infty)}(x)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        恒等関数 <InlineMath math="f(x) = x \quad (x \in [0, 1])" /> に対して、 <b>Theorem 2.3-1</b> （単調近似定理）で構成される <InlineMath math="n=2" /> のときの単関数 <InlineMath math="s_2(x)" /> を具体的に構成せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.3-1 における <InlineMath math="s_n" /> の構成に従う。 <InlineMath math="n=2" /> のとき、値域を <InlineMath math="1/2^2 = 1/4" /> 刻みで分割する。
                        </p>
                        <p>
                            <InlineMath math="k=0, 1, 2, 3" /> （ <InlineMath math="n 2^n - 1 = 7" /> だが <InlineMath math="f(x) \leq 1 < 2" /> なので <InlineMath math="k=4" /> 以上は空）に対し、
                            <InlineMath math="E_{2, k} = \{x \mid k/4 \leq x < (k+1)/4\}" /> とすると：
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li><InlineMath math="s_2(x) = 0" /> （ <InlineMath math="0 \leq x < 1/4" /> ）</li>
                            <li><InlineMath math="s_2(x) = 1/4" /> （ <InlineMath math="1/4 \leq x < 1/2" /> ）</li>
                            <li><InlineMath math="s_2(x) = 1/2" /> （ <InlineMath math="1/2 \leq x < 3/4" /> ）</li>
                            <li><InlineMath math="s_2(x) = 3/4" /> （ <InlineMath math="3/4 \leq x \leq 1" /> ）</li>
                        </ul>
                        <p className="mt-2">
                            この階段状の関数が <InlineMath math="f(x)=x" /> を下から近似する構成要素となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        可測関数列 <InlineMath math="\{f_n\}" /> に対し、その上限 <InlineMath math="g(x) = \sup_{n} f_n(x)" /> が可測であることを証明せよ（Theorem 2.2-1 の証明）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="a \in \mathbb{R}" /> に対して以下の集合が一致することを示す。
                            <BlockMath math="\{x \in X \mid g(x) > a\} = \bigcup_{n=1}^\infty \{x \in X \mid f_n(x) > a\}" />
                        </p>
                        <p>
                            ( <InlineMath math="\supset" /> ): ある <InlineMath math="k" /> で <InlineMath math="f_k(x) > a" /> ならば、上限の定義より <InlineMath math="g(x) = \sup f_n(x) \geq f_k(x) > a" /> となる。
                        </p>
                        <p>
                            ( <InlineMath math="\subset" /> ): <InlineMath math="g(x) > a" /> ならば、上限の性質（ <InlineMath math="a" /> は上界ではない）より、いずれかの <InlineMath math="f_k" /> で <InlineMath math="f_k(x) > a" /> となるものが存在する。
                        </p>
                        <p>
                            各 <InlineMath math="\{f_n > a\}" /> は可測集合であり、 <InlineMath math="\sigma" />-加法族は可算和について閉じているため、和集合も可測である。これにより <InlineMath math="g" /> は可測関数である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        連続関数 <InlineMath math="f : \mathbb{R} \to \mathbb{R}" /> はボレル可測であることを、逆像操作の性質を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> は実数直線上のすべての開集合を含む <InlineMath math="\sigma" />-加法族である。
                        </p>
                        <p>
                            (1) <InlineMath math="f" /> が連続であることの同値な定義の一つは「任意の開集合 <InlineMath math="U \subset \mathbb{R}" /> に対してその逆像 <InlineMath math="f^{-1}(U)" /> が開集合（したがってボレル集合）になる」ことである。
                        </p>
                        <p>
                            (2) 位相空間上の開集合系 <InlineMath math="\mathcal{O}" /> から生成される最小の <InlineMath math="\sigma" />-加法族がボレル集合族であるから、すべての開集合の逆像がボレル集合であれば、それから生成される任意のボレル集合 <InlineMath math="B" /> に対しても <InlineMath math="f^{-1}(B)" /> はボレル集合となる。
                        </p>
                        <p>
                            したがって、Definition 2.1-1 の同値条件（Proposition 2.1-1）により、連続関数は常にボレル可測である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        可測空間 <InlineMath math="(X, \mathcal{A})" /> 上の可測関数 <InlineMath math="f, g" /> に対して、それらの和 <InlineMath math="f+g" /> も可測であることを、有理数全体の集合 <InlineMath math="\mathbb{Q}" /> が稠密であることを用いて証明せよ（Proposition 2.2-1 の証明）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="a \in \mathbb{R}" /> に対し、次が成り立つことを示す。
                            <BlockMath math="\{x \mid f(x) + g(x) < a\} = \bigcup_{q \in \mathbb{Q}} (\{x \mid f(x) < q\} \cap \{x \mid g(x) < a - q\})" />
                        </p>
                        <p>
                            ( <InlineMath math="\supset" /> ): ある <InlineMath math="q" /> で <InlineMath math="f(x) < q" /> かつ <InlineMath math="g(x) < a - q" /> ならば、和をとって <InlineMath math="f(x) + g(x) < q + (a - q) = a" /> となり成立。
                        </p>
                        <p>
                            ( <InlineMath math="\subset" /> ): <InlineMath math="f(x) + g(x) < a" /> とすると、 <InlineMath math="f(x) < a - g(x)" /> である。実数における有理数の稠密性より、 <InlineMath math="f(x) < q < a - g(x)" /> を満たす有理数 <InlineMath math="q" /> が存在する。
                            このとき <InlineMath math="f(x) < q" /> かつ <InlineMath math="g(x) < a - q" /> が成り立つ。
                        </p>
                        <p>
                            右辺は、可測集合（可測関数の性質）の共通部分の<b>可算個（有理数は可算）の和集合</b>である。
                            これは <InlineMath math="\sigma" />-加法族の定義により可測集合である。よって <InlineMath math="f+g" /> は可測である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
