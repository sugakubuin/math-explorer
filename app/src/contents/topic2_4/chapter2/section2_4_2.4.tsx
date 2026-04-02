import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ImageAndPreimageProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                §2.1 で導入した「像」と「逆像」は、写像によって集合を移動させる操作でした。
                数学の理論を構築する上で、これらの操作が集合演算（和・積・補）とどのように連動するかを理解することは不可欠です。
                実は、<strong>「逆像（Preimage）」は集合演算に対して非常に素直に振る舞うのに対し、「像（Image）」はいく分かの制限を受ける</strong>という面白い非対称性があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">像の性質</h2>

            <p>
                写像による像の操作が、集合の和や積に対してどのように作用するかを見てみましょう。
            </p>

            <ContentBox type="theorem" title="Proposition 2.4-1 (像と集合演算)">
                <p>
                    写像 <InlineMath math="f \colon X \to Y" /> と、<InlineMath math="X" /> の部分集合 <InlineMath math="A, B" /> に対して以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-2 ml-4">
                    <li><InlineMath math="f(A \cup B) = f(A) \cup f(B)" /> （和集合は保存される）</li>
                    <li><InlineMath math="f(A \cap B) \subset f(A) \cap f(B)" /> （共通部分については包含関係のみが成り立つ）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal list-inside space-y-10 mt-2 ml-2">
                    <li>
                        <strong>和集合の等号の証明</strong>：<br />
                        <InlineMath math="y \in f(A \cup B)" /> とすると、ある <InlineMath math="x \in A \cup B" /> が存在して <InlineMath math="f(x) = y" />。
                        <InlineMath math="x \in A" /> または <InlineMath math="x \in B" /> なので、<InlineMath math="f(x) \in f(A)" /> または <InlineMath math="f(x) \in f(B)" /> となる。
                        すなわち <InlineMath math="y \in f(A) \cup f(B)" />。逆も同様に辿れるため等号が成立する。
                    </li>
                    <li>
                        <strong>共通部分の包含関係の証明</strong>：<br />
                        <InlineMath math="y \in f(A \cap B)" /> とすると、ある <InlineMath math="x \in A \cap B" /> が存在して <InlineMath math="f(x) = y" />。
                        この <InlineMath math="x" /> は <InlineMath math="A" /> にも <InlineMath math="B" /> にも属しているため、<InlineMath math="y = f(x) \in f(A)" /> かつ <InlineMath math="y \in f(B)" />。
                        よって <InlineMath math="y \in f(A) \cap f(B)" /> となる。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                なぜ共通部分について等号が成り立たないのか、具体例で確認しておきましょう。
            </p>

            <ContentBox type="example" title="Example 2.4-1 (共通部分の像で等号が成り立たない例)">
                <p>
                    写像として定値写像 <InlineMath math="f(x) = c" /> を考え、<InlineMath math="A" /> と <InlineMath math="B" /> を互いに素な（重なりがない）集合とする。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="A \cap B = \emptyset" /> なので、その像は <InlineMath math="f(A \cap B) = \emptyset" />。</li>
                    <li>一方、<InlineMath math="f(A) = \{c\}" /> かつ <InlineMath math="f(B) = \{c\}" /> なので、それらの共通部分は <InlineMath math="f(A) \cap f(B) = \{c\}" />。</li>
                </ul>
                <p className="mt-4">
                    明らかに <InlineMath math="\emptyset \neq \{c\}" /> であり、左辺の方が小さくなります。
                    このズレは、<strong>「定義域では別々の場所にいた元たちが、写像によって定義域外の一点に合流してしまった」</strong>ことで発生します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆像の性質</h2>

            <p>
                一方、逆像は驚くほど「行儀が良い」性質を持っています。
            </p>

            <ContentBox type="theorem" title="Proposition 2.4-2 (逆像と集合演算)">
                <p>
                    写像 <InlineMath math="f \colon X \to Y" /> と、<InlineMath math="Y" /> の部分集合 <InlineMath math="A, B" /> に対して以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-2 ml-4">
                    <li><InlineMath math="f^{-1}(A \cup B) = f^{-1}(A) \cup f^{-1}(B)" /></li>
                    <li><InlineMath math="f^{-1}(A \cap B) = f^{-1}(A) \cap f^{-1}(B)" /></li>
                    <li><InlineMath math="f^{-1}(A^c) = (f^{-1}(A))^c" /> （補集合とも可換）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>逆像の定義 <InlineMath math="x \in f^{-1}(S) \iff f(x) \in S" /> を用いて、論理学の法則に帰着させることで証明できる。</p>
                <ol className="list-decimal list-inside space-y-6 mt-4 ml-2">
                    <li>
                        <BlockMath math="\begin{aligned} x \in f^{-1}(A \cap B) &\iff f(x) \in A \cap B \\ &\iff f(x) \in A \land f(x) \in B \\ &\iff x \in f^{-1}(A) \land x \in f^{-1}(B) \\ &\iff x \in f^{-1}(A) \cap f^{-1}(B) \end{aligned}" />
                    </li>
                    <li>
                        同様に和集合についても、論理和 <InlineMath math="\lor" /> の性質より等号が成立する。
                    </li>
                    <li>
                        補集合についても、否定 <InlineMath math="\neg" /> の性質により：
                        <BlockMath math="\begin{aligned} x \in f^{-1}(A^c) &\iff f(x) \notin A \\ &\iff x \notin f^{-1}(A) \\ &\iff x \in (f^{-1}(A))^c \end{aligned}" />
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">像と逆像の包含関係</h2>

            <p>
                最後に、「写して戻す」あるいは「戻して写す」という連続操作を行ったときに、集合の大きさがどのように変化するかを確認します。
            </p>

            <ContentBox type="theorem" title="Proposition 2.4-3 (像と逆像の包含関係)">
                <p>
                    写像 <InlineMath math="f \colon X \to Y" /> について次が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-2 ml-4">
                    <li><InlineMath math="A \subset X" /> に対して、<InlineMath math="A \subset f^{-1}(f(A))" />。さらに <InlineMath math="f" /> が単射なら等号が成立。</li>
                    <li><InlineMath math="B \subset Y" /> に対して、<InlineMath math="f(f^{-1}(B)) \subset B" />。さらに <InlineMath math="f" /> が全射なら等号が成立。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal list-inside space-y-10 mt-2 ml-2">
                    <li>
                        <InlineMath math="x \in A" /> とすると、像の定義より <InlineMath math="f(x) \in f(A)" />。逆像の定義に戻れば、これは <InlineMath math="x \in f^{-1}(f(A))" /> である。<br />
                        <strong>単射の場合</strong>：<InlineMath math="x' \in f^{-1}(f(A))" /> とすると、<InlineMath math="f(x') \in f(A)" />。すなわち、ある <InlineMath math="a \in A" /> が存在して <InlineMath math="f(x') = f(a)" />。<InlineMath math="f" /> が単射なら <InlineMath math="x' = a \in A" />。よって等号が成立。
                    </li>
                    <li>
                        <InlineMath math="y \in f(f^{-1}(B))" /> とすると、ある <InlineMath math="x \in f^{-1}(B)" /> が存在して <InlineMath math="f(x) = y" />。<InlineMath math="x \in f^{-1}(B)" /> の定義から <InlineMath math="f(x) \in B" />。よって <InlineMath math="y \in B" />。<br />
                        <strong>全射の場合</strong>：任意の <InlineMath math="b \in B" /> に対して、全射性より <InlineMath math="f(a) = b" /> となる <InlineMath math="a \in X" /> が存在する。このとき <InlineMath math="a \in f^{-1}(B)" /> であるから、<InlineMath math="b = f(a) \in f(f^{-1}(B))" />。よって等号が成立。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="逆像が愛される理由">
                <p>
                    トポロジー（位相幾何学）など、現代数学の多くの分野では、写像の連続性などを定義する際に「像」ではなく「逆像」を主役に据えます。
                    今見てきたように、逆像は定義域と値域の集合演算構造をそのまま（完璧に！）引き継ぐことができるからです。
                    写像を「前方へ写す」よりも「後方へ引き戻す（Pullback）」方が、数学的には扱いやすいことが多いのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>逆像</strong>は、和集合、共通部分、補集合のすべての演算と可換である（<InlineMath math="f^{-1}(A \cap B) = f^{-1}(A) \cap f^{-1}(B)" /> など）。</li>
                    <li><strong>像</strong>は、和集合については可換だが、共通部分については包含関係 <InlineMath math="f(A \cap B) \subset f(A) \cap f(B)" /> のみが成り立つ。</li>
                    <li>「写して戻す」と一般には元の集合より大きくなるが、<strong>単射</strong>なら一致する（<InlineMath math="A = f^{-1}(f(A))" />）。</li>
                    <li>「戻して写す」と一般には元の集合より小さくなるが、<strong>全射</strong>なら一致する（<InlineMath math="f(f^{-1}(B)) = B" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
