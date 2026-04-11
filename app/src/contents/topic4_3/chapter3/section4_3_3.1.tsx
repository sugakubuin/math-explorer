import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeierstrassPFunctionDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章では、複素トーラス上の有理型関数として楕円関数を定義し、その基本的な性質（リウヴィルの定理系列など）を調べました。本章では、楕円関数の最も基本的で重要な具体例である<b>ワイエルシュトラスの <InlineMath math="\wp" /> 関数（Weierstrass P-function）</b>を導入します。まずはその定義と、無限級数としての収束性について議論します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="\wp" /> 関数の定義</h2>

            <p>
                楕円関数を具体的に構成するための一つの自然なアイデアは、格子点 <InlineMath math="\omega \in \Lambda" /> に極を持つ関数の和をとることです。例えば <InlineMath math="\sum_{\omega \in \Lambda} \frac{1}{z-\omega}" /> や <InlineMath math="\sum_{\omega \in \Lambda} \frac{1}{(z-\omega)^2}" /> を考えたいところですが、これらの級数は絶対収束しません。そこで、各項から適切な「補正項」を引くことで収束を保証するのがワイエルシュトラスの発見です。
            </p>

            <ContentBox type="definition" title={<span>Definition 3.1-1 (ワイエルシュトラスの <InlineMath math="\wp" /> 関数)</span>}>
                <p>
                    格子 <InlineMath math="\Lambda" /> に対して、<b>ワイエルシュトラスの <InlineMath math="\wp" /> 関数</b>（Weierstrass P-function）を以下の級数で定義する。
                </p>
                <BlockMath math="\wp(z) = \frac{1}{z^2} + \sum_{\omega \in \Lambda \setminus \{0\}} \left( \frac{1}{(z-\omega)^2} - \frac{1}{\omega^2} \right)" />
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-0 (具体例)">
                <p>
                    この関数は、原点 <InlineMath math="z=0" /> およびすべての格子点 <InlineMath math="\omega \in \Lambda" /> に <InlineMath math="2" /> 位の極を持ちます。
                    項 <InlineMath math="\frac{1}{(z-\omega)^2}" /> が極を作る役割を果たし、<InlineMath math="-\frac{1}{\omega^2}" /> は絶対収束させるための補正項です。
                </p>
            </ContentBox>

            <p>
                この補正項がなぜ級数の収束を保証するのか、そしてどこで収束するのかを正確に述べるのが次の命題です。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-1">
                <p>
                    <InlineMath math="\wp" /> 関数の定義級数は、格子点 <InlineMath math="\Lambda" /> の点を除く <InlineMath math="\mathbb{C}" /> の任意のコンパクト集合上で絶対かつ一様に収束する。したがって、<InlineMath math="\wp(z)" /> は <InlineMath math="\mathbb{C}" /> 上の有理型関数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    コンパクト集合 <InlineMath math="K \subset \mathbb{C} \setminus \Lambda" /> を任意に取る。<InlineMath math="K" /> は有界なので、ある <InlineMath math="R > 0" /> が存在して <InlineMath math="K \subset \{z \in \mathbb{C} \mid |z| \le R\}" /> となる。
                    格子点 <InlineMath math="\omega" /> の大きさが十分に大きい場合（<InlineMath math="|\omega| > 2R" />）、項の絶対値を評価する。
                </p>
                <BlockMath math="\begin{aligned} \left| \frac{1}{(z-\omega)^2} - \frac{1}{\omega^2} \right| &= \left| \frac{\omega^2 - (z-\omega)^2}{\omega^2(z-\omega)^2} \right| \\ &= \left| \frac{2z\omega - z^2}{\omega^2(z-\omega)^2} \right| \\ &= \frac{|z| |2\omega - z|}{|\omega|^2 |z-\omega|^2} \end{aligned}" />
                <p>
                    <InlineMath math="|z| \le R" /> および <InlineMath math="|\omega| > 2R" /> より、<InlineMath math="|z-\omega| \ge |\omega| - |z| > \frac{|\omega|}{2}" />、また <InlineMath math="|2\omega - z| \le 2|\omega| + |z| < \frac{5}{2}|\omega|" /> であるから、
                </p>
                <BlockMath math="\left| \frac{1}{(z-\omega)^2} - \frac{1}{\omega^2} \right| < \frac{R \cdot \frac{5}{2}|\omega|}{|\omega|^2 (\frac{|\omega|}{2})^2} = \frac{10 R}{|\omega|^3}" />
                <p>
                    格子点 <InlineMath math="\omega \in \Lambda" /> は二次元的に分布しているため、<InlineMath math="|\omega| \le N" /> となる格子点の数は <InlineMath math="O(N^2)" /> に比例する。したがって、級数
                </p>
                <BlockMath math="\sum_{\omega \in \Lambda \setminus \{0\}} \frac{1}{|\omega|^3}" />
                <p>
                    は収束する（積分判定法などで <InlineMath math="\int_1^\infty \frac{r dr}{r^3} < \infty" /> と比較）。ワイエルシュトラスのM判定法により、級数は <InlineMath math="K" /> 上で絶対かつ一様に収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="補正項の必要性">
                <p>
                    もし補正項 <InlineMath math="-\frac{1}{\omega^2}" /> がなかったらどうなるでしょうか。その場合、各項の大きさは <InlineMath math="O(|\omega|^{-2})" /> となりますが、二次元格子上の和 <InlineMath math="\sum |\omega|^{-2}" /> は調和級数のように発散してしまいます（<InlineMath math="\int \frac{r dr}{r^2} = \infty" />）。補正項によって減衰のオーダーを <InlineMath math="O(|\omega|^{-3})" /> に下げることで、初めて級数が収束するのです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束の検証</h2>

            <p>
                前節の証明で用いた格子上での和の収束性について、具体的な格子を用いてさらに詳しく見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-1 (ガウス格子の場合)">
                <p>
                    <InlineMath math="\Lambda = \mathbb{Z} + i\mathbb{Z}" /> （ガウス格子）を考えます。このとき、原点を除く格子点での和
                </p>
                <BlockMath math="\sum_{(m,n) \
eq (0,0)} \frac{1}{(m^2 + n^2)^{3/2}}" />
                <p>
                    の収束を考えます。原点を中心とする半径 <InlineMath math="N" /> の円内にある格子点の数は約 <InlineMath math="\pi N^2" /> 個であり、半径 <InlineMath math="r" /> から <InlineMath math="r+dr" /> の間にはおよそ <InlineMath math="2\pi r dr" /> 個の格子点があります。積分で近似すると、
                </p>
                <BlockMath math="\int_1^\infty \frac{1}{r^3} (2\pi r) dr = 2\pi \int_1^\infty \frac{1}{r^2} dr = 2\pi < \infty"
                />
                <p>
                    となり、たしかに収束することがわかります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-2 (一般の指数 s の場合)">
                <p>
                    より一般に、和
                </p>
                <BlockMath math="\sum_{\omega \in \Lambda \setminus \{0\}} \frac{1}{|\omega|^s}" />
                <p>
                    は、<InlineMath math="s > 2" /> のときに絶対収束し、<InlineMath math="s \le 2" /> のときに発散します。<InlineMath math="s=2" /> のときが発散の境界（対数発散）であるため、<InlineMath math="\wp" /> 関数の定義において補正項なしの <InlineMath math="\sum \frac{1}{(z-\omega)^2}" /> が発散することが確認できます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ワイエルシュトラスの <InlineMath math="\wp" /> 関数は、格子点に <InlineMath math="2" /> 位の極を持つ有理型関数として級数で定義される。</li>
                    <li>絶対収束を保証するため、各項には <InlineMath math="-\frac{1}{\omega^2}" /> という補正項が不可欠である。</li>
                    <li>この級数は <InlineMath math="\mathbb{C} \setminus \Lambda" /> のコンパクト集合上で絶対かつ一様に収束する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
