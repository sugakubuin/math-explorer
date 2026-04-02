import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MonotoneConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ルベーグ積分がリーマン積分よりも優れている最大の理由の一つは、極限操作と積分の順序交換が非常に緩やかな条件で正当化される点にあります。
                本節では、非負値可測関数の増大列に対して成り立つ「単調収束定理」を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単調収束定理 (Monotone Convergence Theorem)</h2>

            <p>
                単調収束定理は、別名「レヴィの定理」とも呼ばれます。
                この定理は、関数列が非負で単調に増加してさえいれば、その極限と積分の順序を入れ替えてもよいことを保証します。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (単調収束定理)">
                <p>
                    <InlineMath math="\{f_n\}" /> を非負値可測関数の列とする。
                    もし <InlineMath math="f_1 \leq f_2 \leq \cdots" /> （単調増加）であり、ほとんど至る所 (a.e.) で <InlineMath math="f_n(x) \to f(x)" /> であるならば、
                    <BlockMath math="\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    積分の単調性より、数列 <InlineMath math="\int f_n" /> は単調増加である。したがって、極限 <InlineMath math="\alpha = \lim \int f_n" /> は有限または無限大として存在する。
                    また <InlineMath math="f_n \leq f" /> より <InlineMath math="\alpha \leq \int f" /> は明らかである。
                </p>
                <p className="mt-4">
                    逆向きの不等式を示すため、任意の単関数 <InlineMath math="s \leq f" /> と <InlineMath math="0 < c < 1" /> に対して、
                    <BlockMath math="A_n = \{x \in X \mid f_n(x) \geq c \cdot s(x)\}" />
                    という集合を定義する。この <InlineMath math="A_n" /> は単調増加であり、a.e. で <InlineMath math="\bigcup A_n = X" /> となる。
                    測度の連続性（下からの連続性）により、
                    <BlockMath math="\int_X f_n \, d\mu \geq \int_{A_n} f_n \, d\mu \geq c \int_{A_n} s \, d\mu \xrightarrow{n \to \infty} c \int_X s \, d\mu" />
                    が成り立つ。この式で <InlineMath math="c \to 1" /> とし、さらにすべての単関数 <InlineMath math="s \leq f" /> についての上限（定義 3.2-1）をとれば、
                    <BlockMath math="\alpha \geq \int_X f \, d\mu" />
                    が得られ、両側の不等式が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-1 (小区間の特性関数列)">
                <p>
                    <InlineMath math="X = [0, 1)" /> 上のルベーグ測度を考える。関数列を <InlineMath math="f_n = \mathbf{1}_{[0, 1-1/n]}" /> とする。
                </p>
                <p className="mt-4">
                    この関数列は <InlineMath math="n \to \infty" /> で単調に増加し、各点において <InlineMath math="f(x) = \mathbf{1}_{[0, 1)} = 1" /> に収束する。
                    積分の極限は、
                    <BlockMath math="\lim_{n \to \infty} \int_0^1 f_n \, d\lambda = \lim_{n \to \infty} \left( 1 - \frac{1}{n} \right) = 1" />
                    であり、極限関数の積分 <InlineMath math="\int_0^1 1 \, d\lambda = 1" /> と一致する。
                </p>
            </ContentBox>

            <h3 className="text-xl font-semibold mt-10 mb-4">応用：項別積分定理</h3>
            <p>
                単調収束定理を無限級数に適用することで、無限和と積分の順序交換を正当化する非常に強力な系が得られます。
            </p>

            <ContentBox type="corollary" title="Corollary 3.3-1 (項別積分定理)">
                <p>
                    非負値可測関数列 <InlineMath math="\{g_n\}" /> に対して、次が成り立つ：
                    <BlockMath math="\int_X \left( \sum_{n=1}^\infty g_n \right) d\mu = \sum_{n=1}^\infty \int_X g_n \, d\mu" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    部分和 <InlineMath math="s_n = \sum_{k=1}^n g_k" /> を考える。
                    各 <InlineMath math="g_k" /> が非負であるため、部分和の列 <InlineMath math="\{s_n\}" /> は各点において単調増加であり、その極限は無限級数 <InlineMath math="\sum_{k=1}^\infty g_k" /> と一致する。
                    ここで単調収束定理 (MCT) および積分の有限線形性を用いると、
                    <BlockMath math="\begin{aligned} \int_X \left( \sum_{k=1}^\infty g_k \right) d\mu &= \int_X \lim_{n \to \infty} s_n \, d\mu \\ &= \lim_{n \to \infty} \int_X s_n \, d\mu \\ &= \lim_{n \to \infty} \sum_{k=1}^n \int_X g_k \, d\mu \\ &= \sum_{k=1}^\infty \int_X g_k \, d\mu \end{aligned}" />
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="リーマン積分との対比">
                <p>
                    リーマン積分において積分と極限の順序交換を保証するためには、関数列が「一様収束」していることが通常求められます。
                    しかし、ルベーグ積分の単調収束定理では「単調性」のみでそれを保証します。これにより、一様収束しないような極限操作に対しても、非常に広範に適用が可能です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>単調収束定理</b>は、非負値関数列の単調増加性を手がかりに極限と積分の順序交換を保証する。</li>
                    <li>非負値関数の<b>無限和と積分</b>は常に順序交換可能であることを導く（項別積分）。</li>
                    <li>一様収束を必要としないルベーグ積分の柔軟性を示す最初の主要な結果である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
