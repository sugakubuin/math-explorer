import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MomentsAndGeneratingFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                期待値や分散は、分布の全体像を捉えるための基礎的な指標でしたが、それらを拡張した<b>モーメント</b>を考えることで、より詳細な分布の形状（歪みや尖りなど）を記述できるようになります。
                また、これらの情報を一括して管理できる<b>モーメント母関数</b>は、分布の和の計算において極めて強力な計算ツールとなります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">モーメントの定義</h2>

            <p className="leading-relaxed">
                モーメントは、確率変数の冪乗の期待値として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (n 次モーメント)">
                <p>
                    確率変数 <InlineMath math="X" /> に対して、次のように定数 <InlineMath math="n" /> に対する期待値を定義する。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>n 次モーメント</b>：<InlineMath math="E[X^n]" />
                    </li>
                    <li>
                        <b>n 次中心モーメント</b>：<InlineMath math="E[(X - E[X])^n]" />
                    </li>
                </ul>
                <p>
                    1 次モーメントは平均であり、2 次中心モーメントは分散に一致する。
                    さらに、正規分布からの歪みの程度を表す「歪度」（3 次）や、分布の裾の重さを表す「尖度」（4 次）なども、これら高次のモーメントによって算出される。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-1 (正規分布の高次モーメント)">
                <p>
                    標準正規分布 <InlineMath math="X \sim \mathcal{N}(0, 1)" /> の場合、対称性により奇数次のモーメントはすべて 0 となる。
                    一方で偶数次モーメントについては、積分を用いて次のように明示的な形（二重階乗）で求まる。
                    <BlockMath math="E[X^{2n}] = (2n - 1)!! = 1 \cdot 3 \cdot 5 \cdots (2n - 1)" />
                    例えば <InlineMath math="E[X^2] = 1" />, <InlineMath math="E[X^4] = 3" /> となる。
                    この事実は、ガウス積分の繰り返し部分積分によって導かれる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">モーメント母関数</h2>

            <p className="leading-relaxed">
                各モーメントを、特定の指数の肩に乗せて一つの関数にまとめたものを定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.4-2 (モーメント母関数)">
                <p>
                    確率変数 <InlineMath math="X" /> に対して、次で定義される関数 <InlineMath math="M_X(t)" /> を<b>モーメント母関数</b>（moment generating function, MGF）と呼ぶ。
                    <BlockMath math="M_X(t) = E[e^{tX}] \quad (t \in \mathbb{R})" />
                    期待値が有限の値として定義される範囲でのみ有効である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                名称の通り、この関数を微分することで、任意の次数のモーメントを「生成」できます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.4-1 (MGF とモーメントの関係)">
                <p>
                    <InlineMath math="M_X(t)" /> が原点 <InlineMath math="t=0" /> の近傍で有限であるならば、<InlineMath math="M_X(t)" /> は何回でも微分可能であり、
                    <InlineMath math="n" /> 次モーメントは次のように得られる：
                    <BlockMath math="E[X^n] = M_X^{(n)}(0)" />
                    すなわち、モーメント母関数の <InlineMath math="t=0" /> における <InlineMath math="n" /> 次微分の値が、元の確率変数の <InlineMath math="n" /> 次モーメントに一致する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    指数関数 <InlineMath math="e^{tX}" /> のテイラー展開を考え、項別に期待値をとる：
                    <BlockMath math="E[e^{tX}] = E\left[ \sum_{n=0}^\infty \frac{t^n X^n}{n!} \right] = \sum_{n=0}^\infty \frac{t^n E[X^n]}{n!}" />
                    期待値（積分）と無限和の順位交換が、原点近傍での収束性および支配収束定理によって正当化されるとき、左辺を <InlineMath math="t" /> について <InlineMath math="n" /> 回微分して <InlineMath math="t=0" /> を代入すると、右辺の第 <InlineMath math="n" /> 項の係数 <InlineMath math="E[X^n]" /> が抽出される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-2 (正規分布の MGF)">
                <p>
                    <InlineMath math="X \sim \mathcal{N}(\mu, \sigma^2)" /> のモーメント母関数は、次のように指数関数の冪の積として求まる：
                    <BlockMath math="M_X(t) = \exp\left( \mu t + \frac{\sigma^2 t^2}{2} \right)" />
                    これを <InlineMath math="t" /> で微分すると、
                    <BlockMath math="M'_X(t) = (\mu + \sigma^2 t) M_X(t)" />
                    より <InlineMath math="M'_X(0) = \mu" />（平均）、さらにもう一度微分して <InlineMath math="t=0" /> を代入すると <InlineMath math="\mu^2 + \sigma^2" /> となり、<InlineMath math="E[X^2] - (E[X])^2 = \sigma^2" />（分散）が正しく得られることを確認できる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-3 (指数分布の MGF)">
                <p>
                    <InlineMath math="X \sim \mathrm{Exp}(\lambda)" /> （<InlineMath math="\lambda > 0" />）のモーメント母関数を求める。
                    <BlockMath math="M_X(t) = \int_0^\infty e^{tx} \lambda e^{-\lambda x} \, dx = \lambda \int_0^\infty e^{-(\lambda - t)x} \, dx" />
                    これは <InlineMath math="t < \lambda" /> の範囲で収束し、
                    <BlockMath math="M_X(t) = \frac{\lambda}{\lambda - t}" />
                    となる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="MGF の一意性と限界">
                <p>
                    モーメント母関数は分布を一意に決定するという強力な性質がありますが、すべての分布で原点近傍で有限の値を持つとは限りません（例：裾が非常に重い分布）。
                    そのため、すべての確率変数に対して常に存在が保証される、複素数領域への拡張である「特性関数」（Chapter 7 で詳説）が、後のより高度な理論展開（中心極限定理など）では中心的な役割を果たすことになります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ここまでで、確率空間、確率変数、そして期待値という、確率論の三大要素についてルベーグ積分の視点から厳密に学びました。
                次章では、これらの要素が組み合わさった際に現れる、確率論最大の武器とも言える<b>独立性</b>の概念を扱います。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="n" /> 次モーメントは、分布の「歪み」や「尖り」といった微細な形状を記述するための道具である。</li>
                    <li>モーメント母関数 (MGF) は、各次のモーメントを係数に持つべき級数の期待値として定義される。</li>
                    <li>MGF を <InlineMath math="t=0" /> で <InlineMath math="n" /> 回微分することで、<InlineMath math="n" /> 次モーメントを容易に算出できる。</li>
                    <li>MGF は分布の一意決定性などの強力な性質を持つが、常に存在が保証されているわけではない（Chapter 7 の特性関数へと続く）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
