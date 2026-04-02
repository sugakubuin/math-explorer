import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_5_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="2" number={1}>
                    <p>位相空間 <InlineMath math="X" /> の部分集合 <InlineMath math="A" /> に対して、<b>内部（Interior）</b>と<b>閉包（Closure）</b>を最大・最小の概念を用いて定義せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 2.2-1 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>内部 <InlineMath math="\mathrm{Int}(A)" />：</b> <InlineMath math="A" /> に含まれる最大の開部分集合。</li>
                            <li><b>閉包 <InlineMath math="\overline{A}" />：</b> <InlineMath math="A" /> を包含する最小の閉集合。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>位相空間 <InlineMath math="X" /> が<b>可分（Separable）</b>であることの定義を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 2.3-2 より、<InlineMath math="X" /> が可算な稠密部分集合を持つとき、<InlineMath math="X" /> は可分であるという。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p><b>第一可算公理 (C1)</b> と<b>第二可算公理 (C2)</b> の定義を答えよ。</p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>第一可算公理 (C1)：</b> 各点 <InlineMath math="x \in X" /> に対して、可算な近傍基が存在すること。</li>
                            <li><b>第二可算公理 (C2)：</b> 位相空間が可算な開基を持つこと。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="2" number={4}>
                    <p>実数 <InlineMath math="\mathbb{R}" /> 上の通常の位相において、部分集合 <InlineMath math="A = (0, 1] \cup \{2\}" /> に対する以下の集合を求めよ。</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2 ml-4">
                        <li>内部 <InlineMath math="\mathrm{Int}(A)" /></li>
                        <li>閉包 <InlineMath math="\overline{A}" /></li>
                        <li>境界 <InlineMath math="\partial A" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <b>内部：</b> 開集合として含まれる最大の部分集合は <InlineMath math="(0, 1)" /> である（点は境界を含むため内点ではない）。よって <InlineMath math="\mathrm{Int}(A) = (0, 1)" />。
                            </li>
                            <li>
                                <b>閉包：</b> <InlineMath math="A" /> を包含する最小の閉集合は、端点を含む。よって <InlineMath math="\overline{A} = [0, 1] \cup \{2\}" />。
                            </li>
                            <li>
                                <b>境界：</b> <InlineMath math="\partial A = \overline{A} \setminus \mathrm{Int}(A)" /> より計算すると、<InlineMath math="\partial A = \{0, 1, 2\}" />。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>実数の集合 <InlineMath math="\mathbb{R}" /> において、有理数の集合 <InlineMath math="\mathbb{Q}" /> が稠密であることを示せ。</p>
                    <ExerciseSolution>
                        <p>Definition 2.3-1 より、<InlineMath math="\overline{\mathbb{Q}} = \mathbb{R}" /> を示せばよい。任意の開区間 <InlineMath math="(a, b)" /> （通常の位相の開基）には、有理数の性質（密実性）より少なくとも一つの有理数 <InlineMath math="q" /> が含まれる。したがって、実数全体の中で有理数が「至る処に存在する」ため、閉包は <InlineMath math="\mathbb{R}" /> となり、<InlineMath math="\mathbb{Q}" /> は <InlineMath math="\mathbb{R}" /> で稠密である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>集合 <InlineMath math="X" /> とその部分集合 <InlineMath math="A" /> に対して、閉包が <InlineMath math="\overline{A} = A \cup A'" /> （<InlineMath math="A'" /> は集積点全体の集合＝導集合）と表せることを説明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 2.2-2 より、閉包は「本人」と「限りなく近い点」の合併である。</p>
                        <p><InlineMath math="x \in A'" /> ならば、<InlineMath math="x" /> の任意の近傍は <InlineMath math="A" /> の点を含むため、<InlineMath math="x" /> は <InlineMath math="\overline{A}" /> に属する（<InlineMath math="A \subset \overline{A}" /> も自明）。逆に <InlineMath math="x \in \overline{A}" /> ならば、<InlineMath math="x" /> の任意の近傍は <InlineMath math="A" /> の元を含む。もし <InlineMath math="x \notin A" /> ならば、その近傍は <InlineMath math="x" /> 以外の <InlineMath math="A" /> の元を含む必要があるため、<InlineMath math="x" /> は集積点である。よって等号が成り立つ。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>第二可算空間 (C2) は必ず第一可算空間 (C1) であることを説明せよ。</p>
                    <ExerciseSolution>
                        <p>Definition 2.6-1 における可算開基を <InlineMath math="\mathcal{B} = \{B_n\}_{n \in \mathbb{N}}" /> とする。各点 <InlineMath math="x \in X" /> に対して、<InlineMath math="x" /> を含む開基の元の部分集合 <InlineMath math="\mathcal{B}_x = \{B \in \mathcal{B} \mid x \in B\}" /> を考える。これは可算集合の部分集合であるから可算であり、かつ開集合による近傍の基底をなす。よって <InlineMath math="x" /> における可算近傍基を構成できるため、C1 である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="2" number={8}>
                    <p>境界の等価な定義 <InlineMath math="\partial A = \overline{A} \cap \overline{X \setminus A}" /> を証明せよ。</p>
                    <ExerciseSolution>
                        <p>1) <InlineMath math="\partial A = \overline{A} \setminus \mathrm{Int}(A)" /> である（Definition 2.2-2）。</p>
                        <p>2) 内部の定義より <InlineMath math="\mathrm{Int}(A) = X \setminus \overline{X \setminus A}" /> が成り立つ（開集合の合併が閉集合の共通部分に対応するド・モルガンの法則による）。</p>
                        <p>3) これらを代入すると、<InlineMath math="\partial A = \overline{A} \setminus (X \setminus \overline{X \setminus A}) = \overline{A} \cap \overline{X \setminus A}" /> となる。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>位相空間 <InlineMath math="X" /> において、部分集合 <InlineMath math="A" /> が<b>開集合</b>であるための必要十分条件は、<InlineMath math="A \cap \partial A = \emptyset" /> であることを示せ。</p>
                    <ExerciseSolution>
                        <p>1) (<InlineMath math="\implies" />) <InlineMath math="A" /> が開集合ならば <InlineMath math="A = \mathrm{Int}(A)" />。境界の定義より <InlineMath math="\partial A = \overline{A} \setminus \mathrm{Int}(A)" /> であるから、<InlineMath math="\partial A" /> は <InlineMath math="\mathrm{Int}(A)" /> すなわち <InlineMath math="A" /> と交わらない。</p>
                        <p>2) (<InlineMath math="\impliedby" />) <InlineMath math="A \cap \partial A = \emptyset" /> とする。<InlineMath math="A \subset \overline{A} = \mathrm{Int}(A) \cup \partial A" /> であるが、仮定により <InlineMath math="A" /> の元は <InlineMath math="\partial A" /> に含まれないため、すべての <InlineMath math="A" /> の元は <InlineMath math="\mathrm{Int}(A)" /> に含まれる必要がある、すなわち <InlineMath math="A \subset \mathrm{Int}(A)" />。包含関係 <InlineMath math="\mathrm{Int}(A) \subset A" /> は常に成り立つため、<InlineMath math="A = \mathrm{Int}(A)" /> となり、<InlineMath math="A" /> は開集合である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p><b>第一可算空間</b>における「閉包の点列による特徴づけ（Theorem 2.5-1）」の内容として、点 <InlineMath math="x" /> が閉包 <InlineMath math="\overline{A}" /> に属することと、<InlineMath math="x" /> に収束する <InlineMath math="A" /> 内の点列が存在することは同値である。この証明において「可算な近傍基」がどこで使われるか説明せよ。</p>
                    <ExerciseSolution>
                        <p><InlineMath math="x \in \overline{A}" /> から点列を構成する段階で使用する。<InlineMath math="x" /> における可算な近傍基を <InlineMath math="\{V_1, V_2, \dots\}" /> とし、単調減少（<InlineMath math="V_k \supset V_{k+1}" />）になるように構成できる。閉包の性質により、各 <InlineMath math="V_k" /> の中から <InlineMath math="A" /> の元 <InlineMath math="x_k" /> を一つ選ぶことができる。近傍基であるため、この点列 <InlineMath math="\{x_k\}" /> は <InlineMath math="x" /> に収束する。近傍族が可算でない場合、整数インデックスによる点列の構成が一般にはできないため、C1 条件が重要となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
