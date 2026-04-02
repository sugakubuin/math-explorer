import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FaithfulFullEssentiallySurjective() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                関手は「圏の間の写像」のようなものですが、写像の「単射・全射」に相当する性質はどう定義されるのでしょうか。圏には「対象」と「射」の2つの要素があるため、その性質も分けて考える必要があります。特に「射の対応」がどのような性質を持つかが重要になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">忠実・充満・本質的全射の定義</h2>

            <ContentBox
                type="definition"
                title="Definition 2.3-1 (忠実関手・充満関手)"
            >
                <p>
                    関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> が与えられたとき、任意の2つの対象 <InlineMath math="A, B \in \mathcal{C}" /> について、<InlineMath math="F" /> は射の集合（hom集合）の間の写像を引き起こす。
                    <BlockMath math="F_{A,B} : \mathrm{Hom}_{\mathcal{C}}(A, B) \to \mathrm{Hom}_{\mathcal{D}}(F(A), F(B))" />
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <strong>忠実（Faithful）：</strong> すべての対象のペア <InlineMath math="A, B" /> に対して、この写像 <InlineMath math="F_{A,B}" /> が<strong>単射</strong>であるとき。
                        （異なる射は、<InlineMath math="F" /> で送った後も異なる射のままである。情報を潰さない）
                    </li>
                    <li>
                        <strong>充満（Full）：</strong> すべての対象のペア <InlineMath math="A, B" /> に対して、この写像 <InlineMath math="F_{A,B}" /> が<strong>全射</strong>であるとき。
                        （<InlineMath math="F(A)" /> から <InlineMath math="F(B)" /> へのどんな射も、必ず <InlineMath math="\mathcal{C}" /> のある射が <InlineMath math="F" /> で送られた姿である。豊かな関係性を保つ）
                    </li>
                </ul>
                <p>
                    両方を満たす（つまり <InlineMath math="F_{A,B}" /> が全単射である）とき、<strong>充満忠実（Fully Faithful）</strong>という。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.3-1 (忠実だが充満でない関手)"
            >
                <p>
                    忘却関手 <InlineMath math="U : \mathbf{Grp} \to \mathbf{Set}" /> を考える。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>忠実である：</strong> 群準同型 <InlineMath math="f, g : G \to H" /> が「写像として異なる」なら、当然「群準同型としても異なる」ため、単射性が成り立つ。</li>
                    <li><strong>充満ではない：</strong> 台集合 <InlineMath math="|G|" /> から <InlineMath math="|H|" /> への単なる「写像」の中には、群の演算を保存しない（群準同型ではない）ものが無数に存在する。したがって全射性はない。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.3-2 (充満忠実な関手)"
            >
                <p>
                    アーベル群の圏 <InlineMath math="\mathbf{Ab}" /> を、一般の群の圏 <InlineMath math="\mathbf{Grp}" /> に埋め込む包含関手 <InlineMath math="I : \mathbf{Ab} \hookrightarrow \mathbf{Grp}" /> を考える。
                </p>
                <p>
                    2つのアーベル群 <InlineMath math="A, B" /> があったとき、「<InlineMath math="\mathbf{Ab}" /> の世界での準同型（可換性を前提とする）」と、「<InlineMath math="\mathbf{Grp}" /> の世界で <InlineMath math="A, B" /> 間に引ける準同型（アーベル群同士なので結局同じ条件になる）」は完全に一致する。
                    つまり、写像 <InlineMath math="\mathrm{Hom}_{\mathbf{Ab}}(A, B) \to \mathrm{Hom}_{\mathbf{Grp}}(A, B)" /> は全単射である。
                    したがって包含関手は<strong>充満忠実</strong>である。（このように充満忠実に埋め込まれている部分圏を「充満部分圏」と呼ぶ）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                射の対応について分類できたので、次は「対象」の対応についての全射性を定義します。ただし、圏論では「＝（イコール）」よりも「<InlineMath math="\cong" />（同型）」で一致を判定するのが自然です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.3-2 (本質的全射 / Essentially Surjective)"
            >
                <p>
                    関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> が<strong>本質的全射</strong>であるとは、送り先の圏 <InlineMath math="\mathcal{D}" /> の任意の対象 <InlineMath math="D" /> に対して、元の圏 <InlineMath math="\mathcal{C}" /> のある対象 <InlineMath math="A" /> が存在して、
                    <BlockMath math="F(A) \cong D" />
                    と同型になることである。
                </p>
                <p>
                    （厳密に <InlineMath math="F(A) = D" /> とならなくても、「同型なコピー」を必ず作り出せるなら実質的に全射とみなす）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">圏同値（Equivalence of Categories）</h2>

            <p className="leading-relaxed">
                2つの圏が「数学的な構造として本質的に同じ」であることをどのように定義すべきでしょうか。関手が「逆関手」を持つこと（圏同型）は条件が厳しすぎます。そこで、同型射の緩さを利用した「圏同値」という強力な概念が用いられます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.3-3 (圏同値)"
            >
                <p>
                    関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> が<strong>圏同値（equivalence of categories）</strong>を与えるとは、ある関手 <InlineMath math="G : \mathcal{D} \to \mathcal{C}" /> （弱い意味での逆関手）が存在し、
                    以下の自然同型（Chapter 3 で定義する「関手としての同型」）が存在することである。
                    <BlockMath math="G \circ F \cong \mathrm{Id}_\mathcal{C} \quad \text{および} \quad F \circ G \cong \mathrm{Id}_\mathcal{D}" />
                </p>
            </ContentBox>

            <ContentBox
                type="theorem"
                title="Theorem 2.3-1 (圏同値の特徴づけ)"
            >
                <p>
                    関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> が圏同値であることと、<InlineMath math="F" /> が<strong>充満忠実かつ本質的全射である</strong>ことは同値である。（※証明には選択公理が必要）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概略)"
            >
                <p>
                    <InlineMath math="(\Rightarrow)" /> 圏同値であれば、自然同型の可逆性を用いて、<InlineMath math="F" /> が hom 集合の全単射を引き起こすこと（充満忠実）と、任意の <InlineMath math="D" /> に対して <InlineMath math="F(G(D)) \cong D" /> となること（本質的全射）が直接導かれる。
                </p>
                <p>
                    <InlineMath math="(\Leftarrow)" /> <InlineMath math="F" /> が本質的全射であるため、各 <InlineMath math="D \in \mathcal{D}" /> に対して <InlineMath math="F(A_D) \cong D" /> となる <InlineMath math="A_D" /> を1つ「選ぶ（ここで選択公理 AC を使用）」。この対応を <InlineMath math="G(D) = A_D" /> と定義する。<InlineMath math="F" /> が充満忠実であることから、<InlineMath math="D" /> 間の射を <InlineMath math="G" /> で送る方法が一意に定まり、<InlineMath math="G" /> は関手となる。構成の仕方から <InlineMath math="F \circ G \cong \mathrm{Id}" /> などが自然に満たされる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="圏同値 vs 圏同型"
            >
                <p>
                    「圏同型（Strict Isomorphism）」は <InlineMath math="G \circ F = \mathrm{Id}" /> という厳格なイコールを要求しますが、これは数学の実践ではほとんど役に立ちません。
                </p>
                <p>
                    例えば、「すべての有限次元実ベクトル空間の圏」と、「各次元 <InlineMath math="n" /> に対する <InlineMath math="\mathbb{R}^n" /> だけを集めた小さな圏（行列の圏）」は、圏同型ではありません（前者は対象が無数にあるが、後者は可算個しかないため）。しかし、どんな有限次元ベクトル空間も必ず何らかの <InlineMath math="\mathbb{R}^n" /> と「同型（本質的全射）」であり、線形写像は行列と完全に対応（充満忠実）します。
                    したがって、この2つの圏は<strong>圏同値</strong>です。圏論では、圏同値をもって「数学的情報量が全く同じ」と見なします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>忠実（Faithful）：</strong> 関手が射の情報を潰さない（単射的）。</li>
                    <li><strong>充満（Full）：</strong> 関手が射のネットワークの豊かさを失わない（全射的）。</li>
                    <li><strong>本質的全射：</strong> 行き先のすべての対象が、同型を除いてカバーされる。</li>
                    <li>これら3つをすべて満たす関手を<strong>圏同値</strong>といい、2つの圏が数学的に「実質的に同じ」であることを保証する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}