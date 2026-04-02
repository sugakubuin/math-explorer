import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function SylvesterLawOfInertia() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、二次形式は直交行列による変数変換によって標準形（<InlineMath math="\lambda_1 y_1^2 + \dots + \lambda_n y_n^2" />）へと変換できることを学びました。<br />
                しかし、もし「直交行列」という厳しい縛り（回転や反転のみ）を外して、もっと自由な「正則行列（拡大縮小・せん断など何でもあり）」による変数変換を許したとしたら、標準形はどうなってしまうのでしょうか？<br />
                本章の最後にして二次形式理論のハイライト、<strong>「シルベスターの慣性法則（Sylvester's Law of Inertia）」</strong>がその答えを与えてくれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">符号数（Signature）の定義</h2>

            <p>
                自由な変数変換を行うと、係数 <InlineMath math="\lambda_i" /> の「大きさ（絶対値）」はどんどん変わってしまいます。しかし、どう変換しても「絶対に変わらないもの」があります。それが係数の**「正・負の個数」**です。
            </p>

            <ContentBox type="definition" title="Definition 12.4-1 （正符号数・負符号数・符号数）">
                <p>
                    実対称行列 <InlineMath math="A" />（あるいは対応する二次形式）の固有値のうち、
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>正（<InlineMath math="&gt; 0" />）であるものの個数を <strong>正符号数（positive index of inertia）</strong> <InlineMath math="p" /></li>
                    <li>負（<InlineMath math="&lt; 0" />）であるものの個数を <strong>負符号数（negative index of inertia）</strong> <InlineMath math="q" /></li>
                </ul>
                <p>
                    と呼ぶ。<InlineMath math="A" /> が非特異（<InlineMath math="\det A \neq 0" />）であれば、<InlineMath math="0" /> の固有値は存在せず、<InlineMath math="p + q = n" /> となる。<br />
                    また、このペア <InlineMath math="(p, q)" />、あるいは差である <InlineMath math="p - q" /> のことを行列の<strong>「符号数（Signature）」</strong>と呼ぶ。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ 分野や教科書によって、「符号数」という言葉が <InlineMath math="(p, q, n-p-q)" /> の組を指したり、単に <InlineMath math="p" /> の個数を指したり、<InlineMath math="p-q" /> を指したりと揺れがあるため、文脈に注意が必要です。）
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">シルベスターの慣性法則</h2>

            <p>
                「どんなに変数変換を頑張っても、正の項・負の項の数だけは絶対に誤魔化せない」というのが、歴史上最も美しい定理の一つである慣性法則です。
            </p>

            <ContentBox type="theorem" title="Theorem 12.4-1 （シルベスターの慣性法則 / Sylvester's Law of Inertia）">
                <p>
                    <InlineMath math="n" /> 変数の二次形式 <InlineMath math="q(\boldsymbol{x}) = \boldsymbol{x}^T A \boldsymbol{x}" /> に対して、ある正則な（逆行列を持つ）変換行列 <InlineMath math="P" /> および <InlineMath math="P'" /> を用いて、次の2つの異なる標準形に変形できたとする。
                </p>
                <BlockMath math="q(P\boldsymbol{y}) = c_1 y_1^2 + \dots + c_n y_n^2" />
                <BlockMath math="q(P'\boldsymbol{z}) = d_1 z_1^2 + \dots + d_n z_n^2" />
                <p>
                    このとき、係数群 <InlineMath math="c_1, \dots, c_n" /> の中にある「正の係数の個数」と「負の係数の個数」は、もう一方の係数群 <InlineMath math="d_1, \dots, d_n" /> の中にある「正の係数の個数」と「負の係数の個数」と<strong>完全に一致する</strong>。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (Outline)">
                <p>
                    この証明は「次元定理」と呼ばれる線形代数の基本的な性質（部分空間の次元の重なり）を用いて巧妙に示されます。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>
                        係数群 <InlineMath math="c" /> 側の正の係数の個数を <InlineMath math="p" />、負の個数を <InlineMath math="q" /> とする。また係数群 <InlineMath math="d" /> 側の正の係数の個数を <InlineMath math="p'" />、負の個数を <InlineMath math="q'" /> とする。わかりやすさのため、変数の並び順はすでに正・負・ゼロの順に並べ替えられているとする。
                    </li>
                    <li>
                        もし <InlineMath math="p \neq p'" /> であるとし、仮に <InlineMath math="p > p'" /> であると仮定してみる。
                    </li>
                    <li>
                        <strong>正になる空間 <InlineMath math="V" /> の構築：</strong><br />
                        最初の座標系 <InlineMath math="\boldsymbol{y}" /> において、<InlineMath math="p+1" /> 番目以降の変数をすべてゼロに固定した部分空間を作る。この空間の次元は <InlineMath math="p" /> 次元である。<br />
                        この空間にある任意の非零ベクトルを二次形式に代入すると、正定値の項しか残らないため、必ず<strong>正の値（<InlineMath math="q &gt; 0" />）</strong>をとる。
                    </li>
                    <li>
                        <strong>負以下になる空間 <InlineMath math="W" /> の構築：</strong><br />
                        次の座標系 <InlineMath math="\boldsymbol{z}" /> において、最初の <InlineMath math="p'" /> 個の変数をすべてゼロに固定した部分空間を作る。この空間の次元は <InlineMath math="n - p'" /> 次元である。<br />
                        この空間にある任意の非零ベクトルを二次形式に代入すると、負定値とゼロの項しか残らないため、必ず<strong>非正の値（<InlineMath math="q \leq 0" />）</strong>をとる。
                    </li>
                    <li>
                        <strong>次元の衝突（矛盾）：</strong><br />
                        上で作った2つの部分空間は、同じ一つの <InlineMath math="\mathbb{R}^n" /> という空間の中に存在している「特定の性質を持つベクトルの集まり」である。<br />
                        ここで両空間の次元の和を計算すると、<InlineMath math="\text{dim} V + \text{dim} W = p + (n - p') = n + (p - p')" /> となる。<br />
                        仮定 <InlineMath math="p &gt; p'" /> より、次元の和は <InlineMath math="n" /> を超えてしまう（<InlineMath math="&gt; n" />）。<br />
                        <InlineMath math="n" /> 次元空間の中で次元の和が <InlineMath math="n" /> を超える2つの部分空間が存在する場合、それらは必ず<strong>「原点以外の共通部分（交わり）」</strong>を持たなければならない（次元定理より）。
                    </li>
                    <li>
                        <strong>矛盾の確定：</strong><br />
                        共通部分に属するある非零ベクトル <InlineMath math="\boldsymbol{v}" /> が存在することになる。しかし、<InlineMath math="\boldsymbol{v}" /> は <InlineMath math="V" /> に属しているので二次形式の値は厳密に「正（<InlineMath math="&gt;0" />）」でなければならず、同時に <InlineMath math="W" /> にも属しているので二次形式の値は「非正（<InlineMath math="\leq 0" />）」でなければならない。<br />
                        これは明らかな<strong>矛盾</strong>である。したがって、最初においた仮定 <InlineMath math="p &gt; p'" /> は誤りである。
                    </li>
                    <li>
                        反対に <InlineMath math="p &lt; p'" /> と仮定しても全く同様の矛盾が導けるため、必然的に <InlineMath math="p = p'" /> でなければならない。負の個数 <InlineMath math="q" /> についても同様である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <ContentBox type="remark" title="慣性法則の幾何学的・物理的意味">
                <p>
                    この法則が「慣性（Inertia）」という大層な名前を冠しているのはなぜでしょうか。<br />
                    物理学（特に解析力学や相対性理論）において、空間の性質（計量）は二次形式で記述されます。<br />
                    例えば特殊相対性理論における時空の距離（線素）は <InlineMath math="ds^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2" /> という二次形式（符号数 <InlineMath math="(1, 3)" /> または <InlineMath math="(+ - - -)" />）で与えられます。
                </p>
                <p>
                    シルベスターの慣性法則は、<strong>「どんなに観測者の座標系（視点）を自由に変えようとも、この『時間方向が1つ（+）、空間方向が3つ（-）』という宇宙の根本的な構造（符号数）だけは決して変わらない」</strong>という、極めて深い自然界の真理を数学的に保証しているのです。視点を変えても「お椀型」の関数が突然「鞍型」に変わったりすることはあり得ない、という「慣性力（動きにくさ・不変性）」を象徴するネーミングです。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§12.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>二次形式の標準形における正の係数の数を<strong>正符号数</strong>、負の係数の数を<strong>負符号数</strong>と呼ぶ（Definition 12.4-1）。</li>
                    <li>どんなに異なる正則行列を用いて変数変換・標準化を行ったとしても、この<strong>正・負・ゼロの係数の個数（符号数）だけは絶対に変わらない</strong>（Theorem 12.4-1：シルベスターの慣性法則）。</li>
                    <li>つまり、二次形式の本質的な「形（お椀型か鞍型か等）」は、座標座標をどのように歪めても不変であり、その行列固有の不変量（イデアルな性質）であることを示している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
