import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FrenetSerretFormulas() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに定義した接ベクトル <InlineMath math="T" />、主法線ベクトル <InlineMath math="N" />、従法線ベクトル <InlineMath math="B" /> は、曲線の各点に付随する正規直交基底（動標構）をなします。この標構が曲線に沿ってどのように回転していくかを、曲率と捩率を用いて美しく記述するのが「フルネ＝セレの公式」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">フルネ＝セレの公式の導出</h2>

            <p className="leading-relaxed">
                すでに <InlineMath math="T'" /> と <InlineMath math="B'" /> については式が得られています。残る <InlineMath math="N'" /> を計算することで、完全な連立微分方程式が得られます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 1.4-1 (フルネ＝セレの公式)"
            >
                <p>
                    弧長パラメータ <InlineMath math="s" /> で表された曲線上のフレネ-セレ標構 <InlineMath math="\{T, N, B\}" /> に対して、次の微分方程式系が成り立つ。
                    <BlockMath math="\begin{aligned} T' &= \kappa N \\ N' &= -\kappa T + \tau B \\ B' &= -\tau N \end{aligned}" />
                    （ここで <InlineMath math="\kappa" /> は曲率、<InlineMath math="\tau" /> は捩率であり、微分 <InlineMath math="'" /> は <InlineMath math="d/ds" /> を表す。）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    第1の式 <InlineMath math="T' = \kappa N" /> は、主法線ベクトルと曲率の定義そのものである。
                </p>
                <p>
                    第3の式 <InlineMath math="B' = -\tau N" /> は、捩率の定義そのものである。
                </p>
                <p>
                    第2の式を導出する。<InlineMath math="\{T, N, B\}" /> は右手系の正規直交基底をなすため、ベクトル解析の公式から <InlineMath math="N = B \times T" /> と書ける。これを <InlineMath math="s" /> で微分すると、外積の微分則（積の微分と同様）により、
                    <BlockMath math="N' = (B \times T)' = B' \times T + B \times T'" />
                    となる。ここに第1の式と第3の式を代入する。
                    <BlockMath math="\begin{aligned} N' &= (-\tau N) \times T + B \times (\kappa N) \\ &= -\tau (N \times T) + \kappa (B \times N) \end{aligned}" />
                </p>
                <p>
                    右手系の外積の性質より、<InlineMath math="N \times T = -B" />、<InlineMath math="B \times N = -T" /> であるから、
                    <BlockMath math="N' = -\tau (-B) + \kappa (-T) = -\kappa T + \tau B" />
                    が得られ、定理が証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この方程式は、行列を用いると非常に見通しの良い形で書くことができます。
            </p>

            <ContentBox
                type="example"
                title="Example 1.4-1 (フルネ＝セレ公式の行列表示)"
            >
                <p>
                    フルネ＝セレの公式をベクトルを並べた行列で表現すると、次のようになる。
                    <BlockMath math="\frac{d}{ds} \begin{pmatrix} T \\ N \\ B \end{pmatrix} = \begin{pmatrix} 0 & \kappa & 0 \\ -\kappa & 0 & \tau \\ 0 & -\tau & 0 \end{pmatrix} \begin{pmatrix} T \\ N \\ B \end{pmatrix}" />
                </p>
                <p>
                    この右辺に現れる係数行列は<strong>歪対称行列（反対称行列、転置するとマイナスになる行列）</strong>になっている。この歪対称性は、基底 <InlineMath math="\{T, N, B\}" /> が曲線に沿って移動する間も「直交標構（内積が保たれる）」であり続けるという幾何学的な事実を反映している（回転行列のリー代数が歪対称行列であることと同じ理由）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">フルネ＝セレ公式の応用</h2>

            <p className="leading-relaxed">
                フルネ＝セレの公式を使うと、曲線の性質を直接的に計算したり、逆に曲率・捩率から曲線の形を復元したりすることが容易になります。
            </p>

            <ContentBox
                type="example"
                title="Example 1.4-2 (螺旋への適用)"
            >
                <p>
                    これまでの例で計算した螺旋について、<InlineMath math="\kappa = \frac{a}{a^2+b^2}" />、<InlineMath math="\tau = \frac{b}{a^2+b^2}" /> と定数になることがわかっていた。
                    ここで、<InlineMath math="\kappa" /> と <InlineMath math="\tau" /> がどちらも定数（<InlineMath math="\kappa > 0, \tau \neq 0" />）であるような任意の曲線は、フルネ＝セレの微分方程式を解くことで、本質的にこの螺旋（一般化円柱螺旋）と同じ形になることが証明できる。
                </p>
                <p>
                    実際に定数係数の微分方程式として解くと、三角関数が現れ、それが円柱上を等速で巻き上がる螺旋の軌跡を描くことが確認できる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="フルネ＝セレ公式の物理的意味"
            >
                <p>
                    曲線を飛行機の飛行軌跡とみなすと、フルネ＝セレ標構は非常に直感的な意味を持ちます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="T" />：機首の向いている進行方向</li>
                    <li><InlineMath math="N" />：機首を旋回させる方向（ピッチ/ヨー運動に対応）</li>
                    <li><InlineMath math="B" />：機体がロール（横転）する軸の方向</li>
                </ul>
                <p>
                    曲率 <InlineMath math="\kappa" /> が大きいほど「急カーブ」であり、捩率 <InlineMath math="\tau" /> が大きいほど「急激にきりもみ回転（ひねり）」していることを示します。DNAの二重螺旋の幾何的記述や、ジェットコースターの軌道設計などでも、このフルネ＝セレの枠組みが応用されています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>フレネ-セレ標構 <InlineMath math="\{T, N, B\}" /> の <InlineMath math="s" /> による微分は、自身らの線形結合で表すことができる（フルネ＝セレの公式）。</li>
                    <li>公式の係数には曲率 <InlineMath math="\kappa" /> と捩率 <InlineMath math="\tau" /> だけが現れ、行列で書くと歪対称行列になる。</li>
                    <li>この微分方程式は、曲線の局所的な曲がり方とねじれ方を完全に記述する基本方程式である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}