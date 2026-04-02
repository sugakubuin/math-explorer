import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CompactnessTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                完全性定理は、論理学の基礎づけを完了させただけでなく、「コンパクト性定理」という非常に強力な副産物を生み出しました。この定理は、代数学や組合せ論など、数学の様々な分野で「無限」を扱うための魔法の杖として使われます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">コンパクト性定理の主張と証明</h2>

            <ContentBox
                type="theorem"
                title="Theorem 5.3-1 (コンパクト性定理 / Compactness Theorem)"
            >
                <p>
                    文の集合（理論） <InlineMath math="T" /> がモデルをもつ（充足可能である）ための必要十分条件は、<InlineMath math="T" /> の<strong>任意の有限部分集合がモデルをもつ</strong>ことである。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="(\Rightarrow)" />： <InlineMath math="T" /> 全体を満たすモデル <InlineMath math="\mathcal{M}" /> が存在すれば、当然そのモデルは <InlineMath math="T" /> の一部を取り出した有限部分集合も満たす。
                </p>
                <p>
                    <InlineMath math="(\Leftarrow)" />： 対偶を示す。「<InlineMath math="T" /> が充足不可能ならば、ある有限部分集合も充足不可能である」ことを示せばよい。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="T" /> が充足不可能であると仮定する。</li>
                    <li>完全性定理（の同値な表現）より、<InlineMath math="T" /> にモデルが存在しないことと、<InlineMath math="T" /> が矛盾している（<InlineMath math="T \vdash \bot" />）ことは同値である。</li>
                    <li>したがって、<InlineMath math="T" /> から矛盾 <InlineMath math="\bot" /> に至る形式的な「証明列」が存在する。</li>
                    <li>形式的証明は有限個のステップからなるため、そこで使われる仮定（<InlineMath math="T" /> の公理）も必ず<strong>有限個</strong>である。</li>
                    <li>その有限個の公理だけを集めた <InlineMath math="T" /> の有限部分集合を <InlineMath math="T_{\mathrm{fin}}" /> と呼ぶ。</li>
                    <li><InlineMath math="T_{\mathrm{fin}}" /> から <InlineMath math="\bot" /> が証明できる（<InlineMath math="T_{\mathrm{fin}} \vdash \bot" />）ため、再び完全性定理（健全性）より <InlineMath math="T_{\mathrm{fin}}" /> は充足不可能である。</li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="なぜ「コンパクト」なのか"
            >
                <p>
                    位相空間論において、コンパクト性とは「任意の開被覆から<strong>有限</strong>部分被覆が取れる」という性質でした。
                    論理空間（ストーン空間と呼ばれる位相空間）において、モデルが存在しないことを「空集合を被覆する」ことに対応させると、この定理はまさに位相的なコンパクト性の直接的な言い換えになります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">コンパクト性定理の応用</h2>

            <p className="leading-relaxed">
                コンパクト性定理の威力を示す、数学的応用例を2つ紹介します。
            </p>

            <ContentBox
                type="example"
                title="Example 5.3-1 (無限集合のモデル理論的存在証明)"
            >
                <p>
                    「無限個の要素を持つ集合」の存在をモデル理論的に証明する。
                    言語として無限個の定数記号 <InlineMath math="c_1, c_2, c_3, \ldots" /> を用意し、理論 <InlineMath math="T" /> を「すべての定数が互いに異なる」という無限個の文の集合とする。
                    <BlockMath math="T = \{c_i \neq c_j \mid i \neq j\}" />
                </p>
                <p>
                    <InlineMath math="T" /> の<strong>任意の有限部分集合</strong> <InlineMath math="T_{\mathrm{fin}}" /> を考える。有限部分集合には有限個の定数記号しか現れない。したがって、要素を十分にたくさん（現れた定数の数以上）持つ有限集合を用意すれば、それが <InlineMath math="T_{\mathrm{fin}}" /> のモデルになる。つまり有限部分は充足可能である。
                </p>
                <p>
                    コンパクト性定理より、<strong><InlineMath math="T" /> 全体もモデルをもつ</strong>。そのモデルは無限個の異なる要素 <InlineMath math="c_1, c_2, \ldots" /> をすべて同時に持たねばならないため、必然的に無限集合となる。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.3-2 (無限グラフの彩色問題)"
            >
                <p>
                    組合せ論における有名な定理「任意の有限部分グラフが <InlineMath math="k" /> 色で塗り分け可能（隣り合う頂点が異なる色になる）な無限グラフは、グラフ全体も <InlineMath math="k" /> 色で塗り分け可能である」を証明する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>グラフの頂点集合を定数記号とし、「頂点 <InlineMath math="v" /> が色 <InlineMath math="c" /> で塗られる」を表す述語を用意する。</li>
                    <li>理論 <InlineMath math="T" /> として、「各頂点は必ず1つの色で塗られる」「辺で結ばれた頂点は異なる色になる」というグラフ全体の条件の集合を作る。</li>
                    <li>仮定より、無限グラフの任意の有限部分グラフは <InlineMath math="k" /> 色で塗れる。これは「<InlineMath math="T" /> の任意の有限部分集合がモデルを持つ」ことに他ならない。</li>
                    <li>コンパクト性定理により、<InlineMath math="T" /> 全体にもモデルが存在する。すなわち無限グラフ全体を <InlineMath math="k" /> 色で塗り分ける方法が存在する。</li>
                </ol>
                <p>
                    このように、有限の世界の性質を、コンパクト性定理を「橋渡し」にして無限の世界に持ち上げることができる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>コンパクト性定理：</strong> 無限個の公理からなる理論が矛盾していない（モデルを持つ）ためには、その「どの有限部分を取り出しても矛盾していない」ことだけで十分である。</li>
                    <li>この定理は完全性定理（証明が有限長であること）の直接的な帰結である。</li>
                    <li>有限の世界で成り立つ性質を無限の世界に拡張するための、強力な証明の道具として代数や組合せ論などで広く使われる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}