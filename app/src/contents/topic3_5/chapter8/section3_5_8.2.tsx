import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MeanValueAndMaximumPrinciple() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                調和関数は、単に「ラプラス方程式を満たす」という微分的な定義を超えて、きわめて特徴的な幾何学的性質を持っています。
                その核心にあるのが<b>平均値定理</b>であり、これが調和関数の滑らかさや一意性を保証するすべての議論の出発点となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">平均値定理</h2>

            <p className="leading-relaxed">
                調和関数の重心における値は、その周囲の平均値に完全に一致するという性質です。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-1 (平均値定理)">
                <p>
                    <InlineMath math="u" /> が領域 <InlineMath math="\Omega" /> で調和であるとする。
                    このとき、<InlineMath math="\Omega" /> に含まれる任意の球 <InlineMath math="B_r(x_0)" /> に対して次が成立する：
                </p>
                <ul className="list-decimal list-inside space-y-2">
                    <li>
                        <b>球面平均</b>：<InlineMath math="u(x_0) = \frac{1}{|\partial B_r|} \int_{\partial B_r(x_0)} u \, dS" />
                    </li>
                    <li>
                        <b>球体平均</b>：<InlineMath math="u(x_0) = \frac{1}{|B_r|} \int_{B_r(x_0)} u \, dx" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    球面平均を <InlineMath math="\phi(r) = \frac{1}{|\partial B_r|} \int_{\partial B_r(x_0)} u(x) \, dS(x)" /> とおく。
                    変数変換により <InlineMath math="\phi(r) = \frac{1}{|\partial B_1|} \int_{\partial B_1(0)} u(x_0 + rz) \, dS(z)" /> と書ける。
                    これを <InlineMath math="r" /> で微分し、ガウスの発散定理（グリーンの第一公式）を用いると、
                    <BlockMath math="\phi'(r) = \frac{1}{|\partial B_1|} \int_{\partial B_1(0)} \nabla u(x_0 + rz) \cdot z \, dS(z) = \frac{r}{n |B_r|} \int_{B_r(x_0)} \Delta u \, dx" />
                    <InlineMath math="u" /> は調和関数なので <InlineMath math="\Delta u = 0" /> であり、<InlineMath math="\phi'(r) = 0" /> が得られる。
                    <InlineMath math="r \to 0" /> で <InlineMath math="\phi(r) \to u(x_0)" /> なので、任意の <InlineMath math="r" /> で <InlineMath math="\phi(r) = u(x_0)" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 8.2-1 (平均値定理の確認：2 次元の例)">
                <p>
                    2 次元の調和関数 <InlineMath math="u(x, y) = x^2 - y^2" /> について、原点中心・半径 <InlineMath math="r" /> の円周上での平均を計算する。
                    極座標 <InlineMath math="x = r \cos \theta, y = r \sin \theta" /> を用いると、
                    <BlockMath math="\frac{1}{2\pi} \int_0^{2\pi} (r^2 \cos^2 \theta - r^2 \sin^2 \theta) \, d\theta = \frac{r^2}{2\pi} \int_0^{2\pi} \cos(2\theta) \, d\theta = 0" />
                    となり、これは中心の値 <InlineMath math="u(0, 0) = 0" /> と一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最大値原理と一意性</h2>

            <p className="leading-relaxed">
                平均値定理の直接的な帰結として、調和関数は領域の内部で「盛り上がった」点を持つことができないことが示されます。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-2 (強最大値原理)">
                <p>
                    連結な開領域 <InlineMath math="\Omega" /> において <InlineMath math="u" /> が調和であるとする。
                    もし <InlineMath math="u" /> が領域内部で最大値（または最小値）を取るならば、<InlineMath math="u" /> は領域全体で定数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="M" /> を全体での最大値とし、<InlineMath math="A = \{x \in \Omega \mid u(x) = M\}" /> とする。
                    <InlineMath math="u" /> の連続性より <InlineMath math="A" /> は閉集合である。
                    一方、平均値定理より、<InlineMath math="x_0 \in A" /> ならばその近傍の球内の値もすべて <InlineMath math="M" /> でなければならず（そうでなければ平均が <InlineMath math="M" /> にならない）、<InlineMath math="A" /> は開集合でもある。
                    連結性より <InlineMath math="A = \Omega" /> または <InlineMath math="A = \emptyset" /> であり、内部に最大値があれば <InlineMath math="u \equiv M" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 8.2-3 (ディリクレ問題の解の一意性)">
                <p>
                    有界領域におけるラプラス方程式のディリクレ問題
                    <BlockMath math="\begin{cases} \Delta u = 0 & (\Omega) \\ u = g & (\partial \Omega) \end{cases}" />
                    の解は、存在するならばただ一つに限られる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    2 つの解 <InlineMath math="u_1, u_2" /> の差 <InlineMath math="w = u_1 - u_2" /> を考える。
                    <InlineMath math="w" /> は調和であり、境界上で <InlineMath math="w = 0" /> である。
                    最大値原理より、有界領域での調和関数の最大・最小は境界で達成されるため、
                    <BlockMath math="\min_{\partial \Omega} w \le w(x) \le \max_{\partial \Omega} w \implies 0 \le w(x) \le 0" />
                    となり、<InlineMath math="w \equiv 0" /> すなわち <InlineMath math="u_1 = u_2" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="平均値定理の逆（ガウスの定理の逆）">
                <p>
                    実は、連続関数であって「すべての球での平均値が中心値に一致する」という性質を持つならば、その関数は必ず調和関数になることが知られている。
                    つまり、平均値性質はラプラス方程式を満たすことと同値である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、境界条件が温度（ディリクレ条件）ではなく、熱の出入り（ノイマン条件）である場合に、
                解がどのように振る舞い、どのような制限を受けるかについて学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>調和関数の値は、周囲（球面および球体）の平均値と等しい（平均値定理）。</li>
                    <li>平均値性質により、非定数な調和関数は領域内部で極値を持つことができない（強最大値原理）。</li>
                    <li>最大値原理により、有界領域におけるディリクレ問題の解の一意性が完全に保証される。</li>
                    <li>平均値性質は調和性と同値であり、調和関数の解析的滑らかさの根源となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
