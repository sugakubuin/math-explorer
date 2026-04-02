import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LeibnizIntegralRule() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「積分と微分の順序入れ替え」という、応用数学や物理学（特に解析力学や電磁気学）において最も頻繁に用いられる強力な計算テクニックを厳密に正当化します。「変数 <InlineMath math="x" /> について積分して得られた関数を、別のパラメータ <InlineMath math="t" /> で微分したい」とき、その微分記号 <InlineMath math="\frac{\partial}{\partial t}" /> は積分記号 <InlineMath math="\int" /> の内側へそのまま貫通してよいのでしょうか？
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分記号下の微分（ライプニッツ則）有限区間版</h2>

            <p>
                まずは区間が有限 <InlineMath math="[a, b]" /> の場合です。これについては、偏導関数の一様連続性を用いることで、比較的シンプルな仮定の下で成立することが保証されています。
            </p>

            <ContentBox type="theorem" title="Theorem 10.4-1 (ライプニッツ則：有限区間)">
                <p>
                    長方形領域 <InlineMath math="D = \{ (x, t) \mid a \leq x \leq b, \alpha \leq t \leq \beta \}" /> 上で定義された2変数関数 <InlineMath math="f(x, t)" /> とそれに関するパラメータ <InlineMath math="t" /> の偏導関数 <InlineMath math="\frac{\partial f}{\partial t}(x, t)" /> が、<InlineMath math="D" /> 上でともに<strong>連続</strong>であるとする。
                </p>
                <p className="mt-4">
                    このとき、積分関数 <InlineMath math="F(t) = \int_a^b f(x, t) dx" /> は区間 <InlineMath math="[\alpha, \beta]" /> 上で <InlineMath math="t" /> について微分可能であり、その導関数は次のように積分の中に微分記号を入れた形で与えられる。
                </p>
                <BlockMath math="\frac{d}{dt} F(t) = \frac{d}{dt} \left( \int_a^b f(x, t) dx \right) = \int_a^b \frac{\partial f}{\partial t}(x, t) dx" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    微分商の定義から極限を計算する。<InlineMath math="\Delta t \neq 0" /> の増分ベクトルを考える。積分の線形性から、
                </p>
                <BlockMath math="\begin{aligned} \frac{F(t + \Delta t) - F(t)}{\Delta t} &= \frac{1}{\Delta t} \left( \int_a^b f(x, t+\Delta t) dx - \int_a^b f(x, t) dx \right) \\ &= \int_a^b \frac{f(x, t+\Delta t) - f(x, t)}{\Delta t} dx \end{aligned}" />
                <p>
                    となる。
                </p>
                <p className="mt-4">
                    ここで、被積分関数の分子にラグランジュの平均値定理（微分に関する平均値定理、<InlineMath math="t" /> に関して適用）を用いる。各 <InlineMath math="x" /> および <InlineMath math="t" /> に対して、ある <InlineMath math="\theta \in (0, 1)" /> が存在して
                </p>
                <BlockMath math="\frac{f(x, t+\Delta t) - f(x, t)}{\Delta t} = \frac{\partial f}{\partial t}(x, t + \theta \Delta t)" />
                <p>
                    と書ける。
                </p>
                <p className="mt-4">
                    次に、<InlineMath math="\frac{\partial f}{\partial t}" /> が有界閉領域 <InlineMath math="D" /> 上で連続であるという仮定を強力に用いる。ハイネ・カントールの定理により、<InlineMath math="D" /> 上の連続関数は<strong>一様連続</strong>である。<br />
                    すなわち、十分小さな <InlineMath math="|\Delta t|" /> を選べば、積分区間のすべての <InlineMath math="x" /> において<strong>一斉に（一様に）</strong>、関数のずれを <InlineMath math="\varepsilon" /> 以下に抑えることができる。
                </p>
                <BlockMath math="\left| \frac{\partial f}{\partial t}(x, t + \theta \Delta t) - \frac{\partial f}{\partial t}(x, t) \right| < \frac{\varepsilon}{b - a}" />
                <p className="mt-4">
                    最終目的である微分の極限との差を絶対値不等式（Proposition 9.3-4）で評価する。
                </p>
                <BlockMath math="\begin{aligned} &\left| \frac{F(t + \Delta t) - F(t)}{\Delta t} - \int_a^b \frac{\partial f}{\partial t}(x, t) dx \right| \\ &= \left| \int_a^b \left( \frac{\partial f}{\partial t}(x, t + \theta \Delta t) - \frac{\partial f}{\partial t}(x, t) \right) dx \right| \\ &\leq \int_a^b \left| \frac{\partial f}{\partial t}(x, t + \theta \Delta t) - \frac{\partial f}{\partial t}(x, t) \right| dx \\ &< \int_a^b \frac{\varepsilon}{b - a} dx = \varepsilon \end{aligned}" />
                <p className="mt-4">
                    これはまさに <InlineMath math="\Delta t \to 0" /> の極限が積分記号の内部にそのまま移動し、<InlineMath math="\int \frac{\partial f}{\partial t} dx" /> に一致することを示している。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">広義積分のライプニッツ則（無限区間版）</h2>

            <p>
                さて、本章の主眼である「広義積分（無限区間）」の場合、積分区間が関数の定義域である無限の彼方にまで及ぶため、ハイネ・カントールの定理を用いた「全体が一様に<InlineMath math="\varepsilon" />に収束する（一様連続）」という論法が通用しなくなります。
                無限の積分と微分の順序を入れ替えるためには、Chapter 7で関数列の極限順序の入れ替えで重要となった「<strong>一様絶対収束</strong>」の概念が必要になります。
            </p>

            <ContentBox type="theorem" title="Theorem 10.4-2 (広義積分のライプニッツ則)">
                <p>
                    領域 <InlineMath math="[a, \infty) \times [\alpha, \beta]" /> 上の関数 <InlineMath math="f(x, t)" /> および <InlineMath math="\frac{\partial f}{\partial t}(x, t)" /> が連続であるとし、以下の2条件が満たされるとする。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li>
                        ある <InlineMath math="t_0 \in [\alpha, \beta]" /> に対して、広義積分 <InlineMath math="\int_a^\infty f(x, t_0) dx" /> が収束する。
                    </li>
                    <li>
                        偏導関数の広義積分 <InlineMath math="\int_a^\infty \frac{\partial f}{\partial t}(x, t) dx" /> が、<InlineMath math="t \in [\alpha, \beta]" /> に対して<strong>一様絶対に収束</strong>する。（パラメータが動いても、共通の積分のしっぽの評価 <InlineMath math="\varepsilon" /> で抑え込める優関数 <InlineMath math="M(x)" /> が存在すること）
                    </li>
                </ol>
                <p className="mt-4">
                    このとき、元の広義積分 <InlineMath math="F(t) = \int_a^\infty f(x, t) dx" /> も一様に収束して連続関数となり、かつ微分記号を積分の内側に入れてよい。
                </p>
                <BlockMath math="\frac{d}{dt} \int_a^\infty f(x, t) dx = \int_a^\infty \frac{\partial f}{\partial t}(x, t) dx" />
            </ContentBox>
            <p>
                ※ 関数列の極限と同様、元の関数の収束よりも「導関数の（一様）収束」が重要である、という構造が保たれていることに注目してください。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例：ガンマ関数とガウス積分の計算</h2>

            <p>
                このライプニッツ則の威力は絶大です。高校数学で「原始関数が絶対に求まらない」と教えられた関数（<InlineMath math="e^{-x^2}, \frac{\sin x}{x}" />など）の定積分（広義積分）を、魔法のような式変形で次々と評価可能にします。
            </p>

            <ContentBox type="example" title="Example 10.4-1 (パラメータ微分を用いた計算)">
                <p>
                    パラメータ <InlineMath math="t > 0" /> を持つ積分関数 <InlineMath math="I(t) = \int_0^\infty e^{-tx} dx" /> を考える。
                </p>
                <p className="mt-4">
                    普通に積分すると、<InlineMath math="I(t) = \left[ -\frac{1}{t} e^{-tx} \right]_0^\infty = \frac{1}{t}" /> である（<InlineMath math="e^{-\infty} = 0" /> より）。
                </p>
                <p className="mt-4">
                    ここで、被積分関数は <InlineMath math="O(e^{-tx})" /> で急激に減衰するため、導関数の一様収束性が保たれるとして、この等式の両辺をパラメータ <InlineMath math="t" /> で<strong>微分</strong>してみる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        左辺はライプニッツ則により積分記号内で偏微分：<br />
                        <InlineMath math="\frac{d}{dt} \int_0^\infty e^{-tx} dx = \int_0^\infty \frac{\partial}{\partial t} (e^{-tx}) dx = \int_0^\infty (-x)e^{-tx} dx" />
                    </li>
                    <li>
                        右辺は単なる関数の微分：<br />
                        <InlineMath math="\frac{d}{dt} \left( \frac{1}{t} \right) = -\frac{1}{t^2}" />
                    </li>
                </ul>
                <p className="mt-4">
                    これらを等号で結び、マイナスを消去すると、全く新しい非自明な積分の公式が得られる。
                </p>
                <BlockMath math="\int_0^\infty x e^{-tx} dx = \frac{1}{t^2}" />
                <p className="mt-4">
                    これをさらに <InlineMath math="t" /> で微分し続けると、<InlineMath math="\int_0^\infty x^2 e^{-tx} dx = \frac{2}{t^3}" />、そして一般に
                </p>
                <BlockMath math="\int_0^\infty x^n e^{-tx} dx = \frac{n!}{t^{n+1}}" />
                <p>
                    という結果が瞬時に導かれる（<InlineMath math="t=1" /> と置けば、階乗を連続の領域に一般化した<strong>ガンマ関数 <InlineMath math="\Gamma(n)" /></strong> の性質が現れている）。部分積分を延々と繰り返すことなく、微分の威力によって複雑な積分を機械的に求めた見事な応用例である。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§10.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ライプニッツ則</strong>は、「偏導関数を積分関数で微分する順序」を入れ替える操作を正当化する。</li>
                    <li>有限区間では偏導関数の連続性（一様連続性）だけで成立するが、無限区間の広義積分の場合は、偏導関数の<strong>一様絶対収束性</strong>というチェックが必要となる。</li>
                    <li>これを利用することで、原始関数を求められない複雑な関数でもパラメータから派生させて積分値を魔法のように求めることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
