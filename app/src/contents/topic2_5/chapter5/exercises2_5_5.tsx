import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_5_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>位相空間 <InlineMath math="X" /> の部分集合 <InlineMath math="A" /> に対し、<b>相対位相（Relative Topology）</b>における開集合の定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 5.1-1 より、<InlineMath math="U" /> が <InlineMath math="X" /> の開集合であるとき、<InlineMath math="U \cap A" /> という形で表される集合を <InlineMath math="A" /> の開集合と定義する。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>有限個の位相空間の積 <InlineMath math="X_1 \times \dots \times X_n" /> における <b>積位相（Product Topology）</b>の定義およびその代表的な開基を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 5.2-1 より、各射影 <InlineMath math="p_i: \prod X_i \to X_i" /> を連続にする最小（最粗）の位相を積位相という。</p>
                        <p>その開基は、各成分の開集合 <InlineMath math="U_i \subset X_i" /> の直積 <InlineMath math="U_1 \times \dots \times U_n" /> の形をした集合全体（直積開集合の族）で与えられる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>位相空間 <InlineMath math="X" /> と全射写像 <InlineMath math="\pi: X \to Y" /> （または同値関係 <InlineMath math="\sim" />）が与えられたとき、<InlineMath math="Y" /> に導入される <b>商位相（Quotient Topology）</b>の定義を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 5.4-1 より、<InlineMath math="V \subset Y" /> が開集合であることの定義を、<InlineMath math="\pi^{-1}(V)" /> が <InlineMath math="X" /> の開集合であること、として定める位相を商位相という。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>位相空間 <InlineMath math="X" /> の部分空間 <InlineMath math="A" /> において、<InlineMath math="B \subset A" /> が <InlineMath math="A" /> の閉集合であることの必要十分条件を述べよ。また、<InlineMath math="B" /> の <InlineMath math="A" /> における閉包 <InlineMath math="\overline{B}_{A}" /> を <InlineMath math="X" /> における閉包を用いて表せ。</p>
                    <ExerciseSolution>
                        <p>1) Proposition 5.1-1 より、<InlineMath math="B" /> が <InlineMath math="A" /> の閉集合である必要十分条件は、<InlineMath math="X" /> のある閉集合 <InlineMath math="F" /> を用いて <InlineMath math="B = F \cap A" /> と書けることである。</p>
                        <p>2) 閉包の関係式：<InlineMath math="\overline{B}_{A} = \overline{B}_{X} \cap A" />。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>位相的性質が「遺伝的である」とはどのような意味か。また、<b>ハウスドルフ性</b>が遺伝的であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>1) 意味：ある空間がその性質を持つとき、その任意の（相対位相を導入した）部分空間も同じ性質を持つこと。</p>
                        <p>2) ハウスドルフ性の証明：<InlineMath math="X" /> をハウスドルフ、<InlineMath math="A \subset X" /> を部分空間とする。相異なる <InlineMath math="a, b \in A" /> は <InlineMath math="X" /> の元でもあるため、<InlineMath math="X" /> のハウスドルフ性より <InlineMath math="a \in U, b \in V, U \cap V = \emptyset" /> となる <InlineMath math="X" /> の開集合が存在する。このとき <InlineMath math="U \cap A, V \cap A" /> は <InlineMath math="A" /> の開集合であり、互いに素で各点を含む。よって <InlineMath math="A" /> もハウスドルフである。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>積空間の<b>普遍性（Universal Property）</b>とはどのような主張か。位相空間 <InlineMath math="Z" /> から積空間 <InlineMath math="X \times Y" /> への写像 <InlineMath math="f" /> の連続性を用いて述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 5.2-1 より。写像 <InlineMath math="f: Z \to X \times Y" /> が連続であるための必要十分条件は、各成分との合成（射影）<InlineMath math="p_X \circ f: Z \to X" /> および <InlineMath math="p_Y \circ f: Z \to Y" /> が共に連続であることである。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>無限個の積空間 <InlineMath math="\prod_{\lambda \in \Lambda} X_\lambda" /> において、<b>積位相</b>と<b>箱位相</b>の開基の構成の違いを、開集合の個数の観点から説明せよ。</p>
                    <ExerciseSolution>
                        <p>§5.2 備考より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>箱位相：</b> 各成分 <InlineMath math="X_\lambda" /> の開集合 <InlineMath math="U_\lambda" /> を任意に選んだ直積 <InlineMath math="\prod U_\lambda" /> を開基とする。</li>
                            <li><b>積位相：</b> 直積 <InlineMath math="\prod U_\lambda" /> のうち、<b>有限個を除いて <InlineMath math="U_\lambda = X_\lambda" /> であるもの</b>（有限個の成分のみ制限があるもの）を開基とする。</li>
                        </ul>
                        <p className="mt-2">積位相は箱位相よりも粗い位相であり、無限積において連続性やコンパクト性を保つために採用される。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p><b>チコノフの定理 (Tychonoff's Theorem)</b> の主張を述べ、この定理が数学全体において強力とされる理由、および証明に必要となる公理について簡潔に記せ。</p>
                    <ExerciseSolution>
                        <p>主張：Theorem 5.5-1 より、<b>「コンパクトな位相空間の任意個（無限個も含む）の直積空間は、積位相においてコンパクトである」</b>。</p>
                        <p>理由：無限個の対象の集まりから全体のコンパクト性を導く強力な道具であり、関数解析学の「バナッハ・アラオグルの定理」など、現代数学の根幹を支える多くの定理の証明に不可欠であるから。</p>
                        <p>公理：この定理の証明には、本質的に<b>選択公理</b>（またはそれと同値なツォルンの補題など）が必要であり、それと論理的に同値であることも知られている。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>閉区間 <InlineMath math="I = [0, 1]" /> において、両端点を同一視する同値関係 <InlineMath math="0 \sim 1" /> を考える。この商空間 <InlineMath math="I/{\sim}" /> が円 <InlineMath math="S^1" /> と同相であることを、商写像の性質を用いて説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 5.5-1 より。写像 <InlineMath math="f: [0, 1] \to S^1" /> を <InlineMath math="f(t) = (\cos 2\pi t, \sin 2\pi t)" /> と定義する。この写像は、<InlineMath math="f(0) = f(1)" /> を満たし、商空間の普遍性（Theorem 5.4-1）により商空間からの単射連続写像 <InlineMath math="\bar{f}: I/{\sim} \to S^1" /> を誘導する。この <InlineMath math="\bar{f}" /> は全単射であり、コンパクト空間からハウスドルフ空間への連続写像であるため（Theorem 7.3-2 より）同相写像となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>商写像の<b>普遍性（Universal Property）</b>（Theorem 5.4-1）に基づき、連続写像 <InlineMath math="f: X \to Z" /> が与えられたとき、<InlineMath math="f" /> が商空間 <InlineMath math="X/{\sim}" /> からの写像として分解可能であるための条件、およびそのときの連続性について述べよ。</p>
                    <ExerciseSolution>
                        <p>1) 条件：<InlineMath math="x \sim y \implies f(x) = f(y)" /> が成り立つこと。すなわち、<InlineMath math="f" /> が同一視される点を同じ点へ移す（同値関係と両立する）こと。</p>
                        <p>2) 結論：このとき、連続写像 <InlineMath math="\bar{f}: X/{\sim} \to Z" /> で <InlineMath math="f = \bar{f} \circ \pi" /> を満たすものが唯一存在する。<InlineMath math="f" /> が連続であれば、誘導された <InlineMath math="\bar{f}" /> も商位相の定義により自動的に連続となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
