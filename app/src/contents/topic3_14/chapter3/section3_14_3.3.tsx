import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LogicalConsequenceAndValidity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節では「特定の」構造における真偽を考えました。本節では、どんな構造を持ってきても必ず真になる「妥当式」と、仮定から論理的に必ず導かれる「意味論的帰結」について考えます。これらが述語論理における「真理」の最終的な定義となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">妥当式と論理的帰結</h2>

            <ContentBox
                type="definition"
                title="Definition 3.3-1 (妥当式)"
            >
                <p>
                    論理式 <InlineMath math="\varphi" /> が、<strong>あらゆるすべての構造 <InlineMath math="\mathcal{M}" /> とすべての付値 <InlineMath math="\sigma" /> に対して充足される</strong>（すなわち常に <InlineMath math="\mathcal{M}, \sigma \models \varphi" /> が成り立つ）とき、<InlineMath math="\varphi" /> を<strong>妥当式（valid formula）</strong>と呼び、
                    <BlockMath math="\models \varphi" />
                    と書く。
                </p>
                <p>
                    これは命題論理における「トートロジー（恒真式）」の述語論理版に相当する。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.3-1 (妥当式の例)"
            >
                <p>
                    以下の論理式は、どんな集合や関数・関係を解釈として選ぼうとも、意味論の定義から必然的に真となるため妥当式である。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>反射律：</strong> <InlineMath math="\forall x\,(x = x)" /> <br/><span className="text-sm text-gray-500">（等号は常に「同じ元である」こととして解釈されるため）</span></li>
                    <li><strong>全称例化：</strong> <InlineMath math="\forall x\,P(x) \to P(c)" /> <br/><span className="text-sm text-gray-500">（「すべての元で <InlineMath math="P" /> が成り立つ」ならば、「特定の元 <InlineMath math="c" /> でも <InlineMath math="P" /> が成り立つ」のは明らか）</span></li>
                    <li><strong>命題論理的妥当式：</strong> <InlineMath math="\forall x\,P(x) \lor \neg\forall x\,P(x)" /> <br/><span className="text-sm text-gray-500">（排中律の形をしているため、<InlineMath math="P" /> の意味によらず真）</span></li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                数学の定理は通常「無条件に真」なわけではなく、「ある公理系（群の公理など）を仮定すれば真」という形をしています。これを表現するのが「論理的帰結」です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.3-2 (論理的帰結 / 意味論的帰結)"
            >
                <p>
                    <InlineMath math="T" /> を文の集合（理論、公理系）、<InlineMath math="\varphi" /> を文とする。
                </p>
                <p>
                    <InlineMath math="T" /> に含まれるすべての文が真となるような<strong>あらゆる構造 <InlineMath math="\mathcal{M}" /> において、例外なく <InlineMath math="\varphi" /> も真となる</strong>とき、「<InlineMath math="\varphi" /> は <InlineMath math="T" /> の<strong>論理的帰結（logical consequence）</strong>である」または「<InlineMath math="\varphi" /> は <InlineMath math="T" /> から意味論的に導かれる」といい、
                    <BlockMath math="T \models \varphi" />
                    と書く。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">反例によるモデル理論的論証</h2>

            <p className="leading-relaxed">
                ある主張 <InlineMath math="\varphi" /> が公理系 <InlineMath math="T" /> から「導かれない（<InlineMath math="T \not\models \varphi" />）」ことを示すにはどうすればよいでしょうか？
                定義に従えば、「<InlineMath math="T" /> を満たすが、<InlineMath math="\varphi" /> は満たさない」ような具体的な構造（<strong>反例モデル</strong>）を一つ作って見せればよいのです。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 3.3-2 (<InlineMath math="T \not\models \varphi" /> の示し方)</span>}
            >
                <p>
                    順序の公理系として、<InlineMath math="T = \{\forall x\,\exists y\,(x < y)\}" /> （上界が存在しない）を考える。
                    結論として <InlineMath math="\varphi \equiv \exists y\,\forall x\,(x < y)" /> （全体の上界、すなわち最大元が存在する）が <InlineMath math="T" /> から導かれるか（<InlineMath math="T \models \varphi" /> か）を問う。
                </p>
                <p>
                    直感的に導かれないことは明らかだが、これを厳密に証明するには反例モデルを提示する。
                    構造 <InlineMath math="\mathcal{M} = (\mathbb{Z}, <)" /> （整数全体と通常の大小関係）を考える。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="\mathcal{M} \models T" /> である。なぜなら、任意の整数 <InlineMath math="x" /> には <InlineMath math="x+1" /> というより大きな整数が存在するからである。</li>
                    <li><InlineMath math="\mathcal{M} \not\models \varphi" /> である。なぜなら、すべての整数より大きな単一の整数は存在しないからである。</li>
                </ol>
                <p>
                    したがって、「<InlineMath math="T" /> が真で <InlineMath math="\varphi" /> が偽」となる構造が存在したため、定義により <InlineMath math="T \not\models \varphi" /> が証明された。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="モデル理論の視点"
            >
                <p>
                    「<InlineMath math="T \models \varphi" /> を示すには、抽象的な論証によってすべてのモデルで真であることを示す」のに対し、「<InlineMath math="T \not\models \varphi" /> を示すには、具体的な反例モデルを一つ構成する」という非対称性があります。
                </p>
                <p>
                    この「論理式の反証のために都合のよいモデルを人工的に作り出す」という技法は、数理論理学の主要分野である<strong>モデル理論（model theory）</strong>の核心的なアプローチです。後の章で学ぶ「スコーレムのパラドックス」や「非標準モデル」も、この技法の鮮やかな応用例です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>どんな構造でも常に真となる論理式を<strong>妥当式（<InlineMath math="\models \varphi" />）</strong>という。</li>
                    <li>公理系 <InlineMath math="T" /> を満たすどんな構造でも必ず <InlineMath math="\varphi" /> が真になるとき、<InlineMath math="\varphi" /> は <InlineMath math="T" /> の<strong>論理的帰結（<InlineMath math="T \models \varphi" />）</strong>であるという。</li>
                    <li><InlineMath math="T \not\models \varphi" /> を示すには、<InlineMath math="T" /> を満たして <InlineMath math="\varphi" /> を満たさない反例モデルを一つ構成すればよい。</li>
                </ul>
            </ContentBox>
        </section>
    );
}