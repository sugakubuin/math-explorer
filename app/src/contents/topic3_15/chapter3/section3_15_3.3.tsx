import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FunctorCategoriesAndComposition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                対象と射が集まって圏をなすように、関手と自然変換も集まって「新たな圏」を形成します。これを関手圏と呼びます。関手圏は、ホモロジー代数や代数幾何学において「層（Sheaf）」などの複雑な対象を扱うための根本的な舞台となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">関手圏の構成</h2>

            <ContentBox
                type="definition"
                title="Definition 3.3-1 (関手圏 / Functor Category)"
            >
                <p>
                    小圏 <InlineMath math="\mathcal{C}" /> と圏 <InlineMath math="\mathcal{D}" /> が与えられたとき、それらから構成される<strong>関手圏 <InlineMath math="[\mathcal{C}, \mathcal{D}]" /></strong>（または <InlineMath math="\mathcal{D}^\mathcal{C}" />）を以下のように定義する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>対象：</strong> <InlineMath math="\mathcal{C}" /> から <InlineMath math="\mathcal{D}" /> へのすべての関手 <InlineMath math="F, G, \ldots" />。</li>
                    <li><strong>射：</strong> 関手 <InlineMath math="F" /> から <InlineMath math="G" /> への射は、すべての自然変換 <InlineMath math="\eta : F \Rightarrow G" />。</li>
                    <li><strong>合成：</strong> 自然変換の垂直合成（§3.1 で定義した成分ごとの合成 <InlineMath math="(\mu \circ \eta)_A = \mu_A \circ \eta_A" />）。</li>
                    <li><strong>恒等射：</strong> 関手 <InlineMath math="F" /> に対する恒等射 <InlineMath math="\mathrm{id}_F" /> は、各成分が <InlineMath math="\mathcal{D}" /> の恒等射であるような自然変換（すなわち <InlineMath math="(\mathrm{id}_F)_A = \mathrm{id}_{F(A)}" />）。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 3.3-1 (関手圏は圏の公理を満たす)"
            >
                <p>
                    上記の定義による関手圏 <InlineMath math="[\mathcal{C}, \mathcal{D}]" /> は、確かに結合律と単位律を満たす圏である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    自然変換の合成と恒等射は「対象 <InlineMath math="A" /> ごとの成分の合成」として定義されている。
                </p>
                <p>
                    結合律について、3つの自然変換 <InlineMath math="\eta, \mu, \rho" /> の合成の成分を計算すると、
                    <BlockMath math="( (\rho \circ \mu) \circ \eta )_A = (\rho \circ \mu)_A \circ \eta_A = (\rho_A \circ \mu_A) \circ \eta_A" />
                    となる。圏 <InlineMath math="\mathcal{D}" /> においては射の結合律が成り立つため、これは <InlineMath math="\rho_A \circ (\mu_A \circ \eta_A) = (\rho \circ (\mu \circ \eta))_A" /> と等しい。すべての成分で一致するため、自然変換として <InlineMath math="(\rho \circ \mu) \circ \eta = \rho \circ (\mu \circ \eta)" /> が成立する。
                </p>
                <p>
                    単位律についても全く同様に、<InlineMath math="\mathcal{D}" /> の単位律がそのまま成分ごとに遺伝するため成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 3.3-1 (<InlineMath math="\mathbf{Set}^{\mathbf{2}}" />：矢印圏)</span>}
            >
                <p>
                    小圏 <InlineMath math="\mathbf{2}" />（対象 <InlineMath math="\{0, 1\}" /> と射 <InlineMath math="0 \to 1" /> からなる圏）から集合の圏 <InlineMath math="\mathbf{Set}" /> への関手圏 <InlineMath math="[\mathbf{2}, \mathbf{Set}]" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>この圏の<strong>対象（関手）</strong> <InlineMath math="F" /> は、2つの集合 <InlineMath math="F(0), F(1)" /> と、その間の写像 <InlineMath math="F(0 \to 1)" /> を指定するものである。つまり、単なる「1つの写像」そのものが対象である。</li>
                    <li>この圏の<strong>射（自然変換）</strong> <InlineMath math="\eta : F \Rightarrow G" /> は、成分写像 <InlineMath math="\eta_0 : F(0) \to G(0)" /> と <InlineMath math="\eta_1 : F(1) \to G(1)" /> のペアであり、自然性条件として「四角形の可換図式」を満たすものである。</li>
                </ul>
                <p>
                    この関手圏は「写像を対象とし、可換四辺形を射とする圏（矢印圏, Arrow Category）」と完全に一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">水平合成（ウィスカリング）</h2>

            <p className="leading-relaxed">
                自然変換の合成には、先ほど見た「同じ関手間の上下の合成（垂直合成）」とは別に、関手の合成に伴って横方向に繋げる「水平合成」という操作が存在します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.3-2 (水平合成 / Horizontal Composition)"
            >
                <p>
                    関手 <InlineMath math="F, G : \mathcal{C} \to \mathcal{D}" /> と <InlineMath math="H, K : \mathcal{D} \to \mathcal{E}" /> があり、それぞれの間に自然変換 <InlineMath math="\eta : F \Rightarrow G" /> と <InlineMath math="\mu : H \Rightarrow K" /> があるとする。
                </p>
                <p>
                    このとき、合成関手 <InlineMath math="H \circ F" /> から <InlineMath math="K \circ G" /> への自然変換である<strong>水平合成</strong> <InlineMath math="\mu * \eta : H \circ F \Rightarrow K \circ G" /> が定義でき、その対象 <InlineMath math="A" /> での成分は以下で与えられる。
                    <BlockMath math="(\mu * \eta)_A = \mu_{G(A)} \circ H(\eta_A) = K(\eta_A) \circ \mu_{F(A)}" />
                </p>
                <p>
                    （※右辺の2つの式が等しくなるのは、<InlineMath math="\mu" /> が自然変換であることの可換図式から保証される）
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="2-圏（2-Category）の階層構造"
            >
                <p>
                    圏論の世界は、実は3つの階層を持っています。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><strong>0次元：</strong> 対象（圏、空間、群など）</li>
                    <li><strong>1次元：</strong> 射（関手、連続写像、準同型など）</li>
                    <li><strong>2次元：</strong> 射の間の射（自然変換、ホモトピーなど）</li>
                </ol>
                <p>
                    このように「点・線・面」の構造を持つ圏を<strong>2-圏</strong>と呼びます。
                    垂直合成は「面と面を上下に繋ぐ」操作であり、水平合成は「面と面を横に並べて大きな面にする」操作です。
                    関手圏と自然変換の豊かな代数構造は、位相幾何学におけるホモトピーの構造と深く結びついています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>関手を対象とし、自然変換を射とする圏を<strong>関手圏 <InlineMath math="[\mathcal{C}, \mathcal{D}]" /></strong> と呼ぶ。</li>
                    <li>関手圏の例として、小圏 <InlineMath math="\mathbf{2}" /> からの関手圏は「写像の圏（矢印圏）」を自然に表現する。</li>
                    <li>自然変換には、同じ圏の間の<strong>垂直合成</strong>と、関手の合成を伴う<strong>水平合成</strong>という2種類の合成操作が存在し、豊かな階層構造（2-圏）をなす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}