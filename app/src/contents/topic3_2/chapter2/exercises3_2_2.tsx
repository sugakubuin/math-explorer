import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_2_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        複素関数 <InlineMath math="f(z) = z^2 + \overline{z}" /> を、実変数 <InlineMath math="x, y" /> を用いて実部 <InlineMath math="u(x, y)" /> と虚部 <InlineMath math="v(x, y)" /> に分解せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-1（複素関数）の定義に従い、 <InlineMath math="z = x + iy" /> を代入する。
                        </p>
                        <BlockMath math="\begin{aligned} f(z) &= (x + iy)^2 + (x - iy) \\ &= (x^2 - y^2 + 2xyi) + x - iy \\ &= (x^2 - y^2 + x) + i(2xy - y) \end{aligned}" />
                        <p>
                            よって：
                            <BlockMath math="u(x, y) = x^2 - y^2 + x, \quad v(x, y) = 2xy - y" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        複素関数 <InlineMath math="f(z) = u(x, y) + i v(x, y)" /> がある点で連続であるための必要十分条件を、実部・虚部を用いて述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 2.2-2（実部・虚部との連続性）によると、 <InlineMath math="f(z)" /> がある点で連続であるための必要十分条件は、その <b>実部 <InlineMath math="u" /> と虚部 <InlineMath math="v" /> がともにその点において（実関数として）連続であること</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        コーシー・リーマンの方程式（ Theorem 2.4-1 ）を記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            複素関数 <InlineMath math="f(z) = u(x, y) + i v(x, y)" /> が複素微分可能であるとき、次の 2 つの偏微分方程式が成り立つ：
                            <BlockMath math="\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        関数 <InlineMath math="f(z) = \text{Im}(z)" /> が、複素平面上のどの点においても複素微分可能でないことを、 Example 2.3-1 の方針（異なる方向からの極限比較）を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            実部・虚部は <InlineMath math="u = y, \; v = 0" /> である。偏微分を計算すると、
                            <BlockMath math="u_x = 0, \; u_y = 1, \; v_x = 0, \; v_y = 0" />
                        </p>
                        <p>
                            Theorem 2.4-1 （コーシー・リーマンの方程式）の第二式 <InlineMath math="u_y = -v_x" /> に代入すると、 <InlineMath math="1 = 0" /> となり、どのような実数 <InlineMath math="x, y" /> に対しても成立しない。
                        </p>
                        <p>
                            したがって、この関数は至る所微分不可能である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        実関数 <InlineMath math="u(x, y) = x^2 - y^2 + x" /> が Definition 2.4-1 で定義される調和関数であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ラプラス方程式 <InlineMath math="\Delta u = u_{xx} + u_{yy} = 0" /> を満たすことを確認する。
                        </p>
                        <BlockMath math="\begin{aligned} u_x &= 2x + 1, \quad &u_{xx} = 2 \\ u_y &= -2y, \quad &u_{yy} = -2 \end{aligned}" />
                        <p>
                            よって、 <InlineMath math="\Delta u = 2 - 2 = 0" /> となり、調和関数である。
                            （これは Theorem 2.4-3 に関連し、後で正則な多項式の第 1 項になる性質を持つ）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        複素関数 <InlineMath math="f(z) = 2z + 1" /> による写像は、複素平面上の図形に対してどのような幾何学的変化をもたらすか、 §2.1 のRemark（写像としての解釈）を参考に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            写像は 2 つのステップに分解される。
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><InlineMath math="z \to 2z" />：原点中心での相似拡大（ 2 倍）。</li>
                            <li><InlineMath math="W \to W + 1" />：実軸正の方向への平行移動（ +1 ）。</li>
                        </ol>
                        <p className="mt-4">
                            したがって、平面全体を <b>相似的に 2 倍に拡大し、右に 1 だけ平行移動させる</b> 操作に対応する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        複素平面全域で正則な関数（ Definition 2.3-3 ）を何と呼ぶか。また、その例を 1 つ挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            複素平面 <InlineMath math="\mathbb{C}" /> の全域で正則な関数を <b>整関数 (entire function)</b> と呼ぶ。
                            例としては、多項式関数 <InlineMath math="f(z) = z^2" /> などが挙げられる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        調和関数 <InlineMath math="u = e^x \cos y" /> に対し、 Example 2.4-1 と同様の手順で共役調和関数 <InlineMath math="v" /> を求め、得られる正則関数 <InlineMath math="f(z) = u + iv" /> を <InlineMath math="z" /> の式で表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            C-R 方程式 <InlineMath math="v_y = u_x, \; v_x = -u_y" /> を用いる。
                        </p>
                        <p>
                            <InlineMath math="v_y = u_x = e^x \cos y \implies v = e^x \sin y + g(x)" />
                            これを <InlineMath math="x" /> で微分すると、 <InlineMath math="v_x = e^x \sin y + g'(x)" /> 。
                            これが <InlineMath math="-u_y = e^x \sin y" /> と等しいため、 <InlineMath math="g'(x) = 0 \implies g(x) = C" /> となる。
                        </p>
                        <p>
                            したがって <InlineMath math="v = e^x \sin y + C" /> である。 <InlineMath math="C=0" /> とすると：
                            <BlockMath math="f(z) = e^x(\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z" />
                            となり、指数関数の正則性が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        複素解析において「 1 回複素微分可能（正則）であれば無限回微分可能である」という Theorem 2.3-1 の性質は、実解析（ <InlineMath math="\mathbb{R}" /> 上の関数）の場合とどのように異なるか、 §2.3 の記載を参考に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            実解析（ <InlineMath math="\mathbb{R}" /> 上の関数）においては、 1 回微分可能（ <InlineMath math="C^1" /> 級）であっても 2 回微分可能（ <InlineMath math="C^2" /> 級）であるとは限らない関数が多数存在する。
                        </p>
                        <p>
                            しかし、複素解析においては、 1 回でも複素微分可能であれば自動的に無限回微分可能であることが保証される。これは複素微分可能という条件が「全方向からの極限一致（ Definition 2.3-1 ）」を要求する極めて強力な拘束力を持っているためである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        領域 <InlineMath math="D" /> 上で正則な関数 <InlineMath math="f(z) = u + iv" /> において、実部 <InlineMath math="u" /> が定数であるとき、 <InlineMath math="f" /> 自体も定数関数であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="u" /> が定数であるため、各座標による偏導関数は 0 である。
                            <BlockMath math="\frac{\partial u}{\partial x} = 0, \quad \frac{\partial u}{\partial y} = 0" />
                        </p>
                        <p>
                            正則関数であるから、 Theorem 2.4-1 （コーシー・リーマンの方程式）が成り立つ：
                            <BlockMath math="\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 0, \quad \frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = 0" />
                        </p>
                        <p>
                            虚部 <InlineMath math="v" /> の偏導関数もすべて 0 であるため、 <InlineMath math="v" /> も定数である。
                            実部と虚部がともに定数であるため、 <InlineMath math="f(z)" /> は定数関数である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
