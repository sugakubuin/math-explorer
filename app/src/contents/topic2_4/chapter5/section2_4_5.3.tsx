import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DiagonalArgument() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では「あらゆる無限は自然数と同じサイズ（可算）ではないか」という予感を抱かせるような結果をいくつか見ました。
                しかし、ゲオルク・カントールはこの直感を打ち砕きました。
                彼は、実数の世界が自然数の世界よりも「本質的に大きい」ことを、今日<strong>対角線論法</strong>と呼ばれる驚くべき手法で証明したのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">非可算集合の定義</h2>

            <p>
                可算集合の定義を反転させることで、さらに巨大な無限の存在を認めます。
            </p>

            <ContentBox type="definition" title="Definition 5.3-1 (非可算集合)">
                <p>
                    可算集合ではない集合（すなわち、有限でもなく、自然数集合との間に全単射も存在しない集合）を、<strong>非可算集合（Uncountable Set）</strong>という。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実数の非可算性：対角線論法</h2>

            <p>
                次に示すカントールの定理は、数学における最も美しい証明の一つに数えられます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1 (カントールの対角線論法)">
                <p>
                    実数全体の集合 <InlineMath math="\mathbb{R}" /> は、非可算集合である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    簡単のため、開区間 <InlineMath math="I = (0, 1)" /> が可算であると仮定して矛盾を導く（背理法）。
                </p>
                <p className="mt-4">
                    仮定より、<InlineMath math="I" /> のすべての元を漏れなく並べた列 <InlineMath math="r_1, r_2, r_3, \dots" /> が存在する。
                    これらを小数点以下で書き並べる：
                </p>
                <BlockMath math="\begin{aligned} r_1 &= 0.d_{11}d_{12}d_{13}d_{14} \dots \\ r_2 &= 0.d_{21}d_{22}d_{23}d_{24} \dots \\ r_3 &= 0.d_{31}d_{32}d_{33}d_{34} \dots \\ &\vdots \end{aligned}" />
                <p className="mt-4">
                    ここで、次の規則で作られる新しい数 <InlineMath math="x = 0.x_1x_2x_3 \dots" /> を考える。
                    <BlockMath math="x_n = \begin{cases} 1 & (d_{nn} \neq 1 \text{ のとき}) \\ 2 & (d_{nn} = 1 \text{ のとき}) \end{cases}" />
                </p>
                <p className="mt-4">
                    この数 <InlineMath math="x" /> は、第1位の数字が <InlineMath math="r_1" /> と異なり、第2位の数字が <InlineMath math="r_2" /> と異なり……というように、
                    <strong>すべての <InlineMath math="n" /> に対して第 <InlineMath math="n" /> 位の数字が <InlineMath math="r_n" /> と必ず異なる</strong>。
                </p>
                <p className="mt-4">
                    したがって、<InlineMath math="x" /> はリストの中のどの数 <InlineMath math="r_n" /> とも一致しない。
                    しかし、<InlineMath math="x" /> もまた <InlineMath math="(0, 1)" /> の中に含まれる実数である。<br />
                    これは、リストが「すべての実数を網羅している」という仮定に矛盾する。<br />
                    よって、実数は可算ではなく、非可算である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対角線論法の一般化</h2>

            <p>
                対角線論法は、数だけでなく「写像」や「集合」そのものに対しても応用できます。
            </p>

            <ContentBox type="example" title="Example 5.3-1 (無限列の非可算性)">
                <p>
                    <InlineMath math="0" /> と <InlineMath math="1" /> のみからなる無限列全体の集合 <InlineMath math="\{0, 1\}^\mathbb{N}" /> を考える。
                    これも実数の小数展開と同様の議論により非可算であることが示せます。
                    この事実は、直後の「カントールの定理」へと繋がる重要な伏線となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="無限の深淵を覗く">
                <p>
                    この証明を知った当時の数学者たちの反応は様々でした。
                    あまりの斬新さに反対する者もいましたが、ダフィット・ヒルベルトは「カントールが作ってくれたこの楽園から、我々を追い出すことは誰にもできない」と絶賛しました。
                    「無限は一つだけではない」というこの事実は、現代数学のあらゆる場所で「存在証明」を行う際の強力な武器となっています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>非可算集合</strong>は、自然数と全単射が作れない「可算無限より大きな」集合である。</li>
                    <li><strong>対角線論法</strong>は、いかなる網羅的なリストからも「漏れている元」を構成することで、非可算性を示す極めて強力な手法である。</li>
                    <li>実数全体の集合 <InlineMath math="\mathbb{R}" /> は非可算であり、自然数よりも「密度の高い」無限を持っている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
