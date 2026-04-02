import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RotationAndCurl() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ベクトル場の「発散」が湧き出しという「広がり」の性質を表したのに対し、このセクションで学ぶ「回転（ローテーション/カール）」は、その場の「渦」の性質を記述します。
                回転は、流体がどの地点で、どの軸を中心にして、どれくらいの強さで回ろうとしているかを示します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">回転の定義</h2>

            <p>
                回転は、ハミルトン演算子 <InlineMath math="\nabla" /> とベクトル場 <InlineMath math="\mathbf{F}" /> の形式的な「外積」として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (回転：rot / curl)">
                <p>
                    <InlineMath math="C^1" /> 級ベクトル場 <InlineMath math="\mathbf{F} = (F_1, F_2, F_3)" /> の<strong>回転 (rotation / curl)</strong> を次のように定義する：
                    <BlockMath math="\nabla \times \mathbf{F} = \text{rot}\, \mathbf{F} = \text{curl}\, \mathbf{F} = \begin{vmatrix} \mathbf{e}_1 & \mathbf{e}_2 & \mathbf{e}_3 \\ \partial_x & \partial_y & \partial_z \\ F_1 & F_2 & F_3 \end{vmatrix}" />
                    成分ごとに書き下すと以下のようになる：
                    <BlockMath math="\left(\frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z},\; \frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x},\; \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y}\right)" />
                </p>
            </ContentBox>

            <p>
                定義式が複雑に見えますが、行列式の形式で覚えるのが一般的です。
                計算結果は再び「ベクトル」になるという点に注意してください。
            </p>

            <ContentBox type="remark" title="回転の直感的な意味">
                <p>
                    点 <InlineMath math="\mathbf{p}" /> における回転ベクトル <InlineMath math="\text{rot}\, \mathbf{F}(\mathbf{p})" /> は、以下の物理的意味を持ちます：
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>方向</strong>：渦が回転しようとしている軸の方向を表す（右ねじの法則に従う）。</li>
                    <li><strong>大きさ</strong>：その地点での「回転の激しさ（循環密度）」を表す。</li>
                    <li><strong>非回転場</strong>： <InlineMath math="\text{rot}\, \mathbf{F} = \mathbf{0}" /> となる場を「渦なしの場」あるいは<strong>非回転的 (irrotational)</strong> な場という。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な計算例</h2>

            <p>
                最も典型的な回転の例として、剛体の回転運動から生じる速度場を考えてみましょう。
            </p>

            <ContentBox type="example" title="Example 1.3-1 (剛体回転の速度場)">
                <p>
                    角速度 <InlineMath math="\boldsymbol{\omega} = (0, 0, \omega)" /> で <InlineMath math="z" /> 軸まわりに回転している剛体を考えます。
                    各点の速度ベクトルは <InlineMath math="\mathbf{v} = \boldsymbol{\omega} \times \mathbf{r} = (-\omega y, \omega x, 0)" /> となります。
                    この速度場の回転を計算すると：
                    <BlockMath math="\begin{aligned} \text{rot}\, \mathbf{v} &= \left( \frac{\partial 0}{\partial y} - \frac{\partial(\omega x)}{\partial z},\; \frac{\partial(-\omega y)}{\partial z} - \frac{\partial 0}{\partial x},\; \frac{\partial(\omega x)}{\partial x} - \frac{\partial(-\omega y)}{\partial y} \right) \\ &= (0 - 0,\; 0 - 0,\; \omega - (-\omega)) \\ &= (0, 0, 2\omega) \end{aligned}" />
                    計算結果は <InlineMath math="2\boldsymbol{\omega}" /> となり、<strong>回転（渦度）の大きさは角速度の2倍</strong>になることがわかります。
                </p>
            </ContentBox>

            <p>
                次に、ベクトル場が変化していても「渦」が存在しない例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 1.3-2 (渦なし場)">
                <p>
                    ベクトル場 <InlineMath math="\mathbf{F} = (x^2 - y^2,\, -2xy,\, 0)" /> について回転を計算します。
                    <BlockMath math="\begin{aligned} \text{rot}\, \mathbf{F} &= \left( 0, 0,\; \frac{\partial(-2xy)}{\partial x} - \frac{\partial(x^2 - y^2)}{\partial y} \right) \\ &= (0, 0, -2y - (-2y)) \\ &= (0, 0, 0) \end{aligned}" />
                    この場は複雑に変化していますが、どの点においても微小な「渦」は存在しない（非回転である）ことがわかります。
                </p>
            </ContentBox>

            <p>
                回転の概念は、電磁気学におけるマクスウェル方程式（特に磁場の発生や電磁誘導）を記述するために不可欠な道具です。
                また、保存力場（勾配場）は常に回転がゼロになるという重要な性質があり、これは次節以降で詳しく扱います。
            </p>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>回転 (rot/curl)</strong>：ベクトル場の「渦」の強さと向きを表すベクトル量。</li>
                    <li><strong>定義</strong>：ナブラ演算子 <InlineMath math="\nabla" /> とベクトル場 <InlineMath math="\mathbf{F}" /> の外積。</li>
                    <li><strong>右ねじの法則</strong>：回転ベクトルの向きは、渦が回る方向に対して右ねじが進む方向を向く。</li>
                    <li><strong>物理的意義</strong>：流体内の微小な羽根車がその地点で回るかどうか、その回転軸はどちらかを決定する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
