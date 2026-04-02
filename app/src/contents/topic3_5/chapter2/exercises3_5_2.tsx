import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_5_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        対角行列 <b><InlineMath math="A = \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix}" /></b> に対して、行列指数関数 <b><InlineMath math="e^{tA}" /></b> を定義 <b><InlineMath math="\sum_{k=0}^\infty \frac{(tA)^k}{k!}" /></b> に基づいて計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            対角行列のべき乗は、<b><InlineMath math="A^k = \begin{pmatrix} \lambda_1^k & 0 \\ 0 & \lambda_2^k \end{pmatrix}" /></b> となる。
                            これを定義の級数に代入すると、
                            <BlockMath math="\begin{aligned} e^{tA} &= \sum_{k=0}^\infty \frac{1}{k!} \begin{pmatrix} (t\lambda_1)^k & 0 \\ 0 & (t\lambda_2)^k \end{pmatrix} \\ &= \begin{pmatrix} \sum_{k=0}^\infty \frac{(t\lambda_1)^k}{k!} & 0 \\ 0 & \sum_{k=0}^\infty \frac{(t\lambda_2)^k}{k!} \end{pmatrix} \end{aligned}" />
                            スカラーの指数関数の定義より、各成分は <b><InlineMath math="e^{\lambda_1 t}" /></b> および <b><InlineMath math="e^{\lambda_2 t}" /></b> となる。
                            よって、Example 2.1-1 の通り、
                            <BlockMath math="e^{tA} = \begin{pmatrix} e^{\lambda_1 t} & 0 \\ 0 & e^{\lambda_2 t} \end{pmatrix}" />
                            を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        行列 <b><InlineMath math="A" /></b> と <b><InlineMath math="B" /></b> が可換（<b><InlineMath math="AB = BA" /></b>）でないとき、一般に <b><InlineMath math="e^{A+B} \neq e^A e^B" /></b> であることを、次の行列を用いて確かめよ。
                        <BlockMath math="A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず <b><InlineMath math="A^2 = B^2 = 0" /></b> であるから、
                            <BlockMath math="e^A = I + A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}, \quad e^B = I + B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}" />
                            積を計算すると：
                            <BlockMath math="e^A e^B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}" />
                            一方、<b><InlineMath math="A+B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}" /></b> であり、<b><InlineMath math="(A+B)^2 = I" /></b> である。
                            <BlockMath math="\begin{aligned} e^{A+B} &= I + (A+B) + \frac{1}{2!}I + \frac{1}{3!}(A+B) + \dots \\ &= (\cosh 1) I + (\sinh 1) (A+B) = \begin{pmatrix} \cosh 1 & \sinh 1 \\ \sinh 1 & \cosh 1 \end{pmatrix} \end{aligned}" />
                            値が一致しないことがわかる。これは Proposition 2.1-1 の可換性の条件の重要性を示している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        次のべき零行列 <b><InlineMath math="N" /></b> に対して、<b><InlineMath math="e^{tN}" /></b> を求めよ。
                        <BlockMath math="N = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列 <b><InlineMath math="N" /></b> のべき乗を計算する：
                            <BlockMath math="N^2 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad N^3 = O \, (\text{零行列})" />
                            定義式 <b><InlineMath math="e^{tN} = I + tN + \frac{t^2}{2}N^2" /></b> に代入すると：
                            <BlockMath math="\begin{aligned} e^{tN} &= \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} + \begin{pmatrix} 0 & t & 0 \\ 0 & 0 & t \\ 0 & 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 & t^2/2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \\ &= \begin{pmatrix} 1 & t & t^2/2 \\ 0 & 1 & t \\ 0 & 0 & 1 \end{pmatrix} \end{aligned}" />
                            となる。これは 3 次のジョルダン細胞の指数関数のべき零部分に相当する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        連立微分方程式 <b><InlineMath math="\dot{\mathbf{x}} = A \mathbf{x}" /></b> において、係数行列が <b><InlineMath math="A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}" /></b> であるとき、行列指数関数 <b><InlineMath math="e^{tA}" /></b> が回転行列になることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列 <b><InlineMath math="A" /></b> の特徴を調べる：
                            <BlockMath math="A^2 = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix} = -I, \quad A^3 = -A, \quad A^4 = I, \dots" />
                            これに基づきべき級数 <b><InlineMath math="e^{tA} = \sum_{k=0}^\infty \frac{t^k A^k}{k!}" /></b> を整理すると：
                            <BlockMath math="\begin{aligned} e^{tA} &= I + tA - \frac{t^2}{2!}I - \frac{t^3}{3!}A + \frac{t^4}{4!}I + \dots \\ &= \left( 1 - \frac{t^2}{2!} + \frac{t^4}{4!} - \dots \right) I + \left( t - \frac{t^3}{3!} + \dots \right) A \\ &= (\cos t) I + (\sin t) A \end{aligned}" />
                            成分で書き下すと、
                            <BlockMath math="\begin{aligned} e^{tA} &= \begin{pmatrix} \cos t & 0 \\ 0 & \cos t \end{pmatrix} + \begin{pmatrix} 0 & \sin t \\ -\sin t & 0 \end{pmatrix} \\ &= \begin{pmatrix} \cos t & \sin t \\ -\sin t & \cos t \end{pmatrix} \end{aligned}" />
                            となり、回転角 <b><InlineMath math="-t" /></b>（あるいは時計回り <b><InlineMath math="t" /></b>）の回転行列が得られることが示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        基本行列 <b><InlineMath math="X(t)" /></b> の行列式を <b><InlineMath math="W(t)" /></b> とするとき、「ラブの公式（アベルの公式）」により <b><InlineMath math="W(t) = W(0) e^{(\mathrm{tr} A)t}" /></b> が成り立つことを Example 2.3-1 の行列 <b><InlineMath math="A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}" /></b> について確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 2.3-1 より <b><InlineMath math="X(t) = e^{tA} = \begin{pmatrix} \cos t & \sin t \\ -\sin t & \cos t \end{pmatrix}" /></b> である。
                            行列式を計算すると：
                            <BlockMath math="W(t) = \det X(t) = \cos^2 t + \sin^2 t = 1" />
                            一方、<b><InlineMath math="A" /></b> のトレース（対角和）は <b><InlineMath math="\mathrm{tr} A = 0 + 0 = 0" /></b> である。
                            ラブの公式の右辺を計算すると：
                            <BlockMath math="W(0) e^{0 \cdot t} = \det X(0) \cdot 1 = \det I \cdot 1 = 1" />
                            よって <b><InlineMath math="W(t) = 1" /></b> となり、定数 1 として一致することが確認できた。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        ジョルダン細胞の性質を用いて、次の初期値問題を解け。
                        <BlockMath math="\dot{\mathbf{x}} = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix} \mathbf{x}, \quad \mathbf{x}(0) = \begin{pmatrix} 1 \\ 2 \end{pmatrix}" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            係数行列はすでに <b><InlineMath math="\lambda = 3" /></b> のジョルダン細胞である。
                            Example 2.2-1 より、行列指数関数は
                            <BlockMath math="e^{tA} = \begin{pmatrix} e^{3t} & t e^{3t} \\ 0 & e^{3t} \end{pmatrix}" />
                            である。Theorem 2.1-2 および Theorem 2.3-2 に従い、解は次のように求まる：
                            <BlockMath math="\begin{aligned} \mathbf{x}(t) &= e^{tA} \begin{pmatrix} 1 \\ 2 \end{pmatrix} \\ &= \begin{pmatrix} e^{3t} + 2t e^{3t} \\ 2e^{3t} \end{pmatrix} = e^{3t} \begin{pmatrix} 1 + 2t \\ 2 \end{pmatrix} \end{aligned}" />
                            を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        非同次系 <b><InlineMath math="\dot{\mathbf{x}} = A \mathbf{x} + \mathbf{f}(t)" /></b> の解の公式（Theorem 2.4-1）
                        <BlockMath math="\mathbf{x}(t) = e^{tA} \mathbf{x}_0 + \int_0^t e^{(t-s)A} \mathbf{f}(s) \, ds" />
                        を導き出すために必要な「定数変化法」の考え方を、<b><InlineMath math="\mathbf{x}(t) = e^{tA} \mathbf{c}(t)" /></b> とおいた場合の <b><InlineMath math="\dot{\mathbf{c}}(t)" /></b> を導出することで説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            同次系の一般解の定数 <b><InlineMath math="\mathbf{c}" /></b> を時間の関数 <b><InlineMath math="\mathbf{c}(t)" /></b> と置き換えた式を、元の方程式に代入する。
                            積の微分法則と行列指数関数の微分公式（Theorem 2.1-2）を用いると、
                            <BlockMath math="\begin{aligned} \frac{d}{dx} (e^{tA} \mathbf{c}(t)) &= (A e^{tA}) \mathbf{c}(t) + e^{tA} \dot{\mathbf{c}}(t) \end{aligned}" />
                            これが <b><InlineMath math="A (e^{tA} \mathbf{c}(t)) + \mathbf{f}(t)" /></b> に等しいことから、
                            <BlockMath math="A e^{tA} \mathbf{c}(t) + e^{tA} \dot{\mathbf{c}}(t) = A e^{tA} \mathbf{c}(t) + \mathbf{f}(t)" />
                            共通項を消去すると <b><InlineMath math="e^{tA} \dot{\mathbf{c}}(t) = \mathbf{f}(t)" /></b> を得る。
                            <b><InlineMath math="e^{tA}" /></b> は常に正則（逆行列は <b><InlineMath math="e^{-tA}" /></b>）であるため、
                            <BlockMath math="\dot{\mathbf{c}}(t) = e^{-tA} \mathbf{f}(t)" />
                            が導かれる。これを積分することで公式の積分項が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        行列 <b><InlineMath math="A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}" /></b> の指数関数 <b><InlineMath math="e^{tA}" /></b> を計算し、解の成分に <b><InlineMath math="t^2" /></b> の項が現れる理由を、ジョルダン細胞の一般理論に基づき説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b><InlineMath math="A = 2I + N" /></b> とおくと、<b><InlineMath math="N" /></b> は Example 2.2-1 を拡張した 3 次のべき零行列である（<b><InlineMath math="N^3 = 0" /></b>）。Theorem 2.2-1 より
                            <BlockMath math="e^{tA} = e^{2t} (I + tN + \frac{t^2}{2} N^2)" />
                            確認問題 3 の結果を用いると、
                            <BlockMath math="e^{tA} = e^{2t} \begin{pmatrix} 1 & t & t^2/2 \\ 0 & 1 & t \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} e^{2t} & t e^{2t} & \frac{t^2}{2} e^{2t} \\ 0 & e^{2t} & t e^{2t} \\ 0 & 0 & e^{2t} \end{pmatrix}" />
                            を得る。
                        </p>
                        <p className="mt-4">
                            <b>理由の説明</b>：行列 <b><InlineMath math="A" /></b> はジョルダン細胞そのものであり、固有値 2 に対して 3 次の多項式オーダーの結合が生じている。一般に次数 <b><InlineMath math="k" /></b> のジョルダン細胞に対する指数関数には、べき級数の性質により <b><InlineMath math="t^{k-1}" /></b> までの項が現れるため、本問（<b><InlineMath math="k=3" /></b>）では <b><InlineMath math="t^2" /></b> の項が出現する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        共鳴現象を示す方程式 <b><InlineMath math="\ddot{y} + \omega^2 y = \cos \omega t" /></b> の一般解に <b><InlineMath math="t \sin \omega t" /></b> の項が現れることを、1 階形式の定数変化法（Example 2.4-2）を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b><InlineMath math="x_1 = y, x_2 = \dot{y}" /></b> とおくと、
                            <BlockMath math="\dot{\mathbf{x}} = \begin{pmatrix} 0 & 1 \\ -\omega^2 & 0 \end{pmatrix} \mathbf{x} + \begin{pmatrix} 0 \\ \cos \omega t \end{pmatrix}" />
                            同次解の基本行列は <b><InlineMath math="e^{tA} = \begin{pmatrix} \cos \omega t & \frac{1}{\omega}\sin \omega t \\ -\omega \sin \omega t & \cos \omega t \end{pmatrix}" /></b> である。
                            定数変化法の積分項（<b><InlineMath math="\mathbf{x}_0 = \mathbf{0}" /></b> とする）を計算する：
                            <BlockMath math="\begin{aligned} \mathbf{x}(t) &= \int_0^t \begin{pmatrix} \dots & \frac{1}{\omega}\sin(\omega(t-s)) \\ \dots & \cos(\omega(t-s)) \end{pmatrix} \begin{pmatrix} 0 \\ \cos \omega s \end{pmatrix} ds \\ x_1(t) &= \frac{1}{\omega} \int_0^t \sin(\omega t - \omega s) \cos \omega s \, ds \end{aligned}" />
                            積和公式 <b><InlineMath math="\sin A \cos B = \frac{1}{2}(\sin(A+B) + \sin(A-B))" /></b> を用いて、
                            <BlockMath math="\begin{aligned} x_1(t) &= \frac{1}{2\omega} \int_0^t (\sin \omega t + \sin(\omega t - 2\omega s)) \, ds \\ &= \frac{1}{2\omega} \left[ s \sin \omega t + \frac{1}{2\omega} \cos(\omega t - 2\omega s) \right]_0^t \\ &= \frac{t}{2\omega} \sin \omega t + \dots \end{aligned}" />
                            定数項を除くと、時間 <b><InlineMath math="t" /></b> に比例して振幅が増大する <b><InlineMath math="\frac{t}{2\omega} \sin \omega t" /></b> が得られる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        定数行列 <b><InlineMath math="A" /></b> のすべての固有値の実部が負であるとき、任意の実解について <b><InlineMath math="\lim_{t \to \infty} \mathbf{x}(t) = \mathbf{0}" /></b> が成り立つことを、行列指数関数とジョルダン標準形の性質を用いて考察せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の実正方行列 <b><InlineMath math="A" /></b> の解は、複素ジョルダン標準形 <b><InlineMath math="J" /></b> を用いて <b><InlineMath math="\mathbf{x}(t) = P e^{tJ} P^{-1} \mathbf{x}_0" /></b> と書ける。
                            <b><InlineMath math="e^{tJ}" /></b> の各成分は、固有値 <b><InlineMath math="\lambda" /></b> を用いて <b><InlineMath math="t^m e^{\lambda t}" /></b> の線形結合である。
                            ここで <b><InlineMath math="\lambda = \alpha + i\beta" /></b> とすると、成分の絶対値は、
                            <BlockMath math="|t^m e^{\lambda t}| = t^m e^{\alpha t}" />
                            となる。仮定より <b><InlineMath math="\alpha < 0" /></b> であるから、多項式 <b><InlineMath math="t^m" /></b> の増大よりも指数関数 <b><InlineMath math="e^{\alpha t}" /></b> の減衰の方が速い：
                            <BlockMath math="\lim_{t \to \infty} t^m e^{\alpha t} = 0 \quad (\alpha < 0)" />
                            したがって、行列 <b><InlineMath math="e^{tJ}" /></b> のすべての成分が 0 に収束するため、解ベクトル <b><InlineMath math="\mathbf{x}(t)" /></b> も零ベクトルに収束する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
