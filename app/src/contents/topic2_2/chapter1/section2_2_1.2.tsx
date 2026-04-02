import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LimitUniquenessAndRules() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では極限の <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 定義を導入しました。
                本節では、この厳密な定義に基づいて、極限値が（もし存在すれば）ただ一つであること、そして極限に関する代数的な計算規則を証明します。
                これらはすべて、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法の実践的な練習となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極限の一意性</h2>

            <ContentBox type="theorem" title="Theorem 1.2-1 (極限値の一意性)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> の <InlineMath math="x \to a" /> における極限が存在するならば、その極限値はただ一つである。
                    すなわち、<InlineMath math="\lim_{x \to a} f(x) = L_1" /> かつ <InlineMath math="\lim_{x \to a} f(x) = L_2" /> ならば <InlineMath math="L_1 = L_2" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    <InlineMath math="\lim_{x \to a} f(x) = L_1" /> かつ <InlineMath math="\lim_{x \to a} f(x) = L_2" /> と仮定する。
                    <InlineMath math="L_1 \neq L_2" /> と仮定して矛盾を導く。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="\varepsilon = \frac{|L_1 - L_2|}{2} > 0" /> とおく。
                    極限の定義より、ある <InlineMath math="\delta_1 > 0" /> が存在して、
                </p>
                <BlockMath math="0 < |x - a| < \delta_1 \implies |f(x) - L_1| < \varepsilon" />
                <p className="leading-relaxed">
                    同様に、ある <InlineMath math="\delta_2 > 0" /> が存在して、
                </p>
                <BlockMath math="0 < |x - a| < \delta_2 \implies |f(x) - L_2| < \varepsilon" />
                <p className="leading-relaxed">
                    <InlineMath math="\delta = \min(\delta_1, \delta_2)" /> とおくと、<InlineMath math="0 < |x - a| < \delta" /> なる <InlineMath math="x" /> に対して三角不等式より、
                </p>
                <BlockMath math="\begin{aligned} |L_1 - L_2| &= |L_1 - f(x) + f(x) - L_2| \\ &\leq |f(x) - L_1| + |f(x) - L_2| \\ &< \varepsilon + \varepsilon = 2\varepsilon = |L_1 - L_2| \end{aligned}" />
                <p className="leading-relaxed">
                    これは <InlineMath math="|L_1 - L_2| < |L_1 - L_2|" /> となり矛盾である。よって <InlineMath math="L_1 = L_2" /> でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                極限の一意性は、「極限値」という概念が well-defined（矛盾なく定まる）であることを保証する根本的な定理です。
                次に、極限の計算を実際に行うための基本的な道具——四則演算の極限定理——を証明します。
                これらの証明はすべて ε-δ 論法の実践的な練習となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極限の代数的性質</h2>

            <ContentBox type="theorem" title="Theorem 1.2-2 (極限の四則演算：ε-δ を用いた証明)">
                <p className="leading-relaxed">
                    <InlineMath math="\lim_{x \to a} f(x) = L" />、<InlineMath math="\lim_{x \to a} g(x) = M" /> が成り立つとき、次が成り立つ。
                </p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                    <li><InlineMath math="\lim_{x \to a} \bigl(f(x) + g(x)\bigr) = L + M" />（和の極限）</li>
                    <li><InlineMath math="\lim_{x \to a} \bigl(c \cdot f(x)\bigr) = cL" />（<InlineMath math="c" /> は定数。スカラー倍の極限）</li>
                    <li><InlineMath math="\lim_{x \to a} \bigl(f(x) \cdot g(x)\bigr) = LM" />（積の極限）</li>
                    <li><InlineMath math="M \neq 0" /> のとき、<InlineMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}" />（商の極限）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof (和の極限)">
                <p className="leading-relaxed">
                    (1) の和の極限を証明する。任意の <InlineMath math="\varepsilon > 0" /> が与えられたとする。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="\lim_{x \to a} f(x) = L" /> より、ある <InlineMath math="\delta_1 > 0" /> が存在して、
                </p>
                <BlockMath math="0 < |x - a| < \delta_1 \implies |f(x) - L| < \frac{\varepsilon}{2}" />
                <p className="leading-relaxed">
                    <InlineMath math="\lim_{x \to a} g(x) = M" /> より、ある <InlineMath math="\delta_2 > 0" /> が存在して、
                </p>
                <BlockMath math="0 < |x - a| < \delta_2 \implies |g(x) - M| < \frac{\varepsilon}{2}" />
                <p className="leading-relaxed">
                    <InlineMath math="\delta = \min(\delta_1, \delta_2)" /> とおく。<InlineMath math="0 < |x - a| < \delta" /> なる任意の <InlineMath math="x" /> に対して、三角不等式より
                </p>
                <BlockMath math="\begin{aligned} |(f(x) + g(x)) - (L + M)| &\leq |f(x) - L| + |g(x) - M| \\ &< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon \end{aligned}" />
                <p className="leading-relaxed">
                    よって <InlineMath math="\lim_{x \to a} (f(x) + g(x)) = L + M" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="proof" title="Proof (積の極限)">
                <p className="leading-relaxed">
                    (3) の積の極限を証明する。任意の <InlineMath math="\varepsilon > 0" /> が与えられたとする。
                    まず、次のように式変形する。
                </p>
                <BlockMath math="\begin{aligned} |f(x)g(x) - LM| &= |f(x)g(x) - Lg(x) + Lg(x) - LM| \\ &\leq |g(x)| \cdot |f(x) - L| + |L| \cdot |g(x) - M| \end{aligned}" />
                <p className="leading-relaxed">
                    <InlineMath math="|g(x)|" /> を上から抑える必要がある。<InlineMath math="\lim_{x \to a} g(x) = M" /> より、<InlineMath math="\varepsilon = 1" /> に対するある <InlineMath math="\delta_0 > 0" /> が存在して、
                    <InlineMath math="0 < |x - a| < \delta_0" /> ならば <InlineMath math="|g(x) - M| < 1" /> であり、三角不等式より <InlineMath math="|g(x)| < |M| + 1" /> となる。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="K = |M| + 1" /> とおく。次に、<InlineMath math="\delta_1, \delta_2 > 0" /> を
                </p>
                <BlockMath math="0 < |x - a| < \delta_1 \implies |f(x) - L| < \frac{\varepsilon}{2K}" />
                <BlockMath math="0 < |x - a| < \delta_2 \implies |g(x) - M| < \frac{\varepsilon}{2(|L| + 1)}" />
                <p className="leading-relaxed">
                    を満たすように選ぶ。<InlineMath math="\delta = \min(\delta_0, \delta_1, \delta_2)" /> とおけば、<InlineMath math="0 < |x - a| < \delta" /> なる任意の <InlineMath math="x" /> に対して、
                </p>
                <BlockMath math="\begin{aligned} |f(x)g(x) - LM| &\leq K \cdot \frac{\varepsilon}{2K} + |L| \cdot \frac{\varepsilon}{2(|L| + 1)} \\ &< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon \end{aligned}" />
                <p className="leading-relaxed">
                    よって <InlineMath math="\lim_{x \to a} f(x)g(x) = LM" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                和と積の証明で見たように、極限の四則演算の証明は「<InlineMath math="\varepsilon" /> を分配してそれぞれの罩を押さえる」というテクニックが共通しています。
                積の極限では、<InlineMath math="|g(x)|" /> を上から押さえるために <InlineMath math="\delta_0" /> を先に取るというひと工夫が必要でした。
                この種の事前評価の技法は、解析学の証明で繰り返し現れます。
            </p>
            <p className="mt-2">
                最後に、極限を求めるためのもう一つの強力なツールである「はさみうちの原理」を紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">はさみうちの原理</h2>

            <ContentBox type="theorem" title="Theorem 1.2-3 (はさみうちの原理の厳密な証明)">
                <p className="leading-relaxed">
                    ある開区間 <InlineMath math="I" />（ただし <InlineMath math="a \in I" />、<InlineMath math="x = a" /> を除く）の上で
                </p>
                <BlockMath math="g(x) \leq f(x) \leq h(x)" />
                <p className="leading-relaxed">
                    が成り立ち、かつ <InlineMath math="\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L" /> であるとする。
                    このとき、<InlineMath math="\lim_{x \to a} f(x) = L" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    任意の <InlineMath math="\varepsilon > 0" /> が与えられたとする。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="\lim_{x \to a} g(x) = L" /> より、ある <InlineMath math="\delta_1 > 0" /> が存在して、
                </p>
                <BlockMath math="\begin{aligned} 0 < |x - a| < \delta_1 &\implies |g(x) - L| < \varepsilon \\ &\iff L - \varepsilon < g(x) < L + \varepsilon \end{aligned}" />
                <p className="leading-relaxed">
                    <InlineMath math="\lim_{x \to a} h(x) = L" /> より、ある <InlineMath math="\delta_2 > 0" /> が存在して、
                </p>
                <BlockMath math="\begin{aligned} 0 < |x - a| < \delta_2 &\implies |h(x) - L| < \varepsilon \\ &\iff L - \varepsilon < h(x) < L + \varepsilon \end{aligned}" />
                <p className="leading-relaxed">
                    <InlineMath math="\delta = \min(\delta_1, \delta_2)" /> とおく。<InlineMath math="0 < |x - a| < \delta" /> なる任意の <InlineMath math="x" /> に対して、
                </p>
                <BlockMath math="L - \varepsilon < g(x) \leq f(x) \leq h(x) < L + \varepsilon" />
                <p className="leading-relaxed">
                    すなわち <InlineMath math="|f(x) - L| < \varepsilon" /> が成り立つ。
                    よって <InlineMath math="\lim_{x \to a} f(x) = L" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-1 (はさみうちの原理の応用)">
                <p className="leading-relaxed">
                    <InlineMath math="\lim_{x \to 0} x^2 \sin\frac{1}{x} = 0" /> を示す。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="x \neq 0" /> のとき、<InlineMath math="\left|\sin\frac{1}{x}\right| \leq 1" /> であるから、
                </p>
                <BlockMath math="-x^2 \leq x^2 \sin\frac{1}{x} \leq x^2" />
                <p className="leading-relaxed">
                    ここで <InlineMath math="\lim_{x \to 0} (-x^2) = 0" /> かつ <InlineMath math="\lim_{x \to 0} x^2 = 0" /> であるから、はさみうちの原理より
                    <InlineMath math="\lim_{x \to 0} x^2 \sin\frac{1}{x} = 0" /> が成り立つ。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>極限値は存在すればただ一つである（一意性、Theorem 1.2-1）。</li>
                    <li>極限の和・スカラー倍・積・商は、それぞれ計算可能である（Theorem 1.2-2）。証明はすべて <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> に基づく。</li>
                    <li>はさみうちの原理は、上下から挟まれた関数の極限を確定させる重要なツールである（Theorem 1.2-3）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
