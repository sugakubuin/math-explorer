import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter9() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="9" number={1}>
                    <p>
                        ベクトルの集合 <InlineMath math="S = \{ \boldsymbol{u}_1, \boldsymbol{u}_2, \dots, \boldsymbol{u}_k \}" /> が「正規直交系」であるための2つの条件（正規性と直交性）を、内積の記号を用いてそれぞれ式で表せ（Definition 9.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 正規性：すべての <InlineMath math="i" /> について <InlineMath math="\langle \boldsymbol{u}_i, \boldsymbol{u}_i \rangle = 1" /> （または <InlineMath math="\| \boldsymbol{u}_i \| = 1" />）<br />
                            2. 直交性：<InlineMath math="i \neq j" /> なるすべての <InlineMath math="i, j" /> について <InlineMath math="\langle \boldsymbol{u}_i, \boldsymbol{u}_j \rangle = 0" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={2}>
                    <p>
                        正規直交基底 <InlineMath math="\{ \boldsymbol{u}_1, \dots, \boldsymbol{u}_n \}" /> が与えられているとき、任意のベクトル <InlineMath math="\boldsymbol{v}" /> は <InlineMath math="\boldsymbol{v} = c_1\boldsymbol{u}_1 + \dots + c_n\boldsymbol{u}_n" /> と展開できる。このときの各係数 <InlineMath math="c_i" /> は、<InlineMath math="\boldsymbol{v}" /> と <InlineMath math="\boldsymbol{u}_i" /> を用いてどのように計算できるか（Proposition 9.1-2）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            係数は内積として計算できる。
                        </p>
                        <BlockMath math="c_i = \langle \boldsymbol{v}, \boldsymbol{u}_i \rangle" />
                        <p>（これをフーリエ係数と呼ぶ）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={3}>
                    <p>
                        行列 <InlineMath math="A" /> の「QR分解（<InlineMath math="A = QR" />）」において、行列 <InlineMath math="Q" /> と行列 <InlineMath math="R" /> はそれぞれどのような性質を持つ行列か。簡潔に説明せよ（Theorem 9.4-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong><InlineMath math="Q" />：</strong> 直交行列（または列ベクトルが正規直交系をなす行列。<InlineMath math="Q^T Q = I" /> を満たす）。<br />
                            <strong><InlineMath math="R" />：</strong> 正則な上三角行列（対角成分がすべて正の実数）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="9" number={4}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> のベクトル <InlineMath math="\boldsymbol{v}_1 = \begin{pmatrix} 3 \\ 4 \end{pmatrix}, \boldsymbol{v}_2 = \begin{pmatrix} -1 \\ 2 \end{pmatrix}" /> に対して、グラム・シュミットの直交化法を適用し、正規直交基底 <InlineMath math="\{ \boldsymbol{u}_1, \boldsymbol{u}_2 \}" /> を構成せよ。<br />
                        （標準内積を用いること）
                    </p>
                    <ExerciseSolution>
                        <p><strong>Step 1: <InlineMath math="\boldsymbol{u}_1" /> の構成</strong></p>
                        <p><InlineMath math="\boldsymbol{v}_1" /> のノルムを計算し、正規化する。</p>
                        <BlockMath math="\| \boldsymbol{v}_1 \| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5" />
                        <BlockMath math="\boldsymbol{u}_1 = \frac{1}{5} \begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} 3/5 \\ 4/5 \end{pmatrix}" />

                        <p className="mt-4"><strong>Step 2: <InlineMath math="\boldsymbol{u}_2" /> の構成</strong></p>
                        <p><InlineMath math="\boldsymbol{v}_2" /> から <InlineMath math="\boldsymbol{u}_1" /> 方向の射影を引き算する。</p>
                        <BlockMath math="\langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle = (-1)\left(\frac{3}{5}\right) + 2\left(\frac{4}{5}\right) = \frac{-3 + 8}{5} = \frac{5}{5} = 1" />
                        <BlockMath math="
                            \boldsymbol{w}_2 = \boldsymbol{v}_2 - \langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle \boldsymbol{u}_1 = \begin{pmatrix} -1 \\ 2 \end{pmatrix} - 1 \begin{pmatrix} 3/5 \\ 4/5 \end{pmatrix} = \begin{pmatrix} -8/5 \\ 6/5 \end{pmatrix}
                        " />
                        <p><InlineMath math="\boldsymbol{w}_2" /> のノルムを計算し、正規化する。</p>
                        <BlockMath math="\begin{aligned}
                            \| \boldsymbol{w}_2 \| &= \sqrt{\left(-\frac{8}{5}\right)^2 + \left(\frac{6}{5}\right)^2} = \sqrt{\frac{64 + 36}{25}} \\
                            &= \sqrt{\frac{100}{25}} = \sqrt{4} = 2
                            \end{aligned}
                        " />
                        <BlockMath math="\boldsymbol{u}_2 = \frac{1}{2} \begin{pmatrix} -8/5 \\ 6/5 \end{pmatrix} = \begin{pmatrix} -4/5 \\ 3/5 \end{pmatrix}" />

                        <p className="mt-4"><strong>結論：</strong></p>
                        <p>求める正規直交基底は</p>
                        <BlockMath math="\boldsymbol{u}_1 = \begin{pmatrix} 3/5 \\ 4/5 \end{pmatrix}, \quad \boldsymbol{u}_2 = \begin{pmatrix} -4/5 \\ 3/5 \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={5}>
                    <p>
                        <InlineMath math="\mathbb{R}^3" /> の正規直交基底 <InlineMath math="\boldsymbol{u}_1 = \begin{pmatrix} 1/\sqrt{3} \\ 1/\sqrt{3} \\ 1/\sqrt{3} \end{pmatrix}, \boldsymbol{u}_2 = \begin{pmatrix} 1/\sqrt{2} \\ -1/\sqrt{2} \\ 0 \end{pmatrix}, \boldsymbol{u}_3 = \begin{pmatrix} 1/\sqrt{6} \\ 1/\sqrt{6} \\ -2/\sqrt{6} \end{pmatrix}" /> がある。<br />
                        ベクトル <InlineMath math="\boldsymbol{v} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}" /> をこの基底の線形結合 <InlineMath math="\boldsymbol{v} = c_1\boldsymbol{u}_1 + c_2\boldsymbol{u}_2 + c_3\boldsymbol{u}_3" /> で表すとき、各係数（フーリエ係数） <InlineMath math="c_1, c_2, c_3" /> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>フーリエ係数の公式 <InlineMath math="c_i = \langle \boldsymbol{v}, \boldsymbol{u}_i \rangle" /> を用いて内積を計算する。</p>

                        <p className="mt-2"><strong><InlineMath math="c_1" /> の計算：</strong></p>
                        <BlockMath math="\begin{aligned}
                            c_1 &= \langle \boldsymbol{v}, \boldsymbol{u}_1 \rangle = 1\left(\frac{1}{\sqrt{3}}\right) + 2\left(\frac{1}{\sqrt{3}}\right) + 3\left(\frac{1}{\sqrt{3}}\right) \\
                            &= \frac{6}{\sqrt{3}} = 2\sqrt{3}
                            \end{aligned}
                        " />

                        <p className="mt-2"><strong><InlineMath math="c_2" /> の計算：</strong></p>
                        <BlockMath math="\begin{aligned}
                            c_2 &= \langle \boldsymbol{v}, \boldsymbol{u}_2 \rangle = 1\left(\frac{1}{\sqrt{2}}\right) + 2\left(-\frac{1}{\sqrt{2}}\right) + 3(0) \\
                            &= \frac{1 - 2}{\sqrt{2}} = -\frac{1}{\sqrt{2}} = -\frac{\sqrt{2}}{2}
                            \end{aligned}
                        " />

                        <p className="mt-2"><strong><InlineMath math="c_3" /> の計算：</strong></p>
                        <BlockMath math="\begin{aligned}
                            c_3 &= \langle \boldsymbol{v}, \boldsymbol{u}_3 \rangle = 1\left(\frac{1}{\sqrt{6}}\right) + 2\left(\frac{1}{\sqrt{6}}\right) + 3\left(-\frac{2}{\sqrt{6}}\right) \\
                            &= \frac{1 + 2 - 6}{\sqrt{6}} = -\frac{3}{\sqrt{6}} = -\frac{\sqrt{6}}{2}
                            \end{aligned}
                        " />

                        <p className="mt-4"><strong>結論：</strong></p>
                        <BlockMath math="c_1 = 2\sqrt{3}, \quad c_2 = -\frac{\sqrt{2}}{2}, \quad c_3 = -\frac{\sqrt{6}}{2}" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="9" number={6}>
                    <p>
                        問題4の計算結果を用いて、行列 <InlineMath math="A = \begin{pmatrix} 3 & -1 \\ 4 & 2 \end{pmatrix}" /> の QR分解（<InlineMath math="A = QR" />）を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列 <InlineMath math="A" /> の各列ベクトルは、問題4で用いた <InlineMath math="\boldsymbol{v}_1 = \begin{pmatrix} 3 \\ 4 \end{pmatrix}, \boldsymbol{v}_2 = \begin{pmatrix} -1 \\ 2 \end{pmatrix}" /> である。<br />
                            グラム・シュミット法によって得られた正規直交基底は
                        </p>
                        <BlockMath math="\boldsymbol{u}_1 = \begin{pmatrix} 3/5 \\ 4/5 \end{pmatrix}, \quad \boldsymbol{u}_2 = \begin{pmatrix} -4/5 \\ 3/5 \end{pmatrix}" />
                        <p>であった。</p>

                        <p className="mt-4"><strong>直交行列 <InlineMath math="Q" /> の構成：</strong></p>
                        <p>正規直交ベクトルを列として並べる。</p>
                        <BlockMath math="Q = (\boldsymbol{u}_1, \boldsymbol{u}_2) = \begin{pmatrix} 3/5 & -4/5 \\ 4/5 & 3/5 \end{pmatrix}" />

                        <p className="mt-4"><strong>上三角行列 <InlineMath math="R" /> の構成：</strong></p>
                        <p>
                            定理の導出（Theorem 9.4-1 の証明）より、<InlineMath math="R" /> の各成分 <InlineMath math="r_{ij}" /> は <InlineMath math="r_{ij} = \langle \boldsymbol{v}_j, \boldsymbol{u}_i \rangle" /> （<InlineMath math="j \geq i" />）である。<br />
                            問題4の計算過程で以下の値をすでに求めている。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><InlineMath math="r_{11} = \| \boldsymbol{v}_1 \| = 5" /></li>
                            <li><InlineMath math="r_{12} = \langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle = 1" /></li>
                            <li><InlineMath math="r_{22} = \| \boldsymbol{w}_2 \| = 2" /></li>
                            <li><InlineMath math="r_{21} = 0" />（上三角行列であるため）</li>
                        </ul>
                        <p>したがって、</p>
                        <BlockMath math="R = \begin{pmatrix} 5 & 1 \\ 0 & 2 \end{pmatrix}" />

                        <p className="mt-4"><strong>結論：</strong></p>
                        <BlockMath math="A = QR = \begin{pmatrix} 3/5 & -4/5 \\ 4/5 & 3/5 \end{pmatrix} \begin{pmatrix} 5 & 1 \\ 0 & 2 \end{pmatrix}" />
                        <p className="text-sm text-slate-500 mt-2">（※ 実際に右辺の積を計算すると <InlineMath math="A" /> に一致することが確認できる）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={7}>
                    <p>
                        区間 <InlineMath math="[-1, 1]" /> 上の関数空間 <InlineMath math="C[-1, 1]" /> において、内積を <InlineMath math="\langle f, g \rangle = \int_{-1}^1 f(x)g(x) dx" /> とする。<br />
                        多項式の基底 <InlineMath math="v_1(x) = 1, v_2(x) = x, v_3(x) = x^2" /> に対してグラム・シュミットの直交化法を適用し、最初の3つの正規直交多項式 <InlineMath math="u_1(x), u_2(x), u_3(x)" /> を求めよ。<br />
                        （これらは、ルジャンドル多項式を定数倍して正規化したものに等しい。）
                    </p>
                    <ExerciseSolution>
                        <p><strong>Step 1: <InlineMath math="u_1(x)" /> の構成</strong></p>
                        <BlockMath math="\| v_1 \|^2 = \int_{-1}^1 1^2 dx = \left[ x \right]_{-1}^1 = 2 \implies \| v_1 \| = \sqrt{2}" />
                        <BlockMath math="u_1(x) = \frac{v_1(x)}{\| v_1 \|} = \frac{1}{\sqrt{2}}" />

                        <p className="mt-4"><strong>Step 2: <InlineMath math="u_2(x)" /> の構成</strong></p>
                        <BlockMath math="\langle v_2, u_1 \rangle = \int_{-1}^1 x \left(\frac{1}{\sqrt{2}}\right) dx = 0 \quad (\text{奇関数の積分})" />
                        <p>よって射影成分は <InlineMath math="0" /> であり、<InlineMath math="w_2(x) = v_2(x) - 0 = x" />。</p>
                        <BlockMath math="\| w_2 \|^2 = \int_{-1}^1 x^2 dx = \left[ \frac{1}{3}x^3 \right]_{-1}^1 = \frac{2}{3} \implies \| w_2 \| = \sqrt{\frac{2}{3}}" />
                        <BlockMath math="u_2(x) = \frac{w_2(x)}{\| w_2 \|} = \sqrt{\frac{3}{2}} x" />

                        <p className="mt-4"><strong>Step 3: <InlineMath math="u_3(x)" /> の構成</strong></p>
                        <BlockMath math="\begin{aligned}
                            \langle v_3, u_1 \rangle &= \int_{-1}^1 x^2 \left(\frac{1}{\sqrt{2}}\right) dx \\
                            &= \frac{1}{\sqrt{2}} \left[ \frac{1}{3}x^3 \right]_{-1}^1 = \frac{\sqrt{2}}{3}
                            \end{aligned}
                        " />
                        <BlockMath math="\begin{aligned}
                            \langle v_3, u_2 \rangle &= \int_{-1}^1 x^2 \left(\sqrt{\frac{3}{2}} x\right) dx \\
                            &= \sqrt{\frac{3}{2}} \int_{-1}^1 x^3 dx = 0 \quad (\text{奇関数の積分})
                            \end{aligned}
                        " />
                        <p>これらを用いて直交成分 <InlineMath math="w_3(x)" /> を計算する。</p>
                        <BlockMath math="
                            \begin{aligned}
                            w_3(x) &= v_3(x) - \langle v_3, u_1 \rangle u_1(x) - \langle v_3, u_2 \rangle u_2(x) \\
                            &= x^2 - \left(\frac{\sqrt{2}}{3}\right)\left(\frac{1}{\sqrt{2}}\right) - 0 \\
                            &= x^2 - \frac{1}{3}
                            \end{aligned}
                        " />
                        <p>ノルムを計算し、正規化する。</p>
                        <BlockMath math="
                            \begin{aligned}
                            \| w_3 \|^2 &= \int_{-1}^1 \left(x^2 - \frac{1}{3}\right)^2 dx = \int_{-1}^1 \left(x^4 - \frac{2}{3}x^2 + \frac{1}{9}\right) dx \\
                            &= \left[ \frac{1}{5}x^5 - \frac{2}{9}x^3 + \frac{1}{9}x \right]_{-1}^1 = 2 \left( \frac{1}{5} - \frac{2}{9} + \frac{1}{9} \right) \\
                            &= 2 \left( \frac{9 - 5}{45} \right) = \frac{8}{45} \\
                            \implies &\| w_3 \| = \sqrt{\frac{8}{45}} = \frac{2\sqrt{2}}{3\sqrt{5}} = \frac{2\sqrt{10}}{15}
                            \end{aligned}
                        " />
                        <BlockMath math="
                            u_3(x) = \frac{w_3(x)}{\| w_3 \|} = \frac{3\sqrt{5}}{2\sqrt{2}} \left(x^2 - \frac{1}{3}\right) = \sqrt{\frac{5}{8}} (3x^2 - 1)
                        " />

                        <p className="mt-4"><strong>結論：</strong></p>
                        <BlockMath math="u_1(x) = \frac{1}{\sqrt{2}}, \quad u_2(x) = \sqrt{\frac{3}{2}}x, \quad u_3(x) = \frac{\sqrt{5}}{2\sqrt{2}}(3x^2 - 1)" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
