import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WellOrderedSets() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「どんな空でない部分集合を選んでも、必ず一番小さい元が見つかる」
                ――この直感的に当たり前のように思える性質を<strong>整列性</strong>と呼びます。
                自然数の世界が持っているこの強力な性質こそが、私たちが慣れ親しんでいる「数学的帰納法」を正当化する論理的な基盤となっています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">整列集合の定義</h2>

            <p>
                全順序集合の中でも、特に「最小元」の存在を保証するものを定義します。
            </p>

            <ContentBox type="definition" title="Definition 4.3-1 (整列集合)">
                <p>
                    全順序集合 <InlineMath math="(W, \leq)" /> が以下の条件を満たすとき、<InlineMath math="W" /> を<strong>整列集合（Well-ordered Set）</strong>という。
                </p>
                <ul className="list-disc list-inside mt-4 ml-4">
                    <li><strong>整列律：</strong> <InlineMath math="W" /> の任意の空でない部分集合 <InlineMath math="A \subset W" /> は、最小元を持つ。</li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                全順序集合であっても、整列集合であるとは限りません。
            </p>

            <ContentBox type="example" title="Example 4.3-1 (整列集合とそうでない例)">
                <ul className="list-disc list-inside space-y-4 mt-2 ml-4">
                    <li>
                        <strong>自然数集合 <InlineMath math="\mathbb{N} = \{0, 1, 2, \dots\}" /></strong>：<br />
                        どのように空でない部分集合を取っても、その中に最小の数が必ず存在します。よって<strong>整列集合</strong>です。
                    </li>
                    <li>
                        <strong>整数集合 <InlineMath math="\mathbb{Z}" /></strong>：<br />
                        <InlineMath math="\mathbb{Z}" /> 自身が空でない部分集合ですが、最小元を持ちません（いくらでも小さな負の数が存在するため）。よって整列集合ではありません。
                    </li>
                    <li>
                        <strong>正の実数集合 <InlineMath math="\mathbb{R}_{>0}" /></strong>：<br />
                        開区間 <InlineMath math="(0, 1)" /> には最小元が存在しないため、整列集合ではありません。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">数学的帰納法の正当化</h2>

            <p>
                私たちが高校数学などで使う「数学的帰納法」は、実は「自然数が整列集合である」という事実から自動的に導かれます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (数学的帰納法の原理)">
                <p>
                    自然数に関する命題 <InlineMath math="P(n)" /> について、以下が成り立つとする。
                </p>
                <ol className="list-decimal list-inside mt-4 ml-4 space-y-2">
                    <li><InlineMath math="P(0)" /> が真である。</li>
                    <li>任意の <InlineMath math="k" /> に対して、<InlineMath math="P(k)" /> が真ならば <InlineMath math="P(k+1)" /> も真である。</li>
                </ol>
                <p className="mt-4">このとき、すべての自然数 <InlineMath math="n" /> について <InlineMath math="P(n)" /> は真である。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (整列性による証明)">
                <p>
                    「命題が偽となる自然数が存在する」と仮定して、矛盾を導く（背理法）。
                </p>
                <p className="mt-4">
                    <InlineMath math="P(n)" /> が偽となる自然数全体の集合を <InlineMath math="F = \{ n \in \mathbb{N} \mid P(n) \text{ is false} \}" /> とする。<br />
                    仮定より <InlineMath math="F" /> は空でない。<InlineMath math="\mathbb{N}" /> の整列性より、<InlineMath math="F" /> には最小元 <InlineMath math="m" /> が存在する。
                </p>
                <p className="mt-4">
                    条件(1)より <InlineMath math="P(0)" /> は真なので、<InlineMath math="0 \notin F" />。よって <InlineMath math="m > 0" /> である。<br />
                    すると、<InlineMath math="m-1" /> という自然数が考えられる。
                    <InlineMath math="m" /> が <InlineMath math="F" /> の最小元であることから、<InlineMath math="m-1 \notin F" /> 、すなわち <InlineMath math="P(m-1)" /> は真である。
                </p>
                <p className="mt-4">
                    ここで条件(2)を用いると、<InlineMath math="P(m-1)" /> が真ならば <InlineMath math="P(m)" /> も真となるはずである。<br />
                    しかし、これは <InlineMath math="m \in F" />（<InlineMath math="P(m)" /> は偽）であることに矛盾する。<br />
                    したがって、偽となる自然数は存在せず、すべての <InlineMath math="n" /> について <InlineMath math="P(n)" /> は真である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="整列定理：すべての集合は並べられる？">
                <p>
                    自然数や有限集合は整列集合ですが、一般の実数集合などは通常の順序では整列集合ではありません。
                    しかし、Chapter 6 で学ぶ「選択公理」を認めれば、<strong>「どんな集合にも、それを整列集合にするような順序を（人工的に）定義できる」</strong>という驚くべき定理（整列定理）が証明されます。
                    これは私たちの直感を大きく超える結論であり、集合論の奥深さを象徴するテーマの一つです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>整列集合</strong>は、どんな空でない部分集合も最小元を持つような、特別な全順序集合である。</li>
                    <li>自然数集合 <InlineMath math="\mathbb{N}" /> は整列集合の代表例である。</li>
                    <li><strong>数学的帰納法の正当性</strong>は、自然数の整列性に依存している。</li>
                    <li>整列性の概念は、後に「超限帰納法」へと一般化され、無限集合の理論を支えることになる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
