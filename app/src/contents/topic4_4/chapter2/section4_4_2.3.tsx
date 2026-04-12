import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ProperConvexFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、最適化問題や双対性の理論において不可欠となる「真の凸関数（proper convex function）」という概念を導入します。これは、関数の値域を実数のみならず <InlineMath math="\pm\infty" /> まで拡張した上で、扱いやすい性質を持つ凸関数のクラスを特定するためのものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">拡張実数値関数</h2>

            <p>
                最適化問題において、制約条件を満たさない領域での関数値を <InlineMath math="+\infty" /> と設定することで、制約付き問題を無制約問題として統一的に扱うことができます。このため、関数の値域を拡張することが有用です。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (拡張実数値関数)">
                <p>
                    <b>拡張実数値関数（extended real-valued function）</b>とは、値域として実数 <InlineMath math="\mathbb{R}" /> に <InlineMath math="+\infty" /> や <InlineMath math="-\infty" /> を加えた関数を指す。
                    典型的には、<InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> または <InlineMath math="f: \mathbb{R}^n \to [-\infty, +\infty]" /> の形をとる。
                </p>
            </ContentBox>

            <p>
                拡張実数値関数を考える際、関数が有限の値をとる領域が重要になります。
            </p>

            <ContentBox type="definition" title="Definition 2.3-2 (有効定義域)">
                <p>
                    拡張実数値関数 <InlineMath math="f" /> の<b>有効定義域（effective domain）</b> <InlineMath math="\mathrm{dom}(f)" /> は次のように定義される。
                </p>
                <BlockMath math="\mathrm{dom}(f) = \{x \in \mathbb{R}^n \mid f(x) < +\infty\}" />
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1">
                <p>
                    次のように定義される拡張実数値関数 <InlineMath math="f" /> を考える。
                </p>
                <BlockMath math="f(x) = \begin{cases} \sqrt{x} & (x \geq 0) \\ +\infty & (x < 0) \end{cases}" />
                <p>
                    このとき、<InlineMath math="f(x) < +\infty" /> となるのは <InlineMath math="x \geq 0" /> の場合のみであるから、有効定義域は <InlineMath math="\mathrm{dom}(f) = [0, \infty)" /> となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">真の凸関数</h2>

            <p>
                値域に <InlineMath math="+\infty" /> や <InlineMath math="-\infty" /> を許すと、凸関数の定義に現れる不等式が不定形（例えば <InlineMath math="+\infty - \infty" />）になる可能性があります。そこで、凸解析において「健全な」関数を扱うために、真の凸関数を定義します。
            </p>

            <ContentBox type="definition" title="Definition 2.3-3 (真の凸関数)">
                <p>
                    拡張実数値関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> が<b>真の凸関数（proper convex function）</b>であるとは、以下の条件をすべて満たすことである。
                </p>
                <ol className="list-decimal list-inside">
                    <li><InlineMath math="f" /> は凸関数である。</li>
                    <li>すべての <InlineMath math="x \in \mathbb{R}^n" /> に対して <InlineMath math="f(x) > -\infty" /> が成り立つ。</li>
                    <li><InlineMath math="\mathrm{dom}(f) \neq \emptyset" />（すなわち、少なくとも1つの点で有限の値をとる）。</li>
                </ol>
            </ContentBox>

            <p>
                この定義により、真の凸関数は決して <InlineMath math="-\infty" /> をとらず、また常に <InlineMath math="+\infty" /> となる退屈な関数も除外されます。
            </p>

            <ContentBox type="example" title="Example 2.3-2">
                <p>
                    恒等的に <InlineMath math="f(x) \equiv +\infty" /> となる関数は、凸関数の条件（<InlineMath math="\infty \leq \infty" />）を満たすが、有効定義域が空（<InlineMath math="\mathrm{dom}(f) = \emptyset" />）であるため、真の凸関数ではない。
                </p>
                <p>
                    一方、<InlineMath math="f(x) = x^2" /> は常に有限の値（<InlineMath math="\mathbb{R}" />）をとり、凸関数であるから、真の凸関数である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-3">
                <p>
                    関数 <InlineMath math="f(x) = -\sqrt{x}" /> （<InlineMath math="x \geq 0" /> で定義され、<InlineMath math="x < 0" /> では <InlineMath math="+\infty" />）は真の凸関数ではない。なぜなら、これは凸関数ではなく、凹関数だからである。
                </p>
                <p>
                    実際に凸性の不等式を検証する。<InlineMath math="x = 0" />, <InlineMath math="y = 4" />, <InlineMath math="\lambda = 1/2" /> とすると、
                </p>
                <BlockMath math="f\left(\frac{1}{2}\cdot 0 + \frac{1}{2}\cdot 4\right) = f(2) = -\sqrt{2} \approx -1.414" />
                <p>
                    一方で、
                </p>
                <BlockMath math="\frac{1}{2}f(0) + \frac{1}{2}f(4) = \frac{1}{2}(0) + \frac{1}{2}(-2) = -1" />
                <p>
                    <InlineMath math="-\sqrt{2} \leq -1" /> は成り立たないため、凸ではない。
                </p>
            </ContentBox>

            <p>
                このように、真の凸関数は数学的に良好な性質を持つため、以降の議論で中心的な役割を果たします。
            </p>

            <ContentBox type="remark" title={<span>双共役と <InlineMath math="-\infty" /> の問題</span>}>
                <p>
                    共役関数やフェンシェル双対性（Chapter 4, 5）の理論では、多くの場合「真の閉凸関数」の範疇で議論を行います。関数の値域に <InlineMath math="-\infty" /> を許してしまうと、共役関数 <InlineMath math="f^*" /> や双共役関数 <InlineMath math="f^{**}" /> の計算において不定形が生じるなどして、理論の整合性が破綻します。そのため、実用上の凸解析では実質的に真の凸関数のみを対象とします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>拡張実数値関数を導入し、関数が有限の値をとる領域を有効定義域 <InlineMath math="\mathrm{dom}(f)" /> と定義した。</li>
                    <li>真の凸関数とは、凸であり、決して <InlineMath math="-\infty" /> にならず、かつ有効定義域が空でない関数のことである。</li>
                    <li>凸解析の双対性理論においては、真の凸関数を扱うことが前提となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
