import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UncertaintyPrincipleSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「時間領域で信号を短く絞れば絞るほど、周波数領域での広がりが大きくなる」という現象は、フーリエ解析の本質的な性質の一つです。このトレードオフ関係を数学的に厳密に定式化したものが <b>ハイゼンベルクの不確定性原理</b> です。本節では、この定理の証明とその物理的・信号処理的な意義について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不確定性原理の定式化</h2>

            <p>
                信号の「時間的な幅」と「周波数的な幅」を、それぞれの領域における分散（二乗ノルム）として定義します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 (ハイゼンベルクの不確定性原理)">
                <p>
                    <InlineMath math="f \in \mathcal{S}(\mathbb{R})" /> が <InlineMath math="\|f\|_2 = 1" /> に正規化されているとき、次の不等式が成り立つ：
                </p>
                <BlockMath math="\left( \int_{-\infty}^{\infty} x^2 |f(x)|^2 dx \right) \left( \int_{-\infty}^{\infty} \xi^2 |\hat{f}(\xi)|^2 \frac{d\xi}{2\pi} \right) \geq \frac{1}{4}" />
                <p>
                    等号が成立するのは、<InlineMath math="f(x)" /> がガウス関数（<InlineMath math="f(x) = C e^{-ax^2}" />）のときのみである。
                </p>
            </ContentBox>

            <p>
                この不等式は、時間幅（標本分散）と周波数幅（スペクトル分散）の積には下限があり、両方を同時に無限に小さくすることはできないことを示しています。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    正規化条件 <InlineMath math="\int |f(x)|^2 dx = 1" /> と部分積分により、
                </p>
                <BlockMath math="\begin{aligned} 1 &= \int_{-\infty}^{\infty} |f(x)|^2 dx \\ &= - \int_{-\infty}^{\infty} x \frac{d}{dx}|f(x)|^2 dx \\ &= - \int_{-\infty}^{\infty} x (f'(x)\overline{f(x)} + f(x)\overline{f'(x)}) dx \end{aligned}" />
                <p>
                    を得ます。コーシー・シュワルツの不等式を用いると、
                </p>
                <BlockMath math="\begin{aligned} 1 &\leq 2 \int |x f(x) f'(x)| dx \\ &\leq 2 \left( \int x^2 |f(x)|^2 dx \right)^{1/2} \left( \int |f'(x)|^2 dx \right)^{1/2} \end{aligned}" />
                <p>
                    ここで、プランシュレルの定理により <InlineMath math="\int |f'|^2 dx = \frac{1}{2\pi} \int |\mathcal{F}[f']|^2 d\xi = \frac{1}{2\pi} \int \xi^2 |\hat{f}|^2 d\xi" /> となるため、これらを代入して整理すると：
                </p>
                <BlockMath math="\left( \int x^2 |f|^2 dx \right) \left( \frac{1}{2\pi} \int \xi^2 |\hat{f}|^2 d\xi \right) \geq \frac{1}{4}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不確定性原理の解釈と応用</h2>

            <ContentBox type="example" title="Example 4.4-1 (ガウス関数と最小不確定性)">
                <p>
                    ガウス関数 <InlineMath math="f(x) = e^{-ax^2}" /> は、時間領域と周波数領域で全く同じ形状（自己双対）を維持する唯一の関数です。不確定性関係において等号を達成するこの関数は、物理的には「最も情報を局在化させた理想的な波形」であると言えます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="信号処理でのトレードオフ">
                <ul className="list-disc list-inside space-y-2">
                    <li><b>短時間フーリエ変換 (STFT)</b>：短い観測窓を使えば「いつ」起きたかは正確にわかりますが、周波数の分解能が落ちます。逆に長い窓を使えば周波数は正確にわかりますが、時間はぼやけます。</li>
                    <li><b>ウェーブレット変換</b>：この限界を克服するために、周波数ごとに窓の長さを変える手法です。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="量子力学との接続">
                <p>
                    量子力学における位置 <InlineMath math="x" /> と運動量 <InlineMath math="p = \hbar \xi" /> の不確定性関係（ハイゼンベルクの不等式）は、この数理的な不確定性原理そのものです。波として記述されるミクロな粒子の性質が、フーリエ解析という数学の土俵の上で語られているのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ハイゼンベルクの不確定性原理は、時間領域と周波数領域の「局在度（分散）」の積に下限があることを示す。</li>
                    <li>証明には、コーシー・シュワルツの不等式と、フーリエ変換の微分則・プランシュレルの定理が用いられる。</li>
                    <li>ガウス関数は、この不確定性の下限（等号）を達成する唯一の「最も情報が集中した」関数である。</li>
                    <li>この原理は、信号処理における時間・周波数分解能の限界や、量子物理学の根源的な不確定性を支配している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
