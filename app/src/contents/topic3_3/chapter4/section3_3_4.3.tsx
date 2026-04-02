import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LpHolderMinkowski() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                <InlineMath math="L^p" /> 空間がバナッハ空間（完備なノルム空間）であることを示すための土台となるのが、<b>ヘルダーの不等式</b>と<b>ミンコフスキーの不等式</b>です。
                これらの不等式は、積の可積分性や、三角形の公理（ノルムの三角不等式）を保証する重要なツールです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヘルダーの不等式 (Hölder's Inequality)</h2>

            <p>
                積の積分をそれぞれのノルムで評価するための不等式です。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (ヘルダーの不等式)">
                <p>
                    <InlineMath math="1 < p < \infty" /> とし、共役指数 <InlineMath math="q" /> を <InlineMath math="1/p + 1/q = 1" /> で定める。
                    <InlineMath math="f \in L^p(X, \mu)" /> および <InlineMath math="g \in L^q(X, \mu)" /> ならば、積 <InlineMath math="fg" /> は可積分であり、次が成り立つ：
                    <BlockMath math="\int_X |fg| \, d\mu \leq \|f\|_p \|g\|_q" />
                </p>
                <p className="mt-4">
                    特に <InlineMath math="p = q = 2" /> の場合、これは <b>コーシー・シュワルツの不等式</b> に一致する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    実数 <InlineMath math="a, b \geq 0" /> に対する <b>ヤングの不等式</b> <InlineMath math="ab \leq \frac{a^p}{p} + \frac{b^q}{q}" /> を用いる。
                    まず <InlineMath math="\|f\|_p = 1" /> および <InlineMath math="\|g\|_q = 1" /> の場合を示す。
                </p>
                <p className="mt-4">
                    ヤングの不等式より
                    <BlockMath math="|f(x)g(x)| \leq \frac{|f(x)|^p}{p} + \frac{|g(x)|^q}{q}" />
                    が成り立つ。両辺を積分すると
                    <BlockMath math="\int |fg| \, d\mu \leq \frac{1}{p} \int |f|^p \, d\mu + \frac{1}{q} \int |g|^q \, d\mu = \frac{1}{p} + \frac{1}{q} = 1" />
                    一般の場合は、<InlineMath math="f, g \neq 0" /> ならば <InlineMath math="f/\|f\|_p" /> と <InlineMath math="g/\|g\|_q" /> に適用すればよい。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ミンコフスキーの不等式 (Minkowski's Inequality)</h2>

            <p>
                この不等式は、<InlineMath math="L^p" /> ノルムが三角不等式を満たすことを示し、<InlineMath math="L^p" /> がノルム空間であることを保証します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-2 (ミンコフスキーの不等式)">
                <p>
                    <InlineMath math="1 \leq p \leq \infty" /> とし、<InlineMath math="f, g \in L^p(X, \mu)" /> とすると、<InlineMath math="f + g \in L^p(X, \mu)" /> であり、次が成り立つ：
                    <BlockMath math="\|f + g\|_p \leq \|f\|_p + \|g\|_p" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p=1" /> の場合は通常の絶対値の三角不等式から明らか。<InlineMath math="1 < p < \infty" /> の場合を考える。
                </p>
                <p className="mt-4">
                    <BlockMath math="|f + g|^p \leq |f + g|^{p-1} |f| + |f + g|^{p-1} |g|" />
                    これに対してヘルダーの不等式を適用する。
                    <BlockMath math="\begin{aligned} \int |f+g|^p \, d\mu &\leq \int |f+g|^{p-1}|f| \, d\mu + \int |f+g|^{p-1}|g| \, d\mu \\ &\leq \|f\|_p \| |f+g|^{p-1} \|_q + \|g\|_p \| |f+g|^{p-1} \|_q \end{aligned}" />
                    ここで <InlineMath math="(p-1)q = p" /> であることを用いて計算を進めると、結論を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-1 (p=2 の具体的イメージ)">
                <p>
                    <InlineMath math="L^2" /> では、ミンコフスキーの不等式は「二つの関数の合成（和）のエネルギーは、それぞれのエネルギーの和を超えない」という直感的な解釈ができます。ベクトル空間における三角形の三辺の関係そのものです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ヘルダーの不等式</b> は積の積分を各ノルムで評価し、<InlineMath math="p" /> と共役指数 <InlineMath math="q" /> を結ぶ。</li>
                    <li><b>ミンコフスキーの不等式</b> は <InlineMath math="L^p" /> ノルムの三角不等式を与え、ノルムの定義を完成させる。</li>
                    <li>これらの不等式により、<InlineMath math="L^p" /> は線形空間としての構造とノルムの整合性が保たれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
