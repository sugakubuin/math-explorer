import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GroupActionDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、群という抽象的な代数系が、他の集合の要素をどのように「動かす」かという、<b>群の作用（Group Action）</b>の概念を導入します。群はもともと対称性や変換を記述するために生まれた概念であり、群が何らかの空間に作用する様子を考えることで、群の構造をより深く理解することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">左作用の定義と準同型との対応</h2>

            <p>
                まずは、群がある集合に対して「作用する」ということを厳密に定義します。ここでは、群の要素が集合の要素の左側から作用する<b>左作用</b>を中心に考えます。
            </p>

            <ContentBox type="definition" title="Definition 8.1-1 (左作用)">
                <p>
                    群 <InlineMath math="G" /> と集合 <InlineMath math="X" /> が与えられたとする。写像 <InlineMath math="G \times X \to X" />（<InlineMath math="(g, x) \mapsto g \cdot x" /> と書く）が次の 2 つの条件を満たすとき、これを <InlineMath math="G" /> の <InlineMath math="X" /> への<b>左作用（left action）</b>という。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <b>単位元の作用：</b> <InlineMath math="G" /> の単位元 <InlineMath math="e" /> に対して、すべての <InlineMath math="x \in X" /> で <InlineMath math="e \cdot x = x" /> が成り立つ。
                    </li>
                    <li>
                        <b>結合律との整合性：</b> すべての <InlineMath math="g, h \in G" /> と <InlineMath math="x \in X" /> に対して、<InlineMath math="(gh) \cdot x = g \cdot (h \cdot x)" /> が成り立つ。
                    </li>
                </ol>
            </ContentBox>

            <p>
                この定義は、群の演算（積）と集合への変換がうまく対応していることを表しています。これを具体的な写像の視点から捉え直したものが次の命題です。
            </p>

            <ContentBox type="proposition" title="Proposition 8.1-1 (作用と準同型の対応)">
                <p>
                    群 <InlineMath math="G" /> の集合 <InlineMath math="X" /> への左作用は、群 <InlineMath math="G" /> から対称群（全単射のなす群）<InlineMath math="S_X" /> への群準同型 <InlineMath math="\phi : G \to S_X" />（<InlineMath math="\phi(g)(x) = g \cdot x" />）を与えることと一対一に対応する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、各 <InlineMath math="g \in G" /> が定める写像 <InlineMath math="\phi(g) : X \to X" />（<InlineMath math="\phi(g)(x) = g \cdot x" />）が全単射であることを示す。
                </p>
                <p>
                    作用の定義より、任意の <InlineMath math="x \in X" /> に対して、
                </p>
                <BlockMath math="\begin{aligned} \phi(g^{-1})(\phi(g)(x)) &= g^{-1} \cdot (g \cdot x) = (g^{-1}g) \cdot x \\ &= e \cdot x = x \end{aligned}" />
                <p>
                    が成り立つ。同様に <InlineMath math="\phi(g)(\phi(g^{-1})(x)) = x" /> も成り立つため、<InlineMath math="\phi(g)" /> の逆写像は <InlineMath math="\phi(g^{-1})" /> であり、<InlineMath math="\phi(g)" /> は全単射である。すなわち <InlineMath math="\phi(g) \in S_X" /> である。
                </p>
                <p>
                    次に、<InlineMath math="\phi" /> が群準同型であることを示す。任意の <InlineMath math="g, h \in G" /> および <InlineMath math="x \in X" /> に対して、
                </p>
                <BlockMath math="\begin{aligned} \phi(gh)(x) &= (gh) \cdot x = g \cdot (h \cdot x) \\ &= \phi(g)(\phi(h)(x)) = (\phi(g) \circ \phi(h))(x) \end{aligned}" />
                <p>
                    となるため、写像として <InlineMath math="\phi(gh) = \phi(g) \circ \phi(h)" /> が成り立つ。よって <InlineMath math="\phi" /> は <InlineMath math="G" /> から <InlineMath math="S_X" /> への群準同型である。
                </p>
                <p>
                    逆に、準同型 <InlineMath math="\phi : G \to S_X" /> が与えられれば、<InlineMath math="g \cdot x = \phi(g)(x)" /> と定めることで作用の公理が満たされることも容易に確かめられる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この対応関係により、「群が集合に作用する」ということは、「群の元を使って集合の要素を置換（入れ替え）する規則を定める」ことと同じであると理解できます。
            </p>

            <ContentBox type="remark" title="右作用について">
                <p>
                    左作用と同様に、集合 <InlineMath math="X" /> の要素の右側から作用する<b>右作用（right action）</b>も考えることができます。右作用 <InlineMath math="x \cdot g" /> は、結合律の条件が <InlineMath math="x \cdot (gh) = (x \cdot g) \cdot h" /> となります。群論の教科書によっては左作用を標準とする場合と右作用を標準とする場合がありますが、本教材では主に左作用を扱います。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な作用の例</h2>

            <p>
                群の作用の概念をより身近にするために、いくつかの具体的な作用の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 8.1-1 (群自身の作用と線形作用)">
                <p>
                    <b>1. 左乗法作用（ケイリーの定理）：</b><br />
                    群 <InlineMath math="G" /> 自身を作用を受ける集合 <InlineMath math="X" />（つまり <InlineMath math="X = G" />）とみなします。このとき、写像 <InlineMath math="g \cdot x = gx" />（群の積）は <InlineMath math="G" /> の <InlineMath math="G" /> への左作用となります。これにより、任意の群はその位数と同じ次数の対称群の部分群とみなすことができます（ケイリーの定理）。
                </p>
                <p>
                    <b>2. 共役作用：</b><br />
                    同じく <InlineMath math="X = G" /> としたとき、<InlineMath math="g \cdot x = gxg^{-1}" /> という写像も作用の公理を満たします。これを共役作用と呼びます。
                </p>
                <p>
                    <b>3. 線形作用：</b><br />
                    一般線形群 <InlineMath math="GL_n(\mathbb{R})" /> は、列ベクトル空間 <InlineMath math="\mathbb{R}^n" /> に行列の積として作用します。すなわち <InlineMath math="A \in GL_n(\mathbb{R})" /> と <InlineMath math="\boldsymbol{x} \in \mathbb{R}^n" /> に対して <InlineMath math="A \cdot \boldsymbol{x} = A\boldsymbol{x}" /> は作用となります。
                </p>
            </ContentBox>

            <p>
                続いて、幾何学的な対象や有限集合への作用の例を紹介します。
            </p>

            <ContentBox type="example" title="Example 8.1-2 (幾何学的作用と自然な作用)">
                <p>
                    <b>1. 対称群の自然な作用：</b><br />
                    対称群 <InlineMath math="S_n" /> は、集合 <InlineMath math="X = \{1, 2, \ldots, n\}" /> に対して <InlineMath math="\sigma \cdot i = \sigma(i)" /> として自然に作用します。
                </p>
                <p>
                    <b>2. 二面体群の幾何学的作用：</b><br />
                    二面体群 <InlineMath math="D_n" /> は、正 <InlineMath math="n" /> 角形の頂点集合に幾何学的に作用します。例えば、<InlineMath math="D_4" /> の要素である <InlineMath math="90^\circ" /> 回転は、正方形の頂点 <InlineMath math="1 \to 2 \to 3 \to 4 \to 1" /> というように動かします。
                </p>
                <p>
                    <b>3. 整数群の加法作用：</b><br />
                    整数群 <InlineMath math="(\mathbb{Z}, +)" /> は、剰余群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> に対して <InlineMath math="k \cdot \bar{m} = \overline{k + m}" /> として作用します。これは巡回的なシフト操作に対応します。
                </p>
            </ContentBox>

            <p>
                これらの作用を分類するために、作用がどの程度「広く」及ぶか、あるいは「忠実」に元の構造を反映しているかを示す用語を定義します。
            </p>

            <ContentBox type="definition" title="Definition 8.1-2 (推移的作用・忠実な作用)">
                <p>
                    群 <InlineMath math="G" /> の集合 <InlineMath math="X" /> への作用について、以下の性質を定義する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b>推移的作用（transitive action）：</b> <InlineMath math="X" /> の任意の 2 要素 <InlineMath math="x, y" /> に対して、ある <InlineMath math="g \in G" /> が存在して <InlineMath math="g \cdot x = y" /> となること。つまり、群の作用で集合のどこへでも行ける状態。
                    </li>
                    <li>
                        <b>忠実な作用（faithful action）：</b> 対応する準同型 <InlineMath math="\phi : G \to S_X" /> が単射であること。これは「すべての <InlineMath math="x \in X" /> に対して <InlineMath math="g \cdot x = x" /> を満たすなら、<InlineMath math="g = e" /> である」ことと同値である。
                    </li>
                </ul>
            </ContentBox>

            <p>
                例えば、<InlineMath math="S_n" /> の <InlineMath math="\{1, \ldots, n\}" /> への作用は推移的かつ忠実です。一方、自明な作用（すべての <InlineMath math="g" /> に対して <InlineMath math="g \cdot x = x" />）は推移的でも忠実でもありません（<InlineMath math="G" /> や <InlineMath math="X" /> が自明でない場合）。
            </p>

            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>群 <InlineMath math="G" /> の集合 <InlineMath math="X" /> への左作用とは、<InlineMath math="e \cdot x = x" /> と <InlineMath math="(gh) \cdot x = g \cdot (h \cdot x)" /> を満たす写像のことである。</li>
                    <li>左作用は、群 <InlineMath math="G" /> から対称群 <InlineMath math="S_X" /> への準同型写像 <InlineMath math="\phi(g)(x) = g \cdot x" /> と一対一に対応する。</li>
                    <li>作用の例として、群自身への左乗法・共役作用、行列群のベクトルへの作用、対称群・二面体群の自然な作用などがある。</li>
                    <li>作用によって集合の任意の要素へ移れるとき、その作用は「推移的」であるという。</li>
                </ul>
            </ContentBox>
        </section>
    );
}