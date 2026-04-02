import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_12_3() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                1変数の積分において「置換積分（変数変換）」が計算の強力な切り札であったように、重積分においても変数を全く新しい座標系に変換することで、積分領域や被積分関数を劇的に簡単な形に直すことができます。
                その最も代表的で重要な例が<strong>極座標（Polar coordinates）</strong>への変換です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極座標変換の公式</h2>

            <p>
                デカルト座標（直交座標）<InlineMath math="(x, y)" /> と極座標 <InlineMath math="(r, \theta)" /> の間には、次の関係式があります。
            </p>
            <BlockMath math="x = r \cos \theta, \quad y = r \sin \theta \quad (r \ge 0, \ 0 \le \theta < 2\pi)" />
            <p>
                積分変数を <InlineMath math="(x, y)" /> から <InlineMath math="(r, \theta)" /> へ変更するとき、単に関数を代入するだけでなく、微小面積要素 <InlineMath math="dx \, dy" /> が <InlineMath math="dr \, d\theta" /> に対してどれだけの倍率で変化するかを考慮する必要があります。この「面積の拡大・縮小率」を表すのが<strong>ヤコビアン</strong>（Jacobi行列式）です。
            </p>

            <ContentBox type="theorem" title="Theorem 12.3-1 (二重積分の極座標変換)">
                <p>
                    <InlineMath math="xy" /> 平面上の領域 <InlineMath math="D" /> が、極座標 <InlineMath math="(r, \theta)" /> における領域 <InlineMath math="E" /> と1対1に対応しているとする。
                    このとき、二重積分は次のように変換される：
                </p>
                <BlockMath math="\iint_D f(x, y) \, dx \, dy = \iint_E f(r \cos \theta, r \sin \theta) \, r \, dr \, d\theta" />
                <p className="mt-2">
                    すなわち、微小面積要素は <InlineMath math="dx \, dy = r \, dr \, d\theta" /> と変換される。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [ヤコビアンの導出]">
                <p>
                    変数変換 <InlineMath math="\mathbf{x} = \mathbf{x}(\mathbf{u})" /> （すなわち <InlineMath math="x = x(u, v), y = y(u, v)" />）における「面積の拡大率」は、その関数の偏微分で構成されるヤコビ行列 <InlineMath math="J" /> の行列式の絶対値 <InlineMath math="|\det J|" /> で与えられる（次節 Theorem 12.4-1 の2次元版）。
                </p>
                <p className="mt-2">
                    極座標変換 <InlineMath math="x(r, \theta) = r \cos \theta, \ y(r, \theta) = r \sin \theta" /> におけるヤコビ式 <InlineMath math="\frac{\partial(x, y)}{\partial(r, \theta)}" /> を計算する。
                </p>
                <BlockMath math="\begin{aligned}
                                    \frac{\partial(x, y)}{\partial(r, \theta)} &= \det \begin{pmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{pmatrix} \\
                                    &= \det \begin{pmatrix} \cos \theta & -r \sin \theta \\ \sin \theta & r \cos \theta \end{pmatrix} \\
                                    &= (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta) \\
                                    &= r \cos^2 \theta + r \sin^2 \theta \\
                                    &= r (\cos^2 \theta + \sin^2 \theta) \\
                                    &= r
                                \end{aligned}" />
                <p className="mt-2">
                    積分における変数変換公式では、微小面積要素 <InlineMath math="dx \, dy" /> はヤコビアンの絶対値を掛けて変換される。極座標では定常的に <InlineMath math="r \ge 0" /> なので、絶対値はそのまま <InlineMath math="r" /> となる。
                </p>
                <BlockMath math="dx \, dy = \left| \frac{\partial(x, y)}{\partial(r, \theta)} \right| dr \, d\theta = r \, dr \, d\theta" />
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    （※幾何学的には、半径 <InlineMath math="r" /> の位置で角度が <InlineMath math="\Delta \theta" /> だけ開いた扇形の微小な弧の長さは <InlineMath math="r \Delta \theta" />、動径方向の厚みは <InlineMath math="\Delta r" /> であるため、微小面積はほぼ長方形とみなせて <InlineMath math="(r \Delta \theta) \times (\Delta r) = r \Delta r \Delta \theta" /> となることと一致する。）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガウス積分</h2>

            <p>
                極座標変換が圧倒的な威力を発揮する最も有名な例が、統計学の正規分布などで現れる<strong>ガウス積分</strong>の計算です。
                関数 <InlineMath math="e^{-x^2}" /> は初等関数のみで不定積分を書くことが「絶対に不可能」であることが数学的に証明されています。しかし、<InlineMath math="-\infty" /> から <InlineMath math="\infty" /> までの「定積分」の値は、二重積分を迂回することで正確に計算することができるのです。
            </p>

            <ContentBox type="example" title="Example 12.3-1 (ガウス積分の導出)">
                <p>
                    次の定積分の値を求めよ。
                </p>
                <BlockMath math="I = \int_{-\infty}^{\infty} e^{-x^2} \, dx" />

                <p className="font-bold text-slate-700 dark:text-slate-300 mt-4">[解答]</p>
                <p className="mt-2">
                    積分値 <InlineMath math="I" /> の2乗、すなわち <InlineMath math="I^2" /> を考える。積分変数が異なっていても定積分の値は同じなので、<InlineMath math="I = \int_{-\infty}^{\infty} e^{-y^2} \, dy" /> とも書ける。両者を掛け合わせると：
                </p>
                <BlockMath math="\begin{aligned}
                                    I^2 &= \left( \int_{-\infty}^{\infty} e^{-x^2} \, dx \right) \left( \int_{-\infty}^{\infty} e^{-y^2} \, dy \right) \\
                                    &= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-x^2} e^{-y^2} \, dx \, dy \quad (\text{フビニの定理の逆}) \\
                                    &= \iint_{\mathbb{R}^2} e^{-(x^2 + y^2)} \, dx \, dy
                                \end{aligned}" />
                <p className="mt-2">
                    ここで、積分領域 <InlineMath math="\mathbb{R}^2" />（全平面）に対して極座標変換 <InlineMath math="x = r \cos \theta, y = r \sin \theta" /> を行う。<InlineMath math="x^2 + y^2 = r^2" /> であり、全平面は <InlineMath math="0 \le r < \infty" /> かつ <InlineMath math="0 \le \theta \le 2\pi" /> という長方形的な単純な領域 <InlineMath math="E" /> に変換される。
                    面積要素は <InlineMath math="dx \, dy = r \, dr \, d\theta" /> となる。
                </p>
                <BlockMath math="\begin{aligned}
                                    I^2 &= \int_0^{2\pi} \int_0^{\infty} e^{-r^2} \, r \, dr \, d\theta \\
                                    &= \left( \int_0^{2\pi} d\theta \right) \left( \int_0^{\infty} r e^{-r^2} \, dr \right)
                                \end{aligned}" />
                <p className="mt-2">
                    このように、全平面を極座標に変換したことで積分が <InlineMath math="r" /> と <InlineMath math="\theta" /> で完全に分離された！
                    第一項は単に <InlineMath math="[\theta]_0^{2\pi} = 2\pi" /> である。
                    第二項は、<InlineMath math="-r^2" /> の微分が <InlineMath math="-2r" /> であることに着目すれば、直接積分できる。
                </p>
                <BlockMath math="\int_0^{\infty} r e^{-r^2} \, dr = \left[ -\frac{1}{2} e^{-r^2} \right]_0^{\infty} = 0 - \left( -\frac{1}{2} e^0 \right) = \frac{1}{2}" />
                <p className="mt-2">
                    したがって、
                </p>
                <BlockMath math="I^2 = 2\pi \times \frac{1}{2} = \pi" />
                <p className="mt-2">
                    <InlineMath math="e^{-x^2} > 0" /> よりその積分 <InlineMath math="I" /> も正であるから、両辺の平方根をとって
                </p>
                <BlockMath math="I = \int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}" />
                <p className="mt-2">
                    という驚くべく美しい結果が得られる。
                </p>
            </ContentBox>

        </section>
    );
}
