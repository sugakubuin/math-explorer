import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_5_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="3" number={1}>
                    <p>位相空間 <InlineMath math="X" /> から <InlineMath math="Y" /> への写像 <InlineMath math="f: X \to Y" /> が、<b>連続（Continuous）</b>であることの開集合を用いた定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 3.1-1 より、<InlineMath math="Y" /> の任意の開集合 <InlineMath math="V" /> に対して、その逆像 <InlineMath math="f^{-1}(V)" /> が <InlineMath math="X" /> の開集合であるとき、<InlineMath math="f" /> は連続であるという。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p><b>貼り合わせ補題 (Pasting Lemma)</b> の主張（閉集合による有限分割の場合）を述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 3.3-1 より、位相空間 <InlineMath math="X" /> が有限個の閉集合の合併 <InlineMath math="X = F_1 \cup \dots \cup F_n" /> であるとき、各 <InlineMath math="F_i" /> への制限 <InlineMath math="f|_{F_i}" /> がそれぞれ連続であれば、写像 <InlineMath math="f: X \to Y" /> は連続である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p><b>初期位相（Initial topology）</b>と<b>終位相（Final topology）</b>の定義を、写像族を連続にすることの観点から簡潔に説明せよ。</p>
                    <ExerciseSolution>
                        <p>Definition 3.4-1 および 3.4-2 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>初期位相：</b> 与えられた写像族 <InlineMath math="\{f_i: X \to Y_i\}" /> をすべて連続にする<b>最粗（最弱）</b>の位相。例：部分空間位相、積位相。</li>
                            <li><b>終位相：</b> 与えられた写像族 <InlineMath math="\{g_i: X_i \to Y\}" /> をすべて連続にする<b>最細（最強）</b>の位相。例：商位相。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="3" number={4}>
                    <p>位相空間 <InlineMath math="(X, \mathcal{O}_X)" /> から <InlineMath math="(Y, \mathcal{O}_Y)" /> への<b>定数写像</b> <InlineMath math="f(x) = y_0" /> （<InlineMath math="y_0 \in Y" /> は定点）が連続であることを示せ。</p>
                    <ExerciseSolution>
                        <p><InlineMath math="Y" /> の任意の開集合 <InlineMath math="V" /> をとる。</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li>もし <InlineMath math="y_0 \in V" /> ならば、<InlineMath math="f^{-1}(V) = X" /> であり、これは <InlineMath math="X" /> の開集合である。</li>
                            <li>もし <InlineMath math="y_0 \notin V" /> ならば、<InlineMath math="f^{-1}(V) = \emptyset" /> であり、これも <InlineMath math="X" /> の開集合である。</li>
                        </ul>
                        <p className="mt-2">いずれの場合も逆像が開集合となるため、<InlineMath math="f" /> は連続である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>連続写像 <InlineMath math="f: X \to Y" /> と <InlineMath math="g: Y \to Z" /> の合成写像 <InlineMath math="g \circ f: X \to Z" /> が連続であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 3.3-1 より。任意の <InlineMath math="Z" /> の開集合 <InlineMath math="W" /> をとる。</p>
                        <p>1) <InlineMath math="g" /> は連続であるから、<InlineMath math="g^{-1}(W)" /> は <InlineMath math="Y" /> の開集合である。</p>
                        <p>2) <InlineMath math="f" /> は連続であるから、その逆像 <InlineMath math="f^{-1}(g^{-1}(W))" /> は <InlineMath math="X" /> の開集合である。</p>
                        <p>3) 合成写像の逆像の性質より、<InlineMath math="(g \circ f)^{-1}(W) = f^{-1}(g^{-1}(W))" />。これが開集合であるため、<InlineMath math="g \circ f" /> は連続である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>部分集合 <InlineMath math="A \subset X" /> において、<InlineMath math="A" /> に相対位相（部分空間位相）を導入したとき、包含写像 <InlineMath math="i: A \to X" /> が連続であることを示せ。</p>
                    <ExerciseSolution>
                        <p>Proposition 3.3-2 および 3.4-1 より。相対位相の定義では、<InlineMath math="A" /> の開集合は 「<InlineMath math="X" /> の開集合 <InlineMath math="U" /> と <InlineMath math="A" /> の共通部分 <InlineMath math="U \cap A" />」 として定められる。</p>
                        <p>任意の <InlineMath math="X" /> の開集合 <InlineMath math="U" /> に対して、その包含写像による逆像は <InlineMath math="i^{-1}(U) = U \cap A" /> である。これは相対位相の定義そのものによって <InlineMath math="A" /> の開集合である。よって包含写像は連続である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>実数 <InlineMath math="\mathbb{R}" /> 上の通常の位相を考え、絶対値関数 <InlineMath math="f(x) = |x|" /> が連続であることを示せ。</p>
                    <ExerciseSolution>
                        <p>貼り合わせ補題（Theorem 3.3-1）を用いる。実数全体を二つの閉集合 <InlineMath math="F_1 = [0, +\infty)" /> と <InlineMath math="F_2 = (-\infty, 0]" /> に分ける。</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><InlineMath math="F_1" /> 上では <InlineMath math="f(x) = x" />。これは恒等写像であり連続である。</li>
                            <li><InlineMath math="F_2" /> 上では <InlineMath math="f(x) = -x" />。これは連続な線形写像である。</li>
                        </ul>
                        <p>どちらの閉集合上でも連続であり、共通部分 <InlineMath math="\{0\}" /> において関数の値は一致している（共に0）。よって貼り合わせ補題より <InlineMath math="f(x)" /> は全体で連続である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="3" number={8}>
                    <p>写像 <InlineMath math="f: X \to Y" /> が連続であるための必要十分条件は、任意の閉集合 <InlineMath math="F \subset Y" /> に対して <InlineMath math="f^{-1}(F)" /> が <InlineMath math="X" /> の閉集合であることであることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 3.2-1 より。補集合の性質と連続性の定義を用いる。</p>
                        <p>1) (<InlineMath math="\implies" />) <InlineMath math="F" /> を <InlineMath math="Y" /> の閉集合とする。このとき <InlineMath math="Y \setminus F" /> は開集合である。<InlineMath math="f" /> の連続性から <InlineMath math="f^{-1}(Y \setminus F) = X \setminus f^{-1}(F)" /> は <InlineMath math="X" /> の開集合である。したがって、その補集合である <InlineMath math="f^{-1}(F)" /> は閉集合である。</p>
                        <p>2) (<InlineMath math="\impliedby" />) 任意の開集合 <InlineMath math="V \subset Y" /> をとる。補集合 <InlineMath math="Y \setminus V" /> は閉集合であり、仮定より <InlineMath math="f^{-1}(Y \setminus V) = X \setminus f^{-1}(V)" /> は閉集合である。したがって、その補集合 <InlineMath math="f^{-1}(V)" /> は開集合であり、<InlineMath math="f" /> は連続である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>写像 <InlineMath math="f: X \to Y" /> が連続であれば、任意の部分集合 <InlineMath math="A \subset X" /> に対して <InlineMath math="f(\overline{A}) \subset \overline{f(A)}" /> が成り立つことを証明せよ。</p>
                    <ExerciseSolution>
                        <p>1) <InlineMath math="\overline{f(A)}" /> は <InlineMath math="Y" /> の閉集合である。</p>
                        <p>2) <InlineMath math="f" /> が連続であれば、その逆像 <InlineMath math="f^{-1}(\overline{f(A)})" /> は <InlineMath math="X" /> の閉集合である。</p>
                        <p>3) <InlineMath math="f(A) \subset \overline{f(A)}" /> より、<InlineMath math="A \subset f^{-1}(\overline{f(A)})" /> が成り立つ。</p>
                        <p>4) 閉包の性質（包含集合のうち最小の閉集合であること）より、<InlineMath math="\overline{A} \subset f^{-1}(\overline{f(A)})" /> となる。これに <InlineMath math="f" /> を施すと <InlineMath math="f(\overline{A}) \subset \overline{f(A)}" /> を得る。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>開基 <InlineMath math="\mathcal{B}" /> を持つ位相空間 <InlineMath math="Y" /> への写像 <InlineMath math="f: X \to Y" /> が連続であるための必要十分条件は、任意の開基の元 <InlineMath math="B \in \mathcal{B}" /> に対して <InlineMath math="f^{-1}(B)" /> が <InlineMath math="X" /> の開集合となることであることを示せ。</p>
                    <ExerciseSolution>
                        <p>1) 必要性は、開基の元が開集合であることから自明である。</p>
                        <p>2) 十分性について。任意の開集合 <InlineMath math="U \subset Y" /> をとる。開基の定義より、<InlineMath math="U = \bigcup_{\lambda \in \Lambda} B_\lambda" /> （各 <InlineMath math="B_\lambda \in \mathcal{B}" />）と表せる。</p>
                        <p>3) 逆像の集合演算に関する性質より、<InlineMath math="f^{-1}(U) = f^{-1}(\bigcup B_\lambda) = \bigcup f^{-1}(B_\lambda)" /> となる。</p>
                        <p>4) 仮定より各 <InlineMath math="f^{-1}(B_\lambda)" /> は開集合である。位相の公理により、開集合の任意個の合併は開集合であるから、<InlineMath math="f^{-1}(U)" /> もまた開集合である。よって <InlineMath math="f" /> は連続である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
