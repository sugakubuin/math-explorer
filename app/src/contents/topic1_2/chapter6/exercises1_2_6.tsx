import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_2_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        二重積分 <InlineMath math="\displaystyle \iint_D f(x, y) \, dx dy" /> において、被積分関数が <InlineMath math="f(x, y) = 1" /> のとき、この積分値が表す幾何学的な意味を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 6.1-1 （二重積分の線形性と大小比較）にある通り、<InlineMath math="f(x,y) = 1" /> を積分すると、領域 <InlineMath math="D" /> の<strong>面積</strong>になる。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> 領域 <InlineMath math="D" /> の面積
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        フビニの定理（Theorem 6.1-1）に関する以下の文の空欄に適する言葉を答えよ。
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md my-4">
                        <p>
                            積分領域 <InlineMath math="D" /> が長方形領域であり、関数 <InlineMath math="f(x,y)" /> が連続であるとき、二重積分は1変数の定積分を2回繰り返す（　　）積分に直して計算できる。
                            このとき、どちらの変数から積分しても結果は等しい。
                        </p>
                    </div>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.1-1 にある通り、1変数の積分を繰り返す形を「累次積分」と呼ぶ。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> 累次
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        直交座標 <InlineMath math="(x,y)" /> から極座標 <InlineMath math="(r, \theta)" /> に変数変換を行う際、微小面積 <InlineMath math="dx dy" /> はヤコビアンを用いてどのように置き換えられるか。式で答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 6.4-1 にある通り、極座標のヤコビアンは <InlineMath math="J = r" /> である。
                            したがって、面積要素にはヤコビアンの絶対値をかけて置き換える。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> <InlineMath math="r \, dr d\theta" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        長方形領域 <InlineMath math="D = \{ (x, y) \mid 0 \le x \le 2, \, 1 \le y \le 3 \}" /> における二重積分を計算せよ。
                    </p>
                    <BlockMath math="\iint_D (2x + 3y) \, dx dy" />
                    <ExerciseSolution>
                        <p>
                            フビニの定理を用いて累次積分に直す。積分順序はどちらでもよいが、先に <InlineMath math="y" /> について積分する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \iint_D (2x + 3y) \, dx dy &= \int_0^2 \left( \int_1^3 (2x + 3y) \, dy \right) dx \\
                            &= \int_0^2 \left[ 2xy + \frac{3}{2}y^2 \right]_{y=1}^3 \, dx \\
                            &= \int_0^2 \left\{ \left( 6x + \frac{27}{2} \right) - \left( 2x + \frac{3}{2} \right) \right\} \, dx \\
                            &= \int_0^2 \left( 4x + \frac{24}{2} \right) \, dx \\
                            &= \int_0^2 (4x + 12) \, dx
                            \end{aligned}
                        " />
                        <p>
                            次に <InlineMath math="x" /> について積分する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            &= \left[ 2x^2 + 12x \right]_0^2 \\
                            &= 2(4) + 12(2) - 0 \\
                            &= 8 + 24 = 32
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        積分領域 <InlineMath math="D" /> が <InlineMath math="0 \le x \le 1" />、<InlineMath math="x^2 \le y \le x" /> で与えられるとき、次の二重積分を計算せよ。
                    </p>
                    <BlockMath math="\iint_D xy \, dx dy" />
                    <ExerciseSolution>
                        <p>
                            領域 <InlineMath math="D" /> は縦線領域として表されているので、内側の積分区間を関数で指定して累次積分を行う。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \iint_D xy \, dx dy &= \int_0^1 \left( \int_{x^2}^x xy \, dy \right) dx \\
                            &= \int_0^1 x \left[ \frac{1}{2}y^2 \right]_{y=x^2}^x \, dx \\
                            &= \int_0^1 \frac{x}{2} \left( x^2 - (x^2)^2 \right) \, dx \\
                            &= \frac{1}{2} \int_0^1 (x^3 - x^5) \, dx
                            \end{aligned}
                        " />
                        <p>
                            これを <InlineMath math="x" /> について積分する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            &= \frac{1}{2} \left[ \frac{1}{4}x^4 - \frac{1}{6}x^6 \right]_0^1 \\
                            &= \frac{1}{2} \left( \frac{1}{4} - \frac{1}{6} \right) \\
                            &= \frac{1}{2} \left( \frac{3 - 2}{12} \right) = \frac{1}{24}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        極座標変換を用いて、領域 <InlineMath math="D = \{ (x, y) \mid x^2 + y^2 \le 4, \, x \ge 0, \, y \ge 0 \}" /> （四分円）における次の二重積分を計算せよ。
                    </p>
                    <BlockMath math="\iint_D \sqrt{x^2 + y^2} \, dx dy" />
                    <ExerciseSolution>
                        <p>
                            極座標 <InlineMath math="x = r \cos \theta, y = r \sin \theta" /> に変数変換する。
                        </p>
                        <p>
                            領域 <InlineMath math="D" /> は第1象限における半径2の四分円であるため、極座標での範囲 <InlineMath math="E" /> は <InlineMath math="0 \le r \le 2" />、<InlineMath math="0 \le \theta \le \frac{\pi}{2}" /> となる。
                        </p>
                        <p>
                            また、被積分関数は <InlineMath math="\sqrt{x^2 + y^2} = \sqrt{r^2} = r" /> となり、面積要素は <InlineMath math="dx dy = r \, dr d\theta" /> となる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \iint_D \sqrt{x^2 + y^2} \, dx dy &= \iint_E r \cdot (r \, dr d\theta) \\
                            &= \int_0^{\pi/2} \left( \int_0^2 r^2 \, dr \right) d\theta
                            \end{aligned}
                        " />
                        <p>
                            変数が分離しているため、別々に積分できる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            &= \left( \int_0^{\pi/2} 1 \, d\theta \right) \times \left( \int_0^2 r^2 \, dr \right) \\
                            &= [\theta]_0^{\pi/2} \times \left[ \frac{r^3}{3} \right]_0^2 \\
                            &= \frac{\pi}{2} \times \frac{8}{3} = \frac{4\pi}{3}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        直方体領域 <InlineMath math="V = \{ (x, y, z) \mid 0 \le x \le 1, \, 0 \le y \le 2, \, 0 \le z \le 3 \}" /> における次の三重積分を計算せよ。
                    </p>
                    <BlockMath math="\iiint_V xyz \, dx dy dz" />
                    <ExerciseSolution>
                        <p>
                            フビニの定理の拡張（Theorem 6.2-1）により、各変数について独立して累次積分を行う。被積分関数が積の形に完全に分離できるので、積分の積として計算できる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \iiint_V xyz \, dx dy dz &= \left( \int_0^1 x \, dx \right) \left( \int_0^2 y \, dy \right) \left( \int_0^3 z \, dz \right) \\
                            &= \left[ \frac{x^2}{2} \right]_0^1 \times \left[ \frac{y^2}{2} \right]_0^2 \times \left[ \frac{z^2}{2} \right]_0^3 \\
                            &= \left( \frac{1}{2} \right) \times \left( \frac{4}{2} \right) \times \left( \frac{9}{2} \right) \\
                            &= \frac{1}{2} \times 2 \times \frac{9}{2} = \frac{9}{2}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        積分順序の交換（Example 6.1-1 参照）を用いて、次の二重積分の値を求めよ。
                    </p>
                    <BlockMath math="\int_0^2 \left( \int_{x/2}^1 \cos(y^2) \, dy \right) dx" />
                    <ExerciseSolution>
                        <p>
                            内側の積分 <InlineMath math="\int \cos(y^2) \, dy" /> は初等関数で表せないため、このままでは計算できない。積分順序の交換を行う。
                        </p>
                        <p>
                            現在の積分領域 <InlineMath math="D" /> は、縦線領域として <InlineMath math="0 \le x \le 2, \,\, \frac{x}{2} \le y \le 1" /> と定義されている。<br />
                            境界線は <InlineMath math="x=0" />, <InlineMath math="x=2" />, <InlineMath math="y=x/2 \implies x=2y" />, <InlineMath math="y=1" /> で囲まれた三角形の領域である。
                        </p>
                        <p>
                            これを横線領域として見直す。<br />
                            <InlineMath math="y" /> の動く範囲は全体で <InlineMath math="0 \le y \le 1" /> である。<br />
                            各 <InlineMath math="y" /> に対して、<InlineMath math="x" /> は <InlineMath math="x=0" /> から斜めの直線 <InlineMath math="x=2y" /> まで動くので、<InlineMath math="0 \le x \le 2y" /> となる。
                        </p>
                        <p>
                            積分順序を交換して式を書き直す。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^1 \left( \int_0^{2y} \cos(y^2) \, dx \right) dy &= \int_0^1 \cos(y^2) \Big[ x \Big]_0^{2y} \, dy \\
                            &= \int_0^1 2y \cos(y^2) \, dy
                            \end{aligned}
                        " />
                        <p>
                            この積分は <InlineMath math="u = y^2" /> と置換（<InlineMath math="du = 2y \, dy" />）すれば簡単に計算できる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^1 \cos(u) \, du &= \Big[ \sin u \Big]_0^1 \\
                            &= \sin 1 - \sin 0 = \sin 1
                            \end{aligned}
                        " />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        変数変換 <InlineMath math="u = x + y, \, v = x - y" /> を行う。<br />
                        領域 <InlineMath math="D" /> が <InlineMath math="x+y \le 2, x+y \ge 0, x-y \le 1, x-y \ge -1" /> で囲まれた正方形領域であるとき、ヤコビアン <InlineMath math="J = \frac{\partial(x,y)}{\partial(u,v)}" /> を計算し、二重積分 <InlineMath math="\displaystyle \iint_D (x-y)^2 e^{x+y} \, dx dy" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず <InlineMath math="x, y" /> を <InlineMath math="u, v" /> で表す。
                        </p>
                        <BlockMath math="\begin{cases} u = x+y \\ v = x-y \end{cases} \implies \begin{cases} x = \frac{u+v}{2} \\ y = \frac{u-v}{2} \end{cases}" />
                        <p>
                            ヤコビアン <InlineMath math="J" /> を計算する。
                        </p>
                        <BlockMath math="\begin{aligned}
                            J &= \left| \begin{matrix} x_u & x_v \\ y_u & y_v \end{matrix} \right| \\
                            &= \left| \begin{matrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{matrix} \right| \\
                            &= \left(\frac{1}{2}\right)\left(-\frac{1}{2}\right) - \left(\frac{1}{2}\right)\left(\frac{1}{2}\right) \\
                            &= -\frac{1}{4} - \frac{1}{4} = -\frac{1}{2}
                        \end{aligned}" />
                        <p>
                            面積要素は絶対値を取るため <InlineMath math="dx dy = |J| \, du dv = \frac{1}{2} \, du dv" /> となる。
                        </p>
                        <p>
                            積分領域 <InlineMath math="E" /> は <InlineMath math="0 \le u \le 2" /> かつ <InlineMath math="-1 \le v \le 1" /> の長方形領域である。<br />
                            被積分関数は <InlineMath math="(x-y)^2 e^{x+y} = v^2 e^u" /> となる。
                        </p>
                        <p>
                            変数変換公式（Theorem 6.3-1）を適用する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \iint_D (x-y)^2 e^{x+y} \, dx dy &= \iint_E v^2 e^u \left(\frac{1}{2}\right) du dv \\
                            &= \frac{1}{2} \int_0^2 e^u \, du \int_{-1}^1 v^2 \, dv
                            \end{aligned}
                        " />
                        <p>
                            それぞれの定積分を計算する。
                        </p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li><InlineMath math="\int_0^2 e^u \, du = [e^u]_0^2 = e^2 - 1" /></li>
                            <li><InlineMath math="\int_{-1}^1 v^2 \, dv = \left[\frac{v^3}{3}\right]_{-1}^1 = \frac{1}{3} - \left(-\frac{1}{3}\right) = \frac{2}{3}" /></li>
                        </ul>
                        <p>これらを掛け合わせる。</p>
                        <BlockMath math="= \frac{1}{2} (e^2 - 1) \left(\frac{2}{3}\right) = \frac{e^2 - 1}{3}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        球座標への変数変換（Definition 6.4-3）を用いて、半径 <InlineMath math="R" /> の球 <InlineMath math="V = \{ (x,y,z) \mid x^2+y^2+z^2 \le R^2 \}" /> における関数 <InlineMath math="f(x,y,z) = x^2 + y^2 + z^2" /> の三重積分 <InlineMath math="\displaystyle \iiint_V (x^2+y^2+z^2) \, dx dy dz" /> を計算せよ。<br />
                        （この値は、原点を中心とする球の「慣性モーメント」に関係する量である）
                    </p>
                    <ExerciseSolution>
                        <p>
                            球座標 <InlineMath math="x = r \sin \phi \cos \theta, \, y = r \sin \phi \sin \theta, \, z = r \cos \phi" /> を導入する。
                        </p>
                        <p>
                            被積分関数は <InlineMath math="x^2 + y^2 + z^2 = r^2" /> となる。<br />
                            積分領域 <InlineMath math="V" /> は <InlineMath math="0 \le r \le R, \,\, 0 \le \theta \le 2\pi, \,\, 0 \le \phi \le \pi" /> である。<br />
                            Proposition 6.4-3 より、微小体積要素は <InlineMath math="dx dy dz = r^2 \sin \phi \, dr d\theta d\phi" /> である。
                        </p>
                        <p>
                            これらを代入して累次積分を実行する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            &\iiint_V (x^2+y^2+z^2) \, dx dy dz \\
                            &= \int_0^{2\pi} d\theta \int_0^\pi d\phi \int_0^R (r^2)(r^2 \sin \phi) \, dr \\
                            &= \int_0^{2\pi} d\theta \int_0^\pi \sin \phi \, d\phi \int_0^R r^4 \, dr
                            \end{aligned}
                        " />
                        <p>
                            各変数の積分を計算する。
                        </p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li><InlineMath math="\int_0^{2\pi} d\theta = 2\pi" /></li>
                            <li><InlineMath math="\int_0^\pi \sin \phi \, d\phi = [-\cos \phi]_0^\pi = 1 - (-1) = 2" /></li>
                            <li><InlineMath math="\int_0^R r^4 \, dr = \left[ \frac{r^5}{5} \right]_0^R = \frac{R^5}{5}" /></li>
                        </ul>
                        <p>
                            したがって、求める積分の値は
                        </p>
                        <BlockMath math="2\pi \times 2 \times \frac{R^5}{5} = \frac{4\pi R^5}{5}" />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
