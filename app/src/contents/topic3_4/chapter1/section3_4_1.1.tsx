import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FourierCoefficientsAndComplexSeries() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                フーリエ解析の第一歩は、周期を持つ複雑な波形を、単純な「基本波」である三角関数の重ね合わせとして表現することから始まります。本節では、三角関数が持つ「直交性」という極めて重要な性質を確認し、それを利用して関数を分解する「フーリエ係数」の定義と、実数形式・複素数形式の対応関係について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">三角関数系の直交性</h2>

            <p>
                「直交」という言葉は通常、ベクトルのなす角が <InlineMath math="90^\circ" /> であることを指しますが、関数の世界でも同様の概念を定義できます。区間 <InlineMath math="[-\pi, \pi]" /> 上の 2 つの複素数値関数 <InlineMath math="f, g" /> に対し、その内積を <InlineMath math="\int_{-\pi}^{\pi} f(x)\overline{g(x)} dx" /> で定義すると、異なる周波数を持つ複素指数関数は互いに「直交」します。
            </p>

            <ContentBox type="proposition" title="Proposition 1.1-1 (三角関数系の直交性)">
                <p>
                    任意の整数 <InlineMath math="m, n \in \mathbb{Z}" /> に対し、次の等式が成り立つ。
                </p>
                <BlockMath math="\int_{-\pi}^{\pi} e^{inx} e^{-imx} dx = \begin{cases} 2\pi & (m = n) \\ 0 & (m \neq n) \end{cases}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="m = n" /> のとき、被積分関数は <InlineMath math="e^{inx} e^{-inx} = e^0 = 1" /> となるので、
                </p>
                <BlockMath math="\int_{-\pi}^{\pi} 1 dx = [x]_{-\pi}^{\pi} = 2\pi" />
                <p>
                    <InlineMath math="m \neq n" /> のとき、指数関数の積分公式より、
                </p>
                <BlockMath math="\begin{aligned} \int_{-\pi}^{\pi} e^{i(n-m)x} dx &= \left[ \frac{e^{i(n-m)x}}{i(n-m)} \right]_{-\pi}^{\pi} \\ &= \frac{e^{i(n-m)\pi} - e^{-i(n-m)\pi}}{i(n-m)} \end{aligned}" />
                <p>
                    ここで、任意の整数 <InlineMath math="k" /> に対して <InlineMath math="e^{ik\pi} = \cos k\pi + i\sin k\pi = (-1)^k" /> かつ <InlineMath math="e^{-ik\pi} = (-1)^k" /> であるから、分子は <InlineMath math="(-1)^{n-m} - (-1)^{n-m} = 0" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この性質は、関数をベクトルとして見たときに、三角関数系が互いに直角をなす基底のような役割を果たしていることを意味します。具体的な数値で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-1 (直交性の確認)">
                <p>
                    <InlineMath math="n=1, m=2" /> のとき、
                </p>
                <BlockMath math="\begin{aligned} \int_{-\pi}^{\pi} e^{ix} e^{-2ix} dx &= \int_{-\pi}^{\pi} e^{-ix} dx = [i e^{-ix}]_{-\pi}^{\pi} \\ &= i(e^{-i\pi} - e^{i\pi}) = i(-1 - (-1)) \\ &= 0 \end{aligned}" />
                <p>
                    一方で <InlineMath math="n=m=1" /> のときは、
                </p>
                <BlockMath math="\int_{-\pi}^{\pi} e^{ix} e^{-ix} dx = \int_{-\pi}^{\pi} 1 dx = 2\pi" />
                <p>
                    となります。この「自分自身との内積だけが残り、他は消える」という性質が、関数の成分を取り出すための鍵となります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="直交性の意味と L² 空間">
                <p>
                    数学的には、三角関数系 <InlineMath math="\{e^{inx}\}_{n \in \mathbb{Z}}" /> は、二乗可積分関数の空間 <InlineMath math="L^2([-\pi, \pi])" /> における正規直交系（定数倍を除けば）を構成しています。関数を「周波数成分ベクトル」への射影として捉える視点は、現代の信号処理技術（音声圧縮や画像処理など）の根本的な理論基盤となっています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フーリエ係数の定義と実形式・複素形式の対応</h2>

            <p>
                直交性を利用すると、ある関数 <InlineMath math="f(x)" /> に含まれる特定の周波数成分を取り出すことができます。これを「フーリエ計数」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (複素フーリエ係数)">
                <p>
                    周期 <InlineMath math="2\pi" /> の可積分関数 <InlineMath math="f \in L^1([-\pi, \pi])" /> に対し、複素フーリエ係数 <InlineMath math="c_n" /> を次のように定める。
                </p>
                <BlockMath math="c_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-inx} dx \quad (n \in \mathbb{Z})" />
            </ContentBox>

            <p>
                まずは、単純な関数から係数を求めてみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-2 (余弦関数の複素係数)">
                <p>
                    <InlineMath math="f(x) = \cos x" /> のとき、オイラーの公式 <InlineMath math="\cos x = \frac{e^{ix} + e^{-ix}}{2}" /> より、
                </p>
                <BlockMath math="f(x) = \frac{1}{2}e^{ix} + \frac{1}{2}e^{-ix}" />
                <p>
                    複素フーリエ係数の定義 <InlineMath math="c_n" /> は、関数に含まれる <InlineMath math="e^{inx}" /> 成分の大きさを表すため、直感的に <InlineMath math="c_1 = 1/2, c_{-1} = 1/2" /> で他の <InlineMath math="n" /> では <InlineMath math="0" /> になることが予想されます。実際に計算すると、直交性によりこの結果が得られます。
                </p>
            </ContentBox>

            <p>
                実数のみを扱う場合には、正弦関数（sin）と余弦関数（cos）を用いた「実形式」のフーリエ係数もしばしば用いられます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-3 (実形式フーリエ係数)">
                <p>
                    実数値関数 <InlineMath math="f(x)" /> に対し、実形式フーリエ係数 <InlineMath math="a_n, b_n" /> を次のように定める。
                </p>
                <BlockMath math="\begin{aligned} a_n &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos nx dx \quad (n \geq 0) \\ b_n &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx dx \quad (n \geq 1) \end{aligned}" />
                <p>
                    特に <InlineMath math="a_0 / 2 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) dx" /> は、関数 <InlineMath math="f(x)" /> の区間内での平均値を表します。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-3 (正弦関数の実形式係数)">
                <p>
                    <InlineMath math="f(x) = \sin 2x" /> の場合、すでに特定の周波数（<InlineMath math="n=2" />）の正弦波のみで構成されているため、<InlineMath math="b_2 = 1" /> となり、他のすべての係数は <InlineMath math="0" /> となります。
                </p>
            </ContentBox>

            <p>
                複素形式と実形式は、オイラーの公式を介して密接に関連しています。
            </p>

            <ContentBox type="proposition" title="Proposition 1.1-4 (実形式と複素形式の対応)">
                <p>
                    複素係数 <InlineMath math="c_n" /> と実係数 <InlineMath math="a_n, b_n" /> の間には以下の関係がある。
                </p>
                <BlockMath math="\begin{aligned} c_n &= \frac{a_n - ib_n}{2}, \quad c_{-n} = \frac{a_n + ib_n}{2} \quad (n \geq 1) \\ c_0 &= \frac{a_0}{2} \end{aligned}" />
                <p>
                    特に <InlineMath math="f(x)" /> が実数値ならば、<InlineMath math="c_{-n} = \overline{c_n}" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    複素指数関数をオイラーの公式で展開すると、
                </p>
                <BlockMath math="\begin{aligned} c_n &= \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) (\cos nx - i\sin nx) dx \\ &= \frac{1}{2} \left[ \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos nx dx - i \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx dx \right] \\ &= \frac{a_n - ib_n}{2} \end{aligned}" />
                <p>
                    <InlineMath math="c_{-n}" /> についても同様の計算、あるいは <InlineMath math="\sin(-nx) = -\sin nx" /> の性質を用いることで示されます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-4 (線形結合の複素係数)">
                <p>
                    <InlineMath math="f(x) = 3\cos x + 4\sin x" /> のとき、実形式係数は <InlineMath math="a_1 = 3, b_1 = 4" /> です。これに対応する複素係数は、
                </p>
                <BlockMath math="c_1 = \frac{3-4i}{2}, \quad c_{-1} = \frac{3+4i}{2} = \overline{c_1}" />
                <p>
                    となります。
                </p>
            </ContentBox>

            <p>
                これらの係数を用いて形式的に作られる級数を「フーリエ級数」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-5 (フーリエ級数)">
                <p>
                    関数 <InlineMath math="f" /> のフーリエ級数を、記号「<InlineMath math="\sim" />」を用いて次のように書く。
                </p>
                <BlockMath math="f(x) \sim \sum_{n=-\infty}^{\infty} c_n e^{inx} = \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx)" />
            </ContentBox>

            <ContentBox type="remark" title="「~」記号の意味：収束の慎重さ">
                <p>
                    ここで等号ではなく「<InlineMath math="\sim" />」を用いるのは、右辺の無限級数が必ずしも元の関数 <InlineMath math="f(x)" /> に収束するとは限らないからです。フーリエ級数がどのようなときに、またどのような意味で（各点なのか、エネルギー的なのか）等号として結べるかは、本章の後半で詳しく調べます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な展開計算</h2>

            <p>
                具体的に、滑らかでない（微分不可能な）関数のフーリエ展開を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-5 (矩形波のフーリエ展開)">
                <p>
                    次の矩形波（符号関数）を考える。
                </p>
                <BlockMath math="f(x) = \text{sgn}(x) = \begin{cases} 1 & (0 < x < \pi) \\ -1 & (-\pi < x < 0) \end{cases}" />
                <p>
                    この関数は奇関数（<InlineMath math="f(-x) = -f(x)" />）なので、偶関数成分である <InlineMath math="\cos" /> 成分はすべて消え、<InlineMath math="a_n = 0" /> となります。正弦係数 <InlineMath math="b_n" /> を計算すると：
                </p>
                <BlockMath math="\begin{aligned} b_n &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx dx = \frac{2}{\pi} \int_{0}^{\pi} 1 \cdot \sin nx dx \\ &= \frac{2}{\pi} \left[ -\frac{\cos nx}{n} \right]_{0}^{\pi} = \frac{2}{n\pi} (1 - \cos n\pi) \\ &= \frac{2}{n\pi} (1 - (-1)^n) \end{aligned}" />
                <p>
                    <InlineMath math="n" /> が偶数のときは <InlineMath math="0" />、奇数のときは <InlineMath math="\frac{4}{n\pi}" /> となります。よって、
                </p>
                <BlockMath math="f(x) \sim \frac{4}{\pi} \left( \sin x + \frac{1}{3}\sin 3x + \frac{1}{5}\sin 5x + \cdots \right)" />
            </ContentBox>

            <p>
                もう一つの有名な例として、のこぎり波のような直線関数の展開を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-6 (f(x) = x の展開)">
                <p>
                    <InlineMath math="f(x) = x \quad (-\pi < x < \pi)" /> の場合、これも奇関数なので <InlineMath math="a_n = 0" /> です。部分積分を用いて <InlineMath math="b_n" /> を求めると：
                </p>
                <BlockMath math="\begin{aligned} b_n &= \frac{2}{\pi} \int_{0}^{\pi} x \sin nx dx \\ &= \frac{2}{\pi} \left( \left[ -\frac{x\cos nx}{n} \right]_{0}^{\pi} + \int_{0}^{\pi} \frac{\cos nx}{n} dx \right) \\ &= \frac{2}{\pi} \left( -\frac{\pi(-1)^n}{n} + 0 \right) = \frac{2(-1)^{n+1}}{n} \end{aligned}" />
                <p>
                    したがって、フーリエ展開は次のようになります。
                </p>
                <BlockMath math="x \sim 2 \left( \sin x - \frac{1}{2}\sin 2x + \frac{1}{3}\sin 3x - \cdots \right)" />
                <p>
                    この式に <InlineMath math="x = \pi/2" /> を代入すると、有名なライプニッツの級数公式 <InlineMath math="\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \cdots" /> が導かれます（この点での収束の正当性は次節で学びます）。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>三角関数系 <InlineMath math="\{e^{inx}\}" /> は、異なる周波数の間で内積がゼロになる「直交性」を持つ。</li>
                    <li>複素フーリエ係数 <InlineMath math="c_n" /> は、関数と基底 <InlineMath math="e^{inx}" /> の内積として定義される。</li>
                    <li>実形式の係数 <InlineMath math="a_n, b_n" /> と複素形式 <InlineMath math="c_n" /> は、オイラーの公式を通じて相互変換可能である。</li>
                    <li>フーリエ級数は形式的な対応であり、等号として結ぶには収束条件の吟味が必要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
