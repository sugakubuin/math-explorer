import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ProductAndOppositeCategories() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                圏論の最も美しく強力な性質の1つが「双対性（Duality）」です。矢印の向きをすべて逆にするだけで、全く新しい（しかし完全に並行な）数学の世界が広がります。本節では反対圏と、圏同士を組み合わせる積圏を定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">反対圏と双対原理</h2>

            <ContentBox
                type="definition"
                title="Definition 1.4-1 (反対圏 / Opposite Category)"
            >
                <p>
                    圏 <InlineMath math="\mathcal{C}" /> が与えられたとき、その<strong>反対圏（双対圏）</strong> <InlineMath math="\mathcal{C}^{op}" /> を以下のように構成する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>対象：</strong> 元の圏と全く同じ。<InlineMath math="\mathrm{Ob}(\mathcal{C}^{op}) = \mathrm{Ob}(\mathcal{C})" />。</li>
                    <li><strong>射：</strong> 矢印の向きをすべて逆にする。<InlineMath math="\mathcal{C}^{op}" /> における <InlineMath math="A" /> から <InlineMath math="B" /> への射の集合は、元の圏における <InlineMath math="B" /> から <InlineMath math="A" /> への射の集合とする。
                    <BlockMath math="\mathrm{Hom}_{\mathcal{C}^{op}}(A, B) = \mathrm{Hom}_{\mathcal{C}}(B, A)" />
                    （区別のため、<InlineMath math="\mathcal{C}" /> の射 <InlineMath math="f" /> に対応する <InlineMath math="\mathcal{C}^{op}" /> の射を <InlineMath math="f^{op}" /> と書くことがある。）</li>
                    <li><strong>合成：</strong> 元の圏での合成の順序を逆にする。<InlineMath math="f^{op} \circ^{op} g^{op} = (g \circ f)^{op}" />。</li>
                    <li><strong>恒等射：</strong> 元の圏と同じものを用いる。</li>
                </ul>
                <p>
                    この <InlineMath math="\mathcal{C}^{op}" /> も明らかに圏の公理を満たす。
                </p>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 1.4-1 (双対原理 / Duality Principle)"
            >
                <p>
                    圏論の言葉だけで記述された命題 <InlineMath math="P" /> がある圏 <InlineMath math="\mathcal{C}" /> で成立するならば、<InlineMath math="P" /> に現れる「ドメイン（始域）」と「コドメイン（終域）」、および「合成の順序」をすべて逆にした<strong>双対命題 <InlineMath math="P^{op}" /></strong> は、反対圏 <InlineMath math="\mathcal{C}^{op}" /> において成立する。
                </p>
                <p>
                    特に、命題 <InlineMath math="P" /> が「すべての圏で」成立する定理ならば、その双対命題 <InlineMath math="P^{op}" /> も「すべての圏で」自動的に定理となる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    命題 <InlineMath math="P" /> が圏 <InlineMath math="\mathcal{C}" /> に関する公理からの論理的帰結として証明されたとする。
                    圏 <InlineMath math="\mathcal{C}^{op}" /> もまた完全に圏の公理を満たすため、<InlineMath math="\mathcal{C}^{op}" /> に対して全く同じ論理的ステップを適用できる。
                    <InlineMath math="\mathcal{C}^{op}" /> 上で命題 <InlineMath math="P" /> を解釈（翻訳）したものは、元の圏 <InlineMath math="\mathcal{C}" /> の言葉に戻せば、矢印の向きがすべて逆転した命題 <InlineMath math="P^{op}" /> そのものである。
                    したがって、<InlineMath math="P" /> の証明の矢印をすべて逆に書き換えるだけで、<InlineMath math="P^{op}" /> の証明が完成する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.4-1 (双対原理の応用と節約性)"
            >
                <p>
                    双対原理のおかげで、圏論における定理の証明は「1つ証明すれば、裏返しの定理もタダでもらえる」という圧倒的な節約性を持つ。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>モノ射とエピ射：</strong> 前節で学んだ「モノ射（左キャンセル可能）」の矢印を逆向きにすると、そのまま「エピ射（右キャンセル可能）」の定義になる。つまり「モノ射はエピ射の双対」である。</li>
                    <li>したがって、「2つのモノ射の合成はモノ射である」という定理を証明すれば、自動的に「2つのエピ射の合成はエピ射である」という定理も証明したことになる。</li>
                    <li>Chapter 5で学ぶ「積（直積）」の双対は「余積（直和）」であり、「極限」の双対は「余極限」である。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">積圏</h2>

            <p className="leading-relaxed">
                2つの圏から、より大きな新しい圏を作る操作を定義します。これは2変数の関数（双関手）を考えるための基礎になります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.4-2 (積圏 / Product Category)"
            >
                <p>
                    2つの圏 <InlineMath math="\mathcal{C}" /> と <InlineMath math="\mathcal{D}" /> の<strong>積圏</strong> <InlineMath math="\mathcal{C} \times \mathcal{D}" /> を以下のように構成する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>対象：</strong> 両方の圏の対象のペア。すなわち <InlineMath math="(C, D)" /> （ただし <InlineMath math="C \in \mathrm{Ob}(\mathcal{C})" />, <InlineMath math="D \in \mathrm{Ob}(\mathcal{D})" />）。</li>
                    <li><strong>射：</strong> 射のペア。ペア <InlineMath math="(C_1, D_1)" /> から <InlineMath math="(C_2, D_2)" /> への射は、<InlineMath math="f : C_1 \to C_2" /> と <InlineMath math="g : D_1 \to D_2" /> のペア <InlineMath math="(f, g)" /> である。</li>
                    <li><strong>合成：</strong> 成分ごとに独立して合成する。<InlineMath math="(f_2, g_2) \circ (f_1, g_1) = (f_2 \circ f_1, g_2 \circ g_1)" />。</li>
                    <li><strong>恒等射：</strong> <InlineMath math="\mathrm{id}_{(C, D)} = (\mathrm{id}_C, \mathrm{id}_D)" />。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 1.4-2 (<InlineMath math="\mathbf{Vect} \times \mathbf{Vect}" /> とテンソル積)</span>}
            >
                <p>
                    体上のベクトル空間の圏 <InlineMath math="\mathbf{Vect}" /> とそれ自身の積圏 <InlineMath math="\mathbf{Vect} \times \mathbf{Vect}" /> を考える。
                    この圏の対象は、ベクトル空間のペア <InlineMath math="(V, W)" /> である。
                </p>
                <p>
                    Topic 3-11 で学んだ「テンソル積 <InlineMath math="\otimes" />」は、このペア <InlineMath math="(V, W)" /> を受け取って、新しい1つのベクトル空間 <InlineMath math="V \otimes W" /> を生み出す操作である。
                    さらに、射のペア（線形写像 <InlineMath math="f : V_1 \to V_2" /> と <InlineMath math="g : W_1 \to W_2" />）に対しても、新しい線形写像 <InlineMath math="f \otimes g : V_1 \otimes W_1 \to V_2 \otimes W_2" /> を自然に割り当てる。
                </p>
                <p>
                    このように、積圏からの「圏と圏の間の写像」として定式化することで、テンソル積が空間だけでなく写像（関数の構造）も適切に保存する操作（双関手）であることが厳密に表現される。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>圏の射の向きをすべて逆にして作られる圏を<strong>反対圏（双対圏） <InlineMath math="\mathcal{C}^{op}" /></strong> という。</li>
                    <li><strong>双対原理：</strong> ある定理が圏論的に証明できるなら、その矢印をすべて逆にした定理（双対命題）も自動的に成立する。</li>
                    <li>2つの圏の要素をペアにして新しい圏を作る操作を<strong>積圏 <InlineMath math="\mathcal{C} \times \mathcal{D}" /></strong> といい、多変数の圏論的構造（テンソル積など）の記述に用いられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}