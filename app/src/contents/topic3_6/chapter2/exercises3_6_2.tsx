import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_6_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        変分の基本補題（Lemma 2.1-1）において、「任意のテスト関数 <InlineMath math="\eta(x)" /> に対して積分が 0 ならば <InlineMath math="g(x) = 0" />」という結論を得るために、
                        関数 <InlineMath math="g" /> に課されている重要な数学的性質は何か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            それは<b>連続性</b>（Continuity）である。
                            <InlineMath math="g" /> が連続であることにより、ある点で正（または負）の値を取るならば、その点の十分小さな近傍においても同じ符号を持ち続けることが保証される。
                            これにより、その近傍内でのみ正の値をとるテスト関数を構成することで、積分値を正にすることが可能になり、背理法による証明が完結する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        ラグランジアン <InlineMath math="F(x, u, u')" /> に対するオイラー＝ラグランジュ方程式（E-L 方程式）の一般形を書き下せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.1-2 より：
                            <BlockMath math="\frac{\partial F}{\partial u} - \frac{d}{dx} \left( \frac{\partial F}{\partial u'} \right) = 0" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        弧長汎関数 <InlineMath math="F = \sqrt{1 + u'^2}" /> の E-L 方程式が <InlineMath math="u'' = 0" /> に帰着することを、具体的な計算過程（微分の実行）を含めて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 偏導関数を計算する：
                            <BlockMath math="\frac{\partial F}{\partial u} = 0, \quad \frac{\partial F}{\partial u'} = \frac{u'}{\sqrt{1 + u'^2}}" />
                        </p>
                        <p>
                            2. E-L 方程式に代入する：
                            <BlockMath math="0 - \frac{d}{dx} \left( \frac{u'}{\sqrt{1 + u'^2}} \right) = 0 \implies \frac{d}{dx} \left( \frac{u'}{\sqrt{1 + u'^2}} \right) = 0" />
                        </p>
                        <p>
                            3. 微分を実行する（または積分して定数とおく）：
                            <BlockMath math="\frac{u'' (1+u'^2)^{1/2} - u' \cdot \frac{1}{2}(1+u'^2)^{-1/2} \cdot 2u' u''}{1 + u'^2} = 0" />
                            分子を整理すると：
                            <BlockMath math="u'' (1+u'^2) - u'^2 u'' = u'' = 0" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        ラグランジアン <InlineMath math="F = u'^2 + u^2" /> を持つ汎関数の停留関数を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 偏導関数を求める：
                            <BlockMath math="\frac{\partial F}{\partial u} = 2u, \quad \frac{\partial F}{\partial u'} = 2u'" />
                        </p>
                        <p>
                            2. E-L 方程式を立てる：
                            <BlockMath math="2u - \frac{d}{dx} (2u') = 0 \implies 2u - 2u'' = 0 \implies u'' - u = 0" />
                        </p>
                        <p>
                            3. 一般解を求める：
                            特性方程式は <InlineMath math="r^2 - 1 = 0 \implies r = \pm 1" /> なので、
                            <BlockMath math="u(x) = C_1 e^x + C_2 e^{-x}" />
                            （または <InlineMath math="u = A \cosh x + B \sinh x" />）である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        最速降下線問題のラグランジアン <InlineMath math="F = \sqrt{\frac{1+y'^2}{y}}" /> において、
                        独立変数 <InlineMath math="x" /> を陽に含まない（<InlineMath math="F_x = 0" />）場合に成立する
                        <b>第一積分</b>（エネルギー積分） <InlineMath math="F - y' F_{y'} = C" /> の左辺を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. <InlineMath math="F_{y'}" /> を計算する：
                            <BlockMath math="F_{y'} = \frac{1}{\sqrt{y}} \frac{y'}{\sqrt{1 + y'^2}}" />
                        </p>
                        <p>
                            2. 式に代入する：
                            <BlockMath math="\begin{aligned} F - y' F_{y'} &= \frac{\sqrt{1+y'^2}}{\sqrt{y}} - y' \left( \frac{1}{\sqrt{y}} \frac{y'}{\sqrt{1+y'^2}} \right) \\ &= \frac{(1+y'^2) - y'^2}{\sqrt{y} \sqrt{1+y'^2}} \\ &= \frac{1}{\sqrt{y(1+y'^2)}} \end{aligned}" />
                        </p>
                        <p>
                            これが定数である（<InlineMath math="y(1+y'^2) = \text{const}" />）という条件が、サイクロイド解を導く。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        3 次元の E-L 方程式を用いて、空間内の 2 点 <InlineMath math="\mathbf{a}, \mathbf{b}" /> を結ぶ
                        最短経路が直線であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. パラメータ <InlineMath math="t" /> による曲線 <InlineMath math="(x(t), y(t), z(t))" /> に対するラグランジアンは
                            <InlineMath math="F = \sqrt{\dot{x}^2 + \dot{y}^2 + \dot{z}^2}" /> である。
                        </p>
                        <p>
                            2. <InlineMath math="x" /> 成分についての E-L 方程式は：
                            <BlockMath math="\frac{\partial F}{\partial x} - \frac{d}{dt} \left( \frac{\partial F}{\partial \dot{x}} \right) = 0 - \frac{d}{dt} \left( \frac{\dot{x}}{\sqrt{\dot{x}^2 + \dot{y}^2 + \dot{z}^2}} \right) = 0" />
                        </p>
                        <p>
                            3. ラグランジアン <InlineMath math="F" /> は弧長そのものであるから、パラメータとして弧長 <InlineMath math="s" /> を採用すると
                            <InlineMath math="\dot{x}^2 + \dot{y}^2 + \dot{z}^2 = (ds/ds)^2 = 1" /> となる。
                        </p>
                        <p>
                            4. このとき方程式は <InlineMath math="\frac{d}{ds} (\dot{x}) = \ddot{x} = 0" /> となり、全成分で <InlineMath math="\ddot{x} = \ddot{y} = \ddot{z} = 0" /> が得られる。
                            これを 2 回積分すると直線の方程式が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        オイラー＝ポアソン方程式（Theorem 2.3-1）
                        <BlockMath math="\frac{\partial F}{\partial u} - \frac{d}{dx} \left( \frac{\partial F}{\partial u'} \right) + \frac{d^2}{dx^2} \left( \frac{\partial F}{\partial u''} \right) = 0" />
                        を用いて、ラグランジアン <InlineMath math="F = (u'')^2" /> に対する停留関数が 3 次関数であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 偏導関数を求める：
                            <InlineMath math="F_u = 0, \ F_{u'} = 0, \ F_{u''} = 2u''" />
                        </p>
                        <p>
                            2. 方程式に代入する：
                            <BlockMath math="0 - 0 + \frac{d^2}{dx^2} (2u'') = 0 \implies 2 u'''' = 0 \implies u'''' = 0" />
                        </p>
                        <p>
                            3. 解を求める：
                            4 階微分が 0 なので、解は高々 3 次の多項式
                            <BlockMath math="u(x) = C_3 x^3 + C_2 x^2 + C_1 x + C_0" />
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        変分の基本補題（Lemma 2.1-1）を証明する際、関数 <InlineMath math="g(x)" /> がある開区間で正であるとき、
                        その区間内でのみ正となるテスト関数の一例として
                        <BlockMath math="\eta(x) = \begin{cases} (x-c)^2 (d-x)^2 & (c < x < d) \\ 0 & (\text{その他}) \end{cases}" />
                        （ただし <InlineMath math="[c, d]" /> は <InlineMath math="g" /> が正の区間内の閉小範囲）
                        が適切であることを確認せよ。特に、端点での連続微分可能性について検証せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. <InlineMath math="x \to c" /> および <InlineMath math="x \to d" /> において、<InlineMath math="\eta(x) \to 0" /> であることは明らか。
                        </p>
                        <p>
                            2. 導関数 <InlineMath math="\eta'(x) = 2(x-c)(d-x)^2 - 2(x-c)^2(d-x)" /> も <InlineMath math="x \to c, d" /> において 0 となる。
                        </p>
                        <p>
                            3. よって、この関数は区間の境界で微分も含めて滑らかに 0 に接続されており、<InlineMath math="C^1" /> クラスのテスト関数として機能する。
                            （さらに高次の連絡を求める場合は指数を上げればよい）。
                            このような「台（Support）がコンパクトな関数」が存在することが、積分条件から局所的な情報を抽出できる物理的・数学的な根拠となっている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        ラグランジアンが <InlineMath math="F = F(u')" />（<InlineMath math="x" /> も <InlineMath math="u" /> も陽に含まない）のとき、E-L 方程式はどのような極めて簡潔な形になるか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. <InlineMath math="F_u = 0" /> より、E-L 方程式は
                            <BlockMath math="0 - \frac{d}{dx} F_{u'} = 0 \implies \frac{d}{dx} F_{u'} = 0" />
                        </p>
                        <p>
                            2. これにより <InlineMath math="F_{u'} = \text{const}" /> が保存量（第一積分）となる。
                        </p>
                        <p>
                            3. 一般に <InlineMath math="F_{u'}" /> が <InlineMath math="u'" /> の単調関数の場合、この式から <InlineMath math="u' = \text{const}" /> が導かれる。
                            これは最短経路（弧長汎関数）などがこれに該当し、解が必ず直線となることを意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        <b>等周問題</b>（長さ <InlineMath math="L" /> の紐で囲める最大面積を求める）のラグランジアンは、拘束条件付きの変分問題（ラグランジュの未定乗数法）の形式
                        <BlockMath math="J[y] = \int_a^b (y + \lambda \sqrt{1+y'^2}) dx" />
                        で記述される。この汎関数に対する E-L 方程式を計算し、その正体が「円の弧」であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. ラグランジアンは <InlineMath math="F = y + \lambda \sqrt{1+y'^2}" /> である。偏導関数を計算：
                            <BlockMath math="F_y = 1, \quad F_{y'} = \frac{\lambda y'}{\sqrt{1+y'^2}}" />
                        </p>
                        <p>
                            2. E-L 方程式に代入：
                            <BlockMath math="1 - \frac{d}{dx} \left( \frac{\lambda y'}{\sqrt{1+y'^2}} \right) = 0 \implies \frac{d}{dx} \left( \frac{\lambda y'}{\sqrt{1+y'^2}} \right) = 1" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
