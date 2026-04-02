import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionBrouwerFixedPointTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                基本群のもう一つの鮮やかな応用として、トポロジーにおける最も有名な定理の一つである「ブラウワーの不動点定理」を証明します。この定理は、日常的な現象から経済学の均衡理論に至るまで、極めて広範な応用を持ちます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">鍵となる補題</h2>

            <p className="leading-relaxed">
                定理の証明の前に、レトラクション（部分空間への射影）と基本群の間に生じる決定的な制約について確認します。
            </p>

            <ContentBox
                type="lemma"
                title={<span>Lemma 3.3-1 (<InlineMath math="D^2" /> から <InlineMath math="S^1" /> へのレトラクションは存在しない)</span>}
            >
                <p>
                    2次元円板 <InlineMath math="D^2" /> からその境界である単位円周 <InlineMath math="S^1" /> への連続なレトラクション、すなわち連続写像 <InlineMath math="r : D^2 \to S^1" /> であって
                    <BlockMath math="r|_{S^1} = \mathrm{id}_{S^1}" />
                    （境界上の点を動かさない）を満たすものは存在しない。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    そのようなレトラクション <InlineMath math="r" /> が存在すると仮定して矛盾を導く。
                </p>
                <p>
                    包含写像を <InlineMath math="\iota : S^1 \hookrightarrow D^2" /> とする。レトラクションの定義より、合成写像 <InlineMath math="r \circ \iota : S^1 \to S^1" /> は恒等写像 <InlineMath math="\mathrm{id}_{S^1}" /> である。
                </p>
                <p>
                    これらの写像が誘導する基本群の間の群準同型写像を考える。
                    <BlockMath math="\iota_* : \pi_1(S^1) \to \pi_1(D^2), \quad r_* : \pi_1(D^2) \to \pi_1(S^1)" />
                    合成写像が恒等写像であるため、誘導される準同型も <InlineMath math="r_* \circ \iota_* = \mathrm{id}_{\pi_1(S^1)}" /> とならなければならない。
                </p>
                <p>
                    しかし、<InlineMath math="D^2" /> は可縮であるためその基本群は自明群 <InlineMath math="\{e\}" /> であり、<InlineMath math="S^1" /> の基本群は <InlineMath math="\mathbb{Z}" /> である。したがって、この合成は
                    <BlockMath math="\mathbb{Z} \xrightarrow{\iota_*} \{e\} \xrightarrow{r_*} \mathbb{Z}" />
                    という形になる。途中で自明群を経由するため、<InlineMath math="r_* \circ \iota_*" /> はすべての元を <InlineMath math="0" /> に送る零写像（ゼロマップ）でなければならない。
                </p>
                <p>
                    これは <InlineMath math="r_* \circ \iota_* = \mathrm{id}_{\mathbb{Z}}" /> に矛盾する（例えば生成元 <InlineMath math="1" /> が <InlineMath math="1" /> に送られない）。したがって、仮定したレトラクションは存在しない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ブラウワーの不動点定理</h2>

            <p className="leading-relaxed">
                上記の補題を用いると、いかなる連続な変形を加えても「動かない点」が必ず存在するという驚くべき事実が証明できます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 3.3-1 (ブラウワーの不動点定理)"
            >
                <p>
                    2次元円板 <InlineMath math="D^2" /> からそれ自身への任意の連続写像 <InlineMath math="f : D^2 \to D^2" /> は、少なくとも一つの<strong>不動点（fixed point）</strong>を持つ。
                    すなわち、<InlineMath math="f(x) = x" /> を満たす点 <InlineMath math="x \in D^2" /> が必ず存在する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    背理法で示す。もし <InlineMath math="f" /> が不動点を持たないと仮定すると、すべての点 <InlineMath math="x \in D^2" /> に対して <InlineMath math="f(x) \neq x" /> が成り立つ。
                </p>
                <p>
                    この仮定の下で、<InlineMath math="D^2" /> の各点 <InlineMath math="x" /> に対して、点 <InlineMath math="f(x)" /> から点 <InlineMath math="x" /> に向かって引いた半直線が境界 <InlineMath math="S^1" /> と交わる点を <InlineMath math="r(x)" /> と定義する。
                </p>
                <p>
                    <InlineMath math="f(x)" /> と <InlineMath math="x" /> が常に異なるため、この半直線は一意に定まり、交点 <InlineMath math="r(x)" /> も一意かつ連続に定まる。さらに、もし点 <InlineMath math="x" /> が最初から境界 <InlineMath math="S^1" /> 上にあれば、半直線は <InlineMath math="x" /> そのもので境界と交わるため <InlineMath math="r(x) = x" /> となる。
                </p>
                <p>
                    これはすなわち、<InlineMath math="r : D^2 \to S^1" /> が境界を動かさない連続なレトラクションであることを意味する。しかし、Lemma 3.3-1 よりそのような写像は存在しない。
                    したがって、最初の「不動点を持たない」という仮定が誤りであり、少なくとも1つの不動点が存在する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理は数学的に美しいだけでなく、物理的な現象にも直感的な説明を与えてくれます。
            </p>

            <ContentBox
                type="example"
                title="Example 3.3-1 (ブラウワーの定理の具体例)"
            >
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>コーヒーの撹拌：</strong> コーヒーカップ（円板 <InlineMath math="D^2" />）の中のコーヒーをスプーンでかき混ぜてから静止させたとする。各分子がどこからどこへ移動したかという連続写像を考えると、定理により、かき混ぜる前と全く同じ位置にいる分子が（表面上に）少なくとも 1 つは必ず存在する。
                    </li>
                    <li>
                        <strong>地図の重なり：</strong> ある街の完全な縮尺地図（<InlineMath math="D^2" />）を、その街の地面（同じく <InlineMath math="D^2" />）のどこかに平らに置いたとする。このとき、地図上の「ある地点を示す点」が、実際の地面の「まさにその地点」の真上に重なっているような点が必ず 1 箇所存在する。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox
                type="remark"
                title={<span><InlineMath math="n" /> 次元への拡張</span>}
            >
                <p>
                    Theorem 3.3-1 は2次元（<InlineMath math="D^2" />）での主張ですが、一般の <InlineMath math="n" /> 次元球体 <InlineMath math="D^n \to D^n" /> の連続写像にも不動点が必ず存在します。
                </p>
                <p>
                    2次元の場合は円周の基本群 <InlineMath math="\pi_1(S^1) \cong \mathbb{Z}" /> を用いて証明できましたが、3次元以上になると境界 <InlineMath math="S^{n-1}" /> の基本群は自明（単連結）になってしまうため、基本群だけでは証明できません。一般の次元の証明には、代数的トポロジー（4-8）で学ぶ「<InlineMath math="n" /> 次元ホモロジー群」という、より高度な位相不変量を用いる必要があります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>円板から円周への境界を保つレトラクションは存在しない。これは、自明群を通る準同型写像が恒等写像になり得ないためである。</li>
                    <li>ブラウワーの不動点定理は、「円板から自身への連続写像は必ず不動点をもつ」ことを主張する。</li>
                    <li>証明は、もし不動点がないと仮定すると、円板から円周へのレトラクションが構成できてしまうという背理法による。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
