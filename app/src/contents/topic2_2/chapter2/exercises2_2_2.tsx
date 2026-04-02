import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        ロルの定理（Theorem 2.1-2）が成り立つために必要な、関数 <InlineMath math="f(x)" /> が満たすべき3つの仮定をすべて挙げよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li><InlineMath math="f" /> は閉区間 <InlineMath math="[a, b]" /> 上で連続である。</li>
                            <li><InlineMath math="f" /> は開区間 <InlineMath math="(a, b)" /> 上で微分可能である。</li>
                            <li>両端点での値が等しい（<InlineMath math="f(a) = f(b)" />）。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        ラグランジュの平均値定理（Theorem 2.2-1）の主張を数式を用いて述べよ。また、その幾何学的な意味を簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p><strong>主張：</strong></p>
                        <p>関数 <InlineMath math="f" /> が <InlineMath math="[a, b]" /> で連続、<InlineMath math="(a, b)" /> で微分可能なとき、ある <InlineMath math="c \in (a, b)" /> が存在して、</p>
                        <BlockMath math="f'(c) = \frac{f(b) - f(a)}{b - a}" />
                        <p>が成り立つ。</p>
                        <p className="mt-4"><strong>幾何学的な意味：</strong></p>
                        <p>区間の両端点 <InlineMath math="(a, f(a))" /> と <InlineMath math="(b, f(b))" /> を結ぶ直線（割線）と平行な接線が、区間内のどこか（<InlineMath math="x = c" />）に少なくとも一つ引けること。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        コーシーの平均値定理（Theorem 2.3-1）において、ある特別な関数 <InlineMath math="g(x)" /> を選ぶとラグランジュの平均値定理と完全に一致する。その関数 <InlineMath math="g(x)" /> とは何であるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="g(x) = x" /> （恒等関数）
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            （解説：<InlineMath math="g(x) = x" /> のとき <InlineMath math="g'(x) = 1" />、<InlineMath math="g(b) - g(a) = b - a" /> となり、コーシーの平均値定理の式に代入するとラグランジュの平均値定理の式が得られる。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        関数 <InlineMath math="f(x) = x^3 - 3x^2 + 2x + 5" /> について、区間 <InlineMath math="[0, 2]" /> においてラグランジュの平均値定理を満たす <InlineMath math="c" /> の値をすべて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(x)" /> は多項式であるため、<InlineMath math="[0, 2]" /> で連続かつ <InlineMath math="(0, 2)" /> で微分可能である。
                        </p>
                        <p>
                            まず、両端点の値を計算する。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><InlineMath math="f(0) = 5" /></li>
                            <li><InlineMath math="f(2) = 2^3 - 3(2^2) + 2(2) + 5 = 8 - 12 + 4 + 5 = 5" /></li>
                        </ul>
                        <p>
                            （両端点の値が等しいため、実質的にロルの定理の条件を満たしている。）
                        </p>
                        <p>
                            次に、導関数を求める。
                        </p>
                        <BlockMath math="f'(x) = 3x^2 - 6x + 2" />
                        <p>
                            平均値定理より、<InlineMath math="f'(c) = \frac{f(2) - f(0)}{2 - 0} = \frac{5 - 5}{2} = 0" /> となる <InlineMath math="c" /> を探す。
                        </p>
                        <BlockMath math="3c^2 - 6c + 2 = 0" />
                        <p>
                            解の公式より、
                        </p>
                        <BlockMath math="c = \frac{6 \pm \sqrt{36 - 24}}{6} = \frac{6 \pm \sqrt{12}}{6} = 1 \pm \frac{\sqrt{3}}{3}" />
                        <p>
                            <InlineMath math="\sqrt{3} \approx 1.732" /> より <InlineMath math="\frac{\sqrt{3}}{3} \approx 0.577" />。したがって <InlineMath math="c \approx 1 \pm 0.577" /> となり、どちらの解も開区間 <InlineMath math="(0, 2)" /> に含まれている。
                        </p>
                        <p>
                            よって、求める値は <InlineMath math="c = 1 \pm \frac{\sqrt{3}}{3}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        ロピタルの定理を用いて、次の極限を求めよ。
                    </p>
                    <BlockMath math="\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}" />
                <ExerciseSolution>
                    <p>
                        <InlineMath math="x \to 0" /> のとき、分子は <InlineMath math="e^0 - 1 - 0 = 0" />、分母は <InlineMath math="0^2 = 0" /> となり、<InlineMath math="\frac{0}{0}" /> 型の不定形である。よってロピタルの定理を適用する。
                    </p>
                    <BlockMath math="\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{\frac{d}{dx}(e^x - 1 - x)}{\frac{d}{dx}(x^2)} = \lim_{x \to 0} \frac{e^x - 1}{2x}" />
                    <p>
                        再び <InlineMath math="x \to 0" /> とすると、分子 <InlineMath math="e^0 - 1 = 0" />、分母 <InlineMath math="2(0) = 0" /> となり、また <InlineMath math="\frac{0}{0}" /> 型の不定形であるため、もう一度ロピタルの定理を適用する。
                    </p>
                    <BlockMath math="\lim_{x \to 0} \frac{e^x - 1}{2x} = \lim_{x \to 0} \frac{\frac{d}{dx}(e^x - 1)}{\frac{d}{dx}(2x)} = \lim_{x \to 0} \frac{e^x}{2}" />
                    <p>
                        この極限は不定形ではないため、そのまま <InlineMath math="x = 0" /> を代入して計算できる。
                    </p>
                    <BlockMath math="\lim_{x \to 0} \frac{e^x}{2} = \frac{e^0}{2} = \frac{1}{2}" />
                    <p>
                        よって、求める極限は <InlineMath math="\frac{1}{2}" /> である。
                    </p>
                </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        次の極限を適切な変形を行ってからロピタルの定理を用いて求めよ。
                    </p>
                    <BlockMath math="\lim_{x \to 0+} x \ln x" />
                <ExerciseSolution>
                    <p>
                        <InlineMath math="x \to 0+" /> のとき、<InlineMath math="x \to 0" /> かつ <InlineMath math="\ln x \to -\infty" /> であるため、これは <InlineMath math="0 \cdot (-\infty)" /> 型の不定形である。
                        ロピタルの定理を適用するために、分数（<InlineMath math="\frac{\infty}{\infty}" /> 型）に変形する。
                    </p>
                    <BlockMath math="\lim_{x \to 0+} x \ln x = \lim_{x \to 0+} \frac{\ln x}{1/x}" />
                    <p>
                        これで分子が <InlineMath math="-\infty" />、分母が <InlineMath math="\infty" /> となるので、ロピタルの定理を適用する。
                    </p>
                    <BlockMath math="\lim_{x \to 0+} \frac{\ln x}{x^{-1}} = \lim_{x \to 0+} \frac{\frac{d}{dx}(\ln x)}{\frac{d}{dx}(x^{-1})} = \lim_{x \to 0+} \frac{\frac{1}{x}}{-x^{-2}}" />
                    <p>
                        この式を整理する。
                    </p>
                    <BlockMath math="\lim_{x \to 0+} \frac{\frac{1}{x}}{-\frac{1}{x^2}} = \lim_{x \to 0+} \left( \frac{1}{x} \cdot (-x^2) \right) = \lim_{x \to 0+} (-x) = 0" />
                    <p>
                        よって、求める極限は <InlineMath math="0" /> である。
                    </p>
                </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        平均値定理を用いて、<InlineMath math="0 < a < b" /> である任意の2つの実数 <InlineMath math="a, b" /> について、次の不等式が成り立つことを証明せよ。
                    </p>
                    <BlockMath math="\frac{b - a}{b} < \ln b - \ln a < \frac{b - a}{a}" />
                <ExerciseSolution>
                    <p>
                        関数 <InlineMath math="f(x) = \ln x" /> は、区間 <InlineMath math="[a, b]" /> （<InlineMath math="0 < a < b" />）上で連続であり、開区間 <InlineMath math="(a, b)" /> 上で微分可能である。
                    </p>
                    <p>
                        導関数は <InlineMath math="f'(x) = \frac{1}{x}" /> である。
                    </p>
                    <p>
                        ラグランジュの平均値定理により、ある <InlineMath math="c \in (a, b)" /> が存在して次が成り立つ。
                    </p>
                    <BlockMath math="\frac{\ln b - \ln a}{b - a} = f'(c) = \frac{1}{c}" />
                    <p>
                        ここで、<InlineMath math="c" /> は <InlineMath math="a < c < b" /> を満たす。各辺はすべて正であるから、逆数をとると大小関係が反転する。
                    </p>
                    <BlockMath math="\frac{1}{b} < \frac{1}{c} < \frac{1}{a}" />
                    <p>
                        この不等式の真ん中を <InlineMath math="\frac{\ln b - \ln a}{b - a}" /> に置き換える。
                    </p>
                    <BlockMath math="\frac{1}{b} < \frac{\ln b - \ln a}{b - a} < \frac{1}{a}" />
                    <p>
                        仮定より <InlineMath math="b - a > 0" /> なので、各辺に <InlineMath math="b - a" /> を掛けても大小関係は変わらない。
                    </p>
                    <BlockMath math="\frac{b - a}{b} < \ln b - \ln a < \frac{b - a}{a}" />
                    <p>
                        以上より、示された。
                    </p>
                    <p className="text-right"><InlineMath math="\square" /></p>
                </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        関数 <InlineMath math="f" /> が <InlineMath math="[0, \infty)" /> 上で微分可能であり、すべての <InlineMath math="x > 0" /> に対して <InlineMath math="f'(x) \leq 1" /> が成り立つとする。さらに <InlineMath math="f(0) = 0" /> である。<br />
                        このとき、すべての <InlineMath math="x \geq 0" /> に対して <InlineMath math="f(x) \leq x" /> が成り立つことを、平均値定理を用いて証明せよ。
                    </p>
                <ExerciseSolution>
                    <p>
                        <InlineMath math="x = 0" /> のときは <InlineMath math="f(0) = 0 \leq 0" /> であり自明に成り立つ。<InlineMath math="x > 0" /> の場合を考える。
                    </p>
                    <p>
                        関数 <InlineMath math="f" /> は区間 <InlineMath math="[0, x]" /> で連続（微分可能なので連続）、開区間 <InlineMath math="(0, x)" /> で微分可能である。
                    </p>
                    <p>
                        ラグランジュの平均値定理より、ある <InlineMath math="c \in (0, x)" /> が存在して
                    </p>
                    <BlockMath math="\frac{f(x) - f(0)}{x - 0} = f'(c)" />
                    <p>
                        が成り立つ。
                    </p>
                    <p>
                        <InlineMath math="f(0) = 0" /> であるため、左辺は <InlineMath math="\frac{f(x)}{x}" /> となる。
                    </p>
                    <p>
                        仮定より、任意の正の実数に対して導関数は <InlineMath math="1" /> 以下であるから、当然 <InlineMath math="c" /> に対しても <InlineMath math="f'(c) \leq 1" /> が成り立つ。
                    </p>
                    <p>
                        したがって、
                    </p>
                    <BlockMath math="\frac{f(x)}{x} = f'(c) \leq 1" />
                    <p>
                        <InlineMath math="x > 0" /> であるから、両辺に <InlineMath math="x" /> を掛けて
                    </p>
                    <BlockMath math="f(x) \leq x" />
                    <p>
                        が得られる。以上より、すべての <InlineMath math="x \geq 0" /> に対して <InlineMath math="f(x) \leq x" /> が成り立つことが示された。
                    </p>
                    <p className="text-right"><InlineMath math="\square" /></p>
                </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        次の極限を求めよ。<br />
                        （対数をとって <InlineMath math="0 \cdot \infty" /> 型に変形し、そこから分数型にしてロピタルの定理を用いること。）
                    </p>
                    <BlockMath math="\lim_{x \to 0+} (\sin x)^x" />
                <ExerciseSolution>
                    <p>
                        <InlineMath math="x \to 0+" /> のとき、<InlineMath math="\sin x \to 0" /> であり、これは <InlineMath math="0^0" /> 型の不定形である。<br />
                        <InlineMath math="y = (\sin x)^x" /> とおいて、両辺の自然対数をとる。
                    </p>
                    <BlockMath math="\ln y = \ln\bigl((\sin x)^x\bigr) = x \ln(\sin x)" />
                    <p>
                        この右辺の極限 <InlineMath math="\lim_{x \to 0+} x \ln(\sin x)" /> を考える。これは <InlineMath math="0 \cdot (-\infty)" /> 型の不定形であるため、分数の形に変形する。
                    </p>
                    <BlockMath math="\lim_{x \to 0+} x \ln(\sin x) = \lim_{x \to 0+} \frac{\ln(\sin x)}{1/x}" />
                    <p>
                        これで <InlineMath math="\frac{-\infty}{\infty}" /> 型の不定形になったため、ロピタルの定理を適用する。
                    </p>
                    <BlockMath math="\lim_{x \to 0+} \frac{\frac{d}{dx}\ln(\sin x)}{\frac{d}{dx}(x^{-1})} = \lim_{x \to 0+} \frac{\frac{\cos x}{\sin x}}{-x^{-2}} = \lim_{x \to 0+} \frac{-x^2 \cos x}{\sin x}" />
                    <p>
                        この式を少し変形して極限を計算しやすくする。
                    </p>
                    <BlockMath math="\lim_{x \to 0+} \left( -x \cdot \cos x \cdot \frac{x}{\sin x} \right)" />
                    <p>
                        ここで、<InlineMath math="\lim_{x \to 0+} (-x) = 0" />、<InlineMath math="\lim_{x \to 0+} \cos x = 1" />、<InlineMath math="\lim_{x \to 0+} \frac{x}{\sin x} = 1" />（有名な極限公式）であるため、
                    </p>
                    <BlockMath math="\lim_{x \to 0+} \ln y = 0 \cdot 1 \cdot 1 = 0" />
                    <p>
                        となる。
                    </p>
                    <p>
                        求めたい極限は <InlineMath math="y" /> の極限であるから、指数関数が連続である性質を用いて、
                    </p>
                    <BlockMath math="\lim_{x \to 0+} y = \lim_{x \to 0+} e^{\ln y} = e^0 = 1" />
                    <p>
                        よって、求める極限は <InlineMath math="1" /> である。
                    </p>
                </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
