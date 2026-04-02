import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConcreteGroupExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                群の公理は抽象的ですが、そこから導かれる性質は驚くほど多様な対象に適用できます。
                本節では、数、行列、置換など、具体的な群の例を詳しく見ていき、それらが確かに群の公理を満たしていることを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">剰余群と行列群</h2>

            <p className="leading-relaxed">
                周期的な構造を持つ「剰余群」と、線形代数学で重要な「行列群」は、代数学の土台となる例です。
            </p>

            <ContentBox type="example" title="Example 1.2-1 (剰余加法群 ℤ/nℤ)">
                <p>
                    整数を <InlineMath math="n" /> で割った余りの集合 <InlineMath math="\mathbb{Z}/n\mathbb{Z} = \{0, 1, \dots, n-1\}" /> は、
                    加法 <InlineMath math="\text{mod } n" /> の下で群をなす。
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg mt-4">
                    <h4 className="font-bold mb-2">群公理の確認：</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><b>閉性</b>：2 つの余りの和をさらに <InlineMath math="n" /> で割った余りは再び <InlineMath math="\{0, \dots, n-1\}" /> に属する。</li>
                        <li><b>結合律</b>：整数の加法から継承される。</li>
                        <li><b>単位元</b>：<InlineMath math="0" />。任意の <InlineMath math="x" /> に対し <InlineMath math="x + 0 \equiv 0 + x \equiv x \pmod n" />。</li>
                        <li><b>逆元</b>：<InlineMath math="x \neq 0" /> のとき、逆元は <InlineMath math="n-x" />。実際、<InlineMath math="x + (n-x) \equiv n \equiv 0 \pmod n" />。</li>
                    </ul>
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2 (一般線形群 GL_n(ℝ))">
                <p>
                    <InlineMath math="n \times n" /> 正則行列の全体
                    <BlockMath math="GL_n(\mathbb{R}) = \{ A \in M_n(\mathbb{R}) \mid \det A \neq 0 \}" />
                    は、行列の積に関して群をなす。
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg mt-4">
                    <h4 className="font-bold mb-2">群公理の確認：</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><b>閉性</b>：<InlineMath math="\det(AB) = \det A \det B" /> より、正則行列どうしの積も正則である。</li>
                        <li><b>結合律</b>：行列の積の結合律 <InlineMath math="(AB)C = A(BC)" /> は常に成り立つ。</li>
                        <li><b>単位元</b>：単位行列 <InlineMath math="I" />。<InlineMath math="AI = IA = A" />。</li>
                        <li><b>逆元</b>：<InlineMath math="\det A \neq 0" /> ならば逆行列 <InlineMath math="A^{-1}" /> が存在し、<InlineMath math="AA^{-1} = A^{-1}A = I" />。</li>
                    </ul>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対称群（置換群）</h2>

            <p className="leading-relaxed">
                「ものの並べ替え」という操作そのものも、群の構造を持ちます。これは有限群論において極めて重要な役割を果たします。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (置換)">
                <p>
                    集合 <InlineMath math="X = \{1, 2, \dots, n\}" /> から自分自身への全単射（一対一対応）を、<InlineMath math="n" /> 次の<b>置換 (Permutation)</b>と呼ぶ。
                    置換の表記方法には主に以下の 2 通りがある：
                </p>
                <ul className="list-disc list-inside space-y-4 mt-2">
                    <li>
                        <b>2行表記</b>：上段に元の並び、下段にそれらが移る先の値を並べて記述する。
                        <BlockMath math="\sigma = \begin{pmatrix} 1 & 2 & \dots & n \\ \sigma(1) & \sigma(2) & \dots & \sigma(n) \end{pmatrix}" />
                    </li>
                    <li>
                        <b>巡回置換表記 (Cycle Notation)</b>：移り変わりのサイクル（循環）を抽出し、<InlineMath math="(a_1 a_2 \dots a_k)" /> と記述する。これは <InlineMath math="a_1 \to a_2 \to \dots \to a_k \to a_1" /> という対応を意味し、動かない元は記述を省略するのが一般的である。
                    </li>
                </ul>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg mt-4 text-sm">
                    <p className="font-bold mb-1">【例：3次対称群 S_3 の元】</p>
                    <p>
                        <InlineMath math="1 \to 2, 2 \to 3, 3 \to 1" /> という入れ替えを行う置換 <InlineMath math="\sigma" /> は、次のように書ける：
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
                        <span>2行表記：<InlineMath math="\sigma = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \end{pmatrix}" /></span>
                        <span className="hidden sm:inline">＝</span>
                        <span>巡回置換表記：<InlineMath math="\sigma = (123)" /></span>
                    </div>
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-3 (対称群 S_n)">
                <p>
                    <InlineMath math="n" /> 次の置換全体の集合を <InlineMath math="S_n" /> と書き、<b><InlineMath math="n" /> 次対称群</b>と呼ぶ。
                    演算は写像の<b>合成</b>として定義される。
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg mt-4">
                    <h4 className="font-bold mb-2">群公理の確認：</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>
                            <b>閉性</b>：<InlineMath math="\sigma, \tau \in S_n" /> が共に全単射であれば、その合成写像 <InlineMath math="\sigma \circ \tau" /> もまた <InlineMath math="X" /> から <InlineMath math="X" /> への全単射となる。したがって <InlineMath math="\sigma \tau \in S_n" /> である。
                        </li>
                        <li>
                            <b>結合律</b>：一般に、写像の合成において <InlineMath math="( \sigma \circ \tau ) \circ \rho = \sigma \circ ( \tau \circ \rho )" /> が成り立つ。
                        </li>
                        <li>
                            <b>単位元</b>：恒等写像 <InlineMath math="\text{id}" />（すべての <InlineMath math="i" /> に対して <InlineMath math="\text{id}(i) = i" />）が単位元となる。任意の <InlineMath math="\sigma" /> に対し、<InlineMath math="\sigma \circ \text{id} = \text{id} \circ \sigma = \sigma" /> である。
                        </li>
                        <li>
                            <b>逆元</b>：<InlineMath math="\sigma" /> が全単射であることから、逆写像 <InlineMath math="\sigma^{-1}" /> が一意に定まり、これもまた全単射（<InlineMath math="S_n" /> の元）である。
                            これは <InlineMath math="\sigma \circ \sigma^{-1} = \sigma^{-1} \circ \sigma = \text{id}" /> を満たす。
                        </li>
                    </ul>
                </div>
                <p className="mt-4">
                    例えば <InlineMath math="S_3" /> の位数は <InlineMath math="3! = 6" /> であり、置換を合成する順番を入れ替えると結果が変わるため、<b>非可換群</b>の代表例となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直積群</h2>

            <ContentBox type="definition" title="Definition 1.2-1 (直積群)">
                <p>
                    2 つの群 <InlineMath math="G, H" /> に対し、集合を直積 <InlineMath math="G \times H" /> とし、演算を成分ごとに
                    <BlockMath math="(g_1, h_1)(g_2, h_2) = (g_1 g_2, h_1 h_2)" />
                    と定義したものを<b>直積群</b>という。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-4 (クラインの 4 群)">
                <p>
                    <InlineMath math="V_4 = \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} = \{ (0,0), (0,1), (1,0), (1,1) \}" /> は、位数 <InlineMath math="4" /> の代表的な群である。
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg mt-4">
                    <h4 className="font-bold mb-2">群公理の確認：</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><b>閉性</b>：各成分の加法が閉じているため、直積集合上でも閉じている。</li>
                        <li><b>結合律</b>：各成分（<InlineMath math="\mathbb{Z}/2\mathbb{Z}" />）の加法が結合律を満たすことから、成分ごとの演算も結合律を満たす。</li>
                        <li><b>単位元</b>：<InlineMath math="(0, 0)" />。</li>
                        <li><b>逆元</b>：各元 <InlineMath math="(a, b)" /> の逆元は自身 <InlineMath math="(a, b)" /> となる。</li>
                    </ul>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>剰余群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> は、日常生活の時計のような周期性を表す。</li>
                    <li>行列群 <InlineMath math="GL_n(\mathbb{R})" /> は、線形変換の「可逆性」を群として捉えたものである。</li>
                    <li>対称群 <InlineMath math="S_n" /> は、置換の合成という非可換な構造を持つ重要な群である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
