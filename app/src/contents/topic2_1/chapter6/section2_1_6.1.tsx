import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DiagonalizationConditions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                行列の振る舞いを最もシンプルに表現できる形、それが「対角行列」です。<br />
                対角行列は、対角線上に固有値が並び、それ以外の成分がすべて <InlineMath math="0" /> となる行列であり、各成分が互いに独立してスケール変換されるだけという極めて見通しの良い構造を持ちます。<br />
                一般の行列をこの対角行列に変換（相似変換）する操作を<strong>対角化（Diagonalization）</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対角化可能性の定義</h2>

            <p>
                すべての行列が対角化できるわけではなく、ある特定の条件を満たす必要があります。<br />
                まずは「対角化できる」ことの正確な定義を確認しましょう。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 （対角化可能 / Diagonalizable）">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> が<strong>対角化可能</strong>であるとは、ある正則行列（逆行列を持つ行列）<InlineMath math="P" /> が存在して、
                </p>
                <BlockMath math="P^{-1} A P = D" />
                <p>
                    （ただし <InlineMath math="D" /> は対角行列）と表せることである。
                </p>
                <p>
                    この式は、<InlineMath math="A P = P D" /> と変形して列クトルごとに比較すると、<InlineMath math="P" /> の各列が <InlineMath math="A" /> の<strong>固有ベクトル</strong>であり、<InlineMath math="D" /> の対角成分がそれぞれに対応する<strong>固有値</strong>であることがわかる。<br />
                    すなわち、「対角化可能」であることは、「<strong><InlineMath math="n" /> 個の線形独立な固有ベクトルが存在し、それらを行列の基底として選べること</strong>」と全く同じ意味になる。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対角化可能の必要十分条件</h2>

            <p>
                では、どのような行列なら「<InlineMath math="n" /> 本の独立な固有ベクトル」を確保できるのでしょうか。<br />
                その答えは、前章で学んだ「幾何的重複度」と「代数的重複度」の関係に隠されています。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 （対角化可能の必要十分条件）">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> の相異なる固有値を <InlineMath math="\lambda_1, \lambda_2, \dots, \lambda_k" /> とする。<br />
                    行列 <InlineMath math="A" /> が対角化可能であるための必要十分条件は、<strong>各固有値 <InlineMath math="\lambda_i" /> における「幾何的重複度」と「代数的重複度」が等しいこと</strong>である。つまり任意の <InlineMath math="i=1, 2, \dots, k" /> に対して、
                </p>
                <BlockMath math="\dim W(\lambda_i) = (\text{特性方程式における } \lambda_i \text{ の重解の個数})" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    行列 <InlineMath math="A" /> の代数的重複度の総和は、特性多項式が <InlineMath math="n" /> 次の多項式であるため（複素数の範囲で考えれば）常に <InlineMath math="n" /> に一致する。
                </p>
                <p className="font-bold mt-4">必要性の証明（対角化可能なら重複度が一致する）</p>
                <p>
                    <InlineMath math="A" /> が対角化可能であると仮定する。定義より、<InlineMath math="\mathbb{C}^n" /> の空間全体を張る <InlineMath math="n" /> 個の線形独立な固有ベクトルが存在する。<br />
                    固有値 <InlineMath math="\lambda_i" /> に対応する基底（独立な固有ベクトル）の数を <InlineMath math="d_i" /> 本とすると、全体の基底が <InlineMath math="n" /> 本あることから、
                </p>
                <BlockMath math="\sum_{i=1}^k d_i = n" />
                <p>
                    が成り立つ。ここで <InlineMath math="d_i" /> は固有値 <InlineMath math="\lambda_i" /> に属する線形独立な固有ベクトルの数なので、定義によりこれは幾何的重複度 <InlineMath math="\dim W(\lambda_i)" /> に他ならない（<InlineMath math="d_i \leq \dim W(\lambda_i)" /> だが基底として <InlineMath math="n" /> 本取れているので一致する）。<br />
                    一方、Proposition 5.4-1 より、常に「幾何的重複度 <InlineMath math="\leq" /> 代数的重複度」が成り立つ。すべての <InlineMath math="i" /> について <InlineMath math="d_i \leq (\text{代数的重複度}_i)" /> であり、かつ代数的重複度の総和も <InlineMath math="n" /> である。
                </p>
                <p>
                    総和が同じ <InlineMath math="n" /> になり、かつ各要素ごとに <InlineMath math="\leq" /> が成り立っているため、どこかで <InlineMath math="<" />（真に小さい）になるとつじつまが合わなくなる（合計が <InlineMath math="n" /> に届かない）。<br />
                    したがって、すべての <InlineMath math="i" /> に対して「幾何的重複度 <InlineMath math="=" /> 代数的重複度」でなければならない。
                </p>

                <p className="font-bold mt-4">十分性の証明（重複度が一致すれば対角化可能）</p>
                <p>
                    すべての <InlineMath math="i" /> に対して「幾何的重複度 <InlineMath math="=" /> 代数的重複度」が成り立つと仮定する。<br />
                    代数的重複度の総和は常に <InlineMath math="n" /> であるため、幾何的重複度もすべて足し合わせると <InlineMath math="n" /> になる。<br />
                    これは、「各固有空間 <InlineMath math="W(\lambda_i)" /> の基底（固有ベクトル）をすべて合わせると、合計でちょうど <InlineMath math="n" /> 本ある」ことを意味する。
                </p>
                <p>
                    Theorem 5.5-1（異なる固有値の固有ベクトルの独立性）により、異なる固有空間から持ってきたベクトル同士は必ず線形独立である。<br />
                    したがって、各々の固有空間の基底を寄せ集めたこれら <InlineMath math="n" /> 本のベクトル全体も、互いに線形独立になる。<br />
                    <InlineMath math="n" /> 次元空間において <InlineMath math="n" /> 本の線形独立なベクトルが存在するということは、それが空間の基底になることを意味する。固有ベクトルからなる基底が存在するため、<InlineMath math="A" /> は対角化可能である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">十分条件</h2>

            <p>
                Theorem 6.1-1 から、非常に分かりやすく実用的な結果が「系」として直ちに導かれます。
            </p>

            <ContentBox type="theorem" title="Corollary 6.1-1 （すべて異なる固有値を持つ場合の対角化）">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> が <strong><InlineMath math="n" /> 個の「すべて異なる」固有値を持つ</strong>ならば、<InlineMath math="A" /> は必ず対角化可能である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    行列 <InlineMath math="A" /> が <InlineMath math="n" /> 個の異なる固有値を持つとする。<br />
                    このとき、各固有値 <InlineMath math="\lambda_i" /> の代数的重複度（特性方程式の解の重複度）はすべて <InlineMath math="1" /> である。<br />
                    Proposition 5.4-1 の「<InlineMath math="1 \leq (\text{幾何的重複度}) \leq (\text{代数的重複度})" />」という関係において、右辺が <InlineMath math="1" /> であるため、挟み撃ちにより
                </p>
                <BlockMath math="1 \leq \text{幾何的重複度} \leq 1 \quad \Rightarrow \quad \text{幾何的重複度} = 1" />
                <p>
                    となる。<br />
                    つまり、すべての固有値に対して「幾何的重複度 <InlineMath math="= 1 =" /> 代数的重複度」が成り立つ。Theorem 6.1-1 の必要十分条件を満たすため、<InlineMath math="A" /> は直ちに対角化可能である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="注意点">
                <p>
                    「<InlineMath math="n" /> 個の異なる固有値を持つ」ことは対角化できるための<strong>十分条件</strong>であって、必要条件ではありません。<br />
                    すなわち、固有値に重解があったとしても（代数的重複度が <InlineMath math="2" /> 以上だとしても）、それに対応する幾何的重複度（見つかる独立な固有ベクトルの数）がそれと同じ数だけしっかりと存在していれば、その行列は対角化可能です。（単位行列 <InlineMath math="I" /> はその極端な例です。）
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="n" /> 本の線形独立な固有ベクトルが存在するとき、行列は<strong>対角化可能</strong>という（Definition 6.1-1）。</li>
                    <li>対角化するためには、特性方程式が持つ重解の個数（代数的重複度）と全く同じ数だけの独立な固有ベクトル（幾何的重複度）が、それぞれの固有値について存在しなければならない（Theorem 6.1-1）。</li>
                    <li>特に、<InlineMath math="n" /> 個の固有値がすべてバラバラ（相異なる）であれば、必ず対角化できる（Corollary 6.1-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
