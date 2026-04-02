import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DoubleIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                1変数の定積分は「曲線の下側の面積」を表していましたが、多変数関数（2変数関数）の積分は「曲面の下側の<strong>体積</strong>」を表形式に拡張したものです。
                本章では、多変数関数における積分の概念である<strong>重積分 (Multiple Integral)</strong> と、その具体的な計算手法について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 二重積分の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">二重積分の定義</h2>

            <p>
                「細かく分割して足し合わせる」というリーマン和の考え方を、1次元の区間から2次元の領域へと拡張します。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 （二重リーマン積分 / Double Integral）">
                <p>
                    <InlineMath math="xy" /> 平面上の有界な閉領域 <InlineMath math="D" /> 上で定義された関数 <InlineMath math="f(x, y)" /> を考える。
                    領域 <InlineMath math="D" /> を多数の小さな小領域 <InlineMath math="\Delta S_1, \Delta S_2, \dots, \Delta S_n" /> に分割し、それぞれの面積を <InlineMath math="\Delta A_i" /> とする。
                    各小領域から代表点 <InlineMath math="(x_i, y_i)" /> を選び、リーマン和を作って分割を限りなく細かくしたときの極限
                </p>
                <BlockMath math="\lim_{n \to \infty} \sum_{i=1}^n f(x_i, y_i) \Delta A_i" />
                <p>
                    が存在し、代表点の選び方や分割の仕方によらないとき、関数 <InlineMath math="f" /> は領域 <InlineMath math="D" /> 上で<strong>積分可能</strong>であるという。<br />
                    この極限値を <InlineMath math="f(x,y)" /> の <InlineMath math="D" /> 上の<strong>二重積分</strong>といい、次のように表す。
                </p>
                <BlockMath math="\iint_D f(x, y) \, dx dy \quad \text{または} \quad \iint_D f(x, y) \, dA" />
            </ContentBox>

            <ContentBox type="remark" title="幾何学的な意味">
                <p>
                    <InlineMath math="f(x,y) \ge 0" /> のとき、<InlineMath math="f(x_i, y_i) \Delta A_i" /> は「底面積が <InlineMath math="\Delta A_i" />、高さが <InlineMath math="f(x_i, y_i)" /> の細長い直方体の体積」を表します。<br />
                    これを極限まで足し合わせた二重積分 <InlineMath math="\iint_D f(x, y) \, dx dy" /> は、領域 <InlineMath math="D" /> の上と曲面 <InlineMath math="z = f(x,y)" /> の下で囲まれた<strong>立体の体積</strong>になります。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 6.1-1 （二重積分の線形性と大小比較）">
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>線形性：</strong><br />
                        <BlockMath math="\begin{aligned} &\iint_D \{ \alpha f(x,y) + \beta g(x,y) \} \, dx dy \\ = &\  \alpha \iint_D f(x,y) \, dx dy + \beta \iint_D g(x,y) \, dx dy\end{aligned}" />
                    </li>
                    <li>
                        <strong>面積との関係：</strong> <InlineMath math="f(x,y) = 1" /> を積分すると、領域 <InlineMath math="D" /> の<strong>面積</strong>になる。<br />
                        <BlockMath math="\iint_D 1 \, dx dy = (\text{領域 } D \text{ の面積})" />
                    </li>
                    <li>
                        <strong>領域の分割（加法性）：</strong> 領域 <InlineMath math="D" /> を <InlineMath math="D_1" /> と <InlineMath math="D_2" /> に（境界を除いて重ならないように）分割したとき、<br />
                        <BlockMath math="\begin{aligned} &\iint_D f(x,y) \, dx dy \\ = &\  \iint_{D_1} f(x,y) \, dx dy + \iint_{D_2} f(x,y) \, dx dy\end{aligned}" />
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 累次積分とフビニの定理
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">累次積分とフビニの定理</h2>

            <p>
                極限を用いた定義の通りに計算するのは現実的ではありません。
                二重積分を「1変数の積分を2回繰り返す（累次積分）」ことで計算可能にする大定理が<strong>フビニの定理</strong>です。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 （フビニの定理 / Fubini's Theorem）">
                <p>
                    積分領域 <InlineMath math="D" /> が長方形領域 <InlineMath math="D = \{ (x,y) \mid a \le x \le b, \, c \le y \le d \}" /> であり、関数 <InlineMath math="f(x,y)" /> が <InlineMath math="D" /> 上で連続であるとき、二重積分はどちらの変数から積分しても等しい。
                </p>
                <BlockMath math="\begin{aligned} \iint_D f(x, y) \, dx dy &= \int_a^b \left( \int_c^d f(x,y) \, dy \right) dx \\ &= \int_c^d \left( \int_a^b f(x,y) \, dx \right) dy\end{aligned}" />
                <p className="mt-2 text-sm">
                    （片方の変数を積分するときは、偏微分のときと同様に、もう一方の変数を「定数」とみなして1変数の積分を行います）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （フビニの定理の直感的な説明）">
                <p>
                    立体の体積を求める操作を考えます。<br />
                    <InlineMath math="A(x) = \int_c^d f(x,y) \, dy" /> という積分は、<InlineMath math="x" /> をある値で固定して <InlineMath math="yz" /> 平面に平行に立体を切ったときの「切り口の面積」を表します。<br />
                    したがって、この切り口の面積 <InlineMath math="A(x)" /> を <InlineMath math="x" /> について積分した <InlineMath math="\int_a^b A(x) \, dx" /> が全体の体積になる、というのは高校数学で学ぶ体積の求め方（カヴァリエリの原理）そのものです。
                    切る方向を <InlineMath math="y" /> 軸に垂直にしても同じ結果になるため、積分順序が交換できます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 一般的な領域での累次積分
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">一般的な領域での積分と積分順序の交換</h2>

            <p>
                長方形でない一般的な領域 <InlineMath math="D" /> でも、同様に累次積分に直すことができます。領域の境界が関数で表される場合、内側の積分の区間は<strong>変数を含む式</strong>になります。
            </p>

            <ContentBox type="remark" title="縦線領域と横線領域">
                <p><strong>縦線領域：</strong> <InlineMath math="D" /> が <InlineMath math="a \le x \le b, \,\, g_1(x) \le y \le g_2(x)" /> の形で表されるとき</p>
                <BlockMath math="\iint_D f(x,y) \, dx dy = \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x,y) \, dy \right) dx" />
                <p className="text-sm mt-1">（先に <InlineMath math="y" /> について積分し、後から <InlineMath math="x" /> で積分する）</p>

                <p className="mt-4"><strong>横線領域：</strong> <InlineMath math="D" /> が <InlineMath math="c \le y \le d, \,\, h_1(y) \le x \le h_2(y)" /> の形で表されるとき</p>
                <BlockMath math="\iint_D f(x,y) \, dx dy = \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x,y) \, dx \right) dy" />
                <p className="text-sm mt-1">（先に <InlineMath math="x" /> について積分し、後から <InlineMath math="y" /> で積分する）</p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-1 （積分順序の交換とその効果）">
                <p>
                    関数が積分しづらい場合に、積分順序を交換（<InlineMath math="dxdy \to dydx" />）することで容易になるケースがあります。
                </p>
                <p>
                    例として、<InlineMath math="\displaystyle I = \int_0^1 \left( \int_y^1 e^{x^2} \, dx \right) dy" /> を計算せよ。<br />
                    <span className="text-sm text-slate-500">※ 内側の積分 <InlineMath math="\int e^{x^2} dx" /> は初等関数で表せないため、このままでは計算できません。</span>
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    まず積分領域 <InlineMath math="D" /> を図示（特定）する。<br />
                    与えられた式から、<InlineMath math="D" /> は <InlineMath math="0 \le y \le 1, \,\, y \le x \le 1" /> である。<br />
                    これを <InlineMath math="x" /> を外側に持ってきて「縦線領域」として表し直すと、<InlineMath math="x" /> の範囲は <InlineMath math="0 \le x \le 1" /> であり、各 <InlineMath math="x" /> において <InlineMath math="y" /> は <InlineMath math="0 \le y \le x" /> を動く。<br />
                    すなわち <InlineMath math="D = \{ (x,y) \mid 0 \le x \le 1, \, 0 \le y \le x \}" /> と同じ領域である。
                </p>
                <p>この順序で累次積分を書き直して計算する：</p>
                <BlockMath math="\begin{aligned} I &= \int_0^1 \left( \int_0^x e^{x^2} \, dy \right) dx \\ &= \int_0^1 \Big[ e^{x^2} y \Big]_{y=0}^{y=x} \, dx \\ &= \int_0^1 x e^{x^2} \, dx \end{aligned}" />
                <p>
                    ここで <InlineMath math="u = x^2" /> と置換積分すると <InlineMath math="du = 2x \, dx" /> なので：
                </p>
                <BlockMath math="I = \frac{1}{2} \int_0^1 e^u \, du = \frac{1}{2} \Big[ e^u \Big]_0^1 = \frac{e - 1}{2}" />
                <p>順序を交換したおかげで、無理なく積分を実行できた。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>平面上の領域 <InlineMath math="D" /> における極限和として<strong>二重積分</strong>が定義され、曲面下の体積を表す（Definition 6.1-1）。</li>
                    <li><strong>フビニの定理</strong>により、二重積分は1変数関数の積分を2回繰り返す（累次積分）ことで計算できる（Theorem 6.1-1）。</li>
                    <li>長方形でない領域では、内側の積分区間が関数の式となる。積分の計算が困難な場合は、<strong>積分順序の交換</strong>（領域 <InlineMath math="D" /> の記述し直し）によって計算可能になることが多い（Example 6.1-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
