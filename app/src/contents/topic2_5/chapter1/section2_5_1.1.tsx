import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TopologyDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「連続である」とか「近づく」といった概念を扱うためには、集合の上に何らかの「幾何学的な構造」が必要です。
                私たちが慣れ親しんでいるユークリッド空間では「距離」がその役割を果たしていますが、その本質をさらに抽象化し、距離が定義できないような集合にまで適用できるようにしたものが<strong>位相空間 (Topological Space)</strong> です。
                このセクションでは、現代数学のあらゆる舞台装置となる「位相」の厳密な定義とその動機を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">位相の定義</h2>

            <p>
                集合 <InlineMath math="X" /> に対して、どのような部分集合の集まりを「開集合」と呼ぶか、というルールを決めることが「位相を定める」ことに相当します。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (位相・位相空間)">
                <p>
                    集合 <InlineMath math="X" /> の部分集合の族 <InlineMath math="\mathcal{O} \subset \mathcal{P}(X)" /> が次の 3 つの条件（位相の公理）を満たすとき、
                    <InlineMath math="\mathcal{O}" /> を <InlineMath math="X" /> 上の<strong>位相 (Topology)</strong> と呼び、
                    対 <InlineMath math="(X, \mathcal{O})" /> を<strong>位相空間 (Topological Space)</strong> と呼ぶ。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li>
                        空集合と全体集合は <InlineMath math="\mathcal{O}" /> に属する：
                        <br />
                        <InlineMath math="\emptyset \in \mathcal{O}, X \in \mathcal{O}" />
                    </li>
                    <li>
                        有限個の要素の共通部分は <InlineMath math="\mathcal{O}" /> に属する：
                        <br />
                        <InlineMath math="U_1, U_2, \dots, U_n \in \mathcal{O} \implies \bigcap_{i=1}^n U_i \in \mathcal{O}" />
                    </li>
                    <li>
                        任意個（無限個でもよい）の要素の和集合は <InlineMath math="\mathcal{O}" /> に属する：
                        <br />
                        <InlineMath math="\{U_\alpha\}_{\alpha \in \Lambda} \subset \mathcal{O} \implies \bigcup_{\alpha \in \Lambda} U_\alpha \in \mathcal{O}" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-1 (最小の具体例)">
                <p>
                    2つの要素からなる集合 <InlineMath math="X = \{a, b\}" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><strong>密着位相</strong>： <InlineMath math="\mathcal{O}_1 = \{ \emptyset, X \}" />。これは最も「粗い」位相である。</li>
                    <li><strong>離散位相</strong>： <InlineMath math="\mathcal{O}_2 = \{ \emptyset, \{a\}, \{b\}, X \}" />。これはすべての部分集合を開集合とみなす最も「細かい」位相である。</li>
                    <li><strong>中間の位相</strong>： <InlineMath math="\mathcal{O}_3 = \{ \emptyset, \{a\}, X \}" /> も位相の公理を満たす（シェルピンスキー空間）。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">開集合・閉集合</h2>

            <p>
                位相 <InlineMath math="\mathcal{O}" /> に属する集合を、その位相空間における「開集合」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (開集合・閉集合)">
                <ul className="list-disc list-inside space-y-4 mt-2 ml-2">
                    <li>
                        <InlineMath math="U \in \mathcal{O}" /> であるとき、<InlineMath math="U" /> を <InlineMath math="(X, \mathcal{O})" /> の<strong>開集合 (Open Set)</strong> という。
                    </li>
                    <li>
                        部分集合 <InlineMath math="F \subset X" /> の補集合 <InlineMath math="X \setminus F" /> が開集合であるとき、
                        <InlineMath math="F" /> を<strong>閉集合 (Closed Set)</strong> という。
                    </li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                注意すべき点は、ある集合が開集合であると同時に閉集合であることもあれば（空集合や全体集合など）、
                どちらでもない場合もあるということです。この点において「開」と「閉」は日常語のイメージ（ドアが開いているか閉まっているか）とは異なります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">位相の比較</h2>

            <p>
                同じ集合 <InlineMath math="X" /> の上にも、異なるルール（位相）を考えることができます。どちらのルールの方が「より細かく開集合を指定しているか」を比較することができます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-3 (位相の強弱)">
                <p>
                    <InlineMath math="\mathcal{O}_1, \mathcal{O}_2" /> を <InlineMath math="X" /> 上の 2 つの位相とする。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <InlineMath math="\mathcal{O}_1 \subset \mathcal{O}_2" /> のとき、
                        <InlineMath math="\mathcal{O}_2" /> は <InlineMath math="\mathcal{O}_1" /> より<strong>強い</strong>（または細い・細かい、Stronger / Finer）という。
                    </li>
                    <li>
                        逆にこのとき、<InlineMath math="\mathcal{O}_1" /> は <InlineMath math="\mathcal{O}_2" /> より<strong>弱い</strong>（または粗い、Weaker / Coarser）という。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定義の動機</h2>

            <p>
                なぜ「有限個の共通部分」と「任意個の和集合」なのでしょうか？
            </p>

            <ContentBox type="remark" title="ユークリッド幾何学の抽象化">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> における通常の開集合（開区間の和集合で表せるもの）を考えると、次の性質が成り立ちます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>開集合をいくら集めて合わせても、境界は含まれない。</li>
                    <li>しかし、開区間を無限に重ねていくと（共通部分をとると）、<InlineMath math="\bigcap_{n=1}^\infty (-1/n, 1/n) = \{0\}" /> のように、一点集合（閉集合）になってしまうことがある。</li>
                </ul>
                <p className="mt-4">
                    この「和集合については自由に閉じており、共通部分については有限回までなら開いたままでいられる」というユークリッド空間の性質を抽出したものが、位相の公理なのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>位相</strong>とは、集合のどの部分を「開集合」とみなすかを決めるルールであり、3 つの公理（<InlineMath math="\emptyset, X" /> の所属、有限交差、任意合併）で定義される。</li>
                    <li>補集合が開集合であるものが<strong>閉集合</strong>である。</li>
                    <li>含まれる開集合の数が多いほど、その位相は<strong>強い</strong>（細かい）といわれる。</li>
                    <li>この定義は、実数空間における開集合の振る舞いを「距離」を使わずに抽出したものである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
