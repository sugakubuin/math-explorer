import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MoreauDecompositionTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で導入した近接作用素（proximal operator）は、凸関数の最小化や非平滑最適化において非常に重要な役割を果たします。本節では、近接作用素と共役関数の近接作用素との間に成り立つ美しい双対関係である<b>モローの分解定理（Moreau's decomposition theorem）</b>について解説します。この定理は、主空間における近接作用素の計算を、双対空間における近接作用素の計算に帰着させる強力なツールとなります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">モローの分解定理</h2>

            <p>
                モローの分解定理は、任意のベクトルを「関数 <InlineMath math="f" /> に対する近接作用素の出力」と「その共役関数 <InlineMath math="f^*" /> に対する近接作用素の出力」の和として分解できることを主張します。これは、部分空間への直交射影の分解の一般化と見なすことができます。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 7.2-1 (モローの分解)</span>}>
                <p>
                    閉真凸関数 <InlineMath math="f" /> に対して、任意の <InlineMath math="x \in \mathbb{R}^n" /> について以下の等式が成り立つ。
                </p>
                <BlockMath math="x = \mathrm{prox}_f(x) + \mathrm{prox}_{f^*}(x)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    フェンシェル-モロの定理（Theorem 4.4-1）より、<InlineMath math="f" /> が閉真凸関数であるため <InlineMath math="f^{**} = f" /> が成り立ちます。また、ヤング-フェンシェルの不等式の等号条件（Proposition 4.1-3）より、
                </p>
                <BlockMath math="y \in \partial f(p) \iff p \in \partial f^*(y)" />
                <p>
                    が成立します。
                </p>
                <p>
                    いま、<InlineMath math="p = \mathrm{prox}_f(x)" /> とおきます。近接作用素の特徴づけ（Proposition 7.1-2）より、これは次と同値です。
                </p>
                <BlockMath math="x - p \in \partial f(p)" />
                <p>
                    上記のヤング-フェンシェルの等号条件を用いると、これは次のように書き換えられます。
                </p>
                <BlockMath math="p \in \partial f^*(x - p)" />
                <p>
                    さらに、これを変形すると
                </p>
                <BlockMath math="x - (x - p) \in \partial f^*(x - p)" />
                <p>
                    となります。再び近接作用素の特徴づけを共役関数 <InlineMath math="f^*" /> に対して適用すると、これは次を意味します。
                </p>
                <BlockMath math="x - p = \mathrm{prox}_{f^*}(x)" />
                <p>
                    したがって、<InlineMath math="p" /> を元に戻すことで
                </p>
                <BlockMath math="x - \mathrm{prox}_f(x) = \mathrm{prox}_{f^*}(x)" />
                <p>
                    すなわち、
                </p>
                <BlockMath math="x = \mathrm{prox}_f(x) + \mathrm{prox}_{f^*}(x)" />
                <p>
                    が得られます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理から、関数 <InlineMath math="f" /> の近接作用素が計算しにくい場合でも、共役関数 <InlineMath math="f^*" /> の近接作用素が計算しやすければ、間接的に <InlineMath math="\mathrm{prox}_f(x)" /> を求めることができることが分かります。
            </p>

            <ContentBox type="example" title="Example 7.2-1">
                <p>
                    <InlineMath math="f = \|\cdot\|_1" /> （<InlineMath math="L_1" /> ノルム）の場合を考えます。このとき、その共役関数は <InlineMath math="f^* = \delta_{B_\infty}" /> （<InlineMath math="\ell_\infty" /> 単位球の指示関数）となります。
                </p>
                <p>
                    <InlineMath math="f" /> の近接作用素 <InlineMath math="\mathrm{prox}_f(x)" /> は軟閾値作用素（soft thresholding operator）であり、<InlineMath math="f^*" /> の近接作用素は <InlineMath math="B_\infty = [-1, 1]^n" /> への射影 <InlineMath math="\mathrm{proj}_{B_\infty}(x)" /> になります。
                </p>
                <p>
                    具体的に <InlineMath math="x = 3" /> （1次元の場合）で確認してみましょう。
                </p>
                <ul className="list-disc list-inside">
                    <li><InlineMath math="\mathrm{prox}_{\|\cdot\|_1}(3) = \max(0, 3 - 1) = 2" /></li>
                    <li><InlineMath math="\mathrm{proj}_{[-1, 1]}(3) = 1" /></li>
                </ul>
                <p>
                    これらを足し合わせると、
                </p>
                <BlockMath math="\mathrm{prox}_{\|\cdot\|_1}(3) + \mathrm{proj}_{[-1, 1]}(3) = 2 + 1 = 3 = x"
                />
                <p>
                    となり、モローの分解定理が成り立っていることが確認できます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">指示関数への特殊化</h2>

            <p>
                モローの分解定理を、凸集合の指示関数に対して適用してみましょう。これにより、射影とサポート関数の関係が明確になります。
            </p>

            <ContentBox type="theorem" title={<span>Corollary 7.2-1</span>}>
                <p>
                    <InlineMath math="f = \delta_C" /> （凸集合 <InlineMath math="C" /> の指示関数）のとき、<InlineMath math="\mathrm{prox}_f = \mathrm{proj}_C" /> であり、<InlineMath math="f^* = \sigma_C" /> （<InlineMath math="C" /> のサポート関数）である。したがって、
                </p>
                <BlockMath math="x = \mathrm{proj}_C(x) + \mathrm{prox}_{\sigma_C}(x)" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    モローの分解定理（Theorem 7.2-1）において、<InlineMath math="f = \delta_C" /> を代入します。前節で見たように、指示関数の近接作用素はその集合への射影に等しいため、<InlineMath math="\mathrm{prox}_{\delta_C}(x) = \mathrm{proj}_C(x)" /> となります。
                </p>
                <p>
                    また、指示関数の共役関数はサポート関数である（Proposition 4.2-1）ため、<InlineMath math="f^* = \sigma_C" /> となります。
                </p>
                <p>
                    これらを Theorem 7.2-1 の式に代入することで、結論が得られます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この系を用いると、ある集合への射影を計算することが、そのサポート関数の近接作用素を計算することと等価であることが分かります。
            </p>

            <ContentBox type="example" title="Example 7.2-2">
                <p>
                    <InlineMath math="C = \mathbb{R}^n_+" /> （非負直交象限）の場合を考えます。このとき、<InlineMath math="C" /> への射影は各成分ごとに次のように計算されます。
                </p>
                <BlockMath math="\mathrm{proj}_C(x)_i = \max(x_i, 0)" />
                <p>
                    一方、<InlineMath math="C" /> のサポート関数は <InlineMath math="\sigma_C(y) = \delta_{\mathbb{R}^n_-}(y)" /> （非正直交象限の指示関数）となります。したがって、<InlineMath math="\sigma_C" /> の近接作用素は <InlineMath math="\mathbb{R}^n_-" /> への射影となり、
                </p>
                <BlockMath math="\mathrm{prox}_{\sigma_C}(x)_i = \min(x_i, 0)" />
                <p>
                    となります。これらを足し合わせると、
                </p>
                <BlockMath math="\max(x_i, 0) + \min(x_i, 0) = x_i" />
                <p>
                    となり、分解が正しく成り立っていることが確認できます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="主空間と双対空間の同時計算">
                <p>
                    モローの分解定理は、凸集合の射影を共役空間の射影に関連づける強力な結果です。これにより、アルゴリズム設計において「主空間の最適化問題」と「双対空間の最適化問題」を同時に解き進めるようなアプローチが可能になります。特に、後で学ぶ ADMM などのアルゴリズムの理論的基礎として、主問題と双対問題の情報のやり取りを理解する上で欠かせない視点を提供します。
                </p>
            </ContentBox>

            {/* Summary */}
            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>モローの分解定理により、<InlineMath math="x = \mathrm{prox}_f(x) + \mathrm{prox}_{f^*}(x)" /> が成り立つ。</li>
                    <li>これにより、<InlineMath math="f" /> の近接作用素と <InlineMath math="f^*" /> の近接作用素の計算を相互に変換できる。</li>
                    <li>指示関数の場合、<InlineMath math="x = \mathrm{proj}_C(x) + \mathrm{prox}_{\sigma_C}(x)" /> となり、射影とサポート関数の近接作用素が結びつく。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
