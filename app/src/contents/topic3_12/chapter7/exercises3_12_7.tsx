import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_12_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        被覆写像 <InlineMath math="p : \tilde{X} \to X" /> の <b>被覆変換（デック変換）</b>（Definition 7.1-1）が満たすべき等式を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 7.1-1 より、<InlineMath math="p \circ \varphi = p" /> を満たす同相写像 <InlineMath math="\varphi : \tilde{X} \to \tilde{X}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        <b>普遍被覆空間</b>（Definition 7.2-1）の定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 7.2-1 より、被覆空間 <InlineMath math="\tilde{X}" /> が <b>単連結（simply connected）</b> であるとき、それを普遍被覆空間と呼ぶ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        被覆空間の分類定理（Theorem 7.3-1）によれば、基点付き被覆空間 <InlineMath math="(\tilde{X}, \tilde{x}_0)" /> の同型類は何と 1 対 1 に対応するか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 7.3-1 より、基本群 <InlineMath math="\pi_1(X, x_0)" /> の <b>部分群 <InlineMath math="H" /></b> と 1 対 1 に対応する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        指数写像 <InlineMath math="p : \mathbb{R} \to S^1, p(t) = e^{2\pi i t}" /> において、被覆変換群 <InlineMath math="\mathrm{Deck}(p)" /> が <InlineMath math="\mathbb{Z}" /> と同型になる理由を述べよ（Example 7.1-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 7.1-1 より、実数直線上の平行移動 <InlineMath math="\varphi_n(t) = t + n" />（<InlineMath math="n \in \mathbb{Z}" />）は被覆構造を保ち（<InlineMath math="e^{2\pi i (t+n)} = e^{2\pi i t}" />）、これら以外に変換が存在しないからである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        被覆空間 <InlineMath math="\tilde{X}" /> が正規被覆（正規被覆）であることの、ファイバー上への作用の観点からの定義を述べよ（Definition 7.1-3 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 7.1-3 より、被覆変換群 <InlineMath math="\mathrm{Deck}(p)" /> が各ファイバー <InlineMath math="p^{-1}(x)" /> 上に <b>推移的（transitive）</b> に作用すること、すなわち任意の 2 点を移し合えることである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        円周 <InlineMath math="S^1" /> の連結な被覆空間として、普遍被覆空間以外にどのようなものがあるか。分類定理の Example 7.3-1 に基づいて答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 7.3-1 より、基本群 <InlineMath math="\mathbb{Z}" /> の非零な部分群 <InlineMath math="n\mathbb{Z}" />（<InlineMath math="n \geq 1" />）に対応する <b><InlineMath math="n" />-重被覆 <InlineMath math="S^1 \to S^1" /></b> が存在する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        普遍被覆空間が「道のホモトピー類の集合」として構成されるとき、被覆写像 <InlineMath math="p : \tilde{X} \to X" /> はどのように定義されるか（Theorem 7.2-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 7.2-1 より、基点 <InlineMath math={ "x_0" } /> から出発する道のホモトピー類 <InlineMath math="[\gamma]" /> に対して、その <b>終点 <InlineMath math="\gamma(1)" /></b> を対応させる写像 <InlineMath math="p([\gamma]) = \gamma(1)" /> として定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        連結な被覆空間 <InlineMath math="\tilde{X}" /> において、恒等写像以外の被覆変換は不動点を持たないことを証明せよ（Proposition 7.1-1 の証明）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            被覆変換 <InlineMath math="\varphi" /> がある一点 <InlineMath math="\tilde{x}_0" /> を固定する（<InlineMath math="\varphi(\tilde{x}_0) = \tilde{x}_0" />）と仮定する。このとき、集合 <InlineMath math="A = \{ \tilde{x} \in \tilde{X} \mid \varphi(\tilde{x}) = \tilde{x} \}" /> を考える。
                        </p>
                        <p>
                            <InlineMath math="\varphi" /> は連続写像であり <InlineMath math="\tilde{X}" /> はハウスドルフ空間（局所的に <InlineMath math="X" /> と同相なため）なので、<InlineMath math="A" /> は閉集合である。
                        </p>
                        <p>
                            また、<InlineMath math="\tilde{x} \in A" /> の均等被覆近傍 <InlineMath math="V" /> をとると、<InlineMath math="p|_{V} : V \to U" /> は同相である。<InlineMath math="p \circ \varphi = p" /> より、<InlineMath math="V" /> 上で <InlineMath math="\varphi = \mathrm{id}" /> となる（そうでなければシートを移ってしまうため）。よって <InlineMath math="A" /> は開集合でもある。
                        </p>
                        <p>
                            <InlineMath math="\tilde{X}" /> は連結であり <InlineMath math="A" /> は空でないので、<InlineMath math="A = \tilde{X}" /> となる。したがって <InlineMath math="\varphi" /> は恒等写像である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        普遍被覆空間 <InlineMath math="\tilde{X}" /> の被覆変換群 <InlineMath math="\mathrm{Deck}(\tilde{X}/X)" /> が、底空間の基本群 <InlineMath math="\pi_1(X)" /> と同型であることを証明せよ（Theorem 7.2-2 の証明）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            普遍被覆空間は単連結であるため、その基本群の像は自明群 <InlineMath math="H = \{e\}" /> である。自明群は常に正規部分群であるため、普遍被覆は正規被覆である。
                        </p>
                        <p>
                            正規被覆においては、一般に同型 <InlineMath math="\mathrm{Deck}(\tilde{X}/X) \cong \pi_1(X) / p_*(\pi_1(\tilde{X}))" /> が成り立つことが知られている（Corollary 7.3-1）。
                        </p>
                        <p>
                            今、<InlineMath math="p_*(\pi_1(\tilde{X})) = \{e\}" /> であるため、
                            <BlockMath math="\mathrm{Deck}(\tilde{X}/X) \cong \pi_1(X) / \{e\} \cong \pi_1(X)" />
                            となり、基本群との同型が得られる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        被覆写像 <InlineMath math="p : \tilde{X} \to X" /> が正規被覆であるための必要十分条件は、対応する部分群 <InlineMath math="H = p_*(\pi_1(\tilde{X}))" /> が <InlineMath math="\pi_1(X)" /> の正規部分群であることであることを示せ（Corollary 7.3-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意のループ <InlineMath math="\gamma \in \pi_1(X)" /> に対して、その持ち上げが再びループになる条件は <InlineMath math="[\gamma] \in H" /> である。
                        </p>
                        <p>
                            正規被覆の定義である「推移性」は、任意の持ち上げの終点位置が別の被覆変換で移り変われることを要求する。これは、任意の <InlineMath math="g \in \pi_1(X)" /> に対して <InlineMath math="gHg^{-1} = H" /> が成り立つ（つまり別の点へ移動してもループの成立条件が変わらない）ことと同値である。
                        </p>
                        <p>
                            したがって、幾何学的な「どのシートから出発しても同じ構造が見える」という対称性は、代数学における「正規部分群である」という条件と一致する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
