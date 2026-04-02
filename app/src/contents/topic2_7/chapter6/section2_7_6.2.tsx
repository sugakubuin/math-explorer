import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EulerPhiMultiplicativity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で素数べきの場合のオイラーの関数 <InlineMath math="\phi(p^k)" /> の公式を得ました。
                これを利用して、一般の整数 <InlineMath math="n" /> に対する公式を導くためには、<strong>乗法性 (multiplicativity)</strong> という強力な性質を用います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">\phi の乗法性</h2>

            <p>
                互いに素な2つの整数の積に対するオイラー関数値は、それぞれの関数の積になります。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (φ の乗法性)">
                <p>
                    <InlineMath math="m" /> と <InlineMath math="n" /> が互いに素（ <InlineMath math="\gcd(m, n) = 1" /> ）ならば、次が成り立つ。
                    <BlockMath math="\phi(mn) = \phi(m)\phi(n)" />
                </p>
            </ContentBox>

            <p>
                この乗法的な性質は、なぜ成り立つのでしょうか。その背後には剰余環の深い構造が隠されています。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    この乗法性は、第4章で学んだ<strong>中国剰余定理 (Chinese Remainder Theorem)</strong> から直ちに導かれます。
                    中国剰余定理によれば、 <InlineMath math="\gcd(m, n) = 1" /> のとき、剰余環の間に同型対応があります。
                    <BlockMath math="\mathbb{Z}/mn\mathbb{Z} \cong \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}" />
                    互いに素であるという性質（乗法的な可逆性）は、この対応によってそのまま保たれます。
                    すなわち、 <InlineMath math="x" /> が <InlineMath math="mn" /> と互いに素であることと、 <InlineMath math="x" /> が <InlineMath math="m" /> とも <InlineMath math="n" /> とも互いに素であることは等価です。
                </p>
                <p>
                    したがって、可逆元（既約剰余類）の個数について、
                    <BlockMath math="\phi(mn) = \phi(m) \times \phi(n)" />
                    が自然に成り立ちます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般の n の計算公式</h2>

            <p>
                乗法性と素数べきの公式を組み合わせることで、任意の整数 <InlineMath math="n" /> のオイラーの関数を計算する一般公式が得られます。
            </p>

            <ContentBox type="theorem" title="Corollary 6.2-1 (φ の一般公式)">
                <p>
                    整数 <InlineMath math="n" /> を素因数分解して <InlineMath math="n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}" /> と表すとき、次が成り立つ。
                    <BlockMath math="\phi(n) = n \prod_{i=1}^k \left(1 - \frac{1}{p_i}\right)" />
                    あるいは、
                    <BlockMath math="\phi(n) = \prod_{i=1}^k p_i^{e_i - 1}(p_i - 1)" />
                </p>
            </ContentBox>

            <p>
                証明は <InlineMath math="\phi" /> の乗法性と素数べきの公式から明らかですが、この一般公式を用いることで、任意の整数のオイラー関数値を具体的に計算することが可能になります。
            </p>

            <ContentBox type="example" title="Example 6.2-1 (具体例)">
                <p>
                    <strong>1. 360 の場合</strong> <br />
                    <InlineMath math="360" /> を素因数分解すると <InlineMath math="360 = 2^3 \times 3^2 \times 5" /> となる。一般公式より、
                    <BlockMath math="\begin{aligned}
                    \phi(360) &= 360 \times \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{3}\right) \left(1 - \frac{1}{5}\right) \\
                    &= 360 \times \frac{1}{2} \times \frac{2}{3} \times \frac{4}{5} = 96
                    \end{aligned}" />
                </p>
                <p className="mt-4">
                    <strong>2. RSA 暗号の場合（鍵生成メカニズム）</strong> <br />
                    RSA 暗号では、2つの大きな素数 <InlineMath math="p, q" /> （互いに素）に対して <InlineMath math="n = pq" /> と設定する。このとき、乗法性より
                    <BlockMath math="\phi(n) = \phi(p)\phi(q) = (p-1)(q-1) = pq - p - q + 1" />
                    と極めて簡単に求まる。ここで得られた <InlineMath math="\phi(n)" /> が、RSAの秘密鍵設定 <InlineMath math="ed \equiv 1 \pmod{\phi(n)}" /> の根幹となる。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>乗法性</strong>： <InlineMath math="\gcd(m, n) = 1 \implies \phi(mn) = \phi(m)\phi(n)" />。中国剰余定理が背景にある。</li>
                    <li><strong>一般公式</strong>： 素因数分解 <InlineMath math="n = \prod_{i} p_i^{e_i}" /> が分かれば <InlineMath math="\phi(n) = n \prod_{p \mid n} (1 - 1/p)" /> で計算可能。</li>
                    <li><strong>RSAの鍵</strong>： <InlineMath math="n = pq" /> ならば <InlineMath math="\phi(n) = (p-1)(q-1)" /> と容易に求まる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
