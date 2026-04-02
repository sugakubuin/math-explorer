import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function QuotientTopology() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「空間の一部を糊付けしてくっつける」という直感的な操作を、位相空間の枠組みで厳密に定式化したものが<strong>商空間</strong>です。
                線分の両端をくっつけて円にしたり、正方形の向かい合う辺を貼り合わせてトーラス（ドーナツの表面）を作ったりする操作は、すべてこの理論で説明されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">商位相の定義</h2>

            <p>
                同値関係による「同一視」から自然に誘導される位相です。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 (商位相と商空間)">
                <p>
                    位相空間 <InlineMath math="X" /> と、その上の同値関係 <InlineMath math="\sim" /> を考える。
                    商集合 <InlineMath math="X/\sim" /> 上の<strong>商位相 (Quotient Topology)</strong> とは、
                    自然な射影 <InlineMath math="\pi: X \to X/\sim" /> を連続にする最大の位相であり、
                    開集合は次のように定義される：
                    <BlockMath math="\mathcal{O}_{X/\sim} = \{ U \subset X/\sim \mid \pi^{-1}(U) \in \mathcal{O}_X \}" />
                    対 <InlineMath math="(X/\sim, \mathcal{O}_{X/\sim})" /> を<strong>商空間 (Quotient Space)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-1 (最もシンプルな商空間)">
                <p>
                    離散空間 <InlineMath math="X = \{a, b\}" /> において、<InlineMath math="a \sim b" /> という同値関係を入れる。
                    このとき商集合は1点集合 <InlineMath math="X/\sim = \{ [a] \}" /> となる。
                    商位相の定義より、<InlineMath math="\{[a]\}" /> が開集合であるためには、その逆像 <InlineMath math="\pi^{-1}(\{[a]\}) = \{a, b\} = X" /> が <InlineMath math="X" /> の開集合である必要がある。
                    これは常に成り立つため、商空間は（当然ながら）1点集合の唯一の位相を持つ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="逆像による「安全性」の判定">
                <p>
                    商空間で集合 <InlineMath math="V" /> が「開いている」とみなすための条件は、
                    「糊付けされる前の世界（<InlineMath math="X" />）」に戻したときにも開集合であること、という極めてシンプルなものです。
                    これにより、<InlineMath math="X" /> における連続的なつながりを保ったまま「貼り合わせ」が可能になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">商写像の普遍性</h2>

            <p>
                商空間からの写像が連続であるかどうかは、糊付け前の空間からの写像を見るだけで決定できます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-1 (商写像の普遍性)">
                <p>
                    <InlineMath math="p: X \to Y" /> を商写像とする。
                    写像 <InlineMath math="f: Y \to Z" /> が連続であるための必要十分条件は、
                    合成写像 <InlineMath math="f \circ p: X \to Z" /> が連続であることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (<InlineMath math="\Longrightarrow" />) 連続写像の合成は連続であるため、明らかである。
                </p>
                <p className="mt-2">
                    (<InlineMath math="\Longleftarrow" />) <InlineMath math="f \circ p" /> が連続であるとする。
                    <InlineMath math="Z" /> の任意の開集合 <InlineMath math="W" /> に対し、
                    <InlineMath math="(f \circ p)^{-1}(W) = p^{-1}(f^{-1}(W))" /> は <InlineMath math="X" /> の開集合である。
                    商位相の定義より、これは <InlineMath math="f^{-1}(W)" /> が <InlineMath math="Y" /> の開集合であることを意味する。
                    したがって <InlineMath math="f" /> は連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>商位相</strong>は、同値類を一つの点とみなしたときに、射影が連続になる最も強い位相である。</li>
                    <li>糊付けされた空間の上での議論を、元の空間の上での議論に引き戻して考えることができる（普遍性）。</li>
                    <li>幾何学的な「貼り合わせ」を代数学的に記述する強力な道具である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
