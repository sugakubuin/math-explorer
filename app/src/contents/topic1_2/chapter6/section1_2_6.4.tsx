import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function PolarAndOtherCoordinates() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「円」や「球」のような丸い対称性を持った積分領域に対しては、通常の直交座標 <InlineMath math="(x,y,z)" /> のまま計算すると（<InlineMath math="\sqrt{a^2 - x^2}" /> のような平方根が現れるなどして）積分が非常に難しくなります。
                前節で学んだヤコビアンを用いた変数変換を用いて、これらに特化した座標系（極座標、円柱座標、球座標）へ適宜変更することが、重積分を突破する定石です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 極座標
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">極座標（2次元）</h2>

            <ContentBox type="definition" title="Definition 6.4-1 （極座標 / Polar coordinates）">
                <p>
                    <InlineMath math="xy" /> 平面上の点 <InlineMath math="(x,y)" /> を、原点からの距離 <InlineMath math="r" /> と、<InlineMath math="x" /> 軸の正の向きから測った角度（偏角） <InlineMath math="\theta" /> によって <InlineMath math="(r, \theta)" /> と表す。
                </p>
                <BlockMath math="x = r \cos \theta, \quad y = r \sin \theta \quad (r \ge 0, \,\,\, 0 \le \theta \le 2\pi)" />
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 6.4-1 （極座標のヤコビアンと二重積分公式）">
                <p>
                    極座標変換のヤコビアン <InlineMath math="J" /> を計算すると：
                </p>
                <BlockMath math="\begin{aligned} J &= \frac{\partial(x,y)}{\partial(r,\theta)} = \left| \begin{matrix} x_r & x_\theta \\ y_r & y_\theta \end{matrix} \right| \\ &= \left| \begin{matrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{matrix} \right| \\ &= r(\cos^2\theta + \sin^2\theta) = r \end{aligned}" />
                <p>
                    <InlineMath math="r \ge 0" /> なので絶対値を取る必要もない。<br />
                    したがって、微小面積は <InlineMath math="dx dy = r \, dr d\theta" /> と置き換えられる。
                </p>
                <BlockMath math="\iint_D f(x,y) \, dx dy = \iint_E f(r\cos\theta, r\sin\theta) \cdot r \, dr d\theta" />
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-1 （ガウス積分）">
                <p>
                    極座標変換のもっとも有名な応用として、統計学や物理学の至る所に現れる「ガウス積分」 <InlineMath math="\displaystyle I = \int_{-\infty}^\infty e^{-x^2} dx" /> の計算がある。<br />
                    ※ <InlineMath math="e^{-x^2}" /> の原始関数は初等関数で表せないため、直接計算は不可能である。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>巧妙なテクニックとして、<InlineMath math="I" /> の2乗（二重積分）を考える：</p>
                <BlockMath math="I^2 = \left( \int_{-\infty}^\infty e^{-x^2} dx \right) \left( \int_{-\infty}^\infty e^{-y^2} dy \right) = \iint_{\mathbb{R}^2} e^{-(x^2+y^2)} \, dx dy" />
                <p>
                    積分領域は全平面（<InlineMath math="-\infty < x < \infty, -\infty < y < \infty" />）である。<br />
                    極座標 <InlineMath math="x = r\cos\theta, y = r\sin\theta" /> に変換すると、領域は <InlineMath math="0 \le r < \infty, \, 0 \le \theta \le 2\pi" /> に相当し、<InlineMath math="x^2+y^2 = r^2" />、<InlineMath math="dxdy = r \, dr d\theta" /> となる。
                </p>
                <BlockMath math="I^2 = \int_0^{2\pi} \left( \int_0^\infty e^{-r^2} \cdot r \, dr \right) d\theta" />
                <p>
                    内側の積分について、<InlineMath math="t = r^2" /> (\implies <InlineMath math="dt = 2r \, dr" />) と置換すると：
                </p>
                <BlockMath math="\int e^{-r^2} r \, dr = \frac{1}{2} \int e^{-t} dt = -\frac{1}{2} e^{-r^2}" />
                <p>これを定積分すると <InlineMath math="\displaystyle \Big[-\frac{1}{2}e^{-r^2}\Big]_0^\infty = 0 - \left(-\frac{1}{2}\right) = \frac{1}{2}" />。</p>
                <p>残りの <InlineMath math="\theta" /> 積分の計算はそのまま <InlineMath math="2\pi" /> となるので、</p>
                <BlockMath math="I^2 = \int_0^{2\pi} \frac{1}{2} \, d\theta = \frac{1}{2} \times 2\pi = \pi" />
                <p>
                    <InlineMath math="I > 0" /> なので <InlineMath math="I = \sqrt{\pi}" />。<br />
                    驚くべきことに、円の要素が全く見えない積分結果から <InlineMath math="\pi" /> が現れるのである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 円柱座標
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">円柱座標（3次元）</h2>

            <ContentBox type="definition" title="Definition 6.4-2 （円柱座標 / Cylindrical coordinates）">
                <p>
                    空間内の点 <InlineMath math="(x,y,z)" /> の <InlineMath math="(x,y)" /> 平面部分だけを極座標で表し、<InlineMath math="z" /> 軸はそのままとした座標系。
                </p>
                <BlockMath math="x = r \cos \theta, \quad y = r \sin \theta, \quad z = z" />
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 6.4-2 （円柱座標のヤコビアン）">
                <p>
                    ヤコビアンも極座標と同じく <InlineMath math="J = r" /> となり、微小体積は
                </p>
                <BlockMath math="dx dy dz = r \, dr d\theta dz" />
                <p>
                    で置き換える。「円柱形（例：アイスのカップなど）」や「<InlineMath math="z" /> 軸の周りで回転させた図形（回転体）」の積分に適している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 球座標
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">球座標（3次元）</h2>

            <ContentBox type="definition" title="Definition 6.4-3 （球座標 / Spherical coordinates）">
                <p>
                    空間内の点を、原点からの距離 <InlineMath math="r" /> と、<InlineMath math="z" /> 軸の正の向きから測った角度 <InlineMath math="\phi" />（緯度に相当）、および <InlineMath math="xy" /> 平面上での角度 <InlineMath math="\theta" />（経度に相当）で表した座標系 <InlineMath math="(r, \theta, \phi)" />。
                </p>
                <BlockMath math="x = r \sin \phi \cos \theta, \quad y = r \sin \phi \sin \theta, \quad z = r \cos \phi" />
                <p className="mt-2 text-center text-sm">（範囲：<InlineMath math="r \ge 0, \,\, 0 \le \theta \le 2\pi, \,\, 0 \le \phi \le \pi" />）</p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 6.4-3 （球座標のヤコビアン）">
                <p>
                    3変数のヤコビ行列式を計算すると、球座標のヤコビアンは <InlineMath math="J = -r^2 \sin \phi" /> となる。<br />
                    積分において用いるのは絶対値なので、微小体積は
                </p>
                <BlockMath math="dx dy dz = r^2 \sin \phi \,\, dr d\theta d\phi" />
                <p>
                    で置き換えられる。（球の体積などの計算に絶大な威力を発揮する）
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-2 （球の体積の計算）">
                <p>
                    半径 <InlineMath math="R" /> の球 <InlineMath math="V" /> の体積 <InlineMath math="v" /> を積分で求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    積分領域 <InlineMath math="V" /> は球全体である。球座標に変換すると定数区間だけのきれいな領域になる：<br />
                    <InlineMath math="0 \le r \le R" />、 <InlineMath math="0 \le \theta \le 2\pi" />、 <InlineMath math="0 \le \phi \le \pi" />。
                </p>
                <p>
                    体積は関数値 <InlineMath math="1" /> の三重積分で求まるため、微小体積要素を <InlineMath math="r^2 \sin \phi \, dr d\theta d\phi" /> に置き換えて、
                </p>
                <BlockMath math="\begin{aligned} v &= \iiint_V 1 \, dx dy dz \\ &= \int_0^{2\pi} d\theta \int_0^\pi d\phi \int_0^R (r^2 \sin \phi) \, dr \end{aligned}" />
                <p>
                    それぞれの変数は完全に分離独立しているので、それぞれ個別に積分の掛け算として処理できる。
                </p>
                <BlockMath math="v = \left( \int_0^{2\pi} 1 \, d\theta \right) \times \left( \int_0^\pi \sin \phi \, d\phi \right) \times \left( \int_0^R r^2 \, dr \right)" />
                <p>各括弧を計算する：</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><InlineMath math="\int_0^{2\pi} 1 \, d\theta = [\theta]_0^{2\pi} = 2\pi" /></li>
                    <li><InlineMath math="\int_0^\pi \sin \phi \, d\phi = [-\cos \phi]_0^\pi = -(-1) - (-1) = 2" /></li>
                    <li><InlineMath math="\int_0^R r^2 \, dr = \left[\frac{1}{3}r^3\right]_0^R = \frac{1}{3}R^3" /></li>
                </ul>
                <p>したがって、すべて掛け合わせると</p>
                <BlockMath math="v = 2\pi \times 2 \times \frac{1}{3}R^3 = \frac{4}{3} \pi R^3" />
                <p>となり、おなじみの「球の体積の公式（身の上に心配ある参上）」が導かれた。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>円対称性がある二重積分では<strong>極座標</strong> <InlineMath math="(r, \theta)" /> に変換し、<InlineMath math="dxdy" /> を <InlineMath math="r \, dr d\theta" /> に置き換える（Proposition 6.4-1）。これを利用してガウス積分が解ける（Example 6.4-1）。</li>
                    <li><InlineMath math="z" /> 軸対称な三重積分では<strong>円柱座標</strong> <InlineMath math="(r, \theta, z)" /> に変換し、<InlineMath math="dxdydz" /> を <InlineMath math="r \, dr d\theta dz" /> に置き換える（Proposition 6.4-2）。</li>
                    <li>球対称な三重積分（半径が一定など）では<strong>球座標</strong> <InlineMath math="(r, \theta, \phi)" /> に変換し、<InlineMath math="dxdydz" /> を <InlineMath math="r^2 \sin \phi \, dr d\theta d\phi" /> に置き換える（Proposition 6.4-3）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
