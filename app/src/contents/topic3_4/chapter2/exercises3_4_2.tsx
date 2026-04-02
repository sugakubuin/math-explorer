import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_4_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        周期 <InlineMath math="2L" /> （ <InlineMath math="L > 0" /> ）の可積分関数 <InlineMath math="f" /> に対し、その複素フーリエ係数 <InlineMath math="c_n" /> の定義式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-1 に基づき、次のように定義される。
                        </p>
                        <BlockMath math="c_n = \frac{1}{2L} \int_{-L}^{L} f(x) e^{-i \frac{n\pi x}{L}} dx \quad (n \in \mathbb{Z})" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        区間 <InlineMath math="[0, L]" /> 上の関数 <InlineMath math="f(x)" /> の<b>フーリエ正弦展開</b>と、その係数 <InlineMath math="b_n" /> の計算法を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.2-1 に基づき、次のように定義される。
                        </p>
                        <BlockMath math="f(x) \sim \sum_{n=1}^{\infty} b_n \sin \frac{n\pi x}{L}" />
                        <p>
                            係数 <InlineMath math="b_n" /> は以下の積分で計算される。
                        </p>
                        <BlockMath math="b_n = \frac{2}{L} \int_0^L f(x) \sin \frac{n\pi x}{L} dx" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        複素フーリエ級数 <InlineMath math="f(x) \sim \sum c_n e^{inx}" /> において、それを項別微分した際の導関数の複素フーリエ係数 <InlineMath math="c'_n" /> を元の係数 <InlineMath math="c_n" /> を用いて表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.3-2 に基づき、次のように表される。
                        </p>
                        <BlockMath math="c'_n = in \cdot c_n" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        区間 <InlineMath math="[0, L]" /> 上で <InlineMath math="f(x) = x" /> と定義されるとき、その<b>フーリエ余弦展開</b>を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.2-2 および Example 2.2-3 の議論に基づき計算する。
                        </p>
                        <ul className="list-decimal list-inside space-y-2 mt-2">
                            <li><InlineMath math="a_0 = \frac{2}{L} \int_0^L x dx = \frac{2}{L} [\frac{x^2}{2}]_0^L = L" /></li>
                            <li><InlineMath math="n \ge 1" /> に対して、 <InlineMath math="a_n = \frac{2}{L} \int_0^L x \cos \frac{n\pi x}{L} dx" /></li>
                            <p>
                                部分積分を適用すると、 <InlineMath math="a_n = \frac{2L}{n^2\pi^2} ((-1)^n - 1)" />。
                            </p>
                        </ul>
                        <p className="mt-2">
                            これより、 <InlineMath math="n" /> が奇数 <InlineMath math="2k-1" /> のときのみ <InlineMath math="a_n = -4L / (n^2 \pi^2)" /> となり、
                            <BlockMath math="x \sim \frac{L}{2} - \frac{4L}{\pi^2} \sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} \cos \frac{(2k-1)\pi x}{L}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        周期 <InlineMath math="2L" /> で <InlineMath math="f(x) = x^2 \quad (-L < x < L)" /> のフーリエ展開において、定数項 <InlineMath math="a_0/2" /> を求めよ（Example 2.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="a_0" /> は関数の平均値の 2 倍として求められる。
                        </p>
                        <BlockMath math="a_0 = \frac{1}{L} \int_{-L}^{L} x^2 dx = \frac{2}{L} [\frac{x^3}{3}]_0^L = \frac{2L^2}{3}" />
                        <p>
                            したがって、フーリエ級数の定数項 <InlineMath math="\frac{a_0}{2}" /> は <b><InlineMath math="L^2/3" /></b> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        関数 <InlineMath math="f(x)" /> が無限回微分可能（ <InlineMath math="C^\infty" /> 級）な周期関数のとき、フーリエ係数 <InlineMath math="c_n" /> の減衰速度について言えることを述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.3-3 に基づけば、 <InlineMath math="c_n = o(1/|n|^k)" /> が任意の整数 <InlineMath math="k" /> について成り立つ。
                        </p>
                        <p className="mt-2">
                            すなわち、 <InlineMath math="c_n" /> は<b>任意の多項式の逆数よりも速く 0 に収束する</b>。これは「超多項式減衰」と呼ばれ、関数の滑らかさがスペクトルの局在化（低周波への集中）をもたらしていることを示している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        2 次元周期関数 <InlineMath math="f(x, y) = \cos x \cos y" /> に対し、その複素フーリエ係数 <InlineMath math="c_{(n_1, n_2)}" /> の内、値が 0 でないインデックス <InlineMath math="(n_1, n_2)" /> をすべて挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 2.4-1 に基づき、オイラーの公式を各変数に適用した結果から判断する。
                        </p>
                        <p className="mt-2">
                            以下の 4 点において、係数は <b>1/4</b> となり、他はすべて 0 である：
                            <BlockMath math="(n_1, n_2) = (1, 1), (1, -1), (-1, 1), (-1, -1)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        <InlineMath math="f(x) = |x| \quad (-\pi < x < \pi)" /> を周期拡張した関数のフーリエ級数は項別微分できるが、その結果得られる級数が元の関数の微分 <InlineMath math="f'(x) = \text{sgn}(x)" /> を完全に再現しない理由を、ギブス現象の観点から説明せよ（Theorem 2.3-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(x) = |x|" /> は連続かつ周期関数であるため、項別積分は一様に収束する。しかし、その微分である <InlineMath math="\text{sgn}(x)" /> は<b>不連続点</b>を持つ。
                        </p>
                        <p className="mt-2">
                            不連続点付近では、フーリエ級数はギブス現象によるオーバーシュート（約 9%）を伴う「ヒゲ」が発生し、点ごとの値は必ずしも元の導関数の値（1 または -1）に一致しなくなる。
                            すなわち、級数は <InlineMath math="L^2" /> の意味では一致するが、<b>各点の一様収束までは保証されない</b>ため、不連続点近傍での再現性が損なわれることになる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        <InlineMath math="d" /> 次元周期関数における<b>パーセバルの等式</b>を記し、それが「物理現象（エネルギー伝播など）の多次元解析」においてどのように貢献するか考察せよ（Proposition 2.4-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\frac{1}{(2\pi)^d} \int_{[-\pi, \pi]^d} |f(\mathbf{x})|^2 d\mathbf{x} = \sum_{\mathbf{n} \in \mathbb{Z}^d} |c_{\mathbf{n}}|^2" />
                        </p>
                        <p className="mt-2">
                            この等式は、多次元的な信号（2 次元画像や 3 次元場など）の総エネルギーを評価する際、直接計算が困難な「実空間の二乗積分」を、係数の二乗和という「離散的な総和」に完全に置き換えられることを保証する。
                            これにより、どの周波数帯域（インデックスベクトル <InlineMath math="\mathbf{n}" /> の領域）にエネルギーが集中しているかという多次元スペクトル解析の理論基盤となり、圧縮技術や場の理論における解析を可能にしている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        両端の温度が 0 に保たれた棒の熱伝導問題（初期条件 <InlineMath math="u(x, 0) = f(x)" />）において、なぜ<b>フーリエ正弦展開</b>が解の構成に選ばれるのか、境界条件（ディリクレ条件）の性質から説明せよ（Example 2.1-3 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            端点 <InlineMath math="x = 0, L" /> で温度が常に 0 という条件は、関数値そのものが固定される「ディリクレ境界条件」である。
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>フーリエ正弦展開の基底関数 <InlineMath math="\sin(n\pi x/L)" /> は、すべて端点 <InlineMath math="x=0, L" /> において値 0 をとる。</li>
                            <li>一方、余弦基底 <InlineMath math="\cos(n\pi x/L)" /> や複素指数基底 <InlineMath math="e^{i\dots}" /> は、端点で一般に 0 以外の値（または 0 以外の微分）をとる。</li>
                        </ul>
                        <p className="mt-2">
                            したがって、物理的な境界条件を<b>それ自体が初期状態で完全に満たしている基底</b>を選択することで、級数の和として構成される解全体が自動的に境界条件を充足するようになる。これが、問題の対称性に基づいた級数選択の数学的合理性である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
