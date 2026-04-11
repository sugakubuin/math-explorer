import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AnyEllipticFunctionRepresentation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、ある格子 <InlineMath math="\Lambda" /> に関する任意の楕円関数が、ワイエルシュトラスの <InlineMath math="\wp" /> 関数とその導関数 <InlineMath math="\wp'" /> を用いて有理式として表せることを証明します。この結果は、楕円関数の全体がなす代数的な構造を決定づける極めて重要な定理です。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">偶関数の場合</h2>

            <p>まず、任意の楕円関数が <InlineMath math="\wp" /> と <InlineMath math="\wp'" /> の有理式で表されるという主定理を述べます。その証明の第一歩として、偶関数である楕円関数が <InlineMath math="\wp" /> の有理式で表されることを示します。</p>

            <ContentBox type="theorem" title={<span>Theorem 3.6-1 (任意の楕円関数の <InlineMath math="\wp, \wp'" /> による表示)</span>}>
                <p>格子 <InlineMath math="\Lambda" /> に関する任意の楕円関数は、<InlineMath math="\wp" /> と <InlineMath math="\wp'" /> の <InlineMath math="\mathbb{C}" /> 上の有理式として表される。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>証明は以下のステップで行う。まず、任意の偶楕円関数が <InlineMath math="\wp" /> の有理式であることを示す（Lemma 3.6-1）。次に、一般の楕円関数を偶関数部分と奇関数部分に分解し、奇関数部分を <InlineMath math="\wp'" /> で割ることで偶関数に帰着させる。詳細は後述する。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>主定理の証明の核心となる、偶楕円関数に関する補題を証明します。</p>

            <ContentBox type="lemma" title={<span>Lemma 3.6-1 (偶楕円関数の <InlineMath math="\wp" /> による表示)</span>}>
                <p>格子 <InlineMath math="\Lambda" /> に関する偶楕円関数は、<InlineMath math="\wp" /> の有理式として表される。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>定数でない偶楕円関数 <InlineMath math="f(z)" /> を考える。基本周期平行四辺形内での <InlineMath math="f" /> の零点を <InlineMath math="a_1, \dots, a_n" />、極を <InlineMath math="b_1, \dots, b_n" /> とする（重複度を含む）。<InlineMath math="f" /> が偶関数であることから、<InlineMath math="a_i" /> が零点（極）ならば <InlineMath math="-a_i" /> も零点（極）となる。</p>
                <p>関数 <InlineMath math="g(z)" /> を次のように構成する：</p>
                <BlockMath math="g(z) = \prod_{i} \frac{\wp(z) - \wp(a_i)}{\wp(z) - \wp(b_i)}" />
                <p><InlineMath math="\wp(z) - \wp(a_i)" /> は <InlineMath math="z = \pm a_i" /> で零点を持つため、<InlineMath math="g(z)" /> は <InlineMath math="f(z)" /> と全く同じ位置に同じ位数の零点と極を持つ。したがって、商 <InlineMath math="f(z)/g(z)" /> は極を持たない楕円関数、すなわち整関数となる。リウヴィルの定理（Theorem 2.4-1）より、整関数である楕円関数は定数 <InlineMath math="C" /> である。よって <InlineMath math="f(z) = C g(z)" /> となり、<InlineMath math="f(z)" /> は <InlineMath math="\wp(z)" /> の有理式として表される。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>この補題を用いると、具体的な偶楕円関数を <InlineMath math="\wp" /> の有理式として具体的に計算することができます。</p>

            <ContentBox type="example" title="Example 3.6-1">
                <p><InlineMath math="f(z) = \wp(2z)" /> は偶楕円関数であるため、Lemma 3.6-1 により <InlineMath math="\wp(z)" /> の有理式として表すことができる。実際、§5.3 で導出される倍加公式によれば、以下の関係が成り立つ：</p>
                <BlockMath math="\wp(2z) = -2\wp(z) + \frac{1}{4}\left(\frac{\wp''(z)}{\wp'(z)}\right)^2" />
                <p>ここで微分方程式 <InlineMath math="\wp''(z) = 6\wp(z)^2 - \frac{g_2}{2}" /> および <InlineMath math="\wp'(z)^2 = 4\wp(z)^3 - g_2\wp(z) - g_3" /> を代入すると、<InlineMath math="\wp(2z)" /> を完全に <InlineMath math="\wp(z)" /> のみの有理式で書き表すことができる。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般の場合</h2>

            <p>偶関数に関する結果が得られたので、任意の楕円関数について定理を証明しましょう。</p>

            <ContentBox type="proof" title="Proof">
                <p>任意の楕円関数 <InlineMath math="f(z)" /> は、次のように偶関数部分 <InlineMath math="f_{\text{even}}" /> と奇関数部分 <InlineMath math="f_{\text{odd}}" /> の和に一意に分解できる：</p>
                <BlockMath math="\begin{aligned} f(z) &= \frac{f(z) + f(-z)}{2} + \frac{f(z) - f(-z)}{2} \\ &= f_{\text{even}}(z) + f_{\text{odd}}(z) \end{aligned}" />
                <p>ここで、<InlineMath math="f_{\text{even}}(z)" /> は偶楕円関数であるため、Lemma 3.6-1 より <InlineMath math="\wp(z)" /> の有理式 <InlineMath math="R_1(\wp(z))" /> として表される。</p>
                <p>一方、<InlineMath math="f_{\text{odd}}(z)" /> は奇関数である。ここで、<InlineMath math="\wp'(z)" /> も奇楕円関数であることに着目し、商 <InlineMath math="\frac{f_{\text{odd}}(z)}{\wp'(z)}" /> を考える。奇関数同士の商は偶関数となるため、この商も偶楕円関数となる。よって再び Lemma 3.6-1 より、ある有理式 <InlineMath math="R_2" /> を用いて <InlineMath math="\frac{f_{\text{odd}}(z)}{\wp'(z)} = R_2(\wp(z))" /> と表される。</p>
                <p>以上をまとめると、</p>
                <BlockMath math="f(z) = R_1(\wp(z)) + \wp'(z)R_2(\wp(z))" />
                <p>となり、<InlineMath math="f(z)" /> は <InlineMath math="\wp(z)" /> と <InlineMath math="\wp'(z)" /> の有理式として表されることが証明された。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>この定理は、あらゆる楕円関数が実質的に <InlineMath math="\wp" /> と <InlineMath math="\wp'" /> の組み合わせに過ぎないことを示しています。</p>

            <ContentBox type="example" title="Example 3.6-2">
                <p>自明な例として、<InlineMath math="\wp'(z)" /> 自身もまた <InlineMath math="\wp" /> と <InlineMath math="\wp'" /> の有理式として表される（<InlineMath math="R_1 = 0, R_2 = 1" />）。</p>
            </ContentBox>

            <ContentBox type="remark" title="有理型関数体の構造">
                <p>Theorem 3.6-1 は、複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> 上の有理型関数のなす体（関数体）に関する強力な代数的結論を与えています。この関数体は <InlineMath math="\mathbb{C}(\wp, \wp')" /> と一致し、さらに <InlineMath math="\wp" /> と <InlineMath math="\wp'" /> は微分方程式</p>
                <BlockMath math="(\wp')^2 = 4\wp^3 - g_2\wp - g_3" />
                <p>という1つの代数的な関係式を満たします。これは、楕円関数の関数体が <InlineMath math="\mathbb{C}(\wp)" /> の2次拡大体であることを意味しており、代数幾何学的に言えば、複素トーラスが代数曲線（楕円曲線）と同型であることを強く示唆しています。この点については Chapter 5 でより詳しく探求します。</p>
            </ContentBox>

            <ContentBox type="note" title="§3.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>偶楕円関数は <InlineMath math="\wp" /> の有理式として表される。</li>
                    <li>任意の楕円関数は偶関数部分と奇関数部分に分解でき、奇関数部分は <InlineMath math="\wp'" /> と偶関数の積として表せる。</li>
                    <li>結果として、任意の楕円関数は <InlineMath math="\wp" /> と <InlineMath math="\wp'" /> の有理式として一意に表現される。</li>
                    <li>この事実は、楕円関数の全体がなす関数体が <InlineMath math="\mathbb{C}(\wp)" /> の2次拡大体であることを示している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
