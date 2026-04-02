import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function VariableTransformation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                1変数の定積分における「置換積分」は、複雑な積分を極めて容易にする強力なツールでした。
                重積分においても変数を全く別の座標系（変数）に置き換えることができますが、変数が複数あるため、変換によって<strong>「面積（や体積）の変化率」</strong>が異なることを考慮しなければなりません。
                この変化率を表すのが<strong>ヤコビアン (Jacobian)</strong> です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 変数変換とヤコビアン
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">変数変換とヤコビ行列式（ヤコビアン）</h2>

            <p>
                平面上の変数 <InlineMath math="(x,y)" /> を新しい変数 <InlineMath math="(u,v)" /> で表す（<InlineMath math="x = x(u,v), y = y(u,v)" />）とき、微小な面積要素 <InlineMath math="dx dy" /> に対して、それが新しい世界でどのような面積になるのかを調整する係数が必要です。
            </p>

            <ContentBox type="definition" title="Definition 6.3-1 （ヤコビアン / Jacobian）">
                <p>
                    2変数関数 <InlineMath math="x(u,v), y(u,v)" /> に対して、偏導関数を成分とする次の行列式（ヤコビ行列式）のことを、<InlineMath math="u,v" /> に関する <InlineMath math="x,y" /> の<strong>ヤコビアン</strong>といい、<InlineMath math="J" /> または <InlineMath math="\displaystyle \frac{\partial(x,y)}{\partial(u,v)}" /> と表す。
                </p>
                <BlockMath math="J = \frac{\partial(x,y)}{\partial(u,v)} = \det \begin{pmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{pmatrix} = \left| \begin{matrix} x_u & x_v \\ y_u & y_v \end{matrix} \right| = x_u y_v - x_v y_u" />
                <p className="mt-2 text-sm text-slate-500">
                    ※ 1変数の置換積分における <InlineMath math="dx = \frac{dx}{du} du" /> の「<InlineMath math="\frac{dx}{du}" />」を多変数に拡張したものが、この「ヤコビの行列式 <InlineMath math="J" />」に当たります。行列式は「線形変換による面積の拡大率」を意味するため、まさに求めていた係数です。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 6.3-1 （二重積分の変数変換公式）">
                <p>
                    積分領域 <InlineMath math="D" /> が、<InlineMath math="uv" /> 平面上の領域 <InlineMath math="E" /> からの変数変換 <InlineMath math="x = x(u,v), y=y(u,v)" /> によって写されるとする。
                    このとき、二重積分は以下のように置き換えられる：
                </p>
                <BlockMath math="\iint_D f(x, y) \, dx dy = \iint_E f(x(u,v), y(u,v)) \underbrace{| J |}_{\rm 拡大率} \, du dv" />
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-bold">
                    【注意】面積は正である必要があるため、必ずヤコビアンの「絶対値」 <InlineMath math="|J|" /> を掛けます。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 6.3-2 （三重積分の変数変換公式）">
                <p>
                    三重積分においても全く同様に、3変数の変換 <InlineMath math="x(u,v,w), y(u,v,w), z(u,v,w)" /> に対する3次のヤコビ行列式 <InlineMath math="J" /> を用いて変数変換ができる。
                </p>
                <BlockMath math="J = \frac{\partial(x,y,z)}{\partial(u,v,w)} = \det \begin{pmatrix} x_u & x_v & x_w \\ y_u & y_v & y_w \\ z_u & z_v & z_w \end{pmatrix}" />
                <BlockMath math="\iiint_V f(x,y,z) \, dx dy dz = \iiint_W f(x,y,z) \, |J| \, du dv dw" />
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-1 （平行四辺形領域での変数変換）">
                <p>
                    <InlineMath math="D" /> を4直線 <InlineMath math="x+2y = 0, x+2y = 2, 2x-y = 0, 2x-y = 3" /> で囲まれた平行四辺形の領域とするとき、二重積分 <InlineMath math="\iint_D (x+2y) \, dx dy" /> を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    境界を与える関数の形に合わせて、<InlineMath math="u = x+2y, \,\,\, v = 2x-y" /> とおく。<br />
                    このとき新しい変数 <InlineMath math="u, v" /> が動く領域 <InlineMath math="E" /> は <InlineMath math="0 \le u \le 2, \,\,\, 0 \le v \le 3" /> となり、単純なきれいな長方形になった。
                </p>
                <p>
                    ヤコビアン <InlineMath math="J = \frac{\partial(x,y)}{\partial(u,v)}" /> を求めるために、<InlineMath math="x, y" /> を <InlineMath math="u, v" /> について解く：
                </p>
                <BlockMath math="\begin{cases} u = x+2y \\ v = 2x-y \end{cases} \implies \begin{cases} x = \frac{u+2v}{5} \\ y = \frac{2u-v}{5} \end{cases}" />
                <p>偏微分してヤコビアンを計算する：</p>
                <BlockMath math="\begin{aligned} J &= \left| \begin{matrix} x_u & x_v \\ y_u & y_v \end{matrix} \right| = \left| \begin{matrix} \frac{1}{5} & \frac{2}{5} \\ \frac{2}{5} & -\frac{1}{5} \end{matrix} \right| \\ &= \left(\frac{1}{5}\right)\left(-\frac{1}{5}\right) - \left(\frac{2}{5}\right)\left(\frac{2}{5}\right) \\ &= -\frac{1}{25} - \frac{4}{25} = -\frac{1}{5} \end{aligned}" />
                <p>
                    定理の公式にあてはめる（ヤコビアンは<strong>絶対値</strong> <InlineMath math="|J| = \frac{1}{5}" /> を使うことに注意）。
                </p>
                <BlockMath math="\begin{aligned} \iint_D (x+2y) \, dx dy &= \iint_E u \, |J| \, du dv \\ &= \int_0^3 \left( \int_0^2 u \cdot \frac{1}{5} \, du \right) dv \\ &= \frac{1}{5} \left( \int_0^3 1 \, dv \right) \left( \int_0^2 u \, du \right) \\ &= \frac{1}{5} \times 3 \times \left[ \frac{u^2}{2} \right]_0^2 = \frac{3}{5} \times 2 = \frac{6}{5} \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>重積分の置換積分（変数変換）を行うときは、微小面積や微小体積の変化率を補正する係数が必要となる。このための行列式を<strong>ヤコビアン</strong>と呼ぶ（Definition 6.3-1）。</li>
                    <li>ヤコビアンは、各変数の偏導関数を並べた行列の行列式の値である。</li>
                    <li>積分を変換する際は、必ずヤコビアンの<strong>絶対値</strong> <InlineMath math="|J|" /> を掛ける（Theorem 6.3-1, Theorem 6.3-2）。</li>
                    <li>境界が複雑な領域でも、適切な変数変換で「長方形領域（定数範囲）」に直せば、計算が劇的に楽になる（Example 6.3-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
