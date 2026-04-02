import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SeparablePolynomialsAndExtensions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ形式的微分の概念を用いて、重根を持たない多項式や、そのような多項式によって生成される体の拡大を定義します。「分離的（separable）」という性質は、ガロア理論を綺麗に展開するための最も重要な条件の一つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分離多項式の定義と例</h2>

            <p>
                まずは多項式が分離的であることの定義から始めましょう。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (分離多項式)">
                <p>
                    体 <InlineMath math="F" /> 上の多項式 <InlineMath math="f \in F[x]" /> が<strong>分離多項式（separable polynomial）</strong>あるいは分離的であるとは、<InlineMath math="f" /> の代数閉包における根がすべて単根であること、すなわち<strong>重根を持たない</strong>ことをいう。
                </p>
                <p>
                    前節の定理より、これは <InlineMath math="\gcd(f, f') = 1" /> と同値である。また、<InlineMath math="f" /> が<strong>既約多項式</strong>である場合、<InlineMath math="f" /> が分離的であることは <InlineMath math="f' \neq 0" /> （微分がゼロ多項式にならない）ことと同値になる。
                </p>
            </ContentBox>

            <p>
                私たちが普段扱う有理数体 <InlineMath math="\mathbb{Q}" /> や実数体 <InlineMath math="\mathbb{R}" /> などの「標数 <InlineMath math="0" /> の体」では、既約多項式は自動的に分離的になります。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-1 (標数 0 では既約多項式は分離的)">
                <p>
                    <InlineMath math="\mathrm{char}(F) = 0" /> の体 <InlineMath math="F" /> において、<InlineMath math="f \in F[x]" /> が既約多項式ならば、<InlineMath math="f" /> は必ず分離的である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> を次数 <InlineMath math="n \geq 1" /> の既約多項式とし、<InlineMath math="f(x) = a_n x^n + \cdots + a_0" /> （<InlineMath math="a_n \neq 0" />）とする。
                </p>
                <p>
                    形式的微分を行うと、<InlineMath math="f'(x) = n a_n x^{n-1} + \cdots" /> となる。<InlineMath math="F" /> の標数が <InlineMath math="0" /> であるため、<InlineMath math="n \neq 0" /> であり、したがって最高次係数 <InlineMath math="n a_n" /> は <InlineMath math="0" /> にならない。ゆえに <InlineMath math="f'(x)" /> は <InlineMath math="0" /> ではない多項式であり、その次数は <InlineMath math="n-1" /> である。
                </p>
                <p>
                    <InlineMath math="f" /> が重根を持つと仮定すると、<InlineMath math="f" /> と <InlineMath math="f'" /> は共通因数 <InlineMath math="d(x)" />（次数1以上）を持つ。しかし、<InlineMath math="f" /> は既約多項式であるため、その約数は定数か <InlineMath math="f" /> 自身の定数倍に限られる。共通因数 <InlineMath math="d(x)" /> は <InlineMath math="f" /> を割り切るため <InlineMath math="d(x) = cf(x)" /> となるが、<InlineMath math="d(x)" /> は <InlineMath math="n-1" /> 次の <InlineMath math="f'" /> も割り切らなければならず、次数が矛盾する。
                </p>
                <p>
                    したがって、共通因数は存在せず（<InlineMath math="\gcd(f, f') = 1" />）、<InlineMath math="f" /> は分離的である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                一方で、標数 <InlineMath math="p > 0" /> の体では、既約であるにもかかわらず重根を持つ（非分離な）奇妙な多項式が存在し得ます。
            </p>

            <ContentBox type="example" title="Example 2.2-1 (標数 p での非分離な既約多項式の例)">
                <p>
                    標数 <InlineMath math="p" /> の有理関数体 <InlineMath math="F = \mathbb{F}_p(t)" />（<InlineMath math="t" /> は変数）上の多項式
                </p>
                <BlockMath math="f(x) = x^p - t \in F[x]" />
                <p>
                    を考える。アイゼンシュタインの判定法（素元を <InlineMath math="t" /> とする）により、この多項式は <InlineMath math="F[x]" /> において既約である。
                </p>
                <p>
                    しかし、形式的微分を計算すると <InlineMath math="f'(x) = p x^{p-1} = 0" /> となってしまう。
                </p>
                <p>
                    実際、<InlineMath math="t" /> の <InlineMath math="p" /> 乗根 <InlineMath math="\alpha = \sqrt[p]{t}" /> を含む拡大体において <InlineMath math="f(x)" /> を分解すると、標数 <InlineMath math="p" /> の性質（一年生の夢）より
                </p>
                <BlockMath math="f(x) = x^p - (\alpha)^p = (x - \alpha)^p" />
                <p>
                    となる。つまり、<InlineMath math="f(x)" /> は既約であるにもかかわらず、拡大体において <InlineMath math="\alpha" /> というただ1つの根を <InlineMath math="p" /> 重根として持つ非分離多項式である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分離拡大の定義</h2>

            <p>
                多項式の分離性を元にして、体拡大の分離性を定義します。
            </p>

            <ContentBox type="definition" title="Definition 2.2-2 (分離拡大)">
                <p>
                    代数拡大 <InlineMath math="K/F" /> が<strong>分離拡大（separable extension）</strong>であるとは、<InlineMath math="K" /> のすべての元 <InlineMath math="\alpha" /> に対して、その <InlineMath math="F" /> 上の最小多項式 <InlineMath math="\mathrm{min}_F(\alpha, x)" /> が分離多項式になることである。
                </p>
            </ContentBox>

            <p>
                分離拡大は、連鎖的に積み重ねても分離性が保たれるという非常に良い性質（推移性）を持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-2 (分離拡大の推移性)">
                <p>
                    体の拡大の塔 <InlineMath math="F \subset K \subset L" /> について、<InlineMath math="L/K" /> と <InlineMath math="K/F" /> がともに分離拡大であるならば、<InlineMath math="L/F" /> も分離拡大である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の <InlineMath math="\alpha \in L" /> をとる。<InlineMath math="\alpha" /> の <InlineMath math="K" /> 上の最小多項式を <InlineMath math="m_K(x) \in K[x]" /> とし、<InlineMath math="F" /> 上の最小多項式を <InlineMath math="m_F(x) \in F[x]" /> とする。
                </p>
                <p>
                    <InlineMath math="m_F(x)" /> は係数が <InlineMath math="F" /> に属し、当然 <InlineMath math="K" /> にも属する。かつ <InlineMath math="\alpha" /> を根に持つため、最小多項式の性質から <InlineMath math="m_K(x)" /> は <InlineMath math="m_F(x)" /> を <InlineMath math="K[x]" /> 内で割り切る。すなわち <InlineMath math="m_F(x) = m_K(x) q(x)" /> と書ける。
                </p>
                <p>
                    （厳密な証明には体のテンソル積や埋め込みの数を用いた議論が必要になるが、直感的には）<InlineMath math="\alpha" /> が <InlineMath math="m_K(x)" /> の分離的な（重根でない）根であり、係数体が分離的に拡大されていることから、<InlineMath math="m_F(x)" /> も <InlineMath math="\alpha" /> を重根として持たないことが導かれる。すべての元でこれが成立するため、<InlineMath math="L/F" /> は分離拡大となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-2 (分離拡大の例)">
                <p>
                    拡大 <InlineMath math="\mathbb{Q}(\sqrt{2})/\mathbb{Q}" /> は分離拡大である。実際、<InlineMath math="\sqrt{2}" /> の最小多項式 <InlineMath math="x^2 - 2" /> の根は <InlineMath math="\pm\sqrt{2}" /> であり重根を持たない。
                </p>
                <p>
                    より一般に、前述の Proposition 2.2-1 より、有理数体 <InlineMath math="\mathbb{Q}" /> や実数体 <InlineMath math="\mathbb{R}" /> などの標数 <InlineMath math="0" /> の体上の有限次拡大は、<strong>常に分離拡大</strong>となる。これは私たちが日常的に扱う方程式の理論が、非常に素直な構造を持っていることを保証している。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>代数閉包内で重根を持たない多項式を<strong>分離多項式</strong>という。</li>
                    <li>標数 <InlineMath math="0" /> の体では、すべての既約多項式は分離的である。</li>
                    <li>すべての元の最小多項式が分離的となる代数拡大を<strong>分離拡大</strong>という。</li>
                    <li>分離拡大の性質は中間体を経由して推移する（連鎖する）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
