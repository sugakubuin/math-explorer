import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ProximalOperatorExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では近接作用素の理論的な性質とモローの分解定理について学びました。本節では、実際の凸最適化アルゴリズムで頻出する具体的な関数に対する近接作用素の計算例を見ていきます。
                近接作用素が閉形式（解析的な式）で書けるかどうかは、アルゴリズムの実用性を大きく左右します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">L1ノルムと二次関数</h2>

            <p>
                スパースモデリングなどで極めて重要な役割を果たす <InlineMath math="\ell_1" /> ノルムと、基本的な二次関数の近接作用素を計算します。
            </p>

            <ContentBox type="example" title="Example 7.3-1（L1ノルムの近接作用素と軟閾値作用素）">
                <p>
                    関数 <InlineMath math="f(x) = \lambda \|x\|_1" /> （ただし <InlineMath math="\lambda > 0" />）の近接作用素を求める。<br />
                    <InlineMath math="f(x)" /> は変数 <InlineMath math="x_i" /> ごとに分離可能であるため、近接作用素の最適化問題も各成分ごとに独立して解くことができる。すなわち、各 <InlineMath math="i" /> について以下の最小化問題を解けばよい。
                </p>
                <BlockMath math="p_i = \arg\min_{y_i \in \mathbb{R}} \left\{ \lambda |y_i| + \frac{1}{2} (y_i - x_i)^2 \right\}" />
                <p>
                    フェルマの規則（Theorem 3.5-1）より、<InlineMath math="y_i = p_i" /> が最適解であるための必要十分条件は、劣微分の和の公式を用いて次のように書ける。
                </p>
                <BlockMath math="0 \in \lambda \partial |\cdot|(p_i) + (p_i - x_i)" />
                <p>
                    絶対値関数の劣微分は、<InlineMath math="p_i > 0" /> のとき <InlineMath math="\{1\}" />、<InlineMath math="p_i < 0" /> のとき <InlineMath math="\{-1\}" />、<InlineMath math="p_i = 0" /> のとき <InlineMath math="[-1, 1]" /> である。これを用いて場合分けを行う。
                </p>
                <ul>
                    <li>
                        <InlineMath math="x_i > \lambda" /> のとき：<InlineMath math="p_i > 0" /> と仮定すると、<InlineMath math="0 = \lambda \cdot 1 + p_i - x_i" /> より <InlineMath math="p_i = x_i - \lambda > 0" /> となり矛盾しない。
                    </li>
                    <li>
                        <InlineMath math="x_i < -\lambda" /> のとき：<InlineMath math="p_i < 0" /> と仮定すると、<InlineMath math="0 = \lambda \cdot (-1) + p_i - x_i" /> より <InlineMath math="p_i = x_i + \lambda < 0" /> となり矛盾しない。
                    </li>
                    <li>
                        <InlineMath math="|x_i| \le \lambda" /> のとき：<InlineMath math="p_i = 0" /> と仮定すると、<InlineMath math="0 \in \lambda [-1, 1] - x_i" /> すなわち <InlineMath math="x_i \in [-\lambda, \lambda]" /> となり条件を満たす。
                    </li>
                </ul>
                <p>
                    以上をまとめると、近接作用素の第 <InlineMath math="i" /> 成分は次のように表される。
                </p>
                <BlockMath math="p_i = \begin{cases} x_i - \lambda & (x_i > \lambda) \\ 0 & (|x_i| \le \lambda) \\ x_i + \lambda & (x_i < -\lambda) \end{cases}" />
                <p>
                    これは<b>軟閾値作用素（soft-thresholding operator）</b>と呼ばれ、次のように簡潔に書くこともできる。
                </p>
                <BlockMath math="p_i = \mathrm{sign}(x_i)\max(|x_i| - \lambda, 0)" />
            </ContentBox>

            <p>
                この結果から分かるように、<InlineMath math="\ell_1" /> ノルムの近接作用素は、絶対値が <InlineMath math="\lambda" /> 以下の成分を完全にゼロに押し潰す性質を持っています。これがスパース性をもたらす本質的な理由です。
            </p>

            <ContentBox type="example" title="Example 7.3-2（二次関数の近接作用素）">
                <p>
                    関数 <InlineMath math="f(x) = \frac{1}{2} x^T A x + b^T x" /> （ただし <InlineMath math="A" /> は正定値対称行列、<InlineMath math="b \in \mathbb{R}^n" />）の近接作用素を求める。
                </p>
                <p>
                    <InlineMath math="f" /> は微分可能であるため、近接作用素の定義における最適化問題の目的関数
                </p>
                <BlockMath math="g(y) = \frac{1}{2} y^T A y + b^T y + \frac{1}{2} \|y - x\|^2" />
                <p>
                    の勾配をゼロとおけばよい。最適解 <InlineMath math="y = p" /> における一階の最適性条件は以下の通りである。
                </p>
                <BlockMath math="\nabla g(p) = A p + b + (p - x) = 0"
                />
                <p>
                    これを <InlineMath math="p" /> について解く。
                </p>
                <BlockMath math="\begin{aligned} (I + A)p &= x - b \\ p &= (I + A)^{-1}(x - b) \end{aligned}" />
                <p>
                    したがって、<InlineMath math="\mathrm{prox}_f(x) = (I + A)^{-1}(x - b)" /> となる。
                </p>
            </ContentBox>

            <p>
                二次関数の近接作用素を計算するには、連立一次方程式を解く（あるいは逆行列を掛ける）必要があることがわかります。<InlineMath math="A" /> が対角行列であれば計算は容易ですが、一般の正定値行列の場合は計算コストがかかる点に注意が必要です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">指示関数と射影</h2>

            <p>
                次に、凸集合の指示関数の近接作用素を考えます。前節のモローの分解定理の系（Corollary 7.2-1）で確認したように、指示関数の近接作用素は集合への直交射影に他なりません。
            </p>

            <ContentBox type="example" title="Example 7.3-3（閉球への射影）">
                <p>
                    半径 <InlineMath math="r" /> の閉球 <InlineMath math="C = \{x \in \mathbb{R}^n \mid \|x\|_2 \le r\}" /> への射影 <InlineMath math="\mathrm{proj}_C(x)" /> を求める。これは指示関数 <InlineMath math="\delta_C" /> の近接作用素に等しい。
                </p>
                <p>
                    <InlineMath math="x \in C" /> の場合は、明らかに <InlineMath math="p = x" /> が最小値を与える。そうでない場合、すなわち <InlineMath math="\|x\|_2 > r" /> の場合を考える。<br />
                    幾何学的に、原点から <InlineMath math="x" /> へ向かう半直線と球面の交点が最近傍点となる。これを示す。
                </p>
                <p>
                    候補点として <InlineMath math="p = r \frac{x}{\|x\|_2}" /> をとる。任意の <InlineMath math="y \in C" /> に対して、射影の特徴づけ（Proposition 1.5-1）である <InlineMath math="\langle x - p, y - p \rangle \le 0" /> が成り立つか確認する。
                </p>
                <BlockMath math="\begin{aligned} \langle x - p, y - p \rangle &= \left\langle x - r\frac{x}{\|x\|_2}, y - r\frac{x}{\|x\|_2} \right\rangle \\ &= \left(1 - \frac{r}{\|x\|_2}\right) \left\langle x, y - r\frac{x}{\|x\|_2} \right\rangle \\ &= \left(1 - \frac{r}{\|x\|_2}\right) \left( \langle x, y \rangle - r\|x\|_2 \right) \end{aligned}" />
                <p>
                    コーシー・シュワルツの不等式より <InlineMath math="\langle x, y \rangle \le \|x\|_2 \|y\|_2 \le \|x\|_2 r" /> であるため、<InlineMath math="\langle x, y \rangle - r\|x\|_2 \le 0" /> となる。また仮定より <InlineMath math="1 - r/\|x\|_2 > 0" /> である。したがって <InlineMath math="\langle x - p, y - p \rangle \le 0" /> が示された。
                </p>
                <p>
                    以上より、射影の明示公式は以下のようになる。
                </p>
                <BlockMath math="\mathrm{proj}_C(x) = \begin{cases} x & (\|x\|_2 \le r) \\ r \frac{x}{\|x\|_2} & (\|x\|_2 > r) \end{cases}" />
            </ContentBox>

            <p>
                アフィン集合への射影は、線形代数における直交射影の概念と直接的に対応します。
            </p>

            <ContentBox type="example" title="Example 7.3-4（アフィン集合への射影）">
                <p>
                    アフィン集合 <InlineMath math="C = \{x \in \mathbb{R}^n \mid Ax = b\}" /> への射影を求める。ここで行列 <InlineMath math="A \in \mathbb{R}^{m \times n}" /> は行フルランク（<InlineMath math="AA^T" /> が正則）とする。
                </p>
                <p>
                    最適化問題 <InlineMath math="\min_{p} \frac{1}{2}\|p - x\|^2 \quad \text{subject to} \quad Ap = b" /> を解くためにラグランジュ関数を導入する。
                </p>
                <BlockMath math="\mathcal{L}(p, \nu) = \frac{1}{2}\|p - x\|^2 + \nu^T (Ap - b)" />
                <p>
                    <InlineMath math="p" /> に関する一階条件は <InlineMath math="\nabla_p \mathcal{L} = (p - x) + A^T \nu = 0" /> であり、これから <InlineMath math="p = x - A^T \nu" /> を得る。<br />
                    これを制約条件 <InlineMath math="Ap = b" /> に代入する。
                </p>
                <BlockMath math="\begin{aligned} A(x - A^T \nu) &= b \\ Ax - A A^T \nu &= b \\ \nu &= (A A^T)^{-1}(Ax - b) \end{aligned}" />
                <p>
                    したがって、求める射影は以下のようになる。
                </p>
                <BlockMath math="\mathrm{proj}_C(x) = x - A^T(A A^T)^{-1}(Ax - b)" />
                <p>
                    これは、Chapter 2-1「線形代数学II」で学ぶ正規方程式による射影の一般化となっている。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="近接作用素の計算効率とアルゴリズム">
                <p>
                    これまでに見てきた例のように、近接作用素が閉形式（明示的な数式）で記述できる場合、アルゴリズムの1ステップを非常に高速に実行することができます。しかし、一般的な凸関数に対しては必ずしも閉形式が存在するとは限りません。
                </p>
                <p>
                    閉形式が得られない場合、近接作用素を求めるための部分問題（内部ループ）をニュートン法などの反復法を用いて近似的に解く必要があります。近接作用素の効率的な計算（あるいは評価）が可能かどうかが、実用的な最適化アルゴリズムを選択する上での決定的な要因となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\ell_1" /> ノルムの近接作用素は、各成分に対する軟閾値作用素となる。これがスパース性を生む要因である。</li>
                    <li>二次関数の近接作用素は連立一次方程式を解くことに帰着される。</li>
                    <li>指示関数の近接作用素は凸集合への射影に一致し、球やアフィン集合については明示的な射影公式が存在する。</li>
                    <li>近接作用素を閉形式で計算できるかどうかが、アルゴリズムの実用性に直結する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
