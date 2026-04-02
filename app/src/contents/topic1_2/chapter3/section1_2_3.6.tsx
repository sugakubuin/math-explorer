import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function IntegrationApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                定積分はリーマン和によって「面積」として定義されていましたが、その応用は面積にとどまりません。
                体積や曲線の長さ、物理学における仕事など、多くの量を求めるために積分が用いられます。
                本節では、基礎的な幾何学的な応用である面積、体積、曲線の長さを計算する方法を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 面積の計算
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">面積の計算</h2>

            <p>
                2つの曲線にはさまれた領域の面積は、上の曲線から下の曲線を引いたものを積分することで求められます。
            </p>

            <ContentBox type="proposition" title="Proposition 3.6-1 （曲線で囲まれた面積）">
                <p>
                    区間 <InlineMath math="[a, b]" /> 上で、常に <InlineMath math="f(x) \ge g(x)" /> であるとする。
                    このとき、2つの曲線 <InlineMath math="y = f(x)" />, <InlineMath math="y = g(x)" /> と2直線 <InlineMath math="x = a, x = b" /> で囲まれた図形の面積 <InlineMath math="S" /> は次で与えられる：
                </p>
                <BlockMath math="S = \int_a^b \Big\{ f(x) - g(x) \Big\} \, dx" />
                <p className="mt-2 text-sm">
                    ※ どちらが上か途中で入れ替わる場合は、交点を求めて積分区間を分割し、常に（上）ー（下）となるように絶対値を利用します。<br />
                    <InlineMath math="\displaystyle S = \int_a^b |f(x) - g(x)|\, dx" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.6-1 （放物線と直線の間の面積）">
                <p>
                    放物線 <InlineMath math="y = -x^2 + 4x" /> と直線 <InlineMath math="y = x" /> で囲まれた部分の面積を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    まず、交点の <InlineMath math="x" /> 座標を求める。<br />
                    <InlineMath math="-x^2 + 4x = x \implies x^2 - 3x = x(x-3) = 0" /><br />
                    よって交点は <InlineMath math="x = 0" /> と <InlineMath math="x = 3" />。
                </p>
                <p>
                    区間 <InlineMath math="[0, 3]" /> の間では、二次関数のグラフが上に凸の放物線なので、<InlineMath math="-x^2 + 4x \ge x" /> （放物線が上、直線が下）である。<br />
                    面積 <InlineMath math="S" /> は：
                </p>
                <BlockMath math="\begin{aligned} S &= \int_0^3 \{(-x^2 + 4x) - x\} \, dx \\ &= \int_0^3 (-x^2 + 3x) \, dx \\ &= \left[ -\frac{x^3}{3} + \frac{3x^2}{2} \right]_0^3 \\ &= -\frac{27}{3} + \frac{27}{2} = -9 + 13.5 = 4.5 = \frac{9}{2} \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 回転体の体積
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">回転体の体積</h2>

            <p>
                平面図形を軸の周りで1回転させてできる立体（円錐や球など）を回転体と呼びます。
                積分の考え方（断面積の寄せ集め）を使えば体積を求められます。
            </p>

            <ContentBox type="proposition" title="Proposition 3.6-2 （円板法・バウムクーヘン法）">
                <p>
                    関数 <InlineMath math="f(x)" /> が <InlineMath math="a \le x \le b" /> で <InlineMath math="f(x) \ge 0" /> とする。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-4">
                    <li>
                        <strong>円板法（x軸周り）：</strong> <InlineMath math="y = f(x)" /> と <InlineMath math="x" /> 軸にはさまれた領域を <InlineMath math="x" /> 軸の周りに1回転させてできる立体の体積 <InlineMath math="V" /> は：
                        <BlockMath math="V = \pi \int_a^b \{ f(x) \}^2 \, dx" />
                        <p className="text-sm">（切断面の面積が半径 <InlineMath math="f(x)" /> の円なので、<InlineMath math="\pi \{f(x)\}^2" /> を <InlineMath math="dx" /> で積み重ねる）</p>
                    </li>
                    <li>
                        <strong>バウムクーヘン法（y軸周り）：</strong> 同じ領域を <InlineMath math="y" /> 軸の周りに1回転させてできる立体の体積 <InlineMath math="V" /> は、円柱の表面積の積分で：
                        <BlockMath math="V = 2\pi \int_a^b x f(x) \, dx" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 3.6-2 （球の体積の導出）">
                <p>
                    半径 <InlineMath math="R" /> の半円 <InlineMath math="y = \sqrt{R^2 - x^2}" /> （<InlineMath math="-R \le x \le R" />）と <InlineMath math="x" /> 軸とで囲まれた領域を、
                    <InlineMath math="x" /> 軸周りに回転させてできる球の体積を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>円板法より：</p>
                <BlockMath math="\begin{aligned} V &= \pi \int_{-R}^R \{ \sqrt{R^2 - x^2} \}^2 \, dx \\ &= \pi \int_{-R}^R (R^2 - x^2) \, dx \end{aligned}" />
                <p>関数は <InlineMath math="y" /> 軸対称（偶関数）なので、半分（<InlineMath math="0 \to R" />）を計算して2倍する（偶関数の積分公式）。</p>
                <BlockMath math="\begin{aligned} V &= 2\pi \int_0^R (R^2 - x^2) \, dx \\ &= 2\pi \left[ R^2 x - \frac{x^3}{3} \right]_0^R \\ &= 2\pi \left( R^3 - \frac{R^3}{3} \right) \\ &= 2\pi \left( \frac{2}{3}R^3 \right) = \frac{4}{3} \pi R^3 \end{aligned}" />
                <p className="mt-2 text-sm">公式「身の上に心配（4/3πR³）」が微積分から証明されました。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 曲線の長さ
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">曲線の長さ（弧長）</h2>

            <p>
                曲線を微小な直線片の集まりで近似することで長さを求められます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.6-1 （曲線の長さ）">
                <p>
                    関数 <InlineMath math="y = f(x)" /> の区間 <InlineMath math="[a, b]" /> のグラフの（弧）長 <InlineMath math="L" /> は、導関数が連続であるとき：
                </p>
                <BlockMath math="L = \int_a^b \sqrt{ 1 + \{ f'(x) \}^2 } \, dx" />
            </ContentBox>

            <ContentBox type="proof" title="Proof （曲線の長さ公式の概略）">
                <p>
                    曲線を等間隔 <InlineMath math="\Delta x" /> に分割します。1つの小区間での斜辺の長さを三平方の定理を使って近似します。<br />
                    微小な縦変化を <InlineMath math="\Delta y" /> とすると、直線片の長さは
                </p>
                <BlockMath math="\begin{aligned} \Delta L &\approx \sqrt{(\Delta x)^2 + (\Delta y)^2} \\ &= \sqrt{(\Delta x)^2\left\{1 + \Big(\frac{\Delta y}{\Delta x}\Big)^2\right\}} \\ &= \sqrt{1 + \left(\frac{\Delta y}{\Delta x}\right)^2} \, \Delta x \end{aligned}" />
                <p>
                    平均値の定理により <InlineMath math="\frac{\Delta y}{\Delta x}" /> は小区間内の代表点における微分係数 <InlineMath math="f'(c_i)" /> に一致します。
                    分割を細かく極限をとると、リーマン和から積分への移行によって公式の形になります。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§3.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>面積：</strong> 常に上の関数から下の関数を引き算した積分で求める。</li>
                    <li><strong>回転体の体積：</strong> 軸に垂直な平面で切る（円板法）ことで、<InlineMath math="\displaystyle \pi \int f(x)^2 \,dx" /> となる。発展としてバウムクーヘン法もある。</li>
                    <li><strong>球の体積公式</strong>などは定積分の強力な計算能力により見通しよく証明可能。</li>
                    <li><strong>曲線の長さ：</strong> 三平方の定理の微小版から導かれ、<InlineMath math="\displaystyle L = \int \sqrt{1 + \{f'(x)\}^2}\,dx" /> と計算される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
