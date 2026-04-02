import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_11_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        有限次元ベクトル空間 <InlineMath math="V, W" /> に対して定義される <b>自然な線形同型写像</b> <InlineMath math="\mathrm{Hom}(V, W) \cong V^* \otimes W" />（Theorem 6.1-1）において、純粋テンソル <InlineMath math="\phi \otimes w" /> はどのような線形写像に対応するか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.1-1 より、ベクトル <InlineMath math="v \in V" /> に対して
                            <BlockMath math="v \mapsto \phi(v) w" />
                            という階数 1 の線形写像に対応する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        自己準同型写像 <InlineMath math="f : V \to V" /> の <b>トレース <InlineMath math="\mathrm{tr}(f)" /></b>（Corollary 6.1-1）を、テンソル積空間 <InlineMath math="V^* \otimes V" /> における演算として定義せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Corollary 6.1-1 より、縮約写像（自然なペアリング）による像
                            <BlockMath math="\mathrm{tr}(\phi \otimes v) = \phi(v)" />
                            として定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        <InlineMath math="(p,q)" /> 型テンソルに対する <b>縮約（contraction）</b>（Definition 6.3-1）とは、テンソルの階数をどのように変化させる操作か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.3-1 より、反変成分と共変成分を 1 つずつペアリングさせて和をとるため、<InlineMath math="(p,q)" /> 型テンソルを <b><InlineMath math="(p-1, q-1)" /> 型テンソル</b> に変化させる操作である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        線形写像 <InlineMath math="f" /> の標準基底における行列が <InlineMath math="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" /> であるとする。この写像をテンソル空間 <InlineMath math="V^* \otimes V" /> の元として基底 <InlineMath math="\{e^j \otimes e_i\}" /> を用いて展開せよ（Example 6.1-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 6.1-1 より、行列の成分 <InlineMath math="A_{ij}" />（第 <InlineMath math="i" /> 行、第 <InlineMath math="j" /> 列）は、第 <InlineMath math="i" /> 基底ベクトル <InlineMath math="e_i" /> の係数に対応する。
                        </p>
                        <p>
                            したがって、テンソル表示は
                            <BlockMath math="T_f = a (e^1 \otimes e_1) + b (e^2 \otimes e_1) + c (e^1 \otimes e_2) + d (e^2 \otimes e_2)" />
                            となる。添字のペアに注意すること（Example 6.1-2 参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}" /> のトレースが、基底 <InlineMath math="v_1 = (1, 1)^T, v_2 = (1, -1)^T" /> においても不変であることを計算によって確認せよ（Example 6.2-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 6.2-1 と同様の手順で行う。<InlineMath math="\mathrm{tr}(A) = 1 + 1 = 2" /> である。
                        </p>
                        <p>
                            変換行列は <InlineMath math="P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" />、<InlineMath math="P^{-1} = \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" />。
                            <BlockMath math="AP = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ 3 & 1 \end{pmatrix}" />
                            <BlockMath math="P^{-1}AP = \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 3 & -1 \\ 3 & 1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 6 & 0 \\ 0 & -2 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}" />
                        </p>
                        <p>
                            新しいトレースは <InlineMath math="3 + (-1) = 2" /> となり、不変性が確認された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        トレースの <b>巡回性</b> <InlineMath math="\mathrm{tr}(AB) = \mathrm{tr}(BA)" /> を行列 <InlineMath math="A = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}, B = \begin{pmatrix} 3 & 4 \\ 0 & 1 \end{pmatrix}" /> について計算によって示せ（Example 6.2-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 6.2-2 の手順で行う。
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><InlineMath math="AB = \begin{pmatrix} 3 & 4 \\ 6 & 9 \end{pmatrix} \implies \mathrm{tr}(AB) = 3 + 9 = 12" /></li>
                            <li><InlineMath math="BA = \begin{pmatrix} 11 & 4 \\ 2 & 1 \end{pmatrix} \implies \mathrm{tr}(BA) = 11 + 1 = 12" /></li>
                        </ul>
                        <p>
                            よって一致することが確認された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        計量テンソル（行列）が <InlineMath math="g = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}" /> で与えられたとき、反変ベクトル <InlineMath math="v = (1, 0)^T" />（成分 <InlineMath math="v^1=1, v^2=0" />）の共変成分 <InlineMath math="v_i" /> を求めよ（Example 6.3-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            成分計算式 <InlineMath math="v_i = \sum_j g_{ij} v^j" /> を用いる（Example 6.3-2）。
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><InlineMath math="v_1 = g_{11}v^1 + g_{12}v^2 = 2(1) + 1(0) = 2" /></li>
                            <li><InlineMath math="v_2 = g_{21}v^1 + g_{22}v^2 = 1(1) + 2(0) = 1" /></li>
                        </ul>
                        <p>
                            よって共変ベクトルは <InlineMath math="(v_1, v_2) = (2, 1)" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        トレースの <b>基底不変性</b> 通りの証明を、変換行列 <InlineMath math="P" /> と逆行列 <InlineMath math="P^{-1}" /> を用いて完遂せよ（Theorem 6.2-1 の証明参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.2-1 の証明に基づく。
                            新しい基底におけるトレース <InlineMath math="\sum_j (e')^j(f(e'_j))" /> を書くと
                            <BlockMath math="\sum_j \left( \sum_l (P^{-1})^j{}_l e^l \right) \left( f\left( \sum_k P_{kj} e_k \right) \right)" />
                            となる。
                        </p>
                        <p>
                            線形性により
                            <BlockMath math="\sum_j \sum_l \sum_k (P^{-1})^j{}_l P_{kj} \, e^l(f(e_k))" />
                            となり、和の順序を入れ替えて <InlineMath math="\sum_j P_{kj} (P^{-1})^j{}_l = \delta_{kl}" /> を用いると
                            <BlockMath math="\sum_{k,l} \delta_{kl} \, e^l(f(e_k)) = \sum_k e^k(f(e_k))" />
                            が得られる。これにより不変性が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        <InlineMath math="(p,q)" /> 型テンソルの <b>縮約操作が基底変換によって不変</b> である（Proposition 6.3-1）ことを、変換行列の性質を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 6.3-1 の証明に基づく。
                            テンソルの 1 つの反変添字が行列 <InlineMath math="P^{-1}" /> で、1 つの共変添字が行列 <InlineMath math="P" /> で変換される。
                        </p>
                        <p>
                            縮約の計算ではこれらの積の和をとるため、項の中に <InlineMath math="\sum_k (P^{-1})^i{}_k P_{kj} = \delta^i_j" /> が現れる。
                        </p>
                        <p>
                            このクロネッカーのデルタによって、変換行列成分が打ち消し合い、古い基底での和と等しくなる。他の添字（縮約していないもの）の変換則はそのまま残るため、結果として一階級低いテンソルとしての変換則を満たす。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        トレースの <b>巡回性</b> <InlineMath math="\mathrm{tr}(f \circ g) = \mathrm{tr}(g \circ f)" /> を、成分表示を用いた和の記号により証明せよ（Proposition 6.2-1 の証明参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 6.2-1 の具体的な証明手順に従う。
                            <BlockMath math="\mathrm{tr}(f \circ g) = \sum_i \langle e^i, f(g(e_i)) \rangle = \sum_i \sum_j \langle e^i, f(e_j) \rangle \langle e^j, g(e_i) \rangle" />
                        </p>
                        <p>
                            スカラーの積の可換性を用いて順序を入れ替えると、
                            <BlockMath math="\sum_j \sum_i \langle e^j, g(e_i) \rangle \langle e^i, f(e_j) \rangle = \sum_j \langle e^j, g(f(e_j)) \rangle = \mathrm{tr}(g \circ f)" />
                            が得られる。これにより巡回性が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
