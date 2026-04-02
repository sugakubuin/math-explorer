import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_1_Chapter4() {
    return (
        <div>
            {/* ═══════════════════════════════
                 確認問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="confirmation">

                {/* Q1 */}
                <ExerciseProblem chapterId="4" number={1}>
                    <p>次の行列の行列式を求めよ。</p>
                    <p>
                        (1)&ensp;<InlineMath math="A = \begin{pmatrix} 4 & 3 \\ 2 & 5 \end{pmatrix}" />
                        &emsp;
                        (2)&ensp;<InlineMath math="B = \begin{pmatrix} 6 & 2 \\ 9 & 3 \end{pmatrix}" />
                    </p>
                    <ExerciseSolution>
                        <p>Definition 4.1-1 (<InlineMath math="\det = ad - bc" />) より、</p>
                        <p><strong>(1)</strong></p>
                        <BlockMath math="\det(A) = 4 \cdot 5 - 3 \cdot 2 = 20 - 6 = 14." />
                        <p><strong>(2)</strong></p>
                        <BlockMath math="\det(B) = 6 \cdot 3 - 2 \cdot 9 = 18 - 18 = 0." />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q2 */}
                <ExerciseProblem chapterId="4" number={2}>
                    <p>次の <InlineMath math="3 \times 3" /> 行列の行列式をサラスの方法で求めよ。</p>
                    <BlockMath math="A = \begin{pmatrix} 2 & 1 & 0 \\ 3 & -1 & 2 \\ 1 & 0 & 4 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>Definition 4.2-1 のサラスの方法より、</p>
                        <p><strong>プラス項：</strong></p>
                        <BlockMath math="2 \cdot (-1) \cdot 4 + 1 \cdot 2 \cdot 1 + 0 \cdot 3 \cdot 0 = -8 + 2 + 0 = -6." />
                        <p><strong>マイナス項：</strong></p>
                        <BlockMath math="0 \cdot (-1) \cdot 1 + 1 \cdot 3 \cdot 4 + 2 \cdot 2 \cdot 0 = 0 + 12 + 0 = 12." />
                        <p>よって、</p>
                        <BlockMath math="\det(A) = -6 - 12 = -18." />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q3 */}
                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        <InlineMath math="3 \times 3" /> 行列 <InlineMath math="A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{pmatrix}" /> の行列式を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p><InlineMath math="A" /> は上三角行列なので、Theorem 4.4-2 より行列式は対角成分の積に等しい。</p>
                        <BlockMath math="\det(A) = 1 \cdot 4 \cdot 6 = 24." />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            {/* ═══════════════════════════════
                 基本問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="basic">

                {/* Q4 */}
                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        次の <InlineMath math="3 \times 3" /> 行列の行列式を、第 1 列に沿った余因子展開で求めよ。
                    </p>
                    <BlockMath math="A = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 4 \\ 2 & 1 & 0 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>Theorem 4.3-1 より、第 1 列に沿って展開する。</p>
                        <BlockMath math="\begin{aligned} |A| &= a_{11}C_{11} + a_{21}C_{21} + a_{31}C_{31} \\ &= 1 \cdot C_{11} + (-1) \cdot C_{21} + 2 \cdot C_{31}. \end{aligned}" />
                        <p>各余因子を計算する。</p>
                        <BlockMath math="C_{11} = (+1)\begin{vmatrix} 3 & 4 \\ 1 & 0 \end{vmatrix} = 0 - 4 = -4." />
                        <BlockMath math="C_{21} = (-1)\begin{vmatrix} 0 & 2 \\ 1 & 0 \end{vmatrix} = -(0 - 2) = 2." />
                        <BlockMath math="C_{31} = (+1)\begin{vmatrix} 0 & 2 \\ 3 & 4 \end{vmatrix} = 0 - 6 = -6." />
                        <p>よって、</p>
                        <BlockMath math="\begin{aligned} |A| &= 1 \cdot (-4) + (-1) \cdot 2 + 2 \cdot (-6) \\ &= -4 - 2 - 12 = -18. \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q5 */}
                <ExerciseProblem chapterId="4" number={5}>
                    <p>次の連立方程式をクラメルの公式で解け。</p>
                    <BlockMath math="\begin{cases} 3x + y = 5 \\ x - 2y = -3 \end{cases}" />
                    <ExerciseSolution>
                        <p>Theorem 4.5-1 より、まず係数行列の行列式を計算する。</p>
                        <BlockMath math="|A| = \begin{vmatrix} 3 & 1 \\ 1 & -2 \end{vmatrix} = 3 \cdot (-2) - 1 \cdot 1 = -7." />
                        <p><InlineMath math="|A| \neq 0" /> なのでクラメルの公式が使える。</p>
                        <BlockMath math="|A_1| = \begin{vmatrix} 5 & 1 \\ -3 & -2 \end{vmatrix} = 5(-2) - 1(-3) = -10 + 3 = -7." />
                        <BlockMath math="|A_2| = \begin{vmatrix} 3 & 5 \\ 1 & -3 \end{vmatrix} = 3(-3) - 5 \cdot 1 = -9 - 5 = -14." />
                        <p>よって、</p>
                        <BlockMath math="x = \frac{|A_1|}{|A|} = \frac{-7}{-7} = 1, \qquad y = \frac{|A_2|}{|A|} = \frac{-14}{-7} = 2." />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q6 */}
                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        <InlineMath math="A" /> が <InlineMath math="n \times n" /> 行列のとき、
                        <InlineMath math="\det(kA) = k^n \det(A)" /> が成り立つことを、行列式の性質を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="kA" /> は <InlineMath math="A" /> の各行を <InlineMath math="k" /> 倍した行列である。
                            Theorem 4.4-2 の多重線形性（ある行を <InlineMath math="c" /> 倍すると行列式も <InlineMath math="c" /> 倍）より、
                            1 行ごとに <InlineMath math="k" /> を外に出すことができる。
                        </p>
                        <p><InlineMath math="n" /> 本の行すべてから <InlineMath math="k" /> を外に出すので、</p>
                        <BlockMath math="\det(kA) = \underbrace{k \cdot k \cdots k}_{n \text{ 個}} \cdot \det(A) = k^n \det(A)." />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q7 */}
                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}" />、
                        <InlineMath math="B = \begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}" /> のとき、
                        <InlineMath math="\det(AB)" /> と <InlineMath math="\det(A)\det(B)" /> をそれぞれ計算し、
                        <InlineMath math="\det(AB) = \det(A)\det(B)" /> が成り立つことを確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>まず <InlineMath math="AB" /> を計算する。</p>
                        <BlockMath math="AB = \begin{pmatrix} 1 \cdot 2 + 2 \cdot 1 & 1 \cdot 0 + 2 \cdot (-1) \\ 3 \cdot 2 + 4 \cdot 1 & 3 \cdot 0 + 4 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 4 & -2 \\ 10 & -4 \end{pmatrix}." />
                        <BlockMath math="\det(AB) = 4 \cdot (-4) - (-2) \cdot 10 = -16 + 20 = 4." />
                        <p>一方、</p>
                        <BlockMath math="\det(A) = 1 \cdot 4 - 2 \cdot 3 = -2, \\ \det(B) = 2 \cdot (-1) - 0 \cdot 1 = -2." />
                        <BlockMath math="\det(A)\det(B) = (-2)(-2) = 4." />
                        <p>両者は一致するので、<InlineMath math="\det(AB) = \det(A)\det(B)" /> が確かに成り立つ。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            {/* ═══════════════════════════════
                 発展問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="advanced">

                {/* Q8 */}
                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        行列式の性質を用いて、次の等式を証明せよ。
                    </p>
                    <BlockMath math="\begin{vmatrix} a+b & b+c & c+a \\ d+e & e+f & f+d \\ g+h & h+k & k+g \end{vmatrix} = 2\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & k \end{vmatrix}" />
                    <ExerciseSolution>
                        <p>
                            左辺の行列式の各列は和の形で書かれているので、多重線形性（和の分解）を使う。
                            しかし、ここでは列の操作を使うのが効率的である。
                        </p>
                        <p>
                            左辺の行列に対し、列の操作を行う。第 1 列に第 2 列と第 3 列をすべて加えると、
                        </p>
                        <BlockMath math="\text{第 1 列} \leftarrow (a+b) + (b+c) + (c+a) = 2(a+b+c)" />
                        <p>同様に各行で計算すると、</p>
                        <BlockMath math="\begin{vmatrix} 2(a+b+c) & b+c & c+a \\ 2(d+e+f) & e+f & f+d \\ 2(g+h+k) & h+k & k+g \end{vmatrix}" />
                        <p>第 1 列から <InlineMath math="2" /> を外に出す。</p>
                        <BlockMath math="= 2\begin{vmatrix} a+b+c & b+c & c+a \\ d+e+f & e+f & f+d \\ g+h+k & h+k & k+g \end{vmatrix}" />
                        <p>第 1 列から第 2 列を引く（<InlineMath math="C_1 \leftarrow C_1 - C_2" />）と、</p>
                        <BlockMath math="= 2\begin{vmatrix} a & b+c & c+a \\ d & e+f & f+d \\ g & h+k & k+g \end{vmatrix}" />
                        <p>第 3 列から第 1 列を引く（<InlineMath math="C_3 \leftarrow C_3 - C_1" />）と、</p>
                        <BlockMath math="= 2\begin{vmatrix} a & b+c & c \\ d & e+f & f \\ g & h+k & k \end{vmatrix}" />
                        <p>第 2 列から第 3 列を引く（<InlineMath math="C_2 \leftarrow C_2 - C_3" />）と、</p>
                        <BlockMath math="= 2\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & k \end{vmatrix}." />
                        <p>
                            ここで、ある列に別の列の定数倍を加えても行列式は変わらない（Theorem 4.4-2 の性質から導かれる）ことを用いた。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q9 */}
                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> が <InlineMath math="A^2 = A" />（べき等行列）を満たすとき、
                        <InlineMath math="\det(A) = 0" /> または <InlineMath math="\det(A) = 1" /> であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="A^2 = A" /> の両辺の行列式をとる。
                            積の行列式の性質 <InlineMath math="\det(AB) = \det(A)\det(B)" /> より、
                        </p>
                        <BlockMath math="\det(A^2) = \det(A) \cdot \det(A) = (\det(A))^2." />
                        <p>一方、<InlineMath math="A^2 = A" /> なので <InlineMath math="\det(A^2) = \det(A)" />。したがって、</p>
                        <BlockMath math="(\det(A))^2 = \det(A)." />
                        <p><InlineMath math="d = \det(A)" /> とおくと <InlineMath math="d^2 = d" />、すなわち <InlineMath math="d^2 - d = 0" />、<InlineMath math="d(d-1) = 0" />。</p>
                        <p>よって <InlineMath math="\det(A) = 0" /> または <InlineMath math="\det(A) = 1" />。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q10 */}
                <ExerciseProblem chapterId="4" number={10}>
                    <p>次の <InlineMath math="4 \times 4" /> 行列の行列式を、行基本変形で上三角行列に変形して求めよ。</p>
                    <BlockMath math="A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 3 & 1 & 0 \\ 0 & 1 & -1 & 2 \\ 1 & 0 & 2 & -1 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p><InlineMath math="R_2 - 2R_1" />、<InlineMath math="R_4 - R_1" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & -1 & 1 & -2 \\ 0 & 1 & -1 & 2 \\ 0 & -2 & 2 & -2 \end{pmatrix}" />
                        <p><InlineMath math="R_3 + R_2" />、<InlineMath math="R_4 - 2R_2" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & -1 & 1 & -2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 2 \end{pmatrix}" />
                        <p>
                            第 3 行がすべて <InlineMath math="0" /> なので、行の入れ替え <InlineMath math="R_3 \leftrightarrow R_4" /> を行う。
                            交代性より行列式の符号が反転する。
                        </p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & -1 & 1 & -2 \\ 0 & 0 & 0 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}" />
                        <p>
                            第 4 行がすべて <InlineMath math="0" /> であるから、この行列の行列式は <InlineMath math="0" /> である。
                        </p>
                        <p>
                            行の入れ替えで符号が反転しても、<InlineMath math="(-1) \times 0 = 0" /> なので、
                        </p>
                        <BlockMath math="\det(A) = 0." />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
