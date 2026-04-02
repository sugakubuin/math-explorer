import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AscendingChainCondition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、環のイデアルに関する重要な性質である「昇鎖条件（ACC）」について学びます。この条件は、イデアルが際限なく真に拡大し続けることがないという性質であり、後の節で学ぶ「ネーター環」の概念の基礎となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">昇鎖条件の定義と同値条件</h2>

            <p>
                まずは、昇鎖条件の厳密な定義とその同値条件について見ていきましょう。
            </p>

            <ContentBox type="definition" title="Definition 9.1-1 (昇鎖条件（ACC）)">
                <p>
                    環 <InlineMath math="R" /> がイデアルに関する<strong>昇鎖条件（Ascending Chain Condition, ACC）</strong>を満たすとは、イデアルの増大列
                </p>
                <BlockMath math="I_1 \subset I_2 \subset \cdots" />
                <p>
                    が常に有限で停止することである。すなわち、ある整数 <InlineMath math="N" /> が存在して、<InlineMath math="n \geq N" /> ならば <InlineMath math="I_n = I_N" /> となることである。
                </p>
            </ContentBox>

            <p>
                昇鎖条件を満たすことは、環のすべてのイデアルが「有限生成」であることと同値になります。この事実は非常に重要です。
            </p>

            <ContentBox type="proposition" title="Proposition 9.1-1 (ACC と有限生成の同値)">
                <p>
                    可換環 <InlineMath math="R" /> について、以下の2つは同値である。
                </p>
                <ol className="list-decimal list-inside">
                    <li><InlineMath math="R" /> のすべてのイデアルが有限生成である。</li>
                    <li><InlineMath math="R" /> において ACC が成立する。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （<InlineMath math="\Rightarrow" />）ACC の列 <InlineMath math="I_1 \subset I_2 \subset \cdots" /> を考える。その和集合 <InlineMath math="I = \bigcup_{n=1}^\infty I_n" /> も <InlineMath math="R" /> のイデアルとなる。仮定より <InlineMath math="I" /> は有限生成だから、ある有限個の元 <InlineMath math="a_1, \ldots, a_k \in I" /> を用いて <InlineMath math="I = (a_1, \ldots, a_k)" /> と書ける。各 <InlineMath math="a_i" /> はある <InlineMath math="I_{N_i}" /> に属するので、<InlineMath math="N = \max(N_1, \ldots, N_k)" /> とおけば、すべての <InlineMath math="a_i" /> は <InlineMath math="I_N" /> に属する。したがって、<InlineMath math="I \subset I_N" /> となり、<InlineMath math="I_N \subset I" /> と合わせて <InlineMath math="I = I_N" /> が得られる。ゆえに、<InlineMath math="n \geq N" /> ならば <InlineMath math="I_n = I_N" /> となり ACC が成立する。
                </p>
                <p>
                    （<InlineMath math="\Leftarrow" />）<InlineMath math="R" /> に有限生成でないイデアル <InlineMath math="I" /> が存在すると仮定する。<InlineMath math="a_1 \in I" /> を選び、<InlineMath math="I_1 = (a_1)" /> とする。<InlineMath math="I" /> は有限生成ではないので、<InlineMath math="I_1 \subsetneq I" /> である。よって <InlineMath math="a_2 \in I \setminus I_1" /> を選び、<InlineMath math="I_2 = (a_1, a_2)" /> とできる。同様に続けていくと、<InlineMath math="I_1 \subsetneq I_2 \subsetneq I_3 \subsetneq \cdots" /> という止まらない昇鎖を構成でき、これは ACC に矛盾する。したがって、すべてのイデアルは有限生成である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                身近な環である整数環において、この条件がどのように成り立つかを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 9.1-1 (Z は ACC を満たす)">
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> におけるイデアルの包含関係 <InlineMath math="(n_1) \subset (n_2) \subset \cdots" /> は、整数の割り切り関係 <InlineMath math="n_1 \mid n_2 \mid \cdots" /> と同値である。正の整数の割り切られる降下列は有限で停止するため、昇鎖も有限で停止する。
                </p>
                <p>
                    例えば、以下のような列を考える。
                </p>
                <BlockMath math="(12) \subset (6) \subset (3) \subset (1) = \mathbb{Z}" />
                <p>
                    これはこれ以上真に拡大することはなく、ここで停止する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ACC の非例</h2>

            <p>
                すべての環が昇鎖条件を満たすわけではありません。変数が無限個あるような多項式環を考えてみましょう。
            </p>

            <ContentBox type="example" title="Example 9.1-2 (無限変数多項式環は ACC を満たさない)">
                <p>
                    無限変数多項式環 <InlineMath math="\mathbb{Z}[x_1, x_2, \ldots]" /> を考える。このとき、次のようなイデアルの列を構成できる。
                </p>
                <BlockMath math="(x_1) \subsetneq (x_1, x_2) \subsetneq (x_1, x_2, x_3) \subsetneq \cdots" />
                <p>
                    各ステップで新しい変数が生成元に加わるため、この昇鎖は決して停止しない。したがって、この環は ACC を満たさない。
                </p>
            </ContentBox>

            <p>
                このように、変数が無限にあるような巨大な環では昇鎖条件が成り立たないことがあります。昇鎖条件が成り立つ環には特別な名前が付けられており、それが次節で学ぶ「ネーター環」です。
            </p>

            <ContentBox type="remark" title="Remark (ACC の重要性)">
                <p>
                    環論や代数幾何学の多くの定理は、「すべてのイデアルが有限生成である」という条件を前提としています。このような性質を持つ環においてのみ成り立つ強力な定理が多数存在します。次節以降で学ぶヒルベルトの基底定理は、その代表的な例と言えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§9.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>昇鎖条件（ACC）とは、イデアルの増大列 <InlineMath math="I_1 \subset I_2 \subset \cdots" /> が必ず有限で停止することである。</li>
                    <li>可換環において、「ACC が成立する」ことと「すべてのイデアルが有限生成である」ことは同値である。</li>
                    <li><InlineMath math="\mathbb{Z}" /> は ACC を満たすが、無限変数多項式環は ACC を満たさない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
