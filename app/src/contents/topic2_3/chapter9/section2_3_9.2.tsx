import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RiemannIntegrability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、「網目を細かくするほど、下和は（増加して）真の面積に下から近づき、上和は（減少して）真の面積に上から近づく」ことを見ました。
                ならば、考えうる<strong>すべてのあらゆる分割</strong>に対する下和の「最大値（上限）」と上和の「最小値（下限）」は、それぞれ面積の「下からの最善の近似」「上からの最善の近似」を意味するはずです。これらが一致するとき、はじめて「積分（面積）」が唯一つに確定します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン可積分であることの定義</h2>

            <ContentBox type="definition" title="Definition 9.2-1 (上積分と下積分)">
                <p>
                    有界関数 <InlineMath math="f" /> について、あらゆる可能な分割 <InlineMath math="\Delta" /> を考えたときの、下和の上限と上和の下限をそれぞれ次のように定義する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <strong>下積分 (Lower integral):</strong> <InlineMath math="\underline{\int_a^b} f(x) dx = \sup_{\Delta} L(f, \Delta)" />
                    </li>
                    <li>
                        <strong>上積分 (Upper integral):</strong> <InlineMath math="\overline{\int_a^b} f(x) dx = \inf_{\Delta} U(f, \Delta)" />
                    </li>
                </ul>
            </ContentBox>

            <p>
                定理 9.1-1 により、任意の下和は任意の上和を超えないことが分かっているので、必ず <strong>下積分 <InlineMath math="\leq" /> 上積分</strong> となります。
            </p>

            <ContentBox type="definition" title="Definition 9.2-2 (リーマン可積分)">
                <p>
                    上積分と下積分が一致するとき、すなわち
                </p>
                <BlockMath math="\underline{\int_a^b} f(x) dx = \overline{\int_a^b} f(x) dx" />
                <p>
                    が成り立つとき、関数 <InlineMath math="f(x)" /> は区間 <InlineMath math="[a, b]" /> 上で<strong>リーマン可積分</strong>（Riemann integrable）である（あるいは単に「積分可能」である）という。
                </p>
                <p className="mt-4">
                    この共通の値を <InlineMath math="f" /> の（リーマン）定積分と呼び、<InlineMath math="\int_a^b f(x) dx" /> と表す。
                </p>
            </ContentBox>

            <p>
                もし関数が「無茶苦茶に振動しすぎていて、どんなに分割を細かくしても、各小区間の中で跳ね回り続ける」ような場合、上和の最小値と下和の最大値の間にどうしても埋まらない「隙間」が残ります。そのような関数は「リーマン積分不可能」と判定されます（例: ディリクレ関数）。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可積分性の必要十分条件</h2>

            <p>
                定義は美しいですが、毎回あらゆる上限・下限を求めるのは非現実的です。そこで、極限の言葉（<InlineMath math="\varepsilon" />）で使いやすく翻訳したものが次のダルブーによる判定条件です。
            </p>

            <ContentBox type="theorem" title="Theorem 9.2-1 (可積分の必要十分条件)">
                <p>
                    有界関数 <InlineMath math="f" /> が区間 <InlineMath math="[a, b]" /> でリーマン可積分であるための必要十分条件は、任意の <InlineMath math="\varepsilon > 0" /> に対して、ある分割 <InlineMath math="\Delta" /> が存在して
                </p>
                <BlockMath math="U(f, \Delta) - L(f, \Delta) < \varepsilon" />
                <p>
                    を満たすことである。（すなわち、上和と下和で作る長方形の「面積の差（隙間）」をいくらでも小さくできる分割が存在すること）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>（十分性：条件 ⇒ 可積分性の証明）</strong><br />
                    任意の <InlineMath math="\varepsilon > 0" /> に対し条件を満たす <InlineMath math="\Delta" /> があるとする。<br />
                    上積分と下積分の定義から、<InlineMath math="L(f, \Delta) \leq \underline{\int_a^b} f \leq \overline{\int_a^b} f \leq U(f, \Delta)" /> が常に成り立つ。したがって、
                </p>
                <BlockMath math="0 \leq \overline{\int_a^b} f - \underline{\int_a^b} f \leq U(f, \Delta) - L(f, \Delta) < \varepsilon" />
                <p>
                    左端と右端の差は任意の <InlineMath math="\varepsilon > 0" /> より小さいため、<InlineMath math="\overline{\int} f - \underline{\int} f = 0" /> でなければならない。すなわち上積分と下積分は一致し、可積分である。
                </p>
                <p className="mt-4">
                    <strong>（必要性：可積分性 ⇒ 条件の証明）</strong><br />
                    可積分であるとし、その共通の積分値を <InlineMath math="I" /> とする。任意の <InlineMath math="\varepsilon > 0" /> をとる。<br />
                    上限・下限の性質（それにいくらでも近づく要素が集合内に存在する）により、ある分割 <InlineMath math="\Delta_1, \Delta_2" /> が存在して以下を満たす。
                </p>
                <BlockMath math="U(f, \Delta_1) < I + \frac{\varepsilon}{2}, \quad L(f, \Delta_2) > I - \frac{\varepsilon}{2}" />
                <p className="mt-4">
                    ここで新しい分割 <InlineMath math="\Delta = \Delta_1 \cup \Delta_2" /> （共通の細分）をとる。定理 9.1-1 の単調性から、上和は細分で小さく（または同じ）、下和は大きくなるので、
                </p>
                <BlockMath math="U(f, \Delta) \leq U(f, \Delta_1) < I + \frac{\varepsilon}{2}" />
                <BlockMath math="L(f, \Delta) \geq L(f, \Delta_2) > I - \frac{\varepsilon}{2}" />
                <p>
                    この2式の差をとれば、
                </p>
                <BlockMath math="U(f, \Delta) - L(f, \Delta) < \left(I + \frac{\varepsilon}{2}\right) - \left(I - \frac{\varepsilon}{2}\right) = \varepsilon" />
                <p>
                    となり、求めるべき分割 <InlineMath math="\Delta" /> が存在することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続関数は積分可能である</h2>

            <p>
                実用の観点からは「結局、初等関数のような普通の関数は積分できるのか」が問題になります。解析学の重要な成果の一つとして、「連続関数は絶対に積分できる」という保証が与えられています。
            </p>

            <ContentBox type="theorem" title="Theorem 9.2-2 (連続関数の可積分性)">
                <p>
                    閉区間 <InlineMath math="[a, b]" /> 上の関数 <InlineMath math="f(x)" /> が<strong>連続</strong>であるならば、<InlineMath math="f" /> は <InlineMath math="[a, b]" /> 上でリーマン可積分である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (一様連続性の応用)">
                <p>
                    Chapter 5 で学んだ「ハイネ・カントールの定理（定理 5.2-1）」を用いる。閉区間上の連続関数は<strong>一様連続</strong>である。<br />
                    すなわち、任意の <InlineMath math="\varepsilon > 0" /> に対し、ある <InlineMath math="\delta > 0" /> が存在して、区間内の任意の <InlineMath math="x, y" /> について
                </p>
                <BlockMath math="|x - y| < \delta \implies |f(x) - f(y)| < \frac{\varepsilon}{b - a}" />
                <p>
                    とすることができる。
                </p>
                <p className="mt-4">
                    ここで、区間 <InlineMath math="[a, b]" /> を幅がすべて <InlineMath math="\delta" /> 未満となるような細かい分割 <InlineMath math="\Delta" /> に分ける（最大の幅 <InlineMath math="|\Delta| < \delta" />）。<br />
                    すると、各小区間 <InlineMath math="I_i" /> においても、幅が <InlineMath math="\delta" /> 未満であるため、関数値の最大差（上限と下限の差）は
                </p>
                <BlockMath math="M_i - m_i < \frac{\varepsilon}{b - a}" />
                <p>
                    に抑えられる（最大値・最小値定理により <InlineMath math="M_i, m_i" /> は実際に <InlineMath math="I_i" /> 内の点で達成されるため）。
                </p>
                <p className="mt-4">
                    この分割 <InlineMath math="\Delta" /> について、上和と下和の差を計算する。
                </p>
                <BlockMath math="\begin{aligned} U(f, \Delta) - L(f, \Delta) &= \sum_{i=1}^n M_i \Delta x_i - \sum_{i=1}^n m_i \Delta x_i \\ &= \sum_{i=1}^n (M_i - m_i) \Delta x_i \\ &< \sum_{i=1}^n \left( \frac{\varepsilon}{b - a} \right) \Delta x_i \\ &= \frac{\varepsilon}{b - a} \sum_{i=1}^n \Delta x_i \\ &= \frac{\varepsilon}{b - a} \times (b - a) = \varepsilon \end{aligned}" />
                <p className="mt-4">
                    定理 9.2-1 の可積分の十分条件が満たされたため、<InlineMath math="f" /> はリーマン可積分であることが厳密に証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>リーマン積分の存在は、「下からの近似極限（下積分）」と「上からの近似極限（上積分）」が一致することとして定義される。</li>
                    <li>可積分であるための必要十分条件は、上和と下和の差をいくらでも小さく抑える分割が存在することである。</li>
                    <li>閉区間上の連続関数は（一様連続性を持ち、変動幅をいくらでも小さくできるため）必ずリーマン可積分である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
