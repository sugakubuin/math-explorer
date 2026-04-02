import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CardinalsAndAlephNumbers() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                順序数は「順番」を表すものでした（1番目、2番目、無限番目…）。これに対し、「要素の個数（大きさ）」を表す概念が<strong>基数（cardinal number）</strong>です。
                無限集合の大きさを比較するこの考え方は、ゲオルク・カントールによって創始されました。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">基数の定義とカントールの定理</h2>

            <ContentBox
                type="definition"
                title="Definition 8.3-1 (基数と濃度)"
            >
                <p>
                    2つの集合 <InlineMath math="A, B" /> の間に<strong>全単射（bijection）が存在するとき、両者は「濃度（大きさが等しい）」</strong>といい、<InlineMath math="|A| = |B|" /> と表す。
                </p>
                <p>
                    （ZFC公理系の下で）集合 <InlineMath math="A" /> の<strong>基数（cardinality）<InlineMath math="|A|" /></strong> とは、<InlineMath math="A" /> と全単射が存在するようなフォン・ノイマン順序数の中で<strong>最小の順序数</strong>のことと定義される。
                    基数となるような順序数自身を単に「基数」と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                無限の世界には、自然数と同じ「可算無限」と、実数のような「非可算無限」の区別があることは Topic 2-4 で触れました。カントールはさらに「どんな無限にも、より大きな無限が存在する」ことを証明しました。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 8.3-1 (カントールの定理 / Cantor's Theorem)"
            >
                <p>
                    任意の集合 <InlineMath math="A" /> について、そのべき集合 <InlineMath math="\mathcal{P}(A)" />（<InlineMath math="A" /> の部分集合全体の集合）の基数は、<InlineMath math="A" /> 自身の基数よりも真に大きい。
                    <BlockMath math="|A| < |\mathcal{P}(A)|" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    まず、<InlineMath math="A" /> から <InlineMath math="\mathcal{P}(A)" /> への単射として <InlineMath math="a \mapsto \{a\}" /> が存在するため、<InlineMath math="|A| \leq |\mathcal{P}(A)|" /> である。
                </p>
                <p>
                    次に、<InlineMath math="|A| = |\mathcal{P}(A)|" /> にならないこと（全単射が存在しないこと）を背理法で示す。
                    仮に全射 <InlineMath math="f : A \to \mathcal{P}(A)" /> が存在したとする。カントールの対角線論法を用いて、以下のような <InlineMath math="A" /> の部分集合 <InlineMath math="D" /> を定義する。
                    <BlockMath math="D = \{a \in A \mid a \notin f(a)\}" />
                </p>
                <p>
                    <InlineMath math="D" /> は <InlineMath math="A" /> の部分集合であるため、<InlineMath math="D \in \mathcal{P}(A)" /> である。<InlineMath math="f" /> は全射であるから、ある元 <InlineMath math="x \in A" /> が存在して <InlineMath math="f(x) = D" /> となるはずである。
                    この元 <InlineMath math="x" /> について、<InlineMath math="x \in D" /> かどうかを問う。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>もし <InlineMath math="x \in D" /> ならば、<InlineMath math="D" /> の定義より <InlineMath math="x \notin f(x) = D" /> となり矛盾。</li>
                    <li>もし <InlineMath math="x \notin D" /> ならば、<InlineMath math="x \notin f(x)" /> であるから <InlineMath math="D" /> の定義条件を満たし、<InlineMath math="x \in D" /> となり矛盾。</li>
                </ul>
                <p>
                    どちらにしても矛盾するため、全射 <InlineMath math="f" /> は存在しない。ゆえに <InlineMath math="|A| < |\mathcal{P}(A)|" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.3-1 (基数の大きさの比較)"
            >
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="|\mathbb{N}| = \aleph_0" /> （可算無限。最小の無限基数）</li>
                    <li><InlineMath math="|\mathbb{R}| = |\mathcal{P}(\mathbb{N})| = 2^{\aleph_0}" /> （連続体濃度。実数の数は自然数の部分集合の数と等しい）</li>
                    <li>カントールの定理より、<InlineMath math="\aleph_0 < 2^{\aleph_0} < 2^{2^{\aleph_0}} < \cdots" /> となり、無限の大きさには果てがないことがわかる。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">アレフ数の体系</h2>

            <p className="leading-relaxed">
                カントールの定理で「より大きな無限」が存在することは分かりましたが、では「無限の大きさを順番に並べたカタログ」はどうなるでしょうか。これを表すのが<strong>アレフ数（Aleph numbers, <InlineMath math="\aleph" />）</strong>です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 8.3-2 (アレフ数)"
            >
                <p>
                    すべての無限基数は、順序数 <InlineMath math="\alpha" /> を添え字とする記号 <strong><InlineMath math="\aleph_\alpha" /></strong> によって小さい順に番号付けられる（超限再帰による定義）。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong><InlineMath math="\aleph_0" />（アレフ・ゼロ）：</strong> 最小の無限基数（自然数の濃度 <InlineMath math="|\mathbb{N}|" />）。順序数としては <InlineMath math="\omega" /> と等しい。</li>
                    <li><strong><InlineMath math="\aleph_{\alpha+1}" />：</strong> <InlineMath math="\aleph_\alpha" /> より真に大きい基数の中で<strong>最小の基数</strong>。</li>
                    <li><strong><InlineMath math="\aleph_\lambda" />（極限）：</strong> <InlineMath math="\lambda" /> が極限順序数のときは、それ以前のすべてのアレフ数の上限 <InlineMath math="\sup_{\alpha < \lambda} \aleph_\alpha" />。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 8.3-2 (アレフ数と整列定理)"
            >
                <p>
                    「<InlineMath math="\aleph_\alpha" /> の次に大きい基数 <InlineMath math="\aleph_{\alpha+1}" /> が必ず存在する」こと、および「すべての集合の基数がいずれかのアレフ数になる」ことは、<strong>選択公理（AC）を仮定して（整列定理を用いて）初めて保証される</strong>。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概念的解説)"
            >
                <p>
                    ある集合 <InlineMath math="X" /> が与えられたとき、その基数（全単射が作れる最小の順序数）を定めるためには、まず <InlineMath math="X" /> の要素に整列順序（1番目、2番目、…と番号を振る）を入れる必要がある。
                    どんな集合にも整列順序が入れられることを保証するのが「整列定理」であり、前章で見たようにこれは選択公理（AC）と同値である。
                    ACがない世界では、実数集合 <InlineMath math="\mathbb{R}" /> がアレフ数で測れない（比較不能な）奇妙な濃度になってしまう可能性が排除できない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>基数</strong>は集合の「要素の個数（濃度）」を測る概念であり、等濃な順序数の中の最小のもので定義される。</li>
                    <li><strong>カントールの定理：</strong> べき集合の基数は元の集合の基数より常に大きい。無限には果てがない。</li>
                    <li>無限基数は小さい順に <strong><InlineMath math="\aleph_0, \aleph_1, \aleph_2, \ldots" />（アレフ数）</strong> として完全に番号付けられる（ZFCの仮定下）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}