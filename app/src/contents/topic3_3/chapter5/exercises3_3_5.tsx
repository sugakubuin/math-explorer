import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_3_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        可測空間 <InlineMath math="(X, \mathcal{A})" /> と <InlineMath math="(Y, \mathcal{B})" /> の<b>可測矩形 (measurable rectangle)</b> の定義を述べよ。また、それらから生成される<b>直積 <InlineMath math="\sigma" />-加法族</b> <InlineMath math="\mathcal{A} \otimes \mathcal{B}" /> の定義を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.1-1 および 5.1-2 に基づき、以下のように定義される。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>
                                <b>可測矩形</b>: <InlineMath math="A \in \mathcal{A}" /> および <InlineMath math="B \in \mathcal{B}" /> に対して、直積集合の形をしている部分集合 <InlineMath math="A \times B \subset X \times Y" /> を指す。
                            </li>
                            <li>
                                <b>直積 <InlineMath math="\sigma" />-加法族</b>: すべての可測矩形の族 <InlineMath math="\{ A \times B \mid A \in \mathcal{A}, B \in \mathcal{B} \}" /> によって生成される <InlineMath math="X \times Y" /> 上の最小の <InlineMath math="\sigma" />-加法族である。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        二つの <InlineMath math="\sigma" />-有限な測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> と <InlineMath math="(Y, \mathcal{B}, \nu)" /> に対して定義される<b>直積測度</b> <InlineMath math="\mu \otimes \nu" /> が、任意の可測矩形 <InlineMath math="A \times B" /> に対して満たすべき条件を記せ。また、この測度の存在と一意性が保証されるための重要な条件（測度の性質）は何か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.2-1（直積測度の存在と一意性）に基づき、以下の条件を満たす。
                        </p>
                        <BlockMath math="(\mu \otimes \nu)(A \times B) = \mu(A)\nu(B)" />
                        <p>
                            この測度の存在と一意性が保証されるためには、各成分の測度空間が <b><InlineMath math="\sigma" />-有限</b> であることが不可欠である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        非負値可測関数に対する積分の順序交換を保証する<b>トネリの定理</b> (Theorem 5.3-1) の等式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            非負値可測関数 <InlineMath math="f: X \times Y \to [0, \infty]" /> に対して、直積空間上の積分と逐次積分は一致する：
                        </p>
                        <BlockMath math="\int_{X \times Y} f \, d(\mu \otimes \nu) = \int_X \left( \int_Y f(x, y) \, d\nu(y) \right) d\mu(x) = \int_Y \left( \int_X f(x, y) \, d\mu(x) \right) d\nu(y)" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        2次元平面上のルベーグ測度 <InlineMath math="\lambda_2" /> を用いて、矩形領域 <InlineMath math="R = [1, 3] \times [2, 5]" /> の測度を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 5.2-1（2次元ルベーグ測度）および Theorem 5.2-1 より、直積測度は各成分の測度の積で与えられる。
                        </p>
                        <BlockMath math="\begin{aligned} \lambda_2(R) &= \lambda([1, 3]) \cdot \lambda([2, 5]) \\ &= (3 - 1) \cdot (5 - 2) \\ &= 2 \cdot 3 = 6 \end{aligned}" />
                        <p>
                            したがって、測度は <b>6</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        トネリの定理を用いて、集合 <InlineMath math="E = \{ (x, y) \in \mathbb{R}^2 \mid 0 \le x \le 2, \ 0 \le y \le x^2 \}" /> のルベーグ測度 <InlineMath math="\lambda_2(E)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 5.3-1（面積計算）の考え方を適用する。非負関数の積分として、トネリの定理により逐次積分に分解できる。
                        </p>
                        <BlockMath math="\begin{aligned} \lambda_2(E) &= \int_{\mathbb{R}^2} \mathbf{1}_E(x, y) \, d\lambda_2 \\ &= \int_0^2 \left( \int_0^{x^2} 1 \, dy \right) dx \\ &= \int_0^2 x^2 \, dx \\ &= \left[ \frac{1}{3} x^3 \right]_0^2 = \frac{8}{3} \end{aligned}" />
                        <p>
                            したがって、測度は <b>8/3</b> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        フビニの定理を適用する前の「可積分性のチェック」の手順を、関数 <InlineMath math="f" /> とトネリの定理を用いて説明せよ（§5.4 Remark 参照）。
                    </p>
                    <ExerciseSolution>
                        <div className="space-y-4">
                            <p>
                                Remark「計算の定石」に基づき、以下の 2 ステップを踏む。
                            </p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>
                                    絶対値をとった非負関数 <b><InlineMath math="|f|" /> に対してトネリの定理を適用</b>し、逐次積分の値を計算する。
                                </li>
                                <li>
                                    その計算結果が<b>有限（<InlineMath math="< \infty" />）</b>であることを確認する。これにより <InlineMath math="f" /> が直積空間上で可積分であることが保証され、フビニの定理を適用して元の関数の順序交換が可能になる。
                                </li>
                            </ol>
                        </div>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        直交座標 <InlineMath math="(x, y)" /> から極座標 <InlineMath math="(r, \theta)" /> への変換（<InlineMath math="x = r \cos \theta, \ y = r \sin \theta" />）の<b>ヤコビ行列式（ヤコビアン）の絶対値</b> <InlineMath math="|J_\Phi(r, \theta)|" /> が <InlineMath math="r" /> となることを計算で示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.5-1 に基づき、ヤコビ行列 <InlineMath math="\Phi'(r, \theta)" /> の行列式を計算する。
                        </p>
                        <BlockMath math="\Phi'(r, \theta) = \begin{pmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{pmatrix} = \begin{pmatrix} \cos \theta & -r \sin \theta \\ \sin \theta & r \cos \theta \end{pmatrix}" />
                        <p>
                            この行列式 <InlineMath math="J_\Phi(r, \theta)" /> は：
                        </p>
                        <BlockMath math="J_\Phi(r, \theta) = (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta) = r(\cos^2 \theta + \sin^2 \theta) = r" />
                        <p>
                             <InlineMath math="r \ge 0" /> なので <InlineMath math="|J_\Phi| = r" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        射影写像 <InlineMath math="\pi_X: X \times Y \to X" /> が <InlineMath math="\mathcal{A} \otimes \mathcal{B}" />-可測であることを証明せよ（Proposition 5.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 5.1-1 の Proof に基づき証明する。
                        </p>
                        <p>
                            任意の <InlineMath math="A \in \mathcal{A}" /> に対し、その逆像は
                            <BlockMath math="\pi_X^{-1}(A) = \{ (x, y) \in X \times Y \mid \pi_X(x, y) \in A \} = A \times Y" />
                            となる。
                            <InlineMath math="Y \in \mathcal{B}" /> であるため、 <InlineMath math="A \times Y" /> は可測矩形である。
                            直積 <InlineMath math="\sigma" />-加法族 <InlineMath math="\mathcal{A} \otimes \mathcal{B}" /> はすべての可測矩形を含むため、 <InlineMath math="A \times Y \in \mathcal{A} \otimes \mathcal{B}" /> である。
                            したがって、 <InlineMath math="\pi_X" /> は可測である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        Example 5.4-1 で挙げられた関数 <InlineMath math="f(x, y) = \frac{x^2 - y^2}{(x^2 + y^2)^2}" /> について、積分の順序を入れ替えると値が異なる原因は何か。フビニの定理の条件に照らして説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            フビニの定理 (Theorem 5.4-1) の適用条件である<b>「関数の可積分性」</b>が満たされていないためである。
                        </p>
                        <p>
                            実際、絶対値をとった関数の積分を計算すると：
                            <BlockMath math="\int_0^1 \int_0^1 |f(x, y)| \, dx dy = \infty" />
                            となる。可積分でない場合、正の部分の無限大と負の部分の無限大が打ち消し合う形になり、積分の収束先が積分の順序（どの経路で極限をとるか）に依存してしまう。
                            フビニの定理が要求する絶対可積分性は、このような「不定領域」を排除し、計算結果の一意性を保証するためのものである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        変数変換公式を用いて、<b>ガウス積分</b> <InlineMath math="\int_{-\infty}^\infty e^{-x^2} \, dx = \sqrt{\pi}" /> を導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 5.5-1 の手順に従う。
                            求める積分値を <InlineMath math="I" /> とすると、 <InlineMath math="I^2 = \left( \int e^{-x^2} \, dx \right) \left( \int e^{-y^2} \, dy \right)" /> である。トネリの定理より：
                            <BlockMath math="I^2 = \int_{\mathbb{R}^2} e^{-(x^2 + y^2)} \, d\lambda_2" />
                        </p>
                        <p>
                            これを極座標変換 <InlineMath math="x = r \cos \theta, \ y = r \sin \theta" /> を用いて計算する。ヤコビアンは <InlineMath math="r" /> であるから、
                            <BlockMath math="\begin{aligned} I^2 &= \int_0^{2\pi} \int_0^\infty e^{-r^2} r \, dr d\theta \\ &= \int_0^{2\pi} \left[ -\frac{1}{2} e^{-r^2} \right]_0^\infty d\theta \\ &= \int_0^{2\pi} \frac{1}{2} \, d\theta = \pi \end{aligned}" />
                        </p>
                        <p>
                            <InlineMath math="I > 0" /> より、 <InlineMath math="I = \sqrt{\pi}" /> を得る。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
