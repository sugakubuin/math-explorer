import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_7_1() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで、関数の極値（局所的な最大値・最小値）を求める問題は、変数が自由に動ける領域（開集合など）の内部で考えてきました。
                しかし、物理学や経済学、工学などの応用問題では、「ある条件を満たす範囲内で」関数を最大化あるいは最小化したいという状況が頻繁に現れます。
                このように、変数に制限が課された状態での極値問題を<strong>制約付き極値問題</strong>（Constrained Optimization Problem）と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">制約付き最適化問題</h2>

            <p>
                まず、制約付き極値問題の一般的な枠組みを数学的に定義しましょう。最も基本的なのは、制約条件が「等式」で与えられる場合です。これを<strong>等式制約付き最適化問題</strong>と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (等式制約付き最適化問題)">
                <p>
                    <InlineMath math="D \subset \mathbb{R}^n" /> を開集合とし、関数 <InlineMath math="f, g: D \to \mathbb{R}" /> が与えられているとする。
                    方程式 <InlineMath math="g(x_1, \dots, x_n) = 0" /> で定まる <InlineMath math="\mathbb{R}^n" /> の部分集合を <InlineMath math="S" /> とする。すなわち、
                </p>
                <BlockMath math="S = \{(x_1, \dots, x_n) \in D \mid g(x_1, \dots, x_n) = 0\}" />
                <p>
                    このとき、制約 <InlineMath math="S" /> の下で目的関数 <InlineMath math="f" /> の極値（最大値または最小値）を求める問題を<strong>等式制約付き極値問題（等式制約付き最適化問題）</strong>という。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="f" /> を<strong>目的関数</strong> (objective function) と呼ぶ。</li>
                    <li>方程式 <InlineMath math="g(x_1, \dots, x_n) = 0" /> を<strong>制約条件</strong> (constraint) と呼ぶ。</li>
                    <li>集合 <InlineMath math="S" /> を<strong>実行可能領域</strong> (feasible region) または<strong>制約多様体</strong> (constraint manifold) と呼ぶ。</li>
                </ul>
            </ContentBox>

            <p>
                多変数の場合、関数 <InlineMath math="g" /> が <InlineMath math="C^1" /> 級であり、<InlineMath math="\nabla g \neq \mathbf{0}" /> を満たすならば、陰関数定理により制約条件 <InlineMath math="g(x) = 0" /> は局所的に曲線や曲面といった「滑らかな図形（多様体）」を定めます。
                したがって、等式制約付き極値問題は「与えられた曲線や曲面上での関数の極値を求める問題」と捉えることができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">幾何学的動機</h2>

            <p>
                制約付き極値問題の解法について考えるために、2変数の場合（<InlineMath math="n=2" />）を幾何学的に考察してみましょう。
                目的関数 <InlineMath math="z = f(x, y)" /> を最大化し、制約条件として曲線 <InlineMath math="g(x, y) = 0" /> が与えられていると考えます。
            </p>

            <ContentBox type="remark" title="等高線と制約曲線の接触条件としての直感的理解">
                <p>
                    <InlineMath math="xy" /> 平面上に、目的関数 <InlineMath math="f(x, y)" /> の<strong>等高線</strong>（レベルセット <InlineMath math="f(x, y) = k" />）群と、制約条件を表す曲線 <InlineMath math="g(x, y) = 0" /> を描きます。
                </p>
                <p className="mt-2">
                    制約条件 <InlineMath math="g(x, y) = 0" /> の曲線上を点が移動するとき、対応する <InlineMath math="f(x, y)" /> の値は、その点がどの等高線上にあるかによって決まります。
                    <InlineMath math="f(x, y)" /> の最大値（または最小値）を求めることは、制約曲線上を動きながら、可能な限り「高い（または低い）」等高線に到達することに等しくなります。
                </p>
                <p className="mt-2">
                    もし、ある点 <InlineMath math="P(a, b)" /> で制約曲線が等高線を「横切って」いるならば、そこから曲線に沿って少し進むことで、さらに高い等高線や低い等高線に移動することができます。
                    したがって、極値をとる点においては、<strong>制約曲線と等高線は接している</strong>（接線を共有している）はずです。
                </p>
                <p className="mt-2">
                    2つの曲線 <InlineMath math="f(x, y) = k" /> と <InlineMath math="g(x, y) = 0" /> が点 <InlineMath math="(a, b)" /> で接するということは、その点における両者の法線ベクトルが平行であることと同じです。
                    関数の等高線の法線ベクトルは勾配ベクトル（グラディエント）<InlineMath math="\nabla f" /> と等しいですから、極値をとる点 <InlineMath math="(a, b)" /> では、以下のように2つの勾配ベクトルが平行にならなければなりません：
                </p>
                <BlockMath math="\nabla f(a, b) = \lambda \nabla g(a, b)" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （ただし、<InlineMath math="\lambda" /> はある実数の定数です）
                </p>
            </ContentBox>

            <p>
                この「目的関数の勾配ベクトルと制約関数の勾配ベクトルが平行になる」という幾何学的な直感が、制約付き極値問題を解くための強力なツールである「ラグランジュの未定乗数法」の核心です。
                次節では、この直感的なアイデアを数学的に厳密化し、一般的な定理として証明します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>等式制約付き極値問題とは、制約条件 <InlineMath math="g(x_1, \dots, x_n) = 0" /> を満たす点全体の中で、目的関数 <InlineMath math="f(x_1, \dots, x_n)" /> の極値を求める問題である。</li>
                    <li>幾何学的には、関数の極値は「制約条件を表す図形」と「目的関数の等高面」が接する点で生じると考えられる。</li>
                    <li>この「接する」という条件は、2つの曲面の法線ベクトル（＝勾配ベクトル）<InlineMath math="\nabla f" /> と <InlineMath math="\nabla g" /> が平行になることとして定式化される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
