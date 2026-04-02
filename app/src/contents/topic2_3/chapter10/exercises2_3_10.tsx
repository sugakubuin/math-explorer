import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter10() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="10" number={1}>
                    <p>
                        <b>微積分学の第1基本定理</b>（ Theorem 10.1-1 ）の定義を記せ。特に、積分変数の上限を動かした関数 <InlineMath math="\Phi(x) = \int_a^x f(t) dt" /> の微分について述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, b]" /> 上で<b>連続</b>であるとき、
                            <BlockMath math="\Phi(x) = \int_a^x f(t) dt" />
                            は開区間 <InlineMath math="(a, b)" /> で微分可能であり、すべての <InlineMath math="x \in (a, b)" /> に対して次が成り立つ：
                            <BlockMath math="\Phi'(x) = f(x)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={2}>
                    <p>
                        <b>微積分学の第2基本定理</b>（ Theorem 10.1-2 / ニュートン・ライプニッツの公式）の主張を記せ。この定理により、定積分の計算がどのような操作に置き換わるか説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            連続関数 <InlineMath math="f" /> に対して、ある原始関数 <InlineMath math="F" /> （すなわち <InlineMath math="F' = f" />）が存在するとき、定積分について以下の等式が成り立つ：
                            <BlockMath math="\int_a^b f(x) dx = F(b) - F(a)" />
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            この定理により、極限としての面積計算である「定積分」を、微分の逆操作である「原始関数の値の差」によって直接求めることができるようになる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={3}>
                    <p>
                        <b>広義積分</b>（ Definition 10.3-1 ）の定義を、無限区間 <InlineMath math="[a, \infty)" /> の場合と、端点 <InlineMath math="b" /> で発散する非有界関数の場合に分けて記せ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-4 text-slate-700 dark:text-slate-300">
                            <li>
                                <b>無限区間の広義積分:</b>
                                <BlockMath math="\int_a^\infty f(x) dx = \lim_{R \to \infty} \int_a^R f(x) dx" />
                            </li>
                            <li>
                                <b>非有界関数の広義積分:</b>
                                <BlockMath math="\int_a^b f(x) dx = \lim_{\varepsilon \to +0} \int_a^{b-\varepsilon} f(x) dx" />
                            </li>
                        </ul>
                        <p className="mt-4">
                            （それぞれの右辺の極限が有限な値として存在するとき、広義積分は「収束する」という。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="10" number={4}>
                    <p>
                        次の関数の導関数を求めよ：
                        <BlockMath math="\Phi(x) = \int_0^x \sin(t^2) dt" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            被積分関数 <InlineMath math="f(t) = \sin(t^2)" /> は連続関数である。
                            微積分学の第1基本定理を直接適用することにより：
                        </p>
                        <BlockMath math="\Phi'(x) = \sin(x^2)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={5}>
                    <p>
                        広義積分の定義に基づき、次の値を求めよ（または発散することを示せ）：
                        <BlockMath math="\int_1^\infty \frac{1}{x^2} dx" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義通り、有限な端点 <InlineMath math="R" /> での定積分の極限を計算する。
                        </p>
                        <BlockMath math="\begin{aligned} \int_1^\infty \frac{1}{x^2} dx &= \lim_{R \to \infty} \int_1^R x^{-2} dx \\ &= \lim_{R \to \infty} \left[ -x^{-1} \right]_1^R \\ &= \lim_{R \to \infty} \left( -\frac{1}{R} + 1 \right) = 1 \end{aligned}" />
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            よって収束し、値は <InlineMath math="1" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={6}>
                    <p>
                        次の広義積分の収束判定を行え：
                        <BlockMath math="\int_0^1 \frac{1}{\sqrt{x}} dx" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            被積分関数は <InlineMath math="x \to 0" /> において非有界となる。定義に基づいて極限をとる。
                        </p>
                        <BlockMath math="\begin{aligned} \int_0^1 x^{-1/2} dx &= \lim_{\varepsilon \to +0} \int_\varepsilon^1 x^{-1/2} dx \\ &= \lim_{\varepsilon \to +0} \left[ 2x^{1/2} \right]_\varepsilon^1 \\ &= \lim_{\varepsilon \to +0} \left( 2 - 2\sqrt{\varepsilon} \right) = 2 \end{aligned}" />
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            極限が有限値として存在するため、収束する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={7}>
                    <p>
                        比較判定法（ Proposition 10.4-1 ）を用いて、広義積分 <InlineMath math="\int_1^\infty e^{-x^2} dx" /> が収束することを示せ（値は求めなくてよい）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            優関数（積分が収束することが既知の関数）と比較する。
                            <InlineMath math="x \ge 1" /> において、<InlineMath math="x^2 \ge x" /> であるから、指数関数の単調減少性より
                            <BlockMath math="0 \le e^{-x^2} \le e^{-x}" />
                            が成り立つ。
                        </p>
                        <p className="mt-4">
                            ここで優関数 <InlineMath math="e^{-x}" /> の広義積分を考えると：
                        </p>
                        <BlockMath math="\int_1^\infty e^{-x} dx = \lim_{R \to \infty} [-e^{-x}]_1^R = e^{-1} < \infty" />
                        <p className="mt-4">
                            優関数の積分が収束するため、比較判定法により元の広義積分も収束する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="10" number={8}>
                    <p>
                        第2基本定理（ <InlineMath math="\int_a^b F'(x) dx = F(b) - F(a)" /> ）を、第1基本定理の結果を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 10.1-2 の証明に準拠する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                            <li><InlineMath math="\Phi(x) = \int_a^x f(t) dt" /> と置くと、第1基本定理より <InlineMath math="\Phi'(x) = f(x)" /> である。</li>
                            <li>仮定より <InlineMath math="F" /> も <InlineMath math="F' = f" /> を満たす原始関数であるから、両者の差は定数となる：<InlineMath math="\Phi(x) = F(x) + C" />。</li>
                            <li><InlineMath math="x = a" /> のとき、<InlineMath math="\Phi(a) = \int_a^a f(t) dt = 0" /> であることから、<InlineMath math="0 = F(a) + C \implies C = -F(a)" />。</li>
                            <li>よって、<InlineMath math="\Phi(x) = F(x) - F(a)" /> となり、<InlineMath math="x = b" /> を代入すると：
                                <BlockMath math="\int_a^b f(t) dt = F(b) - F(a)" />
                                が示される。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={9}>
                    <p>
                        実数 <InlineMath math="p" /> の値に応じて、広義積分 <InlineMath math="\int_1^\infty \frac{1}{x^p} dx" /> がいつ収束し、いつ発散するか、定義に基づいて分類せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                <b><InlineMath math="p = 1" /> のとき:</b>
                                <BlockMath math="\int_1^R \frac{1}{x} dx = \log R \to \infty \quad (R \to \infty)" />
                                より、<b>発散する</b>。
                            </li>
                            <li>
                                <b><InlineMath math="p \neq 1" /> のとき:</b>
                                <BlockMath math="\int_1^R x^{-p} dx = \left[ \frac{x^{1-p}}{1-p} \right]_1^R = \frac{R^{1-p} - 1}{1-p}" />
                                ここで、
                                <ul className="list-none ml-8 mt-2 space-y-2">
                                    <li>・ <InlineMath math="p > 1" /> ならば、肩の指数 <InlineMath math="1-p < 0" /> なので <InlineMath math="R^{1-p} \to 0" /> となり、<b>収束する</b>。</li>
                                    <li>・ <InlineMath math="p < 1" /> ならば、肩の指数 <InlineMath math="1-p > 0" /> なので <InlineMath math="R^{1-p} \to \infty" /> となり、<b>発散する</b>。</li>
                                </ul>
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={10}>
                    <p>
                        微分法の連鎖律と微積分学の基本定理を組み合わせて、次の関数の導関数を求めよ：
                        <BlockMath math="G(x) = \int_x^{x^2} f(t) dt" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            積分の端点を分ける：
                            <BlockMath math="G(x) = \int_a^{x^2} f(t) dt - \int_a^x f(t) dt" />
                        </p>
                        <p className="mt-4">
                            第一項を <InlineMath math="\Phi(u) = \int_a^u f(t) dt" /> とおくと、<InlineMath math="\Phi(x^2)" /> である。
                            合成関数の微分公式（連鎖律）を適用すると：
                        </p>
                        <BlockMath math="\begin{aligned} \frac{d}{dx} \Phi(x^2) &= \Phi'(x^2) \cdot (x^2)' \\ &= f(x^2) \cdot 2x \end{aligned}" />
                        <p className="mt-4">
                            第二項の微分は単に <InlineMath math="f(x)" /> である。まとめると：
                        </p>
                        <BlockMath math="G'(x) = 2x f(x^2) - f(x)" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
