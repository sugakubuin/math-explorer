import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfFunctors() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                圏は「対象」と「射」からなる構造でした。数学において、構造があれば「その構造を保存する写像」を考えるのが常套手段です。圏から圏への「構造を保存する写像」のことを<strong>関手（Functor）</strong>と呼びます。関手は、代数学、幾何学、位相空間論といった異なる数学の分野間に橋を架ける役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">共変関手と反変関手</h2>

            <p className="leading-relaxed">
                関手は対象を対象へ、射を射へ送ります。このとき、射の「向き」をそのまま保つか、逆にするかで2種類の関手が定義されます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.1-1 (共変関手 / Covariant Functor)"
            >
                <p>
                    圏 <InlineMath math="\mathcal{C}" /> から圏 <InlineMath math="\mathcal{D}" /> への<strong>共変関手</strong> <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> とは、以下の対応関係の組である。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>各対象 <InlineMath math="A \in \mathcal{C}" /> を、対象 <InlineMath math="F(A) \in \mathcal{D}" /> に対応させる。</li>
                    <li>各射 <InlineMath math="f : A \to B" /> （<InlineMath math="\mathcal{C}" /> の射）を、射 <InlineMath math="F(f) : F(A) \to F(B)" /> （<InlineMath math="\mathcal{D}" /> の射）に対応させる。</li>
                </ol>
                <p>
                    さらに、この対応は圏の構造（合成と恒等射）を保存しなければならない。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>恒等射の保存：</strong> 任意の <InlineMath math="A" /> について、<InlineMath math="F(\mathrm{id}_A) = \mathrm{id}_{F(A)}" /></li>
                    <li><strong>合成の保存：</strong> 任意の <InlineMath math="f : A \to B" /> と <InlineMath math="g : B \to C" /> に対して、<InlineMath math="F(g \circ f) = F(g) \circ F(f)" /></li>
                </ul>
            </ContentBox>

            <ContentBox
                type="definition"
                title="Definition 2.1-2 (反変関手 / Contravariant Functor)"
            >
                <p>
                    圏 <InlineMath math="\mathcal{C}" /> から圏 <InlineMath math="\mathcal{D}" /> への<strong>反変関手</strong> <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> とは、射の向きと合成の順番を「逆」にする対応関係である。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>各射 <InlineMath math="f : A \to B" /> に対して、送られた先の射は<strong>逆向き</strong>になる：<InlineMath math="F(f) : F(B) \to F(A)" /></li>
                    <li><strong>合成の保存（逆順）：</strong> <InlineMath math="F(g \circ f) = F(f) \circ F(g)" /></li>
                    <li>恒等射はそのまま保存される：<InlineMath math="F(\mathrm{id}_A) = \mathrm{id}_{F(A)}" /></li>
                </ul>
                <p>
                    反変関手は、形式的には「反対圏 <InlineMath math="\mathcal{C}^{op}" /> から <InlineMath math="\mathcal{D}" /> への共変関手」と全く同じものであるため、圏論の定理では共変関手のみを扱い、反変は反対圏を用いて処理することが多い。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.1-1 (恒等関手と定値関手)"
            >
                <p>
                    最も自明な関手の例を挙げる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>恒等関手（Identity Functor） <InlineMath math="\mathrm{Id}_\mathcal{C} : \mathcal{C} \to \mathcal{C}" />：</strong><br/>
                    すべての対象と射を、何も変更せずに自分自身に送る関手。（<InlineMath math="A \mapsto A" />, <InlineMath math="f \mapsto f" />）</li>
                    <li><strong>定値関手（Constant Functor） <InlineMath math="\Delta_D : \mathcal{C} \to \mathcal{D}" />：</strong><br/>
                    <InlineMath math="\mathcal{D}" /> のある対象 <InlineMath math="D" /> を固定し、<InlineMath math="\mathcal{C}" /> のすべての対象を <InlineMath math="D" /> に送り、すべての射を恒等射 <InlineMath math="\mathrm{id}_D" /> に「潰して」しまう関手。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">hom 関手</h2>

            <p className="leading-relaxed">
                任意の局所小圏には、自分自身の「射の集合（hom 集合）」を使って自動的に定義される非常に重要な関手が存在します。それが hom 関手です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.1-3 (hom 関手)"
            >
                <p>
                    局所小圏 <InlineMath math="\mathcal{C}" /> と、その対象 <InlineMath math="A \in \mathcal{C}" /> を固定する。
                </p>
                <p>
                    <strong>共変 hom 関手 <InlineMath math="\mathrm{Hom}(A, -) : \mathcal{C} \to \mathbf{Set}" />：</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 mb-4">
                    <li>対象の対応： <InlineMath math="B \mapsto \mathrm{Hom}_\mathcal{C}(A, B)" /> （<InlineMath math="A" /> から <InlineMath math="B" /> への射の集合）</li>
                    <li>射の対応： <InlineMath math="f : B \to C" /> に対して、<InlineMath math="f \circ - : \mathrm{Hom}(A, B) \to \mathrm{Hom}(A, C)" />。<br/>
                    （入力された射 <InlineMath math="h : A \to B" /> に、左から <InlineMath math="f" /> を合成して <InlineMath math="f \circ h : A \to C" /> とする「前送り写像」）</li>
                </ul>
                <p>
                    <strong>反変 hom 関手 <InlineMath math="\mathrm{Hom}(-, A) : \mathcal{C}^{op} \to \mathbf{Set}" />：</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>対象の対応： <InlineMath math="B \mapsto \mathrm{Hom}_\mathcal{C}(B, A)" /></li>
                    <li>射の対応： <InlineMath math="f : B \to C" /> に対して、<InlineMath math="- \circ f : \mathrm{Hom}(C, A) \to \mathrm{Hom}(B, A)" />。<br/>
                    （入力された射 <InlineMath math="k : C \to A" /> に、右から <InlineMath math="f" /> を合成して <InlineMath math="k \circ f : B \to A" /> とする「引き戻し写像」）</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 2.1-1 (hom 関手の関手性)"
            >
                <p>
                    上記で定義された <InlineMath math="\mathrm{Hom}(A, -)" /> は、確かに共変関手の公理（恒等射の保存、合成の保存）を満たす。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>恒等射の保存：</strong><br/>
                    対象 <InlineMath math="B" /> の恒等射 <InlineMath math="\mathrm{id}_B" /> を送ると、写像 <InlineMath math="\mathrm{id}_B \circ - : \mathrm{Hom}(A, B) \to \mathrm{Hom}(A, B)" /> になる。
                    任意の要素 <InlineMath math="h \in \mathrm{Hom}(A, B)" /> に適用すると <InlineMath math="\mathrm{id}_B \circ h = h" />（圏の単位律より）。
                    何もしない写像であるから、これは <span className="font-semibold">Set</span> における恒等写像 <InlineMath math="\mathrm{id}_{\mathrm{Hom}(A, B)}" /> に一致する。
                </p>
                <p>
                    <strong>合成の保存：</strong><br/>
                    射 <InlineMath math="f : B \to C" /> と <InlineMath math="g : C \to D" /> があるとする。<InlineMath math="g \circ f" /> を送った写像は <InlineMath math="(g \circ f) \circ -" /> である。
                    任意の要素 <InlineMath math="h \in \mathrm{Hom}(A, B)" /> に適用すると、
                    <BlockMath math="\mathrm{Hom}(A, g \circ f)(h) = (g \circ f) \circ h" />
                    圏の結合律より、これは <InlineMath math="g \circ (f \circ h)" /> と等しい。
                    右辺を写像の合成として分解すると、
                    <BlockMath math="g \circ (f \circ h) = (\mathrm{Hom}(A, g) \circ \mathrm{Hom}(A, f))(h)" />
                    となり、<InlineMath math="\mathrm{Hom}(A, g \circ f) = \mathrm{Hom}(A, g) \circ \mathrm{Hom}(A, f)" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 2.1-2 (<InlineMath math="\mathbf{Vect}" /> での hom 関手と双対空間)</span>}
            >
                <p>
                    ベクトル空間の圏 <InlineMath math="\mathbf{Vect}_\mathbb{k}" /> を考える。
                    対象（空間）<InlineMath math="V, W" /> 間の射の集合 <InlineMath math="\mathrm{Hom}(V, W)" /> は、単なる集合ではなく、それ自体がベクトル空間の構造を持つ。
                </p>
                <p>
                    ここで、固定する対象を基礎体 <InlineMath math="\mathbb{k}" />（これも1次元ベクトル空間）とする反変 hom 関手 <InlineMath math="\mathrm{Hom}(-, \mathbb{k})" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>空間 <InlineMath math="V" /> は、<InlineMath math="\mathrm{Hom}(V, \mathbb{k}) = V^*" /> （<InlineMath math="V" /> からの線形汎関数全体、すなわち<strong>双対ベクトル空間</strong>）に送られる。</li>
                    <li>線形写像 <InlineMath math="f : V \to W" /> は、<InlineMath math="- \circ f : W^* \to V^*" /> （<InlineMath math="f" /> による汎関数の引き戻し、すなわち<strong>双対写像 <InlineMath math="f^*" /></strong>）に送られる。</li>
                </ul>
                <p>
                    このように、線形代数で学ぶ「双対空間と転置行列（双対写像）」の理論は、反変 hom 関手そのものとして極めて自然に定式化される。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>関手（Functor）</strong>は、圏から圏への対応であり、対象と射の構造（合成と恒等射）を保存する。</li>
                    <li>射の向きを保つものを<strong>共変関手</strong>、射の向きを逆転させるものを<strong>反変関手</strong>と呼ぶ。</li>
                    <li>圏自身が持つ射の集合を使った <strong>hom 関手</strong>（共変 <InlineMath math="\mathrm{Hom}(A, -)" />、反変 <InlineMath math="\mathrm{Hom}(-, A)" />）は、圏を分析するための最も基本的な関手である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}