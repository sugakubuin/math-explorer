import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CauchySequencesAndCompleteness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                距離空間において「収束」という概念を扱う際、その極限値が空間内に存在するかどうかは極めて重要です。
                点の集まりが「一箇所に固まっていく」という性質を、極限値を引き合いに出さずに定義するのが<strong>コーシー列</strong>の概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシー列の定義</h2>

            <p>
                列の先へ進むほど、点同士の距離がいくらでも小さくなるような点列を定義します。
            </p>

            <ContentBox type="definition" title="Definition 10.1-1 (コーシー列)">
                <p>
                    距離空間 <InlineMath math="(X, d)" /> における点列 <InlineMath math="\{x_n\}" /> が<strong>コーシー列 (Cauchy sequence)</strong> であるとは、
                    任意の <InlineMath math="\varepsilon > 0" /> に対し、ある自然数 <InlineMath math="N" /> が存在して、
                    <BlockMath math="m, n > N \implies d(x_m, x_n) < \varepsilon" />
                    が成り立つことをいう。
                </p>
            </ContentBox>

            <p className="mt-4">
                収束する点列は常にコーシー列ですが（三角不等式より容易に示せます）、その逆が成り立つかどうかは空間の性質に依存します。
            </p>

            <ContentBox type="proposition" title="Proposition 10.1-1 (コーシー列の基本性質)">
                <ul className="list-disc list-inside space-y-2">
                    <li>任意の収束点列はコーシー列である。</li>
                    <li>任意のコーシー列は有界である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="x_n \to x" /> とすると、十分大きな <InlineMath math="n, m" /> に対し <InlineMath math="d(x_n, x) < \varepsilon/2" /> かつ <InlineMath math="d(x_m, x) < \varepsilon/2" /> となる。
                    三角不等式より <InlineMath math="d(x_n, x_m) \leq d(x_n, x) + d(x, x_m) < \varepsilon" /> となり、コーシー列である。
                </p>
                <p className="mt-4">
                    (2) <InlineMath math="\varepsilon = 1" /> と固定すると、ある <InlineMath math="N" /> 以降の点はすべて <InlineMath math="x_N" /> から距離 1 以内にある。
                    それより前の有限個の点と半径 1 の球をすべて包含する大きな球をとれば、点列全体が有界であることがわかる。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完備距離空間</h2>

            <p>
                「一箇所に集まっていく点列が、必ずその場所（極限）を見つけられる」ような、穴のない空間を定義します。
            </p>

            <ContentBox type="definition" title="Definition 10.1-2 (完備性)">
                <p>
                    距離空間 <InlineMath math="X" /> において、任意のコーシー列が <InlineMath math="X" /> 内の点に収束するとき、 <InlineMath math="X" /> は<strong>完備 (Complete)</strong> であるという。
                </p>
            </ContentBox>

            <p className="mt-4">
                完備性は距離空間の最も重要な性質の一つであり、微積分や解析学が正しく機能するための基盤となります。
            </p>

            <ContentBox type="example" title="Example 10.1-1 (完備でない例：有理数体)">
                <p>
                    有理数の集合 <InlineMath math="\mathbb{Q}" /> は、通常の距離に関して完備ではありません。
                </p>
                <p className="mt-4">
                    例えば、 <InlineMath math="\sqrt{2}" /> に収束する有理数の数列（例： <InlineMath math="1, 1.4, 1.41, 1.414, \dots" />）を考えます。
                    実数全体 <InlineMath math="\mathbb{R}" /> の中ではこれは収束しますが、その極限値 <InlineMath math="\sqrt{2}" /> は有理数ではありません。
                    したがって、 <InlineMath math="\mathbb{Q}" /> だけを見ている観測者にとって、この列は「どこか一点に近づいている（コーシー列である）が、その行き先が空間内に存在しない」ように見えます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="完備性と閉集合">
                <p>
                    完備距離空間の部分集合が完備であることと、それが閉集合であることは同値です。
                    これは「閉集合は自身の極限点をすべて含む」という性質の、距離空間における具体的な現れです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§10.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>コーシー列</strong>：先へ行くほど点同士が無限に近づく列。</li>
                    <li><strong>完備性</strong>：すべてのコーシー列が空間内で「行き先」を持つ性質。空間に「穴がない」ことを意味する。</li>
                    <li><strong>距離的重要性</strong>：完備性は距離の数値に依存する性質であり、同相であっても完備性が保たれるとは限らない（距離空間固有の性質）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
