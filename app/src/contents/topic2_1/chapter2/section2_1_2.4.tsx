import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DimensionAndExtension() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、「任意の基底を構成するベクトルの個数は一定である」という極めて重要な定理を学びました。
                この「一定の個数」こそが、そのベクトル空間の「広がり具合（自由度）」を表す最も本質的な数値となります。これを<strong>次元（Dimension）</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 次元の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">次元の定義</h2>

            <ContentBox type="definition" title="Definition 2.4-1 （ベクトル空間の次元）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> が <InlineMath math="n" /> 個のベクトルからなる基底をもつとき、<InlineMath math="V" /> の<strong>次元（Dimension）</strong>は <InlineMath math="n" /> であるといい、<InlineMath math="\dim V = n" /> と表す。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                    <li><InlineMath math="V = \{\boldsymbol{0}\}" /> の場合（零ベクトルのみの空間）、基底は空集合（個数0）と考え、<InlineMath math="\dim V = 0" /> とする。</li>
                    <li>有限個のベクトルで生成されない場合（例えば連続関数空間など）、<InlineMath math="V" /> は「無限次元である」という。本章では主に有限次元ベクトル空間を扱う。</li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                たとえば、<InlineMath math="\dim \mathbb{R}^3 = 3" /> であり、平面であれば次元は 2、直線であれば次元は 1 となります。<br />
                また、2次以下の多項式全体 <InlineMath math="\mathbb{R}[x]_{\leq 2}" /> の次元は、基底が <InlineMath math="\{1, x, x^2\}" /> の3つであるため <InlineMath math="\dim \mathbb{R}[x]_{\leq 2} = 3" /> となります。（変数が <InlineMath math="x" /> だけでも、自由度のパラメータは <InlineMath math="a, b, c" /> の3つあるからです）。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基底の拡張定理
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基底の拡張定理</h2>

            <p>
                もし手元に「線形独立だけど、空間全体を生成するには足りない」ベクトルの組があったとします。
                このとき、足りないベクトルを外から上手く補充（拡張）してやることで、必ず全体空間の基底を完成させることができます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 （線形独立な集合の基底への拡張）">
                <p>
                    <InlineMath math="n" /> 次元ベクトル空間 <InlineMath math="V" /> において、<InlineMath math="k" /> 個のベクトル <InlineMath math="\{\boldsymbol{v}_1, \dots, \boldsymbol{v}_k\}" /> が線形独立であるとする（<InlineMath math="k \le n" />）。<br />
                    このとき、<InlineMath math="V" /> から適切な <InlineMath math="(n-k)" /> 個のベクトル <InlineMath math="\boldsymbol{v}_{k+1}, \dots, \boldsymbol{v}_n" /> を付け加えて、
                </p>
                <BlockMath math="\{\boldsymbol{v}_1, \dots, \boldsymbol{v}_k, \boldsymbol{v}_{k+1}, \dots, \boldsymbol{v}_n\}" />
                <p>
                    を <InlineMath math="V" /> の基底にすることができる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="V" /> には必ず何らかの基底 <InlineMath math="\{\boldsymbol{u}_1, \dots, \boldsymbol{u}_n\}" /> が存在する（次元が <InlineMath math="n" /> である仮定より）。<br />
                    まず、集合 <InlineMath math="S = \{\boldsymbol{v}_1, \dots, \boldsymbol{v}_k, \boldsymbol{u}_1, \dots, \boldsymbol{u}_n\}" /> を考える。これは明らかに <InlineMath math="V" /> を生成する（<InlineMath math="\boldsymbol{u}_i" /> がすでに入っているため）。
                    この <InlineMath math="S" /> の中から、左から順にベクトルを見ていき、「それまでのベクトルの線形結合で作れる（無駄な）ベクトル」を削除していく。<br />
                    <InlineMath math="\boldsymbol{v}_1, \dots, \boldsymbol{v}_k" /> はもともと線形独立なので、この間はどれも削除されない。<br />
                    残りの <InlineMath math="\boldsymbol{u}_i" /> についてチェックを進めると、最終的に無駄が一切排除された生成系、すなわち基底が得られる。
                    定理2.3-1より基底の個数は必ず <InlineMath math="n" /> 個になるため、ちょうど <InlineMath math="n-k" /> 個の <InlineMath math="\boldsymbol{u}_i" /> が生き残って追加されることになる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 部分空間の次元
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">部分空間の次元</h2>

            <p>
                拡張定理のすぐわかる帰結として、部分空間の次元に関する自然な性質が導かれます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.4-1 （部分空間の次元は全体空間の次元以下）">
                <p>
                    <InlineMath math="n" /> 次元ベクトル空間 <InlineMath math="V" /> の部分空間 <InlineMath math="W" /> について、以下が成り立つ。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="\dim W \le \dim V" /> （部分空間の次元が全体を超えることはない）。</li>
                    <li><InlineMath math="\dim W = \dim V" /> ならば、<InlineMath math="W = V" /> である（部分が全体と同じ広がりを持つなら、それは全体そのものである）。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal pl-5 space-y-2">
                    <li>
                        <InlineMath math="W" /> の基底を <InlineMath math="\{\boldsymbol{w}_1, \dots, \boldsymbol{w}_k\}" /> とする。これらは <InlineMath math="W" /> 内で線形独立であるから、当然 <InlineMath math="V" /> においても線形独立である。
                        定理2.4-1（拡張定理）より、これを拡張して <InlineMath math="V" /> の <InlineMath math="n" /> 個の基底にできる。したがって元の個数 <InlineMath math="k" /> は <InlineMath math="n" /> 以下でなければならない。すなわち <InlineMath math="\dim W \le \dim V" />。
                    </li>
                    <li>
                        もし <InlineMath math="\dim W = n" /> ならば、<InlineMath math="W" /> の基底は <InlineMath math="n" /> 個の線形独立なベクトルである。
                        <InlineMath math="V" /> 内の <InlineMath math="n" /> 個の線形独立なベクトルは、それ以上追加すると（次元が <InlineMath math="n" /> だから）必ず線形従属になる。すなわち、<InlineMath math="V" /> の任意のベクトルはこの <InlineMath math="n" /> 個のベクトルの線形結合で作れる。
                        よってこの基底は <InlineMath math="V" /> の基底でもあるため、生成される空間は一致し <InlineMath math="W = V" /> となる。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ベクトル空間の<strong>次元</strong>とは、「基底を構成するベクトルの個数（自由度の数）」のことである（Definition 2.4-1）。</li>
                    <li>線形独立なベクトルがいくつかあるとき、足りないベクトルを補充して空間全体の基底に<strong>拡張</strong>することができる（Theorem 2.4-1）。</li>
                    <li>部分空間の次元は必ず全体の次元以下になり、次元が一致するなら二つの空間は全く同じものである（Proposition 2.4-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
