import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PropertiesOfConditionalExpectation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                測度論的に定義された条件付き期待値は、通常の期待値が持つ性質を継承するだけでなく、条件となる σ-加法族の階層構造に応じた特徴的な性質を持っています。
                本節では、計算や理論展開において基礎となる 4 つの重要な性質を整理します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本性質</h2>

            <p className="leading-relaxed">
                条件付き期待値は、線形性や単調性といった基本的な演算規則を満たします。これらは通常の期待値の性質が、σ-加法族の各要素上での積分の一致条件を通じて引き継がれたものです。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1 (条件付き期待値の性質)">
                <p>
                    可積分な確率変数 <InlineMath math="X, Y" /> と部分 σ-加法族 <InlineMath math="\mathcal{G}, \mathcal{H}" /> に対し、次が成り立つ：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><b>線形性</b>：<InlineMath math="E[aX + bY \mid \mathcal{G}] = aE[X \mid \mathcal{G}] + bE[Y \mid \mathcal{G}]" /> a.s.</li>
                    <li><b>単調性</b>：<InlineMath math="X \leq Y" /> a.s. ならば <InlineMath math="E[X \mid \mathcal{G}] \leq E[Y \mid \mathcal{G}]" /> a.s.</li>
                    <li><b>タワー性</b>（Tower property）：<InlineMath math="\mathcal{H} \subset \mathcal{G}" /> ならば、
                        <BlockMath math="E[E[X \mid \mathcal{G}] \mid \mathcal{H}] = E[X \mid \mathcal{H}] \quad \text{a.s.}" />
                    </li>
                    <li><b>取り出し性</b>（Taking out what is known）：<InlineMath math="Z" /> が <InlineMath math="\mathcal{G}" />-可測で <InlineMath math="ZX" /> が可積分ならば、
                        <BlockMath math="E[ZX \mid \mathcal{G}] = Z E[X \mid \mathcal{G}] \quad \text{a.s.}" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    各性質について、Definition 5.2-1 の 2 条件（<InlineMath math="\mathcal{G}" />-可測性と積分の一致）を確認することで示す。
                </p>
                <div className="space-y-4">
                    <p>
                        <b>1. 線形性</b>：
                        右辺は <InlineMath math="\mathcal{G}" />-可測関数の線形結合であるから <InlineMath math="\mathcal{G}" />-可測である。
                        積分については、期待値の線形性より、任意の <InlineMath math="G \in \mathcal{G}" /> に対して
                        <BlockMath math="\begin{aligned} \int_G (aE[X|\mathcal{G}] + bE[Y|\mathcal{G}]) dP &= a \int_G X dP + b \int_G Y dP \\ &= \int_G (aX + bY) dP \end{aligned}" />
                        が成り立つ。
                    </p>
                    <p>
                        <b>2. 単調性</b>：
                        <InlineMath math="X \leq Y" /> a.s. とし、<InlineMath math="A = \{E[X|\mathcal{G}] > E[Y|\mathcal{G}]\} \in \mathcal{G}" /> とおく。
                        積分の一致条件より <InlineMath math="\int_A (E[X|\mathcal{G}] - E[Y|\mathcal{G}]) dP = \int_A (X - Y) dP" /> である。
                        右辺は <InlineMath math="X \leq Y" /> より <InlineMath math="\leq 0" /> だが、左辺は <InlineMath math="A" /> 上で正の実数の積分であるため、<InlineMath math="P(A) = 0" /> でなければならない。
                    </p>
                    <p>
                        <b>3. タワー性</b>：
                        <InlineMath math="Z = E[E[X | \mathcal{G}] | \mathcal{H}]" /> とおく。
                        定義より <InlineMath math="Z" /> は <InlineMath math="\mathcal{H}" />-可測である。
                        <InlineMath math="\mathcal{H} \subset \mathcal{G}" /> より、任意の <InlineMath math="H \in \mathcal{H}" /> は <InlineMath math="\mathcal{G}" /> にも属するため、
                        <BlockMath math="\int_H Z dP = \int_H E[X|\mathcal{G}] dP = \int_H X dP" />
                        となり（1つ目は <InlineMath math="\mathcal{H}" />、2つ目は <InlineMath math="\mathcal{G}" /> に関する積分一致による）、<InlineMath math="Z = E[X|\mathcal{H}]" /> を得る。
                    </p>
                    <p>
                        <b>4. 取り出し性</b>：
                        <InlineMath math="Z = I_A" />（<InlineMath math="A \in \mathcal{G}" />）の場合、任意の <InlineMath math="G \in \mathcal{G}" /> に対し
                        <BlockMath math="\begin{aligned} \int_G I_A E[X|\mathcal{G}] dP &= \int_{G \cap A} E[X|\mathcal{G}] dP \\ &= \int_{G \cap A} X dP = \int_G I_A X dP \end{aligned}" />
                        が成り立つ。単関数から非負関数への極限、さらに一般の可測関数へと拡張することで一般の <InlineMath math="Z" /> についても示される。
                    </p>
                </div>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                タワー性は、「精細な情報に基づいて予測したものを、さらに粗い情報で平均し直すと、最初から粗い情報で予測した結果と一致する」という直感を反映しています。
            </p>

            <ContentBox type="example" title="Example 5.3-1 (タワー性の適用)">
                <p>
                    確率変数 <InlineMath math="Y, Z" /> に対し、<InlineMath math="Z" /> の情報が <InlineMath math="Y" /> の情報の一部である（例えば <InlineMath math="Z = Y^2" /> など、<InlineMath math="\sigma(Z) \subset \sigma(Y)" /> である）場合を考える。
                </p>
                <p>
                    このとき、<InlineMath math="E[E[X \mid Y] \mid Z] = E[X \mid Z]" /> が成り立つ。
                    これは、一旦 <InlineMath math="Y" /> の値を知った上での期待値を出し、それをさらに <InlineMath math="Z" /> の情報のみで平均化すると、結局は <InlineMath math="Z" /> の情報しか使っていないことになる、という縮退のプロセスを表している。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="取り出し性の重要性">
                <p>
                    取り出し性（Property 4）は、「条件 <InlineMath math="\mathcal{G}" /> の下では、<InlineMath math="\mathcal{G}" />-可測な変数 <InlineMath math="Z" /> は定数のように振る舞う」という性質を数学的に表現したものです。
                    これにより、条件付き期待値の記号の中から既知の情報を外へ括り出すことができ、複雑な期待値計算を劇的に簡略化できます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                これらの性質を駆使することで、期待値のみならず、分布そのものに対する条件付けへと議論を広げることができます。
                次節では、本章の締めくくりとして、条件付き分布と密度の概念を整理します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>条件付き期待値は線形性と単調性を持ち、通常の期待値と同様の演算が可能である。</li>
                    <li>タワー性は、情報の階層構造（情報の縮退）に関する一貫性を保証する。</li>
                    <li>条件となる σ-加法族に対して既知の情報（可測な変数）は、期待値の外に取り出すことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
