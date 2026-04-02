import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfUniformContinuity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 4 では、「各点における」関数の連続性について深く掘り下げました。
                そこでの連続性の定義（点連続）は、ある一点 <InlineMath math="a" /> を固定した上で「<InlineMath math="a" /> に近づけば、関数値も <InlineMath math="f(a)" /> に近づく」という局所的な性質でした。
                本章で扱う<strong>一様連続性</strong>（uniform continuity）は、この連続性の概念を「区間（定義域）全体で均等に」成り立つように強めた大域的な性質です。
                この「均等さ」が、関数列の一様収束性やリーマン積分の理論において決定的な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様連続の定義</h2>

            <p>
                まずは点連続の定義を振り返り、それと比較する形で一様連続性を定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (一様連続)">
                <p>
                    区間 <InlineMath math="I" /> 上で定義された関数 <InlineMath math="f" /> が <InlineMath math="I" /> 上で<strong>一様連続</strong>（uniformly continuous）であるとは、
                    任意の正の実数 <InlineMath math="\varepsilon > 0" /> に対して、ある正の実数 <InlineMath math="\delta > 0" /> が存在し、
                    <InlineMath math="I" /> 内の<strong>任意の</strong>2点 <InlineMath math="x, y" /> について、
                </p>
                <BlockMath math="|x - y| < \delta \implies |f(x) - f(y)| < \varepsilon" />
                <p>
                    が成り立つことである。
                </p>
            </ContentBox>

            <p>
                この定義と、Chapter 4 で学んだ「<InlineMath math="I" /> 上で連続（各点で連続）」の定義を注意深く比較してみましょう。
            </p>

            <ContentBox type="remark" title="点連続との比較（量化子の順序）">
                <p>
                    2つの定義の論理式（量化子の順序）を比較すると、一様連続性がどれほど強い条件であるかが明確になります。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        <strong><InlineMath math="I" /> 上で各点連続</strong>：
                        <BlockMath math="\begin{aligned} \forall x \in I, \forall \varepsilon > 0, \exists \delta > 0 \text{ s.t. } &\forall y \in I, \, |x - y| < \delta \\ &\implies |f(x) - f(y)| < \varepsilon \end{aligned}" />
                    </li>
                    <li>
                        <strong><InlineMath math="I" /> 上で一様連続</strong>：
                        <BlockMath math="\begin{aligned} \forall \varepsilon > 0, \exists \delta > 0 \text{ s.t. } &\forall x, y \in I, \, |x - y| < \delta \\ &\implies |f(x) - f(y)| < \varepsilon \end{aligned}" />
                    </li>
                </ul>
                <p className="mt-4">
                    <strong>違いの核心：<InlineMath math="\delta" /> の選び方</strong><br />
                    「各点連続」の場合、<InlineMath math="\delta" /> は <InlineMath math="\varepsilon" /> だけでなく、<strong>注目している点 <InlineMath math="x" /> にも依存して</strong>決めてよい（<InlineMath math="\delta = \delta(\varepsilon, x)" />）というルールです。傾きが急な点では <InlineMath math="\delta" /> を非常に小さく取り、緩やかな点では大きく取るといった「各個撃破」が許されます。<br />
                    一方「一様連続」の場合、まず <InlineMath math="\delta" /> を <InlineMath math="\varepsilon" /> のみによって1つ決定し（<InlineMath math="\delta = \delta(\varepsilon)" />）、その<strong>共通の <InlineMath math="\delta" /> が区間内のあらゆる点 <InlineMath math="x, y" /> のペアに対して通用しなければなりません</strong>。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    一様連続ならば各点連続であることは定義から明らかですが、逆は必ずしも成り立ちません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様連続でない例</h2>

            <p>
                「連続だけれど一様連続ではない」関数を見ることで、「区間全体で通用する共通の $\delta$ が取れない」という状態がどういうことなのか理解しましょう。
            </p>

            <ContentBox type="example" title="Example 5.1-1 (一様連続でない関数の例)">
                <p>
                    関数 <InlineMath math="f(x) = x^2" /> は実数全体 <InlineMath math="\mathbb{R}" /> 上で連続であるが、一様連続ではない。
                </p>
                <div className="mt-4 font-semibold">証明の概略:</div>
                <p className="mt-2">
                    <InlineMath math="f(x) = x^2" /> が一様連続であると仮定して矛盾を導く（背理法）。
                    一様連続であれば、例えば <InlineMath math="\varepsilon = 1" /> に対して、ある共通の <InlineMath math="\delta > 0" /> が存在して、<InlineMath math="|x - y| < \delta" /> を満たす任意の <InlineMath math="x, y \in \mathbb{R}" /> について <InlineMath math="|x^2 - y^2| < 1" /> となるはずである。
                </p>
                <p className="mt-2">
                    ここで、<InlineMath math="x, y" /> を次のように選ぶ。<br />
                    <InlineMath math="x = n + \frac{\delta}{2}" /> ,
                    <InlineMath math="y = n" />
                    （<InlineMath math="n" /> は任意の自然数）
                </p>
                <p className="mt-2">
                    このとき、<InlineMath math="|x - y| = \frac{\delta}{2} < \delta" /> は満たされているが、関数の差を計算すると
                </p>
                <BlockMath math="\begin{aligned}|f(x) - f(y)| &= \left| \left(n + \frac{\delta}{2}\right)^2 - n^2 \right| \\ &= \left| 2n\frac{\delta}{2} + \frac{\delta^2}{4} \right| = n\delta + \frac{\delta^2}{4}\end{aligned}" />
                <p>
                    となる。<InlineMath math="\delta > 0" /> は固定された数であるため、<InlineMath math="n" /> を十分に大きく取れば（アルキメデスの原理）、<InlineMath math="n\delta + \frac{\delta^2}{4}" /> はいくらでも大きくなり、定めた <InlineMath math="\varepsilon = 1" /> を超えてしまう（<InlineMath math="|f(x) - f(y)| \geq 1" />）。
                </p>
                <p className="mt-2">
                    これは、<InlineMath math="x^2" /> の傾き（微分係数 <InlineMath math="2x" />）が <InlineMath math="x \to \infty" /> とともに際限なく大きくなるため、<InlineMath math="x" /> が大きい領域では、わずかな <InlineMath math="x" /> の変化（<InlineMath math="\frac{\delta}{2}" />）でも <InlineMath math="f(x)" /> が爆発的に変化してしまい、全域で通用するような「安全な幅 <InlineMath math="\delta" />」が取れないことを意味している。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                もう一つの有名な例として、開区間 <InlineMath math="(0, 1)" /> 上の関数 <InlineMath math="f(x) = \frac{1}{x}" /> があります。これも <InlineMath math="x \to 0" /> 付近で傾きが際限なく急になるため、区間全体で共通の <InlineMath math="\delta" /> を取ることができず、一様連続になりません。
            </p>

            <p>
                このように、定義域が有界でなかったり（<InlineMath math="\mathbb{R}" /> の例）、関数の端の方で発散したりする（<InlineMath math="(0, 1)" /> の例）場合、連続であっても一様連続性は崩れやすくなります。
                では、どのような条件が揃えば「連続関数は自動的に一様連続である」と言えるのでしょうか。その答えが次節の「ハイネ・カントールの定理」です。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>一様連続性とは、ある <InlineMath math="\varepsilon" /> に対して、区間内の「どこであっても」共通で通用する <InlineMath math="\delta" /> が取れるという性質である。</li>
                    <li>量化子 <InlineMath math="\forall x" /> と <InlineMath math="\exists \delta" /> の順序が点連続とは異なり、「<InlineMath math="\delta" /> が <InlineMath math="x" /> に依存しない（場所によらない）」ことが核心である。</li>
                    <li><InlineMath math="y = x^2" />（全体）や <InlineMath math="y = 1/x" />（<InlineMath math="(0, 1)" /> 上）のように、傾きが際限なく大きくなる領域を持つ関数は、連続であっても一様連続ではない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
