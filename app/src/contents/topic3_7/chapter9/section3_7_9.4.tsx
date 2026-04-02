import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BerryEsseenTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                中心極限定理は、「極限として」正規分布に近づくことを教えてくれますが、実用上は「有限の <InlineMath math="n" /> でどれくらい正確なのか」が重要です。
                本章の締めくくりとして、収束の速度を定量的に評価する「ベリー・エセーンの定理」を紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベリー・エセーンの定理</h2>

            <p className="leading-relaxed">
                この定理は、中心極限定理における「累計分布関数の差」の最大値に、明確な上界を与えます。
            </p>

            <ContentBox type="theorem" title="Theorem 9.4-1 (ベリー・エセーンの定理)">
                <p>
                    <InlineMath math="\{X_n\}" /> を i.i.d. とし、<InlineMath math="E[X_1] = \mu, \text{Var}(X_1) = \sigma^2" /> とする。
                    さらに 3 次の絶対モーメント <InlineMath math="\rho = E[|X_1 - \mu|^3]" /> が有限であるとする。
                    このとき、標準化変数 <InlineMath math="Z_n" /> と標準正規分布の分布関数 <InlineMath math="\Phi" /> の差について次が成り立つ：
                    <BlockMath math="\sup_{x \in \mathbb{R}} |P(Z_n \leq x) - \Phi(x)| \leq \frac{C \rho}{\sigma^3 \sqrt{n}}" />
                    ここで <InlineMath math="C" /> は普遍定数であり、現在 <InlineMath math="C \approx 0.4748" /> という上界が知られている。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概要)">
                <p>
                    詳細な証明には高度な解析的手法が必要なため、ここでは特性関数を用いた証明のスケッチを示す。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <b>エセーンの不等式</b>：
                        累積分布関数の差 <InlineMath math="F(x) - G(x)" /> の最大値は、それらの特性関数の差 <InlineMath math="\varphi_F(t) - \varphi_G(t)" /> の積分によって上から抑えられる。
                        <BlockMath math="|F(x) - G(x)| \leq \frac{1}{\pi} \int_{-T}^T \left| \frac{\varphi_F(t) - \varphi_G(t)}{t} \right| dt + \frac{C'}{T}" />
                    </li>
                    <li>
                        <b>特性関数の 3 次展開</b>：
                        §9.2 の証明をさらに進め、<InlineMath math="\rho < \infty" /> の仮定を用いて特性関数を 3 次の項まで精度良く近似する。
                        <BlockMath math="\log \varphi_{Z_n}(t) = -\frac{t^2}{2} + \frac{O(\rho t^3)}{\sigma^3 \sqrt{n}}" />
                    </li>
                    <li>
                        <b>誤差の評価</b>：
                        被積分関数 <InlineMath math="(\varphi_{Z_n}(t) - e^{-t^2/2})/t" /> を評価すると、支配的な項が <InlineMath math="\frac{\rho t^2}{\sigma^3 \sqrt{n}} e^{-t^2/2}" /> となる。
                    </li>
                    <li>
                        <b>積分の実行</b>：
                        積分範囲 <InlineMath math="T" /> を適切に選び（通常 <InlineMath math="T \propto \sqrt{n}" />）、計算を実行することで、全体の誤差が <InlineMath math="1/\sqrt{n}" /> に比例することが示される。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理の最大のポイントは、収束の速さが「<InlineMath math="1/\sqrt{n}" />」のオーダーであると明言している点です。
                精度を <InlineMath math="10" /> 倍にするには、サンプル数 <InlineMath math="n" /> を <InlineMath math="100" /> 倍にしなければならないという、モンテカルロ法とも共通する限界がここに現れています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">何が収束を遅らせるのか？</h2>

            <p className="leading-relaxed">
                定理の右辺に注目すると、分子の <InlineMath math="\rho" />（3 次モーメント）が重要であることがわかります。
            </p>

            <ContentBox type="remark" title="3 次モーメントと歪度">
                <p>
                    3 次モーメントは分布の「歪み（歪度）」に関連しています。
                    分布が左右非対称で、片側に長い「裾」を持っている場合、<InlineMath math="\rho" /> が大きくなり、正規分布への収束が遅くなります。
                    逆に、元の分布が左右対称であれば近似は比較的早く良くなります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 9.4-1 (ベルヌーイ分布の収束速度)">
                <p>
                    <InlineMath math="p=1/2" /> のベルヌーイ分布 <InlineMath math="B(1, 1/2)" /> の場合、
                    <InlineMath math="\mu=1/2, \sigma=1/2" />、<InlineMath math="\rho = E[|X-1/2|^3] = 1/8" /> である。
                    これらを定理に代入すると、誤差の上界は約 <InlineMath math="0.47 / \sqrt{n}" /> となる。
                    <InlineMath math="n=100" /> の場合、最大誤差は約 <InlineMath math="0.047" /> と評価され、正規近似が実用的であることがわかります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.4 および第 9 章のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ベリー・エセーンの定理は、中心極限定理の収束の精度を定量的に保証する。</li>
                    <li>収束速度は <InlineMath math="O(1/\sqrt{n})" /> であり、分布が歪んでいるほど近似の質は悪くなる。</li>
                    <li>Chapter 9 を通じて、特性関数という強力な道具が、複雑な独立和の振る舞い（CLT）を鮮やかに描き出すことを見てきた。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
