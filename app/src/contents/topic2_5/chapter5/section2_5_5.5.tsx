import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function QuotientExamplesAndTychonoff() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                商空間の理論によって、我々は図形の「形」を自在に操作できるようになります。
                また、空間の構成法の究極形として、任意個の積空間におけるコンパクト性を保証するチコノフの定理についても触れます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">商空間の構成例</h2>

            <p>
                同一視（商をとる操作）によって、基礎的な図形から複雑な多様体が生まれます。
            </p>

            <ContentBox type="example" title="Example 5.5-1 (線分を繋いで円を作る)">
                <p>
                    閉区間 <InlineMath math="[0, 1]" /> において、両端点 <InlineMath math="0 \sim 1" /> を同一視する商空間を考えると、
                    これは単位円 <InlineMath math="S^1 \subset \mathbb{R}^2" /> と同相になる。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    写像 <InlineMath math="f: [0, 1] \to S^1, f(t) = (\cos 2\pi t, \sin 2\pi t)" /> を通じて、
                    「端点をくっつける」ことがトポロジー的に数学的な円そのものになることが示される。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.5-2 (トーラスとクラインの壺)">
                <p>
                    正方形 <InlineMath math="[0, 1] \times [0, 1]" /> の辺どうしを貼り合わせることで、様々な「閉じた曲面」が得られる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><strong>トーラス</strong>：向かい合う2対の辺を、向きを保って貼り合わせる（ドーナツの表面）。</li>
                    <li><strong>クラインの壺</strong>：片方の対は向きを保ち、もう片方は逆にして貼り合わせる（3次元空間内では自己交差なしには実現できない不思議な空間）。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">構成法とコンパクト性：チコノフの定理</h2>

            <p>
                「空間を組み立てる」操作において、いつ「コンパクト性（有限性のような性質）」が保たれるかという問いに対する、数学における最も美しい回答の一つがこれです。
            </p>

            <ContentBox type="theorem" title="Theorem 5.5-1 (チコノフの定理)">
                <p>
                    <strong>コンパクト空間の任意個（無限個でもよい）の積空間は、再びコンパクトである。</strong>
                </p>
                <p className="mt-4">
                    <InlineMath math="\{X_\alpha\}_{\alpha \in \Lambda}" /> がすべてコンパクト空間であれば、それらの積空間 <InlineMath math="\prod_{\alpha \in \Lambda} X_\alpha" /> も積位相に関してコンパクトである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    位相空間がコンパクトであることは、「有限交差性 (FIP) を持つ任意の閉集合族が空でない共通部分を持つ」ことと同値である（§7.1）。
                    積空間 <InlineMath math="X = \prod_{\alpha \in \Lambda} X_\alpha" /> において、FIP を持つ閉集合族 <InlineMath math="\mathcal{F}" /> をとる。
                </p>
                <ol className="list-decimal list-inside space-y-4 font-normal mt-4 ml-4">
                    <li>
                        <strong>極大族への拡張</strong>: 
                        ツォルンの補題を用いると、<InlineMath math="\mathcal{F}" /> を含む「FIP を持つ極大（包含関係に関して最大）な集合族（必ずしも閉集合とは限らない）」<InlineMath math="\mathcal{M}" /> が存在する。
                        極大性より、<InlineMath math="\mathcal{M}" /> は「有限個の要素の共通部分を含む」および「任意の集合 <InlineMath math="A" /> に対し、それが <InlineMath math="\mathcal{M}" /> のすべての要素と交わるなら <InlineMath math="A \in \mathcal{M}" /> である」という性質を持つ。
                    </li>
                    <li>
                        <strong>各成分での収束点</strong>:
                        各成分への射影を <InlineMath math="p_\alpha: X \to X_\alpha" /> とする。族 <InlineMath math="\{ p_\alpha(M) \mid M \in \mathcal{M} \}" /> も <InlineMath math="X_\alpha" /> において FIP を持つ。
                        <InlineMath math="X_\alpha" /> はコンパクトなので、閉包の共通部分 <InlineMath math="\bigcap_{M \in \mathcal{M}} \overline{p_\alpha(M)}" /> は空ではなく、点 <InlineMath math="x_\alpha" /> が存在する。
                        ここで点 <InlineMath math="x = (x_\alpha)_{\alpha \in \Lambda} \in X" /> を構成する。
                    </li>
                    <li>
                        <strong>点の確定</strong>:
                        任意の <InlineMath math="\alpha" /> と <InlineMath math="x_\alpha" /> の任意の近傍 <InlineMath math="U_\alpha" /> に対し、<InlineMath math="p_\alpha^{-1}(U_\alpha)" /> は <InlineMath math="\mathcal{M}" /> のすべての要素と交わる。
                        （さもなくば、ある <InlineMath math="M" /> に対して <InlineMath math="p_\alpha(M) \cap U_\alpha = \emptyset" /> となり、<InlineMath math="x_\alpha \in \overline{p_\alpha(M)}" /> に矛盾する）。
                        極大性より <InlineMath math="p_\alpha^{-1}(U_\alpha) \in \mathcal{M}" /> である。
                        有限個の成分に関する共通部分（積位相の基本開集合）も <InlineMath math="\mathcal{M}" /> に属するため、<InlineMath math="x" /> の任意の近傍 <InlineMath math="W" /> は <InlineMath math="\mathcal{M}" /> の要素、ひいては <InlineMath math="\mathcal{F}" /> の要素と交わる。
                    </li>
                    <li>
                        <strong>結論</strong>:
                        <InlineMath math="\mathcal{F}" /> の各要素 <InlineMath math="F" /> は閉集合であり、<InlineMath math="x" /> の任意の近傍が <InlineMath math="F" /> と交わることから <InlineMath math="x \in \overline{F} = F" /> である。
                        よって <InlineMath math="x \in \bigcap_{F \in \mathcal{F}} F" /> であり、共通部分は空ではない。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="選択公理との関わり">
                <p>
                    チコノフの定理 (Tychonoff's Theorem) は、驚くべきことに<strong>選択公理 (Axiom of Choice)</strong> と同値であることが知られています。
                    トポロジーの定理が集合論の根本的な公理と結びついている非常に深い例であり、
                    現代数学（関数解析学など）の基礎を支える重要な柱となっています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>商空間を用いることで、線分や正方形から円・トーラスなどの「閉じた」空間を構成できる。</li>
                    <li><strong>チコノフの定理</strong>は、積空間のコンパクト性を保証するトポロジーの金字塔である。</li>
                    <li>複雑な空間を「組み立てる」ための理論（部分・積・商）を使いこなすことが、位相空間論を理解する鍵となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
