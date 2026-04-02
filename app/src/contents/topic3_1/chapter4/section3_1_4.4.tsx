import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VectorInterpretations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                グリーンの定理は、単なる 2 変数関数の積分公式にとどまらず、ベクトル場の「回転」や「発散」といった物理量と結びつくことで、より深い意味を持ちます。
                ここでは、定理をベクトル演算子の形式で書き換え、その幾何学的な意味を具体的な計算例とともに学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">接線形式（循環形式）</h2>

            <p>
                グリーンの定理の標準的な形は、ベクトル場を経路の「進む向き」に投影して集計したものです。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 (接線形式のグリーンの定理)">
                <p>
                    平面ベクトル場 <InlineMath math="\mathbf{F} = (P, Q)" /> に対し、次の等式が成り立つ：
                    <BlockMath math="\oint_{\partial D} \mathbf{F} \cdot d\mathbf{r} = \iint_D (\text{rot}_z \mathbf{F})\, dA" />
                    ここで <InlineMath math="\text{rot}_z \mathbf{F} = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}" /> は、ベクトル場の回転（渦の密度）の垂直成分である。
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
                    ※ これは「境界に沿った循環（流れの正味の回転）」が「内部の渦の総和」に等しいことを示しています。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-1 (循環の計算例)">
                <p>
                    回転するベクトル場 <InlineMath math="\mathbf{F} = (-y, x)" /> について、一辺の長さが <InlineMath math="a" /> の正方形領域 <InlineMath math="D = [0, a] \times [0, a]" /> で定理を確認します。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-4">
                    <div>
                        <strong>(1) 内部の回転の積分</strong>：
                        <InlineMath math="\text{rot}_z \mathbf{F} = \partial_x(x) - \partial_y(-y) = 1 - (-1) = 2" /> なので、
                        <BlockMath math="\iint_D 2\, dA = 2 \times a^2 = 2a^2" />
                    </div>
                    <div>
                        <strong>(2) 境界に沿った循環</strong>：
                        正方形の 4 辺を順に積分すると、 <InlineMath math="y=0" /> と <InlineMath math="x=a" /> の辺などで寄与が蓄積され、最終的に <InlineMath math="2a^2" /> となります。
                    </div>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">法線形式（フラックス形式）</h2>

            <p>
                ベクトル場を境界の「外向き法線方向」に投影して集計すると、別の重要な形式が得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-2 (法線形式のグリーンの定理)">
                <p>
                    境界の外向き単位法線ベクトルを <InlineMath math="\mathbf{n}" /> とすると、次の等式が成り立つ：
                    <BlockMath math="\oint_{\partial D} \mathbf{F} \cdot \mathbf{n}\, ds = \iint_D (\text{div}\, \mathbf{F})\, dA" />
                    ここで <InlineMath math="\text{div}\, \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}" /> は、ベクトル場の発散（湧き出しの密度）である。
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
                    ※ これは「境界を通り抜ける総流量（フラックス）」が「内部の湧き出しの総和」に等しいことを示しています。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-2 (フラックスの計算例)">
                <p>
                    放射状に広がる場 <InlineMath math="\mathbf{F} = (x, y)" /> について、半径 <InlineMath math="R" /> の円領域 <InlineMath math="D" /> で定理を確認します。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-4">
                    <div>
                        <strong>(1) 内部の発散の積分</strong>：
                        <InlineMath math="\text{div}\, \mathbf{F} = \partial_x x + \partial_y y = 1 + 1 = 2" /> なので、
                        <BlockMath math="\begin{aligned} \iint_D 2\, dA &= 2 \times (\text{面積}) \\ &= 2 \times \pi R^2 = 2\pi R^2 \end{aligned}" />
                    </div>
                    <div>
                        <strong>(2) 境界のフラックス</strong>：
                        円周上で <InlineMath math="\mathbf{F}" /> は常に外向き法線 <InlineMath math="\mathbf{n}" /> と同じ向きで、大きさは <InlineMath math="R" /> です。
                        <BlockMath math="\begin{aligned} \oint_{\partial D} \mathbf{F} \cdot \mathbf{n}\, ds &= \oint_{\partial D} R\, ds \\ &= R \times (\text{円周の長さ}) \\ &= R \times 2\pi R = 2\pi R^2 \end{aligned}" />
                    </div>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">まとめと展望</h2>

            <ContentBox type="remark" title="積分定理の階層">
                <p>
                    これらのベクトル形式は、高次元への架け橋となります：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>接線形式</strong>：3 次元空間における「ストークスの定理」の平面版です。</li>
                    <li><strong>法線形式</strong>：3 次元空間における「ガウスの発散定理」の平面版です。</li>
                </ul>
                <p className="mt-4">
                    次章からは、これらの定理を 3 次元へと拡張し、電磁気学や流体力学の基礎となるより強力な道具を学んでいきます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>循環形式</strong>：回転の内部和 ＝ 境界の循環。渦の保存則。</li>
                    <li><strong>法線形式</strong>：発散の内部和 ＝ 境界のフラックス。物質の保存則。</li>
                    <li><strong>本質</strong>：ミクロな場（微分）とマクロな量（積分）を繋ぐ強力な手段である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
