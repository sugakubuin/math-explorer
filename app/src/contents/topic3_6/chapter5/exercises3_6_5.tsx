import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_6_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        ラグランジアン <InlineMath math="F(x, u, u')" /> に対応する <b>一般化運動量</b> <InlineMath math="p" /> の定義式を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.1-1 より：
                            <BlockMath math="p = \frac{\partial F}{\partial u'}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        ハミルトニアン <InlineMath math="H(x, u, p)" /> をラグランジアン <InlineMath math="F" /> と運動量 <InlineMath math="p" /> を用いて定義せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.1-2 より：
                            <BlockMath math="H(x, u, p) = p u' - F(x, u, u')" />
                            ただし、右辺の <InlineMath math="u'" /> は運動量の定義式を用いて <InlineMath math="p" /> と <InlineMath math="u" /> の関数として表現される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        ハミルトンの正準方程式（Theorem 5.2-1）を書き下せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <BlockMath math="\begin{cases} u' = \frac{\partial H}{\partial p} \\ p' = -\frac{\partial H}{\partial u} \end{cases}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        1 次元の調和振動子のラグランジアン <InlineMath math="F = \frac{1}{2} m (u')^2 - \frac{1}{2} k u^2" /> に対して、ハミルトニアンを導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 運動量を求める： <InlineMath math="p = F_{u'} = m u'" />。 これより <InlineMath math="u' = p/m" />。
                        </p>
                        <p>
                            2. ハミルトニアンの定義に代入：
                            <BlockMath math="\begin{aligned} H &= p u' - F \\ &= p \left( \frac{p}{m} \right) - \left( \frac{1}{2} m \left( \frac{p}{m} \right)^2 - \frac{1}{2} k u^2 \right) \\ &= \frac{p^2}{2m} + \frac{1}{2} k u^2 \end{aligned}" />
                        </p>
                        <p>
                            これは全エネルギー（運動エネルギー + ポテンシャルエネルギー）に一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        相空間上の関数 <InlineMath math="u" /> と <InlineMath math="p" /> のポアソン括弧 <InlineMath math="\{u, p\}" /> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ポアソン括弧の定義（Definition 5.2-2）を用いる：
                            <BlockMath math="\{f, g\} = \frac{\partial f}{\partial u} \frac{\partial g}{\partial p} - \frac{\partial f}{\partial p} \frac{\partial g}{\partial u}" />
                        </p>
                        <p>
                            <InlineMath math="f = u, \ g = p" /> とすると：
                            <BlockMath math="\{u, p\} = \frac{\partial u}{\partial u} \frac{\partial p}{\partial p} - \frac{\partial u}{\partial p} \frac{\partial p}{\partial u} = 1 \cdot 1 - 0 \cdot 0 = 1" />
                        </p>
                        <p>
                            これは正準変数間の基本的な関係式であり、量子力学における交換関係 <InlineMath math="[\hat{q}, \hat{p}] = i\hbar" /> の古典的な対応物である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        ハミルトニアン自身が陽に時間（<InlineMath math="x" />）に依存しない場合、停留経路に沿ってハミルトニアンの値が保存されることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 5.2-2 より、任意の関数の時間変化は
                            <BlockMath math="\frac{dH}{dx} = \{H, H\} + \frac{\partial H}{\partial x}" />
                        </p>
                        <p>
                            1. ポアソン括弧の定義より明らかに <b><InlineMath math="\{H, H\} = 0" /></b>。
                        </p>
                        <p>
                            2. 仮定より <b><InlineMath math="\partial H / \partial x = 0" /></b>。
                        </p>
                        <p>
                            3. したがって <b><InlineMath math="\frac{dH}{dx} = 0" /></b> となり、ハミルトニアン（エネルギー）は保存される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        ハミルトニアン <InlineMath math="H(p) = \sqrt{m^2 c^4 + p^2 c^2}" /> （特殊相対論的な粒子のエネルギー）から、対応する速度 <InlineMath math="u' = H_p" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            正準方程式の第 1 式 <InlineMath math="u' = \frac{\partial H}{\partial p}" /> を計算する。
                        </p>
                        <p>
                            <BlockMath math="u' = \frac{1}{2} (m^2 c^4 + p^2 c^2)^{-1/2} \cdot 2pc^2 = \frac{pc^2}{\sqrt{m^2 c^4 + p^2 c^2}} = \frac{p}{H/c^2}" />
                        </p>
                        <p>
                            これを整理すると <b><InlineMath math="u' = \frac{p}{\sqrt{m^2 + p^2/c^2}}" /></b> となり、相対論における速度と運動量の関係が導かれる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        ルジャンドル変換の性質として、ハミルトニアンの <InlineMath math="p" /> に関する 2 階微分とラグランジアンの速度に関する 2 階微分の間に
                        <BlockMath math="H_{pp} = 1 / F_{u'u'}" />
                        の関係があることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 正準方程式より <InlineMath math="u' = H_p(x, u, p)" />。
                        </p>
                        <p>
                            2. この両辺を <InlineMath math="p" /> で微分すると <b><InlineMath math="H_{pp} = \frac{\partial u'}{\partial p}" /></b>。
                        </p>
                        <p>
                            3. 一方、運動量の定義 <InlineMath math="p = F_{u'}(x, u, u')" /> の両辺を <InlineMath math="p" /> で微分すると、連鎖律より：
                            <BlockMath math="1 = \frac{\partial F_{u'}}{\partial u'} \frac{\partial u'}{\partial p} = F_{u'u'} \frac{\partial u'}{\partial p}" />
                        </p>
                        <p>
                            4. これより <b><InlineMath math="\frac{\partial u'}{\partial p} = 1 / F_{u'u'}" /></b> が導かれ、命題の式 <b><InlineMath math="H_{pp} = 1 / F_{u'u'}" /></b> が得られる。
                        </p>
                        <p className="text-right"> <InlineMath math="\square" /> </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        ポアソン括弧について、分配則 <InlineMath math="\{f, g h\} = \{f, g\}h + g\{f, h\}" /> が成立することを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義に従い直接計算する：
                            <BlockMath math="\{f, gh\} = f_u (gh)_p - f_p (gh)_u = f_u (g_p h + g h_p) - f_p (g_u h + g h_u)" />
                        </p>
                        <p>
                            展開して整理する：
                            <BlockMath math="\begin{aligned} &= (f_u g_p - f_p g_u)h + g(f_u h_p - f_p h_u) \\ &= \{f, g\}h + g\{f, h\} \end{aligned}" />
                        </p>
                        <p>
                            これは、ポアソン括弧が「微分」としての性質（ライプニッツ則）を持つことを示している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        多自由度系において、ハミルトニアンが全エネルギー <InlineMath math="E = T + V" /> に一致するための一般的な条件について考察せよ（§5.1 備考および Example 5.3-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. ラグランジアンが「座標系の取り替え」によって <InlineMath math="F = T - V" /> と書けるとき、
                            もし運動エネルギー <InlineMath math="T" /> が <b>速度の 2 次形式</b> であるならば、オイラーの同次関数定理より：
                            <BlockMath math="\sum p_k \dot{q}_k = \sum \frac{\partial T}{\partial \dot{q}_k} \dot{q}_k = 2T" />
                        </p>
                        <p>
                            2. これをハミルトニアンの定義 <InlineMath math="H = \sum p \dot{q} - F" /> に代入すると：
                            <BlockMath math="H = 2T - (T - V) = T + V" />
                        </p>
                        <p>
                            3. したがって、運動エネルギーが速度に関して 2 次であること、かつポテンシャルが速度に依存しないことが、ハミルトニアンが物理的な全エネルギーに一致するための主要な条件となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
