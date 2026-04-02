import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GCDandLCM() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複数の整数が共通して持っている約数や、共通の倍数について考えます。
                これらは、分数の通分や整数の構造解析において極めて中心的な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最大公約数</h2>

            <ContentBox type="definition" title="Definition 1.2-1 (最大公約数)">
                <p>
                    2つの整数 <InlineMath math="a, b" /> （少なくとも一方は 0 でない）について、
                    <InlineMath math="a" /> と <InlineMath math="b" /> の両方を割り切る正の整数のうち最大のものを、
                    <InlineMath math="a" /> と <InlineMath math="b" /> の<strong>最大公約数 (Greatest Common Divisor)</strong> と呼び、
                    <InlineMath math="\gcd(a, b)" /> または単に <InlineMath math="(a, b)" /> と書く。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-1 (gcd の算出)">
                <p>
                    <InlineMath math="a = 48, \ b = 36" /> の場合を考える。
                    <br />・ 48 の正の約数：1, 2, 3, 4, 6, 8, 12, 16, 24, 48
                    <br />・ 36 の正の約数：1, 2, 3, 4, 6, 9, 12, 18, 36
                    <br />共通する約数（公約数）は 1, 2, 3, 4, 6, 12 であり、その最大値は 12 である。
                    <br />したがって、 <InlineMath math="\gcd(48, 36) = 12" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最小公倍数</h2>

            <ContentBox type="definition" title="Definition 1.2-2 (最小公倍数)">
                <p>
                    2つの整数 <InlineMath math="a, b" /> について、
                    <InlineMath math="a" /> と <InlineMath math="b" /> の両方で割り切られる正の整数のうち最小のものを、
                    <InlineMath math="a" /> と <InlineMath math="b" /> の<strong>最小公倍数 (Least Common Multiple)</strong> と呼び、
                    <InlineMath math="\text{lcm}(a, b)" /> または <InlineMath math="[a, b]" /> と書く。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 1.2-1 (gcd と lcm の関係)">
                <p>
                    正の整数 <InlineMath math="a, b" /> について、次の等式が成り立つ：
                    <BlockMath math="\gcd(a, b) \cdot \text{lcm}(a, b) = ab" />
                    これは、2数の積を最大公約数で割ることで、最小公倍数が得られることを示している。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="a" /> と <InlineMath math="b" /> を素因数分解したものを次のように表す：
                    <BlockMath math="a = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}, \quad b = p_1^{f_1} p_2^{f_2} \cdots p_k^{f_k}" />
                    ここで <InlineMath math="p_i" /> は互いに異なる素数、指数 <InlineMath math="e_i, f_i" /> は 0 以上の整数である。
                    このとき、最大公約数と最小公倍数は次のように書ける：
                    <BlockMath math="\begin{aligned} \gcd(a, b) &= p_1^{\min(e_1, f_1)} \cdots p_k^{\min(e_k, f_k)} \\ \text{lcm}(a, b) &= p_1^{\max(e_1, f_1)} \cdots p_k^{\max(e_k, f_k)} \end{aligned}" />
                    それらの積を計算すると、
                    <BlockMath math="\begin{aligned} \gcd(a, b) \cdot \text{lcm}(a, b) &= \prod_{i=1}^k p_i^{\min(e_i, f_i)} \cdot \prod_{i=1}^k p_i^{\max(e_i, f_i)} \\ &= \prod_{i=1}^k p_i^{\min(e_i, f_i) + \max(e_i, f_i)} \end{aligned}" />
                    任意の数 <InlineMath math="x, y" /> に対して <InlineMath math="\min(x, y) + \max(x, y) = x + y" /> が成り立つので、
                    <BlockMath math="\begin{aligned} \gcd(a, b) \cdot \text{lcm}(a, b) &= \prod_{i=1}^k p_i^{e_i + f_i} \\ &= \left(\prod_{i=1}^k p_i^{e_i}\right) \left(\prod_{i=1}^k p_i^{f_i}\right) \\ &= ab \end{aligned}" />
                    となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2 (等式の確認)">
                <p>
                    <InlineMath math="a = 12, \ b = 18" /> のとき、
                    <br />・ <InlineMath math="\gcd(12, 18) = 6" />
                    <br />・ <InlineMath math="\text{lcm}(12, 18) = 36" />
                    <br />積を確認すると： <InlineMath math="6 \times 36 = 216" />、一方 <InlineMath math="12 \times 18 = 216" />。
                    確かに等式が成り立っている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多変数への拡張</h2>

            <p>
                3つ以上の整数に対しても、同様に最大公約数を定義できます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-3 (多変数の gcd)">
                <p>
                    <InlineMath math="n" /> 個の整数 <InlineMath math="a_1, \dots, a_n" /> の最大公約数 <InlineMath math="\gcd(a_1, \dots, a_n)" /> は、
                    すべての数に共通する約数のうち最大のものである。
                    これは次のように帰納的に計算することもできる：
                    <BlockMath math="\gcd(a_1, a_2, a_3) = \gcd(\gcd(a_1, a_2), a_3)" />
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>公約数と最大公約数</strong>： 複数の数に共通する「素の部品」のような存在。</li>
                    <li><strong>双対性</strong>： 最大公約数（極小化の視点）と最小公倍数（拡大の視点）は、積を通じて互いに補完し合っている。</li>
                    <li><strong>計算の効率化</strong>： 大きな数の gcd を力任せの約数並べ立てではなく、手順化（アルゴリズム化）して求める方法は次節で扱う。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
