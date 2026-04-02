import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BaireCategoryTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                完備な距離空間は、単に「穴があいていない」だけでなく、空間自体が「中身が詰まっている」という強力な性質を持っています。
                この事実を定式化したものが<strong>ベール圏定理 (Baire Category Theorem)</strong> です。
                本節では、空間を「スカスカな集合の集まり」として記述できるかという観点からこの定理を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">疎集合と圏の概念</h2>

            <p>
                空間内で「どこでもスカスカ」であるような集合を、次のように定義します。
            </p>

            <ContentBox type="definition" title="Definition 9.4-1 (疎集合・第一類・第二類)">
                <p>
                    位相空間 <InlineMath math="X" /> の部分集合 <InlineMath math="A" /> に対して：
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>疎集合 (Nowhere dense set)</strong>：
                        その閉包 <InlineMath math="\overline{A}" /> の内部が空である（ <InlineMath math="\mathrm{Int}(\overline{A}) = \emptyset" /> ）こと。
                    </li>
                    <li>
                        <strong>第一類集合 (First category / Meager set)</strong>：
                        可算個の疎集合の和集合として表せる集合。
                    </li>
                    <li>
                        <strong>第二類集合 (Second category / Non-meager set)</strong>：
                        第一類でない集合。
                    </li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                直感的には、疎集合は「面に置かれた線」や「空間に置かれた平面」のように、次元が足りず中身を持たない集合を指します。
                第一類集合は、そのような「スカスカなもの」をせいぜい可算個集めただけの、やはり脆弱な集合です。
            </p>

            <ContentBox type="example" title="Example 9.4-1 (集合の類別)">
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>実数直線 <InlineMath math="\mathbb{R}" /> において、1点集合 <InlineMath math="\{x\}" /> は疎集合である。</li>
                    <li>有理数全体 <InlineMath math="\mathbb{Q}" /> は、可算個の点（疎集合）の和集合なので、第一類集合である。</li>
                    <li>しかし、次に見る通り <InlineMath math="\mathbb{R}" /> 自体は第一類にはなれません。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベール圏定理</h2>

            <p>
                完備な空間（あるいは局所コンパクトハウスドルフ空間）は、決して「スカスカなものの集合」にはなり得ない、というのがベールの発見でした。
            </p>

            <ContentBox type="theorem" title="Theorem 9.4-1 (ベール圏定理)">
                <p>
                    空でない完備距離空間 <InlineMath math="X" /> は、<strong>第二類集合</strong>である。
                </p>
                <p className="mt-4">
                    （言い換え：可算個の任意の疎な閉集合の和集合は、 <InlineMath math="X" /> 全体を覆うことはできない）
                </p>
            </ContentBox>

            <p className="mt-4">
                この定理は、完備な空間が持つ「稠密性」を保証する非常に強力な道具です。
                例えば、「ある性質を満たす点の集合が稠密である」ことを示すために頻繁に利用されます。
            </p>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    <InlineMath math="X" /> が疎な閉集合の列 <InlineMath math="F_n" /> の和集合であると仮定し、矛盾を導く。
                    <InlineMath math="F_1" /> は疎なので、その中に入らない小さな閉球 <InlineMath math="\overline{B}_1" /> がとれる。
                    次に <InlineMath math="\overline{B}_1" /> の中で <InlineMath math="F_2" /> と交わらないさらに小さな閉球 <InlineMath math="\overline{B}_2" /> をとる。
                </p>
                <p className="mt-4">
                    この操作を繰り返すと、入れ子状の閉球列 <InlineMath math="\overline{B}_1 \supset \overline{B}_2 \supset \dots" /> が得られる。
                    <InlineMath math="X" /> の完備性から、これらの共通部分は空ではなく、ある点 <InlineMath math="x" /> を含む。
                    構成法から <InlineMath math="x" /> はいかなる <InlineMath math="F_n" /> にも属さないため、和集合が <InlineMath math="X" /> に一致することに矛盾する。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用：到る処微分不可能な関数</h2>

            <p>
                ベール圏定理の最も有名な応用の一つは、解析学における「病的な存在」の証明です。
            </p>

            <ContentBox type="column" title="コラム：関数の「大部分」は微分不可能？">
                <p>
                    閉区間 <InlineMath math="[0, 1]" /> 上の連続関数全体の集合 <InlineMath math="C[0, 1]" /> は、一様距離に関して完備距離空間となります。
                    ベール圏定理を用いると、次の驚くべき事実が証明できます：
                </p>
                <p className="mt-4 italic">
                    「少なくとも一点で微分可能な関数」全体の集合は、 <InlineMath math="C[0, 1]" /> の中で第一類集合である。
                </p>
                <p className="mt-4">
                    すなわち、連続関数のほとんど全て（第二類の補集合という意味で）は、<strong>どの点においても微分不可能</strong>なのです。
                    具体例を作るのが難しい「到る処微分不可能な関数（ワイエルシュトラス関数など）」は、実は空間の中では「典型的」な存在であることをこの定理は教えてくれます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>疎集合</strong>：内部が空な閉集合のような、スカスカな集合。</li>
                    <li><strong>ベール圏定理</strong>：完備距離空間は、可算個の疎集合だけでは決して埋め尽くせない。</li>
                    <li><strong>哲学的意味</strong>：完備性は空間に「実質的な厚み」を与え、関数の存在証明などに絶大な威力を発揮する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
