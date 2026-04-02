import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        2変数関数 <InlineMath math="f(x, y)" /> が点 <InlineMath math="(a, b)" /> の近くで定義されているとする。<br />
                        極限 <InlineMath math="\lim_{(x,y) \to (a,b)} f(x,y) = L" /> が成り立つことの定義を、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法を用いて述べよ（Definition 4.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="\varepsilon > 0" /> に対して、ある <InlineMath math="\delta > 0" /> が存在して、
                        </p>
                        <BlockMath math="0 < \sqrt{(x-a)^2 + (y-b)^2} < \delta \implies |f(x,y) - L| < \varepsilon" />
                        <p>
                            が成り立つことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        2変数関数 <InlineMath math="f(x, y)" /> の点 <InlineMath math="(a, b)" /> における <InlineMath math="x" /> に関する偏導関数の定義式を、極限を用いて記せ（Definition 4.2-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\frac{\partial f}{\partial x}(a, b) = \lim_{h \to 0} \frac{f(a + h, b) - f(a, b)}{h}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        多変数関数の「全微分可能」、「偏微分可能」、「連続」の3つの性質の間に成り立つ包含関係を挙げよ。<br />
                        また、1変数関数では真であった「微分可能（偏微分可能）ならば連続である」という命題は、多変数関数においては真か偽か答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>包含関係：</strong><br />
                            「全微分可能」ならば「連続」である。<br />
                            「全微分可能」ならば「偏微分可能」である。
                        </p>
                        <p className="mt-2">
                            <strong>真偽：</strong><br />
                            多変数関数において「偏微分可能ならば連続である」は<strong>偽</strong>である。<br />
                            （各座標軸方向の極限が存在しても、他の経路で極限が一致するとは限らないため。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        近づく経路を変えることで、次の極限が存在しないことを示せ。
                    </p>
                    <BlockMath math="\lim_{(x,y) \to (0,0)} \frac{x^2 - y^2}{x^2 + y^2}" />
                    <ExerciseSolution>
                        <p>
                            <strong><InlineMath math="x" /> 軸に沿ったアプローチ（<InlineMath math="y = 0" />）：</strong>
                        </p>
                        <BlockMath math="\lim_{x \to 0} \frac{x^2 - 0^2}{x^2 + 0^2} = \lim_{x \to 0} \frac{x^2}{x^2} = 1" />
                        <p className="mt-2">
                            <strong><InlineMath math="y" /> 軸に沿ったアプローチ（<InlineMath math="x = 0" />）：</strong>
                        </p>
                        <BlockMath math="\lim_{y \to 0} \frac{0^2 - y^2}{0^2 + y^2} = \lim_{y \to 0} \frac{-y^2}{y^2} = -1" />
                        <p className="mt-2">
                            異なる経路（<InlineMath math="x" /> 軸と <InlineMath math="y" /> 軸）に沿って原点に近づいたとき、異なる極限値（<InlineMath math="1" /> と <InlineMath math="-1" />）が得られた。
                        </p>
                        <p>
                            多変数極限が存在するためにはあらゆる経路で同じ値に収束する必要があるため、この極限は<strong>存在しない</strong>。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        次の関数の偏導関数 <InlineMath math="\frac{\partial f}{\partial x}" /> と <InlineMath math="\frac{\partial f}{\partial y}" /> を求めよ。
                    </p>
                    <BlockMath math="f(x, y) = x^3 y^2 + e^{xy}" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="x" /> で偏微分するときは <InlineMath math="y" /> を定数とみなし、<InlineMath math="y" /> で偏微分するときは <InlineMath math="x" /> を定数とみなして計算する。
                        </p>
                        <p className="mt-2">
                            <strong><InlineMath math="x" /> に関する偏導関数：</strong>
                        </p>
                        <BlockMath math="\frac{\partial f}{\partial x} = 3x^2 \cdot y^2 + e^{xy} \cdot \frac{\partial}{\partial x}(xy) = 3x^2 y^2 + y e^{xy}" />
                        <p className="mt-2">
                            <strong><InlineMath math="y" /> に関する偏導関数：</strong>
                        </p>
                        <BlockMath math="\frac{\partial f}{\partial y} = x^3 \cdot 2y + e^{xy} \cdot \frac{\partial}{\partial y}(xy) = 2x^3 y + x e^{xy}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        関数 <InlineMath math="f(x,y) = x^2 + 3xy - y^2" /> について、点 <InlineMath math="(1, 2)" /> における勾配ベクトル <InlineMath math="\nabla f(1, 2)" /> を求めよ。<br />
                        また、その結果を用いて、単位ベクトル <InlineMath math="\boldsymbol{u} = \left(\frac{3}{5}, \frac{4}{5}\right)" /> の方向への方向微分 <InlineMath math="D_{\boldsymbol{u}} f(1, 2)" /> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、偏導関数を計算する。
                        </p>
                        <BlockMath math="\frac{\partial f}{\partial x} = 2x + 3y" />
                        <BlockMath math="\frac{\partial f}{\partial y} = 3x - 2y" />
                        <p>
                            点 <InlineMath math="(1, 2)" /> の値を代入する。
                        </p>
                        <BlockMath math="\frac{\partial f}{\partial x}(1, 2) = 2(1) + 3(2) = 8" />
                        <BlockMath math="\frac{\partial f}{\partial y}(1, 2) = 3(1) - 2(2) = -1" />
                        <p>
                            したがって、勾配ベクトルは
                        </p>
                        <BlockMath math="\nabla f(1, 2) = (8, -1)" />
                        <p>
                            である。（<InlineMath math="f" /> は多項式であり全微分可能なので）方向微分は勾配ベクトルと方向ベクトルの内積で計算できる。
                        </p>
                        <BlockMath math="\begin{aligned}
                            D_{\boldsymbol{u}} f(1, 2) &= \nabla f(1, 2) \cdot \boldsymbol{u} \\
                            &= (8, -1) \cdot \left(\frac{3}{5}, \frac{4}{5}\right) \\
                            &= 8\left(\frac{3}{5}\right) + (-1)\left(\frac{4}{5}\right) \\
                            &= \frac{24}{5} - \frac{4}{5} = \frac{20}{5} = 4
                        \end{aligned}
                        " />
                        <p>
                            よって、方向微分は <InlineMath math="4" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        関数 <InlineMath math="f(x,y) = \sin(xy)" /> が平面上の任意の点 <InlineMath math="(a,b)" /> で全微分可能であることを、Theorem 4.4-1 を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.4-1 によれば、関数が <InlineMath math="C^1" /> 級（偏導関数が存在し、それらが連続）であれば全微分可能である。
                        </p>
                        <p>
                            <InlineMath math="f(x,y) = \sin(xy)" /> の偏導関数を計算する。
                        </p>
                        <BlockMath math="\frac{\partial f}{\partial x} = y \cos(xy)" />
                        <BlockMath math="\frac{\partial f}{\partial y} = x \cos(xy)" />
                        <p>
                            これらの偏導関数 <InlineMath math="y \cos(xy)" /> と <InlineMath math="x \cos(xy)" /> は、多項式と三角関数の合成および積で表されているため、平面上のすべての点で連続である。
                        </p>
                        <p>
                            したがって、<InlineMath math="f(x,y)" /> は <InlineMath math="C^1" /> 級関数であり、Theorem 4.4-1 より任意の点 <InlineMath math="(a,b)" /> で全微分可能である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法を用いて、次の極限を証明せよ。
                    </p>
                    <BlockMath math="\lim_{(x,y) \to (0,0)} \frac{x^3}{x^2 + y^2} = 0" />
                    <p>
                        （ヒント：不等式 <InlineMath math="x^2 \leq x^2 + y^2" /> より <InlineMath math="|x| \leq \sqrt{x^2 + y^2}" /> が成り立つことを利用せよ。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="\varepsilon > 0" /> が与えられたとする。
                        </p>
                        <p>
                            <InlineMath math="\delta = \varepsilon" /> とおく。このとき、<InlineMath math="0 < \sqrt{x^2 + y^2} < \delta" /> を満たす任意の <InlineMath math="(x, y)" /> を考える。
                        </p>
                        <p>
                            評価すべき差の絶対値は <InlineMath math="\left| \frac{x^3}{x^2 + y^2} - 0 \right|" /> である。これを変形・評価する。
                        </p>
                        <BlockMath math="\left| \frac{x^3}{x^2 + y^2} \right| = \frac{|x|^3}{x^2 + y^2} = |x| \cdot \frac{x^2}{x^2 + y^2}" />
                        <p>
                            ここで、<InlineMath math="y^2 \geq 0" /> であるから <InlineMath math="x^2 \leq x^2 + y^2" />、すなわち <InlineMath math="\frac{x^2}{x^2 + y^2} \leq 1" /> が成り立つ。<br />
                            また、<InlineMath math="|x| = \sqrt{x^2} \leq \sqrt{x^2 + y^2}" /> である。
                        </p>
                        <p>
                            これらを用いると、
                        </p>
                        <BlockMath math="|x| \cdot \frac{x^2}{x^2 + y^2} \leq |x| \cdot 1 \leq \sqrt{x^2 + y^2}" />
                        <p>
                            仮定より <InlineMath math="\sqrt{x^2 + y^2} < \delta" /> であり、<InlineMath math="\delta = \varepsilon" /> と選んだため、
                        </p>
                        <BlockMath math="\left| \frac{x^3}{x^2 + y^2} - 0 \right| \leq \sqrt{x^2 + y^2} < \delta = \varepsilon" />
                        <p>
                            が成り立つ。
                        </p>
                        <p>
                            よって、定義より <InlineMath math="\lim_{(x,y) \to (0,0)} \frac{x^3}{x^2 + y^2} = 0" /> が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        次の関数について、原点 <InlineMath math="(0,0)" /> で偏微分可能であるかを調べ、可能ならばその値を求めよ。<br />
                        また、原点で全微分可能であるか調べ、その理由を述べよ。
                    </p>
                    <BlockMath math="f(x, y) = \begin{cases} \dfrac{xy^2}{x^2 + y^2} & (x, y) \neq (0, 0) \\ 0 & (x, y) = (0, 0) \end{cases}" />
                    <ExerciseSolution>
                        <p>
                            <strong>偏微分可能性について：</strong>
                        </p>
                        <p>
                            定義に従って原点での偏微分係数を計算する。
                        </p>
                        <BlockMath math="\frac{\partial f}{\partial x}(0, 0) = \lim_{h \to 0} \frac{f(h, 0) - f(0, 0)}{h} = \lim_{h \to 0} \frac{0 - 0}{h} = 0" />
                        <BlockMath math="\frac{\partial f}{\partial y}(0, 0) = \lim_{h \to 0} \frac{f(0, h) - f(0, 0)}{h} = \lim_{h \to 0} \frac{0 - 0}{h} = 0" />
                        <p>
                            極限が存在するため、原点で<strong>偏微分可能</strong>であり、偏微分係数はともに <InlineMath math="0" /> である。
                        </p>
                        <p className="mt-4">
                            <strong>全微分可能性について：</strong>
                        </p>
                        <p>
                            もし全微分可能であれば、<InlineMath math="A = \frac{\partial f}{\partial x}(0,0) = 0" />、<InlineMath math="B = \frac{\partial f}{\partial y}(0,0) = 0" /> となるはずである。
                            全微分可能性の定義式において誤差項 <InlineMath math="\varepsilon(h, k)" /> は次のように表される。
                        </p>
                        <BlockMath math="\varepsilon(h, k) = f(h, k) - f(0, 0) - A h - B k = \frac{h k^2}{h^2 + k^2}" />
                        <p>
                            全微分可能であるためには、次の極限が <InlineMath math="0" /> になる必要がある。
                        </p>
                        <BlockMath math="\lim_{(h,k) \to (0,0)} \frac{\varepsilon(h, k)}{\sqrt{h^2 + k^2}} = \lim_{(h,k) \to (0,0)} \frac{h k^2}{(h^2 + k^2)\sqrt{h^2 + k^2}}" />
                        <p>
                            ここで、経路として直線 <InlineMath math="h = k" /> に沿って原点に近づけてみる。
                        </p>
                        <BlockMath math="\frac{k \cdot k^2}{(k^2 + k^2)\sqrt{k^2 + k^2}} = \frac{k^3}{2k^2 \cdot \sqrt{2}|k|} = \frac{k}{2\sqrt{2}|k|}" />
                        <p>
                            <InlineMath math="k \to 0+" /> のとき極限は <InlineMath math="\frac{1}{2\sqrt{2}}" /> となり、<InlineMath math="0" /> にならない。<br />
                            したがって条件を満たさず、この関数は原点で<strong>全微分可能ではない</strong>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        2変数関数 <InlineMath math="f(x, y)" /> が点 <InlineMath math="(a, b)" /> で全微分可能であるとき、<InlineMath math="f" /> が <InlineMath math="(a, b)" /> で連続であることを証明せよ（Proposition 4.3-1 の (1)）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f" /> が点 <InlineMath math="(a, b)" /> で全微分可能であるという仮定から、定数 <InlineMath math="A, B" /> が存在して
                        </p>
                        <BlockMath math="f(a + h, b + k) = f(a, b) + Ah + Bk + \varepsilon(h, k)" />
                        <p>
                            と書ける。ここで <InlineMath math="\varepsilon(h, k)" /> は、<InlineMath math="(h, k) \to (0, 0)" /> のとき
                        </p>
                        <BlockMath math="\lim_{(h,k) \to (0,0)} \frac{\varepsilon(h, k)}{\sqrt{h^2 + k^2}} = 0" />
                        <p>
                            を満たす。
                        </p>
                        <p>
                            連続性を示すには、<InlineMath math="\lim_{(h,k) \to (0,0)} f(a + h, b + k) = f(a, b)" /> を示せばよい。
                            すなわち、<InlineMath math="\lim_{(h,k) \to (0,0)} |f(a + h, b + k) - f(a, b)| = 0" /> を示す。
                        </p>
                        <BlockMath math="\begin{aligned}
                            |f(a + h, b + k) - f(a, b)| &= |Ah + Bk + \varepsilon(h, k)| \\
                            &\leq |A||h| + |B||k| + |\varepsilon(h, k)|
                        \end{aligned}
                        " />
                        <p>
                            ここで、<InlineMath math="|h| \leq \sqrt{h^2 + k^2}" /> および <InlineMath math="|k| \leq \sqrt{h^2 + k^2}" /> であるから、
                        </p>
                        <BlockMath math="|A||h| + |B||k| \leq (|A| + |B|)\sqrt{h^2 + k^2}" />
                        <p>
                            となり、<InlineMath math="(h, k) \to (0, 0)" /> のときこれは <InlineMath math="0" /> に収束する。
                        </p>
                        <p>
                            また、誤差項については
                        </p>
                        <BlockMath math="|\varepsilon(h, k)| = \frac{|\varepsilon(h, k)|}{\sqrt{h^2 + k^2}} \cdot \sqrt{h^2 + k^2}" />
                        <p>
                            と変形でき、全微分可能性の条件より第1因子は <InlineMath math="0" /> に収束し、第2因子も <InlineMath math="0" /> に収束するため、<InlineMath math="|\varepsilon(h, k)| \to 0" /> である。
                        </p>
                        <p>
                            以上より、
                        </p>
                        <BlockMath math="\lim_{(h,k) \to (0,0)} |f(a + h, b + k) - f(a, b)| = 0" />
                        <p>
                            が成り立ち、<InlineMath math="f" /> は <InlineMath math="(a, b)" /> で連続であることが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
