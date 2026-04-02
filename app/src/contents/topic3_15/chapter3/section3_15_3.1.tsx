import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfNaturalTransformations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                圏は「対象と射」からなり、関手は「圏と圏の間の写像」でした。圏論のさらなる飛躍は、「関手と関手の間にも『関係（写像）』を定義できる」という発見にあります。この「関手間の変換」を<strong>自然変換（Natural Transformation）</strong>と呼び、これを定義することこそが、圏論という分野が生まれた本来の目的でした。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">自然変換の定義</h2>

            <ContentBox
                type="definition"
                title="Definition 3.1-1 (自然変換)"
            >
                <p>
                    2つの並行な関手 <InlineMath math="F, G : \mathcal{C} \to \mathcal{D}" /> に対して、<InlineMath math="F" /> から <InlineMath math="G" /> への<strong>自然変換</strong> <InlineMath math="\eta : F \Rightarrow G" /> とは、元の圏 <InlineMath math="\mathcal{C}" /> の各対象 <InlineMath math="A" /> に、先の圏 <InlineMath math="\mathcal{D}" /> の射 <InlineMath math="\eta_A" />（これを<strong>成分, component</strong>と呼ぶ）を割り当てる対応である。
                    <BlockMath math="\eta_A : F(A) \to G(A)" />
                </p>
                <p>
                    さらに、<InlineMath math="\mathcal{C}" /> の任意の射 <InlineMath math="f : A \to B" /> に対して、以下の<strong>自然性条件（可換図式）</strong>を満たさなければならない。
                    <BlockMath math="G(f) \circ \eta_A = \eta_B \circ F(f)" />
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.1-1 (自然変換の可換図式)"
            >
                <p>
                    自然性条件は、以下の四角形の図式が「可換（commutative）」である、つまり「どちらの経路をたどっても結果が同じになる」こととして視覚的に表現される。
                </p>
                <div className="flex justify-center my-6">
                    <svg width="250" height="150" viewBox="0 0 250 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-900 dark:text-slate-100">
                        <text x="30" y="30" fontSize="16" fill="currentColor" textAnchor="middle">F(A)</text>
                        <text x="220" y="30" fontSize="16" fill="currentColor" textAnchor="middle">G(A)</text>
                        <text x="30" y="130" fontSize="16" fill="currentColor" textAnchor="middle">F(B)</text>
                        <text x="220" y="130" fontSize="16" fill="currentColor" textAnchor="middle">G(B)</text>
                        
                        {/* Right arrow (eta_A) */}
                        <path d="M 60 25 L 190 25" stroke="currentColor" strokeWidth="2" />
                        <polygon points="190,25 180,20 180,30" fill="currentColor" />
                        <text x="125" y="15" fontSize="14" fill="currentColor" textAnchor="middle">η_A</text>
                        
                        {/* Down arrow left (F(f)) */}
                        <path d="M 30 45 L 30 100" stroke="currentColor" strokeWidth="2" />
                        <polygon points="30,100 25,90 35,90" fill="currentColor" />
                        <text x="15" y="75" fontSize="14" fill="currentColor" textAnchor="middle">F(f)</text>
                        
                        {/* Down arrow right (G(f)) */}
                        <path d="M 220 45 L 220 100" stroke="currentColor" strokeWidth="2" />
                        <polygon points="220,100 215,90 225,90" fill="currentColor" />
                        <text x="240" y="75" fontSize="14" fill="currentColor" textAnchor="middle">G(f)</text>
                        
                        {/* Right arrow bottom (eta_B) */}
                        <path d="M 60 125 L 190 125" stroke="currentColor" strokeWidth="2" />
                        <polygon points="190,125 180,120 180,130" fill="currentColor" />
                        <text x="125" y="145" fontSize="14" fill="currentColor" textAnchor="middle">η_B</text>
                    </svg>
                </div>
                <p>
                    この図式は、「対象 <InlineMath math="A" /> を <InlineMath math="F" /> の世界から <InlineMath math="G" /> の世界に変換（<InlineMath math="\eta_A" />）してから、関数 <InlineMath math="G(f)" /> を適用する」ことと、「関数 <InlineMath math="F(f)" /> を適用してから、その結果を <InlineMath math="G" /> の世界に変換（<InlineMath math="\eta_B" />）する」ことが、完全に一致することを要求している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">自然同型</h2>

            <p className="leading-relaxed">
                自然変換の成分である射がすべて「同型射」であるとき、その自然変換は関手同士の「同型」を与えます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.1-2 (自然同型 / Natural Isomorphism)"
            >
                <p>
                    自然変換 <InlineMath math="\eta : F \Rightarrow G" /> について、すべての対象 <InlineMath math="A" /> でその成分 <InlineMath math="\eta_A : F(A) \to G(A)" /> が（圏 <InlineMath math="\mathcal{D}" /> における）<strong>同型射</strong>であるとき、<InlineMath math="\eta" /> を<strong>自然同型</strong>という。
                </p>
                <p>
                    自然同型が存在するとき、2つの関手は同型であるといい、<InlineMath math="F \cong G" /> と書く。（前章で定義した「圏同値」の中の <InlineMath math="\cong" /> は、まさにこの自然同型のことである。）
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.1-2 (自然変換の垂直合成)"
            >
                <p>
                    3つの関手 <InlineMath math="F, G, H : \mathcal{C} \to \mathcal{D}" /> と、その間の自然変換 <InlineMath math="\eta : F \Rightarrow G" />、<InlineMath math="\mu : G \Rightarrow H" /> があるとする。
                    これらの合成（垂直合成と呼ばれる）<InlineMath math="\mu \circ \eta : F \Rightarrow H" /> を、成分ごとに
                    <BlockMath math="(\mu \circ \eta)_A = \mu_A \circ \eta_A" />
                    と定義する。これが再び自然変換の条件を満たすことは、2つの可換な四角形を上下に連結すれば、外側の大きな四角形も可換になることから容易に確認できる。
                </p>
                <p>
                    数式で書けば：
                    <BlockMath math="\begin{aligned} H(f) \circ (\mu \circ \eta)_A &= H(f) \circ \mu_A \circ \eta_A \\ &= \mu_B \circ G(f) \circ \eta_A \quad (\because \mu \text{ is natural}) \\ &= \mu_B \circ \eta_B \circ F(f) \quad (\because \eta \text{ is natural}) \\ &= (\mu \circ \eta)_B \circ F(f) \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="圏論誕生の動機"
            >
                <p>
                    アイレンベルグとマックレーンが圏論を創始したとき、彼らの真の目的は「圏」でも「関手」でもなく、この<strong>「自然変換」を厳密に定義すること</strong>でした。
                </p>
                <p>
                    「この同型写像は『自然』である」という、それまで数学者が感覚で使っていた曖昧な言葉に、厳密な数学的定義（可換図式）を与えるためだけに、関手という概念が必要になり、関手を定義するためだけに圏という概念が必要になったのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>自然変換 <InlineMath math="\eta : F \Rightarrow G" /></strong>は、関手 <InlineMath math="F" /> の世界を関手 <InlineMath math="G" /> の世界に、構造（射の動き）と矛盾しないように変換する射の族である。</li>
                    <li>自然変換であるための核心的な条件が「可換図式（<InlineMath math="G(f) \circ \eta_A = \eta_B \circ F(f)" />）」である。</li>
                    <li>成分がすべて同型射である自然変換を<strong>自然同型</strong>と呼び、これが「関手として全く同じ働きをする」ことの厳密な定義となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}