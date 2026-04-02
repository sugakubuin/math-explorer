import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DominatedConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                単調収束定理 (MCT) は「単調増加」という強い条件が必要でしたが、ほとんどの実用的なケースでは、関数列は必ずしも単調ではありません。
                ルベーグの「優収束定理」は、可積分な「屋根（優関数）」で関数列を抑え込むことさえできれば、極限と積分の順序交換を保証する、ルベーグ積分論で最も重要な定理です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">優収束定理 (Dominated Convergence Theorem)</h2>

            <p>
                この定理は、別名「ルベーグの収束定理」とも呼ばれます。
                鍵となるのは「可積分な優関数の存在」です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.6-1 (優収束定理)">
                <p>
                    <InlineMath math="\{f_n\}" /> を可測関数列とする。もし以下の条件が満たされるならば：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>ほとんど至る所 (a.e.) で極限 <InlineMath math="\lim_{n \to \infty} f_n(x) = f(x)" /> が存在する。</li>
                    <li>ある可積分な非負値関数 <InlineMath math="g \in L^1(X, \mu)" /> が存在して、すべての <InlineMath math="n" /> に対して a.e. で <InlineMath math="|f_n(x)| \leq g(x)" /> が成り立つ。</li>
                </ol>
                <p className="mt-4">
                    このとき、極限関数 <InlineMath math="f" /> も可積分であり、次が成り立つ：
                    <BlockMath math="\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    条件より <InlineMath math="g + f_n \geq 0" /> および <InlineMath math="g - f_n \geq 0" /> である。
                    これらにファトゥの補題 (Lemma 3.4-1) を適用する。
                </p>
                <p className="mt-4">
                    (i) <InlineMath math="g + f_n \geq 0" /> に対して：
                    <BlockMath math="\begin{aligned} \int (g + f) \, d\mu &= \int \liminf (g + f_n) \, d\mu \\ &\leq \liminf \int (g + f_n) \, d\mu \\ &= \int g \, d\mu + \liminf \int f_n \, d\mu \end{aligned}" />
                    <InlineMath math="g" /> は可積分なので、両辺から <InlineMath math="\int g" /> を引くことができ、<InlineMath math="\int f \leq \liminf \int f_n" /> を得る。
                </p>
                <p className="mt-2">
                    (ii) <InlineMath math="g - f_n \geq 0" /> に対して：
                    <BlockMath math="\begin{aligned} \int (g - f) \, d\mu &= \int \liminf (g - f_n) \, d\mu \\ &\leq \liminf \int (g - f_n) \, d\mu \\ &= \int g \, d\mu - \limsup \int f_n \, d\mu \end{aligned}" />
                    同様に <InlineMath math="\int g" /> を消せば、<InlineMath math="\limsup \int f_n \leq \int f" /> を得る。
                </p>
                <p className="mt-2">
                    (i) と (ii) より <InlineMath math="\limsup \int f_n \leq \int f \leq \liminf \int f_n" /> となり、極限が存在して等号が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.6-1 (適用可能な例)">
                <p>
                    <InlineMath math="X = [0, \infty)" /> 上の計限を考える：
                    <BlockMath math="\lim_{n \to \infty} \int_0^\infty \frac{n \sin(x/n)}{x(x^2+1)} \, dx" />
                </p>
                <p className="mt-4">
                    被積分関数 <InlineMath math="f_n(x)" /> について、<InlineMath math="\sin \theta \leq \theta" /> を用いると、
                    <BlockMath math="|f_n(x)| = \left| \frac{n \sin(x/n)}{x(x^2+1)} \right| \leq \frac{n \cdot (x/n)}{x(x^2+1)} = \frac{1}{x^2+1} = g(x)" />
                    となる。<InlineMath math="g(x)" /> は <InlineMath math="[0, \infty)" /> 上で可積分（積分値は <InlineMath math="\pi/2" />）なので、優収束定理が使える。
                    <InlineMath math="f_n(x) \to \frac{1}{x^2+1}" /> a.e. であるから、極限は <InlineMath math="\int_0^\infty \frac{1}{x^2+1} \, dx = \pi/2" /> となる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.6-2 (優関数の選択の重要性)">
                <p>
                    <InlineMath math="f_n(x) = \frac{\sin(x/n)}{x}" /> （<InlineMath math="x \in [1, \infty)" />）について考える。
                    点別極限は 0 であるが、<InlineMath math="|f_n(x)| \leq \frac{1}{x}" /> という評価では、<InlineMath math="1/x" /> がこの区間で可積分でない（広義積分が無限大）ため、優収束定理は適用できない。
                    実際、この積分は収束しない。優関数の可積分性は定理を成立させるための絶対条件です。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="極限と積分の王道">
                <p>
                    解析学や統計学、物理学において「極限と積分を入れ替えたい」と思ったとき、まず最初に思い浮かべるべきなのがこの優収束定理です。
                    単調性は不要であり、「十分に減衰する優関数で抑えられているか」という1点のみが問われます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>優収束定理</b>は、可積分な優関数の存在により積分と極限の順序交換を保証する。</li>
                    <li>ルベーグ積分論において最も実用的で、強力な定理である。</li>
                    <li>ファトゥの補題を用いて、上下からの評価を行うことで証明される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
