import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DerivativeRules() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では導関数の定義と基本関数の微分の公式を学びました。
                本節では、基礎的な関数を組み合わせて作られる複雑な関数（和、差、積、商）を
                微分するための<strong>微分の計算法則</strong>を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 線形性（和・差・定数倍の微分）
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">線形性（和・差・定数倍の微分）</h2>

            <p>
                関数が足し合わされたり、定数倍されたりしている場合、それぞれの導関数を計算してから
                同様に足し合わせたり定数倍したりできます。極限の性質から直接導かれます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-1 （和・差・スカラー倍の微分）">
                <p>
                    関数 <InlineMath math="f(x)" /> と <InlineMath math="g(x)" /> が微分可能であり、<InlineMath math="k" /> を定数とするとき、次が成り立つ：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>和の微分：</strong> <InlineMath math="\{f(x) + g(x)\}' = f'(x) + g'(x)" /></li>
                    <li><strong>差の微分：</strong> <InlineMath math="\{f(x) - g(x)\}' = f'(x) - g'(x)" /></li>
                    <li><strong>定数倍の微分：</strong> <InlineMath math="\{k f(x)\}' = k f'(x)" /></li>
                </ul>
                <p className="mt-2 text-sm">
                    ※ これらをまとめて <InlineMath math="\{pf(x) + qg(x)\}' = pf'(x) + qg'(x)" /> と書くこともでき、これを微分の<strong>線形性</strong>と呼びます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-1">
                <p>
                    次の方程式で与えられる関数 <InlineMath math="y" /> の導関数を求めよ。
                </p>
                <BlockMath math="y = 3x^4 - 2x^2 + 5x - 7" />
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    線形性より各項を別々に微分すればよい：
                </p>
                <BlockMath math="\begin{aligned} y' &= (3x^4)' - (2x^2)' + (5x)' - (7)' \\ &= 3(x^4)' - 2(x^2)' + 5(x)' - 0 \\ &= 3(4x^3) - 2(2x) + 5(1) \\ &= 12x^3 - 4x + 5 \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 積の微分法則
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">積の微分法則</h2>

            <p>
                関数の積 <InlineMath math="f(x)g(x)" /> の微分は、それぞれの微分の積 <InlineMath math="f'(x)g'(x)" /> <strong>ではありません</strong>。
                複雑な関係を持ち、ライプニッツの法則と呼ばれる公式に従います。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-1 （ライプニッツ則 / 積の微分法則）">
                <p>
                    関数 <InlineMath math="f(x)" /> と <InlineMath math="g(x)" /> が共に微分可能であるとき、その積 <InlineMath math="f(x)g(x)" /> も微分可能であり、次が成り立つ：
                </p>
                <BlockMath math="\{f(x)g(x)\}' = f'(x)g(x) + f(x)g'(x)" />
                <p className="mt-2 text-sm text-center">
                    （「微分・そのまま ＋ そのまま・微分」と覚えるとよい）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>微分の定義に従って計算します。</p>
                <BlockMath math="\begin{aligned} \{f(x)g(x)\}' &= \lim_{h \to 0} \frac{f(x+h)g(x+h) - f(x)g(x)}{h} \end{aligned}" />
                <p>分子に便宜上 <InlineMath math="-f(x)g(x+h) + f(x)g(x+h)" /> を加えます：</p>
                <BlockMath math="\begin{aligned} &= \lim_{h \to 0} \frac{f(x+h)g(x+h) - f(x)g(x+h) + f(x)g(x+h) - f(x)g(x)}{h} \\ &= \lim_{h \to 0} \left( \frac{f(x+h) - f(x)}{h}g(x+h) + f(x)\frac{g(x+h) - g(x)}{h} \right) \end{aligned}" />
                <p>
                    <InlineMath math="g" /> は微分可能なので連続であり、<InlineMath math="\displaystyle \lim_{h \to 0} g(x+h) = g(x)" />。また極限の性質を使うと：
                </p>
                <BlockMath math="\begin{aligned} &= \left(\lim_{h \to 0}\frac{f(x+h) - f(x)}{h}\right)\left(\lim_{h \to 0}g(x+h)\right) + f(x)\left(\lim_{h \to 0}\frac{g(x+h) - g(x)}{h}\right) \\ &= f'(x)g(x) + f(x)g'(x) \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-2 （積の微分計算）">
                <p>
                    <InlineMath math="y = x^2 \sin x" /> の導関数を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p><InlineMath math="f(x) = x^2,\; g(x) = \sin x" /> として積の微分法則を適用する。</p>
                <BlockMath math="\begin{aligned} y' &= (x^2)' \sin x + x^2 (\sin x)' \\ &= 2x \sin x + x^2 \cos x \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 商の微分法則
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">商の微分法則</h2>

            <p>
                関数の商（分数）になっている形の微分法則です。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-2 （商の微分）">
                <p>
                    関数 <InlineMath math="f(x), g(x)" /> が共に微分可能であり、<InlineMath math="g(x) \neq 0" /> のとき、次が成り立つ：
                </p>
                <BlockMath math="\left\{ \frac{f(x)}{g(x)} \right\}' = \frac{f'(x)g(x) - f(x)g'(x)}{\{g(x)\}^2}" />
                <p className="mt-3">
                    特に分子が定数 <InlineMath math="f(x) = 1" /> の場合は、次のように簡単になる：
                </p>
                <BlockMath math="\left\{ \frac{1}{g(x)} \right\}' = -\frac{g'(x)}{\{g(x)\}^2}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof （商の微分法則）">
                <p>
                    まず、<InlineMath math="f(x) = 1" /> の場合である <InlineMath math="\left\{ \frac{1}{g(x)} \right\}'" /> を微分の定義から導きます。
                </p>
                <BlockMath math="\begin{aligned} \left\{ \frac{1}{g(x)} \right\}' &= \lim_{h \to 0} \frac{\frac{1}{g(x+h)} - \frac{1}{g(x)}}{h} \\ &= \lim_{h \to 0} \frac{1}{h} \cdot \frac{g(x) - g(x+h)}{g(x+h)g(x)} \\ &= \lim_{h \to 0} \left( -\frac{g(x+h) - g(x)}{h} \cdot \frac{1}{g(x+h)g(x)} \right) \end{aligned}" />
                <p>
                    <InlineMath math="g" /> は微分可能ゆえ連続であるため、<InlineMath math="\displaystyle \lim_{h \to 0} g(x+h) = g(x)" /> となります。よって極限をとると、
                </p>
                <BlockMath math="\left\{ \frac{1}{g(x)} \right\}' = -g'(x) \cdot \frac{1}{g(x)^2} = -\frac{g'(x)}{\{g(x)\}^2}" />
                <p>
                    次に、一般の商 <InlineMath math="\frac{f(x)}{g(x)}" /> については、積の微分法則 <InlineMath math="\{u \cdot v\}' = u'v + uv'" /> を用いて <InlineMath math="f(x) \cdot \frac{1}{g(x)}" /> として計算します。
                </p>
                <BlockMath math="\begin{aligned} \left\{ \frac{f(x)}{g(x)} \right\}' &= \left\{ f(x) \cdot \frac{1}{g(x)} \right\}' \\ &= f'(x) \cdot \frac{1}{g(x)} + f(x) \cdot \left\{ \frac{1}{g(x)} \right\}' \\ &= \frac{f'(x)}{g(x)} + f(x) \left( -\frac{g'(x)}{\{g(x)\}^2} \right) \\ &= \frac{f'(x)g(x)}{\{g(x)\}^2} - \frac{f(x)g'(x)}{\{g(x)\}^2} \\ &= \frac{f'(x)g(x) - f(x)g'(x)}{\{g(x)\}^2} \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-3 （商の微分計算）">
                <p>
                    <InlineMath math="y = \frac{e^x}{x^2 + 1}" /> の導関数を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <BlockMath math="\begin{aligned} y' &= \frac{(e^x)'(x^2 + 1) - e^x(x^2 + 1)'}{(x^2 + 1)^2} \\ &= \frac{e^x(x^2 + 1) - e^x(2x)}{(x^2 + 1)^2} \\ &= \frac{e^x(x^2 - 2x + 1)}{(x^2 + 1)^2} = \frac{e^x(x - 1)^2}{(x^2 + 1)^2} \end{aligned}" />
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-4 （商の微分を用いた導出）">
                <p>
                    商の微分を用いて、<InlineMath math="y = \tan x" /> の導関数を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="\tan x = \frac{\sin x}{\cos x}" /> より：
                </p>
                <BlockMath math="\begin{aligned} (\tan x)' &= \left( \frac{\sin x}{\cos x} \right)' \\ &= \frac{(\sin x)'\cos x - \sin x(\cos x)'}{\cos^2 x} \\ &= \frac{\cos x \cdot \cos x - \sin x(-\sin x)}{\cos^2 x} \\ &= \frac{\cos^2 x + \sin^2 x}{\cos^2 x} \end{aligned}" />
                <p><InlineMath math="\sin^2 x + \cos^2 x = 1" /> より：</p>
                <BlockMath math="(\tan x)' = \frac{1}{\cos^2 x}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>微分は和・差・定数倍に対して<strong>線形的</strong>に振る舞う（Proposition 2.2-1）。</li>
                    <li><strong>積の微分：</strong> <InlineMath math="\{fg\}' = f'g + fg'" />（Theorem 2.2-1）。</li>
                    <li><strong>商の微分：</strong> <InlineMath math="\displaystyle \left\{\frac{f}{g}\right\}' = \frac{f'g - fg'}{g^2}" />（Proposition 2.2-2）。</li>
                    <li>これらを用いることで、基本的な関数から構成された多項式や有理関数の微分を機械的に行うことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
