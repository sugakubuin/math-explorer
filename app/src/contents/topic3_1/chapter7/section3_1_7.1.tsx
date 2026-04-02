import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function StokesTheoremStatement() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「ストークスの定理」は、2 次元のグリーンの定理を、3 次元空間内の一般の曲面へと拡張したものです。
                これは、曲面上の「渦（回転）」の総和が、その曲面の「縁（境界曲線）」に沿った循環に等しいことを主張しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">境界曲線の向き</h2>

            <p>
                定理を述べる前に、曲面の法線と、その境界を回る向きとの間の「整合性」を定義する必要があります。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (境界の正方向)">
                <p>
                    向きつき曲面 <InlineMath math="S" /> の境界曲線を <InlineMath math="\partial S" /> とする。
                    <InlineMath math="\partial S" /> の<strong>正の向き</strong>は、曲面の単位法線ベクトル <InlineMath math="\hat{\mathbf{n}}" /> に対して<strong>右ねじの法則</strong>に従う向きとして定められる。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg mt-4 text-sm">
                    <p><strong>イメージ：</strong></p>
                    <p>
                        法線ベクトルの方向に右ねじを回したとき、ねじが進む方向に指が回る向きが正方向です。
                        または、曲面の「表側」を、法線ベクトルを頭にして歩くとき、常に曲面が自分の<strong>左手側</strong>に見えるように歩く向き、とも説明されます。
                    </p>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ストークスの定理</h2>

            <ContentBox type="theorem" title="Theorem 7.1-1 (ストークスの定理)">
                <p>
                    境界曲線 <InlineMath math="\partial S" /> を持つ滑らかな向きつき曲面 <InlineMath math="S" /> において、
                    <InlineMath math="C^1" /> 級のベクトル場 <InlineMath math="\mathbf{F}" /> が定義されているとき、次の等号が成り立つ：
                    <BlockMath math="\oint_{\partial S} \mathbf{F} \cdot d\mathbf{r} = \iint_S (\text{rot}\, \mathbf{F}) \cdot d\mathbf{S}" />
                    ここで <InlineMath math="\partial S" /> の向きは、 <InlineMath math="S" /> の法線ベクトルに対して正の向きに取られているものとする。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="グリーンの定理との関係">
                <p>
                    曲面 <InlineMath math="S" /> が <InlineMath math="xy" /> 平面上の領域 <InlineMath math="D" /> である場合、法線ベクトルは <InlineMath math="\mathbf{k} = (0, 0, 1)" /> となります。
                    このとき <InlineMath math="(\text{rot}\, \mathbf{F}) \cdot \mathbf{k} = \partial Q/\partial x - \partial P/\partial y" /> となり、
                    ストークスの定理はまさに第 4 章で学んだグリーンの定理に一致します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例：放物面での確認</h2>

            <ContentBox type="example" title="Example 7.1-1 (定理の確認)">
                <p>
                    ベクトル場 <InlineMath math="\mathbf{F} = (-y, x, z^2)" /> について、放物面 <InlineMath math="S: z = 1 - x^2 - y^2 \quad (z \ge 0)" /> で両辺を計算します。
                    境界 <InlineMath math="\partial S" /> は <InlineMath math="xy" /> 平面上の単位円 <InlineMath math="x^2 + y^2 = 1 \quad (z = 0)" /> です。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-4">
                    <div>
                        <strong>(1) 左辺（線積分）</strong>：
                        境界曲線を <InlineMath math="\mathbf{r}(t) = (\cos t, \sin t, 0)" /> とすると、
                        <BlockMath math="\begin{aligned} &\oint_{\partial S} \mathbf{F} \cdot d\mathbf{r} \\ &\quad = \int_0^{2\pi} (-\sin t, \cos t, 0) \cdot (-\sin t, \cos t, 0)\, dt \\ &\quad = \int_0^{2\pi} (\sin^2 t + \cos^2 t)\, dt = \int_0^{2\pi} 1\, dt = 2\pi \end{aligned}" />
                    </div>
                    <div>
                        <strong>(2) 右辺（面積分）</strong>：
                        <InlineMath math="\text{rot}\, \mathbf{F} = (0, 0, 1 - (-1)) = (0, 0, 2)" /> となります。
                        曲面 <InlineMath math="S" /> の法線ベクトルの <InlineMath math="z" /> 成分を用いた面積分は、
                        <BlockMath math="\begin{aligned} \iint_S (0, 0, 2) \cdot \mathbf{n}\, dS &= \iint_D 2\, dA \\ &= 2 \times (\text{円の面積}) = 2\pi \end{aligned}" />
                        （ここで <InlineMath math="D" /> は単位円板）となり、両辺が一致します。
                    </div>
                </div>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ストークスの定理</strong>：境界での循環を、曲面全体での渦（回転）の集計に変換する。</li>
                    <li><strong>右ねじの法則</strong>：面を貫く法線の向きが、境界の回る向きを決定する。</li>
                    <li><strong>普遍性</strong>：グリーンの定理を包含し、3 次元空間内の任意の曲面に適用できる強力な積分定理。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
