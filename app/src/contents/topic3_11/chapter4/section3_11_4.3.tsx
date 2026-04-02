import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionDeterminantAndExteriorAlgebra() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                外積代数の構築により、行列式という概念を極めて見通しよく、かつ座標（成分）によらずに定義する準備が整いました。本節では、空間の次元と同じ次数の最高次外積空間に注目します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">行列式の外積による定義</h2>

            <p className="leading-relaxed">
                <InlineMath math="n" /> 次元ベクトル空間 <InlineMath math="V" /> において、<InlineMath math="n" /> 個のベクトルをウェッジ積した空間の次元を考えます。
            </p>

            <ContentBox
                type="theorem"
                title={<span>Theorem 4.3-1 (<InlineMath math="\dim \bigwedge^n(V) = 1" />)</span>}
            >
                <p>
                    <InlineMath math="n" /> 次元ベクトル空間 <InlineMath math="V" />（<InlineMath math="n = \dim V" />）の <InlineMath math="n" /> 次外積空間 <InlineMath math="\bigwedge^n(V)" /> は <InlineMath math="1" /> 次元である。すなわち、<InlineMath math="V" /> の基底 <InlineMath math="\{e_1, \ldots, e_n\}" /> を選ぶと、
                    <BlockMath math="\bigwedge^n(V) = \mathrm{span} \{ e_1 \wedge \cdots \wedge e_n \}" />
                    となる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    Theorem 4.2-1 より、<InlineMath math="k" /> 次外積空間の次元は <InlineMath math="\binom{n}{k}" /> である。<InlineMath math="k = n" /> のとき、
                    <BlockMath math="\dim \bigwedge^n(V) = \binom{n}{n} = 1" />
                    となる。基底の構成法からも、<InlineMath math="1 \leq i_1 < \cdots < i_n \leq n" /> を満たす添字の組は <InlineMath math="(1, 2, \ldots, n)" /> のただ1つしかないため、基底は <InlineMath math="e_1 \wedge \cdots \wedge e_n" /> のみである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この「1次元」という強力な制約が、行列式の自然な定義を導きます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.3-1 (行列式の外積による定義)"
            >
                <p>
                    線形写像 <InlineMath math="f : V \to V" /> が与えられたとする。<InlineMath math="V" /> の基底 <InlineMath math="\{e_1, \ldots, e_n\}" /> に対して、<InlineMath math="f(e_1) \wedge \cdots \wedge f(e_n)" /> もまた <InlineMath math="\bigwedge^n(V)" /> の元である。
                </p>
                <p>
                    <InlineMath math="\bigwedge^n(V)" /> は 1 次元であるため、これは基底 <InlineMath math="e_1 \wedge \cdots \wedge e_n" /> のあるスカラー倍として一意に表される。この倍率（スカラー）を <InlineMath math="f" /> の<strong>行列式（determinant）</strong>と呼び、<InlineMath math="\det(f)" /> と書く。すなわち、
                    <BlockMath math="f(e_1) \wedge \cdots \wedge f(e_n) = \det(f) \cdot (e_1 \wedge \cdots \wedge e_n)" />
                    により <InlineMath math="\det(f)" /> を定義する。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 4.3-1 (<InlineMath math="2 \times 2" /> の行列式)</span>}
            >
                <p>
                    <InlineMath math="\mathbb{R}^2" /> 上の線形写像 <InlineMath math="f" /> を行列 <InlineMath math="\begin{pmatrix} a & b \\ c & d \end{pmatrix}" /> で表す。すなわち、
                    <BlockMath math="f(e_1) = a e_1 + c e_2, \quad f(e_2) = b e_1 + d e_2" />
                    である。定義に従って左辺を計算すると、
                    <BlockMath math="\begin{aligned} f(e_1) \wedge f(e_2) &= (a e_1 + c e_2) \wedge (b e_1 + d e_2) \\ &= ab(e_1 \wedge e_1) + ad(e_1 \wedge e_2) \\ &\quad + cb(e_2 \wedge e_1) + cd(e_2 \wedge e_2) \\ &= ad(e_1 \wedge e_2) - bc(e_1 \wedge e_2) \\ &= (ad - bc)(e_1 \wedge e_2) \end{aligned}" />
                    となる。右辺と比較して、<InlineMath math="\det(f) = ad - bc" /> が得られる。これは通常の行列式の公式と完全に一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">行列式の性質の外積による証明</h2>

            <p className="leading-relaxed">
                外積を用いた定義を採用することで、行列式に関する有名な性質（積の公式など）が、煩雑な成分計算を一切行わずに直感的に証明できます。
            </p>

            <ContentBox
                type="proposition"
                title="Corollary 4.3-1 (行列式の積公式)"
            >
                <p>
                    線形写像 <InlineMath math="f, g : V \to V" /> に対して、合成写像 <InlineMath math="f \circ g" /> の行列式は各々の行列式の積に等しい。
                    <BlockMath math="\det(f \circ g) = \det(f)\det(g)" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    任意の <InlineMath math="\omega = v_1 \wedge \cdots \wedge v_n \in \bigwedge^n(V)" /> に対して、行列式の定義は <InlineMath math="f(v_1) \wedge \cdots \wedge f(v_n) = \det(f) \omega" /> と書ける。
                </p>
                <p>
                    基底 <InlineMath math="\omega_0 = e_1 \wedge \cdots \wedge e_n" /> を用いて <InlineMath math="f \circ g" /> の作用を計算する。まず <InlineMath math="g" /> の定義より、
                    <BlockMath math="g(e_1) \wedge \cdots \wedge g(e_n) = \det(g) \omega_0" />
                    である。次に <InlineMath math="f" /> を作用させる（ここでは次節で厳密に扱うプルバックの性質を用いるが、直感的には各ベクトルに <InlineMath math="f" /> を適用する）。<InlineMath math="f" /> は線形でありウェッジ積を保つため、
                    <BlockMath math="\begin{aligned} &(f \circ g)(e_1) \wedge \cdots \wedge (f \circ g)(e_n) \\ &= f(g(e_1)) \wedge \cdots \wedge f(g(e_n)) \\ &= \det(f) \left( g(e_1) \wedge \cdots \wedge g(e_n) \right) \\ &= \det(f) \det(g) \omega_0 \end{aligned}" />
                    となる。定義により左辺は <InlineMath math="\det(f \circ g) \omega_0" /> であるから、両辺を比較して <InlineMath math="\det(f \circ g) = \det(f)\det(g)" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 4.3-2 (<InlineMath math="3 \times 3" /> 行列式の計算)</span>}
            >
                <p>
                    <InlineMath math="V = \mathbb{R}^3" /> において、線形写像 <InlineMath math="f" /> が
                    <BlockMath math="f(e_1) = e_1, \quad f(e_2) = e_1 + e_2, \quad f(e_3) = e_1 + e_2 + e_3" />
                    で与えられているとする。行列式 <InlineMath math="\det(f)" /> を求める。
                </p>
                <p>
                    ウェッジ積を展開すると、
                    <BlockMath math="\begin{aligned} &f(e_1) \wedge f(e_2) \wedge f(e_3) \\ &= e_1 \wedge (e_1 + e_2) \wedge (e_1 + e_2 + e_3) \\ &= e_1 \wedge e_2 \wedge (e_1 + e_2 + e_3) \quad (\because e_1 \wedge e_1 = 0) \\ &= e_1 \wedge e_2 \wedge e_3 \quad (\because e_1 \wedge e_2 \wedge e_1 = 0,\ e_1 \wedge e_2 \wedge e_2 = 0) \end{aligned}" />
                    となる。したがって、係数は <InlineMath math="1" /> であり、<InlineMath math="\det(f) = 1" /> である。この行列は上三角行列であり、対角成分の積が 1 であることと一致している。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="外積による行列式の捉え方"
            >
                <p>
                    線形代数IIで学んだ行列式の通常の定義（置換 <InlineMath math="\sigma \in S_n" /> に対する符号 <InlineMath math="\mathrm{sgn}(\sigma)" /> の和）は、<InlineMath math="f(e_1) \wedge \cdots \wedge f(e_n)" /> を線形に展開した際に、<InlineMath math="e_{\sigma(1)} \wedge \cdots \wedge e_{\sigma(n)} = \mathrm{sgn}(\sigma) e_1 \wedge \cdots \wedge e_n" /> という反対称性が自動的に現れることの直接的な帰結です。外積代数の枠組みでは、行列式の多重線形性・交代性がすべて自然に統合されます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="n" /> 次元空間の <InlineMath math="n" /> 次外積空間は <InlineMath math="1" /> 次元である。</li>
                    <li>線形写像 <InlineMath math="f" /> が <InlineMath math="n" /> 次外積空間に引き起こす「定数倍」の倍率こそが、行列式 <InlineMath math="\det(f)" /> の本質的な定義である。</li>
                    <li>外積代数を用いることで、行列式の積公式などが見通しよく証明できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
