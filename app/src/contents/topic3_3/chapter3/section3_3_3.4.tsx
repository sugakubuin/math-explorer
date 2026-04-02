import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FatouLemma() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                単調収束定理は関数列が増大することを前提としていましたが、一般の非負値可測関数列に対しても、極限の積分と積分の極限の間に一定の関係が成り立ちます。
                これを「ファトゥの補題」と呼び、優収束定理を導く上での重要なクッションとなります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ファトゥの補題 (Fatou's Lemma)</h2>

            <p>
                ファトゥの補題は、等号ではなく「不等号」が成り立つことを主張します。
                関数が激しく振動したり、遠くへ逃げていったりする場合でも、極限関数の積分は「積分の下極限」を超えないことを保証します。
            </p>

            <ContentBox type="lemma" title="Lemma 3.4-1 (ファトゥの補題)">
                <p>
                    <InlineMath math="\{f_n\}" /> を非負値可測関数列とする。このとき、次が成り立つ：
                    <BlockMath math="\int_X \liminf_{n \to \infty} f_n \, d\mu \leq \liminf_{n \to \infty} \int_X f_n \, d\mu" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    各 <InlineMath math="n" /> に対し、<InlineMath math="g_n(x) = \inf_{k \geq n} f_k(x)" /> と置く。
                    このとき <InlineMath math="g_n" /> は単調増加（<InlineMath math="g_n \leq g_{n+1}" />）であり、定義より其々の極限は <InlineMath math="\liminf f_n" /> となる。
                </p>
                <p className="mt-4">
                    単調収束定理 (MCT) を <InlineMath math="g_n" /> に適用すると、
                    <BlockMath math="\int_X \left( \lim_{n \to \infty} g_n \right) d \mu = \lim_{n \to \infty} \int_X g_n \, d \mu" />
                    が成り立つ。一方、任意の <InlineMath math="k \geq n" /> に対して <InlineMath math="g_n \leq f_k" /> であるから、積分の単調性より
                    <BlockMath math="\int_X g_n \, d \mu \leq \inf_{k \geq n} \int_X f_k \, d \mu" />
                    となる。この両辺で <InlineMath math="n \to \infty" /> とすれば、
                    <BlockMath math="\lim_{n \to \infty} \int_X g_n \, d \mu \leq \liminf_{n \to \infty} \int_X f_n \, d \mu" />
                    が得られ、結論が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-1 (等号が成立しない例：質量の逃亡)">
                <p>
                    <InlineMath math="X = \mathbb{R}" /> 上のルベーグ測度を考える。関数列を <InlineMath math="f_n = \mathbf{1}_{[n, n+1]}" /> とする。
                </p>
                <p className="mt-4">
                    このとき、どの点 <InlineMath math="x" /> においても、十分大きな <InlineMath math="n" /> に対して <InlineMath math="f_n(x) = 0" /> となるため、極限関数は <InlineMath math="\liminf f_n = 0" /> である。したがって、
                    <BlockMath math="\int \liminf f_n \, d\lambda = 0" />
                </p>
                <p className="mt-4">
                    しかし、各 <InlineMath math="f_n" /> の積分は常に 1 である：
                    <BlockMath math="\int f_n \, d\lambda = \lambda([n, n+1]) = 1 \implies \liminf_{n \to \infty} \int f_n \, d\lambda = 1" />
                </p>
                <p className="mt-4">
                    この例では <InlineMath math="0 < 1" /> となり、不等号が厳密に成り立っている。これは、積分の「質量」が極限操作によって無限遠へと消えてしまった（逃亡した）ことを表している。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="不等号の向きの覚え方">
                <p>
                    積分の外側に <InlineMath math="\liminf" /> がある方が「情報が欠落している（積分値が大きくなる余地がある）」とイメージしましょう。
                    ファトゥの補題は「極限関数の積分は、各ステップの積分値の極限を上回ることはない」という下からの評価を与えています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ファトゥの補題</b>は、非負値関数列に対して極限の積分と積分の下極限の不等式を与える。</li>
                    <li>単調収束定理を補助として証明される。</li>
                    <li>等号が成立しない例（質量の逃亡や無限の振動）は、ルベーグ積分の極限における重要な「落とし穴」を理解する助けとなる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
