import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExteriorDerivative() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                関数（0-形式）の微分 <InlineMath math="df" /> は、1-形式として定義されました。
                この操作を一般の <InlineMath math="k" />-形式へと拡張し、<InlineMath math="k" />-形式から <InlineMath math="(k+1)" />-形式を作り出す微分作用素を<strong>外微分（Exterior derivative）</strong>と呼びます。
                外微分は、ベクトル解析における勾配（<InlineMath math="\mathrm{grad}" />）、回転（<InlineMath math="\mathrm{curl}" />）、発散（<InlineMath math="\mathrm{div}" />）をすべて統一的に扱うことができる、多様体論における最も重要な微分演算です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">外微分の定義</h2>

            <p className="leading-relaxed">
                外微分 <InlineMath math="d" /> は、局所座標を用いて成分ごとに関数の微分 <InlineMath math="df" /> を計算し、ウェッジ積で繋ぐことで定義されます。
            </p>

            <ContentBox type="definition" title="Definition 5.3-1 (外微分)">
                <p>
                    多様体 <InlineMath math="M" /> 上の <InlineMath math="k" />-形式 <InlineMath math="\omega \in \Omega^k(M)" /> が、局所座標 <InlineMath math="(x^1, \ldots, x^n)" /> を用いて
                </p>
                <BlockMath math="\omega = \sum_I \omega_I(x) \, dx^I" />
                <p className="mt-2">
                    と表されているとする（ここで <InlineMath math="I = (i_1, \ldots, i_k)" /> は添字の組、<InlineMath math="dx^I = dx^{i_1} \wedge \cdots \wedge dx^{i_k}" />）。
                    このとき、<InlineMath math="\omega" /> の<strong>外微分（exterior derivative）</strong> <InlineMath math="d\omega \in \Omega^{k+1}(M)" /> を次のように定義する。
                </p>
                <BlockMath math="d\omega = \sum_I d\omega_I \wedge dx^I = \sum_I \left( \sum_{j=1}^n \frac{\partial \omega_I}{\partial x^j} dx^j \right) \wedge dx^I" />
            </ContentBox>

            <p className="leading-relaxed">
                この定義は一見すると局所座標の取り方に依存しているように見えますが、実際には座標系によらずに well-defined な大域的演算子を定めます。
            </p>

            <ContentBox type="proposition" title="Proposition 5.3-1">
                <p>
                    外微分 <InlineMath math="d : \Omega^k(M) \to \Omega^{k+1}(M)" /> の定義は、局所座標の取り方に依存しない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    2つの座標系 <InlineMath math="(x^1, \ldots, x^n)" /> と <InlineMath math="(y^1, \ldots, y^n)" /> が与えられたとする。
                    関数 <InlineMath math="f" /> の微分 <InlineMath math="df" /> が座標系に依存しないこと（<InlineMath math="df = \sum \frac{\partial f}{\partial x^i} dx^i = \sum \frac{\partial f}{\partial y^j} dy^j" />）は連鎖律から明らかである。
                </p>
                <p className="mt-2">
                    <InlineMath math="\omega = \sum \omega_I \, dx^I" /> を <InlineMath math="y" /> 座標で展開したものを <InlineMath math="\omega = \sum \tilde{\omega}_J \, dy^J" /> とする。
                    <InlineMath math="dx^I" /> を <InlineMath math="dy" /> で展開し、偏微分の連鎖律を用いることで、<InlineMath math="x" /> 座標で計算した <InlineMath math="d\omega" /> と <InlineMath math="y" /> 座標で計算した <InlineMath math="d\omega" /> が完全に一致することが示される。
                    （この計算はやや煩雑であるが、本質的には偏微分の連鎖律とウェッジ積の多重線形性によるものである。）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な微分形式に対して、外微分を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 5.3-1">
                <p>
                    <InlineMath math="\mathbb{R}^3" /> 上の1-形式 <InlineMath math="\omega = xy\,dz" /> の外微分 <InlineMath math="d\omega" /> を計算する。
                </p>
                <p className="mt-2">
                    定義に従い、係数関数 <InlineMath math="\omega_z = xy" /> の微分 <InlineMath math="d(xy)" /> を計算し、<InlineMath math="dz" /> とウェッジ積をとる。
                </p>
                <BlockMath math="\begin{aligned} d\omega &= d(xy) \wedge dz \\ &= \left( \frac{\partial(xy)}{\partial x} dx + \frac{\partial(xy)}{\partial y} dy + \frac{\partial(xy)}{\partial z} dz \right) \wedge dz \\ &= (y\,dx + x\,dy + 0\,dz) \wedge dz \\ &= y\,dx \wedge dz + x\,dy \wedge dz \end{aligned}" />
                <p className="mt-2">
                    この計算は、ベクトル解析（3-1）におけるベクトル場 <InlineMath math="\boldsymbol{A} = (0, 0, xy)" /> の回転（<InlineMath math="\mathrm{curl}\,\boldsymbol{A}" />）に対応している。
                    実際、<InlineMath math="\mathrm{curl}\,\boldsymbol{A} = (x, -y, 0)" /> であり、これは2-形式 <InlineMath math="x\,dy \wedge dz - y\,dz \wedge dx = y\,dx \wedge dz + x\,dy \wedge dz" /> の係数と一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="d^2 = 0" /> とライプニッツ則</h2>

            <p className="leading-relaxed">
                外微分 <InlineMath math="d" /> の最も重要で驚くべき性質は、2回連続して作用させると必ず <InlineMath math="0" /> になるという事実です。
                これは、偏微分の順序交換可能性（<InlineMath math="\partial^2 f / \partial x \partial y = \partial^2 f / \partial y \partial x" />）とウェッジ積の反対称性（<InlineMath math="dx \wedge dy = -dy \wedge dx" />）が絶妙に組み合わさった結果です。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 5.3-1 (<InlineMath math="d^2 = 0" />)</span>}>
                <p>
                    任意の <InlineMath math="k" />-形式 <InlineMath math="\omega \in \Omega^k(M)" /> に対して、外微分を2回施すと常に <InlineMath math="0" /> となる。
                </p>
                <BlockMath math="d(d\omega) = 0" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、0-形式（関数 <InlineMath math="f" />）に対して示す。
                </p>
                <BlockMath math="df = \sum_{j=1}^n \frac{\partial f}{\partial x^j} dx^j" />
                <p className="mt-2">
                    これにもう一度 <InlineMath math="d" /> を作用させる。
                </p>
                <BlockMath math="\begin{aligned} d(df) &= \sum_{j=1}^n d\left( \frac{\partial f}{\partial x^j} \right) \wedge dx^j \\ &= \sum_{j=1}^n \left( \sum_{i=1}^n \frac{\partial^2 f}{\partial x^i \partial x^j} dx^i \right) \wedge dx^j \\ &= \sum_{i,j=1}^n \frac{\partial^2 f}{\partial x^i \partial x^j} dx^i \wedge dx^j \end{aligned}" />
                <p className="mt-2">
                    この和を <InlineMath math="i < j" /> の項と <InlineMath math="i > j" /> の項に分ける（<InlineMath math="i = j" /> の項は <InlineMath math="dx^i \wedge dx^i = 0" /> より消える）。
                </p>
                <BlockMath math="d(df) = \sum_{i < j} \left( \frac{\partial^2 f}{\partial x^i \partial x^j} dx^i \wedge dx^j + \frac{\partial^2 f}{\partial x^j \partial x^i} dx^j \wedge dx^i \right)" />
                <p className="mt-2">
                    <InlineMath math="f" /> は滑らかなので偏微分の順序は交換可能（<InlineMath math="\partial^2 f / \partial x^i \partial x^j = \partial^2 f / \partial x^j \partial x^i" />）であり、ウェッジ積は反交換する（<InlineMath math="dx^j \wedge dx^i = -dx^i \wedge dx^j" />）。
                    したがって、括弧の中は
                </p>
                <BlockMath math="\frac{\partial^2 f}{\partial x^i \partial x^j} dx^i \wedge dx^j - \frac{\partial^2 f}{\partial x^i \partial x^j} dx^i \wedge dx^j = 0" />
                <p className="mt-2">
                    となり、<InlineMath math="d(df) = 0" /> が示された。
                </p>
                <p className="mt-2">
                    一般の <InlineMath math="k" />-形式 <InlineMath math="\omega = \sum \omega_I \, dx^I" /> に対しては、
                </p>
                <BlockMath math="d(d\omega) = d\left( \sum d\omega_I \wedge dx^I \right) = \sum d(d\omega_I) \wedge dx^I = 0" />
                <p className="mt-2">
                    となる（ここで、後述のライプニッツ則と <InlineMath math="d(dx^I) = 0" /> を用いた）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-2">
                <p>
                    <InlineMath math="f \in C^\infty(\mathbb{R}^2)" /> に対して <InlineMath math="d^2 = 0" /> を具体的に検証する。
                </p>
                <BlockMath math="df = f_x\,dx + f_y\,dy" />
                <p className="mt-2">
                    これの外微分をとると、
                </p>
                <BlockMath math="\begin{aligned} d(df) &= d(f_x) \wedge dx + d(f_y) \wedge dy \\ &= (f_{xx}\,dx + f_{xy}\,dy) \wedge dx + (f_{yx}\,dx + f_{yy}\,dy) \wedge dy \\ &= f_{xx}\,dx \wedge dx + f_{xy}\,dy \wedge dx + f_{yx}\,dx \wedge dy + f_{yy}\,dy \wedge dy \\ &= 0 - f_{xy}\,dx \wedge dy + f_{yx}\,dx \wedge dy + 0 \\ &= (f_{yx} - f_{xy})\,dx \wedge dy \end{aligned}" />
                <p className="mt-2">
                    <InlineMath math="f_{xy} = f_{yx}" /> より、確かに <InlineMath math="0" /> となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                外微分は、ウェッジ積に対して「次数付きライプニッツ則（積の微分法則）」を満たします。
            </p>

            <ContentBox type="proposition" title="Proposition 5.3-2 (次数付きライプニッツ則)">
                <p>
                    <InlineMath math="\omega \in \Omega^k(M)" /> と <InlineMath math="\eta \in \Omega^l(M)" /> に対して、
                </p>
                <BlockMath math="d(\omega \wedge \eta) = d\omega \wedge \eta + (-1)^k \omega \wedge d\eta" />
                <p className="mt-2">
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    局所座標表示 <InlineMath math="\omega = f \, dx^I" />、<InlineMath math="\eta = g \, dx^J" /> について示せば十分である。
                </p>
                <BlockMath math="\omega \wedge \eta = fg \, dx^I \wedge dx^J" />
                <p className="mt-2">
                    これに外微分を作用させると、関数の積の微分法則より
                </p>
                <BlockMath math="\begin{aligned} d(\omega \wedge \eta) &= d(fg) \wedge dx^I \wedge dx^J \\ &= (g\,df + f\,dg) \wedge dx^I \wedge dx^J \\ &= g\,df \wedge dx^I \wedge dx^J + f\,dg \wedge dx^I \wedge dx^J \end{aligned}" />
                <p className="mt-2">
                    第1項は <InlineMath math="(df \wedge dx^I) \wedge (g\,dx^J) = d\omega \wedge \eta" /> となる。
                    第2項において、<InlineMath math="dg" />（1-形式）を <InlineMath math="dx^I" />（<InlineMath math="k" />-形式）の右側に移動させるため、ウェッジ積の反可換性により <InlineMath math="(-1)^k" /> の符号がつく。
                </p>
                <BlockMath math="f\,dg \wedge dx^I \wedge dx^J = (-1)^k f \, dx^I \wedge dg \wedge dx^J = (-1)^k (f\,dx^I) \wedge (dg \wedge dx^J) = (-1)^k \omega \wedge d\eta" />
                <p className="mt-2">
                    したがって、公式が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ベクトル解析との対応">
                <p>
                    <InlineMath math="d^2 = 0" /> という性質は、ベクトル解析（3-1）で学んだ以下の2つの有名な恒等式を、多様体上で統一的に表現したものです。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\mathrm{curl}(\mathrm{grad}\,f) = \mathbf{0}" /> （勾配場の回転は零）</li>
                    <li><InlineMath math="\mathrm{div}(\mathrm{curl}\,\boldsymbol{A}) = 0" /> （回転場の発散は零）</li>
                </ul>
                <p className="mt-2">
                    また、この <InlineMath math="d^2 = 0" /> という性質こそが、第7章で学ぶ「ド・ラームコホモロジー」を定義するための代数的な基盤となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>外微分 <InlineMath math="d" /> は、<InlineMath math="k" />-形式から <InlineMath math="(k+1)" />-形式を作り出す、座標系に依存しない微分演算子である。</li>
                    <li>外微分を2回連続して作用させると常に <InlineMath math="0" /> となる（<InlineMath math="d^2 = 0" />）。</li>
                    <li>外微分はウェッジ積に対して次数付きライプニッツ則 <InlineMath math="d(\omega \wedge \eta) = d\omega \wedge \eta + (-1)^k \omega \wedge d\eta" /> を満たす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
