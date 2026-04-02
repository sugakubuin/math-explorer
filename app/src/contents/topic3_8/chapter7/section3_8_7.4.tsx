import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SmallGroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに、対称群や二面体群といった大きな群の族を見てきましたが、本節では比較的小さな位数（4や8）を持ちながら、独特で重要な構造を持つ「四元数群」と「クラインの四元群」について学びます。
                特に位数8の非可換群である二面体群 <InlineMath math="D_4" /> と、四元数群 <InlineMath math="Q_8" /> の違いを理解することは、群の構造を深く知るための良い練習になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">四元数群 Q_8 の定義と構造</h2>

            <p className="leading-relaxed mb-4">
                四元数群は、複素数を拡張した「四元数（Quaternion）」の乗法構造に関連する群です。
            </p>

            <ContentBox type="definition" title="Definition 7.4-1 (四元数群 Q_8)">
                <p>
                    位数8の群 <InlineMath math="Q_8 = \{1, -1, i, -i, j, -j, k, -k\}" /> を <b>四元数群</b> と呼ぶ。
                    演算は以下の基本関係式、および行列の積と同様の規則によって規定される：
                    <BlockMath math="i^2 = j^2 = k^2 = ijk = -1" />
                    ここで、<InlineMath math="-1" /> は、他の任意の元と可換であり、<InlineMath math="(-1)^2 = 1" /> を満たす単位元以外の特別な元である。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                関係式から導かれる乗法の規則を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.4-1 (Q_8 の乗法と部分群)">
                <p>
                    基本関係式から、以下のような非可換な積が得られる：
                    <BlockMath math="ij = k, \quad ji = -k, \quad jk = i, \\ kj = -i, \quad ki = j, \quad ik = -j" />
                    これはベクトル外積の性質に似ている。
                </p>
                <p className="mt-4">
                    また、<InlineMath math="Q_8" /> の部分群は以下の <b>6つ</b> である：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\{1\}" />（自明な群）</li>
                    <li><InlineMath math="\{1, -1\}" /></li>
                    <li><InlineMath math="\langle i \rangle = \{1, i, -1, -i\}" /></li>
                    <li><InlineMath math="\langle j \rangle = \{1, j, -1, -j\}" /></li>
                    <li><InlineMath math="\langle k \rangle = \{1, k, -1, -k\}" /></li>
                    <li><InlineMath math="Q_8" /></li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-4">
                四元数群の極めて特徴的な性質として、<b>「非可換群であるにもかかわらず、すべての部分群が正規部分群である」</b> という点が挙げられます（このような群をハミルトン群と呼びます）。
            </p>

            <ContentBox type="proposition" title="Proposition 7.4-1 (Z(Q_8) と商群)">
                <p>
                    1. <InlineMath math="Q_8" /> の中心は <b><InlineMath math="Z(Q_8) = \{1, -1\}" /></b> である。
                </p>
                <p className="mt-2">
                    2. 中心による商群は、次に述べるクラインの四元群と同型になる：
                    <BlockMath math="Q_8 / Z(Q_8) \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="i, j, k" /> らは互いに非可換（<InlineMath math="ij = -ji" /> など）であるため、中心に含まれない。
                    一方、<InlineMath math="-1" /> は定義によりすべての元と可換であるため、<InlineMath math="Z(Q_8) = \{1, -1\}" /> である。
                </p>
                <p className="mt-4">
                    2. 商群 <InlineMath math="Q_8/Z(Q_8)" /> の元の数は <InlineMath math="8/2 = 4" /> 個である。
                    剰余類は <InlineMath math="\bar{e}=\{1, -1\}, \bar{i}=\{i, -i\}, \bar{j}=\{j, -j\}, \bar{k}=\{k, -k\}" /> となる。
                    各元の2乗を計算すると、<InlineMath math="\bar{i}^2 = \bar{i^2} = \overline{-1} = \bar{e}" /> となり、<InlineMath math="\bar{j}, \bar{k}" /> も同様である。
                    単位元以外のすべての元の位数が2である位数4の群は、クラインの四元群 <InlineMath math="V_4" /> に限られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">クラインの四元群 V_4 と位数 4 の群</h2>

            <p className="leading-relaxed mb-4">
                位数4の群は、同型を除いて2種類しか存在しません。その一方である巡回群 <InlineMath math="\mathbb{Z}/4\mathbb{Z}" /> に対し、もう一方の非巡回群を「クラインの四元群」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 7.4-2 (クラインの四元群 V_4)">
                <p>
                    2つの位数2の群の直積 <b><InlineMath math="V_4 = \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}" /></b> を <b>クラインの四元群</b> （Vierergruppe）と呼ぶ。
                    集合としては <InlineMath math="\{e, a, b, ab\}" /> と書け、任意の非単位元 <InlineMath math="x" /> について <b><InlineMath math="x^2 = e" /></b> を満たす。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                位数4の2つの群を比較してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.4-2 (Z/4Z と V_4 の比較)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>巡回群 <InlineMath math="\mathbb{Z}/4\mathbb{Z}" /></b>：<br />
                        位数4の元（生成元 <InlineMath math="\bar{1}" />）を持つ。
                    </li>
                    <li>
                        <b>クラインの四元群 <InlineMath math="V_4" /></b>：<br />
                        <b>位数4の元を持たない</b>（最大位数が2）。これは物理学の鏡映操作などでよく現れる。
                    </li>
                </ul>
                <p className="mt-4">
                    このように、位数（集合の大きさ）が同じであっても、各元の位数や演算表を調べることで、異なる構造（非同型）であることがわかります。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                同様に、位数8の非可換群である <InlineMath math="Q_8" /> と <InlineMath math="D_4" /> も、一見似ていますが異なる構造を持ちます。
            </p>

            <ContentBox type="example" title="Example 7.4-3 (Q_8 と D_4 の比較)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>位数2の元の数</b>：<br />
                        <InlineMath math="Q_8" /> で位数2の元は <InlineMath math="-1" /> のただ1つである。
                        一方、<InlineMath math="D_4" /> は回転の <InlineMath math="r^2" /> と4つの反転、合わせて5つの位数2の元を持つ。
                    </li>
                    <li>
                        <b>正規部分群の割合</b>：<br />
                        <InlineMath math="Q_8" /> はすべての部分群が正規である。
                        一方、<InlineMath math="D_4" /> は正規でない部分群（例：反転 <InlineMath math="\langle s \rangle" />）を持つ。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-6">
                小さな位数であっても、多様な構造が存在すること、そしてそれらを「各元の位数」や「正規部分群の構造」などの内部的な情報で区別できることが、群論の面白いところです。
                次節では、より大きな群の族である「行列群」について学習します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>四元数群 <InlineMath math="Q_8" /> は位数8の非可換群であり、<b>すべての部分群が正規部分群</b> となる珍しい性質を持つ。</li>
                    <li>クラインの四元群 <InlineMath math="V_4" /> は <b>位数4の非巡回なアーベル群</b> である。</li>
                    <li>同等な位数を持つ群であっても、細かな演算性質や部分群構造によって明確に区別される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
