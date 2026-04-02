import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConnectednessProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                連結性は、連続写像によって保たれる「位相的不変量」の一つです。
                この性質により、「連結な空間の上に構築された像は、やはり連結である」という基本的な事実が導かれ、
                多変数関数の解析や多様体の理論において強力な武器となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連結性の保存</h2>

            <p>
                まず、連続写像が空間の「塊としての性質」を壊さないことを見ていきましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-1 (連結像の保存)">
                <p>
                    <InlineMath math="f: X \to Y" /> を連続写像とする。
                    <InlineMath math="X" /> が連結ならば、その像 <InlineMath math="f(X) \subset Y" /> も（部分空間として）連結である。
                </p>
            </ContentBox>

            <p className="mt-4">
                この定理は、連結な空間を「ちぎることなく」変形させる連続写像が、その連結性を維持することを保証しています。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    像 <InlineMath math="f(X)" /> が非連結であると仮定し、矛盾を導く（背理法）。
                    <InlineMath math="f(X)" /> の分割を <InlineMath math="(U, V)" /> とすると、
                    <InlineMath math="U, V" /> は <InlineMath math="f(X)" /> における空でない開集合であり、
                    <InlineMath math="f(X) = U \cup V, U \cap V = \emptyset" /> を満たす。
                </p>
                <p className="mt-4">
                    写像 <InlineMath math="f" /> の連続性の定義より、原像 <InlineMath math="A = f^{-1}(U)" /> と <InlineMath math="B = f^{-1}(V)" /> は <InlineMath math="X" /> の開集合である。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><InlineMath math="A \cup B = f^{-1}(U \cup V) = f^{-1}(f(X)) = X" /></li>
                    <li><InlineMath math="A \cap B = f^{-1}(U \cap V) = f^{-1}(\emptyset) = \emptyset" /></li>
                    <li><InlineMath math="U, V" /> が空でないことから、 <InlineMath math="A, B" /> も空でない。</li>
                </ul>
                <p className="mt-4">
                    これは、 <InlineMath math="(A, B)" /> が <InlineMath math="X" /> の分割であることを意味し、 <InlineMath math="X" /> が連結であるという仮定に矛盾する。
                    よって、像 <InlineMath math="f(X)" /> は連結でなければならない。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">中間値定理の位相的一般化</h2>

            <p>
                上の定理を実数値関数に適用すると、微積分学で馴染み深い「中間値の定理」が位相空間の言葉で得られます。
            </p>

            <ContentBox type="corollary" title="Corollary 8.2-1 (中間値の定理の一般化)">
                <p>
                    連結空間 <InlineMath math="X" /> から実数直線 <InlineMath math="\mathbb{R}" /> への連続関数 <InlineMath math="f: X \to \mathbb{R}" /> に対して、
                    その像 <InlineMath math="f(X)" /> は <InlineMath math="\mathbb{R}" /> の区間となる。
                </p>
                <p className="mt-4">
                    特に、任意の <InlineMath math="x_1, x_2 \in X" /> と、<InlineMath math="f(x_1)" /> と <InlineMath math="f(x_2)" /> の間にある任意の実数 <InlineMath math="c" /> に対して、
                    <InlineMath math="f(x) = c" /> を満たす <InlineMath math="x \in X" /> が存在する。
                </p>
            </ContentBox>

            <p className="mt-4">
                以下の例で、この一般化がどのように役立つかを確認しましょう。
            </p>

            <ContentBox type="example" title="Example 8.2-1 (不動点の存在)">
                <p>
                    閉区間 <InlineMath math="[0, 1]" /> から自分自身への連続関数 <InlineMath math="f: [0, 1] \to [0, 1]" /> を考える。
                    このとき、 <InlineMath math="f(c) = c" /> を満たす点 <InlineMath math="c \in [0, 1]" /> （不動点）が少なくとも1つ存在することを示す。
                </p>
                <p className="mt-2">
                    補助関数 <InlineMath math="g(x) = f(x) - x" /> を定義する。
                    <InlineMath math="g(0) = f(0) - 0 \geq 0" /> であり、<InlineMath math="g(1) = f(1) - 1 \leq 0" /> である。
                    <InlineMath math="[0, 1]" /> は連結であり、 <InlineMath math="g" /> も連続であるから、中間値の定理より <InlineMath math="g(c) = 0" /> となる <InlineMath math="c \in [0, 1]" /> が存在する。
                    これは <InlineMath math="f(c) = c" /> を意味する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="連結性は「全空間」の定義">
                <p>
                    注意すべき点として、ある部分集合が連結であるかどうかは、その部分空間としての位相において判断されます。
                    しかし、連結像の保存定理により、全空間の連結性が保たれることで、結果として部分集合の連結性も制御できるのがこの理論の美しいところです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>連結像の保存</strong>：連結空間を連続的に移した像は必ず連結になる。</li>
                    <li><strong>中間値の定理</strong>：微積分の基本的な定理は、連結性が連続写像で保たれることの帰結である。</li>
                    <li><strong>応用</strong>：不動点の存在証明など、存在を保証する強力な道具となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
