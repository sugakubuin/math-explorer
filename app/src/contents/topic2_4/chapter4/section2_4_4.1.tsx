import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OrderDefinitions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 3 では、集合間の一般的な「関係」を学び、特に対象を同一視する「同値関係」を詳しく見ました。
                この章で扱うもう一つの重要な関係が<strong>順序関係（Order Relation）</strong>です。
                順序とは、集合の元同士に「どちらが先か、または大きいか」という比較構造を与えるものです。
                順序の概念を厳密に定義することで、最大・最小の議論や、無限まで続くステップ（帰納法）を論理的に扱えるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">半順序の定義</h2>

            <p>
                「すべての元が比較可能である必要はない」という緩やかな順序を、<strong>半順序</strong>と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (半順序・半順序集合)">
                <p>
                    集合 <InlineMath math="P" /> 上の関係 <InlineMath math="\leq" /> が以下の3条件を満たすとき、これを <InlineMath math="P" /> 上の<strong>半順序（Partial Order）</strong>という。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li><strong>反射律：</strong> すべての <InlineMath math="a \in P" /> に対して、<InlineMath math="a \leq a" />。</li>
                    <li><strong>反対称律：</strong> <InlineMath math="a \leq b" /> かつ <InlineMath math="b \leq a \implies a = b" />。</li>
                    <li><strong>推移律：</strong> <InlineMath math="a \leq b" /> かつ <InlineMath math="b \leq c \implies a \leq c" />。</li>
                </ol>
                <p className="mt-4">
                    半順序が定められた集合 <InlineMath math="P" /> を、<strong>半順序集合（Partially Ordered Set, poset）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="mt-4">
                同値関係との違いは、「対称律」の代わりに<strong>「反対称律」</strong>（双方向なら同一物であること）を要求している点にあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全順序の定義</h2>

            <p>
                半順序の中で、さらに「どんな2つの元も必ず比較できる」という強い条件を満たすものを<strong>全順序</strong>と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 4.1-2 (全順序・全順序集合)">
                <p>
                    半順序集合 <InlineMath math="(P, \leq)" /> が次の条件を満たすとき、<InlineMath math="\leq" /> を<strong>全順序（Total Order / Linear Order）</strong>という。
                </p>
                <ul className="list-disc list-inside mt-4 ml-4">
                    <li><strong>全比較可能性：</strong> 任意の <InlineMath math="a, b \in P" /> に対して、 「<InlineMath math="a \leq b" /> または <InlineMath math="b \leq a" />」 が成り立つ。</li>
                </ul>
                <p className="mt-4">
                    全順序が定められた集合を、<strong>全順序集合（線形順序集合）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例</h2>

            <p>
                「並んでいるもの」だけが順序ではありません。枝分かれした構造もまた順序として捉えられます。
            </p>

            <ContentBox type="example" title="Example 4.1-1 (順序のバリエーション)">
                <ul className="list-disc list-inside space-y-4 mt-2 ml-4">
                    <li>
                        <strong>実数の大小関係 <InlineMath math="(\mathbb{R}, \leq)" /></strong>：<br />
                        これは<strong>全順序</strong>の代表例です。どんな2つの実数も一列に並べることができます。
                    </li>
                    <li>
                        <strong>べき集合の包含関係 <InlineMath math="(\mathcal{P}(A), \subset)" /></strong>：<br />
                        これは一般には<strong>半順序</strong>です。例えば <InlineMath math="A = \{1, 2\}" /> のとき、<InlineMath math="\{1\}" /> と <InlineMath math="\{2\}" /> はどちらも他方を含まないため「比較不能」です。
                    </li>
                    <li>
                        <strong>自然数の整除関係 <InlineMath math="(\mathbb{N}, \mid)" /></strong>：<br />
                        「<InlineMath math="a \mid b \iff b" /> が <InlineMath math="a" /> で割り切れる」という関係も、反射律・反対称律・推移律を満たす<strong>半順序</strong>です。
                        <InlineMath math="2" /> と <InlineMath math="3" /> は互いに割り切れないため、この順序では比較できません。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="ハッセ図：半順序の「地図」">
                <p>
                    有限な半順序集合を視覚化する便利な道具に<strong>ハッセ図（Hasse Diagram）</strong>があります。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="a \leq b" />（かつ間に別の元がない）とき、<InlineMath math="b" /> を <InlineMath math="a" /> より上に描き、線で結びます。</li>
                    <li>反射的（自分自身への線）や、推移的（遠い元への線）な線は、図をシンプルにするため省略します。</li>
                </ul>
                <p className="mt-4">
                    ハッセ図が「一本の縦線」になれば全順序であり、複雑に枝分かれしていれば、全順序ではない純粋な半順序であることを示しています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>半順序</strong>は、反射・反対称・推移律を満たす「比較可能とは限らない」順序である。</li>
                    <li><strong>全順序</strong>は、さらに「すべての2元が比較可能である」という強い条件を持つ。</li>
                    <li>実数の大小は全順序だが、集合の包含関係や整除関係は、枝分かれを持つ半順序である。</li>
                    <li>半順序の構造は、<strong>ハッセ図</strong>を用いることで視覚的に理解できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
