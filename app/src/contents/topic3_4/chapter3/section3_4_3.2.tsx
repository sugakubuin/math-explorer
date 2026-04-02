import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FourierInverseTransformAndInversion() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「ある関数がどのような周波数成分で構成されているか」を抽出するのがフーリエ変換であるならば、その成分表から元の関数を寸分違わず再構成するのが「逆フーリエ変換」です。本節では、変換と逆変換のペアがいつ完全に一致するのか、そしてその計算上の数学的な注意点について詳しく学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆フーリエ変換の定義</h2>

            <p>
                「ある関数がどのような周波数成分で構成されているか」を抽出するのがフーリエ変換であるならば、その成分表から元の関数を再構成するのが「逆フーリエ変換」です。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (逆フーリエ変換)">
                <p>
                    周波数領域の関数 <InlineMath math="g(\xi)" /> に対し、その <b>逆フーリエ変換</b> <InlineMath math="\mathcal{F}^{-1}[g](x)" /> （または <InlineMath math="\check{g}(x)" />）を次のように定義する。
                </p>
                <BlockMath math="\check{g}(x) = \mathcal{F}^{-1}[g](x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} g(\xi) e^{i\xi x} d\xi" />
                <p>
                    積分の符号がプラスになり、全体に係数 <InlineMath math="1/2\pi" /> が掛かる点に注意が必要です。
                </p>
            </ContentBox>

            <p>
                具体例として、周波数領域で指数的に減衰する信号を時間領域に戻してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.2-1 (g(ξ) = e^{-|ξ|} の逆変換)">
                <p>
                    周波数領域で指数減衰する成分の逆変換を計算する。
                </p>
                <BlockMath math="\begin{aligned} \mathcal{F}^{-1}[e^{-|\xi|}](x) &= \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-|\xi|} e^{i\xi x} d\xi \\ &= \frac{1}{2\pi} \left( \int_{-\infty}^{0} e^{\xi} e^{i\xi x} d\xi + \int_{0}^{\infty} e^{-\xi} e^{i\xi x} d\xi \right) \\ &= \frac{1}{2\pi} \left( \frac{1}{1+ix} + \frac{1}{1-ix} \right) = \frac{1}{\pi(1+x^2)} \end{aligned}" />
                <p>
                    結果は <b>ポアソン核</b> （またはコーシー分布）と呼ばれる分布になります。
                </p>
            </ContentBox>

            <p>
                定義式の形を比較すると、変換と逆変換の間には強い対称性が存在することがわかります。
            </p>

            <ContentBox type="remark" title="フーリエ変換と逆変換の非対称性と双対性">
                <p>
                    変換と逆変換を二回繰り返したとき、元の関数と「符号の反転」および「係数 <InlineMath math="2\pi" /> 」のごく僅かな差が生じます。
                </p>
                <BlockMath math="\mathcal{F}[\mathcal{F}[f]](x) = 2\pi f(-x)" />
                <p>
                    これは <b>双対性（Duality）</b> と呼ばれ、時間領域と周波数領域の本質的な対等性を示しています。この性質を利用すれば、一方の変換結果から他方の変換結果を直ちに導くことができます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">反転公式と適用範囲</h2>

            <p>
                どのような条件のもとで、フーリエ変換したものを逆変換して元の関数が正確に復元されるのでしょうか。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-2 (フーリエの反転公式)">
                <p>
                    関数 <InlineMath math="f(x)" /> が積分可能（<InlineMath math="f \in L^1" />）であり、かつそのフーリエ変換 <InlineMath math="\hat{f}(\xi)" /> もまた積分可能（<InlineMath math="\hat{f} \in L^1" />）であるならば、ほとんど至る所で次が成り立つ。
                </p>
                <BlockMath math="\mathcal{F}^{-1}[\hat{f}](x) = f(x)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof (ガウス核による正則化)">
                <p>
                    逆変換の定義にフーリエ変換を直接代入すると、積分順序の交換が正当化できない発散積分が現れます。これを避けるため、収束因子としてガウス核 <InlineMath math="e^{-\epsilon \xi^2}" /> を挿入します。
                </p>
                <BlockMath math="f_\epsilon(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-\epsilon \xi^2} e^{i\xi x} \left( \int_{-\infty}^{\infty} f(t) e^{-i\xi t} dt \right) d\xi" />
                <p>
                    フビニの定理により積分順序を交換し、<InlineMath math="\xi" /> に関する積分を実行すると、ガウス関数のフーリエ変換（§3.5）の性質より、
                </p>
                <BlockMath math="f_\epsilon(x) = \int_{-\infty}^{\infty} f(t) \left( \frac{1}{\sqrt{4\pi\epsilon}} e^{-\frac{(x-t)^2}{4\epsilon}} \right) dt" />
                <p>
                    が得られます。括弧内は <b>熱核（ガウス核）</b> と呼ばれるアプロキシメート単位（近似単位）を構成しており、<InlineMath math="\epsilon \to 0" /> の極限でデルタ関数へと収束します。したがって、<InlineMath math="f" /> が連続な点では <InlineMath math="f_\epsilon(x) \to f(x)" /> となり、反転が証明されます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-2 (f(x) = e^{-|x|} の反転確認)">
                <p>
                    §3.1 で計算した通り、<InlineMath math="\hat{f}(\xi) = 2/(1+\xi^2)" /> です。これは <InlineMath math="\xi \to \pm \infty" /> で <InlineMath math="1/\xi^2" /> の速さで減衰するため、<InlineMath math="L^1(\mathbb{R})" /> に属します。したがって反転公式が適用でき、逆変換によって <InlineMath math="e^{-|x|}" /> が復元されます。
                </p>
            </ContentBox>

            <p>
                しかし、すべての関数でこの反転公式がそのまま使えるわけではありません。
            </p>

            <ContentBox type="example" title="Example 3.2-3 (逆変換公式がそのまま使えない例)">
                <p>
                    矩形パルス <InlineMath math="f = \mathbf{1}_{[-1,1]}" /> を考えます。そのフーリエ変換は <InlineMath math="\hat{f}(\xi) = 2\sin\xi/\xi" /> （sinc 関数）ですが、この関数は <b>絶対積分可能ではありません</b> （<InlineMath math="\int |\text{sinc } \xi| d\xi = \infty" />）。
                </p>
                <p>
                    このため、単純な <InlineMath math="L^1" /> の枠組みでは反転公式を直接適用することができません。このような「ゆっくりとしか減衰しない」スペクトルを持つ関数（特に関数自体が不連続なもの）を厳密に扱うには、後述する <b><InlineMath math="L^2" /> 理論</b> や超関数の知識が必要となります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="L^1 反転公式の限界と次のステップ">
                <p>
                    反転公式において「<InlineMath math="\hat{f} \in L^1" />」という条件は非常に強力であり、多くの物理的信号（矩形波など）を排除してしまいます。このため、第4節で学ぶ <b>プランシュレルの定理（L^2 理論）</b> が、現代的なフーリエ解析の基盤として極めて重要になります。そこでは、エネルギーの保存という物理的な観点から反転が正当化されます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>逆フーリエ変換は、特定の係数と符号のルールに従って情報を元に戻す。</li>
                    <li>双対性により、時間領域の計算と周波数領域の計算は実質的に互換性を持つ。</li>
                    <li>反転定理が成立するためには、元の関数と変換後の関数の両方が「積分可能」であることが一つの十分条件である。</li>
                    <li>不連続関数のようなスペクトル減衰が遅いケースでは、<InlineMath math="L^1" /> の枠内では反転に注意が必要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
