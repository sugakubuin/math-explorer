import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_2_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        関数 <InlineMath math="f(z) = \frac{1}{z(z-1)}" /> を点 <InlineMath math="z=0" /> の周りで、穴あき近傍 <InlineMath math="0 < |z| < 1" /> でローラン展開せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            部部分分数分解を行うと：
                        </p>
                        <BlockMath math="\frac{1}{z(z-1)} = \frac{1}{z-1} - \frac{1}{z}" />
                        <p>
                            <InlineMath math="|z| < 1" /> において、第1項は等比級数展開できる：
                        </p>
                        <BlockMath math="\frac{1}{z-1} = -\frac{1}{1-z} = -\sum_{n=0}^\infty z^n = -1 - z - z^2 - \dots" />
                        <p>
                            したがって、
                        </p>
                        <BlockMath math="f(z) = -\frac{1}{z} - 1 - z - z^2 - \dots = \sum_{n=-1}^\infty -z^n" />
                        <p>
                            主要部は <InlineMath math="-1/z" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        次の関数の <InlineMath math="z=0" /> における孤立特異点の種類を答えよ。
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li><InlineMath math="f(z) = \frac{\sin z}{z^2}" /></li>
                        <li><InlineMath math="g(z) = \frac{e^z - 1}{z}" /></li>
                        <li><InlineMath math="h(z) = \cos(1/z)" /></li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            Definition 6.2-2 に基づき、ローラン展開の主要部を調べる。
                        </p>
                        <ol className="list-decimal list-inside space-y-4 mt-2">
                            <li>
                                <InlineMath math="f(z) = \frac{1}{z^2}(z - z^3/6 + \dots) = \frac{1}{z} - \frac{z}{6} + \dots" />
                                主要部が有限項（最大次数 1）なので、<strong>1位の極</strong>である。
                            </li>
                            <li>
                                <InlineMath math="g(z) = \frac{1}{z}(1 + z + z^2/2 + \dots - 1) = 1 + z/2 + \dots" />
                                主要部が 0 なので、<strong>除去可能特異点</strong>である。
                            </li>
                            <li>
                                <InlineMath math="h(z) = 1 - \frac{1}{2z^2} + \frac{1}{24z^4} - \dots" />
                                主要部が無限項なので、<strong>真性特異点</strong>である。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        関数 <InlineMath math="f(z) = z^3 + 1" /> は無限遠点 <InlineMath math="z=\infty" /> においてどのような性質を持つか判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.3-1 に従い、<InlineMath math="w = 1/z" /> と置換して <InlineMath math="g(w) = f(1/w)" /> の <InlineMath math="w=0" /> での挙動を調べる。
                        </p>
                        <BlockMath math="g(w) = f(1/w) = \left( \frac{1}{w} \right)^3 + 1 = \frac{1}{w^3} + 1" />
                        <p>
                            <InlineMath math="w=0" /> は <InlineMath math="g(w)" /> の <strong>3位の極</strong> である。
                            したがって、<InlineMath math="f(z)" /> は <InlineMath math="z=\infty" /> において 3位の極を持つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        関数 <InlineMath math="f(z) = \frac{1}{(z-1)(z-2)}" /> を、円環領域 <InlineMath math="1 < |z| < 2" /> でローラン展開せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            部部分分数分解により：
                        </p>
                        <BlockMath math="f(z) = \frac{1}{z-2} - \frac{1}{z-1}" />
                        <ul className="list-disc list-inside space-y-4 mt-2">
                            <li>
                                <InlineMath math="|z| < 2" /> の範囲では、第1項を次のように展開する：
                                <BlockMath math="\frac{1}{z-2} = -\frac{1}{2} \frac{1}{1 - z/2} = -\frac{1}{2} \sum_{n=0}^\infty \left( \frac{z}{2} \right)^n = -\sum_{n=0}^\infty \frac{z^n}{2^{n+1}}" />
                            </li>
                            <li>
                                <InlineMath math="|z| > 1" /> の範囲では、第2項を次のように展開する：
                                <BlockMath math="-\frac{1}{z-1} = -\frac{1}{z} \frac{1}{1 - 1/z} = -\frac{1}{z} \sum_{n=0}^\infty \left( \frac{1}{z} \right)^n = -\sum_{n=1}^\infty \frac{1}{z^n}" />
                            </li>
                        </ul>
                        <p>
                            したがって、求める展開は：
                        </p>
                        <BlockMath math="f(z) = -\sum_{n=0}^\infty \frac{z^n}{2^{n+1}} - \sum_{n=1}^\infty \frac{1}{z^n}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        リーマンの除去可能特異点定理 (Theorem 6.2-1) を用いて、関数 <InlineMath math="f(z)" /> が孤立特異点 <InlineMath math="z_0" /> において <InlineMath math="\lim_{z\to z_0} (z-z_0)f(z) = 0" /> を満たすならば、<InlineMath math="z_0" /> は除去可能特異点であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            補助関数 <InlineMath math="h(z) = (z-z_0)f(z)" /> を考える。
                            仮定より <InlineMath math="\lim_{z\to z_0} h(z) = 0" /> であるため、<InlineMath math="z_0" /> の近傍で <InlineMath math="h(z)" /> は有界である。
                            リーマンの除去可能特異点定理により、<InlineMath math="z_0" /> は <InlineMath math="h(z)" /> の除去可能特異点であり、<InlineMath math="h(z_0)=0" /> と補正すれば正則になる。
                        </p>
                        <p className="mt-2">
                            正則関数 <InlineMath math="h(z)" /> のテイラー展開は <InlineMath math="h(z) = a_1(z-z_0) + a_2(z-z_0)^2 + \dots" /> となるはずである。
                            したがって <InlineMath math="f(z) = h(z)/(z-z_0) = a_1 + a_2(z-z_0) + \dots" /> となり、<InlineMath math="f(z)" /> 自体も除去可能特異点を持つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        複素平面上での <InlineMath math="m" /> 次多項式 <InlineMath math="P(z) = a_m z^m + \dots + a_0 \ (a_m \neq 0)" /> は、無限遠点において <InlineMath math="m" /> 位の極を持つことを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="w = 1/z" /> と置換すると、
                        </p>
                        <BlockMath math="P(1/w) = a_m (1/w)^m + a_{m-1} (1/w)^{m-1} + \dots + a_0 = \frac{a_m + a_{m-1}w + \dots + a_0 w^m}{w^m}" />
                        <p>
                            この関数の <InlineMath math="w=0" /> におけるローラン展開の主要部は <InlineMath math="\frac{a_m}{w^m} + \dots + \frac{a_1}{w}" /> である。
                            最大次数が <InlineMath math="m" />（<InlineMath math="a_m \neq 0" />）であるため、<InlineMath math="w=0" /> は <InlineMath math="m" /> 位の極である。
                            Definition 6.3-1 より、<InlineMath math="P(z)" /> は <InlineMath math="\infty" /> において <InlineMath math="m" /> 位の極を持つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        <InlineMath math="z_0" /> が関数 <InlineMath math="f(z)" /> の <InlineMath math="m" /> 位の極であり、関数 <InlineMath math="g(z)" /> の <InlineMath math="k" /> 位の極であるとき、
                        積 <InlineMath math="f(z)g(z)" /> は <InlineMath math="z_0" /> においてどのような特異点を持つか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            極の定義（Definition 6.2-2）により、
                            <InlineMath math="f(z) = (z-z_0)^{-m} \phi(z)" />、<InlineMath math="g(z) = (z-z_0)^{-k} \psi(z)" /> と表せる（ここで <InlineMath math="\phi, \psi" /> は <InlineMath math="z_0" /> で 0 でない正則関数）。
                        </p>
                        <p>
                            積を計算すると、
                            <BlockMath math="f(z)g(z) = (z-z_0)^{-(m+k)} \phi(z)\psi(z)" />
                            である。
                            <InlineMath math="\phi(z_0)\psi(z_0) \neq 0" /> であるから、積の主要部の最大次数は <InlineMath math="m+k" /> である。
                            したがって、<InlineMath math="z_0" /> は <strong><InlineMath math="m+k" /> 位の極</strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        関数 <InlineMath math="f(z)" /> が真性特異点 <InlineMath math="z_0" /> を持つとき、任意の複素数 <InlineMath math="\alpha" /> と任意の <InlineMath math="\epsilon > 0" /> に対して、
                        <InlineMath math="|f(z) - \alpha| < \epsilon" /> となるような点が近傍内に無限に存在すること（カゾラティ・ワイエルシュトラスの定理）を、リーマンの定理を用いた背理法で示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ある近傍 <InlineMath math="0 < |z - z_0| < \delta" /> 内に、そのような条件を満たす点が有限個（または存在しない）と仮定する。
                            すると、さらに小さな近傍内では常に <InlineMath math="|f(z) - \alpha| \ge \epsilon" /> となる。
                        </p>
                        <p>
                            このとき補助関数 <InlineMath math="g(z) = \frac{1}{f(z) - \alpha}" /> はこの近傍で正則かつ有界（<InlineMath math="|g(z)| \le 1/\epsilon" />）である。
                            Theorem 6.2-1 (リーマンの定理) により、<InlineMath math="z_0" /> は <InlineMath math="g(z)" /> の除去可能特異点となり、
                            <InlineMath math="z \to z_0" /> で <InlineMath math="g(z)" /> はある極限値 <InlineMath math="C" /> を持つ。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><InlineMath math="C \neq 0" /> のとき、<InlineMath math="f(z) = \alpha + 1/g(z) \to \alpha + 1/C" /> となり、除去可能特異点。</li>
                            <li><InlineMath math="C = 0" /> のとき、<InlineMath math="f(z)" /> は無限大へ発散し、極。</li>
                        </ul>
                        <p className="mt-2">
                            これらはいずれも <InlineMath math="z_0" /> が真性特異点であるという仮定に矛盾する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        円環領域 <InlineMath math="r < |z| < R" /> で正則な関数 <InlineMath math="f(z)" /> のローラン係数 <InlineMath math="c_{-1}" /> は、領域内の任意の閉曲線 <InlineMath math="\gamma" /> に対して <InlineMath math="\oint_\gamma f(z) dz = 2\pi i c_{-1}" /> を満たすことを、ローラン展開定理 (Theorem 6.1-1) の項別積分を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ローラン展開 <InlineMath math="f(z) = \sum_{n=-\infty}^\infty c_n z^n" /> を項別積分する。
                            円環内の閉路積分において：
                        </p>
                        <BlockMath math="\oint_\gamma f(z) dz = \sum_{n=-\infty}^\infty c_n \oint_\gamma z^n dz" />
                        <p>
                            §4.1 の結果（または原始関数の存在）により、
                            <InlineMath math="n \neq -1" /> のときは <InlineMath math="\oint_\gamma z^n dz = 0" /> である。
                            一方、<InlineMath math="n = -1" /> のときは Example 4.3-3 により <InlineMath math="\oint_\gamma z^{-1} dz = 2\pi i" /> となる。
                        </p>
                        <p>
                            したがって、
                            <BlockMath math="\oint_\gamma f(z) dz = c_{-1} (2\pi i)" />
                            が得られる。
                        </p>
                        <p className="mt-2 text-sm italic">
                            ※ この係数 <InlineMath math="c_{-1}" /> は後に「留数」と呼ばれる重要な概念となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        「無限遠点 <InlineMath math="z = \infty" /> で正則な多項式は、必ず定数関数である」ことを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            多項式 <InlineMath math="P(z) = a_m z^m + \dots + a_0" /> について、無線遠点での挙動を調べるために <InlineMath math="g(w) = P(1/w)" /> を考える。
                        </p>
                        <p>
                            <InlineMath math="z = \infty" /> で正則であるという定義は、<InlineMath math="g(w)" /> が <InlineMath math="w=0" /> で除去可能特異点（主要部が 0）であることを意味する。
                            Example 6.3-1 (多項式のケース) で示した通り、<InlineMath math="g(w)" /> の主要部は <InlineMath math="\frac{a_m}{w^m} + \dots + \frac{a_1}{w}" /> である。
                        </p>
                        <p>
                            これが 0 であるためには、正の次数に関する係数 <InlineMath math="a_m, a_{m-1}, \dots, a_1" /> がすべて 0 でなければならない。
                            よって <InlineMath math="P(z) = a_0" />（定数）となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
