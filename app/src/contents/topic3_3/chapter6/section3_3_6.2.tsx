import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AbsoluteContinuity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「ほとんど至る所 (a.e.) で微分可能」というだけでは、導関数を積分しても元の関数を復元できるとは限りません。
                そのギャップを埋める鍵となるのが、<b>絶対連続 (absolute continuity)</b> という性質です。
                本節では、この積分と微分の間の「完全な対応」を保証する強力な連続性について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">絶対連続性の定義</h2>

            <p>
                絶対連続性は、一様連続性よりもさらに強い条件です。
                単一の区間だけでなく、ばらばらに離れた微小な区間たちの「合計の長さ」が小さければ、それに対応する「関数の変動の合計」も小さくなることを要求します。
            </p>

            <ContentBox type="definition" title="Definition 6.2-1 (絶対連続)">
                <p>
                    区間 <InlineMath math="[a, b]" /> 上の関数 <InlineMath math="f" /> が <b>絶対連続 (absolutely continuous)</b> であるとは、任意の <InlineMath math="\varepsilon > 0" /> に対し、ある <InlineMath math="\delta > 0" /> が存在して、互いに素な有限個の開区間 <InlineMath math="(a_1, b_1), \dots, (a_n, b_n) \subset [a, b]" /> が
                    <BlockMath math="\sum_{i=1}^n (b_i - a_i) < \delta" />
                    を満たすならば常に
                    <BlockMath math="\sum_{i=1}^n |f(b_i) - f(a_i)| < \varepsilon" />
                    が成り立つことをいう。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-1 (絶対連続な関数)">
                <ul className="list-disc list-inside space-y-2">
                    <li><b>不定積分</b>：可積分な関数 <InlineMath math="g" /> を用いて <InlineMath math="f(x) = \int_a^x g(t) \, dt + C" /> と書ける関数は、常に絶対連続である。</li>
                    <li><b>リプシッツ連続関数</b>：<InlineMath math="|f(x) - f(y)| \leq L|x-y|" /> を満たす関数は、常に絶対連続である。</li>
                    <li><b>反例</b>：連続で一様連続だが絶対連続ではない代表例として「カントール関数（悪魔の階段）」がある（§6.5 で詳述）。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">絶対連続関数の性質</h2>

            <p>
                絶対連続関数は、微積分を論じる上で極めて望ましい振る舞いをします。
            </p>

            <ContentBox type="proposition" title="Proposition 6.2-1 (有界変動性との関係)">
                <p>
                    区間 <InlineMath math="[a, b]" /> で絶対連続な関数は、必ず <b>有界変動</b> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    絶対連続性の定義において <InlineMath math="\varepsilon = 1" /> とすると、ある <InlineMath math="\delta > 0" /> が存在して、長さの合計が <InlineMath math="\delta" /> 未満の区間族に対して変位の合計が 1 未満となる。
                </p>
                <p className="mt-4">
                    区間 <InlineMath math="[a, b]" /> を、長さが <InlineMath math="\delta" /> 未満の <InlineMath math="N" /> 個の小区間 <InlineMath math="[x_{k-1}, x_k]" /> に分割する（<InlineMath math="N \approx (b-a)/\delta" />）。
                    各小区間内での全変動 <InlineMath math="V_{x_{k-1}}^{x_k}(f)" /> は、定義より 1 以下である。
                </p>
                <p className="mt-4">
                    したがって、全体の全変動はこれらの和で抑えられる：
                    <BlockMath math="V_a^b(f) = \sum_{k=1}^N V_{x_{k-1}}^{x_k}(f) \leq N < \infty" />
                    ゆえに <InlineMath math="f" /> は有界変動である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="不連続性・特異性の消失">
                <p>
                    有界変動関数には、微小な不連続点（ジャンプ）や、微分が a.e. で 0 なのに増大する「特異な部分」が含まれる可能性があります。
                    しかし、<b>絶対連続性</b> を仮定することで、これらの「不自然な不連続性」や「特異性」が完全に排除されます。
                    これにより、関数は「導関数の積分」という形で純粋に記述できるようになります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>絶対連続性</b> は、一様連続性を多区間に拡張した、さらに強力な連続性の概念である。</li>
                    <li>絶対連続な関数は必ず有界変動であり、不連続点を持たない。</li>
                    <li>絶対連続性は、微積分学の基本定理（積分したものを微分すると元に戻る等）が成り立つための数学的なバリアとなる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
