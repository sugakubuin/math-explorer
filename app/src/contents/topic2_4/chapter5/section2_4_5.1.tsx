import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CardinalityDefinitions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数学の歴史において、ゲオルク・カントールがもたらした最大の衝撃の一つは、「無限には異なる大きさ（階層）がある」という発見でした。
                この章では、有限の数の概念を超えて、集合の「大きさ」そのものを数学の対象とする<strong>濃度の理論（Theory of Cardinality）</strong>を学びます。
                まずは、2つの集合が「同じ大きさである」とはどういうことか、その厳密な定義から始めましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">集合の対等（等濃）</h2>

            <p>
                2つの集合の元を数え上げることなく、それらが「同じ数」だけ元を持っていることを確認するには、どうすればよいでしょうか。
                その答えは、「1対1のペアが過不足なく作れるか」という点にあります。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (集合の対等)">
                <p>
                    2つの集合 <InlineMath math="A, B" /> の間に<strong>全単射</strong> <InlineMath math="f \colon A \to B" /> が存在するとき、
                    <InlineMath math="A" /> と <InlineMath math="B" /> は<strong>対等（Equipollent / Equinumerous）</strong>である、または<strong>等濃</strong>であるといい、
                    <InlineMath math="A \sim B" /> または <InlineMath math="A \approx B" /> と表す。
                </p>
            </ContentBox>

            <p className="mt-4">
                「対等である」という関係は、すべての集合の集まりにおいて<strong>同値関係</strong>の条件を満たします。
                この同値関係による「抽象化された集合のサイズ」が<strong>濃度</strong>です。
            </p>

            <ContentBox type="definition" title="Definition 5.1-2 (濃度)">
                <p>
                    集合 <InlineMath math="A" /> に対して、その「大きさ」を表す記号 <InlineMath math="|A|" /> または <InlineMath math="\text{card}(A)" /> を対応させる。
                    これらを<strong>濃度（Cardinality / Cardinal Number）</strong>という。
                    2つの集合 <InlineMath math="A, B" /> について：
                    <BlockMath math="|A| = |B| \iff A \sim B" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">濃度の演算</h2>

            <p>
                通常の数と同じように、濃度同士にも足し算や掛け算を定義することができます。これらは集合の演算（和集合や直積）をベースに定義されます。
            </p>

            <ContentBox type="definition" title="Definition 5.1-3 (濃度の演算)">
                <p>
                    <InlineMath math="\mathfrak{a} = |A|, \mathfrak{b} = |B|" /> とし、<InlineMath math="A \cap B = \emptyset" /> と仮定する。このとき、以下の演算を定義する。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>和：</strong> <InlineMath math="\mathfrak{a} + \mathfrak{b} = |A \cup B|" />
                    </li>
                    <li>
                        <strong>積：</strong> <InlineMath math="\mathfrak{a} \cdot \mathfrak{b} = |A \times B|" />
                    </li>
                    <li>
                        <strong>べき（指数）：</strong> <InlineMath math="\mathfrak{a}^{\mathfrak{b}} = |A^B|" />
                        （ここで <InlineMath math="A^B" /> は <InlineMath math="B" /> から <InlineMath math="A" /> への写像全体の集合）
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="無限集合の奇妙な性質：デデキント無限">
                <p>
                    有限集合の場合、「自分自身の真部分集合と対等になる」ことは絶対にありません。
                    しかし、無限集合ではこれが起こり得ます。例えば、自然数全体の集合 <InlineMath math="\mathbb{N}" /> と、偶数全体の集合 <InlineMath math="2\mathbb{N}" /> は、
                    写像 <InlineMath math="n \mapsto 2n" /> によって全単射が作れるため、対等です。
                </p>
                <p className="mt-4">
                    リヒャルト・デデキントは、この性質を逆手に取って、<strong>「自分自身の真部分集合と対等な部分集合を持つ集合」</strong>を<strong>無限集合</strong>と定義しました。
                    無限の世界では、「全体は部分よりも大きい」という常識が必ずしも通用しなくなるのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>2つの集合が<strong>対等</strong>であるとは、その間に全単射が存在することをいう。</li>
                    <li><strong>濃度</strong>は、対等という同値関係によって集合を分類したときの「サイズ」の概念である。</li>
                    <li>濃度の和・積・べきは、集合の合併・直積・写像集合を用いて自然に定義される。</li>
                    <li>無限集合は、自分自身の真部分集合と対等になりうるという、有限集合にはない特徴を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
