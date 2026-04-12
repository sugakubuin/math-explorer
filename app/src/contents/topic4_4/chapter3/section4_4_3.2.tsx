import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SubdifferentialExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では劣微分と劣勾配の基本的な定義を学びました。本節では、凸解析において頻繁に現れる代表的な凸関数（ノルム、最大値関数、指示関数など）に対する劣微分の具体的な計算例を見ていきます。
                これらの具体例を通じて、微分不可能な点における劣微分の振る舞いや、幾何学的な意味合いについての理解を深めていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ノルムの劣微分</h2>

            <p>
                まずは、最適化問題の正則化項としてもよく用いられるノルム関数の劣微分を計算します。ノルムは原点において微分不可能ですが、凸関数であるため全空間で劣微分を持ちます。
            </p>

            <ContentBox type="example" title="Example 3.2-1">
                <p>
                    ユークリッドノルム <InlineMath math="f(x) = \|x\|_2" /> の劣微分を考えます。
                </p>
                <p>
                    <InlineMath math="x \neq 0" /> のとき、<InlineMath math="f(x)" /> は微分可能であり、その勾配は劣勾配と一致します。
                </p>
                <BlockMath math="\partial f(x) = \left\{ \frac{x}{\|x\|_2} \right\}" />
                <p>
                    一方、<InlineMath math="x = 0" /> のとき、劣勾配の定義より、任意の <InlineMath math="y \in \mathbb{R}^n" /> に対して以下の不等式を満たす <InlineMath math="g" /> の集合を求めます。
                </p>
                <BlockMath math="f(y) \geq f(0) + \langle g, y - 0 \rangle \iff \|y\|_2 \geq \langle g, y \rangle"
                />
                <p>
                    コーシー・シュワルツの不等式 <InlineMath math="\langle g, y \rangle \leq \|g\|_2 \|y\|_2" /> を用いると、この不等式がすべての <InlineMath math="y" /> で成り立つための必要十分条件は <InlineMath math="\|g\|_2 \leq 1" /> であることがわかります。したがって、原点での劣微分は単位球となります。
                </p>
                <BlockMath math="\partial f(0) = \{ g \in \mathbb{R}^n \mid \|g\|_2 \leq 1 \}" />
            </ContentBox>

            <p>
                次に、スパースモデリングなどで重要な役割を果たす <InlineMath math="\ell_1" />-ノルムの劣微分を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.2-2">
                <p>
                    <InlineMath math="\ell_1" />-ノルム <InlineMath math="f(x) = \|x\|_1 = \sum_{i=1}^n |x_i|" /> の劣微分を計算します。
                    この関数は各成分ごとに独立して考えることができます。各成分 <InlineMath math="x_i" /> に関する絶対値関数 <InlineMath math="|x_i|" /> の劣勾配 <InlineMath math="g_i" /> は、前節の計算例から次のように与えられます。
                </p>
                <ul>
                    <li><InlineMath math="x_i > 0" /> のとき、<InlineMath math="g_i = 1" /></li>
                    <li><InlineMath math="x_i < 0" /> のとき、<InlineMath math="g_i = -1" /></li>
                    <li><InlineMath math="x_i = 0" /> のとき、<InlineMath math="g_i \in [-1, 1]" /></li>
                </ul>
                <p>
                    したがって、<InlineMath math="\partial f(x)" /> はこれらの各成分の条件を満たすベクトル <InlineMath math="g = (g_1, \dots, g_n)^T" /> の集合として表現されます。
                </p>
            </ContentBox>

            <p>
                これらの例からわかるように、ノルム関数の劣微分は、原点においては単位球（あるいはその変種）となり、関数の形状を特徴づける重要な情報を含んでいます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最大値関数と指示関数の劣微分</h2>

            <p>
                続いて、複数の関数の最大値をとって作られる最大値関数と、集合の制約を表現する指示関数の劣微分について考えます。
            </p>

            <ContentBox type="example" title="Example 3.2-3">
                <p>
                    最大値関数 <InlineMath math="f(x) = \max(f_1(x), f_2(x))" /> を考えます（<InlineMath math="f_1, f_2" /> は凸関数）。
                    点 <InlineMath math="x" /> における劣微分は、その点で「活性」な（すなわち <InlineMath math="f_i(x) = f(x)" /> となる）関数の劣微分の凸包として表されます。
                </p>
                <p>
                    例えば、<InlineMath math="f(x) = \max(x, -x) = |x|" /> の <InlineMath math="x = 0" /> での計算を考えてみましょう。<InlineMath math="x = 0" /> では両方の関数が活性です（<InlineMath math="0 = -0 = 0" />）。
                    <InlineMath math="f_1(x) = x" /> の劣微分は <InlineMath math="\{1\}" />、<InlineMath math="f_2(x) = -x" /> の劣微分は <InlineMath math="\{-1\}" /> です。
                </p>
                <BlockMath math="\partial f(0) = \mathrm{conv}\{1, -1\} = [-1, 1]"
                />
                <p>
                    これは、前節で直接計算した絶対値関数の原点での劣微分と完全に一致しています。
                </p>
            </ContentBox>

            <p>
                次に、凸集合 <InlineMath math="C" /> の指示関数 <InlineMath math="\delta_C(x)" /> の劣微分を計算します。これは制約付き最適化において非常に重要な意味を持ちます。
            </p>

            <ContentBox type="example" title="Example 3.2-4">
                <p>
                    凸集合 <InlineMath math="C" /> の指示関数 <InlineMath math="\delta_C(x)" /> の劣微分 <InlineMath math="\partial \delta_C(x)" /> を考えます。
                </p>
                <p>
                    <InlineMath math="x \notin C" /> のとき、関数値は <InlineMath math="+\infty" /> なので劣微分は定義されません（空集合）。
                    <InlineMath math="x \in C" /> のとき、劣勾配の定義 <InlineMath math="\delta_C(y) \geq \delta_C(x) + \langle g, y - x \rangle" /> を考えます。<InlineMath math="y \notin C" /> の場合は左辺が <InlineMath math="+\infty" /> となり自明に成立します。
                    <InlineMath math="y \in C" /> の場合、<InlineMath math="\delta_C(y) = 0" /> および <InlineMath math="\delta_C(x) = 0" /> なので、条件は以下のようになります。
                </p>
                <BlockMath math="0 \geq \langle g, y - x \rangle \quad (\forall y \in C)" />
                <p>
                    これはまさに、点 <InlineMath math="x" /> における集合 <InlineMath math="C" /> の<b>正規錐（normal cone）</b> <InlineMath math="N_C(x)" /> の定義に他なりません。したがって、以下の関係が成り立ちます。
                </p>
                <BlockMath math="\partial \delta_C(x) = N_C(x) = \{ g \in \mathbb{R}^n \mid \langle g, y - x \rangle \leq 0 \ \forall y \in C \}" />
                <p>
                    具体的な例として、半直線 <InlineMath math="C = [0, \infty)" /> で <InlineMath math="x = 0" /> のときを考えると、任意の <InlineMath math="y \geq 0" /> に対して <InlineMath math="g(y - 0) \leq 0" /> となるため、<InlineMath math="g \leq 0" /> となり、<InlineMath math="N_C(0) = (-\infty, 0]" /> と計算できます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="指示関数と正規錐の対応の重要性">
                <p>
                    指示関数の劣微分が正規錐 <InlineMath math="N_C(x)" /> に一致するという事実は、制約付き最適化問題における最適性条件（§3.5 で解説します）を導出する上で中心的な役割を果たします。制約付き問題 <InlineMath math="\min_{x \in C} f(x)" /> を無制約問題 <InlineMath math="\min_x f(x) + \delta_C(x)" /> に書き換えることで、劣微分の枠組みだけで制約の幾何学的性質（正規錐）を自然に抽出できるようになるためです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\|x\|_2" /> や <InlineMath math="\|x\|_1" /> などのノルムの劣微分は、原点においてそれぞれ単位球、あるいは成分ごとの区間の直積として具体的に計算できる。</li>
                    <li>最大値関数の微分不可能点での劣微分は、そこで活性となっている関数の劣微分の凸包となる。</li>
                    <li>凸集合の指示関数 <InlineMath math="\delta_C(x)" /> の劣微分は、その点における正規錐 <InlineMath math="N_C(x)" /> に一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
