import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function QuadraticFormsStandardization() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                二次形式 <InlineMath math="q(\boldsymbol{x}) = \boldsymbol{x}^T A \boldsymbol{x}" /> は、多項式の中に <InlineMath math="c_{ij} x_i x_j" /> という「異なる変数が掛け合わさった項（クロスターム・交差項）」が含まれているため、その関数の形（定値性など）を直感的に把握することが非常に困難です。<br />
                しかし、前章で学んだ<strong>スペクトル定理（実対称行列の直交対角化）</strong>を用いることで、この複雑な二次形式から「クロスタームを完全に消し去る」魔法のような座標変換を行うことができます。<br />
                これを二次形式の<strong>「標準化（Standardization）」</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">標準形への変換（主軸変換）</h2>

            <p>
                「標準形」とは、すべての項が単独の変数の2乗（<InlineMath math="\lambda x^2" /> の形）だけで構成され、<InlineMath math="xy" /> や <InlineMath math="yz" /> のような交差項が一切存在しない、最もシンプルで美しい形態のことです。
            </p>

            <ContentBox type="theorem" title="Theorem 12.3-1 （直交行列による二次形式の標準化）">
                <p>
                    <InlineMath math="n" /> 変数の任意の二次形式 <InlineMath math="q(\boldsymbol{x}) = \boldsymbol{x}^T A \boldsymbol{x}" /> は、適当な<strong>直交行列 <InlineMath math="Q" /></strong> （<InlineMath math="Q^T Q = I" />）を用いた変数変換 <InlineMath math="\boldsymbol{x} = Q \boldsymbol{y}" /> により、以下の<strong>標準形（Standard Form）</strong>に変換することができる。
                </p>
                <BlockMath math="q(\boldsymbol{x}) = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2" />
                <p>
                    ここで、<InlineMath math="\lambda_1, \dots, \lambda_n" /> は対称行列 <InlineMath math="A" /> の<strong>固有値</strong>であり、<InlineMath math="\boldsymbol{y} = (y_1, \dots, y_n)^T" /> は新しい座標系における変数ベクトルである。<br />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この証明は、スペクトル定理さえ知っていれば、わずか数行の代数計算で鮮やかに完了します。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-4">
                    <li>
                        <strong>対称行列の直交対角化：</strong><br />
                        <InlineMath math="A" /> は <InlineMath math="n \times n" /> の実対称行列である。Chapter 11のスペクトル定理（Theorem 11.3-1）より、<InlineMath math="A" /> は直交行列 <InlineMath math="Q" /> を用いて対角化可能である。<br />
                        すなわち、<InlineMath math="Q^T A Q = \Lambda" /> （対角成分が固有値 <InlineMath math="\lambda_1, \dots, \lambda_n" /> である対角行列）となる <InlineMath math="Q" /> が存在する。
                    </li>
                    <li>
                        <strong>変数変換の導入：</strong><br />
                        ここで、<InlineMath math="Q" /> は正則行列（可逆）なので、新しい変数ベクトル <InlineMath math="\boldsymbol{y}" /> を用いて <InlineMath math="\boldsymbol{x} = Q\boldsymbol{y}" /> という座標変換を定義する。
                    </li>
                    <li>
                        <strong>二次形式への代入と計算：</strong><br />
                        二次形式 <InlineMath math="q(\boldsymbol{x}) = \boldsymbol{x}^T A \boldsymbol{x}" /> に <InlineMath math="\boldsymbol{x} = Q\boldsymbol{y}" /> を代入する。<br />
                        このとき転置の性質 <InlineMath math="(XY)^T = Y^T X^T" /> を用いる。
                        <BlockMath math="\boldsymbol{x}^T A \boldsymbol{x} = (Q\boldsymbol{y})^T A (Q\boldsymbol{y}) = \boldsymbol{y}^T Q^T A Q \boldsymbol{y}" />
                    </li>
                    <li>
                        <strong>対角行列への置き換え：</strong><br />
                        式の中に現れた <InlineMath math="Q^T A Q" /> は、ステップ1で用意した対角行列 <InlineMath math="\Lambda" /> そのものである。<br />
                        これを代入する。
                        <BlockMath math="\boldsymbol{y}^T Q^T A Q \boldsymbol{y} = \boldsymbol{y}^T \Lambda \boldsymbol{y}" />
                    </li>
                    <li>
                        <strong>成分展開：</strong><br />
                        最後に対角行列 <InlineMath math="\Lambda" /> とベクトル <InlineMath math="\boldsymbol{y}" /> の積を成分で展開する。対角行列のため非対角成分はすべて <InlineMath math="0" /> となり、クロスターム（<InlineMath math="y_i y_j" />）は出現しない。
                        <BlockMath math="\begin{aligned} \boldsymbol{y}^T \Lambda \boldsymbol{y} &= (y_1, \dots, y_n) \begin{pmatrix} \lambda_1 & & O \\ & \ddots & \\ O & & \lambda_n \end{pmatrix} \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix} \\ &= \lambda_1 y_1^2 + \dots + \lambda_n y_n^2 \end{aligned}" />
                        これにより、任意の二次形式が直交変換によって標準形へと変形できることが証明された。

                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <ContentBox type="remark" title="主軸定理（Principal Axes Theorem）と幾何学的意味">
                <p>
                    この二次形式の標準化は、幾何学的には<strong>「主軸定理」</strong>とも呼ばれます。<br />
                    例えば <InlineMath math="n=2" /> の場合、<InlineMath math="q(x,y) = 1" /> という等式は一般に「斜めを向いた楕円（または双曲線）」を表します。この傾きを生んでいる元凶がクロスターム（<InlineMath math="xy" /> の項）です。
                </p>
                <p>
                    直交行列 <InlineMath math="Q" /> を用いた変換（<InlineMath math="\boldsymbol{x} = Q\boldsymbol{y}" />）は、図形の形や大きさを一切変えない純粋な「回転」を表します（<InlineMath math="\det Q = 1" /> の場合）。<br />
                    つまり、「うまく座標軸を傾けて（回転させて）から図形を眺め直すと、全く傾きのない、縦横にまっすぐ伸びた綺麗な楕円（標準形 <InlineMath math="\lambda_1 y_1^2 + \lambda_2 y_2^2 = 1" />）に見える」ことこそが、二次形式の標準化の真の姿なのです。<br />
                    そして、この新しい座標軸のことを<strong>「主軸（Principal Axes）」</strong>と呼び、その方向ベクトルこそが元の行列 <InlineMath math="A" /> の<strong>「固有ベクトル」</strong>に他なりません。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§12.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>交差項（<InlineMath math="x_i x_j" />）を含む複雑な二次形式は、直交行列を用いた変数変換 <InlineMath math="\boldsymbol{x} = Q\boldsymbol{y}" /> によって、2乗の項（<InlineMath math="y_i^2" />）のみからなる<strong>標準形</strong>に完全に整理できる（Theorem 12.3-1）。</li>
                    <li>この標準形の各項の係数は、まさに元の対称行列の<strong>固有値</strong> <InlineMath math="\lambda_i" /> である。</li>
                    <li>幾何学的には、これは「固有ベクトルの方向」に新しい座標軸を傾け直す（主軸変換・回転する）ことで、図形を最も見やすい真正面から捉え直す操作に相当する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
