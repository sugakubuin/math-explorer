import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LpConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでの収束概念は、確率や標本点での振る舞いに着目したものでした。
                本節では、関数空間におけるノルムの収束に基づく「<InlineMath math="L^p" /> 収束」を扱います。
                これは統計学的な「平均的な誤差（期待値）」の収束を評価する際に不可欠な概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">L^p 収束の定義</h2>

            <p className="leading-relaxed">
                <InlineMath math="L^p" /> 収束は、確率変数をベクトル空間の元とみなし、その距離（ノルム）がゼロに近づくことを意味します。
            </p>

            <ContentBox type="definition" title="Definition 6.3-1 (Lp 収束)">
                <p>
                    <InlineMath math="p \geq 1" /> とする。確率変数列 <InlineMath math="\{X_n\}" /> および <InlineMath math="X" /> が <InlineMath math="E[|X_n|^p] < \infty" />、<InlineMath math="E[|X|^p] < \infty" /> を満たすとき、
                    次が成り立つならば <InlineMath math="X_n" /> は <InlineMath math="X" /> に <b><InlineMath math="L^p" /> 収束</b> するという：
                    <BlockMath math="\lim_{n \to \infty} E[|X_n - X|^p] = 0" />
                    これを <InlineMath math="X_n \xrightarrow{L^p} X" /> と表記する。特に <InlineMath math="p = 2" /> の場合は<b>二乗平均収束</b>（mean-square convergence）とも呼ばれる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                <InlineMath math="L^p" /> 収束は、§6.2 で学んだ確率収束よりも強い条件を持ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (Lp 収束と確率収束の関係)">
                <p>
                    <InlineMath math="X_n \xrightarrow{L^p} X" /> ならば、確率収束する：
                    <BlockMath math="X_n \xrightarrow{L^p} X \implies X_n \xrightarrow{P} X" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    マルコフの不等式（§3.2）を用いる。任意の <InlineMath math="\varepsilon > 0" /> に対して、
                    <BlockMath math="P(|X_n - X| > \varepsilon) = P(|X_n - X|^p > \varepsilon^p) \leq \frac{E[|X_n - X|^p]}{\varepsilon^p}" />
                    が成り立つ。<InlineMath math="L^p" /> 収束の仮定より右辺は <InlineMath math="n \to \infty" /> で <InlineMath math="0" /> に収束するため、
                    左辺も <InlineMath math="0" /> に向かう。したがって確率収束の定義を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                しかし、確率収束していても <InlineMath math="L^p" /> ノルムが発散してしまうケースがあるため、逆は成立しません。
            </p>

            <ContentBox type="example" title="Example 6.3-1 (確率収束するが L2 収束しない例)">
                <p>
                    <InlineMath math="\Omega = [0, 1]" /> 上の一様分布において、確率変数列を
                    <BlockMath math="X_n = \sqrt{n} \cdot 1_{[0, 1/n]}" />
                    と定義する。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><b>確率収束</b>: <InlineMath math="P(|X_n| > \varepsilon) = P([0, 1/n]) = 1/n \to 0" /> だから <InlineMath math="X_n \xrightarrow{P} 0" /> である。</li>
                    <li><b>L2 収束</b>: <InlineMath math="E[X_n^2] = n \cdot P([0, 1/n]) = n \cdot (1/n) = 1" /> であり、<InlineMath math="0" /> に収束しない。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様可積分性</h2>

            <p className="leading-relaxed">
                確率収束が <InlineMath math="L^p" /> 収束へ「昇格」するための鍵となる概念が「一様可積分性（uniform integrability）」です。
            </p>

            <ContentBox type="definition" title="Definition 6.3-2 (一様可積分性)">
                <p>
                    確率変数族 <InlineMath math="\{X_n\}" /> が<b>一様可積分</b>（uniformly integrable）であるとは、次が成り立つことである：
                    <BlockMath math="\lim_{M \to \infty} \sup_n E[|X_n| 1_{\{|X_n| > M\}}] = 0" />
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 6.3-2 (L1 収束の必要十分条件)">
                <p>
                    <InlineMath math="X_n \xrightarrow{L^1} X" /> であるための必要十分条件は、
                    <InlineMath math="X_n \xrightarrow{P} X" /> かつ <InlineMath math="\{X_n\}" /> が一様可積分であることである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark: 一様可積分性の直感">
                <p>
                    一様可積分性は、確率変数の「裾（tail）」の重さがすべての <InlineMath math="n" /> で一様に制御されている状態を指します。
                    Example 6.3-1 の例では、非常に小さな確率で非常に大きな値をとるため、期待値（ノルム）の計算においてその「尖ったピーク」が無視できなくなっています。
                    一様可積分性があれば、このような極端な振る舞いが排除され、確率の収束が期待値の収束と一致するようになります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="L^p" /> 収束は期待値を用いた距離の収束であり、二乗平均収束（<InlineMath math="p=2" />）は特に工学・物理で多用される。</li>
                    <li><InlineMath math="L^p" /> 収束は確率収束を導くが、逆には一様可積分性のような追加の条件が必要となる。</li>
                    <li>一様可積分性は、確率変数の極端な値（裾の重さ）を一様に制限する概念である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
