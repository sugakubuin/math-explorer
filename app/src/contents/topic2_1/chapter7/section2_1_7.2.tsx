import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function JordanCellsAndNormalForm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、代数的重複度分の「一般化固有ベクトル」を集めれば、常に <InlineMath math="n" /> 本の基底を確保できることがわかりました。<br />
                基底を確保できたのであれば、それを用いて行列 <InlineMath math="A" /> を表現行列に変換（相似変換）することができます。<br />
                一般化固有ベクトルの「鎖」の性質に基づいて基底を選んだとき、そこに現れる極めて規則的で美しいブロック行列、それが<strong>ジョルダン標準形</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ジョルダン細胞</h2>

            <p>
                まずはジョルダン標準形を構成する最小単位（パーツ）である「ジョルダン細胞」を定義します。
            </p>

            <ContentBox type="definition" title="Definition 7.2-1 （ジョルダン細胞 / Jordan Block）">
                <p>
                    スカラー <InlineMath math="\lambda" /> を対角成分に持ち、そのすぐ一つ上（副対角成分）に <InlineMath math="1" /> が並び、それ以外のすべての成分が <InlineMath math="0" /> であるような <InlineMath math="k \times k" /> 正方行列を、<InlineMath math="\lambda" /> に対するサイズ <InlineMath math="k" /> の<strong>ジョルダン細胞（あるいはジョルダンブロック）</strong>と呼び、<InlineMath math="J(\lambda, k)" /> などと表す。
                </p>
                <BlockMath math="J(\lambda, k) = \begin{pmatrix} \lambda & 1 & 0 & \dots & 0 \\ 0 & \lambda & 1 & \dots & 0 \\ 0 & 0 & \lambda & \ddots & \vdots \\ \vdots & \vdots & \ddots & \ddots & 1 \\ 0 & 0 & \dots & 0 & \lambda \end{pmatrix} \quad (k \times k \text{ 行列})" />
                <p>
                    ※ <InlineMath math="k=1" /> のジョルダン細胞は、単なる1成分の行列 <InlineMath math="(\lambda)" /> である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="一般化固有ベクトルの鎖とジョルダン細胞の関係">
                <p>
                    なぜ「1つ上に1が並ぶ」のでしょうか。<br />
                    前節で見た、<InlineMath math="k" /> 本の一般化固有ベクトルからなる鎖 <InlineMath math="\{ \boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_k \}" /> を思い出してください。（<InlineMath math="\boldsymbol{v}_1" /> が真の固有ベクトルです。）<br />
                    この鎖は <InlineMath math="(A - \lambda I)\boldsymbol{v}_j = \boldsymbol{v}_{j-1}" /> を満たしていました。これを変形すると、
                </p>
                <BlockMath math="A\boldsymbol{v}_j = \lambda\boldsymbol{v}_j + \boldsymbol{v}_{j-1} \quad (j=2, \dots, k)" />
                <BlockMath math="A\boldsymbol{v}_1 = \lambda\boldsymbol{v}_1" />
                <p>
                    となります。<br />
                    この <InlineMath math="k" /> 本のベクトルをそのまま基底として採用し、行列 <InlineMath math="A" /> によってどのように変換されるかを眺めてみると…
                </p>
                <div className="overflow-x-auto text-sm">
                    <BlockMath math="\begin{aligned}
                                        &A(\boldsymbol{v}_1, \boldsymbol{v}_2, \boldsymbol{v}_3, \dots, \boldsymbol{v}_k) \\ 
                                        &= (\boldsymbol{v}_1, \boldsymbol{v}_2, \boldsymbol{v}_3, \dots, \boldsymbol{v}_k) \begin{pmatrix} \lambda & 1 & 0 & \dots & 0 \\ 0 & \lambda & 1 & \dots & 0 \\ 0 & 0 & \lambda & \ddots & \vdots \\ \vdots & \vdots & \ddots & \ddots & 1 \\ 0 & 0 & \dots & 0 & \lambda \end{pmatrix}
                                    \end{aligned}" />
                </div>
                <p>
                    そう、表現行列がまさに<strong>ジョルダン細胞そのもの</strong>になるのです！<br />
                    ジョルダン細胞の「上の列の 1」は、鎖の中で「一つ下のランクのベクトルに飛び移る」という操作を表現しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ジョルダン標準形</h2>

            <p>
                ジョルダン細胞を「ブロック」として対角線上に並べたものがジョルダン標準形です。
            </p>

            <ContentBox type="definition" title="Definition 7.2-2 （ジョルダン標準形 / Jordan Normal Form）">
                <p>
                    いくつかのジョルダン細胞 <InlineMath math="J_1, J_2, \dots, J_m" /> を対角線上にブロックとして並べ、それ以外の成分をすべて <InlineMath math="0" /> とした次のようなブロック対角行列 <InlineMath math="J" /> を<strong>ジョルダン標準形</strong>と呼ぶ。
                </p>
                <BlockMath math="J = \begin{pmatrix} J_1 & & & \huge{0} \\ & J_2 & & \\ & & \ddots & \\ \huge{0} & & & J_m \end{pmatrix}" />
                <p>
                    （ここで、各 <InlineMath math="J_i" /> は必ずしも同じ固有値を持たなくてもよく、サイズもバラバラでよい。）
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 7.2-1 （ジョルダン標準形の存在と一意性）">
                <p>
                    複素数を成分とする任意の <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> に対して、必ずある正則行列 <InlineMath math="P" /> が存在して、<InlineMath math="P^{-1} A P" /> が<strong>ジョルダン標準形</strong>になる。<br />
                    すなわち、あるジョルダン標準形 <InlineMath math="J" /> を用いて
                </p>
                <BlockMath math="P^{-1} A P = J" />
                <p>
                    と変形（相似変換）できる。
                </p>
                <p>
                    また、このジョルダン標準形 <InlineMath math="J" /> の形は、対角線上に並ぶジョルダン細胞の「順番の違い」を除いて<strong>完全に一意（Unique）</strong>に決まる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (Sketch)">
                <p>
                    Theorem 7.1-1 により、<InlineMath math="\mathbb{C}^n" /> は各固有値の広義固有空間の直和に分解される。<InlineMath math="\mathbb{C}^n = \bigoplus \widetilde{W}(\lambda_i)" />。<br />
                    したがって、各々の <InlineMath math="\widetilde{W}(\lambda_i)" /> 内部だけで独立にジョルダン細胞を構成できることを示せばよい。
                </p>
                <p>
                    <InlineMath math="\widetilde{W}(\lambda_i)" /> 上で、線形変換 <InlineMath math="N = A - \lambda_i I" /> を考える。<br />
                    これは広義固有空間の定義から、あるべき乗でゼロ行列になる「べき零行列」である（<InlineMath math="N^m = 0" />）。<br />
                    べき零行列に対しては、ベクトル <InlineMath math="\boldsymbol{v}" /> に対して <InlineMath math="N^{k-1}\boldsymbol{v} \neq \boldsymbol{0}" /> だが <InlineMath math="N^k\boldsymbol{v} = \boldsymbol{0}" /> となるような「鎖」（巡回部分空間）を構成でき、それらの組み合わせて空間全体を直和分解できるという定理がある（巡回分解定理）。
                </p>
                <p>
                    この鎖のそれぞれが、前述の Remark で見たように表現行列としてジョルダン細胞を形成する。<br />
                    これらをすべて集めて並べることで、全体としてジョルダン標準形 <InlineMath math="J" /> が得られる。順番の違いについては、用いる鎖（基底）を並べる順番を変えれば対角ブロックの順番が変わるだけであるため、本質的には一意である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="対角行列はジョルダン標準形の「特別なケース」">
                <p>
                    ジョルダン標準形において、<strong>「使われているすべてのジョルダン細胞のサイズが <InlineMath math="1 \times 1" /> である」</strong>場合を想像してみてください。<br />
                    サイズ1のジョルダン細胞は、ただの「<InlineMath math="\lambda" />」という1成分だけです。これを対角線上に並べると…そう、真上に <InlineMath math="1" /> が存在しない、完全な<strong>「対角行列」</strong>になります。
                </p>
                <p>
                    つまり、<strong>完全な対角化は「すべてのジョルダンブロックがサイズ1である」という、ジョルダン標準形におけるとても幸運な特別ケース</strong>だったといえます。<br />
                    ジョルダン標準形こそが、相似変換においてあらゆる行列を美しく分類・表現できる「真の最終到達点」なのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>対角に固有値、その一つ上に <InlineMath math="1" /> が並ぶブロック行列を<strong>ジョルダン細胞</strong>という（Definition 7.2-1）。これは、一般化固有ベクトルの鎖による表現行列になっている。</li>
                    <li>ジョルダン細胞を対角線上に並べた形を<strong>ジョルダン標準形</strong>という（Definition 7.2-2）。</li>
                    <li><strong>すべての行列</strong>は（複素数の範囲で）必ずジョルダン標準形に変形できる。これを保証するのが Theorem 7.2-1 である。対角化できる行列は、ジョルダン細胞がすべてサイズ1の中の特別なケースにすぎない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
