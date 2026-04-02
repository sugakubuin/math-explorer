import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_7_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        特性関数 <InlineMath math="\varphi_X(t)" /> の定義式（Definition 7.1-1）を記述せよ。また、任意の特性関数が満たす 4 つの基本性質（Proposition 7.1-1）を挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>定義式</b>：
                            <BlockMath math="\varphi_X(t) = E[e^{itX}] = \int_{-\infty}^\infty e^{itx} dF_X(x)" />
                        </p>
                        <p className="mt-4">
                            <b>4 つの基本性質</b>：
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li><InlineMath math="\varphi_X(0) = 1" /></li>
                            <li><InlineMath math="|\varphi_X(t)| \leq 1" /></li>
                            <li><InlineMath math="\varphi_X(-t) = \overline{\varphi_X(t)}" /></li>
                            <li><InlineMath math="\varphi_X(t)" /> は <InlineMath math="\mathbb{R}" /> 上で一様連続である。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        特性関数とモーメントの関係（Theorem 7.2-1）を記述せよ。特に、期待値 <InlineMath math="E[X]" /> を特性関数の微分係数を用いて表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="n" /> 次モーメントが有限であるとき、特性関数は <InlineMath math="n" /> 回連続微分可能であり、次が成り立つ：
                            <BlockMath math="\varphi_X^{(k)}(0) = i^k E[X^k] \quad (k = 1, 2, \ldots, n)" />
                        </p>
                        <p className="mt-4">
                            期待値については、<InlineMath math="k=1" /> とすると <InlineMath math="\varphi_X'(0) = i E[X]" /> より：
                            <BlockMath math="E[X] = \frac{\varphi_X'(0)}{i} = -i \varphi_X'(0)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        独立な確率変数 <InlineMath math="X, Y" /> の和 <InlineMath math="X+Y" /> の特性関数と、それぞれの特性関数の間の関係（Theorem 7.3-3）を記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            独立な確率変数の和の特性関数は、それぞれの特性関数の積に等しい：
                            <BlockMath math="\varphi_{X+Y}(t) = \varphi_X(t) \cdot \varphi_Y(t)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        ベルヌーイ分布 <InlineMath math="X \sim \text{Bernoulli}(p)" />（<InlineMath math="P(X=1)=p, P(X=0)=1-p" />）の特性関数を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            特性関数の定義式（Definition 7.1-1）に従い、期待値を計算する：
                            <BlockMath math="\begin{aligned} \varphi_X(t) &= E[e^{itX}] \\ &= e^{it \cdot 1} P(X=1) + e^{it \cdot 0} P(X=0) \\ &= p e^{it} + (1-p) \end{aligned}" />
                            したがって、<InlineMath math="\varphi_X(t) = 1 + p(e^{it} - 1)" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        指数分布 <InlineMath math="X \sim \text{Exp}(\lambda)" /> の特性関数 <InlineMath math="\varphi_X(t) = \frac{\lambda}{\lambda - it}" /> を微分することにより（Theorem 7.2-1）、期待値 <InlineMath math="E[X]" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            特性関数を <InlineMath math="t" /> について微分する：
                            <BlockMath math="\begin{aligned} \varphi_X'(t) &= \frac{d}{dt} \lambda (\lambda - it)^{-1} \\ &= \lambda \cdot (-1)(\lambda - it)^{-2} \cdot (-i) \\ &= \frac{i\lambda}{(\lambda - it)^2} \end{aligned}" />
                        </p>
                        <p className="mt-4">
                            原点 <InlineMath math="t=0" /> での値を求めると：
                            <BlockMath math="\varphi_X'(0) = \frac{i\lambda}{\lambda^2} = \frac{i}{\lambda}" />
                        </p>
                        <p className="mt-4">
                            期待値の公式（Theorem 7.2-1）より：
                            <BlockMath math="E[X] = \frac{\varphi_X'(0)}{i} = \frac{i/\lambda}{i} = \frac{1}{\lambda}" />
                            これは指数分布の期待値の公式と一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        独立な 2 つのポアソン分布 <InlineMath math="X \sim \text{Po}(\lambda_1)" /> と <InlineMath math="Y \sim \text{Po}(\lambda_2)" /> の和 <InlineMath math="X+Y" /> もポアソン分布に従うことを、特性関数を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ポアソン分布 <InlineMath math="\text{Po}(\lambda)" /> の特性関数は <InlineMath math="\varphi(t) = e^{\lambda(e^{it} - 1)}" /> である（Example 7.1-3）。
                            独立和の特性関数公式（Theorem 7.3-3）より：
                            <BlockMath math="\begin{aligned} \varphi_{X+Y}(t) &= \varphi_X(t) \cdot \varphi_Y(t) \\ &= e^{\lambda_1(e^{it} - 1)} \cdot e^{\lambda_2(e^{it} - 1)} \\ &= e^{(\lambda_1 + \lambda_2)(e^{it} - 1)} \end{aligned}" />
                        </p>
                        <p className="mt-4">
                            得られた特性関数は、パラメータ <InlineMath math="\lambda_1 + \lambda_2" /> のポアソン分布の形をしている。
                            特性関数の一意性定理（Theorem 7.3-2）より、<InlineMath math="X+Y \sim \text{Po}(\lambda_1 + \lambda_2)" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        特性関数 <InlineMath math="\varphi_X(t)" /> がすべての <InlineMath math="t \in \mathbb{R}" /> で実数値をとるならば、確率変数 <InlineMath math="X" /> は原点に関して対称な分布（すなわち <InlineMath math="X" /> と <InlineMath math="-X" /> の分布が等しい）を持つことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="-X" /> の特性関数を <InlineMath math="\varphi_{-X}(t)" /> とすると：
                            <BlockMath math="\varphi_{-X}(t) = E[e^{it(-X)}] = E[e^{-itX}] = \varphi_X(-t)" />
                        </p>
                        <p className="mt-4">
                            特性関数の基本性質（Proposition 7.1-1）より <InlineMath math="\varphi_X(-t) = \overline{\varphi_X(t)}" /> である。
                            仮定より <InlineMath math="\varphi_X(t)" /> は実数なので、<InlineMath math="\overline{\varphi_X(t)} = \varphi_X(t)" /> が成り立つ。
                            したがって：
                            <BlockMath math="\varphi_{-X}(t) = \varphi_X(t)" />
                        </p>
                        <p className="mt-4">
                            特性関数の一意性定理（Theorem 7.3-2）より、<InlineMath math="-X" /> と <InlineMath math="X" /> は同一の分布を持つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        区間 <InlineMath math="[-a, a]" /> 上の連続型一様分布 <InlineMath math="U(-a, a)" /> の特性関数を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            密度関数は <InlineMath math="f(x) = \frac{1}{2a} \quad (-a \le x \le a)" /> である。定義に従い積分を計算する（<InlineMath math="t=0" /> のときは 1 であるため <InlineMath math="t \neq 0" /> とする）：
                            <BlockMath math="\begin{aligned} \varphi_X(t) &= \int_{-a}^a e^{itx} \frac{1}{2a} dx = \frac{1}{2a} \left[ \frac{e^{itx}}{it} \right]_{-a}^a \\ &= \frac{1}{2a} \frac{e^{ita} - e^{-ita}}{it} \\ &= \frac{1}{at} \frac{e^{ita} - e^{-ita}}{2i} \\ &= \frac{\sin(at)}{at} \end{aligned}" />
                            したがって特性関数は <InlineMath math="\varphi_X(t) = \frac{\sin(at)}{at}" /> （シンク関数）である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        確率変数 <InlineMath math="X" /> の特性関数を <InlineMath math="\varphi_X(t)" /> とするとき、定数 <InlineMath math="a, b" /> に対して一次変換 <InlineMath math="Y = aX + b" /> の特性関数が次で与えられることを証明せよ。
                        <BlockMath math="\varphi_Y(t) = e^{itb} \varphi_X(at)" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            期待値の定義（Definition 7.1-1）に代入する：
                            <BlockMath math="\begin{aligned} \varphi_Y(t) &= E[e^{itY}] = E[e^{it(aX + b)}] \\ &= E[e^{itb} \cdot e^{i(ta)X}] \\ &= e^{itb} E[e^{i(at)X}] \\ &= e^{itb} \varphi_X(at) \end{aligned}" />
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        確率変数列 <InlineMath math="\{X_n\}" /> の特性関数が <InlineMath math="\varphi_{X_n}(t) = \cos(t/n)" /> であるとき、レビーの連続性定理（Theorem 7.4-1）を用いてこの列の収束先を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            各点 <InlineMath math="t" /> における極限を計算する：
                            <BlockMath math="\lim_{n \to \infty} \varphi_{X_n}(t) = \lim_{n \to \infty} \cos(t/n) = \cos(0) = 1" />
                        </p>
                        <p className="mt-4">
                            極限関数は <InlineMath math="\psi(t) = 1" /> である。これは <InlineMath math="t=0" /> において明らかに連続である。
                            ここで、定数 <InlineMath math="0" /> となる確率変数（<InlineMath math="P(X=0)=1" />）の特性関数は：
                            <BlockMath math="\varphi_X(t) = E[e^{it \cdot 0}] = E[1] = 1" />
                            である。
                        </p>
                        <p className="mt-4">
                            レビーの連続性定理（Theorem 7.4-1）の後半（ii）により、特性関数が <InlineMath math="\psi(t)" /> に収束し、かつそれが原点で連続であるため、
                            <InlineMath math="X_n" /> は極限関数に対応する確率変数 <InlineMath math="X" /> に分布収束する。
                            したがって、<InlineMath math="X_n \xrightarrow{d} 0" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
