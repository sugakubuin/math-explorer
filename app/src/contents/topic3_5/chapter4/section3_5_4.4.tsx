import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ClassificationOfSecondOrderPDEs() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                2 階の線形偏微分方程式を分類することは、その方程式が記述する物理現象の「本質」を理解するために極めて重要です。
                2 次曲線の分類（楕円、放物線、双曲線）と同様に、PDE も判別式によって大きく 3 つの型に分けられます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">2 階線形 PDE の 3 分類</h2>

            <p className="leading-relaxed">
                2 つの独立変数 <InlineMath math="x, y" /> を持つ一般的な 2 階線形 PDE を考えてみましょう。
            </p>

            <ContentBox type="definition" title="Definition 4.4-1 (2 階線形 PDE の判別式)">
                <p>
                    次の方程式を考える：
                    <BlockMath math="A u_{xx} + B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G" />
                    ここで <InlineMath math="A, B, C" /> 等は <InlineMath math="(x, y)" /> の関数である。
                    このとき、特性方程式の判別式を <InlineMath math="\Delta = B^2 - 4AC" /> と定義する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                判別式の符号によって、方程式の解の性質は劇的に異なります。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 (楕円型・放物型・双曲型の分類)">
                <p>
                    判別式の符号に応じて、PDE は以下の 3 つの型に分類される：
                </p>
                <ol className="list-decimal list-inside mt-4 leading-relaxed space-y-2">
                    <li><b>双曲型 (Hyperbolic)</b>: <InlineMath math="\Delta > 0" /> のとき。波の伝播や振動を表す。</li>
                    <li><b>放物型 (Parabolic)</b>: <InlineMath math="\Delta = 0" /> のとき。拡散や熱伝導を表す。</li>
                    <li><b>楕円型 (Elliptic)</b>: <InlineMath math="\Delta < 0" /> のとき。平衡状態や電位分布を表す。</li>
                </ol>
            </ContentBox>
            
            <ContentBox type="proof" title="Proof">
                <p>
                    2 階偏微分方程式の特性曲線の方程式 <InlineMath math="A(dy)^2 - B dx dy + C(dx)^2 = 0" />、すなわち
                    <BlockMath math="A \left( \frac{dy}{dx} \right)^2 - B \frac{dy}{dx} + C = 0" />
                    という特性方向に注目する。この 2 次方程式の解は
                    <BlockMath math="\frac{dy}{dx} = \frac{B \pm \sqrt{B^2 - 4AC}}{2A}" />
                    で与えられるため、判別式 <InlineMath math="\Delta = B^2 - 4AC" /> の符号によって実指数（実特性曲線）の性質が決まる。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\Delta > 0" />：2 つの異なる実根が存在し、2 つの独立した実特性曲線が定義される。これが物理的な情報の伝播経路（波面）に対応する。</li>
                    <li><InlineMath math="\Delta = 0" />：重根を持ち、唯一の実特性曲線が存在する。</li>
                    <li><InlineMath math="\Delta < 0" />：実根が存在せず、物理的な意味での実特性曲線は定義されない。</li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                私たちが §4.1 で見た代表的な方程式を判別式で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.4-1 (代表的な方程式の分類)">
                <ul className="list-disc list-inside space-y-2">
                    <li><b>波動方程式</b> (<InlineMath math="u_{tt} = c^2 u_{xx}" />): <InlineMath math="u_{tt} - c^2 u_{xx} = 0" /> と書くと、<InlineMath math="A=1, B=0, C=-c^2" /> より <InlineMath math="\Delta = 4c^2 > 0" />（双曲型）。</li>
                    <li><b>熱方程式</b> (<InlineMath math="u_t = \alpha u_{xx}" />): <InlineMath math="-\alpha u_{xx} + u_t = 0" /> と書くと、<InlineMath math="A=-\alpha, B=0, C=0" /> より <InlineMath math="\Delta = 0" />（放物型）。</li>
                    <li><b>ラプラス方程式</b> (<InlineMath math="u_{xx} + u_{yy} = 0" />): <InlineMath math="A=1, B=0, C=1" /> より <InlineMath math="\Delta = -4 < 0" />（楕円型）。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">標準形への変換</h2>

            <p className="leading-relaxed">
                適切な座標変換を行うことで、最高階の項を最も単純な形式（標準形）に変換することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-2 (標準形への変換)">
                <p>
                    判別式が一定の符号を保つ領域において、常に滑らかな座標変換 <InlineMath math="(\xi, \eta)" /> が存在し、
                    方程式を以下の<b>標準形</b>（normal form）に帰着させることができる：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>双曲型: <InlineMath math="u_{\xi \eta} + \dots = 0" /></li>
                    <li>放物型: <InlineMath math="u_{\eta \eta} + \dots = 0" /></li>
                    <li>楕円型: <InlineMath math="u_{\xi \xi} + u_{\eta \eta} + \dots = 0" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    双曲型の場合、特性曲線 <InlineMath math="A(y')^2 - B y' + C = 0" /> の解として得られる 2 つの曲線族 <InlineMath math="\phi(x, y) = c_1, \psi(x, y) = c_2" /> を新座標 <InlineMath math="\xi = \phi, \eta = \psi" /> に選ぶ。
                    連鎖律を用いて偏導関数を計算すると：
                    <BlockMath math="\frac{\partial}{\partial x} = \phi_x \frac{\partial}{\partial \xi} + \psi_x \frac{\partial}{\partial \eta}" />
                    最高階の項 <InlineMath math="u_{xx}, u_{xy}, u_{yy}" /> を代入すると、特性曲線の定義より <InlineMath math="u_{\xi \xi}" /> と <InlineMath math="u_{\eta \eta}" /> の係数が 0 になり、
                    結果として混合偏導関数 <InlineMath math="u_{\xi \eta}" /> が主要部として残る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="物理的特性の違い">
                <p>
                    これら 3 つの型は、情報の「伝わり方」が本質的に異なります。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><b>双曲型</b>は、情報が<b>有限の速度</b>で伝わります（波の伝播）。</li>
                    <li><b>放物型</b>は、初期の影響が<b>瞬時に全空間</b>に広がりますが、時間とともに減衰します（熱の拡散）。</li>
                    <li><b>楕円型</b>は、ある点での変化が<b>全領域</b>に即座に波及し、平衡状態を作り出します（静電位の分布）。</li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>2 階線形 PDE は判別式 <InlineMath math="B^2-4AC" /> により、<b>双曲型・放物型・楕円型</b>に分類される。</li>
                    <li>双曲型は<b>波動</b>、放物型は<b>拡散</b>、楕円型は<b>平衡</b>を記述する。</li>
                    <li>特性曲線を用いた座標変換により、主要部を簡略化した<b>標準形</b>に変換できる。</li>
                    <li>この分類は、数値計算の手法選定（安定性条件など）においても決定的な役割を果たす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
