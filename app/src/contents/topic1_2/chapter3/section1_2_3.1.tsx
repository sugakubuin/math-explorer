import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function IndefiniteIntegral() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分演算の逆を行う操作として「積分」を導入します。
                本節では、ある関数を導関数に持つような元の関数を求める操作である<strong>不定積分</strong>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 原始関数と不定積分
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">原始関数と不定積分</h2>

            <p>
                関数 <InlineMath math="f(x)" /> が与えられたとき、「微分すると <InlineMath math="f(x)" /> になる関数」を見つけることを考えます。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 （原始関数）">
                <p>
                    ある区間で定義された関数 <InlineMath math="f(x)" /> に対して、その区間内のすべての <InlineMath math="x" /> で
                </p>
                <BlockMath math="F'(x) = f(x)" />
                <p>
                    を満たす関数 <InlineMath math="F(x)" /> が存在するとき、<InlineMath math="F(x)" /> を <InlineMath math="f(x)" /> の<strong>原始関数 (Antiderivative)</strong> という。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark （原始関数の任意性）">
                <p>
                    定数を微分すると <InlineMath math="0" /> になります（<InlineMath math="(C)' = 0" />）。
                    したがって、関数 <InlineMath math="f(x)" /> に原始関数 <InlineMath math="F(x)" /> が1つ見つかれば、
                    任意の定数 <InlineMath math="C" /> を足した <InlineMath math="F(x) + C" /> もすべて <InlineMath math="f(x)" /> の原始関数になります。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.1-2 （不定積分）">
                <p>
                    関数 <InlineMath math="f(x)" /> の原始関数の全体（すべての原始関数の集合）を <InlineMath math="f(x)" /> の<strong>不定積分 (Indefinite Integral)</strong> といい、次のように表す：
                </p>
                <BlockMath math="\int f(x) \, dx = F(x) + C" />
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>記号 <InlineMath math="\int" /> (インテグラル) は、和 (Sum) の頭文字 S を長く引き伸ばしたものです。</li>
                    <li><InlineMath math="f(x)" /> を<strong>被積分関数</strong>といいます。</li>
                    <li><InlineMath math="dx" /> は積分変数が <InlineMath math="x" /> であることを示します。</li>
                    <li><InlineMath math="C" /> は<strong>積分定数</strong>といい、通常は任意の定数を表します。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基本積分公式
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基本積分公式</h2>

            <p>
                微分の公式を逆から読むことで、直ちに積分の公式が得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-1 （基本的な不定積分の公式）">
                <p>
                    以下の公式が成り立つ（<InlineMath math="C" /> は積分定数）。
                </p>
                <div className="space-y-4 mt-2">
                    <div>
                        <p><strong>1. べき関数の積分:</strong></p>
                        <BlockMath math="\int x^\alpha \, dx = \frac{x^{\alpha+1}}{\alpha+1} + C \quad (\alpha \neq -1)" />
                        <BlockMath math="\int \frac{1}{x} \, dx = \log |x| + C \quad (\alpha = -1)" />
                    </div>
                    <div>
                        <p><strong>2. 指数関数の積分:</strong></p>
                        <BlockMath math="\int e^x \, dx = e^x + C" />
                        <BlockMath math="\int a^x \, dx = \frac{a^x}{\log a} + C \quad (a > 0, a \neq 1)" />
                    </div>
                    <div>
                        <p><strong>3. 三角関数の積分:</strong></p>
                        <BlockMath math="\int \cos x \, dx = \sin x + C" />
                        <BlockMath math="\int \sin x \, dx = -\cos x + C" />
                        <BlockMath math="\int \frac{1}{\cos^2 x} \, dx = \tan x + C" />
                    </div>
                </div>
            </ContentBox>

            <ContentBox type="proof" title="Proof （公式の確認）">
                <p>
                    積分の定義（微分の逆）に従い、右辺の関数を微分して被積分関数（左辺の関数）に一致することを確認すれば証明となります。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><InlineMath math="\displaystyle \frac{d}{dx}\left(\frac{x^{\alpha+1}}{\alpha+1}\right) = \frac{(\alpha+1)x^\alpha}{\alpha+1} = x^\alpha" /> <br /> なので、<InlineMath math="\displaystyle \int x^\alpha \, dx = \frac{x^{\alpha+1}}{\alpha+1} + C" />。</li>
                    <li><InlineMath math="\displaystyle \frac{d}{dx}(\log |x|) = \frac{1}{x}" /> <br /> なので、<InlineMath math="\displaystyle \int \frac{1}{x} \, dx = \log |x| + C" />。</li>
                    <li><InlineMath math="\displaystyle \frac{d}{dx}(-\cos x) = -(-\sin x) = \sin x" /> <br /> なので、<InlineMath math="\displaystyle \int \sin x \, dx = -\cos x + C" />。</li>
                </ul>
                <p>他も同様です。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 不定積分の線形性
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">不定積分の線形性</h2>

            <p>
                微分の線形性（和・差・定数倍の微分）から、不定積分でも線形性が成り立ちます。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-1 （不定積分の線形性）">
                <p>
                    関数 <InlineMath math="f(x), g(x)" /> と定数 <InlineMath math="k" /> について次が成り立つ：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>定数倍：</strong> <InlineMath math="\displaystyle \int kf(x) \, dx = k \int f(x) \, dx" /></li>
                    <li><strong>和・差：</strong> <InlineMath math="\displaystyle \int \{f(x) \pm g(x)\} \, dx = \int f(x) \, dx \pm \int g(x) \, dx" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof （線形性の証明）">
                <p>
                    右辺の式全体を <InlineMath math="x" /> で微分した結果が被積分関数に一致することを示します。
                </p>
                <BlockMath math="\begin{aligned} \frac{d}{dx} \left( k \int f(x) \, dx \right) &= k \frac{d}{dx} \left( \int f(x) \, dx \right) \\ &= k f(x) \end{aligned}" />
                <p>微分して <InlineMath math="kf(x)" /> になるのだから、左辺の <InlineMath math="\displaystyle \int kf(x) \, dx" /> と等しくなります。（積分定数の違いは吸収されます）</p>
                <p>和や差についても微分の線形性より：</p>
                <BlockMath math="\begin{aligned} \frac{d}{dx} \left( \int f(x)\,dx + \int g(x)\,dx \right) &= \frac{d}{dx}\left(\int f(x)\,dx\right) + \frac{d}{dx}\left(\int g(x)\,dx\right) \\ &= f(x) + g(x) \end{aligned}" />
                <p>となり成立します。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-1 （不定積分の計算）">
                <p>
                    次の不定積分を求めよ。
                </p>
                <BlockMath math="\int \left(3x^2 - 4x + \frac{2}{x}\right) \, dx" />
                <p className="mt-3"><strong>解．</strong></p>
                <p>線形性と基本積分公式を用いると：</p>
                <BlockMath math="\begin{aligned} \int \left(3x^2 - 4x + \frac{2}{x}\right) \, dx &= 3\int x^2 \, dx - 4\int x \, dx + 2\int \frac{1}{x} \, dx \\ &= 3\left(\frac{x^3}{3}\right) - 4\left(\frac{x^2}{2}\right) + 2\log|x| + C \\ &= x^3 - 2x^2 + 2\log|x| + C \end{aligned}" />
            </ContentBox>

        </section>
    );
}
