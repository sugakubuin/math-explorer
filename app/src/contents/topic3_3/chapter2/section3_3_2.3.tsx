import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SimpleFunctionApproximation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ルベーグ積分を構成する際、まず「値が階段状に変化する簡単な関数」に対する積分を定義し、そこから一般の関数へと広げていく手法をとります。
                この「簡単な関数」が<b>単関数</b>であり、任意の可測関数は単関数によってボトムアップに近似することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単関数の定義</h2>

            <p>
                単関数は、有限個の値のみを取る可測関数のことです。特性関数の線形結合として表現されます。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (単関数)">
                <p>
                    可測空間 <InlineMath math="(X, \mathcal{A})" /> 上の関数 <InlineMath math="s : X \to \mathbb{R}" /> の値域が有限集合 <InlineMath math="\{c_1, c_2, \ldots, c_k\}" /> であるとき、<InlineMath math="s" /> を<b>単関数</b> (simple function) という。
                    単関数は以下のように表現できる。
                    <BlockMath math="s(x) = \sum_{j=1}^k c_j \mathbf{1}_{A_j}(x)" />
                    ここで <InlineMath math="A_j = \{x \in X \mid s(x) = c_j\}" /> である。すべての <InlineMath math="c_j" /> が相異なり、<InlineMath math="A_j" /> が互いに素でその和集合が <InlineMath math="X" /> となる表現を<b>標準形</b>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1 (典型的な単関数)">
                <p>
                    <InlineMath math="X = [0, 2]" /> において、以下のように定義される関数 <InlineMath math="s(x)" /> を考える。
                </p>
                <BlockMath math="s(x) = \begin{cases} 3 & (0 \leq x < 1) \\ 5 & (1 \leq x \leq 2) \end{cases}" />
                <p className="mt-4">
                    これは以下のように特性関数の和として書けます。
                </p>
                <BlockMath math="s(x) = 3 \cdot \mathbf{1}_{[0, 1)}(x) + 5 \cdot \mathbf{1}_{[1, 2]}(x)" />
                 <p className="mt-4">
                    値域は <InlineMath math="\{3, 5\}" /> という有限集合であり、各値の逆像はボレル集合であるため、これは単関数の典型的な例です。
                </p>
            </ContentBox>

            <p>
                単関数は可測集合を台とする「階段」の集まりであり、その構造は非常に単純です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単調近似定理</h2>

            <p>
                ルベーグ積分の理論を支える最も重要な定理の1つが、次の「単関数による近似」です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (単調近似定理)">
                <p>
                    非負値可測関数 <InlineMath math="f : X \to [0, \infty]" /> に対して、以下の条件を満たす単関数列 <InlineMath math="\{s_n\}" /> が存在する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><b>単調増加性</b>: <InlineMath math="0 \leq s_1(x) \leq s_2(x) \leq \cdots \leq f(x)" /></li>
                    <li><b>点別収束</b>: すべての <InlineMath math="x \in X" /> に対して <InlineMath math="\lim_{n\to\infty} s_n(x) = f(x)" /></li>
                </ol>
                <p className="mt-4">
                    さらに、<InlineMath math="f" /> が有界である集合上では、この収束は一様収束となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    具体的に単関数列を構成する。各 <InlineMath math="n \in \mathbb{N}" /> に対して、<InlineMath math="f" /> の値域を細かく分割し、以下の規則で <InlineMath math="s_n" /> を定義する。
                </p>
                <BlockMath math="s_n(x) = \begin{cases} \frac{k}{2^n} & (\text{if } \frac{k}{2^n} \leq f(x) < \frac{k+1}{2^n}, \; k=0, 1, \ldots, n \cdot 2^n - 1) \\ n & (\text{if } f(x) \geq n) \end{cases}" />
                <p className="mt-4 pb-2">
                    1. <b>可測性</b>: <InlineMath math="s_n" /> が取る値の各逆像は、<InlineMath math="f" /> の逆像の共通部分や差として書けるため、<InlineMath math="f" /> が可測なら <InlineMath math="s_n" /> も可測（単関数）である。
                </p>
                <p className="pb-2">
                    2. <b>単調性</b>: <InlineMath math="n" /> を増やしたとき、分割が倍々に細かくなるため <InlineMath math="s_{n+1}(x) \geq s_n(x)" /> が成り立つ。
                </p>
                <p className="pb-2">
                    3. <b>収束性</b>: <InlineMath math="f(x)" /> が有限値のとき、ある程度大きな <InlineMath math="n" /> で <InlineMath math="n > f(x)" /> となり、<InlineMath math="f(x) - s_n(x) < \frac{1}{2^n}" /> が成り立つ。
                       したがって <InlineMath math="s_n(x) \to f(x)" />。また、この不等式により有界集合上での一様収束も示される。
                </p>
                <p>
                    4. <b>無限大の場合</b>: <InlineMath math="f(x) = \infty" /> の場合、定義より <InlineMath math="s_n(x) = n" /> となり、<InlineMath math="n \to \infty" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="積分の「ボトムアップ」構成">
                <p>
                    この定理により、「任意の非負可測関数の積分」を「それを下から近似する単関数の積分の極限（上限）」として定義する道が開かれます。
                    リーマン積分が「定義域（x軸）を分割」して近似したのに対し、ルベーグ積分は「値域（y軸）を分割」して近似していることが、この <InlineMath math="s_n" /> の構成から見て取れます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-2 (近似のイメージ)">
                <p>
                    <InlineMath math="f(x) = x" /> （<InlineMath math="x \in [0, 1]" />）に対して <InlineMath math="n=2" /> の構成を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>値域を <InlineMath math="1/2^2 = 1/4" /> 刻みで分割する。</li>
                    <li><InlineMath math="s_2(x) = 0" /> （<InlineMath math="0 \leq x < 1/4" />）</li>
                    <li><InlineMath math="s_2(x) = 1/4" /> （<InlineMath math="1/4 \leq x < 1/2" />）</li>
                    <li><InlineMath math="s_2(x) = 1/2" /> （<InlineMath math="1/2 \leq x < 3/4" />）</li>
                    <li><InlineMath math="s_2(x) = 3/4" /> （<InlineMath math="3/4 \leq x \leq 1" />）</li>
                </ul>
                <p className="mt-4">
                    グラフを描くと、<InlineMath math="y=x" /> という直線を下側から階段状の関数で近似している様子がわかります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>単関数</b>は有限個の値をとる可測関数であり、特性関数の和で表される。</li>
                    <li><b>単調近似定理</b>は、任意の非負値可測関数を単関数の単調増加列で近似できることを保証する。</li>
                    <li>これはルベーグ積分の具体的な積分の定義（値域の分割による近似）の基礎となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
