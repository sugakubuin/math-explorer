import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function StrongConvexFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、通常の凸性よりもさらに強い性質である「強凸性（strong convexity）」について学びます。強凸関数は、最適化問題において理論と応用の両面で極めて重要な役割を果たします。特に、最小値の存在と一意性を保証する強力な性質を持っており、機械学習などの実用的なアルゴリズムにおいても頻繁に利用されます。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">強凸関数の定義</h2>

            <p>まずは、強凸関数の定義を与えます。直感的には、強凸関数は通常の凸関数の性質に加えて、少なくとも二次関数以上の「曲がり具合」を持つ関数と捉えることができます。</p>

            <ContentBox type="definition" title="Definition 2.6-1 (強凸関数)">
                <p>
                    パラメータ <InlineMath math="m > 0" /> に対して、関数 <InlineMath math="f: \mathbb{R}^n \	o \mathbb{R} \cup \{+\infty\}" /> が<b>強凸関数（strongly convex function）</b>であるとは、
                    <BlockMath math="x \mapsto f(x) - \frac{m}{2}\|x\|^2" />
                    が凸関数であることをいう。
                </p>
                <p>
                    同値的に、任意の <InlineMath math="x, y \in \mathrm{dom}(f)" /> と <InlineMath math="\lambda \in [0,1]" /> に対して、以下の不等式が成り立つことと同値である：
                    <BlockMath math="\begin{aligned} &f(\lambda x + (1-\lambda)y) \\ &\quad \leq \lambda f(x) + (1-\lambda)f(y) - \frac{m}{2}\lambda(1-\lambda)\|x-y\|^2 \end{aligned}" />
                </p>
            </ContentBox>

            <p>上記の定義における第二の条件は、通常の凸関数の定義式に二次関数的な減少項 <InlineMath math="-\frac{m}{2}\lambda(1-\lambda)\|x-y\|^2" /> が追加された形になっています。この項があるおかげで、関数は直線よりも下側に「確実に」膨らむことになります。続いて、具体的な例を見てみましょう。</p>

            <ContentBox type="example" title="Example 2.6-1">
                <p>
                    二次形式 <InlineMath math="f(x) = \frac{1}{2}x^T A x" /> （<InlineMath math="A" /> は対称行列）が強凸であるための条件を考える。
                </p>
                <p>
                    定義より、<InlineMath math="f(x) - \frac{m}{2}\|x\|^2 = \frac{1}{2}x^T (A - mI) x" /> が凸関数であればよい。二次関数が凸であることと、そのヘッセ行列が半正定値であることは同値であるため、<InlineMath math="A - mI \succeq 0" />、すなわち <InlineMath math="A" /> の最小固有値 <InlineMath math="\lambda_{\min}(A)" /> が <InlineMath math="m" /> 以上であればよい。
                </p>
                <p>
                    したがって、<InlineMath math="A" /> が正定値行列（<InlineMath math="\lambda_{\min}(A) > 0" />）であれば、<InlineMath math="f" /> は強凸関数となる。例えば、
                    <BlockMath math="A = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}" />
                    のとき、<InlineMath math="\lambda_{\min}(A) = 1" /> なので、<InlineMath math="m = 1" /> で強凸である。
                </p>
            </ContentBox>

            <p>一方で、凸関数であっても強凸ではない関数の例も確認しておきます。</p>

            <ContentBox type="example" title="Example 2.6-2">
                <p>
                    絶対値関数 <InlineMath math="f(x) = |x|" /> は凸関数であるが、強凸関数ではない。
                </p>
                <p>
                    これを検証する。<InlineMath math="x = 1, y = -1, \lambda = 1/2" /> とすると、<InlineMath math="\lambda x + (1-\lambda)y = 0" /> である。強凸性の不等式に代入すると、
                    <BlockMath math="f(0) \leq \frac{1}{2}f(1) + \frac{1}{2}f(-1) - \frac{m}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} |1 - (-1)|^2" />
                    <BlockMath math="0 \leq \frac{1}{2}(1) + \frac{1}{2}(1) - \frac{m}{8}(4) = 1 - \frac{m}{2}" />
                    となる。これがすべての <InlineMath math="x, y, \lambda" /> で成り立つには <InlineMath math="m \leq 2" /> でなければならないが、他の点（例えば十分大きい区間）で直線のようになる部分を考えると、ある固定された <InlineMath math="m > 0" /> に対して大域的に二次関数の曲がり具合を持たせることは不可能である。実際、<InlineMath math="f(x) - \frac{m}{2}x^2 = |x| - \frac{m}{2}x^2" /> は十分大きな <InlineMath math="x" /> で上に凸（凹関数）となってしまうため、凸関数ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">強凸関数の最小化</h2>

            <p>強凸関数の最も強力な性質は、最小値の存在とその一意性を保証することです。通常の凸関数では、最小値が存在しない場合（例：<InlineMath math="e^x" />）や、複数存在する場合（例：平らな部分を持つ関数）がありますが、強凸関数ではそのようなことは起こりません。</p>

            <ContentBox type="theorem" title="Theorem 2.6-1">
                <p>
                    真の閉強凸関数 <InlineMath math="f" /> は、一意の最小値を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、最小化列を用いて存在を示す。<InlineMath math="f^* = \inf_x f(x)" /> とし、<InlineMath math="f(x_k) \	o f^*" /> となる点列 <InlineMath math="\{x_k\}" /> をとる。
                    強凸性の定義式において <InlineMath math="\lambda = 1/2" /> とすると、
                    <BlockMath math="f\left(\frac{x_k + x_l}{2}\right) \leq \frac{1}{2}f(x_k) + \frac{1}{2}f(x_l) - \frac{m}{8}\|x_k - x_l\|^2" />
                    が成り立つ。式を変形すると、
                    <BlockMath math="\frac{m}{8}\|x_k - x_l\|^2 \leq \frac{1}{2}f(x_k) + \frac{1}{2}f(x_l) - f\left(\frac{x_k + x_l}{2}\right)" />
                    ここで、<InlineMath math="f((x_k + x_l)/2) \geq f^*" /> であるから、
                    <BlockMath math="\frac{m}{8}\|x_k - x_l\|^2 \leq \frac{1}{2}f(x_k) + \frac{1}{2}f(x_l) - f^*" />
                    <InlineMath math="k, l \to \infty" /> のとき、右辺は <InlineMath math="\frac{1}{2}f^* + \frac{1}{2}f^* - f^* = 0" /> に収束する。したがって、<InlineMath math="\|x_k - x_l\| \to 0" /> となり、<InlineMath math="\{x_k\}" /> はコーシー列である。<InlineMath math="\mathbb{R}^n" /> は完備なので、ある <InlineMath math="x^*" /> に収束する。
                </p>
                <p>
                    <InlineMath math="f" /> は閉（すなわち下半連続）なので、<InlineMath math="f(x^*) \leq \liminf_{k \to \infty} f(x_k) = f^*" /> となり、<InlineMath math="x^*" /> は最小値を与える。
                </p>
                <p>
                    次に一意性を示す。仮に二つの異なる最小点 <InlineMath math="x_1 \neq x_2" /> が存在し、ともに最小値 <InlineMath math="f^*" /> を与えるとする。強凸性の式（<InlineMath math="\lambda = 1/2" />）より、
                    <BlockMath math="\begin{aligned} f\left(\frac{x_1 + x_2}{2}\right) &\leq \frac{1}{2}f(x_1) + \frac{1}{2}f(x_2) - \frac{m}{8}\|x_1 - x_2\|^2 \\ &= f^* - \frac{m}{8}\|x_1 - x_2\|^2 \\ &< f^*\end{aligned}" />
                    となり、<InlineMath math="f^*" /> が最小値であることに矛盾する。よって最小点は一意である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>この定理により、強凸関数を含む最適化問題では、解の存在と一意性について悩む必要がなくなります。具体的な関数で確認してみましょう。</p>

            <ContentBox type="example" title="Example 2.6-3">
                <p>
                    関数 <InlineMath math="f(x) = x^2 + e^{-x}" /> を考える。この関数は <InlineMath math="\mathbb{R}" /> 上で強凸である（<InlineMath math="m = 2" /> の強凸関数）。
                </p>
                <p>
                    定理より一意の最小値を持つ。微分して <InlineMath math="f'(x) = 2x - e^{-x} = 0" /> を解くと、解析的な閉形式解は得られないが、数値的に <InlineMath math="x^* \approx 0.3517" /> が唯一の最適解であることがわかる。
                </p>
            </ContentBox>

            <p>最後に、強凸性が実際の応用においてなぜ重要なのかについて、コラムとしてまとめます。</p>

            <ContentBox type="remark" title="機械学習における正則化と強凸性">
                <p>
                    強凸性は、最適化理論（A-3）において勾配法の「線形収束率（指数的な速さでの収束）」を保証するための鍵となる性質です。通常の凸関数では収束が遅いアルゴリズムでも、強凸性があれば非常に速く解にたどり着くことができます。
                </p>
                <p>
                    機械学習においては、目的関数が必ずしも強凸とは限らない場合（例えば、特徴量の次元がデータ数より大きい場合の最小二乗法など）に、意図的に <InlineMath math="\frac{\lambda}{2}\|x\|^2" /> という二次項を足す手法が広く用いられます。これを<b>L2正則化（Ridge回帰など）</b>と呼びます。この正則化項を加えることで、元の問題が非強凸であっても強凸化され、解の一意性と計算の安定性（高速な収束）を同時に得ることができます。
                </p>
            </ContentBox>

            {/* Summary */}
            <ContentBox type="note" title="§2.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>強凸関数は、通常の凸性に加えて二次関数的な「曲がり具合」<InlineMath math="\frac{m}{2}\|x\|^2" /> を持つ関数のことである。</li>
                    <li>正定値行列による二次形式は強凸であるが、絶対値関数のような直線を含む関数は強凸ではない。</li>
                    <li>真の閉強凸関数は、必ず一意の最小値を持つ。</li>
                    <li>強凸性は最適化アルゴリズムの高速な収束を保証し、正則化の手法として機械学習などで応用される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
