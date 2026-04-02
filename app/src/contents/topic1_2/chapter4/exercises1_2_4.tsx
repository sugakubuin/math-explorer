import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises1_2_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        無限級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty a_n" /> が収束するための「必要条件」（Theorem 4.1-1）を、数列 <InlineMath math="a_n" /> の極限を用いて答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.1-1 より、無限級数が収束するならば、足し合わせる各項の極限は <InlineMath math="0" /> にならなければならない。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> <InlineMath math="\displaystyle \lim_{n \to \infty} a_n = 0" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        Theorem 4.3-1 （収束半径の存在と公式）に関する以下の文の空欄に適する言葉または式を答えよ。
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md my-4">
                        <p>
                            べき級数 <InlineMath math="\displaystyle \sum_{n=0}^\infty c_n x^n" /> に対して、収束半径 <InlineMath math="R" /> が定まる。
                            このとき、<InlineMath math="|x| < R" /> の範囲で級数は（　ア　）し、<InlineMath math="|x| > R" /> の範囲では（　イ　）する。<br />
                            また、極限 <InlineMath math="\displaystyle L = \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|" /> が存在するとき、収束半径は <InlineMath math="R =" /> （　ウ　） で計算できる。
                        </p>
                    </div>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.3-1 の内容より、
                            （ア）は「絶対収束」、（イ）は「発散」である。
                            （ウ）はダランベール・コーシーの公式により「<InlineMath math="\frac{1}{L}" />」である。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> ア：絶対収束、イ：発散、ウ：<InlineMath math="\frac{1}{L}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        関数 <InlineMath math="e^x" /> のマクローリン展開（<InlineMath math="x = 0" /> を中心とするテイラー展開）を書き下せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.4-2 （主要関数のマクローリン展開）より、指数関数 <InlineMath math="e^x" /> の展開は以下のようになる。
                        </p>
                        <BlockMath math="\begin{aligned} e^x &= 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots \\ &= \sum_{n=0}^\infty \frac{x^n}{n!} \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        次の無限等比級数の収束・発散を調べ、収束する場合はその和を求めよ。
                    </p>
                    <BlockMath math="\sum_{n=1}^\infty \left(\frac{2}{3}\right)^{n-1} = 1 + \frac{2}{3} + \left(\frac{2}{3}\right)^2 + \dots" />
                    <ExerciseSolution>
                        <p>
                            初項 <InlineMath math="a = 1" />、公比 <InlineMath math="r = \frac{2}{3}" /> の等比級数である。
                        </p>
                        <p>
                            Theorem 4.1-2 より、公比が <InlineMath math="|r| < 1" /> を満たすため、この級数は<strong>収束</strong>する。
                        </p>
                        <p>
                            その和は公式 <InlineMath math="\displaystyle \frac{a}{1 - r}" /> に代入して、
                        </p>
                        <BlockMath math="\frac{1}{1 - \frac{2}{3}} = \frac{1}{\frac{1}{3}} = 3" />
                        <p>となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        ダランベールの比判定法（Theorem 4.2-2）を用いて、次の正項級数の収束・発散を判定せよ。
                    </p>
                    <BlockMath math="\sum_{n=1}^\infty \frac{3^n}{n!}" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="a_n = \frac{3^n}{n!}" /> とおく。隣接項の比の極限 <InlineMath math="L" /> を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            L &= \lim_{n \to \infty} \frac{a_{n+1}}{a_n} \\
                            &= \lim_{n \to \infty} \left( \frac{3^{n+1}}{(n+1)!} \cdot \frac{n!}{3^n} \right) \\
                            &= \lim_{n \to \infty} \frac{3}{n+1}
                            \end{aligned}
                        " />
                        <p>
                            分母が無限大になるため、この極限は <InlineMath math="0" /> である。
                        </p>
                        <BlockMath math="L = 0" />
                        <p>
                            <InlineMath math="L < 1" /> であるから、比判定法によりこの級数は<strong>収束する</strong>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        次のべき級数の収束半径 <InlineMath math="R" /> を求めよ。
                    </p>
                    <BlockMath math="\sum_{n=1}^\infty \frac{x^n}{n \cdot 2^n}" />
                    <ExerciseSolution>
                        <p>
                            係数は <InlineMath math="c_n = \frac{1}{n \cdot 2^n}" /> である。Theorem 4.3-1 の公式を用いて、極限 <InlineMath math="L" /> を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            L &= \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| \\
                            &= \lim_{n \to \infty} \frac{\frac{1}{(n+1)2^{n+1}}}{\frac{1}{n 2^n}} \\
                            &= \lim_{n \to \infty} \frac{n \cdot 2^n}{(n+1) \cdot 2^{n+1}} \\
                            &= \lim_{n \to \infty} \left( \frac{n}{n+1} \cdot \frac{1}{2} \right)
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="\frac{n}{n+1} \to 1" /> であるため、
                        </p>
                        <BlockMath math="L = 1 \cdot \frac{1}{2} = \frac{1}{2}" />
                        <p>
                            したがって、収束半径は <InlineMath math="R = \frac{1}{L} = 2" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        マクローリン展開の公式を用いて、極限 <InlineMath math="\displaystyle \lim_{x \to 0} \frac{e^x - 1 - x}{x^2}" /> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.4-2 より、<InlineMath math="e^x" /> のマクローリン展開は <InlineMath math="\displaystyle e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \dots" /> である。
                        </p>
                        <p>
                            これを分子に代入する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            e^x - 1 - x &= \left( 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \dots \right) - 1 - x \\
                            &= \frac{x^2}{2} + \frac{x^3}{6} + \dots
                            \end{aligned}
                        " />
                        <p>
                            極限の式に代入して、<InlineMath math="x^2" /> で割る。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \lim_{x \to 0} \frac{\frac{x^2}{2} + \frac{x^3}{6} + \dots}{x^2} &= \lim_{x \to 0} \left( \frac{1}{2} + \frac{x}{6} + \dots \right)
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="x \to 0" /> とすると、<InlineMath math="x" /> を含む項はすべて <InlineMath math="0" /> になるため、
                        </p>
                        <BlockMath math="= \frac{1}{2}" />
                        <p>となる。（これはロピタルの定理を2回使って求める結果と一致する）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        関数 <InlineMath math="f(x) = \log(1+x)" /> のマクローリン展開を導出せよ。（<InlineMath math="n" /> 次までのテイラー多項式として係数を計算する方法、または等比級数の和の積分を用いる方法のどちらでもよい）
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>【等比級数の項別積分を用いる方法】</strong>
                        </p>
                        <p>
                            初項 <InlineMath math="1" />、公比 <InlineMath math="-t" /> の無限等比級数を考える（<InlineMath math="|-t| < 1 \implies |t| < 1" />）。
                        </p>
                        <BlockMath math="\frac{1}{1 - (-t)} = \frac{1}{1+t} = 1 - t + t^2 - t^3 + \dots = \sum_{n=0}^\infty (-1)^n t^n" />
                        <p>
                            両辺を区間 <InlineMath math="[0, x]" /> （<InlineMath math="|x| < 1" />）で <InlineMath math="t" /> について定積分する。
                        </p>
                        <BlockMath math="\int_0^x \frac{1}{1+t} \, dt = \int_0^x \left( 1 - t + t^2 - t^3 + \dots \right) dt" />
                        <p>
                            左辺の積分は、
                        </p>
                        <BlockMath math="\begin{aligned} \int_0^x \frac{1}{1+t} \, dt &= \Big[ \log(1+t) \Big]_0^x \\ &= \log(1+x) - \log 1 \\ &= \log(1+x) \end{aligned}" />
                        <p>
                            右辺は Proposition 4.3-1 （項別積分）により、項ごとに積分できる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \int_0^x \sum_{n=0}^\infty (-1)^n t^n \, dt &= \sum_{n=0}^\infty (-1)^n \left[ \frac{t^{n+1}}{n+1} \right]_0^x \\
                            &= \sum_{n=0}^\infty (-1)^n \frac{x^{n+1}}{n+1} \\
                            &= x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots
                            \end{aligned}
                        " />
                        <p>
                            したがって、<InlineMath math="\log(1+x)" /> のマクローリン展開が得られる。
                        </p>
                        <BlockMath math="\log(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots = \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} x^n" />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        交代級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \dots" /> （交代調和級数）について、
                        絶対収束するか、条件収束するか、発散するかを判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、絶対値をとった級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty \left| \frac{(-1)^{n-1}}{n} \right| = \sum_{n=1}^\infty \frac{1}{n}" /> を考える。
                        </p>
                        <p>
                            これは「調和級数」であり、Theorem 4.2-1 の Remark にある通り、<InlineMath math="p" />-級数（<InlineMath math="p=1" />）として<strong>発散</strong>することが知られている。
                            したがって、元の級数は絶対収束はしない。
                        </p>
                        <p>
                            次に、元の交代級数 <InlineMath math="\displaystyle \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n}" /> そのものの収束を調べる。
                            <InlineMath math="a_n = \frac{1}{n}" /> とすると、
                        </p>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li><InlineMath math="a_n" /> は正の数列である。</li>
                            <li><InlineMath math="n < n+1 \implies \frac{1}{n+1} < \frac{1}{n}" /> より、<InlineMath math="a_{n+1} < a_n" /> で単調減少である。</li>
                            <li><InlineMath math="\displaystyle \lim_{n \to \infty} a_n = \lim_{n \to \infty} \frac{1}{n} = 0" /> に収束する。</li>
                        </ol>
                        <p>
                            これらは Theorem 4.2-4 （ライプニッツの定理）の条件を満たすため、交代級数としては<strong>収束</strong>する。
                        </p>
                        <p>
                            以上より、元の級数は収束するが絶対値をとった級数は発散するため、Definition 4.2-1 より<strong>条件収束する</strong>と判定される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        関数 <InlineMath math="f(x) = \sin x" /> を <InlineMath math="x = 0" /> の周りでテイラー多項式（3次）で近似する。<br />
                        テイラーの定理（Theorem 4.4-1）を用いて、区間 <InlineMath math="[0, \pi/4]" /> における近似の誤差（剰余項 <InlineMath math="R_4(x)" />）の絶対値が <InlineMath math="\frac{(\pi/4)^4}{24}" /> 以下であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.4-1 より、<InlineMath math="n=3" /> のときのラグランジュの剰余項 <InlineMath math="R_4(x)" /> は
                        </p>
                        <BlockMath math="R_4(x) = \frac{f^{(4)}(c)}{4!} x^4 \quad (0 < c < x)" />
                        <p>
                            で与えられる。ここで <InlineMath math="x \in [0, \pi/4]" /> である。
                        </p>
                        <p>
                            関数 <InlineMath math="f(x) = \sin x" /> の導関数を計算する。
                        </p>
                        <BlockMath math="f'(x) = \cos x, \quad f''(x) = -\sin x, \\ f'''(x) = -\cos x, \quad f^{(4)}(x) = \sin x" />
                        <p>
                            したがって、剰余項は
                        </p>
                        <BlockMath math="R_4(x) = \frac{\sin c}{24} x^4" />
                        <p>
                            となる。誤差の絶対値をとると、
                        </p>
                        <BlockMath math="|R_4(x)| = \left| \frac{\sin c}{24} x^4 \right| = \frac{|\sin c|}{24} x^4" />
                        <p>
                            すべての実数 <InlineMath math="c" /> において <InlineMath math="|\sin c| \le 1" /> である。また、<InlineMath math="x \le \pi/4" /> より <InlineMath math="x^4 \le (\pi/4)^4" /> であるから、
                        </p>
                        <BlockMath math="|R_4(x)| \le \frac{1}{24} \left(\frac{\pi}{4}\right)^4" />
                        <p>
                            となり、証明された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
