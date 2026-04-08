import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ApplicationsToIntegralEquationsAndBoundaryValueProblems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章の最後に、コンパクト作用素の理論が実際の数学や物理の問題でどのように使われるか、具体的な方程式を通して確認します。ここでの主役は、微積分と関数解析を結ぶ「積分作用素」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分方程式への定式化</h2>

            <p>
                微分方程式を積分して形を整えると、関数解析の道具が直接使える「積分方程式」という形になります。
            </p>

            <ContentBox type="example" title="Example 9.5-1 (ヴォルテラ積分方程式)">
                <p>
                    未知の関数 <InlineMath math="u(x)" /> についての次のような積分方程式を考えます。
                </p>
                <BlockMath math="u(x) - \int_0^x K(x,t)u(t)\,dt = f(x)" />
                <p>
                    これは積分区間の上限が変数 <InlineMath math="x" /> となっているのが特徴で、<b>ヴォルテラ（Volterra）積分方程式</b>とよばれます（初期値問題から自然に現れる形です）。<br />
                    作用素を <InlineMath math="K_v u(x) = \int_0^x K(x,t)u(t)\,dt" /> とおくと、方程式は <InlineMath math="(I - K_v)u = f" /> と書けます。
                </p>
                <p>
                    この作用素 <InlineMath math="K_v" /> は非常に良い性質を持っており、作用素の積（反復積分）<InlineMath math="K_v^n" /> を計算していくと、積分の領域がどんどん小さくなり、核の大きさがどうであっても <InlineMath math="n" /> を大きくすると作用素ノルムが <InlineMath math="0" /> に収束します（<InlineMath math="\|K_v^n\| \to 0" />）。<br />
                    このため、前節で少し触れた「ノイマン級数」が常に収束し、
                </p>
                <BlockMath math="u = (I - K_v)^{-1}f = f + K_v f + K_v^2 f + K_v^3 f + \dots" />
                <p>
                    という級数によってただ1つの解が構成的に得られます（逐次近似法）。
                </p>
            </ContentBox>

            <p>
                一方で、積分区間が固定された場合には、直交性に基づく強力なスペクトル成分ごとの展開が可能となります。
            </p>

            <ContentBox type="example" title="Example 9.5-2 (フレドホルム積分方程式の固有関数展開)">
                <p>
                    積分区間が固定された<b>フレドホルム積分方程式</b>
                </p>
                <BlockMath math="u(x) - \lambda \int_a^b K(x,t)u(t)\,dt = f(x)" />
                <p>
                    を考えます。ここで積分作用素の核が対称、すなわち実数値関数で <InlineMath math="K(x,t) = K(t,x)" /> であるとします。
                </p>
                <p>
                    Example 8.1-2 で見たように、このとき積分作用素 <InlineMath math="T" /> は自己共役作用素（<InlineMath math="T^* = T" />）となります。また、Example 9.1-2 より <InlineMath math="T" /> はコンパクト作用素でもあります。<br />
                    したがって、コンパクト自己共役作用素に対するスペクトル定理（Theorem 9.3-2）が適用でき、正規直交基底をなす固有関数 <InlineMath math="e_1(x), e_2(x), \dots" /> と実数の固有値 <InlineMath math="\mu_1, \mu_2, \dots" /> が存在して
                </p>
                <BlockMath math="T e_n = \mu_n e_n" />
                <p>
                    と対角化されます。<br />
                    方程式は <InlineMath math="(I - \lambda T)u = f" /> となり、両辺を正規直交基底で展開（フーリエ級数展開）して各係数を解くことで、
                </p>
                <BlockMath math="u(x) = f(x) + \lambda \sum_{n=1}^\infty \frac{\mu_n}{1 - \lambda \mu_n} \langle f, e_n \rangle e_n(x)" />
                <p>
                    という明示的な解の公式が得られます（ただし <InlineMath math="\lambda \mu_n \neq 1" /> がすべての <InlineMath math="n" /> で成り立つ、すなわち <InlineMath math="\lambda^{-1}" /> が固有値でないことが条件です）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">境界値問題への応用</h2>

            <p>
                微分作用素は非有界作用素であるため扱いにくいですが、「微分作用素の逆作用素」を考えると、それがコンパクトな積分作用素になり、関数解析の強力な武器が使えるようになります。
            </p>

            <ContentBox type="example" title="Example 9.5-3 (シュトゥルム-リウヴィル問題のグリーン関数)">
                <p>
                    次のような2階の常微分方程式の境界値問題（シュトゥルム-リウヴィル問題）を考えます。
                </p>
                <BlockMath math="-u''(x) + q(x)u(x) = \lambda u(x), \quad u(0) = u(1) = 0" />
                <p>
                    （これは弦の振動のモードや、1次元の量子力学におけるシュレーディンガー方程式の形をしています。）
                </p>
                <p>
                    微分作用素 <InlineMath math="L = -d^2/dx^2 + q(x)" /> を直接扱う代わりに、この方程式 <InlineMath math="Lu = f" /> の解を与える逆作用素 <InlineMath math="L^{-1}" /> （グリーン作用素とよばれます）を構成します。グリーン関数 <InlineMath math="G(x,t)" /> を用いて
                </p>
                <BlockMath math="u(x) = L^{-1}f(x) = \int_0^1 G(x,t)f(t)\,dt" />
                <p>
                    と積分で書けます。
                </p>
                <p>
                    このグリーン作用素 <InlineMath math="L^{-1}" /> はコンパクトな自己共役作用素になります。すると、もとの微分方程式の固有値問題 <InlineMath math="Lu = \lambda u" /> は、逆作用素に関する
                </p>
                <BlockMath math="L^{-1} u = \frac{1}{\lambda} u" />
                <p>
                    という固有値問題に完全に置き換わります。<br />
                    <InlineMath math="L^{-1}" /> がコンパクト自己共役であるため、固有値 <InlineMath math="1/\lambda_n" /> は有限個か <InlineMath math="0" /> に収束する離散的な値しか取りません。結果として、もとの微分方程式の固有値 <InlineMath math="\lambda_n" /> は離散的に分布し無限大に発散する（<InlineMath math="\lambda_n \to \infty" />）ことが、関数解析の抽象論から一発で証明できるのです。
                </p>
            </ContentBox>

            <p>
                この方法は、微分方程式の数学的基礎を関数解析の土台の上に強固に据えるものであり、後の章で深めていく主題でもあります。
            </p>

            <ContentBox type="remark" title="本章の理論の真価">
                <p>
                    微分方程式に関数解析を応用する際の王道パターンは、「微分作用素（非有界・扱いにくい）」の逆である「積分作用素（コンパクト・扱いやすい）」を考え、それにコンパクト作用素のスペクトル定理やリース-フレドホルム理論を適用して元の問題の性質を引き出す、という非常にエレガントな方法です。<br />
                    ここでの1次元の境界値問題の議論は、多次元の楕円型偏微分方程式に対しても本質的にそのまま拡張され、ソボレフ空間（5-2 偏微分方程式）と組み合わせることで現代的な偏微分方程式論の確固たる基礎となります。
                </p>
            </ContentBox>

            <p>
                積分方程式をはじめとする実際の問題に対して、コンパクト作用素の理論がどう生かされるかを振り返って、本章を締めくくります。
            </p>

            <ContentBox type="note" title="§9.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>微分方程式や初期値問題は、積分方程式の形に書き直すことで、ノルム空間上の作用素方程式として見通しよく扱える。</li>
                    <li>コンパクト自己共役な積分作用素に対しては、スペクトル定理による固有関数展開が解法として強力に機能する。</li>
                    <li>微分作用素の逆作用素（グリーン作用素）がコンパクトになることを用いると、微分方程式の固有値が離散的に定まることなど、解の定性的な性質が代数的な抽象論から鮮やかに導き出される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
