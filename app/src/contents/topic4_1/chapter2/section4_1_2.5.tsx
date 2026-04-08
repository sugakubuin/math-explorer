import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BanachFixedPointTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                完備性を持つ空間（バナッハ空間や完備距離空間）の性質を利用した最も美しく実用的な結果の一つが、バナッハの不動点定理（縮小写像の原理）です。この定理は、ある種の方程式の解の存在と一意性を示すだけでなく、解を求めるための反復的（構成的）な方法をも提供します。本節ではその証明と、常微分方程式の解の存在定理への応用を見ます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">縮小写像定理</h2>

            <p>
                ある写像が、入力された任意の2点を写像した後で必ず「距離を縮める」とき、これを縮小写像と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.5-1 (縮小写像)">
                <p>
                    距離空間 <InlineMath math="(X, d)" />（ノルム空間の場合は <InlineMath math="d(x,y) = \|x - y\|" />）上の写像 <InlineMath math="T : X \to X" /> が<b>縮小写像（contraction mapping）</b>であるとは、ある定数 <InlineMath math="0 \leq q < 1" /> が存在して、任意の <InlineMath math="x, y \in X" /> に対して
                </p>
                <BlockMath math="d(T(x), T(y)) \leq q \, d(x, y)" />
                <p>
                    を満たすことである。
                </p>
            </ContentBox>

            <p>
                距離を常に <InlineMath math="q" /> 倍以下に縮める操作を何度も繰り返すとどうなるでしょうか。すべての点が次第に一点へと吸い寄せられていく様子がイメージできるはずです。
            </p>

            <ContentBox type="theorem" title="Theorem 2.5-1 (バナッハの不動点定理)">
                <p>
                    完備距離空間 <InlineMath math="X" /> 上の縮小写像 <InlineMath math="T : X \to X" /> は、一意の不動点（<InlineMath math="T(x^*) = x^*" /> を満たす点 <InlineMath math="x^* \in X" />）を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の初期点 <InlineMath math="x_0 \in X" /> を選び、写像を繰り返し適用して数列 <InlineMath math="x_{n+1} = T(x_n)" /> を構成する。<InlineMath math="n \geq 1" /> に対して隣り合う点の距離は、
                </p>
                <BlockMath math="\begin{aligned} d(x_{n+1}, x_n) &= d(T(x_n), T(x_{n-1})) \\ &\leq q \, d(x_n, x_{n-1}) \\ &\leq \cdots \\ &\leq q^n d(x_1, x_0) \end{aligned}" />
                <p>
                    と評価できる。よって、<InlineMath math="m > n" /> に対する2点間の距離は三角不等式を用いると、
                </p>
                <BlockMath math="\begin{aligned} d(x_m, x_n) &\leq d(x_m, x_{m-1}) + d(x_{m-1}, x_{m-2}) + \cdots + d(x_{n+1}, x_n) \\ &\leq (q^{m-1} + q^{m-2} + \cdots + q^n) \, d(x_1, x_0) \\ &= q^n \frac{1 - q^{m-n}}{1 - q} d(x_1, x_0) \\ &\leq \frac{q^n}{1 - q} d(x_1, x_0) \end{aligned}" />
                <p>
                    となる。<InlineMath math="0 \leq q < 1" /> なので、<InlineMath math="n \to \infty" /> のとき右辺は <InlineMath math="0" /> に収束する。したがって数列 <InlineMath math="(x_n)" /> はコーシー列である。
                </p>
                <p>
                    <InlineMath math="X" /> は完備距離空間であるため、このコーシー列はある極限点 <InlineMath math="x^* \in X" /> に収束する。<InlineMath math="T" /> は縮小写像なので（リプシッツ連続であり）連続写像である。極限を漸化式の両辺にとると、
                </p>
                <BlockMath math="\lim_{n \to \infty} x_{n+1} = \lim_{n \to \infty} T(x_n) \implies x^* = T(x^*)" />
                <p>
                    となり、<InlineMath math="x^*" /> は不動点であることが示された。
                </p>
                <p>
                    次に、一意性を背理法で示す。仮に <InlineMath math="T(y^*) = y^*" /> となる別の不動点 <InlineMath math="y^* \neq x^*" /> が存在したとする。縮小条件から、
                </p>
                <BlockMath math="d(x^*, y^*) = d(T(x^*), T(y^*)) \leq q \, d(x^*, y^*)" />
                <p>
                    <InlineMath math="d(x^*, y^*) > 0" /> なので両辺を割ると <InlineMath math="1 \leq q" /> となるが、これは <InlineMath math="q < 1" /> という縮小写像の条件に矛盾する。よって不動点は唯一である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 2.5-1 (<InlineMath math="\mathbb{R}" /> 上の縮小写像)</span>}>
                <p>
                    完備である <InlineMath math="\mathbb{R}" /> において、写像 <InlineMath math="T(x) = \frac{1}{2}x + 1" /> を考える。任意の <InlineMath math="x, y" /> について、
                </p>
                <BlockMath math="|T(x) - T(y)| = \left| \left(\frac{1}{2}x + 1\right) - \left(\frac{1}{2}y + 1\right) \right| = \frac{1}{2}|x - y|" />
                <p>
                    となり、<InlineMath math="q = 1/2 < 1" /> であるため縮小写像である。定理の通り、初期点 <InlineMath math="x_0 = 0" /> から反復させると
                </p>
                <BlockMath math="x_1 = 1,\ x_2 = \frac{3}{2},\ x_3 = \frac{7}{4},\ \ldots,\ x_n = 2 - \frac{1}{2^{n-1}}" />
                <p>
                    となり、この列は不動点 <InlineMath math="x^* = 2" /> （<InlineMath math="x = x/2 + 1" /> の解）へ必ず収束する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分方程式への応用</h2>

            <p>
                不動点定理の凄さは、実数ではなく「関数の空間」に対して適用したときに発揮されます。微分方程式の解の存在定理（ピカール・リンデレフの定理）は、関数空間における縮小写像定理によって見事に証明されます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.5-2 (ピカール-リンデレフの定理の証明への応用)">
                <p>
                    初期値問題 <InlineMath math="y'(t) = f(t, y(t))" />, <InlineMath math="y(t_0) = y_0" /> に対して、<InlineMath math="f" /> が <InlineMath math="y" /> についてリプシッツ連続であるとする。このとき、<InlineMath math="t_0" /> の近くの局所的な区間上で、微分方程式を満たす解が一意に存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の概略。微分方程式を初期値に基づく積分方程式に書き直す。
                </p>
                <BlockMath math="y(t) = y_0 + \int_{t_0}^t f(s, y(s)) \, ds" />
                <p>
                    この右辺を、関数 <InlineMath math="y" /> を入力とする作用素（写像）<InlineMath math="T" /> とみなす。すなわち、
                </p>
                <BlockMath math="(Ty)(t) = y_0 + \int_{t_0}^t f(s, y(s)) \, ds" />
                <p>
                    と定義すれば、これを満たす関数 <InlineMath math="y" /> を見つけることは「関数空間において <InlineMath math="T" /> の不動点 <InlineMath math="Ty = y" /> を探す」ことと完全に同値である。
                </p>
                <p>
                    対象とする関数空間を、閉区間 <InlineMath math="[t_0 - \delta, t_0 + \delta]" /> 上の連続関数空間 <InlineMath math="C[t_0-\delta, t_0+\delta]" />（上限ノルム）とする。Theorem 2.2-1 よりこれはバナッハ空間（完備）である。
                </p>
                <p>
                    <InlineMath math="f" /> はリプシッツ連続である（すなわち <InlineMath math="|f(t, y_1) - f(t, y_2)| \leq L|y_1 - y_2|" />）。関数の差のノルムを評価すると、
                </p>
                <BlockMath math="\begin{aligned} \|Ty_1 - Ty_2\|_\infty &= \sup_{t} \left| \int_{t_0}^t \left( f(s, y_1(s)) - f(s, y_2(s)) \right) \, ds \right| \\ &\leq \sup_{t} \int_{t_0}^t L |y_1(s) - y_2(s)| \, ds \\ &\leq L \, \delta \, \|y_1 - y_2\|_\infty \end{aligned}" />
                <p>
                    区間の幅 <InlineMath math="\delta" /> を十分小さく取り、<InlineMath math="L \delta < 1" /> となるように選べば、写像 <InlineMath math="T" /> は縮小写像となる。よってバナッハの不動点定理が適用可能であり、<InlineMath math="T" /> は完備空間内でただ一つの不動点（＝微分方程式の解）を持つことが証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この証明で用いられた漸化式 <InlineMath math="y_{n+1} = Ty_n" /> をピカール反復と呼びます。実際に具体的な方程式に対して関数列が解に収束する様子を追ってみましょう。
            </p>

            <ContentBox type="example" title="Example 2.5-2 (ピカール反復の計算)">
                <p>
                    非常にシンプルな微分方程式 <InlineMath math="y' = y" />, <InlineMath math="y(0) = 1" /> を考える。対応する積分作用素は
                </p>
                <BlockMath math="(Ty)(t) = 1 + \int_0^t y(s) \, ds" />
                <p>
                    である。初項を定数関数 <InlineMath math="y_0(t) = 1" /> としてピカール反復を行う。
                </p>
                <BlockMath math="y_1(t) = (Ty_0)(t) = 1 + \int_0^t 1 \, ds = 1 + t" />
                <BlockMath math="y_2(t) = (Ty_1)(t) = 1 + \int_0^t (1 + s) \, ds = 1 + t + \frac{t^2}{2}" />
                <BlockMath math="\begin{aligned} y_3(t) &= (Ty_2)(t) = 1 + \int_0^t \left(1 + s + \frac{s^2}{2}\right) \, ds \\ &= 1 + t + \frac{t^2}{2} + \frac{t^3}{6} \end{aligned}" />
                <p>
                    一般項は
                </p>
                <BlockMath math="y_n(t) = 1 + t + \frac{t^2}{2!} + \cdots + \frac{t^n}{n!} = \sum_{k=0}^n \frac{t^k}{k!}" />
                <p>
                    となり、これはマクローリン展開の形から自然対数の底を用いた指数関数 <InlineMath math="e^t" /> へと連続関数空間内で一様に収束する。<InlineMath math="y(t) = e^t" /> は確かに元の微分方程式の解である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="構成的証明の勝利">
                <p>
                    バナッハの不動点定理は関数解析の「最初の見事な成功例」と言われます。ただ解の存在を示すだけでなく、「適当な初期関数を用意して作用素を何度も通せば、だんだん真の関数解に近づいていく」という、具体的なアルゴリズム（構成的手法）まで同時に与えている点が極めて強力です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>完備空間上の縮小写像（距離を定数 <InlineMath math="q < 1" /> 倍以下にする写像）は、必ずただ一つの不動点（写像で動かない点）を持つ（バナッハの不動点定理）。</li>
                    <li>不動点は、任意の初期点から写像を反復適用するだけで極限として容易に見つけることができる。</li>
                    <li>微分方程式を積分方程式に変形し、解となる関数を探す問題を関数空間上の不動点を探す問題に帰着させることで解の存在と一意性が証明できる（ピカール・リンデレフの定理）。</li>
                    <li>関数空間が完備（バナッハ空間）であることは、微分方程式の解を極限として構成する際に不可欠な前提となっている。</li>
                </ul>
            </ContentBox>

        </section>
    );
}
