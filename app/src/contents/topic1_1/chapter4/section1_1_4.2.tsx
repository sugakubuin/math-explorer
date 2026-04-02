import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function Determinant3x3() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                <InlineMath math="2 \times 2" /> 行列式の考え方を <InlineMath math="3 \times 3" /> 行列に拡張します。
                ここで登場する「サラスの方法」は、3次行列の計算において非常に便利な公式です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 3次行列式とサラスの方法
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">3次行列式とサラスの方法</h2>

            {/* Definition 4.2-1 */}
            <ContentBox type="definition" title="Definition 4.2-1 （3次の行列式）">
                <p>
                    <InlineMath math="3 \times 3" /> 行列 <InlineMath math="A = [a_{ij}]" /> の行列式は、次の式で定義される。
                </p>
                <BlockMath math="\begin{aligned}|A| = &a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32}\\ &- a_{13}a_{22}a_{31} - a_{12}a_{21}a_{33} - a_{11}a_{23}a_{32}\end{aligned}" />
                <p>
                    この式は項数が6つあり複雑に見えるが、図形的な覚え方（<strong>サラスの方法</strong>）がある。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="サラスの方法（Sarrus' rule）">
                <p className="mb-4">
                    行列の成分を斜めに掛けて足し引きする覚え方です。
                </p>
                <div className="flex justify-center items-center gap-8 my-6">
                    <div className="text-center">
                        <p className="font-bold text-blue-600 mb-2">プラス項（＋）</p>
                        <p>左上から右下へ3本</p>
                        <BlockMath math="\searrow \searrow \searrow" />
                    </div>
                    <div className="text-center">
                        <p className="font-bold text-red-600 mb-2">マイナス項（－）</p>
                        <p>右上から左下へ3本</p>
                        <BlockMath math="\swarrow \swarrow \swarrow" />
                    </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    ※ サラスの方法は <InlineMath math="3 \times 3" /> までの行列式でしか使えません。
                    <InlineMath math="4 \times 4" /> 以上では成り立たないので注意が必要です（後述の「余因子展開」を使います）。
                </p>
            </ContentBox>

            {/* Example 4.2-1 */}
            <ContentBox type="example" title="Example 4.2-1">
                <p>次の行列の行列式を求めよ。</p>
                <BlockMath math="A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>サラスの方法に従って計算する。</p>
                <p className="font-bold text-blue-600 mt-2">プラスの項：</p>
                <BlockMath math="1 \cdot 5 \cdot 9 = 45" />
                <BlockMath math="2 \cdot 6 \cdot 7 = 84" />
                <BlockMath math="3 \cdot 4 \cdot 8 = 96" />
                <p className="font-bold text-red-600 mt-2">マイナスの項：</p>
                <BlockMath math="3 \cdot 5 \cdot 7 = 105" />
                <BlockMath math="2 \cdot 4 \cdot 9 = 72" />
                <BlockMath math="1 \cdot 6 \cdot 8 = 48" />

                <p className="mt-4">これらを合わせると：</p>
                <BlockMath math="|A| = (45 + 84 + 96) - (105 + 72 + 48)" />
                <BlockMath math="|A| = 225 - 225 = 0" />
            </ContentBox>

            <ContentBox type="note" title="Note">
                <p>
                    この行列は、第2行から第1行を引くと <InlineMath math="(3, 3, 3)" />、第3行から第2行を引くと <InlineMath math="(3, 3, 3)" /> となり、
                    行同士に従属関係がある（行ベクトルが平行である）ことがわかります。
                    このような場合、行列式は必ず 0 になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* Example 4.2-2 */}
            <h2 className="text-2xl font-bold mt-8 mb-6">練習問題</h2>

            <ContentBox type="example" title="Example 4.2-2">
                <p>次の行列式を計算せよ。</p>
                <BlockMath math="B = \begin{pmatrix} 2 & 0 & 1 \\ 3 & 4 & 2 \\ 1 & 5 & 3 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <BlockMath math="
                    \begin{aligned}
                    |B| &= 2 \cdot 4 \cdot 3 + 0 \cdot 2 \cdot 1 + 1 \cdot 3 \cdot 5 \\
                        &- (1 \cdot 4 \cdot 1 + 0 \cdot 3 \cdot 3 + 2 \cdot 2 \cdot 5) \\
                    &= (24 + 0 + 15) - (4 + 0 + 20) \\
                    &= 39 - 24 \\
                    &= 15
                    \end{aligned}
                " />
                <BlockMath math="|B| = 39 - 24 = 15" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="3 \times 3" /> 行列式には、斜めに掛ける「サラスの方法」が便利。</li>
                    <li>
                        正の項（<InlineMath math="\searrow" />）と負の項（<InlineMath math="\swarrow" />）を間違えないように注意すること。
                    </li>
                    <li><InlineMath math="4 \times 4" /> 以上ではサラスの方法は使えない（次節の余因子展開へ）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
