import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_3_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> 上の単関数 <InlineMath math="s(x) = \sum_{j=1}^k c_j \mathbf{1}_{A_j}(x)" /> （標準形）に対して、その積分 <InlineMath math="\int_X s \, d\mu" /> の定義を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-1（単関数の積分）に基づき、以下のように定義される。
                        </p>
                        <BlockMath math="\int_X s \, d\mu = \sum_{j=1}^k c_j \mu(A_j)" />
                        <p className="mt-2 text-sm text-slate-500">
                            ※ ただし、 <InlineMath math="0 \cdot \infty = 0" /> と約束する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        可測関数 <InlineMath math="f" /> の<b>正部分</b> <InlineMath math="f^+" /> と<b>負部分</b> <InlineMath math="f^-" /> の定義を述べよ。また、これらを用いて元の関数 <InlineMath math="f" /> と絶対値 <InlineMath math="|f|" /> をどのように表せるか記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.5-1（正部分と負部分）に基づき、以下のように定義される。
                        </p>
                        <BlockMath math="f^+(x) = \max\{f(x), 0\}, \quad f^-(x) = \max\{-f(x), 0\}" />
                        <p>
                             これらを用いると、元の関数と絶対値は次のように表される。
                        </p>
                        <BlockMath math="f = f^+ - f^-, \quad |f| = f^+ + f^-" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        関数 <InlineMath math="f" /> が<b>ルベーグ可積分</b>であることの、 <InlineMath math="L^1" /> 空間の定義に基づいた必要十分条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.5-2 および 3.5-3 に基づき、可測関数 <InlineMath math="f" /> が以下を満たすとき、ルベーグ可積分（ <InlineMath math="f \in L^1" /> ）であるという。
                        </p>
                        <BlockMath math="\int_X |f| \, d\mu < \infty" />
                        <p>
                            これは、正部分と負部分の積分がいずれも有限（ <InlineMath math="\int f^+ < \infty" /> かつ <InlineMath math="\int f^- < \infty" /> ）であることと同値である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        実数直線上のルベーグ測度 <InlineMath math="\lambda" /> について、関数 <InlineMath math="f(x) = e^{-x} \mathbf{1}_{[0, \infty)}(x)" /> の積分値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.2-1（非負値可測関数の積分）に基づき計算する。非負関数のルベーグ積分は、通常の広義リーマン積分と一致するため、
                        </p>
                        <BlockMath math="\int_{\mathbb{R}} f \, d\lambda = \int_0^\infty e^{-x} \, dx = \left[ -e^{-x} \right]_0^\infty = 0 - (-1) = 1" />
                        <p>
                            したがって、積分値は <b>1</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        点別極限 <InlineMath math="\lim_{n \to \infty} \int_0^\infty \frac{1}{1 + x^n} \, dx" /> を求める際、<b>優収束定理</b> (Theorem 3.6-1) が適用可能であることを示し、その極限値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            被積分関数を <InlineMath math="f_n(x) = \frac{1}{1 + x^n}" /> とおく。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>
                                <b>点別極限</b>: 
                                <BlockMath math="f(x) = \lim_{n \to \infty} f_n(x) = \begin{cases} 1 & (0 \le x < 1) \\ 1/2 & (x = 1) \\ 0 & (x > 1) \end{cases}" />
                            </li>
                            <li>
                                <b>優関数</b>: 
                                <BlockMath math="g(x) = \begin{cases} 1 & (0 \le x \le 1) \\ 1/x^2 & (x > 1) \end{cases}" />
                                とおくと、 <InlineMath math="n \ge 2" /> で <InlineMath math="|f_n(x)| \le g(x)" /> であり、 <InlineMath math="g \in L^1(0, \infty)" /> である。
                            </li>
                        </ul>
                        <p className="mt-4">
                            優収束定理より、極限と積分の順序交換が可能であり、
                            <BlockMath math="\lim_{n \to \infty} \int_0^\infty f_n \, dx = \int_0^\infty f \, dx = \int_0^1 1 \, dx = 1" />
                            を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        <b>単調収束定理</b> (Theorem 3.3-1) を用いて、次の等式を示せ：
                        <BlockMath math="\int_0^1 \sum_{n=1}^\infty x^n \, dx = \sum_{n=1}^\infty \int_0^1 x^n \, dx" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f_k(x) = \sum_{n=1}^k x^n" /> とおくと、これは各点 <InlineMath math="x \in [0, 1]" /> で非負かつ単調増加な関数列である。
                        </p>
                        <p>
                            単調収束定理より、項別積分が可能である：
                            <BlockMath math="\int_0^1 \left( \lim_{k \to \infty} \sum_{n=1}^k x^n \right) dx = \lim_{k \to \infty} \int_0^1 \sum_{n=1}^k x^n \, dx = \lim_{k \to \infty} \sum_{n=1}^k \int_0^1 x^n \, dx" />
                        </p>
                        <p>
                            これより、無限和と積分の順序が交換され、等式が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        可積分な非負値関数列 <InlineMath math="\{f_n\}" /> に対して成り立つ積分記号下の線形性、すなわち複素数 <InlineMath math="\alpha, \beta" /> に対して
                        <BlockMath math="\int_X (\alpha f + \beta g) \, d\mu = \alpha \int_X f \, d\mu + \beta \int_X g \, d\mu" />
                        が成り立つ。これが非負値可測関数（積分値が無限大を許容する場合）においても矛盾なく定義される理由を、積分の定義（Definition 3.2-1）に基づいて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            非負値可測関数の積分は、それを下から近似する単関数の積分の「上限」として定義される。
                        </p>
                        <p>
                            単関数の積分において線形性が成り立つことは、 Definition 3.1-1 および測度の有限加法性から直接導かれる。
                            一般の非負値可測関数については、上限をとる操作と和の操作が可換であること（単調近似定理 Theorem 2.3-1 の適用）により、単関数の線形性が極限においても継承されるため、線形性が保持される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        <b>ファトゥの補題</b> (Lemma 3.4-1) を用いて、<b>優収束定理</b> (Theorem 3.6-1) の証明の骨子を説明せよ。具体的には、非負関数 <InlineMath math="g \pm f_n" /> にどのようにファトゥの補題を適用するか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.6-1 の証明にある通り、可積分な優関数 <InlineMath math="g" /> に対して <InlineMath math="g + f_n \ge 0" /> および <InlineMath math="g - f_n \ge 0" /> を考える。
                        </p>
                        <ul className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <InlineMath math="g + f_n" /> にファトゥの補題を適用すると、 <InlineMath math="\int f \le \liminf \int f_n" /> が得られる。
                            </li>
                            <li>
                                <InlineMath math="g - f_n" /> にファトゥの補題を適用すると、 <InlineMath math="\limsup \int f_n \le \int f" /> が得られる。
                            </li>
                        </ul>
                        <p className="mt-4">
                            これら二つの不等式を組み合わせることで、 <InlineMath math="\limsup \int f_n \le \int f \le \liminf \int f_n" /> となり、極限が存在して積分と一致することが示される。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        関数列 <InlineMath math="f_n(x) = n \cdot \mathbf{1}_{(0, 1/n)}(x)" /> について、以下の値をそれぞれ求め、優収束定理が適用できない理由（優関数の非存在）を説明せよ。
                        <ol className="list-decimal list-inside mt-2">
                            <li>各点極限関数の積分： <InlineMath math="\int_0^1 (\lim_{n \to \infty} f_n(x)) dx" /></li>
                            <li>積分値の極限： <InlineMath math="\lim_{n \to \infty} \int_0^1 f_n(x) dx" /></li>
                        </ol>
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 各点において、十分大きな <InlineMath math="n" /> で <InlineMath math="x > 1/n" /> となるため、点別極限は <InlineMath math="f(x) = 0" /> である。よって積分値は <b>0</b> である。
                        </p>
                        <p className="mt-2 text-sm">
                            2. 各 <InlineMath math="n" /> に対し積分は <InlineMath math="\int_0^1 f_n(x) dx = n \cdot \lambda(0, 1/n) = n \cdot (1/n) = 1" />。よって極限値は <b>1</b> である。
                        </p>
                        <p className="mt-4">
                            両者が一致しないのは、優収束定理の条件である「可積分な優関数 <InlineMath math="g" /> 」がこの範囲で存在しないためである。
                            実際、 <InlineMath math="g(x) = \sup_n f_n(x)" /> を考えると、 <InlineMath math="x \in (1/(n+1), 1/n)" /> で <InlineMath math="g(x) \ge n \approx 1/x" /> となり、 <InlineMath math="1/x" /> は原点付近で可積分でない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                         区間 <InlineMath math="[0, 1]" /> 上のディリクレ関数 <InlineMath math="\mathbf{1}_{\mathbb{Q} \cap [0, 1]}" /> のルベーグ積分が 0 であることを、測度の性質を用いて説明せよ（Example 3.4-1 関連）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            有理数全体の集合 <InlineMath math="\mathbb{Q}" /> は可算集合である。ルベーグ測度の <InlineMath math="\sigma" />-加法性、および一点集合の測度が 0 であることから、
                            <BlockMath math="\lambda(\mathbb{Q} \cap [0, 1]) \le \lambda(\mathbb{Q}) = \sum_{q \in \mathbb{Q}} \lambda(\{q\}) = \sum_{q \in \mathbb{Q}} 0 = 0" />
                        </p>
                        <p>
                            したがって、ディリクレ関数の積分は：
                            <BlockMath math="\int_{[0, 1]} \mathbf{1}_{\mathbb{Q}} \, d\lambda = 1 \cdot \lambda(\mathbb{Q} \cap [0, 1]) = 1 \cdot 0 = 0" />
                            となり、 0 である。これはリーマン積分不可能（振動が激しいため）な関数であっても、ルベーグ積分では明快な値を定義できる一つの例である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
