import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CentralLimitTheoremProof() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                中心極限定理はなぜ成り立つのでしょうか？その秘密は、「特性関数（§7）」と「テイラー展開（§7.2）」の組み合わせにあります。
                本節では、レビーの連続性定理を用いてこの定理を厳密に証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特性関数を用いた証明</h2>

            <p className="leading-relaxed">
                独立な確率変数の和の特性関数は、個々の特性関数の積になるという性質を利用します。
            </p>

            <ContentBox type="theorem" title="Theorem 9.2-1 (中心極限定理の証明)">
                <p>
                    <InlineMath math="\{X_n\}" /> を i.i.d. とし、<InlineMath math="E[X_1] = 0, \text{Var}(X_1) = 1" /> としても一般性を失わない。
                    このとき、<InlineMath math="Z_n = \frac{1}{\sqrt{n}}\sum X_k" /> の特性関数が <InlineMath math="e^{-t^2/2}" /> に収束することを示す。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <b>和の特性関数</b>：
                        <InlineMath math="X_k" /> の特性関数を <InlineMath math="\varphi_X(t)" /> とすると、<InlineMath math="Z_n" /> の特性関数は次のように書ける：
                        <BlockMath math="\varphi_{Z_n}(t) = E\left[\exp\left(it \frac{\sum X_k}{\sqrt{n}}\right)\right] = \left[\varphi_X\left(\frac{t}{\sqrt{n}}\right)\right]^n" />
                    </li>
                    <li>
                        <b>テイラー展開（モーメントとの関係）</b>：
                        §7.2 の結果より、平均 <InlineMath math="0" />、分散 <InlineMath math="1" /> のとき、特性関数は原点付近で次のように展開できる：
                        <BlockMath math="\begin{aligned} \varphi_X(u) &= 1 + iE[X]u - \frac{E[X^2]}{2}u^2 + o(u^2) \\ &= 1 - \frac{u^2}{2} + o(u^2) \end{aligned}" />
                    </li>
                    <li>
                        <b>極限の計算</b>：
                        <InlineMath math="u = t/\sqrt{n}" /> を代入すると、
                        <BlockMath math="\varphi_{Z_n}(t) = \left[ 1 - \frac{t^2}{2n} + o\left(\frac{1}{n}\right) \right]^n" />
                        となる。ここで、極限公式 <InlineMath math="(1 + a/n + o(1/n))^n \to e^a" /> を用いると、
                        <BlockMath math="\lim_{n \to \infty} \varphi_{Z_n}(t) = e^{-t^2/2}" />
                        が得られる。
                    </li>
                    <li>
                        <b>レビーの連続性定理の適用</b>：
                        極限関数 <InlineMath math="e^{-t^2/2}" /> は標準正規分布 <InlineMath math="\mathcal{N}(0, 1)" /> の特性関数であり、原点で連続である。
                        よって、レビーの連続性定理（Theorem 7.4-1）より、
                        <InlineMath math="Z_n" /> は標準正規分布に分布収束する。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例：指数分布</h2>

            <p className="leading-relaxed">
                証明のプロセスを、具体的な分布で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 9.2-1 (指数分布における特性関数の収束)">
                <p>
                    <InlineMath math="X_i \sim \text{Exp}(1)" /> とし、標準化のために <InlineMath math="Y_i = X_i - 1" /> とおく。
                    このとき <InlineMath math="\varphi_Y(t) = \frac{e^{-it}}{1 - it}" /> である。
                </p>
                <p className="mt-2">
                    <BlockMath math="\begin{aligned} \log \varphi_Y(u) &= -iu - \log(1-iu) \\ &= -iu + (iu + \frac{(iu)^2}{2} + \cdots) \\ &= -\frac{u^2}{2} + o(u^2) \end{aligned}" />
                    となる。したがって、
                    <BlockMath math="\begin{aligned} \log \varphi_{Z_n}(t) &= n \log \varphi_Y(t/\sqrt{n}) \\ &= n \left[ -\frac{t^2}{2n} + o(1/n) \right] \\ &= -\frac{t^2}{2} + o(1) \end{aligned}" />
                    となり、極限が標準正規分布の対数特性関数に一致することが確認できる。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>中心極限定理の証明は、特性関数の積の性質とテイラー展開によって「指数関数」が現れることに集約される。</li>
                    <li>第 2 モーメント（分散）までの有限性が、対数特性関数の <InlineMath math="2" /> 次（正規分布）の項を支配する。</li>
                    <li>レビーの連続性定理が、特性関数の収束を分布の収束へと「翻訳」する役割を果たす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
