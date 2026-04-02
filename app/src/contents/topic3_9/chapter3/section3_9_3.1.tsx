import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PrimeIdeals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                イデアルは部分環としての性質を持つだけでなく、整数論における「数」の拡張として捉えることができます。本節では、素数に相当する性質を持つ「素イデアル」について学びます。素イデアルは、環を剰余環で割ったときに整域となるような特別なイデアルです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素イデアルの定義と特徴づけ</h2>

            <p className="leading-relaxed">
                整数環において、素数 <InlineMath math="p" /> の倍数が満たす重要な性質として「積 <InlineMath math="ab" /> が <InlineMath math="p" /> の倍数ならば、<InlineMath math="a" /> または <InlineMath math="b" /> の少なくとも一方が <InlineMath math="p" /> の倍数である」というものがあります。これをイデアルの言葉で一般化したものが素イデアルです。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (素イデアル)">
                <p>
                    可換環 <InlineMath math="R" /> の真のイデアル <InlineMath math="P \subsetneq R" /> が<b>素イデアル（prime ideal）</b>であるとは、任意の <InlineMath math="a, b \in R" /> に対して
                </p>
                <BlockMath math="ab \in P \implies a \in P \text{ または } b \in P" />
                <p>
                    が成立することである。これは同値に、剰余環 <InlineMath math="R/P" /> が整域であることとも言い換えられる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                定義の後半にある「剰余環が整域になる」という条件について、実際に同値であることを命題として確認しましょう。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-1 (素イデアルと剰余環の整域性)">
                <p>
                    可換環 <InlineMath math="R" /> の真のイデアル <InlineMath math="P" /> について、以下は同値である。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="P" /> が素イデアルである。</li>
                    <li>剰余環 <InlineMath math="R/P" /> が整域である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    剰余環 <InlineMath math="R/P" /> における元を <InlineMath math="\overline{a} = a + P" /> などと表す。
                </p>
                <p>
                    <InlineMath math="(\implies)" /> <InlineMath math="P" /> が素イデアルであるとする。<InlineMath math="R/P" /> の2つの元 <InlineMath math="\overline{a}, \overline{b}" /> について、<InlineMath math="\overline{a}\overline{b} = \overline{0}" /> と仮定する。これは <InlineMath math="R" /> において <InlineMath math="ab \in P" /> であることを意味する。<InlineMath math="P" /> は素イデアルであるから、<InlineMath math="a \in P" /> または <InlineMath math="b \in P" /> となる。よって <InlineMath math="\overline{a} = \overline{0}" /> または <InlineMath math="\overline{b} = \overline{0}" /> となり、<InlineMath math="R/P" /> は零因子を持たない。また、<InlineMath math="P \subsetneq R" /> より <InlineMath math="\overline{1} \neq \overline{0}" /> であるため、<InlineMath math="R/P" /> は整域である。
                </p>
                <p>
                    <InlineMath math="(\impliedby)" /> 逆に <InlineMath math="R/P" /> が整域であるとする。<InlineMath math="a, b \in R" /> が <InlineMath math="ab \in P" /> を満たすとする。このとき <InlineMath math="R/P" /> において <InlineMath math="\overline{ab} = \overline{a}\overline{b} = \overline{0}" /> となる。<InlineMath math="R/P" /> は整域であるから、<InlineMath math="\overline{a} = \overline{0}" /> または <InlineMath math="\overline{b} = \overline{0}" /> が成り立つ。すなわち <InlineMath math="a \in P" /> または <InlineMath math="b \in P" /> であり、<InlineMath math="P" /> は素イデアルである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                素イデアルの概念を、身近な整数環で具体的に確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-1 (整数環の素イデアル)">
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> において、イデアル <InlineMath math="(p)" />（<InlineMath math="p" /> は素数）は素イデアルである。なぜなら、<InlineMath math="ab \in (p)" /> とは <InlineMath math="ab" /> が <InlineMath math="p" /> の倍数であることを意味し、素数の性質から <InlineMath math="a" /> または <InlineMath math="b" /> が <InlineMath math="p" /> の倍数となるからである。このとき、剰余環 <InlineMath math="\mathbb{Z}/(p) \cong \mathbb{Z}/p\mathbb{Z}" /> は整域（さらに体）となる。
                </p>
                <p>
                    一方、<InlineMath math="(4)" /> は素イデアルではない。実際、<InlineMath math="2 \cdot 2 = 4 \in (4)" /> であるが、<InlineMath math="2 \notin (4)" /> だからである。このとき <InlineMath math="\mathbb{Z}/4\mathbb{Z}" /> は <InlineMath math="\overline{2} \cdot \overline{2} = \overline{0}" /> となり零因子を持つため整域ではない。
                </p>
                <p>
                    また、零イデアル <InlineMath math="(0) = \{0\}" /> も素イデアルである。これは <InlineMath math="ab = 0" /> ならば <InlineMath math="a = 0" /> または <InlineMath math="b = 0" />（つまり <InlineMath math="\mathbb{Z}" /> が整域であること）と同値である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">イデアルの積と素イデアルの関係</h2>

            <p className="leading-relaxed">
                素イデアルの条件は、要素の積だけでなく「イデアルの積」に対しても同様の性質を引き起こします。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-2 (素イデアルとイデアル積)">
                <p>
                    可換環 <InlineMath math="R" /> の素イデアル <InlineMath math="P" /> に対して、2つのイデアル <InlineMath math="I, J" /> が <InlineMath math="IJ \subset P" /> を満たすならば、<InlineMath math="I \subset P" /> または <InlineMath math="J \subset P" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="I \not\subset P" /> であると仮定して、<InlineMath math="J \subset P" /> が導かれることを示す。
                </p>
                <p>
                    仮定より、<InlineMath math="a \in I \setminus P" /> となる元 <InlineMath math="a" /> が存在する。任意の <InlineMath math="b \in J" /> をとる。<InlineMath math="ab" /> はイデアルの積の元であるから <InlineMath math="ab \in IJ" /> であり、<InlineMath math="IJ \subset P" /> より <InlineMath math="ab \in P" /> となる。
                </p>
                <p>
                    <InlineMath math="P" /> は素イデアルであるから、<InlineMath math="ab \in P" /> より <InlineMath math="a \in P" /> または <InlineMath math="b \in P" /> が成り立つ。しかし、<InlineMath math="a \notin P" /> と選んでいたため、<InlineMath math="b \in P" /> でなければならない。
                </p>
                <p>
                    <InlineMath math="b" /> は <InlineMath math="J" /> の任意の元であったから、<InlineMath math="J \subset P" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この命題も、整数環の例で考えてみると自然な事実であることがわかります。
            </p>

            <ContentBox type="example" title="Example 3.1-2 (素イデアルとイデアル積の具体例)">
                <p>
                    <InlineMath math="\mathbb{Z}" /> において、素イデアルを <InlineMath math="P = (3)" /> とする。イデアルを <InlineMath math="I = (6)" />、<InlineMath math="J = (15)" /> とすると、イデアルの積は
                </p>
                <BlockMath math="IJ = (6)(15) = (90)" />
                <p>
                    となる。<InlineMath math="90" /> は <InlineMath math="3" /> の倍数であるから、<InlineMath math="(90) \subset (3)" />、すなわち <InlineMath math="IJ \subset P" /> を満たしている。
                </p>
                <p>
                    このとき、<InlineMath math="I = (6) \subset (3) = P" /> と <InlineMath math="J = (15) \subset (3) = P" /> の両方が成り立っている（命題の結論を満たす）。もし <InlineMath math="J = (10)" /> だった場合は <InlineMath math="IJ = (60) \subset (3)" /> となるが、このときは <InlineMath math="J \not\subset P" /> であり <InlineMath math="I = (6) \subset P" /> のみが成立する。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>可換環 <InlineMath math="R" /> の真のイデアル <InlineMath math="P" /> は、<InlineMath math="ab \in P \implies a \in P" /> または <InlineMath math="b \in P" /> を満たすとき素イデアルと呼ばれる。</li>
                    <li><InlineMath math="P" /> が素イデアルであることと、剰余環 <InlineMath math="R/P" /> が整域であることは同値である。</li>
                    <li>素イデアル <InlineMath math="P" /> に対して <InlineMath math="IJ \subset P" /> ならば、<InlineMath math="I \subset P" /> または <InlineMath math="J \subset P" /> が成り立つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
