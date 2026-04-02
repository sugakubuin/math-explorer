import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FiniteGroupClassification() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                シローの定理は、与えられた位数を持つ群がどのような構造をしているか（あるいはどのような構造しか持ち得ないか）を決定する、群の「分類問題」において無類の威力を発揮します。本節では、複数の素数の積で表される位数の群を実際に分類する過程を通じて、その威力を体感します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">小さな位数の群の分類</h2>

            <p>
                前節で、位数が 15 の群はシロー 3-部分群もシロー 5-部分群もそれぞれ 1 つずつしか持たないことを見ました。この「1つしか存在しない」という事実は、その部分群が「正規部分群」であることを意味します。なぜなら、シローの第二定理によりすべてのシロー <InlineMath math="p" />-部分群は互いに共役（<InlineMath math="gPg^{-1}" /> の形）ですが、ただ 1 つしかないのであれば、任意の <InlineMath math="g \in G" /> に対して <InlineMath math="gPg^{-1} = P" /> とならざるを得ないからです。
            </p>
            <p>
                この性質を一般化すると、位数が 2 つの素数の積で表される群について非常に強力な分類定理が得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.4-1 (位数 pq の群の構造)">
                <p>
                    <InlineMath math="p, q" /> を <InlineMath math="p < q" /> を満たす素数とする。有限群 <InlineMath math="G" /> の位数が <InlineMath math="|G| = pq" /> であり、かつ <InlineMath math="p" /> が <InlineMath math="q-1" /> を割り切らない（<InlineMath math="p \nmid q-1" />）ならば、<InlineMath math="G" /> は巡回群に同型である。すなわち、
                </p>
                <BlockMath math="G \cong \mathbb{Z}/pq\mathbb{Z}" />
                <p>
                    のみが存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    シローの第三定理を用いて、シロー <InlineMath math="p" />-部分群の個数 <InlineMath math="n_p" /> と、シロー <InlineMath math="q" />-部分群の個数 <InlineMath math="n_q" /> を決定する。
                </p>
                <p>
                    <b><InlineMath math="n_q" /> について：</b><br />
                    定理より <InlineMath math="n_q \equiv 1 \pmod q" /> かつ <InlineMath math="n_q \mid p" /> である。<InlineMath math="p" /> の約数は <InlineMath math="1, p" /> のみであるが、<InlineMath math="p < q" /> であるため <InlineMath math="p" /> が <InlineMath math="q" /> で割って 1 余ることはあり得ない。したがって、<InlineMath math="n_q = 1" /> が確定する。これにより、唯一のシロー <InlineMath math="q" />-部分群 <InlineMath math="Q" /> は正規部分群（<InlineMath math="Q \trianglelefteq G" />）である。
                </p>
                <p>
                    <b><InlineMath math="n_p" /> について：</b><br />
                    定理より <InlineMath math="n_p \equiv 1 \pmod p" /> かつ <InlineMath math="n_p \mid q" /> である。<InlineMath math="q" /> の約数は <InlineMath math="1, q" /> のみである。もし <InlineMath math="n_p = q" /> であったとすると、<InlineMath math="q \equiv 1 \pmod p" />、すなわち <InlineMath math="p \mid (q-1)" /> となり、定理の仮定に反する。したがって <InlineMath math="n_p \neq q" /> であり、<InlineMath math="n_p = 1" /> が確定する。これにより、唯一のシロー <InlineMath math="p" />-部分群 <InlineMath math="P" /> も正規部分群（<InlineMath math="P \trianglelefteq G" />）である。
                </p>
                <p>
                    <b>直積への分解：</b><br />
                    <InlineMath math="P" /> と <InlineMath math="Q" /> は共に素数位数の部分群であるため、巡回群である。<InlineMath math="P \cap Q" /> はラグランジュの定理により位数が <InlineMath math="p" /> の約数かつ <InlineMath math="q" /> の約数でなければならないため、<InlineMath math="P \cap Q = \{e\}" /> である。<br />
                    また、両方が正規部分群であることから、任意の <InlineMath math="x \in P, y \in Q" /> の交換子 <InlineMath math="xyx^{-1}y^{-1}" /> は、<InlineMath math="(xyx^{-1})y^{-1} \in Qy^{-1} = Q" /> かつ <InlineMath math="x(yx^{-1}y^{-1}) \in xP = P" /> となり、<InlineMath math="P \cap Q = \{e\}" /> より <InlineMath math="xyx^{-1}y^{-1} = e" />、すなわち <InlineMath math="xy = yx" /> となる（<InlineMath math="P" /> の要素と <InlineMath math="Q" /> の要素は可換）。
                </p>
                <p>
                    群 <InlineMath math="PQ = \{xy \mid x \in P, y \in Q\}" /> の要素数は <InlineMath math="|P||Q|/|P \cap Q| = pq" /> となるため、<InlineMath math="G = PQ" /> である。これは <InlineMath math="G" /> が <InlineMath math="P" /> と <InlineMath math="Q" /> の直積に同型であることを意味する。
                </p>
                <BlockMath math="G \cong P \times Q \cong \mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/q\mathbb{Z}" />
                <p>
                    <InlineMath math="p, q" /> は互いに素であるから、中国剰余定理によりこの直積群は巡回群 <InlineMath math="\mathbb{Z}/pq\mathbb{Z}" /> に同型である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 10.4-1 (位数 15 の群の構造決定)">
                <p>
                    位数が <InlineMath math="|G| = 15 = 3 \times 5" /> の群を考える。
                </p>
                <p>
                    <InlineMath math="p = 3, q = 5" /> とすると、<InlineMath math="3 < 5" /> であり、<InlineMath math="q-1 = 4" /> は <InlineMath math="p=3" /> で割り切れない（<InlineMath math="3 \nmid 4" />）。
                </p>
                <p>
                    したがって上記の定理が適用でき、位数 15 の群は同型を除いて巡回群 <InlineMath math="\mathbb{Z}/15\mathbb{Z}" /> の 1 種類しか存在しないことが完全に証明された。非可換な位数 15 の群は存在しない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="p | (q-1) の場合">
                <p>
                    もし <InlineMath math="p \mid q-1" /> の場合（例えば <InlineMath math="|G| = 6 = 2 \times 3" /> の場合、<InlineMath math="p=2, q=3" /> で <InlineMath math="2 \mid 2" />）、シロー <InlineMath math="p" />-部分群の個数 <InlineMath math="n_p" /> は <InlineMath math="q" /> になる可能性が残ります。この場合、巡回群 <InlineMath math="\mathbb{Z}/pq\mathbb{Z}" /> に加えて、非可換な群（半直積と呼ばれる構造）がもう 1 つ存在します。位数 6 の場合であれば、これが対称群 <InlineMath math="S_3" />（または二面体群 <InlineMath math="D_3" />）に相当します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積位数の群の分類</h2>

            <p>
                3 つの素数の積などのより複雑な位数を持つ場合でも、シローの定理を用いて「矛盾を導く」ことで群の構造を絞り込んでいくことができます。
            </p>

            <ContentBox type="example" title="Example 10.4-2 (位数 30 の群の分析)">
                <p>
                    位数が <InlineMath math="|G| = 30 = 2 \times 3 \times 5" /> の群について、シロー部分群の個数を分析します。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><b>シロー 5-部分群の個数 <InlineMath math="n_5" />：</b> <InlineMath math="n_5 \equiv 1 \pmod 5" /> かつ <InlineMath math="n_5 \mid 6" />。条件を満たすのは <InlineMath math="n_5 = 1" /> または <InlineMath math="n_5 = 6" />。</li>
                    <li><b>シロー 3-部分群の個数 <InlineMath math="n_3" />：</b> <InlineMath math="n_3 \equiv 1 \pmod 3" /> かつ <InlineMath math="n_3 \mid 10" />。条件を満たすのは <InlineMath math="n_3 = 1" /> または <InlineMath math="n_3 = 10" />。</li>
                </ul>
                <p>
                    ここでもし仮に「<InlineMath math="n_5 = 6" /> かつ <InlineMath math="n_3 = 10" />」であったと仮定して、群の中の要素の数を数え上げてみます。
                </p>
                <p>
                    各シロー 5-部分群（位数 5）は、単位元以外の 4 つの要素（位数 5 の要素）を持ちます。異なる素数位数の部分群同士の交わりは単位元のみであるため、位数 5 の要素は全部で <InlineMath math="6 \times 4 = 24" /> 個存在することになります。
                </p>
                <p>
                    同様に、各シロー 3-部分群（位数 3）は、単位元以外の 2 つの要素を持ちます。位数 3 の要素は全部で <InlineMath math="10 \times 2 = 20" /> 個存在することになります。
                </p>
                <p>
                    これだけで要素の合計が <InlineMath math="24 + 20 = 44" /> 個となり、群の全体の要素数である 30 を超えてしまい、矛盾します。
                </p>
                <p>
                    したがって、最初の仮定は誤りであり、<b>「<InlineMath math="n_5 = 1" /> または <InlineMath math="n_3 = 1" /> の少なくとも一方は必ず成り立つ」</b>ことが結論づけられます。つまり、位数 30 の群は、位数が 5 の正規部分群か、位数が 3 の正規部分群の少なくともいずれか一方を必ず持つ（単純群ではない）ことがわかります。
                </p>
                <p>
                    この事実を出発点としてさらに詳細な分析を進めると、位数 30 の群は同型を除いて <InlineMath math="\mathbb{Z}/30\mathbb{Z}" />、<InlineMath math="D_{15}" />、<InlineMath math="\mathbb{Z}/3\mathbb{Z} \times D_5" />、<InlineMath math="\mathbb{Z}/5\mathbb{Z} \times D_3" /> の 4 種類に完全に分類できることが知られています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="シローの定理の群論における意義">
                <p>
                    群の位数を素因数分解し、シローの定理から得られる <InlineMath math="n_p" /> の候補を挙げ、要素数を数え上げて矛盾を導くことで正規部分群の存在を示す。この一連の論法は、有限群の構造決定や、「特定の位数を持つ単純群は存在しない」ことを証明するための最も標準的で強力なテクニックです。
                </p>
                <p>
                    この章で学んだ群の作用やシローの定理の考え方は、群論そのものの理解を深めるだけでなく、今後の代数学（環論や体論）、そして方程式の可解性を論じる<b>ガロア理論（Galois Theory）</b>においても非常に重要な基盤となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§10.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>シローの定理（とくに第三定理）は、群のシロー部分群が 1 つしかないこと（＝正規部分群であること）を示すための強力なツールである。</li>
                    <li><InlineMath math="p < q" /> なる素数で <InlineMath math="p \nmid q-1" /> のとき、位数 <InlineMath math="pq" /> の群は巡回群 <InlineMath math="\mathbb{Z}/pq\mathbb{Z}" /> しか存在しない（例：位数 15 の群）。</li>
                    <li>より複雑な位数の群（例：位数 30）であっても、シロー部分群の要素数を数え上げて矛盾を導くことで、正規部分群の存在を証明できる。</li>
                    <li>シローの定理は有限群の分類問題やガロア理論への重要な架け橋となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}