import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExactSequencesAndSnakeLemma() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                アーベル圏が定義されたことで、ホモロジー代数の最も基本的な言語である「完全系列」を語る準備が整いました。完全系列は、空間や代数系の「情報の欠落」や「同型関係」を精密に記述するためのツールです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">完全系列の定義</h2>

            <ContentBox
                type="definition"
                title="Definition 8.3-1 (完全系列 / Exact Sequence)"
            >
                <p>
                    アーベル圏 <InlineMath math="\mathcal{A}" /> における対象と射の列
                    <BlockMath math="\cdots \to A \xrightarrow{f} B \xrightarrow{g} C \to \cdots" />
                    が<strong>完全（exact）</strong>であるとは、列に現れるすべての連続する2射 <InlineMath math="f, g" /> について、
                    <BlockMath math="\mathrm{Im}(f) = \ker(g)" />
                    が成立することである。（※アーベル圏において、これは <InlineMath math="g \circ f = 0" /> かつ、その間の情報の欠落がないことを意味する。）
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.3-1 (短完全系列)"
            >
                <p>
                    最も頻繁に現れるのが、以下の5つの項からなる<strong>短完全系列（Short Exact Sequence）</strong>である。
                    <BlockMath math="0 \to A \xrightarrow{f} B \xrightarrow{g} C \to 0" />
                </p>
                <p>
                    各部分での完全性の意味を紐解く。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="0 \to A \xrightarrow{f} B" /> が完全： <InlineMath math="\ker(f) = \mathrm{Im}(0 \to A) = 0" />。すなわち <InlineMath math="f" /> は<strong>単射（モノ射）</strong>である。</li>
                    <li><InlineMath math="A \xrightarrow{f} B \xrightarrow{g} C" /> が完全： <InlineMath math="\mathrm{Im}(f) = \ker(g)" />。</li>
                    <li><InlineMath math="B \xrightarrow{g} C \to 0" /> が完全： <InlineMath math="\mathrm{Im}(g) = \ker(C \to 0) = C" />。すなわち <InlineMath math="g" /> は<strong>全射（エピ射）</strong>である。</li>
                </ul>
                <p>
                    群や加群の圏において、この短完全系列が存在することは、第一同型定理より
                    <BlockMath math="C \cong B / f(A)" />
                    という同型が成り立つことを示している。完全系列は「<InlineMath math="B" /> は <InlineMath math="A" /> と <InlineMath math="C" /> を貼り合わせた構造を持っている」ことを表現する。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.3-2 (完全系列の具体例)"
            >
                <p>
                    <InlineMath math="\mathbb{Z}" /> を整数上の加群（アーベル群）とする。<InlineMath math="n" /> 倍写像 <InlineMath math="\times n : \mathbb{Z} \to \mathbb{Z}" /> は単射であり、その像は <InlineMath math="n\mathbb{Z}" /> である。これを自然な商写像で割ると、剰余群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> が得られる。
                    これは以下の短完全系列で記述される。
                    <BlockMath math="0 \to \mathbb{Z} \xrightarrow{\times n} \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z} \to 0" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">スネークの補題</h2>

            <p className="leading-relaxed">
                完全系列が複数与えられたとき、それらを結びつける強力な定理がホモロジー代数には多数存在します。その中で最も有名で、あらゆる定理の基礎となるのが「スネークの補題」です。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 8.3-1 (スネークの補題 / Snake Lemma)"
            >
                <p>
                    アーベル圏において、以下の可換図式が与えられたとする。ただし、上の行と下の行の列はそれぞれ完全であるとする。（短完全系列である必要はない）
                </p>
                <BlockMath math="\begin{matrix} & A' & \xrightarrow{f'} & B' & \xrightarrow{g'} & C' & \to 0 \\ & \downarrow{\alpha} & & \downarrow{\beta} & & \downarrow{\gamma} & \\ 0 \to & A & \xrightarrow{f} & B & \xrightarrow{g} & C & \end{matrix}" />
                <p>
                    このとき、縦の射 <InlineMath math="\alpha, \beta, \gamma" /> の核と余核を結ぶ、以下の<strong>長完全系列</strong>が存在する。
                    <BlockMath math="\begin{aligned} \ker \alpha \xrightarrow{\tilde{f}} \ker \beta \xrightarrow{\tilde{g}} &\ker \gamma \xrightarrow{\partial} \mathrm{coker}\, \alpha \\ &\xrightarrow{\bar{f}} \mathrm{coker}\, \beta \xrightarrow{\bar{g}} \mathrm{coker}\, \gamma \end{aligned}" />
                    ここで、<InlineMath math="\ker \gamma" /> から <InlineMath math="\mathrm{coker}\, \alpha" /> へ蛇のようにうねって繋がる写像 <InlineMath math="\partial" /> を<strong>連結準同型（connecting homomorphism）</strong>または<strong>蛇の写像</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (要素を用いた証明の概略)"
            >
                <p>
                    一般のアーベル圏でも「ミッチェルの埋め込み定理」により加群の圏とみなして要素を用いて証明してよい。蛇の写像 <InlineMath math="\partial : \ker \gamma \to \mathrm{coker}\, \alpha" /> の構成のみを示す。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 mb-2">
                    <li><InlineMath math="c' \in \ker \gamma" /> をとる（すなわち <InlineMath math="c' \in C', \gamma(c') = 0" />）。</li>
                    <li>上段の <InlineMath math="g'" /> は全射（図式の <InlineMath math="\to 0" /> より）なので、<InlineMath math="g'(b') = c'" /> となる <InlineMath math="b' \in B'" /> を一つ選ぶ。</li>
                    <li>図式の可換性から、<InlineMath math="g(\beta(b')) = \gamma(g'(b')) = \gamma(c') = 0" />。よって <InlineMath math="\beta(b') \in \ker g" />。</li>
                    <li>下段の完全性より <InlineMath math="\ker g = \mathrm{Im} f" />。よって <InlineMath math="f(a) = \beta(b')" /> となる <InlineMath math="a \in A" /> が一意に存在する（下段の <InlineMath math="f" /> は単射なため一意）。</li>
                    <li>この <InlineMath math="a" /> を商空間 <InlineMath math="\mathrm{coker}\, \alpha = A / \mathrm{Im} \alpha" /> に射影したものを <InlineMath math="[a]" /> とする。</li>
                </ol>
                <p>
                    この対応 <InlineMath math="\partial(c') = [a]" /> が、ステップ2での <InlineMath math="b'" /> の選び方によらず well-defined であること、および列全体が完全になることは要素の計算で（図式追跡により）確かめられる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="ホモロジー代数の源泉"
            >
                <p>
                    スネークの補題によって作られた「蛇の写像 <InlineMath math="\partial" />」は、一見すると何のつながりもない空間同士（<InlineMath math="C'" /> の世界と <InlineMath math="A" /> の世界）をマジックのように繋ぎ合わせてくれます。
                </p>
                <p>
                    次節で学ぶ「ホモロジーの長完全系列」など、代数的トポロジーやホモロジー代数に現れるあらゆる長完全系列は、すべてこのスネークの補題の連結準同型 <InlineMath math="\partial" /> を応用して作られています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>完全系列</strong>とは、<InlineMath math="\mathrm{Im}(f) = \ker(g)" /> （入ってきたものがすべて次で消える）を満たす射の列である。</li>
                    <li><strong>短完全系列</strong> <InlineMath math="0 \to A \to B \to C \to 0" /> は、<InlineMath math="B" /> が <InlineMath math="A" /> と <InlineMath math="C" /> から構成されていること（商空間の同型定理）を表す。</li>
                    <li><strong>スネークの補題</strong>は、2つの完全系列間の射から、核と余核を繋ぐ新たな「長完全系列」を魔法のように生み出すホモロジー代数の基本定理である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
