import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HelmholtzDecomposition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「ヘルムホルツの分解定理」は、ベクトル解析という学問体系における一つの到達点です。
                この定理は、あらゆる複雑な動き（ベクトル場）が、「湧き出し（ポテンシャル流）」と「渦（回転流）」という 2 つの基本的な要素の組み合わせだけで表現できることを保証しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヘルムホルツの分解定理</h2>

            <p>
                十分に滑らかで、無限遠で速やかに 0 に減衰するベクトル場に対して、次のことが成り立ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (ヘルムホルツの分解定理)">
                <p>
                    3 次元空間内の滑らかなベクトル場 <InlineMath math="\mathbf{F}" /> は、一意に次のように分解して表現できる：
                    <BlockMath math="\mathbf{F} = - \nabla \phi + \nabla \times \mathbf{A}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (構成の概略)">
                <p>
                    任意のベクトル場 <InlineMath math="\mathbf{F}" /> に対し、スカラーポテンシャル <InlineMath math="\phi" /> とベクトルポテンシャル <InlineMath math="\mathbf{A}" /> を次のように構成する。
                    まず、ラプラス演算子 <InlineMath math="\Delta" /> の逆演算（ポアソン方程式の解）を想定し、
                    <BlockMath math="\begin{aligned} \phi(\mathbf{r}) &= \frac{1}{4\pi} \iiint \frac{\text{div}\, \mathbf{F}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} dV', \\ \mathbf{A}(\mathbf{r}) &= \frac{1}{4\pi} \iiint \frac{\text{rot}\, \mathbf{F}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} dV' \end{aligned}" />
                    とおく。このとき、ベクトル解析の恒等式 <InlineMath math="\Delta \mathbf{F} = \nabla(\text{div}\, \mathbf{F}) - \nabla \times (\nabla \times \mathbf{F})" /> を用いることで、
                    元の場が <InlineMath math="\mathbf{F} = -\nabla \phi + \nabla \times \mathbf{A}" /> と復元されることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ポテンシャルの満たす方程式">
                <p>
                    このポテンシャルたちは、場の発散（ソース）と回転（渦）によって決まる<strong>ポアソン方程式</strong>の解として与えられます。
                    <BlockMath math="\begin{aligned} \Delta \phi &= - \text{div}\, \mathbf{F} \\ \Delta \mathbf{A} &= - \text{rot}\, \mathbf{F} \end{aligned}" />
                    （ただし <InlineMath math="\Delta" /> はラプラス演算子。 <InlineMath math="\mathbf{A}" /> については適切なゲージ条件を課したとき）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">電磁気学への応用</h2>

            <ContentBox type="example" title="Example 7.4-1 (電磁ポテンシャル)">
                <p>
                    電場 <InlineMath math="\mathbf{E}" /> と磁場 <InlineMath math="\mathbf{B}" /> も、ヘルムホルツの分解の精神に基づいて次のようにポテンシャルで記述されます。
                    <BlockMath math="\begin{aligned} \mathbf{E} &= - \nabla \phi - \frac{\partial \mathbf{A}}{\partial t} \\ \mathbf{B} &= \nabla \times \mathbf{A} \end{aligned}" />
                    このように記述することで、マクスウェル方程式のうち「磁場に湧き出しがない（ <InlineMath math="\text{div}\, \mathbf{B} = 0" /> ）」などの重要な性質が自動的に満たされることになります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">さらなる展望：Hodge 分解と多様体</h2>

            <p>
                ヘルムホルツの分解というアイデアは、現代数学において<strong>Hodge 分解</strong>という形で一般化されています。
                これは、ユークリッド空間に限らず、任意の曲がった空間（多様体）上の「微分形式」に対しても適用できる強力な理論であり、幾何学と物理学を結びつける重要な架け橋となっています。
                この先の世界は、後の専門講義（多様体論、微分幾何学など）で詳しく学ぶことになります。
            </p>

            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>本質</strong>：任意の流れは「ソースからの湧き出し」と「中心周りの渦」に完全に分解できる。</li>
                    <li><strong>ポテンシャル表示</strong>：複雑なベクトル場を、より扱いやすいスカラー場 <InlineMath math="\phi" /> やベクトルポテンシャル <InlineMath math="\mathbf{A}" /> に書き換えることができる。</li>
                    <li><strong>終章として</strong>：ベクトル演算子（grad, div, rot）と積分定理（ガウス、ストークス）が、ここで一つの統一された像を結び、 Topic 3-1 は幕を閉じます。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
