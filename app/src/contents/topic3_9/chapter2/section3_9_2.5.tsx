import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SecondAndThirdIsomorphismTheorems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                第一同型定理から派生して、イデアルや部分環に関する 2 つの重要な同型定理（第二同型定理・第三同型定理）が得られます。これらも群論で学んだ同型定理と全く同じ形をしており、イデアルの足し算や、剰余環のさらなる剰余を考える際に威力を発揮します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第二同型定理</h2>

            <p>
                環 <InlineMath math="R" /> の中に「部分環 <InlineMath math="S" />」と「イデアル <InlineMath math="I" />」がある状況を考えます。この 2 つを足し合わせた集合 <InlineMath math="S + I" /> を考え、そこから <InlineMath math="I" /> を法とした剰余環を作るとどうなるか、という定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.5-1 (環の第二同型定理)">
                <p>
                    環 <InlineMath math="R" /> の部分環 <InlineMath math="S" /> とイデアル <InlineMath math="I" /> について、以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="S + I = \{ s + x \mid s \in S, x \in I \}" /> は <InlineMath math="R" /> の部分環である。</li>
                    <li><InlineMath math="I" /> は <InlineMath math="S + I" /> のイデアルである。</li>
                    <li><InlineMath math="S \cap I" /> は <InlineMath math="S" /> のイデアルである。</li>
                    <li>以下の環同型が成り立つ。<br />
                        <BlockMath math="S / (S \cap I) \cong (S + I) / I" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1, 2, 3 の性質確認は定義に従えば直ちに従う。ここでは 4 の同型を証明する。<br />
                    自然な環準同型 <InlineMath math="\phi: S \to (S + I)/I" /> を
                </p>
                <BlockMath math="\phi(s) = s + I" />
                <p>
                    で定義する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 mb-4">
                    <li><b>全射性：</b> <InlineMath math="(S + I)/I" /> の任意の元は <InlineMath math="(s + x) + I" />（<InlineMath math="s \in S, x \in I" />）の形をしているが、<InlineMath math="x \in I" /> なので <InlineMath math="(s + x) + I = s + I = \phi(s)" /> となり、全射である。</li>
                    <li><b>核：</b> <InlineMath math="\phi(s) = 0 + I \iff s + I = I \iff s \in I" />。さらに <InlineMath math="s \in S" /> であるから、<InlineMath math="\ker \phi = S \cap I" /> である。</li>
                </ul>
                <p>
                    第一同型定理 <InlineMath math="(\text{定義域} / \ker \phi \cong \text{像})" /> を適用すると、
                </p>
                <BlockMath math="S / (S \cap I) \cong (S + I) / I" />
                <p>
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-1 (Z での第二同型定理)">
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> において、<InlineMath math="I = (6)" />（6の倍数）、<InlineMath math="S = (4)" />（4の倍数）とします。<br />
                    （<InlineMath math="\mathbb{Z}" /> では任意のイデアルが部分環でもあります）。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="S + I = (4) + (6) = (2)" /></li>
                    <li><InlineMath math="S \cap I = (4) \cap (6) = (12)" /></li>
                </ul>
                <p>
                    定理の両辺を計算してみます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><b>左辺：</b> <InlineMath math="S / (S \cap I) = (4)/(12)" />。<br />4の倍数の集合を12を法として分類すると、<InlineMath math="\{0, 4, 8\}" /> の 3 つの元からなる環（同型としては <InlineMath math="\mathbb{Z}/3\mathbb{Z}" />）になります。</li>
                    <li><b>右辺：</b> <InlineMath math="(S + I) / I = (2)/(6)" />。<br />2の倍数の集合を6を法として分類すると、<InlineMath math="\{0, 2, 4\}" /> の 3 つの元からなる環（これも同型としては <InlineMath math="\mathbb{Z}/3\mathbb{Z}" />）になります。</li>
                </ul>
                <p>
                    確かに両辺の構造が一致（同型）していることが確認できます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第三同型定理</h2>

            <p>
                次は「割り算の割り算」に関する定理です。分数において <InlineMath math="(a/c) / (b/c) = a/b" /> が成り立つように、剰余環においても「同じイデアルで割る」操作を相殺することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.5-2 (環の第三同型定理)">
                <p>
                    環 <InlineMath math="R" /> の 2 つのイデアル <InlineMath math="I, J" /> が <InlineMath math="I \subset J" /> を満たすとする。このとき、以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="J/I = \{ j + I \mid j \in J \}" /> は剰余環 <InlineMath math="R/I" /> のイデアルである。</li>
                    <li>以下の環同型が成り立つ。<br />
                        <BlockMath math="(R/I) \big/ (J/I) \cong R/J" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    自然な環準同型 <InlineMath math="\phi: R/I \to R/J" /> を
                </p>
                <BlockMath math="\phi(a + I) = a + J" />
                <p>
                    で定義する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 mb-4">
                    <li><b>well-defined：</b> <InlineMath math="a + I = b + I \implies a - b \in I" />。ここで <InlineMath math="I \subset J" /> より <InlineMath math="a - b \in J" />。よって <InlineMath math="a + J = b + J" /> となり well-defined。</li>
                    <li><b>全射性：</b> 任意の <InlineMath math="a + J \in R/J" /> に対して、元の環の <InlineMath math="a" /> を用いて <InlineMath math="a + I \in R/I" /> をとれば写像の元となるため全射。</li>
                    <li><b>核：</b> <InlineMath math="\phi(a + I) = 0 + J \iff a + J = J \iff a \in J" />。<br />
                        したがって、核は <InlineMath math="\{ a + I \mid a \in J \} = J/I" /> である。
                    </li>
                </ul>
                <p>
                    第一同型定理を適用すると、<InlineMath math="(R/I) / \ker \phi \cong \mathrm{Im}(\phi)" /> より、
                </p>
                <BlockMath math="(R/I) \big/ (J/I) \cong R/J" />
                <p>
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-2 (Z での第三同型定理)">
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> において、<InlineMath math="I = (6)" />、<InlineMath math="J = (2)" /> とします。明らかに <InlineMath math="I \subset J" />（6の倍数は2の倍数に含まれる）です。
                </p>
                <p>
                    <b>定理の構成要素の確認：</b>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="R/I = \mathbb{Z}/(6) = \{0, 1, 2, 3, 4, 5\}" /> （6を法とする剰余環）</li>
                    <li><InlineMath math="J/I = (2)/(6) = \{0, 2, 4\}" /> （その中で2の倍数の剰余類。これは <InlineMath math="\mathbb{Z}/(6)" /> のイデアル）</li>
                </ul>
                <p>
                    <b>定理の主張：</b><br />
                    左辺 <InlineMath math="(R/I) \big/ (J/I)" /> は、<InlineMath math="\mathbb{Z}/(6)" /> の元をさらに <InlineMath math="\{0, 2, 4\}" /> の差を無視して（つまり2の倍数の違いを無視して）同一視することになります。
                    すると、<InlineMath math="\{0, 2, 4\} \mapsto \overline{0}" />、<InlineMath math="\{1, 3, 5\} \mapsto \overline{1}" /> となり、2 つの要素からなる環になります。
                </p>
                <p>
                    これは右辺の <InlineMath math="R/J = \mathbb{Z}/(2)" />（2を法とする剰余環）と完全に一致（同型）します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>第二同型定理</b>：部分環 <InlineMath math="S" /> とイデアル <InlineMath math="I" /> について <InlineMath math="S / (S \cap I) \cong (S + I) / I" />。</li>
                    <li><b>第三同型定理</b>：イデアルの包含 <InlineMath math="I \subset J" /> があるとき、<InlineMath math="(R/I) \big/ (J/I) \cong R/J" />。「分数のような約分」が剰余環でも成り立つ。</li>
                    <li>これらの定理はすべて、適切な準同型写像を定義して<b>第一同型定理</b>を適用することでエレガントに証明される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}