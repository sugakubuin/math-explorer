import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EgorovsTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                概収束は「ほとんどの点で収束する」ことを意味しますが、各点での収束の速さはバラバラです。
                一様収束のような強い性質は一般には期待できませんが、<b>エゴロフの定理</b>は「ほんの少しの例外（測度がいくらでも小さい集合）を削り取れば、残りの部分では一様収束する」ことを保証します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">エゴロフの定理</h2>

            <ContentBox type="theorem" title="Theorem 2.5-1 (エゴロフの定理)">
                <p>
                    有限測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> 上で、可測関数列 <InlineMath math="\{f_n\}" /> が有限値の可測関数 <InlineMath math="f" /> に a.e. で収束するとする。
                    このとき、任意の <InlineMath math="\varepsilon > 0" /> に対して、以下の条件を満たす可測集合 <InlineMath math="E \in \mathcal{A}" /> が存在する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="\mu(X \setminus E) < \varepsilon" /></li>
                    <li><InlineMath math="f_n" /> は <InlineMath math="E" /> 上で <InlineMath math="f" /> に<b>一様収束</b>する。</li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-1 (収束を阻む点を除外する)">
                <p>
                    <InlineMath math="f_n(x) = x^n" /> on <InlineMath math="[0, 1]" /> を考える。
                    この数列は <InlineMath math="x=1" /> の近傍で収束が非常に遅く、全区間では一様収束しません。
                </p>
                <p className="mt-4">
                    しかし、<InlineMath math="\varepsilon = 0.01" /> とし、<InlineMath math="[0, 0.99]" /> を集合 <InlineMath math="E" /> として選べば、
                    <InlineMath math="\mu(X \setminus E) = 0.01 = \varepsilon" /> となり、この <InlineMath math="E" /> 上では <InlineMath math="x^n" /> は 0 に一様収束します。
                    エゴロフの定理は、どんなに複雑な概収束であっても、このような「収束の遅い部分」をわずかに削り取るだけで一様収束が実現できることを一般的に証明しています。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    各 <InlineMath math="k, n \in \mathbb{N}" /> に対して、集合 <InlineMath math="A_{n, k}" /> を以下のように定義する。
                </p>
                <BlockMath math="A_{n, k} = \bigcup_{m=n}^\infty \{x \in X \mid |f_m(x) - f(x)| \geq 1/k\}" />
                <p>
                    各 <InlineMath math="k" /> に対して、<InlineMath math="A_{1, k} \supset A_{2, k} \supset \cdots" /> は単調減少な集合列である。
                    また <InlineMath math="f_n(x) \to f(x)" /> a.e. より、<InlineMath math="\mu(\bigcap_n A_{n, k}) = 0" /> である。
                    ここで <InlineMath math="\mu(X) < \infty" /> であるから、測度の連続性より、
                    <BlockMath math="\lim_{n\to\infty} \mu(A_{n, k}) = 0" />
                    となる。
                </p>
                <p className="mt-4">
                    そこで、任意の <InlineMath math="\varepsilon > 0" /> に対し、各 <InlineMath math="k" /> について <InlineMath math="\mu(A_{n_k, k}) < \varepsilon / 2^k" /> となるような十分大きな <InlineMath math="n_k" /> を選ぶ。
                    いま、集合 <InlineMath math="E" /> を以下のように定める。
                </p>
                <BlockMath math="E = X \setminus \bigcup_{k=1}^\infty A_{n_k, k}" />
                <p className="pt-2">
                    1. <b>測度の評価</b>:
                    <BlockMath math="\mu(X \setminus E) = \mu\left(\bigcup_{k=1}^\infty A_{n_k, k}\right) \leq \sum_{k=1}^\infty \mu(A_{n_k, k}) < \sum_{k=1}^\infty \frac{\varepsilon}{2^k} = \varepsilon" />
                </p>
                <p className="pt-2 pb-2">
                    2. <b>一様収束性</b>:
                    任意の <InlineMath math="\eta > 0" /> に対し、<InlineMath math="1/k < \eta" /> となる <InlineMath math="k" /> を1つ固定する。
                    <InlineMath math="x \in E" /> ならば <InlineMath math="x \notin A_{n_k, k}" /> であるから、定義より
                    <InlineMath math="\forall m \geq n_k, \; |f_m(x) - f(x)| < 1/k < \eta" />
                    が成り立つ。この <InlineMath math="n_k" /> は <InlineMath math="x" /> によらず <InlineMath math="\eta" /> だけで決まるため、<InlineMath math="E" /> 上で一様収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の解釈と反例</h2>

            <p>
                エゴロフの定理は非常に強力ですが、全ての点で一様収束するわけではなく、あくまで「わずかな集合を無視すれば」という但し書きがつきます。
            </p>

            <ContentBox type="example" title="Example 2.5-2 (典型的な例：冪関数)">
                <p>
                    区間 <InlineMath math="[0, 1]" /> 上の関数列 <InlineMath math="f_n(x) = x^n" /> を考える。
                    この関数列は <InlineMath math="[0, 1)" /> で各点 0 に収束し、<InlineMath math="x=1" /> で 1 となる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>全区間 <InlineMath math="[0, 1]" /> 上では収束は一様ではない。</li>
                    <li>しかし、適当な <InlineMath math="\delta > 0" /> を選んで <InlineMath math="[0, 1-\delta]" /> という部分集合を考えれば、そこでは一様収束する。</li>
                    <li>エゴロフの定理は、この <InlineMath math="\delta" /> をいくらでも小さく取れることを保証している。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="有限測度の仮定は必須か？">
                <p>
                    もし <InlineMath math="\mu(X) = \infty" /> の場合、定理は必ずしも成り立ちません。
                    例えば <InlineMath math="\mathbb{R}" /> 上の特性関数 <InlineMath math="f_n = \mathbf{1}_{[n, n+1]}" /> は各点 0 に収束しますが、どの点でも収束の速さは同じでありながら、実数全体から「何を削っても（有限測度の範囲では）」一様収束に持ち込むことはできません。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>エゴロフの定理</b>は、概収束を「ほぼ一様収束」に持ち込めることを示す。</li>
                    <li>任意の <InlineMath math="\varepsilon > 0" /> に対し、測度 <InlineMath math="\varepsilon" /> の部分を除けば一様収束する。</li>
                    <li>測度空間が<b>有限</b>であることは、この定理が成り立つための本質的な要請である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
