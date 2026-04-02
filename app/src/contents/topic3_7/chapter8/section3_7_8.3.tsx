import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function StrongLawOfLargeNumbers() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                弱大数の法則は「大きな $n$ に対して誤差が小さい確率は高い」ことを主張しました。
                これに対し、「強大数の法則」は、試行を無限に続けると（ほとんど確実に）標本平均が期待値そのものに一致することを主張する、より強力な定理です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">強大数の法則の主張</h2>

            <p className="leading-relaxed">
                収束の種類が「確率収束」から「概収束」へと強化されています。
            </p>

            <ContentBox type="theorem" title="Theorem 8.3-1 (コルモゴロフの強大数の法則：SLLN)">
                <p>
                    確率変数列 <InlineMath math="\{X_n\}" /> が i.i.d. であり、
                    平均 <InlineMath math="E[|X_1|] < \infty" /> を持つとする。
                    このとき、標本平均 <InlineMath math="\bar{X}_n = \frac{1}{n} \sum_{k=1}^n X_k" /> は <InlineMath math="\mu = E[X_1]" /> に<b>概収束</b>する：
                    <BlockMath math="\bar{X}_n \xrightarrow{\text{a.s.}} \mu \quad (n \to \infty)" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                弱法則との決定的な違いは、「列としての収束」を保証している点です。途中で一時的に大きく外れることはあっても、最終的には必ず期待値に張り付くことを意味します。
            </p>

            <ContentBox type="proof" title="Proof (4次モーメントを用いる簡易版)">
                <p>
                    一般の強法則の証明（$L^1$ 条件のみ）には高度な議論が必要なため、ここでは追加条件として <InlineMath math="E[X_1^4] < \infty" /> を仮定した明快な証明を紹介する。
                    簡単のため <InlineMath math="\mu=0" /> とし、<InlineMath math="S_n = \sum_{k=1}^n X_k" /> とおく。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        <InlineMath math="E[S_n^4]" /> を展開すると、期待値が $0$ でない項は <InlineMath math="X_i^4" /> または <InlineMath math="X_i^2 X_j^2 \ (i \neq j)" /> という形に限られる。
                        <BlockMath math="E[S_n^4] = n E[X_1^4] + 3n(n-1) (E[X_1^2])^2 = O(n^2)" />
                    </li>
                    <li>
                        マルコフの不等式より、
                        <BlockMath math="\begin{aligned} P\left(|\bar{X}_n| > \varepsilon\right) &= P(S_n^4 > n^4 \varepsilon^4) \\ &\leq \frac{E[S_n^4]}{n^4 \varepsilon^4} = \frac{O(n^2)}{n^4 \varepsilon^4} = O\left(\frac{1}{n^2}\right) \end{aligned}" />
                    </li>
                    <li>
                        級数の和 <InlineMath math="\sum_{n=1}^\infty \frac{1}{n^2}" /> は収束するため、ボレル・カンテリの第 1 補題（Lemma 8.1-1）より、
                        事象 <InlineMath math="\{|\bar{X}_n| > \varepsilon\}" /> が無限回起きる確率は $0$ である。
                    </li>
                    <li>
                        これが任意の <InlineMath math="\varepsilon > 0" /> で成り立つため、概収束の定義より <InlineMath math="\bar{X}_n \xrightarrow{\text{a.s.}} 0" /> が導かれる。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="Remark: 概収束と中心極限定理">
                <p>
                    大数の法則は「平均がどこに近づくか」を教えてくれますが、「どのように近づくか（分布の広がりはどうか）」については語りません。
                    この「揺らぎ」の詳細な性質を記述するのが、次章で扱う「中心極限定理」です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>強大数の法則は、平均が期待値に概収束（確率 1 で収束）することを保証する。</li>
                    <li>ボレル・カンテリの補題を用いることで、「和が有限回しか外れない」ことを証明の核とする。</li>
                    <li>1 次の期待値が存在しさえすれば成り立つが、4 次モーメントを仮定すると非常に見通しの良い証明が可能となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
