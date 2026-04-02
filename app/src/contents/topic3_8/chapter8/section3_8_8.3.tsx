import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GroupActionStabilizer() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、ある要素に着目して「その要素がどこへ動くか」を表す軌道について学びました。本節では逆に、ある要素に着目して「その要素を動かさない（固定する）群の要素はどれか」に焦点を当てます。これが<b>固定部分群（Stabilizer）</b>の概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固定部分群の定義と性質</h2>

            <p>
                群の作用において、特定の要素を微動だにさせないような群の要素を集めると、それ自身が部分群をなすことがわかります。
            </p>

            <ContentBox type="definition" title="Definition 8.3-1 (固定部分群)">
                <p>
                    群 <InlineMath math="G" /> が集合 <InlineMath math="X" /> に作用しているとする。<InlineMath math="x \in X" /> に対して、<InlineMath math="x" /> を動かさないような <InlineMath math="G" /> の要素全体の集合を、<InlineMath math="x" /> の<b>固定部分群（stabilizer）</b>と呼び、<InlineMath math="G_x" /> または <InlineMath math="\mathrm{Stab}_G(x)" /> と書く。
                </p>
                <BlockMath math="G_x = \{g \in G \mid g \cdot x = x\}" />
            </ContentBox>

            <p>
                名前が示唆するように、この集合 <InlineMath math="G_x" /> は単なる部分集合ではなく、実際に <InlineMath math="G" /> の部分群をなします。このことを証明しておきましょう。
            </p>

            <ContentBox type="proposition" title="Proposition 8.3-1">
                <p>
                    任意の <InlineMath math="x \in X" /> に対して、固定部分群 <InlineMath math="G_x" /> は <InlineMath math="G" /> の部分群である（すなわち <InlineMath math="G_x \leq G" />）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    部分群の判定条件を満たすことを確認する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 mb-4">
                    <li>
                        <b>単位元の存在：</b> 作用の公理より、単位元 <InlineMath math="e" /> はすべての要素を固定する（<InlineMath math="e \cdot x = x" />）。よって <InlineMath math="e \in G_x" /> である。
                    </li>
                    <li>
                        <b>積で閉じていること：</b> <InlineMath math="g, h \in G_x" /> とすると、<InlineMath math="g \cdot x = x" /> かつ <InlineMath math="h \cdot x = x" /> である。このとき作用の公理から
                        <BlockMath math="(gh) \cdot x = g \cdot (h \cdot x) = g \cdot x = x" />
                        となるため、<InlineMath math="gh \in G_x" /> である。
                    </li>
                    <li>
                        <b>逆元で閉じていること：</b> <InlineMath math="g \in G_x" /> とすると <InlineMath math="g \cdot x = x" /> である。この両辺に左から <InlineMath math="g^{-1}" /> を作用させると、
                        <BlockMath math="\begin{aligned} g^{-1} \cdot (g \cdot x) = g^{-1} \cdot x &\implies (g^{-1}g) \cdot x = g^{-1} \cdot x \\ &\implies x = g^{-1} \cdot x \end{aligned}" />
                        となるため、<InlineMath math="g^{-1} \in G_x" /> である。
                    </li>
                </ul>
                <p>
                    以上より、<InlineMath math="G_x" /> は <InlineMath math="G" /> の部分群である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ある要素の「動かなさ」を担保する変換たちが、自ずと群の構造を持つというのは非常に美しい性質です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固定部分群の例</h2>

            <p>
                抽象的な定義を理解するために、前節までにも登場した具体的な作用について、それぞれの固定部分群が何に対応するのかを計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 8.3-1 (共役作用における中心化群)">
                <p>
                    群 <InlineMath math="G" /> 自身への共役作用 <InlineMath math="g \cdot a = gag^{-1}" /> を考える（ここでは作用を受ける要素を <InlineMath math="a" /> と書く）。
                </p>
                <p>
                    要素 <InlineMath math="a \in G" /> の固定部分群 <InlineMath math="G_a" /> を計算すると、
                </p>
                <BlockMath math="G_a = \{g \in G \mid gag^{-1} = a\} = \{g \in G \mid ga = ag\}" />
                <p>
                    となる。これは <InlineMath math="a" /> と可換な（交換法則を満たす）要素全体からなる部分群であり、群論においては<b>中心化群（centralizer）</b>と呼ばれ、<InlineMath math="C_G(a)" /> と表記される。
                </p>
                <p>
                    たとえば、対称群 <InlineMath math="S_3" /> において <InlineMath math="a = (12)" /> の中心化群 <InlineMath math="C_{S_3}((12))" /> を求めると、<InlineMath math="(12)" /> と交換可能な要素は <InlineMath math="\{e, (12)\}" /> のみである。
                    また、<InlineMath math="a = e" />（単位元）を中心とする場合、すべての要素は単位元と可換であるから、<InlineMath math="C_G(e) = G" />（群全体）となる。
                </p>
            </ContentBox>

            <p>
                共役作用において「固定される」ということは、「可換である」ことと同じ意味を持つことがわかります。次に、対称群の自然な作用での例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 8.3-2 (対称群の作用における固定部分群)">
                <p>
                    対称群 <InlineMath math="S_n" /> が集合 <InlineMath math="X = \{1, 2, \ldots, n\}" /> に自然に作用しているとする。
                </p>
                <p>
                    要素 <InlineMath math="1 \in X" /> の固定部分群 <InlineMath math="\mathrm{Stab}_{S_n}(1)" /> は、「<InlineMath math="1" /> を <InlineMath math="1" /> 自身に写し、残りの <InlineMath math="2, 3, \ldots, n" /> はどのように並べ替えてもよい」ような置換の全体である。これは実質的に <InlineMath math="\{2, 3, \ldots, n\}" /> 上の対称群と同じ構造を持つため、
                </p>
                <BlockMath math="\mathrm{Stab}_{S_n}(1) \cong S_{n-1}" />
                <p>
                    となる。
                </p>
                <p>
                    また、集合に対する作用を考えることもできる。例えば、<InlineMath math="S_4" /> が <InlineMath math="\{1, 2, 3, 4\}" /> の部分集合全体に作用するとき、部分集合 <InlineMath math="\{1, 2\}" /> を固定する（すなわち <InlineMath math="\sigma(\{1, 2\}) = \{1, 2\}" /> となる）ような置換の集合を求める。
                    このとき <InlineMath math="\{1, 2\}" /> の内部での入れ替え（2通り）と、<InlineMath math="\{3, 4\}" /> の内部での入れ替え（2通り）は許されるため、固定部分群の要素数は <InlineMath math="2 \times 2 = 4" /> 個となる。具体的には <InlineMath math="\{e, (12), (34), (12)(34)\}" /> であり、これはクラインの四元群 <InlineMath math="V_4" /> と同型な部分群である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="軌道と固定部分群の相補性">
                <p>
                    軌道 <InlineMath math="G \cdot x" /> が「<InlineMath math="x" /> がどれだけ広く動くか」を表すのに対し、固定部分群 <InlineMath math="G_x" /> は「どれだけ多くの要素が <InlineMath math="x" /> を動かさずに留めるか」を表しています。直感的には、<InlineMath math="x" /> が広く動くほどそれを固定する要素は少なくなり、逆に <InlineMath math="x" /> があまり動かないならそれを固定する要素は多いはずです。次節では、この直感的な「トレードオフ」の関係を厳密な定理として定式化します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>群 <InlineMath math="G" /> の作用において、要素 <InlineMath math="x \in X" /> を固定する <InlineMath math="G" /> の要素全体を固定部分群 <InlineMath math="G_x" /> と呼ぶ。</li>
                    <li>固定部分群 <InlineMath math="G_x" /> は必ず群 <InlineMath math="G" /> の部分群となる（<InlineMath math="G_x \leq G" />）。</li>
                    <li>共役作用による要素 <InlineMath math="a" /> の固定部分群は、<InlineMath math="a" /> と可換な要素からなる中心化群 <InlineMath math="C_G(a)" /> である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}