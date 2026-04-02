import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_2_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        関数 <InlineMath math="f(x) = x^2" /> について、<InlineMath math="x" /> が <InlineMath math="1" /> から <InlineMath math="1+h" /> まで変化するときの差分商（平均変化率）を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-1 より、差分商は <InlineMath math="\frac{f(x+h) - f(x)}{h}" /> で与えられる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \frac{f(1+h) - f(1)}{h} &= \frac{(1+h)^2 - 1^2}{h} \\
                            &= \frac{(1 + 2h + h^2) - 1}{h} \\
                            &= \frac{2h + h^2}{h} \\
                            &= 2 + h
                            \end{aligned}
                        " />
                        <p>
                            よって、差分商は <InlineMath math="2 + h" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        次の関数の導関数を、Proposition 2.1-1 （基本関数の導関数）などの公式を用いて求めよ。
                    </p>
                    <p className="mt-2">(1) <InlineMath math="y = x^5" /> &nbsp;&nbsp;&nbsp; (2) <InlineMath math="y = e^x" /> &nbsp;&nbsp;&nbsp; (3) <InlineMath math="y = \sin x" /> &nbsp;&nbsp;&nbsp; (4) <InlineMath math="y = \log x" /></p>
                    <ExerciseSolution>
                        <p>
                            Proposition 2.1-1 の公式に当てはめる。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>(1)</strong> べき関数の微分：<InlineMath math="(x^\alpha)' = \alpha x^{\alpha - 1}" /> より、<InlineMath math="y' = 5x^4" /></li>
                            <li><strong>(2)</strong> 指数関数の微分：<InlineMath math="(e^x)' = e^x" /> より、<InlineMath math="y' = e^x" /></li>
                            <li><strong>(3)</strong> 三角関数の微分：<InlineMath math="(\sin x)' = \cos x" /> より、<InlineMath math="y' = \cos x" /></li>
                            <li><strong>(4)</strong> 対数関数の微分：<InlineMath math="(\log x)' = \frac{1}{x}" /> より、<InlineMath math="y' = \frac{1}{x}" /></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        関数 <InlineMath math="f(x) = x^4" /> の第3次導関数 <InlineMath math="f'''(x)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.4-1 に従い、順次微分していく。
                        </p>
                        <BlockMath math="f'(x) = 4x^3" />
                        <BlockMath math="f''(x) = (f'(x))' = 4 \cdot 3x^2 = 12x^2" />
                        <BlockMath math="f'''(x) = (f''(x))' = 12 \cdot 2x = 24x" />
                        <p>
                            よって、<InlineMath math="f'''(x) = 24x" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        積の微分法則（Theorem 2.2-1）を用いて、次の関数の導関数を求めよ。
                    </p>
                    <BlockMath math="y = x^3 e^x" />
                    <ExerciseSolution>
                        <p>
                            Theorem 2.2-1 より、<InlineMath math="\{f(x)g(x)\}' = f'(x)g(x) + f(x)g'(x)" /> を用いる。
                        </p>
                        <p>
                            <InlineMath math="f(x) = x^3, g(x) = e^x" /> とすると、
                            <InlineMath math="f'(x) = 3x^2, g'(x) = e^x" /> である。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            y' &= (x^3)' \cdot e^x + x^3 \cdot (e^x)' \\
                            &= 3x^2 e^x + x^3 e^x \\
                            &= x^2 e^x (x + 3)
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        商の微分法則（Proposition 2.2-2）を用いて、次の関数の導関数を求めよ。
                    </p>
                    <BlockMath math="y = \frac{\log x}{x}" />
                    <ExerciseSolution>
                        <p>
                            Proposition 2.2-2 より、<InlineMath math="\left\{ \frac{f(x)}{g(x)} \right\}' = \frac{f'(x)g(x) - f(x)g'(x)}{\{g(x)\}^2}" /> を用いる。
                        </p>
                        <p>
                            <InlineMath math="f(x) = \log x, g(x) = x" /> とすると、
                            <InlineMath math="f'(x) = \frac{1}{x}, g'(x) = 1" /> である。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            y' &= \frac{(\log x)' \cdot x - (\log x) \cdot (x)'}{x^2} \\
                            &= \frac{\frac{1}{x} \cdot x - (\log x) \cdot 1}{x^2} \\
                            &= \frac{1 - \log x}{x^2}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        連鎖律（Theorem 2.3-1）を用いて、次の関数の導関数を求めよ。
                    </p>
                    <BlockMath math="y = \cos(x^2 + 1)" />
                    <ExerciseSolution>
                        <p>
                            Theorem 2.3-1 より、<InlineMath math="\{f(g(x))\}' = f'(g(x)) \cdot g'(x)" /> を用いる。
                        </p>
                        <p>
                            <InlineMath math="u = x^2 + 1" /> とおくと、<InlineMath math="y = \cos u" /> となる。
                        </p>
                        <p>
                            <InlineMath math="\frac{dy}{du} = -\sin u, \quad \frac{du}{dx} = 2x" /> であるから、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            y' &= \frac{dy}{du} \cdot \frac{du}{dx} \\
                            &= -\sin u \cdot (2x) \\
                            &= -2x \sin(x^2 + 1)
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        次の極限を、ロピタルの定理（Theorem 2.5-1）を用いて求めよ。
                    </p>
                    <BlockMath math="\lim_{x \to 0} \frac{1 - \cos x}{x^2}" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="x \to 0" /> のとき、分子は <InlineMath math="1 - \cos 0 = 0" />、分母は <InlineMath math="0^2 = 0" /> となり、<InlineMath math="0/0" /> 型の不定形であるため、ロピタルの定理を適用できる。
                        </p>
                        <p>分子・分母をそれぞれ <InlineMath math="x" /> で微分する。</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>分子：<InlineMath math="(1 - \cos x)' = \sin x" /></li>
                            <li>分母：<InlineMath math="(x^2)' = 2x" /></li>
                        </ul>
                        <BlockMath math="\lim_{x \to 0} \frac{1 - \cos x}{x^2} \stackrel{\mathrm{L'H}}{=} \lim_{x \to 0} \frac{\sin x}{2x}" />
                        <p>
                            ここで、再び <InlineMath math="x \to 0" /> のとき分子 <InlineMath math="\sin 0 = 0" />、分母 <InlineMath math="2(0) = 0" /> となり <InlineMath math="0/0" /> 型であるため、もう一度ロピタルの定理を適用する。
                        </p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>分子：<InlineMath math="(\sin x)' = \cos x" /></li>
                            <li>分母：<InlineMath math="(2x)' = 2" /></li>
                        </ul>
                        <BlockMath math="\lim_{x \to 0} \frac{\sin x}{2x} \stackrel{\mathrm{L'H}}{=} \lim_{x \to 0} \frac{\cos x}{2} = \frac{\cos 0}{2} = \frac{1}{2}" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        関数 <InlineMath math="y = x \sin x" /> の第 <InlineMath math="n" /> 次導関数 <InlineMath math="y^{(n)}" /> を、ライプニッツの公式（Theorem 2.4-1）を用いて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.4-1 より、<InlineMath math="(uv)^{(n)} = \sum_{k=0}^{n} \binom{n}{k} u^{(n-k)} v^{(k)}" /> を用いる。
                        </p>
                        <p>
                            <InlineMath math="u(x) = \sin x, v(x) = x" /> とおく。
                        </p>
                        <p>
                            <InlineMath math="v(x)" /> の高階導関数を考えると、<InlineMath math="v^{(0)}(x) = x, v^{(1)}(x) = 1" /> であり、<InlineMath math="k \geq 2" /> に対して <InlineMath math="v^{(k)}(x) = 0" /> となる。
                        </p>
                        <p>
                            <InlineMath math="u(x)" /> の高階導関数は、<InlineMath math="u^{(m)}(x) = \sin\left(x + \frac{m\pi}{2}\right)" /> と表せる。
                        </p>
                        <p>
                            したがって、ライプニッツの公式において <InlineMath math="k=0" /> と <InlineMath math="k=1" /> の項のみが残る。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            (x \sin x)^{(n)} &= \binom{n}{0} u^{(n)}(x) v^{(0)}(x) + \binom{n}{1} u^{(n-1)}(x) v^{(1)}(x) \\
                            &= 1 \cdot \sin\left(x + \frac{n\pi}{2}\right) \cdot x \\ &\qquad + n \cdot \sin\left(x + \frac{(n-1)\pi}{2}\right) \cdot 1 \\
                            &= x \sin\left(x + \frac{n\pi}{2}\right) + n \sin\left(x + \frac{(n-1)\pi}{2}\right)
                            \end{aligned}
                        " />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        関数 <InlineMath math="y = x^3 - 3x^2 + 1" /> について、以下の問いに答えよ。
                    </p>
                    <p className="mt-2">(1) 導関数 <InlineMath math="y'" /> と第2次導関数 <InlineMath math="y''" /> を求めよ。</p>
                    <p className="mt-2">(2) 増減、極値、グラフの凹凸、および変曲点を調べ、増減表を作成せよ。</p>
                    <ExerciseSolution>
                        <p><strong>(1)</strong></p>
                        <BlockMath math="y' = 3x^2 - 6x = 3x(x - 2)" />
                        <BlockMath math="y'' = 6x - 6 = 6(x - 1)" />
                        
                        <p className="mt-4"><strong>(2)</strong></p>
                        <p>
                            <InlineMath math="y' = 0" /> となる <InlineMath math="x" /> は、<InlineMath math="3x(x - 2) = 0" /> より <InlineMath math="x = 0, 2" /> である。
                        </p>
                        <p>
                            <InlineMath math="y'' = 0" /> となる <InlineMath math="x" /> は、<InlineMath math="6(x - 1) = 0" /> より <InlineMath math="x = 1" /> である。
                        </p>
                        <p>これらを元に増減表を作成する。</p>

                        <div className="overflow-x-auto mt-2">
                            <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 text-center">
                                <thead>
                                    <tr className="bg-slate-100 dark:bg-slate-800">
                                        <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="x" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="\cdots" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="0" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="\cdots" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="1" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="\cdots" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="2" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="\cdots" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold"><InlineMath math="y'" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="+" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="0" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="0" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="+" /></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold"><InlineMath math="y''" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="-" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="0" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="+" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="+" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="+" /></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold"><InlineMath math="y" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">⤴</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">1 (極大)</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">⤵</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">-1 (変曲点)</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">⤵</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">-3 (極小)</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">⤴</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        陰関数定理（Proposition 2.3-2）を用いて、双曲線 <InlineMath math="\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1" /> （<InlineMath math="a > 0, b > 0" />）上の点 <InlineMath math="(x_1, y_1)" /> における接線の方程式を求めよ。<br />
                        （ただし <InlineMath math="y_1 \neq 0" /> とする。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            方程式の両辺を <InlineMath math="x" /> で微分する。このとき、<InlineMath math="y" /> は <InlineMath math="x" /> の関数とみなして連鎖律を適用する。
                        </p>
                        <BlockMath math="\frac{d}{dx}\left(\frac{x^2}{a^2}\right) - \frac{d}{dx}\left(\frac{y^2}{b^2}\right) = \frac{d}{dx}(1)" />
                        <BlockMath math="\frac{2x}{a^2} - \frac{2y}{b^2} \cdot y' = 0" />
                        <p>
                            これを <InlineMath math="y'" /> について解く（<InlineMath math="y \neq 0" /> より）。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \frac{2y}{b^2} y' &= \frac{2x}{a^2} \\
                            y' &= \frac{b^2 x}{a^2 y}
                            \end{aligned}
                        " />
                        <p>
                            したがって、点 <InlineMath math="(x_1, y_1)" /> における接線の傾きは <InlineMath math="\frac{b^2 x_1}{a^2 y_1}" /> となる。
                        </p>
                        <p>
                            接線の方程式は、傾きと通過点 <InlineMath math="(x_1, y_1)" /> より、
                        </p>
                        <BlockMath math="y - y_1 = \frac{b^2 x_1}{a^2 y_1} (x - x_1)" />
                        <p>
                            分母を払って整理すると、
                        </p>
                        <BlockMath math="a^2 y_1 y - a^2 y_1^2 = b^2 x_1 x - b^2 x_1^2" />
                        <BlockMath math="b^2 x_1 x - a^2 y_1 y = b^2 x_1^2 - a^2 y_1^2" />
                        <p>
                            両辺を <InlineMath math="a^2 b^2" /> で割る。
                        </p>
                        <BlockMath math="\frac{x_1 x}{a^2} - \frac{y_1 y}{b^2} = \frac{x_1^2}{a^2} - \frac{y_1^2}{b^2}" />
                        <p>
                            点 <InlineMath math="(x_1, y_1)" /> は双曲線 <InlineMath math="\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1" /> 上の点であるため、右辺は <InlineMath math="1" /> に等しい。
                        </p>
                        <p>
                            よって、接線の方程式は次のように得られる。
                        </p>
                        <BlockMath math="\frac{x_1 x}{a^2} - \frac{y_1 y}{b^2} = 1" />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
