import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SurfaceAreaElement() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                曲面の一部を拡大してみると、それは平面で近似できるはずです。
                「曲面積要素」とは、曲面上の微小な領域が占める面積を表す量であり、積分の際の「重み」となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">面積要素の導出</h2>

            <p>
                パラメータ空間での微小長方形 <InlineMath math="du, dv" /> が、曲面上でどのような面積に対応するかを考えます。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 (面積要素)">
                <p>
                    パラメータ曲面 <InlineMath math="\mathbf{r}(u, v)" /> に対して、<strong>曲面積要素 (surface area element)</strong> <InlineMath math="dS" /> は次のように定義される：
                    <BlockMath math="dS = |\mathbf{r}_u \times \mathbf{r}_v|\, du\, dv" />
                    ここで、 <InlineMath math="\mathbf{r}_u \times \mathbf{r}_v = \mathbf{N}" /> は前節で定義した法線ベクトルである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="幾何学的な意味">
                <p>
                    曲面上の微小な 2 本の接ベクトル <InlineMath math="\mathbf{r}_u du" /> と <InlineMath math="\mathbf{r}_v dv" /> は、曲面を局所的に近似する平行四辺形を形成します。
                    外積の大きさは、その 2 ベクトルが張る平行四辺形の面積に等しいため、微小面積は <InlineMath math="|\mathbf{r}_u du \times \mathbf{r}_v dv| = |\mathbf{r}_u \times \mathbf{r}_v|\, du\, dv" /> となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲面の面積計算</h2>

            <p>
                面積要素を領域全体で積分することで、曲面の全面積を求めることができます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (曲面の面積)">
                <p>
                    パラメータ空間の領域 <InlineMath math="D" /> に対応する曲面 <InlineMath math="S" /> の面積 <InlineMath math="A(S)" /> は、次の積分で与えられる：
                    <BlockMath math="A(S) = \iint_D |\mathbf{r}_u \times \mathbf{r}_v|\, du\, dv" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    領域 <InlineMath math="D" /> を微小な長方形（辺の長さ <InlineMath math="\Delta u, \Delta v" />）に分割して考える。
                    点 <InlineMath math="(u, v)" /> に対応する曲面上の点 <InlineMath math="\mathbf{r}(u, v)" /> において、パラメータの変化に伴う移動は次のように 1 次近似できる：
                    <BlockMath math="\begin{aligned} \Delta \mathbf{r}_u &\approx \mathbf{r}_u(u, v) \Delta u \\ \Delta \mathbf{r}_v &\approx \mathbf{r}_v(u, v) \Delta v \end{aligned}" />
                </p>
                <p>
                    これら 2 つのベクトルが張る微小な平行四辺形は、曲面の当該部分を局所的に近似する接平面の一部である。
                    その面積 <InlineMath math="\Delta S" /> は外積の大きさとして次のように求められる：
                    <BlockMath math="\Delta S \approx |(\mathbf{r}_u \Delta u) \times (\mathbf{r}_v \Delta v)| = |\mathbf{r}_u \times \mathbf{r}_v| \Delta u \Delta v" />
                </p>
                <p>
                    領域 <InlineMath math="D" /> 全体にわたってこれらの微小面積を足し合わせ、分割を限りなく細かくする（<InlineMath math="\Delta u, \Delta v \to 0" />）極限をとると、二重積分の定義より、曲面の全面積 <InlineMath math="A(S)" /> は次の積分に一致する：
                    <BlockMath math="A(S) = \iint_D |\mathbf{r}_u \times \mathbf{r}_v|\, du\, dv" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1 (球面の面積)">
                <p>
                    半径 <InlineMath math="R" /> の球面 <InlineMath math="S" /> の面積を求めます。
                    パラメータ表示は <InlineMath math="\mathbf{r}(\phi, \theta) = (R\sin\phi\cos\theta, R\sin\phi\sin\theta, R\cos\phi) \quad (0 \le \phi \le \pi, 0 \le \theta \le 2\pi)" /> です。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-4">
                    <p>
                        1. 接ベクトルの計算：
                        <BlockMath math="\begin{aligned} \mathbf{r}_\phi &= (R\cos\phi\cos\theta, R\cos\phi\sin\theta, -R\sin\phi) \\ \mathbf{r}_\theta &= (-R\sin\phi\sin\theta, R\sin\phi\cos\theta, 0) \end{aligned}" />
                    </p>
                    <p>
                        2. 外積とその大きさ（面積要素）の計算：
                        <BlockMath math="\begin{aligned} &\mathbf{r}_\phi \times \mathbf{r}_\theta \\ &\quad = (R^2 \sin^2 \phi \cos \theta, R^2 \sin^2 \phi \sin \theta, R^2 \sin \phi \cos \phi) \\ &|\mathbf{r}_\phi \times \mathbf{r}_\theta| \\ &\quad = \sqrt{(R^2 \sin^2 \phi)^2 + (R^2 \sin \phi \cos \phi)^2} \\ &\quad = R^2 \sin \phi \end{aligned}" />
                    </p>
                    <p>
                        3. 面積の積分：
                        <BlockMath math="\begin{aligned} A(S) &= \int_0^\pi \int_0^{2\pi} R^2 \sin \phi\, d\theta\, d\phi \\ &= 2\pi R^2 \int_0^\pi \sin \phi\, d\phi = 4\pi R^2 \end{aligned}" />
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>面積要素 <InlineMath math="dS" /></strong>：パラメータ空間の微小長方形が曲面上で占める面積。</li>
                    <li><strong>導出</strong>：接ベクトルが張る平行四辺形の面積（外積の大きさ）として得られる。</li>
                    <li><strong>計算の手順</strong>：パラメータ表示を選択 <InlineMath math="\to" /> 接ベクトルと法線ベクトルを求める <InlineMath math="\to" /> 法線ベクトルの大きさを積分する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
