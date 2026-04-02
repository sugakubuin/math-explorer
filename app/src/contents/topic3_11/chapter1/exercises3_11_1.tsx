import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_11_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        有限次元ベクトル空間 <InlineMath math="V" /> とその双対空間 <InlineMath math="V^*" />（Definition 1.1-1）について、
                        <InlineMath math="V^*" /> の元はどのような写像か答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-1 より、<InlineMath math="V^*" /> の元（線形形式）はベクトル空間 <InlineMath math="V" /> から、その基礎となる体 <InlineMath math="\mathbb{k}" /> への線形写像である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        ベクトル空間 <InlineMath math="V" /> の基底 <InlineMath math="\{e_1, \ldots, e_n\}" /> に対する双対基底 <InlineMath math="\{e^1, \ldots, e^n\}" />（Definition 1.1-2）は、
                        どのような関係式を満たすように定義されるか。クロネッカーのデルタを用いて答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-2 より、双対基底 <InlineMath math="\{e^i\}" /> は、
                            <BlockMath math="e^i(e_j) = \delta^i_j \quad (1 \leq i, j \leq n)" />
                            を満たすように定義される（ここで <InlineMath math="\delta^i_j" /> はクロネッカーのデルタ）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        線形写像 <InlineMath math="f: V \to W" /> とその双対写像 <InlineMath math="f^*: W^* \to V^*" /> について、
                        任意の <InlineMath math="\psi \in W^*" /> と <InlineMath math="v \in V" /> に対し、<InlineMath math="(f^*\psi)(v)" /> を <InlineMath math="f, \psi, v" /> で表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-1 により、双対写像 <InlineMath math="f^*" /> は、
                            <BlockMath math="(f^*\psi)(v) = \psi(f(v))" />
                            を満たすように定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> の基底として <InlineMath math="v_1 = (1, 2)" /> と <InlineMath math="v_2 = (2, -1)" /> を考える。
                        これに対する双対基底 <InlineMath math="v^1, v^2 \in (\mathbb{R}^2)^*" /> を <InlineMath math="v^1(x,y)=ax+by" /> の形で求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-2 に従い、<InlineMath math="v^i(v_j) = \delta^i_j" /> となるように定める。
                            <InlineMath math="v^1(x,y) = ax+by" /> とおくと、
                        </p>
                        <BlockMath math="\begin{cases} v^1(v_1) = a + 2b = 1 \\ v^1(v_2) = 2a - b = 0 \end{cases}" />
                        <p>
                            第2式から <InlineMath math="b = 2a" /> を第1式に代入して <InlineMath math="a + 4a = 1" /> より <InlineMath math="a = \frac{1}{5}, b = \frac{2}{5}" />。
                            よって <InlineMath math="v^1(x,y) = \frac{1}{5}x + \frac{2}{5}y" />。
                        </p>
                        <p>
                            同様に <InlineMath math="v^2(x,y) = cx+dy" /> とおくと、
                        </p>
                        <BlockMath math="\begin{cases} v^2(v_1) = c + 2d = 0 \\ v^2(v_2) = 2c - d = 1 \end{cases}" />
                        <p>
                            第1式から <InlineMath math="c = -2d" /> を第2式に代入して <InlineMath math="-4d - d = 1" /> より <InlineMath math="d = -\frac{1}{5}, c = \frac{2}{5}" />。
                            よって <InlineMath math="v^2(x,y) = \frac{2}{5}x - \frac{1}{5}y" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        <InlineMath math="\mathbb{R}^3" /> の標準双対基底を <InlineMath math="e^1, e^2, e^3" /> とする。
                        線形形式 <InlineMath math="\phi \in (\mathbb{R}^3)^*" /> が <InlineMath math="\phi(x,y,z) = 4x - y + 5z" /> で与えられているとき、
                        <InlineMath math="\phi" /> を <InlineMath math="e^1, e^2, e^3" /> の線形結合で表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.1-1 の証明より、任意の線形形式 <InlineMath math="\phi" /> は
                            <BlockMath math="\phi = \phi(e_1)e^1 + \phi(e_2)e^2 + \phi(e_3)e^3" />
                            と展開できる。<InlineMath math="e_1=(1,0,0)" />, <InlineMath math="e_2=(0,1,0)" />, <InlineMath math="e_3=(0,0,1)" /> を代入して値を計算する（Example 1.1-1 参照）。
                        </p>
                        <BlockMath math="\phi(e_1) = 4(1) - 0 + 5(0) = 4" />
                        <BlockMath math="\phi(e_2) = 4(0) - 1 + 5(0) = -1" />
                        <BlockMath math="\phi(e_3) = 4(0) - 0 + 5(1) = 5" />
                        <p>
                            したがって、<InlineMath math="\phi = 4e^1 - e^2 + 5e^3" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> のベクトル <InlineMath math="v = (4, -2)" /> に対し、評価写像 <InlineMath math="\mathrm{ev}_v \in (\mathbb{R}^2)^{**}" /> 
                        が引き起こす値 <InlineMath math="\mathrm{ev}_v(e^1)" /> と <InlineMath math="\mathrm{ev}_v(e^2)" /> を求めよ（<InlineMath math="e^1, e^2" /> は標準双対基底）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-1 より、評価写像 <InlineMath math="\mathrm{ev}_v" /> の値は <InlineMath math="\mathrm{ev}_v(\phi) = \phi(v)" /> によって与えられる。
                        </p>
                        <p>
                            <InlineMath math="v = (4, -2)" /> を標準双対基底 <InlineMath math="e^1(x,y)=x" />, <InlineMath math="e^2(x,y)=y" /> （Example 1.2-1）に代入する。
                        </p>
                        <BlockMath math="\mathrm{ev}_v(e^1) = e^1(4, -2) = 4" />
                        <BlockMath math="\mathrm{ev}_v(e^2) = e^2(4, -2) = -2" />
                        <p>
                            よって <InlineMath math="\mathrm{ev}_v(e^1) = 4" />, <InlineMath math="\mathrm{ev}_v(e^2) = -2" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        線形写像 <InlineMath math="f: \mathbb{R}^2 \to \mathbb{R}^2" /> の標準基底に関する表現行列が
                        <BlockMath math="A = \begin{pmatrix} 2 & -3 \\ 1 & 4 \end{pmatrix}" />
                        で与えられている。このとき、双対写像 <InlineMath math="f^*" /> の標準双対基底に関する表現行列を求めよ。
                        また、<InlineMath math="f^*(e^1)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.3-1 より、双対写像の表現行列は元の行列 <InlineMath math="A" /> の転置行列 <InlineMath math="A^T" /> となる。したがって、
                            <BlockMath math="A^T = \begin{pmatrix} 2 & 1 \\ -3 & 4 \end{pmatrix}" />
                            である。
                        </p>
                        <p>
                            <InlineMath math="f^*(e^1)" /> は <InlineMath math="A^T" /> の第1列を用いて表現されるため、
                            <BlockMath math="f^*(e^1) = 2e^1 - 3e^2" />
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        有限次元ベクトル空間 <InlineMath math="V" /> における評価写像 <InlineMath math="\mathrm{ev}_v : V^* \to \mathbb{k}" />（Definition 1.2-1）について、
                        任意の <InlineMath math="\phi \in V^*" /> に対し <InlineMath math="\mathrm{ev}_v(\phi) = 0" /> ならば <InlineMath math="v = 0" /> であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            背理法により示す。定理 Theorem 1.2-1 の証明と同様にする。
                        </p>
                        <p>
                            <InlineMath math="v \neq 0" /> と仮定する。このとき、<InlineMath math="\{v\}" /> は線形独立であるから、これを拡張して <InlineMath math="V" /> の基底 <InlineMath math="\{e_1, \ldots, e_n\}" /> （ただし <InlineMath math="e_1 = v" />）を構成できる。
                        </p>
                        <p>
                            この基底に対する双対基底 <InlineMath math="\{e^1, \ldots, e^n\}" /> を考える（Definition 1.1-2）。すると、<InlineMath math="e^1 \in V^*" /> であり、
                            <BlockMath math="e^1(v) = e^1(e_1) = 1" />
                            となる。一方で、評価写像の仮定より
                            <BlockMath math="\mathrm{ev}_v(e^1) = e^1(v) = 0" />
                            でなければならず、矛盾が生じる。
                        </p>
                        <p>
                            したがって <InlineMath math="v = 0" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        ベクトル空間 <InlineMath math="U, V, W" /> と線形写像 <InlineMath math="g: U \to V" />、<InlineMath math="f: V \to W" /> があるとき、双対写像の合成について
                        <InlineMath math="(f \circ g)^* = g^* \circ f^*" />
                        が成り立つことを証明せよ（Proposition 1.3-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-1 より、任意の <InlineMath math="\psi \in W^*" /> と <InlineMath math="u \in U" /> に対して左辺と右辺の作用が一致することを示す。
                        </p>
                        <p>
                            左辺 <InlineMath math="(f \circ g)^*" /> は <InlineMath math="W^* \to U^*" /> の演算であり、<InlineMath math="u" /> への作用は、
                            <BlockMath math="((f \circ g)^*\psi)(u) = \psi((f \circ g)(u)) = \psi(f(g(u)))" />
                            となる。
                        </p>
                        <p>
                            一方、右辺については、まず <InlineMath math="\phi = f^*\psi \in V^*" /> とおくと <InlineMath math="\phi(v) = \psi(f(v))" /> である。
                            次に <InlineMath math="g^*" /> を <InlineMath math="\phi" /> に適用すると、
                            <BlockMath math="((g^* \circ f^*)\psi)(u) = (g^*(f^*\psi))(u) = (g^*\phi)(u) = \phi(g(u))" />
                            となる。ここで <InlineMath math="\phi(g(u)) = \psi(f(g(u)))" /> であるから、両者は一致する。
                        </p>
                        <p>
                            任意の <InlineMath math="\psi, u" /> について等しいため、<InlineMath math="(f \circ g)^* = g^* \circ f^*" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        有限次元ベクトル空間の間の線形写像 <InlineMath math="f: V \to W" /> に対して、双対写像 <InlineMath math="f^*: W^* \to V^*" /> を考える。
                        このとき、<InlineMath math="\mathrm{Im}(f) = W" />（全射）ならば <InlineMath math="\ker(f^*) = \{0\}" />（単射）であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f^*" /> が単射であることを示すために、<InlineMath math="\psi \in \ker(f^*)" /> をとる。すなわち <InlineMath math="f^*\psi = 0 \in V^*" /> である。
                        </p>
                        <p>
                            Definition 1.3-1 における双対写像の定義から、任意の <InlineMath math="v \in V" /> に対して
                            <BlockMath math="(f^*\psi)(v) = \psi(f(v)) = 0" />
                            が成り立つ。
                        </p>
                        <p>
                            ここで、<InlineMath math="f" /> は全射であるから、任意の <InlineMath math="w \in W" /> はある <InlineMath math="v \in V" /> を用いて <InlineMath math="w = f(v)" /> と表すことができる。
                            上の式に代入すると、任意の <InlineMath math="w \in W" /> について
                            <BlockMath math="\psi(w) = 0" />
                            となる。
                        </p>
                        <p>
                            これは <InlineMath math="\psi = 0" />（ゼロ写像）に他ならない。したがって <InlineMath math="\ker(f^*) = \{0\}" /> となり、<InlineMath math="f^*" /> は単射である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
