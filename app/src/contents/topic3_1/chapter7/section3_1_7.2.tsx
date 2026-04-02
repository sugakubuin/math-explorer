import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function StokesTheoremProof() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ストークスの定理の厳密な証明は計算が非常に煩雑になりますが、その「骨格」は非常に明快です。
                曲面のパラメータ表示を用いることで、一般の曲面上の積分問題を、パラメータ平面（ <InlineMath math="uv" /> 平面）上のグリーンの定理の問題へと書き換えるのが核心です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明の骨格</h2>

            <p>
                曲面 <InlineMath math="S" /> がパラメータ表示 <InlineMath math="\mathbf{r}(u, v) \quad ((u, v) \in D)" /> で与えられているものとします。
                ここで、ベクトル場 <InlineMath math="\mathbf{F}" /> の循環積分を、パラメータ <InlineMath math="u, v" /> を用いて書き換えます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    ベクトル場 <InlineMath math="\mathbf{F} = (P, Q, R)" /> に対し、各成分ごとに等号が成り立つことを示せば十分である。ここでは <InlineMath math="P" /> 成分（ <InlineMath math="x" /> 成分）についての関係
                    <BlockMath math="\oint_{\partial S} P\, dx = \iint_S \left( \frac{\partial P}{\partial z} \mathbf{j} - \frac{\partial P}{\partial y} \mathbf{k} \right) \cdot \mathbf{n}\, dS" />
                    を導く。曲面のパラメータ表示を <InlineMath math="\mathbf{r}(u, v) = (x(u, v), y(u, v), z(u, v))" /> とし、境界 <InlineMath math="\partial S" /> を <InlineMath math="uv" /> 平面の領域 <InlineMath math="D" /> の境界 <InlineMath math="\partial D" /> からの写像と考える。
                </p>
                <p>
                    1. <strong>線積分の引き戻し</strong>：
                    <BlockMath math="\oint_{\partial S} P\, dx = \oint_{\partial D} P(x, y, z) \left( \frac{\partial x}{\partial u} du + \frac{\partial x}{\partial v} dv \right)" />
                    ここで <InlineMath math="uv" /> 平面上のグリーンの定理を適用すると：
                    <BlockMath math="\iint_D \left[ \frac{\partial}{\partial u} \left( P \frac{\partial x}{\partial v} \right) - \frac{\partial}{\partial v} \left( P \frac{\partial x}{\partial u} \right) \right] du\, dv" />
                </p>
                <p>
                    2. <strong>微分計算</strong>：
                    積の微分法と鎖法（チェインルール）を用いると：
                    <BlockMath math="\begin{aligned} &\frac{\partial}{\partial u} \left( P \frac{\partial x}{\partial v} \right) \\ &\quad = \left( \frac{\partial P}{\partial x} \frac{\partial x}{\partial u} + \frac{\partial P}{\partial y} \frac{\partial y}{\partial u} + \frac{\partial P}{\partial z} \frac{\partial z}{\partial u} \right) \frac{\partial x}{\partial v} + P \frac{\partial^2 x}{\partial u \partial v} \\ & \frac{\partial}{\partial v} \left( P \frac{\partial x}{\partial u} \right) \\ &\quad = \left( \frac{\partial P}{\partial x} \frac{\partial x}{\partial v} + \frac{\partial P}{\partial y} \frac{\partial y}{\partial v} + \frac{\partial P}{\partial z} \frac{\partial z}{\partial v} \right) \frac{\partial x}{\partial u} + P \frac{\partial^2 x}{\partial v \partial u} \end{aligned}" />
                    これらの差をとると、 <InlineMath math="\frac{\partial P}{\partial x}" /> の項と <InlineMath math="P" /> の 2 回微分の項が打ち消し合い、次が残る：
                    <BlockMath math="\left( \frac{\partial P}{\partial y} \frac{\partial y}{\partial u} + \frac{\partial P}{\partial z} \frac{\partial z}{\partial u} \right) \frac{\partial x}{\partial v} - \left( \frac{\partial P}{\partial y} \frac{\partial y}{\partial v} + \frac{\partial P}{\partial z} \frac{\partial z}{\partial v} \right) \frac{\partial x}{\partial u}" />
                    さらに整理すると：
                    <BlockMath math="-\frac{\partial P}{\partial y} \left( \frac{\partial x}{\partial u}\frac{\partial y}{\partial v} - \frac{\partial x}{\partial v}\frac{\partial y}{\partial u} \right) + \frac{\partial P}{\partial z} \left( \frac{\partial z}{\partial u}\frac{\partial x}{\partial v} - \frac{\partial z}{\partial v}\frac{\partial x}{\partial u} \right)" />
                </p>
                <p>
                    3. <strong>面積分との照合</strong>：
                    かっこ内の式はヤコビアン（外積 <InlineMath math="\mathbf{r}_u \times \mathbf{r}_v" /> の成分）そのものである。
                    <BlockMath math="\begin{aligned} &\iint_D \left[ \frac{\partial P}{\partial z} (\mathbf{r}_u \times \mathbf{r}_v)_y - \frac{\partial P}{\partial y} (\mathbf{r}_u \times \mathbf{r}_v)_z \right] du\, dv \\ &\quad = \iint_S (\text{rot}(P, 0, 0) \cdot \mathbf{n}) dS \end{aligned}" />
                    同様のことを <InlineMath math="Q, R" /> 成分についても行い、合計することでストークスの定理が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="証明の核心：次元の引き下げ">
                <p>
                    この証明で最も重要なのは、<strong>3 次元空間内の曲面上の問題を、その「地図」である 2 次元のパラメータ領域へと引き下ろしている</strong>点です。
                    一度 2 次元の領域に落とし込んでしまえば、既に証明済みのグリーンの定理が適用可能になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分定理の一般的な不変性</h2>

            <p>
                ストークスの定理は、曲面の取り方（パラメータ表示の選び方）によらず成り立ちます。
                境界曲線を固定すれば、それを縁とする「どのような曲面」を選んでも、回転の面積分は常に一定（境界の線積分に等しい）になります。
                これは、微分形式（外微分）の言葉で述べると「 <InlineMath math="d^2 = 0" /> 」という幾何学的な性質に対応しています（詳細は専門的な微積分学で扱われます）。
            </p>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>証明の手順</strong>：線積分の書き換え <InlineMath math="\to" /> グリーンの定理の適用 <InlineMath math="\to" /> 被積分関数の恒等式の利用。</li>
                    <li><strong>数理的な位置づけ</strong>：パラメータ表示という「写像」を通じて、既知の 2 次元の定理から 3 次元の定理を引き出す。</li>
                    <li><strong>普遍性</strong>：境界が同じであれば、中間の曲面の形状に関係なく積分の値が保存される（保存力場の多次元版）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
