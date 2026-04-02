import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SingularValueComputation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、任意の行列 <InlineMath math="A" /> は <InlineMath math="A = U \Sigma V^T" /> という形に特異値分解できることを見ました。
                本節では、特異値の具体的な計算方法について再確認し、特異値分解が幾何学的に何を意味しているのかを解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算方法</h2>

            <ContentBox type="proposition" title="Proposition 14.2-1 (特異値は A^T A の固有値の非負平方根)">
                <p className="leading-relaxed">
                    行列 <InlineMath math="A \in \mathbb{R}^{m \times n}" /> の特異値分解を <InlineMath math="A = U \Sigma V^T" /> とするとき、非ゼロの特異値 <InlineMath math="\sigma_i" /> の2乗 <InlineMath math="\sigma_i^2" /> は、対称行列 <InlineMath math="A^T A" /> および <InlineMath math="AA^T" /> の非ゼロの固有値と一致する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    まず <InlineMath math="A^T A" /> について考える。<InlineMath math="A = U \Sigma V^T" /> を代入すると、
                </p>
                <BlockMath math="A^T A = (U \Sigma V^T)^T (U \Sigma V^T) = V \Sigma^T U^T U \Sigma V^T" />
                <p className="leading-relaxed">
                    <InlineMath math="U" /> は直交行列なので <InlineMath math="U^T U = I" /> である。したがって、
                </p>
                <BlockMath math="A^T A = V \Sigma^T \Sigma V^T" />
                <p className="leading-relaxed">
                    が成り立つ。
                    両辺の右から <InlineMath math="V" /> を掛けると（あるいは <InlineMath math="V^{-1} = V^T" /> であることから）、
                </p>
                <BlockMath math="(A^T A) V = V (\Sigma^T \Sigma)" />
                <p className="leading-relaxed">
                    となる。
                    ここで、<InlineMath math="\Sigma^T \Sigma" /> は <InlineMath math="n \times n" /> の対角行列であり、その対角成分は <InlineMath math="\sigma_1^2, \sigma_2^2, \dots, \sigma_r^2, 0, \dots, 0" /> である。
                    これはまさに <InlineMath math="A^T A" /> の固有値分解の形をしており、非ゼロの固有値が <InlineMath math="\sigma_i^2" /> であることがわかる。
                </p>

                <p className="leading-relaxed mt-4">
                    次に <InlineMath math="A A^T" /> についても同様の計算を行う。
                </p>
                <BlockMath math="A A^T = (U \Sigma V^T) (U \Sigma V^T)^T = U \Sigma V^T V \Sigma^T U^T" />
                <p className="leading-relaxed">
                    <InlineMath math="V" /> も直交行列なので <InlineMath math="V^T V = I" /> であり、
                </p>
                <BlockMath math="A A^T = U \Sigma \Sigma^T U^T \iff (A A^T) U = U (\Sigma \Sigma^T)" />
                <p className="leading-relaxed">
                    となる。
                    <InlineMath math="\Sigma \Sigma^T" /> は <InlineMath math="m \times m" /> の対角行列であり、その非ゼロの対角成分は同様に <InlineMath math="\sigma_1^2, \dots, \sigma_r^2" /> である。
                    したがって、<InlineMath math="AA^T" /> の非ゼロの固有値も特異値の2乗に等しいことが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                計算方法がわかったところで、「SVDは結局何をしているのか」という幾何学的な視点で理解しておくことが重要です。
                特異値分解は、単なる行列の「因数分解」ではなく、線形写像の幾何学的意味を透明にするツールです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">幾何的解釈</h2>

            <ContentBox type="remark" title="特異値分解の幾何的解釈">
                <p className="leading-relaxed">
                    特異値分解 <InlineMath math="A = U \Sigma V^T" /> はベクトル <InlineMath math="\bm{x}" /> に対する行列 <InlineMath math="A" /> の作用 <InlineMath math="A\bm{x}" /> を3つのステップに分解できることを示しています。
                </p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>
                        <strong>回転（直交変換） <InlineMath math="V^T" />：</strong>
                        最初に <InlineMath math="V^T" /> が作用します。これは座標軸の回転（および鏡映）を意味します。<InlineMath math="\mathbb{R}^n" /> 内の単位球は、別の向きを向いた単位球に変換されます。
                    </li>
                    <li>
                        <strong>スケール変換（対角行列） <InlineMath math="\Sigma" />：</strong>
                        次に、対角行列 <InlineMath math="\Sigma" /> が作用します。これは各座標軸方向に対して <InlineMath math="\sigma_i" /> 倍の引き伸ばし（または縮小）を行います。この操作により、単位球は超楕円体（ellipsoid）へと変形され、その各主軸の長さが特異値 <InlineMath math="\sigma_i" /> となります。このとき、余分な次元（<InlineMath math="m > n" /> の場合）は <InlineMath math="0" /> で埋められ、足りない次元（<InlineMath math="m < n" /> の場合）はつぶされます。
                    </li>
                    <li>
                        <strong>回転（直交変換） <InlineMath math="U" />：</strong>
                        最後に <InlineMath math="U" /> が作用し、できあがった超楕円体を <InlineMath math="\mathbb{R}^m" /> 空間内で再び回転（および鏡映）させ、最終的な姿勢を決定します。このときの楕円体の主軸の方向が、左特異ベクトルに対応します。
                    </li>
                </ol>
                <p className="leading-relaxed mt-2">
                    まとめると、「任意の線形写像は、ある直交座標系から別の直交座標系への<strong>各軸ごとのスケール変換</strong>として表現できる」というのがSVDの幾何学的真髄です。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§14.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>特異値 <InlineMath math="\sigma_i" /> の2乗は、<InlineMath math="A^T A" /> および <InlineMath math="AA^T" /> の非ゼロの固有値と一致する（Proposition 14.2-1）。</li>
                    <li>特異値分解は幾何学的に「回転 → スケール変換 → 回転」という3ステップの変換として解釈できる。</li>
                    <li>単位球が特異値分解によって超楕円体に変形され、その主軸の長さが特異値に対応する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
