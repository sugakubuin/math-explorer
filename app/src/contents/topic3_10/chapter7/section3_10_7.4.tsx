import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AbelRuffiniTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「5次以上の一般方程式には解の公式が存在しない」。代数学の歴史において最も有名なこの結論を、これまでに築き上げたガロア理論の道具をすべて結集させて証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般の n 次方程式とそのガロア群</h2>

            <p>
                特定の係数を持った方程式ではなく、「文字係数」を持った最も一般的な方程式を考えます。
            </p>

            <ContentBox type="definition" title="Definition 7.4-1 (一般の n 次方程式)">
                <p>
                    <InlineMath math="n" /> 個の独立な変数 <InlineMath math="e_1, e_2, \ldots, e_n" /> を係数に持つ方程式
                </p>
                <BlockMath math="x^n - e_1 x^{n-1} + e_2 x^{n-2} - \cdots + (-1)^n e_n = 0" />
                <p>
                    を、<strong>一般の <InlineMath math="n" /> 次方程式</strong>という。この方程式の解の公式が存在するならば、任意の具体的な数係数の方程式はそこに値を代入するだけで解けることになる。
                </p>
            </ContentBox>

            <p>
                この一般方程式のガロア群は、考え得る限り最大の群になります。
            </p>

            <ContentBox type="proposition" title="Proposition 7.4-1 (一般 n 次方程式のガロア群)">
                <p>
                    一般の <InlineMath math="n" /> 次方程式の基礎体 <InlineMath math="F = \mathbb{Q}(e_1, \ldots, e_n)" /> 上のガロア群は、<InlineMath math="n" /> 次対称群 <InlineMath math="S_n" /> に同型である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    方程式の <InlineMath math="n" /> 個の根を <InlineMath math="x_1, \ldots, x_n" /> とし、これらを全く独立な変数とみなす。<InlineMath math="K = \mathbb{Q}(x_1, \ldots, x_n)" /> とする。
                </p>
                <p>
                    根と係数の関係より、係数 <InlineMath math="e_k" /> は根 <InlineMath math="x_i" /> たちの <InlineMath math="k" /> 次の<strong>基本対称式</strong>である。
                </p>
                <BlockMath math="e_1 = \sum x_i, \quad e_2 = \sum_{i<j} x_i x_j, \quad \dots \quad , e_n = x_1 x_2 \cdots x_n" />
                <p>
                    <InlineMath math="K" /> に対して、根の置換を作用させる対称群 <InlineMath math="S_n" /> は自然に自己同型群として作用する。対称式の定義から明らかなように、<InlineMath math="S_n" /> の任意の置換は基本対称式 <InlineMath math="e_k" /> の値を一切変えない（固定する）。
                </p>
                <p>
                    対称式論の基本定理（ニュートン等の定理）によれば、有理式の中で <InlineMath math="S_n" /> によって不変なもの（対称有理式）は、基本対称式 <InlineMath math="e_1, \ldots, e_n" /> の有理式として一意に表される。すなわち、<InlineMath math="S_n" /> による <InlineMath math="K" /> の固定体は <InlineMath math="K^{S_n} = \mathbb{Q}(e_1, \ldots, e_n) = F" /> である。
                </p>
                <p>
                    アルティンの定理（Theorem 5.2-1）より、拡大 <InlineMath math="K/F" /> はガロア拡大であり、そのガロア群は <InlineMath math="\mathrm{Gal}(K/F) = S_n" /> となる。<InlineMath math="K" /> は根 <InlineMath math="x_1, \dots, x_n" /> をすべて含むため、一般 <InlineMath math="n" /> 次方程式の分解体である。よって方程式のガロア群は <InlineMath math="S_n" /> に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アーベル-ルフィニの定理</h2>

            <p>
                準備はすべて整いました。ガロアの可解性定理、一般方程式のガロア群、そして対称群の可解性を組み合わせることで、最終的な結論が導かれます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (アーベル-ルフィニの定理)">
                <p>
                    <InlineMath math="n \geq 5" /> のとき、一般の <InlineMath math="n" /> 次方程式は根号を用いて解くことができない。
                </p>
                <p>
                    すなわち、5次以上の一般方程式に対する「解の公式（四則演算と冪根のみの組み合わせ）」は存在しない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal list-inside mt-2 mb-2">
                    <li>Proposition 7.4-1 より、一般 <InlineMath math="n" /> 次方程式のガロア群は対称群 <InlineMath math="S_n" /> である。</li>
                    <li>Theorem 7.1-1 より、<InlineMath math="n \geq 5" /> のとき、対称群 <InlineMath math="S_n" /> は可解群ではない（非可換単純群 <InlineMath math="A_5" /> を含むため）。</li>
                    <li>Theorem 7.3-1（ガロアの可解性定理）より、方程式が根号によって解けることと、そのガロア群が可解群であることは同値である。</li>
                </ol>
                <p>
                    ガロア群 <InlineMath math="S_n" /> が可解群ではないため、一般の <InlineMath math="n" /> 次方程式は根号を用いて解くことができない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                一般公式が存在しないだけでなく、具体的な数係数の 5 次方程式であっても、根号では絶対に解けないものが多数存在します。
            </p>

            <ContentBox type="example" title="Example 7.4-1 (根号で解けない具体的な 5 次方程式)">
                <p>
                    有理数係数の 5 次方程式 <InlineMath math="f(x) = x^5 - 4x + 2 = 0" /> を考える。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="p=2" /> でアイゼンシュタインの判定法を用いると、<InlineMath math="f(x)" /> は <InlineMath math="\mathbb{Q}" /> 上既約である。よってガロア群 <InlineMath math="G" /> は 5 つの根に推移的に作用し、5 を割り切る位数をもつ元（5-サイクル）を含む。</li>
                    <li>微分 <InlineMath math="f'(x) = 5x^4 - 4" /> を調べて増減表を書くと、実数根がちょうど 3 つ、複素数根（共役ペア）が 2 つであることがわかる。</li>
                    <li>ガロア群における複素共役写像は、2つの虚数根だけを入れ替え、3つの実数根を固定する互換（2-サイクル）として作用する。</li>
                </ul>
                <p>
                    群論の事実として、「素数 <InlineMath math="p" /> に対し、<InlineMath math="S_p" /> の部分群が <InlineMath math="p" />-サイクルと互換を両方含めば、その群は <InlineMath math="S_p" /> 全体に一致する」という定理がある。
                </p>
                <p>
                    したがって、この方程式のガロア群は <InlineMath math="S_5" /> そのものである。<InlineMath math="S_5" /> は可解群ではないため、この方程式 <InlineMath math="x^5 - 4x + 2 = 0" /> の解は、いかなる有理数の四則演算と冪根を組み合わせても絶対に書き表すことができない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (ガロア理論の現代的意義)">
                <p>
                    「5次方程式が解けない」というネガティブな結論は、ガロア理論の単なる応用の1つに過ぎません。ガロアが切り開いた「方程式の根の背後にある対称性を群として捉える」という思想は、数学全体に革命をもたらしました。
                </p>
                <p>
                    今日、ガロア理論は代数幾何学（図形を代数的に扱う）、数論（素数や方程式の整数解の探求）、さらには理論物理学や暗号理論に至るまで、現代数学のあらゆる分野で最も重要な基礎言語として生き続けています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>文字係数を持つ一般 <InlineMath math="n" /> 次方程式のガロア群は、対称群 <InlineMath math="S_n" /> と一致する。</li>
                    <li><InlineMath math="n \geq 5" /> のとき <InlineMath math="S_n" /> は可解群ではないため、一般 <InlineMath math="n" /> 次方程式に対する解の公式は存在しない（<strong>アーベル-ルフィニの定理</strong>）。</li>
                    <li>具体的な有理数係数の 5 次方程式でも、ガロア群が <InlineMath math="S_5" /> となり根号で解けないものが容易に構成できる（例：<InlineMath math="x^5 - 4x + 2 = 0" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
