import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MonotoneAndConvexFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                この章の最後として、連続性とは少し違った角度から関数を分類する2つの重要な性質、「単調性」と「凸性」について考察します。
                これらは関数の変化の方向や曲がり具合に関する性質であり、関数が連続でなくとも定義できる場合がありますが、これらの性質を持つ関数は解析学的に非常に「良い」振る舞いをすることが知られています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単調関数</h2>

            <p>
                単調関数は、入力が増加したときに出力も常に増加する（あるいは常に減少する）関数のことです。一度上がったら下がらない、という直感的な性質です。
            </p>

            <ContentBox type="definition" title="Definition 4.5-1 (単調増加・単調減少関数)">
                <p>
                    区間 <InlineMath math="I" /> 上で定義された関数 <InlineMath math="f" /> が、任意の <InlineMath math="x, y \in I" /> （<InlineMath math="x < y" />）に対して
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="f(x) \leq f(y)" /> を満たすとき、<InlineMath math="f" /> は <InlineMath math="I" /> 上で<strong>単調増加</strong>（または広義単調増加、非減少）であるという。</li>
                    <li><InlineMath math="f(x) \geq f(y)" /> を満たすとき、<InlineMath math="f" /> は <InlineMath math="I" /> 上で<strong>単調減少</strong>（または広義単調減少、非増加）であるという。</li>
                </ul>
                <p className="mt-2">
                    これらを総称して<strong>単調関数</strong>（monotone function）と呼ぶ。
                    等号を許さず <InlineMath math="f(x) < f(y)" />（増加）、<InlineMath math="f(x) > f(y)" />（減少）が成り立つ場合は、<strong>狭義単調増加</strong>（strictly increasing）、<strong>狭義単調減少</strong>（strictly decreasing）と呼ぶ。
                </p>
            </ContentBox>

            <p>
                単調関数は至る所で連続とは限りませんが、単調であるという制約から、極限の振る舞いには強い制限がかかります。特に「片側極限」が常に存在し、振動して極限が存在しないような本質的不連続点を持たないことが示されます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.5-1 (単調関数の片側極限の存在)">
                <p>
                    関数 <InlineMath math="f" /> が区間 <InlineMath math="(a, b)" /> 上で単調増加であるとする。
                    このとき、区間内の任意の点 <InlineMath math="c \in (a, b)" /> において、右側極限と左側極限が存在し、
                </p>
                <BlockMath math="\begin{aligned}\sup_{a < x < c} f(x) & = \lim_{x \to c-0} f(x) \leq f(c) \\ &\leq \lim_{x \to c+0} f(x) = \inf_{c < x < b} f(x)\end{aligned}" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <p>
                この定理から、単調関数が点 <InlineMath math="c" /> で不連続であるとすれば、それは必ず左側極限と右側極限が異なる「跳躍不連続点」であることがわかります（段差ができる状態）。
                さらに驚くべきことに、その不連続点の数には上限があることが知られています。
            </p>

            <ContentBox type="theorem" title="Theorem 4.5-2 (単調関数の不連続点の集合は高々可算)">
                <p>
                    開区間 <InlineMath math="(a, b)" /> 上の単調関数 <InlineMath math="f" /> の不連続点の集合は、<strong>高々可算集合</strong>（有限個か、自然数と1対1対応がつく無限個）である。
                </p>
                <div className="mt-4 font-semibold">証明の概略:</div>
                <p className="mt-2">
                    <InlineMath math="f" /> が単調増加であるとする。点 <InlineMath math="c" /> が不連続点であるとき、Theorem 4.5-1 より跳躍不連続点であり、区間 <InlineMath math="(\lim_{x \to c-0} f(x), \lim_{x \to c+0} f(x))" /> という正の幅を持つ「ジャンプの隙間」が存在する。<br />
                    有理数の稠密性（Theorem 2.4-2）より、この開区間の中には必ず有理数が少なくとも1つ存在する。そこで、各不連続点 <InlineMath math="c" /> に対して、そのジャンプ区間内にある有理数を1つ選び対応させる。<InlineMath math="f" /> は単調増加なので、異なる不連続点のジャンプ区間は互いに重ならない。<br />
                    これは不連続点の集合から有理数の部分集合への単射が存在することを意味し、有理数全体の集合が可算であることから、不連続点の集合も高々可算であることが導かれる。
                </p>
            </ContentBox>

            <p>
                ディリクレ関数の様に「非可算（実数濃度）個の不連続点を持つ関数」が存在する一方で、単調という縛りを入れるだけで不連続点はパラパラとしか存在し得なくなるという、解析学における際立った対比です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">凸関数</h2>

            <p>
                次に「凸（Convex）」という性質に関しても見ていきましょう。直感的には、「グラフ上の任意の2点を結んだ線分が、常にグラフの曲線よりも上側にくる」ような形状を表します。鍋のような形、あるいは下に出っ張っている形状です。
            </p>

            <ContentBox type="definition" title="Definition 4.5-2 (凸関数・凹関数)">
                <p>
                    区間 <InlineMath math="I" /> 上で定義された関数 <InlineMath math="f" /> が、任意の <InlineMath math="x, y \in I" /> と任意の <InlineMath math="t \in [0, 1]" /> に対して、
                </p>
                <BlockMath math="f(tx + (1-t)y) \leq t f(x) + (1-t)f(y)" />
                <p>
                    を満たすとき、<InlineMath math="f" /> を<strong>凸関数</strong>（または下に凸、convex function）という。
                </p>
                <p className="mt-2">
                    不等号の向きが逆（<InlineMath math="\geq" />）であるとき、<InlineMath math="f" /> を<strong>凹関数</strong>（または上に凸、concave function）という。
                </p>
            </ContentBox>

            <figure className="my-10 flex flex-col items-center">
                <svg viewBox="0 0 400 340" className="w-full max-w-lg bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    {/* Axes */}
                    <g className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.5">
                        <line x1="30" y1="280" x2="380" y2="280" />
                        <polygon points="380,277 386,280 380,283" className="fill-slate-400 dark:fill-slate-500" strokeWidth="0" />
                        <line x1="40" y1="300" x2="40" y2="20" />
                        <polygon points="37,20 40,14 43,20" className="fill-slate-400 dark:fill-slate-500" strokeWidth="0" />
                    </g>

                    {/* Vertical Drop Lines */}
                    <g className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4">
                        <line x1="110" y1="160.4" x2="110" y2="280" />
                        <line x1="260" y1="207.4" x2="260" y2="280" />
                        <line x1="185" y1="183.9" x2="185" y2="280" />
                    </g>

                    {/* Curve */}
                    <path d="M 50 10 Q 200 480 350 10" fill="none" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" />

                    {/* Chord */}
                    <line x1="110" y1="160.4" x2="260" y2="207.4" className="stroke-purple-600 dark:stroke-purple-400" strokeWidth="2" strokeDasharray="5,5" />

                    {/* Vertical comparing line */}
                    <line x1="185" y1="183.9" x2="185" y2="242.65" className="stroke-red-500 dark:stroke-red-400" strokeWidth="2.5" />

                    {/* Points */}
                    <g className="fill-slate-50 dark:fill-slate-900 stroke-2">
                        <circle cx="110" cy="160.4" r="4" className="stroke-blue-600 dark:stroke-blue-400" />
                        <circle cx="260" cy="207.4" r="4" className="stroke-blue-600 dark:stroke-blue-400" />
                        <circle cx="185" cy="183.9" r="4" className="stroke-purple-600 dark:stroke-purple-400 fill-purple-600 dark:fill-purple-400" />
                        <circle cx="185" cy="242.65" r="4" className="stroke-blue-600 dark:stroke-blue-400 fill-blue-600 dark:fill-blue-400" />
                    </g>

                    {/* Labels */}
                    <g className="fill-slate-800 dark:fill-slate-200 font-serif" style={{ fontSize: '13px' }}>
                        <text x="110" y="298" textAnchor="middle" className="italic">x</text>
                        <text x="260" y="298" textAnchor="middle" className="italic">y</text>
                        <text x="185" y="318" textAnchor="middle" className="italic" style={{ fontSize: '11px' }}>tx + (1-t)y</text>

                        <text x="100" y="150" textAnchor="end" className="italic">(x, f(x))</text>
                        <text x="270" y="222" textAnchor="start" className="italic">(y, f(y))</text>

                        <text x="275" y="175" textAnchor="end" className="fill-purple-700 dark:fill-purple-400 italic" style={{ fontSize: '11px' }}>t f(x) + (1-t)f(y)</text>
                        <text x="110" y="250" textAnchor="start" className="fill-blue-700 dark:fill-blue-400 italic" style={{ fontSize: '11px' }}>f(tx + (1-t)y)</text>
                    </g>
                </svg>
                <figcaption className="text-sm text-slate-500 dark:text-slate-400 mt-4 text-center leading-relaxed">
                    図：凸関数の性質。区間内の任意の2点を結んだ線分（紫）が、常に関数のグラフ（青）の上側に位置する。<br />
                    赤い線分は、不等式 <InlineMath math="f(tx+(1-t)y) \leq t f(x) + (1-t)f(y)" /> の差を表している。
                </figcaption>
            </figure>

            <p>
                凸関数もまた、単調関数と同様に「形」に関する制約ですが、これが関数の連続性を自然にもたらすという重要な結果があります。
            </p>

            <ContentBox type="theorem" title="Theorem 4.5-3 (凸関数は連続である)">
                <p>
                    開区間 <InlineMath math="(a, b)" /> 上で定義された凸関数 <InlineMath math="f" /> は、その区間の各点で連続である。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    ※ 注意：定義域を閉区間 <InlineMath math="[a, b]" /> とした場合、開区間 <InlineMath math="(a, b)" /> では連続になりますが、端点 <InlineMath math="a" /> や <InlineMath math="b" /> においては不連続になる場合があります（例：端点だけ値が跳ね上がっているような凸関数）。
                </p>
            </ContentBox>

            <p>
                最後に、凸関数の性質を多変量（複数点の平均）に一般化した強力な不等式を紹介します。これは確率論や情報理論など、多岐にわたる分野で基本的な道具として用いられます。
            </p>

            <ContentBox type="proposition" title="Proposition 4.5-1 (凸関数のイェンセンの不等式)">
                <p>
                    <InlineMath math="f" /> が区間 <InlineMath math="I" /> 上の凸関数であるとする。
                    任意の点 <InlineMath math="x_1, x_2, \dots, x_n \in I" /> と、<InlineMath math="\sum_{i=1}^n \lambda_i = 1" /> を満たす非負の実数 <InlineMath math="\lambda_1, \dots, \lambda_n \geq 0" /> に対して、
                </p>
                <BlockMath math="f \left( \sum_{i=1}^n \lambda_i x_i \right) \leq \sum_{i=1}^n \lambda_i f(x_i)" />
                <p>
                    が成り立つ。
                </p>
                <div className="mt-4 font-semibold">証明の概略:</div>
                <p className="mt-2">
                    <InlineMath math="n" /> に関する数学的帰納法により証明される。
                    <InlineMath math="n = 2" /> の場合は、凸関数の定義そのものである。
                    <InlineMath math="n-1" /> で成り立つと仮定したとき、<InlineMath math="n" /> 個の場合を <InlineMath math="\lambda_n x_n + (1-\lambda_n) \sum_{i=1}^{n-1} \frac{\lambda_i}{1-\lambda_n} x_i" /> のように2項の凸結合とみなして展開することで示される。
                </p>
            </ContentBox>

            <p>
                単調関数や凸関数は、微分可能性という強い条件を直接仮定しなくとも、関数への強い制約となり有益な性質を引き出せます。
                連続関数の理論を終え、次なる Chapter 5 では、「連続性」という概念を区間全体で一様（均等）にする「一様連続」へと理論をさらに深化させていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>単調関数は、片側極限が常に存在し、不連続点は跳躍不連続点に限られる。</li>
                    <li>単調関数の不連続点は最悪でも可算個しか存在しない。</li>
                    <li>開区間上の凸関数は自動的に連続となる（端点での挙動には注意が必要）。</li>
                    <li>凸関数の定義の一般化として、イェンセンの不等式が成り立つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
