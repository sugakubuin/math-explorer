import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_2_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        次の値を <InlineMath math="a + bi" />（<InlineMath math="a, b" /> は実数）の形で表せ。
                    </p>
                    <BlockMath math="e^{1 + \frac{\pi}{2}i}" />
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-1 より、複素指数関数は <InlineMath math="e^{x+iy} = e^x(\cos y + i \sin y)" /> と定義される。
                            これに <InlineMath math="x = 1, y = \pi/2" /> を代入すると：
                        </p>
                        <BlockMath math="\begin{aligned} e^{1 + \frac{\pi}{2}i} &= e^1 \left( \cos \frac{\pi}{2} + i \sin \frac{\pi}{2} \right) \\ &= e(0 + i \cdot 1) \\ &= ei \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        次の値を <InlineMath math="i" /> および実数関数を用いて表せ。
                    </p>
                    <BlockMath math="\sin(i)" />
                    <ExerciseSolution>
                        <p>
                            Definition 3.2-1 より、<InlineMath math="\sin z = \frac{e^{iz} - e^{-iz}}{2i}" /> である。
                            <InlineMath math="z = i" /> を代入すると：
                        </p>
                        <BlockMath math="\begin{aligned} \sin(i) &= \frac{e^{i^2} - e^{-i^2}}{2i} \\ &= \frac{e^{-1} - e^1}{2i} \\ &= \frac{1}{i} \cdot \frac{e^{-1} - e}{2} \\ &= -i \cdot \frac{1}{2} (e^{-1} - e) \\ &= i \frac{e - e^{-1}}{2} = i \sinh 1 \end{aligned}" />
                        <p className="mt-2 text-sm">
                            （別解）Theorem 3.2-1 の <InlineMath math="\sin(iz) = i \sinh z" /> に <InlineMath math="z=1" /> を代入しても同様に得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        次の対数の主値を求めよ。
                    </p>
                    <BlockMath math="\text{Log}(-i)" />
                    <ExerciseSolution>
                        <p>
                            Definition 3.3-2 より、主値は <InlineMath math="\text{Log } z = \ln |z| + i \text{Arg } z \quad (-\pi < \text{Arg } z \le \pi)" /> である。
                            <InlineMath math="z = -i" /> のとき、
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li><InlineMath math="|-i| = 1" /></li>
                            <li><InlineMath math="\text{Arg}(-i) = -\pi/2" /></li>
                        </ul>
                        <p className="mt-2">
                            したがって、
                        </p>
                        <BlockMath math="\text{Log}(-i) = \ln 1 + i \left( -\frac{\pi}{2} \right) = -\frac{\pi}{2} i" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        次の方程式を解け。
                    </p>
                    <BlockMath math="e^z = -1" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="z = x + iy" /> とおくと、<InlineMath math="e^z = e^x e^{iy}" /> である。
                            $-1$ の極形式は <InlineMath math="1 \cdot e^{i(\pi + 2\pi k)} \quad (k \in \mathbb{Z})" /> であるから、
                        </p>
                        <BlockMath math="e^x = 1, \quad y = \pi + 2\pi k" />
                        <p>
                            <InlineMath math="e^x = 1" /> より <InlineMath math="x = 0" /> である。したがって解は、
                        </p>
                        <BlockMath math="z = i(\pi + 2\pi k) = (2k + 1)\pi i \quad (k \in \mathbb{Z})" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        次の方程式を解け。
                    </p>
                    <BlockMath math="\cos z = 2" />
                    <ExerciseSolution>
                        <p>
                            Definition 3.2-1 より <InlineMath math="\cos z = \frac{e^{iz} + e^{-iz}}{2} = 2" />。
                            <InlineMath math="w = e^{iz}" /> とおくと、<InlineMath math="w + 1/w = 4" />、すなわち <InlineMath math="w^2 - 4w + 1 = 0" /> を得る。
                            これを <InlineMath math="w" /> について解くと：
                        </p>
                        <BlockMath math="w = \frac{4 \pm \sqrt{16 - 4}}{2} = 2 \pm \sqrt{3}" />
                        <p>
                            <InlineMath math="e^{iz} = 2 \pm \sqrt{3}" /> より、
                        </p>
                        <BlockMath math="iz = \log(2 \pm \sqrt{3}) = \ln(2 \pm \sqrt{3}) + i(2\pi k) \quad (k \in \mathbb{Z})" />
                        <p>
                            両辺を <InlineMath math="i" /> で割ると：
                        </p>
                        <BlockMath math="z = 2\pi k - i \ln(2 \pm \sqrt{3}) \quad (k \in \mathbb{Z})" />
                        <p className="mt-2 text-sm italic">
                            ※ 実数範囲では <InlineMath math="|\cos x| \le 1" /> であるが、複素数範囲では 1 を超える値を取り得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        次の値をすべて求めよ。
                    </p>
                    <BlockMath math="i^i" />
                    <ExerciseSolution>
                        <p>
                            Definition 3.4-1 より、<InlineMath math="z^a = \exp(a \log z)" /> である。
                            <InlineMath math="z = i, a = i" /> を代入すると <InlineMath math="i^i = \exp(i \log i)" /> となる。
                            Definition 3.3-1 より、
                        </p>
                        <BlockMath math="\log i = \ln|i| + i\left(\frac{\pi}{2} + 2\pi k\right) = i\left(\frac{\pi}{2} + 2\pi k\right) \quad (k \in \mathbb{Z})" />
                        <p>
                            であるから、
                        </p>
                        <BlockMath math="\begin{aligned} i^i &= \exp\left(i \cdot i \left(\frac{\pi}{2} + 2\pi k\right)\right) \\ &= \exp\left(-\left(\frac{\pi}{2} + 2\pi k\right)\right) = e^{-\frac{\pi}{2} - 2\pi k} \quad (k \in \mathbb{Z}) \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        <InlineMath math="\cos z" /> を実部と虚部に分解せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="z = x + iy" /> とし、Proposition 3.2-1 の加法定理を用いる：
                        </p>
                        <BlockMath math="\cos(x + iy) = \cos x \cos(iy) - \sin x \sin(iy)" />
                        <p>
                            ここで Theorem 3.2-1 より <InlineMath math="\cos(iy) = \cosh y, \sin(iy) = i \sinh y" /> であるから、
                        </p>
                        <BlockMath math="\cos(x + iy) = \cos x \cosh y - i \sin x \sinh y" />
                        <p>
                            したがって、実部は <InlineMath math="\cos x \cosh y" />、虚部は <InlineMath math="-\sin x \sinh y" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        任意の複素数 <InlineMath math="z = x + iy" /> に対して、次の等式を示せ。
                    </p>
                    <BlockMath math="|\sin z|^2 = \sin^2 x + \sinh^2 y" />
                    <ExerciseSolution>
                        <p>
                            Example 3.2-1 より、<InlineMath math="\sin(x+iy) = \sin x \cosh y + i \cos x \sinh y" /> である。
                            その絶対値の 2 乗は：
                        </p>
                        <BlockMath math="\begin{aligned} |\sin z|^2 &= (\sin x \cosh y)^2 + (\cos x \sinh y)^2 \\ &= \sin^2 x \cosh^2 y + \cos^2 x \sinh^2 y \end{aligned}" />
                        <p>
                            双曲線関数の基本公式 <InlineMath math="\cosh^2 y - \sinh^2 y = 1" /> を用いて <InlineMath math="\cosh^2 y" /> を消去すると：
                        </p>
                        <BlockMath math="\begin{aligned} |\sin z|^2 &= \sin^2 x (1 + \sinh^2 y) + \cos^2 x \sinh^2 y \\ &= \sin^2 x + (\sin^2 x + \cos^2 x) \sinh^2 y \\ &= \sin^2 x + \sinh^2 y \end{aligned}" />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        多価関数としての対数関数について、次の集合としての等号を示せ。
                    </p>
                    <BlockMath math="\log(z_1 z_2) = \log z_1 + \log z_2" />
                    <ExerciseSolution>
                        <p>
                            まず、任意の <InlineMath math="w_1 \in \log z_1" /> と <InlineMath math="w_2 \in \log z_2" /> をとる。定義より <InlineMath math="e^{w_1} = z_1, e^{w_2} = z_2" /> である。
                            Proposition 3.1-1 の指数法則より：
                        </p>
                        <BlockMath math="e^{w_1 + w_2} = e^{w_1} e^{w_2} = z_1 z_2" />
                        <p>
                            これは <InlineMath math="w_1 + w_2 \in \log(z_1 z_2)" /> を意味する。よって <InlineMath math="\log z_1 + \log z_2 \subseteq \log(z_1 z_2)" /> である。
                        </p>
                        <p className="mt-4">
                            逆に、<InlineMath math="w \in \log(z_1 z_2)" /> とする。すなわち <InlineMath math="e^w = z_1 z_2" /> である。
                            <InlineMath math="w_1" /> を <InlineMath math="\log z_1" /> の任意の値の一つとすると、<InlineMath math="e^{w - w_1} = e^w / e^{w_1} = (z_1 z_2) / z_1 = z_2" /> となる。
                            これは <InlineMath math="w - w_1 \in \log z_2" /> を意味する。
                            したがって <InlineMath math="w = w_1 + (w - w_1)" /> は <InlineMath math="\log z_1 + \log z_2" /> の要素である。
                            よって <InlineMath math="\log(z_1 z_2) \subseteq \log z_1 + \log z_2" /> である。
                        </p>
                        <p className="mt-2">
                            以上より、集合として <InlineMath math="\log(z_1 z_2) = \log z_1 + \log z_2" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        領域 <InlineMath math="D = \{ z = x + iy \mid x > 0, 0 < y < \pi \}" /> が複素指数関数 <InlineMath math="w = e^z" /> によってどのような集合に写されるか求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="w = \rho e^{i\phi}" /> を <InlineMath math="z" /> の像とする。
                            <InlineMath math="w = e^x e^{iy}" /> より、<InlineMath math="\rho = e^x, \phi = y" /> である。
                        </p>
                        <ul className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <InlineMath math="0 < y < \pi" /> より、像の偏角 <InlineMath math="\phi" /> は <InlineMath math="0 < \phi < \pi" /> の範囲にある。
                                これは、像が複素平面の<strong>上半平面</strong>にあることを示している。
                            </li>
                            <li>
                                <InlineMath math="x > 0" /> より、像の絶対値 <InlineMath math="\rho = e^x" /> は <InlineMath math="e^0 = 1" /> より大きい値をとる。
                                すなわち <InlineMath math="\rho > 1" /> である。
                            </li>
                        </ul>
                        <p className="mt-4">
                            したがって、求める像は「<strong>上半平面のうち、単位円の外側にある領域</strong>」である。
                            集合の記号で表せば：
                        </p>
                        <BlockMath math="\{ w \in \mathbb{C} \mid |w| > 1, \text{Im}(w) > 0 \}" />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
