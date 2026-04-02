import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FourierSeriesCalculus() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                無限級数を扱う際、最も注意を要する操作の一つが、級数の各項を個別に微分したり積分したりする「項別微積分」です。フーリエ級数は、関数を周波数の成分に分解しているため、微積分という操作が周波数領域では「周波数の掛け算・割り算」という非常にシンプルな代数的計算に置き換わります。本節では、この項別微積分の許容条件と、関数の滑らかさが係数の減衰速度にいかに現れるかを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">項別積分と項別微分</h2>

            <p>
                積分は「平滑化」の操作であるため、級数の収束性を改善します。そのため、フーリエ級数の項別積分は非常に広い範囲で許容されます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (項別積分)">
                <p>
                    周期 <InlineMath math="2\pi" /> の可積分関数 <InlineMath math="f \in L^1([-\pi, \pi])" /> に対し、そのフーリエ級数は常に項別積分可能である。
                </p>
                <BlockMath math="\int_a^x f(t) dt = \int_a^x c_0 dt + \sum_{n \neq 0} c_n \int_a^x e^{int} dt" />
                <p>
                    ここで、右辺の級数は <InlineMath math="x" /> について一様に収束する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (アウトライン)">
                <p>
                    積分によって新しく作られた関数 <InlineMath math="F(x) = \int_0^x (f(t) - c_0) dt" /> は連続かつ周期関数となる。
                </p>
                <p>
                    この <InlineMath math="F(x)" /> のフーリエ係数を部分積分を用いて計算すると、元の関数の係数 <InlineMath math="c_n" /> を用いて <InlineMath math="c_n / (in)" /> と表せる。分母に <InlineMath math="n" /> が現れることで級数の収束性が強まり、ワイエルシュトラスの M 判定法などを用いて一様収束が証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1 (f(x) = x の級数の積分)">
                <p>
                    <InlineMath math="f(x) = x \sim 2 \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} \sin nx" /> を <InlineMath math="[0, x]" /> で積分します。
                </p>
                <BlockMath math="\begin{aligned} \int_0^x t dt &= \sum_{n=1}^{\infty} \frac{2(-1)^{n+1}}{n} \int_0^x \sin nt dt \\ \frac{x^2}{2} &= \sum_{n=1}^{\infty} \frac{2(-1)^{n+1}}{n} \left[ -\frac{\cos nt}{n} \right]_0^x \\ &= \sum_{n=1}^{\infty} \frac{2(-1)^{n+1}}{n^2} (1 - \cos nx) \end{aligned}" />
                <p>
                    ここから定数項を分離すると、<InlineMath math="x^2" /> のフーリエ級数が得られます。積分によって係数の分母が <InlineMath math="n" /> から <InlineMath math="n^2" /> になり、収束が速まっていることに注目してください。
                </p>
            </ContentBox>

            <p>
                一方、微分は級数の収束性を悪化させるため、項別微分には関数の「滑らかさ」に関する条件が必要となります。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-2 (項別微分)">
                <p>
                    周期 <InlineMath math="2\pi" /> の連続関数 <InlineMath math="f" /> が区分的 <InlineMath math="C^1" /> 級であるとする。このとき、導関数 <InlineMath math="f'" /> のフーリエ係数 <InlineMath math="c'_n" /> は、元の係数 <InlineMath math="c_n" /> を用いて次のように表される。
                </p>
                <BlockMath math="c'_n = in \cdot c_n" />
                <p>
                    すなわち、関数を微分することは、フーリエ領域では <InlineMath math="in" /> を掛けることに対応する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    導関数のフーリエ係数の定義式に部分積分を適用する：
                </p>
                <BlockMath math="\begin{aligned} c'_n &= \frac{1}{2\pi} \int_{-\pi}^{\pi} f'(x) e^{-inx} dx \\ &= \frac{1}{2\pi} \left( [f(x) e^{-inx}]_{-\pi}^{\pi} - \int_{-\pi}^{\pi} f(x) (-in) e^{-inx} dx \right) \end{aligned}" />
                <p>
                    <InlineMath math="f(x)" /> が周期関数であり連続であるならば、境界項 <InlineMath math="[f(x)e^{-inx}]_{-\pi}^{\pi}" /> は互いに打ち消し合って 0 となる。したがって、
                </p>
                <BlockMath math="c'_n = in \cdot \left( \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-inx} dx \right) = in \cdot c_n" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フーリエ係数の減衰速度</h2>

            <p>
                項別微分を繰り返すことで、関数の「滑らかさ（微分可能性）」と、そのフーリエ係数がどれほど速く 0 に近づくか（減衰速度）という、非常に重要な関係が見えてきます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-3 (減衰速度と滑らかさ)">
                <p>
                    関数 <InlineMath math="f" /> が <InlineMath math="k" /> 回連続微分可能（<InlineMath math="C^k" /> 級）であれば、そのフーリエ係数 <InlineMath math="c_n" /> は次のように減衰する。
                </p>
                <BlockMath math="c_n = o\left( \frac{1}{|n|^k} \right) \quad (|n| \to \infty)" />
                <p>
                    特に <InlineMath math="f" /> が無限回微分可能（<InlineMath math="C^\infty" /> 級）かつ周期的ならば、その係数は任意の多項式の逆数よりも速く減衰する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 2.3-2 （項別微分）を <InlineMath math="k" /> 回繰り返して適用する。
                    <InlineMath math="f^{(k)}" /> のフーリエ係数を <InlineMath math="c_n^{(k)}" /> とすると、次の関係が成り立つ。
                </p>
                <BlockMath math="c_n^{(k)} = (in)^k c_n" />
                <p>
                    これより、<InlineMath math="c_n" /> は次のように表せる。
                </p>
                <BlockMath math="c_n = \frac{c_n^{(k)}}{(in)^k}" />
                <p>
                    リーマン・ルベーグの補題により、可積分関数 <InlineMath math="f^{(k)}" /> のフーリエ係数 <InlineMath math="c_n^{(k)}" /> は <InlineMath math="n \to \infty" /> で 0 に収束する。
                    したがって、
                </p>
                <BlockMath math="|c_n| = \frac{|c_n^{(k)}|}{|n|^k} = o\left( \frac{1}{|n|^k} \right)" />
                <p>
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体的な関数のスペクトルを比較して、この定理を実感してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.3-3 (滑らかさとスペクトルの比較)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>矩形波（不連続点あり）</b>:
                        <InlineMath math="c_n \sim 1/n" />。不連続な「段差」があるため、高周波成分が比較的大きく残ります。
                    </li>
                    <li>
                        <b>鋸歯状波（連続だが $C^1$ でない）</b>:
                        <InlineMath math="f(x) = |x|" /> などの場合、<InlineMath math="c_n \sim 1/n^2" />。連結はしているが「角」があるため、矩形波よりは速く、しかし一定の速さで減衰します。
                    </li>
                    <li>
                        <b>滑らかな周期関数 ($C^\infty$ 級）</b>:
                        <InlineMath math="f(x) = \sin x" /> など、段差も角もない場合。特定の低次成分以外はすべて 0、あるいは指数関数的に速く減衰します。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-4 (解析的関数の超多項式減衰)">
                <p>
                    関数 <InlineMath math="f(z)" /> が実軸を含む複素平面の領域で正則である場合、そのフーリエ係数は指数的な減衰 <InlineMath math="|c_n| \leq M e^{-\delta |n|}" /> を示します。
                </p>
                <p>
                    例えば、<InlineMath math="f(x) = \frac{1}{1 - a e^{ix}} \quad (|a| < 1)" /> の展開を考えると、係数は <InlineMath math="a^n" /> の形となり、<InlineMath math="n" /> とともに等比級数的に速やかに減少します。これは、関数が複素数的な意味で極めて滑らかであることを反映しています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="不確定性原理への端緒">
                <p>
                    「時間領域（実軸）で関数が滑らかであるほど、周波数領域（スペクトル）では局在する（速く減衰する）」というこの性質は、後の章で学ぶ「不確定性原理」の最も基本的な形と言えます。物理的には、急峻な変化を含む信号ほど、それを再現するために広範な周波数帯域が必要になるという工学的な直感と一致しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>フーリエ級数の項別積分は常に可能であり、収束性が改善される（分母に <InlineMath math="n" /> が増える）。</li>
                    <li>項別微分には関数の周期性と連続性が必要であり、周波数領域では <InlineMath math="in" /> を掛けることに対応する。</li>
                    <li>関数の滑らかさ（微分可能性）が高いほど、フーリエ係数は高周波側で速く減衰する。</li>
                    <li>不連続点を持つ関数のスペクトルは減衰が遅く、高周波成分を多く含むため、近似が困難になる（ギブス現象の数学的背景）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
