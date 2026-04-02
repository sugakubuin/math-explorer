import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CongruenceDefinitionAndArithmetic() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「時計の針」をイメージしてみましょう。10時の3時間後は13時ですが、通常私たちはそれを「1時」と呼びます。
                このように、ある数（法）で割った「余り」の世界で数学を考える手法が<strong>合同式 (Congruence)</strong> です。
                合同式は、巨大な数の計算や暗号理論、カレンダーの計算など、驚くほど幅広い分野で活躍します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">合同の定義</h2>

            <p>
                2つの整数の差が特定の整数（法）で割り切れるとき、それらはその法において「同じ」であると見なします。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (合同)">
                <p>
                    整数 <InlineMath math="a, b" /> と正の整数 <InlineMath math="m" /> に対し、
                    <InlineMath math="m \mid (a - b)" />
                    が成り立つとき、 <InlineMath math="a" /> は <InlineMath math="b" /> と <InlineMath math="m" /> を<strong>法 (modulus)</strong> として<strong>合同</strong>であるといい、
                    <BlockMath math="a \equiv b \pmod{m}" />
                    と書く。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-1 (合同の具体例)">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="17 \equiv 5 \pmod{6}" /> である。なぜなら <InlineMath math="17 - 5 = 12" /> は 6 で割り切れるから。</li>
                    <li><InlineMath math="-3 \equiv 9 \pmod{6}" /> である。なぜなら <InlineMath math="-3 - 9 = -12" /> は 6 で割り切れるから。</li>
                    <li><InlineMath math="a \equiv 0 \pmod{m}" /> は、 <InlineMath math="a" /> が <InlineMath math="m" /> の倍数であることを意味する。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="同値関係としての性質">
                <p>
                    合同関係 <InlineMath math="\equiv" /> は、次の「同値関係」の 3 条件をすべて満たします。
                    <br />1. <strong>反射律</strong>： <InlineMath math="a \equiv a \pmod{m}" />
                    <br />2. <strong>対称律</strong>： <InlineMath math="a \equiv b \pmod{m} \Rightarrow b \equiv a \pmod{m}" />
                    <br />3. <strong>推移律</strong>： <InlineMath math="a \equiv b, \ b \equiv c \pmod{m} \Rightarrow a \equiv c \pmod{m}" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">合同式の計算規則</h2>

            <p>
                合同式の最大の特徴は、和・差・積に関しては通常の等式と全く同じように扱える点にあります。
            </p>

            <ContentBox type="theorem" title="Theorem 4.1-1 (合同式の基本演算)">
                <p>
                    <InlineMath math="a \equiv a' \pmod{m}" /> かつ <InlineMath math="b \equiv b' \pmod{m}" /> のとき、次が成り立つ。
                    <BlockMath math="\begin{aligned} 1.& \quad a \pm b \equiv a' \pm b' \pmod{m} \\ 2.& \quad ab \equiv a'b' \pmod{m} \\ 3.& \quad a^n \equiv (a')^n \pmod{m} \quad (n \geq 0) \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮定より <InlineMath math="a = a' + km, \ b = b' + lm" /> と書ける整数 <InlineMath math="k, l" /> が存在する。
                </p>
                <p>
                    <strong>1. 和の場合：</strong>
                    <BlockMath math="\begin{aligned} (a + b) - (a' + b') &= (a - a') + (b - b') \\ &= km + lm = (k + l)m \end{aligned}" />
                    よって、 <InlineMath math="a + b \equiv a' + b' \pmod{m}" /> である。
                </p>
                <p>
                    <strong>2. 積の場合：</strong>
                    <BlockMath math="\begin{aligned} ab - a'b' &= a(b - b') + b'(a - a') \\ &= a(lm) + b'(km) \\ &= (al + b'k)m \end{aligned}" />
                    よって、 <InlineMath math="ab \equiv a'b' \pmod{m}" /> である。
                </p>
                <p>
                    <strong>3. べき乗の場合：</strong>
                    数学的帰納法を用いる。 <InlineMath math="n = 1" /> のときは仮定より成り立つ。
                    <InlineMath math="n = k" /> で成り立つ、すなわち <InlineMath math="a^k \equiv (a')^k \pmod{m}" /> と仮定すると、積の性質（2.）より、
                    <BlockMath math="\begin{aligned} a^k \cdot a &\equiv (a')^k \cdot a' \pmod{m} \\ &\implies \quad a^{k+1} \equiv (a')^{k+1} \pmod{m} \end{aligned}" />
                    となり、 <InlineMath math="n = k+1" /> でも成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-2 (大きなべき乗の計算)">
                <p>
                    <InlineMath math="13^{10}" /> を 7 で割った余りを求める。
                    <BlockMath math="\begin{aligned} 13 &\equiv -1 \pmod{7} \\ 13^{10} &\equiv (-1)^{10} \pmod{7} \\ &\equiv 1 \pmod{7} \end{aligned}" />
                    このように、数そのものを計算する代わりに、合同な「扱いやすい数」に置き換えてから計算できるのが合同式の強みです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">割り算の注意点</h2>

            <p>
                和・差・積とは異なり、合同式において「両辺を同じ数で割る」ときには細心の注意が必要です。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1 (合同式の割り算)">
                <p>
                    <InlineMath math="ac \equiv bc \pmod{m}" /> かつ <InlineMath math="\gcd(c, m) = d" /> のとき、
                    <BlockMath math="a \equiv b \pmod{m/d}" />
                    が成り立つ。特に、 <InlineMath math="c" /> と <InlineMath math="m" /> が互いに素（ <InlineMath math="d = 1" /> ）ならば、単純に両辺を割り切って <InlineMath math="a \equiv b \pmod{m}" /> とできる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="ac \equiv bc \pmod{m}" /> より、ある整数 <InlineMath math="k" /> を用いて <InlineMath math="c(a - b) = km" /> と書ける。
                    両辺を <InlineMath math="d = \gcd(c, m)" /> で割ると、
                    <BlockMath math="\frac{c}{d}(a - b) = k \cdot \frac{m}{d}" />
                    となる。ここで <InlineMath math="\gcd(c/d, m/d) = 1" /> であるから（Proposition 1.2-1）、ユークリッドの補題（Proposition 2.4-1）より、 <InlineMath math="m/d" /> は <InlineMath math="a - b" /> を割り切らなければならない。
                    したがって、 <InlineMath math="a \equiv b \pmod{m/d}" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-3 (割り算の失敗例)">
                <p>
                    <InlineMath math="6 \equiv 18 \pmod{12}" /> を考える。
                    両辺を 6 でそのまま割ると <InlineMath math="1 \equiv 3 \pmod{12}" /> となり、これは誤りである（法の世界が矛盾する）。
                    Proposition 4.1-1 に従えば、 <InlineMath math="\gcd(6, 12) = 6" /> なので、
                    <BlockMath math="1 \equiv 3 \pmod{12/6} \quad \Rightarrow \quad 1 \equiv 3 \pmod{2}" />
                    となり、これは正しい。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>合同の定義</strong>： 2 数の差が法 <InlineMath math="m" /> で割り切れること。</li>
                    <li><strong>演算</strong>： 加減乗算およびべき乗は、通常の等式と同じ感覚で計算可能。</li>
                    <li><strong>割り算のルール</strong>： 両辺を割る数は、法 <InlineMath math="m" /> と「互いに素」でなければならない。そうでない場合は法の側も変化する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
