import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_5_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        線密度 <InlineMath math="\rho = 0.01 \text{ kg/m}" />、張力 <InlineMath math="T = 100 \text{ N}" /> の弦を伝わる波の速度 <InlineMath math="c" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1 次元波動方程式において、波の速度 <InlineMath math="c" /> は物理的な定数として以下のように定義される（Example 6.1-1）：
                            <BlockMath math="c = \sqrt{\frac{T}{\rho}}" />
                        </p>
                        <p>
                            与えられた数値を代入すると：
                            <BlockMath math="c = \sqrt{\frac{100}{0.01}} = \sqrt{10000} = 100 \text{ m/s}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        無限に長い弦において、初期変位 <InlineMath math="u(x, 0) = f(x)" />、初期速度 <InlineMath math="u_t(x, 0) = 0" /> が与えられたときのダランベールの公式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ダランベールの公式（Theorem 6.2-1）は以下の通りである：
                            <BlockMath math="u(x, t) = \frac{f(x+ct) + f(x-ct)}{2} + \frac{1}{2c} \int_{x-ct}^{x+ct} g(s) ds" />
                        </p>
                        <p>
                            ここでは初期速度 <InlineMath math="g(s) = 0" /> なので、第 2 項の積分は 0 となる。したがって、
                            <BlockMath math="u(x, t) = \frac{f(x+ct) + f(x-ct)}{2}" />
                            を得る。これは初期波形が左右に半分ずつ分かれて速度 <InlineMath math="c" /> で進行していくことを意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        任意の微分可能な関数 <InlineMath math="\phi(z)" /> に対して、関数 <InlineMath math="u(x, t) = \phi(x-ct)" /> は波動方程式 <InlineMath math="u_{tt} = c^2 u_{xx}" /> を満たすことを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            合成関数の微分を用いる。
                            <BlockMath math="\begin{aligned} u_x &= \phi'(x-ct) \cdot 1 \\ u_{xx} &= \phi''(x-ct) \end{aligned}" />
                            また、時刻についての微分は：
                            <BlockMath math="\begin{aligned} u_t &= \phi'(x-ct) \cdot (-c) \\ u_{tt} &= \phi''(x-ct) \cdot (-c)^2 = c^2 \phi''(x-ct) \end{aligned}" />
                        </p>
                        <p>
                            以上より、
                            <BlockMath math="u_{tt} = c^2 \phi''(x-ct) = c^2 u_{xx}" />
                            が成り立つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        無限領域における初期値問題
                        <BlockMath math="u_{tt} = 4 u_{xx}, \quad u(x, 0) = e^{-x^2}, \quad u_t(x, 0) = 0" />
                        の、時刻 <InlineMath math="t=1" /> における原点 <InlineMath math="x=0" /> での変位を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            波の速度は <InlineMath math="c = \sqrt{4} = 2" /> である。
                            初期速度が 0 なので、問題 6.2 の結果を用いると：
                            <BlockMath math="u(x, t) = \frac{e^{-(x+2t)^2} + e^{-(x-2t)^2}}{2}" />
                        </p>
                        <p>
                            <InlineMath math="x=0, t=1" /> を代入すると：
                            <BlockMath math="u(0, 1) = \frac{e^{-(0+2)^2} + e^{-(0-2)^2}}{2} = \frac{e^{-4} + e^{-4}}{2} = e^{-4}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        両端固定の弦（<InlineMath math="0 < x < L" />）の初期境界値問題：
                        <BlockMath math="u_{tt} = c^2 u_{xx}, \quad u(0, t)=u(L, t)=0, \quad u(x, 0) = \sin(2\pi x/L), \quad u_t(x, 0) = 0" />
                        の解を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            分離変数法の一般解（Example 6.3-1, 6.3-2）を用いる。
                            初期条件が単一のモード <InlineMath math="n=2" /> の形をしているため、重ね合わせの係数は <InlineMath math="A_2 = 1" />、それ以外の <InlineMath math="A_n = 0" /> である。また初期速度 0 より <InlineMath math="B_n = 0" /> である。
                        </p>
                        <p>
                            基本振動数 <InlineMath math="\omega_n = \frac{cn\pi}{L}" /> において <InlineMath math="n=2" /> のモード解は：
                            <BlockMath math="u(x, t) = \sin\left(\frac{2\pi x}{L}\right) \cos\left(\frac{2c\pi t}{L}\right)" />
                            である。これが境界条件および初期条件をすべて満たす解である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        長さ <InlineMath math="L" /> の弦の全エネルギー
                        <BlockMath math="E(t) = \frac{1}{2} \int_0^L \left[ (u_t)^2 + c^2 (u_x)^2 \right] dx" />
                        を考える。解が <InlineMath math="u(x, t) = A \sin\left(\frac{n\pi x}{L}\right) \cos\left(\frac{cn\pi t}{L}\right)" /> で与えられるとき、
                        このエネルギー <InlineMath math="E(t)" /> が時刻 <InlineMath math="t" /> によらないことを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            偏導関数を計算する：
                            <BlockMath math="\begin{aligned} u_t &= -A \frac{cn\pi}{L} \sin\left(\frac{n\pi x}{L}\right) \sin\left(\frac{cn\pi t}{L}\right) \\ u_x &= A \frac{n\pi}{L} \cos\left(\frac{n\pi x}{L}\right) \cos\left(\frac{cn\pi t}{L}\right) \end{aligned}" />
                        </p>
                        <p>
                            エネルギーの被積分関数を計算する：
                            <BlockMath math="\begin{aligned} (u_t)^2 + c^2 (u_x)^2 &= A^2 \frac{c^2 n^2 \pi^2}{L^2} \sin^2 \left(\frac{n\pi x}{L}\right) \sin^2 \left(\frac{cn\pi t}{L}\right) \\ &\quad + c^2 A^2 \frac{n^2 \pi^2}{L^2} \cos^2 \left(\frac{n\pi x}{L}\right) \cos^2 \left(\frac{cn\pi t}{L}\right) \end{aligned}" />
                            全積分を計算すると：
                            <BlockMath math="\begin{aligned} E(t) &= \frac{1}{2} A^2 \frac{c^2 n^2 \pi^2}{L^2} \left[ \sin^2 (\omega t) \int_0^L \sin^2 \frac{n\pi x}{L} dx + \cos^2 (\omega t) \int_0^L \cos^2 \frac{n\pi x}{L} dx \right] \\ &= \frac{1}{2} A^2 \frac{c^2 n^2 \pi^2}{L^2} \left[ \sin^2 (\omega t) \cdot \frac{L}{2} + \cos^2 (\omega t) \cdot \frac{L}{2} \right] \\ &= \frac{A^2 c^2 n^2 \pi^2}{4L} (\sin^2 \omega t + \cos^2 \omega t) = \frac{A^2 c^2 n^2 \pi^2}{4L} \end{aligned}" />
                            となり、時間 <InlineMath math="t" /> に依存しない定数となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        波速 <InlineMath math="c = 3" /> の 1 次元波動方程式において、時空点 <InlineMath math="(x, t) = (10, 2)" /> における依存域（Domain of Dependence）を求めよ。
                        また、初期時刻に原点 <InlineMath math="x=0" /> で発生した情報の、時刻 <InlineMath math="t=4" /> における影響域（Domain of Influence）の範囲を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 依存域の定義（Definition 6.2-1）より、点 <InlineMath math="(x_0, t_0)" /> が依存する初期データの範囲は <InlineMath math="[x_0 - ct_0, x_0 + ct_0]" /> である。
                            <BlockMath math="[10 - 3 \cdot 2, 10 + 3 \cdot 2] = [4, 16]" />
                            よって依存域は <b><InlineMath math="4 \le x \le 16" /></b> である。
                        </p>
                        <p>
                            2. 影響域の定義より、初期位置 <InlineMath math="x_0" /> からの信号が時刻 <InlineMath math="t" /> に到達しうる範囲は <InlineMath math="|x - x_0| \le ct" /> である。
                            <BlockMath math="|x - 0| \le 3 \cdot 4 \implies |x| \le 12" />
                            よって影響域は <b><InlineMath math="-12 \le x \le 12" /></b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        境界条件 <InlineMath math="u(0, t) = u(L, t) = 0" /> のもとで、エネルギー保存則 <InlineMath math="E(t) = E(0)" /> を利用して、初期境界値問題の解が一意であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 2 つの解 <InlineMath math="u_1, u_2" /> が存在すると仮定し、その差 <InlineMath math="w = u_1 - u_2" /> を考える。
                        </p>
                        <p>
                            2. 方程式の線形性より、<InlineMath math="w" /> は同次の波動方程式 <InlineMath math="w_{tt} = c^2 w_{xx}" /> を満たす。
                            また、初期条件は一致するため <InlineMath math="w(x, 0) = 0, \ w_t(x, 0) = 0" /> であり、境界条件も <InlineMath math="w(0, t) = w(L, t) = 0" /> である。
                        </p>
                        <p>
                            3. 境界条件より、初期時刻におけるエネルギー <InlineMath math="E(0)" /> を計算すると：
                            <BlockMath math="E(0) = \frac{1}{2} \int_0^L [w_t(x, 0)^2 + c^2 w_x(x, 0)^2] dx" />
                            初期条件 <InlineMath math="w_t(x, 0)=0" /> および <InlineMath math="w(x, 0)=0 \implies w_x(x, 0)=0" /> より、<InlineMath math="E(0) = 0" /> である。
                        </p>
                        <p>
                            4. Proposition 6.3-1（エネルギー保存則）より、任意の <InlineMath math="t > 0" /> で <InlineMath math="E(t) = E(0) = 0" /> である。
                            被積分関数 <InlineMath math="w_t^2 + c^2 w_x^2" /> は常に非負なので、各積分値が 0 であれば <InlineMath math="w_t = 0" /> かつ <InlineMath math="w_x = 0" /> でなければならない。
                        </p>
                        <p>
                            5. これと <InlineMath math="w(x, 0) = 0" /> より、すべての領域で <InlineMath math="w \equiv 0" /> となり、<InlineMath math="u_1 = u_2" /> が示される。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        特性曲線座標 <InlineMath math="\xi = x+ct, \ \eta = x-ct" /> を用いて、1 次元波動方程式 <InlineMath math="u_{tt} = c^2 u_{xx}" /> が標準形 <InlineMath math="u_{\xi\eta} = 0" /> に変換されることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            連鎖律（Chain Rule）を適用する。
                            <BlockMath math="\begin{aligned} \frac{\partial}{\partial x} &= \frac{\partial \xi}{\partial x} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial x} \frac{\partial}{\partial \eta} = \frac{\partial}{\partial \xi} + \frac{\partial}{\partial \eta} \\ \frac{\partial}{\partial t} &= \frac{\partial \xi}{\partial t} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial t} \frac{\partial}{\partial \eta} = c\left(\frac{\partial}{\partial \xi} - \frac{\partial}{\partial \eta}\right) \end{aligned}" />
                            2 階微分を計算する：
                            <BlockMath math="\begin{aligned} \frac{\partial^2}{\partial x^2} &= \left(\frac{\partial}{\partial \xi} + \frac{\partial}{\partial \eta}\right)^2 = \frac{\partial^2}{\partial \xi^2} + 2\frac{\partial^2}{\partial \xi \partial \eta} + \frac{\partial^2}{\partial \eta^2} \\ \frac{\partial^2}{\partial t^2} &= c^2 \left(\frac{\partial}{\partial \xi} - \frac{\partial}{\partial \eta}\right)^2 = c^2 \left(\frac{\partial^2}{\partial \xi^2} - 2\frac{\partial^2}{\partial \xi \partial \eta} + \frac{\partial^2}{\partial \eta^2}\right) \end{aligned}" />
                        </p>
                        <p>
                            これらを <InlineMath math="u_{tt} - c^2 u_{xx} = 0" /> に代入すると：
                            <BlockMath math="c^2 \left[ (\dots) - (\dots) \right] = c^2 \left[ -4 \frac{\partial^2 u}{\partial \xi \partial \eta} \right] = 0" />
                            ゆえに、<InlineMath math="u_{\xi\eta} = 0" /> が得られる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        ホイヘンスの原理（Huygens' Principle）について、3 次元空間と 2 次元空間での波の伝播の違いを数学的な観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 3 次元空間では、点源からの衝撃波は、波のフロントが通り抜けた直後にその点での変位が 0 に戻る。これをホイヘンスの原理と呼ぶ。
                            これは数学的には、解が中心から半径 <InlineMath math="ct" /> の<b>球面上の情報のみ</b>に依存すること（キルヒホッフの公式）に由来する。
                        </p>
                        <p>
                            2. 一方、2 次元空間（水面波など）では、波のフロントが通過した後も情報の「尾（Wake）」が残り、変位はすぐには 0 に戻らない。
                            これは数学的には、2 次元波動方程式の解の依存域が、境界（円周）だけでなく<b>円板の内部全体</b>にわたることに由来する（降下法による導出）。
                        </p>
                        <p>
                            3. 一般に、ホイヘンスの原理は 3 以上の<b>奇数次元</b>（3, 5, 7, ...）においてのみ成立するという性質がある（§6.5 備考）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
