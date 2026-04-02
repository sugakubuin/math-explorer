import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PoissonEquationAndFundamentalSolution() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                全空間におけるポアソン方程式を解く鍵は、点ソースに対する応答を記述する<b>基本解</b>にあります。
                物理的には、単一の電荷や質量が作るポテンシャル場を求めることに相当し、これを重ね合わせることで任意のソース分布に対する解を構成できます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本解の構成</h2>

            <p className="leading-relaxed">
                デルタ関数 <InlineMath math="\delta_0" /> を右辺に持つラプラス作用素の特殊解を求めます。
            </p>

            <ContentBox type="definition" title="Definition 8.4-1 (n 次元ラプラス作用素の基本解)">
                <p>
                    <InlineMath math="n" /> 次元空間において、方程式 <InlineMath math="\Delta \Phi = \delta_0" /> を（超関数の意味で）満たす放射対称な解 <InlineMath math="\Phi" /> を<b>基本解</b>（Fundamental Solution）と呼ぶ：
                    <BlockMath math="\Phi(x) = \begin{cases} \frac{1}{2\pi} \ln |x| & (n=2) \\ -\frac{1}{(n-2)\omega_n} |x|^{2-n} & (n \ge 3) \end{cases}" />
                    ここで <InlineMath math="\omega_n" /> は <InlineMath math="n" /> 次元単位球の表面積である（例：<InlineMath math="\omega_3 = 4\pi" />）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (導出)">
                <p>
                    放射対称な解 <InlineMath math="\Phi(r)" />（<InlineMath math="r = |x|" />）を仮定し、極座標表示のラプラシアンを用いると、
                    <InlineMath math="\Delta \Phi = \Phi'' + \frac{n-1}{r}\Phi' = 0" />（<InlineMath math="r > 0" />）が得られる。
                    この常微分方程式を解くと、<InlineMath math="\Phi' = c r^{1-n}" />、したがって <InlineMath math="n \ge 3" /> では <InlineMath math="\Phi = \frac{c}{2-n} r^{2-n}" /> となる。
                    定数 <InlineMath math="c" /> は、領域 <InlineMath math="B_\epsilon" /> でのガウスの定理 
                    <InlineMath math="\int_{B_\epsilon} \Delta \Phi \, dx = \int_{\partial B_\epsilon} \frac{\partial \Phi}{\partial n} \, dS = 1" />
                    を用いて正規化を行うことで決定される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 8.4-1 (3 次元の基本解：ニュートンポテンシャル)">
                <p>
                    3 次元の場合、基本解は <InlineMath math="\Phi(x) = -\frac{1}{4\pi |x|}" /> となる。
                    これは物理学におけるニュートンの重力ポテンシャルや、点電荷が周囲に作る電位（クーロンポテンシャル）の形状そのものである。
                    点源が「逆二乗則」に基づく力を生み出す背景には、この基本解の形がある。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ポアソン方程式の解の表示</h2>

            <p className="leading-relaxed">
                基本解を用いることで、一般のソース（分布）に対するポアソン方程式の解を積分形式で書き下すことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 8.4-1 (ポアソン方程式の解の積分表示)">
                <p>
                    <InlineMath math="f" /> がコンパクトな台を持つ滑らかな関数のとき、全空間におけるポアソン方程式 <InlineMath math="\Delta u = f" /> の解は、
                    基本解 <InlineMath math="\Phi" /> と <InlineMath math="f" /> の畳み込みとして与えられる：
                    <BlockMath math="u(x) = \int_{\mathbb{R}^n} \Phi(x-y) f(y) \, dy" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    形式的には、微分作用素を畳み込みに対して作用させることで示される：
                    <BlockMath math="\Delta u = \Delta (\Phi * f) = (\Delta \Phi) * f = \delta_0 * f = f" />
                    厳密には、<InlineMath math="\Phi" /> の原点における特異性を微小領域 <InlineMath math="\epsilon" /> を除外して処理し、極限をとることで証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ポテンシャル理論との接続">
                <p>
                    ポアソン方程式の積分表示は、古典力学における「質量密度が作るポテンシャル場の重ね合わせ」そのものである。
                    このように、基本解（点源への応答）を足し合わせることで複雑な系の振る舞いを記述する手法は、
                    電磁気学や流体力学におけるポテンシャル論、さらには量子力学のプロパゲータの概念へと繋がっている。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、領域に境界が存在する場合に、境界条件をその内部に組み込んだ「グリーン関数」を構成する方法について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>基本解 <InlineMath math="\Phi" /> は点源に対するラプラス方程式の応答を表す（<InlineMath math="\Delta \Phi = \delta_0" />）。</li>
                    <li>3 次元の基本解は逆数関数 <InlineMath math="1/|x|" /> の形を取り、重力や電位を記述する。</li>
                    <li>任意のソース <InlineMath math="f" /> に対する解は、基本解との畳み込み積分によって構成される。</li>
                    <li>この積分表示は、ミクロな点源の重ね合わせとしてマクロな場を捉える物理的な視点と一致している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
