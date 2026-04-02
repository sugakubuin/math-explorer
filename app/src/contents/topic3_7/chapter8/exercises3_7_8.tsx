import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_7_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="8" number={1}>
                    <p>
                        事象の列 <InlineMath math="\{A_n\}" /> に対するボレル・カンテリの第 1 補題（Lemma 8.1-1）と、独立な事象の列に対する第 2 補題（Lemma 8.1-2）の主張をそれぞれ記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>第 1 補題</b>：確率の和が収束するならば、無限回起きる確率は 0 である。
                            <BlockMath math="\sum_{n=1}^\infty P(A_n) < \infty \implies P(\limsup_{n \to \infty} A_n) = 0" />
                        </p>
                        <p className="mt-4">
                            <b>第 2 補題</b>：事象が独立であり、かつ確率の和が発散するならば、無限回起きる確率は 1 である。
                            <BlockMath math="\sum_{n=1}^\infty P(A_n) = \infty \text{ かつ } \{A_n\} \text{ が独立} \implies P(\limsup_{n \to \infty} A_n) = 1" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>
                        大数の弱法則（Theorem 8.2-1）と強法則（Theorem 8.3-1）について、標本平均 <InlineMath math="\bar{X}_n" /> が期待値 <InlineMath math="\mu" /> へ収束する際の「収束概念」の種類をそれぞれ答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>弱法則 (WLLN)</b>：確率収束（convergence in probability）
                            <BlockMath math="\bar{X}_n \xrightarrow{P} \mu" />
                        </p>
                        <p className="mt-4">
                            <b>強法則 (SLLN)</b>：概収束（almost sure convergence / 確率 1 での収束）
                            <BlockMath math="\bar{X}_n \xrightarrow{\text{a.s.}} \mu" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>
                        モンテカルロ積分において、積分 <InlineMath math="I = \int_0^1 f(x) dx" /> を推定するために大数の強法則をどのように利用するか、そのアルゴリズムの概要（§8.4）を述べよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                区間 <InlineMath math="[0, 1]" /> 上の一様分布に従う独立な乱数列 <InlineMath math="X_1, X_2, \ldots, X_n" /> を発生させる。
                            </li>
                            <li>
                                各点での関数の値の平均 <InlineMath math="\hat{I}_n = \frac{1}{n} \sum_{i=1}^n f(X_i)" /> を計算する。
                            </li>
                            <li>
                                大数の強法則により、<InlineMath math="n \to \infty" /> のとき標本平均 <InlineMath math="\hat{I}_n" /> はほとんど確実に期待値 <InlineMath math="E[f(X)]" />、すなわち積分値 <InlineMath math="I" /> に収束することを利用する。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="8" number={4}>
                    <p>
                        事象の列 <InlineMath math="\{A_n\}" /> が <InlineMath math="P(A_n) = 1/n^2" /> を満たすとき、ボレル・カンテリの第 1 補題（Lemma 8.1-1）を用いて、これらの事象が無限回発生する確率が 0 であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            事象の確率の和を計算すると：
                            <BlockMath math="\sum_{n=1}^\infty P(A_n) = \sum_{n=1}^\infty \frac{1}{n^2}" />
                        </p>
                        <p className="mt-4">
                            この級数は（級数の収束判定法により）収束することが知られている（和は <InlineMath math="\pi^2/6" /> ）。
                            ボレル・カンテリの第 1 補題（Lemma 8.1-1）の条件 <InlineMath math="\sum P(A_n) < \infty" /> が満たされるため、結論として <InlineMath math="P(\limsup A_n) = 0" /> を得る。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p>
                        チェビシェフの不等式（§3.2）を用いて、分散 <InlineMath math="\sigma^2 < \infty" /> を持つ i.i.d. 系列の標本平均 <InlineMath math="\bar{X}_n" /> が期待値 <InlineMath math="\mu" /> に確率収束すること（Theorem 8.2-1）を証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            標本平均 <InlineMath math="\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i" /> について、期待値と分散は次のようになる：
                            <BlockMath math="E[\bar{X}_n] = \mu, \quad \text{Var}(\bar{X}_n) = \frac{\sigma^2}{n}" />
                        </p>
                        <p className="mt-4">
                            チェビシェフの不等式を <InlineMath math="\bar{X}_n" /> に適用すると、任意の <InlineMath math="\varepsilon > 0" /> に対して：
                            <BlockMath math="P(|\bar{X}_n - \mu| > \varepsilon) \leq \frac{\text{Var}(\bar{X}_n)}{\varepsilon^2} = \frac{\sigma^2}{n\varepsilon^2}" />
                        </p>
                        <p className="mt-4">
                            ここで <InlineMath math="n \to \infty" /> とすると右辺は 0 に収束するため、はさみうちの原理より
                            <BlockMath math="\lim_{n \to \infty} P(|\bar{X}_n - \mu| > \varepsilon) = 0" />
                            となり、確率収束の定義を満たす。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>
                        確率変数列 <InlineMath math="\{X_n\}" /> が独立で平均 <InlineMath math="0" /> を持つとする。もし <InlineMath math="\text{Var}(X_n) = K" />（一定）であるとき、標本平均 <InlineMath math="\bar{X}_n" /> の分散を求め、大数の弱法則が成り立つことを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            独立性より、和の分散は分散の和に等しい：
                            <BlockMath math="\begin{aligned} \text{Var}(\bar{X}_n) &= \text{Var}\left(\frac{1}{n} \sum_{i=1}^n X_i\right) \\ &= \frac{1}{n^2} \sum_{i=1}^n \text{Var}(X_i) \\ &= \frac{1}{n^2} \sum_{i=1}^n K = \frac{nK}{n^2} = \frac{K}{n} \end{aligned}" />
                        </p>
                        <p className="mt-4">
                            期待値が <InlineMath math="E[\bar{X}_n] = 0" /> であり、分散が <InlineMath math="K/n \to 0 \quad (n \to \infty)" /> となるため、チェビシェフの不等式により <InlineMath math="\bar{X}_n \xrightarrow{P} 0" /> となり、大数の弱法則（Theorem 8.2-1）が同様の論理で成り立つことがわかる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={7}>
                    <p>
                        モンテカルロ法（§8.4）を用いてある値を推定する場合、標準誤差は <InlineMath math="O(1/\sqrt{n})" /> である。推定誤差を現在の半分にするためには、サンプル数 <InlineMath math="n" /> を何倍にする必要があるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            現在のサンプル数を <InlineMath math="n_1" />、新しいサンプル数を <InlineMath math="n_2" /> とし、誤差を <InlineMath math="E(n)" /> とおく。
                            <BlockMath math="E(n) = \frac{C}{\sqrt{n}}" />
                        </p>
                        <p className="mt-2">
                            条件 <InlineMath math="E(n_2) = \frac{1}{2} E(n_1)" /> より：
                            <BlockMath math="\frac{C}{\sqrt{n_2}} = \frac{1}{2} \frac{C}{\sqrt{n_1}} \implies \sqrt{\frac{n_1}{n_2}} = \frac{1}{2} \implies \frac{n_1}{n_2} = \frac{1}{4}" />
                        </p>
                        <p className="mt-2">
                            したがって、<InlineMath math="n_2 = 4n_1" /> となり、サンプル数を <b>4 倍</b> にする必要がある。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="8" number={8}>
                    <p>
                        i.i.d. 系列 <InlineMath math="\{X_n\}" /> が 4 次モーメント <InlineMath math="E[X_1^4] < \infty" /> を持つ場合、強大数の法則（Theorem 8.3-1）が成り立つことを、不等式 <InlineMath math="E[S_n^4] = O(n^2)" /> を用いて証明せよ（提示された証明のスケッチ (§8.3) を補完せよ）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            簡単のため <InlineMath math="E[X_i] = 0" /> とし、<InlineMath math="S_n = \sum_{i=1}^n X_i" /> とおく。
                            <BlockMath math="E[S_n^4] = E\left[ \left(\sum X_i\right)^4 \right] = \sum_{i,j,k,l} E[X_i X_j X_k X_l]" />
                        </p>
                        <p className="mt-2">
                            独立性と平均 0 より、期待値が消えないのはインデックスがすべてペアになる場合（<InlineMath math="i=j=k=l" /> または 2 組ずつ等しい場合）のみである：
                            <BlockMath math="\begin{aligned} E[S_n^4] &= \sum_{i=1}^n E[X_i^4] + 3 \sum_{i \neq j} E[X_i^2 X_j^2] \\ &= n E[X_1^4] + 3n(n-1) (E[X_1^2])^2 \end{aligned}" />
                            これは <InlineMath math="n" /> の 2 次式なので <InlineMath math="O(n^2)" /> である。
                        </p>
                        <p className="mt-2">
                            マルコフの不等式より：
                            <BlockMath math="\begin{aligned} P(|\bar{X}_n| > \varepsilon) &= P(S_n^4 > n^4 \varepsilon^4) \\ &\leq \frac{E[S_n^4]}{n^4 \varepsilon^4} = \frac{O(n^2)}{n^4 \varepsilon^4} = O\left(\frac{1}{n^2}\right) \end{aligned}" />
                        </p>
                        <p className="mt-2">
                            級数 <InlineMath math="\sum 1/n^2" /> は収束するため、ボレル・カンテリの第 1 補題（Lemma 8.1-1）により「無限回外れる確率」は 0、すなわち概収束する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={9}>
                    <p>
                        公平なコインを独立に無限回投げるとき、「10 回連続で表が出る」というパターンが無限回現れる確率を、ボレル・カンテリの第 2 補題（Lemma 8.1-2）を用いて論じよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            コイン投げの列を 10 回ずつのブロックに分ける。
                            <InlineMath math="A_k" /> を「<InlineMath math="k" /> 番目のブロック（試行 <InlineMath math="10k-9" /> から <InlineMath math="10k" /> まで）ですべて表が出る」事象とする。
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>各ブロックの試行は独立であるため、事象の列 <InlineMath math="\{A_k\}" /> は独立である。</li>
                            <li>各事象の確率は <InlineMath math="P(A_k) = (1/2)^{10} = 1/1024" /> （一定）である。</li>
                            <li>確率の和は <InlineMath math="\sum_{k=1}^\infty \frac{1}{1024} = \infty" /> となり発散する。</li>
                        </ul>
                        <p className="mt-2">
                            ボレル・カンテリの第 2 補題（Lemma 8.1-2）の条件が満たされるため、<InlineMath math="P(\limsup A_k) = 1" />、すなわち「10 回連続で表が出るブロック」は確率 1 で無限回現れる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={10}>
                    <p>
                        標本空間 <InlineMath math="\Omega = [0, 1]" /> 上の一様分布において、確率変数列を <InlineMath math="X_n = n \cdot 1_{[0, 1/n]}" /> と定義する（§6.3 関連）。この列の期待値 <InlineMath math="E[X_n]" /> と、概収束の極限を求め、大数の強法則が成り立たない（期待値の極限と標本平均の極限が一致しない）実感を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            期待値は <InlineMath math="E[X_n] = n \cdot P([0, 1/n]) = n \cdot (1/n) = 1" /> （常に 1）である。
                        </p>
                        <p className="mt-2">
                            各点収束を考えると、<InlineMath math="\omega > 0" /> のとき、十分大きな <InlineMath math="n" /> で <InlineMath math="1/n < \omega" /> となり <InlineMath math="X_n(\omega) = 0" /> となる。
                            <InlineMath math="\omega = 0" />（確率 0）を除いて 0 に収束するため、<InlineMath math="X_n \to 0" /> a.s. である。
                        </p>
                        <p className="mt-2">
                            このとき、標本平均 <InlineMath math="\bar{X}_n" /> も（一様可積分性が満たされないため）期待値の 1 ではなく 0 に近づく。
                            大数の法則は i.i.d. を前提としているが、このような「極端な値（裾）の影響」を制御できない場合、直感的な期待値の意味が崩れる可能性があることを示唆している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
