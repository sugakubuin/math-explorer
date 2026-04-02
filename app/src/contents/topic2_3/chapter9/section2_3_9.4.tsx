import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FundamentalTheoremOfCalculus() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ここまで「微分論」（接線の傾き）と「積分論」（極限としての面積）は、それぞれ極限とダルブー和という全く別の定義体系のもとで独立して構築されてきました。
                微積分学（Calculus）という学問の最大の劇的な結末こそが、これら2つの全く異なる操作が「互いに逆の操作である」ということを明らかにする<strong>微積分の基本定理</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微積分の第1基本定理（積分の微分）</h2>

            <p>
                まずは、「関数を面積（積分）に変えてから、もう一度微分をすると、元の関数に戻る」という定理です。これは「積分によって構成された関数（面積関数）」が滑らかに微分可能であることを保証します。
            </p>

            <ContentBox type="theorem" title="Theorem 9.4-1 (微積分の第1基本定理)">
                <p>
                    閉区間 <InlineMath math="[a, b]" /> 上の<strong>連続</strong>関数 <InlineMath math="f(x)" /> に対し、上限を変数 <InlineMath math="x" /> とした定積分で定義される新しい関数 <InlineMath math="F(x)" /> （面積関数）を
                </p>
                <BlockMath math="F(x) = \int_a^x f(t) dt \quad (x \in [a, b])" />
                <p>
                    とする（<InlineMath math="f" /> は連続なので定理9.2-2より可積分であり、この関数は常に意味を持つ）。
                </p>
                <p className="mt-4">
                    このとき、関数 <InlineMath math="F(x)" /> は開区間 <InlineMath math="(a, b)" /> 上で微分可能であり、その導関数は <InlineMath math="f(x)" /> に等しい。すなわち、
                </p>
                <BlockMath math="\frac{d}{dx} F(x) = \frac{d}{dx} \left( \int_a^x f(t) dt \right) = f(x)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    導関数の定義そのものに従って限界を計算する。微小な増分 <InlineMath math="h > 0" /> を考え、<InlineMath math="F" /> の差分をとると、積分の区間加法性（Proposition 9.3-3）により
                </p>
                <BlockMath math="\begin{aligned} F(x+h) - F(x) &= \int_a^{x+h} f(t) dt - \int_a^x f(t) dt \\ &= \int_x^{x+h} f(t) dt \end{aligned}" />
                <p>
                    となる（<InlineMath math="h < 0" /> の場合も積分の向きの定義により全く同様の式になる）。<br />
                    よって、微分の定義式は
                </p>
                <BlockMath math="\frac{F(x+h) - F(x)}{h} = \frac{1}{h} \int_x^{x+h} f(t) dt" />
                <p>
                    と書ける。
                </p>
                <p className="mt-4">
                    ここで <InlineMath math="f" /> が点 <InlineMath math="x" /> で<strong>連続</strong>であるという性質を用いる。
                    連続性の定義により、<InlineMath math="h \to 0" /> となる極限を考える範囲では、積分区間 <InlineMath math="t \in [x, x+h]" /> 内における関数値 <InlineMath math="f(t)" /> は、<InlineMath math="f(x)" /> の値からほとんど変動しない。
                </p>
                <p className="mt-4">
                    定数関数 <InlineMath math="g(t) = f(x)" /> の定積分が <InlineMath math="\int_x^{x+h} f(x) dt = h f(x)" /> であることを活用するため、差をとって絶対値評価（Proposition 9.3-4）を行う。
                </p>
                <BlockMath math="\begin{aligned} \left| \frac{1}{h} \int_x^{x+h} f(t) dt - f(x) \right| &= \left| \frac{1}{h} \int_x^{x+h} f(t) dt - \frac{1}{h} \int_x^{x+h} f(x) dt \right| \\ &= \frac{1}{|h|} \left| \int_x^{x+h} \{f(t) - f(x)\} dt \right| \\ &\leq \frac{1}{|h|} \left| \int_x^{x+h} |f(t) - f(x)| dt \right| \end{aligned}" />
                <p className="mt-4">
                    <InlineMath math="f" /> は <InlineMath math="x" /> において連続なので、任意の <InlineMath math="\varepsilon > 0" /> に対してある <InlineMath math="\delta > 0" /> が存在し、<InlineMath math="|t - x| \leq |h| < \delta" /> のとき、常に <InlineMath math="|f(t) - f(x)| < \varepsilon" /> とできる。これを用いると上の積分は
                </p>
                <BlockMath math="\begin{aligned} \frac{1}{|h|} \left| \int_x^{x+h} |f(t) - f(x)| dt \right| &< \frac{1}{|h|} \left| \int_x^{x+h} \varepsilon dt \right| \\ &= \frac{1}{|h|} \cdot \varepsilon |h| = \varepsilon \end{aligned}" />
                <p>
                    と評価される。
                </p>
                <p className="mt-4">
                    これはまさに <InlineMath math="h \to 0" /> の極限で差分商が <InlineMath math="f(x)" /> に収束することの（<InlineMath math="\varepsilon-\delta" />式を用いた）証明であり、
                </p>
                <BlockMath math="\lim_{h \to 0} \frac{F(x+h) - F(x)}{h} = f(x)" />
                <p>
                    が成立し、定理が証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微積分の第2基本定理（積分の計算）</h2>

            <p>
                第1基本定理が「微分」の定理であったのに対し、こちらは「定積分をいかにして計算するか」という実用上極めて重要な側面を担っています。「面積を求めたければ、微分するとその関数になるもの（原始関数）を見つけて引き算すればよい」という驚異の事実です。
            </p>

            <ContentBox type="theorem" title="Theorem 9.4-2 (微積分の第2基本定理)">
                <p>
                    関数 <InlineMath math="f(x)" /> は閉区間 <InlineMath math="[a, b]" /> 上で連続であり、<InlineMath math="G(x)" /> を <InlineMath math="f(x)" /> の任意の<strong>原始関数</strong>とする（すなわち区間全体で <InlineMath math="G'(x) = f(x)" /> を満たす関数）。
                </p>
                <p className="mt-4">
                    このとき、<InlineMath math="f(x)" /> の区間 <InlineMath math="[a, b]" /> における定積分は、原始関数の両端での値の差として次のように計算できる。
                </p>
                <BlockMath math="\int_a^b f(x) dx = \left[ G(x) \right]_a^b = G(b) - G(a)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    第1基本定理により、関数 <InlineMath math="F(x) = \int_a^x f(t) dt" /> も導関数が <InlineMath math="f(x)" /> となる関数、すなわち原始関数の一つである。<br />
                    微分の理論における「ラグランジュの平均値定理」（あるいはその系として、導関数が常に0の関数は定数関数のみであるという性質）より、2つの原始関数 <InlineMath math="F(x)" /> と <InlineMath math="G(x)" /> は、その傾きが常に一致するため、差は「定数」になるはずである。
                </p>
                <BlockMath math="F(x) - G(x) = C \quad (\text{定数})" />
                <p className="mt-4">
                    したがって、すべての <InlineMath math="x \in [a, b]" /> について
                </p>
                <BlockMath math="F(x) = G(x) + C" />
                <p>
                    と書ける。この未知の定数 <InlineMath math="C" /> を決定するために、左端点 <InlineMath math="x = a" /> を代入する。<br />
                    <InlineMath math="F(x)" /> の定義から <InlineMath math="F(a) = \int_a^a f(t) dt = 0" /> であるため、
                </p>
                <BlockMath math="F(a) = G(a) + C = 0 \implies C = -G(a)" />
                <p>
                    となる。
                </p>
                <p className="mt-4">
                    関数 <InlineMath math="F(x)" /> の全貌が <InlineMath math="F(x) = G(x) - G(a)" /> と決定された。ここで目的である積分区間の右端点 <InlineMath math="x = b" /> を代入すると、
                </p>
                <BlockMath math="\int_a^b f(t) dt = F(b) = G(b) - G(a)" />
                <p>
                    が得られ、定理は証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このたった一つの定理により、人類は「無限に分割して極限をとる」という膨大な計算を行わずとも、単に逆微分のルールを知っているだけで、複雑な図形の面積や体積を一瞬で算出する力を手に入れました。
                ここまでのChapterで構築された「上限・極限・連続・微分・ダルブー和」という実解析のすべての成果が、この「基本定理」という一本の美しい線に収束し、結実したのです。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§9.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>第1基本定理</strong>：連続関数の「定積分の上限変数関数」は微分可能であり、元の関数に戻る。<br />これは関数の連続性と積分の絶対値評価 <InlineMath math="\varepsilon-\delta" /> を用いて証明される。</li>
                    <li><strong>第2基本定理</strong>：定積分は、任意の原始関数の両端での差によって完全に計算される。<br />これは第1基本定理とラグランジュの平均値定理（導関数が等しい関数は定数差）による系である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
