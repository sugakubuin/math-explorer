import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_4_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        集合 <InlineMath math="A" /> 上の関係 <InlineMath math="R" /> が、次の4つの性質を持つための定義をそれぞれ記せ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li>反射律 (Reflexivity)</li>
                        <li>対称律 (Symmetry)</li>
                        <li>推移律 (Transitivity)</li>
                        <li>反対称律 (Antisymmetry)</li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-4">
                            <li><b>反射律</b>：すべての <InlineMath math="a \in A" /> に対して <InlineMath math="a R a" /> が成り立つ。</li>
                            <li><b>対称律</b>：任意の <InlineMath math="a, b \in A" /> に対して <InlineMath math="a R b \implies b R a" /> が成り立つ。</li>
                            <li><b>推移律</b>：任意の <InlineMath math="a, b, c \in A" /> に対して <InlineMath math="a R b" /> かつ <InlineMath math="b R c \implies a R c" /> が成り立つ。</li>
                            <li><b>反対称律</b>：任意の <InlineMath math="a, b \in A" /> に対して <InlineMath math="a R b" /> かつ <InlineMath math="b R a \implies a = b" /> が成り立つ。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        関係が<b>同値関係 (Equivalence Relation)</b>であるために必要な3つの性質を挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            以下の3つの性質をすべて満たすとき、同値関係と呼ばれる：
                        </p>
                        <ul className="list-decimal list-inside ml-4 mt-2 space-y-2">
                            <li><b>反射律</b></li>
                            <li><b>対称律</b></li>
                            <li><b>推移律</b></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        集合 <InlineMath math="A" /> 上の同値関係 <InlineMath math="\sim" /> について、元 <InlineMath math="a \in A" /> の<b>同値類 (Equivalence Class)</b> <InlineMath math="[a]" /> の定義を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="a" /> と関係を持つ <InlineMath math="A" /> の元全体の集合として定義される：
                        </p>
                        <BlockMath math="[a] = \{ x \in A \mid x \sim a \}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        整数全体の集合 <InlineMath math="\mathbb{Z}" /> 上の次の関係が、どの性質（反射・対称・推移・反対称）を持つか答えよ。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                        <li>不等号 <InlineMath math="<" /></li>
                        <li>絶対値が等しい関係 <InlineMath math="R = \{ (a, b) \in \mathbb{Z} \times \mathbb{Z} \mid |a| = |b| \}" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <b>推移律のみ</b>。
                                <InlineMath math="a < a" /> は成り立たない（反射でない）。また、<InlineMath math="a < b \implies b < a" /> は成り立たない（対称でない）。さらに、<InlineMath math="a < b" /> かつ <InlineMath math="b < a" /> となることはない（前提が偽となり反対称律は形式的に真とも取れるが、一般には順序関係の反対称性は <InlineMath math="\leq" /> について議論される）。本設問の意図としては<b>推移律</b>である。
                            </li>
                            <li>
                                <b>反射律・対称律・推移律</b>。
                                同値関係である。<InlineMath math="a = b" /> かつ <InlineMath math="b = a \implies a = b" /> は成り立つが、<InlineMath math="1 R (-1)" /> かつ <InlineMath math="(-1) R 1" /> だが <InlineMath math="1 \neq -1" /> であるため、反対称律は満たさない。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        <InlineMath math="n = 5" /> としたとき、整数の合同関係 <InlineMath math="a \equiv b \pmod{5}" /> による商集合 <InlineMath math="\mathbb{Z} / \equiv" /> を外延的記法で表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            5で割った余りによって整数を分類すると、余りは 0, 1, 2, 3, 4 のいずれかになる。
                            したがって、商集合は以下の5つの同値類からなる集合である：
                        </p>
                        <BlockMath math="\mathbb{Z}/{\equiv} = \{ [0], [1], [2], [3], [4] \}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        集合 <InlineMath math="A = \{ a, b, c \}" /> 上の2項関係 <InlineMath math="R = \{ (a, a), (b, b), (c, c), (a, b), (b, a) \}" /> が同値関係であることを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-3">
                            <li><b>反射律</b>：<InlineMath math="(a, a), (b, b), (c, c) \in R" /> より。</li>
                            <li><b>対称律</b>：<InlineMath math="(a, b) \in R \iff (b, a) \in R" /> より。</li>
                            <li><b>推移律</b>：<InlineMath math="(a, b) \in R" /> かつ <InlineMath math="(b, a) \in R \implies (a, a) \in R" /> 、および <InlineMath math="(b, a) \in R" /> かつ <InlineMath math="(a, b) \in R \implies (b, b) \in R" /> 等がすべて成立することを直接確認できる。</li>
                        </ul>
                        <p className="mt-4">
                            3つの性質を満たすため、これは同値関係である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        集合 <InlineMath math="A" /> において、同値関係 <InlineMath math="\sim" /> による商写像を <InlineMath math="\pi \colon A \to A/\sim, \ a \mapsto [a]" /> とする。<br />
                        <InlineMath math="\pi" /> が必ず全射であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            商集合 <InlineMath math="A/\sim" /> の任意の元を <InlineMath math="X" /> とすると、商集合の定義により、ある <InlineMath math="a \in A" /> が存在して <InlineMath math="X = [a]" /> と表される。
                        </p>
                        <p className="mt-4">
                            商写像の定義 <InlineMath math="\pi(a) = [a]" /> より、<InlineMath math="\pi(a) = X" /> である。
                            したがって、商集合の任意の元に対して対応する定義域の元が存在するため、<InlineMath math="\pi" /> は全射である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        同値類について、次の命題（ Proposition 3.3-1 ）を証明せよ。<br />
                        「 <InlineMath math="[a] = [b] \iff a \sim b" /> 」
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>(<InlineMath math="\implies" />) の証明：</b><br />
                            <InlineMath math="[a] = [b]" /> と仮定する。反射律より <InlineMath math="a \in [a]" /> であるから、<InlineMath math="a \in [b]" /> である。<br />
                            同値類の定義より <InlineMath math="a \sim b" /> が成り立つ。
                        </p>
                        <p className="mt-4">
                            <b>(<InlineMath math="\impliedby" />) の証明：</b><br />
                            <InlineMath math="a \sim b" /> と仮定する。集合の一致を示すために両方向の包含関係を示す。
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>
                                <InlineMath math="x \in [a]" /> とすると、<InlineMath math="x \sim a" />。仮定 <InlineMath math="a \sim b" /> との推移律により <InlineMath math="x \sim b" />、よって <InlineMath math="x \in [b]" />。
                            </li>
                            <li>
                                <InlineMath math="x \in [b]" /> とすると、<InlineMath math="x \sim b" />。仮定 <InlineMath math="a \sim b" /> から対称律より <InlineMath math="b \sim a" /> なので、推移律により <InlineMath math="x \sim a" />、よって <InlineMath math="x \in [a]" />。
                            </li>
                        </ul>
                        <p className="mt-4">
                            以上より <InlineMath math="[a] = [b]" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        集合 <InlineMath math="A" /> の分割 <InlineMath math="\mathcal{P}" /> （互いに素な空ではない部分集合の集まりで、和集合が <InlineMath math="A" /> に一致するもの）が与えられたとき、関係 <InlineMath math="R" /> を次のように定める：
                        <BlockMath math="x R y \iff \text{ある } X \in \mathcal{P} \text{ が存在して } (x \in X \text{ かつ } y \in X)" />
                        このとき、<InlineMath math="R" /> は <InlineMath math="A" /> 上の同値関係になることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <b>反射律</b>：分割は <InlineMath math="A" /> を覆うため、任意の <InlineMath math="a \in A" /> は必ずいずれかの <InlineMath math="X \in \mathcal{P}" /> に属する。よって <InlineMath math="a \in X, a \in X" /> より <InlineMath math="a R a" />。
                            </li>
                            <li>
                                <b>対称律</b>：<InlineMath math="x R y" /> ならば、同一の <InlineMath math="X" /> に属しているため <InlineMath math="y R x" /> も明らかに成り立つ。
                            </li>
                            <li>
                                <b>推移律</b>：<InlineMath math="x R y" /> かつ <InlineMath math="y R z" /> とする。<InlineMath math="x, y \in X" /> および <InlineMath math="y, z \in Y" /> となる <InlineMath math="X, Y \in \mathcal{P}" /> が存在する。
                                分割の定義より、<InlineMath math="y \in X \cap Y" /> であれば <InlineMath math="X = Y" /> でなければならない。よって <InlineMath math="x, z \in X" /> となり、<InlineMath math="x R z" />。
                            </li>
                        </ol>
                        <p className="mt-4">
                            3条件を満たすため、<InlineMath math="R" /> は同値関係である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        <b>商写像の普遍性 (Theorem 3.4-1)</b>について、次の問いに答えよ。<br />
                        写像 <InlineMath math="f \colon A \to B" /> について、<InlineMath math="x \sim y \iff f(x) = f(y)" /> という同値関係を考える（このとき <InlineMath math="\sim" /> を <InlineMath math="f" /> によって誘導される同値関係という）。<br />
                        このとき、商写像 <InlineMath math="\pi \colon A \to A/\sim" /> に対して、次の図式を可換にする<b>単射</b> <InlineMath math="\bar{f} \colon A/\sim \to B" /> が一意に存在することを示せ。
                        <BlockMath math="f = \bar{f} \circ \pi" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>1. <InlineMath math="\bar{f}" /> の構成とウェル定義性：</b><br />
                            <InlineMath math="\bar{f}([a]) = f(a)" /> と定義する。同値関係の定義より、<InlineMath math="[a] = [a'] \iff a \sim a' \iff f(a) = f(a')" /> であるため、代表元の選び方によらず値が定まり、この定義はウェル定義である。
                        </p>
                        <p className="mt-2">
                            <b>2. 可換性：</b><br />
                            定義より <InlineMath math="(\bar{f} \circ \pi)(a) = \bar{f}([a]) = f(a)" /> となり、<InlineMath math="f = \bar{f} \circ \pi" /> を満たす。
                        </p>
                        <p className="mt-2">
                            <b>3. 単射性：</b><br />
                            <InlineMath math="\bar{f}([a]) = \bar{f}([a'])" /> とすると、<InlineMath math="f(a) = f(a')" />。これは同値関係の定義より <InlineMath math="a \sim a'" /> すなわち <InlineMath math="[a] = [a']" /> を意味する。よって単射である。
                        </p>
                        <p className="mt-2">
                            <b>4. 一意性：</b><br />
                            もし <InlineMath math="f = h \circ \pi" /> を満たす別の <InlineMath math="h" /> があれば、<InlineMath math="h([a]) = h(\pi(a)) = f(a)" /> となり、構成した <InlineMath math="\bar{f}" /> と一致する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
