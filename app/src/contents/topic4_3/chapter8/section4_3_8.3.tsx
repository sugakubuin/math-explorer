import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EllipticCurvesAndNumberTheory() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで、複素数体上の楕円曲線とその上の関数論である楕円関数論について深く学んできました。本節では視点を変え、係数が有理数であるような楕円曲線が持つ豊かな数論的性質について概観します。ここからの内容は、代数幾何学と整数論が交差する壮大な分野への入り口となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有理点の群構造</h2>

            <p>
                楕円曲線の方程式の係数が有理数であるとき、有理数の座標を持つ点の集合（有理点）を考えることができます。驚くべきことに、これらの有理点もまた群の構造を持つことが知られています。
            </p>

            <ContentBox type="remark" title="モーデルの定理">
                <p>
                    楕円曲線 <InlineMath math="E" /> を有理数体 <InlineMath math="\mathbb{Q}" /> 上で定義されたものとします。このとき、<InlineMath math="E" /> の有理点のなす群 <InlineMath math="E(\mathbb{Q})" /> は有限生成アーベル群となります（<b>モーデルの定理</b>）。すなわち、ある非負整数 <InlineMath math="r" /> と有限アーベル群 <InlineMath math="E(\mathbb{Q})_{\text{tors}}" /> が存在して、次のように表されます：
                </p>
                <BlockMath math="E(\mathbb{Q}) \cong \mathbb{Z}^r \oplus E(\mathbb{Q})_{\text{tors}}" />
                <p>
                    ここで <InlineMath math="r" /> は<b>階数（ランク）</b>と呼ばれ、<InlineMath math="E" /> 上に「独立な」無限位数の有理点がいくつ存在するかを表しています。この階数 <InlineMath math="r" /> を決定することは、現代の整数論における最も重要で困難な問題の一つです。
                </p>
            </ContentBox>

            <p>
                また、以前の章で学んだ等分点の概念も、ガロア理論を通じて整数論と深く結びついています。
            </p>

            <ContentBox type="remark" title="等分点とガロア表現">
                <p>
                    §5.5 で考察した <InlineMath math="n" />-等分点のなす群 <InlineMath math="E[n]" /> は、抽象的には <InlineMath math="(\mathbb{Z}/n\mathbb{Z})^2" /> と同型でした。<InlineMath math="E" /> が <InlineMath math="\mathbb{Q}" /> 上定義されている場合、絶対ガロア群 <InlineMath math="\text{Gal}(\bar{\mathbb{Q}}/\mathbb{Q})" /> は等分点の集合に自然に作用します。この作用により、以下の<b>ガロア表現</b>が得られます：
                </p>
                <BlockMath math="\rho_n : \text{Gal}(\bar{\mathbb{Q}}/\mathbb{Q}) \to \text{GL}_2(\mathbb{Z}/n\mathbb{Z})" />
                <p>
                    この表現を調べることは、素数の振る舞いや楕円曲線の性質を深く理解する上で不可欠であり、4-14 整数論II などのさらに進んだトピックで中心的な役割を果たします。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">L 関数と展望</h2>

            <p>
                有理点の問題を解析的にアプローチするために、素数を法とする還元を考え、そこから構成される L 関数という複素関数が導入されます。
            </p>

            <ContentBox type="remark" title="L 関数と BSD 予想">
                <p>
                    楕円曲線 <InlineMath math="E" /> に対して定まる <b>L 関数</b> <InlineMath math="L(E, s)" /> は、解析的数論（5-6）におけるリーマンゼータ関数の類似物です。L 関数は全複素平面に解析接続されると予想されており（モジュラー性定理により証明済み）、その <InlineMath math="s=1" /> での振る舞いと群 <InlineMath math="E(\mathbb{Q})" /> の階数 <InlineMath math="r" /> の間には深い関係があるとされています。
                </p>
                <p>
                    具体的には、<b>バーチ-スウィンナートン＝ダイアー予想（BSD 予想）</b>により、<InlineMath math="L(E, s)" /> の <InlineMath math="s=1" /> におけるテイラー展開の最初の非零項の次数が、階数 <InlineMath math="r" /> に正確に一致すると予想されています（すなわち <InlineMath math="\text{ord}_{s=1} L(E, s) = r" />）。これはミレニアム懸賞問題の一つでもあります。
                </p>
            </ContentBox>

            <p>
                最後に、楕円関数論の成果がいかにして現代数学の最高峰の定理と結びついているかを触れておきます。
            </p>

            <ContentBox type="remark" title="谷山-志村-ワイルズの定理">
                <p>
                    「有理数体上のすべての楕円曲線はモジュラーである」という<b>谷山-志村-ワイルズの定理</b>は、楕円曲線の L 関数が、あるモジュラー形式に付随する L 関数と一致することを主張します。これにより、幾何学的な対象である楕円曲線と、解析的な対象であるモジュラー形式が見事に結び付けられました。
                </p>
                <p>
                    この定理は、楕円関数論、モジュラー形式の理論、そして整数論の壮大な統合を意味しており、歴史的な難問であった<b>フェルマーの最終定理</b>の証明における決定的な鍵となりました。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有理数体上で定義された楕円曲線の有理点 <InlineMath math="E(\mathbb{Q})" /> は有限生成アーベル群をなし（モーデルの定理）、その階数の決定が数論の重要課題である。</li>
                    <li>等分点へのガロア群の作用により、ガロア表現が得られ、深い整数論的研究が可能となる。</li>
                    <li>L 関数 <InlineMath math="L(E, s)" /> と階数の関係を述べる BSD 予想は、解析的数論と代数幾何の架け橋である。</li>
                    <li>谷山-志村-ワイルズの定理は楕円曲線とモジュラー形式を統合し、フェルマーの最終定理の解決を導いた。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
