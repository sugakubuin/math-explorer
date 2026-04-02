import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GlobalStabilityAndApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに学んだリャプノフの安定性定理は、平衡点の近傍での挙動を保証するものでした。
                本節では、より広い範囲（あるいは空間全体）で安定性が保たれる「大域的安定性」を議論するためのラサールの不変原理と、その具体的な応用例である SIR モデルを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラサールの不変原理</h2>

            <p className="leading-relaxed">
                リャプノフ関数の微分 <InlineMath math="\dot{V}" /> が「負定値」でなく「負準定値」（<InlineMath math="\dot{V} \leq 0" />）であっても、収束先を絞り込める強力な定理です。
            </p>

            <ContentBox type="definition" title="Definition 3.5-1 (不変集合)">
                <p>
                    集合 <InlineMath math="M" /> が<b>不変集合</b>（invariant set）であるとは、平衡点からの軌道 <InlineMath math="\phi_t(\mathbf{x}_0)" /> において、
                    <BlockMath math="\mathbf{x}_0 \in M \implies \phi_t(\mathbf{x}_0) \in M \quad (\forall t \in \mathbb{R})" />
                    が成り立つことをいう。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                不変集合の最も単純な例は、平衡点そのものや閉軌道です。
            </p>

            <ContentBox type="example" title="Example 3.5-1 (不変集合の例)">
                <p>
                    自律系において、平衡点 <InlineMath math="\{ \mathbf{x}^* \}" /> は不変集合である。
                    一度平衡点に達した（あるいは最初から平衡点にいる）軌道は、そこから動くことはない。
                    また、Example 3.4-2 で見たリミットサイクルも、その曲線上の点から出発した軌道はずっとその曲線上に留まるため、不変集合となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="theorem" title="Theorem 3.5-1 (ラサールの不変原理)">
                <p>
                    <InlineMath math="V" /> をあるコンパクトな正の不変領域 <InlineMath math="\Omega" /> 上で定義されたリャプノフ関数（<InlineMath math="\dot{V} \leq 0" />）とする。
                    <InlineMath math="E = \{ \mathbf{x} \in \Omega \mid \dot{V}(\mathbf{x}) = 0 \}" /> と置き、<InlineMath math="M" /> を <InlineMath math="E" /> に含まれる<b>最大不変集合</b>とする。
                    このとき、<InlineMath math="\Omega" /> 内から出発するすべての軌道は、時間とともに <InlineMath math="M" /> に収束する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この原理により、リャプノフ関数が単調減少するだけでは特定できない収束先を、不変性の議論を用いて絞り込むことができます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    軌道 <InlineMath math="\mathbf{x}(t)" /> はコンパクト集合 <InlineMath math="\Omega" /> 内に留まるため、その極限集合 <InlineMath math="\omega(\mathbf{x}_0)" /> は空ではなく、<InlineMath math="\Omega" /> 内の不変集合になる。
                    <InlineMath math="V(\mathbf{x}(t))" /> は単調減少かつ下に有界であるため、極限値 <InlineMath math="c" /> に収束する。
                    極限集合 <InlineMath math="\omega" /> 上では常に <InlineMath math="V(\mathbf{x}) = c" /> であり、時間微分 <InlineMath math="\dot{V}" /> も 0 となる。
                    したがって <InlineMath math="\omega \subset E" /> である。
                    <InlineMath math="\omega" /> は不変集合であるため、<InlineMath math="E" /> 内の最大不変集合 <InlineMath math="M" /> に含まれることになる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この原理の利点は、<InlineMath math="\dot{V}=0" /> となる点が平衡点以外にあっても、そこが「不変」でなければ通り抜けてしまうことを保証する点にあります。
            </p>

            <ContentBox type="example" title="Example 3.5-2 (減衰のある振り子)">
                <p>
                    摩擦のある振り子系 <InlineMath math="\dot{x}_1 = x_2, \dot{x}_2 = -\sin x_1 - k x_2 \ (k>0)" /> において、全エネルギー <InlineMath math="V = \frac{1}{2}x_2^2 + (1 - \cos x_1)" /> をリャプノフ関数に取る。
                    計算すると <InlineMath math="\dot{V} = -k x_2^2 \leq 0" /> となる。
                    <InlineMath math="\dot{V}=0" /> となる集合 <InlineMath math="E" /> は <InlineMath math="x_2 = 0" />（速度ゼロ）の軸全体だが、この軸上で原点以外の不変集合（静止し続けられる点）は存在しない。
                    ゆえに、ラサールの不変原理により、軌道は必ず原点（平衡点）へ収束する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">感染症モデル（SIR モデル）への応用</h2>

            <p className="leading-relaxed">
                非線形ダイナミクスの実用的な例として、人口集団内での感染拡大を記述する SIR モデルの安定性を解析します。
            </p>

            <ContentBox type="definition" title="Definition 3.5-2 (SIR モデル)">
                <p>
                    感受性保持者 (S)、感染者 (I)、回復者 (R) の比率の変化を以下の微分方程式系で表す：
                    <BlockMath math="\begin{cases} \dot{S} = -\beta SI \\ \dot{I} = \beta SI - \gamma I \\ \dot{R} = \gamma I \end{cases}" />
                    ここで <InlineMath math="\beta" /> は感染率、<InlineMath math="\gamma" /> は回復率である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このモデルの振る舞いを理解するため、典型的なパラメータ設定での挙動を考えます。
            </p>

            <ContentBox type="example" title="Example 3.5-3 (SIR モデルの閾値)">
                <p>
                    十分に大きな人口に対して感染が広がるかどうかは、基本再生産数 <InlineMath math="R_0 = \beta / \gamma" /> に依存する。
                    もし <InlineMath math="R_0 = 0.5 < 1" /> ならば、一人が感染させられる人数が 1 未満であるため、感染者は指数関数的に減少し、流行は発生しない。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この直感を数学的に定理としてまとめます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.5-2 (SIR モデルの漸近安定性)">
                <p>
                    <InlineMath math="R_0 = \beta / \gamma \leq 1" /> ならば、感染者数 <InlineMath math="I(t)" /> は常に減少し、感染は拡大しない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="I" /> に関する方程式 <InlineMath math="\dot{I} = (\beta S - \gamma)I" /> に注目する。
                    人口全体 <InlineMath math="S+I+R" /> は一定（不変）であり、<InlineMath math="\dot{S} \leq 0" /> より <InlineMath math="S(t) \leq S(0)" /> である。
                    初期状態で <InlineMath math="S(0) \leq 1" /> とすると、 <InlineMath math="\beta S(0) - \gamma \leq \beta - \gamma" /> である。
                    <InlineMath math="R_0 \leq 1" /> すなわち <InlineMath math="\beta \leq \gamma" /> ならば、<InlineMath math="\dot{I} \leq 0" /> となり、<InlineMath math="I(t)" /> は増加することなく 0 へ収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="大域的安定性の社会的重要性">
                <p>
                    SIR モデルのような応用例において、一部の近傍だけでなく「どのような初期状態から始めても最終的にどこへ行くか」を保証する大域的安定性の議論は、政策決定や予測において極めて重要な役割を果たします。
                    不変原理を用いることで、複雑な非線形相互作用があっても、長期的にはパラメータによって定まる一定の状態に落ち着くことを数学的に示すことができます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ラサールの不変原理</b>：リャプノフ関数の微分の負準定性を、不変集合の概念を用いて補完し、収束性を証明する。</li>
                    <li><b>大域的安定性</b>：初期値がどこであっても平衡点（または特定の集合）に収束する性質。</li>
                    <li><b>SIR モデル</b>：感染症の動態を記述するモデル。パラメータ <InlineMath math="R_0" /> が安定性の分岐点となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
