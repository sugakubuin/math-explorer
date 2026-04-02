import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PhysicalApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ガウスの発散定理は、物理学のあらゆる分野、特に流体力学や電磁気学において、基本的な法則を記述するための不可欠な道具です。
                ここでは、定理がどのように物理法則の「積分形」と「微分形」を結びつけているかを見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">流体力学：連続の方程式（質量保存則）</h2>

            <p>
                流体の質量が勝手に消えたり増えたりしないという「質量保存則」は、発散定理を用いることで美しい方程式にまとめられます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (連続の方程式)">
                <p>
                    流体の密度を <InlineMath math="\rho(x, y, z, t)" />、流速ベクトルを <InlineMath math="\mathbf{v}(x, y, z, t)" /> とすると、次の式が成り立つ：
                    <BlockMath math="\frac{\partial \rho}{\partial t} + \text{div}(\rho \mathbf{v}) = 0" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    空間内に固定された任意の有界領域 <InlineMath math="V" /> を考える。この領域内の質量の総和 <InlineMath math="M" /> は、
                    <BlockMath math="M = \iiint_V \rho\, dV" />
                    である。領域内の質量の時間変化率は、境界表面 <InlineMath math="S = \partial V" /> を通って出入りする質量の流量（フラックス）の負に等しい。
                    <BlockMath math="\frac{dM}{dt} = - \oiint_S (\rho \mathbf{v}) \cdot \mathbf{n}\, dS" />
                    ガウスの発散定理を右辺に適用すると、
                    <BlockMath math="\frac{d}{dt} \iiint_V \rho\, dV = - \iiint_V \text{div}(\rho \mathbf{v})\, dV" />
                    領域 <InlineMath math="V" /> は時間に依存しないため、左辺の微分を積分記号内に入れることができ、
                    <BlockMath math="\iiint_V \left( \frac{\partial \rho}{\partial t} + \text{div}(\rho \mathbf{v}) \right) dV = 0" />
                    が得られる。これが任意の領域 <InlineMath math="V" /> で成り立つためには、被積分関数が常に 0 でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">電磁気学：静電場のガウスの法則</h2>

            <p>
                電磁気学における「マクスウェル方程式」の第一式も、発散定理によってその本質が理解されます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-2 (ガウスの法則)">
                <p>
                    電場を <InlineMath math="\mathbf{E}" />、電荷密度を <InlineMath math="\rho_e" /> とすると、閉曲面 <InlineMath math="S" /> を通る電場のフラックスについて：
                    <BlockMath math="\oiint_S \mathbf{E} \cdot d\mathbf{S} = \frac{Q_{\text{enclosed}}}{\varepsilon_0} \quad \left( Q_{\text{enclosed}} = \iiint_V \rho_e\, dV \right)" />
                    微分形では、次の通り記述される：
                    <BlockMath math="\text{div}\, \mathbf{E} = \frac{\rho_e}{\varepsilon_0}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    積分形のガウスの法則の左辺にガウスの発散定理を適用すると、
                    <BlockMath math="\iint_S \mathbf{E} \cdot d\mathbf{S} = \iiint_V \text{div}\, \mathbf{E}\, dV" />
                    右辺は電荷密度の積分であるため、
                    <BlockMath math="\iiint_V \text{div}\, \mathbf{E}\, dV = \iiint_V \frac{\rho_e}{\varepsilon_0} dV" />
                    これが任意の領域 <InlineMath math="V" /> について成り立つことから、各点において
                    <BlockMath math="\text{div}\, \mathbf{E} = \frac{\rho_e}{\varepsilon_0}" />
                    が成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-1 (点電荷がつくる電場)">
                <p>
                    原点の点電荷 <InlineMath math="Q" /> がつくる電場 <InlineMath math="\mathbf{E} = \frac{Q}{4\pi\varepsilon_0} \frac{\mathbf{r}}{r^3}" /> について考えます。
                    この電場の発散は、原点以外の点では 0 になります。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                    <p>
                        半径 <InlineMath math="r" /> の球面上のフラックスを計算すると、 §6.1 の例と同様に：
                    </p>
                    <BlockMath math="\oiint_S \mathbf{E} \cdot d\mathbf{S} = \frac{Q}{4\pi\varepsilon_0} \cdot 4\pi = \frac{Q}{\varepsilon_0}" />
                    <p>
                        となり、点電荷を囲む任意の面で「湧き出した電場」の総量が保存されていることが分かります。
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>連続の方程式</strong>：質量やエネルギーの保存を記述するすべての基本。</li>
                    <li><strong>ガウスの法則</strong>：電荷が電場の「源（湧き出し）」であることを数学的に表現。</li>
                    <li><strong>核心</strong>：発散定理は「局所的なソース（微分）」と「空間的な影響（積分）」を結ぶ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
