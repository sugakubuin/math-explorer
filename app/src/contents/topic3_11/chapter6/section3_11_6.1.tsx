import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionLinearMapsAsTensors() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ここからは視点を変えて、私たちがよく知っている「線形写像」や「行列」をテンソルとして再解釈する方法を学びます。この同一視は、多様体上のテンソル場の解析や、量子力学における演算子の扱いに不可欠な基礎となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">自然な同型の構成</h2>

            <p className="leading-relaxed">
                ベクトル空間 <InlineMath math="V" /> から <InlineMath math="W" /> への線形写像の全体 <InlineMath math="\mathrm{Hom}(V, W)" /> は、実は <InlineMath math="(1, 1)" /> 型のテンソル空間と自然に同一視することができます。
            </p>

            <ContentBox
                type="theorem"
                title={<span>Theorem 6.1-1 (線形写像とテンソル積の同一視)</span>}
            >
                <p>
                    有限次元ベクトル空間 <InlineMath math="V, W" /> に対して、自然な線形同型写像
                    <BlockMath math="\mathrm{Hom}(V, W) \cong V^* \otimes W" />
                    が存在する。
                </p>
                <p>
                    具体的には、純粋テンソル <InlineMath math="\phi \otimes w \in V^* \otimes W" />（<InlineMath math="\phi \in V^*, w \in W" />）は、
                    <BlockMath math="v \mapsto \phi(v) w" />
                    という階数（ランク）1 の線形写像に対応する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    写像 <InlineMath math="\Phi : V^* \times W \to \mathrm{Hom}(V, W)" /> を <InlineMath math="\Phi(\phi, w)(v) = \phi(v)w" /> で定める。この <InlineMath math="\Phi" /> は双線形であるため、テンソル積の普遍性により線形写像 <InlineMath math="\tilde{\Phi} : V^* \otimes W \to \mathrm{Hom}(V, W)" /> が一意に定まる。
                </p>
                <p>
                    <InlineMath math="V" /> の基底 <InlineMath math="\{e_1, \ldots, e_n\}" /> とその双対基底 <InlineMath math="\{e^1, \ldots, e^n\}" />、<InlineMath math="W" /> の基底 <InlineMath math="\{f_1, \ldots, f_m\}" /> をとる。<InlineMath math="V^* \otimes W" /> の基底は <InlineMath math="e^i \otimes f_j" /> であり、これに <InlineMath math="\tilde{\Phi}" /> を適用すると、
                    <BlockMath math="\tilde{\Phi}(e^i \otimes f_j)(e_k) = e^i(e_k) f_j = \delta^i_k f_j" />
                    となる。これは、第 <InlineMath math="i" /> 成分のみを取り出して <InlineMath math="f_j" /> 方向へ送る線形写像であり、行列表示における行列単位（<InlineMath math="(j, i)" /> 成分のみが 1 で他が 0 の行列）に対応する。
                </p>
                <p>
                    これらは <InlineMath math="\mathrm{Hom}(V, W)" /> の基底をなすため、基底を基底に送る線形写像 <InlineMath math="\tilde{\Phi}" /> は同型写像である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 6.1-1 (<InlineMath math="\mathrm{Hom}(\mathbb{R}^2, \mathbb{R}^3) \cong (\mathbb{R}^2)^* \otimes \mathbb{R}^3" />)</span>}
            >
                <p>
                    次元を確認すると、<InlineMath math="\dim \mathrm{Hom}(\mathbb{R}^2, \mathbb{R}^3) = 2 \times 3 = 6" /> であり、<InlineMath math="\dim ((\mathbb{R}^2)^* \otimes \mathbb{R}^3) = 2 \times 3 = 6" /> で確かに一致している。
                </p>
                <p>
                    一般の <InlineMath math="3 \times 2" /> 行列 <InlineMath math="A = (A_{ij})" /> は、テンソルとしては
                    <BlockMath math="T = \sum_{i=1}^3 \sum_{j=1}^2 A_{ij} (e^j \otimes f_i)" />
                    という形で展開される。ここで添字の上下に注意すること。入力される <InlineMath math="\mathbb{R}^2" /> 側の添字 <InlineMath math="j" /> は共変（上付きの <InlineMath math="e^j" />）、出力される <InlineMath math="\mathbb{R}^3" /> 側の添字 <InlineMath math="i" /> は反変（下付きの <InlineMath math="f_i" />）である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">自己準同型のトレース</h2>

            <p className="leading-relaxed">
                特に <InlineMath math="V = W" /> の場合（自己準同型写像）を考えると、§2.4 で導入した「縮約」を用いることで、行列のトレース（対角成分の和）が基底によらないテンソル演算として自然に定義されます。
            </p>

            <ContentBox
                type="proposition"
                title="Corollary 6.1-1"
            >
                <p>
                    <InlineMath math="\mathrm{End}(V) = \mathrm{Hom}(V, V) \cong V^* \otimes V" /> において、自然なペアリングによる縮約写像 <InlineMath math="\mathrm{tr} : V^* \otimes V \to \mathbb{k}" />（すなわち <InlineMath math="\mathrm{tr}(\phi \otimes v) = \phi(v)" />）は、線形写像のトレースを与える。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    自己準同型写像 <InlineMath math="f \in \mathrm{End}(V)" /> に対応するテンソルを <InlineMath math="T_f \in V^* \otimes V" /> とする。基底を用いて展開すると、
                    <BlockMath math="T_f = \sum_{i,j} f^i{}_j \, e^j \otimes e_i" />
                    となる。ここで <InlineMath math="f^i{}_j" /> は <InlineMath math="f(e_j) = \sum_i f^i{}_j e_i" /> で定まる行列表現の成分である。
                </p>
                <p>
                    これに縮約 <InlineMath math="\mathrm{tr}" /> を適用すると、線形性から
                    <BlockMath math="\begin{aligned} \mathrm{tr}(T_f) &= \sum_{i,j} f^i{}_j \, \mathrm{tr}(e^j \otimes e_i) = \sum_{i,j} f^i{}_j \, e^j(e_i) \\ &= \sum_{i,j} f^i{}_j \delta^j_i = \sum_i f^i{}_i \end{aligned}" />
                    となる。<InlineMath math="\sum_i f^i{}_i" /> はまさに行列表現の対角成分の和、すなわちトレースに他ならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.1-2 (トレースの計算)"
            >
                <p>
                    線形写像 <InlineMath math="f" /> が <InlineMath math="f(e_1) = 2e_1 + 3e_2" />、<InlineMath math="f(e_2) = e_1 + 4e_2" /> で与えられているとする。対応する行列は <InlineMath math="\begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix}" /> であり、そのトレースは <InlineMath math="2 + 4 = 6" /> である。
                </p>
                <p>
                    これをテンソルの縮約として計算してみる。テンソル表示は
                    <BlockMath math="T_f = 2(e^1 \otimes e_1) + 3(e^1 \otimes e_2) + 1(e^2 \otimes e_1) + 4(e^2 \otimes e_2)" />
                    である。縮約をとると、<InlineMath math="e^1(e_1) = 1" />、<InlineMath math="e^1(e_2) = 0" /> などから、
                    <BlockMath math="\mathrm{tr}(T_f) = 2(1) + 3(0) + 1(0) + 4(1) = 6" />
                    となり、確かに行列のトレースと一致する。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>線形写像の空間 <InlineMath math="\mathrm{Hom}(V, W)" /> は、テンソル空間 <InlineMath math="V^* \otimes W" /> と自然に同型である。</li>
                    <li>この同型のもとで、線形写像の行列表示における行と列の添字は、それぞれ <InlineMath math="W" />（反変）と <InlineMath math="V^*" />（共変）の成分に対応する。</li>
                    <li>自己準同型写像のトレースは、<InlineMath math="V^* \otimes V" /> における反変・共変成分をペアリングさせる「縮約」として座標に依存せずに定義できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
