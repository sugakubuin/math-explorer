import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TopologicalInvariants() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「2つの空間が同相であること」を直接示すには同相写像を作ればよいですが、
                「同相でないこと」を示すにはどうすればよいでしょうか？
                ここで重要になるのが、同相写像によって保たれる性質、すなわち<strong>位相的不変量</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">位相的不変量の定義</h2>

            <p>
                トポロジーにおいて、空間を分類するための「尺度」となる性質です。
            </p>

            <ContentBox type="definition" title="Definition 4.3-1 (位相的不変量)">
                <p>
                    位相空間の性質 <InlineMath math="P" /> が、任意の同相な2つの空間 <InlineMath math="X, Y" /> に対して、
                    「<InlineMath math="X" /> が <InlineMath math="P" /> を満たすならば、<InlineMath math="Y" /> も <InlineMath math="P" /> を満たす」
                    という条件を満たすとき、その性質 <InlineMath math="P" /> を<strong>位相的不変量 (Topological Invariant)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <p className="mt-4">
                もし、2つの空間 <InlineMath math="X, Y" /> に対して、一方が持っている位相的不変量を他方が持っていないことが分かれば、
                それだけで <InlineMath math="X \not\cong Y" />（同相ではない）と断定できます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">主な位相的不変量</h2>

            <p>
                これまでの学習で触れた、あるいはこれから詳しく学ぶ以下の性質はすべて位相的不変量です。
            </p>

            <ContentBox type="example" title="Example 4.3-1 (代表的な位相的不変量)">
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><strong>コンパクト性</strong>（第7章）</li>
                    <li><strong>連結性・弧状連結性</strong>（第8章）</li>
                    <li><strong>分離公理</strong>（T0, T1, T2（ハウスドルフ）など、第6章）</li>
                    <li><strong>可算公理</strong>（第一・第二可算公理、§2.5, §2.6）</li>
                    <li><strong>可分性</strong>（§2.3）</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof (第2可算公理の不変性)">
                <p>
                    <InlineMath math="X" /> が第2可算公理を満たし、<InlineMath math="X \cong Y" /> であるとする。
                    同相写像 <InlineMath math="f: X \to Y" /> を用いて、<InlineMath math="X" /> の可算開基 <InlineMath math="\mathcal{B}" /> の像
                    <InlineMath math="\mathcal{B}' = \{ f(B) \mid B \in \mathcal{B} \}" /> を考えると、
                    <InlineMath math="f" /> が開写像（逆写像が連続であるため）であることから、これらは <InlineMath math="Y" /> の開集合であり、かつ <InlineMath math="Y" /> の開基をなす。
                    よって <InlineMath math="Y" /> も第2可算公理を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400 font-bold">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="不変量の「強さ」">
                <p>
                    不変量が多ければ多いほど、空間を細かく分類できます。
                    例えば「濃度（点の数）」も同相で保たれますが、これは非常に弱い不変量です（開区間と実数直線は濃度が同じでも同相ですが、これだけでは情報の欠落が大きすぎます）。
                    トポロジーの目標の一つは、それらが等しければ同相であると言えるような「完全な不変量」を見つけることですが、それは一般には非常に困難です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>位相的不変量</strong>は、同相写像によって引き継がれる空間の性質である。</li>
                    <li>不変量の違いを示すことで、2つの空間が「同相ではない」ことを厳密に証明できる。</li>
                    <li>コンパクト性、連結性、各種公理は、トポロジーにおける最も強力な武器（不変量）である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
