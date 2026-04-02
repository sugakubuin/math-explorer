import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_15_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="2" number={1}>
                    <p>圏 <InlineMath math="\mathcal{C}" /> から圏 <InlineMath math="\mathcal{D}" /> への共変関手 <InlineMath math="F" /> が、射の合成に関して満たすべき条件式を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 2.1-1 より、任意の合成可能な射 <InlineMath math="f, g" /> に対して以下が成り立つ必要がある。</p>
                        <BlockMath math="F(g \circ f) = F(g) \circ F(f)" />
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="2" number={2}>
                    <p>反変関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> において、射 <InlineMath math="f : A \to B" /> はどのような射に送られるか、その始域と終域を含めて答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 2.1-2 より、射の向きが逆転するため、以下のように送られる。</p>
                        <BlockMath math="F(f) : F(B) \to F(A)" />
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="2" number={3}>
                    <p>群の圏から集合の圏への忘却関手 <InlineMath math="U : \mathbf{Grp} \to \mathbf{Set}" /> は、群の対象を何に送るか答えよ。</p>
                    <ExerciseSolution>
                        <p>Example 2.2-1 より、群の演算構造を忘れた台集合（underlying set）に送る。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="2" number={4}>
                    <p>共変 hom 関手 <InlineMath math="\mathrm{Hom}(A, -) : \mathcal{C} \to \mathbf{Set}" /> において、射 <InlineMath math="f : B \to C" /> が送られる写像 <InlineMath math="\mathrm{Hom}(A, f)" /> の定義を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 2.1-3 より、射 <InlineMath math="h \in \mathrm{Hom}(A, B)" /> に対して左から <InlineMath math="f" /> を合成する写像（前送り写像）として定義される。</p>
                        <BlockMath math="\mathrm{Hom}(A, f)(h) = f \circ h" />
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="2" number={5}>
                    <p>基本群関手 <InlineMath math="\pi_1" /> の性質（Example 2.2-3）を用いて、2つの位相空間 <InlineMath math="X, Y" /> が同相であれば、それらの基本群が同型であることを説明せよ。</p>
                    <ExerciseSolution>
                        <p>関手は同型射を同型射に送る性質（§2.2 備考）を持つ。位相空間の圏における同型射は同相写像であり、群の圏における同型射は群同型写像である。</p>
                        <p>したがって、同相写像 <InlineMath math="f : X \cong Y" /> が存在すれば、関手 <InlineMath math="\pi_1" /> によって送られた射 <InlineMath math="f_* : \pi_1(X) \to \pi_1(Y)" /> もまた群としての同型射（群同型）となるため、基本群は同型である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="2" number={6}>
                    <p>関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> が忠実（Faithful）であることの定義を、射の集合（hom 集合）の言葉を用いて答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 2.3-1 より、任意の対象のペア <InlineMath math="A, B \in \mathcal{C}" /> について、引き起こされる写像</p>
                        <BlockMath math="F_{A,B} : \mathrm{Hom}_{\mathcal{C}}(A, B) \to \mathrm{Hom}_{\mathcal{D}}(F(A), F(B))" />
                        <p>が単射であることをいう。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="2" number={7}>
                    <p>関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> が本質的全射（Essentially Surjective）であることの定義を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 2.3-2 より、任意の対象 <InlineMath math="D \in \mathcal{D}" /> に対して、<InlineMath math="F(A) \cong D" /> となるような <InlineMath math="\mathcal{C}" /> の対象 <InlineMath math="A" /> が存在することをいう。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="2" number={8}>
                    <p>2つの共変関手 <InlineMath math="F : \mathcal{A} \to \mathcal{B}" /> と <InlineMath math="G : \mathcal{B} \to \mathcal{C}" /> の合成 <InlineMath math="G \circ F" /> が共変関手の公理を満たすことを証明せよ。</p>
                    <ExerciseSolution>
                        <p>任意の射 <InlineMath math="f : A \to A', g : A' \to A''" /> について、合成の保存を示す。</p>
                        <BlockMath math="\begin{aligned} (G \circ F)(g \circ f) &= G(F(g \circ f)) \\ &= G(F(g) \circ F(f)) \quad (\because F \text{ は関手}) \\ &= G(F(g)) \circ G(F(f)) \quad (\because G \text{ は関手}) \\ &= (G \circ F)(g) \circ (G \circ F)(f) \end{aligned}" />
                        <p>また、恒等射の保存は以下の通り。</p>
                        <BlockMath math="\begin{aligned} (G \circ F)(\mathrm{id}_A) &= G(F(\mathrm{id}_A)) \\ &= G(\mathrm{id}_{F(A)}) \quad (\because F \text{ は関手}) \\ &= \mathrm{id}_{G(F(A))} \quad (\because G \text{ は関手}) \\ &= \mathrm{id}_{(G \circ F)(A)} \end{aligned}" />
                        <p>以上より、<InlineMath math="G \circ F" /> は関手である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="2" number={9}>
                    <p>任意の関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> は同型射を同型射に送ることを証明せよ。すなわち、<InlineMath math="f : A \to B" /> が同型射であれば、<InlineMath math="F(f)" /> も同型射であることを示せ。</p>
                    <ExerciseSolution>
                        <p><InlineMath math="f" /> は同型射なので、Definition 1.3-1 より逆射 <InlineMath math="g : B \to A" /> が存在し、<InlineMath math="g \circ f = \mathrm{id}_A" /> および <InlineMath math="f \circ g = \mathrm{id}_B" /> を満たす。</p>
                        <p>これらに関手 <InlineMath math="F" /> を適用すると、関手の公理（Definition 2.1-1）より以下が成り立つ。</p>
                        <BlockMath math="\begin{aligned} F(g \circ f) = F(g) \circ F(f) &= F(\mathrm{id}_A) = \mathrm{id}_{F(A)} \\ F(f \circ g) = F(f) \circ F(g) &= F(\mathrm{id}_B) = \mathrm{id}_{F(B)} \end{aligned}" />
                        <p>これは <InlineMath math="F(g)" /> が <InlineMath math="F(f)" /> の逆射としての条件を満たしていることを示している。したがって、<InlineMath math="F(f)" /> は逆射を持ち、同型射である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="2" number={10}>
                    <p>充満忠実な関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> は同型を反映すること、すなわち <InlineMath math="F(f)" /> が <InlineMath math="\mathcal{D}" /> で同型射であれば、<InlineMath math="f" /> も <InlineMath math="\mathcal{C}" /> で同型射であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p><InlineMath math="F(f) : F(A) \to F(B)" /> が同型射であるとすると、逆射 <InlineMath math="u : F(B) \to F(A)" /> が存在し、<InlineMath math="u \circ F(f) = \mathrm{id}_{F(A)}" /> および <InlineMath math="F(f) \circ u = \mathrm{id}_{F(B)}" /> を満たす。</p>
                        <p><InlineMath math="F" /> は充満（Full）なので、Definition 2.3-1 よりある射 <InlineMath math="g : B \to A" /> が存在して <InlineMath math="F(g) = u" /> と書ける。等式に代入すると、</p>
                        <BlockMath math="F(g) \circ F(f) = \mathrm{id}_{F(A)}, \quad F(f) \circ F(g) = \mathrm{id}_{F(B)}" />
                        <p>関手の公理より、左辺をまとめると <InlineMath math="F(g \circ f) = \mathrm{id}_{F(A)}" /> および <InlineMath math="F(f \circ g) = \mathrm{id}_{F(B)}" />。恒等射の保存より <InlineMath math="\mathrm{id}_{F(A)} = F(\mathrm{id}_A)" /> なので、</p>
                        <BlockMath math="F(g \circ f) = F(\mathrm{id}_A)" />
                        <p>ここで <InlineMath math="F" /> は忠実（Faithful）なので、射の送り先が一致すれば元の射も一致する（単射性）。よって、</p>
                        <BlockMath math="g \circ f = \mathrm{id}_A" />
                        <p>同様にして <InlineMath math="f \circ g = \mathrm{id}_B" /> も導かれる。したがって <InlineMath math="f" /> は逆射 <InlineMath math="g" /> を持ち、同型射である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
