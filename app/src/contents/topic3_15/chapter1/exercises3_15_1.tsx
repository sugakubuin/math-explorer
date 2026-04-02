import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_15_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="1" number={1}>
                    <p>圏 <InlineMath math="\mathcal{C}" /> の任意の対象 <InlineMath math="A, B" /> および射 <InlineMath math="f : A \to B" /> に対して、恒等射が満たすべき単位律（Identity law）の式を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 1.1-1 より、以下の式が成り立つ。</p>
                        <BlockMath math="\mathrm{id}_B \circ f = f \quad \text{かつ} \quad f \circ \mathrm{id}_A = f" />
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="1" number={2}>
                    <p>集合の圏 <InlineMath math="\mathbf{Set}" /> において、モノ射とエピ射はそれぞれどのような写像と同値か答えよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 1.3-1 より、<InlineMath math="\mathbf{Set}" /> において以下と同値である。</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>モノ射：単射</li>
                            <li>エピ射：全射</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="1" number={3}>
                    <p>圏 <InlineMath math="\mathcal{C}" /> に対する反対圏 <InlineMath math="\mathcal{C}^{op}" /> において、元の圏での射 <InlineMath math="f : A \to B" /> および <InlineMath math="g : B \to C" /> から定まる対応する射の合成 <InlineMath math="f^{op} \circ^{op} g^{op}" /> を、元の圏の合成を用いて表せ。</p>
                    <ExerciseSolution>
                        <p>Definition 1.4-1 より、合成の順序が逆になるため以下のように表される。</p>
                        <BlockMath math="f^{op} \circ^{op} g^{op} = (g \circ f)^{op}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="1" number={4}>
                    <p>前順序集合の圏（Example 1.2-3）において、ある対象（要素）<InlineMath math="a" /> と <InlineMath math="b" /> が同型（<InlineMath math="a \cong b" />）であることと、順序関係が <InlineMath math="a \leq b" /> かつ <InlineMath math="b \leq a" /> となることが同値であることを示せ。</p>
                    <ExerciseSolution>
                        <p>定義より、<InlineMath math="a \cong b" /> とは互いに逆射となるような射 <InlineMath math="f : a \to b" /> と <InlineMath math="g : b \to a" /> が存在することを意味する。</p>
                        <p>Example 1.2-3 より、射 <InlineMath math="a \to b" /> が存在することは <InlineMath math="a \leq b" /> と定義されている。</p>
                        <p>したがって、同型であることは <InlineMath math="a \leq b" /> かつ <InlineMath math="b \leq a" /> を満たすことと同値である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="1" number={5}>
                    <p>環の圏 <InlineMath math="\mathbf{Ring}" /> において、自然な包含写像 <InlineMath math="\iota : \mathbb{Z} \hookrightarrow \mathbb{Q}" /> は全射ではないが、エピ射になる。その理由を2つの環準同型 <InlineMath math="g, h : \mathbb{Q} \to R" /> を用いて説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 1.3-1 より、<InlineMath math="g \circ \iota = h \circ \iota" /> と仮定する。すなわち、任意の整数 <InlineMath math="m, n \in \mathbb{Z}" /> (<InlineMath math="n \neq 0" />) について <InlineMath math="g(m) = h(m)" /> が成り立つ。</p>
                        <p>任意の有理数 <InlineMath math="m/n \in \mathbb{Q}" /> について計算すると、環準同型であることを用いて以下が成り立つ。</p>
                        <BlockMath math="\begin{aligned} g(m/n) &= g(m \cdot n^{-1}) = g(m) \cdot g(n)^{-1} \\ &= h(m) \cdot h(n)^{-1} = h(m \cdot n^{-1}) = h(m/n) \end{aligned}" />
                        <p>したがって <InlineMath math="g = h" /> が従うため、Definition 1.3-2 エピ射の定義を満たす。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="1" number={6}>
                    <p>同型射は必ずモノ射であることを示せ。</p>
                    <ExerciseSolution>
                        <p>圏 <InlineMath math="\mathcal{C}" /> の対象 <InlineMath math="A, B" /> および射 <InlineMath math="f : A \to B" /> が同型射であるとする。Definition 1.3-1 より逆射 <InlineMath math="g : B \to A" /> が存在し、<InlineMath math="g \circ f = \mathrm{id}_A" /> を満たす。</p>
                        <p>任意の対象 <InlineMath math="X" /> と射 <InlineMath math="h_1, h_2 : X \to A" /> について、<InlineMath math="f \circ h_1 = f \circ h_2" /> を仮定する。</p>
                        <p>両辺の左から <InlineMath math="g" /> を合成すると、</p>
                        <BlockMath math="g \circ (f \circ h_1) = g \circ (f \circ h_2)" />
                        <p>結合律（Definition 1.1-1）および単位律より、</p>
                        <BlockMath math="\begin{aligned} (g \circ f) \circ h_1 &= (g \circ f) \circ h_2 \\ \mathrm{id}_A \circ h_1 &= \mathrm{id}_A \circ h_2 \\ h_1 &= h_2 \end{aligned}" />
                        <p>が成り立つ。したがって、Definition 1.3-2 より <InlineMath math="f" /> はモノ射である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="1" number={7}>
                    <p>射 <InlineMath math="f : A \to B" /> と <InlineMath math="g : B \to C" /> の合成 <InlineMath math="g \circ f : A \to C" /> がモノ射であるならば、<InlineMath math="f" /> もモノ射であることを示せ。</p>
                    <ExerciseSolution>
                        <p>任意の対象 <InlineMath math="X" /> と射 <InlineMath math="h_1, h_2 : X \to A" /> について、<InlineMath math="f \circ h_1 = f \circ h_2" /> を仮定する。</p>
                        <p>両辺の左から <InlineMath math="g" /> を合成すると、</p>
                        <BlockMath math="g \circ (f \circ h_1) = g \circ (f \circ h_2)" />
                        <p>結合律より、</p>
                        <BlockMath math="(g \circ f) \circ h_1 = (g \circ f) \circ h_2" />
                        <p>となる。仮定より <InlineMath math="g \circ f" /> はモノ射であるから、Definition 1.3-2 より左からキャンセルできて、</p>
                        <BlockMath math="h_1 = h_2" />
                        <p>となる。よって <InlineMath math="f" /> はモノ射である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="1" number={8}>
                    <p>Proposition 1.3-2（同型射の一意性）を証明せよ。すなわち、圏 <InlineMath math="\mathcal{C}" /> の射 <InlineMath math="f : A \to B" /> が2つの逆射 <InlineMath math="g, g' : B \to A" /> を持つと仮定したとき、必ず <InlineMath math="g = g'" /> となることを示せ。</p>
                    <ExerciseSolution>
                        <p>同型射（Definition 1.3-1）の逆射の定義より、以下の関係式が成り立つ。</p>
                        <BlockMath math="\begin{aligned} g \circ f &= \mathrm{id}_A \\ f \circ g &= \mathrm{id}_B \\ g' \circ f &= \mathrm{id}_A \\ f \circ g' &= \mathrm{id}_B \end{aligned}" />
                        <p>ここで射 <InlineMath math="g" /> を考えると、単位律（Definition 1.1-1）より以下が成り立つ。</p>
                        <BlockMath math="g = g \circ \mathrm{id}_B" />
                        <p>右辺の <InlineMath math="\mathrm{id}_B" /> に <InlineMath math="f \circ g' = \mathrm{id}_B" /> を代入すると、</p>
                        <BlockMath math="g = g \circ (f \circ g')" />
                        <p>圏の結合律を用いて書き換えると、</p>
                        <BlockMath math="g = (g \circ f) \circ g'" />
                        <p>ここで <InlineMath math="g \circ f = \mathrm{id}_A" /> なので、これを代入し、再び単位律を用いると、</p>
                        <BlockMath math="g = \mathrm{id}_A \circ g' = g'" />
                        <p>よって2つの逆射は一致することが示された。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="1" number={9}>
                    <p>射 <InlineMath math="f : A \to B" /> と <InlineMath math="g : B \to C" /> について、その合成 <InlineMath math="g \circ f : A \to C" /> がエピ射であるならば、<InlineMath math="g" /> もエピ射であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>任意の対象 <InlineMath math="Y" /> と、2つの射 <InlineMath math="h_1, h_2 : C \to Y" /> について、</p>
                        <BlockMath math="h_1 \circ g = h_2 \circ g" />
                        <p>を仮定する。この等式の両辺の右から <InlineMath math="f" /> を合成すると、</p>
                        <BlockMath math="(h_1 \circ g) \circ f = (h_2 \circ g) \circ f" />
                        <p>結合律（Definition 1.1-1）により、</p>
                        <BlockMath math="h_1 \circ (g \circ f) = h_2 \circ (g \circ f)" />
                        <p>を得る。ここで条件より <InlineMath math="g \circ f" /> はエピ射である（Definition 1.3-2）ため、右からキャンセルすることができて、</p>
                        <BlockMath math="h_1 = h_2" />
                        <p>が成り立つ。したがって、<InlineMath math="g" /> はエピ射であることが示された。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="1" number={10}>
                    <p>2つの圏 <InlineMath math="\mathcal{C}" /> と <InlineMath math="\mathcal{D}" /> の積圏 <InlineMath math="\mathcal{C} \times \mathcal{D}" />（Definition 1.4-2）において、射 <InlineMath math="(f, g)" /> が同型射であることと、<InlineMath math="f" /> が <InlineMath math="\mathcal{C}" /> において同型射であり、かつ <InlineMath math="g" /> が <InlineMath math="\mathcal{D}" /> において同型射であることが同値であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>まず、<InlineMath math="(f, g) : (C_1, D_1) \to (C_2, D_2)" /> が積圏において同型射であると仮定する。これはある射 <InlineMath math="(f', g') : (C_2, D_2) \to (C_1, D_1)" /> が存在し、</p>
                        <BlockMath math="\begin{aligned} (f', g') \circ (f, g) &= \mathrm{id}_{(C_1, D_1)} \\ (f, g) \circ (f', g') &= \mathrm{id}_{(C_2, D_2)} \end{aligned}" />
                        <p>を満たすことと同値である。積圏における合成と恒等射の定義より、これを成分ごとに分解すると、</p>
                        <BlockMath math="\begin{aligned} (f' \circ f, g' \circ g) &= (\mathrm{id}_{C_1}, \mathrm{id}_{D_1}) \\ (f \circ f', g \circ g') &= (\mathrm{id}_{C_2}, \mathrm{id}_{D_2}) \end{aligned}" />
                        <p>したがって、各成分について、</p>
                        <BlockMath math="f' \circ f = \mathrm{id}_{C_1}, \quad f \circ f' = \mathrm{id}_{C_2}" />
                        <BlockMath math="g' \circ g = \mathrm{id}_{D_1}, \quad g \circ g' = \mathrm{id}_{D_2}" />
                        <p>が成り立つ。これは <InlineMath math="f" /> と <InlineMath math="g" /> がそれぞれ同型射であることを意味する。</p>
                        <p>逆に、<InlineMath math="f" /> と <InlineMath math="g" /> がそれぞれの圏で同型射であれば、その逆射 <InlineMath math="f^{-1}, g^{-1}" /> を用いて <InlineMath math="(f^{-1}, g^{-1})" /> という積圏上の射を構成できる。計算を逆にたどれば、これが <InlineMath math="(f, g)" /> の逆射として振る舞うことがわかり、<InlineMath math="(f, g)" /> は同型射となる。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
