import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_10_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        有理数体 <InlineMath math="\mathbb{Q}" /> 上の多項式 <InlineMath math="f(x) = x^2 + 1" /> の分解体を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            多項式 <InlineMath math="f(x) = x^2 + 1" /> の複素根は <InlineMath math="i" /> と <InlineMath math="-i" /> である。
                        </p>
                        <p>
                            これらすべての根を <InlineMath math="\mathbb{Q}" /> に添加した体は <InlineMath math="\mathbb{Q}(i, -i) = \mathbb{Q}(i)" /> である。
                        </p>
                        <p>
                            Definition 3.1-1 より、この体が分解体となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        正規拡大の定義（Definition 3.2-1）を述べよ。また、拡大 <InlineMath math="\mathbb{Q}(\sqrt[4]{2})/\mathbb{Q}" /> は正規拡大であるか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義：代数拡大 <InlineMath math="K/F" /> が<strong>正規拡大</strong>であるとは、<InlineMath math="F" /> 上の任意の既約多項式が <InlineMath math="K" /> 内に根を持てば、<InlineMath math="K" /> 内で完全分解することをいう。
                        </p>
                        <p className="mt-2">
                            判定：<InlineMath math="\mathbb{Q}(\sqrt[4]{2})/\mathbb{Q}" /> は<strong>正規拡大ではない</strong>。
                        </p>
                        <p>
                            理由：<InlineMath math="x^4 - 2" /> は <InlineMath math="\mathbb{Q}" /> 上既約であり、体内に根 <InlineMath math="\sqrt[4]{2}" /> を持つが、虚数根 <InlineMath math="\pm i\sqrt[4]{2}" /> は実数の部分体である <InlineMath math="\mathbb{Q}(\sqrt[4]{2})" /> には含まれないため、完全分解しない（Example 3.2-1 参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        代数閉体の定義に従い、実数体 <InlineMath math="\mathbb{R}" /> が代数閉体ではないことを理由と共に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.3-1 より、ある体が<strong>代数閉体</strong>であるとは、その体上の任意の多項式が体内に少なくとも一つの根を持つことをいう。
                        </p>
                        <p>
                            実数体 <InlineMath math="\mathbb{R}" /> 上の多項式 <InlineMath math="f(x) = x^2 + 1" /> は、実数の範囲にいかなる根も持たない。したがって、<InlineMath math="\mathbb{R}" /> は代数閉体ではない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        <InlineMath math="x^4 - 5x^2 + 6 \in \mathbb{Q}[x]" /> の分解体を求め、その拡大次数を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            多項式を因数分解すると、
                        </p>
                        <BlockMath math="x^4 - 5x^2 + 6 = (x^2 - 2)(x^2 - 3)" />
                        <p>
                            となる。複素根は <InlineMath math="\pm\sqrt{2}, \pm\sqrt{3}" /> の 4 つである。
                        </p>
                        <p>
                            これらを添加した体は <InlineMath math="K = \mathbb{Q}(\sqrt{2}, \sqrt{3})" /> である。第 1 章の問題 4 で示したように、この体の拡大次数は、
                        </p>
                        <BlockMath math="[K : \mathbb{Q}] = [\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})][\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2 \times 2 = 4" />
                        <p>
                            である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        <InlineMath math="x^3 - 1 \in \mathbb{Q}[x]" /> の分解体の拡大次数を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="x^3 - 1 = (x - 1)(x^2 + x + 1)" /> と分解される。根は <InlineMath math="1" /> と、<InlineMath math="x^2 + x + 1 = 0" /> の根である <InlineMath math="\omega, \omega^2" /> である。
                        </p>
                        <p>
                            これらを添加した分解体は <InlineMath math="K = \mathbb{Q}(\omega)" /> である。
                        </p>
                        <p>
                            <InlineMath math="\omega" /> の最小多項式は 2 次の <InlineMath math="x^2 + x + 1" /> であるため（第 1 章 問題 6 参照）、拡大次数は
                        </p>
                        <BlockMath math="[K : \mathbb{Q}] = 2" />
                        <p>
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        任意の 2 次拡大 <InlineMath math="K/F" /> は必ず正規拡大であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            拡大次数が 2 なので、<InlineMath math="\alpha \in K \setminus F" /> をとると <InlineMath math="K = F(\alpha)" /> である。
                        </p>
                        <p>
                            <InlineMath math="\alpha" /> の <InlineMath math="F" /> 上の最小多項式 <InlineMath math="m(x)" /> は 2 次多項式であり、<InlineMath math="m(x) = (x - \alpha)(x - \beta)" /> と根の和と積の関係（または割り算）から書ける。
                        </p>
                        <p>
                            <InlineMath math="\alpha + \beta = -a \in F" /> （<InlineMath math="a" /> は係数）であるため、<InlineMath math="\beta = -a - \alpha" /> も当然 <InlineMath math="K = F(\alpha)" /> に含まれる。
                        </p>
                        <p>
                            したがって、<InlineMath math="K" /> は <InlineMath math="m(x)" /> の分解体である。Theorem 3.2-1 より、分解体は正規拡大である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        <InlineMath math="\mathbb{Q}(\sqrt[3]{2})" /> の <InlineMath math="\mathbb{Q}" /> 上の正規閉包（normal closure）を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            正規閉包とは、元の体を含み、かつ基礎体上正規となる最小の体である（Remark 参照）。
                        </p>
                        <p>
                            <InlineMath math="\mathbb{Q}(\sqrt[3]{2})" /> に含まれる元 <InlineMath math="\sqrt[3]{2}" /> の最小多項式 <InlineMath math="x^3 - 2" /> のすべての共役な根を添加する必要がある。
                        </p>
                        <p>
                            根は <InlineMath math="\sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^2\sqrt[3]{2}" /> である。これらをすべて含む最小の体は、Example 3.1-1 で見たように <InlineMath math="\mathbb{Q}(\sqrt[3]{2}, \omega)" /> である。
                        </p>
                        <p>
                            よって、正規閉包は <InlineMath math="\mathbb{Q}(\sqrt[3]{2}, \omega)" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        任意の多項式 <InlineMath math="f(x)" /> の分解体 <InlineMath math="K/F" /> は、常に有限次拡大であることを、多項式の次数 <InlineMath math="n = \deg f" /> に関する数学的帰納法を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            帰納法で示す。
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><InlineMath math="n = 1" /> のとき、<InlineMath math="f" /> はすでに <InlineMath math="F" /> 内で分解しており <InlineMath math="K=F" />。拡大次数は 1 で有限。</li>
                            <li><InlineMath math="n > 1" /> とし、<InlineMath math="n-1" /> 次以下の多項式の分解体が有限次であると仮定する。</li>
                            <li>
                                <InlineMath math="f(x)" /> が <InlineMath math="F" /> 上既約ならば、一つの根 <InlineMath math="\alpha" /> を添加した拡大 <InlineMath math="F(\alpha)/F" /> の次数は <InlineMath math="n" /> で有限（Proposition 1.3-1）。<br />
                                <InlineMath math="F(\alpha)[x]" /> 内で <InlineMath math="f(x) = (x-\alpha)h(x)" /> と書け、<InlineMath math="h(x)" /> は <InlineMath math="n-1" /> 次である。帰納法の仮定より、<InlineMath math="F(\alpha)" /> 上の <InlineMath math="h" /> の分解体 <InlineMath math="K" /> は <InlineMath math="K/F(\alpha)" /> が有限次拡大となる。
                            </li>
                            <li>
                                拡大次数の連鎖律（Theorem 1.1-1）より、<InlineMath math="[K:F] = [K:F(\alpha)][F(\alpha):F]" />。有限値同士の積は有限である。
                            </li>
                        </ol>
                        <p className="mt-2">
                            以上より、分解体は常に有限次拡大である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        正規拡大の性質は推移的ではない。すなわち、<InlineMath math="K/E" /> と <InlineMath math="E/F" /> が正規であっても、<InlineMath math="K/F" /> が正規とは限らない。これを示す具体的な体の塔 <InlineMath math="F \subset E \subset K" /> を一つ構成せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            以下の体の塔を考える。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><InlineMath math="F = \mathbb{Q}" /></li>
                            <li><InlineMath math="E = \mathbb{Q}(\sqrt{2})" /></li>
                            <li><InlineMath math="K = \mathbb{Q}(\sqrt[4]{2})" /></li>
                        </ul>
                        <p>
                            1. <InlineMath math="E/F" /> は 2 次拡大なので正規である（問題 6）。<br />
                            2. <InlineMath math="K/E" /> において、<InlineMath math="K = E(\sqrt[4]{2})" /> であり、<InlineMath math="\sqrt[4]{2}" /> の <InlineMath math="E" /> 上の最小多項式は <InlineMath math="x^2 - \sqrt{2}" /> である。根は <InlineMath math="\pm\sqrt[4]{2}" /> であり、両方とも <InlineMath math="K" /> に含まれるため正規である。<br />
                            3. しかし <InlineMath math="K/F = \mathbb{Q}(\sqrt[4]{2})/\mathbb{Q}" /> は、問題 2 で見たように正規拡大ではない。
                        </p>
                        <p className="mt-2">
                            よって、正規性は一般に推移しない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        有理数体 <InlineMath math="\mathbb{Q}" /> において、「代数閉体としての複素数体 <InlineMath math="\mathbb{C}" />」と「<InlineMath math="\mathbb{Q}" /> の代数閉包 <InlineMath math="\bar{\mathbb{Q}}" />」の決定的な違いを、拡大次数の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>1. 代数拡大の条件：</b><br />
                            <InlineMath math="\bar{\mathbb{Q}}" /> は定義により <InlineMath math="\mathbb{Q}" /> の集合論的な代数拡大である（Theorem 3.3-1）。一方、<InlineMath math="\mathbb{C}" /> は <InlineMath math="\pi" /> や <InlineMath math="e" /> といった超越数を含んでいる。
                        </p>
                        <p className="mt-2">
                            <b>2. 拡大次数の次元：</b><br />
                            <InlineMath math="\bar{\mathbb{Q}}" /> は <InlineMath math="\mathbb{Q}" /> 上、可算無限次元のベクトル空間である。一方、<InlineMath math="\mathbb{C}" /> は実数体 <InlineMath math="\mathbb{R}" /> （非可算な濃度を持つ）を含んでいるため、<InlineMath math="\mathbb{Q}" /> 上、非可算無限次元となる。
                        </p>
                        <p className="mt-2">
                            <b>3. 結論：</b><br />
                            <InlineMath math="\bar{\mathbb{Q}}" /> は「<InlineMath math="\mathbb{Q}" /> 上代数的なものだけ」を極限まで集めた最小の代数閉体であるのに対し、<InlineMath math="\mathbb{C}" /> はそれを包含する、超越元をも許容した巨大な代数閉体である（Example 3.3-2 参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
