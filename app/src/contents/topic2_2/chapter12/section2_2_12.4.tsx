import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_12_4() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                二重積分を「3次元上の体積の質量（すなわち積分変数3つ）」に拡張したものが<strong>三重積分</strong>（Triple integral）です。フビニの定理に基づく累次積分や、線形代数の強力なツールを取り入れた一般の変数変換公式は、次元が変わっても同様に成立します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">三重積分の一般変数変換公式</h2>

            <p>
                1変数の置換積分における倍率 <InlineMath math="dx/du" />、2変数でのヤコビ行列式を一般の <InlineMath math="n" /> 次元に拡張した定理を与えます。ここでは <InlineMath math="n=3" /> の場合について記述します。
            </p>

            <ContentBox type="theorem" title="Theorem 12.4-1 (三重積分の一般変数変換公式)">
                <p>
                    変換 <InlineMath math="x = x(u, v, w), \ y = y(u, v, w), \ z = z(u, v, w)" /> によって、<InlineMath math="uvw" />-空間の領域 <InlineMath math="E" /> が <InlineMath math="xyz" />-空間の領域 <InlineMath math="D" /> に 1対1（境界などの測度0の集合を除く）で全単射写像されており、変換関数が <InlineMath math="C^1" /> 級であるとする。
                </p>
                <p className="mt-2">
                    この変換の<strong>ヤコビアン</strong>（ヤコビ行列式）を <InlineMath math="J(u, v, w) = \frac{\partial(x, y, z)}{\partial(u, v, w)}" /> と置くとき、三重積分は次のように変換される：
                </p>
                <BlockMath math="\begin{aligned} &\iiint_D f(x, y, z) \, dx \, dy \, dz \\ &= \iiint_E f(x(u,v,w), y(u,v,w), z(u,v,w)) |J(u, v, w)| \, du \, dv \, dw \end{aligned}" />
                <p className="mt-2">
                    ここでヤコビアン <InlineMath math="J" /> は次の <InlineMath math="3 \times 3" /> 行列の行列式である：
                </p>
                <BlockMath math="\frac{\partial(x, y, z)}{\partial(u, v, w)} = \det \begin{pmatrix} 
                                    \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} & \frac{\partial x}{\partial w} \\
                                    \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} & \frac{\partial y}{\partial w} \\
                                    \frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} & \frac{\partial z}{\partial w}
                                \end{pmatrix}" />
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">円柱座標・球座標での導出</h2>

            <p>
                空間における代表的な座標系が<strong>円柱座標</strong>（Cylindrical coordinates）と<strong>球座標</strong>（Spherical coordinates, または極座標）です。それぞれのヤコビアンを計算して公式を導出します。
            </p>

            <ContentBox type="proposition" title="Proposition 12.4-1 (円柱座標・球座標のヤコビアンと積分公式)">
                <p className="font-bold">[円柱座標]</p>
                <p>
                    底面が極座標で高さが <InlineMath math="z" />。<InlineMath math="x = r \cos \theta, \ y = r \sin \theta, \ z = z" />。ヤコビアンは <InlineMath math="r" />。
                </p>
                <BlockMath math="dx \, dy \, dz = r \, dr \, d\theta \, dz" />

                <p className="font-bold mt-4">[球座標]</p>
                <p>
                    原点からの距離 <InlineMath math="r" />、<InlineMath math="z" /> 軸の正の向きから測った天頂角 <InlineMath math="\phi" />（<InlineMath math="0 \le \phi \le \pi" />）、<InlineMath math="x" /> 軸からの偏角 <InlineMath math="\theta" />（<InlineMath math="0 \le \theta < 2\pi" />）。
                </p>
                <BlockMath math="x = r \sin \phi \cos \theta, \quad y = r \sin \phi \sin \theta, \quad z = r \cos \phi" />
                <p>
                    ヤコビアンの絶対値は <InlineMath math="r^2 \sin \phi" />。
                </p>
                <BlockMath math="dx \, dy \, dz = r^2 \sin \phi \, dr \, d\phi \, d\theta" />
            </ContentBox>

            <ContentBox type="proof" title="Proof [球座標のヤコビアンの導出]">
                <p>
                    定理 12.4-1 の公式に従い、<InlineMath math="3 \times 3" /> 行列式 <InlineMath math="J = \frac{\partial(x, y, z)}{\partial(r, \phi, \theta)}" /> を計算する。
                </p>
                <BlockMath math="\begin{aligned} J &= \det \begin{pmatrix} 
                                    \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \phi} & \frac{\partial x}{\partial \theta} \\
                                    \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \phi} & \frac{\partial y}{\partial \theta} \\
                                    \frac{\partial z}{\partial r} & \frac{\partial z}{\partial \phi} & \frac{\partial z}{\partial \theta}
                                \end{pmatrix} \\
                                &= \det \begin{pmatrix} 
                                    \sin \phi \cos \theta & r \cos \phi \cos \theta & -r \sin \phi \sin \theta \\
                                    \sin \phi \sin \theta & r \cos \phi \sin \theta & r \sin \phi \cos \theta \\
                                    \cos \phi & -r \sin \phi & 0
                                \end{pmatrix}
                                \end{aligned}" />
                <p className="mt-2">
                    サラスの公式（あるいは余因子展開）を用いて3行目で展開する。要素が <InlineMath math="0" /> の項が1つ消える。
                </p>
                <BlockMath math="\begin{aligned}
                                    J &= \cos \phi \cdot \det \begin{pmatrix} r \cos \phi \cos \theta & -r \sin \phi \sin \theta \\ r \cos \phi \sin \theta & r \sin \phi \cos \theta \end{pmatrix} \\
                                      &\quad - (-r \sin \phi) \cdot \det \begin{pmatrix} \sin \phi \cos \theta & -r \sin \phi \sin \theta \\ \sin \phi \sin \theta & r \sin \phi \cos \theta \end{pmatrix} + 0
                                \end{aligned}" />
                <p className="mt-2">
                    それぞれの <InlineMath math="2 \times 2" /> 行列式を計算する。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                        第1項の行列式：<br />
                        <InlineMath math="(r \cos \phi \cos \theta)(r \sin \phi \cos \theta) - (-r \sin \phi \sin \theta)(r \cos \phi \sin \theta)" /><br />
                        <InlineMath math="= r^2 \cos \phi \sin \phi \cos^2 \theta + r^2 \cos \phi \sin \phi \sin^2 \theta" /><br />
                        <InlineMath math="= r^2 \cos \phi \sin \phi (\cos^2 \theta + \sin^2 \theta) = r^2 \cos \phi \sin \phi" />
                    </li>
                    <li>
                        第2項の行列式：<br />
                        <InlineMath math="(\sin \phi \cos \theta)(r \sin \phi \cos \theta) - (-r \sin \phi \sin \theta)(\sin \phi \sin \theta)" /><br />
                        <InlineMath math="= r \sin^2 \phi \cos^2 \theta + r \sin^2 \phi \sin^2 \theta" /><br />
                        <InlineMath math="= r \sin^2 \phi (\cos^2 \theta + \sin^2 \theta) = r \sin^2 \phi" />
                    </li>
                </ul>
                <p className="mt-2">
                    これらを代入して整理する：
                </p>
                <BlockMath math="\begin{aligned}
                                    J &= \cos \phi \cdot (r^2 \cos \phi \sin \phi) + r \sin \phi \cdot (r \sin^2 \phi) \\
                                    &= r^2 \cos^2 \phi \sin \phi + r^2 \sin^3 \phi \\
                                    &= r^2 \sin \phi (\cos^2 \phi + \sin^2 \phi) \\
                                    &= r^2 \sin \phi
                                \end{aligned}" />
                <p className="mt-2">
                    天頂角の範囲は <InlineMath math="0 \le \phi \le \pi" /> であるため、常に <InlineMath math="\sin \phi \ge 0" /> である。よって絶対値記号は不要であり、体積要素は <InlineMath math="dV = r^2 \sin \phi \, dr \, d\phi \, d\theta" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 12.4-1 (球の体積)">
                <p>
                    半径 <InlineMath math="R" /> の球 <InlineMath math="D = \{(x, y, z) \mid x^2 + y^2 + z^2 \le R^2\}" /> の体積 <InlineMath math="V" /> を求めよ。
                </p>
                <p className="font-bold text-slate-700 dark:text-slate-300 mt-4">[解答]</p>
                <p className="mt-2">
                    球の体積は、領域 <InlineMath math="D" /> において定数関数 <InlineMath math="1" /> を三重積分したものである。<InlineMath math="V = \iiint_D 1 \, dx \, dy \, dz" />
                </p>
                <p className="mt-2">
                    直交座標では複雑だが、球座標に変換すると積分領域 <InlineMath math="E" /> は <InlineMath math="0 \le r \le R" />、<InlineMath math="0 \le \phi \le \pi" />、<InlineMath math="0 \le \theta \le 2\pi" /> という直方体と同等の極めて単純な範囲となる。
                </p>
                <BlockMath math="\begin{aligned}
                                    V &= \iiint_E 1 \cdot |J| \, dr \, d\phi \, d\theta \\
                                    &= \int_0^{2\pi} \int_0^\pi \int_0^R r^2 \sin \phi \, dr \, d\phi \, d\theta
                                \end{aligned}" />
                <p className="mt-2">
                    フビニの定理を用いて塁次積分を行う。被積分関数がそれぞれの変数の関数の積で、積分区間がすべて定数であるため、それぞれの積分の積に完全に分解できる。
                </p>
                <BlockMath math="\begin{aligned}
                                    V &= \left( \int_0^{2\pi} d\theta \right) \left( \int_0^\pi \sin \phi \, d\phi \right) \left( \int_0^R r^2 \, dr \right) \\
                                    &= [\theta]_0^{2\pi} \cdot [-\cos \phi]_0^\pi \cdot \left[ \frac{r^3}{3} \right]_0^R \\
                                    &= (2\pi) \cdot (-\cos \pi - (-\cos 0)) \cdot \left( \frac{R^3}{3} \right) \\
                                    &= 2\pi \cdot (1 + 1) \cdot \frac{R^3}{3} \\
                                    &= \frac{4\pi R^3}{3}
                                \end{aligned}" />
                <p className="mt-2">
                    お馴染みの「身の上に心配あるさじょう（<InlineMath math="\frac{4}{3}\pi R^3" />）」の公式が完全に導出された。
                </p>
            </ContentBox>

        </section>
    );
}
