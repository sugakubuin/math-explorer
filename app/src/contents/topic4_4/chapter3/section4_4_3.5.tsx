import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OptimalityConditions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までで、凸関数の劣微分の定義や様々な計算規則について学んできました。本節では、これらの道具を用いて凸最適化問題における最適性条件を定式化します。微積分学において、微分可能関数の極値の必要条件が導関数ゼロ（<InlineMath math="f'(x) = 0" />）であったように、凸解析においては劣微分にゼロが含まれること（<InlineMath math="0 \in \partial f(x)" />）が最適性の必要十分条件となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">無制約問題の最適性</h2>

            <p>
                まず、制約条件のない最も基本的な最小化問題について考えます。凸関数の場合、局所的な最小値は常に大域的な最小値となり、その特徴づけは劣微分を用いて極めて簡潔に記述されます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.5-1 (フェルマの規則)">
                <p>
                    <InlineMath math="x^* \in \mathbb{R}^n" /> が凸関数 <InlineMath math="f : \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> の最小値を達成するための必要十分条件は、次が成り立つことである。
                </p>
                <BlockMath math="0 \in \partial f(x^*)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    劣勾配の定義により、<InlineMath math="0 \in \partial f(x^*)" /> であることは、任意の <InlineMath math="y \in \mathbb{R}^n" /> に対して次が成り立つことと同値である。
                </p>
                <BlockMath math="f(y) \geq f(x^*) + \langle 0, y - x^* \rangle"
                />
                <p>
                    すなわち、
                </p>
                <BlockMath math="f(y) \geq f(x^*)"
                />
                <p>
                    がすべての <InlineMath math="y" /> について成立し、これは <InlineMath math="x^*" /> が <InlineMath math="f" /> の大域的最小点であることを意味する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このフェルマの規則は直感的にも理解しやすいものです。滑らかな関数であれば、接線の傾きがゼロになる点が最小値の候補となりますが、折れ線のような非平滑な凸関数の場合は、その点を通る「水平な」支持超平面が存在することが最小値の条件となります。具体的な問題でこれを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.5-1">
                <p>
                    関数 <InlineMath math="f(x) = |x - 3| + 2|x|" /> の最小値を求める。
                </p>
                <p>
                    §3.3の和の公式（Theorem 3.3-1）により、各項の有効定義域は全空間であるため、劣微分は各項の劣微分の和となる。
                </p>
                <BlockMath math="\partial f(x) = \partial |x - 3| + 2 \partial |x|"
                />
                <p>
                    ここで、フェルマの規則より <InlineMath math="0 \in \partial f(x^*)" /> となる <InlineMath math="x^*" /> を探す。
                </p>
                <ul>
                    <li>
                        <InlineMath math="x = 0" /> のとき：
                        <InlineMath math="\partial f(0) = \{-1\} + 2[-1, 1] = \{-1\} + [-2, 2] = [-3, 1]" />。<InlineMath math="0 \in [-3, 1]" /> が成り立つため、<InlineMath math="x^* = 0" /> は最小値である。
                    </li>
                    <li>
                        <InlineMath math="0 < x < 3" /> のとき：
                        <InlineMath math="\partial f(x) = \{-1\} + \{2\} = \{1\}" />。<InlineMath math="0 \notin \{1\}" /> なので最小値ではない。
                    </li>
                </ul>
                <p>
                    したがって、最適解は <InlineMath math="x^* = 0" /> であり、最小値は <InlineMath math="f(0) = 3" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">制約付き問題の最適性</h2>

            <p>
                次に、凸集合 <InlineMath math="C" /> 上での最小化問題（制約付き問題）を考えます。ここでは、§2.4で導入した指示関数 <InlineMath math="\delta_C(x)" /> を用いることで、制約付き問題を無制約問題に帰着させるアプローチをとります。
            </p>

            <ContentBox type="theorem" title="Corollary 3.5-1">
                <p>
                    凸集合 <InlineMath math="C \subseteq \mathbb{R}^n" /> 上の凸関数 <InlineMath math="f" /> の最小化問題 <InlineMath math="\min_{x \in C} f(x)" /> を考える。和の公式のための制約想定（例えば <InlineMath math="\mathrm{ri}(\mathrm{dom}(f)) \cap \mathrm{ri}(C) \neq \emptyset" />）が満たされるとき、<InlineMath math="x^* \in C" /> が最適解であるための必要十分条件は次が成り立つことである。
                </p>
                <BlockMath math="0 \in \partial f(x^*) + N_C(x^*)" />
                <p>
                    ただし、<InlineMath math="N_C(x^*)" /> は <InlineMath math="x^*" /> における <InlineMath math="C" /> の正規錐である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    制約付き問題 <InlineMath math="\min_{x \in C} f(x)" /> は、指示関数を用いた無制約問題 <InlineMath math="\min_x (f(x) + \delta_C(x))" /> と同値である。この問題に対して Theorem 3.5-1（フェルマの規則）を適用すると、最適性条件は
                </p>
                <BlockMath math="0 \in \partial (f + \delta_C)(x^*)" />
                <p>
                    となる。制約想定のもとで和の公式（Theorem 3.3-1）が適用でき、
                </p>
                <BlockMath math="\partial (f + \delta_C)(x^*) = \partial f(x^*) + \partial \delta_C(x^*)" />
                <p>
                    が成り立つ。さらに、§3.2で確認した通り、指示関数の劣微分は正規錐に等しい（<InlineMath math="\partial \delta_C(x^*) = N_C(x^*)" />）。したがって、求める条件を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この条件 <InlineMath math="0 \in \partial f(x^*) + N_C(x^*)" /> は、「最適解においては、目的関数の降下方向（負の勾配の方向）が、制約集合の法線方向によって完全に打ち消される」という幾何学的な事実を表しています。具体的な計算例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.5-2">
                <p>
                    制約付き最適化問題 <InlineMath math="\min_{x \geq 0} (x - 1)^2" /> の最適性条件を検証する。
                </p>
                <p>
                    目的関数は <InlineMath math="f(x) = (x - 1)^2" />、制約集合は <InlineMath math="C = [0, \infty)" /> である。<InlineMath math="f" /> は微分可能であり、<InlineMath math="\partial f(x) = \{2(x - 1)\}" />。また、正規錐 <InlineMath math="N_C(x)" /> は以下のように計算される。
                </p>
                <ul>
                    <li><InlineMath math="x = 0" /> のとき：<InlineMath math="N_C(0) = (-\infty, 0]" /></li>
                    <li><InlineMath math="x > 0" /> のとき：<InlineMath math="N_C(x) = \{0\}" /></li>
                </ul>
                <p>
                    最適性条件 <InlineMath math="0 \in \partial f(x) + N_C(x)" /> を各点で確かめる。
                </p>
                <ul>
                    <li>
                        <InlineMath math="x = 0" /> のとき：
                        <InlineMath math="\partial f(0) = \{-2\}" /> なので、<InlineMath math="0 \in \{-2\} + (-\infty, 0] = (-\infty, -2]" /> となり、これは成立しない。よって <InlineMath math="x = 0" /> は最適解ではない。
                    </li>
                    <li>
                        <InlineMath math="x = 1" /> のとき：
                        <InlineMath math="\partial f(1) = \{0\}" /> であり、<InlineMath math="1 > 0" /> より <InlineMath math="N_C(1) = \{0\}" />。<InlineMath math="0 \in \{0\} + \{0\}" /> は成立するため、<InlineMath math="x^* = 1" /> が最適解である。
                    </li>
                </ul>
            </ContentBox>

            <p>
                このように、劣微分と正規錐を用いることで、境界点における最適性も統一的に判定することが可能です。この概念は、最適化理論において非常に重要な役割を果たします。
            </p>

            <ContentBox type="remark" title="KKT条件への発展">
                <p>
                    ここで導いた Corollary 3.5-1 の条件は、第5章で扱う <b>KKT条件（Karush-Kuhn-Tucker条件）</b> の凸解析的な一般化となっています。KKT条件は、制約集合が不等式や等式で具体的に与えられた際に、正規錐をラグランジュ乗数と制約関数の勾配（または劣微分）の線形結合として書き下したものです。非平滑な関数が混在する最適化問題においても、この劣微分を用いた定式化は最適性の基本的な判定手段として機能し続けます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>無制約問題において、<InlineMath math="x^*" /> が凸関数の最小値を与える必要十分条件は <InlineMath math="0 \in \partial f(x^*)" /> である（フェルマの規則）。</li>
                    <li>制約付き問題 <InlineMath math="\min_{x \in C} f(x)" /> は、指示関数を用いて無制約問題に帰着でき、和の公式を適用することで最適性条件 <InlineMath math="0 \in \partial f(x^*) + N_C(x^*)" /> を得る。</li>
                    <li>これらの条件は、非平滑最適化における最適性の判定基準として中心的な役割を果たす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
