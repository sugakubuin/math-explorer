import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OperationsOnIndependentRandomVariables() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率変数が独立であるとき、それらの統計的な評価や和の分布の計算は非常にシンプルな形に集約されます。
                本節では、独立性が期待値や分散に与える数学的な恩恵と、和の確率密度関数を求めるための畳み込みの計算手法について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">期待値と分散の加法性</h2>

            <p className="leading-relaxed">
                独立性は、積の期待値を期待値の積に分解し、和の分散を分散の和に分解するという強力な性質をもたらします。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (独立変数の期待値の積)">
                <p>
                    確率変数 <InlineMath math="X, Y" /> が独立であり、それぞれ可積分であるならば、その積 <InlineMath math="XY" /> もまた可積分であり、次が成り立つ：
                    <BlockMath math="E[XY] = E[X] E[Y]" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    独立性により、結合分布 <InlineMath math="\mu_{X, Y}" /> は周辺分布 <InlineMath math="\mu_X, \mu_Y" /> の積測度となる。
                    フビニの定理を用いることで、積の積分は逐次積分に分解でき、次のように計算される：
                    <BlockMath math="\begin{aligned} E[XY] &= \iint_{\mathbb{R}^2} xy \mu_{X, Y}(dx, dy) \\ &= \int_{\mathbb{R}} x \mu_X(dx) \int_{\mathbb{R}} y \mu_Y(dy) = E[X]E[Y] \end{aligned}" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この性質を利用することで、多くの独立な変数の和の分散も、単純な和として求めることが可能になります。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-2 (独立変数の分散の加法性)">
                <p>
                    確率変数 <InlineMath math="X, Y" /> が独立であり、それぞれ 2 次モーメントが有限であるならば、次が成り立つ：
                    <BlockMath math="\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    分散の定義を展開すると、
                    <BlockMath math="\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y) + 2 \mathrm{Cov}(X, Y)" />
                    ここで共分散は <InlineMath math="\mathrm{Cov}(X, Y) = E[XY] - E[X] E[Y]" /> で定義される。
                    Theorem 4.3-1 より、独立ならば <InlineMath math="E[XY] = E[X] E[Y]" /> であるため、<InlineMath math="\mathrm{Cov}(X, Y) = 0" /> となり、加法性が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">畳み込み公式</h2>

            <p className="leading-relaxed">
                独立な確率変数の和の分布は、それぞれの密度関数の「畳み込み」によって得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-3 (和の分布：畳み込み公式)">
                <p>
                    確率変数 <InlineMath math="X, Y" /> が独立で、それぞれ密度関数 <InlineMath math="f_X, f_Y" /> を持つとする。
                    このとき、和 <InlineMath math="Z = X + Y" /> の密度関数 <InlineMath math="f_Z" /> は次で与えられる：
                    <BlockMath math="f_Z(z) = \int_{-\infty}^\infty f_X(z - y) f_Y(y) dy" />
                    これを <InlineMath math="f_X * f_Y" /> と書き、<b>畳み込み</b>（convolution）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-1 (正規分布の畳み込み)">
                <p>
                    独立な正規分布 <InlineMath math="X \sim \mathcal{N}(\mu_1, \sigma_1^2)" /> と <InlineMath math="Y \sim \mathcal{N}(\mu_2, \sigma_2^2)" /> の和 <InlineMath math="X + Y" /> を考える。
                    このモーメント母関数（MGF）は以下のようになる：
                    <BlockMath math="\begin{aligned} M_{X+Y}(t) &= E[e^{t(X+Y)}] = E[e^{tX} e^{tY}] \\ &= E[e^{tX}] E[e^{tY}] = M_X(t) M_Y(t) \end{aligned}" />
                    正規分布の MGF を代入すると、平均と分散がそのまま足し合わされた新しい正規分布の MGF が得られることから、
                    和 <InlineMath math="X+Y" /> もまた正規分布 <InlineMath math="\mathcal{N}(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)" /> に従うことが示される。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                独立性は分散の加法性を保証しますが、逆に共分散が 0 であるからといって独立であるとは限りません。
                次節では、この「無相関」と「独立」という 2 つの概念の重要な違いについて掘り下げます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>独立な確率変数の積の期待値は、期待値の積に分解されるため、多項式の期待値計算などが簡略化される。</li>
                    <li>独立な場合に限って分散の加法性が成立し、これは共分散が 0 になることに起因する。</li>
                    <li>独立和の密度関数は、各密度関数の畳み込み積分によって得られる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
