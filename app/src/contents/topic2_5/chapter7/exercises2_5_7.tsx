import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_5_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="7" number={1}>
                    <p>位相空間 <InlineMath math="X" /> における、部分集合 <InlineMath math="K" /> の<b>開被覆 (Open cover)</b> および <b>コンパクト (Compact)</b> であることの定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 7.1-1 および 7.1-2 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>開被覆：</b> <InlineMath math="X" /> の開集合族 <InlineMath math="\mathcal{U} = \{U_\lambda\}_{\lambda \in \Lambda}" /> であって、<InlineMath math="K \subset \bigcup_{\lambda \in \Lambda} U_\lambda" /> を満たすもの。</li>
                            <li><b>コンパクト：</b> <InlineMath math="K" /> の任意の開被覆が、少なくとも一つの有限個の集合からなる部分被覆（有限部分被覆）を持つこと。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p><b>連続像の保存定理</b>（Theorem 7.2-1）の主張を述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 7.2-1 より：</p>
                        <p className="mt-2 ml-4">
                            位相空間 <InlineMath math="X, Y" /> の間の連続写像 <InlineMath math="f: X \to Y" /> について、部分集合 <InlineMath math="K \subset X" /> がコンパクトであれば、その像 <InlineMath math="f(K) \subset Y" /> もコンパクトである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> における <b>ハイネ・ボレルの定理 (Heine-Borel Theorem)</b> の主張を述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 7.4-1 より：</p>
                        <p className="mt-2 ml-4">
                            <InlineMath math="\mathbb{R}^n" /> の部分集合 <InlineMath math="K" /> がコンパクトであるための必要十分条件は、<InlineMath math="K" /> が<b>有界</b>かつ<b>閉集合</b>であることである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="7" number={4}>
                    <p>位相空間における有限集合 <InlineMath math="K = \{x_1, \dots, x_n\}" /> は常にコンパクトであることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 7.1-1 より：</p>
                        <p><InlineMath math="K" /> の任意の開被覆 <InlineMath math="\mathcal{U} = \{U_\lambda\}_{\lambda \in \Lambda}" /> をとる。被覆の定義より、各点 <InlineMath math="x_i \in K" /> (<InlineMath math="i=1,\dots,n" />) に対して、<InlineMath math="x_i \in U_{\lambda_i}" /> となる添字 <InlineMath math="\lambda_i \in \Lambda" /> が存在する。</p>
                        <p className="mt-2">このとき、有限集合 <InlineMath math="\mathcal{U}' = \{U_{\lambda_1}, \dots, U_{\lambda_n}\}" /> は <InlineMath math="\mathcal{U}" /> の部分族であり、これら全体の和集合は <InlineMath math="K" /> を含む。したがって有限部分被覆が常に存在するため、<InlineMath math="K" /> はコンパクトである。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>実数直線 <InlineMath math="\mathbb{R}" /> において、半開区間 <InlineMath math="(0, 1]" /> はコンパクトではない。これを、有限部分被覆を持たない具体的な開被覆を一つ挙げることで証明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 7.1-1 等の議論を応用する。</p>
                        <p><InlineMath math="U_n = (1/n, 2)" /> (<InlineMath math="n = 1, 2, \dots" />) という開集合族を考える。これは <InlineMath math="(0, 1] \subset \bigcup_{n=1}^\infty U_n = (0, 2)" /> であるため、<InlineMath math="(0, 1]" /> の開被覆である。</p>
                        <p className="mt-2">いかなる有限個の集合を選んでも、その添字の最大値を <InlineMath math="N" /> とすれば、それらの和集合は <InlineMath math="(1/N, 2)" /> となる。これは <InlineMath math="(0, 1/N]" /> の部分を含まないため、<InlineMath math="(0, 1]" /> を覆うことができない。したがって有限部分被覆が存在せず、コンパクトではない。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p><b>最大値定理</b>（Theorem 7.3-1）を用いて、コンパクト空間 <InlineMath math="X" /> 上の実数値連続関数 <InlineMath math="f: X \to \mathbb{R}" /> が有界であることを示せ。</p>
                    <ExerciseSolution>
                        <p>Theorem 7.3-1 より、<InlineMath math="f" /> は最大値 <InlineMath math="M" /> と最小値 <InlineMath math="m" /> を達成する。すなわち、全ての <InlineMath math="x \in X" /> に対して <InlineMath math="m \le f(x) \le M" /> が成り立つ。これは <InlineMath math="f" /> が有界であることを意味する。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>位相空間が<b>逐次コンパクト (Sequentially compact)</b> であることの定義を述べよ。また、距離空間においてコンパクト性と逐次コンパクト性はどのような関係にあるか述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 7.5-1 および Theorem 7.5-1 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>定義：</b> 空間内の任意の点列が、空間内の点に収束する部分列を持つこと。</li>
                            <li><b>距離空間での関係：</b> コンパクトであることと逐次コンパクトであることは互いに同値である。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="7" number={8}>
                    <p>ハウスドルフ空間 <InlineMath math="X" /> において、任意のコンパクト部分集合 <InlineMath math="K" /> が閉集合であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 7.2-2 より：</p>
                        <p>1) 任意の <InlineMath math="x \notin K" /> をとる。ハウスドルフ性より、各 <InlineMath math="y \in K" /> に対し <InlineMath math="x \in U_y, y \in V_y" /> かつ <InlineMath math="U_y \cap V_y = \emptyset" /> となる開集合がとれる。</p>
                        <p className="mt-2">2) 族 <InlineMath math="\{V_y\}_{y \in K}" /> は <InlineMath math="K" /> の開被覆である。コンパクト性より有限部分被覆 <InlineMath math="V_{y_1}, \dots, V_{y_n}" /> が選べる。</p>
                        <p className="mt-2">3) 対応する開集合の共通部分 <InlineMath math="U = U_{y_1} \cap \dots \cap U_{y_n}" /> は、<InlineMath math="x" /> を含む開集合であり、かつどの <InlineMath math="V_{y_i}" /> とも交わらない。したがって <InlineMath math="U \cap K = \emptyset" /> である。これは <InlineMath math="X \setminus K" /> が開集合であることを示しており、よって <InlineMath math="K" /> は閉集合である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p><b>コンパクト同相定理</b>（Theorem 7.3-2）：コンパクト空間 <InlineMath math="X" /> からハウスドルフ空間 <InlineMath math="Y" /> への連続な全単射 <InlineMath math="f: X \to Y" /> が、同相写像であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 7.3-2 の証明より、逆写像が連続、あるいは <InlineMath math="f" /> が閉写像であることを示す。</p>
                        <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                            <li><InlineMath math="A \subset X" /> を任意の閉集合とする。<InlineMath math="X" /> はコンパクトなので <InlineMath math="A" /> もコンパクトである（Proposition 7.2-1）。</li>
                            <li>連続像の保存（Theorem 7.2-1）より、像 <InlineMath math="f(A)" /> もコンパクトである。</li>
                            <li>ハウスドルフ空間内のコンパクト集合は閉集合なので（Theorem 7.2-2）、<InlineMath math="f(A)" /> は <InlineMath math="Y" /> の閉集合である。</li>
                        </ol>
                        <p className="mt-2">閉集合の像が閉集合となることは、連続な全単射において逆写像が連続であることを意味し、したがって <InlineMath math="f" /> は同相写像である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>局所コンパクト・ハウスドルフ空間 <InlineMath math="X" /> の 1 点コンパクト化 <InlineMath math="X^* = X \cup \{\infty\}" /> がコンパクトであることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 7.7-1 の証明より：</p>
                        <p><InlineMath math="X^*" /> の任意の開被覆 <InlineMath math="\mathcal{U}" /> をとる。無限遠点を含む集合 <InlineMath math="U_\infty \in \mathcal{U}" /> が存在する。1 点コンパクト化の定義より、<InlineMath math="K = X^* \setminus U_\infty" /> は <InlineMath math="X" /> のコンパクト部分集合である。</p>
                        <p className="mt-2"><InlineMath math="\mathcal{U}" /> は <InlineMath math="K" /> も覆っているため、<InlineMath math="K" /> のコンパクト性より有限個の集合 <InlineMath math="U_1, \dots, U_m \in \mathcal{U}" /> で覆うことができる。これらと <InlineMath math="U_\infty" /> を合わせれば <InlineMath math="X^*" /> 全体を覆う有限部分被覆となる。よって <InlineMath math="X^*" /> はコンパクトである。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
