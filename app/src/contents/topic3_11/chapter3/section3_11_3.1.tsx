import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionPQTypeTensors() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは複数のベクトル空間のテンソル積を扱ってきましたが、本章ではひとつのベクトル空間 <InlineMath math="V" /> とその双対空間 <InlineMath math="V^*" /> から構成されるテンソル空間に焦点を当てます。この枠組みにより、物理学や幾何学で重要となる様々な型のテンソルを統一的に扱うことができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">
                (p, q) 型テンソルの定義
            </h2>

            <p className="leading-relaxed">
                ベクトル空間とその双対空間をいくつテンソル積するかによって、テンソルの「型」が定まります。
            </p>

            <ContentBox
                type="definition"
                title={<span>Definition 3.1-1 (<InlineMath math="(p, q)" /> 型テンソル)</span>}
            >
                <p>
                    体 <InlineMath math="\mathbb{k}" /> 上の有限次元ベクトル空間 <InlineMath math="V" /> とその双対空間 <InlineMath math="V^*" /> に対して、
                    <BlockMath math="T^{(p,q)} = V^{\otimes p} \otimes (V^*)^{\otimes q} = \underbrace{V \otimes \cdots \otimes V}_{p\text{個}} \otimes \underbrace{V^* \otimes \cdots \otimes V^*}_{q\text{個}}" />
                    の元を<strong><InlineMath math="(p, q)" /> 型テンソル</strong>という。
                </p>
                <p>
                    ここで、<InlineMath math="V" /> の成分（上付き添字に対応）を反変（contravariant）成分、<InlineMath math="V^*" /> の成分（下付き添字に対応）を共変（covariant）成分と呼ぶ。特に、<InlineMath math="p=1, q=0" /> の場合は反変ベクトル（<InlineMath math="V" /> の元）、<InlineMath math="p=0, q=1" /> の場合は共変ベクトル（<InlineMath math="V^*" /> の元）である。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 3.1-1 (型の具体例)</span>}
            >
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong><InlineMath math="(2, 0)" /> 型テンソル</strong>：<InlineMath math="T \in V \otimes V" />。成分表示では <InlineMath math="T^{ij}" /> となる。
                    </li>
                    <li>
                        <strong><InlineMath math="(0, 2)" /> 型テンソル</strong>：<InlineMath math="g \in V^* \otimes V^*" />。成分表示では <InlineMath math="g_{ij}" />。内積などの双線形形式がこれに該当する。
                    </li>
                    <li>
                        <strong><InlineMath math="(1, 1)" /> 型テンソル</strong>：<InlineMath math="A \in V \otimes V^*" />。成分表示では <InlineMath math="A^i{}_j" />。<InlineMath math="V \otimes V^* \cong \mathrm{Hom}(V, V)" /> より、自己準同型（線形写像）に対応する。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                これらの型は、座標変換を考えた際に成分がどのように変化するかを決定する重要な指標となります。物理学では、この変換性がテンソルそのものの本質的な定義として扱われることもあります。
            </p>

            <ContentBox
                type="remark"
                title="物理での使われ方"
            >
                <p>
                    相対性理論に登場する「計量テンソル <InlineMath math="g_{\mu\nu}" />」は <InlineMath math="(0,2)" /> 型テンソルです。一方、電磁気学における「電磁場テンソル <InlineMath math="F^{\mu\nu}" />」は <InlineMath math="(2,0)" /> 型、剛体の回転を記述する「慣性テンソル <InlineMath math="I^{ij}" />」も <InlineMath math="(2,0)" /> 型です。テンソルの型（反変・共変の個数）が、その物理量が座標変換に対してどう振る舞うかを決定します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">基底変換と成分変換則</h2>

            <p className="leading-relaxed">
                次に、ベクトル空間の基底を取り替えたときに、テンソルの成分がどのように変換されるかを確認します。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 3.1-1 (成分変換則)"
            >
                <p>
                    <InlineMath math="V" /> の基底を <InlineMath math="\{e_i\}" /> から <InlineMath math="\{e'_i\}" /> へと変換行列 <InlineMath math="A" />（<InlineMath math="e'_i = \sum_j A^j{}_i e_j" />）を用いて取り替えたとする。
                    このとき、<InlineMath math="(p,q)" /> 型テンソルの成分は、<InlineMath math="p" /> 個の反変添字に対しては逆行列 <InlineMath math="(A^{-1})" /> で変換され、<InlineMath math="q" /> 個の共変添字に対しては行列 <InlineMath math="A" /> で変換される。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    基底変換 <InlineMath math="e'_i = \sum_j A^j{}_i e_j" /> に対して、双対基底 <InlineMath math="\{e^i\}" /> の変換は <InlineMath math="(e')^i = \sum_j (A^{-1})^i{}_j e^j" /> となる（これは <InlineMath math="(e')^i(e'_k) = \delta^i_k" /> を満たすことから確認できる）。
                </p>
                <p>
                    したがって、純粋テンソル <InlineMath math="v_1 \otimes \cdots \otimes v_p \otimes \phi_1 \otimes \cdots \otimes \phi_q" /> を考えると、各 <InlineMath math="v_k \in V" /> の成分は逆行列 <InlineMath math="A^{-1}" /> で変換され、各 <InlineMath math="\phi_l \in V^*" /> の成分は行列 <InlineMath math="A" />（転置）で変換される。
                </p>
                <p>
                    一般のテンソルは純粋テンソルの線形結合であるため、成分の変換則は各添字ごとに独立に作用することがわかる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的に <InlineMath math="\mathbb{R}^2" /> の場合で変換則を計算してみましょう。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 3.1-2 (<InlineMath math="\mathbb{R}^2" /> での成分変換)</span>}
            >
                <p>
                    <InlineMath math="\mathbb{R}^2" /> において、標準基底 <InlineMath math="\{e_1, e_2\}" /> から新しい基底 <InlineMath math="\{e_1+e_2, e_1-e_2\}" /> へ変換する。このときの変換行列は
                    <BlockMath math="A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" />
                    であり、その逆行列は <InlineMath math="A^{-1} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" /> である。
                </p>
                <p>
                    反変ベクトル <InlineMath math="v = 3e_1 + e_2" />（成分 <InlineMath math="(3, 1)^T" />）の新しい基底での成分は、
                    <BlockMath math="v' = A^{-1} \begin{pmatrix} 3 \\ 1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}" />
                    となる。実際、<InlineMath math="2(e_1+e_2) + 1(e_1-e_2) = 3e_1 + e_2" /> と一致する。
                </p>
                <p>
                    一方、共変ベクトル <InlineMath math="\phi = e^1 + 2e^2" />（成分 <InlineMath math="(1, 2)" />）の新しい双対基底での成分は、<InlineMath math="A^T" /> を用いて
                    <BlockMath math="\phi' = \begin{pmatrix} 1 & 2 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 3 & -1 \end{pmatrix}" />
                    と計算される。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="p" /> 個の <InlineMath math="V" /> と <InlineMath math="q" /> 個の <InlineMath math="V^*" /> のテンソル積の元を <InlineMath math="(p,q)" /> 型テンソルと呼ぶ。</li>
                    <li>テンソルの成分は、基底変換行列 <InlineMath math="A" /> に対して、反変成分が <InlineMath math="A^{-1}" /> で、共変成分が <InlineMath math="A" />（の転置）で変換される。</li>
                    <li>内積は <InlineMath math="(0,2)" /> 型、線形写像は <InlineMath math="(1,1)" /> 型テンソルとして自然に表現できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
