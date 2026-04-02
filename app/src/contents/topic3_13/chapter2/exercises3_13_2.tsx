import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_13_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        開集合 <InlineMath math="U \subset \mathbb{R}^2" /> から <InlineMath math="\mathbb{R}^3" /> への写像 <InlineMath math="\mathbf{p}(u, v)" /> が正則曲面（regular surface）を定めるための条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-1 より、<InlineMath math="\mathbf{p}" /> が十分滑らか（例えば <InlineMath math="C^\infty" /> 級）であり、かつすべての <InlineMath math="(u, v) \in U" /> に対して、偏微分ベクトル <InlineMath math="\mathbf{p}_u" /> と <InlineMath math="\mathbf{p}_v" /> が一次独立であることが条件である。
                            これは、外積を用いて次のように表される。
                        </p>
                        <BlockMath math="\mathbf{p}_u \times \mathbf{p}_v \neq \mathbf{0}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        正則曲面上の点 <InlineMath math="\mathbf{p}(u_0, v_0)" /> における単位法ベクトル <InlineMath math="\mathbf{n}(u, v)" /> の定義と接平面（tangent plane）を張るベクトルを述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.2-2 より、単位法ベクトル <InlineMath math="\mathbf{n}(u, v)" /> は次のように定義される。
                        </p>
                        <BlockMath math="\mathbf{n} = \frac{\mathbf{p}_u \times \mathbf{p}_v}{|\mathbf{p}_u \times \mathbf{p}_v|}" />
                        <p>
                            Definition 2.2-1 によれば、曲面上の点における接平面は、偏微分ベクトル <InlineMath math="\mathbf{p}_u" /> と <InlineMath math="\mathbf{p}_v" /> によって張られる実2次元のベクトル空間である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        2つのパラメータ領域 <InlineMath math="U" /> と <InlineMath math="\tilde{U}" /> 間の変換 <InlineMath math="(u, v) = \phi(\tilde{u}, \tilde{v})" /> が許容パラメータ変換（admissible parameter transformation）であるための条件を簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.3-1 より、変換 <InlineMath math="\phi: \tilde{U} \to U" /> が許容パラメータ変換であるための条件は以下の通りである。
                            1. <InlineMath math="\phi" /> が全単射（1対1かつ上への写像）である。
                            2. <InlineMath math="\phi" /> とその逆写像 <InlineMath math="\phi^{-1}" /> がともに <InlineMath math="C^\infty" /> 級（微分同相写像）である。
                            3. すべての点において、ヤコビ行列の行列式が 0 ではない（すなわち <InlineMath math="\det(J_\phi) \neq 0" />）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        関数 <InlineMath math="f(x, y) = x^2 + y^2" /> のグラフとして与えられる放物面を、<InlineMath math="x = u, y = v" /> としてパラメータ表示 <InlineMath math="\mathbf{p}(u, v)" /> で表せ。さらに、その偏微分ベクトル <InlineMath math="\mathbf{p}_u, \mathbf{p}_v" /> および単位法ベクトル <InlineMath math="\mathbf{n}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            パラメータ表示は <InlineMath math="\mathbf{p}(u, v) = (u, v, u^2 + v^2)" /> である。
                            偏微分ベクトルは以下のようになる。
                        </p>
                        <BlockMath math="\mathbf{p}_u = \left( 1, 0, 2u \right), \quad \mathbf{p}_v = \left( 0, 1, 2v \right)" />
                        <p>
                            これらの外積を計算すると、
                        </p>
                        <BlockMath math="\begin{aligned} \mathbf{p}_u \times \mathbf{p}_v &= (0 \cdot 2v - 2u \cdot 1, 2u \cdot 0 - 1 \cdot 2v, 1 \cdot 1 - 0 \cdot 0) \\ &= (-2u, -2v, 1) \end{aligned}" />
                        <p>
                            となる。そのノルムは
                        </p>
                        <BlockMath math="|\mathbf{p}_u \times \mathbf{p}_v| = \sqrt{(-2u)^2 + (-2v)^2 + 1^2} = \sqrt{4u^2 + 4v^2 + 1}" />
                        <p>
                            したがって、単位法ベクトル <InlineMath math="\mathbf{n}" /> は
                        </p>
                        <BlockMath math="\mathbf{n} = \frac{1}{\sqrt{4u^2 + 4v^2 + 1}} (-2u, -2v, 1)" />
                        <p>
                            である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        前の問題で求めた放物面 <InlineMath math="\mathbf{p}(u, v) = (u, v, u^2 + v^2)" /> について、点 <InlineMath math="(u, v) = (1, 1)" /> における接平面の方程式を <InlineMath math="ax + by + cz + d = 0" /> の形で求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="(u, v) = (1, 1)" /> のとき、曲面上の点の座標は <InlineMath math="\mathbf{p}(1, 1) = (1, 1, 2)" /> である。
                            また、この点における法線ベクトルとなる外積は
                        </p>
                        <BlockMath math="\mathbf{p}_u \times \mathbf{p}_v \Big|_{(1, 1)} = (-2(1), -2(1), 1) = (-2, -2, 1)" />
                        <p>
                            である。（Proposition 2.2-1 における接平面の法線ベクトルとしてこれを用いることができる。）
                            接平面の方程式は、点 <InlineMath math="(x_0, y_0, z_0) = (1, 1, 2)" /> を通り法線ベクトルが <InlineMath math="(n_x, n_y, n_z) = (-2, -2, 1)" /> の平面であるから、
                        </p>
                        <BlockMath math="-2(x - 1) - 2(y - 1) + 1(z - 2) = 0" />
                        <p>
                            展開して整理すると、
                        </p>
                        <BlockMath math="\begin{aligned} &-2x + 2 - 2y + 2 + z - 2 = 0 \\ \implies &-2x - 2y + z + 2 = 0 \end{aligned}" />
                        <p>
                            あるいは <InlineMath math="2x + 2y - z - 2 = 0" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        空間内の曲面が <InlineMath math="\mathbf{p}(u, v) = (u \cos v, u \sin v, u)" /> <InlineMath math="(u > 0, 0 < v < 2\pi)" /> で与えられている（これは円錐面の一部である）。このパラメータ表示が正則曲面の条件を満たすことを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            偏微分ベクトルを求める。
                        </p>
                        <BlockMath math="\mathbf{p}_u = (\cos v, \sin v, 1)" />
                        <BlockMath math="\mathbf{p}_v = (-u \sin v, u \cos v, 0)" />
                        <p>
                            これらの外積を計算する。
                        </p>
                        <BlockMath math="\begin{aligned}\mathbf{p}_u \times \mathbf{p}_v &= (\sin v \cdot 0 - 1 \cdot u \cos v, 1 \cdot (-u \sin v) - \cos v \cdot 0, \cos v \cdot u \cos v - \sin v \cdot (-u \sin v)) \\ &= (-u \cos v, -u \sin v, u(\cos^2 v + \sin^2 v)) \\ &= (-u \cos v, -u \sin v, u)\end{aligned}" />
                        <p>
                            外積のノルムを計算すると、
                        </p>
                        <BlockMath math="\begin{aligned} |\mathbf{p}_u \times \mathbf{p}_v| &= \sqrt{(-u \cos v)^2 + (-u \sin v)^2 + u^2} \\ &= \sqrt{u^2 + u^2} = \sqrt{2u^2} = \sqrt{2}u \end{aligned}" />
                        <p>
                            領域の条件より <InlineMath math="u > 0" /> であるため、<InlineMath math="|\mathbf{p}_u \times \mathbf{p}_v| = \sqrt{2}u > 0" /> となり、外積は常に零ベクトルではない。したがって正則性の条件 <InlineMath math="\mathbf{p}_u \times \mathbf{p}_v \neq \mathbf{0}" /> を満たす。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        陰関数 <InlineMath math="F(x, y, z) = x^2 + y^2 - z^2 = 0" /> で定義される図形（円錐）は、原点 <InlineMath math="(0,0,0)" /> において正則曲面としての条件を持たないことを、勾配ベクトル（gradient）を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            陰関数表示された曲面が点 <InlineMath math="(x,y,z)" /> において正則（滑らかな曲面）であるためには、その偏微分の組である勾配ベクトルが零ベクトルでないことが必要である。
                        </p>
                        <BlockMath math="\nabla F = \left( \frac{\partial F}{\partial x}, \frac{\partial F}{\partial y}, \frac{\partial F}{\partial z} \right) = (2x, 2y, -2z)" />
                        <p>
                            原点 <InlineMath math="(0,0,0)" /> における勾配ベクトルを評価すると、
                        </p>
                        <BlockMath math="\nabla F(0,0,0) = (0, 0, 0) = \mathbf{0}" />
                        <p>
                            となる。勾配ベクトルが零ベクトルであるため、この点において一意な接平面を定義することができず、原点では正則曲面とならない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        滑らかな関数 <InlineMath math="f: \mathbb{R}^2 \to \mathbb{R}" /> を用いて、曲面がモンジュの形式（Monge patch） <InlineMath math="\mathbf{p}(u, v) = (u, v, f(u, v))" /> で与えられるとする。この曲面がすべての <InlineMath math="(u, v) \in \mathbb{R}^2" /> に対して正則曲面であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            曲面が正則であるための条件は、すべての点で外積 <InlineMath math="\mathbf{p}_u \times \mathbf{p}_v \neq \mathbf{0}" /> が成り立つことである。
                            偏微分ベクトルを計算すると、
                        </p>
                        <BlockMath math="\mathbf{p}_u = \left( 1, 0, \frac{\partial f}{\partial u} \right)" />
                        <BlockMath math="\mathbf{p}_v = \left( 0, 1, \frac{\partial f}{\partial v} \right)" />
                        <p>
                            となる。これらの外積を計算すると、
                        </p>
                        <BlockMath math="\begin{aligned} \mathbf{p}_u \times \mathbf{p}_v &= \left( 0 \cdot \frac{\partial f}{\partial v} - \frac{\partial f}{\partial u} \cdot 1, \; \frac{\partial f}{\partial u} \cdot 0 - 1 \cdot \frac{\partial f}{\partial v}, \; 1 \cdot 1 - 0 \cdot 0 \right) \\ &= \left( -\frac{\partial f}{\partial u}, -\frac{\partial f}{\partial v}, 1 \right) \end{aligned}" />
                        <p>
                            このベクトルの第3成分は常に <InlineMath math="1" /> であるため、<InlineMath math="u, v" /> の値にかかわらず決して零ベクトル <InlineMath math="(0,0,0)" /> になることはない。
                        </p>
                        <BlockMath math="|\mathbf{p}_u \times \mathbf{p}_v| = \sqrt{\left(\frac{\partial f}{\partial u}\right)^2 + \left(\frac{\partial f}{\partial v}\right)^2 + 1} \geq 1 > 0" />
                        <p>
                            したがって、<InlineMath math="\mathbf{p}_u" /> と <InlineMath math="\mathbf{p}_v" /> は常に一次独立であり、このパラメータ表示はいたるところで正則曲面の条件を満たす。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        正則曲面における許容パラメータ変換 <InlineMath math="(u, v) = \phi(\tilde{u}, \tilde{v})" /> について考える。変換後のパラメータ <InlineMath math="\tilde{u}, \tilde{v}" /> による偏微分ベクトル <InlineMath math="\mathbf{p}_{\tilde{u}}, \mathbf{p}_{\tilde{v}}" /> の外積が、元の外積とヤコビ行列式 <InlineMath math="\det(J)" /> を用いて次のように表されることを証明せよ。
                        <BlockMath math="\mathbf{p}_{\tilde{u}} \times \mathbf{p}_{\tilde{v}} = \det(J) (\mathbf{p}_u \times \mathbf{p}_v)" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            連鎖律（合成関数の微分法則）より、次が成り立つ。
                        </p>
                        <BlockMath math="\mathbf{p}_{\tilde{u}} = \frac{\partial \mathbf{p}}{\partial u}\frac{\partial u}{\partial \tilde{u}} + \frac{\partial \mathbf{p}}{\partial v}\frac{\partial v}{\partial \tilde{u}} = \mathbf{p}_u u_{\tilde{u}} + \mathbf{p}_v v_{\tilde{u}}" />
                        <BlockMath math="\mathbf{p}_{\tilde{v}} = \frac{\partial \mathbf{p}}{\partial u}\frac{\partial u}{\partial \tilde{v}} + \frac{\partial \mathbf{p}}{\partial v}\frac{\partial v}{\partial \tilde{v}} = \mathbf{p}_u u_{\tilde{v}} + \mathbf{p}_v v_{\tilde{v}}" />
                        <p>
                            これらの外積を計算する。外積の双線形性と反対称性（<InlineMath math="\mathbf{A} \times \mathbf{A} = \mathbf{0}" />, <InlineMath math="\mathbf{B} \times \mathbf{A} = -\mathbf{A} \times \mathbf{B}" />）を用いると、
                        </p>
                        <BlockMath math="\begin{aligned}\mathbf{p}_{\tilde{u}} \times \mathbf{p}_{\tilde{v}} &= (\mathbf{p}_u u_{\tilde{u}} + \mathbf{p}_v v_{\tilde{u}}) \times (\mathbf{p}_u u_{\tilde{v}} + \mathbf{p}_v v_{\tilde{v}}) \\ &= u_{\tilde{u}} u_{\tilde{v}} (\mathbf{p}_u \times \mathbf{p}_u) + u_{\tilde{u}} v_{\tilde{v}} (\mathbf{p}_u \times \mathbf{p}_v) + v_{\tilde{u}} u_{\tilde{v}} (\mathbf{p}_v \times \mathbf{p}_u) + v_{\tilde{u}} v_{\tilde{v}} (\mathbf{p}_v \times \mathbf{p}_v) \\ &= \mathbf{0} + u_{\tilde{u}} v_{\tilde{v}} (\mathbf{p}_u \times \mathbf{p}_v) - v_{\tilde{u}} u_{\tilde{v}} (\mathbf{p}_u \times \mathbf{p}_v) + \mathbf{0} \\ &= (u_{\tilde{u}} v_{\tilde{v}} - v_{\tilde{u}} u_{\tilde{v}}) (\mathbf{p}_u \times \mathbf{p}_v)\end{aligned}" />
                        <p>
                            ここで括弧の部分はパラメータ変換のヤコビ行列式（Jacobian determinant）である。
                        </p>
                        <BlockMath math="\det(J) = \det \begin{pmatrix} u_{\tilde{u}} & u_{\tilde{v}} \\ v_{\tilde{u}} & v_{\tilde{v}} \end{pmatrix} = u_{\tilde{u}} v_{\tilde{v}} - v_{\tilde{u}} u_{\tilde{v}}" />
                        <p>
                            したがって、
                        </p>
                        <BlockMath math="\mathbf{p}_{\tilde{u}} \times \mathbf{p}_{\tilde{v}} = \det(J) (\mathbf{p}_u \times \mathbf{p}_v)" />
                        <p>
                            が成り立つことが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        ある正則曲面 <InlineMath math="S" /> が、2つの許容パラメータ領域からなるパラメータ変換 <InlineMath math="(u, v) = \phi(\tilde{u}, \tilde{v})" /> で関係づけられているとする。このとき、変換のヤコビ行列式が正（<InlineMath math="\det(J) > 0" />）であれば、各点における単位法ベクトルは一致する（<InlineMath math="\mathbf{n} = \tilde{\mathbf{n}}" />）ことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            前問の結果より、パラメータ変換に伴って偏微分ベクトルの外積は次のように変換される。
                        </p>
                        <BlockMath math="\mathbf{p}_{\tilde{u}} \times \mathbf{p}_{\tilde{v}} = \det(J) (\mathbf{p}_u \times \mathbf{p}_v)" />
                        <p>
                            新しいパラメータに関する単位法ベクトル <InlineMath math="\tilde{\mathbf{n}}" /> は次のように定義される。
                        </p>
                        <BlockMath math="\tilde{\mathbf{n}} = \frac{\mathbf{p}_{\tilde{u}} \times \mathbf{p}_{\tilde{v}}}{|\mathbf{p}_{\tilde{u}} \times \mathbf{p}_{\tilde{v}}|}" />
                        <p>
                            ここに先ほどの関係式を代入する。
                        </p>
                        <BlockMath math="\tilde{\mathbf{n}} = \frac{\det(J) (\mathbf{p}_u \times \mathbf{p}_v)}{|\det(J) (\mathbf{p}_u \times \mathbf{p}_v)|} = \frac{\det(J) (\mathbf{p}_u \times \mathbf{p}_v)}{|\det(J)| |\mathbf{p}_u \times \mathbf{p}_v|}" />
                        <p>
                            仮定より <InlineMath math="\det(J) > 0" /> であるため、<InlineMath math="|\det(J)| = \det(J)" /> である。したがって、
                        </p>
                        <BlockMath math="\tilde{\mathbf{n}} = \frac{\det(J)}{\det(J)} \frac{\mathbf{p}_u \times \mathbf{p}_v}{|\mathbf{p}_u \times \mathbf{p}_v|} = \frac{\mathbf{p}_u \times \mathbf{p}_v}{|\mathbf{p}_u \times \mathbf{p}_v|} = \mathbf{n}" />
                        <p>
                            となり、単位法ベクトルが方向を変えず完全に一致することが示された。この性質により、ヤコビ行列式が正である変換は曲面の「向き（orientation）」を保つことがわかる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
