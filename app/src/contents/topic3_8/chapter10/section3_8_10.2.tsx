import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SylowSubgroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節のコーシーの定理により、素数 <InlineMath math="p" /> が群の位数を割り切るならば、位数 <InlineMath math="p" /> の要素（およびそれが生成する部分群）が必ず存在することがわかりました。では、<InlineMath math="p^2" /> や <InlineMath math="p^3" /> など、より大きな素数のべき乗が群の位数を割り切る場合はどうなるのでしょうか。この問いに答えるための鍵となる概念が<b>「<InlineMath math="p" />-群」</b>と<b>「シロー <InlineMath math="p" />-部分群」</b>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">p-群とシロー部分群の定義</h2>

            <p>
                まず、位数が素数べきであるような群、および有限群のなかに含まれる「極大の」素数べき位数をもつ部分群を定義します。
            </p>

            <ContentBox type="definition" title="Definition 10.2-1 (p-群とシローp-部分群)">
                <p>
                    素数 <InlineMath math="p" /> を固定する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b><InlineMath math="p" />-群（<InlineMath math="p" />-group）：</b> 群 <InlineMath math="G" /> の位数が <InlineMath math="p^k" />（<InlineMath math="k \geq 0" /> の整数）で表されるとき、<InlineMath math="G" /> を <InlineMath math="p" />-群という。
                    </li>
                    <li>
                        <b>シロー <InlineMath math="p" />-部分群（Sylow <InlineMath math="p" />-subgroup）：</b> 有限群 <InlineMath math="G" /> の位数が <InlineMath math="|G| = p^k m" />（ただし <InlineMath math="p" /> と <InlineMath math="m" /> は互いに素、すなわち <InlineMath math="\gcd(p, m) = 1" />）であるとする。このとき、<InlineMath math="G" /> の部分群 <InlineMath math="P" /> であって、位数がちょうど <InlineMath math="p^k" /> であるものを <b>シロー <InlineMath math="p" />-部分群</b> と呼ぶ。<InlineMath math="G" /> のシロー <InlineMath math="p" />-部分群の全体を <InlineMath math="\mathrm{Syl}_p(G)" /> と表す。
                    </li>
                </ul>
            </ContentBox>

            <p>
                つまり、シロー <InlineMath math="p" />-部分群とは、群 <InlineMath math="G" /> の中に含まれる「これ以上大きくできない最大の <InlineMath math="p" />-群」のことです。ラグランジュの定理の逆が成立するならば、このような部分群は必ず存在するはずです。
            </p>

            <ContentBox type="example" title="Example 10.2-1 (位数が 12 の群におけるシロー部分群)">
                <p>
                    位数が <InlineMath math="|G| = 12 = 2^2 \times 3" /> の群 <InlineMath math="G" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><b>シロー 2-部分群：</b> 位数が <InlineMath math="2^2 = 4" /> の部分群のことである。</li>
                    <li><b>シロー 3-部分群：</b> 位数が <InlineMath math="3^1 = 3" /> の部分群のことである。</li>
                </ul>
                <p>
                    具体例として <InlineMath math="G" /> が交代群 <InlineMath math="A_4" /> である場合を考える。
                </p>
                <p>
                    <InlineMath math="A_4" /> の中には、位数 4 の部分群としてクラインの四元群 <InlineMath math="V_4 = \{e, (12)(34), (13)(24), (14)(23)\}" /> が存在する。これは <InlineMath math="A_4" /> の唯一のシロー 2-部分群である。
                </p>
                <p>
                    また、位数 3 の部分群は長さ 3 の巡回置換で生成される。例えば <InlineMath math="\langle (123) \rangle = \{e, (123), (132)\}" /> などである。<InlineMath math="A_4" /> にはこのようなシロー 3-部分群が全部で 4 個存在する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">p-群の性質</h2>

            <p>
                シローの定理（次節）の証明に進む前に、<InlineMath math="p" />-群自体が持つ非常に強力な性質について見ておきます。前章の類等式から導かれた「<InlineMath math="p" />-群は必ず自明でない中心を持つ」という事実がここで活きてきます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.2-2 (p-群の正規部分群の存在)">
                <p>
                    位数が <InlineMath math="p^k" />（<InlineMath math="k \geq 1" />）である <InlineMath math="p" />-群 <InlineMath math="G" /> は、各 <InlineMath math="0 \leq j \leq k" /> について、位数がちょうど <InlineMath math="p^j" /> であるような正規部分群を必ず持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    群の位数 <InlineMath math="k" /> に関する数学的帰納法で証明する。
                </p>
                <p>
                    <InlineMath math="k=1" /> のとき、<InlineMath math="|G| = p" /> であり、自明な部分群 <InlineMath math="\{e\}" />（位数 <InlineMath math="p^0=1" />）と <InlineMath math="G" /> 自身（位数 <InlineMath math="p^1=p" />）が求める正規部分群である。
                </p>
                <p>
                    位数が <InlineMath math="p^{k-1}" /> 以下の <InlineMath math="p" />-群について定理が成り立つと仮定し、<InlineMath math="|G| = p^k" />（<InlineMath math="k \geq 2" />）とする。
                </p>
                <p>
                    §8.4 で示したように、<InlineMath math="p" />-群 <InlineMath math="G" /> の中心 <InlineMath math="Z(G)" /> は自明ではない（<InlineMath math="|Z(G)| \geq p" />）。コーシーの定理より、<InlineMath math="Z(G)" /> の中には位数 <InlineMath math="p" /> の要素 <InlineMath math="z" /> が存在する。
                    <InlineMath math="z" /> は中心の要素であるから、すべての <InlineMath math="g \in G" /> と可換（<InlineMath math="gz = zg" />）である。したがって、<InlineMath math="z" /> が生成する巡回部分群 <InlineMath math="N = \langle z \rangle" /> は <InlineMath math="G" /> の正規部分群となる（<InlineMath math="gNg^{-1} = N" />）。<InlineMath math="|N| = p" /> である。
                </p>
                <p>
                    ここで、商群 <InlineMath math="\bar{G} = G/N" /> を考える。その位数は <InlineMath math="|\bar{G}| = |G| / |N| = p^k / p = p^{k-1}" /> である。帰納法の仮定により、<InlineMath math="\bar{G}" /> は任意の <InlineMath math="0 \leq j' \leq k-1" /> に対して位数 <InlineMath math="p^{j'}" /> の正規部分群 <InlineMath math="\bar{H}" /> を持つ。
                </p>
                <p>
                    商群と原群の部分群を対応づける「対応定理」（§6.4）によれば、<InlineMath math="\bar{G}" /> の正規部分群 <InlineMath math="\bar{H}" /> は、<InlineMath math="G" /> において <InlineMath math="N" /> を含む正規部分群 <InlineMath math="H" /> （すなわち <InlineMath math="H/N = \bar{H}" /> を満たす <InlineMath math="H \trianglelefteq G" />）と一対一に対応する。
                </p>
                <p>
                    このとき <InlineMath math="H" /> の位数は <InlineMath math="|H| = |\bar{H}| \times |N| = p^{j'} \times p = p^{j'+1}" /> となる。<InlineMath math="j = j'+1" /> とおくと、<InlineMath math="H" /> は位数 <InlineMath math="p^j" /> （<InlineMath math="1 \leq j \leq k" />）の <InlineMath math="G" /> の正規部分群である。<InlineMath math="j=0" /> の場合は自明な部分群 <InlineMath math="\{e\}" /> が該当する。
                </p>
                <p>
                    以上より、帰納法が成立し、定理が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この結果は、<InlineMath math="p" />-群の中には小さな <InlineMath math="p" />-群から大きな <InlineMath math="p" />-群まで、すべての素数べき位数の正規部分群が「入れ子状に」存在できることを示しています。この性質を利用して、小さな位数の群の構造を完全に決定することができます。
            </p>

            <ContentBox type="example" title="Example 10.2-2 (位数 p^2 の群は必ずアーベル群)">
                <p>
                    素数 <InlineMath math="p" /> に対して、位数が <InlineMath math="p^2" /> である群 <InlineMath math="G" /> は、必ずアーベル群（可換群）であることを証明する。
                </p>
                <p>
                    まず、一般的な群論の補題として「群 <InlineMath math="G" /> について、その中心による商群 <InlineMath math="G/Z(G)" /> が巡回群であるならば、<InlineMath math="G" /> はアーベル群である」という事実を用いる。
                </p>
                <p>
                    <InlineMath math="|G| = p^2" /> のとき、<InlineMath math="G" /> は <InlineMath math="p" />-群であるから <InlineMath math="Z(G) \neq \{e\}" /> である。ラグランジュの定理より、<InlineMath math="|Z(G)|" /> は <InlineMath math="p" /> または <InlineMath math="p^2" /> のいずれかである。
                </p>
                <p>
                    もし仮に <InlineMath math="|Z(G)| = p" /> だとすると、商群 <InlineMath math="G/Z(G)" /> の位数は <InlineMath math="p^2 / p = p" /> となる。素数位数の群は巡回群である（§3.3 Theorem 3.3-1）ため、<InlineMath math="G/Z(G)" /> は巡回群となる。しかし、前述の補題によれば、このとき <InlineMath math="G" /> 全体がアーベル群とならなければならない。<InlineMath math="G" /> がアーベル群であれば <InlineMath math="Z(G) = G" /> となり、<InlineMath math="|Z(G)| = p^2" /> となって矛盾する。
                </p>
                <p>
                    したがって、最初の仮定 <InlineMath math="|Z(G)| = p" /> は誤りであり、<InlineMath math="|Z(G)| = p^2" /> でなければならない。すなわち <InlineMath math="Z(G) = G" /> であり、<InlineMath math="G" /> はアーベル群である。
                </p>
                <p>
                    これにより、位数 <InlineMath math="p^2" /> の群は同型を除いて <InlineMath math="\mathbb{Z}/p^2\mathbb{Z}" /> か <InlineMath math="\mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/p\mathbb{Z}" /> の 2 種類しか存在しないことがわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§10.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>位数が素数べき <InlineMath math="p^k" /> である群を <b><InlineMath math="p" />-群</b> と呼ぶ。</li>
                    <li>群 <InlineMath math="G" /> に含まれる <InlineMath math="p" />-群のうち、その位数が「<InlineMath math="|G|" /> を割り切る最大の <InlineMath math="p" /> のべき乗」に一致する部分群を <b>シロー <InlineMath math="p" />-部分群</b> と呼ぶ。</li>
                    <li><InlineMath math="p" />-群は自明でない中心を持ち、それを利用してすべての位数 <InlineMath math="p^j" /> (<InlineMath math="j \leq k" />) の正規部分群の存在を証明できる。</li>
                    <li>この性質を応用することで、「位数 <InlineMath math="p^2" /> の群は必ずアーベル群である」ことなどが導かれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}