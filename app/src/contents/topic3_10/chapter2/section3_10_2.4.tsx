import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PrimitiveElementTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                体の拡大において、複数の元を添加して新しい体を作ることがよくあります（例：<InlineMath math="\mathbb{Q}(\sqrt{2}, \sqrt{3})" />）。しかし、分離拡大という条件のもとでは、これら複数の添加元を<strong>たった一つの元（原始元）の添加</strong>にまとめることができるという驚くべき定理が存在します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">原始元定理の主張</h2>

            <p>
                まずは原始元の定義を確認します。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (原始元)">
                <p>
                    有限次拡大 <InlineMath math="K/F" /> において、ただ一つの元 <InlineMath math="\alpha \in K" /> を用いて <InlineMath math="K = F(\alpha)" /> と書けるとき、この <InlineMath math="\alpha" /> を拡大 <InlineMath math="K/F" /> の<strong>原始元（primitive element）</strong>という。
                </p>
                <p>
                    原始元が存在する拡大を、<strong>単拡大（simple extension）</strong>と呼ぶこともある。
                </p>
            </ContentBox>

            <p>
                有限次分離拡大であれば、必ず原始元を見つけることができます。これが原始元定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (原始元定理)">
                <p>
                    <InlineMath math="F" /> を無限体とし、<InlineMath math="K/F" /> を有限次分離拡大とする。このとき、<InlineMath math="K/F" /> には必ず原始元が存在する。すなわち、
                </p>
                <BlockMath math="K = F(\gamma)" />
                <p>
                    となるような元 <InlineMath math="\gamma \in K" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    有限回の添加で <InlineMath math="K" /> が得られるため、2つの元を添加した拡大 <InlineMath math="K = F(\alpha, \beta)" /> の場合に証明できれば、帰納的に一般の場合も証明できる。
                </p>
                <p>
                    <InlineMath math="\alpha" /> と <InlineMath math="\beta" /> の <InlineMath math="F" /> 上の最小多項式をそれぞれ <InlineMath math="f(x), g(x)" /> とし、その根を <InlineMath math="\alpha = \alpha_1, \dots, \alpha_n" /> および <InlineMath math="\beta = \beta_1, \dots, \beta_m" /> とする。拡大は分離的なので、これらの根はすべて相異なる。
                </p>
                <p>
                    ある <InlineMath math="c \in F" /> を用いて <InlineMath math="\gamma = \alpha + c\beta" /> とおき、<InlineMath math="F(\gamma) = F(\alpha, \beta)" /> となるような <InlineMath math="c" /> を探す。<InlineMath math="F(\gamma) \subset F(\alpha, \beta)" /> は明らかであるため、<InlineMath math="\beta \in F(\gamma)" /> を示せば <InlineMath math="\alpha = \gamma - c\beta \in F(\gamma)" /> となり証明が終わる。
                </p>
                <p>
                    条件として、<InlineMath math="\alpha_i + c\beta_j = \alpha + c\beta" />（ただし <InlineMath math="j \neq 1" />）とならないように <InlineMath math="c" /> を選ぶ。すなわち <InlineMath math="c \neq \frac{\alpha_i - \alpha}{\beta - \beta_j}" /> とする。<InlineMath math="F" /> は無限体なので、このような有限個の値を避けて <InlineMath math="c" /> を選ぶことが可能である。
                </p>
                <p>
                    この <InlineMath math="c" /> に対して <InlineMath math="\gamma = \alpha + c\beta" /> とする。多項式 <InlineMath math="h(x) = f(\gamma - cx) \in F(\gamma)[x]" /> を考える。<InlineMath math="h(\beta) = f(\gamma - c\beta) = f(\alpha) = 0" /> である。一方、<InlineMath math="j \neq 1" /> のときは <InlineMath math="c" /> の選び方より <InlineMath math="\gamma - c\beta_j \neq \alpha_i" /> なので <InlineMath math="h(\beta_j) \neq 0" /> となる。
                </p>
                <p>
                    したがって、<InlineMath math="F(\gamma)[x]" /> において、<InlineMath math="h(x)" /> と <InlineMath math="g(x)" /> の共通根は <InlineMath math="\beta" /> のみである。<InlineMath math="g(x)" /> は分離的なので重根を持たず、<InlineMath math="F(\gamma)[x]" /> における最大公約数 <InlineMath math="\gcd(h(x), g(x))" /> は一次式 <InlineMath math="x - \beta" /> となる。最大公約数は係数体 <InlineMath math="F(\gamma)" /> 上で計算されるため、<InlineMath math="\beta \in F(\gamma)" /> が結論付けられる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体的に原始元を構成する計算例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 2.4-1 (Q(√2, √3) の原始元)">
                <p>
                    拡大 <InlineMath math="\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}" /> を考える。原始元として <InlineMath math="\alpha = \sqrt{2} + \sqrt{3}" /> が取れることを確認する。
                </p>
                <p>
                    まず <InlineMath math="\alpha^2 = (\sqrt{2}+\sqrt{3})^2 = 5 + 2\sqrt{6}" /> である。ここから
                </p>
                <BlockMath math="\sqrt{6} = \frac{\alpha^2 - 5}{2} \in \mathbb{Q}(\alpha)" />
                <p>
                    がわかる。さらに <InlineMath math="\alpha" /> を掛けると
                </p>
                <BlockMath math="\begin{aligned} \alpha^3 &= \alpha \cdot \alpha^2 \\ &= (\sqrt{2}+\sqrt{3})(5+2\sqrt{6}) \\ &= 5\sqrt{2} + 4\sqrt{3} + 5\sqrt{3} + 6\sqrt{2} \\ &= 11\sqrt{2} + 9\sqrt{3} \end{aligned}" />
                <p>
                    となる。<InlineMath math="\alpha = \sqrt{2} + \sqrt{3}" /> なので <InlineMath math="9\alpha = 9\sqrt{2} + 9\sqrt{3}" />。これらを引き算すると
                </p>
                <BlockMath math="\alpha^3 - 9\alpha = 2\sqrt{2} \quad \implies \quad \sqrt{2} = \frac{\alpha^3 - 9\alpha}{2} \in \mathbb{Q}(\alpha)" />
                <p>
                    となり、<InlineMath math="\sqrt{2} \in \mathbb{Q}(\alpha)" /> が示された。<InlineMath math="\sqrt{3} = \alpha - \sqrt{2}" /> なので <InlineMath math="\sqrt{3} \in \mathbb{Q}(\alpha)" /> も言える。
                </p>
                <p>
                    よって <InlineMath math="\mathbb{Q}(\sqrt{2}, \sqrt{3}) = \mathbb{Q}(\sqrt{2} + \sqrt{3})" /> であり、<InlineMath math="\sqrt{2} + \sqrt{3}" /> が原始元である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">原始元定理の応用と注意</h2>

            <p>
                無限体という条件がありましたが、有限体の場合でも原始元は必ず存在することが知られています（証明のアプローチは異なります）。
            </p>

            <ContentBox type="example" title="Example 2.4-2 (有限体における原始元)">
                <p>
                    有限体 <InlineMath math="\mathbb{F}_q" /> 上の有限次拡大 <InlineMath math="\mathbb{F}_{q^n}/\mathbb{F}_q" /> は常に分離拡大であり、原始元が存在する。
                </p>
                <p>
                    これは、有限体の乗法群 <InlineMath math="\mathbb{F}_{q^n}^\times" /> が必ず<strong>巡回群になる</strong>という事実から導かれる。その巡回群の生成元 <InlineMath math="\alpha" /> をとれば、当然 <InlineMath math="\mathbb{F}_{q^n} = \mathbb{F}_q(\alpha)" /> となり、<InlineMath math="\alpha" /> は原始元となる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (非分離拡大における例外)">
                <p>
                    分離拡大でない場合（非分離拡大）では、原始元定理が成り立たない例が存在します。例えば、標数 <InlineMath math="p" /> の体において <InlineMath math="\mathbb{F}_p(s, t) / \mathbb{F}_p(s^p, t^p)" /> という拡大を考えると、拡大次数は <InlineMath math="p^2" /> ですが、任意の元 <InlineMath math="\alpha" /> の <InlineMath math="p" /> 乗は基礎体に入ってしまうため、1つの元で生成される体の次数は最大でも <InlineMath math="p" /> に留まり、原始元が存在しません。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>体拡大 <InlineMath math="K/F" /> が1つの元で生成される（<InlineMath math="K = F(\alpha)" />）とき、<InlineMath math="\alpha" /> を<strong>原始元</strong>という。</li>
                    <li><strong>原始元定理</strong>：有限次分離拡大には、必ず原始元が存在する。</li>
                    <li>例えば <InlineMath math="\mathbb{Q}(\sqrt{2}, \sqrt{3})" /> は <InlineMath math="\mathbb{Q}(\sqrt{2}+\sqrt{3})" /> と単一の元による拡大として書き直せる。</li>
                    <li>有限体の拡大でも常に原始元が存在する（乗法群の巡回性による）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
