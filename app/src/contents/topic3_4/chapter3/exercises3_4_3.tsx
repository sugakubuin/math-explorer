import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_4_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        関数 <InlineMath math="f \in L^1(\mathbb{R})" /> に対し、その<b>フーリエ変換</b> <InlineMath math="\hat{f}(\xi)" /> および<b>逆フーリエ変換</b> <InlineMath math="\check{g}(x)" /> の定義式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-1 および Definition 3.2-1 に基づき、
                        </p>
                        <BlockMath math="\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-i\xi x} dx" />
                        <BlockMath math="\check{g}(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} g(\xi) e^{i\xi x} d\xi" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        <b>リーマン・ルベーグの補題 (Riemann-Lebesgue Lemma)</b> の主張を、フーリエ変換の極限の形で記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.1-2 に基づき、 <InlineMath math="f \in L^1(\mathbb{R})" /> ならば次が成り立つ。
                        </p>
                        <BlockMath math="\lim_{|\xi| \to \infty} \hat{f}(\xi) = 0" />
                        <p>
                            これは、高周波成分が積分の相殺効果によりゼロに近づくことを意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        2 つの関数 <InlineMath math="f, g" /> の<b>畳み込み (convolution)</b> の定義式、およびそのフーリエ変換について成り立つ<b>畳み込み定理</b>の主張を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.3-1 および Theorem 3.3-3 に基づき、
                        </p>
                        <BlockMath math="(f * g)(x) = \int_{-\infty}^{\infty} f(x-t) g(t) dt" />
                        <BlockMath math="\mathcal{F}[f * g](\xi) = \hat{f}(\xi) \cdot \hat{g}(\xi)" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        指数減衰関数 <InlineMath math="f(x) = e^{-|x|}" /> のフーリエ変換を計算せよ（Example 3.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            積分範囲を正負に分けて計算する。
                        </p>
                        <BlockMath math="\begin{aligned} \hat{f}(\xi) &= \int_{-\infty}^{0} e^{x} e^{-i\xi x} dx + \int_{0}^{\infty} e^{-x} e^{-i\xi x} dx \\ &= \left[ \frac{e^{(1-i\xi)x}}{1-i\xi} \right]_{-\infty}^{0} + \left[ \frac{e^{-(1+i\xi)x}}{-(1+i\xi)} \right]_{0}^{\infty} \\ &= \frac{1}{1-i\xi} + \frac{1}{1+i\xi} = \frac{2}{1+\xi^2} \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        スケール変換則（Proposition 3.1-4）を用いて、 <InlineMath math="f(x) = e^{-|x|}" /> のフーリエ変換が <InlineMath math="\hat{f}(\xi) = 2/(1+\xi^2)" /> であることを利用し、 <InlineMath math="g(x) = e^{-|2x|}" /> のフーリエ変換を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                             <InlineMath math="a=2" /> とすると、スケール変換則 <InlineMath math="\mathcal{F}[f(ax)](\xi) = \frac{1}{|a|} \hat{f}(\frac{\xi}{a})" /> より、
                        </p>
                        <BlockMath math="\hat{g}(\xi) = \frac{1}{2} \hat{f}\left(\frac{\xi}{2}\right) = \frac{1}{2} \cdot \frac{2}{1 + (\xi/2)^2} = \frac{1}{1 + \xi^2/4} = \frac{4}{4 + \xi^2}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        矩形関数 <InlineMath math="f = \mathbf{1}_{[-1,1]}" /> に対して<b>プランシュレルの定理</b>を適用し、 sinc 関数の二乗積分 <InlineMath math="\int_{-\infty}^{\infty} \frac{\sin^2\xi}{\xi^2} d\xi" /> の値を求めよ（Example 3.4-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            プランシュレルの定理 <InlineMath math="\int_{-\infty}^{\infty} |\hat{f}(\xi)|^2 d\xi = 2\pi \int_{-\infty}^{\infty} |f(x)|^2 dx" /> を用いる。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>右辺: <InlineMath math="2\pi \int_{-1}^{1} 1^2 dx = 4\pi" /></li>
                            <li>左辺: 矩形関数の変換は <InlineMath math="\hat{f}(\xi) = 2\sin\xi/\xi" /> であるから、 <InlineMath math="\int_{-\infty}^{\infty} \frac{4\sin^2\xi}{\xi^2} d\xi" /></li>
                        </ul>
                        <p className="mt-2">
                            これらを等置して、
                            <BlockMath math="4 \int_{-\infty}^{\infty} \frac{\sin^2\xi}{\xi^2} d\xi = 4\pi \implies \int_{-\infty}^{\infty} \frac{\sin^2\xi}{\xi^2} d\xi = \pi" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        ポアソン核 <InlineMath math="f(x) = \frac{1}{\pi(x^2+1)}" /> のフーリエ変換を、逆変換の双対性を利用して求めよ（Example 3.5-4 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                             <InlineMath math="g(x) = e^{-|x|}" /> のフーリエ変換が <InlineMath math="\hat{g}(\xi) = \frac{2}{1+\xi^2}" /> である。反転公式（双対性）より、
                        </p>
                        <BlockMath math="\mathcal{F}[\frac{2}{1+x^2}](\xi) = 2\pi g(-\xi) = 2\pi e^{-|\xi|}" />
                        <p className="mt-2">
                            両辺を <InlineMath math="2\pi" /> で割ると、
                        </p>
                        <BlockMath math="\mathcal{F}[\frac{1}{\pi(x^2+1)}](\xi) = e^{-|\xi|}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        ガウス関数 <InlineMath math="f(x) = e^{-x^2}" /> のフーリエ変換 <InlineMath math="\hat{f}(\xi)" /> が、微分方程式 <InlineMath math="\frac{d\hat{f}}{d\xi} = -\frac{\xi}{2} \hat{f}" /> を満たすことを導き、それを用いて変換結果を決定せよ（Example 3.5-1 証）。
                    </p>
                    <ExerciseSolution>
                        <p>
                             <InlineMath math="f'(x) = -2x f(x)" /> の両辺をフーリエ変換する。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>左辺: <InlineMath math="\mathcal{F}[f'] = i\xi \hat{f}(\xi)" /></li>
                            <li>右辺: <InlineMath math="\mathcal{F}[-2xf] = -2i \frac{d\hat{f}}{d\xi}" />（定義式を微分する性質）</li>
                        </ul>
                        <p className="mt-2">
                             <InlineMath math="i\xi \hat{f} = -2i \hat{f}' \implies \hat{f}' = -\frac{\xi}{2} \hat{f}" /> となる。
                            これを解くと <InlineMath math="\hat{f}(\xi) = C e^{-\xi^2/4}" />。
                            積分値 <InlineMath math="\hat{f}(0) = \int e^{-x^2} dx = \sqrt{\pi}" /> より <InlineMath math="C = \sqrt{\pi}" />、
                            したがって <InlineMath math="\hat{f}(\xi) = \sqrt{\pi} e^{-\xi^2/4}" />。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        信号処理の観点から、ある信号 <InlineMath math="f" /> とポアソン核 <InlineMath math="P_t" /> （フーリエ変換 <InlineMath math="e^{-t|\xi|}" />）との畳み込み <InlineMath math="f * P_t" /> が、なぜ「低域通過フィルタ（ローパスフィルタ）」として機能するのか説明せよ（Example 3.5-5 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            畳み込み定理により、生成された信号のスペクトルは
                        </p>
                        <BlockMath math="\mathcal{F}[f * P_t](\xi) = \hat{f}(\xi) \cdot e^{-t|\xi|}" />
                        <p>
                            となる。指数関数 <InlineMath math="e^{-t|\xi|}" /> は、周波数 <InlineMath math="|\xi|" /> が大きくなるにつれて急激に（指数的に）減少する。
                            したがって、元の信号の高周波成分（ノイズや急峻な変化）が強力に抑制され、低周波成分のみが抽出・保持される。
                            これが、時間領域において関数が「滑らかに」なる平滑化処理の数学的本質である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        フーリエ反転公式の証明（Theorem 3.2-2 証）において、なぜガウス核 <InlineMath math="e^{-\epsilon \xi^2}" /> を挿入する必要があるのか、積分可能性の観点から述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            逆変換の定義式に変換式を代入すると、形式的に
                        </p>
                        <BlockMath math="\int_{-\infty}^{\infty} e^{i\xi(x-t)} d\xi" />
                        <p>
                            という積分が現れる。この積分は通常の意味（リーマンまたはルベーグ積分）では収束せず、直接計算することができない。
                            ガウス核を挿入することで、広義積分が絶対収束するよう「正則化」を行い、その後に極限 <InlineMath math="\epsilon \to 0" /> を取ることで、デルタ関数の性質を抽出しつつ数学的に厳密な反転を導くことができるためである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
