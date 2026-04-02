import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SubgroupGenerations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                一つの元から生成される巡回群を超えて、複数の元や部分集合からどのように部分群が定義されるかを学びます。
                また、部分群どうしの包含関係が織りなす「格子」という構造についても触れます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分群族の共通部分と生成</h2>

            <p className="leading-relaxed">
                まず、複数の部分群が与えられたとき、それらの共通部分がどのような集合になるかを考えます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.4-1 (部分群族の共通部分)">
                <p>
                    <InlineMath math="\{H_\lambda\}_{\lambda \in \Lambda}" /> を群 <InlineMath math="G" /> の部分群の族とするとき、その共通部分
                    <BlockMath math="\bigcap_{\lambda \in \Lambda} H_\lambda" />
                    は再び <InlineMath math="G" /> の部分群となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="H = \bigcap H_\lambda" /> とおく。1条件判定法（Proposition 2.1-2）を用いて、<InlineMath math="H" /> が部分群であることを示す。
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <b>単位元の存在</b>：<br />
                        各 <InlineMath math="H_\lambda" /> は部分群であるため、すべての <InlineMath math="\lambda" /> に対して <InlineMath math="e \in H_\lambda" /> が成り立つ。
                        したがって、その共通部分である <InlineMath math="H" /> にも <InlineMath math="e" /> は含まれ、<InlineMath math="H \neq \emptyset" /> である。
                    </li>
                    <li>
                        <b>判定条件の確認</b>：<br />
                        <InlineMath math="a, b \in H" /> とする。共通部分の定義より、任意の <InlineMath math="\lambda" /> に対して <InlineMath math="a, b \in H_\lambda" /> である。
                        各 <InlineMath math="H_\lambda" /> は部分群であるから、判定法より <InlineMath math="ab^{-1} \in H_\lambda" /> がすべての <InlineMath math="\lambda" /> で成り立つ。
                        よって <InlineMath math="ab^{-1} \in \bigcap H_\lambda = H" /> である。
                    </li>
                </ul>
                <p className="mt-4">
                    以上より、<InlineMath math="H" /> は <InlineMath math="G" /> の部分群となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この性質を利用することで、任意の部分集合を含む「最小の」部分群を定義することができます。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (生成された部分群)">
                <p>
                    群 <InlineMath math="G" /> の部分集合 <InlineMath math="S \subset G" /> に対し、<InlineMath math="S" /> を含む <InlineMath math="G" /> のすべての部分群の共通部分
                    <BlockMath math="\langle S \rangle = \bigcap \{ H \leq G \mid S \subset H \}" />
                    を、<b><InlineMath math="S" /> により生成された部分群</b>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                直感的には、<InlineMath math="S" /> の元とその逆元を有限回組み合わせて得られるすべての元の集合に一致します。
            </p>

            <ContentBox type="example" title="Example 2.4-1 (生成の例)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>対称群 S_3</b>：<InlineMath math="\langle (12), (123) \rangle = S_3" /> となる。互換と巡回置換があれば、すべての置換を生成できる。
                    </li>
                    <li>
                        <b>対称群 S_4</b>：<InlineMath math="\langle (12)(34), (13)(24) \rangle = \{ e, (12)(34), (13)(24), (14)(23) \}" /> であり、これはクラインの 4 群に同型な部分群となる。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分群の格子と ℤ の部分群</h2>

            <p className="leading-relaxed">
                群のすべての部分群を、その包含関係に沿って並べたものを「部分群の格子」と呼びます。
            </p>

            <ContentBox type="example" title="Example 2.4-2 (S_3 の部分群格子)">
                <p>
                    3次対称群 <InlineMath math="S_3" />（位数 6）には合計 6 つの部分群が存在する：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li><InlineMath math="\{e\}" /> （位数 1）</li>
                    <li><InlineMath math="\langle (12) \rangle, \langle (13) \rangle, \langle (23) \rangle" /> （位数 2 の巡回群）</li>
                    <li><InlineMath math="A_3 = \langle (123) \rangle = \{e, (123), (132)\}" /> （位数 3 の巡回群）</li>
                    <li><InlineMath math="S_3" /> （位数 6）</li>
                </ul>
                <p className="mt-4 leading-relaxed">
                    これらの包含関係を図示すると、格子状の構造が見えてきます。
                    例えば、位数 2 の各部分群と位数 3 の部分群の共通部分は単位元のみであり、それらを合わせると群全体 <InlineMath math="S_3" /> が生成されます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                最後に、最も基礎的な巡回群である <InlineMath math="\mathbb{Z}" /> の部分群がどのような形をしているかを完全に決定しましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-2 (ℤ の部分群の完全記述)">
                <p>
                    整数加法群 <InlineMath math="(\mathbb{Z}, +)" /> の部分群は、すべてある整数 <InlineMath math="n \geq 0" /> を用いて
                    <InlineMath math="n\mathbb{Z} = \{ nk \mid k \in \mathbb{Z} \}" />
                    の形に限られる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="H \leq \mathbb{Z}" /> とする。
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <b>ケース1：<InlineMath math="H = \{0\}" /> のとき</b><br />
                        このときは <InlineMath math="n = 0" /> とすれば、<InlineMath math="H = 0\mathbb{Z}" /> となり主張通りである。
                    </li>
                    <li>
                        <b>ケース2：<InlineMath math="H \neq \{0\}" /> のとき</b><br />
                        <InlineMath math="H" /> には正の整数が含まれる（<InlineMath math="m \in H" /> なら逆元 <InlineMath math="-m \in H" /> であるため）。
                        そこで、<InlineMath math="H" /> に含まれる<b>最小の正整数</b>を <InlineMath math="n" /> とおく。
                    </li>
                </ul>
                <p className="mt-4">
                    このとき <InlineMath math="H = n\mathbb{Z}" /> であることを、以下の包含関係の両面から示す。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-2 text-sm ml-4">
                    <li>
                        <b><InlineMath math="n\mathbb{Z} \subset H" /> の証明</b>：<br />
                        <InlineMath math="n \in H" /> より、群の閉性からその整数倍（累乗に相当）はすべて <InlineMath math="H" /> に含まれる。
                    </li>
                    <li>
                        <b><InlineMath math="H \subset n\mathbb{Z}" /> の証明</b>：<br />
                        任意の <InlineMath math="m \in H" /> をとる。<InlineMath math="m" /> を <InlineMath math="n" /> で割り、<InlineMath math="m = nq + r" /> (<InlineMath math="0 \leq r < n" />) とする。
                        <BlockMath math="r = m - nq" />
                        とおくと、<InlineMath math="m, n \in H" /> より右辺は <InlineMath math="H" /> に属し、ゆえに <InlineMath math="r \in H" /> である。
                        もし <InlineMath math="r > 0" /> ならば、これは「<InlineMath math="n" /> が最小の正整数である」という仮定に矛盾する。
                        したがって <InlineMath math="r = 0" /> でなければならず、<InlineMath math="m = nq \in n\mathbb{Z}" /> となる。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>複数の部分群の共通部分は、必ず再び部分群となる。</li>
                    <li>任意の部分集合 <InlineMath math="S" /> を含む「最小の部分群」を定義でき、これを <InlineMath math="S" /> が生成する部分群という。</li>
                    <li>部分群の包含関係は「格子」と呼ばれる構造をなし、位数や生成の様子を視覚化できる。</li>
                    <li><InlineMath math="\mathbb{Z}" /> の部分群はすべて <InlineMath math="n\mathbb{Z}" /> の形であり、これ以上他の形は存在しない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
