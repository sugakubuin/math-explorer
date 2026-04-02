import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ContinuumHypothesis() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「自然数」と「実数」――この2つの無限の間には、果たして別のサイズの無限が存在するのでしょうか？
                この章の最後を飾るのは、集合論において最も魅惑的で、かつ数学の枠組みそのものに問いを投げかけるテーマ、<strong>連続体仮説</strong>です。
                実数の濃度の正体と、人類が「無限の階段」をどこまで解明できたのかを概観しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続体濃度</h2>

            <p>
                実数全体の集合 <InlineMath math="\mathbb{R}" /> の濃度を、<strong>連続体濃度（Power of the Continuum）</strong>と呼び、ドイツ文字の <InlineMath math="\mathfrak{c}" /> で表すのが慣習です。
            </p>

            <ContentBox type="definition" title="Definition 5.6-1 (連続体濃度)">
                <p>
                    実数集合 <InlineMath math="\mathbb{R}" /> の濃度を <InlineMath math="\mathfrak{c}" /> と書く。
                    これまでの議論より、次が成り立つ：
                </p>
                <BlockMath math="\mathfrak{c} = 2^{\aleph_0}" />
            </ContentBox>

            <p className="mt-4">
                §5.4 のカントールの定理により、<InlineMath math="\aleph_0 < \mathfrak{c}" /> であることは保証されています。
                つまり、連続体濃度は可算無限よりも「真に大きい」無限です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続体仮説</h2>

            <p>
                ここで自然に湧き上がる疑問が、「<InlineMath math="\aleph_0" /> と <InlineMath math="\mathfrak{c}" /> の中間に位置する濃度はあるのか？」という問いです。
            </p>

            <ContentBox type="remark" title="連続体仮説 (Continuum Hypothesis, CH)">
                <p>
                    「<InlineMath math="\aleph_0 < \mathfrak{m} < \mathfrak{c}" /> を満たすような濃度 <InlineMath math="\mathfrak{m}" /> は存在しない」
                    という主張を<strong>連続体仮説</strong>という。
                </p>
                <p className="mt-4">
                    言い換えれば、自然数の「すぐ次」に大きい無限は実数（連続体）である、という仮説です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">数学の限界と「独立性」</h2>

            <p>
                連続体仮説は、カントール自身が生涯をかけて証明しようと試み、ついには果たせなかった難問でした。
                20世紀に入り、数学者たちは驚くべき結論に辿り着きました。
            </p>

            <ContentBox type="theorem" title="連続体仮説の独立性">
                <p>
                    現代数学の標準的な公理系（ZFC公理系）において：
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>クルト・ゲーデル (1940):</strong> 連続体仮説を「正しい」と仮定しても、体系に矛盾は生じない。
                    </li>
                    <li>
                        <strong>ポール・コーエン (1963):</strong> 連続体仮説を「間違い」と仮定しても、体系に矛盾は生じない。
                    </li>
                </ul>
                <p className="mt-4">
                    すなわち、連続体仮説は現在の数学のルール（公理）からは<strong>「証明することも反証することもできない」</strong>ことが証明されました。
                    これを「公理系から<strong>独立</strong>している」といいます。
                </p>
            </ContentBox>

            <p className="mt-4">
                これは、「正しいか間違いかが定まっていない」のではなく、今の私たちの選んだ「数学のルール」が、この問題を決定するには不十分であることを示しています。
                私たちは、連続体仮説が正しい世界（集合論）と、そうでない世界（集合論）のどちらも自由に選ぶことができるのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§5.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>実数集合 <InlineMath math="\mathbb{R}" /> の濃度は<strong>連続体濃度</strong> <InlineMath math="\mathfrak{c}" /> と呼ばれ、<InlineMath math="2^{\aleph_0}" /> に等しい。</li>
                    <li><strong>連続体仮説 (CH)</strong> は、可算濃度と連続体濃度の間に中間的な濃度は存在しないという主張である。</li>
                    <li>連続体仮説は ZFC 公理系から<strong>独立</strong>しており、証明も反証もできないことがゲーデルとコーエンによって示された。</li>
                    <li>数学の公理系には、それ自身の枠組みだけでは解決できない問題が存在するという「限界」が、無限の濃度の世界でも示されている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
