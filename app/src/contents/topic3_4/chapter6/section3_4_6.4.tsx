import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LaplaceODESection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ラプラス変換の最大の利点の一つは、微分方程式の <b>初期値問題</b> を極めてシステマチックに解けることです。微分操作が <InlineMath math="s" /> の代数演算に置き換わるため、微分方程式を解く作業は「有理関数の部分分数分解」へと帰着します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分方程式の解法手順</h2>

            <p>
                ラプラス変換を用いた解法は、以下の 3 つのステップで構成されます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-1 (ラプラス変換による ODE の解法)">
                <ol className="list-decimal list-inside space-y-4 text-sm md:text-base">
                    <li>
                        <b>変換</b>：微分等式全体をラプラス変換し、初期値を代入して <InlineMath math="Y(s)" /> に関する代数方程式を得る。
                    </li>
                    <li>
                        <b>s 領域での解決</b>：代数方程式を解いて、出力信号のラプラス変換 <InlineMath math="Y(s)" /> を求める。
                    </li>
                    <li>
                        <b>逆変換</b>：<InlineMath math="Y(s)" /> を部分分数分解し、時間領域の解 <InlineMath math="y(t)" /> を得る。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この手法の正当性は、微分法則 <InlineMath math="Y'(s) = sY(s) - y(0)" /> による代数化と、ラプラス変換およびその逆変換の一意性に基づいている。微分方程式を満たす解が存在するならば、この代数的プロセスによって得られる解が唯一の解となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-1 (2 階線形 ODE の初期値問題)">
                <p>
                    次の初期値問題を解きます：
                    <BlockMath math="y'' + 3y' + 2y = e^{-3t}, \quad y(0)=1, y'(0)=0" />
                </p>
                <p>
                    両辺をラプラス変換すると：
                </p>
                <BlockMath math="(s^2 Y - s \cdot 1 - 0) + 3(sY - 1) + 2Y = \frac{1}{s+3}" />
                <p>
                    <InlineMath math="Y(s)" /> について整理すると：
                </p>
                <BlockMath math="(s^2 + 3s + 2)Y(s) = s + 3 + \frac{1}{s+3} = \frac{(s+3)^2 + 1}{s+3}" />
                <p>
                    これより <InlineMath math="Y(s) = \frac{s^2+6s+10}{(s+1)(s+2)(s+3)}" /> を得ます。部分分数分解を行うと、<InlineMath math="y(t)" /> が求まります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-2 (1 階 ODE の初期値問題)">
                <p>
                    <InlineMath math="y' + 2y = 0, \quad y(0)=3" /> を解きます。
                </p>
                <p>
                    ラプラス変換すると：
                    <BlockMath math="(sY - 3) + 2Y = 0 \implies (s+2)Y = 3" />
                </p>
                <p>
                    これより <InlineMath math="Y(s) = \frac{3}{s+2}" /> となり、逆変換は <InlineMath math="y(t) = 3e^{-2t}" /> です。古典的な積分因子法に比べ、初期条件が代数方程式の右辺に自然に現れる点が大きな利点です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">共鳴現象と連立 ODE</h2>

            <p>
                外力とシステムの固有振動数が一致する場合に起こる <b>共鳴</b> も、ラプラス領域では「極の重畳（重極）」として代数的に説明できます。
            </p>

            <ContentBox type="example" title="Example 6.4-3 (共鳴現象：外力と固有振動の不一致)">
                <p>
                    <InlineMath math="y'' + y = \sin t, \quad y(0)=0, y'(0)=0" /> を解きます。
                </p>
                <BlockMath math="Y(s) = \frac{1}{(s^2+1)^2}" />
                <p>
                    この <InlineMath math="Y(s)" /> は <InlineMath math="s = \pm i" /> に 2 位の極を持ちます。逆変換を行うと：
                </p>
                <BlockMath math="y(t) = \frac{1}{2}(\sin t - t \cos t)" />
                <p>
                    項 <InlineMath math="t \cos t" /> の存在により、時間 <InlineMath math="t" /> とともに振幅が増大していく「共鳴」が数学的に示されます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-4 (行列形式による連立 ODE)">
                <p>
                    <InlineMath math="\mathbf{y}' = A\mathbf{y}, \quad \mathbf{y}(0) = \mathbf{y}_0" /> のラプラス変換は：
                </p>
                <BlockMath math="(sI - A)\mathbf{Y}(s) = \mathbf{y}_0 \implies \mathbf{Y}(s) = (sI - A)^{-1} \mathbf{y}_0" />
                <p>
                    この逆変換が行列指数関数 <InlineMath math="e^{At}" /> に対応します。逆行列 <InlineMath math="(sI-A)^{-1}" /> の計算は、固有値分解や対角化と密接に関連しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>微分方程式の初期値問題は、ラプラス領域での代数学習に完全に還元される。</li>
                    <li>解の導出過程において、斉次解（自由応答）と特殊解（強制応答）が自動的に合成されて得られる。</li>
                    <li>共鳴や行列形式のシステムなど、より高度な物理現象も統一的な枠組みで解析可能である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
