import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CauchyRiemann() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素関数が微分可能であるという「強い条件」を、関数の実部と虚部という2つの実数値関数を用いて記述したものが、有名な<b>コーシー・リーマンの方程式 (Cauchy-Riemann equations)</b> です。
                1変数の実関数では、微分可能性は単なる「接線の存在」を意味するに過ぎませんでしたが、複素関数における微分可能性は、実部と虚部の変化の仕方が互いにガッチリと縛り合っていることを要求します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <p>
                まずは、複素微分可能であれば必ず満たされる「必要条件」としての側面を見てみましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (コーシー・リーマンの方程式：必要条件)">
                <p>
                    複素関数 <InlineMath math="f(z) = u(x, y) + i v(x, y)" /> がある点 <InlineMath math="z = x + iy" /> で複素微分可能であるならば、その点において実部 <InlineMath math="u" /> と虚部 <InlineMath math="v" /> は偏微分可能であり、次の偏微分方程式を満たす：
                    <BlockMath math="\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}" />
                </p>
            </ContentBox>

            <p>
                この定理の証明は、複素微分の定義における近づき方の自由度を利用することで、驚くほどシンプルに導かれます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    複素微分の定義において、<InlineMath math="\Delta z" /> を実軸方向と虚軸方向の2通りで <InlineMath math="0" /> に近づけてみる。
                </p>
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <b>実軸方向 (<InlineMath math="\Delta z = \Delta x" />) からの極限</b>：
                        <BlockMath math="\begin{aligned} f'(z) &= \lim_{\Delta x \to 0} \frac{\{u(x+\Delta x, y) + iv(x+\Delta x, y)\} - \{u(x, y) + iv(x, y)\}}{\Delta x} \\ &= \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} \end{aligned}" />
                    </li>
                    <li>
                        <b>虚軸方向 (<InlineMath math="\Delta z = i\Delta y" />) からの極限</b>：
                        <BlockMath math="\begin{aligned} f'(z) &= \lim_{\Delta y \to 0} \frac{\{u(x, y+\Delta y) + iv(x, y+\Delta y)\} - \{u(x, y) + iv(x, y)\}}{i\Delta y} \\ &= \frac{1}{i} \left( \frac{\partial u}{\partial y} + i \frac{\partial v}{\partial y} \right) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y} \end{aligned}" />
                    </li>
                </ol>
                <p className="mt-4">
                    複素微分可能であれば、極限の値は近づき方に依らず一意に定まらなければならない。したがって、上記2つの結果の実部と虚部をそれぞれ比較することで、
                    <BlockMath math="\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}" />
                    を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                逆に、コーシー・リーマンの方程式を満たしていれば、それだけで複素微分可能と言えるのでしょうか。結論から言うと、偏導関数の連続性という「滑らかさ」の条件を加えれば、十分条件となります。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-2 (コーシー・リーマンの方程式：十分条件)">
                <p>
                    関数 <InlineMath math="f(z) = u + iv" /> の実部 <InlineMath math="u" /> と虚部 <InlineMath math="v" /> がある点の近傍で <InlineMath math="C^1" /> 級（一度偏微分可能でその偏導関数が連続）であり、かつその点においてコーシー・リーマンの方程式を満たすならば、<InlineMath math="f(z)" /> はその点で複素微分可能である。
                </p>
            </ContentBox>

            <p>
                この証明には、多変数関数の「全微分可能性」という概念が重要な役割を果たします。偏導関数が連続であれば、関数は全微分可能であることを思い出しましょう。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="u, v" /> は <InlineMath math="C^1" /> 級であるから、全微分可能である。すなわち、<InlineMath math="\Delta z = \Delta x + i\Delta y" /> とすると、
                    <BlockMath math="\begin{aligned} \Delta u &= \frac{\partial u}{\partial x}\Delta x + \frac{\partial u}{\partial y}\Delta y + \epsilon_1 |\Delta z| \\ \Delta v &= \frac{\partial v}{\partial x}\Delta x + \frac{\partial v}{\partial y}\Delta y + \epsilon_2 |\Delta z| \end{aligned}" />
                    ここで <InlineMath math="\Delta z \to 0" /> のとき <InlineMath math="\epsilon_1, \epsilon_2 \to 0" /> である。これらを用いて <InlineMath math="\Delta f = \Delta u + i\Delta v" /> を計算し、コーシー・リーマンの方程式を用いると、
                    <BlockMath math="\begin{aligned} \Delta f &= \left( \frac{\partial u}{\partial x}\Delta x + \frac{\partial u}{\partial y}\Delta y \right) + i \left( \frac{\partial v}{\partial x}\Delta x + \frac{\partial v}{\partial y}\Delta y \right) + (\epsilon_1 + i\epsilon_2) |\Delta z| \\ &= \frac{\partial u}{\partial x}(\Delta x + i\Delta y) + i \frac{\partial v}{\partial x}(\Delta x + i\Delta y) + \epsilon |\Delta z| \\ &= \left( \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} \right) \Delta z + \epsilon |\Delta z| \end{aligned}" />
                    を得る。したがって、
                    <BlockMath math="\lim_{\Delta z \to 0} \frac{\Delta f}{\Delta z} = \lim_{\Delta z \to 0} \left( \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} + \epsilon \frac{|\Delta z|}{\Delta z} \right) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}" />
                    となり、極限が存在して複素微分可能であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ここで注意すべきは、単にコーシー・リーマンの方程式を満たすだけでは不十分で、「偏導関数の連続性」が必要であるという点です。
            </p>

            <ContentBox type="remark" title="C1級条件の重要性">
                <p>
                    実関数において「偏微分可能だが（全）微分可能ではない」関数が存在するように、実部・虚部がコーシー・リーマンの方程式を満たしていても、それらが「ガタガタ」な関数であれば、複素微分可能にはなりません。
                </p>
                <p>
                    しかし、物理学や工学で現れるほとんどの関数は十分に滑らか（<InlineMath math="C^1" /> 級以上）であるため、実用的にはコーシー・リーマンの方程式をチェックするだけで微分可能性を判定できることが多いです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">調和関数との関係</h2>

            <p>
                正則関数はさらに驚くべき性質として、その実部と虚部が独立にある有名な偏微分方程式を満足するという性質を持ちます。これは複素関数論と物理学を深く結びつける架け橋となります。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (調和関数)">
                <p>
                    実数値関数 <InlineMath math="\phi(x, y)" /> がラプラス方程式
                    <BlockMath math="\Delta \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0" />
                    を満たすとき、<InlineMath math="\phi" /> を<b>調和関数 (harmonic function)</b> と呼ぶ。
                </p>
            </ContentBox>

            <p>
                例えば、最も単純な2次式の中から調和関数を探してみましょう。
            </p>

            <ContentBox type="example" title="Example 2.4-1 (調和関数の例)">
                <p>
                    関数 <InlineMath math="u(x, y) = x^2 - y^2" /> を考える。
                    <BlockMath math="\frac{\partial^2 u}{\partial x^2} = 2, \quad \frac{\partial^2 u}{\partial y^2} = -2" />
                    であるから、<InlineMath math="\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 - 2 = 0" /> となり、これは調和関数である。
                </p>
            </ContentBox>

            <p>
                正則関数の実部と虚部には、常にこのような性質が備わっています。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-3 (正則関数の実部・虚部)">
                <p>
                    ある領域上で正則な関数の実部 <InlineMath math="u" /> と虚部 <InlineMath math="v" /> は、その領域においてともに調和関数である。
                </p>
            </ContentBox>

            <p>
                この事実は、コーシー・リーマンの方程式をもう一度微分してみることで簡単に確かめられます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    コーシー・リーマンの方程式 <InlineMath math="u_x = v_y, u_y = -v_x" /> をそれぞれの変数で微分する。
                    （正則関数は無限回微分可能であることが後に示されるため、ここでは <InlineMath math="C^2" /> 級を仮定する）
                </p>
                <BlockMath math="u_{xx} = v_{yx}, \quad u_{yy} = -v_{xy}" />
                <p>
                    これらを足し合わせると、<InlineMath math="u_{xx} + u_{yy} = v_{yx} - v_{xy} = 0" /> となる（2変数の連続関数の偏微分の順序交換可能性を利用）。虚部 <InlineMath math="v" /> についても同様である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">共役調和関数</h2>

            <p>
                実部と虚部がともに調和関数であるだけでなく、一方が決まれば（定数の差を除いて）相方も自動的に決まってしまうという点も重要です。この相方のことを「共役な」調和関数と呼びます。
            </p>

            <ContentBox type="example" title="Example 2.4-2 (共役調和関数の決定)">
                <p>
                    先ほどの調和関数 <InlineMath math="u(x, y) = x^2 - y^2" /> を実部とする正則関数の虚部 <InlineMath math="v(x, y)" /> を求めよ。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg my-2">
                    <p>
                        <b>ステップ1 (C-R 方程式の適用)</b>：
                        <InlineMath math="v_y = u_x = 2x" /> であるから、<InlineMath math="y" /> で積分して <InlineMath math="v = 2xy + g(x)" /> （<InlineMath math="g(x)" /> は <InlineMath math="x" /> のみの関数）を得る。
                    </p>
                    <p className="mt-2">
                        <b>ステップ2 (もう一つの C-R 方程式)</b>：
                        これを <InlineMath math="x" /> で微分すると、<InlineMath math="v_x = 2y + g'(x)" />。
                        一方で <InlineMath math="v_x = -u_y = 2y" /> なので、
                        <InlineMath math="2y + g'(x) = 2y \implies g'(x) = 0" />。
                    </p>
                    <p className="mt-2">
                        したがって、<InlineMath math="g(x) = C" />（実定数）であり、<InlineMath math="v(x, y) = 2xy + C" /> である。
                        このとき <InlineMath math="f(z) = (x^2 - y^2) + i(2xy + C) = z^2 + iC" /> と書ける。
                    </p>
                </div>
            </ContentBox>

            <p>
                このように、複素関数の世界では実部と虚部が密接にリンクしており、全体として一つの「剛性 (rigidity)」を持った構造を形作っています。
            </p>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>コーシー・リーマンの方程式</b>：複素微分可能であるための必要十分条件（<InlineMath math="C^1" /> 級を前提とする場合）。</li>
                    <li><b>全微分可能性との関係</b>：複素微分可能であるためには、実部・虚部が単に偏微分可能であるだけでなく、全微分可能であることが本質的である。</li>
                    <li><b>調和関数</b>：正則関数の実部・虚部が満たす方程式。物理学（電位や流れ）との深い繋がりを持つ。</li>
                    <li><b>剛性</b>：実部が決まれば虚部も一意に（定数差を除き）決まるという、正則関数特有の強力な制約。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
