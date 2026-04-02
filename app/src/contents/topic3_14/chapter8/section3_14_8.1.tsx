import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OrdinalNumbersAndArithmetic() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                最終章となる本章では、集合論を用いて「無限の大きさ」と「順番」を数学的に厳密に測る道具である順序数と基数を導入します。まずは「順番」を一般化した概念である順序数について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">フォン・ノイマン順序数</h2>

            <p className="leading-relaxed">
                ZF集合論には「数」という専用の概念はありません。すべては「集合」です。フォン・ノイマンは、空集合 <InlineMath math="\emptyset" /> と集合操作だけを使って「自然数」や「無限の順番」を見事に表現しました。
            </p>

            <ContentBox
                type="definition"
                title="Definition 8.1-1 (フォン・ノイマン順序数)"
            >
                <p>
                    集合 <InlineMath math="\alpha" /> が<strong>（フォン・ノイマン）順序数 (ordinal number)</strong> であるとは、以下の2つの条件を満たすことである。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="\alpha" /> は推移的（transitive）である： <InlineMath math="x \in \alpha \implies x \subseteq \alpha" /> （つまり <InlineMath math="y \in x \in \alpha \implies y \in \alpha" />）。</li>
                    <li><InlineMath math="\alpha" /> の要素たちは、所属関係 <InlineMath math="\in" /> によって整列順序（well-ordering）付けられている。</li>
                </ol>
                <p>
                    順序数の大小関係は、単なる所属関係 <InlineMath math="\in" /> として定義される。すなわち <InlineMath math="\alpha < \beta \iff \alpha \in \beta" />。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.1-1 (順序数の具体例)"
            >
                <p>
                    自然数を順序数として次のように定義する。各順序数は「<strong>それより小さいすべての順序数を集めた集合</strong>」になっている。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="0 = \emptyset" /> （要素を持たない）</li>
                    <li><InlineMath math="1 = \{0\} = \{\emptyset\}" /></li>
                    <li><InlineMath math="2 = \{0, 1\} = \{\emptyset, \{\emptyset\}\}" /></li>
                    <li><InlineMath math="3 = \{0, 1, 2\}" /></li>
                </ul>
                <p>
                    一般に、順序数 <InlineMath math="\alpha" /> の「次の数（後継順序数）」は <InlineMath math="\alpha + 1 = \alpha \cup \{\alpha\}" /> として作られる。
                    そして、すべての自然数を集めた集合（ZFCの無限公理で存在が保証される）を <strong><InlineMath math="\omega" />（オメガ）</strong> と呼ぶ。
                    <BlockMath math="\omega = \{0, 1, 2, \ldots\}" />
                    <InlineMath math="\omega" /> は「直前に来る最大の数」を持たないため、<strong>極限順序数（limit ordinal）</strong>と呼ばれる。これが最初の「無限順序数」である。
                </p>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 8.1-1 (順序数の全順序性)"
            >
                <p>
                    任意の2つの順序数 <InlineMath math="\alpha, \beta" /> について、以下のいずれか1つだけが必ず成り立つ（比較可能性）。
                    <BlockMath math="\alpha \in \beta \quad \text{または} \quad \alpha = \beta \quad \text{または} \quad \beta \in \alpha" />
                    これは AC（選択公理）を使わずに、ZF の範囲内で証明できる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="\alpha \cap \beta" /> もまた順序数（初期切片）となることを用いる。
                    もし <InlineMath math="\alpha \cap \beta = \alpha" /> であれば <InlineMath math="\alpha \subseteq \beta" /> であり、<InlineMath math="\alpha" /> は <InlineMath math="\beta" /> と等しいか、<InlineMath math="\beta" /> のある元と一致する（<InlineMath math="\alpha \in \beta" />）。
                    逆も同様である。どちらにも含まれない元があるとするなら、整列性により最小の反例を取ることで矛盾を導ける。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">超限算術</h2>

            <p className="leading-relaxed">
                順序数に対しても、足し算や掛け算を定義できます。無限が関わるため、普通の直感とは少し異なる結果になります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 8.1-2 (順序数の算術)"
            >
                <p>
                    順序数の和 <InlineMath math="\alpha + \beta" /> は、「長さ <InlineMath math="\alpha" /> の列の後ろに、長さ <InlineMath math="\beta" /> の列を並べたもの」の順序数型として定義される。
                    同様に乗法 <InlineMath math="\alpha \cdot \beta" /> は「長さ <InlineMath math="\alpha" /> の列を、<InlineMath math="\beta" /> コピー並べたもの」として定義される。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.1-2 (超限算術の非可換性)"
            >
                <p>
                    有限の自然数とは異なり、無限の順序数の足し算・掛け算は<strong>交換法則が成り立たない</strong>。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-2">
                    <li>
                        <strong><InlineMath math="1 + \omega" /> と <InlineMath math="\omega + 1" />：</strong><br/>
                        <InlineMath math="1 + \omega" /> は、1つの要素の後に <InlineMath math="\omega" /> 個（無限個）の要素を並べる。<br/>
                        <InlineMath math="(*, 0, 1, 2, \ldots)" />。これは全体として最初から数え直せるため、順序としては <InlineMath math="\omega" /> と同じである。すなわち <InlineMath math="1 + \omega = \omega" />。<br/>
                        一方、<InlineMath math="\omega + 1" /> は無限個並べた「最後」に1つ要素を置く。<br/>
                        <InlineMath math="(0, 1, 2, \ldots, *)" />。この最後の <InlineMath math="*" /> は無限の彼方にある最大元であり、通常の <InlineMath math="\omega" /> には存在しない性質を持つ。したがって <InlineMath math="\omega \neq \omega + 1" /> である。
                    </li>
                    <li>
                        <strong><InlineMath math="2 \cdot \omega" /> と <InlineMath math="\omega \cdot 2" />：</strong><br/>
                        <InlineMath math="2 \cdot \omega" /> は「長さ2を <InlineMath math="\omega" /> 個並べる」ので <InlineMath math="(0,1, 0,1, 0,1, \ldots)" /> となり、全体は単なる <InlineMath math="\omega" /> と同型（<InlineMath math="2 \cdot \omega = \omega" />）。<br/>
                        <InlineMath math="\omega \cdot 2" /> は「長さ <InlineMath math="\omega" /> を2つ並べる」ので <InlineMath math="(0,1,2\ldots, 0',1',2'\ldots)" /> となり、<InlineMath math="\omega + \omega" /> に等しい。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>フォン・ノイマン順序数</strong>は、集合の包含関係 <InlineMath math="\in" /> だけで「順番」と「数」を厳密に表現する体系である。</li>
                    <li>各順序数は「それより小さい順序数全体の集合」として定義され、最初の無限順序数は <InlineMath math="\omega" /> と呼ばれる。</li>
                    <li>順序数の足し算や掛け算（超限算術）は、結合法則は満たすが<strong>交換法則は満たさない</strong>（<InlineMath math="1 + \omega \neq \omega + 1" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}