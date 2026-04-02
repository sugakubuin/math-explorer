import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ElementaryConditionalExpectation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに学んだ期待値は、確率変数が持つ平均的な情報を表すものでした。
                しかし、現実の現象では「ある事象が起こった」あるいは「別の確率変数の値がわかった」という情報が得られた際に、予測を更新したい場面が多くあります。
                本節では、まず離散型および連続型確率変数に対して、初等的な方法で条件付き期待値を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">離散・連続での定義</h2>

            <p className="leading-relaxed">
                確率変数 <InlineMath math="Y" /> の値が特定の値 <InlineMath math="y" /> であることがわかったときの、<InlineMath math="X" /> の期待値を定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (離散の場合の条件付き期待値)">
                <p>
                    離散型確率変数 <InlineMath math="X, Y" /> に対し、<InlineMath math="P(Y = y) > 0" /> であるとき、
                    <InlineMath math="Y = y" /> という条件の下での <InlineMath math="X" /> の<b>条件付き期待値</b>（conditional expectation）を次で定義する：
                    <BlockMath math="E[X \mid Y = y] = \sum_x x P(X = x \mid Y = y)" />
                    これは <InlineMath math="y" /> の関数であり、新たに確率変数 <InlineMath math="E[X \mid Y]" /> を定義する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                連続型の場合も、条件付き密度関数を用いることで同様に定義できます。
            </p>

            <ContentBox type="definition" title="Definition 5.1-2 (連続の場合の条件付き期待値)">
                <p>
                    連続型確率変数 <InlineMath math="X, Y" /> が結合密度 <InlineMath math="f(x, y)" /> を持つとし、
                    条件付き密度関数を <InlineMath math="f_{X \mid Y}(x \mid y) = f(x, y) / f_Y(y)" /> とするとき、
                    <InlineMath math="Y = y" /> 条件下での <InlineMath math="X" /> の期待値を次で定義する：
                    <BlockMath math="E[X \mid Y = y] = \int_{-\infty}^\infty x f_{X \mid Y}(x \mid y) dx" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な計算例として、 2 次元の領域上での期待値を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 5.1-1 (2 次元一様分布での条件付き期待値)">
                <p>
                    <InlineMath math="(X, Y)" /> が単位正方形 <InlineMath math="[0, 1] \times [0, 1]" /> 上の一様分布に従うとする。
                    このとき、結合密度は <InlineMath math="f(x, y) = 1" /> であり、周辺密度は共に <InlineMath math="f_X(x) = 1, f_Y(y) = 1" /> である。
                    条件付き期待値は、
                    <BlockMath math="E[X \mid Y = y] = \int_0^1 x \cdot \frac{1}{1} dx = \left[ \frac{1}{2}x^2 \right]_0^1 = \frac{1}{2}" />
                    となり、<InlineMath math="E[X \mid Y]" /> は定数 <InlineMath math="1/2" /> となる。これは <InlineMath math="X" /> と <InlineMath math="Y" /> が独立であることに対応している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全期待値の法則</h2>

            <p className="leading-relaxed">
                条件付き期待値を用いると、全体の期待値を段階的に計算することが可能です。この強力な道具を「全期待値の法則」と呼びます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.1-1 (全期待値の法則)">
                <p>
                    確率変数 <InlineMath math="X" /> が可積分であるとき、次が成り立つ：
                    <BlockMath math="E[X] = E[E[X \mid Y]]" />
                    これは「タワー性」の最も初等的な形である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    離散型の場合について、右辺の期待値の定義に沿って計算する。
                    <BlockMath math="\begin{aligned} E[E[X \mid Y]] &= \sum_y E[X \mid Y = y] P(Y = y) \\ &= \sum_y \left( \sum_x x P(X = x \mid Y = y) \right) P(Y = y) \\ &= \sum_y \sum_x x \frac{P(X = x, Y = y)}{P(Y = y)} P(Y = y) \\ &= \sum_x x \sum_y P(X = x, Y = y) \\ &= \sum_x x P(X = x) = E[X] \end{aligned}" />
                    となり、全確率の公式と同様の計算手順で導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この法則は、パラメータが確率的に変動するような二段構えのモデルにおいて非常に有効です。
            </p>

            <ContentBox type="example" title="Example 5.1-2 (全期待値の法則の応用)">
                <p>
                    あるコインの表が出る確率 <InlineMath math="p" /> が、まず <InlineMath math="[0, 1]" /> 上の一様乱数によって選ばれるとする。
                    その後、そのコインを <InlineMath math="n" /> 回投げたときの表の回数を <InlineMath math="X" /> とするとき、期待値 <InlineMath math="E[X]" /> を求めたい。
                </p>
                <p>
                    <InlineMath math="p" /> が固定されているとき、<InlineMath math="X" /> は二項分布に従うため、<InlineMath math="E[X \mid p] = np" /> である。
                    全期待値の法則より、
                    <BlockMath math="E[X] = E[E[X \mid p]] = E[np] = n E[p] = n \cdot \frac{1}{2} = \frac{n}{2}" />
                    となり、直接計算するよりもはるかに簡潔に求めることができる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このように、条件付き期待値は「部分的な情報に基づいた予測」として非常に直感的です。
                しかし、より複雑な情報（σ-加法族）に対する条件付けを扱うには、測度論に基づく一般化が必要となります。
                次節では、ラドン・ニコディム定理を用いた高度な定義へと進みます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>初等的な条件付き期待値は、離散型は総和、連続型は積分を用いて定義される。</li>
                    <li>条件付き期待値 <InlineMath math="E[X \mid Y]" /> は、それ自体が情報量 <InlineMath math="Y" /> に依存する新しい確率変数である。</li>
                    <li>全期待値の法則 <InlineMath math="E[X] = E[E[X \mid Y]]" /> は、全体の平均を条件付きの平均の平均として計算できることを保証する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
