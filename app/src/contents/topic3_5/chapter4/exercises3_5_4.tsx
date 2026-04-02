import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_5_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        次の偏微分方程式 (PDE) の<b>階数</b>を答え、それぞれが<b>線形</b>か<b>非線形</b>か判定せよ。
                    </p>
                    <ul className="list-decimal list-inside space-y-2 mt-4">
                        <li><InlineMath math="u_t + 5 u_x = 0" /></li>
                        <li><InlineMath math="u_{tt} = c^2 u_{xx}" /></li>
                        <li><InlineMath math="u_t + u u_x = \nu u_{xx}" /></li>
                    </ul>
                    <ExerciseSolution>
                        <p>
                            Definition 4.1-1 および 4.1-2 に基づき判定する。
                        </p>
                        <ol className="list-decimal list-inside space-y-3 mt-4">
                            <li><b>輸送方程式</b>： 最高階の偏導関数は 1 階（ <InlineMath math="u_t, u_x" /> ）である。また、未知関数 <InlineMath math="u" /> に関して 1 次式であるため、 <b>1 階・線形</b> である。</li>
                            <li><b>波動方程式</b>： 最高階の偏導関数は 2 階（ <InlineMath math="u_{tt}, u_{xx}" /> ）である。 <InlineMath math="u" /> とその導関数の 1 次式のみで構成されるため、 <b>2 階・線形</b> である。</li>
                            <li><b>粘性バーガーズ方程式</b>： 最高階の偏導関数は 2 階（ <InlineMath math="u_{xx}" /> ）である。項 <InlineMath math="u u_x" /> が未知関数とその導関数の積（ 2 次の項）となっているため、 <b>2 階・非線形</b> （より正確には準線形）である。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        熱方程式 <InlineMath math="u_t = \alpha u_{xx}" /> において、次の境界条件の物理的な意味を Definition 4.1-4 を参考に答えよ。
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                        <li><InlineMath math="u(0, t) = u(L, t) = 0" /></li>
                        <li><InlineMath math="u_x(0, t) = u_x(L, t) = 0" /></li>
                    </ul>
                    <ExerciseSolution>
                        <p>
                            1 番目は <b>ディリクレ条件</b> であり、境界上の温度を 0 度に固定することを意味する。
                        </p>
                        <p className="mt-2">
                            2 番目は <b>ノイマン条件</b> であり、境界における温度勾配が 0 であること、すなわち熱の出入りがない <b>断熱条件</b> を意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        PDE <InlineMath math="u_t + c u_x = 0" /> の <b>特性曲線</b> が直線 <InlineMath math="x - ct = x_0" /> となることを Definition 4.2-1 に基づき導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.2-1 より、特性方程式は <InlineMath math="\frac{dx}{dt} = \frac{a(x, t)}{b(x, t)}" /> である。
                            与えられた PDE では <InlineMath math="a(x, t) = c, \ b(x, t) = 1" /> であるから、
                            <BlockMath math="\frac{dx}{dt} = c" />
                            これを時間 <InlineMath math="t" /> について積分すると、
                            <BlockMath math="x(t) = ct + x_0 \implies x - ct = x_0" />
                            が得られる。よって、特性曲線は一定の速度 <InlineMath math="c" /> で移動する直線の族となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        特性曲線法を用いて、次の初期値問題を解け。
                        <BlockMath math="u_t + 2 u_x = 0, \quad u(x, 0) = \sin x" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            特性曲線は <InlineMath math="x - 2t = C" /> である。
                            Theorem 4.2-1 によれば、解は特性曲線上で一定であり、 <InlineMath math="u(x, t) = f(x - 2t)" /> の形を持つ。
                            初期条件 <InlineMath math="u(x, 0) = \sin x" /> より、 <InlineMath math="f(x) = \sin x" /> であるから、求める解は
                            <BlockMath math="u(x, t) = \sin(x - 2t)" />
                            となる。これは波形 <InlineMath math="\sin x" /> が速度 2 で <InlineMath math="x" /> の正の方向に進行する波を表している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        次の 2 階線形 PDE の <b>判別式</b> を計算し、双曲型・放物型・楕円型のいずれか判定せよ。
                        <BlockMath math="3 u_{xx} + 4 u_{xy} + u_{yy} = 0" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            係数は <InlineMath math="A = 3, \ B = 4, \ C = 1" /> である。
                            Definition 4.4-1 より、判別式 <InlineMath math="\Delta" /> は、
                            <BlockMath math="\Delta = B^2 - 4AC = 4^2 - 4(3)(1) = 16 - 12 = 4" />
                            である。 <InlineMath math="\Delta = 4 > 0" /> であるため、 Theorem 4.4-1 より、この PDE は <b>双曲型 (Hyperbolic)</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        ラプラス方程式 <InlineMath math="u_{xx} + u_{yy} = 0" /> は <b>楕円型</b> であることを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            係数は <InlineMath math="A = 1, \ B = 0, \ C = 1" /> である。
                            判別式は、
                            <BlockMath math="\Delta = B^2 - 4AC = 0^2 - 4(1)(1) = -4" />
                            である。 <InlineMath math="\Delta = -4 < 0" /> であるため、 Theorem 4.4-1 より、ラプラス方程式は <b>楕円型 (Elliptic)</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        バーガーズ方程式 <InlineMath math="u_t + u u_x = 0" /> において、衝撃波の両側の値が <InlineMath math="u_L = 2" />, <InlineMath math="u_R = 0" /> であるとき、その衝撃波の伝播速度 <InlineMath math="s" /> を Theorem 4.3-2 (Rankine-Hugoniot 条件) を用いて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            保存則形式 <InlineMath math="u_t + (\frac{1}{2}u^2)_x = 0" /> より、フラックスは <InlineMath math="F(u) = \frac{1}{2}u^2" /> である。
                            Theorem 4.3-2 に <InlineMath math="u_L = 2, u_R = 0" /> を代入すると、
                            <BlockMath math="s = \frac{F(u_R) - F(u_L)}{u_R - u_L} = \frac{\frac{1}{2}(0)^2 - \frac{1}{2}(2)^2}{0 - 2} = \frac{-2}{-2} = 1" />
                            よって、衝撃波の速度は <b>1</b> である。これは Example 4.3-2 の平均速度 <InlineMath math="(u_L+u_R)/2 = (2+0)/2 = 1" /> と一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        ソース項を持つ輸送方程式 <InlineMath math="u_t + c u_x = x" /> を初期条件 <InlineMath math="u(x, 0) = f(x)" /> のもとで解け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            特性曲線 <InlineMath math="x = x_0 + ct \implies x_0 = x - ct" /> 上での <InlineMath math="u" /> の全微分を考える。
                            Theorem 4.2-1 の証明と同様に、
                            <BlockMath math="\frac{du}{dt} = u_t + \frac{dx}{dt}u_x = u_t + c u_x = x(t)" />
                            特性曲線上の <InlineMath math="x(t) = x_0 + ct" /> を代入すると、 <InlineMath math="u" /> に関する常微分方程式が得られる。
                            <BlockMath math="\frac{du}{dt} = x_0 + ct" />
                            これを <InlineMath math="t" /> について 0 から <InlineMath math="t" /> まで積分すると、
                            <BlockMath math="u(t) - u(0) = \int_0^t (x_0 + cs) ds = x_0 t + \frac{1}{2}ct^2" />
                            初期条件 <InlineMath math="u(0) = f(x_0) = f(x-ct)" /> を用いて、
                            <BlockMath math="u(x, t) = f(x - ct) + (x - ct)t + \frac{1}{2}ct^2 = f(x - ct) + xt - \frac{1}{2}ct^2" />
                            を得る。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        バーガーズ方程式 <InlineMath math="u_t + u u_x = 0" /> において、初期条件 <InlineMath math="u(x, 0) = 1 - x" /> ( <InlineMath math="0 < x < 1" /> の範囲、他は 0) が与えられたとき、 Theorem 4.3-1 に基づき衝撃波が発生する時刻 <InlineMath math="T_c" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            初期条件 <InlineMath math="f(x) = 1 - x" /> の傾きは、領域内で <InlineMath math="f'(x) = -1" /> である。
                            Theorem 4.3-1 によれば、衝撃波の発生時間は
                            <BlockMath math="T_c = -\frac{1}{\min f'(x)}" />
                            で与えられる。本問では <InlineMath math="\min f'(x) = -1" /> であるため、衝撃波発生時刻は
                            <BlockMath math="T_c = -\frac{1}{-1} = 1" />
                            となる。時刻 <InlineMath math="t = 1" /> において波の後方が前方に完全に追い付き、不連続面が形成される。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        双曲型 PDE <InlineMath math="u_{xx} - 4 u_{yy} = 0" /> を標準形 <InlineMath math="u_{\xi\eta} = 0" /> に変換するための座標系 <InlineMath math="(\xi, \eta)" /> を Theorem 4.4-2 に基づき求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            係数は <InlineMath math="A = 1, \ B = 0, \ C = -4" /> である。
                            Theorem 4.4-1 の証明にある特性方程式 <InlineMath math="A(y')^2 - B y' + C = 0" /> は、
                            <BlockMath math="1(y')^2 - 4 = 0 \implies (y')^2 = 4 \implies \frac{dy}{dx} = \pm 2" />
                            これを積分すると、2 族の特性曲線が得られる：
                            <BlockMath math="y - 2x = c_1, \quad y + 2x = c_2" />
                            これらを新座標として選ぶ（ Theorem 4.4-2 ）：
                            <BlockMath math="\xi = y - 2x, \quad \eta = y + 2x" />
                            この座標変換を行うことで、元の方程式は混合偏導関数のみを含む <InlineMath math="u_{\xi\eta} + \dots = 0" /> の形式（標準形）へ帰着される。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
