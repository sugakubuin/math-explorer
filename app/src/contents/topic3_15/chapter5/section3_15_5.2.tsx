import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfLimits() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                図式に対する錐は一般に無数に存在します。その中で「最も効率よく、過不足なく図式の情報だけをまとめた究極の錐」こそが、圏論における「極限（Limit）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">極限の定義</h2>

            <ContentBox
                type="definition"
                title="Definition 5.2-1 (極限 / Limit)"
            >
                <p>
                    図式 <InlineMath math="D : \mathcal{J} \to \mathcal{C}" /> の<strong>極限</strong>とは、<InlineMath math="D" /> 上のすべての錐の中で「終対象（Terminal object）」となるような錐のことである。
                </p>
                <p>
                    すなわち、ある錐 <InlineMath math="(L, \{\pi_j\})" /> が極限であるとは、任意の錐 <InlineMath math="(N, \{\lambda_j\})" /> が与えられたとき、それらを結ぶ<strong>一意な射</strong> <InlineMath math="u : N \to L" /> が存在して、すべての <InlineMath math="j \in \mathcal{J}" /> について
                    <BlockMath math="\pi_j \circ u = \lambda_j" />
                    が可換になることをいう。<InlineMath math="L = \varprojlim D" /> と書く。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この抽象的な定義が、いかにして私たちがよく知る具体的な数学の概念を網羅しているかを見てみましょう。添字圏 <InlineMath math="\mathcal{J}" /> の形を変えるだけで、極限は様々な姿をとります。
            </p>

            <ContentBox
                type="example"
                title="Example 5.2-1 (積 / Product)"
            >
                <p>
                    離散圏 <InlineMath math="\{1, 2\}" /> 上の図式（対象のペア <InlineMath math="A, B" />）の極限は、<strong>積 <InlineMath math="A \times B" /></strong> である。
                </p>
                <p>
                    極限の射の族は「射影」<InlineMath math="\pi_1 : A \times B \to A" />, <InlineMath math="\pi_2 : A \times B \to B" /> に相当する。
                    極限の定義「任意の錐（<InlineMath math="N \to A" /> と <InlineMath math="N \to B" /> の組）に対して一意な射 <InlineMath math="u : N \to A \times B" /> が存在する」は、まさに集合論や位相空間論で学ぶ「直積の普遍性」と完全に一致する。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.2-2 (等化子 / Equalizer)"
            >
                <p>
                    並列射 <InlineMath math="f, g : A \rightrightarrows B" />（並列射圏からの図式）の極限は、<strong>等化子（イコライザ）</strong>である。
                </p>
                <p>
                    錐の条件は <InlineMath math="f \circ e = g \circ e" /> を満たす射 <InlineMath math="e : E \to A" />（頂点 <InlineMath math="E" />）となる。
                    集合の圏 <InlineMath math="\mathbf{Set}" /> であれば、等化子の極限対象は
                    <BlockMath math="\mathrm{Eq}(f,g) = \{a \in A \mid f(a) = g(a)\}" />
                    として具体的に構成される。これは「方程式 <InlineMath math="f(x) = g(x)" /> の解空間」を一般化した概念である。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.2-3 (引き戻し / Pullback)"
            >
                <p>
                    コスパン <InlineMath math="A \xrightarrow{f} C \xleftarrow{g} B" /> の極限を、<strong>引き戻し（ファイバー積）</strong>といい、<InlineMath math="A \times_C B" /> と書く。
                </p>
                <p>
                    集合の圏における引き戻しは以下のように構成される。
                    <BlockMath math="A \times_C B = \{(a,b) \in A \times B \mid f(a) = g(b)\}" />
                    これは多様体の交叉や、ファイバー束の理論（代数的トポロジー、微分幾何学）において最も頻繁に現れる構成である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">終対象と積</h2>

            <p className="leading-relaxed">
                極限の概念は、さらに極端な（小さな）図式にも適用できます。
            </p>

            <ContentBox
                type="example"
                title="Example 5.2-4 (終対象 / Terminal Object)"
            >
                <p>
                    <strong>空圏</strong>（対象も射も全く持たない圏）から <InlineMath math="\mathcal{C}" /> への図式を考える。この図式の極限とは何か。
                </p>
                <p>
                    図式が空であるため、錐をなすための「可換性条件」も「射の族」も空である。つまり、任意の対象 <InlineMath math="N \in \mathcal{C}" /> はそれ自体が自明に錐となる。
                    したがって極限の定義は、「任意の対象 <InlineMath math="N" /> から、その極限対象 <InlineMath math="L" /> へ向かう一意な射が存在する」こととなる。
                </p>
                <p>
                    これはまさに<strong>終対象</strong>（Terminal Object）の定義である。
                    （例：<InlineMath math="\mathbf{Set}" /> では一元集合 <InlineMath math="\{*\}" />、<InlineMath math="\mathbf{Grp}" /> では自明群 <InlineMath math="\{e\}" />）
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="極限の存在と完備圏"
            >
                <p>
                    任意の（小さな）図式に対して常に極限が存在する圏を<strong>完備圏（Complete Category）</strong>と呼びます。
                    私たちがよく知る <InlineMath math="\mathbf{Set}, \mathbf{Grp}, \mathbf{Top}" /> などはすべて完備圏です。
                </p>
                <p>
                    実は「任意の小さな積が存在し、任意の等化子が存在する圏は完備である」という定理があり、複雑な極限もこの2つの基本的な極限の組み合わせだけで構成できることが知られています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>図式の<strong>極限</strong>とは、その図式への「終対象となるような普遍的な錐」のことである。</li>
                    <li>図式の形によって、極限は<strong>直積</strong>、<strong>等化子</strong>、<strong>引き戻し</strong>など、数学の様々な基本的構成として姿を現す。</li>
                    <li>極限は要素ではなく「外からの射の集まり（普遍性）」によって同型を除いて一意に定まる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
