import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ParsevalEqualityAndL2Convergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、特定の点において級数が関数の値に収束するかどうか（各点収束）を考えました。本節では、関数を「エネルギー」の観点から評価する「<InlineMath math="L^2" /> 収束」という、もう一つの重要な収束の概念を導入します。これにより、フーリエ級数が関数全体の情報をいかに効率よく捉えているかが明らかになり、現代数学の深遠な等式である「パーセバルの等式」へと繋がります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">L² 収束と完全正規直交系</h2>

            <p>
                各点での収束は直感的ですが、少しの「ずれ」が許容される「平均二乗誤差」の意味での収束は、物理学や多次元の解析において非常に強力な力を発揮します。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-1 (L² 収束)">
                <p>
                    周期 <InlineMath math="2\pi" /> の関数 <InlineMath math="f" /> が二乗可積分（<InlineMath math="f \in L^2([-\pi, \pi])" />）であれば、フーリエ部分和 <InlineMath math="S_N f" /> は <InlineMath math="f" /> に <InlineMath math="L^2" /> ノルムの意味で収束する。
                </p>
                <BlockMath math="\lim_{N \to \infty} \| f - S_N f \|_2 = \lim_{N \to \infty} \sqrt{ \int_{-\pi}^{\pi} |f(x) - S_N f(x)|^2 dx} = 0" />
                <p>
                    これは、三角関数系 <InlineMath math="\{e^{inx}\}_{n \in \mathbb{Z}}" /> が <InlineMath math="L^2" /> 空間の完全正規直交基底であることを意味する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (アウトライン)">
                <p>
                    <InlineMath math="S_N f" /> は、<InlineMath math="L^2" /> 空間における部分空間への直交射影であることを示す。射影の性質により、残差（真の関数と近似式の差のノルムの二乗）は次のように計算できる：
                </p>
                <BlockMath math="\| f - S_N f \|_2^2 = \| f \|_2^2 - 2\pi \sum_{|n| \leq N} |c_n|^2" />
                <p>
                    この右辺が <InlineMath math="N \to \infty" /> でゼロに収束することを、滑らかな関数による近似（稠密性）を用いることで証明する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体的な例で、収束の性質を各点収束と比較してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.3-1 (f(x) = |x| の L² 収束)">
                <p>
                    <InlineMath math="f(x) = |x| \quad (-\pi < x < \pi)" /> は連続ですが、<InlineMath math="x=0" /> で微分不可能です。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>フーリエ係数 <InlineMath math="a_n" /> は <InlineMath math="1/n^2" /> のオーダーで減衰します。</li>
                    <li>そのため、残差 <InlineMath math="\|f - S_N f\|_2^2" /> は <InlineMath math="O(1/N)" /> の速さでゼロに収束し、エネルギーの意味で非常に良い近似となります。</li>
                    <li>一方、<InlineMath math="x=0" /> 近傍での点ごとの収束は、関数が折れ曲がっているために、滑らかな部分に比べてやや「遅く」感じられます。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="L² 収束と各点収束の違い">
                <p>
                    <InlineMath math="L^2" /> 収束は、関数全体の「エネルギー」が保存されることを重視します。たとえ数点において値が大きく異なっていても、積分の平均的なずれが小さければ「収束している」とみなします。この柔軟性は、物理現象（量子力学の状態ベクトルなど）を記述する上で非常に重要です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">パーセバルの等式と応用</h2>

            <p>
                <InlineMath math="L^2" /> 収束の結果として得られるのが、フーリエ解析において最も美しいとされる「パーセバルの等式」です。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-2 (パーセバルの等式)">
                <p>
                    <InlineMath math="f \in L^2([-\pi, \pi])" /> に対し、次の等式が成り立つ。
                </p>
                <BlockMath math="\frac{1}{2\pi} \int_{-\pi}^{\pi} |f(x)|^2 dx = \sum_{n=-\infty}^{\infty} |c_n|^2 = \frac{a_0^2}{4} + \frac{1}{2} \sum_{n=1}^{\infty} (a_n^2 + b_n^2)" />
                <p>
                    これは「時間領域の総エネルギー」が「周波数領域の成分のエネルギーの和」に完全に等しいことを示している。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 1.3-1 の <InlineMath math="L^2" /> 収束により、<InlineMath math="\| f - S_N f \|_2 \to 0" /> である。したがって、
                </p>
                <BlockMath math="\| f \|_2^2 = \lim_{N \to \infty} \| S_N f \|_2^2" />
                <p>
                    複素形式の場合に <InlineMath math="\| S_N f \|_2^2" /> を計算すると：
                </p>
                <BlockMath math="\begin{aligned} &\int_{-\pi}^{\pi} \left( \sum_{n=-N}^N c_n e^{inx} \right) \left( \sum_{m=-N}^N \overline{c_m} e^{-imx} \right) dx \\ &\quad = \sum_{n, m} c_n \overline{c_m} \int_{-\pi}^{\pi} e^{i(n-m)x} dx \end{aligned}" />
                <p>
                    直交性により <InlineMath math="n = m" /> の項のみが残り、積分値は <InlineMath math="2\pi" /> となるので、
                </p>
                <BlockMath math="\| S_N f \|_2^2 = 2\pi \sum_{n=-N}^N |c_n|^2" />
                <p>
                    これより、<InlineMath math="N \to \infty" /> でパーセバルの等式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この等式を用いると、驚くべきことに、円周率に関わる無限級数の和を求めることができます。
            </p>

            <ContentBox type="example" title="Example 1.3-2 (バーゼル問題への到達)">
                <p>
                    <InlineMath math="f(x) = x \quad (-\pi < x < \pi)" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>左辺（関数のエネルギー）： <InlineMath math="\frac{1}{2\pi} \int_{-\pi}^{\pi} x^2 dx = \frac{1}{2\pi} \left[ \frac{x^3}{3} \right]_{-\pi}^{\pi} = \frac{\pi^2}{3}" /></li>
                    <li>右辺（フーリエ係数の和）： フーリエ係数は <InlineMath math="b_n = \frac{2(-1)^{n+1}}{n}, a_n = 0" /> であったから、<InlineMath math="\frac{1}{2} \sum_{n=1}^{\infty} b_n^2 = \frac{1}{2} \sum_{n=1}^{\infty} \frac{4}{n^2} = 2 \sum_{n=1}^{\infty} \frac{1}{n^2}" /></li>
                </ul>
                <p>
                    これらを等置すると：
                </p>
                <BlockMath math="\frac{\pi^2}{3} = 2 \sum_{n=1}^{\infty} \frac{1}{n^2} \implies \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}" />
                <p>
                    これはオイラーが解決した有名な「バーゼル問題」の解答そのものです。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-3 (別の級数公式)">
                <p>
                    矩形波 <InlineMath math="f(x) = \text{sgn}(x)" /> にパーセバルの等式を適用すると：
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>左辺： <InlineMath math="\frac{1}{2\pi} \int_{-\pi}^{\pi} 1 dx = 1" /></li>
                    <li>右辺： 正弦係数は奇数のとき <InlineMath math="b_n = \frac{4}{n\pi}" /> であったから、<InlineMath math="\frac{1}{2} \sum_{n \in \text{odd}} \left(\frac{4}{n\pi}\right)^2 = \frac{8}{\pi^2} \sum_{n \in \text{odd}} \frac{1}{n^2}" /></li>
                </ul>
                <p>
                    したがって、
                </p>
                <BlockMath math="\sum_{n=1, 3, 5, \dots} \frac{1}{n^2} = \frac{\pi^2}{8}" />
                <p>
                    が得られます。これも数論的に興味深い結果です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>二乗可積分関数に対し、フーリエ級数は「エネルギーの意味（平均二乗誤差）」で常に収束する。</li>
                    <li>パーセバルの等式は、信号の総和エネルギーが各周波数成分の二乗和として分解できることを示している。</li>
                    <li>パーセバルの等式を利用することで、バーゼル問題のような無限級数の値を厳密に計算できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
