import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter12() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="12" number={1}>
                    <p>
                        フビニの定理（Theorem 12.2-1）に従い、長方形領域 <InlineMath math="D = [a, b] \times [c, d]" /> 上での連続関数 <InlineMath math="f(x,y)" /> の二重積分 <InlineMath math="\iint_D f(x, y) \, dx \, dy" /> を、累次積分として2通りの積分順序で表せ。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\int_a^b \left( \int_c^d f(x, y) \, dy \right) dx = \int_c^d \left( \int_a^b f(x, y) \, dx \right) dy" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={2}>
                    <p>
                        領域 <InlineMath math="D" /> での二重積分 <InlineMath math="\iint_D f(x, y) \, dx \, dy" /> を極座標 <InlineMath math="(r, \theta)" /> に変換して計算するとき、微小面積要素 <InlineMath math="dx \, dy" /> はヤコビアンを用いてどのように変換されるか記せ（Theorem 12.3-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="dx \, dy = r \, dr \, d\theta" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={3}>
                    <p>
                        三重積分を球座標 <InlineMath math="(r, \phi, \theta)" /> （<InlineMath math="x = r\sin\phi\cos\theta" />, <InlineMath math="y = r\sin\phi\sin\theta" />, <InlineMath math="z = r\cos\phi" />）に変換するとき、微小体積要素 <InlineMath math="dx \, dy \, dz" /> はヤコビアンを用いてどのように変換されるか記せ（Proposition 12.4-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="dx \, dy \, dz = r^2 \sin \phi \, dr \, d\phi \, d\theta" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="12" number={4}>
                    <p>
                        次の累次積分を計算せよ。
                    </p>
                    <BlockMath math="\int_0^1 \left( \int_0^2 (2x + 3y) \, dy \right) dx" />
                    <ExerciseSolution>
                        <p>
                            まず内側の <InlineMath math="y" /> についての積分を計算する（このとき <InlineMath math="x" /> は定数として扱う）。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^2 (2x + 3y) \, dy &= \left[ 2xy + \frac{3}{2}y^2 \right]_0^2 \\
                            &= \left( 2x(2) + \frac{3}{2}(2)^2 \right) - (0 + 0) \\
                            &= 4x + 6
                            \end{aligned}
                        " />
                        <p>
                            次に、この結果を外側の <InlineMath math="x" /> について積分する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^1 (4x + 6) \, dx &= \left[ 2x^2 + 6x \right]_0^1 \\
                            &= (2(1)^2 + 6(1)) - 0 \\
                            &= 8
                            \end{aligned}
                        " />
                        <p>
                            よって、積分の値は <InlineMath math="8" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={5}>
                    <p>
                        次の累次積分の積分順序を交換して、<InlineMath math="y" /> についての積分を外側に（最後に）行う形に書き直せ。
                    </p>
                    <BlockMath math="\int_0^1 \left( \int_x^1 f(x,y) \, dy \right) dx" />
                    <ExerciseSolution>
                        <p>
                            与えられた積分範囲は <InlineMath math="0 \le x \le 1" /> かつ <InlineMath math="x \le y \le 1" /> である。<br />
                            これを <InlineMath math="xy" /> 平面上に図示すると、頂点が <InlineMath math="(0,0), (1,1), (0,1)" /> である三角形の領域（縦線領域）となる。
                        </p>
                        <p>
                            この領域を <InlineMath math="y" /> の範囲を先に固定する横線領域として見直す。<br />
                            <InlineMath math="y" /> の取りうる範囲は <InlineMath math="0 \le y \le 1" /> である。<br />
                            <InlineMath math="y" /> を一つ固定したとき、<InlineMath math="x" /> は左側の直線 <InlineMath math="x = 0" /> から右側の直線 <InlineMath math="x = y" /> まで動く。<br />
                            したがって、新しい積分範囲は <InlineMath math="0 \le y \le 1, \, 0 \le x \le y" /> となる。
                        </p>
                        <p>
                            これを累次積分で表すと次のようになる。
                        </p>
                        <BlockMath math="\int_0^1 \left( \int_0^y f(x,y) \, dx \right) dy" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={6}>
                    <p>
                        二重積分 <InlineMath math="\iint_D (x^2 + y^2) \, dx \, dy" /> を計算せよ。<br />
                        ただし、積分領域は原点中心、半径 <InlineMath math="R" /> の円板 <InlineMath math="D = \{ (x, y) \mid x^2 + y^2 \le R^2 \}" /> とする。（極座標に変換して計算すること）
                    </p>
                    <ExerciseSolution>
                        <p>
                            極座標 <InlineMath math="x = r\cos\theta, y = r\sin\theta" /> に変換する。<br />
                            領域 <InlineMath math="D" /> は極座標では <InlineMath math="0 \le r \le R, \, 0 \le \theta \le 2\pi" /> という長方形領域 <InlineMath math="E" /> になる。<br />
                            被積分関数は <InlineMath math="x^2 + y^2 = r^2" /> となり、面積要素は <InlineMath math="dx \, dy = r \, dr \, d\theta" /> となる。
                        </p>
                        <p>
                            積分を書き換えて計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \iint_D (x^2 + y^2) \, dx \, dy &= \iint_E (r^2) \, r \, dr \, d\theta \\
                            &= \int_0^{2\pi} \int_0^R r^3 \, dr \, d\theta \\
                            &= \left( \int_0^{2\pi} d\theta \right) \left( \int_0^R r^3 \, dr \right) \\
                            &= \big[ \theta \big]_0^{2\pi} \left[ \frac{r^4}{4} \right]_0^R \\
                            &= 2\pi \cdot \frac{R^4}{4} = \frac{\pi R^4}{2}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={7}>
                    <p>
                        三重積分 <InlineMath math="\iiint_V z \, dx \, dy \, dz" /> を計算せよ。<br />
                        ただし、積分領域 <InlineMath math="V" /> は円柱領域 <InlineMath math="\{ (x, y, z) \mid x^2 + y^2 \le 1, \, 0 \le z \le 2 \}" /> とする。（円柱座標を用いて計算すること）
                    </p>
                    <ExerciseSolution>
                        <p>
                            円柱座標 <InlineMath math="x = r\cos\theta, y = r\sin\theta, z = z" /> に変換する。<br />
                            領域 <InlineMath math="V" /> は <InlineMath math="0 \le r \le 1, \, 0 \le \theta \le 2\pi, \, 0 \le z \le 2" /> と表される。<br />
                            体積要素は <InlineMath math="dx \, dy \, dz = r \, dr \, d\theta \, dz" /> である。
                        </p>
                        <p>
                            積分を書き換えて計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \iiint_V z \, dx \, dy \, dz &= \int_0^2 \int_0^{2\pi} \int_0^1 z \cdot r \, dr \, d\theta \, dz \\
                            &= \left( \int_0^2 z \, dz \right) \left( \int_0^{2\pi} d\theta \right) \left( \int_0^1 r \, dr \right) \\
                            &= \left[ \frac{z^2}{2} \right]_0^2 \big[ \theta \big]_0^{2\pi} \left[ \frac{r^2}{2} \right]_0^1 \\
                            &= \left( \frac{4}{2} \right) (2\pi) \left( \frac{1}{2} \right) \\
                            &= 2 \cdot 2\pi \cdot \frac{1}{2} = 2\pi
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="12" number={8}>
                    <p>
                        次の累次積分はそのままの順序では初等関数で計算できない。<br />
                        積分順序を交換することで、この積分の値を求めよ。
                    </p>
                    <BlockMath math="\int_0^1 \left( \int_y^1 e^{x^2} \, dx \right) dy" />
                    <ExerciseSolution>
                        <p>
                            積分領域は <InlineMath math="0 \le y \le 1" /> かつ <InlineMath math="y \le x \le 1" /> である。<br />
                            これは <InlineMath math="xy" /> 平面において、頂点が <InlineMath math="(0,0), (1,1), (1,0)" /> の三角形領域である。<br />
                            この領域を <InlineMath math="x" /> が先の順序（縦線領域）に書き換えると、<InlineMath math="0 \le x \le 1" /> かつ <InlineMath math="0 \le y \le x" /> となる。
                        </p>
                        <p>
                            積分順序を交換して計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^1 \left( \int_0^x e^{x^2} \, dy \right) dx &= \int_0^1 \left[ y e^{x^2} \right]_{y=0}^{y=x} dx \\
                            &= \int_0^1 x e^{x^2} \, dx
                            \end{aligned}
                        " />
                        <p>
                            ここで <InlineMath math="u = x^2" /> と置換積分を行うと、<InlineMath math="du = 2x \, dx \implies x \, dx = \frac{1}{2} du" />。<br />
                            積分範囲は <InlineMath math="x=0 \to 1" /> のとき <InlineMath math="u=0 \to 1" /> である。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^1 x e^{x^2} \, dx &= \int_0^1 \frac{1}{2} e^u \, du \\
                            &= \frac{1}{2} \big[ e^u \big]_0^1 \\
                            &= \frac{1}{2}(e - 1)
                            \end{aligned}
                        " />
                        <p>
                            したがって、求める値は <InlineMath math="\frac{1}{2}(e - 1)" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={9}>
                    <p>
                        半径 <InlineMath math="R" /> の球の第1八分空間（<InlineMath math="x \ge 0, y \ge 0, z \ge 0" />）にある部分の体積 <InlineMath math="V" /> を、球座標変換を用いて求めよ。（結果が球全体の体積の <InlineMath math="1/8" /> になることを確かめよ。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            球の第1八分空間の領域 <InlineMath math="D" /> は、直交座標では <InlineMath math="x^2+y^2+z^2 \le R^2, x \ge 0, y \ge 0, z \ge 0" /> である。<br />
                            これを球座標 <InlineMath math="(r, \phi, \theta)" /> で表すと、
                        </p>
                        <ul className="list-disc pl-5">
                            <li><InlineMath math="0 \le r \le R" /></li>
                            <li><InlineMath math="z \ge 0" /> より、天頂角は <InlineMath math="0 \le \phi \le \pi/2" /></li>
                            <li><InlineMath math="x \ge 0, y \ge 0" /> より、偏角は <InlineMath math="0 \le \theta \le \pi/2" /></li>
                        </ul>
                        <p>
                            体積要素は <InlineMath math="dx \, dy \, dz = r^2\sin\phi \, dr \, d\phi \, d\theta" /> である。<br />
                            積分を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            V &= \int_0^{\pi/2} \int_0^{\pi/2} \int_0^R r^2\sin\phi \, dr \, d\phi \, d\theta \\
                            &= \left( \int_0^{\pi/2} d\theta \right) \left( \int_0^{\pi/2} \sin\phi \, d\phi \right) \left( \int_0^R r^2 \, dr \right) \\
                            &= \big[ \theta \big]_0^{\pi/2} \big[ -\cos\phi \big]_0^{\pi/2} \left[ \frac{r^3}{3} \right]_0^R \\
                            &= \left( \frac{\pi}{2} \right) (0 - (-1)) \left( \frac{R^3}{3} \right) \\
                            &= \frac{\pi}{2} \cdot 1 \cdot \frac{R^3}{3} = \frac{\pi R^3}{6}
                            \end{aligned}
                        " />
                        <p>
                            球全体の体積 <InlineMath math="\frac{4\pi R^3}{3}" /> の <InlineMath math="1/8" /> 倍は <InlineMath math="\frac{\pi R^3}{6}" /> であり、計算結果と一致する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={10}>
                    <p>
                        第1象限の非有界領域 <InlineMath math="D = \{ (x, y) \mid x \ge 0, y \ge 0 \}" /> における次の広義重積分を計算せよ。
                    </p>
                    <BlockMath math="\iint_D \frac{1}{(1+x^2+y^2)^2} \, dx \, dy" />
                    <p>
                        （ヒント：近似列として原点中心、半径 <InlineMath math="R" /> の四分円領域 <InlineMath math="D_R = \{ (x, y) \mid x \ge 0, y \ge 0, x^2+y^2 \le R^2 \}" /> での積分を極座標で計算し、最後に <InlineMath math="\lim_{R \to \infty}" /> をとること。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            近似列 <InlineMath math="D_R" /> における積分 <InlineMath math="I_R" /> を極座標で計算する。<br />
                            領域は <InlineMath math="0 \le r \le R, \, 0 \le \theta \le \pi/2" /> となる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            I_R &= \iint_{D_R} \frac{1}{(1+r^2)^2} r \, dr \, d\theta \\
                            &= \left( \int_0^{\pi/2} d\theta \right) \left( \int_0^R \frac{r}{(1+r^2)^2} \, dr \right)
                            \end{aligned}
                        " />
                        <p>
                            後半の積分は、<InlineMath math="u = 1+r^2" /> と置換すると <InlineMath math="du = 2r \, dr" />（<InlineMath math="r \, dr = \frac{1}{2} du" />）より、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^R \frac{r}{(1+r^2)^2} \, dr &= \int_1^{1+R^2} \frac{1}{2u^2} \, du \\
                            &= \left[ -\frac{1}{2u} \right]_1^{1+R^2} \\
                            &= -\frac{1}{2(1+R^2)} - \left(-\frac{1}{2}\right) \\
                            &= \frac{1}{2} \left( 1 - \frac{1}{1+R^2} \right)
                            \end{aligned}
                        " />
                        <p>
                            これに <InlineMath math="\theta" /> の積分値 <InlineMath math="\frac{\pi}{2}" /> を掛ける。
                        </p>
                        <BlockMath math="I_R = \frac{\pi}{2} \cdot \frac{1}{2} \left( 1 - \frac{1}{1+R^2} \right) = \frac{\pi}{4} \left( 1 - \frac{1}{1+R^2} \right)" />
                        <p>
                            最後に <InlineMath math="R \to \infty" /> の極限をとる。
                        </p>
                        <BlockMath math="\begin{aligned}
                            \iint_D \frac{1}{(1+x^2+y^2)^2} \, dx \, dy &= \lim_{R \to \infty} \frac{\pi}{4} \left( 1 - \frac{1}{1+R^2} \right) \\
                            &= \frac{\pi}{4} \cdot 1 = \frac{\pi}{4}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
