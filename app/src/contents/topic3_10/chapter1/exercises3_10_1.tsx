import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_10_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        体の拡大の塔 <InlineMath math="F \subset K \subset L" /> において、拡大次数が <InlineMath math="[L : K] = 3" />、<InlineMath math="[K : F] = 4" /> であるとする。このとき、拡大次数 <InlineMath math="[L : F]" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            拡大次数の連鎖律（Theorem 1.1-1）より、
                        </p>
                        <BlockMath math="[L : F] = [L : K][K : F]" />
                        <p>
                            が成り立つ。与えられた数値を代入すると、
                        </p>
                        <BlockMath math="[L : F] = 3 \times 4 = 12" />
                        <p>
                            を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        実数 <InlineMath math="\alpha = \sqrt[4]{5}" /> が有理数体 <InlineMath math="\mathbb{Q}" /> 上で代数的であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-1 より、<InlineMath math="\alpha" /> が <InlineMath math="\mathbb{Q}" /> 上代数的であるとは、<InlineMath math="\alpha" /> を根に持つ <InlineMath math="0" /> でない多項式 <InlineMath math="f(x) \in \mathbb{Q}[x]" /> が存在することである。
                        </p>
                        <p>
                            <InlineMath math="\alpha = \sqrt[4]{5}" /> より <InlineMath math="\alpha^4 = 5" /> であるから、
                        </p>
                        <BlockMath math="f(x) = x^4 - 5" />
                        <p>
                            とおくと、<InlineMath math="f(x)" /> は <InlineMath math="\mathbb{Q}" /> 係数の多項式であり、<InlineMath math="f(\alpha) = 0" /> を満たす。したがって、<InlineMath math="\alpha" /> は <InlineMath math="\mathbb{Q}" /> 上代数的である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        <InlineMath math="\alpha = \sqrt{3} + 1" /> の <InlineMath math="\mathbb{Q}" /> 上の最小多項式を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\alpha - 1 = \sqrt{3}" /> の両辺を 2 乗すると、
                        </p>
                        <BlockMath math="\begin{aligned} (\alpha - 1)^2 = 3 &\implies \alpha^2 - 2\alpha + 1 = 3 \\ &\implies \alpha^2 - 2\alpha - 2 = 0 \end{aligned}" />
                        <p>
                            よって <InlineMath math="\alpha" /> は <InlineMath math="f(x) = x^2 - 2x - 2 \in \mathbb{Q}[x]" /> の根である。
                        </p>
                        <p>
                            この <InlineMath math="f(x)" /> が既約であることを示す。2 次多項式が有理数体上で既約であるためには、有理根を持たないことを示せばよい。有理根定理より、候補は <InlineMath math="\pm 1, \pm 2" /> であるが、
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><InlineMath math="f(1) = 1 - 2 - 2 = -3 \neq 0" /></li>
                            <li><InlineMath math="f(-1) = 1 + 2 - 2 = 1 \neq 0" /></li>
                            <li><InlineMath math="f(2) = 4 - 4 - 2 = -2 \neq 0" /></li>
                            <li><InlineMath math="f(-2) = 4 + 4 - 2 = 6 \neq 0" /></li>
                        </ul>
                        <p>
                            となり根を持たない。したがって <InlineMath math="f(x)" /> は既約なモニック多項式である。Definition 1.3-1 より、これが <InlineMath math="\alpha" /> の最小多項式である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        拡大次数 <InlineMath math="[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = 4" /> であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            体の塔 <InlineMath math="\mathbb{Q} \subset \mathbb{Q}(\sqrt{2}) \subset \mathbb{Q}(\sqrt{2}, \sqrt{3})" /> を考える。
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <InlineMath math="\mathbb{Q}(\sqrt{2})/\mathbb{Q}" /> について：<br />
                                <InlineMath math="\sqrt{2}" /> の最小多項式は <InlineMath math="x^2 - 2" /> であり、次数は 2 である。Proposition 1.3-1 より、<InlineMath math="[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2" />。
                            </li>
                            <li>
                                <InlineMath math="\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}(\sqrt{2})" /> について：<br />
                                <InlineMath math="\sqrt{3}" /> は <InlineMath math="f(x) = x^2 - 3 \in \mathbb{Q}(\sqrt{2})[x]" /> の根である。もし <InlineMath math="f(x)" /> が <InlineMath math="\mathbb{Q}(\sqrt{2})" /> 上で可約であれば、<InlineMath math="\sqrt{3} \in \mathbb{Q}(\sqrt{2})" /> となるはずである。しかし、<InlineMath math="a, b \in \mathbb{Q}" /> に対して <InlineMath math="\sqrt{3} = a + b\sqrt{2}" /> と仮定して矛盾を導くことで、これが不可能であることがわかる。
                                <p className="ml-4 mt-1">
                                    （実際、<InlineMath math="3 = a^2 + 2b^2 + 2ab\sqrt{2}" /> より <InlineMath math="\sqrt{2} = \frac{3 - a^2 - 2b^2}{2ab}" /> となり、<InlineMath math="\sqrt{2}" /> の無理性に反する。ただし <InlineMath math="ab \neq 0" /> の場合）
                                </p>
                                したがって <InlineMath math="f(x)" /> は <InlineMath math="\mathbb{Q}(\sqrt{2})" /> 上で既約であり、<InlineMath math="[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] = 2" />。
                            </li>
                        </ol>
                        <p className="mt-2">
                            連鎖律（Theorem 1.1-1）より、
                        </p>
                        <BlockMath math="[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = 2 \times 2 = 4" />
                        <p>
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        <InlineMath math="\alpha" /> が <InlineMath math="F" /> 上代数的であれば、拡大次数 <InlineMath math="[F(\alpha) : F]" /> は有限であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\alpha" /> は <InlineMath math="F" /> 上代数的であるから、Definition 1.3-1 より最小多項式 <InlineMath math="m(x) \in F[x]" /> が存在する。
                        </p>
                        <p>
                            最小多項式の次数を <InlineMath math="n = \deg m" /> とする。<InlineMath math="\alpha" /> は代数的元なので <InlineMath math="n \geq 1" /> である。
                        </p>
                        <p>
                            Proposition 1.3-1 より、単拡大 <InlineMath math="F(\alpha)/F" /> の拡大次数は最小多項式の次数に等しい。すなわち、
                        </p>
                        <BlockMath math="[F(\alpha) : F] = n" />
                        <p>
                            である。<InlineMath math="n" /> は有限の値であるため、拡大次数 <InlineMath math="[F(\alpha) : F]" /> は有限である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        <InlineMath math="\omega = e^{2\pi i / 3}" />（1 の原始 3 乗根）の <InlineMath math="\mathbb{Q}" /> 上の最小多項式を求め、拡大次数 <InlineMath math="[\mathbb{Q}(\omega) : \mathbb{Q}]" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\omega^3 = 1" /> より、<InlineMath math="\omega" /> は <InlineMath math="x^3 - 1 = (x - 1)(x^2 + x + 1) = 0" /> の根である。<InlineMath math="\omega \neq 1" /> であるから、<InlineMath math="\omega" /> は <InlineMath math="f(x) = x^2 + x + 1 = 0" /> の根である。
                        </p>
                        <p>
                            多項式 <InlineMath math="f(x) = x^2 + x + 1" /> は有理数体上で実数解を持たない（判別式 <InlineMath math="D = 1^2 - 4 = -3 < 0" />）ため、1 次の因数を持たず既約である。またモニックでもあるため、Definition 1.3-1 より <InlineMath math="f(x)" /> は <InlineMath math="\omega" /> の最小多項式である。
                        </p>
                        <p>
                            Proposition 1.3-1 より、拡大次数は最小多項式の次数に等しいため、
                        </p>
                        <BlockMath math="[\mathbb{Q}(\omega) : \mathbb{Q}] = \deg f = 2" />
                        <p>
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        実数 <InlineMath math="\sqrt[4]{2}" /> が定規とコンパスで作図可能であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            実数 <InlineMath math="\alpha = \sqrt[4]{2}" /> の有理数体 <InlineMath math="\mathbb{Q}" /> 上の最小多項式は <InlineMath math="x^4 - 2" /> である。
                        </p>
                        <p>
                            既約性の確認：アイゼンシュタインの判定法を素数 <InlineMath math="p=2" /> に対して適用することで、<InlineMath math="x^4 - 2" /> は <InlineMath math="\mathbb{Q}" /> 上既約であることがわかる。
                        </p>
                        <p>
                            したがって、Proposition 1.3-1 より拡大次数は
                        </p>
                        <BlockMath math="[\mathbb{Q}(\sqrt[4]{2}) : \mathbb{Q}] = 4" />
                        <p>
                            である。ここで <InlineMath math="4 = 2^2" /> であり、これは 2 のべき乗（<InlineMath math="2^k" />）の形をしている。
                        </p>
                        <p>
                            Proposition 1.4-1 により、拡大次数が 2 のべき乗である実数は作図可能である。よって、<InlineMath math="\sqrt[4]{2}" /> は作図可能である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        体の拡大 <InlineMath math="K/F" /> の拡大次数 <InlineMath math="[K : F]" /> が素数 <InlineMath math="p" /> であるとする。このとき、任意の <InlineMath math="\alpha \in K \setminus F" /> に対して、<InlineMath math="K = F(\alpha)" /> が成り立つことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\alpha \in K \setminus F" /> より、<InlineMath math="F \subsetneq F(\alpha) \subset K" /> という中間体の列が構成できる。
                        </p>
                        <p>
                            拡大次数の連鎖律（Theorem 1.1-1）より、
                        </p>
                        <BlockMath math="[K : F] = [K : F(\alpha)][F(\alpha) : F]" />
                        <p>
                            が成り立つ。仮定より <InlineMath math="[K : F] = p" /> である。
                        </p>
                        <p>
                            <InlineMath math="p" /> は素数であるため、その正の約数は <InlineMath math="1" /> と <InlineMath math="p" /> のみである。したがって、整数値をとる拡大次数について以下のいずれか一方が成り立つ。
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><InlineMath math="[F(\alpha) : F] = 1" /> かつ <InlineMath math="[K : F(\alpha)] = p" /></li>
                            <li><InlineMath math="[F(\alpha) : F] = p" /> かつ <InlineMath math="[K : F(\alpha)] = 1" /></li>
                        </ol>
                        <p>
                            しかし、<InlineMath math="\alpha \notin F" /> より <InlineMath math="F(\alpha) \neq F" /> であるから、拡大次数は <InlineMath math="[F(\alpha) : F] > 1" /> である。よって (1) のケースは除外され、(2) のケースのみが成立する。
                        </p>
                        <p>
                            <InlineMath math="[K : F(\alpha)] = 1" /> はベクトル空間として一致していることを意味するため、<InlineMath math="K = F(\alpha)" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        実数 <InlineMath math="\alpha = \sqrt{2} + \sqrt{3}" /> の <InlineMath math="\mathbb{Q}" /> 上の最小多項式を求め、かつその既約性を証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\alpha = \sqrt{2} + \sqrt{3}" /> とおく。<InlineMath math="\alpha^2 = 2 + 3 + 2\sqrt{6} = 5 + 2\sqrt{6}" /> より、
                        </p>
                        <BlockMath math="\alpha^2 - 5 = 2\sqrt{6}" />
                        <p>
                            両辺を 2 乗して、
                        </p>
                        <BlockMath math="\begin{aligned} (\alpha^2 - 5)^2 = 24 &\implies \alpha^4 - 10\alpha^2 + 25 = 24 \\ &\implies \alpha^4 - 10\alpha^2 + 1 = 0 \end{aligned}" />
                        <p>
                            よって <InlineMath math="\alpha" /> は <InlineMath math="f(x) = x^4 - 10x^2 + 1 \in \mathbb{Q}[x]" /> の根である。
                        </p>
                        <p>
                            次に既約性を証明する。問題 4 より、<InlineMath math="[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = 4" /> である。また <InlineMath math="\alpha \in \mathbb{Q}(\sqrt{2}, \sqrt{3})" /> より、明らかに <InlineMath math="\mathbb{Q}(\alpha) \subset \mathbb{Q}(\sqrt{2}, \sqrt{3})" />。
                        </p>
                        <p>
                            逆向きの包含については、
                        </p>
                        <BlockMath math="\begin{aligned} \alpha^3 &= (\sqrt{2}+\sqrt{3})^3 = 2\sqrt{2} + 6\sqrt{3} + 9\sqrt{2} + 3\sqrt{3} \\ &= 11\sqrt{2} + 9\sqrt{3} \\ \end{aligned}" />
                        <BlockMath math="\begin{aligned} \alpha^3 - 9\alpha &= (11\sqrt{2} + 9\sqrt{3}) - 9(\sqrt{2} + \sqrt{3}) = 2\sqrt{2} \\ &\implies \sqrt{2} = \frac{\alpha^3 - 9\alpha}{2} \in \mathbb{Q}(\alpha) \end{aligned}" />
                        <p>
                            となり <InlineMath math="\sqrt{2} \in \mathbb{Q}(\alpha)" />。これより <InlineMath math="\sqrt{3} = \alpha - \sqrt{2} \in \mathbb{Q}(\alpha)" /> も従う。よって <InlineMath math="\mathbb{Q}(\sqrt{2}, \sqrt{3}) = \mathbb{Q}(\alpha)" />。
                        </p>
                        <p>
                            したがって <InlineMath math="[\mathbb{Q}(\alpha) : \mathbb{Q}] = 4" />。Proposition 1.3-1 より、拡大次数は最小多項式の次数に等しいため、<InlineMath math="\det(\alpha, \mathbb{Q})" /> は 4 次でなければならない。<InlineMath math="f(x)" /> は 4 次モニック多項式であり <InlineMath math="\alpha" /> を根に持つため、これが最小多項式であり、必然的に既約である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        定規とコンパスを用いて、正九角形を構成することは（一般には）不可能であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            正九角形の構成は、中心角 <InlineMath math="360^\circ / 9 = 40^\circ" /> の作図、すなわち実数 <InlineMath math="\cos 40^\circ" /> の作図可能性と同値である。
                        </p>
                        <p>
                            <InlineMath math="\theta = 40^\circ" /> とおき、三倍角の公式 <InlineMath math="\cos 3\theta = 4\cos^3 \theta - 3\cos \theta" /> を用いる。
                        </p>
                        <BlockMath math="\begin{aligned} \cos 120^\circ &= 4\cos^3 40^\circ - 3\cos 40^\circ \\ &\implies -\frac{1}{2} = 4\cos^3 40^\circ - 3\cos 40^\circ \end{aligned}" />
                        <p>
                            <InlineMath math="c = \cos 40^\circ" /> とおき、両辺を 2 倍して整理すると、
                        </p>
                        <BlockMath math="8c^3 - 6c + 1 = 0" />
                        <p>
                            多項式 <InlineMath math="f(x) = 8x^3 - 6x + 1 \in \mathbb{Q}[x]" /> を考える。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>（既約性の確認）：有理根定理より、有理根の候補は <InlineMath math="\pm 1, \pm 1/2, \pm 1/4, \pm 1/8" /> である。これらを代入しても <InlineMath math="0" /> にならない。例えば <InlineMath math="f(1/2) = 1 - 3 + 1 = -1" />、<InlineMath math="f(-1/4) = 8(-1/64) + 6/4 + 1 = -1/8 + 3/2 + 1 \neq 0" /> 等。根を持たない 3 次多項式は既約である。</li>
                        </ul>
                        <p>
                            したがって、<InlineMath math="c" /> の最小多項式は <InlineMath math="x^3 - \frac{3}{4}x + \frac{1}{8}" />（モニック化）であり、拡大次数は
                        </p>
                        <BlockMath math="[\mathbb{Q}(\cos 40^\circ) : \mathbb{Q}] = 3" />
                        <p>
                            である。Proposition 1.4-1 により、作図可能な実数の拡大次数は 2 のべき乗でなければならない。<InlineMath math="3" /> は 2 のべき乗ではないため、<InlineMath math="\cos 40^\circ" /> は作図不可能である。
                        </p>
                        <p>
                            ゆえに、正九角形の構成は不可能である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
