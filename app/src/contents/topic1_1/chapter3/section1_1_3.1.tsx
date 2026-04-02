import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function LinearSystemsMatrix() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                本章では、線形代数の最も基本的かつ重要な応用の一つである<strong>連立1次方程式</strong>の解法を学びます。
                これまで学んだ行列とベクトルの知識を使うことで、連立方程式を体系的かつ機械的に解く手法（ガウスの消去法）を習得します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 連立1次方程式の行列表現
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">連立1次方程式の行列表現</h2>

            <p>
                まず、連立方程式を行列とベクトルを使ってシンプルに書き表す方法を見ましょう。
            </p>

            {/* Definition 3.1-1 */}
            <ContentBox type="definition" title="Definition 3.1-1 （連立1次方程式）">
                <p>
                    <InlineMath math="n" /> 個の未知数 <InlineMath math="x_1, x_2, \dots, x_n" /> に関する <InlineMath math="m" /> 本の一次方程式の組
                </p>
                <BlockMath math="\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}" />
                <p>
                    において、以下の行列とベクトルを定義する。
                </p>
                <BlockMath math="A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix}, \quad \mathbf{x} = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} b_1 \\ \vdots \\ b_m \end{pmatrix}" />
                <p>
                    このとき、上記の連立方程式は行列の積を用いて次のように表現できる。
                </p>
                <BlockMath math="A\mathbf{x} = \mathbf{b}" />
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="A" />: <strong>係数行列</strong>（coefficient matrix）</li>
                    <li><InlineMath math="\mathbf{x}" />: <strong>未知数ベクトル</strong>（vector of unknowns）</li>
                    <li><InlineMath math="\mathbf{b}" />: <strong>定数項ベクトル</strong>（constant vector）</li>
                </ul>
            </ContentBox>

            {/* Example 3.1-1 */}
            <ContentBox type="example" title="Example 3.1-1">
                <p>次の連立方程式を行列の形 <InlineMath math="A\mathbf{x} = \mathbf{b}" /> で表せ。</p>
                <BlockMath math="\begin{cases} 2x + 3y = 5 \\ 4x - y = -2 \end{cases}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    未知数は <InlineMath math="x, y" /> なので <InlineMath math="\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}" /> とおく。
                    係数行列 <InlineMath math="A" /> と定数項ベクトル <InlineMath math="\mathbf{b}" /> は以下のようになる。
                </p>
                <BlockMath math="\begin{pmatrix} 2 & 3 \\ 4 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ -2 \end{pmatrix}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 拡大係数行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">拡大係数行列</h2>

            <p>
                連立方程式を解く際、未知数の文字（<InlineMath math="x, y, \dots" />）や等号を書くのは面倒です。
                係数と定数項だけを並べた行列を使うと、計算がずっと楽になります。
            </p>

            {/* Definition 3.1-2 */}
            <ContentBox type="definition" title="Definition 3.1-2 （拡大係数行列）">
                <p>
                    係数行列 <InlineMath math="A" /> の右側に定数項ベクトル <InlineMath math="\mathbf{b}" /> を付け加えた <InlineMath math="m \times (n+1)" /> 行列
                </p>
                <BlockMath math="\tilde{A} = [A \mid \mathbf{b}] = \begin{pmatrix} a_{11} & \cdots & a_{1n} & b_1 \\ \vdots & \ddots & \vdots & \vdots \\ a_{m1} & \cdots & a_{mn} & b_m \end{pmatrix}" />
                <p>
                    を<strong>拡大係数行列</strong>（augmented matrix）という。
                    （区切り線は説明のために書くことがあるが、数学的には単なる行列である）
                </p>
            </ContentBox>

            {/* Example 3.1-2 */}
            <ContentBox type="example" title="Example 3.1-2">
                <p>次の連立方程式の拡大係数行列を書け。</p>
                <BlockMath math="\begin{cases} x + 2y - z = 4 \\ 3x - y + 5z = 2 \\ -2x + 4z = 0 \end{cases}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    3つ目の式に <InlineMath math="y" /> が含まれていないこと（係数が0であること）に注意する。
                </p>
                <BlockMath math="\tilde{A} = \begin{pmatrix} 1 & 2 & -1 & 4 \\ 3 & -1 & 5 & 2 \\ -2 & 0 & 4 & 0 \end{pmatrix}" />
            </ContentBox>

            <ContentBox type="note" title="Note">
                <p>
                    連立方程式を解く操作（足したり引いたり代入したり）は、この拡大係数行列に対する操作（行の変形）として完全に記述できます。
                    次節以降では、この拡大係数行列を変形していくことで解を求めます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>連立1次方程式は <strong><InlineMath math="A\mathbf{x} = \mathbf{b}" /></strong> の形に書ける。</li>
                    <li><InlineMath math="A" /> を係数行列、<InlineMath math="\mathbf{b}" /> を定数項ベクトルという。</li>
                    <li>係数行列と定数項をまとめた <strong>拡大係数行列 <InlineMath math="[A \mid \mathbf{b}]" /></strong> が重要。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
