import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function LHopitalsRule() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                極限の計算において、<InlineMath math="x \to a" /> のときに分子と分母が共に <InlineMath math="0" /> に近づく場合を<strong>「<InlineMath math="0/0" />型の不定形」</strong>、
                共に無限大に発散する場合を<strong>「<InlineMath math="\infty/\infty" />型の不定形」</strong>と呼びます。
                これらの極限を求める強力な道具が、導関数を利用する<strong>ロピタルの定理</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 不定形の種類
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">不定形の種類</h2>

            <p>
                極限の商の法則（<InlineMath math="\lim(f/g) = (\lim f)/(\lim g)" />）が使えない特殊なケースです。
            </p>

            <ContentBox type="definition" title="Definition 2.5-1 （不定形：Indeterminate Forms）">
                <p>
                    極限 <InlineMath math="\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)}" /> を評価するとき、次のような形になるものを<strong>不定形</strong>という：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong><InlineMath math="\frac{0}{0}" /> 型：</strong> <InlineMath math="\displaystyle\lim_{x\to a} f(x) = 0" /> かつ <InlineMath math="\displaystyle\lim_{x\to a} g(x) = 0" /></li>
                    <li><strong><InlineMath math="\frac{\infty}{\infty}" /> 型：</strong> <InlineMath math="\displaystyle\lim_{x\to a} f(x) = \pm\infty" /> かつ <InlineMath math="\displaystyle\lim_{x\to a} g(x) = \pm\infty" /></li>
                </ul>
                <p className="mt-2 text-sm">
                    ※ 他にも、変形によって上の2つに帰着できる <InlineMath math="0 \cdot \infty" /> 型、<InlineMath math="\infty - \infty" /> 型、<InlineMath math="1^\infty" /> 型、<InlineMath math="0^0" /> 型、<InlineMath math="\infty^0" /> 型などがある。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark （どうして「不定形」？）">
                <p>
                    不定形とは「極限が存在しない」という意味ではありません。
                    「これだけではどんな値に収束するか（あるいは発散するか）が<strong>定まらない</strong>」という意味です。
                    近づく「速さ」のバランスによって、<InlineMath math="0" /> になることも、定数になることも、あるいは <InlineMath math="\infty" /> になることもあります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 ロピタルの定理
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">ロピタルの定理</h2>

            <p>
                不定形の極限は、分子と分母をそれぞれ独立して微分したものの極限に等しくなる、という定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.5-1 （ロピタルの定理 / L'Hôpital's Rule）">
                <p>
                    <InlineMath math="f(x), g(x)" /> が <InlineMath math="a" /> の近くで微分可能で、分母 <InlineMath math="g'(x) \neq 0" /> であるとする。
                    極限 <InlineMath math="\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)}" /> が <InlineMath math="\frac{0}{0}" /> 型または <InlineMath math="\frac{\infty}{\infty}" /> 型の不定形であるとき、
                </p>
                <p className="mt-2 font-bold text-center">
                    微分した関数の比の極限 <InlineMath math="\displaystyle\lim_{x \to a} \frac{f'(x)}{g'(x)}" /> が存在する（または <InlineMath math="\pm\infty" />）ならば、
                </p>
                <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />
                <p>が成り立つ。この定理は <InlineMath math="x \to a+, x \to a-, x \to \pm\infty" /> の極限に対しても同様に成立する。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （ロピタルの定理の概略：0/0型・右側極限の場合）">
                <p>
                    厳密な証明には「コーシーの平均値の定理」が必要ですが（微分積分学II以降で詳しく学びます）、
                    ここでは連続性を仮定した直感的な概略を示します。
                </p>
                <p>
                    <InlineMath math="x \to a+" /> の極限を考えます。<InlineMath math="f(a) = 0" />、<InlineMath math="g(a) = 0" /> と拡張して連続関数とみなします。
                    <InlineMath math="x" /> が <InlineMath math="a" /> に非常に近いとき、一次近似（接線の方程式）より：
                </p>
                <BlockMath math="\begin{aligned} f(x) &\approx f(a) + f'(a)(x-a) = f'(a)(x-a) \\ g(x) &\approx g(a) + g'(a)(x-a) = g'(a)(x-a) \end{aligned}" />
                <p>
                    したがって、これらの比をとると：
                </p>
                <BlockMath math="\frac{f(x)}{g(x)} \approx \frac{f'(a)(x-a)}{g'(a)(x-a)} = \frac{f'(a)}{g'(a)}" />
                <p>
                    <InlineMath math="x \to a" /> の極限をとれば、比の極限が導関数の比 <InlineMath math="\displaystyle \frac{f'(a)}{g'(a)}" /> （すなわち <InlineMath math="\displaystyle \lim_{x\to a}\frac{f'(x)}{g'(x)}" />）に近づくことが直感的に納得できます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-1 （ 0 / 0 型への適用）">
                <p>
                    <InlineMath math="\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x}" /> を計算せよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="x \to 0" /> のとき分子 <InlineMath math="e^x - 1 \to 1 - 1 = 0" />、分母 <InlineMath math="x \to 0" /> なので <InlineMath math="0/0" /> 型の不定形。<br />
                    分子と分母をそれぞれ別々に <InlineMath math="x" /> で微分すると：
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li><InlineMath math="(e^x - 1)' = e^x" /></li>
                    <li><InlineMath math="(x)' = 1" /></li>
                </ul>
                <p>
                    ロピタルの定理より：
                </p>
                <BlockMath math="\lim_{x \to 0} \frac{e^x - 1}{x} \stackrel{\mathrm{L'H}}{=} \lim_{x \to 0} \frac{e^x}{1} = e^0 = 1" />
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-2 （ ∞ / ∞ 型への適用、複数回の使用）">
                <p>
                    <InlineMath math="\displaystyle\lim_{x \to \infty} \frac{e^x}{x^2}" /> を計算せよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="x \to \infty" /> のとき両者とも <InlineMath math="\infty" /> となるので <InlineMath math="\infty/\infty" /> 型。<br />
                    ロピタルの定理を1回適用：
                </p>
                <BlockMath math="\lim_{x \to \infty} \frac{e^x}{x^2} \stackrel{\mathrm{L'H}}{=} \lim_{x \to \infty} \frac{e^x}{2x}" />
                <p>
                    まだ <InlineMath math="\infty/\infty" /> 型なので、もう1度ロピタルの定理を適用：
                </p>
                <BlockMath math="\lim_{x \to \infty} \frac{e^x}{2x} \stackrel{\mathrm{L'H}}{=} \lim_{x \to \infty} \frac{e^x}{2} = \infty" />
                <p className="mt-2 text-sm text-slate-500">
                    （指数関数 <InlineMath math="e^x" /> は多項式 <InlineMath math="x^2" /> よりも圧倒的に速く発散することがわかる）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 その他の不定形
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">その他の不定形から商の形への変換</h2>

            <p>
                元の式が商（分数）の形でなくても、変形することでロピタルの定理を使える形にできます。
            </p>

            <ContentBox type="example" title="Example 2.5-3 （ 0 × ∞ 型からの変形）">
                <p>
                    <InlineMath math="\displaystyle\lim_{x \to 0+} x \log x" /> を計算せよ。<br />
                    （<InlineMath math="x \to 0" /> は <InlineMath math="0" /> に、<InlineMath math="\log x \to -\infty" /> なので <InlineMath math="0 \cdot \infty" /> 型）。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="x = \frac{1}{\frac{1}{x}}" /> と無理やり分数の形に変形し、<InlineMath math="\frac{\infty}{\infty}" /> 型にする：
                </p>
                <BlockMath math="\lim_{x \to 0+} x \log x = \lim_{x \to 0+} \frac{\log x}{\frac{1}{x}}" />
                <p>
                    ロピタルの定理を適用：
                </p>
                <BlockMath math="\stackrel{\mathrm{L'H}}{=} \lim_{x \to 0+} \frac{\frac{1}{x}}{-\frac{1}{x^2}} = \lim_{x \to 0+} (-\frac{x^2}{x}) = \lim_{x \to 0+} (-x) = 0" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 注意点と限界
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">注意点と適用の限界</h2>

            <p>
                ロピタルの定理は便利ですが、万能ではありませんし、誤用しやすい点もあります。
            </p>

            <ContentBox type="remark" title="Remark （ロピタルの定理が適用できない例）">
                <ol className="list-decimal pl-5 space-y-3">
                    <li>
                        <strong>不定形でない場合に適用してしまう：</strong><br />
                        <InlineMath math="\displaystyle\lim_{x \to 0} \frac{x+1}{x+2}" /> は <InlineMath math="\frac{1}{2}" /> に収束します。しかしこれを無理にロピタルの定理で解こうとしてそれぞれ微分すると <InlineMath math="\displaystyle\lim_{x \to 0}\frac{1}{1} = 1" /> となり、<strong>誤答</strong>になります。
                    </li>
                    <li>
                        <strong><InlineMath math="\frac{f'}{g'}" /> の極限が存在しない場合：</strong><br />
                        <InlineMath math="\displaystyle\lim_{x \to \infty} \frac{x + \sin x}{x}" /> （<InlineMath math="\infty/\infty" /> 型）。<br />
                        ロピタルの定理を試すと <InlineMath math="\displaystyle\lim_{x \to \infty} \frac{1 + \cos x}{1} = 1 + \cos x" /> となり、<InlineMath math="\cos" /> が振動するため極限が存在しません。定理は「右辺が存在するならば左辺もそれと一致する」なので、この場合は何も主張しません。<br />
                        （正解は：<InlineMath math="\frac{x}{x} + \frac{\sin x}{x} = 1 + 0 = 1" />）
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="0/0" /> 型や <InlineMath math="\infty/\infty" /> 型の<strong>不定形</strong>の極限に<strong>ロピタルの定理</strong>が有効（Theorem 2.5-1）。</li>
                    <li><InlineMath math="\displaystyle\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}" /> と分子・分母を独立して微分する（<strong>商の微分法則とは違う</strong>ので間違えないこと）。</li>
                    <li>適用前に<strong>必ず不定形かどうかを確認</strong>する。不定形でないものに適用すると誤った結果になる（Proposition 2.5-1）。</li>
                    <li><InlineMath math="0 \cdot \infty" /> 型などは分数に直して不定形に帰着させることで計算できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
