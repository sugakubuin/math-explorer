import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ClosedGraphTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                開写像定理のもう一つの強力な系として、作用素の連続性を圧倒的に証明しやすくする「閉グラフ定理」が存在します。非有界な作用素（微分など）を扱う場合でも、「グラフの閉性」という幾何学的な特徴のみを担保できれば、非常に良い性質が引き出せる事実を見手いきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">閉グラフ定理</h2>

            <p>
                関数のグラフを「入力と出力のペアを集めた二次元上の図形」として捉える見方を抽象化します。
            </p>

            <ContentBox type="definition" title="Definition 4.5-1 (作用素のグラフ)">
                <p>
                    <InlineMath math="X, Y" /> をノルム空間、<InlineMath math="T : X \to Y" /> を線形作用素とする。直積空間 <InlineMath math="X \times Y" /> の部分集合
                </p>
                <BlockMath math="\mathrm{Gr}(T) = \{ (x, Tx) \mid x \in X \}" />
                <p>
                    を <InlineMath math="T" /> の<b>グラフ（graph）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                このグラフという集合が、直積空間の中で「閉集合」であることと、作用素の有界性がバナッハ空間において完全に一致します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.5-1 (閉グラフ定理)">
                <p>
                    <InlineMath math="X, Y" /> をともにバナッハ空間とする。線形作用素 <InlineMath math="T : X \to Y" /> について、そのグラフ <InlineMath math="\mathrm{Gr}(T)" /> が <InlineMath math="X \times Y" /> で閉集合であるならば、<InlineMath math="T" /> は有界線形作用素（連続）である。
                </p>
                <p>
                    ※連続ならグラフが閉集合になることは一般的な位相空間の事実（逆）であるが、この定理の凄みは「グラフが閉集合なら自動的に連続へ昇格する」点にある。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    直積空間 <InlineMath math="X \times Y" /> にノルム <InlineMath math="\|(x,y)\| = \|x\|_X + \|y\|_Y" /> を入れると、<InlineMath math="X, Y" /> がバナッハ空間なのでこれもまたバナッハ空間となる。<InlineMath math="\mathrm{Gr}(T)" /> はその閉部分集合なので、それ自体が部分完備距離空間でありバナッハ空間となる。
                </p>
                <p>
                    グラフから第一成分を取り出す射影作用素 <InlineMath math="P_1 : \mathrm{Gr}(T) \to X" /> を与える（<InlineMath math="P_1(x, Tx) = x" />）。<InlineMath math="\|P_1(x, Tx)\| = \|x\| \leq \|x\| + \|Tx\| = \|(x, Tx)\|" /> なので <InlineMath math="P_1" /> は有界（連続）である。
                </p>
                <p>
                    作用素の定義よりすべての <InlineMath math="x \in X" /> にペア <InlineMath math="(x, Tx)" /> が存在するため、<InlineMath math="P_1" /> は全単射である。ここで <InlineMath math="\mathrm{Gr}(T)" /> も <InlineMath math="X" /> もバナッハ空間なので、前節の有界逆写像定理（Corollary 4.4-1）が適用できる。
                </p>
                <p>
                    したがって逆作用素 <InlineMath math="P_1^{-1} : X \to \mathrm{Gr}(T)" /> （<InlineMath math="x \mapsto (x, Tx)" />）も有界である。これと第二成分への射影 <InlineMath math="P_2 : \mathrm{Gr}(T) \to Y" /> （有界）を合成した <InlineMath math="P_2 \circ P_1^{-1}(x) = P_2(x, Tx) = Tx" /> もまた有界作用素の合成なので有界となる。ゆえに <InlineMath math="T" /> は有界である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.5-1 (閉グラフの確認)">
                <p>
                    積分作用素 <InlineMath math="Tf(x) = \int_0^x f(t) \, dt" /> が <InlineMath math="C[0,1]" /> から <InlineMath math="C[0,1]" /> の作用素として閉グラフを持つことを確認する。
                </p>
                <p>
                    点列による閉集合の判定条件を用いる。「<InlineMath math="f_n \to f" /> （一様収束）」かつ「<InlineMath math="Tf_n \to g" /> （一様収束）」と仮定したとき、グラフ上の点 <InlineMath math="(f, g)" /> に対し <InlineMath math="g = Tf" /> となるかを確認する。
                </p>
                <p>
                    <InlineMath math="f_n" /> が <InlineMath math="f" /> に一様収束するなら、積分と極限を交換できるため、<InlineMath math="\int_0^x f_n(t) \, dt \to \int_0^x f(t) \, dt" /> となり、<InlineMath math="Tf_n" /> は <InlineMath math="Tf" /> に一様収束する。極限の一意性より <InlineMath math="g = Tf" />。したがってグラフは閉集合である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">閉グラフ定理の応用</h2>

            <p>
                閉グラフ定理の最も強力な応用は、「連続かどうかわからない」作用素ではなく、「非連続（非有界）だが素性が良い」作用素を扱う際に発揮されます。
            </p>

            <ContentBox type="example" title="Example 4.5-2 (非有界作用素の閉グラフ性)">
                <p>
                    Chapter 3で見たように、微分作用素 <InlineMath math="D = d/dx" /> は上限ノルムにおいて非有界（非連続）な作用素である。
                </p>
                <p>
                    しかし、微分が定義できる部分空間 <InlineMath math="C^1[0,1] \subset C[0,1]" /> 上でこの <InlineMath math="D" /> のグラフが閉であるかを考える。点列の言葉で言えば、「<InlineMath math="f_n \to f" />（一様収束）」かつ「<InlineMath math="Df_n = f_n' \to g" />（一様収束）」のとき、<InlineMath math="f" /> は微分可能で <InlineMath math="Df = g" /> か？という問題になる。
                </p>
                <p>
                    微積分の有名な定理から、関数列が収束し、さらに導関数の列も一様収束するならば、極限関数は微分可能であり、その導関数は導関数の極限に等しい。すなわち <InlineMath math="f' = g" /> が成り立つ。これはまさにグラフが閉集合であることを意味する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="バナッハ空間で定義域全体になれない理由">
                <p>
                    もしこの微分作用素が「完備な」空間上で定義されていたなら、閉グラフなのだからTheorem 4.5-1により有界（連続）になってしまうはずです。しかし微分作用素は非有界です。この矛盾が意味するのは、「微分作用素 <InlineMath math="D" /> の定義域である <InlineMath math="C^1" /> 空間そのものは、上限ノルムにおいて完備ではない（閉部分空間ではない）」という事実です。
                </p>
                <p>
                    このように、現代の関数解析と量子力学（スペクトル理論）では、シュレディンガー方程式のハミルトニアンなど多くの物理的観測量が「非有界領域だが閉グラフを持つ作用素（閉作用素）」として定式化され、バナッハやヒルベルト空間の「部分空間」の上で稠密に定義されるという極めて美しい枠組みが構成されています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>作用素のグラフが閉集合であることと、有界（連続）であることはバナッハ空間上で同値である（Theorem 4.5-1）。</li>
                    <li>閉グラフ性の証明は「入力と出力がそれぞれ別々に収束していると仮定して、極限で関係が保たれるか」を見るだけでよく、証明のハードルが大幅に下がる。</li>
                    <li>非有界作用素であっても「グラフが閉である」という最低限の素性の良さを保つもの（閉作用素）が多く存在し、これが現代の解析学や物理学の応用における主要な研究対象となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
