import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DistributionDetermination() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                特性関数は単に計算を助けるだけでなく、それ自体が確率分布の情報を完全に含んでいます。
                本節では、特性関数から元の分布を復元する逆転公式と、特性関数の積が独立和の分布に対応するという重要な性質について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆転公式と一意性</h2>

            <p className="leading-relaxed">
                特性関数が与えられれば、元の確率分布を一意に特定することが可能です。これを保証するのが逆転公式です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (逆転公式)">
                <p>
                    確率分布 <InlineMath math="F" /> の特性関数を <InlineMath math="\varphi(t)" /> とするとき、
                    <InlineMath math="a < b" /> が <InlineMath math="F" /> の連続点であれば、次が成り立つ：
                    <BlockMath math="F(b) - F(a) = \lim_{T \to \infty} \frac{1}{2\pi} \int_{-T}^T \frac{e^{-ita} - e^{-itb}}{it} \varphi(t) dt" />
                    特に特性関数 <InlineMath math="\varphi(t)" /> が可積分であれば、密度関数 <InlineMath math="f(x)" /> が存在し、次のように書ける（フーリエ逆変換）：
                    <BlockMath math="f(x) = \frac{1}{2\pi} \int_{-\infty}^\infty e^{-itx} \varphi(t) dt" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    右辺の積分に特性関数の定義を代入し、フビニの定理を用いて積分の順序を入れ替える（<InlineMath math="T" /> が有限なので正当化される）：
                    <BlockMath math="\begin{aligned} &\frac{1}{2\pi} \int_{-T}^T \frac{e^{-ita} - e^{-itb}}{it} \varphi(t) dt \\ &= \frac{1}{2\pi} \int_{-T}^T \frac{e^{-ita} - e^{-itb}}{it} \left( \int_{-\infty}^\infty e^{itx} dF(x) \right) dt \\ &= \int_{-\infty}^\infty \left( \frac{1}{2\pi} \int_{-T}^T \frac{e^{it(x-a)} - e^{it(x-b)}}{it} dt \right) dF(x) \end{aligned}" />
                    内側の積分の虚部は符号の関係でキャンセルし、実部のみが残る。
                    <BlockMath math="\begin{aligned} &\frac{1}{2\pi} \int_{-T}^T \frac{\sin(t(x-a)) - \sin(t(x-b))}{t} dt \\ &= \frac{1}{\pi} \int_0^T \frac{\sin(t(x-a))}{t} dt - \frac{1}{\pi} \int_0^T \frac{\sin(t(x-b))}{t} dt \end{aligned}" />
                    ディリクレ積分 <InlineMath math="\int_0^\infty \frac{\sin \alpha t}{t} dt = \frac{\pi}{2} \text{sgn}(\alpha)" /> を用いると、<InlineMath math="T \to \infty" /> のとき、
                    この値は <InlineMath math="1" />（<InlineMath math="a < x < b" />）、<InlineMath math="0" />（<InlineMath math="x < a" /> または <InlineMath math="x > b" />）、
                    および端点での値（不連続点でない場合は無視可能）へと収束する。
                    したがって、期待値の収束（支配収束定理）より、極限は <InlineMath math="P(a < X < b) = F(b) - F(a)" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 7.3-2 (一意性定理)">
                <p>
                    2 つの確率分布が同じ特性関数を持つならば、それらは同一の分布である：
                    <BlockMath math="\varphi_X(t) = \varphi_Y(t) \quad (\forall t \in \mathbb{R}) \implies F_X = F_Y" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    逆転公式（Theorem 7.3-1）により、分布関数 <InlineMath math="F" /> の連続点における値の差 <InlineMath math="F(b) - F(a)" /> は、
                    特性関数 <InlineMath math="\varphi(t)" /> のみを用いて一意に表現される。
                    分布関数の不連続点は高々可算個であるため、連続点での値が一致すれば、右連続性によりすべての点において分布関数は一致する。
                    したがって、特性関数が等しければ分布も等しい。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この一意性定理のおかげで、「特性関数を求めて形を特定する」ことが、確立分布を特定することの強力な手段となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">独立確率変数の和</h2>

            <p className="leading-relaxed">
                密度関数の畳み込みが必要だった独立和の計算は、特性関数を用いると単純な積へと変わります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-3 (独立和の特性関数)">
                <p>
                    独立な確率変数 <InlineMath math="X, Y" /> に対し、その和 <InlineMath math="Z = X + Y" /> の特性関数は次のようになる：
                    <BlockMath math="\varphi_{X+Y}(t) = \varphi_X(t) \cdot \varphi_Y(t)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    期待値の定義と独立性（Theorem 4.3-1）を用いる。
                    <BlockMath math="\begin{aligned} \varphi_{X+Y}(t) &= E[e^{it(X+Y)}] \\ &= E[e^{itX} \cdot e^{itY}] \end{aligned}" />
                    ここで、<InlineMath math="X, Y" /> が独立であることから、<InlineMath math="e^{itX}" /> と <InlineMath math="e^{itY}" /> も独立である。
                    したがって積の期待値は期待値の積に分解され、
                    <BlockMath math="\varphi_{X+Y}(t) = E[e^{itX}] E[e^{itY}] = \varphi_X(t) \varphi_Y(t)" />
                    が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用：正規分布の安定性</h2>

            <p className="leading-relaxed">
                今、示した性質を用いて正規分布の「和」の性質を調べます。
            </p>

            <ContentBox type="example" title="Example 7.3-1 (正規分布の独立和)">
                <p>
                    <InlineMath math="X \sim \mathcal{N}(0, \sigma_1^2)" /> と <InlineMath math="Y \sim \mathcal{N}(0, \sigma_2^2)" /> が独立であるとする。
                    それぞれの特性関数は <InlineMath math="\varphi_X(t) = e^{-\sigma_1^2 t^2 / 2}" />、<InlineMath math="\varphi_Y(t) = e^{-\sigma_2^2 t^2 / 2}" /> である。
                    和 <InlineMath math="Z = X + Y" /> の特性関数は、
                    <BlockMath math="\varphi_Z(t) = \varphi_X(t) \varphi_Y(t) = e^{-\sigma_1^2 t^2 / 2} \cdot e^{-\sigma_2^2 t^2 / 2} = e^{-(\sigma_1^2 + \sigma_2^2) t^2 / 2}" />
                    となる。この形は分散 <InlineMath math="\sigma_1^2 + \sigma_2^2" /> の正規分布の特性関数そのものである。
                    一意性定理より、<InlineMath math="Z \sim \mathcal{N}(0, \sigma_1^2 + \sigma_2^2)" /> であることが導かれる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark: 畳み込みから積へ">
                <p>
                    分布の和を密度関数で計算するには、全有界区間での畳み込み積分が必要であり、計算負荷が高くなりがちです。
                    特性関数の積をとるだけで和の分布が得られるこの性質は、中心極限定理のような「多数の和の極限」を議論する際に、
                    数学的な見通しを劇的に良くしてくれます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>逆転公式により、特性関数は元の分布を完全に（一意に）決定する。</li>
                    <li>独立な確率変数の和の特性関数は、個々の特性関数の積として計算できる。</li>
                    <li>正規分布の安定性（和が正規分布になること）は、特性関数を用いると代数的に明快に示すことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
