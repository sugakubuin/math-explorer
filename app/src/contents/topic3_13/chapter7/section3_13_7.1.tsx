import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GeodesicCurvatureAndAngularDefect() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                微分幾何学の金字塔である「ガウス＝ボンネの定理」へと向かう最後の準備として、曲面上の曲線が「どれくらい測地線からずれているか（接平面内でどれくらい曲がっているか）」を測る測地曲率と、それによって生じる三角形の内角の和のズレ（角の余剰）について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">測地曲率の定義</h2>

            <p className="leading-relaxed">
                曲面上の曲線の加速度ベクトル <InlineMath math="\alpha''(s)" /> は、空間の曲線の曲率ベクトルに他なりません。これを、曲面にとっての「法線方向（外的な曲がり）」と「接平面方向（内的な曲がり）」に分解します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 7.1-1 (測地曲率)"
            >
                <p>
                    曲面 <InlineMath math="S" /> 上の弧長パラメータ付き曲線 <InlineMath math="\alpha(s)" /> の加速度ベクトル <InlineMath math="\alpha''(s)" />（<InlineMath math="= T'(s)" />）を、接平面 <InlineMath math="T_p S" /> の成分と法線 <InlineMath math="\mathbf{N}" /> の成分に分解する。
                    <BlockMath math="\alpha''(s) = \kappa_g(s) (\mathbf{N} \times T) + \kappa_n(s) \mathbf{N}" />
                    （ここで <InlineMath math="T = \alpha'(s)" /> は単位接ベクトルである。）
                </p>
                <p>
                    このとき、法成分の係数 <InlineMath math="\kappa_n" /> は前章で学んだ法曲率である。
                    一方、接成分の係数 <InlineMath math="\kappa_g(s)" /> を、曲線 <InlineMath math="\alpha" /> の<strong>測地曲率（geodesic curvature）</strong>という。
                </p>
                <p>
                    測地曲率 <InlineMath math="\kappa_g" /> が至る所ゼロである（接平面方向に全く曲がらない）曲線こそが、まさに前章で定義した「測地線」に他ならない。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                測地曲率は、曲面上を歩くアリが「自分が今どれくらい右（または左）にハンドルを切っているか」を感じる量です。
            </p>

            <ContentBox
                type="example"
                title="Example 7.1-1 (球面上の緯線の測地曲率)"
            >
                <p>
                    半径 1 の球面上の緯線（<InlineMath math="u = u_0" /> 一定）を考える。
                    この曲線の弧長パラメータは <InlineMath math="s = v \sin u_0" /> であり、曲線は <InlineMath math="\alpha(s) = (\sin u_0 \cos(s/\sin u_0), \sin u_0 \sin(s/\sin u_0), \cos u_0)" /> と書ける。
                </p>
                <p>
                    これを2回微分して <InlineMath math="\alpha''(s)" /> を求め、球面の法ベクトル <InlineMath math="\mathbf{N} = -\alpha(s)" /> および進行方向に直交する接ベクトル <InlineMath math="\mathbf{N} \times T" /> との内積をとることで分解すると、
                    <BlockMath math="\kappa_g = \frac{\cos u_0}{\sin u_0} = \cot u_0" />
                    となる。
                </p>
                <p>
                    赤道（<InlineMath math="u_0 = \pi/2" />）では <InlineMath math="\kappa_g = \cot(\pi/2) = 0" /> となり、測地線であることが確認できる。
                    一方、北極（<InlineMath math="u_0 \to 0" />）に近づくほど緯線の円は小さくなり、測地曲率 <InlineMath math="\kappa_g" /> は無限大に発散する。すなわち、極付近の緯線を歩くには「極めて急なカーブ」を曲がり続けなければならない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">角の余剰と測地三角形</h2>

            <p className="leading-relaxed">
                平面上の三角形の内角の和は常に <InlineMath math="\pi" />（180度）です。しかし、曲面上の「真っ直ぐな線（測地線）」で囲まれた三角形では、曲面の曲がり具合の影響を受けて内角の和が変化します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 7.1-2 (測地多角形)"
            >
                <p>
                    曲面上の多角形で、そのすべての辺が測地線の弧からなるものを<strong>測地多角形（geodesic polygon）</strong>という。
                    特に、3つの測地線分で囲まれた領域を<strong>測地三角形（geodesic triangle）</strong>という。
                </p>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 7.1-1 (角の余剰)"
            >
                <p>
                    半径 <InlineMath math="r" /> の球面（ガウス曲率 <InlineMath math="K = 1/r^2" />）上の測地三角形の内角を <InlineMath math="A, B, C" />、その面積を <InlineMath math="\Delta" /> とする。
                    このとき、内角の和は次のような関係式を満たす。
                    <BlockMath math="A + B + C = \pi + \frac{\Delta}{r^2} = \pi + \iint_\Delta K \,dA" />
                </p>
                <p>
                    この <InlineMath math="\pi" /> からのはみ出し分 <InlineMath math="\iint K\,dA" /> を<strong>角の余剰（angular defect / excess）</strong>という。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    この命題は、次節で証明する「局所版ガウス＝ボンネの定理」の特殊なケースとして導かれる。
                </p>
                <p>
                    測地三角形の各辺は測地線であるため、辺上での測地曲率は常に <InlineMath math="\kappa_g = 0" /> である。したがって、境界に沿った測地曲率の積分項はゼロになる。
                    局所版ガウス＝ボンネの定理の式にこれを代入し、外角 <InlineMath math="\theta_i = \pi - \text{内角}" /> の和を計算して整理することで、直ちにこの公式が得られる（詳細は次節 Example 7.2-1 で行う）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 7.1-2 (球面の直角三角形)"
            >
                <p>
                    地球儀の上で、次のような3点からなる三角形を考える。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li>北極点</li>
                    <li>赤道と本初子午線（経度0°）の交点</li>
                    <li>赤道と東経90°の交点</li>
                </ol>
                <p className="mt-2">
                    この3点を結ぶ線分（大円の弧）は、2本の子午線と1本の赤道の一部である。これらはすべて測地線であるから、これは測地三角形である。
                </p>
                <p>
                    驚くべきことに、この三角形の3つの内角は<strong>すべて 90°（<InlineMath math="\pi/2" />）</strong>である。したがって、内角の和は
                    <BlockMath math="A + B + C = \frac{\pi}{2} + \frac{\pi}{2} + \frac{\pi}{2} = \frac{3\pi}{2}" />
                    となり、<InlineMath math="\pi" />（180°）よりも <InlineMath math="\pi/2" /> だけ大きい。
                </p>
                <p>
                    一方、この三角形は北半球（面積 <InlineMath math="2\pi r^2" />）をさらに経度90°分（4分の1）に切り取ったものであるから、その面積は <InlineMath math="\Delta = \frac{1}{4} \cdot 2\pi r^2 = \frac{\pi}{2} r^2" /> である。
                    公式の右辺を計算すると、
                    <BlockMath math="\pi + \frac{\Delta}{r^2} = \pi + \frac{\frac{\pi}{2}r^2}{r^2} = \pi + \frac{\pi}{2} = \frac{3\pi}{2}" />
                    となり、確かに一致することが確認できる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>曲面の曲線の加速度を分解したときの、接平面方向への曲がり具合を測地曲率 <InlineMath math="\kappa_g" /> という。測地線は <InlineMath math="\kappa_g = 0" /> の曲線である。</li>
                    <li>曲面上の測地三角形の内角の和は <InlineMath math="\pi" /> にはならず、そのズレ（角の余剰）は三角形内部のガウス曲率の積分 <InlineMath math="\iint K\,dA" /> に等しい。</li>
                    <li>正の曲率を持つ球面では内角の和は <InlineMath math="\pi" /> より大きくなり、負の曲率を持つ鞍点型曲面では <InlineMath math="\pi" /> より小さくなる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}