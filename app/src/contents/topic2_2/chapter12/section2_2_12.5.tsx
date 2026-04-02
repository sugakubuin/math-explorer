import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_12_5() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                1変数の積分において積分区間が無限大に及ぶ場合（<InlineMath math="\int_1^\infty \frac{1}{x^2} dx" /> など）や、被積分関数が発散する場合（<InlineMath math="\int_0^1 \frac{1}{\sqrt{x}} dx" /> など）を「広義積分」として極限で定義しました。
                重積分においても全く同じように、領域や関数が「有界でない（無限に広がる、あるいは無限大に発散する）」場合の積分を<strong>広義重積分</strong>（Improper multiple integral）として取り扱います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">広義重積分の定義</h2>

            <p>
                広義重積分は、まずは有界な領域で積分を行い、その領域を無限に広げていくという極限操作によって定義されます。
                ここで重要なのは、「関数の正の部分と負の部分を別々に広義積分が収束するかどうか」です（<strong>絶対収束性</strong>）。極限の取り方（領域の広げ方）によって積分値が変わってしまうような条件収束は、重積分では「可積分ではない（積分できない）」と扱われます。
            </p>

            <ContentBox type="definition" title="Definition 12.5-1 (非有界領域上の広義重積分)">
                <p>
                    <InlineMath math="D" /> を <InlineMath math="\mathbb{R}^2" /> （または <InlineMath math="\mathbb{R}^n" />）全体、あるいはその部分領域で非有界なもの（どこまでも広がる領域）とする。
                    <InlineMath math="f(x, y)" /> が <InlineMath math="D" /> 上のすべての有界閉部分領域上で可積分であるとする。
                </p>
                <p className="mt-2">
                    <InlineMath math="D" /> の有界な部分領域の増大列 <InlineMath math="D_1 \subset D_2 \subset \dots \subset D_n \subset \dots" /> を取り、<InlineMath math="\bigcup_{n=1}^\infty D_n = D" /> となるようにする（これを近似列と呼ぶ）。
                </p>
                <p className="mt-2">
                    関数が非負（<InlineMath math="f \ge 0" />）の場合、積分列 <InlineMath math="I_n = \iint_{D_n} f \, dx \, dy" /> の極限 <InlineMath math="\lim_{n\to\infty} I_n" /> が有限値に収束し、これが近似列の選び方によらないとき、関数 <InlineMath math="f" /> は <InlineMath math="D" /> 上で広義積分可能であるといい、その極限値を広義重積分の値とする。
                </p>
                <BlockMath math="\iint_D f(x, y) \, dx \, dy = \lim_{n \to \infty} \iint_{D_n} f(x, y) \, dx \, dy" />
                <p className="mt-2">
                    一般の符号をとる関数 <InlineMath math="f" /> は、<InlineMath math="f^+(x,y) = \max(f, 0)" /> （正の部分）と <InlineMath math="f^-(x,y) = \max(-f, 0)" /> （負の部分）に分け、<InlineMath math="f = f^+ - f^-" /> と表す。
                    <InlineMath math="f^+" /> と <InlineMath math="f^-" /> の両方が広義積分可能であるとき、<InlineMath math="f" /> は <InlineMath math="D" /> 上で<strong>絶対可積分</strong>であるといい、積分の値をそれぞれの極限値の差として定義する。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 12.5-2 (無界関数の広義重積分)">
                <p>
                    領域 <InlineMath math="D" /> は有界であるが、領域内のある特異点 <InlineMath math="P \in D" /> （例えば原点）の周りで関数 <InlineMath math="f(x, y)" /> の値が無限大に発散する場合を考える。
                </p>
                <p className="mt-2">
                    この特異点を含む微小な領域を取り除いた有界な領域 <InlineMath math="D_\varepsilon" /> を考える（例えば <InlineMath math="P" /> を中心とする半径 <InlineMath math="\varepsilon" /> の円盤を取り除く）。
                </p>
                <p className="mt-2">
                    <InlineMath math="\varepsilon \to 0" /> としたときの極限
                </p>
                <BlockMath math="\lim_{\varepsilon \to 0} \iint_{D_\varepsilon} |f(x, y)| \, dx \, dy" />
                <p className="mt-2">
                    が有限値に収束・確定するとき、<InlineMath math="f" /> は広義積分の意味で<strong>可積分</strong>であるという。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束判定法</h2>

            <p>
                1変数の広義積分や無限級数の収束判定と全く同様に、重積分においても「関数をより簡単な関数で上（または下）から抑え込む」ことで、収束・発散を判定する<strong>比較判定法</strong>が最も基本的です。
            </p>

            <ContentBox type="proposition" title="Proposition 12.5-1 (比較判定法)">
                <p>
                    領域 <InlineMath math="D" /> 上で <InlineMath math="0 \le f(x, y) \le g(x, y)" /> が常に成り立っているとする。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\iint_D g(x, y) \, dx\,dy" /> が収束するならば、それより「小さい」<InlineMath math="\iint_D f(x, y) \, dx\,dy" /> も<strong>収束する</strong>。</li>
                    <li><InlineMath math="\iint_D f(x, y) \, dx\,dy" /> が発散（<InlineMath math="\infty" />）するならば、それより「大きい」<InlineMath math="\iint_D g(x, y) \, dx\,dy" /> も<strong>発散する</strong>。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算の具体例</h2>

            <ContentBox type="example" title="Example 12.5-1 (全平面におけるガウス積分の厳密な記述)">
                <p>
                    §12.3 で導出したガウス積分の二重積分
                </p>
                <BlockMath math="\iint_{\mathbb{R}^2} e^{-(x^2 + y^2)} \, dx \, dy" />
                <p className="mt-2">
                    は、全平面という非有界領域上の「広義重積分」である。Definition 12.5-1 に従い、正方形を広げる近似列と、円盤を広げる近似列の2通りの計算が同じ結果になる（関数が非負なので可積分）ことを利用したものである。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>
                        <strong>正方形領域の近似（フビニの定理）：</strong>
                        <BlockMath math="\begin{aligned} &\lim_{R \to \infty} \iint_{[-R, R] \times [-R, R]} e^{-(x^2+y^2)} \, dx \, dy \\ &= \left( \int_{-\infty}^\infty e^{-x^2} dx \right)^2 \\ &= I^2 \end{aligned}" />
                    </li>
                    <li>
                        <strong>円盤領域の近似（極座標変換）：</strong>
                        <BlockMath math="\begin{aligned} &\lim_{R \to \infty} \iint_{x^2+y^2 \le R^2} e^{-(x^2+y^2)} \, dx \, dy \\ &= \lim_{R \to \infty} \int_0^{2\pi} \int_0^R e^{-r^2} r \, dr \, d\theta \\ &= \pi \end{aligned}" />
                    </li>
                </ul>
                <p className="mt-2">
                    被積分関数が正値なので両者の極限は等しくなる必要があり、<InlineMath math="I^2 = \pi" /> が厳密に正当化される。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 12.5-2 (ガンマ関数)">
                <p>
                    特殊関数として極めて重要な<strong>ガンマ関数</strong>（Gamma function）の定義も、自然数 <InlineMath math="x > 0" /> をパラメータとする無限区間の広義積分で与えられる。
                </p>
                <BlockMath math="\Gamma(x) = \int_0^\infty t^{x-1} e^{-t} \, dt" />
                <p className="mt-2">
                    自然数 <InlineMath math="n" /> に対し <InlineMath math="\Gamma(n) = (n-1)!" /> となり、階乗関数の実数・複素界への解析接続としての性質を持つ。
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    （※ 半無限区間の1変数積分だが、定義域が有界ではなくさらに <InlineMath math="x < 1" /> では <InlineMath math="t \to 0" /> で被積分関数が発散するため、本節のような広義積分の収束性の厳密な保証が背後で不可欠となる。）
                </p>
            </ContentBox>

        </section>
    );
}
