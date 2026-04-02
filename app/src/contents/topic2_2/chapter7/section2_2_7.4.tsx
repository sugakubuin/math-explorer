import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_7_4() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ここまで構築してきたラグランジュの未定乗数法の理論を、具体的な最適化問題に適用してみましょう。
                この手法は、幾何学的な図形問題（最大・最小距離など）から、代数的な有名不等式の厳密な証明に至るまで、幅広い応用を持ちます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <p>
                まずは、古典的な幾何学・物理学的な極値問題の典型例として、距離の最小化問題を解いてみます。距離の最小化では、計算を楽にするために「距離の2乗」を目的関数に選ぶのが定石です。
            </p>

            <ContentBox type="example" title="Example 7.4-1 (原点と平面の最短距離問題)">
                <p>
                    原点 <InlineMath math="(0,0,0)" /> から、平面 <InlineMath math="x + 2y + 3z = 6" /> までの最短距離を求めよ。
                </p>
                <p className="mt-4 font-bold text-slate-700 dark:text-slate-300">解答:</p>
                <p className="mt-2">
                    平面上の点を <InlineMath math="(x,y,z)" /> とする。原点からの距離の2乗を目的関数 <InlineMath math="f(x,y,z) = x^2 + y^2 + z^2" /> とする。（距離の2乗が最小になれば、距離自身も最小となる。）
                </p>
                <p className="mt-2">
                    制約条件は <InlineMath math="g(x,y,z) = x + 2y + 3z - 6 = 0" /> である。
                    ここで、<InlineMath math="\nabla g = (1, 2, 3) \neq \mathbf{0}" /> であるため、平面上のすべての点は正則である。
                </p>
                <p className="mt-2">
                    ラグランジアン <InlineMath math="L" /> を次のように定義する。
                </p>
                <BlockMath math="L(x, y, z, \lambda) = x^2 + y^2 + z^2 - \lambda(x + 2y + 3z - 6)" />
                <p className="mt-2">
                    ラグランジュの未定乗数法の条件式 <InlineMath math="\nabla L = \mathbf{0}" /> より、次の連立方程式を得る：
                </p>
                <BlockMath math="\begin{aligned}
                                    L_x &= 2x - \lambda = 0 \implies x = \frac{\lambda}{2} \\
                                    L_y &= 2y - 2\lambda = 0 \implies y = \lambda \\
                                    L_z &= 2z - 3\lambda = 0 \implies z = \frac{3\lambda}{2} \\
                                    L_\lambda &= -(x + 2y + 3z - 6) = 0 \implies x + 2y + 3z = 6
                                \end{aligned}" />
                <p className="mt-2">
                    最初の3式から得られた <InlineMath math="x, y, z" /> を、制約式である4番目の式に代入する。
                </p>
                <BlockMath math="\left(\frac{\lambda}{2}\right) + 2(\lambda) + 3\left(\frac{3\lambda}{2}\right) = 6" />
                <p>
                    両辺を2倍して整理すると、
                </p>
                <BlockMath math="\lambda + 4\lambda + 9\lambda = 12 \implies 14\lambda = 12 \implies \lambda = \frac{6}{7}" />
                <p className="mt-2">
                    したがって、極値を与える点の座標は
                </p>
                <BlockMath math="x = \frac{3}{7}, \quad y = \frac{6}{7}, \quad z = \frac{9}{7}" />
                <p className="mt-2">
                    幾何学的考察（平面と原点の位置関係）から、この1点のみが停留点であり、かつこれが最小値を与えることがわかる。
                    このとき、原点からの最短距離 <InlineMath math="d" /> は、
                </p>
                <BlockMath math="\begin{aligned} d &= \sqrt{x^2 + y^2 + z^2} \\ &= \sqrt{\left(\frac{3}{7}\right)^2 + \left(\frac{6}{7}\right)^2 + \left(\frac{9}{7}\right)^2} \\ &= \sqrt{\frac{9+36+81}{49}} = \sqrt{\frac{126}{49}} \\ &= \frac{\sqrt{126}}{7} = \frac{3\sqrt{14}}{7} \end{aligned}" />
            </ContentBox>

            <p>
                このように、ラグランジュの未定乗数法は <InlineMath math="(x,y,z)" /> の対称性を保ったままスマートに解を導くことができます。制約式を用いて変数を消去し、無制約の2変数問題に帰着させる通常の方法に比べて、計算ミスが減り見通しが良くなることが多いです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不等式の証明への応用</h2>

            <p>
                極値問題の強力な応用先の一つが、代数的不等式の証明です。「ある制約下での関数の最大値・最小値」が分かれば、それはそのまま不等式として機能します。
                ここでは有名な「相加・相乗平均の不等式（AM-GM不等式）」を多変数微積分の視点から証明してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.4-2 (AM-GM不等式のラグランジュ法による証明)">
                <p>
                    <InlineMath math="x_1, \dots, x_n > 0" /> に対して、次の相加・相乗平均の不等式（AM-GM不等式）を証明せよ。
                </p>
                <BlockMath math="\frac{x_1 + \dots + x_n}{n} \geq \sqrt[n]{x_1 \dots x_n}" />
                <p>また、等号成立条件を求めよ。</p>
                <p className="mt-4 font-bold text-slate-700 dark:text-slate-300">解答 (最適化問題への帰着):</p>
                <p className="mt-2">
                    和 <InlineMath math="x_1 + \dots + x_n" /> を一定値 <InlineMath math="S > 0" /> に固定した制約の下で、積 <InlineMath math="x_1 \dots x_n" /> が最大化される条件を探る。
                </p>
                <p className="mt-2">
                    目的関数: <InlineMath math="f(x_1, \dots, x_n) = x_1 x_2 \dots x_n" /> <br />
                    制約条件: <InlineMath math="g(x_1, \dots, x_n) = x_1 + \dots + x_n - S = 0" />（領域は <InlineMath math="x_i > 0" /> とする）
                </p>
                <p className="mt-2">
                    ラグランジアン <InlineMath math="L" /> を定義する。
                </p>
                <BlockMath math="L(x_1, \dots, x_n, \lambda) = x_1 x_2 \dots x_n - \lambda(x_1 + \dots + x_n - S)" />
                <p className="mt-2">
                    <InlineMath math="L_{x_i} = 0" /> (<InlineMath math="i=1,\dots,n" />) より、
                </p>
                <BlockMath math="\frac{\partial}{\partial x_i}(x_1 \dots x_n) - \lambda = 0 \implies \frac{f(x_1,\dots,x_n)}{x_i} = \lambda" />
                <p className="mt-2">
                    <InlineMath math="x_i > 0" /> および積が0にならない（境界ではない極値を考えている）ことから <InlineMath math="f > 0" /> であり、<InlineMath math="\lambda \neq 0" /> である。
                    それぞれの式から <InlineMath math="x_i" /> について解くと、
                </p>
                <BlockMath math="x_i = \frac{f(x_1,\dots,x_n)}{\lambda}" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ どの <InlineMath math="i" /> についても右辺は同じ値になる）
                </p>
                <p className="mt-2">
                    したがって、停留点を満たす条件は、すべての変数が等しいことである：
                </p>
                <BlockMath math="x_1 = x_2 = \dots = x_n" />
                <p className="mt-2">
                    これを制約条件 <InlineMath math="\sum x_i = S" /> に代入すると、<InlineMath math="n x_1 = S" /> より、<InlineMath math="x_1 = \dots = x_n = \frac{S}{n}" /> となる。
                    関数 <InlineMath math="f" /> は領域 <InlineMath math="x_i > 0" /> 内でただ一つこの停留点のみを持ち、境界（いずれかの <InlineMath math="x_i \to 0" />）では <InlineMath math="f \to 0" /> となるため、この唯一の停留点が最大値を与えることがわかる。
                </p>
                <p className="mt-2">
                    最大値における目的関数の値は、
                </p>
                <BlockMath math="f_{\max} = \left(\frac{S}{n}\right) \times \dots \times \left(\frac{S}{n}\right) = \left(\frac{S}{n}\right)^n" />
                <p className="mt-2">
                    よって、制約条件 <InlineMath math="S = x_1 + \dots + x_n" /> を満たす任意の正の実数 <InlineMath math="x_1, \dots, x_n" /> に対して、必ず <InlineMath math="f(x_1, \dots, x_n) \leq f_{\max}" /> が成り立つ。すなわち、
                </p>
                <BlockMath math="x_1 x_2 \dots x_n \leq \left(\frac{x_1 + \dots + x_n}{n}\right)^n" />
                <p className="mt-2">
                    両辺の <InlineMath math="n" /> 乗根をとれば（<InlineMath math="x_i>0" /> より各値は正であるため大小関係は保存される）、
                </p>
                <BlockMath math="\sqrt[n]{x_1 \dots x_n} \leq \frac{x_1 + \dots + x_n}{n}" />
                <p>
                    となり与式が示された。等号成立条件は、停留点の条件そのままの <InlineMath math="x_1 = x_2 = \dots = x_n" /> のときである。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ラグランジュの未定乗数法は、連立方程式 <InlineMath math="\nabla L = \mathbf{0}" /> を構成し、それを解くことで極値の候補点を洗練された対称性を保ちながら導出できる。</li>
                    <li>図形的・物理的な最小・最大問題の強力な解法である。</li>
                    <li>代数的な不等式の証明においても、「一方を固定して他方を最大化（最小化）する」という最適化問題に帰着させることで、等号条件の発見とともに証明を機械的に進めることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
