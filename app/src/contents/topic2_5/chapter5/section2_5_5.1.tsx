import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SubspaceTopology() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                大きな位相空間の中に含まれる部分集合を考えたとき、その部分集合自身もまた「一つの空間」として自然な位相構造を持つべきです。
                例えば、3次元空間 <InlineMath math="\mathbb{R}^3" /> の中の曲面を考えるとき、それは <InlineMath math="\mathbb{R}^3" /> の構造を引き継いでいます。
                このように、もとの空間から「遺伝」してきた位相を<strong>相対位相</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">相対位相の定義</h2>

            <p>
                部分集合上の開集合を、もとの空間の開集合との共通部分として定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (相対位相・部分空間)">
                <p>
                    位相空間 <InlineMath math="(X, \mathcal{O})" /> とその部分集合 <InlineMath math="A \subset X" /> に対し、
                    <InlineMath math="A" /> の部分集合族
                </p>
                <BlockMath math="\mathcal{O}_A = \{ U \cap A \mid U \in \mathcal{O} \}" />
                <p>
                    は <InlineMath math="A" /> 上の位相となる。これを <InlineMath math="X" /> から誘導される <InlineMath math="A" /> 上の<strong>相対位相 (Relative Topology / Subspace Topology)</strong> と呼び、
                    <InlineMath math="(A, \mathcal{O}_A)" /> を <InlineMath math="X" /> の<strong>部分空間 (Subspace)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="「開集合」の相対性">
                <p>
                    部分空間 <InlineMath math="A" /> において開集合である（<InlineMath math="V \in \mathcal{O}_A" />）ことは、必ずしも <InlineMath math="V" /> が全体の空間 <InlineMath math="X" /> で開集合であることを意味しません。
                    例えば、<InlineMath math="X = \mathbb{R}" /> において <InlineMath math="A = [0, 1]" /> とすると、
                    <InlineMath math="[0, 1/2)" /> は <InlineMath math="A" /> 内の相対位相で開集合ですが（<InlineMath math="(-1, 1/2) \cap A" /> と書けるため）、
                    <InlineMath math="\mathbb{R}" /> においては開集合ではありません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分空間の諸性質</h2>

            <p>
                閉集合や閉包についても、同様に全体の空間との共通部分を用いて記述できます。
            </p>

            <ContentBox type="proposition" title="Proposition 5.1-1 (部分空間の閉集合・閉包)">
                <p>
                    位相空間 <InlineMath math="X" /> の部分空間 <InlineMath math="A" /> において：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li><InlineMath math="F \subset A" /> が <InlineMath math="A" /> の閉集合 <InlineMath math="\iff" /> <InlineMath math="X" /> のある閉集合 <InlineMath math="E" /> を用いて <InlineMath math="F = E \cap A" /> と書ける。</li>
                    <li><InlineMath math="S \subset A" /> に対し、<InlineMath math="A" /> における <InlineMath math="S" /> の閉包を <InlineMath math="\overline{S}^A" /> とすると、<InlineMath math="\overline{S}^A = \overline{S} \cap A" /> が成り立つ（ここで <InlineMath math="\overline{S}" /> は <InlineMath math="X" /> での閉包）。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <InlineMath math="F" /> が <InlineMath math="A" /> で閉集合であるとは、<InlineMath math="A \setminus F" /> が <InlineMath math="A" /> で開集合であることと同値である。
                        相対位相の定義より、これはある <InlineMath math="U \in \mathcal{O}_X" /> を用いて <InlineMath math="A \setminus F = U \cap A" /> と書けることを意味する。
                        このとき <InlineMath math="F = A \setminus (U \cap A) = A \cap (X \setminus U)" /> となり、
                        <InlineMath math="E = X \setminus U" /> は <InlineMath math="X" /> の閉集合である。
                    </li>
                    <li>
                        <InlineMath math="\overline{S}^A" /> は <InlineMath math="S" /> を含む <InlineMath math="A" /> の閉集合すべての共通部分である。
                        (1) より、これは <InlineMath math="S" /> を含む <InlineMath math="X" /> の閉集合 <InlineMath math="E" /> に対する <InlineMath math="E \cap A" /> の共通部分に等しい。
                        すなわち <InlineMath math="\bigcap (E \cap A) = (\bigcap E) \cap A = \overline{S} \cap A" /> である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="遺伝的性質">
                <p>
                    空間 <InlineMath math="X" /> がある性質を満たすとき、その任意の部分空間 <InlineMath math="A" /> もまた同じ性質を満たす場合、その性質を<strong>遺伝的 (Hereditary)</strong> であるといいます。
                    例えば、<strong>ハウスドルフ性 (T2)</strong> や <strong>第1・第2可算公理 (C1, C2)</strong> は遺伝的です。
                    一方で、<strong>正規性 (T4)</strong> は一般には遺伝的ではありません。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>相対位相</strong>は、全体の空間の開集合を「切り取る」ことで得られる。</li>
                    <li>部分空間における性質（開・閉など）は、あくまでその空間内での相対的なものである。</li>
                    <li>T2や可算公理などは部分空間に引き継がれる（遺伝的性質）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
