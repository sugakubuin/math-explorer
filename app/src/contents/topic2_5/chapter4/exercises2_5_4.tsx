import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_5_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>二つの位相空間 <InlineMath math="X, Y" /> が<b>同相（Homeomorphic）</b>であることの定義を、写像を用いて述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 4.1-1 より、全単射 <InlineMath math="f: X \to Y" /> が存在し、<InlineMath math="f" /> とその逆写像 <InlineMath math="f^{-1}" /> が共に連続であるとき、<InlineMath math="f" /> を<b>同相写像</b>といい、<InlineMath math="X" /> と <InlineMath math="Y" /> は同相であるという。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>位相空間の性質 <InlineMath math="P" /> が<b>位相的不変量（Topological Invariant）</b>であることの定義を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 4.3-1 より、同相な二つの位相空間において、一方が性質 <InlineMath math="P" /> を持つならば、他方も必ず性質 <InlineMath math="P" /> を持つとき、性質 <InlineMath math="P" /> は位相的不変量であるという。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>位相空間 <InlineMath math="X" /> から <InlineMath math="Y" /> への連続写像 <InlineMath math="f: X \to Y" /> が<b>埋め込み（Embedding）</b>であるための条件を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 4.4-1 より、<InlineMath math="f" /> が <InlineMath math="X" /> からその像 <InlineMath math="f(X) \subset Y" /> （相対位相を導入）への同相写像であるとき、<InlineMath math="f" /> を埋め込みという。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>実数直線 <InlineMath math="\mathbb{R}" /> と開区間 <InlineMath math="(-1, 1)" /> が同相であることを、具体的な全単射連続関数を挙げて説明せよ。</p>
                    <ExerciseSolution>
                        <p>例えば、写像 <InlineMath math="f: (-1, 1) \to \mathbb{R}" /> を <InlineMath math="f(x) = \tan\left( \frac{\pi}{2}x \right)" /> と定義する。</p>
                        <p>この関数は開区間全体で単調増加する連続関数であり、<InlineMath math="x \to \pm 1" /> で <InlineMath math="\pm \infty" /> に発散するため、<InlineMath math="\mathbb{R}" /> への全単射となる。また、その逆写像 <InlineMath math="f^{-1}(y) = \frac{2}{\pi}\arctan(y)" /> も連続である。よって <InlineMath math="f" /> は同相写像であり、両者は同相である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>「第二可算公理を満たす」ことが位相的不変量であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 4.3-1 の議論に基づく。<InlineMath math="X" /> が可算開基 <InlineMath math="\mathcal{B} = \{B_n\}" /> を持ち、<InlineMath math="f: X \to Y" /> が同相写像であるとする。</p>
                        <p><InlineMath math="Y" /> の集合族 <InlineMath math="\mathcal{B}' = \{f(B_n)\}" /> を考えると、同相写像（開写像）により各 <InlineMath math="f(B_n)" /> は <InlineMath math="Y" /> の開集合であり、個数は可算である。また、<InlineMath math="Y" /> の任意の開集合 <InlineMath math="V" /> は <InlineMath math="f(f^{-1}(V))" /> と書け、<InlineMath math="f^{-1}(V)" /> が <InlineMath math="\mathcal{B}" /> の元の合併で表せるため、<InlineMath math="V" /> も <InlineMath math="\mathcal{B}'" /> の元の合併で表せる。よって <InlineMath math="\mathcal{B}'" /> は <InlineMath math="Y" /> の開基となり、<InlineMath math="Y" /> も第二可算公理を満たす。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>閉区間 <InlineMath math="[0, 1]" /> と開区間 <InlineMath math="(0, 1)" /> は同相か。理由と共に答えよ。</p>
                    <ExerciseSolution>
                        <p><b>同相ではない。</b></p>
                        <p>理由の一つとして、<b>コンパクト性</b>（チャプター 7 で詳述）の違いが挙げられる。閉区間は有界閉集合でありコンパクトであるが、開区間はコンパクトではない。あるいは、一点を除去した際の連結性の変化でも説明できる。開区間から任意の一点を除くと非連結になるが、閉区間から端点 <InlineMath math="0" /> を除いても <InlineMath math="(0, 1]" /> は連結なままである。位相的不変量が異なるため、これらは同相になり得ない。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>平面上の円 <InlineMath math="S^1 = \{ (x, y) \mid x^2 + y^2 = 1 \}" /> と楕円 <InlineMath math="E = \{ (x, y) \mid \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \}" /> が同相であることを、直感的な変形の観点から説明せよ。</p>
                    <ExerciseSolution>
                        <p>楕円は円を各軸方向に <InlineMath math="a" /> 倍、<InlineMath math="b" /> 倍に引き伸ばしたものとみなせる。このような拡大・縮小操作は連続であり、引きちぎったり貼り合わせたりする操作を含まないため、円を連続的に変形して楕円に重ねることができる。数学的には <InlineMath math="f(x, y) = (ax, by)" /> という写像が同相写像を与える。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={8}>
                    <p>同相写像の定義において、逆写像 <InlineMath math="f^{-1}" /> の連続性が独立に必要な例として、半開区間 <InlineMath math="[0, 2\pi)" /> から円 <InlineMath math="S^1" /> への写像 <InlineMath math="f(t) = (\cos t, \sin t)" /> を考える。この写像が連続な全単射であるにもかかわらず、同相写像ではない（逆写像が連続でない）理由を、開集合の保存の観点から考察せよ。</p>
                    <ExerciseSolution>
                        <p>§4.1 備考の議論に基づく。この写像 <InlineMath math="f" /> において、<InlineMath math="[0, 2\pi)" /> における開集合 <InlineMath math="U = [0, \epsilon)" /> を考える。もし <InlineMath math="f" /> が同相写像なら、その像 <InlineMath math="f(U)" /> は <InlineMath math="S^1" /> の開集合でなければならない。</p>
                        <p>しかし、像 <InlineMath math="f(U)" /> は円周上の点 <InlineMath math="(1, 0)" /> を端点として含む孤であり、円周上の相対位相において <InlineMath math="(1, 0)" /> の近傍を含まない（一方向にしか伸びていない）。したがって <InlineMath math="f(U)" /> は開集合ではなく、逆写像 <InlineMath math="f^{-1}" /> は点 <InlineMath math="f(0)" /> において連続ではない。ゆえに <InlineMath math="f" /> は同相写像ではない。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>位相空間の間の「同相である」という関係が<b>同値関係</b>であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 4.1-1 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>反射律：</b> 恒等写像 <InlineMath math="\mathrm{id}_X" /> は同相写像であるから、<InlineMath math="X \cong X" />。</li>
                            <li><b>対称律：</b> <InlineMath math="f: X \to Y" /> が同相写像なら、その定義より <InlineMath math="f^{-1}: Y \to X" /> も同相写像である。</li>
                            <li><b>推移律：</b> <InlineMath math="f: X \to Y" /> と <InlineMath math="g: Y \to Z" /> が同相写像なら、合成 <InlineMath math="g \circ f" /> とその逆写像 <InlineMath math="f^{-1} \circ g^{-1}" /> も連続な全単射（＝同相写像）である。</li>
                        </ul>
                        <p className="mt-2">以上より、同相関係は同値関係である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p><b>ウリゾーンの距離化定理（Urysohn's Metrization Theorem）</b>の主張を、分離公理と可算公理を用いて記述し、その位相幾何学における意義を述べよ。</p>
                    <ExerciseSolution>
                        <p>主張：<b>「第二可算公理を満たす正則空間（<InlineMath math="T_3" /> 空間）は距離化可能である」</b>（＝その位相を誘導する距離関数が存在する）。</p>
                        <p>意義：通常、距離空間は定義から自動的に位相空間となるが、本定理はその逆、すなわち「どのような抽象的な位相空間が距離空間として実現できるか」という問いに対する一つの根本的な回答を与えている。位相的性質（分離性と可算性）のみから距離という計量構造の存在を保証する点で非常に重要である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
