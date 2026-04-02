import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function NonDiagonalizableExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「行列は対角化できれば非常に扱いやすい」ということを §6.2 で確認しました。<br />
                しかし、残念なことに<strong>すべての行列が対角化できるわけではありません。</strong><br />
                ここでは対角化が不可能な行列の典型例を観察し、なぜそれが対角化できないのか、そしてそれに対して線形代数学がどのように対処するのか（次章への導入）を見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対角化不可能な例</h2>

            <p>
                定理 6.1-1 によれば、対角化できない行列とは「ある固有値において、幾何的重複度が代数的重複度に届かない（真に小さい）」行列のことです。<br />
                そのような行列の最も代表的な例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 6.3-1 （対角化不可能な行列）">
                <p>次の行列 <InlineMath math="A" /> を対角化しようと試みます。</p>
                <BlockMath math="A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}" />

                <h3 className="text-lg font-bold mt-4 mb-2">Step 1: 特性方程式と固有値</h3>
                <p>まず固有値を求めます。</p>
                <BlockMath math="\det(A - \lambda I) = \det\begin{pmatrix} 2-\lambda & 1 \\ 0 & 2-\lambda \end{pmatrix}" />
                <BlockMath math="(2-\lambda)(2-\lambda) - 0 = (\lambda - 2)^2 = 0" />
                <p>
                    これより、固有値は <InlineMath math="\lambda = 2" />（重解）のみとなります。<br />
                    特性方程式の解として <InlineMath math="(t - 2)^2" /> と2乗になっているため、<strong>代数的重複度は 2</strong> です。
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">Step 2: 固有空間と幾何的重複度</h3>
                <p>次に、この重解 <InlineMath math="\lambda = 2" /> に対する固有ベクトルを求めます。<br /><InlineMath math="(A - 2I)\boldsymbol{v} = \boldsymbol{0}" /> を解きます。</p>
                <BlockMath math="\begin{pmatrix} 2-2 & 1 \\ 0 & 2-2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} y \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
                <p>
                    この式から得られる条件は <InlineMath math="y = 0" /> のみです。<InlineMath math="x" /> は任意なので、固有ベクトルは次のように表されます。
                </p>
                <BlockMath math="\boldsymbol{p} = \begin{pmatrix} c \\ 0 \end{pmatrix} = c \begin{pmatrix} 1 \\ 0 \end{pmatrix} \quad (c \neq 0)" />
                <p>
                    よって、固有空間 <InlineMath math="W(2)" /> を張る基底は <InlineMath math="\begin{pmatrix} 1 \\ 0 \end{pmatrix}" /> の<strong>1本しかありません（次元が1）。</strong><br />
                    したがって、<strong>幾何的重複度は 1</strong> となります。
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">結論</h3>
                <p>
                    固有値 <InlineMath math="\lambda = 2" /> において、
                </p>
                <BlockMath math="\text{幾何的重複度 (1)} < \text{代数的重複度 (2)}" />
                <p>
                    となっているため、定理 6.1-1 の条件を満たしません。<br />
                    2次元空間を張るための変換行列 <InlineMath math="P" /> を作るには2本の独立な固有ベクトルが必要ですが、1本しか見つからないため <InlineMath math="P" /> を構成することができません。したがって、この行列は<strong>対角化不可能</strong>です。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ジョルダン標準形の動機</h2>

            <p>
                では、Example 6.3-1 のような「対角化できない行列」に遭遇した場合、私たちはどのように対処すればよいのでしょうか。ここで線形代数の歩みは止まってしまうのでしょうか。
            </p>

            <ContentBox type="remark" title="究極の「妥協案」：ジョルダン標準形">
                <p>
                    行列の振る舞いを分析する上で「対角行列」に変換できるのが理想（ベスト）ですが、上で見たように固有ベクトルが足りない（縮退している）行列ではそれは不可能です。
                </p>
                <p>
                    そこで数学者たちは、<strong>「完全な対角行列にはできないけれど、考え得る限り対角行列に最も近い、これ以上はシンプルにできない究極の形」</strong>を考え出しました。<br />
                    それが次章で学ぶ<strong>ジョルダン標準形（Jordan Normal Form）</strong>です。
                </p>
                <p className="mt-4">
                    例えば、先ほどの Example 6.3-1 の行列 <InlineMath math="\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}" /> は、実はこれ自身が「ジョルダン標準形」と呼ばれる形の一つになっています。<br />
                    対角成分に固有値が並び、その右上の成分に「<InlineMath math="1" />」が配置されています。これが、対角行列になりきれなかった行列が妥協して行き着く「最もシンプルな形」なのです。
                </p>
                <p className="mt-4 font-bold text-slate-900 dark:text-slate-100">
                    すべての行列は対角化可能ではありませんが、「すべての行列はジョルダン標準形になら変形できる」という極めて強力な定理が存在します。<br />
                    （Chapter 7 へ続く）
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>特性方程式が重解を持つ場合、そこから得られる独立な固有ベクトルの数（幾何的重複度）が、その重解の数（代数的重複度）に届かない行列が存在する。</li>
                    <li>そのような行列は、空間全体の基底となるだけの固有ベクトルを集めることができないため、<strong>対角化不可能</strong>である（Example 6.3-1）。</li>
                    <li>対角化できない行列であっても、対角行列に限りなく近い<strong>ジョルダン標準形</strong>と呼ばれる究極の標準形に相似変換することが可能である（次章で詳述）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
