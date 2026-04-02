import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function CofactorExpansion() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                <InlineMath math="3 \times 3" /> 以下の行列式はサラスの方法で計算できましたが、
                <InlineMath math="4 \times 4" /> 以上の行列式を計算するにはどうすればよいでしょうか。
                その答えが「余因子展開（Co-factor expansion）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 余因子展開
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">余因子展開（一般の行列式）</h2>

            {/* Definition 4.3-1 */}
            <ContentBox type="definition" title="Definition 4.3-1 （余因子）">
                <p>
                    <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> の第 <InlineMath math="i" /> 行と第 <InlineMath math="j" /> 列を取り除いてできる
                    <InlineMath math="(n-1) \times (n-1)" /> 行列を <InlineMath math="M_{ij}" /> とし、
                    その行列式 <InlineMath math="|M_{ij}|" /> を <InlineMath math="a_{ij}" /> の<strong>小行列式</strong>（minor）という。
                </p>
                <p className="mt-2">
                    また、これに符号 <InlineMath math="(-1)^{i+j}" /> をつけた値
                    <BlockMath math="C_{ij} = (-1)^{i+j} |M_{ij}|" />
                    を <InlineMath math="a_{ij}" /> の<strong>余因子</strong>（cofactor）という。
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    符号は市松模様になります：
                    <InlineMath math="\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}" />
                </p>
            </ContentBox>

            {/* Theorem 4.3-1 */}
            <ContentBox type="theorem" title="Theorem 4.3-1 （余因子展開）">
                <p>
                    行列式 <InlineMath math="|A|" /> は、任意の行または列に沿って展開できる。
                </p>
                <p className="mt-2 text-blue-600 font-bold">第 <InlineMath math="i" /> 行での展開：</p>
                <BlockMath math="|A| = \sum_{j=1}^n a_{ij} C_{ij} = a_{i1}C_{i1} + a_{i2}C_{i2} + \dots + a_{in}C_{in}" />
                <p className="mt-2 text-blue-600 font-bold">第 <InlineMath math="j" /> 列での展開：</p>
                <BlockMath math="|A| = \sum_{i=1}^n a_{ij} C_{ij} = a_{1j}C_{1j} + a_{2j}C_{2j} + \dots + a_{nj}C_{nj}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof Outline">
                <p>
                    厳密な証明は置換（Permutation）の定義に基づいて行われますが、ここでは概要のみ述べます。
                    行列式の定義（ライプニッツの公式）における項を、特定の行（例えば第1行）の成分 <InlineMath math="a_{1j}" /> でグループ分けすると、
                    それぞれの係数がちょうど余因子 <InlineMath math="C_{1j}" /> に一致することが確認できます。
                    他の行や列についても、行の入れ替えによって第1行の場合に帰着させることで証明できます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* Example 4.3-1 */}
            <ContentBox type="example" title="Example 4.3-1 （余因子展開による計算）">
                <p>次の行列の行列式を、第1行で展開して求めよ。</p>
                <BlockMath math="A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <BlockMath math="
                    \begin{aligned}
                    |A| = &\  1 \cdot C_{11} + 2 \cdot C_{12} + 3 \cdot C_{13} \\
                        = &\  1 \cdot (-1)^{1+1} \begin{vmatrix} 5 & 6 \\ 8 & 9 \end{vmatrix}
                         + 2 \cdot (-1)^{1+2} \begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix} \\
                         & + 3 \cdot (-1)^{1+3} \begin{vmatrix} 4 & 5 \\ 7 & 8 \end{vmatrix} \\
                        = &\  1(45-48) - 2(36-42) + 3(32-35) \\
                        = &\  1(-3) - 2(-6) + 3(-3) \\
                        = &\  -3 + 12 - 9 \\
                        = &\  0
                    \end{aligned}
                " />
            </ContentBox>

            <ContentBox type="note" title="Note （計算のコツ）">
                <p>
                    余因子展開はどの行・列で行っても結果は同じですが、
                    <strong>「0が多く含まれる行（または列）」</strong>を選んで展開するのが鉄則です。
                    <InlineMath math="0 \times C_{ij}" /> の項は計算する必要がないため、手間を大幅に省けます。
                </p>
            </ContentBox>

            {/* Example 4.3-2 */}
            <ContentBox type="example" title="Example 4.3-2 （0の多い行での展開）">
                <p>次の行列式を求めよ。</p>
                <BlockMath math="B = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 0 & 2 & 0 & 0 \\ 5 & 6 & 7 & 8 \\ 9 & 0 & 1 & 2 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    第2行に0が3つあるので、第2行で展開する。
                </p>
                <BlockMath math="
                    \begin{aligned}
                    |B| &= 0 \cdot C_{21} + 2 \cdot C_{22} + 0 \cdot C_{23} + 0 \cdot C_{24} \\
                        &= 2 \cdot (-1)^{2+2} \begin{vmatrix} 1 & 3 & 4 \\ 5 & 7 & 8 \\ 9 & 1 & 2 \end{vmatrix} \\
                        &= 2 \begin{vmatrix} 1 & 3 & 4 \\ 5 & 7 & 8 \\ 9 & 1 & 2 \end{vmatrix}
                    \end{aligned}
                " />
                <p>
                    残った <InlineMath math="3 \times 3" /> 行列式をサラスの方法（またはさらに展開）で計算する。
                </p>
                <p className="ml-4 text-sm text-slate-600">
                    （中略... 計算すると <InlineMath math="-24" /> になります）
                </p>
                <BlockMath math="|B| = 2 \times (-24) = -48" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>余因子展開</strong>: 大きな行列式を小さな行列式の和に分解する手法。</li>
                    <li>どの行・列で展開しても値は同じになる。</li>
                    <li>計算を楽にするために、<InlineMath math="0" /> の多い行・列を選ぶのがポイント。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
