import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfColimits() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                極限の矢印をすべて逆転させたものが「余極限」です。直積や引き戻しが「条件を満たす要素を取り出す（絞り込む）」ような操作であるのに対し、余極限は「貼り合わせる、生成する、割る」といった操作に対応します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">余極限の定義と双対性</h2>

            <ContentBox
                type="definition"
                title="Definition 5.3-1 (余極限 / Colimit)"
            >
                <p>
                    図式 <InlineMath math="D : \mathcal{J} \to \mathcal{C}" /> の<strong>余極限</strong>とは、<InlineMath math="D" /> 上のすべての余錐の中で「始対象（Initial object）」となるような余錐のことである。
                </p>
                <p>
                    すなわち、ある余錐 <InlineMath math="(L, \{\iota_j\})" /> （ここで <InlineMath math="\iota_j : D(j) \to L" />）が余極限であるとは、任意の余錐 <InlineMath math="(N, \{\lambda_j\})" /> に対して、一意な射 <InlineMath math="u : L \to N" /> が存在して
                    <BlockMath math="u \circ \iota_j = \lambda_j" />
                    が可換になることをいう。<InlineMath math="L = \varinjlim D" /> と書く。
                </p>
                <p>
                    （極限が反対圏 <InlineMath math="\mathcal{C}^{op}" /> において双対化されたものが余極限である。）
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.3-1 (余積 / Coproduct)"
            >
                <p>
                    離散圏上の図式に対する余極限は<strong>余積 <InlineMath math="A \sqcup B" /></strong> である。
                </p>
                <p>
                    各圏における余積の具体的な姿は大きく異なる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong><InlineMath math="\mathbf{Set}" />（集合）や <InlineMath math="\mathbf{Top}" />（位相空間）：</strong> 非交和（直和、Disjoint Union）。単に横に並べるだけ。</li>
                    <li><strong><InlineMath math="\mathbf{Grp}" />（群）：</strong> 自由積（Free Product） <InlineMath math="A * B" />。要素の任意の文字列（語）を作るため、非交和よりはるかに巨大になる。</li>
                    <li><strong><InlineMath math="\mathbf{Ab}" /> や <InlineMath math="\mathbf{Mod}_R" />：</strong> 直和 <InlineMath math="A \oplus B" />。</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                極限の「等化子」と「引き戻し」の双対も、数学において頻出する重要な構成です。
            </p>

            <ContentBox
                type="example"
                title="Example 5.3-2 (余等化子と押し出し)"
            >
                <p>
                    <strong>余等化子（Coequalizer）：</strong><br/>
                    並列射 <InlineMath math="f, g : A \rightrightarrows B" /> の余極限。集合の圏では、<InlineMath math="B" /> に同値関係「任意の <InlineMath math="a \in A" /> について <InlineMath math="f(a) \sim g(a)" />」を生成して割った商集合 <InlineMath math="B / \sim" /> となる。代数学での「イデアルで割る」操作の一般化である。
                </p>
                <p>
                    <strong>押し出し（Pushout）：</strong><br/>
                    スパン <InlineMath math="A \leftarrow C \rightarrow B" /> の余極限（<InlineMath math="A \sqcup_C B" /> と書く）。これは「<InlineMath math="A" /> と <InlineMath math="B" /> の非交和をとり、共通部分 <InlineMath math="C" /> に由来する部分を同一視して貼り合わせる」操作である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">余極限の応用</h2>

            <p className="leading-relaxed">
                余極限の視点を持つと、代数や幾何でバラバラに学んだ定理が、実は「余極限を計算しているだけ」という共通の枠組みに収まることがわかります。
            </p>

            <ContentBox
                type="remark"
                title="代数構造と貼り合わせの統一"
            >
                <p>
                    例えば、位相幾何学で登場する「ファン・カンペンの定理（Seifert–van Kampen Theorem）」（Topic 3-12）は、空間を <InlineMath math="U" /> と <InlineMath math="V" /> に分割したときの基本群の計算公式です。
                </p>
                <p>
                    <BlockMath math="\pi_1(U \cup V) \cong \pi_1(U) *_{\pi_1(U \cap V)} \pi_1(V)" />
                </p>
                <p>
                    右辺の複雑なアマルガム積は、実は群の圏 <InlineMath math="\mathbf{Grp}" /> における「押し出し」そのものです。
                    つまり、ファン・カンペンの定理は圏論の言葉で言えば<strong>「基本群関手 <InlineMath math="\pi_1" /> は、被覆による特定の余極限（押し出し）を保存する」</strong>という美しい一言に帰着されます。
                    同様に、環論の「テンソル積」も、加群の圏におけるある種の余極限として構成されます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>極限の双対である<strong>余極限</strong>は、図式からのすべての射を受け止める普遍的な「始余錐」である。</li>
                    <li>余極限の代表例は、<strong>余積（直和・自由積）</strong>、<strong>余等化子（商）</strong>、<strong>押し出し（貼り合わせ）</strong>である。</li>
                    <li>「等式で割る」「共通部分で貼り合わせる」という数学の構成は、すべて余極限として統一的に定式化できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
