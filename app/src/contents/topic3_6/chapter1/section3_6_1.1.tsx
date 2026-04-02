import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FunctionalsIntro() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに学んだ「関数」は、数（実数や複素数）を入力して数を返すものでした。
                しかし、物理学や幾何学では、「関数そのもの」を入力として受け取り、その特徴（長さ、面積、エネルギーなど）を数として返す仕組みが必要になります。
                この章では、このような「関数の関数」である<b>汎関数</b>の概念と、それを最適化する<b>変分問題</b>の基礎を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">汎関数の定義と例</h2>

            <p className="leading-relaxed">
                まず、汎関数の数学的な定義を確認しましょう。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (汎関数)">
                <p>
                    ある関数の集合（関数空間）<InlineMath math="\mathcal{A}" /> から実数集合 <InlineMath math="\mathbb{R}" /> への写像
                    <BlockMath math="J : \mathcal{A} \to \mathbb{R}" />
                    を<b>汎関数</b>（Functional）と呼ぶ。通常の関数 <InlineMath math="y = f(x)" /> の変数が「数」であるのに対し、汎関数 <InlineMath math="J[u]" /> の変数は「関数」である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-1 (弧長汎関数)">
                <p>
                    2 点を結ぶ平面曲線 <InlineMath math="y = u(x) \ (a \le x \le b)" /> の長さ <InlineMath math="J" /> は、次のような汎関数として表される：
                    <BlockMath math="J[u] = \int_a^b \sqrt{1 + (u'(x))^2} \, dx" />
                    例えば、<InlineMath math="[0, 1]" /> 上で <InlineMath math="u(x) = x" />（直線）のとき、その長さは <InlineMath math="J[u] = \int_0^1 \sqrt{1+1^2} \, dx = \sqrt{2}" /> となり、関数から一つの数が定まる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-2 (ディリクレ積分)">
                <p>
                    領域 <InlineMath math="\Omega" /> 上で定義された関数 <InlineMath math="u" /> に対して、次で定義される汎関数
                    <BlockMath math="J[u] = \int_{\Omega} |\nabla u|^2 \, dx" />
                    を<b>ディリクレ積分</b>（Dirichlet Integral）と呼ぶ。これは物理学における静電場のエネルギーや、弾性膜の歪みエネルギーに対応する極めて重要な汎関数である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="変分問題の一般形">
                <p>
                    変分法で扱う多くの汎関数は、関数 <InlineMath math="u(x)" /> とその導関数 <InlineMath math="u'(x)" /> を含む積分：
                    <BlockMath math="J[u] = \int_a^b F(x, u(x), u'(x)) \, dx" />
                    の形をとる。この被積分関数 <InlineMath math="F" /> を<b>ラグランジアン</b>（Lagrangian）と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">変分問題の設定</h2>

            <p className="leading-relaxed">
                汎関数が与えられたとき、その値を最小（または最大）にする関数を求める問題を<b>変分問題</b>と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (変分問題)">
                <p>
                    与えられた汎関数 <InlineMath math="J[u]" /> に対して、ある関数空間 <InlineMath math="\mathcal{A}" /> の中で
                    <BlockMath math="J[u^*] = \min_{u \in \mathcal{A}} J[u] \quad \text{または} \quad J[u^*] = \max_{u \in \mathcal{A}} J[u]" />
                    を満たす関数 <InlineMath math="u^*" /> を見つける問題を、<b>変分問題</b>（Variational Problem）と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                歴史的に有名な変分問題の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-3 (最短経路問題)">
                <p>
                    2 点 <InlineMath math="(a, \alpha)" /> と <InlineMath math="(b, \beta)" /> を結ぶ曲線のうち、弧長 <InlineMath math="J[u]" /> を最小にするものを求める問題である。
                    直感的には「直線」が解であることが予想されるが、これを変分法という数学の枠組みで厳密に導出することが本章の目的の一つである。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-4 (最小曲面問題)">
                <p>
                    与えられた閉曲線を境界（フレーム）に持つ曲面のうち、その面積を最小にする曲面を求める問題である。
                    物理的には、針金で作った枠を石鹸液に浸したときにできる<b>石鹸膜</b>（Soap Film）が、この最小曲面問題を解いていることに相当する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="最適化との違い">
                <p>
                    変分問題は、高校で学ぶ「関数の極大・極小」の無限次元版と考えることができる。
                    有限次元では「勾配ベクトルがゼロ」という条件で候補を探すが、変分問題では「<b>第一変分</b>がゼロ」という条件から導かれる<b>オイラー＝ラグランジュ方程式</b>（次章で詳述）がその役割を果たす。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、これらの変分問題を数学的に厳密に解くために必要な、関数空間（許容関数クラス）や境界条件の適切な設定について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>汎関数とは、関数を入力として数値を返す写像である。</li>
                    <li>弧長汎関数やディリクレ積分は、幾何学や物理学における代表的な汎関数の例である。</li>
                    <li>変分問題とは、汎関数を最小化（または最大化）する関数を特定する問題である。</li>
                    <li>最短経路問題や石鹸膜（最小曲面）などは、古典的かつ重要な変分問題の例である。</li>
                    <li>変分問題の解は、通常の最適化における極値条件を関数空間へ拡張することで求められる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
