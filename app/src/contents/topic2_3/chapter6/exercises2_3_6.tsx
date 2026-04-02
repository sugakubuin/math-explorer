import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        関数 <InlineMath math="f(x)" /> が点 <InlineMath math="a" /> で<strong>微分可能</strong>であることの厳密な定義（ Definition 6.1-1 ）を述べよ。また、微分可能であれば必ず連続である（ Theorem 6.1-1 ）理由を簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            極限
                            <BlockMath math="\lim_{h \to 0} \frac{f(a+h) - f(a)}{h} \quad \text{または} \quad \lim_{x \to a} \frac{f(x) - f(a)}{x - a}" />
                            が有限な値として存在することである。
                        </p>
                        <p className="mt-2">
                            微分可能であれば連続である理由は、次の式変形による：
                            <BlockMath math="f(x) - f(a) = \frac{f(x) - f(a)}{x - a} \cdot (x - a)" />
                            ここで <InlineMath math="x \to a" /> のとき、右辺は <InlineMath math="f'(a) \cdot 0 = 0" /> に収束するため、<InlineMath math="\lim_{x \to a} f(x) = f(a)" /> が成り立つからである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        <strong>ラグランジュの平均値定理</strong>（ Theorem 6.2-2 ）の主張を、前提条件を含めて正確に記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, b]" /> 上で連続、開区間 <InlineMath math="(a, b)" /> 上で微分可能であるとき、開区間内に点 <InlineMath math="c \in (a, b)" /> が存在して
                            <BlockMath math="\frac{f(b) - f(a)}{b - a} = f'(c)" />
                            が成り立つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        <strong>テイラーの定理</strong>（ Theorem 6.3-1 ）における「ラグランジュの剰余項」の形を記せ。また、この定理が「平均値定理の一般化」と言える理由を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            剰余項 <InlineMath math="R_{n+1}" /> は次の通り：
                            <BlockMath math="R_{n+1} = \frac{f^{(n+1)}(c)}{(n+1)!}(b - a)^{n+1} \quad (a < c < b)" />
                        </p>
                        <p className="mt-2">
                            この定理で <InlineMath math="n = 0" /> とすると、
                            <BlockMath math="f(b) = f(a) + f'(c)(b - a) \implies \frac{f(b) - f(a)}{b - a} = f'(c)" />
                            となり、ラグランジュの平均値定理そのものに一致するため、一般化と見なせる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        絶対値関数 <InlineMath math="f(x) = |x|" /> が <InlineMath math="x = 0" /> で微分可能ではないことを、定義に基づいて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            微分係数の定義式の右側極限と左側極限を計算する。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>右側極限：<InlineMath math="\lim_{h \to +0} \frac{|0+h| - |0|}{h} = \lim_{h \to +0} \frac{h}{h} = 1" /></li>
                            <li>左側極限：<InlineMath math="\lim_{h \to -0} \frac{|0+h| - |0|}{h} = \lim_{h \to -0} \frac{-h}{h} = -1" /></li>
                        </ul>
                        <p className="mt-2">
                            左右の極限値が一致しないため、<InlineMath math="x = 0" /> における極限（微分係数）は存在しない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        平均値の定理を用いて、任意の <InlineMath math="x > 0" /> に対して <InlineMath math="\sin x < x" /> が成り立つことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(t) = \sin t" /> とし、区間 <InlineMath math="[0, x]" /> に平均値の定理を適用する。
                            <BlockMath math="\frac{\sin x - \sin 0}{x - 0} = \cos c \quad (0 < c < x)" />
                            より <InlineMath math="\sin x = x \cos c" /> を得る。
                        </p>
                        <p className="mt-2">
                            <InlineMath math="0 < c < x" /> において、<InlineMath math="x > 0" /> かつ <InlineMath math="\cos c < 1" /> であるから（<InlineMath math="x" /> が非常に大きい場合でも、原点付近の平均値定理の適用、あるいは <InlineMath math="\sin x \le 1" /> との比較で十分）、常に <InlineMath math="\sin x = x \cos c < x \cdot 1 = x" />。
                            よって <InlineMath math="\sin x < x" /> が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        ロピタルの定理（ Theorem 6.4-1 ）を繰り返し適用して、次の極限値を求めよ。
                        <BlockMath math="\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            分子・分母ともに <InlineMath math="x=0" /> で <InlineMath math="0" /> となる不定形（<InlineMath math="0/0" />）である。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>1回目の適用：<InlineMath math="\lim_{x \to 0} \frac{(e^x - 1 - x)'}{(x^2)'} = \lim_{x \to 0} \frac{e^x - 1}{2x}" /> （まだ <InlineMath math="0/0" />）</li>
                            <li>2回目の適用：<InlineMath math="\lim_{x \to 0} \frac{(e^x - 1)'}{(2x)'} = \lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}" /></li>
                        </ol>
                        <p className="mt-2">
                            よって、極限値は <InlineMath math="1/2" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        指数関数 <InlineMath math="f(x) = e^x" /> の原点周りでの <InlineMath math="n" /> 次のテイラー多項式（マクローリン展開）を求め、剰余項 <InlineMath math="R_{n+1}" /> をラグランジュの形で記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f^{(k)}(x) = e^x" /> より <InlineMath math="f^{(k)}(0) = 1" /> であるから、<InlineMath math="n" /> 次の多項式部分は：
                            <BlockMath math="P_n(x) = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!}" />
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            ラグランジュの剰余項は、ある <InlineMath math="0 < c < x" />（または <InlineMath math="x < c < 0" />）に対して：
                            <BlockMath math="R_{n+1} = \frac{e^c}{(n+1)!} x^{n+1}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        関数 <InlineMath math="f" /> が開区間 <InlineMath math="(a, b)" /> で微分可能であり、すべての <InlineMath math="x \in (a, b)" /> に対して <InlineMath math="f'(x) = 0" /> が成り立つならば、<InlineMath math="f" /> はこの区間上で定数関数であることを平均値の定理を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            区間内の任意の2点 <InlineMath math="x_1, x_2" /> （<InlineMath math="a < x_1 < x_2 < b" />）をとる。
                            閉区間 <InlineMath math="[x_1, x_2]" /> において関数 <InlineMath math="f" /> に平均値の定理を適用すると、ある <InlineMath math="c \in (x_1, x_2)" /> が存在して
                            <BlockMath math="\frac{f(x_2) - f(x_1)}{x_2 - x_1} = f'(c)" />
                            が成り立つ。
                        </p>
                        <p className="mt-2">
                            仮定より、すべての点において <InlineMath math="f'(x) = 0" /> であるから、当然 <InlineMath math="f'(c) = 0" /> である。
                            したがって <InlineMath math="f(x_2) - f(x_1) = 0 \implies f(x_2) = f(x_1)" /> を得る。
                            区間内の任意の2点での値が一致するため、<InlineMath math="f" /> は定数関数である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        コーシーの平均値定理（ Theorem 6.2-3 ）から、ロピタルの定理（不定形 <InlineMath math="0/0" /> の場合）を導く証明の概略を説明せよ。特にはさみうちの原理がどこで使われるかに注目せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proof (0/0 型) の議論に基づき説明する：
                        </p>
                        <ol className="list-decimal list-inside ml-4 space-y-2 text-slate-700 dark:text-slate-300">
                            <li>極限 <InlineMath math="x \to a" /> において <InlineMath math="f, g \to 0" /> なので、<InlineMath math="f(a)=g(a)=0" /> と拡張して連続性を確保する。</li>
                            <li>区間 <InlineMath math="[a, x]" /> でコーシーの平均値定理を適用すると、ある <InlineMath math="c_x \in (a, x)" /> が存在して <InlineMath math="\frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(c_x)}{g'(c_x)}" /> が成り立つ。</li>
                            <li>左辺は <InlineMath math="\frac{f(x)}{g(x)}" /> そのものである。ここで <InlineMath math="x \to a" /> の極限をとる。</li>
                            <li>このとき、<InlineMath math="a < c_x < x" /> であるため、<strong>「はさみうちの原理」</strong>により <InlineMath math="x \to a \implies c_x \to a" /> が強制される。</li>
                            <li>微分の比の極限 <InlineMath math="\lim_{t \to a} \frac{f'(t)}{g'(t)}" /> が存在すれば、それは <InlineMath math="\lim_{c_x \to a} \frac{f'(c_x)}{g'(c_x)}" /> となり、元の関数の比の極限と一致する。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        関数
                        <BlockMath math="f(x) = \begin{cases} e^{-1/x^2} & (x \neq 0) \\ 0 & (x = 0) \end{cases}" />
                        は至る所無限回微分可能（<InlineMath math="C^\infty" />級）であり、原点において <InlineMath math="f^{(n)}(0) = 0" /> であることが知られている。この関数のマクローリン展開（原点周りでのテイラー級数）が、なぜ原点以外で元の関数と一致しないのか（解析的でないのか）説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            §6.1 備考 (Chapter 6 の解析関数の項) を参照。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            この関数のすべての階数の微分係数が原点で <InlineMath math="0" /> になるため、マクローリン級数は <InlineMath math="0 + 0x + 0x^2 + \cdots" /> となり、恒等的に値が <InlineMath math="0" /> の級数となる。
                        </p>
                        <p className="mt-2">
                            一方、元の関数は <InlineMath math="x \neq 0" /> において正の値（<InlineMath math="e^{-1/x^2} > 0" />）を持つ。この不一致は、テイラーの定理における剰余項 <InlineMath math="R_n(x)" /> が、<InlineMath math="n \to \infty" /> としたときに <InlineMath math="0" /> に収束しない（誤差が消えない）ことが原因である。
                            このように「無限回微分可能であっても、級数展開と完全一致する（解析的である）」とは限らないのが実解析の特徴である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
