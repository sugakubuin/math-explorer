import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_6_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        変分問題における「自然境界条件（Natural Boundary Condition）」とは何か、簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            端点での関数の値が固定されていない（自由端）場合、汎関数の第一変分が消えるための要請から、境界項をゼロにするために「自然に」導き出される境界条件のことである（Theorem 3.1-1）。
                            設計者が外部から与える強制境界条件とは対照的に、変分原理そのものから決定される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        汎関数 <InlineMath math="J[u] = \int_a^b (u'^2 + u^2) dx" /> において、右端 <InlineMath math="x=b" /> が自由端であるとき、
                        その点における自然境界条件を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ラグランジアンは <InlineMath math="F = u'^2 + u^2" /> である。
                            自然境界条件は <InlineMath math="\frac{\partial F}{\partial u'} \bigg|_{x=b} = 0" /> で与えられる（Theorem 3.1-1）。
                        </p>
                        <p>
                            偏微分を計算すると <InlineMath math="\frac{\partial F}{\partial u'} = 2u'" /> である。
                            したがって、自然境界条件は <b><InlineMath math="u'(b) = 0" /></b> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        終点が曲線 <InlineMath math="y = \phi(x)" /> 上にあるときのトランザーバリティ条件の公式（Theorem 3.2-1）を書き下せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            端点 <InlineMath math="x = b" /> において：
                            <BlockMath math="F + (\phi' - u') \frac{\partial F}{\partial u'} \bigg|_{x=b} = 0" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        左端が固定（<InlineMath math="u(0) = 0" />）、右端が自由（自然境界条件）である汎関数 <InlineMath math="J[u] = \int_0^L \frac{1}{2} (u')^2 dx" /> の停留関数を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. E-L 方程式は <InlineMath math="u'' = 0" /> である。一般解は <InlineMath math="u(x) = C_1 x + C_2" />。
                        </p>
                        <p>
                            2. 左端の条件 <InlineMath math="u(0) = 0" /> より、<InlineMath math="C_2 = 0" />、よって <InlineMath math="u(x) = C_1 x" />。
                        </p>
                        <p>
                            3. 右端 <InlineMath math="x=L" /> の自然境界条件は <InlineMath math="F_{u'}(L) = u'(L) = 0" /> である。
                        </p>
                        <p>
                            4. <InlineMath math="u'(x) = C_1" /> なので、<InlineMath math="C_1 = 0" />。
                        </p>
                        <p>
                            5. したがって、停留関数は <b><InlineMath math="u(x) \equiv 0" /></b> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        弧長汎関数 <InlineMath math="F = \sqrt{1 + u'^2}" /> において、右端が固定された鉛直な直線 <InlineMath math="x = a" /> 上を自由に動ける場合のトランザーバリティ条件を求め、その幾何学的意味を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. ターゲットの曲線は <InlineMath math="x = a" /> であるが、これは関数 <InlineMath math="\phi(x)" /> の形では <InlineMath math="\phi' \to \infty" /> に相当する。
                        </p>
                        <p>
                            2. トランザーバリティ条件 <InlineMath math="F + (\phi' - u') F_{u'} = 0" /> を <InlineMath math="\phi'" /> で割ると：
                            <BlockMath math="\frac{F}{\phi'} + (1 - \frac{u'}{\phi'}) F_{u'} = 0" />
                        </p>
                        <p>
                            3. <InlineMath math="\phi' \to \infty" /> の極限をとると、<InlineMath math="F_{u'} = 0" /> が残る。
                        </p>
                        <p>
                            4. 弧長汎関数で <InlineMath math="F_{u'} = \frac{u'}{\sqrt{1+u'^2}} = 0" /> となるのは <b><InlineMath math="u' = 0" /></b> のときである。
                        </p>
                        <p>
                            5. これは、最短経路が鉛直な直線（ターゲット）に対して「水平」に、すなわち <b>直交</b> して交わることを意味する（Example 3.2-1）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        片持ち梁（左端固定端、右端自由端）の変位汎関数 <InlineMath math="J = \int_0^L (\frac{EI}{2}(u'')^2 - qu) dx" /> から導かれる右端での境界条件
                        <BlockMath math="u''(L) = 0, \quad u'''(L) = 0" />
                        について、これらがそれぞれ物理的に何を意味しているか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 3.1-1 および Example 3.1-2 に基づき：
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><b><InlineMath math="u''(L) = 0" /></b>: 片持ち梁の自由な先端において <b>曲げモーメント</b> が 0 であることを意味する。</li>
                            <li><b><InlineMath math="u'''(L) = 0" /></b>: 同じく先端において <b>せん断力</b> が 0 であることを意味する。</li>
                        </ul>
                        <p>
                            外部からの支持がない端部では内部応力が伝達されないという物理的一貫性が、変分原理により自動的に要請されている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        ターゲット曲線が関数 <InlineMath math="\phi(x)" /> で表されるとき、最短経路問題においてトランザーバリティ条件が <InlineMath math="1 + \phi' u' = 0" /> となることを導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. ラグランジアンは <InlineMath math="F = \sqrt{1 + u'^2}" />、偏導関数は <InlineMath math="F_{u'} = \frac{u'}{\sqrt{1+u'^2}}" />。
                        </p>
                        <p>
                            2. 公式（Theorem 3.2-1）に代入：
                            <BlockMath math="\sqrt{1+u'^2} + (\phi' - u') \frac{u'}{\sqrt{1+u'^2}} = 0" />
                        </p>
                        <p>
                            3. 全体に <InlineMath math="\sqrt{1+u'^2}" /> をかける：
                            <BlockMath math="(1+u'^2) + (\phi' - u') u' = 1 + u'^2 + \phi' u' - u'^2 = 1 + \phi' u' = 0" />
                        </p>
                        <p>
                            4. これにより、両者の傾きの積が -1、つまり直交することが示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        光の屈折における「スネルの法則」はフェルマーの原理（光路時間の最小化）から導かれる。
                        媒質境界を曲線 <InlineMath math="y = \phi(x)" /> とし、一方の媒質の速さを <InlineMath math="v_1" />、他方を <InlineMath math="v_2" /> とするとき、
                        横断条件がどのようにスネルの法則として結実するか、その方針を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 全所要時間の汎関数は <InlineMath math="T = \int \frac{\sqrt{1+u'^2}}{v(x, y)} dx" /> である。
                        </p>
                        <p>
                            2. 境界点において、媒質 1 側からの変分と媒質 2 側からの変分の合計が 0 となる条件を考える。
                        </p>
                        <p>
                            3. 各媒質でのトランザーバリティ条件を境界線（共通端点）上で適用すると、それぞれの入射角・屈折角と境界線の傾きに関する関係式が得られる。
                        </p>
                        <p>
                            4. この計算の結果、境界の法線ベクトル成分に対して <InlineMath math="\frac{\sin \theta_1}{v_1} = \frac{\sin \theta_2}{v_2}" /> という不変量が得られ、これがスネルの法則（Example 3.2-1 備考参照）に他ならない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        汎関数 <InlineMath math="J[u] = \int_a^b (u'^2 + u^2) dx" /> において、両端 <InlineMath math="a, b" /> が共に自由端であるとき、
                        非自明な停留関数（<InlineMath math="u \not\equiv 0" />）が存在するか判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. E-L 方程式は <InlineMath math="u'' - u = 0" />、一般解は <InlineMath math="u(x) = C_1 e^x + C_2 e^{-x}" />。
                        </p>
                        <p>
                            2. 両端での自然境界条件は（Exercise 2 より） <InlineMath math="u'(a) = 0, \ u'(b) = 0" />。
                        </p>
                        <p>
                            3. 条件を書き出す：
                            <BlockMath math="\begin{cases} C_1 e^a - C_2 e^{-a} = 0 \\ C_1 e^b - C_2 e^{-b} = 0 \end{cases}" />
                        </p>
                        <p>
                            4. この連立方程式の行列式を計算すると <InlineMath math="e^a (-e^{-b}) - (-e^{-a}) e^b = e^{b-a} - e^{-(b-a)} = 2 \sinh(b-a)" />。
                        </p>
                        <p>
                            5. <InlineMath math="b > a" /> であれば行列式は 0 にならないため、解は <InlineMath math="C_1 = C_2 = 0" /> に限られる。
                        </p>
                        <p>
                            6. したがって、停留関数は <b><InlineMath math="u \equiv 0" /></b> のみであり、非自明な停留関数は存在しない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        数値計算手法（有限要素法など）において、自然境界条件が「弱形式」において自動的に処理される理由を、
                        第一変分の積分形式 <InlineMath math="\int (E-L)\eta dx + [F_{u'}\eta] = 0" /> に着目して論じよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 数値計算（弱形式）では、元の方程式を直接解くのではなく、任意のテスト関数 <InlineMath math="\eta" /> に対して第一変分が 0 となる状態を探す。
                        </p>
                        <p>
                            2. 固定端条件の場合、<InlineMath math="\eta" /> は境界で 0 と制限されるため、境界項 <InlineMath math="[F_{u'}\eta]" /> は最初から現れない。
                        </p>
                        <p>
                            3. 一方、自然境界条件の場合、<InlineMath math="\eta" /> は境界で自由なままとされる。
                            もし計算過程でこの境界項を明示的に指定しなければ（あるいはポテンシャルとして追加しなければ）、第一変分全体が 0 になるためには、数学的に必然として <b><InlineMath math="F_{u'} = 0" /></b> が満たされる方向へ数値解が収束する。
                        </p>
                        <p>
                            4. つまり、何も制約を加えないことが「力が釣り合っている（自然境界条件が満たされている）」状態を表現することになり、これが FEM における自然境界条件の自動処理（§3.1 備考（自然境界条件の名前の意味））の根拠となっている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
