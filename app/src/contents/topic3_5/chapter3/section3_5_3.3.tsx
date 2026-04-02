import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LyapunovFunctionMethod() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で学んだ線形化による安定性判別は、固有値の実部が 0 の場合には適用できませんでした。
                本節では、エネルギー関数を一般化した「リャプノフ関数」を用いることで、非線形系に対しても直接的に安定性を判別できる「リャプノフの直接法（第二法）」を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正定値関数とリャプノフ関数</h2>

            <p className="leading-relaxed">
                まず、系の「エネルギー」に相当するスカラー関数の性質を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.3-1 (正定値関数)">
                <p>
                    平衡点 <InlineMath math="\mathbf{x}^*" /> を含む領域 <InlineMath math="U" /> で定義された連続なスカラー関数 <InlineMath math="V(\mathbf{x})" /> が以下の条件を満たすとき、これを<b>正定値関数</b>（positive definite function）と呼びます：
                </p>
                <ul className="list-decimal list-inside mt-4 leading-relaxed space-y-2">
                    <li><InlineMath math="V(\mathbf{x}^*) = 0" /></li>
                    <li><InlineMath math="\mathbf{x} \neq \mathbf{x}^* \implies V(\mathbf{x}) > 0 \quad (\forall \mathbf{x} \in U)" /></li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                正定値関数の典型的な例は、平衡点からの距離の 2 乗に関連するものです。
            </p>

            <ContentBox type="example" title="Example 3.3-1 (2 次形式のリャプノフ関数)">
                <p>
                    原点を平衡点とする系において、2 次形式 <InlineMath math="V(\mathbf{x}) = x_1^2 + x_2^2" /> は明らかに正定値関数である。
                    より一般には、正定値対称行列 <InlineMath math="P" /> を用いた <InlineMath math="V(\mathbf{x}) = \mathbf{x}^T P \mathbf{x}" /> が正定値関数となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                これらの関数が系の軌道に沿ってどのように変化するかが、安定性の鍵となります。
            </p>

            <ContentBox type="definition" title="Definition 3.3-2 (リャプノフ関数)">
                <p>
                    自律系 <InlineMath math="\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x})" /> に対して、正定値関数 <InlineMath math="V" /> が
                    <BlockMath math="\dot{V}(\mathbf{x}) = \nabla V(\mathbf{x}) \cdot \mathbf{f}(\mathbf{x}) \leq 0 \quad (\forall \mathbf{x} \in U)" />
                    を満たすとき、これを<b>リャプノフ関数</b>（Lyapunov function）と呼ぶ。
                    特に、<InlineMath math="\dot{V} < 0" />（<InlineMath math="\mathbf{x} \neq \mathbf{x}^*" /> で負定値）のとき、<b>強いリャプノフ関数</b>と呼ぶことがある。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な計算例で、関数の時間変化を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.3-2 (リャプノフ関数の微分)">
                <p>
                    2 次元の線形系 <InlineMath math="\dot{\mathbf{x}} = A\mathbf{x}, \ A = \begin{pmatrix} -1 & 0 \\ 0 & -2 \end{pmatrix}" /> に対して、
                    <InlineMath math="V(\mathbf{x}) = x_1^2 + x_2^2" /> を考える。このとき
                    <BlockMath math="\begin{aligned} \dot{V} &= 2x_1 \dot{x}_1 + 2x_2 \dot{x}_2 \\ &= 2x_1(-x_1) + 2x_2(-2x_2) \\ &= -2x_1^2 - 4x_2^2 \end{aligned}" />
                    となり、<InlineMath math="\dot{V}" /> は負定値である。したがって <InlineMath math="V" /> は強いリャプノフ関数であり、原点が漸近安定であることが期待される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リャプノフ安定性定理</h2>

            <p className="leading-relaxed">
                リャプノフ関数が存在することは、系が安定であることを保証する十分条件となります。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (リャプノフの安定性定理)">
                <p>
                    平衡点 <InlineMath math="\mathbf{x}^*" /> に対して、
                </p>
                <ul className="list-decimal list-inside mt-4 leading-relaxed space-y-2">
                    <li>リャプノフ関数 <InlineMath math="V" /> (<InlineMath math="\dot{V} \leq 0" />) が存在すれば、<InlineMath math="\mathbf{x}^*" /> は<b>安定</b>である。</li>
                    <li>強いリャプノフ関数 <InlineMath math="V" /> (<InlineMath math="\dot{V} < 0" />) が存在すれば、<InlineMath math="\mathbf{x}^*" /> は<b>漸近安定</b>である。</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                この定理を、領域外へ軌道が出られないことを示す幾何的な議論によって証明します。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <b>安定性</b>：任意の <InlineMath math="\varepsilon > 0" /> に対し、<InlineMath math="V" /> は連続で <InlineMath math="V(\mathbf{x}^*) = 0" /> なので、十分に小さな球 <InlineMath math="B_\delta(\mathbf{x}^*)" /> 内で <InlineMath math="V(\mathbf{x}) < c" /> となる <InlineMath math="\delta" /> を取れる。
                    ここで <InlineMath math="c = \inf_{\partial B_\varepsilon} V > 0" /> である。<InlineMath math="\dot{V} \leq 0" /> より軌道に沿って <InlineMath math="V" /> は減少し、<InlineMath math="V(\mathbf{x}(t)) \leq V(\mathbf{x}(0)) < c" /> となる。
                    したがって軌道が球面 <InlineMath math="\partial B_\varepsilon" /> に到達することはなく、<InlineMath math="\varepsilon" /> 圏内に留まる。
                </p>
                <p>
                    2. <b>漸近安定性</b>：<InlineMath math="\dot{V} < 0" /> より <InlineMath math="V" /> は単調減少で下に有界なので、極限 <InlineMath math="L = \lim_{t \to \infty} V(\mathbf{x}(t))" /> が存在する。
                    もし <InlineMath math="L > 0" /> ならば、収束先が原点でないことになり、その領域で <InlineMath math="\dot{V}" /> が負の定数以下となるため、<InlineMath math="V" /> が有限時間で 0 を下回り矛盾する。
                    よって <InlineMath math="V \to 0" /> すなわち <InlineMath math="\mathbf{x} \to \mathbf{x}^*" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                非線形系に対して具体的にリャプノフ関数を構成する例を確認します。
            </p>

            <ContentBox type="example" title="Example 3.3-3 (非線形系への適用)">
                <p>
                    系 <InlineMath math="\dot{x}_1 = -x_1 + x_1 x_2^2, \dot{x}_2 = -x_2" /> に対して、<InlineMath math="V = \frac{1}{2}(x_1^2 + x_2^2)" /> というリャプノフ候補関数を考える。
                    時間微分を計算すると：
                    <BlockMath math="\begin{aligned} \dot{V} &= x_1(-x_1 + x_1 x_2^2) + x_2(-x_2) \\ &= -x_1^2 - x_2^2 + x_1^2 x_2^2 \\ &= -(x_1^2 + x_2^2) + x_1^2 x_2^2 \end{aligned}" />
                    原点の近傍（例えば <InlineMath math="x_2^2 < \frac{1}{2}" /> の範囲など）では <InlineMath math="\dot{V} < 0" /> となり、局所的漸近安定が証明される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">チェタエフの不安定性定理</h2>

            <p className="leading-relaxed">
                逆に、不安定であることを示すための定理も存在します。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-2 (チェタエフの不安定性定理)">
                <p>
                    ある関数 <InlineMath math="V" /> が存在し、平衡点 <InlineMath math="\mathbf{x}^*" /> の任意の近傍に <InlineMath math="V > 0" /> となる点があり、その領域で常に <InlineMath math="\dot{V} > 0" /> かつ <InlineMath math="V" /> が有界ならば、<InlineMath math="\mathbf{x}^*" /> は<b>不安定</b>である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                チェタエフの定理を用いると、リャプノフ関数の減少ではなく「増大」を利用して不安定性を証明できます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    領域 <InlineMath math="V > 0" /> 内の点から出発した軌道を考える。<InlineMath math="\dot{V} > 0" /> より、<InlineMath math="V" /> は時間とともに増加し続ける。
                    もし軌道が平衡点近傍に留まり続けるならば、ある正数 <InlineMath math="\alpha" /> に対して <InlineMath math="\dot{V} \geq \alpha > 0" /> となることが示せる。
                    積分すると <InlineMath math="V(t) \geq V(0) + \alpha t" /> となり、これは時間に比例して <InlineMath math="V" /> が増大し続けることを意味する。
                    これは <InlineMath math="V" /> の有界性、あるいは軌道が近傍内に留まるという仮定と矛盾するため、平衡点は不安定である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="リャプノフ関数を見つける難しさ">
                <p>
                    リャプノフ関数法は系を解かずに安定性を判別できる強力な手法ですが、「適切なリャプノフ関数をどう見つけるか」という一般的かつ系統的な手順は存在しません。
                    物理的なエネルギーを参考にしたり、可変勾配法などの特殊な手法を試みる必要があります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>正定値関数</b>：平衡点以外で常に正の値を取るスカラー関数。</li>
                    <li><b>リャプノフ関数</b>：軌道に沿って値が減少（または不変）する正定値関数。</li>
                    <li><b>安定性定理</b>：適切なリャプノフ関数を見つければ、安定性や漸近安定性が保証される。</li>
                    <li><b>チェタエフの定理</b>：関数の局所的な増大を利用して、系の不安定性を証明する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
