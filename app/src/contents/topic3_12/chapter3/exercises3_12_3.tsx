import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_12_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        円周 <InlineMath math="S^1" /> 上のループを普遍被覆空間 <InlineMath math="\mathbb{R}" /> 上の道へと連続的に移し替えたものを、何と呼ぶか（Lemma 3.1-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Lemma 3.1-1 より、ループの <b>持ち上げ（lift）</b> と呼ぶ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        代数学の基本定理（Theorem 3.2-1）は、次数 <InlineMath math="n \geq 1" /> の複素係数多項式が <InlineMath math="\mathbb{C}" /> 内に何を持つと主張しているか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.2-1 より、<b>少なくとも1つの根（解）を持つ</b>（<InlineMath math="p(z_0) = 0" /> となる <InlineMath math="z_0 \in \mathbb{C}" /> が存在する）と主張している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        <b>ブラウワーの不動点定理</b>（Theorem 3.3-1）は、2次元円板 <InlineMath math="D^2" /> から自身への連続写像 <InlineMath math="f : D^2 \to D^2" /> が必ずどのような点を持つことを保証しているか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.3-1 より、<InlineMath math="f(x) = x" /> を満たす <b>不動点（fixed point）</b> を少なくとも1つ持つことを保証している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        <InlineMath math="S^1" /> のループの持ち上げ <InlineMath math="\tilde{\gamma}" /> の終点 <InlineMath math="\tilde{\gamma}(1)" /> がどのような数値になるか、またそれを何と呼ぶか述べよ（Lemma 3.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Lemma 3.1-1 より、始点を <InlineMath math="0" /> としたとき、終点 <InlineMath math="\tilde{\gamma}(1)" /> は必ず <b>整数</b> になり、これを <b>巻き数（winding number）</b> と呼ぶ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        定理（Theorem 3.1-1）において、円周 <InlineMath math="S^1" /> の基本群 <InlineMath math="\pi_1(S^1, 1)" /> はどのような群と同型になるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.1-1 より、基本群は <b>整数群 <InlineMath math="\mathbb{Z}" /></b> と同型になる（<InlineMath math="\pi_1(S^1, 1) \cong \mathbb{Z}" />）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        2 次元における <b>ボルスク・ウラムの定理</b>（Theorem 3.4-1）について、球面 <InlineMath math="S^2" /> から平面 <InlineMath math="\mathbb{R}^2" /> への連続関数 <InlineMath math="f" /> が必ず満たす性質を式で記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.4-1 より、互いに対蹠的な点 <InlineMath math="x, -x \in S^2" /> が存在して、
                            <BlockMath math="f(x) = f(-x)" />
                            を満たすことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        ボルスク・ウラムの定理の応用である <b>ハム・サンドイッチ定理</b>（Theorem 3.4-2）は、3次元空間内の任意の3つの物体に対してどのような平面が存在すると主張しているか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.4-2 より、これら 3 つの物体の体積を <b>同時にちょうど半分に分割（二等分）する</b> ような1つの平面が必ず存在すると主張している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        写像 <InlineMath math="\Phi : \pi_1(S^1, 1) \to \mathbb{Z}" />（巻き数への対応）が、<b>群の準同型</b>であること（<InlineMath math="\Phi([\alpha * \beta]) = \Phi([\alpha]) + \Phi([\beta])" />）を証明せよ（Theorem 3.1-1 の証明参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ループ <InlineMath math="\alpha, \beta" /> の持ち上げをそれぞれ <InlineMath math="\tilde{\alpha}, \tilde{\beta}" /> とし、それぞれ始点は <InlineMath math="0" /> とする。
                            このとき、<InlineMath math="\Phi([\alpha]) = \tilde{\alpha}(1)" />、<InlineMath math="\Phi([\beta]) = \tilde{\beta}(1)" /> である。
                        </p>
                        <p>
                            結合された道 <InlineMath math="\alpha * \beta" /> の持ち上げを構築する。前半の区間 <InlineMath math="[0, 1/2]" /> では <InlineMath math="\tilde{\alpha}" /> の軌跡をたどり、その終点は <InlineMath math="\tilde{\alpha}(1)" /> である。
                        </p>
                        <p>
                            後半の区間 <InlineMath math="[1/2, 1]" /> では元のループ <InlineMath math="\beta" /> の軌道を回るが、持ち上げの始点は <InlineMath math="\tilde{\alpha}(1)" /> となる。指数写像 <InlineMath math="p(t) = e^{2\pi i t}" /> は整数の平行移動で不変であるため、<InlineMath math="\tilde{\beta}" /> の全体を <InlineMath math="\tilde{\alpha}(1)" /> だけ全体的に平行移動させた道が正しい持ち上げとなる。
                        </p>
                        <p>
                            したがって、<InlineMath math="\alpha * \beta" /> の持ち上げの最終的な終点は、
                            <BlockMath math="\tilde{\alpha}(1) + \tilde{\beta}(1)" />
                            となり、<InlineMath math="\Phi([\alpha * \beta]) = \Phi([\alpha]) + \Phi([\beta])" /> が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        <b>ブラウワーの不動点定理</b> の証明において、<InlineMath math="f(x) \neq x" /> と仮定したときに作られる図形的な写像 <InlineMath math="r : D^2 \to S^1" /> がなぜ構成でき、それが何の定理（Lemma）に矛盾するか説明せよ（Theorem 3.3-1 の証明参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            すべての <InlineMath math="x" /> で不動点を持たない（<InlineMath math="f(x) \neq x" />）と仮定する。このとき、<InlineMath math="D^2" /> 内の 2点 <InlineMath math="f(x)" /> と <InlineMath math="x" /> は必ず異なる点となる。
                        </p>
                        <p>
                            したがって、点 <InlineMath math="f(x)" /> を始点として点 <InlineMath math="x" /> を通る半直線を引くことができる。この半直線と円盤の境界 <InlineMath math="S^1" /> との交点を <InlineMath math="r(x)" /> と定義する。
                        </p>
                        <p>
                            この操作は連続であり、かつ <InlineMath math="x" /> がはじめから境界 <InlineMath math="S^1" /> 上にあれば半直線はそのまま <InlineMath math="x" /> で交わるので <InlineMath math="r(x) = x" /> を満たす。すなわち、<InlineMath math="r" /> は <InlineMath math="D^2" /> から <InlineMath math="S^1" /> へのレトラクションとなる。
                        </p>
                        <p>
                            しかし、Lemma 3.3-1 において、基本群の性質（<InlineMath math="\mathbb{Z}" /> と <InlineMath math="\{e\}" /> の準同型写像に関する矛盾）から、そのようなレトラクションが存在しないことが示されている。これに矛盾するため、仮定が誤りであったことがわかる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        <b>代数学の基本定理</b> の位相的証明において、多項式が複素数平面上に根を持たないと仮定したとき、半径 <InlineMath math="R" />（十分大）の円周をうつしたループの巻き数はいくつになるか、またそれがなぜ矛盾を生むのか簡潔に説明せよ（Theorem 3.2-1 の証明参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            半径 <InlineMath math="r=0" /> のとき、円は一点（原点）であるため多項式による像は定点となり、対応するループの巻き数は <b>0</b> である。
                        </p>
                        <p>
                            一方、半径 <InlineMath math="R \to \infty" /> のとき、<InlineMath math="n" /> 次多項式の挙動は最高次項 <InlineMath math="z^n" /> によって支配される。そのため、大きな円周上のループの像は、原点の周りを <b><InlineMath math="n" /> 回</b> まわるループに連続的に変形でき、その巻き数は <b><InlineMath math="n" /></b> となる。
                        </p>
                        <p>
                            もし根が存在しないならば、分母が <InlineMath math="0" /> になることはなく、半径 <InlineMath math="R" /> を <InlineMath math="0" /> から十分大きな値まで動かす操作は連続的なホモトピーを与えるはずである。しかし、基本群の元である「巻き数」が連続的な変形を通して離散的に <InlineMath math="0" /> から <InlineMath math="n" /> （<InlineMath math="n \geq 1" />）へとジャンプすることは不可能であるため、矛盾が生じる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
