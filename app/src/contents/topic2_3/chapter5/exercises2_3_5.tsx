import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        関数 <InlineMath math="f(x)" /> が区間 <InlineMath math="I" /> 上で<strong>一様連続</strong>であることの定義を述べよ。また、各点連続の定義との論理的な違いを簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.1-1 より、任意の <InlineMath math="\varepsilon > 0" /> に対し、ある <InlineMath math="\delta > 0" /> が存在して、区間内の<strong>任意の</strong>2点 <InlineMath math="x, y" /> について、
                        </p>
                        <BlockMath math="|x - y| < \delta \implies |f(x) - f(y)| < \varepsilon" />
                        <p className="mt-2">
                            が成り立つことである。
                        </p>
                        <p className="mt-2">
                            各点連続との違いは、<InlineMath math="\delta" /> の選び方にある。
                            各点連続では <InlineMath math="\delta" /> が各点 <InlineMath math="x" /> に依存してよいが、一様連続では<strong>区間全体で共通の（点に依存しない）</strong> <InlineMath math="\delta" /> を選ぶ必要がある点（§5.1 備考参照）に論理的な強さがある。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        ハイネ・カントールの定理（Theorem 5.2-1）の主張を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="f" /> が<strong>有界な閉区間</strong> <InlineMath math="[a, b]" /> 上で連続であるならば、<InlineMath math="f" /> はその区間上で一様連続である、という定理である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        定数 <InlineMath math="L \ge 0" /> を用いたリプシッツ連続（Definition 5.4-1）の条件式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            区間内の任意の2点 <InlineMath math="x, y" /> に対して、
                        </p>
                        <BlockMath math="|f(x) - f(y)| \le L |x - y|" />
                        <p className="mt-2">
                            が成り立つことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        関数 <InlineMath math="f(x) = 3x + 2" /> が実数全体 <InlineMath math="\mathbb{R}" /> 上で一様連続であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="\varepsilon > 0" /> をとる。このとき、<InlineMath math="\delta = \varepsilon/3" /> と選ぶ。
                        </p>
                        <p className="mt-2">
                            任意の <InlineMath math="x, y \in \mathbb{R}" /> に対して、<InlineMath math="|x - y| < \delta" /> のとき、
                        </p>
                        <BlockMath math="\begin{aligned} |f(x) - f(y)| &= |(3x + 2) - (3y + 2)| \\ &= |3x - 3y| = 3|x - y| \\ &< 3\delta = 3 \cdot \frac{\varepsilon}{3} = \varepsilon \end{aligned}" />
                        <p className="mt-2">
                            が成り立つ。<InlineMath math="\delta" /> の選び方は <InlineMath math="x, y" /> に依存しないため、<InlineMath math="f(x)" /> は一様連続である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        開区間 <InlineMath math="(0, 1)" /> 上の関数 <InlineMath math="f(x) = 1/x" /> が、この区間上で一様連続ではない理由を、傾き（微分の大きさ）の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 5.1-1 の議論と同様に説明する。
                            関数 <InlineMath math="f(x) = 1/x" /> は、<InlineMath math="x \to +0" /> において、その傾き（微分係数 <InlineMath math="f'(x) = -1/x^2" />）の絶対値が際限なく大きくなる。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            一様連続であるためには、定義域全体で通用する「安全な幅 <InlineMath math="\delta" />」が必要である。
                            しかし、原点付近では関数値の変動が激しすぎるため、どんなに小さな幅 <InlineMath math="\delta" /> を固定しても、それより小さな変化で関数の値が大きく変動してしまい、共通の <InlineMath math="\delta" /> を取ることができないためである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        リプシッツ連続な関数は一様連続であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 5.4-1 (Step 1) の証明を再現する。
                        </p>
                        <p className="mt-2">
                            <InlineMath math="f" /> をリプシッツ定数 <InlineMath math="L" /> を持つリプシッツ連続な関数とする。
                            <InlineMath math="L=0" /> なら定数関数なので明らか。<InlineMath math="L > 0" /> の場合を考える。
                        </p>
                        <p className="mt-2">
                            任意の <InlineMath math="\varepsilon > 0" /> に対し、<InlineMath math="\delta = \varepsilon/L" /> とおくと、
                            <BlockMath math="\begin{aligned} |x - y| < \delta \implies |f(x) - f(y)| &\le L|x - y| \\ &< L\delta = L \cdot \frac{\varepsilon}{L} = \varepsilon \end{aligned}" />
                            が成り立つ。
                            この <InlineMath math="\delta" /> は点に依存しないため、<InlineMath math="f" /> は一様連続である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        すべての点において <InlineMath math="|f'(x)| \le L" /> （導関数が有界）な微分可能関数は、リプシッツ定数 <InlineMath math="L" /> を持つリプシッツ連続であることを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            平均値の定理（Chapter 6 で詳しく扱う内容の先取り）を用いて説明する。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            任意の2点 <InlineMath math="x, y" /> に対して、平均値の定理より
                            <BlockMath math="\frac{f(x) - f(y)}{x - y} = f'(c)" />
                            を満たす点 <InlineMath math="c" /> が <InlineMath math="x, y" /> の間に存在する。
                        </p>
                        <p className="mt-2">
                            導関数が有界（<InlineMath math="|f'(c)| \le L" />）という仮定より、
                            <BlockMath math="\left| \frac{f(x) - f(y)}{x - y} \right| \le L \implies |f(x) - f(y)| \le L |x - y|" />
                            が成り立つ。これはリプシッツ連続の定義式の形そのものである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        関数 <InlineMath math="f, g" /> が区間 <InlineMath math="I" /> 上で一様連続であるならば、それらの和 <InlineMath math="f + g" /> もまた <InlineMath math="I" /> 上で一様連続であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="\varepsilon > 0" /> をとる。一様連続性の定義より、
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li><InlineMath math="f" /> に対してある <InlineMath math="\delta_1 > 0" /> が存在して、<InlineMath math="|x - y| < \delta_1 \implies |f(x) - f(y)| < \varepsilon/2" />。</li>
                            <li><InlineMath math="g" /> に対してある <InlineMath math="\delta_2 > 0" /> が存在して、<InlineMath math="|x - y| < \delta_2 \implies |g(x) - g(y)| < \varepsilon/2" />。</li>
                        </ul>
                        <p className="mt-2">
                            ここで <InlineMath math="\delta = \min(\delta_1, \delta_2)" /> と選ぶ。<InlineMath math="|x - y| < \delta" /> のとき、
                            三角不等式を用いて評価すると、
                        </p>
                        <BlockMath math="\begin{aligned} &|(f+g)(x) - (f+g)(y)| \\ &= |(f(x) - f(y)) + (g(x) - g(y))| \\ &\le |f(x) - f(y)| + |g(x) - g(y)| \\ &< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon \end{aligned}" />
                        <p className="mt-2">
                            よって <InlineMath math="f + g" /> は <InlineMath math="I" /> 上で一様連続である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        関数 <InlineMath math="f(x) = \sqrt{x}" /> は閉区間 <InlineMath math="[0, 1]" /> 上で一様連続であるが、リプシッツ連続ではないことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 5.4-1 の証明を再現する。
                        </p>
                        <ol className="list-decimal list-inside ml-4 mt-2 space-y-4 text-slate-700 dark:text-slate-300">
                            <li>
                                <strong>一様連続性：</strong> <InlineMath math="f(x) = \sqrt{x}" /> は閉区間 <InlineMath math="[0, 1]" /> で（点ごとに）連続である。ハイネ・カントールの定理（Theorem 5.2-1）より、有界閉区間上の連続関数は一様連続となるため示された。
                            </li>
                            <li>
                                <strong>リプシッツ連続性の否定：</strong> リプシッツ連続であると仮定し、定数 <InlineMath math="L" /> が存在するとする。
                                任意の <InlineMath math="x \in (0, 1]" /> に対して、<InlineMath math="y=0" /> を考える。
                                <BlockMath math="|\sqrt{x} - \sqrt{0}| \le L|x - 0| \implies \sqrt{x} \le Lx \implies L \ge \frac{1}{\sqrt{x}}" />
                                ここで <InlineMath math="x \to +0" /> とすると、右辺は無限大に発散する。ゆえに、これを上から抑える有限の定数 <InlineMath math="L" /> は存在し得ない。よってリプシッツ連続ではない。
                            </li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        稠密部分集合上の一様連続関数の延長定理（Theorem 5.3-1）において、「一様連続性」が必要な理由を述べよ。なぜ単なる「各点連続」では実数全体への確定した一意的な拡張が保障されないのか、直感的に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.3-1 およびその証明概要に基づく。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            <strong>1. コーシー列の保存：</strong> 一様連続であれば、実数の穴（無理数）に向かう「コーシー列」を、関数の値の方でも「コーシー列」として保つことができる。これによって、無理数における極限値が一意に定まる。
                        </p>
                        <p className="mt-2">
                            <strong>2. 単なる連続性との違い：</strong> 各点連続のみを仮定した場合、無理数への近づき方によって関数の傾きが激しく変動したり、発散したりする可能性がある。例えば <InlineMath math="f(x) = \sin(1/x)" /> のような関数を原点付近で実数全体に広げる際、単なる連続関数の部分集合からの極限では、極限自体が振動して定まらないことがある。一様連続性は「区間全体でのなめらかさ」を保証するため、そのような不安定な振る舞いを防ぎ、すべての「穴（無理数）」を矛盾なく埋めることができるのである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
