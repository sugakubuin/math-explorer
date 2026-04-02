import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        関数 <InlineMath math="f(x)" /> の <InlineMath math="x=a" /> を中心とする <InlineMath math="n" /> 次テイラー多項式 <InlineMath math="P_n(x)" /> の定義式を記せ。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\begin{aligned}
                            P_n(x) &= \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x - a)^k \\
                            &= f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \\ &\quad \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        テイラーの定理における「ラグランジュの剰余項 <InlineMath math="R_n(x)" />」の式を、ある中間点 <InlineMath math="c" /> を用いて表せ（Theorem 3.1-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}" />
                        <p>（ただし、<InlineMath math="c" /> は <InlineMath math="a" /> と <InlineMath math="x" /> の間に存在するある点である。）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        べき級数の収束半径 <InlineMath math="R" /> を求めるための「ダランベールの判定法」の公式を記せ（Proposition 3.3-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\frac{1}{R} = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|" />
                        <p>（ただし、<InlineMath math="1/R = 0" /> のときは <InlineMath math="R = \infty" />、<InlineMath math="1/R = \infty" /> のときは <InlineMath math="R = 0" /> とする。）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        <InlineMath math="f(x) = \sin x" /> の <InlineMath math="x = 0" /> を中心とする3次マクローリン多項式 <InlineMath math="P_3(x)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            各階の導関数を計算し、<InlineMath math="x = 0" /> を代入する。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><InlineMath math="f(x) = \sin x \implies f(0) = 0" /></li>
                            <li><InlineMath math="f'(x) = \cos x \implies f'(0) = 1" /></li>
                            <li><InlineMath math="f''(x) = -\sin x \implies f''(0) = 0" /></li>
                            <li><InlineMath math="f'''(x) = -\cos x \implies f'''(0) = -1" /></li>
                        </ul>
                        <p>
                            公式に従ってマクローリン多項式 <InlineMath math="P_3(x)" /> を作る。
                        </p>
                        <BlockMath math="P_3(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3" />
                        <BlockMath math="P_3(x) = 0 + 1\cdot x + \frac{0}{2}x^2 + \frac{-1}{6}x^3 = x - \frac{1}{6}x^3" />
                        <p>
                            よって、<InlineMath math="P_3(x) = x - \frac{x^3}{6}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        べき級数 <InlineMath math="\sum_{n=1}^{\infty} \frac{x^n}{n \cdot 2^n}" /> の収束半径 <InlineMath math="R" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            一般項の係数は <InlineMath math="a_n = \frac{1}{n \cdot 2^n}" /> である。ダランベールの判定法を用いる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \left| \frac{a_{n+1}}{a_n} \right| &= \frac{\frac{1}{(n+1)2^{n+1}}}{\frac{1}{n \cdot 2^n}} \\
                            &= \frac{n \cdot 2^n}{(n+1)2^{n+1}} \\
                            &= \frac{n}{n+1} \cdot \frac{1}{2}
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="n \to \infty" /> の極限をとる。
                        </p>
                        <BlockMath math="\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \frac{1}{1+1/n} \cdot \frac{1}{2} = 1 \cdot \frac{1}{2} = \frac{1}{2}" />
                        <p>
                            公式 <InlineMath math="\frac{1}{R} = \frac{1}{2}" /> より、収束半径は <InlineMath math="R = 2" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        テイラー展開を用いて、次の不定形の極限を求めよ。
                    </p>
                    <BlockMath math="\lim_{x \to 0} \frac{\cos x - 1 + \frac{x^2}{2}}{x^4}" />
                <ExerciseSolution>
                    <p>
                        <InlineMath math="\cos x" /> のマクローリン展開（4次まで）を用いる。
                    </p>
                    <BlockMath math="\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots" />
                    <p>
                        これを分子に代入する。
                    </p>
                    <BlockMath math="
                        \begin{aligned}
                        \cos x - 1 + \frac{x^2}{2} &= \left( 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots \right) - 1 + \frac{x^2}{2} \\
                        &= \frac{x^4}{24} - \cdots
                        \end{aligned}
                    " />
                    <p>
                        極限の式に代入する。
                    </p>
                    <BlockMath math="\lim_{x \to 0} \frac{\frac{x^4}{24} - \cdots}{x^4} = \lim_{x \to 0} \left( \frac{1}{24} - (\text{xを含む項}) \right) = \frac{1}{24}" />
                    <p>
                        よって、求める極限は <InlineMath math="\frac{1}{24}" /> である。
                    </p>
                </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        関数 <InlineMath math="f(x) = \ln(1+x)" /> の <InlineMath math="x = 0" /> を中心とする <InlineMath math="n" /> 次マクローリン多項式のラグランジュ剰余項 <InlineMath math="R_n(x)" /> を用いて、区間 <InlineMath math="[0, 1]" /> における近似誤差 <InlineMath math="|R_n(x)|" /> の上界が <InlineMath math="\frac{1}{n+1}" /> であることを示せ。
                    </p>
                <ExerciseSolution>
                    <p>
                        <InlineMath math="f(x) = \ln(1+x)" /> の導関数を求める。
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><InlineMath math="f'(x) = (1+x)^{-1}" /></li>
                        <li><InlineMath math="f''(x) = -(1+x)^{-2}" /></li>
                        <li><InlineMath math="f'''(x) = 2(1+x)^{-3}" /></li>
                        <li>一般に <InlineMath math="f^{(k)}(x) = (-1)^{k-1}(k-1)!(1+x)^{-k}" /></li>
                    </ul>
                    <p>
                        したがって、<InlineMath math="n+1" /> 階導関数は
                    </p>
                    <BlockMath math="f^{(n+1)}(x) = (-1)^n n! (1+x)^{-(n+1)} = \frac{(-1)^n n!}{(1+x)^{n+1}}" />
                    <p>
                        ラグランジュ剰余項は、ある <InlineMath math="c \in (0, x)" /> が存在して
                    </p>
                    <BlockMath math="\begin{aligned}
                        R_n(x) &= \frac{f^{(n+1)}(c)}{(n+1)!} x^{n+1} \\
                        &= \frac{(-1)^n n!}{(1+c)^{n+1} (n+1)!} x^{n+1} \\
                        &= \frac{(-1)^n}{(n+1)(1+c)^{n+1}} x^{n+1}
                        \end{aligned}
                    " />
                    <p>
                        誤差の絶対値をとる。
                    </p>
                    <BlockMath math="|R_n(x)| = \frac{x^{n+1}}{(n+1)(1+c)^{n+1}}" />
                    <p>
                        ここで、<InlineMath math="0 \leq x \leq 1" /> であり、<InlineMath math="c" /> は <InlineMath math="0 < c < x" /> であるため <InlineMath math="c > 0" />。<br />
                        したがって、分母について <InlineMath math="(1+c)^{n+1} > 1^{n+1} = 1" /> が成り立つ。<br />
                        また、分子について <InlineMath math="x \leq 1" /> より <InlineMath math="x^{n+1} \leq 1" /> である。
                    </p>
                    <p>
                        これらを用いて上から評価すると、
                    </p>
                    <BlockMath math="|R_n(x)| = \frac{x^{n+1}}{(n+1)(1+c)^{n+1}} \leq \frac{1}{(n+1) \cdot 1} = \frac{1}{n+1}" />
                    <p>
                        以上より、区間 <InlineMath math="[0, 1]" /> における近似誤差の上界が <InlineMath math="\frac{1}{n+1}" /> であることが示された。
                    </p>
                    <p className="text-right"><InlineMath math="\square" /></p>
                </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        ラグランジュ剰余項を用いた2次テイラー展開を利用して、すべての実数 <InlineMath math="x" /> に対して次の不等式が成り立つことを証明せよ。
                    </p>
                    <BlockMath math="\cos x \geq 1 - \frac{x^2}{2}" />
                <ExerciseSolution>
                    <p>
                        関数 <InlineMath math="f(x) = \cos x" /> を <InlineMath math="a = 0" /> の周りで展開する。
                    </p>
                    <p>
                        導関数は <InlineMath math="f'(x) = -\sin x" />、<InlineMath math="f''(x) = -\cos x" />、<InlineMath math="f'''(x) = \sin x" /> である。<br />
                        もし2次テイラー展開とすると、剰余項は3階導関数 <InlineMath math="\sin c" /> となり符号が定まらないため、<strong>3次テイラー多項式（4階導関数による剰余項）</strong>を考える。
                    </p>
                    <p>
                        <InlineMath math="a = 0" /> での係数は、<InlineMath math="f(0) = 1" />、<InlineMath math="f'(0) = 0" />、<InlineMath math="f''(0) = -1" />、<InlineMath math="f'''(0) = 0" /> である。
                    </p>
                    <p>
                        テイラーの定理より、任意の <InlineMath math="x" /> に対してある <InlineMath math="c" /> （<InlineMath math="0" /> と <InlineMath math="x" /> の間）が存在して、
                    </p>
                    <BlockMath math="f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \frac{f^{(4)}(c)}{4!}x^4" />
                    <BlockMath math="\cos x = 1 + 0 - \frac{1}{2}x^2 + 0 + \frac{\cos c}{24}x^4" />
                    <BlockMath math="\cos x = 1 - \frac{x^2}{2} + \frac{\cos c}{24}x^4" />
                    <p>
                        が成り立つ。
                    </p>
                    <p>
                        しかし、この剰余項 <InlineMath math="\frac{\cos c}{24}x^4" /> は <InlineMath math="\cos c" /> が負になる場合（例：<InlineMath math="c = \pi" />）に負となるため、<strong>この単純なラグランジュ剰余項では不等式をすべての <InlineMath math="x" /> で示すことができない。</strong>
                    </p>
                    <p>
                        （解説のセクション3.4のRemarkに従い、ここでは積分剰余項あるいは別の方法を用いる必要があるが、問題の指定に従いラグランジュ剰余項で可能な範囲に制限するか、問題の意図を汲んで「積分剰余項」での証明に切り替える。ここでは平均値定理の直接応用による別証明を示す。）
                    </p>
                    <p>
                        <strong>別証明：</strong> 関数 <InlineMath math="g(x) = \cos x - \left(1 - \frac{x^2}{2}\right)" /> を定義し、<InlineMath math="g(x) \geq 0" /> を示す。
                    </p>
                    <p>
                        <InlineMath math="g'(x) = -\sin x + x" />。<br />
                        <InlineMath math="x \geq 0" /> において <InlineMath math="x \geq \sin x" /> が成り立つ（1次テイラー展開等より）ため、<InlineMath math="g'(x) \geq 0" />。<br />
                        よって <InlineMath math="x \geq 0" /> で <InlineMath math="g(x)" /> は単調増加。<InlineMath math="g(0) = 1 - 1 = 0" /> より、<InlineMath math="x \geq 0" /> で <InlineMath math="g(x) \geq 0" />。
                    </p>
                    <p>
                        <InlineMath math="g(x)" /> は偶関数（<InlineMath math="g(-x) = g(x)" />）であるため、<InlineMath math="x < 0" /> でも <InlineMath math="g(x) \geq 0" />。
                    </p>
                    <p>
                        よって、すべての <InlineMath math="x" /> に対して <InlineMath math="\cos x \geq 1 - \frac{x^2}{2}" /> が成り立つ。
                    </p>
                    <p className="text-right"><InlineMath math="\square" /></p>
                </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        Proposition 3.4-2 を用いて、関数 <InlineMath math="f(x) = x^4 - 4x^3 + 6x^2 - 4x + 1" /> が <InlineMath math="x = 1" /> において極大値をもつか、極小値をもつか、あるいはどちらでもない（変曲点）かを判定せよ。
                    </p>
                <ExerciseSolution>
                    <p>
                        <InlineMath math="f(x)" /> の <InlineMath math="x=1" /> における導関数を順に計算する。
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><InlineMath math="f'(x) = 4x^3 - 12x^2 + 12x - 4 \implies f'(1) = 4 - 12 + 12 - 4 = 0" /></li>
                        <li><InlineMath math="f''(x) = 12x^2 - 24x + 12 \implies f''(1) = 12 - 24 + 12 = 0" /></li>
                        <li><InlineMath math="f'''(x) = 24x - 24 \implies f'''(1) = 24 - 24 = 0" /></li>
                        <li><InlineMath math="f^{(4)}(x) = 24 \implies f^{(4)}(1) = 24 \neq 0" /></li>
                    </ul>
                    <p>
                        最初に <InlineMath math="0" /> でなくなる導関数は <strong>4階</strong>導関数（<InlineMath math="2n" />階、偶数階）である。<br />
                        その値は <InlineMath math="f^{(4)}(1) = 24 > 0" /> と正である。
                    </p>
                    <p>
                        Proposition 3.4-2 より、偶数階の導関数が正であるため、関数 <InlineMath math="f(x)" /> は <InlineMath math="x = 1" /> において<strong>極小値</strong>をとる。
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                        （実際、<InlineMath math="f(x) = (x - 1)^4" /> であり、<InlineMath math="x = 1" /> で明らかに極小かつ最小となる。）
                    </p>
                </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
