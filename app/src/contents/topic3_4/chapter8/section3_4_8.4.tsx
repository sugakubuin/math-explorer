import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LaplacePDESection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                空間方向にフーリエ変換を施す手法は無限領域や周期境界条件に適していますが、時間変化や初期条件をより直接的に扱いたい場合、あるいは非対称な境界条件を持つ場合には <b>ラプラス変換</b> が非常に有効です。
            </p>
            <p>
                本セクションでは、時間領域に対してラプラス変換を適用することで、偏微分方程式を空間方向の常微分方程式 (ODE) へと変換し、境界条件を代数的に処理する手法を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有界区間の熱方程式</h2>

            <p>
                長さ 1 の棒の熱伝導（ディリクレ境界条件）を考えます。
            </p>

            <ContentBox type="example" title="Example 8.4-1 (有界区間の熱方程式のラプラス変換による解法)">
                <p>
                    次の問題を解く：
                </p>
                <BlockMath math="\frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial x^2} \quad (0 < x < 1), \\ u(0,t) = u(1,t) = 0, \quad u(x,0) = f(x)" />
                <p>
                    時間 <InlineMath math="t" /> についてラプラス変換を施すと、微分法則（§6.2）より：
                </p>
                <BlockMath math="s U(x,s) - f(x) = \frac{\partial^2 U(x,s)}{\partial x^2}" />
                <p>
                    これは <InlineMath math="x" /> に関する非斉次 2 階線形常微分方程式である。境界条件 <InlineMath math="U(0,s) = U(1,s) = 0" /> の下でこれを解くと、グリーン関数を用いた <InlineMath math="U(x,s)" /> の表示が得られる。
                </p>
                <p>
                    この逆ラプラス変換を計算すると、Chapter 1, 2 で学んだ <b>フーリエ級数展開（固有関数展開）</b> による解と完全に一致することが示される：
                </p>
                <BlockMath math="u(x,t) = \sum_{n=1}^\infty b_n e^{-n^2 \pi^2 t} \sin(n\pi x)" />
            </ContentBox>

            <ContentBox type="example" title="Example 8.4-2 (具体的な初期値：放物線分布)">
                <p>
                    初期値が <InlineMath math="f(x) = x(1-x)" /> である場合を考える。
                </p>
                <p>
                    フーリエ正弦展開（§2.2）の係数計算により、奇数番目の項のみが残り、係数は <InlineMath math="b_n = \frac{8}{n^3 \pi^3}" /> となる。解は次のようになる：
                </p>
                <BlockMath math="u(x,t) = \sum_{n=1,3,5,\dots}^\infty \frac{8}{n^3 \pi^3} e^{-n^2 \pi^2 t} \sin(n\pi x)" />
                <p>
                    指数項により、高次のモードほど急激に減衰し、時間はかかるが最も低い周波数成分（<InlineMath math="n=1" />）が支配的になっていく様子がわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">半無限棒の熱方程式と対流境界</h2>

            <p>
                空間的に一方にだけ伸びた半無限棒 (<InlineMath math="x > 0" />) の問題を考えます。
            </p>

            <ContentBox type="example" title="Example 8.4-3 (半無限棒の熱伝導問題)">
                <p>
                    次の問題を解く（初期値ゼロ、左端の温度を強制的に変化させる）：
                </p>
                <BlockMath math="\frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial x^2} \quad (x > 0), \quad u(0,t) = h(t), \quad u(x,0) = 0" />
                <p>
                    ラプラス変換を施すと、斉次 ODE <InlineMath math="sU = U_{xx}" /> が得られる。減衰解としてこれを解くと：
                </p>
                <BlockMath math="U(x,s) = H(s) e^{-x \sqrt{s}}" />
                <p>
                    ここで <InlineMath math="H(s)" /> は境界条件 <InlineMath math="h(t)" /> のラプラス変換である。この逆変換は、ラプラス領域での畳み込み定理と、既知の基本ペアを利用して計算される。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 8.4-1 (相補誤差関数による解)">
                <p>
                    境界の温度をステップ状に変化（<InlineMath math="h(t) = 1" />）させた場合、解は <b>相補誤差関数 (Complementary Error Function)</b> を用いて次のように表される：
                </p>
                <BlockMath math="u(x,t) = \text{erfc}\left( \frac{x}{2\sqrt{t}} \right) = \frac{2}{\sqrt{\pi}} \int_{\frac{x}{2\sqrt{t}}}^\infty e^{-\xi^2} d\xi" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ラプラス変換の基本表（あるいは複素積分）より、<InlineMath math="\mathcal{L}^{-1}\left[ \frac{1}{s} e^{-a\sqrt{s}} \right] = \text{erfc}\left( \frac{a}{2\sqrt{t}} \right)" /> という公式を利用する。
                </p>
                <p>
                    本問では <InlineMath math="H(s) = 1/s" />、<InlineMath math="a = x" /> であるため、直接この公式が適用される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 8.4-4 (熱の侵搬深さ)">
                <p>
                    解 <InlineMath math="u(x,t) = \text{erfc}\left( \frac{x}{2\sqrt{t}} \right)" /> から物理的な挙動を読み取る。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>境界 (<InlineMath math="x=0" />)</b>：<InlineMath math="\text{erfc}(0) = 1" /> となり、境界条件を常に満たしている。
                    </li>
                    <li>
                        <b>内部への浸透</b>：変数 <InlineMath math="\eta = x/(2\sqrt{t})" /> が一定であるとき、温度も一定である。これは、熱の影響が深さ <InlineMath math="x \sim \sqrt{t}" /> の割合で内部へと浸透していくことを示している（熱拡散の基本的性質）。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="フーリエ変換とラプラス変換の使い分け">
                <p>
                    PDE の解法において、フーリエ変換とラプラス変換は補完し合う関係にあります。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><b>空間フーリエ変換</b>：領域が無限（<InlineMath math="\mathbb{R}" />）または周期的な場合に適しており、定常解や波動のスペクトル解析に強い。</li>
                    <li><b>時間ラプラス変換</b>：時間的な「因果性」や初期値、有限領域の境界条件を扱うのに適しており、過渡応答の解析に強い。</li>
                </ul>
                <p>
                    これらを自在に使い分けることで、あらゆる物理系のシミュレーションや解析が可能になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ラプラス変換は、時間に関する偏微分を代数化し、PDE を空間方向の ODE へと変換する。</li>
                    <li>有界区間では、ラプラス変換による解とフーリエ級数による固有関数展開が数学的に等価であることを確認できる。</li>
                    <li>半無限領域やステップ状の境界条件に対しては、相補誤差関数 (<InlineMath math="\text{erfc}" />) などの特殊関数を用いた解が得られる。</li>
                    <li>フーリエ解析とラプラス解析は、PDE という最強の物理記述言語を解き明かすための、相補的な二つの翼である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
