import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_10_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        以下の体拡大がガロア拡大であるかを判定し、理由を述べよ。
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li><InlineMath math="\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}" /></li>
                        <li><InlineMath math="\mathbb{Q}(\sqrt{2}, i)/\mathbb{Q}" /></li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            ガロア拡大の定義（Definition 5.1-1）は、正規かつ分離的な拡大であること。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li><strong>ガロア拡大ではない。</strong> <InlineMath math="x^3-2" /> の根のうち虚数根が含まれていないため正規拡大ではない。</li>
                            <li><strong>ガロア拡大である。</strong> 多項式 <InlineMath math="(x^2-2)(x^2+1)" /> の分解体である。標数 0 での分離多項式の分解体は常にガロア拡大である（Proposition 5.1-1）。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        固定体の定義（Definition 5.2-1）に基づき、複素数体 <InlineMath math="\mathbb{C}" /> の自己同型 <InlineMath math="\sigma(z) = \bar{z}" /> （複素共役）によって生成される群 <InlineMath math="G = \{e, \sigma\}" /> による不変集合 <InlineMath math="\mathbb{C}^G" /> が実数体 <InlineMath math="\mathbb{R}" /> であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            不変集合の定義より、<InlineMath math="\mathbb{C}^G = \{z \in \mathbb{C} \mid \sigma(z) = z\}" /> である。
                        </p>
                        <p>
                            <InlineMath math="z = a + bi \quad (a, b \in \mathbb{R})" /> とおくと、
                        </p>
                        <BlockMath math="\sigma(a+bi) = a-bi" />
                        <p>
                            不変条件 <InlineMath math="a+bi = a-bi" /> は <InlineMath math="2bi = 0 \iff b = 0" /> と同値である。
                        </p>
                        <p>
                            したがって、<InlineMath math="z = a" /> （純粋な実数）となり、固定体は <InlineMath math="\mathbb{R}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        拡大 <InlineMath math="\mathbb{Q}(\sqrt{2}, \sqrt{3}, \sqrt{5})/\mathbb{Q}" /> のガロア群の位数を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ガロア拡大の性質（Definition 5.1-1）より、ガロア群の位数は拡大次数と一致する。
                        </p>
                        <p>
                            各生成元は 2 次の最小多項式を持ち、次々に添加しても拡大次数は常に 2 倍ずつ増加する（第 1 章 問題 4 参照）。
                        </p>
                        <BlockMath math="[K : \mathbb{Q}] = 2 \times 2 \times 2 = 8" />
                        <p>
                            したがって、ガロア群の位数は <strong>8</strong> である。（実際、群は <InlineMath math="(\mathbb{Z}/2\mathbb{Z})^3" /> に同型である）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        双二次拡大 <InlineMath math="K = \mathbb{Q}(\sqrt{2}, \sqrt{3})" /> の中間体とガロア群の部分群の対応を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 5.3-1 で詳述した通り。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><strong>全体群：</strong> 対応する中間体は <InlineMath math="\mathbb{Q}" />。</li>
                            <li><strong>自明群：</strong> 対応する中間体は <InlineMath math="K" />。</li>
                            <li><strong>部分群 <InlineMath math="\langle\sigma\rangle" />：</strong> <InlineMath math="\sqrt{3}" /> を固定し、中間体 <InlineMath math="\mathbb{Q}(\sqrt{3})" />。</li>
                            <li><strong>部分群 <InlineMath math="\langle\tau\rangle" />：</strong> <InlineMath math="\sqrt{2}" /> を固定し、中間体 <InlineMath math="\mathbb{Q}(\sqrt{2})" />。</li>
                            <li><strong>部分群 <InlineMath math="\langle\sigma\tau\rangle" />：</strong> <InlineMath math="\sqrt{6}" /> を固定し、中間体 <InlineMath math="\mathbb{Q}(\sqrt{6})" />。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        <InlineMath math="K/F" /> がガロア拡大ならば、任意の中間体 <InlineMath math="E" /> に対して <InlineMath math="K/E" /> もガロア拡大となる理由を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ガロア拡大の条件（正規かつ分離的）を個別に確認する。
                        </p>
                        <p>
                            1. <strong>分離性：</strong> <InlineMath math="K/F" /> のすべての元が <InlineMath math="F" /> 上分離的であれば、当然それより大きい体 <InlineMath math="E" /> 上でも分離的である。
                        </p>
                        <p>
                            2. <strong>正規性：</strong> <InlineMath math="K" /> が <InlineMath math="F" /> 上のある多項式 <InlineMath math="f(x)" /> の分解体であれば、それと同じ多項式を <InlineMath math="E[x]" /> の元とみなした場合も、<InlineMath math="K" /> は根をすべて含んでいる。
                        </p>
                        <p>
                            したがって、<InlineMath math="K/E" /> はガロア拡大の定義を満たす。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        基礎体上のガロア拡大次数 <InlineMath math="[E:F]" /> がガロア群における部分群の指数 <InlineMath math="[G:H]" /> に一致することを、連鎖律とラグランジュの定理を用いて導け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            連鎖律より <InlineMath math="[K:F] = [K:E][E:F]" />。
                        </p>
                        <p>
                            ガロア理論の基本定理（Theorem 5.3-1）より、
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li><InlineMath math="[K:F] = |G|" /></li>
                            <li><InlineMath math="[K:E] = |H|" /></li>
                        </ul>
                        <p>
                            これを代入すると、<InlineMath math="|G| = |H| [E:F]" />。
                        </p>
                        <p>
                            ラグランジュの定理 <InlineMath math="|G| = |H| [G:H]" /> と比較することで、
                        </p>
                        <BlockMath math="[E : F] = [G : H]" />
                        <p>
                            が導かれる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        ガロア群が可換群である<strong>アーベル拡大</strong>において、いかなる中間体 <InlineMath math="E" /> も必ず <InlineMath math="F" /> 上の正規（ガロア）拡大になる理由を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.4-1 によれば、中間体 <InlineMath math="E" /> が <InlineMath math="F" /> 上ガロア拡大となるための条件は、対応する部分群 <InlineMath math="H" /> が <InlineMath math="G" /> の正規部分群であることである。
                        </p>
                        <p>
                            仮定よりガロア群 <InlineMath math="G" /> はアーベル群である。アーベル群において、任意の部分群は必ず正規部分群となる。
                        </p>
                        <p>
                            したがって、すべての中間体は正規（ガロア）拡大となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        多項式 <InlineMath math="x^4 - 2" /> の分解体 <InlineMath math="K = \mathbb{Q}(\sqrt[4]{2}, i)" /> において、中間体 <InlineMath math="E = \mathbb{Q}(\sqrt[4]{2})" /> が正規拡大でないことを、ガロア理論の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 5.5-1 より、ガロア群は二面体群 <InlineMath math="G = D_4 = \langle \sigma, \tau \rangle" /> である。
                        </p>
                        <p>
                            <InlineMath math="E = \mathbb{Q}(\sqrt[4]{2})" /> は、複素共役 <InlineMath math="\tau" /> によって固定される元ではないかと考えられる（根が実数であるため）。実際、対応する部分群は <InlineMath math="H = \langle \tau \rangle = \{e, \tau\}" /> である。
                        </p>
                        <p>
                            <InlineMath math="D_4" /> において、<InlineMath math="\tau" /> は正規部分群ではない。例えば <InlineMath math="\sigma\tau\sigma^{-1} = \sigma^2\tau \neq \tau" /> である。
                        </p>
                        <p>
                            定理 5.4-1 より、部分群が正規でないことは、対応する中間体が基礎体上の正規拡大ではないことと同値である。
                        </p>
                        <p>
                            代数的には、<InlineMath math="x^4 - 2" /> の根 <InlineMath math="\sqrt[4]{2}" /> を含んでいるが、共役な虚数根を含まないことに対応している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        <InlineMath math="x^3 - 2" /> の有理数体上の分解体のガロア群 <InlineMath math="S_3" /> において、正規部分群である交代群 <InlineMath math="A_3 = \langle \sigma \rangle" /> に対応する中間体が <InlineMath math="\mathbb{Q}(\omega)" /> であることを導け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            交代群 <InlineMath math="A_3" /> は、元の位数が 3 であるような巡回置換で構成される。
                        </p>
                        <p>
                            Example 5.1-2 において、<InlineMath math="\sigma" /> は <InlineMath math="\sigma(\sqrt[3]{2}) = \omega\sqrt[3]{2}" /> 、 <InlineMath math="\sigma(\omega) = \omega" /> と定義された。
                        </p>
                        <p>
                            この <InlineMath math="\sigma" /> は 1 の冪根 <InlineMath math="\omega" /> を固定する。アルティンの定理より、<InlineMath math="\mathbb{Q}(\omega)" /> の元はすべて固定されるため、<InlineMath math="\mathbb{Q}(\omega) \subset K^{A_3}" />。
                        </p>
                        <p>
                            次数については、<InlineMath math="[K : \mathbb{Q}(\omega)] = 3" /> であり、群の位数 <InlineMath math="|A_3| = 3" /> と一致する。
                        </p>
                        <p>
                            したがって、<InlineMath math="K^{A_3} = \mathbb{Q}(\omega)" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        <InlineMath math="K_1/F" /> と <InlineMath math="K_2/F" /> が共にガロア拡大であるとき、それらの合成体 <InlineMath math="K_1K_2" /> も <InlineMath math="F" /> 上ガロア拡大であることを、分解体の言葉を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 5.1-1 より、有限次拡大がガロア拡大であることは、ある分離多項式の分解体であることと同値である。
                        </p>
                        <p>
                            <InlineMath math="K_1" /> を <InlineMath math="f_1(x)" /> の、<InlineMath math="K_2" /> を <InlineMath math="f_2(x)" /> の分解体とする（これらは共に分離多項式とする）。
                        </p>
                        <p>
                            このとき、合成体 <InlineMath math="K_1K_2" /> は、積多項式 <InlineMath math="f(x) = f_1(x) f_2(x)" /> の分解体に他ならない。
                        </p>
                        <p>
                            <InlineMath math="f_1, f_2" /> がそれぞれ重根を持たず、かつ共通の既約因子を簡約すれば、<InlineMath math="f(x)" /> もまた分離多項式とみなせる（または、最小公倍多項式をとればよい）。
                        </p>
                        <p>
                            分離多項式の分解体はガロア拡大であるため、<InlineMath math="K_1K_2/F" /> もガロア拡大となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
