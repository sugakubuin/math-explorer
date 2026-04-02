import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionContraction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに見た「トレース」は、<InlineMath math="(1,1)" /> 型テンソルをスカラー（<InlineMath math="(0,0)" /> 型テンソル）に落とす操作でした。これを一般の <InlineMath math="(p,q)" /> 型テンソルに対して拡張した操作が「縮約（contraction）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">縮約の一般的な定義</h2>

            <p className="leading-relaxed">
                縮約とは、テンソルの反変成分（上付き添字）の一つと共変成分（下付き添字）の一つを選び、それらをペアリングさせて階数を下げる操作です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 6.3-1 (縮約)"
            >
                <p>
                    <InlineMath math="(p,q)" /> 型テンソル <InlineMath math="T \in V^{\otimes p} \otimes (V^*)^{\otimes q}" /> を考える。
                    <InlineMath math="1 \leq i \leq p" /> 番目の反変成分と、<InlineMath math="1 \leq j \leq q" /> 番目の共変成分による<strong>縮約（contraction）</strong> <InlineMath math="C^i{}_j(T)" /> とは、双対ペアリング <InlineMath math="\langle e^k, e_l \rangle = \delta^k_l" /> を用いて第 <InlineMath math="i" /> 反変添字と第 <InlineMath math="j" /> 共変添字の和を取る操作のことである。
                </p>
                <p>
                    これにより、<InlineMath math="C^i{}_j(T)" /> は <InlineMath math="(p-1, q-1)" /> 型テンソルとなる。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 6.3-1 (<InlineMath math="(2,1)" /> 型テンソルの縮約)</span>}
            >
                <p>
                    <InlineMath math="T \in V \otimes V \otimes V^*" />（<InlineMath math="(2,1)" /> 型テンソル）を成分表示で <InlineMath math="T^{ik}{}_j" /> とする。
                    このテンソルの第 1 反変成分と第 1 共変成分で縮約をとる操作 <InlineMath math="C^1{}_1(T)" /> は、
                    <BlockMath math="C^1{}_1(T)^k = \sum_i T^{ik}{}_i" />
                    という成分を持つ <InlineMath math="(1,0)" /> 型テンソル（反変ベクトル）を与える。
                </p>
                <p>
                    具体例として、<InlineMath math="V = \mathbb{R}^2" /> で
                    <BlockMath math="\begin{aligned} T &= e_1 \otimes e_1 \otimes e^1 + e_1 \otimes e_2 \otimes e^2 \\ &\quad + e_2 \otimes e_1 \otimes e^1 + e_2 \otimes e_2 \otimes e^2 \end{aligned}" />
                    とする。縮約 <InlineMath math="C^1{}_1" /> を計算すると、成分 <InlineMath math="e_a \otimes e_b \otimes e^c" /> のうち <InlineMath math="a = c" /> のものだけが残り、その <InlineMath math="a" /> について和をとるため、
                    <BlockMath math="\begin{aligned} C^1{}_1(T) &= (e^1(e_1) e_1 + e^2(e_1) e_2) + (e^1(e_2) e_1 + e^2(e_2) e_2) \\ &= e_1 + e_2 \end{aligned}" />
                    というベクトルが得られる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                トレースが基底によらなかったのと同様に、一般の縮約操作も基底の選び方に依存しません。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 6.3-1 (縮約の基底不変性)"
            >
                <p>
                    縮約操作 <InlineMath math="C^i{}_j" /> は基底の選択によらない。これは、双対ペアリング <InlineMath math="\langle \cdot, \cdot \rangle : V^* \times V \to \mathbb{k}" /> が基底変換に対して不変であることから従う。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    成分変換則（§3.1 Proposition 3.1-1）を用いて確認する。基底を変換行列 <InlineMath math="P" /> で取り替えたとき、縮約する反変添字は <InlineMath math="P^{-1}" /> で、共変添字は <InlineMath math="P" /> で変換される。
                </p>
                <p>
                    新しい基底における縮約の成分を計算すると、関係する部分は
                    <BlockMath math="\begin{aligned} \sum_k \sum_{l,m} (P^{-1})^k{}_l P_{mk} \, \cdots &= \sum_{l,m} (P P^{-1})_{ml} \, \cdots \\ &= \sum_{l,m} \delta_{ml} \, \cdots \end{aligned}" />
                    となるため、変換行列が打ち消し合い、古い基底で計算した和と一致する。したがって縮約は基底によらない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">縮約の応用とテンソルの「次数落とし」</h2>

            <p className="leading-relaxed">
                内積（計量テンソル）が存在する場合、内積と縮約を組み合わせることでテンソルの型を自由に変更（添字の上げ下げ）することができます。
            </p>

            <ContentBox
                type="example"
                title="Example 6.3-2 (計量テンソルによる添字の上げ下げ)"
            >
                <p>
                    内積 <InlineMath math="g \in V^* \otimes V^*" />（<InlineMath math="(0,2)" /> 型、成分 <InlineMath math="g_{ij}" />）と、その逆計量 <InlineMath math="g^{-1} \in V \otimes V" />（<InlineMath math="(2,0)" /> 型、成分 <InlineMath math="g^{ij}" />）を考える。
                </p>
                <p>
                    反変ベクトル <InlineMath math="v = \sum_j v^j e_j" />（<InlineMath math="(1,0)" /> 型）に対して、<InlineMath math="g \otimes v" /> という <InlineMath math="(1,2)" /> 型テンソルを作り、縮約を行うことで
                    <BlockMath math="v_i = \sum_j g_{ij} v^j" />
                    という共変ベクトル（<InlineMath math="(0,1)" /> 型）が得られる。これを「添字下げ」と呼ぶ。
                </p>
                <p>
                    具体的に <InlineMath math="\mathbb{R}^2" /> で計量が <InlineMath math="g = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}" /> であるとする。ベクトル <InlineMath math="v = (1, 0)^T" />（すなわち <InlineMath math="v^1=1, v^2=0" />）の共変成分 <InlineMath math="v_i" /> を計算すると、
                    <BlockMath math="v_1 = g_{11}v^1 + g_{12}v^2 = 2(1) + 1(0) = 2" />
                    <BlockMath math="v_2 = g_{21}v^1 + g_{22}v^2 = 1(1) + 3(0) = 1" />
                    となり、共変ベクトル <InlineMath math="(v_1, v_2) = (2, 1)" /> が得られる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                テンソル積によって次数を上げ、縮約によって次数を下げるというこの操作の繰り返しは、幾何学において不変量を構成するための基本手技です。
            </p>

            <ContentBox
                type="remark"
                title="縮約とテンソル積の双対関係"
            >
                <p>
                    テンソル積が空間を拡張していく操作だとすれば、縮約は空間を押し潰す双対な操作です。物理学（一般相対性理論や弦理論）や微分幾何学（多様体論 4-5、微分幾何II 4-6）では、これらの演算を組み合わせて座標系に依存しない物理法則や幾何学的不変量を記述します。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.3-3 (スカラー曲率の先取り)"
            >
                <p>
                    一般相対性理論やリーマン幾何学では、空間の曲がり具合を表す「リーマン曲率テンソル」から、縮約を繰り返して不変量を取り出します。
                </p>
                <p>
                    まず、曲率テンソルから1回縮約して得られる「リッチテンソル <InlineMath math="R_{ij}" />」（<InlineMath math="(0,2)" /> 型）を考えます。これをさらに計量の逆行列 <InlineMath math="g^{ij}" />（<InlineMath math="(2,0)" /> 型）とテンソル積をとり、両方の添字について縮約を行うと、
                    <BlockMath math="R = \sum_{i,j} g^{ij} R_{ij}" />
                    というスカラー量（<InlineMath math="(0,0)" /> 型）が得られます。これを<strong>スカラー曲率</strong>と呼びます。この縮約計算こそが、アインシュタイン方程式や微分幾何II（4-6）における核心的な操作となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="(p,q)" /> 型テンソルの反変成分と共変成分をペアリングさせて和をとる操作を<strong>縮約</strong>といい、結果として <InlineMath math="(p-1, q-1)" /> 型テンソルが得られる。</li>
                    <li>縮約は基底の取り方に依存しない自然な操作である。</li>
                    <li>計量（内積）と縮約を組み合わせることで、テンソルの反変・共変を自由に行き来する「添字の上げ下げ」が可能になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
