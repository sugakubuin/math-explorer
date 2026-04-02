import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_10_3() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                曲線の自然な拡張として、空間内の「曲面」を考えます。
                面は2次元の広がりを持つため、それをパラメータ表示するには2つの独立な変数が必要となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">パラメータ曲面と正則性</h2>

            <ContentBox type="definition" title="Definition 10.3-1 (パラメータ曲面)">
                <p>
                    <InlineMath math="D \subset \mathbb{R}^2" /> を領域とする。<InlineMath math="D" /> から空間 <InlineMath math="\mathbb{R}^3" /> への連続写像
                </p>
                <BlockMath math="\mathbf{r}: D \to \mathbb{R}^3, \quad (u, v) \mapsto \mathbf{r}(u, v) = \begin{pmatrix} x(u, v) \\ y(u, v) \\ z(u, v) \end{pmatrix}" />
                <p className="mt-2">
                    を<strong>パラメータ曲面</strong>（parametrized surface）、あるいは単に<strong>曲面</strong>と呼ぶ。
                    変数 <InlineMath math="u, v" /> を<strong>パラメータ</strong>と呼び、<InlineMath math="D" /> をパラメータ領域と呼ぶ。
                </p>
            </ContentBox>

            <p>
                曲線と同様に、曲面にも「尖点」や「接平面が定義できない点」が存在し得ます。これを排除するために正則性の概念を導入します。
            </p>

            <ContentBox type="definition" title="Definition 10.3-2 (正則曲面)">
                <p>
                    パラメータ曲面 <InlineMath math="\mathbf{r}(u, v)" /> が <InlineMath math="C^1" /> 級（各成分が <InlineMath math="u, v" /> について連続的偏微分可能）であるとする。
                </p>
                <p className="mt-2">
                    写像 <InlineMath math="\mathbf{r}" /> の各パラメータ成分に対する偏導関数（接ベクトル）を考える：
                </p>
                <BlockMath math="\mathbf{r}_u(u, v) = \frac{\partial \mathbf{r}}{\partial u} = \begin{pmatrix} x_u \\ y_u \\ z_u \end{pmatrix}, \quad \mathbf{r}_v(u, v) = \frac{\partial \mathbf{r}}{\partial v} = \begin{pmatrix} x_v \\ y_v \\ z_v \end{pmatrix}" />
                <p className="mt-2">
                    領域 <InlineMath math="D" /> 上のすべての点 <InlineMath math="(u, v)" /> において、これら2つのベクトルが<strong>一次独立</strong>であるとき、曲面 <InlineMath math="\mathbf{r}" /> は<strong>正則</strong>（regular）であるという。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    ※ 一次独立という条件は、空間ベクトルにおいては外積を用いて <InlineMath math="\mathbf{r}_u \times \mathbf{r}_v \neq \mathbf{0}" /> と同値である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="正則性の幾何学的意味（法線ベクトルと接平面）">
                <p>
                    <InlineMath math="u" />-曲線（<InlineMath math="v" /> を固定した線）の接ベクトル <InlineMath math="\mathbf{r}_u" /> と、<InlineMath math="v" />-曲線の接ベクトル <InlineMath math="\mathbf{r}_v" /> が一次独立であることは、<strong>その点において明確な2次元の「接平面」が張られること</strong>を意味します。
                </p>
                <p className="mt-2">
                    その接平面に対する垂直なベクトル、すなわち<strong>法線ベクトル</strong>（normal vector）<InlineMath math="\mathbf{n}" /> は、外積を用いて次のように構成できます：
                </p>
                <BlockMath math="\mathbf{n} = \frac{\mathbf{r}_u \times \mathbf{r}_v}{\|\mathbf{r}_u \times \mathbf{r}_v\|}" />
                <p className="mt-2">
                    分母が <InlineMath math="0" /> にならないことこそが、正則性の条件 <InlineMath math="\mathbf{r}_u \times \mathbf{r}_v \neq \mathbf{0}" /> なのです。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲面の面積要素</h2>

            <p>
                曲線の長さ（弧長）を積分の形で導出したように、曲面の面積も微小な面積片を集め上げることで定式化されます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.3-1 (面積素の公式)">
                <p>
                    <InlineMath math="C^1" /> 級パラメータ曲面 <InlineMath math="\mathbf{r}: D \to \mathbb{R}^3" /> 上の微小な面積要素 <InlineMath math="dS" /> は次のように与えられる：
                </p>
                <BlockMath math="dS = \|\mathbf{r}_u \times \mathbf{r}_v\| \, du \, dv" />
                <p className="mt-2">
                    さらに、外積のノルムの自乗を用いた次の恒等式（ラグランジュの恒等式）により、表現を書き換えることもできる：
                </p>
                <BlockMath math="dS = \sqrt{\|\mathbf{r}_u\|^2 \|\mathbf{r}_v\|^2 - (\mathbf{r}_u \cdot \mathbf{r}_v)^2} \, du \, dv" />
                <p className="mt-2">
                    曲面全体の面積 <InlineMath math="S" /> はこれを領域 <InlineMath math="D" /> 上で二重積分することで得られる：
                </p>
                <BlockMath math="S = \iint_D \|\mathbf{r}_u \times \mathbf{r}_v\| \, du \, dv" />
            </ContentBox>

            <ContentBox type="proof" title="導出と証明">
                <p>
                    パラメータ平面 <InlineMath math="D" /> 上の点 <InlineMath math="(u, v)" /> の周りの微小な長方形領域 <InlineMath math="[u, u+\Delta u] \times [v, v+\Delta v]" /> を考える。
                    この領域は、写像 <InlineMath math="\mathbf{r}" /> によって空間内の微小な曲面片に写される。
                </p>
                <p className="mt-2">
                    この微小な曲面片は、十分に小さければ局所的にその接平面と見なすことができる（1次近似）。
                    頂点 <InlineMath math="\mathbf{r}(u, v)" /> から伸びる接平面上の2つのベクトルは、微分の定義から
                </p>
                <BlockMath math="\Delta \mathbf{r}_u \approx \frac{\partial \mathbf{r}}{\partial u} \Delta u = \mathbf{r}_u \Delta u" />
                <BlockMath math="\Delta \mathbf{r}_v \approx \frac{\partial \mathbf{r}}{\partial v} \Delta v = \mathbf{r}_v \Delta v" />
                <p className="mt-2">
                    で近似される。
                </p>
                <p className="mt-2">
                    空間幾何学の基本性質より、空間内の2つのベクトル <InlineMath math="\mathbf{a}, \mathbf{b}" /> が張る平行四辺形の面積は、外積のノルム <InlineMath math="\|\mathbf{a} \times \mathbf{b}\|" /> に等しい。
                    したがって、この接平面上の微小な平行四辺形の面積 <InlineMath math="\Delta S" /> は、
                </p>
                <BlockMath math="\Delta S \approx \|(\mathbf{r}_u \Delta u) \times (\mathbf{r}_v \Delta v)\| = \|\mathbf{r}_u \times \mathbf{r}_v\| \Delta u \Delta v" />
                <p className="mt-2">
                    となる。領域 <InlineMath math="D" /> を細かい小長方形に分割し、それぞれの平行四辺形近似の面積を足し合わせ、分割を無限に細かくする（<InlineMath math="\Delta u \to du, \Delta v \to dv" />）というリーマン和の極限操作により、曲面の正確な面積 <InlineMath math="S" /> の定義に至る：
                </p>
                <BlockMath math="S = \lim_{\Delta u, \Delta v \to 0} \sum \|\mathbf{r}_u \times \mathbf{r}_v\| \Delta u \Delta v = \iint_D \|\mathbf{r}_u \times \mathbf{r}_v\| \, du \, dv" />
                <p className="mt-2">
                    そしてラグランジュの恒等式 <InlineMath math="\|\mathbf{a} \times \mathbf{b}\|^2 = \|\mathbf{a}\|^2 \|\mathbf{b}\|^2 - (\mathbf{a} \cdot \mathbf{b})^2" /> を用いれば、
                </p>
                <BlockMath math="\|\mathbf{r}_u \times \mathbf{r}_v\| = \sqrt{\|\mathbf{r}_u\|^2 \|\mathbf{r}_v\|^2 - (\mathbf{r}_u \cdot \mathbf{r}_v)^2}" />
                <p className="mt-2">
                    となり、第一基本量（<InlineMath math="E = \mathbf{r}_u \cdot \mathbf{r}_u, F = \mathbf{r}_u \cdot \mathbf{r}_v, G = \mathbf{r}_v \cdot \mathbf{r}_v" />）を用いた古典的な表現 <InlineMath math="dS = \sqrt{EG - F^2} \, du \, dv" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

        </section>
    );
}
