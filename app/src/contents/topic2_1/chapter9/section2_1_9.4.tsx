import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function QRDecomposition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                グラム・シュミット直交化法は、単に「きれいな基底を作る」だけのアルゴリズムではありません。<br />
                この「ベクトルを順番に直交化していく」というプロセスそのものを、行列の言葉（積の分解）として翻訳し直すと、数値線形代数や統計学における強力なツールである<strong>「QR分解（QR Decomposition）」</strong>が自然と姿を現します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">QR分解の存在</h2>

            <p>
                グラム・シュミット過程を「元のベクトル <InlineMath math="\boldsymbol{v}_j" />」を「新しい直交基底 <InlineMath math="\boldsymbol{u}_i" />」で表す形に逆算してみましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 9.4-1 （QR分解の存在 / QR Decomposition）">
                <p>
                    任意の列フルランクな（各列ベクトルが線形独立である） <InlineMath math="m \times n" /> 実行列 <InlineMath math="A" /> は、次のような2つの行列の積に分解することができる。
                </p>
                <BlockMath math="A = Q R" />
                <p>ここで、各行列は以下の性質を持つ。</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong><InlineMath math="Q" /> （直交行列部分）：</strong><br />
                        サイズ <InlineMath math="m \times n" /> の行列であり、その列ベクトルは互いに正規直交する。（<InlineMath math="Q^T Q = I_n" /> を満たす）
                    </li>
                    <li>
                        <strong><InlineMath math="R" /> （上三角行列部分）：</strong><br />
                        サイズ <InlineMath math="n \times n" /> の正則な<strong>上三角行列（Upper Triangular Matrix）</strong>であり、対角成分はすべて正の実数となる。
                    </li>
                </ul>
                <p className="mt-2 text-sm text-slate-500">
                    ※ 列が線形独立であれば、正方行列でなくても（縦長の行列であっても）QR分解は可能です。（これを「縮小QR分解（Thin QR Decomposition）」と呼びます。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （グラム・シュミット法からの導出）">
                <p>
                    行列 <InlineMath math="A" /> の各列ベクトルを <InlineMath math="A = (\boldsymbol{a}_1, \boldsymbol{a}_2, \dots, \boldsymbol{a}_n)" /> とする。この列群に対してグラム・シュミット直交化法を適用し、正規直交基底 <InlineMath math="\{ \boldsymbol{q}_1, \boldsymbol{q}_2, \dots, \boldsymbol{q}_n \}" /> を得たとする。<br />
                    このとき、正規直交ベクトルを列として並べた行列を <InlineMath math="Q = (\boldsymbol{q}_1, \boldsymbol{q}_2, \dots, \boldsymbol{q}_n)" /> と定義する。
                </p>
                <p>
                    直交化のプロセスを振り返ると、元のベクトル <InlineMath math="\boldsymbol{a}_k" /> は「それまでに作られた <InlineMath math="k-1" /> 個の正規直交ベクトルと、自分自身の正規直交ベクトル <InlineMath math="\boldsymbol{q}_k" /> の線形結合」として書くことができる。
                </p>
                <BlockMath math="\boldsymbol{a}_1 = \langle \boldsymbol{a}_1, \boldsymbol{q}_1 \rangle \boldsymbol{q}_1 = r_{11} \boldsymbol{q}_1" />
                <BlockMath math="\boldsymbol{a}_2 = \langle \boldsymbol{a}_2, \boldsymbol{q}_1 \rangle \boldsymbol{q}_1 + \langle \boldsymbol{a}_2, \boldsymbol{q}_2 \rangle \boldsymbol{q}_2 = r_{12}\boldsymbol{q}_1 + r_{22}\boldsymbol{q}_2" />
                <BlockMath math="\vdots" />
                <BlockMath math="\boldsymbol{a}_n = \sum_{i=1}^n \langle \boldsymbol{a}_n, \boldsymbol{q}_i \rangle \boldsymbol{q}_i = r_{1n}\boldsymbol{q}_1 + r_{2n}\boldsymbol{q}_2 + \dots + r_{nn}\boldsymbol{q}_n" />
                <p>
                    これを行列の積の形で一つにまとめると、
                </p>
                <div className="overflow-x-auto">
                    <BlockMath math="(\boldsymbol{a}_1, \boldsymbol{a}_2, \dots, \boldsymbol{a}_n) = (\boldsymbol{q}_1, \boldsymbol{q}_2, \dots, \boldsymbol{q}_n) \begin{pmatrix} r_{11} & r_{12} & \dots & r_{1n} \\ 0 & r_{22} & \dots & r_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & r_{nn} \end{pmatrix}" />
                </div>
                <p>
                    右側の行列を <InlineMath math="R" /> とすると、まさに <InlineMath math="A = QR" /> となっている。<br />
                    <InlineMath math="R" /> は下半分がすべてゼロの「上三角行列」である。<br />
                    また、対角成分 <InlineMath math="r_{kk}" /> は、グラム・シュミット法における垂直成分の「ノルム（長さ）」そのものであるため、必ず正の実数となる。
                </p>
                <p>
                    以上より、グラム・シュミット法を実行することは、背後で行列のQR分解を行っていることと完全に等価であることが証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最小二乗法への応用</h2>

            <p>
                実験データなどで「データ点の数が未知数の数より多く、すべての点を完璧に通る解が存在しない（方程式 <InlineMath math="A\boldsymbol{x} = \boldsymbol{b}" /> が解を持たない）」システムに直面したとき、それに一番近い「妥協解」を探す方法が<strong>「最小二乗法（Least Squares Method）」</strong>です。<br />
                QR分解は、この最小二乗法を高速かつ安定して解くための最強の武器となります。
            </p>

            <ContentBox type="theorem" title="Proposition 9.4-1 （QR分解を用いた最小二乗解の計算）">
                <p>
                    <InlineMath math="m > n" /> を満たす過剰な連立一次方程式 <InlineMath math="A\boldsymbol{x} \approx \boldsymbol{b}" /> の最小二乗解（誤差の二乗ノルム <InlineMath math="\| \boldsymbol{b} - A\boldsymbol{x} \|^2" /> を最小にする <InlineMath math="\boldsymbol{x}" />）は、正規方程式
                </p>
                <BlockMath math="A^T A \boldsymbol{x} = A^T \boldsymbol{b}" />
                <p>
                    を解くことで得られる。
                </p>
                <p>
                    行列 <InlineMath math="A" /> にQR分解（<InlineMath math="A = QR" />）が適用できる場合、この解は次のシンプルで安定した連立方程式を逆代入法で解くことによって高速に求められる。
                </p>
                <BlockMath math="R \boldsymbol{x} = Q^T \boldsymbol{b}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    正規方程式 <InlineMath math="A^T A \boldsymbol{x} = A^T \boldsymbol{b}" /> に <InlineMath math="A = QR" /> を代入する。
                </p>
                <BlockMath math="(QR)^T (QR) \boldsymbol{x} = (QR)^T \boldsymbol{b}" />
                <BlockMath math="R^T Q^T Q R \boldsymbol{x} = R^T Q^T \boldsymbol{b}" />
                <p>
                    ここで、<InlineMath math="Q" /> は正規直交行列であるため <InlineMath math="Q^T Q = I" />（単位行列）となる。
                </p>
                <BlockMath math="R^T R \boldsymbol{x} = R^T Q^T \boldsymbol{b}" />
                <p>
                    さらに、<InlineMath math="R" /> は対角成分が正の上三角行列であるため、正則（逆行列が存在する）である。<InlineMath math="R^T" /> も同様に正則であるため、両辺の左から <InlineMath math="(R^T)^{-1}" /> を掛けてキャンセルすることができる。
                </p>
                <BlockMath math="R \boldsymbol{x} = Q^T \boldsymbol{b}" />
                <p>
                    この式は、右辺が単なる列ベクトルとなるため、未知数 <InlineMath math="\boldsymbol{x}" /> についての連立方程式となる。<br />
                    そして、<InlineMath math="R" /> は上三角行列であるため、この連立方程式は一番下の変数から順に一つずつ代入していく最速の「後退代入（Back Substitution）」だけで簡単に解を得ることができる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="コンピュータによる数値計算との繋がり">
                <p>
                    理論上は <InlineMath math="A^T A \boldsymbol{x} = A^T \boldsymbol{b}" /> の逆行列を直接計算すれば解けますが、<InlineMath math="A^T A" /> という行列の積を計算する際に「桁落ち」と呼ばれる深刻な数値誤差が発生しやすくなります（条件数が2乗に悪化するため）。<br />
                    これに対し、QR分解を用いる方法（<InlineMath math="R\boldsymbol{x} = Q^T\boldsymbol{b}" />）は、行列の積を避ける構造になっており、コンピュータで何百万件といった膨大なデータを分析する際に、極めて高い精度（数値安定性）を保つことができます。現在の統計ソフトや機械学習ライブラリの裏側では、このQRアルゴリズムが日夜働き続けています。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§9.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>グラム・シュミットのプロセスを行列の塊として見直すと、行列 <InlineMath math="A" /> を直交行列 <InlineMath math="Q" /> と上三角行列 <InlineMath math="R" /> の積に分解する<strong>QR分解</strong>が得られる（Theorem 9.4-1）。</li>
                    <li><InlineMath math="Q" /> は「直交化した基底」、<InlineMath math="R" /> は「元のベクトルをどうやって元の場所に戻すかのレシピ（内積係数）」を表している。</li>
                    <li>QR分解を用いると、データを最も誤差なく近似曲線に当てはめる<strong>最小二乗法</strong>において、<InlineMath math="R\boldsymbol{x} = Q^T\boldsymbol{b}" /> という極めて安定して解きやすい連立方程式に還元できる（Proposition 9.4-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
