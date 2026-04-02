import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CorrespondenceAndChineseRemainder() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章の最後として、環の構造を理解するための 2 つの非常に重要な定理を紹介します。「対応定理」は元の環と剰余環の間のイデアルの対応関係を明らかにし、「中国剰余定理」は環をより小さな環の直積へと分解する強力な手法を与えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対応定理（第四同型定理）</h2>

            <p>
                環 <InlineMath math="R" /> をそのイデアル <InlineMath math="I" /> で割って剰余環 <InlineMath math="R/I" /> を作ると、元の環の情報はある程度「潰れて」しまいます。しかし、<InlineMath math="R/I" /> の中にあるイデアルは、実は元の環 <InlineMath math="R" /> の中の<b>「<InlineMath math="I" /> を含むイデアル」と完全に 1 対 1 で対応</b>しています。
            </p>

            <ContentBox type="theorem" title="Theorem 2.6-1 (対応定理)">
                <p>
                    環 <InlineMath math="R" /> とそのイデアル <InlineMath math="I" /> を考える。自然な全射準同型を <InlineMath math="\pi: R \to R/I \ (\pi(a) = a+I)" /> とおく。このとき、以下の 2 つの集合の間に、包含関係を保つ全単射が存在する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 mb-2">
                    <li><InlineMath math="\mathcal{A} = \{ R \text{ のイデアル } J \mid I \subset J \}" /> （<InlineMath math="I" /> を含む <InlineMath math="R" /> のイデアル全体）</li>
                    <li><InlineMath math="\mathcal{B} = \{ R/I \text{ のイデアル } \bar{J} \}" /> （剰余環 <InlineMath math="R/I" /> のイデアル全体）</li>
                </ul>
                <p>
                    この対応は、<InlineMath math="J \mapsto \pi(J) = J/I" /> および <InlineMath math="\bar{J} \mapsto \pi^{-1}(\bar{J})" /> によって与えられる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <b>1. <InlineMath math="J \in \mathcal{A}" /> ならば <InlineMath math="J/I \in \mathcal{B}" /> であること：</b><br />
                    第三同型定理の証明中で確認した通り、<InlineMath math="J" /> が <InlineMath math="I" /> を含むイデアルであれば、<InlineMath math="J/I" /> は <InlineMath math="R/I" /> のイデアルになる。
                </p>
                <p>
                    <b>2. <InlineMath math="\bar{J} \in \mathcal{B}" /> ならば <InlineMath math="\pi^{-1}(\bar{J}) \in \mathcal{A}" /> であること：</b><br />
                    <InlineMath math="K = \pi^{-1}(\bar{J})" /> とおく。<InlineMath math="K" /> がイデアルであることは、環準同型 <InlineMath math="\pi" /> によるイデアルの逆像がイデアルになるという一般論から従う。<br />
                    また、<InlineMath math="R/I" /> の零元 <InlineMath math="\bar{0} = I" /> は必ずイデアル <InlineMath math="\bar{J}" /> に含まれるため、<InlineMath math="\pi(x) \in \bar{J}" /> を満たす <InlineMath math="x" /> 全体である <InlineMath math="K" /> には、<InlineMath math="\pi(x) = \bar{0}" /> となる要素全体（つまり <InlineMath math="\ker \pi = I" />）が必ず含まれる。よって <InlineMath math="I \subset K" /> であり、<InlineMath math="K \in \mathcal{A}" /> である。
                </p>
                <p>
                    <b>3. 全単射であること：</b><br />
                    互いに逆写像であることを確認する。<InlineMath math="\pi^{-1}(\pi(J)) = J" /> と <InlineMath math="\pi(\pi^{-1}(\bar{J})) = \bar{J}" /> が成り立つことの確認は、包含関係の定義から直接示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、次章で学ぶ「素イデアル」や「極大イデアル」の性質を剰余環に移して考えるための非常に重要な道具となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">互いに素なイデアルと中国剰余定理</h2>

            <p>
                整数論の「中国剰余定理（CRT）」は、「互いに素な <InlineMath math="m, n" /> について、<InlineMath math="m" /> で割った余りと <InlineMath math="n" /> で割った余りを指定すれば、<InlineMath math="mn" /> で割った余りが一意に定まる（<InlineMath math="\mathbb{Z}/mn\mathbb{Z} \cong \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}" />）」というものでした。これを一般の環とイデアルに対して拡張します。
            </p>

            <ContentBox type="definition" title="Definition 2.6-1 (互いに素なイデアル)">
                <p>
                    可換環 <InlineMath math="R" /> の 2 つのイデアル <InlineMath math="A, B" /> が<b>互いに素（coprime / comaximal）</b>であるとは、
                </p>
                <BlockMath math="A + B = R" />
                <p>
                    が成立することである。
                </p>
            </ContentBox>

            <p>
                「和が全体 <InlineMath math="R" /> になる」ことは、とくに単位元 <InlineMath math="1_R" /> が和の形で書ける、すなわち <b><InlineMath math="1_R = a + b \ (a \in A, b \in B)" /></b> と書けることと同値です。これは整数で <InlineMath math="\gcd(m, n)=1" /> のとき <InlineMath math="mx + ny = 1" /> となる（ベズーの等式）ことの直接の一般化です。
            </p>

            <ContentBox type="lemma" title="Lemma 2.6-1 (互いに素なイデアルの積と共通部分)">
                <p>
                    <InlineMath math="A" /> と <InlineMath math="B" /> が互いに素ならば、<InlineMath math="A \cap B = AB" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="AB \subset A \cap B" /> は常に成立する（§2.2 で確認済）。逆の包含 <InlineMath math="A \cap B \subset AB" /> を示す。
                </p>
                <p>
                    <InlineMath math="A + B = R" /> より、<InlineMath math="1 = a + b \ (a \in A, b \in B)" /> と書ける。任意の <InlineMath math="x \in A \cap B" /> をとると、
                </p>
                <BlockMath math="x = x \cdot 1 = x(a + b) = xa + xb" />
                <p>
                    ここで、<InlineMath math="xa" /> については <InlineMath math="x \in B, a \in A" /> なので <InlineMath math="xa \in AB" />（可換性を利用）。<br />
                    <InlineMath math="xb" /> については <InlineMath math="x \in A, b \in B" /> なので <InlineMath math="xb \in AB" />。<br />
                    よって <InlineMath math="x = xa + xb \in AB" /> となり、<InlineMath math="A \cap B \subset AB" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.6-2 (中国剰余定理：Chinese Remainder Theorem)">
                <p>
                    可換環 <InlineMath math="R" /> のイデアル <InlineMath math="I_1, I_2, \dots, I_n" /> がどの 2 つも互いに素（<InlineMath math="i \neq j" /> ならば <InlineMath math="I_i + I_j = R" />）であるとする。このとき、以下の環同型が成り立つ。
                </p>
                <BlockMath math="R / (I_1 \cap I_2 \cap \dots \cap I_n) \cong R/I_1 \times R/I_2 \times \dots \times R/I_n" />
                <p>
                    とくに、積と共通部分が一致するため、左辺は <InlineMath math="R / (I_1 I_2 \dots I_n)" /> とも書ける。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="n = 2" /> の場合を示す（一般の <InlineMath math="n" /> は数学的帰納法による）。<br />
                    <InlineMath math="A, B" /> を互いに素なイデアルとし、写像 <InlineMath math="\phi: R \to R/A \times R/B" /> を
                </p>
                <BlockMath math="\phi(x) = (x + A, x + B)" />
                <p>
                    で定義する。これが全射であることを示せば、第一同型定理から証明が完了する（核が <InlineMath math="A \cap B" /> であることは定義から明らか）。
                </p>
                <p>
                    <InlineMath math="A + B = R" /> より <InlineMath math="1 = a + b \ (a \in A, b \in B)" /> と書ける。このとき、
                </p>
                <ul className="list-disc list-inside space-y-1 mt-1 mb-2">
                    <li><InlineMath math="a = 1 - b \in 1 + B" /> より、<InlineMath math="\phi(a) = (a+A, a+B) = (0, 1)" /></li>
                    <li><InlineMath math="b = 1 - a \in 1 + A" /> より、<InlineMath math="\phi(b) = (b+A, b+B) = (1, 0)" /></li>
                </ul>
                <p>
                    任意の目標 <InlineMath math="(u+A, v+B) \in R/A \times R/B" /> に対して、<InlineMath math="x = ub + va" /> とおくと、
                </p>
                <BlockMath math="\phi(x) = u\phi(b) + v\phi(a) = u(1,0) + v(0,1) = (u,v)" />
                <p>
                    となり全射である。よって第一同型定理より <InlineMath math="R/(A \cap B) \cong R/A \times R/B" />。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.6-1 (連立合同式としての応用)">
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> において、<InlineMath math="I_1 = (3)" />、<InlineMath math="I_2 = (5)" /> とします。<InlineMath math="(3) + (5) = \mathbb{Z}" /> なので互いに素です。定理より
                </p>
                <BlockMath math="\mathbb{Z}/(15) \cong \mathbb{Z}/(3) \times \mathbb{Z}/(5)" />
                <p>
                    が成り立ちます。これは、例えば「3で割って2余り、5で割って3余る数（<InlineMath math="x \equiv 2 \pmod 3" /> かつ <InlineMath math="x \equiv 3 \pmod 5" />）」が、<InlineMath math="15" /> を法として一意に定まる（この場合は <InlineMath math="x \equiv 8 \pmod{15}" />）という事実を、環の同型として表現したものです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>対応定理</b>：剰余環 <InlineMath math="R/I" /> のイデアルは、元の環 <InlineMath math="R" /> における「<InlineMath math="I" /> を含むイデアル」と 1 対 1 に対応する。</li>
                    <li><b>中国剰余定理</b>：互いに素（<InlineMath math="I+J=R" />）なイデアルについて、その共通部分による剰余環は、それぞれの剰余環の直積と同型になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}