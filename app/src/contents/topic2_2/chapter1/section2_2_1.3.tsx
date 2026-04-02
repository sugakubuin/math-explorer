import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EpsilonDeltaContinuity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                極限の <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 定義に続いて、本節では<strong>連続性</strong>の厳密な定義を与えます。
                直感的に「関数のグラフに切れ目がない」と捉えてきた連続性を、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> の言葉で表現します。
                さらに、連続関数の代数的性質（和・積・商・合成の連続性）を証明し、不連続点の分類も紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続性の定義</h2>

            <ContentBox type="definition" title="Definition 1.3-1 (点における連続性：ε-δ による定義)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> で定義されているとする。<InlineMath math="f" /> が <InlineMath math="a" /> で<strong>連続</strong>であるとは、次の条件が成り立つことをいう：
                </p>
                <BlockMath math="\forall \varepsilon > 0, \; \exists \delta > 0 \; \text{ s.t. } \; |x - a| < \delta \implies |f(x) - f(a)| < \varepsilon" />
                <p className="leading-relaxed mt-2">
                    これは極限の定義（Definition 1.1-1）と似ていますが、次の2点が異なります。
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>極限値 <InlineMath math="L" /> が <InlineMath math="f(a)" /> そのものである（つまり <InlineMath math="\lim_{x \to a} f(x) = f(a)" />）。</li>
                    <li><InlineMath math="0 < |x - a|" /> ではなく <InlineMath math="|x - a| < \delta" />（<InlineMath math="x = a" /> を含む）。ただし <InlineMath math="x = a" /> のときは <InlineMath math="|f(a) - f(a)| = 0 < \varepsilon" /> は自動的に成り立つため、実質的には <InlineMath math="x \neq a" /> の場合が重要です。</li>
                </ul>
            </ContentBox>

            <ContentBox type="definition" title="Definition 1.3-2 (区間上の連続性)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が区間 <InlineMath math="I" /> 上で<strong>連続</strong>であるとは、<InlineMath math="I" /> のすべての点 <InlineMath math="a \in I" /> で <InlineMath math="f" /> が連続であることをいう。
                </p>
                <p className="leading-relaxed mt-2">
                    ただし、端点（例えば閉区間 <InlineMath math="[a, b]" /> における <InlineMath math="a" /> や <InlineMath math="b" />）では、片側連続であることを要求する。
                    すなわち、<InlineMath math="a" /> では右側連続 <InlineMath math="\lim_{x \to a+} f(x) = f(a)" />、<InlineMath math="b" /> では左側連続 <InlineMath math="\lim_{x \to b-} f(x) = f(b)" /> であることとする。
                </p>
            </ContentBox>

            <p>
                「点における連続性」の定義は、極限の定義と形が似ていますが、決定的な違いがあります。
                連続性は「極限値が関数値そのものに等しい」ことを要求するので、極限の存在だけでは不十分です。
                この連続性が、様々な演算の下で保存されることを次に確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続関数の代数的性質</h2>

            <ContentBox type="proposition" title="Proposition 1.3-1 (連続関数の和・積・商・合成は連続)">
                <p className="leading-relaxed">
                    <InlineMath math="f" />, <InlineMath math="g" /> が点 <InlineMath math="a" /> で連続ならば、次が成り立つ。
                </p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                    <li><InlineMath math="f + g" />, <InlineMath math="f - g" /> は <InlineMath math="a" /> で連続。</li>
                    <li><InlineMath math="f \cdot g" /> は <InlineMath math="a" /> で連続。</li>
                    <li><InlineMath math="g(a) \neq 0" /> ならば <InlineMath math="f / g" /> は <InlineMath math="a" /> で連続。</li>
                    <li><InlineMath math="f" /> が <InlineMath math="a" /> で連続かつ <InlineMath math="g" /> が <InlineMath math="f(a)" /> で連続ならば、合成関数 <InlineMath math="g \circ f" /> は <InlineMath math="a" /> で連続。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    (1)〜(3) は <InlineMath math="a" /> での連続性の定義が <InlineMath math="\lim_{x \to a} f(x) = f(a)" /> および <InlineMath math="\lim_{x \to a} g(x) = g(a)" /> を意味するため、
                    Theorem 1.2-2 の極限の四則演算の結果をそのまま適用すれば直ちに従う。
                </p>
                <p className="leading-relaxed mt-2">
                    (4) の合成関数の連続性を示す。任意の <InlineMath math="\varepsilon > 0" /> が与えられたとする。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="g" /> が <InlineMath math="f(a)" /> で連続であるから、ある <InlineMath math="\eta > 0" /> が存在して、
                </p>
                <BlockMath math="|y - f(a)| < \eta \implies |g(y) - g(f(a))| < \varepsilon" />
                <p className="leading-relaxed">
                    <InlineMath math="f" /> が <InlineMath math="a" /> で連続であるから、この <InlineMath math="\eta > 0" /> に対してある <InlineMath math="\delta > 0" /> が存在して、
                </p>
                <BlockMath math="|x - a| < \delta \implies |f(x) - f(a)| < \eta" />
                <p className="leading-relaxed">
                    したがって、<InlineMath math="|x - a| < \delta" /> なる任意の <InlineMath math="x" /> に対して <InlineMath math="|f(x) - f(a)| < \eta" /> であり、
                    これより <InlineMath math="|g(f(x)) - g(f(a))| < \varepsilon" /> が成り立つ。
                    すなわち <InlineMath math="g \circ f" /> は <InlineMath math="a" /> で連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                合成関数の連続性の証明では、<InlineMath math="\varepsilon" /> と <InlineMath math="\delta" /> の間に <InlineMath math="\eta" /> という「中継の精度」を導入するのが鍵でした。
                外側の関数 <InlineMath math="g" /> の精度要求（<InlineMath math="\varepsilon" />）から内側の関数 <InlineMath math="f" /> への精度要求（<InlineMath math="\eta" />）へ、そして最終的な入力の精度（<InlineMath math="\delta" />）へと、「逆向きに」たどっていく構造は、解析学の証明によく現れます。
            </p>
            <p className="mt-2">
                連続性の概念をより深く理解するために、「連続でない」とはどういうことかを見ておきましょう。不連続点にはいくつかの種類があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不連続点の例</h2>

            <ContentBox type="example" title="Example 1.3-1 (除去可能不連続点・跳躍不連続点・本質的不連続点)">
                <p className="leading-relaxed">
                    不連続点にはいくつかの種類があります。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">1. 除去可能不連続点</h3>
                <p className="leading-relaxed">
                    <InlineMath math="\lim_{x \to a} f(x)" /> が存在するが、<InlineMath math="f(a)" /> と一致しない（または <InlineMath math="f(a)" /> が未定義）場合です。
                </p>
                <BlockMath math="f(x) = \begin{cases} \dfrac{x^2 - 1}{x - 1} & (x \neq 1) \\ 0 & (x = 1) \end{cases}" />
                <p className="leading-relaxed">
                    この場合、<InlineMath math="\lim_{x \to 1} f(x) = \lim_{x \to 1} (x + 1) = 2" /> ですが <InlineMath math="f(1) = 0 \neq 2" /> であるため、
                    <InlineMath math="x = 1" /> は除去可能不連続点です。<InlineMath math="f(1) = 2" /> と再定義すれば連続になります。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">2. 跳躍不連続点（第一種不連続点）</h3>
                <p className="leading-relaxed">
                    左側極限 <InlineMath math="\lim_{x \to a-} f(x)" /> と右側極限 <InlineMath math="\lim_{x \to a+} f(x)" /> はともに存在するが、一致しない場合です。
                </p>
                <BlockMath math="f(x) = \begin{cases} 1 & (x \geq 0) \\ -1 & (x < 0) \end{cases}" />
                <p className="leading-relaxed">
                    この関数（符号関数の変形）は <InlineMath math="x = 0" /> で跳躍不連続です。<InlineMath math="\lim_{x \to 0-} f(x) = -1" />、<InlineMath math="\lim_{x \to 0+} f(x) = 1" /> であり、左右の極限が一致しません。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">3. 本質的不連続点（第二種不連続点）</h3>
                <p className="leading-relaxed">
                    片側極限の少なくとも一方が存在しない（振動や発散する）場合です。
                </p>
                <BlockMath math="f(x) = \sin\frac{1}{x} \quad (x \neq 0)" />
                <p className="leading-relaxed">
                    この関数は <InlineMath math="x \to 0" /> で激しく振動し、極限が存在しません。<InlineMath math="x = 0" /> は本質的不連続点です。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> で連続であるとは、<InlineMath math="\lim_{x \to a} f(x) = f(a)" /> が成り立つことである。</li>
                    <li>連続関数の和・積・商（分母が0でない場合）・合成はすべて連続である。</li>
                    <li>不連続点は「除去可能」「跳躍（第一種）」「本質的（第二種）」に分類される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
