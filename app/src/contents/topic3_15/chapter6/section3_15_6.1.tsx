import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfAdjoints() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                数学において「自由生成」と「忘却」、「直積」と「冪（関数空間）」、「テンソル積」と「内部hom」など、異なる分野で繰り返し現れる「双対的な関手のペア」があります。これらをすべて統一的に記述する圏論の最も重要で深遠な概念が「随伴（Adjunction）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">随伴の定義（hom 集合による）</h2>

            <ContentBox
                type="definition"
                title="Definition 6.1-1 (随伴 / Adjunction)"
            >
                <p>
                    圏 <InlineMath math="\mathcal{C}" /> と <InlineMath math="\mathcal{D}" /> の間の2つの関手、<InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> と <InlineMath math="G : \mathcal{D} \to \mathcal{C}" /> を考える。
                </p>
                <p>
                    <strong><InlineMath math="F" /> は <InlineMath math="G" /> の左随伴（Left Adjoint）</strong>であり、<strong><InlineMath math="G" /> は <InlineMath math="F" /> の右随伴（Right Adjoint）</strong>である（記号で <strong><InlineMath math="F \dashv G" /></strong> と書く）とは、
                    任意の対象 <InlineMath math="A \in \mathcal{C}" /> と <InlineMath math="B \in \mathcal{D}" /> に対して、以下の hom 集合の間に<strong>自然な全単射</strong>が存在することである。
                </p>
                <BlockMath math="\mathrm{Hom}_\mathcal{D}(F(A), B) \cong \mathrm{Hom}_\mathcal{C}(A, G(B))" />
                <p>
                    ここで「自然な」とは、<InlineMath math="A" /> や <InlineMath math="B" /> を射で動かしたときに、関手圏としての可換図式が成立すること（双自然性）を意味する。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.1-1 (自由群関手と忘却関手の随伴)"
            >
                <p>
                    自由群関手 <InlineMath math="F : \mathbf{Set} \to \mathbf{Grp}" /> と忘却関手 <InlineMath math="U : \mathbf{Grp} \to \mathbf{Set}" /> を考える。
                    任意の集合 <InlineMath math="S" /> と任意の群 <InlineMath math="G" /> に対して、
                    <BlockMath math="\mathrm{Hom}_\mathbf{Grp}(F(S), G) \cong \mathrm{Hom}_\mathbf{Set}(S, U(G))" />
                    という全単射が成立する。
                </p>
                <p>
                    これは「<InlineMath math="S" /> を生成元とする自由群 <InlineMath math="F(S)" /> から群 <InlineMath math="G" /> への準同型を1つ決めること（左辺）」は、「<InlineMath math="S" /> の各要素に対して、行き先となる群 <InlineMath math="G" /> の元を単なる集合の写像として指定すること（右辺）」と完全に同じ（一対一対応する）という、自由群の普遍性そのものを表している。
                </p>
                <p>
                    よって、自由群関手は忘却関手の左随伴（<InlineMath math="F \dashv U" />）である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">単位・余単位による特徴づけ</h2>

            <p className="leading-relaxed">
                随伴は、要素（hom 集合）を使わずに、自然変換の合成（ウィスカリング）を用いた純粋な圏論の言葉だけで定義し直すこともできます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 6.1-2 (随伴の単位と余単位)"
            >
                <p>
                    関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> と <InlineMath math="G : \mathcal{D} \to \mathcal{C}" /> の間に、以下の2つの自然変換が存在し、特定の恒等式を満たすとき、<InlineMath math="F \dashv G" /> であるという。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>単位（Unit） <InlineMath math="\eta" />：</strong> <InlineMath math="\eta : \mathrm{Id}_\mathcal{C} \Rightarrow G \circ F" /></li>
                    <li><strong>余単位（Counit） <InlineMath math="\varepsilon" />：</strong> <InlineMath math="\varepsilon : F \circ G \Rightarrow \mathrm{Id}_\mathcal{D}" /></li>
                </ul>
                <p>
                    <strong>三角恒等式（Triangle Identities）：</strong>
                    これらは以下の合成（水平合成・ウィスカリング）において恒等自然変換とならなければならない。
                    <BlockMath math="(\varepsilon F) \circ (F\eta) = \mathrm{id}_F \quad \text{および} \quad (G\varepsilon) \circ (\eta G) = \mathrm{id}_G" />
                </p>
            </ContentBox>

            <ContentBox
                type="theorem"
                title="Theorem 6.1-1 (随伴の同値な定式化)"
            >
                <p>
                    「hom 全単射による随伴の定義」と「単位・余単位と三角恒等式による定義」は完全に同値である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概略)"
            >
                <p>
                    hom 全単射 <InlineMath math="\Phi_{A,B} : \mathrm{Hom}(F(A), B) \xrightarrow{\sim} \mathrm{Hom}(A, G(B))" /> があるとする。
                </p>
                <p>
                    対象 <InlineMath math="A" /> について、<InlineMath math="B = F(A)" /> と置くと、左辺には恒等射 <InlineMath math="\mathrm{id}_{F(A)}" /> が存在する。
                    これを <InlineMath math="\Phi" /> で送ったものを単位の成分 <InlineMath math="\eta_A = \Phi_{A,F(A)}(\mathrm{id}_{F(A)}) : A \to G(F(A))" /> と定義する。
                </p>
                <p>
                    逆に対象 <InlineMath math="B" /> について、<InlineMath math="A = G(B)" /> と置くと、右辺には恒等射 <InlineMath math="\mathrm{id}_{G(B)}" /> が存在する。
                    これを逆写像 <InlineMath math="\Phi^{-1}" /> で送ったものを余単位の成分 <InlineMath math="\varepsilon_B = \Phi^{-1}_{G(B),B}(\mathrm{id}_{G(B)}) : F(G(B)) \to B" /> と定義する。
                </p>
                <p>
                    全単射の自然性条件を式変形していくと、これらの <InlineMath math="\eta, \varepsilon" /> が自然変換であること、および三角恒等式を満たすことが純粋な代数計算として導かれる。逆も同様に <InlineMath math="\eta, \varepsilon" /> から全単射が構成できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.1-2 (自由群随伴の単位・余単位)"
            >
                <p>
                    自由群 <InlineMath math="F" /> と忘却 <InlineMath math="U" /> の随伴における単位と余単位を具体的に見てみる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>単位 <InlineMath math="\eta_S : S \to U(F(S))" />：</strong> 集合 <InlineMath math="S" /> の各要素を、「自由群の長さ1の単語（生成元そのもの）」として埋め込む自然な写像。</li>
                    <li><strong>余単位 <InlineMath math="\varepsilon_G : F(U(G)) \to G" />：</strong> 「群 <InlineMath math="G" /> のすべての元を生成元として（一旦群の演算を忘れて）作った巨大な自由群」から、元の群 <InlineMath math="G" /> への評価準同型（文字列の積を、実際の群 <InlineMath math="G" /> での計算結果に評価する準同型）。</li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>2つの関手間に <strong><InlineMath math="\mathrm{Hom}(F(A), B) \cong \mathrm{Hom}(A, G(B))" /></strong> という自然な全単射があるとき、<InlineMath math="F" /> を左随伴、<InlineMath math="G" /> を右随伴（<InlineMath math="F \dashv G" />）という。</li>
                    <li>これは「<InlineMath math="F" /> で構築した世界での射」と「<InlineMath math="G" /> で引き戻した世界での射」が情報として等価であることを示す。</li>
                    <li>随伴関係は、自然変換である<strong>単位 <InlineMath math="\eta" /></strong> と <strong>余単位 <InlineMath math="\varepsilon" /></strong>、およびそれらの三角恒等式によって同値に定式化できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
