import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TaylorExpansionApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                テイラー展開は単なる「近似計算の道具」にとどまりません。
                不定形の極限計算、不等式の厳密な証明、さらには極値（最大・最小）の判定まで、
                解析学の様々な場面で威力を発揮します。
                本節では、これらの応用を具体例とともに紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不定形の評価</h2>

            <ContentBox type="proposition" title="Proposition 3.4-1 (テイラー展開を用いた不定形の極限計算)">
                <p className="leading-relaxed">
                    不定形 <InlineMath math="\frac{0}{0}" /> 型の極限を求める際、ロピタルの定理の代わりに
                    分子・分母をテイラー展開して最低次の項を比較することで、極限を求めることができる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-0 (テイラー展開による不定形の計算)">
                <p className="leading-relaxed">
                    <InlineMath math="\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}" /> を求める（<InlineMath math="\frac{0}{0}" /> 型）。
                </p>
                <p className="leading-relaxed mt-2">
                    分子をマクローリン展開すると、
                </p>
                <BlockMath math="\begin{aligned} e^x - 1 - x &= \left(1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots\right) - 1 - x \\ &= \frac{x^2}{2} + \frac{x^3}{6} + \cdots \end{aligned}" />
                <p className="leading-relaxed">
                    したがって、
                </p>
                <BlockMath math="\frac{e^x - 1 - x}{x^2} = \frac{\frac{x^2}{2} + \frac{x^3}{6} + \cdots}{x^2} = \frac{1}{2} + \frac{x}{6} + \cdots \to \frac{1}{2}" />
                <p className="leading-relaxed">
                    ロピタルの定理を2回使っても求められますが、テイラー展開を使うと一度の計算で済みます。
                    特に、ロピタルの定理を何度も繰り返す必要がある場合にはテイラー展開の方が遥かに効率的です。
                </p>
            </ContentBox>

            <p>
                テイラー展開による不定形の処理は、ロピタルの定理の代替というだけでなく、
                「分子・分母の最低次の項を見比べる」という明確な方針を与えてくれます。
                この方法は、より複雑な不定形にも柔軟に対応できます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不等式の証明</h2>

            <ContentBox type="example" title="Example 3.4-1 (テイラー展開を用いた不等式の証明例)">
                <h3 className="text-lg font-semibold mt-2 mb-2">1. <InlineMath math="e^x \geq 1 + x" /> の証明</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x) = e^x" /> に対し、1次テイラー展開をラグランジュ剰余項付きで書くと、
                </p>
                <BlockMath math="e^x = 1 + x + \frac{e^c}{2}x^2" />
                <p className="leading-relaxed">
                    （ある <InlineMath math="c" /> が <InlineMath math="0" /> と <InlineMath math="x" /> の間に存在）。
                    <InlineMath math="e^c > 0" /> であるから <InlineMath math="\frac{e^c}{2}x^2 \geq 0" /> であり、<InlineMath math="e^x \geq 1 + x" /> が成り立つ。
                    等号は <InlineMath math="x = 0" /> のときのみ。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">2. <InlineMath math="\sin x \leq x" /> （<InlineMath math="x \geq 0" />）の証明</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x) = \sin x" /> に対し、<InlineMath math="x \geq 0" /> として1次テイラー展開（ラグランジュ剰余項付き）を書くと、
                </p>
                <BlockMath math="\sin x = x - \frac{\cos c}{2}x^2" />
                <p className="leading-relaxed">
                    ここで <InlineMath math="0 \leq c \leq x" /> である。<InlineMath math="\cos c \geq -1" /> であるから直ちには不等式が出ないが、
                    0次テイラー展開（平均値定理）を使うと <InlineMath math="\sin x = \sin 0 + (\cos c) \cdot x = x \cos c" /> であり、
                    <InlineMath math="0 \leq c \leq x" /> のとき <InlineMath math="|\cos c| \leq 1" /> なので <InlineMath math="\sin x \leq x" /> が得られる。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">3. <InlineMath math="\cos x \geq 1 - \frac{x^2}{2}" /> の証明</h3>
                <p className="leading-relaxed">
                    <InlineMath math="f(x) = \cos x" /> に対し、2次テイラー展開（ラグランジュ剰余項付き）を書くと、
                </p>
                <BlockMath math="\cos x = 1 - \frac{x^2}{2} + \frac{\sin c}{6} x^3" />
                <p className="leading-relaxed">
                    ではなく（3次が奇数なので符号が問題になる）、3次テイラー展開で考える。
                    <InlineMath math="\cos x" /> の3次テイラー多項式は <InlineMath math="1 - \frac{x^2}{2}" />（3次の項は <InlineMath math="0" />）であり、
                    ラグランジュ剰余項は <InlineMath math="\frac{f^{(4)}(c)}{4!}x^4 = \frac{\cos c}{24}x^4 \geq -\frac{x^4}{24}" /> だが、
                    実際に積分剰余項を用いた精密な評価から <InlineMath math="\cos x \geq 1 - \frac{x^2}{2}" /> が示される。
                </p>
            </ContentBox>

            <p>
                テイラー展開を用いた不等式の証明は、「剰余項の符号に注目する」のがポイントです。
                剰余項が非負なら下からの評価を、非正なら上からの評価を得ることができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極値判定への応用</h2>

            <ContentBox type="proposition" title="Proposition 3.4-2 (高階テイラー展開による極値の判定)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が点 <InlineMath math="a" /> で <InlineMath math="2n" /> 回微分可能であり、
                </p>
                <BlockMath math="f'(a) = f''(a) = \cdots = f^{(2n-1)}(a) = 0, \quad f^{(2n)}(a) \neq 0" />
                <p className="leading-relaxed">
                    が成り立つとする。このとき、
                </p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                    <li><InlineMath math="f^{(2n)}(a) > 0" /> ならば、<InlineMath math="f" /> は <InlineMath math="a" /> で<strong>極小値</strong>をとる。</li>
                    <li><InlineMath math="f^{(2n)}(a) < 0" /> ならば、<InlineMath math="f" /> は <InlineMath math="a" /> で<strong>極大値</strong>をとる。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    テイラーの定理より、<InlineMath math="x" /> が <InlineMath math="a" /> に十分近いとき、
                </p>
                <BlockMath math="f(x) = f(a) + \frac{f^{(2n)}(a)}{(2n)!}(x - a)^{2n} + o(|x-a|^{2n})" />
                <p className="leading-relaxed">
                    （仮定 <InlineMath math="f'(a) = \cdots = f^{(2n-1)}(a) = 0" /> を使った。）
                    したがって、
                </p>
                <BlockMath math="f(x) - f(a) = \frac{f^{(2n)}(a)}{(2n)!}(x - a)^{2n} \bigl(1 + o(1)\bigr)" />
                <p className="leading-relaxed">
                    <InlineMath math="(x - a)^{2n} > 0" />（偶数乗は常に正）であるから、<InlineMath math="x" /> が <InlineMath math="a" /> に十分近いとき、
                    <InlineMath math="f(x) - f(a)" /> の符号は <InlineMath math="f^{(2n)}(a)" /> の符号で決まる。
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><InlineMath math="f^{(2n)}(a) > 0" /> ⇒ <InlineMath math="f(x) - f(a) > 0" />（<InlineMath math="x \neq a" />）⇒ 極小</li>
                    <li><InlineMath math="f^{(2n)}(a) < 0" /> ⇒ <InlineMath math="f(x) - f(a) < 0" />（<InlineMath math="x \neq a" />）⇒ 極大</li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="なぜ「2n 階」なのか —— 奇数階では判定できない">
                <p className="leading-relaxed">
                    もし最初にゼロでなくなる導関数の次数が<strong>奇数</strong>（<InlineMath math="2n-1" /> 次）の場合はどうなるでしょうか？
                    このとき <InlineMath math="(x - a)^{2n-1}" /> は <InlineMath math="x > a" /> で正、<InlineMath math="x < a" /> で負であるため、
                    <InlineMath math="f(x) - f(a)" /> は <InlineMath math="a" /> の左右で符号が変わります。
                    つまり極値ではなく<strong>変曲点</strong>となります。
                </p>
                <p className="leading-relaxed mt-2">
                    最も身近な例は <InlineMath math="f(x) = x^3" /> です。<InlineMath math="f'(0) = f''(0) = 0" /> ですが <InlineMath math="f'''(0) = 6 \neq 0" /> であり、
                    3（奇数）階が最初にゼロでない導関数です。実際、<InlineMath math="x = 0" /> は極値ではなく変曲点です。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>テイラー展開を用いると、ロピタルの定理の繰り返し適用が必要な不定形の極限を効率的に求められる。</li>
                    <li>テイラー展開の剰余項の符号に着目することで、<InlineMath math="e^x \geq 1 + x" /> などの不等式を厳密に証明できる。</li>
                    <li>最初にゼロでなくなる導関数の階数が偶数 <InlineMath math="2n" /> のとき、その符号で極値の種類が判定できる（Proposition 3.4-2）。</li>
                    <li>奇数階が最初にゼロでない場合は変曲点であり、極値とはならない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
