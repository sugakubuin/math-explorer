import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function MultivariableFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでは「1つの入力（<InlineMath math="x" />）に対して1つの出力（<InlineMath math="y" />）が定まる」関数、すなわち<strong>1変数関数</strong>を扱ってきました。
                しかし、物理現象（空間上の温度や圧力）や経済モデル（複数の要因に依存する利益）など、現実の多くの対象は<strong>複数の変数</strong>によって決まります。
                本章では、変数が2つ以上ある「多変数関数」とその微分について学んでいきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 多変数関数の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">多変数関数の定義</h2>

            <p>
                変数の数はいくつでも構いませんが、図示が容易で本質を捉えやすい<strong>2変数関数</strong>を主に扱います。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 （2変数関数）">
                <p>
                    実数の組 <InlineMath math="(x, y)" /> の集合 <InlineMath math="D" /> 上の各点に対して、それぞれ1つの実数 <InlineMath math="z" /> を対応させる規則 <InlineMath math="f" /> を
                    <strong>2変数関数 (Function of two variables)</strong> といい、
                </p>
                <BlockMath math="z = f(x, y)" />
                <p>
                    と表す。このとき、集合 <InlineMath math="D" /> をこの関数の<strong>定義域</strong>という。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 5.1-2 （グラフと等高線）">
                <ul className="list-disc pl-5 mt-2 space-y-4">
                    <li>
                        <strong>グラフ：</strong> 3次元空間 <InlineMath math="(x, y, z)" /> において、点 <InlineMath math="(x, y, f(x,y))" /> 全体が作る曲面を <InlineMath math="z = f(x,y)" /> の<strong>グラフ</strong>という。
                        1変数関数が曲線を描くのに対し、2変数関数は「曲面」を描く。
                    </li>
                    <li>
                        <strong>等高線：</strong> ある定数 <InlineMath math="c" /> に対して、<InlineMath math="f(x,y) = c" /> を満たす <InlineMath math="xy" /> 平面上の曲線を<strong>等高線 (Level curve)</strong> という。
                        地図の等高線と同じく、一定の「高さ」を持つ点を結んだものである。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1 （グラフと等高線の例）">
                <p>
                    関数 <InlineMath math="z = x^2 + y^2" /> について考える。
                    このグラフは原点 <InlineMath math="(0,0,0)" /> を頂点として上に広がる「放物面（お椀型）」となる。
                </p>
                <p className="mt-2">
                    等高線を描くために <InlineMath math="z = c" /> (<InlineMath math="c > 0" />) とおくと、方程式は
                </p>
                <BlockMath math="x^2 + y^2 = c" />
                <p>
                    となり、これは原点を中心とする半径 <InlineMath math="\sqrt{c}" /> の「同心円」になる。
                    等高線が円になることから、立体的な形（お椀型）を容易に想像できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 多変数関数の極限と連続性
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">多変数関数の極限と連続性</h2>

            <p>
                1変数関数の場合、点 <InlineMath math="x = a" /> に近づく方法は「右から」と「左から」の2通りだけでした。
                しかし、2変数関数の場合、平面上の点 <InlineMath math="(a, b)" /> に近づく方法は<strong>無数に（あらゆる方向や経路から）</strong>存在します。これが多変数関数の極限を複雑にする要因です。
            </p>

            <ContentBox type="definition" title="Definition 5.1-3 （2変数関数の極限）">
                <p>
                    点 <InlineMath math="(x, y)" /> が点 <InlineMath math="(a, b)" /> に近づくとき（<strong>近づき方・経路によらず</strong>）、関数 <InlineMath math="f(x, y)" /> が一定の値 <InlineMath math="L" /> に限りなく近づくならば、
                    この <InlineMath math="L" /> を極限値といい、次のように表す：
                </p>
                <BlockMath math="\lim_{(x,y) \to (a,b)} f(x,y) = L" />
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-bold">
                    【注意】「近づく経路」によって異なる極限値になる場合、その極限は「存在しない」。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-2 （極限が存在しない例）">
                <p>
                    関数 <InlineMath math="\displaystyle f(x,y) = \frac{xy}{x^2 + y^2}" /> の <InlineMath math="(x,y) \to (0,0)" /> における極限を調べよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>原点 <InlineMath math="(0,0)" /> への近づき方として、直線 <InlineMath math="y = mx" /> （原点を通る傾き <InlineMath math="m" /> の直線）に沿って近づく場合を考える。</p>
                <BlockMath math="\begin{aligned} \lim_{x \to 0} f(x, mx) &= \lim_{x \to 0} \frac{x(mx)}{x^2 + (mx)^2} \\ &= \lim_{x \to 0} \frac{mx^2}{x^2(1+m^2)} = \frac{m}{1+m^2} \end{aligned}" />
                <p>
                    この結果は、傾き <InlineMath math="m" /> の値によって異なる。
                    （例：<InlineMath math="m=1" /> なら <InlineMath math="1/2" />、<InlineMath math="m=2" /> なら <InlineMath math="2/5" /> に近づく）
                </p>
                <p>近づく経路によって行き先が変わるため、<strong>極限は存在しない</strong>。</p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-3 （極限が存在する例：極座標の利用）">
                <p>
                    関数 <InlineMath math="\displaystyle f(x,y) = \frac{x^2 y}{x^2 + y^2}" /> の <InlineMath math="(x,y) \to (0,0)" /> における極限を調べよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    近づく経路によらず極限が一致することを示すために、極座標 <InlineMath math="x = r\cos\theta, y = r\sin\theta" /> を用いる。
                    <InlineMath math="(x,y) \to (0,0)" /> は、<InlineMath math="\theta" /> の値（近づく方向）に関わらず <InlineMath math="r \to 0" /> となることに対応する。
                </p>
                <BlockMath math="\begin{aligned} f(r\cos\theta, r\sin\theta) &= \frac{(r\cos\theta)^2 (r\sin\theta)}{(r\cos\theta)^2 + (r\sin\theta)^2} \\ &= \frac{r^3 \cos^2\theta \sin\theta}{r^2 (\cos^2\theta + \sin^2\theta)} = r \cos^2\theta \sin\theta \end{aligned}" />
                <p>
                    ここで、<InlineMath math="|\cos^2\theta \sin\theta| \le 1" /> であるから、<InlineMath math="0 \le |f(r\cos\theta, r\sin\theta)| \le r" /> が成り立つ。
                </p>
                <p>
                    <InlineMath math="r \to 0" /> のとき右辺は <InlineMath math="0" /> に収束するので、はさみうちの原理により、近づく方向 <InlineMath math="\theta" /> によらず極限値は <InlineMath math="0" /> となる。
                </p>
                <BlockMath math="\lim_{(x,y) \to (0,0)} \frac{x^2 y}{x^2 + y^2} = 0" />
            </ContentBox>

            <ContentBox type="definition" title="Definition 5.1-4 （2変数関数の連続性）">
                <p>
                    関数 <InlineMath math="f(x, y)" /> が点 <InlineMath math="(a, b)" /> において極限値を持ち、かつその値が関数の値 <InlineMath math="f(a, b)" /> と等しいとき、
                    すなわち
                </p>
                <BlockMath math="\lim_{(x,y) \to (a,b)} f(x,y) = f(a,b)" />
                <p>
                    が成り立つとき、<InlineMath math="f(x, y)" /> は点 <InlineMath math="(a, b)" /> で<strong>連続 (Continuous)</strong> であるという。
                </p>
                <p className="mt-2 text-sm">
                    ※ 定義域内のすべての点で連続な関数を単に連続関数という。多項式や三角関数などは、多変数であっても分母が0にならない限り連続である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>2変数の組 <InlineMath math="(x,y)" /> に対して1つの値 <InlineMath math="z" /> を決めるものが2変数関数である（Definition 5.1-1）。</li>
                    <li>2変数関数のグラフは空間内の「曲面」となり、平面上の「等高線」で立体形状を把握できる（Definition 5.1-2）。</li>
                    <li>多変数の極限において最も重要な点は、<strong>「あらゆる方向から近づいたとき」に極限が一致しなければならない</strong>ことである（Definition 5.1-3）。</li>
                    <li>近づく経路（例：<InlineMath math="y=mx" />）によって値が変わる場合、極限は存在しない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
