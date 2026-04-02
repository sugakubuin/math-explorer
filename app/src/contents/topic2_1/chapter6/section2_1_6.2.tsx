import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DiagonalizationProcedureAndApplication() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、どのような行列が対角化できるかの条件を学びました。<br />
                ここでは、与えられた行列を実際に対角化する具体的な手順と、それがもたらす強力な応用のひとつ（行列のべき乗の計算）について見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対角化の手順</h2>

            <ContentBox type="remark" title="対角化の具体的な計算手順">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> を対角化するためには、以下のステップを踏みます。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-3">
                    <li>
                        <strong>固有値を求める：</strong><br />
                        特性方程式 <InlineMath math="\det(A - \lambda I) = 0" /> を解いて、固有値 <InlineMath math="\lambda_1, \lambda_2, \dots, \lambda_n" /> をすべて求めます（重解があれば重複して数えます）。
                    </li>
                    <li>
                        <strong>固有ベクトルを求める：</strong><br />
                        各固有値 <InlineMath math="\lambda_i" /> について、連立方程式 <InlineMath math="(A - \lambda_i I)\boldsymbol{v} = \boldsymbol{0}" /> を解き、線形独立な固有ベクトル <InlineMath math="\boldsymbol{p}_1, \boldsymbol{p}_2, \dots, \boldsymbol{p}_n" /> を基底として選び出します。<br />
                        （もし <InlineMath math="n" /> 本の独立なベクトルが取れなければ、その時点で対角化は「不可能」と結論づけられます。）
                    </li>
                    <li>
                        <strong>変換行列 <InlineMath math="P" /> を作る：</strong><br />
                        見つけた <InlineMath math="n" /> 本の固有ベクトルを列ベクトルとして並べて、行列 <InlineMath math="P = (\boldsymbol{p}_1, \boldsymbol{p}_2, \dots, \boldsymbol{p}_n)" /> を作ります。
                    </li>
                    <li>
                        <strong>結果を確認する（対角行列 <InlineMath math="D" />）：</strong><br />
                        この <InlineMath math="P" /> を用いて <InlineMath math="P^{-1}AP" /> を計算すると、対角線上に対応する固有値が並んだ対角行列 <InlineMath math="D" /> になります。
                        <BlockMath math="P^{-1} A P = D = \begin{pmatrix} \lambda_1 & & \huge{0} \\ & \ddots & \\ \huge{0} & & \lambda_n \end{pmatrix}" />
                    </li>
                </ol>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 6.2-1 （対角化の具体例）">
                <p>次の行列 <InlineMath math="A" /> を対角化します。</p>
                <BlockMath math="A = \begin{pmatrix} 1 & 3 \\ 2 & 2 \end{pmatrix}" />

                <h3 className="text-lg font-bold mt-4 mb-2">Step 1: 固有値</h3>
                <BlockMath math="\begin{aligned}
                                    \det(A - \lambda I) &= \det\begin{pmatrix} 1-\lambda & 3 \\ 2 & 2-\lambda \end{pmatrix} \\
                                    &= (1-\lambda)(2-\lambda) - 6 \\
                                    &= \lambda^2 - 3\lambda - 4 = 0
                                \end{aligned}" />
                <BlockMath math="(\lambda - 4)(\lambda + 1) = 0" />
                <p>より、固有値は <InlineMath math="\lambda_1 = 4" /> と <InlineMath math="\lambda_2 = -1" /> です。（相異なる2つの固有値なので、対角化できることが保証されています。）</p>

                <h3 className="text-lg font-bold mt-4 mb-2">Step 2: 固有ベクトル</h3>
                <p className="font-bold"><InlineMath math="\lambda_1 = 4" /> のとき</p>
                <BlockMath math="\begin{pmatrix} 1-4 & 3 \\ 2 & 2-4 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -3 & 3 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
                <p>ここから <InlineMath math="-3x + 3y = 0 \Rightarrow x = y" />。固有ベクトルとして <InlineMath math="\boldsymbol{p}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}" /> を選びます。</p>

                <p className="font-bold mt-4"><InlineMath math="\lambda_2 = -1" /> のとき</p>
                <BlockMath math="\begin{pmatrix} 1-(-1) & 3 \\ 2 & 2-(-1) \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 2 & 3 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
                <p>ここから <InlineMath math="2x + 3y = 0" />。固有ベクトルとして <InlineMath math="\boldsymbol{p}_2 = \begin{pmatrix} -3 \\ 2 \end{pmatrix}" /> を選びます。</p>

                <h3 className="text-lg font-bold mt-4 mb-2">Step 3: 変換行列 P と対角化</h3>
                <p>求めたベクトルを横に並べて <InlineMath math="P" /> を作ります。</p>
                <BlockMath math="P = \begin{pmatrix} 1 & -3 \\ 1 & 2 \end{pmatrix}" />
                <p>この <InlineMath math="P" /> は逆行列を持ちます（<InlineMath math="\det P = 2 - (-3) = 5 \neq 0" />）。<br />計算すると、<InlineMath math="P^{-1} A P" /> は対角線上に固有値 <InlineMath math="4" /> と <InlineMath math="-1" /> が並ぶ対角行列になります。</p>
                <BlockMath math="P^{-1} A P = \begin{pmatrix} 4 & 0 \\ 0 & -1 \end{pmatrix}" />
                <p className="text-sm text-slate-500 mt-2">
                    ※ <InlineMath math="P" /> の列ベクトルの順番を逆にすると、対角行列の固有値の順番も逆になります。対応関係が合っていればどちらでも正解です。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">行列のべき乗への応用</h2>

            <p>
                対角化がもたらす最大の恩恵の一つが、「行列のべき乗（<InlineMath math="A^n" />）」を驚くほど簡単に計算できることです。<br />
                行列を何百乗もする計算（マルコフ過程や力学系の時間発展などで頻繁に登場します）は通常膨大な計算量になりますが、対角化を利用すれば一瞬で求まります。
            </p>

            <ContentBox type="proposition" title="Proposition 6.2-1 （対角化を用いた行列のべき乗）">
                <p>
                    行列 <InlineMath math="A" /> が正則行列 <InlineMath math="P" /> によって対角化され、<InlineMath math="P^{-1} A P = D" /> であるとする。<br />
                    このとき、任意の自然数 <InlineMath math="k" /> に対して <InlineMath math="A" /> の <InlineMath math="k" /> 乗は以下のように簡単に計算できる。
                </p>
                <BlockMath math="A^k = P D^k P^{-1}" />
                <p>
                    ここで <InlineMath math="D^k" /> は対角行列のべき乗であり、単に各対角成分（固有値）を <InlineMath math="k" /> 乗するだけでよい。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="P^{-1} A P = D" /> の両辺の左から <InlineMath math="P" />、右から <InlineMath math="P^{-1}" /> を掛けると、
                </p>
                <BlockMath math="A = P D P^{-1}" />
                <p>
                    となる。これを用いて <InlineMath math="A" /> の2乗を計算してみる。
                </p>
                <BlockMath math="A^2 = (P D P^{-1}) (P D P^{-1})" />
                <p>
                    行列の積の結合法則より、真ん中の <InlineMath math="P^{-1}" /> と <InlineMath math="P" /> が隣り合って打ち消し合う（<InlineMath math="P^{-1}P = I" />）。
                </p>
                <BlockMath math="A^2 = P D (P^{-1} P) D P^{-1} = P D I D P^{-1} = P D^2 P^{-1}" />
                <p>
                    同様の操作を <InlineMath math="k" /> 回繰り返すと、間の <InlineMath math="P^{-1}P" /> がすべて消滅し、最終的に
                </p>
                <BlockMath math="A^k = \underbrace{(P D P^{-1})(P D P^{-1})\cdots(P D P^{-1})}_{k \text{回}} = P D^k P^{-1}" />
                <p>
                    となる。<br />
                    さらに対角行列の積の性質から、
                </p>
                <BlockMath math="D^k = \begin{pmatrix} \lambda_1 & & 0 \\ & \ddots & \\ 0 & & \lambda_n \end{pmatrix}^k = \begin{pmatrix} \lambda_1^k & & 0 \\ & \ddots & \\ 0 & & \lambda_n^k \end{pmatrix}" />
                <p>
                    となるため、極めて容易に <InlineMath math="n" /> 個の数のべき乗を計算する問題に帰着される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>対角化の手順は、(1)特性方程式を解く、(2)固有ベクトルを求める、(3)それらを並べて <InlineMath math="P" /> を作る、というプロセスの集大成である。</li>
                    <li>対角化 <InlineMath math="A = P D P^{-1}" /> を用いることで、複雑な行列計算 <InlineMath math="A^k" /> を、対角成分を <InlineMath math="k" /> 乗するだけの簡単な計算 <InlineMath math="P D^k P^{-1}" /> に置き換えることができる（Proposition 6.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
