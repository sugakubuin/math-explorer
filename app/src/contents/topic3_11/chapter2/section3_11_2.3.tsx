import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionTensorProductConstruction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節ではテンソル積を「普遍性」という性質によって特徴付けました。本節では、そのような空間が実際に存在することを示すため、自由ベクトル空間と商空間の概念を用いてテンソル積を具体的に構成します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">自由ベクトル空間による構成</h2>

            <p className="leading-relaxed">
                テンソル積を構成するための第一歩として、集合の要素をそのまま基底として持つ巨大なベクトル空間を考えます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.3-1 (自由ベクトル空間)"
            >
                <p>
                    集合 <InlineMath math="S" /> 上の<strong>自由ベクトル空間</strong> <InlineMath math="F(S)" /> とは、<InlineMath math="S" /> の元を基底とするベクトル空間である。すなわち、<InlineMath math="F(S)" /> の元は <InlineMath math="S" /> の元の有限形式和
                    <BlockMath math="\sum_i a_i s_i \quad (a_i \in \mathbb{k}, s_i \in S)" />
                    として表される。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この自由ベクトル空間に対して、双線形性を強制するような関係式で割る（商をとる）ことでテンソル積が得られます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.3-2 (テンソル積の構成)"
            >
                <p>
                    ベクトル空間 <InlineMath math="V, W" /> に対して、直積集合 <InlineMath math="V \times W" /> 上の自由ベクトル空間 <InlineMath math="F(V \times W)" /> を考える。その部分空間 <InlineMath math="R" /> を、以下の形の元すべてによって生成される部分空間とする。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="(v_1+v_2, w) - (v_1,w) - (v_2,w)" /></li>
                    <li><InlineMath math="(\lambda v, w) - \lambda(v,w)" /></li>
                    <li><InlineMath math="(v, w_1+w_2) - (v,w_1) - (v,w_2)" /></li>
                    <li><InlineMath math="(v, \lambda w) - \lambda(v,w)" /></li>
                </ul>
                <p>
                    このとき、テンソル積 <InlineMath math="V \otimes W" /> を商空間 <InlineMath math="F(V \times W) / R" /> として定義する。<InlineMath math="(v,w)" /> の剰余類を <InlineMath math="v \otimes w" /> と書く。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この具体的な構成が、前節で定めた普遍性を満たすことを確認します。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 2.3-1 (構成された空間の普遍性)"
            >
                <p>
                    構成された商空間 <InlineMath math="V \otimes W" /> は、普遍性を満たす。すなわち、任意の双線形写像 <InlineMath math="f : V \times W \to U" /> に対して、<InlineMath math="\tilde{f}(v \otimes w) = f(v,w)" /> を満たす線形写像 <InlineMath math="\tilde{f} : V \otimes W \to U" /> が well-defined かつ唯一に定まる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    まず、<InlineMath math="F(V \times W)" /> から <InlineMath math="U" /> への線形写像 <InlineMath math="F(f)" /> を、基底元 <InlineMath math="(v, w)" /> に対して <InlineMath math="F(f)(v, w) = f(v, w)" /> となるように定義する。<InlineMath math="F(V \times W)" /> は <InlineMath math="V \times W" /> を基底に持つため、これは一意の線形写像として定まる。
                </p>
                <p>
                    次に、<InlineMath math="f" /> が双線形であることから、<InlineMath math="F(f)" /> は <InlineMath math="R" /> の生成元をすべて <InlineMath math="0" /> に送る。例えば、
                    <BlockMath math="\begin{aligned} &F(f)((v_1+v_2, w) - (v_1,w) - (v_2,w)) \\ &= f(v_1+v_2, w) - f(v_1,w) - f(v_2,w) = 0 \end{aligned}" />
                    となる。したがって、<InlineMath math="R \subset \ker F(f)" /> である。
                </p>
                <p>
                    線形代数の準同型定理より、<InlineMath math="F(f)" /> は商空間 <InlineMath math="V \otimes W = F(V \times W) / R" /> 上の線形写像 <InlineMath math="\tilde{f}" /> を自然に誘導する。これが well-defined であり、<InlineMath math="\tilde{f}(v \otimes w) = f(v, w)" /> を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.3-1 (零ベクトルのテンソル積)"
            >
                <p>
                    <InlineMath math="V = W = \mathbb{R}^2" /> で <InlineMath math="v = e_1" />、<InlineMath math="w = 0" /> のとき、
                    <BlockMath math="e_1 \otimes 0 = e_1 \otimes (0 \cdot e_1) = 0 \cdot (e_1 \otimes e_1) = 0" />
                    となる。一般に、純粋テンソル <InlineMath math="v \otimes w" /> が非零となる条件は <InlineMath math="v \neq 0" /> かつ <InlineMath math="w \neq 0" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">テンソル積の基底と次元</h2>

            <p className="leading-relaxed">
                テンソル積空間の具体的な次元と基底は、元のベクトル空間の基底から構成されます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 2.3-1 (テンソル積の基底と次元)"
            >
                <p>
                    有限次元ベクトル空間 <InlineMath math="V" /> の基底を <InlineMath math="\{e_i\}_{i=1}^m" />、<InlineMath math="W" /> の基底を <InlineMath math="\{f_j\}_{j=1}^n" /> とする。このとき、純粋テンソルの集合
                    <BlockMath math="\{e_i \otimes f_j\}_{1 \leq i \leq m, 1 \leq j \leq n}" />
                    は <InlineMath math="V \otimes W" /> の基底となる。特に、
                    <BlockMath math="\dim(V \otimes W) = \dim V \cdot \dim W = mn" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>生成性：</strong><br />
                    任意のベクトル <InlineMath math="v = \sum_i a_i e_i" /> と <InlineMath math="w = \sum_j b_j f_j" /> に対して、双線形性から
                    <BlockMath math="v \otimes w = \left(\sum_i a_i e_i\right) \otimes \left(\sum_j b_j f_j\right) = \sum_{i,j} a_i b_j (e_i \otimes f_j)" />
                    となる。一般のテンソルは純粋テンソルの和であるため、<InlineMath math="\{e_i \otimes f_j\}" /> は <InlineMath math="V \otimes W" /> を生成する。
                </p>
                <p>
                    <strong>線形独立性：</strong><br />
                    基底のインデックスの組 <InlineMath math="(k, l)" /> に対して、双線形写像 <InlineMath math="\phi_{kl} : V \times W \to \mathbb{k}" /> を <InlineMath math="\phi_{kl}(e_i, f_j) = \delta_{ik}\delta_{jl}" /> と定義する。普遍性から、線形写像 <InlineMath math="\tilde{\phi}_{kl} : V \otimes W \to \mathbb{k}" /> が存在して <InlineMath math="\tilde{\phi}_{kl}(e_i \otimes f_j) = \delta_{ik}\delta_{jl}" /> となる。
                </p>
                <p>
                    もし線形関係 <InlineMath math="\sum_{i,j} c_{ij} (e_i \otimes f_j) = 0" /> があるなら、これに <InlineMath math="\tilde{\phi}_{kl}" /> を適用すると
                    <BlockMath math="\tilde{\phi}_{kl}\left(\sum_{i,j} c_{ij} (e_i \otimes f_j)\right) = \sum_{i,j} c_{ij} \delta_{ik}\delta_{jl} = c_{kl} = 0" />
                    となり、すべての係数が <InlineMath math="0" /> となる。よって線形独立である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.3-2 (テンソル積空間の成分表示)"
            >
                <p>
                    <InlineMath math="\mathbb{R}^2 \otimes \mathbb{R}^3" /> の次元は <InlineMath math="2 \times 3 = 6" /> である。基底は、
                    <BlockMath math="e_1\otimes f_1, \ e_1\otimes f_2, \ e_1\otimes f_3, \ e_2\otimes f_1, \ e_2\otimes f_2, \ e_2\otimes f_3" />
                    の 6 個である。この空間の一般の元 <InlineMath math="T" /> は、
                    <BlockMath math="T = \sum_{i=1}^2 \sum_{j=1}^3 T^{ij} e_i \otimes f_j" />
                    と成分 <InlineMath math="T^{ij}" /> を用いて一意に表される。これは <InlineMath math="2 \times 3" /> の行列の成分と同じ情報量を持つ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                テンソル積空間の元は、必ずしも一つの純粋テンソルで書けるわけではありません。量子力学における「エンタングルメント（量子もつれ）」はまさにこの性質に由来します。
            </p>

            <ContentBox
                type="remark"
                title="純粋テンソルでない元の存在"
            >
                <p>
                    <InlineMath math="V \otimes W" /> の元の中には、単一の <InlineMath math="v \otimes w" /> の形に書けないものがあります。例えば <InlineMath math="\mathbb{R}^2 \otimes \mathbb{R}^2" /> において、
                    <BlockMath math="T = e_1\otimes f_1 + e_2\otimes f_2" />
                    は <InlineMath math="v \otimes w" /> と因数分解できません。一般に、テンソル積空間の元は「純粋テンソルの有限個の和」として表されることに注意が必要です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>テンソル積 <InlineMath math="V \otimes W" /> は、自由ベクトル空間 <InlineMath math="F(V \times W)" /> を双線形性を強制する関係式 <InlineMath math="R" /> で割った商空間として構成できる。</li>
                    <li><InlineMath math="\{e_i\}" /> と <InlineMath math="\{f_j\}" /> がそれぞれの基底であるとき、<InlineMath math="\{e_i \otimes f_j\}" /> は <InlineMath math="V \otimes W" /> の基底となる。</li>
                    <li><InlineMath math="V \otimes W" /> の次元は <InlineMath math="\dim V \times \dim W" /> となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}