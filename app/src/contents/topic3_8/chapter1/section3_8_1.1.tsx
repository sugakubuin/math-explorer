import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BinaryOperationsAndGroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                数学における「構造」を捉えるための最も基本的かつ強力な枠組みの一つが「群（Group）」です。
                群論は、対称性、代数方程式の可解性、幾何学的な変換など、現代数学の至る所に現れます。
                本節では、まず二項演算の概念から出発し、群の公理系を定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">二項演算と代数系</h2>

            <p className="leading-relaxed">
                集合の元どうしを「組み合わせる」規則を、数学的には写像として定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (二項演算)">
                <p>
                    集合 <InlineMath math="G" /> 上の<b>二項演算</b>とは、写像
                    <BlockMath math="\cdot : G \times G \to G \quad ((a, b) \mapsto a \cdot b)" />
                    のことである。通常、<InlineMath math="a \cdot b" /> を <InlineMath math="ab" /> と略記する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                二項演算が備えるべき性質に応じて、代数系は次のように段階的に定義されます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (半群・モノイド)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>半群 (Semigroup)</b>：二項演算が<b>結合律</b>を満たす代数系 <InlineMath math="(G, \cdot)" />。
                        <BlockMath math="\forall a, b, c \in G, \quad (ab)c = a(bc)" />
                    </li>
                    <li>
                        <b>モノイド (Monoid)</b>：半群に<b>単位元</b> <InlineMath math="e" /> が存在するもの。
                        <BlockMath math="\exists e \in G, \quad \forall a \in G, \quad ea = ae = a" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-1 (半群とモノイドの例)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <InlineMath math="(\mathbb{N}, +)" />（自然数と加法）：<InlineMath math="0" /> を含めない場合、単位元が存在しないため半群であるがモノイドではない。
                    </li>
                    <li>
                        <InlineMath math="(\mathbb{N}_0, +)" />（<InlineMath math="0" /> を含む自然数）：<InlineMath math="0" /> を単位元とするモノイドである。
                    </li>
                    <li>
                        <InlineMath math="(\mathbb{N}, \cdot)" />（自然数と乗法）：<InlineMath math="1" /> を単位元とするモノイドである。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">群の定義</h2>

            <p className="leading-relaxed">
                モノイドに「元を元に戻す」操作（逆元）を加えたものが群です。
            </p>

            <ContentBox type="definition" title="Definition 1.1-3 (群)">
                <p>
                    モノイド <InlineMath math="(G, \cdot)" /> の各元 <InlineMath math="a \in G" /> に対して<b>逆元</b> <InlineMath math="a^{-1}" /> が存在するとき、これを<b>群 (Group)</b>という。
                    <BlockMath math="\forall a \in G, \quad \exists a^{-1} \in G, \quad aa^{-1} = a^{-1}a = e" />
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 1.1-4 (群の位数)">
                <p>
                    群 <InlineMath math="G" /> の集合としての元の個数をその群の<b>位数 (Order)</b>と呼び、<InlineMath math="|G|" /> あるいは <InlineMath math="\mathrm{ord}(G)" /> と表記する。
                </p>
                <ul className="list-disc list-inside mt-2 text-sm">
                    <li><InlineMath math="|G| < \infty" /> のとき、<InlineMath math="G" /> を<b>有限群</b>という。</li>
                    <li><InlineMath math="|G| = \infty" /> のとき、<InlineMath math="G" /> を<b>無限群</b>という。</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-2 (群の例と非例)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <InlineMath math="(\mathbb{Z}, +)" />（整数加法群）：単位元は <InlineMath math="0" />、<InlineMath math="n" /> の逆元は <InlineMath math="-n" /> であり、群である。
                    </li>
                    <li>
                        <InlineMath math="(\mathbb{Z}, \cdot)" />：モノイド（単位元 <InlineMath math="1" />）ではあるが、<InlineMath math="2" /> の逆元 <InlineMath math="1/2" /> が <InlineMath math="\mathbb{Z}" /> に存在しないため群ではない。
                    </li>
                    <li>
                        <InlineMath math="(\mathbb{Q} \setminus \{0\}, \cdot)" />：単位元は <InlineMath math="1" />、逆元は <InlineMath math="1/x" />。これは群である。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="公理の最小性について">
                <p>
                    群の公理において、単位元や逆元は「左側のみ」あるいは「右側のみ」の存在を仮定するだけで十分であることが知られています。
                    例えば、「左単位元の存在」と「各元の左逆元の存在」を仮定すれば、それらが自動的に右側とも一致することが証明できます。
                    本講義では、標準的な「両側」の存在を仮定する定義を採用します。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>二項演算が結合律を満たすとき半群、さらに単位元があればモノイドと呼ぶ。</li>
                    <li>モノイドの全元に逆元が存在する代数系が「群」である。</li>
                    <li>数の集合でも、演算の種類（加法か乗法か）によって群になるかどうかが決まる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
