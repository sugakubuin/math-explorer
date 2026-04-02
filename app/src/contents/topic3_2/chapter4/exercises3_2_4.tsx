import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_2_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        原点 <InlineMath math="0" /> から点 <InlineMath math="1+i" /> までの直線経路 <InlineMath math="\gamma" /> に沿って、関数 <InlineMath math="f(z) = z" /> を積分せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            経路 <InlineMath math="\gamma" /> を <InlineMath math="\gamma(t) = (1+i)t \quad (0 \le t \le 1)" /> とパラメータ表示すると、<InlineMath math="\gamma'(t) = 1+i" /> である。
                            Definition 4.1-1 より：
                        </p>
                        <BlockMath math="\begin{aligned} \int_\gamma z \, dz &= \int_0^1 (1+i)t \cdot (1+i) \, dt \\ &= (1+i)^2 \int_0^1 t \, dt \\ &= 2i \left[ \frac{t^2}{2} \right]_0^1 \\ &= i \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        単位円周 <InlineMath math="\gamma: |z|=1" /> を正方向に 1 周したときの次の積分を求めよ。
                    </p>
                    <BlockMath math="\oint_\gamma \frac{1}{z} \, dz" />
                    <ExerciseSolution>
                        <p>
                            Example 4.3-3 で計算した通り、<InlineMath math="\gamma(t) = e^{it} \quad (0 \le t \le 2\pi)" /> とすると、
                        </p>
                        <BlockMath math="\oint_\gamma \frac{1}{z} \, dz = \int_0^{2\pi} \frac{1}{e^{it}} \cdot ie^{it} \, dt = i \int_0^{2\pi} dt = 2\pi i" />
                        <p className="mt-2 text-sm italic">
                            ※ 被積分関数が特異点 <InlineMath math="z=0" /> を持つため、コーシーの積分定理は適用できない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        単位円周 <InlineMath math="\gamma: |z|=1" /> を正方向に 1 周したときの次の積分を求めよ。
                    </p>
                    <BlockMath math="\oint_\gamma e^z \, dz" />
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="f(z) = e^z" /> は複素平面全体で正則な整関数である。
                            複素平面は単連結領域（§4.3）であるため、コーシーの積分定理 (Theorem 4.3-1) により、
                        </p>
                        <BlockMath math="\oint_\gamma e^z \, dz = 0" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        経路 <InlineMath math="\gamma" /> を原点を中心とする半径 <InlineMath math="2" /> の円弧 <InlineMath math="|z|=2" /> のうち、<InlineMath math="z=2" /> から <InlineMath math="z=2i" /> まで（第1象限の円弧）とする。
                        ML 不等式 (Proposition 4.1-3) を用いて、次の積分の絶対値の上限を評価せよ。
                    </p>
                    <BlockMath math="\left| \int_\gamma \frac{1}{z^2} \, dz \right|" />
                    <ExerciseSolution>
                        <p>
                            (1) 経路 <InlineMath math="\gamma" /> の長さ <InlineMath math="L" />：
                            半径 <InlineMath math="2" /> の円の <InlineMath math="1/4" /> の長さであるから、<InlineMath math="L = \frac{1}{4} (2\pi \cdot 2) = \pi" />。
                        </p>
                        <p>
                            (2) 被積分関数の最大値 <InlineMath math="M" />：
                            <InlineMath math="|z|=2" /> 上で <InlineMath math="|f(z)| = |1/z^2| = 1/|z|^2 = 1/2^2 = 1/4" />。
                            したがって <InlineMath math="M = 1/4" /> である。
                        </p>
                        <p>
                            (3) ML 不等式による評価：
                        </p>
                        <BlockMath math="\left| \int_\gamma \frac{1}{z^2} \, dz \right| \le M \cdot L = \frac{1}{4} \cdot \pi = \frac{\pi}{4}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        原始関数を用いて、次の積分を求めよ。ただし <InlineMath math="\gamma" /> は点 <InlineMath math="0" /> から点 <InlineMath math="\pi i" /> までの任意の曲線とする。
                    </p>
                    <BlockMath math="\int_\gamma \cos z \, dz" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(z) = \cos z" /> の原始関数は <InlineMath math="F(z) = \sin z" /> である (Proposition 3.2-1)。
                            Theorem 4.2-1 より：
                        </p>
                        <BlockMath math="\begin{aligned} \int_\gamma \cos z \, dz &= F(\pi i) - F(0) \\ &= \sin(\pi i) - \sin 0 \\ &= i \sinh \pi \end{aligned}" />
                        <p className="mt-2 text-sm italic">
                            ※ ここで Theorem 3.2-1 の変換公式 <InlineMath math="\sin(iz) = i \sinh z" /> を用いた。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        中心 <InlineMath math="2" />、半径 <InlineMath math="1" /> の円周 <InlineMath math="C: |z-2|=1" /> に沿った次の積分を求めよ。
                    </p>
                    <BlockMath math="\oint_C \frac{1}{z^2+1} \, dz" />
                    <ExerciseSolution>
                        <p>
                            被積分関数 <InlineMath math="f(z) = \frac{1}{(z-i)(z+i)}" /> は <InlineMath math="z = \pm i" /> に特異点を持つ。
                            Example 4.3-2 で考察した通り、これらの特異点は円 <InlineMath math="|z-2|=1" /> の外部（中心からの距離は <InlineMath math="| \pm i - 2 | = \sqrt{4+1} = \sqrt{5} > 1" />）にある。
                        </p>
                        <p>
                            したがって、円の内部および境界において <InlineMath math="f(z)" /> は正則であるから、コーシーの積分定理 (Theorem 4.3-1) により、
                        </p>
                        <BlockMath math="\oint_C \frac{1}{z^2+1} \, dz = 0" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        複素共役関数 <InlineMath math="f(z) = \bar{z}" /> を、点 <InlineMath math="1" /> から点 <InlineMath math="-1" /> までの上半円弧 <InlineMath math="\gamma" />（半径 <InlineMath math="1" />）に沿って積分せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\gamma" /> を <InlineMath math="\gamma(t) = e^{it} \quad (0 \le t \le \pi)" /> とパラメータ表示すると、<InlineMath math="\gamma'(t) = i e^{it}" /> である。
                            また、<InlineMath math="\gamma(t)" /> 上で <InlineMath math="f(z) = \overline{e^{it}} = e^{-it}" /> となる。
                        </p>
                        <BlockMath math="\begin{aligned} \int_\gamma \bar{z} \, dz &= \int_0^\pi e^{-it} \cdot i e^{it} \, dt \\ &= \int_0^\pi i \, dt \\ &= [it]_0^\pi = \pi i \end{aligned}" />
                        <p className="mt-2 text-sm italic">
                            ※ <InlineMath math="f(z) = \bar{z}" /> は正則ではないため、始点と終点が同じ実軸上の 1, -1 であっても、経路（下半円など）が変われば積分の値も変わる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        領域 <InlineMath math="U" /> 上で閉路積分が常に 0 であることと、原始関数の存在が同値であることを、<InlineMath math="F(z) = \int_{z_0}^z f(\zeta) \, d\zeta" /> という関数を導入することで示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            (1) 原始関数 <InlineMath math="F(z)" /> が存在するとき、任意の閉曲線 <InlineMath math="\gamma" /> について <InlineMath math="\oint_\gamma f(z) \, dz = 0" /> となることは Theorem 4.2-1 より端点が一致するため明らかである。
                        </p>
                        <p className="mt-4">
                            (2) 逆に、任意の閉曲線での積分が 0 であるとする。このとき積分は経路に依存しない。固定した <InlineMath math="z_0 \in U" /> からの積分 <InlineMath math="F(z) = \int_{z_0}^z f(\zeta) \, d\zeta" /> を定義すると、これは <InlineMath math="z" /> の一価関数となる。
                            十分小さな <InlineMath math="\Delta z" /> に対し：
                        </p>
                        <BlockMath math="\frac{F(z+\Delta z) - F(z)}{\Delta z} = \frac{1}{\Delta z} \int_z^{z+\Delta z} f(\zeta) \, d\zeta" />
                        <p>
                            ここで右辺の積分を <InlineMath math="z" /> から <InlineMath math="z+\Delta z" /> への直線路で行うと、平均値の定理（または連続性）により <InlineMath math="\Delta z \to 0" /> のとき：
                        </p>
                        <BlockMath math="\frac{1}{\Delta z} \int_z^{z+\Delta z} f(\zeta) \, d\zeta \to f(z)" />
                        <p>
                            したがって <InlineMath math="F'(z) = f(z)" />。すなわち <InlineMath math="F(z)" /> は <InlineMath math="f(z)" /> の原始関数であり、正則である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        原点を中心とする半径 <InlineMath math="2" /> の円周 <InlineMath math="\gamma: |z|=2" /> に沿った次の積分を求めよ。
                    </p>
                    <BlockMath math="\oint_\gamma \frac{1}{z^2-1} \, dz" />
                    <ExerciseSolution>
                        <p>
                            被積分関数を部分分数分解すると：
                        </p>
                        <BlockMath math="\frac{1}{z^2-1} = \frac{1}{2} \left( \frac{1}{z-1} - \frac{1}{z+1} \right)" />
                        <p>
                            したがって、積分は：
                        </p>
                        <BlockMath math="\oint_\gamma \frac{1}{z^2-1} \, dz = \frac{1}{2} \oint_\gamma \frac{1}{z-1} \, dz - \frac{1}{2} \oint_\gamma \frac{1}{z+1} \, dz" />
                        <p>
                            ここで、<InlineMath math="z=1" /> および <InlineMath math="z=-1" /> はともに半径 <InlineMath math="2" /> の円 <InlineMath math="\gamma" /> の内部にある。
                            Example 4.4-1 の「経路変形原理」により、特異点を 1 つ含む閉路積分は、特異点を中心とする小さな円周上の積分と等しい。
                            Example 4.3-3 の結果を用いると：
                        </p>
                        <BlockMath math="\oint_\gamma \frac{1}{z-1} \, dz = 2\pi i, \quad \oint_\gamma \frac{1}{z+1} \, dz = 2\pi i" />
                        <p>
                            よって：
                        </p>
                        <BlockMath math="\oint_\gamma \frac{1}{z^2-1} \, dz = \frac{1}{2}(2\pi i) - \frac{1}{2}(2\pi i) = 0" />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        整数 <InlineMath math="n \neq -1" /> に対して、原点を通らない任意の閉曲線 <InlineMath math="\gamma" /> を考える。
                        もし <InlineMath math="n < -1" /> の場合、さらに <InlineMath math="\gamma" /> が原点を囲まないか、あるいは囲む場合であっても次の結論が成立することを示せ。
                    </p>
                    <BlockMath math="\oint_\gamma z^n \, dz = 0" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="n \neq -1" /> のとき、関数 <InlineMath math="f(z) = z^n" /> は <InlineMath math="F(z) = \frac{z^{n+1}}{n+1}" /> を原始関数として持つ（Example 4.2-1）。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>
                                <InlineMath math="n \ge 0" /> のとき、<InlineMath math="F(z)" /> は複素平面全体で一価正則である。
                            </li>
                            <li>
                                <InlineMath math="n \le -2" /> のとき、<InlineMath math="F(z)" /> は原点を除いた全平面 <InlineMath math="\mathbb{C} \setminus \{0\}" /> で一価正則である。
                            </li>
                        </ul>
                        <p className="mt-4">
                            Theorem 4.2-2 より、一価な原始関数が存在する領域内での閉路積分は常に 0 となる。
                            <InlineMath math="\gamma" /> が原点を通らないとき、<InlineMath math="n \ge 0" /> ならば複素平面全体で、<InlineMath math="n \le -2" /> ならば <InlineMath math="\mathbb{C} \setminus \{0\}" /> で <InlineMath math="F(z)" /> は原始関数として機能する。
                        </p>
                        <p>
                            したがって、いずれの場合も：
                        </p>
                        <BlockMath math="\oint_\gamma z^n \, dz = 0" />
                        <p className="mt-2 text-sm italic">
                            ※ <InlineMath math="n = -1" /> のときは、原始関数が多価関数である対数関数 <InlineMath math="\log z" /> になるため、原点を囲む閉路積分は <InlineMath math="2\pi i \neq 0" /> となり、この結論は成り立たない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
