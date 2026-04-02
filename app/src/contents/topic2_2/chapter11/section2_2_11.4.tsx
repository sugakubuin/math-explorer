import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_11_4() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                解析学における「基本定理」は、常に「領域全体での積分（高次元）」と「その境界での積分（低次元）」を結びつける役割を果たします。
                1次元の場合の「関数の積分は、両端点（境界）での値の差に等しい」という微積分学の基本定理を、2次元（平面）に拡張した最初の偉大な定理が<strong>グリーンの定理</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">グリーンの定理</h2>

            <ContentBox type="theorem" title="Theorem 11.4-1 (グリーンの定理)">
                <p>
                    <InlineMath math="D" /> を <InlineMath math="\mathbb{R}^2" /> （<InlineMath math="xy" /> 平面）内の有限な閉領域とし、その境界となる閉曲線 <InlineMath math="\partial D" /> は区分的に滑らかで、自己交差を持たないとする（単一閉曲線、あるいは複数の閉曲線の和）。
                    また、<InlineMath math="\partial D" /> の向きは、<strong>常に領域 <InlineMath math="D" /> を左に見ながら進む向き（正の向き・反時計回り）</strong>とする。
                </p>
                <p className="mt-2">
                    <InlineMath math="P(x, y)" /> および <InlineMath math="Q(x, y)" /> を <InlineMath math="D" /> を含むある開集合上で連続な偏導関数を持つ（<InlineMath math="C^1" /> 級の）関数とすると、次の等式が成り立つ：
                </p>
                <BlockMath math="\oint_{\partial D} (P\, dx + Q\, dy) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dx \, dy" />
            </ContentBox>

            <ContentBox type="proof" title="Proof [縦線・横線領域での証明]">
                <p>
                    一般の複雑な領域は、有限個の単純な領域（長方形や、ひとつの <InlineMath math="x" /> に対して <InlineMath math="y" /> の範囲が一意に定まる領域）に分割できるため、ここでは <InlineMath math="D" /> が「縦線領域」かつ「横線領域」であるような単純な領域であるとして証明する。
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 font-bold">[Step 1: P に関する部分の証明]</p>
                <p className="mt-2">
                    領域 <InlineMath math="D" /> が縦線領域、すなわち <InlineMath math="D = \{ (x, y) \mid a \le x \le b, \, y_1(x) \le y \le y_2(x) \}" /> として表されるとする。<InlineMath math="\partial D" /> は、下側の曲線 <InlineMath math="C_1" />（<InlineMath math="x=a \to b" />）、右側の垂直線 <InlineMath math="C_2" />、上側の曲線 <InlineMath math="C_3" />（<InlineMath math="x=b \to a" />）、左側の垂直線 <InlineMath math="C_4" /> の連結からなる。
                </p>
                <p className="mt-2">
                    右辺の二重積分のうち、<InlineMath math="P" /> に関する項を計算する。フビニの定理を用いて <InlineMath math="y" /> について先に積分すると、微積分学の基本定理より
                </p>
                <BlockMath math="\begin{aligned}
                                    &\iint_D \left( -\frac{\partial P}{\partial y} \right) \, dx \, dy \\ 
                                    &= - \int_a^b \left[ \int_{y_1(x)}^{y_2(x)} \frac{\partial P}{\partial y} \, dy \right] \, dx \\
                                    &= - \int_a^b \big[ P(x, y_2(x)) - P(x, y_1(x)) \big] \, dx \\
                                    &= \int_a^b P(x, y_1(x)) \, dx - \int_a^b P(x, y_2(x)) \, dx
                                \end{aligned}" />
                <p className="mt-2">
                    一方で、左辺の線積分のうち <InlineMath math="P\, dx" /> の部分を計算する。<InlineMath math="C_2, C_4" /> 上では <InlineMath math="x" /> が定数なので <InlineMath math="dx=0" /> であり、積分は <InlineMath math="0" /> となる。<InlineMath math="C_1" /> 上では <InlineMath math="x" /> がパラメータで <InlineMath math="y = y_1(x)" />、<InlineMath math="C_3" /> 上では <InlineMath math="y = y_2(x)" /> だが向きが <InlineMath math="b \to a" /> であるから、
                </p>
                <BlockMath math="\begin{aligned}
                                    \oint_{\partial D} P\, dx &= \int_{C_1} P\, dx + \int_{C_3} P\, dx \\
                                    &= \int_a^b P(x, y_1(x)) \, dx + \int_b^a P(x, y_2(x)) \, dx \\
                                    &= \int_a^b P(x, y_1(x)) \, dx - \int_a^b P(x, y_2(x)) \, dx
                                \end{aligned}" />
                <p className="mt-2">
                    これは二重積分の結果と完全に一致する。したがって、
                </p>
                <BlockMath math="\oint_{\partial D} P\, dx = -\iint_D \frac{\partial P}{\partial y} \, dx \, dy \quad \cdots (1)" />
                <p className="mt-2">
                    が示された。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 2: Q に関する部分の証明]</p>
                <p className="mt-2">
                    全く同様に、領域 <InlineMath math="D" /> が横線領域、すなわち <InlineMath math="D = \{ (x, y) \mid c \le y \le d, \, x_1(y) \le x \le x_2(y) \}" /> として表されるとし、<InlineMath math="x" /> について先に積分すると、右の境界（<InlineMath math="\uparrow" />）と左の境界（<InlineMath math="\downarrow" />）の線積分の差に等しくなることが示される。
                </p>
                <BlockMath math="\oint_{\partial D} Q\, dy = \iint_D \frac{\partial Q}{\partial x} \, dx \, dy \quad \cdots (2)" />

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 3: 結論]</p>
                <p className="mt-2">
                    式(1)と式(2)を足し合わせることで、グリーンの定理の等式が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">面積の計算への応用</h2>

            <p>
                グリーンの定理は、二重積分を線積分に（あるいはその逆に）変換する強力なツールです。
                二重積分で面積を求めるとき、被積分関数は常に <InlineMath math="1" /> です（<InlineMath math="\iint_D 1 \, dx \, dy = \mathrm{Area}(D)" />）。
                もし <InlineMath math="\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1" /> となるような <InlineMath math="P, Q" /> をうまく選べば、<strong>境界の線積分だけで図形の面積が求まる</strong>ことになります。
            </p>

            <ContentBox type="proposition" title="Corollary 11.4-1 (線積分による面積の公式)">
                <p>
                    領域 <InlineMath math="D" /> の面積 <InlineMath math="S" /> は、その正の向きの境界 <InlineMath math="\partial D" /> 上の線積分を用いて次のように計算できる：
                </p>
                <BlockMath math="S = \oint_{\partial D} x \, dy = -\oint_{\partial D} y \, dx = \frac{1}{2}\oint_{\partial D} (x \, dy - y \, dx)" />
            </ContentBox>

            <ContentBox type="example" title="Example 11.4-1 (楕円の面積)">
                <p>
                    楕円 <InlineMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} \le 1" /> の面積 <InlineMath math="S" /> を求める。
                </p>
                <p className="font-bold text-slate-700 dark:text-slate-300 mt-4">[解答]</p>
                <p className="mt-2">
                    境界である楕円の周は、パラメータ <InlineMath math="t \in [0, 2\pi]" /> を用いて正の向き（反時計回り）に
                </p>
                <BlockMath math="x(t) = a \cos t, \quad y(t) = b \sin t" />
                <p className="mt-2">
                    と表される。<InlineMath math="dx = -a \sin t \, dt, \, dy = b \cos t \, dt" /> であるから、線積分による面積公式の第3式を用いると、
                </p>
                <BlockMath math="\begin{aligned}
                                    S &= \frac{1}{2}\oint_{\partial D} (x \, dy - y \, dx) \\
                                    &= \frac{1}{2} \int_0^{2\pi} \big[ (a \cos t)(b \cos t) - (b \sin t)(-a \sin t) \big] \, dt \\
                                    &= \frac{1}{2} \int_0^{2\pi} ab (\cos^2 t + \sin^2 t) \, dt \\
                                    &= \frac{1}{2} \int_0^{2\pi} ab \, dt \\
                                    &= \frac{1}{2} ab [t]_0^{2\pi} = \pi ab
                                \end{aligned}" />
                <p className="mt-2">
                    二重積分の変数変換（ヤコビアンの計算）を用いずとも、1変数の積分のみで楕円の面積が求まった。
                </p>
            </ContentBox>

            <ContentBox type="note" title="Chapter 11 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>線積分・面積分は、通常の定積分・二重積分を「曲がった空間（多様体）」上に拡張した概念である。</li>
                    <li>保存力場におけるベクトル場の線積分は、ポテンシャル関数の両端での値の差となり、経路に依存しない。これは微積分学の基本定理の自然な拡張である。</li>
                    <li>グリーンの定理は「領域全体での二重積分」と「境界に沿う線積分」を結びつける。これは「内部の回転（微小な渦）の総和は、境界に沿う巨視的な循環に等しい」というストークスの定理（次章で扱う）の2次元版である。</li>
                </ul>
            </ContentBox>

        </section>
    );
}
