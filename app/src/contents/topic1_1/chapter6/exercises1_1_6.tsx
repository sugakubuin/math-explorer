import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_1_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}" /> とベクトル <InlineMath math="\mathbf{x} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}" /> について考える。
                        ベクトル <InlineMath math="\mathbf{x}" /> は行列 <InlineMath math="A" /> の固有ベクトルであるか。また、固有ベクトルである場合、その固有値 <InlineMath math="\lambda" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.1-1 （固有値・固有ベクトル）の定義式 <InlineMath math="A\mathbf{x} = \lambda \mathbf{x}" /> を満たすか確認する。
                        </p>
                        <BlockMath math="\begin{aligned}
                            A\mathbf{x} &= \begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix} \begin{pmatrix} 3 \\ -1 \end{pmatrix}
                            = \begin{pmatrix} 2 \cdot 3 + 3 \cdot (-1) \\ 1 \cdot 3 + 4 \cdot (-1) \end{pmatrix} \\
                            &= \begin{pmatrix} 6 - 3 \\ 3 - 4 \end{pmatrix}
                            = \begin{pmatrix} 3 \\ -1 \end{pmatrix}
                        \end{aligned}" />
                        <p>
                            よって <InlineMath math="A\mathbf{x} = 1 \cdot \mathbf{x}" /> となるため、<InlineMath math="\mathbf{x}" /> は固有ベクトルである。
                            また、その固有値は <InlineMath math="\lambda = 1" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 5 & -2 \\ 4 & 1 \end{pmatrix}" /> の2つの固有値を <InlineMath math="\lambda_1, \lambda_2" /> とする。
                        Theorem 6.2-1 （解と係数の関係）を用いて、<InlineMath math="\lambda_1 + \lambda_2" /> と <InlineMath math="\lambda_1 \lambda_2" /> の値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.2-1 より、固有値の和は行列のトレースに、固有値の積は行列式に等しい。
                        </p>
                        <p className="mt-2">
                            <strong>和</strong>：
                            <InlineMath math="\lambda_1 + \lambda_2 = \text{tr}(A) = 5 + 1 = 6" />
                        </p>
                        <p className="mt-2">
                            <strong>積</strong>：
                            <InlineMath math="\lambda_1 \lambda_2 = \det(A) = 5 \cdot 1 - (-2) \cdot 4 = 5 + 8 = 13" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        Theorem 6.4-1 （対角化の方法）に関する以下の文の空欄に適する行列を答えよ。
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md my-4">
                        <p>
                            <InlineMath math="2 \times 2" /> 行列 <InlineMath math="A" /> が固有値 <InlineMath math="\lambda_1 = 2, \lambda_2 = 3" /> を持ち、
                            それぞれに対する固有ベクトルが <InlineMath math="\mathbf{p}_1, \mathbf{p}_2" /> であるとする。
                            このとき、行列 <InlineMath math="P = [\mathbf{p}_1, \mathbf{p}_2]" /> を用いると、
                            <InlineMath math="P^{-1}AP" /> は対角行列 <InlineMath math="D" /> になる。
                            この <InlineMath math="D" /> は（　　）である。
                        </p>
                    </div>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.4-1 より、対角行列 <InlineMath math="D" /> の対角成分には、変換行列 <InlineMath math="P" /> の列ベクトル（固有ベクトル）に対応する順序で固有値が並ぶ。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> <InlineMath math="\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        次の行列 <InlineMath math="A" /> の特性方程式を解き、固有値をすべて求めよ。
                    </p>
                    <BlockMath math="A = \begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>
                            Definition 6.2-1 より、特性方程式 <InlineMath math="\det(A - \lambda I) = 0" /> を立てる。
                        </p>
                        <BlockMath math="
                            A - \lambda I = \begin{pmatrix} 3-\lambda & 2 \\ 1 & 4-\lambda \end{pmatrix}
                        " />
                        <p>
                            行列式を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A - \lambda I) &= (3-\lambda)(4-\lambda) - 2 \cdot 1 \\
                            &= \lambda^2 - 7\lambda + 12 - 2 \\
                            &= \lambda^2 - 7\lambda + 10
                            \end{aligned}
                        " />
                        <p>
                            よって特性方程式は <InlineMath math="\lambda^2 - 7\lambda + 10 = 0" /> となる。
                            これを因数分解すると、
                        </p>
                        <BlockMath math="(\lambda - 2)(\lambda - 5) = 0" />
                        <p>
                            したがって、固有値は <InlineMath math="\lambda = 2, 5" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        前問（問題4）の行列 <InlineMath math="A = \begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}" /> について、
                        それぞれの固有値に対する固有ベクトルを求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            固有値は <InlineMath math="\lambda = 2, 5" /> である。<InlineMath math="(A - \lambda I)\mathbf{x} = \mathbf{0}" /> を解く。
                        </p>
                        <p className="mt-4 font-bold">(i) <InlineMath math="\lambda = 2" /> のとき</p>
                        <BlockMath math="A - 2I = \begin{pmatrix} 1 & 2 \\ 1 & 2 \end{pmatrix}" />
                        <p>
                            <InlineMath math="\begin{pmatrix} 1 & 2 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" /> より、<InlineMath math="x + 2y = 0" />。
                            よって <InlineMath math="x = -2y" />。<InlineMath math="y = c_1" /> とおくと固有ベクトルは、
                        </p>
                        <BlockMath math="\mathbf{x} = c_1 \begin{pmatrix} -2 \\ 1 \end{pmatrix} \quad (c_1 \neq 0)" />

                        <p className="mt-4 font-bold">(ii) <InlineMath math="\lambda = 5" /> のとき</p>
                        <BlockMath math="A - 5I = \begin{pmatrix} -2 & 2 \\ 1 & -1 \end{pmatrix}" />
                        <p>
                            <InlineMath math="\begin{pmatrix} -2 & 2 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" /> より、第2式から <InlineMath math="x - y = 0" /> すなわち <InlineMath math="x = y" />。
                            <InlineMath math="x = c_2" /> とおくと固有ベクトルは、
                        </p>
                        <BlockMath math="\mathbf{x} = c_2 \begin{pmatrix} 1 \\ 1 \end{pmatrix} \quad (c_2 \neq 0)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}" /> を対角化せよ。<br />
                        （対角化を行う正則行列 <InlineMath math="P" />、その逆行列 <InlineMath math="P^{-1}" />、および対角行列 <InlineMath math="D = P^{-1}AP" /> の各成分を明記すること。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            問題5より、独立な固有ベクトル <InlineMath math="\mathbf{p}_1 = \begin{pmatrix} -2 \\ 1 \end{pmatrix}" /> （<InlineMath math="\lambda=2" /> に対応）、
                            <InlineMath math="\mathbf{p}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}" /> （<InlineMath math="\lambda=5" /> に対応）が得られている。
                        </p>
                        <p>
                            これらを並べて正則行列 <InlineMath math="P" /> を作る。
                        </p>
                        <BlockMath math="P = \begin{pmatrix} -2 & 1 \\ 1 & 1 \end{pmatrix}" />
                        <p>
                            <InlineMath math="P" /> の行列式は <InlineMath math="\det(P) = -2 - 1 = -3" /> であるから、逆行列 <InlineMath math="P^{-1}" /> は
                        </p>
                        <BlockMath math="P^{-1} = \frac{1}{-3} \begin{pmatrix} 1 & -1 \\ -1 & -2 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} -1 & 1 \\ 1 & 2 \end{pmatrix}" />
                        <p>
                            Theorem 6.4-1 より、<InlineMath math="P^{-1}AP" /> は対角行列 <InlineMath math="D" /> になり、その対角成分は <InlineMath math="P" /> の列ベクトルに対応する固有値となる。
                        </p>
                        <BlockMath math="D = P^{-1}AP = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}" /> について、自然数 <InlineMath math="n" /> に対する <InlineMath math="A^n" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            問題6より、<InlineMath math="P = \begin{pmatrix} -2 & 1 \\ 1 & 1 \end{pmatrix}, \quad P^{-1} = \frac{1}{3} \begin{pmatrix} -1 & 1 \\ 1 & 2 \end{pmatrix}, \quad D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}" /> であり、<InlineMath math="P^{-1}AP = D" /> すなわち <InlineMath math="A = PDP^{-1}" /> が成り立つ。
                        </p>
                        <p>
                            これより、<InlineMath math="A^n = PD^nP^{-1}" /> となるので計算する。
                        </p>
                        <BlockMath math="
                            A^n = \begin{pmatrix} -2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 2^n & 0 \\ 0 & 5^n \end{pmatrix} \frac{1}{3} \begin{pmatrix} -1 & 1 \\ 1 & 2 \end{pmatrix}
                        " />
                        <p>
                            まず行列 <InlineMath math="P" /> と <InlineMath math="D^n" /> の積を計算する。
                        </p>
                        <BlockMath math="
                            PD^n = \begin{pmatrix} -2 \cdot 2^n & 5^n \\ 2^n & 5^n \end{pmatrix}
                        " />
                        <p>
                            次にこれと <InlineMath math="P^{-1}" /> を掛ける。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            A^n &= \frac{1}{3} \begin{pmatrix} -2 \cdot 2^n & 5^n \\ 2^n & 5^n \end{pmatrix} \begin{pmatrix} -1 & 1 \\ 1 & 2 \end{pmatrix} \\
                            &= \frac{1}{3} \begin{pmatrix} (-2 \cdot 2^n)(-1) + 5^n \cdot 1 & (-2 \cdot 2^n)(1) + 5^n \cdot 2 \\ 2^n(-1) + 5^n \cdot 1 & 2^n(1) + 5^n \cdot 2 \end{pmatrix} \\
                            &= \frac{1}{3} \begin{pmatrix} 2^{n+1} + 5^n & -2^{n+1} + 2 \cdot 5^n \\ -2^n + 5^n & 2^n + 2 \cdot 5^n \end{pmatrix}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        正則行列 <InlineMath math="A" /> が固有値 <InlineMath math="\lambda" /> と対応する固有ベクトル <InlineMath math="\mathbf{x}" /> を持つとする。
                        このとき、<InlineMath math="A" /> の逆行列 <InlineMath math="A^{-1}" /> は固有値 <InlineMath math="\frac{1}{\lambda}" /> を持ち、その固有ベクトルも <InlineMath math="\mathbf{x}" /> であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            前提より、<InlineMath math="A\mathbf{x} = \lambda \mathbf{x}" /> （<InlineMath math="\mathbf{x} \neq \mathbf{0}" />）が成り立つ。
                            行列 <InlineMath math="A" /> は正則であるため逆行列 <InlineMath math="A^{-1}" /> を持ち、また正則行列の固有値は <InlineMath math="0" /> にならないため <InlineMath math="\lambda \neq 0" /> である。
                        </p>
                        <p>
                            等式 <InlineMath math="A\mathbf{x} = \lambda \mathbf{x}" /> の両辺の左から <InlineMath math="A^{-1}" /> を掛ける。
                        </p>
                        <BlockMath math="A^{-1}(A\mathbf{x}) = A^{-1}(\lambda \mathbf{x})" />
                        <p>
                            左辺は <InlineMath math="(A^{-1}A)\mathbf{x} = I\mathbf{x} = \mathbf{x}" />。
                            右辺は <InlineMath math="\lambda (A^{-1}\mathbf{x})" />。
                        </p>
                        <BlockMath math="\mathbf{x} = \lambda (A^{-1}\mathbf{x})" />
                        <p>
                            両辺を <InlineMath math="\lambda \neq 0" /> で割ると、
                        </p>
                        <BlockMath math="\frac{1}{\lambda}\mathbf{x} = A^{-1}\mathbf{x}" />
                        <p>
                            すなわち <InlineMath math="A^{-1}\mathbf{x} = \frac{1}{\lambda}\mathbf{x}" /> となる。
                            これは、ベクトル <InlineMath math="\mathbf{x}" /> が行列 <InlineMath math="A^{-1}" /> の固有ベクトルであり、対応する固有値が <InlineMath math="\frac{1}{\lambda}" /> であることを示している。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        次の行列 <InlineMath math="A" /> は対角化不可能であることを示せ。
                    </p>
                    <BlockMath math="A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>
                            Theorem 6.4-1 および Example 6.4-2 の Note によれば、対角化可能であるためには、<InlineMath math="n \times n" /> 行列において <InlineMath math="n" /> 個の線形独立な固有ベクトルが存在しなければならない。
                        </p>
                        <p>
                            まず <InlineMath math="A" /> の固有値を求める。特性方程式は
                        </p>
                        <BlockMath math="\det(A - \lambda I) = \begin{vmatrix} 1-\lambda & 1 \\ 0 & 1-\lambda \end{vmatrix} = (1-\lambda)^2 = 0" />
                        <p>
                            よって、固有値は <InlineMath math="\lambda = 1" /> （重解）のみである。
                        </p>
                        <p>
                            次に、固有値 <InlineMath math="\lambda = 1" /> に対する固有ベクトルを求める。<InlineMath math="(A - 1I)\mathbf{x} = \mathbf{0}" /> を解く。
                        </p>
                        <BlockMath math="A - I = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}" />
                        <p>
                            <InlineMath math="\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" /> より、
                            <InlineMath math="y = 0" /> となる。変数 <InlineMath math="x" /> は任意であるから <InlineMath math="x = c" /> とおくと、
                        </p>
                        <BlockMath math="\mathbf{x} = \begin{pmatrix} c \\ 0 \end{pmatrix} = c \begin{pmatrix} 1 \\ 0 \end{pmatrix} \quad (c \neq 0)" />
                        <p>
                            したがって、独立な固有ベクトルは <InlineMath math="\begin{pmatrix} 1 \\ 0 \end{pmatrix}" /> の1つしか得られない。
                        </p>
                        <p>
                            行列のサイズは <InlineMath math="2 \times 2" /> であるが、独立な固有ベクトルが2つ存在しないため、変換行列 <InlineMath math="P" /> を構成できない。
                            よって、行列 <InlineMath math="A" /> は対角化不可能である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        次の3次正方行列 <InlineMath math="A" /> を対角化せよ。<br />
                        （変換行列 <InlineMath math="P" /> と対角行列 <InlineMath math="D = P^{-1}AP" /> を明記すること。逆行列 <InlineMath math="P^{-1}" /> を計算する必要はない。）
                    </p>
                    <BlockMath math="A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>
                            行列 <InlineMath math="A" /> は上三角行列であるため、特性方程式 <InlineMath math="\det(A - \lambda I) = 0" /> の解である固有値は対角成分と一致する。
                            よって固有値は <InlineMath math="\lambda = 1, 2, 3" /> である。
                        </p>
                        <p>
                            各固有値に対応する固有ベクトルを求める。
                        </p>
                        <p className="mt-2 font-bold">(i) <InlineMath math="\lambda = 1" /> のとき</p>
                        <BlockMath math="A - I = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}" />
                        <p>
                            <InlineMath math="(A-I)\mathbf{x}=\mathbf{0}" /> を解くと <InlineMath math="y=0, 2z=0 \Rightarrow z=0" />。<InlineMath math="x" /> は任意なので、
                            <InlineMath math="\mathbf{p}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}" />
                        </p>

                        <p className="mt-2 font-bold">(ii) <InlineMath math="\lambda = 2" /> のとき</p>
                        <BlockMath math="A - 2I = \begin{pmatrix} -1 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}" />
                        <p>
                            <InlineMath math="(A-2I)\mathbf{x}=\mathbf{0}" /> を解くと <InlineMath math="-x+y=0 \Rightarrow x=y" />、<InlineMath math="z=0" />。よって
                            <InlineMath math="\mathbf{p}_2 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}" />
                        </p>

                        <p className="mt-2 font-bold">(iii) <InlineMath math="\lambda = 3" /> のとき</p>
                        <BlockMath math="A - 3I = \begin{pmatrix} -2 & 1 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 0 \end{pmatrix}" />
                        <p>
                            <InlineMath math="(A-3I)\mathbf{x}=\mathbf{0}" /> を解くと <InlineMath math="-y=0 \Rightarrow y=0" />、<InlineMath math="-2x+y=0 \Rightarrow x=0" />。<InlineMath math="z" /> は任意なので、
                            <InlineMath math="\mathbf{p}_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}" />
                        </p>

                        <p className="mt-4">
                            3つの独立な固有ベクトルが得られたので、これらを並べて変換行列 <InlineMath math="P" /> を構成する。
                        </p>
                        <BlockMath math="P = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}" />
                        <p>
                            このとき、対角成分に固有値が並んだ対角行列 <InlineMath math="D" /> は次のようになる。
                        </p>
                        <BlockMath math="D = P^{-1}AP = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
