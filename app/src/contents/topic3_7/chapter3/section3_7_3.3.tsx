import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VarianceAndCovariance() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                期待値が確率変数の「中心的な位置」を表すのに対し、その中心からどれだけデータが散らばっているかを測る指標が<b>分散</b>です。
                また、複数の変数がどのように連動するかを記述する<b>共分散</b>は、多変量解析の基礎となります。
                本節では、これらの測度論的な性質と、関数空間としての幾何学的な解釈について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分散の定義と計算公式</h2>

            <p className="leading-relaxed">
                分散は、平均からの偏差の 2 乗の期待値として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 3.3-1 (分散・標準偏差)">
                <p>
                    確率変数 <InlineMath math="X" /> に対して、その<b>分散</b>（variance）を次のように定義する：
                    <BlockMath math="\mathrm{Var}(X) = E[(X - E[X])^2]" />
                    また、分散の正の平方根 <InlineMath math="\sigma(X) = \sqrt{\mathrm{Var}(X)}" /> を<b>標準偏差</b>（standard deviation）と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                実際の計算においては、定義通りに計算するよりも、次の展開公式を用いるのが一般的です。
            </p>

            <ContentBox type="proposition" title="Proposition 3.3-1 (分散の基本性質)">
                <p>
                    期待値の線形性を用いると、次の公式が導かれる。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li><b>計算用公式</b>：<InlineMath math="\mathrm{Var}(X) = E[X^2] - (E[X])^2" /></li>
                    <li><b>線形変換</b>：<InlineMath math="\mathrm{Var}(aX + b) = a^2 \mathrm{Var}(X)" /></li>
                    <li><b>独立和</b>：<InlineMath math="X, Y" /> が独立であるならば、<InlineMath math="\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)" /> となる（独立性の詳細は Chapter 4 参照）。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="\mu = E[X]" /> とおくと、
                    <BlockMath math="\begin{aligned} \mathrm{Var}(X) &= E[(X - \mu)^2] = E[X^2 - 2\mu X + \mu^2] \\ &= E[X^2] - 2\mu E[X] + \mu^2 = E[X^2] - 2\mu^2 + \mu^2 \\ &= E[X^2] - \mu^2 \end{aligned}" />
                </p>
                <p>
                    2. <InlineMath math="E[aX + b] = a E[X] + b" /> より、
                    <BlockMath math="\begin{aligned} \mathrm{Var}(aX + b) &= E[((aX + b) - (aE[X] + b))^2] \\ &= E[(a(X - E[X]))^2] \\ &= E[a^2 (X - E[X])^2] = a^2 \mathrm{Var}(X) \end{aligned}" />
                </p>
                <p>
                    3. 独立な場合 <InlineMath math="E[XY] = E[X]E[Y]" /> が成り立つ（Chapter 4 参照）。
                    <BlockMath math="\begin{aligned} \mathrm{Var}(X+Y) &= E[(X+Y)^2] - (E[X+Y])^2 \\ &= (E[X^2] + 2E[XY] + E[Y^2]) \\ &\quad - (E[X]^2 + 2E[X]E[Y] + E[Y]^2) \\ &= (E[X^2] - E[X]^2) + (E[Y^2] - E[Y]^2) \\ &\quad + 2(E[XY] - E[X]E[Y]) \\ &= \mathrm{Var}(X) + \mathrm{Var}(Y) + 0 \end{aligned}" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>
            <ContentBox type="example" title="Example 3.3-1 (各分布の分散)">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>二項分布 <InlineMath math="B(n, p)" /></b>：<InlineMath math="\mathrm{Var}(X) = np(1 - p)" /></li>
                    <li><b>ポアソン分布 <InlineMath math="\mathrm{Po}(\lambda)" /></b>：<InlineMath math="\mathrm{Var}(X) = \lambda" /></li>
                    <li><b>正規分布 <InlineMath math="\mathcal{N}(\mu, \sigma^2)" /></b>：定義および Example 3.1-2 の計算より、分散は <InlineMath math="\sigma^2" /> となる。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">L² 空間とコーシー・シュワルツの不等式</h2>

            <p className="leading-relaxed">
                分散が有限な確率変数のあつまりを考えると、それらはベクトル空間としての美しい構造を持ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (コーシー・シュワルツの不等式)">
                <p>
                    2 乗可積分（<InlineMath math="E[X^2] < \infty, E[Y^2] < \infty" />）な確率変数に対して、次が成り立つ。
                    <BlockMath math="E[|XY|] \leq \sqrt{E[X^2]} \sqrt{E[Y^2]}" />
                    等号成立条件は、ある定数 <InlineMath math="c" /> に対して <InlineMath math="X = cY" /> a.s. となることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の実数 <InlineMath math="t" /> に対して、
                    <BlockMath math="\begin{aligned} g(t) &= E[(X + tY)^2] \\ &= E[Y^2] t^2 + 2E[XY] t + E[X^2] \geq 0 \end{aligned}" />
                    が成り立つ。これが常に非負であるためには、<InlineMath math="t" /> の二次式としての判別式 <InlineMath math="D/4" /> が 0 以下でなければならない：
                    <BlockMath math="D/4 = (E[XY])^2 - E[X^2] E[Y^2] \leq 0" />
                    これを整理することで、<InlineMath math="E[XY] \leq \sqrt{E[X^2]} \sqrt{E[Y^2]}" /> が得られる（負の場合も考慮し、絶対値をとることで題意が示される）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ヒルベルト空間としての解釈">
                <p>
                    2 乗可積分な確率変数の全体 <InlineMath math="L^2(\Omega, \mathcal{F}, P)" /> に対して、
                    <InlineMath math="\langle X, Y \rangle = E[XY]" /> という内積を定義すると、これは<b>ヒルベルト空間</b>（内積を備えた完備なベクトル空間）になります。
                </p>
                <p>
                    この視点に立つと、期待値は「定数関数への正射影」、分散は「定数部分を除いたベクトルのノルムの 2 乗」として幾何学的に理解できます。
                    さらに、Chapter 5 で学ぶ「条件付き期待値」は、特定の情報を持つ部分空間への正射影として、数学的に非常にスッキリと定義されます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                最後に、期待値計算のもう一つの強力なツールである「モーメント」と、それを一括して扱う「母関数」の概念を導入します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>分散はデータの散らばりを表し、<InlineMath math="E[X^2] - (E[X])^2" /> という簡潔な差の形で導出できる。</li>
                    <li>2 つの確率変数が独立なとき、和の分散は個別の分散の和に一致する。</li>
                    <li>コーシー・シュワルツの不等式は、期待値の枠組みで内積の性質（内積がノルムの積以下）を保証する。</li>
                    <li>2 乗可積分な確率変数のあつまりは、内積を備えたヒルベルト空間としての構造を持ち、幾何学的な解析が可能になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
