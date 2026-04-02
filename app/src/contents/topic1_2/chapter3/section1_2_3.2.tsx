import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DefiniteIntegral() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                不定積分が「微分の逆演算」という代数的な操作であったのに対し、<strong>定積分</strong>は「曲線の下の面積を求める」という幾何学的な動機から定義されます。
                本節では、区間を細かく分割して長方形の面積を足し合わせる<strong>リーマン和</strong>による定積分の厳密な定義を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 分割とリーマン和
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">分割とリーマン和</h2>

            <p>
                グラフで囲まれた面積を、有限個の細長い長方形で近似して計算するアイデアです。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 （区間の分割）">
                <p>
                    閉区間 <InlineMath math="[a, b]" /> に対し、いくつかの点 <InlineMath math="x_i" /> をとって
                </p>
                <BlockMath math="a = x_0 < x_1 < x_2 < \dots < x_{n-1} < x_n = b" />
                <p>
                    と細分することを、区間 <InlineMath math="[a, b]" /> の<strong>分割 (Partition)</strong> といい、この分割を <InlineMath math="\Delta" /> で表す。
                    また、各小区間 <InlineMath math="[x_{i-1}, x_i]" /> の幅を <InlineMath math="\Delta x_i = x_i - x_{i-1}" /> とし、
                    その最大幅を <InlineMath math="|\Delta| = \max_{1 \le i \le n} \Delta x_i" /> と書く。<InlineMath math="|\Delta|" /> を分割の<strong>大きさ</strong>または<strong>細かさ</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.2-2 （リーマン和）">
                <p>
                    関数 <InlineMath math="f(x)" /> と区間 <InlineMath math="[a, b]" /> の分割 <InlineMath math="\Delta" /> が与えられたとする。
                    各小区間 <InlineMath math="[x_{i-1}, x_i]" /> の中から代表点 (標本点) <InlineMath math="\xi_i" /> （<InlineMath math="x_{i-1} \le \xi_i \le x_i" />）を任意に選ぶ。
                    このとき、長方形の面積の総和
                </p>
                <BlockMath math="S = \sum_{i=1}^n f(\xi_i) \Delta x_i" />
                <p>
                    を、関数 <InlineMath math="f(x)" /> の分割 <InlineMath math="\Delta" /> と代表点 <InlineMath math="\xi_i" /> に対する<strong>リーマン和 (Riemann sum)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark （幾何学的な意味）">
                <p>
                    関数 <InlineMath math="f(\xi_i)" /> が長方形の「高さ」、<InlineMath math="\Delta x_i" /> が長方形の「幅」を表します。
                    リーマン和は、曲線 <InlineMath math="y = f(x)" /> と <InlineMath math="x" /> 軸の間の面積を近似した値です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 定積分の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">定積分の定義（リーマン積分）</h2>

            <p>
                分割の最大幅を限りなく <InlineMath math="0" /> に近づけた（<InlineMath math="n \to \infty" /> とした）極限が常に一定の値に収束するとき、その値を定積分を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-3 （リーマン積分）">
                <p>
                    任意の分割の系列において、分割の大きさ <InlineMath math="|\Delta| \to 0" /> としたとき、
                    代表点 <InlineMath math="\xi_i" /> の選び方によらずリーマン和 <InlineMath math="S" /> が一定の実数 <InlineMath math="I" /> に収束するならば、
                    <InlineMath math="f(x)" /> は区間 <InlineMath math="[a, b]" /> 上で<strong>積分可能 (Integrable)</strong> であるという。
                </p>
                <p>
                    この極限値 <InlineMath math="I" /> を関数の<strong>定積分 (Definite Integral)</strong> と呼び、記号
                </p>
                <BlockMath math="\int_a^b f(x) \, dx = \lim_{|\Delta| \to 0} \sum_{i=1}^n f(\xi_i) \Delta x_i" />
                <p>
                    で表す。<InlineMath math="a" /> を<strong>下端</strong>、<InlineMath math="b" /> を<strong>上端</strong>という。
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    ※ 連続関数はすべて閉区間上で積分可能であることが知られています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 定積分の性質
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">定積分の性質</h2>

            <p>
                極限と和（<InlineMath math="\Sigma" />）から定義されているため、定積分はシグマ記号の様々なよい性質（線形性や不等式の保存など）を引き継ぎます。
            </p>

            <ContentBox type="proposition" title="Proposition 3.2-1 （定積分の線形性）">
                <p>関数 <InlineMath math="f(x), g(x)" /> が積分可能で、<InlineMath math="k" /> が定数のとき：</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><InlineMath math="\displaystyle \int_a^b k f(x) \, dx = k \int_a^b f(x) \, dx" /></li>
                    <li><InlineMath math="\displaystyle \int_a^b \{f(x) \pm g(x)\} \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof （線形性の証明概略）">
                <p>
                    リーマン和の極限として直接導かれます。
                </p>
                <BlockMath math="\sum_{i=1}^n \{f(\xi_i) + g(\xi_i)\} \Delta x_i = \sum_{i=1}^n f(\xi_i) \Delta x_i + \sum_{i=1}^n g(\xi_i) \Delta x_i" />
                <p>この両辺の極限 <InlineMath math="|\Delta| \to 0" /> をとることで、積分の和の性質を得ます。定数倍も同様です。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 3.2-2 （積分の大小比較）">
                <p>
                    区間 <InlineMath math="[a, b]" /> 上で常に <InlineMath math="f(x) \ge 0" /> ならば、
                </p>
                <BlockMath math="\int_a^b f(x) \, dx \ge 0" />
                <p>
                    より一般に、区間 <InlineMath math="[a, b]" /> 上で常に <InlineMath math="f(x) \ge g(x)" /> ならば、
                </p>
                <BlockMath math="\int_a^b f(x) \, dx \ge \int_a^b g(x) \, dx" />
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 3.2-3 （積分の加法性・区間の分割）">
                <p>
                    任意の3点 <InlineMath math="a, b, c" /> に対して、次が成り立つ：
                </p>
                <BlockMath math="\int_a^c f(x) \, dx + \int_c^b f(x) \, dx = \int_a^b f(x) \, dx" />
                <p>
                    （途中の点 <InlineMath math="c" /> で積分区間を分割したり、繋げたりできる。）
                </p>
            </ContentBox>

            <ContentBox type="remark" title="定義の拡張">
                <p>
                    上の計算を矛盾なく成立させるために、次のように定義を拡張します：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><InlineMath math="\displaystyle \int_a^a f(x) \, dx = 0" /> （幅が0の面積は0）</li>
                    <li><InlineMath math="\displaystyle \int_b^a f(x) \, dx = - \int_a^b f(x) \, dx" /> （区間の向きを逆にすると符号が反転する）</li>
                </ul>
            </ContentBox>

        </section>
    );
}
