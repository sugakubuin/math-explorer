import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BiconjugateAndLowerSemicontinuousConvexHull() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、任意の関数に対してその共役関数（フェンシェル共役）を定義し、その計算例を見てきました。本節では、共役関数に対してさらに共役をとる操作である<b>双共役（biconjugate）</b>について学びます。双共役は、元の関数の情報をどこまで復元できるかという問題において中心的な役割を果たし、非凸関数の「凸化」や最適化問題の凸緩和の理論的基盤となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">双共役の定義と性質</h2>

            <p>
                ある関数 <InlineMath math="f" /> の共役関数 <InlineMath math="f^*" /> に対して、さらにもう一度共役変換を施して得られる関数を双共役関数と呼びます。定義は非常に自然なものです。
            </p>

            <ContentBox type="definition" title="Definition 4.3-1 (双共役関数)">
                <p>
                    関数 <InlineMath math="f: \mathbb{R}^n \	o \mathbb{R} \cup \{+\infty\}" /> の<b>双共役関数（biconjugate function）</b> <InlineMath math="f^{**}" /> を、次のように定義する。
                </p>
                <BlockMath math="f^{**}(x) = (f^*)^*(x) = \sup_{y \in \mathbb{R}^n} \{\langle x, y \rangle - f^*(y)\}" />
            </ContentBox>

            <p>
                双共役関数が元の関数 <InlineMath math="f" /> とどのような関係にあるのかを調べる第一歩として、常に <InlineMath math="f^{**}" /> が <InlineMath math="f" /> 以下になるという基本的な不等式を示します。
            </p>

            <ContentBox type="proposition" title="Proposition 4.3-1">
                <p>
                    任意の関数 <InlineMath math="f" /> に対して、すべての <InlineMath math="x \in \mathbb{R}^n" /> で次が成り立つ。
                </p>
                <BlockMath math="f^{**}(x) \leq f(x)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ヤング-フェンシェルの不等式によれば、任意の <InlineMath math="x, y \in \mathbb{R}^n" /> に対して
                </p>
                <BlockMath math="f(x) + f^*(y) \geq \langle x, y \rangle" />
                <p>
                    が成り立つ。これを移項すると、任意の <InlineMath math="y" /> について
                </p>
                <BlockMath math="f(x) \geq \langle x, y \rangle - f^*(y)" />
                <p>
                    となる。ここで右辺について <InlineMath math="y" /> に関する上限（supremum）をとると、双共役関数の定義により
                </p>
                <BlockMath math="f(x) \geq \sup_{y} \{\langle x, y \rangle - f^*(y)\} = f^{**}(x)" />
                <p>
                    を得る。したがって、<InlineMath math="f^{**}(x) \leq f(x)" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                元の関数が滑らかな凸関数である場合、双共役は元の関数に完全に一致することが期待されます。簡単な二次関数の例でこれを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.3-1">
                <p>
                    <InlineMath math="f(x) = x^2" /> の双共役関数を計算する。
                </p>
                <p>
                    まず、共役関数 <InlineMath math="f^*(y)" /> を求める。
                </p>
                <BlockMath math="f^*(y) = \sup_x \{xy - x^2\}" />
                <p>
                    <InlineMath math="x" /> に関して微分してゼロとおくと <InlineMath math="y - 2x = 0" /> より <InlineMath math="x = y/2" />。これを代入すると、
                </p>
                <BlockMath math="f^*(y) = y\left(\frac{y}{2}\right) - \left(\frac{y}{2}\right)^2 = \frac{y^2}{4}" />
                <p>
                    次に、双共役関数 <InlineMath math="f^{**}(x)" /> を計算する。
                </p>
                <BlockMath math="f^{**}(x) = \sup_y \left\{xy - \frac{y^2}{4}\right\}" />
                <p>
                    同様に <InlineMath math="y" /> に関して微分してゼロとおくと <InlineMath math="x - y/2 = 0" /> より <InlineMath math="y = 2x" />。これを代入すると、
                </p>
                <BlockMath math="f^{**}(x) = x(2x) - \frac{(2x)^2}{4} = 2x^2 - x^2 = x^2" />
                <p>
                    よって、<InlineMath math="f^{**}(x) = f(x)" /> となることが確認できた。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">双共役の幾何的意味</h2>

            <p>
                関数が凸でない場合や閉でない場合、双共役関数 <InlineMath math="f^{**}" /> は <InlineMath math="f" /> に一致しません。では <InlineMath math="f^{**}" /> は幾何学的に何を意味しているのでしょうか。実は、<InlineMath math="f^{**}" /> は <InlineMath math="f" /> の下から抑える最大の「閉凸関数」となることが知られています。これを<b>下半連続凸包（lower semicontinuous convex hull）</b>または単に閉凸包と呼びます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1">
                <p>
                    関数 <InlineMath math="f" /> の双共役関数 <InlineMath math="f^{**}" /> は、<InlineMath math="f" /> 以下のすべての閉凸関数の上限（最大の下界）に等しい。すなわち、<InlineMath math="f^{**}" /> は <InlineMath math="f" /> のエピグラフの閉凸包をエピグラフに持つような関数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="g" /> を <InlineMath math="g \leq f" /> を満たす任意の閉凸関数とする。このとき、共役をとる操作は大小関係を反転させるため、任意の <InlineMath math="y" /> に対して
                </p>
                <BlockMath math="\begin{aligned} g^*(y) &= \sup_x \{\langle x, y \rangle - g(x)\} \\ &\geq \sup_x \{\langle x, y \rangle - f(x)\} \\ &= f^*(y) \end{aligned}" />
                <p>
                    が成り立つ。さらにもう一度共役をとると、再び大小関係が反転し、
                </p>
                <BlockMath math="g^{**}(x) \leq f^{**}(x)" />
                <p>
                    を得る。次節のフェンシェル-モロの定理（Theorem 4.4-1）において証明されるように、<InlineMath math="g" /> が閉真凸関数であれば <InlineMath math="g^{**} = g" /> となる。したがって、
                </p>
                <BlockMath math="g(x) \leq f^{**}(x)" />
                <p>
                    が成り立つ。一方、<InlineMath math="f^{**}" /> 自身も上限の形で定義されているため、常に閉凸関数である。以上より、<InlineMath math="f^{**}" /> は <InlineMath math="f" /> を下から抑える最大の閉凸関数であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理から、非凸関数に対して双共役をとることは、その関数を「凸化」する操作にほかならないことがわかります。具体的な非凸関数でこの事実を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.3-2">
                <p>
                    非凸関数の双共役：<InlineMath math="f(x) = x^2(x-1)^2" /> とする。
                </p>
                <p>
                    この関数は <InlineMath math="x = 0" /> と <InlineMath math="x = 1" /> で最小値 <InlineMath math="0" /> をとり、その間の <InlineMath math="x = 1/2" /> で極大値 <InlineMath math="1/16" /> をとる W字型のグラフを持つ非凸関数である。この関数の双共役関数 <InlineMath math="f^{**}(x)" /> を考えると、Theorem 4.3-1 より <InlineMath math="f" /> 以下の最大の凸関数となる。
                </p>
                <p>
                    区間 <InlineMath math="[0, 1]" /> の外側では <InlineMath math="f" /> は凸であるため <InlineMath math="f^{**}(x) = f(x)" /> となるが、区間 <InlineMath math="[0, 1]" /> の内側では凸性を満たすために底が平らになる。具体的には、区間 <InlineMath math="[0, 1]" /> で <InlineMath math="f^{**}(x) = 0" /> となる。
                </p>
                <p>
                    この結果として、<InlineMath math="x = 1/2" /> において <InlineMath math="f^{**}(1/2) = 0 < f(1/2) = 1/16" /> となり、<InlineMath math="f^{**}(x) \leq f(x)" /> は満たされるが等号は成立しないことが確認できる。
                </p>
            </ContentBox>

            <p>
                このように、双共役をとる操作は関数の「へこみ」を埋めるような幾何学的な意味を持っています。これは最適化理論において非常に重要な応用を持ちます。
            </p>

            <ContentBox type="remark" title="凸緩和との関係">
                <p>
                    最適化理論において、非凸関数の最小化は一般に非常に困難です。しかし、双共役関数 <InlineMath math="f^{**}" /> は <InlineMath math="f" /> を下から抑える最大の凸関数であり、かつ大域的な最小値は一致します（<InlineMath math="\inf_x f(x) = \inf_x f^{**}(x)" />）。したがって、非凸問題 <InlineMath math="\min f(x)" /> の代わりに凸問題 <InlineMath math="\min f^{**}(x)" /> を解くことは、問題の<b>凸緩和（convex relaxation）</b>と解釈でき、近似解法や下界の計算に広く用いられます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>共役関数の共役をとったものを双共役関数 <InlineMath math="f^{**}" /> と呼び、常に <InlineMath math="f^{**} \leq f" /> が成り立つ。</li>
                    <li><InlineMath math="f^{**}" /> は <InlineMath math="f" /> 以下であるような最大の閉凸関数に等しい（閉凸包）。</li>
                    <li>非凸関数に対しては <InlineMath math="f^{**}" /> は <InlineMath math="f" /> の「へこみ」を埋めた関数となり、凸緩和の理論的基盤となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
