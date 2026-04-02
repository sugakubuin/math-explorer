import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CountableSets() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                無限集合の中でも、最も基本的で「数えることができる」サイズのものを<strong>可算集合</strong>と呼びます。
                自然数の集合 <InlineMath math="\mathbb{N}" /> と同じ濃度を持つこれらの集合は、一見すると大きさが異なるように見えても、数学的にはすべて同じ「無限のレベル」に属しています。
                このセクションでは、可算集合の定義と、驚くほど多くの集合が可算であることを証明していきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可算集合の定義</h2>

            <p>
                「可算」という言葉には、有限である場合と、自然数と同じ無限である場合の2通りが含まれることがあります。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 (可算無限・可算集合)">
                <ol className="list-decimal list-inside space-y-4 mt-2 ml-2">
                    <li>
                        集合 <InlineMath math="A" /> が自然数全体の集合 <InlineMath math="\mathbb{N}" /> と対等であるとき、<InlineMath math="A" /> は<strong>可算無限（Countably Infinite）</strong>であるといい、その濃度を <InlineMath math="\aleph_0" />（アレフ・ゼロ）と表す。
                    </li>
                    <li>
                        有限集合または可算無限集合である集合を、まとめて<strong>可算集合（Countable Set）</strong>という。
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可算集合の例と性質</h2>

            <p>
                「無限に無限を足しても、やはり可算である」という事実は、直感に反する面白い結果を多く含んでいます。
            </p>

            <ContentBox type="theorem" title="Proposition 5.2-1 (可算集合の判定と性質)">
                <ol className="list-decimal list-inside space-y-4 mt-2 ml-2">
                    <li>
                        集合 <InlineMath math="A" /> が可算であることと、<InlineMath math="\mathbb{N}" /> から <InlineMath math="A" /> への全射が存在することは同値である。
                    </li>
                    <li>
                        可算集合の任意の部分集合は、やはり可算集合である。
                    </li>
                    <li>
                        可算個の可算集合の和集合は、やはり可算集合である。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1 (驚くべき可算集合たち)">
                <ul className="list-disc list-inside space-y-4 mt-2 ml-4">
                    <li>
                        <strong>整数全体の集合 <InlineMath math="\mathbb{Z}" /></strong>：<br />
                        <InlineMath math="0 \to 0, 1 \to 1, 2 \to -1, 3 \to 2, 4 \to -2, \dots" /> と交互に並べることで、自然数との全単射が作れます。よって <InlineMath math="|\mathbb{Z}| = \aleph_0" /> です。
                    </li>
                    <li>
                        <strong>有理数全体の集合 <InlineMath math="\mathbb{Q}" /></strong>：<br />
                        分子と分母のペア <InlineMath math="(p, q)" /> を格子点として平面上に並べ、渦巻き状に辿ることで、すべての有理数を漏れなく「数え上げる」ことができます。よって <InlineMath math="|\mathbb{Q}| = \aleph_0" /> です。
                    </li>
                    <li>
                        <strong>代数的数全体の集合</strong>：<br />
                        整数係数の方程式の解となる数（<InlineMath math="\sqrt{2}" /> や <InlineMath math="i" /> など）も、実は可算集合です。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="proof" title="Proof: 和集合の可算性 (可算個の可算和)">
                <p>
                    可算集合の族 <InlineMath math="\{A_n\}_{n \in \mathbb{N}}" /> に対して、その和集合 <InlineMath math="S = \bigcup_{n \in \mathbb{N}} A_n" /> が可算であることを示す。
                </p>
                <p className="mt-4">
                    各 <InlineMath math="A_n" /> は可算なので、その元を <InlineMath math="A_n = \{ a_{n,0}, a_{n,1}, a_{n,2}, \dots \}" /> と並べることができる。<br />
                    これらを以下のような無限の表として描き、図のように斜めに辿ることで、すべての元を一つの列に並べ直すことができる：
                </p>
                <BlockMath math="\begin{matrix} a_{0,0} & \to & a_{0,1} & & a_{0,2} & \dots \\ & \swarrow & & \nearrow & & \\ a_{1,0} & & a_{1,1} & & a_{1,2} & \dots \\ \downarrow & \nearrow & & & & \\ a_{2,0} & & a_{2,1} & & a_{2,2} & \dots \\ \vdots & & \vdots & & \vdots & \ddots \end{matrix}" />
                <p className="mt-4">
                    これにより、<InlineMath math="\mathbb{N}" /> から <InlineMath math="S" /> への全射が構成された（重複する元は飛ばせばよい）。したがって Proposition 5.2-1(1) により <InlineMath math="S" /> は可算である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="ヒルベルトの無限ホテル">
                <p>
                    数学者ダフィット・ヒルベルトは、可算無限の面白さを教えるために「無限ホテル」の例え話をしました。
                    満室のホテルに新しい客が一人やってきても、1番部屋の客を2番へ、2番を3番へと一つずつずらしてもらうことで、1番部屋を空けることができます。
                    同様に、無限人の新しい客や、無限台のバスに乗った無限人の客さえも、部屋の番号を工夫して「ずらす」ことで全員が宿泊可能です。
                    「可算無限」とは、このように<strong>「いくら追加しても、工夫次第で元の番号札に収まってしまう」</strong>ような、粘り強いサイズなのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>可算無限</strong>（濃度 <InlineMath math="\aleph_0" />）は、自然数と対等な「数えられる無限」である。</li>
                    <li>整数や有理数は、直感に反して自然数と同じ「可算無限」というサイズに収まる。</li>
                    <li>可算集合の有限および可算個の合併は、再び可算集合となる。</li>
                    <li>「無限ホテル」に見られるように、可算無限は有限個や無限個の追加に対して非常に柔軟である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
