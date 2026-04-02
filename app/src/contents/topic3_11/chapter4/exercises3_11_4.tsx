import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_11_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        ベクトル <InlineMath math="v, w" /> に対する <b>ウェッジ積（外積）</b>（Definition 4.1-1）の定義を、交代化作用素 <InlineMath math="\mathrm{Alt}" /> とテンソル積を用いて記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.1-1 より、<InlineMath math="n=2" /> の場合のウェッジ積は、
                            <BlockMath math="v \wedge w = 2!\, \mathrm{Alt}(v \otimes w) = v \otimes w - w \otimes v" />
                            である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        三次元ベクトル空間 <InlineMath math="V" /> における <b>外積代数 <InlineMath math="\bigwedge(V)" /></b>（Definition 4.2-1）の全体の次元はいくつか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.2-1 より、外積代数全体の次元は <InlineMath math="2^m" /> （<InlineMath math="m = \dim V" />）である。
                            <BlockMath math="\dim \bigwedge(V) = 2^3 = 8" />
                            となる（Example 4.2-1 も参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        <InlineMath math="n" /> 次元ベクトル空間 <InlineMath math="V" /> 上の線形写像 <InlineMath math="f : V \to V" /> の <b>行列式 <InlineMath math="\det(f)" /></b>（Definition 4.3-1）は、基底のウェッジ積を用いてどのように定義されるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.3-1 より、基底 <InlineMath math="\{e_1, \ldots, e_n\}" /> に対して、
                            <BlockMath math="f(e_1) \wedge \cdots \wedge f(e_n) = \det(f) \cdot (e_1 \wedge \cdots \wedge e_n)" />
                            を満たすスカラー <InlineMath math="\det(f)" /> として定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> の標準基底を <InlineMath math="e_1, e_2" /> とし、ベクトル <InlineMath math="v = 2e_1 + e_2, \ w = e_1 - 3e_2" /> とする。ウェッジ積 <InlineMath math="v \wedge w" /> を計算し、基底 <InlineMath math="e_1 \wedge e_2" /> のスカラー倍として求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ウェッジ積の双線形性と反対称性（<InlineMath math="e_i \wedge e_i = 0, \ e_2 \wedge e_1 = -e_1 \wedge e_2" />）を用いて展開する（Example 4.2-2 参照）。
                        </p>
                        <BlockMath math="\begin{aligned} (2e_1 + e_2) \wedge (e_1 - 3e_2) &= 2(e_1 \wedge e_1) - 6(e_1 \wedge e_2) + (e_2 \wedge e_1) - 3(e_2 \wedge e_2) \\ &= 0 - 6(e_1 \wedge e_2) - (e_1 \wedge e_2) + 0 \\ &= -7 e_1 \wedge e_2 \end{aligned}" />
                        <p>
                            よって <InlineMath math="-7 e_1 \wedge e_2" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        <InlineMath math="\mathbb{R}^3" /> において、三つのベクトル <InlineMath math="v_1, v_2, v_3" /> が線形従属（一次従属）であるとき、それらのウェッジ積 <InlineMath math="v_1 \wedge v_2 \wedge v_3" /> はどのような値になるか。理由とともに述べよ（Proposition 4.1-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 4.1-2 より、ウェッジ積は <InlineMath math="0" /> となる。
                        </p>
                        <p>
                            理由は、線形従属性よりあるベクトルが他のベクトルの線形結合として表され、展開した際に同じベクトルが2つ以上含まれる項が必ず現れるためである（Example 4.1-2 参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        線形写像 <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}^2" /> の標準基底に関する行列が <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}" /> であるとする。交代形式 <InlineMath math="\omega = e^1 \wedge e^2" /> の <b>プルバック</b> <InlineMath math="f^* \omega" /> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.4-1 より、自己準同型のプルバックは行列式倍となる。
                        </p>
                        <BlockMath math="\det(A) = 1 \times 4 - 2 \times 3 = -2" />
                        <p>
                            したがって、<InlineMath math="f^* \omega = \det(f) \omega = -2 e^1 \wedge e^2" /> である（Example 4.4-2 も参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        写像 <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}^3" /> を <InlineMath math="f(e_1) = f_1, f(e_2) = f_2" /> で定義する。
                        <InlineMath math="\mathbb{R}^3" /> の 2次形式 <InlineMath math="\omega = f^2 \wedge f^3" /> に対するプルバック <InlineMath math="f^* \omega" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.4-1 のプルバックの定義、または代数準同型性（Proposition 4.4-1）を用いて計算する（Example 4.4-1 参照）。
                        </p>
                        <BlockMath math="f^*(f^2 \wedge f^3) = f^* f^2 \wedge f^* f^3" />
                        <p>
                            ここで、<InlineMath math="f^* f^2(e_1) = f^2(f(e_1)) = f^2(f_1) = 0" />, <InlineMath math="f^* f^2(e_2) = f^2(f(e_2)) = f^2(f_2) = 1" /> より <InlineMath math="f^* f^2 = e^2" />。
                            また、<InlineMath math="f^* f^3(e_1) = f^3(f_1) = 0" />, <InlineMath math="f^* f^3(e_2) = f^3(f_2) = 0" /> より <InlineMath math="f^* f^3 = 0" />。
                        </p>
                        <p>
                            よって <InlineMath math="f^* \omega = e^2 \wedge 0 = 0" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        ウェッジ積の <b>反対称性</b> <InlineMath math="v \wedge w = -w \wedge v" /> が成り立つことを、交代化作用素の性質を用いて証明せよ（Proposition 4.1-1 の証明を参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず 2次ウェッジ積の定義より、任意の <InlineMath math="u \in V" /> に対して
                            <BlockMath math="u \wedge u = 2!\, \mathrm{Alt}(u \otimes u)" />
                            は 0 である。
                        </p>
                        <p>
                            ここで、<InlineMath math="u = v + w" /> と置いてウェッジ積をとると、線形性より
                            <BlockMath math="(v + w) \wedge (v + w) = v \wedge v + v \wedge w + w \wedge v + w \wedge w = 0" />
                            となる。
                        </p>
                        <p>
                            ここで <InlineMath math="v \wedge v = 0" /> および <InlineMath math="w \wedge w = 0" /> であることから、
                            <BlockMath math="v \wedge w + w \wedge v = 0 \implies v \wedge w = -w \wedge v" />
                            が得られる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        線形写像の行列式に関する積の公式 <b><InlineMath math="\det(f \circ g) = \det(f)\det(g)" /></b> が成立することを、ウェッジ積の定義を用いて証明せよ（Corollary 4.3-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            前節の定義に従い、<InlineMath math="n" /> 次のウェッジ積空間 <InlineMath math="\bigwedge^n(V)" /> の元に対して線形写像の作用を考える。
                        </p>
                        <p>
                            基底を <InlineMath math="\omega_0 = e_1 \wedge \cdots \wedge e_n" /> とすると、
                            <BlockMath math="\det(f \circ g) \omega_0 = (f \circ g)(e_1) \wedge \cdots \wedge (f \circ g)(e_n)" />
                        </p>
                        <p>
                            右辺は <InlineMath math="f(g(e_1)) \wedge \cdots \wedge f(g(e_n))" /> と書ける。
                            スカラー倍の性質により、<InlineMath math="g" /> の行列式の定義、すなわち <InlineMath math="g(e_1) \wedge \cdots \wedge g(e_n) = \det(g) \omega_0" /> を用いると、
                            <BlockMath math="\begin{aligned} f(g(e_1)) \wedge \cdots \wedge f(g(e_n)) &= \det(f) \cdot (g(e_1) \wedge \cdots \wedge g(e_n)) \\ &= \det(f) (\det(g) \omega_0) \\ &= (\det(f)\det(g)) \omega_0 \end{aligned}" />
                        </p>
                        <p>
                            したがって <InlineMath math="\det(f \circ g) = \det(f)\det(g)" /> が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        <InlineMath math="V" /> を <InlineMath math="m" /> 次元空間、<InlineMath math="W" /> を <InlineMath math="n" /> 次元空間とする。線形写像 <InlineMath math="f : V \to W" /> に対して、プルバック <InlineMath math="f^* : \bigwedge^k(W^*) \to \bigwedge^k(V^*)" /> が well-defined であることを、写像の構成に基づいて簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.4-1 より、<InlineMath math="f^* \omega" /> はベクトル <InlineMath math="v_1, \ldots, v_k \in V" /> を入力とし、スカラー
                            <BlockMath math="\omega(f(v_1), \ldots, f(v_k))" />
                            を返す写像である。
                        </p>
                        <p>
                            ここで、<InlineMath math="f" /> は線形であり、<InlineMath math="\omega" /> は多重線形かつ交代的な形式（交代テンソル）であるため、
                            合成写像としての <InlineMath math="f^* \omega" /> もまた、各 <InlineMath math="v_i" /> について線形であり、変数を入れ替えると符号が反転するという「交代性」を継承する。
                        </p>
                        <p>
                            したがって、<InlineMath math="f^* \omega" /> は確かに <InlineMath math="\bigwedge^k(V^*)" /> の元となり、プルバックは交代形式の空間の間の写像として適切に定まっている。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
