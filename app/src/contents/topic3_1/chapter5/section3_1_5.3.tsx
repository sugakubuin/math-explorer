import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ScalarSurfaceIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「スカラー場の面積分」は、曲面上の各点に分布するスカラー量（密度、温度、電位など）を、曲面全体にわたって累積する操作です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定義</h2>

            <p>
                面積分は、曲面のパラメータ表示と前節で学んだ面積要素を用いて定義されます。
            </p>

            <ContentBox type="definition" title="Definition 5.3-1 (スカラー場の面積分)">
                <p>
                    領域 <InlineMath math="D" /> 上でパラメータ表示された曲面 <InlineMath math="S" /> 上の連続なスカラー場 <InlineMath math="f(x, y, z)" /> に対して、<strong>面積分 (surface integral)</strong> は次のように定義される：
                    <BlockMath math="\iint_S f\, dS = \iint_D f(\mathbf{r}(u, v)) |\mathbf{r}_u \times \mathbf{r}_v|\, du\, dv" />
                </p>
            </ContentBox>

            <ContentBox type="remark" title="物理的な解釈">
                <p>
                    <InlineMath math="f(x, y, z)" /> が曲面の単位面積あたりの質量密度 <InlineMath math="\sigma" /> であるとき、この面積分は曲面の<strong>全質量</strong> <InlineMath math="M" /> を与えます。
                    また、 <InlineMath math="f = 1" /> のときは、積分の値はそのまま曲面の面積に一致します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 5.3-1 (球面上の関数の積分)">
                <p>
                    半径 <InlineMath math="R" /> の球面 <InlineMath math="S: x^2 + y^2 + z^2 = R^2" /> 上で、関数 <InlineMath math="f(x, y, z) = z^2" /> を積分します。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-4">
                    <p>
                        パラメータ表示 <InlineMath math="\mathbf{r}(\phi, \theta)" /> を用いると、球面上の <InlineMath math="z" /> は <InlineMath math="z = R\cos\phi" /> であり、面積要素は <InlineMath math="dS = R^2\sin\phi\, d\phi\, d\theta" /> です。
                    </p>
                    <BlockMath math="\begin{aligned} \iint_S z^2\, dS &= \int_0^\pi \int_0^{2\pi} (R\cos\phi)^2 \cdot R^2\sin\phi\, d\theta\, d\phi \\ &= 2\pi R^4 \int_0^\pi \cos^2\phi \sin\phi\, d\phi \\ &= 2\pi R^4 \left[ -\frac{1}{3}\cos^3 \phi \right]_0^\pi \\ &= 2\pi R^4 \left[ -\frac{1}{3}(-1) - \left( -\frac{1}{3}(1) \right) \right] = \frac{4\pi R^4}{3} \end{aligned}" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>核心</strong>：曲面上の分布 <InlineMath math="f" /> に面積要素 <InlineMath math="dS" /> （歪みの補正係数）を掛けて通常の二重積分に持ち込む。</li>
                    <li><strong>物理的意義</strong>：曲面の総質量、重心、慣性モーメントなどの導出。</li>
                    <li><strong>注意点</strong>：パラメータ表示によって面積要素の形が変わるため、常に法線ベクトルの大きさを正しく計算する必要がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
