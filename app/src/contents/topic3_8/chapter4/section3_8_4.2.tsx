import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function QuotientGroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                正規部分群 <InlineMath math="H \trianglelefteq G" /> があるとき、その剰余類の集合 <InlineMath math="G/H" /> は、元の演算を引き継いでそれ自身が一つの「群」となります。
                これが商群という概念で、群の構造を簡略化して捉えるための非常に強力な道具です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">商群の構成と正当性</h2>

            <ContentBox type="theorem" title="Theorem 4.2-1 (商群の構成)">
                <p>
                    正規部分群 <InlineMath math="H \trianglelefteq G" /> に対し、剰余類の集合
                    <BlockMath math="G/H = \{ aH \mid a \in G \}" />
                    を考える。この集合に演算を
                    <BlockMath math="(aH) \cdot (bH) = (ab)H" />
                    で定めると、<InlineMath math="G/H" /> は群をなす。これを <InlineMath math="H" /> による <InlineMath math="G" /> の<b>商群 (Quotient group)</b>、または因子群という。
                </p>
            </ContentBox>

            <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100">
                なぜ正規部分群である必要があるのか？
            </p>
            <p className="leading-relaxed">
                剰余類の代表元 <InlineMath math="a" /> ではなく、クラス全体 <InlineMath math="aH" /> の間の演算として定義が成り立つ（well-defined である）ためには、正規性が不可欠です。
            </p>

            <ContentBox type="proof" title="well-defined 性の証明">
                <p>
                    代表元の取り方によらず演算が定まることを示す。
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <InlineMath math="aH = a'H" /> かつ <InlineMath math="bH = b'H" /> と仮定する。
                        このとき、ある <InlineMath math="h_1, h_2 \in H" /> が存在して、<InlineMath math="a' = ah_1, b' = bh_2" /> と書ける。
                    </li>
                    <li>
                        このとき、積 <InlineMath math="a'b'" /> は <InlineMath math="a'b' = (ah_1)(bh_2) = a(h_1b)h_2" /> となる。
                    </li>
                    <li>
                        ここで <InlineMath math="H" /> は正規部分群（<InlineMath math="H b = b H" />）なので、
                        <InlineMath math="h_1 b = b h_3" /> となるような <InlineMath math="h_3 \in H" /> が存在する。
                    </li>
                    <li>
                        したがって、<InlineMath math="a'b' = a(bh_3)h_2 = (ab)(h_3h_2)" /> となり、
                        <InlineMath math="h_3h_2 \in H" /> より、<InlineMath math="a'b' \in abH" /> である。
                    </li>
                    <li>
                        よって <InlineMath math="(a'b')H = (ab)H" /> となり、代表元の選び方に依存せず演算が定まることが示された。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">商群の例と解釈</h2>

            <p className="leading-relaxed">
                商群は、「特定の性質を無視して、大まかな構造だけを見る」操作と捉えることができます。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (剰余類 Z/nZ)">
                <p>
                    整数加法群 <InlineMath math="\mathbb{Z}" /> とその正規部分群 <InlineMath math="n\mathbb{Z}" /> を考える（アーベル群なので常に正規）。
                    この商群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> は、
                    <BlockMath math="(3 + n\mathbb{Z}) + (4 + n\mathbb{Z}) = (7 + n\mathbb{Z})" />
                    のように、「<InlineMath math="n" /> で割った余り」のみに注目した加法群そのものである。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-2 (S3/A3)">
                <p>
                    対称群 <InlineMath math="S_3" /> とその指数 2 の正規部分群である交代群 <InlineMath math="A_3" /> を考える。
                    商群 <InlineMath math="S_3/A_3" /> の位数は、ラグランジュの定理より：
                    <BlockMath math="|S_3/A_3| = [S_3 : A_3] = 2" />
                    である。位数 2 の群は同型を除いてただ一つ（<InlineMath math="\mathbb{Z}/2\mathbb{Z}" />）なので、
                    <InlineMath math="S_3/A_3 \cong \mathbb{Z}/2\mathbb{Z}" /> となる。
                    これは「偶置換か、奇置換か」のみを区別する構造を抽出したものである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="商群の数学的な意味">
                <p>
                    商群 <InlineMath math="G/H" /> は、<InlineMath math="H" /> の元を「すべて単位元と同じもの（無視して良いもの）」とみなした時に現れる構造です。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="H" /> が大きければ大きいほど、商群 <InlineMath math="G/H" /> は小さく単純な構造になります。</li>
                    <li>逆に、<InlineMath math="H = \{e\}" /> であれば、商群は元の群そのもの（<InlineMath math="G/\{e\} \cong G" />）です。</li>
                </ul>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正規部分群の剰余類全体の集合 <InlineMath math="G/H" /> は、自然な演算で商群をなす。</li>
                    <li>演算の well-defined 性には、正規部分群の条件 <InlineMath math="h b = b h'" /> が不可欠である。</li>
                    <li>商群は、部分群の情報を同一視したあとに残る「マクロな構造」を表している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
