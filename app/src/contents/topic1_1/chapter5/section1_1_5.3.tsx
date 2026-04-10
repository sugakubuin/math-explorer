import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function GaussianEliminationInverse() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                行列のサイズが大きくなると、余因子行列を使った計算は非常に手間がかかります。
                そこで、Chapter 3 で学んだ「掃き出し法（Gaussian Elimination）」を使って、効率的に逆行列を求める方法を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 掃き出し法による逆行列の計算
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">掃き出し法による逆行列の計算</h2>

            {/* Proposition 5.3-1 */}
            <ContentBox type="proposition" title="Proposition 5.3-1 （掃き出し法の手順）">
                <p>
                    <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> の右側に単位行列 <InlineMath math="I" /> を並べた
                    <InlineMath math="n \times 2n" /> の拡大行列 <InlineMath math="[A | I]" /> を作る。
                </p>
                <p className="mt-2">
                    この拡大行列に行基本変形を行い、左側の <InlineMath math="A" /> を単位行列 <InlineMath math="I" /> に変形する。
                    <BlockMath math="[A | I] \xrightarrow{\text{row operations}} [I | B]" />
                </p>
                <p>
                    このとき、右側に現れた行列 <InlineMath math="B" /> が求める逆行列 <InlineMath math="A^{-1}" /> である。
                </p>
            </ContentBox>

            <ContentBox type="note" title="Why it works?">
                <p>
                    行基本変形を行うことは、左からある正則行列（基本行列の積）<InlineMath math="P" /> を掛けることと同じです。
                    <InlineMath math="P [A | I] = [PA | PI] = [I | B]" /> となったとすると、
                    <InlineMath math="PA = I" /> より <InlineMath math="P = A^{-1}" /> です。
                    よって、右側のブロックは <InlineMath math="PI = A^{-1}I = A^{-1}" /> となります。
                </p>
            </ContentBox>

            {/* Example 5.3-1 */}
            <ContentBox type="example" title="Example 5.3-1">
                <p>次の行列の逆行列を掃き出し法で求めよ。</p>
                <BlockMath math="A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 5 & 3 \\ 1 & 0 & 8 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    拡大行列 <InlineMath math="[A | I]" /> を作り、行基本変形を行う。
                </p>
                <BlockMath math="
                    \left[ \begin{array}{ccc|ccc}
                    1 & 2 & 3 & 1 & 0 & 0 \\
                    2 & 5 & 3 & 0 & 1 & 0 \\
                    1 & 0 & 8 & 0 & 0 & 1
                    \end{array} \right]
                " />
                <p>
                    第2行 <InlineMath math="- 2 \times" /> 第1行、第3行 <InlineMath math="- 1 \times" /> 第1行：
                </p>
                <BlockMath math="
                    \xrightarrow{}
                    \left[ \begin{array}{ccc|ccc}
                    1 & 2 & 3 & 1 & 0 & 0 \\
                    0 & 1 & -3 & -2 & 1 & 0 \\
                    0 & -2 & 5 & -1 & 0 & 1
                    \end{array} \right]
                " />
                <p>
                    第3行 <InlineMath math="+ 2 \times" /> 第2行：
                </p>
                <BlockMath math="
                    \xrightarrow{}
                    \left[ \begin{array}{ccc|ccc}
                    1 & 2 & 3 & 1 & 0 & 0 \\
                    0 & 1 & -3 & -2 & 1 & 0 \\
                    0 & 0 & -1 & -5 & 2 & 1
                    \end{array} \right]
                " />
                <p>
                    第3行を <InlineMath math="-1" /> 倍し、第2行 <InlineMath math="+ 3 \times" /> 第3行、第1行 <InlineMath math="- 3 \times" /> 第3行：
                    （第3行は <InlineMath math="0, 0, 1 | 5, -2, -1" /> になる）
                </p>
                <BlockMath math="
                    \xrightarrow{}
                    \left[ \begin{array}{ccc|ccc}
                    1 & 2 & 0 & -14 & 6 & 3 \\
                    0 & 1 & 0 & -17 & 7 & 3 \\
                    0 & 0 & 1 & 5 & -2 & -1
                    \end{array} \right]
                " />
                <p>
                    第1行 <InlineMath math="- 2 \times" /> 第2行：
                </p>
                <BlockMath math="
                    \xrightarrow{}
                    \left[ \begin{array}{ccc|ccc}
                    1 & 0 & 0 & 20 & -8 & -3 \\
                    0 & 1 & 0 & -17 & 7 & 3 \\
                    0 & 0 & 1 & 5 & -2 & -1
                    \end{array} \right]
                " />
                <p>
                    左側が単位行列になったので、右側が逆行列である。
                </p>
                <BlockMath math="A^{-1} = \begin{pmatrix} 20 & -8 & -3 \\ -17 & 7 & 3 \\ 5 & -2 & -1 \end{pmatrix}" />
            </ContentBox>

            <ContentBox type="note" title="Note">
                <p>
                    もし変形の途中で左側の行列のある行がすべて0になってしまい、単位行列にできない場合は、
                    もとの行列 <InlineMath math="A" /> は正則ではない（逆行列を持たない）ことを意味します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="[A|I] \to [I|A^{-1}]" /> の変形で逆行列が求まる。</li>
                    <li>余因子行列よりも計算量が少なく、手計算でもミスが起きにくい。</li>
                    <li>単位行列に変形できない場合は、逆行列が存在しない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
