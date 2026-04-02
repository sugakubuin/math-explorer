import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GeneralOrthogonalCoordinates() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                円柱座標系や球座標系における演算子の公式は一見複雑ですが、実はこれらは「ラメ係数」を用いた一つの一般的な形へと集約されます。
                このセクションでは、任意の直交曲線座標系で成り立つ一般公式を提示し、これまでの結果がその特別なケースに過ぎないことを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">演算子の一般公式</h2>

            <p>
                直交曲線座標系 <InlineMath math="(u_1, u_2, u_3)" /> において、各座標のラメ係数を <InlineMath math="h_1, h_2, h_3" /> とします。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (直交曲線座標系の一般公式)">
                <p>
                    スカラー場 <InlineMath math="f" /> およびベクトル場 <InlineMath math="\mathbf{F} = F_1 \hat{\mathbf{e}}_1 + F_2 \hat{\mathbf{e}}_2 + F_3 \hat{\mathbf{e}}_3" /> に対して、以下の公式が成り立つ。
                </p>
                <div className="space-y-6 mt-6">
                    <div>
                        <strong>1. 勾配 (grad)</strong>
                        <BlockMath math="\nabla f = \frac{1}{h_1} \frac{\partial f}{\partial u_1} \hat{\mathbf{e}}_1 + \frac{1}{h_2} \frac{\partial f}{\partial u_2} \hat{\mathbf{e}}_2 + \frac{1}{h_3} \frac{\partial f}{\partial u_3} \hat{\mathbf{e}}_3" />
                    </div>
                    <div>
                        <strong>2. 発散 (div)</strong>
                        <BlockMath math="\begin{aligned}
                            \nabla \cdot \mathbf{F} = \frac{1}{h_1 h_2 h_3} \biggl[ \frac{\partial}{\partial u_1}(h_2 h_3 F_1) + &\frac{\partial}{\partial u_2}(h_3 h_1 F_2) \\ &+ \frac{\partial}{\partial u_3}(h_1 h_2 F_3) \biggl] 
                            \end{aligned}" />
                    </div>
                    <div>
                        <strong>3. 回転 (rot)</strong>
                        <BlockMath math="\nabla \times \mathbf{F} = \frac{1}{h_1 h_2 h_3} \begin{vmatrix} h_1 \hat{\mathbf{e}}_1 & h_2 \hat{\mathbf{e}}_2 & h_3 \hat{\mathbf{e}}_3 \\ \partial/\partial u_1 & \partial/\partial u_2 & \partial/\partial u_3 \\ h_1 F_1 & h_2 F_2 & h_3 F_3 \end{vmatrix}" />
                    </div>
                    <div>
                        <strong>4. ラプラシアン</strong>
                        <BlockMath math="\begin{aligned}
                            \Delta f = \frac{1}{h_1 h_2 h_3} \biggl[ \frac{\partial}{\partial u_1} \left( \frac{h_2 h_3}{h_1} \frac{\partial f}{\partial u_1} \right) + &\frac{\partial}{\partial u_2} \left( \frac{h_3 h_1}{h_2} \frac{\partial f}{\partial u_2} \right) \\ &+ \frac{\partial}{\partial u_3} \left( \frac{h_1 h_2}{h_3} \frac{\partial f}{\partial u_3} \right) \biggl] \end{aligned}" />
                    </div>
                </div>
            </ContentBox>

            <ContentBox type="proof" title="Proof (発散の一般公式の概略)">
                <p>
                    微小な直方体（体積 <InlineMath math="dV = h_1 h_2 h_3 du_1 du_2 du_3" /> ）を考え、その表面からのベクトルの流出量を計算する。
                    例えば <InlineMath math="u_1" /> 面における流出量の差は：
                    <BlockMath math="\begin{aligned}
                        \left[ F_1(u_1+du_1) (h_2 h_3)_{u_1+du_1} - F_1(u_1) (h_2 h_3)_{u_1} \right] & du_2 du_3 \\ \approx \frac{\partial}{\partial u_1}(h_2 h_3 F_1) & du_1 du_2 du_3
                        \end{aligned}" />
                    全表面の和を体積 <InlineMath math="dV" /> で割ることで、上記の発散の公式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">各座標系への適用</h2>

            <p>
                特定な座標系のラメ係数を代入することで、前節までの個別公式が得られます。
            </p>

            <ContentBox type="example" title="Example 2.4-1 (球座標系の発散の再導出)">
                <p>
                    球座標系 <InlineMath math="(r, \phi, \theta)" /> では、 <InlineMath math="h_1=1, h_2=r, h_3=r \sin \phi" /> でした。
                    これを発散の一般公式に代入すると：
                    <BlockMath math="\begin{aligned} 
                    &\text{div}\, \mathbf{F} \\ 
                    &= \frac{1}{(1)(r)(r \sin \phi)} \biggl[ \frac{\partial}{\partial r}(r^2 \sin \phi F_r) + \frac{\partial}{\partial \phi}(r \sin \phi F_\phi) \\ 
                    &\quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad + \frac{\partial}{\partial \theta}(r F_\theta) \biggr] \\ 
                    &= \frac{1}{r^2 \sin \phi} \left[ \sin \phi \frac{\partial}{\partial r}(r^2 F_r) + r \frac{\partial}{\partial \phi}(\sin \phi F_\phi) + r \frac{\partial F_\theta}{\partial \theta} \right] \\ 
                    &= \frac{1}{r^2} \frac{\partial (r^2 F_r)}{\partial r} + \frac{1}{r \sin \phi} \frac{\partial (\sin \phi F_\phi)}{\partial \phi} + \frac{1}{r \sin \phi} \frac{\partial F_\theta}{\partial \theta} 
                    \end{aligned}" />
                    §2.3 で提示した公式と完全に一致することがわかります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ラプラス方程式 ∇²f = 0 の解">
                <p>
                    ラプラシアンの一般公式は、物理現象を記述する微分方程式の「変数分離法」の出発点となります。
                    座標系の対称性とラメ係数の形によって、どの座標方向について解がどのような関数（ベッセル関数やルジャンドル多項式など）で表されるかが決まります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>一般公式</strong>：ラメ係数 <InlineMath math="h_i" /> を用いて、すべての直交曲線座標系での演算子を一律に表す。</li>
                    <li><strong>暗記のコツ</strong>：勾配は <InlineMath math="1/h_i" /> を掛け、発散・ラプラシアンは全面積や全積分を意識した <InlineMath math="1/h_1h_2h_3" /> を外へ出す。</li>
                    <li><strong>統一的理解</strong>：デカルト・円柱・球座標といった個別の公式を暗記するのではなく、ラメ係数さえ分かればすべて導ける、という視点を持つことが重要。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
