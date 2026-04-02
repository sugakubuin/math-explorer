import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RegularSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ハウスドルフ性（点と点の分離）をさらに進めて、「点と閉集合」を分離できるようにしたのが<strong>正則空間 (Regular space)</strong> です。
                これにより、局所的に閉集合を避けて動けるような、より「硬い」構造が空間に備わります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正則空間の定義</h2>

            <ContentBox type="definition" title="Definition 6.3-1 (正則空間 / T3 空間)">
                <p>
                    位相空間 <InlineMath math="X" /> が <strong>正則空間 (Regular space)</strong> であるとは、
                    任意の閉集合 <InlineMath math="F \subset X" /> と、<InlineMath math="F" /> に含まれない点 <InlineMath math="x \notin F" /> に対し、
                    <InlineMath math="x \in U" />, <InlineMath math="F \subset V" /> かつ <strong><InlineMath math="U \cap V = \emptyset" /></strong>
                    を満たす開集合 <InlineMath math="U, V" /> が存在することをいう。
                </p>
                <p className="mt-2">
                    通常、正則空間かつ T1 空間であるものを <strong>T3 空間</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="近傍による特徴づけ">
                <p>
                    <InlineMath math="X" /> が正則であるための必要十分条件は、
                    任意の点 <InlineMath math="x" /> とその任意の開近傍 <InlineMath math="W" /> に対し、
                    <InlineMath math="x \in U \subset \overline{U} \subset W" /> を満たす開集合 <InlineMath math="U" /> が存在することです。
                    これは「開集合の中に、さらに閉じた近傍を入れ子にできる」ことを意味しており、解析学において非常に扱いやすい性質です。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-1 (ハウスドルフだが正則でない例：K-位相)">
                <p>
                    実数全体 <InlineMath math="\mathbb{R}" /> において、集合 <InlineMath math="K = \{1/n \mid n \in \mathbb{N}\}" /> を考えます。
                    通常の開区間に加えて、<InlineMath math="(a, b) \setminus K" /> という形の集合も開集合とする位相を <strong>K-位相</strong> と呼びます。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>通常の位相より強いため、当然 <strong>ハウスドルフ (T2)</strong> です。</li>
                    <li>しかし、集合 <InlineMath math="K" /> はこの位相で閉集合ですが、点 <InlineMath math="0" /> は <InlineMath math="K" /> に含まれません。</li>
                    <li><InlineMath math="0" /> を含む開集合と <InlineMath math="K" /> を含む開集合を、互いに交わらないようにとることは初等的な計算から不可能であることが示せ、<strong>正則 (T3) ではありません</strong>。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完全正則空間（チコノフ空間）</h2>

            <p>
                「集合によって分離する（正則性）」よりもさらに強く、「連続関数によって分離する」ことを要求するのが完全正則性です。
            </p>

            <ContentBox type="definition" title="Definition 6.3-2 (完全正則空間 / T3.5 空間)">
                <p>
                    位相空間 <InlineMath math="X" /> が <strong>完全正則空間 (Completely regular space)</strong> であるとは、
                    任意の閉集合 <InlineMath math="F \subset X" /> と点 <InlineMath math="x \notin F" /> に対し、
                    連続関数 <InlineMath math="f: X \to [0, 1]" /> であって
                    <InlineMath math="f(x) = 0" /> かつ <InlineMath math="f(F) \subset \{1\}" />
                    を満たすものが存在することをいう。
                </p>
                <p className="mt-2 ml-4 text-sm">
                    ※ 完全正則かつ T1 であるものを <strong>チコノフ空間 (Tychonoff space / T3.5 空間)</strong> と呼ぶ。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>正則 (T3) 空間</strong>：点と閉集合を開集合で分離できる。</li>
                    <li>開近傍の中に閉近傍が含まれる、という「入れ子構造」を持つ。</li>
                    <li><strong>完全正則 (T3.5) 空間</strong>：点と閉集合を連続関数の値の違いで分離できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
