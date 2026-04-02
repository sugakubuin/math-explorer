import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BoundedVariation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「積分がいかに滑らかか」を議論する準備として、関数の「変動（variation）」という概念を導入します。
                <b>有界変動関数</b>は、有限の区間内で関数がどれだけ「上下」したかの総量が有限であるような関数を指し、微積分学の基本定理との深い関わりを持ちます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全変動と有界変動関数の定義</h2>

            <p>
                区間 <InlineMath math="[a, b]" /> 上で定義された実数値関数 <InlineMath math="f" /> に対し、その振る舞いの激しさを数値化します。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (全変動)">
                <p>
                    区間 <InlineMath math="[a, b]" /> の分割 <InlineMath math="\Delta = \{a = x_0 < x_1 < \cdots < x_n = b\}" /> に対して、その変位の総和を
                    <BlockMath math="V(f, \Delta) = \sum_{i=1}^n |f(x_i) - f(x_{i-1})|" />
                    とする。あらゆる可能な分割 <InlineMath math="\Delta" /> にわたる上限
                    <BlockMath math="V_a^b(f) = \sup_{\Delta} V(f, \Delta)" />
                    を、関数 <InlineMath math="f" /> の <InlineMath math="[a, b]" /> における <b>全変動 (total variation)</b> と呼ぶ。
                    <InlineMath math="V_a^b(f) < \infty" /> のとき、<InlineMath math="f" /> は <b>有界変動関数 (functions of bounded variation, BV)</b> であるという。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-1 (有界変動と非有界変動)">
                <ul className="list-disc list-inside space-y-2">
                    <li><b>単調関数</b>：区間 <InlineMath math="[a, b]" /> で単調増加なら、全変動は単に <InlineMath math="f(b) - f(a)" /> となり、常に有界変動である。</li>
                    <li><b>リプシッツ連続関数</b>：導関数が有界であれば有界変動である。</li>
                    <li><b>反例</b>：<InlineMath math="f(x) = x \sin(1/x)" /> （<InlineMath math="f(0)=0" />）は、<InlineMath math="[0, 1]" /> で連続だが原点付近で激しく振動するため、有界変動ではない。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ジョルダンの分解定理</h2>

            <p>
                有界変動関数は、一見複雑な動きをしますが、実は二つの「おとなしい」関数の差として表現できることが知られています。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 (ジョルダンの分解定理)">
                <p>
                    関数 <InlineMath math="f" /> が区間 <InlineMath math="[a, b]" /> で有界変動であるための必要十分条件は、<InlineMath math="f" /> が二つの <b>単調増加関数</b> <InlineMath math="g, h" /> の差として書けることである：
                    <BlockMath math="f(x) = g(x) - h(x)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> が有界変動のとき、<InlineMath math="g(x) = V_a^x(f)" /> （<InlineMath math="a" /> から <InlineMath math="x" /> までの全変動）と置く。
                    <InlineMath math="g" /> は明らかに単調増加である。
                    また <InlineMath math="h(x) = V_a^x(f) - f(x)" /> と置くと、<InlineMath math="x < y" /> に対して
                    <BlockMath math="\begin{aligned} h(y) - h(x) &= (V_a^y(f) - V_a^x(f)) - (f(y) - f(x)) \\ &= V_x^y(f) - (f(y) - f(x)) \end{aligned}" />
                    となる。全変動の定義より <InlineMath math="V_x^y(f) \geq |f(y) - f(x)|" /> であるから、<InlineMath math="h(y) - h(x) \geq 0" /> となり、<InlineMath math="h" /> も単調増加である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="微分可能性への橋渡し">
                <p>
                    ルベーグの定理によれば、単調増加関数は <b>ほとんど至る所 (a.e.) で微分可能</b> です。
                    ジョルダンの分解定理により、有界変動関数もまた a.e. で微分可能であることが保証されます。
                    これは、積分の導関数を考える上で極めて重要な基礎となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>全変動</b> は関数の振る舞いの激しさを累積変位で測る指標である。</li>
                    <li><b>有界変動関数</b> は、上下の動きの総量が有限な関数である。</li>
                    <li><b>ジョルダンの分解定理</b> により、有界変動関数は二つの単調増加関数の差として分解できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
