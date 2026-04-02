import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_5_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        次の連立微分方程式（非線形系）の平衡点をすべて求めよ。
                        <BlockMath math="\begin{cases} \dot{x} = y(x - 1) \\ \dot{y} = x(y - 1) \end{cases}" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            平衡点は Definition 3.1-1 より、右辺が 0 となる点 <InlineMath math="(x, y)" /> である。
                            <BlockMath math="\begin{cases} y(x - 1) = 0 & \dots (1) \\ x(y - 1) = 0 & \dots (2) \end{cases}" />
                            (1) より、<InlineMath math="y = 0" /> または <InlineMath math="x = 1" /> である。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li><b><InlineMath math="y = 0" /> のとき</b>：(2) に代入して <InlineMath math="x(0 - 1) = 0 \implies -x = 0 \implies x = 0" />。よって点 <InlineMath math="(0, 0)" />。</li>
                            <li><b><InlineMath math="x = 1" /> のとき</b>：(2) に代入して <InlineMath math="1(y - 1) = 0 \implies y = 1" />。よって点 <InlineMath math="(1, 1)" /> 。</li>
                        </ul>
                        <p className="mt-2">
                            以上より、平衡点は <b><InlineMath math="(0, 0)" /></b> および <b><InlineMath math="(1, 1)" /></b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        非線形系 <InlineMath math="\dot{x} = x - y^2, \ \dot{y} = y - x^2" /> の、平衡点 <InlineMath math="(0, 0)" /> におけるヤコビ行列を計算し、線形化系を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ベクトル値関数を <b><InlineMath math="\mathbf{f}(x, y) = \begin{pmatrix} x - y^2 \\ y - x^2 \end{pmatrix}" /></b> とおく。
                            ヤコビ行列 <b><InlineMath math="Df(x, y)" /></b> は、
                            <BlockMath math="Df(x, y) = \begin{pmatrix} \frac{\partial (x-y^2)}{\partial x} & \frac{\partial (x-y^2)}{\partial y} \\ \frac{\partial (y-x^2)}{\partial x} & \frac{\partial (y-x^2)}{\partial y} \end{pmatrix} = \begin{pmatrix} 1 & -2y \\ -2x & 1 \end{pmatrix}" />
                            となる。平衡点 <b><InlineMath math="(0, 0)" /></b> における値 <b><InlineMath math="A" /></b> は、
                            <BlockMath math="A = Df(0, 0) = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}" />
                            である。よって Definition 3.1-2 より、線形化系は次のように書ける。
                            <BlockMath math="\dot{\mathbf{y}} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \mathbf{y} \quad \left( \text{すなわち } \begin{cases} \dot{y}_1 = y_1 \\ \dot{y}_2 = y_2 \end{cases} \right)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        平衡点の安定性と漸近安定性の違いを、Definition 3.2-1 および 3.2-2 に基づいて簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>安定性（リャプノフ意味での安定性）</b>は、初期値が平衡点に十分近ければ、その後の軌道が平衡点の一定の範囲内に留まり続けることを保証する（遠ざからない性質）。
                        </p>
                        <p className="mt-2">
                            <b>漸近安定性</b>は、安定性の条件を満たした上で、さらに時間が経過すると軌道が平衡点そのものへ収束すること（ <b><InlineMath math="\mathbf{x}(t) \to \mathbf{x}^*" /></b> ）を要求する、より強い性質である。
                        </p>
                        <p className="mt-2">
                            例えば、摩擦のない振り子の原点（中心）は、近づいた軌道が一定の振幅で回転し続け遠ざからないため「安定」だが、原点には収束しないため「漸近安定」ではない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        次の線形系の平衡点（原点）を、Theorem 3.1-1 の分類（ノード、鞍点、焦点、中心）に従って分類せよ。
                        <BlockMath math="\dot{\mathbf{x}} = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} \mathbf{x}" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            係数行列 <b><InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}" /></b> の固有値を求める。
                            <BlockMath math="\det(A - \lambda I) = \begin{vmatrix} 1-\lambda & 2 \\ 2 & 1-\lambda \end{vmatrix} = (1-\lambda)^2 - 4 = 0" />
                            <BlockMath math="\lambda^2 - 2\lambda - 3 = 0 \implies (\lambda - 3)(\lambda + 1) = 0" />
                            固有値は <b><InlineMath math="\lambda = 3, -1" /></b> である。
                        </p>
                        <p className="mt-2">
                            固有値が異符号の実数（一方が正、一方が負）であるため、Theorem 3.1-1 より、平衡点は <b>鞍点 (Saddle)</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        系 <b><InlineMath math="\dot{x} = -x - y^3, \ \dot{y} = x^3 - y" /></b> に対して、関数 <b><InlineMath math="V(x, y) = x^2 + y^2" /></b> がリャプノフ関数（Definition 3.3-2）であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず <b><InlineMath math="V(x, y) = x^2 + y^2" /></b> は <b><InlineMath math="(0, 0)" /></b> で 0 を取り、それ以外で正であるため <b>正定値関数</b> である。
                            次に、軌道に沿った <b><InlineMath math="V" /></b> の時間微分 <b><InlineMath math="\dot{V}" /></b> を計算する。
                            <BlockMath math="\begin{aligned} \dot{V} &= \frac{\partial V}{\partial x} \dot{x} + \frac{\partial V}{\partial y} \dot{y} \\ &= 2x(-x - y^3) + 2y(x^3 - y) \\ &= -2x^2 - 2xy^3 + 2yx^3 - 2y^2 \\ &= -2(x^2 + y^2) + 2xy(x^2 - y^2) \end{aligned}" />
                            ここで、原点付近（ <b><InlineMath math="x^2, y^2" /></b> が十分小さい領域）では 2 次の項 <b><InlineMath math="-2(x^2+y^2)" /></b> が支配的であり、 <b><InlineMath math="\dot{V} < 0" /></b> となる。
                            (より厳密には、全平面で <b><InlineMath math="\dot{V} \leq 0" /></b> であることを示す必要があるが、局所的には強いリャプノフ関数としての条件を満たす。)
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        ベンディクソン・デュラックの判定法（Theorem 3.4-2）を用いて、次の系が全平面 <b><InlineMath math="\mathbb{R}^2" /></b> において閉軌道を持たないことを証明せよ。
                        <BlockMath math="\begin{cases} \dot{x} = x + y^2 \\ \dot{y} = y + x^2 \end{cases}" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b><InlineMath math="\rho(x, y) = 1" /></b> として <b><InlineMath math="f" /></b> の発散（ダイバージェンス）を計算する。
                            <BlockMath math="\begin{aligned} \mathrm{div} \mathbf{f} &= \frac{\partial}{\partial x}(x + y^2) + \frac{\partial}{\partial y}(y + x^2) \\ &= 1 + 1 = 2 \end{aligned}" />
                            計算の結果、<b><InlineMath math="\mathrm{div} \mathbf{f} = 2 > 0" /></b> となり、全平面で常に正の定数である。
                            Theorem 3.4-2 によれば、単連結領域においてダイバージェンスが符号を変えない場合、その領域内に閉軌道は存在しない。
                            よって、本系は全平面において閉軌道を持たない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        SIR モデル（Definition 3.5-2）において、初期感受性保持者数を <b><InlineMath math="S_0" /></b> とするとき、感染が拡大し始めるための条件（流行の条件）を <b><InlineMath math="\dot{I}(0) > 0" /></b> から導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            感染者数に関する方程式 <b><InlineMath math="\dot{I} = \beta SI - \gamma I" /></b> に注目する。
                            初期時刻 <b><InlineMath math="t=0" /></b> において、
                            <BlockMath math="\dot{I}(0) = (\beta S_0 - \gamma) I_0" />
                            である。感染が拡大するためには <b><InlineMath math="\dot{I}(0) > 0" /></b> である必要があり、 <b><InlineMath math="I_0 > 0" /></b> とすると、
                            <BlockMath math="\beta S_0 - \gamma > 0 \implies \frac{\beta S_0}{\gamma} > 1" />
                            が条件となる。この左辺 <b><InlineMath math="R_0 = \beta S_0 / \gamma" /></b> を基本再生産数と呼び、これが 1 を超えることが流行の数学的閾値となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        非線形な復元力を持つ振動系 <b><InlineMath math="\ddot{x} + \dot{x} + x + x^3 = 0" /></b> について、全エネルギー <b><InlineMath math="V(x, \dot{x}) = \frac{1}{2}\dot{x}^2 + \frac{1}{2}x^2 + \frac{1}{4}x^4" /></b> を用いて、原点 <b><InlineMath math="(x, \dot{x}) = (0, 0)" /></b> が漸近安定であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            系を 1 階連立形式で書くと、 <b><InlineMath math="\dot{x} = y, \ \dot{y} = -y - x - x^3" /></b> である。
                            <b><InlineMath math="V(x, y) = \frac{1}{2}y^2 + \frac{1}{2}x^2 + \frac{1}{4}x^4" /></b> は、 <b><InlineMath math="(0, 0)" /></b> 以外で正となる正定値関数である。
                            時間微分 <b><InlineMath math="\dot{V}" /></b> は、
                            <BlockMath math="\begin{aligned} \dot{V} &= \frac{\partial V}{\partial x} \dot{x} + \frac{\partial V}{\partial y} \dot{y} \\ &= (x + x^3) y + y (-y - x - x^3) \\ &= xy + x^3 y - y^2 - xy - x^3 y \\ &= -y^2 \end{aligned}" />
                            となる。 <b><InlineMath math="\dot{V} = -y^2 \leq 0" /></b> であるため、 Theorem 3.3-1 より原点は安定である。
                        </p>
                        <p className="mt-2">
                            さらに漸近安定性を確認するため、 ラサールの不変原理（Theorem 3.5-1）を用いる。
                            <b><InlineMath math="\dot{V} = 0" /></b> となる集合は <b><InlineMath math="y = 0" /></b> （ <b><InlineMath math="x" /></b> 軸上）である。
                            この集合内の不変部分集合を考えると、 <b><InlineMath math="y \equiv 0" /></b> ならば <b><InlineMath math="\dot{y} \equiv 0" /></b> である必要がある。
                            方程式の第 2 式より <b><InlineMath math="0 = -0 - x - x^3 \implies x(1 + x^2) = 0 \implies x = 0" /></b>。
                            したがって、唯一の不変集合は原点 <b><InlineMath math="(0, 0)" /></b> のみである。
                            ラサールの原理により、すべての軌道は原点へ収束するため、原点は漸近安定である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        ポアンカレ・ベンディクソンの定理（Theorem 3.4-1）において、「有界な半軌道が平衡点を含まないコンパクト集合内にある」という条件が不可欠であることを示すため、安定焦点へ収束する軌道の例を挙げて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            安定焦点（例えば <b><InlineMath math="\dot{x} = -x+y, \dot{y} = -x-y" /></b>）を持つ系において、軌道は螺旋を描きながら原点へ向かう。
                            この軌道は有界であり、全平面という集合内に留まるが、収束先（極限集合）は閉軌道ではなく平衡点（原点）である。
                        </p>
                        <p className="mt-2">
                            ポアンカレ・ベンディクソンの定理の結論が「閉軌道である」となるためには、対象の領域内に <b>平衡点が含まれていてはならない</b> 。
                            焦点のケースでは、極限集合の探索範囲に平衡点が含まれてしまっているため、軌道は閉軌道にならずに平衡点に吸収されることが可能となるのである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        1 次元の自律系 <b><InlineMath math="\dot{x} = \mu - x^2" /></b> におけるサドル・ノード分岐（Example 3.6-1）について、パラメータ <b><InlineMath math="\mu" /></b> を負から正へ変化させたときの平衡点の数と安定性の変化を詳しく記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            右辺を <b><InlineMath math="f(x) = \mu - x^2" /></b> とおく。平衡点は <b><InlineMath math="\mu - x^2 = 0" /></b> の解である。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li><b><InlineMath math="\mu < 0" /> のとき</b>： <b><InlineMath math="x^2 = \mu" /></b> に実数解はない。よって平衡点は存在せず、常に <b><InlineMath math="\dot{x} < 0" /></b> （負の方向へ流れ続ける）。</li>
                            <li><b><InlineMath math="\mu = 0" /> のとき</b>： <b><InlineMath math="x = 0" /></b> で唯一の平衡点が現れる。これは <b><InlineMath math="x > 0" /></b> で <b><InlineMath math="\dot{x} < 0" /></b>、 <b><InlineMath math="x < 0" /></b> でも <b><InlineMath math="\dot{x} < 0" /></b> となる半安定な点である。</li>
                            <li><b><InlineMath math="\mu > 0" /> のとき</b>： <b><InlineMath math="x = \pm \sqrt{\mu}" /></b> の 2 つの平衡点が現れる。
                                <ul className="list-disc list-inside ml-6 mt-1">
                                    <li><b><InlineMath math="x = \sqrt{\mu}" /></b>： <b><InlineMath math="f'(\sqrt{\mu}) = -2\sqrt{\mu} < 0" /></b> より <b>安定</b> 。</li>
                                    <li><b><InlineMath math="x = -\sqrt{\mu}" /></b>： <b><InlineMath math="f'(-\sqrt{\mu}) = 2\sqrt{\mu} > 0" /></b> より <b>不安定</b> 。</li>
                                </ul>
                            </li>
                        </ol>
                        <p className="mt-2 text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
