import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_15_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="4" number={1}>
                    <p>共変関手 <InlineMath math="F : \mathcal{C} \to \mathbf{Set}" /> が表現可能（Representable）であることの定義を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 4.1-1 より、ある対象 <InlineMath math="A \in \mathcal{C}" /> と自然同型</p>
                        <BlockMath math="\alpha : \mathrm{Hom}(A, -) \cong F" />
                        <p>が存在することである。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="4" number={2}>
                    <p>表現可能関手 <InlineMath math="F" /> において、自然同型の成分によって恒等射 <InlineMath math="\mathrm{id}_A" /> を送った元 <InlineMath math="u = \alpha_A(\mathrm{id}_A) \in F(A)" /> のことを何と呼ぶか答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 4.1-2 より、これを<strong>普遍元（universal element）</strong>という。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="4" number={3}>
                    <p>米田の補題（Theorem 4.2-1）による、自然変換の集合 <InlineMath math="\mathrm{Nat}(\mathrm{Hom}(A, -), F)" /> と集合 <InlineMath math="F(A)" /> の間の同型関係式を記せ。</p>
                    <ExerciseSolution>
                        <p>以下の全単射が存在する。</p>
                        <BlockMath math="\mathrm{Nat}(\mathrm{Hom}(A, -), F) \cong F(A)" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="4" number={4}>
                    <p>群の圏の忘却関手 <InlineMath math="U : \mathbf{Grp} \to \mathbf{Set}" /> の表現対象が、整数の加法群 <InlineMath math="\mathbb{Z}" /> である理由を述べよ。</p>
                    <ExerciseSolution>
                        <p>Example 4.1-1 より、任意の群 <InlineMath math="G" /> への準同型 <InlineMath math="f : \mathbb{Z} \to G" /> は、生成元 <InlineMath math="1 \in \mathbb{Z}" /> の行き先 <InlineMath math="f(1) \in G" />（すなわち台集合 <InlineMath math="U(G)" /> の元）を1つ選ぶことと完全に一対一対応するため。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="4" number={5}>
                    <p>米田の補題の証明（Theorem 4.2-1）において、元 <InlineMath math="u \in F(A)" /> から構成される自然変換 <InlineMath math="\eta^u" /> の成分 <InlineMath math="\eta^u_B(f)" /> の定義を記せ。</p>
                    <ExerciseSolution>
                        <p>射 <InlineMath math="f : A \to B" /> に対して以下のように定められる。</p>
                        <BlockMath math="\eta^u_B(f) = F(f)(u)" />
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="4" number={6}>
                    <p>米田埋め込み <InlineMath math="\mathcal{Y} : \mathcal{C} \to [\mathcal{C}^{op}, \mathbf{Set}]" />（Theorem 4.3-1）において、射 <InlineMath math="f : A \to B" /> はどのような自然変換に送られるか答えよ。</p>
                    <ExerciseSolution>
                        <p>反変 hom 関手間の自然変換 <InlineMath math="f \circ - : \mathrm{Hom}(-, A) \to \mathrm{Hom}(-, B)" />（後合成による引き戻し）に送られる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="4" number={7}>
                    <p>米田埋め込みが「充満忠実（Fully Faithful）」であることから得られる、対象 <InlineMath math="A, B" /> の情報を失わないという性質を同型関係式を用いて述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 4.3-1 より、以下の同値関係が成り立つ。</p>
                        <BlockMath math="A \cong B \iff \mathrm{Hom}(-, A) \cong \mathrm{Hom}(-, B)" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="4" number={8}>
                    <p>Proposition 4.1-1（普遍性による特徴づけ）を証明せよ。すなわち、元 <InlineMath math="u \in F(A)" /> が普遍元であるならば、任意の <InlineMath math="B" /> と <InlineMath math="v \in F(B)" /> に対して一意な射 <InlineMath math="f : A \to B" /> が存在して <InlineMath math="F(f)(u) = v" /> となることを示せ。</p>
                    <ExerciseSolution>
                        <p><InlineMath math="u" /> は表現 <InlineMath math="\alpha : \mathrm{Hom}(A, -) \cong F" /> の普遍元なので、Definition 4.1-2 より <InlineMath math="u = \alpha_A(\mathrm{id}_A)" /> である。</p>
                        <p>任意の <InlineMath math="v \in F(B)" /> に対し、<InlineMath math="\alpha_B : \mathrm{Hom}(A, B) \to F(B)" /> は全単射であるから、<InlineMath math="\alpha_B(f) = v" /> を満たす射 <InlineMath math="f : A \to B" /> が一意に存在する。</p>
                        <p><InlineMath math="\alpha" /> の自然性条件を射 <InlineMath math="f : A \to B" /> について書き、<InlineMath math="\mathrm{id}_A \in \mathrm{Hom}(A, A)" /> を代入すると、</p>
                        <BlockMath math="\alpha_B(f \circ \mathrm{id}_A) = F(f)(\alpha_A(\mathrm{id}_A))" />
                        <p>恒等射の性質と普遍元の定義より、左辺は <InlineMath math="\alpha_B(f)" />、右辺は <InlineMath math="F(f)(u)" /> となる。</p>
                        <p>よって、<InlineMath math="v = \alpha_B(f) = F(f)(u)" /> が成り立ち、このような <InlineMath math="f" /> の一意性は <InlineMath math="\alpha_B" /> が全単射であることから従う。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="4" number={9}>
                    <p>米田の補題（Theorem 4.2-1）の証明において、元 <InlineMath math="u" /> から構成された <InlineMath math="\eta^u" /> が自然変換であることを示せ。すなわち、任意の射 <InlineMath math="g : B \to C" /> に対して <InlineMath math="F(g) \circ \eta^u_B = \eta^u_C \circ (g \circ -)" /> が成り立つことを証明せよ。</p>
                    <ExerciseSolution>
                        <p>任意の射 <InlineMath math="f \in \mathrm{Hom}(A, B)" /> に対して両辺を適用する。成分の定義 <InlineMath math="\eta^u_B(f) = F(f)(u)" /> を用いて計算する。</p>
                        <p>左辺：<InlineMath math="F(g)(\eta^u_B(f)) = F(g)(F(f)(u)) = (F(g) \circ F(f))(u)" /></p>
                        <p>右辺：<InlineMath math="\eta^u_C(g \circ f) = F(g \circ f)(u)" /></p>
                        <p><InlineMath math="F" /> は関手なので、射の合成を保存する。したがって、</p>
                        <BlockMath math="F(g \circ f) = F(g) \circ F(f)" />
                        <p>が得られ、両辺は一致する。よって <InlineMath math="\eta^u" /> は自然性条件を満たし、自然変換である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="4" number={10}>
                    <p>米田埋め込みが充満忠実であることを用いて、関手の同型から対象の同型が導かれること、即ち <InlineMath math="\mathrm{Hom}(-, A) \cong \mathrm{Hom}(-, B)" />（自然同型）ならば <InlineMath math="A \cong B" />（対象の同型）であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>米田埋め込み <InlineMath math="\mathcal{Y}" /> は充満忠実な関手（Definition 2.3-1）である。</p>
                        <p>以前の問題（Ch.2 発展問題 10）で示した通り、充満忠実な関手は「同型を反映する（reflects isomorphisms）」。</p>
                        <p>すなわち、<InlineMath math="\mathcal{Y}(A) \cong \mathcal{Y}(B)" /> という関手圏での同型（自然同型）が存在するとき、その「逆像」である射も元の圏において同型射を与える必要がある。</p>
                        <p>この場合、米田埋め込みによる同型 <InlineMath math="\mathcal{Y}(A) \cong \mathcal{Y}(B)" /> を引き起こす元の射 <InlineMath math="f : A \to B" /> が存在し、それは充満忠実性から同型射でなければならない。したがって <InlineMath math="A \cong B" /> である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
