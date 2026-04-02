import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CentralLimitTheoremStatement() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率論において最も「魔法」に近い結果の一つが、中心極限定理（Central Limit Theorem, CLT）です。
                これは、どのような形の分布であっても、同じ試行を何度も繰り返して合計をとれば、その分布は必ず「正規分布」に近づいていくという驚くべき性質を主張します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">中心極限定理の主張</h2>

            <p className="leading-relaxed">
                定理の核心は、確率変数の和を適切に規格化（平均を <InlineMath math="0" />、分散を <InlineMath math="1" /> に調整）したとき、その分布が標準正規分布に収束することにあります。
            </p>

            <ContentBox type="theorem" title="Theorem 9.1-1 (中心極限定理)">
                <p>
                    確率変数列 <InlineMath math="\{X_n\}" /> が独立同分布（i.i.d.）であり、
                    平均 <InlineMath math="\mu" />、有限な分散 <InlineMath math="\sigma^2 \in (0, \infty)" /> を持つとする。
                    このとき、和の標準化変数
                    <BlockMath math="Z_n = \frac{\sum_{k=1}^n X_k - n\mu}{\sigma\sqrt{n}} = \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma}" />
                    は、<InlineMath math="n \to \infty" /> において標準正規分布 <InlineMath math="\mathcal{N}(0, 1)" /> に分布収束する。
                    <BlockMath math="Z_n \xrightarrow{d} Z \sim \mathcal{N}(0, 1)" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ここで、<InlineMath math="\xrightarrow{d}" /> は §6.4 で学んだ「分布収束」を意味します。
                つまり、任意の <InlineMath math="x \in \mathbb{R}" /> に対して次が成り立ちます：
                <BlockMath math="\lim_{n \to \infty} P(Z_n \leq x) = \Phi(x) = \int_{-\infty}^x \frac{1}{\sqrt{2\pi}} e^{-t^2/2} dt" />
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規近似の威力</h2>

            <p className="leading-relaxed">
                CLT は、個別の事象がどのような分布に従っていても、それらが多数集まったときの結果を予測可能にします。
            </p>

            <ContentBox type="example" title="Example 9.1-1 (二項分布の正規近似)">
                <p>
                    公平なコインを <InlineMath math="100" /> 回投げるとき、表が出る回数 <InlineMath math="S_{100}" /> は二項分布 <InlineMath math="B(100, 0.5)" /> に従う。
                    このとき、期待値 <InlineMath math="\mu = 50" />、分散 <InlineMath math="\sigma^2 = 25" /> である。
                </p>
                <p className="mt-2">
                    表が出る回数が <InlineMath math="45" /> 回以上 <InlineMath math="55" /> 回以下である確率を CLT で近似すると：
                    <BlockMath math="P(45 \leq S_{100} \leq 55) = P\left( \frac{45-50}{\sqrt{25}} \leq Z_{100} \leq \frac{55-50}{\sqrt{25}} \right) \approx P(-1 \leq Z \leq 1)" />
                    標準正規分布の表より、この確率は約 <InlineMath math="0.683" /> と求められる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="なぜ「正規分布」なのか？">
                <p>
                    一様分布、指数分布、ベルヌーイ分布など、足し合わせの対象が何であっても、極限では同じベル型の正規分布が現れます。
                    この「普遍性（Universality）」こそが、自然界や社会科学のデータに正規分布が頻出する最大の理由です。
                    測定誤差、身長の分布、IQ のスコアなどが正規分布に近い形をとるのは、それらが無数の微小な要因の「和」として現れているからだと解釈できます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>中心極限定理は、独立な確率変数の和の分布が、<InlineMath math="n" /> を大きくすると正規分布に近づくことを主張する。</li>
                    <li>元の分布の形そのものには依存せず、平均と分散さえ決まれば極限の形が決まる。</li>
                    <li>この定理により、複雑な分布の計算を標準正規分布の表を用いた計算に置き換える（正規近似）ことが可能になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
