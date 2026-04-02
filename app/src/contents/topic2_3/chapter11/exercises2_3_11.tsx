import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter11() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="11" number={1}>
                    <p>
                        有限な有界閉区間 <InlineMath math="[a, b]" /> において、定積分と極限の順序交換（ Theorem 11.1-1 ）が成り立つための、関数列 <InlineMath math="\{f_n\}" /> に対する十分条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数列 <InlineMath math="\{f_n\}" /> が極限関数 <InlineMath math="f" /> に <b>一様収束</b> することである。
                            （この条件下で、各 <InlineMath math="f_n" /> がリーマン可積分であれば、<InlineMath math="f" /> も可積分であり、極限と積分の交換が保証される。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={2}>
                    <p>
                        <b>置換積分の定理</b>（ Theorem 11.2-1 ）の主張を記せ。特に、変換関数 <InlineMath math="\phi(t)" /> に要求される微分可能性の条件に注意せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="x = \phi(t)" /> が閉区間 <InlineMath math="[\alpha, \beta]" /> 上で <b><InlineMath math="C^1" /> 級</b>（微分可能であり、その導関数が連続）であるとする。
                            このとき、連続関数 <InlineMath math="f" /> に対して：
                            <BlockMath math="\int_{\phi(\alpha)}^{\phi(\beta)} f(x) dx = \int_\alpha^\beta f(\phi(t)) \phi'(t) dt" />
                            が成り立つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={3}>
                    <p>
                        <b>部分積分の定理</b>（ Theorem 11.3-1 ）の公式を記せ。また、この定理が微分法のどの法則の逆操作であるか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            2つの関数 <InlineMath math="f, g" /> が <InlineMath math="C^1" /> 級であるとき：
                            <BlockMath math="\int_a^b f(x) g'(x) dx = \left[ f(x)g(x) \right]_a^b - \int_a^b f'(x) g(x) dx" />
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            この定理は、微分法の <b>積の微分法則</b> （ライプニッツ則）の逆操作（積分の適用）である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="11" number={4}>
                    <p>
                        関数列 <InlineMath math="f_n(x) = \frac{x^n}{1+x}" /> が区間 <InlineMath math="[0, a]" /> （<InlineMath math="0 < a < 1" />）で <InlineMath math="0" /> に一様収束することを利用して、次の極限値を求めよ：
                        <BlockMath math="\lim_{n \to \infty} \int_0^a \frac{x^n}{1+x} dx" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            区間 <InlineMath math="[0, a]" /> において、<InlineMath math="0 \le f_n(x) \le a^n" /> であり、<InlineMath math="0 < a < 1" /> より <InlineMath math="a^n \to 0" /> なので一様収束する。
                            定積分と極限の交換定理を適用すると：
                        </p>
                        <BlockMath math="\begin{aligned} \lim_{n \to \infty} \int_0^a \frac{x^n}{1+x} dx &= \int_0^a \left( \lim_{n \to \infty} \frac{x^n}{1+x} \right) dx \\ &= \int_0^a 0 \, dx = 0 \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={5}>
                    <p>
                        置換積分（ <InlineMath math="x = \sin \theta" /> ）を用いて、次の値を求めよ：
                        <BlockMath math="\int_0^1 \sqrt{1-x^2} dx" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="x = \sin \theta" /> と置くと、<InlineMath math="dx = \cos \theta d\theta" />。
                            積分範囲は <InlineMath math="x: 0 \to 1" /> のとき <InlineMath math="\theta: 0 \to \pi/2" />。
                        </p>
                        <BlockMath math="\begin{aligned} \int_0^1 \sqrt{1-x^2} dx &= \int_0^{\pi/2} \sqrt{1-\sin^2 \theta} \cos \theta d\theta \\ &= \int_0^{\pi/2} \cos^2 \theta d\theta \\ &= \int_0^{\pi/2} \frac{1 + \cos 2\theta}{2} d\theta \\ &= \left[ \frac{\theta}{2} + \frac{\sin 2\theta}{4} \right]_0^{\pi/2} = \frac{\pi}{4} \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={6}>
                    <p>
                        部分積分を用いて、次の定積分の値を求めよ：
                        <BlockMath math="\int_1^e \log x dx" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            被積分関数を <InlineMath math="1 \cdot \log x" /> と見て部分積分を行う。
                        </p>
                        <BlockMath math="\begin{aligned} \int_1^e (x)' \log x dx &= \left[ x \log x \right]_1^e - \int_1^e x \cdot (1/x) dx \\ &= (e \log e - 1 \log 1) - \int_1^e 1 dx \\ &= e - [x]_1^e \\ &= e - (e - 1) = 1 \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={7}>
                    <p>
                        ウォリス積分の漸化式の導出過程（ Example 11.3-1 ）を参考に、次のウォリス積分の具体的な値を求めよ：
                        <BlockMath math="I_4 = \int_0^{\pi/2} \sin^4 x dx" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            漸化式 <InlineMath math="I_n = \frac{n-1}{n} I_{n-2}" /> を用いる。
                        </p>
                        <BlockMath math="I_0 = \int_0^{\pi/2} 1 dx = \frac{\pi}{2}" />
                        <BlockMath math="I_2 = \frac{2-1}{2} I_0 = \frac{1}{2} \cdot \frac{\pi}{2} = \frac{\pi}{4}" />
                        <BlockMath math="I_4 = \frac{4-1}{4} I_2 = \frac{3}{4} \cdot \frac{\pi}{4} = \frac{3\pi}{16}" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="11" number={8}>
                    <p>
                        置換積分の定理（ Theorem 11.2-1 ）を、微積分学の第2基本定理と合成関数の連鎖律を用いて厳密に証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proof ( Theorem 11.2-1 ) のロジックを構成する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                            <li><InlineMath math="f(x)" /> が連続であるため、原始関数 <InlineMath math="F(x)" /> が存在し、左辺は <InlineMath math="F(b) - F(a)" />。</li>
                            <li>合成関数 <InlineMath math="F(\phi(t))" /> の微分を考える。連鎖律より：
                                <BlockMath math="\frac{d}{dt} F(\phi(t)) = F'(\phi(t)) \phi'(t) = f(\phi(t)) \phi'(t)" />
                            </li>
                            <li>上式は、右辺の被積分関数 <InlineMath math="f(\phi(t)) \phi'(t)" /> の原始関数が <InlineMath math="F(\phi(t))" /> であることを示す。</li>
                            <li>右辺の定積分を第2基本定理を用いて計算する：
                                <BlockMath math="\int_\alpha^\beta f(\phi(t)) \phi'(t) dt = \left[ F(\phi(t)) \right]_\alpha^\beta = F(\phi(\beta)) - F(\phi(\alpha))" />
                            </li>
                            <li>端点の条件 <InlineMath math="\phi(\alpha) = a, \phi(\beta) = b" /> を代入すれば、左辺の結果と一致する。</li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={9}>
                    <p>
                        部分積分公式の厳密な証明を、積の微分法則と積分の線形性、微積分学の第2基本定理を用いて再現せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proof ( Theorem 11.3-1 ) のロジックを構成する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                            <li>積の微分法則を記す：
                                <BlockMath math="\frac{d}{dx}\{ f(x)g(x) \} = f'(x)g(x) + f(x)g'(x)" />
                            </li>
                            <li>両辺を閉区間 <InlineMath math="[a, b]" /> 上で定積分する。</li>
                            <li>左辺に対して積分の基本定理を、右辺に対して積分の線形性を適用する：
                                <BlockMath math="\left[ f(x)g(x) \right]_a^b = \int_a^b f'(x)g(x) dx + \int_a^b f(x)g'(x) dx" />
                            </li>
                            <li>第1項を右辺に移項して整理することにより、
                                <BlockMath math="\int_a^b f(x)g'(x) dx = [f(x)g(x)]_a^b - \int_a^b f'(x)g(x) dx" />
                                が示される。
                            </li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={10}>
                    <p>
                        広義積分（無限区間）における極限と積分の交換においては、一様収束性だけでなく、全体を抑え込む「優関数（フタ）」の存在（ Example 11.1-1 の考察 ）が必要な理由を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 11.1-1 （動く三角形）の反例が示唆する内容を述べる。
                        </p>
                        <ul className="list-disc list-inside space-y-4 text-slate-700 dark:text-slate-300">
                            <li>
                                <b>有限区間</b>の場合、一様収束は「関数の帯（誤差）」を全域で同時に縮小できるため、誤差の積計（積分）も必ずゼロに収束する。
                            </li>
                            <li>
                                <b>無限区間</b>の場合、波のしっぽの部分が極めて長く（あるいは無限に）続くため、局所的な誤差が小さくとも、それを無限の区間長で積み上げると、面積の総和が有限値に収束しなくなったり、予期せぬ値に化けたりする可能性がある。
                            </li>
                            <li>
                                したがって、全域を上から抑え込む可積分な <b>優関数 <InlineMath math="g(x)" /></b> （フタ）が存在して、それを超えないように制御されていなければ、極限と積分の順序交換の安全性が確保されない。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
