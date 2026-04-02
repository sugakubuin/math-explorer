import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DistributionFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率変数が定義されたら、次に必要になるのは「その変数がどのような値をどのような確率で取るか」を記述する方法です。
                これを最も一般的に、かつ簡潔に表現するのが<b>分布関数</b>です。
                分布関数は、確率変数のあらゆる統計的性質を保持しており、確率論における中心的な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分布関数の定義</h2>

            <p className="leading-relaxed">
                分布関数は、確率変数が「ある値以下」になる確率を、その値を引数とする関数として定義したものです。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (分布関数)">
                <p>
                    確率変数 <InlineMath math="X" /> に対して、次のように定義される関数 <InlineMath math="F_X : \mathbb{R} \to [0, 1]" /> を、
                    <InlineMath math="X" /> の<b>累積分布関数</b>（cumulative distribution function, CDF）または単に<b>分布関数</b>と呼ぶ。
                    <BlockMath math="F_X(x) = P(X \leq x) = P(\{\omega \in \Omega \mid X(\omega) \leq x \})" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この関数を用いることで、任意の半開区間の確率を <InlineMath math="P(a < X \leq b) = F_X(b) - F_X(a)" /> と計算できるようになります。
                分布関数は、常に次のような数学的性質を備えています。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-1 (分布関数の性質)">
                <p>
                    任意の分布関数 <InlineMath math="F(x)" /> は、次の 3 つの性質を満たす。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li><b>単調非減少性</b>：<InlineMath math="x < y \Longrightarrow F(x) \leq F(y)" /></li>
                    <li>
                        <b>右連続性</b>：任意の <InlineMath math="x \in \mathbb{R}" /> に対して、
                        <InlineMath math="\lim_{y \searrow x} F(y) = F(x)" />
                    </li>
                    <li>
                        <b>漸近的な値</b>：
                        <InlineMath math="\lim_{x \to -\infty} F(x) = 0" /> かつ <InlineMath math="\lim_{x \to +\infty} F(x) = 1" />
                    </li>
                </ol>
                <p>
                    逆に、これら 3 条件を満たす関数は、ある確率変数の分布関数として実現できることが知られている。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. 集合の包含関係 <InlineMath math="\{X \leq x\} \subset \{X \leq y\}" /> と確率の単調性から直ちに従う。
                </p>
                <p>
                    2. <InlineMath math="y_n \searrow x" /> となる減少列 <InlineMath math="\{y_n\}" /> をとる。
                    事象の列 <InlineMath math="A_n = \{X \leq y_n\}" /> は減少列であり、その共通部分は <InlineMath math="\bigcap A_n = \{X \leq x\}" /> となる。
                    確率測度の連続性（Theorem 1.3-1）より、
                    <BlockMath math="\begin{aligned} \lim_{n \to \infty} F(y_n) &= \lim_{n \to \infty} P(A_n) = P(\bigcap A_n) \\ &= P(X \leq x) = F(x) \end{aligned}" />
                    となり、右連続性が示される。
                </p>
                <p>
                    3. 同様に、<InlineMath math="x_n \to \infty" /> に対して <InlineMath math="A_n = \{X \leq x_n\}" /> の和事象が標本空間 <InlineMath math="\Omega" /> に、
                    <InlineMath math="-x_n \to -\infty" /> に対して <InlineMath math="B_n = \{X \leq -x_n\}" /> の積事象が空集合 <InlineMath math="\emptyset" /> になることを利用する。
                    <InlineMath math="P(\Omega) = 1" /> および <InlineMath math="P(\emptyset) = 0" /> より、題意が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                離散的な値を取る確率変数の場合、分布関数は「階段上」の形になります。
            </p>

            <ContentBox type="example" title="Example 2.2-1 (離散分布の分布関数)">
                <p>
                    確率 <InlineMath math="P(X=k) = (1/2)^k" /> （<InlineMath math="k=1, 2, \ldots" />）を取る幾何分布の一種を考える。
                    このとき分布関数は、各整数点でジャンプする関数となる：
                    <BlockMath math="F(x) = \sum_{k=1}^{\lfloor x \rfloor} \left(\frac{1}{2}\right)^k = 1 - \left(\frac{1}{2}\right)^{\lfloor x \rfloor} \quad (x \geq 1)" />
                    ここで <InlineMath math="\lfloor x \rfloor" /> は最大整数関数である。
                    不連続点において、関数が「左側」ではなく「右側」とつながっている（右連続性）ことを確認できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分布の一意性</h2>

            <p className="leading-relaxed">
                分布関数が重要視される最大の理由は、それが「確率分布のすべて」を決定するからです。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-2 (分布の一意決定)">
                <p>
                    2 つの確率変数 <InlineMath math="X, Y" /> の分布関数がすべての <InlineMath math="x \in \mathbb{R}" /> で一致するならば、
                    それらは同じ分布を持つ。すなわち、任意のボレル集合 <InlineMath math="B \in \mathcal{B}(\mathbb{R})" /> に対して
                    <BlockMath math="P(X \in B) = P(Y \in B)" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    半直線 <InlineMath math="(-\infty, x]" /> の集合族は <InlineMath math="\pi" />-システム（共通部分で閉じている族）を形成し、
                    これらが生成する <InlineMath math="\sigma" />-加法族はボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> に一致する。
                    測度の一意性定理（Topic 3-3 参照）によれば、生成系の上で測度が一致していれば、生成された <InlineMath math="\sigma" />-加法族全体でも一致する。
                    したがって、分布関数の一致は全ボレル集合上での確率の一致を保証する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="左連続性と右連続性">
                <p>
                    教科書によっては分布関数を <InlineMath math="P(X < x)" /> と定義し、左連続としているものもありますが、
                    現代の確率論（および本コース）では <InlineMath math="P(X \leq x)" /> による右連続な定義が標準的です。
                    定義の違いによって特定の値でのジャンプの扱いが変わるため注意が必要ですが、理論の本質は変わりません。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節以降では、分布関数が「階段状」になる<b>離散型</b>と、滑らかな「密度」を持つ<b>連続型</b>の 2 つの主要なタイプについて詳しく見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>分布関数は <InlineMath math="P(X \leq x)" /> で定義され、確率変数の全ての情報を保持する。</li>
                    <li>分布関数は単調非減少であり、<b>右連続性</b>を持ち、範囲 <InlineMath math="[0, 1]" /> をとる。</li>
                    <li>分布関数が全実数上で一致することは、確率変数の分布が同一であることを意味する。</li>
                    <li>測度論的な「確率の連続性」を用いることで、分布関数の性質を厳密に証明できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
