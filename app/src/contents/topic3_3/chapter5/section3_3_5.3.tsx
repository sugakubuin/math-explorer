import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TonelliTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                多重積分において最も強力なツールは「積分の順序交換」です。
                <b>トネリの定理</b>は、非負値可測関数であれば、常に積分の順序を自由に入れ替えても良いという、非常に使い勝手の良い定理です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">トネリの定理 (Tonelli's Theorem)</h2>

            <p>
                非負値関数に限定することで、可積分性を気にする必要がなくなり、純粋に計算の順序のみに集中できます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1 (トネリの定理)">
                <p>
                    <InlineMath math="(X, \mathcal{A}, \mu)" /> と <InlineMath math="(Y, \mathcal{B}, \nu)" /> を <InlineMath math="\sigma" />-有限な測度空間とする。
                    非負値可測関数 <InlineMath math="f: X \times Y \to [0, \infty]" /> に対して、次が成り立つ：
                    <BlockMath math="\begin{aligned} \int_{X \times Y} f \, d(\mu \otimes \nu) &= \int_X \left( \int_Y f(x, y) \, d\nu(y) \right) d\mu(x) \\ &= \int_Y \left( \int_X f(x, y) \, d\mu(x) \right) d\nu(y) \end{aligned}" />
                </p>
                <p className="mt-4">
                    特に、ある順序での逐次積分が無限大になる場合、それ以外の順序や直積空間上の積分もすべて無限大となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    まず <InlineMath math="f" /> が可測矩形の特性関数の場合から始め、次に非負単関数の場合に拡張する。
                    一般の非負値可測関数については、単調近似定理（Theorem 2.3-1）により単関数の増大列で近似し、単調収束定理（MCT, Theorem 3.3-1）を用いて極限をとることで結論を得る。
                    このとき、各ステップで逐次積分が可能であることを示すために、前節の切断の可測性が利用される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">面積計算への応用</h2>

            <p>
                トネリの定理は、集合の測度（面積）を計算する「カヴァリエリの原理」の抽象化と見なすことができます。
            </p>

            <ContentBox type="example" title="Example 5.3-1 (三角形の面積)">
                <p>
                    平面上の集合 <InlineMath math="E = \{ (x, y) \mid 0 \leq x \leq 1, 0 \leq y \leq x \}" /> のルベーグ測度を求める。
                    特性関数 <InlineMath math="\mathbf{1}_E" /> に対してトネリの定理を適用すると：
                    <BlockMath math="\lambda_2(E) = \int_0^1 \left( \int_0^x 1 \, dy \right) dx = \int_0^1 x \, dx = \frac{1}{2}" />
                    順序を入れ替えても：
                    <BlockMath math="\lambda_2(E) = \int_0^1 \left( \int_y^1 1 \, dx \right) dy = \int_0^1 (1 - y) \, dy = \frac{1}{2}" />
                    当然ながら一致する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="非負性の重要性">
                <p>
                    トネリの定理において「非負値」であるという仮定は、積分の順序交換において「絶対収束」を暗に保証していることに相当します。
                    負の値を含む一般の関数の場合は、そのままでは交換できず、次節で学ぶ<b>フビニの定理</b>の条件を満たす必要があります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>トネリの定理</b> は、非負値可測関数において直積積分と逐次積分の等価性を保証する。</li>
                    <li>この定理は、次節のフビニの定理を適用する前の「可積分性のチェック」において極めて重要である。</li>
                    <li>単調近似定理と測度の連続性を用いて、特性関数から段階的に証明される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
