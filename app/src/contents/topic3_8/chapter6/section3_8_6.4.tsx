import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CorrespondenceTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                対応定理（または四辺形定理）は、正規部分群 <InlineMath math="N" /> による商群 <InlineMath math="G/N" /> の部分群構造と、
                もとの群 <InlineMath math="G" /> のうち <InlineMath math="N" /> を含む部分群の構造が完全に一致することを示しています。
                これにより、複雑な群の「上の方」の構造を、より小さな商群を通じて理解できるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対応定理</h2>

            <p className="leading-relaxed mb-4">
                定理の厳密な記述を行います。<InlineMath math="N" /> を法とする商をとることで、<InlineMath math="N" /> を含む階層構造がどのように商群側へ写されるかを示します。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-1 (対応定理)">
                <p>
                    <InlineMath math="G" /> を群、<InlineMath math="N \trianglelefteq G" /> を正規部分群とする。
                    このとき、<InlineMath math="N" /> を含む <InlineMath math="G" /> の部分群の集合 <InlineMath math="\mathcal{S}_N(G) = \{ H \mid N \subseteq H \leq G \}" /> と、
                    商群 <InlineMath math="G/N" /> の部分群の集合 <InlineMath math="\mathcal{S}(G/N) = \{ \bar{H} \mid \bar{H} \leq G/N \}" /> の間には、
                    以下の性質を持つ 1 対 1 対応（包含関係を保存する全単射）が存在する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>
                        対応は <InlineMath math="H \mapsto H/N = \{ hN \mid h \in H \}" /> により与えられる。
                        逆対応は <InlineMath math="\bar{H} \mapsto \pi^{-1}(\bar{H})" /> （<InlineMath math="y' \in \bar{H}" /> の原像全体）である。
                    </li>
                    <li>
                        <InlineMath math="N \subseteq H_1 \subseteq H_2" /> ならば <InlineMath math="H_1/N \subseteq H_2/N" /> であり、逆も成り立つ。
                    </li>
                    <li>
                        <InlineMath math="H \trianglelefteq G" /> であることと、<InlineMath math="H/N \trianglelefteq G/N" /> であることは同値である。
                    </li>
                </ol>
            </ContentBox>

            <p className="leading-relaxed my-4">
                ここで、この定理が主張する「格子構造の保存」という視覚的なイメージを確認しておきましょう。
            </p>

            <ContentBox type="remark" title="格子構造のコピーとしての対応定理">
                <p>
                    この定理を視覚的に捉えるならば、商群 <InlineMath math="G/N" /> の部分群の格子図（ハッセ図）は、
                    元の群 <InlineMath math="G" /> の部分群格子のうち、<InlineMath math="N" /> 以上の部分を切り取ってそのまま貼り付けたものになっています。
                    商をとるという操作は、単に要素をまとめるだけでなく、部分群同士の包含関係（格子の網目）を完全に保存しているのです。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                この定理の証明の核心は、全射準同型写像による「像」と「原像」の対応関係を丁寧に追うことにあります。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    自然な全射準同型 <InlineMath math="\pi: G \to G/N" /> （<InlineMath math="\pi(g) = gN" />）を用いて証明する。
                </p>
                <ul className="list-decimal list-inside space-y-6 mt-6">
                    <li>
                        <b>1 対 1 対応</b>：<br />
                        <InlineMath math="\bar{H} \leq G/N" /> のとき、その原像 <InlineMath math="H = \pi^{-1}(\bar{H})" /> は <InlineMath math="G" /> の部分群であり、
                        単位元 <InlineMath math="eN \in \bar{H}" /> であるため、<InlineMath math="\pi^{-1}(eN) = \ker\pi = N" /> を含む。
                        逆に <InlineMath math="N \subseteq H \leq G" /> のとき、<InlineMath math="\pi(H) = H/N" /> は <InlineMath math="G/N" /> の部分群である。
                        <InlineMath math="\pi^{-1}(\pi(H)) = H" /> （<InlineMath math="N \subseteq H" /> が重要）および <InlineMath math="\pi(\pi^{-1}(\bar{H})) = \bar{H}" /> が成り立つため、
                        写像は全単射である。
                    </li>
                    <li>
                        <b>包含関係の保存</b>：<br />
                        集合の像と原像の性質より、包含関係が保存されることは明らかである。
                    </li>
                    <li>
                        <b>正規性の保存</b>：<br />
                        <InlineMath math="H \trianglelefteq G" /> ならば、任意の <InlineMath math="gN \in G/N" /> と <InlineMath math="hN \in H/N" /> に対して、
                        <BlockMath math="(gN)(hN)(gN)^{-1} = (ghg^{-1})N" />
                        となる。<InlineMath math="ghg^{-1} \in H" /> より、これは <InlineMath math="H/N" /> に属する。
                        逆も同様に、<InlineMath math="H/N \trianglelefteq G/N" /> ならば原像 <InlineMath math="H" /> も正規となる。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-6">
                具体例を通して、包含関係の保存や、正規部分群の列の対応を確認してみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例</h2>

            <p className="leading-relaxed mb-4">
                まず、巡回群の包含関係が商群においてどのように現れるかを具体的に計算します。
            </p>

            <ContentBox type="example" title="Example 6.4-1 (剰余群（Z/4Z）への対応)">
                <p>
                    <InlineMath math="G = \mathbb{Z}" />、<InlineMath math="N = 4\mathbb{Z}" /> とする。
                    商群 <InlineMath math="G/N = \mathbb{Z}/4\mathbb{Z}" /> の部分群構造を調べる。
                </p>
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>商群の部分群</b>：<br />
                        <InlineMath math="\{0\}" />、<InlineMath math="\{0, 2\}" />、<InlineMath math="\{0, 1, 2, 3\}" /> の 3 つが存在する。
                    </li>
                    <li>
                        <b>対応する G の部分群</b>：<br />
                        1. <InlineMath math="\{0\}" /> に対応：<InlineMath math="4\mathbb{Z}" /> <br />
                        2. <InlineMath math="\{0, 2\}" /> に対応：<InlineMath math="2\mathbb{Z}" /> <br />
                        3. <InlineMath math="\mathbb{Z}/4\mathbb{Z}" /> に対応：<InlineMath math="\mathbb{Z}" />
                    </li>
                    <li>
                        これらはすべて <InlineMath math="4\mathbb{Z}" /> を含み、<InlineMath math="\mathbb{Z} \supseteq 2\mathbb{Z} \supseteq 4\mathbb{Z}" /> という包含関係が商群側と完全に対応している。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-4">
                次に、非可換群である対称群における正規部分群の階層構造を見てみます。
            </p>

            <ContentBox type="example" title="Example 6.4-2 (S_4 と A_4)">
                <p>
                    <InlineMath math="G = S_4" />、<InlineMath math="N = A_4" /> とする。
                    <InlineMath math="G/N \cong \mathbb{Z}/2\mathbb{Z}" /> は素数位数であり、部分群は自明なもの（単位元のみ）と全体のみである。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        対応定理より、<InlineMath math="A_4" /> を含む <InlineMath math="S_4" /> の部分群もまた、<InlineMath math="A_4" /> 自身と <InlineMath math="S_4" /> 全体の 2 つに限られることがわかる。
                    </li>
                    <li>
                        このように、複雑な群であっても「下」が正規部分群であれば、その上の階層構造を商群の単純さから決定できる。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-6">
                対応定理は、商群を扱うための強力な基盤となります。これまで学んできた準同型定理、第一・第二・第三同型定理と併せて、商群の構造を自在に操ることができるようになりました。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>対応定理は、商群 <InlineMath math="G/N" /> の部分群構造が <InlineMath math="G" /> の「<InlineMath math="N" /> より上」の部分群構造の完全なコピーであることを保証する。</li>
                    <li>包含関係だけでなく、正規性も保存されるため、正規部分群からなる列の解析に不可欠である。</li>
                    <li>「商をとる」という操作が、群の構造情報を圧縮しつつ、相対的な関係性を保っていることを象徴する定理である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
