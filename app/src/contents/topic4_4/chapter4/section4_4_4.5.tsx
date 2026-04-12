import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InfimalConvolution() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、凸解析において関数の「和」の双対概念として現れる<b>インフィマル畳み込み（infimal convolution）</b>について解説します。インフィマル畳み込みは、関数をなめらかに近似する「モロー包絡」の基礎となるだけでなく、共役関数の性質と深く結びついています。前節で学んだフェンシェル-モロの定理を踏まえ、関数の和と畳み込みの美しい双対関係を見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">インフィマル畳み込みの定義</h2>

            <p>
                まずはインフィマル畳み込みの定義を与え、その基本的な性質である凸性の保存について証明します。
            </p>

            <ContentBox type="definition" title="Definition 4.5-1 (インフィマル畳み込み)">
                <p>
                    二つの拡張実数値関数 <InlineMath math="f, g: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> に対して、その<b>インフィマル畳み込み（infimal convolution）</b> <InlineMath math="f \Box g" /> を次のように定義する。
                </p>
                <BlockMath math="(f \Box g)(x) = \inf_{y \in \mathbb{R}^n} \{f(y) + g(x - y)\}" />
            </ContentBox>

            <p>
                インフィマル畳み込みは、通常の関数の畳み込み積分における積分を <InlineMath math="\inf" /> に、積を和に置き換えた形をしています。重要な性質として、凸関数のインフィマル畳み込みは再び凸関数となります。
            </p>

            <ContentBox type="proposition" title="Proposition 4.5-1">
                <p>
                    <InlineMath math="f, g" /> が凸関数ならば、<InlineMath math="f \Box g" /> も凸関数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="x_1, x_2 \in \mathbb{R}^n" /> と <InlineMath math="\lambda \in (0,1)" /> を任意にとる。<InlineMath math="(f \Box g)(x_1) = +\infty" /> または <InlineMath math="(f \Box g)(x_2) = +\infty" /> の場合は、凸関数の不等式は自明に成り立つ。したがって、両者が有限値（または <InlineMath math="-\infty" />）をもつとする。<InlineMath math="\epsilon > 0" /> を任意にとる。<InlineMath math="\inf" /> の定義より、ある <InlineMath math="y_1, y_2 \in \mathbb{R}^n" /> が存在して以下が成り立つ。
                </p>
                <BlockMath math="\begin{aligned} f(y_1) + g(x_1 - y_1) &< (f \Box g)(x_1) + \epsilon \\ f(y_2) + g(x_2 - y_2) &< (f \Box g)(x_2) + \epsilon \end{aligned}" />
                <p>
                    <InlineMath math="x_\lambda = \lambda x_1 + (1-\lambda)x_2" />、<InlineMath math="y_\lambda = \lambda y_1 + (1-\lambda)y_2" /> とおく。<InlineMath math="f, g" /> の凸性を用いると、
                </p>
                <BlockMath math="\begin{aligned} (f \Box g)(x_\lambda) &= \inf_y \{f(y) + g(x_\lambda - y)\} \\ &\leq f(y_\lambda) + g(x_\lambda - y_\lambda) \\ &= f(\lambda y_1 + (1-\lambda)y_2) + g(\lambda(x_1 - y_1) + (1-\lambda)(x_2 - y_2)) \\ &\leq \lambda f(y_1) + (1-\lambda)f(y_2) + \lambda g(x_1 - y_1) + (1-\lambda)g(x_2 - y_2) \\ &= \lambda(f(y_1) + g(x_1 - y_1)) + (1-\lambda)(f(y_2) + g(x_2 - y_2)) \\ &< \lambda((f \Box g)(x_1) + \epsilon) + (1-\lambda)((f \Box g)(x_2) + \epsilon) \\ &= \lambda(f \Box g)(x_1) + (1-\lambda)(f \Box g)(x_2) + \epsilon \end{aligned}" />
                <p>
                    <InlineMath math="\epsilon > 0" /> は任意であったから、
                </p>
                <BlockMath math="(f \Box g)(x_\lambda) \leq \lambda(f \Box g)(x_1) + (1-\lambda)(f \Box g)(x_2)" />
                <p>
                    が従い、<InlineMath math="f \Box g" /> は凸関数である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体的な関数を用いて、インフィマル畳み込みの計算例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 4.5-1">
                <p>
                    <InlineMath math="f(x) = \frac{1}{2}x^2" />、<InlineMath math="g(x) = |x|" /> （<InlineMath math="x \in \mathbb{R}" />）のインフィマル畳み込みを計算する。
                </p>
                <BlockMath math="(f \Box g)(x) = \inf_y \left\{ \frac{1}{2}y^2 + |x - y| \right\}" />
                <p>
                    <InlineMath math="h(y) = \frac{1}{2}y^2 + |x - y|" /> とおく。これを最小化する <InlineMath math="y" /> を求める。絶対値があるため、<InlineMath math="y \leq x" /> と <InlineMath math="y \geq x" /> で場合分けする。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="y \leq x" /> のとき：<InlineMath math="h(y) = \frac{1}{2}y^2 + x - y" />。微分して <InlineMath math="h'(y) = y - 1 = 0" /> より <InlineMath math="y = 1" />。これが範囲に入るには <InlineMath math="1 \leq x" />。</li>
                    <li><InlineMath math="y \geq x" /> のとき：<InlineMath math="h(y) = \frac{1}{2}y^2 - x + y" />。微分して <InlineMath math="h'(y) = y + 1 = 0" /> より <InlineMath math="y = -1" />。これが範囲に入るには <InlineMath math="-1 \geq x" />。</li>
                </ul>
                <p>
                    したがって、<InlineMath math="|x| \leq 1" /> のときは、境界の <InlineMath math="y = x" /> で最小値をとり、<InlineMath math="h(x) = \frac{1}{2}x^2" /> となる。
                    以上より、
                </p>
                <BlockMath math="(f \Box g)(x) = \begin{cases} \frac{1}{2}x^2 & (|x| \leq 1) \\ |x| - \frac{1}{2} & (|x| > 1) \end{cases}" />
                <p>
                    これは後述するモロー包絡の一種（フーバー関数）と一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">共役関数との双対関係</h2>

            <p>
                インフィマル畳み込みが凸解析において重要である最大の理由は、共役関数との間に美しい双対関係が成り立つからです。すなわち、「畳み込みの共役は和」であり、適切な条件下で「和の共役は畳み込み」となります。
            </p>

            <ContentBox type="theorem" title="Theorem 4.5-1">
                <p>
                    <InlineMath math="f, g: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> が真凸関数ならば、
                </p>
                <BlockMath math="(f \Box g)^* = f^* + g^*"
                />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    共役関数の定義より、任意の <InlineMath math="p \in \mathbb{R}^n" /> に対して、
                </p>
                <BlockMath math="\begin{aligned} (f \Box g)^*(p) &= \sup_{x} \{ \langle p, x \rangle - (f \Box g)(x) \} \\ &= \sup_{x} \left\{ \langle p, x \rangle - \inf_{y} \{ f(y) + g(x - y) \} \right\} \\ &= \sup_{x} \sup_{y} \{ \langle p, x \rangle - f(y) - g(x - y) \} \end{aligned}" />
                <p>
                    ここで <InlineMath math="z = x - y" /> と変数変換すると、<InlineMath math="x = y + z" /> であり、<InlineMath math="x, y" /> の動く範囲全体は <InlineMath math="y, z" /> の動く範囲全体と一致する。
                </p>
                <BlockMath math="\begin{aligned} (f \Box g)^*(p) &= \sup_{y} \sup_{z} \{ \langle p, y + z \rangle - f(y) - g(z) \} \\ &= \sup_{y} \{ \langle p, y \rangle - f(y) \} + \sup_{z} \{ \langle p, z \rangle - g(z) \} \\ &= f^*(p) + g^*(p) \end{aligned}" />
                <p>
                    これにより示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                Theorem 4.4-1 のフェンシェル-モロの定理を用いると、この双対的な主張（和の共役が畳み込みになること）も導くことができます。
            </p>

            <ContentBox type="proposition" title="Corollary 4.5-1">
                <p>
                    <InlineMath math="f, g" /> が閉真凸関数で、適切な制約想定（例えば <InlineMath math="\mathrm{ri}(\mathrm{dom}(f)) \cap \mathrm{ri}(\mathrm{dom}(g)) \neq \emptyset" /> など、和の共役が閉じる条件）が満たされるとき、
                </p>
                <BlockMath math="(f + g)^* = f^* \Box g^*" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 4.5-1 より、<InlineMath math="(f^* \Box g^*)^* = f^{**} + g^{**}" /> である。フェンシェル-モロの定理（Theorem 4.4-1）より、<InlineMath math="f, g" /> は閉真凸関数なので <InlineMath math="f^{**} = f, g^{**} = g" /> となる。よって、
                </p>
                <BlockMath math="(f^* \Box g^*)^* = f + g" />
                <p>
                    両辺の共役をとると、適切な制約想定の下で <InlineMath math="f^* \Box g^*" /> が閉凸関数となるため、再びフェンシェル-モロの定理が適用でき、
                </p>
                <BlockMath math="f^* \Box g^* = (f + g)^*" />
                <p>
                    を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                インフィマル畳み込みの重要な応用の一つが、非平滑な凸関数をなめらかに近似する「モロー包絡」です。二次関数との畳み込みを考えることで得られます。
            </p>

            <ContentBox type="example" title="Example 4.5-2">
                <p>
                    関数 <InlineMath math="f" /> のパラメータ <InlineMath math="\lambda > 0" /> に対する<b>モロー包絡（Moreau envelope）</b> <InlineMath math="M_{\lambda f}" /> は次のように定義される。
                </p>
                <BlockMath math="\begin{aligned} M_{\lambda f}(x) &= \inf_y \left\{ f(y) + \frac{1}{2\lambda}\|x - y\|^2 \right\} \\ &= \left( f \Box \frac{1}{2\lambda}\|\cdot\|^2 \right)(x) \end{aligned}" />
                <p>
                    <InlineMath math="f(x) = |x|" />、<InlineMath math="\lambda = 1" /> のとき、Example 4.5-1 で計算した通り、
                </p>
                <BlockMath math="M_f(x) = \begin{cases} \frac{1}{2}x^2 & (|x| \leq 1) \\ |x| - \frac{1}{2} & (|x| > 1) \end{cases}" />
                <p>
                    となる。<InlineMath math="f(x) = |x|" /> は <InlineMath math="x = 0" /> で微分不可能であったが、そのモロー包絡 <InlineMath math="M_f(x)" /> は至る所微分可能（導関数は連続）になっている。このように、インフィマル畳み込みは関数の平滑化作用をもつ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="モロー包絡と近接作用素の関係">
                <p>
                    Example 4.5-2 で見たモロー包絡は、単なる平滑化にとどまらず、第7章で詳しく扱う<b>近接作用素（proximity operator）</b>の理論的基盤となります。モロー包絡における <InlineMath math="\inf" /> を達成する <InlineMath math="y" /> の値そのものが、<InlineMath math="\mathrm{prox}_{\lambda f}(x)" /> と定義されます。非平滑な最適化問題を解く際に、目的関数をモロー包絡で近似して勾配法を適用するアプローチが広く用いられており、インフィマル畳み込みの概念は現代の最適化アルゴリズムにおいて不可欠な役割を果たしています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>インフィマル畳み込み <InlineMath math="(f \Box g)(x) = \inf_y \{f(y) + g(x - y)\}" /> は凸関数の凸性を保存する。</li>
                    <li>畳み込みの共役は和になる：<InlineMath math="(f \Box g)^* = f^* + g^*" />。</li>
                    <li>適切な制約想定の下で、和の共役は畳み込みになる：<InlineMath math="(f + g)^* = f^* \Box g^*" />。</li>
                    <li>二次関数とのインフィマル畳み込みはモロー包絡と呼ばれ、非平滑関数の平滑化に用いられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
