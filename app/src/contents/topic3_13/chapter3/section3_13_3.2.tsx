import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ArcLengthAndArea() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                第一基本形式の具体的な応用として、曲面上の曲線の長さ（弧長）や、曲面の一部の領域の面積を計算する公式を導きます。これらの量はすべて第一基本形式の係数 <InlineMath math="E, F, G" /> だけを用いて表現できます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">弧長の公式</h2>

            <p className="leading-relaxed">
                曲面上の曲線の長さは、曲線を <InlineMath math="\mathbb{R}^3" /> 内の通常の曲線とみなして計算できますが、パラメータ <InlineMath math="u, v" /> 上の軌跡として計算することもできます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 3.2-1 (弧長の公式)"
            >
                <p>
                    曲面 <InlineMath math="S" /> 上の曲線 <InlineMath math="\alpha(t)" /> が、パラメータ平面内の曲線 <InlineMath math="(u(t), v(t))" />（<InlineMath math="t \in [a, b]" />）を用いて <InlineMath math="\alpha(t) = \mathbf{x}(u(t), v(t))" /> と表されているとする。
                </p>
                <p>
                    この曲線の弧長 <InlineMath math="L" /> は、第一基本形式の係数を用いて次のように計算される。
                    <BlockMath math="L = \int_a^b |\alpha'(t)|\,dt = \int_a^b \sqrt{E\dot{u}^2 + 2F\dot{u}\dot{v} + G\dot{v}^2}\,dt" />
                    （ここで <InlineMath math="\dot{u} = \frac{du}{dt}, \dot{v} = \frac{dv}{dt}" /> である。）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    合成関数の微分則（連鎖律）により、曲線の速度ベクトル <InlineMath math="\alpha'(t)" /> は次のように表される。
                    <BlockMath math="\alpha'(t) = \frac{d}{dt}\mathbf{x}(u(t), v(t)) = \mathbf{x}_u \dot{u} + \mathbf{x}_v \dot{v}" />
                </p>
                <p>
                    この速度ベクトルの大きさの2乗 <InlineMath math="|\alpha'(t)|^2" /> を内積で展開する。
                    <BlockMath math="|\alpha'(t)|^2 = (\mathbf{x}_u \dot{u} + \mathbf{x}_v \dot{v}) \cdot (\mathbf{x}_u \dot{u} + \mathbf{x}_v \dot{v})" />
                    <BlockMath math="= (\mathbf{x}_u \cdot \mathbf{x}_u)\dot{u}^2 + 2(\mathbf{x}_u \cdot \mathbf{x}_v)\dot{u}\dot{v} + (\mathbf{x}_v \cdot \mathbf{x}_v)\dot{v}^2" />
                </p>
                <p>
                    第一基本形式の係数の定義（<InlineMath math="E = \mathbf{x}_u \cdot \mathbf{x}_u" /> など）を用いると、
                    <BlockMath math="|\alpha'(t)|^2 = E\dot{u}^2 + 2F\dot{u}\dot{v} + G\dot{v}^2" />
                    となる。よって、速さ <InlineMath math="|\alpha'(t)|" /> はこの平方根となり、これを積分することで弧長 <InlineMath math="L" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.2-1 (球面上の緯線の長さ)"
            >
                <p>
                    単位球面上の緯線（ある一定の緯度 <InlineMath math="u = u_0" /> を保ちながら地球を一周する曲線）の長さを求める。
                </p>
                <p>
                    曲線のパラメータ表示は <InlineMath math="u(v) = u_0" />（定数）、<InlineMath math="v : 0 \to 2\pi" /> となる。
                    <InlineMath math="v" /> をパラメータ <InlineMath math="t" /> だとみなすと、<InlineMath math="\dot{u} = \frac{du}{dv} = 0" />、<InlineMath math="\dot{v} = \frac{dv}{dv} = 1" /> である。
                </p>
                <p>
                    球面の第一基本形式の係数は <InlineMath math="E = 1, F = 0, G = \sin^2 u" /> であった。これを弧長の公式に代入する。
                    <BlockMath math="\begin{aligned} L &= \int_0^{2\pi} \sqrt{1 \cdot 0^2 + 2 \cdot 0 \cdot 0 \cdot 1 + \sin^2 u_0 \cdot 1^2} \,dv \\ &= \int_0^{2\pi} \sqrt{\sin^2 u_0} \,dv = \int_0^{2\pi} \sin u_0 \,dv \end{aligned}" />
                </p>
                <p>
                    積分を実行すると、<InlineMath math="L = 2\pi \sin u_0" /> となる。赤道（<InlineMath math="u_0 = \pi/2" />）では <InlineMath math="L = 2\pi" /> となり、最大円周となることが確認できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">面積の公式</h2>

            <p className="leading-relaxed">
                次に、曲面上の領域の面積を計算します。微小な平行四辺形の面積を積分することで曲面の面積が求まります。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 3.2-2 (面積の公式)"
            >
                <p>
                    パラメータ平面内の領域 <InlineMath math="D \subset \mathbb{R}^2" /> に対応する曲面 <InlineMath math="S" /> 上の領域 <InlineMath math="\mathbf{x}(D)" /> の面積 <InlineMath math="A" /> は、次のように計算される。
                    <BlockMath math="A = \iint_D |\mathbf{x}_u \times \mathbf{x}_v| \,du\,dv = \iint_D \sqrt{EG - F^2} \,du\,dv" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    曲面上の微小領域は、2つの接ベクトル <InlineMath math="\mathbf{x}_u \,du" /> と <InlineMath math="\mathbf{x}_v \,dv" /> が張る微小な平行四辺形で近似できる。この平行四辺形の面積は外積の大きさ <InlineMath math="|\mathbf{x}_u \times \mathbf{x}_v| \,du\,dv" /> である。
                </p>
                <p>
                    ラグランジュの恒等式より、外積の大きさの2乗は内積を用いて次のように表せる。
                    <BlockMath math="|\mathbf{x}_u \times \mathbf{x}_v|^2 = |\mathbf{x}_u|^2 |\mathbf{x}_v|^2 - (\mathbf{x}_u \cdot \mathbf{x}_v)^2" />
                </p>
                <p>
                    第一基本形式の係数の定義 <InlineMath math="E = |\mathbf{x}_u|^2, G = |\mathbf{x}_v|^2, F = \mathbf{x}_u \cdot \mathbf{x}_v" /> を代入すると、
                    <BlockMath math="|\mathbf{x}_u \times \mathbf{x}_v|^2 = EG - F^2" />
                    となる。両辺の平方根をとれば、<InlineMath math="|\mathbf{x}_u \times \mathbf{x}_v| = \sqrt{EG - F^2}" /> を得る。これを領域 <InlineMath math="D" /> 上で積分したものが面積 <InlineMath math="A" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.2-2 (球面の面積)"
            >
                <p>
                    単位球面全体の面積を計算する。パラメータ領域は <InlineMath math="D = \{ (u,v) \mid 0 < u < \pi, 0 < v < 2\pi \}" /> である。
                </p>
                <p>
                    球面の係数は <InlineMath math="E=1, F=0, G=\sin^2 u" /> であった。したがって、
                    <BlockMath math="\sqrt{EG - F^2} = \sqrt{1 \cdot \sin^2 u - 0^2} = \sin u" />
                    となる（<InlineMath math="0 < u < \pi" /> では <InlineMath math="\sin u > 0" />）。
                </p>
                <p>
                    面積の公式に代入して重積分を計算する。
                    <BlockMath math="A = \iint_D \sin u \,du\,dv = \int_0^{2\pi} \left( \int_0^\pi \sin u \,du \right) dv" />
                    <BlockMath math="\int_0^\pi \sin u \,du = \Big[ -\cos u \Big]_0^\pi = -(-1) - (-1) = 2" />
                    <BlockMath math="A = \int_0^{2\pi} 2 \,dv = 2 \cdot 2\pi = 4\pi" />
                </p>
                <p>
                    これにより、半径 1 の球面の表面積が <InlineMath math="4\pi" /> であることが正しく導かれた。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>第一基本形式の係数 <InlineMath math="E, F, G" /> を用いて、曲面上の曲線の弧長 <InlineMath math="L = \int \sqrt{E\dot{u}^2 + 2F\dot{u}\dot{v} + G\dot{v}^2} \,dt" /> が計算できる。</li>
                    <li>面積素元は <InlineMath math="\sqrt{EG - F^2}\,du\,dv" /> であり、これを積分することで曲面の面積が計算できる。</li>
                    <li>これらは曲面の「長さ」と「面積」が第一基本形式のみから完全に決定されることを意味している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}