import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_6_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        汎関数 <InlineMath math="J[u] = \int_0^1 (u(x))^2 dx" /> について、以下の各関数の値を求めよ。
                    </p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li><InlineMath math="u(x) = 1" /></li>
                        <li><InlineMath math="u(x) = x" /></li>
                        <li><InlineMath math="u(x) = e^x" /></li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            定義に従って各関数の 2 乗を積分する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li><InlineMath math="J[1] = \int_0^1 1^2 dx = [x]_0^1 = 1" /></li>
                            <li><InlineMath math="J[x] = \int_0^1 x^2 dx = [\frac{x^3}{3}]_0^1 = \frac{1}{3}" /></li>
                            <li><InlineMath math="J[e^x] = \int_0^1 e^{2x} dx = [\frac{1}{2} e^{2x}]_0^1 = \frac{e^2 - 1}{2}" /></li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        境界条件 <InlineMath math="u(0) = 0, \ u(1) = 1" /> を持つ許容関数クラス <InlineMath math="\mathcal{A}" /> を考える。
                        以下の関数のうち、<InlineMath math="\mathcal{A}" /> に属するものはどれか。
                    </p>
                    <ol className="list-alpha list-inside space-y-1 mt-2">
                        <li><InlineMath math="u(x) = x" /></li>
                        <li><InlineMath math="u(x) = x^2" /></li>
                        <li><InlineMath math="u(x) = 1 - x" /></li>
                        <li><InlineMath math="u(x) = \sin(\pi x/2)" /></li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            各点での値を確認する。
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li><b>a</b>: <InlineMath math="u(0)=0, u(1)=1" />。 属する。</li>
                            <li><b>b</b>: <InlineMath math="u(0)=0, u(1)=1" />。 属する。</li>
                            <li><b>c</b>: <InlineMath math="u(0)=1, u(1)=0" />。 属さない。</li>
                            <li><b>d</b>: <InlineMath math="u(0)=0, u(1)=1" />。 属する。</li>
                        </ul>
                        <p>
                            答え： <b>a, b, d</b>
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        固定端条件 <InlineMath math="u(a) = \alpha, \ u(b) = \beta" /> の下での変分方向 <InlineMath math="\eta(x)" /> について、
                        境界点形式 <InlineMath math="x=a" /> および <InlineMath math="x=b" /> で <InlineMath math="\eta" /> が満たすべき条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-2 より、摂動後の関数 <InlineMath math="u + \varepsilon \eta" /> も再び同じ境界条件を満たす必要がある。
                        </p>
                        <p>
                            <BlockMath math="(u + \varepsilon \eta)(a) = u(a) + \varepsilon \eta(a) = \alpha + \varepsilon \eta(a)" />
                            これが <InlineMath math="\alpha" /> に一致するためには、<b> <InlineMath math="\eta(a) = 0" /> </b> でなければならない。同様に <b> <InlineMath math="\eta(b) = 0" /> </b> も必要である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') dx" /> において、<InlineMath math="F(x, u, u') = u^2 + (u')^2" /> であるとき、
                        その第一変分 <InlineMath math="\delta J[u; \eta]" /> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.3-1 の公式 <InlineMath math="\delta J = \int_a^b (F_u \eta + F_{u'} \eta') dx" /> を用いる。
                        </p>
                        <p>
                            偏導関数を求めると：
                            <BlockMath math="\frac{\partial F}{\partial u} = 2u, \quad \frac{\partial F}{\partial u'} = 2u'" />
                        </p>
                        <p>
                            これらを代入して：
                            <BlockMath math="\delta J[u; \eta] = \int_a^b (2u \eta + 2u' \eta') dx = 2 \int_a^b (u \eta + u' \eta') dx" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        汎関数 <InlineMath math="J[u]" /> が「線形」である（すなわち <InlineMath math="J[c_1 u_1 + c_2 u_2] = c_1 J[u_1] + c_2 J[u_2]" />）とき、
                        任意の <InlineMath math="u" /> における変分方向 <InlineMath math="\eta" /> への第一変分は <InlineMath math="\delta J[u; \eta] = J[\eta]" /> となることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            第一変分の定義（Definition 1.3-1）を用いる：
                            <BlockMath math="\delta J[u; \eta] = \frac{d}{d\varepsilon} J[u + \varepsilon \eta] \bigg|_{\varepsilon=0}" />
                        </p>
                        <p>
                            <InlineMath math="J" /> の線形性より：
                            <BlockMath math="J[u + \varepsilon \eta] = J[u] + \varepsilon J[\eta]" />
                        </p>
                        <p>
                            これを <InlineMath math="\varepsilon" /> で微分すると：
                            <BlockMath math="\frac{d}{d\varepsilon} (J[u] + \varepsilon J[\eta]) = J[\eta]" />
                        </p>
                        <p>
                            これは <InlineMath math="\varepsilon" /> によらず一定の値であるため、<InlineMath math="\varepsilon=0" /> を代入しても <b><InlineMath math="J[\eta]" /></b> となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        汎関数の極値が存在するための必要条件が <InlineMath math="\delta J = 0" /> であることを証明する際、
                        導入される 1 変数関数 <InlineMath math="\phi(\varepsilon) = J[u^* + \varepsilon \eta]" /> において、
                        なぜ <InlineMath math="\phi'(0)" /> が 0 にならなければならないのか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="u^*" /> が汎関数の極値を与えるとき、その関数の周りでのどのような「摂動」に対しても、
                            汎関数の値の変化が最小（または最大）となるはずである。
                        </p>
                        <p>
                            変分方向 <InlineMath math="\eta" /> を一つ固定すると、<InlineMath math="\phi(\varepsilon)" /> は実数 <InlineMath math="\varepsilon" /> の通常の関数であり、
                            <InlineMath math="u^*" /> において汎関数が極値をとることは、<InlineMath math="\varepsilon=0" /> において <InlineMath math="\phi(\varepsilon)" /> が極値をとることを意味する。
                            基礎的な微積分の定理（フェルマーの停留点定理）より、可微分関数が極値をとる点では微分係数が 0 でなければならない。
                            よって <InlineMath math="\phi'(0) = 0" /> が導かれる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        ラグランジアンが <InlineMath math="F(x, u, u') = e^u \sqrt{1 + u'^2}" /> で与えられる汎関数の第一変分において、
                        <InlineMath math="\eta" /> の係数となる項（被積分関数内の <InlineMath math="\eta" /> にかかる部分）を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ラグランジアン <InlineMath math="F" /> の <InlineMath math="u" /> に関する偏導関数を求めればよい。
                        </p>
                        <p>
                            <BlockMath math="\frac{\partial F}{\partial u} = \frac{\partial}{\partial u} (e^u) \sqrt{1 + u'^2} = e^u \sqrt{1 + u'^2}" />
                        </p>
                        <p>
                            したがって、第一変分を <InlineMath math="\int (A \eta + B \eta') dx" /> と書いたとき、<InlineMath math="A = e^u \sqrt{1 + u'^2}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        汎関数 <InlineMath math="J[u]" /> の変化をパラメータ <InlineMath math="\varepsilon" /> で Taylor 展開したときの 2 次の項
                        <BlockMath math="\delta^2 J[u; \eta] = \frac{1}{2} \frac{d^2}{d\varepsilon^2} J[u + \varepsilon \eta] \bigg|_{\varepsilon=0}" />
                        を<b>第二変分</b>と呼ぶ。積分のラグランジアンが <InlineMath math="F(u, u')" />（<InlineMath math="x" /> に依存しない）のとき、
                        第二変分の形を導出せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            被積分関数を <InlineMath math="\varepsilon" /> で 2 回微分する。
                            1 回微分は <InlineMath math="F_u \eta + F_{u'} \eta'" /> であった。これをさらに <InlineMath math="\varepsilon" /> で微分すると：
                            <BlockMath math="\begin{aligned} \frac{\partial}{\partial \varepsilon} (F_u(u+\varepsilon\eta) \eta + F_{u'}(u'+\varepsilon\eta') \eta') &= (F_{uu} \eta + F_{uu'} \eta') \eta + (F_{u'u} \eta + F_{u'u'} \eta') \eta' \\ &= F_{uu} \eta^2 + 2 F_{uu'} \eta \eta' + F_{u'u'} (\eta')^2 \end{aligned}" />
                        </p>
                        <p>
                            これに <InlineMath math="\varepsilon = 0" /> を代入し、積分して 1/2 をかける。
                            <BlockMath math="\delta^2 J[u; \eta] = \frac{1}{2} \int_a^b (F_{uu} \eta^2 + 2 F_{uu'} \eta \eta' + F_{u'u'} (\eta')^2) dx" />
                            これが第二変分である。これは極値が「極小」か「極大」かを判定するために用いられる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        <b>ガトー微分</b>と通常の微分の関係について：
                        関数 <InlineMath math="J[u]" /> がすべての <InlineMath math="\eta" /> に対して第一変分を持ち、その値が <InlineMath math="\eta" /> について線形かつ連続であるとき、
                        <InlineMath math="J" /> は微分可能であるという。
                        もし <InlineMath math="J[u] = \int_{\Omega} |\nabla u|^2 dx" /> のとき、その第一変分をグリーンの第一恒等式を用いて「<InlineMath math="\eta" /> の積分の形」に変形せよ（境界条件は固定端とする）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 第一変分を計算すると（Example 1.1-2 参照）：
                            <BlockMath math="\delta J[u; \eta] = \int_{\Omega} 2 \nabla u \cdot \nabla \eta \, dx" />
                        </p>
                        <p>
                            2. グリーンの第一恒等式 <InlineMath math="\int_{\Omega} \nabla u \cdot \nabla \eta dx = \int_{\partial \Omega} \eta \frac{\partial u}{\partial n} dS - \int_{\Omega} \eta \Delta u dx" /> を用いる。
                        </p>
                        <p>
                            3. 固定端条件（Definition 1.2-2）より境界上で <InlineMath math="\eta = 0" /> なので境界項は消える。
                            <BlockMath math="\delta J[u; \eta] = -2 \int_{\Omega} \eta \Delta u \, dx" />
                        </p>
                        <p>
                            この表示は、極値条件 <InlineMath math="\delta J = 0" /> がラプラス方程式 <InlineMath math="\Delta u = 0" /> に帰着することを示唆している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        汎関数の極値問題において、解の候補 <InlineMath math="u" /> の微小変化 <InlineMath math="\delta u" /> と、それによる汎関数の変化 <InlineMath math="\delta J" /> の記法は、
                        <BlockMath math="\delta J = \int_a^b \left( \frac{\partial F}{\partial u} - \frac{d}{dx} \frac{\partial F}{\partial u'} \right) \delta u \, dx + \text{境界項}" />
                        と表現されることが多い。この式の「括弧内」が 0 であることに物理的な意味がある理由を考察せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 物理学、特に古典力学において、ラグランジアンから導かれるこの括弧内の式は「運動方程式」そのものである。
                        </p>
                        <p>
                            2. ハミルトンの原理（最小作用の原理）によれば、自然界のプロセスは作用積分 <InlineMath math="J" /> が静止（変分が 0）するように進行する。
                        </p>
                        <p>
                            3. したがって、第一変分が消えるという数学的条件は、システムに加わるすべての力（エネルギー）が釣り合っている、あるいは最小の状態にあるという物理的一貫性を保証している。
                            この括弧内の式が 0 になるという局所的な法則が、汎関数全体を最適化するという大域的な目的を達成する手段となっているのである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
