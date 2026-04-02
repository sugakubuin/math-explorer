import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_1_Chapter2() {
    return (
        <div>
            {/* ═══════════════════════════════
                 確認問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="confirmation">

                {/* Q1 */}
                <ExerciseProblem chapterId="2" number={1}>
                    <p>次の行列 <InlineMath math="A" /> について、(1) 型、(2) <InlineMath math="(2,3)" /> 成分、(3) <InlineMath math="(3,1)" /> 成分 をそれぞれ答えよ。</p>
                    <BlockMath math="A = \begin{pmatrix} 1 & 0 & -2 \\ 3 & 5 & 7 \\ -4 & 2 & 6 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p><strong>(1)</strong> 縦に 3 行、横に 3 列なので <InlineMath math="3 \times 3" /> 行列（3 次正方行列）。</p>
                        <p><strong>(2)</strong> 2 行目の 3 列目にある数は <InlineMath math="7" /> なので、<InlineMath math="a_{23} = 7" />。</p>
                        <p><strong>(3)</strong> 3 行目の 1 列目にある数は <InlineMath math="-4" /> なので、<InlineMath math="a_{31} = -4" />。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q2 */}
                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        <InlineMath math="A = \begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix}" />、
                        <InlineMath math="B = \begin{pmatrix} -1 & 4 \\ 5 & 2 \end{pmatrix}" /> のとき、
                        <InlineMath math="3A - 2B" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>Definition 2.2-1 より、スカラー倍と差を成分ごとに計算する。</p>
                        <BlockMath math="\begin{aligned} 3A - 2B &= 3\begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix} - 2\begin{pmatrix} -1 & 4 \\ 5 & 2 \end{pmatrix} \\ &= \begin{pmatrix} 6 & -3 \\ 0 & 9 \end{pmatrix} - \begin{pmatrix} -2 & 8 \\ 10 & 4 \end{pmatrix} \\ &= \begin{pmatrix} 8 & -11 \\ -10 & 5 \end{pmatrix}. \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q3 */}
                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        <InlineMath math="A = \begin{pmatrix} 1 & 3 \\ -2 & 0 \\ 4 & 5 \end{pmatrix}" /> の転置行列 <InlineMath math="{}^t A" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>Definition 2.3-1 より、行と列を入れ替える。<InlineMath math="A" /> は <InlineMath math="3 \times 2" /> 行列なので <InlineMath math="{}^t A" /> は <InlineMath math="2 \times 3" /> 行列となる。</p>
                        <BlockMath math="{}^t A = \begin{pmatrix} 1 & -2 & 4 \\ 3 & 0 & 5 \end{pmatrix}." />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            {/* ═══════════════════════════════
                 基本問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="basic">

                {/* Q4 */}
                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}" />、
                        <InlineMath math="B = \begin{pmatrix} -1 & 4 \\ 2 & 1 \end{pmatrix}" /> のとき、
                        積 <InlineMath math="AB" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>Definition 2.2-2 より、<InlineMath math="(i,j)" /> 成分は <InlineMath math="A" /> の第 <InlineMath math="i" /> 行と <InlineMath math="B" /> の第 <InlineMath math="j" /> 列の内積である。</p>
                        <BlockMath math="\begin{aligned} AB &= \begin{pmatrix} 1 \cdot (-1) + 2 \cdot 2 & 1 \cdot 4 + 2 \cdot 1 \\ 3 \cdot (-1) + 0 \cdot 2 & 3 \cdot 4 + 0 \cdot 1 \end{pmatrix} \\ &= \begin{pmatrix} -1 + 4 & 4 + 2 \\ -3 + 0 & 12 + 0 \end{pmatrix} = \begin{pmatrix} 3 & 6 \\ -3 & 12 \end{pmatrix}. \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q5 */}
                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}" />、
                        <InlineMath math="B = \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}" /> のとき、
                        <InlineMath math="AB" /> と <InlineMath math="BA" /> をそれぞれ求め、<InlineMath math="AB \neq BA" /> であることを確かめよ。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="AB = \begin{pmatrix} 1 \cdot 1 + 2 \cdot 3 & 1 \cdot 0 + 2 \cdot 1 \\ 0 \cdot 1 + 1 \cdot 3 & 0 \cdot 0 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 7 & 2 \\ 3 & 1 \end{pmatrix}." />
                        <BlockMath math="BA = \begin{pmatrix} 1 \cdot 1 + 0 \cdot 0 & 1 \cdot 2 + 0 \cdot 1 \\ 3 \cdot 1 + 1 \cdot 0 & 3 \cdot 2 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & 7 \end{pmatrix}." />
                        <p>
                            たとえば <InlineMath math="(1,1)" /> 成分を比較すると <InlineMath math="7 \neq 1" /> であるから、
                            <InlineMath math="AB \neq BA" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q6 */}
                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}" />、
                        <InlineMath math="B = \begin{pmatrix} 0 & 1 \\ -1 & 2 \end{pmatrix}" /> に対して、
                        <InlineMath math="{}^t(AB)" /> と <InlineMath math="{}^t B \, {}^t A" /> をそれぞれ計算し、
                        Theorem 2.3-1 の <InlineMath math="{}^t(AB) = {}^t B \, {}^t A" /> が成り立つことを確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>まず <InlineMath math="AB" /> を計算する。</p>
                        <BlockMath math="AB = \begin{pmatrix} 1 \cdot 0 + 2 \cdot (-1) & 1 \cdot 1 + 2 \cdot 2 \\ 3 \cdot 0 + 4 \cdot (-1) & 3 \cdot 1 + 4 \cdot 2 \end{pmatrix} = \begin{pmatrix} -2 & 5 \\ -4 & 11 \end{pmatrix}." />
                        <p>転置をとると、</p>
                        <BlockMath math="{}^t(AB) = \begin{pmatrix} -2 & -4 \\ 5 & 11 \end{pmatrix}." />
                        <p>一方、</p>
                        <BlockMath math="{}^t B = \begin{pmatrix} 0 & -1 \\ 1 & 2 \end{pmatrix}, \qquad {}^t A = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}" />
                        <p>より、</p>
                        <BlockMath math="\begin{aligned} {}^t B \, {}^t A &= \begin{pmatrix} 0 \cdot 1 + (-1) \cdot 2 & 0 \cdot 3 + (-1) \cdot 4 \\ 1 \cdot 1 + 2 \cdot 2 & 1 \cdot 3 + 2 \cdot 4 \end{pmatrix} \\ &= \begin{pmatrix} -2 & -4 \\ 5 & 11 \end{pmatrix}. \end{aligned}" />
                        <p>両者は一致するので、<InlineMath math="{}^t(AB) = {}^t B \, {}^t A" /> が確かに成り立つ。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q7 */}
                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        対角行列 <InlineMath math="D = \mathrm{diag}(2, -1, 3)" /> と
                        <InlineMath math="A = \begin{pmatrix} 1 & 0 & -1 \\ 2 & 3 & 4 \\ 0 & 5 & 1 \end{pmatrix}" /> に対し、
                        <InlineMath math="DA" /> を求めよ。結果から、対角行列を左から掛けることの意味を述べよ。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="DA = \begin{pmatrix} 2 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 3 \end{pmatrix} \begin{pmatrix} 1 & 0 & -1 \\ 2 & 3 & 4 \\ 0 & 5 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 0 & -2 \\ -2 & -3 & -4 \\ 0 & 15 & 3 \end{pmatrix}." />
                        <p>
                            結果を見ると、<InlineMath math="A" /> の第 1 行が <InlineMath math="2" /> 倍、
                            第 2 行が <InlineMath math="-1" /> 倍、第 3 行が <InlineMath math="3" /> 倍されている。
                            すなわち、対角行列 <InlineMath math="D = \mathrm{diag}(d_1, \dots, d_n)" /> を左から掛けることは、
                            各行を対応する対角成分でスカラー倍する操作に相当する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            {/* ═══════════════════════════════
                 発展問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="advanced">

                {/* Q8 */}
                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        任意の正方行列 <InlineMath math="A" /> に対し、<InlineMath math="A + {}^t A" /> は対称行列であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p><InlineMath math="S = A + {}^t A" /> とおく。<InlineMath math="S" /> が対称行列であること、すなわち <InlineMath math="{}^t S = S" /> を示す。</p>
                        <p>Theorem 2.3-1 より、</p>
                        <BlockMath math="{}^t S = {}^t(A + {}^t A) = {}^t A + {}^t({}^t A) = {}^t A + A = A + {}^t A = S." />
                        <p>よって <InlineMath math="{}^t S = S" /> であるから、<InlineMath math="A + {}^t A" /> は対称行列である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q9 */}
                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        <InlineMath math="A \neq O" /> かつ <InlineMath math="B \neq O" /> であっても <InlineMath math="AB = O" /> となりうることを、
                        <InlineMath math="2 \times 2" /> の具体例を挙げて示せ。
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        （この性質は「行列には零因子が存在する」と表現されます。）
                    </p>
                    <ExerciseSolution>
                        <p>たとえば、</p>
                        <BlockMath math="A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}" />
                        <p>とおく。<InlineMath math="A \neq O" /> かつ <InlineMath math="B \neq O" /> は明らかである。積を計算すると、</p>
                        <BlockMath math="AB = \begin{pmatrix} 1 \cdot 0 + 0 \cdot 0 & 1 \cdot 0 + 0 \cdot 1 \\ 0 \cdot 0 + 0 \cdot 0 & 0 \cdot 0 + 0 \cdot 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = O." />
                        <p>
                            よって <InlineMath math="A \neq O,\; B \neq O" /> であるが <InlineMath math="AB = O" /> となる例が存在する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q10 */}
                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        <InlineMath math="A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}" /> に対し、<InlineMath math="A^2" /> および <InlineMath math="A^3" /> を計算し、
                        一般の正整数 <InlineMath math="n" /> に対する <InlineMath math="A^n" /> を推測せよ。
                        さらに、その推測が正しいことを数学的帰納法で証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>まず具体的に計算する。</p>
                        <BlockMath math="A^2 = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}." />
                        <BlockMath math="A^3 = A^2 A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}." />
                        <p>以上から、次の推測を立てる：</p>
                        <BlockMath math="A^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}." />
                        <p><strong>数学的帰納法による証明.</strong></p>
                        <p>
                            <InlineMath math="n = 1" /> のとき、<InlineMath math="A^1 = \begin{pmatrix}1 & 1 \\ 0 & 1\end{pmatrix}" /> であり成り立つ。
                        </p>
                        <p>
                            <InlineMath math="n = k" /> で成り立つと仮定する。すなわち <InlineMath math="A^k = \begin{pmatrix}1 & k \\ 0 & 1\end{pmatrix}" /> とする。
                            このとき、
                        </p>
                        <BlockMath math="\begin{aligned} A^{k+1} = A^k A &= \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \\ &= \begin{pmatrix} 1 & k+1 \\ 0 & 1 \end{pmatrix}. \end{aligned}" />
                        <p>
                            これは <InlineMath math="n = k+1" /> の場合の主張と一致する。
                            よって数学的帰納法により、すべての正整数 <InlineMath math="n" /> に対して <InlineMath math="A^n = \begin{pmatrix}1 & n \\ 0 & 1\end{pmatrix}" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
