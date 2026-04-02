import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SturmLiouvilleProblemsSetting() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                分離変数法によって得られる空間方向の常微分方程式（ODE）は、しばしば<b>シュトゥルム・リウヴィル問題</b>と呼ばれる固有値問題に帰着されます。
                この理論は、なぜ特定の境界値問題に対して直交する固有関数が存在し、それらで展開が可能になるのかという根本的な疑問に答えるものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">シュトゥルム・リウヴィル方程式</h2>

            <p className="leading-relaxed">
                分離変数法で現れる多くの ODE は、以下の標準的な形式に書くことができます。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 (シュトゥルム・リウヴィルの方程式)">
                <p>
                    区間 <InlineMath math="a < x < b" /> における以下の形の固有値問題を<b>シュトゥルム・リウヴィル（SL）方程式</b>と呼ぶ：
                    <BlockMath math="\frac{d}{dx} \left[ p(x) \frac{dy}{dx} \right] + \left[ q(x) + \lambda w(x) \right] y = 0" />
                    ここで <InlineMath math="p(x) > 0" />、<InlineMath math="w(x) > 0" />（重み関数）であり、<InlineMath math="p, p', q, w" /> は連続であるとする。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1 (SL 形式への変換)">
                <p>
                    最も単純な例として、<InlineMath math="y'' + \lambda y = 0" /> は <InlineMath math="p(x) = 1, q(x) = 0, w(x) = 1" /> と置くことで SL 形式とみなすことができる。
                    また、ベッセル方程式 <InlineMath math="x^2 y'' + xy' + (x^2 - \nu^2)y = 0" /> も、適当な変形（両辺を <InlineMath math="x" /> で割る等）によって SL 形式 <InlineMath math="(xy')' + (x - \nu^2/x)y = 0" /> へと変換可能である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">自己共役性と境界条件</h2>

            <p className="leading-relaxed">
                SL 問題の核心は、その微分作用素が特定の境界条件のもとで「自己共役」になるという点にあります。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (SL 作用素の自己共役性)">
                <p>
                    作用素 <InlineMath math="L = -\frac{d}{dx} \left[ p(x) \frac{d}{dx} \right] - q(x)" /> を定義する。
                    ディリクレ条件（<InlineMath math="y(a)=y(b)=0" />）やノイマン条件（<InlineMath math="y'(a)=y'(b)=0" />）などの等質な境界条件のもとで、<InlineMath math="L" /> は自己共役である。すなわち、
                    <BlockMath math="\langle Lu, v \rangle_w = \langle u, Lv \rangle_w" />
                    が成り立つ。ここで内積は重み <InlineMath math="w" /> 付きで <InlineMath math="\langle f, g \rangle_w = \int_a^b f(x)g(x)w(x) dx" /> と定義される。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    部分積分を 2 回用いる。まず <InlineMath math="\int_a^b (p u')' v dx" /> を計算すると、
                    <BlockMath math="\int_a^b (p u')' v dx = [p u' v]_a^b - \int_a^b p u' v' dx" />
                    同様に、<InlineMath math="\int_a^b (p v')' u dx = [p v' u]_a^b - \int_a^b p v' u' dx" /> となる。
                    境界条件（例：<InlineMath math="u(a)=u(b)=0" />）により境界項 <InlineMath math="[p u' v]_a^b" /> および <InlineMath math="[p v' u]_a^b" /> は 0 になるため、
                    <BlockMath math="\int_a^b (Lu)v w dx = \int_a^b u(Lv)w dx" />
                    が成立し、自己共役性が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="自己共役作用素の威力">
                <p>
                    線形代数における対称行列（自己共役行列）が「実固有値を持ち、異なる固有値に属する固有ベクトルが直交する」という性質を持つのと同様に、SL 作用素も自己共役であることから直交性が導かれます。
                    この性質が、次の §5.3 で学ぶ固有関数の性質のすべての基礎となります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>シュトゥルム・リウヴィル（SL）方程式は、多くの物理現象に現れる 2 階線形 ODE の標準的な形式である。</li>
                    <li>適切な境界条件のもとで、SL 作用素は自己共役（エルミート）という重要な性質を持つ。</li>
                    <li>自己共役性は、固有値が実数となり、固有関数が直交するための数学的な保証となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
