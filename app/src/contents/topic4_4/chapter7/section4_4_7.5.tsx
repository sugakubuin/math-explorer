import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ProximalPointAndForwardBackward() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、最適化問題における和の構造を活かしたアルゴリズムとして、近接点法と前向き後向き分割法について解説します。これらは、非平滑な凸関数の最適化において強力なツールとなります。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">近接点法</h2>

            <p>前節までで学んだ近接作用素を用いて、凸関数の最小化問題を解く基本的なアルゴリズムが近接点法です。</p>

            <ContentBox type="definition" title={<span>Definition 7.5-1 (<b>近接点法</b>)</span>}>
                <p>凸関数 <InlineMath math="f" /> に対する最小化問題を解くための反復法であり、初期値 <InlineMath math="x_0" /> と正のステップサイズ <InlineMath math="\alpha_k > 0" /> に対して、次のように点列を生成する手法を近接点法という。</p>
                <BlockMath math="x_{k+1} = \mathrm{prox}_{\alpha_k f}(x_k)" />
            </ContentBox>

            <ContentBox type="example" title="Example 7.5-1">
                <p><InlineMath math="f(x) = |x - 2|" /> に対して、初期値 <InlineMath math="x_0 = 0" />、ステップサイズ <InlineMath math="\alpha = 1" /> で近接点法を実行する。</p>
                <p>最初のステップの計算は以下のようになる。</p>
                <BlockMath math="x_1 = \mathrm{prox}_{|\cdot - 2|}(0)" />
                <p>軟閾値作用素を平行移動することで、この近接作用素は次のように計算できる。</p>
                <BlockMath math="\mathrm{prox}_{\lambda |\cdot - a|}(x) = a + \mathrm{sign}(x - a) \max(|x - a| - \lambda, 0)" />
                <p>したがって、</p>
                <BlockMath math="x_1 = 2 + \mathrm{sign}(0 - 2) \max(|0 - 2| - 1, 0) = 2 - 1 \cdot 1 = 1" />
                <p>次のステップでは、</p>
                <BlockMath math="\begin{aligned} x_2 &= \mathrm{prox}_{|\cdot - 2|}(1) \\ &= 2 + \mathrm{sign}(1 - 2) \max(|1 - 2| - 1, 0) \\ &= 2 + (-1) \cdot 0 = 2. \end{aligned}" />
                <p>となり、最小化点 <InlineMath math="x^* = 2" /> に到達することが確認できる。</p>
            </ContentBox>

            <p>この近接点法は、適切な条件下で最小化点へ収束することが保証されています。</p>

            <ContentBox type="theorem" title="Theorem 7.5-1">
                <p><InlineMath math="f" /> が閉真凸関数であり、最小化点が存在する（すなわち <InlineMath math="\arg\min f \neq \emptyset" />）ならば、近接点法によって生成される点列 <InlineMath math="x_k" /> は最小化点に収束する。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p><InlineMath math="x^*" /> を任意の最小化点とする。近接作用素の非拡大性（Theorem 7.1-1）より、</p>
                <BlockMath math="\|x_{k+1} - x^*\| = \|\mathrm{prox}_{\alpha_k f}(x_k) - \mathrm{prox}_{\alpha_k f}(x^*)\| \leq \|x_k - x^*\|" />
                <p>が成り立つ。ここで、フェルマの規則（Theorem 3.5-1）より <InlineMath math="0 \in \partial f(x^*)" /> であり、これは <InlineMath math="x^* = \mathrm{prox}_{\alpha_k f}(x^*)" /> と同値である。</p>
                <p>したがって、<InlineMath math="\|x_k - x^*\|" /> は単調非増加である。この点列は有界であるため収束部分列を持ち、極限点についてさらに詳細な解析を行うことで、点列全体がある最小化点に収束することが示される。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">前向き後向き分割法</h2>

            <p>次に、目的関数が滑らかな関数と非平滑な関数の和で表される場合を考えます。このような問題に対しては、前向き後向き分割法が有効です。</p>

            <ContentBox type="definition" title={<span>Definition 7.5-2 (<b>前向き後向き分割法</b>)</span>}>
                <p>最小化問題 <InlineMath math="\min f(x) + g(x)" />（ただし <InlineMath math="f" /> は微分可能、<InlineMath math="g" /> は非平滑な凸関数）に対して、次のように点列を更新する手法を前向き後向き分割法という。</p>
                <BlockMath math="x_{k+1} = \mathrm{prox}_{\alpha g}(x_k - \alpha \nabla f(x_k))"
                />
                <p>ここで、<InlineMath math="\alpha > 0" /> はステップサイズである。</p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.5-2">
                <p>LASSO 問題 <InlineMath math="\min \frac{1}{2}\|Ax - b\|^2 + \lambda\|x\|_1" /> に前向き後向き分割法を適用する。</p>
                <p>ここで、<InlineMath math="f(x) = \frac{1}{2}\|Ax - b\|^2" />、<InlineMath math="g(x) = \lambda\|x\|_1" /> とする。<InlineMath math="f" /> の勾配は <InlineMath math="\nabla f(x) = A^T(Ax - b)" /> であり、<InlineMath math="g" /> の近接作用素は成分ごとの軟閾値作用素となる。</p>
                <p>したがって、更新則は次のようになる。</p>
                <BlockMath math="x_{k+1} = \mathrm{prox}_{\alpha\lambda\|\cdot\|_1}(x_k - \alpha A^T(Ax_k - b))" />
                <p>これは <b>ISTA</b>（Iterative Shrinkage-Thresholding Algorithm）として広く知られているアルゴリズムである。</p>
            </ContentBox>

            <p>この手法の収束性についても、適切な条件下で保証されます。</p>

            <ContentBox type="theorem" title="Theorem 7.5-2">
                <p><InlineMath math="f" /> が <InlineMath math="L" />-リプシッツ連続な勾配を持つ凸関数、<InlineMath math="g" /> が閉真凸関数のとき、ステップサイズが <InlineMath math="0 < \alpha < 2/L" /> であれば、前向き後向き分割法で生成される点列は最小化点に収束する。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p><InlineMath math="x_{k+1}" /> の定義を作用素 <InlineMath math="T = \mathrm{prox}_{\alpha g} \circ (I - \alpha \nabla f)" /> の不動点反復 <InlineMath math="x_{k+1} = T(x_k)" /> と見なす。<InlineMath math="T" /> の非拡大性を確認する。</p>
                <p><InlineMath math="f" /> の勾配が <InlineMath math="L" />-リプシッツ連続であることから、<InlineMath math="\nabla f" /> は <InlineMath math="1/L" />-共単調（cocoercive）である。この性質を用いると、<InlineMath math="0 < \alpha < 2/L" /> のとき <InlineMath math="I - \alpha \nabla f" /> は非拡大作用素となる。</p>
                <p>近接作用素 <InlineMath math="\mathrm{prox}_{\alpha g}" /> も非拡大写像であるため、二つの非拡大作用素の合成である <InlineMath math="T" /> も非拡大写像となる。不動点定理とフェルマの規則を組み合わせることで、点列が最小化点に収束することが示される。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="加速法について">
                <p>前向き後向き分割法の基本的な収束速度は <InlineMath math="O(1/k)" /> ですが、ネステロフの加速法を取り入れた <b>FISTA</b> (Fast Iterative Shrinkage-Thresholding Algorithm) と呼ばれるアルゴリズムを使用することで、収束速度を <InlineMath math="O(1/k^2)" /> に向上させることができます。これは最適化理論における重要な結果の一つです。</p>
            </ContentBox>

            <ContentBox type="note" title="§7.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>近接点法は <InlineMath math="x_{k+1} = \mathrm{prox}_{\alpha_k f}(x_k)" /> により最小化問題を解く手法である。</li>
                    <li>前向き後向き分割法は滑らかな関数と非平滑な関数の和の最小化に対して、勾配降下と近接作用素を組み合わせるアルゴリズムである。</li>
                    <li>両手法ともに近接作用素の非拡大性が収束証明の鍵となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
