import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_5_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="1" number={1}>
                    <p>集合 <InlineMath math="X" /> の部分集合族 <InlineMath math="\mathcal{O}" /> が <b><InlineMath math="X" /> 上の位相（開集合系）</b>であるために満たすべき3つの条件を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 1.1-1 より、以下の3条件を満たす必要がある：</p>
                        <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                            <li><InlineMath math="\emptyset \in \mathcal{O}" /> かつ <InlineMath math="X \in \mathcal{O}" />。</li>
                            <li><InlineMath math="\mathcal{O}" /> の任意個の元の合併集合は、再び <InlineMath math="\mathcal{O}" /> の元である（<InlineMath math="\forall \{U_\lambda\}_{\lambda \in \Lambda} \subset \mathcal{O} \implies \bigcup_{\lambda \in \Lambda} U_\lambda \in \mathcal{O}" />）。</li>
                            <li><InlineMath math="\mathcal{O}" /> の有限個の元の共通部分集合は、再び <InlineMath math="\mathcal{O}" /> の元である（<InlineMath math="U, V \in \mathcal{O} \implies U \cap V \in \mathcal{O}" />）。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>集合 <InlineMath math="X" /> 上の<b>離散位相</b>と<b>密着位相</b>の定義をそれぞれ答えよ。</p>
                    <ExerciseSolution>
                        <p>Example 1.2-1 および 1.2-2 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>離散位相：</b> <InlineMath math="X" /> のべき集合 <InlineMath math="\mathcal{P}(X)" /> 全体を開集合系とする位相。すべての部分集合が開集合となる。</li>
                            <li><b>密着位相：</b> 空集合 <InlineMath math="\emptyset" /> と全体集合 <InlineMath math="X" /> のみを開集合系とする位相。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>位相空間 <InlineMath math="(X, \mathcal{O})" /> において、集合族 <InlineMath math="\mathcal{B} \subset \mathcal{O}" /> が <b><InlineMath math="\mathcal{O}" /> の開基（Base）</b>であることの定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 1.3-1 より、任意の開集合 <InlineMath math="U \in \mathcal{O}" /> が <InlineMath math="\mathcal{B}" /> の元の（適当な個数の）合併として表せるとき、<InlineMath math="\mathcal{B}" /> を開基という。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="1" number={4}>
                    <p>集合 <InlineMath math="X = \{a, b, c\}" /> 上の次の族のうち、<InlineMath math="X" /> 上の位相となるものを選べ。位相とならない場合はその理由を述べよ。</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2 ml-4">
                        <li><InlineMath math="\mathcal{O}_1 = \{ \emptyset, \{a\}, \{b\}, \{a, b, c\} \}" /></li>
                        <li><InlineMath math="\mathcal{O}_2 = \{ \emptyset, \{a\}, \{b\}, \{a, b\}, \{a, b, c\} \}" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <b><InlineMath math="\mathcal{O}_1" />：位相ではない。</b>
                                開集合 <InlineMath math="\{a\}" /> と <InlineMath math="\{b\}" /> の合併集合 <InlineMath math="\{a, b\}" /> が <InlineMath math="\mathcal{O}_1" /> に含まれていないため（合併についての条件に反する）。
                            </li>
                            <li>
                                <b><InlineMath math="\mathcal{O}_2" />：位相である。</b>
                                空集合・全体集合を含み、任意個（有限個）の合併および共通部分の結果がすべて <InlineMath math="\mathcal{O}_2" /> 内に収まっている。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>実数の集合 <InlineMath math="\mathbb{R}" /> 上の「通常の位相（ユークリッド位相）<InlineMath math="\mathcal{O}_{std}" />」と「離散位相 <InlineMath math="\mathcal{O}_{dis}" />」について、それらの強弱（細かさ）を比較せよ。</p>
                    <ExerciseSolution>
                        <p>Definition 1.1-3 より：</p>
                        <p>通常の位相において開集合である任意の開区間などは、離散位相（すべての部分集合が開集合）においても開集合である。よって <InlineMath math="\mathcal{O}_{std} \subset \mathcal{O}_{dis}" /> が成り立つ。したがって、<b>離散位相は通常の位相よりも細かい（強い）</b>。逆に通常の位相は点集合 <InlineMath math="\{x\}" /> を開集合として含まないため、一致はしない。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>無限集合 <InlineMath math="X" /> 上の<b>有限補位相（Co-finite topology）</b>において、任意の一点集合 <InlineMath math="\{x\}" /> が閉集合であることを示せ。</p>
                    <ExerciseSolution>
                        <p>Example 1.2-4 より、有限補位相における開集合は「補集合が有限集合であるもの（および空集合）」である。</p>
                        <p>一点集合 <InlineMath math="\{x\}" /> の補集合 <InlineMath math="X \setminus \{x\}" /> を考える。この集合の補集合は <InlineMath math="X \setminus (X \setminus \{x\}) = \{x\}" /> であり、これは有限集合である。定義により補集合が有限であるため、<InlineMath math="X \setminus \{x\}" /> は開集合である。したがって、その補集合である <b><InlineMath math="\{x\}" /> は閉集合</b>となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>実数直線 <InlineMath math="\mathbb{R}" /> 上の通常の位相について、開区間の族 <InlineMath math="\mathcal{B} = \{ (a, b) \mid a, b \in \mathbb{Q}, a < b \}" /> （端点が有理数の開区間全体）が開基となることを説明せよ。</p>
                    <ExerciseSolution>
                        <p>任意の開集合 <InlineMath math="U" /> とその点 <InlineMath math="x \in U" /> に対して、有理数の稠密性を用いる。</p>
                        <p>通常の位相の定義より、<InlineMath math="x \in (\alpha, \beta) \subset U" /> となる実数 <InlineMath math="\alpha, \beta" /> が存在する。有理数の稠密性により、<InlineMath math="\alpha < a < x < b < \beta" /> となる有理数 <InlineMath math="a, b" /> を選ぶことができる。このとき <InlineMath math="x \in (a, b) \subset U" /> であり、<InlineMath math="(a, b) \in \mathcal{B}" /> である。このように、各点の周りに <InlineMath math="\mathcal{B}" /> の元を詰め込めるため、<InlineMath math="U" /> は <InlineMath math="\mathcal{B}" /> の元の合併として表される。よって <InlineMath math="\mathcal{B}" /> は開基である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="1" number={8}>
                    <p>集合 <InlineMath math="X" /> の部分集合族 <InlineMath math="\mathcal{B}" /> がある位相の開基となるための必要十分条件（Theorem 1.3-1）の2つの条件を述べよ。</p>
                    <ExerciseSolution>
                        <p>以下の2条件を満たすとき、<InlineMath math="\mathcal{B}" /> を開基とする位相が一意に定まる：</p>
                        <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                            <li><InlineMath math="X" /> の各点 <InlineMath math="x" /> に対して、<InlineMath math="x \in B" /> となる <InlineMath math="B \in \mathcal{B}" /> が存在する（<InlineMath math="\bigcup \mathcal{B} = X" />）。</li>
                            <li><InlineMath math="B_1, B_2 \in \mathcal{B}" /> かつ <InlineMath math="x \in B_1 \cap B_2" /> ならば、<InlineMath math="x \in B_3 \subset B_1 \cap B_2" /> となる <InlineMath math="B_3 \in \mathcal{B}" /> が存在する。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>実数 <InlineMath math="\mathbb{R}" /> 上の集合族 <InlineMath math="\mathcal{S} = \{ (-\infty, a) \mid a \in \mathbb{R} \} \cup \{ (b, +\infty) \mid b \in \mathbb{R} \}" /> を<b>準開基</b>として生成される位相は、通常の位相と一致することを説明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 1.4-1 より、準開基の有限個の共通部分の族が開基となる。ここで、</p>
                        <p className="mt-2 ml-4"><InlineMath math="(-\infty, a) \cap (b, +\infty)" /></p>
                        <p>を考えると、これが空でない場合は開区間 <InlineMath math="(b, a)" /> となる。また、単独の元や空集合、全体集合も構成できる。開区間全体の族 <InlineMath math="\{ (b, a) \mid b < a \}" /> は通常の位相の開基であるため、そこから生成される位相は通常の位相に一致する。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>集合 <InlineMath math="X" /> 上の <b>Sorgenfrey 位相</b>（半開区間 <InlineMath math="[a, b)" /> 全体を開基とする位相）は、通常の位相よりも真に細かいことを示せ。また、通常の位相において開集合である <InlineMath math="(0, 1)" /> が Sorgenfrey 位相でも開集合であることを確認せよ。</p>
                    <ExerciseSolution>
                        <p>1) 任意の開区間 <InlineMath math="(a, b)" /> は、半開区間の合併 <InlineMath math="\bigcup_{n=1}^\infty [a + \frac{1}{n}, b)" /> として表せるため、Sorgenfrey 位相においても開集合である。よって Sorgenfrey 位相は通常の位相より細かい。一方、<InlineMath math="[a, b)" /> は通常の位相では開集合ではない（点 <InlineMath math="a" /> において内点を持たない）ため、一致はしない（真に細かい）。</p>
                        <p>2) 上記の議論と同様に、<InlineMath math="(0, 1) = \bigcup_{n=1}^\infty [1/n, 1)" /> と書けるため、Sorgenfrey 位相の基底の合併として表され、同位相において<b>開集合である</b>。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
