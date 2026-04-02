import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MeasureCompletion() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までに、ルベーグ測度が完備であることを学びました。
                一般の測度空間においても、零集合の部分集合をすべて可測集合として付け加えることで、元の測度空間を完備にすることができます。
                これを「測度空間の完備化」と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完備化の構成</h2>

            <p>
                任意の測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> に対して、次のような新しい測度空間を構成できます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.6-1 (完備化定理)">
                <p>
                    測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> に対し、以下のように定義される測度空間 <InlineMath math="(X, \bar{\mathcal{A}}, \bar{\mu})" /> が存在する。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <b><InlineMath math="\sigma" />-加法族の拡張</b>:
                        <BlockMath math="\bar{\mathcal{A}} = \{ A \cup N \mid A \in \mathcal{A},\, N \subset M,\, M \in \mathcal{A},\, \mu(M) = 0 \}" />
                    </li>
                    <li>
                        <b>測度の拡張</b>:
                        <BlockMath math="\bar{\mu}(A \cup N) = \mu(A)" />
                    </li>
                </ol>
                <p className="mt-4">
                    この測度空間 <InlineMath math="(X, \bar{\mathcal{A}}, \bar{\mu})" /> は完備であり、元の測度空間の<b>完備化</b> (completion) と呼ばれる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.6-1 (完備化の構造)">
                <p>
                    もともと <InlineMath math="\mathcal{A}" /> に入っていなかった集合 <InlineMath math="N" /> でも、それが測度 0 の集合 <InlineMath math="M" /> に含まれているなら、<InlineMath math="\emptyset \cup N" /> という形で新しい集合族 <InlineMath math="\bar{\mathcal{A}}" /> に組み込まれます。
                </p>
                <p className="mt-4">
                    このとき、新しい測度は <InlineMath math="\bar{\mu}(\emptyset \cup N) = \mu(\emptyset) = 0" /> と計算されます。つまり、「本質的な大きさを持つ集合 <InlineMath math="A" />」に「無視できるほど小さいカス <InlineMath math="N" />」を付け加えたとしても、その大きさは <InlineMath math="A" /> のまま変わらない、という拡張を行っていることに相当します。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <b><InlineMath math="\bar{\mathcal{A}}" /> が <InlineMath math="\sigma" />-加法族であること</b>:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><InlineMath math="X = X \cup \emptyset" /> より <InlineMath math="X \in \bar{\mathcal{A}}" />。</li>
                    <li><InlineMath math="B = A \cup N \in \bar{\mathcal{A}}" /> （<InlineMath math="N \subset M" />, <InlineMath math="\mu(M) = 0" />）に対し、<InlineMath math="B^c = (A \cup N)^c = A^c \cap N^c" />。
                        ここで <InlineMath math="B^c = (A^c \cap M^c) \cup (A^c \cap (M \setminus N))" /> と書ける。
                        <InlineMath math="A^c \cap M^c \in \mathcal{A}" /> であり、<InlineMath math="A^c \cap (M \setminus N) \subset M" /> かつ <InlineMath math="\mu(M)=0" /> より、<InlineMath math="B^c \in \bar{\mathcal{A}}" />。
                    </li>
                    <li>可算和について閉じていることも、各成分の和をとることで同様に示される。</li>
                </ul>
                <p className="mt-4">
                    2. <b><InlineMath math="\bar{\mu}" /> の well-defined 性</b>:
                    <InlineMath math="A_1 \cup N_1 = A_2 \cup N_2 \in \bar{\mathcal{A}}" /> とすると、<InlineMath math="A_1 \subset A_2 \cup M_2" /> より <InlineMath math="\mu(A_1) \leq \mu(A_2) + \mu(M_2) = \mu(A_2)" />。
                    同様に <InlineMath math="\mu(A_2) \leq \mu(A_1)" /> が示され、<InlineMath math="\mu(A_1) = \mu(A_2)" /> となる。
                </p>
                <p className="mt-4">
                    3. <b><InlineMath math="\bar{\mu}" /> が測度であること</b>:
                    <InlineMath math="\bar{\mu}(\emptyset) = \mu(\emptyset) = 0" />。また、互いに素な列 <InlineMath math="\{A_n \cup N_n\}" /> に対し、
                    <BlockMath math="\begin{aligned} \bar{\mu}\left(\bigcup (A_n \cup N_n)\right) &= \bar{\mu}\left((\bigcup A_n) \cup (\bigcup N_n)\right) = \mu(\bigcup A_n) \\ &= \sum \mu(A_n) = \sum \bar{\mu}(A_n \cup N_n) \end{aligned}" />
                    となり、<InlineMath math="\sigma" />-加法性を満たす。
                </p>
                <p className="mt-4">
                    4. <b>完備性</b>:
                    <InlineMath math="\bar{\mu}(B) = 0" /> （<InlineMath math="B = A \cup N" />）のとき <InlineMath math="\mu(A) = 0" />。
                    <InlineMath math="K \subset B" /> とすると、<InlineMath math="K \subset A \cup M" /> であり、<InlineMath math="\mu(A \cup M) = 0" />。
                    したがって <InlineMath math="K = \emptyset \cup K" /> は零集合 <InlineMath math="A \cup M" /> の部分集合として <InlineMath math="\bar{\mathcal{A}}" /> の定義を満たし、可測となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                実数直線上のボレル測度は、完備化することでルベーグ測度と一致します。
            </p>

            <ContentBox type="example" title="Example 1.6-2 (ボレル測度の完備化)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> 上のボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> に制限されたルベーグ測度を考える。
                    この測度空間を完備化すると、ルベーグ可測集合全体 <InlineMath math="\mathcal{L}" /> とルベーグ測度 <InlineMath math="\lambda" /> がそのまま得られる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用上の意義</h2>

            <p>
                完備化は一見テクニカルに見えますが、応用上（特に確率論や境界値問題）では極めて重要な役割を果たします。
            </p>

            <ContentBox type="remark" title="ほとんど至る所 (a.e.) の概念">
                <p>
                    「零集合を除いて成り立つ」という <b>almost everywhere (a.e.)</b> という概念は、完備測度空間において最も自然に扱えます。
                    もし測度が完備でなければ、ある性質を a.e. で満たす関数の極限を議論する際に、その収束先が再び可測であるかどうかの保証が複雑になります。
                    完備化により、「本質的ではない極小な部分の細部」を理論的に無視することが可能になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>測度空間の完備化</b>は、零集合の任意の部分集合を可測集合として追加する手続き。</li>
                    <li>完備化によって得られる測度 <InlineMath math="\bar{\mu}" /> は、元の測度 <InlineMath math="\mu" /> を保存する。</li>
                    <li><b>ルベーグ測度</b>は、ボレル測度を完備化したものとして解釈できる。</li>
                    <li>完備性は「ほとんど至る所」という議論を数学的に整合させるために必要。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
