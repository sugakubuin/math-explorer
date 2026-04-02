import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionVectorSpaceOrientation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは外積や行列式の代数的な性質を主に見てきましたが、ここからはそれらが持つ幾何学的な意味、とくに「空間の向き（orientation）」という概念に焦点を当てます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">向きの定義</h2>

            <p className="leading-relaxed">
                空間に「向き」を入れるとは、ある基準となる基底を「正の向き」と定めたとき、他のすべての基底がそれと同じ向きを持つか、逆の向きを持つかを分類することを意味します。この分類の鍵となるのが変換行列の行列式の符号です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 5.1-1 (順序付き基底の同値関係)"
            >
                <p>
                    有限次元ベクトル空間 <InlineMath math="V" /> の 2 つの順序付き基底 <InlineMath math="\mathcal{B} = (v_1, \ldots, v_n)" /> と <InlineMath math="\mathcal{B}' = (v'_1, \ldots, v'_n)" /> が与えられたとする。<InlineMath math="\mathcal{B}" /> から <InlineMath math="\mathcal{B}'" /> への変換行列 <InlineMath math="P" />（すなわち <InlineMath math="v'_i = \sum_j P_{ji} v_j" />）を考える。
                </p>
                <p>
                    このとき、<InlineMath math="\det P > 0" /> であるならば、<InlineMath math="\mathcal{B}" /> と <InlineMath math="\mathcal{B}'" /> は<strong>同じ向き</strong>であるといい、<InlineMath math="\mathcal{B} \sim \mathcal{B}'" /> と表す。<InlineMath math="\det P < 0" /> のときは<strong>逆の向き</strong>であるという。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この関係が実際に「向き」の概念としてうまく機能するためには、同値関係をなしている必要があります。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 5.1-1 (二値性)"
            >
                <p>
                    関係 <InlineMath math="\sim" /> は順序付き基底全体の集合上の同値関係であり、任意の有限次元ベクトル空間（<InlineMath math="\dim V \geq 1" />）には、恰好 2 つの同値類が存在する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    基底変換行列は正則行列であるため、<InlineMath math="\det P \neq 0" /> であり、<InlineMath math="\det P > 0" /> か <InlineMath math="\det P < 0" /> のいずれかである。同値関係の公理を確認する。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>反射律：</strong> <InlineMath math="\mathcal{B}" /> から <InlineMath math="\mathcal{B}" /> への変換行列は単位行列 <InlineMath math="I" /> であり、<InlineMath math="\det I = 1 > 0" />。よって <InlineMath math="\mathcal{B} \sim \mathcal{B}" />。</li>
                    <li><strong>対称律：</strong> <InlineMath math="\mathcal{B} \sim \mathcal{B}'" /> ならば <InlineMath math="\det P > 0" />。逆の変換行列は <InlineMath math="P^{-1}" /> であり、<InlineMath math="\det(P^{-1}) = 1/\det P > 0" />。よって <InlineMath math="\mathcal{B}' \sim \mathcal{B}" />。</li>
                    <li><strong>推移律：</strong> <InlineMath math="\mathcal{B} \sim \mathcal{B}'" />（変換行列 <InlineMath math="P" />）かつ <InlineMath math="\mathcal{B}' \sim \mathcal{B}''" />（変換行列 <InlineMath math="Q" />）とする。<InlineMath math="\mathcal{B}" /> から <InlineMath math="\mathcal{B}''" /> への変換行列は <InlineMath math="PQ" /> であり、<InlineMath math="\det(PQ) = \det P \det Q" />。正の数同士の積は正なので <InlineMath math="\det(PQ) > 0" />。よって <InlineMath math="\mathcal{B} \sim \mathcal{B}''" />。</li>
                </ul>
                <p>
                    また、ある基底 <InlineMath math="(v_1, v_2, \ldots, v_n)" /> に対して、最初のベクトルの符号を反転させた <InlineMath math="(-v_1, v_2, \ldots, v_n)" /> への変換行列の行列式は <InlineMath math="-1" /> であるため、同値類は必ず 2 つ存在する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="definition"
                title="Definition 5.1-2 (向きと正規基底)"
            >
                <p>
                    ベクトル空間の<strong>向き（orientation）</strong>とは、この 2 つの同値類のうち一方を選び、「正の向き」と指定することである。正の向きに属する基底を<strong>正規基底（positively oriented basis）</strong>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                直感的に馴染みのある <InlineMath math="\mathbb{R}^2" /> の例で確認してみましょう。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 5.1-1 (<InlineMath math="\mathbb{R}^2" /> の向き)</span>}
            >
                <p>
                    <InlineMath math="\mathbb{R}^2" /> の標準基底 <InlineMath math="(e_1, e_2)" /> を正の向き（正規基底）と定める。
                </p>
                <p>
                    基底の順序を入れ替えた <InlineMath math="(e_2, e_1)" /> を考えると、変換行列は <InlineMath math="\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}" /> であり、その行列式は <InlineMath math="-1 < 0" /> である。したがって <InlineMath math="(e_2, e_1)" /> は逆の向き（負の向き）を持つ。
                </p>
                <p>
                    また、<InlineMath math="(e_1 + e_2, e_1 - e_2)" /> という基底を考えると、変換行列は <InlineMath math="\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" /> であり、行列式は <InlineMath math="-2 < 0" /> である。これも負の向きである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">線形写像と向きの保存</h2>

            <p className="leading-relaxed">
                ベクトル空間の間をつなぐ線形同型写像が、向きを保つか反転させるかは、その写像の行列式の符号によって判定できます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 5.1-3 (向きを保つ写像)"
            >
                <p>
                    <InlineMath math="V, W" /> をともに行き付けられた（正の向きが指定された）同次元のベクトル空間とする。同型写像 <InlineMath math="f : V \to W" /> が<strong>向きを保つ（orientation-preserving）</strong>とは、<InlineMath math="V" /> の正規基底 <InlineMath math="\mathcal{B}" /> の像 <InlineMath math="f(\mathcal{B})" /> が <InlineMath math="W" /> の正規基底になることをいう。
                </p>
                <p>
                    特に <InlineMath math="V = W" /> で標準的な向きを考えている場合、<InlineMath math="f" /> が向きを保つことは <InlineMath math="\det f > 0" /> と同値である。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 5.1-2 (<InlineMath math="\mathbb{R}^3" /> での向きの保存と反転)</span>}
            >
                <p>
                    <InlineMath math="\mathbb{R}^3" /> において、原点を通る軸周りの<strong>回転</strong>を表す行列 <InlineMath math="R" /> は直交行列であり、<InlineMath math="\det R = 1 > 0" /> を満たす。したがって、回転は空間の向きを保つ。右手系の基底は回転させても右手系のままである。
                </p>
                <p>
                    一方、原点に関する<strong>空間反転（パリティ変換）</strong> <InlineMath math="P(v) = -v" /> は、行列で表すと <InlineMath math="-I" />（<InlineMath math="3 \times 3" /> の単位行列のマイナス）であり、<InlineMath math="\det(-I) = (-1)^3 = -1 < 0" /> である。したがって、空間反転は向きを反転させる。右手系は左手系に移る。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>2 つの基底間の変換行列の行列式が正であるとき、それらの基底は同じ向きを持つという。</li>
                    <li>向きの同値類は必ず 2 つ存在し、その一方を「正の向き」と指定することで空間を向き付ける。</li>
                    <li>同型写像 <InlineMath math="f" /> が向きを保つことは、その行列式が正（<InlineMath math="\det f > 0" />）であることと同値である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
