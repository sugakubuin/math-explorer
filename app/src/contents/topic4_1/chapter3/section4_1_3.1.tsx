import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BoundednessAndContinuityOfLinearOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章からは、ベクトル空間そのものではなく、あるノルム空間から別のノルム空間へとベクトルを写す「線形作用素（写像）」の性質について学んでいきます。有限次元における行列の理論が、無限次元の関数空間においてどのように拡張されるのか、あるいはどのような場面で破綻するのかを見るのが関数解析の醍醐味です。まずは、写像の「連続性」という位相的な概念と、「有界性」という評価の概念が完全に一致するという極めて重要な事実を確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有界線形作用素の定義</h2>

            <p>
                線形作用素（和とスカラー倍を保存する写像）において、入力ベクトルの長さを高々ある定数倍までにしか引き伸ばさないものを有界線形作用素と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (有界線形作用素)">
                <p>
                    <InlineMath math="X, Y" /> をノルム空間とする。<InlineMath math="X" /> から <InlineMath math="Y" /> への線形写像 <InlineMath math="T" /> が<b>有界線形作用素（bounded linear operator）</b>であるとは、ある実の定数 <InlineMath math="M \geq 0" /> が存在して、任意の <InlineMath math="x \in X" /> に対して
                </p>
                <BlockMath math="\|Tx\|_Y \leq M \|x\|_X" />
                <p>
                    を満たすことである。
                </p>
            </ContentBox>

            <p>
                有限次元ベクトル空間の間の線形写像はすべて有界となります。
            </p>

            <ContentBox type="example" title="Example 3.1-1 (有界な線形作用素の例)">
                <p>
                    有限次元空間の間の線形写像 <InlineMath math="T : \mathbb{R}^n \to \mathbb{R}^m" /> は、ある <InlineMath math="m \times n" /> 行列 <InlineMath math="A" /> を用いて <InlineMath math="Tx = Ax" /> と表される。<InlineMath math="A" /> の各成分を <InlineMath math="a_{ij}" /> とする。<InlineMath math="\|\cdot\|" /> を標準のユークリッドノルム（<InlineMath math="2" />-ノルム）としたとき、コーシー-シュワルツの不等式より各成分について出力が抑えられるため、
                </p>
                <BlockMath math="\|Tx\|_2 = \|Ax\|_2 \leq \left( \sum_{i=1}^m \sum_{j=1}^n |a_{ij}|^2 \right)^{1/2} \|x\|_2" />
                <p>
                    となり、ルートの部分を定数 <InlineMath math="M" /> と置けば有界性の条件を満たす。
                </p>
            </ContentBox>

            <p>
                しかし、無限次元空間では線形であっても有界にならない（定数 <InlineMath math="M" /> で抑えきれない）作用素が存在します。その典型例が微積分で扱う「微分」です。
            </p>

            <ContentBox type="example" title="Example 3.1-2 (非有界な線形作用素の例)">
                <p>
                    微分可能な連続関数の空間 <InlineMath math="C^1[0,1]" /> から連続関数の空間 <InlineMath math="C[0,1]" /> への微分作用素 <InlineMath math="Tf = f'" /> を考える。両空間には上限ノルム <InlineMath math="\|\cdot\|_\infty" /> を入れる。
                </p>
                <p>
                    関数列 <InlineMath math="f_n(x) = \sin(nx)" /> （<InlineMath math="n \geq 1" />）を考えると、各 <InlineMath math="f_n" /> の上限ノルムは <InlineMath math="\|f_n\|_\infty = 1" /> である。
                </p>
                <p>
                    これに微分作用素を適用すると <InlineMath math="Tf_n(x) = f_n'(x) = n\cos(nx)" /> となる。この極大値は <InlineMath math="x=0" /> などで取られ、<InlineMath math="\|Tf_n\|_\infty = n" /> となる。
                </p>
                <p>
                    入力の大きさは常に <InlineMath math="1" /> であるにもかかわらず、出力の大きさは <InlineMath math="n \to \infty" /> とともにいくらでも大きくなる。すなわち <InlineMath math="\|Tf\|_\infty \leq M \|f\|_\infty" /> を満たす定常な定数 <InlineMath math="M" /> は存在せず、微分作用素 <InlineMath math="T" /> は非有界である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有界性と連続性の同値</h2>

            <p>
                関数の連続性（入力が近づけば出力も近づく）は解析学の基本ですが、線形作用素においては、この連続性への条件と先ほどの有界性への条件が完全に等価になります。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-1 (有界性と連続性の同値)">
                <p>
                    ノルム空間 <InlineMath math="X" /> から <InlineMath math="Y" /> への線形作用素 <InlineMath math="T" /> について、以下の3つの条件はすべて同値である。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="T" /> は有界である。</li>
                    <li><InlineMath math="T" /> は <InlineMath math="X" /> のすべての点で連続である。</li>
                    <li><InlineMath math="T" /> は原点 <InlineMath math="x = 0" /> において連続である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="\implies" /> (2) の証明：<InlineMath math="T" /> が有界とする。ある <InlineMath math="M > 0" /> があり <InlineMath math="\|Tx\| \leq M\|x\|" /> が成り立つ。<InlineMath math="x_n \to x" /> となる任意の点列を考えると、線形性より
                </p>
                <BlockMath math="\|Tx_n - Tx\| = \|T(x_n - x)\| \leq M\|x_n - x\|" />
                <p>
                    となり、<InlineMath math="\|x_n - x\| \to 0" /> なので <InlineMath math="\|Tx_n - Tx\| \to 0" /> となる。よって <InlineMath math="T" /> は点 <InlineMath math="x" /> で連続である。<InlineMath math="x" /> は任意なので全体で連続である。
                </p>
                <p>
                    (2) <InlineMath math="\implies" /> (3) の証明：単なる自明な包含関係である（すべての点で連続なら当然原点でも連続）。
                </p>
                <p>
                    (3) <InlineMath math="\implies" /> (1) の証明：対偶を示す。「有界でないならば原点で連続にならない」ことを示せばよい。<InlineMath math="T" /> が非有界であると仮定すると、任意の自然数 <InlineMath math="n" /> に対して <InlineMath math="\|Tx_n\| \geq n \|x_n\|" /> となるような <InlineMath math="x_n \in X \setminus \{0\}" /> が存在する。
                </p>
                <p>
                    ここで、新しい列 <InlineMath math="y_n = \frac{x_n}{n \|x_n\|}" /> を定義する。<InlineMath math="\|y_n\| = \frac{1}{n} \to 0" /> なので <InlineMath math="y_n" /> は原点に収束する。しかし、<InlineMath math="Ty_n" /> のノルムを評価すると、線形性から
                </p>
                <BlockMath math="\begin{aligned} \|Ty_n\| &= \left\| T \left( \frac{x_n}{n \|x_n\|} \right) \right\| \\ &= \frac{1}{n \|x_n\|} \|Tx_n\| \\ &\geq \frac{1}{n \|x_n\|} n \|x_n\| = 1 \end{aligned}" />
                <p>
                    となる。<InlineMath math="y_n \to 0" /> にもかかわらず <InlineMath math="Ty_n" /> は <InlineMath math="0" />（原点の像 <InlineMath math="T(0)=0" />）に収束しないため、<InlineMath math="T" /> は原点で連続ではない。よって対偶が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-3 (連続性の崩壊の確認)">
                <p>
                    Example 3.1-2 の非有界な微分作用素 <InlineMath math="Tf = f'" /> に対して、先の証明で構成した非連続な列を具体的に見てみる。
                </p>
                <p>
                    <InlineMath math="g_n(x) = \frac{\sin(nx)}{n}" /> という関数列を考えると、上限ノルムは <InlineMath math="\|g_n\|_\infty = \frac{1}{n}" /> であり、<span className="whitespace-nowrap"><InlineMath math="n \to \infty" /></span> で <InlineMath math="0" /> 関数に一様収束（原点へ収束）する。
                </p>
                <p>
                    しかしこれに微分作用素を適用すると、<InlineMath math="Tg_n(x) = \cos(nx)" /> となり、上限ノルムは常に <InlineMath math="\|Tg_n\|_\infty = 1" /> である。<InlineMath math="n \to \infty" /> でも <InlineMath math="0" /> には収束せず、原点の付近で値が急激にジャンプしてしまい連続性が破綻していることが確認できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="有限次元と無限次元の違い">
                <p>
                    代数学（線形代数）と解析学（位相）を結びつけるこの定理は極めて強力です。有限次元空間では線形写像は自動的に有界（したがって自動的に連続）ですが、無限次元空間では Example 3.1-2, 3.1-3 に見たように「線形であっても非連続・非有界」となる作用素が簡単に作れてしまいます。関数解析において「有界」という条件をごく自然に仮定するのは、関数を安定して解析するために「連続性」が絶対に必要だからなのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>線形作用素が有界であるとは、入力の長さを高々定数倍にしか引き伸ばさないことを意味する。</li>
                    <li>線形作用素において、「有界であること」「連続であること」「原点で連続であること」はすべて同値である（Theorem 3.1-1）。</li>
                    <li>有限次元空間の線形作用素はすべて有界（連続）であるが、無限次元空間における微分作用素などは非有界（非連続）な振る舞いを示す。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
