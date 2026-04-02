import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function ConvergenceTests() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                無限級数は部分和の極限として定義されますが、多くの場合、部分和 <InlineMath math="S_n" /> をきれいな式で表すことはできず、直接極限を計算できません。
                そこで、<strong>「和が具体的にいくらになるかは分からなくても、収束するか・発散するかだけを判定する」</strong>ための多くの定理（収束判定法）が存在します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 正項級数の収束判定（比較判定法）
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">正項級数の収束判定（比較判定法）</h2>

            <p>
                各項がすべて <InlineMath math="0" /> 以上の級数を<strong>正項級数</strong>といいます（<InlineMath math="a_n \ge 0" />）。
                正項級数の場合、部分和 <InlineMath math="S_n" /> は単調増加になるので、「上に有界かどうか」だけで収束が判定できます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 （比較判定法 / Comparison test）">
                <p>
                    2つの正項級数 <InlineMath math="\displaystyle \sum a_n" /> と <InlineMath math="\displaystyle \sum b_n" /> について、常にある番号以降で <InlineMath math="0 \le a_n \le b_n" /> が成り立つとする。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>大きい方 <InlineMath math="\displaystyle \sum b_n" /> が<strong>収束する</strong>ならば、小さい方 <InlineMath math="\displaystyle \sum a_n" /> も<strong>収束する</strong>。</li>
                    <li>小さい方 <InlineMath math="\displaystyle \sum a_n" /> が<strong>発散する</strong>ならば、大きい方 <InlineMath math="\displaystyle \sum b_n" /> も<strong>発散する</strong>。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof （比較判定法の概略）">
                <p>
                    <InlineMath math="\sum b_n" /> が収束してその和が <InlineMath math="M" /> だとします。
                    <InlineMath math="a_n \le b_n" /> より、<InlineMath math="\sum a_n" /> の部分和も常に <InlineMath math="M" /> 以下となります（上に有界）。
                    正項級数の部分和は単調増加数列であり、「上に有界な単調増加数列は必ず収束する」という実数の性質（実数の連続性公理）より、小級数 <InlineMath math="\sum a_n" /> の収束が保証されます。
                </p>
                <p>後半は前半の対偶に相当します。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="有名な比較対象：調和級数と p-級数">
                <ul className="list-disc pl-5 space-y-3">
                    <li>
                        <strong>調和級数：</strong> <InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \dots" /> は <strong><InlineMath math="\infty" /> に発散する</strong>。<br />
                        （<InlineMath math="\frac{1}{n} \to 0" /> になるのに和は無限大になる代表例です）
                    </li>
                    <li>
                        <strong>p-級数：</strong> <InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{1}{n^p}" /> は、
                        <InlineMath math="p > 1" /> のとき<strong>収束</strong>し、<InlineMath math="p \le 1" /> のとき<strong>発散</strong>する。
                    </li>
                </ul>
                <p className="mt-2 text-sm">これらを基準 <InlineMath math="b_n" /> として他の級数を比較します。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 ダランベールの比判定法
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">比判定法と根判定法</h2>

            <p>
                隣り合う項の「比」や、第 <InlineMath math="n" /> 項の「<InlineMath math="n" />乗根」をとることで、等比級数（幾何級数）の公比と比較する強力な判定法です。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-2 （ダランベールの比判定法 / Ratio test）">
                <p>
                    すべての <InlineMath math="n" /> に対して <InlineMath math="a_n > 0" /> となる正項級数において、
                </p>
                <BlockMath math="\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = L" />
                <p>が存在するとする。このとき：</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><InlineMath math="L < 1" /> ならば、級数は<strong>収束する</strong>。</li>
                    <li><InlineMath math="L > 1" /> （または <InlineMath math="L = \infty" />）ならば、級数は<strong>発散する</strong>。</li>
                    <li><InlineMath math="L = 1" /> のときは、<strong>判定不能</strong>（収束する場合も発散する場合もある）である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof （比判定法の概略）">
                <p>
                    <InlineMath math="n" /> が十分大きいとき、隣り合う項の比がほぼ <InlineMath math="L" /> で一定になることを意味します。
                    すなわち、十分大きな <InlineMath math="N" /> 以降の項は、公比 <InlineMath math="L" /> の等比級数 <InlineMath math="\sum L^n" /> のように振る舞います。
                    等比級数は公比が <InlineMath math="1" /> より小さければ収束し、大きければ発散するため（Theorem 4.1-2）、
                    比較判定法より元の級数の収束・発散も一致します。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-1 （比判定法の適用）">
                <p>
                    無限級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{2^n}{n!}" /> の収束を調べよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="a_n = \frac{2^n}{n!}" /> とおき、隣接項の比の極限を計算する。
                </p>
                <BlockMath math="\begin{aligned} \lim_{n \to \infty} \frac{a_{n+1}}{a_n} &= \lim_{n \to \infty} \frac{\frac{2^{n+1}}{(n+1)!}}{\frac{2^n}{n!}} \\ &= \lim_{n \to \infty} \frac{2^{n+1}}{2^n} \cdot \frac{n!}{(n+1)!} \\ &= \lim_{n \to \infty} \frac{2}{n+1} = 0 \end{aligned}" />
                <p>
                    極限は <InlineMath math="L = 0 < 1" /> となるので、ダランベールの比判定法によりこの級数は<strong>収束する</strong>。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 4.2-3 （コーシーの根判定法 / Root test）">
                <p>
                    <InlineMath math="a_n \ge 0" /> の正項級数において、
                </p>
                <BlockMath math="\lim_{n \to \infty} \sqrt[n]{a_n} = L" />
                <p>が存在するとする。このとき：</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><InlineMath math="L < 1" /> ならば、級数は<strong>収束する</strong>。</li>
                    <li><InlineMath math="L > 1" /> ならば、級数は<strong>発散する</strong>。</li>
                    <li><InlineMath math="L = 1" /> のときは、<strong>判定不能</strong>である。</li>
                </ul>
                <p className="mt-2 text-sm text-slate-500">
                    ※ 証明の概略は比判定法と同様で、<InlineMath math="n" /> が大きいときに <InlineMath math="a_n \approx L^n" /> と等比数列に見立てるアイデアです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 交代級数と絶対収束
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">交代級数と絶対収束</h2>

            <p>
                これまではすべて正の数である級数（正項級数）を扱ってきました。
                ここからは、正と負が混ざる級数を扱います。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-4 （ライプニッツの定理 / Alternating Series Test）">
                <p>
                    項の符号が交互に入れ替わる級数（<strong>交代級数</strong>）
                </p>
                <BlockMath math="\sum_{n=1}^\infty (-1)^{n-1} a_n = a_1 - a_2 + a_3 - a_4 + \dots" />
                <p>
                    について、正の数列 <InlineMath math="\{a_n\}" /> が以下の2条件を満たすならば、この交代級数は<strong>収束する</strong>。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li><strong>単調減少:</strong> <InlineMath math="a_{n+1} \le a_n" /> （すべての <InlineMath math="n" /> に対して）</li>
                    <li><strong>0に収束:</strong> <InlineMath math="\displaystyle \lim_{n \to \infty} a_n = 0" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof （ライプニッツの定理の概略）">
                <p>
                    偶数番目の部分和 <InlineMath math="S_{2m}" /> と奇数番目の部分和 <InlineMath math="S_{2m+1}" /> を分けて考えます。
                </p>
                <BlockMath math="S_{2m} = (a_1 - a_2) + (a_3 - a_4) + \dots + (a_{2m-1} - a_{2m})" />
                <p>
                    条件1よりカッコ内はすべて <InlineMath math="\ge 0" /> なので、数列 <InlineMath math="\{S_{2m}\}" /> は単調増加です。しかも <InlineMath math="S_{2m} \le a_1" /> なので上に有界であり、ある値 <InlineMath math="S" /> に収束します。
                </p>
                <p>
                    一方、<InlineMath math="S_{2m+1} = S_{2m} + a_{2m+1}" /> ですが、極限をとると条件2より <InlineMath math="a_{2m+1} \to 0" /> なので、
                </p>
                <BlockMath math="\lim_{m \to \infty} S_{2m+1} = \lim_{m \to \infty} S_{2m} + 0 = S" />
                <p>となり、偶数項部分和も奇数項部分和も同じ <InlineMath math="S" /> に収束するため、級数全体が収束します。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="definition" title="Definition 4.2-1 （絶対収束と条件収束）">
                <p>
                    一般の級数 <InlineMath math="\displaystyle \sum a_n" /> に対して、各項の「絶対値」を取った正項級数 <InlineMath math="\displaystyle \sum |a_n|" /> を考えます。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <InlineMath math="\displaystyle \sum |a_n|" /> が収束するとき、元の級数 <InlineMath math="\displaystyle \sum a_n" /> は<strong>絶対収束する (Absolutely Convergent)</strong> という。
                    </li>
                    <li>
                        元の級数 <InlineMath math="\displaystyle \sum a_n" /> は収束するが、絶対値の級数 <InlineMath math="\displaystyle \sum |a_n|" /> が発散するとき、
                        元の級数は<strong>条件収束する (Conditionally Convergent)</strong> という。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 4.2-1 （絶対収束は収束を含意する）">
                <p>
                    級数 <InlineMath math="\displaystyle \sum a_n" /> が<strong>絶対収束</strong>するならば、元の級数 <InlineMath math="\displaystyle \sum a_n" /> も（通常の意味で）<strong>収束する</strong>。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （絶対収束なら収束）">
                <p>
                    不等式 <InlineMath math="0 \le a_n + |a_n| \le 2|a_n|" /> を考えます。<br />
                    仮定より <InlineMath math="\sum |a_n|" /> が収束するため、定数倍の <InlineMath math="\sum 2|a_n|" /> も収束します。
                    比較判定法（Theorem 4.2-1）より、小さい方の正項級数 <InlineMath math="\sum (a_n + |a_n|)" /> も収束することになります。
                </p>
                <p>
                    元の級数 <InlineMath math="\sum a_n" /> は、収束する2つの級数の差として
                </p>
                <BlockMath math="\sum a_n = \sum (a_n + |a_n|) - \sum |a_n|" />
                <p>
                    と書けるため、それぞれの極限が存在することから全体の極限も存在し、収束することが示されました。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正項級数の収束判定は、大きな収束級数や小さな発散級数と比べる<strong>比較判定法</strong>が基本（Theorem 4.2-1）。</li>
                    <li>部分和を取らずに式の形から収束を判定できる強力な道具が、<strong>ダランベールの比判定法</strong>や<strong>コーシーの根判定法</strong>（<InlineMath math="L<1" />なら収束）。</li>
                    <li>符号が交互に変わる交代級数は、<InlineMath math="a_n \searrow 0" /> ならば収束する（<strong>ライプニッツの定理</strong>）。</li>
                    <li>絶対値をとって作った級数が収束することを<strong>絶対収束</strong>といい、絶対収束する級数は元の状態でも必ず収束する（Proposition 4.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
