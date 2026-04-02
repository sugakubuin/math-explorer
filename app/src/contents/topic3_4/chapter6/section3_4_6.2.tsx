import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LaplacePropertiesSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ラプラス変換が微分方程式の解法において無類の強さを発揮するのは、微分や積分といった時間領域の演算を、複素変数 <InlineMath math="s" /> の <b>代数的な代数演算</b> に置き換えることができるからです。本節では、これらの主要な性質と、その数学的根拠である証明を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分法則と積分法則</h2>

            <p>
                時間領域での微分は <InlineMath math="s" /> 倍、積分は <InlineMath math="1/s" /> 倍という極めてシンプルな形に対応します。
            </p>

            <ContentBox type="proposition" title="Proposition 6.2-1 (微分法則)">
                <p>
                    関数 <InlineMath math="f(t)" /> のラプラス変換を <InlineMath math="F(s)" /> とするとき、その導関数の変換は次のように与えられる：
                </p>
                <BlockMath math="\mathcal{L}[f'(t)] = sF(s) - f(0)" />
                <p>
                    より一般に、$n$ 階導関数の場合は次のようになる：
                </p>
                <BlockMath math="\mathcal{L}[f^{(n)}(t)] = s^n F(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \cdots - f^{(n-1)}(0)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    部分積分を用いることで、微分法則が導かれる：
                </p>
                <BlockMath math="\begin{aligned} \mathcal{L}[f'(t)] &= \int_0^\infty f'(t) e^{-st} dt \\ &= \left[ f(t) e^{-st} \right]_0^\infty + s \int_0^\infty f(t) e^{-st} dt \\ &= -f(0) + sF(s) \end{aligned}" />
                <p>
                    ここでは、<InlineMath math="s" /> の実部が十分に大きく、無限遠で <InlineMath math="e^{-st}" /> が関数 <InlineMath math="f(t)" /> よりも速く減衰すると仮定している。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-1 (微分法則の確認)">
                <p>
                    <InlineMath math="f(t) = \sin(\omega t)" /> に対して微分法則を適用します。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>左辺：<InlineMath math="f'(t) = \omega \cos(\omega t)" /> の変換は <InlineMath math="\omega \cdot \frac{s}{s^2+\omega^2} = \frac{\omega s}{s^2+\omega^2}" /></li>
                    <li>右辺：<InlineMath math="s \mathcal{L}[\sin(\omega t)] - \sin(0) = s \cdot \frac{\omega}{s^2+\omega^2} - 0 = \frac{\omega s}{s^2+\omega^2}" /></li>
                </ul>
                <p>
                    両者が一致することが確認できます。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 6.2-2 (積分法則)">
                <p>
                    時間領域での積分 <InlineMath math="g(t) = \int_0^t f(\tau) d\tau" /> のラプラス変換は次のようになる：
                </p>
                <BlockMath math="\mathcal{L}\left[ \int_0^t f(\tau) d\tau \right] = \frac{F(s)}{s}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="g(t) = \int_0^t f(\tau) d\tau" /> とおくと、<InlineMath math="g'(t) = f(t)" /> かつ <InlineMath math="g(0) = 0" /> である。微分法則（Prop 6.2-1）を <InlineMath math="g(t)" /> に適用すると：
                </p>
                <BlockMath math="\mathcal{L}[g'(t)] = sG(s) - g(0) \implies F(s) = sG(s)" />
                <p>
                    これより、<InlineMath math="G(s) = F(s)/s" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-2 (積分法則の確認)">
                <p>
                    <InlineMath math="\mathcal{L}[1] = 1/s" /> であることを既知とします。積分法則を繰り返し適用することで、<InlineMath math="t^n / n!" /> の変換を導きます。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="1" /> の積分 <InlineMath math="\int_0^t 1 \, d\tau = t" /> の変換は <InlineMath math="\frac{1}{s} \cdot \mathcal{L}[1] = 1/s^2" /></li>
                    <li><InlineMath math="t" /> の積分 <InlineMath math="\int_0^t \tau \, d\tau = t^2/2" /> の変換は <InlineMath math="\frac{1}{s} \cdot \mathcal{L}[t] = 1/s^3" /></li>
                    <li>帰納的に、<InlineMath math="\mathcal{L}\left[ \frac{t^n}{n!} \right] = \frac{1}{s^{n+1}}" /> となることがわかります。</li>
                </ul>
                <p>
                    これは §6.1 の表の結果と完全に一致します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">推移法則（シフト）</h2>

            <p>
                ラプラス変換におけるシフト則には、時間軸方向のずらしと周波数軸（<InlineMath math="s" /> 軸）方向のずらしの 2 種類があります。
            </p>

            <ContentBox type="proposition" title="Proposition 6.2-3 (推移法則)">
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <b>周波数シフト</b>：<InlineMath math="e^{at}f(t) \quad \xrightarrow{\mathcal{L}} \quad F(s-a)" />
                    </li>
                    <li>
                        <b>時間遅れ</b>：<InlineMath math="f(t-a)H(t-a) \quad \xrightarrow{\mathcal{L}} \quad e^{-as}F(s) \quad (a \geq 0)" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    周波数シフトは、定義式の <InlineMath math="s" /> を <InlineMath math="s-a" /> に置き換えるだけで導かれる。
                </p>
                <p>
                    時間遅れの場合は、<InlineMath math="u = t-a" /> と変数変換することで次のように導かれる：
                </p>
                <BlockMath math="\begin{aligned} \mathcal{L}[f(t-a)H(t-a)] &= \int_a^\infty f(t-a) e^{-st} dt \\ &= \int_0^\infty f(u) e^{-s(u+a)} du \\ &= e^{-as} \int_0^\infty f(u) e^{-su} du = e^{-as}F(s) \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-3 (周波数シフトの利用)">
                <p>
                    減衰振動 <InlineMath math="f(t) = e^{-2t} \sin(3t)" /> の変換を求めます。
                </p>
                <p>
                    <InlineMath math="\mathcal{L}[\sin(3t)] = \frac{3}{s^2+9}" /> なので、周波数シフト（<InlineMath math="s \to s+2" />）を用いると：
                </p>
                <BlockMath math="F(s) = \frac{3}{(s+2)^2 + 9} = \frac{3}{s^2 + 4s + 13}" />
                <p>
                    これは制御系の「安定性」を解析する際、極が左半平面へ移動した状態に対応します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">畳み込み定理</h2>

            <p>
                フーリエ変換と同様、時間領域での畳み込みは、ラプラス領域での単純な積に変換されます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-4 (畳み込み定理)">
                <p>
                    2 つの関数 <InlineMath math="f(t), g(t)" /> の片側畳み込み <InlineMath math="(f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau" /> のラプラス変換は、それぞれの積に一致する：
                </p>
                <BlockMath math="\mathcal{L}[(f * g)(t)] = F(s) \cdot G(s)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定義式に代入し、積分の順序（$t$ と $\tau$）を入れ替えることで証明できる。
                </p>
                <p>
                    領域 <InlineMath math="\tau \in [0, \infty), t \in [\tau, \infty)" /> 上の二重積分において、<InlineMath math="u = t-\tau" /> と変数変換を行うと、
                </p>
                <BlockMath math="\begin{aligned} &\int_0^\infty \left( \int_0^t f(\tau) g(t-\tau) d\tau \right) e^{-st} dt \\ &= \int_0^\infty f(\tau) \left( \int_\tau^\infty g(t-\tau) e^{-st} dt \right) d\tau \\ &= \int_0^\infty f(\tau) e^{-s\tau} \left( \int_0^\infty g(u) e^{-su} du \right) d\tau \\ &= F(s)G(s) \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-4 (畳み込み定理の応用)">
                <p>
                    次の積分のラプラス変換を求めます：
                    <BlockMath math="h(t) = \int_0^t \sin \tau \cos(t-\tau) d\tau" />
                </p>
                <p>
                    畳み込み定理より、これは <InlineMath math="f(t) = \sin t" /> と <InlineMath math="g(t) = \cos t" /> の畳み込みのラプラス変換、すなわち積 <InlineMath math="F(s)G(s)" /> に等しい：
                </p>
                <BlockMath math="H(s) = \frac{1}{s^2+1} \cdot \frac{s}{s^2+1} = \frac{s}{(s^2+1)^2}" />
                <p>
                    この逆変換を計算すると <InlineMath math="h(t) = \frac{1}{2} t \sin t" /> となり、時間と共に振幅が増大する「共鳴」的な振る舞いの基礎となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>時間領域での微分 <InlineMath math="\to" /> <InlineMath math="s" /> 平面での代数演算 (<InlineMath math="s" /> 倍) へと変換される。</li>
                    <li>初期値 <InlineMath math="f(0)" /> などが自然に式に含まれるため、定数係数微分方程式の初期値問題に極めて適している。</li>
                    <li>推移法則や畳み込み定理により、時間遅れを伴うシステムや複数のフィルタが重なった系の解析が容易になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
