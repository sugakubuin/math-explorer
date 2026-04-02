import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RemainderEstimation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節でテイラーの定理の2つの形を証明しました。
                しかし、実用上最も重要なのは「テイラー多項式による近似がどの程度正確か」を<strong>定量的に</strong>評価することです。
                本節では、ラグランジュ剰余項を用いた誤差の上界の求め方を学び、
                代表的な関数に対する具体的な誤差評価を行います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">剰余項の上からの評価</h2>

            <ContentBox type="proposition" title="Proposition 3.2-1 (ラグランジュ剰余項による近似誤差の上界)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が <InlineMath math="a" /> を含む区間 <InlineMath math="I" /> 上で <InlineMath math="n+1" /> 回微分可能であり、
                    ある定数 <InlineMath math="M_{n+1}" /> が存在して、
                </p>
                <BlockMath math="|f^{(n+1)}(t)| \leq M_{n+1} \quad (\forall t \in I)" />
                <p className="leading-relaxed">
                    が成り立つとする。このとき、<InlineMath math="x \in I" /> に対して、
                </p>
                <BlockMath math="|R_n(x)| = |f(x) - P_n(x)| \leq \frac{M_{n+1}}{(n+1)!}|x - a|^{n+1}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    ラグランジュ剰余項（Theorem 3.1-1）より、
                </p>
                <BlockMath math="R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}" />
                <p className="leading-relaxed">
                    なる <InlineMath math="c" /> が <InlineMath math="a" /> と <InlineMath math="x" /> の間に存在する。
                    <InlineMath math="c \in I" /> であるから、仮定より <InlineMath math="|f^{(n+1)}(c)| \leq M_{n+1}" /> である。したがって、
                </p>
                <BlockMath math="|R_n(x)| = \frac{|f^{(n+1)}(c)|}{(n+1)!}|x - a|^{n+1} \leq \frac{M_{n+1}}{(n+1)!}|x - a|^{n+1}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この評価のポイントは、中間点 <InlineMath math="c" /> の正確な位置が分からなくても、
                <InlineMath math="f^{(n+1)}" /> の<strong>最大値</strong>さえ見積もれば誤差の上界が得られるという点です。
                次数 <InlineMath math="n" /> を上げれば <InlineMath math="(n+1)!" /> の急激な増大により誤差は急速に小さくなるのが一般的です。
                具体的に見てみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な誤差評価</h2>

            <ContentBox type="example" title="Example 3.2-1 (e, sin x, cos x のテイラー近似の誤差評価)">
                <h3 className="text-lg font-semibold mt-2 mb-2">1. <InlineMath math="e" /> の値の近似</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x) = e^x" /> の <InlineMath math="a = 0" /> を中心とする <InlineMath math="n" /> 次マクローリン多項式で <InlineMath math="e = f(1)" /> を近似する。
                    <InlineMath math="f^{(n+1)}(x) = e^x" /> であるから、<InlineMath math="0 \leq t \leq 1" /> の範囲で <InlineMath math="|f^{(n+1)}(t)| \leq e^1 < 3" /> と評価できる。
                </p>
                <BlockMath math="|R_n(1)| \leq \frac{3}{(n+1)!}" />
                <p className="leading-relaxed">
                    例えば <InlineMath math="n = 9" /> とすると、<InlineMath math="|R_9(1)| \leq \frac{3}{10!} = \frac{3}{3628800} \approx 8.3 \times 10^{-7}" /> であり、
                    小数第6位まで正確な近似が得られます。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">2. <InlineMath math="\sin x" /> の近似</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x) = \sin x" /> では、すべての階数の導関数が <InlineMath math="\pm\sin x" /> または <InlineMath math="\pm\cos x" /> であるから、
                    <InlineMath math="|f^{(n+1)}(t)| \leq 1" /> が常に成り立ちます。したがって、
                </p>
                <BlockMath math="|R_n(x)| \leq \frac{|x|^{n+1}}{(n+1)!}" />
                <p className="leading-relaxed">
                    この評価は <InlineMath math="n \to \infty" /> で <InlineMath math="0" /> に収束するため、
                    <InlineMath math="\sin x" /> のマクローリン級数は<strong>すべての実数 <InlineMath math="x" /> で収束</strong>します。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">3. <InlineMath math="\cos x" /> の近似</h3>
                <p className="leading-relaxed">
                    <InlineMath math="\sin x" /> と同様に <InlineMath math="|f^{(n+1)}(t)| \leq 1" /> であるから、
                    同じ誤差評価 <InlineMath math="|R_n(x)| \leq \frac{|x|^{n+1}}{(n+1)!}" /> が成り立ち、
                    <InlineMath math="\cos x" /> のマクローリン級数もすべての実数で収束します。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="(n+1)! の威力 —— 多項式近似はなぜ「良い」のか">
                <p className="leading-relaxed">
                    誤差評価 <InlineMath math="\frac{M|x-a|^{n+1}}{(n+1)!}" /> において、
                    階乗 <InlineMath math="(n+1)!" /> の成長速度は <InlineMath math="|x-a|^{n+1}" /> の成長速度をはるかに上回ります。
                    具体的には、任意の実数 <InlineMath math="r" /> に対して、
                </p>
                <BlockMath math="\lim_{n \to \infty} \frac{r^n}{n!} = 0" />
                <p className="leading-relaxed">
                    が成り立ちます。これは<InlineMath math="e^x" /> や <InlineMath math="\sin x" />, <InlineMath math="\cos x" /> のマクローリン級数がすべての実数で収束する根本的な理由です。
                    一方、<InlineMath math="\frac{1}{1+x}" /> のように <InlineMath math="M_{n+1}" /> 自体が急成長する関数では、
                    収束する <InlineMath math="x" /> の範囲（収束半径）が制限されます。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ラグランジュ剰余項から、<InlineMath math="|R_n(x)| \leq \frac{M_{n+1}}{(n+1)!}|x-a|^{n+1}" /> という誤差の上界が得られる（Proposition 3.2-1）。</li>
                    <li><InlineMath math="e^x, \sin x, \cos x" /> は <InlineMath math="|f^{(n+1)}| \leq M" /> （一様有界）であるため、マクローリン級数がすべての実数で収束する。</li>
                    <li>階乗 <InlineMath math="(n+1)!" /> のべき乗に対する圧倒的な成長速度が、テイラー近似の精度の根拠である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
