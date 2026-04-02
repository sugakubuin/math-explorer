import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IndependenceOfEvents() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率論における「独立性」は、ある事象が起こったという情報が、他の事象の起こりやすさに影響を与えないという概念を数学的に定式化したものです。
                本節では、まず 2 つの事象の独立性を定義し、それを複数の事象が関わる相互独立性の概念へと拡張します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">独立性の定義</h2>

            <p className="leading-relaxed">
                2 つの事象が互いに無関係であることを表す最も基本的な定義は、積事象の確率がそれぞれの確率の積になるという関係式です。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (2 事象の独立性)">
                <p>
                    確率空間 <InlineMath math="(\Omega, \mathcal{F}, P)" /> 上の 2 つの事象 <InlineMath math="A, B" /> が、
                    <BlockMath math="P(A \cap B) = P(A)P(B)" />
                    を満たすとき、<InlineMath math="A" /> と <InlineMath math="B" /> は<b>独立</b>（independent）であるという。
                </p>
                <p>
                    この定義は、<InlineMath math="P(B) > 0" /> のときに条件付き確率を用いて <InlineMath math="P(A \mid B) = P(A)" /> と書き直すことができ、
                    「<InlineMath math="B" /> が起きたという情報を得ても <InlineMath math="A" /> の確率は変わらない」という直感と一致する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                抽象的な定義を具体的に理解するために、サイコロ投げの例を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.1-1 (サイコロ投げにおける独立性)">
                <p>
                    1 つのサイコロを投げるとき、事象 <InlineMath math="A = \{2, 4, 6\}" />（偶数が出る）と事象 <InlineMath math="B = \{1, 2\}" />（2 以下が出る）を考える。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="P(A) = 3/6 = 1/2" />, <InlineMath math="P(B) = 2/6 = 1/3" />。</li>
                    <li>積事象は <InlineMath math="A \cap B = \{2\}" /> であるから、<InlineMath math="P(A \cap B) = 1/6" />。</li>
                    <li>一方で <InlineMath math="P(A)P(B) = (1/2) \cdot (1/3) = 1/6" /> となり、両者は一致する。</li>
                </ul>
                <p>
                    したがって、事象 <InlineMath math="A" /> と <InlineMath math="B" /> は独立である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                3 つ以上の事象の集まりについては、どの 2 つをとっても独立である（対独立）だけでは不十分であり、より強い条件として「相互独立性」を定義します。
            </p>

            <ContentBox type="definition" title="Definition 4.1-2 (相互独立性)">
                <p>
                    事象族 <InlineMath math="\{A_i\}" /> が<b>相互独立</b>（mutually independent）であるとは、
                    任意の有限部分集合 <InlineMath math="\{A_{i_1}, \ldots, A_{i_k}\}" /> に対して、
                    <BlockMath math="P(A_{i_1} \cap \cdots \cap A_{i_k}) = P(A_{i_1}) \cdots P(A_{i_k})" />
                    が成り立つことをいう。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                対独立と相互独立の違いを示す重要な反例を紹介します。
            </p>

            <ContentBox type="example" title="Example 4.1-2 (対独立だが相互独立でない例)">
                <p>
                    標本空間 <InlineMath math="\Omega = \{1, 2, 3, 4\}" />（各点の確率は <InlineMath math="1/4" />）上で、
                    <InlineMath math="A = \{1, 2\}, B = \{1, 3\}, C = \{1, 4\}" /> と定義する。
                </p>
                <p>
                    このとき、どの 2 つの積事象も確率 <InlineMath math="P(\{1\}) = 1/4" /> であり、<InlineMath math="P(A)P(B) = 1/4" /> 等と一致するため、これらは対独立である。
                    しかし、3 つの積事象 <InlineMath math="P(A \cap B \cap C) = 1/4" /> に対し、
                    積 <InlineMath math="P(A)P(B)P(C) = 1/8" /> は一致しないため、これらは相互独立ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">独立性と積事象</h2>

            <p className="leading-relaxed">
                ある事象が独立であるという性質は、その事象が「起こったか否か」という情報の無関連性を意味するため、補事象に対してもその構造が保存されます。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1 (補事象の独立性)">
                <p>
                    事象 <InlineMath math="A" /> と <InlineMath math="B" /> が独立ならば、<InlineMath math="A" /> と <InlineMath math="B^c" /> も独立である。
                    また、<InlineMath math="A^c" /> と <InlineMath math="B^c" /> も独立である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="A" /> と <InlineMath math="B^c" /> の独立性を示す。積事象の分解公式を用いると、
                    <BlockMath math="P(A \cap B^c) = P(A) - P(A \cap B)" />
                    仮定より <InlineMath math="P(A \cap B) = P(A)P(B)" /> であるから、
                    <BlockMath math="\begin{aligned} P(A \cap B^c) &= P(A) - P(A)P(B) = P(A)(1 - P(B)) \\ &= P(A)P(B^c) \end{aligned}" />
                    となり、定義を満たす。他も同様に示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、この事象の独立性の概念を確率変数へと拡張し、より汎用的な議論を進めます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>2 つの事象の独立性は、積事象の確率が個別の確率の積となることで定義される。</li>
                    <li>相互独立性は強い条件であり、対独立（どの 2 つをとっても独立）であっても相互独立とは限らない。</li>
                    <li>事象の独立性は、その補事象との組み合わせにおいても維持される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
