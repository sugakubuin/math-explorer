import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function SpectralDecompositionTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「行列を対角化できる」ということは、行列のもつ性質を理解する上で非常に強力な武器でした。<br />
                本章では、この対角化可能性を<strong>「空間の直交射影の和（スペクトル分解）」</strong>という全く新しい幾何学的な視点から捉え直します。これにより、行列のべき乗や逆行列だけでなく、「行列の指数関数（<InlineMath math="e^A" />）」といったより高度な「行列関数」への扉が開かれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直交射影による分解</h2>

            <p>
                Chapter 11のスペクトル定理において、実対称行列 <InlineMath math="A" /> は直交行列 <InlineMath math="Q" /> を用いて <InlineMath math="A = Q \Lambda Q^T" /> と直交対角化できることを見ました。<br />
                この式を、列ベクトル <InlineMath math="\boldsymbol{q}_i" /> を用いて書き下し直すと、驚くべき幾何学的構造が現れます。
            </p>

            <ContentBox type="theorem" title="Theorem 13.1-1 （スペクトル分解定理 / Spectral Decomposition Theorem）">
                <p>
                    <InlineMath math="n \times n" /> の実対称行列 <InlineMath math="A" /> の固有値を <InlineMath math="\lambda_1, \lambda_2, \dots, \lambda_k" />（重複を除いた相異なる値）、それぞれの固有空間に対する直交射影行列を <InlineMath math="P_1, P_2, \dots, P_k" /> とする。<br />
                    このとき、行列 <InlineMath math="A" /> は固有値と直交射影行列の線形結合として次のように<strong>ただ一通りに</strong>分解できる。
                </p>
                <BlockMath math="A = \lambda_1 P_1 + \lambda_2 P_2 + \dots + \lambda_k P_k = \sum_{i=1}^k \lambda_i P_i" />
                <p>
                    ここで、射影行列 <InlineMath math="P_i" /> は以下の重要な性質（分解系列の性質）を満たす。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="P_i^2 = P_i = P_i^T" /> （各 <InlineMath math="P_i" /> は直交射影行列である）</li>
                    <li><InlineMath math="i \neq j" /> ならば <InlineMath math="P_i P_j = O" /> （異空間への射影は互いに直交するため、連続して射影すると零行列になる）</li>
                    <li><InlineMath math="P_1 + P_2 + \dots + P_k = I" /> （すべての固有空間への射影を足し合わせると、元の空間全体を覆う恒等変換（完全性の関係）になる）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    対称行列 <InlineMath math="A" /> の重複を込めた固有値を並べた対角行列を <InlineMath math="\Lambda" />、対応する正規直交な固有ベクトルを列とする直交行列を <InlineMath math="Q = (\boldsymbol{q}_1, \boldsymbol{q}_2, \dots, \boldsymbol{q}_n)" /> とする。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>
                        <InlineMath math="A = Q \Lambda Q^T" /> を列ベクトルと行ベクトルの積へと展開する。
                        <BlockMath math="A = (\boldsymbol{q}_1, \boldsymbol{q}_2, \dots, \boldsymbol{q}_n) \begin{pmatrix} \lambda_1 & & O \\ & \ddots & \\ O & & \lambda_n \end{pmatrix} \begin{pmatrix} \boldsymbol{q}_1^T \\ \boldsymbol{q}_2^T \\ \vdots \\ \boldsymbol{q}_n^T \end{pmatrix}" />
                        <BlockMath math="= \lambda_1 \boldsymbol{q}_1 \boldsymbol{q}_1^T + \lambda_2 \boldsymbol{q}_2 \boldsymbol{q}_2^T + \dots + \lambda_n \boldsymbol{q}_n \boldsymbol{q}_n^T = \sum_{i=1}^n \lambda_i \boldsymbol{q}_i \boldsymbol{q}_i^T" />
                    </li>
                    <li>
                        ここで、<InlineMath math="\boldsymbol{q}_i \boldsymbol{q}_i^T" /> は、ノルムが1のベクトル <InlineMath math="\boldsymbol{q}_i" /> が張る1次元の空間への<strong>（直交）射影行列</strong>である。
                    </li>
                    <li>
                        重複する固有値がある場合、同じ固有値 <InlineMath math="\lambda" /> に属するいくつかの <InlineMath math="\boldsymbol{q}_i \boldsymbol{q}_i^T" /> の和を一つの行列 <InlineMath math="P_\lambda" /> にまとめる。この <InlineMath math="P_\lambda" /> は、固有値 <InlineMath math="\lambda" /> の固有空間全体への直交射影行列となる。<br />
                        結果として、相異なる固有値 <InlineMath math="\lambda_1, \dots, \lambda_k" /> に対する射影行列 <InlineMath math="P_1, \dots, P_k" /> を用いて <InlineMath math="A = \sum_{i=1}^k \lambda_i P_i" /> と書ける。
                    </li>
                    <li>
                        各性質の確認：
                        <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                            <li><InlineMath math="P_i^2 = P_i" /> は射影行列の定義より明らか。</li>
                            <li><InlineMath math="\boldsymbol{q}_i" /> たちは互いに直交している（<InlineMath math="\boldsymbol{q}_i^T \boldsymbol{q}_j = 0" />）ので、<InlineMath math="(\boldsymbol{q}_i \boldsymbol{q}_i^T)(\boldsymbol{q}_j \boldsymbol{q}_j^T) = \boldsymbol{q}_i (\boldsymbol{q}_i^T \boldsymbol{q}_j) \boldsymbol{q}_j^T = 0" /> となり <InlineMath math="P_i P_j = O" />。</li>
                            <li>完全性の関係 <InlineMath math="\sum P_i = I" /> は、<InlineMath math="\sum \boldsymbol{q}_i \boldsymbol{q}_i^T = Q Q^T = I" /> （直交行列の性質）から直ちに従う。</li>
                        </ul>
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スペクトル分解の一意性</h2>

            <p>
                スペクトル分解が「行列の指紋」とも呼ばれるのは、この分解が（対角化の際の固有ベクトルの選び方のように自由度を持たず）その行列に対して本質的に一意的であるためです。
            </p>

            <ContentBox type="proposition" title="Proposition 13.1-1 （スペクトル分解の一意性）">
                <p>
                    ある行列 <InlineMath math="A" /> が、互いに異なるスカラー <InlineMath math="\mu_1, \dots, \mu_m" /> と、性質 1~3（<InlineMath math="P_i^2 = P_i, P_i P_j = O, \sum P_i = I" />）を満たす零でない行列の組み <InlineMath math="P_1', \dots, P_m'" /> を用いて
                    <BlockMath math="A = \sum_{i=1}^m \mu_i P_i'" />
                    と書けたと仮定する。このとき、<InlineMath math="\mu_i" /> は必ず <InlineMath math="A" /> の固有値（その全体）と一致し、対応する <InlineMath math="P_i'" /> はその固有空間への直交射影になり、分解はスペクトル分解と完全に一致する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1~3の性質を満たす行列群による分解が、必然的に固有値分解であることを示す。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>
                        任意の <InlineMath math="j \in \{1, \dots, m\}" /> を選び、方程式の両辺に右から <InlineMath math="P_j'" /> を掛ける。
                        <BlockMath math="AP_j' = \left( \sum_{i=1}^m \mu_i P_i' \right) P_j' = \sum_{i=1}^m \mu_i (P_i' P_j')" />
                    </li>
                    <li>
                        仮定より <InlineMath math="i \neq j" /> のときは <InlineMath math="P_i' P_j' = O" /> であり、<InlineMath math="i = j" /> のときは <InlineMath math="P_j' P_j' = P_j'" /> であるため、和の中で生き残るのは <InlineMath math="i = j" /> の項だけである。
                        <BlockMath math="AP_j' = \mu_j P_j'" />
                    </li>
                    <li>
                        <InlineMath math="P_j' \neq O" /> であるから、ある成分が非零のベクトル <InlineMath math="\boldsymbol{x}" /> を用いて <InlineMath math="\boldsymbol{v} = P_j' \boldsymbol{x} \neq \boldsymbol{0}" /> とできる。<br />
                        このとき <InlineMath math="A\boldsymbol{v} = A(P_j'\boldsymbol{x}) = (AP_j')\boldsymbol{x} = (\mu_j P_j')\boldsymbol{x} = \mu_j \boldsymbol{v}" /> となる。<br />
                        これは <InlineMath math="\mu_j" /> が必ず <InlineMath math="A" /> の固有値であり、<InlineMath math="\boldsymbol{v}" />（すなわち <InlineMath math="P_j'" /> の像）が固有ベクトルであることを示している。
                    </li>
                    <li>
                        完全性の関係 <InlineMath math="\sum P_j' = I" /> により、任意のベクトル <InlineMath math="\boldsymbol{y}" /> は <InlineMath math="\boldsymbol{y} = I\boldsymbol{y} = \sum P_j'\boldsymbol{y}" /> のように固有ベクトルの和で表される。つまり空間全体はこれら <InlineMath math="P_j'" /> の像（固有空間）の直和になっている。<br />
                        以上により、このような分解構造は「固有値と固有空間への射影」以外あり得ない（一意的である）ことが証明された。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <ContentBox type="remark" title="「スペクトル（Spectrum）」の語源">
                <p>
                    「スペクトル」とは、元々は光の波長（色）の成分を分解したものです（プリズムを通した虹や、元素の輝線スペクトルなど）。<br />
                    行列の「スペクトル分解」も、これと全く同じ発想です。複雑な行列（光）による変換を、いくつかの基本的な「色（固有空間という特定の方向）」へと分離し、それぞれの色がどれほどの「強さ（固有値 <InlineMath math="\lambda_i" />）」で現れるかを分析する、極めて物理的で美しい解釈なのです。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§13.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>実対称行列は、異なる固有値ごとの「固有空間への直交射影 <InlineMath math="P_i" />」を用いて、その和 <InlineMath math="A = \sum \lambda_i P_i" /> の形に分解できる（<strong>スペクトル分解</strong>）。</li>
                    <li>この分解に現れる射影行列たちは、「自身を2乗しても変わらない（<InlineMath math="P_i^2 = P_i" />）」「互いに積をとると消える（<InlineMath math="P_i P_j = O" />）」「すべて足すと恒等行列（<InlineMath math="\sum P_i = I" />）」という強力な代数構造を持つ。</li>
                    <li>スペクトル分解は行列にとって本質的であり、ただ一通りにしか分解できない（一意性）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
