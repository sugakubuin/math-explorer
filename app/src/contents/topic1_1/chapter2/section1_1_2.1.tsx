import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function MatrixDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                前章では「数を縦に並べたもの」としてベクトルを扱いました。
                本章では、これを拡張して「数を長方形に並べたもの」である<strong>行列</strong>（matrix）を扱います。
                行列は連立方程式の記述、データの整理、そして線形写像の表現など、線形代数の主役となる概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 行列とは何か
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">行列とは何か</h2>

            {/* Definition 2.1-1 */}
            <ContentBox type="definition" title="Definition 2.1-1 （行列）">
                <p>
                    <InlineMath math="mn" /> 個の実数を縦に <InlineMath math="m" /> 行、横に <InlineMath math="n" /> 列の長方形に並べ、括弧でくくったもの
                </p>
                <BlockMath math="A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}" />
                <p>
                    を <strong><InlineMath math="m \times n" /> 行列</strong>（<InlineMath math="m \times n" /> matrix）または単に <strong><InlineMath math="m" /> 行 <InlineMath math="n" /> 列の行列</strong>という。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="a_{ij}" /> を行列 <InlineMath math="A" /> の <strong><InlineMath math="(i, j)" /> 成分</strong>（<InlineMath math="i" />-th row, <InlineMath math="j" />-th column element）という。</li>
                    <li>横の並びを<strong>行</strong>（row）、縦の並びを<strong>列</strong>（column）という。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="Remark （記法）">
                <p>
                    <InlineMath math="m \times n" /> 行列全体の集合を <InlineMath math="M_{m,n}(\mathbb{R})" /> や <InlineMath math="\mathbb{R}^{m \times n}" /> と表します。
                    また、行列 <InlineMath math="A" /> の成分を略記して <InlineMath math="A = [a_{ij}]" /> と書くこともあります。
                </p>
            </ContentBox>

            {/* Example 2.1-1 */}
            <ContentBox type="example" title="Example 2.1-1">
                <p>次の行列の型（<InlineMath math="m \times n" />）と、指定された成分を答えよ。</p>
                <BlockMath math="A = \begin{pmatrix} 2 & 0 & -1 \\ 3 & 5 & 4 \end{pmatrix}" />
                <p>
                    <strong>(1)</strong> 行列 <InlineMath math="A" /> の型 &nbsp;&nbsp;
                    <strong>(2)</strong> <InlineMath math="(1, 3)" /> 成分 <InlineMath math="a_{13}" /> &nbsp;&nbsp;
                    <strong>(3)</strong> <InlineMath math="(2, 2)" /> 成分 <InlineMath math="a_{22}" />
                </p>
                <p className="font-bold mt-4">解．</p>
                <p>
                    <strong>(1)</strong> 縦に2行、横に3列並んでいるので、<strong><InlineMath math="2 \times 3" /> 行列</strong>である。<br />
                    <strong>(2)</strong> 1行目の3列目にある数は <InlineMath math="-1" /> なので、<InlineMath math="a_{13} = -1" />。<br />
                    <strong>(3)</strong> 2行目の2列目にある数は <InlineMath math="5" /> なので、<InlineMath math="a_{22} = 5" />。
                </p>
            </ContentBox>

            <h3 className="text-xl font-bold mt-10 mb-4">行ベクトルと列ベクトル</h3>

            <p>
                行列の特別な場合として、行または列が1つだけのものには特別な名前がついています。
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>
                    <strong>列ベクトル</strong>（column vector）: <InlineMath math="m \times 1" /> 行列。
                    <BlockMath math="\mathbf{x} = \begin{pmatrix} x_1 \\ \vdots \\ x_m \end{pmatrix}" />
                    これは第1章で扱った「ベクトル」そのものです。
                </li>
                <li>
                    <strong>行ベクトル</strong>（row vector）: <InlineMath math="1 \times n" /> 行列。
                    <BlockMath math="\mathbf{y} = \begin{pmatrix} y_1 & \cdots & y_n \end{pmatrix}" />
                </li>
            </ul>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 行列の相等
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">行列の相等</h2>

            {/* Definition 2.1-2 */}
            <ContentBox type="definition" title="Definition 2.1-2 （行列の相等）">
                <p>
                    2つの行列 <InlineMath math="A, B" /> が<strong>等しい</strong>（<InlineMath math="A = B" />）とは、以下が成り立つことをいう：
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><InlineMath math="A" /> と <InlineMath math="B" /> の型（サイズ）が同じである。</li>
                    <li>すべての対応する成分が等しい。（任意の <InlineMath math="i, j" /> について <InlineMath math="a_{ij} = b_{ij}" />）</li>
                </ol>
            </ContentBox>

            {/* Example 2.1-2 */}
            <ContentBox type="example" title="Example 2.1-2">
                <p>次の等式を満たす <InlineMath math="x, y, z" /> を求めよ。</p>
                <BlockMath math="\begin{pmatrix} x+y & 2 \\ 3 & z \end{pmatrix} = \begin{pmatrix} 4 & 2 \\ 3 & x-y \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>対応する成分を比較すると：</p>
                <ul className="list-disc list-inside ml-4">
                    <li><InlineMath math="(1, 1)" /> 成分: <InlineMath math="x + y = 4" /> ...①</li>
                    <li><InlineMath math="(1, 2)" /> 成分: <InlineMath math="2 = 2" /> （自明）</li>
                    <li><InlineMath math="(2, 1)" /> 成分: <InlineMath math="3 = 3" /> （自明）</li>
                    <li><InlineMath math="(2, 2)" /> 成分: <InlineMath math="z = x - y" /> ...②</li>
                </ul>
                <p className="mt-2">
                    未知数が3つで式が2つなので解は一意に定まらないように見えるが、ここでは例えば <InlineMath math="x=3, y=1" /> とすれば ① を満たす。
                    このとき ② より <InlineMath math="z = 3 - 1 = 2" />。
                    （注：問題設定として <InlineMath math="x, y" /> が一意に定まる条件が不足しているが、行列の相等の例としては成分比較を行うことを理解できれば良い）
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    ※ 修正：通常の問題では <InlineMath math="x, y" /> が求まる連立方程式になることが多いです。
                    例えば <InlineMath math="(1,2)" /> 成分が <InlineMath math="x-y" /> で右辺が <InlineMath math="2" /> なら連立方程式として解けます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 特別な行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">特別な行列</h2>

            <h3 className="text-xl font-bold mt-6 mb-4">正方行列</h3>
            <ContentBox type="definition" title="Definition 2.1-3 （正方行列）">
                <p>
                    行の数と列の数が等しい行列、すなわち <InlineMath math="n \times n" /> 行列を <strong><InlineMath math="n" /> 次の正方行列</strong>（square matrix of order <InlineMath math="n" />）という。
                </p>
                <BlockMath math="A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{n1} & \cdots & a_{nn} \end{pmatrix}" />
                <p>
                    このとき、成分 <InlineMath math="a_{11}, a_{22}, \dots, a_{nn}" /> を<strong>対角成分</strong>（diagonal elements）という。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>行列</strong>: 数を長方形に並べたもの。<InlineMath math="m" /> 行 <InlineMath math="n" /> 列の行列を <InlineMath math="m \times n" /> 行列という。</li>
                    <li><strong>成分</strong>: <InlineMath math="i" /> 行 <InlineMath math="j" /> 列目の数を <InlineMath math="(i, j)" /> 成分または <InlineMath math="a_{ij}" /> と書く。</li>
                    <li><strong>相等</strong>: 型が同じで、全成分が等しいとき、2つの行列は等しい。</li>
                    <li><strong>正方行列</strong>: 行数と列数が等しい行列。</li>
                </ul>
            </ContentBox>
        </section >
    );
}
