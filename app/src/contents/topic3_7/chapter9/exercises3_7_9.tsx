import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_7_Chapter9() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="9" number={1}>
                    <p>
                        i.i.d. 系列 <InlineMath math="\{X_n\}" /> （平均 <InlineMath math="\mu" />、分散 <InlineMath math="\sigma^2" />）に対する中心極限定理（Theorem 9.1-1）の主張を記述せよ。特に、標準化変数 <InlineMath math="Z_n" /> の定義式を含めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            和の標準化変数
                            <BlockMath math="Z_n = \frac{\sum_{k=1}^n X_k - n\mu}{\sigma\sqrt{n}}" />
                            は、<InlineMath math="n \to \infty" /> において標準正規分布 <InlineMath math="\mathcal{N}(0, 1)" /> に分布収束する：
                            <BlockMath math="Z_n \xrightarrow{d} Z \sim \mathcal{N}(0, 1)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={2}>
                    <p>
                        中心極限定理の証明 (§9.2) において、特性関数の収束を分布の収束に結びつけるために使用される重要な定理 (§7.4) の名称を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>レビーの連続性定理</b> (Levy's continuity theorem) である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={3}>
                    <p>
                        多次元の分布収束を 1 次元の分布収束に帰着させるための補題（Lemma 9.3-1）の名称を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>クラメール・ウォルドのデバイス</b> (Cramer-Wold device) である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="9" number={4}>
                    <p>
                        ある工場で製造される製品の重さの平均が 100g、標準偏差が 10g である。100 個の製品をランダムに選んだとき、その合計重量が 10.1kg 以上になる確率を、中心極限定理を用いて近似せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1 個の重さを <InlineMath math="X_i" /> とすると、<InlineMath math="E[X_i] = 100, \sigma = 10, n = 100" /> である。
                            合計重量 <InlineMath math="S_{100} = \sum X_i" /> の平均は <InlineMath math="n\mu = 10000" />、標準偏差は <InlineMath math="\sigma\sqrt{n} = 10 \cdot 10 = 100" /> となる。
                        </p>
                        <p className="mt-4">
                            中心極限定理より、標準化変数 <InlineMath math="Z = \frac{S_{100} - 10000}{100}" /> は近似的に <InlineMath math="\mathcal{N}(0, 1)" /> に従う。
                            求める確率は <InlineMath math="P(S_{100} \geq 10100)" /> なので：
                            <BlockMath math="\begin{aligned} P(S_{100} \geq 10100) &= P\left( \frac{S_{100} - 10000}{100} \geq \frac{10100 - 10000}{100} \right) \\ &= P(Z \geq 1) \end{aligned}" />
                        </p>
                        <p className="mt-4">
                            標準正規分布の表より、<InlineMath math="P(Z \geq 1) = 1 - 0.8413 = 0.1587" /> である。
                            よって約 <b>15.9%</b> と近似される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={5}>
                    <p>
                        期待値 <InlineMath math="\lambda" /> のポアソン分布 <InlineMath math="\text{Po}(\lambda)" /> は、<InlineMath math="\lambda" /> が大きいとき、近似的に正規分布 <InlineMath math="\mathcal{N}(\lambda, \lambda)" /> に従う（中心極限定理の帰結）。この理由を、パラメータ 1 の独立なポアソン変数の和として説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            独立なポアソン分布の和はポアソン分布になる（再生性、§7.3）ため、パラメータ <InlineMath math="\lambda" />（整数とする）のポアソン変数は、パラメータ 1 の独立なポアソン変数 <InlineMath math="X_1, \ldots, X_\lambda" /> の和 <InlineMath math="S_\lambda = \sum_{i=1}^\lambda X_i" /> と同一の分布を持つ。
                        </p>
                        <p className="mt-4">
                            平均 1 のポアソン分布の期待値は 1、分散も 1 である。中心極限定理（Theorem 9.1-1）により、加算回数 <InlineMath math="\lambda" /> を無限に大きくすると、その分布は正規分布に近づく。期待値と分散は和の性質により <InlineMath math="\lambda" /> となるため、<InlineMath math="\mathcal{N}(\lambda, \lambda)" /> で近似される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={6}>
                    <p>
                        中心極限定理の証明 (§9.2) における特性関数の 2 次テイラー展開の過程について、期待値 <InlineMath math="0" />、分散 <InlineMath math="1" /> の条件下で記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            特性関数のモーメントによる展開公式（§7.2）を用いる：
                            <BlockMath math="\varphi_X(u) = \varphi_X(0) + \varphi_X'(0)u + \frac{\varphi_X''(0)}{2}u^2 + o(u^2)" />
                        </p>
                        <p className="mt-4">
                            ここで、<InlineMath math="\varphi_X(0) = 1" />、<InlineMath math="\varphi_X'(0) = iE[X] = 0" />、<InlineMath math="\varphi_X''(0) = i^2 E[X^2] = -1" /> であるため、
                            <BlockMath math="\varphi_X(u) = 1 - \frac{u^2}{2} + o(u^2)" />
                            と展開される。中心極限定理の証明では、この展開が最終的に指数関数 <InlineMath math="e^{-t^2/2}" /> を導く核となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={7}>
                    <p>
                        ベリー・エセーンの定理（Theorem 9.4-1）において、3 次の絶対モーメント <InlineMath math="\rho" /> がどのように正規近似の「精度」に影響するか、直感的な理由と共に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定理により、近似誤差の上界は <InlineMath math="\frac{C \rho}{\sigma^3 \sqrt{n}}" /> である。
                            3 次モーメント <InlineMath math="\rho" /> は分布の<b>歪み</b>（非対称性）に関連しており、分布が極端に偏っている（裾が長い）ほど <InlineMath math="\rho" /> が大きくなり、正規分布（対称な分布）への収束が遅くなることを意味している。
                            したがって、左右対称に近い分布ほど、より小さな <InlineMath math="n" /> で精度の高い正規近似が可能となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="9" number={8}>
                    <p>
                        2 次元の独立同分布な確率ベクトル系列 <InlineMath math="\{\boldsymbol{X}_n\}" /> が平均 <InlineMath math="\boldsymbol{0}" />、共分散行列 <InlineMath math="\Sigma = \begin{pmatrix} 1 & \rho \\ \rho & 1 \end{pmatrix}" /> を持つとする。多次元中心極限定理（Proposition 9.3-1）により、標本平均ベクトルの標準化変数の極限分布はどのようになるか記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            多次元中心極限定理（Proposition 9.3-1）より、標準化変数 <InlineMath math="\boldsymbol{Z}_n = \sqrt{n}\bar{\boldsymbol{X}}_n" /> は多変量正規分布 <InlineMath math="\mathcal{N}(\boldsymbol{0}, \Sigma)" /> に分布収束する。
                        </p>
                        <p className="mt-4">
                            具体的には、平均ベクトルが <InlineMath math="(0, 0)^T" /> であり、各成分の分散が 1、共分散（相関係数）が <InlineMath math="\rho" /> であるような 2 変量正規分布となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={9}>
                    <p>
                        標本平均 <InlineMath math="\bar{X}_n" /> に対して、滑らかな関数 <InlineMath math="f" /> を適用した統計量 <InlineMath math="f(\bar{X}_n)" /> もまた、近似的に正規分布に従うことが知られている（デルタ法）。中心極限定理を用いて、<InlineMath math="\sqrt{n}(f(\bar{X}_n) - f(\mu))" /> の極限分布を考察せよ（ヒント：テイラー展開を利用する）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(\bar{X}_n)" /> を <InlineMath math="\mu" /> の周りで 1 次までテイラー展開する：
                            <BlockMath math="f(\bar{X}_n) \approx f(\mu) + f'(\mu)(\bar{X}_n - \mu)" />
                        </p>
                        <p className="mt-4">
                            これより、
                            <BlockMath math="\sqrt{n}(f(\bar{X}_n) - f(\mu)) \approx f'(\mu) \sqrt{n}(\bar{X}_n - \mu)" />
                            が得られる。中心極限定理（Theorem 9.1-1）より <InlineMath math="\sqrt{n}(\bar{X}_n - \mu) \xrightarrow{d} \mathcal{N}(0, \sigma^2)" /> なので、その定数倍は
                            <BlockMath math="\mathcal{N}(0, (f'(\mu)\sigma)^2)" />
                            に分布収束する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={10}>
                    <p>
                        指数分布 <InlineMath math="\text{Exp}(1)" /> の特性関数を用いた中心極限定理の検証例（Example 9.2-1）を参考に、対数特性関数 <InlineMath math="\log \varphi_Y(u) = -iu - \log(1-iu)" /> の 2 次までの展開過程を示し、正規分布の特性関数が導かれることを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            対数関数のマクローリン展開 <InlineMath math="\log(1-x) = -x - x^2/2 - x^3/3 - \dots" /> を利用する（<InlineMath math="x = iu" /> とおく）：
                            <BlockMath math="\begin{aligned} \log \varphi_Y(u) &= -iu - \log(1-iu) \\ &= -iu - ( -(iu) - \frac{(iu)^2}{2} - \frac{(iu)^3}{3} - \dots ) \\ &= -iu + iu + \frac{(iu)^2}{2} + o(u^2) \\ &= -\frac{u^2}{2} + o(u^2) \end{aligned}" />
                        </p>
                        <p className="mt-4">
                            標本平均の対数特性関数については、和の性質より：
                            <BlockMath math="\begin{aligned} \log \varphi_{Z_n}(t) &= n \log \varphi_Y(t/\sqrt{n}) \\ &= n \left[ -\frac{(t/\sqrt{n})^2}{2} + o(1/n) \right] \\ &= -\frac{t^2}{2} + o(1) \end{aligned}" />
                            指数をとると <InlineMath math="e^{-t^2/2}" /> となり、標準正規分布の特性関数に一致することが示される。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
