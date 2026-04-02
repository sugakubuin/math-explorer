import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CompactnessDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                位相空間論における最も重要な概念の一つが<strong>コンパクト性 (Compactness)</strong> です。
                一変数の微積分学において、有界閉区間上の連続関数が最大値・最小値を持つという性質（最大値定理）を学んだかと思いますが、コンパクト性はこの「有界閉集合」が持つ本質的な性質を、一般的な位相空間へと抽象化したものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コンパクト性の定義</h2>

            <p>
                コンパクト性を定義するためには、まず「集合を覆う（被覆する）」という概念が必要です。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (開被覆と有限部分被覆)">
                <p>
                    位相空間 <InlineMath math="X" /> とその部分集合 <InlineMath math="K \subset X" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>
                        <InlineMath math="X" /> の開集合族 <InlineMath math="\mathcal{U} = \{U_\lambda\}_{\lambda \in \Lambda}" /> が <InlineMath math="K" /> の<strong>開被覆 (Open cover)</strong> であるとは、
                        <BlockMath math="K \subset \bigcup_{\lambda \in \Lambda} U_\lambda" />
                        が成り立つことをいう。
                    </li>
                    <li>
                        開被覆 <InlineMath math="\mathcal{U}" /> の部分族 <InlineMath math="\mathcal{U}' \subset \mathcal{U}" /> がそれ自身として再び <InlineMath math="K" /> の開被覆となっているとき、
                        これを <InlineMath math="\mathcal{U}" /> の<strong>部分被覆 (Subcover)</strong> と呼ぶ。特に <InlineMath math="\mathcal{U}'" /> が有限個の集合からなる場合、<strong>有限部分被覆</strong>と呼ぶ。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-1 (開被覆の例)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> において、集合 <InlineMath math="K = (0, 1)" /> を考えます。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>
                        開集合族 <InlineMath math="\mathcal{U} = \{ (1/n, 1) \mid n = 2, 3, \dots \}" /> は <InlineMath math="K" /> の開被覆です。
                    </li>
                    <li>
                        このとき、例えば有限個の開集合を集めた <InlineMath math="\mathcal{U}' = \{ (1/2, 1), (1/3, 1), (1/100, 1) \}" /> は <InlineMath math="K" /> の点 <InlineMath math="1/100" /> より小さい部分を覆えないため、部分被覆（有限部分被覆）にはなりません。
                    </li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                これを用いて、コンパクト性を次のように定義します。
            </p>

            <ContentBox type="definition" title="Definition 7.1-2 (コンパクト空間・コンパクト集合)">
                <p>
                    位相空間 <InlineMath math="X" /> が<strong>コンパクト (Compact)</strong> であるとは、
                    <InlineMath math="X" /> の<strong>任意の</strong>開被覆が、少なくとも一つの<strong>有限部分被覆</strong>を持つことをいう。
                </p>
                <p className="mt-2">
                    また、部分集合 <InlineMath math="K \subset X" /> がコンパクトであるとは、相対位相において <InlineMath math="K" /> がコンパクト空間であることをいう。
                    これは、「<InlineMath math="K" /> の任意の開被覆（<InlineMath math="X" /> の開集合によるもの）が <InlineMath math="K" /> の有限部分被覆を持つ」ことと同値である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-2 (コンパクトな集合の例)">
                <p>
                    後ほど詳しく学びますが、典型的なコンパクト集合の例は以下の通りです：
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>実数直線の閉区間 <InlineMath math="[a, b]" /> （有界閉区間）</li>
                    <li>有限個の点からなる集合</li>
                    <li>ユークリッド空間内の閉球や球面</li>
                </ul>
                <p className="mt-2">
                    これらの集合は、どのように細かい開集合で覆おうとしても、必ず有限個のセットで全体を覆い尽くせることが証明されています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="コンパクト性の直感的な意味">
                <p>
                    コンパクト性は、一見すると非常に抽象的で分かりにくい定義ですが、直感的には<strong>「広がりすぎず、有限に近い性質を持っている」</strong>ことを意味します。
                </p>
                <p className="mt-2">
                    例えば、無限集合であっても「どのように細かい開集合で覆ったとしても、そのうちの有限個選ぶだけで全体を覆い尽くせる」という強力な有限性を保証しています。
                    この性質により、局所的な性質（各点の近傍で成り立つこと）を、空間全体という大域的な性質へと引き上げることが可能になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限集合はコンパクト</h2>

            <p>
                最も単純なコンパクト集合の例は、有限個の点からなる集合です。
            </p>

            <ContentBox type="proposition" title="Proposition 7.1-1 (有限集合のコンパクト性)">
                <p>
                    位相空間 <InlineMath math="X" /> における任意の有限部分集合 <InlineMath math="K = \{x_1, x_2, \dots, x_n\}" /> はコンパクトである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="K" /> の任意の開被覆 <InlineMath math="\mathcal{U} = \{U_\lambda\}_{\lambda \in \Lambda}" /> をとる。
                    被覆の定義より、各点 <InlineMath math="x_i \in K" /> に対して、それを含む開集合 <InlineMath math="U_{\lambda_i} \in \mathcal{U}" /> が少なくとも一つ存在する (<InlineMath math="\lambda_i \in \Lambda" />)。
                </p>
                <p className="mt-2">
                    ここで、これらの有限個の開集合を集めた族 <InlineMath math="\mathcal{U}' = \{U_{\lambda_1}, U_{\lambda_2}, \dots, U_{\lambda_n}\}" /> を考えると、
                    <BlockMath math="K = \{x_1, \dots, x_n\} \subset U_{\lambda_1} \cup \dots \cup U_{\lambda_n}" />
                    が成り立つ。よって、<InlineMath math="\mathcal{U}'" /> は <InlineMath math="\mathcal{U}" /> の有限部分被覆である。
                    任意の開被覆に対して有限部分被覆がとれたため、<InlineMath math="K" /> はコンパクトである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-1 (コンパクトでない集合の例)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" />（通常の位相）において、開区間 <InlineMath math="I = (0, 1)" /> はコンパクトではありません。
                </p>
                <p className="mt-2">
                    実際、<InlineMath math="U_n = (1/n, 1)" /> (<InlineMath math="n = 2, 3, \dots" />) という開集合族を考えると、
                    <BlockMath math="\bigcup_{n=2}^\infty U_n = (0, 1) = I" />
                    であり、これは <InlineMath math="I" /> の開被覆です。
                    しかし、どのような有限個の <InlineMath math="U_n" /> を選んでも、それらの和集合はある <InlineMath math="N" /> に対する <InlineMath math="U_N = (1/N, 1)" /> と一致し、
                    <InlineMath math="(0, 1/N]" /> の部分を覆うことができません。
                    したがって、有限部分被覆が存在しない開被覆が一つ見つかったため、<InlineMath math="I" /> はコンパクトではありません。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>開被覆</strong>：集合を覆う開集合の族。</li>
                    <li><strong>コンパクト</strong>：任意の開被覆が必ず有限部分被覆を持つ。</li>
                    <li>有限集合は常にコンパクトである。</li>
                    <li>開区間 <InlineMath math="(0, 1)" /> など、境界を含まない（あるいは無限に広がる）集合は一般にコンパクトではない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
