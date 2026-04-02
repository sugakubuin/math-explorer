import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function TotalDifferential() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                偏微分は「ある1つの変数だけを動かしたときの変化」を見ました。
                しかし、関数全体としての連続性や微分可能性を捉えるためには、<strong>「すべての変数を同時に少しずつ動かしたときの総合的な変化」</strong>を評価する必要があります。これを<strong>全微分</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 全微分の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">全微分可能性と全微分</h2>

            <p>
                1変数関数の微分が「曲線を接線で一次近似できること」を意味したように、2変数関数の全微分可能であるということは「曲面を接平面で一次近似できること」を意味します。
            </p>

            <ContentBox type="definition" title="Definition 5.3-1 （全微分可能性）">
                <p>
                    2変数関数 <InlineMath math="z = f(x, y)" /> について、独立変数 <InlineMath math="x, y" /> の微小な増分をそれぞれ <InlineMath math="\Delta x, \Delta y" /> とし、
                    関数の増分を <InlineMath math="\Delta z = f(x+\Delta x, y+\Delta y) - f(x, y)" /> とする。
                </p>
                <p className="mt-2">
                    この <InlineMath math="\Delta z" /> が、定数 <InlineMath math="A, B" /> を用いて次のように表せるとする：
                </p>
                <BlockMath math="\Delta z = A\Delta x + B\Delta y + \varepsilon \sqrt{(\Delta x)^2 + (\Delta y)^2}" />
                <p>
                    このとき、<InlineMath math="(\Delta x, \Delta y) \to (0, 0)" /> （原点への接近）に対して、<InlineMath math="\varepsilon \to 0" /> となるならば、
                    関数 <InlineMath math="f" /> は点 <InlineMath math="(x, y)" /> において<strong>全微分可能 (Differentiable)</strong> であるという。
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    ※ このとき、<InlineMath math="A = f_x(x,y), B = f_y(x,y)" /> でなければならないことが知られています。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 5.3-2 （全微分）">
                <p>
                    関数 <InlineMath math="z = f(x, y)" /> が全微分可能であるとき、その主要な（線形な）増分部分
                </p>
                <BlockMath math="dz = f_x(x,y)\,dx + f_y(x,y)\,dy" />
                <p>
                    （または <InlineMath math="\displaystyle dz = \frac{\partial f}{\partial x} dx + \frac{\partial f}{\partial y} dy" />）を <InlineMath math="z" /> の<strong>全微分 (Total differential)</strong> という。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 全微分可能性の条件
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">全微分可能であるための条件</h2>

            <p>
                「全微分可能である」ことの定義式を直接確認するのは大変です。
                しかし、ほとんどの実用的な関数については、より簡単な「偏微分が連続である」という条件で済みます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1 （偏微分が連続ならば全微分可能）">
                <p>
                    関数 <InlineMath math="f(x, y)" /> の偏導関数 <InlineMath math="f_x, f_y" /> が存在して、点 <InlineMath math="(a, b)" /> の近傍で<strong>連続（<InlineMath math="C^1" />級）</strong>であるならば、
                    <InlineMath math="f(x, y)" /> は点 <InlineMath math="(a, b)" /> において全微分可能である。
                </p>
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-bold">
                    【注意】偏微分が存在するだけでは全微分可能とは限りません。偏微分の連続性が保証（十分条件）を与えます。多変数において単なる「偏微分可能（各方向に微分可能）」は、「全体として滑らか（全微分可能）」であることを意味しないのです。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （Theorem 5.3-1 の概略）">
                <p>
                    増分 <InlineMath math="\Delta z" /> を、<InlineMath math="x" /> だけ動かした部分と <InlineMath math="y" /> だけ動かした部分に分け、平均値の定理をそれぞれに適用します。
                </p>
                <BlockMath math="\begin{aligned} \Delta f = &\  \{ f(x+\Delta x, y+\Delta y) - f(x, y+\Delta y) \} \\ &+ \{ f(x, y+\Delta y) - f(x, y) \} \\ \approx &\ f_x(c_1, y+\Delta y) \Delta x + f_y(x, c_2) \Delta y \end{aligned}" />
                <p>
                    偏導関数 <InlineMath math="f_x, f_y" /> が連続であるという仮定から、<InlineMath math="\Delta x \to 0, \Delta y \to 0" /> のときに
                    <InlineMath math="f_x(c_1, y+\Delta y) \to f_x(x,y)" />、<InlineMath math="f_y(x, c_2) \to f_y(x,y)" /> となり、全微分の定義式に一致します。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 接平面と線形近似
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">接平面と線形近似</h2>

            <p>
                全微分が定義できるということは、ある点のまわりの曲面のごく一部を「平らな平面（接平面）」とみなせるということです。
            </p>

            <ContentBox type="proposition" title="Proposition 5.3-1 （接平面の方程式と線形近似）">
                <p>
                    曲面 <InlineMath math="z = f(x, y)" /> 上の点 <InlineMath math="P(a, b, f(a,b))" /> における<strong>接平面</strong>の方程式は、
                </p>
                <BlockMath math="z - f(a,b) = f_x(a,b)(x-a) + f_y(a,b)(y-b)" />
                <p>である。</p>
                <p className="mt-2">
                    また、点 <InlineMath math="(x,y)" /> が <InlineMath math="(a,b)" /> に十分近いとき、関数 <InlineMath math="f(x,y)" /> はこの接平面（多項式の1次式）で<strong>線形近似 (Linear approximation)</strong> される。
                </p>
                <BlockMath math="f(x,y) \approx f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)" />
                <p className="mt-2 text-sm text-slate-500">
                    ※ 1変数関数の <InlineMath math="f(x) \approx f(a) + f'(a)(x-a)" /> と全く同じ形をしています。<InlineMath math="z - f = \dots" /> の形は全微分の式 <InlineMath math="dz = f_x dx + f_y dy" /> にそのまま対応します。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-1 （近似計算）">
                <p>
                    <InlineMath math="\sqrt{(3.02)^2 + (3.97)^2}" /> の近似値を、接平面を用いた線形近似により求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    関数を <InlineMath math="f(x,y) = \sqrt{x^2+y^2}" /> とおき、基準点 <InlineMath math="(a,b) = (3,4)" /> の周りで線形近似する。<br />
                    このとき <InlineMath math="f(3,4) = \sqrt{9+16} = 5" />。
                </p>
                <p>
                    偏導関数を計算する：<br />
                    <InlineMath math="\displaystyle f_x(x,y) = \frac{x}{\sqrt{x^2+y^2}} \implies f_x(3,4) = \frac{3}{5}" /><br />
                    <InlineMath math="\displaystyle f_y(x,y) = \frac{y}{\sqrt{x^2+y^2}} \implies f_y(3,4) = \frac{4}{5}" />
                </p>
                <p>線形近似の式に代入する：</p>
                <BlockMath math="\begin{aligned} f(3.02, 3.97) &\approx f(3,4) + f_x(3,4)(3.02-3) + f_y(3,4)(3.97-4) \\ &= 5 + \frac{3}{5}(0.02) + \frac{4}{5}(-0.03) \\ &= 5 + 0.6(0.02) + 0.8(-0.03) \\ &= 5 + 0.012 - 0.024 = 4.988 \end{aligned}" />
                <p>
                    電卓で極めて正確に計算した値（<InlineMath math="\approx 4.98801" />）に非常に近いことがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>2変数を同時に動かしたときの微小な変化量 <InlineMath math="f_x dx + f_y dy" /> を<strong>全微分</strong>という（Definition 5.3-2）。</li>
                    <li>全微分可能であるためには、偏導関数が連続であることが十分条件とされている（Theorem 5.3-1）。</li>
                    <li>全微分は曲面を「接平面」で<strong>1次近似</strong>することに対応する（Proposition 5.3-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
