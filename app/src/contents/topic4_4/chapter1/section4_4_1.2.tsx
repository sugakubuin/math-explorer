import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvexHullAndConvexCone() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、与えられた集合から新たな凸集合を構成する基本的な操作である「凸包」と、凸集合の特殊なクラスである「凸錐」およびその双対概念である「極錐」について解説します。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">凸包</h2>

            <p>任意の集合に対して、それを含む最小の凸集合を考えることができます。これを凸包と呼びます。</p>

            <ContentBox type="definition" title="Definition 1.2-1 (凸包)">
                <p>
                    集合 <InlineMath math="S \subseteq \mathbb{R}^n" /> を含む最小の凸集合を、<InlineMath math="S" /> の<b>凸包（convex hull）</b>と呼び、<InlineMath math="\mathrm{conv}(S)" /> と表す。
                </p>
                <p>
                    同値的に、<InlineMath math="\mathrm{conv}(S)" /> は <InlineMath math="S" /> の有限個の点による凸結合の全体として定義される。
                </p>
                <BlockMath math="\mathrm{conv}(S) = \left\{ \sum_{i=1}^k \lambda_i x_i \mid k \in \mathbb{N}, x_i \in S, \lambda_i \geq 0, \sum_{i=1}^k \lambda_i = 1 \right\}" />
            </ContentBox>

            <p>定義が抽象的であるため、具体的な計算例を見てみましょう。</p>

            <ContentBox type="example" title="Example 1.2-1">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> における集合 <InlineMath math="S = \{(0,0), (1,0), (0,1), (1/3, 1/3)\}" /> の凸包を考える。
                </p>
                <p>
                    点 <InlineMath math="(1/3, 1/3)" /> は、他の3点 <InlineMath math="x_1 = (0,0)" />, <InlineMath math="x_2 = (1,0)" />, <InlineMath math="x_3 = (0,1)" /> の凸結合として以下のように表せる。
                </p>
                <BlockMath math="(1/3, 1/3) = \frac{1}{3}(0,0) + \frac{1}{3}(1,0) + \frac{1}{3}(0,1)" />
                <p>
                    したがって、第4点はすでに最初の3点がなす三角形の内部（凸結合）に含まれている。ゆえに、この集合の凸包は3点 <InlineMath math="(0,0), (1,0), (0,1)" /> を頂点とする三角形（内部を含む）となる。
                </p>
                <BlockMath math="\mathrm{conv}(S) = \mathrm{conv}\{(0,0), (1,0), (0,1)\}" />
            </ContentBox>

            <p>凸包が「最小の凸集合」であることは、次の命題によって保証されます。</p>

            <ContentBox type="proposition" title="Proposition 1.2-1">
                <p>
                    <InlineMath math="\mathrm{conv}(S)" /> は、<InlineMath math="S" /> を含むすべての凸集合の共通部分に等しい。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="C = \bigcap \{ K \mid K \	ext{ は凸集合であり, } S \subseteq K \}" /> とおく。示すべきことは <InlineMath math="\mathrm{conv}(S) = C" /> である。
                </p>
                <p>
                    まず、<InlineMath math="\mathrm{conv}(S) \subseteq C" /> を示す。任意の凸集合 <InlineMath math="K \supseteq S" /> をとる。凸集合の定義より、<InlineMath math="K" /> はその要素の任意の有限凸結合を含む。したがって、<InlineMath math="S" /> の要素の凸結合である <InlineMath math="\mathrm{conv}(S)" /> の元はすべて <InlineMath math="K" /> に含まれる。これがすべての <InlineMath math="K \supseteq S" /> について成り立つため、<InlineMath math="\mathrm{conv}(S) \subseteq C" /> である。
                </p>
                <p>
                    次に、<InlineMath math="C \subseteq \mathrm{conv}(S)" /> を示す。定義より <InlineMath math="S \subseteq \mathrm{conv}(S)" /> である。また、任意の2つの凸結合の凸結合は再び凸結合となるため、<InlineMath math="\mathrm{conv}(S)" /> 自身が凸集合である。したがって、<InlineMath math="\mathrm{conv}(S)" /> は <InlineMath math="S" /> を含む凸集合の一つであり、共通部分 <InlineMath math="C" /> の定義より <InlineMath math="C \subseteq \mathrm{conv}(S)" /> が成り立つ。
                </p>
                <p>
                    以上より、<InlineMath math="\mathrm{conv}(S) = C" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">凸錐と極錐</h2>

            <p>次に、原点を頂点とする特殊な凸集合である「凸錐」を定義します。</p>

            <ContentBox type="definition" title="Definition 1.2-2 (凸錐)">
                <p>
                    集合 <InlineMath math="K \subseteq \mathbb{R}^n" /> が<b>凸錐（convex cone）</b>であるとは、<InlineMath math="K" /> が錐（cone）であり、かつ凸集合であることである。
                </p>
                <p>
                    同値的に、任意の <InlineMath math="x, y \in K" /> と任意の <InlineMath math="\alpha, \beta \geq 0" /> に対して、<InlineMath math="\alpha x + \beta y \in K" /> が成り立つこと、すなわち非負結合について閉じていることである。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2">
                <p>
                    非負直交象限 <InlineMath math="\mathbb{R}^n_+ = \{x \in \mathbb{R}^n \mid x_i \geq 0 \text{ for all } i\}" /> は凸錐である。
                </p>
                <p>
                    実際、任意の <InlineMath math="x, y \in \mathbb{R}^n_+" /> と <InlineMath math="\alpha, \beta \geq 0" /> に対して、第 <InlineMath math="i" /> 成分は <InlineMath math="\alpha x_i + \beta y_i \geq 0" /> となるため、<InlineMath math="\alpha x + \beta y \in \mathbb{R}^n_+" /> が成り立つ。
                </p>
            </ContentBox>

            <p>凸錐に対して、その双対となる「極錐」を定義します。これは後の最適化理論において重要な役割を果たします。</p>

            <ContentBox type="definition" title="Definition 1.2-3 (極錐)">
                <p>
                    凸錐 <InlineMath math="K" /> に対して、その<b>極錐（polar cone）</b> <InlineMath math="K^\circ" /> を次のように定義する。
                </p>
                <BlockMath math="K^\circ = \{ y \in \mathbb{R}^n \mid \langle y, x \rangle \leq 0 \text{ for all } x \in K \}" />
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-3">
                <p>
                    非負直交象限 <InlineMath math="\mathbb{R}^n_+" /> の極錐を求める。
                </p>
                <p>
                    定義より、<InlineMath math="y \in (\mathbb{R}^n_+)^\circ" /> となる条件は、任意の <InlineMath math="x \in \mathbb{R}^n_+" /> に対して <InlineMath math="\langle y, x \rangle = \sum_{i=1}^n y_i x_i \leq 0" /> となることである。
                </p>
                <p>
                    <InlineMath math="x" /> として標準基底ベクトル <InlineMath math="e_i" /> （第 <InlineMath math="i" /> 成分が1で他が0）をとると、<InlineMath math="e_i \in \mathbb{R}^n_+" /> であり、<InlineMath math="\langle y, e_i \rangle = y_i \leq 0" /> を得る。これがすべての <InlineMath math="i" /> で成り立つため、<InlineMath math="y \in \mathbb{R}^n_-" /> が必要である。
                </p>
                <p>
                    逆に <InlineMath math="y \in \mathbb{R}^n_-" /> ならば、<InlineMath math="x \geq 0" /> のとき常に <InlineMath math="\sum y_i x_i \leq 0" /> となる。
                </p>
                <p>
                    したがって、<InlineMath math="(\mathbb{R}^n_+)^\circ = \mathbb{R}^n_- = \{ y \mid y_i \leq 0 \text{ for all } i \}" /> である。
                </p>
            </ContentBox>

            <p>極錐は、元の錐の性質によらず、常に閉凸錐になるという著しい性質を持ちます。</p>

            <ContentBox type="proposition" title="Proposition 1.2-2">
                <p>
                    任意の集合 <InlineMath math="K" /> に対して、その極錐 <InlineMath math="K^\circ" /> は閉凸錐である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    極錐の定義より、
                </p>
                <BlockMath math="K^\circ = \bigcap_{x \in K} \{ y \in \mathbb{R}^n \mid \langle x, y \rangle \leq 0 \}" />
                <p>
                    と表せる。ここで、各 <InlineMath math="\{ y \mid \langle x, y \rangle \leq 0 \}" /> は閉半空間（原点を通る閉半空間）である。
                </p>
                <p>
                    閉半空間は閉集合であり、凸集合であり、錐でもある。任意の個数の閉集合の共通部分は閉集合であり、凸集合の共通部分は凸集合であり、錐の共通部分は錐である。
                </p>
                <p>
                    したがって、<InlineMath math="K^\circ" /> は閉凸錐である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="双対性への伏線">
                <p>
                    極錐 <InlineMath math="K^\circ" /> は、幾何学的な双対性を表現する概念です。ある方向に進むベクトルたちのなす錐に対して、「それらすべてと鈍角（または直角）をなす方向」の集まりが極錐になります。
                    この概念は、のちに学ぶ「フェンシェル双対性」（Chapter 5）や、制約付き最適化問題における KKT 条件の定式化などにおいて、非常に重要な役割を果たします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>集合の凸包は、その集合の点からなる凸結合の全体であり、元の集合を含む最小の凸集合である。</li>
                    <li>凸錐は、非負結合について閉じている集合である。</li>
                    <li>極錐は、元の錐のすべての元と内積が非正となるベクトルの集合であり、常に閉凸錐となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
