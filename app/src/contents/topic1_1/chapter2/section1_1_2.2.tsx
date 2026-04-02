import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function MatrixOperations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                本節では、行列の間で成り立つ計算規則（演算）を定義します。
                数の場合と同様に足し算・引き算・掛け算を考えることができますが、行列特有の性質（特に積の非可換性）には注意が必要です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 和・差・スカラー倍
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">和・差・スカラー倍</h2>

            <p>
                行列の和・差およびスカラー倍（実数倍）は、ベクトルの場合と同様に、対応する成分ごとに計算します。
            </p>

            {/* Definition 2.2-1 */}
            <ContentBox type="definition" title="Definition 2.2-1 （行列の和・差・スカラー倍）">
                <p>
                    <InlineMath math="A = [a_{ij}], B = [b_{ij}]" /> を同じ型の <InlineMath math="m \times n" /> 行列とし、<InlineMath math="k" /> を実数とする。
                </p>
                <ol className="list-decimal list-inside ml-2 space-y-2">
                    <li>
                        <strong>和</strong>（sum）: <InlineMath math="A+B" /> は、各成分が <InlineMath math="a_{ij} + b_{ij}" /> であるような行列。
                        <BlockMath math="A + B = [a_{ij} + b_{ij}]" />
                    </li>
                    <li>
                        <strong>差</strong>（difference）: <InlineMath math="A-B" /> は、各成分が <InlineMath math="a_{ij} - b_{ij}" /> であるような行列。
                        <BlockMath math="A - B = [a_{ij} - b_{ij}]" />
                    </li>
                    <li>
                        <strong>スカラー倍</strong>（scalar multiple）: <InlineMath math="kA" /> は、各成分が <InlineMath math="ka_{ij}" /> であるような行列。
                        <BlockMath math="kA = [k a_{ij}]" />
                    </li>
                </ol>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    ※ 和と差は、2つの行列の型（サイズ）が同じでなければ定義されません。
                </p>
            </ContentBox>

            {/* Example 2.2-1 */}
            <ContentBox type="example" title="Example 2.2-1">
                <p><InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}" /> のとき、次を計算せよ。</p>
                <p>
                    <strong>(1)</strong> <InlineMath math="A + B" /> &nbsp;&nbsp;
                    <strong>(2)</strong> <InlineMath math="3A - 2B" />
                </p>
                <p className="font-bold mt-4">解．</p>
                <p>
                    <strong>(1)</strong>
                </p>
                <BlockMath math="
                    A + B = \begin{pmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{pmatrix} = \begin{pmatrix} 6 & 8 \\ 10 & 12 \end{pmatrix}
                " />
                <p>
                    <strong>(2)</strong>
                </p>
                <BlockMath math="
                    \begin{aligned}
                    3A - 2B &= 3\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} - 2\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} \\
                    &= \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix} - \begin{pmatrix} 10 & 12 \\ 14 & 16 \end{pmatrix} \\
                    &= \begin{pmatrix} 3-10 & 6-12 \\ 9-14 & 12-16 \end{pmatrix} = \begin{pmatrix} -7 & -6 \\ -5 & -4 \end{pmatrix}
                    \end{aligned}
                " />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 行列の積
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">行列の積</h2>

            <p>
                行列の積は少し複雑です。成分同士を単に掛けるのではなく、「行と列の組み合わせ」で定義されます。
                これは連立方程式の代入や線形写像の合成に対応する自然な定義です。
            </p>

            {/* Definition 2.2-2 */}
            <ContentBox type="definition" title="Definition 2.2-2 （行列の積）">
                <p>
                    <InlineMath math="A" /> を <InlineMath math="l \times m" /> 行列、<InlineMath math="B" /> を <strong><InlineMath math="m \times n" /></strong> 行列とする。
                    このとき、積 <InlineMath math="AB" /> は <strong><InlineMath math="l \times n" /></strong> 行列となり、その <InlineMath math="(i, j)" /> 成分 <InlineMath math="c_{ij}" /> は次のように定義される。
                </p>
                <BlockMath math="c_{ij} = \sum_{k=1}^{m} a_{ik} b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{im}b_{mj}" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    つまり、<InlineMath math="AB" /> の <InlineMath math="(i, j)" /> 成分は、「<InlineMath math="A" /> の第 <InlineMath math="i" /> 行ベクトル」と「<InlineMath math="B" /> の第 <InlineMath math="j" /> 列ベクトル」の内積である。
                </p>
            </ContentBox>

            <ContentBox type="note" title="Important （積が定義される条件）">
                <p>
                    行列の積 <InlineMath math="AB" /> が定義されるためには、
                    <strong>「<InlineMath math="A" /> の列数」と「<InlineMath math="B" /> の行数」が一致していなければならない</strong>。
                </p>
                <div className="flex justify-center items-center gap-4 my-4 font-mono text-lg">
                    <div className="border border-slate-300 rounded px-2 py-1 bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
                        <InlineMath math="l \times \mathbf{m}" />
                    </div>
                    <span className="text-slate-400">×</span>
                    <div className="border border-slate-300 rounded px-2 py-1 bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
                        <InlineMath math="\mathbf{m} \times n" />
                    </div>
                    <span>→</span>
                    <div className="border border-blue-300 rounded px-2 py-1 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-700">
                        <InlineMath math="l \times n" />
                    </div>
                </div>
            </ContentBox>

            {/* Example 2.2-2 */}
            <ContentBox type="example" title="Example 2.2-2">
                <p>次の等式を計算せよ。</p>
                <BlockMath math="\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <BlockMath math="
                    \begin{aligned}
                    &\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} \\
                    &= \begin{pmatrix} 1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8 \end{pmatrix} \\
                    &= \begin{pmatrix} 5 + 14 & 6 + 16 \\ 15 + 28 & 18 + 32 \end{pmatrix} \\
                    &= \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}
                    \end{aligned}
                " />
            </ContentBox>

            <h3 className="text-xl font-bold mt-10 mb-4">積の性質と非可換性</h3>

            <p>
                行列の積は結合法則や分配法則を満たしますが、交換法則は一般に成り立ちません。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-1 （積の性質）">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>結合法則</strong>: <InlineMath math="(AB)C = A(BC)" /></li>
                    <li><strong>分配法則</strong>: <InlineMath math="A(B+C) = AB + AC, \quad (A+B)C = AC + BC" /></li>
                    <li><strong>スカラー倍との関係</strong>: <InlineMath math="(kA)B = A(kB) = k(AB)" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof （分配法則の証明）">
                <p>
                    <InlineMath math="A(B+C) = AB + AC" /> を示す。
                    <InlineMath math="A" /> を <InlineMath math="l \times m" />、<InlineMath math="B, C" /> を <InlineMath math="m \times n" /> 行列とする。
                </p>
                <p>
                    <InlineMath math="D = A(B+C)" /> の <InlineMath math="(i, j)" /> 成分 <InlineMath math="d_{ij}" /> は、
                    和の定義より <InlineMath math="(B+C)_{kj} = b_{kj} + c_{kj}" /> であるから、積の定義より
                    <BlockMath math="d_{ij} = \sum_{k=1}^m a_{ik} (b_{kj} + c_{kj})" />
                    となる。実数の分配法則より <InlineMath math="a_{ik}(b_{kj} + c_{kj}) = a_{ik}b_{kj} + a_{ik}c_{kj}" /> なので
                    <BlockMath math="d_{ij} = \sum_{k=1}^m (a_{ik}b_{kj} + a_{ik}c_{kj}) = \sum_{k=1}^m a_{ik}b_{kj} + \sum_{k=1}^m a_{ik}c_{kj}" />
                    これは <InlineMath math="AB" /> の <InlineMath math="(i, j)" /> 成分と <InlineMath math="AC" /> の <InlineMath math="(i, j)" /> 成分の和に等しい。
                    すなわち <InlineMath math="A(B+C) = AB + AC" /> が成り立つ。（結合法則も同様に成分計算で示せるが、計算が長くなるため省略する）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="Caution （非可換性）">
                <p>
                    一般に、行列の積は<strong>交換法則が成り立たない</strong>。すなわち、
                    <BlockMath math="AB \neq BA" />
                    である場合が多い。そもそも <InlineMath math="AB" /> が定義されても <InlineMath math="BA" /> が定義されるとは限らない。
                </p>
            </ContentBox>

            <p>
                以下に、交換法則が成り立たない具体的な例を挙げます。
                「<InlineMath math="AB" /> と <InlineMath math="BA" /> が共に計算できて、かつサイズも同じ」という状況であっても、値が一致するとは限りません。
            </p>

            {/* Example 2.2-3 */}
            <ContentBox type="example" title="Example 2.2-3 （積の非可換性）">
                <p>
                    <InlineMath math="A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}" /> のとき、<InlineMath math="AB" /> と <InlineMath math="BA" /> を計算せよ。
                </p>
                <p className="font-bold mt-4">解．</p>
                <BlockMath math="AB = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}" />
                <BlockMath math="BA = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}" />
                <p>したがって <InlineMath math="AB \neq BA" /> である。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>和・差・スカラー倍</strong>: 成分ごとに計算する。</li>
                    <li><strong>積</strong>: <InlineMath math="l \times m" /> 行列と <InlineMath math="m \times n" /> 行列の積は <InlineMath math="l \times n" /> 行列になる。</li>
                    <li><strong>成分計算</strong>: 左の行列の行と右の行列の列の内積。</li>
                    <li><strong>非可換</strong>: 一般に <InlineMath math="AB \neq BA" />。順序に注意が必要。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
