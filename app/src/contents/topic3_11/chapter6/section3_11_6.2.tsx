import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionTraceInvariance() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で縮約として定義したトレースが、いかなる基底の取り方にも依存しない空間そのものの本質的な性質（不変量）であることを厳密に示します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">トレースの基底独立性</h2>

            <p className="leading-relaxed">
                行列の対角成分の和という計算方法は基底に依存して見えますが、実はどの基底を選んで計算しても必ず同じ値になります。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 6.2-1 (トレースの基底不変性)"
            >
                <p>
                    線形写像 <InlineMath math="f : V \to V" /> のトレース <InlineMath math="\mathrm{tr}(f) = \sum_i e^i(f(e_i))" /> は、基底 <InlineMath math="\{e_i\}" /> の選び方によらない。
                    言い換えると、<InlineMath math="f" /> の行列表現 <InlineMath math="A" /> に対して、そのトレース <InlineMath math="\mathrm{tr}(A)" /> は基底変換によって不変である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    古い基底 <InlineMath math="\{e_i\}" /> から新しい基底 <InlineMath math="\{e'_j\}" /> への変換行列を <InlineMath math="P" /> とし、<InlineMath math="e'_j = \sum_k P_{kj} e_k" /> とする。このとき、双対基底は逆行列 <InlineMath math="P^{-1}" /> を用いて <InlineMath math="(e')^j = \sum_l (P^{-1})^j{}_l e^l" /> と変換される（§3.1 Proposition 3.1-1）。
                </p>
                <p>
                    新しい基底におけるトレースを計算すると、
                    <BlockMath math="\begin{aligned} \sum_j (e')^j(f(e'_j)) &= \sum_j \left( \sum_l (P^{-1})^j{}_l e^l \right) \left( f\left( \sum_k P_{kj} e_k \right) \right) \\ &= \sum_j \sum_l \sum_k (P^{-1})^j{}_l P_{kj} \, e^l(f(e_k)) \end{aligned}" />
                    となる。ここで和の順序を入れ替え、<InlineMath math="\sum_j P_{kj} (P^{-1})^j{}_l = (P P^{-1})_{kl} = \delta_{kl}" />（クロネッカーのデルタ）であることを用いると、
                    <BlockMath math="\sum_{k,l} \delta_{kl} \, e^l(f(e_k)) = \sum_k e^k(f(e_k))" />
                    となり、これは古い基底で計算したトレースに他ならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.2-1 (基底を変えてトレースを計算)"
            >
                <p>
                    <InlineMath math="f" /> の標準基底における行列が <InlineMath math="A = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}" /> であるとする。このとき <InlineMath math="\mathrm{tr}(A) = 3 + 2 = 5" /> である。
                </p>
                <p>
                    新しい基底として <InlineMath math="v_1 = (1, 1)^T, v_2 = (1, -1)^T" /> を選ぶ。変換行列 <InlineMath math="P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" />、その逆行列 <InlineMath math="P^{-1} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" /> である。
                    新しい基底における行列 <InlineMath math="A' = P^{-1} A P" /> を計算すると、
                    <BlockMath math="A P = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 4 & 2 \\ 3 & -1 \end{pmatrix}" />
                    <BlockMath math="A' = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 4 & 2 \\ 3 & -1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 7 & 1 \\ 1 & 3 \end{pmatrix} = \begin{pmatrix} 3.5 & 0.5 \\ 0.5 & 1.5 \end{pmatrix}" />
                    となる。新しい行列のトレースは <InlineMath math="\mathrm{tr}(A') = 3.5 + 1.5 = 5" /> であり、元のトレースと完全に一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">トレースの代数的性質</h2>

            <p className="leading-relaxed">
                トレースが持つ重要な代数的性質をまとめます。とくに「巡回性」は物理学（例えば量子力学の期待値計算など）で頻繁に用いられます。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 6.2-1 (トレースの性質)"
            >
                <p>
                    <InlineMath math="f, g \in \mathrm{End}(V)" /> およびスカラー <InlineMath math="\lambda \in \mathbb{k}" /> に対して、以下が成り立つ。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="\mathrm{tr}(f + g) = \mathrm{tr}(f) + \mathrm{tr}(g)" /></li>
                    <li><InlineMath math="\mathrm{tr}(\lambda f) = \lambda \mathrm{tr}(f)" /></li>
                    <li><InlineMath math="\mathrm{tr}(f \circ g) = \mathrm{tr}(g \circ f)" /> <strong>（巡回性）</strong></li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    線形性（和とスカラー倍）については、トレースが縮約（線形写像）として定義されていることから明らかである。
                </p>
                <p>
                    巡回性 <InlineMath math="\mathrm{tr}(f \circ g) = \mathrm{tr}(g \circ f)" /> を示す。基底を用いて計算すると、
                    <BlockMath math="\mathrm{tr}(f \circ g) = \sum_i e^i(f(g(e_i)))" />
                    である。ここで <InlineMath math="g(e_i) = \sum_j e^j(g(e_i)) e_j" /> と展開し代入すると、
                    <BlockMath math="\sum_i e^i \left( f\left( \sum_j e^j(g(e_i)) e_j \right) \right) = \sum_{i,j} e^i(f(e_j)) e^j(g(e_i))" />
                    となる。スカラー同士の積は可換であるため順序を入れ替えると、
                    <BlockMath math="\begin{aligned} \sum_{i,j} e^j(g(e_i)) e^i(f(e_j)) &= \sum_j e^j \left( g\left( \sum_i e^i(f(e_j)) e_i \right) \right) \\ &= \sum_j e^j(g(f(e_j))) = \mathrm{tr}(g \circ f) \end{aligned}" />
                    となり、巡回性が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.2-2 (巡回性の確認)"
            >
                <p>
                    行列 <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}" /> と <InlineMath math="B = \begin{pmatrix} 4 & 0 \\ 1 & 2 \end{pmatrix}" /> を考える。
                </p>
                <p>
                    積 <InlineMath math="AB" /> は
                    <BlockMath math="AB = \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 4 & 0 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 6 & 4 \\ 3 & 6 \end{pmatrix}" />
                    であり、<InlineMath math="\mathrm{tr}(AB) = 6 + 6 = 12" />。
                </p>
                <p>
                    積 <InlineMath math="BA" /> は
                    <BlockMath math="BA = \begin{pmatrix} 4 & 0 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix} = \begin{pmatrix} 4 & 8 \\ 1 & 8 \end{pmatrix}" />
                    であり、<InlineMath math="\mathrm{tr}(BA) = 4 + 8 = 12" />。行列の積自体は非可換（<InlineMath math="AB \neq BA" />）であるが、トレースをとると一致することが確認できる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>トレース <InlineMath math="\mathrm{tr}(f)" /> は基底の取り方に依存しない、線形写像の固有の量である（<InlineMath math="\mathrm{tr}(P^{-1}AP) = \mathrm{tr}(A)" />）。</li>
                    <li>トレースは線形写像であり、和とスカラー倍を保つ。</li>
                    <li>トレースは積の順序を巡回的に入れ替えても値が変わらない（<InlineMath math="\mathrm{tr}(AB) = \mathrm{tr}(BA)" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
