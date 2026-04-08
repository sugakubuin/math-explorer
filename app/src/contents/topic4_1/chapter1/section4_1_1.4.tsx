import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EquivalenceOfNorms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までに、1つのベクトル空間に様々な異なるノルム（例えば <InlineMath math="\|\cdot\|_1" />, <InlineMath math="\|\cdot\|_2" />, <InlineMath math="\|\cdot\|_\infty" /> など）が入りうることを見てきました。異なるノルムが与えられれば、そこから定まる距離や開球の形が変わり、その結果として「収束するかどうか」という解析的な性質も変わる可能性があります。本節では、2つのノルムが本質的に「同じ位相（収束）」を定めるかどうかを判定する「ノルムの同値性」という概念について考えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ノルムの同値性の定義</h2>

            <p>
                2つの異なるノルムであっても、互いに相手を定数倍で評価できる場合、それらは同じ収束の概念を導きます。これを同値なノルムと呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (ノルムの同値性)">
                <p>
                    ベクトル空間 <InlineMath math="V" /> 上の2つのノルム <InlineMath math="\|\cdot\|_a" /> と <InlineMath math="\|\cdot\|_b" /> が<b>同値（equivalent）</b>であるとは、ある定数 <InlineMath math="c > 0" /> および <InlineMath math="C > 0" /> が存在して、任意の <InlineMath math="x \in V" /> に対して
                </p>
                <BlockMath math="c\|x\|_a \leq \|x\|_b \leq C\|x\|_a" />
                <p>
                    が成り立つことである。
                </p>
            </ContentBox>

            <p>
                具体的な空間である有限次元空間 <InlineMath math="\mathbb{R}^n" /> 上で、<InlineMath math="\|\cdot\|_1" /> と <InlineMath math="\|\cdot\|_2" /> がこの意味で同値となることを確認してみましょう。
            </p>

            <ContentBox type="example" title={<span>Example 1.4-1 (<InlineMath math="\mathbb{R}^n" /> 上のノルムの同値性)</span>}>
                <p>
                    <InlineMath math="\mathbb{R}^n" /> 上のすべてのベクトル <InlineMath math="x = (x_1, \ldots, x_n)" /> に対して、1-ノルムと2-ノルムの間に以下の関係が成り立つ。
                </p>
                <BlockMath math="\|x\|_2 \leq \|x\|_1 \leq \sqrt{n}\|x\|_2" />
                <p>
                    第一の不等式 <InlineMath math="\|x\|_2 \leq \|x\|_1" /> は、両辺を2乗して
                </p>
                <BlockMath math="\sum_{i=1}^n x_i^2 \leq \left( \sum_{i=1}^n |x_i| \right)^2 = \sum_{i=1}^n x_i^2 + 2\sum_{i < j} |x_i||x_j|" />
                <p>
                    となることから自明に成り立つ。第二の不等式 <InlineMath math="\|x\|_1 \leq \sqrt{n}\|x\|_2" /> は、ベクトル <InlineMath math="v = (|x_1|, \ldots, |x_n|)" /> と <InlineMath math="u = (1, \ldots, 1)" /> に対するコーシー-シュワルツの不等式（Chapter 6 で詳述）から導かれる。
                </p>
                <p>
                    これにより、<InlineMath math="c = 1" />, <InlineMath math="C = \sqrt{n}" /> として、Definition 1.4-1 の条件を満たすため、<InlineMath math="\|\cdot\|_1" /> と <InlineMath math="\|\cdot\|_2" /> は同値である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="同値なノルムが定まる位相的性質">
                <p>
                    2つのノルムが同値であるとき、一方のノルムでの開球は他方のノルムでの開球にすっぽり含まれ、あるいは含むことができます。この幾何学的関係から、「ある開球内に十分入る」ことを要求する点列の収束（<InlineMath math="x_n \to x" />）やコーシー列などの概念が、どちらのノルムで考えても完全に一致することがわかります。つまり、同値なノルムは全く同じ位相空間（トポロジー）を定めます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限次元の同値性定理</h2>

            <p>
                Example 1.4-1 で <InlineMath math="\mathbb{R}^n" /> 上の1-ノルムと2-ノルムの同値性を見ましたが、実は有限次元空間においては、どんなに奇抜なノルムを持ってきてもすべて同値になるという強力な定理があります。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1">
                <p>
                    有限次元の実または複素ノルム空間上の任意の2つのノルムは互いに同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ベクトル空間 <InlineMath math="V" /> の次元を <InlineMath math="n" /> とし、その基底を <InlineMath math="\{e_1, \ldots, e_n\}" /> とする。任意の <InlineMath math="x \in V" /> は <InlineMath math="x = \sum_{i=1}^n x_i e_i" /> と一意に表せる。基準とするノルムとして、<InlineMath math="\|x\|_2 = \left( \sum_{i=1}^n |x_i|^2 \right)^{1/2}" /> を考える。ノルムの同値性は推移的関係であるため、任意のノルム <InlineMath math="\|\cdot\|" /> が <InlineMath math="\|\cdot\|_2" /> と同値であることを示せば十分である。
                </p>
                <p>
                    まず、三角不等式から
                </p>
                <BlockMath math="\begin{aligned} \|x\| &= \left\| \sum_{i=1}^n x_i e_i \right\| \\ &\leq \sum_{i=1}^n |x_i| \|e_i\| \\ &\leq \left( \sum_{i=1}^n |x_i|^2 \right)^{1/2} \left( \sum_{i=1}^n \|e_i\|^2 \right)^{1/2} \\ &= C \|x\|_2 \end{aligned}" />
                <p>
                    を満たす <InlineMath math="C > 0" /> が存在する（コーシー-シュワルツの不等式を使用）。これにより、写像 <InlineMath math="x \mapsto \|x\|" /> が <InlineMath math="\|\cdot\|_2" /> から誘導される位相で連続であることがわかる。
                </p>
                <p>
                    次に、<InlineMath math="\|\cdot\|_2" /> に関する単位球面 <InlineMath math="S = \{x \in V \mid \|x\|_2 = 1\}" /> は有界閉集合であり、有限次元（実解析（Chapter 2-3））であることからコンパクトである。連続関数 <InlineMath math="x \mapsto \|x\|" /> はコンパクト集合 <InlineMath math="S" /> 上で最小値をもつ。ノルムの正定値性より、<InlineMath math="S" /> は原点を含まないため、その最小値 <InlineMath math="c" /> は厳密に正である（<InlineMath math="c > 0" />）。
                </p>
                <p>
                    したがって、任意の <InlineMath math="x \neq 0" /> に対して <InlineMath math="x / \|x\|_2 \in S" /> だから、
                </p>
                <BlockMath math="\left\| \frac{x}{\|x\|_2} \right\| \geq c \implies \|x\| \geq c\|x\|_2" />
                <p>
                    が成り立つ。以上より、<InlineMath math="c\|x\|_2 \leq \|x\| \leq C\|x\|_2" /> がすべて示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理により、有限次元空間においては「どのノルムで考えるべきか」という悩みから解放されます。どれを使って極限を取っても、収束性や連続性は変わらないからです。しかし、関数の空間のような無限次元空間では全く事情が異なります。
            </p>

            <ContentBox type="example" title="Example 1.4-2 (無限次元での反例)">
                <p>
                    無限次元空間 <InlineMath math="C[0,1]" /> において、上限ノルム <InlineMath math="\|f\|_\infty = \sup_{x} |f(x)|" /> と、<InlineMath math="L^1" />-ノルムに対応する <InlineMath math="\|f\|_1 = \int_0^1 |f(x)|\,dx" /> の2つを考える。
                </p>
                <p>
                    関数列として <InlineMath math="f_n(x) = x^n" /> （<InlineMath math="n = 1, 2, \ldots" />）をとる。このとき、それぞれのノルムを計算すると、
                </p>
                <BlockMath math="\|f_n\|_\infty = \sup_{x \in [0,1]} |x^n| = 1" />
                <BlockMath math="\|f_n\|_1 = \int_0^1 x^n \, dx = \left[ \frac{x^{n+1}}{n+1} \right]_0^1 = \frac{1}{n+1}" />
                <p>
                    となる。もしこれら2つのノルムが同値で <InlineMath math="c\|f\|_\infty \leq \|f\|_1" />（<InlineMath math="c>0" />）が成り立つと仮定すると、
                </p>
                <BlockMath math="c \cdot 1 \leq \frac{1}{n+1}" />
                <p>
                    となるはずだが、<InlineMath math="n \to \infty" /> とすると右辺は <InlineMath math="0" /> に近づくため、どのような正定数 <InlineMath math="c" /> であってもこの不等式を満たし続けることは不可能である。<br />
                    よって、この関数空間では <InlineMath math="\|\cdot\|_\infty" /> と <InlineMath math="\|\cdot\|_1" /> は同値ではない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="無限次元空間の多様性">
                <p>
                    無限次元の空間では、ノルムの選び方によって「近づき方」が根本的に異なります。例えばあるノルムでは収束するのに、別のノルムでは収束しないといったことが平気で起こり得るのです。この「位相の違いが本質的に現れる」という事実こそが、無限次元を対象とする関数解析の難しさであり、同時に非常に豊かな数学的理論を生み出す源泉となっています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>2つのノルムが同値であるとは、互いに定数倍で上下から評価できることである。</li>
                    <li>同値なノルムは、全く等しい位相（開集合、収束、コーシー列の概念）を定める。</li>
                    <li>有限次元のベクトル空間においては、どんなノルムも互いにすべて同値となる。</li>
                    <li>無限次元のベクトル空間（<InlineMath math="C[a,b]" /> など）においては同値でないノルムが存在し、どちらのノルムで測るかによって解析的な性質が決定的に変わる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
