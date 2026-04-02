import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionInnerProductAndContraction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                テンソル積空間に対する重要な演算として「縮約」があります。これは双対空間との自然なペアリングを一般化したものであり、行列のトレースや物理における添字の計算など、広範な応用を持ちます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">自然なペアリングと縮約</h2>

            <p className="leading-relaxed">
                ベクトルとその双対空間の元（線形形式）が出会うと、スカラー値が得られます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.4-1 (自然なペアリング)"
            >
                <p>
                    有限次元ベクトル空間 <InlineMath math="V" /> とその双対空間 <InlineMath math="V^* = \mathrm{Hom}(V, \mathbb{k})" /> の間に、双線形写像 <InlineMath math="\langle \cdot, \cdot \rangle : V^* \times V \to \mathbb{k}" /> を
                    <BlockMath math="\langle \phi, v \rangle = \phi(v)" />
                    で定める。これを<strong>自然なペアリング</strong>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このペアリングを、テンソル積の内部で適用することで、テンソルの階数（変数）を減らすことができます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.4-2 (縮約)"
            >
                <p>
                    テンソル <InlineMath math="T \in V^* \otimes V" /> に対して、<strong>縮約（contraction）</strong> <InlineMath math="\mathrm{tr} : V^* \otimes V \to \mathbb{k}" /> を
                    <BlockMath math="\mathrm{tr}(T) = \sum_i \langle e^i, T(e_i) \rangle" />
                    で定める（<InlineMath math="\{e_i\}" /> が基底、<InlineMath math="\{e^i\}" /> が双対基底）。
                </p>
                <p>
                    より一般に、多重テンソル空間 <InlineMath math="V_1 \otimes \cdots \otimes V_n" /> の中で、ある成分 <InlineMath math="V_k" /> が別の成分 <InlineMath math="V_l" /> の双対空間（つまり <InlineMath math="V_k = V_l^*" />）であるとき、その 2 つの成分でペアリングをとることにより、階数を 2 つ下げる操作を縮約という。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 2.4-1 (<InlineMath math="V^* \otimes V" /> の縮約とトレース)</span>}
            >
                <p>
                    <InlineMath math="T \in V^* \otimes V" /> を成分表示で <InlineMath math="T = \sum_{i,j} T^i{}_j \, e^j \otimes e_i" /> と書く。<InlineMath math="\phi \otimes v" /> の縮約は <InlineMath math="\phi(v)" /> であるから、線形に拡張すると、
                    <BlockMath math="\begin{aligned} \mathrm{tr}(T) &= \sum_{i,j} T^i{}_j \, \langle e^j, e_i \rangle \\ &= \sum_{i,j} T^i{}_j \delta^j_i \\ &= \sum_i T^i{}_i \end{aligned}" />
                    となる。これは、<InlineMath math="T^i{}_j" /> を行列と見なしたときの<strong>トレース（対角成分の和）</strong>に一致している。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="アインシュタインの縮約記法"
            >
                <p>
                    物理学などでは、上付きの添字（反変）と下付きの添字（共変）が同じ文字で現れたとき、自動的にその添字について和をとるという記法（アインシュタインの縮約記法）が用いられます。<InlineMath math="\sum_i T^i{}_i" /> を単に <InlineMath math="T^i{}_i" /> と書くことで、テンソルの縮約が簡潔に記述されます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">内積からテンソルへの持ち上げ</h2>

            <p className="leading-relaxed">
                ベクトル空間に内積（非退化双線形形式）が与えられると、元の空間とその双対空間を自然に同一視することができます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.4-3 (内積空間のペアリング)"
            >
                <p>
                    内積 <InlineMath math="g : V \times V \to \mathbb{k}" /> は双線形写像であるため、普遍性により <InlineMath math="g \in V^* \otimes V^*" /> とみなすことができる。
                    <InlineMath math="g" /> が非退化であるとき、これは <InlineMath math="V \cong V^*" /> という同型を与える。これを物理では「添字の上げ下げ」と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox
                type="proposition"
                title={<span>Proposition 2.4-1 (内積による同型 <InlineMath math="V \cong V^*" />)</span>}
            >
                <p>
                    非退化双線形形式 <InlineMath math="g" /> が存在するとき、写像
                    <BlockMath math="\phi_g : V \to V^*, \quad \phi_g(v) = g(v, \cdot)" />
                    は線形同型写像（同型写像）である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>線形性：</strong><br />
                    <InlineMath math="g" /> の第一変数についての線形性から、<InlineMath math="\phi_g(v_1+v_2) = g(v_1+v_2, \cdot) = g(v_1, \cdot) + g(v_2, \cdot) = \phi_g(v_1) + \phi_g(v_2)" /> となる。スカラー倍も同様である。
                </p>
                <p>
                    <strong>単射性：</strong><br />
                    <InlineMath math="\phi_g(v) = 0" /> とすると、すべての <InlineMath math="w \in V" /> に対して <InlineMath math="g(v, w) = 0" /> となる。<InlineMath math="g" /> は非退化であるため、これから <InlineMath math="v = 0" /> が導かれる。
                </p>
                <p>
                    有限次元ベクトル空間において、同じ次元の空間への単射線形写像は全射でもあるため、<InlineMath math="\phi_g" /> は同型写像となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.4-2 (標準内積による同型と転置)"
            >
                <p>
                    <InlineMath math="\mathbb{R}^3" /> の標準内積 <InlineMath math="g(v, w) = v^T w" /> を考える。<InlineMath math="v = (v_1, v_2, v_3)^T" /> に対して、同型写像 <InlineMath math="\phi_g(v)" /> は、<InlineMath math="w" /> を入力として <InlineMath math="v^T w" /> を返す線形形式である。
                </p>
                <p>
                    行列表現では、<InlineMath math="\phi_g(v)" /> は行ベクトル <InlineMath math="(v_1, v_2, v_3)" /> に対応する。つまり、列ベクトルと行ベクトル（双対空間の元）の同一視は、標準内積が引き起こす同型に他ならない。
                </p>
                <p>
                    一般の内積 <InlineMath math="g" /> を成分 <InlineMath math="g_{ij} = g(e_i, e_j)" /> で表すと、<InlineMath math="\phi_g(v)" /> の第 <InlineMath math="j" /> 成分は <InlineMath math="\phi_g(v)_j = \sum_i g_{ij} v^i" /> と計算される。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="\langle \phi, v \rangle = \phi(v)" /> は双対空間との自然なペアリングを与える。</li>
                    <li>テンソル積空間の成分において、互いに双対な空間の間でペアリングを計算し、テンソルの階数を下げる操作を<strong>縮約</strong>という。</li>
                    <li>非退化な内積 <InlineMath math="g" /> は、<InlineMath math="\phi_g(v) = g(v, \cdot)" /> によって <InlineMath math="V" /> と <InlineMath math="V^*" /> の間の自然な同型を与える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}