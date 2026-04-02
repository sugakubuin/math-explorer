import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ParametrizationChangeAndInvariance() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                曲面を表すためのパラメータ <InlineMath math="(u,v)" /> の選び方は一通りではありません。例えば、地球上の位置を表すのに「緯度・経度」を使うこともできれば、「メルカトル図法」などの別の座標系を使うこともできます。重要なのは、パラメータの選び方を変えても「曲面自体の幾何学的な性質（接平面など）」は変わらないということです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">許容パラメータ変換</h2>

            <p className="leading-relaxed">
                まず、2つのパラメータ表示が滑らかに移り変わるための条件（許容変換）を定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.3-1 (許容パラメータ変換)"
            >
                <p>
                    新しいパラメータ <InlineMath math="(\bar{u}, \bar{v})" /> から古いパラメータ <InlineMath math="(u, v)" /> への座標変換 <InlineMath math="(u,v) = \varphi(\bar{u}, \bar{v})" /> が<strong>許容パラメータ変換（admissible parameter transformation）</strong>であるとは、<InlineMath math="\varphi" /> が <InlineMath math="C^\infty" />-微分同相写像（滑らかな全単射で、逆写像も滑らか）であることをいう。
                </p>
                <p>
                    この条件は、多変数微積分の逆写像定理により、<InlineMath math="\varphi" /> のヤコビ行列の行列式（ヤコビアン）が至る所ゼロでないことと同値である。
                    <BlockMath math="\det(J_\varphi) = \det \begin{pmatrix} \frac{\partial u}{\partial \bar{u}} & \frac{\partial u}{\partial \bar{v}} \\ \frac{\partial v}{\partial \bar{u}} & \frac{\partial v}{\partial \bar{v}} \end{pmatrix} \neq 0" />
                </p>
                <p>
                    さらに、<InlineMath math="\det(J_\varphi) > 0" /> のとき、この変換は「向きを保つ」という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                パラメータの取り方を変えても、それらが張る接平面という「空間そのもの」は変化しないことを確認します。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 2.3-1 (接平面の不変性)"
            >
                <p>
                    許容パラメータ変換 <InlineMath math="(u,v) = \varphi(\bar{u}, \bar{v})" /> によって得られる新しいパラメータ表示 <InlineMath math="\bar{\mathbf{x}}(\bar{u}, \bar{v}) = \mathbf{x}(u(\bar{u}, \bar{v}), v(\bar{u}, \bar{v}))" /> について、新しい偏微分ベクトル <InlineMath math="\bar{\mathbf{x}}_{\bar{u}}, \bar{\mathbf{x}}_{\bar{v}}" /> が張る接平面は、古い偏微分ベクトル <InlineMath math="\mathbf{x}_u, \mathbf{x}_v" /> が張る接平面 <InlineMath math="T_p S" /> と完全に一致する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    多変数関数の連鎖律（チェインルール）を用いて、新しい偏微分ベクトルを古い偏微分ベクトルで表す。
                    <BlockMath math="\bar{\mathbf{x}}_{\bar{u}} = \frac{\partial \mathbf{x}}{\partial u} \frac{\partial u}{\partial \bar{u}} + \frac{\partial \mathbf{x}}{\partial v} \frac{\partial v}{\partial \bar{u}} = \mathbf{x}_u \frac{\partial u}{\partial \bar{u}} + \mathbf{x}_v \frac{\partial v}{\partial \bar{u}}" />
                    <BlockMath math="\bar{\mathbf{x}}_{\bar{v}} = \frac{\partial \mathbf{x}}{\partial u} \frac{\partial u}{\partial \bar{v}} + \frac{\partial \mathbf{x}}{\partial v} \frac{\partial v}{\partial \bar{v}} = \mathbf{x}_u \frac{\partial u}{\partial \bar{v}} + \mathbf{x}_v \frac{\partial v}{\partial \bar{v}}" />
                </p>
                <p>
                    これを行列の形で書くと、
                    <BlockMath math="\begin{pmatrix} \bar{\mathbf{x}}_{\bar{u}} & \bar{\mathbf{x}}_{\bar{v}} \end{pmatrix} = \begin{pmatrix} \mathbf{x}_u & \mathbf{x}_v \end{pmatrix} \begin{pmatrix} \frac{\partial u}{\partial \bar{u}} & \frac{\partial u}{\partial \bar{v}} \\ \frac{\partial v}{\partial \bar{u}} & \frac{\partial v}{\partial \bar{v}} \end{pmatrix} = \begin{pmatrix} \mathbf{x}_u & \mathbf{x}_v \end{pmatrix} J_\varphi" />
                    となる。
                </p>
                <p>
                    新しいベクトル <InlineMath math="\bar{\mathbf{x}}_{\bar{u}}, \bar{\mathbf{x}}_{\bar{v}}" /> は古いベクトル <InlineMath math="\mathbf{x}_u, \mathbf{x}_v" /> の線形結合で表されているため、新しいベクトルが張る空間は古いベクトルが張る空間 <InlineMath math="T_p S" /> の部分空間である。
                    許容変換の条件より <InlineMath math="\det(J_\varphi) \neq 0" />、すなわち <InlineMath math="J_\varphi" /> は正則行列（可逆）であるため、次元が落ちることはなく、両者が張る空間は完全に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.3-1 (球面の別パラメータ：立体射影)"
            >
                <p>
                    球面の北極 <InlineMath math="(0,0,1)" /> を除くすべての点は、<InlineMath math="xy" /> 平面上の座標 <InlineMath math="(\bar{u}, \bar{v})" /> を用いた「立体射影（stereographic projection）」によって次のようにパラメータ表示できる。
                    <BlockMath math="\bar{\mathbf{x}}(\bar{u}, \bar{v}) = \left( \frac{2\bar{u}}{1+\bar{u}^2+\bar{v}^2}, \frac{2\bar{v}}{1+\bar{u}^2+\bar{v}^2}, \frac{\bar{u}^2+\bar{v}^2-1}{1+\bar{u}^2+\bar{v}^2} \right)" />
                </p>
                <p>
                    これは、Example 2.1-1 で用いた極座標（緯度・経度）<InlineMath math="(u,v)" /> とは全く異なる数式表現である。しかし、両者が重なる領域においては、互いにヤコビアンが非ゼロの滑らかな変換 <InlineMath math="\varphi" /> で結ばれる許容変換の関係にある。
                    したがって、どちらのパラメータ表示を使って計算しても、各点における接平面という幾何学的な実体は同じものとして導出される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">幾何構造の不変性</h2>

            <p className="leading-relaxed">
                パラメータの取り方に依存しない性質と、依存してしまう性質を区別することは、微分幾何学において非常に重要です。
            </p>

            <ContentBox
                type="remark"
                title="内在的な量と外在的な量"
            >
                <p>
                    曲面の性質の中で、許容パラメータ変換を施しても値が全く変わらないものを<strong>内在的（intrinsic）な量</strong>と呼びます。
                </p>
                <p>
                    例えば、曲面上の曲線の長さ、曲面上の領域の面積などは、どのような座標系で測っても結果は同じでなければなりません。次章で学ぶ「第一基本形式（計量）」は、まさにこの内在的な幾何学を司るツールです。後に学ぶ「ガウス曲率」も驚くべきことに内在的な量であることがガウスによって証明されます（驚異の定理）。
                </p>
                <p>
                    一方、3次元空間に「どのように曲がって置かれているか」に依存する性質を<strong>外在的（extrinsic）な量</strong>と呼びます。
                    単位法ベクトル <InlineMath math="\mathbf{N}" /> の向きは、変換のヤコビアンが負になると反転してしまいます。また、Chapter 4 で学ぶ「第二基本形式」や「平均曲率」も、空間への埋め込み方に依存する外在的な量です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ヤコビアンがゼロにならない滑らかな座標の取り替えを許容パラメータ変換という。</li>
                    <li>パラメータを取り替えても、偏微分ベクトルが張る接平面という幾何学的な空間は変化しない。</li>
                    <li>パラメータの取り方に依存しない性質を「内在的」、空間への配置のされ方に依存する性質を「外在的」と呼び区別する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}