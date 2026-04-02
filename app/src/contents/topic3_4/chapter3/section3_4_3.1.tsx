import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FourierTransformDefinitionAndProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで扱ってきたフーリエ級数は、周期的な現象を記述するための強力な道具でした。しかし、単発のパルスや減衰する信号など、周期性を持たない一般の関数を解析するためには、周期を無限大に引き伸ばす極限を考える必要があります。本節では、非周期関数の周波数解析の基本となる「フーリエ変換」の定義とその広範な性質について学びます。
            </p>

            <ContentBox type="remark" title="フーリエ級数からの移行（直感的背景）">
                <p>
                    周期 <InlineMath math="2L" /> のフーリエ級数において、離散的な周波数を <InlineMath math="\xi_n = \frac{n\pi}{L}" /> とおくと、隣り合う周波数の間隔は <InlineMath math="\Delta \xi = \frac{\pi}{L}" /> となります。<InlineMath math="L \to \infty" /> とすると、この間隔は 0 に近づき、離散的な和は連続的な積分へと変化します。この極限操作の結果として得られるのが、以下のフーリエ変換の定義です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フーリエ変換の定義とリーマン・ルベーグの補題</h2>

            <p>
                まず、<InlineMath math="L^1" /> 関数に対するフーリエ変換を厳密に定義し、その基本的な数学的性質を確認します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (フーリエ変換)">
                <p>
                    関数 <InlineMath math="f \in L^1(\mathbb{R})" /> に対し、その <b>フーリエ変換</b> <InlineMath math="\hat{f}(\xi)" /> を次のように定義する。
                </p>
                <BlockMath math="\hat{f}(\xi) = \mathcal{F}[f](\xi) = \int_{-\infty}^{\infty} f(x) e^{-i\xi x} dx" />
                <p>
                    ここで <InlineMath math="\xi" /> は実数であり、物理的には角周波数に対応する。
                </p>
            </ContentBox>

            <p>
                この定義の具体的な計算例として、基本的な指数減衰関数を考えてみましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-1 (f(x) = e^{-|x|} のフーリエ変換)">
                <p>
                    両側に指数減衰する関数のフーリエ変換を計算する。
                </p>
                <BlockMath math="\begin{aligned} \hat{f}(\xi) &= \int_{-\infty}^{0} e^{x} e^{-i\xi x} dx + \int_{0}^{\infty} e^{-x} e^{-i\xi x} dx \\ &= \left[ \frac{e^{(1-i\xi)x}}{1-i\xi} \right]_{-\infty}^{0} + \left[ \frac{e^{-(1+i\xi)x}}{-(1+i\xi)} \right]_{0}^{\infty} \\ &= \frac{1}{1-i\xi} + \frac{1}{1+i\xi} = \frac{2}{1+\xi^2} \end{aligned}" />
                <p>
                    結果は <b>ローレンツ型</b> と呼ばれる山形の関数となり、<InlineMath math="\xi = 0" /> で最大値 <InlineMath math="\int e^{-|x|}dx = 2" /> をとる。
                </p>
            </ContentBox>

            <p>
                フーリエ変換が解析的な関数としてどのような振る舞いをするかについては、次の重要な補題が基礎となります。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-2 (リーマン・ルベーグの補題)">
                <p>
                    <InlineMath math="f \in L^1(\mathbb{R})" /> ならば、そのフーリエ変換 <InlineMath math="\hat{f}(\xi)" /> は連続であり、無限遠で消滅する。
                </p>
                <BlockMath math="\lim_{|\xi| \to \infty} \hat{f}(\xi) = 0" />
                <p>
                    これは、非常に高い周波数成分（激しく振動する成分）は、積分の平均化効果によって相殺され、実質的にゼロになることを意味しています。
                </p>
            </ContentBox>

            <p>
                不連続な関数であっても、この補題は成り立ちます。矩形パルスを例に確認します。
            </p>

            <ContentBox type="example" title="Example 3.1-2 (矩形パルスのフーリエ変換と減衰)">
                <p>
                    <InlineMath math="f = \mathbf{1}_{[0,1]}" /> （区間 [0,1] で 1、他で 0）のとき、
                </p>
                <BlockMath math="\hat{f}(\xi) = \int_{0}^{1} e^{-i\xi x} dx = \frac{e^{-i\xi}-1}{-i\xi}" />
                <p>
                    この絶対値をとると <InlineMath math="|\hat{f}(\xi)| = \left| \frac{\sin(\xi/2)}{\xi/2} \right|" /> であり、<InlineMath math="|\xi| \to \infty" /> で確かに 0 に収束します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">推移則・スケール変換則・微分との交換則</h2>

            <p>
                フーリエ変換の最大の利点の一つは、時間領域における単純な操作が、周波数領域において非常に規則的な代数操作に対応することです。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-3 (推移則と変調則)">
                <p>
                    <InlineMath math="f(x)" /> のフーリエ変換を <InlineMath math="\hat{f}(\xi)" /> とするとき、以下が成り立つ。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><b>推移則</b>: <InlineMath math="\mathcal{F}[f(x-a)](\xi) = e^{-ia\xi} \hat{f}(\xi)" /></li>
                    <li><b>変調則</b>: <InlineMath math="\mathcal{F}[e^{iax}f(x)](\xi) = \hat{f}(\xi-a)" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof (推移則)">
                <p>
                    定義式における変数変換 <InlineMath math="y = x-a" /> （<InlineMath math="dx = dy" />）を用いる。
                </p>
                <BlockMath math="\begin{aligned} \mathcal{F}[f(x-a)](\xi) &= \int_{-\infty}^{\infty} f(x-a) e^{-i\xi x} dx \\ &= \int_{-\infty}^{\infty} f(y) e^{-i\xi (y+a)} dy \\ &= e^{-ia\xi} \int_{-\infty}^{\infty} f(y) e^{-i\xi y} dy = e^{-ia\xi} \hat{f}(\xi) \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                時間領域での平行移動が、周波数領域では位相の回転として現れることを具体例で確認しましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-3 (e^{-|x|} の推移)">
                <p>
                    <InlineMath math="f(x) = e^{-|x|}" /> を <InlineMath math="a=1" /> だけ右にずらした関数 <InlineMath math="g(x) = e^{-|x-1|}" /> を考える。推移則より、
                </p>
                <BlockMath math="\hat{g}(\xi) = e^{-i\xi} \hat{f}(\xi) = \frac{2 e^{-i\xi}}{1+\xi^2}" />
                <p>
                    スペクトルの絶対値（振幅）は元の関数のスペクトル <InlineMath math="2/(1+\xi^2)" /> と変わらず、位相のみが <InlineMath math="\xi" /> に比例して回転していることがわかります。
                </p>
            </ContentBox>

            <p>
                次に、時間軸の拡大・縮小が周波数軸に与える影響を見てみます。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-4 (スケール変換則)">
                <p>
                    <InlineMath math="a \neq 0" /> に対し、次が成り立つ。
                </p>
                <BlockMath math="\mathcal{F}[f(ax)](\xi) = \frac{1}{|a|} \hat{f}\left(\frac{\xi}{a}\right)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y = ax" /> と置換する。<InlineMath math="a > 0" /> のとき <InlineMath math="dx = dy/a" />、<InlineMath math="a < 0" /> のときは積分の端が入れ替わり負の符号が出るため、絶対値を用いて次のように書ける。
                </p>
                <BlockMath math="\begin{aligned} \mathcal{F}[f(ax)](\xi) &= \int_{-\infty}^{\infty} f(ax) e^{-i\xi x} dx \\ &= \frac{1}{|a|} \int_{-\infty}^{\infty} f(y) e^{-i\xi (y/a)} dy = \frac{1}{|a|} \hat{f}\left(\frac{\xi}{a}\right) \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この性質は、情報の <b>相補性</b> を示しています。時間領域で縮めれば周波数領域で広がり、その逆もまた然りです。
            </p>

            <ContentBox type="example" title="Example 3.1-4 (ガウス関数のスケール変換比較)">
                <p>
                    後の節で詳しく扱うが、ガウス関数 <InlineMath math="f(x) = e^{-x^2}" /> のフーリエ変換は <InlineMath math="\hat{f}(\xi) = \sqrt{\pi} e^{-\xi^2/4}" /> である。ここで <InlineMath math="a=2" /> とした <InlineMath math="f(2x) = e^{-4x^2}" /> を考えると、スケール変換則より、
                </p>
                <BlockMath math="\mathcal{F}[e^{-4x^2}](\xi) = \frac{1}{2} \hat{f}\left(\frac{\xi}{2}\right) = \frac{\sqrt{\pi}}{2} e^{-\xi^2/16}" />
                <p>
                    時間領域で分布が鋭くなる（標準偏差が半分になる）と、周波数領域での分布は横に広がる（標準偏差が2倍になる）ことがわかります。
                </p>
            </ContentBox>

            <p>
                最後に、微分方程式の解法において最も重要な「微分との交換則」を紹介します。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-5 (微分との交換則)">
                <p>
                    滑らかさ（微分）とモーメント（多項式の積）がフーリエ変換によって入れ替わる。
                </p>
                <BlockMath math="\mathcal{F}[f'(x)](\xi) = i\xi \hat{f}(\xi)" />
                <BlockMath math="\mathcal{F}[xf(x)](\xi) = i \frac{d}{d\xi} \hat{f}(\xi)" />
                <p>
                    すなわち、時間領域での微分操作は、周波数領域では単なる変数 <InlineMath math="\xi" /> の掛け算に置き換わる。これが、フーリエ変換が微分方程式の解法として極めて強力である理由である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (Proposition 3.1-5)">
                <p>
                    第一式について、部分積分を用いる（<InlineMath math="f(x) \to 0" /> を仮定）。
                </p>
                <BlockMath math="\begin{aligned} \mathcal{F}[f'](\xi) &= \int_{-\infty}^{\infty} f'(x) e^{-i\xi x} dx \\ &= [f(x)e^{-i\xi x}]_{-\infty}^{\infty} - \int_{-\infty}^{\infty} f(x) (-i\xi) e^{-i\xi x} dx \\ &= 0 + i\xi \hat{f}(\xi) \end{aligned}" />
                <p>
                    第二式は、定義式を <InlineMath math="\xi" /> で微分することで得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>フーリエ変換は、非周期関数を無限の周波数成分に分解する。</li>
                    <li>リーマン・ルベーグの補題は、スペクトルが高域で必ず減衰することを保証する。</li>
                    <li>推移、相似、微分の諸性質により、物理的な操作（遅延、拡大、変化率）が数学的な代数操作へと読み替えられる。</li>
                    <li>特に「微分の代数化」は、微分方程式を解くための中心的な戦略となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
