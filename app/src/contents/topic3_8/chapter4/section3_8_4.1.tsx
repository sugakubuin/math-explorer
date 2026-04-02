import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NormalSubgroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                部分群の中でも、左剰余類と右剰余類が常に一致するという強い性質を持つものを「正規部分群」と呼びます。
                この概念は、後に剰余類の集合に群の構造（商群）を導入する際に決定的な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規部分群の定義と同値条件</h2>

            <ContentBox type="definition" title="Definition 4.1-1 (正規部分群)">
                <p>
                    群 <InlineMath math="G" /> の部分群 <InlineMath math="H" /> が、任意の <InlineMath math="g \in G" /> に対して
                    <BlockMath math="gH = Hg" />
                    を満たすとき、<InlineMath math="H" /> は <InlineMath math="G" /> の<b>正規部分群 (Normal subgroup)</b> であるといい、<InlineMath math="H \trianglelefteq G" /> と表記する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                正規部分群であることは、共役元を用いた判定法によっても確認できます。この同値条件は実際の計算で非常によく使われます。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1 (正規性の同値条件)">
                <p>
                    部分群 <InlineMath math="H \leq G" /> に対して、以下は同値である：
                </p>
                <ul className="list-decimal list-inside space-y-2 mt-4">
                    <li><InlineMath math="H \trianglelefteq G" /> である（<InlineMath math="gH = Hg" />）。</li>
                    <li>任意の <InlineMath math="g \in G" /> に対して <InlineMath math="gHg^{-1} = H" />。</li>
                    <li>任意の <InlineMath math="g \in G" /> に対して <InlineMath math="gHg^{-1} \subset H" />。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (i) <InlineMath math="\iff" /> (ii) は定義より明らか（<InlineMath math="gH=Hg" /> の右から <InlineMath math="g^{-1}" /> を掛ける）である。
                    (ii) <InlineMath math="\Rightarrow" /> (iii) も包含の定義から明らかである。以下、(iii) <InlineMath math="\Rightarrow" /> (ii) を示す。
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-2">
                    <li>
                        任意の <InlineMath math="g \in G" /> に対して <InlineMath math="gHg^{-1} \subset H" /> が成り立つと仮定する。
                    </li>
                    <li>
                        このとき、<InlineMath math="g" /> の代わりにその逆元 <InlineMath math="g^{-1}" /> を用いると、
                        <InlineMath math="g^{-1}H(g^{-1})^{-1} \subset H" />、すなわち <InlineMath math="g^{-1}Hg \subset H" /> が得られる。
                    </li>
                    <li>
                        この包含式の左から <InlineMath math="g" />、右から <InlineMath math="g^{-1}" /> を掛けると、
                        <InlineMath math="g(g^{-1}Hg)g^{-1} \subset gHg^{-1}" /> より <InlineMath math="H \subset gHg^{-1}" /> となる。
                    </li>
                    <li>
                        以上より <InlineMath math="gHg^{-1} = H" /> が示された。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規部分群の例と非例</h2>

            <p className="leading-relaxed">
                どのような群が正規部分群を持つのか、あるいは持たないのかについて確認しましょう。
            </p>

            <ContentBox type="example" title="Example 4.1-1 (正規部分群の代表例)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>アーベル群</b>：<br />
                        交換法則 <InlineMath math="gh = hg" /> が常に成り立つため、すべての部分群は正規部分群である。
                    </li>
                    <li>
                        <b>交代群 <InlineMath math="A_n \subset S_n" /></b>：<br />
                        指数が 2 であるため（§3.4 参照）、常に正規部分群となる。
                    </li>
                    <li>
                        <b>中心 <InlineMath math="Z(G)" /></b>：<br />
                        群のすべての元と可換な元の集合 <InlineMath math="Z(G) = \{ z \in G \mid zg = gz \text{ for all } g \in G \}" /> は常に正規部分群である。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                一方、非可換群では、左右の剰余類が一致しない（＝正規でない）部分群が頻繁に出現します。
            </p>

            <ContentBox type="example" title="Example 4.1-2 (正規部分群でない例)">
                <p>
                    3次対称群 <InlineMath math="S_3" /> において、部分群 <InlineMath math="H = \{e, (12)\}" /> を考える。
                    このとき、<InlineMath math="g = (13)" /> をとると：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>左剰余類：<InlineMath math="(13)H = \{(13), (123)\}" /></li>
                    <li>右剰余類：<InlineMath math="H(13) = \{(13), (132)\}" /></li>
                </ul>
                <p className="mt-2">
                    これらは一致しないため、<InlineMath math="H" /> は正規部分群ではない。
                    実際、共役をとると <InlineMath math="(13)(12)(13)^{-1} = (23) \notin H" /> となり、正規性の条件（Proposition 4.1-1）に反することがわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="準同型の核との関係">
                <p>
                    後の Chapter 5, 6 で詳しく学びますが、正規部分群には重要な「裏の顔」があります：
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>任意の準同型写像の<b>核 (Kernel)</b> は必ず正規部分群になる。</li>
                    <li>逆に、任意の正規部分群はある準同型写像の核として実現できる。</li>
                </ul>
                <p className="mt-2">
                    この事実は、正規部分群が「情報を適切に削ぎ落とす」ための境界線であることを示唆しています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>任意の元で左右の剰余類が一致する部分群を正規部分群（<InlineMath math="H \trianglelefteq G" />）という。</li>
                    <li>判定条件としては、共役 <InlineMath math="gHg^{-1} \subset H" /> が最もよく使われる。</li>
                    <li>アーベル群の部分群や指数 2 の部分群は常に正規である。</li>
                    <li>正規部分群は、次節で学ぶ「商群」を構成するための必須条件となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
