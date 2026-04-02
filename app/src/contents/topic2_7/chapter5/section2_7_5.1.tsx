import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FermatsLittleTheoremStatementAndProof() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数論の歴史の中で、ピエール・ド・フェルマーの名前は特別な響きを持ちます。
                彼が遺した多くの定理の中でも、<strong>フェルマーの小定理 (Fermat's Little Theorem)</strong> は、合同式の計算、素数判定、そして現代の暗号理論を結ぶ極めて重要な架け橋となっています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の主張</h2>

            <p>
                この定理は、素数を法とするべき乗計算において、非常に単純で強力な規則性が現れることを教えてくれます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.1-1 (フェルマーの小定理)">
                <p>
                    <InlineMath math="p" /> を素数、 <InlineMath math="a" /> を <InlineMath math="p" /> で割り切れない（ <InlineMath math="\gcd(a, p) = 1" /> ）整数とするとき、次が成り立つ。
                    <BlockMath math="a^{p-1} \equiv 1 \pmod{p}" />
                    また、すべての整数 <InlineMath math="a" /> に対して、同値な形として次が成り立つ。
                    <BlockMath math="a^p \equiv a \pmod{p}" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1 (具体的な数値での確認)">
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <InlineMath math="a = 3, p = 7" /> のとき：
                        <InlineMath math="3^6 = 729" /> 。これを 7 で割ると、 <InlineMath math="729 = 7 \times 104 + 1" /> なので、確かに <InlineMath math="3^6 \equiv 1 \pmod{7}" /> である。
                    </li>
                    <li>
                        <InlineMath math="a = 2, p = 5" /> のとき：
                        <InlineMath math="2^4 = 16 \equiv 1 \pmod{5}" /> 。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の証明</h2>

            <p>
                この定理には複数の証明方法があります。ここでは、代数的な視点と、多項式展開による視点の二通りを紹介します。
            </p>

            <ContentBox type="proof" title="証明 1：剰余類の置換による方法">
                <p>
                    <InlineMath math="\{1, 2, \dots, p-1\}" /> という mod <InlineMath math="p" /> の 0 以外の剰余類の集合に、それぞれ <InlineMath math="a" /> を掛けた集合
                    <BlockMath math="S = \{1a, 2a, 3a, \dots, (p-1)a\}" />
                    を考える。 <InlineMath math="\gcd(a, p) = 1" /> なので、これらはすべて mod <InlineMath math="p" /> で互いに異なり、かつ 0 ではない。
                    つまり、 <InlineMath math="S" /> の元は元の剰余類集合の「並べ替え」に過ぎない。これらの積をとると、
                    <BlockMath math="1a \cdot 2a \cdots (p-1)a \equiv 1 \cdot 2 \cdots (p-1) \pmod{p}" />
                    <BlockMath math="(p-1)! \cdot a^{p-1} \equiv (p-1)! \pmod{p}" />
                    <InlineMath math="\gcd((p-1)!, p) = 1" /> であるから、両辺を <InlineMath math="(p-1)!" /> で割ることができ（Prop 4.1-1）、
                    <InlineMath math="a^{p-1} \equiv 1 \pmod{p}" /> を得る。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="証明 2：数学的帰納法と二項定理による方法">
                <p>
                    <InlineMath math="a^p \equiv a \pmod{p}" /> を示す。 <InlineMath math="p" /> が素数のとき、二項係数について次が成り立つ：
                    <BlockMath math="\binom{p}{k} = \frac{p!}{k!(p-k)!} \equiv 0 \pmod{p} \quad (1 \leq k \leq p-1)" />
                    これを利用して、 <InlineMath math="(a+1)^p" /> を展開すると、
                    <BlockMath math="\begin{aligned} (a+1)^p &= a^p + \binom{p}{1}a^{p-1} + \dots + \binom{p}{p-1}a + 1 \\&\equiv a^p + 1 \pmod{p} \end{aligned}" />
                    となる。 <InlineMath math="a=1" /> のとき <InlineMath math="1^p \equiv 1" /> は自明であり、 <InlineMath math="a" /> で成り立つと仮定すれば <InlineMath math="a+1" /> でも成り立つことがわかる。
                    よってすべての正の整数 <InlineMath math="a" /> について <InlineMath math="a^p \equiv a \pmod{p}" /> が示された。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>定理の形</strong>： 素数 <InlineMath math="p" /> を法とするとき、<InlineMath math="a^{p-1} \equiv 1" /> （ <InlineMath math="\gcd(a,p)=1" /> ） または <InlineMath math="a^p \equiv a" />。</li>
                    <li><strong>証明のアイデア</strong>： 剰余類の対称性（積の比較）や、素数の性質による二項展開の簡略化。</li>
                    <li><strong>役割</strong>： 面倒なべき乗の計算を劇的に簡略化する強力なツールである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
