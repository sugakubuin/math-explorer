import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EpsilonDeltaDifferentiability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                連続性の厳密な定義に続いて、本節では<strong>微分可能性</strong>の <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> による定式化を行います。
                微分可能性は連続性よりも強い条件であることを厳密に証明し、
                「連続だが微分不可能」な関数の具体例を通じて両者の違いを明確にします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分可能性の厳密な定義</h2>

            <ContentBox type="definition" title="Definition 1.4-1 (微分可能性)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> で<strong>微分可能</strong>であるとは、次の極限が存在し有限値をとることをいう：
                </p>
                <BlockMath math="f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}" />
                <p className="leading-relaxed">
                    この極限値 <InlineMath math="f'(a)" /> を <InlineMath math="f" /> の点 <InlineMath math="a" /> における<strong>導関数</strong>（微分係数）と呼ぶ。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> の言葉で書けば、ある実数 <InlineMath math="f'(a)" /> が存在して、
                </p>
                <BlockMath math="\begin{aligned} &\forall \varepsilon > 0, \; \exists \delta > 0 \; \text{ s.t. } \; 0 < |h| < \delta \\ &\implies \left|\frac{f(a + h) - f(a)}{h} - f'(a)\right| < \varepsilon \end{aligned}" />
                <p className="leading-relaxed">
                    が成り立つことと同値である。
                </p>
            </ContentBox>

            <p>
                微分可能性の本質は「局所的に線形近似できる」ことにあります。
                関数が点 <InlineMath math="a" /> の近くで接線（一次関数）によってよく近似できるということです。
                この解釈は、次の「同値な特徴づけ」でより明確になります。
            </p>

            <ContentBox type="remark" title="微分可能性の同値な特徴づけ">
                <p className="leading-relaxed">
                    <InlineMath math="f" /> が <InlineMath math="a" /> で微分可能であることは、次のように言い換えることもできます。
                    ある定数 <InlineMath math="A" /> と、<InlineMath math="\lim_{h \to 0} \varphi(h) = 0" /> を満たす関数 <InlineMath math="\varphi" /> が存在して、
                </p>
                <BlockMath math="f(a + h) = f(a) + Ah + h\varphi(h)" />
                <p className="leading-relaxed">
                    と書けることと同値です。このとき <InlineMath math="A = f'(a)" /> です。
                    この表現は「<InlineMath math="f(a + h)" /> が線形関数 <InlineMath math="f(a) + Ah" /> で1次近似できる」ことを意味しており、
                    微分可能性の本質が<strong>局所的な線形近似</strong>にあることを明確にしています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分可能ならば連続</h2>

            <ContentBox type="theorem" title="Theorem 1.4-1 (微分可能性は連続性を含意する)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> で微分可能であるならば、<InlineMath math="f" /> は <InlineMath math="a" /> で連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    <InlineMath math="f" /> が <InlineMath math="a" /> で微分可能であるとする。すなわち、極限
                </p>
                <BlockMath math="f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}" />
                <p className="leading-relaxed">
                    が存在する。<InlineMath math="a" /> での連続性を示すために、<InlineMath math="\lim_{h \to 0} f(a + h) = f(a)" /> を示す。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="h \neq 0" /> のとき、
                </p>
                <BlockMath math="f(a + h) - f(a) = \frac{f(a + h) - f(a)}{h} \cdot h" />
                <p className="leading-relaxed">
                    と書ける。<InlineMath math="h \to 0" /> のとき、Theorem 1.2-2（極限の積）より、
                </p>
                <BlockMath math="\begin{aligned} \lim_{h \to 0} \bigl(f(a + h) - f(a)\bigr) &= \lim_{h \to 0} \frac{f(a + h) - f(a)}{h} \cdot \lim_{h \to 0} h \\ &= f'(a) \cdot 0 = 0 \end{aligned}" />
                <p className="leading-relaxed">
                    すなわち <InlineMath math="\lim_{h \to 0} f(a + h) = f(a)" /> が成り立つ。
                    以上より、<InlineMath math="f" /> は <InlineMath math="a" /> で連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="逆は成り立たない">
                <p className="leading-relaxed">
                    Theorem 1.4-1 の逆、すなわち「連続ならば微分可能」は一般に成り立ちません。
                    次の Example 1.4-1 でその反例を見ます。
                    関係を図示すると、次のような包含関係になります。
                </p>
                <BlockMath math="\{\text{微分可能な関数}\} \subsetneq \{\text{連続な関数}\}" />
                <p className="leading-relaxed">
                    つまり、微分可能性は連続性よりも厳しい条件です。
                </p>
            </ContentBox>

            <p>
                Theorem 1.4-1 の通ゑは成り立ちません。次の例で、連続だが微分不可能な関数を見て、両者の違いを実感しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続だが微分不可能な関数</h2>

            <ContentBox type="example" title="Example 1.4-1 (|x| など、連続だが微分不可能な関数の例)">
                <h3 className="text-lg font-semibold mt-2 mb-2">1. 絶対値関数</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x) = |x|" /> は <InlineMath math="x = 0" /> で連続ですが、微分不可能です。
                    これを示します。左側からの極限と右側からの極限を計算する。
                </p>
                <BlockMath math="\lim_{h \to 0+} \frac{|0 + h| - |0|}{h} = \lim_{h \to 0+} \frac{h}{h} = 1" />
                <BlockMath math="\lim_{h \to 0-} \frac{|0 + h| - |0|}{h} = \lim_{h \to 0-} \frac{-h}{h} = -1" />
                <p className="leading-relaxed">
                    左側極限と右側極限が一致しないため、極限 <InlineMath math="\lim_{h \to 0} \frac{|h|}{h}" /> は存在しない。
                    よって <InlineMath math="f(x) = |x|" /> は <InlineMath math="x = 0" /> で微分不可能である。
                </p>
                <p className="leading-relaxed mt-2">
                    幾何学的には、グラフが <InlineMath math="x = 0" /> で「折れ曲がっている」ため、ただ一つの接線を引くことができません。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">2. ワイエルシュトラス関数（至る所連続だが至る所微分不可能）</h3>
                <p className="leading-relaxed">
                    連続だが微分不可能な点が有限個ではなく、<strong>至る所で微分不可能</strong>な連続関数も存在します。
                    カール・ワイエルシュトラスが1872年に提示した以下の関数がその代表例です。
                </p>
                <BlockMath math="W(x) = \sum_{n=0}^{\infty} a^n \cos(b^n \pi x)" />
                <p className="leading-relaxed">
                    ここで <InlineMath math="0 < a < 1" />、<InlineMath math="b" /> は正の奇数で <InlineMath math="ab > 1 + \frac{3}{2}\pi" /> を満たすものとする。
                    この関数は一様収束する余弦関数の無限和であり、余弦関数の連続性と一様収束の定理により至る所連続です。
                    しかし、任意の点において差分商が発散するため、どの点でも微分可能になりません。
                </p>
                <p className="leading-relaxed mt-2">
                    この例の存在は、「連続関数は一般に微分可能」という素朴な直感が誤りであることを示しており、解析学の厳密化に大きな影響を与えました。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>微分可能性は <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> の枠組みで、差分商の極限の存在として定義される（Definition 1.4-1）。</li>
                    <li>微分可能ならば連続であるが、逆は成り立たない（Theorem 1.4-1）。</li>
                    <li><InlineMath math="|x|" /> は <InlineMath math="x = 0" /> で連続だが微分不可能の代表例。さらに、至る所連続かつ至る所微分不可能なワイエルシュトラス関数も存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
