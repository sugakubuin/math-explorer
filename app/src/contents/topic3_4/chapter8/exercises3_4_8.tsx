import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_4_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="8" number={1}>
                    <p>
                        熱方程式 <InlineMath math="\frac{\partial u}{\partial t} = \kappa \frac{\partial^2 u}{\partial x^2}" /> に対して空間変数 <InlineMath math="x" /> についてフーリエ変換を施すと、どのような常微分方程式 (ODE) に変換されるか、変換後の表示を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            §8.1 (Example 8.1-1) に基づき、 <InlineMath math="\partial^2 u/\partial x^2" /> は <InlineMath math="-\xi^2 \hat{u}" /> に変換される。
                        </p>
                        <BlockMath math="\frac{d \hat{u}(\xi,t)}{dt} = -\kappa \xi^2 \hat{u}(\xi,t)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>
                        波動方程式 <InlineMath math="\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}" /> に対して空間フーリエ変換を施した場合、得られる ODE の一般解の形式を、初期条件 <InlineMath math="\hat{f}(\xi)" />, <InlineMath math="\hat{g}(\xi)" /> を用いて記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            §8.2 (Example 8.2-1) に基づき、単振動の ODE となる。
                        </p>
                        <BlockMath math="\hat{u}(\xi,t) = \hat{f}(\xi) \cos(c\xi t) + \hat{g}(\xi) \frac{\sin(c\xi t)}{c\xi}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>
                        熱方程式の基本解である<b>ガウス熱核 <InlineMath math="G_t(x)" /></b> および上半平面におけるラプラス方程式の<b>ポアソン核 <InlineMath math="P_y(x)" /></b> の具体的な形をそれぞれ記せ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-1">
                            <li>熱核（Proposition 8.1-1）： <b><InlineMath math="G_t(x) = \frac{1}{\sqrt{4\pi \kappa t}} e^{-\frac{x^2}{4\kappa t}}" /></b></li>
                            <li>ポアソン核（Proposition 8.3-1）： <b><InlineMath math="P_y(x) = \frac{1}{\pi} \frac{y}{x^2 + y^2}" /></b></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="8" number={4}>
                    <p>
                        波動方程式において、初期変位 <InlineMath math="f(x) = e^{-x^2}" />、初期速度 <InlineMath math="g(x) = 0" /> の場合、ダランベールの公式を用いて時刻 <InlineMath math="t" /> における解 <InlineMath math="u(x,t)" /> を求め、その物理的意味を説明せよ（Example 8.2-2）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ダランベールの公式に代入すると、 <b><InlineMath math="u(x,t) = \frac{1}{2} e^{-(x+ct)^2} + \frac{1}{2} e^{-(x-ct)^2}" /></b> となる。
                        </p>
                        <p className="mt-2">
                            この解は、原点にあった初期波形が半分ずつの高さに分裂し、波形を保ったまま速度 <InlineMath math="\pm c" /> で左右に伝播していく様子を表している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p>
                        熱方程式が持つ「<b>平滑化効果 (Smoothing Effect)</b>」について、周波数領域における解の減衰項 <InlineMath math="e^{-\kappa \xi^2 t}" /> の形から説明せよ（Example 8.1-1 Remark）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            減衰項は周波数 <InlineMath math="\xi" /> の二乗に比例して大きくなる。即ち、高周波成分（信号の急峻な変化や不連続点）ほど、時間が経過すると極めて速くゼロに収束する。
                        </p>
                        <p className="mt-2">
                            結果として、空間ドメインにおける解 <InlineMath math="u(x,t)" /> は、初期条件が不連続であってもわずかな時間 <InlineMath math="t > 0" /> で無限回微分可能な滑らかな曲線へと変化する。これが平滑化効果の正体である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>
                        境界条件が <InlineMath math="f(t) = \mathbf{1}_{[-1,1]}(t)" /> である上半平面ラプラス方程式において、ポアソン積分（Example 8.3-2）を用いて一点 <InlineMath math="(0, 1)" /> における解（温度）を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="u(0,1) = \frac{1}{\pi} \int_{-1}^1 \frac{1}{(0-t)^2 + 1^2} dt = \frac{1}{\pi} \int_{-1}^1 \frac{1}{t^2 + 1} dt" /> である。
                            積分結果より、
                        </p>
                        <BlockMath math="u(0,1) = \frac{1}{\pi} [\arctan t]_{-1}^1 = \frac{1}{\pi} (\pi/4 - (-\pi/4)) = 0.5" />
                        <p>
                            が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={7}>
                    <p>
                        半無限棒の熱伝導問題（初期値ゼロ、境界ステップ入力 <InlineMath math="u(0,t)=1" />）に対し、ラプラス変換を用いて導かれる解がなぜ相補誤差関数 <InlineMath math="\text{erfc}(x/2\sqrt{\kappa t})" /> を用いて記述されるのか、その手順を述べよ（Example 8.4-3）。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-1">
                            <li>時間ラプラス変換を施し、斉次 ODE <InlineMath math="sU = \kappa U_{xx}" /> を得る。</li>
                            <li>境界条件を満たし、無限遠で有界な解 <InlineMath math="U(x,s) = \frac{1}{s} e^{-x \sqrt{s/\kappa}}" /> を導出する。</li>
                            <li>逆ラプラス変換の公式（Proposition 8.4-1）を適用することで、 erfc 表示の解を得る。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="8" number={8}>
                    <p>
                        熱核 <InlineMath math="G_t(x)" /> の全空間積分が、任意時刻 <InlineMath math="t > 0" /> において常に 1（<InlineMath math="\int_{-\infty}^\infty G_t(x) dx = 1" />）であることを、ガウス積分の公式を用いて示せ。また、これが物理的に何を意味するか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\int_{-\infty}^\infty \frac{1}{\sqrt{4\pi \kappa t}} e^{-\frac{x^2}{4\kappa t}} dx" /> において、 <InlineMath math="\alpha = 1/(4\kappa t)" /> と置くと、
                        </p>
                        <BlockMath math="\frac{1}{\sqrt{4\pi \kappa t}} \int_{-\infty}^\infty e^{-\alpha x^2} dx = \frac{1}{\sqrt{4\pi \kappa t}} \sqrt{\frac{\pi}{\alpha}} = \frac{1}{\sqrt{4\pi \kappa t}} \sqrt{4\pi \kappa t} = 1" />
                        <p>
                            物理的には、外部との熱の出入りがない無限領域において、初期状態の総熱量（エネルギー）が保存されていることを意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={9}>
                    <p>
                        熱方程式（無限領域）と波動方程式における「熱核」と「ダランベールの分裂波」を比較し、情報の伝播速度に関してどのような決定的な違いがあるか、それぞれの解が正の値を持つ範囲に注目して説明せよ（Example 8.2-3）。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li><b>熱方程式</b>：熱核は全空間で常に正である。即ち、原点での熱の変化は、いくら遠くの点でも <InlineMath math="t > 0" /> であれば「瞬時」に伝わる（<b>無限の伝播速度</b>）。</li>
                            <li><b>波動方程式</b>：ダランベールの解は速度 <InlineMath math="c" /> で移動する。点 <InlineMath math="x" /> において値が変化するのは少なくとも時刻 <InlineMath math="t = |x|/c" /> 以降であり、それ以前はゼロのままである（<b>有限の伝播速度</b>）。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={10}>
                    <p>
                        有界区間における熱方程式を時間ラプラス変換で解く手法（Example 8.4-1）において、得られた解 <InlineMath math="U(x,s)" /> が有理関数の形式をとり、無限個の孤立した極を持つ場合、これが Chapter 1, 2 で学んだ「フーリエ級数解」にどのように繋がるか概説せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            逆ラプラス変換を留数定理を用いて実行する場合、解は各極 <InlineMath math="s_n" /> における留数 <InlineMath math="\text{Res}[U(x,s)e^{st}; s_{n}]" /> の無限和として現れる。
                        </p>
                        <p className="mt-2">
                            熱方程式の場合、極は通常 <InlineMath math="s_n = -n^2 \pi^2 \kappa" /> のような負の実数となり、これらは空間方向の「固有値」に対応する。各留数の計算結果がまさにフーリエ級数の各項（固有モードとその時間減衰）と一致するため、ラプラス解析と固有関数展開は、同一の物理現象を異なる数学の窓から捉えた結果であることが示されるのである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
