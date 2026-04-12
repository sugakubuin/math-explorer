import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FenchelMoreauTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では双共役関数 <InlineMath math="f^{**}" /> が常にもとの関数 <InlineMath math="f" /> 以下の値をとり、さらに <InlineMath math="f" /> 以下のすべての閉凸関数の上限に等しいこと（すなわち閉凸包であること）を学びました。
                本節では、この結果の帰結として得られる凸解析の金字塔、<b>フェンシェル-モロの定理</b>（Fenchel-Moreau Theorem）を証明します。
                この定理は、関数が「閉」かつ「真」の凸関数であるという適切な条件下において、共役変換を二回行うと元の関数に完全に戻ることを保証します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フェンシェル-モロの定理</h2>

            <p>
                それでは、フェンシェル-モロの定理のステートメントとその証明を見ていきましょう。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 4.4-1 (フェンシェル-モロの定理)</span>}>
                <p>
                    関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> が閉真凸関数ならば、
                </p>
                <BlockMath math="f^{**} = f" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、任意の関数 <InlineMath math="f" /> に対して <InlineMath math="f^{**}(x) \leq f(x)" /> が成り立つことは前節の Proposition 4.3-1 で示されています。
                    したがって、逆の不等式 <InlineMath math="f^{**}(x) \geq f(x)" /> がすべての <InlineMath math="x \in \mathbb{R}^n" /> で成り立つことを示せば十分です。
                </p>
                <p>
                    背理法で示します。ある <InlineMath math="x_0 \in \mathbb{R}^n" /> が存在して、
                </p>
                <BlockMath math="f^{**}(x_0) < f(x_0)" />
                <p>
                    となったと仮定します。<InlineMath math="f(x_0) = +\infty" /> の場合と、<InlineMath math="f(x_0) \in \mathbb{R}" /> の場合について考えますが、ここでは適当な実数 <InlineMath math="\alpha" /> をとって
                </p>
                <BlockMath math="f^{**}(x_0) < \alpha < f(x_0)" />
                <p>
                    となるようにできます。関数 <InlineMath math="f" /> は閉凸関数であるため、そのエピグラフ <InlineMath math="\mathrm{epi}(f)" /> は <InlineMath math="\mathbb{R}^{n+1}" /> の閉凸集合です。
                    また、不等式 <InlineMath math="\alpha < f(x_0)" /> より、点 <InlineMath math="(x_0, \alpha)" /> は <InlineMath math="\mathrm{epi}(f)" /> に属しません。
                </p>
                <p>
                    したがって、分離定理（Theorem 1.4-1）により、点 <InlineMath math="(x_0, \alpha)" /> と閉凸集合 <InlineMath math="\mathrm{epi}(f)" /> を厳密に分離する超平面が存在します。
                    すなわち、あるベクトル <InlineMath math="y \in \mathbb{R}^n" />、実数 <InlineMath math="\mu \in \mathbb{R}" />、および <InlineMath math="\epsilon > 0" /> が存在して、すべての <InlineMath math="(x, t) \in \mathrm{epi}(f)" /> に対して
                </p>
                <BlockMath math="\langle y, x \rangle + \mu t \leq \langle y, x_0 \rangle + \mu \alpha - \epsilon" />
                <p>
                    が成り立ちます。<InlineMath math="t" /> はいくらでも大きくできるため、<InlineMath math="\mu \leq 0" /> でなければなりません。
                </p>
                <p>
                    <strong>ケース1： <InlineMath math="\mu < 0" /> の場合</strong>
                    <br />
                    両辺を <InlineMath math="-\mu > 0" /> で割り、<InlineMath math="y' = y / (-\mu)" /> とおきます。また、<InlineMath math="t = f(x)" /> とします。<InlineMath math="f" /> が真凸関数であるため <InlineMath math="\mathrm{dom}(f) \neq \emptyset" /> であり、<InlineMath math="x \in \mathrm{dom}(f)" /> について
                </p>
                <BlockMath math="\langle y', x \rangle - f(x) \leq \langle y', x_0 \rangle - \alpha - \epsilon'" />
                <p>
                    が成り立ちます（ここで <InlineMath math="\epsilon' = \epsilon / (-\mu) > 0" />）。左辺で <InlineMath math="x" /> についての上限をとると、共役関数の定義により
                </p>
                <BlockMath math="f^*(y') \leq \langle y', x_0 \rangle - \alpha - \epsilon'" />
                <p>
                    となります。これを変形すると
                </p>
                <BlockMath math="\alpha + \epsilon' \leq \langle y', x_0 \rangle - f^*(y')" />
                <p>
                    右辺は <InlineMath math="f^{**}(x_0)" /> の上限の対象の一つであるため、
                </p>
                <BlockMath math="\alpha < \alpha + \epsilon' \leq f^{**}(x_0)" />
                <p>
                    となり、<InlineMath math="f^{**}(x_0) < \alpha" /> という仮定に矛盾します。
                </p>
                <p>
                    <strong>ケース2： <InlineMath math="\mu = 0" /> の場合</strong>
                    <br />
                    <InlineMath math="f" /> は真凸関数なので、<InlineMath math="x_1 \in \mathrm{dom}(f)" /> を固定します。<InlineMath math="\mu = 0" /> のとき、分離不等式は
                </p>
                <BlockMath math="\langle y, x \rangle \leq \langle y, x_0 \rangle - \epsilon \quad (\forall x \in \mathrm{dom}(f))" />
                <p>
                    となります。<InlineMath math="f" /> は真凸関数なので <InlineMath math="f^*(y_1)" /> が有限となる <InlineMath math="y_1 \in \mathbb{R}^n" /> が存在します（分離定理のもう一つの帰結）。
                    任意の <InlineMath math="\lambda > 0" /> に対して、<InlineMath math="y_\lambda = y_1 + \lambda y" /> とおき、<InlineMath math="f^*(y_\lambda)" /> を評価すると、
                </p>
                <BlockMath math="\langle y_\lambda, x_0 \rangle - f^*(y_\lambda) \to +\infty \quad (\lambda \to \infty)" />
                <p>
                    となることが示せます。これは <InlineMath math="f^{**}(x_0) = +\infty" /> を意味し、<InlineMath math="f^{**}(x_0) < f(x_0)" /> に矛盾します。
                </p>
                <p>
                    以上より、すべての <InlineMath math="x" /> において <InlineMath math="f^{**}(x) \geq f(x)" /> が成り立ち、<InlineMath math="f^{**} = f" /> が結論づけられます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                定理の主張を具体的な関数で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.4-1">
                <p>
                    関数 <InlineMath math="f(x) = |x|" /> は <InlineMath math="\mathbb{R}" /> 上の閉真凸関数です。この関数の共役関数を計算してみます。
                </p>
                <BlockMath math="f^*(y) = \sup_{x \in \mathbb{R}} (xy - |x|)" />
                <p>
                    <InlineMath math="|y| \leq 1" /> のとき、<InlineMath math="xy - |x| \leq |x||y| - |x| = |x|(|y| - 1) \leq 0" /> であり、<InlineMath math="x = 0" /> で <InlineMath math="0" /> を達成するので、<InlineMath math="f^*(y) = 0" /> です。<br />
                    一方、<InlineMath math="|y| > 1" /> のとき、<InlineMath math="x" /> を <InlineMath math="y" /> と同符号で無限大に飛ばせば <InlineMath math="xy - |x| \to +\infty" /> となるため、<InlineMath math="f^*(y) = +\infty" /> です。
                </p>
                <p>
                    すなわち、<InlineMath math="f^*(y) = \delta_{[-1, 1]}(y)" />（区間 <InlineMath math="[-1, 1]" /> の指示関数）となります。
                    次に、双共役 <InlineMath math="f^{**}(x)" /> を計算します。
                </p>
                <BlockMath math="f^{**}(x) = \sup_{y \in \mathbb{R}} (xy - f^*(y)) = \sup_{|y| \leq 1} (xy - 0) = |x|" />
                <p>
                    このように、<InlineMath math="f^{**}(x) = f(x)" /> が成立していることが確認できました。
                </p>
            </ContentBox>

            <p>
                ここで、「閉」であるという条件がなぜ重要なのかを理解するために、閉でない凸関数の例を見てみます。
            </p>

            <ContentBox type="example" title="Example 4.4-2">
                <p>
                    区間 <InlineMath math="[-1, 1]" /> 上で定義された次の関数 <InlineMath math="f" /> を考えます。
                </p>
                <BlockMath math="f(x) = \begin{cases} -\sqrt{1-x^2} & (|x| < 1) \\ +\infty & (|x| \geq 1) \end{cases}" />
                <p>
                    この関数 <InlineMath math="f" /> は凸関数ですが、<InlineMath math="x = \pm 1" /> において下半連続でないため、閉関数ではありません。
                    この関数の共役関数を計算し、さらに双共役関数を求めると、
                </p>
                <BlockMath math="f^{**}(x) = \begin{cases} -\sqrt{1-x^2} & (|x| \leq 1) \\ +\infty & (|x| > 1) \end{cases}" />
                <p>
                    となります。<InlineMath math="f^{**}" /> は <InlineMath math="f" /> の閉凸包（エピグラフの閉包に対応する関数）となるため、端点 <InlineMath math="x = \pm 1" /> における値が <InlineMath math="+\infty" /> から <InlineMath math="0" /> に修正されます。したがって、<InlineMath math="f^{**} \neq f" /> となります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="完全な双対性と対合">
                <p>
                    フェンシェル-モロの定理は、閉真凸関数のクラスにおいて共役変換 <InlineMath math="f \mapsto f^*" /> が全単射であり、さらに対合（2回適用すると元に戻る写像、インボリューション）であることを意味しています。
                </p>
                <p>
                    これは線形代数における双対ベクトル空間の自己同型（有限次元空間における <InlineMath math="(V^*)^* \cong V" />）や、フーリエ変換の反転公式に類似した、凸解析における「完全な双対性」を保証する極めて美しい結果です。最適化問題において主問題と双対問題の間のギャップがなくなり、双方向に行き来できるのは、この定理が根底にあるからです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>フェンシェル-モロの定理は、関数 <InlineMath math="f" /> が閉真凸関数であれば <InlineMath math="f^{**} = f" /> が成り立つことを主張する。</li>
                    <li>この結果は分離定理に基礎を置いており、エピグラフの閉凸性が本質的な役割を果たす。</li>
                    <li>関数が閉でない場合、双共役関数はもとの関数の下半連続包（閉凸包）に一致するように値が修正される。</li>
                    <li>共役変換は閉真凸関数のクラス上で対合となり、強力な双対性の枠組みを提供する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
