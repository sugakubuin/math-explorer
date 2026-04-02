import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CauchyKovalevskayaTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは方程式の「型」（楕円型、放物型、双曲型）によって解の性質が大きく異なることを見てきました。
                しかし、データ（係数や初期値）が「実解析的」であるという非常に強い条件の下では、
                方程式の型によらず、常に一意の解が（局所的に）存在することを保証する強力な定理が存在します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の主張</h2>

            <p className="leading-relaxed">
                この定理は、偏微分方程式論における最も一般的な存在定理の一つです。
            </p>

            <ContentBox type="theorem" title="Theorem 9.3-1 (コーシー・コワレフスカヤの定理)">
                <p>
                    主部において時間（または特定の変数）の最高次微分が陽に解ける形：
                    <BlockMath math="\frac{\partial^m u}{\partial t^m} = F(x, t, \partial^\alpha u), \quad |\alpha| \le m, \alpha_0 < m" />
                    の偏微分方程式を考える。関数 <InlineMath math="F" /> および初期条件がすべて実解析的であれば、
                    初期値の近傍で一意の<b>実解析的</b>な局所解が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    証明の基本的なアイデアは、解がべき級数展開可能であると仮定し、その係数を順次決定していくことにある。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        <b>係数の逐次決定</b>：方程式の両辺を繰り返し微分し、初期値を代入することで、Taylor 展開の係数をすべて一意に決定する。
                    </li>
                    <li>
                        <b>優級数（Majorant Series）法</b>：決定されたべき級数が、ある近傍で実際に収束することを示す必要がある。
                        係数がより大きな「優級数」を構成し、その収束性を比較することで証明される。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 9.3-1 (定理の適用例)">
                <p>
                    例えば、単純な非線形方程式 <InlineMath math="u_t = u_x^2" />、初期値 <InlineMath math="u(x, 0) = 0" /> に適用すると、
                    解は <InlineMath math="t" /> に関するべき級数として局所的に構成される。
                    ただし、この定理はあくまで「局所的」な存在を保証するものであり、
                    §4.1 で見たように、時間経過とともに解が爆発したり衝撃波を形成したりして、大域的には存在しなくなる可能性を否定しない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の限界：ルレイの反例</h2>

            <p className="leading-relaxed">
                この定理は「データが解析的である」という非常に限定的な条件に基づいています。
                解析的でない場合には、たとえ無限回微分可能（<InlineMath math="C^\infty" /> 級）であっても、解が存在しないことがあります。
            </p>

            <ContentBox type="example" title="Example 9.3-2 (ルレイの反例：非解析的データへの拡張不可)">
                <p>
                    熱方程式の「後退問題」 <InlineMath math="u_t = -u_{xx}" />（あるいはラプラス方程式のコーシー問題）を考える。
                    初期データが <InlineMath math="u(x, 0) = \sum e^{-\sqrt{n}} \cos(nx)" /> の場合を考える。
                    このデータは <InlineMath math="C^\infty" /> 級であるが、実解析的ではない。
                    このとき、初期時刻からわずかでも時間が経過すると級数は発散し、点ごとの意味で解が存在しないことが示される。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="コーシー・コワレフスカヤ定理の位置づけ">
                <p>
                    この定理は「解析的な世界ではどのタイプの方程式も平等である」ことを示していますが、
                    実用上の多くの問題（<InlineMath math="L^2" /> や <InlineMath math="C^k" /> 級のデータを扱うもの）では、
                    方程式の「型」に応じた適切な問題設定が必要となります。
                    この「正しい設定」を規定するのが、次節で学ぶ「適切さ（Well-posedness）」の概念です。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、偏微分方程式の研究における究極の指針である、ハダマールの「適切問題」の 3 条件について詳しく見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§9.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>実解析的なデータに対しては、方程式の型によらず局所的な一意解が存在する。</li>
                    <li>証明には、Taylor 級数の係数を決定し、優級数法で収束を証明する手法（コワレフスカヤの手法）が用いられる。</li>
                    <li>この定理は「局所的」な存在のみを保証し、大域的な振る舞いについては語らない。</li>
                    <li>データが解析的でない場合は、滑らかであっても解が存在しないケースがある（ルレイの反例）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
