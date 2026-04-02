import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_12_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        位相空間 <InlineMath math="X" /> における <b>道（path）</b>（Definition 2.1-1）の数学的な定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-1 より、閉区間 <InlineMath math="[0,1]" /> から <InlineMath math="X" /> への連続写像 <InlineMath math="\gamma : [0,1] \to X" /> のことをいう。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        道 <InlineMath math="\gamma" /> が <b>ループ（loop）</b> である（Definition 2.1-3）ための条件を式で記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-3 より、道の始点と終点が一致すること。すなわち、ある点 <InlineMath math="x_0 \in X" /> について
                            <BlockMath math="\gamma(0) = \gamma(1) = x_0" />
                            を満たすことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        同じ端点をもつ 2 つの道が <b>道ホモトピック（path-homotopic）</b> である（Definition 2.2-1）際、ホモトピー <InlineMath math="H(t, s)" /> が端点において満たすべき固定条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.2-1 より、端点を常に固定する必要があるため、すべての <InlineMath math="s \in [0,1]" /> において
                            <BlockMath math="H(0, s) = x_0, \quad H(1, s) = x_1" />
                            を満たすことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        道 <InlineMath math="\gamma : [0,1] \to X" /> に対して、その <b>逆道</b> <InlineMath math="\bar{\gamma}" /> の定義式を記せ（Definition 2.1-4）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-4 より、逆道 <InlineMath math="\bar{\gamma}" /> は
                            <BlockMath math="\bar{\gamma}(t) = \gamma(1-t)" />
                            で定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        <InlineMath math="\mathbb{R}^n" /> の <b>基本群 <InlineMath math="\pi_1(\mathbb{R}^n, 0)" /></b> はどのような群になるか。直線ホモトピーの性質を用いて説明せよ（Example 2.2-2）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 2.2-2 より、基本群は<b>自明群 <InlineMath math="\{e\}" /></b> になる。
                        </p>
                        <p>
                            理由は、<InlineMath math="\mathbb{R}^n" /> 上の任意のループ <InlineMath math="\gamma" /> が、直線ホモトピー <InlineMath math="H(t, s) = (1-s)\gamma(t) + s(0)" /> によって、原点にとどまる定値ループ <InlineMath math="c_0" /> へと連続的に縮めることができるからである。したがってすべてのループの同値類は一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        空間 <InlineMath math="X" /> が <b>単連結空間（simply connected space）</b> である（Definition 2.3-1）ための 2 つの条件を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.3-1 より、以下の2つを満たすことである。
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><InlineMath math="X" /> は弧状連結である。</li>
                            <li>基本群が自明群である（ある基点 <InlineMath math="x_0" /> において <InlineMath math="\pi_1(X, x_0) = \{e\}" />）。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        円周 <InlineMath math="S^1" /> と 2次元球面 <InlineMath math="S^2" /> において、どちらが単連結であるか答えよ（Example 2.3-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 2.3-2 より、<b><InlineMath math="S^2" /> が単連結</b>である。
                        </p>
                        <p>
                            <InlineMath math="S^1" /> は 1次元の穴が開いているため基本群が <InlineMath math="\mathbb{Z}" /> となり、単連結ではない。一方、<InlineMath math="S^2" /> 上のループは必ず一点に縮めることができ基本群が自明になるからである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        2 つの连续な道 <InlineMath math="\alpha, \beta" />（<InlineMath math="\alpha(1) = \beta(0)" />）の結合 <InlineMath math="\alpha * \beta" /> が <b>連続写像</b> になることを、貼り合わせ補題を用いて証明せよ（Proposition 2.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            結合の定義より、道は
                            <BlockMath math="(\alpha * \beta)(t) = \begin{cases} \alpha(2t) & (0 \leq t \leq 1/2) \\ \beta(2t-1) & (1/2 \leq t \leq 1) \end{cases}" />
                            で与えられる。
                        </p>
                        <p>
                            閉区間 <InlineMath math="[0,1]" /> は 2 つの閉集合 <InlineMath math="[0, 1/2]" /> と <InlineMath math="[1/2, 1]" /> の和집합である。
                            それぞれにおける写像 <InlineMath math="t \mapsto \alpha(2t)" /> と <InlineMath math="t \mapsto \beta(2t-1)" /> は、<InlineMath math="\alpha" /> と <InlineMath math="\beta" /> が連続であるため連続写像である。
                        </p>
                        <p>
                            区間の境界である <InlineMath math="t = 1/2" /> において、
                            <BlockMath math="\alpha(2 \cdot 1/2) = \alpha(1)" />
                            <BlockMath math="\beta(2 \cdot 1/2 - 1) = \beta(0)" />
                            となる。仮定 <InlineMath math="\alpha(1) = \beta(0)" /> よりこの 2 つの値は一致している。
                        </p>
                        <p>
                            したがって、貼り合わせ補題（pasting lemma）により、2つの連続写像は和集合 <InlineMath math="[0,1]" /> 全体で連続な写像を定める。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        弧状連結な位相空間における <b>基点変更の写像</b> <InlineMath math="\phi_\gamma([\alpha]) = [\bar{\gamma} * \alpha * \gamma]" /> が、<b>群準同型</b> であること（<InlineMath math="\phi_\gamma([\alpha] \cdot [\beta]) = \phi_\gamma([\alpha]) \cdot \phi_\gamma([\beta])" />）を証明せよ（Theorem 2.3-1 の証明参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            積 <InlineMath math="[\alpha] \cdot [\beta]" /> に対する <InlineMath math="\phi_\gamma" /> の作用を計算する。基本群の演算は道の結合であるから、
                            <BlockMath math="\phi_\gamma([\alpha] \cdot [\beta]) = \phi_\gamma([\alpha * \beta]) = [\bar{\gamma} * (\alpha * \beta) * \gamma]" />
                            である。
                        </p>
                        <p>
                            道の結合は、基本群のクラスの中では結合律を満たす。ここで、<InlineMath math="x_0" /> の定値道を <InlineMath math="c_{x_0}" /> とすると、<InlineMath math="\gamma * \bar{\gamma} \simeq_p c_{x_0}" /> であり、<InlineMath math="c_{x_0}" /> は道の結合の単位元として振る舞う。したがって、<InlineMath math="\alpha" /> と <InlineMath math="\beta" /> の間に <InlineMath math="\gamma * \bar{\gamma}" /> を挿入してもホモトピー類は変わらない。
                            <BlockMath math="\begin{aligned} [\bar{\gamma} * (\alpha * \beta) * \gamma] &= [\bar{\gamma} * \alpha * c_{x_0} * \beta * \gamma] \\ &= [\bar{\gamma} * \alpha * (\gamma * \bar{\gamma}) * \beta * \gamma] \end{aligned}" />
                        </p>
                        <p>
                            これを <InlineMath math="\bar{\gamma} * \alpha * \gamma" /> と <InlineMath math="\bar{\gamma} * \beta * \gamma" /> に分けると、
                            <BlockMath math="= [\bar{\gamma} * \alpha * \gamma] \cdot [\bar{\gamma} * \beta * \gamma] = \phi_\gamma([\alpha]) \cdot \phi_\gamma([\beta])" />
                            となり、準同型性が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        基本群において、ループ <InlineMath math="\alpha" /> とその逆道 <InlineMath math="\bar{\alpha}" /> の積 <InlineMath math="[\alpha] \cdot [\bar{\alpha}]" /> が単位元 <InlineMath math="[c_{x_0}]" /> になること直感的な理由を、ホモトピーの変形を思い描きながら説明せよ（Theorem 2.2-1 の証明参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            道 <InlineMath math="\alpha * \bar{\alpha}" /> は、時間 <InlineMath math="0 \leq t \leq 1/2" /> で <InlineMath math="\alpha" /> の軌跡に沿って基点 <InlineMath math="x_0" /> から進み、時間 <InlineMath math="1/2 \leq t \leq 1" /> でその同じ軌跡を完全に逆戻りして <InlineMath math="x_0" /> に帰ってくるループである。
                        </p>
                        <p>
                            この動作において、どこまで先へ進んでから戻ってくるか（折り返し点の深さ）を、ホモトピーのパラメータ <InlineMath math="s \in [0,1]" /> に従って徐々に浅くしていく連続変形を考える。
                        </p>
                        <p>
                            <InlineMath math="s=0" /> のときは完全に終点まで進んで戻るが、<InlineMath math="s" /> を大きくするにつれて途中までしか進まずに戻るようになる。ついに <InlineMath math="s=1" /> となれば、一歩も動かずに <InlineMath math="x_0" /> に留まる定値ループ <InlineMath math="c_{x_0}" /> になる。これが端点を固定する道ホモトピーを与え、<InlineMath math="[\alpha] \cdot [\bar{\alpha}] = [c_{x_0}]" /> が成立する理由である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
