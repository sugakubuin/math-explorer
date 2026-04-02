import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DiagramsAndCones() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                数学において「直積」「商」「引き戻し（ファイバー積）」といった概念は、一見ばらばらに見えますが、実はすべて「特定の形をした図式の極限（または余極限）」という全く同じ枠組みで統一的に記述できます。本章では、その基礎となる「図式」と「錐」の概念を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">図式の定義</h2>

            <p className="leading-relaxed">
                圏論において、ある対象や射の集まりを「図式」として指定するには、小さな圏（添字圏）からの関手を用いるのが最も自然です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 5.1-1 (図式 / Diagram)"
            >
                <p>
                    小圏 <InlineMath math="\mathcal{J}" />（添字圏, index category）と圏 <InlineMath math="\mathcal{C}" /> が与えられたとき、関手 <InlineMath math="D : \mathcal{J} \to \mathcal{C}" /> を、<InlineMath math="\mathcal{C}" /> における <strong><InlineMath math="\mathcal{J}" />-型図式</strong> という。
                </p>
                <p>
                    これは、<InlineMath math="\mathcal{J}" /> の形（ネットワーク構造）を、そのまま <InlineMath math="\mathcal{C}" /> の中に対象と射の配置として「描き出す」操作に他ならない。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.1-1 (代表的な添字圏と図式)"
            >
                <p>
                    添字圏 <InlineMath math="\mathcal{J}" /> の選び方によって、様々な図式の形が得られる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>離散 2 点圏（<InlineMath math="\bullet \quad \bullet" />）：</strong> 射が恒等射しかない2つの対象からなる圏。<br/>
                    これに対応する図式は、<InlineMath math="\mathcal{C}" /> の中の無関係な2つの対象のペア <InlineMath math="(A, B)" /> である。</li>
                    <li><strong>並列射圏（<InlineMath math="\bullet \rightrightarrows \bullet" />）：</strong> 2つの対象の間に平行な2つの射がある圏。<br/>
                    図式は、<InlineMath math="\mathcal{C}" /> における並行な2つの射 <InlineMath math="f, g : A \rightrightarrows B" /> である。</li>
                    <li><strong>コスパン圏（<InlineMath math="\bullet \to \bullet \leftarrow \bullet" />）：</strong> 3つの対象と、真ん中へ向かう2つの射からなる圏。<br/>
                    図式は、同じ対象に向かう射の対 <InlineMath math="A \xrightarrow{f} C \xleftarrow{g} B" />（コスパン）である。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">錐と余錐</h2>

            <p className="leading-relaxed">
                図式が与えられたとき、それを「外から一つにまとめる」ような視点を持つ対象を考えます。これが錐（すい）です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 5.1-2 (錐と余錐 / Cone and Cocone)"
            >
                <p>
                    <strong>錐（Cone）：</strong><br/>
                    図式 <InlineMath math="D : \mathcal{J} \to \mathcal{C}" /> に対する錐とは、<InlineMath math="\mathcal{C}" /> の対象 <InlineMath math="N" />（頂点という）と、<InlineMath math="\mathcal{J}" /> の各対象 <InlineMath math="j" /> ごとに定まる射の族 <InlineMath math="\lambda_j : N \to D(j)" /> の組 <InlineMath math="(N, \{\lambda_j\})" /> であり、次の条件を満たすものである。
                </p>
                <ul className="list-disc list-inside mt-1 mb-3">
                    <li><InlineMath math="\mathcal{J}" /> の任意の射 <InlineMath math="f : j \to k" /> に対して、<InlineMath math="D(f) \circ \lambda_j = \lambda_k" /> が可換になる。</li>
                </ul>
                <p>
                    <strong>余錐（Cocone）：</strong><br/>
                    矢印の向きをすべて逆にしたもの。すなわち対象 <InlineMath math="N" /> と、図式から <InlineMath math="N" /> へ向かう射の族 <InlineMath math="\lambda_j : D(j) \to N" /> の組で、任意の射 <InlineMath math="f : j \to k" /> に対して <InlineMath math="\lambda_k \circ D(f) = \lambda_j" /> が可換になるもの。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.1-2 (積の錐)"
            >
                <p>
                    離散 2 点圏 <InlineMath math="\mathcal{J} = \{1, 2\}" /> に対応する図式 <InlineMath math="D(1) = A" />, <InlineMath math="D(2) = B" /> に対する錐を考える。
                </p>
                <p>
                    添字圏 <InlineMath math="\mathcal{J}" /> には恒等射以外の射が存在しないため、「可換になるべき条件」は一切発生しない。
                    したがって、この図式に対する頂点 <InlineMath math="N" /> からの錐とは、単なる「射のペア <InlineMath math="(N \to A, N \to B)" />」のことである。
                </p>
                <p>
                    集合論における「直積の普遍性（対象 <InlineMath math="X" /> から直積 <InlineMath math="A \times B" /> への写像は、<InlineMath math="X \to A" /> と <InlineMath math="X \to B" /> の写像のペアと一対一対応する）」は、まさにこの「錐」の構造を前提としていることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>対象の配置を圏論的に表現するものを<strong>図式</strong>と呼び、それは小圏からの関手 <InlineMath math="D : \mathcal{J} \to \mathcal{C}" /> として定義される。</li>
                    <li>図式のすべての対象へ、矛盾なく（可換に）射を伸ばす頂点 <InlineMath math="N" /> のことを、その図式上の<strong>錐（Cone）</strong>と呼ぶ。</li>
                    <li>逆に、図式のすべての対象から矛盾なく射を集める頂点 <InlineMath math="N" /> のことを<strong>余錐（Cocone）</strong>と呼ぶ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
