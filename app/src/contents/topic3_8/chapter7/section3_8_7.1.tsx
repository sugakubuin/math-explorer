import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SymmetricGroup() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章からは、群論における具体的な群の重要例を見ていきます。
                その筆頭に挙げられるのが「対称群」です。対称群は有限個のものの「並べ替え（置換）」を元とする群であり、
                有限群の理論において極めて中心的な役割を果たします。
                実際、すべての有限群はある対称群の部分群と同型である（ケイリーの定理）という事実が、その重要性を物語っています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">置換と互換分解</h2>

            <p className="leading-relaxed mb-4">
                まず、置換の定義から始めましょう。置換とは、有限集合から自分自身への全単射な写像のことです。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (置換・対称群)">
                <p>
                    集合 <InlineMath math="X = \{1, 2, \ldots, n\}" /> から <InlineMath math="X" /> への全単射を <b><InlineMath math="n" /> 次の置換</b> と呼ぶ。
                    <InlineMath math="n" /> 次の置換全体が写像の合成を演算としてなす群を <b><InlineMath math="n" /> 次対称群</b> と呼び、<InlineMath math="S_n" /> で表す。
                </p>
                <p className="mt-4">
                    特に、異なる要素 <InlineMath math="a_1, a_2, \ldots, a_k \in X" /> に対して
                    <BlockMath math="a_1 \mapsto a_2, \quad a_2 \mapsto a_3, \quad \ldots, \quad a_{k-1} \mapsto a_k, \quad a_k \mapsto a_1" />
                    とし、それ以外の要素を動かさない置換を <b>巡回置換</b> と呼び、<InlineMath math="(a_1\,a_2\,\cdots\,a_k)" /> と記す。
                    長さ2の巡回置換 <InlineMath math="(a\,b)" /> を <b>互換</b> と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                置換の記法にはいくつかありますが、巡回置換による表現は置換の構造を理解する上で非常に強力です。
                実は、どんな置換も互換（2つの要素の入れ替え）の積み重ねとして表現できることが知られています。
            </p>

            <ContentBox type="theorem" title="Theorem 7.1-1 (互換分解)">
                <p>
                    1. 任意の置換は、いくつかの互換の積として書くことができる（<b>互換分解</b>）。
                </p>
                <p className="mt-2">
                    2. 1つの置換に対する互換分解の仕方は一意ではないが、現れる互換の個数の <b>偶奇</b> は、分解の仕方によらず一定である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. 任意の置換は互いに素な巡回置換の積として表せる。さらに、巡回置換 <InlineMath math="(a_1\,a_2\,\dots\,a_k)" /> は
                    <BlockMath math="(a_1\,a_2\,\dots\,a_k) = (a_1\,a_k)(a_1\,a_{k-1})\dots(a_1\,a_2)" />
                    と互換の積に分解できるため、任意の置換も互換の積で表せる。
                </p>
                <p className="mt-4">
                    2. 差積（Vandermonde 多項式）を <InlineMath math="\Delta = \prod_{1 \leq i < j \leq n} (x_i - x_j)" /> とし、
                    置換 <InlineMath math="\sigma \in S_n" /> に対して <InlineMath math="\sigma(\Delta) = \prod (x_{\sigma(i)} - x_{\sigma(j)})" /> を考える。
                    1つの互換 <InlineMath math="\tau" /> を作用させると、<InlineMath math="\tau(\Delta) = -\Delta" /> となる。
                    <InlineMath math="\sigma" /> が <InlineMath math="k" /> 個の互換の積として <InlineMath math="\sigma = \tau_k \dots \tau_1" /> と表されるとき、
                    <InlineMath math="\sigma(\Delta) = (-1)^k \Delta" /> である。
                    左辺は <InlineMath math="\sigma" /> のみに依存するため、<InlineMath math="(-1)^k" /> の値は一定であり、<InlineMath math="k" /> の偶奇は一意に定まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-4">
                巡回置換を互換の積に直す具体的な手順を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.1-1 (置換の計算例)">
                <p>
                    4次の巡回置換 <InlineMath math="(1\,2\,3\,4)" /> を互換の積に分解すると、以下のようになる。
                    <BlockMath math="(1\,2\,3\,4) = (1\,4)(1\,3)(1\,2)" />
                    右から順に写像を適用すると、<InlineMath math="1 \mapsto 2" />、<InlineMath math="2 \mapsto 3" />、<InlineMath math="3 \mapsto 4" />、<InlineMath math="4 \mapsto 1" /> となり、正しく計算できていることがわかる。
                    この場合、互換の個数は3個なので、これは「奇置換」である。
                </p>
                <p className="mt-4">
                    同様に、複数の巡回置換の積 <InlineMath math="(1\,2\,3)(4\,5)" /> は
                    <BlockMath math="(1\,2\,3)(4\,5) = (1\,3)(1\,2)(4\,5)" />
                    と分解でき、互換の個数は3個（奇置換）である。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                このように、置換を「互換が偶数個か奇数個か」で分類する考え方は、次に述べる「符号」の概念へと繋がります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">符号写像と共役類</h2>

            <p className="leading-relaxed mb-4">
                置換の偶奇性を数値化したものが「符号」です。
            </p>

            <ContentBox type="definition" title="Definition 7.1-2 (置換の符号)">
                <p>
                    置換 <InlineMath math="\sigma \in S_n" /> が <InlineMath math="k" /> 個の互換の積として書けるとき、その <b>符号</b> を
                    <BlockMath math="\mathrm{sgn}(\sigma) = (-1)^k" />
                    と定義する。
                    <InlineMath math="\mathrm{sgn}(\sigma) = 1" /> のとき <InlineMath math="\sigma" /> を <b>偶置換</b>、
                    <InlineMath math="\mathrm{sgn}(\sigma) = -1" /> のとき <InlineMath math="\sigma" /> を <b>奇置換</b> と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                符号は対称群から乗法群 <InlineMath math="\{1, -1\}" /> への準同型写像を与えます。
                これは行列式とも深く関連しており、交代群の定義の基礎となります。
            </p>

            <ContentBox type="remark" title="符号写像の性質">
                <p>
                    符号写像 <InlineMath math="\mathrm{sgn}: S_n \to \{1, -1\}" /> は群の準同型である：
                    <InlineMath math="\mathrm{sgn}(\sigma\tau) = \mathrm{sgn}(\sigma)\mathrm{sgn}(\tau)" />。
                    この性質から、偶置換どうしの積は偶置換、奇置換どうしの積は偶置換、偶置換と奇置換の積は奇置換であることがわかる。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                次に、群の構造を分類する上で重要な「共役」という概念について考えます。対称群における共役は、置換の「型」によって決まるという非常に簡潔な特徴を持っています。
            </p>

            <ContentBox type="theorem" title="Theorem 7.1-2 (S_n の共役類)">
                <p>
                    2つの置換 <InlineMath math="\sigma, \tau \in S_n" /> が共役である（すなわち、ある <InlineMath math="\rho \in S_n" /> が存在して <InlineMath math="\tau = \rho\sigma\rho^{-1}" /> となる）ための必要十分条件は、
                    <InlineMath math="\sigma" /> と <InlineMath math="\tau" /> を互いに素な巡回置換の積として書いたとき、現れる巡回置換の <b>長さの構成（型）</b> が一致することである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の置換 <InlineMath math="\sigma" /> に対して、共役作用 <InlineMath math="\rho\sigma\rho^{-1}" /> の効果を調べると、
                    <BlockMath math="\rho (a_1\,a_2\,\dots\,a_k) \rho^{-1} = (\rho(a_1)\,\rho(a_2)\,\dots\,\rho(a_k))" />
                    が成り立つ。これは、巡回置換を構成する要素が <InlineMath math="\rho" /> によって移されるだけで、巡回置換自体の長さは変わらないことを示している。
                    したがって、任意の置換を互いに素な巡回置換の積に分解したとき、共役をとっても各巡回置換の長さのセットは保存される。
                    逆に、型が一致すれば適切に <InlineMath math="\rho" /> を選ぶことで互いを移し合える。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-4">
                具体的に、<InlineMath math="S_4" /> の共役類を書き出してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.1-2 (S_4 の共役類)">
                <p>
                    <InlineMath math="S_4" />（位数 24）の元は、以下の5つの共役類に分類される。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>単位置換 <InlineMath math="e" />：型 <InlineMath math="(1, 1, 1, 1)" />（1個）</li>
                    <li>互換 <InlineMath math="(1\,2)" /> など：型 <InlineMath math="(2, 1, 1)" />（6個）</li>
                    <li>巡回置換 <InlineMath math="(1\,2\,3)" /> など：型 <InlineMath math="(3, 1)" />（8個）</li>
                    <li>巡回置換 <InlineMath math="(1\,2\,3\,4)" /> など：型 <InlineMath math="(4)" />（6個）</li>
                    <li>互換の積 <InlineMath math="(1\,2)(3\,4)" /> など：型 <InlineMath math="(2, 2)" />（3個）</li>
                </ul>
                <p className="mt-4">
                    これらを合計すると <InlineMath math="1 + 6 + 8 + 6 + 3 = 24" /> となり、すべての元が漏れなく分類されていることがわかる。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-6">
                本節では対称群の基本的な性質を確認しました。次節では、偶置換全体がなす重要な部分群である「交代群」について詳しく学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>対称群 <InlineMath math="S_n" /> は <b><InlineMath math="n" /> 個のものの置換全体</b> のなす群である。</li>
                    <li>任意の置換は <b>互換の積</b> として分解でき、その個数の偶奇によって偶置換・奇置換が定義される。</li>
                    <li>符号写像 <InlineMath math="\mathrm{sgn}" /> は <InlineMath math="S_n" /> から <InlineMath math="\{1, -1\}" /> への <b>群準同型</b> である。</li>
                    <li>対称群における共役類は、巡回置換の <b>長さの型</b> によって完全に決定される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
