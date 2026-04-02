import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_10_2() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で「曲線の長さ（弧長）」という概念を先取りして定義しました。本節では、その弧長の定義を厳密に与え、それが速度ベクトルの大きさの積分によって計算できることを証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弧長の定義と計算公式</h2>

            <p>
                曲線の長さは、直感的には「曲線に沿って細かく定点を打ち、それらを超短い線分で結んだ折れ線の長さの極限」として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 10.2-1 (曲線の弧長)">
                <p>
                    <InlineMath math="[a, b]" /> 上で定義された曲線 <InlineMath math="\mathbf{r}(t)" /> （<InlineMath math="\mathbb{R}^n" />）について考える。
                    区間の分割 <InlineMath math="\Delta: a = t_0 < t_1 < \dots < t_N = b" /> をとる。これに対応する曲線上の点列 <InlineMath math="\mathbf{r}(t_0), \mathbf{r}(t_1), \dots, \mathbf{r}(t_N)" /> を結ぶ折れ線の長さの総和
                </p>
                <BlockMath math="L(\Delta) = \sum_{i=1}^N \|\mathbf{r}(t_i) - \mathbf{r}(t_{i-1})\|" />
                <p className="mt-2">
                    を考える。分割の最大幅 <InlineMath math="|\Delta| = \max_i (t_i - t_{i-1})" /> を <InlineMath math="0" /> に近づけたときの極限が存在するとき、その極限値 <InlineMath math="L" /> を曲線の<strong>弧長</strong>（Arc length）という。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 10.2-1 (弧長の積分公式)">
                <p>
                    曲線 <InlineMath math="\mathbf{r}: [a, b] \to \mathbb{R}^n" /> が <InlineMath math="C^1" /> 級であるとき、その弧長 <InlineMath math="L" /> は存在し、次の定積分で与えられる：
                </p>
                <BlockMath math="L = \int_a^b \|\mathbf{r}'(t)\| \, dt = \int_a^b \sqrt{(x_1'(t))^2 + \dots + (x_n'(t))^2} \, dt" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    空間を <InlineMath math="\mathbb{R}^3" /> （つまり <InlineMath math="\mathbf{r}(t) = (x(t), y(t), z(t))" />）として証明するが、一般の <InlineMath math="\mathbb{R}^n" /> でも全く同様である。
                </p>
                <p className="mt-2">
                    分割 <InlineMath math="\Delta: a = t_0 < t_1 < \dots < t_N = b" /> に対する折れ線の長さ <InlineMath math="L(\Delta)" /> の第 <InlineMath math="i" /> 項を考える：
                </p>
                <BlockMath math="\begin{aligned}
                                    &\|\mathbf{r}(t_i) - \mathbf{r}(t_{i-1})\| \\ &= \sqrt{(x(t_i) - x(t_{i-1}))^2 + (y(t_i) - y(t_{i-1}))^2 + (z(t_i) - z(t_{i-1}))^2}
                                \end{aligned}" />
                <p className="mt-2">
                    各成分関数 <InlineMath math="x(t), y(t), z(t)" /> は <InlineMath math="C^1" /> 級であるから微分可能であり、区間 <InlineMath math="[t_{i-1}, t_i]" /> において<strong>平均値の定理</strong>を適用できる。
                    したがって、区間内のそれぞれ独立した点 <InlineMath math="\xi_i, \eta_i, \zeta_i \in (t_{i-1}, t_i)" /> が存在して、
                </p>
                <BlockMath math="\begin{aligned}
                                    x(t_i) - x(t_{i-1}) &= x'(\xi_i)\Delta t_i \\
                                    y(t_i) - y(t_{i-1}) &= y'(\eta_i)\Delta t_i \\
                                    z(t_i) - z(t_{i-1}) &= z'(\zeta_i)\Delta t_i
                                \end{aligned}" />
                <p className="mt-2">
                    を満たす（ここで <InlineMath math="\Delta t_i = t_i - t_{i-1}" />）。これらを代入すると、
                </p>
                <BlockMath math="\|\mathbf{r}(t_i) - \mathbf{r}(t_{i-1})\| = \sqrt{(x'(\xi_i))^2 + (y'(\eta_i))^2 + (z'(\zeta_i))^2} \Delta t_i" />
                <p className="mt-2">
                    これは被積分関数 <InlineMath math="\sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2}" /> のリーマン和に非常に近い形をしているが、平方根の中身が同一の点 <InlineMath math="t_i^*" /> で評価されておらず、それぞれ異なる点 <InlineMath math="\xi_i, \eta_i, \zeta_i" /> で評価されている点が技術的な壁となる。
                </p>
                <p className="mt-2">
                    しかし、導関数 <InlineMath math="x'(t), y'(t), z'(t)" /> は閉区間 <InlineMath math="[a, b]" /> 上で連続であるため、<strong>一様連続</strong>である。
                    したがって、<InlineMath math="|\Delta| \to 0" /> とすれば、同じ微小区間 <InlineMath math="[t_{i-1}, t_i]" /> 内にある <InlineMath math="\xi_i, \eta_i, \zeta_i" /> での関数の値は、任意の代表点 <InlineMath math="t_i^* \in [t_{i-1}, t_i]" /> での値に一様に収束する（誤差は <InlineMath math="|\Delta|" /> と共に <InlineMath math="0" /> に収束する）。
                </p>
                <p className="mt-2">
                    すなわち、極限操作においては
                </p>
                <BlockMath math="\begin{aligned}
                                    &\lim_{|\Delta| \to 0} \sum_{i=1}^N \sqrt{(x'(\xi_i))^2 + (y'(\eta_i))^2 + (z'(\zeta_i))^2} \Delta t_i \\
                                    &= \lim_{|\Delta| \to 0} \sum_{i=1}^N \sqrt{(x'(t_i^*))^2 + (y'(t_i^*))^2 + (z'(t_i^*))^2} \Delta t_i
                                \end{aligned}" />
                <p className="mt-2">
                    としてよい。右辺はまさに連続関数 <InlineMath math="\|\mathbf{r}'(t)\|" /> の定積分の定義（リーマン和の極限）に他ならない。したがって、
                </p>
                <BlockMath math="L = \int_a^b \sqrt{(x'(t))^2 + (y'(t))^2 + (z'(t))^2} \, dt = \int_a^b \|\mathbf{r}'(t)\| \, dt" />
                <p className="mt-2">
                    が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <p>
                弧長の積分は、被積分関数に平方根が含まれるため、解析的に（初等関数で）積分を計算できる例は非常に限られています。
                ここでは計算可能な代表的な例として「螺旋（らせん）」を扱います。
            </p>

            <ContentBox type="example" title="Example 10.2-1 (円柱螺旋の弧長)">
                <p>
                    空間内の曲線 <InlineMath math="\mathbf{r}(t)" /> が次のように与えられているとする（<InlineMath math="a > 0, c > 0" />）。
                </p>
                <BlockMath math="\mathbf{r}(t) = \begin{pmatrix} a \cos t \\ a \sin t \\ ct \end{pmatrix} \quad (0 \le t \le 2\pi)" />
                <p className="mt-2">
                    この曲線（円柱底面から高さ <InlineMath math="2\pi c" /> まで1周する螺旋）の長さ <InlineMath math="L" /> を求める。
                </p>
                <p className="font-bold text-slate-700 dark:text-slate-300 mt-4">[解答]</p>
                <p className="mt-2">
                    速度ベクトル <InlineMath math="\mathbf{r}'(t)" /> は
                </p>
                <BlockMath math="\mathbf{r}'(t) = \begin{pmatrix} -a \sin t \\ a \cos t \\ c \end{pmatrix}" />
                <p className="mt-2">
                    その大きさは
                </p>
                <BlockMath math="\begin{aligned}
                                    \|\mathbf{r}'(t)\| &= \sqrt{(-a \sin t)^2 + (a \cos t)^2 + c^2} \\
                                    &= \sqrt{a^2(\sin^2 t + \cos^2 t) + c^2} \\
                                    &= \sqrt{a^2 + c^2}
                                \end{aligned}" />
                <p className="mt-2">
                    驚くべきことに、この螺旋は<strong>速度の大きさが常に一定</strong>（<InlineMath math="\sqrt{a^2+c^2}" />）の曲線である。
                    したがって、区間 <InlineMath math="[0, 2\pi]" /> における弧長は、
                </p>
                <BlockMath math="\begin{aligned}
                                    L &= \int_0^{2\pi} \|\mathbf{r}'(t)\| \, dt = \int_0^{2\pi} \sqrt{a^2 + c^2} \, dt \\
                                    &= \left[ \sqrt{a^2 + c^2} \, t \right]_0^{2\pi} = 2\pi\sqrt{a^2 + c^2}
                                \end{aligned}" />
                <p className="mt-2">
                    となる。
                    なお、<InlineMath math="c=0" /> とすると <InlineMath math="L = 2\pi a" /> となり、これは半径 <InlineMath math="a" /> の円周の長さに一致する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="楕円の周長について">
                <p>
                    螺旋のように綺麗に積分できるのは稀です。例えば楕円 <InlineMath math="\mathbf{r}(t) = (a \cos t, b \sin t)" /> の周長を求めようとすると、
                </p>
                <BlockMath math="L = \int_0^{2\pi} \sqrt{a^2 \sin^2 t + b^2 \cos^2 t} \, dt" />
                <p className="mt-2">
                    となり、これは<strong>第2種完全楕円積分</strong>と呼ばれる特殊関数になり、サインやコサインなどの初等関数で表すことはできません（楕円積分の名前の由来です）。多くの弧長計算は数値積分に頼ることになります。
                </p>
            </ContentBox>

        </section>
    );
}
