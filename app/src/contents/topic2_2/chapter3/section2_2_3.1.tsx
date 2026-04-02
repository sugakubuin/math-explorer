import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TaylorTheoremProof() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分積分学Iでは、関数を多項式で近似する「テイラー展開」を計算の道具として使ってきました。
                しかし、「なぜ多項式で近似できるのか」「その近似はどの程度正確なのか」という問いに対し、
                Chapter 2 で学んだ平均値の定理群を用いることで厳密な証明を与えることができます。
                本節では、テイラーの定理をラグランジュ剰余項と積分剰余項の2つの形で証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">テイラー多項式と剰余項</h2>

            <ContentBox type="definition" title="Definition 3.1-1 (テイラー多項式・剰余項)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> の周りで <InlineMath math="n" /> 回微分可能であるとする。
                    <InlineMath math="f" /> の <InlineMath math="a" /> を中心とする <InlineMath math="n" /> 次<strong>テイラー多項式</strong>を
                </p>
                <BlockMath math="\begin{aligned} P_n(x) &= \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x - a)^k \\ &= f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \\ &\quad \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n \end{aligned}" />
                <p className="leading-relaxed">
                    と定義する。また、<strong>剰余項</strong>（remainder）を
                </p>
                <BlockMath math="R_n(x) = f(x) - P_n(x)" />
                <p className="leading-relaxed">
                    と定義する。すなわち <InlineMath math="f(x) = P_n(x) + R_n(x)" /> である。
                    テイラー多項式は <InlineMath math="f" /> と <InlineMath math="x = a" /> で「<InlineMath math="n" /> 階微分まで一致する」ように設計された多項式であり、
                    剰余項 <InlineMath math="R_n(x)" /> はその近似誤差を表す。
                </p>
            </ContentBox>

            <p>
                テイラー多項式が「<InlineMath math="n" /> 階微分まで一致する」というのは、<InlineMath math="P_n^{(k)}(a) = f^{(k)}(a)" /> (<InlineMath math="k = 0, 1, \dots, n" />) が成り立つことを意味します。
                しかし、本当に重要なのは「剰余項 <InlineMath math="R_n(x)" /> がどの程度小さいか」です。
                次の2つの定理が、この剰余項の具体的な表示を与えてくれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラグランジュ剰余項形式</h2>

            <ContentBox type="theorem" title="Theorem 3.1-1 (テイラーの定理：ラグランジュ剰余項)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, x]" />（または <InlineMath math="[x, a]" />）上で <InlineMath math="n" /> 回連続微分可能であり、
                    開区間 <InlineMath math="(a, x)" />（または <InlineMath math="(x, a)" />）上で <InlineMath math="n+1" /> 回微分可能であるとする。
                    このとき、<InlineMath math="a" /> と <InlineMath math="x" /> の間にある点 <InlineMath math="c" /> が存在して、
                </p>
                <BlockMath math="R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}" />
                <p className="leading-relaxed">
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    コーシーの平均値定理（Theorem 2.3-1）を繰り返し適用することで証明する。
                </p>
                <p className="leading-relaxed mt-2">
                    まず、<InlineMath math="R_n(x) = f(x) - P_n(x)" /> において、<InlineMath math="R_n(a) = 0" /> であることに注意する。
                    また、<InlineMath math="R_n'(a) = R_n''(a) = \cdots = R_n^{(n)}(a) = 0" /> も成り立つ
                    （<InlineMath math="P_n" /> は <InlineMath math="f" /> と <InlineMath math="n" /> 階微分まで一致するように作られているため）。
                </p>
                <p className="leading-relaxed mt-2">
                    補助関数 <InlineMath math="g(t) = (t - a)^{n+1}" /> を導入する。<InlineMath math="g(a) = g'(a) = \cdots = g^{(n)}(a) = 0" /> であり、
                    <InlineMath math="g^{(n+1)}(t) = (n+1)!" /> である。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="R_n" /> と <InlineMath math="g" /> にコーシーの平均値定理を適用する。
                    <InlineMath math="R_n(a) = g(a) = 0" /> であるから、ある <InlineMath math="c_1 \in (a, x)" /> が存在して、
                </p>
                <BlockMath math="\frac{R_n(x)}{g(x)} = \frac{R_n(x) - R_n(a)}{g(x) - g(a)} = \frac{R_n'(c_1)}{g'(c_1)}" />
                <p className="leading-relaxed">
                    同様に <InlineMath math="R_n'(a) = g'(a) = 0" /> であるから、ある <InlineMath math="c_2 \in (a, c_1)" /> が存在して、
                </p>
                <BlockMath math="\frac{R_n'(c_1)}{g'(c_1)} = \frac{R_n'(c_1) - R_n'(a)}{g'(c_1) - g'(a)} = \frac{R_n''(c_2)}{g''(c_2)}" />
                <p className="leading-relaxed">
                    これを <InlineMath math="n+1" /> 回繰り返すと、ある <InlineMath math="c = c_{n+1} \in (a, x)" /> が存在して、
                </p>
                <BlockMath math="\frac{R_n(x)}{g(x)} = \frac{R_n^{(n+1)}(c)}{g^{(n+1)}(c)} = \frac{f^{(n+1)}(c)}{(n+1)!}" />
                <p className="leading-relaxed">
                    したがって <InlineMath math="R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ラグランジュ剰余項は、平均値定理の「一般化版」ともいえる結果です。
                実際、<InlineMath math="n = 0" /> のとき、テイラーの定理は <InlineMath math="f(x) = f(a) + f'(c)(x - a)" /> となり、
                これはまさにラグランジュの平均値定理そのものです。
            </p>
            <p className="mt-2">
                ラグランジュ剰余項では「中間点 <InlineMath math="c" /> が <strong>分からない</strong>」のが弱点ですが、
                <InlineMath math="f^{(n+1)}" /> の上界さえ分かれば誤差評価が可能です（§3.2 で詳述）。
                一方、次の積分剰余項は <InlineMath math="c" /> に依存しない正確な表示を与えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分剰余項形式</h2>

            <ContentBox type="theorem" title="Theorem 3.1-2 (テイラーの定理：積分剰余項)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が区間 <InlineMath math="[a, x]" /> 上で <InlineMath math="n+1" /> 回連続微分可能であるとする。このとき、
                </p>
                <BlockMath math="R_n(x) = \frac{1}{n!} \int_a^x (x - t)^n f^{(n+1)}(t) \, dt" />
                <p className="leading-relaxed">
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    <InlineMath math="n" /> に関する数学的帰納法で証明する。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>基底（<InlineMath math="n = 0" />）：</strong>
                </p>
                <BlockMath math="R_0(x) = f(x) - f(a) = \int_a^x f'(t) \, dt" />
                <p className="leading-relaxed">
                    これは微分積分学の基本定理そのものであり、成立する。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>帰納段階（<InlineMath math="n-1 \to n" />）：</strong> <InlineMath math="n-1" /> のとき公式が成り立つと仮定する。すなわち、
                </p>
                <BlockMath math="R_{n-1}(x) = \frac{1}{(n-1)!} \int_a^x (x - t)^{n-1} f^{(n)}(t) \, dt" />
                <p className="leading-relaxed">
                    この積分を部分積分する。<InlineMath math="u = f^{(n)}(t)" />, <InlineMath math="dv = \frac{(x-t)^{n-1}}{(n-1)!} dt" /> とおくと、
                    <InlineMath math="du = f^{(n+1)}(t) dt" />, <InlineMath math="v = -\frac{(x-t)^n}{n!}" /> である。
                </p>
                <BlockMath math="\begin{aligned} R_{n-1}(x) &= \left[ -\frac{(x-t)^n}{n!} f^{(n)}(t) \right]_a^x \\ &\quad + \frac{1}{n!} \int_a^x (x-t)^n f^{(n+1)}(t) \, dt \end{aligned}" />
                <p className="leading-relaxed">
                    境界項を計算すると、<InlineMath math="t = x" /> で <InlineMath math="(x - x)^n = 0" /> なので消え、<InlineMath math="t = a" /> で、
                </p>
                <BlockMath math="\left[ -\frac{(x-t)^n}{n!} f^{(n)}(t) \right]_a^x = \frac{(x-a)^n}{n!} f^{(n)}(a)" />
                <p className="leading-relaxed">
                    したがって、
                </p>
                <BlockMath math="R_{n-1}(x) = \frac{f^{(n)}(a)}{n!}(x-a)^n + \frac{1}{n!} \int_a^x (x-t)^n f^{(n+1)}(t) \, dt" />
                <p className="leading-relaxed">
                    一方、<InlineMath math="R_{n-1}(x) = R_n(x) + \frac{f^{(n)}(a)}{n!}(x-a)^n" /> であるから（<InlineMath math="P_{n-1}" /> と <InlineMath math="P_n" /> の差が <InlineMath math="\frac{f^{(n)}(a)}{n!}(x-a)^n" />）、
                </p>
                <BlockMath math="R_n(x) = \frac{1}{n!} \int_a^x (x-t)^n f^{(n+1)}(t) \, dt" />
                <p className="leading-relaxed">
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="2つの剰余項形式はどう使い分けるか">
                <p className="leading-relaxed">
                    ラグランジュ剰余項と積分剰余項は、同じ「テイラーの定理」の異なる見方です。
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>ラグランジュ剰余項</strong>は、<InlineMath math="f^{(n+1)}" /> の値域さえ見積もれば誤差の上界が簡単に得られるため、
                        <strong>数値計算の誤差評価</strong>に便利です。「<InlineMath math="n" /> 次までで打ち切ったときの誤差は高々〜」という評価に向いています。</li>
                    <li><strong>積分剰余項</strong>は、中間点 <InlineMath math="c" /> に依存しない正確な表現であり、
                        <strong>級数の収束証明</strong>や<strong>精密な不等式の導出</strong>に向いています。</li>
                </ul>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="n" /> 次テイラー多項式 <InlineMath math="P_n(x)" /> は、<InlineMath math="f" /> と <InlineMath math="n" /> 階微分まで一致するように設計された多項式である。</li>
                    <li>ラグランジュ剰余項 <InlineMath math="R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}" /> はコーシーの平均値定理の繰り返し適用で証明される（Theorem 3.1-1）。</li>
                    <li>積分剰余項 <InlineMath math="R_n(x) = \frac{1}{n!}\int_a^x(x-t)^n f^{(n+1)}(t)dt" /> は帰納法と部分積分で証明される（Theorem 3.1-2）。</li>
                    <li><InlineMath math="n = 0" /> のときテイラーの定理はラグランジュの平均値定理に帰着する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
