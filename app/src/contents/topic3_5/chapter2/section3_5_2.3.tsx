import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FundamentalMatricesAndGeneralSolutions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                行列指数関数 <InlineMath math={'e^{tA}'} /> は、連立微分方程式の解の集合を代表する特別な行列です。
                本節では、解を列ベクトルとして構成する「基本行列」の概念を定義し、同次連立常微分方程式の一般解がどのように記述されるかを体系的に学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本行列の定義</h2>

            <p>
                連立常微分方程式の線形独立な解を束ねたものを「基本行列」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (基本行列)">
                <p>
                    行列値関数 <InlineMath math="X(t)" /> が微分方程式
                    <BlockMath math="\dot{X} = AX" />
                    を満たし、かつ任意の時刻 <InlineMath math="t" /> について <InlineMath math="\det X(t) \neq 0" />（正則）であるとき、<InlineMath math="X(t)" /> を連立方程式の<b>基本行列</b>（fundamental matrix）と呼ぶ。
                </p>
                <p>
                    このとき、<InlineMath math="X(t)" /> の各列ベクトル <InlineMath math="\mathbf{x}_j(t)" /> は、すべて線形独立な解となる。
                </p>
            </ContentBox>

            <p>
                行列指数関数 <InlineMath math={'e^{tA}'} /> は、初期値 <InlineMath math="X(0) = I" /> を持つ標準的な基本行列です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (基本行列の一般形)">
                <p>
                    行列 <InlineMath math={'e^{tA}'} /> は基本行列の一つであり、任意の基本行列 <InlineMath math="X(t)" /> は適当な正則定数行列 <InlineMath math="C" /> を用いて、
                    <BlockMath math="X(t) = e^{tA} C" />
                    と書き表すことができる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    §2.1 の微分公式より、<InlineMath math="\frac{d}{dt} e^{tA} = A e^{tA}" /> であるため、<InlineMath math={'e^{tA}'} /> は <InlineMath math="\dot{X} = AX" /> を満たす。
                    また <InlineMath math="\det e^{tA} = e^{\mathrm{tr}(tA)} \neq 0" /> より、正則性も満たす。
                    他の解 <InlineMath math="X(t)" /> との差を考える際、<InlineMath math="X(t) = e^{tA} C" /> とおくと <InlineMath math="C = e^{-tA} X(t)" /> であり、これを微分すると
                    <BlockMath math="\dot{C} = -A e^{-tA} X + e^{-tA} \dot{X} = -A e^{-tA} X + e^{-tA} (A X) = 0" />
                    となるため、<InlineMath math="C" /> は定数行列であることが証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                振動現象を記述する具体的な基本行列の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 2.3-1 (2 × 2 系 振動系の基本行列)">
                <p>
                    次の方程式を考える。
                    <BlockMath math="\dot{\mathbf{x}} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \mathbf{x}" />
                    固有値は <InlineMath math="\pm i" /> で、対応する行列指数関数（すなわち <InlineMath math="X(0)=I" /> の基本行列）は、
                    <BlockMath math="e^{tA} = \begin{pmatrix} \cos t & \sin t \\ -\sin t & \cos t \end{pmatrix}" />
                    となる。各列ベクトル <InlineMath math="\begin{pmatrix} \cos t \\ -\sin t \end{pmatrix}, \begin{pmatrix} \sin t \\ \cos t \end{pmatrix}" /> は、互いに線形独立な解をなしている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般解と初期値問題の解</h2>

            <p>
                基本行列が得られれば、同次系のすべての解はそれらの線形結合として記述できます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-2 (同次系の一般解)">
                <p>
                    同次連立 1 階常微分方程式 <InlineMath math="\dot{\mathbf{x}} = A \mathbf{x}" /> の一般解は、任意定数ベクトル <InlineMath math="\mathbf{c}" /> を用いて次のように表される。
                    <BlockMath math="\mathbf{x}(t) = e^{tA} \mathbf{c}" />
                    初期値が <InlineMath math="\mathbf{x}(0) = \mathbf{x}_0" /> の場合には、<InlineMath math="\mathbf{c} = \mathbf{x}_0" /> となる。
                </p>
            </ContentBox>

            <p>
                具体的な初期値問題を、ジョルダン分解の計算練習を兼ねて解いてみましょう。
            </p>

            <ContentBox type="example" title="Example 2.3-2 (初期値問題の解)">
                <p>
                    方程式 <InlineMath math="\dot{\mathbf{x}} = \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix} \mathbf{x}" />, <InlineMath math="\mathbf{x}(0) = \begin{pmatrix} 1 \\ -1 \end{pmatrix}" /> を解く。
                    係数行列 <InlineMath math="A" /> は対角行列 <InlineMath math="J = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}" /> に変換される。相似変換行列は <InlineMath math="P = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}" /> となる。
                    <BlockMath math="\begin{aligned} e^{tA} &= P e^{tJ} P^{-1} \\ &= \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} e^t & 0 \\ 0 & e^{3t} \end{pmatrix} \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix} \\ &= \begin{pmatrix} e^t & e^{3t}-e^t \\ 0 & e^{3t} \end{pmatrix} \end{aligned}" />
                    求める解は、
                    <BlockMath math="\mathbf{x}(t) = e^{tA} \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} e^t - (e^{3t} - e^t) \\ -e^{3t} \end{pmatrix} = \begin{pmatrix} 2e^t - e^{3t} \\ -e^{3t} \end{pmatrix}" />
                    となる。
                </p>
            </ContentBox>

            <p>
                基本行列が常に正則であることの裏付けとなる「ラブの公式」についても触れておきます。
            </p>

            <ContentBox type="remark" title="ウロンスキー行列式の正則性">
                <p>
                    基本行列の行列式（ウロンスキー行列式 <InlineMath math="W(t) = \det X(t)" />）に関しては、次の「ラブの公式（アベルの結果の行列版）」が成り立ちます。
                    <BlockMath math="W(t) = W(0) \cdot e^{\int_0^t \mathrm{tr} A \, ds} = W(0) \cdot e^{(\mathrm{tr} A) t}" />
                    指数部分は決して 0 にならないため、初期状態で独立（<InlineMath math="W(0) \neq 0" />）ならば、どの時刻においても解の独立性が保たれることが数学的に保証されます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>基本行列</b>：連立方程式の線形独立な解を束ねた、常に正則な行列。</li>
                    <li><b><InlineMath math={'e^{tA}'} /> の役割</b>：初期値が単位行列になる「最もきれいな」基本行列。</li>
                    <li><b>一般解の表示</b>：すべての解は、基本行列に定数ベクトルを掛けた形で記述される。</li>
                    <li><b>独立性の維持</b>：初期状態で独立なら、ラブの公式により、解は永遠に独立であり続ける。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
