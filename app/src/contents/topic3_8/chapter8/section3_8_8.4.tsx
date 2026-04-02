import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GroupActionOrbitStabilizer() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までに、群の作用において「要素がどこへ動くか」を表す軌道と、「要素を動かさない群の要素」を表す固定部分群について学びました。本節では、この 2 つの概念を結びつける群論における最も重要な定理の 1 つである<b>軌道・固定群定理（Orbit-Stabilizer Theorem）</b>を証明し、その強力な応用である「類等式」を導きます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">軌道・固定群定理</h2>

            <p>
                軌道・固定群定理は、ある要素の軌道の大きさと、その要素の固定部分群の指数の間に密接な関係があることを主張します。
            </p>

            <ContentBox type="theorem" title="Theorem 8.4-1 (軌道・固定群定理)">
                <p>
                    群 <InlineMath math="G" /> が集合 <InlineMath math="X" /> に作用しているとする。任意の <InlineMath math="x \in X" /> に対して、軌道 <InlineMath math="G \cdot x" /> の要素数（濃度）は、固定部分群 <InlineMath math="G_x" /> の <InlineMath math="G" /> における指数に等しい。すなわち、
                </p>
                <BlockMath math="|G \cdot x| = [G : G_x]" />
                <p>
                    が成り立つ。特に <InlineMath math="G" /> が有限群の場合、ラグランジュの定理より次が成り立つ：
                </p>
                <BlockMath math="|G| = |G \cdot x| \cdot |G_x|" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="G" /> を固定部分群 <InlineMath math="G_x" /> で割った左剰余類の集合を <InlineMath math="G/G_x = \{gG_x \mid g \in G\}" /> とする。<InlineMath math="[G : G_x] = |G/G_x|" /> であるから、<InlineMath math="G/G_x" /> から軌道 <InlineMath math="G \cdot x" /> への全単射が存在することを示せばよい。
                </p>
                <p>
                    写像 <InlineMath math="f : G/G_x \to G \cdot x" /> を
                </p>
                <BlockMath math="f(gG_x) = g \cdot x" />
                <p>
                    と定義する。これが代表元の取り方によらず well-defined であり、かつ単射であることを同時に示す。
                </p>
                <BlockMath math="\begin{aligned} gG_x = hG_x &\iff h^{-1}g \in G_x \\ &\iff (h^{-1}g) \cdot x = x \\ &\iff h^{-1} \cdot (g \cdot x) = x \\ &\iff g \cdot x = h \cdot x \end{aligned}" />
                <p>
                    この同値性より、<InlineMath math="gG_x = hG_x" /> ならば <InlineMath math="f(gG_x) = f(hG_x)" />（well-defined）、かつ <InlineMath math="f(gG_x) = f(hG_x)" /> ならば <InlineMath math="gG_x = hG_x" />（単射）が成り立つ。
                </p>
                <p>
                    また、軌道 <InlineMath math="G \cdot x" /> の任意の要素は <InlineMath math="g \cdot x" /> の形をしているため、<InlineMath math="f(gG_x) = g \cdot x" /> より <InlineMath math="f" /> は明らかに全射である。
                </p>
                <p>
                    したがって <InlineMath math="f" /> は全単射であり、<InlineMath math="|G/G_x| = |G \cdot x|" /> が示された。有限群の場合はラグランジュの定理 <InlineMath math="|G| = [G:G_x]|G_x|" /> を代入して <InlineMath math="|G| = |G \cdot x| \cdot |G_x|" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、「ある要素が広く動く（軌道が大きい）ほど、その要素を固定する群の要素は少ない（固定部分群が小さい）」という直感的なトレードオフを厳密な等式で表しています。
            </p>

            <ContentBox type="example" title="Example 8.4-1 (対称群の作用への応用)">
                <p>
                    対称群 <InlineMath math="S_n" /> が <InlineMath math="X = \{1, 2, \ldots, n\}" /> に自然に作用している場合を考える。
                </p>
                <p>
                    要素 <InlineMath math="1 \in X" /> の軌道は <InlineMath math="X" /> 全体であるから、軌道の大きさは <InlineMath math="|S_n \cdot 1| = n" /> である。一方、前節で見たように、<InlineMath math="1" /> の固定部分群は <InlineMath math="\mathrm{Stab}_{S_n}(1) \cong S_{n-1}" /> であり、その大きさは <InlineMath math="(n-1)!" /> である。
                </p>
                <p>
                    軌道・固定群定理の等式 <InlineMath math="|G| = |G \cdot x| \cdot |G_x|" /> に当てはめると、
                </p>
                <BlockMath math="|S_n| = n \cdot (n-1)! = n!" />
                <p>
                    となり、対称群の位数が <InlineMath math="n!" /> であることと完全に整合していることが確認できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">類等式と p-群への応用</h2>

            <p>
                軌道・固定群定理を群 <InlineMath math="G" /> 自身の共役作用に適用し、さらに軌道分解の性質を組み合わせることで、「類等式」と呼ばれる群の位数を分解する強力な公式が得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 8.4-2 (類等式)">
                <p>
                    有限群 <InlineMath math="G" /> の中心を <InlineMath math="Z(G) = \{z \in G \mid zg = gz \text{ for all } g \in G\}" /> とする。このとき、群の位数 <InlineMath math="|G|" /> は次のように分解される（<b>類等式：Class Equation</b>）。
                </p>
                <BlockMath math="|G| = |Z(G)| + \sum_{a} [G : C_G(a)]" />
                <p>
                    ここで、和は <InlineMath math="Z(G)" /> に含まれない共役類（大きさが 2 以上である共役類）から代表元 <InlineMath math="a" /> を 1 つずつ選んで取る。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    群 <InlineMath math="G" /> をそれ自身への共役作用 <InlineMath math="g \cdot x = gxg^{-1}" /> によって軌道分解する。§8.2 の命題より、<InlineMath math="G" /> は互いに素な軌道（共役類）の直和になるため、その要素数について
                </p>
                <BlockMath math="|G| = \sum_{x \in R} |G \cdot x|" />
                <p>
                    が成り立つ（<InlineMath math="R" /> は各共役類の代表元からなる集合）。
                </p>
                <p>
                    ここで、軌道・固定群定理より <InlineMath math="|G \cdot x| = [G : G_x]" /> である。共役作用における固定部分群 <InlineMath math="G_x" /> は中心化群 <InlineMath math="C_G(x)" /> であるから、<InlineMath math="|G \cdot x| = [G : C_G(x)]" /> となる。
                </p>
                <p>
                    軌道（共役類）の大きさが 1 である、すなわち <InlineMath math="|G \cdot x| = 1" /> となる条件を考える。<InlineMath math="|G \cdot x| = 1 \iff G \cdot x = \{x\} \iff \text{すべての } g \text{ について } gxg^{-1} = x \iff x \in Z(G)" />。したがって、大きさが 1 の共役類はちょうど <InlineMath math="Z(G)" /> の要素と一対一に対応し、その総数は <InlineMath math="|Z(G)|" /> 個である。
                </p>
                <p>
                    以上をまとめると、大きさが 1 の軌道の和として <InlineMath math="|Z(G)|" /> をくくり出し、残りの大きさが 2 以上の軌道について和を取ることで、
                </p>
                <BlockMath math="|G| = |Z(G)| + \sum_{a \notin Z(G)} [G : C_G(a)]" />
                <p>
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                類等式が具体的にどのように計算されるか、例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 8.4-2 (類等式の具体例)">
                <p>
                    <b>1. 対称群 <InlineMath math="S_3" /> の類等式：</b><br />
                    <InlineMath math="S_3" /> の位数は 6 である。<InlineMath math="Z(S_3) = \{e\}" /> なので <InlineMath math="|Z(S_3)| = 1" />。
                    非自明な共役類は <InlineMath math="\{(12), (13), (23)\}" />（大きさ 3）と <InlineMath math="\{(123), (132)\}" />（大きさ 2）の 2 つである。
                    したがって類等式は <InlineMath math="6 = 1 + 3 + 2" /> となる。
                </p>
                <p>
                    <b>2. 二面体群 <InlineMath math="D_4" /> の類等式：</b><br />
                    <InlineMath math="D_4" /> の位数は 8 である。中心は <InlineMath math="Z(D_4) = \{e, r^2\}" /> なので <InlineMath math="|Z(D_4)| = 2" />。
                    残りの 6 つの要素は、<InlineMath math="\{r, r^3\}" />、<InlineMath math="\{s, r^2s\}" />、<InlineMath math="\{rs, r^3s\}" /> という 3 つの共役類（それぞれ大きさ 2）に分かれる。
                    したがって類等式は <InlineMath math="8 = 2 + 2 + 2 + 2" /> となる。
                </p>
            </ContentBox>

            <p>
                類等式の最大の威力は、各項が群の位数の約数になっているという点にあります。これを利用して、素数べきの位数を持つ群（<InlineMath math="p" />-群）に関する非常に強力な定理を証明できます。
            </p>

            <ContentBox type="theorem" title="Theorem 8.4-3 (p-群は非自明な中心を持つ)">
                <p>
                    素数 <InlineMath math="p" /> と整数 <InlineMath math="k \geq 1" /> について、位数が <InlineMath math="p^k" /> である群（<InlineMath math="p" />-群と呼ばれる）<InlineMath math="G" /> は、必ず自明でない中心を持つ。すなわち <InlineMath math="Z(G) \neq \{e\}" />（または <InlineMath math="|Z(G)| > 1" />）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    群 <InlineMath math="G" /> に対して類等式を適用する。
                </p>
                <BlockMath math="|G| = |Z(G)| + \sum_{a} [G : C_G(a)]" />
                <p>
                    ここで、和に現れる各項 <InlineMath math="[G : C_G(a)]" /> を考える。<InlineMath math="a \notin Z(G)" /> であるため、<InlineMath math="C_G(a)" /> は <InlineMath math="G" /> 全体にはならず、したがってその指数 <InlineMath math="[G : C_G(a)] > 1" /> である。
                    またラグランジュの定理より、指数 <InlineMath math="[G : C_G(a)]" /> は群の位数 <InlineMath math="|G| = p^k" /> の約数である。
                </p>
                <p>
                    1 より大きい <InlineMath math="p^k" /> の約数は必ず <InlineMath math="p" /> の倍数であるため、和に現れるすべての項 <InlineMath math="[G : C_G(a)]" /> は <InlineMath math="p" /> で割り切れる。さらに左辺の <InlineMath math="|G| = p^k" /> も <InlineMath math="k \geq 1" /> ゆえ <InlineMath math="p" /> で割り切れる。
                </p>
                <p>
                    これらを合同式で表すと、
                </p>
                <BlockMath math="0 \equiv |Z(G)| + 0 \pmod{p} \implies |Z(G)| \equiv 0 \pmod{p}" />
                <p>
                    となる。<InlineMath math="Z(G)" /> は少なくとも単位元 <InlineMath math="e" /> を含むため <InlineMath math="|Z(G)| \geq 1" /> であるが、<InlineMath math="p" /> の倍数でなければならないため、<InlineMath math="|Z(G)| \geq p > 1" /> でなければならない。よって中心は自明ではない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="p-群の構造解析の足がかり">
                <p>
                    この定理は有限群論において極めて重要です。なぜなら、「群の中心で割って商群を作る」という操作を繰り返すことで、<InlineMath math="p" />-群の構造を帰納的に解明する足がかりになるからです。実際、この定理を用いると「位数 <InlineMath math="p^2" /> の群は必ずアーベル群である」ことなども容易に証明でき、後の章で学ぶ「シローの定理」の基礎ともなります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>軌道・固定群定理：</b> 軌道の大きさは固定部分群の指数に等しい（<InlineMath math="|G \cdot x| = [G:G_x]" />）。</li>
                    <li>軌道・固定群定理とラグランジュの定理を合わせると、有限群の位数は軌道の大きさと固定部分群の大きさの積になる（<InlineMath math="|G| = |G \cdot x| \cdot |G_x|" />）。</li>
                    <li><b>類等式：</b> 群を共役作用で軌道分解することにより、<InlineMath math="|G| = |Z(G)| + \sum [G:C_G(a)]" /> という強力な等式が得られる。</li>
                    <li>類等式を応用することで、素数べきの位数を持つ <InlineMath math="p" />-群は必ず自明でない中心を持つことが証明される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}