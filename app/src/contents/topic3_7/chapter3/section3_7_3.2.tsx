import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BasicPropertiesOfExpectation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                期待値をルベーグ積分として定義したことで、その計算や評価のための強力な道具が手に入りました。
                本節では、期待値が備える線形性や単調性といった基本性質に加え、確率論の極限定理を支える主要な収束定理と不等式について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">線形性と単調性</h2>

            <p className="leading-relaxed">
                期待値は、和やスカラー倍を保存する「線形的な作用素」としての側面を持ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-1 (期待値の基本性質)">
                <p>
                    <InlineMath math="X, Y" /> を確率変数とし、<InlineMath math="a, b \in \mathbb{R}" /> を定数とする。次の性質が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li><b>線形性</b>：<InlineMath math="E[aX + bY] = aE[X] + bE[Y]" /></li>
                    <li><b>単調性</b>：<InlineMath math="X \leq Y \text{ a.s.}" /> ならば <InlineMath math="E[X] \leq E[Y]" /></li>
                    <li><b>絶対値の評価</b>：<InlineMath math="|E[X]| \leq E[|X|]" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    これらの性質は、積分の線形性と単調性そのものである。
                    まず単純関数において集合の分解を用いて示し、それらの極限として一般の可測関数に対して拡張する。
                    3. については、<InlineMath math="-|X| \leq X \leq |X|" /> に対して 2. の単調性を適用することで導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                特に極限操作と期待値の順序交換が許される条件は、収束定理として整理されています。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-2 (単調収束定理（確率論版）)">
                <p>
                    非負の確率変数列 <InlineMath math="\{X_n\}" /> が <InlineMath math="0 \leq X_n \nearrow X \text{ a.s.}" /> を満たすならば、
                    <BlockMath math="\lim_{n \to \infty} E[X_n] = E[X]" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この定理はルベーグ積分における単調収束定理そのものである（詳細は Topic 3-3 参照）。
                    本章での定義に従えば、まず単純関数列に対する成立を示し、次に一般の非負可測関数に対して、それを近似する単純関数列の二重極限の順位交換可能性（測度の連続性に基づく）を用いることで導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 3.2-3 (支配収束定理（確率論版）)">
                <p>
                    確率変数列 <InlineMath math="\{X_n\}" /> が <InlineMath math="X_n \to X \text{ a.s.}" /> であり、
                    ある可積分な確率変数 <InlineMath math="Y \in L^1" /> に対して <InlineMath math="|X_n| \leq Y \text{ a.s.}" /> が成り立つならば、
                    <BlockMath math="\lim_{n \to \infty} E[X_n] = E[X]" />
                    となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ルベーグ積分における支配収束定理の帰結である。
                    不等式 <InlineMath math="|X_n| \leq Y" /> かつ <InlineMath math="E[Y] < \infty" /> という条件により、ファトゥの補題を <InlineMath math="Y \pm X_n" /> に適用することで、
                    <BlockMath math="E[\liminf (Y \pm X_n)] \leq \liminf E[Y \pm X_n]" />
                    から期待値の線形性を用いて極限と積分の順序交換が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="注釈：ほとんど確実に（a.s.）と単調増加の記法">
                <p>
                    確率論では、収束や不等式において<b>「ほとんど確実に（almost surely, a.s.）」</b>という言葉が頻出します。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><b>a.s.</b>：ある性質が、確率 1 の事象（例外となる集合の確率が 0）において成り立つことを意味します。測度論の「ほとんど至る所（a.e.）」と同じ概念です。</li>
                    <li><InlineMath math="X_n \nearrow X" />：すべての <InlineMath math="n" /> に対して <InlineMath math="X_n(\omega) \le X_{n+1}(\omega)" /> であり、かつ <InlineMath math="\lim_{n \to \infty} X_n(\omega) = X(\omega)" /> となることを表します。</li>
                </ul>
                <p>
                    これらを組み合わせた <InlineMath math="X_n \nearrow X \text{ a.s.}" /> は、「確率 0 の例外を除いて、各点で単調に収束する」ことを意味しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本的な不等式</h2>

            <p className="leading-relaxed">
                期待値の情報から「事象が起こる確率」の上限を見積もる不等式は、確率論の理論構成において極めて重要です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-4 (マルコフの不等式)">
                <p>
                    非負の確率変数 <InlineMath math="X \geq 0" /> と任意の定数 <InlineMath math="a > 0" /> に対して、次が成り立つ：
                    <BlockMath math="P(X \geq a) \leq \frac{E[X]}{a}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    事象 <InlineMath math="\{X \geq a\}" /> の指示関数 <InlineMath math="1_{\{X \geq a\}}" /> を用いると、
                    常に次が成り立つ：
                    <BlockMath math="X \geq a \cdot 1_{\{X \geq a\}}" />
                    この両辺の期待値をとると、単調性より
                    <BlockMath math="E[X] \geq E[a \cdot 1_{\{X \geq a\}}] = a P(X \geq a)" />
                    となり、<InlineMath math="a" /> で割ることで題意の不等式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                マルコフの不等式を、平均からの乖離の 2 乗に適用したものが、有名なチェビシェフの不等式です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-5 (チェビシェフの不等式)">
                <p>
                    分散 <InlineMath math="\mathrm{Var}(X) = \sigma^2" /> を持つ確率変数 <InlineMath math="X" /> に対して、任意の <InlineMath math="a > 0" /> で次が成り立つ：
                    <BlockMath math="P(|X - E[X]| \geq a) \leq \frac{\mathrm{Var}(X)}{a^2}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    非負の確率変数 <InlineMath math="Y = (X - E[X])^2" /> と定数 <InlineMath math="a^2 > 0" /> に対してマルコフの不等式を適用する。
                    <BlockMath math="P(Y \geq a^2) \leq \frac{E[Y]}{a^2}" />
                    ここで <InlineMath math="P(Y \geq a^2) = P(|X - E[X]| \geq a)" /> であり、
                    <InlineMath math="E[Y] = E[(X - E[X])^2] = \mathrm{Var}(X)" /> であるから、代入により不等式を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-1 (チェビシェフ不等式の応用)">
                <p>
                    ある試験結果の平均が 50 点、標準偏差が 10 点であったとする。
                    「80 点以上または 20 点以下（平均から 3 標準偏差以上離れている）」の人の割合がどれほどかを、分布の形を知らずに見積もってみよう。
                </p>
                <p>
                    <InlineMath math="a = 30" /> としてチェビシェフの不等式を適用すると：
                    <BlockMath math="P(|X - 50| \geq 30) \leq \frac{10^2}{30^2} = \frac{100}{900} \approx 0.111" />
                    つまり、試験の分布がどのような形であれ、平均から 3 標準偏差以上離れる割合は 11.1％ 以下であることが保証される。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                これらの基本性質によって、期待値は単なる「平均」を超えて、確率変数の分布を評価するための強力な尺度となりました。
                次節では、期待値を用いて定義されるもう一つの重要な指標である、分散とその拡張について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>期待値は線形性を持ち、独立性に関わらず和の期待値は期待値の和に等しい。</li>
                    <li>単調収束定理や支配収束定理により、極限と期待値の順序交換の条件が明確化される。</li>
                    <li>マルコフの不等式は、平均値から事象の確率の上限を見積もる基礎的な評価式である。</li>
                    <li>チェビシェフの不等式は、平均からの乖離が一定以上になる確率を、分散のみを用いて評価する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
