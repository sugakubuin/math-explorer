import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function EigenIntro() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                行列はあるベクトルを別のベクトルに変換（線形変換）する働きを持ちます。
                一般に、行列 <InlineMath math="A" /> をベクトル <InlineMath math="\mathbf{x}" /> に掛けると、
                <InlineMath math="\mathbf{x}" /> は向きも長さも変わってしまいます。
            </p>
            <p className="mt-2">
                しかし、中には「向きが変わらず、長さだけが <InlineMath math="\lambda" /> 倍になる」ような特別なベクトルが存在することがあります。
                それが「固有ベクトル」であり、その倍率 <InlineMath math="\lambda" /> が「固有値」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">固有値・固有ベクトルの定義</h2>

            {/* Definition 6.1-1 */}
            <ContentBox type="definition" title="Definition 6.1-1 （固有値・固有ベクトル）">
                <p>
                    <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> に対して、
                    <InlineMath math="\mathbf{0}" /> でないベクトル <InlineMath math="\mathbf{x}" /> とスカラー <InlineMath math="\lambda" /> が存在して、
                </p>
                <BlockMath math="A\mathbf{x} = \lambda \mathbf{x}" />
                <p>
                    を満たすとき、<InlineMath math="\lambda" /> を <InlineMath math="A" /> の<strong>固有値</strong>（eigenvalue）、
                    <InlineMath math="\mathbf{x}" /> を <InlineMath math="\lambda" /> に対する<strong>固有ベクトル</strong>（eigenvector）という。
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    注意: <InlineMath math="\mathbf{x} = \mathbf{0}" /> は定義より除外されます（<InlineMath math="A\mathbf{0} = \lambda \mathbf{0}" /> は常に成り立ってしまうため）。
                    一方、固有値 <InlineMath math="\lambda" /> が <InlineMath math="0" /> になることはあり得ます。
                </p>
            </ContentBox>

            {/* Example 6.1-1 */}
            <ContentBox type="example" title="Example 6.1-1 （幾何学的意味）">
                <p>
                    次の行列 <InlineMath math="A" /> とベクトル <InlineMath math="\mathbf{x}" /> について考える。
                </p>
                <BlockMath math="A = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}, \quad \mathbf{x} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}" />
                <p>
                    <InlineMath math="A" /> を <InlineMath math="\mathbf{x}" /> に掛けると、
                </p>
                <BlockMath math="A\mathbf{x} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \end{pmatrix} = 3 \begin{pmatrix} 1 \\ 0 \end{pmatrix} = 3\mathbf{x}" />
                <p>
                    となり、<InlineMath math="\mathbf{x}" /> は向きを変えずに長さが3倍になっています。
                    よって、<InlineMath math="\lambda = 3" /> は固有値であり、<InlineMath math="\mathbf{x} = {}^t(1, 0)" /> はその固有ベクトルです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="Note">
                <p>
                    固有ベクトルは一つではありません。
                    例えば上の例では <InlineMath math="\mathbf{x}' = {}^t(2, 0)" /> も <InlineMath math="A\mathbf{x}' = 3\mathbf{x}'" /> を満たすため、固有値3に対する固有ベクトルです。
                    一般に、固有ベクトル <InlineMath math="\mathbf{x}" /> の定数倍 <InlineMath math="c\mathbf{x} (c \neq 0)" /> もまた固有ベクトルです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>固有値・固有ベクトル</strong>: 行列の作用によって「向きが変わらず、大きさだけが <InlineMath math="\lambda" /> 倍になる」ベクトルとその倍率。</li>
                    <li>定義式: <InlineMath math="A\mathbf{x} = \lambda \mathbf{x} \quad (\mathbf{x} \neq \mathbf{0})" />。</li>
                    <li>線形変換の性質を理解する上で最も重要な概念の一つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
