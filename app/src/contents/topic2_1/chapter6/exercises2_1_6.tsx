import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        正方行列 <InlineMath math="A" /> が「対角化可能」であるための定義を、正則行列 <InlineMath math="P" /> と対角行列 <InlineMath math="D" /> を用いた式で答えよ（Definition 6.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ある正則行列 <InlineMath math="P" /> が存在して、
                        </p>
                        <BlockMath math="P^{-1} A P = D" />
                        <p>
                            （<InlineMath math="D" /> は対角行列）と表せることである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> が対角化可能であるための必要十分条件を、「幾何的重複度」と「代数的重複度」という言葉を用いて説明せよ（Theorem 6.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列 <InlineMath math="A" /> のすべての固有値において、<strong>幾何的重複度と代数的重複度が等しい</strong>ことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        行列 <InlineMath math="A" /> が <InlineMath math="P^{-1} A P = D" /> と対角化されているとき、行列の <InlineMath math="k" /> 乗 <InlineMath math="A^k" /> はどのように計算できるか。式で答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 6.2-1 より、
                        </p>
                        <BlockMath math="A^k = P D^k P^{-1}" />
                        <p>
                            と計算できる。（ここで <InlineMath math="D^k" /> は対角成分をそれぞれ <InlineMath math="k" /> 乗した対角行列である）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 4 & -2 \\ 1 & 1 \end{pmatrix}" /> の固有値を求め、この行列が対角化可能かどうかを判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>特性方程式を解く。</p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A - \lambda I) &= \det \begin{pmatrix} 4 - \lambda & -2 \\ 1 & 1 - \lambda \end{pmatrix} \\
                            &= (4 - \lambda)(1 - \lambda) - (-2)(1) \\
                            &= \lambda^2 - 5\lambda + 4 + 2 \\
                            &= \lambda^2 - 5\lambda + 6 \\
                            &= (\lambda - 2)(\lambda - 3) = 0
                            \end{aligned}
                        " />
                        <p>
                            固有値は <InlineMath math="\lambda = 2, 3" /> である。<br />
                            2次正方行列が2つの「相異なる」固有値を持つため、Corollary 6.1-1 より、この行列は<strong>対角化可能である</strong>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}" /> を対角化せよ。<br />
                        すなわち、対角化を行うための正則行列 <InlineMath math="P" /> と、対角行列 <InlineMath math="D" /> を求めよ。（<InlineMath math="P^{-1}" /> を求める必要はない）
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. 固有値を求める</strong></p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A - \lambda I) &= \det \begin{pmatrix} 1 - \lambda & -1 \\ -1 & 1 - \lambda \end{pmatrix} \\
                            &= (1 - \lambda)^2 - 1 \\
                            &= \lambda^2 - 2\lambda = \lambda(\lambda - 2) = 0
                            \end{aligned}
                        " />
                        <p>よって固有値は <InlineMath math="\lambda = 0, 2" />。</p>

                        <p className="mt-4"><strong>2. 固有ベクトルを求める</strong></p>
                        <p>・<InlineMath math="\lambda = 0" /> のとき</p>
                        <BlockMath math="\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies x - y = 0 \implies x = y" />
                        <p>固有ベクトルとして <InlineMath math="\boldsymbol{p}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}" /> を選ぶ。</p>

                        <p className="mt-4">・<InlineMath math="\lambda = 2" /> のとき</p>
                        <BlockMath math="\begin{pmatrix} -1 & -1 \\ -1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -x - y = 0 \implies y = -x" />
                        <p>固有ベクトルとして <InlineMath math="\boldsymbol{p}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}" /> を選ぶ。</p>

                        <p className="mt-4"><strong>3. 変換行列 <InlineMath math="P" /> と対角行列 <InlineMath math="D" /></strong></p>
                        <p>これらを並べて</p>
                        <BlockMath math="P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \quad D = \begin{pmatrix} 0 & 0 \\ 0 & 2 \end{pmatrix}" />
                        <p className="text-sm mt-2">（※列の順番を逆にした <InlineMath math="P = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}, D = \begin{pmatrix} 2 & 0 \\ 0 & 0 \end{pmatrix}" /> なども正解）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}" /> が対角化不可能であることを、代数的重複度と幾何的重複度を計算して示せ。
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. 特性方程式と代数的重複度</strong></p>
                        <BlockMath math="\det(A - \lambda I) = \det \begin{pmatrix} 3 - \lambda & 1 \\ 0 & 3 - \lambda \end{pmatrix} = (3 - \lambda)^2 = 0" />
                        <p>
                            固有値は <InlineMath math="\lambda = 3" /> のみであり、因数 <InlineMath math="(3-\lambda)" /> の指数は2であるから、<strong>代数的重複度は 2</strong> である。
                        </p>

                        <p className="mt-4"><strong>2. 固有空間と幾何的重複度</strong></p>
                        <p><InlineMath math="\lambda = 3" /> のときの固有ベクトルを求める。</p>
                        <BlockMath math="(A - 3I)\boldsymbol{x} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} y \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
                        <p>
                            これより <InlineMath math="y = 0" />。<InlineMath math="x" /> は任意なので、固有ベクトルは <InlineMath math="c \begin{pmatrix} 1 \\ 0 \end{pmatrix}" />（<InlineMath math="c \neq 0" />）のみである。<br />
                            固有空間の基底のベクトルは1つであるため、<strong>幾何的重複度は 1</strong> である。
                        </p>
                        <p className="mt-4"><strong>結論：</strong></p>
                        <p>
                            固有値 <InlineMath math="\lambda = 3" /> において、幾何的重複度(1) <InlineMath math="\neq" /> 代数的重複度(2) であるため、Theorem 6.1-1 よりこの行列は対角化不可能である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}" /> の <InlineMath math="n" /> 乗 <InlineMath math="A^n" /> を計算せよ。<br />
                        ヒント：対角化 <InlineMath math="A = P D P^{-1}" /> を行い、<InlineMath math="A^n = P D^n P^{-1}" /> を計算する。
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. 固有値と固有ベクトル</strong></p>
                        <BlockMath math="\begin{aligned}
                            \det(A - \lambda I) &= (2-\lambda)^2 - 1 \\
                            &= \lambda^2 - 4\lambda + 3 \\
                            &= (\lambda - 3)(\lambda - 1) \\
                            &= 0
                            \end{aligned}
                        " />
                        <p>固有値は <InlineMath math="\lambda = 3, 1" />。</p>
                        <p>・<InlineMath math="\lambda = 3" /> のとき：<InlineMath math="\begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \boldsymbol{0} \implies \boldsymbol{p}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}" /></p>
                        <p>・<InlineMath math="\lambda = 1" /> のとき：<InlineMath math="\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \boldsymbol{0} \implies \boldsymbol{p}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}" /></p>

                        <p className="mt-4"><strong>2. 変換行列と逆行列</strong></p>
                        <BlockMath math="P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \quad D = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}" />
                        <BlockMath math="P^{-1} = \frac{1}{-2} \begin{pmatrix} -1 & -1 \\ -1 & 1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" />

                        <p className="mt-4"><strong>3. <InlineMath math="n" /> 乗の計算</strong></p>
                        <BlockMath math="
                            \begin{aligned}
                            A^n &= P D^n P^{-1} \\
                            &= \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 3^n & 0 \\ 0 & 1^n \end{pmatrix} \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \\
                            &= \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 3^n & 3^n \\ 1 & -1 \end{pmatrix} \\
                            &= \frac{1}{2} \begin{pmatrix} 3^n + 1 & 3^n - 1 \\ 3^n - 1 & 3^n + 1 \end{pmatrix}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        フィボナッチ数列 <InlineMath math="F_{k+2} = F_{k+1} + F_k" /> （<InlineMath math="F_0 = 0, F_1 = 1" />）は、行列表現を用いると次のように書ける。
                    </p>
                    <BlockMath math="\begin{pmatrix} F_{k+2} \\ F_{k+1} \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} F_{k+1} \\ F_k \end{pmatrix}" />
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}" /> の固有値を求めよ。<br />
                        （この2つの固有値は、フィボナッチ数列の一般項（ビネの公式）に現れる「黄金比」に関係する値である）
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列 <InlineMath math="A" /> の特性方程式を解く。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A - \lambda I) &= \det \begin{pmatrix} 1 - \lambda & 1 \\ 1 & -\lambda \end{pmatrix} \\
                            &= (1 - \lambda)(-\lambda) - 1 \\
                            &= \lambda^2 - \lambda - 1 = 0
                            \end{aligned}
                        " />
                        <p>
                            二次方程式の解の公式を用いる。
                        </p>
                        <BlockMath math="
                            \lambda = \frac{1 \pm \sqrt{(-1)^2 - 4(1)(-1)}}{2} = \frac{1 \pm \sqrt{1 + 4}}{2} = \frac{1 \pm \sqrt{5}}{2}
                        " />
                        <p>
                            したがって、固有値は <InlineMath math="\lambda = \frac{1 + \sqrt{5}}{2}, \frac{1 - \sqrt{5}}{2}" /> である。
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            （※ <InlineMath math="\frac{1 + \sqrt{5}}{2}" /> は黄金比 <InlineMath math="\phi" /> であり、もう一方は <InlineMath math="1 - \phi" /> になる。この行列を対角化して <InlineMath math="n" /> 乗を計算することで、フィボナッチ数列の一般項が導出できる。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
