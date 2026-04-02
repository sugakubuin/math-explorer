import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MeasurableFunctionOperations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                可測関数は、通常の代数演算や関数の合成、さらには数列の極限といった操作に対して非常に頑健な性質を持っています。
                本節では、これらの操作によって可測性がどのように受け継がれるかを厳密に示します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代数演算と可測性</h2>

            <p>
                2つの可測関数から作られる新しい関数も、ほとんどの場合に可測となります。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-1 (代数演算と可測性)">
                <p>
                    可測空間 <InlineMath math="(X, \mathcal{A})" /> 上の可測関数 <InlineMath math="f, g" /> に対し、以下の関数もすべて可測である。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li>和、差、積：<InlineMath math="f + g" />, <InlineMath math="f - g" />, <InlineMath math="fg" /></li>
                    <li>商：<InlineMath math="f/g" /> （<InlineMath math="g(x) \neq 0" /> のとき）</li>
                    <li>絶対値：<InlineMath math="|f|" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <b>1. <InlineMath math="f+g" /> の可測性</b>:<br />
                    任意の <InlineMath math="a \in \mathbb{R}" /> に対し、<InlineMath math="f(x) + g(x) < a \iff f(x) < a - g(x)" /> である。
                    有理数の稠密性（<InlineMath math="f(x) < q < a - g(x)" /> となる <InlineMath math="q \in \mathbb{Q}" /> が存在すること）を利用すると、
                    <BlockMath math="\begin{aligned} &\{x \mid f(x) + g(x) < a\} \\ &\quad = \bigcup_{q \in \mathbb{Q}} (\{x \mid f(x) < q\} \cap \{x \mid g(x) < a - q\})\end{aligned}" />
                    と書き直せる。右辺の各括弧内は可測集合の共通部分であり、有理数は可算個であるため、その可算和も可測集合となる。
                </p>
                <p className="mt-4">
                    <b>2. <InlineMath math="fg" /> の可測性</b>:<br />
                    関係式 <InlineMath math="fg = \frac{1}{4} \{(f+g)^2 - (f-g)^2\}" /> を用いる。
                    定数倍、和、差が可測であることを（1と同様に）示せば、あとは自乗 <InlineMath math="f^2" /> の可測性を示せば十分である。
                    <InlineMath math="\{f^2 > a\}" /> は、<InlineMath math="a < 0" /> のときは全集合 <InlineMath math="X" />、<InlineMath math="a \geq 0" /> のときは <InlineMath math="\{f > \sqrt{a}\} \cup \{f < -\sqrt{a}\}" /> となり、いずれも可測集合である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                次に関数の合成について見てみましょう。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-2 (可測関数の合成)">
                <p>
                    <InlineMath math="f : X \to Y" /> が可測空間 <InlineMath math="(X, \mathcal{A})" /> から <InlineMath math="(Y, \mathcal{B})" /> への可測関数であり、
                    <InlineMath math="g : Y \to \mathbb{R}" /> がボレル可測関数であるとき、合成関数 <InlineMath math="g \circ f" /> は可測である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意のボレル集合 <InlineMath math="B \in \mathcal{B}(\mathbb{R})" /> に対し、
                    <BlockMath math="(g \circ f)^{-1}(B) = f^{-1}(g^{-1}(B))" />
                    が成り立つ。<InlineMath math="g" /> がボレル可測なので <InlineMath math="g^{-1}(B) \in \mathcal{B}" /> であり、<InlineMath math="f" /> が可測なのでその逆像 <InlineMath math="f^{-1}(g^{-1}(B))" /> は <InlineMath math="\mathcal{A}" /> に属する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極限操作と可測性</h2>

            <p>
                ルベーグ積分論がリーマン積分より優れている最大の理由の1つは、極限操作との相性の良さにあります。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-1 (極限操作の可測性保存)">
                <p>
                    可測関数の列 <InlineMath math="\{f_n\}" /> に対し、以下の関数もすべて可測である。
                </p>
                <BlockMath math="\sup_n f_n, \quad \inf_n f_n, \quad \limsup_{n\to\infty} f_n, \quad \liminf_{n\to\infty} f_n" />
                <p className="mt-4">
                    特に、極限 <InlineMath math="f(x) = \lim_{n\to\infty} f_n(x)" /> が各点で存在する場合、その極限関数 <InlineMath math="f" /> も可測である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <b>上限 <InlineMath math="\sup f_n" /> について</b>:<br />
                    任意の <InlineMath math="a \in \mathbb{R}" /> に対し、<InlineMath math="\sup f_n(x) > a" /> となるのは、少なくとも1つの <InlineMath math="n" /> で <InlineMath math="f_n(x) > a" /> となることと同値である。
                    <BlockMath math="\{x \mid \sup_n f_n(x) > a\} = \bigcup_{n=1}^\infty \{x \mid f_n(x) > a\}" />
                    各 <InlineMath math="\{f_n > a\}" /> は可測であり、その可算和も可測である。
                </p>
                <p className="mt-4">
                    2. <b>下限 <InlineMath math="\inf f_n" /> について</b>:<br />
                    <InlineMath math="\inf f_n = -\sup(-f_n)" /> より、1 の結果から導かれる。
                </p>
                <p className="mt-4">
                    3. <b>上極限・下極限について</b>:<br />
                    定義より <InlineMath math="\limsup_{n\to\infty} f_n = \inf_{k} (\sup_{n \geq k} f_n)" /> である。
                    内側の上限が可測であることは 1 で示されており、その下限をとる操作も 2 により可測性を保つ。下極限も同様である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="なぜこの定理が重要か？">
                <p>
                    リーマン積分可能な関数列の極限が、再びリーマン積分可能である保証は一般にはありません。
                    しかし、可測関数の列の収束先は常に可測であることがこの定理から保証されます。
                    これにより、積分の極限を考える際、収束先の関数が「そもそも積分できる対象（可測関数）なのか」という心配をせずに、収束の条件（単調収束定理や優収束定理など）に集中できるのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>可測関数の和、積、絶対値などは再び<b>可測</b>となる。</li>
                    <li>可測関数の列の<b>上限、下限、極限</b>は再び可測となる。</li>
                    <li>この極限に対する頑健さが、ルベーグ積分論の強力な基盤となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
