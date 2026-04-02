import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SurfaceParametrization() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「面積分」を定義するためには、曲線の場合と同様に、曲面を数学的に（パラメータを用いて）記述する必要があります。
                曲面は 2 次元の広がりを持つため、2 つの独立なパラメータを用いて表現されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲面のパラメータ表示</h2>

            <p>
                空間内の曲面は、2 変数のベクトル値関数として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (曲面のパラメータ表示)">
                <p>
                    2 次元領域 <InlineMath math="D \subset \mathbb{R}^2" /> からの写像
                    <BlockMath math="\mathbf{r}(u, v) = (x(u, v), y(u, v), z(u, v)) \quad ((u, v) \in D)" />
                    を<strong>パラメータ曲面</strong>と呼ぶ。
                    <InlineMath math="\mathbf{r}" /> が <InlineMath math="C^1" /> 級であり、接ベクトル
                    <BlockMath math="\mathbf{r}_u = \frac{\partial \mathbf{r}}{\partial u}, \quad \mathbf{r}_v = \frac{\partial \mathbf{r}}{\partial v}" />
                    がすべての点で一次独立（すなわち <InlineMath math="\mathbf{r}_u \times \mathbf{r}_v \neq \mathbf{0}" />）であるとき、この曲線を<strong>滑らか (smooth) </strong>であるという。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1 (代表的な曲面)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>球面 (半径 R)</strong>：球座標を用いて表示されます。
                        <BlockMath math="\mathbf{r}(\phi, \theta) = (R\sin\phi\cos\theta, R\sin\phi\sin\theta, R\cos\phi)" />
                    </li>
                    <li>
                        <strong>円柱面 (半径 R)</strong>：円柱座標を用いて表示されます。
                        <BlockMath math="\mathbf{r}(\theta, z) = (R\cos\theta, R\sin\theta, z)" />
                    </li>
                    <li>
                        <strong>グラフ型曲面</strong>：高さが <InlineMath math="z = f(x, y)" /> で与えられる曲面。
                        <BlockMath math="\mathbf{r}(x, y) = (x, y, f(x, y))" />
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">接ベクトルと法線ベクトル</h2>

            <p>
                曲面上の各点において、パラメータの変化方向に対応する接線を考えることができます。
            </p>

            <ContentBox type="definition" title="Definition 5.1-2 (法線ベクトル)">
                <p>
                    曲面上の点における 2 本の接ベクトル <InlineMath math="\mathbf{r}_u, \mathbf{r}_v" /> の外積
                    <BlockMath math="\mathbf{N} = \mathbf{r}_u \times \mathbf{r}_v" />
                    を<strong>法線ベクトル (normal vector)</strong> と呼ぶ。
                    さらに、その単位ベクトルを<strong>単位法線ベクトル</strong>と呼び、<InlineMath math="\hat{\mathbf{n}}" /> と記す：
                    <BlockMath math="\hat{\mathbf{n}} = \frac{\mathbf{r}_u \times \mathbf{r}_v}{|\mathbf{r}_u \times \mathbf{r}_v|}" />
                </p>
            </ContentBox>

            <p>
                法線ベクトルは、曲面の向きを定義したり、後述する面積分（フラックス）を計算したりする際に極めて重要になります。
            </p>

            <ContentBox type="example" title="Example 5.1-2 (グラフ型曲面の法線ベクトル)">
                <p>
                    <InlineMath math="z = f(x, y)" /> の場合の法線ベクトルを計算します。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                    <p>
                        パラメータ表示 <InlineMath math="\mathbf{r}(x, y) = (x, y, f(x, y))" /> より、
                    </p>
                    <BlockMath math="\begin{aligned} \mathbf{r}_x &= (1, 0, f_x) \\ \mathbf{r}_y &= (0, 1, f_y) \end{aligned}" />
                    <p>
                        これらの外積をとると：
                    </p>
                    <BlockMath math="\begin{aligned} \mathbf{N} = \mathbf{r}_x \times \mathbf{r}_y &= \det \begin{pmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 0 & f_x \\ 0 & 1 & f_y \end{pmatrix} \\ &= (-f_x, -f_y, 1) \end{aligned}" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>パラメータ表示</strong>：2 つの数 ($u, v$) で空間上の点を指定する。</li>
                    <li><strong>接ベクトル</strong>：パラメータを動かしたときの曲面上の「進行方向」。</li>
                    <li><strong>法線ベクトル</strong>：2 本の接ベクトルに直交するベクトル。曲面の「表裏」を決定する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
