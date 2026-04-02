import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AlgebraicPropertiesOfContinuousFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節 §4.1 では点における連続性の厳密な定義とその不連続性の分類を見ました。
                本節では、連続な関数同士を足したり掛けたり組み合わたりしたときに、その結果の関数もまた連続になるという、連続関数の重要な代数的性質について学びます。
                これにより、基本的な連続関数（多項式など）から、複雑な連続関数を構成することが可能になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代数的性質</h2>

            <p>
                初めに、関数の四則演算（和、差、積、商）および合成演算が、連続性を保存することを示します。
                この命題の証明の多くは、Chapter 3 §3.1 で学んだ数列の極限における代数演算の性質や極限の基本性質から直接導かれます。
            </p>

            <ContentBox type="proposition" title="Proposition 4.2-1 (連続関数の和・積・商・合成は連続)">
                <p>
                    関数 <InlineMath math="f, g" /> が点 <InlineMath math="a" /> において連続であるとする。このとき、次の関数も点 <InlineMath math="a" /> において連続である。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><strong>定数倍と和・差</strong>: <InlineMath math="cf" />（<InlineMath math="c \in \mathbb{R}" /> は定数）、<InlineMath math="f \pm g" /></li>
                    <li><strong>積</strong>: <InlineMath math="fg" /></li>
                    <li><strong>商</strong>: <InlineMath math="\frac{f}{g}" /> （ただし、<InlineMath math="g(a) \neq 0" /> とする）</li>
                </ol>
                <p className="mt-4">
                    さらに、関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> で連続であり、関数 <InlineMath math="g" /> が点 <InlineMath math="f(a)" /> で連続であるならば、合成関数 <InlineMath math="g \circ f" /> は点 <InlineMath math="a" /> において連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (和・積・商・合成の連続性)">
                <p>
                    <strong>(2) 積についての証明</strong>: <br />
                    <InlineMath math="f, g" /> が <InlineMath math="a" /> で連続であるから、<InlineMath math="\lim_{x \to a} f(x) = f(a)" /> かつ <InlineMath math="\lim_{x \to a} g(x) = g(a)" /> である。極限の積の法則より、
                </p>
                <BlockMath math="\lim_{x \to a} (f(x)g(x)) = \left( \lim_{x \to a} f(x) \right) \left( \lim_{x \to a} g(x) \right) = f(a)g(a)" />
                <p>
                    これより、<InlineMath math="fg" /> も <InlineMath math="a" /> で連続である。<br />
                    (1) と (3) についても極限の法則から同様に示される。
                </p>
                <p className="mt-4">
                    <strong>(合成)についての証明</strong>: <br />
                    任意の <InlineMath math="\varepsilon > 0" /> をとる。<InlineMath math="g" /> は <InlineMath math="f(a)" /> で連続なので、ある <InlineMath math="\delta_1 > 0" /> が存在して、
                </p>
                <BlockMath math="|y - f(a)| < \delta_1 \implies |g(y) - g(f(a))| < \varepsilon" />
                <p>
                    が成り立つ。ここで、<InlineMath math="f" /> は <InlineMath math="a" /> で連続なので、この <InlineMath math="\delta_1 > 0" /> に対して、ある <InlineMath math="\delta > 0" /> が存在して、
                </p>
                <BlockMath math="|x - a| < \delta \implies |f(x) - f(a)| < \delta_1" />
                <p>
                    が成り立つ。以上の2つを組み合わせると、<InlineMath math="|x - a| < \delta" /> のとき、<InlineMath math="y = f(x)" /> と置けば <InlineMath math="|f(x) - f(a)| < \delta_1" /> となり、したがって、
                </p>
                <BlockMath math="|g(f(x)) - g(f(a))| < \varepsilon" />
                <p>
                    が導かれる。よって、合成関数 <InlineMath math="g \circ f" /> は点 <InlineMath math="a" /> で連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この性質の強力なところは、証明を一つ一つ行わなくとも、複雑な関数の連続性を一瞬で言えるようになる点です。
                例えば、<InlineMath math="h(x) = \frac{\sin(x^2 + 1)}{x^2 - 4}" /> という関数が与えられた場合、定数関数や多項式が連続であり、サイン関数が連続であることが既知であれば、<InlineMath math="x \neq \pm 2" /> の範囲で <InlineMath math="h(x)" /> が連続であると即座に結論付けられます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限集合と無限集合上の違い</h2>

            <p>
                関数の連続性は各点での局所的な性質ですが、関数が定義されている全体（区間）の性質と結びつくことで、大域的な振る舞いに大きな違いをもたらします。
                特に、定義域が「開区間」であるか「閉区間」であるかによって、連続関数の有界性（関数値がいくらでも大きく／小さくならないか）に決定的な違いが生じます。
            </p>

            <ContentBox type="remark" title="Remark (開区間上の連続関数と有界性)">
                <p>
                    連続関数だからといって、その関数が有界（値域が有界）になるとは限りません。
                    特に、定義域が開区間（端点を含まない区間）である場合、連続関数でも無限大に発散する（有界でない）ことがあり得ます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        <strong>開区間の例</strong>: <InlineMath math="f(x) = \frac{1}{x}" /> を半開区間 <InlineMath math="(0, 1]" /> で考える。
                        この関数は区間内のすべての点で連続であるが、<InlineMath math="x \to 0" /> とすると <InlineMath math="f(x) \to \infty" /> となるため、有界ではない。
                    </li>
                    <li>
                        <strong>全実数の例</strong>: <InlineMath math="g(x) = x^2" /> を <InlineMath math="\mathbb{R}" /> 全体で考える。これも連続関数であるが、上に有界ではない。
                    </li>
                </ul>
                <p className="mt-4">
                    一方で、後の §4.4 で証明する「最大値・最小値定理」により、定義域が有界な<strong>閉区間</strong>（端点を含む、<InlineMath math="[a, b]" /> のような区間）の場合、その上の連続関数は必ず有界となり、さらに最大値と最小値を持つことが保証されます。
                </p>
            </ContentBox>

            <p>
                ここで確認した「開区間と閉区間の違い」は、解析学全体において「コンパクト性」というより深い概念へと繋がっていきます。
                次節 §4.3 では、実数の完備性（上限公理）の威力が存分に発揮される「中間値の定理」の厳密な証明について詳しく見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>連続関数の四則演算（分母が0の点を除く）および合成をしても、結果はやはり連続関数になる。</li>
                    <li>極限の基本性質から直ちに連続性の代数的性質を証明できる。</li>
                    <li>連続な関数であっても定義域が開区間や非有界な領域であれば有界とは限らない（閉区間との対比が重要）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
