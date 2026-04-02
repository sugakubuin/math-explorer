import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LebesgueIntegrable() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでは非負値関数のみを扱ってきましたが、いよいよ正負両方の値を取る一般の可測関数に対して積分を定義します。
                この拡張は、関数を「正の部分」と「負の部分」という2つの非負値関数の差に分解することで行われます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルベーグ可積分 (Lebesgue Integrable)</h2>

            <p>
                一般の関数 <InlineMath math="f" /> の積分を定義するため、値を正負に切り分けます。
            </p>

            <ContentBox type="definition" title="Definition 3.5-1 (正部分と負部分)">
                <p>
                    実数値可測関数 <InlineMath math="f" /> に対し、以下の非負値可測関数を定義する：
                </p>
                <BlockMath math="\begin{aligned} f^+(x) &= \max\{f(x), 0\} \quad (\text{正部分}) \\ f^-(x) &= \max\{-f(x), 0\} \quad (\text{負部分}) \end{aligned}" />
                <p className="mt-4">
                    このとき、<InlineMath math="f = f^+ - f^-" /> および <InlineMath math="|f| = f^+ + f^-" /> が常に成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.5-2 (ルベーグ可積分と積分)">
                <p>
                    関数 <InlineMath math="f" /> が<b>ルベーグ可積分である</b> (Lebesgue integrable) とは、
                    <BlockMath math="\int_X f^+ \, d\mu < \infty \quad \text{かつ} \quad \int_X f^- \, d\mu < \infty" />
                    が成り立つことをいう。このとき、<InlineMath math="f" /> の積分を次のように定義する：
                    <BlockMath math="\int_X f \, d\mu = \int_X f^+ \, d\mu - \int_X f^- \, d\mu" />
                </p>
                <p className="mt-4">
                    また、<InlineMath math="f" /> が可積分であることと、<InlineMath math="\int_X |f| \, d\mu < \infty" /> であることは同値である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.5-1 (可積分性の判定)">
                <p>
                    <InlineMath math="X = [1, \infty)" /> 上のルベーグ測度を考える。関数 <InlineMath math="f(x) = \frac{\sin x}{x^2}" /> を考える。
                    このとき、
                    <BlockMath math="|f(x)| \leq \frac{1}{x^2}" />
                    であり、リーマン積分の知識から <InlineMath math="\int_1^\infty \frac{1}{x^2} \, dx = 1 < \infty" /> であることがわかっている。
                    したがって、ルベーグ積分においても <InlineMath math="\int_1^\infty |f| \, d\lambda < \infty" /> となり、<InlineMath math="f" /> は可積分です。
                </p>
            </ContentBox>

            <h2 className="text-2xl font-bold mt-8 mb-6">L¹ 空間の導入</h2>
            <p>
                可積分関数全体を集合として捉え、そこにある種の「距離」や「長さ（ノルム）」を導入することで、解析学のさらなる舞台（関数空間）が整います。
            </p>

            <ContentBox type="definition" title="Definition 3.5-3 (L¹ 空間)">
                <p>
                    測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> 上のルベーグ可積分関数全体の集合を <InlineMath math="\mathcal{L}^1(X, \mu)" /> と書く。
                    ほとんど至る所 (a.e.) で等しい関数を同一視して得られる商空間を <b><InlineMath math="L^1(X, \mu)" /> 空間</b>と呼ぶ。
                    この空間には、次のようなノルムが定義される：
                    <BlockMath math="\|f\|_1 = \int_X |f| \, d\mu" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.5-2 (L¹ 空間の元)">
                <p>
                    <InlineMath math="X = (0, 1]" /> 上のルベーグ測度を考える。関数 <InlineMath math="f(x) = x^{-1/2}" /> を考える。
                    この関数のノルムを計算すると：
                    <BlockMath math="\|f\|_1 = \int_0^1 x^{-1/2} \, dx = [2x^{1/2}]_0^1 = 2 < \infty" />
                    よって、この関数は <InlineMath math="L^1(0, 1]" /> の元です。
                    一方、<InlineMath math="g(x) = x^{-1}" /> の場合は <InlineMath math="\|g\|_1 = \infty" /> となり、<InlineMath math="L^1" /> の元ではありません。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="同一視の重要性">
                <p>
                    もし a.e. で同一視しなければ、<InlineMath math="\|f\|_1 = 0" /> であっても <InlineMath math="f" /> が完全なゼロ関数とは限らない（零集合上で値を持っていてもよい）ため、数学的な「ノルム」の条件を満たしません。
                    実解析や確率論では、この同一視を行った「関数を点として扱う空間」が議論を支える強力な道具となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>実数値関数は、<b>正部分</b>と<b>負部分</b>の差として捉える。</li>
                    <li>絶対値の積分が有限であるとき、その関数を<b>ルベーグ可積分</b>という。</li>
                    <li>可積分関数全体を a.e. で同一視した空間を <b><InlineMath math="L^1" /> 空間</b>という。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
