import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfCompleteMetricSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                完備性は解析学において強力な武器となります。
                ここでは、私たちが頻繁に利用する主要な空間が完備であることを確認し、その威力を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ユークリッド空間の完備性</h2>

            <p>
                実数全体の集合 <InlineMath math="\mathbb{R}" /> の完備性は、実数の連続性公理と同値な非常に基本的な事実です。
                これが多次元のユークリッド空間にも遺伝することを確認します。
            </p>

            <ContentBox type="theorem" title="Theorem 10.2-1 (R^n の完備性)">
                <p>
                    ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> は、通常の距離に関して完備である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> 内のコーシー列 <InlineMath math="\{\mathbf{x}_k\}" /> をとる。ただし <InlineMath math="\mathbf{x}_k = (x_{k,1}, \dots, x_{k,n})" /> とする。
                    各成分について、 <InlineMath math="|x_{k,i} - x_{m,i}| \leq d(\mathbf{x}_k, \mathbf{x}_m)" /> が成り立つため、
                    各成分の数列 <InlineMath math="\{x_{k,i}\}_{k=1}^\infty" /> は <InlineMath math="\mathbb{R}" /> におけるコーシー列となる。
                </p>
                <p className="mt-4">
                    <InlineMath math="\mathbb{R}" /> の完備性より、各成分は極限 <InlineMath math="a_i = \lim_{k\to\infty} x_{k,i}" /> を持つ。
                    ベクトル <InlineMath math="\mathbf{a} = (a_1, \dots, a_n)" /> を定義すると、
                    <BlockMath math="d(\mathbf{x}_k, \mathbf{a}) = \sqrt{\sum_{i=1}^n (x_{k,i} - a_i)^2}" />
                    は <InlineMath math="k \to \infty" /> で 0 に収束する。よって <InlineMath math="\mathbb{R}^n" /> は完備である。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">関数空間の完備性</h2>

            <p>
                個々の点だけでなく、関数そのものを「点」とみなす関数空間においても、完備性は重要な関心事です。
                特に、関数の収束様式（一様収束か各点収束か）が完備性に直結します。
            </p>

            <ContentBox type="example" title="Example 10.2-1 (連続関数空間 C[a, b])">
                <p>
                    有限閉区間上の連続関数全体の集合 <InlineMath math="C[a, b]" /> に、一様距離
                    <BlockMath math="d_\infty(f, g) = \max_{x \in [a, b]} |f(x) - g(x)|" />
                    を導入した空間は完備である。
                </p>
                <p className="mt-4">
                    この完備性は、「連続関数の一様収束極限は再び連続関数である」という解析学の重要な定理に対応しています。
                    もし一様距離ではなく各点収束に近い距離を用いると、連続関数の極限が不連続になる可能性があり、空間は完備ではなくなります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 10.2-2 (ヒルベルト空間 l^2)">
                <p>
                    2乗可和な数列全体の集合 <InlineMath math="\ell^2 = \{ \{a_n\} \mid \sum |a_n|^2 < \infty \}" /> も、自然な距離に関して完備です。
                    これは無限次元のユークリッド空間とも呼べる空間であり、量子力学などの物理学や信号処理においても極めて重要な役割を果たします。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="バナッハ空間とヒルベルト空間">
                <p>
                    完備なノルム空間を<strong>バナッハ空間</strong>、完備な内積空間を<strong>ヒルベルト空間</strong>と呼びます。
                    これらは現代解析学の主役であり、距離空間における完備性の議論がその土台となっています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§10.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>有限次元</strong>： <InlineMath math="\mathbb{R}^n" /> は常に完備。成分ごとの収束に帰着できる。</li>
                    <li><strong>無限次元</strong>： 関数空間 <InlineMath math="C[a, b]" /> なども適切な距離（一様距離）のもとで完備。</li>
                    <li><strong>数学的意義</strong>： 完備性は、近似計算や極限操作の結果が「同じ世界」に留まることを保証する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
