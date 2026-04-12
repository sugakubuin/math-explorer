import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LagrangeDualityRelation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までに、フェンシェル双対性が共役関数を用いて凸最適化問題の主問題と双対問題の間に強力な双対構造をもたらすことを見てきました。本節では、非線形計画法などで広く知られるラグランジュ乗数法に基づくラグランジュ双対性が、実はフェンシェル双対性の枠組みの中に特殊な場合として包摂されることを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラグランジュ双対問題の導出</h2>

            <p>
                まずは、等式制約と不等式制約を持つ一般的な最適化問題に対するラグランジュ関数と、それに基づくラグランジュ双対問題を定義します。
            </p>

            <ContentBox type="definition" title={<span>Definition 5.3-1 (ラグランジュ関数)</span>}>
                <p>
                    目的関数を <InlineMath math="f: \mathbb{R}^n \to \mathbb{R}" />、等式制約を <InlineMath math="h(x) = 0" /> (<InlineMath math="h: \mathbb{R}^n \to \mathbb{R}^m" />)、不等式制約を <InlineMath math="g(x) \leq 0" /> (<InlineMath math="g: \mathbb{R}^n \to \mathbb{R}^p" />) とします。このとき、<b>ラグランジュ関数（Lagrangian）</b> <InlineMath math="\mathcal{L}(x, \lambda, \mu)" /> は次のように定義されます。
                </p>
                <BlockMath math="\mathcal{L}(x, \lambda, \mu) = f(x) + \lambda^T h(x) + \mu^T g(x)" />
                <p>
                    ここで、<InlineMath math="\lambda \in \mathbb{R}^m" /> は等式制約に対するラグランジュ乗数、<InlineMath math="\mu \in \mathbb{R}^p" /> (<InlineMath math="\mu \geq 0" />) は不等式制約に対するラグランジュ乗数です。
                </p>
            </ContentBox>

            <p>
                ラグランジュ関数を用いると、ラグランジュ双対問題は <InlineMath math="\max_{\lambda, \mu \geq 0} \inf_x \mathcal{L}(x, \lambda, \mu)" /> として定式化されます。この双対問題が、フェンシェル双対問題から自然に導かれることを示します。
            </p>

            <ContentBox type="proposition" title="Proposition 5.3-1">
                <p>
                    ラグランジュ双対問題 <InlineMath math="\max_{\lambda, \mu \geq 0} \inf_x \mathcal{L}(x, \lambda, \mu)" /> は、制約条件を指示関数を用いて適切に表現することで、フェンシェル双対問題の特殊な場合として得られます。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    説明を簡単にするため、不等式制約 <InlineMath math="Ax \leq b" /> のみを持つ問題 <InlineMath math="\min_x f(x)" /> subject to <InlineMath math="Ax \leq b" /> を考えます。この制約は、非負直交象限の指示関数 <InlineMath math="\delta_{\mathbb{R}^p_+}" /> を用いて無制約問題に書き換えることができます。
                </p>
                <BlockMath math="\inf_x \{ f(x) + \delta_{\mathbb{R}^p_+}(b - Ax) \}" />
                <p>
                    これは、フェンシェル双対問題の主問題 <InlineMath math="\inf_x \{ f(x) + g(Ax) \}" /> において、<InlineMath math="g(y) = \delta_{\mathbb{R}^p_+}(b - y)" /> とおいた形に他なりません。ここで、<InlineMath math="g" /> の共役関数 <InlineMath math="g^*" /> を計算します。
                </p>
                <BlockMath math="g^*(z) = \sup_{y} \{ \langle z, y \rangle - \delta_{\mathbb{R}^p_+}(b - y) \}" />
                <p>
                    変数変換 <InlineMath math="u = b - y" /> (<InlineMath math="u \geq 0" />) を行うと、<InlineMath math="y = b - u" /> であり、
                </p>
                <BlockMath math="\begin{aligned} g^*(z) &= \sup_{u \geq 0} \{ \langle z, b - u \rangle \} \\ &= \langle z, b \rangle + \sup_{u \geq 0} \langle -z, u \rangle \end{aligned}" />
                <p>
                    右辺の第二項は、<InlineMath math="-z \leq 0" /> すなわち <InlineMath math="z \geq 0" /> のとき <InlineMath math="0" />、そうでないとき <InlineMath math="+\infty" /> となります。つまり、
                </p>
                <BlockMath math="g^*(z) = \begin{cases} \langle z, b \rangle & (z \geq 0) \\ +\infty & (\text{otherwise}) \end{cases}" />
                <p>
                    フェンシェル双対問題は <InlineMath math="\sup_{\mu} \{ -f^*(-A^T \mu) - g^*(\mu) \}" /> ですから、<InlineMath math="g^*(\mu)" /> の形より <InlineMath math="\mu \geq 0" /> の範囲に制限され、
                </p>
                <BlockMath math="\sup_{\mu \geq 0} \{ -f^*(-A^T \mu) - \langle \mu, b \rangle \}" />
                <p>
                    ここで、<InlineMath math="f^*" /> の定義を展開します。
                </p>
                <BlockMath math="\begin{aligned} &\sup_{\mu \geq 0} \{ -\sup_x \{ \langle -A^T \mu, x \rangle - f(x) \} - \langle \mu, b \rangle \} \\ &= \sup_{\mu \geq 0} \inf_x \{ f(x) + \langle \mu, Ax \rangle - \langle \mu, b \rangle \} \\ &= \sup_{\mu \geq 0} \inf_x \{ f(x) + \mu^T (Ax - b) \} \end{aligned}" />
                <p>
                    これはまさに、ラグランジュ関数 <InlineMath math="\mathcal{L}(x, \mu) = f(x) + \mu^T(Ax - b)" /> に対するラグランジュ双対問題に一致します。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この結果から、フェンシェル双対性は制約を関数の形で表現することで、ラグランジュ双対性をより一般的な「共役関数」という概念のもとで統一的に記述できることがわかります。具体例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 5.3-1">
                <p>
                    次の二次計画問題を考えます。
                </p>
                <BlockMath math="\min_x \frac{1}{2} x^T Q x + c^T x \quad \text{subject to} \quad Ax \leq b"
                />
                <p>
                    ここで、<InlineMath math="Q" /> は正定値対称行列とします。ラグランジュ関数は次のようになります。
                </p>
                <BlockMath math="\mathcal{L}(x, \mu) = \frac{1}{2} x^T Q x + c^T x + \mu^T (Ax - b) \quad (\mu \geq 0)"
                />
                <p>
                    <InlineMath math="\inf_x \mathcal{L}(x, \mu)" /> を求めるため、<InlineMath math="x" /> で微分して <InlineMath math="0" /> とおくと、
                </p>
                <BlockMath math="Qx + c + A^T \mu = 0 \implies x = -Q^{-1}(c + A^T \mu)"
                />
                <p>
                    これを代入することで、ラグランジュ双対関数が得られます。一方、<InlineMath math="f(x) = \frac{1}{2}x^T Q x + c^T x" /> の共役関数 <InlineMath math="f^*(y) = \frac{1}{2}(y-c)^T Q^{-1} (y-c)" /> を用いてフェンシェル双対問題 <InlineMath math="\sup_{\mu \geq 0} \{ -f^*(-A^T\mu) - b^T\mu \}" /> を計算しても、全く同じ二次形式の最大化問題が得られます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最適化理論（A-3）との棲み分け</h2>

            <p>
                このように、凸最適化問題における双対性は、アプローチの違いによって複数の顔を持ちます。ここで、他の関連分野との視点の違いを整理しておきましょう。
            </p>

            <ContentBox type="remark" title="本コースと最適化理論（A-3）の観点の違い">
                <p>
                    本コース「凸解析」では、共役関数やフェンシェル双対性の<b>理論的構造</b>を厳密に展開することに重点を置いています。関数と集合の双対性や、劣微分といった解析的な側面に焦点を当てています。
                </p>
                <p>
                    一方で、「最適化理論（A-3）」などでは、凸最適化をより<b>応用的観点</b>から捉え、アルゴリズムの設計と解析、実問題へのモデリングに重点を置いて扱います。
                </p>
                <p>
                    アプローチは異なりますが、両者は次節で学ぶ<b>KKT条件</b>などを通じて見事に合流し、理論と実践の両輪として機能します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ラグランジュ双対問題は、制約条件を指示関数を用いて定式化することで、フェンシェル双対問題の特殊な場合として導出できる。</li>
                    <li>フェンシェル双対性は、ラグランジュ乗数法をより広範な共役関数の枠組みで一般化したものである。</li>
                    <li>凸解析は理論的構造に重きを置き、アルゴリズムやモデリングに重きを置く最適化理論と相補的な関係にある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
