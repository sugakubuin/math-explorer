import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PointwiseConvergenceAndDirichletTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節ではフーリエ級数を形式的に定義しましたが、この級数が果たしてどの程度元の関数を「再現」できているのかを考える必要があります。本節では、有限項までの和である「部分和」の挙動を、特殊な関数である「ディリクレ核」を用いて解析し、各点での収束条件を保証する「ディリクレの定理」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分和とディリクレ核</h2>

            <p>
                無限級数をそのまま扱うのは難しいため、まずは有限の項数 <InlineMath math="N" /> までの和（部分和）を定めます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (フーリエ部分和)">
                <p>
                    関数 <InlineMath math="f" /> の <InlineMath math="N" /> 次フーリエ部分和 <InlineMath math="S_N f(x)" /> を次のように定義する。
                </p>
                <BlockMath math="S_N f(x) = \sum_{n=-N}^{N} c_n e^{inx}" />
            </ContentBox>

            <p>
                項数 <InlineMath math="N" /> を増やすほど、元の関数への近似が良くなっていく様子をイメージしてみましょう。
            </p>

            <ContentBox type="example" title="Example 1.2-1 (f(x) = x の部分和)">
                <p>
                    前節で求めた <InlineMath math="f(x) = x" /> のフーリエ展開において、低次の部分和は以下のようになります。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="S_1 f(x) = 2\sin x" /></li>
                    <li><InlineMath math="S_2 f(x) = 2\sin x - \sin 2x" /></li>
                    <li><InlineMath math="S_3 f(x) = 2\sin x - \sin 2x + \frac{2}{3}\sin 3x" /></li>
                </ul>
                <p>
                    <InlineMath math="N=1" /> では単純な波ですが、<InlineMath math="N" /> が大きくなるにつれて <InlineMath math="x" /> という直線に近い形へと「合成」されていく様子が見て取れます。
                </p>
            </ContentBox>

            <p>
                この部分和の挙動を統一的に記述するために、非常に強力な道具である「ディリクレ核」を導入します。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (ディリクレ核)">
                <p>
                    整数 <InlineMath math="N" /> に対して、次の関数を「ディリクレ核」と呼ぶ。
                </p>
                <BlockMath math="D_N(x) = \sum_{n=-N}^{N} e^{inx} = \frac{\sin\left((N+1/2)x\right)}{\sin(x/2)}" />
                <p>
                    この核を用いると、部分和は畳み込みの形で <InlineMath math="S_N f(x) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x-t)D_N(t) dt" /> と表せる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2 (D₁ の確認)">
                <p>
                    <InlineMath math="N=1" /> のとき、定義式より、
                </p>
                <BlockMath math="D_1(x) = e^{-ix} + 1 + e^{ix} = 1 + 2\cos x" />
                <p>
                    となります。これを公式に代入すると、
                </p>
                <BlockMath math="\begin{aligned} \frac{\sin(3x/2)}{\sin(x/2)} &= \frac{3\sin(x/2) - 4\sin^3(x/2)}{\sin(x/2)} \\ &= 3 - 4\sin^2(x/2) \\ &= 3 - 2(1 - \cos x) \\ &= 1 + 2\cos x \end{aligned}" />
                <p>
                    となり、一致することを確認できます。<InlineMath math="D_N(0) = 2N+1" /> が最大値であり、中心が非常に高く、周囲が振動する特徴を持ちます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ディリクレ核が「暴れる」理由">
                <p>
                    ディリクレ核は、積分値が常に <InlineMath math="2\pi" /> ですが、関数値そのものは周期的に正負を繰り返します。この「激しい振動」が、フーリエ級数が滑らかでない関数の付近で一様に収束することを阻む数学的な原因となっています（後述するギブス現象などに関連します）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">各点収束定理と具体例</h2>

            <p>
                さて、いよいよどのような点であればフーリエ級数が元の関数の値に収束するのか、という根本的な問いに答える定理を紹介します。
            </p>

            <ContentBox type="theorem" title="Theorem 1.2-3 (ディリクレの各点収束定理)">
                <p>
                    周期 <InlineMath math="2\pi" /> の関数 <InlineMath math="f(x)" /> が、各区間で連続かつ微分可能（区分的 <InlineMath math="C^1" /> 級）であるとする。
                </p>
                <p>
                    このとき、フーリエ部分和 <InlineMath math="S_N f(x)" /> は <InlineMath math="N \to \infty" /> で次の値に収束する。
                </p>
                <BlockMath math="\lim_{N \to \infty} S_N f(x) = \frac{f(x^+) + f(x^-)}{2}" />
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="x" /> が連続点ならば、<InlineMath math="f(x)" /> 自身に収束する。</li>
                    <li><InlineMath math="x" /> が不連続点ならば、その点における左右の極限値の「中点」に収束する。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof (アウトライン)">
                <p>
                    部分和と収束目標値の差を取り、ディリクレ核を用いた表示を行う。
                </p>
                <BlockMath math="\begin{aligned} &S_N f(x) - \frac{f(x^+) + f(x^-)}{2} \\ &= \frac{1}{\pi} \int_0^{\pi} \left[ \frac{f(x+t) + f(x-t)}{2} - \frac{f(x^+) + f(x^-)}{2} \right] D_N(t) dt \end{aligned}" />
                <p>
                    被積分関数が <InlineMath math="t \to 0" /> で有界（<InlineMath math="f" /> が区分的 <InlineMath math="C^1" /> であるため）であることを利用し、リーマン・ルベーグの補題（周波数が高くなると積分値がゼロになる性質）を適用することで、この積分が <InlineMath math="N \to \infty" /> でゼロに収束することを示す。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理によって、不連続点での挙動が明確に規定されます。
            </p>

            <ContentBox type="example" title="Example 1.2-3 (矩形波の各点収束)">
                <p>
                    <InlineMath math="f(x) = \text{sgn}(x)" /> の場合を考えます。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>不連続点 <InlineMath math="x=0" /> において、<InlineMath math="f(0^+) = 1, f(0^-) = -1" /> です。</li>
                    <li>ディリクレの定理によれば、フーリエ級数は <InlineMath math="(1 + (-1))/2 = 0" /> に収束します。</li>
                    <li>実際に、矩形波の級数展開 <InlineMath math="\frac{4}{\pi}(\sin x + \cdots)" /> に <InlineMath math="x=0" /> を代入すると、すべての項が 0 になり、確かに 0 へと収束します。</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-4 (f(x) = x の各点収束と端点)">
                <p>
                    <InlineMath math="f(x) = x \quad (-\pi < x < \pi)" /> を周期拡張した関数の、端点 <InlineMath math="x = \pi" /> での挙動を調べます。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>左からの極限は <InlineMath math="f(\pi^-) = \pi" /> です。</li>
                    <li>周期性により、右からの極限は「一周期前」の左端の極限に相当するため、<InlineMath math="f(\pi^+) = f(-\pi^+) = -\pi" /> です。</li>
                    <li>したがって、収束先は <InlineMath math="(\pi + (-\pi))/2 = 0" /> となります。</li>
                </ul>
                <p>
                    不連続点であっても、フーリエ級数は「もっともらしい平均値」へと私たちを導いてくれることがわかります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>フーリエ部分和 <InlineMath math="S_N f(x)" /> は、ディリクレ核 <InlineMath math="D_N" /> との畳み込みで表される。</li>
                    <li>ディリクレ核は中心付近で鋭いピークを持ち、激しく振動する。</li>
                    <li>ディリクレの定理は、区分的 <InlineMath math="C^1" /> 関数に対し、連続点では関数値へ、不連続点では左右極限の平均値への収束を保証する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
