import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FenchelDualitySetup() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、フェンシェル共役を用いた双対問題の定式化と、最適化問題における弱双対定理について解説します。ラグランジュ双対性が制約条件に注目するのに対し、フェンシェル双対性は目的関数を二つの凸関数の和として捉え、それらの共役関数を用いて双対問題を構成します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フェンシェル双対問題の定式化</h2>

            <p>
                最適化問題を凸関数 <InlineMath math="f" /> と <InlineMath math="g" /> の和として定式化し、その双対問題を共役関数を用いて構成します。
            </p>

            <ContentBox type="definition" title={<span>Definition 5.1-1 (フェンシェル双対問題)</span>}>
                <p>
                    次で与えられる主問題：
                </p>
                <BlockMath math="\inf_x \{f(x) + g(Ax)\}" />
                <p>
                    に対する<b>フェンシェル双対問題（Fenchel dual problem）</b>を次のように定義する：
                </p>
                <BlockMath math="\sup_y \{-f^*(-A^T y) - g^*(y)\}" />
            </ContentBox>

            <p>
                このように定式化することで、主問題における変数 <InlineMath math="x" /> の最適化を、双対空間における変数 <InlineMath math="y" /> の最適化に変換できます。
            </p>

            <ContentBox type="remark" title="ラグランジュ双対性との違い">
                <p>
                    ラグランジュ乗数法が等式・不等式制約を直接扱うのに対し、フェンシェル双対は共役関数を通じてより一般的な構造を持ちます。指示関数を用いれば、制約付き問題もこの枠組みに自然に組み込むことが可能です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弱双対定理</h2>

            <p>
                主問題の最適値が双対問題の最適値の上界を与えることを示す弱双対定理を証明します。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 5.1-1 (弱双対定理)</span>}>
                <p>
                    主問題の最適値は、双対問題の最適値以上である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の実行可能な <InlineMath math="x" /> と <InlineMath math="y" /> に対して、ヤング-フェンシェルの不等式を適用する。
                    まず、<InlineMath math="z = -A^T y" /> と置くと、
                </p>
                <BlockMath math="f(x) \geq \langle x, -A^T y \rangle - f^*(-A^T y)" />
                <p>
                    また、<InlineMath math="g(Ax)" /> について、
                </p>
                <BlockMath math="g(Ax) \geq \langle Ax, y \rangle - g^*(y)" />
                <p>
                    これら2つの不等式を辺々加えると、
                </p>
                <BlockMath math="\begin{aligned} f(x) + g(Ax) &\geq \langle x, -A^T y \rangle - f^*(-A^T y) + \langle Ax, y \rangle - g^*(y) \\ &= -\langle Ax, y \rangle - f^*(-A^T y) + \langle Ax, y \rangle - g^*(y) \\ &= -f^*(-A^T y) - g^*(y) \end{aligned}" />
                <p>
                    これが任意の <InlineMath math="x" /> と <InlineMath math="y" /> で成り立つため、両辺の下限と上限を取ることで、主問題の最適値が双対問題の最適値以上であることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この結果から、双対問題を解くことで主問題の最適値の有用な下界が得られることがわかります。
            </p>

            <ContentBox type="example" title="Example 5.1-1">
                <p>
                    具体的な問題として、主問題 <InlineMath math="\min_x (x^2 + |x-1|)" /> を考える。ここでは <InlineMath math="f(x) = x^2" />, <InlineMath math="g(x) = |x-1|" />, <InlineMath math="A = 1" /> とする。
                </p>
                <p>
                    それぞれの共役関数は、
                </p>
                <BlockMath math="f^*(y) = \frac{1}{4}y^2" />
                <BlockMath math="g^*(y) = y + \delta_{[-1, 1]}(y)" />
                <p>
                    したがって、双対問題は以下のようになる：
                </p>
                <BlockMath math="\sup_{y \in [-1, 1]} \left\{ -\frac{1}{4}(-y)^2 - y \right\} = \sup_{y \in [-1, 1]} \left\{ -\frac{1}{4}y^2 - y \right\}" />
                <p>
                    この関数は <InlineMath math="y = -2" /> で最大値を取るが、制約 <InlineMath math="y \in [-1, 1]" /> より、最大値は <InlineMath math="y = -1" /> で達成され、その値は <InlineMath math="3/4" /> である。
                    一方、主問題の最適値も <InlineMath math="x = 1/2" /> で <InlineMath math="3/4" /> となり、弱双対（実際には強双対）が成立していることが確認できる。
                </p>
            </ContentBox>

            <p>
                最後に、主問題と双対問題の最適値の差を定義しておきます。
            </p>

            <ContentBox type="definition" title="Definition 5.1-2 (双対ギャップ)">
                <p>
                    <b>双対ギャップ（duality gap）</b>とは、主問題の最適値と双対問題の最適値の差のことである。
                </p>
                <BlockMath math="\text{Gap} = \inf_x \{f(x) + g(Ax)\} - \sup_y \{-f^*(-A^T y) - g^*(y)\}" />
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>フェンシェル双対問題は、主問題 <InlineMath math="\inf_x \{f(x) + g(Ax)\}" /> に対して共役関数を用いて定義される。</li>
                    <li>弱双対定理により、主問題の最適値は常に双対問題の最適値以上である。</li>
                    <li>両者の最適値の差を双対ギャップと呼ぶ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
