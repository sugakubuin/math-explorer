import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LinftySpaceDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                有限な <InlineMath math="p" /> に対して <InlineMath math="L^p" /> 空間を定義しましたが、関数の「有界性」を扱うための極限的な空間として <InlineMath math="L^\infty" /> 空間が存在します。
                ただし、測度論の文脈では、零集合上での極端な値（無限大など）を無視して「本質的に」有界であるかどうかを考える必要があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">本質的上限 (Essential Supremum)</h2>

            <p>
                通常の関数の上限 (Supremum) は、たとえ一点であっても大きな値をとればその値に支配されます。
                一方、積分値に影響を与えない零集合を除外した上限を「本質的上限」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 4.2-1 (本質的上限)">
                <p>
                    可測関数 <InlineMath math="f" /> に対して、次で定義される値を <b>本質的上限 (essential supremum)</b> と呼び、<InlineMath math="\|f\|_\infty" /> または <InlineMath math="\text{ess sup} |f|" /> と表記する：
                    <BlockMath math="\|f\|_\infty := \inf \{ M \geq 0 \mid |f(x)| \leq M \text{ a.e.} \}" />
                </p>
                <p className="mt-4">
                    この値が有限であるとき、<InlineMath math="f" /> は <b>本質的に有界 (essentially bounded)</b> であるという。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-1 (一点での無限大と本質的上限)">
                <p>
                    <InlineMath math="X = [0, 1]" /> 上のルベーグ測度を考える。関数
                    <BlockMath math="f(x) = \begin{cases} \infty & (x = 0) \\ x & (x \in (0, 1]) \end{cases}" />
                    を想定してみよう。
                </p>
                <p className="mt-4">
                    通常の関数の上限は <InlineMath math="\sup |f| = \infty" /> である。
                    しかし、一点 <InlineMath math="\{0\}" /> は測度 0 なので、本質的上限を計算する際は無視できる。
                    <InlineMath math="(0, 1]" /> 上では <InlineMath math="|f(x)| \leq 1" /> なので、本質的上限は <InlineMath math="\|f\|_\infty = 1" /> となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">L^∞ 空間の定義</h2>

            <p>
                本質的に有界な関数の全体も、a.e. 同一視を行うことでバナッハ空間を構成します。
            </p>

            <ContentBox type="definition" title="Definition 4.2-2 (L^∞ 空間)">
                <p>
                    測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> 上の本質的に有界な複素数値（または実数値）可測関数の同値類（a.e. 同一視）からなる集合を <b><InlineMath math="L^\infty" /> 空間</b> と呼び、<InlineMath math="L^\infty(X, \mu)" /> と表記する。
                </p>
            </ContentBox>

            <p className="mt-6">
                <InlineMath math="L^\infty" /> は、<InlineMath math="p \to \infty" /> としたときの <InlineMath math="L^p" /> ノルムの極限として解釈することができます。
            </p>

            <ContentBox type="remark" title="p ノルムの極限としての L^\infty">
                <p>
                    有限測度空間（例：有界区間）の場合、<InlineMath math="f \in L^\infty" /> ならば、すべての <InlineMath math="p \geq 1" /> に対して <InlineMath math="f \in L^p" /> であり、
                    <BlockMath math="\lim_{p \to \infty} \|f\|_p = \|f\|_\infty" />
                    が成り立ちます。これにより、<InlineMath math="L^\infty" /> は <InlineMath math="L^p" /> 族の自然な終焉として位置づけられます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>本質的上限 (<InlineMath math="\| \cdot \|_\infty" />)</b> は、測度 0 の集合を無視した際の上限（下限の上限）である。</li>
                    <li><b><InlineMath math="L^\infty" /> 空間</b> は、本質的に有界な関数の同値類からなる空間である。</li>
                    <li><InlineMath math="L^\infty" /> ノルムは、有界関数空間における一様ノルムの測度論的拡張と言える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
