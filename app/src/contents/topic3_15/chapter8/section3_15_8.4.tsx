import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HomologyAndChainComplexes() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                アーベル圏と完全系列の理論が目指す最終目的地が「ホモロジー代数」です。位相空間の「穴の数」を数えたり、方程式の「解の自由度」を測ったりする際、完全系列が「どれくらい完全でないか（欠落しているか）」を測る技術がホモロジーです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">鎖複体とホモロジー</h2>

            <ContentBox
                type="definition"
                title="Definition 8.4-1 (鎖複体 / Chain Complex)"
            >
                <p>
                    アーベル圏 <InlineMath math="\mathcal{A}" /> における対象と射の列
                    <BlockMath math="\cdots \to C_{n+1} \xrightarrow{d_{n+1}} C_n \xrightarrow{d_n} C_{n-1} \to \cdots" />
                    が<strong>鎖複体（Chain Complex）</strong> <InlineMath math="C_\bullet" /> であるとは、すべての <InlineMath math="n" /> について、連続する境界射の合成がゼロになることである。
                    <BlockMath math="d_n \circ d_{n+1} = 0 \quad (\text{すなわち } \mathrm{Im}\, d_{n+1} \subseteq \ker d_n)" />
                </p>
                <p>
                    ※添字が上に上がり、矢印の方向が <InlineMath math="C^{n-1} \to C^n \to C^{n+1}" /> となるものを<strong>コホモロジー複体（Cochain Complex）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox
                type="definition"
                title="Definition 8.4-2 (ホモロジー群 / Homology Group)"
            >
                <p>
                    鎖複体 <InlineMath math="C_\bullet" /> が与えられたとき、条件 <InlineMath math="\mathrm{Im}\, d_{n+1} \subseteq \ker d_n" /> により、アーベル圏において商をとることができる。
                    この商対象を <InlineMath math="n" /> 次の<strong>ホモロジー（Homology）</strong>と呼び、<InlineMath math="H_n(C_\bullet)" /> と書く。
                    <BlockMath math="H_n(C_\bullet) = \ker d_n / \mathrm{Im}\, d_{n+1}" />
                </p>
                <p>
                    <InlineMath math="H_n(C_\bullet) = 0" /> であることは、<InlineMath math="\ker d_n = \mathrm{Im}\, d_{n+1}" />、すなわち列がその位置 <InlineMath math="C_n" /> において<strong>完全（Exact）</strong>であることと同値である。
                    つまりホモロジーとは「完全性からのズレ（欠落）」を測る量である。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.4-1 (単体ホモロジーの導入)"
            >
                <p>
                    代数的トポロジー（Topic 4-8）において、位相空間 <InlineMath math="X" /> を三角形（単体）で分割したとする。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 mb-2">
                    <li><InlineMath math="C_n" /> を「<InlineMath math="n" /> 次元単体の形式的整数結合（<InlineMath math="\mathbb{Z}" />-係数加群）」とする。</li>
                    <li><InlineMath math="d_n : C_n \to C_{n-1}" /> を「図形の境界（フチ）をとる写像」とする。</li>
                </ul>
                <p>
                    「境界の境界はない（フチのフチはゼロ）」という幾何学的な直観から <InlineMath math="d_n \circ d_{n+1} = 0" /> が成り立ち、<InlineMath math="C_\bullet" /> は鎖複体となる。
                </p>
                <p>
                    このとき、<InlineMath math="\ker d_n" /> は「境界を持たない閉じた図形（サイクル）」であり、<InlineMath math="\mathrm{Im}\, d_{n+1}" /> は「中身が詰まった図形の表面（バウンダリ）」である。
                    したがってホモロジー <InlineMath math="H_n = \ker / \mathrm{Im}" /> は、「閉じているが、中身が空洞の図形」の数を測る群、すなわち<strong>「空間の <InlineMath math="n" /> 次元の穴の数」</strong>となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">長完全系列と接続</h2>

            <p className="leading-relaxed">
                鎖複体の素晴らしい点は、空間を分割したり関係性を調べたりする際に、「短完全系列から長完全系列を生み出せる」という性質にあります。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 8.4-1 (短完全系列からの長完全系列)"
            >
                <p>
                    鎖複体の間の写像（チェイン写像）によって構成される鎖複体の短完全系列
                    <BlockMath math="0 \to A_\bullet \to B_\bullet \to C_\bullet \to 0" />
                    が与えられたとする。（すべての次数 <InlineMath math="n" /> で <InlineMath math="0 \to A_n \to B_n \to C_n \to 0" /> が完全であるという意味。）
                </p>
                <p>
                    このとき、これらのホモロジー群を結ぶ以下の<strong>ホモロジーの長完全系列</strong>が存在する。
                    <BlockMath math="\cdots \to H_n(A) \to H_n(B) \to H_n(C) \\ \xrightarrow{\partial} H_{n-1}(A) \to H_{n-1}(B) \to \cdots" />
                    ここで <InlineMath math="\partial" /> は次数を1つ下げる連結準同型である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概略)"
            >
                <p>
                    各次数 <InlineMath math="n" /> における <InlineMath math="A_n, B_n, C_n" /> と、境界射 <InlineMath math="d_n" /> によって構成される巨大な可換図式に、前節の<strong>スネークの補題</strong>を適用する。
                </p>
                <p>
                    スネークの補題が与える <InlineMath math="\ker d_n / \mathrm{Im} d_{n+1}" /> 等の商空間が、まさにホモロジー群の定義と一致する。
                    そしてスネークの補題の「蛇の写像」が、そのまま長完全系列の連結準同型 <InlineMath math="\partial : H_n(C) \to H_{n-1}(A)" /> を与える。この操作を各次数で繰り返してつなぎ合わせることで、無限に続く長完全系列が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.4-2 (マイヤー・ビエトリス系列の予告)"
            >
                <p>
                    空間 <InlineMath math="X" /> を2つの部分空間 <InlineMath math="U, V" /> に分割したとする。このとき、単体の集合について以下の鎖複体の短完全系列が自然に得られる。
                    <BlockMath math="0 \to C_\bullet(U \cap V) \to C_\bullet(U) \oplus C_\bullet(V) \to C_\bullet(X) \to 0" />
                    （<InlineMath math="U \cap V" /> の単体は <InlineMath math="U" /> と <InlineMath math="V" /> 両方に引き算で埋め込まれ、<InlineMath math="U, V" /> の単体は足し算で <InlineMath math="X" /> の単体となる。）
                </p>
                <p>
                    ここに先ほどの定理を適用すると、位相幾何学で最も重要な計算ツールである<strong>マイヤー・ビエトリス（Mayer-Vietoris）完全系列</strong>が得られる。
                    <BlockMath math="\begin{aligned} \cdots \to H_n(U\cap V) \to H_n(U) &\oplus H_n(V) \to H_n(X) \\ &\xrightarrow{\partial} H_{n-1}(U\cap V) \to \cdots \end{aligned}" />
                    これにより、「複雑な空間 <InlineMath math="X" /> の穴の数」を、「簡単な空間 <InlineMath math="U, V" /> とその共通部分 <InlineMath math="U \cap V" /> の穴の数」から代数的に計算することが可能になる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="ホモロジー代数の圏論的意義"
            >
                <p>
                    ここで行った「図式追跡（diagram chasing）」による証明や構成は、空間が多様体であろうが、多面体であろうが、あるいは抽象的な加群であろうが、その舞台が「アーベル圏」でありさえすれば全く同じように成り立ちます。
                </p>
                <p>
                    アーベル圏の公理は、代数幾何学における「層のコホモロジー」や、代数数理工学における様々なホモロジー理論を、「全く同じ圏論の定理（スネークの補題など）」で一挙に処理するための究極の抽象化インターフェースなのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="d \circ d = 0" /> を満たす列を<strong>鎖複体</strong>と呼び、その不完全さを測る商 <InlineMath math="\ker / \mathrm{Im}" /> を<strong>ホモロジー群</strong>と呼ぶ。</li>
                    <li>鎖複体の短完全系列からは、スネークの補題によって、ホモロジー群を繋ぐ<strong>長完全系列</strong>が必ず得られる。</li>
                    <li>アーベル圏の理論は、幾何学的な「空間の形」と代数的な「方程式の解」を、ホモロジーという共通の言語で計算可能にする基礎である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
