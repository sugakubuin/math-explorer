import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvolutionTheoremSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「畳み込み（コンボリューション）」は、信号処理や確率論において最も重要な演算の一つです。一見複雑なこの積分のフーリエ変換を計算すると、驚くほど単純な「周波数ごとの掛け算」になります。本節では、この畳み込み定理の証明と、その物理的・統計的な意味を詳しく見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">畳み込みの定義と L^1 代数構造</h2>

            <p>
                「畳み込み（コンボリューション）」は、信号処理や確率論において最も重要な演算の一つです。一見複雑なこの積分の振る舞いを理解するために、まずはその定義と基本的なノルムの評価を学びます。
            </p>

            <ContentBox type="definition" title="Definition 3.3-1 (畳み込み)">
                <p>
                    2 つの関数 <InlineMath math="f, g" /> に対し、その <b>畳み込み</b> <InlineMath math="(f * g)(x)" /> を次のように定義する。
                </p>
                <BlockMath math="(f * g)(x) = \int_{-\infty}^{\infty} f(x-t) g(t) dt" />
                <p>
                    これは、一方の関数を裏返してずらしながら（<InlineMath math="f(x-t)" />）、もう一方の関数（<InlineMath math="g(t)" />）と掛け合わせて重畳積分する操作を意味しています。
                </p>
            </ContentBox>

            <p>
                具体的な計算例として、最も単純な形状である「箱関数」どうしの畳み込みを見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.3-1 (箱関数の畳み込み)">
                <p>
                    <InlineMath math="f = g = \mathbf{1}_{[0,1]}" /> （単位パルス）の畳み込みを計算すると、
                </p>
                <BlockMath math="(f * g)(x) = \begin{cases} x & (0 \le x < 1) \\ 2-x & (1 \le x \le 2) \\ 0 & (\text{上記以外}) \end{cases}" />
                <p>
                    となり、2つの矩形が重なり合うプロセスを反映した「三角形関数のパルス」が得られます。
                </p>
            </ContentBox>

            <p>
                畳み込みの結果得られる関数の「大きさ（積算値）」については、次の不等式が非常に重要です。
            </p>

            <ContentBox type="proposition" title="Proposition 3.3-2 (L^1 ノルム不等式)">
                <p>
                    <InlineMath math="f, g \in L^1(\mathbb{R})" /> ならば、その畳み込みもまた <InlineMath math="L^1" /> に属し、次が成り立つ。
                </p>
                <BlockMath math="\|f * g\|_1 \le \|f\|_1 \|g\|_1" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    積分の順序を入れ替える（フビニの定理）ことで導かれます。
                </p>
                <BlockMath math="\begin{aligned} \|f * g\|_1 &= \int_{-\infty}^{\infty} |\int_{-\infty}^{\infty} f(x-t) g(t) dt| dx \\ &\le \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} |f(x-t)| dx \right) |g(t)| dt \\ &= \int_{-\infty}^{\infty} \|f\|_1 |g(t)| dt = \|f\|_1 \|g\|_1 \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この不等式において、実際に等号が成立するケースを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.3-2 (ノルム不等式の等号成立例)">
                <p>
                    <InlineMath math="f = g = \mathbf{1}_{[0,1]}" /> のとき、<InlineMath math="\|f\|_1 = 1, \|g\|_1 = 1" /> です。このとき、畳み込み結果である三角形関数の面積は、
                </p>
                <BlockMath math="\int_{0}^{2} (f*g)(x) dx = \int_{0}^{1} x dx + \int_{1}^{2} (2-x) dx = \frac{1}{2} + \frac{1}{2} = 1" />
                <p>
                    となり、確かに <InlineMath math="\|f*g\|_1 = \|f\|_1 \|g\|_1" /> が成立しています。一般に非負の関数の畳み込みでは等号が成立します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">畳み込み定理と応用</h2>

            <p>
                畳み込み演算の真価は、フーリエ変換と組み合わせることで発揮されます。一見複雑な積分のフーリエ変換を計算すると、驚くほど単純な「周波数ごとの掛け算」になります。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-3 (畳み込み定理)">
                <p>
                    二つの関数の畳み込みのフーリエ変換は、それぞれのフーリエ変換の <b>積</b> に等しい。
                </p>
                <BlockMath math="\mathcal{F}[f * g](\xi) = \hat{f}(\xi) \cdot \hat{g}(\xi)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定義に従い、フビニの定理と推移則（§3.1）を用います。
                </p>
                <BlockMath math="\begin{aligned} \mathcal{F}[f * g](\xi) &= \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} f(x-t) g(t) dt \right) e^{-i\xi x} dx \\ &= \int_{-\infty}^{\infty} g(t) \left( \int_{-\infty}^{\infty} f(x-t) e^{-i\xi x} dx \right) dt \\ &= \int_{-\infty}^{\infty} g(t) e^{-i\xi t} \hat{f}(\xi) dt = \hat{f}(\xi) \hat{g}(\xi) \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理を用いると、時間領域での複雑な積分計算を回避できます。
            </p>

            <ContentBox type="example" title="Example 3.3-3 (箱関数の畳み込みをフーリエ変換で計算)">
                <p>
                    <InlineMath math="f = \mathbf{1}_{[0,1]}" /> のフーリエ変換は <InlineMath math="\hat{f}(\xi) = (e^{-i\xi}-1)/(-i\xi)" /> でした。これより、三角形関数 <InlineMath math="f*f" /> のフーリエ変換は、
                </p>
                <BlockMath math="\mathcal{F}[f*f](\xi) = \left( \frac{e^{-i\xi}-1}{-i\xi} \right)^2 = e^{-i\xi} \left( \frac{\sin(\xi/2)}{\xi/2} \right)^2" />
                <p>
                    となります。これは sinc 関数の二乗型スペクトルであり、三角形関数の形状（滑らかさの向上）が周波数領域での減衰の速さ（<InlineMath math="1/\xi^2" />）に対応していることがわかります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-4 (ガウス分布の再生性)">
                <p>
                    2つの独立な正規分布（ガウス関数）の和の分布は、それぞれの密度の畳み込みで計算される。フーリエ変換（特性関数）を用いると、ガウス関数の積はやはりガウス関数の形を保つため、ここから「正規分布の和は正規分布になる」という確率論の重要な性質が容易に示される。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="フィルタリングの原理">
                <p>
                    線形システムにおいて、出力は「入力信号」と「システムのインパルス応答」の畳み込みとなる。畳み込み定理によれば、出力のスペクトルは入力のスペクトルにシステムの <b>周波数応答</b> を掛けるだけで求まる。特定のノイズ（高周波）成分のみをゼロにしたい場合、その帯域でゲインが 0 となる特性を「掛ける」だけで、所望のフィルタリングが実現できる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>畳み込みは、2つの信号が「物理的に重なり合い、混ざり合う」プロセスを数学的に記述する。</li>
                    <li>L^1 ノルムの評価により、安定な2つの信号の畳み込みは再び安定な信号になることが保証される。</li>
                    <li>畳み込み定理は、微積分と代数を繋ぐフーリエ解析の「一丁目一番地」の定理である。</li>
                    <li>この定理こそが、現代のデジタル信号処理における高速フィルタリング（FFT フィルタ）の根拠となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
