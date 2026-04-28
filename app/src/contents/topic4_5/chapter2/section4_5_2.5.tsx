import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RegularValueTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                多様体論において「新しい多様体を作り出す」ための最も強力で実用的な定理が<strong>正則値定理（Regular Value Theorem）</strong>です。
                これは、微分積分学における「陰関数定理」を多様体の言葉で大域的に定式化したものと言えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正則値と臨界値</h2>

            <p>
                写像の微分が「全射」になる点とならない点を区別します。
            </p>

            <ContentBox type="definition" title="Definition 2.5-1 (正則値と臨界値)">
                <p>
                    <InlineMath math="f : M \to N" /> を滑らかな写像とする。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                        点 <InlineMath math="p \in M" /> において、微分 <InlineMath math="df_p : T_pM \to T_{f(p)}N" /> が<strong>全射（surjective）</strong>であるとき、<InlineMath math="p" /> を <InlineMath math="f" /> の <b>正則点（regular point）</b> という。全射でないとき、<InlineMath math="p" /> を <b>臨界点（critical point）</b> という。
                    </li>
                    <li>
                        点 <InlineMath math="q \in N" /> が <InlineMath math="f" /> の <b>正則値（regular value）</b> であるとは、逆像 <InlineMath math="f^{-1}(q)" /> に含まれるすべての点 <InlineMath math="p" /> が正則点であることをいう。
                        （※ <InlineMath math="f^{-1}(q) = \emptyset" /> の場合も、条件は空虚に満たされるため <InlineMath math="q" /> は正則値とみなす。）
                    </li>
                    <li>
                        正則値でない <InlineMath math="q \in N" /> （すなわち、<InlineMath math="f^{-1}(q)" /> の中に少なくとも1つの臨界点を含むような値）を <b>臨界値（critical value）</b> という。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-1">
                <p>
                    <strong><InlineMath math="f(x,y,z) = x^2 + y^2 + z^2" /> の正則値と臨界値</strong>
                </p>
                <p className="mt-2">
                    写像 <InlineMath math="f : \mathbb{R}^3 \to \mathbb{R}" /> を考える。微分（ヤコビ行列）は勾配ベクトル <InlineMath math="df = \begin{pmatrix} 2x & 2y & 2z \end{pmatrix}" /> である。
                </p>
                <p className="mt-2">
                    これが全射（ランク1）にならないのは、<InlineMath math="df = \begin{pmatrix} 0 & 0 & 0 \end{pmatrix}" /> となる場合、すなわち原点 <InlineMath math="p = (0,0,0)" /> のみである。
                    したがって、原点 <InlineMath math="(0,0,0)" /> が唯一の臨界点である。
                </p>
                <p className="mt-2">
                    この臨界点の像 <InlineMath math="f(0,0,0) = 0" /> が唯一の臨界値である。
                    これ以外のすべての実数 <InlineMath math="c \neq 0" /> は正則値となる（<InlineMath math="c < 0" /> の場合は逆像が空集合なので正則値）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正則値定理</h2>

            <p>
                方程式 <InlineMath math="f(x) = q" /> の解集合（レベルセット）が、綺麗な多様体になるための条件を与えるのが正則値定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.5-1 (正則値定理)">
                <p>
                    <InlineMath math="M, N" /> をそれぞれ <InlineMath math="m" /> 次元、<InlineMath math="n" /> 次元の滑らかな多様体とし（<InlineMath math="m \ge n" />）、<InlineMath math="f : M \to N" /> を滑らかな写像とする。
                </p>
                <p className="mt-2">
                    <InlineMath math="q \in N" /> が <InlineMath math="f" /> の <b>正則値</b> であるならば、逆像（解集合） <InlineMath math="S = f^{-1}(q)" /> は <InlineMath math="M" /> の <InlineMath math="(m - n)" /> 次元の正則部分多様体となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="q" /> が正則値であるから、任意の <InlineMath math="p \in S = f^{-1}(q)" /> において微分 <InlineMath math="df_p" /> は全射である。
                    すなわち、<InlineMath math="p" /> におけるヤコビ行列のランクは最大ランク <InlineMath math="n" /> である。
                </p>
                <p className="mt-2">
                    ランクは下半連続（ある点でランク <InlineMath math="n" /> ならその近傍でもランク <InlineMath math="n" /> 以上）であり、最大ランクは <InlineMath math="n" /> を超えないため、<InlineMath math="p" /> のある近傍でランクは <InlineMath math="n" /> で一定となる。
                </p>
                <p className="mt-2">
                    したがって、定ランク定理（Theorem 2.3-1）を適用できる。<InlineMath math="p" /> の周りのチャートと <InlineMath math="q" /> の周りのチャートを適切に選ぶと、<InlineMath math="f" /> の座標表示は
                </p>
                <BlockMath math="\tilde{f}(x^1, \dots, x^n, x^{n+1}, \dots, x^m) = (x^1, \dots, x^n)" />
                <p className="mt-2">
                    という標準形になる。ここで <InlineMath math="q" /> は座標の原点 <InlineMath math="(0, \dots, 0)" /> に対応するように選んでおく。
                </p>
                <p className="mt-2">
                    この座標系において、方程式 <InlineMath math="f(x) = q" /> は <InlineMath math="(x^1, \dots, x^n) = (0, \dots, 0)" /> となる。
                    すなわち、解集合 <InlineMath math="S" /> は局所的に <InlineMath math="x^1 = 0, \dots, x^n = 0" /> で定義される集合となり、これはまさに正則部分多様体の定義（Definition 2.4-3）そのものである。
                    残りの自由な座標 <InlineMath math="x^{n+1}, \dots, x^m" /> が <InlineMath math="S" /> の局所座標となり、その次元は <InlineMath math="m - n" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-2">
                <p>
                    <strong>球面 <InlineMath math="S^n" /> が多様体であることの別証明</strong>
                </p>
                <p className="mt-2">
                    Example 2.5-1 で見たように、<InlineMath math="f(x) = \|x\|^2" /> （<InlineMath math="\mathbb{R}^{n+1} \to \mathbb{R}" />）に対して、<InlineMath math="1" /> は正則値である。
                </p>
                <p className="mt-2">
                    したがって正則値定理より、<InlineMath math="f^{-1}(1) = \{ x \in \mathbb{R}^{n+1} \mid \|x\|^2 = 1 \} = S^n" /> は、<InlineMath math="\mathbb{R}^{n+1}" /> の <InlineMath math="(n+1) - 1 = n" /> 次元正則部分多様体となる。
                    チャートを具体的に構成しなくても、この定理一発で多様体であることが証明できる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-3">
                <p>
                    <strong>特殊線形群 <InlineMath math="SL_n(\mathbb{R})" /></strong>
                </p>
                <p className="mt-2">
                    行列式が <InlineMath math="1" /> の行列のなす群 <InlineMath math="SL_n(\mathbb{R}) = \{ A \in M_n(\mathbb{R}) \mid \det A = 1 \}" /> を考える。
                    これは写像 <InlineMath math="\det : GL_n(\mathbb{R}) \to \mathbb{R}" /> の <InlineMath math="1" /> の逆像 <InlineMath math="\det^{-1}(1)" /> である。
                </p>
                <p className="mt-2">
                    行列式関数の微分 <InlineMath math="d(\det)_A" /> は、任意の行列 <InlineMath math="H" /> に対して
                </p>
                <BlockMath math="d(\det)_A(H) = \det(A) \mathrm{tr}(A^{-1}H)" />
                <p className="mt-2">
                    で与えられる（ヤコビの公式）。<InlineMath math="A \in SL_n(\mathbb{R})" /> のとき <InlineMath math="\det(A) = 1" /> であり、<InlineMath math="H = A" /> と選べば <InlineMath math="d(\det)_A(A) = \mathrm{tr}(I) = n \neq 0" /> となる。
                </p>
                <p className="mt-2">
                    したがって微分は零写像ではなく、値域が1次元であるため全射となる。よって <InlineMath math="1" /> は正則値である。
                    正則値定理より、<InlineMath math="SL_n(\mathbb{R})" /> は <InlineMath math="GL_n(\mathbb{R})" /> （次元 <InlineMath math="n^2" />）の <InlineMath math="n^2 - 1" /> 次元正則部分多様体（リー群）となる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="陰関数定理の多様体版">
                <p>
                    正則値定理は、本質的には「陰関数定理」と同じことを主張しています。
                    方程式 <InlineMath math="f(x_1, \dots, x_m) = q" /> を解いて、<InlineMath math="n" /> 個の変数を残り <InlineMath math="m-n" /> 個の変数の関数として（陰関数として）表せるための条件が、ヤコビ行列が最大ランクを持つこと（すなわち正則値であること）だからです。
                </p>
                <p className="mt-2">
                    なお、微分トポロジーにおける有名な「サードの定理（Sard's theorem）」によれば、滑らかな写像の臨界値の集合は測度 <InlineMath math="0" /> になります。つまり、「適当に値 <InlineMath math="q" /> を選べば、それはほとんど確実に正則値になる」という驚くべき事実が知られています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>微分が全射になる点を正則点、そうでない点を臨界点と呼ぶ。逆像のすべての点が正則点であるような値を正則値と呼ぶ。</li>
                    <li>正則値定理は、正則値の逆像（方程式の解集合）が必ず綺麗な正則部分多様体になることを保証する。</li>
                    <li>この定理を用いると、球面や特殊線形群などが多様体であることを、具体的なチャートを構成することなく容易に証明できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
