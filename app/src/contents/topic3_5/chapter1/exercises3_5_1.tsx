import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_5_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        微分方程式 <b><InlineMath math="y'' + 3xy' + (x^2 + 1)y = 0" /></b> において、点 <b><InlineMath math="x = 0" /></b> が通常点であることを示し、この点まわりのべき級数解の最小収束半径を推定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            与えられた方程式の係数関数は <b><InlineMath math="p(x) = 3x" /></b>, <b><InlineMath math="q(x) = x^2 + 1" /></b> である。
                            これらの関数はすべての実数 <b><InlineMath math="x" /></b> において多項式であり、したがって <b><InlineMath math="x = 0" /></b> を含む全領域で解析的（べき級数展開可能）である。
                            Definition 1.1-2 より、係数関数が点 <b><InlineMath math="x_0" /></b> で解析的であればその点は通常点であるから、<b><InlineMath math="x = 0" /></b> は通常点である。
                        </p>
                        <p className="mt-4">
                            Theorem 1.1-1 によれば、べき級数解の収束半径は、係数関数の収束半径のうち最小のもの以上となる。
                            本問では <b><InlineMath math="p(x), q(x)" /></b> は多項式であるため、複素平面全体で解析的であり、有限な特異点を持たない。
                            したがって、収束半径は <b><InlineMath math="\infty" /></b>（無限大）であると推定される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        微分方程式 <b><InlineMath math="(x^2 - 1)y'' + xy' - 4y = 0" /></b> について、すべての特異点を求め、それぞれが確定特異点か非確定特異点か判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            方程式を標準形 <b><InlineMath math="y'' + p(x)y' + q(x)y = 0" /></b> に直すと、
                            <BlockMath math="y'' + \frac{x}{x^2 - 1}y' - \frac{4}{x^2 - 1}y = 0" />
                            となる。係数が解析的でなくなる点は <b><InlineMath math="x^2 - 1 = 0" /></b>、すなわち <b><InlineMath math="x = 1" /></b> および <b><InlineMath math="x = -1" /></b> である。
                        </p>
                        <p className="mt-4">
                            <b>(1) <InlineMath math="x = 1" /> の場合</b>
                            <BlockMath math="\lim_{x \to 1} (x-1)p(x) = \lim_{x \to 1} \frac{(x-1)x}{(x-1)(x+1)} = \frac{1}{2}" />
                            <BlockMath math="\lim_{x \to 1} (x-1)^2q(x) = \lim_{x \to 1} \frac{-4(x-1)^2}{(x-1)(x+1)} = 0" />
                            いずれも有限確定値を持つため、Definition 1.2-2 より、<b><InlineMath math="x = 1" /></b> は<b>確定特異点</b>である。
                        </p>
                        <p className="mt-4">
                            <b>(2) <InlineMath math="x = -1" /> の場合</b>
                            <BlockMath math="\lim_{x \to -1} (x+1)p(x) = \lim_{x \to -1} \frac{(x+1)x}{(x-1)(x+1)} = \frac{1}{2}" />
                            <BlockMath math="\lim_{x \to -1} (x+1)^2q(x) = \lim_{x \to -1} \frac{-4(x+1)^2}{(x-1)(x+1)} = 0" />
                            同様に、<b><InlineMath math="x = -1" /></b> も<b>確定特異点</b>である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        微分方程式 <b><InlineMath math="x^2 y'' + 4x y' + 2y = 0" /></b> の <b><InlineMath math="x = 0" /></b> における指標方程式を求め、その解を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-3 に従い、指標方程式 <b><InlineMath math="\rho(\rho-1) + p_0 \rho + q_0 = 0" /></b> を求める。
                            標準形での係数は <b><InlineMath math="p(x) = \frac{4}{x}" /></b>, <b><InlineMath math="q(x) = \frac{2}{x^2}" /></b> であるから、
                            <BlockMath math="p_0 = \lim_{x \to 0} x \cdot \frac{4}{x} = 4, \quad q_0 = \lim_{x \to 0} x^2 \cdot \frac{2}{x^2} = 2" />
                            となる。指標方程式は、
                            <BlockMath math="\rho(\rho-1) + 4\rho + 2 = 0 \implies \rho^2 + 3\rho + 2 = 0" />
                            これを解くと、
                            <BlockMath math="(\rho + 1)(\rho + 2) = 0 \implies \rho = -1, -2" />
                            を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        エアリー方程式 <b><InlineMath math="y'' - xy = 0" /></b> に対して、通常点 <b><InlineMath math="x = 0" /></b> まわりのべき級数解 <b><InlineMath math="y = \sum_{n=0}^\infty a_n x^n" /></b> を仮定したときの係数 <b><InlineMath math="a_n" /></b> に関する漸化式を導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            解 <b><InlineMath math="y = \sum_{n=0}^\infty a_n x^n" /></b> を微分して方程式に代入すると、
                            <BlockMath math="\sum_{n=2}^\infty n(n-1)a_n x^{n-2} - x \sum_{n=0}^\infty a_n x^n = 0" />
                            第 1 項の添字をずらして <b><InlineMath math="k = n-2" /></b> とし、第 2 項を <b><InlineMath math="k = n+1" /></b> と整理すると、
                            <BlockMath math="\sum_{k=0}^\infty (k+2)(k+1)a_{k+2} x^k - \sum_{k=1}^\infty a_{k-1} x^k = 0" />
                            となる。<b><InlineMath math="x^0" /></b> の項を分離し、定数項と <b><InlineMath math="k \geq 1" /></b> の項について係数比較を行う。
                            <ul className="list-none space-y-2 mt-4">
                                <li><b><InlineMath math="k = 0" /></b>： <b><InlineMath math="2 \cdot 1 \cdot a_2 = 0 \implies a_2 = 0" /></b></li>
                                <li><b><InlineMath math="k \geq 1" /></b>： <b><InlineMath math="(k+2)(k+1)a_{k+2} - a_{k-1} = 0" /></b></li>
                            </ul>
                            よって、求める漸化式は次のように書ける。
                            <BlockMath math="a_{n+2} = \frac{a_{n-1}}{(n+2)(n+1)} \quad (n \geq 1)" />
                            （また <b><InlineMath math="a_2 = 0" /></b> である。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        次数 <b><InlineMath math="\nu = 1/2" /></b> のベッセル方程式 <b><InlineMath math="x^2 y'' + xy' + (x^2 - 1/4)y = 0" /></b> の指標方程式の解が <b><InlineMath math="\rho = \pm 1/2" /></b> となることを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            与えられた方程式を標準形に直すと、
                            <BlockMath math="y'' + \frac{1}{x}y' + \frac{x^2 - 1/4}{x^2}y = 0" />
                            である。係数から <b><InlineMath math="p_0, q_0" /></b> を求めると、
                            <BlockMath math="p_0 = \lim_{x \to 0} x \cdot \frac{1}{x} = 1, \quad q_0 = \lim_{x \to 0} x^2 \cdot \frac{x^2 - 1/4}{x^2} = -1/4" />
                            となる。Definition 1.2-3 より指標方程式は、
                            <BlockMath math="\rho(\rho-1) + 1 \cdot \rho - \frac{1}{4} = 0 \implies \rho^2 - \frac{1}{4} = 0" />
                            これを解くと、
                            <BlockMath math="\rho^2 = \frac{1}{4} \implies \rho = \pm \frac{1}{2}" />
                            となり、題意が示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        次数 2 のルジャンドル多項式 <b><InlineMath math="P_2(x) = \frac{1}{2}(3x^2 - 1)" /></b> が、ルジャンドル方程式 <b><InlineMath math="(1-x^2)y'' - 2xy' + n(n+1)y = 0" /></b> の <b><InlineMath math="n=2" /></b> の場合の解であることを直接代入により確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b><InlineMath math="y = \frac{1}{2}(3x^2 - 1)" /></b> を微分する：
                            <BlockMath math="y' = 3x, \quad y'' = 3" />
                            これらを <b><InlineMath math="n=2" /></b> のルジャンドル方程式の左辺に代入する：
                            <BlockMath math="\begin{aligned} L.H.S. &= (1-x^2)(3) - 2x(3x) + 2(3)\left[\frac{1}{2}(3x^2 - 1)\right] \\ &= 3 - 3x^2 - 6x^2 + 3(3x^2 - 1) \\ &= 3 - 9x^2 + 9x^2 - 3 \\ &= 0 \end{aligned}" />
                            左辺が 0 となり、Definition 1.5-1 を満たすことが確認された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        ルジャンドル多項式 <b><InlineMath math="P_0(x) = 1" /></b> および <b><InlineMath math="P_1(x) = x" /></b> が区間 <b><InlineMath math="[-1, 1]" /></b> で直交すること、すなわち積分 <b><InlineMath math="\int_{-1}^1 P_0(x)P_1(x) \, dx = 0" /></b> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            実際に積分を計算する：
                            <BlockMath math="\begin{aligned} \int_{-1}^1 P_0(x)P_1(x) \, dx &= \int_{-1}^1 1 \cdot x \, dx \\ &= \left[ \frac{x^2}{2} \right]_{-1}^1 \\ &= \frac{1^2}{2} - \frac{(-1)^2}{2} = 0 \end{aligned}" />
                            積分値が 0 となるため、Theorem 1.5-2 の主張通り直交することが確認できた。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        第一種ベッセル関数 <b><InlineMath math="J_\nu(x)" /></b> の級数表示 <b><InlineMath math="J_\nu(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \, \Gamma(m+\nu+1)} \left( \frac{x}{2} \right)^{2m+\nu}" /></b> を用いて、次の関係式（Proposition 1.4-1）を証明せよ。
                        <BlockMath math="\frac{d}{dx}[x^\nu J_\nu(x)] = x^\nu J_{\nu-1}(x)" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、<b><InlineMath math="x^\nu J_\nu(x)" /></b> の級数表示を書き下すと、
                            <BlockMath math="x^\nu J_\nu(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma(m+\nu+1) 2^{2m+\nu}} x^{2m+2\nu}" />
                            これを <b><InlineMath math="x" /></b> で項別微分する：
                            <BlockMath math="\begin{aligned} \frac{d}{dx}[x^\nu J_\nu(x)] &= \sum_{m=0}^\infty \frac{(-1)^m (2m+2\nu)}{m! \Gamma(m+\nu+1) 2^{2m+\nu}} x^{2m+2\nu-1} \\ &= \sum_{m=0}^\infty \frac{(-1)^m \cdot 2(m+\nu)}{m! (m+\nu)\Gamma(m+\nu) 2^{2m+\nu}} x^{2m+2\nu-1} \end{aligned}" />
                            ここで <b><InlineMath math="\Gamma(m+\nu+1) = (m+\nu)\Gamma(m+\nu)" /></b> を用いた。係数の 2 と <b><InlineMath math="2^{2m+\nu}" /></b> を整理すると、
                            <BlockMath math="\begin{aligned} &= \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma(m+\nu)} \frac{1}{2^{2m+\nu-1}} x^{2m+2\nu-1} \\ &= x^\nu \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma(m+\nu)} \left( \frac{x}{2} \right)^{2m+\nu-1} \end{aligned}" />
                            最右辺の級数は <b><InlineMath math="J_{\nu-1}(x)" /></b> の定義そのものである。よって
                            <BlockMath math="\frac{d}{dx}[x^\nu J_\nu(x)] = x^\nu J_{\nu-1}(x)" />
                            が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        ロドリゲスの公式 <b><InlineMath math="P_n(x) = \frac{1}{2^n n!} \frac{d^n}{dx^n} (x^2 - 1)^n" /></b> を用いて、次数 <b><InlineMath math="n = 2" /></b> のルジャンドル多項式を導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b><InlineMath math="n = 2" /></b> を公式に代入すると、
                            <BlockMath math="P_2(x) = \frac{1}{2^2 \cdot 2!} \frac{d^2}{dx^2} (x^2 - 1)^2" />
                            まず <b><InlineMath math="(x^2 - 1)^2" /></b> を展開する：
                            <BlockMath math="(x^4 - 2x^2 + 1)" />
                            これを 2 回微分する：
                            <BlockMath math="\frac{d}{dx}(4x^3 - 4x) = 12x^2 - 4" />
                            最後に定数係数 <b><InlineMath math="\frac{1}{4 \cdot 2} = \frac{1}{8}" /></b> を掛ける：
                            <BlockMath math="P_2(x) = \frac{1}{8}(12x^2 - 4) = \frac{3}{2}x^2 - \frac{1}{2} = \frac{1}{2}(3x^2 - 1)" />
                            これは Definition 1.5-2 で与えられた式と一致する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        微分方程式 <b><InlineMath math="xy'' + y = 0" /></b> の <b><InlineMath math="x = 0" /></b> まわりのフロベニウス解を考える。指標方程式の解が <b><InlineMath math="\rho_1 = 1, \rho_2 = 0" /></b> となることを示し、Theorem 1.3-1 に基づき、独立な 2 つの解の形がどのように表現されるか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            標準形 <b><InlineMath math="y'' + 0 \cdot y' + \frac{1}{x}y = 0" /></b> より、<b><InlineMath math="p(x) = 0, q(x) = \frac{1}{x}" /></b>。
                            確定特異点判定： <b><InlineMath math="xp(x) = 0, x^2q(x) = x" /></b>。
                            <b><InlineMath math="p_0 = 0, q_0 = \lim_{x \to 0} x = 0" /></b>。
                            指標方程式は <b><InlineMath math="\rho(\rho-1) + 0 \cdot \rho + 0 = 0 \implies \rho(\rho-1) = 0" /></b>。
                            よって <b><InlineMath math="\rho_1 = 1, \rho_2 = 0" /></b> である。
                        </p>
                        <p className="mt-4">
                            Theorem 1.3-1 (フロベニウスの定理) によれば、指標の差 <b><InlineMath math="\rho_1 - \rho_2 = 1" /></b> は正の整数である（ケース III）。
                            したがって、1 つ目の解 <b><InlineMath math="y_1(x)" /></b> は <b><InlineMath math="\rho_1 = 1" /></b> に対応し、
                            <BlockMath math="y_1(x) = x \sum_{n=0}^\infty a_n x^n = a_0 x + a_1 x^2 + \dots" />
                            の形を持つ。もう 1 つの線形独立な解 <b><InlineMath math="y_2(x)" /></b> は、対数項を含み
                            <BlockMath math="y_2(x) = c y_1(x) \ln x + \sum_{n=0}^\infty b_n x^n" />
                            の形となる。具体的に漸化式を解くと、<b><InlineMath math="\rho=0" /></b> で係数が決定できなくなるため、一般に対数項 <b><InlineMath math="c \neq 0" /></b> が必要となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
