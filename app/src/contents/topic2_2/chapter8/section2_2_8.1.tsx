import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_8_1() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで、関数は主に <InlineMath math="y = f(x)" /> のように「陽（よう）」に表されたもの（<strong>陽関数</strong>、explicit function）を扱ってきました。
                しかし、図形の方程式 <InlineMath math="x^2 + y^2 = 1" /> のように、変数 <InlineMath math="x" /> と <InlineMath math="y" /> の関係が <InlineMath math="F(x,y) = 0" /> という方程式の形で与えられることがあります。
                このように方程式に「陰（いん）」に潜んでいる関数の関係を<strong>陰関数</strong>（implicit function）と呼びます。
            </p>
            <p>
                本章では、「方程式 <InlineMath math="F(x,y) = 0" /> が与えられたとき、そこから局所的に関数 <InlineMath math="y = f(x)" /> を作ることができるか？」という問いに答える<strong>陰関数定理</strong>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">陰関数定理（1変数版）</h2>

            <p>
                方程式 <InlineMath math="F(x,y) = 0" /> が常に全域で一つの関数 <InlineMath math="y = f(x)" /> を定めるとは限りません。
                例えば円の方程式 <InlineMath math="x^2 + y^2 - 1 = 0" /> であれば、ある <InlineMath math="x" /> に対して <InlineMath math="y" /> は正負の2つの値をとり得るため、一つの関数にはなりません。
                しかし、円上の特定の点 <InlineMath math="(x_0, y_0)" /> の「ごく近く（局所的）」に限定すれば、上半円 <InlineMath math="y = \sqrt{1-x^2}" /> や下半円 <InlineMath math="y = -\sqrt{1-x^2}" /> のように一意な関数を定めることができます。
            </p>
            <p>
                この「局所的に1価関数が定まるための条件」を与えるのが陰関数定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 8.1-1 (陰関数定理：1変数版)">
                <p>
                    <InlineMath math="D \subset \mathbb{R}^2" /> を開領域とし、関数 <InlineMath math="F: D \to \mathbb{R}" /> は <InlineMath math="C^1" /> 級であるとする。
                </p>
                <p className="mt-2">
                    点 <InlineMath math="(a, b) \in D" /> において、次の2つの条件が成り立つと仮定する：
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><InlineMath math="F(a, b) = 0" /> （点が図形上にある）</li>
                    <li><InlineMath math="F_y(a, b) \neq 0" /> （<InlineMath math="y" /> 方向の偏微分が0でない）</li>
                </ol>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ <InlineMath math="F_y" /> は <InlineMath math="\frac{\partial F}{\partial y}" /> の略記）
                </p>
                <p className="mt-2">
                    このとき、<InlineMath math="a" /> の開区間（近傍）<InlineMath math="I" /> と、<InlineMath math="b" /> の開区間（近傍）<InlineMath math="J" /> が存在して、次の性質を満たす唯一の <InlineMath math="C^1" /> 級関数 <InlineMath math="f: I \to J" /> が定まる：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="b = f(a)" /></li>
                    <li>すべての <InlineMath math="x \in I" /> に対して <InlineMath math="F(x, f(x)) = 0" /> が成り立つ。</li>
                </ul>
                <p className="mt-2">
                    すなわち、方程式 <InlineMath math="F(x, y) = 0" /> は点 <InlineMath math="(a,b)" /> の近傍で、<InlineMath math="y = f(x)" /> の形に一意に「解ける」。
                </p>
            </ContentBox>

            <p>
                幾何学的には、条件 <InlineMath math="F_y(a, b) \neq 0" /> は「点 <InlineMath math="(a, b)" /> における接線が <InlineMath math="y" /> 軸と平行（つまり垂直な接線）ではない」ことを意味しています。
                接線が垂直でなければ、その点の周辺で曲線を <InlineMath math="x" /> に対する関数としてグラフに表すことができる、という直感的に極めて自然な主張です。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    ここでは連続関数の中間値の定理と導関数の定義を用いた初等的な証明を与える。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[1. 陰関数の存在と一意性]</p>
                <p className="mt-2">
                    仮定より <InlineMath math="F_y(a, b) \neq 0" /> である。一般性を失わず、<InlineMath math="F_y(a, b) > 0" /> と仮定する（負の場合は <InlineMath math="-F" /> を考えればよい）。
                    <InlineMath math="F" /> は <InlineMath math="C^1" /> 級なので <InlineMath math="F_y" /> は連続関数である。したがって、点 <InlineMath math="(a, b)" /> のある近傍が存在し、その領域内では常に <InlineMath math="F_y(x, y) > 0" /> となる。
                </p>
                <p className="mt-2">
                    この近傍内で、<InlineMath math="x = a" /> を固定した1変数関数 <InlineMath math="\phi(y) = F(a, y)" /> を考えると、<InlineMath math="\phi'(y) = F_y(a, y) > 0" /> となるため、<InlineMath math="\phi(y)" /> は <InlineMath math="y" /> について単調増加である。
                    また仮定より <InlineMath math="\phi(b) = F(a, b) = 0" /> である。
                </p>
                <p className="mt-2">
                    したがって、十分に小さな定数 <InlineMath math="\varepsilon > 0" /> を用いて区間 <InlineMath math="[b-\varepsilon, b+\varepsilon]" /> をとると、単調増加性より
                </p>
                <BlockMath math="F(a, b-\varepsilon) < 0 \quad \text{かつ} \quad F(a, b+\varepsilon) > 0" />
                <p className="mt-2">
                    が成り立つ。<InlineMath math="F" /> は連続関数であるから、<InlineMath math="x = a" /> から少しずらしてもこの符号関係は保たれる。
                    すなわち、ある十分に小さな <InlineMath math="\delta > 0" /> が存在して、区間 <InlineMath math="I = (a-\delta, a+\delta)" /> 内の任意の <InlineMath math="x" /> に対して、
                </p>
                <BlockMath math="F(x, b-\varepsilon) < 0 \quad \text{かつ} \quad F(x, b+\varepsilon) > 0" />
                <p className="mt-2">
                    となる。ここで任意の固定された <InlineMath math="x \in I" /> に対して、中間値の定理を閉区間 <InlineMath math="[b-\varepsilon, b+\varepsilon]" /> に適用すると、<InlineMath math="F(x, y) = 0" /> を満たす <InlineMath math="y" /> が少なくとも1つ存在する。
                    さらに、考えている領域内では <InlineMath math="F_y(x, y) > 0" /> であり <InlineMath math="y" /> について単調増加であるから、そのような <InlineMath math="y" /> は区間内にただ一つしか存在しない。
                </p>
                <p className="mt-2">
                    この「ただ一つ定まる <InlineMath math="y" />」を <InlineMath math="x" /> の関数として <InlineMath math="y = f(x)" /> と定義する。
                    これにより、<InlineMath math="I" /> 上で <InlineMath math="F(x, f(x)) = 0" /> を満たす一意の関数 <InlineMath math="f" /> が構成された。また構成方法から <InlineMath math="b = f(a)" /> である。
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[2. 陰関数の連続性]</p>
                <p className="mt-2">
                    構成で用いた <InlineMath math="\varepsilon > 0" /> は、領域内に収まる範囲で任意に小さく取れた。
                    任意の <InlineMath math="\varepsilon" /> に対して対応する <InlineMath math="\delta" /> が存在して <InlineMath math="x \in (a-\delta, a+\delta)" /> ならば <InlineMath math="f(x) \in (b-\varepsilon, b+\varepsilon)" /> となることは、まさに <InlineMath math="f(x)" /> が <InlineMath math="x=a" /> で連続であること（<InlineMath math="\varepsilon-\delta" /> 論法）を意味する。
                    <InlineMath math="x=a" /> 以外の <InlineMath math="I" /> の点でも同様の議論が成り立つため、<InlineMath math="f(x)" /> は <InlineMath math="I" /> 上で連続である。
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[3. 陰関数の微分可能性]</p>
                <p className="mt-2">
                    任意の点 <InlineMath math="x \in I" /> と増分 <InlineMath math="\Delta x \neq 0" /> を考える（<InlineMath math="x + \Delta x \in I" />）。
                    対応する <InlineMath math="y" /> の増分を <InlineMath math="\Delta y = f(x + \Delta x) - f(x)" /> とする。
                    <InlineMath math="f(x)" /> は連続であるから、<InlineMath math="\Delta x \to 0" /> のとき <InlineMath math="\Delta y \to 0" /> である。
                </p>
                <p className="mt-2">
                    <InlineMath math="F" /> のテーラー展開（または平均値の定理の2変数拡張）により、
                </p>
                <BlockMath math="\begin{aligned}
                                    0 &= F(x + \Delta x, y + \Delta y) - F(x, y) \\
                                      &= F_x(x, y)\Delta x + F_y(x, y)\Delta y + o(\sqrt{(\Delta x)^2 + (\Delta y)^2})
                                \end{aligned}" />
                <p className="mt-2">
                    と書ける。ここで <InlineMath math="\Delta x > 0" /> として両辺を <InlineMath math="\Delta x" /> で割り、極限 <InlineMath math="\Delta x \to 0" /> を考えると（高次項は消え）、
                </p>
                <BlockMath math="0 = F_x(x,y) + F_y(x,y) \frac{\Delta y}{\Delta x}" />
                <p className="mt-2">
                    <InlineMath math="F_y(x,y) \neq 0" /> であるから、偏導関数が存在し、
                </p>
                <BlockMath math="\lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = f'(x) = - \frac{F_x(x, y)}{F_y(x, y)}" />
                <p className="mt-2">
                    となる。右辺は <InlineMath math="x" /> と <InlineMath math="y=f(x)" /> の連続関数であるから、導関数 <InlineMath math="f'(x)" /> は連続である。よって <InlineMath math="f" /> は <InlineMath math="C^1" /> 級である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">陰関数の導関数</h2>

            <p>
                陰関数定理の素晴らしい点は、関数 <InlineMath math="f(x)" /> の具体的な「式形」が分からなくても、方程式 <InlineMath math="F(x, y) = 0" /> から直接、その導関数（微係数）を計算できる公式を提供してくれることです。
            </p>

            <ContentBox type="proposition" title="Proposition 8.1-1 (陰関数の微分公式)">
                <p>
                    Theorem 8.1-1 の条件の下で、陰関数 <InlineMath math="y = f(x)" /> の点 <InlineMath math="x \in I" /> における導関数は次の式で与えられる：
                </p>
                <BlockMath math="\frac{dy}{dx} = - \frac{F_x(x, y)}{F_y(x, y)}" />
                <p className="mt-2">
                    あるいは、点 <InlineMath math="(a, b)" /> での微係数であれば：
                </p>
                <BlockMath math="f'(a) = - \frac{F_x(a, b)}{F_y(a, b)}" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ ただし、右辺の <InlineMath math="y" /> には <InlineMath math="f(x)" /> が代入されるものとする。分母が0でないことは定理の仮定から保証されている。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    陰関数定理によって <InlineMath math="I" /> 上で恒等的に <InlineMath math="F(x, f(x)) = 0" /> が成り立つことが保証されている。
                    両辺を合成関数の微分法則（連鎖律）を用いて <InlineMath math="x" /> で微分する。
                </p>
                <p className="mt-2">
                    左辺の微分は、
                </p>
                <BlockMath math="\begin{aligned}
                                    \frac{d}{dx} F(x, f(x)) &= \frac{\partial F}{\partial x} \cdot \frac{dx}{dx} + \frac{\partial F}{\partial y} \cdot \frac{df(x)}{dx} \\
                                    &= F_x(x, y) \cdot 1 + F_y(x, y) \cdot \frac{dy}{dx}
                                \end{aligned}" />
                <p>
                    となる。右辺の定数0の微分は0であるから、
                </p>
                <BlockMath math="F_x(x, y) + F_y(x, y) \cdot \frac{dy}{dx} = 0" />
                <p className="mt-2">
                    <InlineMath math="F_y(x, y) \neq 0" />（近傍を十分小さく取れば保証される）であるため、これを <InlineMath math="\frac{dy}{dx}" /> について解くことができる：
                </p>
                <BlockMath math="\frac{dy}{dx} = - \frac{F_x(x, y)}{F_y(x, y)}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この手法を<strong>陰関数微分法</strong>と呼びます。陽関数に変形不可能な複雑な方程式（例えば <InlineMath math="y^5 + xy + x^3 = 1" /> など）であっても、この公式を使えば接線の傾き等の局所的な振る舞いを完全に解析することが可能になります。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>陰関数定理は、方程式 <InlineMath math="F(x, y) = 0" /> から局所的に一意な関数 <InlineMath math="y = f(x)" /> を定義できる十分条件を与える。</li>
                    <li>その条件とは、特定の点 <InlineMath math="(a,b)" /> において <InlineMath math="F(a, b) = 0" /> かつ <InlineMath math="F_y(a, b) \neq 0" /> が成り立つことである。</li>
                    <li>さらに、陰関数の導関数は方程式を解かずに <InlineMath math="\frac{dy}{dx} = -\frac{F_x}{F_y}" /> と偏微分を用いて直接計算できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
