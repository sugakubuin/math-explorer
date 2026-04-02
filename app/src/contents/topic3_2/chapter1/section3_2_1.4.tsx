import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TopologyOfComplexPlane() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析において「関数が微分可能である」といった性質を厳密に論じるためには、複素平面上の点同士が「どれくらい近いか」を扱う数学的な枠組みが必要です。
                実解析と同様に、複素平面上でも「近傍」や「開集合」といった位相幾何学的な概念を定義し、関数の定義域（領域）を明確にします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">距離と近傍</h2>

            <p>
                複素数 <InlineMath math="z" /> と <InlineMath math="w" /> の「距離」は、その差の絶対値として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (距離と ε-近傍)">
                <p>
                    複素数 <InlineMath math="z" /> と <InlineMath math="w" /> の間の<strong>距離 (distance)</strong> を次のように定義する：
                    <BlockMath math="d(z, w) = |z - w|" />
                    点 <InlineMath math="z_0" /> を中心とする半径 <InlineMath math="\varepsilon > 0" /> の<strong>ε-近傍 (neighborhood)</strong> とは、次のような開円板のことである：
                    <BlockMath math="B(z_0, \varepsilon) = \{ z \in \mathbb{C} \mid |z - z_0| < \varepsilon \}" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">開集合・閉集合・領域</h2>

            <p>
                これらの概念を用いて、複素平面上の集合の「性質」を分類します。
            </p>

            <ContentBox type="definition" title="Definition 1.4-2 (開集合・閉集合)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <strong>開集合 (open set)</strong>：
                        集合 <InlineMath math="U \subset \mathbb{C}" /> の任意の点 <InlineMath math="z \in U" /> に対して、その点の近傍 <InlineMath math="B(z, \varepsilon)" /> がまるごと <InlineMath math="U" /> に含まれるような <InlineMath math="\varepsilon > 0" /> が存在するとき、<InlineMath math="U" /> を開集合という。
                    </li>
                    <li>
                        <strong>閉集合 (closed set)</strong>：
                        その補集合 <InlineMath math="\mathbb{C} \setminus F" /> が開集合であるとき、集合 <InlineMath math="F" /> を閉集合という。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="definition" title="Definition 1.4-3 (領域：Domain)">
                <p>
                    空でない<strong>連結開集合</strong>（ひとつながりになっている開集合）を、複素解析における<strong>領域 (domain)</strong> と呼ぶ。
                    複素関数の定義域としては、通常この「領域」を考える。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有界性とコンパクト性</h2>

            <p>
                複素解析の多くの定理（リュービルの定理や最大値原理など）において、集合が「有界」であるか、あるいは「コンパクト」であるかが決定的な役割を果たします。
            </p>

            <ContentBox type="definition" title="Definition 1.4-4 (有界集合)">
                <p>
                    集合 <InlineMath math="S \subset \mathbb{C}" /> に対して、ある実数 <InlineMath math="M > 0" /> が存在して、すべての <InlineMath math="z \in S" /> に対して <InlineMath math="|z| \le M" /> が成り立つとき、<InlineMath math="S" /> は<strong>有界 (bounded)</strong> であるという。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 1.4-1 (ハイネ・ボレルの定理)">
                <p>
                    複素平面上の部分集合 <InlineMath math="S" /> に対して、次が成り立つ：
                    <BlockMath math="S \text{ がコンパクト} \iff S \text{ が有界閉集合である}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    複素平面 <InlineMath math="\mathbb{C}" /> は、距離空間としてユークリッド平面 <InlineMath math="\mathbb{R}^2" /> と同型である。
                    実解析における「ハイネ・ボレルの定理」によれば、<InlineMath math="\mathbb{R}^n" /> の部分集合がコンパクトであるための必要十分条件は、それが有界閉集合であることである。
                    <InlineMath math="n=2" /> の場合を適用することで、複素平面上においても同様の主張が成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="実解析との対応">
                <p>
                    複素平面 <InlineMath math="\mathbb{C}" /> はベクトル空間（および位相空間）として <InlineMath math="\mathbb{R}^2" /> と同型です。
                    したがって、関数の連続性、最大・最小値の存在、ボルツァーノ・ワイエルシュトラスの定理といった実解析における基本的な位相的性質は、そのまま複素平面上でも通用します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ε-近傍</strong>：点 <InlineMath math="z_0" /> の周りの小さな「開円板」。解析の基本的な単位。</li>
                    <li><strong>開集合と閉集合</strong>：集合がその境界を含まない（内点のみ）か、境界をすべて含むか。</li>
                    <li><strong>領域 (Domain)</strong>：つながっている開集合。複素関数の「活動舞台」。</li>
                    <li><strong>コンパクト集合</strong>：有界かつ閉な集合。この上では連続関数は必ず最大値・最小値を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
