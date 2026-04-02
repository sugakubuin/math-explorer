import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_1_Chapter3() {
    return (
        <div>
            {/* ═══════════════════════════════
                 確認問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="confirmation">

                {/* Q1 */}
                <ExerciseProblem chapterId="3" number={1}>
                    <p>次の連立方程式を <InlineMath math="A\mathbf{x} = \mathbf{b}" /> の形で表し、拡大係数行列 <InlineMath math="[A \mid \mathbf{b}]" /> を書け。</p>
                    <BlockMath math="\begin{cases} 2x - y + 3z = 1 \\ x + 4y = -2 \\ -3x + 2y - z = 5 \end{cases}" />
                    <ExerciseSolution>
                        <p>Definition 3.1-1, 3.1-2 より、</p>
                        <BlockMath math="A = \begin{pmatrix} 2 & -1 & 3 \\ 1 & 4 & 0 \\ -3 & 2 & -1 \end{pmatrix}, \quad \mathbf{x} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 1 \\ -2 \\ 5 \end{pmatrix}." />
                        <p>2つ目の式に <InlineMath math="z" /> の項がないので、係数は <InlineMath math="0" /> である。拡大係数行列は</p>
                        <BlockMath math="[A \mid \mathbf{b}] = \begin{pmatrix} 2 & -1 & 3 & 1 \\ 1 & 4 & 0 & -2 \\ -3 & 2 & -1 & 5 \end{pmatrix}." />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q2 */}
                <ExerciseProblem chapterId="3" number={2}>
                    <p>次の行列に行基本変形 <InlineMath math="R_2 \leftarrow R_2 - 3R_1" /> を施した結果を書け。</p>
                    <BlockMath math="\begin{pmatrix} 1 & 2 & 4 \\ 3 & 5 & 7 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>Definition 3.2-1 の第 3 種の行基本変形より、2 行目から 1 行目の 3 倍を引く。</p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & 4 \\ 3-3(1) & 5-3(2) & 7-3(4) \end{pmatrix} = \begin{pmatrix} 1 & 2 & 4 \\ 0 & -1 & -5 \end{pmatrix}." />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q3 */}
                <ExerciseProblem chapterId="3" number={3}>
                    <p>次の行列の階数（rank）を求めよ。</p>
                    <BlockMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 6 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>行基本変形 <InlineMath math="R_2 \leftarrow R_2 - 3R_1" /> を施すと、</p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 \\ 0 & 0 \end{pmatrix}." />
                        <p>非零行は 1 行だけなので、Definition 3.4-1 より <InlineMath math="\mathrm{rank}(A) = 1" />。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            {/* ═══════════════════════════════
                 基本問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="basic">

                {/* Q4 */}
                <ExerciseProblem chapterId="3" number={4}>
                    <p>次の連立方程式をガウスの消去法（掃き出し法）で解け。</p>
                    <BlockMath math="\begin{cases} x + y + z = 6 \\ 2x - y + z = 3 \\ x + 2y - z = 2 \end{cases}" />
                    <ExerciseSolution>
                        <p>拡大係数行列を作り、行基本変形を行う。</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 1 & 6 \\ 2 & -1 & 1 & 3 \\ 1 & 2 & -1 & 2 \end{pmatrix}" />
                        <p><InlineMath math="R_2 \leftarrow R_2 - 2R_1" />、<InlineMath math="R_3 \leftarrow R_3 - R_1" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 1 & 6 \\ 0 & -3 & -1 & -9 \\ 0 & 1 & -2 & -4 \end{pmatrix}" />
                        <p><InlineMath math="R_2 \leftrightarrow R_3" />（計算を簡単にするため）：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 1 & 6 \\ 0 & 1 & -2 & -4 \\ 0 & -3 & -1 & -9 \end{pmatrix}" />
                        <p><InlineMath math="R_3 \leftarrow R_3 + 3R_2" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 1 & 6 \\ 0 & 1 & -2 & -4 \\ 0 & 0 & -7 & -21 \end{pmatrix}" />
                        <p><InlineMath math="R_3 \leftarrow -\tfrac{1}{7}R_3" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 1 & 6 \\ 0 & 1 & -2 & -4 \\ 0 & 0 & 1 & 3 \end{pmatrix}" />
                        <p>後退代入：<InlineMath math="R_2 \leftarrow R_2 + 2R_3" />、<InlineMath math="R_1 \leftarrow R_1 - R_3" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 0 & 3 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & 3 \end{pmatrix}" />
                        <p><InlineMath math="R_1 \leftarrow R_1 - R_2" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & 3 \end{pmatrix}" />
                        <p>よって <InlineMath math="x = 1,\; y = 2,\; z = 3" />。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q5 */}
                <ExerciseProblem chapterId="3" number={5}>
                    <p>次の連立方程式をガウスの消去法で解け。</p>
                    <BlockMath math="\begin{cases} x + 2y + 3z = 1 \\ 2x + 4y + 7z = 4 \\ 3x + 6y + 10z = 5 \end{cases}" />
                    <ExerciseSolution>
                        <p>拡大係数行列に行基本変形を施す。</p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & 3 & 1 \\ 2 & 4 & 7 & 4 \\ 3 & 6 & 10 & 5 \end{pmatrix}" />
                        <p><InlineMath math="R_2 - 2R_1" />、<InlineMath math="R_3 - 3R_1" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & 3 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 1 & 2 \end{pmatrix}" />
                        <p><InlineMath math="R_3 - R_2" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & 3 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}" />
                        <p>後退代入：<InlineMath math="R_1 - 3R_2" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & 0 & -5 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}" />
                        <p>
                            <InlineMath math="\mathrm{rank}(A) = \mathrm{rank}([A|\mathbf{b}]) = 2 < 3 = n" /> なので不定（Theorem 3.4-1）。
                            <InlineMath math="y" /> が自由変数であり、<InlineMath math="y = t" />（任意定数）とおくと
                        </p>
                        <BlockMath math="z = 2, \qquad x = -5 - 2t." />
                        <p>すなわち、</p>
                        <BlockMath math="\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} -5 \\ 0 \\ 2 \end{pmatrix} + t\begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} \quad (t \in \mathbb{R})." />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q6 */}
                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        次の連立方程式が解を持たないことを、ルシェ・カペリの定理（Theorem 3.4-1）を用いて示せ。
                    </p>
                    <BlockMath math="\begin{cases} x + y + z = 1 \\ 2x + 2y + 2z = 5 \end{cases}" />
                    <ExerciseSolution>
                        <p>拡大係数行列を変形する。</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 1 & 1 \\ 2 & 2 & 2 & 5 \end{pmatrix} \xrightarrow{R_2 - 2R_1} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 3 \end{pmatrix}." />
                        <p>
                            係数行列部分の非零行は 1 行なので <InlineMath math="\mathrm{rank}(A) = 1" />。
                            拡大係数行列の非零行は 2 行なので <InlineMath math="\mathrm{rank}([A|\mathbf{b}]) = 2" />。
                        </p>
                        <p>
                            <InlineMath math="\mathrm{rank}(A) = 1 < 2 = \mathrm{rank}([A|\mathbf{b}])" /> であるから、
                            Theorem 3.4-1 より解は存在しない（不能）。
                        </p>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            （第2行目 <InlineMath math="0 = 3" /> が矛盾を表している。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q7 */}
                <ExerciseProblem chapterId="3" number={7}>
                    <p>次の行列の階数を求めよ。</p>
                    <BlockMath math="A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 3 & 0 \\ 3 & 5 & 1 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>行基本変形を施す。</p>
                        <p><InlineMath math="R_2 - 2R_1" />、<InlineMath math="R_3 - 3R_1" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & 1 \\ 0 & -1 & -2 \\ 0 & -1 & -2 \end{pmatrix}" />
                        <p><InlineMath math="R_3 - R_2" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & 1 \\ 0 & -1 & -2 \\ 0 & 0 & 0 \end{pmatrix}" />
                        <p>非零行は 2 行なので <InlineMath math="\mathrm{rank}(A) = 2" />。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            {/* ═══════════════════════════════
                 発展問題
            ═══════════════════════════════ */}
            <ExerciseCategory type="advanced">

                {/* Q8 */}
                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        実数 <InlineMath math="a" /> の値によって、次の連立方程式の解の個数がどう変わるか分類せよ。
                    </p>
                    <BlockMath math="\begin{cases} x + y = 2 \\ ax + y = a + 1 \end{cases}" />
                    <ExerciseSolution>
                        <p>拡大係数行列を変形する。</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 2 \\ a & 1 & a+1 \end{pmatrix} \xrightarrow{R_2 - aR_1} \begin{pmatrix} 1 & 1 & 2 \\ 0 & 1-a & 1-a \end{pmatrix}." />
                        <p><strong>場合 1：</strong><InlineMath math="a \neq 1" /> のとき、<InlineMath math="1 - a \neq 0" /> なので 2 行目を <InlineMath math="(1-a)" /> で割れる。</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \end{pmatrix}" />
                        <p>
                            <InlineMath math="\mathrm{rank}(A) = \mathrm{rank}([A|\mathbf{b}]) = 2 = n" /> なので一意解。
                            後退代入より <InlineMath math="y = 1,\; x = 1" />。
                        </p>
                        <p className="mt-3"><strong>場合 2：</strong><InlineMath math="a = 1" /> のとき、</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 2 \\ 0 & 0 & 0 \end{pmatrix}." />
                        <p>
                            <InlineMath math="\mathrm{rank}(A) = \mathrm{rank}([A|\mathbf{b}]) = 1 < 2 = n" /> なので不定。
                            <InlineMath math="y = t" /> とおけば <InlineMath math="x = 2 - t" />（<InlineMath math="t \in \mathbb{R}" />）。
                        </p>
                        <p className="mt-3">
                            まとめると、<InlineMath math="a \neq 1" /> のとき一意解 <InlineMath math="(x,y) = (1,1)" />、
                            <InlineMath math="a = 1" /> のとき無数の解。いずれの場合も解なし（不能）にはならない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q9 */}
                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        同次連立方程式 <InlineMath math="A\mathbf{x} = \mathbf{0}" /> について、
                        <InlineMath math="\mathrm{rank}(A) < n" />（未知数の個数）ならば非自明な解（<InlineMath math="\mathbf{x} \neq \mathbf{0}" />）が存在することを、
                        Theorem 3.4-1 を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\mathbf{b} = \mathbf{0}" /> のとき、拡大係数行列 <InlineMath math="[A|\mathbf{0}]" /> の最後の列はすべて <InlineMath math="0" /> である。
                            行基本変形を施しても最後の列は <InlineMath math="0" /> のままなので、拡大係数行列において「左側がすべて <InlineMath math="0" /> で右側だけ非零」という行は決して生じない。
                            したがって
                        </p>
                        <BlockMath math="\mathrm{rank}(A) = \mathrm{rank}([A|\mathbf{0}])." />
                        <p>
                            Theorem 3.4-1 より、<InlineMath math="\mathrm{rank}(A) = \mathrm{rank}([A|\mathbf{0}]) < n" /> のとき、
                            解は無数に存在し、自由度は <InlineMath math="n - \mathrm{rank}(A) \geq 1" /> である。
                            自明解 <InlineMath math="\mathbf{x} = \mathbf{0}" /> 以外にも解があるので、非自明な解が存在する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* Q10 */}
                <ExerciseProblem chapterId="3" number={10}>
                    <p>次の連立方程式をガウスの消去法で解き、解を「特殊解＋同次方程式の一般解」の形で表せ。</p>
                    <BlockMath math="\begin{cases} x_1 + x_2 + x_3 + x_4 = 2 \\ x_1 + 2x_2 + x_3 + 3x_4 = 4 \end{cases}" />
                    <ExerciseSolution>
                        <p>拡大係数行列を変形する。</p>
                        <BlockMath math="\begin{pmatrix} 1 & 1 & 1 & 1 & 2 \\ 1 & 2 & 1 & 3 & 4 \end{pmatrix} \xrightarrow{R_2 - R_1} \begin{pmatrix} 1 & 1 & 1 & 1 & 2 \\ 0 & 1 & 0 & 2 & 2 \end{pmatrix}" />
                        <p><InlineMath math="R_1 - R_2" />：</p>
                        <BlockMath math="\begin{pmatrix} 1 & 0 & 1 & -1 & 0 \\ 0 & 1 & 0 & 2 & 2 \end{pmatrix}" />
                        <p>
                            ピボット変数は <InlineMath math="x_1, x_2" />。自由変数は <InlineMath math="x_3 = s,\; x_4 = t" /> とおくと、
                        </p>
                        <BlockMath math="x_1 = -s + t, \qquad x_2 = 2 - 2t." />
                        <p>ベクトル形式にまとめると、</p>
                        <BlockMath math="\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \underbrace{\begin{pmatrix} 0 \\ 2 \\ 0 \\ 0 \end{pmatrix}}_{\text{特殊解}} + s\underbrace{\begin{pmatrix} -1 \\ 0 \\ 1 \\ 0 \end{pmatrix}}_{\text{同次解1}} + t\underbrace{\begin{pmatrix} 1 \\ -2 \\ 0 \\ 1 \end{pmatrix}}_{\text{同次解2}} \quad (s, t \in \mathbb{R})." />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
