import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VectorSurfaceIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「ベクトル場の面積分」は、曲面を通り抜けるベクトル（流れ）の総量を計算する操作です。
                これは物理学における「フラックス（流束）」に対応し、ガウスの法則や連続の式を記述する上で欠かせない概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲面の向き</h2>

            <p>
                「面を通り抜ける量」を考えるためには、どちらが表でどちらが裏か、という「向き」を定める必要があります。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 (向きつき曲面)">
                <p>
                    曲面 <InlineMath math="S" /> 上の各点において、単位法線ベクトル <InlineMath math="\hat{\mathbf{n}}" /> を連続的に定めることができるとき、 <InlineMath math="S" /> は<strong>向き付け可能 (orientable) </strong>であるという。
                    一つの法線ベクトル方向を選択した曲面を<strong>向きつき曲面</strong>と呼ぶ。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-slate-600 dark:text-slate-400">
                    <li><strong>閉曲面</strong>の場合（領域の境界）：通常、内部から外部へ向かう方向を「外向き正」とする。</li>
                    <li><strong>開曲面</strong>の場合：境界曲線の向きと右ねじの法則で結びつけられる（第 7 章）。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトル場の面積分（フラックス）</h2>

            <p>
                曲面において、面に垂直な成分のみが「面を通り抜ける」ことに寄与します。
            </p>

            <ContentBox type="definition" title="Definition 5.4-2 (ベクトル場の面積分)">
                <p>
                    向きつき曲面 <InlineMath math="S" /> を貫くベクトル場 <InlineMath math="\mathbf{F}" /> の<strong>面積分</strong>、または<strong>フラックス (flux) </strong>を次のように定義する：
                    <BlockMath math="\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S (\mathbf{F} \cdot \hat{\mathbf{n}})\, dS" />
                    パラメータ表示 <InlineMath math="\mathbf{r}(u, v)" /> を用いると、次のように書き換えられる：
                    <BlockMath math="\iint_D \mathbf{F}(\mathbf{r}(u, v)) \cdot (\mathbf{r}_u \times \mathbf{r}_v)\, du\, dv" />
                </p>
            </ContentBox>

            <ContentBox type="remark" title="物理的意味：体積流量">
                <p>
                    <InlineMath math="\mathbf{F}" /> が流体の速度場である場合、この積分は単位時間あたりに曲面 <InlineMath math="S" /> を通過する液体の体積（体積流量）を表します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 5.4-1 (一様な流れのフラックス)">
                <p>
                    速度場 <InlineMath math="\mathbf{F} = (0, 0, 1)" /> （上向きの一様な流れ）が、 <InlineMath math="xy" /> 平面上の半径 <InlineMath math="R" /> の円板 <InlineMath math="S" /> を通るフラックスを求めます。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                    <p>
                        円板の（上向き）単位法線ベクトルは <InlineMath math="\hat{\mathbf{n}} = (0, 0, 1)" /> です。
                    </p>
                    <BlockMath math="\begin{aligned} \iint_S \mathbf{F} \cdot d\mathbf{S} &= \iint_S (0, 0, 1) \cdot (0, 0, 1)\, dS \\ &= \iint_S 1\, dS = \pi R^2 \end{aligned}" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-2 (放射状の場のフラックス)">
                <p>
                    中心から放射状に広がるベクトル場 <InlineMath math="\mathbf{F} = (x, y, z) = \mathbf{r}" /> の、半径 <InlineMath math="R" /> の球面 <InlineMath math="S" /> を通る外向きフラックスを求めます。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-4">
                    <p>
                        球面上の点における外向き単位法線ベクトル <InlineMath math="\hat{\mathbf{n}}" /> は、まさに動径方向の単位ベクトル <InlineMath math="\mathbf{r}/R" /> です。
                    </p>
                    <BlockMath math="\begin{aligned} \mathbf{F} \cdot \hat{\mathbf{n}} &= \mathbf{r} \cdot \frac{\mathbf{r}}{R} = \frac{|\mathbf{r}|^2}{R} = \frac{R^2}{R} = R \end{aligned}" />
                    <p>
                        したがって、求める積分は：
                    </p>
                    <BlockMath math="\iint_S R\, dS = R \iint_S dS = R \times (4\pi R^2) = 4\pi R^3" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>面の向き</strong>：フラックスの正負を決定する法線の選択。</li>
                    <li><strong>内積の意味</strong>：面に垂直な成分のみを抽出して集計する。</li>
                    <li><strong>計算法</strong>：パラメータ表示による内積の重積分（<InlineMath math="du, dv" />）に帰着させる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
