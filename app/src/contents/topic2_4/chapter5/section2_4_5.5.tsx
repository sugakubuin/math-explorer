import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BernsteinTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「<InlineMath math="A" /> から <InlineMath math="B" /> への単射があり、<InlineMath math="B" /> から <InlineMath math="A" /> への単射があれば、<InlineMath math="A" /> と <InlineMath math="B" /> は対等（全単射が存在する）である」
                ――この事実は、濃度の大小関係が私たちが慣れ親しんだ順序関係のように振る舞うために不可欠なものです。
                このセクションでは、集合論における最も強力な武器の一つである<strong>ベルンシュタインの定理</strong>を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の主張と重要性</h2>

            <p>
                通常の等式で言えば「<InlineMath math="x \leq y" /> かつ <InlineMath math="y \leq x" /> ならば <InlineMath math="x = y" />」に相当する性質です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.5-1 (シュレーダー・ベルンシュタインの定理)">
                <p>
                    2つの集合 <InlineMath math="A, B" /> について、
                    単射 <InlineMath math="f \colon A \to B" /> と単射 <InlineMath math="g \colon B \to A" /> が存在するならば、
                    <InlineMath math="A" /> と <InlineMath math="B" /> は対等である（<InlineMath math="|A| = |B|" />）。
                </p>
            </ContentBox>

            <p className="mt-4">
                この定理がなぜ強力かというと、<strong>「全単射（ぴったりの対応）」を直接作らなくても、2つの「単射（埋め込み）」を見つけるだけで「同じ大きさ」だと言い切れる</strong>からです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例：定理の威力</h2>

            <p>
                全単射を直接作るのが難しいケースで、この定理は真価を発揮します。
            </p>

            <ContentBox type="example" title="Example 5.5-1 (閉区間と開区間の対等性)">
                <p>
                    閉区間 <InlineMath math="I = [0, 1]" /> と開区間 <InlineMath math="J = (0, 1)" /> が対等であることを示しましょう。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>単射 <InlineMath math="J \to I" />:</strong> 包含写像 <InlineMath math="x \mapsto x" /> は明らかに単射。
                    </li>
                    <li>
                        <strong>単射 <InlineMath math="I \to J" />:</strong> 例えば <InlineMath math="x \mapsto \frac{1}{2}x + \frac{1}{4}" /> とすれば、<InlineMath math="[0, 1]" /> を <InlineMath math="[1/4, 3/4]" /> へ縮小して埋め込めるので単射。
                    </li>
                </ul>
                <p className="mt-4">
                    ベルンシュタインの定理により、これら2つの区間は対等、つまり <InlineMath math="|[0, 1]| = |(0, 1)|" /> であることが結論づけられます。
                    端点を含むか含まないかは、無限集合の濃度という観点からは影響を与えないのです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明のアイデア</h2>

            <p>
                この定理の証明は非常に独創的です。2つの写像 <InlineMath math="f, g" /> を往復させることで、集合 <InlineMath math="A" /> を「いつか元に辿れるグループ」や「永遠に往復し続けるグループ」に切り分け、それぞれで適切な写像を選びます。
            </p>

            <ContentBox type="proof" title="Proof (概要)">
                <p>
                    <InlineMath math="A" /> の各元 <InlineMath math="a" /> に対して、写像の履歴を <InlineMath math="\dots \to B \xrightarrow{g} A \xrightarrow{f} B \xrightarrow{g} A" /> と遡る。<br />
                    1. 遡りが <InlineMath math="A" /> の元で止まるもの。<br />
                    2. 遡りが <InlineMath math="B" /> の元で止まるもの。<br />
                    3. 永遠に遡れる、または循環するもの。<br />
                    これらのグループごとに <InlineMath math="f" /> または <InlineMath math="g^{-1}" /> を適切に繋ぎ合わせることで、<InlineMath math="A" /> から <InlineMath math="B" /> への全単射を構成できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="全比較可能性と選択公理">
                <p>
                    「どんな2つの濃度も必ず一方が他方以下である（比較可能である）」という性質（<InlineMath math="|A| \leq |B|" /> または <InlineMath math="|B| \leq |A|" />）も重要です。
                    実は、この「濃度の比較可能性」は、集合論の強力な公理である<strong>「選択公理」</strong>と論理的に同値であることが知られています。
                    ベルンシュタインの定理自体は選択公理を使わずに証明できますが、濃度の世界を完全に順序立てるには、選択公理というさらなる一歩が必要になります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ベルンシュタインの定理</strong>は、互いに単射が存在すれば対等であることを保証する。</li>
                    <li>この定理により、複雑な全単射を作ることなく、単純な埋め込み（単射）だけで濃度の一致を示せる。</li>
                    <li>代表的な応用として、端点の有無が異なる区間同士の濃度の一致などが示される。</li>
                    <li>濃度の順序関係に「反対称律」を与え、数としての扱いを正当化する極めて重要な定理である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
