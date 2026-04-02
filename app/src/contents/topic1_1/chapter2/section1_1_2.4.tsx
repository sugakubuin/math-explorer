import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function SpecialMatrices() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                行列の演算において、「数の <InlineMath math="0" />」や「数の <InlineMath math="1" />」に相当する特別な行列が存在します。
                また、計算を簡単にするために形が単純な行列（対角行列など）を考えることも重要です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 零行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">零行列</h2>

            <p>
                その名の通り、すべての成分が <InlineMath math="0" /> である行列です。
                これは行列の和における単位元（足しても変わらないもの）として機能します。
            </p>

            {/* Definition 2.4-1 */}
            <ContentBox type="definition" title="Definition 2.4-1 （零行列）">
                <p>
                    すべての成分が <InlineMath math="0" /> である行列を<strong>零行列</strong>（zero matrix）といい、<InlineMath math="O" /> または <InlineMath math="O_{m,n}" /> で表す。
                </p>
                <BlockMath math="O = \begin{pmatrix} 0 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & 0 \end{pmatrix}" />
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.4-1 （零行列の性質）">
                <p>任意の行列 <InlineMath math="A" /> に対して、型が適合する限り以下が成り立つ。</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="A + O = A, \quad O + A = A" /></li>
                    <li><InlineMath math="A - A = O" /></li>
                    <li><InlineMath math="AO = O, \quad OA = O" /></li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 単位行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">単位行列</h2>

            <p>
                正方行列において、対角成分がすべて <InlineMath math="1" /> で、それ以外がすべて <InlineMath math="0" /> である行列です。
                これは行列の積における単位元（掛けても変わらないもの）として機能します。
            </p>

            {/* Definition 2.4-2 */}
            <ContentBox type="definition" title="Definition 2.4-2 （単位行列）">
                <p>
                    <InlineMath math="n" /> 次の正方行列において、対角成分がすべて <InlineMath math="1" />、それ以外の成分がすべて <InlineMath math="0" /> であるものを、
                    <strong><InlineMath math="n" /> 次の単位行列</strong>（identity matrix of order <InlineMath math="n" />）といい、<InlineMath math="I" />、<InlineMath math="E" /> または <InlineMath math="I_n" /> で表す。
                </p>
                <BlockMath math="I_n = \begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}" />
                <p>
                    クロネッカーのデルタ <InlineMath math="\delta_{ij}" /> を用いれば、<InlineMath math="I = [\delta_{ij}]" /> と書ける。
                    ただし <InlineMath math="\delta_{ij} = \begin{cases} 1 & (i=j) \\ 0 & (i \neq j) \end{cases}" /> である。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.4-2 （単位行列の性質）">
                <p>任意の <InlineMath math="m \times n" /> 行列 <InlineMath math="A" /> に対して以下が成り立つ。</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="A I_n = A" /></li>
                    <li><InlineMath math="I_m A = A" /></li>
                </ul>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    特に <InlineMath math="A" /> が <InlineMath math="n" /> 次正方行列ならば、<InlineMath math="AI = IA = A" /> である（積について可換になる）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 対角行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">対角行列</h2>

            <p>
                単位行列を一般化したような、対角成分以外がすべて <InlineMath math="0" /> である行列です。
            </p>

            {/* Definition 2.4-3 */}
            <ContentBox type="definition" title="Definition 2.4-3 （対角行列）">
                <p>
                    正方行列 <InlineMath math="A = [a_{ij}]" /> において、<InlineMath math="i \neq j" /> ならば <InlineMath math="a_{ij} = 0" /> であるとき、
                    <InlineMath math="A" /> を<strong>対角行列</strong>（diagonal matrix）という。
                </p>
                <BlockMath math="D = \begin{pmatrix} d_1 & 0 & \cdots & 0 \\ 0 & d_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & d_n \end{pmatrix} = \mathrm{diag}(d_1, d_2, \dots, d_n)" />
            </ContentBox>

            <ContentBox type="remark" title="Remark （スカラー行列）">
                <p>
                    対角行列の中でも特に対角成分がすべて等しいもの（<InlineMath math="kI" /> の形）を<strong>スカラー行列</strong>（scalar matrix）という。
                    スカラー行列はあらゆる正方行列と可換（<InlineMath math="(kI)A = k(IA) = kA = A(kI)" />）であるという面白い性質を持つ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>零行列 <InlineMath math="O" /></strong>: 全成分が <InlineMath math="0" />。和の単位元。</li>
                    <li><strong>単位行列 <InlineMath math="I" /></strong>: 対角成分が <InlineMath math="1" />、他が <InlineMath math="0" />。積の単位元。</li>
                    <li><strong>対角行列</strong>: 対角成分以外が <InlineMath math="0" /> の正方行列。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
