import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NonHomogeneousLinearSystems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                現実の物理現象や工学システムでは、外部からの入力や外力が働く「非同次」の方程式を扱うのが一般的です。
                本節では、同次系の一般解（行列指数関数）をもとに、非同次連立微分方程式の一般解を導き出す「定数変化法」の手順を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定数変化法と一般解の公式</h2>

            <p>
                外部入力をベクトル <InlineMath math="\mathbf{f}(t)" /> とすると、非同次連立方程式は次のように書かれます。
                <BlockMath math="\dot{\mathbf{x}}(t) = A \mathbf{x}(t) + \mathbf{f}(t)" />
                この方程式の一般解は、行列指数関数を用いた積分形式で美しく構成されます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (非同次系の一般解)">
                <p>
                    初期条件 <InlineMath math="\mathbf{x}(0) = \mathbf{x}_0" /> を持つ非同次連立 1 階常微分方程式の解は、
                    <BlockMath math="\mathbf{x}(t) = e^{tA} \mathbf{x}_0 + \int_0^t e^{(t-s)A} \mathbf{f}(s) \, ds" />
                    で与えられる。
                </p>
            </ContentBox>

            <p>
                この式の導出方法は、スカラーの場合の定数変化法をそのまま行列に拡張したものです。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    同次系の解 <InlineMath math="\mathbf{x}(t) = e^{tA} \mathbf{c}" /> において、定数ベクトル <InlineMath math="\mathbf{c}" /> を時間の関数 <InlineMath math="\mathbf{c}(t)" /> とおき、元の方程式に代入する。
                    <BlockMath math="\begin{aligned} \frac{d}{dt}(e^{tA} \mathbf{c}(t)) &= A e^{tA} \mathbf{c}(t) + \mathbf{f}(t) \\ A e^{tA} \mathbf{c}(t) + e^{tA} \dot{\mathbf{c}}(t) &= A e^{tA} \mathbf{c}(t) + \mathbf{f}(t) \end{aligned}" />
                    整理すると、<InlineMath math="e^{tA} \dot{\mathbf{c}}(t) = \mathbf{f}(t)" /> となり、両辺に左から <InlineMath math="e^{-tA}" /> を掛けると
                    <BlockMath math="\dot{\mathbf{c}}(t) = e^{-tA} \mathbf{f}(t)" />
                    となる。これを区間 <InlineMath math="[0, t]" /> で積分すると
                    <BlockMath math="\mathbf{c}(t) = \mathbf{c}(0) + \int_0^t e^{-sA} \mathbf{f}(s) \, ds" />
                    が得られる。これに <InlineMath math="\mathbf{c}(0) = \mathbf{x}_0" /> を代入し、左から <InlineMath math={'e^{tA}'} /> を掛ければ定理の式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体的な外力が加わる振動系での計算例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 2.4-1 (具体的計算例)">
                <p>
                    次の系に余弦波の外力を加えた場合を考える。
                    <BlockMath math="\dot{\mathbf{x}} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \mathbf{x} + \begin{pmatrix} \cos t \\ 0 \end{pmatrix}, \quad \mathbf{x}(0) = \mathbf{0}" />
                    §2.3 の結果から <InlineMath math="e^{tA} = \begin{pmatrix} \cos t & \sin t \\ -\sin t & \cos t \end{pmatrix}" /> である。
                    公式に代入すると、第 1 成分の積分には <InlineMath math="\cos(t-s) \cos s" /> のような畳み込みが現れる。
                    <BlockMath math="\begin{aligned} \mathbf{x}(t) &= \int_0^t \begin{pmatrix} \cos(t-s) & \sin(t-s) \\ -\sin(t-s) & \cos(t-s) \end{pmatrix} \begin{pmatrix} \cos s \\ 0 \end{pmatrix} \, ds \\ &= \int_0^t \begin{pmatrix} \cos(t-s) \cos s \\ -\sin(t-s) \cos s \end{pmatrix} \, ds \end{aligned}" />
                    これを三角関数の積和公式で展開して積分すると、<InlineMath math="t" /> に比例する項が含まれることがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用：共鳴現象と安定性</h2>

            <p>
                外力と系の固有振動数が一致するときに、解が時間とともに増大する「共鳴」が発生します。
            </p>

            <ContentBox type="example" title="Example 2.4-2 (共鳴の具体例)">
                <p>
                    単振動の方程式に、固有振動数 <InlineMath math="\omega" /> と同じ振動数の外力を加えたケース
                    <BlockMath math="\ddot{y} + \omega^2 y = \cos \omega t" />
                    を 2 次元 1 階形式に直して解く。解には <InlineMath math="t \sin \omega t" /> という項が含まれる。
                    <BlockMath math="y(t) = \frac{t}{2\omega} \sin \omega t" />
                    となり、これは時間 <InlineMath math="t" /> とともに振幅が無限に増大し続けることを示している。
                </p>
            </ContentBox>

            <p>
                この現象は、工学的に非常に重要な意味を持っています。
            </p>

            <ContentBox type="remark" title="工学的意味">
                <p>
                    「共鳴」は楽器の豊かな響きを生む一方で、建物の崩壊や機械の破損を招く危険な現象でもあります。
                    この定数変化法による解法は、制御工学における「周波数応答」や「伝達関数」の概念へと直結しており、システムに入力（外力）を与えたときに、それがどのように増幅されたり減衰したりするかを予測する理論的基盤となっています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>定数変化法</b>：同次解をもとに非同次解を構成する、システマティックな手法。</li>
                    <li><b>たたみ込み積分</b>：外力の履歴を行列指数関数で重み付けして足し合わせる構造。</li>
                    <li><b>共鳴</b>：外力の振動成分が系の固有値と干渉し、解が多項式増大（発散）する現象。</li>
                    <li><b>応用</b>：周波数応答の解析や、制御系の設計において基本となる計算である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
