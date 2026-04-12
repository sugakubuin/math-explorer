import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SubgradientAndSubdifferential() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、微分不可能な凸関数に対しても「微分」の概念を拡張する、劣勾配（subgradient）および劣微分（subdifferential）を導入します。これは凸解析において中心的な役割を果たす概念であり、非平滑な最適化問題における最適性条件やアルゴリズムの基礎となります。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">劣勾配の定義</h2>

            <p>微分可能な関数の場合、接平面はグラフの下側に位置するという凸関数の性質があります。この性質を微分不可能な点にも拡張し、接超平面を一般化したものが劣勾配です。</p>

            <ContentBox type="definition" title="Definition 3.1-1 (劣勾配)">
                <p>凸関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> に対して、ベクトル <InlineMath math="g \in \mathbb{R}^n" /> が点 <InlineMath math="x" /> における<b>劣勾配（subgradient）</b>であるとは、すべての <InlineMath math="y \in \mathbb{R}^n" /> に対して以下の不等式が成り立つことである。</p>
                <BlockMath math="f(y) \geq f(x) + \langle g, y - x \rangle" />
            </ContentBox>

            <p>この劣勾配を集めた集合を劣微分と呼びます。</p>

            <ContentBox type="definition" title="Definition 3.1-2 (劣微分)">
                <p>点 <InlineMath math="x" /> における劣勾配全体の集合を<b>劣微分（subdifferential）</b>と呼び、<InlineMath math="\partial f(x)" /> と表記する。</p>
                <BlockMath math="\partial f(x) = \{ g \in \mathbb{R}^n \mid f(y) \geq f(x) + \langle g, y - x \rangle \quad \forall y \in \mathbb{R}^n \}" />
            </ContentBox>

            <p>劣微分の具体的な計算例として、絶対値関数を見てみましょう。</p>

            <ContentBox type="example" title="Example 3.1-1">
                <p>1次元の絶対値関数 <InlineMath math="f(x) = |x|" /> の劣微分 <InlineMath math="\partial f(x)" /> を計算する。</p>
                <p><InlineMath math="x > 0" /> のとき、<InlineMath math="f" /> は微分可能で傾きは <InlineMath math="1" /> なので、<InlineMath math="\partial f(x) = \{1\}" /> となる。<br />
                <InlineMath math="x < 0" /> のとき、傾きは <InlineMath math="-1" /> なので、<InlineMath math="\partial f(x) = \{-1\}" /> となる。</p>
                <p>問題は微分不可能な <InlineMath math="x = 0" /> の場合である。劣勾配の定義より、<InlineMath math="g \in \partial f(0)" /> はすべての <InlineMath math="y \in \mathbb{R}" /> に対して以下を満たす。</p>
                <BlockMath math="|y| \geq |0| + g(y - 0) \iff |y| \geq gy" />
                <p>これがすべての <InlineMath math="y" /> で成り立つための必要十分条件は <InlineMath math="-1 \leq g \leq 1" /> である。したがって、</p>
                <BlockMath math="\partial f(0) = [-1, 1]" />
                <p>となる。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">劣微分の幾何的意味と基本性質</h2>

            <p>劣微分は、凸関数に対する一般化された接超平面の傾きの集合として幾何的に解釈できます。次に、劣微分の集合としての性質（閉凸性、コンパクト性）について述べます。</p>

            <ContentBox type="proposition" title="Proposition 3.1-1">
                <p>凸関数 <InlineMath math="f" /> の劣微分 <InlineMath math="\partial f(x)" /> は閉凸集合である。さらに、<InlineMath math="x \in \mathrm{int}(\mathrm{dom}(f))" /> のとき、<InlineMath math="\partial f(x)" /> は空でなくコンパクトである。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>まず閉凸性を示す。<InlineMath math="\partial f(x)" /> の定義より、</p>
                <BlockMath math="\partial f(x) = \bigcap_{y \in \mathbb{R}^n} \{ g \in \mathbb{R}^n \mid \langle y - x, g \rangle \leq f(y) - f(x) \}" />
                <p>と表せる。これは閉半空間の共通部分であるため、<InlineMath math="\partial f(x)" /> は閉凸集合である。</p>
                <p>次に、<InlineMath math="x \in \mathrm{int}(\mathrm{dom}(f))" /> のとき空でないこと（存在）は、方向微分の劣線形性とハーン-バナッハの分離論法（あるいは分離定理）を用いて示される（詳細は関数解析（4-1）やより高度な凸解析の定理に譲る）。</p>
                <p>最後にコンパクト性（有界閉集合であること）を示す。<InlineMath math="x \in \mathrm{int}(\mathrm{dom}(f))" /> のとき、Chapter 2 で見たように <InlineMath math="f" /> は <InlineMath math="x" /> の近傍で局所リプシッツ連続である。そのリプシッツ定数を <InlineMath math="L" /> とすると、任意の <InlineMath math="g \in \partial f(x)" /> に対して、適当な <InlineMath math="y" /> を選ぶことで <InlineMath math="\|g\| \leq L" /> が示される。したがって有界であり、閉集合であることと合わせてコンパクトとなる。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>微分可能な関数に対しては、劣微分は一点集合となり、通常の微分（勾配）と一致します。</p>

            <ContentBox type="proposition" title="Proposition 3.1-2">
                <p><InlineMath math="f" /> が <InlineMath math="x" /> で微分可能ならば、<InlineMath math="\partial f(x) = \{\nabla f(x)\}" /> である。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p><InlineMath math="\nabla f(x) \in \partial f(x)" /> であることは、凸関数の一次の近似式</p>
                <BlockMath math="f(y) \geq f(x) + \langle \nabla f(x), y - x \rangle" />
                <p>から明らかである。<br />
                逆に、任意の <InlineMath math="g \in \partial f(x)" /> をとる。任意の方向 <InlineMath math="d \in \mathbb{R}^n" /> と十分小さな <InlineMath math="t > 0" /> に対して、</p>
                <BlockMath math="f(x + td) \geq f(x) + t\langle g, d \rangle" />
                <p>が成り立つ。移項して <InlineMath math="t" /> で割ると、</p>
                <BlockMath math="\frac{f(x + td) - f(x)}{t} \geq \langle g, d \rangle" />
                <p><InlineMath math="t \to 0" /> とすると、左辺は方向微分 <InlineMath math="\langle \nabla f(x), d \rangle" /> に収束するので、</p>
                <BlockMath math="\langle \nabla f(x) - g, d \rangle \geq 0" />
                <p>これがすべての方向 <InlineMath math="d" /> について成り立つため、<InlineMath math="g = \nabla f(x)" /> でなければならない。よって <InlineMath math="\partial f(x) = \{\nabla f(x)\}" /> が示された。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-2">
                <p><InlineMath math="f(x) = x^2" /> の劣微分を考える。この関数は <InlineMath math="\mathbb{R}" /> 全体で微分可能であり、その導関数は <InlineMath math="f'(x) = 2x" /> である。したがって Proposition 3.1-2 より、すべての <InlineMath math="x \in \mathbb{R}" /> において</p>
                <BlockMath math="\partial f(x) = \{2x\}" />
                <p>となる。このように、微分可能な凸関数においては、劣微分は通常の微分に退化する。</p>
            </ContentBox>

            <ContentBox type="remark" title="非平滑最適化への架け橋">
                <p>劣微分は「微分の凸解析的一般化」です。<InlineMath math="\partial f(x)" /> が集合となることで、微分不可能点における関数の振る舞いを精密に捉えることができます。この概念は、最適化問題において「最適解で勾配がゼロになる」という条件を「最適解でゼロが劣微分に含まれる（<InlineMath math="0 \in \partial f(x)" />）」と一般化する際に不可欠であり、次節以降で見る非平滑最適化の理論的基盤となります。</p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>劣勾配 <InlineMath math="g" /> は不等式 <InlineMath math="f(y) \geq f(x) + \langle g, y - x \rangle" /> を満たすベクトルとして定義される。</li>
                    <li>劣微分 <InlineMath math="\partial f(x)" /> は劣勾配の全体集合であり、閉凸集合となる。</li>
                    <li>関数の有効定義域の内点において、劣微分は空でないコンパクト凸集合となる。</li>
                    <li>関数が微分可能な点では、劣微分は勾配ベクトルのみからなる一点集合 <InlineMath math="\{\nabla f(x)\}" /> に一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
