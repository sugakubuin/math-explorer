import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DerivativeDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章から<strong>微分</strong>について学びます。前章で学んだ極限の概念を用いて、
                関数の変化の割合（瞬間変化率）を厳密に定義します。これが「導関数」の概念です。
                導関数は、関数のグラフの接線の傾きや、物体の瞬間の速度を数学的に捉えるための強力な道具となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 差分商と瞬間変化率
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">差分商と瞬間変化率</h2>

            <p>
                関数 <InlineMath math="f(x)" /> について、独立変数 <InlineMath math="x" /> が <InlineMath math="a" /> から <InlineMath math="a+h" /> まで変化するときの
                平均的な変化の割合を考えます。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 （差分商）">
                <p>
                    関数 <InlineMath math="f(x)" /> において、<InlineMath math="x" /> の増分 <InlineMath math="h" />（または <InlineMath math="\Delta x" />）に対する <InlineMath math="f(x)" /> の増分 <InlineMath math="f(x+h) - f(x)" /> の比：
                </p>
                <BlockMath math="\frac{f(x+h) - f(x)}{h} \quad \text{（または} \ \frac{\Delta y}{\Delta x} = \frac{f(x+\Delta x) - f(x)}{\Delta x} \text{）}" />
                <p>
                    を、区間 <InlineMath math="[x, x+h]" /> における <InlineMath math="f(x)" /> の<strong>差分商（平均変化率）</strong>という。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark （幾何学的な意味）">
                <p>
                    差分商は、関数 <InlineMath math="y=f(x)" /> のグラフ上の2点 <InlineMath math="(x, f(x))" /> と <InlineMath math="(x+h, f(x+h))" /> を結ぶ
                    <strong>割線（かっせん）の傾き</strong>を表しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 導関数の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">導関数の定義</h2>

            <p>
                差分商において、増分 <InlineMath math="h" /> を限りなく <InlineMath math="0" /> に近づけたときの極限が<strong>瞬間変化率</strong>、
                すなわち導関数です。
            </p>

            <ContentBox type="definition" title="Definition 2.1-2 （導関数）">
                <p>
                    差分商において <InlineMath math="h \to 0" /> としたときの極限が存在するとき、関数 <InlineMath math="f" /> は <InlineMath math="x" /> において<strong>微分可能</strong>であるといい、
                    その極限値を <InlineMath math="f" /> の<strong>導関数</strong>と呼びます：
                </p>
                <BlockMath math="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />
                <p>
                    導関数は <InlineMath math="f'(x)" /> のほかに、<InlineMath math="y'" />、<InlineMath math="\frac{dy}{dx}" />、<InlineMath math="\frac{d}{dx}f(x)" /> などの記号でも表されます。
                </p>
                <p className="mt-2 text-sm">
                    ※ 特定の点 <InlineMath math="x = a" /> における極限値 <InlineMath math="f'(a)" /> は<strong>微分係数</strong>と呼ばれ、<InlineMath math="x=a" /> における接線の傾きを表します。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-1 （導関数の計算）">
                <p>
                    定義に従って、<InlineMath math="f(x) = x^2" /> の導関数を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <BlockMath math="\begin{aligned} f'(x) &= \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} \\ &= \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} \\ &= \lim_{h \to 0} \frac{x^2 + 2hx + h^2 - x^2}{h} \\ &= \lim_{h \to 0} \frac{2hx + h^2}{h} \\ &= \lim_{h \to 0} (2x + h) = 2x \end{aligned}" />
                <p>よって、<InlineMath math="(x^2)' = 2x" />。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 微分可能性と連続性
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">微分可能性と連続性</h2>

            <p>
                微分可能である（滑らかに変化する）ことは、連続である（グラフが繋がっている）ことよりも強い条件です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.1-1 （微分可能性は連続性を含意する）">
                <p>
                    関数 <InlineMath math="f(x)" /> が <InlineMath math="x = a" /> で微分可能ならば、<InlineMath math="f(x)" /> は <InlineMath math="x = a" /> で連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    前提として、<InlineMath math="\displaystyle\lim_{x \to a} \frac{f(x) - f(a)}{x - a} = f'(a)" /> が存在します。
                    <InlineMath math="\displaystyle\lim_{x \to a} f(x) = f(a)" />、すなわち <InlineMath math="\displaystyle\lim_{x \to a} (f(x) - f(a)) = 0" /> を示します。
                </p>
                <BlockMath math="\begin{aligned} \lim_{x \to a} (f(x) - f(a)) &= \lim_{x \to a} \left( \frac{f(x) - f(a)}{x - a} \cdot (x - a) \right) \\ &= \left( \lim_{x \to a} \frac{f(x) - f(a)}{x - a} \right) \cdot \lim_{x \to a} (x - a) \\ &= f'(a) \cdot 0 = 0 \end{aligned}" />
                <p>
                    したがって <InlineMath math="\displaystyle\lim_{x \to a} f(x) = f(a)" /> となり、連続であることが示されました。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-2 （逆は不成立：連続だが微分可能でない例）">
                <p>
                    関数 <InlineMath math="f(x) = |x|" /> は <InlineMath math="x = 0" /> で連続ですが、微分可能ではありません。
                </p>
                <p className="mt-3"><strong>解説．</strong></p>
                <p>
                    <InlineMath math="x \to 0" /> における片側極限（右側極限と左側極限に相当する「右側微分係数」と「左側微分係数」）を考えます：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>右からは <InlineMath math="h > 0" /> なので <InlineMath math="|h|=h" />：<InlineMath math="\displaystyle\lim_{h \to 0+} \frac{|0+h| - 0}{h} = \lim_{h \to 0+} \frac{h}{h} = 1" /></li>
                    <li>左からは <InlineMath math="h < 0" /> なので <InlineMath math="|h|=-h" />：<InlineMath math="\displaystyle\lim_{h \to 0-} \frac{|0+h| - 0}{h} = \lim_{h \to 0-} \frac{-h}{h} = -1" /></li>
                </ul>
                <p className="mt-2">
                    両者が一致しないため、<InlineMath math="h \to 0" /> の極限は存在せず、<InlineMath math="x = 0" /> では微分不可能です（グラフが原点で尖っているため）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基本関数の導関数
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基本関数の導関数</h2>

            <p>
                これ以降の計算で基本となる重要な導関数の公式を挙げます。
                これらはすべて定義（<InlineMath math="h \to 0" /> の極限）から導出されます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1 （べき関数・指数関数・対数関数・三角関数の導関数）">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                        <strong>1. べき関数（定数・多項式など）</strong>
                        <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                            <li><InlineMath math="(c)' = 0" /> （<InlineMath math="c" /> は定数）</li>
                            <li><InlineMath math="(x^\alpha)' = \alpha x^{\alpha - 1}" /> （<InlineMath math="\alpha" /> は実数）</li>
                        </ul>
                    </div>
                    <div>
                        <strong>2. 指数関数・対数関数</strong>
                        <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                            <li><InlineMath math="(e^x)' = e^x" /></li>
                            <li><InlineMath math="(a^x)' = a^x \log a" /> （<InlineMath math="a > 0, a \neq 1" />）</li>
                            <li><InlineMath math="(\log x)' = \frac{1}{x}" /></li>
                            <li><InlineMath math="(\log_a x)' = \frac{1}{x \log a}" /></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <strong>3. 三角関数</strong>
                        <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                            <li><InlineMath math="(\sin x)' = \cos x" /></li>
                            <li><InlineMath math="(\cos x)' = -\sin x" /></li>
                            <li><InlineMath math="(\tan x)' = \frac{1}{\cos^2 x} = 1 + \tan^2 x" /></li>
                        </ul>
                    </div>
                </div>
            </ContentBox>

            <ContentBox type="proof" title="Proof （基本関数の導関数）">
                <div className="space-y-6">
                    <div>
                        <strong>1. <InlineMath math="f(x) = x^n" /> （<InlineMath math="n" /> は自然数）の導関数</strong>
                        <p className="mt-2 text-sm">
                            ※ 一般の実数 <InlineMath math="\alpha" /> についても成り立ちますが、ここでは自然数 <InlineMath math="n" /> の場合を二項定理を用いて示します。
                        </p>
                        <BlockMath math="\begin{aligned} f'(x) &= \lim_{h \to 0} \frac{(x+h)^n - x^n}{h} \\ &= \lim_{h \to 0} \frac{\left(x^n + nx^{n-1}h + \frac{n(n-1)}{2}x^{n-2}h^2 + \cdots + h^n\right) - x^n}{h} \\ &= \lim_{h \to 0} \left( nx^{n-1} + \frac{n(n-1)}{2}x^{n-2}h + \cdots + h^{n-1} \right) \\ &= nx^{n-1} \end{aligned}" />
                    </div>

                    <div>
                        <strong>2. <InlineMath math="f(x) = e^x" /> の導関数</strong>
                        <p className="mt-2 text-sm">
                            自然対数の底 <InlineMath math="e" /> の定義を言い換えた極限 <InlineMath math="\displaystyle \lim_{h \to 0}\frac{e^h-1}{h} = 1" /> を利用します。
                        </p>
                        <BlockMath math="\begin{aligned} f'(x) &= \lim_{h \to 0} \frac{e^{x+h} - e^x}{h} \\ &= \lim_{h \to 0} \frac{e^x(e^h - 1)}{h} \\ &= e^x \lim_{h \to 0} \frac{e^h - 1}{h} \\ &= e^x \cdot 1 = e^x \end{aligned}" />
                    </div>

                    <div>
                        <strong>3. <InlineMath math="f(x) = \log x" /> の導関数</strong>
                        <p className="mt-2 text-sm">
                            対数の性質 <InlineMath math="\log A - \log B = \log(A/B)" /> と、<InlineMath math="e" /> の定義 <InlineMath math="\displaystyle \lim_{t \to 0}(1+t)^{1/t} = e" /> を用います。
                            <InlineMath math="\frac{h}{x} = t" /> とおくと、<InlineMath math="h \to 0" /> のとき <InlineMath math="t \to 0" /> です。
                        </p>
                        <BlockMath math="\begin{aligned} f'(x) &= \lim_{h \to 0} \frac{\log(x+h) - \log x}{h} \\ &= \lim_{h \to 0} \frac{1}{h} \log\left(1 + \frac{h}{x}\right) \\ &= \lim_{h \to 0} \frac{1}{x} \frac{x}{h} \log\left(1 + \frac{h}{x}\right) \\ &= \frac{1}{x} \lim_{t \to 0} \log\left((1 + t)^{\frac{1}{t}}\right) \\ &= \frac{1}{x} \log e = \frac{1}{x} \end{aligned}" />
                    </div>

                    <div>
                        <strong>4. <InlineMath math="f(x) = \sin x" /> の導関数</strong>
                        <p className="mt-2 text-sm">
                            和積の公式 <InlineMath math="\sin A - \sin B = 2 \cos\frac{A+B}{2} \sin\frac{A-B}{2}" /> と、基本極限 <InlineMath math="\displaystyle \lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1" /> を用います。
                        </p>
                        <BlockMath math="\begin{aligned} f'(x) &= \lim_{h \to 0} \frac{\sin(x+h) - \sin x}{h} \\ &= \lim_{h \to 0} \frac{2 \cos\left(x + \frac{h}{2}\right) \sin\left(\frac{h}{2}\right)}{h} \\ &= \lim_{h \to 0} \cos\left(x + \frac{h}{2}\right) \frac{\sin\left(\frac{h}{2}\right)}{\frac{h}{2}} \\ &= \cos(x) \cdot 1 = \cos x \end{aligned}" />
                    </div>
                </div>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>差分商</strong>は、2点間の平均的な変化の割合（割線の傾き）を表す（Definition 2.1-1）。</li>
                    <li><strong>導関数</strong>は、差分商の極限であり瞬間的な変化の割合（接線の傾き）を表す（Definition 2.1-2）。</li>
                    <li>関数がある点で<strong>微分可能</strong>であれば、必ずその点で<strong>連続</strong>である。逆は成り立たない（Theorem 2.1-1, Example 2.1-2）。</li>
                    <li>よく使われるべき関数、指数・対数関数、三角関数の導関数の公式をおさえる（Proposition 2.1-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
