import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function KKTAndComplementarySlackness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、最適化問題における中心的な定理であるKKT（Karush-Kuhn-Tucker）条件について学びます。これは微分可能な場合のラグランジュ乗数法を凸解析の観点から一般化し、等式制約および不等式制約を持つ最適化問題の最適性条件を定式化したものです。前節までに構築したフェンシェル双対性や強双対定理が、どのようにして具体的な最適性条件を導くのかを確認していきましょう。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">KKT条件の導出</h2>

            <p>凸最適化問題において、スレーターの条件などの適切な制約想定が成り立つとき、主問題と双対問題の間に強双対性が成立します。この強双対性を背景として、最適解が満たすべき必要十分条件を劣微分やラグランジュ乗数を用いて記述したものがKKT条件です。</p>

            <ContentBox type="theorem" title={<span>Theorem 5.4-1 (KKT条件)</span>}>
                <p>凸最適化問題：</p>
                <BlockMath math="\min f(x) \quad \text{subject to} \quad \begin{cases} g_i(x) \leq 0 \ (i=1,\dots,m), \\ h_j(x) = 0 \ (j=1,\dots,p) \end{cases}" />
                <p>において、<InlineMath math="f, g_i" /> が凸関数、<InlineMath math="h_j" /> がアフィン関数であるとする。スレーターの条件（適当な内点が存在すること）の下で、<InlineMath math="x^*" /> が最適解であるための必要十分条件は、以下の条件を満たす乗数 <InlineMath math="\mu^* \in \mathbb{R}^m" /> および <InlineMath math="\lambda^* \in \mathbb{R}^p" /> が存在することである。</p>
                <ul>
                    <li><InlineMath math="\mu_i^* \geq 0 \quad (i=1,\dots,m)" /></li>
                    <li><InlineMath math="\mu_i^* g_i(x^*) = 0 \quad (i=1,\dots,m)" />（相補スラック性）</li>
                    <li><InlineMath math="0 \in \partial f(x^*) + \sum_{i=1}^m \mu_i^* \partial g_i(x^*) + \sum_{j=1}^p \lambda_j^* \nabla h_j(x^*)" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>ラグランジュ関数を <InlineMath math="L(x, \mu, \lambda) = f(x) + \sum_{i=1}^m \mu_i g_i(x) + \sum_{j=1}^p \lambda_j h_j(x)" /> と定義する。強双対定理より、スレーターの条件が満たされているとき、主問題の最適解 <InlineMath math="x^*" /> に対して双対問題の最適解 <InlineMath math="(\mu^*, \lambda^*)" /> が存在し、双対ギャップは零となる。これは <InlineMath math="(x^*, \mu^*, \lambda^*)" /> が <InlineMath math="L" /> の鞍点であることを意味し、以下の不等式がすべての <InlineMath math="x, \mu \geq 0, \lambda" /> に対して成り立つ。</p>
                <BlockMath math="L(x^*, \mu, \lambda) \leq L(x^*, \mu^*, \lambda^*) \leq L(x, \mu^*, \lambda^*)" />
                <p>まず、第一の不等式 <InlineMath math="L(x^*, \mu, \lambda) \leq L(x^*, \mu^*, \lambda^*)" /> について考える。<InlineMath math="x^*" /> が実行可能であるため、<InlineMath math="g_i(x^*) \leq 0" /> および <InlineMath math="h_j(x^*) = 0" /> が成り立つ。したがって、任意の <InlineMath math="\mu \geq 0" /> について <InlineMath math="\sum_{i=1}^m \mu_i g_i(x^*) \leq 0" /> である。鞍点条件を満たすためには、<InlineMath math="\sum_{i=1}^m \mu_i^* g_i(x^*) = 0" /> でなければならない。各項は非正であるため、すべての <InlineMath math="i" /> について <InlineMath math="\mu_i^* g_i(x^*) = 0" /> を得る。これが相補スラック性である。</p>
                <p>次に、第二の不等式 <InlineMath math="L(x^*, \mu^*, \lambda^*) \leq L(x, \mu^*, \lambda^*)" /> について考える。これは、関数 <InlineMath math="x \mapsto L(x, \mu^*, \lambda^*)" /> が <InlineMath math="x = x^*" /> で最小値をとることを意味する。フェルマの規則（Theorem 3.5-1）および劣微分の和の公式を適用すると、</p>
                <BlockMath math="\begin{aligned} 0 &\in \partial_x L(x^*, \mu^*, \lambda^*) \\ &= \partial f(x^*) + \sum_{i=1}^m \mu_i^* \partial g_i(x^*) + \sum_{j=1}^p \lambda_j^* \nabla h_j(x^*) \end{aligned}" />
                <p>が従う。逆に、これらの一階条件と相補スラック性が満たされれば、<InlineMath math="(x^*, \mu^*, \lambda^*)" /> が鞍点となり、<InlineMath math="x^*" /> は主問題の最適解であることが保証される。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>抽象的な条件に見えるかもしれませんが、具体的に関数の勾配を計算することで、最適解の満たすべき方程式が得られます。以下の例で、KKT条件を用いて最適解を導出する過程を見てみましょう。</p>

            <ContentBox type="example" title="Example 5.4-1">
                <p>最適化問題：</p>
                <BlockMath math="\min x^2 + y^2 \quad \text{subject to} \quad x + y \geq 1"
                />
                <p>について考える。制約を <InlineMath math="g(x,y) = 1 - (x+y) \leq 0" /> とおく。<InlineMath math="f(x,y) = x^2 + y^2" /> は微分可能であるため、劣微分は勾配と一致し、<InlineMath math="\nabla f = (2x, 2y)" />、<InlineMath math="\nabla g = (-1, -1)" /> となる。KKT条件は以下のようになる。</p>
                <ul>
                    <li><InlineMath math="2x - \mu = 0" /></li>
                    <li><InlineMath math="2y - \mu = 0" /></li>
                    <li><InlineMath math="\mu(1 - x - y) = 0" /></li>
                    <li><InlineMath math="\mu \geq 0" /></li>
                </ul>
                <p>上2つの式より <InlineMath math="x = y = \mu/2" /> である。もし <InlineMath math="\mu = 0" /> とすると <InlineMath math="x = y = 0" /> となるが、これは制約 <InlineMath math="x + y \geq 1" /> を満たさない。したがって <InlineMath math="\mu > 0" /> であり、相補スラック性より <InlineMath math="1 - x - y = 0" /> が成り立つ。<InlineMath math="x = y" /> を代入して <InlineMath math="2x = 1" />、すなわち <InlineMath math="x = y = 1/2" /> を得る。このとき <InlineMath math="\mu = 1 > 0" /> も満たされ、<InlineMath math="(1/2, 1/2)" /> が最適解であることが導出できる。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">相補スラック性の意味</h2>

            <p>KKT条件のなかでも「相補スラック性（Complementary Slackness）」は、最適化問題における制約の有効性を判定する上で非常に重要な役割を果たします。この条件の幾何学的な意味と解釈を整理します。</p>

            <ContentBox type="proposition" title="Proposition 5.4-1 (相補スラック性)">
                <p>相補スラック性 <InlineMath math="\mu_i g_i(x^*) = 0" /> は、制約 <InlineMath math="g_i(x) \leq 0" /> が「有効（active）」でなければ、対応する乗数 <InlineMath math="\mu_i" /> は零であることを意味する。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>KKT条件の一部である <InlineMath math="\mu_i \geq 0" /> および <InlineMath math="g_i(x^*) \leq 0" /> を前提とする。<InlineMath math="\mu_i g_i(x^*) = 0" /> という等式は、以下の2つのケースのいずれかが成り立つことを示している。</p>
                <ol>
                    <li><InlineMath math="g_i(x^*) < 0" />（制約が非有効：境界にない内点の場合）のとき、等式を満たすためには <InlineMath math="\mu_i = 0" /> でなければならない。</li>
                    <li><InlineMath math="\mu_i > 0" /> のとき、等式を満たすためには <InlineMath math="g_i(x^*) = 0" />（制約が有効：境界上にある場合）でなければならない。</li>
                </ol>
                <p>鞍点条件の観点からは、ラグランジュ関数 <InlineMath math="L(x^*, \mu, \lambda)" /> を <InlineMath math="\mu_i \geq 0" /> について最大化する際、もし <InlineMath math="g_i(x^*) < 0" /> であれば、<InlineMath math="\mu_i g_i(x^*)" /> は <InlineMath math="\mu_i" /> が大きくなるほど小さくなるため、最大値は <InlineMath math="\mu_i = 0" /> のときに達成される。したがって、制約が有効でない部分では、目的関数に対するその制約の影響（ペナルティ）は無効化されることがわかる。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>この性質を利用すると、考え得る最適解の候補が、どの制約の境界上に位置するかによって場合分けを行うことができます。</p>

            <ContentBox type="example" title="Example 5.4-2">
                <p>最適化問題：</p>
                <BlockMath math="\min (x-2)^2 \quad \text{subject to} \quad -x \leq 0, \ x - 3 \leq 0"
                />
                <p>を解析する。ラグランジュ関数は <InlineMath math="L(x, \mu_1, \mu_2) = (x-2)^2 + \mu_1(-x) + \mu_2(x-3)" /> である。<InlineMath math="x = 2" /> のとき、制約は <InlineMath math="-2 \leq 0" /> および <InlineMath math="-1 \leq 0" /> であり、いずれも厳密な不等号で成立している（非有効制約）。したがって、相補スラック性より <InlineMath math="\mu_1 = 0" /> および <InlineMath math="\mu_2 = 0" /> が要請される。このとき、一階の条件 <InlineMath math="2(x-2) - \mu_1 + \mu_2 = 0" /> に <InlineMath math="\mu_1=\mu_2=0" /> と <InlineMath math="x=2" /> を代入すると <InlineMath math="0 = 0" /> となり、KKT条件を完全に満たす。これにより <InlineMath math="x^* = 2" /> が最適解であることが確認できる。</p>
                <p>一方、仮に <InlineMath math="x = 0" /> を最適解の候補としてみる。このとき、<InlineMath math="-x = 0" />（有効制約）であるから <InlineMath math="\mu_1 \geq 0" /> は任意だが、<InlineMath math="x-3 = -3 < 0" />（非有効）なので <InlineMath math="\mu_2 = 0" /> となる。一階の条件は <InlineMath math="2(0-2) - \mu_1 + 0 = 0 \implies \mu_1 = -4" /> となるが、これは乗数の非負条件 <InlineMath math="\mu_1 \geq 0" /> に反する。よって <InlineMath math="x = 0" /> はKKT条件を満たさず、最適解ではないことがわかる。</p>
            </ContentBox>

            <ContentBox type="remark" title="ラグランジュ乗数法の一般化と最適化理論との接点">
                <p>KKT条件は、微分積分学で学ぶ等式制約付き問題の「ラグランジュの未定乗数法」を、不等式制約および微分不可能な凸関数（劣微分の利用）を含む形へと見事に一般化しています。最適化理論の文脈において、KKT条件はアルゴリズムの停止条件（収束判定）や、サポートベクターマシン（SVM）などの機械学習モデルの導出に直接利用されます。凸問題においてはKKT条件は最適性の十分条件ともなるため、これを見つけることがそのまま問題の解決に直結します。</p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>KKT条件は、強双対定理に基づく鞍点条件から導かれる最適性の一階条件である。</li>
                    <li>スレーターの条件のもとで、凸最適化問題の最適解とKKT条件を満たす点の存在は同値である。</li>
                    <li>相補スラック性 <InlineMath math="\mu_i g_i(x^*) = 0" /> は、不等式制約が等号で満たされない（境界上にない）とき、その制約に対応する双対変数が零になることを意味する。</li>
                    <li>劣微分を用いることで、微分不可能な関数を含む最適化問題に対してもKKT条件を適用できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
