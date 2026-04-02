import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FubiniTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                積分の順序を入れ替える際、関数が負の値をとる場合には注意が必要です。
                <b>フビニの定理</b>は、関数が「可積分」であるという条件のもとで、積分の順序交換を正当化します。
                実務上は、まず前節のトネリの定理で可積分性を確認し、その後にフビニの定理を適用するのが定石です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フビニの定理 (Fubini's Theorem)</h2>

            <p>
                この定理は、多重積分の計算を逐次積分へと分解することを可能にします。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-1 (フビニの定理)">
                <p>
                    <InlineMath math="(X, \mathcal{A}, \mu)" /> と <InlineMath math="(Y, \mathcal{B}, \nu)" /> を <InlineMath math="\sigma" />-有限な測度空間とする。
                    可測関数 <InlineMath math="f: X \times Y \to \mathbb{C}" />（または <InlineMath math="\mathbb{R}" />）が <b>可積分</b>、すなわち
                    <BlockMath math="\int_{X \times Y} |f| \, d(\mu \otimes \nu) < \infty" />
                    を満たすとき、積分の順序によらず次が成り立つ：
                    <BlockMath math="\begin{aligned} \int_{X \times Y} f \, d(\mu \otimes \nu) &= \int_X \left( \int_Y f(x, y) \, d\nu(y) \right) d\mu(x) \\ &= \int_Y \left( \int_X f(x, y) \, d\mu(x) \right) d\nu(y) \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    可積分な関数は、正部分 <InlineMath math="f^+" />・負部分 <InlineMath math="f^-" /> （複素数値なら実部虚部）に分解でき、それぞれが非負値可測関数となる。
                    分解された各成分に対してトネリの定理を適用すれば、等号が成り立つ。
                    可積分性の仮定により、各逐次積分において現れる値は a.e. で有限であることが保証されるため、引き算の操作が正当化される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算の手順：トネリからフビニへ</h2>

            <p>
                実用的な計算では、以下の 2 ステップを踏むことが強く推奨されます。
            </p>

            <ContentBox type="remark" title="計算の定石">
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><b>Step 1 (トネリ)</b>：絶対値 <InlineMath math="|f|" /> に対して逐次積分を行い、その値が有限であることを示す。これにより <InlineMath math="f" /> が可積分であることが分かる。</li>
                    <li><b>Step 2 (フビニ)</b>：可積分性が保証されたので、元の関数 <InlineMath math="f" /> に対して計算しやすい順序で逐次積分を行う。</li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-1 (順序交換が失敗する例)">
                <p>
                    可積分性の条件を無視すると、誤った結論が導かれます。
                    <InlineMath math="X = Y = (0, 1)" /> 上で、関数 <InlineMath math="f(x, y) = \frac{x^2 - y^2}{(x^2 + y^2)^2}" /> を考えてみよう。
                    これを <InlineMath math="x" /> で先に積分してから <InlineMath math="y" /> で積分すると <InlineMath math="-\pi/4" /> に、順序を逆にすると <InlineMath math="\pi/4" /> になります。
                    これは <InlineMath math="\int \int |f| \, dx dy = \infty" /> となり、関数が可積分でないために起こる現象です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>フビニの定理</b> は、可積分関数において逐次積分の等価性と順序交換を保証する。</li>
                    <li>不連続・非正値な関数の場合、事前に <b>トネリの定理で可積分性を確認</b> することが不可欠である。</li>
                    <li>可積分性が満たされない場合、積分の順序によって値が異なる、あるいは定義できない可能性がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
