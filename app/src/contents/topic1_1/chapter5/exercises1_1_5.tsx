import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_1_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>次の行列のうち、正則行列（逆行列を持つもの）をすべて選べ。</p>
                    <BlockMath math="A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}, \quad C = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>
                            Theorem 5.1-2 （正則条件）より、行列が正則であることとその行列式が <InlineMath math="0" /> でないことは同値である。
                            それぞれの行列式を計算する。
                        </p>
                        <BlockMath math="|A| = 1 \cdot 4 - 2 \cdot 2 = 4 - 4 = 0" />
                        <BlockMath math="|B| = 3 \cdot 2 - 1 \cdot 5 = 6 - 5 = 1 \neq 0" />
                        <BlockMath math="|C| = 2 \cdot 3 - 0 \cdot 0 = 6 \neq 0" />
                        <p>
                            したがって、行列式が <InlineMath math="0" /> でない <InlineMath math="B" /> と <InlineMath math="C" /> が正則行列である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        次の行列 <InlineMath math="A" /> の逆行列を、2次正方行列の逆行列の公式（Proposition 5.2-1）を用いて求めよ。
                    </p>
                    <BlockMath math="A = \begin{pmatrix} 4 & 7 \\ 1 & 2 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>
                            Proposition 5.2-1 より、<InlineMath math="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" /> の逆行列は
                            <InlineMath math="A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}" /> である。
                        </p>
                        <p>
                            まず行列式を計算する。
                        </p>
                        <BlockMath math="|A| = 4 \cdot 2 - 7 \cdot 1 = 8 - 7 = 1" />
                        <p>
                            よって逆行列が存在し、公式より
                        </p>
                        <BlockMath math="A^{-1} = \frac{1}{1} \begin{pmatrix} 2 & -7 \\ -1 & 4 \end{pmatrix} = \begin{pmatrix} 2 & -7 \\ -1 & 4 \end{pmatrix}" />
                        <p>となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        Proposition 5.3-1 （掃き出し法の手順）に関する以下の文の空欄に適する行列を答えよ。
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md my-4">
                        <p>
                            <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> の逆行列を求めるため、右側に単位行列 <InlineMath math="I" /> を並べた拡大行列 <InlineMath math="[A | I]" /> を作る。<br />
                            この拡大行列に行基本変形を行い、左側の <InlineMath math="A" /> を単位行列 <InlineMath math="I" /> に変形できたとする。
                        </p>
                        <BlockMath math="[A | I] \xrightarrow{\text{row operations}} [I | B]" />
                        <p>
                            このとき、右側に現れた行列 <InlineMath math="B" /> はもとの行列 <InlineMath math="A" /> の（　　）である。
                        </p>
                    </div>
                    <ExerciseSolution>
                        <p>
                            Proposition 5.3-1 にある通り、行基本変形によって左側を単位行列 <InlineMath math="I" /> にしたとき、右側に現れる行列 <InlineMath math="B" /> は <InlineMath math="A" /> の逆行列 <InlineMath math="A^{-1}" /> である。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> 逆行列 <InlineMath math="A^{-1}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        次の行列 <InlineMath math="A" /> が正則でない（特異行列である）ような実数 <InlineMath math="x" /> の値を求めよ。
                    </p>
                    <BlockMath math="A = \begin{pmatrix} x & 2 \\ 3 & x - 1 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>
                            Theorem 5.1-2 より、行列 <InlineMath math="A" /> が正則でない条件は <InlineMath math="\det(A) = 0" /> である。
                            行列式を計算すると、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A) &= x(x - 1) - 2 \cdot 3 \\
                            &= x^2 - x - 6 \\
                            &= (x - 3)(x + 2)
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="\det(A) = 0" /> となる <InlineMath math="x" /> を求めると、
                        </p>
                        <BlockMath math="(x - 3)(x + 2) = 0 \implies x = 3, -2" />
                        <p>
                            よって、求める <InlineMath math="x" /> の値は <InlineMath math="x = 3, -2" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        次の行列 <InlineMath math="A" /> について、以下の問いに答えよ。
                    </p>
                    <BlockMath math="A = \begin{pmatrix} 1 & 0 & -1 \\ 2 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}" />
                    <p className="mt-2">(1) 行列式 <InlineMath math="|A|" /> を求めよ。</p>
                    <p className="mt-2">(2) <InlineMath math="A" /> の余因子行列 <InlineMath math="\tilde{A}" /> を求めよ。</p>
                    <p className="mt-2">(3) Theorem 5.2-1 を用いて、逆行列 <InlineMath math="A^{-1}" /> を求めよ。</p>
                    <ExerciseSolution>
                        <p><strong>(1)</strong></p>
                        <p>
                            サラスの方法、あるいは第1行での余因子展開を用いて行列式を計算する。
                        </p>
                        <BlockMath math="\begin{aligned} |A| &= 1(1 \cdot 1 - 0 \cdot 1) - 0 + (-1)(2 \cdot 1 - 1 \cdot 0) \\ &= 1 - 2 = -1 \end{aligned}" />
                        
                        <p className="mt-4"><strong>(2)</strong></p>
                        <p>
                            Definition 5.2-1 に従い、各成分の余因子 <InlineMath math="C_{ij}" /> を求める。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            C_{11} &= +(1 \cdot 1 - 0 \cdot 1) = 1 \\
                            C_{12} &= -(2 \cdot 1 - 0 \cdot 0) = -2 \\
                            C_{13} &= +(2 \cdot 1 - 1 \cdot 0) = 2 \\
                            C_{21} &= -(0 \cdot 1 - (-1) \cdot 1) = -1 \\
                            C_{22} &= +(1 \cdot 1 - (-1) \cdot 0) = 1 \\
                            C_{23} &= -(1 \cdot 1 - 0 \cdot 0) = -1 \\
                            C_{31} &= +(0 \cdot 0 - (-1) \cdot 1) = 1 \\
                            C_{32} &= -(1 \cdot 0 - (-1) \cdot 2) = -2 \\
                            C_{33} &= +(1 \cdot 1 - 0 \cdot 2) = 1
                            \end{aligned}
                        " />
                        <p>
                            これらを転置して並べたものが余因子行列 <InlineMath math="\tilde{A}" /> である。
                        </p>
                        <BlockMath math="\tilde{A} = \begin{pmatrix} C_{11} & C_{21} & C_{31} \\ C_{12} & C_{22} & C_{32} \\ C_{13} & C_{23} & C_{33} \end{pmatrix} = \begin{pmatrix} 1 & -1 & 1 \\ -2 & 1 & -2 \\ 2 & -1 & 1 \end{pmatrix}" />

                        <p className="mt-4"><strong>(3)</strong></p>
                        <p>
                            Theorem 5.2-1 より、<InlineMath math="A^{-1} = \frac{1}{|A|} \tilde{A}" /> であるから、
                        </p>
                        <BlockMath math="A^{-1} = \frac{1}{-1} \begin{pmatrix} 1 & -1 & 1 \\ -2 & 1 & -2 \\ 2 & -1 & 1 \end{pmatrix} = \begin{pmatrix} -1 & 1 & -1 \\ 2 & -1 & 2 \\ -2 & 1 & -1 \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        次の行列の逆行列を、掃き出し法（Proposition 5.3-1）を用いて求めよ。
                    </p>
                    <BlockMath math="A = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 1 & 0 & 1 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>
                            拡大行列 <InlineMath math="[A | I]" /> を作り、行基本変形を行う。
                        </p>
                        <BlockMath math="
                            \left[ \begin{array}{ccc|ccc}
                            1 & 1 & 1 & 1 & 0 & 0 \\
                            0 & 2 & 1 & 0 & 1 & 0 \\
                            1 & 0 & 1 & 0 & 0 & 1
                            \end{array} \right]
                        " />
                        <p>
                            第3行 <InlineMath math="- 1 \times" /> 第1行：
                        </p>
                        <BlockMath math="
                            \xrightarrow{}
                            \left[ \begin{array}{ccc|ccc}
                            1 & 1 & 1 & 1 & 0 & 0 \\
                            0 & 2 & 1 & 0 & 1 & 0 \\
                            0 & -1 & 0 & -1 & 0 & 1
                            \end{array} \right]
                        " />
                        <p>
                            第2行と第3行を入れ替える（計算を簡単にするため）：
                        </p>
                        <BlockMath math="
                            \xrightarrow{}
                            \left[ \begin{array}{ccc|ccc}
                            1 & 1 & 1 & 1 & 0 & 0 \\
                            0 & -1 & 0 & -1 & 0 & 1 \\
                            0 & 2 & 1 & 0 & 1 & 0
                            \end{array} \right]
                        " />
                        <p>
                            第3行 <InlineMath math="+ 2 \times" /> 第2行：
                        </p>
                        <BlockMath math="
                            \xrightarrow{}
                            \left[ \begin{array}{ccc|ccc}
                            1 & 1 & 1 & 1 & 0 & 0 \\
                            0 & -1 & 0 & -1 & 0 & 1 \\
                            0 & 0 & 1 & -2 & 1 & 2
                            \end{array} \right]
                        " />
                        <p>
                            第2行を <InlineMath math="-1" /> 倍する：
                        </p>
                        <BlockMath math="
                            \xrightarrow{}
                            \left[ \begin{array}{ccc|ccc}
                            1 & 1 & 1 & 1 & 0 & 0 \\
                            0 & 1 & 0 & 1 & 0 & -1 \\
                            0 & 0 & 1 & -2 & 1 & 2
                            \end{array} \right]
                        " />
                        <p>
                            第1行 <InlineMath math="- 1 \times" /> 第2行：
                        </p>
                        <BlockMath math="
                            \xrightarrow{}
                            \left[ \begin{array}{ccc|ccc}
                            1 & 0 & 1 & 0 & 0 & 1 \\
                            0 & 1 & 0 & 1 & 0 & -1 \\
                            0 & 0 & 1 & -2 & 1 & 2
                            \end{array} \right]
                        " />
                        <p>
                            第1行 <InlineMath math="- 1 \times" /> 第3行：
                        </p>
                        <BlockMath math="
                            \xrightarrow{}
                            \left[ \begin{array}{ccc|ccc}
                            1 & 0 & 0 & 2 & -1 & -1 \\
                            0 & 1 & 0 & 1 & 0 & -1 \\
                            0 & 0 & 1 & -2 & 1 & 2
                            \end{array} \right]
                        " />
                        <p>
                            左側が単位行列になったので、右側が逆行列である。
                        </p>
                        <BlockMath math="A^{-1} = \begin{pmatrix} 2 & -1 & -1 \\ 1 & 0 & -1 \\ -2 & 1 & 2 \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        次の行列方程式を満たす行列 <InlineMath math="X" /> を求めよ。
                    </p>
                    <BlockMath math="
                        \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} X = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix}
                    " />
                    <ExerciseSolution>
                        <p>
                            与えられた方程式を <InlineMath math="AX = B" /> とおく。
                            <InlineMath math="A = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}" /> の逆行列が存在すれば、両辺の左から <InlineMath math="A^{-1}" /> を掛けることで <InlineMath math="X = A^{-1}B" /> として求められる。
                        </p>
                        <p>
                            まず <InlineMath math="A" /> の行列式を計算すると、<InlineMath math="|A| = 2 \cdot 2 - 3 \cdot 1 = 1 \neq 0" /> となり正則である。
                            公式により逆行列を求める。
                        </p>
                        <BlockMath math="A^{-1} = \frac{1}{1} \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix}" />
                        <p>
                            したがって、<InlineMath math="X" /> は次のように計算できる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            X &= \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix} \\
                            &= \begin{pmatrix} 2 \cdot 1 + (-3) \cdot 0 & 2 \cdot (-1) + (-3) \cdot 2 \\ (-1) \cdot 1 + 2 \cdot 0 & (-1) \cdot (-1) + 2 \cdot 2 \end{pmatrix} \\
                            &= \begin{pmatrix} 2 & -8 \\ -1 & 5 \end{pmatrix}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        <InlineMath math="n" /> 次正方行列 <InlineMath math="A, B" /> がともに正則であるとき、その積 <InlineMath math="AB" /> も正則であり、
                        <BlockMath math="(AB)^{-1} = B^{-1} A^{-1}" />
                        が成り立つことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.1-1 （正則行列と逆行列）より、ある行列 <InlineMath math="M" /> が正則であることと、<InlineMath math="MX = XM = I" /> を満たす行列 <InlineMath math="X" /> が存在することは同値であり、このとき <InlineMath math="X = M^{-1}" /> である。
                        </p>
                        <p>
                            そこで、<InlineMath math="M = AB" />, <InlineMath math="X = B^{-1}A^{-1}" /> として、<InlineMath math="MX = XM = I" /> が成り立つことを確認する。
                        </p>
                        <p>
                            まず <InlineMath math="MX" /> について計算する。<InlineMath math="A, B" /> は正則であるから <InlineMath math="AA^{-1}=I" />, <InlineMath math="BB^{-1}=I" /> を用いる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            (AB)(B^{-1}A^{-1}) &= A(BB^{-1})A^{-1} \\
                            &= AIA^{-1} \\
                            &= AA^{-1} \\
                            &= I
                            \end{aligned}
                        " />
                        <p>
                            次に <InlineMath math="XM" /> について計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            (B^{-1}A^{-1})(AB) &= B^{-1}(A^{-1}A)B \\
                            &= B^{-1}IB \\
                            &= B^{-1}B \\
                            &= I
                            \end{aligned}
                        " />
                        <p>
                            以上より、<InlineMath math="(AB)(B^{-1}A^{-1}) = (B^{-1}A^{-1})(AB) = I" /> が成り立つ。
                        </p>
                        <p>
                            これは <InlineMath math="AB" /> が正則であり、その逆行列が <InlineMath math="B^{-1}A^{-1}" /> であることを示している。したがって、<InlineMath math="(AB)^{-1} = B^{-1}A^{-1}" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        <InlineMath math="n" /> 次正方行列 <InlineMath math="A" /> が正則であるとき、任意の自然数 <InlineMath math="k" /> に対して <InlineMath math="A^k" /> も正則であり、
                        <InlineMath math="(A^k)^{-1} = (A^{-1})^k" /> となることを数学的帰納法を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            自然数 <InlineMath math="k" /> についての数学的帰納法で証明する。
                        </p>
                        <p className="mt-2">
                            <strong>[1] <InlineMath math="k = 1" /> のとき</strong>
                        </p>
                        <p>
                            <InlineMath math="A^1 = A" /> であり、<InlineMath math="A" /> は正則で <InlineMath math="(A^1)^{-1} = A^{-1} = (A^{-1})^1" /> となるため成立する。
                        </p>
                        <p className="mt-2">
                            <strong>[2] <InlineMath math="k = m" /> のとき成立すると仮定する</strong>
                        </p>
                        <p>
                            すなわち、<InlineMath math="A^m" /> は正則であり、<InlineMath math="(A^m)^{-1} = (A^{-1})^m" /> が成り立つと仮定する。
                        </p>
                        <p className="mt-2">
                            <strong>[3] <InlineMath math="k = m + 1" /> のとき</strong>
                        </p>
                        <p>
                            <InlineMath math="A^{m+1} = A^m A" /> と表せる。<InlineMath math="A^m" /> と <InlineMath math="A" /> はともに正則行列であるから、前問（問題8）で証明した積の逆行列の性質 <InlineMath math="(XY)^{-1} = Y^{-1}X^{-1}" /> を適用できる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            (A^{m+1})^{-1} &= (A^m A)^{-1} \\
                            &= A^{-1} (A^m)^{-1}
                            \end{aligned}
                        " />
                        <p>
                            帰納法の仮定 <InlineMath math="(A^m)^{-1} = (A^{-1})^m" /> を用いると、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            A^{-1} (A^m)^{-1} &= A^{-1} (A^{-1})^m \\
                            &= (A^{-1})^{m+1}
                            \end{aligned}
                        " />
                        <p>
                            よって <InlineMath math="(A^{m+1})^{-1} = (A^{-1})^{m+1}" /> となり、<InlineMath math="A^{m+1}" /> も正則であり <InlineMath math="k = m + 1" /> のときも成立する。
                        </p>
                        <p className="mt-2">
                            [1], [2], [3] より、任意の自然数 <InlineMath math="k" /> に対して <InlineMath math="A^k" /> は正則であり、<InlineMath math="(A^k)^{-1} = (A^{-1})^k" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        次の行列 <InlineMath math="A" /> について、掃き出し法を適用し、逆行列が存在しないことを確認せよ。
                    </p>
                    <BlockMath math="A = \begin{pmatrix} 1 & -1 & 2 \\ 2 & 1 & 1 \\ 3 & 0 & 3 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>
                            拡大行列 <InlineMath math="[A | I]" /> を作り、行基本変形を行う。
                        </p>
                        <BlockMath math="
                            \left[ \begin{array}{ccc|ccc}
                            1 & -1 & 2 & 1 & 0 & 0 \\
                            2 & 1 & 1 & 0 & 1 & 0 \\
                            3 & 0 & 3 & 0 & 0 & 1
                            \end{array} \right]
                        " />
                        <p>
                            第2行 <InlineMath math="- 2 \times" /> 第1行、第3行 <InlineMath math="- 3 \times" /> 第1行：
                        </p>
                        <BlockMath math="
                            \xrightarrow{}
                            \left[ \begin{array}{ccc|ccc}
                            1 & -1 & 2 & 1 & 0 & 0 \\
                            0 & 3 & -3 & -2 & 1 & 0 \\
                            0 & 3 & -3 & -3 & 0 & 1
                            \end{array} \right]
                        " />
                        <p>
                            第3行 <InlineMath math="- 1 \times" /> 第2行：
                        </p>
                        <BlockMath math="
                            \xrightarrow{}
                            \left[ \begin{array}{ccc|ccc}
                            1 & -1 & 2 & 1 & 0 & 0 \\
                            0 & 3 & -3 & -2 & 1 & 0 \\
                            0 & 0 & 0 & -1 & -1 & 1
                            \end{array} \right]
                        " />
                        <p>
                            左側の行列の第3行がすべて <InlineMath math="0" /> になってしまったため、これ以上変形しても左側を単位行列 <InlineMath math="I" /> にすることはできない。
                        </p>
                        <p>
                            Proposition 5.3-1 の Note にある通り、単位行列に変形できない場合はもとの行列 <InlineMath math="A" /> は正則ではない。
                            したがって、<InlineMath math="A" /> の逆行列は存在しないことが確認できた。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
