import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ComplexIntegralDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、複素関数論の核心的な概念の一つである複素積分を定義します。
                複素積分は実関数の線積分を複素数体へと拡張したものであり、その性質を深く理解することは、後のコーシーの積分定理などを学ぶ上で不可欠な基礎となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素積分の定義</h2>

            <p>
                複素積分の定義は、複素平面上の曲線に沿った線積分として与えられます。
                滑らかな曲線に沿って関数を足し合わせていくイメージを持つことが重要です。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (複素積分)">
                <p>
                    複素平面上の滑らかな曲線 <InlineMath math="\gamma: [a, b] \to \mathbb{C}" /> に沿った複素関数 <InlineMath math="f(z)" /> の積分を、次のように定義する。
                </p>
                <BlockMath math="\int_\gamma f(z) \, dz = \int_a^b f(\gamma(t)) \gamma'(t) \, dt" />
            </ContentBox>

            <p>
                この定義は、実部と虚部に分解することで、ベクトル解析で学んだ線積分と本質的に同じ構造を持っていることがわかります。
            </p>

            <ContentBox type="remark" title="実部・虚部への分解">
                <p>
                    <InlineMath math="f(z) = u(x, y) + i v(x, y)" /> および <InlineMath math="dz = dx + i dy" /> と置くと、複素積分は以下のように実積分に帰着できる。
                </p>
                <BlockMath math="\int_\gamma f(z) \, dz = \int_\gamma (u \, dx - v \, dy) + i \int_\gamma (v \, dx + u \, dy)" />
                <p>
                    この形式は、物理学における仕事や流束の計算との深い関連性を示唆しています。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-1 (複素積分の計算)">
                <p>
                    原点 <InlineMath math="z=0" /> から点 <InlineMath math="z=1+i" /> までの直線経路 <InlineMath math="\gamma" /> に沿って、関数 <InlineMath math="f(z) = z" /> を積分してみましょう。
                </p>
                <p>
                    経路 <InlineMath math="\gamma" /> を <InlineMath math="\gamma(t) = (1+i)t \quad (0 \leq t \leq 1)" /> とパラメータ表示すると、<InlineMath math="\gamma'(t) = 1+i" /> となる。
                </p>
                <BlockMath math="\begin{aligned} \int_\gamma z \, dz &= \int_0^1 (1+i)t \cdot (1+i) \, dt \\ &= (1+i)^2 \int_0^1 t \, dt \\ &= 2i \cdot \left[ \frac{t^2}{2} \right]_0^1 \\ &= i \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本的性質</h2>

            <p>
                複素積分は、実積分の線形性を受け継いでいます。また、積分の評価を行うための重要な不等式も存在します。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1 (複素積分の線形性)">
                <p>
                    複素数 <InlineMath math="a, b" /> および関数 <InlineMath math="f(z), g(z)" /> に対して、以下が成立する。
                </p>
                <BlockMath math="\int_\gamma (af(z) + bg(z)) \, dz = a \int_\gamma f(z) \, dz + b \int_\gamma g(z) \, dz" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    積分の定義より、
                </p>
                <BlockMath math="\begin{aligned} &\int_\gamma (af(z) + bg(z)) \, dz \\ &= \int_t (af(\gamma(t)) + bg(\gamma(t))) \gamma'(t) \, dt \\ &= a \int_t f(\gamma(t)) \gamma'(t) \, dt + b \int_t g(\gamma(t)) \gamma'(t) \, dt \\ &= a \int_\gamma f(z) \, dz + b \int_\gamma g(z) \, dz \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                積分の向きを逆にすると、符号が反転します。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-2 (向きの逆転)">
                <p>
                    曲線 <InlineMath math="\gamma" /> と逆向きの曲線を <InlineMath math="-\gamma" /> とすると、以下が成立する。
                </p>
                <BlockMath math="\int_{-\gamma} f(z) \, dz = - \int_\gamma f(z) \, dz" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="-\gamma" /> のパラメータ表示を <InlineMath math="\gamma(a+b-t)" /> とすると、置換積分により導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                積分の絶対値を評価する際、以下の不等式（ML 不等式）が極めて有用です。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-3 (ML 不等式)">
                <p>
                    曲線 <InlineMath math="\gamma" /> の長さを <InlineMath math="L" /> とし、曲線上で <InlineMath math="|f(z)| \leq M" /> が成り立つとき、次が成立する。
                </p>
                <BlockMath math="\left| \int_\gamma f(z) \, dz \right| \leq M \cdot L" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    積分の定義より、
                </p>
                <BlockMath math="\begin{aligned} \left| \int_\gamma f(z) \, dz \right| &= \left| \int_a^b f(\gamma(t)) \gamma'(t) \, dt \right| \\ &\leq \int_a^b |f(\gamma(t))| |\gamma'(t)| \, dt \\ &\leq M \int_a^b |\gamma'(t)| \, dt = ML \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>複素積分は <InlineMath math="\int_\gamma f(z) dz = \int_a^b f(\gamma(t)) \gamma'(t) dt" /> で定義される。</li>
                    <li>実部・虚部に分解するとベクトル解析の線積分と対応する。</li>
                    <li>線形性や向きの逆転といった基本的性質が成り立つ。</li>
                    <li>積分の大きさを評価する ML 不等式は非常に重要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
