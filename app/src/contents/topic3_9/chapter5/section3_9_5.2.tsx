import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GaussianIntegers() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ユークリッド整域（ED）の興味深い例として、複素数平面上の格子点からなる「ガウス整数環」があります。本節では、ガウス整数環の性質と、それが実際に ED となることを証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガウス整数環の定義と基本性質</h2>

            <p className="leading-relaxed">
                まずはガウス整数環の定義と、その中での可逆元（単元）を確認しましょう。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 (ガウス整数環)">
                <p>
                    複素数体 <InlineMath math="\mathbb{C}" /> の部分集合
                </p>
                <BlockMath math="\mathbb{Z}[i] = \{ a + bi \mid a, b \in \mathbb{Z} \}" />
                <p>
                    は、複素数の加法と乗法について環をなす。これを<b>ガウス整数環（Gaussian integers）</b>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ガウス整数環は、体である複素数体 <InlineMath math="\mathbb{C}" /> の部分環であるため、自動的に整域になります。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 5.2-1 (<InlineMath math="\mathbb{Z}[i]" /> は整域)</span>}>
                <p>
                    ガウス整数環 <InlineMath math="\mathbb{Z}[i]" /> は整域である。
                </p>
                <p>
                    （証明）<InlineMath math="\mathbb{C}" /> は体であるから零因子を持たない。その部分環である <InlineMath math="\mathbb{Z}[i]" /> も当然零因子を持たないため、整域である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ガウス整数における「大きさ」を測るために、複素数の絶対値の 2 乗をノルムとして定義します。<InlineMath math="N(a+bi) = a^2 + b^2" /> とすると、<InlineMath math="N(zw) = N(z)N(w)" /> という乗法性が成り立ちます。この性質を利用して、<InlineMath math="\mathbb{Z}[i]" /> の単元を決定できます。
            </p>

            <ContentBox type="example" title={<span>Example 5.2-1 (<InlineMath math="\mathbb{Z}[i]" /> の単元)</span>}>
                <p>
                    <InlineMath math="u \in \mathbb{Z}[i]" /> が単元であるとする。すなわち、ある <InlineMath math="v \in \mathbb{Z}[i]" /> が存在して <InlineMath math="uv = 1" /> を満たす。
                </p>
                <p>
                    両辺のノルムをとると、<InlineMath math="N(uv) = N(u)N(v) = N(1) = 1" /> となる。<InlineMath math="u, v" /> はガウス整数であるから、そのノルムは非負整数である。したがって、正整数の積が <InlineMath math="1" /> になる条件から <InlineMath math="N(u) = 1" /> でなければならない。
                </p>
                <p>
                    <InlineMath math="u = a + bi" /> とすると <InlineMath math="a^2 + b^2 = 1" /> を満たす整数 <InlineMath math="a, b" /> の組は <InlineMath math="(\pm 1, 0)" /> と <InlineMath math="(0, \pm 1)" /> のみである。
                </p>
                <p>
                    ゆえに、<InlineMath math="\mathbb{Z}[i]" /> の単元群は <InlineMath math="\mathbb{Z}[i]^\times = \{ 1, -1, i, -i \}" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ℤ[i]の ED 性</h2>

            <p className="leading-relaxed">
                ガウス整数環が ED であることを示すには、任意の割り算において「余りのノルムが割る数のノルムよりも小さくなる」ような商を見つけられることを証明する必要があります。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 5.2-1 (<InlineMath math="\mathbb{Z}[i]" /> は ED である)</span>}>
                <p>
                    ガウス整数環 <InlineMath math="\mathbb{Z}[i]" /> は、ノルム関数 <InlineMath math="N(a+bi) = a^2+b^2" /> を用いたユークリッド整域（ED）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の <InlineMath math="z, w \in \mathbb{Z}[i]" />（<InlineMath math="w \neq 0" />）をとる。これらを除法したい。
                </p>
                <p>
                    まず、複素数体 <InlineMath math="\mathbb{C}" /> の中で割り算を行い、その結果を <InlineMath math="\frac{z}{w} = \alpha + \beta i" />（<InlineMath math="\alpha, \beta \in \mathbb{R}" />）とする。
                </p>
                <p>
                    この実数 <InlineMath math="\alpha, \beta" /> に最も近い整数をそれぞれ <InlineMath math="m, n" /> とする。すなわち、<InlineMath math="m = \mathrm{round}(\alpha)" />、<InlineMath math="n = \mathrm{round}(\beta)" /> と選ぶことで、
                </p>
                <BlockMath math="|\alpha - m| \leq \frac{1}{2}, \quad |\beta - n| \leq \frac{1}{2}" />
                <p>
                    が満たされるようにできる。ここで、<InlineMath math="q = m + ni \in \mathbb{Z}[i]" /> を「商」の候補として定める。
                </p>
                <p>
                    剰余を <InlineMath math="r = z - qw" /> と定義する。明らかに <InlineMath math="r \in \mathbb{Z}[i]" /> であり、<InlineMath math="z = qw + r" /> が成り立つ。問題は <InlineMath math="N(r) < N(w)" /> を満たすかどうかである。
                </p>
                <p>
                    <InlineMath math="r" /> の定義を少し変形すると、
                </p>
                <BlockMath math="r = z - qw = w \left( \frac{z}{w} - q \right) = w \left( (\alpha - m) + (\beta - n)i \right)" />
                <p>
                    となる。両辺のノルムをとる（<InlineMath math="N(A) = |A|^2" /> であることに注意する）と、
                </p>
                <BlockMath math="\begin{aligned} N(r) &= N(w) \cdot N((\alpha - m) + (\beta - n)i) \\ &= N(w) \left( (\alpha - m)^2 + (\beta - n)^2 \right) \end{aligned}" />
                <p>
                    ここで、選んだ整数の性質から
                </p>
                <BlockMath math="(\alpha - m)^2 + (\beta - n)^2 \leq \left(\frac{1}{2}\right)^2 + \left(\frac{1}{2}\right)^2 = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}" />
                <p>
                    であるため、
                </p>
                <BlockMath math="N(r) \leq \frac{1}{2} N(w) < N(w)" />
                <p>
                    となり、除法の原理の条件 <InlineMath math="N(r) < N(w)" /> を満たす。したがって <InlineMath math="\mathbb{Z}[i]" /> は ED である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                Theorem 5.2-1 の証明で用いた「複素数として割ってから最も近い格子点を商とする」というアルゴリズムを、実際の数字で試してみましょう。
            </p>

            <ContentBox type="example" title={<span>Example 5.2-2 (<InlineMath math="\mathbb{Z}[i]" /> での除法)</span>}>
                <p>
                    <InlineMath math="z = 7 + 2i" /> を <InlineMath math="w = 2 + i" /> で割る除法を考える。
                </p>
                <p>
                    まず、<InlineMath math="\mathbb{C}" /> の中で <InlineMath math="z/w" /> を計算する。分母の共役複素数を掛けて有理化すると、
                </p>
                <BlockMath math="\begin{aligned}
                    \frac{7+2i}{2+i} &= \frac{(7+2i)(2-i)}{2^2+1^2} \\ 
                    &= \frac{14 - 7i + 4i + 2}{5} \\ 
                    &= \frac{16 - 3i}{5} \\ 
                    &= 3.2 - 0.6i
                \end{aligned}" />
                <p>
                    実部 <InlineMath math="3.2" /> に最も近い整数は <InlineMath math="3" />、虚部 <InlineMath math="-0.6" /> に最も近い整数は <InlineMath math="-1" /> である。よって商を <InlineMath math="q = 3 - i" /> とするのが自然に見えるが、証明によれば <InlineMath math="|\beta - n| \leq 1/2" /> を満たせばよいので、<InlineMath math="n = 0" />（差は <InlineMath math="0.6" /> で少し超える）でも状況によっては機能する。ここでは最も近い <InlineMath math="q = 3 - i" /> ではなく、あえて少しずれた <InlineMath math="q = 3" />（すなわち <InlineMath math="m=3, n=0" />）を商の候補として選んでみる。
                </p>
                <p>
                    <InlineMath math="q = 3" /> としたときの余り <InlineMath math="r" /> は、
                </p>
                <BlockMath math="r = z - qw = (7+2i) - 3(2+i) = 1 - i" />
                <p>
                    この余り <InlineMath math="r" /> のノルムは <InlineMath math="N(1-i) = 1^2 + (-1)^2 = 2" /> である。一方、割る数 <InlineMath math="w" /> のノルムは <InlineMath math="N(2+i) = 2^2 + 1^2 = 5" /> である。
                </p>
                <p>
                    <InlineMath math="2 < 5" /> であり、<InlineMath math="N(r) < N(w)" /> を満たしている。したがって、
                </p>
                <BlockMath math="7+2i = 3 \cdot (2+i) + (1-i)" />
                <p>
                    は正しい除法の結果である。（※なお、<InlineMath math="q = 3-i" /> とした場合は <InlineMath math="r = (7+2i) - (3-i)(2+i) = 0" /> となり、実は割り切れることがわかる。ED の除法において商と余りは一意とは限らない。）
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ガウス整数環 <InlineMath math="\mathbb{Z}[i]" /> の単元は <InlineMath math="\pm 1, \pm i" /> の 4 つである。</li>
                    <li><InlineMath math="\mathbb{Z}[i]" /> は、複素数の絶対値の 2 乗 <InlineMath math="N(a+bi) = a^2+b^2" /> をノルムとしてユークリッド整域（ED）になる。</li>
                    <li><InlineMath math="\mathbb{Z}[i]" /> の除法は、複素数として割り算を行った結果に最も近い格子点を商とすることで計算できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
