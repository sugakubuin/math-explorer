import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SolvableGroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                群論の発展において、「代数方程式がベキ根（ルート）で解けるか」という問いは最大の関心事の一つでした。
                この問題を解決するために導入されたのが「可解群」という概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">交換子群と群の可換化</h2>

            <p className="leading-relaxed">
                群がどの程度「非可換」であるかを測るための指標が、交換子群です。
            </p>

            <ContentBox type="definition" title="Definition 4.4-1 (交換子群)">
                <p>
                    群 <InlineMath math="G" /> の 2 つの元 <InlineMath math="a, b" /> の<b>交換子 (Commutator)</b> を <InlineMath math="[a, b] = a^{-1}b^{-1}ab" /> と定義する。
                    すべての交換子によって生成される部分群
                    <BlockMath math="[G, G] = \langle \{ a^{-1}b^{-1}ab \mid a, b \in G \} \rangle" />
                    を、<InlineMath math="G" /> の<b>交換子群 (Derived subgroup)</b> という。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 4.4-1 (交換子群の性質)">
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><InlineMath math="[G, G]" /> は常に <InlineMath math="G" /> の正規部分群である（<InlineMath math="[G, G] \trianglelefteq G" />）。</li>
                    <li>商群 <InlineMath math="G/[G, G]" /> は必ずアーベル群となる。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <b>正規性の証明</b>：<br />
                        任意の <InlineMath math="g \in G" /> と交換子 <InlineMath math="[a, b]" /> に対し、
                        <BlockMath math="\begin{aligned} g[a, b]g^{-1} &= g(a^{-1}b^{-1}ab)g^{-1} \\ &= (gag^{-1})^{-1}(gbg^{-1})^{-1}(gag^{-1})(gbg^{-1}) \\ &= [gag^{-1}, gbg^{-1}] \end{aligned}" />
                        となる。これは再び交換子の形をしているため、<InlineMath math="[G, G]" /> に属する（生成系の共役が再び属するため）。
                    </li>
                    <li>
                        <b>可換性の証明</b>：<br />
                        商群 <InlineMath math="G/[G, G]" /> の任意の元 <InlineMath math="\bar{a}, \bar{b}" /> に対し、その交換子を考えると、
                        <BlockMath math="\bar{a}^{-1}\bar{b}^{-1}\bar{a}\bar{b} = \overline{a^{-1}b^{-1}ab} = \overline{[a, b]}" />
                        となる。<InlineMath math="[a, b] \in [G, G]" /> であるから、商群においてこれは単位元 <InlineMath math="\bar{e}" /> に一致する。
                        したがって、<InlineMath math="\bar{a}\bar{b} = \bar{b}\bar{a}" /> が成り立ち、<InlineMath math="G/[G, G]" /> はアーベル群である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4 leading-relaxed">
                つまり <InlineMath math="[G, G]" /> は、群から非可換性を「削ぎ落とす」ために必要な最小限の部分群であると言えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可解群の定義</h2>

            <p className="leading-relaxed">
                交換子群を次々と作っていくことで、「いつか単位元のみの群に到達する」ような群を可解群と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 4.4-2 (導来列と可解群)">
                <p>
                    <InlineMath math="G^{(0)} = G, \ G^{(1)} = [G, G], \ G^{(2)} = [G^{(1)}, G^{(1)}], \dots" /> のように、交換子群を順に取っていく操作で得られる列を<b>導来列 (Derived series)</b>という。
                    ある整数 <InlineMath math="k" /> が存在して
                    <BlockMath math="G^{(k)} = \{e\}" />
                    となるとき、群 <InlineMath math="G" /> は<b>可解群 (Solvable group)</b> であるという。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-1 (可解群の具体例)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>アーベル群</b>：<br />
                        定義より <InlineMath math="[a, b] = e" /> が常に成り立つので、<InlineMath math="G^{(1)} = \{e\}" /> となり、必ず可解群である。
                    </li>
                    <li>
                        <b>3次対称群 <InlineMath math="S_3" /></b>：<br />
                        <InlineMath math="G^{(1)} = [S_3, S_3] = A_3" />（交代群）であり、<InlineMath math="A_3" /> はアーベル群なので <InlineMath math="G^{(2)} = [A_3, A_3] = \{e\}" /> となる。
                        よって <InlineMath math="S_3" /> は可解群である。
                    </li>
                    <li>
                        <b>4次対称群 <InlineMath math="S_4" /></b>：<br />
                        導来列は <InlineMath math="S_4 \supset A_4 \supset V_4 \supset \{e\}" /> となり、<InlineMath math="G^{(3)} = \{e\}" /> となるため可解群である。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-2 (可解でない群：S5)">
                <p>
                    5次対称群 <InlineMath math="S_5" /> の交換子群は交代群 <InlineMath math="A_5" /> である。
                    しかし、<InlineMath math="A_5" /> は単純群であり、かつ非可換である。
                </p>
                <p className="mt-2">
                    単純群はそれより小さな正規部分群（＝自分以外の交換子群）を持てないため、
                    <BlockMath math="G^{(1)} = A_5, \ G^{(2)} = [A_5, A_5] = A_5, \ \dots" />
                    と、いつまで経っても <InlineMath math="\{e\}" /> に到達しない。したがって、<InlineMath math="S_5" /> は可解群ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガロア理論への展望</h2>

            <p className="leading-relaxed">
                なぜ「可解 (Solvable)」という名前がついているのでしょうか。
                それは、代数方程式の解法と群の構造が密接にリンクしているからです。
            </p>

            <ContentBox type="note" title="代数方程式と群論のつながり">
                <p>
                    ガロア（Evariste Galois）は、「方程式が根号（ベキ根）で解けるための必要十分条件は、その方程式に対応する群（ガロア群）が<b>可解群</b>であること」を証明しました。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 font-semibold">
                    <li>2次・3次・4次の方程式のガロア群は、それぞれ <InlineMath math="S_2, S_3, S_4" /> に関連し、これらはすべて<b>可解群</b>である。</li>
                    <li>5次以上の一般の方程式のガロア群は <InlineMath math="S_n \ (n \geq 5)" /> になり得て、これらは<b>可解群ではない</b>。</li>
                </ul>
                <p className="mt-4">
                    この劇的な事実により、数学者たちは「5次方程式に解の公式が存在しない」ことを、群の可解性を調べるという強力な手法で解決しました。
                </p>
                <p className="text-sm italic mt-2 text-slate-500">
                    ※ 詳細は「体論」で学びます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>交換子群の列（導来列）が最終的に単位元に収束する群を可解群という。</li>
                    <li>アーベル群や <InlineMath math="S_3, S_4" /> は可解群の代表例である。</li>
                    <li><InlineMath math="S_5" /> 以上は可解群ではなく、これが「5次方程式の解の公式」が存在しない理由の根幹にある。</li>
                    <li>可解群の概念は、群論が方程式論と結びつき、現代代数学へと進化する契機となった。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
