import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EpsilonDeltaLimitDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                高校数学や微分積分学Iでは、「<InlineMath math="x" /> が <InlineMath math="a" /> に近づくとき、<InlineMath math="f(x)" /> は <InlineMath math="L" /> に近づく」という極限の概念を直感的に扱ってきました。
                しかし、「近づく」とは一体どの程度のことを指すのでしょうか？ この曖昧さを排除し、極限を厳密に定義するのが
                <strong><InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法</strong>です。
                本節では、この論法の根幹にある極限の定義を学び、具体例を通じてその使い方を確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極限のε-δ論法による定義</h2>

            <ContentBox type="definition" title="Definition 1.1-1 (関数の極限：ε-δ による定義)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> の近くで定義されているとする（ただし <InlineMath math="x = a" /> 自身では定義されていなくてもよい）。
                    このとき、
                </p>
                <BlockMath math="\lim_{x \to a} f(x) = L" />
                <p className="leading-relaxed">
                    であるとは、次の条件が成り立つことをいう：
                </p>
                <BlockMath math="\begin{aligned} \forall \varepsilon > 0, \; \exists \delta > 0 \; \text{ s.t. } \; 0 < |x - a| < \delta & \\ \implies |f(x) - L| &< \varepsilon \end{aligned}" />
                <p className="leading-relaxed mt-2">
                    すなわち、「どんなに小さな正の数 <InlineMath math="\varepsilon" /> を与えられても、適切に正の数 <InlineMath math="\delta" /> を選べば、
                    <InlineMath math="x" /> と <InlineMath math="a" /> の距離が <InlineMath math="\delta" /> 未満であるような（ただし <InlineMath math="x \neq a" /> の）すべての <InlineMath math="x" /> に対して、
                    <InlineMath math="f(x)" /> と <InlineMath math="L" /> の距離を <InlineMath math="\varepsilon" /> 未満にできる」という意味である。
                </p>
            </ContentBox>

            <p>
                この定義の高度に形式的な見た目には圧倒されるかもしれませんが、その本質は意外にシンプルです。
                「どんなに近づけよと挑戦されても、必ず応えられる」——これを「ゲーム」の比喩で読み解くと、理解が深まります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直感的解釈と形式的定義の対応</h2>

            <ContentBox type="remark" title="「x が a に近づくとき f(x) が L に近づく」を ε-δ で読む方法">
                <p className="leading-relaxed">
                    <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 定義を理解するための鍵は、「相手（<InlineMath math="\varepsilon" />）が先に動き、自分（<InlineMath math="\delta" />）が後から対応する」という<strong>ゲーム的な構造</strong>にあります。
                </p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>
                        <strong>相手のターン：</strong>相手が「<InlineMath math="f(x)" /> を <InlineMath math="L" /> から <InlineMath math="\varepsilon" /> 以内に近づけよ」と要求します。<InlineMath math="\varepsilon" /> はどんなに小さくてもかまいません。
                    </li>
                    <li>
                        <strong>自分のターン：</strong>自分がそれに応じて「<InlineMath math="x" /> を <InlineMath math="a" /> から <InlineMath math="\delta" /> 以内に取れば大丈夫だ」と <InlineMath math="\delta" /> を提示します。
                    </li>
                    <li>
                        <strong>検証：</strong>実際に <InlineMath math="0 < |x - a| < \delta" /> なるすべての <InlineMath math="x" /> で <InlineMath math="|f(x) - L| < \varepsilon" /> が成り立てば、自分の勝ちです。
                    </li>
                </ol>
                <p className="leading-relaxed mt-2">
                    極限が <InlineMath math="L" /> であるとは、この「ゲーム」で<strong>どんな <InlineMath math="\varepsilon > 0" /> に対しても自分が必ず勝てる戦略（<InlineMath math="\delta" /> の選び方）が存在する</strong>ことを意味します。
                </p>
                <p className="leading-relaxed mt-2">
                    注意すべき点として、<InlineMath math="\delta" /> は一般に <InlineMath math="\varepsilon" /> に依存します。
                    つまり、<InlineMath math="\varepsilon" /> が小さくなれば <InlineMath math="\delta" /> も小さくしなければならないのが普通です。
                    定義の中の <InlineMath math="0 < |x - a|" /> という条件は、<InlineMath math="x = a" /> を除外しています。
                    これは極限の概念が「<InlineMath math="x" /> が <InlineMath math="a" /> に限りなく近づくときの挙動」に関心を持ち、<InlineMath math="x = a" /> での値には関知しないためです。
                </p>
            </ContentBox>

            <p>
                定義の意味を理解したら、実際に「極限を証明する」作業を体験しましょう。
                以下の例では、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法の典型的な証明パターンを確認します。
                最初の例は簡単な一次関数、次の例では二次関数でより巧妙な <InlineMath math="\delta" /> の選び方が求められます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例による確認</h2>

            <ContentBox type="example" title="Example 1.1-1 (ε-δ 論法による極限の証明例)">
                <p className="leading-relaxed">
                    <InlineMath math="\lim_{x \to 3} (2x + 1) = 7" /> を <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 定義に基づいて証明する。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>証明：</strong>任意の <InlineMath math="\varepsilon > 0" /> が与えられたとする。<InlineMath math="\delta = \frac{\varepsilon}{2}" /> とおく。
                </p>
                <p className="leading-relaxed mt-2">
                    このとき、<InlineMath math="0 < |x - 3| < \delta" /> なる任意の <InlineMath math="x" /> に対して、
                </p>
                <BlockMath math="\begin{aligned} |f(x) - L| &= |(2x + 1) - 7| = |2x - 6| \\ &= 2|x - 3| < 2\delta \\ &= 2 \cdot \frac{\varepsilon}{2} = \varepsilon \end{aligned}" />
                <p className="leading-relaxed">
                    となる。よって、任意の <InlineMath math="\varepsilon > 0" /> に対して <InlineMath math="\delta = \frac{\varepsilon}{2} > 0" /> とおくことで定義の条件が満たされ、
                    <InlineMath math="\lim_{x \to 3} (2x + 1) = 7" /> が示された。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-2 (二次関数の極限)">
                <p className="leading-relaxed">
                    <InlineMath math="\lim_{x \to 2} x^2 = 4" /> を <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 定義に基づいて証明する。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>証明：</strong>任意の <InlineMath math="\varepsilon > 0" /> が与えられたとする。
                    まず、<InlineMath math="|x - 2|" /> が十分に小さいとき <InlineMath math="|x^2 - 4|" /> を制御するために因数分解する。
                </p>
                <BlockMath math="|x^2 - 4| = |x - 2| \cdot |x + 2|" />
                <p className="leading-relaxed">
                    <InlineMath math="|x + 2|" /> を上から抑えたい。まず <InlineMath math="|x - 2| < 1" /> と仮定すれば <InlineMath math="1 < x < 3" /> であるから <InlineMath math="|x + 2| < 5" /> となる。
                </p>
                <p className="leading-relaxed mt-2">
                    そこで、<InlineMath math="\delta = \min\left(1, \frac{\varepsilon}{5}\right)" /> とおく。このとき、<InlineMath math="0 < |x - 2| < \delta" /> なる任意の <InlineMath math="x" /> に対して、
                </p>
                <BlockMath math="|x^2 - 4| = |x - 2| \cdot |x + 2| < \frac{\varepsilon}{5} \cdot 5 = \varepsilon" />
                <p className="leading-relaxed">
                    となる。よって <InlineMath math="\lim_{x \to 2} x^2 = 4" /> が示された。
                </p>
                <p className="leading-relaxed mt-2">
                    この例では、<InlineMath math="\delta" /> を選ぶ際に<strong>「事前に <InlineMath math="|x - a|" /> の範囲を制限して他の因子を抑える」</strong>というテクニックが使われています。
                    <InlineMath math="\delta = \min(1, \varepsilon/5)" /> のように2つの条件の最小値をとるのは、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法の典型的な手法です。
                </p>
            </ContentBox>


            <ContentBox type="remark" title="歴史メモ：ε-δ 論法の誕生">
                <p className="leading-relaxed">
                    ε-δ 論法は、19世紀に<strong>カール・ワイエルシュトラス</strong>（Karl Weierstrass）によって確立されました。
                    それ以前にもオイラーやコーシー」らが極限の概念を用いていましたが、その定義は直感的なものでした。
                    ワイエルシュトラスの定式化により、「無限小」という曖昧な概念が排除され、解析学の基礎が厳密に構築されました。
                    この厳密化は、19世紀の数学における最も重要な達成の一つとされています。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>「<InlineMath math="\lim_{x \to a} f(x) = L" />」の厳密な意味は、「任意の <InlineMath math="\varepsilon > 0" /> に対して、適切な <InlineMath math="\delta > 0" /> が存在し、<InlineMath math="0 < |x - a| < \delta" /> ならば <InlineMath math="|f(x) - L| < \varepsilon" />」である。</li>
                    <li><InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 定義は「相手の要求（<InlineMath math="\varepsilon" />）に対して自分が応答（<InlineMath math="\delta" />）する」ゲーム的構造で理解できる。</li>
                    <li>具体的な証明では、<InlineMath math="|f(x) - L|" /> を <InlineMath math="|x - a|" /> で評価し、<InlineMath math="\delta" /> を <InlineMath math="\varepsilon" /> の関数として選ぶ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
