import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        関数列 <InlineMath math="\{f_n(x)\}" /> が <InlineMath math="f(x)" /> に<strong>一様収束</strong>することの定義（ Definition 7.2-1 ）を述べよ。また、各点収束の定義との論理的な違い（量化子の順序）を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="N" /> が存在して、区間内の<strong>すべての点 <InlineMath math="x" /> に対して同時に</strong>
                            <BlockMath math="n \geq N \implies |f_n(x) - f(x)| < \varepsilon" />
                            が成り立つことである。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            論理的な違いは、収束の速さを決める <InlineMath math="N" /> の選び方にある。
                            各点収束では <InlineMath math="N = N(\varepsilon, x)" /> のように点ごとに異なる番号を選んでよいが、一様収束では<strong>すべての点 <InlineMath math="x" /> に共通して通用する 大域的な番号 <InlineMath math="N = N(\varepsilon)" /></strong> を見つけなければならない点にある（§7.2 備考参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        <strong>連続性の保存定理</strong>（ Theorem 7.3-1 ）の主張を述べよ。また、各点収束のみではこの定理が成り立たない具体例を一つ挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            連続関数の列 <InlineMath math="\{f_n\}" /> が <InlineMath math="f" /> に一様収束するならば、極限関数 <InlineMath math="f" /> も連続である、という定理である。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            反例として、区間 <InlineMath math="[0, 1]" /> 上の関数列 <InlineMath math="f_n(x) = x^n" /> がある（ Example 7.1-1 ）。
                            これは各項が連続関数だが、各点極限関数は <InlineMath math="x=1" /> で不連続（値が <InlineMath math="0" /> から <InlineMath math="1" /> ヘ跳躍する）となる。一様収束していないことが原因である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        一様収束と積分の順序交換（ Theorem 7.3-2 ）の等式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f_n \to f" /> （一様）ならば、
                            <BlockMath math="\lim_{n \to \infty} \int_a^b f_n(x) dx = \int_a^b \left( \lim_{n \to \infty} f_n(x) \right) dx = \int_a^b f(x) dx" />
                            が成り立つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        有界区間 <InlineMath math="[0, 1]" /> 上の関数列 <InlineMath math="f_n(x) = \frac{x}{n}" /> が <InlineMath math="0" /> に一様収束することを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="\varepsilon > 0" /> をとる。アルキメデスの性質より、<InlineMath math="1/N < \varepsilon" /> となる自然数 <InlineMath math="N" /> が存在する。
                        </p>
                        <p className="mt-2">
                            このとき、任意の <InlineMath math="x \in [0, 1]" /> と <InlineMath math="n \geq N" /> に対して、
                            <BlockMath math="|f_n(x) - 0| = \left| \frac{x}{n} \right| \leq \frac{1}{n} \leq \frac{1}{N} < \varepsilon" />
                            が成り立つ。この <InlineMath math="N" /> は <InlineMath math="x" /> の選び方に依存しない。
                            よって、<InlineMath math="f_n" /> は <InlineMath math="0" /> に一様収束する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        関数列 <InlineMath math="f_n(x) = x^n" /> が <InlineMath math="[0, 1]" /> 上で一様収束しないことを、背理法を用いて簡潔に証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 7.2-1 の議論を再現する。
                            極限関数は <InlineMath math="f(x) = 0 \ (0 \le x < 1)" /> である。
                            一様収束すると仮定すると、<InlineMath math="\varepsilon = 1/2" /> に対し、ある <InlineMath math="N" /> があって、すべての <InlineMath math="0 \le x < 1" /> で <InlineMath math="x^N < 1/2" /> となるはずである。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            しかし、<InlineMath math="x \to 1-0" /> の極限をとると、左辺は <InlineMath math="1" /> に近づくため、<InlineMath math="1 \le 1/2" /> という矛盾が生じる。
                            よって一様収束しない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        Example 7.3-1 の「移動する三角形の山」の例（高さ <InlineMath math="2n" />、幅 <InlineMath math="1/n" />）において、各点極限の積分と積分の極限が一致しなかった理由を一様収束の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            この列の各点極限は恒等的に <InlineMath math="0" /> なので、その積分は <InlineMath math="0" /> である。一方、各項の積分（三角形の面積）は常に <InlineMath math="1" /> であるため、極限値も <InlineMath math="1" /> となる。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            一致しない理由は、この関数列が一様収束していないからである。具体的には、山の高さが無限に大きくなるため、どんなに大きな <InlineMath math="N" /> を選んでも、関数の最大値（<InlineMath math="2n" />）を一定の小さな幅 <InlineMath math="\varepsilon" /> の帯の中に抑え込むことができないためである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        関数列の一様収束を示すための実用的な判定法として、
                        <BlockMath math="\sup_{x \in I} |f_n(x) - f(x)| \to 0 \quad (n \to \infty)" />
                        が成り立つことと同値であることを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義によれば、すべての <InlineMath math="x" /> で誤差が <InlineMath math="\varepsilon" /> 未満であることが要求される。
                            これは、誤差の「最大値（または上限）」が <InlineMath math="\varepsilon" /> 未満、すなわち極限において <InlineMath math="0" /> に収束することと言い換えられる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        <strong>連続性の保存</strong>（ Theorem 7.3-1 ）の証明で用いられる「<InlineMath math="\varepsilon/3" /> 論法」の不等式評価を再現し、なぜ一様収束性が不可欠なのか説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            次の分割を用いる：
                            <BlockMath math="\begin{aligned} |f(x) - f(a)| \leq |f(x) - f_N(x)| + &|f_N(x) - f_N(a)| \\ &+ |f_N(a) - f(a)| \end{aligned}" />
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            1番目と3番目の項を一括で <InlineMath math="\varepsilon/3" /> 未満にするためには、点 <InlineMath math="x" /> に依存しない共通の番号 <InlineMath math="N" /> を選ぶ必要がある。これが<strong>一様収束</strong>の役割である。
                            もし各点収束であれば、1番目の項を小さくするための <InlineMath math="N" /> が <InlineMath math="x" /> の動きに合わせて変わってしまい、2番目の項（<InlineMath math="f_N" /> の連続性）で選ぶべき <InlineMath math="\delta" /> を固定することができなくなるからである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        一様収束するからといって、微分と極限が交換できるとは限らないことを、
                        <BlockMath math="f_n(x) = \frac{\sin(nx)}{\sqrt{n}}" />
                        の例（ Example 7.4-1 ）を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. <b>一様収束性</b>: <InlineMath math="|f_n(x) - 0| \le 1/\sqrt{n} \to 0" /> なので、<InlineMath math="f_n \to 0" /> （一様）。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            2. <b>微分の破綻</b>: 原点での微分係数を計算すると、
                            <BlockMath math="f'_n(x) = \sqrt{n} \cos(nx) \implies f'_n(0) = \sqrt{n} \to \infty" />
                            となり、発散する。極限関数 <InlineMath math="f(x)=0" /> の微分は <InlineMath math="0" /> なので、一致しない。
                        </p>
                        <p className="mt-2">
                            この原因は、関数自体が小さくてもその振動（傾き）が極端に大きくなっているためであり、微分を交換するには<strong>導関数列 <InlineMath math="f'_n" /> 自体の一様収束</strong>が必要となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        一様収束と微分の交換定理（ Theorem 7.4-1 ）の証明において、なぜ「積分」を経由して証明を進めることが可能なのか、その論理的な動機を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            直接微分の極限を扱うのは困難だが、微積分の基本定理
                            <BlockMath math="f_n(x) = f_n(x_0) + \int_{x_0}^x f'_n(t) dt" />
                            を用いることで、微分の問題を「積分の極限」の問題に変換できるからである。
                            積分であれば、「導関数の一様収束」という仮定から、前節の定理 7.3-2 により極限と積分の順序交換が正当化され、最終的に微積分学の基本定理で微分に戻すことで目的の結論を得られるためである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
