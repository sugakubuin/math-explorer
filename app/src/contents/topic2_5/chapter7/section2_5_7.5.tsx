import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SequentialCompactness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで扱ってきた「任意の開被覆から有限部分被覆を取り出せる」というコンパクト性の定義は、非常に強力ですが、やや扱いにくい側面もあります。
                一方、点列（シーケンス）の収束性に注目した<strong>逐次コンパクト性 (Sequential Compactness)</strong> は、微積分学での議論と親和性が高く、直感的にも理解しやすい概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逐次コンパクト性の定義</h2>

            <p>
                逐次コンパクト性は、集合内の任意の点列が「お行儀よく」振る舞うことを要求します。
            </p>

            <ContentBox type="definition" title="Definition 7.5-1 (逐次コンパクト性)">
                <p>
                    位相空間 <InlineMath math="X" /> が<strong>逐次コンパクト (Sequentially compact)</strong> であるとは、
                    <InlineMath math="X" /> 内の任意の点列 <InlineMath math="\{x_n\}_{n=1, 2, \dots}" /> が、
                    <InlineMath math="X" /> 内の点に収束する<strong>部分列</strong>を持つことをいう。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.5-1 (逐次コンパクトな集合の例)">
                <p>
                    閉区間 <InlineMath math="K = [0, 1]" /> における点列 <InlineMath math="x_n = \frac{1}{n}" /> を考えます。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>
                        この点列自体は <InlineMath math="0" /> に収束します。したがって、それ自身が「収束する部分列」とみなせます。
                    </li>
                    <li>
                        一方、開区間 <InlineMath math="(0, 1)" /> では、点列 <InlineMath math="1/n" /> は <InlineMath math="0" /> に収束しようとしますが、<InlineMath math="0" /> は集合に含まれないため、「集合内の点に収束する部分列」を持つことができず、逐次コンパクトではありません。
                    </li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                つまり、「無限に点があっても、どこか一点に凝縮していく部分が必ず見つかる」という性質です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">距離空間における同値性</h2>

            <p>
                一般の位相空間では、コンパクト性と逐次コンパクト性は必ずしも一致しません。
                しかし、距離空間（より一般には第一可算空間）という枠組みの中では、これらは完全に同等な概念となります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.5-1 (距離空間におけるコンパクト性の同値条件)">
                <p>
                    距離空間 <InlineMath math="X" /> について、次の条件は互いに同値である：
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2 ml-4">
                    <li><InlineMath math="X" /> はコンパクトである。</li>
                    <li><InlineMath math="X" /> は逐次コンパクトである。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>(1 <InlineMath math="\implies" /> 2)</strong>: 
                    <InlineMath math="X" /> がコンパクトであるとする。任意の点列 <InlineMath math="\{x_n\}" /> をとる。
                    もし収束する部分列を持たないと仮定すると、集合 <InlineMath math="A = \{x_n \mid n \in \mathbb{N}\}" /> は集積点を持たない閉集合となる。
                    各点 <InlineMath math="x \in X" /> に対し、<InlineMath math="A" /> の点（自分自身を除く）を高々有限個しか含まないような近傍 <InlineMath math="U_x" /> がとれる。
                    族 <InlineMath math="\{U_x\}_{x \in X}" /> は <InlineMath math="X" /> の開被覆なので、コンパクト性より有限部分被覆 <InlineMath math="\{U_{x_1}, \dots, U_{x_k}\}" /> が選べる。
                    しかし、これら有限個の集合の和集合は <InlineMath math="A" /> の点を有限個しか含めないため、無限集合である <InlineMath math="A" />（もし点が重複していれば話は別だが、その場合は収束部分列を容易にとれる）を覆うことができず矛盾する。
                </p>
                <p className="mt-4">
                    <strong>(2 <InlineMath math="\implies" /> 1)</strong>: 
                    逐次コンパクト性からコンパクト性を導くには、距離空間の「全有界性」と「完備性」を経由するのが一般的です。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li>
                        <strong>全有界性</strong>: 逐次コンパクトであれば、任意の <InlineMath math="\varepsilon > 0" /> に対して <InlineMath math="X" /> は有限個の半径 <InlineMath math="\varepsilon" /> の球で覆える（全有界）。もし覆えないとすると、互いに距離が <InlineMath math="\varepsilon" /> 以上離れた無限点列が作れてしまい、収束部分列を持たなくなるため矛盾する。
                    </li>
                    <li>
                        <strong>ルベーグ数の存在</strong>: 距離空間の任意の開被覆 <InlineMath math="\mathcal{U}" /> に対し、ある <InlineMath math="\delta > 0" />（ルベーグ数）が存在して、直径が <InlineMath math="\delta" /> 未満の任意の集合はどれか一つの <InlineMath math="U \in \mathcal{U}" /> に含まれる。
                    </li>
                </ol>
                <p className="mt-2">
                    全有界性より、<InlineMath math="X" /> を半径 <InlineMath math="\delta/2" /> の有限個の球で覆うことができる。各球はある <InlineMath math="U \in \mathcal{U}" /> に含まれるため、結果として有限個の開集合で <InlineMath math="X" /> が覆われ、コンパクト性が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ボルツァーノ・ワイエルシュトラスの定理との関係">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> における「有界な点列は収束する部分列を持つ」という<strong>ボルツァーノ・ワイエルシュトラスの定理</strong>は、この逐次コンパクト性の文脈で理解できます。
                    ハイネ・ボレルの定理によれば、<InlineMath math="\mathbb{R}^n" /> の有界閉集合はコンパクトであり、したがって逐次コンパクトでもあります。この事実は、解析学における収束性の議論の強力な基盤となっています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般の位相空間での違い</h2>

            <p>
                距離空間を離れると、これらの概念には「ずれ」が生じます。
            </p>

            <ul className="list-disc list-inside space-y-4 font-normal mt-4 ml-4">
                <li>
                    <strong>コンパクトだが逐次コンパクトでない例</strong>: 
                    非可算個の積空間 <InlineMath math="[0, 1]^I" /> など。
                    空間全体はコンパクト（チコノフの定理より）ですが、点列が収束する部分列を持たないことがあります。
                </li>
                <li>
                    <strong>逐次コンパクトだがコンパクトでない例</strong>:
                    最小の非可算順序数までの集合 <InlineMath math="[0, \omega_1)" /> など。
                    任意の点列は収束部分列を持ちますが、ある開被覆からは有限部分被覆が選べません。
                </li>
            </ul>

            <p className="mt-4">
                このように、一般の位相空間では「開被覆（大域的）」と「点列（可算・局所的）」の間には超えられない壁がある場合があります。第9章で距離空間を詳しく学ぶ際にこの違いを再確認します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>逐次コンパクト</strong>：任意の点列が収束する部分列を持つ。</li>
                    <li><strong>距離空間</strong>においては、コンパクト性と逐次コンパクト性は<strong>同値</strong>。</li>
                    <li>一般の位相空間では両者は一致しない場合があり、コンパクト性はより強力な「位相的有限性」を表している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
