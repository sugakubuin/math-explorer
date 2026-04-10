import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ContinuityDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                解析学における連続性の概念を抽象化し、位相空間の言葉で表現すると、驚くほどシンプルで美しい定義が得られます。
                開集合という「空間の構造」が、写像によってどのように保たれるか。それが連続性の本質です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続写像の定義</h2>

            <p>
                位相空間における連続性は、「開集合の逆像」を用いて定義されます。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (連続写像)">
                <p>
                    2つの位相空間 <InlineMath math="(X, \mathcal{O}_X)" /> と <InlineMath math="(Y, \mathcal{O}_Y)" /> の間の写像
                    <InlineMath math="f: X \to Y" /> が<strong>連続 (Continuous)</strong> であるとは、
                    <InlineMath math="Y" /> の任意の開集合 <InlineMath math="V \in \mathcal{O}_Y" /> に対して、
                    その逆像 <InlineMath math="f^{-1}(V)" /> が <InlineMath math="X" /> の開集合であることをいう。
                </p>
                <BlockMath math="\forall V \in \mathcal{O}_Y \implies f^{-1}(V) \in \mathcal{O}_X" />
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-1 (実関数の連続性)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> 上の関数 <InlineMath math="f(x) = 2x" /> が通常の位相に関して連続であることを確認する。
                    <InlineMath math="\mathbb{R}" /> の任意の開集合は開区間の和集合なので、任意の開区間 <InlineMath math="V = (a, b)" /> の逆像が開集合（開区間）であることを示せば十分である。
                </p>
                <BlockMath math="f^{-1}((a, b)) = \{ x \in \mathbb{R} \mid a < 2x < b \} = \left( \frac{a}{2}, \frac{b}{2} \right)" />
                <p className="mt-2">
                    結果は再び開区間となり、開集合である。したがって、<InlineMath math="f(x) = 2x" /> は連続である。
                </p>
            </ContentBox>

            <p className="mt-4">
                この定義は非常に抽象的ですが、「近い点は近い点へ移る」という私たちが知っている連続性の直感を、
                座標や距離を使わずに「開集合の重なり」だけで捉え直したものと言えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ε-δ との対応</h2>

            <p>
                大学初年次で学ぶ実関数や距離空間における連続性の定義と、この位相的な定義がどのように結びついているかを確認しましょう。
            </p>

            <ContentBox type="remark" title="距離空間における連続性">
                <p>
                    距離空間において、点 <InlineMath math="x" /> での連続性は、任意の <InlineMath math="\varepsilon > 0" /> に対して
                    ある <InlineMath math="\delta > 0" /> が存在して
                    <InlineMath math="d(x, y) < \delta \implies d(f(x), f(y)) < \varepsilon" /> となることでした。
                </p>
                <p className="mt-4">
                    これは、<InlineMath math="f(x)" /> の半径 <InlineMath math="\varepsilon" /> の開球の逆像が、
                    <InlineMath math="x" /> の半径 <InlineMath math="\delta" /> の開球を包み込んでいることを意味します。
                    距離空間の開集合は開球の和集合として表されるため、
                    「開集合の逆像が開集合である」という位相空間の定義は、まさにこの <InlineMath math="\varepsilon-\delta" /> の議論を一般化したものなのです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">点における連続性</h2>

            <p>
                写像全体が連続であると言う前に、まず特定の「一点」で連続であることを定義できます。
            </p>

            <ContentBox type="definition" title="Definition 3.1-2 (点における連続性)">
                <p>
                    写像 <InlineMath math="f: X \to Y" /> が点 <InlineMath math="x \in X" /> において<strong>連続</strong>であるとは、
                    <InlineMath math="f(x)" /> の任意の近傍 <InlineMath math="V \in \mathcal{V}(f(x))" /> に対して、
                    <InlineMath math="f(U) \subset V" /> を満たす <InlineMath math="x" /> の近傍 <InlineMath math="U \in \mathcal{V}(x)" /> が存在することをいう。
                </p>
            </ContentBox>

            <p className="mt-4">
                写像 <InlineMath math="f" /> が <InlineMath math="X" /> のすべての点で連続であることと、
                Definition 3.1-1 の「連続写像」であることは同値です。この証明は次節 §3.2 で詳しく扱います。
            </p>

            <ContentBox type="example" title="Example 3.1-1 (恒等写像と定数写像)">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>恒等写像</strong> <InlineMath math="\mathrm{id}_X: X \to X" /> は常に連続である。任意の開集合 <InlineMath math="V" /> に対して、<InlineMath math="\mathrm{id}_X^{-1}(V) = V" /> も開集合だからである。</li>
                    <li><strong>定数写像</strong> <InlineMath math="f(x) = c" /> は常に連続である。任意の開集合 <InlineMath math="V" /> に対して、 その逆像は <InlineMath math="c \in V" /> ならば <InlineMath math="X" /> 全体であり、<InlineMath math="c \notin V" /> ならば空集合 <InlineMath math="\emptyset" /> となるが、これらはいずれも開集合だからである。</li>
                </ul>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>連続写像</strong>とは、任意の開集合の逆像が再び開集合となる写像である。</li>
                    <li>この定義は、距離空間における <InlineMath math="\varepsilon-\delta" /> 連続性の位相的な一般化である。</li>
                    <li>一点での連続性は、像の近傍に対して逆像の中に近傍が取れることとして定義される。</li>
                    <li>恒等写像や定数写像は、あらゆる位相空間において連続な写像の基本的な例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
