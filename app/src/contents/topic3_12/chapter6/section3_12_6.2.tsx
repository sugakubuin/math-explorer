import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionLiftingProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                被覆空間が基本群の理論において極めて重要である理由は、底空間上の「道（パス）」や「ホモトピー」を、被覆空間上の道やホモトピーに一意的に「持ち上げる（リフトする）」ことができるという性質にあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">道の持ち上げ定理</h2>

            <p className="leading-relaxed">
                底空間上で連続に動く点があるとき、それを被覆空間上で追跡することができます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 6.2-1 (道の持ち上げ定理)"
            >
                <p>
                    <InlineMath math="p : \tilde{X} \to X" /> を被覆写像とする。<InlineMath math="X" /> 上の道 <InlineMath math="\gamma : [0,1] \to X" /> と、その始点 <InlineMath math="\gamma(0) \in X" /> の上にある被覆空間の点 <InlineMath math="\tilde{x}_0 \in p^{-1}(\gamma(0))" /> が与えられたとする。
                </p>
                <p>
                    このとき、<InlineMath math="\tilde{X}" /> 上の道 <InlineMath math="\tilde{\gamma} : [0,1] \to \tilde{X}" /> であって、次の2つの条件を満たすものが<strong>ただ一つ</strong>存在する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="\tilde{\gamma}(0) = \tilde{x}_0" /> （指定された始点から出発する）</li>
                    <li><InlineMath math="p \circ \tilde{\gamma} = \gamma" /> （<InlineMath math="\gamma" /> の持ち上げである）</li>
                </ol>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>存在性：</strong><br />
                    区間 <InlineMath math="[0,1]" /> はコンパクトであるから、これを十分細かく有限個の小区間 <InlineMath math="[t_i, t_{i+1}]" /> に分割し、各小区間の像 <InlineMath math="\gamma([t_i, t_{i+1}])" /> が <InlineMath math="X" /> のある均等被覆近傍にすっぽり含まれるようにできる（ルベーグ数の補題）。
                    最初の区間 <InlineMath math="[0, t_1]" /> の像を含む均等被覆近傍を <InlineMath math="U_1" /> とする。<InlineMath math="U_1" /> の逆像は同相なシートの集まりであり、始点 <InlineMath math="\tilde{x}_0" /> はそのうちのただ一つのシート <InlineMath math="V_1" /> に属する。そこで <InlineMath math="[0, t_1]" /> における持ち上げを <InlineMath math="\tilde{\gamma}(t) = (p|_{V_1})^{-1}(\gamma(t))" /> と定義する。次に <InlineMath math="[t_1, t_2]" /> についても、<InlineMath math="\tilde{\gamma}(t_1)" /> を新たな始点として同様の操作を繰り返す。これを有限回繰り返すことで <InlineMath math="[0,1]" /> 全体での持ち上げが構成できる。
                </p>
                <p>
                    <strong>一意性：</strong><br />
                    2つの持ち上げ <InlineMath math="\tilde{\gamma}_1, \tilde{\gamma}_2" /> が存在したとする。これらが一致する時刻の集合 <InlineMath math="A = \{ t \in [0,1] \mid \tilde{\gamma}_1(t) = \tilde{\gamma}_2(t) \}" /> を考える。
                    <InlineMath math="A" /> は連続関数の等値集合なので閉集合である。一方で、被覆写像が局所同相である（シートが互いに離れている）ことから、ある時刻で一致していればその少し前後でも必ず一致しなければならない。すなわち <InlineMath math="A" /> は開集合でもある。区間 <InlineMath math="[0,1]" /> は連結であり、仮定より <InlineMath math="0 \in A" /> であるため、<InlineMath math="A = [0,1]" /> となる。よって持ち上げは一意である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.2-1 (円周の持ち上げと始点の依存性)"
            >
                <p>
                    被覆写像 <InlineMath math="p : \mathbb{R} \to S^1, p(t) = e^{2\pi i t}" /> において、<InlineMath math="S^1" /> をちょうど1周するループ <InlineMath math="\gamma(t) = e^{2\pi i t}" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>始点を <InlineMath math="\tilde{x}_0 = 0" /> に選んだ場合の持ち上げは <InlineMath math="\tilde{\gamma}(t) = t" /> であり、終点は <InlineMath math="\tilde{\gamma}(1) = 1" /> となる。</li>
                    <li>始点を別のシートの点 <InlineMath math="\tilde{x}_0 = 2" /> に選んだ場合の持ち上げは <InlineMath math="\tilde{\gamma}(t) = t + 2" /> であり、終点は <InlineMath math="\tilde{\gamma}(1) = 3" /> となる。</li>
                </ul>
                <p>
                    このように、同じ道であっても、<strong>「どのシートから出発するか（始点の選び方）」によって持ち上げられる道全体が並行移動し、終点も変わります</strong>。しかし、選んだ始点に対しては必ず一意に定まります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ホモトピーの持ち上げ定理</h2>

            <p className="leading-relaxed">
                道の持ち上げ定理は、道の「連続的な変形（ホモトピー）」に対してもそのまま適用できます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 6.2-2 (ホモトピーの持ち上げ定理)"
            >
                <p>
                    <InlineMath math="p : \tilde{X} \to X" /> を被覆写像とする。<InlineMath math="X" /> 上の2つの道 <InlineMath math="\gamma_0, \gamma_1" /> の間の道ホモトピーを <InlineMath math="H : [0,1] \times [0,1] \to X" /> とする。
                </p>
                <p>
                    このとき、被覆空間の点 <InlineMath math="\tilde{x}_0 \in p^{-1}(H(0,0))" /> を始点とするホモトピーの持ち上げ <InlineMath math="\tilde{H} : [0,1] \times [0,1] \to \tilde{X}" />（すなわち <InlineMath math="p \circ \tilde{H} = H" /> かつ <InlineMath math="\tilde{H}(0,0) = \tilde{x}_0" />）が<strong>ただ一つ</strong>存在する。
                </p>
                <p>
                    特に、道ホモトピックな2つの道の持ち上げは、被覆空間上でも再び道ホモトピックになる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    正方形 <InlineMath math="[0,1] \times [0,1]" /> はコンパクトであるため、道のときと同様に格子状に細かく分割し、各小正方形の像が均等被覆近傍に収まるようにする。左下の小正方形から順に、隣接する辺で値が一致するようにシートを選んでいくことで、正方形全体での連続な持ち上げ <InlineMath math="\tilde{H}" /> を一意に構成できる。
                </p>
                <p>
                    道ホモトピーの境界条件（両端点が固定されていること）は、持ち上げた後でも自動的に保たれる。なぜなら、例えば <InlineMath math="t=1" /> の端点 <InlineMath math="\tilde{H}(1, s)" /> は <InlineMath math="s" /> について連続な曲線となるが、これは被覆写像 <InlineMath math="p" /> によって <InlineMath math="X" /> の一点 <InlineMath math="\gamma_0(1) = \gamma_1(1)" /> に写される。逆像 <InlineMath math="p^{-1}(\text{点})" /> は離散集合であるため、連続曲線は1点に留まらざるを得ない。すなわち、持ち上げられた道の終点も <InlineMath math="s" /> に依らず固定される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="corollary"
                title="Corollary 6.2-1 (持ち上げのホモトピー不変性)"
            >
                <p>
                    <InlineMath math="X" /> 上のループ <InlineMath math="\gamma" /> を <InlineMath math="\tilde{x}_0" /> から持ち上げた道の終点 <InlineMath math="\tilde{\gamma}(1)" /> の位置は、<InlineMath math="\gamma" /> の基本群におけるホモトピー類 <InlineMath math="[\gamma]" /> のみに依存する。
                </p>
                <p>
                    （※これは Chapter 3 で「円周の基本群」を計算した際に用いた論法の一般化である。）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    ホモトピーの持ち上げ定理（Theorem 6.2-2）を直接適用する。
                </p>
                <p>
                    2つのループ <InlineMath math="\gamma" /> と <InlineMath math="\gamma'" /> が道ホモトピック（<InlineMath math="\gamma \simeq_p \gamma'" />）であるとする。このとき、それらの間の道ホモトピー <InlineMath math="H" /> が存在する。Theorem 6.2-2 より、この道ホモトピー <InlineMath math="H" /> は被覆空間上の道ホモトピー <InlineMath math="\tilde{H}" /> に持ち上げられる。
                </p>
                <p>
                    道ホモトピーの定義より、端点はホモトピーの間ずっと固定されるため、持ち上げられた道 <InlineMath math="\tilde{\gamma}" /> と <InlineMath math="\tilde{\gamma}'" /> についても終点は一致し、<InlineMath math="\tilde{\gamma}(1) = \tilde{\gamma}'(1)" /> となる。したがって、持ち上げの終点はホモトピー類のみに依存する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                このように、ホモトピーが持ち上げられる性質によって、底空間の基本群の元から被覆空間のシートの置換を引き起こす自然な対応が作られます。
            </p>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>道の持ち上げ定理：</strong> 底空間の道は、被覆空間上の始点を1つ固定すれば、被覆空間上に一意に持ち上げることができる。</li>
                    <li><strong>ホモトピーの持ち上げ定理：</strong> 道の連続変形（ホモトピー）も同様に一意に持ち上げられる。</li>
                    <li>結果として、底空間でホモトピックな道は、持ち上げた先でも同じ終点を持ち、ホモトピックになる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
