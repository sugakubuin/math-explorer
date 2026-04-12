import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MaximalMonotonicityOfSubdifferentials() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>前節では単調作用素の概念を導入し、凸関数の劣微分が単調作用素であることを確認しました。本節では、この性質をさらに深め、閉真凸関数の劣微分が「極大単調作用素」と呼ばれる特別なクラスに属することを示します。極大単調性は、微分方程式や凸最適化における解の存在を保証するための強力な理論的基盤となります。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極大単調作用素の定義</h2>

            <p>まず、極大単調作用素とは何かを正確に定義します。直感的には、これ以上グラフを拡張すると単調性が失われてしまうような単調作用素のことです。</p>

            <ContentBox type="definition" title={<span>Definition 6.2-1 (<b>極大単調作用素</b>)</span>}>
                <p>
                    集合値写像 <InlineMath math="T: \mathbb{R}^n \rightrightarrows \mathbb{R}^n" /> が<b>極大単調作用素</b>（maximal monotone operator）であるとは、<InlineMath math="T" /> が単調であり、かつ <InlineMath math="T" /> のグラフ
                </p>
                <BlockMath math="\mathrm{graph}(T) = \{(x, u) \in \mathbb{R}^n \times \mathbb{R}^n \mid u \in T(x)\}" />
                <p>
                    を真に含むような単調作用素が存在しないことをいう。
                </p>
                <p>
                    すなわち、任意の <InlineMath math="(y, v) \in \mathrm{graph}(T)" /> に対して <InlineMath math="\langle u - v, x - y \rangle \geq 0" /> が成り立つならば、<InlineMath math="u \in T(x)" />（つまり <InlineMath math="(x, u) \in \mathrm{graph}(T)" />）でなければならない。
                </p>
            </ContentBox>

            <p>この定義を理解するために、最も基本的な単調作用素である恒等作用素の例を見てみましょう。</p>

            <ContentBox type="example" title={<span>Example 6.2-1 (恒等作用素の極大単調性)</span>}>
                <p>
                    <InlineMath math="T(x) = \{x\}" />（恒等作用素）は極大単調作用素である。
                </p>
                <p>
                    これが極大単調であることを確かめるために、<InlineMath math="T" /> のグラフの外にある点 <InlineMath math="(x_0, u_0)" />（すなわち <InlineMath math="u_0 \neq x_0" />）をグラフに追加したと仮定する。この新しい関係が単調であるためには、任意の <InlineMath math="y \in \mathbb{R}^n" /> に対して、
                </p>
                <BlockMath math="\langle u_0 - y, x_0 - y \rangle \geq 0" />
                <p>
                    が成り立たなければならない。しかし、<InlineMath math="y = u_0" /> を選ぶと、左辺は <InlineMath math="\langle 0, x_0 - u_0 \rangle = 0" /> となり矛盾はしないが、もし <InlineMath math="y = x_0 + \epsilon(u_0 - x_0)" /> のように選べば、適当な <InlineMath math="y" /> に対して内積を負にすることができる。例えば <InlineMath math="y = u_0" /> は <InlineMath math="T" /> のグラフ上の点であるが、<InlineMath math="y = \frac{x_0 + u_0}{2}" /> を考えると、
                </p>
                <BlockMath math="\begin{aligned} \langle u_0 - \frac{x_0 + u_0}{2}, x_0 - \frac{x_0 + u_0}{2} \rangle &= \langle \frac{u_0 - x_0}{2}, \frac{x_0 - u_0}{2} \rangle \\ &= -\frac{1}{4}\|x_0 - u_0\|^2 < 0 \end{aligned}" />
                <p>
                    となり、単調性が崩れる。したがって、これ以上グラフを広げることはできず、<InlineMath math="T" /> は極大単調である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ロカフェラーの定理</h2>

            <p>前節で劣微分が単調作用素であることを学びました。凸解析における驚くべき結果の一つは、閉真凸関数の劣微分が常に極大単調になるという事実です。これをロカフェラーの定理と呼びます。</p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (ロカフェラーの定理)">
                <p>
                    <InlineMath math="f: \mathbb{R}^n \	o \mathbb{R} \cup \{+\infty\}" /> が閉真凸関数ならば、その劣微分 <InlineMath math="\partial f: \mathbb{R}^n \rightrightarrows \mathbb{R}^n" /> は極大単調作用素である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\partial f" /> が単調作用素であることは既に示されている。極大性を示すために、<InlineMath math="(x_0, u_0) \notin \mathrm{graph}(\partial f)" /> を任意にとる。すなわち <InlineMath math="u_0 \notin \partial f(x_0)" /> である。このとき、ある <InlineMath math="(y, v) \in \mathrm{graph}(\partial f)" /> が存在して、
                </p>
                <BlockMath math="\langle u_0 - v, x_0 - y \rangle < 0" />
                <p>
                    となることを示せばよい。これは、グラフに <InlineMath math="(x_0, u_0)" /> を追加すると単調性が失われることを意味する。
                </p>
                <p>
                    平行移動により、一般性を失うことなく <InlineMath math="x_0 = 0" />, <InlineMath math="u_0 = 0" /> と仮定してよい（関数 <InlineMath math="\tilde{f}(x) = f(x + x_0) - \langle u_0, x \rangle" /> を考えればよい）。このとき <InlineMath math="0 \notin \partial f(0)" /> であり、示すべきことは、ある <InlineMath math="y \in \mathbb{R}^n" /> と <InlineMath math="v \in \partial f(y)" /> が存在して <InlineMath math="\langle v, y \rangle < 0" /> となることである。
                </p>
                <p>
                    もしすべての <InlineMath math="y" /> と <InlineMath math="v \in \partial f(y)" /> に対して <InlineMath math="\langle v, y \rangle \geq 0" /> が成り立つと仮定する。フェンシェル共役と近接作用素の性質（モローの分解など）を用いると、ある点での劣微分の性質から大域的な最小性を導くことができる。詳細な分離論法とフェンシェル-モロの定理（Theorem 4.4-1）を用いると、この仮定の下では <InlineMath math="f" /> が原点で最小値をとることになり、フェルマの規則（Theorem 3.5-1）より <InlineMath math="0 \in \partial f(0)" /> となって矛盾する。
                </p>
                <p>
                    したがって、<InlineMath math="\langle v, y \rangle < 0" /> となる <InlineMath math="(y, v) \in \mathrm{graph}(\partial f)" /> が必ず存在し、<InlineMath math="\partial f" /> は極大単調である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>この定理は抽象的に見えますが、具体的な集合の指示関数の劣微分を考えるとその幾何学的な意味が明確になります。</p>

            <ContentBox type="example" title={<span>Example 6.2-2 (指示関数の劣微分と正規錐)</span>}>
                <p>
                    区間 <InlineMath math="C = [0, 1]" /> の指示関数 <InlineMath math="f(x) = \delta_{[0,1]}(x)" /> を考える。<InlineMath math="f" /> の劣微分は正規錐 <InlineMath math="\partial f(x) = N_{[0,1]}(x)" /> である。
                </p>
                <ul>
                    <li><InlineMath math="x \in (0, 1)" /> のとき、<InlineMath math="N_{[0,1]}(x) = \{0\}" /></li>
                    <li><InlineMath math="x = 0" /> のとき、<InlineMath math="N_{[0,1]}(0) = (-\infty, 0]" /></li>
                    <li><InlineMath math="x = 1" /> のとき、<InlineMath math="N_{[0,1]}(1) = [0, +\infty)" /></li>
                </ul>
                <p>
                    このグラフは、<InlineMath math="\mathbb{R}^2" /> 平面上に描くと、<InlineMath math="x=0" /> で下に伸びる半直線、<InlineMath math="x \in (0,1)" /> で <InlineMath math="x" /> 軸上の線分、<InlineMath math="x=1" /> で上に伸びる半直線からなる「Z字型」のような連続した曲線（集合）になる。これ以外の点、例えば <InlineMath math="(1.5, 0)" /> などをグラフに追加しようとすると、既存の点（例えば <InlineMath math="(1, 1)" />）との間で単調性 <InlineMath math="\langle 0 - 1, 1.5 - 1 \rangle = -0.5 < 0" /> が崩れてしまう。したがって、これ以上拡張できず極大単調である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="極大単調作用素と凸最適化">
                <p>
                    有限次元において、任意の極大単調作用素が必ずしも何らかの凸関数の劣微分として表せるわけではありません。劣微分として表現できる極大単調作用素は「巡回的単調（cyclically monotone）」というさらに強い条件を満たすものに限られます。しかし、劣微分が極大単調であるという事実は、微分方程式の弱解の存在や、次節で学ぶミンティの定理を通じた最適解の存在証明において決定的な役割を果たします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>極大単調作用素は、グラフをこれ以上拡張すると単調性が失われるような単調作用素である。</li>
                    <li>閉真凸関数の劣微分は、常に極大単調作用素である（ロカフェラーの定理）。</li>
                    <li>劣微分の極大単調性は、凸最適化問題における解の存在やアルゴリズムの収束解析の強力な基礎となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
