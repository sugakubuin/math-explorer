import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ImproperIntegralsInfiniteIntervals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 9 で構築した「リーマン積分」の理論は、積分区間が有限の「有界閉区間 <InlineMath math="[a, b]" />」であり、かつ積分される関数も「有界」であることを大前提としていました。
                しかし、物理学や確率論など多くの応用分野では、「はるか無限の彼方までの面積」や「無限大に発散する滑り台のような図形の面積」を計算する必要に迫られます。
            </p>
            <p>
                このような、通常のリーマン積分の枠組みをはみ出す積分を<strong>広義積分</strong>（Improper Integral）と呼びます。本節ではまず、「積分区間が無限に続く場合」の広義積分を定義し、その直感的な意味を探ります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">無限区間上の広義積分</h2>

            <p>
                無限区間での面積は、いきなり無限全体を測るのではなく、「有限区間 <InlineMath math="[a, R]" /> で測った面積を、<InlineMath math="R" /> を無限大に飛ばした極限」として定義されます。点列や多角形の極限と同様の、解析学らしいアプローチです。
            </p>

            <ContentBox type="definition" title="Definition 10.1-1 (無限区間上の広義積分)">
                <p>
                    関数 <InlineMath math="f(x)" /> が、任意の <InlineMath math="R > a" /> に対して閉区間 <InlineMath math="[a, R]" /> 上でリーマン可積分であるとする。<br />
                    このとき、極限
                </p>
                <BlockMath math="\lim_{R \to \infty} \int_a^R f(x) dx" />
                <p>
                    が存在して有限の値に確定するならば、<InlineMath math="f(x)" /> の区間 <InlineMath math="[a, \infty)" /> 上での<strong>広義積分は収束する</strong>といい、その極限値を
                </p>
                <BlockMath math="\int_a^\infty f(x) dx" />
                <p>
                    と表す。<br />
                    逆に、この極限が存在しない（無限大に発散する、または振動する）場合、この広義積分は<strong>発散する</strong>という。
                </p>
                <p className="mt-4">
                    ※ マイナス無限大への積分 <InlineMath math="\int_{-\infty}^b f(x) dx" /> や、両側への積分 <InlineMath math="\int_{-\infty}^\infty f(x) dx = \int_{-\infty}^c f(x) dx + \int_c^\infty f(x) dx" /> （ある点 <InlineMath math="c" /> を挟んでそれぞれが独立して収束する必要がある）についても同様に定義される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">絶対収束と条件収束</h2>

            <p>
                無限級数のとき（Chapter 3）と同様に、広義積分でも「プラスマイナスの打ち消し合いのおかげでギリギリ収束している」のか、「面積の絶対量自体が有限に収まっている」のかを区別することが極めて重要になります。
            </p>

            <ContentBox type="definition" title="Definition 10.1-2 (広義積分の絶対収束と条件収束)">
                <p>
                    広義積分 <InlineMath math="\int_a^\infty f(x) dx" /> について、
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        関数 <InlineMath math="f(x)" /> の絶対値をとった広義積分 <InlineMath math="\int_a^\infty |f(x)| dx" /> が収束するとき、元の積分は<strong>絶対収束する</strong>という。
                    </li>
                    <li>
                        元の積分 <InlineMath math="\int_a^\infty f(x) dx" /> は収束するが、絶対値の積分 <InlineMath math="\int_a^\infty |f(x)| dx" /> は発散するとき、元の積分は<strong>条件収束する</strong>という。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="theorem" title="Proposition 10.1-1 (絶対収束 ⇒ 収束)">
                <p>
                    広義積分が絶対収束するならば、その積分は必ず収束する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    有限区間における積分の絶対値不等式（Proposition 9.3-4）より、任意の <InlineMath math="R > r > a" /> に対して
                </p>
                <BlockMath math="\left| \int_r^R f(x) dx \right| \leq \int_r^R |f(x)| dx" />
                <p>
                    が成り立つ。
                </p>
                <p className="mt-4">
                    絶対収束の仮定より、<InlineMath math="F(R) = \int_a^R |f(x)| dx" /> は <InlineMath math="R \to \infty" /> で極限を持つ。<br />
                    実数が収束するための「コーシーの収束条件（コーシー列）」を関数（積分関数）に適用すると、任意の <InlineMath math="\varepsilon > 0" /> に対し、十分大きな <InlineMath math="M" /> をとれば、<InlineMath math="R > r > M" /> となる任意の <InlineMath math="R, r" /> について
                </p>
                <BlockMath math="\int_r^R |f(x)| dx < \varepsilon" />
                <p>
                    となるようにできる。
                </p>
                <p className="mt-4">
                    元の不等式から
                </p>
                <BlockMath math="\begin{aligned} \left| \int_a^R f(x) dx - \int_a^r f(x) dx \right| &= \left| \int_r^R f(x) dx \right| \\ &\leq \int_r^R |f(x)| dx < \varepsilon \end{aligned}" />
                <p>
                    となり、<InlineMath math="\int_a^R f(x) dx" /> 自身も <InlineMath math="R \to \infty" /> のときにコーシー条件を満たす。実数の完備性により、コーシー列（関数）は必ず極限を持つため、元の積分も収束することが証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例：無限の尻尾（しっぽ）の面積</h2>

            <p>
                どんなときに無限の彼方までの面積が有限になるのか、最も基本となるべき乗関数の例を見てみましょう。
            </p>

            <ContentBox type="example" title={`Example 10.1-1`}>
                <p>
                    <InlineMath math="p > 0" /> を実数の定数とする。広義積分
                </p>
                <BlockMath math="I = \int_1^\infty \frac{1}{x^p} dx" />
                <p>
                    の値を調べる。
                </p>
                <p className="mt-4">
                    まず有限区間 <InlineMath math="[1, R]" /> での積分を計算する。微積分の第2基本定理を用いて原始関数を求めると、
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <strong><InlineMath math="p \neq 1" /> の場合:</strong>
                        <BlockMath math="\int_1^R x^{-p} dx = \left[ \frac{x^{1-p}}{1-p} \right]_1^R = \frac{R^{1-p} - 1}{1-p}" />
                    </li>
                    <li>
                        <strong><InlineMath math="p = 1" /> の場合:</strong>
                        <BlockMath math="\int_1^R \frac{1}{x} dx = \left[ \log x \right]_1^R = \log R" />
                    </li>
                </ul>
                <p className="mt-4">
                    ここで <InlineMath math="R \to \infty" /> の極限をとる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <InlineMath math="p > 1" /> のとき、<InlineMath math="1-p < 0" /> なので <InlineMath math="R^{1-p} = \frac{1}{R^{p-1}} \to 0" /> となる。よって積分は<strong>収束</strong>し、値は <InlineMath math="\frac{1}{p-1}" /> である。
                    </li>
                    <li>
                        <InlineMath math="p < 1" /> のとき、<InlineMath math="1-p > 0" /> なので <InlineMath math="R^{1-p} \to \infty" /> となり<strong>発散</strong>する。
                    </li>
                    <li>
                        <InlineMath math="p = 1" /> のとき、<InlineMath math="\log R \to \infty" /> なので<strong>発散</strong>する。
                    </li>
                </ul>
                <p className="mt-4">
                    <strong>結論：</strong> <InlineMath math="\int_1^\infty \frac{1}{x^p} dx" /> は、<InlineMath math="p > 1" /> のときのみ収束し、<InlineMath math="p \leq 1" /> では発散する。<br />
                    （グラフの尻尾の「薄くなり方」が、<InlineMath math="1/x" /> より急激であれば全体の面積は有限に収まり、緩やかであればチリも積もって無限大に発散してしまうことを示しています）
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§10.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>無限区間への広義積分は、有限区間の積分の<InlineMath math="R \to \infty" />における極限として定義される。</li>
                    <li>無限級数と同様に、絶対収束する広義積分は必ず収束する。プラスマイナスの振動で収束するものは条件収束と呼ばれる。</li>
                    <li>基準となる関数 <InlineMath math="1/x^p" /> の無限大方向への広義積分は、<InlineMath math="p > 1" /> （減衰が速い）のときのみ有限値となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
