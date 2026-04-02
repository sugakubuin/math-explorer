import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SimpleGroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                群の構造を商群によって「分解」していくと、最終的にはそれ以上分解できない、つまり「非自明な正規部分群を持たない」群に行き当たります。
                これが単純群という概念で、群論における「素数」のような役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単純群の定義と例</h2>

            <ContentBox type="definition" title="Definition 4.3-1 (単純群)">
                <p>
                    群 <InlineMath math="G \neq \{e\}" /> が、正規部分群として自明なもの（<InlineMath math="\{e\}" /> と <InlineMath math="G" /> 自身）しか持たないとき、<InlineMath math="G" /> を<b>単純群 (Simple group)</b> という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                商群を構成するには正規部分群が必要ですから、単純群であるということは「自分自身以外の商群を作ることができない＝これ以上分解できない」ことを意味します。
            </p>

            <ContentBox type="example" title="Example 4.3-1 (代表的な単純群)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>素数位数の巡回群</b>：<br />
                        位数 <InlineMath math="p" />（素数）の群には、ラグランジュの定理より自明でない部分群自体が存在しないため、自動的に単純群となる（§3.3 参照）。
                    </li>
                    <li>
                        <b>交代群 <InlineMath math="A_n" />（<InlineMath math="n \geq 5" />）</b>：<br />
                        5次以上の交代群はすべて単純群であることが知られている。これは「5次以上の代数方程式が根の公式を持たない」というガロア理論の核心部分に密接に関係している。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                逆に、巡回群であっても位数が合成数（例：<InlineMath math="6 = 2 \times 3" />）の場合は、非自明な正規部分群を持つため、単純群ではありません。
            </p>

            <ContentBox type="example" title="Example 4.3-2 (単純でない例：A4)">
                <p>
                    位数 12 の交代群 <InlineMath math="A_4" /> は、位数 4 の正規部分群
                    <BlockMath math="V_4 = \{e, (12)(34), (13)(24), (14)(23)\}" />
                    （クラインの 4 群）を含んでいる。
                    したがって、交代群であっても <InlineMath math="A_4" /> は単純群ではない。
                    一方で、商群 <InlineMath math="A_4/V_4" /> は位数 3（素数）の巡回群となり、これは単純群である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単純群と群の「素因数分解」</h2>

            <p className="leading-relaxed">
                整数が素数の積に分解できるように、有限群も単純群を積み重ねることで構成されていると考えることができます（Jordan-Hölder 定理）。
            </p>

            <ContentBox type="note" title="用語の背景：有限単純群の分類">
                <p>
                    20世紀後半にかけて、世界中の数学者の協力によって「すべての有限単純群をリストアップする」という壮大なプロジェクトが完遂されました。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>素数位数の巡回群</li>
                    <li>交代群 <InlineMath math="A_n \ (n \geq 5)" /></li>
                    <li>リー型の群（行列群から構成される無限系列）</li>
                    <li>26個の<b>散在型単純群 (Sporadic groups)</b>：モンスター群などの例外的な群</li>
                </ul>
                <p className="mt-2 font-semibold">
                    世の中のあらゆる有限群は、本質的にはこれらの「部品」の組み合わせでできているのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>非自明な正規部分群を持たない群を単純群という。</li>
                    <li>素数位数の群や、<InlineMath math="n \geq 5" /> の交代群がその代表例である。</li>
                    <li>単純群は、群を構成するための「最小単位（素数のような部品）」とみなせる。</li>
                    <li>有限単純群は完全に分類されており、すべての有限群の構造の基礎となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
