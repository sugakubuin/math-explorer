import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IndexOfSubgroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                部分群の「入れ子」構造における位数の関係や、指数（剰余類の個数）が持つ性質を深掘りします。
                特に、指数が特定の数（例えば 2）であるとき、部分群は非常に強い性質を持つことになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">指数の基本性質</h2>

            <p className="leading-relaxed">
                入れ子になった部分群の列において、指数は「掛け算」の形で推移します。
            </p>

            <ContentBox type="proposition" title="Proposition 3.4-1 (指数の推移性)">
                <p>
                    群 <InlineMath math="G" /> とその部分群 <InlineMath math="K \leq H \leq G" /> に対し、各指数が有限であれば以下が成り立つ：
                    <BlockMath math="[G : K] = [G : H][H : K]" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="G" /> の <InlineMath math="H" /> による左剰余類分解を <InlineMath math="G = \bigsqcup_{i=1}^m a_i H" /> （<InlineMath math="m = [G : H]" />）、
                    <InlineMath math="H" /> の <InlineMath math="K" /> による左剰余類分解を <InlineMath math="H = \bigsqcup_{j=1}^n b_j K" /> （<InlineMath math="n = [H : K]" />）とする。
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <b>全射性の証明</b>：<br />
                        任意の <InlineMath math="g \in G" /> に対し、<InlineMath math="g = a_i h" /> （ある <InlineMath math="h \in H" />）と書ける。
                        さらに <InlineMath math="h = b_j k" /> （ある <InlineMath math="k \in K" />）と書けるため、<InlineMath math="g = a_i b_j k" /> となり、<InlineMath math="g \in a_i b_j K" /> が示される。
                    </li>
                    <li>
                        <b>非交和性の証明</b>：<br />
                        <InlineMath math="a_i b_j K = a_{i'} b_{j'} K" /> と仮定する。
                        <InlineMath math="a_i b_j K \subset a_i H" /> かつ <InlineMath math="a_{i'} b_{j'} K \subset a_{i'} H" /> より、<InlineMath math="a_i H" /> と <InlineMath math="a_{i'} H" /> が交知を持つため、<InlineMath math="a_i H = a_{i'} H" /> つまり <InlineMath math="i = i'" /> である。
                        さらに <InlineMath math="a_i b_j K = a_i b_{j'} K" /> の両辺に左から <InlineMath math="a_i^{-1}" /> を掛けると <InlineMath math="b_j K = b_{j'} K" /> となり、<InlineMath math="j = j'" /> が得られる。
                    </li>
                </ul>
                <p className="mt-4">
                    これより、<InlineMath math="G" /> の <InlineMath math="K" /> による左剰余類全体の数は <InlineMath math="m \times n" /> 個となり、公式が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-1 (Z ⊃ 2Z ⊃ 4Z)">
                <p>
                    加法群 <InlineMath math="\mathbb{Z}" /> とその部分群についてラグランジュの定理の推移性を確認すると：
                    <BlockMath math="[\mathbb{Z} : 4\mathbb{Z}] = 4, \quad [\mathbb{Z} : 2\mathbb{Z}] = 2, \quad [2\mathbb{Z} : 4\mathbb{Z}] = 2" />
                    であり、確かに <InlineMath math="4 = 2 \times 2" /> が成り立っている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">指数 2 の部分群の正規性</h2>

            <p className="leading-relaxed">
                群をちょうど 2 つの領域に分割する部分群は、特別な対称性を持ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.4-2 (指数 2 の部分群は正規)">
                <p>
                    群 <InlineMath math="G" /> の部分群 <InlineMath math="H" /> の指数が <InlineMath math="[G : H] = 2" /> ならば、<InlineMath math="H" /> は <InlineMath math="G" /> の<b>正規部分群</b>である。
                    すなわち、すべての <InlineMath math="g \in G" /> に対して <InlineMath math="gH = Hg" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b><InlineMath math="g \in H" /> のとき</b>：<br />
                        定義より <InlineMath math="gH = H = Hg" /> となり、等号が成り立つ。
                    </li>
                    <li>
                        <b><InlineMath math="g \notin H" /> のとき</b>：<br />
                        <InlineMath math="[G : H] = 2" /> より、<InlineMath math="G" /> は 2 つの左剰余類 <InlineMath math="H" /> と <InlineMath math="gH" /> に分割される。
                        すなわち、<InlineMath math="gH = G \setminus H" /> である。<br />
                        同様に、右剰余類による分割を考えると <InlineMath math="G = H \sqcup Hg" /> であるため、<InlineMath math="Hg = G \setminus H" /> となる。<br />
                        よって <InlineMath math="gH = Hg" /> が成り立つ。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-2 (指数 2 の部分群の例)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>交代群</b>：対称群 <InlineMath math="S_n" /> において、交代群 <InlineMath math="A_n" /> は指数 2 であるため、正規部分群である。
                    </li>
                    <li>
                        <b>整数群</b>：<InlineMath math="2\mathbb{Z} \subset \mathbb{Z}" /> は指数 2 である。（アーベル群なので指数に関わらず正規だが、この定理からも言える。）
                    </li>
                    <li>
                        <b>二面体群</b>：正 <InlineMath math="n" /> 角形の対称群 <InlineMath math="D_n" /> において、回転群 <InlineMath math="\langle r \rangle" /> は指数 2 のため、常に正規部分群である。
                    </li>
                </ul>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>入れ子状の部分群 <InlineMath math="K \leq H \leq G" /> において、指数の積の公式が成り立つ（位数の推移性）。</li>
                    <li>指数の推移性は、剰余類をさらに細かく分割することで証明される。</li>
                    <li>群全体を 2 等分する部分群（指数 2）は、必ず左右の分割が一致する「正規部分群」となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
