import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function CompositeInverseDerivatives() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までの法則を使えば基本的な関数の和・積・商の微分ができます。
                しかし、<InlineMath math="\sin(x^2)" /> や <InlineMath math="e^{3x}" /> のような<strong>合成関数</strong>や、平方根などの
                逆関数の微分にはさらに強力なルールが必要です。本節では連鎖律（チェインルール）などの発展的な微分計算テクニックを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 合成関数の微分（連鎖律）
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">合成関数の微分（連鎖律）</h2>

            <p>
                関数 <InlineMath math="y = f(g(x))" /> は、<InlineMath math="u = g(x)" /> と置くと <InlineMath math="y = f(u)" /> と書けます。
                このとき、<InlineMath math="x" /> に対する <InlineMath math="y" /> の変化率（微小変化）は、
                「<InlineMath math="x" /> に対する <InlineMath math="u" /> の変化率」と「<InlineMath math="u" /> に対する <InlineMath math="y" /> の変化率」の掛け算で表現できます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 （連鎖律：Chain Rule）">
                <p>
                    関数 <InlineMath math="u = g(x)" /> が <InlineMath math="x" /> で微分可能であり、関数 <InlineMath math="y = f(u)" /> が <InlineMath math="u" /> で微分可能であるとき、
                    合成関数 <InlineMath math="y = f(g(x))" /> は <InlineMath math="x" /> で微分可能であり、導関数は次のようになる：
                </p>
                <BlockMath math="\{f(g(x))\}' = f'(g(x)) \cdot g'(x)" />
                <p className="mt-3">
                    ライプニッツの記法（<InlineMath math="\frac{dy}{dx}" />）を用いると、まるで分数の約分のように覚えやすく表現できる：
                </p>
                <BlockMath math="\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof （連鎖律の概略）">
                <p>
                    <InlineMath math="x" /> の増分 <InlineMath math="\Delta x" /> に対する <InlineMath math="u" /> の増分を <InlineMath math="\Delta u = g(x+\Delta x) - g(x)" />、
                    <InlineMath math="y" /> の増分を <InlineMath math="\Delta y = f(u+\Delta u) - f(u)" /> とします。
                </p>
                <p>
                    <InlineMath math="\Delta u \neq 0" /> の場合、微分の定義式は次のように変形できます：
                </p>
                <BlockMath math="\frac{\Delta y}{\Delta x} = \frac{\Delta y}{\Delta u} \cdot \frac{\Delta u}{\Delta x}" />
                <p>
                    ここで <InlineMath math="\Delta x \to 0" /> とすると、<InlineMath math="g(x)" /> の連続性から <InlineMath math="\Delta u \to 0" /> となります。
                    したがって各項の極限をとると、
                </p>
                <BlockMath math="\begin{aligned} \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} &= \left( \lim_{\Delta u \to 0} \frac{\Delta y}{\Delta u} \right) \cdot \left( \lim_{\Delta x \to 0} \frac{\Delta u}{\Delta x} \right) \\ &= f'(u) \cdot g'(x) = \frac{dy}{du} \cdot \frac{du}{dx} \end{aligned}" />
                <p className="mt-2 text-sm text-slate-500">
                    ※ 厳密には <InlineMath math="\Delta u = 0" /> となるケースを避けるための補助関数を導入する必要がありますが、直感的なアイディアはこの分数のような約分にあります。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1 （連鎖律の適用）">
                <p>
                    <InlineMath math="y = (3x^2 + 1)^5" /> の導関数を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="u = 3x^2 + 1" /> とおくと、<InlineMath math="y = u^5" />。<br />
                    <InlineMath math="\frac{dy}{du} = 5u^4" />、かつ <InlineMath math="\frac{du}{dx} = 6x" />。連鎖律より、
                </p>
                <BlockMath math="\begin{aligned} \frac{dy}{dx} &= \frac{dy}{du} \cdot \frac{du}{dx} \\ &= 5u^4 \cdot (6x) \\ &= 5(3x^2 + 1)^4 \cdot 6x \\ &= 30x(3x^2 + 1)^4 \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 逆関数の微分
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">逆関数の微分</h2>

            <p>
                関数 <InlineMath math="y = f(x)" /> が単調増加（または減少）の場合、<strong>逆関数</strong> <InlineMath math="x = f^{-1}(y)" /> を持ちます。
                逆関数のグラフは元のグラフを直線 <InlineMath math="y=x" /> で折り返したものなので、その接線の傾きも逆数になります。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-2 （逆関数の微分法則）">
                <p>
                    関数 <InlineMath math="y = f(x)" /> の逆関数 <InlineMath math="x = f^{-1}(y)" /> について、<InlineMath math="f'(x) \neq 0" /> のとき、次が成り立つ：
                </p>
                <BlockMath math="\frac{dx}{dy} = \frac{1}{\frac{dy}{dx}}" />
                <p className="mt-2 text-sm text-center">
                    （つまり、<InlineMath math="(f^{-1})'(y) = \dfrac{1}{f'(x)}" />）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （逆関数の微分法則）">
                <p>
                    <InlineMath math="y = f(x)" /> に対して <InlineMath math="x = f^{-1}(y)" /> の関係があります。
                    両辺を <InlineMath math="y" /> で微分すると、左辺は <InlineMath math="\frac{dx}{dy}" /> になります。
                    右辺について、<InlineMath math="f(f^{-1}(y)) = y" /> という恒等式を考えます。<br />
                    この両辺を <InlineMath math="y" /> で連鎖律を用いて微分すると：
                </p>
                <BlockMath math="\frac{d}{dy}\Big[f(f^{-1}(y))\Big] = f'\big(f^{-1}(y)\big) \cdot \big(f^{-1}\big)'(y) = 1" />
                <p>
                    <InlineMath math="f^{-1}(y) = x" /> ですから、これを書き換えると
                </p>
                <BlockMath math="f'(x) \cdot \frac{dx}{dy} = 1 \implies \frac{dx}{dy} = \frac{1}{f'(x)} = \frac{1}{\frac{dy}{dx}}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-2 （自然対数関数の微分の別証明）">
                <p>
                    <InlineMath math="y = \log x" /> （<InlineMath math="x > 0" />）の導関数を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="y = \log x \iff x = e^y" />。<br />
                    この逆関数 <InlineMath math="x = e^y" /> を <InlineMath math="y" /> で微分すると、<InlineMath math="\frac{dx}{dy} = e^y" />。<br />
                    逆関数の微分法則を用いると、
                </p>
                <BlockMath math="\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}} = \frac{1}{e^y} = \frac{1}{x}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 対数微分法
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">対数微分法</h2>

            <p>
                両辺の自然対数（絶対値）をとってから連鎖律を用いて微分する手法を<strong>対数微分法</strong>と呼びます。
                関数がたくさん掛け算されている場合や、<InlineMath math="x^x" /> のような指数にも底にも変数が含まれる関数の微分に有効です。
            </p>

            <ContentBox type="proposition" title="Proposition 2.3-1 （対数微分法）">
                <p>
                    関数 <InlineMath math="y = f(x)" /> に対して：
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>両辺の絶対値の自然対数をとる：<InlineMath math="\log|y| = \log|f(x)|" /></li>
                    <li>両辺を <InlineMath math="x" /> で微分する。左辺は連鎖律により <InlineMath math="(\log|y|)' = \frac{1}{y} \cdot y' = \frac{y'}{y}" /></li>
                    <li><InlineMath math="y'" /> について解く：<InlineMath math="y' = y \cdot (\log|f(x)|)'" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof （対数微分法）">
                <p>
                    合成関数の微分（連鎖律）の直接的な応用です。
                    <InlineMath math="u = y(x)" /> とおくと、左辺の微分の部分は <InlineMath math="\frac{d}{dx}(\log|y|)" /> です。
                </p>
                <BlockMath math="\frac{d}{dx}(\log|y|) = \frac{d}{dy}(\log|y|) \cdot \frac{dy}{dx} = \frac{1}{y} \cdot y'" />
                <p>
                    右辺の微分を <InlineMath math="\frac{d}{dx}(\log|f(x)|)" /> と書けば、<br />
                    <InlineMath math="\frac{y'}{y} = \frac{d}{dx}(\log|f(x)|)" /> となり、両辺に <InlineMath math="y" /> をかければ公式が得られます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-3">
                <p>
                    <InlineMath math="y = x^x \quad (x > 0)" /> の導関数を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    両辺の自然対数をとる（<InlineMath math="y > 0" /> なので絶対値は不要）：
                </p>
                <BlockMath math="\log y = \log(x^x) \iff \log y = x \log x" />
                <p>
                    両辺を <InlineMath math="x" /> で微分する。左辺は連鎖律、右辺は積の微分法則を用いる：
                </p>
                <BlockMath math="\begin{aligned} \frac{y'}{y} &= (x)'\log x + x(\log x)' \\ &= 1\cdot\log x + x \cdot \frac{1}{x} \\ &= \log x + 1 \end{aligned}" />
                <p>
                    両辺に <InlineMath math="y" /> （<InlineMath math="= x^x" />）を掛ける：
                </p>
                <BlockMath math="y' = x^x(\log x + 1)" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 陰関数微分法
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">陰関数微分法</h2>

            <p>
                円の方程式 <InlineMath math="x^2 + y^2 = 1" /> のように、<InlineMath math="y = f(x)" /> の形（陽関数）に綺麗に解けないままでも、
                方程式の両辺をそのまま <InlineMath math="x" /> で微分（<InlineMath math="y" /> は <InlineMath math="x" /> の関数として連鎖律を適用）することで <InlineMath math="y'" /> を求めることができます。
            </p>

            <ContentBox type="remark" title="Remark （陰関数とは？）">
                <p>
                    <InlineMath math="y = x^2 + 3x" /> のように、<InlineMath math="y" /> が <InlineMath math="x" /> の式で直接表されている形を<strong>陽関数 (Explicit function)</strong> と呼びます。<br />
                    これに対し、<InlineMath math="x^2 + y^2 - 1 = 0" /> のように、ある関係式 <InlineMath math="F(x, y) = 0" /> の中に <InlineMath math="y" /> が「陰に」潜んでいて、
                    部分的に <InlineMath math="y" /> を <InlineMath math="x" /> の関数 <InlineMath math="y = f(x)" /> と見なせる状態のことを<strong>陰関数 (Implicit function)</strong> と呼びます。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 2.3-2 （陰関数定理の初等版）">
                <p>
                    方程式 <InlineMath math="F(x, y) = 0" /> で陰に定義される関数 <InlineMath math="y(x)" /> の導関数 <InlineMath math="y'" /> は、
                    両辺を <InlineMath math="x" /> で微分し（その際 <InlineMath math="y" /> の微分の項には必ず連鎖律により <InlineMath math="y'" /> をかける）、<InlineMath math="y'" /> について解くことで得られる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （陰関数微分法）">
                <p>
                    両辺を <InlineMath math="x" /> で微分する際に関数 <InlineMath math="y" /> を <InlineMath math="x" /> の関数とみなして連鎖律を適用するだけです。<br />
                    たとえば項が <InlineMath math="g(y)" /> の場合、<InlineMath math="x" /> で微分すると
                </p>
                <BlockMath math="\frac{d}{dx}\big[g(y)\big] = \frac{d}{dy}\big[g(y)\big] \cdot \frac{dy}{dx} = g'(y) \cdot y'" />
                <p>
                    となり、必ず <InlineMath math="y'" /> がくっつきます。あとはできた方程式を移項して <InlineMath math="y'" /> について解くだけの代数操作です。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-4">
                <p>
                    <InlineMath math="x^2 + y^2 = 25" /> 上の点 <InlineMath math="(3, 4)" /> における接線の傾き（<InlineMath math="y'" />）を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    両辺を <InlineMath math="x" /> で微分する：
                </p>
                <BlockMath math="\frac{d}{dx}(x^2) + \frac{d}{dx}(y^2) = \frac{d}{dx}(25)" />
                <p>
                    連鎖律より <InlineMath math="\frac{d}{dx}(y^2) = \frac{d}{dy}(y^2) \cdot \frac{dy}{dx} = 2y \cdot y'" /> なので：
                </p>
                <BlockMath math="2x + 2y y' = 0" />
                <p>
                    <InlineMath math="y \neq 0" /> ならば、解いて <InlineMath math="y' = -\frac{x}{y}" />。<br />
                    点 <InlineMath math="(3, 4)" /> においては、<InlineMath math="y' = -\frac{3}{4}" /> となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>連鎖律：</strong> 合成関数の微分は「外の微分×中の微分」。<InlineMath math="\frac{dy}{dx} = \frac{dy}{du}\frac{du}{dx}" /></li>
                    <li><strong>逆関数の微分：</strong> <InlineMath math="\frac{dx}{dy} = 1 \Big/ \left(\frac{dy}{dx}\right)" /></li>
                    <li><strong>対数微分法：</strong> 累積積や <InlineMath math="f(x)^{g(x)}" /> 型の関数には、対数をとってから微分する。</li>
                    <li><strong>陰関数の微分：</strong> <InlineMath math="y" /> を <InlineMath math="x" /> の関数と見なして方程式のまま両辺を <InlineMath math="x" /> で微分する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
