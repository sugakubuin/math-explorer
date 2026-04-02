import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ContinuityEquivalences() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「開集合の逆像が開集合」という連続性の定義は、閉集合、近傍、あるいは閉包といった他の位相的概念を用いても同値に言い換えることができます。
                状況に応じて最適な条件を選択できるようになることが、位相空間論を使いこなす第一歩です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続性の同値条件</h2>

            <p>
                以下の命題は、位相空間における連続性の多面的な性質を一つにまとめた非常に重要な定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-1 (連続性の同値条件)">
                <p>
                    位相空間 <InlineMath math="X, Y" /> の間の写像 <InlineMath math="f: X \to Y" /> に対して、次の諸条件はすべて互いに同値である：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li><InlineMath math="f" /> は連続である（任意の開集合의 逆像が 開集合인 こと）。</li>
                    <li>任意の閉集合 <InlineMath math="F \subset Y" /> に対し、<InlineMath math="f^{-1}(F)" /> は <InlineMath math="X" /> の閉集合である。</li>
                    <li>任意の点 <InlineMath math="x \in X" /> において <InlineMath math="f" /> は点連続である。</li>
                    <li>任意の点 <InlineMath math="x \in X" /> と <InlineMath math="f(x)" /> の任意の近傍 <InlineMath math="V" /> に対して、<InlineMath math="f^{-1}(V)" /> は <InlineMath math="x" /> の近傍である。</li>
                    <li>任意の部分集合 <InlineMath math="A \subset X" /> に対し、<InlineMath math="f(\overline{A}) \subset \overline{f(A)}" />。</li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-1 (閉集合による判定の利点)">
                <p>
                    関数 <InlineMath math="f: \mathbb{R} \to \mathbb{R}" /> が <InlineMath math="f(x) \geq 0" /> を満たすとき、
                    集合 <InlineMath math="\{ x \mid f(x) = 0 \}" /> が閉集合であることを示す。
                    一点集合 <InlineMath math="\{0\}" /> は <InlineMath math="\mathbb{R}" /> の閉集合である。
                    もし <InlineMath math="f" /> が連続ならば、定理の条件 (2) より、その逆像
                    <InlineMath math="f^{-1}(\{0\}) = \{ x \mid f(x) = 0 \}" />
                    は直ちに閉集合であることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    主要な部分の同値性を示す。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-2 ml-4">
                    <li>
                        <strong>(1) <InlineMath math="\iff" /> (2):</strong> <br />
                        逆像と補集合の関係 <InlineMath math="f^{-1}(Y \setminus F) = X \setminus f^{-1}(F)" /> を用いる。
                        <InlineMath math="F" /> が閉集合であることは <InlineMath math="Y \setminus F" /> が開集合であることと同値であり、
                        同様に <InlineMath math="f^{-1}(F)" /> が閉集合であることはその補集合が開集合であることと同値であるから、定義より直ちに従う。
                    </li>
                    <li>
                        <strong>(1) <InlineMath math="\iff" /> (3):</strong> <br />
                        (<InlineMath math="\Longrightarrow" />) <InlineMath math="f(x)" /> の近傍 <InlineMath math="V" /> に対し、<InlineMath math="f(x) \in W \subset V" /> を満たす開集合 <InlineMath math="W" /> が存在する。
                        <InlineMath math="f" /> の連続性より <InlineMath math="U = f^{-1}(W)" /> は <InlineMath math="x" /> を含む開集合、すなわち近傍であり、<InlineMath math="f(U) = W \subset V" /> となる。 <br />
                        (<InlineMath math="\Longleftarrow" />) 任意の開集合 <InlineMath math="W \subset Y" /> をとる。任意の <InlineMath math="x \in f^{-1}(W)" /> に対し、<InlineMath math="f(x) \in W" /> であり <InlineMath math="W" /> は <InlineMath math="f(x)" /> の近傍である。
                        (3) より <InlineMath math="f(U_x) \subset W" /> となる <InlineMath math="x" /> の近傍 <InlineMath math="U_x" /> が存在する。
                        §2.4 Proposition 2.4-1 より <InlineMath math="f^{-1}(W)" /> は開集合である。
                    </li>
                    <li>
                        <strong>(1) <InlineMath math="\iff" /> (5):</strong> <br />
                        (<InlineMath math="\Longrightarrow" />) <InlineMath math="\overline{f(A)}" /> は閉集合なので、(2) よりその逆像 <InlineMath math="f^{-1}(\overline{f(A)})" /> は <InlineMath math="A" /> を含む閉集合である。
                        閉包は最小の閉集合であるから、 <InlineMath math="\overline{A} \subset f^{-1}(\overline{f(A)})" /> となり、像をとれば <InlineMath math="f(\overline{A}) \subset \overline{f(A)}" /> を得る。<br />
                        (<InlineMath math="\Longleftarrow" />) 任意の閉集合 <InlineMath math="F \subset Y" /> に対して、<InlineMath math="A = f^{-1}(F)" /> とおく。
                        仮定より <InlineMath math="f(\overline{A}) \subset \overline{f(A)} \subset \overline{F} = F" />。
                        よって <InlineMath math="\overline{A} \subset f^{-1}(F) = A" />。逆の包含は自明なので <InlineMath math="\overline{A} = A" /> となり、<InlineMath math="A" /> は閉集合である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                条件 5 は「境界における挙動」をうまく捉えています。
                連続写像は、集合の「触点」を、移った先の集合の「触点」へと移します。
                逆に言えば、不連続な箇所ではこの包含関係が崩れ、点がどこか遠くへ「ジャンプ」してしまうことを意味します。
            </p>

            <ContentBox type="remark" title="近傍による特徴づけ">
                <p>
                    解析学では、連続性を「極限を保存する性質」として捉えることが多いですが、
                    条件 4 は「点 <InlineMath math="x" /> の十分近く（近傍）が、点 <InlineMath math="f(x)" /> の指定された近傍の中に収まる」
                    という、幾何学的に扱いやすい視点を提供してくれます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>連続性は、開集合だけでなく、閉集合の逆像が閉集合であることによっても定義できる。</li>
                    <li>写像全体が連続であることと、各点において（近傍の意味で）連続であることは同値である。</li>
                    <li>閉包を用いた特徴づけ <InlineMath math="f(\overline{A}) \subset \overline{f(A)}" /> は、極限操作との相性が良い。</li>
                    <li>これらの同値条件を使い分けることで、抽象的な位相空間の議論がスムーズに行える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
