import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_4_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        写像 <InlineMath math="f \colon \mathbb{R} \to \mathbb{R}" /> を <InlineMath math="f(x) = x^2 + 1" /> と定義するとき、以下の問いに答えよ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li><InlineMath math="f" /> の定義域（Domain）と値域（Codomain）を答えよ。</li>
                        <li><InlineMath math="f" /> の像 <InlineMath math="f(\mathbb{R})" /> を求めよ。</li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>定義より、定義域は <b><InlineMath math="\mathbb{R}" /></b> 、値域（終域）は <b><InlineMath math="\mathbb{R}" /></b> である。</li>
                            <li>
                                任意の実数 <InlineMath math="x" /> に対して <InlineMath math="x^2 \geq 0" /> なので、<InlineMath math="f(x) = x^2 + 1 \geq 1" /> である。よって像は <b><InlineMath math="[1, +\infty)" /></b> である。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        次の写像の性質（単射・全射・全単射）を答えよ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li><InlineMath math="f \colon \mathbb{R} \to \mathbb{R}, \ f(x) = 2x - 3" /></li>
                        <li><InlineMath math="g \colon \mathbb{R} \to \mathbb{R}, \ g(x) = x^2" /></li>
                        <li><InlineMath math="h \colon \mathbb{R} \to [0, +\infty), \ h(x) = x^2" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><b>全単射</b>。任意の <InlineMath math="y \in \mathbb{R}" /> に対して <InlineMath math="x = (y+3)/2" /> がただ1つ定まる。</li>
                            <li><b>いずれでもない</b>。負の数に写る元がない（全射でない）し、<InlineMath math="g(1) = g(-1) = 1" /> となる（単射でない）。</li>
                            <li><b>全射</b>。値域を像に合わせているため全射になるが、単射ではない。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        恒等写像 <InlineMath math="\mathrm{id}_A" /> と、写像 <InlineMath math="f \colon A \to B" /> について、合成写像 <InlineMath math="f \circ \mathrm{id}_A" /> および <InlineMath math="\mathrm{id}_B \circ f" /> はどのような写像になるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            どちらも <b><InlineMath math="f" /></b> 自身に等しい。
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><InlineMath math="(f \circ \mathrm{id}_A)(a) = f(\mathrm{id}_A(a)) = f(a)" /></li>
                            <li><InlineMath math="(\mathrm{id}_B \circ f)(a) = \mathrm{id}_B(f(a)) = f(a)" /></li>
                        </ul>
                        <p className="mt-4">
                            恒等写像は、写像の合成において「1」のような単位律を構成する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        写像 <InlineMath math="f \colon \mathbb{R} \to \mathbb{R}" />、<InlineMath math="f(x) = x^2" /> について、以下の逆像（原像）を求めよ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li><InlineMath math="f^{-1}(\{4\})" /></li>
                        <li><InlineMath math="f^{-1}([-1, 9])" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><InlineMath math="x^2 = 4" /> を解いて、<b><InlineMath math="\{-2, 2\}" /></b>。</li>
                            <li>
                                <InlineMath math="x^2 \in [-1, 9]" /> すなわち <InlineMath math="-1 \leq x^2 \leq 9" /> を満たす実数 <InlineMath math="x" /> の範囲を求める。<br />
                                <InlineMath math="x^2 \geq 0" /> は常に満たされるから、実質的に <InlineMath math="0 \leq x^2 \leq 9" /> となる範囲を求めればよい。<br />
                                よって、<b><InlineMath math="[-3, 3]" /></b>。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        <InlineMath math="f \colon A \to B" /> と <InlineMath math="g \colon B \to C" /> がともに単射であれば、合成写像 <InlineMath math="g \circ f" /> も単射であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="a_1, a_2 \in A" /> に対して、<InlineMath math="(g \circ f)(a_1) = (g \circ f)(a_2)" /> と仮定する。
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>合成の定義より、<InlineMath math="g(f(a_1)) = g(f(a_2))" />。</li>
                            <li><InlineMath math="g" /> が単射であるから、<InlineMath math="f(a_1) = f(a_2)" />。</li>
                            <li><InlineMath math="f" /> が単射であるから、<InlineMath math="a_1 = a_2" />。</li>
                        </ul>
                        <p className="mt-4">
                            したがって、<InlineMath math="g \circ f" /> は単射である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        写像 <InlineMath math="f \colon A \to B" /> が全単射であるとき、その逆写像 <InlineMath math="f^{-1} \colon B \to A" /> がただ1つ存在し、全単射であることを簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f" /> が全単射であるとき、任意の元 <InlineMath math="b \in B" /> に対して <InlineMath math="f(a) = b" /> を満たす <InlineMath math="a \in A" /> が唯一つ存在する（全射性より存在し、単射性より一意）。
                        </p>
                        <p className="mt-4">
                            この対応を <InlineMath math="f^{-1}(b) = a" /> と定義すれば、これは終域 <InlineMath math="B" /> のすべての元に定義域 <InlineMath math="A" /> の元をただ1つ割り当てるため、写像となる。
                            また、この対応関係を逆にたどれば再び元の全単射 <InlineMath math="f" /> に戻るため、<InlineMath math="f^{-1}" /> も全単射である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        集合の像と逆像について、一般に成り立つものを選び、成り立たないものについては具体例を挙げよ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li><InlineMath math="f(A \cap B) = f(A) \cap f(B)" /></li>
                        <li><InlineMath math="f^{-1}(C \cap D) = f^{-1}(C) \cap f^{-1}(D)" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <b>一般には成り立たない（包含関係 <InlineMath math="\subset" /> のみ成立）。</b><br />
                                反例：<InlineMath math="f(x) = x^2, \ A = \{-1\}, \ B = \{1\}" /> とすると、<InlineMath math="A \cap B = \emptyset" /> なので左辺は <InlineMath math="\emptyset" /> 。一方、右辺は <InlineMath math="f(\{1\}) \cap f(\{-1\}) = \{1\} \cap \{1\} = \{1\}" /> となり等しくない。
                            </li>
                            <li>
                                <b>常に成り立つ。</b><br />
                                定義より、
                                <BlockMath math="\begin{aligned} x \in f^{-1}(C \cap D) &\iff f(x) \in C \cap D \\ &\iff (f(x) \in C \text{ かつ } f(x) \in D) \\ &\iff (x \in f^{-1}(C) \text{ かつ } x \in f^{-1}(D)) \end{aligned}" />
                                となるため。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        写像 <InlineMath math="f \colon A \to B" /> について、以下の命題（ Proposition 2.4-1 の一部）を証明せよ。
                        <BlockMath math="f^{-1}(B_1 \cup B_2) = f^{-1}(B_1) \cup f^{-1}(B_2)" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="x \in A" /> に対して以下の同値変形が成り立つ：
                        </p>
                        <BlockMath math="
                        \begin{aligned}
                            x \in f^{-1}(B_1 \cup B_2) &\iff f(x) \in B_1 \cup B_2 \\
                            &\iff f(x) \in B_1 \text{ または } f(x) \in B_2 \\
                            &\iff x \in f^{-1}(B_1) \text{ または } x \in f^{-1}(B_2) \\
                            &\iff x \in f^{-1}(B_1) \cup f^{-1}(B_2)
                        \end{aligned}
                        " />
                        <p className="mt-4">
                            要素が一致するため、集合として等しい。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        <InlineMath math="f \colon A \to B" /> が全単射であれば、任意の <InlineMath math="S \subset A" /> について、<InlineMath math="f(A \setminus S) = B \setminus f(S)" /> が成り立つことを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="x \in B" /> が <InlineMath math="f(A \setminus S)" /> に属することの同値条件を考える。全単射であれば各 <InlineMath math="x \in B" /> に対し一意に <InlineMath math="a \in A" /> が対応する。
                        </p>
                        <BlockMath math="
                        \begin{aligned}
                            x \in f(A \setminus S) &\iff \exists a \in A \setminus S,\ f(a) = x \\
                            &\iff \exists a \in A,\ (a \notin S \text{ かつ } f(a) = x)
                        \end{aligned}
                        " />
                        <p className="mt-4">
                            ここで、全単射性より <InlineMath math="f(a) = x" /> を満たす <InlineMath math="a" /> はただ1つであり、その <InlineMath math="a" /> について <InlineMath math="a \in S \iff x \in f(S)" /> が成り立つ。したがって：
                        </p>
                        <BlockMath math="
                        \begin{aligned}
                            \exists a \in A,\ (a \notin S \text{ かつ } f(a) = x) &\iff x \notin f(S) \\
                            &\iff x \in B \setminus f(S)
                        \end{aligned}
                        " />
                        <p className="mt-4">
                            よって両者は等しい。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        写像 <InlineMath math="f \colon X \to Y" /> と部分集合 <InlineMath math="A \subset X" /> について、包含関係 <InlineMath math="A \subset f^{-1}(f(A))" /> が常に成り立つことを示せ。また、<InlineMath math="f" /> が単射であれば等号 <InlineMath math="A = f^{-1}(f(A))" /> が成り立つことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>1. 包含関係 <InlineMath math="A \subset f^{-1}(f(A))" /> の証明：</b><br />
                            <InlineMath math="x \in A" /> とする。像の定義より、<InlineMath math="f(x) \in f(A)" /> である。<br />
                            逆像の定義 <InlineMath math="x \in f^{-1}(S) \iff f(x) \in S" /> において <InlineMath math="S = f(A)" /> と置けば、<InlineMath math="f(x) \in f(A) \iff x \in f^{-1}(f(A))" />。
                        </p>
                        <p className="mt-2">
                            したがって <InlineMath math="x \in A \implies x \in f^{-1}(f(A))" /> であり、常に包含関係が成り立つ。
                        </p>
                        <p className="mt-4">
                            <b>2. 単射の場合の等号の証明：</b><br />
                            <InlineMath math="f" /> が単射であると仮定し、<InlineMath math="f^{-1}(f(A)) \subset A" /> を示す。<br />
                            <InlineMath math="x' \in f^{-1}(f(A))" /> とすると、逆像の定義より <InlineMath math="f(x') \in f(A)" /> である。<br />
                            集合の像の定義より、ある <InlineMath math="a \in A" /> が存在して <InlineMath math="f(x') = f(a)" /> となる。
                        </p>
                        <p className="mt-2">
                            ここで、<InlineMath math="f" /> は単射であるから：
                            <BlockMath math="f(x') = f(a) \implies x' = a" />
                            <InlineMath math="a \in A" /> であるため、<InlineMath math="x' \in A" /> が得られる。
                        </p>
                        <p className="mt-2">
                            以上より <InlineMath math="f^{-1}(f(A)) \subset A" /> が示された。1 の結果と合わせることで、単射ならば等号が成立することが証明された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
