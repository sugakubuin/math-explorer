import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvexFunctionsDefinitionAndExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、凸解析の主役ともいえる「凸関数」の定義とその基本的な性質について学びます。凸関数は、そのグラフ上の任意の2点を結ぶ線分が、グラフの上側にあるような関数として直感的に理解されます。ここでは、その厳密な定義を与え、いくつかの具体的な例を確認したのち、凸関数が満たす重要な性質であるジェンセンの不等式について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">凸関数の定義</h2>

            <p>
                まずは凸関数の厳密な定義から始めましょう。関数の値域として正の無限大を許す「拡張実数値関数」を考えることで、定義域の制限を統一的に扱うことができます。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (凸関数)">
                <p>
                    関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> が<b>凸関数（convex function）</b>であるとは、任意の <InlineMath math="x, y \in \mathbb{R}^n" /> と <InlineMath math="\lambda \in [0, 1]" /> に対して、以下の不等式が成り立つことである。
                </p>
                <BlockMath math="f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y)" />
            </ContentBox>

            <p>
                さらに、この不等式がより強い形で成り立つ関数を狭義凸関数と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.1-2 (狭義凸関数)">
                <p>
                    関数 <InlineMath math="f" /> が<b>狭義凸関数（strictly convex function）</b>であるとは、<InlineMath math="x \neq y" /> かつ <InlineMath math="0 < \lambda < 1" /> である限り、以下の厳密な不等式が成り立つことである。
                </p>
                <BlockMath math="f(\lambda x + (1-\lambda)y) < \lambda f(x) + (1-\lambda)f(y)" />
            </ContentBox>

            <p>
                定義だけでは抽象的ですので、具体的な関数が凸関数の条件を満たすかどうかを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-1 (二次関数の凸性)">
                <p>
                    1変数の二次関数 <InlineMath math="f(x) = x^2" /> が凸関数であることを確認する。
                    任意の <InlineMath math="x, y \in \mathbb{R}" /> と <InlineMath math="\lambda \in [0, 1]" /> に対して、右辺から左辺を引いた値を計算すると、
                </p>
                <BlockMath math="\begin{aligned} & \lambda f(x) + (1-\lambda)f(y) - f(\lambda x + (1-\lambda)y) \\ &= \lambda x^2 + (1-\lambda)y^2 - (\lambda x + (1-\lambda)y)^2 \\ &= \lambda x^2 + (1-\lambda)y^2 - \left( \lambda^2 x^2 + 2\lambda(1-\lambda)xy + (1-\lambda)^2 y^2 \right) \\ &= (\lambda - \lambda^2)x^2 + ((1-\lambda) - (1-\lambda)^2)y^2 - 2\lambda(1-\lambda)xy \\ &= \lambda(1-\lambda)x^2 + \lambda(1-\lambda)y^2 - 2\lambda(1-\lambda)xy \\ &= \lambda(1-\lambda)(x-y)^2 \end{aligned}" />
                <p>
                    <InlineMath math="\lambda \in [0, 1]" /> より <InlineMath math="\lambda(1-\lambda) \geq 0" /> であり、また <InlineMath math="(x-y)^2 \geq 0" /> であるから、全体として <InlineMath math="0" /> 以上となる。
                    したがって、<InlineMath math="f(x) = x^2" /> は凸関数である。
                    さらに、<InlineMath math="0 < \lambda < 1" /> かつ <InlineMath math="x \neq y" /> ならばこの値は真に正となるため、狭義凸関数でもある。
                </p>
            </ContentBox>

            <p>
                続いて、多変数の例としてノルム関数を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-2 (ノルムの凸性)">
                <p>
                    ベクトル空間上の任意のノルム <InlineMath math="f(x) = \|x\|" /> は凸関数である。
                    ノルムの満たすべき性質である三角不等式 <InlineMath math="\|a + b\| \leq \|a\| + \|b\|" /> と、絶対斉次性 <InlineMath math="\|ca\| = |c|\|a\|" /> を用いる。
                    任意の <InlineMath math="x, y" /> と <InlineMath math="\lambda \in [0, 1]" /> に対して、
                </p>
                <BlockMath math="\begin{aligned} \|\lambda x + (1-\lambda)y\| &\leq \|\lambda x\| + \|(1-\lambda)y\| \\ & = \lambda\|x\| + (1-\lambda)\|y\| \end{aligned}" />
                <p>
                    が成り立つため、ノルムは凸関数である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ジェンセンの不等式</h2>

            <p>
                凸関数の定義は2点の凸結合に関するものでしたが、これを一般化して有限個の点の凸結合に関する不等式に拡張することができます。これをジェンセンの不等式と呼びます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1 (ジェンセンの不等式の有限版)">
                <p>
                    凸関数 <InlineMath math="f" /> と、<InlineMath math="\sum_{i=1}^n \lambda_i = 1" /> かつ <InlineMath math="\lambda_i \geq 0" /> を満たす重み <InlineMath math="\lambda_1, \dots, \lambda_n" />、および点 <InlineMath math="x_1, \dots, x_n" /> に対して、以下の不等式が成り立つ。
                </p>
                <BlockMath math="f\left(\sum_{i=1}^n \lambda_i x_i\right) \leq \sum_{i=1}^n \lambda_i f(x_i)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    点数 <InlineMath math="n" /> に関する数学的帰納法で証明する。
                </p>
                <p>
                    <InlineMath math="n=1" /> のときは自明であり、<InlineMath math="n=2" /> のときは凸関数の定義そのものである。
                    <InlineMath math="n=k" /> のときに成り立つと仮定し、<InlineMath math="n=k+1" /> の場合を考える。
                    <InlineMath math="\lambda_{k+1} = 1" /> の場合は自明であるため、<InlineMath math="\lambda_{k+1} < 1" /> とする。
                </p>
                <BlockMath math="\sum_{i=1}^{k+1} \lambda_i x_i = \lambda_{k+1} x_{k+1} + (1-\lambda_{k+1}) \sum_{i=1}^k \frac{\lambda_i}{1-\lambda_{k+1}} x_i"
                />
                <p>
                    ここで、<InlineMath math="y = \sum_{i=1}^k \frac{\lambda_i}{1-\lambda_{k+1}} x_i" /> とおくと、凸関数の定義より、
                </p>
                <BlockMath math="f\left(\sum_{i=1}^{k+1} \lambda_i x_i\right) \leq \lambda_{k+1} f(x_{k+1}) + (1-\lambda_{k+1}) f(y)" />
                <p>
                    係数の和 <InlineMath math="\sum_{i=1}^k \frac{\lambda_i}{1-\lambda_{k+1}} = \frac{1 - \lambda_{k+1}}{1-\lambda_{k+1}} = 1" /> であるから、帰納法の仮定を <InlineMath math="y" /> に適用して、
                </p>
                <BlockMath math="f(y) = f\left(\sum_{i=1}^k \frac{\lambda_i}{1-\lambda_{k+1}} x_i\right) \leq \sum_{i=1}^k \frac{\lambda_i}{1-\lambda_{k+1}} f(x_i)" />
                <p>
                    これを前の不等式に代入すると、
                </p>
                <BlockMath math="\begin{aligned} &f\left(\sum_{i=1}^{k+1} \lambda_i x_i\right) \\ &\leq \lambda_{k+1} f(x_{k+1}) + (1-\lambda_{k+1}) \sum_{i=1}^k \frac{\lambda_i}{1-\lambda_{k+1}} f(x_i) \\ &= \sum_{i=1}^{k+1} \lambda_i f(x_i) \end{aligned}" />
                <p>
                    となり、<InlineMath math="n=k+1" /> のときも成り立つことが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ジェンセンの不等式を用いると、古典的な有名な不等式を極めて簡潔に導出することができます。
            </p>

            <ContentBox type="example" title="Example 2.1-3 (指数関数のジェンセンの不等式)">
                <p>
                    指数関数 <InlineMath math="f(x) = e^x" /> は <InlineMath math="f''(x) = e^x > 0" /> であることから狭義凸関数である。
                    これにジェンセンの不等式を適用し、<InlineMath math="\lambda_i = \frac{1}{n}" /> とおくと、
                </p>
                <BlockMath math="\exp\left( \frac{1}{n} \sum_{i=1}^n x_i \right) \leq \frac{1}{n} \sum_{i=1}^n \exp(x_i)" />
                <p>
                    ここで、<InlineMath math="a_i = \exp(x_i) > 0" /> とおくと、<InlineMath math="x_i = \log a_i" /> となる。これを代入すると、
                </p>
                <BlockMath math="\exp\left( \frac{1}{n} \sum_{i=1}^n \log a_i \right) \leq \frac{1}{n} \sum_{i=1}^n a_i" />
                <p>
                    左辺を整理すると、
                </p>
                <BlockMath math="\exp\left( \log \left( \prod_{i=1}^n a_i \right)^{\frac{1}{n}} \right) = \left( \prod_{i=1}^n a_i \right)^{\frac{1}{n}}" />
                <p>
                    したがって、以下の<b>相加相乗平均の不等式</b>が得られる。
                </p>
                <BlockMath math="\sqrt[n]{a_1 a_2 \dots a_n} \leq \frac{a_1 + a_2 + \dots + a_n}{n}" />
            </ContentBox>

            <ContentBox type="remark" title="確率論におけるジェンセンの不等式">
                <p>
                    ジェンセンの不等式は、確率論（3-7）においても極めて重要な役割を果たします。
                    離散的な重み <InlineMath math="\lambda_i" /> を確率分布とみなすことで、確率変数 <InlineMath math="X" /> の期待値 <InlineMath math="E" /> を用いて
                </p>
                <BlockMath math="f(E[X]) \leq E[f(X)]" />
                <p>
                    という形で表現されます。これは連続的な確率分布に対しても成立し、情報理論におけるカルバック・ライブラー情報量の非負性の証明など、幅広い分野で本質的に用いられます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>凸関数は、2点の凸結合における関数値が、それぞれの関数値の凸結合以下になる関数として定義される。</li>
                    <li>ノルムや指数関数、特定の二次関数など、多くの基本的な関数が凸関数の性質を持つ。</li>
                    <li>ジェンセンの不等式は凸関数の定義を有限個の点に一般化したものであり、相加相乗平均の不等式などの強力な不等式を導く。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
