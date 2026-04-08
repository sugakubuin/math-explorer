import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CompactOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                有限次元空間における線形写像は、すべて行列で表現でき、非常に扱いやすい性質を持っています。無限次元空間において、この「有限次元に近い」という良い性質を抽象化したものがコンパクト作用素です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コンパクト作用素の定義と例</h2>

            <p>
                コンパクト作用素は、空間の「広がり」を潰し、有界な集合をコンパクトな（実質的に有限次元のような）集合に押し込む作用素として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 9.1-1 (コンパクト作用素)">
                <p>
                    バナッハ空間 <InlineMath math="X" /> から <InlineMath math="Y" /> への線形作用素 <InlineMath math="K : X \to Y" /> が<b>コンパクト作用素（compact operator）</b>であるとは、<InlineMath math="X" /> の任意の有界集合 <InlineMath math="B" /> の像 <InlineMath math="K(B)" /> が <InlineMath math="Y" /> において相対コンパクト（閉包 <InlineMath math="\overline{K(B)}" /> がコンパクト）になることをいう。
                </p>
                <p>
                    （同値な言い換えとして、<InlineMath math="X" /> の任意の有界点列 <InlineMath math="\{x_n\}" /> に対して、像の点列 <InlineMath math="\{K x_n\}" /> が収束する部分列を持つこと、としてもよい。）
                </p>
            </ContentBox>

            <p>
                この「有界集合の像が相対コンパクトになる」という条件が無限次元においてどれほど強い制約であるかを理解するために、ヒルベルト空間特有の性質と比較してみましょう。
            </p>

            <ContentBox type="remark" title="有限次元と無限次元の違い">
                <p>
                    有限次元空間では「有界閉集合はコンパクトである」（ハイネ・ボレルの定理）ため、有界線形作用素は有界集合を有界集合に写すことから、自動的にすべてがコンパクト作用素になります。<br />
                    しかし、無限次元空間の閉単位球はコンパクトではありません（3-12 位相空間論II）。そのため、無限次元における「コンパクト作用素」は、ただの有界作用素よりもはるかに強い条件を満たす特別なクラスとなります。
                </p>
            </ContentBox>

            <p>
                最も単純な無限次元空間である数列空間において、恒等作用素（何もしない作用素）がコンパクト空間ではないことを具体的に確認します。
            </p>

            <ContentBox type="example" title="Example 9.1-1">
                <p>
                    無限次元ヒルベルト空間 <InlineMath math="\ell^2" /> 上の恒等作用素 <InlineMath math="I" /> がコンパクト作用素でないことを確認します。<br />
                    <InlineMath math="\ell^2" /> の標準基底の列 <InlineMath math="\{e_n\}" /> を考えます。<InlineMath math="\|e_n\| = 1" /> なのでこれは有界列です。<br />
                    像列は <InlineMath math="I e_n = e_n" /> となりますが、異なる <InlineMath math="n, m" /> に対して
                </p>
                <BlockMath math="\|e_n - e_m\|^2 = \|e_n\|^2 + \|e_m\|^2 = 1 + 1 = 2" />
                <p>
                    つまり距離は常に <InlineMath math="\sqrt{2}" /> です。いくら先へ進んでも互いに引き離されたままであり、コーシー列となる部分列を一切持ちません。<br />
                    したがって恒等作用素 <InlineMath math="I" /> はコンパクト作用素ではありません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コンパクト作用素の例</h2>

            <p>
                「有限次元に近い」という直感をもっとも直接的に体現するのが有限ランク作用素です。
            </p>

            <ContentBox type="definition" title="Definition 9.1-2 (有限ランク作用素)">
                <p>
                    有界線形作用素 <InlineMath math="T : X \to Y" /> の像（値域）<InlineMath math="\mathrm{Im}(T)" /> が有限次元であるとき、<InlineMath math="T" /> を<b>有限ランク作用素（finite rank operator）</b>という。
                </p>
            </ContentBox>

            <p>
                像空間が有限次元であれば、それは実質的に有限次元空間への写像と同じであるため、コンパクト性を満たすことが容易に想像できます。
            </p>

            <ContentBox type="theorem" title="Proposition 9.1-1">
                <p>
                    有限ランク作用素は常にコンパクト作用素である。
                </p>
            </ContentBox>

            <p>
                この証明は、像空間が有限次元である性質と、有限次元空間におけるハイネ・ボレルの定理を組み合わせるだけで直ちに完了します。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="T" /> を有限ランク作用素とし、<InlineMath math="B \subset X" /> を有界集合とする。<br />
                    <InlineMath math="T" /> は有界作用素であるため、その像 <InlineMath math="T(B)" /> は <InlineMath math="Y" /> において有界集合である。<br />
                    また定義より、<InlineMath math="T(B)" /> は有限次元部分空間 <InlineMath math="\mathrm{Im}(T)" /> に含まれている。<br />
                    有限次元空間における有界集合の閉包はコンパクトである（ハイネ・ボレルの定理）ため、<InlineMath math="\overline{T(B)}" /> はコンパクトとなる。よって <InlineMath math="T" /> はコンパクト作用素である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                有限ランク作用素は代数的な例でしたが、解析学や物理学においては積分から定まる作用素がコンパクト作用素の代表例として頻出します。
            </p>

            <ContentBox type="example" title="Example 9.1-2">
                <p>
                    微分方程式や物理学で頻出する<b>積分作用素</b>は典型的なコンパクト作用素です。<br />
                    例えば、連続な2変数関数 <InlineMath math="K(x, t)" />（積分核）を用いて、<InlineMath math="C[a,b]" /> 上の作用素 <InlineMath math="T" /> を
                </p>
                <BlockMath math="Tf(x) = \int_a^b K(x,t)f(t)\,dt" />
                <p>
                    で定めます。有界列 <InlineMath math="\{f_n\}" /> （<InlineMath math="\|f_n\|_\infty \leq M" />）をとります。<br />
                    <InlineMath math="K" /> が閉上の連続関数であることから一様連続になり、これを用いて像列 <InlineMath math="\{Tf_n\}" /> が同程度連続かつ一様有界となることが示せます。<br />
                    したがってアスコリ-アルツェラの定理（2-3 実解析）より、<InlineMath math="\{Tf_n\}" /> は一様収束する部分列を持ちます。よって <InlineMath math="T" /> はコンパクト作用素です。
                </p>
            </ContentBox>

            <p>
                さらに、有限ランク作用素ではないものの、無限次元に向かって「急速に減衰する」ことでコンパクトになるような作用素の例も存在します。
            </p>

            <ContentBox type="example" title="Example 9.1-3">
                <p>
                    <InlineMath math="\ell^2" /> において、徐々に成分の重みを小さくしていく対角作用素
                </p>
                <BlockMath math="T(x_1, x_2, x_3, \dots) = \left( x_1, \frac{x_2}{2}, \frac{x_3}{3}, \dots \right)" />
                <p>
                    を考えます（<InlineMath math="T(x_n) = (x_n/n)" />）。<br />
                    この作用素は、最初の <InlineMath math="N" /> 個だけを残す有限ランク作用素
                </p>
                <BlockMath math="T_N(x_1, x_2, \dots) = \left( x_1, \frac{x_2}{2}, \dots, \frac{x_N}{N}, 0, 0, \dots \right)" />
                <p>
                    で近似することができます。<InlineMath math="N \to \infty" /> としたとき、<InlineMath math="T_N" /> の効果が <InlineMath math="T" /> に近づいていくことから、<InlineMath math="T" /> もコンパクト作用素になります（正確な証明は次節で行います）。
                </p>
            </ContentBox>

            <p>
                無限次元空間特有の「コンパクト作用素」の概念について、基本的な性質と典型的な例を振り返ります。
            </p>

            <ContentBox type="note" title="§9.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有界集合を相対コンパクトな集合に写す作用素をコンパクト作用素とよぶ。</li>
                    <li>ヒルベルト空間など無限次元の空間では、恒等作用素はコンパクトにならない。</li>
                    <li>像が有限次元の作用素（有限ランク作用素）や、良い核を持つ積分作用素はコンパクト作用素の典型例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
