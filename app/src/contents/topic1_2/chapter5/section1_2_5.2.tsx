import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function PartialDerivatives() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                多変数関数は「どの方向に動くか」によって関数値の変化（傾き）が異なります。
                そこで、一度にあらゆる方向を考えるのではなく、<strong>「ある1つの変数だけを動かし、他の変数は固定（定数扱い）する」</strong>ことで変化率を取り出す微分操作を考えます。これを<strong>偏微分</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 偏導関数の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">偏導関数の定義</h2>

            <p>
                幾何学的には、曲面 <InlineMath math="z = f(x, y)" /> を <InlineMath math="y" /> が一定（つまり <InlineMath math="x" /> 軸と平行な平面）で切断した切り口の曲線の「接線の傾き」を求める操作です。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 （偏導関数 / Partial Derivative）">
                <p>
                    2変数関数 <InlineMath math="z = f(x, y)" /> について、<InlineMath math="y" /> を定数とみなして <InlineMath math="x" /> だけで微分したものを、<InlineMath math="f" /> の <strong><InlineMath math="x" /> に関する偏導関数</strong> といい、以下のように表す：
                </p>
                <BlockMath math="\frac{\partial z}{\partial x} = \frac{\partial f}{\partial x} = f_x(x,y) = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}" />
                <p className="mt-4">
                    同様に、<InlineMath math="x" /> を定数とみなして <InlineMath math="y" /> だけで微分したものを、<InlineMath math="f" /> の <strong><InlineMath math="y" /> に関する偏導関数</strong> といい、以下のように表す：
                </p>
                <BlockMath math="\frac{\partial z}{\partial y} = \frac{\partial f}{\partial y} = f_y(x,y) = \lim_{k \to 0} \frac{f(x, y+k) - f(x, y)}{k}" />
                <p className="mt-2 text-sm text-slate-500">
                    ※ 記号 <InlineMath math="\partial" /> は「ラウンド (round)」や「パーシャル (partial)」、「デル (del)」など様々な読み方があります。常微分記号 <InlineMath math="d" /> と明確に区別します。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1 （偏微分を計算する）">
                <p>
                    関数 <InlineMath math="f(x,y) = x^3 y^2 + \sin(xy)" /> の偏導関数 <InlineMath math="f_x, f_y" /> を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong><InlineMath math="f_x" /> の計算：</strong> <InlineMath math="y" /> を定数とみなす。
                        <BlockMath math="\begin{aligned} \frac{\partial f}{\partial x} &= (x^3)' \cdot y^2 + \cos(xy) \cdot (xy)_x' \\ &= 3x^2 y^2 + y \cos(xy) \end{aligned}" />
                    </li>
                    <li>
                        <strong><InlineMath math="f_y" /> の計算：</strong> 今度は <InlineMath math="x" /> を定数とみなす。
                        <BlockMath math="\begin{aligned} \frac{\partial f}{\partial y} &= x^3 \cdot (y^2)' + \cos(xy) \cdot (xy)_y' \\ &= 2x^3 y + x \cos(xy) \end{aligned}" />
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 高階偏導関数とシュワルツの定理
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">高階偏導関数</h2>

            <p>
                1変数のときと同様に、偏導関数をさらに偏微分することで、高階の偏導関数が得られます。
                ただし、どの変数でどの順番で微分するかによって種類が増えます。
            </p>

            <ContentBox type="definition" title="Definition 5.2-2 （高階偏導関数・混合偏導関数）">
                <p>
                    2変数関数 <InlineMath math="f(x, y)" /> の偏導関数 <InlineMath math="f_x, f_y" /> をさらに偏微分したものを、<strong>第2次偏導関数</strong>といい、4種類ある。
                </p>
                <div className="space-y-3 mt-2">
                    <div>
                        <InlineMath math="x" /> で2回偏微分：<br />
                        <BlockMath math="\displaystyle f_{xx} = \frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right)" />
                    </div>
                    <div>
                        <InlineMath math="y" /> で2回偏微分：<br />
                        <BlockMath math="\displaystyle f_{yy} = \frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right)" />
                    </div>
                    <div>
                        <InlineMath math="x" /> で偏微分してから <InlineMath math="y" /> で偏微分（混合偏導関数）：<br />
                        <BlockMath math="\displaystyle f_{xy} = \frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)" />
                    </div>
                    <div>
                        <InlineMath math="y" /> で偏微分してから <InlineMath math="x" /> で偏微分（混合偏導関数）：<br />
                        <BlockMath math="\displaystyle f_{yx} = \frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)" />
                    </div>
                </div>
            </ContentBox>

            <p>
                一見すると <InlineMath math="f_{xy}" /> と <InlineMath math="f_{yx}" /> は異なる関数になりそうですが、微分の順序は（多くの一般的な関数において）交換可能であることが保証されています。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 （シュワルツの定理 / Schwarz's Theorem）">
                <p>
                    関数 <InlineMath math="f(x, y)" /> の混合偏導関数 <InlineMath math="f_{xy}" /> と <InlineMath math="f_{yx}" /> が連続であるならば、両者は等しい：
                </p>
                <BlockMath math="f_{xy}(x, y) = f_{yx}(x, y)" />
                <p>すなわち、<InlineMath math="\displaystyle \frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y}" /> が成り立つ。</p>
                <p className="mt-2 text-sm text-slate-500">
                    ※ クレローの定理 (Clairaut's theorem) やヤングの定理 (Young's theorem) と呼ばれることもあります。証明の概略は、差分商の差分（二重差分商）に平均値の定理を2回適用することで導かれるため、ここでは割愛します。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-2 （シュワルツの定理の確認）">
                <p>
                    <InlineMath math="f(x, y) = x^3 y^2" /> について <InlineMath math="f_{xy}" /> と <InlineMath math="f_{yx}" /> が一致することを確認せよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p><InlineMath math="x \to y" /> の順：</p>
                <BlockMath math="\begin{aligned} f_x &= 3x^2 y^2 \\ f_{xy} &= \frac{\partial}{\partial y}(3x^2 y^2) = 6x^2 y \end{aligned}" />
                <p><InlineMath math="y \to x" /> の順：</p>
                <BlockMath math="\begin{aligned} f_y &= 2x^3 y \\ f_{yx} &= \frac{\partial}{\partial x}(2x^3 y) = 6x^2 y \end{aligned}" />
                <p>確かに一致する。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>他の変数を定数とみなして、1つの変数についてだけ微分する操作を<strong>偏微分</strong>という（Definition 5.2-1）。</li>
                    <li><InlineMath math="\partial" /> の記号を用いて表記し、微分する変数を明記する。</li>
                    <li>偏微分を繰り返したものを高階偏導関数といい、変数の順序が混ざっているものを混合偏導関数という（Definition 5.2-2）。</li>
                    <li>偏導関数が連続なら、微分の順序を変えても結果は同じになる（<strong>シュワルツの定理</strong>, Theorem 5.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
