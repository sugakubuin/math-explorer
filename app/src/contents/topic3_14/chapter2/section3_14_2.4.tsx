import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SentencesAndTheories() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに定義した「論理式」の中には、自由変数を含むもの（「<InlineMath math="x > 5" />」のように代入される値によって真偽が変わるもの）と、含まないもの（「<InlineMath math="\forall x(x=x)" />」のようにそれ自体で完結して真偽が定まるもの）がありました。数学の定理や公理として意味を持つのは後者です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">文と理論の定義</h2>

            <ContentBox
                type="definition"
                title="Definition 2.4-1 (文)"
            >
                <p>
                    自由変数を一つも持たない論理式（すなわち <InlineMath math="\mathrm{FV}(\varphi) = \emptyset" />）を、<strong>文（sentence）</strong>と呼ぶ。閉論理式（closed formula）ともいう。
                </p>
                <p>
                    文は、具体的な構造（モデル）が与えられれば、変数への具体的な値の割り当て（付値）に依存することなく、その構造において「真」か「偽」かが一意に定まる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ある数学の分野（例えば群論、幾何学、集合論など）を形式的に表現するには、その分野の「公理」となる文の集まりを用意します。これを「理論」と呼びます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.4-2 (理論)"
            >
                <p>
                    ある言語 <InlineMath math="\mathcal{L}" /> における文の集合 <InlineMath math="T" /> を、<strong>理論（theory）</strong>と呼ぶ。
                </p>
                <p>
                    多くの場合、<InlineMath math="T" /> はある数学的構造を特徴づける「公理系」として用いられる。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.4-1 (理論の具体例：群論の公理)"
            >
                <p>
                    言語 <InlineMath math="\mathcal{L}_{\mathrm{Grp}} = \{e, \cdot\}" /> （<InlineMath math="e" /> は定数記号、<InlineMath math="\cdot" /> は2引数関数記号）のもとで、群論の公理系を表す理論 <InlineMath math="T_{\mathrm{Grp}}" /> は以下の3つの文からなる。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>結合律： <InlineMath math="\forall x\,\forall y\,\forall z\,((x \cdot y) \cdot z = x \cdot (y \cdot z))" /></li>
                    <li>左単位元の存在： <InlineMath math="\forall x\,(e \cdot x = x)" /></li>
                    <li>左逆元の存在： <InlineMath math="\forall x\,\exists y\,(y \cdot x = e)" /></li>
                </ol>
                <p>
                    これらの文だけを出発点（仮定）として形式的な証明操作を行うことで、例えば「右単位元でもあること」すなわち <InlineMath math="\forall x\,(x \cdot e = x)" /> を定理として導き出す（<InlineMath math="T_{\mathrm{Grp}} \vdash \forall x\,(x \cdot e = x)" />）ことができる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">無矛盾性と完全性</h2>

            <p className="leading-relaxed">
                理論（公理系）を立てたとき、最も重要なのが「その公理系から矛盾が導かれないか」という性質です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.4-3 (無矛盾理論)"
            >
                <p>
                    理論 <InlineMath math="T" /> が<strong>無矛盾（consistent）</strong>であるとは、<InlineMath math="T" /> から矛盾（<InlineMath math="\bot" />、例えば <InlineMath math="\varphi \land \neg\varphi" />）を証明できないこと、すなわち <InlineMath math="T \nvdash \bot" /> が成り立つことをいう。
                </p>
                <p>
                    後に学ぶ完全性定理により、無矛盾であることは「その理論の公理をすべて満たすような数学的構造（モデル）が少なくとも1つ存在する」ことと同値になる。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.4-2 (無矛盾性の判定)"
            >
                <p>
                    群論の公理 <InlineMath math="T_{\mathrm{Grp}}" /> は無矛盾である。なぜなら、整数全体 <InlineMath math="\mathbb{Z}" /> と通常の足し算 <InlineMath math="+" /> を考えれば、これは明らかに群の公理を満たす（モデルが存在する）ため、矛盾を導くことはあり得ないからである。
                </p>
                <p>
                    一方で、<InlineMath math="T_{\mathrm{Grp}}" /> に以下の2つの公理を不注意に追加した理論 <InlineMath math="T'" /> を考えてみる。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="\forall x\,(x = e)" /> （単位元しか存在しない：自明な群）</li>
                    <li><InlineMath math="\exists x\,(x \neq e)" /> （単位元以外の元が存在する）</li>
                </ul>
                <p>
                    この2つは明らかに真っ向から対立している。この理論 <InlineMath math="T'" /> からは形式的証明によって矛盾（<InlineMath math="\bot" />）が導出可能であり、したがって <InlineMath math="T'" /> は<strong>矛盾した（inconsistent）</strong>理論である。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>自由変数を持たず、それ単独で真偽が定まる論理式を<strong>文</strong>と呼ぶ。</li>
                    <li>文の集合を<strong>理論</strong>と呼び、特定の数学分野の「公理系」として扱う。</li>
                    <li>理論から矛盾が証明できない（<InlineMath math="T \nvdash \bot" />）とき、その理論は<strong>無矛盾</strong>であるという。公理系を定式化する際の絶対的な最低条件である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}