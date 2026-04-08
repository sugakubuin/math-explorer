import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CompletenessAndBanachSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 1 ではノルム空間の定義とその位相的性質について学びました。しかし、極限を考える解析学において、空間内に「極限値となるべき点」が確実に存在するかどうかは非常に重要です。本節では、空間に「穴がない」という性質を表す「完備性」について解説し、完備なノルム空間である「バナッハ空間」を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">バナッハ空間の定義</h2>

            <p>
                「列の項同士がだんだん近づく」性質を持つコーシー列は、直感的には何らかの極限に向かっているはずです。しかし、空間全体がその極限点を含んでいる保証はありません。すべてのコーシー列が自空間内に収束先を持つ空間を完備であるといいます。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (バナッハ空間)">
                <p>
                    ノルム空間 <InlineMath math="V" /> 内の任意のコーシー列が <InlineMath math="V" /> 内のある点に収束するとき、<InlineMath math="V" /> は<b>完備（complete）</b>であるという。完備なノルム空間のことを<b>バナッハ空間（Banach space）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                実数の空間 <InlineMath math="\mathbb{R}" /> が完備であることは解析学の基礎です。有限次元のベクトル空間も、この実数の完備性を受け継いでバナッハ空間になります。
            </p>

            <ContentBox type="example" title={<span>Example 2.1-1 (<InlineMath math="\mathbb{R}^n" /> がバナッハ空間であること)</span>}>
                <p>
                    有限次元空間 <InlineMath math="\mathbb{R}^n" /> は、どのノルムを考えても互いに同値であるため（Theorem 1.4-1）、ここでは2-ノルム <InlineMath math="\|\cdot\|_2" /> で考える。
                </p>
                <p>
                    <InlineMath math="\mathbb{R}^n" /> の点列 <InlineMath math="(x^{(k)})_{k=1}^\infty" /> がコーシー列であるとする。各成分を取り出した実数列 <InlineMath math="(x_i^{(k)})_{k=1}^\infty" /> （<InlineMath math="i = 1, \ldots, n" />）を考えると、
                </p>
                <BlockMath math="|x_i^{(m)} - x_i^{(k)}| \leq \|x^{(m)} - x^{(k)}\|_2" />
                <p>
                    であるため、各成分の列も実数全体の集合 <InlineMath math="\mathbb{R}" /> におけるコーシー列となる。<InlineMath math="\mathbb{R}" /> は完備であるから（2-3 実解析のボルツァーノ-ワイエルシュトラスの定理より）、各成分はある実数 <InlineMath math="x_i" /> に収束する。
                </p>
                <p>
                    これらを並べた極限の候補 <InlineMath math="x = (x_1, \ldots, x_n) \in \mathbb{R}^n" /> に対して、成分ごとの収束性から
                </p>
                <BlockMath math="\lim_{k \to \infty} \|x^{(k)} - x\|_2 = \lim_{k \to \infty} \sqrt{\sum_{i=1}^n |x_i^{(k)} - x_i|^2} = 0" />
                <p>
                    となり、<InlineMath math="(x^{(k)})" /> は <InlineMath math="x" /> に収束する。したがって、<InlineMath math="\mathbb{R}^n" /> はバナッハ空間である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="完備性の直感的意味">
                <p>
                    完備性とは、空間に「穴がない」ことを意味します。解析学では、方程式の解などを漸化式による極限（点列）として構成することがよくあります。空間が完備であれば、その点列がコーシー列であることさえ示せば、具体的な極限値が分からなくても「解が空間内に存在する」と保証されるため、極めて強力な武器になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完備でないノルム空間の例</h2>

            <p>
                有限次元の空間は常に完備ですが、無限次元の関数空間などにおいては、「ある関数列が近づいていく先にある極限」が元の空間からはみ出してしまう（完備でない）ことがあります。
            </p>

            <ContentBox type="example" title={<span>Example 2.1-2 (<InlineMath math="C[0,1]" /> の <InlineMath math="L^1" /> ノルムでの非完備性)</span>}>
                <p>
                    区間 <InlineMath math="[0,1]" /> 上の連続関数空間 <InlineMath math="C[0,1]" /> に、<InlineMath math="L^1" /> ノルム <InlineMath math="\|f\|_1 = \int_0^1 |f(x)|\,dx" /> を入れたノルム空間を考える。
                </p>
                <p>
                    ここで、以下のような連続関数の列 <InlineMath math="(f_n)" /> （<InlineMath math="n \geq 2" />）を構成する。
                </p>
                <BlockMath math="f_n(x) = \begin{cases} 
