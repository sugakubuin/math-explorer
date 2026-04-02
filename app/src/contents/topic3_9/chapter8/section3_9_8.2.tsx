import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GaussLemma() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                有理数係数多項式を因数分解する際、まずは分母を払って整数係数に直し、そこから議論を出発させることがよくあります。このような「分数係数（分数体）」と「元の環（UFD）」の間の因数分解の関係をつなぐ極めて重要な定理が<b>ガウスの補題（Gauss's Lemma）</b>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">原始多項式とガウスの補題</h2>

            <p className="leading-relaxed">
                準備として、多項式の係数全体が共通の素因数を持たない状態を表す「原始多項式」を定義します。
            </p>

            <ContentBox type="definition" title="Definition 8.2-1 (原始多項式)">
                <p>
                    <InlineMath math="D" /> を UFD とし、<InlineMath math="f(x) \in D[x]" /> を
                </p>
                <BlockMath math="f(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0" />
                <p>
                    とする。<InlineMath math="f(x)" /> が<b>原始多項式（primitive polynomial）</b>であるとは、そのすべての係数の最大公約数が単元であること、すなわち
                </p>
                <BlockMath math="\gcd(a_n, a_{n-1}, \dots, a_0) \sim 1" />
                <p>
                    となることである（<InlineMath math="\sim" /> は単元倍を除いて等しいことを意味する）。<br />
                    別の言い方をすれば、<InlineMath math="D" /> の任意の素元 <InlineMath math="p" /> が、すべての係数 <InlineMath math="a_i" /> を同時には割り切らないことである。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この原始多項式に関して、次の非常に強力な事実が成り立ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-1 (ガウスの補題)">
                <p>
                    UFD <InlineMath math="D" /> 上の原始多項式の積は、再び原始多項式になる。<br />
                    すなわち、<InlineMath math="f, g \in D[x]" /> がともに原始的ならば、<InlineMath math="fg \in D[x]" /> も原始的である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    背理法で証明する。<InlineMath math="f, g" /> が原始的であるにもかかわらず、その積 <InlineMath math="fg" /> が原始的でないと仮定する。
                </p>
                <p>
                    <InlineMath math="fg" /> が原始的でないということは、<InlineMath math="D" /> のある素元 <InlineMath math="p" /> が存在して、<InlineMath math="fg" /> のすべての係数を割り切るということである。
                </p>
                <p>
                    ここで、係数を <InlineMath math="p" /> を法として（イデアル <InlineMath math="(p)" /> で割った剰余環で）考える。剰余環を <InlineMath math="\bar{D} = D/(p)" /> とし、多項式を <InlineMath math="\bar{D}[x]" /> で考える。
                </p>
                <p>
                    <InlineMath math="p" /> は素元であり <InlineMath math="D" /> は UFD なので、<InlineMath math="(p)" /> は素イデアルである。したがって <InlineMath math="\bar{D} = D/(p)" /> は整域となる（Proposition 3.1-1）。<br />
                    <InlineMath math="\bar{D}" /> が整域ならば、その多項式環 <InlineMath math="\bar{D}[x]" /> も整域である（Proposition 4.3-1）。
                </p>
                <p>
                    <InlineMath math="f" /> と <InlineMath math="g" /> は原始的なので、すべての係数が <InlineMath math="p" /> の倍数になることはない。よって <InlineMath math="\bar{D}[x]" /> において <InlineMath math="\bar{f} \neq 0" /> かつ <InlineMath math="\bar{g} \neq 0" /> である。
                </p>
                <p>
                    ところが、仮定より <InlineMath math="fg" /> の全係数は <InlineMath math="p" /> の倍数なので、<InlineMath math="\bar{D}[x]" /> においては
                </p>
                <BlockMath math="\overline{fg} = \bar{f}\bar{g} = 0" />
                <p>
                    となる。<InlineMath math="\bar{D}[x]" /> は整域であるにもかかわらず、非零元同士の積が <InlineMath math="0" /> になってしまった。これは矛盾である。
                </p>
                <p>
                    したがって、<InlineMath math="fg" /> も原始的でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 8.2-1 (ガウスの補題の応用)</span>}>
                <p>
                    <InlineMath math="\mathbb{Z}[x]" /> において、<InlineMath math="f(x) = 2x^2 + 3x + 4" /> と <InlineMath math="g(x) = 5x - 7" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\gcd(2, 3, 4) = 1" /> なので <InlineMath math="f" /> は原始的。</li>
                    <li><InlineMath math="\gcd(5, -7) = 1" /> なので <InlineMath math="g" /> は原始的。</li>
                </ul>
                <p>
                    ガウスの補題によれば、これらの積も原始的になるはずである。計算してみると、
                </p>
                <BlockMath math="\begin{aligned} f(x)g(x) &= (2x^2 + 3x + 4)(5x - 7) \\ &= 10x^3 + x^2 - x - 28 \end{aligned}" />
                <p>
                    となり、<InlineMath math="\gcd(10, 1, -1, -28) = 1" /> であるため、確かに原始多項式となっている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ℚ[x]での因数分解との関係</h2>

            <p className="leading-relaxed">
                ガウスの補題の最も重要な帰結は、「有理数体上で因数分解できるなら、整数環上でも因数分解できる」という事実です。これは任意の UFD とその分数体に対して一般化されます。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 8.2-2 (ガウスの補題の系：<InlineMath math="\mathbb{Q}[x]" /> と <InlineMath math="\mathbb{Z}[x]" /> の分解)</span>}>
                <p>
                    <InlineMath math="f(x) \in \mathbb{Z}[x]" /> を原始多項式とする。<br />
                    もし <InlineMath math="f(x)" /> が有理数係数多項式環 <InlineMath math="\mathbb{Q}[x]" /> において 2 つの非定数多項式の積に分解できるならば、<InlineMath math="\mathbb{Z}[x]" /> においても同じ次数の多項式の積に分解できる。
                </p>
                <p>
                    すなわち、<InlineMath math="f = gh" />（<InlineMath math="g, h \in \mathbb{Q}[x]" />）と分解できるなら、適切な有理数 <InlineMath math="r \in \mathbb{Q}" /> を用いて <InlineMath math="\tilde{g} = r g, \tilde{h} = r^{-1} h" /> とし、<InlineMath math="f = \tilde{g}\tilde{h}" /> かつ <InlineMath math="\tilde{g}, \tilde{h} \in \mathbb{Z}[x]" /> となるようにできる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f = gh" />（<InlineMath math="g, h \in \mathbb{Q}[x]" />）とする。
                </p>
                <p>
                    <InlineMath math="g" /> の各係数の分母の公倍数を掛けて、<InlineMath math="g" /> を整数係数にする。さらにその整数係数の gcd をくくり出すことで、
                </p>
                <BlockMath math="g = \frac{a}{b} g_0 \quad (a, b \in \mathbb{Z}, g_0 \in \mathbb{Z}[x] \text{ は原始的})" />
                <p>
                    と書ける。同様に <InlineMath math="h = \frac{c}{d} h_0" />（<InlineMath math="h_0 \in \mathbb{Z}[x]" /> は原始的）と書ける。
                </p>
                <p>
                    これを <InlineMath math="f" /> に代入すると
                </p>
                <BlockMath math="f = \frac{a}{b} \cdot \frac{c}{d} g_0 h_0 \implies bd f = ac g_0 h_0" />
                <p>
                    となる。<InlineMath math="g_0" /> と <InlineMath math="h_0" /> は原始的なので、Theorem 8.2-1（ガウスの補題）よりその積 <InlineMath math="g_0 h_0" /> も原始的である。
                </p>
                <p>
                    左辺の多項式 <InlineMath math="bd f" /> の係数の gcd は、<InlineMath math="f" /> が原始的であるから <InlineMath math="|bd|" /> である。右辺の多項式 <InlineMath math="ac g_0 h_0" /> の係数の gcd は、<InlineMath math="g_0 h_0" /> が原始的であるから <InlineMath math="|ac|" /> である。
                </p>
                <p>
                    これらは等しいので <InlineMath math="|bd| = |ac|" /> であり、<InlineMath math="\frac{ac}{bd} = \pm 1" /> となる。
                </p>
                <p>
                    したがって、<InlineMath math="f = \pm g_0 h_0" /> となり、<InlineMath math="\pm g_0" /> と <InlineMath math="h_0" /> はいずれも整数係数（<InlineMath math="\in \mathbb{Z}[x]" />）の多項式であるため、<InlineMath math="\mathbb{Z}[x]" /> での分解が得られた。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理は、既約性を判定する際に非常に役に立ちます。有理数という「分数」の上での既約性を、整数の世界だけで判定できるようになるからです。
            </p>

            <ContentBox type="example" title={<span>Example 8.2-2 (<InlineMath math="x^4 + 1" /> の既約性)</span>}>
                <p>
                    多項式 <InlineMath math="f(x) = x^4 + 1" /> が <InlineMath math="\mathbb{Q}[x]" /> で既約であることを示したい。
                </p>
                <p>
                    Theorem 8.2-2 の対偶をとれば「<InlineMath math="\mathbb{Z}[x]" /> で既約ならば <InlineMath math="\mathbb{Q}[x]" /> でも既約」である。したがって <InlineMath math="\mathbb{Z}[x]" /> の範囲だけで分解の可能性を探れば十分である。
                </p>
                <p>
                    実数根を持たないため、1次式を含む分解（<InlineMath math="(x-a)(\dots)" />）はあり得ない。もし分解するなら2次式の積である。
                </p>
                <BlockMath math="x^4 + 1 = (x^2 + ax + b)(x^2 + cx + d) \quad (a, b, c, d \in \mathbb{Z})" />
                <p>
                    展開して係数を比較する。定数項より <InlineMath math="bd = 1" /> なので <InlineMath math="(b, d) = (1, 1)" /> または <InlineMath math="(-1, -1)" />。<br />
                    3次の項より <InlineMath math="a + c = 0 \implies c = -a" />。<br />
                    2次の項より <InlineMath math="b + d + ac = 0" />。<br />
                    <InlineMath math="b=d=1" /> のとき <InlineMath math="2 - a^2 = 0 \implies a^2 = 2" />（整数解なし）。<br />
                    <InlineMath math="b=d=-1" /> のとき <InlineMath math="-2 - a^2 = 0 \implies a^2 = -2" />（整数解なし）。
                </p>
                <p>
                    したがって <InlineMath math="\mathbb{Z}[x]" /> で分解しない。ゆえにガウスの補題より <InlineMath math="\mathbb{Q}[x]" /> でも既約である。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>係数の最大公約数が 1（単元）である多項式を<b>原始多項式</b>と呼ぶ。</li>
                    <li><b>ガウスの補題：</b> 原始多項式同士の積は、必ず原始多項式になる。</li>
                    <li>ガウスの補題により、原始多項式が分数体 <InlineMath math="\mathbb{Q}[x]" /> で因数分解できることと、元の環 <InlineMath math="\mathbb{Z}[x]" /> で因数分解できることは同値になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
