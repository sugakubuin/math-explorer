import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PowerSetsAndCartesianProducts() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                集合演算に続いて、「与えられた集合を元にして、さらに豊かな構造を持つ新しい集合を生み出す」2つの強力な操作を定義します。それらが<strong>べき集合（Power Set）</strong>と<strong>直積集合（Cartesian Product）</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">べき集合</h2>

            <p>
                ある集合の「すべての部分集合」を、まるごと一つ一つの要素（元）として入れておく新しい袋を作る操作です。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (べき集合)">
                <p>
                    集合 <InlineMath math="A" /> の部分集合全体の集合を <InlineMath math="A" /> の<strong>べき集合（Power Set）</strong>と呼び、<InlineMath math="\mathcal{P}(A)" /> や <InlineMath math="2^A" /> で表す。
                </p>
                <BlockMath math="\mathcal{P}(A) = \{ X \mid X \subset A \}" />
                <p className="mt-4">
                    ※ したがって、<InlineMath math="X \in \mathcal{P}(A)" /> であることは、<InlineMath math="X \subset A" /> であることと同値である。<br />
                    また、空集合 <InlineMath math="\emptyset" /> と全体 <InlineMath math="A" /> は常に <InlineMath math="A" /> の部分集合であるため、必ず <InlineMath math="\emptyset \in \mathcal{P}(A)" /> および <InlineMath math="A \in \mathcal{P}(A)" /> となる。
                </p>
            </ContentBox>

            <p className="mt-4">
                べき集合の内容を具体的にイメージするために、元を2つだけ持つ非常にシンプルな集合で考えてみましょう。部分集合を「一組も漏らさず」集めるのがポイントです。
            </p>

            <ContentBox type="example" title="Example 1.3-1 (有限集合のべき集合)">
                <p>
                    <InlineMath math="A = \{ 1, 2 \}" /> とする。
                </p>
                <p className="mt-4">
                    <InlineMath math="A" /> の部分集合は以下の4つである。
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>元を0個含む部分集合: <InlineMath math="\emptyset" /></li>
                    <li>元を1個含む部分集合: <InlineMath math="\{1\}, \{2\}" /></li>
                    <li>元を2個含む部分集合: <InlineMath math="\{1, 2\}" /></li>
                </ul>
                <p className="mt-4">
                    したがって、<InlineMath math="\mathcal{P}(A)" /> はこれら4つを元として持つ集合となる。
                </p>
                <BlockMath math="\mathcal{P}(A) = \{ \emptyset, \{1\}, \{2\}, \{1, 2\} \}" />
                <p className="mt-4">
                    （注：元の集合 <InlineMath math="A" /> の要素数が <InlineMath math="n" /> 個であるとき、べき集合の要素数は <InlineMath math="2^n" /> 個となる。このことから <InlineMath math="\mathcal{P}(A)" /> はしばしば <InlineMath math="2^A" /> とも表記される）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直積集合</h2>

            <p>
                異なる2つの集合から要素を一つずつ抜き出して「ペア（順序対）」にし、そのペア全体を集めたものを直積集合と呼びます。デカルト平面（<InlineMath math="x, y" /> 座標）を構成する基本となる概念です。
            </p>

            <ContentBox type="definition" title="Definition 1.3-2 (順序対・直積集合)">
                <p>
                    <span className="font-bold">順序対（Ordered Pair）</span>とは、順番を考慮した2つの元の組 <InlineMath math="(a, b)" /> のことである。集合の表記 <InlineMath math="\{a, b\}" /> であれば <InlineMath math="\{a, b\} = \{b, a\}" /> であるが、順序対においては <InlineMath math="(a, b) = (c, d)" /> となるのは、<strong><InlineMath math="a = c" /> かつ <InlineMath math="b = d" /> のときに限る</strong>。
                </p>
                <p className="mt-4">
                    2つの集合 <InlineMath math="A, B" /> について、<InlineMath math="A" /> の元 <InlineMath math="a" /> と <InlineMath math="B" /> の元 <InlineMath math="b" /> からなる順序対 <InlineMath math="(a, b)" /> 全体の集合を、<InlineMath math="A" /> と <InlineMath math="B" /> の<strong>直積（Cartesian Product）</strong>と呼び、<InlineMath math="A \times B" /> と表す。
                </p>
                <BlockMath math="A \times B = \{ (a, b) \mid a \in A \text{ かつ } b \in B \}" />
            </ContentBox>

            <ContentBox type="theorem" title="Proposition 1.3-1 (直積の基本性質)">
                <p>
                    任意の集合 <InlineMath math="A, B, C, D" /> について次が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li><InlineMath math="A \times \emptyset = \emptyset \times A = \emptyset" /></li>
                    <li><InlineMath math="A \times (B \cup C) = (A \times B) \cup (A \times C)" /></li>
                    <li><InlineMath math="A \times (B \cap C) = (A \times B) \cap (A \times C)" /></li>
                    <li><InlineMath math="(A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D)" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal list-inside space-y-6 mt-2 ml-2">
                    <li>
                        <strong>空集合との直積</strong>：<br />
                        直積の定義より、<InlineMath math="(a, b) \in A \times \emptyset" /> であるためには <InlineMath math="a \in A" /> かつ <InlineMath math="b \in \emptyset" /> である必要がある。しかし <InlineMath math="\emptyset" /> は元を持たないため、このような <InlineMath math="b" /> は存在しない。よって <InlineMath math="A \times \emptyset = \emptyset" />。
                    </li>
                    <li>
                        <strong>和集合・共通部分への分配</strong>：<br />
                        <InlineMath math="(x, y) \in A \times (B \cap C)" /> であることは、「<InlineMath math="x \in A" /> かつ（<InlineMath math="y \in B" /> かつ <InlineMath math="y \in C" />）」と同値である。
                        これは論理演算の性質より「（<InlineMath math="x \in A" /> かつ <InlineMath math="y \in B" />）かつ（<InlineMath math="x \in A" /> かつ <InlineMath math="y \in C" />）」と書けるため、
                        <InlineMath math="(x, y) \in (A \times B) \cap (A \times C)" /> と等しい。和集合の場合も論理和を用いることで同様に示される。
                    </li>
                    <li>
                        <strong>直積同士の共通部分</strong>：<br />
                        <BlockMath math="\begin{aligned} &(x, y) \in (A \times B) \cap (C \times D) \\ &\iff (x, y) \in A \times B \land (x, y) \in C \times D \\ &\iff (x \in A \land y \in B) \land (x \in C \land y \in D) \\ &\iff (x \in A \land x \in C) \land (y \in B \land y \in D) \\ &\iff x \in A \cap C \land y \in B \cap D \\ &\iff (x, y) \in (A \cap C) \times (B \cap D) \end{aligned}" />
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">集合族と添字集合</h2>

            <p>
                最後に、§1.2 で「一般化された和集合」を定義する際に少しだけ登場した<strong>集合族</strong>について、正確な言葉遣いを整理しておきます。
            </p>

            <ContentBox type="definition" title="Definition 1.3-3 (集合族・添字集合)">
                <p>
                    ある集合 <InlineMath math="\Gamma" /> の各元 <InlineMath math="\gamma" /> に対して、必ず一つの集合 <InlineMath math="A_\gamma" /> が対応づけられているとする。この対応（写像）によって得られた集合の集まり
                </p>
                <BlockMath math="\{ A_\gamma \}_{\gamma \in \Gamma}" />
                <p>
                    を<strong>集合族（Family of Sets）</strong>と呼ぶ。このとき、インデックスとして使われている大元の集合 <InlineMath math="\Gamma" /> を<strong>添字集合（Index Set）</strong>と呼ぶ。
                </p>
                <p className="mt-4">
                    この表現を用いることで、「自然数を添字とする可算無限個の集合の列 <InlineMath math="A_1, A_2, A_3, \dots" />」はもちろん、「実数全体の集合 <InlineMath math="\mathbb{R}" /> を添字とする非可算個の集合の集まり」なども統一的に表記・議論することが可能になる。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>べき集合 <InlineMath math="\mathcal{P}(A)" /></strong> は「すべての部分集合」を元として持つ集合であり、集合論に「無限の階層」をもたらす源泉となる。</li>
                    <li><strong>直積 <InlineMath math="A \times B" /></strong> は「順序を考慮したペア」の集合であり、後続の章で「関係」や「写像」を定式化するための舞台となる。</li>
                    <li><strong>集合族</strong>は、無限個の集合をインデックスで束ねて一度に扱うための強力な表記法である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="直積集合とデカルト座標">
                <p>
                    直積集合（Cartesian Product）の名は、哲学者・数学者のルネ・デカルトに由来します。
                </p>
                <p className="mt-4">
                    私たちが平面上の点を <InlineMath math="(x, y)" /> と座標で表すとき、それは数学的には実数全体の集合 <InlineMath math="\mathbb{R}" /> 同士の直積集合 <InlineMath math="\mathbb{R} \times \mathbb{R}" />（または <InlineMath math="\mathbb{R}^2" />）の元を扱っていることに他なりません。
                    「図形」という幾何学的な対象を「数」という代数学的な対象に結びつけたこのアイデアは、近代数学における最大の革命の一つでした。
                </p>
            </ContentBox>
        </section>
    );
}
