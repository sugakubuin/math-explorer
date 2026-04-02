import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        正方行列 <InlineMath math="A" /> の固有値 <InlineMath math="\lambda" /> と固有ベクトル <InlineMath math="\boldsymbol{v}" /> が満たすべき定義式（Definition 5.1-1）を記せ。
                        また、ベクトル <InlineMath math="\boldsymbol{v}" /> が満たさなければならない重要な条件は何か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            固有値と固有ベクトルの定義式は以下の通りである。
                        </p>
                        <BlockMath math="A\boldsymbol{v} = \lambda \boldsymbol{v}" />
                        <p>
                            また、固有ベクトル <InlineMath math="\boldsymbol{v}" /> は<strong>零ベクトルではない</strong>（<InlineMath math="\boldsymbol{v} \neq \boldsymbol{0}" />）という条件を満たさなければならない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> の特性方程式（固有方程式）の式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.2-1 より、特性方程式は次のように表される。（<InlineMath math="I" /> は単位行列）
                        </p>
                        <BlockMath math="\det(A - \lambda I) = 0 \quad (\text{または } \det(\lambda I - A) = 0)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        行列 <InlineMath math="A" /> の固有値 <InlineMath math="\lambda" /> に関して、「代数的重複度」と「幾何的重複度」はそれぞれ何を意味するか。簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>代数的重複度：</strong> 特性方程式 <InlineMath math="\det(A - tI) = 0" /> を解いたときの、その固有値 <InlineMath math="\lambda" /> の重解の個数（因数 <InlineMath math="(t - \lambda)" /> の指数）。<br />
                            <strong>幾何的重複度：</strong> その固有値 <InlineMath math="\lambda" /> に属する固有空間 <InlineMath math="W(\lambda)" /> の次元（その固有値に対する線形独立な固有ベクトルの最大数）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}" /> の特性多項式を求め、固有値を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            特性多項式は <InlineMath math="\det(A - \lambda I)" /> である。
                        </p>
                        <BlockMath math="\begin{aligned}
                            \det \begin{pmatrix} 2 - \lambda & 1 \\ 0 & 3 - \lambda \end{pmatrix} &= (2 - \lambda)(3 - \lambda) - 1(0) \\
                            &= (2 - \lambda)(3 - \lambda)
                            \end{aligned}
                        " />
                        <p>
                            これを <InlineMath math="0" /> とおくと、
                        </p>
                        <BlockMath math="(2 - \lambda)(3 - \lambda) = 0" />
                        <p>
                            よって、固有値は <InlineMath math="\lambda = 2, 3" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 1 & 4 \\ 2 & 3 \end{pmatrix}" /> のすべての固有値と、それぞれに対応する固有ベクトルを求めよ。
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. 特性方程式から固有値を求める</strong></p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A - \lambda I) &= \det \begin{pmatrix} 1 - \lambda & 4 \\ 2 & 3 - \lambda \end{pmatrix} \\
                            &= (1 - \lambda)(3 - \lambda) - 8 \\
                            &= \lambda^2 - 4\lambda + 3 - 8 \\
                            &= \lambda^2 - 4\lambda - 5 \\
                            &= (\lambda - 5)(\lambda + 1) = 0
                            \end{aligned}
                        " />
                        <p>よって固有値は <InlineMath math="\lambda = 5, -1" />。</p>

                        <p className="mt-4"><strong>2. 固有ベクトルを求める</strong></p>
                        <p>・<InlineMath math="\lambda = 5" /> のとき</p>
                        <BlockMath math="
                            (A - 5I)\boldsymbol{x} = \begin{pmatrix} -4 & 4 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
                        " />
                        <p>
                            <InlineMath math="-4x + 4y = 0 \implies x = y" />。よって固有ベクトルは <InlineMath math="\boldsymbol{v}_1 = c_1 \begin{pmatrix} 1 \\ 1 \end{pmatrix}" />（<InlineMath math="c_1 \neq 0" />）。
                        </p>

                        <p className="mt-4">・<InlineMath math="\lambda = -1" /> のとき</p>
                        <BlockMath math="
                            (A - (-1)I)\boldsymbol{x} = \begin{pmatrix} 2 & 4 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
                        " />
                        <p>
                            <InlineMath math="2x + 4y = 0 \implies x = -2y" />。よって固有ベクトルは <InlineMath math="\boldsymbol{v}_2 = c_2 \begin{pmatrix} -2 \\ 1 \end{pmatrix}" />（<InlineMath math="c_2 \neq 0" />）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 3 & -2 \\ 1 & 1 \end{pmatrix}" /> について、複素数の範囲で固有値と固有ベクトルを求めよ。
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. 固有値を求める</strong></p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A - \lambda I) &= \det \begin{pmatrix} 3 - \lambda & -2 \\ 1 & 1 - \lambda \end{pmatrix} \\
                            &= (3 - \lambda)(1 - \lambda) - (-2)(1) \\
                            &= \lambda^2 - 4\lambda + 3 + 2 \\
                            &= \lambda^2 - 4\lambda + 5 = 0
                            \end{aligned}
                        " />
                        <p>二次方程式の解の公式より、<InlineMath math="\lambda = \frac{4 \pm \sqrt{16 - 20}}{2} = \frac{4 \pm \sqrt{-4}}{2} = 2 \pm i" />。</p>

                        <p className="mt-4"><strong>2. 固有ベクトルを求める</strong></p>
                        <p>・<InlineMath math="\lambda = 2 + i" /> のとき</p>
                        <BlockMath math="
                            (A - (2+i)I)\boldsymbol{x} = \begin{pmatrix} 1 - i & -2 \\ 1 & -1 - i \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
                        " />
                        <p>
                            第2行の式より <InlineMath math="x - (1+i)y = 0 \implies x = (1+i)y" />。よって <InlineMath math="\boldsymbol{v}_1 = c_1 \begin{pmatrix} 1+i \\ 1 \end{pmatrix}" />。
                        </p>

                        <p className="mt-4">・<InlineMath math="\lambda = 2 - i" /> のとき</p>
                        <BlockMath math="
                            (A - (2-i)I)\boldsymbol{x} = \begin{pmatrix} 1 + i & -2 \\ 1 & -1 + i \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
                        " />
                        <p>
                            第2行の式より <InlineMath math="x + (-1+i)y = 0 \implies x = (1-i)y" />。よって <InlineMath math="\boldsymbol{v}_2 = c_2 \begin{pmatrix} 1-i \\ 1 \end{pmatrix}" />。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        <InlineMath math="3 \times 3" /> 行列 <InlineMath math="A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 5 \end{pmatrix}" /> の固有値と、各固有値の「代数的重複度」および「幾何的重複度」を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. 特性多項式と代数的重複度</strong></p>
                        <p>行列 <InlineMath math="A" /> は上三角行列であるため、特性多項式は対角成分の積で得られる。</p>
                        <BlockMath math="\begin{aligned}
                            \det(A - \lambda I) &= (2 - \lambda)(2 - \lambda)(5 - \lambda) \\
                            &= (2 - \lambda)^2 (5 - \lambda) \\
                            &= 0
                            \end{aligned}
                        " />
                        <p>
                            固有値は <InlineMath math="\lambda = 2" />（重解）と <InlineMath math="\lambda = 5" /> である。<br />
                            したがって、<strong>代数的重複度は <InlineMath math="\lambda = 2" /> が 2、<InlineMath math="\lambda = 5" /> が 1</strong> である。
                        </p>

                        <p className="mt-4"><strong>2. 幾何的重複度（固有空間の次元）</strong></p>
                        <p>・<InlineMath math="\lambda = 5" /> のとき：代数的重複度が 1 なので、Proposition 5.4-1 より幾何的重複度も自動的に <strong>1</strong> となる。</p>
                        <p>・<InlineMath math="\lambda = 2" /> のとき：<InlineMath math="(A - 2I)\boldsymbol{x} = \boldsymbol{0}" /> を解く。</p>
                        <BlockMath math="
                            \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
                        " />
                        <p>
                            これより <InlineMath math="y = 0" /> かつ <InlineMath math="3z = 0 \implies z = 0" />。<InlineMath math="x" /> だけが任意の定数 <InlineMath math="t" /> となれる。<br />
                            固有ベクトルは <InlineMath math="\begin{pmatrix} t \\ 0 \\ 0 \end{pmatrix} = t \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}" />。<br />
                            基底のベクトルは1つであるため、<InlineMath math="\lambda = 2" /> の<strong>幾何的重複度は 1</strong> である。<br />
                            （この行列は代数的重複度 <InlineMath math="\neq" /> 幾何的重複度 となる例である）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        <InlineMath math="A" /> を正則な <InlineMath math="n \times n" /> 行列とし、<InlineMath math="\lambda" /> を <InlineMath math="A" /> の固有値、<InlineMath math="\boldsymbol{v}" /> を対応する固有ベクトルとする。<br />
                        このとき、<InlineMath math="\lambda \neq 0" /> であり、<InlineMath math="\frac{1}{\lambda}" /> が逆行列 <InlineMath math="A^{-1}" /> の固有値になることを証明せよ。また、そのときの固有ベクトルは何か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            固有値と固有ベクトルの定義より、<InlineMath math="A\boldsymbol{v} = \lambda \boldsymbol{v}" /> （<InlineMath math="\boldsymbol{v} \neq \boldsymbol{0}" />）が成り立つ。
                        </p>
                        <p>
                            まず <InlineMath math="\lambda \neq 0" /> を背理法で示す。もし <InlineMath math="\lambda = 0" /> ならば <InlineMath math="A\boldsymbol{v} = \boldsymbol{0}" /> となる。
                            行列 <InlineMath math="A" /> は正則であるため、<InlineMath math="A\boldsymbol{v} = \boldsymbol{0}" /> を満たすベクトルは自明な解 <InlineMath math="\boldsymbol{v} = \boldsymbol{0}" /> のみである。
                            これは <InlineMath math="\boldsymbol{v}" /> が固有ベクトルである（<InlineMath math="\neq \boldsymbol{0}" />）ことに矛盾する。よって <InlineMath math="\lambda \neq 0" /> である。
                        </p>
                        <p>
                            次に、式 <InlineMath math="A\boldsymbol{v} = \lambda \boldsymbol{v}" /> の両辺の左から <InlineMath math="A^{-1}" /> を掛ける。
                        </p>
                        <BlockMath math="A^{-1}(A\boldsymbol{v}) = A^{-1}(\lambda \boldsymbol{v})" />
                        <BlockMath math="\boldsymbol{v} = \lambda (A^{-1}\boldsymbol{v})" />
                        <p>
                            <InlineMath math="\lambda \neq 0" /> であるから、両辺を <InlineMath math="\lambda" /> で割ることができる。
                        </p>
                        <BlockMath math="A^{-1}\boldsymbol{v} = \frac{1}{\lambda} \boldsymbol{v}" />
                        <p>
                            この式は、<InlineMath math="A^{-1}" /> にベクトル <InlineMath math="\boldsymbol{v}" /> を掛けると <InlineMath math="\frac{1}{\lambda}" /> 倍になって返ってくることを示している。
                            したがって、<InlineMath math="\frac{1}{\lambda}" /> は <InlineMath math="A^{-1}" /> の固有値であり、その固有ベクトルは元の行列と同じ <strong><InlineMath math="\boldsymbol{v}" /></strong> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        <InlineMath math="3 \times 3" /> 行列 <InlineMath math="A" /> の特性多項式を <InlineMath math="\Phi_A(t) = t^3 - c_1 t^2 + c_2 t - c_3" /> とする。
                        Proposition 5.2-1 によれば、<InlineMath math="c_1" /> と <InlineMath math="c_3" /> はそれぞれ行列のトレース（対角成分の和）と行列式に等しい（<InlineMath math="c_1 = \mathrm{tr}\, A, \, c_3 = \det(A)" />）。
                    </p>
                    <p>
                        代数学の基本定理と根と係数の関係を用いて、「行列のすべての固有値の和はその行列のトレースに等しく、すべての固有値の積はその行列の行列式に等しい」ことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            代数学の基本定理より、特性方程式 <InlineMath math="\Phi_A(t) = 0" /> は複素数の範囲に3つの根（固有値）<InlineMath math="\lambda_1, \lambda_2, \lambda_3" /> を持つ。
                            したがって特性多項式は次のように因数分解できる。
                        </p>
                        <BlockMath math="\Phi_A(t) = (t - \lambda_1)(t - \lambda_2)(t - \lambda_3)" />
                        <p>
                            この式を展開する。
                        </p>
                        <BlockMath math="\begin{aligned}
                            (t - \lambda_1)(t - \lambda_2)(t - \lambda_3) = t^3 &- (\lambda_1 + \lambda_2 + \lambda_3)t^2 \\ &+ (\lambda_1\lambda_2 + \lambda_2\lambda_3 + \lambda_3\lambda_1)t \\ &- (\lambda_1\lambda_2\lambda_3)
                            \end{aligned}
                        " />
                        <p>
                            これを元の特性多項式の式 <InlineMath math="\Phi_A(t) = t^3 - c_1 t^2 + c_2 t - c_3" /> と係数比較する。
                        </p>
                        <p>
                            <InlineMath math="t^2" /> の係数を比較すると、
                        </p>
                        <BlockMath math="c_1 = \lambda_1 + \lambda_2 + \lambda_3" />
                        <p>
                            Proposition 5.2-1 より <InlineMath math="c_1 = \mathrm{tr}\, A" /> であるため、<strong><InlineMath math="\mathrm{tr}\, A = \lambda_1 + \lambda_2 + \lambda_3" />（固有値の和）</strong>が成り立つ。
                        </p>
                        <p>
                            定数項を比較すると、
                        </p>
                        <BlockMath math="c_3 = \lambda_1\lambda_2\lambda_3" />
                        <p>
                            Proposition 5.2-1 より <InlineMath math="c_3 = \det(A)" /> であるため、<strong><InlineMath math="\det(A) = \lambda_1\lambda_2\lambda_3" />（固有値の積）</strong>が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
