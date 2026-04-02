import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_2_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        2つの複素数 <InlineMath math="z = 2 + 3i, \, w = 1 - 2i" /> の積 <InlineMath math="zw" /> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.1-1（複素数の演算規則）に基づき、多項式の積と同様に計算する。
                        </p>
                        <BlockMath math="\begin{aligned} zw &= (2 + 3i)(1 - 2i) \\ &= 2(1) + 2(-2i) + 3i(1) + 3i(-2i) \\ &= 2 - 4i + 3i - 6i^2 \end{aligned}" />
                        <p>
                            <InlineMath math="i^2 = -1" /> であるため、
                            <BlockMath math="zw = 2 - i + 6 = 8 - i" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        複素数 <InlineMath math="z = -1 + i" /> の絶対値 <InlineMath math="|z|" /> と、偏角の主値 <InlineMath math="\text{Arg}\,z" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-2（絶対値）より：
                            <BlockMath math="|z| = \sqrt{(-1)^2 + 1^2} = \sqrt{2}" />
                        </p>
                        <p>
                            Definition 1.2-3（偏角の主値）に従い、 <InlineMath math="-\pi < \theta \le \pi" /> の範囲で <InlineMath math="\cos \theta = -1/\sqrt{2}, \, \sin \theta = 1/\sqrt{2}" /> を満たす値を求めると：
                            <BlockMath math="\text{Arg}\,z = \frac{3}{4}\pi" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        ド・モアブルの定理を用いて、複素数 <InlineMath math="z = \cos \frac{\pi}{12} + i \sin \frac{\pi}{12}" /> の 4 乗を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.3-1（ド・モアブルの定理）より、極形式の <InlineMath math="n" /> 乗では角度が <InlineMath math="n" /> 倍になる。
                        </p>
                        <BlockMath math="\begin{aligned} z^4 &= \left( \cos \frac{\pi}{12} + i \sin \frac{\pi}{12} \right)^4 \\ &= \cos \left( 4 \cdot \frac{\pi}{12} \right) + i \sin \left( 4 \cdot \frac{\pi}{12} \right) \\ &= \cos \frac{\pi}{3} + i \sin \frac{\pi}{3} \end{aligned}" />
                        <p>
                            具体値を代入して、 <InlineMath math="z^4 = \frac{1}{2} + \frac{\sqrt{3}}{2}i" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        複素平面上の任意の点 <InlineMath math="z" /> に虚数単位 <InlineMath math="i" /> を掛けるという操作は、図形的にどのような移動に対応するか説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="i" /> を極形式で表すと <InlineMath math="i = 1(\cos \frac{\pi}{2} + i \sin \frac{\pi}{2})" /> である。
                        </p>
                        <p>
                            Proposition 1.2-2（積と偏角）によると、複素数の積は絶対値の積と偏角の和に対応する。 <InlineMath math="iz" /> は、 <InlineMath math="z" /> の絶対値を 1 倍し、偏角に <InlineMath math="\pi/2" /> を加えたものである。
                        </p>
                        <p>
                            したがって、この操作は「原点を中心とした <b><InlineMath math="\pi/2" /> （90度）の反時計回りの回転</b>」に対応する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        方程式 <InlineMath math="z^3 = -8" /> を解き、得られた解を複素平面上に図示した場合の幾何学的特徴を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="-8 = 8e^{i\pi}" /> とおき、 Theorem 1.3-2（n 乗根）の公式を適用する。
                            <BlockMath math="z_k = 8^{1/3} \exp\left( i \frac{\pi + 2\pi k}{3} \right) = 2 \exp\left( i \frac{(2k+1)\pi}{3} \right) \quad (k=0, 1, 2)" />
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><InlineMath math="k=0: z_0 = 2e^{i\pi/3} = 1 + \sqrt{3}i" /></li>
                            <li><InlineMath math="k=1: z_1 = 2e^{i\pi} = -2" /></li>
                            <li><InlineMath math="k=2: z_2 = 2e^{i5\pi/3} = 1 - \sqrt{3}i" /></li>
                        </ul>
                        <p>
                            幾何学的特徴：これらの点は原点中心、半径 2 の円の上にあり、それらを結ぶと <b>正三角形</b> をなす。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        複素平面内の集合 <InlineMath math="D = \{ z \in \mathbb{C} \mid |z - i| < 1 \}" /> について、以下の問いに答えよ。
                        <ol className="list-decimal list-inside mt-2">
                            <li>この集合は開集合か、閉集合か。</li>
                            <li>この集合は有界か。</li>
                        </ol>
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. Definition 1.4-1 の記法では、この集合は点 <InlineMath math="i" /> を中心とした半径 1 の開円板 <InlineMath math="B(i, 1)" /> である。
                            Definition 1.4-2（開集合）に基づき、境界（ <InlineMath math="|z-i|=1" /> ）を含まないため、この集合は <b>開集合 (open set)</b> である。すべての境界点を含まないため、閉集合ではない。
                        </p>
                        <p className="mt-4">
                            2. すべての点 <InlineMath math="z \in D" /> は、三角不等式より <InlineMath math="|z| = |(z-i)+i| \le |z-i| + |i| < 1 + 1 = 2" /> を満たす。
                            したがって Definition 1.4-4（有界集合）より、この集合は <b>有界 (bounded)</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        複素平面上の三角不等式の別形式 <InlineMath math="|z + w| \ge |z| - |w|" /> が成り立つことを、 <b>Proposition 1.2-1</b> の三角不等式を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.2-1 の第 2 式 <InlineMath math="|A + B| \le |A| + |B|" /> において、
                            <InlineMath math="A = z + w, \; B = -w" /> と置換する。
                        </p>
                        <BlockMath math="| (z + w) + (-w) | \le | z + w | + | -w |" />
                        <p>
                            左辺は <InlineMath math="|z|" /> となり、右辺は <InlineMath math="|z + w| + |w|" /> である。よって、
                            <BlockMath math="|z| \le |z + w| + |w|" />
                        </p>
                        <p>
                            両辺から <InlineMath math="|w|" /> を引くことで、 <InlineMath math="|z + w| \ge |z| - |w|" /> を得る。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        Proposition 1.1-2 では 2つの複素数の積の共役について示したが、これを一般化し、 <InlineMath math="n" /> 個の複素数に対して <InlineMath math="\overline{z_1 z_2 \dots z_n} = \overline{z_1}\,\overline{z_2} \dots \overline{z_n}" /> が成り立つことを数学的帰納法で証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. <InlineMath math="n=2" /> のときは Proposition 1.1-2 (2) より成立している。
                        </p>
                        <p className="mt-4">
                            2. <InlineMath math="n=k" /> での成立を仮定する。 <InlineMath math="n=k+1" /> のとき、 <InlineMath math="W = z_1 z_2 \dots z_k" /> とおくと：
                            <BlockMath math="\overline{z_1 \dots z_k z_{k+1}} = \overline{W z_{k+1}}" />
                        </p>
                        <p>
                            再び Proposition 1.1-2 (2) を適用すると、
                            <BlockMath math="\overline{W z_{k+1}} = \overline{W} \cdot \overline{z_{k+1}}" />
                        </p>
                        <p>
                            仮定より <InlineMath math="\overline{W} = \overline{z_1} \dots \overline{z_k}" /> なので、
                            <BlockMath math="\overline{z_1 \dots z_{k+1}} = (\overline{z_1} \dots \overline{z_k}) \cdot \overline{z_{k+1}}" />
                            となり、 <InlineMath math="n=k+1" /> でも成立する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        閉円板 <InlineMath math="S = \{ z \in \mathbb{C} \mid |z| \le 1 \}" /> がコンパクト集合であることを、 Theorem 1.4-1 （ハイネ・ボレルの定理）を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.4-1 によれば、複素平面上の集合がコンパクトであるための必要十分条件は、それが「有界閉集合」であることである。
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><b>有界性</b>：すべての <InlineMath math="z \in S" /> に対して <InlineMath math="|z| \le 1" /> が成り立つため、 Definition 1.4-4 より有界である。</li>
                            <li><b>閉集合性</b>： <InlineMath math="S" /> の補集合は <InlineMath math="\{ z \mid |z| > 1 \}" /> であり、これは開円板の外部（開集合）である。 Definition 1.4-2 よりその補集合である <InlineMath math="S" /> は閉集合である。</li>
                        </ul>
                        <p className="mt-4">
                            したがって、 <InlineMath math="S" /> は有界閉集合であるため、ハイネ・ボレルの定理によりコンパクト集合である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        ド・モアブルの定理を用いて、三倍角の公式 <BlockMath math="\cos 3\theta = 4\cos^3 \theta - 3\cos \theta" /> を導け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.3-1 において <InlineMath math="n=3" /> とすると：
                            <BlockMath math="(\cos \theta + i \sin \theta)^3 = \cos 3\theta + i \sin 3\theta" />
                        </p>
                        <p>
                            左辺を二項展開（ <b>Proposition 1.1-1</b> と同様の多項式展開）すると：
                            <BlockMath math="\cos^3 \theta + 3\cos^2 \theta (i \sin \theta) + 3\cos \theta (i \sin \theta)^2 + (i \sin \theta)^3" />
                            <BlockMath math="\begin{aligned} &= \cos^3 \theta + 3i \cos^2 \theta \sin \theta - 3 \cos \theta \sin^2 \theta - i \sin^3 \theta \\ &= (\cos^3 \theta - 3 \cos \theta \sin^2 \theta) + i (3 \cos^2 \theta \sin \theta - \sin^3 \theta) \end{aligned}" />
                        </p>
                        <p>
                            実部を比較して：
                            <BlockMath math="\begin{aligned} \cos 3\theta &= \cos^3 \theta - 3 \cos \theta (1 - \cos^2 \theta) \\ &= \cos^3 \theta - 3 \cos \theta + 3 \cos^3 \theta \\ &= 4\cos^3 \theta - 3\cos \theta \end{aligned}" />
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
