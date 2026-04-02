import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GreensTheoremStatement() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「グリーンの定理」は、平面上の閉曲線に沿った線積分と、その曲線が囲む領域上での二重積分（重積分）を結びつける非常に重要な定理です。
                これは後に学ぶガウスの発散定理やストークスの定理の 2 次元版に相当し、ベクトル解析における「微分と積分の基本定理」の拡張として位置づけられます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">境界の正の向き</h2>

            <p>
                定理を述べる前に、閉曲線の「向き」について厳密に定義する必要があります。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (境界の正の向き)">
                <p>
                    平面上の有界領域 <InlineMath math="D" /> に対し、その境界曲線 <InlineMath math="\partial D" /> の<strong>正の向き (positive orientation)</strong> とは、
                    その向きに沿って進んだとき、領域の内部が常に<strong>左側</strong>に見えるような向き（反時計回り）を指す。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">グリーンの定理の主張</h2>

            <ContentBox type="theorem" title="Theorem 4.1-1 (グリーンの定理)">
                <p>
                    領域 <InlineMath math="D" /> 上で <InlineMath math="C^1" /> 級のスカラー場 <InlineMath math="P(x, y)" /> と <InlineMath math="Q(x, y)" /> が定義されているとき、次の等号が成り立つ。
                    <BlockMath math="\oint_{\partial D} (P\, dx + Q\, dy) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx\, dy" />
                    ここで <InlineMath math="\partial D" /> は領域 <InlineMath math="D" /> の境界であり、正の向きにパラメータ表示されているものとする。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="物理的・直感的な意味">
                <p>
                    被積分関数 <InlineMath math="\partial Q/\partial x - \partial P/\partial y" /> は、点 <InlineMath math="(x,y)" /> におけるベクトル場 <InlineMath math="\mathbf{F} = (P, Q)" /> の<strong>回転 (rot)</strong> の <InlineMath math="z" /> 成分に相当します。
                    定理は、「領域内の微小な渦（回転）をすべて足し合わせると、境界に沿った循環（流れの累積）に一致する」ことを主張しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 4.1-1 (定理の確認)">
                <p>
                    単位円板 <InlineMath math="D = \{ (x, y) \mid x^2 + y^2 \le 1 \}" /> とベクトル場 <InlineMath math="P = -y, \; Q = x" /> について両辺を計算します。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-4">
                    <div>
                        <strong>(1) 右辺（二重積分）</strong>：
                        <InlineMath math="\partial Q/\partial x = 1, \; \partial P/\partial y = -1" /> なので、
                        <BlockMath math="\begin{aligned} &\iint_D (1 - (-1))\, dx\, dy \\ &\quad = \iint_D 2\, dA = 2 \times (\text{円の面積}) = 2\pi \end{aligned}" />
                    </div>
                    <div>
                        <strong>(2) 左辺（線積分）</strong>：
                        境界 <InlineMath math="x = \cos t, y = \sin t \; (0 \le t \le 2\pi)" /> とすると、
                        <BlockMath math="\begin{aligned} &\oint_{\partial D} (-y\, dx + x\, dy) \\ &\quad = \int_0^{2\pi} (-\sin t)(-\sin t\, dt) + (\cos t)(\cos t\, dt) \\ &\quad = \int_0^{2\pi} (\sin^2 t + \cos^2 t)\, dt = \int_0^{2\pi} dt = 2\pi \end{aligned}" />
                    </div>
                </div>
                <p className="mt-4">
                    両辺が一致することが確認できました。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>正の向き</strong>：領域を左に見る向き。</li>
                    <li><strong>グリーンの定理</strong>：境界上の線積分を内部の二重積分に変換する。</li>
                    <li><strong>重要性</strong>：平面上のベクトル場の特性を、経路に注目するか領域に注目するか選べるようになる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
