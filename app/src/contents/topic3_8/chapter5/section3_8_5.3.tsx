import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Isomorphisms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                2つの群が、たとえ記号や演算の定義が異なっていても、「数学的な構造が全く同じ」である場合があります。
                この「構造の同一視」を数学的に厳密に定義するのが、同型写像という概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同型写像と同型</h2>

            <ContentBox type="definition" title="Definition 5.3-1 (同型写像)">
                <p>
                    2つの群 <InlineMath math="G, G'" /> に対し、全単射（1対1の対応）である準同型写像 <InlineMath math="\phi: G \to G'" /> を<b>同型写像 (Isomorphism)</b> という。
                    <InlineMath math="G" /> から <InlineMath math="G'" /> への同型写像が存在するとき、<InlineMath math="G" /> と <InlineMath math="G'" /> は<b>同型 (Isomorphic)</b> であるといい、<InlineMath math="G \cong G'" /> と記す。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 5.3-1 (同型の性質)">
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>同型写像 <InlineMath math="\phi" /> の逆写像 <InlineMath math="\phi^{-1}: G' \to G" /> もまた同型写像である。</li>
                    <li>同型関係 <InlineMath math="\cong" /> は群の集合における同値関係（反射律、対称律、推移律）を満たす。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <b>逆写像の同型性</b>：<br />
                        <InlineMath math="\phi: G \to G'" /> を同型写像とすると、<InlineMath math="\phi" /> は全単射なので逆写像 <InlineMath math="\phi^{-1}: G' \to G" /> が存在する。
                        任意の <InlineMath math="a', b' \in G'" /> に対し、ある <InlineMath math="a, b \in G" /> を用いて <InlineMath math="a' = \phi(a), b' = \phi(b)" /> と書ける。
                        <InlineMath math="\phi(ab) = \phi(a)\phi(b) = a'b'" /> より、
                        <BlockMath math="\begin{aligned} \phi^{-1}(a'b') &= \phi^{-1}(\phi(ab)) \\ &= ab = \phi^{-1}(a')\phi^{-1}(b') \end{aligned}" />
                        となり、<InlineMath math="\phi^{-1}" /> も準同型である。全単射の逆写像は全単射なので、<InlineMath math="\phi^{-1}" /> は同型写像である。
                    </li>
                    <li>
                        <b>同値関係</b>：<br />
                        <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                            <li>
                                <b>反射律</b>：恒等写像 <InlineMath math="\mathrm{id}_G: G \to G" /> は全単射かつ準同型（<InlineMath math="\mathrm{id}_G(ab) = ab = \mathrm{id}_G(a)\mathrm{id}_G(b)" />）なので同型写像である。よって <InlineMath math="G \cong G" />。
                            </li>
                            <li>
                                <b>対称律</b>：<InlineMath math="G \cong G'" /> ならば同型写像 <InlineMath math="\phi" /> が存在し、上記より逆写像 <InlineMath math="\phi^{-1}" /> も同型写像となる。よって <InlineMath math="G' \cong G" />。
                            </li>
                            <li>
                                <b>推移律</b>：<InlineMath math="\phi: G \to G'" /> と <InlineMath math="\psi: G' \to G''" /> が同型写像なら、合成 <InlineMath math="\psi \circ \phi: G \to G''" /> も全単射かつ
                                <BlockMath math="\begin{aligned} (\psi \circ \phi)(ab) &= \psi(\phi(ab)) = \psi(\phi(a)\phi(b)) \\ &= \psi(\phi(a))\psi(\phi(b)) = (\psi \circ \phi)(a)(\psi \circ \phi)(b) \end{aligned}" />
                                より準同型。よって <InlineMath math="G \cong G''" />。
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同型の例</h2>

            <p className="leading-relaxed">
                見た目が全く異なる群であっても、同型写像によって結ばれていることがあります。
            </p>

            <ContentBox type="example" title="Example 5.3-1 (同型の例)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>実数の加法と正の実数の乗法</b>：<br />
                        <InlineMath math="(\mathbb{R}, +)" /> から <InlineMath math="(\mathbb{R}_{>0}, \cdot)" /> への写像 <InlineMath math="\phi(x) = e^x" /> は、
                        <InlineMath math="e^{x+y} = e^x e^y" /> より準同型かつ全単射である。
                        よって <InlineMath math="(\mathbb{R}, +) \cong (\mathbb{R}_{>0}, \cdot)" /> である。
                    </li>
                    <li>
                        <b>中国剰余定理</b>：<br />
                        <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> と <InlineMath math="\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}" /> は同型である。
                        写像 <InlineMath math="k \bmod 6 \mapsto (k \bmod 2, k \bmod 3)" /> はウェルディファインドな同型写像を与える。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">非同型の判定基準</h2>

            <p className="leading-relaxed">
                2つの群が「同型でない」ことを示すには、群の構造によって定まる性質（不変量）の違いを指摘します。
            </p>

            <ContentBox type="example" title="Example 5.3-2 (非同型の判定)">
                <ul className="list-disc list-inside space-y-1 mt-4">
                    <li>
                        <b>位数の分布の違い</b>：<br />
                        <InlineMath math="\mathbb{Z}/4\mathbb{Z}" />（位数 4 の巡回群）と <InlineMath math="\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}" />（クラインの 4 群）を考える。
                        前者は位数 4 の元を持つが、後者の元はすべて位数 1 または 2 である。
                        同型写像は元の位数を保存するため、これらは同型ではない。
                    </li>
                    <li className="mt-2">
                        <b>可換性の違い</b>：<br />
                        <InlineMath math="S_3" />（位数 6）と <InlineMath math="\mathbb{Z}/6\mathbb{Z}" />（位数 6）を考える。
                        前者は非可換、後者は可換である。可換性は同型で保存される性質なので、これらは同型ではない。
                    </li>
                </ul>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>全単射な準同型を同型写像、群の性質が同一視できる状態を同型という。</li>
                    <li>同型な群は、その元をどのように名付けても構造的には全く同じ挙動を示す。</li>
                    <li>非同型を証明するには、可換性や各元の位数などの不変量の違いを探すのが定石である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
