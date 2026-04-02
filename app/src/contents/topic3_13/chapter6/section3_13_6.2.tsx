import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfGeodesics() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で測地線の定義と方程式を学びました。この方程式を一般の曲面で解くのは非常に困難ですが、対称性の高い曲面（球面や回転面など）においては、測地線の形を具体的に特定することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">球面上の大円</h2>

            <p className="leading-relaxed">
                球面における「直線（最短経路）」が「大円（球の中心を通る平面で切り取った円）」であることは、飛行機の航路などで直感的に知られていますが、これを測地方程式から確認します。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 6.2-1 (球面 <InlineMath math="S^2(r)" /> の測地線は大円)</span>}
            >
                <p>
                    球面のパラメータを <InlineMath math="(u,v)" /> （<InlineMath math="u" />: 緯度的な角度、<InlineMath math="v" />: 経度）とする。第一基本形式は <InlineMath math="E=1, F=0, G=\sin^2 u" />、非ゼロのクリストッフェル記号は <InlineMath math="\Gamma^1_{22} = -\sin u\cos u" /> と <InlineMath math="\Gamma^2_{12} = \Gamma^2_{21} = \cot u" /> であった。
                </p>
                <p>
                    これを測地方程式に代入すると次のようになる。
                    <BlockMath math="\ddot{u} - (\sin u\cos u)\dot{v}^2 = 0" />
                    <BlockMath math="\ddot{v} + 2(\cot u)\dot{u}\dot{v} = 0" />
                </p>
                <p>
                    ここで、赤道 <InlineMath math="u(s) = \pi/2" /> （一定）を考える。<InlineMath math="u" /> が定数なので <InlineMath math="\dot{u} = 0, \ddot{u} = 0" /> である。
                    また <InlineMath math="\cos(\pi/2) = 0" /> なので、第1式は <InlineMath math="0 - 0 = 0" /> となり成立する。
                    第2式も <InlineMath math="\dot{u} = 0" /> より <InlineMath math="\ddot{v} = 0" /> となり、<InlineMath math="v(s) = cs + d" /> （定速で赤道を回る）として成立する。
                </p>
                <p>
                    したがって、赤道は測地線である。球面の完全な回転対称性から、球面を任意に回転させても測地線は測地線のままである。赤道を回転させて得られる曲線は「大円（great circle）」のすべてを尽くすため、球面上の任意の測地線は大円であることがわかる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                測地線が大円であることがわかれば、球面上の2点間の最短距離を容易に計算できます。
            </p>

            <ContentBox
                type="example"
                title="Example 6.2-2 (球面の2点間の測地距離)"
            >
                <p>
                    地球を半径 <InlineMath math="r \approx 6371" /> km の完全な球面とみなす。球面上の2点 <InlineMath math="P, Q" /> の測地距離（大圏距離）は、球の中心 <InlineMath math="O" /> から見た中心角 <InlineMath math="\theta = \angle POQ" /> を用いて <InlineMath math="r\theta" /> （<InlineMath math="\theta" /> はラジアン）で与えられる。
                </p>
                <p>
                    例えば、東京（北緯 35.7°, 東経 139.7°）とニューヨーク（北緯 40.7°, 西経 74.0°）の距離を求める場合、それぞれの位置ベクトルを3次元の直交座標 <InlineMath math="(x,y,z)" /> に変換し、内積 <InlineMath math="P \cdot Q = r^2 \cos\theta" /> を計算することで中心角 <InlineMath math="\theta" /> を求め、測地距離を算出することができる。この最短ルート（大圏コース）は、平面のメルカトル地図上では大きく北極側にカーブした曲線として描かれる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">回転面のクレローの関係式</h2>

            <p className="leading-relaxed">
                球面だけでなく、一般的な「回転面（壺や花瓶のような形）」においても、測地線が満たす非常に美しい保存則が存在します。これをクレロー（Clairaut）の関係式と呼びます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 6.2-1 (クレローの関係式)"
            >
                <p>
                    <InlineMath math="z" /> 軸の周りの回転面 <InlineMath math="\mathbf{x}(u,v) = (f(u)\cos v, f(u)\sin v, g(u))" /> （ただし <InlineMath math="f(u) > 0" /> は回転軸からの距離、すなわち半径）を考える。
                </p>
                <p>
                    この回転面上の測地線を <InlineMath math="\alpha(s)" /> とし、曲線上の各点で測地線と緯線（経度 <InlineMath math="v" /> が変化する方向の曲線）がなす角を <InlineMath math="\psi(s)" /> とする。
                    このとき、曲線に沿って次の値が常に一定（定数 <InlineMath math="c" />）となる。
                    <BlockMath math="f(u) \cos\psi = c" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    回転面の第一基本形式は <InlineMath math="I = (f'^2+g'^2)du^2 + f^2 dv^2" /> である。ここで <InlineMath math="v" /> に依存する項がない（<InlineMath math="\partial E/\partial v = \partial F/\partial v = \partial G/\partial v = 0" />）ことに注目する。これは回転対称性（経度を変えても幾何学が同じ）を反映している。
                </p>
                <p>
                    変分法で用いたエネルギー汎関数に対するオイラー＝ラグランジュ方程式のうち、<InlineMath math="v" /> に関する方程式を見ると、ラグランジアンに <InlineMath math="v" /> 自身が含まれないため、「運動量保存則」に対応する第一積分が得られる。
                    具体的には、<InlineMath math="\frac{d}{ds} (G\dot{v}) = 0" /> すなわち <InlineMath math="G\dot{v} = f(u)^2 \dot{v} = \text{定数}" /> が成立する。
                </p>
                <p>
                    一方、測地線の接ベクトル <InlineMath math="\alpha' = \mathbf{x}_u\dot{u} + \mathbf{x}_v\dot{v}" /> と緯線方向の基底ベクトル <InlineMath math="\mathbf{x}_v" /> のなす角 <InlineMath math="\psi" /> は、内積を用いて次のように計算される。
                    <BlockMath math="\begin{aligned} \cos\psi &= \frac{\alpha' \cdot \mathbf{x}_v}{|\alpha'| |\mathbf{x}_v|} = \frac{(\mathbf{x}_u\dot{u} + \mathbf{x}_v\dot{v}) \cdot \mathbf{x}_v}{1 \cdot \sqrt{G}} \\ &= \frac{G\dot{v}}{\sqrt{G}} = \sqrt{G}\dot{v} = f(u)\dot{v} \end{aligned}" />
                </p>
                <p>
                    これを保存量 <InlineMath math="f(u)^2 \dot{v}" /> の式に用いると、
                    <BlockMath math="f(u) \cos\psi = f(u) (f(u)\dot{v}) = f(u)^2 \dot{v} = \text{定数}" />
                    となり、クレローの関係式が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.2-3 (球面のクレローの関係式)"
            >
                <p>
                    球面を回転面とみなすと、回転軸からの距離は <InlineMath math="f(u) = \sin u" /> （<InlineMath math="u" /> は北極からの角度）である。
                    したがって、球面上の測地線（大円）に沿って、
                    <BlockMath math="\sin u \cos\psi = c \text{ （定数）}" />
                    が成り立つ。
                </p>
                <p>
                    もし赤道（<InlineMath math="u = \pi/2" />）上で、緯線と同じ方向（<InlineMath math="\psi = 0" />）に測地線を出発させたとする。このとき初期値は <InlineMath math="c = \sin(\pi/2)\cos(0) = 1 \cdot 1 = 1" /> となる。
                    その後の軌跡でも常に <InlineMath math="\sin u \cos\psi = 1" /> でなければならないが、<InlineMath math="\sin u \leq 1" /> かつ <InlineMath math="\cos\psi \leq 1" /> であるため、これを満たすには常に <InlineMath math="\sin u = 1" /> （すなわち <InlineMath math="u = \pi/2" /> 赤道のまま）かつ <InlineMath math="\cos\psi = 1" /> （緯線方向のまま）でなければならない。
                    これにより、赤道が測地線であることが別の視点からも確認できた。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>球面上の測地線はすべて大円であり、2点間の最短距離は大圏距離として計算できる。</li>
                    <li>回転面上の測地線においては、回転軸からの距離 <InlineMath math="f(u)" /> と緯線とのなす角 <InlineMath math="\psi" /> の間に「<InlineMath math="f(u)\cos\psi = \text{定数}" />」というクレローの関係式が成り立つ。</li>
                    <li>これは物理学における角運動量保存則の、幾何学的な現れである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}