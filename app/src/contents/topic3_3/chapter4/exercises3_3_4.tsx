import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_3_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        可測関数 <InlineMath math="f" /> が <b><InlineMath math="p" /> 乗可積分</b> であることの定義と、その <b><InlineMath math="L^p" /> ノルム</b> <InlineMath math="\|f\|_p" /> の定義式を記せ（ <InlineMath math="1 \leq p < \infty" /> ）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.1-1, 4.1-2 に基づき、以下が成り立つときをいう。
                        </p>
                        <BlockMath math="\int_X |f(x)|^p \, d\mu(x) < \infty" />
                        <p>
                            ノルムは、次で定義される。
                        </p>
                        <BlockMath math="\|f\|_p = \left( \int_X |f(x)|^p \, d\mu(x) \right)^{1/p}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        <b>本質的上限</b> (essential supremum) とは何を意味するか。 <InlineMath math="L^\infty" /> ノルムの定義に関連付けて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.2-1（本質的上限）に基づき、測度 0 の集合を除いた領域での上限を指す。
                        </p>
                        <BlockMath math="\text{ess sup} |f(x)| = \inf \{ C \ge 0 \mid |f(x)| \le C \text{ a.e.} \}" />
                        <p>
                            これは <InlineMath math="L^\infty" /> 空間におけるノルムであり、通常の連続関数の最大値（一様ノルム）を一般の可測関数へと拡張したものである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        ヘルダーの不等式において用いられる <b>共役指数</b> (conjugate exponent) の関係式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            指数 <InlineMath math="p" /> に対して、共役指数 <InlineMath math="q" /> は次を満たす（ Theorem 4.3-1 ）。
                        </p>
                        <BlockMath math="\frac{1}{p} + \frac{1}{q} = 1" />
                        <p className="mt-2 text-sm text-slate-500">
                            ※ <InlineMath math="p=1" /> のときは <InlineMath math="q=\infty" /> と解釈し、 <InlineMath math="p=2" /> のときは自明に <InlineMath math="q=2" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        実数直線上のルベーグ測度を考え、 <InlineMath math="X = [0, 1]" /> とする。
                        関数 <InlineMath math="f(x) = \frac{1}{\sqrt{x}}" /> は、 <InlineMath math="L^1(X)" /> および <InlineMath math="L^2(X)" /> に属するか判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 4.1-1 の議論に従い、各べき乗が積分可能かを確認する。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                             <li>
                                <b><InlineMath math="L^1" /> の場合</b>: <InlineMath math="\int_0^1 |x^{-1/2}|^1 dx = \int_0^1 x^{-1/2} dx = [2x^{1/2}]_0^1 = 2 < \infty" />。
                                したがって <b><InlineMath math="L^1" /> に属する</b>。
                            </li>
                            <li>
                                <b><InlineMath math="L^2" /> の場合</b>: <InlineMath math="\int_0^1 |x^{-1/2}|^2 dx = \int_0^1 x^{-1} dx = [\log |x|]_0^1 = \infty" /> （発散）。
                                したがって <b><InlineMath math="L^2" /> には属さない</b>。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        <b>コーシー・シュワルツの不等式</b> がヘルダーの不等式（ Theorem 4.3-1 ）の特殊ケースであることを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ヘルダーの不等式において指数を <b><InlineMath math="p = 2" /></b> とすると、その共役指数は <InlineMath math="q = 2" /> となる。
                        </p>
                        <p>
                             このとき不等式は以下のようになる：
                        </p>
                        <BlockMath math="\int_X |fg| \, d\mu \leq \|f\|_2 \|g\|_2" />
                        <p className="mt-2 text-sm">
                            これは、内積空間におけるシュワルツの不等式そのものである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        関数 <InlineMath math="f, g \in L^p" /> に対して、 <b>ミンコフスキーの不等式</b>
                        <BlockMath math="\|f + g\|_p \leq \|f\|_p + \|g\|_p" />
                        が成り立つ。これがバナッハ空間の3公理のうち、どの公理を保証しているか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ノルムの定義における <b>三角不等式</b> (triangle inequality) を保証している。
                        </p>
                        <p>
                            この不等式が成り立つことにより、 <InlineMath math="L^p" /> 空間において「和の大きさは各々の大きさの和を超えない」という幾何学的な構造が担保される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        関数 <InlineMath math="f(x) = \sin x" /> の <InlineMath math="L^\infty(\mathbb{R})" /> ノルムを求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="L^\infty" /> ノルムは本質的上限（ Definition 4.2-1 ）である。
                            ほとんど全ての点、特に連続関数の場合はすべてにおいて <InlineMath math="|\sin x| \le 1" /> が成り立ち、かつ値 1 をとる（または近づく）点が存在する。
                        </p>
                        <p>
                             したがって、 <InlineMath math="\|f\|_\infty = \text{ess sup} |\sin x| =" /> <b>1</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        <b>リース・フィッシャーの定理</b> (Theorem 4.4-1) の意義を、関数空間の構造（完備性）の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            この定理は、 <InlineMath math="L^p" /> 空間がコーシー列に対して常に極限を持つこと、すなわち <b>完備性</b> (completeness) を備えた <b>バナッハ空間</b> であることを保証している。
                        </p>
                        <p>
                             リーマン積分で同様の空間を考えた場合、完備ではなく、関数列の収束先が再び空間に属するとは限らない。
                             ルベーグ積分論に基づく <InlineMath math="L^p" /> 空間が完備であるという事実は、関数をベクトルとして扱い、極限操作（フーリエ級数や微分方程式の解）を関数空間の内部で議論できることを正当化する、近代解析学の土台である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        有限測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" />（例： <InlineMath math="\mu(X)=1" /> ）において、 <InlineMath math="1 \le p < q \le \infty" /> ならば <b><InlineMath math="L^q(X, \mu) \subset L^p(X, \mu)" /></b> であることを、ヘルダーの不等式を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f \in L^q(X, \mu)" /> とし、ヘルダーの不等式を <InlineMath math="f^p" /> と定数関数 <InlineMath math="1" /> に適用する。
                            指数を <InlineMath math="r = q/p > 1" /> とし、共役指数を <InlineMath math="r'" /> とすると：
                        </p>
                        <BlockMath math="\int_X |f|^p \cdot 1 \, d\mu \le \left( \int_X (|f|^p)^r d\mu \right)^{1/r} \left( \int_X 1^{r'} d\mu \right)^{1/r'}" />
                        <p>
                             整理すると、
                        </p>
                        <BlockMath math="\int_X |f|^p \, d\mu \le \left( \int_X |f|^q d\mu \right)^{p/q} \cdot \mu(X)^{1/r'}" />
                        <p>
                             右辺は有限であるため、 <InlineMath math="f \in L^p" /> となる。
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            ※ つまり、有限の「容器」を考える限り、厳しい条件の積分（ <InlineMath math="q" /> 乗可積分）を満たす関数は、緩い条件の積分（ <InlineMath math="p" /> 乗可積分）も満たす。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        <InlineMath math="L^2" /> 空間において、 <b>中線定理</b> (Parallelogram Law)
                        <BlockMath math="\|f + g\|_2^2 + \|f - g\|_2^2 = 2(\|f\|_2^2 + \|g\|_2^2)" />
                        が成り立つことを、内積の定義（ Definition 4.6-1 ）を用いて導け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            内積 <InlineMath math="\langle f, g \rangle = \int_X f \bar{g} \, d\mu" /> と、ノルム <InlineMath math="\|f\|_2^2 = \langle f, f \rangle" /> の関係を用いる。
                        </p>
                        <BlockMath math="\begin{aligned} \|f+g\|_2^2 &= \langle f+g, f+g \rangle = \langle f,f \rangle + \langle f,g \rangle + \langle g,f \rangle + \langle g,g \rangle \\ \|f-g\|_2^2 &= \langle f-g, f-g \rangle = \langle f,f \rangle - \langle f,g \rangle - \langle g,f \rangle + \langle g,g \rangle \end{aligned}" />
                        <p>
                            両辺を足すと、交差項 <InlineMath math="\langle f,g \rangle" /> 等が相殺され：
                        </p>
                        <BlockMath math="\|f+g\|_2^2 + \|f-g\|_2^2 = 2\langle f,f \rangle + 2\langle g,g \rangle = 2(\|f\|_2^2 + \|g\|_2^2)" />
                        <p>
                            が得られる。これにより <InlineMath math="L^2" /> が単なるバナッハ空間ではなく、ヒルベルト空間であるための幾何学的特徴（ Theorem 4.6-1 ）が示される。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
