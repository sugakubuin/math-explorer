import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LinearDiophantineEquations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ベズーの等式を用いることで、最も基本的な不定方程式である「1次不定方程式」の整数解を体系的に扱うことが可能になります。
                ある方程式がいつ解を持ち、その解が全体としてどのような集合をなすのかを学びましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">解の存在条件</h2>

            <p>
                すべての 1 次不定方程式が整数解を持つわけではありません。まず、どのようなときに解が存在するのかを明らかにします。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-1 (1次不定方程式の可解性)">
                <p>
                    整数 <InlineMath math="a, b, c" /> に対する方程式
                    <BlockMath math="ax + by = c" />
                    が整数解 <InlineMath math="(x, y)" /> を持つための必要十分条件は、
                    <BlockMath math="\gcd(a, b) \mid c" />
                    である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="d = \gcd(a, b)" /> とおく。
                    <br /><strong>1. 必要性：</strong>
                    <InlineMath math="(x, y)" /> が解であるとすると、 <InlineMath math="d \mid a" /> かつ <InlineMath math="d \mid b" /> であるから、整除の線形性より <InlineMath math="d \mid (ax + by)" /> である。
                    よって <InlineMath math="d \mid c" /> が成り立つ。
                    <br /><strong>2. 十分性：</strong>
                    <InlineMath math="d \mid c" /> と仮定する。このとき、ある整数 <InlineMath math="k" /> を用いて <InlineMath math="c = dk" /> と書ける。
                    ベズーの等式より、 <InlineMath math="au + bv = d" /> を満たす整数 <InlineMath math="(u, v)" /> が存在する。
                    両辺を <InlineMath math="k" /> 倍すると、
                    <BlockMath math="a(uk) + b(vk) = dk = c" />
                    となる。したがって、 <InlineMath math="(x, y) = (uk, vk)" /> は一つの整数解である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-1 (解の存在判定)">
                <p>
                    ・ <InlineMath math="6x + 10y = 15" />： <InlineMath math="\gcd(6, 10) = 2" /> であるが、 <InlineMath math="2 \nmid 15" /> なので、整数解は存在しない。
                    <br />・ <InlineMath math="6x + 10y = 8" />： <InlineMath math="2 \mid 8" /> なので、整数解が存在する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">解全体の記述</h2>

            <p>
                解が一つ見つかれば、そこからすべての解を書き出すことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-2 (解全体の構造)">
                <p>
                    <InlineMath math="ax + by = c" /> が一つの解（特殊解） <InlineMath math="(x_0, y_0)" /> を持つとき、
                    すべての整数解は次の形で表される：
                    <BlockMath math="\begin{cases} x = x_0 + \dfrac{b}{d} t \\ y = y_0 - \dfrac{a}{d} t \end{cases} \quad (t \in \mathbb{Z})" />
                    ただし、 <InlineMath math="d = \gcd(a, b)" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="ax + by = c" /> と <InlineMath math="ax_0 + by_0 = c" /> の辺々を引くと、
                    <BlockMath math="a(x - x_0) + b(y - y_0) = 0" />
                    <InlineMath math="a' = a/d, \ b' = b/d" /> とおくと（ <InlineMath math="\gcd(a', b') = 1" /> ）、
                    <BlockMath math="a'(x - x_0) = b'(y_0 - y)" />
                    が成り立つ。 <InlineMath math="a'" /> は右辺 <InlineMath math="b'(y_0 - y)" /> を割り切り、 <InlineMath math="\gcd(a', b') = 1" /> なので、
                    ユークリッドの補題（§2.4 参照）より <InlineMath math="a' \mid (y_0 - y)" /> である。
                    よって <InlineMath math="y_0 - y = a't" /> となる整数 <InlineMath math="t" /> が存在し、これを元の式に代入すると <InlineMath math="x - x_0 = b't" /> となる。
                    これを整理すれば定理の形を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-2 (一般解の算出)">
                <p>
                    <InlineMath math="21x + 35y = 14" /> を解く。
                    <br />1. <InlineMath math="\gcd(21, 35) = 7 \mid 14" /> なので解が存在する。
                    <br />2. 両辺を 7 で割ると <InlineMath math="3x + 5y = 2" />。
                    <br />3. 特殊解を一つ探すと、 <InlineMath math="3(4) + 5(-2) = 12 - 10 = 2" /> より <InlineMath math="(x_0, y_0) = (4, -2)" /> が見つかる。
                    <br />4. 一般解は <InlineMath math="t \in \mathbb{Z}" /> を用いて：
                    <BlockMath math="\begin{aligned} x &= 4 + 5t \\ y &= -2 - 3t \end{aligned}" />
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>可解性</strong>： 定数項 <InlineMath math="c" /> が係数の最大公約数で割り切れることが条件。</li>
                    <li><strong>一般解</strong>： 「特殊解」を、方程式の傾きによって打ち消し合う方向にスライドさせることで得られる。</li>
                    <li><strong>単純化</strong>： 計算の際はあらかじめ全体を最大公約数で割っておくと見通しが良くなる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
