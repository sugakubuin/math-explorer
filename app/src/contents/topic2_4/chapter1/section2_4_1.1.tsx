import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SetDefinitionsAndNotations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                現代数学のほぼすべての分野は、その基礎を「集合論」の上に置いています。解析学における実数の構成や、代数学における群や環なども、究極的には「集合」と「写像」の言葉で明確に定義されます。
                本章から始まる「Topic 2-4: 素朴集合論」では、数学全体の言語としての集合論のルールを学びます。まずは最も基本的な定義と表記法から確認しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">集合の定義と表記法</h2>

            <p>
                「集合」とは、直感的には「ものの集まり」のことですが、その集まりを構成する要素が明確に特定できなければ数学の対象になりません。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (集合・元・内包的記法・外延的記法)">
                <p>
                    <span className="font-bold">集合（Set）</span>とは、ある条件を満たす対象の明確な集まりのことである。集合を構成する一つ一つの対象をその集合の<span className="font-bold">元（要素, Element）</span>と呼ぶ。
                </p>
                <p className="mt-4">
                    対象 <InlineMath math="x" /> が集合 <InlineMath math="A" /> の元であることを
                </p>
                <BlockMath math="x \in A" />
                <p>
                    と書き、<InlineMath math="x" /> は <InlineMath math="A" /> に<strong>属する</strong>という。元でない場合は <InlineMath math="x \notin A" /> と書く。
                </p>

                <h3 className="text-lg font-bold mt-6 mb-2">集合の2つの表記法</h3>
                <ol className="list-decimal list-inside space-y-4 ml-2">
                    <li>
                        <strong>外延的記法（Extensional Notation）</strong><br />
                        属するすべての元を直接列挙する方法。<br />
                        例: <InlineMath math="A = \{1, 2, 3, 4, 5\}" />
                    </li>
                    <li>
                        <strong>内包的記法（Intensional Notation / Set-builder Notation）</strong><br />
                        元が満たすべき条件（命題関数 <InlineMath math="P(x)" />）を明記して定義する方法。<br />
                        <BlockMath math="A = \{ x \mid P(x) \}" />
                        （「<InlineMath math="P(x)" /> が真となるようなすべての <InlineMath math="x" /> の集まり」を意味する。縦線の代わりにコロン <InlineMath math=":" /> も使われる。）<br />
                        例: <InlineMath math="A = \{ x \in \mathbb{N} \mid x \leq 5 \}" />
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特別な集合：空集合</h2>

            <p>
                数字における「0」が重要な発見であったように、集合論においても「何も含まない集まり」を考えることは不可欠です。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (空集合)">
                <p>
                    元を一つも持たない集合を<strong>空集合（Empty Set）</strong>と呼び、<InlineMath math="\emptyset" /> で表す。
                </p>
                <p className="mt-4">
                    内包的記法では、恒偽命題を用いて <InlineMath math="\emptyset = \{ x \mid x \neq x \}" /> などと定義される。
                </p>
            </ContentBox>

            <p className="mt-4">
                「何もない」という状態を一つの対象として扱うのは奇妙に思えるかもしれませんが、空集合は数学の体系を構築する上で「0」のような役割を果たす極めて重要な存在です。さらに、この空集合は世界にたった一つしか存在しないことが証明できます。
            </p>

            <ContentBox type="theorem" title="Proposition 1.1-1 (空集合の一意性)">
                <p>
                    元を全く持たない集合は、ただ1つしか存在しない。（したがって「ある空集合」ではなく「空集合」という定冠詞付きの呼び方が正当化される）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    2つの空集合 <InlineMath math="E_1, E_2" /> が存在したと仮定する。集合が等しいことは「互いに同じ元を持つこと」と同義である。<br />
                    もし <InlineMath math="E_1 \neq E_2" /> だとすれば、一方に属して他方に属さない元 <InlineMath math="x" /> が存在しなければならない。しかし <InlineMath math="E_1" /> も <InlineMath math="E_2" /> も元を一つも持たないという定義と矛盾する。<br />
                    したがって <InlineMath math="E_1 = E_2" /> でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">包含関係と集合の相等</h2>

            <p>
                2つの集合の関係性を比べる際に最も基本的なのが「すっぽり収まっているか（部分集合）」と「完全に同じか（相等）」の概念です。
            </p>

            <ContentBox type="definition" title="Definition 1.1-3 (部分集合・包含関係)">
                <p>
                    2つの集合 <InlineMath math="A, B" /> について、<InlineMath math="A" /> のすべての元が <InlineMath math="B" /> の元でもあるとき、すなわち
                </p>
                <BlockMath math="\forall x (x \in A \implies x \in B)" />
                <p>
                    が成り立つとき、<InlineMath math="A" /> は <InlineMath math="B" /> の<strong>部分集合（Subset）</strong>であるといい、
                </p>
                <BlockMath math="A \subset B" />
                <p>
                    （または <InlineMath math="B \supset A" />）と書く。<InlineMath math="A" /> は <InlineMath math="B" /> に<strong>含まれる（包含される）</strong>とも表現する。
                </p>
                <p className="mt-4">
                    ※ 空集合 <InlineMath math="\emptyset" /> は、任意の集合 <InlineMath math="A" /> の部分集合である（<InlineMath math="\forall x (x \in \emptyset \implies x \in A)" /> において、前提が常に偽であるため命題全体は常に真となるため）。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Proposition 1.1-2 (集合の相等)">
                <p>
                    2つの集合 <InlineMath math="A" /> と <InlineMath math="B" /> が等しい（<InlineMath math="A = B" />）ための必要十分条件は、各々が互いの部分集合であることである。
                </p>
                <BlockMath math="A = B \iff (A \subset B \text{ かつ } B \subset A)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    集合が等しい（<InlineMath math="A = B" />）ということは、外延性の公理より「<InlineMath math="A" /> と <InlineMath math="B" /> が全く同じ元を持つ」ことと同値である。<br />
                    「<InlineMath math="A" /> の任意の元が <InlineMath math="B" /> の元でもある」ことは <InlineMath math="A \subset B" /> の定義に他ならず、「<InlineMath math="B" /> の任意の元が <InlineMath math="A" /> の元でもある」ことは <InlineMath math="B \subset A" /> の定義に他ならない。<br />
                    したがって、両者が同じ元を持つことは、<InlineMath math="A \subset B" /> かつ <InlineMath math="B \subset A" /> であることと同値である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="記法の注意：元の帰属と集合の包含の混同">
                <p>
                    数学を学ぶ上で最初に陥りやすい混乱が、<InlineMath math="\in" />（属する・元の帰属）と <InlineMath math="\subset" />（含まれる・集合の包含）の混同です。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <InlineMath math="x \in A" /> は、「左辺」が「右辺を構成する<strong>要素そのもの</strong>」である関係です。<br />
                        （例：<InlineMath math="1 \in \{1, 2, 3\}" /> は正しい）
                    </li>
                    <li>
                        <InlineMath math="A \subset B" /> は、「左辺」と「右辺」が<strong>どちらも集合</strong>であり、「左辺が入っている袋」の中身の全てが「右辺の袋」にも入っている関係です。<br />
                        （例：<InlineMath math="1 \subset \{1, 2, 3\}" /> は間違い。<InlineMath math="\{1\} \subset \{1, 2, 3\}" /> なら正しい）
                    </li>
                </ul>
                <p className="mt-4">
                    特に、集合を元として持つ集合（例：<InlineMath math="X = \{ 1, \{2\} \}" />）を考える際、<br />
                    <InlineMath math="\{2\} \in X" /> は真ですが、<InlineMath math="\{2\} \subset X" /> は偽（<InlineMath math="X" /> は <InlineMath math="2" /> という元を持っていないため）となります。両者の役割を明確に区別することが素朴集合論の第一歩です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>集合は外延的記法（列挙）か内包的記法（条件記述 <InlineMath math="\{x \mid P(x)\}" />）によって定義される。</li>
                    <li>元を全く持たない集合は唯一つ存在し、空集合 <InlineMath math="\emptyset" /> と呼ばれる。</li>
                    <li>2つの集合が等しい（<InlineMath math="A=B" />）ことを証明するには、<InlineMath math="A \subset B" /> と <InlineMath math="B \subset A" /> を別々に示すのが標準的な手法である。</li>
                    <li>元であること（<InlineMath math="\in" />）と部分集合であること（<InlineMath math="\subset" />）を厳密に区別しなければならない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
