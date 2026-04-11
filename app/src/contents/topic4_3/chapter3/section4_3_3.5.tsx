import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DiscriminantAndJInvariant() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、ワイエルシュトラスの <InlineMath math="\wp" /> 関数が満たす微分方程式と、半周期点での値 <InlineMath math="e_1, e_2, e_3" /> について学びました。本節では、格子から定まる重要な不変量である「判別式」と「<InlineMath math="j" /> 不変量」について解説します。これらは、楕円関数の性質や格子の同型分類を考える上で不可欠な概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">判別式</h2>

            <p>
                まず、格子の不変量 <InlineMath math="g_2, g_3" /> を用いて構成される判別式を定義します。これは対応する3次方程式の根の重なり具合を測る量です。
            </p>

            <ContentBox type="definition" title="Definition 3.5-1 (判別式)">
                <p>
                    アイゼンシュタイン級数から定まる不変量 <InlineMath math="g_2, g_3" /> に対して、<b>判別式（discriminant）</b> <InlineMath math="\Delta" /> を次のように定義する。
                </p>
                <BlockMath math="\Delta = g_2^3 - 27g_3^2" />
            </ContentBox>

            <p>
                この抽象的な定義が具体的にどのような値を取るのか、代表的な格子であるガウス格子を例に見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.5-1">
                <p>
                    ガウス格子 <InlineMath math="\Lambda = \mathbb{Z} + i\mathbb{Z}" /> を考える。対称性より <InlineMath math="G_6 = 0" /> であり、したがって <InlineMath math="g_3 = 0" /> となる。
                    このとき、判別式は以下のようになる。
                </p>
                <BlockMath math="\Delta = g_2^3 - 27(0)^2 = g_2^3" />
                <p>
                    <InlineMath math="g_2 = 60 \sum_{\omega \neq 0} \omega^{-4}" /> は直接計算により <InlineMath math="0" /> ではないことが確認できるため、ガウス格子において <InlineMath math="\Delta \neq 0" /> となる。
                </p>
            </ContentBox>

            <p>
                上の例で見たように、ガウス格子では判別式は <InlineMath math="0" /> になりません。実は、これは任意の格子について成り立つ極めて重要な性質です。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 3.5-1 (<InlineMath math="\Delta \neq 0" />)</span>}>
                <p>
                    任意の格子 <InlineMath math="\Lambda" /> に対して、その判別式は <InlineMath math="\Delta \neq 0" /> を満たす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    前節で示したように、<InlineMath math="\wp" /> 関数の半周期点での値 <InlineMath math="e_1, e_2, e_3" /> を用いると、右辺の多項式は <InlineMath math="4z^3 - g_2 z - g_3 = 4(z - e_1)(z - e_2)(z - e_3)" /> と因数分解される。
                    3次方程式の判別式の公式を用いると、<InlineMath math="\Delta" /> は根の差の2乗積を用いて次のように表される。
                </p>
                <BlockMath math="\Delta = 16(e_1-e_2)^2(e_2-e_3)^2(e_3-e_1)^2" />
                <p>
                    リウヴィルの定理より、<InlineMath math="e_1, e_2, e_3" /> は互いに相異なる値をとる。したがって、右辺の各因子は <InlineMath math="0" /> にならず、<InlineMath math="\Delta \neq 0" /> が従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                <InlineMath math="\Delta \neq 0" /> であることは、後ほど Chapter 5 で学ぶ楕円曲線が「特異点を持たない（非特異である）」ための必要十分条件と対応しており、幾何学的にも非常に深い意味を持っています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">j 不変量</h2>

            <p>
                判別式 <InlineMath math="\Delta \neq 0" /> であることが保証されたため、これを分母に持つ新しい不変量を定義することができます。それが <InlineMath math="j" /> 不変量です。
            </p>

            <ContentBox type="definition" title={<span>Definition 3.5-2 (<InlineMath math="j" /> 不変量)</span>}>
                <p>
                    格子 <InlineMath math="\Lambda" /> に対する <b><InlineMath math="j" /> 不変量（j-invariant）</b> を次のように定義する。
                </p>
                <BlockMath math="j(\Lambda) = 1728 \frac{g_2^3}{\Delta} = 1728 \frac{g_2^3}{g_2^3 - 27g_3^2}" />
            </ContentBox>

            <p>
                この定数 <InlineMath math="1728 = 12^3" /> は歴史的な理由や、<InlineMath math="q" />-展開した際の係数を整数にするための正規化因子として付けられています。それでは、この <InlineMath math="j" /> 不変量の具体例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.5-2">
                <p>
                    代表的な格子について <InlineMath math="j" /> 不変量を計算する。
                </p>
                <ul>
                    <li>
                        <b>ガウス格子</b>（<InlineMath math="\Lambda = \mathbb{Z} + i\mathbb{Z}" />）：<br />
                        <InlineMath math="g_3 = 0" /> であるため、<InlineMath math="\Delta = g_2^3" />。したがって、
                        <BlockMath math="j = 1728 \frac{g_2^3}{g_2^3} = 1728" />
                    </li>
                    <li>
                        <b>アイゼンシュタイン格子</b>（<InlineMath math="\Lambda = \mathbb{Z} + e^{2\pi i/3}\mathbb{Z}" />）：<br />
                        対称性より <InlineMath math="g_2 = 0" /> となる。したがって分子が <InlineMath math="0" /> となり、
                        <BlockMath math="j = 0" />
                    </li>
                </ul>
            </ContentBox>

            <p>
                <InlineMath math="j" /> 不変量の最も重要な性質は、格子を複素定数倍（スケーリング）しても値が変化しないという点にあります。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 3.5-2 (<InlineMath math="j" /> 不変量のスカラー不変性)</span>}>
                <p>
                    <InlineMath math="j" /> 不変量は格子のスカラー倍に関して不変である。すなわち、任意の <InlineMath math="\alpha \in \mathbb{C}^*" /> に対して以下が成り立つ。
                </p>
                <BlockMath math="j(\alpha\Lambda) = j(\Lambda)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    格子のスカラー倍 <InlineMath math="\alpha\Lambda" /> に対するアイゼンシュタイン級数の変化を考える。
                    定義より、<InlineMath math="g_2" /> と <InlineMath math="g_3" /> は次のようにスケーリングされる。
                </p>
                <BlockMath math="g_2(\alpha\Lambda) = \alpha^{-4}g_2(\Lambda)" />
                <BlockMath math="g_3(\alpha\Lambda) = \alpha^{-6}g_3(\Lambda)" />
                <p>
                    これを用いて判別式 <InlineMath math="\Delta(\alpha\Lambda)" /> を計算すると、
                </p>
                <BlockMath math="\begin{aligned} \Delta(\alpha\Lambda) &= (\alpha^{-4}g_2)^3 - 27(\alpha^{-6}g_3)^2 \\ &= \alpha^{-12}(g_2^3 - 27g_3^2) \\ &= \alpha^{-12}\Delta(\Lambda) \end{aligned}" />
                <p>
                    したがって、<InlineMath math="j" /> 不変量は
                </p>
                <BlockMath math="\begin{aligned} j(\alpha\Lambda) &= 1728 \frac{(\alpha^{-4}g_2)^3}{\alpha^{-12}\Delta} \\ &= 1728 \frac{\alpha^{-12}g_2^3}{\alpha^{-12}\Delta} \\ &= 1728 \frac{g_2^3}{\Delta} \\ &= j(\Lambda) \end{aligned}" />
                <p>
                    となり、スカラー倍に依存しないことが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このスカラー不変性は、格子の「形」のみに依存する量であることを意味しています。
            </p>

            <ContentBox type="remark" title="格子の同型分類とモジュライ空間への展望">
                <p>
                    Proposition 3.5-2 で示されたように、<InlineMath math="j" /> 不変量は格子の相似類（スカラー倍で移り合う格子の集まり）に対して一定の値を持ちます。さらに驚くべきことに、逆も成り立ちます。すなわち、2つの格子が同じ <InlineMath math="j" /> 不変量を持つならば、それらは必ず互いに相似となります。
                </p>
                <p>
                    この事実は、<InlineMath math="j" /> 不変量が格子の相似類、ひいては複素トーラスや楕円曲線の「同型類」を<b>完全に分類する</b>パラメータであることを意味しています。この深い事実については、Chapter 5 の §5.4 で詳しく扱います。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>判別式 <InlineMath math="\Delta = g_2^3 - 27g_3^2" /> は任意の格子に対して <InlineMath math="\Delta \neq 0" /> を満たす。</li>
                    <li><InlineMath math="j" /> 不変量 <InlineMath math="j(\Lambda) = 1728 g_2^3 / \Delta" /> は格子のスカラー倍に対して不変である（<InlineMath math="j(\alpha\Lambda) = j(\Lambda)" />）。</li>
                    <li>ガウス格子の <InlineMath math="j" /> 不変量は <InlineMath math="1728" />、アイゼンシュタイン格子の <InlineMath math="j" /> 不変量は <InlineMath math="0" /> である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
