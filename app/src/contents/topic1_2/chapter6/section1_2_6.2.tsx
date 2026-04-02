import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function TripleIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                二重積分は「面積分」とも呼ばれますが、変数をもう1つ増やして空間における「体積積分」を考えます。
                これが<strong>三重積分 (Triple Integral)</strong> です。空間内の密度分布から全体の質量を計算するような物理的応用に非常に役立ちます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 三重積分の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">三重積分の定義と意味</h2>

            <p>
                二重積分のときと同様に、領域を細かく分割してリーマン和を構成します。
            </p>

            <ContentBox type="definition" title="Definition 6.2-1 （三重積分）">
                <p>
                    3次元空間 <InlineMath math="xyz" /> 内の有界な閉領域 <InlineMath math="V" /> において、関数 <InlineMath math="f(x, y, z)" /> が定義されているとする。
                    <InlineMath math="V" /> を微小な直方体に分割し、それぞれの体積を <InlineMath math="\Delta V_i" /> とする。代表点 <InlineMath math="(x_i, y_i, z_i)" /> における関数値との積の和の極限：
                </p>
                <BlockMath math="\lim_{n \to \infty} \sum_{i=1}^n f(x_i, y_i, z_i) \Delta V_i" />
                <p>
                    が存在するとき、関数 <InlineMath math="f" /> は領域 <InlineMath math="V" /> で積分可能であるという。
                    この極限値を <InlineMath math="V" /> 上の<strong>三重積分</strong>といい、次のように表す：
                </p>
                <BlockMath math="\iiint_V f(x, y, z) \, dx dy dz \quad \text{または} \quad \iiint_V f(x, y, z) \, dV" />
            </ContentBox>

            <ContentBox type="remark" title="三重積分の意味と活用例">
                <p>
                    四次元のグラフを描くことはできないため、直感的に捉えにくい部分がありますが、以下のように「物理量」として解釈すると極めて自然です。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>体積：</strong> <InlineMath math="f(x,y,z) = 1" /> として積分すると、領域 <InlineMath math="V" /> の<strong>体積</strong>になる。<br />
                        <InlineMath math="\displaystyle \iiint_V 1 \, dx dy dz = (\text{領域 } V \text{ の体積})" />
                    </li>
                    <li>
                        <strong>質量：</strong> <InlineMath math="f(x,y,z)" /> を領域各点における「密度」とみなすと、積分の結果は領域全体の<strong>質量</strong>になる。
                    </li>
                    <li>
                        <strong>重心：</strong> それぞれの座標に密度を掛けて積分し、全体の質量で割ることで、立体の<strong>重心（質量中心）</strong>を計算できる。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 累次積分への変換
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">累次積分への変換</h2>

            <p>
                二重積分と同じように、三重積分も1変数の積分を3回繰り返すことで計算します。これもフビニの定理の拡張です。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 （三重積分のフビニの定理・累次積分）">
                <p>
                    立体領域 <InlineMath math="V" /> が、<InlineMath math="xy" /> 平面上の領域 <InlineMath math="D" /> に対して、高さ <InlineMath math="z" /> が2つの関数 <InlineMath math="E_1(x,y), E_2(x,y)" /> で挟まれていると表せる場合：
                </p>
                <BlockMath math="V = \{ (x,y,z) \mid (x,y) \in D, \,\, E_1(x,y) \le z \le E_2(x,y) \}" />
                <p>このときの三重積分は、以下のようにまず <InlineMath math="z" /> について積分し、その後に <InlineMath math="D" /> 上で二重積分を行う形に帰着できる：</p>
                <BlockMath math="\iiint_V f(x,y,z) \, dx dy dz = \iint_D \left( \int_{E_1(x,y)}^{E_2(x,y)} f(x,y,z) \, dz \right) dx dy" />
                <p className="mt-2 text-sm text-slate-500">
                    ※ どのような順序（例：<InlineMath math="x \to y \to z" />、<InlineMath math="z \to x \to y" />）で積分を計算しても結果は同じになりますが、領域の表しやすさに応じて最適な順序を選ぶことが計算を楽にするコツです。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-1 （三重積分の計算）">
                <p>
                    領域 <InlineMath math="V = \{ (x,y,z) \mid 0 \le x \le 1, \, 0 \le y \le 1, \, 0 \le z \le y \}" /> における関数 <InlineMath math="f(x,y,z) = 2x+y+z" /> の三重積分 <InlineMath math="\iiint_V (2x+y+z) \, dV" /> を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    積分領域の順序を外側から <InlineMath math="x, y, z" /> の順に定めて累次積分を行う。
                </p>
                <BlockMath math="\int_0^1 \left( \int_0^1 \left( \int_0^y (2x+y+z) \, dz \right) dy \right) dx" />
                <p>1つ目の積分（<InlineMath math="z" /> について、<InlineMath math="x, y" /> は定数）：</p>
                <BlockMath math="\begin{aligned} \int_0^y (2x+y+z) \, dz &= \left[ (2x+y)z + \frac{1}{2}z^2 \right]_{z=0}^{y} \\ &= (2x+y)y + \frac{1}{2}y^2 = 2xy + \frac{3}{2}y^2\end{aligned}" />
                <p>2つ目の積分（<InlineMath math="y" /> について、<InlineMath math="x" /> は定数）：</p>
                <BlockMath math="\int_0^1 \left( 2xy + \frac{3}{2}y^2 \right) \, dy = \left[ xy^2 + \frac{1}{2}y^3 \right]_{y=0}^1 = x + \frac{1}{2}" />
                <p>3つ目の積分（<InlineMath math="x" /> について）：</p>
                <BlockMath math="\int_0^1 \left( x + \frac{1}{2} \right) \, dx = \left[ \frac{1}{2}x^2 + \frac{1}{2}x \right]_0^1 = \frac{1}{2} + \frac{1}{2} = 1" />
                <p>したがって、この三重積分の値は <InlineMath math="1" /> である。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>立体領域を細かく分割して足し合わせるのが<strong>三重積分</strong>であり、体積や質量、重心の計算に利用される（Definition 6.2-1）。</li>
                    <li>二重積分のときと同様に、<strong>フビニの定理</strong>を用いて1変数関数の定積分を3回繰り返す（累次積分）ことで機械的に計算できる（Theorem 6.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
