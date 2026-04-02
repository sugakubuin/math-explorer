import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UniversalCoveringSpace() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                被覆空間の中でも「最も穴がない（単連結である）」ものを普遍被覆空間と呼びます。これはすべての被覆空間の頂点に立つ重要な空間です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">普遍被覆空間の定義と存在</h2>

            <p className="leading-relaxed">
                まず普遍被覆空間の定義を確認し、それがどのような条件で存在するかを述べます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 7.2-1 (普遍被覆空間)"
            >
                <p>
                    底空間 <InlineMath math="X" /> の被覆空間 <InlineMath math="\tilde{X}" /> が<strong>単連結（simply connected）</strong>であるとき、<InlineMath math="\tilde{X}" />（および被覆写像 <InlineMath math="p : \tilde{X} \to X" />）を <InlineMath math="X" /> の<strong>普遍被覆空間（universal covering space）</strong>という。
                </p>
                <p>
                    「普遍」という名前は、<InlineMath math="X" /> の任意の被覆空間 <InlineMath math="\tilde{X}'" /> に対して、普遍被覆空間 <InlineMath math="\tilde{X}" /> が <InlineMath math="\tilde{X}'" /> の被覆空間になる（つまり、他のすべての被覆を覆う最大の被覆である）という性質に由来する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                滑らかな多様体や CW複体のような行儀の良い空間であれば、普遍被覆空間は常に存在します。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 7.2-1 (普遍被覆空間の存在)"
            >
                <p>
                    位相空間 <InlineMath math="X" /> が弧状連結、局所弧状連結、かつ<strong>半局所単連結（semilocally simply connected）</strong>であるならば、<InlineMath math="X" /> には普遍被覆空間 <InlineMath math="\tilde{X}" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    普遍被覆空間 <InlineMath math="\tilde{X}" /> は、<InlineMath math="X" /> 上の基点 <InlineMath math="x_0" /> から出発する「道のホモトピー類」全体を集めた空間として構成できる。
                </p>
                <p>
                    すなわち、集合として
                    <BlockMath math="\tilde{X} = \{ [\gamma] \mid \gamma \text{ は } x_0 \text{ を始点とする } X \text{ 上の道} \}" />
                    を考える（<InlineMath math="[\gamma]" /> は端点を固定した道ホモトピー類）。
                </p>
                <p>
                    被覆写像 <InlineMath math="p : \tilde{X} \to X" /> は、道の終点を対応させる写像 <InlineMath math="p([\gamma]) = \gamma(1)" /> として自然に定義できる。
                </p>
                <p>
                    半局所単連結性（任意の点の近傍で、その近傍内のループが <InlineMath math="X" /> 全体の中で1点に縮められるような近傍が存在するという条件）を用いることで、この集合 <InlineMath math="\tilde{X}" /> に適切な位相を入れることができ、<InlineMath math="p" /> が被覆写像となることが示される。さらに、道の空間という構成そのものから <InlineMath math="\tilde{X}" /> が単連結になることも証明できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 7.2-1 (<InlineMath math="S^1" /> の普遍被覆空間)</span>}
            >
                <p>
                    円周 <InlineMath math="S^1" /> の普遍被覆空間は実数直線 <InlineMath math="\mathbb{R}" /> である。
                </p>
                <p>
                    上の証明の構成に沿って考えると、基点 <InlineMath math="1 \in S^1" /> から出発する道のホモトピー類 <InlineMath math="[\gamma]" /> を指定することは、「円周をどちら回りに何周回ってある点に到達したか」を指定することに等しい。これはまさに実数直線上の「巻き角（偏角）」の値を実数 <InlineMath math="t \in \mathbb{R}" /> として与えることと1対1に対応しており、道のホモトピー類の空間が <InlineMath math="\mathbb{R}" /> に他ならないことが直感的に理解できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">普遍被覆空間の一意性</h2>

            <p className="leading-relaxed">
                普遍被覆空間は、同相というだけでなく「被覆構造を保つ同型」の意味で一意に定まります。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 7.2-2 (普遍被覆空間の一意性)"
            >
                <p>
                    <InlineMath math="X" /> の2つの普遍被覆空間 <InlineMath math="\tilde{X}, \tilde{X}'" /> が存在したとする。このとき、これらは <InlineMath math="X" /> 上で同型である。すなわち、同相写像 <InlineMath math="h : \tilde{X} \to \tilde{X}'" /> であって、<InlineMath math="p' \circ h = p" /> を満たすものが存在する。
                </p>
                <p>
                    さらに、普遍被覆空間 <InlineMath math="\tilde{X}" /> の被覆変換群は、底空間の基本群と同型になる。
                    <BlockMath math="\mathrm{Deck}(\tilde{X}/X) \cong \pi_1(X, x_0)" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>同型（一意性）について：</strong><br />
                    持ち上げ定理（Theorem 6.3-1）を用いる。<InlineMath math="\tilde{X}" /> は単連結であるから、基本群の像は自明群であり、任意の包含条件を満たす。したがって被覆写像 <InlineMath math="p : \tilde{X} \to X" /> は、被覆空間 <InlineMath math="\tilde{X}'" /> への連続写像 <InlineMath math="h : \tilde{X} \to \tilde{X}'" /> に持ち上げられる（<InlineMath math="p' \circ h = p" />）。対称性より逆向きの持ち上げ <InlineMath math="h' : \tilde{X}' \to \tilde{X}" /> も存在し、これらが互いに逆写像となることが持ち上げの一意性から従い、同相写像が得られる。
                </p>
                <p>
                    <strong>被覆変換群と同型の対応：</strong><br />
                    <InlineMath math="\tilde{X}" /> は単連結であるから、その基本群の像は自明群 <InlineMath math="\{e\}" /> である。自明群は <InlineMath math="\pi_1(X)" /> の正規部分群であるから、普遍被覆は自動的に正規被覆となる。
                    Definition 7.1-2 で述べたように正規被覆においては <InlineMath math="\mathrm{Deck}(\tilde{X}/X) \cong \pi_1(X) / p_*(\pi_1(\tilde{X}))" /> が成り立つ。<InlineMath math="p_*(\pi_1(\tilde{X})) = \{e\}" /> であるから、<InlineMath math="\mathrm{Deck}(\tilde{X}/X) \cong \pi_1(X)" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 7.2-2 (<InlineMath math="\mathrm{Deck}(\mathbb{R}/S^1) \cong \pi_1(S^1)" />)</span>}
            >
                <p>
                    <InlineMath math="S^1" /> の普遍被覆 <InlineMath math="\mathbb{R}" /> の場合、被覆変換群 <InlineMath math="\mathrm{Deck}(\mathbb{R}/S^1)" /> は整数分の平行移動のなす群であり、<InlineMath math="\mathbb{Z}" /> に同型であった（Example 7.1-1）。
                </p>
                <p>
                    一方で、<InlineMath math="S^1" /> の基本群も <InlineMath math="\pi_1(S^1) \cong \mathbb{Z}" /> であった。
                    この2つの <InlineMath math="\mathbb{Z}" /> は、Theorem 7.2-2 によって同型として結びついている。具体的には、底空間のループ <InlineMath math="\gamma_n" />（<InlineMath math="n" />周回るループ）を持ち上げると、実数直線上で始点から終点まで「<InlineMath math="+n" />」だけ移動する道になる。この「<InlineMath math="+n" /> の移動」が被覆変換 <InlineMath math="\varphi_n(t) = t+n" /> に対応しているのである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>単連結な被覆空間を普遍被覆空間といい、適当な条件（半局所単連結性など）のもとで同型の意味で一意に存在する。</li>
                    <li>普遍被覆空間は「道のホモトピー類の空間」として具体的に構成できる。</li>
                    <li>普遍被覆空間の被覆変換群は、底空間の基本群そのものと同型になる（<InlineMath math="\mathrm{Deck}(\tilde{X}/X) \cong \pi_1(X)" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}