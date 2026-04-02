import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SphericalCoordinates() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「球座標系」は、空間の点を中心からの距離と2つの角度で表す座標系です。
                地球の重力場や原子内の電子の運動など、点対称な広がりを持つ問題を扱う上で、物理学においてもっとも重要な座標系の一つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">球座標の定義</h2>

            <p>
                本講義では、物理学で標準的な記法を用います。
                原点からの距離 <InlineMath math="r" /> 、 <InlineMath math="z" /> 軸正方向からの角（天頂角） <InlineMath math="\phi" /> 、 <InlineMath math="x" /> 軸からの角（方位角） <InlineMath math="\theta" /> を使います。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (球座標系)">
                <p>
                    直交座標 <InlineMath math="(x, y, z)" /> と実数の組 <InlineMath math="(r, \phi, \theta)" /> の関係が以下で与えられるとき、これを<strong>球座標系 (spherical coordinates)</strong> という。
                    <BlockMath math="\begin{cases} x = r \sin \phi \cos \theta \\ y = r \sin \phi \sin \theta \\ z = r \cos \phi \end{cases} \quad (r \ge 0, \; 0 \le \phi \le \pi, \; 0 \le \theta < 2\pi)" />
                </p>
            </ContentBox>

            <p>
                各点における正規化された基底ベクトルは次のようになります：
                <BlockMath math="\begin{cases} \hat{\mathbf{e}}_r = (\sin \phi \cos \theta, \sin \phi \sin \theta, \cos \phi) \\ \hat{\mathbf{e}}_\phi = (\cos \phi \cos \theta, \cos \phi \sin \theta, -\sin \phi) \\ \hat{\mathbf{e}}_\theta = (-\sin \theta, \cos \theta, 0) \end{cases}" />
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラメ係数と微分演算子</h2>

            <p>
                球座標系では、2つの角度変数に対してラメ係数が距離 <InlineMath math="r" /> に依存します。
            </p>

            <ContentBox type="proposition" title="Proposition 2.3-1 (球座標系のラメ係数)">
                <p>
                    球座標系 <InlineMath math="(r, \phi, \theta)" /> のラメ係数は以下の通りである：
                    <BlockMath math="h_r = 1, \quad h_\phi = r, \quad h_\theta = r \sin \phi" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    位置ベクトル <InlineMath math="\mathbf{r} = (r \sin \phi \cos \theta, r \sin \phi \sin \theta, r \cos \phi)" /> を各変数で微分する。
                    <ul className="list-disc list-inside space-y-2">
                        <li><InlineMath math="\partial_r \mathbf{r} = (\sin \phi \cos \theta, \sin \phi \sin \theta, \cos \phi)" /> より、 <InlineMath math="h_r = 1" /></li>
                        <li><InlineMath math="\partial_\phi \mathbf{r} = (r \cos \phi \cos \theta, r \cos \phi \sin \theta, -r \sin \phi)" /> より、 <InlineMath math="h_\phi = r \sqrt{\cos^2\phi(\cos^2\theta + \sin^2\theta) + \sin^2\phi} = r" /></li>
                        <li><InlineMath math="\partial_\theta \mathbf{r} = (-r \sin \phi \sin \theta, r \sin \phi \cos \theta, 0)" /> より、 <InlineMath math="h_\theta = r \sin \phi \sqrt{\sin^2\theta + \cos^2\theta} = r \sin \phi" /></li>
                    </ul>
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.3-1 (球座標での諸演算)">
                <p>
                    スカラー場 <InlineMath math="f" /> とベクトル場 <InlineMath math="\mathbf{F} = F_r \hat{\mathbf{e}}_r + F_\phi \hat{\mathbf{e}}_\phi + F_\theta \hat{\mathbf{e}}_\theta" /> に対して：
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <strong>勾配 (grad)</strong>:
                        <BlockMath math="\nabla f = \frac{\partial f}{\partial r} \hat{\mathbf{e}}_r + \frac{1}{r} \frac{\partial f}{\partial \phi} \hat{\mathbf{e}}_\phi + \frac{1}{r \sin \phi} \frac{\partial f}{\partial \theta} \hat{\mathbf{e}}_\theta" />
                    </li>
                    <li>
                        <strong>発散 (div)</strong>:
                        <BlockMath math="\text{div}\, \mathbf{F} = \frac{1}{r^2} \frac{\partial (r^2 F_r)}{\partial r} + \frac{1}{r \sin \phi} \frac{\partial (\sin \phi F_\phi)}{\partial \phi} + \frac{1}{r \sin \phi} \frac{\partial F_\theta}{\partial \theta}" />
                    </li>
                    <li>
                        <strong>回転 (rot)</strong>:
                        <BlockMath math="\begin{aligned} \text{rot}\, \mathbf{F} &= \frac{1}{r \sin \phi} \left( \frac{\partial (\sin \phi F_{\theta})}{\partial \phi} - \frac{\partial F_\phi}{\partial \theta} \right) \hat{\mathbf{e}}_r \\ &\quad + \frac{1}{r} \left( \frac{1}{\sin \phi} \frac{\partial F_r}{\partial \theta} - \frac{\partial (r F_\theta)}{\partial r} \right) \hat{\mathbf{e}}_\phi \\ &\quad + \frac{1}{r} \left( \frac{\partial (r F_\phi)}{\partial r} - \frac{\partial F_r}{\partial \phi} \right) \hat{\mathbf{e}}_\theta \end{aligned}" />
                    </li>
                    <li>
                        <strong>ラプラシアン</strong>:
                        <BlockMath math="\begin{aligned}
                            \Delta f &= \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial f}{\partial r} \right) + \frac{1}{r^2 \sin \phi} \frac{\partial}{\partial \phi} \left( \sin \phi \frac{\partial f}{\partial \phi} \right) \\ &\quad + \frac{1}{r^2 \sin^2 \phi} \frac{\partial^2 f}{\partial \theta^2}
                            \end{aligned}" />
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">球対称な場の特性</h2>

            <p>
                すべての変数が中心からの距離 <InlineMath math="r" /> のみに依存する場合、公式は劇的に簡略化されます。
            </p>

            <ContentBox type="example" title="Example 2.3-1 (球対称なラプラシアン)">
                <p>
                    <InlineMath math="f(r, \phi, \theta) = f(r)" /> のとき、ラプラシアンは次のように書けます：
                    <BlockMath math="\Delta f = \frac{1}{r^2} \frac{d}{dr} \left( r^2 \frac{df}{dr} \right) = \frac{d^2 f}{dr^2} + \frac{2}{r} \frac{df}{dr}" />
                    例えばラプラス方程式 <InlineMath math="\Delta f = 0" /> を解くと、 <InlineMath math="f = A + B/r" /> という形が得られます。
                    これは点電荷のポテンシャルが <InlineMath math="1/r" /> に比例することに対応しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>変数</strong>：距離 <InlineMath math="r" /> 、天頂角 <InlineMath math="\phi" /> 、方位角 <InlineMath math="\theta" /> 。</li>
                    <li><strong>ラメ係数</strong>： <InlineMath math="(1, r, r \sin \phi)" /> 。北極付近（ <InlineMath math="\phi \to 0" /> ）で方位角方向の距離が縮む性質を反映しています。</li>
                    <li><strong>演算子</strong>：公式は複雑ですが、 <InlineMath math="r" /> と <InlineMath math="\sin \phi" /> を適切に微分の中に含める形になっています。</li>
                    <li><strong>対称性</strong>：物理的に対称な系では、角度依存項が消え、扱いが非常に容易になります。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
