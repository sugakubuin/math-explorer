import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SurfaceIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「面積分」は、空間内に浮いた曲面に沿って場を集計する操作です。
                流体が面を通過する量（流量）や、曲面の全電荷を求める際など、多次元的な広がりのある現象を解析するために不可欠な概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲面のパラメータ表示</h2>

            <p>
                線積分で曲線を1変数 <InlineMath math="t" /> で表したのと同様に、曲面は2つの変数 <InlineMath math="(u, v)" /> で表します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (曲面のパラメータ表示)">
                <p>
                    <InlineMath math="uv" /> 平面の領域 <InlineMath math="D" /> から空間 <InlineMath math="\mathbb{R}^3" /> への写像
                    <BlockMath math="\mathbf{r}(u, v) = (x(u, v), y(u, v), z(u, v)) \quad ((u, v) \in D)" />
                    を<strong>パラメータ曲面</strong>と呼ぶ。
                    各点における接ベクトルを <InlineMath math="\mathbf{r}_u = \partial \mathbf{r}/\partial u" />, <InlineMath math="\mathbf{r}_v = \partial \mathbf{r}/\partial v" /> とすると、
                    面と直交する<strong>法線ベクトル</strong>はそれらの外積 <InlineMath math="\mathbf{N} = \mathbf{r}_u \times \mathbf{r}_v" /> で与えられる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-1 (代表的な曲面)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>球面（半径 $R$）</strong>： <InlineMath math="\mathbf{r}(\phi, \theta) = (R\sin\phi\cos\theta, R\sin\phi\sin\theta, R\cos\phi)" />
                    </li>
                    <li>
                        <strong>グラフ（$z = f(x,y)$）</strong>： <InlineMath math="\mathbf{r}(x, y) = (x, y, f(x, y))" />
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">面積分</h2>

            <p>
                曲面上の積分には、スカラー場の場合とベクトル場の場合の2種類があります。
            </p>

            <ContentBox type="definition" title="Definition 3.2-2 (面積分)">
                <p>
                    <strong>1. スカラー場の面積分</strong>：
                    <BlockMath math="\iint_S f\, dS = \iint_D f(\mathbf{r}(u,v)) |\mathbf{r}_u \times \mathbf{r}_v|\, du\, dv" />
                    ここで <InlineMath math="dS = |\mathbf{N}|\, du\, dv" /> を<strong>面積要素</strong>と呼ぶ。
                </p>
                <p>
                    <strong>2. ベクトル場の面積分（流束）</strong>：
                    <BlockMath math="\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \mathbf{F}(\mathbf{r}(u,v)) \cdot (\mathbf{r}_u \times \mathbf{r}_v)\, du\, dv" />
                    ここで <InlineMath math="d\mathbf{S} = \mathbf{N}\, du\, dv = \hat{\mathbf{n}}\, dS" /> （ <InlineMath math="\hat{\mathbf{n}}" /> は単位法線）をベクトル面積要素と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="物理的な意味（流束）">
                <p>
                    ベクトル場の面積分は、物理学では<strong>流束 (flux)</strong> と呼ばれます。
                    <InlineMath math="\mathbf{F}" /> が流速であれば、積分値はその面を単位時間に通過する流体の体積（流量）を表します。
                    「面の正味の向き」に対して、どれだけのベクトルが「突き抜けているか」を計算しています。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-2 (球面の面積分の計算)">
                <p>
                    半径 <InlineMath math="R" /> の球面 <InlineMath math="S" /> 上で、放射状のベクトル場 <InlineMath math="\mathbf{F} = \mathbf{r}" /> の流束を求めます。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-2">
                    <p>
                        1. 球面上の点は <InlineMath math="|\mathbf{r}| = R" /> であり、外向き単位法線は <InlineMath math="\hat{\mathbf{n}} = \mathbf{r}/R" /> です。
                    </p>
                    <p>
                        2. 被積分関数： <InlineMath math="\mathbf{F} \cdot \hat{\mathbf{n}} = \mathbf{r} \cdot (\mathbf{r}/R) = R^2/R = R" />
                    </p>
                    <p>
                        3. 積分実行：
                        <BlockMath math="\begin{aligned} \iint_S \mathbf{F} \cdot d\mathbf{S} &= \iint_S R\, dS = R \iint_S dS \\ &= R(4\pi R^2) = 4\pi R^3 \end{aligned}" />
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>面のパラメータ表示</strong>：2つの変数 <InlineMath math="u, v" /> を用いて曲面を記述する。</li>
                    <li><strong>法線ベクトル <InlineMath math="\mathbf{N}" /></strong>：接ベクトル <InlineMath math="\mathbf{r}_u \times \mathbf{r}_v" /> により求められる。</li>
                    <li><strong>スカラー面積分</strong>：面の面積や質量を求める（スカラ量の累積）。</li>
                    <li><strong>フラックス（流束）</strong>：面を貫く垂直成分の面積分。物理的に非常に重要な概念。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
