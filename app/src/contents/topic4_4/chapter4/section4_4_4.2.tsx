import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConjugateFunctionExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では共役関数（フェンシェル共役）の定義と基本的な性質を学びました。本節では、最適化や解析学で頻繁に登場する具体的な関数（二次関数、指数関数、ノルムなど）について、その共役関数を計算します。さらに、凸集合の指示関数とそのサポート関数が共役の枠組みにおいて完全に双対な関係にあることを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本的な共役関数の計算</h2>

            <p>
                まずは具体的な関数の共役関数を導出します。共役関数は上限 <InlineMath math="\sup" /> として定義されるため、内部の関数が微分可能な場合には一階の最適性条件から上限を達成する点を求めることができます。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (二次関数)">
                <p>
                    正定値対称行列 <InlineMath math="A" /> を用いた二次関数 <InlineMath math="f(x) = \frac{1}{2}x^T A x" /> の共役関数を計算します。
                    共役関数の定義より、
                </p>
                <BlockMath math="f^*(y) = \sup_{x} \left\{ \langle y, x \rangle - \frac{1}{2}x^T A x \right\}" />
                <p>
                    内部の関数 <InlineMath math="g(x) = y^T x - \frac{1}{2}x^T A x" /> は <InlineMath math="A" /> が正定値であるため上に凸であり、勾配をゼロとおくことで最大値を与える <InlineMath math="x" /> が求まります。
                </p>
                <BlockMath math="\nabla g(x) = y - Ax = 0 \implies x = A^{-1}y" />
                <p>
                    これを元の式に代入すると、
                </p>
                <BlockMath math="\begin{aligned} f^*(y) &= y^T (A^{-1}y) - \frac{1}{2}(A^{-1}y)^T A (A^{-1}y) \\ &= y^T A^{-1} y - \frac{1}{2}y^T A^{-1} y \\ &= \frac{1}{2}y^T A^{-1} y \end{aligned}" />
                <p>
                    となります。したがって、<InlineMath math="A" /> を用いた二次関数の共役関数は、<InlineMath math="A^{-1}" /> を用いた二次関数になります。
                </p>
            </ContentBox>

            <p>
                次に、指数関数の共役関数を考えます。この計算結果は、エントロピーや情報幾何の分野で非常に重要な役割を果たします。
            </p>

            <ContentBox type="example" title="Example 4.2-2 (指数関数)">
                <p>
                    関数 <InlineMath math="f(x) = e^x" />（<InlineMath math="x \in \mathbb{R}" />）の共役関数を計算します。
                </p>
                <BlockMath math="f^*(y) = \sup_{x \in \mathbb{R}} \{ yx - e^x \}" />
                <p>
                    <InlineMath math="y < 0" /> のとき、<InlineMath math="x \	o -\infty" /> とすると <InlineMath math="yx - e^x \	o +\infty" /> となるため、<InlineMath math="f^*(y) = +\infty" /> です。
                </p>
                <p>
                    <InlineMath math="y = 0" /> のとき、<InlineMath math="\sup_x \{ -e^x \} = 0" /> となります（<InlineMath math="x \	o -\infty" /> の極限）。したがって <InlineMath math="f^*(0) = 0" /> です。
                </p>
                <p>
                    <InlineMath math="y > 0" /> のとき、関数 <InlineMath math="yx - e^x" /> は <InlineMath math="x" /> について微分可能です。一階の最適性条件を求めると、
                </p>
                <BlockMath math="y - e^x = 0 \implies x = \log y" />
                <p>
                    これを代入すると、
                </p>
                <BlockMath math="f^*(y) = y \log y - e^{\log y} = y \log y - y" />
                <p>
                    以上をまとめると、
                </p>
                <BlockMath math="f^*(y) = \begin{cases} y \log y - y & (y > 0) \\ 0 & (y = 0) \\ +\infty & (y < 0) \end{cases}" />
                <p>
                    となります。
                </p>
            </ContentBox>

            <p>
                ノルム関数の共役も、双対ノルムの概念を理解する上で不可欠です。
            </p>

            <ContentBox type="example" title="Example 4.2-3 (ノルムの共役)">
                <p>
                    任意のノルム <InlineMath math="f(x) = \|x\|" /> に対する共役関数 <InlineMath math="f^*(y)" /> を計算します。
                </p>
                <BlockMath math="f^*(y) = \sup_{x} \{ \langle y, x \rangle - \|x\| \}" />
                <p>
                    ここで、双対ノルム <InlineMath math="\|y\|_* = \sup_{\|x\| \le 1} \langle y, x \rangle" /> を用います。任意の <InlineMath math="x \neq 0" /> に対して <InlineMath math="\langle y, x \rangle \le \|y\|_* \|x\|" /> が成り立ちます。
                </p>
                <p>
                    もし <InlineMath math="\|y\|_* \le 1" /> ならば、すべての <InlineMath math="x" /> に対して <InlineMath math="\langle y, x \rangle - \|x\| \le \|x\| - \|x\| = 0" /> となり、<InlineMath math="x=0" /> のときに上限 <InlineMath math="0" /> を達成します。
                </p>
                <p>
                    一方、<InlineMath math="\|y\|_* > 1" /> の場合、ある <InlineMath math="x_0" /> (<InlineMath math="\|x_0\| = 1" />) が存在して <InlineMath math="\langle y, x_0 \rangle > 1" /> となります。このとき <InlineMath math="x = t x_0" /> (<InlineMath math="t > 0" />) を代入すると、
                </p>
                <BlockMath math="\langle y, t x_0 \rangle - \|t x_0\| = t (\langle y, x_0 \rangle - 1)" />
                <p>
                    であり、<InlineMath math="\langle y, x_0 \rangle - 1 > 0" /> なので、<InlineMath math="t \	o \infty" /> とすると上限は <InlineMath math="+\infty" /> となります。
                </p>
                <p>
                    したがって、
                </p>
                <BlockMath math="f^*(y) = \begin{cases} 0 & (\|y\|_* \le 1) \\ +\infty & (\|y\|_* > 1) \end{cases}" />
                <p>
                    これは、双対ノルムに関する単位球 <InlineMath math="B^* = \{ y \mid \|y\|_* \le 1 \}" /> の指示関数 <InlineMath math="\delta_{B^*}(y)" /> に他なりません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">指示関数とサポート関数の双対関係</h2>

            <p>
                前の例で見たように、ノルム関数の共役関数は集合（双対ノルム単位球）の指示関数となりました。一般に、凸集合の指示関数とそのサポート関数は、共役関数を通じて互いに双対な関係にあります。これは凸解析全体を通じて最も重要な対応関係の一つです。
            </p>

            <ContentBox type="proposition" title="Proposition 4.2-1">
                <p>
                    空でない凸集合 <InlineMath math="C \subseteq \mathbb{R}^n" /> の指示関数 <InlineMath math="\delta_C(x)" /> の共役関数は、<InlineMath math="C" /> のサポート関数 <InlineMath math="\sigma_C(y)" /> に等しい。すなわち、
                </p>
                <BlockMath math="\delta_C^*(y) = \sigma_C(y)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    共役関数の定義に従って計算します。
                </p>
                <BlockMath math="\delta_C^*(y) = \sup_{x \in \mathbb{R}^n} \{ \langle y, x \rangle - \delta_C(x) \}" />
                <p>
                    指示関数の定義により、<InlineMath math="x \in C" /> ならば <InlineMath math="\delta_C(x) = 0" /> であり、<InlineMath math="x \notin C" /> ならば <InlineMath math="\delta_C(x) = +\infty" /> です。したがって、上限の計算は実質的に <InlineMath math="C" /> 上のみに制限されます。
                </p>
                <BlockMath math="\sup_{x \in \mathbb{R}^n} \{ \langle y, x \rangle - \delta_C(x) \} = \sup_{x \in C} \{ \langle y, x \rangle - 0 \} = \sup_{x \in C} \langle y, x \rangle" />
                <p>
                    この最右辺は、まさに <InlineMath math="C" /> のサポート関数 <InlineMath math="\sigma_C(y)" /> の定義に他なりません。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この命題によって、集合の凸性を関数の凸性に読み替えることができます。具体例で整合性を確認しましょう。
            </p>

            <ContentBox type="example" title="Example 4.2-4">
                <p>
                    ユークリッド単位球 <InlineMath math="B = \{ x \mid \|x\|_2 \le 1 \}" /> を考えます。その指示関数 <InlineMath math="\delta_B(x)" /> の共役関数を計算します。
                    Proposition 4.2-1 より、
                </p>
                <BlockMath math="\delta_B^*(y) = \sigma_B(y) = \sup_{x \in B} \langle y, x \rangle" />
                <p>
                    コーシー・シュワルツの不等式 <InlineMath math="\langle y, x \rangle \le \|y\|_2 \|x\|_2" /> を用いると、<InlineMath math="\|x\|_2 \le 1" /> の範囲での最大値は <InlineMath math="\|y\|_2" /> であり、<InlineMath math="x = y/\|y\|_2" /> （<InlineMath math="y \neq 0" /> のとき）で達成されます。したがって、
                </p>
                <BlockMath math="\delta_B^*(y) = \|y\|_2" />
                <p>
                    となります。これは §1.6 で計算した Example 1.6-1 の結果と完全に一致しています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="集合と関数の双対性の統一">
                <p>
                    このように、凸集合の指示関数の共役関数をとるとサポート関数が得られます。この関係は、凸集合に関する幾何学的な議論（たとえば分離定理）と、凸関数に対する解析学的な議論を統一的に扱うための強力なツールを提供します。以降の章で現れるフェンシェル双対性において、この対応関係は中心的な役割を果たします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>二次関数の共役は、逆行列を用いた二次関数となる。</li>
                    <li>指数関数の共役はエントロピー関数 <InlineMath math="y \log y - y" /> に関連する形となる。</li>
                    <li>ノルムの共役は、双対ノルムに関する単位球の指示関数となる。</li>
                    <li>凸集合の指示関数の共役は、そのサポート関数に一致し（<InlineMath math="\delta_C^* = \sigma_C" />）、集合の凸性と関数の凸性を結びつける。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
