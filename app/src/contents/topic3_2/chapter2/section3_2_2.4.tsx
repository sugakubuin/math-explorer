import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CauchyRiemann() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素関数が微分可能であるという「強い条件」を、関数の実部と虚部を用いて記述したものが、有名な<strong>コーシー・リーマンの方程式</strong>です。
                この方程式は、多変数関数としての「実部と虚部の変化のバランス」を規定しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシー・リーマンの方程式</h2>

            <ContentBox type="theorem" title="Theorem 2.4-1 (コーシー・リーマンの方程式：必要条件)">
                <p>
                    複素関数 <InlineMath math="f(z) = u(x, y) + i v(x, y)" /> がある点で複素微分可能であるならば、その点において実部 <InlineMath math="u" /> と虚部 <InlineMath math="v" /> は次の偏微分方程式を満たす：
                    <BlockMath math="\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    複素微分の定義において、<InlineMath math="\Delta z" /> を実軸方向と虚軸方向の2通りで近づけてみる。
                </p>
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <strong>実軸方向 (<InlineMath math="\Delta z = \Delta x" />) からの極限</strong>：
                        <BlockMath math="\begin{aligned} f'(z) &= \lim_{\Delta x \to 0} \frac{u(x+\Delta x, y) + iv(x+\Delta x, y) - (u + iv)}{\Delta x} \\ &= \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} \end{aligned}" />
                    </li>
                    <li>
                        <strong>虚軸方向 (<InlineMath math="\Delta z = i\Delta y" />) からの極限</strong>：
                        <BlockMath math="\begin{aligned} f'(z) &= \lim_{\Delta y \to 0} \frac{u(x, y+\Delta y) + iv(x, y+\Delta y) - (u + iv)}{i\Delta y} \\ &= \frac{1}{i} \left( \frac{\partial u}{\partial y} + i \frac{\partial v}{\partial y} \right) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y} \end{aligned}" />
                    </li>
                </ol>
                <p className="mt-4">
                    微分可能であれば、これら2つの極限は一致しなければならない。実部と虚部をそれぞれ比較することで、
                    <InlineMath math="u_x = v_y" /> および <InlineMath math="v_x = -u_y" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.4-2 (コーシー・リーマンの方程式：十分条件)">
                <p>
                    実部 <InlineMath math="u" /> と虚部 <InlineMath math="v" /> が <InlineMath math="C^1" /> 級（一度偏微分可能で偏導関数が連続）であり、かつコーシー・リーマンの方程式を満たすならば、<InlineMath math="f(z) = u + iv" /> はその点で複素微分可能である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">調和関数との関係</h2>

            <p>
                正則関数はさらに驚くべき性質として、その実部と虚部が独立に<strong>ラプラス方程式</strong>を満足するという性質を持ちます。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (調和関数)">
                <p>
                    実数値関数 <InlineMath math="\phi(x, y)" /> がラプラス方程式
                    <BlockMath math="\Delta \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0" />
                    を満たすとき、<InlineMath math="\phi" /> を<strong>調和関数 (harmonic function)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.4-3 (正則関数の実部・虚部)">
                <p>
                    ある領域上で正則な関数の実部 <InlineMath math="u" /> と虚部 <InlineMath math="v" /> は、その領域においてともに調和関数である。
                </p>
            </ContentBox>

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

            <ContentBox type="example" title="Example 2.4-1 (共役調和関数の決定)">
                <p>
                    <InlineMath math="u(x, y) = x^2 - y^2" /> は調和関数であることを確認し、これを実部とする正則関数の虚部 <InlineMath math="v(x, y)" /> を求めよ。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg my-2">
                    <p>
                        <strong>ステップ1 (調和性の確認)</strong>：
                        <InlineMath math="u_x = 2x, u_{xx} = 2, u_y = -2y, u_{yy} = -2" />。
                        <InlineMath math="u_{xx} + u_{yy} = 2 - 2 = 0" /> となり、調和である。
                    </p>
                    <p className="mt-2">
                        <strong>ステップ2 (C-R 方程式の適用)</strong>：
                        <InlineMath math="v_y = u_x = 2x \implies v = 2xy + g(x)" /> （<InlineMath math="g(x)" /> は <InlineMath math="x" /> の関数）。
                        これを <InlineMath math="x" /> で微分すると、<InlineMath math="v_x = 2y + g'(x)" />。
                        C-R 方程式より <InlineMath math="v_x = -u_y = 2y" /> なので、
                        <InlineMath math="2y + g'(x) = 2y \implies g'(x) = 0" />。
                    </p>
                    <p className="mt-2">
                        したがって、<InlineMath math="g(x) = C" />（実定数）であり、<InlineMath math="v(x, y) = 2xy + C" /> である。
                        このとき <InlineMath math="f(z) = (x^2 - y^2) + i(2xy + C) = z^2 + iC" /> と書ける。
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>コーシー・リーマンの方程式</strong>：複素微分可能であるための核心的な条件。実部・虚部の変化を縛り合う。</li>
                    <li><strong>調和関数</strong>：正則関数の実部・虚部が満たす方程式。物理学（静電位や定常流）との密接な関係。</li>
                    <li><strong>剛性</strong>：実部が決まれば（定数の差を除いて）虚部も一意に決まってしまうという、正則関数の持つ極めて強い構造。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
