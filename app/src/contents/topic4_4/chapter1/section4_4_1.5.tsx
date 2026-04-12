import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvexProjectionTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、閉凸集合に対する射影（最近傍点）の存在と一意性、およびその重要な性質である非拡大性について解説します。これらの概念は、最適化理論や関数解析において基礎となる重要なものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">射影の存在と一意性</h2>

            <p>
                まず、閉凸集合への射影を定義します。
            </p>

            <ContentBox type="definition" title={<span>Definition 1.5-1 (凸射影)</span>}>
                <p>
                    <b>凸射影（convex projection）</b>：閉凸集合 <InlineMath math="C" /> に対して、点 <InlineMath math="x" /> からの最近傍点を与える写像を <InlineMath math="\mathrm{proj}_C(x)" /> とし、次のように定義する。
                </p>
                <BlockMath math="\mathrm{proj}_C(x) = \arg\min_{y \in C} \|x - y\|" />
            </ContentBox>

            <p>
                この定義が意味を持つためには、最小値を達成する点が存在し、かつ一意であることが必要です。次の定理がそれを保証します。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 1.5-1 (閉凸集合への射影の存在と一意性)</span>}>
                <p>
                    <InlineMath math="\mathbb{R}^n" /> における空でない閉凸集合 <InlineMath math="C" /> に対して、任意の <InlineMath math="x \in \mathbb{R}^n" /> に最近傍点が一意に存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <b>存在性</b>：<InlineMath math="d = \inf_{y \in C} \|x - y\|" /> とおく。下限の定義より、<InlineMath math="C" /> 内の点列 <InlineMath math="\{y_k\}" /> が存在して、<InlineMath math="\|x - y_k\| \to d" /> となる。中線定理より、
                </p>
                <BlockMath math="\|y_k - y_j\|^2 = 2\|x - y_k\|^2 + 2\|x - y_j\|^2 - 4\left\|x - \frac{y_k + y_j}{2}\right\|^2" />
                <p>
                    <InlineMath math="C" /> は凸であるため、中点 <InlineMath math="(y_k + y_j)/2" /> も <InlineMath math="C" /> に属する。したがって <InlineMath math="\|x - (y_k + y_j)/2\| \geq d" />。これより、
                </p>
                <BlockMath math="\|y_k - y_j\|^2 \leq 2\|x - y_k\|^2 + 2\|x - y_j\|^2 - 4d^2" />
                <p>
                    <InlineMath math="k, j \to \infty" /> のとき右辺は <InlineMath math="2d^2 + 2d^2 - 4d^2 = 0" /> に近づく。したがって <InlineMath math="\{y_k\}" /> はコーシー列である。<InlineMath math="C" /> は閉集合なので完備であり、<InlineMath math="\{y_k\}" /> はある <InlineMath math="y^* \in C" /> に収束し、<InlineMath math="\|x - y^*\| = d" /> となる。
                </p>
                <p>
                    <b>一意性</b>：<InlineMath math="y^*, z^* \in C" /> がともに最近傍点（距離 <InlineMath math="d" />）であるとする。中点 <InlineMath math="(y^* + z^*)/2 \in C" /> となるので、
                </p>
                <BlockMath math="\begin{aligned} d &\leq \left\|x - \frac{y^* + z^*}{2}\right\| \\ &= \left\|\frac{1}{2}(x - y^*) + \frac{1}{2}(x - z^*)\right\| \\ &\leq \frac{1}{2}\|x - y^*\| + \frac{1}{2}\|x - z^*\| = d \end{aligned}" />
                <p>
                    等号が成立するのは <InlineMath math="x - y^* = x - z^*" /> のときのみであり、ゆえに <InlineMath math="y^* = z^*" />。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体的な例として、半空間への射影を計算してみましょう。
            </p>

            <ContentBox type="example" title={<span>Example 1.5-1</span>}>
                <p>
                    半空間 <InlineMath math="C = \{y \in \mathbb{R}^n \mid \langle a, y \rangle \leq b\}" /> （ただし <InlineMath math="a \neq 0" />）に対する射影 <InlineMath math="\mathrm{proj}_C(x)" /> を計算する。
                </p>
                <p>
                    <InlineMath math="x \in C" />、すなわち <InlineMath math="\langle a, x \rangle \leq b" /> の場合、明らかに <InlineMath math="\mathrm{proj}_C(x) = x" /> である。
                </p>
                <p>
                    <InlineMath math="x \notin C" />、すなわち <InlineMath math="\langle a, x \rangle > b" /> の場合、境界上の点が最近傍点となる。境界までの最短方向は <InlineMath math="-a" /> 方向であるから、<InlineMath math="\mathrm{proj}_C(x) = x - t a" /> （<InlineMath math="t > 0" />）の形になる。これが境界 <InlineMath math="\langle a, y \rangle = b" /> 上にある条件から、
                </p>
                <BlockMath math="\begin{aligned} \langle a, x - ta \rangle = b &\implies \langle a, x \rangle - t\|a\|^2 = b \\ &\implies t = \frac{\langle a, x \rangle - b}{\|a\|^2} \end{aligned}" />
                <p>
                    よって、
                </p>
                <BlockMath math="\mathrm{proj}_C(x) = x - \frac{\max\{\langle a, x \rangle - b, 0\}}{\|a\|^2}a"
                />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">射影の特徴づけと非拡大性</h2>

            <p>
                次に、ある点が射影であるための必要十分条件と、射影操作が距離を縮める（あるいは保つ）性質である非拡大性について述べます。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 1.5-1 (射影の特徴づけ)</span>}>
                <p>
                    閉凸集合 <InlineMath math="C" /> への点 <InlineMath math="x" /> の射影を <InlineMath math="p" /> とするとき、<InlineMath math="p = \mathrm{proj}_C(x)" /> であることと、任意の <InlineMath math="y \in C" /> に対して次が成り立つことは同値である。
                </p>
                <BlockMath math="\langle x - p, y - p \rangle \leq 0" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="(\implies)" /> <InlineMath math="p = \mathrm{proj}_C(x)" /> とする。任意の <InlineMath math="y \in C" /> と <InlineMath math="t \in (0, 1)" /> に対して、<InlineMath math="C" /> は凸なので <InlineMath math="p_t = p + t(y - p) = (1-t)p + ty \in C" /> である。距離の最小性より <InlineMath math="\|x - p\|^2 \leq \|x - p_t\|^2" />。右辺を展開すると、
                </p>
                <BlockMath math="\begin{aligned} \|x - p_t\|^2 &= \|x - p - t(y - p)\|^2 \\ &= \|x - p\|^2 - 2t\langle x - p, y - p \rangle + t^2\|y - p\|^2 \end{aligned}" />
                <p>
                    したがって <InlineMath math="2t\langle x - p, y - p \rangle \leq t^2\|y - p\|^2" />。<InlineMath math="t > 0" /> で割り、<InlineMath math="t \to 0" /> とすると <InlineMath math="\langle x - p, y - p \rangle \leq 0" />。
                </p>
                <p>
                    <InlineMath math="(\Longleftarrow)" /> 逆に不等式が成り立つとする。任意の <InlineMath math="y \in C" /> について、
                </p>
                <BlockMath math="\begin{aligned} \|x - y\|^2 &= \|(x - p) + (p - y)\|^2 \\ &= \|x - p\|^2 + 2\langle x - p, p - y \rangle + \|p - y\|^2 \end{aligned}" />
                <p>
                    仮定より <InlineMath math="\langle x - p, y - p \rangle \leq 0" /> なので <InlineMath math="2\langle x - p, p - y \rangle \geq 0" />。ゆえに <InlineMath math="\|x - y\|^2 \geq \|x - p\|^2" /> となり、<InlineMath math="p" /> が最短点である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この特徴づけを用いると、射影の非拡大性を簡単に示すことができます。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 1.5-2 (非拡大性)</span>}>
                <p>
                    任意の <InlineMath math="x, y \in \mathbb{R}^n" /> に対して、閉凸集合 <InlineMath math="C" /> への射影は以下の不等式を満たす。
                </p>
                <BlockMath math="\|\mathrm{proj}_C(x) - \mathrm{proj}_C(y)\| \leq \|x - y\|" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p = \mathrm{proj}_C(x)" />, <InlineMath math="q = \mathrm{proj}_C(y)" /> とおく。Proposition 1.5-1 より、
                </p>
                <BlockMath math="\langle x - p, q - p \rangle \leq 0, \quad \langle y - q, p - q \rangle \leq 0" />
                <p>
                    これらを加え合わせると、
                </p>
                <BlockMath math="\begin{aligned} &\langle x - p, q - p \rangle + \langle y - q, p - q \rangle \leq 0 \\ &\implies \langle x - y - (p - q), q - p \rangle \leq 0 \\ &\implies \langle p - q, p - q \rangle \leq \langle x - y, p - q \rangle \end{aligned}" />
                <p>
                    よって <InlineMath math="\|p - q\|^2 \leq \|x - y\|\|p - q\|" /> となり、<InlineMath math="\|p - q\| \leq \|x - y\|" /> が従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 1.5-2</span>}>
                <p>
                    <InlineMath math="\mathbb{R}^2" /> において、<InlineMath math="C = \{(x, y) \mid x+y \leq 1, x \geq 0, y \geq 0\}" /> とする。<InlineMath math="x_1 = (2, 2)" /> と <InlineMath math="x_2 = (3, 0)" /> の射影を考える。
                </p>
                <p>
                    <InlineMath math="\mathrm{proj}_C(x_1) = (1/2, 1/2)" />、<InlineMath math="\mathrm{proj}_C(x_2) = (1, 0)" /> である。<InlineMath math="\|x_1 - x_2\| = \sqrt{1^2 + 2^2} = \sqrt{5} \approx 2.23" /> に対して、<InlineMath math="\|\mathrm{proj}_C(x_1) - \mathrm{proj}_C(x_2)\| = \sqrt{(-1/2)^2 + (1/2)^2} = \sqrt{1/2} \approx 0.707" /> となり、非拡大性が成立していることが確認できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ヒルベルト空間への一般化と近接作用素への接続">
                <p>
                    射影の存在と一意性、および非拡大性は、有限次元の <InlineMath math="\mathbb{R}^n" /> だけでなく、完備な内積空間であるヒルベルト空間においても成り立ちます（関数解析 4-1）。また、第7章で学ぶ近接作用素（proximity operator）は、射影操作を一般の凸関数に対して拡張したものであり、非拡大性はそのアルゴリズム的な収束性を保証する要となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>閉凸集合への射影は、各点に対して一意に存在する。</li>
                    <li>射影 <InlineMath math="p = \mathrm{proj}_C(x)" /> は、不等式 <InlineMath math="\langle x - p, y - p \rangle \leq 0" /> (<InlineMath math="\forall y \in C" />) によって特徴づけられる。</li>
                    <li>射影操作は非拡大性 <InlineMath math="\|\mathrm{proj}_C(x) - \mathrm{proj}_C(y)\| \leq \|x - y\|" /> を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
