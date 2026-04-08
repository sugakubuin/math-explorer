import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OrthogonalityAndOrthogonalComplements() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ヒルベルト空間（または一般の内積空間）において、内積の最大の特徴である「直交」の概念を形式化します。また、与えられた部分集合に直交するベクトル全体の集合である「直交補空間」について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直交の定義</h2>

            <p>
                ユークリッド空間において、2つのベクトルが直交することはそれらの内積がゼロになることと同値でした。これを無限次元の空間へと一般化します。
            </p>

            <ContentBox type="definition" title="Definition 6.4-1 (直交)">
                <p>
                    内積空間 <InlineMath math="V" /> の2つの元 <InlineMath math="x, y \in V" /> が
                </p>
                <BlockMath math="\langle x, y \rangle = 0" />
                <p>
                    を満たすとき、<InlineMath math="x" /> と <InlineMath math="y" /> は<b>直交（orthogonal）</b>するといい、<InlineMath math="x \perp y" /> と表す。
                </p>
            </ContentBox>

            <p>
                2つのベクトルに対する直交の概念を、ある部分集合全体へと拡張したものが直交補空間です。
            </p>

            <ContentBox type="definition" title="Definition 6.4-2 (直交補空間)">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> の空でない部分集合 <InlineMath math="M \subset H" /> に対して、<InlineMath math="M" /> のすべての元と直交するような <InlineMath math="H" /> の元の集合
                </p>
                <BlockMath math="M^\perp = \{x \in H \mid \langle x, m \rangle = 0, \, \forall m \in M\}" />
                <p>
                    を、<InlineMath math="M" /> の<b>直交補空間（orthogonal complement）</b>という。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-1">
                <p>
                    空間 <InlineMath math="\ell^2" /> において、第1成分がゼロであるような元の集合 <InlineMath math="M = \{x = (x_n) \in \ell^2 \mid x_1 = 0\}" /> の直交補空間を求める。
                </p>
                <p>
                    任意の <InlineMath math="y \in M^\perp" /> は、すべての <InlineMath math="x \in M" /> に対して <InlineMath math="\langle y, x \rangle = \sum_{n=1}^\infty y_n \overline{x_n} = 0" /> を満たさなければならない。<br/>
                    特に、<InlineMath math="x" /> として標準基底の元 <InlineMath math="e_k" />（<InlineMath math="k \geq 2" />）は <InlineMath math="M" /> に属すため、<InlineMath math="\langle y, e_k \rangle = y_k = 0" /> となる。<br/>
                    したがって、<InlineMath math="y" /> は <InlineMath math="y_1" /> 成分のみをゼロ以外として持ち得る。すなわち、<InlineMath math="M^\perp = \mathrm{span}\{e_1\}" />（第1成分のみの空間）であることがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直交補空間の性質</h2>

            <p>
                直交補空間は、元の集合 <InlineMath math="M" /> がどのような集合であっても、必ず非常に良い性質（閉部分空間）を持つという特徴があります。
            </p>

            <ContentBox type="theorem" title="Proposition 6.4-1">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> の任意の部分集合 <InlineMath math="M" /> に対して、直交補空間 <InlineMath math="M^\perp" /> は常に <InlineMath math="H" /> の閉部分空間である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず <InlineMath math="M^\perp" /> が部分空間であることを示す。任意の <InlineMath math="x, y \in M^\perp" /> とスカラー <InlineMath math="\alpha, \beta" />、および任意の <InlineMath math="m \in M" /> に対して、
                </p>
                <BlockMath math="\langle \alpha x + \beta y, m \rangle = \alpha \langle x, m \rangle + \beta \langle y, m \rangle = \alpha \cdot 0 + \beta \cdot 0 = 0" />
                <p>
                    よって <InlineMath math="\alpha x + \beta y \in M^\perp" /> となり、部分空間である。<br/>
                    次に閉集合であることを示す。数列 <InlineMath math="\{x_n\} \subset M^\perp" /> が <InlineMath math="x \in H" /> に収束するとする。内積はコーシー-シュワルツの不等式により連続であるため、任意の <InlineMath math="m \in M" /> について、
                </p>
                <BlockMath math="\langle x, m \rangle = \langle \lim_{n \to \infty} x_n, m \rangle = \lim_{n \to \infty} \langle x_n, m \rangle = \lim_{n \to \infty} 0 = 0" />
                <p>
                    よって極限 <InlineMath math="x" /> も <InlineMath math="M^\perp" /> に属し、<InlineMath math="M^\perp" /> は閉である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ある集合の「直交補空間の直交補空間」を考えると、元の集合との間に興味深い包含関係が成り立ちます。
            </p>

            <ContentBox type="theorem" title="Proposition 6.4-2">
                <p>
                    任意の部分集合 <InlineMath math="M \subset H" /> に対して、<InlineMath math="M \subset (M^\perp)^\perp" /> が成り立つ。<br/>
                    特に <InlineMath math="M" /> が閉部分空間であるならば、<InlineMath math="M = (M^\perp)^\perp" /> となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="M \subset (M^\perp)^\perp" /> を示す。<br/>
                    任意の <InlineMath math="m \in M" /> をとる。定義より、任意の <InlineMath math="x \in M^\perp" /> に対して <InlineMath math="\langle m, x \rangle = \overline{\langle x, m \rangle} = 0" /> である。<br/>
                    これは <InlineMath math="m" /> が「<InlineMath math="M^\perp" /> のすべての元と直交する」ことを意味するため、<InlineMath math="m \in (M^\perp)^\perp" /> が成立する。<br/>
                    <InlineMath math="M" /> が閉部分空間のときの等号成立（<InlineMath math="(M^\perp)^\perp \subset M" />）については、次章（§7.1）で学ぶ射影定理を用いて、任意の元を <InlineMath math="M" /> と <InlineMath math="M^\perp" /> の元に直交分解することで証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-2">
                <p>
                    関数空間 <InlineMath math="L^2[-\pi, \pi]" /> において、偶関数全体の集合 <InlineMath math="M_{\text{even}} = \{f \in L^2[-\pi, \pi] \mid f(x) = f(-x) \ \text{a.e.}\}" /> と、奇関数全体の集合 <InlineMath math="M_{\text{odd}} = \{g \in L^2[-\pi, \pi] \mid g(x) = -g(-x) \ \text{a.e.}\}" /> を考える。
                </p>
                <p>
                    任意の <InlineMath math="f \in M_{\text{even}}" /> と <InlineMath math="g \in M_{\text{odd}}" /> に対して、その積 <InlineMath math="f(x)\overline{g(x)}" /> は奇関数となるため、対称区間 <InlineMath math="[-\pi, \pi]" /> での積分はゼロになる。
                </p>
                <BlockMath math="\langle f, g \rangle = \int_{-\pi}^\pi f(x)\overline{g(x)} \,dx = 0" />
                <p>
                    したがって、お互いの集合は直交している。さらに、これらは互いの直交補空間になっている（<InlineMath math="(M_{\text{even}})^\perp = M_{\text{odd}}" />）。
                </p>
            </ContentBox>

            <p>
                直交補空間という概念は、空間全体を互いに直交する部分空間に分解する際に非常に強力な役割を果たします。次章ではこの概念を用いた射影定理について学びます。
            </p>

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>2つの元の内積がゼロになるとき、それらは直交しているという。</li>
                    <li>部分集合 <InlineMath math="M" /> の元すべてと直交する元の集合を直交補空間 <InlineMath math="M^\perp" /> とよぶ。</li>
                    <li><InlineMath math="M^\perp" /> は元の <InlineMath math="M" /> の形状に関わらず常にヒルベルト空間の閉部分空間である。</li>
                    <li>常に <InlineMath math="M \subset (M^\perp)^\perp" /> が成り立ち、<InlineMath math="M" /> が閉部分空間であれば両者は一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
