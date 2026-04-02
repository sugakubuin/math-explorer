import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MultidimensionalRandomVariables() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは一つの数値に注目してきましたが、現実のデータの多くは「身長と体重」「気温と湿度」のように、複数の変数が同時に観測される多次元的な構造を持っています。
                本節では、複数の確率変数の関係性を記述する<b>結合分布</b>と、そこから個別の変数の情報を抽出する<b>周辺分布</b>、そして変数間の相関を測る指標について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">結合分布と周辺分布</h2>

            <p className="leading-relaxed">
                複数の確率変数をひとまとめにしてベクトルとして扱うことで、それらの同時的な振る舞いを記述できます。
            </p>

            <ContentBox type="definition" title="Definition 2.5-1 (多次元確率変数と結合分布)">
                <p>
                    <InlineMath math="X_1, \ldots, X_n" /> を同一の確率空間上の確率変数とするとき、これらを並べたベクトル
                    <InlineMath math="\boldsymbol{X} = (X_1, \ldots, X_n)" /> を<b>多次元確率変数</b>（または確率ベクトル）と呼ぶ。
                    その挙動を決定する確率測度 <InlineMath math="P(\boldsymbol{X} \in \cdot)" /> を、<InlineMath math="X_1, \ldots, X_n" /> の<b>結合分布</b>（joint distribution）と呼ぶ。
                </p>
                <p>
                    特に 2 変数の場合、結合累積分布関数（joint CDF）は次で定義される：
                    <BlockMath math="F(x, y) = P(X \leq x, Y \leq y)" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                結合分布がわかっているとき、特定の変数のみに注目した分布（周辺分布）を求めることができます。
            </p>

            <ContentBox type="definition" title="Definition 2.5-2 (周辺分布)">
                <p>
                    結合分布から一部の変数の情報のみを取り出した分布を<b>周辺分布</b>（marginal distribution）と呼ぶ。
                    例えば <InlineMath math="X" /> の周辺分布関数 <InlineMath math="F_X(x)" /> は次のように求められる：
                    <BlockMath math="F_X(x) = \lim_{y \to \infty} F(x, y)" />
                </p>
                <p>
                    また、結合密度関数 <InlineMath math="f(x, y)" /> が存在する場合、<InlineMath math="X" /> の周辺密度関数 <InlineMath math="f_X(x)" /> は、もう一方の変数について全区間で積分（掃き出し）することで得られる：
                    <BlockMath math="f_X(x) = \int_{-\infty}^\infty f(x, y) \, dy" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-1 (二次元一様分布)">
                <p>
                    単位正方形 <InlineMath math="[0, 1] \times [0, 1]" /> 上の二次元一様分布を考える。結合密度関数は次で与えられる。
                    <BlockMath math="f(x, y) = \begin{cases} 1 & (0 \leq x, y \leq 1) \\ 0 & (\text{otherwise}) \end{cases}" />
                    このとき、<InlineMath math="X" /> の周辺密度関数は
                    <BlockMath math="f_X(x) = \int_0^1 1 \, dy = 1 \quad (0 \leq x \leq 1)" />
                    となり、<InlineMath math="X" /> は独立に区間 <InlineMath math="[0, 1]" /> 上の一様分布に従うことがわかる（独立性の厳密な定義は Chapter 4 で行う）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">共分散と相関係数</h2>

            <p className="leading-relaxed">
                2 つの確率変数が「連動して動く」度合いを測るために、統計学で非常に重要な指標が定義されます。
            </p>

            <ContentBox type="definition" title="Definition 2.5-3 (共分散と相関係数)">
                <p>
                    確率変数 <InlineMath math="X, Y" /> に対して、次のように定義する。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>共分散</b> (Covariance)：
                        <BlockMath math="\mathrm{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])]" />
                    </li>
                    <li>
                        <b>相関係数</b> (Correlation coefficient)：
                        <BlockMath math="\rho(X, Y) = \frac{\mathrm{Cov}(X, Y)}{\sqrt{\mathrm{Var}(X)} \sqrt{\mathrm{Var}(Y)}}" />
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                相関係数は、常に <InlineMath math="-1" /> から <InlineMath math="1" /> の範囲に収まるという極めて有用な性質を持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 2.5-1 (相関係数の範囲)">
                <p>
                    任意の確率変数に対して、次が成り立つ。
                    <BlockMath math="-1 \leq \rho(X, Y) \leq 1" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    コーシー・シュワルツの不等式 <InlineMath math="|E[UV]|^2 \leq E[U^2] E[V^2]" /> を利用する。
                    <InlineMath math="U = X - E[X]" />, <InlineMath math="V = Y - E[Y]" /> とおくと、
                    <BlockMath math="|\mathrm{Cov}(X, Y)|^2 \leq \mathrm{Var}(X) \mathrm{Var}(Y)" />
                    となり、両辺を <InlineMath math="\mathrm{Var}(X)\mathrm{Var}(Y)" /> で割って平方根をとることで <InlineMath math="|\rho| \leq 1" /> が得られる。
                </p>
                <p>
                    補足：コーシー・シュワルツの不等式自体は、任意の <InlineMath math="t \in \mathbb{R}" /> に対して
                    <BlockMath math="g(t) = E[(U + tV)^2] = E[V^2]t^2 + 2E[UV]t + E[U^2] \geq 0" />
                    が成り立つことから、この <InlineMath math="t" /> の二次式の判別式が <InlineMath math="D/4 = (E[UV])^2 - E[U^2]E[V^2] \leq 0" /> であることから示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-2 (相関の意味と注意点)">
                <p>
                    相関係数の値は次のような関係を意味する。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\rho = 1" />：正の線形関係（<InlineMath math="Y = aX + b, a > 0" />）が確率 1 で成立する。</li>
                    <li><InlineMath math="\rho = -1" />：負の線形関係（<InlineMath math="Y = aX + b, a < 0" />）が確率 1 で成立する。</li>
                    <li><InlineMath math="\rho = 0" />：<b>無相関</b>。線形な連動がないことを意味する。</li>
                </ul>
                <p>
                    <b>注意</b>：無相関（<InlineMath math="\rho = 0" />）であっても、独立であるとは限りません。
                    例えば、<InlineMath math="\theta" /> が <InlineMath math="[0, 2\pi]" /> 上の一様分布に従うとき、<InlineMath math="X = \cos\theta, Y = \sin\theta" /> は常に <InlineMath math="X^2 + Y^2 = 1" /> という強い従属関係にありますが、
                    直接計算すると <InlineMath math="\mathrm{Cov}(X, Y) = 0" /> となり、相関係数は 0 になります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="独立性と無相関の違い">
                <p>
                    「独立」は分布（確率の決まり方）そのものが切り離されているという極めて強い条件ですが、「無相関」はあくまで 2 次の連動性（線形な関係）がないという限定的な条件です。
                    ただし、後の Chapter 4 で学ぶように、変数が「正規分布」に従う場合などの特別な状況下では、この両者が一致することもあります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                Chapter 2 を通じて、確率変数の基礎、その分布の記述、そして複数の変数の関係性について学びました。
                次章では、これら確率変数の「平均的な姿」を捉えるための<b>期待値</b>と<b>モーメント</b>の理論を詳しく展開します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多次元確率変数を考えることで、複数の事象の同時的な発生確率（結合分布）を扱える。</li>
                    <li>周辺分布は、結合分布から特定の変数以外を積分などで「掃き出す」ことで求められる。</li>
                    <li>共分散と相関係数は、変数間の線形な関係の強さを表す。</li>
                    <li>相関係数は <InlineMath math="[-1, 1]" /> の範囲にあり、<InlineMath math="\pm 1" /> は完全な線形従属を、<InlineMath math="0" /> は無相関を意味する。</li>
                    <li>「無相関」は必ずしも「独立」を意味せず、非線形な従属関係が隠れている可能性がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
