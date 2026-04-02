import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VariationalProblemsOfMultipleVariables() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは、1 変数関数（曲線）を対象とした変分問題を考えてきました。
                しかし、現実の物理現象や幾何学的な問題の多くは、2 変数以上の関数（曲面や場）を対象としています。
                本章では、変分法を多変数へと拡張し、ラプラス方程式などの重要な偏微分方程式との深いつながりを明らかにします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多重積分汎関数の定義</h2>

            <p className="leading-relaxed">
                多変数関数の変分問題では、積分は線積分から重積分（あるいはそれ以上の多重積分）へと拡張されます。
            </p>

            <ContentBox type="definition" title="Definition 8.1-1 (多重積分汎関数)">
                <p>
                    2 変数関数 <InlineMath math="u(x, y)" /> とその偏導関数 <InlineMath math="u_x, u_y" /> を含む、領域 <InlineMath math="\Omega \subset \mathbb{R}^2" /> 上の汎関数を次のように定義する：
                    <BlockMath math="J[u] = \iint_\Omega F(x, y, u, u_x, u_y) \, dA" />
                    ここで、<InlineMath math="\Omega" /> は境界 <InlineMath math="\partial \Omega" /> が滑らかな有界領域であり、<InlineMath math="dA = dx dy" /> は面積要素である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この形式の汎関数は、物理学における「エネルギー」や、幾何学における「面積」を記述する際に現れます。
            </p>

            <ContentBox type="example" title="Example 8.1-1 (ディリクレ積分)">
                <p>
                    次の汎関数は<b>ディリクレ積分</b>（Dirichlet integral）と呼ばれ、解析学において極めて重要な役割を果たす。
                    <BlockMath math="J[u] = \frac{1}{2} \iint_\Omega (u_x^2 + u_y^2) \, dA = \frac{1}{2} \iint_\Omega |\nabla u|^2 \, dA" />
                    これは弾性膜の歪みエネルギーや低電圧の静電エネルギー、熱伝導の散逸率などに対応している。後に見るように、この積分を最小化する関数はラプラス方程式を満たす。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.1-2 (極小曲面の面積汎関数)">
                <p>
                    曲面 <InlineMath math="z = u(x, y)" /> の面積は、次の汎関数で与えられる。
                    <BlockMath math="J[u] = \iint_\Omega \sqrt{1 + u_x^2 + u_y^2} \, dA" />
                    これは石鹸膜が張る形状などをモデル化する際に用いられ、この最小化問題から導かれる曲面は「極小曲面」と呼ばれる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">境界条件の設定</h2>

            <p className="leading-relaxed">
                多変数の場合、境界条件は「点の値」ではなく、境界曲線上の「関数の値」として指定されます。
            </p>

            <ContentBox type="definition" title="Definition 8.1-2 (多変数の許容クラス)">
                <p>
                    領域の境界 <InlineMath math="\partial \Omega" /> 上で値が指定されている場合（ディリクレ型境界条件）、許容関数のクラスを次のように定める：
                    <BlockMath math="\mathcal{A} = \{ u \in C^2(\Omega) \cap C(\bar{\Omega}) \mid u = g \text{ on } \partial \Omega \}" />
                    また、変分方向 <InlineMath math="\eta(x, y)" /> は境界上で <InlineMath math="\eta = 0" /> を満たす必要がある。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="関数空間の問題と現代的アプローチ">
                <p>
                    実は、滑らかな関数 <InlineMath math="C^2" /> の範囲では、最小値が存在することを一般に証明するのは非常に困難です。
                    現代的な解析学では、この問題を克服するために、より広い関数空間である<b>ソボレフ空間</b>（Sobolev space） <InlineMath math="H^1(\Omega)" /> を導入し、そこで「弱解」を探索するという手法が取られます。
                    この深い議論については、後の「弱定式化」の節（§8.3）や、関数解析のコースで詳述されます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                多変数の場合でも、変分をゼロと置くことで、関数が満たすべき偏微分方程式を得ることができます。
                次節では、1 階の変分から多変数のオイラー＝ラグランジュ方程式を導出しましょう。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多変数の変分問題は、領域上の重積分汎関数の極値を探す問題である。</li>
                    <li>ディリクレ積分や面積汎関数は、多変数変分問題の最も代表的な例である。</li>
                    <li>境界条件は境界曲線全体で指定され、これが偏微分方程式の境界値問題へとつながる。</li>
                    <li>古典的な滑らかな解の存在には限界があり、ソボレフ空間を用いた現代的な理論への拡張が必要となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
