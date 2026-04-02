import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CompactnessInMetricSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 7 で学んだ「コンパクト性」は、抽象的な開被覆を用いて定義されていました。
                距離空間においては、このコンパクト性が「完備性」と「全有界性」という、より直感的に扱いやすい概念によって完全に特徴づけられます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全有界性の定義</h2>

            <p>
                通常の「有界（ある球に収まる）」という概念を、さらに強くしたものが全有界性です。
            </p>

            <ContentBox type="definition" title="Definition 9.5-1 (全有界性)">
                <p>
                    距離空間 <InlineMath math="X" /> が<strong>全有界 (Totally bounded)</strong> であるとは、
                    任意の <InlineMath math="\varepsilon > 0" /> に対し、半径 <InlineMath math="\varepsilon" /> の有限個の開球で <InlineMath math="X" /> を覆えることをいう。
                </p>
                <p className="mt-4">
                    この有限個の中心点の集合 <InlineMath math="\{x_1, \dots, x_n\}" /> を、 <InlineMath math="X" /> の <strong><InlineMath math="\varepsilon" />-網 (<InlineMath math="\varepsilon" />-net)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <p className="mt-4">
                「有界」は単にサイズが有限であることを意味しますが、「全有界」はさらに「空間をどんなに細かく刻んでも、有限個のパーツで網羅できる」という強い密度条件を意味します。
            </p>

            <ContentBox type="example" title="Example 9.5-1 (有界だが全有界でない例)">
                <p>
                    無限次元のヒルベルト空間 <InlineMath math="\ell^2" /> における単位閉球は有界ですが、全有界ではありません。
                    実際、互いの距離が <InlineMath math="\sqrt{2}" /> 離れている無限個の点列（標準基底ベクトルなど）を含むため、小さな半径の有限個の球では決して覆い尽くせません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">距離空間におけるコンパクト性の特徴づけ</h2>

            <p>
                距離空間のコンパクト性は、空間の「完全さ（完備性）」と「有限に近いサイズ（全有界性）」の 2 つに分解されます。
            </p>

            <ContentBox type="theorem" title="Theorem 9.5-1 (距離空間のコンパクト性の同値条件)">
                <p>
                    距離空間 <InlineMath math="X" /> に対して、次は同値である：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li><InlineMath math="X" /> はコンパクトである。</li>
                    <li><InlineMath math="X" /> は点列コンパクトである（任意の点列が収束部分列を持つ）。</li>
                    <li><InlineMath math="X" /> は<strong>完備</strong>かつ<strong>全有界</strong>である。</li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                この定理により、ユークリッド空間における「有界閉集合がコンパクトである（ハイネ・ボレルの定理）」という事実は、
                実数の完備性と、有界集合の全有界性から導かれる特殊ケースであることが明確になります。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>(1) ⇒ (2)</strong>：
                    コンパクト空間における点列は常に収束部分列を持つ（位相空間論の一般論）。
                </p>
                <p className="mt-4">
                    <strong>(2) ⇒ (3)</strong>：
                    (i) <strong>全有界性</strong>： もし全有界でないとすると、ある <InlineMath math="\varepsilon > 0" /> が存在して、有限個の半径 <InlineMath math="\varepsilon" /> の球では覆えない。
                    これを利用して、互いの距離が <InlineMath math="\varepsilon" /> 以上離れた点列 <InlineMath math="\{x_n\}" /> を構成できる。
                    この点列は収束部分列を持ち得ない（Cauchy列にならないため）ので、(2) に矛盾する。
                    <br />
                    (ii) <strong>完備性</strong>： 点列コンパクトな空間において、任意の Cauchy 列は収束部分列を持つ。
                    Cauchy 列が収束部分列を持てば、その Cauchy 列自身も同じ極限に収束するため、完備である。
                </p>
                <p className="mt-4">
                    <strong>(3) ⇒ (2)</strong>：
                    全有界性より、任意の <InlineMath math="k \in \mathbb{N}" /> に対して有限個の半径 <InlineMath math="1/k" /> の球で覆える。
                    これを用いて、点列から Cauchy 部分列を抽出する（対角線論法的な手順）。
                    空間の完備性より、この Cauchy 部分列は収束するため、点列コンパクト性が示される。
                </p>
                <p className="mt-4">
                    <strong>(2) ⇒ (1)</strong>：
                    距離空間において、点列コンパクト性はコンパクト性を導く（Lindelöf の性質と全有界性を用いることで示せる）。
                    これにより、3つの条件の同値性が完結する。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全有界性の重要性</h2>

            <ContentBox type="remark" title="なぜ「有界」では足りないのか">
                <p>
                    無限次元空間を扱う関数解析学において、有界性はしばしば無力です。
                    空間が「コンパクトに近い」ことを言いたい場合、距離空間の文脈では全有界性が本質的な役割を果たします。
                    例えば「アルツェラ・アスコリの定理」などは、関数の集合がいつ全有界（＝相対コンパクト）になるかを与える重要な結果です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>全有界</strong>：どんなに小さい球を使っても、有限個で空間全体を覆い尽くせる性質。</li>
                    <li><strong>同値条件</strong>：距離空間でのコンパクト性は「完備」かつ「全有界」と完璧に一致する。</li>
                    <li><strong>解析学への恩恵</strong>：複雑な開被覆の議論を、点列の収束や有限網の議論に置き換えて考えることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
