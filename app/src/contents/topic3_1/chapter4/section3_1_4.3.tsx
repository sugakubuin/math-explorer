import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AreaFormulas() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                グリーンの定理の最も実用的な応用の一つは、平面領域の「面積」を、その境界に沿った「線積分」だけで計算できることです。
                これにより、複雑な二重積分を回避し、境界のパラメータ表示のみから面積を求めることが可能になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">グリーンの定理による面積公式</h2>

            <p>
                グリーンの定理 <InlineMath math="\oint (P\, dx + Q\, dy) = \iint (\partial_x Q - \partial_y P)\, dA" /> において、
                右辺の被積分関数が常に 1 になるような <InlineMath math="P, Q" /> を選択します。
            </p>

            <ContentBox type="proposition" title="Proposition 4.3-1 (面積計算公式)">
                <p>
                    領域 <InlineMath math="D" /> の面積 <InlineMath math="A" /> は、その境界 <InlineMath math="\partial D" /> に沿った以下の線積分のいずれでも計算できる：
                    <BlockMath math="A = \oint_{\partial D} x\, dy = -\oint_{\partial D} y\, dx = \frac{1}{2} \oint_{\partial D} (x\, dy - y\, dx)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="P = -y/2, \; Q = x/2" /> とおくと、
                    <BlockMath math="\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = \frac{1}{2} - \left( -\frac{1}{2} \right) = 1" />
                    これをグリーンの定理に代入すると、
                    <BlockMath math="\begin{aligned} \iint_D 1\, dA &= \oint_{\partial D} \left( -\frac{1}{2}y\, dx + \frac{1}{2}x\, dy \right) \\ &= \frac{1}{2} \oint_{\partial D} (x\, dy - y\, dx) \end{aligned}" />
                    が導かれる。他の 2 式も同様に <InlineMath math="(P, Q) = (0, x)" /> または <InlineMath math="(-y, 0)" /> とおけばよい。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 4.3-1 (楕円の面積)">
                <p>
                    楕円 <InlineMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1" /> の面積を求めます。
                    境界は <InlineMath math="x = a\cos t, y = b\sin t \; (0 \le t \le 2\pi)" /> と表せます。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-2">
                    <p>
                        <InlineMath math="dx = -a\sin t\, dt, \; dy = b\cos t\, dt" /> を公式に代入すると、
                    </p>
                    <BlockMath math="\begin{aligned} A &= \frac{1}{2} \oint (x\, dy - y\, dx) \\ &= \frac{1}{2} \int_0^{2\pi} [ (a\cos t)(b\cos t) - (b\sin t)(-a\sin t) ]\, dt \\ &= \frac{1}{2} \int_0^{2\pi} ab (\cos^2 t + \sin^2 t)\, dt = \frac{ab}{2} \int_0^{2\pi} dt = \pi ab \end{aligned}" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-2 (アステロイドの面積)">
                <p>
                    アステロイド曲線 <InlineMath math="x = a\cos^3 t, y = a\sin^3 t" /> が囲む領域の面積を求めます。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-2">
                    <BlockMath math="\begin{aligned} x\, dy - y\, dx &= (a\cos^3 t)(3a\sin^2 t \cos t) \\ &\quad - (a\sin^3 t)(-3a\cos^2 t \sin t) \\ &= 3a^2 \cos^4 t \sin^2 t + 3a^2 \sin^4 t \cos^2 t \\ &= 3a^2 \sin^2 t \cos^2 t (\cos^2 t + \sin^2 t) \\ &= 3a^2 \sin^2 t \cos^2 t \\ &= \frac{3a^2}{4} \sin^2(2t) \end{aligned}" />
                    <p>これを積分すると、</p>
                    <BlockMath math="\begin{aligned} A &= \frac{1}{2} \int_0^{2\pi} \frac{3a^2}{4} \sin^2(2t)\, dt \\ &= \frac{3a^2}{8} \int_0^{2\pi} \frac{1-\cos 4t}{2}\, dt \\ &= \frac{3a^2}{8} \cdot \pi = \frac{3}{8}\pi a^2 \end{aligned}" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>面積の線積分表示</strong>：境界の形状が決まれば、中身を積分せずに面積がわかる。</li>
                    <li><strong>実用性</strong>：パラメータ表示がわかっている曲線（サイクロイド、楕円、心臓形など）の面積計算に非常に有利。</li>
                    <li><strong>符号</strong>：線積分を逆に辿ると面積が負になるため、常に領域を左に見る向きを確認すること。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
