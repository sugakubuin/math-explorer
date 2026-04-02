import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AxiomsOfCategory() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに群論、環論、位相空間論など様々な分野を学んできましたが、これらはすべて「集合と、その上の構造（演算や位相）、そして構造を保つ写像（準同型や連続写像）」という共通の枠組みを持っています。圏論（Category Theory）は、対象の「中身（要素）」ではなく、対象同士の「関係性（写像）」のみに注目して、数学のあらゆる構造を統一的に記述するための言語です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">圏の定義</h2>

            <p className="leading-relaxed">
                まず、「対象」と「射（矢印）」からなる基本的な舞台である「圏」を定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-1 (圏)"
            >
                <p>
                    <strong>圏（Category）</strong> <InlineMath math="\mathcal{C}" /> は、以下のデータと規則から構成される。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <strong>対象（object）の集まり：</strong> <InlineMath math="\mathrm{Ob}(\mathcal{C})" /> で表す。対象を通常 <InlineMath math="A, B, X, Y" /> などと書く。
                    </li>
                    <li>
                        <strong>射（morphism）の集合：</strong> 任意の2つの対象 <InlineMath math="A, B" /> に対して、<InlineMath math="A" /> から <InlineMath math="B" /> への射の集合が存在し、これを <InlineMath math="\mathrm{Hom}_{\mathcal{C}}(A, B)" /> と書く。<InlineMath math="f \in \mathrm{Hom}_{\mathcal{C}}(A, B)" /> であることを <InlineMath math="f : A \to B" /> とも表記する。
                    </li>
                    <li>
                        <strong>合成（composition）：</strong> 任意の3対象 <InlineMath math="A, B, C" /> に対して、射の合成を与える写像が存在する。
                        <BlockMath math="\circ : \mathrm{Hom}(B, C) \times \mathrm{Hom}(A, B) \to \mathrm{Hom}(A, C)" />
                        すなわち、<InlineMath math="f : A \to B" /> と <InlineMath math="g : B \to C" /> に対して、合成された射 <InlineMath math="g \circ f : A \to C" /> が定まる。
                    </li>
                    <li>
                        <strong>恒等射（identity morphism）：</strong> 各対象 <InlineMath math="A" /> に対して、特別な射 <InlineMath math="\mathrm{id}_A \in \mathrm{Hom}(A, A)" /> が必ず1つ存在する。
                    </li>
                </ol>
                <p>
                    さらに、これらは以下の2つの公理を満たさなければならない。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <strong>結合律（Associativity）：</strong> 任意の <InlineMath math="f : A \to B" />, <InlineMath math="g : B \to C" />, <InlineMath math="h : C \to D" /> に対して、
                        <BlockMath math="(h \circ g) \circ f = h \circ (g \circ f)" />
                    </li>
                    <li>
                        <strong>単位律（Identity law）：</strong> 任意の <InlineMath math="f : A \to B" /> に対して、
                        <BlockMath math="\mathrm{id}_B \circ f = f \quad \text{かつ} \quad f \circ \mathrm{id}_A = f" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 1.1-1 (集合の圏 <InlineMath math="\mathbf{Set}" />)</span>}
            >
                <p>
                    最も基本的で重要な圏が、集合と写像からなる圏 <strong><InlineMath math="\mathbf{Set}" /></strong> である。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>対象：</strong> すべての（小さな）集合。</li>
                    <li><strong>射：</strong> <InlineMath math="A" /> から <InlineMath math="B" /> への射は、通常の写像 <InlineMath math="f : A \to B" />。したがって <InlineMath math="\mathrm{Hom}(A, B)" /> は <InlineMath math="A" /> から <InlineMath math="B" /> への写像全体の集合である。</li>
                    <li><strong>合成：</strong> 写像の通常の合成。</li>
                    <li><strong>恒等射：</strong> 各集合 <InlineMath math="A" /> に対する恒等写像 <InlineMath math="\mathrm{id}_A(x) = x" />。</li>
                </ul>
                <p>
                    写像の合成は結合法則を満たし、恒等写像は合成の単位元として振る舞うため、<InlineMath math="\mathbf{Set}" /> は明らかに圏の公理を満たす。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="「集まり」と「集合」の区別について"
            >
                <p>
                    Definition 1.1-1 で対象の全体を「集合」ではなく意図的に「集まり（collection）」と呼びました。
                    これは Topic 3-14（数学基礎論）で学んだように、「すべての集合を集めたもの」はラッセルのパラドックスを引き起こすため、ZF公理系において「集合」として扱えず「真クラス（proper class）」となるからです。
                </p>
                <p>
                    そこで、圏論では以下の2つを厳密に区別します。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>局所小圏（locally small category）：</strong> <InlineMath math="\mathrm{Ob}(\mathcal{C})" /> は真クラスだが、各 <InlineMath math="A, B" /> 間の射の全体 <InlineMath math="\mathrm{Hom}(A, B)" /> は必ず「集合」になっている圏。<InlineMath math="\mathbf{Set}" /> や群の圏 <InlineMath math="\mathbf{Grp}" /> など、通常の数学で現れる圏のほとんどはこれです。</li>
                    <li><strong>小圏（small category）：</strong> 射だけでなく、対象の全体 <InlineMath math="\mathrm{Ob}(\mathcal{C})" /> も「集合」であるような小さな圏。</li>
                </ul>
                <p>
                    本コース（および通常の数学）で扱う圏は、特に断りがない限り「局所小圏」を指します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">結合律と単位律の確認</h2>

            <p className="leading-relaxed">
                群論の単位元が一意であったのと同様に、圏における恒等射も、公理からその一意性が証明できます。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 1.1-1 (恒等射の一意性)"
            >
                <p>
                    圏 <InlineMath math="\mathcal{C}" /> の対象 <InlineMath math="A" /> に対して、単位律を満たす射は <InlineMath math="\mathrm{id}_A" /> しか存在しない。
                    すなわち、ある射 <InlineMath math="i \in \mathrm{Hom}(A, A)" /> が、任意の射 <InlineMath math="f : X \to A" /> と <InlineMath math="g : A \to Y" /> に対して
                    <BlockMath math="i \circ f = f \quad \text{かつ} \quad g \circ i = g" />
                    を満たすならば、必ず <InlineMath math="i = \mathrm{id}_A" /> である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    射 <InlineMath math="i \circ \mathrm{id}_A" /> を2通りの視点から計算する。
                </p>
                <p>
                    まず、<InlineMath math="i" /> は右単位律（<InlineMath math="g \circ i = g" />）を満たすので、<InlineMath math="g" /> として <InlineMath math="\mathrm{id}_A" /> を代入すると、
                    <BlockMath math="\mathrm{id}_A \circ i = \mathrm{id}_A" />
                    となる。
                </p>
                <p>
                    次に、<InlineMath math="\mathrm{id}_A" /> は本来の恒等射であり、左単位律（<InlineMath math="\mathrm{id}_A \circ f = f" />）を満たすので、<InlineMath math="f" /> として <InlineMath math="i" /> を代入すると、
                    <BlockMath math="\mathrm{id}_A \circ i = i" />
                    となる。
                </p>
                <p>
                    この2つの式を繋ぎ合わせることで、
                    <BlockMath math="i = \mathrm{id}_A \circ i = \mathrm{id}_A" />
                    が得られ、一意性が証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 1.1-2 (群の圏 <InlineMath math="\mathbf{Grp}" /> における公理の確認)</span>}
            >
                <p>
                    群とその準同型写像がなす圏 <strong><InlineMath math="\mathbf{Grp}" /></strong> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>対象：</strong> 群 <InlineMath math="G, H, \ldots" /> の集まり。</li>
                    <li><strong>射：</strong> <InlineMath math="\mathrm{Hom}(G, H)" /> は、群準同型写像 <InlineMath math="f : G \to H" /> 全体の集合。</li>
                    <li><strong>合成：</strong> 2つの群準同型写像の合成は再び群準同型写像になるため、合成は <InlineMath math="\mathbf{Grp}" /> の中で閉じている。</li>
                    <li><strong>恒等射：</strong> 群 <InlineMath math="G" /> 上の恒等写像 <InlineMath math="\mathrm{id}_G(x) = x" /> は明らかに群準同型である。</li>
                </ul>
                <p>
                    合成の結合律や単位律は、群の要素の性質ではなく、そもそも「写像の合成」という操作自体が持つ普遍的な性質であるため、特別な計算なしに成立することがわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>圏（Category）</strong>は、「対象」と「射」、および射の「合成」の規則を備えた体系である。</li>
                    <li>合成は<strong>結合律</strong>を満たし、各対象には合成の単位元となる<strong>恒等射</strong>が存在しなければならない。</li>
                    <li>圏論の目的は、対象の内部構造（集合の元など）を忘却し、対象間の関係（射）のネットワークとして数学を記述し直すことである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}