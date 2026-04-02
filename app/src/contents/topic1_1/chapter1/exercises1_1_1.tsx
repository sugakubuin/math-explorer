import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_1_Chapter1() {
    return (
        <div>
            {/* ═══════════════════════════════
                 確認問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="confirmation">

                {/* Q1 */}
                <ExerciseProblem chapterId="1" number={1}>
                    <p>次の等式が成り立つように実数 <InlineMath math="x, y, z" /> の値を定めよ。</p>
                    <BlockMath math="\begin{pmatrix} 2x - 1 \\ y + 3 \\ 4z \end{pmatrix} = \begin{pmatrix} 5 \\ -1 \\ 8 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>ベクトルの相等の定義（Definition 1.1-3）より、各成分が等しいので</p>
                        <BlockMath math="2x - 1 = 5, \quad y + 3 = -1, \quad 4z = 8." />
                        <p>これを解くと</p>
                        <BlockMath math="x = 3, \quad y = -4, \quad z = 2." />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q2 */}
                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        <InlineMath math="\mathbf{a} = \begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}" />、
                        <InlineMath math="\mathbf{b} = \begin{pmatrix} -3 \\ 4 \\ 1 \end{pmatrix}" /> のとき、
                        <InlineMath math="2\mathbf{a} - 3\mathbf{b}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>スカラー倍と差の定義より、</p>
                        <BlockMath math="\begin{aligned} 2\mathbf{a} - 3\mathbf{b} &= 2\begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix} - 3\begin{pmatrix} -3 \\ 4 \\ 1 \end{pmatrix} \\ &= \begin{pmatrix} 2 \\ -4 \\ 6 \end{pmatrix} - \begin{pmatrix} -9 \\ 12 \\ 3 \end{pmatrix} \\ &= \begin{pmatrix} 11 \\ -16 \\ 3 \end{pmatrix}. \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q3 */}
                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        <InlineMath math="\mathbf{a} = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}" />、
                        <InlineMath math="\mathbf{b} = \begin{pmatrix} 1 \\ 4 \\ -2 \end{pmatrix}" /> のとき、
                        内積 <InlineMath math="\mathbf{a} \cdot \mathbf{b}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>内積の定義（Definition 1.3-1）より、</p>
                        <BlockMath math="\mathbf{a} \cdot \mathbf{b} = 2 \cdot 1 + (-1) \cdot 4 + 3 \cdot (-2) = 2 - 4 - 6 = -8." />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            {/* ═══════════════════════════════
                 基本問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="basic">

                {/* Q4 */}
                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        <InlineMath math="\mathbf{a} = \begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix}" /> について、
                        ノルム <InlineMath math="\|\mathbf{a}\|" /> を求め、
                        <InlineMath math="\mathbf{a}" /> と同じ向きの<strong>単位ベクトル</strong>を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>ノルムの定義（Definition 1.3-2）より、</p>
                        <BlockMath math="\|\mathbf{a}\| = \sqrt{1^2 + 2^2 + (-2)^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3." />
                        <p>
                            <InlineMath math="\mathbf{a}" /> と同じ向きの単位ベクトルは <InlineMath math="\displaystyle\frac{\mathbf{a}}{\|\mathbf{a}\|}" /> なので、
                        </p>
                        <BlockMath math="\frac{\mathbf{a}}{\|\mathbf{a}\|} = \frac{1}{3}\begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix} = \begin{pmatrix} 1/3 \\ 2/3 \\ -2/3 \end{pmatrix}." />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q5 */}
                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        <InlineMath math="\mathbf{a} = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}" />、
                        <InlineMath math="\mathbf{b} = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}" /> のなす角 <InlineMath math="\theta" />（<InlineMath math="0 \leq \theta \leq \pi" />）を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>まず内積とノルムを計算する。</p>
                        <BlockMath math="\mathbf{a} \cdot \mathbf{b} = 1 \cdot 1 + 1 \cdot 0 + 0 \cdot 1 = 1." />
                        <BlockMath math="\|\mathbf{a}\| = \sqrt{1 + 1 + 0} = \sqrt{2}, \qquad \|\mathbf{b}\| = \sqrt{1 + 0 + 1} = \sqrt{2}." />
                        <p>なす角の公式より、</p>
                        <BlockMath math="\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\|\|\mathbf{b}\|} = \frac{1}{\sqrt{2} \cdot \sqrt{2}} = \frac{1}{2}." />
                        <p>
                            よって <InlineMath math="\theta = \dfrac{\pi}{3}" />（60°）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q6 */}
                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        次のベクトルの組が<strong>一次独立</strong>か<strong>一次従属</strong>かを判定せよ。
                    </p>
                    <p>
                        (1)&ensp;
                        <InlineMath math="\mathbf{a}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}" />、
                        <InlineMath math="\mathbf{a}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}" />
                    </p>
                    <p>
                        (2)&ensp;
                        <InlineMath math="\mathbf{b}_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}" />、
                        <InlineMath math="\mathbf{b}_2 = \begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix}" />
                    </p>
                    <ExerciseSolution>
                        <p><strong>(1)</strong>&ensp;
                            <InlineMath math="c_1\mathbf{a}_1 + c_2\mathbf{a}_2 = \mathbf{0}" /> とおくと、
                        </p>
                        <BlockMath math="\begin{pmatrix} c_1 \\ c_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
                        <p>
                            より <InlineMath math="c_1 = c_2 = 0" /> のみ。よって<strong>一次独立</strong>。
                        </p>
                        <p className="mt-4"><strong>(2)</strong>&ensp;
                            <InlineMath math="\mathbf{b}_2 = 2\mathbf{b}_1" /> なので、たとえば <InlineMath math="c_1 = 2,\; c_2 = -1" /> とすれば
                        </p>
                        <BlockMath math="2\mathbf{b}_1 - \mathbf{b}_2 = \mathbf{0}" />
                        <p>
                            が成立する。<InlineMath math="(c_1, c_2) \neq (0,0)" /> であるから<strong>一次従属</strong>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q7 */}
                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        <InlineMath math="\mathbf{a} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}" />、
                        <InlineMath math="\mathbf{b} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}" /> のとき、
                        <InlineMath math="\|\mathbf{a} + \mathbf{b}\|" /> と <InlineMath math="\|\mathbf{a}\| + \|\mathbf{b}\|" /> をそれぞれ求め、
                        三角不等式 <InlineMath math="\|\mathbf{a} + \mathbf{b}\| \leq \|\mathbf{a}\| + \|\mathbf{b}\|" /> が成り立つことを確かめよ。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\mathbf{a} + \mathbf{b} = \begin{pmatrix} 4 \\ 1 \end{pmatrix}, \qquad \|\mathbf{a} + \mathbf{b}\| = \sqrt{16 + 1} = \sqrt{17} \approx 4.12." />
                        <BlockMath math="\|\mathbf{a}\| = \sqrt{9 + 1} = \sqrt{10} \approx 3.16, \\ \|\mathbf{b}\| = \sqrt{1 + 4} = \sqrt{5} \approx 2.24." />
                        <p>よって、</p>
                        <BlockMath math="\|\mathbf{a}\| + \|\mathbf{b}\| = \sqrt{10} + \sqrt{5} \approx 5.40." />
                        <p>
                            <InlineMath math="\sqrt{17} < \sqrt{10} + \sqrt{5}" /> なので、三角不等式は確かに成り立つ。
                        </p>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            （等号は <InlineMath math="\mathbf{a}" /> と <InlineMath math="\mathbf{b}" /> が同じ向き、
                            すなわち正のスカラー倍の関係にあるときに限り成立する。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            {/* ═══════════════════════════════
                 発展問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="advanced">

                {/* Q8 */}
                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        任意の <InlineMath math="\mathbf{a}, \mathbf{b} \in \mathbb{R}^n" /> に対し、次の等式を証明せよ。
                    </p>
                    <BlockMath math="\|\mathbf{a} + \mathbf{b}\|^2 + \|\mathbf{a} - \mathbf{b}\|^2 = 2(\|\mathbf{a}\|^2 + \|\mathbf{b}\|^2)" />
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        （この等式は<strong>平行四辺形の法則</strong>と呼ばれます。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\|\mathbf{x}\|^2 = \mathbf{x} \cdot \mathbf{x}" /> であることを用いて、左辺を展開する。
                        </p>
                        <BlockMath math="\|\mathbf{a} + \mathbf{b}\|^2 = (\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b}) = \|\mathbf{a}\|^2 + 2\,\mathbf{a} \cdot \mathbf{b} + \|\mathbf{b}\|^2," />
                        <BlockMath math="\|\mathbf{a} - \mathbf{b}\|^2 = (\mathbf{a} - \mathbf{b}) \cdot (\mathbf{a} - \mathbf{b}) = \|\mathbf{a}\|^2 - 2\,\mathbf{a} \cdot \mathbf{b} + \|\mathbf{b}\|^2." />
                        <p>辺々を加えると、</p>
                        <BlockMath math="\|\mathbf{a} + \mathbf{b}\|^2 + \|\mathbf{a} - \mathbf{b}\|^2 = 2\|\mathbf{a}\|^2 + 2\|\mathbf{b}\|^2 = 2(\|\mathbf{a}\|^2 + \|\mathbf{b}\|^2)." />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q9 */}
                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        コーシー・シュワルツの不等式を用いて、
                        任意の実数 <InlineMath math="a_1, a_2, \ldots, a_n" /> に対し次の不等式が成り立つことを示せ。
                    </p>
                    <BlockMath math="\left(\sum_{i=1}^{n} a_i \right)^2 \leq n \sum_{i=1}^{n} a_i^2" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix}" />、
                            <InlineMath math="\mathbf{b} = \begin{pmatrix} 1 \\ 1 \\ \vdots \\ 1 \end{pmatrix} \in \mathbb{R}^n" /> とおく。
                        </p>
                        <p>このとき、</p>
                        <BlockMath math="\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^{n} a_i, \qquad \|\mathbf{a}\|^2 = \sum_{i=1}^{n} a_i^2, \qquad \|\mathbf{b}\|^2 = n." />
                        <p>コーシー・シュワルツの不等式 <InlineMath math="|\mathbf{a} \cdot \mathbf{b}| \leq \|\mathbf{a}\|\|\mathbf{b}\|" /> の両辺を2乗すると、</p>
                        <BlockMath math="(\mathbf{a} \cdot \mathbf{b})^2 \leq \|\mathbf{a}\|^2\|\mathbf{b}\|^2." />
                        <p>上の計算結果を代入すれば、</p>
                        <BlockMath math="\left(\sum_{i=1}^{n} a_i\right)^2 \leq n \sum_{i=1}^{n} a_i^2." />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q10 */}
                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        <InlineMath math="\mathbf{a}, \mathbf{b} \in \mathbb{R}^n" /> が一次独立であるとき、
                        <InlineMath math="\mathbf{a} + \mathbf{b}" /> と <InlineMath math="\mathbf{a} - \mathbf{b}" /> も一次独立であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="c_1(\mathbf{a} + \mathbf{b}) + c_2(\mathbf{a} - \mathbf{b}) = \mathbf{0}" /> とおく。左辺を整理すると、
                        </p>
                        <BlockMath math="(c_1 + c_2)\mathbf{a} + (c_1 - c_2)\mathbf{b} = \mathbf{0}." />
                        <p>
                            <InlineMath math="\mathbf{a}" /> と <InlineMath math="\mathbf{b}" /> は一次独立であるから、
                        </p>
                        <BlockMath math="c_1 + c_2 = 0, \qquad c_1 - c_2 = 0." />
                        <p>第1式と第2式を加えると <InlineMath math="2c_1 = 0" />、すなわち <InlineMath math="c_1 = 0" />。
                            これを第1式に代入して <InlineMath math="c_2 = 0" />。</p>
                        <p>
                            以上より <InlineMath math="c_1 = c_2 = 0" /> のみが解であるから、
                            <InlineMath math="\mathbf{a} + \mathbf{b}" /> と <InlineMath math="\mathbf{a} - \mathbf{b}" /> は一次独立である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
