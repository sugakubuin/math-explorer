import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CantorsTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では「自然数よりも実数の方が多い」ことを見ました。では、実数よりも大きな無限はあるのでしょうか？
                カントールはこの問いに対し、<strong>「あらゆる集合に対して、それよりも真に大きな濃度を持つ集合が必ず存在する」</strong>という決定的な回答を与えました。
                これにより、無限の世界には終わりがなく、無限に続く階層構造（アレフの列）が存在することが明らかになったのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">濃度の比較</h2>

            <p>
                「より大きい」という概念を、写像の言葉で厳密に定義しておきます。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 (濃度の大小)">
                <p>
                    2つの集合 <InlineMath math="A, B" /> について：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <InlineMath math="A" /> から <InlineMath math="B" /> への<strong>単射</strong>が存在するとき、 <BlockMath math="|A| \leq |B|" /> と書く。
                    </li>
                    <li>
                        <InlineMath math="|A| \leq |B|" /> かつ <InlineMath math="|A| \neq |B|" /> （全単射が存在しない）とき、 <BlockMath math="|A| < |B|" /> と書く。
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">カントールの定理</h2>

            <p>
                「どんなに大きな無限を持ってきても、そのべき集合（部分集合すべての集まり）は、さらに巨大な無限になる」というのがカントールの定理の主張です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-1 (カントールの定理)">
                <p>
                    任意の集合 <InlineMath math="A" /> に対して、次が成り立つ：
                    <BlockMath math="|A| < |\mathcal{P}(A)|" />
                </p>
                <p>
                    （すなわち、<InlineMath math="A" /> から <InlineMath math="\mathcal{P}(A)" /> への全単射は決して存在しない。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、<InlineMath math="a \mapsto \{a\}" /> という写像は <InlineMath math="A" /> から <InlineMath math="\mathcal{P}(A)" /> への単射なので、<InlineMath math="|A| \leq |\mathcal{P}(A)|" /> は明らかである。
                </p>
                <p className="mt-4">
                    次に、<InlineMath math="A" /> から <InlineMath math="\mathcal{P}(A)" /> への<strong>全射</strong>が存在すると仮定して矛盾を導く。<br />
                    全射 <InlineMath math="f \colon A \to \mathcal{P}(A)" /> が存在するとする。
                    このとき、次の集合 <InlineMath math="D \in \mathcal{P}(A)" /> を構成する（対角線論法の一般化）：
                    <BlockMath math="D = \{ x \in A \mid x \notin f(x) \}" />
                </p>
                <p className="mt-4">
                    <InlineMath math="f" /> は全射なので、ある元 <InlineMath math="d \in A" /> が存在して <InlineMath math="f(d) = D" /> となるはずである。
                    ここで「<InlineMath math="d \in D" /> かどうか」を調べると：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="d \in D" /> ならば、<InlineMath math="D" /> の定義より <InlineMath math="d \notin f(d) = D" />。これは矛盾。</li>
                    <li><InlineMath math="d \notin D" /> ならば、<InlineMath math="D" /> の定義より <InlineMath math="d \in f(d) = D" />。これも矛盾。</li>
                </ul>
                <p className="mt-4">
                    いずれにせよ矛盾が生じるため、全射 <InlineMath math="f" /> は存在し得ない。<br />
                    したがって、全単射も存在せず、<InlineMath math="|A| < |\mathcal{P}(A)|" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">無限の階層：アレフ数</h2>

            <p>
                カントールの定理を繰り返し適用することで、無限の列が得られます。
            </p>
            <BlockMath math="\aleph_0 < 2^{\aleph_0} < 2^{2^{\aleph_0}} < \dots" />
            <p className="mt-4">
                ここで <InlineMath math="2^{\aleph_0}" /> はべき集合 <InlineMath math="\mathcal{P}(\mathbb{N})" /> の濃度であり、これは実数の濃度 <InlineMath math="|\mathbb{R}|" /> に一致します。
                無限は「一つ」ではなく、数えきれないほどのレベルが存在する豊かな構造を持っているのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="ラッセルのパラドックスとの繋がり">
                <p>
                    この証明で用いた集合 <InlineMath math="D" /> の構成は、「自分自身を元として持たない集合すべてを集めた集合」を考える<strong>ラッセルのパラドックス</strong>と酷似しています。
                    カントールの定理は、素朴集合論の限界を突きつけると同時に、公理的集合論（ZFC等）が誕生する大きな契機となりました。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>カントールの定理</strong>は、どんな集合よりもそのべき集合の方が「大きい（濃度が高い）」ことを保証する。</li>
                    <li>この定理は対角線論法をさらに抽象化した議論（ラッセル風のパラドックス）を用いて証明される。</li>
                    <li>この結果により、無限は階層状に無限に存在し、最大濃度を持つ「すべての集合の集合」は存在しないことがわかる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
