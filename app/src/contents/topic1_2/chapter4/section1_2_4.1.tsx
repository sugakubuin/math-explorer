import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function InfiniteSeries() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「無限個の数を足し合わせる」ということは可能でしょうか？
                本章では、数列の項を無限に足し合わせる<strong>無限級数</strong>について学びます。
                直感的には無限に足せば無限大になりそうですが、「足す数が十分に速く <InlineMath math="0" /> に近づけば」、その和は有限の値に収束することがあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 無限級数と部分和
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">無限級数と部分和</h2>

            <p>
                無限個の和を直接計算することはできないので、まずは「有限個までの和（部分和）」を考え、その極限をとることで無限級数を定義します。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 （無限級数と部分和）">
                <p>
                    数列 <InlineMath math="\{a_n\}" /> に対し、その項を順に無限に足し合わせた式
                </p>
                <BlockMath math="a_1 + a_2 + a_3 + \dots + a_n + \dots = \sum_{n=1}^\infty a_n" />
                <p>
                    を<strong>無限級数 (Infinite Series)</strong>、あるいは単に<strong>級数</strong>という。
                </p>
                <p className="mt-2">
                    また、初項から第 <InlineMath math="n" /> 項までの有限の和
                </p>
                <BlockMath math="S_n = a_1 + a_2 + \dots + a_n = \sum_{k=1}^n a_k" />
                <p>
                    を、この無限級数の<strong>第 <InlineMath math="n" /> 部分和 (Partial Sum)</strong> という。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 4.1-2 （無限級数の収束・発散）">
                <p>
                    無限級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty a_n" /> について、その部分和の数列 <InlineMath math="\{S_n\}" /> が極限値 <InlineMath math="S" /> に収束するとき（すなわち <InlineMath math="\displaystyle \lim_{n \to \infty} S_n = S" /> となるとき）、
                    この無限級数は実数 <InlineMath math="S" /> に<strong>収束する (Converge)</strong> といい、この <InlineMath math="S" /> を級数の<strong>和</strong>と呼ぶ。
                </p>
                <BlockMath math="\sum_{n=1}^\infty a_n = S" />
                <p className="mt-2">
                    数列 <InlineMath math="\{S_n\}" /> が収束しない（発散したり振動したりする）とき、この無限級数は<strong>発散する (Diverge)</strong> という。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-1 （部分分数分解を利用する級数）">
                <p>
                    無限級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{1}{n(n+1)}" /> の収束を調べ、収束する場合はその和を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>部分和 <InlineMath math="S_n" /> を計算する。各項を部分分数分解すると <InlineMath math="\displaystyle \frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}" /> なので、</p>
                <BlockMath math="\begin{aligned} S_n &= \sum_{k=1}^n \left( \frac{1}{k} - \frac{1}{k+1} \right) \\ &= \left( 1 - \frac{1}{2} \right) + \left( \frac{1}{2} - \frac{1}{3} \right) + \dots + \left( \frac{1}{n} - \frac{1}{n+1} \right) \end{aligned}" />
                <p>隣り合う項が次々と打ち消し合い、最初と最後だけが残る（これを「望遠鏡和」と呼びます）。</p>
                <BlockMath math="S_n = 1 - \frac{1}{n+1}" />
                <p>ここで <InlineMath math="n \to \infty" /> とすると、<InlineMath math="\displaystyle \lim_{n \to \infty} \frac{1}{n+1} = 0" /> なので、<InlineMath math="S_n \to 1" />。</p>
                <p>よって、この級数は <InlineMath math="1" /> に収束する。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基本的な収束条件
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基本的な収束条件</h2>

            <p>
                無限に足し合わせても有限の値になるためには、足していく数 <InlineMath math="a_n" /> 自体がだんだん小さくなり、やがて <InlineMath math="0" /> にならなければなりません。
            </p>

            <ContentBox type="theorem" title="Theorem 4.1-1 （収束の必要条件）">
                <p>
                    無限級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty a_n" /> が収束するならば、
                </p>
                <BlockMath math="\lim_{n \to \infty} a_n = 0" />
                <p>である。</p>
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-bold">
                    【注意】この「逆」は成り立ちません。<InlineMath math="a_n \to 0" /> であっても級数が発散するケースがあります（例：調和級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{1}{n}" />）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （Theorem 4.1-1 の証明）">
                <p>
                    無限級数が <InlineMath math="S" /> に収束すると仮定します。すなわち、部分和 <InlineMath math="S_n" /> について <InlineMath math="\displaystyle \lim_{n \to \infty} S_n = S" /> です。
                </p>
                <p>
                    第 <InlineMath math="n" /> 項 <InlineMath math="a_n" /> は、部分和を用いて <InlineMath math="a_n = S_n - S_{n-1}" /> と表せます （<InlineMath math="n \ge 2" />）。<br />
                    この両辺について <InlineMath math="n \to \infty" /> の極限をとります。
                </p>
                <BlockMath math="\begin{aligned} \lim_{n \to \infty} a_n &= \lim_{n \to \infty} (S_n - S_{n-1}) \\ &= \lim_{n \to \infty} S_n - \lim_{n \to \infty} S_{n-1} \\ &= S - S = 0 \end{aligned}" />
                <p>これより、<InlineMath math="a_n \to 0" /> が導かれます。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="発散判定法への応用">
                <p>
                    定理の対偶をとると、「<InlineMath math="\displaystyle \lim_{n \to \infty} a_n \neq 0" /> ならば、級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty a_n" /> は発散する」という強力な<strong>発散判定法</strong>が得られます。<br />
                    例えば、<InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{n}{n+1}" /> は、<InlineMath math="a_n = \frac{n}{n+1} \to 1 \neq 0" /> のため、計算するまでもなく発散するとわかります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 等比級数
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">等比級数</h2>

            <p>
                等比数列の無限級数（幾何級数）は、高校数学でもおなじみの非常に重要な級数です。
                収束条件と和の公式が完全に知られている数少ない級数の1つです。
            </p>

            <ContentBox type="theorem" title="Theorem 4.1-2 （等比級数の収束・発散と和）">
                <p>
                    初項 <InlineMath math="a" /> （<InlineMath math="a \neq 0" />）、公比 <InlineMath math="r" /> の等比級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty a r^{n-1} = a + ar + ar^2 + \dots" /> について：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                        <InlineMath math="|r| < 1" /> （すなわち <InlineMath math="-1 < r < 1" />）のとき、<strong>収束し</strong>、その和は <InlineMath math="\displaystyle \frac{a}{1 - r}" /> になる。
                    </li>
                    <li>
                        <InlineMath math="|r| \ge 1" /> のとき、<strong>発散する</strong>。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof （等比級数の証明）">
                <p>
                    第 <InlineMath math="n" /> 部分和 <InlineMath math="S_n" /> を計算します。
                </p>
                <p>
                    <InlineMath math="r = 1" /> のとき、<InlineMath math="S_n = a + a + \dots + a = na" /> となり発散します。<br />
                    <InlineMath math="r \neq 1" /> のとき、等比数列の和の公式から：
                </p>
                <BlockMath math="S_n = \frac{a(1 - r^n)}{1 - r}" />
                <p>ここで <InlineMath math="n \to \infty" /> としたときの <InlineMath math="r^n" /> の振る舞いを考えます。</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><InlineMath math="|r| < 1" /> の場合、<InlineMath math="r^n \to 0" /> となるため、<br />
                        <InlineMath math="\displaystyle S_n \to \frac{a(1 - 0)}{1 - r} = \frac{a}{1 - r}" /> に収束します。</li>
                    <li><InlineMath math="r > 1" /> の場合、<InlineMath math="r^n \to \infty" /> となるため <InlineMath math="S_n" /> は発散します。</li>
                    <li><InlineMath math="r \le -1" /> の場合、<InlineMath math="r^n" /> は振動するため極限は存在せず、<InlineMath math="S_n" /> は発散（振動）します。</li>
                </ul>
                <p>ゆえに定理が導かれます。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-2 （等比級数の利用）">
                <p>
                    循環小数 <InlineMath math="0.333\dots" /> を等比級数を用いて分数で表せ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <BlockMath math="0.333\dots = \frac{3}{10} + \frac{3}{100} + \frac{3}{1000} + \dots" />
                <p>
                    これは初項 <InlineMath math="a = \frac{3}{10}" />、公比 <InlineMath math="r = \frac{1}{10}" /> の等比級数である。
                    <InlineMath math="|r| < 1" /> なので収束し、和の公式より：
                </p>
                <BlockMath math="\frac{a}{1 - r} = \frac{\frac{3}{10}}{1 - \frac{1}{10}} = \frac{\frac{3}{10}}{\frac{9}{10}} = \frac{3}{9} = \frac{1}{3}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>無限級数は、<strong>部分和の極限</strong>として定義される（Definition 4.1-2）。</li>
                    <li>級数が収束するなら必ず <InlineMath math="\lim a_n = 0" /> となる（逆は偽）。<InlineMath math="\lim a_n \neq 0" /> なら必ず発散する（Theorem 4.1-1）。</li>
                    <li><strong>等比級数</strong> <InlineMath math="\sum ar^{n-1}" /> は公比が <InlineMath math="|r| < 1" /> のときのみ収束し、和は <InlineMath math="\frac{a}{1-r}" /> となる（Theorem 4.1-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
