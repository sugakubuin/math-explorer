import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeierstrassDifferentialEquation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で導入したワイエルシュトラスの <InlineMath math="\wp" /> 関数は、その微分 <InlineMath math="\wp'" /> との間に代数的な関係を持っています。
                本節では、<InlineMath math="\wp" /> 関数が満たす最も重要で基本的な非線形微分方程式を導出します。この微分方程式は、楕円曲線の理論への架け橋となる重要な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分方程式の導出</h2>

            <p>
                <InlineMath math="\wp" /> 関数のローラン展開を用いることで、<InlineMath math="\wp" /> と <InlineMath math="\wp'" /> の間に成り立つ微分方程式を鮮やかに証明することができます。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 3.4-1 (<InlineMath math="\wp" /> 関数の微分方程式)</span>}>
                <p>
                    ワイエルシュトラスの <InlineMath math="\wp" /> 関数は、以下の微分方程式を満たす。
                </p>
                <BlockMath math="(\wp'(z))^2 = 4\wp(z)^3 - g_2\wp(z) - g_3" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    関数 <InlineMath math="f(z)" /> を次のように定義する。
                </p>
                <BlockMath math="f(z) = (\wp'(z))^2 - 4\wp(z)^3 + g_2\wp(z) + g_3"
                />
                <p>
                    <InlineMath math="z = 0" /> の近傍における <InlineMath math="\wp(z)" /> のローラン展開は以下の通りである。
                </p>
                <BlockMath math="\wp(z) = \frac{1}{z^2} + \frac{g_2}{20}z^2 + \frac{g_3}{28}z^4 + O(z^6)"
                />
                <p>
                    これを微分すると、
                </p>
                <BlockMath math="\wp'(z) = -\frac{2}{z^3} + \frac{g_2}{10}z + \frac{g_3}{7}z^3 + O(z^5)"
                />
                <p>
                    となる。それぞれの項を計算する。
                </p>
                <BlockMath math="\begin{aligned}
                (\wp'(z))^2 &= \frac{4}{z^6} - \frac{2g_2}{5z^2} - \frac{4g_3}{7} + O(z^2) \\
                4\wp(z)^3 &= \frac{4}{z^6} + \frac{3g_2}{5z^2} + \frac{3g_3}{7} + O(z^2)
                \end{aligned}"
                />
                <p>
                    これらを <InlineMath math="f(z)" /> の定義式に代入すると、特異項（負のべき乗の項）や定数項が見事に打ち消し合い、
                </p>
                <BlockMath math="f(z) = O(z^2)"
                />
                <p>
                    となる。すなわち、<InlineMath math="f(z)" /> は原点 <InlineMath math="z=0" /> で正則であり、<InlineMath math="z \to 0" /> で <InlineMath math="0" /> に収束する。
                </p>
                <p>
                    一方、<InlineMath math="\wp(z)" /> も <InlineMath math="\wp'(z)" /> も格子 <InlineMath math="\Lambda" /> を周期とする楕円関数であるため、それらの多項式である <InlineMath math="f(z)" /> も楕円関数である。極は原点とそれに合同な格子点にしか存在し得ないが、今見たように原点で正則であるため、<InlineMath math="f(z)" /> は極を持たない正則な楕円関数、すなわち整関数である。
                </p>
                <p>
                    リウヴィルの第一定理（Theorem 2.4-1）より、整関数である楕円関数は定数に限られる。したがって <InlineMath math="f(z) = C" />（定数）であるが、<InlineMath math="z \to 0" /> で <InlineMath math="f(z) \to 0" /> であったため、<InlineMath math="C = 0" /> となる。
                    以上より、任意の <InlineMath math="z" /> に対して <InlineMath math="f(z) = 0" />、すなわち <InlineMath math="(\wp'(z))^2 = 4\wp(z)^3 - g_2\wp(z) - g_3" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この美しい相殺を実際の係数で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.4-1">
                <p>
                    ローラン展開の最初の数項だけを用いて、微分方程式の成立を確認する。
                    アイゼンシュタイン級数 <InlineMath math="G_4, G_6" /> を用いると、<InlineMath math="g_2 = 60G_4, g_3 = 140G_6" /> であり、
                </p>
                <BlockMath math="\wp(z) = \frac{1}{z^2} + 3G_4 z^2 + 5G_6 z^4 + \cdots"
                />
                <BlockMath math="\wp'(z) = -\frac{2}{z^3} + 6G_4 z + 20G_6 z^3 + \cdots"
                />
                <p>
                    となる。それぞれの項を計算すると、
                </p>
                <BlockMath math="(\wp'(z))^2 = \frac{4}{z^6} - \frac{24G_4}{z^2} - 80G_6 + \cdots"
                />
                <BlockMath math="\wp(z)^3 = \frac{1}{z^6} + \frac{9G_4}{z^2} + 15G_6 + \cdots"
                />
                <p>
                    これらを <InlineMath math="4\wp^3 - g_2\wp - g_3" /> に代入すると、
                </p>
                <BlockMath math="\begin{aligned}
                &4\left(\frac{1}{z^6} + \frac{9G_4}{z^2} + 15G_6 + \cdots\right) \\
                &\quad - 60G_4\left(\frac{1}{z^2} + 3G_4 z^2 + \cdots\right) - 140G_6 \\
                &= \frac{4}{z^6} + \frac{36G_4 - 60G_4}{z^2} + 60G_6 - 140G_6 + \cdots \\
                &= \frac{4}{z^6} - \frac{24G_4}{z^2} - 80G_6 + \cdots
                \end{aligned}"
                />
                <p>
                    となり、主要項が <InlineMath math="(\wp')^2" /> と完全に一致することが見て取れる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="代数幾何学への扉">
                <p>
                    この微分方程式は、単なる関数の関係式にとどまらず、楕円曲線の理論への出発点となります。<InlineMath math="x = \wp(z)" />, <InlineMath math="y = \wp'(z)" /> とおくと、組 <InlineMath math="(x, y)" /> は代数曲線 <InlineMath math="y^2 = 4x^3 - g_2x - g_3" /> 上の点を与えます。これは複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> と射影平面内の3次曲線を結びつける極めて重要な事実であり、Chapter 5 で詳しく扱われます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">半周期点での値</h2>

            <p>
                微分方程式の右辺は <InlineMath math="\wp" /> に関する3次多項式です。この多項式の根は、格子 <InlineMath math="\Lambda" /> の半周期点における <InlineMath math="\wp" /> の値と密接に関係しています。
            </p>

            <ContentBox type="definition" title={<span>Definition 3.4-1 (<InlineMath math="e_1, e_2, e_3" />)</span>}>
                <p>
                    基本周期 <InlineMath math="\omega_1, \omega_2" /> によって定まる半周期点における <InlineMath math="\wp" /> 関数の値を、次のように定義する。
                </p>
                <BlockMath math="e_1 = \wp\left(\frac{\omega_1}{2}\right), \quad e_2 = \wp\left(\frac{\omega_2}{2}\right), \quad e_3 = \wp\left(\frac{\omega_1+\omega_2}{2}\right)"
                />
            </ContentBox>

            <p>
                これらの値 <InlineMath math="e_1, e_2, e_3" /> について、以下の重要な命題が成り立ちます。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 3.4-1 (<InlineMath math="e_i" /> の相違と因数分解)</span>}>
                <p>
                    <InlineMath math="e_1, e_2, e_3" /> は互いに相異なる複素数であり、微分方程式の右辺は次のように因数分解される。
                </p>
                <BlockMath math="4\wp^3 - g_2\wp - g_3 = 4(\wp - e_1)(\wp - e_2)(\wp - e_3)"
                />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    前節（§3.2）で見たように、<InlineMath math="\wp'(z)" /> は奇関数であり、かつ基本周期平行四辺形内でちょうど3つの零点を半周期点 <InlineMath math="\omega_1/2, \omega_2/2, (\omega_1+\omega_2)/2" /> に持つ。したがって、これらを微分方程式 <InlineMath math="(\wp'(z))^2 = 4\wp(z)^3 - g_2\wp(z) - g_3" /> に代入すると、左辺は <InlineMath math="0" /> となる。
                </p>
                <p>
                    ゆえに、
                </p>
                <BlockMath math="4e_i^3 - g_2 e_i - g_3 = 0 \quad (i=1,2,3)"
                />
                <p>
                    が成り立ち、<InlineMath math="e_1, e_2, e_3" /> は3次方程式 <InlineMath math="4x^3 - g_2 x - g_3 = 0" /> の根であることがわかる。
                </p>
                <p>
                    次に、これらが相異なることを背理法で示す。仮に <InlineMath math="e_1 = e_2" /> とすると、関数 <InlineMath math="h(z) = \wp(z) - e_1" /> は <InlineMath math="z = \omega_1/2" /> で零点を持つ。しかし <InlineMath math="h'(\omega_1/2) = \wp'(\omega_1/2) = 0" /> であるため、<InlineMath math="\omega_1/2" /> は <InlineMath math="h(z)" /> の2位以上の零点である。同様に、<InlineMath math="\wp(\omega_2/2) = e_2 = e_1" /> であるから、<InlineMath math="\omega_2/2" /> も <InlineMath math="h(z)" /> の2位以上の零点となる。
                </p>
                <p>
                    すると、<InlineMath math="h(z)" /> は基本周期平行四辺形内に合計で4位以上の零点を持つことになる。しかし、<InlineMath math="h(z)" /> の極は原点にある2位の極のみであり、その位数は2である。リウヴィルの第三定理（Theorem 2.4-3）によれば、楕円関数の極の位数の和と零点の位数の和は等しくなければならず、これは矛盾である。
                </p>
                <p>
                    したがって <InlineMath math="e_1 \neq e_2" /> であり、同様にして <InlineMath math="e_1, e_2, e_3" /> はすべて相異なることが示される。3次方程式の3つの根が <InlineMath math="e_1, e_2, e_3" /> であるため、多項式は <InlineMath math="4(x - e_1)(x - e_2)(x - e_3)" /> と因数分解できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                根と係数の関係から、<InlineMath math="e_i" /> たちの間には単純な関係式が成り立ちます。
            </p>

            <ContentBox type="example" title="Example 3.4-2">
                <p>
                    3次方程式 <InlineMath math="4x^3 - 0\cdot x^2 - g_2 x - g_3 = 0" /> にヴィエトの公式（根と係数の関係）を適用すると、以下の関係式が得られる。
                </p>
                <BlockMath math="\begin{aligned}
                e_1 + e_2 + e_3 &= 0 \\
                e_1 e_2 + e_2 e_3 + e_3 e_1 &= -\frac{g_2}{4} \\
                e_1 e_2 e_3 &= \frac{g_3}{4}
                \end{aligned}"
                />
                <p>
                    特に第一式の <InlineMath math="e_1 + e_2 + e_3 = 0" /> は、3つの半周期点での <InlineMath math="\wp" /> の値の和が常にゼロになるという美しい性質を表している。
                </p>
            </ContentBox>

            {/* Summary */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\wp" /> 関数は、一階の非線形微分方程式 <InlineMath math="(\wp')^2 = 4\wp^3 - g_2\wp - g_3" /> を満たす。</li>
                    <li>この方程式は、ローラン展開とリウヴィルの定理を用いて証明される。</li>
                    <li>半周期点での値 <InlineMath math="e_i" /> は方程式の右辺の根であり、これらは互いに相異なる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
