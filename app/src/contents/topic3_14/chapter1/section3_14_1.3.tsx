import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InferenceRulesAndProofSystems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは「真理値」という意味論の立場から論理を考えてきました。しかし、数学の証明は真理表をすべて計算して行われるわけではありません。既知の事実から規則に従って記号を操作し、新たな事実を導く「構文論的」な推論を行います。この章では、その形式的な証明体系を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">推論規則</h2>

            <p className="leading-relaxed">
                前提から結論を導くためのルールを推論規則と呼びます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.3-1 (推論規則と証明可能性)"
            >
                <p>
                    <strong>推論規則（inference rule）</strong>とは、前提となる一つ以上の論理式から、結論となる論理式を機械的な記号操作によって導くための規則である。
                </p>
                <p>
                    ある論理式の集合（仮定）<InlineMath math="\Gamma" /> と推論規則から出発して、有限回の規則適用により論理式 <InlineMath math="\varphi" /> を導くことができるとき、<InlineMath math="\varphi" /> は <InlineMath math="\Gamma" /> から<strong>証明可能（provable）</strong>であるといい、
                    <BlockMath math="\Gamma \vdash \varphi" />
                    と表記する（この <InlineMath math="\vdash" /> をターンスタイルと呼ぶ）。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                命題論理において最も重要かつ代表的な推論規則が「モーダスポネンス」です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.3-2 (モーダスポネンス)"
            >
                <p>
                    <InlineMath math="\varphi" /> と <InlineMath math="\varphi \to \psi" /> という2つの論理式が与えられたとき、そこから <InlineMath math="\psi" /> を結論として導く推論規則を<strong>モーダスポネンス（Modus Ponens, 前件肯定式）</strong>といい、しばしば MP と略記される。
                </p>
                <p>
                    これは一般に次のように分数のような形式で表記される（上が前提、下が結論）。
                    <BlockMath math="\frac{\varphi \quad \varphi \to \psi}{\psi}" />
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.3-1 (モーダスポネンスの例)"
            >
                <p>
                    日常の推論をこの規則に当てはめてみる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>前提1 (<InlineMath math="\varphi" />):「今日は雨が降っている」</li>
                    <li>前提2 (<InlineMath math="\varphi \to \psi" />):「雨が降っていれば、地面が濡れる」</li>
                </ul>
                <p>
                    この2つが正しいと認められた場合、MP を適用することで、純粋に形式的な操作として
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>結論 (<InlineMath math="\psi" />): 「地面が濡れている」</li>
                </ul>
                <p>
                    を導くことができる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ヒルベルト流公理体系</h2>

            <p className="leading-relaxed">
                推論規則と、無条件に証明可能として受け入れる出発点（公理）のセットを「証明体系」と呼びます。ここでは、分析が容易な「ヒルベルト流」の体系を紹介します。
            </p>

            <ContentBox
                type="axiom"
                title="Axiom 1.3-1 (ヒルベルト流公理体系)"
            >
                <p>
                    命題論理の<strong>ヒルベルト流公理体系（Hilbert-style deductive system）</strong>は、推論規則をモーダスポネンス (MP) のみとし、以下の3つの公理スキーマを無条件の前提として採用する体系である。（<InlineMath math="\varphi, \psi, \chi" /> は任意の論理式）
                </p>
                <ol className="list-none space-y-2 mt-2 pl-4">
                    <li><strong>(H1)</strong> <InlineMath math="\varphi \to (\psi \to \varphi)" /></li>
                    <li><strong>(H2)</strong> <InlineMath math="(\varphi \to (\psi \to \chi)) \to ((\varphi \to \psi) \to (\varphi \to \chi))" /></li>
                    <li><strong>(H3)</strong> <InlineMath math="(\neg\varphi \to \neg\psi) \to (\psi \to \varphi)" /></li>
                </ol>
                <p>
                    （これらは特定の式ではなく、どんな論理式を代入しても公理として使える「型（スキーマ）」である。）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この極めて少ないルールだけを使って、一見当たり前に思える <InlineMath math="\varphi \to \varphi" /> という式を「証明」してみましょう。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 1.3-2 (形式証明の例：<InlineMath math="\vdash \varphi \to \varphi" />)</span>}
            >
                <p>
                    仮定なしで <InlineMath math="\varphi \to \varphi" /> を導出する手順（証明列）を示す。各行は公理であるか、前の行に MP を適用したものである。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="\varphi \to ((\varphi \to \varphi) \to \varphi)" /> <br /><span className="text-sm text-gray-500">（公理 (H1) で <InlineMath math="\psi" /> に <InlineMath math="\varphi \to \varphi" /> を代入）</span></li>
                    <li><InlineMath math="(\varphi \to ((\varphi \to \varphi) \to \varphi)) \to ((\varphi \to (\varphi \to \varphi)) \to (\varphi \to \varphi))" /> <br /><span className="text-sm text-gray-500">（公理 (H2) で <InlineMath math="\psi" /> に <InlineMath math="\varphi \to \varphi" />、<InlineMath math="\chi" /> に <InlineMath math="\varphi" /> を代入）</span></li>
                    <li><InlineMath math="(\varphi \to (\varphi \to \varphi)) \to (\varphi \to \varphi)" /> <br /><span className="text-sm text-gray-500">（行 1 と行 2 に MP を適用）</span></li>
                    <li><InlineMath math="\varphi \to (\varphi \to \varphi)" /> <br /><span className="text-sm text-gray-500">（公理 (H1) で <InlineMath math="\psi" /> に <InlineMath math="\varphi" /> を代入）</span></li>
                    <li><InlineMath math="\varphi \to \varphi" /> <br /><span className="text-sm text-gray-500">（行 4 と行 3 に MP を適用）</span></li>
                </ol>
                <p>
                    以上により、純粋な記号操作のみで <InlineMath math="\vdash \varphi \to \varphi" /> が証明された。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="証明体系の意図"
            >
                <p>
                    上記の証明を見て、「当たり前のことを証明するのに、なぜこんなに面倒なパズルを解かなければならないのか？」と感じたかもしれません。
                </p>
                <p>
                    ヒルベルト流体系の目的は、人間が証明を書きやすくすること<strong>ではありません</strong>。公理と規則の種類を極限まで減らすことで、「この体系で証明可能なものはどのような性質を持つか」というメタ数学的な定理（次節の健全性や完全性）を証明しやすくするための設計なのです。人間が直感的に証明しやすい体系としては、Chapter 4 で学ぶ「自然演繹」があります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>記号操作によって前提から結論を導く規則を推論規則といい、導かれたことを <InlineMath math="\vdash" />（証明可能）で表す。</li>
                    <li>最も基本的な推論規則が、<InlineMath math="\varphi" /> と <InlineMath math="\varphi \to \psi" /> から <InlineMath math="\psi" /> を導くモーダスポネンス（MP）である。</li>
                    <li>ヒルベルト流公理体系は、3つの公理スキーマと MP だけで構成された、分析のための極小の証明体系である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}