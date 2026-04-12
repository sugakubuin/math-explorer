import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LHopitalRule() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                コーシーの平均値定理の最も重要な応用の一つが<strong>ロピタルの定理</strong>です。
                この定理は、<InlineMath math="\frac{0}{0}" /> 型や <InlineMath math="\frac{\infty}{\infty}" /> 型の不定形の極限を、
                分子と分母をそれぞれ微分した関数の極限に帰着させる強力な手法です。
                ただし、適用できない場合もあり、その点に十分注意する必要があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ロピタルの定理</h2>

            <ContentBox type="theorem" title="Theorem 2.4-1 (ロピタルの定理：0/0 型)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f, g" /> が次の条件を満たすとする。
                </p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                    <li><InlineMath math="f, g" /> は <InlineMath math="a" /> を含むある区間（<InlineMath math="a" /> 自身を除く）で微分可能</li>
                    <li><InlineMath math="\lim_{x \to a} f(x) = \lim_{x \to a} g(x) = 0" /></li>
                    <li><InlineMath math="g'(x) \neq 0" />（<InlineMath math="a" /> の近くで <InlineMath math="x \neq a" />）</li>
                    <li><InlineMath math="\lim_{x \to a} \frac{f'(x)}{g'(x)}" /> が存在する（有限値または <InlineMath math="\pm\infty" />）</li>
                </ol>
                <p className="leading-relaxed mt-2">
                    このとき、
                </p>
                <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    <InlineMath math="f(a) = g(a) = 0" /> と再定義しても連続性は保たれる（除去可能不連続点）。
                    <InlineMath math="a < x" /> の場合を考える（<InlineMath math="x < a" /> の場合も同様）。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="f, g" /> は <InlineMath math="[a, x]" /> 上で連続、<InlineMath math="(a, x)" /> 上で微分可能であるから、
                    コーシーの平均値定理（Theorem 2.3-1）より、ある <InlineMath math="c_x \in (a, x)" /> が存在して、
                </p>
                <BlockMath math="\frac{f(x)}{g(x)} = \frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(c_x)}{g'(c_x)}" />
                <p className="leading-relaxed">
                    ここで <InlineMath math="x \to a" /> とすると、<InlineMath math="a < c_x < x" /> より <InlineMath math="c_x \to a" /> であるから、
                </p>
                <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{c_x \to a} \frac{f'(c_x)}{g'(c_x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />
                <p className="leading-relaxed">
                    が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                0/0 型の証明では、コーシーの平均値定理が決定的な役割を果たしました。
                <InlineMath math="\frac{f(x)}{g(x)}" /> を直接 <InlineMath math="\frac{f'(c_x)}{g'(c_x)}" /> に置き換えるという、コーシーの定理ならではの論法です。
            </p>
            <p className="mt-2">
                同様の結果は <InlineMath math="\frac{\infty}{\infty}" /> 型に対しても成り立ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-2 (ロピタルの定理：∞/∞ 型)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f, g" /> が次の条件を満たすとする。
                </p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                    <li><InlineMath math="f, g" /> は <InlineMath math="a" /> の近くで微分可能（<InlineMath math="a" /> 自身を除く）</li>
                    <li><InlineMath math="\lim_{x \to a} |g(x)| = \infty" /></li>
                    <li><InlineMath math="g'(x) \neq 0" /></li>
                    <li><InlineMath math="\lim_{x \to a} \frac{f'(x)}{g'(x)} = L" /> が存在する</li>
                </ol>
                <p className="leading-relaxed mt-2">
                    このとき、<InlineMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = L" /> が成り立つ。
                    <InlineMath math="a = \pm\infty" /> の場合も同様に成立する。
                </p>
            </ContentBox>

            <p>
                ロピタルの定理の強力さは、<InlineMath math="\frac{0}{0}" /> や <InlineMath math="\frac{\infty}{\infty}" /> に限りません。
                他の不定形も、適切な変形によりロピタルの定理が適用できる形に帰着させることができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">他の不定形への変換</h2>

            <ContentBox type="proposition" title={<span>Proposition 2.4-1 (<InlineMath math="0 \cdot \infty" />, <InlineMath math="\infty - \infty" />, <InlineMath math="1^\infty" /> 型への適用)</span>}>
                <p className="leading-relaxed">
                    ロピタルの定理は <InlineMath math="\frac{0}{0}" /> または <InlineMath math="\frac{\infty}{\infty}" /> 型にのみ直接適用できますが、
                    他の不定形も適切な変形により帰着できます。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">1. <InlineMath math="0 \cdot \infty" /> 型</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x) \to 0" />, <InlineMath math="g(x) \to \infty" /> のとき、
                </p>
                <BlockMath math="\begin{aligned} f(x) \cdot g(x) &= \frac{f(x)}{1/g(x)} \quad \left(\frac{0}{0} \text{ 型}\right) \\ &\quad \text{または} \quad \frac{g(x)}{1/f(x)} \quad \left(\frac{\infty}{\infty} \text{ 型}\right) \end{aligned}" />

                <h3 className="text-lg font-semibold mt-4 mb-2">2. <InlineMath math="\infty - \infty" /> 型</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x) \to \infty" />, <InlineMath math="g(x) \to \infty" /> のとき、通分や因数分解などで <InlineMath math="\frac{0}{0}" /> または <InlineMath math="\frac{\infty}{\infty}" /> 型に変形する。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">3. <InlineMath math="1^\infty" />, <InlineMath math="0^0" />, <InlineMath math="\infty^0" /> 型</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x)^{g(x)}" /> の形の不定形は、対数をとって
                </p>
                <BlockMath math="\ln\bigl(f(x)^{g(x)}\bigr) = g(x) \ln f(x)" />
                <p className="leading-relaxed">
                    と変形し、<InlineMath math="0 \cdot \infty" /> 型に帰着させる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-1 (各種不定形の計算例)">
                <h3 className="text-lg font-semibold mt-2 mb-2"><InlineMath math="1^\infty" /> 型の例</h3>
                <p className="leading-relaxed">
                    <InlineMath math="\lim_{x \to 0+} (1 + x)^{1/x}" /> を求める。<InlineMath math="y = (1 + x)^{1/x}" /> とおくと、
                </p>
                <BlockMath math="\ln y = \frac{\ln(1 + x)}{x}" />
                <p className="leading-relaxed">
                    <InlineMath math="x \to 0+" /> で <InlineMath math="\frac{0}{0}" /> 型であるから、ロピタルの定理より
                </p>
                <BlockMath math="\lim_{x \to 0+} \frac{\ln(1 + x)}{x} = \lim_{x \to 0+} \frac{1/(1+x)}{1} = 1" />
                <p className="leading-relaxed">
                    よって <InlineMath math="\ln y \to 1" /> であるから、<InlineMath math="y \to e" /> となり、<InlineMath math="\lim_{x \to 0+} (1 + x)^{1/x} = e" /> である。
                </p>
            </ContentBox>

            <p>
                ロピタルの定理は非常に便利ですが、「万能」ではありません。
                定理の仮定が満たされない場合に誤って適用すると、誤った結論に至ることがあります。
                以下の典型例は、この点についての重要な教訓を与えてくれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">適用できない場合</h2>

            <ContentBox type="remark" title="極限が存在しない場合にロピタルの定理を誤適用する典型例">
                <p className="leading-relaxed">
                    ロピタルの定理は「<InlineMath math="\lim \frac{f'(x)}{g'(x)}" /> が<strong>存在するならば</strong>」が前提です。
                    この極限が存在しない場合に定理を使うと誤った結論に至ります。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>典型例：</strong>
                </p>
                <BlockMath math="\lim_{x \to \infty} \frac{x + \sin x}{x}" />
                <p className="leading-relaxed">
                    この極限は直接計算すれば
                </p>
                <BlockMath math="\lim_{x \to \infty} \frac{x + \sin x}{x} = \lim_{x \to \infty} \left(1 + \frac{\sin x}{x}\right) = 1 + 0 = 1" />
                <p className="leading-relaxed">
                    しかし、ロピタルの定理を（形式的に）適用すると
                </p>
                <BlockMath math="\frac{f'(x)}{g'(x)} = \frac{1 + \cos x}{1} = 1 + \cos x" />
                <p className="leading-relaxed">
                    となりますが、<InlineMath math="1 + \cos x" /> は <InlineMath math="x \to \infty" /> で極限を持ちません（<InlineMath math="0" /> と <InlineMath math="2" /> の間で振動）。
                    したがって、ロピタルの定理の仮定4が満たされず、定理は適用できません。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>教訓：</strong>ロピタルの定理は「<InlineMath math="\frac{f'}{g'}" /> の極限が存在する」ことを<strong>先に確認</strong>してから使う必要があります。
                    また、ロピタルの定理に頼る前に直接計算が可能でないか検討することが推奨されます。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ロピタルの定理は <InlineMath math="\frac{0}{0}" /> 型・<InlineMath math="\frac{\infty}{\infty}" /> 型の不定形に対し、分子・分母を微分して極限を求める手法である。</li>
                    <li><InlineMath math="0 \cdot \infty" />, <InlineMath math="\infty - \infty" />, <InlineMath math="1^\infty" /> 型などの不定形も、適切な変形により帰着できる。</li>
                    <li><InlineMath math="\frac{f'(x)}{g'(x)}" /> の極限が存在しない場合は定理を適用できない。直接計算が可能か先に検討すべきである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
