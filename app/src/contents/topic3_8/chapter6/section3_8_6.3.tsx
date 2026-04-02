import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ThirdIsomorphismTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                第三同型定理は、商群の商という「2段階の構造」が、より単純な1段階の商群と同型になることを示しています。
                この定理を用いると、複雑に重なった商群の構造を、元の群のより大きな正規部分群による商へと一気に単純化できます。
                分数の約分のような直感的な理解が可能であるため、商群の構造を整理する際に非常に役立ちます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第三同型定理</h2>

            <p className="leading-relaxed mb-4">
                定理の主張を確認しましょう。正規部分群の包含関係 <InlineMath math="K \subseteq H \subseteq G" /> が、商群の階層構造をどのように規定するかを記述します。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (第三同型定理)">
                <p>
                    <InlineMath math="G" /> を群とし、<InlineMath math="K" /> と <InlineMath math="H" /> を <InlineMath math="G" /> の正規部分群で、<InlineMath math="K \subseteq H" /> を満たすものとする。このとき、以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>
                        <InlineMath math="H/K \trianglelefteq G/K" /> である。
                    </li>
                    <li>
                        次の同型が成り立つ：
                        <BlockMath math="(G/K)/(H/K) \cong G/H" />
                    </li>
                </ol>
            </ContentBox>

            <p className="leading-relaxed my-4">
                ここで、この定理が持つ「分数の約分」のような直感的な意味を整理しておきましょう。
            </p>

            <ContentBox type="remark" title="商群の約分としての直感">
                <p>
                    第三同型定理の主張 <InlineMath math="(G/K)/(H/K) \cong G/H" /> は、
                    形式的には分数の計算 <BlockMath math="\frac{G/K}{H/K} = \frac{G}{H}" /> と非常によく似ています。
                    もちろん、群論における商は数値の割り算ではありませんが、「共通の法 <InlineMath math="K" /> を取り除いて考える」という意味で、このアナロジーは非常に強力な直感を与えてくれます。
                    複雑な式を見かけたら、まずはこの「約分」のイメージを思い浮かべると良いでしょう。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                この定理も、§6.1 で学んだ第一同型定理を用いることで、鮮やかに証明することができます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    第一同型定理を用いて証明する。
                </p>
                <ul className="list-decimal list-inside space-y-6 mt-6">
                    <li>
                        <b>写像の構成</b>：<br />
                        写像 <InlineMath math="\psi: G/K \to G/H" /> を <InlineMath math="\psi(gK) = gH" /> と定義する。
                    </li>
                    <li>
                        <b>ウェルディファインド性（Well-definedness）</b>：<br />
                        <InlineMath math="g_1K = g_2K" /> とすると <InlineMath math="g_1^{-1}g_2 \in K" /> である。
                        条件 <InlineMath math="K \subseteq H" /> より <InlineMath math="g_1^{-1}g_2 \in H" /> も成り立つため、<InlineMath math="g_1H = g_2H" /> となる。
                        よって、写像の値は代表元の取り方に依らず定まる。
                    </li>
                    <li>
                        <b>準同型性と全射性</b>：<br />
                        定義より明らかに <InlineMath math="\psi" /> は全射準同型である。
                    </li>
                    <li>
                        <b>核（Kernel）</b>：<br />
                        <BlockMath math="\begin{aligned} \ker\psi &= \{ gK \in G/K \mid \psi(gK) = eH = H \} \\ &= \{ gK \in G/K \mid gH = H \} \\ &= \{ gK \in G/K \mid g \in H \} = H/K \end{aligned}" />
                        したがって、核は <InlineMath math="H/K" /> である。
                    </li>
                    <li>
                        <b>結論</b>：<br />
                        第一同型定理より、<InlineMath math="\ker\psi \trianglelefteq G/K" /> かつ <InlineMath math="(G/K)/\ker\psi \cong \mathrm{Im}\,\psi" /> である。
                        これに上記の結果を代入すれば、<InlineMath math="H/K \trianglelefteq G/K" /> および <InlineMath math="(G/K)/(H/K) \cong G/H" /> が得られる。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-6">
                では、具体例を通じて「分数の約分」のような振る舞いを実際に計算してみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例</h2>

            <p className="leading-relaxed mb-4">
                まずは、最も親しみやすい整数の加法群を例に挙げます。
            </p>

            <ContentBox type="example" title="Example 6.3-1 (整数加法群)">
                <p>
                    <InlineMath math="G = \mathbb{Z}" />、<InlineMath math="H = 2\mathbb{Z}" />、<InlineMath math="K = 6\mathbb{Z}" /> とすると、<InlineMath math="6\mathbb{Z} \subseteq 2\mathbb{Z}" /> である。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        商群 <InlineMath math="G/K = \mathbb{Z}/6\mathbb{Z}" /> 、<InlineMath math="G/H = \mathbb{Z}/2\mathbb{Z}" /> 。
                    </li>
                    <li>
                        商群 <InlineMath math="H/K = 2\mathbb{Z}/6\mathbb{Z} \cong \mathbb{Z}/3\mathbb{Z}" /> 。
                    </li>
                    <li>
                        第三同型定理より：
                        <BlockMath math="(\mathbb{Z}/6\mathbb{Z})/(\mathbb{Z}/3\mathbb{Z}) \cong \mathbb{Z}/2\mathbb{Z}" />
                        となり、位数が <InlineMath math="6/3 = 2" /> で整合していることが確認できる。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-4">
                続いて、対称群の正規部分群の列を用いる例です。より複雑な群の構造を整理する際にもこの定理が役立ちます。
            </p>

            <ContentBox type="example" title="Example 6.3-2 (S_4, A_4, V_4)">
                <p>
                    <InlineMath math="G = S_4" />、<InlineMath math="H = A_4" />、<InlineMath math="K = V_4" />（クラインの4群）とする。
                    ここで <InlineMath math="V_4 \trianglelefteq A_4 \trianglelefteq S_4" /> である。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        <InlineMath math="S_4/V_4" /> は位数 <InlineMath math="24/4 = 6" /> の群。
                    </li>
                    <li>
                        <InlineMath math="A_4/V_4" /> は位数 <InlineMath math="12/4 = 3" /> の群。
                    </li>
                    <li>
                        第三同型定理より：
                        <BlockMath math="(S_4/V_4)/(A_4/V_4) \cong S_4/A_4 \cong \mathbb{Z}/2\mathbb{Z}" />
                        が得られ、複雑な商群のさらなる商が簡単な群（位数2）になる。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-6">
                第三同型定理は、群を「割っていく」操作が、包含関係にある正規部分群に対して一貫性を持っていることを示しています。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>第三同型定理の内容は、直感的には「分数の約分」のように振る舞う。</li>
                    <li><InlineMath math="(G/K)/(H/K) \cong G/H" /> という式は、商群の構造を簡略化する際の強力な公式である。</li>
                    <li>正規部分群の包含関係 <InlineMath math="K \subseteq H \subseteq G" /> があるとき、商をとる操作の順序を入れ替えられることを示している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
