import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_12_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        被覆写像 <InlineMath math="p : \tilde{X} \to X" /> の定義（Definition 6.1-1）において、底空間 <InlineMath math="X" /> の点 <InlineMath math="x" /> の「均等被覆近傍（evenly covered neighborhood）」<InlineMath math="U" /> が満たすべき条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.1-1 より、逆像 <InlineMath math="p^{-1}(U)" /> が互いに素な開集合の和 <InlineMath math="\bigsqcup V_\alpha" /> として表され、各シート <InlineMath math="V_\alpha" /> への制限写像 <InlineMath math="p|_{V_\alpha} : V_\alpha \to U" /> が同相写像となることである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        指数写像 <InlineMath math="p : \mathbb{R} \to S^1, p(t) = e^{2\pi i t}" />（Example 6.1-1）において、点 <InlineMath math="1 \in S^1" /> のファイバー（逆像）はどのような集合になるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 6.1-1 より、<InlineMath math="e^{2\pi i t} = 1" /> となる実数 <InlineMath math="t" /> 全体、すなわち <b>整数全体の集合 <InlineMath math="\mathbb{Z}" /></b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        <b>道の持ち上げ定理</b>（Theorem 6.2-1）によれば、底空間上の道 <InlineMath math="\gamma : [0,1] \to X" /> と始点の上にあるリフト <InlineMath math="\tilde{x}_0 \in p^{-1}(\gamma(0))" /> が与えられたとき、持ち上げられた道 <InlineMath math="\tilde{\gamma}" /> の一意性はどのように保証されるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.2-1 より、条件を満たすリフト <InlineMath math="\tilde{\gamma}" /> は <b>ただ一つ存在する</b> と保証されている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        被覆写像 <InlineMath math="p : \tilde{X} \to X" /> が必ず開写像（開集合を開集合に写す写像）であることを、定義に基づいて簡潔に説明せよ（Proposition 6.1-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 6.1-1 より、被覆写像は局所同相写像である。任意の開集合 <InlineMath math="\tilde{W} \subset \tilde{X}" /> の各点において、局所的に同相な開近傍が取れ、その像も <InlineMath math="X" /> の開集合となる。それらの和集合も開集合であるため、像 <InlineMath math="p(\tilde{W})" /> は開集合となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        円周から円周への <InlineMath math="n" />-重被覆 <InlineMath math="p_n : S^1 \to S^1, p_n(z) = z^n" /> において、<InlineMath math="S^1" /> をちょうど 1 周するループ <InlineMath math="\gamma(t) = e^{2\pi i t}" /> を被覆空間側へ持ち上げたとき、それはループになるか。理由とともに答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>ループにはならない。</b>
                        </p>
                        <p>
                            例えば始点を <InlineMath math="\tilde{z}_0 = 1" /> とすると、持ち上げられた道は <InlineMath math="\tilde{\gamma}(t) = e^{2\pi i t / n}" /> となる（<InlineMath math="n \geq 2" /> とする）。終点は <InlineMath math="\tilde{\gamma}(1) = e^{2\pi i / n}" /> であり、これは始点 <InlineMath math="1" /> と一致しないため、ループを構成しない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        道の持ち上げが一意的であることの証明において、区間 <InlineMath math="[0,1]" /> の連結性がどのように使われているか述べよ（Theorem 6.2-1 の証明参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            証明において、2 つの持ち上げが一致する時刻の集合 <InlineMath math="A" /> が開かつ閉であることを示す。空でない開かつ閉集合が存在するとき、全体集合が <b>連結</b> であれば、<InlineMath math="A" /> は全体集合 <InlineMath math="[0,1]" /> に一致せざるを得ない。これにより時刻 0 での一致が全ての時刻での一致を導く。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        ホモトピーの持ち上げ定理（Theorem 6.2-2）において、道ホモトピックな 2 つのループを同じ始点から持ち上げたとき、それらの終点が一致する理由を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.2-2 より、道ホモトピー <InlineMath math="H" /> も一意に持ち上げられる。道ホモトピーの定義より両端点は固定されているため、持ち上げられたホモトピー <InlineMath math="\tilde{H}" /> においても終点の軌跡 <InlineMath math="\tilde{H}(1, s)" /> は一点に留まらなければならない（ファイバーは離散集合であるため）。したがって終点は常に同じ位置になる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        被覆写像 <InlineMath math="p : \tilde{X} \to X" /> は常に <b>局所同相写像</b> であることを証明せよ（Proposition 6.1-1 の証明）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の点 <InlineMath math="\tilde{x} \in \tilde{X}" /> をとる。その像 <InlineMath math="x = p(\tilde{x})" /> に対して、被覆写像の定義より均等被覆近傍 <InlineMath math="U" /> が存在する。
                        </p>
                        <p>
                            定義により <InlineMath math="p^{-1}(U) = \bigsqcup V_\alpha" /> であり、<InlineMath math="\tilde{x}" /> はただ一つのシート（これを <InlineMath math="V_{\alpha_0}" /> とする）に含まれる。
                            被覆写像の条件より、制限写像 <InlineMath math="p|_{V_{\alpha_0}} : V_{\alpha_0} \to U" /> は同相写像である。
                        </p>
                        <p>
                            <InlineMath math="V_{\alpha_0}" /> は <InlineMath math="\tilde{x}" /> の開近傍であり、<InlineMath math="U" /> は <InlineMath math="x" /> の開近傍であって、それらの間に同相写像が存在するため、<InlineMath math="p" /> は局所同相写像である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        写像 <InlineMath math="f : Y \to X" /> の持ち上げ <InlineMath math="\tilde{f} : Y \to \tilde{X}" /> が存在するとき、誘導される準同型の間に包含関係 <InlineMath math="f_*(\pi_1(Y, y_0)) \subset p_*(\pi_1(\tilde{X}, \tilde{x}_0))" /> が成り立つことを証明せよ（Theorem 6.3-1 の必要性の証明）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            持ち上げ <InlineMath math="\tilde{f}" /> が存在すると仮定する。このとき、定義により <InlineMath math="p \circ \tilde{f} = f" /> が成り立つ。
                        </p>
                        <p>
                            基本群の誘導準同型をとると、共変性より <InlineMath math="p_* \circ \tilde{f}_* = f_*" /> が得られる。
                        </p>
                        <p>
                            よって、<InlineMath math="f_*(\pi_1(Y, y_0)) = p_*(\tilde{f}_*(\pi_1(Y, y_0)))" /> である。
                            <InlineMath math="\tilde{f}_*(\pi_1(Y, y_0))" /> は <InlineMath math="\pi_1(\tilde{X}, \tilde{x}_0)" /> の部分群であるため、その像は <InlineMath math="p_*(\pi_1(\tilde{X}, \tilde{x}_0))" /> に含まれる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        単連結な弧状連結空間 <InlineMath math="Y" /> から底空間 <InlineMath math="X" /> への任意の連続写像 <InlineMath math="f : Y \to X" /> は、任意の被覆空間 <InlineMath math="\tilde{X}" /> 上に必ず持ち上げ可能であることを、持ち上げ定理（Theorem 6.3-1）を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.3-1 によれば、持ち上げが存在するための必要十分条件は <InlineMath math="f_*(\pi_1(Y, y_0)) \subset p_*(\pi_1(\tilde{X}, \tilde{x}_0))" /> である。
                        </p>
                        <p>
                            仮定より <InlineMath math="Y" /> は単連結であるため、その基本群は自明群 <InlineMath math="\{e\}" /> である。したがって、誘導写像の像も自明群 <InlineMath math="f_*(\pi_1(Y, y_0)) = \{e\}" /> となる。
                        </p>
                        <p>
                            自明群はどのような群の部分群としても含まれるため、包含関係 <InlineMath math="\{e\} \subset p_*(\pi_1(\tilde{X}, \tilde{x}_0))" /> は必ず成り立つ。ゆえに、持ち上げ定理の条件は常に満たされ、持ち上げが存在する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
