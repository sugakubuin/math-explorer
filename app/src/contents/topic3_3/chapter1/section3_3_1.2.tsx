import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MeasureDefinitionAndProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で定義した可測空間 <InlineMath math="(X, \mathcal{A})" /> の各可測集合に対して、その「大きさ」を割り当てる関数が測度です。
                測度は、長さや面積、確率などの概念を抽象化したものであり、その中心的な性質は「可算個の互いに素な集合の和集合の大きさは、各集合の大きさの和に等しい」という可算加法性にあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">測度の定義</h2>

            <p>
                測度は、可測集合族から非負の実数値（および無限大）への写像として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (測度)">
                <p>
                    可測空間 <InlineMath math="(X, \mathcal{A})" /> 上の関数 <InlineMath math="\mu : \mathcal{A} \to [0, +\infty]" /> が以下の2条件を満たすとき、<InlineMath math="\mu" /> を<b>測度</b> (measure) という。
                </p>
                <ul className="list-decimal list-inside space-y-2 mt-4">
                    <li><InlineMath math="\mu(\emptyset) = 0" /></li>
                    <li>
                        <b><InlineMath math="\sigma" />-加法性</b>: 互いに素な可算集合列 <InlineMath math="\{A_n\}_{n=1}^\infty \subset \mathcal{A}" /> （すなわち <InlineMath math="i \neq j \implies A_i \cap A_j = \emptyset" />）に対して、
                        <BlockMath math="\mu\left(\bigcup_{n=1}^\infty A_n\right) = \sum_{n=1}^\infty \mu(A_n)" />
                    </li>
                </ul>
                <p className="mt-4">
                    組 <InlineMath math="(X, \mathcal{A}, \mu)" /> を<b>測度空間</b> (measure space) と呼ぶ。
                </p>
            </ContentBox>

            <p>
                測度の例として、非常に基本的なものを2つ紹介します。
            </p>

            <ContentBox type="example" title="Example 1.2-1 (数え上げ測度とディラック測度)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>数え上げ測度</b> (counting measure): 可測集合 <InlineMath math="A" /> に含まれる元の個数を測度とする。
                        <BlockMath math="\mu(A) = |A| = \begin{cases} \text{A の元の個数} & (\text{有限個のとき}) \\ +\infty & (\text{無限個のとき}) \end{cases}" />
                    </li>
                    <li>
                        <b>ディラック測度</b> (Dirac measure): 特定の点 <InlineMath math="x_0 \in X" /> を含んでいるかどうかを判定する測度。
                        <BlockMath math="\delta_{x_0}(A) = \begin{cases} 1 & (x_0 \in A) \\ 0 & (x_0 \notin A) \end{cases}" />
                    </li>
                </ul>
                <p className="mt-4">
                    これらが <InlineMath math="\sigma" />-加法性を満たすことは、定義に基づいて容易に確認できます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本的性質</h2>

            <p>
                測度の定義から直接導かれる、重要で直感的な性質をいくつか挙げます。
            </p>

            <ContentBox type="proposition" title="Proposition 1.2-1 (単調性)">
                <p>
                    <InlineMath math="A, B \in \mathcal{A}" /> で <InlineMath math="A \subset B" /> ならば、<InlineMath math="\mu(A) \leq \mu(B)" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="B" /> を互いに素な2つの集合の和として <InlineMath math="B = A \cup (B \setminus A)" /> と表せる。
                    測度の <InlineMath math="\sigma" />-加法性（特に有限加法性）より、
                </p>
                <BlockMath math="\mu(B) = \mu(A) + \mu(B \setminus A)" />
                <p>
                    である。<InlineMath math="\mu(B \setminus A) \geq 0" /> なので、<InlineMath math="\mu(B) \geq \mu(A)" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                集合が互いに素でない場合、和集合の測度は各測度の和を抑える役割を果たします。
            </p>

            <ContentBox type="proposition" title="Proposition 1.2-2 (劣 σ-加法性)">
                <p>
                    任意の可測集合列 <InlineMath math="\{A_n\}_{n=1}^\infty \subset \mathcal{A}" /> に対して、
                    <BlockMath math="\mu\left(\bigcup_{n=1}^\infty A_n\right) \leq \sum_{n=1}^\infty \mu(A_n)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="B_1 = A_1" />、<InlineMath math="B_n = A_n \setminus (\bigcup_{i=1}^{n-1} A_i)" /> と定義すると、
                    <InlineMath math="\{B_n\}" /> は互いに素な列であり、<InlineMath math="\bigcup A_n = \bigcup B_n" /> かつ <InlineMath math="B_n \subset A_n" /> を満たす。
                    測度の <InlineMath math="\sigma" />-加法性と単調性より、
                </p>
                <BlockMath math="\mu\left(\bigcup A_n\right) = \mu\left(\bigcup B_n\right) = \sum \mu(B_n) \leq \sum \mu(A_n)" />
                <p>
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                測度の最も強力な性質の一つは、集合列の単調限界に対する連続性です。
            </p>

            <ContentBox type="theorem" title="Theorem 1.2-1 (測度の連続性)">
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <b>下からの連続性</b>: 単調増加列 <InlineMath math="A_1 \subset A_2 \subset \cdots" /> に対して、
                        <BlockMath math="\mu\left(\bigcup_{n=1}^\infty A_n\right) = \lim_{n\to\infty} \mu(A_n)" />
                    </li>
                    <li>
                        <b>上からの連続性</b>: 単調減少列 <InlineMath math="A_1 \supset A_2 \supset \cdots" /> かつ <b><InlineMath math="\mu(A_1) < \infty" /></b> に対して、
                        <BlockMath math="\mu\left(\bigcap_{n=1}^\infty A_n\right) = \lim_{n\to\infty} \mu(A_n)" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="B_1 = A_1" />、<InlineMath math="B_n = A_n \setminus A_{n-1}" /> (<InlineMath math="n \geq 2" />) とすると、<InlineMath math="\{B_n\}" /> は互いに素であり <InlineMath math="\bigcup_{i=1}^\infty A_i = \bigcup_{i=1}^\infty B_i" /> かつ <InlineMath math="A_n = \bigcup_{i=1}^n B_i" /> である。
                    <InlineMath math="\sigma" />-加法性より、
                </p>
                <BlockMath math="\mu\left(\bigcup A_i\right) = \sum_{i=1}^\infty \mu(B_i) = \lim_{n\to\infty} \sum_{i=1}^n \mu(B_i) = \lim_{n\to\infty} \mu(A_n)" />
                <p>
                    (2) <InlineMath math="C_n = A_1 \setminus A_n" /> とおくと、<InlineMath math="C_1 \subset C_2 \subset \cdots" /> は単調増加列である。
                    (1) を適用すると、
                </p>
                <BlockMath math="\begin{aligned} \mu\left(\bigcup C_n\right) &= \lim_{n\to\infty} \mu(C_n) \\ &= \lim_{n\to\infty} (\mu(A_1) - \mu(A_n)) \\ &= \mu(A_1) - \lim_{n\to\infty} \mu(A_n) \end{aligned}" />
                <p>
                    一方、ド・モルガンの法則より <InlineMath math="\bigcup C_n = A_1 \setminus (\bigcap A_n)" /> なので、
                </p>
                <BlockMath math="\mu\left(\bigcup C_n\right) = \mu(A_1) - \mu\left(\bigcap A_n\right)" />
                <p>
                    これらを等置して整理すれば結論を得る。前提条件 <InlineMath math="\mu(A_1) < \infty" /> は、無限大の引き算を避けるために必要である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="有限測度の仮定の重要性">
                <p>
                    上からの連続性において、<InlineMath math="\mu(A_1) < \infty" /> という仮定は不可欠です。
                    例えば、<InlineMath math="\mathbb{R}" /> 上の数え上げ測度において <InlineMath math="A_n = [n, \infty)" /> とすると、
                    <InlineMath math="\bigcap A_n = \emptyset" /> なので <InlineMath math="\mu(\bigcap A_n) = 0" /> ですが、
                    すべての <InlineMath math="n" /> で <InlineMath math="\mu(A_n) = \infty" /> であるため、極限は <InlineMath math="\infty" /> となり一致しません。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>測度</b>は集合の「大きさ」を定義する関数で、空集合で 0、可算加法性を持つ。</li>
                    <li>測度は<b>単調性</b>や<b>劣 <InlineMath math="\sigma" />-加法性</b>といった直感的に妥当な性質を持つ。</li>
                    <li><b>測度の連続性</b>は、集合列の極限操作と測度計算の順序交換を正当化する重要な道具である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
