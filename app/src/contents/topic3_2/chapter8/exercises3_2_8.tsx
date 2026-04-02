import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_2_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="8" number={1}>
                    <p>
                        複素関数 <InlineMath math="f(z) = e^z" /> が点 <InlineMath math="z=0" /> において等角であることを、定義 (Definition 8.1-1) に基づいて確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 8.1-1 によれば、関数が正則であり、かつ微分係数が 0 でない点において、その写像は等角である。
                        </p>
                        <p>
                            <InlineMath math="f(z) = e^z" /> は複素平面全体で正則であり、導関数は <InlineMath math="f'(z) = e^z" /> である。
                            <InlineMath math="z=0" /> における微分係数は <InlineMath math="f'(0) = e^0 = 1 \neq 0" />。
                        </p>
                        <p>
                            したがって、<InlineMath math="f(z) = e^z" /> は <InlineMath math="z=0" /> において等角である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>
                        相異なる 3 点 <InlineMath math="z_1 = 0, z_2 = 1, z_3 = \infty" /> を、それぞれ <InlineMath math="w_1 = -1, w_2 = 0, w_3 = 1" /> に写すメビウス変換 <InlineMath math="w = f(z)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 8.2-2 の複比の公式を用いて解く。
                            ただし、<InlineMath math="z_3 = \infty" /> の場合、複比の式において <InlineMath math="z-z_3" /> や <InlineMath math="z_2-z_3" /> を含む項の比を、極限操作により 1 とみなす。
                        </p>
                        <BlockMath math="\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \frac{(z - z_1)}{(z_2 - z_1)}" />
                        <p>
                            値を代入すると：
                        </p>
                        <BlockMath math="\frac{(w+1)(0-1)}{(w-1)(0-(-1))} = \frac{z-0}{1-0} \implies \frac{-(w+1)}{w-1} = z" />
                        <p>
                            <InlineMath math="w" /> について解くと：
                        </p>
                        <BlockMath math="-(w+1) = z(w-1) = zw - z \implies z - 1 = w(z+1)" />
                        <BlockMath math="w = \frac{z-1}{z+1}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>
                        メビウス変換 <InlineMath math="w = 1/z" /> によって、実軸上の直線 <InlineMath math="y = 1" /> がどのような図形に写されるか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            直線 <InlineMath math="y=1" /> 上の点 <InlineMath math="z = x + i" /> を考える。
                            <BlockMath math="w = \frac{1}{x+i} = \frac{x-i}{x^2+1} = \frac{x}{x^2+1} - i\frac{1}{x^2+1}" />
                            <InlineMath math="w = u + iv" /> とおくと、
                            <BlockMath math="u = \frac{x}{x^2+1}, \quad v = -\frac{1}{x^2+1}" />
                        </p>
                        <p>
                            <InlineMath math="u^2 + v^2 + v" /> を計算すると：
                        </p>
                        <BlockMath math="\frac{x^2}{(x^2+1)^2} + \frac{1}{(x^2+1)^2} - \frac{1}{x^2+1} = \frac{x^2+1-x^2-1}{(x^2+1)^2} = 0" />
                        <BlockMath math="u^2 + (v + 1/2)^2 = (1/2)^2" />
                        <p>
                            これは、中心 <InlineMath math="(0, -1/2)" />、半径 <InlineMath math="1/2" /> の円である。
                            もとの直線は無限遠点を通らないため、像は原点を通る円になる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="8" number={4}>
                    <p>
                        単位円板 <InlineMath math="|z| < 1" /> を上半平面 <InlineMath math="\text{Im}(w) > 0" /> に写すメビウス変換 <InlineMath math="w = i \frac{1-z}{1+z}" /> (Example 8.2-2) において、実軸上の点 <InlineMath math="z = 0.5" /> がどこに写るか計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            与えられた写像に <InlineMath math="z = 0.5 = 1/2" /> を代入する。
                        </p>
                        <BlockMath math="w = i \frac{1 - 1/2}{1 + 1/2} = i \frac{1/2}{3/2} = i \cdot \frac{1}{3} = \frac{1}{3} i" />
                        <p>
                            虚部 <InlineMath math="1/3 > 0" /> であるため、期待通り上半平面にある点に写されている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p>
                        べき写像 <InlineMath math="w = z^2" /> によって、第 1 象限 <InlineMath math="\{ z \mid \text{Re}(z) > 0, \text{Im}(z) > 0 \}" /> がどのような領域に写されるか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            第 1 象限は、極座標 <InlineMath math="z = re^{i\theta}" /> で表すと、偏角 <InlineMath math="0 < \theta < \pi/2" /> の扇形領域である。
                        </p>
                        <p>
                            写像 <InlineMath math="z \mapsto z^2" /> を適用すると、像 <InlineMath math="w = r^2 e^{i(2\theta)}" />。
                            偏角の範囲は <InlineMath math="0 < 2\theta < \pi" /> となる。
                        </p>
                        <p>
                            したがって、第 1 象限は <strong>上半平面 (Upper Half-plane)</strong> 全体に写される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>
                        ジューコフスキー変換 <InlineMath math="w = z + 1/z" /> (Definition 8.3-1) によって、大きな半径 <InlineMath math="R > 1" /> の円 <InlineMath math="|z| = R" /> が複素平面上でどのような図形に写されるか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="z = Re^{i\theta}" /> とすると、
                            <BlockMath math="w = Re^{i\theta} + \frac{1}{R}e^{-i\theta} = (R + 1/R)\cos\theta + i(R - 1/R)\sin\theta" />
                            <InlineMath math="w = u + iv" /> とおくと：
                        </p>
                        <BlockMath math="\frac{u^2}{(R + 1/R)^2} + \frac{v^2}{(R - 1/R)^2} = \cos^2\theta + \sin^2\theta = 1" />
                        <p>
                            これは <strong>楕円 (Ellipse)</strong> を表す。中心は原点、焦点は <InlineMath math="\pm 2" /> であることが知られている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={7}>
                    <p>
                        関数 <InlineMath math="f(z) = \sin z" /> の臨界点 (Definition 8.1-2) をすべて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            臨界点は <InlineMath math="f'(z) = 0" /> となる点である。
                            <InlineMath math="f'(z) = \cos z = 0" />。
                        </p>
                        <p>
                            余弦関数が 0 となる複素数は実軸上の点に限られることが知られており、
                            <BlockMath math="z = \frac{\pi}{2} + n\pi \quad (n \in \mathbb{Z})" />
                            である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="8" number={8}>
                    <p>
                        上半平面内の半円板 <InlineMath math="D = \{ z \mid |z| < 1, \text{Im}(z) > 0 \}" /> を上半平面全体へ写す等角写像を一例構成せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            以下のステップで領域を変形する。
                        </p>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <strong>線形変換（またはメビウス変換）による端点の処理</strong>：
                                <InlineMath math="z_1 = \phi(z) = \frac{1+z}{1-z}" /> を考える。
                                単位円板は右半平面へ、上半円板は第 1 象限へ写る。
                            </li>
                            <li>
                                <strong>べき写像による角度の拡大</strong>：
                                <InlineMath math="w = z_1^2" /> を適用する。
                                第 1 象限（開き角 <InlineMath math="\pi/2" />）は上半平面（開き角 <InlineMath math="\pi" />）へ写される。
                            </li>
                        </ol>
                        <p>
                            一例として、<InlineMath math="w = \left( \frac{1+z}{1-z} \right)^2" /> が求める等角写像の一つである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={9}>
                    <p>
                        リーマンの写像定理 (Theorem 8.4-1) で述べられている、写像の一意性を保証するための「正規化条件」について説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定理によれば、ある点 <InlineMath math="z_0 \in U" /> に対して <InlineMath math="f(z_0) = 0" /> かつ <InlineMath math="f'(z_0) > 0" /> となるような写像は唯一つに定まる。
                        </p>
                        <p>
                            (1) <InlineMath math="f(z_0)=0" /> は、領域内のどの点を出力円盤の中心（原点）に持ってくるかを固定する条件である。
                            (2) <InlineMath math="f'(z_0) > 0" /> は、出力円盤における関数の「向き（回転の角度）」を固定する条件である。
                        </p>
                        <p className="mt-2">
                            もしこの条件がない場合、単位円板から単位円板への自己同型写像（メビウス変換の一種）を合成することで、無限に多くの異なる等角写像が存在しうることになる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={10}>
                    <p>
                        単位円板 <InlineMath math="|z| < 1" /> から自分自身へのメビウス変換は、定数 <InlineMath math="\alpha \ (||\alpha|| < 1)" /> と <InlineMath math="\theta \in \mathbb{R}" /> を用いて
                        <BlockMath math="w = e^{i\theta} \frac{z - \alpha}{1 - \bar{\alpha}z}" />
                        と書けることを、境界 <InlineMath math="|z|=1" /> が <InlineMath math="|w|=1" /> に写ることを確認することで示せ（概略）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="|z|=1" /> （すなわち <InlineMath math="z\bar{z}=1" />）のとき、
                        </p>
                        <BlockMath math="\begin{aligned} |z - \alpha|^2 &= (z-\alpha)(\bar{z}-\bar{\alpha}) = z\bar{z} - \alpha\bar{z} - \bar{\alpha}z + \alpha\bar{\alpha} \\ &= 1 - \alpha\bar{z} - \bar{\alpha}z + |\alpha|^2 \end{aligned}" />
                        <p>
                            分母については：
                        </p>
                        <BlockMath math="\begin{aligned} |1 - \bar{\alpha}z|^2 &= (1-\bar{\alpha}z)(1-\alpha\bar{z}) = 1 - \alpha\bar{z} - \bar{\alpha}z + \alpha\bar{\alpha}z\bar{z} \\ &= 1 - \alpha\bar{z} - \bar{\alpha}z + |\alpha|^2 \end{aligned}" />
                        <p>
                            したがって、境界上では常に分子と分母の絶対値が等しくなり、<InlineMath math="|w| = |e^{i\theta}| \cdot 1 = 1" /> が成り立つ。
                            また、<InlineMath math="z = \alpha" /> のとき <InlineMath math="w = 0" /> となり、円板内部が内部に写されていることがわかる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
