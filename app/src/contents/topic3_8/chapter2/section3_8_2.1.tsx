import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SubgroupsDefinitionAndCriteria() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                群 <InlineMath math="G" /> の部分集合が、それ自身もまた同じ演算で群をなしているとき、それを「部分群」と呼びます。
                部分集合が群であるかどうかを効率的に判定するための手法を学びましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分群の定義と判定法</h2>

            <ContentBox type="definition" title="Definition 2.1-1 (部分群)">
                <p>
                    群 <InlineMath math="(G, \cdot)" /> の部分集合 <InlineMath math="H \subset G" /> が、<InlineMath math="G" /> の演算に関して群をなすとき、
                    <InlineMath math="H" /> を <InlineMath math="G" /> の<b>部分群 (Subgroup)</b>と呼び、<InlineMath math="H \leq G" /> と表記する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                部分集合が「同じ演算で群をなす」とは、単に集合として含まれているだけでなく、<InlineMath math="G" /> で定義された演算が <InlineMath math="H" /> の中でも完結し、
                群の公理（単位元、逆元の存在など）をすべて満たしていることを意味します。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1 (2条件判定法)">
                <p>
                    空でない部分集合 <InlineMath math="H \subset G" /> が <InlineMath math="G" /> の部分群であるための必要十分条件は、次の 2 条件を満たすことである：
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="a, b \in H \implies ab \in H" /> （演算について閉じている）</li>
                    <li><InlineMath math="a \in H \implies a^{-1} \in H" /> （逆元について閉じている）</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                この判定法は、群の公理のうち結合律が親の群 <InlineMath math="G" /> から自動的に継承されることを利用しています。
                したがって、閉性と逆元の存在のみを確認すれば十分です。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="H" /> が部分群ならば、群の定義より演算および逆元について閉じていることは明らかである。
                    逆に、2条件を満たすとする。
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-2">
                    <li>
                        <b>単位元の存在</b>：
                        <InlineMath math="H \neq \emptyset" /> であるから、ある元 <InlineMath math="a \in H" /> が存在する。
                        条件 (ii) より <InlineMath math="a^{-1} \in H" /> であり、条件 (i) より <InlineMath math="e = aa^{-1} \in H" /> となる。
                    </li>
                    <li>
                        <b>結合律</b>：
                        結合律は親の群 <InlineMath math="G" /> の元としての基本的な性質であるため、その部分集合である <InlineMath math="H" /> の元についても当然成り立つ。
                    </li>
                    <li>
                        <b>逆元の存在と閉性</b>：
                        これらは条件 (i), (ii) そのものである。
                    </li>
                </ul>
                <p className="mt-4">
                    以上より、<InlineMath math="H" /> は群の公理をすべて満たし、部分群となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                さらに、これら 2 つの条件を 1 つにまとめることも可能です。この判定法は計算実務で非常によく使われます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-2 (1条件判定法)">
                <p>
                    空でない部分集合 <InlineMath math="H \subset G" /> が <InlineMath math="G" /> の部分群であるための必要十分条件は、次を満たすことである：
                    <BlockMath math="a, b \in H \implies ab^{-1} \in H" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="H \leq G" /> ならば、<InlineMath math="b \in H \implies b^{-1} \in H" /> であり、閉性より <InlineMath math="ab^{-1} \in H" /> となる。
                    逆に条件が成り立つとき、Proposition 2.1-1 の 2 条件が導かれることを示す。
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-2">
                    <li>
                        <b>単位元と逆元の存在</b>：
                        <InlineMath math="H \neq \emptyset" /> より <InlineMath math="a \in H" /> をとる。
                        条件において <InlineMath math="b = a" /> とすれば、<InlineMath math="e = aa^{-1} \in H" /> が得られる。
                        さらに <InlineMath math="a = e" /> とおけば、任意の <InlineMath math="b \in H" /> に対し <InlineMath math="eb^{-1} = b^{-1} \in H" /> となり、逆元の存在が示される。
                    </li>
                    <li>
                        <b>演算の閉性</b>：
                        <InlineMath math="a, b \in H" /> とする。既に示した通り <InlineMath math="b^{-1} \in H" /> である。
                        ここで条件において「<InlineMath math="b" /> の代わりに <InlineMath math="b^{-1}" />」を用いると、
                        <BlockMath math="a(b^{-1})^{-1} = ab \in H" />
                        となり、演算について閉じていることが示される。
                    </li>
                </ul>
                <p className="mt-4">
                    したがって、Proposition 2.1-1 により <InlineMath math="H" /> は <InlineMath math="G" /> の部分群である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分群の例と非例</h2>

            <p className="leading-relaxed">
                どんな群にも必ず存在する「最も小さな」および「最も大きな」部分群から確認しましょう。
            </p>

            <ContentBox type="note" title="自明な部分群 (Trivial subgroups)">
                <p>
                    任意の群 <InlineMath math="G" /> に対し、以下の 2 つは常に部分群となる。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>集合 <InlineMath math="\{e\}" /> （単位元のみからなる群）</li>
                    <li>群 <InlineMath math="G" /> 自身</li>
                </ul>
                <p className="mt-2 leading-relaxed">
                    これらを <b>自明な部分群</b> と呼ぶ。これら以外の部分群を<b>真部分群 (Proper subgroup)</b> といい、特に <InlineMath math="H \neq G" /> であることを強調するときは <InlineMath math="H < G" /> と記すこともある。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次に、判定法を用いて具体的な部分集合が部分群になるかどうかを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-1 (整数加法群 nℤ)">
                <p>
                    整数加法群 <InlineMath math="(\mathbb{Z}, +)" /> において、<InlineMath math="n" /> の倍数全体の集合 <InlineMath math="n\mathbb{Z} = \{ nk \mid k \in \mathbb{Z} \}" /> は部分群である。
                    実際、<InlineMath math="na, nb \in n\mathbb{Z}" /> に対し、<InlineMath math="na - nb = n(a-b)" /> であり、これは再び <InlineMath math="n" /> の倍数であるため <InlineMath math="n\mathbb{Z}" /> に属する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                行列のように、演算が和ではなく積である場合も同様です。
            </p>

            <ContentBox type="example" title="Example 2.1-2 (特殊線形群 SL_n(ℝ))">
                <p>
                    行列の積を演算とする一般線形群 <InlineMath math="GL_n(\mathbb{R})" /> において、
                    行列式が 1 の行列全体の集合 <InlineMath math="SL_n(\mathbb{R}) = \{ A \in GL_n(\mathbb{R}) \mid \det A = 1 \}" /> は部分群である。
                    <BlockMath math="\det(AB^{-1}) = \det A (\det B)^{-1} = 1 \cdot 1^{-1} = 1" />
                    より、1条件判定法を満たす。また、直交群 <InlineMath math="O_n(\mathbb{R}) = \{ A \in GL_n(\mathbb{R}) \mid AA^T = I \}" /> も同様に部分群をなす。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                一方、一見すると部分群に見えても、公理の一部（特に逆元の存在や閉性）を欠く場合は部分群とは言えません。
            </p>

            <ContentBox type="example" title="Example 2.1-3 (部分群でない例)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>加法の正整数</b>：<InlineMath math="\mathbb{Z}_{>0} \subset \mathbb{Z}" /> は、<InlineMath math="1" /> の逆元 <InlineMath math="-1" /> を含まないため部分群ではない。
                    </li>
                    <li>
                        <b>剰余群の部分集合</b>：<InlineMath math="\{0, 1\} \subset \mathbb{Z}/4\mathbb{Z}" /> は、<InlineMath math="1 + 1 = 2 \notin \{0, 1\}" /> より演算（閉性）について閉じていないため、部分群ではない。
                    </li>
                </ul>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>群 <InlineMath math="G" /> の部分集合 <InlineMath math="H" /> が、同じ演算で群をなすとき部分群（<InlineMath math="H \leq G" />）という。</li>
                    <li>部分群であることの判定には、閉性と逆元の存在（2条件判定法）、あるいはそれらを一枚にまとめた <InlineMath math="ab^{-1} \in H" /> （1条件判定法）を用いる。</li>
                    <li>整数群、行列群、剰余群などにおいて、特定の条件を満たす部分集合がしばしば重要な部分群を構成する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
