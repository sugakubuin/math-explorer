import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BasicPDEConcepts() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに学んだ常微分方程式 (ODE) が一つの変数（通常は時間 <InlineMath math="t" />）のみに依存する現象を扱ってきましたが、
                現実に起きる物理現象の多くは、時間だけでなく空間（<InlineMath math="x, y, z" />）にも依存して変化します。
                本章から始まる偏微分方程式 (PDE) の世界では、複数の独立変数を持つ関数とその偏導関数の関係性を探求します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">PDE の分類と線形性</h2>

            <p className="leading-relaxed">
                まず、偏微分方程式の数学的定義とその階数、および方程式の性質を決定づける「線形性」について整理しましょう。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (偏微分方程式と階数)">
                <p>
                    未知関数 <InlineMath math="u(x_1, \dots, x_n)" /> とその偏導関数を含む方程式を<b>偏微分方程式</b> (Partial Differential Equation, PDE) と呼ぶ。
                    方程式に含まれる偏導関数のうち、最高階の導関数の次数をその方程式の<b>階数</b>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                階数はその方程式が持つ「変化の滑らかさ」の要求レベルを示す基本指標です。
            </p>

            <ContentBox type="example" title="Example 4.1-1 (階数の例)">
                <p>
                    1. 輸送方程式： <InlineMath math="u_t + c u_x = 0" /> は、1 階の偏導関数のみを含むため <b>1 階 PDE</b> である。
                </p>
                <p>
                    2. 熱方程式： <InlineMath math="u_t = \alpha u_{xx}" /> は、<InlineMath math="x" /> についての 2 階偏導関数を含むため <b>2 階 PDE</b> である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次に、解の重ね合わせが可能かどうかを決める重要な概念である「線形性」を定義します。
            </p>

            <ContentBox type="definition" title="Definition 4.1-2 (線形 PDE)">
                <p>
                    未知関数 <InlineMath math="u" /> とその導関数に関して 1 次式のみで構成される方程式を<b>線形 PDE</b> と呼ぶ。
                    線形作用素 <InlineMath math="L" /> を用いて <InlineMath math="L[u] = f" /> と書けるとき、 <InlineMath math="f = 0" /> ならば<b>同次</b>、 <InlineMath math="f \neq 0" /> ならば<b>非同次</b>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                線形方程式では、2 つの解の和もまた解になるという「重ね合わせの原理」が成立します。
                一方、現実の流体や複雑なシステムでは、最高階が線形に近い「準線形」な性質を持つことがあります。
            </p>

            <ContentBox type="definition" title="Definition 4.1-3 (準線形 PDE)">
                <p>
                    最高階の偏導関数の係数が <InlineMath math="u" /> や低次の導関数に依存してもよいが、最高階の偏導関数自体に関しては線形である方程式を<b>準線形 PDE</b> と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                これまでの分類を具体的な物理方程式に当てはめてみましょう。
            </p>

            <ContentBox type="example" title="Example 4.1-2 (代表的な PDE の分類)">
                <ul className="list-disc list-inside space-y-2">
                    <li><b>熱方程式</b>: <InlineMath math="u_t = \kappa u_{xx}" />（線形・2 階・放物型）</li>
                    <li><b>波動方程式</b>: <InlineMath math="u_{tt} = c^2 u_{xx}" />（線形・2 階・双曲型）</li>
                    <li><b>ラプラス方程式</b>: <InlineMath math="u_{xx} + u_{yy} = 0" />（線形・2 階・楕円型）</li>
                    <li><b>バーガーズ方程式</b>: <InlineMath math="u_t + u u_x = 0" />（準線形・1 階）</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">境界条件と初期条件の分類</h2>

            <p className="leading-relaxed">
                PDE を単独で解く場合、一般解には任意関数が含まれます。物理的に意味のある一意な解を特定するには、境界や初期の状態を指定する必要があります。
            </p>

            <ContentBox type="definition" title="Definition 4.1-4 (境界条件の分類)">
                <p>
                    境界 <InlineMath math="\partial \Omega" /> 上で指定される条件は主に以下の 3 つに分けられる：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><b>ディリクレ (Dirichlet) 条件</b>: 境界上の値 <InlineMath math="u(x, t) = g(x, t)" /> を指定する。</li>
                    <li><b>ノイマン (Neumann) 条件</b>: 境界上の法線微分 <InlineMath math="\frac{\partial u}{\partial n} = g(x, t)" /> を指定する。</li>
                    <li><b>ロバン (Robin) 条件</b>: 値と微分の線形結合 <InlineMath math="\frac{\partial u}{\partial n} + \alpha u = g(x, t)" /> を指定する。</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                これらの境界条件には、物理的な意味付けが明確に存在します。
            </p>

            <ContentBox type="example" title="Example 4.1-3 (弦の振動における境界条件)">
                <p>
                    長さ <InlineMath math="L" /> の弦の振動 <InlineMath math="u_{tt} = c^2 u_{xx}" /> において：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>ディリクレ条件 <InlineMath math="u(0, t) = u(L, t) = 0" /> は、両端を固定した<b>固定端</b>を意味する。</li>
                    <li>ノイマン条件 <InlineMath math="u_x(0, t) = u_x(L, t) = 0" /> は、両端が自由に動ける<b>自由端</b>を意味する。</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                最後に、数学的に「正しい」問題設定とは何かを定義する概念を学びましょう。
            </p>

            <ContentBox type="remark" title="適切問題 (Well-posed Problem) の概念">
                <p>
                    ジャック・ハダマールによって提唱された「適切性」とは、以下の 3 条件を満たすことを指します。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><b>存在性</b> (Existence): 少なくとも 1 つの解が存在すること。</li>
                    <li><b>一意性</b> (Uniqueness): 解が高々 1 つであること。</li>
                    <li><b>安定性</b> (Stability): 初期データや境界条件の微小な変化に対し、解が連続的に変化すること。</li>
                </ol>
                <p className="mt-2">
                    物理現象を扱う PDE では、これらの適切性が保たれていることが極めて重要です（詳細は §9.4 参照）。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>偏微分方程式</b>は、複数の独立変数を含む未知関数の微分の関係を示す。</li>
                    <li><b>線形性</b>は解の重ね合わせが可能かを決定し、<b>階数</b>は最高次の微分回数を示す。</li>
                    <li><b>境界条件</b>（ディリクレ、ノイマン）によって物理的な制約（固定端、断熱など）が記述される。</li>
                    <li><b>適切問題</b>とは、解の存在・一意性・連続依存性が保証された問題のことである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