0 & \left(0 \leq x \leq \frac{1}{2} - \frac{1}{n}\right) \\
\frac{n}{2}\left(x - \frac{1}{2} + \frac{1}{n}\right) & \left(\frac{1}{2} - \frac{1}{n} < x < \frac{1}{2} + \frac{1}{n}\right) \\
1 & \left(\frac{1}{2} + \frac{1}{n} \leq x \leq 1\right)
\end{cases}" />
                <p>
                    この関数列のグラフは、<InlineMath math="1/2" /> 付近で <InlineMath math="0" /> から <InlineMath math="1" /> へ急峻に立ち上がる折れ線である。<InlineMath math="m > n" /> のとき、<InlineMath math="f_m" /> と <InlineMath math="f_n" /> が異なるのは幅 <InlineMath math="2/n" /> の区間内だけであり、その差は高々 <InlineMath math="1" /> であるため、
                </p>
                <BlockMath math="\|f_m - f_n\|_1 \leq \frac{2}{n} \to 0 \quad (n \to \infty)" />
                <p>
                    となり、<InlineMath math="(f_n)" /> は <InlineMath math="L^1" /> ノルムに関してコーシー列である。
                </p>
                <p>
                    しかし、各点 <InlineMath math="x" /> での極限関数 <InlineMath math="f" /> は、<InlineMath math="x < 1/2" /> で <InlineMath math="0" />、<InlineMath math="x > 1/2" /> で <InlineMath math="1" />（階段関数）となり、<InlineMath math="x = 1/2" /> で不連続である。もし <InlineMath math="(f_n)" /> が <InlineMath math="C[0,1]" /> 内のある連続関数 <InlineMath math="g" /> に <InlineMath math="L^1" /> 収束したとすると、<InlineMath math="\int_0^1 |f(x) - g(x)|\,dx = 0" /> が導かれ、<InlineMath math="g" /> は <InlineMath math="f" /> と一致せざるを得ないが、連続関数が階段関数に等しくなることはない。
                </p>
                <p>
                    したがって、このコーシー列は <InlineMath math="C[0,1]" /> の中には極限を持たず、この空間は完備ではない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ノルムの選び方と完備性">
                <p>
                    この例から重要な教訓が得られます。同じ「連続関数」という集合であっても、そこに入れるノルム（測るための「物差し」）が違えば、完備であったり完備でなかったりするのです。次節で示しますが、<InlineMath math="C[0,1]" /> は上限ノルム <InlineMath math="\|\cdot\|_\infty" /> のもとでは見事に完備なバナッハ空間となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ノルム空間において、すべてのコーシー列が収束するとき、その空間をバナッハ空間（完備ノルム空間）と呼ぶ。</li>
                    <li>完備性は空間に「穴がない」ことを保証し、解析的手法（極限操作を伴う構成）の拠り所となる。</li>
                    <li><InlineMath math="\mathbb{R}^n" /> などの有限次元空間は常にバナッハ空間である。</li>
                    <li>無限次元空間の場合、採用するノルムによってはコーシー列であっても極限が元の空間からはみ出してしまう非完備な例（<InlineMath math="C[0,1]" /> の <InlineMath math="L^1" /> ノルムなど）が存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
