import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FundamentalTheoremOfCalculus() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分積分学の最大の結果である「基本定理」は、ルベーグ積分の枠組みでその真の姿を現します。
                関数が <b>絶対連続</b> であるとき、微分と積分は完全な逆操作として結ばれます。
                本節では、その定理の内容と、成立するための必要十分条件について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微積分学の基本定理（ルベーグ版）</h2>

            <p>
                リーマン積分における基本定理は連続性を前提としていましたが、ルベーグ版では絶対連続性が本質的な役割を果たします。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-1 (微分積分学の基本定理)">
                <p>
                    区間 <InlineMath math="[a, b]" /> 上の関数 <InlineMath math="F" /> について、以下の 3 条件は互いに同値である。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><InlineMath math="F" /> は <b>絶対連続</b> である。</li>
                    <li><InlineMath math="F" /> は a.e. で微分可能であり、その導関数 <InlineMath math="F' \in L^1(a, b)" /> は
                        <BlockMath math="F(x) = F(a) + \int_a^x F'(t) \, dt" />
                        を満たす。</li>
                    <li>ある可積分関数 <InlineMath math="f \in L^1(a, b)" /> が存在して
                        <BlockMath math="F(x) = F(a) + \int_a^x f(t) \, dt" />
                        と書ける。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <b>(1 <InlineMath math="\implies" /> 2)</b>: <InlineMath math="F" /> が絶対連続であれば、Proposition 6.2-1 より有界変動である。
                    有界変動関数は二つの単調関数の差で書け、単調関数はルベーグの定理より a.e. で微分可能であるから、<InlineMath math="F" /> は a.e. で微分可能である。
                    また、<InlineMath math="F'(t)" /> がルベーグ可積分であること、および積分による復元が可能であることを示すには、ルベーグの微分定理 (§6.3) を用いる。
                    絶対連続性の定義から導かれる不等式評価により、極限操作と積分の順序交換が正当化され、等号が得られる。
                </p>
                <p className="mt-4">
                    <b>(2 <InlineMath math="\implies" /> 3)</b>: <InlineMath math="f = F'" /> と置けば、仮定そのものである。
                </p>
                <p className="mt-4">
                    <b>(3 <InlineMath math="\implies" /> 1)</b>: <InlineMath math="F(x) = F(a) + \int_a^x f(t) \, dt" /> と書けるとき、任意の区間族 <InlineMath math="\{(a_i, b_i)\}" /> に対して
                    <BlockMath math="\begin{aligned} \sum_{i=1}^n |F(b_i) - F(a_i)| &= \sum_{i=1}^n \left| \int_{a_i}^{b_i} f(t) \, dt \right| \\ &\leq \sum_{i=1}^n \int_{a_i}^{b_i} |f(t)| \, dt \\ &= \int_{\bigcup (a_i, b_i)} |f(t)| \, dt \end{aligned}" />
                    が成り立つ。
                    積分の絶対連続性（Chapter 3 定理）より、測度 <InlineMath math="\lambda(\bigcup (a_i, b_i)) = \sum (b_i - a_i)" /> が十分小さければ、この積分値はいくらでも小さくできる。
                    したがって <InlineMath math="F" /> は絶対連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本定理の重要性</h2>

            <p>
                この定理は、単なる計算テクニックを超えた、理論的な深みを持っています。
            </p>

            <ContentBox type="remark" title="導関数の復元">
                <p>
                    有界変動であっても絶対連続でない関数の場合、導関数を積分しても元の関数には戻りません。
                    これは、関数の中に「微分では捉えきれないジャンプや特異な変化」が含まれていることを意味します。
                    「絶対連続である」ということは、その関数に <b>不自然な情報の欠落がない</b> ことを保証しているのです。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-1 (リーマン積分との対比)">
                <p>
                    リーマン積分では復元できないような「激しく不連続な導関数」を持つ場合でも、その導関数がルベーグ可積分であれば、この定理を用いて元の関数を復元することができます。
                    これにより、物理学における衝撃波や急激な変化を含む現象も、数学的に厳密に扱うことが可能になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>絶対連続性</b> は、微分と積分が逆操作であることを保証するための <b>必要十分条件</b> である。</li>
                    <li>絶対連続な関数は、その導関数の積分によって完全に再現できる。</li>
                    <li>これは、ルベーグ積分論が微積分の理論を完成させた瞬間の一つであると言える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
