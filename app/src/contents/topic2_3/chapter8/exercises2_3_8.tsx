import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="8" number={1}>
                    <p>
                        <strong>ワイエルシュトラスのM判定法</strong>（ Theorem 8.1-1 ）の主張を、前提条件を含めて述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関数項級数 <InlineMath math="\sum u_n(x)" /> について、ある定数列 <InlineMath math="\{M_n\}" /> が存在して：
                        </p>
                        <ol className="list-decimal list-inside ml-4 space-y-1">
                            <li>すべての <InlineMath math="x, n" /> で <InlineMath math="|u_n(x)| \le M_n" /> （一様有界性）</li>
                            <li>正項級数 <InlineMath math="\sum M_n" /> が収束する（優級数の収束）</li>
                        </ol>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            このとき、との級数は区間上で一様かつ絶対収束する、という定理である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>
                        べき級数の<strong>収束半径</strong> <InlineMath math="R" /> を与える「コーシー・アダマールの公式」を、上極限を用いて記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="L = \limsup_{n \to \infty} \sqrt[n]{|a_n|}" /> と置くと、
                            <BlockMath math="R = 1/L \quad (0 < L < \infty)" />
                            である（<InlineMath math="L=0" /> なら <InlineMath math="R=\infty" />、<InlineMath math="L=\infty" /> なら <InlineMath math="R=0" />）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>
                        べき級数の<strong>項別微積分</strong>に関する性質（ Theorem 8.3-2 ）について、微分後の級数の収束半径は元の級数の収束半径と比べてどうなるか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            項別に微分・積分を行った後の級数も、元の級数と<strong>等しい収束半径 <InlineMath math="R" /></strong> を持つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="8" number={4}>
                    <p>
                        次のべき級数の収束半径を求めよ。
                        <BlockMath math="1) \quad \sum_{n=0}^\infty \frac{x^n}{n!} , \quad 2) \quad \sum_{n=1}^\infty n x^n" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            ダランベールの比判定法を用いる：
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><InlineMath math="a_n = 1/n!" />。 <InlineMath math="|a_n / a_{n+1}| = (n+1)! / n! = n+1 \to \infty" />。よって <InlineMath math="R = \infty" />。</li>
                            <li><InlineMath math="a_n = n" />。 <InlineMath math="|a_n / a_{n+1}| = n / (n+1) \to 1" />。よって <InlineMath math="R = 1" />。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p>
                        M判定法を用いて、関数項級数 <InlineMath math="\sum_{n=1}^\infty \frac{\sin(nx)}{n^2}" /> が実数全体 <InlineMath math="\mathbb{R}" /> 上で一様収束することを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 8.1-1 の議論を再現する。
                            <BlockMath math="|u_n(x)| = \left| \frac{\sin(nx)}{n^2} \right| \leq \frac{1}{n^2}" />
                            がすべての <InlineMath math="x" /> で成り立つ。<InlineMath math="M_n = 1/n^2" /> とおくと、正項級数 <InlineMath math="\sum 1/n^2" /> は収束する（<InlineMath math="p" />-級数の <InlineMath math="p=2 > 1" />）。
                            M判定法より、元の級数は <InlineMath math="\mathbb{R}" /> 上で一様収束する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>
                        べき級数 <InlineMath math="\sum_{n=1}^\infty \frac{x^n}{n}" /> の収束半径を求め、収束円の境界 <InlineMath math="x = 1" /> および <InlineMath math="x = -1" /> における収束・発散を判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            比判定法より <InlineMath math="R = \lim n/(n+1) = 1" /> である。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><InlineMath math="x = 1" /> のとき: <InlineMath math="\sum 1/n" /> （調和級数）となり、発散する。</li>
                            <li><InlineMath math="x = -1" /> のとき: <InlineMath math="\sum (-1)^n/n" /> （交代調和級数）となり、ライプニッツの定理より収束する。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={7}>
                    <p>
                        等比級数 <InlineMath math="\frac{1}{1+t} = 1 - t + t^2 - t^3 + \cdots" /> （<InlineMath math="|t|<1" />）を項別積分することで、対数関数 <InlineMath math="\log(1+x)" /> のマクローリン展開を導け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\int_0^x \frac{1}{1+t} dt = [\log(1+t)]_0^x = \log(1+x)" />
                            一方、右辺を項別積分すると：
                            <BlockMath math="\int_0^x (1 - t + t^2 - t^3 + \cdots) dt = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots" />
                            収束半径の内部（<InlineMath math="(-1, 1)" />）ではこの項別積分が正当化されるため、
                            <BlockMath math="\log(1+x) = \sum_{n=1}^\infty (-1)^{n-1} \frac{x^n}{n}" />
                            を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="8" number={8}>
                    <p>
                        <strong>ワイエルシュトラスのM判定法</strong>の証明において、「コーシーの判定条件（一様コーシー列）」がどのように使われているか説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 8.1-1 の Proof に基づく。
                            実数列 <InlineMath math="\sum M_n" /> が収束するため、その部分和はコーシー列をなす：<InlineMath math="\sum_{k=n+1}^m M_k < \varepsilon" />。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            これを利用して、関数項級数の部分和の差を評価すると、
                            <BlockMath math="\begin{aligned} |S_m(x) - S_n(x)| &= \left| \sum_{k=n+1}^m u_k(x) \right| \\ &\leq \sum_{k=n+1}^m |u_k(x)| \\ &\leq \sum_{k=n+1}^m M_k < \varepsilon \end{aligned}" />
                            となる。この評価が <strong>すべての <InlineMath math="x" /> で同時に成り立つ</strong> ため、部分和関数列は一様コーシー列となり、実数の完備性（一様収束版）より一様収束が結論される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={9}>
                    <p>
                        <strong>ワイエルシュトラスの近似定理</strong>（ Theorem 8.4-1 ）の意義を、テイラー展開（解析関数）による近似の限界と比較して説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            テイラー展開による近似は、局所的な微分情報に基づいているため、解析的でない（剰余が消えない）関数や滑らかでない関数には適用できない場合がある。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            一方、近似定理は、<strong>単なる連続関数であっても</strong>、それを「一様に（区間全体で誤差なく）」多項式で近似できることを保証する。これは、複雑な連続関数の世界を、計算しやすい多項式という滑らかな道具によって、任意の精度で大域的に扱えるようにした実解析の決定的な到達点である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={10}>
                    <p>
                        べき級数 <InlineMath math="f(x) = \sum a_n x^n" /> が収束円内部で<strong>無限回微分可能</strong>であることの証明のロジックを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. まず、項別微分して得られた新しい級数も、コーシー・アダマールの公式により元の級数と同じ収束半径 <InlineMath math="R" /> を持つことが示される（ Theorem 8.3-2 ）。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            2. 収束半径の内部では、導関数列自身が再びべき級数として一様収束するため、微分と極限の交換定理が適用でき、<InlineMath math="f(x)" /> が1回微分可能であることが保証される。
                        </p>
                        <p className="mt-2">
                            3. 微分した結果もまた同じ半径 <InlineMath math="R" /> を持つべき級数であるため、全く同じ議論を数学的帰納法によって繰り返すことができ、結果として無限回微分可能である（<InlineMath math="C^\infty" />）ことが証明される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
