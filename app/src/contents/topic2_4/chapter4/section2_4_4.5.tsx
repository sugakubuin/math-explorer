import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TransfiniteInductionAndOrdinals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数学的帰納法は、無限にある自然数すべてに対して命題を証明できる強力な道具です。
                しかし、数学の世界には「自然数すべてを辿った、その先」を考えなければならない場面があります。
                このセクションでは、数学的帰納法をさらに広大な「超限」の領域まで拡張した<strong>超限帰納法</strong>と、そこでの数の尺度となる<strong>順序数</strong>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">順序数の概念</h2>

            <p>
                §4.4 で学んだ「自分の前の元すべてを元に持つ集合」という自然数の構成法を、無限の先まで続けてみましょう。
            </p>

            <ContentBox type="definition" title="Definition 4.5-1 (順序数)">
                <p>
                    集合 <InlineMath math="\alpha" /> が<strong>順序数（Ordinal Number）</strong>であるとは、以下の2条件を満たすことをいう。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="\alpha" /> は推移的集合である（<InlineMath math="x \in y \in \alpha \implies x \in \alpha" />）。</li>
                    <li><InlineMath math="\alpha" /> は属関係 <InlineMath math="\in" /> によって整列されている。</li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                すべての自然数 <InlineMath math="0, 1, 2, \dots" /> は順序数です。そして、これらすべての自然数を元として集めた集合
                <BlockMath math="\omega = \{0, 1, 2, \dots\}" />
                もまた順序数となります。これが「最初の無限順序数」です。
            </p>

            <ContentBox type="remark" title="無限の先のカウントアップ">
                <p>
                    <InlineMath math="\omega" /> が得られたら、さらにその後者 <InlineMath math="s(\omega) = \omega \cup \{\omega\}" /> を考えることができます。これを <InlineMath math="\omega + 1" /> と書きます。
                    同様に <InlineMath math="\omega + 2, \omega + 3, \dots" /> と続き、それらをすべて集めた先には <InlineMath math="\omega \cdot 2" />（または <InlineMath math="\omega + \omega" />）が現れます。
                    このように、順序数は「数の並び順」そのものを一般化した概念であり、無限にも段階的な「先」があることを教えてくれます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">超限帰納法の原理</h2>

            <p>
                整列集合であれば、自然数に限定せずとも帰納法を行うことができます。これが超限帰納法です。
            </p>

            <ContentBox type="theorem" title="Theorem 4.5-1 (超限帰納法の原理)">
                <p>
                    整列集合 <InlineMath math="(W, \leq)" /> 上の命題 <InlineMath math="P(x)" /> について、以下が成り立つとする。
                </p>
                <ul className="list-disc list-inside mt-4 ml-4">
                    <li>任意の <InlineMath math="a \in W" /> に対して、 「すべての <InlineMath math="x < a" /> について <InlineMath math="P(x)" /> が真」ならば <InlineMath math="P(a)" /> も真である。</li>
                </ul>
                <p className="mt-4">このとき、すべての <InlineMath math="x \in W" /> に対して <InlineMath math="P(x)" /> は真である。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    §4.3 の数学的帰納法の証明と全く同様の手順で行えます。
                </p>
                <p className="mt-4">
                    <InlineMath math="P(x)" /> が偽となる元の集合を <InlineMath math="F" /> とする。<InlineMath math="F" /> が空でないと仮定すると、<InlineMath math="W" /> の整列性により <InlineMath math="F" /> には最小元 <InlineMath math="m" /> が存在する。<br />
                    <InlineMath math="m" /> は最小元なので、すべての <InlineMath math="x < m" /> については <InlineMath math="x \notin F" /> 、すなわち <InlineMath math="P(x)" /> は真である。<br />
                    定理の条件より、これから <InlineMath math="P(m)" /> が真であることが導かれるが、これは <InlineMath math="m \in F" /> であることに矛盾する。<br />
                    よって <InlineMath math="F" /> は空集合であり、すべての <InlineMath math="x"  /> について真となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                超限帰納法は、通常の帰納法のように「<InlineMath math="0" /> のとき」と「<InlineMath math="n" /> のとき」を分ける必要がありません（<InlineMath math="a" /> が最小元のときは「すべての <InlineMath math="x < a" />」の条件が空なので、自動的にベースステップに対応します）。
                ただし、無限順序数の場合は「直前の数がある場合（後者順序数）」と「直前の数がない場合（極限順序数）」で証明のステップを分けるのが一般的です。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>順序数</strong>は、整列集合のタイプを抽象化したもので、自然数を無限の先まで拡張したものである。</li>
                    <li><strong>超限帰納法</strong>は、任意の整列集合の上で実行可能な帰納法であり、自然数を超えた無限の範囲を扱うための必須ツールである。</li>
                    <li>超限帰納法の成立は、その土台となる集合が「最小元を持つ（整列している）」という一点に支えられている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
