import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_5_Chapter9() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="9" number={1}>
                    <p>集合 <InlineMath math="X" /> 上の <b>距離関数 (Metric)</b> <InlineMath math="d: X \times X \to \mathbb{R}" /> が満たすべき 3 つの公理を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 9.1-1 より：</p>
                        <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                            <li><b>正値性：</b> 任意の <InlineMath math="x, y \in X" /> に対して <InlineMath math="d(x, y) \geq 0" /> であり、<InlineMath math="d(x, y) = 0 \iff x = y" /></li>
                            <li><b>対称性：</b> 任意の <InlineMath math="x, y \in X" /> に対して <InlineMath math="d(x, y) = d(y, x)" /></li>
                            <li><b>三角不等式：</b> 任意の <InlineMath math="x, y, z \in X" /> に対して <InlineMath math="d(x, z) \leq d(x, y) + d(y, z)" /></li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={2}>
                    <p>距離空間 <InlineMath math="(X, d)" /> における <b>開球 (Open ball)</b> <InlineMath math="B(a; \varepsilon)" /> の定義を述べよ。また、距離空間においてある部分集合 <InlineMath math="U" /> が距離位相に関して開集合であるための必要十分条件を、開球を用いて述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 9.1-2 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>開球の定義：</b> <InlineMath math="B(a; \varepsilon) = \{ x \in X \mid d(x, a) < \varepsilon \}" /></li>
                            <li><b>開集合の条件：</b> <InlineMath math="U" /> の任意の点 <InlineMath math="x" /> に対して、ある <InlineMath math="\varepsilon > 0" /> が存在して <InlineMath math="B(x; \varepsilon) \subset U" /> となること。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={3}>
                    <p>位相空間における <b>疎集合 (Nowhere dense set)</b> および <b>第一類集合 (Meager set)</b> の定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 9.4-1 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>疎集合：</b> その閉包の内部が空である（<InlineMath math="\mathrm{Int}(\overline{A}) = \emptyset" />）集合。</li>
                            <li><b>第一類集合：</b> 可算個の疎集合の和集合として表せる集合。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="9" number={4}>
                    <p>任意の集合 <InlineMath math="X" /> 上で、<InlineMath math="x=y" /> ならば <InlineMath math="d(x, y) = 0" />、<InlineMath math="x \neq y" /> ならば <InlineMath math="d(x, y) = 1" /> と定義される <b>離散距離</b> が、距離の公理、特に三角不等式を満たすことを示せ。</p>
                    <ExerciseSolution>
                        <p>Example 9.1-1 より：</p>
                        <p>三角不等式 <InlineMath math="d(x, z) \leq d(x, y) + d(y, z)" /> をチェックする。</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><InlineMath math="x = z" /> のとき：左辺は 0 となり、右辺は常に 0 以上なので成立。</li>
                            <li><InlineMath math="x \neq z" /> のとき：左辺は 1 である。このとき、<InlineMath math="y" /> は <InlineMath math="x" /> または <InlineMath math="z" /> の少なくとも一方とは異なる点である。したがって右辺の <InlineMath math="d(x, y)" /> または <InlineMath math="d(y, z)" /> のうち少なくとも一つは 1 となり、右辺全体は 1 以上になる。よって成立。</li>
                        </ul>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={5}>
                    <p>等長写像 <InlineMath math="f: X \to Y" /> が常に単射であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 9.3-1 の証明より：</p>
                        <p><InlineMath math="f(x) = f(x')" /> と仮定すると、<InlineMath math="d_Y(f(x), f(x')) = 0" /> である。等長写像の定義より <InlineMath math="d_Y(f(x), f(x')) = d_X(x, x') = 0" /> となる。距離の公理（正値性）より <InlineMath math="d_X(x, x') = 0 \iff x = x'" /> であるから、<InlineMath math="x = x'" /> が従う。よって <InlineMath math="f" /> は単射である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={6}>
                    <p>有理数全体の集合 <InlineMath math="\mathbb{Q}" /> は、実数直線 <InlineMath math="\mathbb{R}" /> の中で第一類集合であることを、疎集合の定義に基づいて説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 9.4-1 より：</p>
                        <p>1) <InlineMath math="\mathbb{R}" /> において、一点集合 <InlineMath math="\{q\}" /> は閉集合であり、その内部は空であるため、疎集合である。</p>
                        <p className="mt-2">2) 有理数集合 <InlineMath math="\mathbb{Q}" /> は可算集合であり、<InlineMath math="\mathbb{Q} = \bigcup_{q \in \mathbb{Q}} \{q\}" /> と書ける。</p>
                        <p className="mt-2">3) これは可算個の疎集合の和集合であるから、定義より <InlineMath math="\mathbb{Q}" /> は第一類集合である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={7}>
                    <p>距離空間における <b>全有界性 (Totally bounded)</b> の定義を述べ、開区間 <InlineMath math="(0, 1)" /> が通常の距離に関して全有界であることを説明せよ。</p>
                    <ExerciseSolution>
                        <p>Definition 9.5-1 より：</p>
                        <ul className="list-disc list-inside space-y-4 mt-2 ml-4">
                            <li><b>定義：</b> 任意の <InlineMath math="\varepsilon > 0" /> に対し、半径 <InlineMath math="\varepsilon" /> の有限個の開球で全体を覆えること。</li>
                            <li><b>(0, 1) の場合：</b> 任意の <InlineMath math="\varepsilon > 0" /> に対し、<InlineMath math="k > 1/\varepsilon" /> となる自然数 <InlineMath math="k" /> を選ぶことで、中心点を <InlineMath math="x_i = i/k" /> とした有限個の球 <InlineMath math="B(x_i; \varepsilon)" /> で <InlineMath math="(0, 1)" /> 全体を覆うことができる。よって全有界である。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="9" number={8}>
                    <p>連続性の定義の同値性（Theorem 9.2-1）：距離空間の間の写像 <InlineMath math="f: X \to Y" /> が、位相的な意味で連続であることと、任意の <InlineMath math="\varepsilon > 0" /> に対し <InlineMath math="\delta > 0" /> が存在する通常の連続性の定義を満たすことが同値であることを証明せよ。</p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                            <li>(<InlineMath math="\implies" />) <InlineMath math="f" /> が位相的に連続とし、<InlineMath math="V = B(f(x); \varepsilon)" /> をとる。<InlineMath math="V" /> は開集合なので逆像 <InlineMath math="f^{-1}(V)" /> は開集合である。<InlineMath math="x \in f^{-1}(V)" /> なので、ある開球 <InlineMath math="B(x; \delta) \subset f^{-1}(V)" /> がとれる。これは <InlineMath math="d(x, x') < \delta \implies d(f(x), f(x')) < \varepsilon" /> を意味する。</li>
                            <li>(<InlineMath math="\impliedby" />) 任意の開集合 <InlineMath math="V \subset Y" /> をとる。<InlineMath math="x \in f^{-1}(V)" /> に対し <InlineMath math="f(x) \in V" /> なので <InlineMath math="B(f(x); \varepsilon) \subset V" /> となる <InlineMath math="\varepsilon" /> がとれる。仮定より対応する <InlineMath math="\delta" /> が存在し <InlineMath math="B(x; \delta) \subset f^{-1}(B(f(x); \varepsilon)) \subset f^{-1}(V)" /> となる。よって逆像は開集合である。</li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={9}>
                    <p>距離空間 <InlineMath math="(X, d)" /> が <b>ハウスドルフ空間 (T2)</b> であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>異なる 2 点 <InlineMath math="x, y \in X" /> をとる。定義より <InlineMath math="d(x, y) = r > 0" /> である。</p>
                        <p className="mt-2"><InlineMath math="\varepsilon = r/2" /> とおき、開球 <InlineMath math="U = B(x; \varepsilon), V = B(y; \varepsilon)" /> を考える。</p>
                        <p className="mt-2">もし <InlineMath math="z \in U \cap V" /> が存在すると仮定すると、三角不等式より <InlineMath math="d(x, y) \leq d(x, z) + d(z, y) < \varepsilon + \varepsilon = r" /> となり、<InlineMath math="d(x, y) = r" /> であることに矛盾する。</p>
                        <p className="mt-2">したがって <InlineMath math="U \cap V = \emptyset" /> となり、異なる点を開集合で分離できるためハウスドルフ空間である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={10}>
                    <p><b>コンパクト性の大域的特徴づけ</b>（Theorem 9.5-1）より、コンパクトな距離空間 <InlineMath math="X" /> は必ず <b>全有界</b> であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p><InlineMath math="X" /> がコンパクトであるとする。任意の <InlineMath math="\varepsilon > 0" /> をとる。</p>
                        <p className="mt-2">すべての点 <InlineMath math="x \in X" /> を中心とした半径 <InlineMath math="\varepsilon" /> の開球の族 <InlineMath math="\{ B(x; \varepsilon) \mid x \in X \}" /> は、明らかに <InlineMath math="X" /> の開被覆である。</p>
                        <p className="mt-2"><InlineMath math="X" /> のコンパクト性より、この被覆から有限個の集合を選んで全体を覆うことができる。すなわち、ある有限個の点 <InlineMath math="x_1, \dots, x_n" /> が存在して <InlineMath math="X \subset B(x_1; \varepsilon) \cup \dots \cup B(x_n; \varepsilon)" /> となる。これは全有界の定義そのものである。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
