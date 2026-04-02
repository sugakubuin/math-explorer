import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WaveEquationDerivation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章では、双曲型偏微分方程式の代表例である<b>波動方程式</b>（Wave Equation）について学びます。
                波動方程式は、音、光、水、そして楽器の弦の振動など、自然界のあらゆる「波」の伝播を記述する根本的な方程式です。
                まずは、最も直感的なモデルである「弦の振動」から、この方程式を導出しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弦の運動方程式の導出</h2>

            <p className="leading-relaxed">
                ピンと張られた一本の弦を考えます。この弦が上下に微小に振動する様子を、物理法則に基づいて数理モデル化します。
            </p>

            <ContentBox type="example" title="Example 6.1-1 (弦の振動のモデル化と導出)">
                <p>
                    線密度（単位長さあたりの質量）が <InlineMath math="\rho" />、張力が <InlineMath math="T" /> である一様な弦を考える。
                    弦の微小区間 <InlineMath math="[x, x+\Delta x]" /> に注目し、ニュートンの運動方程式を適用する。
                </p>
                <p>
                    弦の変位を <InlineMath math="u(x, t)" /> とすると、加速度は <InlineMath math="u_{tt}" /> である。
                    微小区間の質量は <InlineMath math="\rho \Delta x" /> なので、運動方程式は以下のようになる：
                    <BlockMath math="\rho \Delta x \cdot u_{tt} \approx T\sin\theta(x+\Delta x, t) - T\sin\theta(x, t)" />
                    ここで <InlineMath math="\theta" /> は弦が水平となす角である。
                </p>
                <p>
                    振動が微小であるという仮定（小振幅近似）の下では、<InlineMath math="\sin\theta \approx \tan\theta = u_x" /> と近似できる。
                    これを代入して両辺を <InlineMath math="\Delta x \to 0" /> の極限で考えると、
                    <BlockMath math="\rho u_{tt} = T u_{xx} \implies u_{tt} = c^2 u_{xx} \quad \left( c = \sqrt{\frac{T}{\rho}} \right)" />
                    という偏微分方程式が得られる。これが 1 次元波動方程式である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このようにして得られた定数 <InlineMath math="c" /> は、物理的に非常に重要な意味を持ちます。
            </p>

            <ContentBox type="remark" title="波速（Wave Speed）の意味">
                <p>
                    係数 <InlineMath math="c = \sqrt{T/\rho}" /> の次元は速度（m/s）であり、これは波が伝わる速さを表している。
                    張力が強い（<InlineMath math="T" /> が大きい）ほど、また弦が軽い（<InlineMath math="\rho" /> が小さい）ほど、波はより速く伝わる。
                    ギターなどの弦楽器において、高音用の細い弦（線密度が小さい）が速く振動し、高い音を出すという日常的な経験とも整合している。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次に、この方程式が持つ数学的な性質、特に解の重ね合わせについて確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">方程式の基本性質</h2>

            <p className="leading-relaxed">
                波動方程式は線形な方程式であるため、個別の解を組み合わせて新しい解を作ることができます。
            </p>

            <ContentBox type="proposition" title="Proposition 6.1-1 (波動方程式の線形性と重ね合わせ原理)">
                <p>
                    <InlineMath math="u_1, u_2" /> がともに波動方程式 <InlineMath math="u_{tt} = c^2 u_{xx}" /> の解であれば、
                    任意の定数 <InlineMath math="\alpha, \beta" /> に対して、それらの線形結合
                    <BlockMath math="u = \alpha u_1 + \beta u_2" />
                    もまた同じ波動方程式の解となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    微分の線形性を用いる。<InlineMath math="u = \alpha u_1 + \beta u_2" /> を方程式の左辺と右辺にそれぞれ代入すると、
                    <BlockMath math="\begin{aligned} u_{tt} &= \frac{\partial^2}{\partial t^2}(\alpha u_1 + \beta u_2) = \alpha (u_1)_{tt} + \beta (u_2)_{tt} \\ c^2 u_{xx} &= c^2 \frac{\partial^2}{\partial x^2}(\alpha u_1 + \beta u_2) = \alpha c^2 (u_1)_{xx} + \beta c^2 (u_2)_{xx} \end{aligned}" />
                    <InlineMath math="u_1, u_2" /> が解であることから <InlineMath math="(u_1)_{tt} = c^2 (u_1)_{xx}" /> および <InlineMath math="(u_2)_{tt} = c^2 (u_2)_{xx}" /> が成立するため、
                    左右両辺は一致し、<InlineMath math="u" /> も解であることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                物理的な現象を一意に決定するためには、方程式に加えて、時刻 <InlineMath math="t=0" /> での状態（初期条件）や、
                空間的な端での制約（境界条件）を指定する必要があります。
            </p>

            <ContentBox type="example" title="Example 6.1-2 (初期条件と境界条件の設定)">
                <p>
                    長さ <InlineMath math="L" /> の弦（<InlineMath math="0 < x < L" />）の振動を考える際、一般的に以下の条件が与えられる。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>初期条件</b>：
                        時刻 <InlineMath math="t=0" /> での変位 <InlineMath math="u(x, 0) = f(x)" /> と速度 <InlineMath math="u_t(x, 0) = g(x)" /> の 2 つを指定する。
                    </li>
                    <li>
                        <b>境界条件</b>：
                        両端が固定されている場合（固定端）、<InlineMath math="u(0, t) = u(L, t) = 0" /> となる（ディリクレ条件）。
                    </li>
                </ul>
                <p>
                    これらの条件をすべて満たす解を求める問題を、<b>初期境界値問題</b>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、境界がない無限に長い弦を想定し、初期条件のみから解を導き出す「ダランベールの公式」について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>1 次元波動方程式は、弦の微小振動のモデルから <InlineMath math="u_{tt} = c^2 u_{xx}" /> として導かれる。</li>
                    <li>波速 <InlineMath math="c = \sqrt{T/\rho}" /> は、媒体の張力と密度によって決定される。</li>
                    <li>波動方程式は線形であり、解の「重ね合わせ原理」が成立する。</li>
                    <li>物理的な挙動を特定するには、初期条件（変位と速度）および境界条件（固定端など）が必要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
