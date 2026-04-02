import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_5_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        1 次元熱核 <InlineMath math="K(x, t) = \frac{1}{\sqrt{4\pi kt}} e^{-\frac{x^2}{4kt}}" /> について、
                        任意の <InlineMath math="t > 0" /> において <InlineMath math="\int_{-\infty}^{\infty} K(x, t) dx = 1" /> が成立することを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ガウス積分の公式 <InlineMath math="\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\frac{\pi}{a}}" /> を用いる。
                            ここでは <InlineMath math="a = \frac{1}{4kt}" /> である。
                        </p>
                        <p>
                            <BlockMath math="\begin{aligned} \int_{-\infty}^{\infty} K(x, t) dx &= \frac{1}{\sqrt{4\pi kt}} \int_{-\infty}^{\infty} e^{-\frac{x^2}{4kt}} dx \\ &= \frac{1}{\sqrt{4\pi kt}} \sqrt{\frac{\pi}{1/(4kt)}} \\ &= \frac{1}{\sqrt{4\pi kt}} \sqrt{4\pi kt} = 1 \end{aligned}" />
                        </p>
                        <p>
                            これは、拡散プロセスにおいて全エネルギー（総熱量）が時間とともに保存されることを物理的に意味している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        熱方程式 <InlineMath math="u_t = k u_{xx}" /> において、変数のスケーリング <InlineMath math="x = \alpha X, \ t = \beta T" /> を行う。
                        方程式の形が不変（<InlineMath math="u_T = k u_{XX}" />）であるために、<InlineMath math="\alpha" /> と <InlineMath math="\beta" /> が満たすべき関係を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            連鎖律を用いて微分を変換する：
                            <BlockMath math="\begin{aligned} \frac{\partial u}{\partial t} &= \frac{\partial T}{\partial t} \frac{\partial u}{\partial T} = \frac{1}{\beta} u_T \\ \frac{\partial u}{\partial x} &= \frac{\partial X}{\partial x} \frac{\partial u}{\partial X} = \frac{1}{\alpha} u_X \implies \frac{\partial^2 u}{\partial x^2} = \frac{1}{\alpha^2} u_{XX} \end{aligned}" />
                        </p>
                        <p>
                            これらを元の方程式に代入すると：
                            <BlockMath math="\frac{1}{\beta} u_T = k \frac{1}{\alpha^2} u_{XX} \implies u_T = k \frac{\beta}{\alpha^2} u_{XX}" />
                        </p>
                        <p>
                            係数が一致するためには <InlineMath math="\frac{\beta}{\alpha^2} = 1 \implies \beta = \alpha^2" /> でなければならない。
                            これは拡散現象において、空間的な広がり <InlineMath math="\Delta x" /> が時間の平方根 <InlineMath math="\sqrt{\Delta t}" /> に比例するという、ブラウン運動的な特徴を反映している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        フーリエの熱伝導則において、温度分布が <InlineMath math="u(x) = 100 - 20x" />（<InlineMath math="x" /> は位置 [m]）で与えられ、熱伝導率が <InlineMath math="\kappa = 50 \text{ W/(m}\cdot\text{K)}" /> であるとき、
                        熱流束 <InlineMath math="q" /> の値と向きを求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            フーリエの熱伝導則（Example 7.1-1）より：
                            <BlockMath math="q = -\kappa \frac{\partial u}{\partial x}" />
                        </p>
                        <p>
                            温度勾配を計算すると <InlineMath math="\partial u / \partial x = -20" /> である。
                            値を代入すると：
                            <BlockMath math="q = -50 \times (-20) = 1000 \text{ W/m}^2" />
                        </p>
                        <p>
                            <InlineMath math="q > 0" /> なので、熱は<b> <InlineMath math="x" /> が増加する向き</b>（温度が下がる向き）に流れている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        無限領域における初期値問題
                        <BlockMath math="u_t = k u_{xx}, \quad u(x, 0) = \delta(x - x_0)" />
                        の解を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            畳み込みによる解の表示式（Theorem 7.3-1）を用いる：
                            <BlockMath math="u(x, t) = \int_{-\infty}^{\infty} K(x-y, t) f(y) dy" />
                        </p>
                        <p>
                            初期値 <InlineMath math="f(y) = \delta(y - x_0)" /> を代入すると、デルタ関数の性質により：
                            <BlockMath math="u(x, t) = \int_{-\infty}^{\infty} K(x-y, t) \delta(y - x_0) dy = K(x - x_0, t)" />
                        </p>
                        <p>
                            具体的な形を書き下すと以下の通りとなる：
                            <BlockMath math="u(x, t) = \frac{1}{\sqrt{4\pi kt}} e^{-\frac{(x - x_0)^2}{4kt}}" />
                            これは、<InlineMath math="x_0" /> に集中していた熱が、時間とともにガウス分布として広がっていく様子を表している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        境界条件 <InlineMath math="u(0, t) = 0, \ u(L, t) = 0" /> の下で、初期温度分布 <InlineMath math="u(x, 0) = \sin(3\pi x/L)" /> を持つ棒の温度分布 <InlineMath math="u(x, t)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            分離変数法の結果（Example 7.4-1）より、一般解は
                            <BlockMath math="u(x, t) = \sum_{n=1}^\infty a_n \sin\left(\frac{n\pi x}{L}\right) e^{-k\left(\frac{n\pi}{L}\right)^2 t}" />
                            の形をとる。
                        </p>
                        <p>
                            初期条件と比較すると、<InlineMath math="n=3" /> の項のみが係数 <InlineMath math="a_3 = 1" /> を持ち、他はすべて 0 である。
                            よって求める解は：
                            <BlockMath math="u(x, t) = \sin\left(\frac{3\pi x}{L}\right) e^{-k\left(\frac{3\pi}{L}\right)^2 t} = \sin\left(\frac{3\pi x}{L}\right) e^{-\frac{9\pi^2 k}{L^2} t}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        断熱された棒（<InlineMath math="0 < x < L" />）の初期温度分布が <InlineMath math="f(x) = 100 x/L" /> であるとき、
                        十分な時間が経過した後の定常温度 <InlineMath math="U_\infty" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ノイマン境界条件（Example 7.4-2）の性質より、断熱された系では総熱量が保存される。
                            最終的な定常温度は、初期温度の平均値に等しい：
                            <BlockMath math="U_\infty = \frac{1}{L} \int_0^L f(x) dx" />
                        </p>
                        <p>
                            計算を実行すると：
                            <BlockMath math="U_\infty = \frac{1}{L} \int_0^L \frac{100x}{L} dx = \frac{100}{L^2} \left[ \frac{1}{2} x^2 \right]_0^L = \frac{100}{L^2} \cdot \frac{1}{2} L^2 = 50" />
                        </p>
                        <p>
                            よって、最終的な温度は一様に <b>50</b> 度となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        熱源（加熱）がある非同次熱方程式 <InlineMath math="u_t = k u_{xx} + h_0 \sin(x)" />（<InlineMath math="h_0" /> は定数）において、
                        全空間での初期値が 0（<InlineMath math="u(x, 0) = 0" />）である場合の解を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            デュアメルの原理（Theorem 7.3-2）を適用する：
                            <BlockMath math="u(x, t) = \int_0^t v(x, t; s) ds" />
                            ここで <InlineMath math="v(x, t; s)" /> は、時刻 <InlineMath math="s" /> での初期値が <InlineMath math="h(x, s) = h_0 \sin x" /> である同次方程式の解である。
                        </p>
                        <p>
                            初期値が <InlineMath math="\sin x" /> のときの同次解は <InlineMath math="e^{-k(t-s)} \sin x" /> となるので、
                            <BlockMath math="\begin{aligned} u(x, t) &= \int_0^t h_0 \sin(x) e^{-k(t-s)} ds \\ &= h_0 \sin(x) e^{-kt} \int_0^t e^{ks} ds \\ &= h_0 \sin(x) e^{-kt} \left[ \frac{1}{k} e^{ks} \right]_0^t \\ &= \frac{h_0}{k} \sin(x) e^{-kt} (e^{kt} - 1) = \frac{h_0}{k} \sin(x) (1 - e^{-kt}) \end{aligned}" />
                            を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        弱最大値原理（Theorem 7.5-1）を用いて、有界領域における熱方程式の解が負の初期・境界条件の下で
                        常に非正（<InlineMath math="u \le 0" />）であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            弱最大値原理によれば、解 <InlineMath math="u" /> はその最大値を放物的境界（初期時刻または空間境界）で達成する。
                        </p>
                        <p>
                            仮定より、放物的境界上でのすべての点において <InlineMath math="u \le 0" /> である。
                            したがって、領域全体の最大値が 0 以下である。
                            <BlockMath math="\max_{\bar{Q}} u = \max_{\text{boundary}} u \le 0" />
                        </p>
                        <p>
                            最大値が 0 以下であれば、すべての点において <InlineMath math="u \le 0" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        エネルギー法を用いて、境界条件 <InlineMath math="u(0, t) = u(L, t) = 0" /> の下での熱方程式の初期値問題の解の一意性を証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 2つの解 <InlineMath math="u_1, u_2" /> の差 <InlineMath math="w = u_1 - u_2" /> を考える。
                            <InlineMath math="w" /> は同次の熱方程式 <InlineMath math="w_t = k w_{xx}" /> を満たし、
                            初期条件 <InlineMath math="w(x, 0) = 0" />、境界条件 <InlineMath math="w(0, t) = w(L, t) = 0" /> を満たす。
                        </p>
                        <p>
                            2. エネルギー積分 <InlineMath math="E(t) = \frac{1}{2} \int_0^L w^2 dx" /> を定義し、その時間変化を計算する：
                            <BlockMath math="\frac{dE}{dt} = \int_0^L w w_t dx = \int_0^L w (k w_{xx}) dx" />
                        </p>
                        <p>
                            3. 部分積分を実行する：
                            <BlockMath math="\frac{dE}{dt} = k [w w_x]_0^L - k \int_0^L (w_x)^2 dx" />
                            境界条件 <InlineMath math="w=0" /> により境界項は消えるため：
                            <BlockMath math="\frac{dE}{dt} = -k \int_0^L (w_x)^2 dx \le 0" />
                        </p>
                        <p>
                            4. <InlineMath math="E(t)" /> は非負かつ非増加関数である。
                            初期条件 <InlineMath math="w(x, 0)=0" /> より <InlineMath math="E(0)=0" /> なので、
                            すべての <InlineMath math="t > 0" /> で <InlineMath math="E(t) = 0" /> でなければならない。
                            よって <InlineMath math="w \equiv 0" /> となり、解の一意性が示される。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        初期値問題の解の表示式
                        <BlockMath math="u(x, t) = \frac{1}{\sqrt{4\pi kt}} \int_{-\infty}^{\infty} e^{-\frac{(x-y)^2}{4kt}} f(y) dy" />
                        において、初期値 <InlineMath math="f(y)" /> が有界かつ連続であれば、
                        任意の <InlineMath math="t > 0" /> において解 <InlineMath math="u" /> が <InlineMath math="x" /> について無限回微分可能であることを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 被積分関数 <InlineMath math="v(x, y, t) = K(x-y, t) f(y)" /> の <InlineMath math="x" /> に関する偏導関数を考える。
                            <InlineMath math="K" /> （熱核）はガウス関数であり、<InlineMath math="x" /> について無限回微分可能である。
                        </p>
                        <p>
                            2. 指数関数 <InlineMath math="e^{-(x-y)^2/4kt}" /> の微分は、多項式とガウス関数の積となり、
                            <InlineMath math="y \to \pm \infty" /> で急速に（指数関数的に）減少する。
                        </p>
                        <p>
                            3. <InlineMath math="f(y)" /> が有界であれば、積分
                            <BlockMath math="\int_{-\infty}^{\infty} \frac{\partial^n K}{\partial x^n} (x-y, t) f(y) dy" />
                            は、任意の階数 <InlineMath math="n" /> に対して広義一様収束する。
                        </p>
                        <p>
                            4. したがって、積分記号下での微分が正当化され、解 <InlineMath math="u" /> は無限回微分可能となる。
                            これは、不連続な初期状態が拡散によって瞬時に平滑化される物理現象を数学的に裏付けている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
