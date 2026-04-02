import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function FundamentalTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ通り、<strong>定積分</strong>は「面積の計算（極限）」として定義され、<strong>不定積分</strong>は「微分の逆演算」として定義されました。
                一見全く関係のなさそうなこの2つを劇的に結びつけるのが、<strong>微積分の基本定理 (Fundamental Theorem of Calculus)</strong> です。
                この定理により、複雑な極限計算をせずに、原始関数を求めるだけで定積分（面積）を計算できるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 第1基本定理
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">微積分の第1基本定理</h2>

            <p>
                定積分を使って「上限 <InlineMath math="x" /> を変数とする関数（積分関数）」を作ると、それを微分したものは元の関数に戻る、という定理です。
                これは「微分と積分は互いに逆の操作である」ことを直接的に述べています。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 （微積分の第1基本定理）">
                <p>
                    関数 <InlineMath math="f(t)" /> が閉区間 <InlineMath math="[a, b]" /> で連続であるとき、関数 <InlineMath math="S(x)" /> を次のように定義する：
                </p>
                <BlockMath math="S(x) = \int_a^x f(t) \, dt \quad (a \le x \le b)" />
                <p>
                    このとき、<InlineMath math="S(x)" /> は開区間 <InlineMath math="(a, b)" /> で微分可能であり、その導関数は <InlineMath math="f(x)" /> に一致する。
                </p>
                <BlockMath math="\frac{d}{dx} \left( \int_a^x f(t) \, dt \right) = f(x)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof （第1基本定理の証明）">
                <p>
                    微分の定義に従って <InlineMath math="S'(x)" /> を計算します。
                </p>
                <BlockMath math="\begin{aligned} S'(x) &= \lim_{h \to 0} \frac{S(x+h) - S(x)}{h} \\ &= \lim_{h \to 0} \frac{1}{h} \left( \int_a^{x+h} f(t) \, dt - \int_a^x f(t) \, dt \right) \end{aligned}" />
                <p>
                    積分の加法性より区間を引き算すると、
                </p>
                <BlockMath math="\int_a^{x+h} f(t) \, dt - \int_a^x f(t) \, dt = \int_x^{x+h} f(t) \, dt" />
                <p>
                    積分の平均値の定理（または直感的には、微小幅 <InlineMath math="h" /> において連続関数はほぼ一定 <InlineMath math="f(x)" /> であること）から、
                    ある代表点 <InlineMath math="c" /> (<InlineMath math="x \le c \le x+h" />) が存在して、面積が長方形と等しくなります：
                </p>
                <BlockMath math="\int_x^{x+h} f(t) \, dt = h \cdot f(c)" />
                <p>
                    ゆえに、差分商は
                </p>
                <BlockMath math="\frac{1}{h} \Big( h \cdot f(c) \Big) = f(c)" />
                <p>
                    ここで <InlineMath math="h \to 0" /> とすると、<InlineMath math="c" /> は <InlineMath math="x" /> と <InlineMath math="x+h" /> の間にあるため <InlineMath math="c \to x" /> となります。
                    <InlineMath math="f" /> は連続関数なので <InlineMath math="f(c) \to f(x)" /> となり、証明されました。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 第2基本定理
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">微積分の第2基本定理</h2>

            <p>
                第1基本定理から直ちに導かれる、実際の定積分の計算で常時用いられる定理です。
                「定積分を求めるには、被積分関数の原始関数を見つけ、区間の端点の値を代入して引けばよい」と主張します。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-2 （微積分の第2基本定理）">
                <p>
                    連続関数 <InlineMath math="f(x)" /> の<strong>任意の</strong>原始関数を <InlineMath math="F(x)" /> （すなわち <InlineMath math="F'(x) = f(x)" />）とするとき、次が成り立つ：
                </p>
                <BlockMath math="\int_a^b f(x) \, dx = F(b) - F(a)" />
                <p className="mt-2 text-sm">
                    計算の過程で、差 <InlineMath math="F(b) - F(a)" /> を <InlineMath math="\left[ F(x) \right]_a^b" /> と書き表すのが一般的です。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （第2基本定理の証明）">
                <p>
                    第1基本定理より、積分関数 <InlineMath math="S(x) = \int_a^x f(t)\,dt" /> は <InlineMath math="f(x)" /> の原始関数の一つです。<br />
                    したがって、任意の原始関数 <InlineMath math="F(x)" /> とは定数 <InlineMath math="C" /> の違いしかありません。
                </p>
                <BlockMath math="S(x) = F(x) + C" />
                <p>
                    まず <InlineMath math="x = a" /> を代入すると、積分区間が長さ <InlineMath math="0" /> となるので <InlineMath math="S(a) = \int_a^a f(t)\,dt = 0" /> です。よって、
                </p>
                <BlockMath math="0 = F(a) + C \implies C = -F(a)" />
                <p>
                    ゆえに <InlineMath math="S(x) = F(x) - F(a)" /> と確定します。<br />
                    最後に <InlineMath math="x = b" /> を代入すれば、
                </p>
                <BlockMath math="S(b) = \int_a^b f(t) \, dt = F(b) - F(a)" />
                <p>となり、証明されました。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-1 （定積分の計算）">
                <p>
                    次の定積分を計算せよ。
                </p>
                <BlockMath math="\int_1^3 x^2 \, dx" />
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    被積分関数 <InlineMath math="f(x) = x^2" /> の原始関数の1つは <InlineMath math="F(x) = \frac{x^3}{3}" /> である。
                    微積分の第2基本定理より、積分定数 <InlineMath math="C" /> を付けずに差をとればよい：
                </p>
                <BlockMath math="\begin{aligned} \int_1^3 x^2 \, dx &= \left[ \frac{x^3}{3} \right]_1^3 \\ &= \frac{3^3}{3} - \frac{1^3}{3} \\ &= 9 - \frac{1}{3} = \frac{26}{3} \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>第1基本定理：</strong> <InlineMath math="\displaystyle \frac{d}{dx} \int_a^x f(t)\,dt = f(x)" />。微分と積分が逆演算の関係であることを示す（Theorem 3.3-1）。</li>
                    <li><strong>第2基本定理：</strong> <InlineMath math="\displaystyle \int_a^b f(x)\,dx = F(b) - F(a)" />。和の極限（リーマン和）を用いず、原始関数を見つけることで定積分を計算できる（Theorem 3.3-2）。</li>
                    <li>これにより積分の計算問題は、「ある関数を微分したら被積分関数になるような、元の関数を見つけるパズル」に帰着される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
