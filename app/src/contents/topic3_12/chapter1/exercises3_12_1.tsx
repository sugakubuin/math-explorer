import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_12_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        位相空間 <InlineMath math="X, Y" /> の間の 2 つの連続写像 <InlineMath math="f, g : X \to Y" /> が <b>ホモトピック（homotopic）</b> である（Definition 1.1-1）とは、どのような連続写像 <InlineMath math="H" /> が存在することか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-1 より、連続写像 <InlineMath math="H : X \times [0, 1] \to Y" /> が存在して、すべての <InlineMath math="x \in X" /> に対して
                            <BlockMath math="H(x, 0) = f(x), \quad H(x, 1) = g(x)" />
                            を満たすことをいう。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        位相空間 <InlineMath math="X" /> が <b>可縮（contractible）</b> である（Definition 1.2-1）ことの定義を、ホモトピー同値の記号を用いて表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-1 より、<InlineMath math="X" /> がある一点空間 <InlineMath math="\{\mathrm{pt}\}" /> とホモトピー同値であること、すなわち
                            <BlockMath math="X \simeq \{\mathrm{pt}\}" />
                            を満たすことをいう。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        位相空間 <InlineMath math="X" /> からその部分空間 <InlineMath math="A" /> への連続写像 <InlineMath math="r : X \to A" /> が <b>レトラクション</b> である（Definition 1.3-1）ための条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-1 より、部分空間 <InlineMath math="A" /> 上のすべての点において恒等写像として振る舞うこと。すなわち
                            <BlockMath math="\forall a \in A, \quad r(a) = a" />
                            （または <InlineMath math="r|_A = \mathrm{id}_A" />）を満たすことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> 上で、2 つの連続写像 <InlineMath math="f, g : X \to \mathbb{R}^n" /> を結ぶ <b>直線ホモトピー</b> <InlineMath math="H(x, t)" />（Example 1.1-1）の定義式を記し、それが <InlineMath math="t=0" /> と <InlineMath math="t=1" /> で条件を満たすことを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            直線ホモトピーの定義式は
                            <BlockMath math="H(x, t) = (1-t)f(x) + tg(x)" />
                            である。
                        </p>
                        <p>
                            この式において <InlineMath math="t=0" /> を代入すると <InlineMath math="H(x, 0) = 1 \cdot f(x) + 0 \cdot g(x) = f(x)" /> となる。
                            また、<InlineMath math="t=1" /> を代入すると <InlineMath math="H(x, 1) = 0 \cdot f(x) + 1 \cdot g(x) = g(x)" /> となり、確かにホモトピーの条件を満たす。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        可縮空間 <InlineMath math="X" /> 上の任意のループ（閉曲線）について、Proposition 1.2-1 はどのような性質が成り立つと主張しているか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.2-1 より、可縮空間上の任意のループは、<b>連続的に一点に縮めることができる</b>と主張している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        部分空間 <InlineMath math="A" /> が <InlineMath math="X" /> の <b>変形レトラクト</b> である（Definition 1.3-2）とは、レトラクション <InlineMath math="r : X \to A" /> と包含写像 <InlineMath math="\iota : A \hookrightarrow X" /> を用いてどのように定義されるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-2 より、合成写像 <InlineMath math="\iota \circ r : X \to X" /> が、<InlineMath math="X" /> 上の恒等写像 <InlineMath math="\mathrm{id}_X" /> にホモトピックであること。
                            すなわち、
                            <BlockMath math="\iota \circ r \simeq \mathrm{id}_X" />
                            が成り立つこととして定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        円周 <InlineMath math="S^1" /> と一点空間 <InlineMath math="\{ \mathrm{pt} \}" /> はホモトピー同値か。結論と理由を簡潔に記せ（Example 1.2-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 1.2-2 より、<b>ホモトピー同値ではない</b>（可縮ではない）。
                        </p>
                        <p>
                            理由は、<InlineMath math="S^1" /> を 1 周するループはどうやっても（<InlineMath math="S^1" /> の上を通る限り）一点に縮めることができないため、可縮空間の性質（Proposition 1.2-1）に矛盾するからである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        連続写像の間のホモトピー関係 <InlineMath math="\simeq" /> が <b>対称律</b> を満たす（<InlineMath math="f \simeq g \implies g \simeq f" />）ことを、ホモトピー <InlineMath math="H(x, t)" /> を用いて証明せよ（Proposition 1.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f \simeq g" /> であるため、連続写像 <InlineMath math="H : X \times [0, 1] \to Y" /> が存在して、
                            <BlockMath math="H(x, 0) = f(x), \quad H(x, 1) = g(x)" />
                            を満たす。
                        </p>
                        <p>
                            ここで、新しい連続写像 <InlineMath math="\bar{H} : X \times [0, 1] \to Y" /> を
                            <BlockMath math="\bar{H}(x, t) = H(x, 1-t)" />
                            と定義する。
                        </p>
                        <p>
                            このとき、
                            <BlockMath math="\bar{H}(x, 0) = H(x, 1) = g(x)" />
                            <BlockMath math="\bar{H}(x, 1) = H(x, 0) = f(x)" />
                            となる。これにより、<InlineMath math="\bar{H}" /> は <InlineMath math="g" /> から <InlineMath math="f" /> へのホモトピーとなり、<InlineMath math="g \simeq f" /> が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        凸集合 <InlineMath math="C \subset \mathbb{R}^n" /> が <b>可縮空間</b> であることを、定値写像 <InlineMath math="c_{x_0}" /> と直線ホモトピーを用いて証明せよ（Example 1.2-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="C" /> は空でない凸集合とする。ある点 <InlineMath math="x_0 \in C" /> を選ぶ。
                        </p>
                        <p>
                            <InlineMath math="C" /> 上の恒等写像 <InlineMath math="\mathrm{id}_C(x) = x" /> と、定値写像 <InlineMath math="c_{x_0}(x) = x_0" /> を考える。
                            ホモトピー <InlineMath math="H : C \times [0, 1] \to C" /> を直線ホモトピーとして、
                            <BlockMath math="H(x, t) = (1-t)x + t x_0" />
                            で定義する。
                        </p>
                        <p>
                            <InlineMath math="C" /> は凸集合であるため、任意の <InlineMath math="x \in C" /> と <InlineMath math="t \in [0, 1]" /> に対し、この線分上の点はすべて <InlineMath math="C" /> に属する。したがって <InlineMath math="H" /> は well-defined な連続写像である。
                        </p>
                        <p>
                            また、
                            <BlockMath math="H(x, 0) = x = \mathrm{id}_C(x)" />
                            <BlockMath math="H(x, 1) = x_0 = c_{x_0}(x)" />
                            であるから、<InlineMath math="\mathrm{id}_C \simeq c_{x_0}" /> が成り立つ。Definition 1.2-1 より、<InlineMath math="C" /> は可縮である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        部分空間 <InlineMath math="A" /> が <InlineMath math="X" /> の変形レトラクトであるとき、<InlineMath math="X" /> と <InlineMath math="A" /> は <b>ホモトピー同値</b>（<InlineMath math="X \simeq A" />）となることを証明せよ（Proposition 1.3-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            変形レトラクトの定義より、レトラクション <InlineMath math="r : X \to A" /> と包含写像 <InlineMath math="\iota : A \hookrightarrow X" /> が存在して、
                            <BlockMath math="\iota \circ r \simeq \mathrm{id}_X" />
                            が成り立つ。
                        </p>
                        <p>
                            一方で、レトラクションの性質より、部分空間 <InlineMath math="A" /> 上の任意の点 <InlineMath math="a \in A" /> に対して <InlineMath math="r(\iota(a)) = r(a) = a" /> である。
                            すなわち、写像としての合成 <InlineMath math="r \circ \iota : A \to A" /> は <InlineMath math="A" /> 上の恒等写像そのものである。
                            <BlockMath math="r \circ \iota = \mathrm{id}_A \implies r \circ \iota \simeq \mathrm{id}_A" />
                        </p>
                        <p>
                            したがって、<InlineMath math="r" /> と <InlineMath math="\iota" /> は互いにホモトピー逆写像となり、Definition 1.1-2 により <InlineMath math="X" /> と <InlineMath math="A" /> はホモトピー同値である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
