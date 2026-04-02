import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SylowTheorems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                いよいよ有限群論の金字塔である<b>シローの定理（Sylow Theorems）</b>を紹介します。ノルウェーの数学者ペーテル・ルートヴィヒ・メーデル・シローによって1872年に証明されたこの定理群は、シロー <InlineMath math="p" />-部分群の「存在」、「共役性」、および「個数」に関する 3 つの定理から構成されています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">シローの 3 定理</h2>

            <p>
                まずは 3 つの定理の主張を述べます。これらは群の位数を素因数分解するだけで、その内部構造について極めて強力な制約を与えてくれます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.3-1 (シローの第一定理：存在)">
                <p>
                    有限群 <InlineMath math="G" /> の位数が <InlineMath math="|G| = p^k m" />（<InlineMath math="p" /> は素数、<InlineMath math="k \geq 1" />、<InlineMath math="\gcd(p, m) = 1" />）であるとする。このとき、<InlineMath math="G" /> は位数が <InlineMath math="p^k" /> である部分群（すなわちシロー <InlineMath math="p" />-部分群）を必ず持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    群 <InlineMath math="G" /> の要素をちょうど <InlineMath math="p^k" /> 個含むような部分集合全体の族を <InlineMath math="\Omega" /> とする。
                </p>
                <BlockMath math="\Omega = \{ S \subset G \mid |S| = p^k \}" />
                <p>
                    <InlineMath math="\Omega" /> の要素数（すなわち <InlineMath math="|G| = p^k m" /> 個から <InlineMath math="p^k" /> 個を選ぶ組み合わせの数）は二項係数で表される。
                </p>
                <BlockMath math="\begin{aligned} |\Omega| &= \binom{p^k m}{p^k} \\ &= \frac{(p^k m)(p^k m - 1) \cdots (p^k m - i) \cdots (p^k m - p^k + 1)}{(p^k)(p^k - 1) \cdots (p^k - i) \cdots (1)} \end{aligned}" />
                <p>
                    この分数の各項の比 <InlineMath math="\frac{p^k m - i}{p^k - i}" />（<InlineMath math="1 \leq i \leq p^k - 1" />）において、分子と分母が持つ <InlineMath math="p" /> の素因数の個数（<InlineMath math="p" />-進付値）は等しい（なぜなら <InlineMath math="i < p^k" /> であり、<InlineMath math="p^k m" /> や <InlineMath math="p^k" /> の項よりも <InlineMath math="i" /> 自身の持つ <InlineMath math="p" /> のべき乗の方が支配的になるため）。残る項は <InlineMath math="\frac{p^k m}{p^k} = m" /> であり、<InlineMath math="m" /> は <InlineMath math="p" /> と互いに素である。したがって、二項係数 <InlineMath math="|\Omega|" /> 全体は <InlineMath math="p" /> で割り切れない。
                </p>
                <BlockMath math="|\Omega| \not\equiv 0 \pmod p" />
                <p>
                    次に、群 <InlineMath math="G" /> は <InlineMath math="\Omega" /> に対して左からの積によって作用する：<InlineMath math="g \cdot S = \{gs \mid s \in S\}" />。この作用によって <InlineMath math="\Omega" /> をいくつかの軌道 <InlineMath math="\mathcal{O}_1, \mathcal{O}_2, \ldots, \mathcal{O}_r" /> に分解する。<InlineMath math="|\Omega| = \sum_{j=1}^r |\mathcal{O}_j|" /> である。
                </p>
                <p>
                    <InlineMath math="|\Omega|" /> が <InlineMath math="p" /> で割り切れないのだから、少なくとも 1 つの軌道 <InlineMath math="\mathcal{O}" /> はその大きさ <InlineMath math="|\mathcal{O}|" /> が <InlineMath math="p" /> で割り切れないはずである。そのような軌道 <InlineMath math="\mathcal{O}" /> に属するある部分集合を <InlineMath math="S \in \mathcal{O}" /> とし、その固定部分群 <InlineMath math="P = G_S = \{g \in G \mid gS = S\}" /> を考える。
                </p>
                <p>
                    軌道・固定群定理より、<InlineMath math="|G| = |\mathcal{O}| \cdot |P|" />、すなわち <InlineMath math="p^k m = |\mathcal{O}| \cdot |P|" /> である。<InlineMath math="|\mathcal{O}|" /> は <InlineMath math="p" /> を素因数に持たないため、<InlineMath math="p^k" /> はすべて <InlineMath math="|P|" /> を割り切らなければならない。よって <InlineMath math="|P| \geq p^k" /> である。
                </p>
                <p>
                    一方で、<InlineMath math="S" /> のある要素 <InlineMath math="s \in S" /> を固定する。任意の <InlineMath math="g \in P" /> について <InlineMath math="gS = S" /> であるから、<InlineMath math="gs \in S" /> である。これは写像 <InlineMath math="g \mapsto gs" /> が <InlineMath math="P" /> から <InlineMath math="S" /> への単射を与えることを意味し、したがって <InlineMath math="|P| \leq |S| = p^k" /> である。
                </p>
                <p>
                    以上より、<InlineMath math="|P| = p^k" /> が結論づけられ、<InlineMath math="P" /> こそが求めるシロー <InlineMath math="p" />-部分群である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 10.3-2 (シローの第二定理：共役性)">
                <p>
                    有限群 <InlineMath math="G" /> の任意の 2 つのシロー <InlineMath math="p" />-部分群 <InlineMath math="P" /> と <InlineMath math="Q" /> は、互いに共役である。すなわち、ある <InlineMath math="g \in G" /> が存在して
                </p>
                <BlockMath math="Q = gPg^{-1}" />
                <p>
                    が成り立つ。さらに、<InlineMath math="G" /> の任意の <InlineMath math="p" />-部分群（位数が <InlineMath math="p" /> のべき乗の部分群）は、あるシロー <InlineMath math="p" />-部分群の中に含まれる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、<InlineMath math="H" /> を <InlineMath math="G" /> の任意の <InlineMath math="p" />-部分群（<InlineMath math="|H| = p^j" />）とし、<InlineMath math="P" /> をシロー <InlineMath math="p" />-部分群（<InlineMath math="|P| = p^k" />）とする。<InlineMath math="P" /> による左剰余類の集合 <InlineMath math="X = G/P = \{gP \mid g \in G\}" /> に、<InlineMath math="H" /> を左からの積 <InlineMath math="h \cdot (gP) = (hg)P" /> によって作用させる。
                </p>
                <p>
                    集合 <InlineMath math="X" /> の要素数は <InlineMath math="|X| = [G:P] = \frac{p^k m}{p^k} = m" /> であり、これは <InlineMath math="p" /> と互いに素（<InlineMath math="m \not\equiv 0 \pmod p" />）である。
                </p>
                <p>
                    この作用によって <InlineMath math="X" /> を <InlineMath math="H" />-軌道に分解する。<InlineMath math="H" /> は <InlineMath math="p" />-群であるため、各軌道の大きさは <InlineMath math="H" /> の位数の約数、すなわち <InlineMath math="p" /> のべき乗 <InlineMath math="p^a" />（<InlineMath math="a \geq 0" />）となる。<InlineMath math="X" /> の要素数は各軌道の大きさの和であるが、もしすべての軌道の大きさが <InlineMath math="p" /> の倍数（<InlineMath math="a \geq 1" />）であったとすると、その和である <InlineMath math="|X| = m" /> も <InlineMath math="p" /> の倍数となってしまい矛盾する。
                </p>
                <p>
                    したがって、大きさが <InlineMath math="p^0 = 1" /> である軌道、すなわち<b>不動点</b>が少なくとも 1 つ存在しなければならない。これを <InlineMath math="gP \in X" /> とすると、任意の <InlineMath math="h \in H" /> に対して <InlineMath math="h(gP) = gP" /> が成り立つ。
                </p>
                <p>
                    <InlineMath math="h(gP) = gP \implies g^{-1}hgP = P \implies g^{-1}hg \in P \implies h \in gPg^{-1}" />
                </p>
                <p>
                    これがすべての <InlineMath math="h \in H" /> で成り立つため、<InlineMath math="H \subset gPg^{-1}" /> である。<InlineMath math="gPg^{-1}" /> も位数 <InlineMath math="p^k" /> の群であるから、これもシロー <InlineMath math="p" />-部分群の1つである。これにより、任意の <InlineMath math="p" />-部分群があるシロー <InlineMath math="p" />-部分群に含まれることが示された（定理の後半部分）。
                </p>
                <p>
                    とくに、<InlineMath math="H" /> 自身がシロー <InlineMath math="p" />-部分群 <InlineMath math="Q" /> であった場合、<InlineMath math="|Q| = |gPg^{-1}| = p^k" /> であるため、包含関係 <InlineMath math="Q \subset gPg^{-1}" /> は等号となり <InlineMath math="Q = gPg^{-1}" /> を得る。これにより、任意の 2 つのシロー <InlineMath math="p" />-部分群が共役であることが示された（定理の前半部分）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 10.3-3 (シローの第三定理：個数)">
                <p>
                    有限群 <InlineMath math="G" /> のシロー <InlineMath math="p" />-部分群の個数を <InlineMath math="n_p = |\mathrm{Syl}_p(G)|" /> とする。このとき、<InlineMath math="n_p" /> は以下の 2 つの合同式・整除条件を満たす。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="n_p \equiv 1 \pmod{p}" /></li>
                    <li><InlineMath math="n_p \mid m" /> （<InlineMath math="n_p" /> は <InlineMath math="p" /> と互いに素な部分 <InlineMath math="m" /> の約数である）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    シロー <InlineMath math="p" />-部分群の全体集合を <InlineMath math="\mathrm{Syl}_p(G) = \{P_1, P_2, \ldots, P_{n_p}\}" /> とする。この集合に、1 つのシロー <InlineMath math="p" />-部分群 <InlineMath math="P = P_1" /> が共役によって作用すると考える（<InlineMath math="x \in P" /> に対し <InlineMath math="P_i \mapsto xP_ix^{-1}" />）。
                </p>
                <p>
                    この <InlineMath math="P" /> の作用によって <InlineMath math="\mathrm{Syl}_p(G)" /> を軌道に分解する。第二定理の証明と同様に、<InlineMath math="P" /> は <InlineMath math="p" />-群であるため、各軌道の大きさは <InlineMath math="P" /> の位数の約数、つまり <InlineMath math="1" /> か <InlineMath math="p" /> の倍数である。<InlineMath math="P" /> 自身（<InlineMath math="P_1" />）は、任意の <InlineMath math="x \in P" /> に対して <InlineMath math="xPx^{-1} = P" /> となるため、明らかに大きさ 1 の軌道（不動点）をなす。
                </p>
                <p>
                    他に大きさ 1 の軌道（不動点）が存在するかどうかを確認する。<InlineMath math="Q \in \mathrm{Syl}_p(G)" /> がこの作用の不動点であると仮定すると、任意の <InlineMath math="x \in P" /> に対して <InlineMath math="xQx^{-1} = Q" /> となる。これは <InlineMath math="P" /> が <InlineMath math="Q" /> の正規化群 <InlineMath math="N_G(Q) = \{g \in G \mid gQg^{-1} = Q\}" /> に含まれること（<InlineMath math="P \subset N_G(Q)" />）を意味する。
                </p>
                <p>
                    <InlineMath math="P" /> と <InlineMath math="Q" /> は共に <InlineMath math="N_G(Q)" /> のシロー <InlineMath math="p" />-部分群となるが、<InlineMath math="Q" /> は定義より <InlineMath math="N_G(Q)" /> の中で正規部分群（<InlineMath math="Q \trianglelefteq N_G(Q)" />）である。第二定理より、<InlineMath math="N_G(Q)" /> の中で <InlineMath math="P" /> と <InlineMath math="Q" /> は共役でなければならないが、<InlineMath math="Q" /> は正規部分群なので共役変換で不変である（<InlineMath math="gQg^{-1} = Q" />）。したがって <InlineMath math="P = Q" /> でなければならない。
                </p>
                <p>
                    ゆえに、不動点は <InlineMath math="P" /> のただ 1 つしか存在しない。残りの軌道はすべて大きさが <InlineMath math="p" /> の倍数であるから、全体の要素数 <InlineMath math="n_p" /> は
                </p>
                <BlockMath math="n_p = 1 + (\text{p の倍数の和})" />
                <p>
                    となり、<InlineMath math="n_p \equiv 1 \pmod p" /> が示された。
                </p>
                <p>
                    次に <InlineMath math="n_p \mid m" /> を示す。第二定理より、群 <InlineMath math="G" /> 全体は <InlineMath math="\mathrm{Syl}_p(G)" /> に対して共役作用で推移的に作用する（すべてのシロー部分群が 1 つの軌道になる）。軌道・固定群定理より、その軌道の大きさ <InlineMath math="n_p" /> は、<InlineMath math="P" /> の固定部分群である正規化群 <InlineMath math="N_G(P)" /> の指数に等しい。
                </p>
                <BlockMath math="n_p = [G : N_G(P)]" />
                <p>
                    ラグランジュの定理の指数の推移性 <InlineMath math="[G : P] = [G : N_G(P)][N_G(P) : P]" /> より、<InlineMath math="[G : N_G(P)]" /> は <InlineMath math="[G : P]" /> の約数である。ここで <InlineMath math="[G : P] = \frac{p^k m}{p^k} = m" /> であるから、<InlineMath math="n_p \mid m" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">3 定理の計算例</h2>

            <p>
                定理の主張を具体例で確認してみましょう。群の位数が与えられただけで、部分群の個数がかなり絞り込まれることがわかります。
            </p>

            <ContentBox type="example" title="Example 10.3-1 (位数 12 の群のシロー部分群の個数)">
                <p>
                    位数が <InlineMath math="|G| = 12 = 2^2 \times 3" /> の群におけるシロー部分群の個数 <InlineMath math="n_2" /> と <InlineMath math="n_3" /> を考えます。
                </p>
                <p>
                    <b>シロー 3-部分群の個数 <InlineMath math="n_3" /> について：</b><br />
                    シローの第三定理より、<InlineMath math="n_3 \equiv 1 \pmod 3" /> かつ <InlineMath math="n_3 \mid 4" />（<InlineMath math="m=4" />）を満たさなければなりません。
                    4 の約数は <InlineMath math="1, 2, 4" /> です。このうち 3 で割って 1 余る数は <InlineMath math="1" /> と <InlineMath math="4" /> のみです。
                    したがって、<b><InlineMath math="n_3 \in \{1, 4\}" /></b> となります。
                </p>
                <p>
                    <b>シロー 2-部分群の個数 <InlineMath math="n_2" /> について：</b><br />
                    同様に、<InlineMath math="n_2 \equiv 1 \pmod 2" /> かつ <InlineMath math="n_2 \mid 3" /> を満たします。
                    3 の約数 <InlineMath math="1, 3" /> のうち、奇数（2で割って1余る数）は両方とも条件を満たします。
                    したがって、<b><InlineMath math="n_2 \in \{1, 3\}" /></b> となります。
                </p>
                <p>
                    交代群 <InlineMath math="A_4" />（位数 12）で実際の数を確認してみましょう。前節で見た通り、<InlineMath math="A_4" /> のシロー 3-部分群は <InlineMath math="\langle (123) \rangle" />、<InlineMath math="\langle (124) \rangle" />、<InlineMath math="\langle (134) \rangle" />、<InlineMath math="\langle (234) \rangle" /> の <b>4 個</b>（<InlineMath math="n_3 = 4" />）存在します。
                    一方、シロー 2-部分群はクラインの四元群 <InlineMath math="V_4" /> の <b>1 個</b>（<InlineMath math="n_2 = 1" />）のみ存在します。確かに定理の制約に合致しています。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 10.3-2 (位数 15 の群のシロー部分群の個数)">
                <p>
                    位数が <InlineMath math="|G| = 15 = 3 \times 5" /> の群のシロー部分群の個数 <InlineMath math="n_3" /> と <InlineMath math="n_5" /> を考えます。
                </p>
                <p>
                    <b>シロー 5-部分群の個数 <InlineMath math="n_5" /> について：</b><br />
                    <InlineMath math="n_5 \equiv 1 \pmod 5" /> かつ <InlineMath math="n_5 \mid 3" />。3 の約数 1, 3 のうち、5 で割って 1 余る数は <b>1 のみ</b>です。よって <InlineMath math="n_5 = 1" /> が確定します。
                </p>
                <p>
                    <b>シロー 3-部分群の個数 <InlineMath math="n_3" /> について：</b><br />
                    <InlineMath math="n_3 \equiv 1 \pmod 3" /> かつ <InlineMath math="n_3 \mid 5" />。5 の約数 1, 5 のうち、3 で割って 1 余る数は <b>1 のみ</b>です（5 は 3 で割ると 2 余る）。よって <InlineMath math="n_3 = 1" /> が確定します。
                </p>
                <p>
                    このように、位数が 15 の群では、シロー 3-部分群もシロー 5-部分群も「ただ 1 つしか存在しない」ことがシローの定理だけで証明できてしまいます。次節で見るように、シロー <InlineMath math="p" />-部分群が 1 つしかないということは、それが正規部分群であることを意味し、群の構造を決定する決定的な要因となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§10.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>第一定理：</b> 位数 <InlineMath math="p^k m" /> の群には、位数 <InlineMath math="p^k" /> の部分群（シロー <InlineMath math="p" />-部分群）が必ず存在する。</li>
                    <li><b>第二定理：</b> 任意の 2 つのシロー <InlineMath math="p" />-部分群は互いに共役（<InlineMath math="Q = gPg^{-1}" />）である。</li>
                    <li><b>第三定理：</b> シロー <InlineMath math="p" />-部分群の個数 <InlineMath math="n_p" /> は、<InlineMath math="n_p \equiv 1 \pmod p" /> かつ <InlineMath math="n_p \mid m" /> を満たす。</li>
                    <li>これらの定理を組み合わせることで、群の位数からその内部にある部分群の個数と構造を強力に絞り込むことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}