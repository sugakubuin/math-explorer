import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function MatrixFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                行列に対して「2乗（<InlineMath math="A^2" />）」や「逆行列（<InlineMath math="A^{-1}" />）」といった操作が定義できることは既に学びました。<br />
                では、行列の「ルート（<InlineMath math="\sqrt{A}" />）」や、「指数関数（<InlineMath math="e^A" />）」、「サイン・コサイン（<InlineMath math="\sin A, \cos A" />）」といった関数は定義できるのでしょうか？<br />
                <strong>スペクトル分解</strong>の強力な代数構造（射影行列の性質）を用いると、これらが極めて自然かつ美しく定義できるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">射影の驚くべき性質</h2>

            <p>
                スペクトル分解 <InlineMath math="A = \lambda_1 P_1 + \dots + \lambda_k P_k" /> の本質は、各 <InlineMath math="P_i" /> が持つ「互いに混ざらない（<InlineMath math="P_i P_j = O" />）」「何度掛けても変わらない（<InlineMath math="P_i^2 = P_i" />）」という性質にあります。<br />
                試しに、<InlineMath math="A" /> を2乗してみましょう。
            </p>
            <BlockMath math="\begin{aligned} A^2 &= ( \lambda_1 P_1 + \dots + \lambda_k P_k ) ( \lambda_1 P_1 + \dots + \lambda_k P_k ) \\ &= \sum_{i=1}^k \sum_{j=1}^k \lambda_i \lambda_j P_i P_j \end{aligned}" />
            <p>
                ここで、<InlineMath math="i \neq j" /> のクロスタームは <InlineMath math="P_i P_j = O" /> によりすべて消滅します。残るのは <InlineMath math="i=j" /> の項だけであり、さらに <InlineMath math="P_i^2 = P_i" /> です。
                <BlockMath math="= \sum_{i=1}^k \lambda_i^2 P_i^2 = \sum_{i=1}^k \lambda_i^2 P_i = \lambda_1^2 P_1 + \dots + \lambda_k^2 P_k" />
                なんと、<strong>「行列を2乗する」ことは「各固有値をそれぞれ2乗する」ことと完全に一致</strong>しました。全く同じ議論で、自然数 <InlineMath math="m" /> に対するべき乗 <InlineMath math="A^m" /> や、逆行列 <InlineMath math="A^{-1}" />（固有値がすべて非ゼロの場合）も、ただ単に「係数部分をべき乗・逆数にするだけ」で計算できます。
            </p>

            <ContentBox type="definition" title="Definition 13.3-1 （スペクトル分解による行列関数）">
                <p>
                    実対称行列（または正規行列） <InlineMath math="A" /> がスペクトル分解 <InlineMath math="A = \sum_{i=1}^k \lambda_i P_i" /> を持つとする。<br />
                    この行列のすべての固有値 <InlineMath math="\lambda_1, \dots, \lambda_k" /> の上で定義された任意のスカラー関数 <InlineMath math="f(x)" /> に対して、<strong>行列関数 <InlineMath math="f(A)" /></strong> を次のように定義する。
                </p>
                <BlockMath math="f(A) = \sum_{i=1}^k f(\lambda_i) P_i" />
                <p>
                    つまり、関数 <InlineMath math="f" /> の効果を「射影行列 <InlineMath math="P_i" /> はそのまま保ち、各固有空間のスケール因子（固有値）の部分だけに適用する」という定義である。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">行列関数の計算と応用</h2>

            <p>
                この美しい定義により、一見すると計算不可能に思える複雑な行列の関数が、いとも簡単に計算（あるいは定義）できるようになります。いくつか具体的な計算例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 13.3-1 （行列の指数関数 e^A の計算）">
                <p>
                    行列の指数関数 <InlineMath math="e^A" /> は、微分方程式や制御工学において中心的な役割を果たします。定義に従うと、これは次のように計算されます。
                </p>
                <BlockMath math="e^A = e^{\lambda_1} P_1 + e^{\lambda_2} P_2 + \dots + e^{\lambda_k} P_k" />
                <p>
                    例えば、ある <InlineMath math="2 \times 2" /> の行列 <InlineMath math="A" /> が固有値 <InlineMath math="\lambda_1 = 3, \lambda_2 = -1" /> を持ち、対応する射影行列が <InlineMath math="P_1, P_2" /> であったとします。<br />
                    このとき、<InlineMath math="e^A" /> という新しい行列は
                </p>
                <BlockMath math="e^A = e^3 P_1 + e^{-1} P_2" />
                <p>
                    として具体的に成分を計算することができます。<InlineMath math="n \times n" /> の行列であっても、有限個（最大 <InlineMath math="n" /> 個）の行列の足し算に帰着されるため、テイラー展開（無限級数）を計算するよりもはるかに実用的で強力です。
                </p>
            </ContentBox>


            <ContentBox type="remark" title="行列関数の持つ代数構造">
                <p>
                    この定義の素晴らしい点は、もとのスカラー関数 <InlineMath math="f(x), g(x)" /> が持つ関係性が、そのまま行列の世界に引き継がれることです。<br />
                    例えば <InlineMath math="\sin^2 x + \cos^2 x = 1" /> という有名な公式がありますが、行列に対しても
                    <BlockMath math="\sin^2(A) + \cos^2(A) = I" />
                    という「行列のピタゴラスの定理」のような関係が完全に成り立ちます。
                </p>
                <p>
                    これは、射影行列たちが「互いに干渉しない（<InlineMath math="P_i P_j = O" />）ため、それぞれの固有空間の上で独立に関数値を計算して、後から足し合わせることができる」という特性のおかげです。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§13.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>スペクトル分解の直交性（<InlineMath math="P_i P_j = O" />）により、行列の「べき乗」は、単なる「各固有値のべき乗」に分解できる。</li>
                    <li>これを拡張することで、任意の関数 <InlineMath math="f" /> に対する<strong>行列関数</strong>は、<InlineMath math="f(A) = \sum f(\lambda_i) P_i" /> として自然に定義される（Definition 13.3-1）。</li>
                    <li>この手法を用いれば、行列の指数関数（<InlineMath math="e^A" />）や三角関数、平方根といった複雑な操作を、通常のスカラー計算と全く同じ直感で（しかも有限回の計算で）扱うことが可能になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
