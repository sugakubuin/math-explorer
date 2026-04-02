import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DeterminantProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                行列式には、計算を劇的に簡単にするいくつかの重要な性質があります。
                これらの性質（特に多重線形性と交代性）は行列式の定義そのものとも言える重要な要素です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 行列式の性質
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">行列式の基本的な性質</h2>

            {/* Theorem 4.4-1 */}
            <ContentBox type="theorem" title="Theorem 4.4-1 （転置行列の行列式）">
                <p>
                    行列を転置しても、行列式の値は変わらない。
                </p>
                <BlockMath math="\det({}^t A) = \det(A)" />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    これにより、以下で述べる「行」に関する性質はすべて「列」に関しても成り立ちます。
                </p>
            </ContentBox>

            <p className="mt-8">
                次に、行列式が持つ最も基本的な性質である「多重線形性」と「交代性」について見ていきましょう。
                少し難しそうな言葉ですが、計算上は「定数を外に出せる」「行を分解できる」「入れ替えると符号が変わる」という直感的な操作に対応します。
            </p>

            {/* Theorem 4.4-2 */}
            <ContentBox type="theorem" title="Theorem 4.4-2 （多重線形性と交代性）">
                <p>行列式は行（または列）に関して以下の性質を持つ。（以下の例は2×2行列の場合だが、一般のn×n行列でも同様。）</p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <strong>定数倍</strong>: ある行を <InlineMath math="c" /> 倍すると、行列式も <InlineMath math="c" /> 倍になる。
                        <BlockMath math="\begin{vmatrix} c a_1 & c a_2 \\ b_1 & b_2 \end{vmatrix} = c \begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix}" />
                    </li>
                    <li>
                        <strong>和の分解</strong>: ある行が和の形で書かれているとき、行列式の和に分解できる。
                        <BlockMath math="\begin{vmatrix} a_1+a'_1 & a_2+a'_2 \\ b_1 & b_2 \end{vmatrix} = \begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix} + \begin{vmatrix} a'_1 & a'_2 \\ b_1 & b_2 \end{vmatrix}" />
                    </li>
                    <li>
                        <strong>交代性</strong>: 2つの行を入れ替えると、行列式の符号は反転する。
                        <BlockMath math="\begin{vmatrix} a & b \\ c & d \end{vmatrix} = - \begin{vmatrix} c & d \\ a & b \end{vmatrix}" />
                    </li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                特に、交代性から導かれる次の性質は重要です。
            </p>

            <ContentBox type="note" title="Important （同じ行がある場合）">
                <p>
                    交代性より、もし<strong>2つの行が同じ</strong>であれば、入れ替えても行列は変わらないのに行列式の符号は反転しなければなりません（<InlineMath math="|A| = -|A|" />）。
                    したがって、<InlineMath math="|A| = 0" /> となります。
                </p>
                <BlockMath math="\begin{vmatrix} a & b \\ a & b \end{vmatrix} = 0" />
            </ContentBox>

            {/* ──────────────────────────────
                 対角行列・三角行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">対角行列・三角行列</h2>

            <p>
                行列式の計算において、目指すべき「ゴール」とも言えるのが対角行列や三角行列です。
                これらの行列の行列式は計算が非常に簡単だからです。
            </p>

            {/* Definition 4.4-1 */}
            <ContentBox type="definition" title="Definition 4.4-1 （対角行列・三角行列）">
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <strong>対角行列</strong> (diagonal matrix): 対角成分以外の成分がすべて <InlineMath math="0" /> である行列。
                    </li>
                    <li>
                        <strong>上三角行列</strong> (upper triangular matrix): 対角成分より下の成分がすべて <InlineMath math="0" /> である行列。
                    </li>
                    <li>
                        <strong>下三角行列</strong> (lower triangular matrix): 対角成分より上の成分がすべて <InlineMath math="0" /> である行列。
                    </li>
                </ul>
            </ContentBox>

            {/* Theorem 4.4-3 */}
            <ContentBox type="theorem" title="Theorem 4.4-3 （三角行列の行列式）">
                <p>
                    対角行列、上三角行列、下三角行列の行列式は、その対角成分の積に等しい。
                </p>
                <BlockMath math="\det(A) = a_{11} a_{22} \dots a_{nn}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    第1列について余因子展開をする。<InlineMath math="a_{21} = \dots = a_{n1} = 0" /> なので、
                    <InlineMath math="\det(A) = a_{11} C_{11}" /> となる。
                    <InlineMath math="C_{11}" /> は <InlineMath math="(n-1) \times (n-1)" /> の三角行列の行列式になる。
                    これを繰り返すと、<InlineMath math="a_{11} a_{22} \dots a_{nn}" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <p className="mt-8">
                最後に、行列の積に関する性質を紹介します。
                これは「積の行列式は行列式の積」という非常に美しい関係です。
            </p>

            {/* Theorem 4.4-4 */}
            <ContentBox type="theorem" title="Theorem 4.4-4 （行列の積と行列式）">
                <p>
                    積の行列式は、行列式の積に等しい。
                </p>
                <BlockMath math="\det(AB) = \det(A) \det(B)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof Outline">
                <p>
                    <InlineMath math="\det(A) \neq 0" /> の場合、<InlineMath math="A" /> は基本行列の積で表せる。
                    基本行列 <InlineMath math="E" /> について <InlineMath math="\det(EB) = \det(E)\det(B)" /> が成り立つことを行基本変形に対応させて確認できる。
                    <InlineMath math="\det(A) = 0" /> の場合は <InlineMath math="\det(AB) = 0" /> となり両辺とも0になる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* Example 4.4-1 */}
            <ContentBox type="example" title="Example 4.4-1 （性質を利用した計算）">
                <p>次の行列式を工夫して計算せよ。</p>
                <BlockMath math="A = \begin{pmatrix} 2024 & 2025 & 2026 \\ 2025 & 2026 & 2027 \\ 1 & 2 & 3 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    そのまま展開すると計算が大変だが、行基本変形（ある行に他の行の定数倍を加えても行列式は変わらない）を利用する。
                    <br />
                    第2行から第1行を引く：
                </p>
                <BlockMath math="|A| = \begin{vmatrix} 2024 & 2025 & 2026 \\ 1 & 1 & 1 \\ 1 & 2 & 3 \end{vmatrix}" />
                <p>
                    さらに、第1行から第3行の2000倍などを引いて数字を小さくしてもよいが、ここで第3行から第2行を引くと：
                </p>
                <BlockMath math="|A| = \begin{vmatrix} 2024 & 2025 & 2026 \\ 1 & 1 & 1 \\ 0 & 1 & 2 \end{vmatrix}" />
                <p>
                    ここで余因子展開などを用いてもよいが、さらに第1行から（第2行 <InlineMath math="\times" /> 2024）を引くと：
                </p>
                <BlockMath math="|A| = \begin{vmatrix} 0 & 1 & 2 \\ 1 & 1 & 1 \\ 0 & 1 & 2 \end{vmatrix}" />
                <p>
                    第1行と第3行が同じになったので、行列式は <InlineMath math="0" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>転置</strong>: <InlineMath math="\det({}^t A) = \det(A)" />。行と列は対等。</li>
                    <li><strong>交代性</strong>: 行（列）を入れ替えると符号反転。</li>
                    <li><strong>積</strong>: <InlineMath math="\det(AB) = \det(A)\det(B)" />。</li>
                    <li><strong>行基本変形の利用</strong>: ある行に他行の定数倍を加えても行列式は不変。これを使って成分を0にしてから展開するのが定石。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
