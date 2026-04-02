import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RepresentativeFourierTransforms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                フーリエ解析の実践においては、理論的な性質の理解とともに、具体的な関数の変換ペアを「語彙」として持っておくことが非常に重要です。本節では、物理学や工学、統計学で中心的な役割を果たす代表的な関数のフーリエ変換を詳しく見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガウス関数（自己相似性）</h2>

            <p>
                ガウス関数は、物理学や統計学において最も「自然な」関数の一つであり、フーリエ変換においても極めて特殊な地位を占めています。
            </p>

            <ContentBox type="example" title="Example 3.5-1 (ガウス関数)">
                <p>
                    <InlineMath math="a > 0" /> に対し、<InlineMath math="f(x) = e^{-ax^2}" /> のフーリエ変換は次のように与えられます。
                </p>
                <BlockMath math="\hat{f}(\xi) = \sqrt{\frac{\pi}{a}} e^{-\frac{\xi^2}{4a}}" />
                <p>
                    ガウス関数のフーリエ変換は、再びガウス関数となる（自己相似）という驚くべき性質を持っています。また、<InlineMath math="a" /> が大きい（時間域で鋭い）ほど、周波数域では緩やかに減衰し、逆もまた然りです。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (微分方程式による導出)">
                <p>
                    <InlineMath math="f'(x) = -2ax f(x)" /> の両辺をフーリエ変換し、微分則（§3.1）を用いる。
                </p>
                <BlockMath math="i\xi \hat{f}(\xi) = -2a \cdot i \frac{d}{d\xi} \hat{f}(\xi) \implies \frac{d\hat{f}}{d\xi} = -\frac{\xi}{2a} \hat{f}" />
                <p>
                    この一階微分方程式を解き、初期値 <InlineMath math="\hat{f}(0) = \int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\pi/a}" /> を用いることで、
                </p>
                <BlockMath math="\hat{f}(\xi) = \sqrt{\frac{\pi}{a}} e^{-\frac{\xi^2}{4a}}" />
                <p>
                    を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">矩形波と sinc 関数</h2>

            <p>
                不連続な関数を変換すると、その「鋭さ」が周波数領域の全域にわたる「豊かな振動」へと読み替えられます。
            </p>

            <ContentBox type="example" title="Example 3.5-2 (矩形波のフーリエ変換)">
                <p>
                    区間 <InlineMath math="[-a, a]" /> で 1、それ以外で 0 となる矩形波 <InlineMath math="f = \mathbf{1}_{[-a,a]}" /> の変換は、
                </p>
                <BlockMath math="\hat{f}(\xi) = \int_{-a}^{a} e^{-i\xi x} dx = \frac{e^{-i\xi a} - e^{i\xi a}}{-i\xi} = \frac{2\sin(a\xi)}{\xi}" />
                <p>
                    となります。これは <b>sinc 関数</b> 系列であり、時間領域の不連続性が周波数領域でのゆっくりとした代数的減衰（<InlineMath math="1/\xi" />）として現れることを示しています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="sinc 関数の L^1 問題再訪">
                <p>
                    sinc 関数 <InlineMath math="\sin\xi/\xi" /> は、無限遠での減衰が遅いため、<b>絶対積分可能ではありません</b>。このため、矩形波の逆変換を単純な <InlineMath math="L^1" /> の枠組みで議論しようとすると、反転公式（Theorem 3.2-2）の前提条件を満たさないという問題に直面します。このギャップを埋めるのが、前節で学んだ <InlineMath math="L^2" /> 理論（エネルギー保存）です。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.5-3 (三角形パルス)">
                <p>
                    矩形波どうしの畳み込みは三角形パルスとなります。畳み込み定理より、そのフーリエ変換は sinc 関数の二乗（<InlineMath math="\text{sinc}^2" /> 型）となります。二乗されることで減衰が <InlineMath math="1/\xi^2" /> と速くなり、かつ符号が常に正となるため、信号処理における強力なフィルタとして利用されます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ポアソン核</h2>

            <p>
                最後に、微分方程式の基本解としても重要な役割を果たすポアソン核について見ます。
            </p>

            <ContentBox type="example" title="Example 3.5-4 (ポアソン核)">
                <p>
                    <InlineMath math="t > 0" /> に対し、<InlineMath math="f(x) = \frac{t}{\pi(x^2+t^2)}" /> のフーリエ変換は次のように求まります。
                </p>
                <BlockMath math="\hat{f}(\xi) = e^{-t|\xi|}" />
                <p>
                    これは §3.2 の逆変換の計算結果と双対をなしており、周波数領域での指数的な減衰が時間領域での「裾の長い」ローレンツ分布に対応することを示しています。
                </p>
            </ContentBox>

            <p>
                この性質を利用して、関数を「平滑化」する操作を具体的に見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.5-5 (ポアソン核による平滑化の計算)">
                <p>
                    不連続な矩形波 <InlineMath math="f = \mathbf{1}_{[-1,1]}" /> とポアソン核 <InlineMath math="P_t" /> の畳み込みを考えます。空間領域での積分は複雑ですが、フーリエ領域では単純な積になります。
                </p>
                <BlockMath math="\mathcal{F}[f * P_t](\xi) = \frac{2\sin\xi}{\xi} \cdot e^{-t|\xi|}" />
                <p>
                    <InlineMath math="t" /> が大きくなるにつれて、sinc 関数の高周波の「揺れ」が指数的に抑制されます。これを逆変換すれば、角が丸く滑らかになった矩形波が得られ、これが熱伝導や拡散のプロセスを記述します。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="平滑化効果とポアソン核">
                <p>
                    ポアソン核との畳み込み <InlineMath math="(f * P_t)(x)" /> は、周波数領域では <InlineMath math="\hat{f}(\xi) e^{-t|\xi|}" /> となる。<InlineMath math="t" /> が大きくなるにつれて高周波成分が指数的にカットされるため、時間領域では関数が急速に滑らかになっていく。これはラプラス方程式の境界値問題において、境界から離れる（<InlineMath math="y > 0" />）ほど解が正則（滑らか）になる現象を数学的に説明している。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.5 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ガウス関数は、変換後もその形状を維持する不確定性関係の極値を与える関数である。</li>
                    <li>矩形波の変換である sinc 関数は、時間領域の「鋭さ」が周波数領域の「広がり」に直結することを示している。</li>
                    <li>ポアソン核は、指数的な高域遮断特性（ローパスフィルタ）を持ち、微分方程式の解の平滑化を司る。</li>
                    <li>これらの基本ペアを習得することで、複雑な積分の計算を、既知の関数の変換結果と諸性質の組み合わせで効率的に行えるようになる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
