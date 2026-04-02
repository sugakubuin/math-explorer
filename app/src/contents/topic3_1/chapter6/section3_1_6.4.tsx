import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SolidAngleAndSingularity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                逆二乗則（万有引力や静電力）に従うベクトル場は、中心に「特異点（発散が無限大になる点）」を持ちます。
                ここでは、発散定理を用いてこの特異点をどのように扱うか、そしてそれに関連する「立体角」の概念について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">立体角</h2>

            <p>
                平面における「角（ラジアン）」を 3 次元に拡張したものが「立体角」です。
            </p>

            <ContentBox type="definition" title="Definition 6.4-1 (立体角)">
                <p>
                    点 <InlineMath math="O" /> から見た曲面 <InlineMath math="S" /> の<strong>立体角 (solid angle) </strong> <InlineMath math="\Omega" /> は、次の面積分で定義される：
                    <BlockMath math="\Omega = \iint_S \frac{\mathbf{r} \cdot \mathbf{n}}{r^3} dS = \iint_S \frac{\cos \theta}{r^2} dS" />
                    ここで <InlineMath math="\mathbf{r}" /> は点 <InlineMath math="O" /> から点 <InlineMath math="(x,y,z)" /> へのベクトル、 <InlineMath math="\theta" /> はそのベクトルと法線 <InlineMath math="\mathbf{n}" /> とのなす角である。
                    単位は<strong>ステラジアン (sr)</strong> であり、全空間を囲む閉曲面の立体角は <InlineMath math="4\pi" /> となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特異点を持つ場への対処</h2>

            <p>
                ベクトル場 <InlineMath math="\mathbf{F} = \frac{\mathbf{r}}{r^3}" /> （逆二乗則の場）は、原点以外のすべての点で <InlineMath math="\text{div}\, \mathbf{F} = 0" /> となります。
                しかし、原点を含む領域において単純に発散定理を適用しようとすると、原点での微分が定義されないため問題が生じます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-1 (逆二乗則の場の流束)">
                <p>
                    原点を含む領域 <InlineMath math="V" /> とその境界 <InlineMath math="S = \partial V" /> に対して：
                    <BlockMath math="\oiint_S \frac{\mathbf{r}}{r^3} \cdot d\mathbf{S} = 4\pi" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    原点周りに非常に小さな半径 <InlineMath math="\epsilon" /> の球面 <InlineMath math="S_\epsilon" /> を考え、領域 <InlineMath math="V" /> からその内部を除いた中空の領域を <InlineMath math="V'" /> とする。
                    領域 <InlineMath math="V'" /> では <InlineMath math="\mathbf{F} = \mathbf{r}/r^3" /> は正則であり、 <InlineMath math="\text{div}\, \mathbf{F} = 0" /> が成り立つ。発散定理より：
                    <BlockMath math="\oiint_{\partial V'} \mathbf{F} \cdot d\mathbf{S} = \iiint_{V'} \text{div}\, \mathbf{F}\, dV = 0" />
                    境界 <InlineMath math="\partial V'" /> は、元の境界 <InlineMath math="S" /> （外向き）と、小さな球面 <InlineMath math="S_\epsilon" /> （領域 <InlineMath math="V'" /> に対して外向き、つまり原点方向）からなる。
                    <BlockMath math="\oiint_S \mathbf{F} \cdot d\mathbf{S} + \oiint_{S_\epsilon} \mathbf{F} \cdot (-\hat{\mathbf{r}})\, dS = 0" />
                    ここで <InlineMath math="\hat{\mathbf{r}}" /> は外向き単位ベクトルである。球面 <InlineMath math="S_\epsilon" /> 上では <InlineMath math="\mathbf{F} = \frac{1}{\epsilon^2}\hat{\mathbf{r}}" /> なので、
                    <BlockMath math="\oiint_{S_\epsilon} \mathbf{F} \cdot \hat{\mathbf{r}}\, dS = \frac{1}{\epsilon^2} \oiint_{S_\epsilon} dS = \frac{1}{\epsilon^2}(4\pi \epsilon^2) = 4\pi" />
                    したがって、 <InlineMath math="\oiint_S \mathbf{F} \cdot d\mathbf{S} = 4\pi" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ディラクのデルタ関数への展望">
                <p>
                    この結果を強引に微分形式で書くと、点電荷のように「一点にのみ湧き出しが集中している」状態を表すことになります。
                    <BlockMath math="\text{div} \left( \frac{\mathbf{r}}{r^3} \right) = 4\pi \delta^3(\mathbf{r})" />
                    ここで <InlineMath math="\delta^3(\mathbf{r})" /> はディラクのデルタ関数と呼ばれ、後のフーリエ解析や高度な物理学で重要な役割を果たします。ベクトル解析における積分定理は、このような「特異な場」を扱うための数学的枠組みを提供しているのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>立体角</strong>：空間的な「見開きの広さ」を面積分で数値化したもの。</li>
                    <li><strong>逆二乗則</strong>：原点以外の発散が 0 であっても、原点を含めば流束は有限（<InlineMath math="4\pi" />）になる。</li>
                    <li><strong>特異点の処理</strong>：問題のある点（特異点）を小さな閉曲面で囲んで除外する手法は、複素関数論の留数定理などとも通ずる重要な数学的アイデアである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
