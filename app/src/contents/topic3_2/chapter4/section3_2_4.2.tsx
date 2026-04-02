import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PrimitiveFunctionsAndIntegration() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                実関数の積分と同様に、複素関数においても「微分して元の関数に戻る関数」、すなわち原始関数の概念を導入できます。
                原始関数が存在する場合、複素積分は始点と終点のみで決まるという極めて強力な性質を持ちます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">原始関数</h2>

            <p>
                まずは原始関数の定義を明確にしましょう。これは領域上の各点での性質として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 4.2-1 (原始関数)">
                <p>
                    領域 <InlineMath math="U" /> 上の正則関数 <InlineMath math="F(z)" /> が、全ての <InlineMath math="z \in U" /> に対して
                </p>
                <BlockMath math="F'(z) = f(z)" />
                <p>
                    を満たすとき、<InlineMath math="F(z)" /> を <InlineMath math="f(z)" /> の <strong>原始関数</strong>（primitive function）という。
                </p>
            </ContentBox>

            <p>
                原始関数が存在するとき、積分計算は実積分の微積分学の基本定理と同様の形で行うことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 (原始関数による積分)">
                <p>
                    関数 <InlineMath math="f(z)" /> が領域 <InlineMath math="U" /> 内で原始関数 <InlineMath math="F(z)" /> を持つとする。
                    このとき、<InlineMath math="U" /> 内の任意の曲線 <InlineMath math="\gamma" />（始点を <InlineMath math="z_0" />、終点を <InlineMath math="z_1" /> とする）に対して、
                </p>
                <BlockMath math="\int_\gamma f(z) \, dz = F(z_1) - F(z_0)" />
                <p>
                    が成立する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    曲線のパラメータ表示を <InlineMath math="\gamma(t) \quad (a \leq t \leq b)" /> とし、合成関数の微分法を用いる。
                </p>
                <BlockMath math="\begin{aligned} \int_\gamma f(z) \, dz &= \int_a^b f(\gamma(t)) \gamma'(t) \, dt \\ &= \int_a^b F'(\gamma(t)) \gamma'(t) \, dt \\ &= \int_a^b \frac{d}{dt} F(\gamma(t)) \, dt \\ &= \left[ F(\gamma(t)) \right]_a^b = F(z_1) - F(z_0) \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、原始関数さえ見つかれば、積分の値が「経路の形状」に依存せず、端点だけで決まることを保証しています。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (原始関数を用いた計算)">
                <p>
                    複素数 <InlineMath math="z^n \quad (n \neq -1)" /> の積分を考えましょう。
                    この関数の原始関数は、実関数の場合と同様に <InlineMath math="F(z) = \frac{z^{n+1}}{n+1}" /> です。
                </p>
                <p>
                    原点 <InlineMath math="0" /> から点 <InlineMath math="1+i" /> までの任意の経路 <InlineMath math="\gamma" /> に沿った <InlineMath math="z^2" /> の積分は、
                </p>
                <BlockMath math="\int_\gamma z^2 \, dz = \left[ \frac{z^3}{3} \right]_0^{1+i} = \frac{(1+i)^3}{3} = \frac{2i(1+i)}{3} = \frac{-2 + 2i}{3}" />
                <p>
                    となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">経路独立性</h2>

            <p>
                原始関数の存在は、積分が経路によらないことと密接に関連しています。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-2 (経路独立性の同値条件)">
                <p>
                    領域 <InlineMath math="U" /> 上で連続な関数 <InlineMath math="f(z)" /> に対して、次の(1)〜(3)は互いに同値である。
                </p>
                <ul className="list-decimal list-inside space-y-2">
                    <li><InlineMath math="f(z)" /> は <InlineMath math="U" /> 上で原始関数を持つ。</li>
                    <li><InlineMath math="f(z)" /> の積分は <InlineMath math="U" /> 内で経路によらず、端点のみで定まる。</li>
                    <li><InlineMath math="U" /> 内の任意の閉曲線 <InlineMath math="\gamma" /> に対して、<InlineMath math="\oint_\gamma f(z) \, dz = 0" />。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="\Rightarrow" /> (2) は Theorem 4.2-1 より明らか。(2) <InlineMath math="\Rightarrow" /> (3) は、閉曲線の始点と終点を一致させればよい。(3) <InlineMath math="\Rightarrow" /> (1) は、固定した点 <InlineMath math="z_0" /> からの積分 <InlineMath math="F(z) = \int_{z_0}^z f(\zeta) d\zeta" /> を定義することで示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、閉曲線上での積分が <InlineMath math="0" /> になることと、原始関数が存在することが表裏一体であることを示しています。
                次節 §4.3 で学ぶ「コーシーの積分定理」は、正則関数であれば特定の条件下でこの閉路積分が <InlineMath math="0" /> になることを保証する衝撃的な定理です。
            </p>

            <ContentBox type="remark" title="1/z の落とし穴">
                <p>
                    <InlineMath math="f(z) = 1/z" /> を原点を除いた全平面 <InlineMath math="\mathbb{C} \setminus \{0\}" /> で考えると、
                    単位円周上の積分は <InlineMath math="2\pi i \neq 0" /> となります。
                    これは、この領域全体では <InlineMath math="1/z" /> が 1 価の原始関数（対数関数）を持たないことと対応しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>原始関数 <InlineMath math="F'(z) = f(z)" /> が存在するとき、積分の値は <InlineMath math="F(z_1) - F(z_0)" /> となる。</li>
                    <li>このとき、積分は経路の形に依存しない（経路独立性）。</li>
                    <li>経路独立性は、任意の閉曲線での積分が <InlineMath math="0" /> であることと同値である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
