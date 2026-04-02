import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function PowerSeries() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでの級数は、各項が単なる「定数」である無限級数（<InlineMath math="\displaystyle \sum a_n" />）を扱ってきました。
                本節からは、各項が変数 <InlineMath math="x" /> を含んだ「関数」の無限級数を考えます。
                無限次数の多項式とも言える<strong>べき級数 (Power Series)</strong> は、複雑な関数を解析的に扱うための最も重要な道具の1つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 べき級数の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">べき級数の定義</h2>

            <ContentBox type="definition" title="Definition 4.3-1 （べき級数）">
                <p>
                    定数の数列 <InlineMath math="c_0, c_1, c_2, \dots" /> （係数）と定数 <InlineMath math="a" /> （中心）に対し、変数 <InlineMath math="x" /> の関数として
                </p>
                <BlockMath math="\sum_{n=0}^\infty c_n (x - a)^n = c_0 + c_1(x - a) + c_2(x - a)^2 + \dots" />
                <p>
                    の形で表される無限級数を、<InlineMath math="x = a" /> を中心とする<strong>べき級数 (Power Series)</strong> という。
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    ※ 特に <InlineMath math="a = 0" /> の場合、<InlineMath math="\displaystyle \sum_{n=0}^\infty c_n x^n = c_0 + c_1 x + c_2 x^2 + \dots" /> という最も基本的な形になります。以下では基本的にこれを考えます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="べき級数の意味">
                <p>
                    ある特定の <InlineMath math="x" /> の値を代入すれば、ただの定数の無限級数になります。
                    したがって、「どの <InlineMath math="x" /> ならばこの級数は収束するのか？」という<strong>収束域</strong>を特定することが最初の目標になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 収束半径
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">収束半径と収束域</h2>

            <p>
                驚くべきことに、どんなべき級数であっても、その収束する領域は「中心からある距離 <InlineMath math="R" /> までの範囲」という非常に綺麗な形になることが知られています。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 （収束半径の存在と公式）">
                <p>
                    任意のべき級数 <InlineMath math="\displaystyle \sum_{n=0}^\infty c_n (x-a)^n" /> に対して、次を満たす<strong>収束半径 (Radius of Convergence)</strong> <InlineMath math="R \ge 0" /> または <InlineMath math="R = \infty" /> が唯1つ存在する：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><InlineMath math="|x - a| < R" /> のとき、級数は<strong>絶対収束</strong>する。</li>
                    <li><InlineMath math="|x - a| > R" /> のとき、級数は<strong>発散</strong>する。</li>
                </ul>
                <p className="mt-2 text-sm">※ <InlineMath math="|x - a| = R" /> （境界上）については、級数ごとに個別に判定する必要があります。</p>

                <p className="font-bold mt-4">【収束半径の求め方（ダランベール・コーシーの公式）】</p>
                <p>極限 <InlineMath math="\displaystyle L = \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|" /> （または <InlineMath math="\displaystyle L = \lim_{n \to \infty} \sqrt[n]{|c_n|}" />）が存在するとき、</p>
                <BlockMath math="R = \frac{1}{L}" />
                <p>となる。（<InlineMath math="L = 0" /> なら <InlineMath math="R = \infty" />、<InlineMath math="L = \infty" /> なら <InlineMath math="R = 0" /> とする）</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （公式の導出概略）">
                <p>
                    絶対値をとった正項級数 <InlineMath math="\displaystyle \sum |c_n| |x-a|^n" /> に対して、比判定法（Theorem 4.2-2）を適用します。
                    <InlineMath math="n" /> 項と <InlineMath math="n+1" /> 項の比の極限を計算すると：
                </p>
                <BlockMath math="\lim_{n \to \infty} \frac{|c_{n+1}| |x-a|^{n+1}}{|c_n| |x-a|^n} = \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| |x-a| = L \cdot |x-a|" />
                <p>
                    比判定法によれば、この極限が <InlineMath math="1" /> より小さければ絶対収束します。すなわち、
                </p>
                <BlockMath math="L \cdot |x-a| < 1 \implies |x-a| < \frac{1}{L}" />
                <p>
                    この不等式を満たす範囲が収束する範囲なので、右辺の <InlineMath math="1/L" /> が収束半径 <InlineMath math="R" /> にほかなりません。根判定法を利用しても同様に示せます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="definition" title="Definition 4.3-2 （収束域）">
                <p>
                    べき級数が収束するような実数 <InlineMath math="x" /> の集合を<strong>収束域 (Interval of Convergence)</strong> という。
                    収束半径を <InlineMath math="R" /> とすると、収束域は基本的には開区間 <InlineMath math="(a-R, a+R)" /> であり、
                    端点 <InlineMath math="x = a-R" /> や <InlineMath math="x = a+R" /> を含むかどうかに応じて、半開区間や閉区間になる場合がある。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-1 （収束半径の計算）">
                <p>
                    べき級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{x^n}{n}" /> の収束半径と収束域を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    係数は <InlineMath math="c_n = \frac{1}{n}" /> である。公式を用いて極限 <InlineMath math="L" /> を計算する：
                </p>
                <BlockMath math="L = \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| = \lim_{n \to \infty} \left| \frac{\frac{1}{n+1}}{\frac{1}{n}} \right| = \lim_{n \to \infty} \frac{n}{n+1} = 1" />
                <p>よって収束半径は <InlineMath math="R = 1/L = 1" />。</p>
                <p>
                    次に端点 <InlineMath math="x = \pm 1" /> の場合を調べる。<br />
                    <InlineMath math="x = 1" /> のとき、級数は <InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{1}{n}" /> （調和級数）となり、<strong>発散</strong>する。<br />
                    <InlineMath math="x = -1" /> のとき、級数は <InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{(-1)^n}{n}" /> （交代調和級数）となり、ライプニッツの定理より<strong>収束</strong>する。
                </p>
                <p>したがって、このべき級数の収束域は半開区間 <InlineMath math="[-1, 1)" /> である。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 べき級数の性質
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">べき級数の性質（微分と積分）</h2>

            <p>
                「有限個の多項式」は項ごとに微分・積分ができますが、「無限級数」の場合は、和の順序と極限（微分・積分）の順序が交換できるとは限りません。
                しかし、べき級数は「収束半径の内側」という条件下であれば、まるで有限次数の多項式のように自由に見通しよく扱うことができます。
            </p>

            <ContentBox type="proposition" title="Proposition 4.3-1 （項別微分・項別積分）">
                <p>
                    べき級数 <InlineMath math="\displaystyle f(x) = \sum_{n=0}^\infty c_n x^n" /> の収束半径を <InlineMath math="R > 0" /> とし、<InlineMath math="|x| < R" /> とする。<br />
                    このとき、<InlineMath math="f(x)" /> はこの区間で連続かつ無限回微分可能であり、以下の操作が許される。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-4">
                    <li>
                        <strong>項別微分：</strong> 各項を微分した級数も収束半径 <InlineMath math="R" /> をもち、その和は <InlineMath math="f'(x)" /> に一致する。
                        <BlockMath math="f'(x) = \sum_{n=1}^\infty n c_n x^{n-1}" />
                    </li>
                    <li>
                        <strong>項別積分：</strong> 各項を積分した級数も収束半径 <InlineMath math="R" /> をもち、その和は <InlineMath math="\displaystyle \int f(x) \, dx" /> の1つになる。
                        <BlockMath math="\int f(x) \, dx = \sum_{n=0}^\infty \frac{c_n}{n+1} x^{n+1} + C" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="なぜこれが重要か？">
                <p>
                    この性質により、<strong>既知の級数を微分・積分することで、新しい級数を作り出す</strong>ことができます。<br />
                    例えば、無限等比級数 <InlineMath math="\displaystyle \frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots" /> を項別積分すると、
                    左辺は <InlineMath math="-\log(1-x)" /> になり、右辺は <InlineMath math="\displaystyle x + \frac{x^2}{2} + \frac{x^3}{3} + \dots" /> となります。<br />
                    つまり、対数関数の級数展開があっという間に導けるのです。
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    ※ 項別微分・積分の厳密な証明には「一様収束」という関数列の極限に関する強力な概念が必要となるため、微分積分学Iの範囲を超えることが多く、ここでは直感的な解説にとどめます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>係数を持った <InlineMath math="x^n" /> の無限和 <InlineMath math="\sum c_n x^n" /> の形を<strong>べき級数</strong>と呼ぶ（Definition 4.3-1）。</li>
                    <li>どんなべき級数も、原点を中心とした半径 <InlineMath math="R" />（<strong>収束半径</strong>）の範囲で絶対収束する。その値は <InlineMath math="\lim |c_{n+1}/c_n|^{-1}" /> で計算できる（Theorem 4.3-1）。</li>
                    <li>収束半径の内側では、多項式のように<strong>項ごとに微分や積分</strong>をしてもよい（Proposition 4.3-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
