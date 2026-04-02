import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ClosedSets() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                位相空間において、開集合の相棒とも言える存在が<strong>閉集合 (Closed Set)</strong> です。
                「開集合の補集合」として定義される閉集合は、ユークリッド空間における閉区間や一点集合の概念を一般化したものであり、
                極限操作や連続性の議論において非常に重要な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">閉集合の公理</h2>

            <p>
                位相の公理（開集合系の公理）から、ド・モルガンの法則を用いることで、閉集合が満たすべき性質を導き出すことができます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1 (閉集合系の公理)">
                <p>
                    位相空間 <InlineMath math="(X, \mathcal{O})" /> における閉集合の全体を <InlineMath math="\mathcal{F}" /> とすると、次の 3 つの性質が成り立つ：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li>
                        空集合と全体集合は閉集合である：
                        <br />
                        <InlineMath math="\emptyset, X \in \mathcal{F}" />
                    </li>
                    <li>
                        有限個の閉集合の和集合は閉集合である：
                        <br />
                        <InlineMath math="F_1, F_2, \dots, F_n \in \mathcal{F} \implies \bigcup_{i=1}^n F_i \in \mathcal{F}" />
                    </li>
                    <li>
                        任意個（無限個でもよい）の閉集合の共通部分は閉集合である：
                        <br />
                        <InlineMath math="\{F_\alpha\}_{\alpha \in \Lambda} \subset \mathcal{F} \implies \bigcap_{\alpha \in \Lambda} F_\alpha \in \mathcal{F}" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    開集合の公理（Definition 1.1-1）と、補集合に関するド・モルガンの法則を用いて証明する。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-2 ml-4">
                    <li>
                        (1) 位相の公理より <InlineMath math="X, \emptyset \in \mathcal{O}" /> である。
                        <InlineMath math="X \setminus X = \emptyset" /> および <InlineMath math="X \setminus \emptyset = X" /> はいずれも開集合であるから、
                        閉集合の定義より <InlineMath math="X" /> と <InlineMath math="\emptyset" /> は閉集合である。
                    </li>
                    <li>
                        (2) <InlineMath math="F_i \in \mathcal{F}" /> より <InlineMath math="X \setminus F_i" /> は開集合である。
                        ド・モルガンの法則より、
                        <BlockMath math="X \setminus (\bigcup_{i=1}^n F_i) = \bigcap_{i=1}^n (X \setminus F_i)" />
                        である。位相の公理より、有限個の開集合の共通部分は開集合であるから、
                        その補集合である <InlineMath math="\bigcup_{i=1}^n F_i" /> は閉集合である。
                    </li>
                    <li>
                        (3) <InlineMath math="F_\alpha \in \mathcal{F}" /> より <InlineMath math="X \setminus F_\alpha" /> は開集合である。
                        ド・モルガンの法則より、
                        <BlockMath math="X \setminus (\bigcap_{\alpha \in \Lambda} F_\alpha) = \bigcup_{\alpha \in \Lambda} (X \setminus F_\alpha)" />
                        である。位相の公理より、任意個の開集合の和集合は開集合であるから、
                        その補集合である <InlineMath math="\bigcap_{\alpha \in \Lambda} F_\alpha" /> は閉集合である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                開集合のときとは逆に、共通部分については無限個でも閉じていますが、和集合については有限個までしか保証されていない点に注意が必要です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例</h2>

            <p>
                具体的な空間において、どのような集合が閉集合となるかを見てみましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-1 (実数直線上の閉集合)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> の通常の位相において：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>閉区間 <InlineMath math="[a, b]" /> は閉集合である。なぜならその補集合 <InlineMath math="(-\infty, a) \cup (b, \infty)" /> は開集合だからである。</li>
                    <li>一点集合 <InlineMath math="\{a\}" /> は閉集合である。</li>
                    <li>
                        半開区間 <InlineMath math="[a, b)" /> は開集合でも閉集合でもない。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="距離空間における閉集合">
                <p>
                    Chapter 9 で詳しく学びますが、距離空間において集合 <InlineMath math="F" /> が閉集合であることは、
                    「<InlineMath math="F" /> の元からなる収束点列の極限が必ず <InlineMath math="F" /> に属すること」と同値になります。
                    これは「閉集合がその境界を含んでいる」という直感とよく一致します。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>閉集合</strong>とは、その補集合が開集合であるような集合のことである。</li>
                    <li>閉集合は、全体・空集合、有限個の合併、任意個の共通部分について閉じている。</li>
                    <li>実数直線上の閉区間は代表的な閉集合の例である。</li>
                    <li>「開」と「閉」は排他的な関係ではなく、両方であるものや、どちらでもないものも存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
