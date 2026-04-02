import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BorelCantelliLemmas() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                「大数の法則」は、試行回数を無限に増やすと、観測される平均値が真の期待値に一致することを保証する、確率論の最も象徴的な定理です。
                本章ではその基礎となる「ボレル・カンテリの補題」から始め、収束の強さによる 2 つの法則を詳しく見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">無限回起きる事象の見極め</h2>

            <p className="leading-relaxed">
                事象の列 <InlineMath math="\{A_n\}" /> に対し、それらが「無限回起きる（occur infinitely often）」という言葉を数学的に定義すると、
                それらの上極限集合 <InlineMath math="\limsup_{n \to \infty} A_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k" /> となります。
                ボレル・カンテリの補題は、この事象の確率が <InlineMath math="0" /> か <InlineMath math="1" /> かを判定する基準を与えます。
            </p>

            <ContentBox type="theorem" title="Lemma 8.1-1 (ボレル・カンテリの第 1 補題)">
                <p>
                    事象の列 <InlineMath math="\{A_n\}" /> に対し、それらの確率の和が収束するならば、
                    それらが無限回起きる確率は <InlineMath math="0" /> である：
                    <BlockMath math="\sum_{n=1}^\infty P(A_n) < \infty \implies P(\limsup_{n \to \infty} A_n) = 0" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    測度の連続性（Theorem 2.2-1）を利用する。
                    <BlockMath math="P(\limsup_n A_n) = P\left(\bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k\right) = \lim_{n \to \infty} P\left(\bigcup_{k=n}^\infty A_k\right)" />
                    ここで、劣加法性（Boole 不等式）を適用すると、
                    <BlockMath math="P\left(\bigcup_{k=n}^\infty A_k\right) \leq \sum_{k=n}^\infty P(A_k)" />
                    となる。仮定より、和 <InlineMath math="\sum P(A_k)" /> は収束するため、その剰余項（テール和）は <InlineMath math="n \to \infty" /> で <InlineMath math="0" /> に収束する。
                    したがって、<InlineMath math="P(\limsup A_n) = 0" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Lemma 8.1-2 (ボレル・カンテリの第 2 補題)">
                <p>
                    事象の列 <InlineMath math="\{A_n\}" /> が<b>独立</b>であり、かつ確率の和が発散するならば、
                    それらが無限回起きる確率は <InlineMath math="1" /> である：
                    <BlockMath math="\begin{aligned} \sum_{n=1}^\infty P(A_n) = \infty &\text{ かつ } \{A_n\} \text{ が独立} \\ &\implies P(\limsup_{n \to \infty} A_n) = 1 \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    補事象の確率 <InlineMath math="P((\limsup A_n)^c) = P(\bigcup_n \bigcap_{k \geq n} A_k^c) = 0" /> を示す。
                    <InlineMath math="\{A_k\}" /> の独立性より、有限積において次が成り立つ：
                    <BlockMath math="P\left(\bigcap_{k=n}^m A_k^c\right) = \prod_{k=n}^m (1 - P(A_k))" />
                    ここで不等式 <InlineMath math="1-x \leq e^{-x}" /> を用いると、
                    <BlockMath math="\prod_{k=n}^m (1 - P(A_k)) \leq \exp\left( -\sum_{k=n}^m P(A_k) \right)" />
                    となる。仮定より右辺の和は <InlineMath math="m \to \infty" /> で発散するため、全体は <InlineMath math="0" /> に収束する。
                    測度の連続性より <InlineMath math="P(\bigcap_{k \geq n} A_k^c) = 0" /> となり、可算和をとっても確率は <InlineMath math="0" /> である。
                    したがって、その補事象である <InlineMath math="P(\limsup A_n) = 1" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用：コイン投げの極限</h2>

            <p className="leading-relaxed">
                この補題は、直感的には当たり前に思える現象に厳密な証明を与えます。
            </p>

            <ContentBox type="example" title="Example 8.1-1 (表は無限回出るか？)">
                <p>
                    公平なコインを独立に無限回投げるとき、「表（H）が無限回出る」事象の確率はいくつか？
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="A_n" /> を「<InlineMath math="n" /> 回目に表が出る」事象とすると、<InlineMath math="P(A_n) = 1/2" /> である。</li>
                    <li>確率は全試行で一定であるため、和は明らかに発散する：<InlineMath math="\sum_{n=1}^\infty 1/2 = \infty" />。</li>
                    <li>試行は独立であるため、第 2 補題が適用でき、確率 <InlineMath math="1" /> で表が無限回出ることが示される。</li>
                </ul>
                <p className="mt-2">
                    同様の議論で、「特定の有限パターンの列（例：H, H, T, H）」が無限回現れる確率も <InlineMath math="1" /> であることがわかります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ボレル・カンテリの補題は、事象の列が無限回発生する確率が <InlineMath math="0" /> か <InlineMath math="1" /> かを判定する。</li>
                    <li>共通項：和 <InlineMath math="\sum P(A_n)" /> の収束性が鍵となる。</li>
                    <li>相違点：第 2 補題（確率 1）では、事象間の「独立性」が不可欠な条件となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
