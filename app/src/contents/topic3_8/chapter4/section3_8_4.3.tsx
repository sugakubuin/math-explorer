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

            <h2 className="text-2xl font-bold mt-8 mb-6">組成列と Jordan-Hölder の定理</h2>

            <p className="leading-relaxed">
                有限群を正規部分群で次々と割っていくプロセスは、最終的に「それ以上分解できない部品」である単純群に行き着きます。この分解のプロセスを厳密に定式化したものが組成列です。
            </p>

            <ContentBox type="definition" title="Definition 4.3-2 (組成列)">
                <p>
                    有限群 <InlineMath math="G" /> の部分群の列
                    <BlockMath math="G = G_0 \triangleright G_1 \triangleright G_2 \triangleright \dots \triangleright G_n = \{e\}" />
                    において、すべての因子群 <InlineMath math="G_i / G_{i+1} \ (i=0, 1, \dots, n-1)" /> が単純群であるとき、この列を <InlineMath math="G" /> の<strong>組成列 (Composition series)</strong> と呼び、各因子群を<strong>組成因子 (Composition factor)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ある群に対して、組成列の作り方は一通りとは限りません。しかし、どのような順序で分解したとしても、最終的に得られる「部品（単純群）」のセットは本質的に同じになることが保証されています。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (Jordan-Hölder の定理)">
                <p>
                    有限群 <InlineMath math="G" /> について、以下のことが成り立つ。
                </p>
                <ol className="list-decimal pl-5 space-y-2 mt-2">
                    <li><InlineMath math="G" /> は必ず組成列を持つ。</li>
                    <li>
                        <InlineMath math="G" /> の任意の 2 つの組成列に対して、それらの長さ（項数）は等しく、かつ出現する組成因子の集合は同型を除いて（順序を入れ替えれば）一致する。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="font-semibold">1. 存在の証明</p>
                <p>
                    群の位数 <InlineMath math="|G|" /> に関する数学的帰納法を用いる。<br />
                    <InlineMath math="|G| = 1" /> のときは自明である。<InlineMath math="|G| > 1" /> とし、<InlineMath math="|G|" /> より小さな位数の群に対しては組成列が存在すると仮定する。
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li><InlineMath math="G" /> が単純群ならば、列 <InlineMath math="G \triangleright \{e\}" /> が組成列である。</li>
                    <li><InlineMath math="G" /> が単純群でないならば、自明でない正規部分群を持つ。有限群であるから、包含関係に関して極大な正規部分群 <InlineMath math="G_1 \subsetneq G" /> が存在する。
                        このとき、<InlineMath math="G_1" /> は極大であるから、対応定理より <InlineMath math="G/G_1" /> は単純群である。
                        帰納法の仮定より <InlineMath math="G_1" /> には組成列 <InlineMath math="G_1 \triangleright G_2 \triangleright \dots \triangleright \{e\}" /> が存在する。
                        これに <InlineMath math="G \triangleright G_1" /> を繋げれば、<InlineMath math="G" /> の組成列が得られる。
                    </li>
                </ul>

                <p className="font-semibold mt-4">2. 一意性の証明</p>
                <p>
                    組成列の長さ <InlineMath math="n" /> に関する帰納法を用いる。<InlineMath math="n=1" />（単純群）のときは明らかである。
                    2 つの組成列
                    <BlockMath math="(1) \ G = G_0 \triangleright G_1 \triangleright \dots \triangleright G_n = \{e\}" />
                    <BlockMath math="(2) \ G = H_0 \triangleright H_1 \triangleright \dots \triangleright H_m = \{e\}" />
                    を考える。<InlineMath math="G_1 = H_1" /> ならば、帰納法の仮定より残りの部分（<InlineMath math="G_1" /> の組成列）に関して一意性が示される。
                </p>
                <p className="mt-2">
                    <InlineMath math="G_1 \neq H_1" /> の場合を考える。
                    <InlineMath math="K = G_1 \cap H_1" /> とおくと、<InlineMath math="G_1, H_1" /> が極大正規部分群であることから <InlineMath math="G_1 H_1 = G" /> となり、第二同型定理より次が成り立つ：
                    <BlockMath math="G/G_1 \cong H_1/K, \quad G/H_1 \cong G_1/K" />
                    これらが単純群であることから、<InlineMath math="K" /> もそれぞれの極大正規部分群となる。
                    ここで <InlineMath math="K" /> の組成列をひとつ選び、それを経由する 2 つの「仮想的な組成列」を考えると、帰納法の仮定により、列(1)と列(2)の組成因子が（順序を除いて）同一のセットに収束することが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <p className="leading-relaxed">
                この定理は、群における「素因数分解の一意性」に相当する極めて重要な結果です。例えば、整数 <InlineMath math="12" /> を <InlineMath math="(2 \times 2) \times 3" /> と分解しても <InlineMath math="2 \times (2 \times 3)" /> と分解しても現れる素数は同じであるように、群も分解の経路に依存しない固有の構造を持っているのです。
            </p>

            <ContentBox type="example" title="Example 4.3-3 (組成因子の一意性)">
                <p>
                    位数 6 の巡回群 <InlineMath math="\mathbb{Z}_6" /> を例にとる。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>列1：<InlineMath math="\mathbb{Z}_6 \triangleright \mathbb{Z}_3 \triangleright \{0\}" /> <br />
                        組成因子は <InlineMath math="\mathbb{Z}_6/\mathbb{Z}_3 \cong \mathbb{Z}_2" /> と <InlineMath math="\mathbb{Z}_3/\{0\} \cong \mathbb{Z}_3" />。
                    </li>
                    <li>列2：<InlineMath math="\mathbb{Z}_6 \triangleright \mathbb{Z}_2 \triangleright \{0\}" /> <br />
                        組成因子は <InlineMath math="\mathbb{Z}_6/\mathbb{Z}_2 \cong \mathbb{Z}_3" /> と <InlineMath math="\mathbb{Z}_2/\{0\} \cong \mathbb{Z}_2" />。
                    </li>
                </ul>
                <p className="mt-2">
                    分解の順序は異なりますが、得られる部品のセットはどちらも <InlineMath math="\{\mathbb{Z}_2, \mathbb{Z}_3\}" /> で一致していることがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">有限単純群の分類：数学の「周期表」</h2>

            <p className="leading-relaxed">
                Jordan-Hölder の定理により、「世の中のすべての有限単純群をリストアップできれば、理論上すべての有限群をその部品から理解できる」という見通しが立ちました。
            </p>

            <ContentBox type="note" title="有限単純群の分類定理">
                <p>
                    20世紀後半、世界中の数学者の協力によって「すべての有限単純群の分類」が完遂されました。それは以下の 4 つのカテゴリーに集約されます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>素数位数の巡回群</li>
                    <li>交代群 <InlineMath math="A_n \ (n \geq 5)" /></li>
                    <li>リー型の群（行列群から構成される無限系列）</li>
                    <li>26個の<b>散在型単純群 (Sporadic groups)</b>：モンスター群などの例外的な群</li>
                </ul>
                <p className="mt-2 font-semibold">
                    これは化学における「周期表」のようなものであり、数学史上最も巨大な定理の一つと言われています。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>非自明な正規部分群を持たない群を<strong>単純群</strong>という。</li>
                    <li>因子群がすべて単純群となるような部分群の列を<strong>組成列</strong>と呼ぶ。</li>
                    <li>組成列に現れる組成因子のセットは、列の作り方によらず一意的である（<strong>Jordan-Hölder の定理</strong>）。</li>
                    <li>有限単純群は完全に分類されており、すべての有限群の構造を支える基礎的な「部品」となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
