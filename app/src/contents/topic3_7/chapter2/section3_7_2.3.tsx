import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DiscreteRandomVariables() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率変数の中でも、値が飛び飛び（離散的）であるものは非常に扱いやすく、実社会のデータ（製品の不良数、着信数など）をモデル化する際に頻繁に登場します。
                本節では、<b>離散型確率変数</b>の定義と、その特徴を決定づける<b>確率質量関数</b>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">確率質量関数</h2>

            <p className="leading-relaxed">
                離散型確率変数の場合、各点における確率そのものを考えることができ、それを関数として表現したものを確率質量関数と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (離散型確率変数と確率質量関数)">
                <p>
                    確率変数 <InlineMath math="X" /> の値域（とりうる値の集合）が、有限集合または可算無限集合であるとき、<InlineMath math="X" /> を<b>離散型確率変数</b>（discrete random variable）と呼ぶ。
                    このとき、各 <InlineMath math="k" /> に対して
                    <BlockMath math="p(k) = P(X = k)" />
                    で定義される関数 <InlineMath math="p(k)" /> を、<InlineMath math="X" /> の<b>確率質量関数</b>（probability mass function, PMF）と呼ぶ。
                </p>
                <p>
                    確率質量関数は常に次の性質を満たす：
                    <BlockMath math="p(k) \geq 0, \quad \sum_{k} p(k) = 1" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                確率論で最も重要とされる代表的な離散分布をいくつか紹介します。
            </p>

            <ContentBox type="example" title="Example 2.3-1 (ベルヌーイ分布)">
                <p>
                    「成功」か「失敗」かのように 2 つの結果しかない試行をモデル化するのが、<b>ベルヌーイ分布</b>（Bernoulli distribution）である。
                    成功の確率を <InlineMath math="p \in [0, 1]" /> とし、成功時に <InlineMath math="X=1" />、失敗時に <InlineMath math="X=0" /> とすると、PMF は次で与えられる。
                    <BlockMath math="p(1) = p, \quad p(0) = 1 - p" />
                    これはコイン投げの最も単純な数学モデルである。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-2 (二項分布)">
                <p>
                    成功確率 <InlineMath math="p" /> のベルヌーイ試行を独立に <InlineMath math="n" /> 回繰り返したときの、「成功回数」が従うのが<b>二項分布</b>（binomial distribution）である。
                    <InlineMath math="X \sim B(n, p)" /> と表記し、PMF は次で与えられる。
                    <BlockMath math="P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k} \quad (k = 0, 1, \ldots, n)" />
                    この分布の期待値および分散（詳細は Chapter 3 で扱う）は次の通りである：
                    <BlockMath math="E[X] = np, \quad \mathrm{Var}(X) = np(1 - p)" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-3 (ポアソン分布)">
                <p>
                    単位時間あたりに平均 <InlineMath math="\lambda" /> 回起こる「まれな事象」が発生する回数が従うのが<b>ポアソン分布</b>（Poisson distribution）である。
                    PMF は次で与えられる。
                    <BlockMath math="P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!} \quad (k = 0, 1, 2, \ldots)" />
                    期待値と分散がいずれも <InlineMath math="\lambda" /> に一致するという、非常に特徴的な性質を持つ：
                    <BlockMath math="E[X] = \lambda, \quad \mathrm{Var}(X) = \lambda" />
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ポアソン近似（まれな事象の法則）">
                <p>
                    二項分布 <InlineMath math="B(n, p)" /> において、試行回数 <InlineMath math="n" /> が非常に大きく、成功確率 <InlineMath math="p" /> が非常に小さいとき、
                    その分布は平均 <InlineMath math="\lambda = np" /> のポアソン分布で近似できます。
                </p>
                <p>
                    この事実は、交通事故の発生数やコールセンターへの着信数など、膨大な母数（人口や顧客数）に対して個別の発生確率が極めて低い現象が、なぜポアソン分布で記述できるのかという理論的根拠を与えています。
                    厳密な極限制理としての議論は、Chapter 9 の中心極限定理に関連して学びます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                離散的な現象とは対照的に、測定される時間や長さのように、連続的な値をとる確率変数も数多く存在します。
                次節では、それらを扱うための「密度」の概念を導入します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>離散型確率変数は、その値域が高々可算（有限または可算無限）である変数を指す。</li>
                    <li>確率質量関数 (PMF) は、各点での確率 <InlineMath math="P(X=k)" /> を直接記述する。</li>
                    <li>二項分布は「独立な試行の繰り返し」を、ポアソン分布は「まれな事象の発生数」をモデル化する。</li>
                    <li>二項分布の極限としてポアソン分布が現れる（ポアソン近似）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
