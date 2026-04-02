import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PoincareBendixsonTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                2 次元の力学系（平面上の自律系）において、軌道の長時間挙動は驚くほど制限されています。
                カオスのような複雑な挙動は現れず、軌道は平衡点に収束するか、周期解（リミットサイクル）に落ち着くかのいずれかです。
                これを保証するのがポアンカレ・ベンディクソンの定理です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ポアンカレ・ベンディクソンの定理</h2>

            <p className="leading-relaxed">
                軌道の極限集合がどのような形を取るかについて、強力な制約を与えます。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (正の極限集合)">
                <p>
                    軌道 <InlineMath math="\phi_t(\mathbf{x}_0)" /> に対して、時間 <InlineMath math="t \to \infty" /> での累積点全体の集合を<b>正の極限集合</b>（<InlineMath math="\omega" />-limit set）と呼び、<InlineMath math="\omega(\mathbf{x}_0)" /> と記す。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                極限集合は、平衡点であったり、あるいは閉軌道であったりします。
            </p>

            <ContentBox type="example" title="Example 3.4-1 (極限集合の例)">
                <p>
                    安定焦点を持つ系では、その平衡点自体が唯一の正の極限集合となります。
                    一方、安定なリミットサイクルを持つ系（Example 3.4-2 参照）では、そのサイクル上の点集合が極限集合となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="theorem" title="Theorem 3.4-1 (ポアンカレ・ベンディクソンの定理)">
                <p>
                    平面上の自律系 <InlineMath math="\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x})" /> において、有界な正の半軌道 <InlineMath math="\gamma^+" /> が平衡点を含まないコンパクトな集合 <InlineMath math="D" /> 内に留まるとする。
                    このとき、極限集合 <InlineMath math="\omega(\gamma^+)" /> は<b>閉軌道（周期軌道）</b>である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定理は、2 次元の相平面における軌道の長時間挙動を決定づける極めて重要な結果です。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <b>不変性</b>：有界な軌道はコンパクトな極限集合 <InlineMath math="\omega" /> を持ち、これは不変集合である。
                    2. <b>ポアンカレ断面</b>：<InlineMath math="\omega" /> 内の点を通るポアンカレ断面（軌道と横断的に交わる線分）を考える。
                    軌道がこの断面を繰り返し横切る際、交点は単調に並ぶ必要があり、その極限として周期軌道が構成される。
                    3. <b>2 次元の特殊性</b>：平面上では軌道が自分自身を追い越したり絡み合ったりできない（ジョルダンの閉曲線定理）ため、複雑な挙動が排除され、周期解に落ち着くことが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理の直感的な意味は、「平面上で迷子になった（有界な）軌道は、平衡点にたどり着けないなら、必ずどこかで輪っか（周期軌道）になる」ということです。
            </p>

            <ContentBox type="example" title="Example 3.4-2 (ファン・デル・ポール方程式)">
                <p>
                    非線形振動の代表例であるファン・デル・ポール系 <InlineMath math="\ddot{x} - \mu(1-x^2)\dot{x} + x = 0" /> は、原点が不安定平衡点であり、遠方では軌道が内側に引き込まれる性質を持つ。
                    ポアンカレ・ベンディクソンの定理により、その中間に唯一の安定なリミットサイクルが存在することが証明される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">閉軌道の非存在条件</h2>

            <p className="leading-relaxed">
                逆に、系に閉軌道が存在しないことを示す簡便な判定法があります。
            </p>

            <ContentBox type="theorem" title="Theorem 3.4-2 (ベンディクソン・デュラックの判定法)">
                <p>
                    単連結領域 <InlineMath math="D \subset \mathbb{R}^2" /> において、あるスカラー関数 <InlineMath math="\rho(x, y)" /> が存在し、
                    <BlockMath math="\mathrm{div}(\rho \mathbf{f}) = \frac{\partial (\rho f_1)}{\partial x} + \frac{\partial (\rho f_2)}{\partial y}" />
                    が <InlineMath math="D" /> 上で常に正（または常に負）であれば、<InlineMath math="D" /> 内に閉軌道は存在しない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    背理法を用いる。<InlineMath math="D" /> 内に閉軌道 <InlineMath math="C" /> が存在すると仮定し、<InlineMath math="C" /> で囲まれた領域を <InlineMath math="A" /> とする。グリーンの定理より
                    <BlockMath math="\iint_A \mathrm{div}(\rho \mathbf{f}) dx dy = \oint_C (\rho \mathbf{f}) \cdot \mathbf{n} ds" />
                    ここで <InlineMath math="\mathbf{n}" /> は外向き法線ベクトルである。軌道 <InlineMath math="C" /> 上では速度ベクトル <InlineMath math="\mathbf{f}" /> と法線ベクトル <InlineMath math="\mathbf{n}" /> は常に直交するため、右辺の線積分は 0 となる。
                    しかし左辺は、被積分関数が常に正（または負）であるという仮定により 0 にはならず、矛盾が生じる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-3 (閉軌道の排除)">
                <p>
                    系 <InlineMath math="\dot{x} = x + x^3, \dot{y} = y + y^3" /> を考える。<InlineMath math="\rho=1" /> と取ると
                    <BlockMath math="\begin{aligned} \mathrm{div}\mathbf{f} &= \frac{\partial}{\partial x}(x+x^3) + \frac{\partial}{\partial y}(y+y^3) \\ &= 1+3x^2 + 1+3y^2 = 2+3(x^2+y^2)\end{aligned}" />
                    これは常に正である。よって、この系には平面上のどこにも閉軌道は存在しない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="2 次元系の特殊性">
                <p>
                    ポアンカレ・ベンディクソンの定理は 2 次元特有のものです。3 次元以上の系では、軌道が互いに絡み合ったり、より複雑な引き込みを起こしたりすることが可能になり、「カオス」と呼ばれる現象が現れます（§3.6 参照）。
                </p>
            </ContentBox>
        </section>
    );
}
