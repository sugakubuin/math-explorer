import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function HigherOrderDerivatives() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                関数 <InlineMath math="y = f(x)" /> の導関数 <InlineMath math="f'(x)" /> もまた <InlineMath math="x" /> の関数です。
                もし <InlineMath math="f'(x)" /> がさらに微分可能であれば、その導関数を考えることができます。
                これを <InlineMath math="f(x)" /> の<strong>第2次導関数</strong>と呼びます。
                これを繰り返して得られるものを総称して<strong>高階導関数</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 高階導関数の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">高階導関数の定義</h2>

            <p>
                高階導関数は、関数の変化の変化（例えば速度の変化である<strong>加速度</strong>など）を表します。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 （第 n 次導関数）">
                <p>
                    関数 <InlineMath math="y = f(x)" /> を <InlineMath math="n" /> 回微分して得られる関数を、
                    <InlineMath math="f(x)" /> の<strong>第 <InlineMath math="n" /> 次導関数</strong>と呼び、次のように表す：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>2回微分（第2次導関数）：<InlineMath math="y'', \quad f''(x), \quad \frac{d^2 y}{dx^2}, \quad \frac{d^2}{dx^2}f(x)" /></li>
                    <li>3回微分（第3次導関数）：<InlineMath math="y''', \quad f'''(x), \quad \frac{d^3 y}{dx^3}" /></li>
                    <li><InlineMath math="n" /> 回微分（第 <InlineMath math="n" /> 次導関数）：<InlineMath math="y^{(n)}, \quad f^{(n)}(x), \quad \frac{d^n y}{dx^n}" /></li>
                </ul>
                <p className="mt-2 text-sm">
                    ※ 4次以上は <InlineMath math="y''''" /> ではなく <InlineMath math="y^{(4)}" /> のように括弧付きの数字で表します（累乗 <InlineMath math="y^4" /> と区別するため）。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-1 （高階導関数の計算）">
                <div className="space-y-4">
                    <div>
                        <p><strong>(1)</strong> <InlineMath math="y = x^4 - 3x^2 + \sin x" /> の第3次導関数までを求めよ。</p>
                        <BlockMath math="\begin{aligned} y' &= 4x^3 - 6x + \cos x \\ y'' &= (y')' = 12x^2 - 6 - \sin x \\ y''' &= (y'')' = 24x - \cos x \end{aligned}" />
                    </div>
                    <div>
                        <p><strong>(2)</strong> <InlineMath math="y = e^{2x}" /> の第 <InlineMath math="n" /> 次導関数を求めよ。</p>
                        <BlockMath math="\begin{aligned} y' &= e^{2x} \cdot 2 = 2e^{2x} \\ y'' &= 2 \cdot (e^{2x} \cdot 2) = 2^2 e^{2x} \\ y''' &= 2^2 \cdot (e^{2x} \cdot 2) = 2^3 e^{2x} \end{aligned}" />
                        <p>したがって帰納的に推測して、<InlineMath math="y^{(n)} = 2^n e^{2x}" /> となる。</p>
                    </div>
                </div>
            </ContentBox>

            <ContentBox type="remark" title="Remark （物理的意味）">
                <p>
                    位置 <InlineMath math="x" /> が時間 <InlineMath math="t" /> の関数 <InlineMath math="x = x(t)" /> で表されるとき：
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>第1次導関数 <InlineMath math="x'(t) = \frac{dx}{dt} = v(t)" /> は<strong>速度</strong></li>
                    <li>第2次導関数 <InlineMath math="x''(t) = \frac{d^2 x}{dt^2} = a(t)" /> は速度の変化率、すなわち<strong>加速度</strong></li>
                </ul>
                <p>を表します。ニュートンの運動方程式 <InlineMath math="F = ma" /> は微分方程式 <InlineMath math="m\frac{d^2x}{dt^2} = F" /> と書くことができます。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 ライプニッツの公式
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">ライプニッツの公式</h2>

            <p>
                積の微分公式 <InlineMath math="\{fg\}' = f'g + fg'" /> を高階に拡張した公式です。
                二項定理の展開式と全く同じ形をしています（係数が二項係数 <InlineMath math="{}_n\text{C}_k" /> になる）。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 （積の高階微分公式 / ライプニッツの公式）">
                <p>
                    関数 <InlineMath math="u(x)" /> と <InlineMath math="v(x)" /> がそれぞれ <InlineMath math="n" /> 回微分可能であるとき、その積 <InlineMath math="y = u(x)v(x)" /> の
                    第 <InlineMath math="n" /> 次導関数は次のように表される：
                </p>
                <BlockMath math="(uv)^{(n)} = \sum_{k=0}^{n} \binom{n}{k} u^{(n-k)} v^{(k)}" />
                <p className="mt-2 text-sm">
                    ここで <InlineMath math="\binom{n}{k} = {}_n\text{C}_k" />。また便宜上 <InlineMath math="u^{(0)} = u" />, <InlineMath math="v^{(0)} = v" /> とする。
                </p>
                <p className="mt-4">
                    例えば <InlineMath math="n=2, 3" /> の場合は次のように展開される：
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><InlineMath math="(uv)'' = u''v + 2u'v' + uv''" /></li>
                    <li><InlineMath math="(uv)''' = u'''v + 3u''v' + 3u'v'' + uv'''" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-2 （ライプニッツの公式の適用）">
                <p>
                    <InlineMath math="y = x^2 e^x" /> の第 <InlineMath math="n" /> 次導関数を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="f(x) = e^x, \quad g(x) = x^2" /> とおく。
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1 mb-2">
                    <li><InlineMath math="f(x)" /> の高階導関数は常に <InlineMath math="e^x" />：<InlineMath math="f^{(k)}(x) = e^x" /></li>
                    <li><InlineMath math="g(x)" /> の高階導関数は途中で <InlineMath math="0" /> になる：<br />
                        <InlineMath math="g(x) = x^2, \quad g'(x) = 2x, \quad g''(x) = 2, \quad g^{(k)}(x) = 0 \quad (k \ge 3)" />
                    </li>
                </ul>
                <p>
                    ライプニッツの公式より、第 <InlineMath math="3" /> 項以降（<InlineMath math="k \ge 3" />）はすべて <InlineMath math="0" /> となる：
                </p>
                <BlockMath math="\begin{aligned} (e^x x^2)^{(n)} &= \binom{n}{0} e^x \cdot x^2 + \binom{n}{1} e^x \cdot 2x + \binom{n}{2} e^x \cdot 2 \\ &= 1 \cdot e^x x^2 + n \cdot e^x 2x + \frac{n(n-1)}{2} e^x \cdot 2 \\ &= e^x \{x^2 + 2nx + n(n-1)\} \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>導関数をさらに微分したものを<strong>高階導関数</strong>という（Definition 2.4-1）。</li>
                    <li>第2次導関数 <InlineMath math="y''" /> は、物理的には加速度や、グラフの凹凸（曲がり具合）を表す。</li>
                    <li>関数の積を複数回微分するとき、二項定理に似た<strong>ライプニッツの公式</strong>が利用できる（Theorem 2.4-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
