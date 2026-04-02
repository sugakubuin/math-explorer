import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ProductSigmaAlgebra() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで、一つの測度空間上の積分を考えてきました。
                しかし、現実の多くの問題（例えば 2 次元平面上の面積や、複数変数の同時分布など）を扱うためには、複数の測度空間を組み合わせて新しい測度空間を構成する必要があります。
                本節では、その第一歩として、集合族の直積構造について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可測矩形と直積 σ-加法族</h2>

            <p>
                二つの可測空間 <InlineMath math="(X, \mathcal{A})" /> と <InlineMath math="(Y, \mathcal{B})" /> が与えられたとき、それらの直積集合 <InlineMath math="X \times Y" /> 上に自然な可測構造を導入します。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (可測矩形)">
                <p>
                    <InlineMath math="A \in \mathcal{A}" /> および <InlineMath math="B \in \mathcal{B}" /> に対して、直積集合の形をしている部分集合
                    <BlockMath math="A \times B = \{ (x, y) \in X \times Y \mid x \in A, y \in B \}" />
                    を <b>可測矩形 (可測長方形, measurable rectangle)</b> と呼ぶ。
                </p>
            </ContentBox>

            <p className="mt-6">
                可測矩形の全体は必ずしも <InlineMath math="\sigma" />-加法族をなさないため、それらから生成される最小の <InlineMath math="\sigma" />-加法族を考えます。
            </p>

            <ContentBox type="definition" title="Definition 5.1-2 (直積 σ-加法族)">
                <p>
                    すべての可測矩形の族 <InlineMath math="\{ A \times B \mid A \in \mathcal{A}, B \in \mathcal{B} \}" /> によって生成される <InlineMath math="X \times Y" /> 上の <InlineMath math="\sigma" />-加法族を <b>直積 <InlineMath math="\sigma" />-加法族</b> と呼び、<InlineMath math="\mathcal{A} \otimes \mathcal{B}" /> と表記する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1 (2次元ボレル集合族)">
                <p>
                    実数直線上のボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> を考える。
                    このとき、直積 <InlineMath math="\sigma" />-加法族 <InlineMath math="\mathcal{B}(\mathbb{R}) \otimes \mathcal{B}(\mathbb{R})" /> は、2 次元平面上のボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R}^2)" /> と一致する。
                    <BlockMath math="\mathcal{B}(\mathbb{R}) \otimes \mathcal{B}(\mathbb{R}) = \mathcal{B}(\mathbb{R}^2)" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">射影の可測性</h2>

            <p>
                直積空間から各成分への「影」をとる操作（射影）は、直積 <InlineMath math="\sigma" />-加法族において可測となります。
            </p>

            <ContentBox type="proposition" title="Proposition 5.1-1 (射影の可測性)">
                <p>
                    射影写像 <InlineMath math="\pi_X: X \times Y \to X, \ (x, y) \mapsto x" /> および <InlineMath math="\pi_Y: X \times Y \to Y, \ (x, y) \mapsto y" /> は、<InlineMath math="\mathcal{A} \otimes \mathcal{B}" />-可測である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の <InlineMath math="A \in \mathcal{A}" /> に対し、<InlineMath math="\pi_X^{-1}(A) = A \times Y" /> である。
                    <InlineMath math="Y \in \mathcal{B}" /> なので、<InlineMath math="A \times Y" /> は可測矩形であり、定義より <InlineMath math="\mathcal{A} \otimes \mathcal{B}" /> に属する。
                    したがって <InlineMath math="\pi_X" /> は可測である。<InlineMath math="\pi_Y" /> についても同様。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="切断の可測性">
                <p>
                    直積空間上の集合 <InlineMath math="E \in \mathcal{A} \otimes \mathcal{B}" /> に対して、その「スライス（切断）」
                    <InlineMath math="E_x = \{ y \in Y \mid (x, y) \in E \}" /> もまた各成分の可測空間において可測となります。
                    これは、次節で扱うトネリ・フビニの定理における「逐次積分」の正当性を支える重要な性質です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>可測矩形</b> は各成分の可測集合の直積形式をとる集合である。</li>
                    <li><b>直積 <InlineMath math="\sigma" />-加法族</b> は、すべての可測矩形から生成される。</li>
                    <li>2 次元ボレル集合族は、1 次元ボレル集合族の直積として構成できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
