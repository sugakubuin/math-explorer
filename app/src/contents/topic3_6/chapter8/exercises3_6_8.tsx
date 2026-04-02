import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_6_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="8" number={1}>
                    <p>
                        2 変数関数 <InlineMath math="u(x, y)" /> に関する多重積分汎関数（Definition 8.1-1）の一般的な形式を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            領域 <InlineMath math="\Omega \subset \mathbb{R}^2" /> において、
                            <BlockMath math="J[u] = \iint_\Omega F(x, y, u, u_x, u_y) \, dA" />
                            として定義される。ここで <InlineMath math="u_x, u_y" /> はそれぞれの偏導関数である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>
                        多変数オイラー＝ラグランジュ方程式（Theorem 8.2-1）の微分方程式形式を書き下せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <BlockMath math="F_u - \frac{\partial}{\partial x} F_{u_x} - \frac{\partial}{\partial y} F_{u_y} = 0" />
                            または、発散（div）を用いて <b><InlineMath math="F_u - \text{div}(F_{u_x}, F_{u_y}) = 0" /></b> と記述される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>
                        変分法における「弱定式化（Weak Formulation）」の定義（Definition 8.3-1）とその目的を簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            滑らかな関数クラス（<InlineMath math="C^2" />）では解が存在しない場合に対応するため、変分原理をテスト関数 <InlineMath math="\eta" /> を用いた積分方程式
                            <BlockMath math="\iint_\Omega \nabla u \cdot \nabla \eta \, dA = \iint_\Omega f \eta \, dA" />
                            の形で定義し直すことである。これにより、より広い関数空間（ソボレフ空間）で解を探索できる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="8" number={4}>
                    <p>
                        ディリクレ積分 <InlineMath math="J[u] = \frac{1}{2} \iint (u_x^2 + u_y^2) dA" /> からラプラス方程式 <InlineMath math="\Delta u = 0" /> が導かれる過程において、各偏導関数 <InlineMath math="F_u, F_{u_x}, F_{u_y}" /> はどのようになるか求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 8.2-1 より：
                            <BlockMath math="F_u = 0, \quad F_{u_x} = u_x, \quad F_{u_y} = u_y" />
                        </p>
                        <p>
                            これを E-L 方程式に代入すると、<InlineMath math="-(u_{xx} + u_{yy}) = 0" /> すなわち <InlineMath math="\Delta u = 0" /> を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p>
                        ポアソン方程式 <InlineMath math="-\Delta u = f" /> に対応する汎関数の被積分関数 <InlineMath math="F" /> を構成せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ディリクレ積分にソース項 <InlineMath math="f u" /> を組み合わせることで構成できる（Definition 8.3-1 参照）：
                            <BlockMath math="F = \frac{1}{2} (u_x^2 + u_y^2) - f u" />
                            この汎関数の変分をゼロと置くことで、ポアソン方程式が導出される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>
                        多変数の変分問題において、変分方向 <InlineMath math="\eta(x, y)" /> が境界 <InlineMath math="\partial \Omega" /> 上で 0 である必要がある理由を、ガウスの発散定理の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定理 8.2-1 の証明において、部分積分の際に出現する境界積分項（全発散の項）
                            <BlockMath math="\iint_\Omega \text{div}(\eta \vec{V}) dA = \int_{\partial \Omega} \eta (\vec{V} \cdot \vec{n}) ds" />
                            を消滅させる必要があるためである。
                            境界で関数値が固定されている（ディリクレ条件）場合、変分 <InlineMath math="\eta" /> は 0 であるべきという要請と合致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={7}>
                    <p>
                        極小曲面方程式（Example 8.2-2）
                        <BlockMath math="\frac{\partial}{\partial x} \left( \frac{u_x}{W} \right) + \frac{\partial}{\partial y} \left( \frac{u_y}{W} \right) = 0 \quad (W = \sqrt{1+u_x^2+u_y^2})" />
                        の幾何学的な意味を、曲率の観点から述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            この方程式は、曲面上の各点における <b>平均曲率 (Mean Curvature)</b> が 0 であることを意味している。
                            これは、石鹸膜のように、表面張力によって面積を最小にしようとする物理的平衡状態を幾何学的に表現している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="8" number={8}>
                    <p>
                        L 字型領域などの非凸な領域において、古典的な <InlineMath math="C^2" /> 解が存在しないことがある理由を述べよ（Example 8.3-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 領域に「内角が 180 度を超える角」がある場合、その近傍で解の導関数が無限に発散してしまう（特異性）。
                        </p>
                        <p>
                            2. 物理的なエネルギー（積分値）は有限であっても、点ごとの 2 階微分を指定するオイラー＝ラグランジュ方程式を古典的な意味で満たすことができなくなる。
                        </p>
                        <p>
                            3. このような状況に対処するために、滑らかさの要請を緩めた「弱解」の概念が必要となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={9}>
                    <p>
                        弱定式化において用いられる「ソボレフ空間 <InlineMath math="H^1(\Omega)" />」とはどのような関数空間か、その基本的な特徴を述べよ（§8.1 備考および §8.3 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 関数自体だけでなく、その導関数（弱導関数）までもが 2 乗可積分であるような関数の集合である。
                        </p>
                        <p>
                            2. 従来の <InlineMath math="C^k" /> 空間よりも広く、不連続に近い挙動（折れ曲がりなど）を許容しながらも、エネルギーが定義できる数学的な枠組みを提供する。
                        </p>
                        <p>
                            3. この空間上で変分問題を考えることで、解の存在証明をヒルベルト空間論の範疇で行うことが可能になる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={10}>
                    <p>
                        弱定式化された問題において、解の一意的な存在を保証する「Lax-Milgram の定理」の役割を、変分法の視点から考察せよ（§8.3 備考）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 極値が存在するためには、汎関数が下に有界であるだけでなく、適切な「曲率（強圧性/コエルシビティ）」を持っている必要がある。
                        </p>
                        <p>
                            2. Lax-Milgram の定理は、物理的な意味での「エネルギーの凸性」を数学的に保証し、それが解の一意性と安定性に直結していることを示している。
                        </p>
                        <p>
                            3. これにより、変分法は単なる近似的手法ではなく、偏微分方程式の数学的基盤としての地位を確立している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
