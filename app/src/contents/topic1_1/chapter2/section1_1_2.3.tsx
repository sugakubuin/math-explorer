import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function TransposeMatrix() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                行列の行と列を入れ替える操作を<strong>転置</strong>といいます。
                一見単純な操作ですが、行列の性質を調べる上で非常に重要な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 転置行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">転置行列</h2>

            {/* Definition 2.3-1 */}
            <ContentBox type="definition" title="Definition 2.3-1 （転置行列）">
                <p>
                    <InlineMath math="m \times n" /> 行列 <InlineMath math="A" /> の行と列を入れ替えてできる <InlineMath math="n \times m" /> 行列を、
                    <InlineMath math="A" /> の<strong>転置行列</strong>（transpose matrix）といい、<InlineMath math="{}^t A" /> や <InlineMath math="A^T" /> と表す。
                </p>
                <p>
                    成分で書けば、<InlineMath math="A = [a_{ij}]" /> のとき、<InlineMath math="{}^t A" /> の <InlineMath math="(i, j)" /> 成分は <InlineMath math="a_{ji}" /> となる。
                </p>
            </ContentBox>

            {/* Example 2.3-1 */}
            <ContentBox type="example" title="Example 2.3-1">
                <p>次の行列の転置行列を求めよ。</p>
                <BlockMath math="A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>
                    1行目の <InlineMath math="(1, 2, 3)" /> を1列目に、2行目の <InlineMath math="(4, 5, 6)" /> を2列目に並べる。
                </p>
                <BlockMath math="{}^t A = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}" />
            </ContentBox>

            <h3 className="text-xl font-bold mt-10 mb-4">転置行列の性質</h3>

            {/* Theorem 2.3-1 */}
            <ContentBox type="theorem" title="Theorem 2.3-1 （転置行列の性質）">
                <ol className="list-decimal list-inside space-y-2">
                    <li><InlineMath math="{}^t({}^t A) = A" /></li>
                    <li><InlineMath math="{}^t(A + B) = {}^t A + {}^t B" /></li>
                    <li><InlineMath math="{}^t(kA) = k({}^t A)" /></li>
                    <li>
                        <strong>積の転置</strong>: <InlineMath math="{}^t(AB) = {}^t B {}^t A" />
                        <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">（※ 順序が逆転することに注意）</span>
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof （積の転置について）">
                <p>
                    <InlineMath math="A" /> を <InlineMath math="l \times m" />、<InlineMath math="B" /> を <InlineMath math="m \times n" /> 行列とする。
                    <InlineMath math="C = AB" /> とおくと、<InlineMath math="C" /> の <InlineMath math="(i, j)" /> 成分は <InlineMath math="\sum_{k=1}^m a_{ik}b_{kj}" /> である。
                </p>
                <p>
                    一方、<InlineMath math="{}^t C = {}^t(AB)" /> の <InlineMath math="(i, j)" /> 成分は、<InlineMath math="C" /> の <InlineMath math="(j, i)" /> 成分なので、
                    <BlockMath math="\sum_{k=1}^m a_{jk}b_{ki} = \sum_{k=1}^m b_{ki}a_{jk}" />
                    となる。
                </p>
                <p>
                    他方、<InlineMath math="{}^t B {}^t A" /> の <InlineMath math="(i, j)" /> 成分を考える。
                    <InlineMath math="{}^t B" /> の <InlineMath math="(i, k)" /> 成分は <InlineMath math="b_{ki}" />、
                    <InlineMath math="{}^t A" /> の <InlineMath math="(k, j)" /> 成分は <InlineMath math="a_{jk}" /> なので、
                    <BlockMath math="\sum_{k=1}^m ({}^t B)_{ik} ({}^t A)_{kj} = \sum_{k=1}^m b_{ki} a_{jk}" />
                    となり、両者は一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 対称行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">対称行列</h2>

            <p>
                転置しても変わらない行列は、非常に綺麗な性質を持ちます。
            </p>

            {/* Definition 2.3-2 */}
            <ContentBox type="definition" title="Definition 2.3-2 （対称行列）">
                <p>
                    <InlineMath math="{}^t A = A" /> を満たす正方行列 <InlineMath math="A" /> を<strong>対称行列</strong>（symmetric matrix）という。
                </p>
                <p>
                    成分で言えば、任意の <InlineMath math="i, j" /> について <InlineMath math="a_{ij} = a_{ji}" /> が成り立つ行列である。
                    対角成分を軸として対称な形をしている。
                </p>
            </ContentBox>

            {/* Example 2.3-2 */}
            <ContentBox type="example" title="Example 2.3-2">
                <p>次の行列は対称行列である。</p>
                <BlockMath math="A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{pmatrix}" />
                <p>
                    <InlineMath math="a_{12}=a_{21}=2" />、<InlineMath math="a_{13}=a_{31}=3" />、<InlineMath math="a_{23}=a_{32}=5" /> となっていることを確認せよ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark （交代行列）">
                <p>
                    一方、<InlineMath math="{}^t A = -A" /> を満たす行列を<strong>交代行列</strong>（skew-symmetric matrix）といいます。
                    このとき対角成分はすべて <InlineMath math="0" /> になります（<InlineMath math="a_{ii} = -a_{ii} \implies 2a_{ii}=0 \implies a_{ii}=0" />）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>転置行列 <InlineMath math="{}^t A" /></strong>: 行と列を入れ替えたもの。</li>
                    <li><strong>積の転置</strong>: <InlineMath math="{}^t(AB) = {}^t B {}^t A" /> （順序逆転）。</li>
                    <li><strong>対称行列</strong>: <InlineMath math="{}^t A = A" /> となる行列。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
