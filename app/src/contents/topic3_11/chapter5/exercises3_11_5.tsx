import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_11_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        有限次元ベクトル空間 <InlineMath math="V" /> の 2 つの順序付き基底 <InlineMath math="\mathcal{B}, \mathcal{B}'" /> が<b>同じ向き</b>である（Definition 5.1-1）とは、基底変換行列 <InlineMath math="P" /> の行列式がどのような条件を満たすことか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.1-1 より、変換行列 <InlineMath math="P" /> の行列式が正、すなわち <InlineMath math="\det P > 0" /> であることをいう。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        <InlineMath math="n" /> 次元ベクトル空間における <b>体積形式</b>（Definition 5.2-1）とは、どの次数（型）の交代テンソルのことか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.2-1 より、次数 <InlineMath math="n" /> の交代形式（最高次形式）、すなわち <InlineMath math="\bigwedge^n(V^*)" /> の非零元のことをいう。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        ベクトルの組 <InlineMath math="v_1, \ldots, v_k" /> に対して定義される <b>グラム行列</b> <InlineMath math="G" />（Definition 5.3-1）の各成分 <InlineMath math="G_{ij}" /> は、どのような値で与えられるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.3-1 より、ベクトル同士の内積、すなわち <InlineMath math="G_{ij} = \langle v_i, v_j \rangle" /> で与えられる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> において、標準基底 <InlineMath math="(e_1, e_2)" /> と基底 <InlineMath math="\mathcal{B}' = (e_1 + e_2, e_1 - e_2)" /> を考える。この二つの基底が同じ向きか逆の向きかを判定せよ（Example 5.1-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            標準基底から <InlineMath math="\mathcal{B}'" /> への変換行列 <InlineMath math="P" /> は、
                            <BlockMath math="P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" />
                            である。その行列式を計算すると、
                            <BlockMath math="\det P = 1(-1) - 1(1) = -2" />
                            となる（Example 5.1-1）。
                        </p>
                        <p>
                            <InlineMath math="\det P < 0" /> であるため、これらは<b>逆の向き</b>である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        <InlineMath math="\mathbb{R}^3" /> における <b>空間反転（パリティ変換）</b> <InlineMath math="P(v) = -v" /> は、空間の向きを保つか反転させるか。理由とともに述べよ（Example 5.1-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 5.1-2 より、空間反転を表す行列は <InlineMath math="-I" />（3次単位行列のマイナス）である。
                        </p>
                        <p>
                            その行列式は <InlineMath math="\det(-I) = (-1)^3 = -1" /> となり、負の値をとる。
                        </p>
                        <p>
                            Definition 5.1-3 より、行列式が負であるため、この写像は空間の向きを<b>反転させる</b>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> の体積形式 <InlineMath math="\Omega = e^1 \wedge e^2" /> に対して、写像 <InlineMath math="f(e_1) = 2e_1, f(e_2) = 3e_2" /> によるプルバック <InlineMath math="f^* \Omega" /> を計算せよ（Example 5.2-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.2-1 より、<InlineMath math="f^* \Omega = \det(f) \Omega" /> である。
                        </p>
                        <p>
                            この写像の行列式は <InlineMath math="\det(f) = 2 \times 3 = 6" /> である。したがって、
                            <BlockMath math="f^* \Omega = 6 e^1 \wedge e^2" />
                            となる。これは面積が 6 倍に拡大されることを意味する（Example 5.2-2）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        <InlineMath math="v_1 = (1, 1, 0), v_2 = (0, 1, 1)" /> の張る平行四辺形の面積を、グラム行列式（Theorem 5.3-1）を用いて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            グラム行列 <InlineMath math="G" /> を計算する。
                            <BlockMath math="\begin{aligned} G_{11} &= \langle v_1, v_1 \rangle = 1^2 + 1^2 = 2 \\ G_{12} = G_{21} &= \langle v_1, v_2 \rangle = 1 \cdot 0 + 1 \cdot 1 + 0 \cdot 1 = 1 \\ G_{22} &= \langle v_2, v_2 \rangle = 1^2 + 1^2 = 2 \end{aligned}" />
                            したがって <InlineMath math="G = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}" /> である。
                        </p>
                        <p>
                            グラム行列式は <InlineMath math="\det G = 2 \cdot 2 - 1 \cdot 1 = 3" />。
                            Theorem 5.3-1 より、面積の 2 乗がこの値になるため、面積は <InlineMath math="\sqrt{3}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        基底間の「向き」の関係 <InlineMath math="\sim" /> が、順序付き基底全体の集合上で<b>推移律</b>を満たすことを証明せよ（Proposition 5.1-1 の証明参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            3 つの基底を <InlineMath math="\mathcal{B}, \mathcal{B}', \mathcal{B}''" /> とし、<InlineMath math="\mathcal{B} \sim \mathcal{B}'" /> かつ <InlineMath math="\mathcal{B}' \sim \mathcal{B}''" /> と仮定する。
                        </p>
                        <p>
                            変換行列をそれぞれ <InlineMath math="P" />（<InlineMath math="\mathcal{B} \to \mathcal{B}'" />）、<InlineMath math="Q" />（<InlineMath math="\mathcal{B}' \to \mathcal{B}''" />）とすると、定義より <InlineMath math="\det P > 0" /> かつ <InlineMath math="\det Q > 0" /> である。
                        </p>
                        <p>
                            直接の変換行列（<InlineMath math="\mathcal{B} \to \mathcal{B}''" />）は積 <InlineMath math="PQ" /> で与えられる。行列式の性質から
                            <BlockMath math="\det(PQ) = \det(P) \det(Q)" />
                            である。
                        </p>
                        <p>
                            正の実数同士の積は正であるため、<InlineMath math="\det(PQ) > 0" /> となり、<InlineMath math="\mathcal{B} \sim \mathcal{B}''" /> が成り立つ。これにより推移律が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        体積形式 <InlineMath math="\Omega" /> が <b>線形従属</b> なベクトルの組に対して必ず <InlineMath math="0" /> を返す（Proposition 5.2-1）ことを、ウェッジ積の性質を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 5.2-1 の証明より、ベクトル <InlineMath math="v_1, \ldots, v_n" /> が線形従属であるならば、それらのウェッジ積は <InlineMath math="v_1 \wedge \cdots \wedge v_n = 0" /> となる（Proposition 4.1-2 の結果）。
                        </p>
                        <p>
                            体積形式 <InlineMath math="\Omega \in \bigwedge^n(V^*)" /> は、ウェッジ積空間 <InlineMath math="\bigwedge^n(V)" /> 上の線形機能として、自然なペアリングを介して
                            <BlockMath math="\Omega(v_1, \ldots, v_n) = \Omega(v_1 \wedge \cdots \wedge v_n)" />
                            という評価として定まる。
                        </p>
                        <p>
                            入力である元自体が零元 <InlineMath math="0 \in \bigwedge^n(V)" /> であるため、その像は線形性によりスカラーの <InlineMath math="0" /> となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        ベクトルの組 <InlineMath math="v_1, \ldots, v_k" /> が線形従属であることと、その <b>グラム行列式</b> <InlineMath math="\det G" /> が <InlineMath math="0" /> であることが同値である（Proposition 5.3-1）ことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 5.3-1 の証明の通り、列ベクトルとして <InlineMath math="v_i" /> を持つ行列を <InlineMath math="A" /> とすると、グラム行列は <InlineMath math="G = A^T A" /> と書ける。
                        </p>
                        <p>
                            ここで、任意のベクトル <InlineMath math="x" /> に対して、
                            <BlockMath math="Gx = 0 \iff x^T G x = 0 \iff x^T A^T A x = 0 \iff \|Ax\|^2 = 0 \iff Ax = 0" />
                            が成り立つ。
                        </p>
                        <p>
                            したがって、核（kernel）の次元は一致し、<InlineMath math="\det G = 0" />（すなわち <InlineMath math="G" /> が正則でない）ことは <InlineMath math="Ax = 0" /> が非自明な解を持つことと同値である。
                        </p>
                        <p>
                            これは行列 <InlineMath math="A" /> の列ベクトル <InlineMath math="v_i" /> が線形従属であることそのものであるため、同値性が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
