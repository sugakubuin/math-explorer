import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LipschitzContinuity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「一様連続」は関数の傾きがどこまでも急にならないための条件ですが、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> の存在による定義は抽象的で、具体的な関数が条件を満たすかどうかの判定が難しい場合があります。
                そこで、より扱いやすく、かつ一様連続よりもさらに強い（厳しい）条件を満たす「リプシッツ連続（Lipschitz continuity）」という概念が非常に重宝されます。これは微分方程式の解の一意性などを議論する際によく登場する性質です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リプシッツ連続</h2>

            <p>
                リプシッツ連続の特徴は、「関数の変化量（傾き）が、いかなる2点間をとっても常に一定の上限（定数）で抑えられていること」にあります。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 (リプシッツ連続)">
                <p>
                    区間 <InlineMath math="I" /> 上の関数 <InlineMath math="f" /> が<strong>リプシッツ連続</strong>（Lipschitz continuous）であるとは、ある定数 <InlineMath math="L \geq 0" />（リプシッツ定数と呼ぶ）が存在して、<InlineMath math="I" /> 内の任意の2点 <InlineMath math="x, y" /> に対して、
                </p>
                <BlockMath math="|f(x) - f(y)| \leq L |x - y|" />
                <p>
                    が成り立つことである。
                </p>
            </ContentBox>

            <p>
                <InlineMath math="x \neq y" /> のとき、この式は <InlineMath math="\frac{|f(x) - f(y)|}{|x - y|} \leq L" /> と変形できます。つまり、グラフ上のどの2点を結んだ割線の傾きの絶対値も決して <InlineMath math="L" /> を超えない、ということです。「どんなに急な坂道を探しても、その傾斜は上限 <InlineMath math="L" /> で抑えられている」と解釈できます。
                これは、微分可能な関数であれば「導関数が有界であること（すべての <InlineMath math="x" /> で <InlineMath math="|f'(x)| \leq L" />）」と強い関連があります（後の Chapter 6 で平均値定理により厳密に示されます）。
            </p>

            <ContentBox type="example" title="Example 5.4-1 (リプシッツ連続な関数の例)">
                <p>次の関数はいずれもリプシッツ連続である。</p>
                <div className="mt-4 font-semibold">(1) 1次関数</div>
                <p className="mt-2">
                    <InlineMath math="f(x) = ax + b" /> （<InlineMath math="a, b" /> は定数）とする。任意の <InlineMath math="x, y" /> に対して
                    <BlockMath math="\begin{aligned} |f(x) - f(y)| &= |(ax + b) - (ay + b)| \\ &= |a(x - y)| \\ &= |a||x - y| \end{aligned}" />
                    が成り立つ。したがって、リプシッツ定数 <InlineMath math="L = |a|" /> としてリプシッツ連続である。
                </p>
                <div className="mt-4 font-semibold">(2) 正弦関数・余弦関数</div>
                <p className="mt-2">
                    <InlineMath math="f(x) = \sin x" /> とする。和積の公式、あるいは平均値の定理（後述）を用いると
                    <BlockMath math="|\sin x - \sin y| \leq |x - y|" />
                    がすべての <InlineMath math="x, y \in \mathbb{R}" /> で成り立つことが示せる。したがって、リプシッツ定数 <InlineMath math="L = 1" /> としてリプシッツ連続である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">包含関係</h2>

            <p>
                リプシッツ連続という条件は、一様連続性、そして単なる連続性とどのような関係（包含関係）にあるのでしょうか。
            </p>

            <ContentBox type="proposition" title="Proposition 5.4-1 (連続性の包含関係)">
                <p>
                    関数の連続性の強さについて、次の包含関係が成り立つ。
                </p>
                <BlockMath math="\text{リプシッツ連続} \implies \text{一様連続} \implies \text{（各点）連続}" />
                <p>
                    しかし、逆は一般には成立しない。
                </p>
            </ContentBox>
            <ContentBox type="proof" title="Proof (連続性の包含関係)">
                <div className="mt-4 font-semibold">Step 1 (リプシッツ連続 <InlineMath math="\Rightarrow" /> 一様連続):</div>
                <p className="mt-2">
                    <InlineMath math="f" /> がリプシッツ定数 <InlineMath math="L" /> を持つリプシッツ連続な関数であるとする。<InlineMath math="L = 0" /> の場合は関数は定数関数となり明らかに一様連続であるため、<InlineMath math="L > 0" /> の場合を考える。
                </p>
                <p className="mt-2">
                    任意の <InlineMath math="\varepsilon > 0" /> に対して、前述の定数 <InlineMath math="L" /> を用いて <InlineMath math="\delta = \frac{\varepsilon}{L}" /> と選ぶ。<br />
                    このとき、任意の <InlineMath math="x, y \in I" /> に対して <InlineMath math="|x - y| < \delta" /> であれば、リプシッツ条件より
                </p>
                <BlockMath math="|f(x) - f(y)| \leq L |x - y| < L \cdot \frac{\varepsilon}{L} = \varepsilon" />
                <p>
                    となる。<InlineMath math="\delta = \frac{\varepsilon}{L}" /> という選び方は <InlineMath math="\varepsilon" /> （と定数 <InlineMath math="L" />）のみに依存し、点 <InlineMath math="x, y" /> の場所には全く依存しない。
                    したがって <InlineMath math="f" /> は一様連続であると示された。
                </p>
                <div className="mt-4 font-semibold">Step 2 (一様連続 <InlineMath math="\Rightarrow" /> 各点連続):</div>
                <p className="mt-2">
                    関数 <InlineMath math="f" /> が区間 <InlineMath math="I" /> 上で一様連続であるとする。
                    定義より、任意の <InlineMath math="\varepsilon > 0" /> に対して、区間全体で共通の <InlineMath math="\delta > 0" /> が存在して、<InlineMath math="|x - y| < \delta" /> を満たす任意の <InlineMath math="x, y \in I" /> に対して <InlineMath math="|f(x) - f(y)| < \varepsilon" /> が成り立つ。
                </p>
                <p className="mt-2">
                    区間 <InlineMath math="I" /> 内の任意の点 <InlineMath math="c" /> を固定する。上記の一様連続の式の <InlineMath math="y" /> に <InlineMath math="c" /> を代入すれば、
                    「<InlineMath math="|x - c| < \delta \implies |f(x) - f(c)| < \varepsilon" />」が得られる。
                    これはまさに点 <InlineMath math="c" /> における連続性の定義そのものである。<br />
                    （一様連続性のために保証された「どこでも通用する厳しい <InlineMath math="\delta" />」は、点 <InlineMath math="c" /> 専用の <InlineMath math="\delta" /> としても当然機能する。）<br />
                    したがって、一様連続ならば区間内のすべての各点において連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このように、リプシッツ連続であると証明できれば、<InlineMath math="\delta" /> の見つけ方が「<InlineMath math="\varepsilon \div L" />」と単なる割り算で具体的に構成できるため、一様連続であることを示す際の非常に強力で簡単な判定法になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">反例</h2>

            <p>
                Proposition 5.4-1 で「逆は必ずしも成立しない」と述べました。ここでは、「一様連続であるが、リプシッツ連続ではない」関数の代表的な反例を紹介します。
            </p>

            <ContentBox type="example" title="Example 5.4-2 (一様連続だがリプシッツ連続でない関数)">
                <p>
                    関数 <InlineMath math="f(x) = \sqrt{x}" /> は閉区間 <InlineMath math="[0, 1]" /> 上で一様連続であるが、リプシッツ連続ではない。
                </p>
                <div className="mt-4 font-semibold">証明の概略:</div>
                <p className="mt-2">
                    <strong>一様連続であること</strong>：<br />
                    関数 <InlineMath math="f(x) = \sqrt{x}" /> は閉区間 <InlineMath math="[0, 1]" /> で連続であるから、ハイネ・カントールの定理（Theorem 5.2-1）により、自動的にこの区間上で一様連続となる。
                </p>
                <p className="mt-4">
                    <strong>リプシッツ連続ではないこと</strong>：<br />
                    もしリプシッツ連続であると仮定すると、ある定数 <InlineMath math="L > 0" /> が存在して、すべての <InlineMath math="x \in (0, 1]" /> において（片方の点を特異点である原点 <InlineMath math="y=0" /> に固定して）、
                </p>
                <BlockMath math="|\sqrt{x} - 0| \leq L |x - 0| \implies \sqrt{x} \leq L x \implies L \geq \frac{1}{\sqrt{x}}" />
                <p>
                    が成り立つはずである。<br />
                    ところが <InlineMath math="x \to +0" /> と近づけた場合、右辺の <InlineMath math="\frac{1}{\sqrt{x}}" /> は無限大に発散してしまう。したがって、これを上から押さえ込むような有限な定数上限 <InlineMath math="L" /> は存在し得ない。グラフ上で言えば、<InlineMath math="x=0" /> の原点付近で接線の傾きが無限大（垂直）に立ち上がっているため、傾きの上限 <InlineMath math="L" /> が存在しないことを意味する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この反例が明確に示しているのは、関数の「急峻さ」が部分的に発散する（接線が垂直に立ち上がる）場合でも「限界値（区間）が有限」であれば一様連続にはなり得る一方で、リプシッツ連続性はどんな急峻な立ち上がりも一切許さない、という非常に強力な平坦さを要求しているということです。
            </p>

            <p>
                以上の議論により、有界区間における「連続・一様連続・リプシッツ連続」という関数の性質の強弱関係の理論は完結しました。
                次章 Chapter 6 では、ついに極限理論の集大成の一つである「微分の理論（実解析的アプローチ）」へと歩みを進めます。特にこれまで直感で用いていた関数の傾き・接線の話を厳密な連続性と平均値定理の観点から再構築します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>リプシッツ連続性は「任意の2点間の割線の傾きが常に定数 <InlineMath math="L" /> 以下で抑えられている」ことを要求する、極めて強い条件である。</li>
                    <li>リプシッツ連続ならば一様連続であるが、逆は成立しない（例：原点での <InlineMath math="\sqrt{x}" /> の傾きは発散する）。</li>
                    <li>条件の強さは 「リプシッツ連続 <InlineMath math="\implies" /> 一様連続 <InlineMath math="\implies" /> 連続」の包含関係となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
