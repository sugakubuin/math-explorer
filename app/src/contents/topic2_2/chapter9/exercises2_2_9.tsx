import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter9() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="9" number={1}>
                    <p>
                        多変数関数の逆写像定理（Theorem 9.2-1）において、ある点 <InlineMath math="\mathbf{a}" /> の近傍で写像 <InlineMath math="\mathbf{f}" /> が局所的に全単射（微分同相）となるための十分条件を、ヤコビ行列 <InlineMath math="J_{\mathbf{f}}(\mathbf{a})" /> を用いて記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ヤコビ行列の行列式（ヤコビアン）が <InlineMath math="0" /> でないこと。すなわち、
                        </p>
                        <BlockMath math="\det J_{\mathbf{f}}(\mathbf{a}) \neq 0" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={2}>
                    <p>
                        逆写像定理が成り立つとき、元の写像 <InlineMath math="\mathbf{f}" /> の点 <InlineMath math="\mathbf{x}" /> におけるヤコビ行列 <InlineMath math="J_{\mathbf{f}}(\mathbf{x})" /> と、その逆写像 <InlineMath math="\mathbf{g} = \mathbf{f}^{-1}" /> の対応する点 <InlineMath math="\mathbf{y} = \mathbf{f}(\mathbf{x})" /> におけるヤコビ行列 <InlineMath math="J_{\mathbf{g}}(\mathbf{y})" /> との間には、どのような関係があるか記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            互いに逆行列の関係にある。すなわち、
                        </p>
                        <BlockMath math="J_{\mathbf{g}}(\mathbf{y}) = \big[ J_{\mathbf{f}}(\mathbf{x}) \big]^{-1}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={3}>
                    <p>
                        座標変換 <InlineMath math="\mathbf{x} = \mathbf{f}(\mathbf{u})" /> （<InlineMath math="\mathbf{u} \in U, \mathbf{x} \in V" />）において、微小な <InlineMath math="n" /> 次元体積要素 <InlineMath math="d\mathbf{x} = dx_1 \cdots dx_n" /> と <InlineMath math="d\mathbf{u} = du_1 \cdots du_n" /> の間の変換則を、ヤコビアンを用いて記せ（Proposition 9.4-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="d\mathbf{x} = |\det J_{\mathbf{f}}(\mathbf{u})| \, d\mathbf{u}" />
                        <p className="text-sm text-slate-500 mt-2">（※ 行列式の絶対値がつくことに注意。）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="9" number={4}>
                    <p>
                        写像 <InlineMath math="\mathbf{f}(u, v) = \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} u^2 - v^2 \\ 2uv \end{pmatrix}" /> について、点 <InlineMath math="(u, v) = (1, 1)" /> の近傍で局所的な逆写像が存在するかどうか、逆写像定理を用いて判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            成分関数は <InlineMath math="x = u^2 - v^2" />、<InlineMath math="y = 2uv" /> である。<br />
                            ヤコビ行列 <InlineMath math="J_{\mathbf{f}}(u, v)" /> を計算する。
                        </p>
                        <BlockMath math="J_{\mathbf{f}}(u, v) = \begin{pmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{pmatrix} = \begin{pmatrix} 2u & -2v \\ 2v & 2u \end{pmatrix}" />
                        <p>
                            その行列式（ヤコビアン）は、
                        </p>
                        <BlockMath math="\begin{aligned}
                            \det J_{\mathbf{f}}(u, v) &= (2u)(2u) - (-2v)(2v) \\
                            &= 4u^2 + 4v^2 = 4(u^2 + v^2)
                        \end{aligned}
                        " />
                        <p>
                            点 <InlineMath math="(1, 1)" /> におけるヤコビアンの値を計算する。
                        </p>
                        <BlockMath math="\det J_{\mathbf{f}}(1, 1) = 4(1^2 + 1^2) = 8" />
                        <p>
                            <InlineMath math="8 \neq 0" /> であるため、逆写像定理により、点 <InlineMath math="(1, 1)" /> の近傍において<strong>局所的な逆写像は存在する</strong>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={5}>
                    <p>
                        問題4の写像 <InlineMath math="\mathbf{f}" /> について、逆写像 <InlineMath math="\mathbf{g}(x, y) = \begin{pmatrix} u(x,y) \\ v(x,y) \end{pmatrix}" /> が存在する点 <InlineMath math="(x,y) = \mathbf{f}(1,1)" /> において、逆写像のヤコビ行列 <InlineMath math="J_{\mathbf{g}}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、点 <InlineMath math="(u,v)=(1,1)" /> の写像先 <InlineMath math="(x,y)" /> を求める。
                        </p>
                        <BlockMath math="x = 1^2 - 1^2 = 0, \quad y = 2(1)(1) = 2" />
                        <p>
                            よって <InlineMath math="(x, y) = (0, 2)" /> である。
                        </p>
                        <p>
                            点 <InlineMath math="(1, 1)" /> における <InlineMath math="\mathbf{f}" /> のヤコビ行列は、
                        </p>
                        <BlockMath math="J_{\mathbf{f}}(1, 1) = \begin{pmatrix} 2(1) & -2(1) \\ 2(1) & 2(1) \end{pmatrix} = \begin{pmatrix} 2 & -2 \\ 2 & 2 \end{pmatrix}" />
                        <p>
                            逆写像定理より、逆写像 <InlineMath math="\mathbf{g}" /> の点 <InlineMath math="(0, 2)" /> におけるヤコビ行列は、<InlineMath math="J_{\mathbf{f}}(1, 1)" /> の逆行列に等しい。
                        </p>
                        <BlockMath math="J_{\mathbf{g}}(0, 2) = \begin{pmatrix} 2 & -2 \\ 2 & 2 \end{pmatrix}^{-1}" />
                        <p>
                            逆行列を計算する（行列式は問題4で求めた通り <InlineMath math="8" /> である）。
                        </p>
                        <BlockMath math="J_{\mathbf{g}}(0, 2) = \frac{1}{8} \begin{pmatrix} 2 & 2 \\ -2 & 2 \end{pmatrix} = \begin{pmatrix} \frac{1}{4} & \frac{1}{4} \\ -\frac{1}{4} & \frac{1}{4} \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={6}>
                    <p>
                        2次元の変数変換（極座標の変形）<InlineMath math="x = a r \cos \theta, y = b r \sin \theta" /> （ただし <InlineMath math="a > 0, b > 0" /> は定数）を考える。<br />
                        この変換のヤコビアン <InlineMath math="\frac{\partial(x, y)}{\partial(r, \theta)}" /> を計算し、微小面積要素 <InlineMath math="dx dy" /> が <InlineMath math="dr d\theta" /> を用いてどのように表されるか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ヤコビ行列を計算する。
                        </p>
                        <BlockMath math="J(r, \theta) = \begin{pmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{pmatrix} = \begin{pmatrix} a \cos \theta & -a r \sin \theta \\ b \sin \theta & b r \cos \theta \end{pmatrix}" />
                        <p>
                            ヤコビアンはその行列式である。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \det J &= (a \cos \theta)(b r \cos \theta) - (-a r \sin \theta)(b \sin \theta) \\
                            &= abr \cos^2 \theta + abr \sin^2 \theta \\
                            &= abr(\cos^2 \theta + \sin^2 \theta) \\
                            &= abr
                            \end{aligned}
                        " />
                        <p>
                            面積素の変換公式 <InlineMath math="dx dy = |\det J| dr d\theta" /> より（<InlineMath math="a, b > 0, r \geq 0" /> なので絶対値はそのまま外れる）、
                        </p>
                        <BlockMath math="dx dy = abr \, dr d\theta" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={7}>
                    <p>
                        写像 <InlineMath math="\mathbf{f}: \mathbb{R}^2 \to \mathbb{R}^2" /> を <InlineMath math="\mathbf{f}(x, y) = (e^x \cos y, e^x \sin y)" /> と定義する。<br />
                        この写像のヤコビアンを計算し、平面 <InlineMath math="\mathbb{R}^2" /> 上のすべての点において局所的に逆写像が存在することを示せ。<br />
                        また、大域的（<InlineMath math="\mathbb{R}^2" /> 全体）には単射ではない（逆写像を持たない）理由を簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            成分を <InlineMath math="u = e^x \cos y" />、<InlineMath math="v = e^x \sin y" /> とおく。<br />
                            ヤコビ行列を計算する。
                        </p>
                        <BlockMath math="J_{\mathbf{f}}(x, y) = \begin{pmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{pmatrix} = \begin{pmatrix} e^x \cos y & -e^x \sin y \\ e^x \sin y & e^x \cos y \end{pmatrix}" />
                        <p>
                            ヤコビアンは、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \det J_{\mathbf{f}}(x, y) &= (e^x \cos y)(e^x \cos y) - (-e^x \sin y)(e^x \sin y) \\
                            &= e^{2x} \cos^2 y + e^{2x} \sin^2 y \\
                            &= e^{2x}(\cos^2 y + \sin^2 y) \\
                            &= e^{2x}
                            \end{aligned}
                        " />
                        <p>
                            すべての実数 <InlineMath math="x" /> について <InlineMath math="e^{2x} > 0" /> であり、ヤコビアンは決して <InlineMath math="0" /> にならない。したがって、逆写像定理により、平面上の<strong>すべての点において局所的な逆写像が存在する</strong>。
                        </p>
                        <p className="mt-4">
                            <strong>大域的に単射でない理由：</strong><br />
                            三角関数 <InlineMath math="\cos y, \sin y" /> は周期 <InlineMath math="2\pi" /> を持つため、任意の整数 <InlineMath math="k" /> に対して <InlineMath math="\mathbf{f}(x, y) = \mathbf{f}(x, y + 2k\pi)" /> が成り立つ。<br />
                            異なる点（例えば <InlineMath math="(0, 0)" /> と <InlineMath math="(0, 2\pi)" />）が同じ点 <InlineMath math="(1, 0)" /> に写されるため、単射（1対1）ではなく、大域的な逆写像は存在しない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="9" number={8}>
                    <p>
                        3次元空間における円柱座標変換 <InlineMath math="x = r \cos \theta, y = r \sin \theta, z = z" /> について、この変換のヤコビ行列 <InlineMath math="J(r, \theta, z)" /> を書き下し、そのヤコビアンを計算せよ。<br />
                        また、その結果を用いて微小体積要素 <InlineMath math="dx dy dz" /> の表式を導け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ヤコビ行列 <InlineMath math="J(r, \theta, z)" /> は <InlineMath math="3 \times 3" /> 行列となる。
                        </p>
                        <BlockMath math="J(r, \theta, z) = \begin{pmatrix} 
                        \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} & \frac{\partial x}{\partial z} \\
                        \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} & \frac{\partial y}{\partial z} \\
                        \frac{\partial z}{\partial r} & \frac{\partial z}{\partial \theta} & \frac{\partial z}{\partial z}
                        \end{pmatrix} = \begin{pmatrix}
                        \cos \theta & -r \sin \theta & 0 \\
                        \sin \theta & r \cos \theta & 0 \\
                        0 & 0 & 1
                        \end{pmatrix}" />
                        <p>
                            この行列の行列式（ヤコビアン）を計算する。第3行または第3列で余因子展開すると簡単である。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \det J(r, \theta, z) &= 1 \cdot \begin{vmatrix} \cos \theta & -r \sin \theta \\ \sin \theta & r \cos \theta \end{vmatrix} \\
                            &= (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta) \\
                            &= r \cos^2 \theta + r \sin^2 \theta = r
                            \end{aligned}
                        " />
                        <p>
                            したがって、ヤコビアンは <InlineMath math="r" /> である。
                        </p>
                        <p>
                            体積素の変換公式より、
                        </p>
                        <BlockMath math="dx dy dz = |\det J| \, dr d\theta dz = r \, dr d\theta dz" />
                        <p>
                            となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={9}>
                    <p>
                        写像 <InlineMath math="\mathbf{f}(x, y) = (x^3 - 3xy^2, 3x^2y - y^3)" /> を考える。
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>ヤコビアン <InlineMath math="\det J_{\mathbf{f}}(x, y)" /> を求めよ。</li>
                        <li>局所的な逆写像が存在しない（ヤコビアンが <InlineMath math="0" /> になる）点の集合を求めよ。</li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            成分を <InlineMath math="u = x^3 - 3xy^2" />、<InlineMath math="v = 3x^2y - y^3" /> とおく。
                        </p>
                        <p>
                            <strong>1. ヤコビアンの計算：</strong><br />
                            偏導関数を計算してヤコビ行列を作る。
                        </p>
                        <BlockMath math="\frac{\partial u}{\partial x} = 3x^2 - 3y^2, \quad \frac{\partial u}{\partial y} = -6xy" />
                        <BlockMath math="\frac{\partial v}{\partial x} = 6xy, \quad \frac{\partial v}{\partial y} = 3x^2 - 3y^2" />
                        <BlockMath math="J_{\mathbf{f}}(x, y) = \begin{pmatrix} 3x^2 - 3y^2 & -6xy \\ 6xy & 3x^2 - 3y^2 \end{pmatrix}" />
                        <p>
                            行列式を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \det J_{\mathbf{f}}(x, y) &= (3x^2 - 3y^2)^2 - (-6xy)(6xy) \\
                            &= 9(x^2 - y^2)^2 + 36x^2y^2 \\
                            &= 9(x^4 - 2x^2y^2 + y^4) + 36x^2y^2 \\
                            &= 9x^4 - 18x^2y^2 + 9y^4 + 36x^2y^2 \\
                            &= 9x^4 + 18x^2y^2 + 9y^4 \\
                            &= 9(x^2 + y^2)^2
                            \end{aligned}
                        " />
                        <p className="mt-4">
                            <strong>2. 逆写像が存在しない点の集合：</strong><br />
                            局所的な逆写像の存在が保証されないのは <InlineMath math="\det J_{\mathbf{f}}(x, y) = 0" /> となる点である。
                        </p>
                        <BlockMath math="\begin{aligned}
                            9(x^2 + y^2)^2 = 0 &\iff x^2 + y^2 = 0 \\
                            &\iff x = 0 \text{ かつ } y = 0
                        \end{aligned}
                        " />
                        <p>
                            したがって、ヤコビアンが <InlineMath math="0" /> になるのは<strong>原点 <InlineMath math="(0, 0)" /> のみ</strong>である。
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            （※ 複素関数論の知識があれば、この写像が複素関数 <InlineMath math="f(z) = z^3" /> （<InlineMath math="z = x + iy" />）の実部と虚部を表しており、導関数 <InlineMath math="f'(z) = 3z^2" /> が <InlineMath math="0" /> になるのが <InlineMath math="z = 0" /> のみであることと整合していることがわかる。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={10}>
                    <p>
                        「逆写像定理」と「陰関数定理」は数学的に同値である（Proposition 9.3-1）。<br />
                        関数 <InlineMath math="\mathbf{y} = \mathbf{f}(\mathbf{x})" /> の逆写像の存在を示すために陰関数定理を用いる際、どのような「新しい関数 <InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{y}) = \mathbf{0}" />」を構成して証明を進めるか、その定義式と、着目すべきヤコビ行列を簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>構成する新しい関数：</strong><br />
                            <InlineMath math="\mathbf{x}, \mathbf{y}" /> を独立な変数とみなして、次のように関数 <InlineMath math="\mathbf{F}" /> を構成する。
                        </p>
                        <BlockMath math="\mathbf{F}(\mathbf{y}, \mathbf{x}) = \mathbf{f}(\mathbf{x}) - \mathbf{y} = \mathbf{0}" />
                        <p>
                            <strong>着目すべきヤコビ行列：</strong><br />
                            この方程式から「<InlineMath math="\mathbf{x}" /> を <InlineMath math="\mathbf{y}" /> の関数として解く」ことを目標とするため、<strong>解きたい変数である <InlineMath math="\mathbf{x}" /> に関するヤコビ行列</strong> <InlineMath math="J_{\mathbf{x}}\mathbf{F}" /> に着目する。
                        </p>
                        <p>
                            実際、
                        </p>
                        <BlockMath math="J_{\mathbf{x}}\mathbf{F}(\mathbf{y}, \mathbf{x}) = J_{\mathbf{f}}(\mathbf{x})" />
                        <p>
                            となるため、元の関数 <InlineMath math="\mathbf{f}" /> のヤコビ行列式が非零（<InlineMath math="\det J_{\mathbf{f}}(\mathbf{x}) \neq 0" />）であれば、陰関数定理の条件 <InlineMath math="\det J_{\mathbf{x}}\mathbf{F} \neq 0" /> が満たされ、局所的に一意な関数 <InlineMath math="\mathbf{x} = \mathbf{g}(\mathbf{y})" /> （すなわち逆写像）が存在することが導かれる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
