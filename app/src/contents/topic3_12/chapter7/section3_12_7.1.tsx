import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DeckTransformationGroup() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                被覆空間の理論において、被覆空間上の「シートを入れ替える」ような対称性の変換を考えると、そこに自然な群構造が現れます。この章では、被覆変換（デック変換）と呼ばれる概念を定義し、それが基本群とどのように関連しているかを見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">被覆変換の定義と群構造</h2>

            <p className="leading-relaxed">
                まず、被覆空間上の自己同相写像であって、被覆写像の構造を保つようなものを定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 7.1-1 (被覆変換)"
            >
                <p>
                    <InlineMath math="p : \tilde{X} \to X" /> を被覆写像とする。<InlineMath math="\tilde{X}" /> から <InlineMath math="\tilde{X}" /> への同相写像 <InlineMath math="\varphi : \tilde{X} \to \tilde{X}" /> が<strong>被覆変換（covering transformation, デック変換 deck transformation）</strong>であるとは、
                    <BlockMath math="p \circ \varphi = p" />
                    を満たすことをいう。
                </p>
                <p>
                    被覆変換全体からなる集合を <InlineMath math="\mathrm{Deck}(p)" /> または <InlineMath math="\mathrm{Aut}(\tilde{X}/X)" /> と表す。この集合は、写像の合成を演算として<strong>群</strong>をなす。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                直感的には、被覆変換は被覆空間の各シートを他のシートへ「ぴったり重ね合わせる」ような対称操作の集まりです。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 7.1-1 (<InlineMath math="p : \mathbb{R} \to S^1" /> の被覆変換群)</span>}
            >
                <p>
                    指数写像 <InlineMath math="p : \mathbb{R} \to S^1" />、<InlineMath math="p(t) = e^{2\pi i t}" /> の被覆変換群を考える。
                </p>
                <p>
                    各整数 <InlineMath math="n \in \mathbb{Z}" /> に対して、平行移動 <InlineMath math="\varphi_n : \mathbb{R} \to \mathbb{R}" /> を <InlineMath math="\varphi_n(t) = t + n" /> と定める。これが被覆変換であることを確認する。
                    <BlockMath math="\begin{aligned} p(\varphi_n(t)) &= p(t + n) = e^{2\pi i (t+n)} = e^{2\pi i t} e^{2\pi i n} \\ &= e^{2\pi i t} \cdot 1 = p(t) \end{aligned}" />
                    したがって <InlineMath math="p \circ \varphi_n = p" /> が成り立ち、<InlineMath math="\varphi_n" /> は被覆変換である。
                </p>
                <p>
                    逆に、任意の被覆変換はこのような整数分の平行移動に限られるため、被覆変換群は <InlineMath math="\mathrm{Deck}(p) \cong \mathbb{Z}" /> となることがわかる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                被覆変換は、ある1点での値が決まれば写像全体が完全に決定されるという非常に強い「剛性」を持っています。ここで、被覆空間の構造を考える上で重要な「ファイバー」という概念を定義しておきます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 7.1-2 (ファイバー)"
            >
                <p>
                    被覆写像 <InlineMath math="p : \tilde{X} \to X" /> による底空間の1点 <InlineMath math="x \in X" /> の逆像 <InlineMath math="p^{-1}(x) \subset \tilde{X}" /> を、<InlineMath math="x" /> 上の<strong>ファイバー（fiber）</strong>と呼ぶ。
                </p>
                <p>
                    被覆写像の定義から、ファイバーは局所的に互いに交わらないシートの1点ずつから構成されるため、離散的な点の集まり（シートの枚数と同じ個数の点）となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このファイバーの概念を用いると、被覆変換の性質をより明確に記述することができます。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 7.1-1 (被覆変換の一意性)"
            >
                <p>
                    被覆空間 <InlineMath math="\tilde{X}" /> が弧状連結かつ局所弧状連結であるとする。
                    このとき、被覆変換 <InlineMath math="\varphi, \psi \in \mathrm{Deck}(p)" /> がある一点 <InlineMath math="\tilde{x}_0 \in \tilde{X}" /> で同じ値をとる（すなわち <InlineMath math="\varphi(\tilde{x}_0) = \psi(\tilde{x}_0)" />）ならば、<InlineMath math="\varphi = \psi" /> である。
                </p>
                <p>
                    特に、恒等写像以外の被覆変換は不動点を持たない。すなわち、<InlineMath math="\mathrm{Deck}(p)" /> の作用は各ファイバー <InlineMath math="p^{-1}(x)" /> 上で自由（free）である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="\varphi(\tilde{x}_0) = \psi(\tilde{x}_0)" /> と仮定する。同相写像の逆写像を考え、<InlineMath math="\psi^{-1} \circ \varphi" /> という被覆変換を考えると、これは <InlineMath math="\tilde{x}_0" /> を固定する。すなわち、最初から <InlineMath math="\varphi(\tilde{x}_0) = \tilde{x}_0" /> であるとして、<InlineMath math="\varphi = \mathrm{id}_{\tilde{X}}" /> を示せば十分である。
                </p>
                <p>
                    写像の一致集合 <InlineMath math="A = \{ \tilde{x} \in \tilde{X} \mid \varphi(\tilde{x}) = \tilde{x} \}" /> を考える。
                    <InlineMath math="\tilde{X}" /> がハウスドルフ空間であれば <InlineMath math="A" /> は直ちに閉集合である（一般の被覆空間でも、被覆写像が局所同相であることから <InlineMath math="A" /> が閉であることが示せる）。
                </p>
                <p>
                    次に <InlineMath math="A" /> が開集合であることを示す。<InlineMath math="\tilde{x} \in A" /> とし、<InlineMath math="x = p(\tilde{x})" /> の均等被覆近傍 <InlineMath math="U" /> をとる。<InlineMath math="\tilde{x}" /> を含むシートを <InlineMath math="V" /> とすると、<InlineMath math="p|_V : V \to U" /> は同相写像である。<InlineMath math="p \circ \varphi = p" /> であり、<InlineMath math="\varphi(\tilde{x}) = \tilde{x} \in V" /> であるから、連続性より <InlineMath math="\tilde{x}" /> のある近傍 <InlineMath math="W \subset V" /> では <InlineMath math="\varphi(W) \subset V" /> となる。
                    <InlineMath math="W" /> 上で <InlineMath math="p \circ \varphi = p" /> であり、<InlineMath math="V" /> 上で <InlineMath math="p" /> は単射であるから、<InlineMath math="W" /> 上で <InlineMath math="\varphi = \mathrm{id}" /> とならざるを得ない。よって <InlineMath math="A" /> は開集合である。
                </p>
                <p>
                    <InlineMath math="\tilde{X}" /> は連結であり、<InlineMath math="\tilde{x}_0 \in A" /> より <InlineMath math="A" /> は空ではない。したがって <InlineMath math="A = \tilde{X}" /> となり、<InlineMath math="\varphi = \mathrm{id}_{\tilde{X}}" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">正規被覆と被覆変換群</h2>

            <p className="leading-relaxed">
                被覆変換群が、ファイバー上のすべての点を移り変われるほど「豊か」である場合、その被覆を正規被覆と呼びます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 7.1-3 (正規被覆)"
            >
                <p>
                    弧状連結かつ局所弧状連結な被覆空間 <InlineMath math="\tilde{X}" /> をもつ被覆写像 <InlineMath math="p : \tilde{X} \to X" /> が<strong>正規被覆（normal covering）</strong>（または Galois 被覆）であるとは、次の同値な条件のいずれか（したがってすべて）を満たすことをいう。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="p_*(\pi_1(\tilde{X}, \tilde{x}))" /> が <InlineMath math="\pi_1(X, p(\tilde{x}))" /> の<strong>正規部分群</strong>である。</li>
                    <li>被覆変換群 <InlineMath math="\mathrm{Deck}(p)" /> が各ファイバー <InlineMath math="p^{-1}(x)" /> 上に<strong>推移的（transitive）</strong>に作用する。すなわち、ファイバー上の任意の2点 <InlineMath math="\tilde{x}_1, \tilde{x}_2" /> に対して、<InlineMath math="\varphi(\tilde{x}_1) = \tilde{x}_2" /> となる被覆変換 <InlineMath math="\varphi" /> が存在する。</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                正規被覆の場合、被覆変換群と基本群の間に美しい同型関係が成立します。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 7.1-2 (<InlineMath math="p : \mathbb{R} \to S^1" /> は正規被覆)</span>}
            >
                <p>
                    先ほど Example 7.1-1 で見た指数写像 <InlineMath math="p : \mathbb{R} \to S^1" /> を考える。
                    <InlineMath math="\tilde{X} = \mathbb{R}" /> は単連結なので <InlineMath math="\pi_1(\mathbb{R}) = \{e\}" /> であり、その像は自明群 <InlineMath math="\{0\}" /> である。
                    <InlineMath math="\{0\}" /> は <InlineMath math="\pi_1(S^1) \cong \mathbb{Z}" /> の正規部分群（可換群の部分群は常に正規部分群）であるため、この被覆は正規被覆である。
                </p>
                <p>
                    また、正規被覆においては一般に
                    <BlockMath math="\mathrm{Deck}(p) \cong \pi_1(X) / p_*(\pi_1(\tilde{X}))" />
                    という同型が成り立つことが知られている。この例に当てはめると、
                    <BlockMath math="\mathbb{Z} \cong \mathbb{Z} / \{0\}" />
                    となり、Example 7.1-1 で求めた被覆変換群が <InlineMath math="\mathbb{Z}" /> であることと整合している。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>被覆変換とは、被覆構造を保つ（<InlineMath math="p \circ \varphi = p" />）被覆空間上の自己同相写像のことである。</li>
                    <li>被覆変換全体は群をなし、恒等写像以外の被覆変換は不動点を持たない（作用が自由である）。</li>
                    <li>被覆変換がファイバー上で推移的に作用するような被覆を正規被覆と呼び、このとき被覆空間の基本群の像は底空間の基本群の正規部分群となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}