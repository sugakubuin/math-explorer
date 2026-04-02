import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function StokesPhysicalApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ストークスの定理は、電磁気学を系統的に記述するための最も重要な数学的枠組みです。
                磁場の発生（アンペールの法則）や起電力の発生（ファラデーの法則）など、物理現象の「積分形式」と「微分形式」を直接結びつける役割を担っています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アンペールの法則（磁場の発生）</h2>

            <p>
                電流が流れると、その周囲に磁場が生じます。この関係を記述するのがアンペールの法則です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (アンペールの法則)">
                <p>
                    電流密度を <InlineMath math="\mathbf{J}" />、磁場（磁束密度）を <InlineMath math="\mathbf{B}" /> とすると、閉曲線 <InlineMath math="C" /> を貫く正味の電流 <InlineMath math="I" /> と、その周りの磁場の循環について次の積分形が成り立つ：
                    <BlockMath math="\oint_C \mathbf{B} \cdot d\mathbf{r} = \mu_0 I = \mu_0 \iint_S \mathbf{J} \cdot d\mathbf{S}" />
                    微分形では、次の通り記述される：
                    <BlockMath math="\text{rot}\, \mathbf{B} = \mu_0 \mathbf{J}" />
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
                    ※ 定常電流の場合。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    積分形のアンペールの法則の左辺にストークスの定理を適用すると：
                    <BlockMath math="\oint_C \mathbf{B} \cdot d\mathbf{r} = \iint_S (\text{rot}\, \mathbf{B}) \cdot d\mathbf{S}" />
                    これと積分形の右辺を比較すると：
                    <BlockMath math="\iint_S (\text{rot}\, \mathbf{B}) \cdot d\mathbf{S} = \iint_S \mu_0 \mathbf{J} \cdot d\mathbf{S}" />
                    これが任意の曲面 <InlineMath math="S" /> に対して成り立つためには、被積分関数が等しくなければならない（ <InlineMath math="\text{rot}\, \mathbf{B} = \mu_0 \mathbf{J}" /> ）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.3-1 (直線電流がつくる磁場)">
                <p>
                    無限に長い直線電流 <InlineMath math="I" /> がつくる磁場は、電流からの距離を <InlineMath math="r" /> とすると、
                    <InlineMath math="B = \frac{\mu_0 I}{2\pi r}" />
                    で与えられます。この磁場の円周に沿った循環を計算すると、
                    <BlockMath math="\oint_C \mathbf{B} \cdot d\mathbf{r} = \int_0^{2\pi} \frac{\mu_0 I}{2\pi r} \cdot r\, d\theta = \mu_0 I" />
                    となり、積分形のアンペールの法則が満たされていることが分かります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ファラデーの電磁誘導の法則</h2>

            <p>
                磁場が時間的に変化すると、電場（起電力）が発生します。これが発電機などの基本原理です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-2 (ファラデーの電磁誘導の法則)">
                <p>
                    閉曲線 <InlineMath math="C" /> で囲まれた曲面 <InlineMath math="S" /> を通る磁束の変化が起電力を生む：
                    <BlockMath math="\oint_C \mathbf{E} \cdot d\mathbf{r} = - \iint_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{S}" />
                    微分形では、次の通り記述される：
                    <BlockMath math="\text{rot}\, \mathbf{E} = - \frac{\partial \mathbf{B}}{\partial t}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    左辺にストークスの定理を適用すると、誘導電場の循環について：
                    <BlockMath math="\oint_C \mathbf{E} \cdot d\mathbf{r} = \iint_S (\text{rot}\, \mathbf{E}) \cdot d\mathbf{S}" />
                    これを積分形に代入すると：
                    <BlockMath math="\iint_S (\text{rot}\, \mathbf{E}) \cdot d\mathbf{S} = \iint_S \left( -\frac{\partial \mathbf{B}}{\partial t} \right) \cdot d\mathbf{S}" />
                    任意の閉曲線とその囲む面 <InlineMath math="S" /> に対してこれが成り立つことから、微分形の法則が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="マクスウェル方程式の完成へ">
                <p>
                    ガウスの法則（発散）、アンペールの法則（回転）、ファラデーの法則（回転）、そして「磁場には湧き出しがない」という法則（発散）の 4 つを合わせることで、古典電磁気学の集大成である<strong>マクスウェル方程式</strong>が完成します。
                    ベクトル解析という言語なしには、これらの法則をこれほどまでに簡潔かつ本質的に記述することは不可能です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>アンペールの法則</strong>：磁場の「渦（回転）」が、その場にある「電流」によって生じることを示す。</li>
                    <li><strong>ファラデーの法則</strong>：磁場の時間的な「変化（微分）」が、電場の「渦（起電力）」を誘導することを示す。</li>
                    <li><strong>核心</strong>：ストークスの定理は、マクスウェル方程式の「積分形（実験的法則）」と「微分形（物理法則の根源）」とを数学的に等価なものにする。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
