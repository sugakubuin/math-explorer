import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HeatKernelProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                熱方程式のすべての解は、一つの特別な解から構成されます。
                それが<b>基本解</b>または<b>熱核</b>（Heat Kernel）と呼ばれるガウス関数形式の関数です。
                熱核を理解することは、拡散現象を微視的な情報の広がりとして捉えるための鍵となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">熱核の導出</h2>

            <p className="leading-relaxed">
                熱核は、熱方程式が持つ「時間と空間に関するスケーリングの対称性」を利用して導かれます。
            </p>

            <ContentBox type="definition" title="Definition 7.2-1 (熱核 / 基本解)">
                <p>
                    1 次元熱方程式 <InlineMath math="u_t = k u_{xx}" /> の<b>基本解</b>（または<b>熱核</b>）を次のように定義する：
                    <BlockMath math="K(x, t) = \frac{1}{\sqrt{4\pi kt}} e^{-\frac{x^2}{4kt}} \quad (t > 0)" />
                    この関数は <InlineMath math="t \to 0^+" /> でディラックのデルタ関数 <InlineMath math="\delta(x)" /> に収束し、
                    一点に集中した熱が時間とともに周囲へ広がっていく様子を記述している。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="定義の理由">
                <p>
                    自己相似解（スケーリング不変な解）の仮定 <InlineMath math="u(x, t) = t^{-1/2} v(x t^{-1/2})" /> を熱方程式に代入する。
                    <InlineMath math="\xi = x t^{-1/2}" /> とおくと、<InlineMath math="v(\xi)" /> に関する常微分方程式
                    <BlockMath math="v''(\xi) + \frac{1}{2k}(\xi v(\xi))' = 0" />
                    が得られる。これを積分すると <InlineMath math="v(\xi) = C e^{-\xi^2/4k}" /> となり、
                    全エネルギーの保存条件 <InlineMath math="\int_{-\infty}^{\infty} K(x, t) dx = 1" /> から定数 <InlineMath math="C = 1/\sqrt{4\pi k}" /> が定まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.2-1 (熱核の具体的計算と形状)">
                <p>
                    <InlineMath math="k = 1" /> とし、いくつかの時刻での形状を比較する。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <InlineMath math="t = 0.01" />：原点付近で極めて高く鋭いガウス曲線。
                    </li>
                    <li>
                        <InlineMath math="t = 1.0" />：より低く、横に広がった形状。
                    </li>
                </ul>
                <p>
                    時間が経つにつれて温度のピークは下がり（<InlineMath math="t^{-1/2}" /> に比例）、
                    広がりの幅は大きくなっていく（<InlineMath math="t^{1/2}" /> に比例）。
                    それにかかわらず、曲線の下側の面積は常に 1 で保たれる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">熱核の性質</h2>

            <p className="leading-relaxed">
                熱核は数学的に非常に美しい「積」の性質を持っており、これが拡散の時間発展を記述する「半群性」の基礎となります。
            </p>

            <ContentBox type="proposition" title="Proposition 7.2-1 (熱核の積の性質と畳み込み)">
                <p>
                    熱核 <InlineMath math="K" /> に関して、次の関係が成立する：
                    <BlockMath math="K(\cdot, t) * K(\cdot, s) = K(\cdot, t+s)" />
                    ここで記号 <InlineMath math="*" /> は空間に関する畳み込み（コンボリューション）を表す。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    畳み込みの定義より、左辺は次の積分で与えられる：
                    <BlockMath math="\begin{aligned} &\int_{-\infty}^{\infty} K(x-y, t) K(y, s) dy \\ &= \int_{-\infty}^{\infty} \frac{1}{\sqrt{4\pi kt} \sqrt{4\pi ks}} e^{-\frac{(x-y)^2}{4kt} - \frac{y^2}{4ks}} dy \end{aligned}" />
                    指数の肩の部分を <InlineMath math="y" /> について平方完成し、ガウス積分を実行する。
                    その結果、係数は <InlineMath math="1/\sqrt{4\pi k(t+s)}" /> となり、指数の形も <InlineMath math="e^{-x^2/4k(t+s)}" /> と一致することを確認できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="半群性（Semi-group Property）と物理的意味">
                <p>
                    この積の性質は、「<InlineMath math="s" /> 時間おいてから <InlineMath math="t" /> 時間拡散させること」は、
                    最初から「<InlineMath math="t+s" /> 時間拡散させること」と等価であることを意味している。
                    これは拡散方程式の時間発展がマルコフ過程であることを示唆しており、
                    関数解析における「熱半群」の概念へと繋がっていく。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、この熱核を組み合わせて、一般的な初期状態から出発した熱方程式の解を具体的に構成する方法を学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>熱方程式の基本解である「熱核」は、ガウス関数によって与えられる。</li>
                    <li>熱核はスケーリングの対称性から自己相似解として導き出すことができる。</li>
                    <li>時間が経つにつれてピークが下がり、幅が広がるが、全体の面積（総熱量）は 1 に保たれる。</li>
                    <li>熱核同士の畳み込みは再び熱核となり、拡散の時間発展が半群の構造を持つことを示している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
