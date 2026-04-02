import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_5_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        次の 2 階線形常微分方程式のうち、シュトゥルム・リウヴィル（SL）形式
                        <InlineMath math="\frac{d}{dx} [p(x) y'] + [q(x) + \lambda w(x)] y = 0" />
                        で書かれているものをすべて選べ。
                    </p>
                    <div className="mt-4 space-y-2">
                        <p>(a) <InlineMath math="(x y')' + (\lambda x - \frac{n^2}{x}) y = 0" /></p>
                        <p>(b) <InlineMath math="y'' + 2y' + \lambda y = 0" /></p>
                        <p>(c) <InlineMath math="\frac{d}{dx} [(1-x^2) y'] + \lambda y = 0" /></p>
                    </div>
                    <ExerciseSolution>
                        <p>
                            SL 形式の定義（Definition 5.2-1）は、微分項が <InlineMath math="(p(x) y')'" /> の形であることである。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>(a) は <InlineMath math="p(x) = x, q(x) = -n^2/x, w(x) = x" /> と置くことで SL 形式となっている（ベッセル方程式の変形版）。</li>
                            <li>(b) は第 1 項が <InlineMath math="y''" /> であり、第 2 項に <InlineMath math="2y'" /> が含まれているため、そのままでは SL 形式ではない。</li>
                            <li>(c) は <InlineMath math="p(x) = 1-x^2, q(x) = 0, w(x) = 1" /> と置くことで SL 形式となっている（ルジャンドル方程式）。</li>
                        </ul>
                        <p className="mt-2">したがって、正解は <b>(a) と (c)</b> である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        方程式 <InlineMath math="y'' + a y' + (\lambda + b) y = 0" />（<InlineMath math="a, b" /> は定数）をシュトゥルム・リウヴィル形式に変形せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            一般に、方程式 <InlineMath math="y'' + P(x) y' + Q(x) y = 0" /> を SL 形式に変形するには、積分因子 <InlineMath math="\mu(x) = \exp(\int P(x) dx)" /> を両辺に掛ければよい。
                        </p>
                        <p>
                            ここでは <InlineMath math="P(x) = a" /> なので、<InlineMath math="\mu(x) = e^{ax}" /> を掛けると：
                            <BlockMath math="e^{ax} y'' + a e^{ax} y' + e^{ax}(\lambda + b) y = 0" />
                            左辺の最初の 2 項は <InlineMath math="(e^{ax} y')'" /> とまとめられる。
                        </p>
                        <p>
                            よって、SL 形式は以下のようになる：
                            <BlockMath math="\frac{d}{dx} [e^{ax} y'] + (b e^{ax} + \lambda e^{ax}) y = 0" />
                            ここで、<InlineMath math="p(x) = e^{ax}, q(x) = b e^{ax}, w(x) = e^{ax}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        正則なシュトゥルム・リウヴィル問題の固有値 <InlineMath math="\lambda_n" /> に関する次の記述のうち、<b>誤っているもの</b>はどれか。
                    </p>
                    <div className="mt-4 space-y-2">
                        <p>(a) すべての固有値は実数である。</p>
                        <p>(b) 固有値は離散的であり、<InlineMath math="\lambda_1 < \lambda_2 < \dots" /> と並べると <InlineMath math="\lambda_n \to \infty" /> となる。</p>
                        <p>(c) 異なる固有値に対応する固有関数は、重みなしの内積 <InlineMath math="\int_a^b \phi_m(x) \phi_n(x) dx = 0" /> に関して直交する。</p>
                    </div>
                    <ExerciseSolution>
                        <p>
                            (a) および (b) は Theorem 5.3-1 および Theorem 5.3-3 に示されている通りの正しい性質である。
                        </p>
                        <p>
                            (c) について：Theorem 5.3-2 によれば、固有関数は<b>重み <InlineMath math="w(x)" /> 付きの</b>内積に関して直交する。すなわち、
                            <BlockMath math="\int_a^b \phi_m(x) \phi_n(x) w(x) dx = 0 \quad (m \neq n)" />
                            が正しい。一般に <InlineMath math="w(x) = 1" /> とは限らないため、記述 (c) は誤りである。
                        </p>
                        <p className="mt-2">したがって、正解は <b>(c)</b> である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        次の境界値問題の固有値 <InlineMath math="\lambda" /> と固有関数 <InlineMath math="y(x)" /> を求めよ。
                        <BlockMath math="y'' + \lambda y = 0 \quad (0 < x < L), \quad y(0) = 0, \ y'(L) = 0" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. <InlineMath math="\lambda < 0" /> のとき、一般解は <InlineMath math="y = A e^{\sqrt{-\lambda}x} + B e^{-\sqrt{-\lambda}x}" /> であるが、境界条件を満たすのは <InlineMath math="A=B=0" /> の自明な解のみである。
                        </p>
                        <p>
                            2. <InlineMath math="\lambda = 0" /> のとき、一般解は <InlineMath math="y = Ax + B" /> である。<InlineMath math="y(0)=0 \implies B=0" />、<InlineMath math="y'(L)=A \implies A=0" /> となり、自明な解のみとなる。
                        </p>
                        <p>
                            3. <InlineMath math="\lambda > 0" /> のとき、<InlineMath math="\lambda = k^2" /> とおくと一般解は <InlineMath math="y = A \cos kx + B \sin kx" /> である。
                            <BlockMath math="\begin{aligned} y(0) = A = 0 &\implies y = B \sin kx \\ y'(L) = Bk \cos kL = 0 \end{aligned}" />
                            非自明な解を得るためには <InlineMath math="\cos kL = 0" /> である必要がある。よって、
                            <BlockMath math="kL = (n - \frac{1}{2})\pi \quad (n = 1, 2, \dots)" />
                            ゆえに、固有値および固有関数は以下の通りとなる：
                            <BlockMath math="\lambda_n = \left[ \frac{(2n-1)\pi}{2L} \right]^2, \quad y_n(x) = \sin \left[ \frac{(2n-1)\pi x}{2L} \right] \quad (n = 1, 2, \dots)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        重み <InlineMath math="w(x) = e^x" /> に対する内積を <InlineMath math="\langle f, g \rangle_w = \int_0^1 f(x)g(x)e^x dx" /> と定義する。
                        関数 <InlineMath math="f(x) = 1" /> と <InlineMath math="g(x) = x + c" /> がこの内積に関して直交するように、定数 <InlineMath math="c" /> を決定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            直交条件 <InlineMath math="\langle 1, x+c \rangle_w = 0" /> を計算する。
                            <BlockMath math="\begin{aligned} \int_0^1 1 \cdot (x+c) e^x dx &= \int_0^1 x e^x dx + c \int_0^1 e^x dx \\ &= [xe^x - e^x]_0^1 + c [e^x]_0^1 \\ &= (e - e) - (0 - 1) + c(e - 1) \\ &= 1 + c(e - 1) \end{aligned}" />
                            これが 0 となるためには、
                            <BlockMath math="c(e - 1) = -1 \implies c = -\frac{1}{e - 1}" />
                            であればよい。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        関数 <InlineMath math="f(x) = L-x \ (0 < x < L)" /> を固有関数系 <InlineMath math="\phi_n(x) = \sin(n\pi x/L)" /> で展開せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            展開を <InlineMath math="f(x) = \sum_{n=1}^\infty c_n \sin(n\pi x/L)" /> とすると、係数 <InlineMath math="c_n" /> は Theorem 5.4-1 より：
                            <BlockMath math="c_n = \frac{2}{L} \int_0^L (L-x) \sin\left(\frac{n\pi x}{L}\right) dx" />
                            部分積分を用いると、
                            <BlockMath math="\begin{aligned} c_n &= \frac{2}{L} \left[ (L-x) \left(-\frac{L}{n\pi} \cos\frac{n\pi x}{L}\right) \right]_0^L - \frac{2}{L} \int_0^L (-1) \left(-\frac{L}{n\pi} \cos\frac{n\pi x}{L}\right) dx \\ &= \frac{2}{L} \left[ 0 - L \left(-\frac{L}{n\pi}\right) \right] - \frac{2}{n\pi} \left[ \frac{L}{n\pi} \sin\frac{n\pi x}{L} \right]_0^L \\ &= \frac{2L}{n\pi} - 0 = \frac{2L}{n\pi} \end{aligned}" />
                            よって、展開式は以下の通りとなる：
                            <BlockMath math="L-x = \sum_{n=1}^\infty \frac{2L}{n\pi} \sin\left(\frac{n\pi x}{L}\right)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        シュトゥルム・リウヴィル作用素 <InlineMath math="L = -(p(x)y')' - q(x)y" /> が、境界条件 <InlineMath math="y'(a) = y'(b) = 0" />（ノイマン条件）のもとで自己共役であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\langle Lu, v \rangle = \langle u, Lv \rangle" />、すなわち <InlineMath math="\int_a^b (Lu)v dx = \int_a^b u(Lv) dx" /> を示す。
                            <BlockMath math="\begin{aligned} \int_a^b [-(p u')' - qu] v dx &= -\int_a^b (p u')' v dx - \int_a^b q u v dx \\ &= -[p u' v]_a^b + \int_a^b p u' v' dx - \int_a^b q u v dx \end{aligned}" />
                            ここで、境界条件 <InlineMath math="u'(a) = u'(b) = 0" /> により、境界項 <InlineMath math="[p u' v]_a^b = p(b)u'(b)v(b) - p(a)u'(a)v(a)" /> は 0 である。
                        </p>
                        <p>
                            同様に <InlineMath math="\int_a^b u(Lv) dx" /> を計算すると：
                            <BlockMath math="\begin{aligned} \int_a^b u [-(p v')' - qv] dx &= -\int_a^b u (p v')' dx - \int_a^b q u v dx \\ &= -[p v' u]_a^b + \int_a^b p v' u' dx - \int_a^b q u v dx \end{aligned}" />
                            再び境界条件 <InlineMath math="v'(a) = v'(b) = 0" /> により境界項は 0 となる。
                        </p>
                        <p>
                            残りの積分項 <InlineMath math="\int p u' v' dx" /> と <InlineMath math="\int q u v dx" /> は両者で共通であるため、自己共役性が成立する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        ベッセル方程式 <InlineMath math="x^2 y'' + xy' + (x^2 - \nu^2)y = 0" /> をシュトゥルム・リウヴィル形式
                        <InlineMath math="\frac{d}{dx} [p(x) y'] + [q(x) + \lambda w(x)] y = 0" />
                        に変形し、<InlineMath math="p(x), q(x), w(x)" /> および固有値 <InlineMath math="\lambda" /> を特定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            両辺を <InlineMath math="x" /> で割ると：
                            <BlockMath math="x y'' + y' + (x - \frac{\nu^2}{x})y = 0" />
                            最初の 2 項をまとめると <InlineMath math="(x y')'" /> となる。よって、
                            <BlockMath math="\frac{d}{dx} [x y'] - \frac{\nu^2}{x} y + x y = 0" />
                            これを SL 形式の標準形と比較すると、<InlineMath math="\lambda = 1" /> とみなすことで：
                            <BlockMath math="p(x) = x, \quad q(x) = -\frac{\nu^2}{x}, \quad w(x) = x, \quad \lambda = 1" />
                            が得られる。
                        </p>
                        <p className="mt-2">
                            なお、方程式そのものを固有値問題として扱う場合は、<InlineMath math="x" /> の代わりに <InlineMath math="\lambda x" /> を含む形にして <InlineMath math="\lambda" /> を抽出する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        シュトゥルム・リウヴィル問題において、異なる固有値 <InlineMath math="\lambda_m \neq \lambda_n" /> に対応する固有関数 <InlineMath math="\phi_m, \phi_n" /> が重み <InlineMath math="w" /> に関して直交すること
                        <BlockMath math="\int_a^b \phi_m(x) \phi_n(x) w(x) dx = 0" />
                        を証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            固有値の定義より、以下の 2 つの等式が成り立つ（ただし <InlineMath math="L" /> は自己共役な SL 作用素）：
                            <BlockMath math="(1) \ L\phi_m = \lambda_m w \phi_m, \quad (2) \ L\phi_n = \lambda_n w \phi_n" />
                        </p>
                        <p>
                            自己共役性の定義 <InlineMath math="\langle L\phi_m, \phi_n \rangle = \langle \phi_m, L\phi_n \rangle" /> より、
                            <BlockMath math="\int_a^b (L\phi_m)\phi_n dx = \int_a^b \phi_m(L\phi_n) dx" />
                            これに (1), (2) を代入すると：
                            <BlockMath math="\int_a^b (\lambda_m w \phi_m) \phi_n dx = \int_a^b \phi_m (\lambda_n w \phi_n) dx" />
                            固有値を積分の外に括り出すと：
                            <BlockMath math="\lambda_m \int_a^b \phi_m \phi_n w dx = \lambda_n \int_a^b \phi_m \phi_n w dx" />
                            左辺にまとめると：
                            <BlockMath math="(\lambda_m - \lambda_n) \int_a^b \phi_m \phi_n w dx = 0" />
                            仮定より <InlineMath math="\lambda_m - \lambda_n \neq 0" /> であるため、
                            <BlockMath math="\int_a^b \phi_m \phi_n w dx = 0" />
                            が導かれる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        SL 方程式 <InlineMath math="-(p y')' + q y = \lambda w y \ (a < x < b)" /> において、
                        境界条件が <InlineMath math="y(a) = y(b) = 0" /> であり、かつすべての <InlineMath math="x" /> で <InlineMath math="q(x) \ge 0" /> であるとき、
                        すべての固有値が非負（<InlineMath math="\lambda \ge 0" />）であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            方程式の両辺に <InlineMath math="y" /> を掛けて区間 <InlineMath math="[a, b]" /> で積分する：
                            <BlockMath math="-\int_a^b (p y')' y dx + \int_a^b q y^2 dx = \lambda \int_a^b w y^2 dx" />
                            左辺第 1 項に部分積分を適用すると：
                            <BlockMath math="-[p y' y]_a^b + \int_a^b p (y')^2 dx + \int_a^b q y^2 dx = \lambda \int_a^b w y^2 dx" />
                            境界条件 <InlineMath math="y(a)=y(b)=0" /> により境界項 <InlineMath math="[p y' y]_a^b" /> は 0 となる。よって、
                            <BlockMath math="\lambda = \frac{\int_a^b [p (y')^2 + q y^2] dx}{\int_a^b w y^2 dx}" />
                            を得る（これをレイリー商と呼ぶ）。
                        </p>
                        <p>
                            仮定より <InlineMath math="p > 0, w > 0, q \ge 0" /> であり、<InlineMath math="(y')^2 \ge 0, y^2 \ge 0" /> なので、
                            分子および分母の積分値はいずれも非負である。
                            特に <InlineMath math="y \neq 0" /> より分母は正である。
                        </p>
                        <p>
                            したがって、<InlineMath math="\lambda \ge 0" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
