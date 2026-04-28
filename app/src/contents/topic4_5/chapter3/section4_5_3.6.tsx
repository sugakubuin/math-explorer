import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LieBracket() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ベクトル場は関数に作用する微分作用素（導分）として定義されました。
                2つのベクトル場 <InlineMath math="X, Y" /> があるとき、それらを連続して作用させる <InlineMath math="X \circ Y" /> を考えると、これは一般に2階の微分作用素になってしまい、ベクトル場（1階の微分作用素）ではありません。
                しかし、作用の順序を入れ替えたものの差をとる「交換子」を考えると、驚くべきことに2階微分の項が打ち消し合い、再びベクトル場になります。
                この演算が<strong>リー括弧積（Lie bracket）</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リー括弧積の定義</h2>

            <p className="leading-relaxed">
                リー括弧積は、2つのベクトル場の「非可換性」を測る量として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 3.6-1 (リー括弧積)">
                <p>
                    <InlineMath math="X, Y \in \mathfrak{X}(M)" /> を多様体 <InlineMath math="M" /> 上の滑らかなベクトル場とする。
                    任意の関数 <InlineMath math="f \in C^\infty(M)" /> に対して、
                </p>
                <BlockMath math="[X, Y](f) = X(Y(f)) - Y(X(f))" />
                <p className="mt-2">
                    で定義される作用素 <InlineMath math="[X, Y]" /> を、<InlineMath math="X" /> と <InlineMath math="Y" /> の<strong>リー括弧積（Lie bracket）</strong>、または<strong>交換子（commutator）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定義式が本当にベクトル場（導分）を定めていることを確認します。
            </p>

            <ContentBox type="proposition" title="Proposition 3.6-1">
                <p>
                    任意のベクトル場 <InlineMath math="X, Y \in \mathfrak{X}(M)" /> に対して、リー括弧積 <InlineMath math="[X, Y]" /> は導分のライプニッツ則を満たし、したがって <InlineMath math="M" /> 上の滑らかなベクトル場である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    線形性は明らかである。ライプニッツ則 <InlineMath math="[X, Y](fg) = f[X, Y](g) + g[X, Y](f)" /> を示す。
                    <InlineMath math="X, Y" /> が導分であることを用いて、各項を展開する。
                </p>
                <BlockMath math="\begin{aligned} X(Y(fg)) &= X(f Y(g) + g Y(f)) \\ &= X(f)Y(g) + f X(Y(g)) + X(g)Y(f) + g X(Y(f)) \end{aligned}" />
                <p className="mt-2">
                    同様に、
                </p>
                <BlockMath math="\begin{aligned} Y(X(fg)) &= Y(f X(g) + g X(f)) \\ &= Y(f)X(g) + f Y(X(g)) + Y(g)X(f) + g Y(X(f)) \end{aligned}" />
                <p className="mt-2">
                    両者の差をとると、<InlineMath math="X(f)Y(g)" /> と <InlineMath math="Y(g)X(f)" />、および <InlineMath math="X(g)Y(f)" /> と <InlineMath math="Y(f)X(g)" /> が打ち消し合うため、
                </p>
                <BlockMath math="\begin{aligned} [X, Y](fg) &= f X(Y(g)) + g X(Y(f)) - f Y(X(g)) - g Y(X(f)) \\ &= f(X(Y(g)) - Y(X(g))) + g(X(Y(f)) - Y(X(f))) \\ &= f[X, Y](g) + g[X, Y](f) \end{aligned}" />
                <p className="mt-2">
                    となり、ライプニッツ則が成り立つ。したがって <InlineMath math="[X, Y]" /> は導分（ベクトル場）である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                局所座標を用いてリー括弧積を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.6-1">
                <p>
                    <InlineMath math="\mathbb{R}^3" /> 上のベクトル場 <InlineMath math="X = \frac{\partial}{\partial x}" /> と <InlineMath math="Y = x \frac{\partial}{\partial y}" /> のリー括弧積を計算する。
                </p>
                <p className="mt-2">
                    任意の関数 <InlineMath math="f(x,y,z)" /> に対して、
                </p>
                <BlockMath math="\begin{aligned} X(Y(f)) &= \frac{\partial}{\partial x} \left( x \frac{\partial f}{\partial y} \right) = \frac{\partial f}{\partial y} + x \frac{\partial^2 f}{\partial x \partial y} \\ Y(X(f)) &= x \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right) = x \frac{\partial^2 f}{\partial y \partial x} \end{aligned}" />
                <p className="mt-2">
                    滑らかな関数に対しては偏微分の順序が交換可能（<InlineMath math="\partial^2 f / \partial x \partial y = \partial^2 f / \partial y \partial x" />）であるため、差をとると2階微分の項が消える。
                </p>
                <BlockMath math="[X, Y](f) = \frac{\partial f}{\partial y} + x \frac{\partial^2 f}{\partial x \partial y} - x \frac{\partial^2 f}{\partial y \partial x} = \frac{\partial f}{\partial y}" />
                <p className="mt-2">
                    したがって、<InlineMath math="[X, Y] = \frac{\partial}{\partial y}" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本性質とフローとの関係</h2>

            <p className="leading-relaxed">
                リー括弧積は、線形代数学における交換子 <InlineMath math="[A, B] = AB - BA" /> と同じ代数的な性質を持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 3.6-2 (リー括弧積の性質)">
                <p>
                    任意のベクトル場 <InlineMath math="X, Y, Z \in \mathfrak{X}(M)" /> と実数 <InlineMath math="a, b \in \mathbb{R}" /> に対して、以下の性質が成り立つ。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><strong>双線形性：</strong> <InlineMath math="[aX + bY, Z] = a[X, Z] + b[Y, Z]" /></li>
                    <li><strong>反対称性：</strong> <InlineMath math="[X, Y] = -[Y, X]" /></li>
                    <li><strong>ヤコビ恒等式（Jacobi identity）：</strong> <InlineMath math="[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    双線形性と反対称性は定義から明らかである。ヤコビ恒等式は、各項を展開して足し合わせることで証明できる。
                </p>
                <BlockMath math="[X, [Y, Z]] = X(Y(Z)) - X(Z(Y)) - Y(Z(X)) + Z(Y(X))" />
                <p className="mt-2">
                    残りの2項も同様に展開し、すべて足し合わせると、12個の3階微分作用素の項がすべてペアになって打ち消し合い、<InlineMath math="0" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                リー括弧積の幾何学的な意味は、2つのベクトル場の「フローが交換するかどうか」を測ることにあります。
                前節で導入したフローを用いて、この関係を定理としてまとめます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.6-1">
                <p>
                    <InlineMath math="X, Y \in \mathfrak{X}(M)" /> をベクトル場とし、それぞれのフローを <InlineMath math="\theta^X_s, \theta^Y_t" /> とする。
                    このとき、<InlineMath math="[X, Y] = 0" /> であることと、2つのフローが交換可能であること、すなわち任意の <InlineMath math="s, t" /> に対して
                </p>
                <BlockMath math="\theta^X_s \circ \theta^Y_t = \theta^Y_t \circ \theta^X_s" />
                <p className="mt-2">
                    が成り立つことは同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の概略を述べる。フローが交換可能であると仮定する。
                    関数 <InlineMath math="f" /> に対して、<InlineMath math="\theta^X_s \circ \theta^Y_t(p)" /> での値を <InlineMath math="s" /> と <InlineMath math="t" /> で偏微分する。<InlineMath math="s" /> で微分すると <InlineMath math="X" /> の作用が現れ、<InlineMath math="t" /> で微分すると <InlineMath math="Y" /> の作用が現れる。
                    偏微分の順序交換定理から、<InlineMath math="\frac{\partial^2}{\partial s \partial t} f(\theta^X_s(\theta^Y_t(p))) = \frac{\partial^2}{\partial t \partial s} f(\theta^Y_t(\theta^X_s(p)))" /> が成り立ち、これを <InlineMath math="s=0, t=0" /> で評価すると <InlineMath math="X(Y(f)) = Y(X(f))" />、すなわち <InlineMath math="[X, Y](f) = 0" /> が得られる。
                </p>
                <p className="mt-2">
                    逆方向は、<InlineMath math="[X, Y] = 0" /> ならば <InlineMath math="\theta^X_s" /> による <InlineMath math="Y" /> の引き戻しが <InlineMath math="Y" /> 自身に一致すること（リー微分が零であること）を示し、そこからフローの交換可能性を導く。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                フローの交換可能性を、具体的なベクトル場で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.6-2">
                <p>
                    <strong>交換する例：</strong> <InlineMath math="\mathbb{R}^2" /> で <InlineMath math="X = \frac{\partial}{\partial x}" />、<InlineMath math="Y = \frac{\partial}{\partial y}" /> とする。
                    明らかに <InlineMath math="[X, Y] = 0" /> である。
                    フローはそれぞれ <InlineMath math="x" /> 方向、<InlineMath math="y" /> 方向への平行移動であり、
                </p>
                <BlockMath math="\theta^X_s(x, y) = (x+s, y), \quad \theta^Y_t(x, y) = (x, y+t)" />
                <p className="mt-2">
                    これらは順序を入れ替えても <InlineMath math="(x+s, y+t)" /> となり、確かに交換可能である。
                </p>
                <p className="mt-4">
                    <strong>交換しない例：</strong> Example 3.6-1 の <InlineMath math="X = \frac{\partial}{\partial x}" />、<InlineMath math="Y = x \frac{\partial}{\partial y}" /> を考える。
                    <InlineMath math="[X, Y] = \frac{\partial}{\partial y} \neq 0" /> であった。
                    フローは、
                </p>
                <BlockMath math="\theta^X_s(x, y) = (x+s, y), \quad \theta^Y_t(x, y) = (x, y+tx)" />
                <p className="mt-2">
                    である。合成を計算すると、
                </p>
                <BlockMath math="\theta^Y_t(\theta^X_s(x, y)) = \theta^Y_t(x+s, y) = (x+s, y + t(x+s))" />
                <BlockMath math="\theta^X_s(\theta^Y_t(x, y)) = \theta^X_s(x, y+tx) = (x+s, y+tx)" />
                <p className="mt-2">
                    両者は <InlineMath math="ts" /> の分だけ異なり、フローは交換しない。この「ずれ」を生み出しているのが、まさにリー括弧積 <InlineMath math="[X, Y] = \frac{\partial}{\partial y}" /> である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="リー代数への展望">
                <p>
                    ベクトル場全体の空間 <InlineMath math="\mathfrak{X}(M)" /> は、リー括弧積 <InlineMath math="[\cdot, \cdot]" /> とともに<strong>リー代数（Lie algebra）</strong>と呼ばれる代数系をなします。
                    リー代数は、多様体論のみならず、リー群とリー代数（5-12）や物理学（量子力学、素粒子物理学）において中心的な役割を果たします。
                    特に、多様体が群構造を持つ「リー群」の場合、その単位元における接空間が有限次元のリー代数となり、群の局所的な構造を完全に決定することが知られています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ベクトル場のリー括弧積 <InlineMath math="[X, Y]" /> は、作用素の交換子 <InlineMath math="XY - YX" /> として定義され、再びベクトル場となる。</li>
                    <li>リー括弧積は双線形性、反対称性、ヤコビ恒等式を満たし、ベクトル場の空間にリー代数の構造を与える。</li>
                    <li><InlineMath math="[X, Y] = 0" /> であることは、<InlineMath math="X" /> と <InlineMath math="Y" /> のフロー（積分曲線に沿った移動）が交換可能であることと同値である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
