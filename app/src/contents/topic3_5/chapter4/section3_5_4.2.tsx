import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MethodOfCharacteristics() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                1 階の偏微分方程式を解くための最も基本的かつ強力な手法が「特性曲線法」です。
                これは、PDE を「ある特定の曲線に沿った常微分方程式 (ODE)」として捉え直すことで、多変数の問題を単変数の問題へと帰着させる手法です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特性曲線の概念</h2>

            <p className="leading-relaxed">
                まずは、方程式の解の情報が伝播していく「道筋」となる特性曲線を定義しましょう。
            </p>

            <ContentBox type="definition" title="Definition 4.2-1 (特性曲線)">
                <p>
                    1 階 PDE <InlineMath math="a(x, t) u_x + b(x, t) u_t = c(x, t, u)" /> に対して、
                    独立変数の空間における常微分方程式
                    <BlockMath math="\frac{dx}{dt} = \frac{a(x, t)}{b(x, t)}" />
                    の解として得られる曲線 <InlineMath math="x = x(t)" /> を<b>特性曲線</b>（characteristic curve）と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この曲線に沿って移動する観測者にとって、PDE はどのように見えるでしょうか。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (輸送方程式の特性曲線)">
                <p>
                    定数速度 <InlineMath math="c" /> で情報が伝わる輸送方程式 <InlineMath math="u_t + c u_x = 0" /> を考える。
                    この場合の特性方程式は <InlineMath math="\frac{dx}{dt} = c" /> であり、解は直線 <InlineMath math="x - ct = x_0" />（定数）となる。
                    この直線は、初期状態の波形が速度 <InlineMath math="c" /> で平行移動していく軌跡を表している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特性曲線法による解の構成</h2>

            <p className="leading-relaxed">
                特性曲線の上で解がどのような振る舞いをするかを示す、中心的な定理を学びましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 (解の一定性と一般解)">
                <p>
                    輸送方程式 <InlineMath math="B[u] = u_t + c u_x = 0" /> の初期値問題
                    <BlockMath math="u(x, 0) = f(x) \quad (-\infty < x < \infty)" />
                    の解は、
                    <BlockMath math="u(x, t) = f(x - ct)" />
                    で与えられる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    特性曲線 <InlineMath math="x(t) = x_0 + ct" /> 上での <InlineMath math="u" /> の時間変化を全微分（連鎖律）を用いて計算する。
                    <BlockMath math="\frac{d}{dt} u(x(t), t) = \frac{\partial u}{\partial x} \frac{dx}{dt} + \frac{\partial u}{\partial t}" />
                    ここで特性方程式 <InlineMath math="\frac{dx}{dt} = c" /> を代入すると：
                    <BlockMath math="\frac{d}{dt} u(x(t), t) = c u_x + u_t" />
                    元の PDE より <InlineMath math="u_t + c u_x = 0" /> であるから、
                    <BlockMath math="\frac{d}{dt} u(x(t), t) = 0" />
                    すなわち、<InlineMath math="u" /> は特性曲線 <InlineMath math="x - ct = \text{const}" /> 上で一定の値をとる。
                    したがって、任意の点 <InlineMath math="(x, t)" /> での解は、その点を通る特性曲線が <InlineMath math="t=0" /> で交わる点 <InlineMath math="x - ct" /> における初期値と一致する：
                    <BlockMath math="u(x, t) = u(x - ct, 0) = f(x - ct)" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                消滅項やソース項がある場合、特性曲線に沿った値は保存されず、変化します。
            </p>

            <ContentBox type="example" title="Example 4.2-2 (減衰のある輸送方程式)">
                <p>
                    方程式 <InlineMath math="u_t + c u_x = -a u \ (a > 0)" /> を初期条件 <InlineMath math="u(x, 0) = f(x)" /> のもとで解く。
                    特性曲線 <InlineMath math="x = x_0 + ct" /> 上では、ODE は以下のようになる：
                    <BlockMath math="\frac{du}{dt} = -a u" />
                    これを解くと <InlineMath math="u(t) = u(0) e^{-at}" /> であるため、
                    <BlockMath math="u(x, t) = f(x - ct) e^{-at}" />
                    となる。波形が形を保ったまま指数関数的に減衰していく様子がわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="物理的解釈：移流 (Advection)">
                <p>
                    特性曲線法は、物理的には「移流」の現象を極めて直感的に表しています。
                    流れの中にある断面における物理量が、流速 <InlineMath math="c" /> に乗って下流へと運ばれていく様子を数学的に記述しているのです。
                    多次元の場合、輸送方程式は <InlineMath math="u_t + \mathbf{v} \cdot \nabla u = 0" /> となり、特性曲線は流線に対応します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>特性曲線</b>とは、PDE を ODE に変換できる特別な動線である。</li>
                    <li>輸送方程式 <InlineMath math="u_t + c u_x = 0" /> では、解は特性曲線 <InlineMath math="x - ct = \text{const}" /> 上で保存される。</li>
                    <li>初期値 <InlineMath math="f(x)" /> は速度 <InlineMath math="c" /> でそのまま移動し、解は <InlineMath math="u(x, t) = f(x - ct)" /> となる。</li>
                    <li>一般の 1 階線形 PDE も、特性曲線に沿った積分（ODE の解法）によって解くことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
