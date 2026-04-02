import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_3_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        区間 <InlineMath math="[a, b]" /> 上の実数値関数 <InlineMath math="f" /> の<b>全変動 (total variation)</b> <InlineMath math="V_a^b(f)" /> の定義を記せ。また、 <InlineMath math="f" /> が<b>有界変動関数 (BV)</b> であるとはどのような状態か述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.1-1 に基づき、以下のように定義される。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>
                                <b>全変動</b>: <InlineMath math="[a, b]" /> の任意の分割 <InlineMath math="\Delta = \{a = x_0 < x_1 < \cdots < x_n = b\}" /> に対する変位の和の上限である：
                                <BlockMath math="V_a^b(f) = \sup_{\Delta} \sum_{i=1}^n |f(x_i) - f(x_{i-1})|" />
                            </li>
                            <li>
                                <b>有界変動関数</b>: 全変動が有限の値（ <InlineMath math="V_a^b(f) < \infty" /> ）であるとき、 <InlineMath math="f" /> は有界変動関数であるという。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        関数 <InlineMath math="f" /> が区間 <InlineMath math="[a, b]" /> 上で<b>絶対連続 (absolutely continuous)</b> であることの定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.2-1 に基づき、以下のように定義される。
                        </p>
                        <p className="mt-2">
                            任意の <InlineMath math="\varepsilon > 0" /> に対し、ある <InlineMath math="\delta > 0" /> が存在して、互いに素な有限個の開区間 <InlineMath math="(a_1, b_1), \dots, (a_k, b_k) \subset [a, b]" /> が
                            <BlockMath math="\sum_{i=1}^k (b_i - a_i) < \delta" />
                            を満たすならば常に
                            <BlockMath math="\sum_{i=1}^k |f(b_i) - f(a_i)| < \varepsilon" />
                            が成り立つことをいう。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        可積分関数 <InlineMath math="f" /> に対する<b>ルベーグ点 (Lebesgue point)</b> の定義を記せ。また、ルベーグの微分定理の内容を簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.3-1 および Theorem 6.3-1 に基づく。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>
                                <b>ルベーグ点</b>: <InlineMath math="\lim_{r \to 0} \frac{1}{|B(x, r)|} \int_{B(x, r)} |f(y) - f(x)| \, dy = 0" /> を満たす点 <InlineMath math="x" /> である。
                            </li>
                            <li>
                                <b>ルベーグの微分定理</b>: 可積分関数 <InlineMath math="f" /> に対して、ほとんどすべての点 <InlineMath math="x" /> はルベーグ点であり、局所平均は a.e. で元の関数値 <InlineMath math="f(x)" /> に収束する。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        区間 <InlineMath math="[a, b]" /> 上の<b>単調増加関数</b> <InlineMath math="f" /> は常に有界変動であることを示し、その全変動 <InlineMath math="V_a^b(f)" /> の値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 6.1-1 に基づき考察する。
                        </p>
                        <p>
                            単調増加性より、任意の分割 <InlineMath math="\Delta" /> に対して <InlineMath math="f(x_i) - f(x_{i-1}) \ge 0" /> である。したがって、
                            <BlockMath math="\sum_{i=1}^n |f(x_i) - f(x_{i-1})| = \sum_{i=1}^n (f(x_i) - f(x_{i-1}))" />
                            となる。これは望遠鏡和（telescoping sum）であり、
                            <BlockMath math="\cdots = f(x_n) - f(x_0) = f(b) - f(a)" />
                            と計算される。
                        </p>
                        <p>
                            この値は分割の取り方に依らず一定であるため、上限もまた <InlineMath math="f(b) - f(a)" /> である。有限の値をとるため <InlineMath math="f" /> は有界変動であり、全変動は <b><InlineMath math="f(b) - f(a)" /></b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        リプシッツ連続関数（ <InlineMath math="|f(x) - f(y)| \le L|x - y|" /> ）は、常に絶対連続であることを示せ（Example 6.2-1 関連）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            絶対連続性の定義に従って示す。任意の <InlineMath math="\varepsilon > 0" /> に対し、 <InlineMath math="\delta = \varepsilon / L" /> とおく。
                        </p>
                        <p>
                            長さの合計が <InlineMath math="\delta" /> 未満の開区間族 <InlineMath math="\{(a_i, b_i)\}" /> に対して、
                            <BlockMath math="\begin{aligned} \sum_{i=1}^k |f(b_i) - f(a_i)| &\le \sum_{i=1}^k L |b_i - a_i| \\ &= L \sum_{i=1}^k (b_i - a_i) \\ &< L \delta = \varepsilon \end{aligned}" />
                            を得る。したがって、 <InlineMath math="f" /> は絶対連続である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                         <InlineMath math="f(x) = x \sin(1/x)" /> （ <InlineMath math="x \in (0, 1]" /> ）、 <InlineMath math="f(0) = 0" /> が連続であるにもかかわらず有界変動でない理由を説明せよ（Example 6.1-1 反例）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            原点付近で関数が「激しく振動」するためである。
                        </p>
                        <p>
                            具体的には、 <InlineMath math="x_k = \frac{2}{(2k+1)\pi}" /> という点を分割点に選ぶと、 <InlineMath math="|f(x_k)|" /> は <InlineMath math="\approx 1/k" /> のオーダーで増減する。
                            これらの変位の和をとると、調和級数 <InlineMath math="\sum 1/k" /> が現れ、 <InlineMath math="k \to \infty" /> の極限（すなわち分割を細かくした場合）で無限大に発散する。
                            したがって全変動が有限にならず、有界変動ではない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        <b>ジョルダンの分解定理</b> (Theorem 6.1-1) において、有界変動関数 <InlineMath math="f" /> を具体的にどのように二つの単調増加関数に分解するか、その構成方法を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proof 6.1-1 に基づき、以下のように構成する。
                        </p>
                        <p className="mt-2">
                            <InlineMath math="g(x) = V_a^x(f)" /> （ <InlineMath math="a" /> から <InlineMath math="x" /> までの全変動）とおくと、これは明らかに単調増加である。
                            もう一つの関数を <InlineMath math="h(x) = g(x) - f(x)" /> と定義すると、Proof に示されている通り、全変動の定義より <InlineMath math="h" /> もまた単調増加になる。
                        </p>
                        <p className="mt-2">
                            これより、 <InlineMath math="f(x) = g(x) - h(x)" /> という二つの単調増加関数の差による表現が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        区間 <InlineMath math="[a, b]" /> 上で絶対連続な関数は、必ず有界変動であることを証明せよ（Proposition 6.2-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proof 6.2-1 に基づき証明する。
                        </p>
                        <p>
                            絶対連続性の定義で <InlineMath math="\varepsilon = 1" /> とすると、ある <InlineMath math="\delta > 0" /> が存在して、長さの合計が <InlineMath math="\delta" /> 未満の区間族に対して変位の合計が 1 未満となる。
                            区間 <InlineMath math="[a, b]" /> を、長さが <InlineMath math="\delta" /> 未満の <InlineMath math="N" /> 個の小区間 <InlineMath math="I_k" /> に分割する。
                        </p>
                        <p>
                            各小区間 <InlineMath math="I_k" /> 内での全変動は、定義より 1 以下である。
                            全体の全変動 <InlineMath math="V_a^b(f)" /> は、各小区間ごとの全変動の和で抑えられるため、
                            <BlockMath math="V_a^b(f) = \sum_{k=1}^N V(f, I_k) \le \sum_{k=1}^N 1 = N" />
                            となり、これは有限（ <InlineMath math="< \infty" /> ）である。
                            したがって、絶対連続ならば有界変動である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        <b>カントール関数</b> (Devil's Staircase) の定義に基づき、ほとんど至る所 (a.e.) で微分係数が 0 である理由を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 6.5-1 およびその Proof (3) に基づく。
                        </p>
                        <p>
                            カントール関数 <InlineMath math="\phi" /> は、カントール集合の構成において「中抜きされた開区間」の上で定数値をとるように定義されている。
                            定数関数の導関数は 0 であるため、中抜きされた区間の和集合（カントール集合の補集合）上のすべての点で <InlineMath math="\phi'(x) = 0" /> である。
                        </p>
                        <p>
                            カントール集合のルベーグ測度は 0 であるため、その補集合は測度 1 （ほとんどすべての点）を占める。
                            ゆえに、ほとんどすべての点において微分係数は 0 となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        カントール関数が、微分積分学の基本定理（ルベーグ版）における<b>絶対連続性</b>の必要性を示す反例となっていることを、計算式を用いて説明せよ（Example 6.5-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.4-1（基本定理）の条件「 <InlineMath math="F(x) = F(a) + \int_a^x F'(t) \, dt" /> 」をカントール関数 <InlineMath math="\phi" /> で検証する。
                        </p>
                        <p>
                            ほとんど至る所で <InlineMath math="\phi'(t) = 0" /> であるため、その積分は、
                            <BlockMath math="\int_0^1 \phi'(t) \, dt = \int_0^1 0 \, dt = 0" />
                            一方で、実際の関数値の差は <InlineMath math="\phi(1) - \phi(0) = 1 - 0 = 1" /> である。
                        </p>
                        <p>
                            したがって、 <InlineMath math="0 \ne 1" /> となり、基本定理は成立しない。
                            これはカントール関数が「連続かつ単調増加（有界変動）であるが、絶対連続ではない」ことに起因しており、連続性だけでは導関数から元の関数を復元できないことを示している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
