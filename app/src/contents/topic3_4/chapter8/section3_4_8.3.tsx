import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LaplaceEquationSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                熱方程式（放物型）や波動方程式（双曲型）が時間の経過に伴う動的な変化を記述したのに対し、<b>ラプラス方程式</b>（楕円型）はシステムの平衡状態（静的な状態）を記述します。
            </p>
            <p>
                二次元のラプラス方程式を解くことで、境界条件が領域内部にどのように「浸透」し、滑らかな調和関数を構成するのかを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ポアソン核による解の表示</h2>

            <p>
                上半平面 <InlineMath math="\{(x,y) \mid x \in \mathbb{R}, y > 0 \}" /> における <b>ディリクレ問題</b> を考えます。これは境界上の温度分布 <InlineMath math="f(x)" /> が与えられたときの、領域内部の定常的な温度分布を求める問題に相当します。
            </p>

            <ContentBox type="example" title="Example 8.3-1 (上半平面のディリクレ問題の解法)">
                <p>
                    次の境界値問題を解く：
                </p>
                <BlockMath math="\Delta u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 \quad (y > 0), \quad u(x,0) = f(x)" />
                <p>
                    <InlineMath math="x" /> 方向にフーリエ変換を施すと：
                </p>
                <BlockMath math="-\xi^2 \hat{u}(\xi,y) + \frac{\partial^2 \hat{u}(\xi,y)}{\partial y^2} = 0 \implies \hat{u}_{yy} = \xi^2 \hat{u}" />
                <p>
                    <InlineMath math="y \to \infty" /> で解が有界である（減衰する）という物理的な制約を課すと、ODE の解は次のようになる：
                </p>
                <BlockMath math="\hat{u}(\xi,y) = \hat{f}(\xi) e^{-|\xi|y}" />
                <p>
                    畳み込み定理（§3.3）より、この逆変換は初期値 <InlineMath math="f(x)" /> と「指数の絶対値の逆変換」との畳み込みで得られる。
                </p>
            </ContentBox>

            <p>
                この逆変換として現れるのが、調和関数の構成において極めて重要な <b>ポアソン核</b> です。
            </p>

            <ContentBox type="proposition" title="Proposition 8.3-1 (ポアソン核による解の表示)">
                <p>
                    上半平面におけるラプラス方程式の解は、<b>ポアソン核 $P_y(x)$</b> との畳み込みとして与えられる：
                </p>
                <BlockMath math="u(x,y) = (P_y * f)(x) = \frac{1}{\pi} \int_{-\infty}^\infty \frac{y}{(x-t)^2 + y^2} f(t) dt" />
                <p>
                    ここで <InlineMath math="P_y(x) = \frac{1}{\pi} \frac{y}{x^2 + y^2}" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    §3.5 で学んだフーリエ変換の結果 <InlineMath math="\mathcal{F}[e^{-a|x|}] = \frac{2a}{a^2+\xi^2}" /> を利用する。
                </p>
                <p>
                    フーリエ変換の反対称性を考慮すると、<InlineMath math="\mathcal{F}^{-1}[e^{-y|\xi|}] = \frac{1}{2\pi} \int_{-\infty}^\infty e^{-y|\xi|} e^{i\xi x} d\xi" /> を計算すれば良い。これは次のように求まる：
                </p>
                <BlockMath math="\mathcal{F}^{-1}[e^{-y|\xi|}] = \frac{1}{\pi} \frac{y}{x^2+y^2}" />
                <p>
                    これがポアソン核 <InlineMath math="P_y(x)" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ポアソン核の物理的解釈">
                <p>
                    ポアソン核 <InlineMath math="P_y(x-t)" /> は、境界上の点 <InlineMath math="t" /> における値が、観測点 <InlineMath math="(x,y)" /> に与える「重み」を表しています。
                </p>
                <p>
                    境界に近い（<InlineMath math="y \to 0" />）とき、ポアソン核はデルタ関数のように一点に鋭く集中し、境界の値をそのまま反映します。一方、境界から離れる（<InlineMath math="y" /> が大きい）ほど、核は緩やかに広がり、境界上の広い範囲の温度の「平均」が内部に伝わることになります。これが調和関数の滑らかさの源泉です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例と境界収束</h2>

            <p>
                ポアソン積分の具体的な計算例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 8.3-2 (矩形パルス境界値への適用)">
                <p>
                    境界条件が <InlineMath math="f(t) = \mathbf{1}_{[-1,1]}(t)" /> である場合の調和関数を計算する。
                </p>
                <p>
                    ポアソン積分を実行すると：
                </p>
                <BlockMath math="\begin{aligned} u(x,y) &= \frac{1}{\pi} \int_{-1}^1 \frac{y}{(x-t)^2 + y^2} dt \\ &= \frac{1}{\pi} \left[ \arctan\left( \frac{t-x}{y} \right) \right]_{-1}^1 \\ &= \frac{1}{\pi} \left( \arctan\frac{1-x}{y} + \arctan\frac{1+x}{y} \right) \end{aligned}" />
                <p>
                    境界 <InlineMath math="y \to 0" /> で、<InlineMath math="x \in (-1, 1)" /> ならば <InlineMath math="u \to 1" />、<InlineMath math="|x| > 1" /> ならば <InlineMath math="u \to 0" /> に収束し、境界条件が正しく再現されることが確認できる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.3-3 (ポアソン核と複素解析の接続)">
                <p>
                    複素解析（Topic 3-2）において、実関数 <InlineMath math="u(x,y)" /> が調和であれば、それは正則関数 <InlineMath math="F(z) = u + iv" /> の実部として解釈できる。
                </p>
                <p>
                    ポアソン核を用いると、共役調和関数 <InlineMath math="v(x,y)" /> も境界値 <InlineMath math="f(t)" /> から直接構成できる：
                </p>
                <BlockMath math="v(x,y) = \frac{1}{\pi} \int_{-\infty}^\infty \frac{x-t}{(x-t)^2 + y^2} f(t) dt" />
                <p>
                    この積分は、境界 <InlineMath math="y \to 0" /> において <b>ヒルベルト変換</b> と呼ばれる重要な変換に帰着する。フーリエ変換と複素解析（コーシー・リーマン方程式）がポアソン核を介して完全に統合されている。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ラプラス方程式はフーリエ変換によって、空間的な指数減衰問題に帰着する。</li>
                    <li>上半平面における解は、境界条件 <InlineMath math="f(x)" /> とポアソン核 <InlineMath math="P_y(x)" /> の畳み込みで与えられる。</li>
                    <li>ポアソン核は境界の値を重み付き平均することで、領域内部に滑らかな調和関数を構成する。</li>
                    <li>ポアソン積分は複素解析のコーシー・リーマン方程式と密接に関連しており、ヒルベルト変換の基礎となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
