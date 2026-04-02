import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DiagonalizableSystems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                定数係数の斉次連立線形微分方程式 <InlineMath math="\mathbf{y}' = A\mathbf{y}" /> の解法を考えます。
                単独の方程式 <InlineMath math="y' = ay" /> の解が <InlineMath math="y = e^{ax}c" /> であったことの類似として、
                行列を肩に乗せた指数関数が重要な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">行列指数関数</h2>

            <p>
                行列 <InlineMath math="A" /> に対して、無限級数を用いて指数関数の概念を拡張します。
            </p>

            <ContentBox type="definition" title="Definition 6.2-1 (行列指数関数)">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> に対して、行列指数関数 <InlineMath math="e^{Ax}" /> を次のように定義する：
                    <BlockMath math="e^{Ax} = I + Ax + \frac{(Ax)^2}{2!} + \frac{(Ax)^3}{3!} + \dots = \sum_{k=0}^{\infty} \frac{(Ax)^k}{k!}" />
                    この級数は任意の正方行列 <InlineMath math="A" /> と変数 <InlineMath math="x" /> に対して常に収束する。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 6.2-1 (初期値問題の解)">
                <p>
                    定数係数連立斉次方程式の初期値問題 <InlineMath math="\mathbf{y}' = A\mathbf{y}, \ \mathbf{y}(0) = \mathbf{c}" /> の解は、行列指数関数を用いて次のように表される：
                    <BlockMath math="\mathbf{y}(x) = e^{Ax}\mathbf{c}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    行列指数関数の級数定義 <InlineMath math="e^{Ax} = \sum_{k=0}^{\infty} \frac{A^k x^k}{k!}" /> を項別微分すると：
                    <BlockMath math="\begin{aligned} \frac{d}{dx} e^{Ax} &= \sum_{k=1}^{\infty} \frac{A^k k x^{k-1}}{k!} = \sum_{k=1}^{\infty} \frac{A^k x^{k-1}}{(k-1)!} \\ &= A \sum_{j=0}^{\infty} \frac{A^j x^j}{j!} = A e^{Ax} \end{aligned}" />
                    したがって、 <InlineMath math="\mathbf{y} = e^{Ax}\mathbf{c}" /> に対しては：
                    <BlockMath math="\mathbf{y}' = \left(\frac{d}{dx} e^{Ax}\right) \mathbf{c} = (A e^{Ax}) \mathbf{c} = A (e^{Ax} \mathbf{c}) = A \mathbf{y}" />
                    となり、方程式を満たす。また、 <InlineMath math="x = 0" /> においては <InlineMath math="e^{A \cdot 0} = I" />（単位行列）であるから、
                    <BlockMath math="\mathbf{y}(0) = e^0 \mathbf{c} = I\mathbf{c} = \mathbf{c}" />
                    となり、初期条件も満たされる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対角化可能な場合の具体的解法</h2>

            <p>
                実際に行列指数関数を級数から計算するのは困難ですが、行列が対角化可能であれば、固有値と固有ベクトルを用いることで解を容易に構築できます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-2 (対角化可能な場合の一般解)">
                <p>
                    行列 <InlineMath math="A" /> が <InlineMath math="n" /> 個の一次独立な固有ベクトル <InlineMath math="\mathbf{v}_1, \dots, \mathbf{v}_n" /> と、対応する固有値 <InlineMath math="\lambda_1, \dots, \lambda_n" /> を持つとき、
                    一般解は次のように書ける：
                    <BlockMath math="\mathbf{y}(x) = c_1 e_{\lambda_1 x} \mathbf{v}_1 + c_2 e_{\lambda_2 x} \mathbf{v}_2 + \dots + c_n e_{\lambda_n x} \mathbf{v}_n" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\mathbf{y}_k(x) = e^{\lambda_k x} \mathbf{v}_k" /> が方程式を満たすことを示す。
                    <BlockMath math="\frac{d}{dx} \mathbf{y}_k = \lambda_k e^{\lambda_k x} \mathbf{v}_k" />
                    一方、
                    <BlockMath math="A \mathbf{y}_k = e^{\lambda_k x} (A \mathbf{v}_k) = e^{\lambda_k x} (\lambda_k \mathbf{v}_k) = \lambda_k e^{\lambda_k x} \mathbf{v}_k" />
                    両者は一致するため、 <InlineMath math="\mathbf{y}_k" /> は解である。固有ベクトルが独立であれば、これらは解空間の次元 <InlineMath math="n" /> と一致する独立な解のセット（基本解系）をなす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-1 (2 次システムの解法)">
                <p><strong>問題：</strong> <InlineMath math="\mathbf{y}' = \begin{pmatrix} 1 & 1 \\ 4 & 1 \end{pmatrix} \mathbf{y}" /> の一般解を求めよ。</p>
                <div className="mt-4 space-y-4">
                    <p><strong>Step 1：固有値を求める</strong>
                        <br />固有方程式 <InlineMath math="\det(A - \lambda I) = (\lambda - 1)^2 - 4 = 0" /> より、 <InlineMath math="\lambda = 3, -1" />。
                    </p>
                    <p><strong>Step 2：固有ベクトルを求める</strong>
                        <br />・ <InlineMath math="\lambda = 3" /> のとき： <InlineMath math="\begin{pmatrix} -2 & 1 \\ 4 & -2 \end{pmatrix} \mathbf{v} = 0 \implies \mathbf{v}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}" />
                        <br />・ <InlineMath math="\lambda = -1" /> のとき： <InlineMath math="\begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix} \mathbf{v} = 0 \implies \mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}" />
                    </p>
                    <p><strong>Step 3：構成</strong>
                        <br />一般解： <InlineMath math="\mathbf{y} = c_1 e^{3x} \begin{pmatrix} 1 \\ 2 \end{pmatrix} + c_2 e^{-x} \begin{pmatrix} 1 \\ -2 \end{pmatrix}" />
                    </p>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>行列指数関数</strong>： 線形システムの解を <InlineMath math="e^{Ax}" /> という単一の「作用素」として捉えることができる。</li>
                    <li><strong>固有値の影響</strong>： 方程式の挙動（成長、減衰、振動）は、係数行列 <InlineMath math="A" /> の固有値によって決定される。</li>
                    <li><strong>対角化の威力</strong>： 行列の対角化は、連立系の各変数を「分離」して独立に解く操作に対応している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
