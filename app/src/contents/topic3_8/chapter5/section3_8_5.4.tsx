import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Automorphisms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                群 <InlineMath math="G" /> から自分自身への同型写像を「自己同型」と呼びます。
                驚くべきことに、ある群 <InlineMath math="G" /> のすべての自己同型を集めた集合もまた、写像の合成を演算として一つの「群」を形成します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">自己同型群の定義</h2>

            <ContentBox type="definition" title="Definition 5.4-1 (自己同型群)">
                <p>
                    群 <InlineMath math="G" /> に対し、自己同型写像の全体
                    <BlockMath math="\mathrm{Aut}(G) = \{ \phi: G \xrightarrow{\sim} G \}" />
                    は、写像の合成 <InlineMath math="\circ" /> を演算として群をなす。これを <InlineMath math="G" /> の<b>自己同型群 (Automorphism group)</b> という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                どのような群にも、必ず「自分自身の共役をとる」という自然な自己同型が存在します。これが内部自己同型です。
            </p>

            <ContentBox type="definition" title="Definition 5.4-2 (内部自己同型)">
                <p>
                    各 <InlineMath math="g \in G" /> に対し、写像 <InlineMath math="\mathrm{inn}_g: G \to G" /> を
                    <BlockMath math="\mathrm{inn}_g(x) = gxg^{-1}" />
                    で定める。この <InlineMath math="\mathrm{inn}_g" /> は自己同型写像であり、これを <b><InlineMath math="g" /> による内部自己同型 (Inner automorphism)</b> という。
                    内部自己同型の全体を <InlineMath math="\mathrm{Inn}(G)" /> と記す。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内部自己同型と中心の深い関係</h2>

            <p className="leading-relaxed">
                内部自己同型の全体は、自己同型群全体の正規部分群となります。また、どの元が同じ内部自己同型を表すかは、群の中心 <InlineMath math="Z(G)" /> によって決まります。
            </p>

            <ContentBox type="proposition" title="Proposition 5.4-1 (Inn(G) の性質)">
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><InlineMath math="\mathrm{Inn}(G) \trianglelefteq \mathrm{Aut}(G)" /> である。</li>
                    <li>
                        群 <InlineMath math="G" /> から <InlineMath math="\mathrm{Inn}(G)" /> への写像 <InlineMath math="g \mapsto \mathrm{inn}_g" /> は全射準同型であり、
                        その核は中心 <InlineMath math="Z(G)" /> と一致する。
                    </li>
                    <li className="font-semibold">
                        同型 <InlineMath math="\mathrm{Inn}(G) \cong G/Z(G)" /> が成り立つ。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <b>準同型性</b>：<br />
                        写像 <InlineMath math="f: G \to \mathrm{Inn}(G)" /> を <InlineMath math="f(g) = \mathrm{inn}_g" /> と定める。
                        任意の <InlineMath math="g, h, x \in G" /> に対して、
                        <BlockMath math="\begin{aligned} \mathrm{inn}_{gh}(x) &= (gh)x(gh)^{-1} = g(hxh^{-1})g^{-1} \\ &= \mathrm{inn}_g(\mathrm{inn}_h(x)) = (\mathrm{inn}_g \circ \mathrm{inn}_h)(x) \end{aligned}" />
                        となる。したがって <InlineMath math="\mathrm{inn}_{gh} = \mathrm{inn}_g \circ \mathrm{inn}_h" /> であり、<InlineMath math="f" /> は準同型である。
                    </li>
                    <li>
                        <b>核が Z(G) であること</b>：<br />
                        <InlineMath math="\mathrm{inn}_g" /> が単位元（恒等写像 <InlineMath math="\mathrm{id}_G" />）になる条件を調べる。
                        <InlineMath math="\mathrm{inn}_g = \mathrm{id}_G" /> とは、任意の <InlineMath math="x \in G" /> に対して <InlineMath math="gxg^{-1} = x" />、すなわち <InlineMath math="gx = xg" /> が成り立つことと同値である。
                        これは <InlineMath math="g" /> が中心 <InlineMath math="Z(G)" /> に属することの定義そのものである。
                    </li>
                    <li>
                        <b>同型</b>：<br />
                        <InlineMath math="f" /> は定義より全射であり、核は <InlineMath math="Z(G)" /> である。
                        したがって、第一同型定理（Chapter 6 で詳述）より、同型 <InlineMath math="G/Z(G) \cong \mathrm{Inn}(G)" /> が得られる。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">自己同型群の計算例</h2>

            <ContentBox type="example" title="Example 5.4-1 (巡回群の自己同型)">
                <p>
                    有限巡回群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> の自己同型は、生成元 <InlineMath math="\bar{1}" /> がどの元に移るかによって完全に決まる。
                    <InlineMath math="\phi(\bar{1}) = \bar{k}" /> とすると、<InlineMath math="\phi" /> が全単射であるためには <InlineMath math="\gcd(k, n) = 1" /> が必要十分である。
                </p>
                <BlockMath math="\mathrm{Aut}(\mathbb{Z}/n\mathbb{Z}) \cong (\mathbb{Z}/n\mathbb{Z})^* \quad (\text{既約剰余類群})" />
                <p className="mt-2">
                    自己同型群の位数は、オイラーの <InlineMath math="\phi" /> 関数を用いて <InlineMath math="\phi(n)" /> と表される。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-2 (S3 の自己同型)">
                <p>
                    3次対称群 <InlineMath math="S_3" /> の中心は <InlineMath math="Z(S_3) = \{e\}" /> である。
                    よって、内部自己同型群は <InlineMath math="\mathrm{Inn}(S_3) \cong S_3/\{e\} \cong S_3" /> である。
                    実際には <InlineMath math="\mathrm{Aut}(S_3) = \mathrm{Inn}(S_3) \cong S_3" /> となり、<InlineMath math="S_3" /> のすべての自己同型は共役写像として実現される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>群 <InlineMath math="G" /> の自己同型全体の集合は、自己同型群 <InlineMath math="\mathrm{Aut}(G)" /> となる。</li>
                    <li>共役写像によって定まる内部自己同型群 <InlineMath math="\mathrm{Inn}(G)" /> は、<InlineMath math="G/Z(G)" /> と同型である。</li>
                    <li>自己同型群の構造を調べることは、その群が持つ「対称性」を理解することに他ならない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
