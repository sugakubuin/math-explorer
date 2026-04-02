import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_2_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        次の関数の <InlineMath math="z=1" /> における留数を求めよ。
                    </p>
                    <BlockMath math="f(z) = \frac{z+1}{(z-1)^2}" />
                    <ExerciseSolution>
                        <p>
                            点 <InlineMath math="z=1" /> は 2 位の極である。
                            Proposition 7.1-2 (m位の極の留数公式) を <InlineMath math="m=2" /> で適用する：
                        </p>
                        <BlockMath math="\begin{aligned} \text{Res}(f; 1) &= \frac{1}{(2-1)!} \lim_{z \to 1} \frac{d}{dz} \left[ (z-1)^2 \frac{z+1}{(z-1)^2} \right] \\ &= \lim_{z \to 1} \frac{d}{dz} (z+1) \\ &= \lim_{z \to 1} (1) = 1 \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        単位円周 <InlineMath math="C: |z|=2" /> を正方向に 1 周するときの次の積分を、留数定理を用いて求めよ。
                    </p>
                    <BlockMath math="\oint_C \frac{e^z}{z(z-1)} \, dz" />
                    <ExerciseSolution>
                        <p>
                            被積分関数 <InlineMath math="f(z) = \frac{e^z}{z(z-1)}" /> の特異点は <InlineMath math="z=0" /> と <InlineMath math="z=1" /> であり、いずれも円 <InlineMath math="C" /> の内部にある。
                            それぞれの留数を求める（Proposition 7.1-1）：
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><InlineMath math="\text{Res}(f; 0) = \lim_{z \to 0} z \cdot \frac{e^z}{z(z-1)} = \frac{e^0}{-1} = -1" /></li>
                            <li><InlineMath math="\text{Res}(f; 1) = \lim_{z \to 1} (z-1) \cdot \frac{e^z}{z(z-1)} = \frac{e^1}{1} = e" /></li>
                        </ul>
                        <p className="mt-4">
                            Theorem 7.2-1 (留数定理) により、
                        </p>
                        <BlockMath math="\oint_C f(z) \, dz = 2\pi i (\text{Res}(f; 0) + \text{Res}(f; 1)) = 2\pi i (e - 1)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        次の定積分の値を求めよ。
                    </p>
                    <BlockMath math="\int_0^{2\pi} \frac{d\theta}{5 + 4 \cos \theta}" />
                    <ExerciseSolution>
                        <p>
                            Theorem 7.3-1 に基づき <InlineMath math="z = e^{i\theta}" /> と置換すると、<InlineMath math="d\theta = dz/iz" />, <InlineMath math="\cos \theta = (z + z^{-1})/2" />。
                        </p>
                        <BlockMath math="\int_0^{2\pi} \frac{d\theta}{5 + 4 \cos \theta} = \oint_{|z|=1} \frac{1}{5 + 2(z + z^{-1})} \frac{dz}{iz} = \frac{1}{i} \oint_{|z|=1} \frac{dz}{2z^2 + 5z + 2}" />
                        <p>
                            分母を因数分解すると <InlineMath math="2z^2 + 5z + 2 = (2z + 1)(z + 2)" />。
                            単位円 <InlineMath math="|z|=1" /> の内部にある特異点は <InlineMath math="z = -1/2" /> のみである。
                            留数は、
                        </p>
                        <BlockMath math="\text{Res}_{z=-1/2} \frac{1}{(2z+1)(z+2)} = \lim_{z \to -1/2} \frac{1}{2(z+2)} = \frac{1}{2 \cdot (3/2)} = \frac{1}{3} " />
                        <p>
                            よって留数定理より：
                        </p>
                        <BlockMath math="\frac{1}{i} \cdot 2\pi i \cdot \frac{1}{3} = \frac{2\pi}{3}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        次の広義積分の値を求めよ。
                    </p>
                    <BlockMath math="\int_{-\infty}^{\infty} \frac{dx}{x^2 + x + 1}" />
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="f(z) = \frac{1}{z^2 + z + 1}" /> の広義積分を求めるため、実軸上の線分 <InlineMath math="[-R, R]" /> と上半平面の半円 <InlineMath math="C_R: z = Re^{i\theta} \ (0 \le \theta \le \pi)" /> からなる単純閉曲線 <InlineMath math="\Gamma_R" /> を考える。
                        </p>
                        <p className="mt-2">
                            1. <strong>孤立特異点の特定と分類</strong>：
                            <InlineMath math="z^2 + z + 1 = 0" /> の解は <InlineMath math="z = \frac{-1 \pm \sqrt{3}i}{2}" /> である。
                            このうち上半平面 (<InlineMath math="\text{Im}(z) > 0" />) にあるのは <InlineMath math="z_0 = -\frac{1}{2} + \frac{\sqrt{3}}{2}i" /> のみであり、これは 1 位の極である。
                        </p>
                        <p className="mt-2">
                            2. <strong>留数の計算</strong>：
                            Proposition 7.1-3 (分母の微分) を用いると、
                            <BlockMath math="\text{Res}(f; z_0) = \left. \frac{1}{(z^2+z+1)'} \right|_{z=z_0} = \frac{1}{2z_0 + 1} = \frac{1}{i\sqrt{3}}" />
                        </p>
                        <p className="mt-2">
                            3. <strong>留数定理の適用と極限操作</strong>：
                            十分大きな <InlineMath math="R" /> に対して <InlineMath math="z_0" /> は <InlineMath math="\Gamma_R" /> の内部にある。留数定理より、
                            <BlockMath math="\oint_{\Gamma_R} f(z) \, dz = \int_{-R}^R f(x) \, dx + \int_{C_R} f(z) \, dz = 2\pi i \cdot \frac{1}{i\sqrt{3}} = \frac{2\pi}{\sqrt{3}}" />
                            ここで、<InlineMath math="C_R" /> 上では <InlineMath math="|z^2+z+1| \ge |z|^2 - |z| - 1 = R^2 - R - 1" /> であるから、ML不等式により
                            <BlockMath math="\left| \int_{C_R} f(z) \, dz \right| \le \frac{1}{R^2 - R - 1} \cdot \pi R \to 0 \quad (R \to \infty)" />
                            したがって、<InlineMath math="R \to \infty" /> とすると半円部分の積分は消え、
                            <BlockMath math="\int_{-\infty}^{\infty} \frac{dx}{x^2 + x + 1} = \frac{2\pi}{\sqrt{3}}" />
                            が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        ジョルダンの補助定理 (Theorem 7.3-3) を用いて、次の積分の値を求めよ。
                    </p>
                    <BlockMath math="\int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1} \, dx" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="I = \text{Re} \int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1} dx" /> と考える。
                            <InlineMath math="f(z) = \frac{e^{iz}}{z^2 + 1}" /> の特異点は <InlineMath math="z = \pm i" />。
                            上半平面にあるのは <InlineMath math="z=i" /> のみであり、これは 1 位の極。
                        </p>
                        <BlockMath math="\text{Res}(f; i) = \lim_{z \to i} (z-i) \frac{e^{iz}}{(z-i)(z+i)} = \frac{e^{i^2}}{2i} = \frac{e^{-1}}{2i}" />
                        <p>
                            留数定理より、
                        </p>
                        <BlockMath math="\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1} dx = 2\pi i \cdot \frac{e^{-1}}{2i} = \pi e^{-1}" />
                        <p>
                            実部をとれば、
                        </p>
                        <BlockMath math="\int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1} dx = \frac{\pi}{e}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        多項式 <InlineMath math="p(z) = z^4 + 3z + 1" /> は、円板 <InlineMath math="|z| < 1" /> 内に何個の零点を持つか？ルーシェの定理を用いて判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            円周 <InlineMath math="|z|=1" /> 上で考え、支配的な項を探す。
                            <InlineMath math="f(z) = 3z" />、<InlineMath math="g(z) = z^4 + 1" /> とおくと、
                            <BlockMath math="|f(z)| = 3, \quad |g(z)| = |z^4 + 1| \le |z|^4 + 1 = 2" />
                            であり、<InlineMath math="|g(z)| < |f(z)|" /> が成り立つ。
                        </p>
                        <p>
                            Theorem 7.4-2 (ルーシェの定理) により、<InlineMath math="p(z) = f(z) + g(z)" /> の零点数は、円板内で <InlineMath math="f(z) = 3z" /> の零点数と等しい。
                            <InlineMath math="3z = 0" /> の解は <InlineMath math="z=0" /> の 1 つ（重複度 1）であるため、
                            求める零点の個数も <strong>1 個</strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        偏角の原理 (Theorem 7.4-1) において、<InlineMath math="f(z) = z^n" /> （<InlineMath math="n \ge 1" />）の場合、原点を囲む円 <InlineMath math="\gamma: z = Re^{i\theta}" /> に沿った積分が <InlineMath math="n" /> になることを計算で確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(z) = z^n" /> より <InlineMath math="f'(z) = nz^{n-1}" />。したがって対数微分は、
                            <BlockMath math="\frac{f'(z)}{f(z)} = \frac{nz^{n-1}}{z^n} = \frac{n}{z}" />
                        </p>
                        <p>
                            これを <InlineMath math="\gamma: z = Re^{i\theta} \ (dz = iRe^{i\theta} d\theta)" /> に沿って積分すると、
                        </p>
                        <BlockMath math="\frac{1}{2\pi i} \oint_\gamma \frac{n}{z} dz = \frac{1}{2\pi i} \int_0^{2\pi} \frac{n}{Re^{i\theta}} iRe^{i\theta} d\theta = \frac{1}{2\pi i} \int_0^{2\pi} ni \, d\theta = \frac{ni}{2\pi i} \cdot 2\pi = n" />
                        <p>
                            これは、原点にある重複度 <InlineMath math="n" /> の零点の個数と一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        次の広義積分の値を求めよ（分岐点を持つ関数の積分）。
                    </p>
                    <BlockMath math="\int_0^{\infty} \frac{\sqrt{x}}{x^2 + 1} \, dx" />
                    <ExerciseSolution>
                        <p>
                            多価関数 <InlineMath math="f(z) = \frac{\sqrt{z}}{z^2 + 1}" /> を考え、実軸（正・負）と上半平面の半円を含むパスで積分する。
                            主枝を <InlineMath math="\text{arg } z \in [0, \pi]" /> ととり、上半平面の孤立特異点 <InlineMath math="z=i" /> での留数を求める：
                        </p>
                        <BlockMath math="\text{Res}(f; i) = \lim_{z \to i} (z-i) \frac{\sqrt{z}}{(z-i)(z+i)} = \frac{\sqrt{e^{i\pi/2}}}{2i} = \frac{e^{i\pi/4}}{2i} = \frac{1+i}{2\sqrt{2}i}" />
                        <p>
                            上半平面のパス全体の積分極限をとると、
                        </p>
                        <BlockMath math=" \int_0^\infty \frac{\sqrt{x}}{x^2+1} dx + \int_{\infty}^0 \frac{\sqrt{-x}}{x^2+1} (-dx) = 2\pi i \cdot \text{Res}(f; i)" />
                        <p>
                            <InlineMath math="\sqrt{-x} = \sqrt{x \cdot e^{i\pi}} = i\sqrt{x}" /> であるから、左辺は <InlineMath math="(1+i) \int_0^\infty \frac{\sqrt{x}}{x^2+1} dx" />。
                        </p>
                        <BlockMath math="(1+i) I = 2\pi i \frac{1+i}{2\sqrt{2}i} = \frac{\pi(1+i)}{\sqrt{2}}" />
                        <p>
                            したがって、<InlineMath math="I = \frac{\pi}{\sqrt{2}}" />。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        次の級数の和を求めよ（留数定理の応用）。
                    </p>
                    <BlockMath math="\sum_{n=1}^{\infty} \frac{1}{n^2}" />
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="f(z) = \frac{\pi \cot(\pi z)}{z^2}" /> を考える。
                            整数点 <InlineMath math="z=n" /> において <InlineMath math="\pi \cot(\pi z)" /> は 1 位の極を持ち、その留数は <InlineMath math="1/n^2" /> となる。
                            巨大な正方形パス上での積分は 0 に収束するため、全平面の留数の総和が 0 になる。
                        </p>
                        <p>
                            <InlineMath math="z=0" /> において、<InlineMath math="\pi z \cot(\pi z) = 1 - (\pi z)^2/3 + \dots" /> より
                            <BlockMath math="f(z) = \frac{1}{z^2} \left[ \frac{1}{z} - \frac{\pi^2 z}{3} + \dots \right] = \frac{1}{z^3} - \frac{\pi^2}{3z} + \dots" />
                            よって <InlineMath math="\text{Res}(f; 0) = -\pi^2/3" />。
                        </p>
                        <p>
                            留数の総和：
                            <BlockMath math="\text{Res}(f; 0) + \sum_{n \neq 0} \text{Res}(f; n) = -\frac{\pi^2}{3} + 2 \sum_{n=1}^\infty \frac{1}{n^2} = 0" />
                        </p>
                        <BlockMath math="2 \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{3} \implies \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        ルーシェの定理を用いて、多項式の零点についての「代数学の基本定理」を証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="n" /> 次の多項式 <InlineMath math="P(z) = a_n z^n + a_{n-1}z^{n-1} + \dots + a_0 \ (a_n \neq 0)" /> を考える。
                            <InlineMath math="f(z) = a_n z^n" />、<InlineMath math="g(z) = a_{n-1}z^{n-1} + \dots + a_0" /> とおく。
                        </p>
                        <p>
                            十分大きな半径 <InlineMath math="R" /> に対しては、円周 <InlineMath math="|z|=R" /> 上で
                            <BlockMath math="|f(z)| = |a_n| R^n > |a_{n-1}| R^{n-1} + \dots + |a_0| \ge |g(z)|" />
                            が成り立つ。
                        </p>
                        <p>
                            ルーシェの定理より、円板 <InlineMath math="|z| < R" /> 内で <InlineMath math="P(z) = f(z) + g(z)" /> と <InlineMath math="f(z)" /> の零点数は等しい。
                            <InlineMath math="f(z) = a_n z^n" /> は原点に重複度 <InlineMath math="n" /> の零点を持つため、
                            <InlineMath math="P(z)" /> も円板内に（重複度を込めて） <InlineMath math="n" /> 個の零点を持つ。
                            特に <InlineMath math="n \ge 1" /> ならば少なくとも 1 つの零点を持つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
