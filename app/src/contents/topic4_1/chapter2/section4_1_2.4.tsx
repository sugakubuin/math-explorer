import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SchauderBasis() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                有限次元ベクトル空間では、すべてのベクトルを有限個の「基底ベクトル」の線形結合としてただ一通りに表せることが理論の基礎でした（ハメル基底）。しかし無限次元空間を扱う関数解析では、有限個の基底だけですべての元を表現することは不可能です。そこで、ノルムによる収束を許容した「無限和」による基底の概念であるシャウダー基底を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">シャウダー基底の定義</h2>

            <p>
                有限和ではなく、ノルム位相に関する級数（無限和）の収束を用いて任意の元を表現できるベクトルの列を、シャウダー基底と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (シャウダー基底)">
                <p>
                    バナッハ空間 <InlineMath math="X" /> の点列 <InlineMath math="\{e_n\}_{n=1}^\infty" /> が<b>シャウダー基底（Schauder basis）</b>であるとは、任意の <InlineMath math="x \in X" /> に対して、あるスカラーの列 <InlineMath math="\{\alpha_n\}_{n=1}^\infty" /> がただ一通り存在して、
                </p>
                <BlockMath math="x = \sum_{n=1}^\infty \alpha_n e_n" />
                <p>
                    が成り立つことである。ここで、等式はノルム空間 <InlineMath math="X" /> における極限
                </p>
                <BlockMath math="\lim_{N \to \infty} \left\| x - \sum_{n=1}^N \alpha_n e_n \right\| = 0" />
                <p>
                    の意味である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ハメル基底との違い">
                <p>
                    2-1 線形代数学IIで学んだ代数的な基底（ハメル基底）との最大の違いは、「極限操作を許すかどうか」です。ハメル基底では任意のベクトルは必ず「有限和」で表されなければなりません。無限次元バナッハ空間にも選択公理からハメル基底は存在しますが、それは非可算無限個の要素を要する非構成的で巨大なものであり、解析用にはほとんど役に立ちません。一方、シャウダー基底は自然数の添字を持つ可算列であり、極限によって元を構成します。
                </p>
            </ContentBox>

            <p>
                無限数列の空間である <InlineMath math="\ell^p" /> 空間には、座標成分に対応する自然なシャウダー基底が存在します。
            </p>

            <ContentBox type="example" title={<span>Example 2.4-1 (<InlineMath math="\ell^p" /> の標準基底)</span>}>
                <p>
                    <InlineMath math="1 \leq p < \infty" /> である <InlineMath math="\ell^p" /> 空間において、<InlineMath math="n" /> 番目の成分だけが <InlineMath math="1" /> で他がすべて <InlineMath math="0" /> である数列 <InlineMath math="e_n = (0, \ldots, 0, 1, 0, \ldots)" /> を考える。
                </p>
                <p>
                    任意の <InlineMath math="x = (x_1, x_2, \ldots) \in \ell^p" /> に対して、第 <InlineMath math="N" /> 項までの部分和との差のノルムを評価すると、
                </p>
                <BlockMath math="\begin{aligned}
                    \left\| x - \sum_{k=1}^N x_k e_k \right\|_p &= \left\| (0, \ldots, 0, x_{N+1}, x_{N+2}, \ldots) \right\|_p \\
                    &= \left( \sum_{k=N+1}^\infty |x_k|^p \right)^{1/p}
                \end{aligned}" />
                <p>
                    となる。<InlineMath math="x \in \ell^p" /> であることから無限級数 <InlineMath math="\sum_{k=1}^\infty |x_k|^p" /> は収束するため、その剰余項である右辺は <InlineMath math="N \to \infty" /> で <InlineMath math="0" /> に収束する。
                </p>
                <p>
                    表示の一意性は各成分の等式から明らかである。よって <InlineMath math="\{e_n\}" /> は <InlineMath math="\ell^p" /> のシャウダー基底である。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 2.4-2 (<InlineMath math="C[0,1]" /> のシャウダー基底の例)</span>}>
                <p>
                    連続関数空間 <InlineMath math="C[0,1]" /> もシャウダー基底を持つことが知られている。よく知られた例はシャウダー系と呼ばれるもので、区間 <InlineMath math="[0,1]" /> を次第に細かく分割しながら作られる一連の「三角形のピークを持つ折れ線関数」からなる関数列である（詳細は割愛する）。任意の連続関数は、これら折れ線関数の無限和として上限ノルムで一様近似できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基底の存在と非存在</h2>

            <p>
                すべてのバナッハ空間が都合よくシャウダー基底を持つわけではありません。まず、シャウダー基底を持つためには空間の「大きさ」に関する条件が必要です。
            </p>

            <ContentBox type="proposition" title="Proposition 2.4-1">
                <p>
                    シャウダー基底を持つバナッハ空間は可分（separable）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    可分とは、空間内に可算稠密部分集合が存在することである。空間 <InlineMath math="X" /> がシャウダー基底 <InlineMath math="\{e_n\}" /> を持つとする。
                </p>
                <p>
                    集合 <InlineMath math="S" /> を「係数 <InlineMath math="\alpha_n" /> がすべて有理数（複素空間の場合は有理複素数）であり、かつ有限個の項を除いて <InlineMath math="0" /> であるような線形結合全体」とする。<InlineMath math="\{e_n\}" /> が可算であるため、その有限結合で有理数係数のみをもつ <InlineMath math="S" /> もまた可算集合である。
                </p>
                <p>
                    任意の元 <InlineMath math="x = \sum_{n=1}^\infty \beta_n e_n \in X" /> および <InlineMath math="\varepsilon > 0" /> に対し、十分大きな <InlineMath math="N" /> をとれば級数の尻尾部分のノルムを <InlineMath math="\varepsilon/2" /> 以下にできる。残りの有限和 <InlineMath math="\sum_{n=1}^N \beta_n e_n" /> については、各実係数 <InlineMath math="\beta_n" /> を有理数で十分近く近似することで、有理係数を用いた組合せの元 <InlineMath math="y \in S" /> を用いて <InlineMath math="\|x - y\| < \varepsilon" /> とすることができる。よって <InlineMath math="S" /> は <InlineMath math="X" /> 内で稠密であり、<InlineMath math="X" /> は可分である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この命題の対偶をとると、「可分でない空間はシャウダー基底を持たない」ことになります。
            </p>

            <ContentBox type="example" title={<span>Example 2.4-3 (<InlineMath math="\ell^\infty" /> の非可分性と基底の非存在)</span>}>
                <p>
                    有界数列の空間 <InlineMath math="\ell^\infty" /> （上限ノルム）は可分ではない。<InlineMath math="0" /> と <InlineMath math="1" /> のみからなる数列は実数のように非可算無限個存在するが、それら任意の異なる2つの数列 <InlineMath math="x, y" /> の差の上限ノルムは、少なくとも1つの成分が異なるため常に <InlineMath math="\|x - y\|_\infty = 1" /> となる。
                </p>
                <p>
                    距離が <InlineMath math="1" /> 以上離れた非可算個の点が存在する空間は可算な稠密部分集合を持ち得ないため、<InlineMath math="\ell^\infty" /> は非可分である。したがって、Proposition 2.4-1 より <InlineMath math="\ell^\infty" /> にはシャウダー基底が存在しない。
                </p>
            </ContentBox>

            <p>
                では、「可分な空間であれば必ずシャウダー基底を持つのか」というのが関数解析における長年の大問題（バナッハの近似問題）でした。この問題は1970年代に否定的に解決されました。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (エンフロの定理)">
                <p>
                    シャウダー基底を持たない可分なバナッハ空間が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明概略の指摘）
                    Per Enflo による証明は構成的であるが極めて高度かつ技巧的である。「近似性質」と呼ばれる、コンパクト作用素を有限ランク作用素で近似できるという性質を持たない可分なバナッハ空間を構成することで示された。シャウダー基底を持つ空間は必ず近似性質を持つため、その空間にはシャウダー基底が存在しないことが背理法で結論づけられる。詳細の証明はここでは省略する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="関数解析における反例の重要性">
                <p>
                    エンフロの構成した反例は、有限次元の直感（基底が常にある）が無限次元（可分なバナッハ空間）にはそのまま通用しないという関数解析の豊かさと複雑さを象徴する結果です。基底を持たない空間の存在は、関数解析において作用素や空間そのものの性質を調べる「座標を用いない（coordinate-free）」証明を編み出す大きな動機となりました。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>シャウダー基底は、無限次元バナッハ空間の任意の元を極限（無限和）として一意に表現するための可算な基底である。</li>
                    <li><InlineMath math="\ell^p" /> （<InlineMath math="1 \leq p < \infty" />）など主要なバナッハ空間はシャウダー基底を持つ。</li>
                    <li>シャウダー基底を持つ空間は必ず可分である。したがって非可分空間である <InlineMath math="\ell^\infty" /> などは基底を持たない。</li>
                    <li>エンフロの定理により、可分であってもシャウダー基底を持たないバナッハ空間の存在が知られており、有限次元との際立った違いを示している。</li>
                </ul>
            </ContentBox>

        </section>
    );
}
