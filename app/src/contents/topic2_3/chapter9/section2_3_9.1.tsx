import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PartitionsAndDarbouxSums() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「積分」と聞いて多くの人が最初に思い浮かべるのは「面積」や「微分の逆操作」でしょう。しかし、連続でない関数や、複雑に振動する関数に対して「真の面積」をどのように定義すべきでしょうか。
            </p>
            <p>
                19世紀、リーマン（B. Riemann）とダルブー（J. Darboux）は、関数のグラフを「長方形の短冊」で近似し、その短冊を限りなく細かくしていくことで極限としての面積（積分）を厳密に定義しました。本章では、ダルブーによる上和・下和を用いたアプローチから、リーマン積分の理論を構成します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">区間の分割</h2>

            <p>
                積分を定義するためには、まず積分区間 <InlineMath math="[a, b]" /> を細かな部分に切り分ける必要があります。
            </p>

            <ContentBox type="definition" title="Definition 9.1-1 (区間の分割と細分)">
                <p>
                    有界閉区間 <InlineMath math="[a, b]" /> において、
                </p>
                <BlockMath math="\Delta = \{x_0, x_1, x_2, \dots, x_n\}" />
                <p>
                    ただし <InlineMath math="a = x_0 < x_1 < x_2 < \dots < x_n = b" /> を満たす有限個の点の集合を、区間 <InlineMath math="[a, b]" /> の<strong>分割</strong>（partition）と呼ぶ。
                    また、<InlineMath math="i" /> 番目の小区間を <InlineMath math="I_i = [x_{i-1}, x_i]" />、その幅を <InlineMath math="\Delta x_i = x_i - x_{i-1}" /> で表す。
                </p>
                <p className="mt-4">
                    2つの分割 <InlineMath math="\Delta_1, \Delta_2" /> に対して、<InlineMath math="\Delta_1 \subset \Delta_2" /> （すなわち <InlineMath math="\Delta_2" /> が <InlineMath math="\Delta_1" /> のすべての分点を含む）が成り立つとき、<InlineMath math="\Delta_2" /> は <InlineMath math="\Delta_1" /> の<strong>細分</strong>（refinement）であるという。
                </p>
            </ContentBox>

            <p>
                分割の荒さを測る指標として、小区間の幅の最大値 <InlineMath math="|\Delta| = \max_i \Delta x_i" /> を分割の「大きさ（メッシュ）」と呼び、積分を考える際は <InlineMath math="|\Delta| \to 0" /> となる極限を考えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ダルブーの上和と下和</h2>

            <p>
                ある分割が与えられたとき、各小区間における関数の「最大の高さ」で作った長方形の面積の和を<strong>上和</strong>、「最小の高さ」で作ったものを<strong>下和</strong>と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 9.1-2 (上リーマン和・下リーマン和)">
                <p>
                    有界閉区間 <InlineMath math="[a, b]" /> 上の有界な関数 <InlineMath math="f(x)" /> と、分割 <InlineMath math="\Delta" /> が与えられたとする。
                    各小区間 <InlineMath math="I_i" /> における <InlineMath math="f(x)" /> の上限（最大値に相当）と下限（最小値に相当）をそれぞれ
                </p>
                <BlockMath math="M_i = \sup_{x \in I_i} f(x), \quad m_i = \inf_{x \in I_i} f(x)" />
                <p>
                    とする（<InlineMath math="f" /> は有界なのでこれらは実数として常に存在する）。このとき、
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <strong>上和（Upper Darboux sum）:</strong> <InlineMath math="U(f, \Delta) = \sum_{i=1}^n M_i \Delta x_i" />
                    </li>
                    <li>
                        <strong>下和（Lower Darboux sum）:</strong> <InlineMath math="L(f, \Delta) = \sum_{i=1}^n m_i \Delta x_i" />
                    </li>
                </ul>
                <p className="mt-4">
                    これらをダルブーの（あるいは広義の）上リーマン和・下リーマン和と呼ぶ。
                </p>
            </ContentBox>

            <p>
                図形的に言えば、下和は「グラフの内側にスッポリ収まる階段状の図形の面積」、上和は「グラフを完全に覆い隠す階段状の図形の面積」です。当然ながら、常に <InlineMath math="L(f, \Delta) \leq U(f, \Delta)" /> が成り立ちます。真の面積（定積分）が存在するならば、それは必ずこの2つの値の間に挟まれるはずです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">細分による単調性（ダルブーの定理の基礎）</h2>

            <p>
                網目をより細かく切り直したとき（細分を作ったとき）、階段状の近似はどのように変化するでしょうか。直感的には、「外側の凸凹（上和）は削られて小さくなり、内側の隙間（下和）は埋められて大きくなる」はずです。これを厳密に証明します。
            </p>

            <ContentBox type="theorem" title="Proposition 9.1-1 (上和・下和の単調性)">
                <p>
                    分割 <InlineMath math="\Delta_2" /> が分割 <InlineMath math="\Delta_1" /> の細分である（<InlineMath math="\Delta_1 \subset \Delta_2" />）ならば、次が成り立つ。
                </p>
                <BlockMath math="L(f, \Delta_1) \leq L(f, \Delta_2) \leq U(f, \Delta_2) \leq U(f, \Delta_1)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    細分 <InlineMath math="\Delta_2" /> が、<InlineMath math="\Delta_1" /> にちょうど「1つの新しい分点 <InlineMath math="p" />」を追加してできたものであるとする。<br />
                    （任意の細分は分点を1つずつ有限回追加することで得られるため、この証明を反復すれば一般の細分でも定理が従う。）
                </p>
                <p className="mt-4">
                    <InlineMath math="\Delta_1" /> の小区間のうち、分点 <InlineMath math="p" /> が追加された区間を <InlineMath math="I_k = [x_{k-1}, x_k]" /> とし、<InlineMath math="x_{k-1} < p < x_k" /> とする。<br />
                    このとき <InlineMath math="I_k" /> は2つの新しい小区間 <InlineMath math="I_k' = [x_{k-1}, p]" /> と <InlineMath math="I_k'' = [p, x_k]" /> に分割される。<br />
                    <InlineMath math="\Delta_1" /> と <InlineMath math="\Delta_2" /> において、<InlineMath math="I_k" /> 以外の小区間では関数 <InlineMath math="f" /> の上限・下限および幅は全く同じなので、和の差分はこの部分でのみ生じる。
                </p>
                <p className="mt-4">
                    まずは下和について考える。<br />
                    区間 <InlineMath math="I_k', I_k''" /> はどちらも <InlineMath math="I_k" /> の部分集合である。下限（<InlineMath math="\inf" />）の性質により、より狭い範囲を考えたとき、最小値の候補は減るため、下限は「変わらないか、大きくなる」かのいずれかである。すなわち、
                </p>
                <BlockMath math="m_k = \inf_{I_k} f(x) \leq \inf_{I_k'} f(x) = m_k', \quad m_k \leq \inf_{I_k''} f(x) = m_k''" />
                <p>
                    したがって、区間の幅に着目すると <InlineMath math="\Delta x_k = (p - x_{k-1}) + (x_k - p)" /> であるから、この部分における下和の寄与は
                </p>
                <BlockMath math="\begin{aligned} m_k \Delta x_k &= m_k (p - x_{k-1}) + m_k (x_k - p) \\ &\leq m_k' (p - x_{k-1}) + m_k'' (x_k - p) \end{aligned}" />
                <p>
                    となる。左辺は <InlineMath math="\Delta_1" /> における寄与、右辺は <InlineMath math="\Delta_2" /> における寄与である。他の区間の寄与は同じなので、全体として <InlineMath math="L(f, \Delta_1) \leq L(f, \Delta_2)" /> が示された。
                </p>
                <p className="mt-4">
                    上限（上和）についても全く同様に証明できる。狭い範囲では最大値の候補が減るため、上限は「変わらないか、小さくなる」ため、<InlineMath math="M_k \geq M_k', M_k \geq M_k''" /> となる。よって <InlineMath math="U(f, \Delta_1) \geq U(f, \Delta_2)" /> が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                「どんな2つの分割 <InlineMath math="\Delta_A, \Delta_B" /> をとってきても、常に（それぞれの共通の細分を仲介させることで）<InlineMath math="L(f, \Delta_A) \leq U(f, \Delta_B)" /> が成り立つ」こともこの結果から容易に示されます。
                つまり、<strong>いかなる下和も、いかなる上和を超えることはありません。</strong> この性質のもと、次節では「下和の最大値」と「上和の最小値」を考え、積分を定義します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§9.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ダルブーによる積分論は、有界関数を対象に、区間の分割ごとの上限（上和）と下限（下和）を用いて展開される。</li>
                    <li>上和は「外側からの多角形近似」、下和は「内側からの多角形近似」に相当する。</li>
                    <li>分割を細かく（細分）すると、上和は単調に減少し（削られ）、下和は単調に増加（補填）する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
