import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function NormalMatrixUnitaryDiagonalization() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では「実対称行列」に対するスペクトル分解を行いましたが、この美しい分解理論を利用できるのは実対象行列だけではありません。<br />
                数学の舞台を複素数や内積空間（ユニタリ空間）へと拡張したとき、最も広くかつ自然にスペクトル分解を扱えるのが<strong>「正規行列（Normal Matrix）」</strong>なのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内積空間（ユニタリ空間）への拡張</h2>

            <p>
                Chapter 11の後半（11.4）で、実対称行列（<InlineMath math="A^T = A" />）の複素数版であるエルミート行列（<InlineMath math="A^* = A" />）や、直交行列（<InlineMath math="Q^T Q = I" />）の複素数版であるユニタリ行列（<InlineMath math="U^* U = I" />）、さらにはこれらを包括する「正規行列（<InlineMath math="AA^* = A^*A" />）」について学びました。
            </p>
            <p>
                定理11.4-1において「正規行列であること」と「ユニタリ行列で対角化可能であること（= 正規直交な固有ベクトルの基底を持つこと）」が完全に同値であることを確認しました。
            </p>

            <ContentBox type="theorem" title="Theorem 13.2-1 （正規行列のスペクトル分解）">
                <p>
                    <InlineMath math="n \times n" /> の複素行列 <InlineMath math="A" /> について、次の3つは同値である。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="A" /> は正規行列である（<InlineMath math="AA^* = A^*A" />）。</li>
                    <li><InlineMath math="A" /> はユニタリ行列によって対角化可能である。すなわち <InlineMath math="A = U \Lambda U^*" /> （<InlineMath math="U" /> はユニタリ行列、<InlineMath math="\Lambda" /> は複素数を対角成分に持つ対角行列）と書ける。</li>
                    <li>
                        <InlineMath math="A" /> は直交射影（エルミート射影とも言う）<InlineMath math="P_1, \dots, P_k" /> の線形結合として<strong>スペクトル分解</strong>できる。
                        <BlockMath math="A = \sum_{i=1}^k \lambda_i P_i" />
                        （ここで <InlineMath math="\lambda_i" /> は互いに異なる複素固有値で、<InlineMath math="P_i" /> たちは <InlineMath math="P_i^2 = P_i = P_i^*" />、<InlineMath math="P_i P_j = O" />、<InlineMath math="\sum P_i = I" /> を満たす）
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Chapter 11の定理11.4-1により 1 <InlineMath math="\iff" /> 2 は既に証明済みであるため、ここでは 2 <InlineMath math="\implies" /> 3 と 3 <InlineMath math="\implies" /> 1 を示す。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>
                        <strong>2 <InlineMath math="\implies" /> 3 の証明：</strong><br />
                        <InlineMath math="A = U \Lambda U^*" /> と書けるとする。<InlineMath math="U = (\boldsymbol{u}_1, \dots, \boldsymbol{u}_n)" /> と列ベクトル（正規直交系）に分割すると、前節と全く同様に
                        <BlockMath math="A = \sum_{j=1}^n \lambda_{j}' \boldsymbol{u}_j \boldsymbol{u}_j^*" />
                        とかける（<InlineMath math="\lambda_{j}'" /> は重複ありの固有値）。<br />
                        重複する固有値をまとめ上げ、同じ固有値 <InlineMath math="\lambda_i" /> に属する <InlineMath math="\boldsymbol{u}_j \boldsymbol{u}_j^*" /> の和を <InlineMath math="P_i" /> と定義する。<br />
                        <InlineMath math="P_i^* = (\sum \boldsymbol{u}_j \boldsymbol{u}_j^*)^* = \sum (\boldsymbol{u}_j^*)^* \boldsymbol{u}_j^* = \sum \boldsymbol{u}_j \boldsymbol{u}_j^* = P_i" /> であり、エルミート射影である。他の性質（<InlineMath math="P_i P_j = O" /> 等）も正規直交系であることから同様に成り立ち、スペクトル分解 3 が導かれる。
                    </li>
                    <li>
                        <strong>3 <InlineMath math="\implies" /> 1 の証明：</strong><br />
                        <InlineMath math="A" /> がスペクトル分解 <InlineMath math="A = \sum_{i=1}^k \lambda_i P_i" /> を持つとする。<br />
                        射影の性質 <InlineMath math="P_i = P_i^*" /> を用いて <InlineMath math="A^*" /> を計算すると、
                        <BlockMath math="A^* = \left( \sum_{i=1}^k \lambda_i P_i \right)^* = \sum_{i=1}^k \overline{\lambda_i} P_i^* = \sum_{i=1}^k \overline{\lambda_i} P_i" />
                    </li>
                    <li>
                        ここで <InlineMath math="AA^*" /> と <InlineMath math="A^*A" /> を計算する。<InlineMath math="P_i P_j = O \ (i \neq j)" /> および <InlineMath math="P_i^2 = P_i" /> を用いると、
                        <BlockMath math="\begin{aligned} AA^* &= \left( \sum_{i=1}^k \lambda_i P_i \right) \left( \sum_{j=1}^k \overline{\lambda_j} P_j \right) \\ &= \sum_{i=1}^k \lambda_i \overline{\lambda_i} P_i = \sum_{i=1}^k |\lambda_i|^2 P_i \end{aligned}" />
                        <BlockMath math="\begin{aligned} A^*A &= \left( \sum_{i=1}^k \overline{\lambda_i} P_i \right) \left( \sum_{j=1}^k \lambda_j P_j \right) \\ &= \sum_{i=1}^k \overline{\lambda_i} \lambda_i P_i = \sum_{i=1}^k |\lambda_i|^2 P_i \end{aligned}" />
                    </li>
                    <li>
                        両者の結果は完全に一致した（<InlineMath math="AA^* = A^*A" />）。したがって、<InlineMath math="A" /> は正規行列である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <ContentBox type="remark" title="ここから分かる重要なこと">
                <p>
                    証明の 3 <InlineMath math="\implies" /> 1 で見たように、行列 <InlineMath math="A" /> の随伴行列 <InlineMath math="A^*" /> のスペクトル分解は、固有値の複素共役をとるだけで簡単に得られます（<InlineMath math="A^* = \sum \overline{\lambda_i} P_i" />）。
                </p>
                <p>
                    これにより、複素数の世界（正規行列）におけるエルミート行列（<InlineMath math="A^* = A" />）やユニタリ行列（<InlineMath math="A^* A = I" />）の性質が、<strong>「固有値の実数・複素数の構造」だけで完全に説明できる</strong>ようになります。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                        <strong>エルミート行列（<InlineMath math="A=A^*" />）：</strong><br />
                        <InlineMath math="\sum \lambda_i P_i = \sum \overline{\lambda_i} P_i" />。したがってすべての <InlineMath math="i" /> について <InlineMath math="\lambda_i = \overline{\lambda_i}" /> となり、<strong>固有値はすべて実数</strong>。
                    </li>
                    <li>
                        <strong>ユニタリ行列（<InlineMath math="A^* A=I" />）：</strong><br />
                        <InlineMath math="\sum |\lambda_i|^2 P_i = I = \sum 1 \cdot P_i" />（完全性の関係）。したがってすべての <InlineMath math="i" /> について <InlineMath math="|\lambda_i|^2 = 1" /> となり、<strong>固有値は絶対値1の複素数（単位円周上の点）</strong>。
                    </li>
                </ul>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§13.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>実対称行列のスペクトル分解は、そのまま複素数の世界の「<strong>正規行列（<InlineMath math="AA^* = A^*A" />）</strong>」へと自然に拡張される。</li>
                    <li>正規行列は、「完全な直交（エルミート）射影群による分解形式（<InlineMath math="A = \sum \lambda_i P_i" />）」をもつ行列として再定義することもできる（Theorem 13.2-1）。</li>
                    <li>この分解を通すと、<InlineMath math="A^*" /> の計算は「射影はそのままで、固有値だけを複素共役（<InlineMath math="\overline{\lambda_i}" />）にする」という非常に見通しの良い操作になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
