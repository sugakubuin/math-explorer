import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PowerSeriesIntegrationDifferentiation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                べき級数がただの無限和と一線を画す最大の理由は、「収束円の内部であれば、<strong>項別に微分・積分しても収束半径が変わらず、しかも一様収束が保証されるため、極限と微積分の順序を自由に入れ替えてよい</strong>」という驚異的な性質を持つことです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束円内部での一様収束性</h2>

            <p>
                定理 8.2-1 では、各点 <InlineMath math="x" /> において絶対収束することを見ましたが、「一様収束性」については言及していませんでした。実は、収束円の<strong>境界を含まない任意の閉区間</strong>をとれば、そこでは常に一様収束することが M判定法によって直ちにわかります。
            </p>

            <ContentBox type="theorem" title="Theorem 8.3-1 (べき級数の一様収束)">
                <p>
                    べき級数 <InlineMath math="\sum_{n=0}^\infty a_n x^n" /> の収束半径を <InlineMath math="R > 0" /> とする。<br />
                    任意の <InlineMath math="0 < r < R" /> を選ぶとき、閉区間 <InlineMath math="[-r, r]" /> 上において、このべき級数は<strong>一様収束</strong>する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    区間 <InlineMath math="I = [-r, r]" /> 上で考える。<InlineMath math="r < R" /> であるから、収束半径の定義（定理 8.2-1）より、点 <InlineMath math="x = r" /> においてべき級数は絶対収束する。すなわち、実数級数
                </p>
                <BlockMath math="\sum_{n=0}^\infty |a_n r^n|" />
                <p>
                    は収束する。
                </p>
                <p className="mt-4">
                    一方、区間 <InlineMath math="I" /> 上の任意の点 <InlineMath math="x" /> について、<InlineMath math="|x| \leq r" /> であるから、べき級数の一般項 <InlineMath math="u_n(x) = a_n x^n" /> に対して
                </p>
                <BlockMath math="|u_n(x)| = |a_n x^n| = |a_n| |x|^n \leq |a_n| r^n" />
                <p>
                    という不等式が成り立つ。
                </p>
                <p className="mt-4">
                    ここで、定数項の優級数として <InlineMath math="M_n = |a_n| r^n" /> を選ぶと、上で示した通り <InlineMath math="\sum M_n" /> は収束する。したがって、ワイエルシュトラスのM判定法（定理 8.1-1）の条件がすべて満たされるため、元のべき級数は区間 <InlineMath math="I = [-r, r]" /> 上で一様収束することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                「境界 <InlineMath math="(-R, R)" /> 全体で一様収束する」とは言えませんが、内側の任意の閉区間へ一歩でも退避すれば一様収束が発動します（広義一様収束と呼ばれます）。これにより、Chapter 7 で学んだ「極限関数への連続性の遺伝」などが、収束円の内部のどこでも自由に適用できるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">項別微積分</h2>

            <p>
                最も強力な帰結は、「微分・積分を足し算の中に入れて（項別に）計算してもよい」という性質です。多項式なら当たり前のことですが、これが無限和になっても崩れないのは、べき級数の微分係数が絶妙に構成されているからです。
            </p>

            <ContentBox type="theorem" title="Theorem 8.3-2 (項別微分・項別積分の正当性)">
                <p>
                    べき級数 <InlineMath math="f(x) = \sum_{n=0}^\infty a_n x^n" /> の収束半径を <InlineMath math="R > 0" /> とする。<br />
                    このとき、収束円の内部 <InlineMath math="(-R, R)" /> 上で関数 <InlineMath math="f(x)" /> は微分ならびに積分可能であり、項別に微分・積分を行った次のべき級数も<strong>等しい収束半径 <InlineMath math="R" /></strong> を持ち、その和はそれぞれ <InlineMath math="f'(x)" /> および広義積分 <InlineMath math="\int f(x) dx" /> に等しい。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        <strong>項別微分：</strong>
                        <BlockMath math="f'(x) = \sum_{n=1}^\infty n a_n x^{n-1} = a_1 + 2a_2 x + 3a_3 x^2 + \cdots" />
                    </li>
                    <li>
                        <strong>項別積分：</strong>
                        <BlockMath math="\int_0^x f(t) dt = \sum_{n=0}^\infty \frac{a_n}{n+1} x^{n+1} = a_0 x + \frac{a_1}{2} x^2 + \frac{a_2}{3} x^3 + \cdots" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof (項別微分についての略証)">
                <p>
                    まず、項別微分して得られた新しいべき級数 <InlineMath math="\sum_{n=1}^\infty n a_n x^{n-1}" /> の収束半径が元の <InlineMath math="R" /> と等しいことを、コーシー・アダマールの公式で確認する。<br />
                    元の公式から <InlineMath math="\limsup \sqrt[n]{|a_n|} = 1/R" /> である。微分された係数は <InlineMath math="c_n = (n+1)a_{n+1}" /> （<InlineMath math="x^n" />の係数として）なので、
                </p>
                <BlockMath math="\begin{aligned} &\limsup_{n \to \infty} \sqrt[n]{(n+1)|a_{n+1}|} \\ &= \left( \lim_{n \to \infty} \sqrt[n]{n+1} \right) \times \limsup_{n \to \infty} \sqrt[n]{|a_{n+1}|} \\ &= 1 \times \frac{1}{R} = \frac{1}{R} \end{aligned}" />
                <p>
                    したがって、微分後の級数も収束半径 <InlineMath math="R" /> を持つ。
                </p>
                <p className="mt-4">
                    次に、<InlineMath math="(-R, R)" /> 内の任意の点 <InlineMath math="x" /> を選ぶ。この点を内部に含むような閉区間 <InlineMath math="[-r, r]" /> （ただし <InlineMath math="|x| < r < R" />）をとる。
                </p>
                <p className="mt-4">
                    定理 8.3-1 より、この閉区間 <InlineMath math="[-r, r]" /> 上において、
                </p>
                <ul className="list-decimal list-inside space-y-1 mt-2">
                    <li>元のべき級数 <InlineMath math="\sum a_n t^n" /> は一様収束する。（導関数列の一様収束先の関数がある1点で収束するための条件）</li>
                    <li>微分したべき級数（導関数列） <InlineMath math="\sum n a_n t^{n-1}" /> も、収束半径が <InlineMath math="R" /> であることから同様に一様収束する。</li>
                </ul>
                <p className="mt-4">
                    これはまさに Chapter 7 で証明した「一様収束と微分の交換定理（Theorem 7.4-1）」の前提条件を完璧に満たしている。
                    したがって、極限と微分の順序は交換可能であり、無限和（極限関数）の微分は、各項（導関数）の無限和に等しい。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="corollary" title="Corollary 8.3-1 (べき級数は無限回微分可能)">
                <p>
                    べき級数 <InlineMath math="f(x) = \sum a_n x^n" /> は、その収束円の内部 <InlineMath math="(-R, R)" /> において<strong>無限回微分可能</strong>（<InlineMath math="C^\infty" />級）である。<br />
                    そして、その <InlineMath math="k" /> 階の導関数は、元の級数を <InlineMath math="k" /> 回項別微分したもので与えられ、特に中心点 <InlineMath math="x=0" /> において
                </p>
                <BlockMath math="f^{(k)}(0) = k! a_k \implies a_k = \frac{f^{(k)}(0)}{k!}" />
                <p>
                    が成り立つ。<br />
                    すなわち、<strong>収束半径が正であるべき級数は、必ずそれ自身のマクローリン展開（テイラー展開）に一致する。</strong>
                </p>
            </ContentBox>

            <p>
                項別に微分しても収束半径 <InlineMath math="R" /> が変わらないため、この操作は2回、3回…と文字通り「無限に」続けることができます。これにより、解析学における「関数」を取り扱うための最も強力な基盤——複雑な関数を無限の多項式として計算機のように扱い、しかも微分積分が自由自在——が完成しました。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>べき級数は、収束円の境界の少しでも内側に取った任意の閉区間上で一様収束する（M判定法より）。</li>
                    <li>導関数列の級数も同じ収束半径で一様収束するため、微積分の交換定理により「項別微積分」が正当化される。</li>
                    <li>べき級数は収束円内部で無限回微分可能であり、その係数 <InlineMath math="a_n" /> は自ずとテイラー係数 <InlineMath math="f^{(n)}(0)/n!" /> と一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
