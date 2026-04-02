import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MaximumModulusPrinciple() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                正則関数の「剛性」を示すもう一つの重要な性質が <strong>最大値原理</strong> です。
                これは、正則関数の絶対値が領域の「内部」で最大値をとり得ないことを主張します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最大値原理</h2>

            <p>
                直感的には、正則関数のグラフ（絶対値の曲面）は、内部で盛り上がった「山頂」を持つことができないと言えます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1 (最大値原理)">
                <p>
                    関数 <InlineMath math="f(z)" /> が領域 <InlineMath math="U" /> 内で正則かつ定数でないとする。
                    このとき、絶対値 <InlineMath math="|f(z)|" /> は <InlineMath math="U" /> の内部で最大値をとることはない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    点 <InlineMath math="z_0 \in U" /> で <InlineMath math="|f(z)|" /> が最大値 <InlineMath math="M" /> をとると仮定する。
                    <InlineMath math="z_0" /> の周囲の半径 <InlineMath math="r" /> の円周上での平均値性質を考える。
                </p>
                <BlockMath math="f(z_0) = \frac{1}{2\pi} \int_0^{2\pi} f(z_0 + re^{i\theta}) \, d\theta" />
                <p>
                    これより不等式 <InlineMath math="|f(z_0)| \leq \frac{1}{2\pi} \int_0^{2\pi} |f(z_0 + re^{i\theta})| \, d\theta" /> を得る。
                    もし円周上のどこか一点でも <InlineMath math="|f| < M" /> ならば、被積分関数が連続であるため全体として積分の値は <InlineMath math="M" /> より小さくなり、仮定に矛盾する。
                    したがって円周上の全ての点で <InlineMath math="|f| = M" /> となる。これが任意の <InlineMath math="r" /> で成り立つため、<InlineMath math="f" /> は局所的に一定の絶対値を持ち、実部・虚部が定数（正則性より）となる。
                    一致の定理（§5.4）により、領域全体で <InlineMath math="f" /> は定数となり、仮定に矛盾する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、最大値が常に <strong>境界上</strong> で達成されることを意味する次の系を導きます。
            </p>

            <ContentBox type="proposition" title="Corollary 5.3-1 (境界上での最大値)">
                <p>
                    <InlineMath math="f(z)" /> が有界領域 <InlineMath math="D" /> の閉包 <InlineMath math="\overline{D}" /> で連続、かつ <InlineMath math="D" /> で正則であるとする。
                    このとき、<InlineMath math="|f(z)|" /> の最大値は必ず境界 <InlineMath math="\partial D" /> 上の点で達成される。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    閉包 <InlineMath math="\overline{D}" /> は有界閉集合（コンパクト）であり、<InlineMath math="|f(z)|" /> はその上で連続な実数値関数であるため、
                    <InlineMath math="\overline{D}" /> 内の点 <InlineMath math="z_* \in \overline{D}" /> で最大値をとる。
                </p>
                <p>
                    もし <InlineMath math="z_*" /> が内部 <InlineMath math="D" /> にあるとする。
                    もし <InlineMath math="f" /> が定数であれば、最大値は境界上でも当然達成される。
                    もし <InlineMath math="f" /> が定数でないならば、最大値原理（Theorem 5.3-1）により内部の点 <InlineMath math="z_*" /> で最大値をとることはできない。
                    したがって、最大値は境界 <InlineMath math="\partial D" /> 上のどこかの点で達成されなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">平均値性質との深い関係</h2>

            <p>
                なぜこのような性質が成り立つのでしょうか。その物理的・幾何学的なモデルは <strong>平均値性質</strong> にあります。
            </p>

            <ContentBox type="remark" title="平均値としての解釈">
                <p>
                    コーシーの積分公式（§5.1）において、中心 <InlineMath math="z_0" />、半径 <InlineMath math="r" /> の円周を積分路にとると、次の式が得られる。
                </p>
                <BlockMath math="f(z_0) = \frac{1}{2\pi} \int_0^{2\pi} f(z_0 + re^{i\theta}) \, d\theta" />
                <p>
                    これは、ある点での値が、その周囲の「平均値」と一致することを意味する。
                    周囲の平均が中心の値である以上、中心が周囲を凌駕する最大値になることは、定数でない限り許されないのである。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-1 (実関数との対比)">
                <p>
                    実関数 <InlineMath math="f(x) = 1 - x^2" /> を区間 <InlineMath math="[-1, 1]" /> で考えると、
                    中心の <InlineMath math="x=0" /> で最大値 <InlineMath math="1" /> をとる。
                </p>
                <p>
                    しかし、これを複素関数 <InlineMath math="f(z) = 1 - z^2" /> として捉え、
                    例えば単位円板 <InlineMath math="|z| \leq 1" /> で考えると、
                    <InlineMath math="|f(0)| = 1" /> となるが、同時に境界上の点 <InlineMath math="z=i" /> では
                    <InlineMath math="|f(i)| = |1 - (-1)| = 2" /> となり、内部の値より大きくなる。
                    内部の「山頂」に見えた点は、実は別の方向から見ればもっと高い場所へ続く「峠」に過ぎないというイメージである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正則関数の絶対値は領域内部に最大値を持たない。</li>
                    <li>最大値は常に領域の境界上で達成される。</li>
                    <li>この根底には、正則関数の「平均値性質」が存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
