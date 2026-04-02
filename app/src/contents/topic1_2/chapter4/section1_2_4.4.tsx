import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function TaylorSeries() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、「べき級数は多項式のように微分・積分が行える便利な関数だ」ということを学びました。
                それでは逆に、<strong>「どんな関数でも、べき級数（無限に続く多項式）の形に書き直せるのだろうか？」</strong>という疑問が生じます。
                これを可能にするのが<strong>テイラー展開</strong>であり、微分積分学において最も重要で美しい結果の1つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 テイラーの定理とテイラー多項式
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">テイラーの定理とテイラー多項式</h2>

            <p>
                まずは無限に行かず、有限の <InlineMath math="n" /> 次の多項式で任意の関数 <InlineMath math="f(x)" /> を近似することを考えます。
                点 <InlineMath math="x = a" /> の近傍で、<InlineMath math="f(a)" /> の値、1次微分 <InlineMath math="f'(a)" />、2次微分 <InlineMath math="f''(a)" />…といった情報をすべて持った多項式を作ります。
            </p>

            <ContentBox type="definition" title="Definition 4.4-1 （テイラー多項式）">
                <p>
                    関数 <InlineMath math="f(x)" /> が <InlineMath math="x = a" /> の周りで <InlineMath math="n" /> 回微分可能であるとき、
                </p>
                <BlockMath math="\begin{aligned} T_n(x) = &\  f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \\ & \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n \end{aligned}" />
                <p>
                    を <InlineMath math="f(x)" /> の <InlineMath math="x = a" /> における <InlineMath math="n" /> 次の<strong>テイラー多項式 (Taylor Polynomial)</strong> という。
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    ※ 1次の場合 <InlineMath math="T_1(x) = f(a) + f'(a)(x-a)" /> であり、これはまさに「接線」の方程式そのものです。テイラー多項式は接線を曲面の曲がり具合も含めて高次へ拡張した「高次の接線」と言えます。
                </p>
            </ContentBox>

            <p>
                関数 <InlineMath math="f(x)" /> とその近似多項式 <InlineMath math="T_n(x)" /> との「誤差」を表す部分を剰余項と呼びます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 （テイラーの定理 / Taylor's Theorem）">
                <p>
                    関数 <InlineMath math="f(x)" /> が区間 <InlineMath math="I" /> において <InlineMath math="n+1" /> 回微分可能であり、<InlineMath math="a, x \in I" /> とする。
                    このとき、<InlineMath math="f(x)" /> はテイラー多項式と<strong>剰余項 (Remainder)</strong> <InlineMath math="R_{n+1}(x)" /> を用いて次のように表せる：
                </p>
                <BlockMath math="f(x) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!} (x-a)^k + R_{n+1}(x)" />
                <p>
                    ここで、剰余項 <InlineMath math="R_{n+1}(x)" /> は、<InlineMath math="a" /> と <InlineMath math="x" /> の間に存在するある実数 <InlineMath math="c" /> を用いて、次のように書ける（ラグランジュの剰余項）：
                </p>
                <BlockMath math="R_{n+1}(x) = \frac{f^{(n+1)}(c)}{(n+1)!} (x-a)^{n+1}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof （テイラーの定理の概略）">
                <p>
                    コーシーの平均値の定理を繰り返し用いるか、あるいは部分積分を繰り返すことで導くことができます。<br />
                    例えば <InlineMath math="n=1" /> の場合：
                </p>
                <BlockMath math="f(x) = f(a) + f'(a)(x-a) + \frac{f''(c)}{2}(x-a)^2" />
                <p>
                    これは平均値の定理の拡張になっています。ラグランジュの剰余項の形は、<InlineMath math="n" /> 次の微分までは多項式にお任せし、残りきらなかった誤差（<InlineMath math="n+1" />次以降の分）を一つの点 <InlineMath math="c" /> における <InlineMath math="n+1" /> 階微分で代表させている、と解釈できます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 テイラー級数とマクローリン級数
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">テイラー展開とマクローリン展開</h2>

            <p>
                もし <InlineMath math="n \to \infty" /> とした極限において、誤差 <InlineMath math="R_{n+1}(x)" /> が <InlineMath math="0" /> に収束するならば、関数 <InlineMath math="f(x)" /> は完全に無限多項式と一致することになります。
            </p>

            <ContentBox type="definition" title="Definition 4.4-2 （テイラー展開・マクローリン展開）">
                <p>
                    無限回微分可能な関数 <InlineMath math="f(x)" /> について、剰余項が <InlineMath math="\displaystyle \lim_{n \to \infty} R_n(x) = 0" /> を満たすとき、
                </p>
                <BlockMath math="f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!} (x-a)^n" />
                <p>
                    と無限級数で表すことができる。これを <InlineMath math="x = a" /> における<strong>テイラー展開 (Taylor series expansion)</strong> という。
                </p>
                <p className="mt-2">
                    特に <InlineMath math="a = 0" /> のときのテイラー展開を、<strong>マクローリン展開 (Maclaurin series expansion)</strong> という。
                </p>
                <BlockMath math="f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(0)}{n!} x^n = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \dots" />
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 4.4-2 （主要関数のマクローリン展開）">
                <p>以下は、あらゆる分野で最も頻繁に現れる重要な展開公式である（カッコ内は級数が収束する <InlineMath math="x" /> の範囲）。</p>
                <ul className="list-disc pl-5 mt-2 space-y-4">
                    <li>
                        <strong>指数関数：</strong>
                        <BlockMath math="\begin{aligned} e^x &= 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots \\ &= \sum_{n=0}^\infty \frac{x^n}{n!} \quad (-\infty < x < \infty) \end{aligned}" />
                    </li>
                    <li>
                        <strong>三角関数：</strong>
                        <BlockMath math="\begin{aligned} \sin x &= x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots \\ &= \sum_{n=0}^\infty \frac{(-1)^n}{(2n+1)!} x^{2n+1} \quad (-\infty < x < \infty) \end{aligned}" />
                        <BlockMath math="\begin{aligned} \cos x &= 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots \\ &= \sum_{n=0}^\infty \frac{(-1)^n}{(2n)!} x^{2n} \quad (-\infty < x < \infty) \end{aligned}" />
                    </li>
                    <li>
                        <strong>対数関数：</strong>
                        <BlockMath math="\begin{aligned} \log(1+x) &= x - \frac{x^2}{2} + \frac{x^3}{3} - \dots \\ &= \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} x^n \quad (-1 < x \le 1) \end{aligned}" />
                    </li>
                    <li>
                        <strong>二項展開（一般化）：</strong> <InlineMath math="\alpha" /> が実数のとき
                        <BlockMath math="(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!} x^2 + \dots \quad (|x| < 1)" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof （マクローリン展開の導出）">
                <p>
                    例えば <InlineMath math="f(x) = e^x" /> の場合。<br />
                    <InlineMath math="e^x" /> は何度微分しても <InlineMath math="e^x" /> であり、<InlineMath math="x=0" /> を代入すると <InlineMath math="f^{(n)}(0) = e^0 = 1" /> です。<br />
                    したがって公式の係数はすべて <InlineMath math="\displaystyle \frac{1}{n!}" /> となり、直接公式が得られます。
                    剰余項も <InlineMath math="\displaystyle \frac{e^c}{(n+1)!} x^{n+1}" /> は指数関数より階乗の方が遥かに速く大きくなるため <InlineMath math="0" /> に収束します。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 展開の応用
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">テイラー展開の応用</h2>

            <p>
                関数の近似計算や、ロピタルの定理を使わずに複雑な極限値（<InlineMath math="0/0" /> 不定形など）を計算する際に極めて強力な威力を発揮します。
            </p>

            <ContentBox type="remark" title="Remark （テイラー展開を用いた極限計算）">
                <p>
                    関数をテイラー展開して主要な項だけを取り出すことで、極限の振る舞いを多項式の比に帰着させて計算できる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.4-1 （テイラー展開を利用した例題）">
                <p>
                    (1) 近似：<InlineMath math="e^{0.1}" /> の近似値を、マクローリン展開の2次までを用いて求めよ。<br />
                    (2) 極限：<InlineMath math="\displaystyle \lim_{x \to 0} \frac{\sin x - x}{x^3}" /> を求めよ。
                </p>
                <p className="mt-3"><strong>解 (1) 近似．</strong></p>
                <BlockMath math="e^x \approx 1 + x + \frac{x^2}{2}" />
                <p>に <InlineMath math="x = 0.1" /> を代入すると：</p>
                <BlockMath math="e^{0.1} \approx 1 + 0.1 + \frac{(0.1)^2}{2} = 1 + 0.1 + 0.005 = 1.105" />

                <p className="mt-5"><strong>解 (2) 極限．</strong></p>
                <p>
                    <InlineMath math="\sin x" /> のマクローリン展開は <InlineMath math="\displaystyle \sin x = x - \frac{x^3}{3!} + O(x^5)" /> であるため、分子に代入すると：
                </p>
                <BlockMath math="\lim_{x \to 0} \frac{ \left( x - \frac{x^3}{6} + \dots \right) - x }{x^3} = \lim_{x \to 0} \frac{ -\frac{x^3}{6} + \dots }{x^3} = -\frac{1}{6}" />
                <p className="mt-2 text-sm">
                    （これはロピタルの定理を3回適用するのと同じ計算を、式の展開だけで一瞬で済ませています）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数を <InlineMath math="x=a" /> の近傍で多項式近似したものが<strong>テイラー多項式</strong>であり、誤差はラグランジュの剰余項で表される（Theorem 4.4-1）。</li>
                    <li>近似を無限次数まで拡張したものが<strong>テイラー展開</strong>であり、<InlineMath math="x=0" /> を中心としたものを<strong>マクローリン展開</strong>と呼ぶ（Definition 4.4-2）。</li>
                    <li><InlineMath math="e^x, \sin x, \cos x, \log(1+x)" /> のマクローリン展開は数学全体の基礎となるため暗記が必須である（Theorem 4.4-2）。</li>
                    <li>級数展開は、ロピタルの定理より強力な<strong>極限計算ツール</strong>や、関数の<strong>近似計算ツール</strong>を提供する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
