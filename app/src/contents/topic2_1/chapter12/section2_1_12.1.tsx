import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function QuadraticFormsDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 11 で学んだ「実対称行列の固有値はすべて実数であり、直交行列によって対角化可能である（スペクトル定理）」という驚異的な事実は、線形代数学の応用において最も強力な武器の一つとなります。<br />
                本章では、その最大の応用先である<strong>二次形式（Quadratic Forms）</strong>の理論と、それがどのように「標準化（視点の最適化）」されるのかを学んでいきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">二次形式の定義</h2>

            <p>
                「二次形式」とは、その名の通り「すべての項の次数がちょうど <InlineMath math="2" /> である多項式」のことです。
            </p>

            <ContentBox type="definition" title="Definition 12.1-1 （二次形式）">
                <p>
                    <InlineMath math="n" /> 個の変数 <InlineMath math="x_1, x_2, \dots, x_n" /> を持つ多項式 <InlineMath math="q(x_1, \dots, x_n)" /> が、すべての項において「変数の次数の和が <InlineMath math="2" /> になる」とき、これを<strong>二次形式（Quadratic Form）</strong>と呼ぶ。
                </p>
                <p>
                    具体的には、次のような形で表される同次多項式を指す。
                </p>
                <BlockMath math="q(x_1, \dots, x_n) = \sum_{i=1}^n \sum_{j=1}^n c_{ij} x_i x_j" />
            </ContentBox>

            <ContentBox type="example" title="二次形式の例と非例">
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>二次形式である例（<InlineMath math="n=2" />）：</strong> <InlineMath math="q(x, y) = 3x^2 - 5xy + 2y^2" />（すべての項の次数が2）</li>
                    <li><strong>二次形式である例（<InlineMath math="n=3" />）：</strong> <InlineMath math="q(x, y, z) = x^2 + y^2 - z^2 + 4xy - 2yz" /></li>
                    <li><strong>二次形式ではない例：</strong> <InlineMath math="q(x, y) = x^2 + 3xy + \mathbf{4x}" />（1次の項が含まれているため同次ではない）</li>
                </ul>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">行列表現</h2>

            <p>
                二次形式は、単なる多項式として扱うよりも、**行列とベクトルを用いた「内積の形（双線形形式の特殊な形）」**として表現することで、その真の構造を明らかにすることができます。<br />
                そして、その際に登場するのが<strong>「対称行列」</strong>です。
            </p>

            <ContentBox type="theorem" title="Proposition 12.1-1 （任意の二次形式は対称行列で表現できる）">
                <p>
                    任意の二次形式 <InlineMath math="q(\boldsymbol{x}) = q(x_1, \dots, x_n)" /> は、ある <InlineMath math="n \times n" /> の<strong>実対称行列 <InlineMath math="A" /></strong> を用いて、次のようなベクトルと行列の積（または内積）として<strong>一意に</strong>表すことができる。
                </p>
                <BlockMath math="q(\boldsymbol{x}) = \boldsymbol{x}^T A \boldsymbol{x} = \langle \boldsymbol{x}, A\boldsymbol{x} \rangle" />
                <p>
                    ここで、<InlineMath math="\boldsymbol{x} = (x_1, \dots, x_n)^T" /> は変数を並べた列ベクトルである。<br />
                    また、行列 <InlineMath math="A = (a_{ij})" /> の各成分は、多項式の係数 <InlineMath math="c_{ij}" /> から次のように決定される。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>対角成分（<InlineMath math="i = j" />）： <InlineMath math="a_{ii} = c_{ii}" /> （<InlineMath math="x_i^2" /> の係数にそのまま対応）</li>
                    <li>非対角成分（<InlineMath math="i \neq j" />）： <InlineMath math="a_{ij} = a_{ji} = \frac{1}{2} c_{ij}" /> （<InlineMath math="x_i x_j" /> の係数を半分ずつに分ける）</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    実際に <InlineMath math="\boldsymbol{x}^T A \boldsymbol{x}" /> を展開して、元の多項式になることを確認する。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>
                        <InlineMath math="\boldsymbol{x} = (x_1, \dots, x_n)^T" />、<InlineMath math="A = (a_{ij})" /> に対して <InlineMath math="\boldsymbol{x}^T A \boldsymbol{x}" /> を計算する。
                        <BlockMath math="\boldsymbol{x}^T A \boldsymbol{x} = \sum_{i=1}^n x_i \left( \sum_{j=1}^n a_{ij} x_j \right) = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j" />
                    </li>
                    <li>
                        ここで、<InlineMath math="A" /> は対称行列（<InlineMath math="a_{ij} = a_{ji}" />）であるとする。上の式を対角成分（<InlineMath math="i=j" />）と非対角成分（<InlineMath math="i \neq j" />）に分ける。
                        <BlockMath math="\sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j = \sum_{i=1}^n a_{ii} x_i^2 + \sum_{i \neq j} a_{ij} x_i x_j" />
                    </li>
                    <li>
                        非対角成分の和において、<InlineMath math="i < j" /> の項と <InlineMath math="i > j" /> の項をまとめる。<InlineMath math="x_i x_j = x_j x_i" /> であり、<InlineMath math="a_{ij} = a_{ji}" /> であるため、同じ係数が2つ現れる。
                        <BlockMath math="\begin{aligned} \sum_{i=1}^n a_{ii} x_i^2 + \sum_{i \neq j} a_{ij} x_i x_j &= \sum_{i=1}^n a_{ii} x_i^2 + \sum_{i < j} (a_{ij} + a_{ji}) x_i x_j \\ &= \sum_{i=1}^n a_{ii} x_i^2 + \sum_{i < j} 2a_{ij} x_i x_j \end{aligned}" />
                    </li>
                    <li>
                        これが元の二次形式の係数 <InlineMath math="c_{ii} x_i^2 + c_{ij} x_i x_j" /> （ただし <InlineMath math="i < j" />）と一致すればよい。<br />
                        したがって、<InlineMath math="a_{ii} = c_{ii}" /> とし、<InlineMath math="2a_{ij} = c_{ij} \implies a_{ij} = \frac{1}{2} c_{ij}" /> とすれば、元の二次形式を完全に対称行列 <InlineMath math="A" /> によって表現できたことになる。

                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="二次形式の行列表現の作成">
                <p>
                    二次形式 <InlineMath math="q(x, y) = 3x^2 - 10xy + 7y^2" /> を行列表現してみる。
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li><InlineMath math="x^2" /> の係数は <InlineMath math="3" /> なので、<InlineMath math="(1, 1)" /> 成分（左上）は <InlineMath math="3" /></li>
                    <li><InlineMath math="y^2" /> の係数は <InlineMath math="7" /> なので、<InlineMath math="(2, 2)" /> 成分（右下）は <InlineMath math="7" /></li>
                    <li><InlineMath math="xy" /> の係数は <InlineMath math="-10" /> なので、これを半分（<InlineMath math="-5" />）にして対角を挟んで <InlineMath math="(1, 2)" /> と <InlineMath math="(2, 1)" /> に配置する。</li>
                </ul>
                <p className="mt-2">
                    結果として、対応する対称行列 <InlineMath math="A" /> は以下となる。
                </p>
                <BlockMath math="A = \begin{pmatrix} 3 & -5 \\ -5 & 7 \end{pmatrix}" />
                <p>
                    これを用いると、<InlineMath math="q(x, y) = \begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} 3 & -5 \\ -5 & 7 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}" /> と美しく書ける。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§12.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>二次形式</strong>とは、すべての項の次数が2である多項式のことである（Definition 12.1-1）。</li>
                    <li>いかなる二次形式も、ベクトルと<strong>対称行列</strong>を用いた <InlineMath math="\boldsymbol{x}^T A \boldsymbol{x}" /> の形に一意に表すことができる（Proposition 12.1-1）。</li>
                    <li>この「対称行列で書ける」という事実が、Chapter 11の「スペクトル定理（対称行列は直交対角化可能）」を二次形式の分析に直接適用できる橋渡しとなる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
