import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EulersTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                フェルマーの小定理は、法が素数の場合に限定された性質でした。
                オイラーの関数 <InlineMath math="\phi(n)" /> を用いることで、これを「法が任意の正の整数である場合」へと一般化することができます。
                これが現代数論の柱の一つである<strong>オイラーの定理 (Euler's Theorem)</strong> です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の主張とフェルマーの小定理</h2>

            <p>
                まずは定理の主張そのものを確認しましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (オイラーの定理)">
                <p>
                    <InlineMath math="m" /> を正の整数とし、 <InlineMath math="a" /> を <InlineMath math="m" /> と互いに素な（ <InlineMath math="\gcd(a, m) = 1" /> ）整数とするとき、次が成り立つ。
                    <BlockMath math="a^{\phi(m)} \equiv 1 \pmod{m}" />
                </p>
            </ContentBox>

            <p>
                この定理は、法が合成数であってもべき乗の剰余に関する普遍的な法則が存在することを示しています。さらに、既知の定理との強力な繋がりがあります。
            </p>

            <ContentBox type="remark" title="フェルマーの小定理との関連">
                <p>
                    フェルマーの小定理は、実は <InlineMath math="m" /> が素数 <InlineMath math="p" /> であるときの特別な場合にあたります。
                    <InlineMath math="m = p" /> のとき、 <InlineMath math="\phi(p) = p - 1" /> ですから、定理の式は
                    <BlockMath math="a^{p-1} \equiv 1 \pmod{p}" />
                    となり、これはまさに第5章で学んだフェルマーの小定理そのものです。
                    すなわち、オイラーの定理は小定理を完全に含んだ拡張版と言えます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の証明</h2>

            <p>
                証明のアイデアは、フェルマーの小定理の「置換による証明」を既約剰余類の集合へと拡張したものです。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="m" /> と互いに素な剰余類の集合（既約剰余類群）を <InlineMath math="R = \{r_1, r_2, \dots, r_{\phi(m)}\}" /> とします。
                    <InlineMath math="\gcd(a, m) = 1" /> なので、各元に <InlineMath math="a" /> を掛けた集合
                    <BlockMath math="S = \{ar_1,\ ar_2,\ \dots,\ ar_{\phi(m)} \pmod{m}\}" />
                    を考えると、これらの元はすべて <InlineMath math="m" /> と互いに素であり、かつ <InlineMath math="\pmod{m}" /> で互いに異なります。
                    したがって、集合 <InlineMath math="S" /> は元の集合 <InlineMath math="R" /> の元を並べ替えたもの（置換）に過ぎません。
                </p>
                <p>
                    これら <InlineMath math="\phi(m)" /> 個のすべての積をとると、
                    <BlockMath math="ar_1 \cdot ar_2 \cdots ar_{\phi(m)} \equiv r_1 \cdot r_2 \cdots r_{\phi(m)} \pmod{m}" />
                    <BlockMath math="a^{\phi(m)} (r_1 r_2 \cdots r_{\phi(m)}) \equiv (r_1 r_2 \cdots r_{\phi(m)}) \pmod{m}" />
                    積 <InlineMath math="r_1 r_2 \cdots r_{\phi(m)}" /> もまた <InlineMath math="m" /> と互いに素（可逆元）であるため、両辺をこれで割ることができ、
                    <BlockMath math="a^{\phi(m)} \equiv 1 \pmod{m}" />
                    を得ます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">巨大なべき乗計算への応用</h2>

            <p>
                オイラーの定理は、計算結果を予測し、劇的に手計算を簡略化する実用的な側面を持っています。
            </p>

            <ContentBox type="example" title="Example 6.3-1 (指数の削減)">
                <p>
                    <InlineMath math="\gcd(5, 12) = 1" /> である。 <InlineMath math="m = 12" /> に対して <InlineMath math="\phi(12) = 4" /> なので、オイラーの定理より
                    <BlockMath math="5^4 \equiv 1 \pmod{12}" />
                    となっている。実際に <InlineMath math="5^4 = 625 = 52 \times 12 + 1 \equiv 1 \pmod{12}" /> が確認できる。
                </p>
            </ContentBox>

            <p>
                この性質を利用すると、さらに巨大な数の計算も一瞬で実行できます。
            </p>

            <ContentBox type="example" title="Example 6.3-2 (大きなべき乗の計算)">
                <p>
                    <InlineMath math="2^{100} \pmod{35}" /> を計算する。
                    <InlineMath math="\gcd(2, 35) = 1" /> であり、 <InlineMath math="\phi(35) = \phi(5)\phi(7) = 4 \times 6 = 24" /> である。
                    指数 <InlineMath math="100" /> を <InlineMath math="24" /> で割ると、 <InlineMath math="100 = 4 \times 24 + 4" /> となる。
                    オイラーの定理 <InlineMath math="2^{24} \equiv 1 \pmod{35}" /> を用いると、
                    <BlockMath math="2^{100} = 2^{24 \times 4 + 4} = (2^{24})^4 \times 2^4 \equiv 1^4 \times 16 = 16 \pmod{35}" />
                    と、巨大な数も簡単に計算できる。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>オイラーの定理</strong>： <InlineMath math="\gcd(a, m)=1" /> のとき <InlineMath math="a^{\phi(m)} \equiv 1 \pmod{m}" />。</li>
                    <li><strong>証明の本質</strong>： 既約剰余類の積における対称性（フェルマーの小定理の一般化）。</li>
                    <li><strong>計算の効率化</strong>： 指数部分は <InlineMath math="\phi(m)" /> で割った余りに削減できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
