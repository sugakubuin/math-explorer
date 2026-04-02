import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MatrixExponentialViaJordanNormalForm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                行列指数関数 <InlineMath math={'e^{tA}'} /> を定義に基づいて計算するのは、一部の特殊な行列（対角行列など）を除いて非常に困難です。
                しかし、線形代数学における「ジョルダン標準形」を利用することで、任意の正方行列に対して <InlineMath math={'e^{tA}'} /> を一般的に計算する道が開けます。
                本節では、ジョルダン細胞の指数関数とその一般化について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ジョルダン細胞の指数関数</h2>

            <p>
                行列は常にジョルダン標準形に変換可能です。まずは、ジョルダン標準形の基本単位である「ジョルダン細胞」に対する指数関数を求めます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-1 (ジョルダン細胞の指数関数)">
                <p>
                    次数 <InlineMath math="k" /> のジョルダン細胞 <InlineMath math="J = \lambda I + N" /> （ここで <InlineMath math="N" /> は上三角に 1 が並ぶべき零行列）に対して、次の式が成り立つ。
                    <BlockMath math="e^{tJ} = e^{\lambda t} e^{tN} = e^{\lambda t} \sum_{m=0}^{k-1} \frac{t^m}{m!} N^m" />
                    これを成分で書き下すと、対角成分に <InlineMath math="e^{\lambda t}" /> が並び、その右上に <InlineMath math="t e^{\lambda t}" />, <InlineMath math="\frac{t^2}{2!} e^{\lambda t}" /> と続く上三角行列になる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    行列 <InlineMath math="\lambda I" /> と <InlineMath math="N" /> は明らかに可換（<InlineMath math="(\lambda I)N = \lambda N = N(\lambda I)" />）である。
                    したがって、指数法則（Proposition 2.1-1(iii)）により
                    <BlockMath math="e^{tJ} = e^{t(\lambda I + N)} = e^{t\lambda I} e^{tN} = (e^{\lambda t} I) e^{tN} = e^{\lambda t} e^{tN}" />
                    <InlineMath math="N^k = 0" /> であることから、<InlineMath math="e^{tN}" /> の無限級数は第 <InlineMath math="k" /> 項以降がすべて零行列となり、有限和として計算できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                最も頻出する <InlineMath math="2 \times 2" /> の例を確認しておきましょう。
            </p>

            <ContentBox type="example" title="Example 2.2-1 (2 × 2 ジョルダン細胞の例)">
                <p>
                    <InlineMath math="J = \begin{pmatrix} \lambda & 1 \\ 0 & \lambda \end{pmatrix}" /> のとき、<InlineMath math="N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}" /> であり、<InlineMath math="N^2 = 0" /> である。
                    よって、
                    <BlockMath math="\begin{aligned} e^{tJ} &= e^{\lambda t} (I + tN) \\ &= e^{\lambda t} \left( \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + \begin{pmatrix} 0 & t \\ 0 & 0 \end{pmatrix} \right) \\ &= \begin{pmatrix} e^{\lambda t} & t e^{\lambda t} \\ 0 & e^{\lambda t} \end{pmatrix} \end{aligned}" />
                    となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般行列への拡張と計算手順</h2>

            <p>
                ジョルダン細胞の結果を、行列の相似変換を用いて一般の正方行列へと拡張します。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-2 (ジョルダン分解による計算)">
                <p>
                    任意の正方行列 <InlineMath math="A" /> が、正則行列 <InlineMath math="P" /> を用いてジョルダン標準形 <InlineMath math="J" /> に相似変換される、すなわち <InlineMath math="A = P J P^{-1}" /> と書けるとすると。
                    このとき、行列指数関数は次のようになる。
                    <BlockMath math="e^{tA} = P e^{tJ} P^{-1}" />
                    ここで <InlineMath math="e^{tJ}" /> は、各ジョルダン細胞の指数関数を対角線上に並べたブロック対角行列である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    行列のべき乗について、<InlineMath math="A^k = (P J P^{-1})^k = P J^k P^{-1}" /> が成立する。
                    これを定義の級数に代入すると、
                    <BlockMath math="\begin{aligned} e^{tA} &= \sum_{k=0}^\infty \frac{t^k (P J P^{-1})^k}{k!} \\ &= P \left( \sum_{k=0}^\infty \frac{t^k J^k}{k!} \right) P^{-1} = P e^{tJ} P^{-1} \end{aligned}" />
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体的に、固有値が重複しているケースを計算してみます。
            </p>

            <ContentBox type="example" title="Example 2.2-2 (具体的な計算例)">
                <p>
                    行列 <InlineMath math="A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}" /> の指数関数を求める。
                    この行列自体がすでにジョルダン細胞 <InlineMath math="J" /> そのものの形を配している（<InlineMath math="\lambda = 3" />）。
                    よって、Example 2.2-1 の結果から直ちに
                    <BlockMath math="e^{tA} = e^{3t} \begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} e^{3t} & t e^{3t} \\ 0 & e^{3t} \end{pmatrix}" />
                    が得られる。
                </p>
            </ContentBox>

            <p>
                この結果に含まれる <InlineMath math="t" /> の項は、物理的な安定性解析において非常に重要な意味を持ちます。
            </p>

            <ContentBox type="remark" title="重複固有値と多項式増大">
                <p>
                    行列が対角化可能でない（ジョルダン細胞が現れる）場合、解の成分に単なる指数関数 <InlineMath math="e^{\lambda t}" /> だけでなく、<InlineMath math="t e^{\lambda t}" /> や <InlineMath math="t^2 e^{\lambda t}" /> といった多項式を掛けた項が現れます。
                    これは「代数的重複度が幾何的重複度よりも大きい」ときに起こる現象です。
                    長時間挙動としては、<InlineMath math="\mathrm{Re}(\lambda) = 0" /> の場合でも、多項式の増大により解が発散する可能性があるという点で注意を要します。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ジョルダン細胞の指数</b>：<InlineMath math="e^{\lambda t}" /> に多項式成分が加わる。</li>
                    <li><b>相似変換の利用</b>：<InlineMath math="e^{tA} = P e^{tJ} P^{-1}" /> により、代数的計算が対角ブロックの計算に帰着する。</li>
                    <li><b>計算手順</b>：固有値を求め、ジョルダン標準形に変換し、各細胞ごとに指数を計算して元に戻す。</li>
                    <li><b>多項式項の出現</b>：非対角化可能な行列では、解に <InlineMath math="t" /> のべき乗が含まれ、挙動に影響を与える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
