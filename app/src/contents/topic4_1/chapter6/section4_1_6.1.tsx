import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InnerProductSpacesAndExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで、ノルム空間およびバナッハ空間という「長さ（大きさ）」と「完備性」を備えた空間について学んできました。本章では、そこに「角度」や「直交性」という幾何学的な構造を導入する<b>内積空間（inner product space）</b>と、その完備版である<b>ヒルベルト空間（Hilbert space）</b>について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内積の定義</h2>

            <p>
                まずは、ベクトル空間上に内積を公理的に定義します。線形代数学で学んだユークリッド空間の内積を、一般の複素ベクトル空間に拡張した概念です。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (内積)">
                <p>
                    <InlineMath math="\mathbb{K}" /> を実数体 <InlineMath math="\mathbb{R}" /> または複素数体 <InlineMath math="\mathbb{C}" /> とする。<InlineMath math="\mathbb{K}" /> 上のベクトル空間 <InlineMath math="V" /> において、2つの元の組 <InlineMath math="(x, y)" /> に対してスカラーを対応させる写像 <InlineMath math="\langle \cdot, \cdot \rangle : V \times V \to \mathbb{K}" /> が以下の3つの条件（公理）を満たすとき、これを <InlineMath math="V" /> 上の<b>内積（inner product）</b>という。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <b>正定値性</b>：任意の <InlineMath math="x \in V" /> に対し <InlineMath math="\langle x, x \rangle \geq 0" /> であり、<InlineMath math="\langle x, x \rangle = 0 \iff x = 0" /> が成り立つ。
                    </li>
                    <li>
                        <b>第一引数に関する線形性</b>：任意の <InlineMath math="x, y, z \in V" /> とスカラー <InlineMath math="\alpha, \beta \in \mathbb{K}" /> に対し、
                        <BlockMath math="\langle \alpha x + \beta y, z \rangle = \alpha \langle x, z \rangle + \beta \langle y, z \rangle" />
                        が成り立つ。
                    </li>
                    <li>
                        <b>共役対称性</b>：任意の <InlineMath math="x, y \in V" /> に対し、
                        <BlockMath math="\langle x, y \rangle = \overline{\langle y, x \rangle}" />
                        が成り立つ（実ベクトル空間の場合は <InlineMath math="\langle x, y \rangle = \langle y, x \rangle" /> となる）。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-1">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> における<b>標準内積（standard inner product）</b>は次のように定義される。
                </p>
                <BlockMath math="\langle x, y \rangle = \sum_{i=1}^n x_i y_i" />
                <p>
                    例えば、<InlineMath math="\mathbb{R}^3" /> のベクトル <InlineMath math="x = (1, 2, 3)" /> と <InlineMath math="y = (4, -1, 2)" /> に対して、その内積は
                </p>
                <BlockMath math="\langle x, y \rangle = 1\cdot 4 + 2\cdot (-1) + 3\cdot 2 = 4 - 2 + 6 = 8" />
                <p>
                    と計算できる。この内積は幾何学ベクトルにおける「内積」の自然な一般化である。
                </p>
            </ContentBox>

            <p>
                内積が与えられた空間を次のように呼びます。
            </p>

            <ContentBox type="definition" title="Definition 6.1-2 (内積空間)">
                <p>
                    内積が定められたベクトル空間の組 <InlineMath math="(V, \langle \cdot, \cdot \rangle)" /> を<b>内積空間（inner product space）</b>、または計量ベクトル空間とよぶ。
                </p>
            </ContentBox>

            <p>
                内積は自然にノルムを誘導するため、内積空間はノルム空間の特別な場合となります。
            </p>

            <ContentBox type="remark" title="内積の特権性と平行四辺形法則">
                <p>
                    内積空間 <InlineMath math="V" /> において、任意の <InlineMath math="x \in V" /> に対して
                </p>
                <BlockMath math="\|x\| = \sqrt{\langle x, x \rangle}" />
                <p>
                    と定義すると、これはノルムの公理を満たす（次節で証明する）。このように内積は「大きさ」の概念を自然に内包している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内積空間の例</h2>

            <p>
                関数解析では、無限次元の内積空間が特に重要になります。代表的なものの例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 6.1-2">
                <p>
                    数列の空間 <InlineMath math="\ell^2" /> における内積は、次のように定義される。
                </p>
                <BlockMath math="\langle x, y \rangle = \sum_{n=1}^\infty x_n \overline{y_n}" />
                <p>
                    ここで <InlineMath math="x = (x_n), y = (y_n) \in \ell^2" /> である。この無限級数が絶対収束することは、次節で述べるコーシー-シュワルツの不等式により保証される。
                </p>
            </ContentBox>

            <p>
                数列空間だけでなく、可積分関数の空間にも内積を定義することができます。
            </p>

            <ContentBox type="example" title="Example 6.1-3">
                <p>
                    <InlineMath math="L^2[a, b]" /> の内積は、次のように定義される。
                </p>
                <BlockMath math="\langle f, g \rangle = \int_a^b f(x)\overline{g(x)} \,dx" />
                <p>
                    例えば、区間 <InlineMath math="[0, 1]" /> において実数値関数 <InlineMath math="f(x) = 1" /> と <InlineMath math="g(x) = x" /> を考えると、これらの内積は
                </p>
                <BlockMath math="\langle f, g \rangle = \int_0^1 1 \cdot x \,dx = \left[ \frac{1}{2}x^2 \right]_0^1 = \frac{1}{2}" />
                <p>
                    と計算される。関数をベクトルとして扱い、その「角度」を考える基礎となる。
                </p>
            </ContentBox>

            <p>
                このように、多様な空間に対して内積を定義することで、幾何学的な直観を関数や数列の空間にも持ち込むことができます。
            </p>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>内積は、正定値性、第一引数に関する線形性、共役対称性を満たす写像である。</li>
                    <li>内積が定義されたベクトル空間を内積空間といい、常に <InlineMath math="\|x\| = \sqrt{\langle x, x \rangle}" /> によってノルムが誘導される。</li>
                    <li><InlineMath math="\mathbb{R}^n" />、<InlineMath math="\ell^2" />、<InlineMath math="L^2[a,b]" /> などが重要な内積空間の例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
