import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HilbertStyleAxiomaticSystem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                自然演繹は人間にとって直感的ですが、証明図が「木構造」になるため、メタ定理（システム全体の性質を証明すること）を数学的帰納法で証明する際には扱いが少し面倒になります。そこで、証明が単純な「1列のリスト」になるヒルベルト流の公理体系を述語論理に拡張します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">述語論理のヒルベルト流公理体系</h2>

            <p className="leading-relaxed">
                Chapter 1 で導入した命題論理の公理スキーマに、量化子に関するものを追加します。
            </p>

            <ContentBox
                type="axiom"
                title="Axiom 4.2-1 (述語論理のヒルベルト流公理体系)"
            >
                <p>
                    述語論理の<strong>ヒルベルト流公理体系（Hilbert-style deductive system）</strong>は、命題論理の公理スキーマ (H1)〜(H3) に加えて、以下の量化子に関する公理スキーマを持つ体系である。
                </p>
                <ol className="list-none space-y-4 mt-2 pl-4">
                    <li>
                        <strong>(H4) 全称例化の公理：</strong><br/>
                        <InlineMath math="\forall x\,\varphi \to \varphi[t/x]" /> <br/>
                        <span className="text-sm text-gray-500">（ただし、項 <InlineMath math="t" /> は <InlineMath math="\varphi" /> において <InlineMath math="x" /> に対して自由でなければならない）</span>
                    </li>
                    <li>
                        <strong>(H5) 量化子の分配公理：</strong><br/>
                        <InlineMath math="\forall x\,(\varphi \to \psi) \to (\varphi \to \forall x\,\psi)" /> <br/>
                        <span className="text-sm text-gray-500">（ただし、変数 <InlineMath math="x" /> は <InlineMath math="\varphi" /> の自由変数であってはならない：<InlineMath math="x \notin \mathrm{FV}(\varphi)" />）</span>
                    </li>
                </ol>
                <p>
                    <strong>推論規則：</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>モーダスポネンス（MP）：</strong> <InlineMath math="\varphi" /> と <InlineMath math="\varphi \to \psi" /> から <InlineMath math="\psi" /> を導く。</li>
                    <li><strong>一般化規則（Generalization, Gen）：</strong> <InlineMath math="\varphi" /> から <InlineMath math="\forall x\,\varphi" /> を導く。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.2-1 (ヒルベルト流での全称例化の証明)"
            >
                <p>
                    前節の自然演繹の例で扱った <InlineMath math="\vdash \forall x\,P(x) \to P(c)" /> の証明を考える。
                </p>
                <p>
                    ヒルベルト流では、これは単に公理スキーマ (H4) において <InlineMath math="\varphi" /> を <InlineMath math="P(x)" />、項 <InlineMath math="t" /> を定数 <InlineMath math="c" /> とした<strong>公理そのもの</strong>である。
                </p>
                <p>
                    したがって、証明は単に1行
                    <BlockMath math="\forall x\,P(x) \to P(c)" />
                    を書くだけで完了する。
                    自然演繹のように仮定を立てて除去・導入を行ったりする手間はない。ヒルベルト流は「推論の複雑さ」を「公理の複雑さ」に押し込めている体系だと言える。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">自然演繹とヒルベルト流の同値性</h2>

            <p className="leading-relaxed">
                見た目も使い勝手も全く異なる2つの体系ですが、論理的な証明能力（何が証明できるか）は完全に等しいことが示されます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 4.2-1 (証明体系の同値性)"
            >
                <p>
                    仮定の集合 <InlineMath math="\Gamma" /> と論理式 <InlineMath math="\varphi" /> について、自然演繹で証明可能であること（<InlineMath math="\vdash_{\mathrm{ND}}" />）と、ヒルベルト流で証明可能であること（<InlineMath math="\vdash_{\mathrm{H}}" />）は同値である。
                    <BlockMath math="\Gamma \vdash_{\mathrm{ND}} \varphi \iff \Gamma \vdash_{\mathrm{H}} \varphi" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概略)"
            >
                <p>
                    両方向の帰納的な変換によって証明する。
                </p>
                <p>
                    <strong><InlineMath math="\Rightarrow" />（自然演繹の証明木をヒルベルト流の証明列に変換）：</strong><br/>
                    自然演繹の各推論規則が、ヒルベルト流において有限の証明列でシミュレートできることを示す。例えば、ND の <InlineMath math="\to" />-導入規則（仮定の解放）は、ヒルベルト流における<strong>演繹定理（Deduction Theorem）</strong>「<InlineMath math="\Gamma \cup \{\varphi\} \vdash \psi \implies \Gamma \vdash \varphi \to \psi" />」によって正当化される。
                </p>
                <p>
                    <strong><InlineMath math="\Leftarrow" />（ヒルベルト流の証明列を自然演繹の証明木に変換）：</strong><br/>
                    ヒルベルト流の各公理スキーマ (H1)〜(H5) が自然演繹で証明可能（証明木を持つ）であることを示す（Example 4.1-2 で (H4) を示したように）。推論規則 MP と Gen についても、自然演繹の <InlineMath math="\to" />-除去と <InlineMath math="\forall" />-導入でそのままシミュレートできる。
                </p>
                <p>
                    これにより、一方で作られた証明は他方の形式へと完全に機械的翻訳が可能であることがわかる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="証明体系の使い分け"
            >
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>
                        <strong>ヒルベルト流：</strong> 公理の数は無限（スキーマ）だが、規則は MP だけであり証明が単純なリストになる。そのため「証明全体の性質（健全性や完全性など）」を数学的帰納法で証明するのに極めて適している。
                    </li>
                    <li>
                        <strong>自然演繹：</strong> 規則は多いが、人間の直感に近く実際に特定の定理を証明しやすい。「カット除去定理」や「正規化」といった証明自体の構造を分析する証明論的な研究に向いている。
                    </li>
                </ul>
                <p>
                    数学基礎論では、目的（メタ定理の証明か、具体的な演繹か）に応じてこれらを使い分けます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>述語論理の<strong>ヒルベルト流公理体系</strong>は、命題論理の公理に量化子の公理 (H4, H5) を加えたものである。</li>
                    <li>直感的な「自然演繹」と形式的な「ヒルベルト流」は、<strong>証明能力において完全に同値</strong>である。</li>
                    <li>ヒルベルト流はメタ定理の証明に、自然演繹は実際の証明構成や証明構造の分析に有利という特徴がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}