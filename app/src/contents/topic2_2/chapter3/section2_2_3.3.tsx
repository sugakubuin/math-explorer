import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MaclaurinSeriesConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節の誤差評価により、テイラー近似の次数を上げると近似がどんどん良くなることがわかりました。
                次数を無限に上げた極限がテイラー<strong>級数</strong>です。
                本節では、代表的な関数のマクローリン展開（<InlineMath math="a = 0" /> を中心とするテイラー展開）を列挙し、
                べき級数の収束半径について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">主要な関数のマクローリン展開</h2>

            <ContentBox type="theorem" title="Theorem 3.3-1 (指数関数・三角関数・対数関数・二項式のマクローリン展開と収束半径)">
                <p className="leading-relaxed">
                    以下の関数のマクローリン展開と収束半径は次のとおりである。
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">1. 指数関数</h3>
                <BlockMath math="e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad (|x| < \infty)" />
                <p className="leading-relaxed">収束半径：<InlineMath math="R = \infty" />（すべての実数で収束）</p>

                <h3 className="text-lg font-semibold mt-4 mb-2">2. 三角関数</h3>
                <BlockMath math="\begin{aligned} \sin x &= \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1} \\ &= x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots \quad (|x| < \infty) \end{aligned}" />
                <BlockMath math="\begin{aligned} \cos x &= \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} x^{2n} \\ &= 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \quad (|x| < \infty) \end{aligned}" />
                <p className="leading-relaxed">収束半径：<InlineMath math="R = \infty" /></p>

                <h3 className="text-lg font-semibold mt-4 mb-2">3. 対数関数</h3>
                <BlockMath math="\begin{aligned} \ln(1 + x) &= \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n} x^n \\ &= x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (-1 < x \leq 1) \end{aligned}" />
                <p className="leading-relaxed">収束半径：<InlineMath math="R = 1" /></p>

                <h3 className="text-lg font-semibold mt-4 mb-2">4. 幾何級数</h3>
                <BlockMath math="\begin{aligned} \frac{1}{1 - x} &= \sum_{n=0}^{\infty} x^n \\ &= 1 + x + x^2 + x^3 + \cdots \quad (|x| < 1) \end{aligned}" />
                <p className="leading-relaxed">収束半径：<InlineMath math="R = 1" /></p>

                <h3 className="text-lg font-semibold mt-4 mb-2">5. 二項級数</h3>
                <BlockMath math="(1 + x)^\alpha = \sum_{n=0}^{\infty} \binom{\alpha}{n} x^n \quad (|x| < 1)" />
                <p className="leading-relaxed">
                    ここで <InlineMath math="\binom{\alpha}{n} = \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}" /> は一般化二項係数。
                    <InlineMath math="\alpha" /> が非負整数の場合は有限和で終わり、すべての <InlineMath math="x" /> で成り立つ。
                    収束半径：<InlineMath math="R = 1" />（<InlineMath math="\alpha" /> が非負整数でない場合）。
                </p>
            </ContentBox>

            <p>
                これらの展開は微分積分学の「辞書」ともいうべき基本的な結果です。
                指数関数と三角関数は収束半径が無限大であるのに対し、
                対数関数や幾何級数は収束半径が1に制限されています。
                この「収束半径」を体系的に求める方法を次に学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束半径の計算</h2>

            <ContentBox type="proposition" title="Proposition 3.3-1 (コーシー・アダマールの公式による収束半径)">
                <p className="leading-relaxed">
                    べき級数 <InlineMath math="\sum_{n=0}^{\infty} a_n x^n" /> の収束半径 <InlineMath math="R" /> は、次のいずれかの方法で求められる。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>（1）コーシー・アダマールの公式：</strong>
                </p>
                <BlockMath math="\frac{1}{R} = \limsup_{n \to \infty} |a_n|^{1/n}" />
                <p className="leading-relaxed mt-2">
                    <strong>（2）ダランベールの判定法（比の判定法）：</strong>極限が存在する場合、
                </p>
                <BlockMath math="\frac{1}{R} = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|" />
                <p className="leading-relaxed mt-2">
                    ここで <InlineMath math="1/R = 0" /> は <InlineMath math="R = \infty" /> を、<InlineMath math="1/R = \infty" /> は <InlineMath math="R = 0" /> を意味する。
                    べき級数は <InlineMath math="|x| < R" /> で絶対収束し、<InlineMath math="|x| > R" /> で発散する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-1 (ダランベールの判定法による収束半径の計算)">
                <p className="leading-relaxed">
                    <InlineMath math="e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}" /> の収束半径を求める。
                    <InlineMath math="a_n = \frac{1}{n!}" /> であるから、
                </p>
                <BlockMath math="\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \frac{n!}{(n+1)!} = \lim_{n \to \infty} \frac{1}{n+1} = 0" />
                <p className="leading-relaxed">
                    したがって <InlineMath math="1/R = 0" />、すなわち <InlineMath math="R = \infty" /> であり、すべての実数で収束する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="収束半径が有限な場合の意味 —— 関数と級数の「境界」">
                <p className="leading-relaxed">
                    <InlineMath math="\ln(1+x)" /> の収束半径が <InlineMath math="R = 1" /> であることは、<InlineMath math="x = -1" /> で <InlineMath math="\ln(1+x)" /> が定義されない
                    （<InlineMath math="\ln 0 = -\infty" />）ことと深く関係しています。
                    複素解析の視点では、べき級数の収束半径は「展開の中心から最も近い<strong>特異点</strong>までの距離」に等しくなります。
                </p>
                <p className="leading-relaxed mt-2">
                    例えば <InlineMath math="\frac{1}{1+x^2}" /> は実数の範囲ではすべての点で滑らかですが、
                    そのマクローリン展開の収束半径は <InlineMath math="R = 1" /> です。
                    これは複素数 <InlineMath math="x = \pm i" /> で分母が <InlineMath math="0" /> になる（特異点を持つ）ためであり、
                    実数だけを見ていては分からない「隠れた特異点」の影響です。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="e^x, \sin x, \cos x" /> は収束半径 <InlineMath math="\infty" /> のマクローリン展開を持つ。</li>
                    <li><InlineMath math="\ln(1+x)" />, <InlineMath math="\frac{1}{1-x}" />, <InlineMath math="(1+x)^\alpha" /> は収束半径 <InlineMath math="1" /> のマクローリン展開を持つ。</li>
                    <li>収束半径はダランベールの判定法やコーシー・アダマールの公式で求められる。</li>
                    <li>収束半径は複素解析の視点では「最も近い特異点までの距離」と理解できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
