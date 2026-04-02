import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EisensteinCriterion() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                有理数体 <InlineMath math="\mathbb{Q}" /> や一般の分数体において、与えられた多項式が因数分解できるか（既約かどうか）を判定するのは一般に難しい問題です。しかし、特定の形をした多項式に対して、素数の性質を使って一発で既約性を見抜く非常に強力な判定法が存在します。それが<b>アイゼンシュタインの判定法（Eisenstein's Criterion）</b>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アイゼンシュタインの判定法</h2>

            <p className="leading-relaxed">
                この判定法は、多項式の係数が特定の素元 <InlineMath math="p" /> でどれくらい割り切れるかをチェックするだけで機能します。
            </p>

            <ContentBox type="theorem" title="Theorem 8.4-1 (アイゼンシュタインの判定法)">
                <p>
                    <InlineMath math="D" /> を UFD とし、<InlineMath math="K" /> をその分数体とする。多項式
                </p>
                <BlockMath math="\begin{aligned} f(x) = a_n x^n + a_{n-1} x^{n-1} + \dots &+ a_1 x + a_0 \\ &(a_i \in D, a_n \neq 0, n \geq 1) \end{aligned}" />
                <p>
                    について、<InlineMath math="D" /> のある素元 <InlineMath math="p" /> が存在して、以下の 3 つの条件をすべて満たすとする。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 font-bold">
                    <li><InlineMath math="p \nmid a_n" />（最高次の係数は <InlineMath math="p" /> で割り切れない）</li>
                    <li><InlineMath math="p \mid a_i" /> for all <InlineMath math="0 \leq i \leq n-1" />（それ以外のすべての係数は <InlineMath math="p" /> で割り切れる）</li>
                    <li><InlineMath math="p^2 \nmid a_0" />（定数項は <InlineMath math="p^2" /> では割り切れない）</li>
                </ol>
                <p className="mt-2">
                    このとき、<InlineMath math="f(x)" /> は <InlineMath math="K[x]" /> において既約である。<br />
                    （もし <InlineMath math="f(x)" /> がさらに原始多項式であれば、<InlineMath math="D[x]" /> においても既約である）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    もし <InlineMath math="f(x)" /> が <InlineMath math="K[x]" /> で既約でないとすると、ガウスの補題（Theorem 8.2-2）により、<InlineMath math="D[x]" /> において真の因数分解 <InlineMath math="f(x) = g(x)h(x)" /> を持つ。
                </p>
                <BlockMath math="g(x) = b_r x^r + \dots + b_0, \quad h(x) = c_s x^s + \dots + c_0" />
                <p>
                    （<InlineMath math="r \geq 1, s \geq 1, r+s = n" />）とする。
                </p>
                <p>
                    この式を、剰余環 <InlineMath math="D/(p)" /> 上の多項式環 <InlineMath math="(D/(p))[x]" /> に射影して考える（係数を <InlineMath math="p" /> を法として考える）。<br />
                    条件 (1) と (2) より、<InlineMath math="\bmod p" /> において <InlineMath math="f(x)" /> は最高次以外の係数がすべて <InlineMath math="0" /> になるため、
                </p>
                <BlockMath math="\bar{f}(x) = \bar{a}_n x^n \quad (\bar{a}_n \neq 0)" />
                <p>
                    となる。一方、<InlineMath math="\bar{f}(x) = \bar{g}(x)\bar{h}(x)" /> である。<InlineMath math="(D/(p))[x]" /> は整域なので、右辺が単項式 <InlineMath math="x^n" /> の定数倍になるためには、<InlineMath math="\bar{g}(x)" /> と <InlineMath math="\bar{h}(x)" /> も最高次以外の項を持たないはずである。<br />
                    すなわち、ある定数 <InlineMath math="\bar{u}, \bar{v}" /> があって
                </p>
                <BlockMath math="\bar{g}(x) = \bar{u} x^r, \quad \bar{h}(x) = \bar{v} x^s" />
                <p>
                    となる（定数項が <InlineMath math="0" /> になるということ）。
                </p>
                <p>
                    これが意味するのは、元の多項式 <InlineMath math="g(x)" /> の定数項 <InlineMath math="b_0" /> は <InlineMath math="p" /> で割り切れ（<InlineMath math="p \mid b_0" />）、<InlineMath math="h(x)" /> の定数項 <InlineMath math="c_0" /> も <InlineMath math="p" /> で割り切れる（<InlineMath math="p \mid c_0" />）ということである。
                </p>
                <p>
                    しかし、<InlineMath math="f(x) = g(x)h(x)" /> の定数項を展開すると <InlineMath math="a_0 = b_0 c_0" /> である。<br />
                    <InlineMath math="b_0" /> と <InlineMath math="c_0" /> が両方とも <InlineMath math="p" /> を素因数に持つならば、<InlineMath math="a_0" /> は <InlineMath math="p \cdot p = p^2" /> で割り切れるはずである（<InlineMath math="p^2 \mid a_0" />）。
                </p>
                <p>
                    これは条件 (3)「<InlineMath math="p^2 \nmid a_0" />」に完全に矛盾する。したがって、<InlineMath math="f(x)" /> は <InlineMath math="K[x]" /> で既約でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アイゼンシュタイン判定法の応用</h2>

            <p className="leading-relaxed">
                判定法自体はシンプルですが、変数変換などの工夫を組み合わせることで、非常に多くの多項式の既約性を示すことができます。
            </p>

            <ContentBox type="example" title={<span>Example 8.4-1 (<InlineMath math="x^4 - 2" /> の既約性)</span>}>
                <p>
                    有理数体 <InlineMath math="\mathbb{Q}" /> 上で <InlineMath math="f(x) = x^4 - 2" /> の既約性を判定する。<br />
                    素数 <InlineMath math="p = 2" /> を選ぶ。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>最高次 <InlineMath math="x^4" /> の係数は 1。<InlineMath math="2 \nmid 1" /> なので条件 (1) を満たす。</li>
                    <li>他の項の係数（<InlineMath math="x^3, x^2, x" /> は 0、定数項は -2）はすべて 2 の倍数。<InlineMath math="2 \mid 0, 2 \mid -2" /> なので条件 (2) を満たす。</li>
                    <li>定数項は -2 であり、<InlineMath math="p^2 = 4" /> の倍数ではない。<InlineMath math="4 \nmid -2" /> なので条件 (3) を満たす。</li>
                </ul>
                <p className="mt-2">
                    したがって、アイゼンシュタインの判定法により <InlineMath math="x^4 - 2" /> は <InlineMath math="\mathbb{Q}[x]" /> で既約である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次の例は、一見するとアイゼンシュタインの判定法が使えないように見えて、変数変換によって適用可能になる古典的かつ有名な応用例です。
            </p>

            <ContentBox type="example" title="Example 8.4-2 (円分多項式の既約性)">
                <p>
                    <InlineMath math="p" /> を素数とする。<InlineMath math="x^p - 1" /> を因数分解すると <InlineMath math="(x-1)(x^{p-1} + x^{p-2} + \dots + x + 1)" /> となる。この2つ目の因数
                </p>
                <BlockMath math="\Phi_p(x) = x^{p-1} + x^{p-2} + \dots + x + 1" />
                <p>
                    を<b>円分多項式</b>と呼ぶ。この <InlineMath math="\Phi_p(x)" /> が <InlineMath math="\mathbb{Q}[x]" /> 上で既約であることを示す。
                </p>
                <p>
                    このままでは係数がすべて 1 なので判定法は使えないが、<InlineMath math="y = x - 1" /> という変換（すなわち <InlineMath math="x = y + 1" /> を代入）を考える。<InlineMath math="f(x)" /> が既約であることと <InlineMath math="f(y+1)" /> が既約であることは同値である。
                </p>
                <BlockMath math="\begin{aligned} Phi_p(y+1) &= \frac{(y+1)^p - 1}{(y+1) - 1} \\ &= \frac{1}{y} \left( y^p + \binom{p}{1}y^{p-1} + \dots + \binom{p}{p-1}y \right) \\ &= y^{p-1} + \binom{p}{1}y^{p-2} + \dots + \binom{p}{p-1} \end{aligned}" />
                <p>
                    ここで、二項係数 <InlineMath math="\binom{p}{k} = \frac{p!}{k!(p-k)!}" />（<InlineMath math="1 \leq k \leq p-1" />）は、分子に素数 <InlineMath math="p" /> を含み分母は <InlineMath math="p" /> 未満の数しか持たないため、必ず <InlineMath math="p" /> の倍数になる。
                </p>
                <p>
                    したがって、<InlineMath math="\Phi_p(y+1)" /> に素数 <InlineMath math="p" /> でアイゼンシュタインの判定法を適用すると、
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>最高次 <InlineMath math="y^{p-1}" /> の係数は 1 で <InlineMath math="p \nmid 1" />。</li>
                    <li>それ以外の係数 <InlineMath math="\binom{p}{k}" /> はすべて <InlineMath math="p" /> の倍数。</li>
                    <li>定数項は <InlineMath math="\binom{p}{p-1} = p" /> であり、<InlineMath math="p^2" /> の倍数ではない。</li>
                </ul>
                <p className="mt-2">
                    見事にすべての条件を満たすため、<InlineMath math="\Phi_p(y+1)" /> は既約。よって <InlineMath math="\Phi_p(x)" /> も既約である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (体論への接続)">
                <p>
                    アイゼンシュタインの判定法によって多項式が既約であることが証明されると、例えば <InlineMath math="\mathbb{Q}[x]/(x^4-2)" /> は体になることがわかります（既約多項式が生成するイデアルは極大イデアルになるため）。<br />
                    これは <InlineMath math="\mathbb{Q}(\sqrt[4]{2})" /> という体の拡大を構成することと同じであり、トピック 3-10 の「体論」や「ガロア理論」において、代数拡大や最小多項式の性質を調べるための基礎的な道具として無数に登場します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多項式 <InlineMath math="a_n x^n + \dots + a_0" /> に対して、「最高次が <InlineMath math="p" /> の倍数でない」「残りが <InlineMath math="p" /> の倍数」「定数項が <InlineMath math="p^2" /> の倍数でない」を満たす素元 <InlineMath math="p" /> があれば、その多項式は既約である（<b>アイゼンシュタインの判定法</b>）。</li>
                    <li>この定理はガウスの補題と <InlineMath math="\bmod p" /> の還元を用いて証明される。</li>
                    <li><InlineMath math="x=y+1" /> のような変数変換を行うことで、円分多項式などの重要な多項式の既約性も証明できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
