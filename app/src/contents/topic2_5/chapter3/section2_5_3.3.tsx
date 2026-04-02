import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ContinuityStability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                連続写像は、合成、制限、あるいは複数の写像の「貼り合わせ」といった操作に対しても非常に安定しています。
                これらの性質により、複雑な連続写像を単純な部品の組み合わせから構成することが可能になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">合成の連続性</h2>

            <p>
                「連続な変化の連続」は、やはり連続です。
            </p>

            <ContentBox type="proposition" title="Proposition 3.3-1 (合成の連続性)">
                <p>
                    2つの連続写像 <InlineMath math="f: X \to Y" /> と <InlineMath math="g: Y \to Z" /> の合成写像
                    <InlineMath math="g \circ f: X \to Z" /> は連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="Z" /> の任意の開集合 <InlineMath math="W" /> をとる。
                    逆像の性質より、
                    <BlockMath math="(g \circ f)^{-1}(W) = f^{-1}(g^{-1}(W))" />
                    である。
                    <InlineMath math="g" /> は連続なので <InlineMath math="V = g^{-1}(W)" /> は <InlineMath math="Y" /> の開集合である。
                    さらに <InlineMath math="f" /> も連続なので <InlineMath math="f^{-1}(V)" /> は <InlineMath math="X" /> の開集合である。
                    したがって <InlineMath math="g \circ f" /> は連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">制限の連続性</h2>

            <p>
                全体で連続な写像を一部分に限定しても、連続性は失われません。
            </p>

            <ContentBox type="proposition" title="Proposition 3.3-2 (制限の連続性)">
                <p>
                    連続写像 <InlineMath math="f: X \to Y" /> と、部分空間 <InlineMath math="A \subset X" /> に対して、
                    <InlineMath math="f" /> の <InlineMath math="A" /> への制限 <InlineMath math="f|_A: A \to Y" /> は連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="Y" /> の任意の開集合 <InlineMath math="V" /> に対して、
                    <BlockMath math="(f|_A)^{-1}(V) = f^{-1}(V) \cap A" />
                    である。<InlineMath math="f" /> は連続なので <InlineMath math="f^{-1}(V)" /> は <InlineMath math="X" /> の開集合である。
                    相対位相の定義（§5.1 参照、ここでは先取り）より、これは <InlineMath math="A" /> の開集合である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">貼り合わせ補題</h2>

            <p>
                バラバラに定義された連続写像が、「境界」で一致していれば、それらを繋ぎ合わせても連続性は保たれます。
            </p>

            <ContentBox type="lemma" title="Lemma 3.3-1 (貼り合わせ補題)">
                <p>
                    位相空間 <InlineMath math="X" /> が有限個の閉集合によって <InlineMath math="X = F_1 \cup \dots \cup F_n" /> と覆われているとする。
                    各 <InlineMath math="F_i" /> 上で連続な写像 <InlineMath math="f_i: F_i \to Y" /> が与えられ、
                    共通部分上で <InlineMath math="f_i|_{F_i \cap F_j} = f_j|_{F_i \cap F_j}" /> を満たすならば、
                    これらを合わせた写像 <InlineMath math="f: X \to Y" /> は連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の <InlineMath math="Y" /> の閉集合 <InlineMath math="V" /> をとる。
                    <BlockMath math="f^{-1}(V) = \bigcup_{i=1}^n (f^{-1}(V) \cap F_i) = \bigcup_{i=1}^n f_i^{-1}(V)" />
                    である。各 <InlineMath math="f_i" /> は連続なので、連続性の同値条件（§3.2）より <InlineMath math="f_i^{-1}(V)" /> は <InlineMath math="F_i" /> の閉集合である。
                    <InlineMath math="F_i" /> 自身が <InlineMath math="X" /> の閉集合なので、<InlineMath math="f_i^{-1}(V)" /> も <InlineMath math="X" /> の閉集合である。
                    有限個の閉集合の和集合は閉集合であるから、 <InlineMath math="f^{-1}(V)" /> は閉集合である。
                    よって <InlineMath math="f" /> は連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-1 (絶対値関数)">
                <p>
                    実関数 <InlineMath math="f(x) = |x|" /> は、<InlineMath math="F_1 = [0, \infty)" /> 上では <InlineMath math="f_1(x) = x" />、
                    <InlineMath math="F_2 = (-\infty, 0]" /> 上では <InlineMath math="f_2(x) = -x" /> として定義されます。
                    これらはそれぞれの閉集合上で連続であり、原点 <InlineMath math="x=0" /> で一致するため、
                    貼り合わせ補題より <InlineMath math="f(x)" /> は全体で連続です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>連続写像の合成は、再び連続写像となる。</li>
                    <li>連続写像の定義域を部分集合に制限しても、連続性は維持される。</li>
                    <li><strong>貼り合わせ補題</strong>は、局所的な連続性から全域的な連続性を保証する強力な道具である。</li>
                    <li>特に有限個の閉集合による被覆を用いた貼り合わせは、微積分や幾何学で頻出する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
