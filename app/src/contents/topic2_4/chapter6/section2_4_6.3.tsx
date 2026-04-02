import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WellOrderingTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「どんな集合でも、元を順番に一列に並べて、どの部分集合にも必ず『一番目の元』があるようにできるだろうか？」
                この問いに対する答えが<strong>整列定理 (Well-ordering Theorem)</strong> です。
                この定理は、私たちの「順序」に対する直感を一変させる強力な結論を導き出します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">整列定理の主張</h2>

            <p>
                §4.3 で学んだ「整列集合」の概念が、あらゆる集合に対して適用可能であることを意味します。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (ツェルメロの整列定理)">
                <p>
                    任意の集合 <InlineMath math="A" /> に対して、
                    <InlineMath math="A" /> を<strong>整列集合</strong>にするような全順序関係 <InlineMath math="\leq" /> が存在する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直感とのギャップ：実数は並べられるか？</h2>

            <p>
                整列定理の驚くべき点は、<strong>「実数集合 <InlineMath math="\mathbb{R}" /> でさえも、整列させることが可能である」</strong>と主張していることです。
            </p>

            <ContentBox type="remark" title="構成できない順序">
                <p>
                    実数の通常の順序（<InlineMath math="<" />）では、開区間 <InlineMath math="(0, 1)" /> に最小元がないため、整列順序ではありません。
                    整列定理は、「通常の順序とは全く別の、非常に複雑で人工的な順序を定義すれば、実数集合のどの部分集合にも最小元が存在するようにできる」と教えてくれます。
                </p>
                <p className="mt-4">
                    しかし、その順序を具体的に数式で書き下すことは、現在の人類には不可能です。
                    選択公理が「存在」を保証するものの、その姿を「見せて」くれない典型的な例といえます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明の背後にある「選択」</h2>

            <p>
                なぜ整列定理と選択公理が関係するのでしょうか？
                証明のアイデアはシンプルです。「集合から元を一つずつ選び出し、それを並べていく」という操作を繰り返すのです。
                もし元が残っている限り、選択公理によって「次の一手（元）」を選ぶことができるため、理論上は全集合を一列に並べ終える（整列させる）ことができるのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>整列定理</strong>は、どんな集合にもそれを整列集合にする順序が存在することを主張する。</li>
                    <li>選択公理を認めれば、実数のような巨大な集合も「数え上げる（整列させる）」ことができる。</li>
                    <li>この定理は選択公理と論理的に同値であり、現代集合論の根幹をなす。</li>
                    <li>「存在はするが、具体的には記述できない順序」という数学の深淵に触れる定理である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
