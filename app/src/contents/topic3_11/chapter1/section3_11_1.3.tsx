import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionTransposeMap() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                線形写像から誘導される双対空間間の写像と、その行列表現である転置行列との関係を振り返ります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">双対写像（転置写像）の定義</h2>

            <p className="leading-relaxed">
                あるベクトル空間から別のベクトル空間への線形写像が与えられたとき、それらの双対空間の間には逆向きの線形写像が自然に定まります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.3-1 (双対写像)"
            >
                <p>
                    線形写像 <InlineMath math="f : V \to W" /> に対して、<strong>双対写像</strong> <InlineMath math="f^* : W^* \to V^*" /> を
                    <BlockMath math="(f^*\psi)(v) = \psi(f(v)) \quad (\psi \in W^*, v \in V)" />
                    で定める。これは幾何学などでは「<strong>引き戻し</strong>（プルバック）」とも呼ばれる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                双対写像をとる操作は、線形結合や写像の合成とよく振る舞います。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 1.3-1 (双対写像の性質)"
            >
                <p>
                    双対写像の性質：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><InlineMath math="(f \circ g)^* = g^* \circ f^*" /></li>
                    <li><InlineMath math="(\mathrm{id}_V)^* = \mathrm{id}_{V^*}" /></li>
                    <li><InlineMath math="(f + g)^* = f^* + g^*" /></li>
                    <li><InlineMath math="(\lambda f)^* = \lambda f^*" /></li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    合成写像の性質について示す。任意の <InlineMath math="\psi \in W^*" /> と <InlineMath math="v \in V" /> に対して、
                    <BlockMath math="\begin{aligned} (f\circ g)^*\psi(v) &= \psi(f(g(v))) = (f^*\psi)(g(v)) \\ &= (g^*(f^*\psi))(v) = (g^*\circ f^*)\psi(v) \end{aligned}" />
                    となる。他の性質も定義から直接確認できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.3-1 (双対写像の計算)"
            >
                <p>
                    線形写像 <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}^3" /> が、標準基底に対して <InlineMath math="f(e_1) = 2f_1 + f_2" />、<InlineMath math="f(e_2) = f_1 - f_2 + 3f_3" /> と定義されるとする。<InlineMath math="f" /> の表現行列は
                    <BlockMath math="A = \begin{pmatrix} 2 & 1 \\ 1 & -1 \\ 0 & 3 \end{pmatrix}" />
                    である。<InlineMath math="\mathbb{R}^3" /> の双対基底 <InlineMath math="f^1, f^2, f^3" /> の引き戻し <InlineMath math="f^*(f^i) = f^i \circ f" /> を計算すると、
                    <BlockMath math="\begin{aligned} (f^* f^1)(e_1) &= f^1(2f_1+f_2) = 2, \\ (f^* f^1)(e_2) &= f^1(f_1-f_2+3f_3) = 1 \\ (f^* f^2)(e_1) &= f^2(2f_1+f_2) = 1, \\ (f^* f^2)(e_2) &= f^2(f_1-f_2+3f_3) = -1 \\ (f^* f^3)(e_1) &= f^3(2f_1+f_2) = 0, \\ (f^* f^3)(e_2) &= f^3(f_1-f_2+3f_3) = 3 \end{aligned}" />
                    となる。これらは <InlineMath math="\mathbb{R}^2" /> の双対基底 <InlineMath math="e^1, e^2" /> を用いて、
                    <BlockMath math="f^* f^1 = 2e^1 + e^2, \quad f^* f^2 = e^1 - e^2, \quad f^* f^3 = 3e^2" />
                    と表される。この係数を並べた行列は確かに <InlineMath math="A^T" /> に一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">行列表示と転置行列</h2>

            <p className="leading-relaxed">
                双対写像を基底を用いて行列表現すると、もとの写像の表現行列の転置行列になります。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 1.3-1 (双対写像と転置行列)"
            >
                <p>
                    <strong>双対写像と転置行列：</strong><br />
                    基底 <InlineMath math="\{e_j\}" />、<InlineMath math="\{f_i\}" /> と対応する双対基底に関して、<InlineMath math="f : V \to W" /> の行列を <InlineMath math="A" />（すなわち <InlineMath math="(A)_{ij} = f^i_j" />）とすると、<InlineMath math="f^* : W^* \to V^*" /> の行列は <InlineMath math="A^T" />（転置行列）となる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <BlockMath math="(f^*(e^i))(e_k) = e^i(f(e_k)) = e^i\left(\sum_l A_{lk} f_l\right) = A_{ik}" />
                    一方、転置行列の定義より <InlineMath math="(A^T)_{ki} = A_{ik}" /> である。よって、<InlineMath math="f^*" /> の行列表現の成分が <InlineMath math="A^T" /> に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.3-2 (双対写像の作用の確認)"
            >
                <p>
                    表現行列が <InlineMath math="A = \begin{pmatrix}1&2\\3&4\\5&6\end{pmatrix}" /> である線形写像 <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}^3" /> について考える。<InlineMath math="f" /> の双対写像 <InlineMath math="f^*" /> の行列は、
                    <BlockMath math="A^T = \begin{pmatrix}1&3&5\\2&4&6\end{pmatrix}" />
                    となる。
                </p>
                <p>
                    具体的に <InlineMath math="\phi = 2f^1+f^2+3f^3 \in (\mathbb{R}^3)^*" /> （成分ベクトルを <InlineMath math="(2, 1, 3)^T" /> とみなす）への作用を計算すると、
                    <BlockMath math="A^T \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 1\cdot 2 + 3\cdot 1 + 5\cdot 3 \\ 2\cdot 2 + 4\cdot 1 + 6\cdot 3 \end{pmatrix} = \begin{pmatrix} 20 \\ 26 \end{pmatrix}" />
                    となる。つまり <InlineMath math="f^*(\phi) = 20e^{1} + 26e^{2}" /> である。
                </p>
                <p>
                    一方、任意の <InlineMath math="v = \begin{pmatrix} x \\ y \end{pmatrix} = x e_1 + y e_2" /> に対する <InlineMath math="\phi(f(v))" /> を直接計算すると、<InlineMath math="f(v) = \begin{pmatrix} x+2y \\ 3x+4y \\ 5x+6y \end{pmatrix}" /> であるため、
                    <BlockMath math="\begin{aligned} \phi(f(v)) &= 2(x+2y) + 1(3x+4y) + 3(5x+6y) \\ &= 20x + 26y \end{aligned}" />
                    となり、<InlineMath math="(20e^1 + 26e^2)(v)" /> と確かに一致する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                転置行列のランクが元の行列のランクと等しいという性質は、双対写像の観点からも理解できます。
            </p>

            <ContentBox
                type="theorem"
                title="Corollary 1.3-1 (双対写像の階数)"
            >
                <p>
                    <BlockMath math="\mathrm{rank}(f) = \mathrm{rank}(f^*)" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    行列のランクは、行列とその転置行列で等しい（線形代数IIの結果を利用）。したがって、<InlineMath math="\mathrm{rank}(A) = \mathrm{rank}(A^T)" /> により示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>線形写像 <InlineMath math="f: V \to W" /> に対して、双対空間の間に <InlineMath math="f^*: W^* \to V^*" /> という双対写像（引き戻し）が定義される。</li>
                    <li><InlineMath math="f" /> の表現行列を <InlineMath math="A" /> とすると、双対基底に関する <InlineMath math="f^*" /> の表現行列は転置行列 <InlineMath math="A^T" /> となる。</li>
                    <li>合成写像の双対は順序が逆転し、<InlineMath math="(f \circ g)^* = g^* \circ f^*" /> となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
