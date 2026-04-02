import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfAdjoints() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                「随伴（Adjunction）」は、数学のあらゆる分野に偏在しています。ある数学者が「圏論の目的は、数学のすべてが随伴であることを示すことだ」と言ったほどです。ここでは、具体的な随伴の例をいくつか見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">代数系の随伴</h2>

            <p className="leading-relaxed">
                先ほどの「自由群と忘却」と同じパターンの随伴は、代数系のあらゆる「自由生成」構成において成り立ちます。
            </p>

            <ContentBox
                type="example"
                title="Example 6.2-1 (代数系における随伴の例)"
            >
                <p>
                    左随伴 <InlineMath math="F \dashv G" /> 右随伴の形で、以下の随伴関係が成り立つ。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>自由生成と忘却：</strong> 自由環関手 <InlineMath math="\dashv" /> 忘却関手（<InlineMath math="\mathbf{Set} \leftrightarrows \mathbf{Ring}" />）。多項式環の構成は、まさに集合からの自由可換環の生成である。</li>
                    <li><strong>Abel化と包含：</strong> 群のAbel化関手 <InlineMath math="(-)_{ab} \dashv" /> 包含（忘却）関手（<InlineMath math="\mathbf{Grp} \leftrightarrows \mathbf{Ab}" />）。<br/>
                    群 <InlineMath math="G" /> から交換子群 <InlineMath math="[G,G]" /> で割った商群 <InlineMath math="G/[G,G]" /> を作る操作は、アーベル群の圏からの忘却関手の左随伴である。<br/>
                    （<InlineMath math="\mathrm{Hom}_{\mathbf{Ab}}(G_{ab}, A) \cong \mathrm{Hom}_{\mathbf{Grp}}(G, A)" />）</li>
                    <li><strong>商体と包含：</strong> 商体関手 <InlineMath math="\mathrm{Frac} \dashv" /> 包含関手（<InlineMath math="\mathbf{IntDom} \leftrightarrows \mathbf{Field}" />）。整域から商体を作る操作（Topic 3-9）。</li>
                    <li><strong>完備化と包含：</strong> 距離空間の完備化 <InlineMath math="\dashv" /> 包含関手（<InlineMath math="\mathbf{MetricSp} \leftrightarrows \mathbf{CompleteMetricSp}" />）。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">積と冪の随伴（指数随伴）</h2>

            <p className="leading-relaxed">
                代数的な構成だけでなく、「関数の空間（冪）」を作る操作も、実は随伴として記述されます。
            </p>

            <ContentBox
                type="example"
                title="Example 6.2-2 (カルテシアン閉圏とカリー化)"
            >
                <p>
                    集合の圏 <InlineMath math="\mathbf{Set}" /> において、ある固定した集合 <InlineMath math="A" /> を考える。
                    ここには以下の2つの関手が存在する。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>積関手 <InlineMath math="(- \times A)" />：</strong> 集合 <InlineMath math="X" /> に対して、直積 <InlineMath math="X \times A" /> を返す関手。</li>
                    <li><strong>冪関手 <InlineMath math="(-)^A" />：</strong> 集合 <InlineMath math="Y" /> に対して、関数空間 <InlineMath math="Y^A = \{f : A \to Y\}" /> を返す関手。</li>
                </ul>
                <p>
                    この2つの関手は随伴関係 <strong><InlineMath math="(- \times A) \dashv (-)^A" /></strong> にある。すなわち、
                    <BlockMath math="\mathrm{Hom}_\mathbf{Set}(X \times A, Y) \cong \mathrm{Hom}_\mathbf{Set}(X, Y^A)" />
                    が成立する。
                </p>
                <p>
                    左辺は「<InlineMath math="X" /> と <InlineMath math="A" /> のペアを受け取って <InlineMath math="Y" /> を返す2変数関数」の集合である。
                    右辺は「<InlineMath math="X" /> を受け取ると、『<InlineMath math="A" /> を受け取って <InlineMath math="Y" /> を返す1変数関数』を返すような高階関数」の集合である。
                    情報工学や関数型プログラミングにおいて、この一対一対応による変換は<strong>カリー化（Currying）</strong>と呼ばれている。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.2-3 (テンソル積と内部 hom)"
            >
                <p>
                    上記の「直積と関数空間」の随伴を、加群の圏 <InlineMath math="\mathbf{Mod}_R" />（またはベクトル空間の圏）に持ち込んだものが「テンソル積と hom」の随伴である。
                </p>
                <p>
                    加群 <InlineMath math="M" /> を固定したとき、テンソル積関手 <InlineMath math="(- \otimes_R M)" /> は、hom 関手 <InlineMath math="\mathrm{Hom}_R(M, -)" /> の左随伴である。
                    <BlockMath math="\mathrm{Hom}_R(N \otimes_R M, P) \cong \mathrm{Hom}_R(N, \mathrm{Hom}_R(M, P))" />
                </p>
                <p>
                    これは Topic 3-11 で学んだ「双線形写像とテンソル積からの線形写像の普遍的対応」を、随伴という形で純粋に圏論的に定式化したものである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>代数学における<strong>「自由な構成（多項式環、自由群、完備化など）」</strong>は、すべて忘却関手の<strong>左随伴関手</strong>として捉えられる。</li>
                    <li>集合における<strong>直積と関数空間</strong>、線形代数における<strong>テンソル積と hom 空間</strong>の関係は、<strong><InlineMath math="(- \times A) \dashv (-)^A" /></strong> という随伴（カリー同型）として完全に並行に理解できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
