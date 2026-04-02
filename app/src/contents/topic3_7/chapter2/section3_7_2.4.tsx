import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ContinuousRandomVariables() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                測定される時間、距離、温度のように、値が連続的に変化する対象を扱うのが<b>連続型確率変数</b>です。
                離散型とは異なり、ピンポイントである値を取る確率は常に 0 となります。
                そのため、確率を「質量」ではなく、積分によってのみ計算できる「密度」として扱います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">確率密度関数</h2>

            <p className="leading-relaxed">
                連続型確率変数の分布は、特定の関数を積分することで、その範囲に入る確率を求めることができます。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (連続型確率変数と確率密度関数)">
                <p>
                    確率変数 <InlineMath math="X" /> に対して、非負のルベーグ可積分関数 <InlineMath math="f : \mathbb{R} \to [0, \infty)" /> が存在して、
                    任意のボレル集合 <InlineMath math="A \in \mathcal{B}(\mathbb{R})" /> に対して
                    <BlockMath math="P(X \in A) = \int_A f(x) \, dx" />
                    と表されるとき、<InlineMath math="X" /> を<b>連続型確率変数</b>と呼び、
                    関数 <InlineMath math="f" /> を <InlineMath math="X" /> の<b>確率密度関数</b>（probability density function, PDF）と呼ぶ。
                </p>
                <p>
                    密度関数は常に次の正規化条件を満たす：
                    <BlockMath math="\int_{-\infty}^\infty f(x) \, dx = 1" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                代表的な連続型分布について、その密度関数の形状と特徴を確認しましょう。
            </p>

            <ContentBox type="example" title="Example 2.4-1 (一様分布)">
                <p>
                    区間 <InlineMath math="[a, b]" /> 内でどこの値も等しい確率で選ばれるような分布を、<b>一様分布</b>（uniform distribution）と呼ぶ。
                    PDF は次のように一定値となる。
                    <BlockMath math="f(x) = \begin{cases} \frac{1}{b - a} & (a \leq x \leq b) \\ 0 & (\text{otherwise}) \end{cases}" />
                    分布関数（CDF）は三角形の面積を蓄積した形となり、次のように直線的に増加する。
                    <BlockMath math="F(x) = \frac{x - a}{b - a} \quad (a \leq x \leq b)" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-2 (正規分布)">
                <p>
                    自然現象や測定誤差のモデルとして最も頻繁に登場するのが、<b>正規分布</b>（normal distribution, またはガウス分布）である。
                    平均 <InlineMath math="\mu" />、分散 <InlineMath math="\sigma^2" /> の正規分布 <InlineMath math="\mathcal{N}(\mu, \sigma^2)" /> の PDF は次の通りである。
                    <BlockMath math="f(x) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right)" />
                    この関数が全実数上で積分して 1 になることは、ガウス積分 <InlineMath math="\int_{-\infty}^\infty e^{-x^2/2} \, dx = \sqrt{2\pi}" /> の結果から確認できる。
                    Chapter 9 で学ぶように、多くの独立な誤差の和がこの分布に近づくという性質を持つ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-3 (指数分布)">
                <p>
                    「次に故障するまでの時間」などの待ち時間をモデル化するのが、<b>指数分布</b>（exponential distribution）である。
                    パラメータ <InlineMath math="\lambda > 0" /> の指数分布の PDF は次で与えられる。
                    <BlockMath math="f(x) = \begin{cases} \lambda e^{-\lambda x} & (x \geq 0) \\ 0 & (x < 0) \end{cases}" />
                    期待値は <InlineMath math="E[X] = 1/\lambda" /> である。
                    指数分布の最大の特徴は、<b>無記憶性</b>、すなわち
                    <BlockMath math="P(X > s + t \mid X > s) = P(X > t)" />
                    が成り立つことである。これは「これまで長く待ったことが、これからの待ち時間に影響しない」ことを意味する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ルベーグ積分との接続">
                <p>
                    確率密度関数を用いた確率は、ルベーグ積分（Topic 3-3 参照）を用いて定義されていることに注意してください。
                    なぜリーマン積分ではなくルベーグ積分を用いるのかというと、抽象的な測度論を用いることで、
                    離散型分布と連続型分布を一つの「期待値」という概念で統一的に扱えるようになるからです。
                </p>
                <p>
                    例えば、ある一点でのみ 1 という確率を持つ「ディラックのデルタ分布」のような、密度を持たない特異な分布であっても、
                    測度論的な枠組み（ルベーグ積分）を用いれば、通常の密度関数を持つ分布と同様の手続きで解析が可能になります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ここまでは一つの確率変数の性質を見てきましたが、実際の統計学では複数の変数の関係性が重要になります。
                次節では、複数の確率変数を組み合わせて扱う<b>多次元確率変数</b>について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>連続型確率変数は、特定の一点をとる確率が 0 であり、区間の確率を密度関数の積分で定義する。</li>
                    <li>確率密度関数 (PDF) は常に非負であり、全区間での積分値は 1 となる。</li>
                    <li>一様分布は均一な確率を、正規分布は平均周辺の頻度を、指数分布はイベントの発生間隔を記述する。</li>
                    <li>指数分布は、過去の経過が未来の確率に影響しない「無記憶性」を唯一備えた連続分布である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
