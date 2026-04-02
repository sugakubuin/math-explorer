import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function T0T1Spaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「分離公理」とは、位相空間において点や集合がどの程度「位相的に区別できるか」を規定する一連の公理のことです。
                最も基本的なレベルでは、まず「異なる2点を、開集合によって分類できるか」という点から始まります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">T0 空間（コルモゴロフ空間）</h2>

            <p>
                最も弱い分離公理です。少なくとも一方の点から見て、他方を含まない「壁（開集合）」が一つあればよい、という条件です。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (T0 空間)">
                <p>
                    位相空間 <InlineMath math="X" /> が <strong>T0 空間 (Kolmogorov space)</strong> であるとは、
                    任意の相異なる2点 <InlineMath math="x, y \in X" /> に対し、
                    「<InlineMath math="x \in U" /> かつ <InlineMath math="y \notin U" />」または「<InlineMath math="y \in V" /> かつ <InlineMath math="x \notin V" />」
                    を満たす開集合 <InlineMath math="U" /> または <InlineMath math="V" /> が存在することをいう。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-1 (T0 でない例：密着位相)">
                <p>
                    2点以上からなる集合に密着位相（開集合が <InlineMath math="\emptyset" /> と全体集合のみ）を入れた空間は、T0 ではありません。
                    どの開集合をとっても、2点を同時に含んでしまうか、同時に含まないかのどちらかであり、点を区別する「壁」が一切存在しないからです。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-2 (T0 だが T1 でない例：Sierpinski 空間)">
                <p>
                    集合 <InlineMath math="X = \{0, 1\}" /> に開集合系 <InlineMath math="\mathcal{O} = \{\emptyset, \{1\}, \{0, 1\}\}" /> を入れたものを <strong>Sierpinski 空間</strong> と呼びます。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li><InlineMath math="1" /> を含み <InlineMath math="0" /> を含まない開集合 <InlineMath math="\{1\}" /> があるため、<strong>T0</strong> です。</li>
                    <li>しかし、<InlineMath math="0" /> を含み <InlineMath math="1" /> を含まない開集合は存在しないため、<strong>T1 ではありません</strong>。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">T1 空間</h2>

            <p>
                T0 よりも強く、「どちらの点から見ても、相手を排除する開集合が存在する」ことを要求します。
            </p>

            <ContentBox type="definition" title="Definition 6.1-2 (T1 空間)">
                <p>
                    位相空間 <InlineMath math="X" /> が <strong>T1 空間</strong> であるとは、
                    任意の相異なる2点 <InlineMath math="x, y \in X" /> に対し、
                    <InlineMath math="x \in U" /> かつ <InlineMath math="y \notin U" /> を満たす開集合 <InlineMath math="U" /> が存在し、
                    かつ <InlineMath math="y \in V" /> かつ <InlineMath math="x \notin V" /> を満たす開集合 <InlineMath math="V" /> が存在することをいう。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-3 (T1 だが T2 でない例：余有限位相)">
                <p>
                    無限集合 <InlineMath math="X" /> に対し、空集合および「補集合が有限集合であるような部分集合」を開集合とする位相を <strong>余有限位相 (Cofinite topology)</strong> と呼びます。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>任意の点 <InlineMath math="x" /> に対し、<InlineMath math="X \setminus \{x\}" /> は開集合なので、Proposition 6.1-1 より <strong>T1</strong> です。</li>
                    <li>しかし、空でない任意の2つの開集合 <InlineMath math="U, V" /> は、補集合がそれぞれ有限であるため、その共通部分 <InlineMath math="U \cap V" /> が空になることはありません（<InlineMath math="X" /> が無限集合であるため）。</li>
                    <li>したがって、点を開集合で「完全に引き離す」ことはできず、<strong>ハウスドルフ (T2) ではありません</strong>。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 6.1-1 (T1 の特徴づけ)">
                <p>
                    位相空間 <InlineMath math="X" /> が T1 空間であるための必要十分条件は、
                    <strong>任意の1点集合 <InlineMath math="\{x\}" /> が閉集合であること</strong>である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (<InlineMath math="\Longrightarrow" />) <InlineMath math="X" /> が T1 であるとする。
                    任意の <InlineMath math="x \in X" /> に対し、<InlineMath math="X \setminus \{x\}" /> が開集合であることを示せばよい。
                    任意の <InlineMath math="y \in X \setminus \{x\}" /> をとると、<InlineMath math="y \neq x" /> である。
                    T1 の定義より、<InlineMath math="y \in V" /> かつ <InlineMath math="x \notin V" /> を満たす開集合 <InlineMath math="V" /> が存在する。
                    このとき <InlineMath math="V \subset X \setminus \{x\}" /> である。
                    よって <InlineMath math="X \setminus \{x\}" /> は各点の近傍を含んでおり、開集合である。
                </p>
                <p className="mt-2">
                    (<InlineMath math="\Longleftarrow" />) 任意の1点集合が閉であるとする。
                    相異なる2点 <InlineMath math="x, y" /> に対し、<InlineMath math="V = X \setminus \{x\}" /> は <InlineMath math="y" /> を含み <InlineMath math="x" /> を含まない開集合である。
                    同様に <InlineMath math="U = X \setminus \{y\}" /> は <InlineMath math="x" /> を含み <InlineMath math="y" /> を含まない開集合である。
                    ゆえに <InlineMath math="X" /> は T1 である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="包含関係">
                <p>
                    定義より明らかに <strong>T1 <InlineMath math="\implies" /> T0</strong> です。
                    逆が成り立たない例として、「特殊点位相（ある1点 <InlineMath math="p" /> を含む集合を開集合とする）」などが挙げられます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>T0</strong>：相異なる2点のどちらかも片方を「開集合で分離」できる。</li>
                    <li><strong>T1</strong>：相異なる2点の両方を、それぞれ相手を含まない開集合で分離できる。</li>
                    <li><strong>T1 性の核</strong>：1点集合が閉集合であること。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
