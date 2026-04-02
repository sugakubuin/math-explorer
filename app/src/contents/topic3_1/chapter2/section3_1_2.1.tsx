import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CurvilinearCoordinatesBasics() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでは主に「直交デカルト座標系」を用いてきましたが、物理的な現象によっては、円柱状の对称性や球状の对称性を持つものも多く存在します。
                そのような場合、直和座標系よりも「曲線座標系」を用いるほうが、現象の本質をより簡潔に記述できることがあります。
                このセクションでは、一般的な曲線座標系を扱うための数学的な準備を行います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲線座標系の定義</h2>

            <p>
                空間の各点を3つの実数 <InlineMath math="(u_1, u_2, u_3)" /> で指定する方法を考えます。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (曲線座標系)">
                <p>
                    直交座標 <InlineMath math="(x, y, z)" /> を別の3つの実数 <InlineMath math="(u_1, u_2, u_3)" /> で表す全単射
                    <BlockMath math="\mathbf{r}(u_1, u_2, u_3) = (x(u_1, u_2, u_3), y(u_1, u_2, u_3), z(u_1, u_2, u_3))" />
                    が与えられているとき、 <InlineMath math="(u_1, u_2, u_3)" /> を<strong>曲線座標系 (curvilinear coordinate system)</strong> と呼ぶ。
                    ある1つの座標のみを変化させたときに描かれる直線を、その座標の<strong>座標曲線</strong>という。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-1 (平面極座標)">
                <p>
                    2次元の場合、最もなじみ深い曲線座標系は平面極座標 <InlineMath math="(r, \theta)" /> です。
                    <BlockMath math="\mathbf{r}(r, \theta) = (r \cos \theta, r \sin \theta)" />
                    このとき、 <InlineMath math="\theta = \text{const.}" /> の座標曲線は原点から出る半直線であり、
                    <InlineMath math="r = \text{const.}" /> の座標曲線は同心円となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">局所基底ベクトルとラメ係数</h2>

            <p>
                曲線座標系において、各点での「方向」を定義するために、座標曲線に沿った接ベクトルを考えます。
            </p>

            <ContentBox type="definition" title="Definition 2.1-2 (自然基底ベクトルとラメ係数)">
                <p>
                    座標 <InlineMath math="u_i" /> の変化に伴う位置ベクトルの変化率を、<strong>自然基底ベクトル</strong>と呼ぶ：
                    <BlockMath math="\mathbf{e}_i^* = \frac{\partial \mathbf{r}}{\partial u_i}" />
                    また、その大きさ <InlineMath math="h_i = |\mathbf{e}_i^*|" /> を<strong>ラメ係数 (Lamé coefficients)</strong> または計量係数と呼ぶ。
                    自然基底を正規化して得られる長さ 1 の基底を<strong>正規化された基底</strong>という：
                    <BlockMath math="\hat{\mathbf{e}}_i = \frac{\mathbf{e}_i^*}{|\mathbf{e}_i^*|} = \frac{1}{h_i} \frac{\partial \mathbf{r}}{\partial u_i}" />
                </p>
            </ContentBox>

            <p>
                ラメ係数は、座標 <InlineMath math="u_i" /> が微小量 <InlineMath math="du_i" /> だけ変化したときに、実際の空間内でどれだけの距離が稼げるかを示す「スケール因子」の役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直交曲線座標系</h2>

            <p>
                多くの実用的な座標系では、各点での基底ベクトルが互いに直交しています。
            </p>

            <ContentBox type="definition" title="Definition 2.1-3 (直交曲線座標系)">
                <p>
                    すべての点において、異なる基底ベクトルが互いに直交する、すなわち
                    <BlockMath math="\frac{\partial\mathbf{r}}{\partial u_i} \cdot \frac{\partial\mathbf{r}}{\partial u_j} = 0 \quad (i \neq j)" />
                    が成立する座標系を<strong>直交曲線座標系 (orthogonal curvilinear coordinates)</strong> という。
                </p>
            </ContentBox>

            <p>
                直交系においては、微小な弧長要素 <InlineMath math="ds" /> は次のように簡単な形で表されます：
                <BlockMath math="ds^2 = |d\mathbf{r}|^2 = h_1^2 du_1^2 + h_2^2 du_2^2 + h_3^2 du_3^2" />
                これがベクトル解析の諸演算を曲線座標で行う上での基礎となります。
            </p>

            <ContentBox type="example" title="Example 2.1-2 (平面極座標のラメ係数)">
                <p>
                    座標変換 <InlineMath math="\mathbf{r} = (r \cos \theta, r \sin \theta)" /> に対して自然基底を計算すると：
                    <BlockMath math="\begin{aligned} \mathbf{e}_r^* &= \frac{\partial \mathbf{r}}{\partial r} = (\cos \theta, \sin \theta) \\ \mathbf{e}_\theta^* &= \frac{\partial \mathbf{r}}{\partial \theta} = (-r \sin \theta, r \cos \theta) \end{aligned}" />
                    よってラメ係数は：
                    <BlockMath math="\begin{aligned} h_r &= \sqrt{\cos^2 \theta + \sin^2 \theta} = 1 \\ h_\theta &= \sqrt{(-r \sin \theta)^2 + (r \cos \theta)^2} = r \end{aligned}" />
                    これにより、弧長要素は <InlineMath math="ds^2 = dr^2 + r^2 d\theta^2" /> となることがわかります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>曲線座標系</strong>：実数の組で空間の点を一意に指定する枠組み。</li>
                    <li><strong>自然基底</strong>：座標の変化率ベクトル。その大きさが<strong>ラメ係数</strong>。</li>
                    <li><strong>直交系</strong>：基底が常に直交する座標系（弧長計算が容易）。</li>
                    <li><strong>ラメ係数の役割</strong>：微小な数値の変化を実際の距離へと変換するスケーリング。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
