import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TaylorsTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で証明した平均値定理は、「関数の値の差 <InlineMath math="f(x) - f(a)" /> を、一階微分 <InlineMath math="f'(c)" /> と幅 <InlineMath math="(x - a)" /> を用いて表す」というものでした。これは関数を「1次式（直線）で近似したときの誤差評価」と見なすことができます。
                この考え方を高階の微分（2回、3回、…、<InlineMath math="n" />階微分可能）へと自然に拡張したものが、微積分学における最強の近似ツールのひとつ、<strong>テイラーの定理</strong>（Taylor's Theorem）です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">テイラーの定理と剰余項</h2>

            <p>
                関数 <InlineMath math="f(x)" /> が十分な回数微分可能であるとき、点 <InlineMath math="a" /> の周りでの振る舞いを多項式で近似しようとする試みが「テイラー展開（テイラー多項式）」です。
                実解析において極めて重要なのは、無限級数として展開できるかどうかを問う前に、「有限回（<InlineMath math="n" /> 次）で打ち切ったときに生じる誤差（剰余項）が厳密にどう表せるか」を評価することです。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (テイラーの定理)">
                <p>
                    関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, b]" /> 上で <InlineMath math="n" /> 回連続微分可能（<InlineMath math="f \in C^n([a, b])" />）、かつ開区間 <InlineMath math="(a, b)" /> 上で <InlineMath math="(n+1)" /> 回微分可能であるとする。
                    このとき、開区間 <InlineMath math="(a, b)" /> 内に点 <InlineMath math="c" /> が存在して、次の等式が成り立つ。
                </p>
                <BlockMath math="\begin{aligned} f(b) &= f(a) + f'(a)(b - a) + \frac{1}{2!}f''(a)(b - a)^2 + \cdots \\ &\quad + \frac{1}{n!}f^{(n)}(a)(b - a)^n + \frac{1}{(n+1)!}f^{(n+1)}(c)(b - a)^{n+1} \\ &\quad (ただし a < c < b) \end{aligned}" />
                <p>
                    この公式の最後の項 <InlineMath math="R_{n+1} = \frac{1}{(n+1)!}f^{(n+1)}(c)(b - a)^{n+1}" /> を<strong>ラグランジュの剰余項</strong>（Lagrange remainder）と呼ぶ。
                    （<InlineMath math="n = 0" /> とすると、まさにラグランジュの平均値定理そのものである。）
                </p>
            </ContentBox>

            <p>
                この定理は、点 <InlineMath math="a" /> における関数の情報（値、1階微分、2階微分、…、<InlineMath math="n" />階微分）だけを知っていれば、離れた点 <InlineMath math="x = b" /> における関数の値を <InlineMath math="n" /> 次多項式で表現でき、その「誤差（剰余）」が <InlineMath math="(n+1)" /> 階微分を用いた非常にシンプルな形で表されることを主張しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明の概略 (コーシーの平均値定理からのアプローチ)</h2>

            <p>
                証明の手法はいくつかありますが、ここでは前節で紹介したコーシーの平均値定理を繰り返し（入れ子式に）適用することで、<InlineMath math="f(a)" /> 周りの <InlineMath math="f(b)" /> の剰余項の形を自然に導き出す方法を紹介します。
            </p>

            <ContentBox type="proof" title="証明の概略 (テイラーの定理)">
                <p>
                    便宜上、変数 <InlineMath math="b" /> を一般の <InlineMath math="x" /> に置き換え、剰余項を <InlineMath math="R(x)" /> とする。すなわち
                </p>
                <BlockMath math="f(x) = \left( \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k \right) + R(x)" />
                <p>
                    とする。このとき、関数本体から多項式部分を引いたものが剰余関数 <InlineMath math="R(x)" /> である。
                    多項式の構成法から、点 <InlineMath math="a" /> において <InlineMath math="R(a) = 0" />、および <InlineMath math="n" /> 階までの微分がすべて <InlineMath math="0" /> となることが容易に確認できる。すなわち
                </p>
                <BlockMath math="R(a) = R'(a) = R''(a) = \dots = R^{(n)}(a) = 0" />
                <p>
                    である。また <InlineMath math="R^{(n+1)}(x) = f^{(n+1)}(x)" /> （多項式部分は高階微分で消えるため）である。
                </p>
                <p className="mt-4">
                    ここで、補助的な関数 <InlineMath math="g(x) = (x - a)^{n+1}" /> を用意する。この関数も <InlineMath math="g(a) = g'(a) = \dots = g^{(n)}(a) = 0" /> であり、<InlineMath math="g^{(n+1)}(x) = (n+1)!" /> である。
                </p>
                <p className="mt-4">
                    区間 <InlineMath math="[a, x]" /> において、<InlineMath math="R(t)" /> と <InlineMath math="g(t)" /> の2つの関数に対してコーシーの平均値定理（Theorem 6.2-3）を適用する。
                    <InlineMath math="R(a)=0, g(a)=0" /> なので、ある <InlineMath math="c_1 \in (a, x)" /> が存在して、
                </p>
                <BlockMath math="\frac{R(x)}{g(x)} = \frac{R(x) - R(a)}{g(x) - g(a)} = \frac{R'(c_1)}{g'(c_1)}" />
                <p>
                    となる。<br />
                    次に、区間 <InlineMath math="[a, c_1]" /> で <InlineMath math="R'(t)" /> と <InlineMath math="g'(t)" /> に対して再びコーシーの平均値定理を適用する。<InlineMath math="R'(a)=0, g'(a)=0" /> なので、ある <InlineMath math="c_2 \in (a, c_1)" /> が存在して、
                </p>
                <BlockMath math="\frac{R'(c_1)}{g'(c_1)} = \frac{R'(c_1) - R'(a)}{g'(c_1) - g'(a)} = \frac{R''(c_2)}{g''(c_2)}" />
                <p>
                    となる。この操作を <InlineMath math="(n+1)" /> 回繰り返すと、最終的に <InlineMath math="c_{n+1} \in (a, c_n)" /> が存在して
                </p>
                <BlockMath math="\frac{R(x)}{g(x)} = \frac{R^{(n+1)}(c_{n+1})}{g^{(n+1)}(c_{n+1})}" />
                <p>
                    に行き着く。<InlineMath math="c = c_{n+1}" /> とおくと、<InlineMath math="a < c < x" /> である。また <InlineMath math="g^{(n+1)}(x) = (n+1)!" /> であり、<InlineMath math="R^{(n+1)}(c) = f^{(n+1)}(c)" /> であるから、
                </p>
                <BlockMath math="\frac{R(x)}{(x - a)^{n+1}} = \frac{f^{(n+1)}(c)}{(n+1)!}" />
                <p>
                    整理すると <InlineMath math="R(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}" /> となり、これがまさに求めるラグランジュの剰余項である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">テイラー展開と解析関数</h2>

            <p>
                誤差である剰余項 <InlineMath math="R_n(x)" /> を評価し、<InlineMath math="n \to \infty" /> の極限で <InlineMath math="R_n(x) \to 0" /> になることが証明できれば、最初の多項式近似は無限項の「ベキ級数」となり、元あった関数と完全に一致します。これを<strong>テイラー展開</strong>（点 <InlineMath math="a=0" /> の場合はマクローリン展開）と呼びます。
            </p>

            <ContentBox type="remark" title="無限回の微分可能性と解析性">
                <p>
                    「<InlineMath math="n" />階まで微分できる」ことは実解析において非常によく要求される条件であり、何回でも（無限に）微分できる関数を <InlineMath math="C^{\infty}" /> 関数と呼びます。例えば <InlineMath math="\sin(x), \cos(x), e^x" /> などは計算すれば明らかなように <InlineMath math="C^{\infty}" /> 関数です。
                </p>
                <p className="mt-4">
                    しかし、実数の世界では「<InlineMath math="C^{\infty}" /> だからといって、必ずテイラー展開（無限級数）できるとは限らない」という驚くべき事実があります。例えば、
                </p>
                <BlockMath math="f(x) = \begin{cases} e^{-1/x^2} & (x \neq 0) \\ 0 & (x = 0) \end{cases}" />
                <p>
                    という関数は、原点 <InlineMath math="x=0" /> で無限回微分可能であり、なんとすべての階の微分係数が <InlineMath math="f^{(n)}(0) = 0" /> になります。
                    そのため、この関数の原点周りでのテイラー級数は <InlineMath math="0 + 0x + 0x^2 + \dots" /> となり、「恒等的に 0」という結果になります。元の関数 <InlineMath math="f(x)" /> とは <InlineMath math="x=0" /> 以外では全く一致しておらず、近似（展開）に失敗しているのです。これは剰余項 <InlineMath math="R_n(x)" /> が 0 に収束しないためです。
                </p>
                <p className="mt-4">
                    このように、テイラー級数展開が元の関数と一致する関数だけを特別に<strong>解析関数</strong>（Analytic function）と呼びます。<InlineMath math="C^{\infty}" /> の集合の中に、さらに行儀の良い（剰余項が消える）解析関数の集合が含まれるという構造になっています。複素関数の世界（Topic 2-4）へ進むと、この「1回微分可能ならば自動的に解析的になる」という決定的な違いが生じます。
                </p>
            </ContentBox>

            <p>
                以上で、関数の局所的な「情報（微分係数）」を使って大域的な「値」を近似する最も強力な構造、テイラーの定理の議論を終えます。
                次節 §6.4 では、微分理論の応用として直感的に非常に馴染み深い「ロピタルの定理」の厳密な証明を行います。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>テイラーの定理は、平均値定理を高階微分による多項式近似へと一般化したものである。</li>
                    <li>多項式として近似した際の誤差（ラグランジュの剰余項）は、平均値定理を用いて厳密に評価できる。</li>
                    <li>無限回微分可能な関数（<InlineMath math="C^{\infty}" />）であっても、すべての関数がテイラー級数展開できるわけではない（例：<InlineMath math="e^{-1/x^2}" />）。剰余項がゼロに収束する関数を解析的と呼ぶ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
