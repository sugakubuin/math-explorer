import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PIDDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前章では、ユークリッドの互除法が使える「ユークリッド整域（ED）」について学びました。本章では、ED よりも少し条件を緩めた「単項イデアル整域（PID）」というクラスを導入します。これは「すべてのイデアルが1つの元で生成される」という非常に扱いやすい性質を持った整域です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">PID の定義と例</h2>

            <p className="leading-relaxed">
                まずは単項イデアル整域の定義を確認しましょう。第2章で学んだ「主イデアル（principal ideal）」の概念が中心となります。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (単項イデアル整域)">
                <p>
                    整域 <InlineMath math="D" /> において、<InlineMath math="D" /> の<b>すべて</b>のイデアルが主イデアル（単一の元で生成されるイデアル）であるとき、<InlineMath math="D" /> を<b>単項イデアル整域（Principal Ideal Domain, 略して PID）</b>という。
                </p>
                <p>
                    すなわち、<InlineMath math="D" /> の任意のイデアル <InlineMath math="I" /> に対して、ある元 <InlineMath math="a \in D" /> が存在して <InlineMath math="I = (a)" /> と書けるような整域のことである。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                我々がよく知っているいくつかの基本的な環は、この PID の性質を満たしています。
            </p>

            <ContentBox type="example" title={<span>Example 6.1-1 (<InlineMath math="\mathbb{Z}" /> は PID)</span>}>
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> の任意のイデアルは、ある非負整数 <InlineMath math="n" /> を用いて <InlineMath math="(n) = n\mathbb{Z}" /> の形で表すことができる。これは整数論の基本的な結果（除法の原理に基づく）である。
                </p>
                <p>
                    したがって、すべてのイデアルが 1 つの整数で生成されるため、<InlineMath math="\mathbb{Z}" /> は PID である。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 6.1-2 (<InlineMath math="F[x]" /> は PID)</span>}>
                <p>
                    体 <InlineMath math="F" /> 上の一変数多項式環 <InlineMath math="F[x]" /> も PID である。<InlineMath math="F[x]" /> の任意の零でないイデアル <InlineMath math="I" /> は、<InlineMath math="I" /> に属する多項式の中で<b>次数が最小のもの</b> <InlineMath math="f(x)" /> によって生成される（<InlineMath math="I = (f)" />）。
                </p>
                <p>
                    例えば、イデアル <InlineMath math="(x^2-1, x-1)" /> を考えると、これら 2 つの多項式の最大公約数は <InlineMath math="x-1" /> であるため、<InlineMath math="(x^2-1, x-1) = (x-1)" /> となり、やはり 1 つの多項式で生成される主イデアルとなる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">PID の非例</h2>

            <p className="leading-relaxed">
                すべての整域が PID になるわけではありません。変数が複数になったり、係数環が体でなかったりすると、1つの元では生成しきれない「大きな」イデアルが登場します。
            </p>

            <ContentBox type="example" title={<span>Example 6.1-3 (<InlineMath math="\mathbb{Z}[x]" /> は PID でない)</span>}>
                <p>
                    整数係数多項式環 <InlineMath math="\mathbb{Z}[x]" /> は整域であるが、PID ではない。
                </p>
                <p>
                    定数 <InlineMath math="2" /> と変数 <InlineMath math="x" /> によって生成されるイデアル <InlineMath math="I = (2, x) = \{ 2f(x) + xg(x) \mid f, g \in \mathbb{Z}[x] \}" /> を考える。このイデアルは「定数項が偶数であるような多項式全体」の集合である。
                </p>
                <p>
                    もし <InlineMath math="\mathbb{Z}[x]" /> が PID ならば、ある多項式 <InlineMath math="d(x) \in \mathbb{Z}[x]" /> が存在して <InlineMath math="(2, x) = (d)" /> となるはずである。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="2 \in (d)" /> より、<InlineMath math="d" /> は <InlineMath math="2" /> を割り切らなければならない。よって <InlineMath math="d = \pm 1" /> または <InlineMath math="d = \pm 2" /> である。</li>
                    <li><InlineMath math="x \in (d)" /> より、<InlineMath math="d" /> は <InlineMath math="x" /> を割り切らなければならない。<InlineMath math="\pm 2" /> は <InlineMath math="x" /> を割り切らない（係数が整数にならない）ため、<InlineMath math="d = \pm 1" /> しかあり得ない。</li>
                </ul>
                <p className="mt-2">
                    しかし、<InlineMath math="d = \pm 1" /> とすると <InlineMath math="(d) = (1) = \mathbb{Z}[x]" />（環全体）となってしまう。一方、<InlineMath math="(2, x)" /> には定数項が奇数の多項式（例えば <InlineMath math="1" /> や <InlineMath math="3" />）は含まれないため、<InlineMath math="(2, x) \neq \mathbb{Z}[x]" /> である。
                </p>
                <p>
                    これは矛盾である。したがって、<InlineMath math="(2, x)" /> を 1 つの多項式で生成することはできず、<InlineMath math="\mathbb{Z}[x]" /> は PID ではない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (次元の問題)">
                <p>
                    <InlineMath math="\mathbb{Z}[x]" /> が PID にならない背後には「次元」の概念が関係しています。<InlineMath math="\mathbb{Z}" /> や <InlineMath math="F[x]" /> は幾何学的に言えば「1次元」の対象ですが、<InlineMath math="\mathbb{Z}[x]" /> は「<InlineMath math="\mathbb{Z}" /> の方向」と「<InlineMath math="x" /> の方向」の 2 つの自由度を持つため「2次元」的な広がりを持ちます。次元が 2 以上になると、イデアルを 1 つの元だけで捉えきれなくなり、PID の性質が失われます。この幾何学的な直感は「可換環論（Krull次元）」で厳密に定式化されます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>すべてのイデアルが主イデアル（単一の元で生成される）であるような整域を<b>単項イデアル整域（PID）</b>という。</li>
                    <li>整数環 <InlineMath math="\mathbb{Z}" /> や体上の多項式環 <InlineMath math="F[x]" /> は PID の代表例である。</li>
                    <li>多変数の多項式環や <InlineMath math="\mathbb{Z}[x]" /> のように、イデアルが 1 つの元で生成しきれない環は PID ではない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
