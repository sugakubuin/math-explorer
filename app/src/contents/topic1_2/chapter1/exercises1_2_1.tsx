import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_2_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        次の極限のうち、Theorem 1.1-1 （基本極限公式）などを用いて <InlineMath math="0" /> に収束するものをすべて選べ。
                    </p>
                    <p className="mt-2">
                        (A) <InlineMath math="\displaystyle \lim_{n \to \infty} \frac{1}{n^3}" /> &nbsp;&nbsp;&nbsp;
                        (B) <InlineMath math="\displaystyle \lim_{n \to \infty} (-1)^n" /> &nbsp;&nbsp;&nbsp; <br />
                        (C) <InlineMath math="\displaystyle \lim_{n \to \infty} \left(\frac{3}{2}\right)^n" /> &nbsp;&nbsp;&nbsp;
                        (D) <InlineMath math="\displaystyle \lim_{n \to \infty} \left(-\frac{1}{2}\right)^n" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            各選択肢の極限を評価する。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>(A) Theorem 1.1-1 より、<InlineMath math="k = 3 > 0" /> なので <InlineMath math="0" /> に収束する。</li>
                            <li>(B) Definition 1.1-3 の Example にある通り、<InlineMath math="1" /> と <InlineMath math="-1" /> を行き来するため<strong>振動</strong>（発散）する。</li>
                            <li>(C) Theorem 1.1-2 より、公比 <InlineMath math="r = 3/2 > 1" /> なので<strong>正の無限大に発散</strong>する。</li>
                            <li>(D) Theorem 1.1-2 より、公比 <InlineMath math="r = -1/2" /> は <InlineMath math="|r| < 1" /> を満たすため <InlineMath math="0" /> に収束する。</li>
                        </ul>
                        <p className="mt-3">
                            よって、<InlineMath math="0" /> に収束するのは (A) と (D) である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        関数 <InlineMath math="f(x)" /> について、左側極限と右側極限が次のように与えられているとする。
                    </p>
                    <BlockMath math="\lim_{x \to 2-} f(x) = 3, \quad \lim_{x \to 2+} f(x) = 3" />
                    <p>
                        このとき、極限 <InlineMath math="\displaystyle \lim_{x \to 2} f(x)" /> は存在するか。存在する場合はその値を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.2-1 （極限の存在条件）より、左側極限と右側極限がともに存在して等しいとき、その点での極限が存在し、その値に一致する。
                        </p>
                        <p>
                            本問では <InlineMath math="\displaystyle \lim_{x \to 2-} f(x) = \lim_{x \to 2+} f(x) = 3" /> と等しいため、極限は存在する。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> 存在する（極限値は <InlineMath math="3" />）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        関数 <InlineMath math="f(x)" /> が <InlineMath math="x = a" /> で連続であるための3つの条件（Definition 1.2-4）をすべて挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-4 にある通り、以下の3条件がすべて成り立つことである。
                        </p>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li><InlineMath math="f(a)" /> が定義されている。</li>
                            <li>極限 <InlineMath math="\displaystyle \lim_{x \to a} f(x)" /> が存在する。</li>
                            <li>その極限値と関数値が等しい（<InlineMath math="\displaystyle \lim_{x \to a} f(x) = f(a)" />）。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        次の数列の極限を求めよ。
                    </p>
                    <BlockMath math="\lim_{n \to \infty} \frac{5n^2 - 3n + 2}{2n^2 + n - 4}" />
                    <ExerciseSolution>
                        <p>
                            Corollary 1.1-1 および Example 1.1-2 に従い、分母の最高次である <InlineMath math="n^2" /> で分母・分子を割る。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \lim_{n \to \infty} \frac{5n^2 - 3n + 2}{2n^2 + n - 4} &= \lim_{n \to \infty} \frac{5 - \frac{3}{n} + \frac{2}{n^2}}{2 + \frac{1}{n} - \frac{4}{n^2}}
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="n \to \infty" /> のとき、<InlineMath math="\frac{1}{n} \to 0, \frac{1}{n^2} \to 0" /> であるから、
                        </p>
                        <BlockMath math="
                            = \frac{5 - 0 + 0}{2 + 0 - 0} = \frac{5}{2}
                        " />
                        <p>となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        次の等比数列を含む極限を求めよ。
                    </p>
                    <BlockMath math="\lim_{n \to \infty} \frac{4^n - 3^n}{4^n + 2^n}" />
                    <ExerciseSolution>
                        <p>
                            Example 1.1-4 のように、絶対値が最も大きい項である <InlineMath math="4^n" /> で分母・分子を割る。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \lim_{n \to \infty} \frac{4^n - 3^n}{4^n + 2^n} &= \lim_{n \to \infty} \frac{1 - \left(\frac{3}{4}\right)^n}{1 + \left(\frac{2}{4}\right)^n} \\
                            &= \lim_{n \to \infty} \frac{1 - \left(\frac{3}{4}\right)^n}{1 + \left(\frac{1}{2}\right)^n}
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="\left|\frac{3}{4}\right| < 1" /> および <InlineMath math="\left|\frac{1}{2}\right| < 1" /> より、<InlineMath math="\left(\frac{3}{4}\right)^n \to 0" />、<InlineMath math="\left(\frac{1}{2}\right)^n \to 0" /> となるため、
                        </p>
                        <BlockMath math="
                            = \frac{1 - 0}{1 + 0} = 1
                        " />
                        <p>となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        次の関数の極限を求めよ。
                    </p>
                    <BlockMath math="\lim_{x \to 3} \frac{x^2 - x - 6}{x - 3}" />
                    <ExerciseSolution>
                        <p>
                            そのまま <InlineMath math="x = 3" /> を代入すると <InlineMath math="0/0" /> の不定形となるため、分子を因数分解する。
                        </p>
                        <BlockMath math="x^2 - x - 6 = (x - 3)(x + 2)" />
                        <p>
                            <InlineMath math="x \to 3" /> の極限を考える際、<InlineMath math="x \neq 3" /> としてよいので、<InlineMath math="x - 3" /> で約分できる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \lim_{x \to 3} \frac{x^2 - x - 6}{x - 3} &= \lim_{x \to 3} \frac{(x - 3)(x + 2)}{x - 3} \\
                            &= \lim_{x \to 3} (x + 2)
                            \end{aligned}
                        " />
                        <p>
                            最後に <InlineMath math="x = 3" /> を代入して、
                        </p>
                        <BlockMath math="= 3 + 2 = 5" />
                        <p>となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        次の極限を調べよ。
                    </p>
                    <BlockMath math="\lim_{x \to \infty} \frac{x^2 + 3x}{2x^3 - 1}" />
                    <ExerciseSolution>
                        <p>
                            変数 <InlineMath math="x \to \infty" /> の場合も、数列のときと同様に分母の最高次（ここでは <InlineMath math="x^3" />）で分母・分子を割る。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \lim_{x \to \infty} \frac{x^2 + 3x}{2x^3 - 1} &= \lim_{x \to \infty} \frac{\frac{1}{x} + \frac{3}{x^2}}{2 - \frac{1}{x^3}}
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="x \to \infty" /> のとき、<InlineMath math="\frac{1}{x}, \frac{1}{x^2}, \frac{1}{x^3} \to 0" /> となるので、
                        </p>
                        <BlockMath math="= \frac{0 + 0}{2 - 0} = 0" />
                        <p>となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        はさみうちの原理（Theorem 1.1-3）を用いて、次の極限を求めよ。
                    </p>
                    <BlockMath math="\lim_{n \to \infty} \frac{\cos(n \pi)}{n^2 + 1}" />
                    <ExerciseSolution>
                        <p>
                            すべての自然数 <InlineMath math="n" /> に対して、余弦関数の性質から <InlineMath math="-1 \leq \cos(n \pi) \leq 1" /> が成り立つ。
                        </p>
                        <p>
                            <InlineMath math="n^2 + 1 > 0" /> であるから、各辺を <InlineMath math="n^2 + 1" /> で割ると大小関係は保たれ、次のような不等式が得られる。
                        </p>
                        <BlockMath math="-\frac{1}{n^2 + 1} \leq \frac{\cos(n \pi)}{n^2 + 1} \leq \frac{1}{n^2 + 1}" />
                        <p>
                            ここで、両端の数列の極限を考えると、
                        </p>
                        <BlockMath math="\lim_{n \to \infty} \left( -\frac{1}{n^2 + 1} \right) = 0" />
                        <BlockMath math="\lim_{n \to \infty} \frac{1}{n^2 + 1} = 0" />
                        <p>
                            である。したがって、はさみうちの原理より、真ん中の数列も <InlineMath math="0" /> に収束する。
                        </p>
                        <BlockMath math="\lim_{n \to \infty} \frac{\cos(n \pi)}{n^2 + 1} = 0" />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        関数 <InlineMath math="f(x)" /> を次のように定義する。
                    </p>
                    <BlockMath math="
                        f(x) = \begin{cases} 
                        \dfrac{x^2 - 4}{x - 2} & (x \neq 2) \\[10pt]
                        a & (x = 2) 
                        \end{cases}
                    " />
                    <p>
                        この関数が <InlineMath math="x = 2" /> で連続になるように、定数 <InlineMath math="a" /> の値を定めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-4 （連続性）より、<InlineMath math="f(x)" /> が <InlineMath math="x = 2" /> で連続であるための条件は
                            <InlineMath math="\displaystyle \lim_{x \to 2} f(x) = f(2)" /> が成り立つことである。
                        </p>
                        <p>
                            まず、極限 <InlineMath math="\displaystyle \lim_{x \to 2} f(x)" /> を計算する。<InlineMath math="x \to 2" /> の極限を考える際は <InlineMath math="x \neq 2" /> なので、上の式を用いる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \lim_{x \to 2} \frac{x^2 - 4}{x - 2} &= \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} \\
                            &= \lim_{x \to 2} (x + 2) \\
                            &= 2 + 2 = 4
                            \end{aligned}
                        " />
                        <p>
                            次に、定義より <InlineMath math="f(2) = a" /> である。
                        </p>
                        <p>
                            連続であるためにはこれらが等しくなければならないので、<InlineMath math="a = 4" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        方程式 <InlineMath math="x^3 - 4x + 1 = 0" /> は、区間 <InlineMath math="(0, 1)" /> に少なくとも1つの実数解を持つことを、中間値の定理（Theorem 1.2-2）を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(x) = x^3 - 4x + 1" /> とおく。多項式関数はすべての実数で連続であるため、特に閉区間 <InlineMath math="[0, 1]" /> においても連続である。
                        </p>
                        <p>
                            区間の両端での関数値を調べる。
                        </p>
                        <BlockMath math="f(0) = 0^3 - 4 \cdot 0 + 1 = 1 > 0" />
                        <BlockMath math="f(1) = 1^3 - 4 \cdot 1 + 1 = 1 - 4 + 1 = -2 < 0" />
                        <p>
                            よって、<InlineMath math="f(0) \neq f(1)" /> であり、<InlineMath math="f(0)" /> と <InlineMath math="f(1)" /> の間に <InlineMath math="0" /> が存在する（<InlineMath math="-2 < 0 < 1" />）。
                        </p>
                        <p>
                            したがって、中間値の定理により、<InlineMath math="f(c) = 0" /> となるような <InlineMath math="c" /> が開区間 <InlineMath math="(0, 1)" /> 内に少なくとも1つ存在する。
                        </p>
                        <p>
                            これは、方程式 <InlineMath math="x^3 - 4x + 1 = 0" /> が区間 <InlineMath math="(0, 1)" /> に少なくとも1つの実数解を持つことを意味する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
