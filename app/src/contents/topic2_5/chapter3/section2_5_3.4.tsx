import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InitialFinalTopology() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                位相空間を新しく作る際、「特定の写像を連続にしたい」という動機から位相を定めることがよくあります。
                必要最低限の開集合だけを入れる「初期位相」と、許される限りの開集合を入れる「終位相」は、現代数学における空間構成の双対的な核となる概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">初期位相</h2>

            <p>
                写像を「連続にするために最小限必要な位相」を考えます。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (初期位相)">
                <p>
                    集合 <InlineMath math="X" /> と、位相空間への写像の族 <InlineMath math="\{f_\alpha: X \to Y_\alpha\}_{\alpha \in \Lambda}" /> が与えられたとき、
                    すべての <InlineMath math="f_\alpha" /> を連続にするような <InlineMath math="X" /> 上の<strong>最粗（最小）の位相</strong>を、
                    この写像族による<strong>初期位相 (Initial Topology)</strong> と呼ぶ。
                </p>
                <BlockMath math="\text{準開基: } \mathcal{S} = \{ f_\alpha^{-1}(U_\alpha) \mid \alpha \in \Lambda, U_\alpha \in \mathcal{O}_{Y_\alpha} \}" />
            </ContentBox>

            <p className="mt-4">
                初期位相は、各写像が「情報を引き出す」際に、行き先の開集合をそのまま元に戻したものを開集合として認めることで構成されます。
            </p>

            <ContentBox type="example" title="Example 3.4-1 (初期位相の例)">
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><strong>相対位相</strong>: 包含写像 <InlineMath math="i: A \hookrightarrow X" /> を連続にする最小の位相。</li>
                    <li><strong>積位相</strong>: 各成分への射影 <InlineMath math="p_\alpha: \prod X_\alpha \to X_\alpha" /> をすべて連続にする最小の位相。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">終位相</h2>

            <p>
                初期位相とは逆に、「写像が連続性を壊さない範囲で最大限に大きな位相」を考えます。
            </p>

            <ContentBox type="definition" title="Definition 3.4-2 (終位相)">
                <p>
                    集合 <InlineMath math="Y" /> と、位相空間からの写像の族 <InlineMath math="\{f_\alpha: X_\alpha \to Y\}_{\alpha \in \Lambda}" /> が与えられたとき、
                    すべての <InlineMath math="f_\alpha" /> を連続にするような <InlineMath math="Y" /> 上の<strong>最細（最大）の位相</strong>を、
                    この写像族による<strong>終位相 (Final Topology)</strong> と呼ぶ。
                </p>
                <BlockMath math="V \in \mathcal{O}_Y \iff \forall \alpha \in \Lambda, f_\alpha^{-1}(V) \in \mathcal{O}_{X_\alpha}" />
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-2 (終位相の例)">
                <p>
                    <strong>商位相</strong>は、商写像 <InlineMath math="p: X \to X/\sim" /> を連続にするための最強の位相であり、典型的な終位相です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">普遍性</h2>

            <p>
                初期位相・終位相の真の価値は、他の写像の連続性を判定する際の「基準」となることにあります。
            </p>

            <ContentBox type="remark" title="普遍性による判定">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="X" /> に初期位相が入っているとき、写像 <InlineMath math="g: Z \to X" /> が連続であることと、
                        すべての合成 <InlineMath math="f_\alpha \circ g: Z \to Y_\alpha" /> が連続であることは同値です。</li>
                    <li><InlineMath math="Y" /> に終位相が入っているとき、写像 <InlineMath math="h: Y \to Z" /> が連続であることと、
                        すべての合成 <InlineMath math="h \circ f_\alpha: X_\alpha \to Z" /> が連続であることは同値です。</li>
                </ul>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>初期位相</strong>は、与えられた写像族を連続にする「最も経済的な（開集合の少ない）」位相である。</li>
                    <li><strong>終位相</strong>は、与えられた写像族が連続であり続けられる「最も豊かな（開集合の多い）」位相である。</li>
                    <li>相対位相や積位相は初期位相、商位相は終位相の重要な具体例である。</li>
                    <li>これらは普遍性を通じて、複雑な空間上の写像の連続性を簡潔に判定する手段を提供する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
