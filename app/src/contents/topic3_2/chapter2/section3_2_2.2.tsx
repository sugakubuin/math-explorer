import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LimitsAndContinuity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分の定義に進む前に、複素平面上での「極限」と「連続性」について明確にしておく必要があります。
                複素平面はトポロジー（位相）的には <InlineMath math="\mathbb{R}^2" /> と同等であるため、極限の定義も実解析の多変数関数のものと非常によく似ています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素数列の収束</h2>

            <p>
                数列の収束は、原点からの距離（絶対値）を用いて定義されます。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (複素数列の収束)">
                <p>
                    複素数列 <InlineMath math="\{z_n\}" /> が <InlineMath math="\alpha" /> に<strong>収束する</strong>とは、
                    <BlockMath math="\lim_{n \to \infty} |z_n - \alpha| = 0" />
                    が成り立つことをいう。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 2.2-1 (実部・虚部との関係)">
                <p>
                    <InlineMath math="z_n = x_n + i y_n, \alpha = a + bi" /> とするとき、次の条件は同値である：
                    <BlockMath math="z_n \to \alpha \quad \iff \quad x_n \to a \text{ かつ } y_n \to b" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    絶対値の不等式
                    <BlockMath math="\max(|x_n - a|, |y_n - b|) \le |z_n - \alpha| \le |x_n - a| + |y_n - b|" />
                    を考えることで、はさみうちの原理より明らかに従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素関数の連続性</h2>

            <p>
                関数の極限と連続性も、実数の場合と同様に <InlineMath math="\varepsilon \text{-} \delta" /> 論法を用いて定義されます。
            </p>

            <ContentBox type="definition" title="Definition 2.2-2 (連続性)">
                <p>
                    複素関数 <InlineMath math="f(z)" /> が <InlineMath math="z_0" /> で<strong>連続 (continuous)</strong> であるとは、
                    <BlockMath math="\lim_{z \to z_0} f(z) = f(z_0)" />
                    が成り立つことをいう。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 2.2-2 (実部・虚部との連続性)">
                <p>
                    <InlineMath math="f(z) = u(x, y) + i v(x, y)" /> が <InlineMath math="z_0 = x_0 + i y_0" /> で連続であるための必要十分条件は、実部 <InlineMath math="u" /> と虚部 <InlineMath math="v" /> が <InlineMath math="(x_0, y_0)" /> で（実関数として）連続であることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    点 <InlineMath math="z = x + iy" /> が <InlineMath math="z_0 = x_0 + iy_0" /> に近づくことは、実数平面上の点 <InlineMath math="(x, y)" /> が <InlineMath math="(x_0, y_0)" /> に近づくことと等価である。
                    このとき、等式
                    <BlockMath math="\begin{aligned} &f(z) - f(z_0) \\ &\quad = \{u(x, y) - u(x_0, y_0)\} + i\{v(x, y) - v(x_0, y_0)\} \end{aligned}" />
                    が成り立つ。
                </p>
                <p className="mt-2">
                    (<InlineMath math="\implies" />) <InlineMath math="f" /> が連続ならば、<InlineMath math="z \to z_0" /> のとき <InlineMath math="|f(z) - f(z_0)| \to 0" /> である。
                    不等式 <InlineMath math="|u - u_0| \le |f - f_0|" /> および <InlineMath math="|v - v_0| \le |f - f_0|" /> より、実部・虚部もそれぞれ収束し、連続性が従う。
                </p>
                <p className="mt-2">
                    (<InlineMath math="\impliedby" />) 実部・虚部がともに連続ならば、<InlineMath math="(x, y) \to (x_0, y_0)" /> のとき実部・虚部の差はともに <InlineMath math="0" /> に収束する。
                    三角不等式より <InlineMath math="|f - f_0| \le |u - u_0| + |v - v_0|" /> であるから、<InlineMath math="f" /> の連続性が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                複素関数における「 <InlineMath math="z \to z_0" /> 」という極限の操作において、<strong>あらゆる方向から近づいても同じ値に収束しなければならない</strong>という点は、複素解析の理論において非常に重要な役割を果たします。
            </p>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>極限</strong>：絶対値の意味での「距離」がゼロに近づくこと。</li>
                    <li><strong>実部・虚部への帰着</strong>：収束や連続性の判定は、実部と虚部のそれぞれの判定に分解できる。</li>
                    <li><strong>多方向極限</strong>：複素平面上での接近は平面的な拡がりを持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
