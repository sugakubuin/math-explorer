import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_13_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        正則曲面 <InlineMath math="\mathbf{p}(u, v)" /> において、第一基本形式（first fundamental form）の成分 <InlineMath math="E, F, G" /> の定義を偏微分ベクトル <InlineMath math="\mathbf{p}_u, \mathbf{p}_v" /> を用いて述べよ。また、それらを用いた微小線素の2乗 <InlineMath math="ds^2" /> の式を記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-1 より、第一基本形式の成分 <InlineMath math="E, F, G" /> は接ベクトル同士の内積として次のように定義される。
                        </p>
                        <BlockMath math="E(u, v) = \mathbf{p}_u \cdot \mathbf{p}_u = |\mathbf{p}_u|^2" />
                        <BlockMath math="F(u, v) = \mathbf{p}_u \cdot \mathbf{p}_v = \mathbf{p}_v \cdot \mathbf{p}_u" />
                        <BlockMath math="G(u, v) = \mathbf{p}_v \cdot \mathbf{p}_v = |\mathbf{p}_v|^2" />
                        <p>
                            これらを用いて、曲面上の微小線素の2乗 <InlineMath math="ds^2" /> は次のように表される。
                        </p>
                        <BlockMath math="ds^2 = E(u, v)(du)^2 + 2F(u, v)dudv + G(u, v)(dv)^2" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        第一基本形式の成分 <InlineMath math="E, F, G" /> を用いた、パラメータ領域 <InlineMath math="D" /> 上の曲面の面積 <InlineMath math="A" /> を求める公式（面積の公式）を記述せよ。また、被積分関数の平方根の中身である <InlineMath math="EG - F^2" /> が偏微分ベクトルの外積のノルムの2乗と一致することを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.2-2 より、曲面の面積 <InlineMath math="A" /> の公式は次の二重積分で与えられる。
                        </p>
                        <BlockMath math="A = \iint_D \sqrt{E G - F^2} \, du \, dv" />
                        <p>
                            ベクトルの関係式（ラグランジュの恒等式）より、<InlineMath math="|\mathbf{p}_u \times \mathbf{p}_v|^2 = |\mathbf{p}_u|^2 |\mathbf{p}_v|^2 - (\mathbf{p}_u \cdot \mathbf{p}_v)^2" /> が成り立つ。成分の定義より <InlineMath math="|\mathbf{p}_u|^2 = E" />、<InlineMath math="|\mathbf{p}_v|^2 = G" />、<InlineMath math="\mathbf{p}_u \cdot \mathbf{p}_v = F" /> であるため、
                        </p>
                        <BlockMath math="|\mathbf{p}_u \times \mathbf{p}_v|^2 = EG - F^2" />
                        <p>
                            したがって、<InlineMath math="EG - F^2" /> は外積のノルムの2乗と一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        2つの正則曲面 <InlineMath math="S_1" /> と <InlineMath math="S_2" /> の間の等長写像（isometry）の定義を、第一基本形式を用いて述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.3-1 より、曲面 <InlineMath math="S_1" /> から曲面 <InlineMath math="S_2" /> への微分同相写像 <InlineMath math="\phi : S_1 \to S_2" /> が等長写像であるとは、任意の点において、<InlineMath math="\phi" /> によって対応する接ベクトルについての第一基本形式の値が等しいことをいう。
                            パラメータ表示を用いると、共通のパラメータ <InlineMath math="(u, v)" /> に対して、<InlineMath math="S_1" /> の第一基本形式の成分を <InlineMath math="E_1, F_1, G_1" />、<InlineMath math="S_2" /> の成分を <InlineMath math="E_2, F_2, G_2" /> としたとき、すべての <InlineMath math="(u, v)" /> において
                        </p>
                        <BlockMath math="E_1 = E_2, \quad F_1 = F_2, \quad G_1 = G_2" />
                        <p>
                            が成り立つことと同値である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        半径 <InlineMath math="R" /> の円柱面をパラメータ表示 <InlineMath math="\mathbf{p}(u, v) = (R \cos u, R \sin u, v)" /> <InlineMath math="(0 < u < 2\pi, -\infty < v < \infty)" /> とおく。この曲面の第一基本形式の成分 <InlineMath math="E, F, G" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず偏微分ベクトルを計算する。
                        </p>
                        <BlockMath math="\mathbf{p}_u = (-R \sin u, R \cos u, 0)" />
                        <BlockMath math="\mathbf{p}_v = (0, 0, 1)" />
                        <p>
                            次に第一基本形式の成分を計算する。
                        </p>
                        <BlockMath math="\begin{aligned} E &= \mathbf{p}_u \cdot \mathbf{p}_u = (-R \sin u)^2 + (R \cos u)^2 + 0^2 \\ &= R^2(\sin^2 u + \cos^2 u) = R^2 \\ F &= \mathbf{p}_u \cdot \mathbf{p}_v = 0 \cdot (-R \sin u) + 0 \cdot R \cos u + 1 \cdot 0 = 0 \\ G &= \mathbf{p}_v \cdot \mathbf{p}_v = 0^2 + 0^2 + 1^2 = 1 \end{aligned}" />
                        <p>
                            よって成分は <InlineMath math="E = R^2, F = 0, G = 1" /> であり、第一基本形式は <InlineMath math="ds^2 = R^2 du^2 + dv^2" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        前問で考えた円柱面上の曲線が <InlineMath math="u(t) = t, v(t) = at" /> <InlineMath math="(t \in [0, 2\pi])" /> で与えられているとき、（この曲線は螺旋を表す）Theorem 3.2-1 を用いてこの曲線の長さ（弧長）を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            パラメータ <InlineMath math="t" /> の微小変化 <InlineMath math="dt" /> に対する <InlineMath math="u, v" /> の微分は <InlineMath math="\frac{du}{dt} = 1" />, <InlineMath math="\frac{dv}{dt} = a" /> である。
                            円柱面の第一基本形式は <InlineMath math="E = R^2, F = 0, G = 1" /> であるから、Theorem 3.2-1 の弧長の公式の被積分関数は、
                        </p>
                        <BlockMath math="\begin{aligned} \frac{ds}{dt} &= \sqrt{E\left(\frac{du}{dt}\right)^2 + 2F\frac{du}{dt}\frac{dv}{dt} + G\left(\frac{dv}{dt}\right)^2} \\ &= \sqrt{R^2 (1)^2 + 0 + 1(a)^2} = \sqrt{R^2 + a^2} \end{aligned}" />
                        <p>
                            となる。したがって曲線の長さ <InlineMath math="L" /> は、
                        </p>
                        <BlockMath math="\begin{aligned} L &= \int_{0}^{2\pi} \frac{ds}{dt} dt = \int_{0}^{2\pi} \sqrt{R^2 + a^2} dt \\ &= \sqrt{R^2 + a^2} [t]_{0}^{2\pi} = 2\pi \sqrt{R^2 + a^2} \end{aligned}" />
                        <p>
                            である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        半径 <InlineMath math="R" /> の球面 <InlineMath math="\mathbf{p}(\theta, \phi) = (R \sin\theta \cos\phi, R \sin\theta \sin\phi, R \cos\theta)" /> の第一基本形式は <InlineMath math="E = R^2, F = 0, G = R^2 \sin^2 \theta" /> である（領域は <InlineMath math="0 < \theta < \pi, 0 < \phi < 2\pi" /> とする）。この事実と Theorem 3.2-2 を用いて、球面の全表面積を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            領域 <InlineMath math="D = \{(\theta, \phi) \mid 0 \leq \theta \leq \pi, 0 \leq \phi \leq 2\pi \}" /> （境界は面積ゼロなので積分領域に含めてよい）上で面積の公式（Theorem 3.2-2）を適用する。
                            まず被積分関数 <InlineMath math="\sqrt{EG - F^2}" /> を計算する。
                        </p>
                        <BlockMath math="\sqrt{EG - F^2} = \sqrt{R^2 \cdot R^2 \sin^2 \theta - 0} = R^2 |\sin \theta|" />
                        <p>
                            <InlineMath math="0 \leq \theta \leq \pi" /> の範囲では <InlineMath math="\sin \theta \geq 0" /> なので <InlineMath math="|\sin \theta| = \sin \theta" /> となる。面積 <InlineMath math="A" /> は、
                        </p>
                        <BlockMath math="A = \iint_D R^2 \sin \theta \, d\theta \, d\phi = R^2 \int_{0}^{2\pi} \left( \int_{0}^{\pi} \sin \theta \, d\theta \right) d\phi" />
                        <p>
                            内側の積分を計算する。
                        </p>
                        <BlockMath math="\int_{0}^{\pi} \sin \theta \, d\theta = [-\cos \theta]_{0}^{\pi} = (-\cos \pi) - (-\cos 0) = 1 - (-1) = 2" />
                        <p>
                            続いて外側の積分を計算する。
                        </p>
                        <BlockMath math="A = R^2 \int_{0}^{2\pi} 2 \, d\phi = 2R^2 [\phi]_{0}^{2\pi} = 2R^2 \cdot 2\pi = 4\pi R^2" />
                        <p>
                            このようにして球の表面積公式 <InlineMath math="4\pi R^2" /> が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        曲面上に描かれた <InlineMath math="u" />-パラメータ曲線（<InlineMath math="v = \text{const}" />）と <InlineMath math="v" />-パラメータ曲線（<InlineMath math="u = \text{const}" />）が交わる点において互いに直交するための必要十分条件は、その点において第一基本形式の成分 <InlineMath math="F = 0" /> となることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="u" />-パラメータ曲線 <InlineMath math="\mathbf{p}(u, v_0)" /> の接線方向の接ベクトルは <InlineMath math="\mathbf{p}_u" /> である。
                            同様に、<InlineMath math="v" />-パラメータ曲線 <InlineMath math="\mathbf{p}(u_0, v)" /> の接線方向の接ベクトルは <InlineMath math="\mathbf{p}_v" /> である。
                            二つの曲線が交点 <InlineMath math="(u_0, v_0)" /> において直交する条件は、それらの接ベクトルが直交すること、すなわち内積が0であることである。
                        </p>
                        <BlockMath math="\mathbf{p}_u \cdot \mathbf{p}_v = 0" />
                        <p>
                            第一基本形式の成分の定義（Definition 3.1-1）によれば、<InlineMath math="F = \mathbf{p}_u \cdot \mathbf{p}_v" /> である。
                            したがって、接ベクトルが直交することは <InlineMath math="F = 0" /> と同値である。ゆえに、パラメータ曲線が直交するための必要十分条件は <InlineMath math="F = 0" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        Proposition 3.1-1 の通り、パラメータ変換 <InlineMath math="(u, v) \to (\tilde{u}, \tilde{v})" /> によって第一基本形式の値（微小線素 <InlineMath math="ds^2" />）は不変であることを証明せよ。ただし、第一基本形式の定義から出発し、全微分 <InlineMath math="du, dv" /> と <InlineMath math="d\tilde{u}, d\tilde{v}" /> の関係および連鎖律を用いて記述すること。
                    </p>
                    <ExerciseSolution>
                        <p>
                            パラメータ変換 <InlineMath math="u = u(\tilde{u}, \tilde{v}), v = v(\tilde{u}, \tilde{v})" /> に対し、微分の関係（全微分）は次式で与えられる。
                        </p>
                        <BlockMath math="du = \frac{\partial u}{\partial \tilde{u}} d\tilde{u} + \frac{\partial u}{\partial \tilde{v}} d\tilde{v}" />
                        <BlockMath math="dv = \frac{\partial v}{\partial \tilde{u}} d\tilde{u} + \frac{\partial v}{\partial \tilde{v}} d\tilde{v}" />
                        <p>
                            位置ベクトル <InlineMath math="\mathbf{p}" /> の微分 <InlineMath math="d\mathbf{p}" /> は、元のパラメータでは <InlineMath math="d\mathbf{p} = \mathbf{p}_u du + \mathbf{p}_v dv" /> と表される。
                            ここに <InlineMath math="du, dv" /> を代入すると、
                        </p>
                        <BlockMath math="d\mathbf{p} = \mathbf{p}_u \left( \frac{\partial u}{\partial \tilde{u}} d\tilde{u} + \frac{\partial u}{\partial \tilde{v}} d\tilde{v} \right) + \mathbf{p}_v \left( \frac{\partial v}{\partial \tilde{u}} d\tilde{u} + \frac{\partial v}{\partial \tilde{v}} d\tilde{v} \right)" />
                        <p>
                            項を <InlineMath math="d\tilde{u}, d\tilde{v}" /> でまとめると、連鎖律を用いた新しい偏微分ベクトル <InlineMath math="\mathbf{p}_{\tilde{u}}, \mathbf{p}_{\tilde{v}}" /> が現れる。
                        </p>
                        <BlockMath math="\begin{aligned} d\mathbf{p} &= \left( \mathbf{p}_u \frac{\partial u}{\partial \tilde{u}} + \mathbf{p}_v \frac{\partial v}{\partial \tilde{u}} \right) d\tilde{u} + \left( \mathbf{p}_u \frac{\partial u}{\partial \tilde{v}} + \mathbf{p}_v \frac{\partial v}{\partial \tilde{v}} \right) d\tilde{v} \\ &= \mathbf{p}_{\tilde{u}} d\tilde{u} + \mathbf{p}_{\tilde{v}} d\tilde{v} \end{aligned}" />
                        <p>
                            微小線素 <InlineMath math="ds^2" /> は <InlineMath math="d\mathbf{p} \cdot d\mathbf{p}" /> として定義される。新しいパラメータによる表現を展開すると、
                        </p>
                        <BlockMath math="\begin{aligned}ds^2 &= (\mathbf{p}_{\tilde{u}} d\tilde{u} + \mathbf{p}_{\tilde{v}} d\tilde{v}) \cdot (\mathbf{p}_{\tilde{u}} d\tilde{u} + \mathbf{p}_{\tilde{v}} d\tilde{v}) \\ &= (\mathbf{p}_{\tilde{u}} \cdot \mathbf{p}_{\tilde{u}}) (d\tilde{u})^2 + 2(\mathbf{p}_{\tilde{u}} \cdot \mathbf{p}_{\tilde{v}}) d\tilde{u} d\tilde{v} + (\mathbf{p}_{\tilde{v}} \cdot \mathbf{p}_{\tilde{v}}) (d\tilde{v})^2 \\ &= \tilde{E} (d\tilde{u})^2 + 2\tilde{F} d\tilde{u} d\tilde{v} + \tilde{G} (d\tilde{v})^2\end{aligned}" />
                        <p>
                            これは、元のパラメータでの <InlineMath math="ds^2 = d\mathbf{p} \cdot d\mathbf{p} = E du^2 + 2F dudv + G dv^2" /> に等しい。
                            したがって、第一基本形式が定める接ベクトルどうしの内積や微小線素の長さは、どのようなパラメータを採用するか（パラメータ変換）によらず不変（内在的な量）であることが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        曲面 <InlineMath math="S_1" /> から <InlineMath math="S_2" /> への等長写像 <InlineMath math="\phi" /> が存在するとき（Definition 3.3-1）、<InlineMath math="S_1" /> 上の任意の領域 <InlineMath math="D" /> の面積は、<InlineMath math="\phi(D)" /> 上の対応する領域の面積と等しいことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            等長写像の定義より、共通のパラメータ <InlineMath math="(u, v)" /> を用いて <InlineMath math="S_1" /> と <InlineMath math="\phi(S_1) = S_2" /> を表したとき、対応する点における第一基本形式の成分がすべて等しい。すなわち、
                        </p>
                        <BlockMath math="E_1 = E_2, \quad F_1 = F_2, \quad G_1 = G_2" />
                        <p>
                            が成り立つ。曲面 <InlineMath math="S_1" /> 上の領域 <InlineMath math="D" /> の面積 <InlineMath math="A_1" /> は、Theorem 3.2-2 より以下のように与えられる。
                        </p>
                        <BlockMath math="A_1 = \iint_D \sqrt{E_1 G_1 - F_1^2} \, du \, dv" />
                        <p>
                            曲面 <InlineMath math="S_2" /> 上における対応する領域 <InlineMath math="\phi(D)" /> は、等長写像の定義よりパラメータ領域として同じ <InlineMath math="D" /> を持つ。その面積 <InlineMath math="A_2" /> は、
                        </p>
                        <BlockMath math="A_2 = \iint_D \sqrt{E_2 G_2 - F_2^2} \, du \, dv" />
                        <p>
                            ここで、成分がすべて等しいため、<InlineMath math="E_1 G_1 - F_1^2 = E_2 G_2 - F_2^2" /> が成り立つ。積分関数がすべての点で等しいので、その積分値もまた等しくなる。
                        </p>
                        <BlockMath math="A_1 = \iint_D \sqrt{E_2 G_2 - F_2^2} \, du \, dv = A_2" />
                        <p>
                            したがって、等長写像によって曲面の面積は不変であることが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        すべての正則曲面 <InlineMath math="\mathbf{p}(u, v)" /> において、第一基本形式の成分の判別式部分 <InlineMath math="EG - F^2" /> は常に正（<InlineMath math="> 0" />）であることを証明せよ。これにはコーシー・シュワルツの不等式や外積の性質を用いよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            第一基本形式の成分の定義から代入する。
                        </p>
                        <BlockMath math="EG - F^2 = |\mathbf{p}_u|^2 |\mathbf{p}_v|^2 - (\mathbf{p}_u \cdot \mathbf{p}_v)^2" />
                        <p>
                            ユークリッド空間のベクトルに対するコーシー・シュワルツの不等式により、任意のベクトル <InlineMath math="\mathbf{a}, \mathbf{b}" /> について
                        </p>
                        <BlockMath math="(\mathbf{a} \cdot \mathbf{b})^2 \leq |\mathbf{a}|^2 |\mathbf{b}|^2" />
                        <p>
                            が成り立ち、等号成立条件は <InlineMath math="\mathbf{a}" /> と <InlineMath math="\mathbf{b}" /> が一次従属であることである。
                            いま、<InlineMath math="\mathbf{a} = \mathbf{p}_u, \mathbf{b} = \mathbf{p}_v" /> とおくと、
                        </p>
                        <BlockMath math="EG - F^2 \geq 0" />
                        <p>
                            が成り立つ。ここで、Definition 2.1-1 (正則曲面の定義) により、正則曲面ではすべての点において偏微分ベクトル <InlineMath math="\mathbf{p}_u" /> と <InlineMath math="\mathbf{p}_v" /> が一次独立でなければならない（外積 <InlineMath math="\mathbf{p}_u \times \mathbf{p}_v \neq \mathbf{0}" />）。
                            一次従属ではないため、コーシー・シュワルツの不等式の等号は成立せず、真のアティクエーション（strict inequality）が成り立つ。
                        </p>
                        <BlockMath math="EG - F^2 > 0" />
                        <p>
                            なお、ラグランジュの恒等式 <InlineMath math="EG - F^2 = |\mathbf{p}_u \times \mathbf{p}_v|^2" /> を用いても、正則性の条件 <InlineMath math="|\mathbf{p}_u \times \mathbf{p}_v| > 0" /> から直ちに <InlineMath math="EG - F^2 > 0" /> が導かれる。
                            以上より題意は示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
