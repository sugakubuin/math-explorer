import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MatrixExponentialDefinitionsAndProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                単独の 1 階常微分方程式 <InlineMath math="\dot{x} = ax" /> の解が指数関数 <InlineMath math="e^{at}" /> で書けるのと同様に、連立 1 階常微分方程式（行列形式）の一般解も「行列の指数関数」を用いることで極めて簡潔に表現できます。
                本節では、行列指数関数の定義とその基本的な性質、そして微分方程式への応用について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">行列指数関数の定義</h2>

            <p>
                スカラーの指数関数のマクローリン展開を、正方行列に対して形式的に適用することで行列指数関数を定義します。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (行列指数関数)">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> に対して、行列の無限級数
                    <BlockMath math="e^A = \exp(A) = \sum_{k=0}^\infty \frac{A^k}{k!} = I + A + \frac{A^2}{2!} + \frac{A^3}{3!} + \dots" />
                    を<b>行列指数関数</b>（matrix exponential）と呼ぶ。ここで <InlineMath math="I" /> は単位行列、<InlineMath math="A^0 = I" /> とする。
                </p>
                <p>
                    この級数は、任意の行列ノルムに関して絶対収束することが保証されている。
                </p>
            </ContentBox>

            <p>
                行列指数関数は、スカラーの指数関数とよく似た性質を持ちますが、行列特有の非可換性に起因する注意点もあります。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1 (基本性質)">
                <p>
                    正方行列 <InlineMath math="A, B" /> に対して、次の性質が成り立つ。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>(i) <InlineMath math="e^0 = I" />（<InlineMath math="0" /> は零行列）</li>
                    <li>(ii) <InlineMath math="e^A" /> は常に正則であり、<InlineMath math="(e^A)^{-1} = e^{-A}" /></li>
                    <li>(iii) <InlineMath math="AB = BA" />（可換）ならば、<InlineMath math="e^{A+B} = e^A e^B" /></li>
                    <li>(iv) <InlineMath math="(e^A)^T = e^{A^T}" /> および <InlineMath math="(e^A)^* = e^{A^*}" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (i) 定義式に <InlineMath math="A=0" /> を代入すると、<InlineMath math="k \geq 1" /> の項がすべて消え、第 0 項の <InlineMath math="I" /> のみが残る。
                </p>
                <p>
                    (iii) 指数関数の積を計算し、コーシー積（二項定理の行列版）を用いることで証明できる。
                    <BlockMath math="\begin{aligned} e^A e^B &= \left( \sum_{i=0}^\infty \frac{A^i}{i!} \right) \left( \sum_{j=0}^\infty \frac{B^j}{j!} \right) \\ &= \sum_{k=0}^\infty \sum_{i=0}^k \frac{A^i B^{k-i}}{i! (k-i)!} = \sum_{k=0}^\infty \frac{1}{k!} \sum_{i=0}^k \binom{k}{i} A^i B^{k-i} \end{aligned}" />
                    <InlineMath math="AB = BA" /> ならば <InlineMath math="\sum \binom{k}{i} A^i B^{k-i} = (A+B)^k" /> が成立するため、等号が得られる。
                </p>
                <p>
                    (ii) (iii) において <InlineMath math="A" /> と <InlineMath math="-A" /> は常に可換（<InlineMath math="A(-A) = -A^2 = (-A)A" />）であるため、
                    <BlockMath math="e^A e^{-A} = e^{A-A} = e^0 = I" />
                    となり、逆行列の存在が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="非可換な場合の注意">
                <p>
                    一般に <InlineMath math="AB \neq BA" /> のとき、<InlineMath math="e^{A+B} \neq e^A e^B" /> です。反例として、
                    <BlockMath math="A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}" />
                    を考えると、<InlineMath math="e^A = I+A, e^B = I+B" /> となり、<InlineMath math="e^A e^B \neq e^{A+B}" /> であることを直接計算で確認できます。
                </p>
            </ContentBox>

            <p>
                最も単純な計算例として、対角行列の場合を見ます。
            </p>

            <ContentBox type="example" title="Example 2.1-1 (対角行列の指数関数)">
                <p>
                    <InlineMath math="A = \mathrm{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)" /> のとき、<InlineMath math="A^k = \mathrm{diag}(\lambda_1^k, \lambda_2^k, \dots, \lambda_n^k)" /> となるため、定義より
                    <BlockMath math="e^A = \mathrm{diag}(e^{\lambda_1}, e^{\lambda_2}, \dots, e^{\lambda_n})" />
                    となる。これにパラメータ <InlineMath math="t" /> を導入すると、<InlineMath math="e^{tA} = \mathrm{diag}(e^{\lambda_1 t}, \dots, e^{\lambda_n t})" /> となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分公式と初期値問題との接続</h2>

            <p>
                行列指数関数を時間 <InlineMath math="t" /> の関数 <InlineMath math={'e^{tA}'} /> として見ることが、微分方程式の解法において核心となります。
            </p>

            <ContentBox type="theorem" title="Theorem 2.1-2 (行列指数関数の微分)">
                <p>
                    定数行列 <InlineMath math="A" /> に対して、次の微分公式が成り立つ。
                    <BlockMath math="\frac{d}{dt} e^{tA} = A e^{tA} = e^{tA} A" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定義のべき級数を <InlineMath math="t" /> で項別微分する（収束が一様であるため可能である）。
                    <BlockMath math="\begin{aligned} \frac{d}{dt} \sum_{k=0}^\infty \frac{t^k A^k}{k!} &= \sum_{k=1}^\infty \frac{k t^{k-1} A^k}{k!} \\ &= A \sum_{k=1}^\infty \frac{t^{k-1} A^{k-1}}{(k-1)!} = A \sum_{m=0}^\infty \frac{t^m A^m}{m!} = A e^{tA} \end{aligned}" />
                    同様に、<InlineMath math="A^k = A^k A" /> を利用すれば <InlineMath math="e^{tA} A" /> も導ける。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この微分公式を用いると、連立 1 階常微分方程式の初期値問題が「一瞬で」解けます。
            </p>

            <ContentBox type="example" title="Example 2.1-2 (初期値問題の解)">
                <p>
                    次の連立 1 階常微分方程式（初期値問題）を考える。
                    <BlockMath math="\dot{\mathbf{x}}(t) = A \mathbf{x}(t), \quad \mathbf{x}(0) = \mathbf{x}_0" />
                    スカラーの場合の解が <InlineMath math="x(t) = e^{at}x_0" /> であることを類推すると、この行列方程式の解は
                    <BlockMath math="\mathbf{x}(t) = e^{tA} \mathbf{x}_0" />
                    となる。実際に微分すると、
                    <BlockMath math="\dot{\mathbf{x}}(t) = \frac{d}{dt}(e^{tA} \mathbf{x}_0) = (A e^{tA}) \mathbf{x}_0 = A (e^{tA} \mathbf{x}_0) = A \mathbf{x}(t)" />
                    となり、さらに <InlineMath math="t=0" /> で <InlineMath math="\mathbf{x}(0) = e^0 \mathbf{x}_0 = I \mathbf{x}_0 = \mathbf{x}_0" /> を満たすことが確認できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="行列指数関数と ODE の完全な対応">
                <p>
                    この結果は、どんなに複雑な連立方程式であっても、行列 <InlineMath math="A" /> さえ特定できればその解は形式的に <InlineMath math={'e^{tA}'} /> という一つの「関数」で代表できることを示しています。
                    行列のべき級数を直接計算するのは困難ですが、次節以降で学ぶ「ジョルダン標準形」などの線形代数の手法を用いることで、具体的かつ実用的な計算が可能になります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>行列指数関数の定義</b>：指数関数のマクローリン展開を行列に拡張した <InlineMath math="\sum A^n/n!" />。</li>
                    <li><b>基本性質</b>：可換な行列間では指数公式が成立するが、一般には順序に注意が必要。</li>
                    <li><b>微分公式</b>：<InlineMath math={'e^{tA}'} /> を微分すると行列 <InlineMath math="A" /> が「前に出る」。</li>
                    <li><b>初期値問題の解</b>：<InlineMath math="\dot{\mathbf{x}} = A \mathbf{x}" /> の解は <InlineMath math="\mathbf{x}(t) = e^{tA} \mathbf{x}_0" /> と極めて簡潔に書ける。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
