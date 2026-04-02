import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MonadsFromAdjunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                モナドは突如として現れる概念ではありません。実は、すべての随伴関手のペアは、自動的にあるモナドを生み出します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">随伴からモナドへ</h2>

            <ContentBox
                type="theorem"
                title="Theorem 7.2-1 (随伴からのモナドの構成)"
            >
                <p>
                    随伴関係 <InlineMath math="F \dashv G" /> （<InlineMath math="F : \mathcal{C} \to \mathcal{D}, G : \mathcal{D} \to \mathcal{C}" />）が与えられたとする。随伴の単位を <InlineMath math="\eta : \mathrm{Id}_\mathcal{C} \Rightarrow G \circ F" />、余単位を <InlineMath math="\varepsilon : F \circ G \Rightarrow \mathrm{Id}_\mathcal{D}" /> とする。
                </p>
                <p>
                    このとき、圏 <InlineMath math="\mathcal{C}" /> 上の自己関手 <InlineMath math="T = G \circ F" /> を考える。
                    この <InlineMath math="T" /> は、以下の自然変換によって<strong>モナド <InlineMath math="(T, \mu, \eta)" /></strong> を構成する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>単位 <InlineMath math="\eta" />：</strong> 随伴の単位 <InlineMath math="\eta : \mathrm{Id}_\mathcal{C} \Rightarrow T" /> をそのまま用いる。</li>
                    <li><strong>乗法 <InlineMath math="\mu" />：</strong> 随伴の余単位 <InlineMath math="\varepsilon" /> の両側に <InlineMath math="G" /> と <InlineMath math="F" /> をウィスカリングしたもの、すなわち <InlineMath math="\mu = G \varepsilon F : G \circ F \circ G \circ F \Rightarrow G \circ F" /> （<InlineMath math="T^2 \Rightarrow T" />）とする。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    モナド公理を満たすことを確認する。結合律 <InlineMath math="\mu \circ T\mu = \mu \circ \mu T" /> について。
                </p>
                <p>
                    <InlineMath math="T = GF, \mu = G\varepsilon F" /> を代入すると、
                    <BlockMath math="\text{左辺} = (G\varepsilon F) \circ (GF)(G\varepsilon F) = G(\varepsilon \circ F G \varepsilon)F" />
                    <BlockMath math="\text{右辺} = (G\varepsilon F) \circ (G\varepsilon F)(GF) = G(\varepsilon \circ \varepsilon F G)F" />
                    （真ん中の部分に注目すると、余単位 <InlineMath math="\varepsilon" /> の自然性図式から <InlineMath math="\varepsilon \circ FG\varepsilon = \varepsilon \circ \varepsilon FG" /> が導かれるため、両辺は等しい。）
                </p>
                <p>
                    単位律 <InlineMath math="\mu \circ T\eta = \mathrm{id}_T = \mu \circ \eta T" /> について。
                    <BlockMath math="\mu \circ T\eta = (G\varepsilon F) \circ (GF\eta) = G(\varepsilon F \circ F\eta)" />
                    ここで、随伴の三角恒等式 <InlineMath math="(\varepsilon F) \circ (F\eta) = \mathrm{id}_F" /> より、これは <InlineMath math="G(\mathrm{id}_F) = \mathrm{id}_{GF} = \mathrm{id}_T" /> となる。
                    もう一つの単位律も、もう一方の三角恒等式から同様に導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 7.2-1 (べき集合モナドの随伴による構成)"
            >
                <p>
                    前節の「べき集合モナド <InlineMath math="\mathcal{P}" />」も、実は反変関手の随伴から生じている。
                </p>
                <p>
                    関手 <InlineMath math="F : \mathbf{Set} \to \mathbf{Set}^{op}" />（要素を変えずに写像の向きだけ逆にする）と、関手 <InlineMath math="G : \mathbf{Set}^{op} \to \mathbf{Set}" />（<InlineMath math="A \mapsto \mathcal{P}(A)" />）の間に随伴 <InlineMath math="F \dashv G" /> がある。（これは「<InlineMath math="A" /> から <InlineMath math="B" /> の部分集合への写像」と「<InlineMath math="B" /> から <InlineMath math="A" /> の部分集合への写像」が二項関係として一対一対応することに由来する。）
                </p>
                <p>
                    このとき <InlineMath math="G \circ F" /> がまさに <InlineMath math="\mathcal{P} : \mathbf{Set} \to \mathbf{Set}" /> であり、随伴の余単位から「和集合をとる」という乗法 <InlineMath math="\mu" /> が自然に導出される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">モナドの代数的側面</h2>

            <p className="leading-relaxed">
                代数学において最も身近な随伴である「自由生成と忘却」のペアも、非常にわかりやすいモナドを形成します。
            </p>

            <ContentBox
                type="example"
                title="Example 7.2-2 (自由群モナド)"
            >
                <p>
                    自由群関手 <InlineMath math="F : \mathbf{Set} \to \mathbf{Grp}" /> と忘却関手 <InlineMath math="U : \mathbf{Grp} \to \mathbf{Set}" /> の随伴 <InlineMath math="F \dashv U" /> から得られる <InlineMath math="\mathbf{Set}" /> 上のモナド <InlineMath math="T = U \circ F" /> を考える。
                </p>
                <p>
                    対象 <InlineMath math="S" /> を与えると、<InlineMath math="T(S) = U(F(S))" /> は「<InlineMath math="S" /> の要素を文字として作られるすべての『語（文字列）』の集合」となる。（※群の演算を忘れているので、単なる語の集合である。）
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>単位 <InlineMath math="\eta_S : S \to T(S)" />：</strong> 単一の文字 <InlineMath math="s" /> を、長さ1の語 "s" とみなす操作。</li>
                    <li><strong>乗法 <InlineMath math="\mu_S : T(T(S)) \to T(S)" />：</strong> <InlineMath math="T(T(S))" /> は「語を文字として作られた語（マトリョーシカのような文字列）」である。<InlineMath math="\mu_S" /> は、内部の境界（括弧）を無視して、ただの1つの長い語に「平坦化」する操作である。（例： 語 "(a \cdot b)" と "(c)" を使って作られた語 "(a \cdot b) \cdot (c)" を、平坦な語 "a \cdot b \cdot c" にする。）</li>
                </ul>
                <p>
                    自由な代数構造を生成する操作の背後には、必ずこのような「平坦化可能なモナド」が潜んでいる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>すべての<strong>随伴関手のペア <InlineMath math="F \dashv G" /></strong> は、元の圏上に自己関手 <InlineMath math="T = G \circ F" /> としての<strong>モナド</strong>を誘導する。</li>
                    <li>随伴の単位がそのままモナドの単位になり、余単位がモナドの乗法（平坦化）の役割を果たす。</li>
                    <li>「自由生成して忘れる」というプロセスは、集合上に「式（語）」の構造を付加するモナドとして直感的に理解できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
