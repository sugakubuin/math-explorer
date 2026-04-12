import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IndicatorFunctionsAndConstraints() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、凸解析において制約付き最適化問題を扱うための強力なツールである<b>指示関数（indicator function）</b>について解説します。指示関数を用いることで、集合の制約を関数の値（無限大）として表現し、制約付き問題を無制約問題の枠組みで統一的に扱うことが可能になります。これは凸解析特有の重要なアプローチです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">指示関数の定義</h2>

            <p>
                まず、指示関数を定義し、その関数としての凸性と集合の凸性の関係について考察します。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (指示関数)">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> の部分集合 <InlineMath math="C" /> に対して、<b>指示関数（indicator function）</b> <InlineMath math="\delta_C : \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> を次のように定義する。
                </p>
                <BlockMath math="\delta_C(x) = \begin{cases} 0 & (x \in C) \\ +\infty & (x \notin C) \end{cases}" />
            </ContentBox>

            <p>
                この定義により、ある点が集合 <InlineMath math="C" /> に属しているかどうかの幾何学的な条件が、拡張実数値関数の関数値として表現されます。次に、この関数が凸関数となるための条件を確認します。
            </p>

            <ContentBox type="proposition" title="Proposition 2.4-1">
                <p>
                    集合 <InlineMath math="C \subseteq \mathbb{R}^n" /> が凸集合であることと、その指示関数 <InlineMath math="\delta_C" /> が凸関数であることは同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\delta_C" /> が凸関数であるとは、任意の <InlineMath math="x, y \in \mathbb{R}^n" /> と <InlineMath math="\lambda \in [0,1]" /> に対して、以下の凸不等式が成り立つことである。
                </p>
                <BlockMath math="\delta_C(\lambda x + (1-\lambda)y) \leq \lambda \delta_C(x) + (1-\lambda)\delta_C(y)" />
                <p>
                    もし <InlineMath math="x \notin C" /> または <InlineMath math="y \notin C" /> ならば、右辺は <InlineMath math="+\infty" /> となり不等式は自明に成り立つ。したがって、<InlineMath math="x, y \in C" /> の場合のみを考えればよい。このとき <InlineMath math="\delta_C(x) = \delta_C(y) = 0" /> であるから、右辺は <InlineMath math="0" /> となる。
                </p>
                <p>
                    不等式が成立するためには、<InlineMath math="\delta_C(\lambda x + (1-\lambda)y) \leq 0" /> でなければならない。指示関数の値域は <InlineMath math="\{0, +\infty\}" /> であるため、これは <InlineMath math="\delta_C(\lambda x + (1-\lambda)y) = 0" />、すなわち <InlineMath math="\lambda x + (1-\lambda)y \in C" /> であることと同値である。
                </p>
                <p>
                    この条件はまさに集合 <InlineMath math="C" /> が凸集合であることの定義そのものである。よって、<InlineMath math="C" /> が凸集合であることと <InlineMath math="\delta_C" /> が凸関数であることは同値である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体例として、最適化問題の制約でよく現れる非負直交象限の指示関数を確認しましょう。
            </p>

            <ContentBox type="example" title="Example 2.4-1">
                <p>
                    非負直交象限 <InlineMath math="\mathbb{R}^n_+ = \{x \in \mathbb{R}^n \mid x_i \geq 0 \ (\forall i)\}" /> は凸集合である（Example 1.2-2 参照）。したがって、その指示関数 <InlineMath math="\delta_{\mathbb{R}^n_+}" /> は凸関数である。具体的には次のように表される。
                </p>
                <BlockMath math="\delta_{\mathbb{R}^n_+}(x) = \begin{cases} 0 & (x_i \geq 0 \ \text{for all } i) \\ +\infty & (\text{otherwise}) \end{cases}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">制約付き最適化への応用</h2>

            <p>
                指示関数の最も重要な役割は、制約付き最適化問題を制約のない問題（無制約問題）に変換することです。これにより、アルゴリズムの導出や最適性条件の記述が大幅に簡略化されます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.4-2">
                <p>
                    関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> と部分集合 <InlineMath math="C \subseteq \mathbb{R}^n" /> を考える。制約付き最小化問題
                </p>
                <BlockMath math="\min_{x \in C} f(x)" />
                <p>
                    は、次の無制約最小化問題と同値である。
                </p>
                <BlockMath math="\min_{x \in \mathbb{R}^n} \{f(x) + \delta_C(x)\}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    関数 <InlineMath math="g(x) = f(x) + \delta_C(x)" /> を考える。<InlineMath math="\delta_C(x)" /> の定義により、
                </p>
                <BlockMath math="g(x) = \begin{cases} f(x) & (x \in C) \\ +\infty & (x \notin C) \end{cases}" />
                <p>
                    となる。<InlineMath math="x \notin C" /> のときは <InlineMath math="g(x) = +\infty" /> となるため、<InlineMath math="g" /> の最小値を探索する過程で <InlineMath math="C" /> の外の点が選ばれることはない（ただし <InlineMath math="f" /> が <InlineMath math="C" /> 上で <InlineMath math="+\infty" /> を取らないと仮定する）。したがって、<InlineMath math="\mathbb{R}^n" /> 全体での <InlineMath math="g(x)" /> の最小化は、<InlineMath math="C" /> 内での <InlineMath math="f(x)" /> の最小化と完全に一致し、最適解の集合も一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この同値性により、幾何学的な「集合による制約」が、解析的な「関数の項」として目的関数に組み込まれました。この結果が具体的にどのように利用されるかを見てみましょう。
            </p>

            <ContentBox type="example" title="Example 2.4-2">
                <p>
                    次の 1 次元の制約付き最適化問題を考える。
                </p>
                <BlockMath math="\min_{x \geq 0} (x^2 - 2x)" />
                <p>
                    制約集合は区間 <InlineMath math="C = [0, \infty)" /> である。Proposition 2.4-2 を用いると、この問題は指示関数 <InlineMath math="\delta_{[0, \infty)}" /> を用いて次のように無制約問題として書き換えられる。
                </p>
                <BlockMath math="\min_{x \in \mathbb{R}} \{x^2 - 2x + \delta_{[0, \infty)}(x)\}" />
                <p>
                    この形にすることで、最適解 <InlineMath math="x^*" /> は劣微分を用いた最適性条件（フェルマの規則）
                </p>
                <BlockMath math="0 \in \partial(f + \delta_C)(x^*)" />
                <p>
                    の形に帰着できる（劣微分の和の公式については Chapter 3 で詳しく扱います）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="凸解析における双対構造">
                <p>
                    確率論などにおける通常の指示関数（条件を満たすと 1、満たさないと 0 を取る関数）と異なり、凸解析における指示関数は <InlineMath math="0" /> と <InlineMath math="+\infty" /> を値に持ちます。これはコスト最小化の枠組みでペナルティを課すためです。
                </p>
                <p>
                    さらに重要な点として、指示関数の共役関数（ルジャンドル変換）を計算すると、それは集合 <InlineMath math="C" /> の<b>サポート関数 <InlineMath math="\sigma_C" /></b> に一致することが知られています（§4.2 で証明します）。この対応関係は、凸集合の幾何学的性質と凸関数の解析的性質を結ぶ、凸解析の中心的な双対構造の一つです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>集合 <InlineMath math="C" /> の指示関数 <InlineMath math="\delta_C" /> は、<InlineMath math="x \in C" /> で <InlineMath math="0" />、<InlineMath math="x \notin C" /> で <InlineMath math="+\infty" /> をとる拡張実数値関数である。</li>
                    <li><InlineMath math="C" /> が凸集合であることと、<InlineMath math="\delta_C" /> が凸関数であることは同値である。</li>
                    <li>制約付き最適化問題 <InlineMath math="\min_{x \in C} f(x)" /> は、指示関数を加えた無制約問題 <InlineMath math="\min_x \{f(x) + \delta_C(x)\}" /> と同値になる。これにより制約を関数の一部として扱える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
