import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PowerSeriesAndRadiusOfConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                関数項級数の中でも、各項が変数 <InlineMath math="x" /> のべき乗（<InlineMath math="x^n" />）の定数倍で表されるような形のものを<strong>べき級数</strong>と呼びます。
                テイラー展開（マクローリン展開）はまさにこの形をしており、「無限次の多項式」のように関数を扱うことができるため、実解析や複素解析において中心的な役割を果たします。本節では、べき級数が「どこまでなら収束するのか」という限界（収束半径）の理論について扱います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">べき級数の定義と収束円</h2>

            <ContentBox type="definition" title="Definition 8.2-1 (べき級数)">
                <p>
                    実数の数列 <InlineMath math="\{a_n\}_{n=0}^\infty" /> と、中心となる実数 <InlineMath math="c" /> に対して、次のような関数項級数を、<InlineMath math="c" /> を中心とする<strong>べき級数</strong>（power series）と呼ぶ。
                </p>
                <BlockMath math="\begin{aligned} &\sum_{n=0}^{\infty} a_n (x - c)^n \\ &= a_0 + a_1(x - c) + a_2(x - c)^2 + a_3(x - c)^3 + \cdots \end{aligned}" />
                <p>
                    ※ 一般性を失わず、ここからは中心 <InlineMath math="c = 0" /> のべき級数 <InlineMath math="\sum_{n=0}^\infty a_n x^n" /> を軸に議論を進める。
                </p>
            </ContentBox>

            <p>
                べき級数の最大の特長は、収束する領域の形が「原点を中心とする対称な区間（円）」になるという幾何学的な美しさを持っていることです。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-1 (収束半径の存在)">
                <p>
                    任意のべき級数 <InlineMath math="\sum_{n=0}^\infty a_n x^n" /> に対して、以下を満たす非負の実数または無限大 <InlineMath math="R \in [0, \infty] \cup \{\infty\}" /> がただ一つ存在する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li><InlineMath math="|x| < R" /> となるすべての <InlineMath math="x" /> に対して、<InlineMath math="\sum a_n x^n" /> は<strong>絶対収束</strong>する。</li>
                    <li><InlineMath math="|x| > R" /> となるすべての <InlineMath math="x" /> に対して、<InlineMath math="\sum a_n x^n" /> は<strong>発散</strong>する。</li>
                </ol>
                <p className="mt-4">
                    この <InlineMath math="R" /> をそのべき級数の<strong>収束半径</strong>（radius of convergence）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (アーベルの補題に基づく略証)">
                <p>
                    証明の要は「もしある点 <InlineMath math="x_0 \neq 0" /> でべき級数が収束するならば、それより原点に近い任意の点 <InlineMath math="x" /> （すなわち <InlineMath math="|x| < |x_0|" />）では絶対収束する」という事実（アーベルの補題）である。
                </p>
                <p className="mt-4">
                    <InlineMath math="\sum a_n x_0^n" /> が収束すると仮定する。級数が収束するための必要条件として、その一般項は <InlineMath math="0" /> に収束する。したがって数列 <InlineMath math="\{a_n x_0^n\}" /> は有界であり、ある実数 <InlineMath math="M > 0" /> が存在してすべての <InlineMath math="n" /> について <InlineMath math="|a_n x_0^n| \leq M" /> となる。
                </p>
                <p className="mt-4">
                    ここで <InlineMath math="|x| < |x_0|" /> であるような任意の <InlineMath math="x" /> について、一般項の絶対値を評価する。
                </p>
                <BlockMath math="|a_n x^n| = \left| a_n x_0^n \left(\frac{x}{x_0}\right)^n \right| = |a_n x_0^n| \left| \frac{x}{x_0} \right|^n \leq M \left| \frac{x}{x_0} \right|^n" />
                <p className="mt-4">
                    仮定より <InlineMath math="r = |x/x_0| < 1" /> であるため、右辺がなす級数 <InlineMath math="\sum M r^n" /> は公比が1未満の等比級数となり、収束する。<br />
                    よって比較判定法（優級数定理）により、級数 <InlineMath math="\sum |a_n x^n|" /> は収束する。すなわち <InlineMath math="\sum a_n x^n" /> は絶対収束する。
                </p>
                <p className="mt-4">
                    全体を通して、<InlineMath math="R = \sup \{ |x| \mid \sum a_n x^n \text{ は収束する} \}" /> と定義すれば、上限の性質と上記のアーベルの補題により、距離 <InlineMath math="R" /> より内周では絶対収束、外周では発散というきれいな円（区間）で分割されることがわかる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束半径の計算（コーシー・アダマールの公式）</h2>

            <p>
                収束半径 <InlineMath math="R" /> は、係数数列 <InlineMath math="a_n" /> の振る舞いから直接計算することができます。これを実解析における「上極限（limsup）」を用いて厳密に表現したものが、コーシー・アダマールの公式です。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-2 (コーシー・アダマールの公式)">
                <p>
                    べき級数 <InlineMath math="\sum a_n x^n" /> の係数数列に対して、
                </p>
                <BlockMath math="L = \limsup_{n \to \infty} \sqrt[n]{|a_n|}" />
                <p>
                    と置く。このとき、収束半径 <InlineMath math="R" /> は次のように与えられる。
                </p>
                <BlockMath math="R = \begin{cases} \infty & (L = 0 \text{ のとき}) \\ \frac{1}{L} & (0 < L < \infty \text{ のとき}) \\ 0 & (L = \infty \text{ のとき}) \end{cases}" />
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                    ※ より実用的で簡単な判定法として、ダランベールの比判定法に基づく公式 <InlineMath math="R = \lim_{n\to\infty} \left| \frac{a_n}{a_{n+1}} \right|" /> （極限が存在する場合）もよく用いられます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束円の境界におけるデリケートな挙動</h2>

            <p>
                定理 8.2-1 において、<InlineMath math="|x| < R" /> と <InlineMath math="|x| > R" /> の場合は完全に決着がつきました。しかし、<strong>境界上の点（<InlineMath math="x = R" /> または <InlineMath math="x = -R" />）</strong>においてはどうでしょうか。
                実は、境界上の点の収束・発散は、べき級数の係数 <InlineMath math="a_n" /> の形によって「両端とも収束」「片方だけ収束」「両方発散」などのあらゆるケースが起こり得ます。
            </p>

            <ContentBox type="remark" title="境界上の挙動の例">
                <p>
                    いずれの級数もダランベールの公式より収束半径は <InlineMath math="R = 1" /> である。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4">
                    <li>
                        <strong><InlineMath math="\sum_{n=1}^\infty x^n" /> （幾何級数）</strong><br />
                        <InlineMath math="x = 1" /> のとき <InlineMath math="\sum 1" /> となり発散。<br />
                        <InlineMath math="x = -1" /> のとき <InlineMath math="\sum (-1)^n" /> となり発散。<br />
                        （境界はどちらも含まない。収束域：<InlineMath math="(-1, 1)" />）
                    </li>
                    <li>
                        <strong><InlineMath math="\sum_{n=1}^\infty \frac{x^n}{n}" /> （対数関数のテイラー展開由来）</strong><br />
                        <InlineMath math="x = 1" /> のとき <InlineMath math="\sum \frac{1}{n}" /> （調和級数）となり無限大に発散。<br />
                        <InlineMath math="x = -1" /> のとき <InlineMath math="\sum \frac{(-1)^n}{n}" /> （交代調和級数）となり、ライプニッツの定理により収束する。<br />
                        （片側の境界のみを含む。収束域：<InlineMath math="[-1, 1)" />）
                    </li>
                    <li>
                        <strong><InlineMath math="\sum_{n=1}^\infty \frac{x^n}{n^2}" /></strong><br />
                        <InlineMath math="x = \pm 1" /> のとき、絶対値をとればどちらも <InlineMath math="\sum \frac{1}{n^2}" /> となり収束（絶対収束）する。<br />
                        （両側の境界をともに含む。収束域：<InlineMath math="[-1, 1]" />）
                    </li>
                </ul>
            </ContentBox>

            <p>
                したがって、べき級数を解析する際、「内側は絶対安全」という保証はありますが、境界線上を調べるときだけは一般論が通用せず、その都度個別の収束判定（ライプニッツの定理など）を行う必要があることに注意が必要です。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>べき級数には、ある半径 <InlineMath math="R" /> が存在して、原点から距離 <InlineMath math="R" /> より内側では絶対収束し、外側では発散する（アーベルの補題）。</li>
                    <li>収束半径 <InlineMath math="R" /> は、係数列からコーシー・アダマールの公式（上極限）などで決定できる。</li>
                    <li>境界 <InlineMath math="x = \pm R" /> での収束性は自明ではなく、級数の形によって個別の詳細な検証が必要となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
