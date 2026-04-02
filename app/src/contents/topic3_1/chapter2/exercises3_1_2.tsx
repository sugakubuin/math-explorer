import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_1_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        2次元の平面極座標 <InlineMath math="(r, \theta)" /> において、自然基底ベクトル <InlineMath math="\mathbf{e}_r^*, \mathbf{e}_\theta^*" /> およびラメ係数 <InlineMath math="h_r, h_\theta" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            座標変換式 <InlineMath math="\mathbf{r} = (r \cos \theta, r \sin \theta)" /> を微分して求める（Definition 2.1-2 参照）。
                        </p>
                        <BlockMath math="\begin{aligned} \mathbf{e}_r^* &= \frac{\partial \mathbf{r}}{\partial r} = (\cos \theta, \sin \theta) \\ \mathbf{e}_\theta^* &= \frac{\partial \mathbf{r}}{\partial \theta} = (-r \sin \theta, r \cos \theta) \end{aligned}" />
                        <p>
                            ラメ係数は、これらのベクトルの大きさである。
                        </p>
                        <BlockMath math="\begin{aligned} h_r &= |\mathbf{e}_r^*| = \sqrt{\cos^2 \theta + \sin^2 \theta} = 1 \\ h_\theta &= |\mathbf{e}_\theta^*| = \sqrt{(-r \sin \theta)^2 + (r \cos \theta)^2} = r \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        円柱座標系 <InlineMath math="(r, \theta, z)" /> および球座標系 <InlineMath math="(r, \phi, \theta)" /> のラメ係数をそれぞれ列挙せよ（§2.2, §2.3参照）。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>円柱座標系</strong>： <InlineMath math="h_r = 1, \; h_\theta = r, \; h_z = 1" />
                            </li>
                            <li>
                                <strong>球座標系</strong>： <InlineMath math="h_r = 1, \; h_\phi = r, \; h_\theta = r \sin \phi" />
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        球座標系における微小な弧長要素の 2 乗 <InlineMath math="ds^2" /> を、ラメ係数を用いて表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            直交曲線座標系における弧長要素の一般式は、
                            <BlockMath math="ds^2 = h_1^2 du_1^2 + h_2^2 du_2^2 + h_3^2 du_3^2" />
                            である（§2.1参照）。球座標系のラメ係数 <InlineMath math="(h_r, h_\phi, h_\theta) = (1, r, r \sin \phi)" /> を代入すると：
                        </p>
                        <BlockMath math="ds^2 = dr^2 + r^2 d\phi^2 + r^2 \sin^2 \phi d\theta^2" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        円柱座標系におけるスカラー場 <InlineMath math="f(r, \theta, z) = r^2 + z^2" /> の勾配 <InlineMath math="\nabla f" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.2-1 の勾配の公式を用いる。
                        </p>
                        <BlockMath math="\nabla f = \frac{\partial f}{\partial r} \hat{\mathbf{e}}_r + \frac{1}{r} \frac{\partial f}{\partial \theta} \hat{\mathbf{e}}_\theta + \frac{\partial f}{\partial z} \hat{\mathbf{e}}_z" />
                        <p>
                            各成分を計算すると：
                        </p>
                        <BlockMath math="\begin{aligned} \frac{\partial f}{\partial r} &= 2r \\ \frac{1}{r} \frac{\partial f}{\partial \theta} &= \frac{0}{r} = 0 \\ \frac{\partial f}{\partial z} &= 2z \end{aligned}" />
                        <p>
                            したがって、 <BlockMath math="\nabla f = 2r \hat{\mathbf{e}}_r + 2z \hat{\mathbf{e}}_z" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        球座標系におけるベクトル場 <InlineMath math="\mathbf{F} = r^n \hat{\mathbf{e}}_r" /> （ <InlineMath math="n" /> は定数）の発散 <InlineMath math="\text{div}\, \mathbf{F}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.3-1 の発散の公式において、 <InlineMath math="F_r = r^n, F_\phi = 0, F_\theta = 0" /> を代入する。
                        </p>
                        <BlockMath math="\begin{aligned} \text{div}\, \mathbf{F} &= \frac{1}{r^2} \frac{\partial}{\partial r}(r^2 F_r) \\ &= \frac{1}{r^2} \frac{\partial}{\partial r}(r^{n+2}) \\ &= \frac{(n+2)r^{n+1}}{r^2} \\ &= (n+2)r^{n-1} \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        球座標系におけるスカラー場 <InlineMath math="f(r) = 1/r" /> （ <InlineMath math="r \neq 0" /> ）がラプラス方程式 <InlineMath math="\Delta f = 0" /> を満たすことを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            球対称な場に対するラプラス演算子の簡略形式（Example 2.3-1）を用いる。
                        </p>
                        <BlockMath math="\begin{aligned} \Delta f &= \frac{1}{r^2} \frac{d}{dr}\left( r^2 \frac{df}{dr} \right) \\ &= \frac{1}{r^2} \frac{d}{dr}\left( r^2 \left(-\frac{1}{r^2}\right) \right) \\ &= \frac{1}{r^2} \frac{d}{dr}(-1) \\ &= 0 \end{aligned}" />
                        <p>
                            したがって、 <InlineMath math="\Delta f = 0" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        球座標における正規化された基底ベクトル <InlineMath math="\hat{\mathbf{e}}_\phi" /> を直交座標の成分表示で示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.3-1 より、位置ベクトル <InlineMath math="\mathbf{r}" /> の <InlineMath math="\phi" /> による微分を計算し、正規化する。
                        </p>
                        <BlockMath math="\mathbf{e}_\phi^* = \frac{\partial \mathbf{r}}{\partial \phi} = (r \cos \phi \cos \theta, r \cos \phi \sin \theta, -r \sin \phi)" />
                        <p>
                            ここからラメ係数 <InlineMath math="h_\phi = r" /> を抽出して割ると正規化された基底が得られる。
                        </p>
                        <BlockMath math="\hat{\mathbf{e}}_\phi = \frac{\mathbf{e}_\phi^*}{r} = (\cos \phi \cos \theta, \cos \phi \sin \theta, -\sin \phi)" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        直交曲線座標系のラプラス演算子の一般公式（Theorem 2.4-1）を用いて、円柱座標系の公式を導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            一般公式は以下の通りである：
                        </p>
                        <BlockMath math="\begin{aligned} \Delta f = \frac{1}{h_1 h_2 h_3} \biggl[ \frac{\partial}{\partial u_1} \left( \frac{h_2 h_3}{h_1} \frac{\partial f}{\partial u_1} \right) &+ \frac{\partial}{\partial u_2} \left( \frac{h_3 h_1}{h_2} \frac{\partial f}{\partial u_2} \right) \\ &+ \frac{\partial}{\partial u_3} \left( \frac{h_1 h_2}{h_3} \frac{\partial f}{\partial u_3} \right) \biggr] \end{aligned}" />
                        <p>
                            円柱座標系 <InlineMath math="(u_1, u_2, u_3) = (r, \theta, z)" /> のラメ係数 <InlineMath math="h_1=1, h_2=r, h_3=1" /> を代入すると：
                        </p>
                        <BlockMath math="\begin{aligned} \Delta f &= \frac{1}{r} \left[ \frac{\partial}{\partial r} \left( r \frac{\partial f}{\partial r} \right) + \frac{1}{r} \frac{\partial^2 f}{\partial \theta^2} + r \frac{\partial^2 f}{\partial z^2} \right] \\ &= \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial f}{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2 f}{\partial \theta^2} + \frac{\partial^2 f}{\partial z^2} \end{aligned}" />
                        <p>
                            これは Theorem 2.2-1 で示した公式と一致する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        球座標系において、ベクトル場 <InlineMath math="\mathbf{F} = \frac{1}{r^2} \hat{\mathbf{e}}_r" /> の発散を計算し、原点を除いて 0 になることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            球座標系の発散の公式を利用する。 <InlineMath math="F_r = 1/r^2" /> である。
                        </p>
                        <BlockMath math="\begin{aligned} \text{div}\, \mathbf{F} &= \frac{1}{r^2} \frac{\partial}{\partial r}(r^2 F_r) \\ &= \frac{1}{r^2} \frac{\partial}{\partial r}\left(r^2 \cdot \frac{1}{r^2}\right) \\ &= \frac{1}{r^2} \frac{\partial}{\partial r}(1) \\ &= 0 \end{aligned}" />
                        <p>
                            したがって、原点以外のあらゆる場所で、この場の湧き出しは存在しない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        円柱座標系において、 <InlineMath math="z" /> 成分のみを持つベクトル場 <InlineMath math="\mathbf{F} = (0, 0, F_z(r))" /> の回転 <InlineMath math="\text{rot}\, \mathbf{F}" /> を計算せよ。ただし <InlineMath math="F_z" /> は <InlineMath math="r" /> のみの関数とする。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.2-1 の回転の公式において、 <InlineMath math="F_r = 0, F_\theta = 0, F_z = F_z(r)" /> を代入する。
                        </p>
                        <BlockMath math="\begin{aligned} \text{rot}\, \mathbf{F} &= \left( \frac{1}{r} \frac{\partial F_z}{\partial \theta} - \frac{\partial F_\theta}{\partial z} \right) \hat{\mathbf{e}}_r + \left( \frac{\partial F_r}{\partial z} - \frac{\partial F_z}{\partial r} \right) \hat{\mathbf{e}}_\theta \\ &\qquad + \frac{1}{r} \left( \frac{\partial (r F_\theta)}{\partial r} - \frac{\partial F_r}{\partial \theta} \right) \hat{\mathbf{e}}_z \\ &= \left( 0 - 0 \right) \hat{\mathbf{e}}_r + \left( 0 - \frac{d F_z}{dr} \right) \hat{\mathbf{e}}_\theta + \frac{1}{r} \left( 0 - 0 \right) \hat{\mathbf{e}}_z \\ &= -\frac{d F_z}{dr} \hat{\mathbf{e}}_\theta \end{aligned}" />
                        <p>
                            結果、回転ベクトルは <InlineMath math="\theta" /> 方向を向く。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
