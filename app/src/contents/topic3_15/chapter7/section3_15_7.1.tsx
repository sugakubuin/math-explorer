import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfMonads() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                随伴関手は、異なる2つの圏を行き来する強力な枠組みでした。この「行って戻ってくる」操作を一つの圏の中で完結させたとき、そこに現れる代数的な構造を「モナド（Monad）」と呼びます。モナドは、ある対象に「新たな構造を付加する（あるいは計算の文脈を拡張する）」操作を抽象化したものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">モナドの定義</h2>

            <ContentBox
                type="definition"
                title="Definition 7.1-1 (モナド / Monad)"
            >
                <p>
                    圏 <InlineMath math="\mathcal{C}" /> 上の<strong>モナド <InlineMath math="(T, \mu, \eta)" /></strong> とは、自己関手 <InlineMath math="T : \mathcal{C} \to \mathcal{C}" /> と、以下の2つの自然変換からなる組である。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>乗法（Multiplication） <InlineMath math="\mu" />：</strong> <InlineMath math="\mu : T^2 \Rightarrow T" /> （ここで <InlineMath math="T^2 = T \circ T" />）</li>
                    <li><strong>単位（Unit） <InlineMath math="\eta" />：</strong> <InlineMath math="\eta : \mathrm{Id}_\mathcal{C} \Rightarrow T" /></li>
                </ul>
                <p>
                    これらは以下の<strong>モナド公理（結合律と単位律）</strong>を満たす必要がある。（※記号は自然変換のウィスカリング）
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>結合律：</strong> <InlineMath math="\mu \circ T\mu = \mu \circ \mu T" /> <br/>
                    （<InlineMath math="T^3" /> を <InlineMath math="T" /> に潰す際、「内側から潰す」か「外側から潰す」かで結果が同じになる）</li>
                    <li><strong>単位律：</strong> <InlineMath math="\mu \circ T\eta = \mathrm{id}_T = \mu \circ \eta T" /> <br/>
                    （<InlineMath math="T" /> の外側や内側に「何もしない層」を付加してから潰すと、元の <InlineMath math="T" /> のまま変わらない）</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 7.1-1 (べき集合モナド)"
            >
                <p>
                    集合の圏 <InlineMath math="\mathbf{Set}" /> における、<strong>べき集合関手 <InlineMath math="T = \mathcal{P}" /></strong> を考える。
                    対象の対応は <InlineMath math="A \mapsto \mathcal{P}(A)" />（部分集合の全体）、写像の対応は像 <InlineMath math="f \mapsto (S \mapsto f(S))" /> である。
                </p>
                <p>
                    単位 <InlineMath math="\eta" /> と乗法 <InlineMath math="\mu" /> は以下のように定義される。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>単位 <InlineMath math="\eta_A : A \to \mathcal{P}(A)" />：</strong> 各要素 <InlineMath math="a" /> に対して、一点集合 <InlineMath math="\{a\}" /> を対応させる。（要素を「シングルトンの層」で包む）</li>
                    <li><strong>乗法 <InlineMath math="\mu_A : \mathcal{P}(\mathcal{P}(A)) \to \mathcal{P}(A)" />：</strong> 部分集合の族（集合の集合） <InlineMath math="\mathcal{S}" /> に対して、その和集合 <InlineMath math="\bigcup \mathcal{S}" /> を対応させる。（「集合の集合」の括弧を1つ外して平坦化する）</li>
                </ul>
                <p>
                    <strong>モナド公理の確認：</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>結合律：<InlineMath math="\bigcup(\bigcup \mathcal{T}) = \bigcup_{S \in \mathcal{T}} (\bigcup S)" /> 。和集合をどの順序でとっても全体は変わらないという当たり前の事実。</li>
                    <li>単位律：<InlineMath math="A" /> の部分集合 <InlineMath math="S" /> を <InlineMath math="\eta" /> で <InlineMath math="\{S\}" />（<InlineMath math="S" /> のみを含む集合族）にしてから和集合をとっても、要素を一点集合にしてから和集合をとっても、元の <InlineMath math="S" /> に戻る。<InlineMath math="\bigcup \{S\} = S" />、<InlineMath math="\bigcup_{x \in S} \{x\} = S" />。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">モナドとモノイドの類比</h2>

            <p className="leading-relaxed">
                モナドの公理（乗法・単位・結合律・単位律）の形は、代数学で学ぶ「モノイド」の定義と全く同じ構造をしています。
            </p>

            <ContentBox
                type="remark"
                title="自己関手圏におけるモノイド"
            >
                <p>
                    群から逆元の公理を取り除いた代数系を「モノイド（Monoid）」と呼びます。モノイドは集合 <InlineMath math="M" /> と、二項演算 <InlineMath math="\mu : M \times M \to M" />、単位元 <InlineMath math="\eta : 1 \to M" /> の組であり、結合律と単位律を満たします。
                </p>
                <p>
                    ここで、集合の代わりに「自己関手 <InlineMath math="T" />」を、直積 <InlineMath math="\times" /> の代わりに「関手の合成 <InlineMath math="\circ" />」を考えると、モナドの定義がそのまま得られます。
                    圏論の有名な格言に<strong>「モナドとは、自己関手の圏におけるモノイド対象に他ならない」</strong>（Saunders Mac Lane）というものがありますが、これは比喩ではなく厳密な数学的定義そのものです。
                </p>
                <p>
                    計算機科学（Haskellなどの関数型プログラミング）において、モナドは「状態」「例外」「非決定性」「I/O」といった「計算の文脈（副作用）」を純粋な関数に付加するデザインパターンとして広く使われています。「構造を付加して、後で矛盾なく平坦化（flatten / <InlineMath math="\mu" />）できる」という性質が、プログラムの合成において極めて有用だからです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>モナド</strong>は、自己関手 <InlineMath math="T" /> と自然変換 <InlineMath math="\mu, \eta" /> の組である。</li>
                    <li><InlineMath math="\eta" /> は「要素を単一の構造で包む操作」、<InlineMath math="\mu" /> は「入れ子になった構造を1段階平坦化する操作」である。</li>
                    <li>結合律と単位律を満たすという点で、モナドは「関手の合成に関するモノイド」と見なすことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
