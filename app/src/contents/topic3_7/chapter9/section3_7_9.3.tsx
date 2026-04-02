import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NormalApproximationApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                中心極限定理の最大の価値は、実世界の多様な不確実性を「正規分布」という一つの等差しで評価できる点にあります。
                本節では、統計学や実務における正規近似の具体的な手法と、その拡張について見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実用的な正規近似</h2>

            <p className="leading-relaxed">
                確率収束の速度を考慮すると、サンプルサイズ <InlineMath math="n" /> が十分に大きい場合、標本平均は近似的に正規分布に従うとみなせます。
            </p>

            <ContentBox type="example" title="Example 9.3-1 (世論調査と信頼区間)">
                <p>
                    住民 <InlineMath math="n=1,000" /> 人を対象に、ある政策への賛否を調査するとする。賛成率の真値を <InlineMath math="p" />、標本比率を <InlineMath math="\hat{p}" /> とする。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>各回答 <InlineMath math="X_i" /> はベルヌーイ分布 <InlineMath math="B(1, p)" /> に従う（期待値 <InlineMath math="p" />、分散 <InlineMath math="p(1-p)" />）。</li>
                    <li>CLT より、<InlineMath math="\hat{p} = \frac{1}{n}\sum X_i" /> は近似的に <InlineMath math="\mathcal{N}(p, \frac{p(1-p)}{n})" /> に従う。</li>
                    <li>
                        このとき、誤差限界（95% 信頼区間）は <InlineMath math="\hat{p} \pm 1.96 \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}" /> で計算できる。
                        （<InlineMath math="n=1000, \hat{p}=0.5" /> の場合、誤差は約 <InlineMath math="\pm 3.1 \%" /> となる）
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="正規近似が有効な条件">
                <p>
                    一般に、<InlineMath math="n \geq 30" /> 程度あれば近似が機能し始めると言われますが、元の分布が極端に歪んでいる場合や、二項分布で <InlineMath math="p" /> が <InlineMath math="0" /> または <InlineMath math="1" /> に極めて近い場合は、より大きな <InlineMath math="n" /> が必要です。
                    二項分布の近似では、<InlineMath math="np \geq 5" /> および <InlineMath math="n(1-p) \geq 5" /> が一つの目安とされます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多次元への拡張</h2>

            <p className="leading-relaxed">
                中心極限定理は 1 次元のみならず、多次元の確率変数列（確率ベクトル）に対しても成り立ちます。
                これを証明する鍵となるのが、以下の補題です。
            </p>

            <ContentBox type="lemma" title="Lemma 9.3-1 (クラメール・ウォルドのデバイス)">
                <p>
                    <InlineMath math="d" /> 次元の確率ベクトルの列 <InlineMath math="\{\boldsymbol{X}_n\}" /> が <InlineMath math="\boldsymbol{X}" /> に分布収束するための必要十分条件は、
                    任意のベクトル <InlineMath math="\boldsymbol{a} \in \mathbb{R}^d" /> に対して、
                    <BlockMath math="\boldsymbol{a}^T \boldsymbol{X}_n \xrightarrow{d} \boldsymbol{a}^T \boldsymbol{X} \quad (1 \text{ 次元の分布収束})" />
                    が成り立つことである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    特性関数の一意性と連続性定理を用いる。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <b>必要性 (<InlineMath math="\implies" />)</b>：<InlineMath math="\boldsymbol{X}_n \xrightarrow{d} \boldsymbol{X}" /> ならば、任意の連続有界関数 <InlineMath math="f" /> に対して <InlineMath math="E[f(\boldsymbol{X}_n)] \to E[f(\boldsymbol{X})]" /> である。
                        <InlineMath math="g(\boldsymbol{x}) = \exp(i\boldsymbol{a}^T\boldsymbol{x})" /> は連続有界なので、特性関数 <InlineMath math="\varphi_{\boldsymbol{X}_n}(\boldsymbol{a}) \to \varphi_{\boldsymbol{X}}(\boldsymbol{a})" /> となり、各成分方向の分布収束が従う。
                    </li>
                    <li>
                        <b>十分性 (<InlineMath math="\impliedby" />)</b>：任意の <InlineMath math="\boldsymbol{a} \in \mathbb{R}^d" /> に対して <InlineMath math="\boldsymbol{a}^T \boldsymbol{X}_n \xrightarrow{d} \boldsymbol{a}^T \boldsymbol{X}" /> と仮定する。
                        スカラーの特性関数の定義より、任意の <InlineMath math="t \in \mathbb{R}" /> に対して
                        <BlockMath math="E[\exp(it(\boldsymbol{a}^T \boldsymbol{X}_n))] \to E[\exp(it(\boldsymbol{a}^T \boldsymbol{X}))]" />
                        が成り立つ。ここで <InlineMath math="t=1" /> とおくと、多次元特性関数について
                        <BlockMath math="\varphi_{\boldsymbol{X}_n}(\boldsymbol{a}) \to \varphi_{\boldsymbol{X}}(\boldsymbol{a})" />
                        が任意の <InlineMath math="\boldsymbol{a}" /> で成り立つことがわかる。
                    </li>
                    <li>
                        多次元のレビーの連続性定理（§7.4 の多次元版）により、特性関数の各点収束から多次元の分布収束が導かれる。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 9.3-1 (多次元中心極限定理)">
                <p>
                    独立同分布な確率ベクトル系列 <InlineMath math="\{\boldsymbol{X}_n\}" />（<InlineMath math="\boldsymbol{X}_i \in \mathbb{R}^d" />）が、
                    平均ベクトル <InlineMath math="\boldsymbol{\mu}" />、共分散行列 <InlineMath math="\Sigma" />（正定値）を持つとする。このとき、
                    <BlockMath math="\sqrt{n}(\bar{\boldsymbol{X}}_n - \boldsymbol{\mu}) \xrightarrow{d} \mathcal{N}(\boldsymbol{0}, \Sigma)" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    先述の Lemma 9.3-1（クラメール・ウォルドのデバイス）を用いることで、多次元の収束を 1 次元の収束に帰着させる。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        任意のベクトル <InlineMath math="\boldsymbol{v} \in \mathbb{R}^d" /> に対し、スカラーの確率変数列 <InlineMath math="Y_i = \boldsymbol{v}^T \boldsymbol{X}_i" /> を考える。
                    </li>
                    <li>
                        このとき <InlineMath math="Y_i" /> は i.i.d. であり、
                        期待値 <InlineMath math="E[Y_1] = \boldsymbol{v}^T \boldsymbol{\mu}" />、分散 <InlineMath math="\text{Var}(Y_1) = \boldsymbol{v}^T \Sigma \boldsymbol{v}" /> を持つ。
                    </li>
                    <li>
                        1 次元の中心極限定理（Theorem 9.1-1）を <InlineMath math="Y_i" /> に適用すると、
                        <BlockMath math="\sqrt{n}(\bar{Y}_n - \boldsymbol{v}^T \boldsymbol{\mu}) \xrightarrow{d} \mathcal{N}(0, \boldsymbol{v}^T \Sigma \boldsymbol{v})" />
                        が成り立つ。
                    </li>
                    <li>
                        この極限分布は <InlineMath math="\mathcal{N}(\boldsymbol{0}, \Sigma)" /> を <InlineMath math="\boldsymbol{v}" /> 方向に射影したものに一致するため、Lemma 9.3-1 より主張が示された。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="解説：クラメール・ウォルドのデバイス">
                <p>
                    多次元の分布収束 <InlineMath math="\boldsymbol{Z}_n \xrightarrow{d} \boldsymbol{Z}" /> を直接証明するには、多次元の累積分布関数や特性関数を扱う必要があり、計算が非常に煩雑になります。
                    しかし、このデバイスは<b>「任意の方向から眺めた影（射影）が収束するなら、全体もその分布に収束する」</b>という強力な事実を保証します。
                </p>
                <p className="mt-2">
                    数学的には、多次元特性関数の定義
                    <InlineMath math="\varphi_{\boldsymbol{Z}_n}(\boldsymbol{t}) = E[e^{i\boldsymbol{t}^T \boldsymbol{Z}_n}]" />
                    において、<InlineMath math="\boldsymbol{t}" /> を固定してスカラーの収束とみなすことに相当します。
                    これにより、多次元の複雑な問題を使い慣れた 1 次元の道具箱で解けるようになるのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>中心極限定理は、標本サイズが大きい場合に「標本誤差」を正規分布で評価するための根拠となる。</li>
                    <li>世論調査の信頼区間などは、この定理に基づく正規近似の直接的な応用である。</li>
                    <li>多次元変数に対しても同様の収束が成り立ち、多変量データの解析における基礎となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
