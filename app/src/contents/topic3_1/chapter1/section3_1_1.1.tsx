import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ScalarFieldAndGradient() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「ベクトル解析」の最初のステップとして、空間の各点に数値を対応させる「スカラー場」と、その変化を記述する「勾配（グラディエント）」について学びます。
                勾配は、多変量解析における「微分」の拡張であり、物理学や工学においてもっとも頻繁に活用される概念の一つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スカラー場の定義</h2>

            <p>
                まずは、空間の各点に対して1つの実数値が割り当てられている状態を厳密に定義しましょう。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (スカラー場)">
                <p>
                    <InlineMath math="n" /> 次次元空間の開集合 <InlineMath math="U \subset \mathbb{R}^n" /> 上で定義された実数値関数
                    <BlockMath math="f : U \to \mathbb{R}" />
                    を、<strong>スカラー場 (scalar field)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <p>
                直感的には、部屋の中の各点での温度や、気象図における各地点の気圧などがスカラー場に相当します。
            </p>

            <ContentBox type="example" title="Example 1.1-1 (身近なスカラー場)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>気温分布 <InlineMath math="T(x, y, z)" /></strong>：空間の各点に対して温度というスカラー値を対応させます。
                    </li>
                    <li>
                        <strong>高さ関数 <InlineMath math="h(x, y) = x^2 + y^2" /></strong>：平面上の各地点に対して標高を対応させます。
                        等値面（等高線）を描くことで、場の形状を視覚化できます。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">方向微分</h2>

            <p>
                多変数関数の変化を考えるとき、特定の方向に沿って場がどのように変化するかを考えるのが「方向微分」です。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (方向微分)">
                <p>
                    スカラー場 <InlineMath math="f" /> と、単位ベクトル <InlineMath math="\mathbf{u} = (u_1, u_2, u_3)" /> に対して、
                    点 <InlineMath math="\mathbf{p}" /> における <InlineMath math="\mathbf{u}" /> 方向の<strong>方向微分 (directional derivative)</strong> を次のように定義する：
                    <BlockMath math="D_{\mathbf{u}}f(\mathbf{p}) = \lim_{h \to 0} \frac{f(\mathbf{p} + h\mathbf{u}) - f(\mathbf{p})}{h}" />
                </p>
            </ContentBox>

            <p>
                方向微分は、特定の方向へ一歩進んだときにどれだけ関数値が変化するかを表す「斜面の傾き」に相当します。
            </p>

            <ContentBox type="remark" title="偏微分との関係">
                <p>
                    座標軸方向の単位ベクトル（例： <InlineMath math="\mathbf{e}_1 = (1, 0, 0)" /> ）に沿った方向微分は、
                    通常の偏微分に一致します：
                    <BlockMath math="D_{\mathbf{e}_1} f = \frac{\partial f}{\partial x}" />
                    つまり、多変数の偏微分は方向微分の特別なケースとみなせます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">勾配ベクトル</h2>

            <p>
                あらゆる方向の微分を統括し、その点が「どの方向に、どれだけ急激に変化しているか」をベクトルで表したものが「勾配（gradient）」です。
            </p>

            <ContentBox type="definition" title="Definition 1.1-3 (勾配：grad)">
                <p>
                    <InlineMath math="C^1" /> 級スカラー場 <InlineMath math="f" /> の<strong>勾配 (gradient)</strong> を、各成分の偏微分を並べたベクトルとして定義する：
                    <BlockMath math="\nabla f = \text{grad}\, f = \left(\frac{\partial f}{\partial x},\, \frac{\partial f}{\partial y},\, \frac{\partial f}{\partial z}\right)" />
                    ここで、記号 <InlineMath math="\nabla" /> （ナブラ）はハミルトン演算子と呼ばれる。
                </p>
            </ContentBox>

            <p>
                この勾配ベクトルを用いると、任意の方向の微分を「内積」の形で簡潔に表現することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.1-1 (方向微分と勾配の関係)">
                <p>
                    滑らかなスカラー場 <InlineMath math="f" /> の方向微分は、勾配ベクトルと方向ベクトルの内積で与えられる：
                    <BlockMath math="D_{\mathbf{u}}f(\mathbf{p}) = \nabla f(\mathbf{p}) \cdot \mathbf{u}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    全微分の連鎖律を用いる。 <InlineMath math="\mathbf{r}(h) = \mathbf{p} + h\mathbf{u}" /> とおくと、
                    <BlockMath math="D_{\mathbf{u}}f(\mathbf{p}) = \left. \frac{d}{dh} f(\mathbf{r}(h)) \right|_{h=0}" />
                    連鎖律より、
                    <BlockMath math="\frac{d}{dh} f(x_1(h), x_2(h), x_3(h)) = \sum_i \frac{\partial f}{\partial x_i} \frac{dx_i}{dh}" />
                    ここで <InlineMath math="\frac{d\mathbf{r}}{dh} = \mathbf{u}" /> であるから、
                    <BlockMath math="D_{\mathbf{u}}f(\mathbf{p}) = (\text{grad} f) \cdot \mathbf{u}" />
                    が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                内積の性質（ <InlineMath math="\mathbf{A} \cdot \mathbf{B} = |\mathbf{A}||\mathbf{B}|\cos\theta" /> ）を考えると、
                方向微分が最大になるのは <InlineMath math="\nabla f" /> と <InlineMath math="\mathbf{u}" /> が同じ向きのときです。
                つまり、<strong>勾配は「最も急に値が増加する方向」を向いており、その大きさは「最大傾斜」を表している</strong>のです。
            </p>

            <ContentBox type="theorem" title="Theorem 1.1-2 (等値面と勾配の直交性)">
                <p>
                    スカラー場が一定の値をとる面（等値面） <InlineMath math="f(\mathbf{p}) = c" /> 上において、
                    勾配ベクトル <InlineMath math="\nabla f(\mathbf{p})" /> はその面と直交する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    等値面上の任意の曲線 <InlineMath math="\mathbf{r}(t)" /> を考える。
                    定義より、曲線上のすべての点で <InlineMath math="f(\mathbf{r}(t)) = c" /> である。
                    両辺を <InlineMath math="t" /> で微分すると、連鎖律より
                    <BlockMath math="\nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = 0" />
                    となる。 <InlineMath math="\mathbf{r}'(t)" /> は曲線の接ベクトル（等値面の接平面内のベクトル）である。
                    勾配ベクトルがいかなる接ベクトルとも内積 0 になることは、勾配ベクトルが接平面に直交していることを意味する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-2 (勾配の計算)">
                <p>
                    2変数関数 <InlineMath math="f(x, y) = x^2 + 4y^2" /> について考える。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>勾配</strong>： <InlineMath math="\nabla f = (2x, 8y)" />。
                    </li>
                    <li>
                        <strong>特定の点での値</strong>：点 <InlineMath math="(1, 1)" /> では <InlineMath math="\nabla f = (2, 8)" />。
                    </li>
                    <li>
                        <strong>幾何学的解釈</strong>：点 <InlineMath math="(1, 1)" /> を通る等値線は楕円 <InlineMath math="x^2 + 4y^2 = 5" /> であり、
                        ベクトル <InlineMath math="(2, 8)" /> はこの楕円の外側（値が増える方）に向かって垂直に突き出している。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="物理的なポテンシャル">
                <p>
                    物理学において、力 <InlineMath math="\mathbf{F}" /> がスカラー場 <InlineMath math="\phi" /> の勾配を用いて
                    <InlineMath math="\mathbf{F} = -\nabla \phi" />
                    と表されるとき、 <InlineMath math="\phi" /> を<strong>ポテンシャル (potential)</strong> と呼びます。
                    重力（位置エネルギー）や静電ポテンシャルがその代表例です。「物体はエネルギーが低くなる方へ移動する」ため、
                    公式にマイナス符号がつくことに注意してください。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>スカラー場</strong>：空間の各点に対応する数値の分布。</li>
                    <li><strong>方向微分</strong>：特定の方向に沿った関数の変化率（傾き）。</li>
                    <li><strong>勾配 (grad)</strong>：変化率が最大となる方向を向き、その大きさが最大傾斜を表すベクトル。</li>
                    <li><strong>直交性</strong>：勾配ベクトルは常に等値面に直交する（「等高線を垂直に横切る」動き）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
