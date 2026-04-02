import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EquivalenceRelations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では関係の一般的な性質を学びました。その中でも、数学において最も強力で頻繁に登場するのが<strong>同値関係（Equivalence Relation）</strong>です。
                同値関係とは、一言で言えば「ある特定の観点から見て、対象が同じであるとみなせる」ような関係のことです。
                この概念をマスターすることで、私たちは「数の抽象化」や「空間の貼り合わせ」といった、数学の核心的な操作を自由に行えるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同値関係の定義</h2>

            <p>
                同値関係は、反射律・対称律・推移律という3つの公理を満たす関係として厳密に定義されます。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (同値関係)">
                <p>
                    集合 <InlineMath math="A" /> 上の関係 <InlineMath math="\sim" /> が以下の3条件を満たすとき、これを <InlineMath math="A" /> 上の<strong>同値関係</strong>という。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li><strong>反射律：</strong> すべての <InlineMath math="a \in A" /> に対して、<InlineMath math="a \sim a" />。</li>
                    <li><strong>対称律：</strong> <InlineMath math="a \sim b \implies b \sim a" />。</li>
                    <li><strong>推移律：</strong> <InlineMath math="a \sim b" /> かつ <InlineMath math="b \sim c \implies a \sim c" />。</li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                これらは、「=（等号）」が持っている基本的な性質を抽出したものです。
                実際、通常の等号は「最も細かい」同値関係と言えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同値関係の具体例</h2>

            <p>
                概念を具体化するために、非常に重要な実例を2つ紹介します。
            </p>

            <ContentBox type="example" title="Example 3.2-1 (整数の合同関係)">
                <p>
                    固定された自然数 <InlineMath math="n \in \mathbb{N}" /> に対して、2つの整数 <InlineMath math="a, b \in \mathbb{Z}" /> が「<InlineMath math="a - b" /> が <InlineMath math="n" /> で割り切れる」とき（すなわち <InlineMath math="n \mid (a-b)" /> ）、これを<strong>法 <InlineMath math="n" /> について合同</strong>といい
                    <BlockMath math="a \equiv b \pmod{n}" />
                    と表す。
                </p>
                <p className="mt-4">これが同値関係であることを確認しましょう：</p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-2">
                    <li><strong>反射：</strong> <InlineMath math="a - a = 0" /> は <InlineMath math="n" /> で割り切れるので <InlineMath math="a \equiv a" />。</li>
                    <li><strong>対称：</strong> <InlineMath math="a - b" /> が <InlineMath math="n" /> の倍数なら、<InlineMath math="b - a = -(a - b)" /> も当然 <InlineMath math="n" /> の倍数。</li>
                    <li><strong>推移：</strong> <InlineMath math="a - b = kn" /> かつ <InlineMath math="b - c = ln" /> ならば、<InlineMath math="a - c = (a - b) + (b - c) = (k+l)n" /> となり <InlineMath math="n" /> の倍数。</li>
                </ul>
                <p className="mt-4">
                    この関係は、「時計の計算（13時は1時と同じ）」のように、特定の周期で同じとみなす考え方を正当化します。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-2 (有理数の定義としての同値関係)">
                <p>
                    「分数」を集合論的に定義する際にも同値関係が役立ちます。
                    集合 <InlineMath math="X = \mathbb{Z} \times (\mathbb{Z} \setminus \{0\})" /> の元（整数のペア）<InlineMath math="(a, b)" /> と <InlineMath math="(c, d)" /> の間の関係を
                    <BlockMath math="(a, b) \sim (c, d) \iff ad = bc" />
                    と定義すると、これは同値関係になります。
                </p>
                <p className="mt-4">
                    これは「<InlineMath math="\frac{a}{b} = \frac{c}{d}" />」という直感を、直積集合上の関係として厳密に表現したものです。
                    これにより、<InlineMath math="\frac{1}{2}" /> と <InlineMath math="\frac{2}{4}" /> が「異なるペアでありながら、同じ数（有理数）を指している」ことを論理的に説明できます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="同値関係の幾何学：空間を「貼る」">
                <p>
                    同値関係は幾何学においても非常に強力です。
                    例えば、正方形の紙の「左の辺の点」と「右の辺の対応する点」を同値関係で結ぶことは、数学的には紙を丸めて「筒（円柱）」を作ることに相当します。
                    このように、同値関係は<strong>「別々の場所にいたものを、あるルール（関係）によって同一視して繋ぎ合わせる」</strong>ための接着剤の役割を果たします。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>同値関係</strong>は、反射律・対称律・推移律という3つの公理を満たす。</li>
                    <li>同値関係は「等号（=）」の概念を拡張したもので、ある観点に基づく「同一視」を可能にする。</li>
                    <li>整数の合同や有理数の定義、さらには空間の貼り合わせなど、数学の全域にわたって基礎となる概念である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
