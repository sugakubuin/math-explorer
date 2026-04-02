import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_2_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        半径 <InlineMath math="2" /> の円周 <InlineMath math="C: |z|=2" /> を正方向に 1 周するときの次の積分を、コーシーの積分公式を用いて求めよ。
                    </p>
                    <BlockMath math="\oint_C \frac{e^z}{z - i} \, dz" />
                    <ExerciseSolution>
                        <p>
                            点 <InlineMath math="z_0 = i" /> は円 <InlineMath math="C" /> の内部にある。
                            関数 <InlineMath math="f(z) = e^z" /> は複素平面全体で正則である。
                            Theorem 5.1-1 (コーシーの積分公式) により、
                        </p>
                        <BlockMath math="\oint_C \frac{e^z}{z - i} \, dz = 2\pi i \cdot f(i) = 2\pi i \cdot e^i" />
                        <p>
                            オイラーの公式を用いると <InlineMath math="e^i = \cos 1 + i \sin 1" /> であるから、
                        </p>
                        <BlockMath math="2\pi i (\cos 1 + i \sin 1) = 2\pi (i \cos 1 - \sin 1)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        単位円周 <InlineMath math="C: |z|=1" /> を正方向に 1 周するときの次の積分を、グルサの公式を用いて求めよ。
                    </p>
                    <BlockMath math="\oint_C \frac{\cos z}{z^3} \, dz" />
                    <ExerciseSolution>
                        <p>
                            点 <InlineMath math="z_0 = 0" /> は円 <InlineMath math="C" /> の内部にあり、関数 <InlineMath math="f(z) = \cos z" /> は正則である。
                            Theorem 5.1-2 (グルサの公式) の <InlineMath math="n=2" /> の場合：
                        </p>
                        <BlockMath math="f''(z_0) = \frac{2!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^3} \, dz" />
                        <p>
                            これより、
                        </p>
                        <BlockMath math="\oint_C \frac{\cos z}{z^3} \, dz = \frac{2\pi i}{2!} f''(0)" />
                        <p>
                            <InlineMath math="f'(z) = -\sin z" />、<InlineMath math="f''(z) = -\cos z" /> であるから、<InlineMath math="f''(0) = -1" />。
                            したがって、
                        </p>
                        <BlockMath math="\frac{2\pi i}{2} \cdot (-1) = -\pi i" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        関数 <InlineMath math="f(z) = \frac{1}{1-z}" /> を点 <InlineMath math="z_0 = i" /> を中心としてテイラー展開せよ。またその収束半径を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="w = z - i" /> とおくと、<InlineMath math="z = w + i" />。
                        </p>
                        <BlockMath math="\begin{aligned} \frac{1}{1 - (w + i)} &= \frac{1}{(1-i) - w} \\ &= \frac{1}{1-i} \cdot \frac{1}{1 - \frac{w}{1-i}} \end{aligned}" />
                        <p>
                            等比級数展開の公式を用いると：
                        </p>
                        <BlockMath math="\frac{1}{1-i} \sum_{n=0}^\infty \left( \frac{w}{1-i} \right)^n = \sum_{n=0}^\infty \frac{(z-i)^n}{(1-i)^{n+1}}" />
                        <p>
                            収束条件は <InlineMath math="|w / (1-i)| < 1" />、すなわち <InlineMath math="|z-i| < |1-i| = \sqrt{2}" /> である。
                            したがって、収束半径は <InlineMath math="\sqrt{2}" /> である。
                        </p>
                        <p className="mt-2 text-sm italic">
                            ※ 収束半径は、中心 <InlineMath math="i" /> から特異点 <InlineMath math="z=1" /> までの距離 <InlineMath math="|1-i| = \sqrt{2}" /> に一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        リュービルの定理を用いて、定数でない整関数は複素平面全体で有界になり得ないことを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.2-2 (リュービルの定理) は、「有界な整関数は定数である」という命題である。
                            これの対偶をとると、「定数でない整関数は有界ではない」となる。
                        </p>
                        <p className="mt-2">
                            具体的には、関数 <InlineMath math="f(z)" /> が定数でなく、かつ複素平面全体で正則（整関数）であるならば、任意の大きな実数 <InlineMath math="M" /> に対して、<InlineMath math="|f(z)| > M" /> となるような点 <InlineMath math="z" /> が必ず存在することを意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        単位円板 <InlineMath math="D = \{z \mid |z| \le 1\}" /> において、関数 <InlineMath math="f(z) = e^z" /> の絶対値 <InlineMath math="|f(z)|" /> の最大値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Corollary 5.3-1 (境界上での最大値) により、最大値は境界 <InlineMath math="|z|=1" /> 上で達成される。
                            <InlineMath math="z = x + iy" /> とすると、<InlineMath math="|e^z| = |e^x e^{iy}| = e^x" /> である。
                        </p>
                        <p>
                            単位円周 <InlineMath math="x^2 + y^2 = 1" /> において、実部 <InlineMath math="x" /> の取り得る範囲は <InlineMath math="-1 \le x \le 1" /> である。
                            実指数関数 <InlineMath math="e^x" /> は単調増加であるから、<InlineMath math="x=1" />（すなわち <InlineMath math="z=1" />）で最大値をとる。
                        </p>
                        <p className="mt-2">
                            したがって、最大値は <InlineMath math="e^1 = e" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        2つの正則関数 <InlineMath math="f(z)" /> と <InlineMath math="g(z)" /> が、ある円板内で <InlineMath math="f(z)g(z) = 0" /> を満たすならば、その円板内で <InlineMath math="f(z) \equiv 0" /> または <InlineMath math="g(z) \equiv 0" /> であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            零点の孤立性と一致の定理（§5.4）を用いる。
                            もし <InlineMath math="f(z)" /> が円板内で 0 でない点を持つならば、その零点は孤立している。
                            <InlineMath math="f(z) \neq 0" /> である近傍においては、<InlineMath math="f(z)g(z) = 0" /> より <InlineMath math="g(z) = 0" /> でなければならない。
                        </p>
                        <p>
                            この「<InlineMath math="g(z) = 0" /> となる近傍」の中に集積点を含めば、Theorem 5.4-2 (一致の定理) により、領域全体で <InlineMath math="g(z) \equiv 0" /> が導かれる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        平均値性質を用いて、単位円周 <InlineMath math="z = e^{i\theta}" /> 上での関数値の平均 <InlineMath math="\frac{1}{2\pi} \int_0^{2\pi} e^{\cos \theta} \cos(\sin \theta) \, d\theta" /> が 1 であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="f(z) = e^z" /> を考える。これは複素平面全体で正則である。
                            §5.3 の「平均値としての解釈」により、中心 <InlineMath math="z_0 = 0" />、半径 <InlineMath math="1" /> の円周について：
                        </p>
                        <BlockMath math="f(0) = \frac{1}{2\pi} \int_0^{2\pi} f(e^{i\theta}) \, d\theta" />
                        <p>
                            左辺は <InlineMath math="e^0 = 1" /> である。右辺は、
                        </p>
                        <BlockMath math="\begin{aligned} f(e^{i\theta}) &= e^{\cos \theta + i \sin \theta} = e^{\cos \theta} e^{i \sin \theta} \\ &= e^{\cos \theta} (\cos(\sin \theta) + i \sin(\sin \theta)) \end{aligned}" />
                        <p>
                            この実部を考えると、与えられた積分式が得られる。虚部については 0 となる。
                            よって積分の値は 1 である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        複素平面全体で正則な関数 <InlineMath math="f(z)" /> が、ある定数 <InlineMath math="A, R > 0" /> と整数 <InlineMath math="k \ge 0" /> に対して、
                        <InlineMath math="|z| > R" /> で <InlineMath math="|f(z)| \le A |z|^k" /> を満たすならば、<InlineMath math="f(z)" /> は高々 <InlineMath math="k" /> 次の多項式であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            グルサの公式による係数の評価（コーシーの推定式）を用いる。
                            原点を中心とする十分大きな半径 <InlineMath math="\rho > R" /> の円周 <InlineMath math="C_\rho" /> 上での積分を考えると：
                        </p>
                        <BlockMath math="|f^{(n)}(0)| = \left| \frac{n!}{2\pi i} \oint_{C_\rho} \frac{f(z)}{z^{n+1}} dz \right| \le \frac{n!}{2\pi} \cdot \frac{A \rho^k}{\rho^{n+1}} \cdot 2\pi \rho = \frac{n! A}{\rho^{n-k}}" />
                        <p>
                            ここで <InlineMath math="n > k" /> の場合、<InlineMath math="\rho \to \infty" /> とすると右辺は 0 に収束する。
                            したがって <InlineMath math="n > k" /> なる全ての <InlineMath math="n" /> に対して <InlineMath math="f^{(n)}(0) = 0" /> である。
                            原点周りでのテイラー展開（Theorem 5.4-1）は <InlineMath math="n \le k" /> の項のみとなり、<InlineMath math="f(z)" /> は高々 <InlineMath math="k" /> 次の多項式である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        代数学の基本定理 (Theorem 5.2-3) の証明において、<InlineMath math="P(z)" /> が零点を持たないと仮定したとき、なぜ <InlineMath math="f(z) = 1/P(z)" /> が有界になるのか、その根拠を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            2つのステップに分けて考える。
                        </p>
                        <ul className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                遠方での挙動：<InlineMath math="P(z) = a_n z^n + \dots + a_0 \ (a_n \neq 0)" /> のとき、<InlineMath math="|z| \to \infty" /> で <InlineMath math="|P(z)| \to \infty" /> である。したがって、ある巨大な半径 <InlineMath math="R" /> の外側では <InlineMath math="|f(z)| = 1/|P(z)|" /> はいくらでも小さくなり、有界である。
                            </li>
                            <li>
                                有界閉集合上での挙動：閉円板 <InlineMath math="|z| \le R" /> において、<InlineMath math="f(z)" /> は連続関数である。有界閉集合上の連続関数は必ず最大値を持つという実解析の性質（最大値・最小値の定理）から、この範囲内でも <InlineMath math="f(z)" /> は有界である。
                            </li>
                        </ul>
                        <p className="mt-2">
                            以上より、複素平面全体で <InlineMath math="f(z)" /> は有界となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        円板 <InlineMath math="|z| < R" /> で正則な関数 <InlineMath math="f(z)" /> が、<InlineMath math="f(0) = 0" /> かつその領域で <InlineMath math="|f(z)| \le 1" /> を満たすとする。このとき、その領域全体で <InlineMath math="|f(z)| \le |z| / R" /> が成り立つことを示せ（シュワルツの補題の導入）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="g(z) = f(z)/z" /> を考える。
                            <InlineMath math="f(0)=0" /> より、<InlineMath math="z=0" /> は除去可能特異点であり（§6.2）、<InlineMath math="g(z)" /> は円板全体で正則として定義できる。
                            最大値原理（Theorem 5.3-1）により、半径 <InlineMath math="\rho < R" /> の円周上での最大値を考えると、
                        </p>
                        <BlockMath math="|g(z)| \le \max_{|\zeta|=\rho} \left| \frac{f(\zeta)}{\zeta} \right| \le \frac{1}{\rho}" />
                        <p>
                            <InlineMath math="\rho \to R" /> とすると、<InlineMath math="|g(z)| \le 1/R" /> を得る。
                            これより <InlineMath math="|f(z)| \le |z|/R" /> が導かれる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
