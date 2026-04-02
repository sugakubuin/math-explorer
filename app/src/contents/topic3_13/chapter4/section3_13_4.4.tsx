import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NormalCurvatureAndEulerFormula() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは「最も曲がっている方向（主方向）」に注目してきましたが、任意の方向に進んだときの曲面の曲がり具合はどうなるでしょうか。これを記述するのが法曲率であり、主曲率から任意の方向の法曲率を導くのが「オイラーの公式」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">法曲率の定義</h2>

            <p className="leading-relaxed">
                曲面上のある点から特定の方向に進む曲線を考えたときの、法線方向への曲がり具合（加速度の法線成分）を定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.4-1 (法曲率)"
            >
                <p>
                    曲面 <InlineMath math="S" /> 上の点 <InlineMath math="p" /> において、単位接ベクトル <InlineMath math="v \in T_p S" />（<InlineMath math="I(v,v) = 1" />）を持つ方向の<strong>法曲率（normal curvature）</strong> <InlineMath math="\kappa_n(v)" /> を次のように定義する。
                    <BlockMath math="\kappa_n(v) = II(v,v)" />
                </p>
                <p>
                    一般の（単位ベクトルとは限らない）接ベクトル <InlineMath math="v" /> に対しては、
                    <BlockMath math="\kappa_n(v) = \frac{II(v,v)}{I(v,v)}" />
                    として定義される。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                Proposition 4.1-2 で見たように、これはまさに「曲面上で <InlineMath math="v" /> 方向に進む曲線の加速度の法成分」の大きさを表しています。
            </p>

            <ContentBox
                type="example"
                title="Example 4.4-1 (球面の法曲率)"
            >
                <p>
                    半径 <InlineMath math="r" /> の球面について考える。Example 4.1-1 より、第二基本形式は第一基本形式の定数倍 <InlineMath math="II = \frac{1}{r} I" />（内向き法線をとった場合の絶対値）であった。
                </p>
                <p>
                    したがって、任意の接ベクトル <InlineMath math="v" /> に対して、
                    <BlockMath math="\kappa_n(v) = \frac{II(v,v)}{I(v,v)} = \frac{\frac{1}{r} I(v,v)}{I(v,v)} = \frac{1}{r}" />
                    となる。
                </p>
                <p>
                    これは、球面上のどの点からどの方向に向かって進んでも、曲面の曲がり具合（法曲率）は常に <InlineMath math="1/r" /> で一定であることを意味している。このような点を「臍点」と呼んだことを思い出そう。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">オイラーの公式</h2>

            <p className="leading-relaxed">
                任意の方向の法曲率は、2つの主曲率 <InlineMath math="\kappa_1, \kappa_2" /> と、主方向からの角度 <InlineMath math="\theta" /> だけで完全に記述できるという美しい公式があります。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 4.4-1 (オイラーの公式)"
            >
                <p>
                    点 <InlineMath math="p" /> における主曲率を <InlineMath math="\kappa_1, \kappa_2" /> とし、対応する単位主方向（互いに直交する）を <InlineMath math="e_1, e_2" /> とする。
                </p>
                <p>
                    このとき、<InlineMath math="e_1" /> から角度 <InlineMath math="\theta" /> だけ回転した方向の単位接ベクトル <InlineMath math="v = \cos\theta \,e_1 + \sin\theta \,e_2" /> における法曲率は、次のように表される。
                    <BlockMath math="\kappa_n(\theta) = \kappa_1 \cos^2\theta + \kappa_2 \sin^2\theta" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    法曲率の定義より、<InlineMath math="\kappa_n(v) = II(v,v)" /> である。ベクトル <InlineMath math="v" /> を代入して第二基本形式を展開する。
                    <BlockMath math="II(v,v) = II(\cos\theta\,e_1 + \sin\theta\,e_2, \cos\theta\,e_1 + \sin\theta\,e_2)" />
                </p>
                <p>
                    これを双線形性を用いて展開すると、
                    <BlockMath math="\cos^2\theta \,II(e_1,e_1) + 2\sin\theta\cos\theta \,II(e_1,e_2) + \sin^2\theta \,II(e_2,e_2)" />
                    となる。
                </p>
                <p>
                    ここで、<InlineMath math="e_1, e_2" /> は主方向（形状作用素 <InlineMath math="S_p" /> の固有ベクトル）であるから、<InlineMath math="II(e_i, e_j) = \langle S_p(e_i), e_j \rangle = \langle \kappa_i e_i, e_j \rangle" /> となる。
                    <InlineMath math="e_1, e_2" /> は直交する単位ベクトルであるため、
                    <BlockMath math="II(e_1,e_1) = \kappa_1 \langle e_1, e_1 \rangle = \kappa_1" />
                    <BlockMath math="II(e_2,e_2) = \kappa_2 \langle e_2, e_2 \rangle = \kappa_2" />
                    <BlockMath math="II(e_1,e_2) = \kappa_1 \langle e_1, e_2 \rangle = 0" />
                    が成り立つ。
                </p>
                <p>
                    これらを代入すると、クロス項が消滅し、
                    <BlockMath math="II(v,v) = \kappa_1 \cos^2\theta + \kappa_2 \sin^2\theta" />
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.4-2 (オイラーの公式の応用：円柱上の螺旋方向)"
            >
                <p>
                    半径 <InlineMath math="r" /> の円柱を考える。主曲率は周方向（<InlineMath math="\theta = 0" />）で <InlineMath math="\kappa_1 = 1/r" />、軸方向（<InlineMath math="\theta = \pi/2" />）で <InlineMath math="\kappa_2 = 0" /> である。
                </p>
                <p>
                    周方向からちょうど <InlineMath math="\pi/4" />（45度）傾いた方向（円柱を斜めに巻き上がる螺旋の方向）の法曲率をオイラーの公式で求めてみる。
                    <BlockMath math="\kappa_n(\pi/4) = \frac{1}{r} \cos^2\left(\frac{\pi}{4}\right) + 0 \cdot \sin^2\left(\frac{\pi}{4}\right) = \frac{1}{r} \left(\frac{1}{\sqrt{2}}\right)^2 = \frac{1}{2r}" />
                </p>
                <p>
                    斜めに進むことで、真横（周方向）に進むときの半分の曲がり具合になることがわかる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="主曲率は法曲率の極値である"
            >
                <p>
                    オイラーの公式 <InlineMath math="\kappa_n(\theta) = \kappa_1 \cos^2\theta + \kappa_2 \sin^2\theta" /> を見ると、<InlineMath math="\kappa_1 \leq \kappa_2" /> としたとき、<InlineMath math="\kappa_n(\theta)" /> がとり得る値の範囲は常に <InlineMath math="[\kappa_1, \kappa_2]" /> の間に収まることがわかります（<span className="whitespace-nowrap"><InlineMath math="\cos^2\theta + \sin^2\theta = 1" /></span> の凸結合であるため）。
                </p>
                <p>
                    つまり、<strong>法曲率の最小値が <InlineMath math="\kappa_1" /> であり、最大値が <InlineMath math="\kappa_2" /> である</strong>ということです。接平面上の360度の全方向を調べたとき、曲面が一番平坦に近い方向の曲率と、一番きつく曲がっている方向の曲率が、まさに主曲率の正体なのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>特定の接ベクトル方向に進むときの曲面の曲がり具合を法曲率 <InlineMath math="\kappa_n(v) = II(v,v)/I(v,v)" /> という。</li>
                    <li>オイラーの公式によれば、主方向から角度 <InlineMath math="\theta" /> 傾いた方向の法曲率は <InlineMath math="\kappa_1 \cos^2\theta + \kappa_2 \sin^2\theta" /> で計算できる。</li>
                    <li>すべての方向の法曲率の最大値と最小値が、それぞれ2つの主曲率に一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}