import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ThirdKindEllipticIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までで、ルジャンドルの正規形として第一種および第二種の楕円積分を導入しました。これらはそれぞれ、振り子の周期や楕円の弧長などの幾何学的・物理的な問題から自然に現れるものでした。本節では、楕円積分の体系を完成させるための最後のピースとなる「第三種楕円積分」を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第三種楕円積分の定義</h2>

            <p>
                第三種楕円積分は、第一種・第二種と比べて少し複雑な形をしていますが、任意の楕円積分を分類する上で欠かせない重要な要素です。
            </p>

            <ContentBox type="definition" title={<span>Definition 1.3-1 (第三種不完全楕円積分)</span>}>
                <p>
                    母数（modulus）<InlineMath math="k" />（<InlineMath math="0 < k < 1" />）および、特性（characteristic）と呼ばれるパラメータ <InlineMath math="n" /> に対して、<b>第三種不完全楕円積分（incomplete elliptic integral of the third kind）</b> <InlineMath math="\Pi(n; \varphi, k)" /> を以下で定義する。
                </p>
                <BlockMath math="\Pi(n; \varphi, k) = \int_0^\varphi \frac{d\theta}{(1-n\sin^2\theta)\sqrt{1-k^2\sin^2\theta}}" />
            </ContentBox>

            <p>
                ここで新たに導入されたパラメータ <InlineMath math="n" /> は、被積分関数の特異点の位置を制御する役割を持っています。この定義が前節の第一種楕円積分とどのようにつながるか、具体的な例で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.3-1">
                <p>
                    特性パラメータ <InlineMath math="n = 0" /> のとき、第三種楕円積分の被積分関数における分母の因子 <InlineMath math="1-n\sin^2\theta" /> は <InlineMath math="1" /> となる。したがって、
                </p>
                <BlockMath math="\Pi(0; \varphi, k) = \int_0^\varphi \frac{d\theta}{\sqrt{1-k^2\sin^2\theta}} = F(\varphi, k)" />
                <p>
                    となり、第一種不完全楕円積分に帰着する。
                </p>
            </ContentBox>

            <p>
                このように、第三種楕円積分は第一種楕円積分を特別な場合として含む、より一般的な形をしています。しかし、複素解析の視点から見ると、両者には決定的な違いがあります。
            </p>

            <ContentBox type="remark" title="特異性の違いと複素解析的意味">
                <p>
                    第三種楕円積分の被積分関数は、<InlineMath math="\sin^2\theta = 1/n" /> となる点で単極（simple pole）を持ちます。第一種および第二種楕円積分が持つ特異性は分岐点（branch point）に由来するもののみですが、第三種楕円積分はこの単極の存在により、積分経路上で対数特異性（logarithmic singularity）を生じます。後述するリーマン面上の微分の理論（4-2 複素解析IIで扱う内容）においては、第三種楕円積分は「留数の和が0となるような単極を持つアーベル微分」に対応しており、第一種（正則微分）や第二種（留数を持たない極を持つ微分）とは本質的に異なる解析的性質を持っています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">三種の楕円積分の関係</h2>

            <p>
                さて、なぜこの特定の3種類の積分（第一種、第二種、第三種）だけが特別扱いされるのでしょうか。その理由は、アドリアン＝マリ・ルジャンドル（Adrien-Marie Legendre）による以下の画期的な分類定理にあります。
            </p>

            <ContentBox type="remark" title="ルジャンドルの分類">
                <p>
                    <InlineMath math="R(x, y)" /> を <InlineMath math="x" /> と <InlineMath math="y" /> の任意の有理関数とし、<InlineMath math="P(x)" /> を重根を持たない実係数の3次または4次多項式とする。このとき、任意の楕円積分
                </p>
                <BlockMath math="\int R(x, \sqrt{P(x)})\,dx" />
                <p>
                    は、適切な変数変換を行うことで、初等関数（有理関数や対数関数など）と、第一種、第二種、および第三種のルジャンドル標準形（楕円積分）の線形結合に必ず分解できる。
                </p>
            </ContentBox>

            <p>
                この分類により、どんなに複雑な楕円積分であっても、本質的にはこれまで学んだ3つの標準形に帰着させることができることがわかります。最後に、歴史的に重要であったレムニスケートの弧長積分が、実際に第一種楕円積分に帰着される様子を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.3-2">
                <p>
                    ガウスが研究したレムニスケート積分
                </p>
                <BlockMath math="I = \int_0^x \frac{dt}{\sqrt{1-t^4}}" />
                <p>
                    を変数変換によってルジャンドル標準形に帰着させる。
                </p>
                <p>
                    まず、<InlineMath math="t = \cos\varphi" /> はここでは適さないため、<InlineMath math="t = \sqrt{2}\sin\theta / \sqrt{1+\sin^2\theta}" /> といった複雑な変換も知られているが、より直接的には <InlineMath math="u = t^2" /> とおくなどの工夫がなされる。標準的な帰着として、母数 <InlineMath math="k = 1/\sqrt{2}" /> を用いて、
                </p>
                <BlockMath math="\int_0^1 \frac{dt}{\sqrt{1-t^4}} = \frac{1}{\sqrt{2}} K\left(\frac{1}{\sqrt{2}}\right)" />
                <p>
                    のように第一種楕円積分 <InlineMath math="F" /> を用いて表される。被積分関数の分母 <InlineMath math="\sqrt{1-t^4} = \sqrt{(1-t^2)(1+t^2)}" /> の構造が、変数変換を経て <InlineMath math="\sqrt{1-k^2\sin^2\theta}" /> を導出する。このように、具体的な幾何学的積分は標準形を計算することで値が評価できる。
                </p>
            </ContentBox>

            <p>
                以上で、ルジャンドルによる楕円積分の三種の正規形が出揃いました。次節では、これらの積分の「逆関数」を考えるという、ガウスやアーベルによる全く新しい視点（反転問題）を導入し、楕円関数論の真の幕開けへと進みます。
            </p>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>第三種不完全楕円積分 <InlineMath math="\Pi(n; \varphi, k)" /> は、特性パラメータ <InlineMath math="n" /> を持ち、被積分関数に単極由来の対数特異性を含む。</li>
                    <li><InlineMath math="n = 0" /> の場合、第三種楕円積分は第一種楕円積分に一致する。</li>
                    <li>ルジャンドルの分類定理により、任意の楕円積分は有理関数部分と、第一種・第二種・第三種の標準形の線形結合に分解できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
