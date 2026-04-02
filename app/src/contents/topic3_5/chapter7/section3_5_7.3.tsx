import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HeatInitialValueProblem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                全空間における熱の方程式の一般解は、第 2 節で学んだ熱核を用いることで、非常に簡潔な積分形式で表すことができます。
                この表示式は、初期状態に含まれる「熱の粒」がそれぞれ独立に拡散し、それらが重ね合わされるという直感的な解釈を可能にします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">たたみ込み解の構成</h2>

            <p className="leading-relaxed">
                境界のない無限の領域における初期値問題の解を構成します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (熱方程式の初期値問題の解)">
                <p>
                    初期値問題
                    <BlockMath math="\begin{cases} u_t = k u_{xx} & (x \in \mathbb{R}, \ t > 0) \\ u(x, 0) = f(x) \end{cases}" />
                    において、初期値 <InlineMath math="f" /> が有界かつ連続であるとき、その解は熱核 <InlineMath math="K" /> との畳み込みによって次のように与えられる：
                    <BlockMath math="\begin{aligned} u(x, t) &= \int_{-\infty}^{\infty} K(x-y, t) f(y) dy \\ &= \frac{1}{\sqrt{4\pi kt}} \int_{-\infty}^{\infty} e^{-\frac{(x-y)^2}{4kt}} f(y) dy \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    熱核 <InlineMath math="K(x, t)" /> は <InlineMath math="t > 0" /> で熱方程式を満たしている。積分の線形性から、その重ね合わせである <InlineMath math="u(x, t)" /> も熱方程式を満たす。
                    初期条件の充足に関しては、変数の置換 <InlineMath math="z = (x-y)/\sqrt{4kt}" /> を行うと、
                    <BlockMath math="u(x, t) = \frac{1}{\sqrt{\pi}} \int_{-\infty}^{\infty} e^{-z^2} f(x - \sqrt{4kt}z) dz" />
                    となる。<InlineMath math="t \to 0^+" /> の極限を考えると、被積分関数は <InlineMath math="e^{-z^2} f(x)" /> に収束し、
                    ガウス積分 <InlineMath math="\int e^{-z^2} dz = \sqrt{\pi}" /> から、<InlineMath math="u(x, t) \to f(x)" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.3-1 (ガウス型初期値の拡散)">
                <p>
                    初期値がガウス分布 <InlineMath math="f(x) = e^{-ax^2} \ (a > 0)" /> である場合を考える。
                    このとき解は熱核との畳み込みにより、再びガウス分布となる：
                    <BlockMath math="u(x, t) = \frac{1}{\sqrt{1 + 4kat}} e^{-\frac{ax^2}{1 + 4kat}}" />
                    時刻 <InlineMath math="t" /> とともに分母の項が大きくなるため、分布の幅は広がり、ピークの高さは低くなっていく。
                    拡散が進むにつれて温度分布が水平に均一化していく様子が数学的に確認できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">非同次問題とデュアメルの原理</h2>

            <p className="leading-relaxed">
                外部から熱が加わり続けるような非同次の方程式についても、初期値問題の解法を拡張して適用することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-2 (デュアメルの原理)">
                <p>
                    非同次熱方程式 <InlineMath math="u_t = k u_{xx} + h(x, t)" /> において、初期値がゼロ（<InlineMath math="u(x, 0) = 0" />）である場合の解は次のように与えられる：
                    <BlockMath math="u(x, t) = \int_0^t \left( \int_{-\infty}^{\infty} K(x-y, t-s) h(y, s) dy \right) ds" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    時刻 <InlineMath math="s" /> において外部ソース <InlineMath math="h(y, s)" /> を「新しい初期値」として与え、
                    そこから時刻 <InlineMath math="t" /> まで（時間幅 <InlineMath math="t-s" />）拡散させた解の寄与を足し合わせると考える。
                    実際にこの式を時間 <InlineMath math="t" /> で微分すると、ライプニッツの公式より
                    <BlockMath math="u_t = h(x, t) + \int_0^t \frac{\partial}{\partial t} (K * h) ds" />
                    となり、<InlineMath math="K" /> が熱方程式を満たすことから <InlineMath math="u_t = h + k u_{xx}" /> が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="定数変化法の PDE 版">
                <p>
                    デュアメルの原理は、常微分方程式における「定数変化法」の偏微分方程式版と見なすことができる。
                    右辺のソース項 <InlineMath math="h" /> を瞬間的な衝撃の積み重ねとして捉えるこの手法は、
                    波動方程式においても同様に適用され、力学系の応答解析において極めて強力な道具となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、有限の長さを持つ棒（境界がある領域）において、端点での温度が指定された場合に、
                解がどのように構成され、長時間後にどのような平衡状態に達するかを考察します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>無限領域の初期値問題の解は、初期値と熱核の畳み込みとして表示される。</li>
                    <li>この解の表示は、ガウス積分を通じて初期条件へ収束することが証明される。</li>
                    <li>非同次な熱源が存在する場合、デュアメルの原理によって、各時刻の熱源の寄与を時間積分することで解が構成される。</li>
                    <li>拡散プロセスは線形であるため、初期値の効果と外部熱源の効果を独立に計算して足し合わせることが可能である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
