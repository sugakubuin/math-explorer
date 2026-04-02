import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SimpleFunctionIntegral() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ルベーグ積分の構成は、最も基本的な関数である「単関数」から段階的に行われます。
                これは、リーマン積分が長方形の和で面積を近似したのと同様のアイデアですが、ルベーグ積分では「値が等しい点の集合」をベースにする点が異なります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単関数の積分</h2>

            <p>
                単関数は有限個の値しか取らないため、その積分は単純な有限和として定義できます。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (単関数の積分)">
                <p>
                    可測空間 <InlineMath math="(X, \mathcal{A})" /> 上の非負値単関数 <InlineMath math="s = \sum_{j=1}^k c_j \mathbf{1}_{A_j}" /> （標準形）に対し、測度 <InlineMath math="\mu" /> による<b>積分</b>を次のように定義する：
                    <BlockMath math="\int_X s \, d\mu = \sum_{j=1}^k c_j \mu(A_j)" />
                    ただし、<InlineMath math="0 \cdot \infty = 0" /> と約束する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-1 (特性関数の積分)">
                <p>
                    <InlineMath math="X = [0, 2]" /> 上のルベーグ測度 <InlineMath math="\lambda" /> において、単関数 <InlineMath math="s = 2 \cdot \mathbf{1}_{[0, 1]} + 5 \cdot \mathbf{1}_{(1, 2]}" /> を考える。
                    この積分の値は定義に従い、
                    <BlockMath math="\int_{[0, 2]} s \, d\lambda = 2 \cdot \lambda([0, 1]) + 5 \cdot \lambda((1, 2]) = 2 \cdot 1 + 5 \cdot 1 = 7" />
                    となる。これは直感的な「グラフの下側の面積」と一致する。
                </p>
            </ContentBox>

            <p className="mt-8">
                単関数の積分は、和や定数倍について閉じている（線形性）という重要な性質を持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-1 (積分の線形性と単調性)">
                <p>
                    非負値単関数 <InlineMath math="s, t" /> および定数 <InlineMath math="a, b \geq 0" /> に対し、以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><b>線形性</b>: <InlineMath math="\int (as + bt) \, d\mu = a \int s \, d\mu + b \int t \, d\mu" /></li>
                    <li><b>単調性</b>: <InlineMath math="s \leq t" /> ならば <InlineMath math="\int s \, d\mu \leq \int t \, d\mu" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof (線形性)">
                <p>
                    <InlineMath math="s = \sum c_i \mathbf{1}_{A_i}" />, <InlineMath math="t = \sum d_j \mathbf{1}_{B_j}" /> を標準形とする。
                    このとき和 <InlineMath math="as + bt" /> は、交差部分 <InlineMath math="A_i \cap B_j" /> を用いて次のように書ける：
                    <BlockMath math="as + bt = \sum_{i, j} (ac_i + bd_j) \mathbf{1}_{A_i \cap B_j}" />
                    測度 <InlineMath math="\mu" /> の有限加法性を用いると、
                    <BlockMath math="\begin{aligned} \int (as + bt) \, d\mu &= \sum_{i, j} (ac_i + bd_j) \mu(A_i \cap B_j) \\ &= a \sum_i c_i \sum_j \mu(A_i \cap B_j) + b \sum_j d_j \sum_i \mu(A_i \cap B_j) \\ &= a \sum_i c_i \mu(A_i) + b \sum_j d_j \mu(B_j) \\ &= a \int s \, d\mu + b \int t \, d\mu \end{aligned}" />
                    が得られる。単調性も同様の議論、または線形性と <InlineMath math="t - s \geq 0" /> の積分が非負であることから導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ルベーグ積分は、まず段階的に<b>単関数</b>の有限和として定義される。</li>
                    <li>測度の有限加法性により、単関数の積分は<b>線形性</b>と<b>単調性</b>を持つ。</li>
                    <li>すべての関数の積分は、この単関数の積分を土台として構成されていく。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
