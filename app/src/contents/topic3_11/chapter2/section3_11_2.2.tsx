import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionTensorProductUniversality() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多重線形写像は非常に重要ですが、それぞれの変数が独立に動くため、一般の線形写像と比べて扱いが複雑になります。そこで、多重線形写像を単なる一つの線形写像として扱うための新しいベクトル空間、すなわち「テンソル積」を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">テンソル積の普遍性の主張</h2>

            <p className="leading-relaxed">
                テンソル積は、その具体的な構成方法よりも「どのような役割を果たすか」という普遍的性質（universal property）によって特徴付けられます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.2-1 (テンソル積の普遍性)"
            >
                <p>
                    ベクトル空間 <InlineMath math="V, W" /> の<strong>テンソル積</strong>とは、ベクトル空間 <InlineMath math="V \otimes W" /> と双線形写像 <InlineMath math="\iota : V \times W \to V \otimes W" /> の組であって、以下の<strong>普遍性</strong>を満たすものである。
                </p>
                <p>
                    任意のベクトル空間 <InlineMath math="U" /> と任意の双線形写像 <InlineMath math="f : V \times W \to U" /> に対して、
                    <BlockMath math="f = \tilde{f} \circ \iota" />
                    となるような線形写像 <InlineMath math="\tilde{f} : V \otimes W \to U" /> が唯一存在する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この普遍性は、あらゆる双線形写像 <InlineMath math="f" /> が、必ず <InlineMath math="V \otimes W" /> を経由する線形写像 <InlineMath math="\tilde{f}" /> として一意に表現できることを意味しています。このような性質を持つ空間は、本質的に一つしか存在しません。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 2.2-1 (普遍性によるテンソル積の一意性)"
            >
                <p>
                    普遍性を満たすテンソル積の対 <InlineMath math="(V \otimes W, \iota)" /> は、同型の意味で一意に定まる。
                </p>
                <p>
                    （※具体的な構成については次節 §2.3 で与える）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    二つの普遍的な対 <InlineMath math="(T, \iota)" /> と <InlineMath math="(T', \iota')" /> があるとする。<InlineMath math="(T, \iota)" /> の普遍性において、<InlineMath math="U = T'" />、<InlineMath math="f = \iota'" /> と考えると、線形写像 <InlineMath math="\phi : T \to T'" /> が唯一存在して <InlineMath math="\iota' = \phi \circ \iota" /> となる。
                </p>
                <p>
                    同様に、<InlineMath math="(T', \iota')" /> の普遍性から、線形写像 <InlineMath math="\psi : T' \to T" /> が唯一存在して <InlineMath math="\iota = \psi \circ \iota'" /> となる。
                </p>
                <p>
                    これらを代入すると <InlineMath math="\iota = \psi \circ \phi \circ \iota" /> となる。<InlineMath math="(T, \iota)" /> の普遍性において <InlineMath math="U = T" />、<InlineMath math="f = \iota" /> としたとき、対応する線形写像は一意であり、恒等写像 <InlineMath math="\mathrm{id}_T" /> がこれを満たす。したがって <InlineMath math="\psi \circ \phi = \mathrm{id}_T" /> である。
                </p>
                <p>
                    対称性により <InlineMath math="\phi \circ \psi = \mathrm{id}_{T'}" /> も成り立つため、<InlineMath math="\phi" /> は同型写像である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.2-1 (普遍性のイメージ)"
            >
                <p>
                    <strong><InlineMath math="\mathbb{R}^2 \otimes \mathbb{R}^3" /> を経由する双線形写像：</strong><br />
                    任意の双線形写像 <InlineMath math="f: \mathbb{R}^2 \times \mathbb{R}^3 \to \mathbb{R}" /> は、必ず <InlineMath math="\mathbb{R}^2 \otimes \mathbb{R}^3 \to \mathbb{R}" /> という一つの線形写像 <InlineMath math="\tilde{f}" /> に対応する。
                </p>
                <p>
                    <InlineMath math="\mathbb{R}^2 \otimes \mathbb{R}^3" /> は <InlineMath math="2 \times 3 = 6" /> 次元の空間になる（§2.3 で後述）ため、<InlineMath math="\tilde{f}" /> は 6 次元の入力を持つ線形写像である。双線形写像が 6 個の基底値で決まることと、6 次元空間からの線形写像が 6 個の基底で決まることが完璧に対応している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">多重テンソル積への拡張</h2>

            <p className="leading-relaxed">
                2 つの空間のテンソル積を定義しましたが、これを自然に <InlineMath math="n" /> 個の空間に拡張することができます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.2-2 (多重テンソル積)"
            >
                <p>
                    <InlineMath math="n" /> 個のベクトル空間 <InlineMath math="V_1, \ldots, V_n" /> の<strong>テンソル積</strong> <InlineMath math="V_1 \otimes \cdots \otimes V_n" /> は、多重線形写像 <InlineMath math="V_1 \times \cdots \times V_n \to U" /> を線形写像に普遍的に変換するベクトル空間として定義される。
                </p>
                <p>
                    <InlineMath math="(v_1, \ldots, v_n)" /> の像を <InlineMath math="v_1 \otimes \cdots \otimes v_n" /> と書き、これを<strong>純粋テンソル（pure tensor）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                複数のテンソル積を順番に取る操作は、結合法則を満たします。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 2.2-1 (テンソル積の結合律)"
            >
                <p>
                    ベクトル空間のテンソル積は同型を除いて結合的である。すなわち、
                    <BlockMath math="(U \otimes V) \otimes W \cong U \otimes (V \otimes W)" />
                    が成り立つ。これにより、括弧を省略して <InlineMath math="U \otimes V \otimes W" /> と書くことができる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    普遍性を用いて示す。写像
                    <BlockMath math="\begin{aligned} \alpha: U \times V \times W &\to (U \otimes V) \otimes W, \\ (u, v, w) &\mapsto (u \otimes v) \otimes w \end{aligned}" />
                    は三重線形であるため、<InlineMath math="U \otimes V \otimes W" /> の普遍性から線形写像 <InlineMath math="\phi : U \otimes V \otimes W \to (U \otimes V) \otimes W" /> が誘導される。
                </p>
                <p>
                    同様にして逆向きの写像 <InlineMath math="\psi : (U \otimes V) \otimes W \to U \otimes V \otimes W" /> も構成でき、これらが互いに逆写像となることが普遍性から確認できる。
                </p>
                <p>
                    <InlineMath math="U \otimes (V \otimes W)" /> についても同様の議論が成り立ち、結果として両辺は自然に同型となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.2-2 (多重テンソル積の次元)"
            >
                <p>
                    <InlineMath math="\mathbb{R}^2 \otimes \mathbb{R}^2 \otimes \mathbb{R}^2" /> の次元は、各空間の次元の積 <InlineMath math="2^3 = 8" /> となる。
                </p>
                <p>
                    標準基底を <InlineMath math="e_1, e_2" /> とすると、純粋テンソル <InlineMath math="e_i \otimes e_j \otimes e_k" /> （<InlineMath math="i,j,k \in \{1,2\}" />）の 8 個がこの空間の基底をなす。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>テンソル積 <InlineMath math="V \otimes W" /> は、双線形写像を線形写像として扱うための「普遍性」を満たす空間として定義される。</li>
                    <li>普遍性を満たす空間は、同型の意味で一意に存在する。</li>
                    <li><InlineMath math="n" /> 個の空間のテンソル積も同様に定義され、テンソル積の演算は結合法則 <InlineMath math="(U \otimes V) \otimes W \cong U \otimes (V \otimes W)" /> を満たす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}