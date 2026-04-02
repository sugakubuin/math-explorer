import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CylindricalCoordinates() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「円柱座標系」は、直交座標系に厚み（ <InlineMath math="z" /> 軸方向）を持たせた、3次元空間で最もよく使われる曲線座標系の一つです。
                円管内の流れや回転する物体の運動など、軸対称な問題において絶大な威力を発揮します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">円柱座標の定義</h2>

            <p>
                空間の点 <InlineMath math="(x, y, z)" /> を、 <InlineMath math="z" /> 軸からの距離 <InlineMath math="r" /> 、 <InlineMath math="z" /> 軸周りの角度 <InlineMath math="\theta" /> 、および高さ <InlineMath math="z" /> で指定します。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (円柱座標系)">
                <p>
                    直交座標 <InlineMath math="(x, y, z)" /> と実数の組 <InlineMath math="(r, \theta, z)" /> の関係が以下で与えられるとき、これを<strong>円柱座標系 (cylindrical coordinates)</strong> という。
                    <BlockMath math="\begin{cases} x = r \cos \theta \\ y = r \sin \theta \\ z = z \end{cases} \quad (r \ge 0, \; 0 \le \theta < 2\pi)" />
                </p>
            </ContentBox>

            <p>
                各点における正規化された基底ベクトル（物理的基底）は次のようになります：
                <BlockMath math="\begin{cases} \hat{\mathbf{e}}_r = (\cos \theta, \sin \theta, 0) \\ \hat{\mathbf{e}}_\theta = (-\sin \theta, \cos \theta, 0) \\ \hat{\mathbf{e}}_z = (0, 0, 1) \end{cases}" />
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラメ係数と微分演算子</h2>

            <p>
                円柱座標系のラメ係数を計算し、それに基づいて諸演算子の公式を導出します。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-1 (円柱座標系のラメ係数)">
                <p>
                    円柱座標系 <InlineMath math="(r, \theta, z)" /> のラメ係数は以下の通りである：
                    <BlockMath math="h_r = 1, \quad h_\theta = r, \quad h_z = 1" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    位置ベクトル <InlineMath math="\mathbf{r} = (r \cos \theta, r \sin \theta, z)" /> を各変数で微分する。
                    <ul className="list-disc list-inside space-y-2">
                        <li><InlineMath math="\partial_r \mathbf{r} = (\cos \theta, \sin \theta, 0)" /> より、 <InlineMath math="h_r = |\partial_r \mathbf{r}| = 1" /></li>
                        <li><InlineMath math="\partial_\theta \mathbf{r} = (-r \sin \theta, r \cos \theta, 0)" /> より、 <InlineMath math="h_\theta = |\partial_\theta \mathbf{r}| = \sqrt{r^2(\sin^2\theta + \cos^2\theta)} = r" /></li>
                        <li><InlineMath math="\partial_z \mathbf{r} = (0, 0, 1)" /> より、 <InlineMath math="h_z = |\partial_z \mathbf{r}| = 1" /></li>
                    </ul>
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                これらのラメ係数を用いて、一般公式（§2.4参照）から具体的な演算子の形が導かれます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-1 (円柱座標での諸演算)">
                <p>
                    スカラー場 <InlineMath math="f" /> とベクトル場 <InlineMath math="\mathbf{F} = F_r \hat{\mathbf{e}}_r + F_\theta \hat{\mathbf{e}}_\theta + F_z \hat{\mathbf{e}}_z" /> に対して：
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <strong>勾配 (grad)</strong>:
                        <BlockMath math="\nabla f = \frac{\partial f}{\partial r} \hat{\mathbf{e}}_r + \frac{1}{r} \frac{\partial f}{\partial \theta} \hat{\mathbf{e}}_\theta + \frac{\partial f}{\partial z} \hat{\mathbf{e}}_z" />
                    </li>
                    <li>
                        <strong>発散 (div)</strong>:
                        <BlockMath math="\text{div}\, \mathbf{F} = \frac{1}{r} \frac{\partial (r F_r)}{\partial r} + \frac{1}{r} \frac{\partial F_\theta}{\partial \theta} + \frac{\partial F_z}{\partial z}" />
                    </li>
                    <li>
                        <strong>回転 (rot)</strong>:
                        <BlockMath math="\begin{aligned}
                            \text{rot}\, \mathbf{F} &= \left( \frac{1}{r} \frac{\partial F_z}{\partial \theta} - \frac{\partial F_\theta}{\partial z} \right) \hat{\mathbf{e}}_r + \left( \frac{\partial F_r}{\partial z} - \frac{\partial F_z}{\partial r} \right) \hat{\mathbf{e}}_\theta \\
                            &\quad + \frac{1}{r} \left( \frac{\partial (r F_\theta)}{\partial r} - \frac{\partial F_r}{\partial \theta} \right) \hat{\mathbf{e}}_z
                        \end{aligned}" />
                    </li>
                    <li>
                        <strong>ラプラシアン</strong>:
                        <BlockMath math="\Delta f = \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial f}{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2 f}{\partial \theta^2} + \frac{\partial^2 f}{\partial z^2}" />
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算の注意点</h2>

            <ContentBox type="remark" title="基底ベクトルの微分">
                <p>
                    直交座標系と異なり、曲線座標系では<strong>基底ベクトル自体が位置によって変化する</strong>ことに注意が必要です。
                    例えば、発散の計算において以下の項が現れます：
                    <BlockMath math="\text{div}(F_r \hat{\mathbf{e}}_r) = (\nabla F_r) \cdot \hat{\mathbf{e}}_r + F_r (\text{div}\, \hat{\mathbf{e}}_r)" />
                    ここで <InlineMath math="\text{div}\, \hat{\mathbf{e}}_r = 1/r" /> と計算されるため、発散の公式に <InlineMath math="F_r/r" /> という項が加わることになります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-1 (円柱対称な場の発散)">
                <p>
                    <InlineMath math="z" /> 軸上の点電荷から放射状に広がる電場（2次元的アナロジー） <InlineMath math="\mathbf{E} = (1/r)\hat{\mathbf{e}}_r" /> を考えます。
                    <BlockMath math="\text{div}\, \mathbf{E} = \frac{1}{r} \frac{\partial}{\partial r} \left( r \cdot \frac{1}{r} \right) = \frac{1}{r} \frac{\partial}{\partial r}(1) = 0" />
                    <InlineMath math="r \neq 0" /> において、この場の発散は 0 になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>定義</strong>：平面極座標に高さ <InlineMath math="z" /> を加えたもの。</li>
                    <li><strong>ラメ係数</strong>： <InlineMath math="(1, r, 1)" /> 。円周方向の変化率に距離 <InlineMath math="r" /> が掛かることが重要。</li>
                    <li><strong>演算子</strong>：ラメ係数の逆数が係数として現れる。</li>
                    <li><strong>基底の変化</strong>：座標によって基底ベクトルの向きが変わるため、ベクトルの微分計算には注意を要する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
