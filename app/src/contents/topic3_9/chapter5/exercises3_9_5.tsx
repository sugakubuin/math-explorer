import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_9_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        整数環 <InlineMath math="\mathbb{Z}" /> において、<InlineMath math="a = 25" /> を <InlineMath math="b = 7" /> で割る除法（Definition 5.1-1）を実行し、商 <InlineMath math="q" /> と剰余 <InlineMath math="r" /> を求めよ。また、ノルム <InlineMath math="N(r) < N(b)" /> が成り立つことを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ノルム関数を絶対値 <InlineMath math="N(n) = |n|" /> とする。
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <b>除法の実行：</b> <InlineMath math="25 = 3 \times 7 + 4" />
                            </li>
                            <li>
                                <b>商と余り：</b> 商 <InlineMath math="q = 3" />、剰余 <InlineMath math="r = 4" />。
                            </li>
                            <li>
                                <b>ノルムの確認：</b> <InlineMath math="N(4) = 4" />、<InlineMath math="N(7) = 7" />。
                                <br /><InlineMath math="4 < 7" /> より、<InlineMath math="N(r) < N(b)" /> が成り立つ。
                            </li>
                        </ul>
                        <p className="mt-4 text-sm text-slate-500">
                            （注：剰余を負にすることも可能で、<InlineMath math="25 = 4 \times 7 - 3" /> とすれば <InlineMath math="q = 4, r = -3" /> となり、<InlineMath math="|-3| = 3 < 7" /> なのでこれも除法の原理を満たす。ED の除法の一意性は保証されていない）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        ガウス整数 <InlineMath math="\alpha = 3 + 4i" /> について：
                        <br />(1) ノルム <InlineMath math="N(\alpha) = a^2 + b^2" /> を計算せよ。
                        <br />(2) <InlineMath math="\alpha" /> はガウス整数環 <InlineMath math="\mathbb{Z}[i]" /> の単元（可逆元）か？理由とともに答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>(1) ノルムの計算：</b>
                        </p>
                        <BlockMath math="N(3+4i) = 3^2 + 4^2 = 9 + 16 = 25" />
                        <p>
                            <b>(2) 単元判定：</b>
                            ガウス整数環の単元群は <InlineMath math="\mathbb{Z}[i]^\times = \{1, -1, i, -i\}" /> である（Example 5.2-1）。
                            これらのノルムはすべて <InlineMath math="1" /> である。
                            <InlineMath math="\alpha = 3+4i" /> のノルムは <InlineMath math="25 \neq 1" /> であるため、<b>単元ではない</b>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        整数環 <InlineMath math="\mathbb{Z}" /> において、<InlineMath math="a = 56" /> と <InlineMath math="b = 36" /> の最大公約数をユークリッドの互除法（Theorem 5.3-1）を用いて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            除法の原理を繰り返し適用する：
                        </p>
                        <ul className="list-decimal list-inside space-y-2">
                            <li><InlineMath math="56 = 1 \times 36 + 20" /></li>
                            <li><InlineMath math="36 = 1 \times 20 + 16" /></li>
                            <li><InlineMath math="20 = 1 \times 16 + 4" /></li>
                            <li><InlineMath math="16 = 4 \times 4 + 0" /></li>
                        </ul>
                        <p className="mt-2">
                            余りが <InlineMath math="0" /> になる直前の非零な余りは <InlineMath math="4" /> である。
                        </p>
                        <p>
                            したがって、<InlineMath math="\gcd(56, 36) = 4" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        体 <InlineMath math="F" /> 上の多項式環 <InlineMath math="F[x]" /> において、多項式の除法を実行せよ。
                        <br /><InlineMath math="f(x) = x^3 + 2x^2 + x + 1" /> を <InlineMath math="g(x) = x^2 + 1" /> で割り、商 <InlineMath math="q(x)" /> と余り <InlineMath math="r(x)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            多項式の筆算と同様の手順で行う：
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <InlineMath math="x^3" /> を消すため、商に <InlineMath math="x" /> を立てる：
                                <br /><InlineMath math="f(x) - x(x^2+1) = (x^3+2x^2+x+1) - (x^3+x) = 2x^2 + 1" />
                            </li>
                            <li>
                                <InlineMath math="2x^2" /> を消すため、商に <InlineMath math="2" /> を立てる：
                                <br /><InlineMath math="(2x^2+1) - 2(x^2+1) = (2x^2+1) - (2x^2+2) = -1" />
                            </li>
                        </ol>
                        <p className="mt-2">
                            よって：
                            <br />商 <InlineMath math="q(x) = x + 2" />
                            <br />余り <InlineMath math="r(x) = -1" />
                        </p>
                        <p>
                            確認：<InlineMath math="\deg r = 0 < 2 = \deg g" /> を満たしている。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        ガウス整数環 <InlineMath math="\mathbb{Z}[i]" /> において、<InlineMath math="\alpha" /> が単元であるための必要十分条件は、そのノルム <InlineMath math="N(\alpha)" /> が <InlineMath math="1" /> であることを、ノルムの乗法性を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>[⟹] の証明：</b>
                            <InlineMath math="\alpha" /> が単元であれば、ある <InlineMath math="\beta \in \mathbb{Z}[i]" /> が存在して <InlineMath math="\alpha\beta = 1" /> を満たす。
                            ノルムの性質より <InlineMath math="N(\alpha)N(\beta) = N(1) = 1" />。
                            <InlineMath math="N(\alpha), N(\beta)" /> は非負整数であるため、積が <InlineMath math="1" /> となるには <InlineMath math="N(\alpha) = 1" /> である必要がある。
                        </p>
                        <p className="mt-2">
                            <b>[⟸] の証明：</b>
                            <InlineMath math="\alpha = a+bi" /> とし <InlineMath math="N(\alpha) = a^2+b^2 = 1" /> とする。
                            整数 <InlineMath math="a, b" /> の組は <InlineMath math="(\pm 1, 0), (0, \pm 1)" /> のいずれかである。
                            これらはそれぞれ <InlineMath math="1, -1, i, -i" /> に対応するが、これらはいずれも逆元を持つ（例：<InlineMath math="i \times (-i) = -i^2 = 1" />）ため、単元である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        ガウス整数環 <InlineMath math="\mathbb{Z}[i]" /> において、<InlineMath math="a = 5" /> と <InlineMath math="b = 1 + 2i" /> の最大公約数を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ノルムの関係に注目する。<br />
                            <InlineMath math="N(1+2i) = 1^2 + 2^2 = 5" />。
                            また、<InlineMath math="5 = (1+2i)(1-2i)" /> と分解できるため、<InlineMath math="1+2i" /> は <InlineMath math="5" /> を割り切る。
                        </p>
                        <p>
                            公約数の定義（Definition 5.3-1）より、<InlineMath math="1+2i" /> は <InlineMath math="5" /> と <InlineMath math="1+2i" /> の両方を割り切る公約数であり、これより大きい（包含関係の意味で）公約数は存在し得ない（一方が自身の約数であるため）。
                        </p>
                        <p>
                            したがって、求める最大公約数は <InlineMath math="\gcd(5, 1+2i) = 1+2i" /> （およびその単元倍）である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        ユークリッド整域（ED）において、任意の元 <InlineMath math="a" /> とその単元倍 <InlineMath math="ua \ (u \in D^\times)" /> に対して、
                        <BlockMath math="a \mid ua \text{ かつ } ua \mid a" />
                        が成り立つことを示せ。また、このとき商と余りはどのようになるか？
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>割り切れる関係：</b>
                            <br />(1) <InlineMath math="ua = (u) \cdot a" /> より <InlineMath math="a \mid ua" />。
                            <br />(2) <InlineMath math="u" /> は単元なので、逆元 <InlineMath math="u^{-1}" /> が存在する。
                            <InlineMath math="a = (u^{-1}) \cdot (ua)" /> より <InlineMath math="ua \mid a" />。
                        </p>
                        <p className="mt-2">
                            <b>除法の結果：</b>
                            <br /><InlineMath math="a" /> を <InlineMath math="ua" /> で割る除法を考えると：
                            <BlockMath math="a = u^{-1}(ua) + 0" />
                            となるため、商は <InlineMath math="u^{-1}" />、余りは <InlineMath math="0" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        ガウス整数環 <InlineMath math="\mathbb{Z}[i]" /> において、<InlineMath math="\alpha = 11 + 3i" /> を <InlineMath math="\beta = 1 - 2i" /> で割る除法を実行せよ。
                        商 <InlineMath math="q" /> と剰余 <InlineMath math="r" /> を求め、余りのノルムが割る数のノルムより小さいことを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>ステップ1：複素数体における計算</b>
                        </p>
                        <BlockMath math="\begin{aligned}
                            \frac{11+3i}{1-2i} &= \frac{(11+3i)(1+2i)}{1^2+2^2} \\ 
                            &= \frac{11 + 22i + 3i - 6}{5} \\ 
                            &= \frac{5 + 25i}{5} = 1 + 5i
                        \end{aligned}" />
                        <p>
                            結果がちょうど整数になった。
                        </p>
                        <p>
                            <b>ステップ2：商と余りの決定</b>
                            <br />商を <InlineMath math="q = 1 + 5i" /> とおく。
                            <br />剰余は
                            <BlockMath math="\begin{aligned}
                                r &= \alpha - q\beta \\ 
                                &= (11+3i) - (1+5i)(1-2i) \\ 
                                &= (11+3i) - (11+3i) \\ 
                                &= 0
                            \end{aligned}" />
                        </p>
                        <p>
                            <b>ステップ3：ノルムの確認</b>
                            <br /><InlineMath math="N(r) = 0" />
                            <br /><InlineMath math="N(\beta) = 1^2 + (-2)^2 = 5" />
                            <br /><InlineMath math="0 < 5" /> より、条件を満たしている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        ユークリッド整域（ED）において、2つの元 <InlineMath math="a, b" /> で生成されるイデアル <InlineMath math="I = (a, b)" /> は、最大公約数 <InlineMath math="d = \gcd(a, b)" /> で生成される主イデアル <InlineMath math="(d)" /> に一致することを、互除法のステップを逆に辿ることで議論せよ。（ベズーの等式）
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <b>(1) <InlineMath math="(d) \subset (a, b)" /> に関して：</b>
                                互除法のステップにおいて、各余りは直前の 2 つの元の線形結合で書ける。
                                <BlockMath math="r_1 = a - q_1b, \quad r_2 = b - q_2r_1, \dots" />
                                これを順次代入していくことで、最後の非零な余りである <InlineMath math="d = r_n" /> は <InlineMath math="d = xa + yb \ (x, y \in D)" /> の形、すなわち <InlineMath math="(a, b)" /> の元として書ける。
                            </li>
                            <li>
                                <b>(2) <InlineMath math="(a, b) \subset (d)" /> に関して：</b>
                                <InlineMath math="d" /> は <InlineMath math="\gcd" /> であるため公約数であり、特に <InlineMath math="d \mid a" /> かつ <InlineMath math="d \mid b" /> である。
                                したがって <InlineMath math="a \in (d)" /> かつ <InlineMath math="b \in (d)" /> となり、それらの生成するイデアルも包含される。
                            </li>
                        </ul>
                        <p className="mt-2">
                            以上より、<InlineMath math="(a, b) = (\gcd(a, b))" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        整域 <InlineMath math="D = \mathbb{Z}[\sqrt{-2}] = \{ a + b\sqrt{-2} \mid a, b \in \mathbb{Z} \}" /> は、ノルム関係 <InlineMath math="N(a + b\sqrt{-2}) = a^2 + 2b^2" /> を用いてユークリッド整域（ED）になることを示せ。
                        （ヒント：ガウス整数環における証明（Theorem 5.2-1）を模倣し、剰余のノルムの上限を計算せよ）
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="z, w \in D" /> （<InlineMath math="w \neq 0" />）をとる。
                            複素数として <InlineMath math="z/w = \alpha + \beta\sqrt{-2}" /> （<InlineMath math="\alpha, \beta \in \mathbb{Q}" />）とする。
                        </p>
                        <p>
                            実数 <InlineMath math="\alpha, \beta" /> に最も近い整数を <InlineMath math="m, n" /> とし、商を <InlineMath math="q = m + n\sqrt{-2}" /> と定める。
                            剰余を <InlineMath math="r = z - qw = w(( \alpha - m) + (\beta - n)\sqrt{-2})" /> とする。
                        </p>
                        <p>
                            ノルムを計算すると：
                        </p>
                        <BlockMath math="N(r) = N(w) \left[ (\alpha - m)^2 + 2(\beta - n)^2 \right]" />
                        <p>
                            整数の選び方から <InlineMath math="|\alpha-m| \leq 1/2" /> かつ <InlineMath math="|\beta-n| \leq 1/2" /> であるため：
                        </p>
                        <BlockMath math="(\alpha - m)^2 + 2(\beta - n)^2 \leq \left(\frac{1}{2}\right)^2 + 2\left(\frac{1}{2}\right)^2 = \frac{1}{4} + \frac{2}{4} = \frac{3}{4}" />
                        <p>
                            よって：
                        </p>
                        <BlockMath math="N(r) \leq \frac{3}{4} N(w) < N(w)" />
                        <p>
                            除法の原理を満たすための条件が示され、<InlineMath math="D" /> は ED である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
