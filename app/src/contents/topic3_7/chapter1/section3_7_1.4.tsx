import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConditionalProbabilityAndBayesTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率論の最も強力な要素のひとつは、新たな情報（事象の発生）が得られたときに、それに基づいて確率を更新できる点にあります。
                本節では、情報の更新を数学的に記述する<b>条件付き確率</b>と、推論の基礎となる<b>ベイズの定理</b>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">条件付き確率</h2>

            <p className="leading-relaxed">
                ある事象 <InlineMath math="B" /> が既に起こったという条件下での事象 <InlineMath math="A" /> の確率は、標本空間を <InlineMath math="B" /> に制限することで定義されます。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (条件付き確率)">
                <p>
                    確率空間 <InlineMath math="(\Omega, \mathcal{F}, P)" /> において、<InlineMath math="P(B) > 0" /> を満たす事象 <InlineMath math="B \in \mathcal{F}" /> が与えられたとき、
                    事象 <InlineMath math="A" /> の<b>条件付き確率</b>（conditional probability）を次のように定義する：
                    <BlockMath math="P(A \mid B) = \frac{P(A \cap B)}{P(B)}" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-1 (サイコロの条件付き確率)">
                <p>
                    サイコロを投げ、「偶数の目が出た」という情報 <InlineMath math="B = \{2, 4, 6\}" /> が得られたとする。
                    この条件下で、「4 以上の目が出る」事象 <InlineMath math="A = \{4, 5, 6\}" /> の確率を求める。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="P(B) = 3/6 = 1/2" /> である。</li>
                    <li><InlineMath math="A \cap B = \{4, 6\}" /> より、<InlineMath math="P(A \cap B) = 2/6 = 1/3" /> である。</li>
                    <li>したがって、<InlineMath math="P(A \mid B) = (1/3) / (1/2) = 2/3" /> となる。</li>
                </ul>
                <p>
                    情報がない場合の確率 <InlineMath math="P(A) = 1/2" /> から、値が更新されていることが分かる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                条件付き確率の定義を並べ替えることで、積事象の確率を計算する「乗法定理」が得られます。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-1 (乗法定理)">
                <p>
                    2 つの事象に対して <InlineMath math="P(A \cap B) = P(A \mid B) P(B)" /> が成り立つ。
                    一般に <InlineMath math="n" /> 個の事象に対して、次が成り立つ：
                    <BlockMath math="\begin{aligned} P(A_1 \cap \cdots \cap A_n) = P(A_1) &P(A_2 \mid A_1) P(A_3 \mid A_1 \cap A_2) \\ &\cdots P(A_n \mid A_1 \cap \cdots \cap A_{n-1}) \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    右辺を定義に従って書き下すと、分子と分母で次々とキャンセルが起こり、
                    <BlockMath math="\begin{aligned} P(A_1) &\cdot \frac{P(A_1 \cap A_2)}{P(A_1)} \cdot \frac{P(A_1 \cap A_2 \cap A_3)}{P(A_1 \cap A_2)} \\ &\cdots \frac{P(A_1 \cap \cdots \cap A_n)}{P(A_1 \cap \cdots \cap A_{n-1})} = P(A_1 \cap \cdots \cap A_n) \end{aligned}" />
                    となり、左辺と一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全確率の公式とベイズの定理</h2>

            <p className="leading-relaxed">
                事象の全体をいくつかの排反なケースに分ける（分割する）ことで、全体の確率を計算したり、原因を推論したりできます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1 (全確率の公式)">
                <p>
                    <InlineMath math="\{B_i\}" /> が 標本空間 <InlineMath math="\Omega" /> の分割（互いに素で、和が <InlineMath math="\Omega" />）であるとき、任意の事象 <InlineMath math="A" /> について次が成り立つ。
                    <BlockMath math="P(A) = \sum_i P(A \mid B_i) P(B_i)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="A = A \cap \Omega = A \cap (\bigcup_i B_i) = \bigcup_i (A \cap B_i)" /> と展開できる。
                    <InlineMath math="\{A \cap B_i\}" /> は互いに素であるため、加法性より
                    <BlockMath math="P(A) = \sum_i P(A \cap B_i) = \sum_i P(A \mid B_i) P(B_i)" />
                    となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この公式と条件付き確率を組み合わせることで、観測から「原因」を特定する定理が導かれます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-2 (ベイズの定理)">
                <p>
                    <InlineMath math="\{B_i\}" /> を <InlineMath math="\Omega" /> の分割とする。このとき、ある事象 <InlineMath math="A" /> が起こったもとでの原因 <InlineMath math="B_j" /> の確率は次で与えられる：
                    <BlockMath math="P(B_j \mid A) = \frac{P(A \mid B_j) P(B_j)}{\sum_i P(A \mid B_i) P(B_i)}" />
                    ここで、<InlineMath math="P(B_j)" /> を事前の重み（<b>事前確率</b>）、<InlineMath math="P(B_j \mid A)" /> を観測後の重み（<b>事後確率</b>）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-2 (疾患検査と偽陽性の問題)">
                <p>
                    ある稀な疾患の有病率が <InlineMath math="P(D) = 0.01" />（1％）であるとする。
                    検査の精度が次のとき、陽性と判定された人が実際に病気である確率を求めよう。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>感度（病気の人が陽性になる確率）：<InlineMath math="P(+ \mid D) = 0.99" /></li>
                    <li>特異度（健康な人が陰性になる確率）：<InlineMath math="P(- \mid D^c) = 0.95" /></li>
                </ul>
                <p>
                    ベイズの定理より：
                    <BlockMath math="\begin{aligned} P(D \mid +) &= \frac{0.99 \times 0.01}{0.99 \times 0.01 + (1 - 0.95) \times (1 - 0.01)} \\ &= \frac{0.0099}{0.0099 + 0.0495} \approx 0.167 \end{aligned}" />
                    検査の精度が高くても、有病率が低い場合には、陽性者の約 17％ しか実際に病気ではないという驚くべき結果が得られる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ベイズ統計学への展望">
                <p>
                    ベイズの定理は、新たなデータを得るたびに私たちの「確信」を更新していくプロセスの核心です。
                    この「ベイズ更新」の考え方は、現代の機械学習や意思決定理論における強力なツールとなっており、数理統計学（4-15）のコースでその真価を発揮します。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                これで Chapter 1 を通じて、確率を考えるための器である「確率空間」と、情報の更新を行う「条件付き確率」について学びました。
                次章では、事象という抽象的な対象を、より数学的に扱いやすい「数値」へと橋渡しする<b>確率変数</b>の概念を導入します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>条件付き確率は、特定の事象が発生したという条件下で標本空間を再定義し、確率を更新する仕組みである。</li>
                    <li>全確率の公式を用いると、複雑な事象を排反なケースに分解して計算できる。</li>
                    <li>ベイズの定理は、結果（観測データ）から原因（パラメーターや状態）を推論するための基礎方程式である。</li>
                    <li>直感に反する「偽陽性の問題」などは、ベイズの定理を用いることで論理的に正しく解釈できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
