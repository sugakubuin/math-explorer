import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        関数 <InlineMath math="f" /> が <InlineMath math="x \to a" /> のときに <InlineMath math="L" /> に収束すること、すなわち <InlineMath math="\lim_{x \to a} f(x) = L" /> であることを、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法を用いて定義せよ（Definition 1.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="\varepsilon > 0" /> に対して、ある <InlineMath math="\delta > 0" /> が存在して、
                        </p>
                        <BlockMath math="0 < |x - a| < \delta \implies |f(x) - L| < \varepsilon" />
                        <p>
                            が成り立つことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> において連続であることを、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法を用いて定義せよ（Definition 1.3-1）。<br />
                        また、極限の定義における <InlineMath math="0 < |x - a| < \delta" /> とどのように異なるか、その理由とともに述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="\varepsilon > 0" /> に対して、ある <InlineMath math="\delta > 0" /> が存在して、
                        </p>
                        <BlockMath math="|x - a| < \delta \implies |f(x) - f(a)| < \varepsilon" />
                        <p>
                            が成り立つことである。
                        </p>
                        <p className="mt-2">
                            極限の定義では <InlineMath math="0 < |x - a|" /> として <InlineMath math="x = a" /> の場合を除外しているが、連続性の定義では <InlineMath math="x = a" /> の場合も含めている。連続性は <InlineMath math="\lim_{x \to a} f(x) = f(a)" /> を意味するため、<InlineMath math="x = a" /> のときの関数値 <InlineMath math="f(a)" /> を直接評価する必要があるからである（ただし <InlineMath math="x = a" /> のときは <InlineMath math="|f(a) - f(a)| = 0 < \varepsilon" /> となり常に成り立つ）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        「関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> で微分可能ならば、<InlineMath math="f" /> は点 <InlineMath math="a" /> で連続である」という命題は真か偽か（Theorem 1.4-1）。<br />
                        また、その逆の「連続ならば微分可能である」は真か偽か。偽である場合は、その代表的な反例を一つ挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            「微分可能ならば連続である」は<strong>真</strong>である。<br />
                            逆の「連続ならば微分可能である」は<strong>偽</strong>である。
                        </p>
                        <p className="mt-2">
                            反例：<InlineMath math="f(x) = |x|" /> は <InlineMath math="x = 0" /> で連続であるが、グラフが折れ曲がっており、左側微分係数（<InlineMath math="-1" />）と右側微分係数（<InlineMath math="1" />）が異なるため微分不可能である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法を用いて、次の極限を証明せよ。
                    </p>
                    <BlockMath math="\lim_{x \to 2} (3x - 2) = 4" />
                <ExerciseSolution>
                    <p>
                        任意の <InlineMath math="\varepsilon > 0" /> が与えられたとする。<br />
                        <InlineMath math="\delta = \frac{\varepsilon}{3}" /> とおく（これは正の値である）。
                    </p>
                    <p>
                        このとき、<InlineMath math="0 < |x - 2| < \delta" /> なる任意の <InlineMath math="x" /> に対して、
                    </p>
                    <BlockMath math="
                        \begin{aligned}
                        |(3x - 2) - 4| &= |3x - 6| \\
                        &= 3|x - 2| \\
                        &< 3\delta \\
                        &= 3 \left( \frac{\varepsilon}{3} \right) = \varepsilon
                        \end{aligned}
                    " />
                    <p>
                        が成り立つ。よって、定義より <InlineMath math="\lim_{x \to 2} (3x - 2) = 4" /> が示された。
                    </p>
                    <p className="text-right"><InlineMath math="\square" /></p>
                </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        はさみうちの原理を用いて、次の極限を求めよ。<br />
                        （計算の過程で、不等式による評価を明記すること。）
                    </p>
                    <BlockMath math="\lim_{x \to 0} x \sin\left(\frac{1}{x}\right)" />
                <ExerciseSolution>
                    <p>
                        <InlineMath math="x \neq 0" /> のとき、正弦関数の性質より、任意の実数 <InlineMath math="\theta" /> について <InlineMath math="-1 \leq \sin\theta \leq 1" /> であるから、
                    </p>
                    <BlockMath math="\left| \sin\left(\frac{1}{x}\right) \right| \leq 1" />
                    <p>
                        が成り立つ。この両辺に <InlineMath math="|x|" />（<InlineMath math=">0" />）を掛けると、
                    </p>
                    <BlockMath math="\left| x \sin\left(\frac{1}{x}\right) \right| \leq |x|" />
                    <p>
                        絶対値の性質 <InlineMath math="-A \leq X \leq A \iff |X| \leq A" /> より、
                    </p>
                    <BlockMath math="-|x| \leq x \sin\left(\frac{1}{x}\right) \leq |x|" />
                    <p>
                        ここで、<InlineMath math="x \to 0" /> のとき <InlineMath math="\lim_{x \to 0} |x| = 0" /> であり、<InlineMath math="\lim_{x \to 0} (-|x|) = 0" /> である。<br />
                        下界と上界の関数がともに <InlineMath math="0" /> に収束するため、はさみうちの原理により、
                    </p>
                    <BlockMath math="\lim_{x \to 0} x \sin\left(\frac{1}{x}\right) = 0" />
                    <p>となる。</p>
                </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        次の関数 <InlineMath math="f(x)" /> が <InlineMath math="x = 2" /> で連続になるように、定数 <InlineMath math="c" /> の値を定めよ。
                    </p>
                    <BlockMath math="
                        f(x) = \begin{cases}
                        \dfrac{x^2 - 4}{x - 2} & (x \neq 2) \\
                        c & (x = 2)
                        \end{cases}
                    " />
                <ExerciseSolution>
                    <p>
                        関数 <InlineMath math="f(x)" /> が <InlineMath math="x = 2" /> で連続であるためには、<InlineMath math="\lim_{x \to 2} f(x) = f(2)" /> が成り立つ必要がある。
                    </p>
                    <p>
                        まず、<InlineMath math="x \to 2" /> のときの極限を計算する。<InlineMath math="x \neq 2" /> の範囲で極限をとるため、分子を因数分解して約分できる。
                    </p>
                    <BlockMath math="
                        \begin{aligned}
                        \lim_{x \to 2} f(x) &= \lim_{x \to 2} \frac{x^2 - 4}{x - 2} \\
                        &= \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} \\
                        &= \lim_{x \to 2} (x + 2) \\
                        &= 2 + 2 = 4
                        \end{aligned}
                    " />
                    <p>
                        連続性の条件より <InlineMath math="\lim_{x \to 2} f(x) = f(2)" /> であり、定義より <InlineMath math="f(2) = c" /> であるから、
                    </p>
                    <BlockMath math="c = 4" />
                    <p>
                        とすればよい。（この不連続点は「除去可能不連続点」である。）
                    </p>
                </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        関数 <InlineMath math="f(x) = x|x|" /> は <InlineMath math="x = 0" /> で微分可能か。<br />
                        微分の定義（差分商の極限）に基づいて調べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="x = 0" /> における微分可能性を調べるため、定義に従って差分商の極限 <InlineMath math="\lim_{h \to 0} \frac{f(0+h) - f(0)}{h}" /> が存在するかを計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \lim_{h \to 0} \frac{f(h) - f(0)}{h} &= \lim_{h \to 0} \frac{h|h| - 0}{h} \\
                            &= \lim_{h \to 0} \frac{h|h|}{h} \\
                            &= \lim_{h \to 0} |h|
                            \end{aligned}
                        " />
                        <p>
                            右側極限と左側極限をそれぞれ確認する。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>右側極限（<InlineMath math="h \to 0+" /> のとき、<InlineMath math="|h| = h" />）： <InlineMath math="\lim_{h \to 0+} h = 0" /></li>
                            <li>左側極限（<InlineMath math="h \to 0-" /> のとき、<InlineMath math="|h| = -h" />）： <InlineMath math="\lim_{h \to 0-} (-h) = 0" /></li>
                        </ul>
                        <p>
                            左右の極限が一致し、ともに <InlineMath math="0" /> となる。
                        </p>
                        <p>
                            したがって、極限は存在して <InlineMath math="f'(0) = 0" /> であり、関数 <InlineMath math="f(x) = x|x|" /> は <InlineMath math="x = 0" /> で<strong>微分可能</strong>である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法を用いて、次の二次関数の極限を証明せよ。<br />
                        （ヒント：<InlineMath math="\delta" /> を選ぶ際に、<InlineMath math="\delta \leq 1" /> などの上限を設けて <InlineMath math="|x + 3|" /> を評価せよ。）
                    </p>
                    <BlockMath math="\lim_{x \to 3} x^2 = 9" />
                <ExerciseSolution>
                    <p>
                        任意の <InlineMath math="\varepsilon > 0" /> が与えられたとする。
                    </p>
                    <p>
                        評価したい差の絶対値は <InlineMath math="|x^2 - 9|" /> である。これを因数分解する。
                    </p>
                    <BlockMath math="|x^2 - 9| = |x - 3| \cdot |x + 3|" />
                    <p>
                        ここで、<InlineMath math="|x - 3|" /> を十分に小さくすることで全体を <InlineMath math="\varepsilon" /> 未満にしたい。<InlineMath math="|x + 3|" /> が大きくなりすぎないように、まず <InlineMath math="|x - 3| < 1" /> と制限してみる。
                    </p>
                    <p>
                        <InlineMath math="|x - 3| < 1" /> のとき、<InlineMath math="-1 < x - 3 < 1" /> より <InlineMath math="2 < x < 4" /> である。<br />
                        各辺に <InlineMath math="3" /> を足すと、<InlineMath math="5 < x + 3 < 7" /> となる。したがって、<InlineMath math="|x + 3| < 7" /> と評価できる。
                    </p>
                    <p>
                        この評価のもとで、<InlineMath math="|x^2 - 9| < 7 |x - 3|" /> となる。<br />
                        これが <InlineMath math="\varepsilon" /> より小さくなるためには、<InlineMath math="|x - 3| < \frac{\varepsilon}{7}" /> であればよい。
                    </p>
                    <p>
                        そこで、<InlineMath math="\delta = \min\left(1, \frac{\varepsilon}{7}\right)" /> とおく。<InlineMath math="\delta" /> は正の値である。<br />
                        このとき、<InlineMath math="0 < |x - 3| < \delta" /> なる任意の <InlineMath math="x" /> に対して、<InlineMath math="\delta \leq 1" /> より <InlineMath math="|x + 3| < 7" /> が成り立ち、さらに <InlineMath math="\delta \leq \frac{\varepsilon}{7}" /> より、
                    </p>
                    <BlockMath math="|x^2 - 9| = |x - 3| \cdot |x + 3| < \frac{\varepsilon}{7} \cdot 7 = \varepsilon" />
                    <p>
                        が成り立つ。
                    </p>
                    <p>
                        よって、定義より <InlineMath math="\lim_{x \to 3} x^2 = 9" /> が示された。
                    </p>
                    <p className="text-right"><InlineMath math="\square" /></p>
                </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        関数 <InlineMath math="f(x)" /> と <InlineMath math="g(x)" /> が点 <InlineMath math="a" /> において極限を持ち、<InlineMath math="\lim_{x \to a} f(x) = L" />、<InlineMath math="\lim_{x \to a} g(x) = M" /> であるとする。<br />
                        このとき、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法を用いて、和の極限 <InlineMath math="\lim_{x \to a} (f(x) - g(x)) = L - M" /> を証明せよ。
                    </p>
                <ExerciseSolution>
                    <p>
                        任意の <InlineMath math="\varepsilon > 0" /> が与えられたとする。
                    </p>
                    <p>
                        <InlineMath math="\lim_{x \to a} f(x) = L" /> であるから、ある <InlineMath math="\delta_1 > 0" /> が存在して、
                    </p>
                    <BlockMath math="0 < |x - a| < \delta_1 \implies |f(x) - L| < \frac{\varepsilon}{2}" />
                    <p>
                        が成り立つ。
                    </p>
                    <p>
                        同様に、<InlineMath math="\lim_{x \to a} g(x) = M" /> であるから、ある <InlineMath math="\delta_2 > 0" /> が存在して、
                    </p>
                    <BlockMath math="0 < |x - a| < \delta_2 \implies |g(x) - M| < \frac{\varepsilon}{2}" />
                    <p>
                        が成り立つ。
                    </p>
                    <p>
                        ここで、<InlineMath math="\delta = \min(\delta_1, \delta_2)" /> とおく。<InlineMath math="\delta > 0" /> である。<br />
                        <InlineMath math="0 < |x - a| < \delta" /> なる任意の <InlineMath math="x" /> について、上の2つの条件が同時に満たされる。
                    </p>
                    <p>
                        目標とする差の絶対値を三角不等式を用いて評価する。
                    </p>
                    <BlockMath math="
                        \begin{aligned}
                        |(f(x) - &g(x)) - (L - M)| \\
                        &= |(f(x) - L) - (g(x) - M)| \\
                        &\leq |f(x) - L| + |- (g(x) - M)| \\
                        &= |f(x) - L| + |g(x) - M| \\
                        &< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
                        \end{aligned}
                    " />
                    <p>
                        したがって、任意の <InlineMath math="\varepsilon > 0" /> に対して適当な <InlineMath math="\delta > 0" /> を選ぶことで条件が満たされたので、<InlineMath math="\lim_{x \to a} (f(x) - g(x)) = L - M" /> が示された。
                    </p>
                    <p className="text-right"><InlineMath math="\square" /></p>
                </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        関数 <InlineMath math="f(x)" /> が点 <InlineMath math="a" /> で微分可能であるとき、ある定数 <InlineMath math="A" /> と、<InlineMath math="\lim_{h \to 0} \varphi(h) = 0" /> を満たす関数 <InlineMath math="\varphi(h)" /> が存在して、
                    </p>
                    <BlockMath math="f(a + h) = f(a) + Ah + h\varphi(h)" />
                    <p>
                        と表せることを証明せよ。また、このときの定数 <InlineMath math="A" /> が何になるかを明記せよ。<br />
                        （ヒント：関数 <InlineMath math="\varphi(h)" /> を差分商と微分係数の差として自ら定義せよ。）
                    </p>
                <ExerciseSolution>
                    <p>
                        <InlineMath math="f(x)" /> が点 <InlineMath math="a" /> で微分可能であるため、極限
                    </p>
                    <BlockMath math="f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}" />
                    <p>
                        が存在し、有限の値をとる。
                    </p>
                    <p>
                        ここで、<InlineMath math="h \neq 0" /> に対して新しい関数 <InlineMath math="\varphi(h)" /> を次のように定義する。
                    </p>
                    <BlockMath math="\varphi(h) = \frac{f(a + h) - f(a)}{h} - f'(a)" />
                    <p>
                        極限の性質より、<InlineMath math="h \to 0" /> としたときの <InlineMath math="\varphi(h)" /> の極限は、
                    </p>
                    <BlockMath math="\begin{aligned}
                        \lim_{h \to 0} \varphi(h) &= \lim_{h \to 0} \left( \frac{f(a + h) - f(a)}{h} - f'(a) \right) \\
                        &= f'(a) - f'(a) = 0
                        \end{aligned}
                    " />
                    <p>
                        となり、条件 <InlineMath math="\lim_{h \to 0} \varphi(h) = 0" /> を満たす。
                    </p>
                    <p>
                        関数 <InlineMath math="\varphi(h)" /> の定義式において、両辺に <InlineMath math="h" /> を掛けると、
                    </p>
                    <BlockMath math="h\varphi(h) = f(a + h) - f(a) - f'(a)h" />
                    <p>
                        これを <InlineMath math="f(a + h)" /> について解く（移項する）と、
                    </p>
                    <BlockMath math="f(a + h) = f(a) + f'(a)h + h\varphi(h)" />
                    <p>
                        となる。
                    </p>
                    <p>
                        ここで <InlineMath math="A = f'(a)" /> とおけば、問題で要求された形
                    </p>
                    <BlockMath math="f(a + h) = f(a) + Ah + h\varphi(h)" />
                    <p>
                        が得られる。
                    </p>
                    <p>
                        結論として、定数 <InlineMath math="A" /> は <InlineMath math="f'(a)" />（点 <InlineMath math="a" /> における微分係数）である。
                    </p>
                    <p className="text-right"><InlineMath math="\square" /></p>
                </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
