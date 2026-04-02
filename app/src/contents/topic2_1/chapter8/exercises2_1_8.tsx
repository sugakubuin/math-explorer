import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="8" number={1}>
                    <p>
                        実ベクトル空間 <InlineMath math="V" /> における内積（Definition 8.1-1）が満たすべき3つの公理の名称を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 正値性（Positive Definiteness）<br />
                            2. 対称性（Symmetry）<br />
                            3. 双線形性（Bilinearity）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>
                        内積空間において、任意の2つのベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y}" /> に対して常に成り立つ不等式 <InlineMath math="|\langle \boldsymbol{x}, \boldsymbol{y} \rangle| \leq \| \boldsymbol{x} \| \| \boldsymbol{y} \|" /> を何と呼ぶか（Theorem 8.3-1）。
                    </p>
                    <ExerciseSolution>
                        <p><strong>コーシー・シュワルツの不等式</strong>（Cauchy-Schwarz Inequality）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>
                        Theorem 8.5-1 によれば、線形変換 <InlineMath math="P" /> が直交射影作用素であるための必要十分条件となる2つの代数的性質は何か。式と名称を答えよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li><strong>べき等性：</strong> <InlineMath math="P^2 = P" /></li>
                            <li><strong>自己随伴性：</strong> 任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y}" /> に対して <InlineMath math="\langle P\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, P\boldsymbol{y} \rangle" /> （または <InlineMath math="P^* = P" /> など）</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="8" number={4}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> のベクトル <InlineMath math="\boldsymbol{x} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}" /> と <InlineMath math="\boldsymbol{y} = \begin{pmatrix} -1 \\ 3 \end{pmatrix}" /> について、標準内積 <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle" /> を計算し、この2つのベクトルがなす角 <InlineMath math="\theta" /> を求めよ（<InlineMath math="\theta" /> を <InlineMath math="\arccos" /> 等を用いて表してよい、または有名角であれば角度で答えよ）。
                    </p>
                    <ExerciseSolution>
                        <p><strong>内積の計算：</strong></p>
                        <BlockMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle = 2(-1) + 1(3) = -2 + 3 = 1" />
                        
                        <p className="mt-4"><strong>ノルムの計算：</strong></p>
                        <BlockMath math="\| \boldsymbol{x} \| = \sqrt{2^2 + 1^2} = \sqrt{5}" />
                        <BlockMath math="\| \boldsymbol{y} \| = \sqrt{(-1)^2 + 3^2} = \sqrt{10}" />
                        
                        <p className="mt-4"><strong>なす角の計算：</strong></p>
                        <p>なす角の定義 <InlineMath math="\cos\theta = \frac{\langle \boldsymbol{x}, \boldsymbol{y} \rangle}{\| \boldsymbol{x} \| \| \boldsymbol{y} \|}" /> より、</p>
                        <BlockMath math="\cos\theta = \frac{1}{\sqrt{5}\sqrt{10}} = \frac{1}{\sqrt{50}} = \frac{1}{5\sqrt{2}}" />
                        <p>したがって、なす角は <InlineMath math="\theta = \arccos\left(\frac{1}{5\sqrt{2}}\right)" /> である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p>
                        関数空間 <InlineMath math="C[-1, 1]" /> において、内積を <InlineMath math="\langle f, g \rangle = \int_{-1}^1 f(x)g(x) dx" /> と定義する。<br />
                        このとき、関数 <InlineMath math="f(x) = 1" />（定数関数）と <InlineMath math="g(x) = x" /> が直交していることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            直交の定義（Definition 8.4-1）より、内積が <InlineMath math="0" /> になることを示せばよい。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \langle f, g \rangle &= \int_{-1}^1 1 \cdot x \, dx \\
                            &= \int_{-1}^1 x \, dx \\
                            &= \left[ \frac{1}{2}x^2 \right]_{-1}^1 \\
                            &= \frac{1}{2}(1)^2 - \frac{1}{2}(-1)^2 = \frac{1}{2} - \frac{1}{2} = 0
                            \end{aligned}
                        " />
                        <p>
                            内積が <InlineMath math="0" /> となるため、<InlineMath math="f(x)" /> と <InlineMath math="g(x)" /> は直交している。
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            （※ 奇関数の <InlineMath math="[-a, a]" /> における定積分が0になる性質からも直ちに分かる。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>
                        <InlineMath math="\mathbb{R}^3" /> において、部分空間 <InlineMath math="W" /> をベクトル <InlineMath math="\boldsymbol{w} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}" /> の張る1次元空間（直線）とする。<br />
                        このとき、<InlineMath math="W" /> の直交補空間 <InlineMath math="W^\perp" /> はどのような空間（図形）になるか。<InlineMath math="W^\perp" /> に属するベクトル <InlineMath math="\begin{pmatrix} x \\ y \\ z \end{pmatrix}" /> が満たすべき方程式を一つ答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            直交補空間の定義より、<InlineMath math="W^\perp" /> の任意のベクトル <InlineMath math="\boldsymbol{v} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}" /> は <InlineMath math="W" /> の基底ベクトル <InlineMath math="\boldsymbol{w}" /> と直交しなければならない。
                        </p>
                        <BlockMath math="\left\langle \begin{pmatrix} x \\ y \\ z \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} \right\rangle = 0" />
                        <p>
                            これを計算すると、
                        </p>
                        <BlockMath math="x + y + z = 0" />
                        <p>
                            となる。これは原点を通る<strong>平面</strong>の方程式である。<br />
                            したがって、<InlineMath math="W^\perp" /> は方程式 <InlineMath math="x + y + z = 0" /> を満たすベクトル全体からなる2次元の平面となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="8" number={7}>
                    <p>
                        複素内積空間において、任意のベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y}" /> に対して次の等式（中線定理 / Parallelogram Law）が成り立つことを、内積の公理（ノルムの定義 <InlineMath math="\| \boldsymbol{v} \|^2 = \langle \boldsymbol{v}, \boldsymbol{v} \rangle" />）を用いて証明せよ。
                    </p>
                    <BlockMath math="\| \boldsymbol{x} + \boldsymbol{y} \|^2 + \| \boldsymbol{x} - \boldsymbol{y} \|^2 = 2\| \boldsymbol{x} \|^2 + 2\| \boldsymbol{y} \|^2" />
                    <ExerciseSolution>
                        <p>
                            左辺の各項を内積を用いて展開する。<br />
                            まず、<InlineMath math="\| \boldsymbol{x} + \boldsymbol{y} \|^2" /> を展開する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \| \boldsymbol{x} + \boldsymbol{y} \|^2 &= \langle \boldsymbol{x} + \boldsymbol{y}, \boldsymbol{x} + \boldsymbol{y} \rangle \\
                            &= \langle \boldsymbol{x}, \boldsymbol{x} \rangle + \langle \boldsymbol{x}, \boldsymbol{y} \rangle + \langle \boldsymbol{y}, \boldsymbol{x} \rangle + \langle \boldsymbol{y}, \boldsymbol{y} \rangle \\
                            &= \| \boldsymbol{x} \|^2 + \langle \boldsymbol{x}, \boldsymbol{y} \rangle + \langle \boldsymbol{y}, \boldsymbol{x} \rangle + \| \boldsymbol{y} \|^2 \quad \dots (1)
                            \end{aligned}
                        " />
                        <p>
                            次に、<InlineMath math="\| \boldsymbol{x} - \boldsymbol{y} \|^2" /> を展開する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \| \boldsymbol{x} - \boldsymbol{y} \|^2 &= \langle \boldsymbol{x} - \boldsymbol{y}, \boldsymbol{x} - \boldsymbol{y} \rangle \\
                            &= \langle \boldsymbol{x}, \boldsymbol{x} \rangle + \langle \boldsymbol{x}, -\boldsymbol{y} \rangle + \langle -\boldsymbol{y}, \boldsymbol{x} \rangle + \langle -\boldsymbol{y}, -\boldsymbol{y} \rangle
                            \end{aligned}
                        " />
                        <p>
                            複素内積空間における半双線形性より、第2引数のスカラー <InlineMath math="-1" /> は複素共役 <InlineMath math="\overline{-1} = -1" /> として外に出る。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \| \boldsymbol{x} - \boldsymbol{y} \|^2 &= \| \boldsymbol{x} \|^2 - \langle \boldsymbol{x}, \boldsymbol{y} \rangle - \langle \boldsymbol{y}, \boldsymbol{x} \rangle + (-1)(-1)\langle \boldsymbol{y}, \boldsymbol{y} \rangle \\
                            &= \| \boldsymbol{x} \|^2 - \langle \boldsymbol{x}, \boldsymbol{y} \rangle - \langle \boldsymbol{y}, \boldsymbol{x} \rangle + \| \boldsymbol{y} \|^2 \quad \dots (2)
                            \end{aligned}
                        " />
                        <p>
                            式(1)と式(2)を辺々足し合わせる。交差項である <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle" /> と <InlineMath math="\langle \boldsymbol{y}, \boldsymbol{x} \rangle" /> がそれぞれ符号が逆であるため完全に打ち消し合う。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \| \boldsymbol{x} &+ \boldsymbol{y} \|^2 + \| \boldsymbol{x} - \boldsymbol{y} \|^2 \\
                            &= (\| \boldsymbol{x} \|^2 + \langle \boldsymbol{x}, \boldsymbol{y} \rangle + \langle \boldsymbol{y}, \boldsymbol{x} \rangle + \| \boldsymbol{y} \|^2) \\ &\quad + (\| \boldsymbol{x} \|^2 - \langle \boldsymbol{x}, \boldsymbol{y} \rangle - \langle \boldsymbol{y}, \boldsymbol{x} \rangle + \| \boldsymbol{y} \|^2) \\
                            &= 2\| \boldsymbol{x} \|^2 + 2\| \boldsymbol{y} \|^2
                            \end{aligned}
                        " />
                        <p>
                            以上より、中線定理が成り立つことが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={8}>
                    <p>
                        内積空間 <InlineMath math="V" /> とその部分空間 <InlineMath math="W" /> について、直交射影作用素を <InlineMath math="P: V \to V" /> （像は <InlineMath math="W" />）とする。<br />
                        線形変換 <InlineMath math="Q = I - P" /> （<InlineMath math="I" /> は恒等写像）を定義するとき、以下の2点を示せ。
                    </p>
                    <p>
                        (1) <InlineMath math="Q" /> もべき等性（<InlineMath math="Q^2 = Q" />）と自己随伴性（<InlineMath math="\langle Q\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, Q\boldsymbol{y} \rangle" />）を満たす（すなわち、<InlineMath math="Q" /> も何らかの部分空間への直交射影である）。<br />
                        (2) <InlineMath math="Q" /> の像空間 <InlineMath math="\mathrm{Im}(Q)" /> は <InlineMath math="W^\perp" /> に一致する（すなわち、<InlineMath math="Q" /> は直交補空間への直交射影である）。
                    </p>
                    <ExerciseSolution>
                        <p><strong>(1) の証明：</strong></p>
                        <p>
                            まずべき等性を示す。<InlineMath math="Q = I - P" /> であり、<InlineMath math="P" /> は直交射影なので <InlineMath math="P^2 = P" /> である。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            Q^2 &= (I - P)^2 = (I - P)(I - P) \\
                            &= I^2 - IP - PI + P^2 \\
                            &= I - 2P + P \quad (\because P^2 = P) \\
                            &= I - P = Q
                            \end{aligned}
                        " />
                        <p>よってべき等性を満たす。</p>
                        <p>
                            次に自己随伴性を示す。<InlineMath math="P" /> は直交射影なので <InlineMath math="\langle P\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, P\boldsymbol{y} \rangle" /> である。また自明に <InlineMath math="\langle I\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, I\boldsymbol{y} \rangle" /> である。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \langle Q\boldsymbol{x}, \boldsymbol{y} \rangle &= \langle (I - P)\boldsymbol{x}, \boldsymbol{y} \rangle \\
                            &= \langle \boldsymbol{x} - P\boldsymbol{x}, \boldsymbol{y} \rangle \\
                            &= \langle \boldsymbol{x}, \boldsymbol{y} \rangle - \langle P\boldsymbol{x}, \boldsymbol{y} \rangle \\
                            &= \langle \boldsymbol{x}, \boldsymbol{y} \rangle - \langle \boldsymbol{x}, P\boldsymbol{y} \rangle \quad (\because \text{Pの自己随伴性}) \\
                            &= \langle \boldsymbol{x}, \boldsymbol{y} - P\boldsymbol{y} \rangle \\
                            &= \langle \boldsymbol{x}, (I - P)\boldsymbol{y} \rangle = \langle \boldsymbol{x}, Q\boldsymbol{y} \rangle
                            \end{aligned}
                        " />
                        <p>よって自己随伴性も満たす。したがって Theorem 8.5-1 より <InlineMath math="Q" /> は直交射影である。</p>

                        <p className="mt-4"><strong>(2) の証明：</strong></p>
                        <p>
                            <InlineMath math="\mathrm{Im}(Q) = W^\perp" /> を示すため、双方向の包含関係を示す。
                        </p>
                        <p>
                            ・<InlineMath math="\mathrm{Im}(Q) \subset W^\perp" />：<br />
                            任意の <InlineMath math="\boldsymbol{y} \in \mathrm{Im}(Q)" /> をとる。ある <InlineMath math="\boldsymbol{x} \in V" /> により <InlineMath math="\boldsymbol{y} = Q\boldsymbol{x} = \boldsymbol{x} - P\boldsymbol{x}" /> と書ける。<br />
                            任意の <InlineMath math="\boldsymbol{w} \in W" /> に対して内積をとる。<InlineMath math="\boldsymbol{w} \in W" /> なので <InlineMath math="P\boldsymbol{w} = \boldsymbol{w}" /> である。
                        </p>
                        <BlockMath math="
                            \langle \boldsymbol{y}, \boldsymbol{w} \rangle = \langle \boldsymbol{x} - P\boldsymbol{x}, \boldsymbol{w} \rangle = \langle \boldsymbol{x}, \boldsymbol{w} \rangle - \langle P\boldsymbol{x}, \boldsymbol{w} \rangle
                        " />
                        <p>
                            <InlineMath math="P" /> の自己随伴性より、
                        </p>
                        <BlockMath math="
                            = \langle \boldsymbol{x}, \boldsymbol{w} \rangle - \langle \boldsymbol{x}, P\boldsymbol{w} \rangle = \langle \boldsymbol{x}, \boldsymbol{w} \rangle - \langle \boldsymbol{x}, \boldsymbol{w} \rangle = 0
                        " />
                        <p>
                            したがって <InlineMath math="\boldsymbol{y}" /> は <InlineMath math="W" /> のすべてのベクトルと直交するため、<InlineMath math="\boldsymbol{y} \in W^\perp" /> である。
                        </p>
                        <p className="mt-2">
                            ・<InlineMath math="W^\perp \subset \mathrm{Im}(Q)" />：<br />
                            任意の <InlineMath math="\boldsymbol{z} \in W^\perp" /> をとる。射影定理より <InlineMath math="\boldsymbol{z} = P\boldsymbol{z} + (I - P)\boldsymbol{z}" /> と分解されるが、<InlineMath math="\boldsymbol{z} \in W^\perp = \ker(P)" /> より <InlineMath math="P\boldsymbol{z} = \boldsymbol{0}" /> である。<br />
                            したがって <InlineMath math="\boldsymbol{z} = \boldsymbol{0} + Q\boldsymbol{z} = Q\boldsymbol{z}" /> となり、<InlineMath math="\boldsymbol{z}" /> 自身が <InlineMath math="Q" /> の像に含まれる（<InlineMath math="\boldsymbol{z} \in \mathrm{Im}(Q)" />）。
                        </p>
                        <p>
                            以上より、<InlineMath math="\mathrm{Im}(Q) = W^\perp" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
