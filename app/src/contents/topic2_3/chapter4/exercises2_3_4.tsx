import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        関数 <InlineMath math="f(x)" /> が点 <InlineMath math="a" /> において連続であることの定義（<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法）を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.1-1 より、任意の正の実数 <InlineMath math="\varepsilon > 0" /> に対して、ある正の実数 <InlineMath math="\delta > 0" /> が存在し、
                        </p>
                        <BlockMath math="|x - a| < \delta \implies |f(x) - f(a)| < \varepsilon" />
                        <p className="mt-2">
                            が成り立つことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        中間値の定理（Theorem 4.3-1）の主張を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, b]" /> 上で連続であり、<InlineMath math="f(a) \neq f(b)" /> を満たすとする。このとき、<InlineMath math="f(a)" /> と <InlineMath math="f(b)" /> の間にある任意の実数 <InlineMath math="\mu" /> に対して、
                        </p>
                        <BlockMath math="f(c) = \mu, \quad a < c < b" />
                        <p className="mt-2">
                            を満たす実数 <InlineMath math="c" /> が少なくとも1つ存在するという定理である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        最大値・最小値定理（Theorem 4.4-1）が成り立つための、定義域に関する重要な条件は何か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義域が<strong>「有界な閉区間」</strong>（<InlineMath math="[a, b]" /> の形式）であることである。
                            開区間（<InlineMath math="(0, 1)" /> など）や非有界な集合（<InlineMath math="\mathbb{R}" /> など）では、たとえ連続関数であっても最大値や最小値を持つとは限らない（§4.2 備考参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        関数 <InlineMath math="f(x) = \frac{\sin x}{x} \ (x \neq 0)" /> において、点 <InlineMath math="x = 0" /> はどのような不連続点か。Definition 4.1-2 の分類に基づいて答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\lim_{x \to 0} \frac{\sin x}{x} = 1" /> であることが知られている。
                            点 <InlineMath math="x = 0" /> で極限値が存在するが、もとの関数は <InlineMath math="x = 0" /> で定義されていない。
                        </p>
                        <p className="mt-2">
                            したがって、点 <InlineMath math="x = 0" /> は<strong>除去可能不連続点（Removable discontinuity）</strong>である。
                            もし <InlineMath math="f(0) = 1" /> と定義すれば、関数は連続になる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        関数 <InlineMath math="f(x) = 2x + 1" /> が任意の点 <InlineMath math="x = a" /> で連続であることを、定義（<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法）に基づいて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="\varepsilon > 0" /> をとる。このとき、<InlineMath math="\delta = \varepsilon/2" /> と選ぶ。
                        </p>
                        <p className="mt-2">
                            すると、<InlineMath math="|x - a| < \delta" /> を満すすべての <InlineMath math="x" /> について、
                        </p>
                        <BlockMath math="\begin{aligned} |f(x) - f(a)| &= |(2x + 1) - (2a + 1)| \\ &= |2x - 2a| = 2|x - a| \\ &< 2\delta = 2 \cdot \frac{\varepsilon}{2} = \varepsilon \end{aligned}" />
                        <p className="mt-2">
                            よって、定義の条件が満たされ、<InlineMath math="f(x)" /> は <InlineMath math="x = a" /> で連続である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        方程式 <InlineMath math="x^3 - 3x + 1 = 0" /> は、区間 <InlineMath math="(0, 1)" /> の中に少なくとも1つの実数解を持つことを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            多項式関数 <InlineMath math="f(x) = x^3 - 3x + 1" /> は連続関数である。
                            端点の値を計算すると：
                        </p>
                        <BlockMath math="f(0) = 0 - 0 + 1 = 1 > 0" />
                        <BlockMath math="f(1) = 1 - 3 + 1 = -1 < 0" />
                        <p className="mt-2">
                            <InlineMath math="f(1) < 0 < f(0)" /> である。
                            中間値の定理（Theorem 4.3-1）より、<InlineMath math="f(c) = 0" /> を満たす実数 <InlineMath math="c \in (0, 1)" /> が少なくとも1つ存在する。
                            これが、方程式の解である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        凸関数の定義（Definition 4.5-2）および、その幾何学的な意味（グラフと線分の関係）を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            区間 <InlineMath math="I" /> 上の関数 <InlineMath math="f" /> が次を満たすとき、凸関数という：
                            任意の <InlineMath math="x, y \in I" /> と <InlineMath math="t \in [0, 1]" /> に対し、
                        </p>
                        <BlockMath math="f(tx + (1-t)y) \le t f(x) + (1-t)f(y)" />
                        <p className="mt-2">
                            幾何学的には、<strong>「グラフ上の任意の2点を結んだ線分が、常にグラフの曲線よりも上側（または一致）に位置する」</strong>（下に出っ張った形状）という意味である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> で連続であり、関数 <InlineMath math="g" /> が点 <InlineMath math="f(a)" /> で連続であるならば、合成関数 <InlineMath math="g \circ f" /> は点 <InlineMath math="a" /> において連続であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 4.2-1 の証明を再現する。
                        </p>
                        <p className="mt-2">
                            任意の <InlineMath math="\varepsilon > 0" /> をとる。<InlineMath math="g" /> は <InlineMath math="f(a)" /> で連続なので、ある <InlineMath math="\delta_1 > 0" /> が存在して、
                            <InlineMath math="|y - f(a)| < \delta_1 \implies |g(y) - g(f(a))| < \varepsilon" />
                            が成り立つ。
                        </p>
                        <p className="mt-2">
                            次に、<InlineMath math="f" /> は <InlineMath math="a" /> で連続なので、上記の <InlineMath math="\delta_1 > 0" /> に対して、ある <InlineMath math="\delta > 0" /> が存在して、
                            <InlineMath math="|x - a| < \delta \implies |f(x) - f(a)| < \delta_1" />
                            が成り立つ。
                        </p>
                        <p className="mt-2">
                            これらを組み合わせると、<InlineMath math="|x - a| < \delta" /> のとき、<InlineMath math="y = f(x)" /> と置けば <InlineMath math="|f(x) - f(a)| < \delta_1" /> となり、したがって
                            <BlockMath math="|g(f(x)) - g(f(a))| < \varepsilon" />
                            が導かれる。よって <InlineMath math="g \circ f" /> は点 <InlineMath math="a" /> で連続である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        連続関数 <InlineMath math="f(x) = x^2" /> を開区間 <InlineMath math="(0, 1)" /> 上で考える。この関数はこの区間上で最大値を持つか。最大値・最小値定理との関係をふまえて答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            この関数は開区間 <InlineMath math="(0, 1)" /> 上に最大値を持たない。
                            上限は <InlineMath math="1" /> であるが、任意の <InlineMath math="x \in (0, 1)" /> に対して <InlineMath math="f(x) = x^2 < 1" /> であり、<InlineMath math="1" /> という値を「達成」する点は区間内に存在しないからである。
                        </p>
                        <p className="mt-2">
                            最大値・最小値定理（Theorem 4.4-1）は定義域が<strong>「閉区間」</strong>であることを要求しており、開区間ではたとえ有界かつ連続であっても最大値の存在は保証されない。この例はその典型的な事例である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        凸関数のイェンセンの不等式（Proposition 4.5-1）として、<InlineMath math="f(\frac{x+y}{2}) \le \frac{f(x) + f(y)}{2}" /> が知られている。
                        これを用いて、正の実数 <InlineMath math="a, b" /> に対して相加相乗平均の不等式 <InlineMath math="\sqrt{ab} \le \frac{a+b}{2}" /> を導け。（ヒント：凸関数 <InlineMath math="g(x) = -\log x" /> を利用せよ）
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="f(x) = -\log x" /> は凸関数である。
                            イェンセンの不等式において <InlineMath math="\lambda_1 = \lambda_2 = 1/2" />, <InlineMath math="x_1 = a, x_2 = b" /> とおくと：
                        </p>
                        <BlockMath math="f\left(\frac{a+b}{2}\right) \le \frac{f(a) + f(b)}{2}" />
                        <p className="mt-2">
                            これに <InlineMath math="f(x) = -\log x" /> を代入すると、
                        </p>
                        <BlockMath math="\begin{aligned} -\log\left(\frac{a+b}{2}\right) &\le \frac{-\log a - \log b}{2} \\ &= -\frac{\log(ab)}{2} \\ &= -\log(\sqrt{ab}) \end{aligned}" />
                        <p className="mt-2">
                            両辺に -1 を掛けると不等号が逆転し、
                        </p>
                        <BlockMath math="\log\left(\frac{a+b}{2}\right) \ge \log(\sqrt{ab})" />
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            対数関数は単調増加であるから、真数同士の大小関係も保存され、
                        </p>
                        <BlockMath math="\frac{a+b}{2} \ge \sqrt{ab}" />
                        <p className="mt-2">
                            が導かれる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
