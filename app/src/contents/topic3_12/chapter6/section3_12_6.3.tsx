import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionGeneralLiftingCriterion() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは「道（1次元の空間からの写像）」の持ち上げについて考えてきましたが、より一般の空間からの写像がいつ持ち上げ可能になるかを判定する強力な定理が存在します。これが基本群と被覆空間の深い関係（ガロア対応）の出発点となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">持ち上げ判定条件</h2>

            <p className="leading-relaxed">
                ある空間 <InlineMath math="Y" /> から底空間 <InlineMath math="X" /> への連続写像 <InlineMath math="f" /> が、被覆空間 <InlineMath math="\tilde{X}" /> への写像 <InlineMath math="\tilde{f}" /> に「持ち上がる（<InlineMath math="p \circ \tilde{f} = f" />）」かどうかは、基本群の包含関係のみで完全に決定されます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 6.3-1 (持ち上げ定理)"
            >
                <p>
                    <InlineMath math="p : \tilde{X} \to X" /> を被覆写像とする。<InlineMath math="Y" /> を弧状連結かつ局所弧状連結な空間とし、<InlineMath math="f : Y \to X" /> を連続写像とする。
                </p>
                <p>
                    基点について <InlineMath math="f(y_0) = x_0" /> とし、<InlineMath math="x_0" /> の上にある点 <InlineMath math="\tilde{x}_0 \in p^{-1}(x_0)" /> を1つ固定する。
                </p>
                <p>
                    このとき、<InlineMath math="\tilde{f}(y_0) = \tilde{x}_0" /> を満たす <InlineMath math="f" /> の持ち上げ <InlineMath math="\tilde{f} : Y \to \tilde{X}" /> が存在するための<strong>必要十分条件</strong>は、基本群の像について次の包含関係が成り立つことである。
                    <BlockMath math="f_*(\pi_1(Y, y_0)) \subset p_*(\pi_1(\tilde{X}, \tilde{x}_0))" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>（必要性 <InlineMath math="\Rightarrow" />）：</strong><br />
                    持ち上げ <InlineMath math="\tilde{f}" /> が存在すると仮定する。定義より <InlineMath math="p \circ \tilde{f} = f" /> である。基本群に誘導される準同型をとると <InlineMath math="p_* \circ \tilde{f}_* = f_*" /> となる。したがって、
                    <BlockMath math="f_*(\pi_1(Y)) = p_*(\tilde{f}_*(\pi_1(Y))) \subset p_*(\pi_1(\tilde{X}))" />
                    となり、条件は自然に満たされる。
                </p>
                <p>
                    <strong>（十分性 <InlineMath math="\Leftarrow" />）：</strong><br />
                    条件が成り立つと仮定し、<InlineMath math="\tilde{f}(y)" /> を具体的に構成する。<InlineMath math="Y" /> が弧状連結であるため、任意の点 <InlineMath math="y \in Y" /> に対して <InlineMath math="y_0" /> から <InlineMath math="y" /> へ向かう道 <InlineMath math="\sigma" /> が存在する。これを <InlineMath math="f" /> で写した道 <InlineMath math="f \circ \sigma" /> は <InlineMath math="X" /> 上の <InlineMath math="x_0" /> から出発する道である。道の持ち上げ定理（Theorem 6.2-1）より、これを <InlineMath math="\tilde{x}_0" /> から一意に持ち上げた道 <InlineMath math="\widetilde{f \circ \sigma}" /> が存在する。そこで、
                    <BlockMath math="\tilde{f}(y) := \widetilde{f \circ \sigma}(1)" />
                    と定義する。
                </p>
                <p>
                    これが「道 <InlineMath math="\sigma" /> の選び方によらない（well-defined である）」ことを示す。別の道 <InlineMath math="\tau" /> を選んだとする。結合道 <InlineMath math="\sigma * \overline{\tau}" /> は <InlineMath math="y_0" /> を基点とする <InlineMath math="Y" /> 上のループである。<InlineMath math="f" /> で写した <InlineMath math="f \circ (\sigma * \overline{\tau})" /> は <InlineMath math="X" /> のループであり、これは仮定の条件 <InlineMath math="f_*(\pi_1(Y)) \subset p_*(\pi_1(\tilde{X}))" /> より、<InlineMath math="p_*([\tilde{\omega}])" /> という形に書ける。これは、持ち上げた先でループがちゃんと閉じる（終点が <InlineMath math="\tilde{x}_0" /> に戻ってくる）ことを意味している。したがって <InlineMath math="\sigma" /> の終点と <InlineMath math="\tau" /> の終点は持ち上げ先で一致しなければならず、<InlineMath math="\tilde{f}" /> は well-defined となる。<InlineMath math="Y" /> が局所弧状連結であることから、この <InlineMath math="\tilde{f}" /> が連続であることも示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理は、「単連結な空間からの写像は常に持ち上がる」という強力な帰結をもたらします。
            </p>

            <ContentBox
                type="example"
                title="Example 6.3-1 (単連結空間からの持ち上げ)"
            >
                <p>
                    <InlineMath math="Y" /> が単連結（<InlineMath math="\pi_1(Y) = \{e\}" />）であるとする。
                    このとき、<InlineMath math="f_*(\pi_1(Y)) = \{e\}" /> である。自明群はどのような群の部分群にもなるため、持ち上げの条件
                    <BlockMath math="\{e\} \subset p_*(\pi_1(\tilde{X}))" />
                    は<strong>常に（自動的に）満たされる</strong>。
                </p>
                <p>
                    例えば、球面 <InlineMath math="S^2" /> は単連結であるため、任意の連続写像 <InlineMath math="f : S^2 \to S^1" /> は、普遍被覆である実数直線 <InlineMath math="\mathbb{R}" /> への連続写像 <InlineMath math="\tilde{f} : S^2 \to \mathbb{R}" /> に一意に持ち上げることができる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">持ち上げの応用</h2>

            <p className="leading-relaxed">
                続いて、持ち上げ定理を応用して、具体的に写像が持ち上がらない例を確かめてみましょう。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 6.3-2 (<InlineMath math="n" />乗写像の持ち上げの可否)</span>}
            >
                <p>
                    円周 <InlineMath math="S^1" /> から <InlineMath math="S^1" /> への <InlineMath math="n" /> 乗写像 <InlineMath math="f(z) = z^n" />（<InlineMath math="n \neq 0" />）を考える。
                    この写像を、指数写像 <InlineMath math="p : \mathbb{R} \to S^1" /> によって <InlineMath math="\mathbb{R}" /> 上に持ち上げられるだろうか？
                </p>
                <p>
                    基本群の包含関係をチェックする。<InlineMath math="Y = S^1" /> であるから、<InlineMath math="\pi_1(Y) \cong \mathbb{Z}" /> であり、<InlineMath math="f_*" /> は <InlineMath math="1 \mapsto n" /> という「<InlineMath math="n" /> 倍写像」である。したがって像は <InlineMath math="f_*(\pi_1(S^1)) = n\mathbb{Z}" /> となる。
                    一方で、<InlineMath math="\tilde{X} = \mathbb{R}" /> は単連結なので <InlineMath math="\pi_1(\tilde{X}) = \{e\}" /> であり、<InlineMath math="p_*(\pi_1(\mathbb{R})) = \{0\}" /> である。
                </p>
                <p>
                    包含関係
                    <BlockMath math="n\mathbb{Z} \subset \{0\}" />
                    は（<InlineMath math="n \neq 0" /> のため）明らかに<strong>成り立たない</strong>。したがって、<InlineMath math="z^n" /> 写像全体を <InlineMath math="\mathbb{R}" /> 上に一価の連続関数として持ち上げることは<strong>不可能</strong>であることがわかる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="被覆空間と群論の対応（予告）"
            >
                <p>
                    持ち上げ定理（Theorem 6.3-1）は、被覆空間 <InlineMath math="\tilde{X}" /> が持つ幾何学的な「持ち上げやすさ」が、単に基本群の部分群 <InlineMath math="p_*(\pi_1(\tilde{X}))" /> の「大きさ（包含関係）」だけで完全に決定されてしまうことを示しています。
                </p>
                <p>
                    これは、ある体上の方程式が可解かどうかがガロア群の部分群の構造で決まるという「ガロア理論」と全く同じ精神です。Chapter 7 では、この対応が完全な1対1対応の辞書（ガロア対応）を与えることを見ていきます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>写像 <InlineMath math="f : Y \to X" /> が被覆空間 <InlineMath math="\tilde{X}" /> へ持ち上がるための必要十分条件は、基本群の像が <InlineMath math="f_*(\pi_1(Y)) \subset p_*(\pi_1(\tilde{X}))" /> を満たすことである。</li>
                    <li>この定理より、単連結な空間からの写像は常に任意の被覆空間へ持ち上げ可能であることがわかる。</li>
                    <li>この判定条件は、空間の幾何学的な性質（持ち上げの存在）を代数的な条件（部分群の包含関係）に翻訳する極めて重要な定理である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
