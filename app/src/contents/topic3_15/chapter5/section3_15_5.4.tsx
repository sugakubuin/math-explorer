import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PreservationOfLimits() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                関手で圏と圏を結んだとき、元の圏で作った極限（直積など）が、移った先の圏でも正しく極限のままであるか（極限を保存するか）は、極めて重要な性質です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">関手による極限の保存</h2>

            <ContentBox
                type="definition"
                title="Definition 5.4-1 (極限保存関手)"
            >
                <p>
                    関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> が <strong><InlineMath math="\mathcal{J}" />-型極限を保存する</strong>とは、<InlineMath math="\mathcal{C}" /> における任意の <InlineMath math="\mathcal{J}" />-型極限錐 <InlineMath math="(L, \{\pi_j\})" /> が、関手 <InlineMath math="F" /> で送られた先でも、<InlineMath math="\mathcal{D}" /> における極限錐 <InlineMath math="(F(L), \{F(\pi_j)\})" /> になっていることをいう。
                </p>
                <p>
                    式で書けば、<InlineMath math="F(\varprojlim D) \cong \varprojlim F(D)" /> が自然に成立するということである。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                どんな関手が極限を保存するのでしょうか。次章で学ぶ「随伴関手（Adjoint Functors）」の性質を先取りする形で、最も重要で強力な定理を提示します。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 5.4-1 (右随伴は極限を保存し、左随伴は余極限を保存する)"
            >
                <p>
                    随伴関係 <InlineMath math="F \dashv G" /> （<InlineMath math="F" /> が左随伴、<InlineMath math="G" /> が右随伴）があるとき、
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>右随伴関手 <InlineMath math="G" /> は、存在する<strong>すべての極限を保存する</strong>。</li>
                    <li>左随伴関手 <InlineMath math="F" /> は、存在する<strong>すべての余極限を保存する</strong>。</li>
                </ul>
                <p>
                    （※証明は Chapter 6 において随伴の厳密な定義を行った後に行う。）
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.4-1 (忘却関手の極限保存)"
            >
                <p>
                    群の忘却関手 <InlineMath math="U : \mathbf{Grp} \to \mathbf{Set}" /> は、自由群関手という「左随伴」を持つため、<InlineMath math="U" /> 自身は「右随伴」である。
                </p>
                <p>
                    したがって上記の定理より、<InlineMath math="U" /> はすべての極限（積、等化子、引き戻しなど）を保存する。
                    具体的には、「群の直積 <InlineMath math="G \times H" /> の台集合をとる」ことと、「台集合 <InlineMath math="|G|" /> と <InlineMath math="|H|" /> をとってから集合の直積を作る」ことは完全に一致する。
                    （<InlineMath math="U(G \times H) \cong U(G) \times U(H)" />）
                </p>
                <p>
                    一方で <InlineMath math="U" /> は余極限は保存しない。群の余積（自由積 <InlineMath math="G * H" />）の台集合は、単なる集合の余積（非交和 <InlineMath math="|G| \sqcup |H|" />）とは全く異なる巨大な集合になる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">極限と余極限の相互関係</h2>

            <p className="leading-relaxed">
                極限は外部からの射（普遍性）で定義されるため、射の集合を調べる hom 関手と極めて相性が良いです。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 5.4-1 (hom 関手による極限保存)"
            >
                <p>
                    任意の対象 <InlineMath math="A" /> に対する共変 hom 関手 <InlineMath math="\mathrm{Hom}(A, -) : \mathcal{C} \to \mathbf{Set}" /> は、<strong>すべての極限を保存する</strong>。
                </p>
                <BlockMath math="\mathrm{Hom}(A, \varprojlim D) \cong \varprojlim \mathrm{Hom}(A, D(-))" />
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    極限 <InlineMath math="L = \varprojlim D" /> の普遍性とは、「任意の頂点 <InlineMath math="A" /> からの錐は、極限対象 <InlineMath math="L" /> への一意な射 <InlineMath math="A \to L" /> と一対一対応する」ということであった。
                </p>
                <p>
                    これを式で書くと、
                    <BlockMath math="\mathrm{Hom}(A, \varprojlim D) \cong \mathrm{Cone}(A, D)" />
                    となる。
                    一方で、右辺の「<InlineMath math="\mathbf{Set}" /> における極限」<InlineMath math="\varprojlim \mathrm{Hom}(A, D(-))" /> は、集合の極限（引き戻し等）の構成から「射 <InlineMath math="f_j : A \to D(j)" /> の族であって、図式の射と可換になるものの集まり」に一致する。
                    これはまさに錐の定義 <InlineMath math="\mathrm{Cone}(A, D)" /> そのものである。
                </p>
                <p>
                    したがって両者は自然に同型となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>関手が<strong>極限を保存する</strong>とは、極限をとる操作と関手を適用する操作の順序を交換しても同型になることである。</li>
                    <li><strong>右随伴関手</strong>（例えば忘却関手）は常に極限を保存し、<strong>左随伴関手</strong>は常に余極限を保存する。（詳細は次章）</li>
                    <li><strong>hom 関手 <InlineMath math="\mathrm{Hom}(A, -)" /></strong> は極限を保存する。これは極限の普遍性そのものを関手の言葉で言い換えたものである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
