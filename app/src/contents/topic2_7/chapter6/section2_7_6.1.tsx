import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EulerPhiDefinitionAndFormula() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                第5章で学んだフェルマーの小定理は、法が素数の場合に限定された性質でした。
                法が合成数の場合にも成り立つ一般的な定理（オイラーの定理）を導くためには、<strong>オイラーの関数 (Euler's totient function)</strong> という重要な道具が必要になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">オイラーのトーシェント関数</h2>

            <p>
                オイラーの関数は、ある自然数以下の数のうち、その数と「互いに素」であるものの個数をカウントする関数です。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (オイラーのトーシェント関数)">
                <p>
                    正の整数 <InlineMath math="n" /> に対し、
                    <BlockMath math="1 \leq k \leq n \quad \text{かつ} \quad \gcd(k, n) = 1" />
                    を満たす整数 <InlineMath math="k" /> の個数を <InlineMath math="\phi(n)" /> と表す。
                </p>
            </ContentBox>

            <p>
                定義だけでは抽象的なので、具体的にいくつかの <InlineMath math="\phi(n)" /> の値を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 6.1-1 (具体例)">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\phi(1) = 1" /></li>
                    <li><InlineMath math="\phi(2) = 1" /> ： <InlineMath math="1" /> のみ。</li>
                    <li><InlineMath math="\phi(6) = 2" /> ： <InlineMath math="\{1, 5\}" /> の 2 つ。</li>
                    <li><InlineMath math="\phi(7) = 6" /> ： <InlineMath math="\{1, 2, 3, 4, 5, 6\}" /> の 6 つ（ <InlineMath math="7" /> は素数）。</li>
                    <li><InlineMath math="\phi(12) = 4" /> ： <InlineMath math="\{1, 5, 7, 11\}" /> の 4 つ。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素数べきの場合の公式</h2>

            <p>
                オイラーの関数を計算する際、対象が「素数」や「素数のべき乗」であるとき、公式は非常に単純な形に整理されます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 (素数べきの φ)">
                <p>
                    素数 <InlineMath math="p" /> と正の整数 <InlineMath math="k \geq 1" /> に対して、次が成り立つ。
                    <BlockMath math="\phi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1)" />
                </p>
            </ContentBox>

            <p>
                この公式は、全体の数から「互いに素でない数」を除外するという直接的な考え方で容易に証明できます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="1" /> から <InlineMath math="p^k" /> までの整数のうち、 <InlineMath math="p^k" /> と互いに素<strong>でない</strong>ものは、 <InlineMath math="p" /> の倍数である。
                    そのような数は
                    <BlockMath math="\{p, 2p, 3p, \dots, (p^{k-1})p\}" />
                    であり、これらの個数はちょうど <InlineMath math="p^{k-1}" /> 個存在する。
                    全体の個数 <InlineMath math="p^k" /> から、これらの互いに素でないものの個数を引くことで、
                    <BlockMath math="\phi(p^k) = p^k - p^{k-1}" />
                    を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この公式を用いることで、素数のべき乗に対するオイラーの関数値を即座に計算できるようになります。
            </p>

            <ContentBox type="example" title="Example 6.1-2 (素数べきの計算例)">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\phi(8) = \phi(2^3) = 2^2 \times 1 = 4" /> 。</li>
                    <li><InlineMath math="\phi(27) = \phi(3^3) = 3^2 \times 2 = 18" /> 。</li>
                    <li><InlineMath math="\phi(25) = \phi(5^2) = 5 \times 4 = 20" /> 。</li>
                </ul>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>オイラーの関数</strong>： <InlineMath math="\phi(n)" /> は <InlineMath math="n" /> と互いに素な <InlineMath math="1" /> 以上 <InlineMath math="n" /> 以下の整数の個数。</li>
                    <li><strong>素数のとき</strong>： <InlineMath math="p" /> が素数なら <InlineMath math="\phi(p) = p-1" />。</li>
                    <li><strong>素数べきのとき</strong>： <InlineMath math="\phi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1)" />。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
