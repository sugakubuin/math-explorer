import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ComponentsAndLocalConnectedness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                空間全体が連結でない場合でも、その内部には「連結な塊」が存在します。
                また、一点の近傍において「バラバラになっていないか」という局所的な視点も、空間の構造を理解する上で不可欠です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連結成分</h2>

            <p>
                連結成分は、空間を「連結な島」へと分割する手段を提供します。
            </p>

            <ContentBox type="definition" title="Definition 8.4-1 (連結成分)">
                <p>
                    位相空間 <InlineMath math="X" /> の点 <InlineMath math="x" /> を含む<strong>連結成分 (Connected Component)</strong> とは、
                    <InlineMath math="x" /> を含むすべての連結部分集合の和集合である。
                </p>
                <p className="mt-4">
                    これは、 <InlineMath math="x" /> を含み包含関係に関して<strong>極大</strong>な連結部分集合であり、その点を含む「最大の連結な塊」を意味します。
                </p>
            </ContentBox>

            <p className="mt-4">
                連結成分は、空間に対して非常に強力な分割を与えます。
            </p>

            <ContentBox type="proposition" title="Proposition 8.4-1 (連結成分の性質)">
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li>各連結成分は <InlineMath math="X" /> の<strong>閉集合</strong>である。</li>
                    <li>異なる連結成分は互いに素であり、全連結成分の和は <InlineMath math="X" /> と一致する。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="C" /> を連結成分とする。以前の章で学んだ通り（あるいは連結性の基本性質より）、連結集合の閉包 <InlineMath math="\overline{C}" /> もまた連結である。
                    一方、連結成分の定義より、 <InlineMath math="C" /> は包含関係に関して極大な連結集合である。
                    <InlineMath math="C \subset \overline{C}" /> であり <InlineMath math="\overline{C}" /> も連結であるから、極大性より <InlineMath math="\overline{C} = C" /> でなければならない。
                    したがって <InlineMath math="C" /> は閉集合である。
                </p>
                <p className="mt-4">
                    (2) 連結性の定義に基づき、点に対する関係 <InlineMath math="x \sim y" /> を「 <InlineMath math="x" /> と <InlineMath math="y" /> をともに含む連結部分集合が存在する」と定義すると、これは同値関係となる。
                    この同値関係による同値類が、まさに連結成分の定義と一致する。
                    同値類は集合の分割を構成するため、各連結成分は互いに素であり、その和集合は全体 <InlineMath math="X" /> に一致する。
                    <div className="text-right text-slate-500 dark:text-slate-400">
                        <InlineMath math="\square" />
                    </div>
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">局所連結性</h2>

            <p>
                これまで扱ってきた「連結性」は大域的な性質でしたが、一点周辺の性質としての連結性も定義できます。
            </p>

            <ContentBox type="definition" title="Definition 8.4-2 (局所連結性)">
                <p>
                    位相空間 <InlineMath math="X" /> が点 <InlineMath math="x" /> で<strong>局所連結 (Locally connected)</strong> であるとは、
                    <InlineMath math="x" /> の任意の近傍が、連結な部分近傍（<InlineMath math="x" /> を含む連結な開集合など）を含むことをいう。
                </p>
                <p className="mt-4">
                    空間のすべての点において局所連結であるとき、その空間を<strong>局所連結空間</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="mt-4">
                連結性と局所連結性は独立した概念です。以下の例でその違いを確認しましょう。
            </p>

            <ContentBox type="example" title="Example 8.4-1 (連結性と局所連結性の乖離)">
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>
                        <strong>連結だが局所連結でない例</strong>： 位相幾何学者の正弦曲線。
                        全体は1つに繋がっていますが、原点付近の点を包含する小さな開球をとると、振動する細かい線分たちがバラバラに含まれてしまい、連結になりません。
                    </li>
                    <li>
                        <strong>局所連結だが連結でない例</strong>： 2つの離れた開円盤の和集合。
                        各点の周りでは小さな連結近傍がとれますが、全体としては2つの島に分かれています。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">局所連結空間の連結成分</h2>

            <p>
                空間が局所的に「素直」な構造（局所連結）を持っていれば、大域的な連結成分も良い性質を持ちます。
            </p>

            <ContentBox type="proposition" title="Proposition 8.4-2 (連結成分の開集合性)">
                <p>
                    局所連結空間において、各連結成分は<strong>開集合</strong>である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="C" /> を局所連結空間 <InlineMath math="X" /> の連結成分とする。
                    任意の点 <InlineMath math="x \in C" /> に対して、局所連結性より、ある連結近傍 <InlineMath math="V" /> が存在して <InlineMath math="x \in \mathrm{Int}(V) \subset V" /> となる。
                </p>
                <p className="mt-4">
                    <InlineMath math="V" /> は <InlineMath math="x" /> を含む連結集合であるから、 <InlineMath math="C" /> が極大連結集合であることより、 <InlineMath math="V \subset C" /> でなければならない。
                    したがって <InlineMath math="x \in \mathrm{Int}(V) \subset C" /> となり、 <InlineMath math="x" /> は <InlineMath math="C" /> の内点である。
                    ゆえに <InlineMath math="C" /> は開集合である。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <ContentBox type="remark" title="位数学の面白さ">
                <p>
                    局所的な性質（局所連結）が、大域的な構造（連結成分が開集合になること）を規定する。
                    このような「局所から大域へ」の橋渡しは、現代数学における極めて重要なテーマの一つです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>連結成分</strong>：点を含む最大の連結な塊。空間を互いに素な閉集合へと分割する。</li>
                    <li><strong>局所連結性</strong>：各点のまわりで「バラバラになっていない」という局所的な性質。</li>
                    <li><strong>関係性</strong>：局所連結空間では、連結成分は（閉集合であるだけでなく）開集合にもなる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
