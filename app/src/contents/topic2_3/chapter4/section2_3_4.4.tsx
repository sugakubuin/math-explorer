import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExtremeValueTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                §4.2 において、開区間での連続関数は必ずしも有界にならないことを見ました。
                しかし、定義域が「有界な閉区間」である場合、関数は決して発散せず、さらには絶対に最大値と最小値を「達成」するという強力な性質が成り立ちます。
                これを主張するのが<strong>最大値・最小値定理</strong>（時にはワイエルシュトラスの定理とも呼ばれます）です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最大値・最小値定理</h2>

            <p>
                関数の最大値（最小値）が存在するとは、値域が単に上に（下に）有界であるだけでなく、その上限（下限）の値をとりうる <InlineMath math="x" /> が定義域内に存在するという意味です。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 (最大値・最小値定理)">
                <p>
                    関数 <InlineMath math="f" /> が有界な閉区間 <InlineMath math="[a, b]" /> 上で連続であるとする。
                    このとき、<InlineMath math="f" /> は <InlineMath math="[a, b]" /> 上で最大値および最小値を持つ。
                    すなわち、ある実数 <InlineMath math="c, d \in [a, b]" /> が存在して、任意の <InlineMath math="x \in [a, b]" /> に対して
                </p>
                <BlockMath math="f(d) \leq f(x) \leq f(c)" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <p>
                この定理の凄さは、「最大値を実現する点 <InlineMath math="c" />」が閉区間上に確実に存在することを保証している点です。<InlineMath math="f(x) = x" /> を開区間 <InlineMath math="(0, 1)" /> 上で考える場合、値は 1 にいくらでも近づきますが、<InlineMath math="1" /> という最大値を「とる」点はありません。閉区間という仮定が決定的に機能します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明の概略</h2>

            <p>
                この定理の証明は解析学のハイライトの一つであり、通常2つのステップに分けて行われます。第一ステップで「関数が有界であること（値が発散しないこと）」を示し、第二ステップで「その上限値（スープ）を実際に取ること」を示します。
                ここでは、Chapter 3 §3.2 で学んだ「ボルツァーノ・ワイエルシュトラスの定理」を利用した証明の概略を追います。
            </p>

            <ContentBox type="proof" title="証明の2段階構成">
                <p><strong>ステップ1：有界性の証明</strong></p>
                <p>
                    関数 <InlineMath math="f" /> が上に有界でないと仮定して矛盾を導く（背理法）。
                    上に有界でないなら、各自然数 <InlineMath math="n" /> に対して <InlineMath math="f(x_n) > n" /> となる点 <InlineMath math="x_n \in [a, b]" /> を選ぶことができる。
                    ここで形成された点列 <InlineMath math="\{x_n\}" /> は、区間 <InlineMath math="[a, b]" /> に属するため有界な数列である。
                    ボルツァーノ・ワイエルシュトラスの定理より、収束する部分列 <InlineMath math="\{x_{n_k}\}" /> を持つ。その極限を <InlineMath math="x^*" /> とおく。
                    閉区間なので <InlineMath math="x^* \in [a, b]" /> である。
                    <InlineMath math="f" /> は連続であるから、部分列の極限に対して <InlineMath math="\lim_{k \to \infty} f(x_{n_k}) = f(x^*)" /> となり、有限な値に収束しなければならない。
                    しかし構成から <InlineMath math="f(x_{n_k}) > n_k \to \infty" /> となるはずであり、矛盾する。よって上に有界である。
                </p>

                <p className="mt-4"><strong>ステップ2：上限の達成（最大値の存在）</strong></p>
                <p>
                    <InlineMath math="f" /> が上に有界であることがわかったので、実数の完備性（上限公理）より、値域の上限 <InlineMath math="M = \sup \{ f(x) \mid x \in [a, b] \}" /> が存在する。
                    あとは <InlineMath math="f(c) = M" /> となる <InlineMath math="c" /> が存在することを示せばよい。
                    これも背理法を用いる。すべての <InlineMath math="x \in [a, b]" /> で <InlineMath math="f(x) < M" /> であると仮定する。このとき、関数
                </p>
                <BlockMath math="g(x) = \frac{1}{M - f(x)}" />
                <p>
                    を考える。分母は決して 0 にならないため、<InlineMath math="g(x)" /> は連続な関数の商として、<InlineMath math="[a, b]" /> 上の連続関数となる。
                    ステップ1より、連続関数 <InlineMath math="g(x)" /> もまた上に有界である。しかし、<InlineMath math="M" /> は上限であるため、関数値 <InlineMath math="f(x)" /> はいくらでも <InlineMath math="M" /> に近づくことができる。
                    すると <InlineMath math="M - f(x)" /> はいくらでも 0 に近づき、<InlineMath math="g(x)" /> はいくらでも大きくなる（上に有界でない）こととなり、矛盾する。
                    よって、<InlineMath math="f(c) = M" /> を満たす <InlineMath math="c \in [a, b]" /> が必ず存在する。（最小値についても同様）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ボルツァーノ・ワイエルシュトラスの定理を用いたこのアプローチ以外にも、区間縮小法を用いた証明などがありますが、いずれにせよ実数の完備性（点列の集積点、あるいは上限公理）が核心的な役割を果たしています。
            </p>

            <p>
                連続関数の大域的な性質の議論はこれにて一段落です。次節からは、連続性という前提から少し離れて、あるいは特定の性質に絞って、「関数の単調性」や「関数の凹凸（凸関数）」という、解析学・最適化の分野で非常に重要な実関数のクラスについて調べていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>最大値・最小値定理は、有界な閉区間上の連続関数が常に最大値と最小値を持つことを保証する。</li>
                    <li>開区間や非有界区間では成立しない大域的で強い性質である。</li>
                    <li>証明には「有界であることを示すステップ」と「上限を達成することを示すステップ」の2段階を用い、実数の完備性が本質的に利用される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
