import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InteriorClosureBoundary() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                与えられた集合 <InlineMath math="A" /> に対して、その「内側」や「ふち」や「ぎりぎりまで膨らませた範囲」を考えることは、
                位相空間における解析の基本です。
                ここでは、内部、閉包、境界、そして集積点という 4 つの重要な概念を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内部・閉包</h2>

            <p>
                ある集合に含まれる最大の開集合や、ある集合を含む最小の閉集合を考えることができます。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (内部と閉包)">
                <p>
                    位相空間 <InlineMath math="X" /> の部分集合 <InlineMath math="A" /> に対して：
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>内部 (Interior)</strong>: <InlineMath math="A" /> に含まれるすべての開集合の和集合。
                        <BlockMath math="\mathrm{Int}(A) = \bigcup \{ U \in \mathcal{O} \mid U \subset A \}" />
                        <InlineMath math="A^\circ" /> とも書かれる。内部の元を <InlineMath math="A" /> の<strong>内点</strong>と呼ぶ。
                    </li>
                    <li>
                        <strong>閉包 (Closure)</strong>: <InlineMath math="A" /> を含むすべての閉集合의 共通部分。
                        <BlockMath math="\overline{A} = \bigcap \{ F \in \mathcal{F} \mid A \subset F \}" />
                        閉包の元を <InlineMath math="A" /> の<strong>触点</strong>と呼ぶ。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-1 (有理数集合の内部・閉包)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> において、有理数全体の集合 <InlineMath math="\mathbb{Q}" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><strong>内部</strong>： <InlineMath math="\mathrm{Int}(\mathbb{Q}) = \emptyset" /> である。どんな空でない開区間 <InlineMath math="(a, b)" /> をとっても、その中には必ず無理数が含まれるため、<InlineMath math="\mathbb{Q}" /> に含まれる開集合は空集合しかない。</li>
                    <li><strong>閉包</strong>： <InlineMath math="\overline{\mathbb{Q}} = \mathbb{R}" /> である。任意の点 <InlineMath math="x \in \mathbb{R}" /> に対して、そのどんな近傍にも有理数が含まれるため、すべての実数は <InlineMath math="\mathbb{Q}" /> の触点となる。</li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                定義から直ちに、内部は開集合であり、閉包は閉集合であることがわかります。次の命題は、これらが「最大」や「最小」であることを保証します。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-1 (内部・閉包の性質)">
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="\mathrm{Int}(A)" /> は <InlineMath math="A" /> に含まれる最大の開集合である。</li>
                    <li><InlineMath math="\overline{A}" /> は <InlineMath math="A" /> を含む最小の閉集合である。</li>
                    <li><InlineMath math="A" /> が開集合 <InlineMath math="\iff A = \mathrm{Int}(A)" />。</li>
                    <li><InlineMath math="A" /> が閉集合 <InlineMath math="\iff A = \overline{A}" />。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 内部の極大性：</strong>
                    <br />
                    定義より <InlineMath math="\mathrm{Int}(A)" /> は <InlineMath math="A" /> に含まれる開集合の和集合である。
                    位相の公理より開集合の和集合は開集合であるから、 <InlineMath math="\mathrm{Int}(A)" /> は開集合である。
                    また、<InlineMath math="A" /> に含まれる任意の開集合 <InlineMath math="U" /> は定義式の和集合のメンバーであるから、<InlineMath math="U \subset \mathrm{Int}(A)" /> が成り立つ。
                    よって <InlineMath math="\mathrm{Int}(A)" /> は <InlineMath math="A" /> に含まれる最大の開集合である。
                </p>
                <p className="mt-4">
                    <strong>2. 閉包の極小性：</strong>
                    <br />
                    定義より <InlineMath math="\overline{A}" /> は <InlineMath math="A" /> を含む閉集合の共通部分である。
                    閉集合の公理より閉集合の共通部分は閉集合であるから、 <InlineMath math="\overline{A}" /> は閉集合である。
                    また、<InlineMath math="A" /> を含む任意の閉集合 <InlineMath math="F" /> は定義式の共通部分のメンバーであるから、<InlineMath math="\overline{A} \subset F" /> が成り立つ。
                    よって <InlineMath math="\overline{A}" /> は <InlineMath math="A" /> を含む最小の閉集合である。
                </p>
                <p className="mt-4">
                    <strong>3. 開集合・閉集合の特徴づけ：</strong>
                    <br />
                    <InlineMath math="A" /> が開集合なら、<InlineMath math="A" /> 自身が「<InlineMath math="A" /> に含まれる最大の開集合」なので <InlineMath math="A = \mathrm{Int}(A)" /> である。
                    逆も明らかである。閉集合についても同様に、<InlineMath math="A" /> が閉集合なら「<InlineMath math="A" /> を含む最小の閉集合」として <InlineMath math="A = \overline{A}" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">境界・導集合</h2>

            <p>
                集合の「ふち」にあたる部分を厳密に定義しましょう。
            </p>

            <ContentBox type="definition" title="Definition 2.2-2 (境界・導集合)">
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>境界 (Boundary)</strong>: 閉包から内部を取り除いた部分。
                        <BlockMath math="\partial A = \overline{A} \setminus \mathrm{Int}(A)" />
                    </li>
                    <li>
                        <strong>集積点 (Accumulation Point)</strong>: 点 <InlineMath math="x \in X" /> の任意の開近傍 <InlineMath math="U" /> が、
                        <InlineMath math="x" /> 以外の <InlineMath math="A" /> の元を少なくとも 1 つ含むとき、<InlineMath math="x" /> を <InlineMath math="A" /> の集積点という。
                    </li>
                    <li>
                        <strong>導集合 (Derived Set)</strong>: <InlineMath math="A" /> の集積点全体の集合。 <InlineMath math="A'" /> と書く。
                    </li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                これらの概念の間には、空間を分割するような美しい関係があります。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-2 (相互関係)">
                <p>
                    任意の <InlineMath math="A \subset X" /> に対して：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="\overline{A} = \mathrm{Int}(A) \cup \partial A" />（非交和）</li>
                    <li><InlineMath math="\overline{A} = A \cup A'" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>(1) <InlineMath math="\overline{A} = \mathrm{Int}(A) \cup \partial A" /> の証明：</strong>
                    <br />
                    境界の定義より <InlineMath math="\partial A = \overline{A} \setminus \mathrm{Int}(A)" /> である。
                    また、内部の定義より <InlineMath math="\mathrm{Int}(A) \subset A" /> であり、閉包の定義より <InlineMath math="A \subset \overline{A}" /> であるから、<InlineMath math="\mathrm{Int}(A) \subset \overline{A}" /> が成り立つ。
                    集合論の等位式 <InlineMath math="X = Y \cup (X \setminus Y)" /> （ただし <InlineMath math="Y \subset X" />）を適用すると、
                    <BlockMath math="\overline{A} = \mathrm{Int}(A) \cup (\overline{A} \setminus \mathrm{Int}(A)) = \mathrm{Int}(A) \cup \partial A" />
                    となる。また、差集合の性質から <InlineMath math="\mathrm{Int}(A) \cap \partial A = \emptyset" /> である。
                </p>
                <p className="mt-4">
                    <strong>(2) <InlineMath math="\overline{A} = A \cup A'" /> の証明：</strong>
                    <br />
                    触点（閉包の元）の近傍を用いた特徴づけ「<InlineMath math="x \in \overline{A} \iff \forall U \in \mathcal{V}(x), U \cap A \neq \emptyset" />」を用いる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>
                        (<InlineMath math="\supset" />) <InlineMath math="A \subset \overline{A}" /> は自明である。また、<InlineMath math="x \in A'" /> ならば定義より任意の近傍 <InlineMath math="U" /> が <InlineMath math="U \cap (A \setminus \{x\}) \neq \emptyset" /> を満たすので、特に <InlineMath math="U \cap A \neq \emptyset" /> となり <InlineMath math="x \in \overline{A}" /> である。
                    </li>
                    <li>
                        (<InlineMath math="\subset" />) <InlineMath math="x \in \overline{A}" /> とする。もし <InlineMath math="x \in A" /> ならば成立する。
                        もし <InlineMath math="x \notin A" /> ならば、任意の近傍 <InlineMath math="U" /> に対して <InlineMath math="U \cap A \neq \emptyset" /> であり、かつ <InlineMath math="x \notin A" /> なので <InlineMath math="U \cap (A \setminus \{x\}) \neq \emptyset" /> となる。
                        これは <InlineMath math="x" /> が集積点であることを意味し、<InlineMath math="x \in A'" /> である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="example" title="Example 2.2-1 (実数直線での例)">
                <p>
                    <InlineMath math="\mathbb{R}" /> において、<InlineMath math="A = (0, 1]" /> とすると：
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>内部：<InlineMath math="\mathrm{Int}(A) = (0, 1)" /></li>
                    <li>閉包：<InlineMath math="\overline{A} = [0, 1]" /></li>
                    <li>境界：<InlineMath math="\partial A = \{0, 1\}" /></li>
                    <li>導集合：<InlineMath math="A' = [0, 1]" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="開の内部、閉の閉包">
                <p>
                    「<InlineMath math="\mathrm{Int}(A)" /> は開集合か？」「<InlineMath math="\overline{A}" /> は閉集合か？」という問いは、定義を振り返れば自明です。
                    内部は開集合の和集合なので開集合であり、閉包は閉集合の共通部分なので閉集合です。
                    このように抽象的な定義は、一見複雑そうに見えて、実は性質を自動的に保証するように設計されていることが多いのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>内部</strong>は含まれる最大の開集合、<strong>閉包</strong>は含む最小の閉集合。</li>
                    <li><strong>境界</strong>は閉包から内部を除いた「ふち」の部分。</li>
                    <li><strong>集積点</strong>は、その近くに自分以外の集合の点がいくらでもあるような点。</li>
                    <li>閉包は、集合そのものに集積点をすべて付け加えたものに等しい。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
