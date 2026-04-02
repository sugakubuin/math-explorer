import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HeatBoundaryValueProblem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                有限の長さを持つ棒の熱伝導を考える際には、両端の状態を指定する「境界条件」が解の振る舞いを決定づけます。
                本節では、第 5 章で学んだ<b>分離変数法</b>を熱方程式に適用し、
                熱が時間とともにどのように平滑化され、最終的にどのような平衡状態に達するかを考察します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ディリクレ境界条件での解</h2>

            <p className="leading-relaxed">
                両端を氷水（0度）に浸しているような、端点の温度を固定する条件を考えます。
            </p>

            <ContentBox type="example" title="Example 7.4-1 (ディリクレ境界値問題の解構成)">
                <p>
                    領域 <InlineMath math="0 < x < L" /> において、境界条件 <InlineMath math="u(0, t) = u(L, t) = 0" /> の下で <InlineMath math="u_t = k u_{xx}" /> を解く。
                    解を <InlineMath math="u(x, t) = X(x)T(t)" /> とおき変数分離を行うと、
                    <BlockMath math="X_n(x) = \sin\left(\frac{n\pi x}{L}\right), \quad T_n(t) = e^{-k\left(\frac{n\pi}{L}\right)^2 t} \quad (n=1, 2, \dots)" />
                    が得られる。初期温度分布を <InlineMath math="f(x)" /> とすると、一般解は
                    <BlockMath math="u(x, t) = \sum_{n=1}^\infty a_n \sin\left(\frac{n\pi x}{L}\right) e^{-k\left(\frac{n\pi}{L}\right)^2 t}" />
                    となる。ここで <InlineMath math="a_n" /> は <InlineMath math="f(x)" /> のフーリエ正弦展開係数である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="熱の「平滑化と均一化」">
                <p>
                    解の表示における指数部分 <InlineMath math="e^{-k(n\pi/L)^2 t}" /> に注目すると、高周波な成分（<InlineMath math="n" /> が大きいもの）ほど、急速に減衰することがわかる。
                    これにより、不規則な初期温度分布も時間が経つにつれて滑らかになり、最終的にはすべての点で <InlineMath math="u \to 0" />（端点と同じ温度）へと均一化される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ノイマン境界条件での解</h2>

            <p className="leading-relaxed">
                次に、棒の両端が断熱材で覆われており、熱が外部に逃げない場合（熱流束がゼロ）を考えます。
            </p>

            <ContentBox type="example" title="Example 7.4-2 (ノイマン境界値問題と平均温度)">
                <p>
                    境界条件 <InlineMath math="u_x(0, t) = u_x(L, t) = 0" /> の下では、固有関数は
                    <BlockMath math="X_n(x) = \cos\left(\frac{n\pi x}{L}\right) \quad (n=0, 1, 2, \dots)" />
                    となる。特に <InlineMath math="n=0" /> のとき、指数項を含む時間解は定数となる。
                    初期温度の平均値を <InlineMath math="a_0" /> とすると、解は次のように振る舞う：
                    <BlockMath math="u(x, t) = a_0 + \sum_{n=1}^\infty a_n \cos\left(\frac{n\pi x}{L}\right) e^{-k\left(\frac{n\pi}{L}\right)^2 t}" />
                    十分な時間が経過すると（<InlineMath math="t \to \infty" />）、和の項はすべて消滅し、棒全体の温度は一様に「初期温度の平均値」 <InlineMath math="a_0" /> に収束する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ディリクレ条件とノイマン条件の物理的な違い">
                <p>
                    ディリクレ条件は「外界（熱浴）と接触して温度が規定される」開いた系を表現しており、
                    最終的なエネルギーは外界との温度差に応じて失われたり得られたりする。
                    対してノイマン条件は「断熱された」閉じた系を表現しており、系内部の総エネルギー（総熱量）は保存される。
                    最終的に平均値に落ちつくのは、エネルギーが系内に留まったまま均一化した結果である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、熱方程式の解が空間全体において持つ非常に強力な制約条件である「最大値原理」と、
                それを用いた解の一意性の厳密な証明について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有限領域における熱方程式の解は、分離変数法によって固有関数の級数として構成できる。</li>
                    <li>ディリクレ条件（端点温度固定）では、解は最終的に境界の温度へ収束する。</li>
                    <li>ノイマン条件（断熱）では、解は最終的に初期状態の平均温度へ収束する。</li>
                    <li>どちらの条件においても、高周波な成分ほど速く減衰し、情報の平滑化（エントロピーの増大）が進行する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
