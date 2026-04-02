import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OrderProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                順序が定義された世界（半順序集合）では、あるグループ（部分集合）の中で「一番端にあるもの」を指す言葉がいくつかあります。
                私たちが日常的に使う「最大」という言葉には、実は<strong>最大元</strong>と<strong>極大元</strong>という、数学的に異なる2つの意味が含まれています。
                これらの概念を区別し、さらに解析学で重要となる<strong>上限・下限</strong>についても厳密に定義していきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最大元・最小元 と 極大元・極小元</h2>

            <p>
                「誰よりも大きい」か、それとも「自分より大きい奴がいない」か。この微妙な違いが半順序集合の面白さです。
            </p>

            <ContentBox type="definition" title="Definition 4.2-1 (最大元・極大元など)">
                <p>
                    半順序集合 <InlineMath math="(P, \leq)" /> と、その部分集合 <InlineMath math="A \subset P" />、および元 <InlineMath math="a \in A" /> に対して：
                </p>
                <ol className="list-decimal list-inside space-y-6 mt-4 ml-2">
                    <li>
                        <strong>最大元（Greatest Element）:</strong><br />
                        すべての <InlineMath math="x \in A" /> に対して <InlineMath math="x \leq a" /> が成り立つとき、<InlineMath math="a" /> を <InlineMath math="A" /> の<strong>最大元</strong>という。
                    </li>
                    <li>
                        <strong>最小元（Least Element）:</strong><br />
                        すべての <InlineMath math="x \in A" /> に対して <InlineMath math="a \leq x" /> が成り立つとき、<InlineMath math="a" /> を <InlineMath math="A" /> の<strong>最小元</strong>という。
                    </li>
                    <li>
                        <strong>極大元（Maximal Element）:</strong><br />
                        <InlineMath math="a \leq x" /> を満たす <InlineMath math="x \in A" /> が <InlineMath math="x = a" /> 以外に存在しないとき、<InlineMath math="a" /> を <InlineMath math="A" /> の<strong>極大元</strong>という。
                    </li>
                    <li>
                        <strong>極小元（Minimal Element）:</strong><br />
                        <InlineMath math="x \leq a" /> を満たす <InlineMath math="x \in A" /> が <InlineMath math="x = a" /> 以外に存在しないとき、<InlineMath math="a" /> を <InlineMath math="A" /> の<strong>極小元</strong>という。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="remark" title="最大元と極大元の決定的な違い">
                <p>
                    全順序（一本道の並び）では、最大元と極大元は一致します。しかし、枝分かれがある半順序では状況が異なります。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <strong>最大元</strong>は、<strong>「すべての元との比較」</strong>を勝ち抜いた唯一の王者です。存在すれば必ず一意です。
                    </li>
                    <li>
                        <strong>極大元</strong>は、<strong>「自分より上がいない」</strong>というどん詰まりの状態です。比較不能な複数の枝がある場合、それぞれの枝の先端がすべて極大元となるため、一つとは限りません。
                    </li>
                </ul>
                <p className="mt-4">
                    例えば、あるグループの包含関係 <InlineMath math="\{ \{1\}, \{2\} \}" /> において、<InlineMath math="\{1\}" /> も <InlineMath math="\{2\}" /> も極大元ですが、どちらも他方を含まないため最大元ではありません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">上限と下限</h2>

            <p>
                次に、「部分集合の中」ではなく、「外側の世界も含めた境界線」を考えます。
            </p>

            <ContentBox type="definition" title="Definition 4.2-2 (上界・下界・上限・下限)">
                <p>
                    半順序集合 <InlineMath math="(P, \leq)" /> と、部分集合 <InlineMath math="A \subset P" /> に対して：
                </p>
                <ol className="list-decimal list-inside space-y-6 mt-4 ml-2">
                    <li>
                        <strong>上界（Upper Bound）:</strong><br />
                        元 <InlineMath math="u \in P" /> が、すべての <InlineMath math="x \in A" /> に対して <InlineMath math="x \leq u" /> を満たすとき、<InlineMath math="u" /> を <InlineMath math="A" /> の<strong>上界</strong>という。
                    </li>
                    <li>
                        <strong>上限（Supremum / Least Upper Bound）:</strong><br />
                        <InlineMath math="A" /> の上界全体の集合に最小元が存在するとき、それを <InlineMath math="A" /> の<strong>上限</strong>といい、<InlineMath math="\sup A" /> と表す。
                    </li>
                    <li>
                        <strong>下界（Lower Bound）:</strong><br />
                        元 <InlineMath math="l \in P" /> が、すべての <InlineMath math="x \in A" /> に対して <InlineMath math="l \leq x" /> を満たすとき、<InlineMath math="l" /> を <InlineMath math="A" /> の<strong>下界</strong>という。
                    </li>
                    <li>
                        <strong>下限（Infimum / Greatest Lower Bound）:</strong><br />
                        <InlineMath math="A" /> の下界全体の集合に最大元が存在するとき、それを <InlineMath math="A" /> の<strong>下限</strong>といい、<InlineMath math="\inf A" /> と表す。
                    </li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                上限 <InlineMath math="\sup A" /> は「上界のなかで最も小さいもの」です。
                最大元が集合に含まれる「内部の実力者」であるのに対し、上限は「これより上には誰もいない、ギリギリの境界線（ガードレール）」のようなイメージです。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (数直線での例)">
                <p>
                    実数の集合 <InlineMath math="P = \mathbb{R}" /> において、開区間 <InlineMath math="A = (0, 1)" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <InlineMath math="A" /> に<strong>最大元は存在しない</strong>（<InlineMath math="0.99, 0.999 \dots" /> といくらでも大きな元が <InlineMath math="A" /> の中にあるが、<InlineMath math="1" /> 自身は含まないため）。
                    </li>
                    <li>
                        <InlineMath math="A" /> の上界は <InlineMath math="[1, +\infty)" /> である。
                    </li>
                    <li>
                        その上界の中で最小なものは <InlineMath math="1" /> なので、<strong>上限 <InlineMath math="\sup A = 1" /></strong> となる。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="完備性と数学の進歩">
                <p>
                    「空でない上に有界な集合は、必ず上限を持つ」という性質を<strong>完備性（Completeness）</strong>といいます。
                    実数 <InlineMath math="\mathbb{R}" /> は完備性を持ちますが、有理数 <InlineMath math="\mathbb{Q}" /> は持ちません（例：<InlineMath math="x^2 < 2" /> を満たす有理数の上限は、有理数の範囲には存在しない）。
                    この境界線の有無が、微分積分を存分に行える実数の世界と、隙間だらけの有理数の世界を分ける決定的な違いとなります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>最大元</strong>は誰よりも大きく、<strong>極大元</strong>は自分より大きい奴がいない元である（半順序では一致しない）。</li>
                    <li><strong>上限（sup）</strong>は、上界（上側の境界線）の中でもっとも小さいものであり、必ずしも集合の元である必要はない。</li>
                    <li>実数の持つ「上限が必ず存在する」という性質（完備性）は、現代解析学の土台となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
