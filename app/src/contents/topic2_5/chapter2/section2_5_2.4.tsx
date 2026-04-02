import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Neighborhoods() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「ある点の近く」という直感的な概念を数学的に厳密に扱うための道具が<strong>近傍 (Neighborhood)</strong> です。
                位相の公理は開集合をもとに定義されましたが、実は近傍の性質（公理）から位相を定義することも可能です。
                このセクションでは、近傍の定義とその基本的な性質について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">近傍の定義</h2>

            <p>
                点 <InlineMath math="x" /> を含む開集合を一つ包み込んでいるような集合を、<InlineMath math="x" /> の近傍と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (近傍・近傍系)">
                <p>
                    位相空間 <InlineMath math="X" /> の点 <InlineMath math="x" /> と、部分集合 <InlineMath math="V \subset X" /> に対して：
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>近傍</strong>: <InlineMath math="x \in U \subset V" /> を満たす開集合 <InlineMath math="U" /> が存在するとき、
                        <InlineMath math="V" /> を <InlineMath math="x" /> の<strong>近傍</strong>という。
                    </li>
                    <li>
                        <strong>近傍系</strong>: <InlineMath math="x" /> の近傍全体の集合族を <InlineMath math="\mathcal{V}(x)" /> と書き、
                        これを <InlineMath math="x" /> の<strong>近傍系</strong>と呼ぶ。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-1 (開集合でない近傍)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> において、点 <InlineMath math="0" /> の近傍を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>
                        <strong>閉区間</strong> <InlineMath math="[-1, 1]" /> は点 <InlineMath math="0" /> の近傍である。
                        なぜなら、開集合（開区間） <InlineMath math="(-1, 1)" /> を含んでおり、<InlineMath math="0 \in (-1, 1) \subset [-1, 1]" /> が成り立つからである。
                    </li>
                    <li>
                        しかし、<InlineMath math="[-1, 1]" /> 自体は <InlineMath math="\mathbb{R}" /> の開集合ではない。このように、近傍は必ずしも開集合である必要はない。
                    </li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                近傍自体は必ずしも開集合である必要はありませんが、開集合である近傍を特に「開近傍」と呼びます。
                次の命題は、開集合が近傍を用いてどのように特徴づけられるかを示しています。
            </p>

            <ContentBox type="proposition" title="Proposition 2.4-1 (開集合と近傍の関係)">
                <p>
                    部分集合 <InlineMath math="U \subset X" /> が開集合であるための必要十分条件は、
                    <InlineMath math="U" /> がその任意の点 <InlineMath math="x \in U" /> の近傍であることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 必要性：</strong>
                    <br />
                    <InlineMath math="U" /> が開集合であるとする。
                    任意の <InlineMath math="x \in U" /> に対して、自明に <InlineMath math="x \in U \subset U" /> であり、
                    <InlineMath math="U" /> 自身が開集合であるから、定義より <InlineMath math="U" /> は <InlineMath math="x" /> の近傍である。
                </p>
                <p className="mt-4">
                    <strong>2. 十分性：</strong>
                    <br />
                    <InlineMath math="U" /> の各点 <InlineMath math="x" /> に対して、<InlineMath math="U" /> が <InlineMath math="x" /> の近傍であるとする。
                    定義より、各 <InlineMath math="x \in U" /> に対して <InlineMath math="x \in V_x \subset U" /> を満たす開集合 <InlineMath math="V_x" /> が存在する。
                    このとき、
                    <BlockMath math="U = \bigcup_{x \in U} \{x\} \subset \bigcup_{x \in U} V_x \subset U" />
                    より、<InlineMath math="U = \bigcup_{x \in U} V_x" /> となる。
                    位相の公理より、開集合の任意の和集合は開集合であるから、 <InlineMath math="U" /> は開集合である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">近傍系の公理</h2>

            <p>
                近傍系 <InlineMath math="\mathcal{V}(x)" /> が満たすべき具体的な性質を列挙したものが「近傍系の公理」です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (近傍系の性質)">
                <p>
                    任意の点 <InlineMath math="x \in X" /> の近傍系 <InlineMath math="\mathcal{V}(x)" /> は以下の性質を満たす：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="V \in \mathcal{V}(x) \implies x \in V" /></li>
                    <li><InlineMath math="V \in \mathcal{V}(x)" /> かつ <InlineMath math="V \subset W \implies W \in \mathcal{V}(x)" /></li>
                    <li><InlineMath math="V, W \in \mathcal{V}(x) \implies V \cap W \in \mathcal{V}(x)" /></li>
                    <li><InlineMath math="V \in \mathcal{V}(x) \implies \exists W \in \mathcal{V}(x) \text{ s.t. } \forall y \in W, V \in \mathcal{V}(y)" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    近傍の定義（<InlineMath math="x \in U \subset V" /> を満たす開集合 <InlineMath math="U" /> の存在）に基づき示す。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-2 ml-4">
                    <li>
                        (1) 近傍の定義より明らかである。
                    </li>
                    <li>
                        (2) <InlineMath math="x \in U \subset V" /> となる開集合 <InlineMath math="U" /> が存在するとき、<InlineMath math="V \subset W" /> ならば当然 <InlineMath math="x \in U \subset W" /> であるから、<InlineMath math="W" /> も近傍である。
                    </li>
                    <li>
                        (3) <InlineMath math="x \in U_1 \subset V" /> および <InlineMath math="x \in U_2 \subset W" /> となる開集合 <InlineMath math="U_1, U_2" /> が存在するとき、
                        <InlineMath math="x \in U_1 \cap U_2 \subset V \cap W" /> である。位相の公理より <InlineMath math="U_1 \cap U_2" /> も開集合であるから、<InlineMath math="V \cap W" /> も近傍である。
                    </li>
                    <li>
                        (4) <InlineMath math="x \in U \subset V" /> となる開集合 <InlineMath math="U" /> が存在する。この <InlineMath math="U" /> 自身を <InlineMath math="W" /> とすればよい。
                        実際、任意の <InlineMath math="y \in W (= U)" /> に対して、<InlineMath math="y \in U \subset V" /> であり、<InlineMath math="U" /> は開集合であるから、
                        近傍の定義より <InlineMath math="V" /> は <InlineMath math="y" /> の近傍である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                性質 4 は少し複雑ですが、直感的には「点 <InlineMath math="x" /> の近傍 <InlineMath math="V" /> が与えられたとき、
                <InlineMath math="x" /> の十分近くにある点 <InlineMath math="y" /> にとっても、やはり <InlineMath math="V" /> は近傍である」ということを意味しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="example" title="Example 2.4-1 (実数直線上の近傍)">
                <p>
                    <InlineMath math="\mathbb{R}" /> の点 <InlineMath math="0" /> において、
                    <InlineMath math="[-1, 1]" /> は <InlineMath math="0" /> の近傍です（開区間 <InlineMath math="(-1, 1)" /> を含んでいるため）。
                    一方で、<InlineMath math="[0, 1]" /> は <InlineMath math="0" /> の近傍ではありません。
                    なぜなら、<InlineMath math="0" /> を含むどんな開区間 <InlineMath math="(-\varepsilon, \varepsilon)" /> も <InlineMath math="[0, 1]" /> には含まれないからです。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="近傍系から位相を作る">
                <p>
                    もし各点に対して上の性質 1〜4 を満たす集合族 <InlineMath math="\mathcal{V}(x)" /> が与えられたなら、
                    Proposition 2.4-1 の性質を満たす集合を「開集合」と定義することで、<InlineMath math="X" /> 上に位相を導入することができます。
                    これは「開集合」から「近傍」を定義するのと逆のプロセスであり、幾何学的な直感を位相の定義に持ち込む際に有用な視点です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>近傍</strong>とは、その点を包む開集合を含んでいる集合である。</li>
                    <li>すべての点が自身の近傍であるような集合が、すなわち<strong>開集合</strong>である。</li>
                    <li>近傍系は、包摂関係、有限交差、および「近傍のさらなる近傍性」に関する公理を満たす。</li>
                    <li>点 <InlineMath math="x" /> を含む閉区間が <InlineMath math="x" /> を内点として持つなら、それは近傍である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
