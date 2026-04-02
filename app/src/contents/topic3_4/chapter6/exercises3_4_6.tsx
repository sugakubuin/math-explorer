import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_4_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        関数 <InlineMath math="f(t)" /> （ただし <InlineMath math="t \ge 0" />）に対する<b>ラプラス変換</b> <InlineMath math="F(s)" /> の定義式を記せ。また、積分が収束する領域（収束半平面）の形状について説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.1-1 および Definition 6.1-2 に基づき、
                        </p>
                        <BlockMath math="F(s) = \int_0^\infty f(t) e^{-st} dt" />
                        <p>
                            収束領域は、ある実数 <InlineMath math="\sigma_0" /> （収束横座標）を用いて複素平面上の右半平面 <b><InlineMath math="\text{Re}(s) > \sigma_0" /></b> の形をとる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        次の関数のラプラス変換を、変換表（Example 6.1-3, 6.1-4 参照）を用いて記せ。
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>(1) <InlineMath math="e^{at}" /></li>
                        <li>(2) <InlineMath math="\sin(\omega t)" /></li>
                        <li>(3) <InlineMath math="t^n" /> （<InlineMath math="n" /> は正の整数）</li>
                    </ul>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-1">
                            <li>(1) <InlineMath math="1/(s-a)" /></li>
                            <li>(2) <InlineMath math="\omega/(s^2+\omega^2)" /></li>
                            <li>(3) <InlineMath math="n!/s^{n+1}" /></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        導関数のラプラス変換に関する<b>微分法則</b>（Proposition 6.2-1）を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="f(t)" /> の変換を <InlineMath math="F(s)" /> とすると、
                        </p>
                        <BlockMath math="\mathcal{L}[f'(t)] = sF(s) - f(0)" />
                        <p>
                            となり、微分操作が代数的な積と初期値の引き算に置き換わる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        周波数シフト則（Proposition 6.2-3）を用いて、減衰振動関数 <InlineMath math="f(t) = e^{-at} \cos(\omega t)" /> のラプラス変換を求めよ（Example 6.2-3 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\mathcal{L}[\cos(\omega t)] = \frac{s}{s^2+\omega^2}" /> である。周波数シフト則 <InlineMath math="\mathcal{L}[e^{at}f(t)] = F(s-a)" /> を適用（<InlineMath math="s \to s+a" />）すると、
                        </p>
                        <BlockMath math="F(s) = \frac{s+a}{(s+a)^2 + \omega^2}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        初期条件 <InlineMath math="y(0) = 3" /> を持つ微分方程式 <InlineMath math="y' + 2y = 0" /> をラプラス変換を用いて解け（Example 6.4-2）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            両辺をラプラス変換すると、 <InlineMath math="(sY - 3) + 2Y = 0 \implies (s+2)Y = 3" />
                        </p>
                        <p>
                            これより、 <InlineMath math="Y(s) = \frac{3}{s+2}" />
                        </p>
                        <p>
                            逆変換を施して、 <b><InlineMath math="y(t) = 3e^{-2t}" /></b>.
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        有理関数 <InlineMath math="F(s) = \frac{s+3}{(s+1)(s+2)}" /> の逆ラプラス変換を、部分分数分解を用いて求めよ（Example 6.3-2）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            部分分数分解 <InlineMath math="F(s) = \frac{A}{s+1} + \frac{B}{s+2}" /> を行う。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><InlineMath math="A = [\frac{s+3}{s+2}]_{s=-1} = 2" /></li>
                            <li><InlineMath math="B = [\frac{s+3}{s+1}]_{s=-2} = -1" /></li>
                        </ul>
                        <p className="mt-2">
                            よって <InlineMath math="F(s) = \frac{2}{s+1} - \frac{1}{s+2}" /> であり、逆変換は <b><InlineMath math="f(t) = 2e^{-t} - e^{-2t}" /></b>.
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        時間遅れを伴う信号 <InlineMath math="f(t) = (t-1)^2 H(t-1)" /> （<InlineMath math="H" /> はヘヴィサイド関数）のラプラス変換を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            推移法則（時間遅れ） <InlineMath math="f(t-a)H(t-a) \leftrightarrow e^{-as} F(s)" /> を用いる。
                            <InlineMath math="a=1, f(t)=t^2" /> とすると、 <InlineMath math="F(s) = 2/s^3" /> であるから、
                        </p>
                        <BlockMath math="F(s) = e^{-s} \frac{2}{s^3}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        畳み込み定理（Theorem 6.2-4）を用いて、共鳴現象を記述する関数 <InlineMath math="h(t) = \int_0^t \sin \tau \cos(t-\tau) d\tau" /> のラプラス変換を求め、さらにその逆変換 <InlineMath math="h(t) = \frac{1}{2} t \sin t" /> を導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            畳み込み定理より、ラプラス変換は積 <InlineMath math="\mathcal{L}[\sin t] \cdot \mathcal{L}[\cos t]" /> となる。
                        </p>
                        <BlockMath math="H(s) = \frac{1}{s^2+1} \cdot \frac{s}{s^2+1} = \frac{s}{(s^2+1)^2}" />
                        <p>
                            この逆変換は、 <InlineMath math="-\frac{1}{2} \frac{d}{ds}(\frac{1}{s^2+1})" /> の形であることに注目する（<InlineMath math="s" /> 領域での微分法則）。
                        </p>
                        <p className="mt-2">
                            <InlineMath math="\mathcal{L}[t f(t)] = -F'(s)" /> より、 <InlineMath math="\mathcal{L}[\sin t] = 1/(s^2+1)" /> を微分すると
                            <BlockMath math="\mathcal{L}[t \sin t] = -(-2s/(s^2+1)^2) = 2s/(s^2+1)^2" />
                            ゆえに、 <b><InlineMath math="h(t) = \frac{1}{2} t \sin t" /></b> が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        2 階線形常微分方程式の初期値問題 <InlineMath math="y'' + y = 0, y(0)=0, y'(0)=1" /> をラプラス変換を用いて解き、単振動の解が得られることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            両辺をラプラス変換し、初期値を代入する：
                        </p>
                        <BlockMath math="(s^2 Y - s y(0) - y'(0)) + Y = 0 \implies (s^2 Y - 1) + Y = 0" />
                        <p>
                            これを <InlineMath math="Y" /> について解くと、 <InlineMath math="Y(s) = \frac{1}{s^2+1}" />
                        </p>
                        <p>
                            既知の逆変換（Example 6.1-3）より、 <b><InlineMath math="y(t) = \sin t" /></b> が得られ、これが初期条件を満たす単振動の解であることが示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        制御工学において、伝達関数 <InlineMath math="G(s)" /> の「極」がすべて複素平面の左半平面（<InlineMath math="\text{Re}(s) < 0" />）に存在することが、なぜシステムの「安定性」を意味するのか、逆ラプラス変換の形から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            逆ラプラス変換は、留数定理に基づき、各極 <InlineMath math="s_k = \sigma_k + i \omega_k" /> における指数関数項 <InlineMath math="e^{s_k t} = e^{\sigma_k t} e^{i \omega_k t}" /> の和として現れる。
                        </p>
                        <p className="mt-2">
                            もしすべての極の実部 <InlineMath math="\sigma_k" /> が負であれば、時間 <InlineMath math="t \to \infty" /> において <InlineMath math="e^{\sigma_k t} \to 0" /> となり、インパルス応答などのシステム出力は時間とともに減衰してゼロに収束する。反対に、一つでも実部が正の極があれば、出力は指数関数的に発散する。ゆえに、左半平面への極の配置がシステムの動的な安定性を決定づけているのである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
