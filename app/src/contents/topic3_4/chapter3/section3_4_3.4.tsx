import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PlancherelTheoremSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでに学んだ <InlineMath math="L^1" /> （絶対値積分可能）な関数のフーリエ解析には、「変換したスペクトルが再び <InlineMath math="L^1" /> に入るとは限らない」という理論的な副作用がありました。この問題を乗り越えるのが <b><InlineMath math="L^2" /> 理論</b> です。本節では、情報の総量（エネルギー）が変換の前後で完全に保存されることを保証するプランシュレルの定理について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">プランシュレルの定理（等長性）</h2>

            <p>
                フーリエ変換は、関数空間における「回転」のような操作であり、ベクトルの長さを変えません。
            </p>

            <ContentBox type="theorem" title="Theorem 3.4-1 (プランシュレルの定理)">
                <p>
                    関数 <InlineMath math="f \in L^2(\mathbb{R})" /> に対し、その <b>二乗ノルム</b> （全エネルギー）はフーリエ変換の前後で保存される。
                </p>
                <BlockMath math="\|\hat{f}\|_2^2 = 2\pi \|f\|_2^2 \iff \int_{-\infty}^{\infty} |\hat{f}(\xi)|^2 d\xi = 2\pi \int_{-\infty}^{\infty} |f(x)|^2 dx" />
                <p>
                    すなわち、フーリエ変換は <InlineMath math="L^2(\mathbb{R})" /> 上のユニタリ変換（エネルギー保存変換）を定義します。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、急減少関数（シュワルツ関数） <InlineMath math="f, g" /> に対して反転公式（Theorem 3.2-2）を用いると、
                </p>
                <BlockMath math="\int \hat{f}(\xi) \overline{\hat{g}(\xi)} d\xi = \int \left( \int f(x) e^{-i\xi x} dx \right) \overline{\hat{g}(\xi)} d\xi" />
                <p>
                    積分順序を交換すると、
                </p>
                <BlockMath math="\begin{aligned} \int f(x) \left( \int \overline{\hat{g}(\xi) e^{i\xi x}} d\xi \right) dx &= \int f(x) \overline{\left( \int \hat{g}(\xi) e^{i\xi x} d\xi \right)} dx \\ &= 2\pi \int f(x) \overline{g(x)} dx \end{aligned}" />
                <p>
                    が得られます。ここで <InlineMath math="g=f" /> とおけば、等長性 <InlineMath math="\|\hat{f}\|_2^2 = 2\pi \|f\|_2^2" /> が示されます。一般の <InlineMath math="f \in L^2" /> に対しては、シュワルツ空間が <InlineMath math="L^2" /> で稠密であることを利用し、完備性に基づく極限操作によって定義を拡張します。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この性質が具体的にどのように成立するか、矩形パルスを例に計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.4-1 (矩形パルスのエネルギー確認)">
                <p>
                    <InlineMath math="f = \mathbf{1}_{[-1,1]}" /> とすると、時間領域のエネルギーは <InlineMath math="\|f\|_2^2 = \int_{-1}^{1} 1^2 dx = 2" /> です。
                    そのフーリエ変換 <InlineMath math="\hat{f}(\xi) = 2\sin\xi/\xi" /> の周波数領域の全エネルギーは、
                </p>
                <BlockMath math="\frac{1}{2\pi} \int_{-\infty}^{\infty} \left| \frac{2\sin\xi}{\xi} \right|^2 d\xi = \frac{2}{\pi} \int_{-\infty}^{\infty} \frac{\sin^2\xi}{\xi^2} d\xi = \frac{2}{\pi} \cdot \pi = 2" />
                <p>
                    となり、複雑な sinc 関数の積分結果が、元の関数の単純なエネルギー量と一致することがわかります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">プランシュレルの等式（内積の保存）</h2>

            <p>
                エネルギーの保存だけでなく、2 つの信号の「相関（内積）」もフーリエ変換の前後で変化しません。
            </p>

            <p>
                長さだけでなく、2つの関数の「角度（相関）」も保存されます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.4-2 (プランシュレルの等式)">
                <p>
                    <InlineMath math="f, g \in L^2(\mathbb{R})" /> に対し、その <b>内積</b> が保存される。
                </p>
                <BlockMath math="\begin{aligned} \langle f, g \rangle &= \int_{-\infty}^{\infty} f(x) \overline{g(x)} dx \\ &= \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\xi) \overline{\hat{g}(\xi)} d\xi \\ &= \frac{1}{2\pi} \langle \hat{f}, \hat{g} \rangle \end{aligned}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ノルムの等式（Theorem 3.4-1）に対し、<b>分極恒等式</b> （Polarization Identity）：
                </p>
                <BlockMath math="4 \langle f, g \rangle = \|f+g\|^2 - \|f-g\|^2 + i\|f+ig\|^2 - i\|f-ig\|^2" />
                <p>
                    を適用することで、ノルムの保存から直ちに内積の保存が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-2 (直交性の保存)">
                <p>
                    <InlineMath math="f(x) = e^{-x^2}" /> （偶関数）と <InlineMath math="g(x) = x e^{-x^2}" /> （奇関数）は、全直線上で積分すると直交します（内積 0）。
                    フーリエ変換後の <InlineMath math="\hat{f}" /> もやはり偶関数であり、一方 <InlineMath math="\hat{g}" /> は純虚数の奇関数となるため、周波数領域でも内積は 0 となり、直交関係が厳密に保たれます。
                </p>
            </ContentBox>

            <p>
                このエネルギー保存則を物理的な視点から解釈してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.4-3 (エネルギー保存の物理的解釈)">
                <p>
                    ある回路に電圧信号 <InlineMath math="v(t)" /> が加わったとき、抵抗 <InlineMath math="R=1" /> で消費される全エネルギーは <InlineMath math="\int |v(t)|^2 dt" /> です。プランシュレルの定理は、この全エネルギーを「各周波数成分 <InlineMath math="\xi" /> ごとのパワー密度 <InlineMath math="|\hat{v}(\xi)|^2" /> の総和（積分）」として計算しても全く同じ結果が得られることを示しています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="L^2 理論の意義と重要性">
                <p>
                    <InlineMath math="L^1" /> の枠組みでは、sinc 関数のように「ゆっくりとしか減衰しない」関数は解析が困難でした。しかし、<InlineMath math="L^2" /> （有限エネルギー関数）を基礎に据えることで、ほぼすべての実実用的な信号を統一的に扱うことが可能になります。これが、現代の工学や物理学でフーリエ解析がこれほどまでに多用される理由の一つです。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="パーセバルの等式の連続版">
                <p>
                    プランシュレルの等式は、物理的には「信号のエネルギーは、時間で観測しても周波数で観測しても同一である」という <b>エネルギー保存則</b> に他なりません。これは、かつて周期関数の文脈で学んだパーセバルの等式の、非周期関数への自然な拡張（連続版）といえます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>プランシュレルの定理は、フーリエ変換がヒルベルト空間 <InlineMath math="L^2" /> におけるユニタリ変換であることを宣言する。</li>
                    <li>この定理により、エネルギーという物理量を通じて、時間と周波数が「情報の失われない対等な領域」であることが保証される。</li>
                    <li><InlineMath math="L^2" /> 理論を基軸とすることで、<InlineMath math="L^1" /> では扱いが難しかった不連続関数の反転も理論的に正当化される。</li>
                    <li>内積の保存は、信号間の相関や直交性がドメインを変えても不変であることを意味している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
