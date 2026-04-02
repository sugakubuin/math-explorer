import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CauchyMeanValueTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ラグランジュの平均値定理は <InlineMath math="f" /> 一つの関数に対する主張でしたが、
                <strong>コーシーの平均値定理</strong>は2つの関数 <InlineMath math="f" /> と <InlineMath math="g" /> に対する一般化であり、
                次節のロピタルの定理の証明において決定的な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシーの平均値定理</h2>

            <ContentBox type="theorem" title="Theorem 2.3-1 (コーシーの平均値定理)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f, g" /> が閉区間 <InlineMath math="[a, b]" /> 上で連続であり、開区間 <InlineMath math="(a, b)" /> 上で微分可能であり、
                    さらに <InlineMath math="g'(x) \neq 0" /> が <InlineMath math="(a, b)" /> 上で成り立つとする。
                    このとき、ある <InlineMath math="c \in (a, b)" /> が存在して、
                </p>
                <BlockMath math="\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}" />
                <p className="leading-relaxed">
                    が成り立つ。（ここで <InlineMath math="g(b) \neq g(a)" /> はロルの定理と <InlineMath math="g'(x) \neq 0" /> から保証される。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    まず <InlineMath math="g(b) \neq g(a)" /> を確認する。もし <InlineMath math="g(a) = g(b)" /> ならば、ロルの定理より <InlineMath math="g'(c) = 0" /> となる <InlineMath math="c \in (a, b)" /> が存在し、仮定 <InlineMath math="g'(x) \neq 0" /> に矛盾する。
                </p>
                <p className="leading-relaxed mt-2">
                    ラグランジュの平均値定理の証明と同様に、補助関数を導入する。
                </p>
                <BlockMath math="h(x) = f(x) - \frac{f(b) - f(a)}{g(b) - g(a)} \cdot g(x)" />
                <p className="leading-relaxed">
                    この <InlineMath math="h" /> について確認する。
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><InlineMath math="h" /> は <InlineMath math="[a, b]" /> 上連続（<InlineMath math="f" /> と <InlineMath math="g" /> の線形結合）</li>
                    <li><InlineMath math="h" /> は <InlineMath math="(a, b)" /> 上微分可能</li>
                    <li>
                        <InlineMath math="h(a)" /> と <InlineMath math="h(b)" /> を計算する：
                        <BlockMath math="h(a) = f(a) - \frac{f(b) - f(a)}{g(b) - g(a)} \cdot g(a)" />
                        <BlockMath math="h(b) = f(b) - \frac{f(b) - f(a)}{g(b) - g(a)} \cdot g(b)" />
                        <p className="leading-relaxed">
                            <InlineMath math="h(b) - h(a)" /> を計算すると、
                        </p>
                        <BlockMath math="\begin{aligned} h(b) - h(a) &= (f(b) - f(a)) \\ &\quad - \frac{f(b) - f(a)}{g(b) - g(a)} (g(b) - g(a)) \\ &= 0 \end{aligned}" />
                    </li>
                </ul>
                <p className="leading-relaxed mt-2">
                    よって <InlineMath math="h(a) = h(b)" /> であり、ロルの定理の仮定を満たす。
                    したがって、ある <InlineMath math="c \in (a, b)" /> が存在して <InlineMath math="h'(c) = 0" /> となる。
                </p>
                <BlockMath math="h'(c) = f'(c) - \frac{f(b) - f(a)}{g(b) - g(a)} \cdot g'(c) = 0" />
                <p className="leading-relaxed">
                    <InlineMath math="g'(c) \neq 0" /> であるから、整理すると
                </p>
                <BlockMath math="\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}" />
                <p className="leading-relaxed">
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                コーシーの平均値定理の証明も、ラグランジュの場合と同様に「補助関数を作ってロルの定理に帰着」という共通のパターンに従っています。
                実際、コーシーの定理はラグランジュの定理を一般化したものであり、その関係を確認しておくことは重要です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラグランジュの定理との関係</h2>

            <ContentBox type="remark" title="コーシーの定理はラグランジュの定理の一般化">
                <p className="leading-relaxed">
                    コーシーの平均値定理において <InlineMath math="g(x) = x" /> とおくと、<InlineMath math="g'(x) = 1" />, <InlineMath math="g(b) - g(a) = b - a" /> であるから、
                </p>
                <BlockMath math="\frac{f'(c)}{1} = \frac{f(b) - f(a)}{b - a}" />
                <p className="leading-relaxed">
                    となり、ラグランジュの平均値定理が復元されます。
                    したがって、コーシーの定理はラグランジュの定理を <strong>2関数の商の形に拡張した一般化</strong>であるといえます。
                </p>
                <p className="leading-relaxed mt-2">
                    幾何学的には、<InlineMath math="t \mapsto (g(t), f(t))" /> で定まるパラメータ曲線を考えたとき、
                    端点を結ぶ割線の傾き <InlineMath math="\frac{f(b)-f(a)}{g(b)-g(a)}" /> と等しい接線の傾き <InlineMath math="\frac{f'(c)}{g'(c)}" /> を持つ点 <InlineMath math="t = c" /> が
                    区間内に存在する、という主張です。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>コーシーの平均値定理は2つの関数に対する平均値定理であり、補助関数とロルの定理で証明される。</li>
                    <li><InlineMath math="g(x) = x" /> とおけばラグランジュの平均値定理が得られる（一般化の関係）。</li>
                    <li>パラメータ曲線の接線として幾何学的に解釈でき、次節のロピタルの定理の証明に不可欠である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
