import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EquivalenceClassesAndQuotientSets() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では同値関係の定義を学びました。同値関係があるとき、互いに「同じ集合」とみなせる元を一括りにまとめて、それを新しい「元」として扱うことができます。
                この操作によって得られるのが<strong>同値類</strong>であり、それらをすべて集めたものが<strong>商集合</strong>です。
                商集合の概念は、複雑な対象から本質的な構造だけを取り出すための、数学における最も重要なフィルターのような役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同値類の定義と基本性質</h2>

            <p>
                まずは、一つの元 <InlineMath math="a" /> に対して、それと同値なものをすべて集めたグループを定義しましょう。
            </p>

            <ContentBox type="definition" title="Definition 3.3-1 (同値類)">
                <p>
                    集合 <InlineMath math="A" /> 上の同値関係 <InlineMath math="\sim" /> と、元 <InlineMath math="a \in A" /> に対して、
                    <BlockMath math="[a] = \{ x \in A \mid x \sim a \}" />
                    を <InlineMath math="a" /> を代表元とする<strong>同値類（Equivalence Class）</strong>という。<InlineMath math="C(a)" /> や <InlineMath math="\bar{a}" /> とも書かれる。
                </p>
            </ContentBox>

            <p className="mt-4">
                同値類には、非常にクリーンな性質があります。「重なっているか、完全に離れているか」のどちらかしかないのです。
            </p>

            <ContentBox type="theorem" title="Proposition 3.3-1 (同値類の基本性質)">
                <p>
                    同値関係 <InlineMath math="\sim" /> において、以下の3条件は互いに同値である。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="a \sim b" /></li>
                    <li><InlineMath math="[a] = [b]" /></li>
                    <li><InlineMath math="[a] \cap [b] \neq \emptyset" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="\implies" /> (2) を示す。<InlineMath math="x \in [a]" /> とすると <InlineMath math="x \sim a" />。仮定 <InlineMath math="a \sim b" /> と推移律より <InlineMath math="x \sim b" /> なので <InlineMath math="x \in [b]" />。逆も同様に示せる。<br />
                    (2) <InlineMath math="\implies" /> (3) は、反射律より <InlineMath math="a \in [a]" /> なので、<InlineMath math="a \in [a] \cap [b]" /> となり明らか。<br />
                    (3) <InlineMath math="\implies" /> (1) を示す。<InlineMath math="c \in [a] \cap [b]" /> とすると、<InlineMath math="c \sim a" /> かつ <InlineMath math="c \sim b" />。対称律より <InlineMath math="a \sim c" /> なので、推移律より <InlineMath math="a \sim b" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">商集合と分割</h2>

            <p>
                同値類を一つの元として集めた新しい集合を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.3-2 (商集合)">
                <p>
                    同値類全体の集合
                    <BlockMath math="A/{\sim} = \{ [a] \mid a \in A \}" />
                    を、<InlineMath math="A" /> の <InlineMath math="\sim" /> による<strong>商集合（Quotient Set）</strong>という。
                </p>
            </ContentBox>

            <p className="mt-4">
                Proposition 3.3-1 からわかるように、商集合は元の集合 <InlineMath math="A" /> を「隙間なく、かつ重なりなく」いくつかのブロックに切り分けたものになっています。これを数学用語で<strong>分割</strong>と呼びます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (同値関係と分割の対応)">
                <p>
                    集合 <InlineMath math="A" /> 上の同値関係を与えることと、<InlineMath math="A" /> の分割 <InlineMath math="\mathcal{D}" />（互いに素な部分集合の族で、その合併が <InlineMath math="A" /> となるもの）を与えることは、一対一に対応する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="数体系の構成への応用">
                <p>
                    商集合は、新しい「数」を厳密に作り出す際に不可欠な道具です。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>整数の構成：</strong> 自然数のペア <InlineMath math="(a, b)" /> に対して「<InlineMath math="a+d = b+c" />」という同値関係（直感的には <InlineMath math="a-b" />）を定義し、その商集合として整数 <InlineMath math="\mathbb{Z}" /> を定式化します。
                    </li>
                    <li>
                        <strong>有理数の構成：</strong> 前節で見ましたが、整数のペアに対する同値関係の商集合として有理数 <InlineMath math="\mathbb{Q}" /> が定義されます。
                    </li>
                </ul>
                <p className="mt-4">
                    私たちが普段当たり前のように使っている「数」も、集合論の立場からは<strong>「ある基準で同一視されたグループそのもの」</strong>として捉えられるのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>同値類 <InlineMath math="[a]" /></strong> は、<InlineMath math="a" /> と同値なものをすべて集めた集合である。</li>
                    <li><strong>商集合 <InlineMath math="A/{\sim}" /></strong> は、同値類を元として持つ集合であり、元の集合を「同一視」によって圧縮したものである。</li>
                    <li>集合上の同値関係は、その集合の一つの<strong>分割</strong>を定める。</li>
                    <li>商集合のテクニックを使うことで、整数や有理数といった新しい数体系を論理的に構成できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
