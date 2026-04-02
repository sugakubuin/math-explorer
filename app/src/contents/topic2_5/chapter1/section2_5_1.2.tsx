import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TopologyExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                位相の公理（Definition 1.1-1）は非常に抽象的ですが、それゆえに多様な「開集合のルール」を許容します。
                このセクションでは、数学の各分野で登場する代表的な位相の例を見ていき、位相という構造が持つ柔軟性を実感しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代表的な位相の例</h2>

            <p>
                最も極端な 2 つの位相から始めます。
            </p>

            <ContentBox type="example" title="Example 1.2-1 (離散位相)">
                <p>
                    集合 <InlineMath math="X" /> の<strong>すべての</strong>部分集合を開集合とする位相を<strong>離散位相 (Discrete Topology)</strong> という。
                </p>
                <BlockMath math="\mathcal{O}_{discrete} = \mathcal{P}(X)" />
                <p className="mt-4">
                    すべての 1 点集合 <InlineMath math="\{x\}" /> が開集合となり、各点がバラバラに（離散的に）存在しているイメージです。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2 (密着位相)">
                <p>
                    空集合と全体集合だけを開集合とする位相を<strong>密着位相 (Indiscrete Topology)</strong> という。
                </p>
                <BlockMath math="\mathcal{O}_{indiscrete} = \{\emptyset, X\}" />
                <p className="mt-4">
                    どんな元も開集合によって区別することができず、すべてが「密着」して塊になっているイメージです。
                </p>
            </ContentBox>

            <p className="mt-6">
                次に、私たちが微積分などで暗黙のうちに扱っている最も重要な位相です。
            </p>

            <ContentBox type="example" title="Example 1.2-3 (通常の位相 / ユークリッド位相)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> において、あらゆる開区間 <InlineMath math="(a, b)" /> の（任意個の）和集合として表される集合の集まりは位相の公理を満たす。
                    これを <InlineMath math="\mathbb{R}" /> 上の<strong>通常の位相 (Usual Topology)</strong> という。
                </p>
                <p className="mt-4">
                    一般に距離空間においては、開球の和集合として「開集合」を定義することで位相を導入できます。
                </p>
            </ContentBox>

            <p className="mt-6">
                最後に、代数幾何学などで重要な役割を果たす少し特殊な位相を紹介します。
            </p>

            <ContentBox type="example" title="Example 1.2-4 (有限補位相・可算補位相)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <strong>有限補位相 (Cofinite Topology):</strong>
                        補集合が有限集合であるような集合、および空集合を開集合とするもの。
                        <BlockMath math="\mathcal{O} = \{ U \subset X \mid X \setminus U \text{ は有限集合} \} \cup \{\emptyset\}" />
                    </li>
                    <li>
                        <strong>可算補位相 (Cocountable Topology):</strong>
                        補集合が可算集合であるような集合、および空集合を開集合とするもの。
                    </li>
                </ul>
                <p className="mt-4">
                    有限補位相は、代数幾何における<strong>ザリスキー位相</strong>の最も単純なモデルとして知られています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">位相の比較</h2>

            <p>
                離散位相と密着位相は、あらゆる位相と比較可能な極端なケースです。
            </p>

            <ContentBox type="remark" title="最強の位相と最弱の位相">
                <p>
                    集合 <InlineMath math="X" /> 上の任意の位相 <InlineMath math="\mathcal{O}" /> に対して、常に次の関係が成り立ちます。
                </p>
                <BlockMath math="\mathcal{O}_{indiscrete} \subset \mathcal{O} \subset \mathcal{O}_{discrete}" />
                <p className="mt-4">
                    つまり、<strong>密着位相は最も粗い（弱い）位相</strong>であり、<strong>離散位相は最も細かい（強い）位相</strong>です。
                    数学の多くの問題は、この極端な 2 つの間のどこかに「適切な」位相を設定することで記述されます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>離散位相</strong>：すべての部分集合が開集合（最も強い）。</li>
                    <li><strong>密着位相</strong>：<InlineMath math="\emptyset" /> と <InlineMath math="X" /> のみが開集合（最も弱い）。</li>
                    <li><strong>通常の位相</strong>：開区間（開球）の和集合として定義される。</li>
                    <li><strong>有限補位相</strong>：補集合が有限な集合を開集合とする。</li>
                    <li>任意の位相は、密着位相より強く、離散位相より弱い。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
