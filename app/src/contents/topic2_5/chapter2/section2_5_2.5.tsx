import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NeighborhoodBaseFirstCountability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                近傍系はその点を含む無数の集合を含んでいますが、そのすべての情報を知る必要はありません。
                「十分に小さな」近傍たちの代表選手を選び出し、それらだけで空間の局所的な構造を記述することができます。
                これが<strong>近傍基</strong>の考え方です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">近傍基の定義</h2>

            <p>
                開基が位相全体の「建材」であったのに対し、近傍基は特定の点における「解像度」を指定するものです。
            </p>

            <ContentBox type="definition" title="Definition 2.5-1 (近傍基)">
                <p>
                    点 <InlineMath math="x" /> の近傍系の部分集合族 <InlineMath math="\mathcal{B}(x) \subset \mathcal{V}(x)" /> が
                    <InlineMath math="x" /> の<strong>近傍基 (Neighborhood Base / Fundamental system of neighborhoods)</strong> であるとは、
                    任意の近傍 <InlineMath math="V \in \mathcal{V}(x)" /> に対して、
                    <BlockMath math="x \in B \subset V" />
                    を満たす <InlineMath math="B \in \mathcal{B}(x)" /> が存在することをいう。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-1 (距離空間の近傍基)">
                <p>
                    距離空間 <InlineMath math="X" /> において、点 <InlineMath math="x" /> を中心とする半径 <InlineMath math="1/n" /> の開球の族
                    <BlockMath math="\mathcal{B}(x) = \{ B(x; 1/n) \mid n \in \mathbb{N} \}" />
                    は <InlineMath math="x" /> の可算な近傍基となる。
                    任意の近傍は、ある正の半径 <InlineMath math="\varepsilon" /> の開球を含んでおり、
                    アルキメデスの原理より <InlineMath math="1/n < \varepsilon" /> となる <InlineMath math="n" /> が必ず存在するため、
                    <InlineMath math="B(x; 1/n) \subset B(x; \varepsilon)" /> が成り立つ。
                </p>
            </ContentBox>

            <p className="mt-4">
                例えば、実数直線上の点 <InlineMath math="x" /> に対して、半径が有理数の開球全体の族 <InlineMath math="\{ (x-\varepsilon, x+\varepsilon) \mid \varepsilon \in \mathbb{Q}, \varepsilon > 0 \}" /> は近傍基となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第一可算公理</h2>

            <p>
                空間の各点において、可算な（番号負けしない程度の）近傍基が存在するかどうかは非常に重要な問題です。
            </p>

            <ContentBox type="definition" title="Definition 2.5-2 (第一可算公理)">
                <p>
                    位相空間 <InlineMath math="X" /> が<strong>第一可算公理 (First Axiom of Countability)</strong> を満たす（あるいは <strong>C1 空間</strong>である）とは、
                    <InlineMath math="X" /> のすべての点 <InlineMath math="x" /> に対して、<strong>可算</strong>な近傍基が存在することをいう。
                </p>
            </ContentBox>

            <p className="mt-4">
                すべての距離空間は、各点において中心がその点で半径が <InlineMath math="1/n" /> の開球の族を考えればよいので、第一可算空間です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">点列収束との関係</h2>

            <p>
                第一可算空間では、位相的な議論を「点列」によって完全に置き換えることができます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.5-1 (C1 空間における点列の特徴づけ)">
                <p>
                    第一可算空間 <InlineMath math="X" /> において、次のことが成り立つ：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <InlineMath math="x \in \overline{A} \iff A" /> の点からなる点列 <InlineMath math="\{x_n\}" /> で <InlineMath math="x" /> に収束するものが存在する。
                    </li>
                    <li>
                        写像 <InlineMath math="f: X \to Y" /> が連続 <InlineMath math="\iff" /> 任意の点列 <InlineMath math="x_n \to x" /> に対し <InlineMath math="f(x_n) \to f(x)" />。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="x" /> の可算な単調減少近傍基 <InlineMath math="V_1 \supset V_2 \supset \dots" /> をとる。
                    （もし任意の可算近傍基 <InlineMath math="\{B_n\}" /> が与えられたなら、<InlineMath math="V_n = B_1 \cap \dots \cap B_n" /> とおけばよい）
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>閉包と点列：</strong>
                        <br />
                        (<InlineMath math="\Longleftarrow" />) は点列収束の定義より明らかである。
                        (<InlineMath math="\Longrightarrow" />) <InlineMath math="x \in \overline{A}" /> ならば、各近傍 <InlineMath math="V_n" /> は <InlineMath math="A" /> と交わる。
                        そこで各 <InlineMath math="n" /> に対し <InlineMath math="x_n \in V_n \cap A" /> を選ぶ。
                        任意の近傍 <InlineMath math="V" /> に対し、ある <InlineMath math="N" /> が存在して <InlineMath math="V_N \subset V" /> であり、
                        それ以降の <InlineMath math="n \geq N" /> では <InlineMath math="x_n \in V_n \subset V_N \subset V" /> となるため、<InlineMath math="x_n \to x" /> である。
                    </li>
                    <li>
                        <strong>連続性と点列：</strong>
                        <br />
                        (<InlineMath math="\Longrightarrow" />) は連続性の定義（逆像が開集合）より従う。
                        (<InlineMath math="\Longleftarrow" />) を対偶で示す。 <InlineMath math="f" /> が <InlineMath math="x" /> で連続でないとすると、
                        <InlineMath math="f(x)" /> のある近傍 <InlineMath math="W" /> があって、<InlineMath math="x" /> のどんな近傍 <InlineMath math="V" /> も <InlineMath math="f(V) \subset W" /> を満たさない。
                        特に各 <InlineMath math="V_n" /> に対し <InlineMath math="x_n \in V_n" /> で <InlineMath math="f(x_n) \notin W" /> なるものが取れる。
                        このとき <InlineMath math="x_n \to x" /> だが <InlineMath math="f(x_n) \not\to f(x)" /> である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                一般の位相空間では「点列」の及ぶ範囲には限界がありますが、第一可算性が保証されていれば、解析学で慣れ親しんだ点列の直感がそのまま通用するのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="収束概念の拡張">
                <p>
                    第一可算性を満たさない、より「巨大な」位相空間（例えば無限次元の関数空間の弱い位相など）では、
                    点列だけでは集合の閉包を捉えきれないことがあります。
                    そのような場合には、点列を一般化した「ネット (Net)」や「フィルタ (Filter)」という概念が必要になります。
                    これは現代の抽象解析学における重要なトピックの一つです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>近傍基</strong>とは、その点の近傍系を代表する「看板メニュー」のような集合族である。</li>
                    <li>各点に可算な近傍基がある空間を<strong>第一可算空間 (C1)</strong> という。</li>
                    <li>距離空間はすべて第一可算である。</li>
                    <li>第一可算空間では、閉包や連続性をすべて<strong>点列の収束</strong>で言い換えることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
