import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function CharacteristicPolynomial() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で固有値と固有ベクトルの意味を学びましたが、具体的にある行列 <InlineMath math="A" /> が与えられたとき、その固有値や固有ベクトルをどうやって見つければよいのでしょうか。<br />
                そのための鍵となるのが「行列式」と「多項式」を組み合わせた<strong>特性多項式（Characteristic Polynomial）</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固有値と特性方程式の関係</h2>

            <p>
                固有値の定義式 <InlineMath math="A\boldsymbol{v} = \lambda \boldsymbol{v}" /> を少し変形してみましょう。単位行列を <InlineMath math="I" /> とすると、<InlineMath math="\lambda \boldsymbol{v} = (\lambda I)\boldsymbol{v}" /> と書けるため、
            </p>
            <BlockMath math="A\boldsymbol{v} - \lambda I \boldsymbol{v} = \boldsymbol{0} \quad \Rightarrow \quad (A - \lambda I)\boldsymbol{v} = \boldsymbol{0}" />
            <p>
                という単一の連立一次方程式にまとめることができます。<br />
                この方程式が <InlineMath math="\boldsymbol{v} \neq \boldsymbol{0}" /> という「自明でない解」を持つための条件を考えることで、次の極めて重要な定理が導かれます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 （固有値の必要十分条件）">
                <p>
                    スカラー <InlineMath math="\lambda" /> が <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> の固有値であるための必要十分条件は、以下の等式（特性方程式）が成り立つことである。
                </p>
                <BlockMath math="\det(A - \lambda I) = 0" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\lambda" /> が行列 <InlineMath math="A" /> の固有値であるとする。<br />
                    定義により、<InlineMath math="A\boldsymbol{v} = \lambda \boldsymbol{v}" /> を満たす自明でないベクトル（<InlineMath math="\boldsymbol{v} \neq \boldsymbol{0}" />）が存在する。<br />
                    これを変形すると <InlineMath math="(A - \lambda I)\boldsymbol{v} = \boldsymbol{0}" /> となる。
                </p>
                <p>
                    この式は、行列 <InlineMath math="(A - \lambda I)" /> を係数行列とする同次連立一次方程式である。<br />
                    この方程式が <InlineMath math="\boldsymbol{v} \neq \boldsymbol{0}" /> という自明でない解を持つための必要十分条件は、係数行列 <InlineMath math="(A - \lambda I)" /> が逆行列を持たないこと（正則でないこと）である。
                </p>
                <p>
                    行列が正則でないための必要十分条件は、その行列式が <InlineMath math="0" /> になることであるため、
                </p>
                <BlockMath math="\det(A - \lambda I) = 0" />
                <p>
                    が成り立つ。<br />
                    逆に、この式が成り立てば係数行列は正則でないため、<InlineMath math="(A - \lambda I)\boldsymbol{v} = \boldsymbol{0}" /> となる <InlineMath math="\boldsymbol{v} \neq \boldsymbol{0}" /> が必ず存在し、それが固有ベクトルとなって <InlineMath math="\lambda" /> は固有値となる。したがって必要十分である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特性多項式</h2>

            <p>
                Theorem 5.2-1 の左辺に現れる式を、<InlineMath math="\lambda" /> を変数 <InlineMath math="t" /> に置き換えて多項式として捉え直したものを<strong>特性多項式</strong>と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 （特性多項式・特性方程式 / Characteristic Polynomial）">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> に対し、<InlineMath math="t" /> を変数とする多項式
                </p>
                <BlockMath math="\Phi_A(t) = \det(tI - A)" />
                <p>
                    または
                </p>
                <BlockMath math="P_A(t) = \det(A - tI)" />
                <p>
                    を、行列 <InlineMath math="A" /> の<strong>特性多項式（固有多項式）</strong>と呼ぶ。文献によって <InlineMath math="tI - A" /> と <InlineMath math="A - tI" /> のどちらを採用するか異なるが、これらは最大で <InlineMath math="(-1)^n" /> の符号の違いしかなく、根（<InlineMath math="=0" /> となる <InlineMath math="t" /> の値）は完全に一致する。
                </p>
                <p className="mt-2">
                    また、これを <InlineMath math="0" /> とおいた方程式 <InlineMath math="\det(A - tI) = 0" /> を <InlineMath math="A" /> の<strong>特性方程式（固有方程式）</strong>と呼ぶ。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特性多項式の次数</h2>

            <ContentBox type="proposition" title="Proposition 5.2-1 （特性多項式の次数と係数）">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> の特性多項式 <InlineMath math="\Phi_A(t) = \det(tI - A)" /> は、変数 <InlineMath math="t" /> についての<strong>ちょうど <InlineMath math="n" /> 次の多項式</strong>になり、その形は以下のようになる。
                </p>
                <BlockMath math="\Phi_A(t) = t^n - (\mathrm{tr}\, A)t^{n-1} + \dots + (-1)^n \det(A)" />
                <p>
                    （ここで <InlineMath math="\mathrm{tr}\, A" /> は行列の対角成分の和である「トレース（Trace）」を表す）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="tI - A" /> の成分を具体的に書き下すと、次のような行列式を計算することになる。
                </p>
                <BlockMath math="\det \begin{pmatrix} t - a_{11} & -a_{12} & \dots & -a_{1n} \\ -a_{21} & t - a_{22} & \dots & -a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ -a_{n1} & -a_{n2} & \dots & t - a_{nn} \end{pmatrix}" />
                <p>
                    行列式の定義（置換を用いた和）を思い出すと、各項は各行・各列から1つずつ要素を選んで掛け合わせたものになる。<br />
                    <InlineMath math="t" /> が最大になる項は、主対角線の要素をすべて掛け合わせた場合である。
                </p>
                <BlockMath math="(t - a_{11})(t - a_{22})\cdots(t - a_{nn})" />
                <p>
                    これを展開すると、最高次数の項は明らかに <InlineMath math="t^n" /> である。<br />
                    また、<InlineMath math="t^{n-1}" /> の係数は、主対角線の因数から一つだけ定数項（<InlineMath math="-a_{ii}" />）を選び、残る <InlineMath math="n-1" /> 個の因子から <InlineMath math="t" /> を選んだものの総和になるため、その和は <InlineMath math="-(a_{11} + a_{22} + \dots + a_{nn}) = -\mathrm{tr}\, A" /> となる。
                </p>
                <p>
                    最後に定数項（<InlineMath math="t=0" /> の場合）を考えると、<InlineMath math="\Phi_A(0) = \det(0I - A) = \det(-A) = (-1)^n \det(A)" /> となることが直ちにわかる。<br />
                    以上より、特性多項式は <InlineMath math="n" /> 次の多項式である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="代数学の基本定理からの帰結">
                <p>
                    特性多項式が「実数または複素数を係数とする <InlineMath math="n" /> 次多項式」になるということは、<strong>代数学の基本定理</strong>より、複素数の範囲で考えれば（重解を込めて）<strong>必ず <InlineMath math="n" /> 個の根を持つ</strong>という極めて強力な事実を導きます。
                </p>
                <p>
                    すなわち、複素数を許せば <InlineMath math="n \times n" /> 行列は「必ず <InlineMath math="n" /> 個の固有値を持つ」ということが保証されるのです。（次節で詳しく見ます）
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\lambda" /> が固有値であるための条件は方程式 <InlineMath math="A\boldsymbol{v} = \lambda \boldsymbol{v}" /> が自明でない解を持つことであり、それは係数行列が正則でないことと同値である（Theorem 5.2-1）。</li>
                    <li>このことから方程式 <InlineMath math="\det(A - \lambda I) = 0" />（<strong>特性方程式</strong>）が導かれる（Definition 5.2-1）。固有値は特性方程式の根として計算できる。</li>
                    <li><InlineMath math="n \times n" /> 行列の特性方程式は <InlineMath math="n" /> 次方程式になり、固有値は重解を含めて複素数の範囲に必ず <InlineMath math="n" /> 個存在する（Proposition 5.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
