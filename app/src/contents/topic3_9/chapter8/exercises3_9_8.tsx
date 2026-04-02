import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_9_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="8" number={1}>
                    <p>
                        整数係数多項式環 <InlineMath math="\mathbb{Z}[x]" /> において、次の多項式のうち原始多項式（primitive polynomial）であるものをすべて選べ。
                    </p>
                    <ol className="list-decimal list-inside space-y-1">
                        <li><InlineMath math="2x^2 + 4x + 6" /></li>
                        <li><InlineMath math="6x^2 + 35x - 7" /></li>
                        <li><InlineMath math="x^4 + 1" /></li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            原始多項式の定義（係数の最大公約数が 1 であること）に従い判定する。
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><b>1. 2x² + 4x + 6：</b> 係数の gcd は <InlineMath math="\gcd(2, 4, 6) = 2" /> であるため、原始的ではない。</li>
                            <li><b>2. 6x² + 35x - 7：</b> 係数の gcd は <InlineMath math="\gcd(6, 35, -7) = \gcd(6, 7 \cdot 5, -7) = 1" /> であるため、原始多項式である。</li>
                            <li><b>3. x⁴ + 1：</b> 最高次係数が 1 であり、定数項も 1 なので、gcd は必ず 1 となる。したがって原始多項式である。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>
                        多変数多項式環 <InlineMath math="\mathbb{Q}[x, y]" /> は PID（単項イデアル整域）ではない。
                        イデアル <InlineMath math="I = (x, y)" /> が主イデアルにならない理由を簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                もし <InlineMath math="(x, y) = (f(x, y))" /> となる単一の多項式 <InlineMath math="f" /> が存在すると仮定する。
                            </li>
                            <li>
                                <InlineMath math="x \in (f)" /> より、<InlineMath math="f" /> は <InlineMath math="x" /> を割り切る必要がある。したがって <InlineMath math="f" /> は定数または <InlineMath math="x" /> の定数倍である。
                            </li>
                            <li>
                                同様に <InlineMath math="y \in (f)" /> より、<InlineMath math="f" /> は <InlineMath math="y" /> を割り切る必要がある。
                            </li>
                            <li>
                                <InlineMath math="x" /> と <InlineMath math="y" /> の両方を割り切る多項式は定数（<InlineMath math="\mathbb{Q}" /> の元）のみである。
                            </li>
                            <li>
                                しかし <InlineMath math="I = (x, y)" /> は定数項が 0 の多項式のみを含むため、非零定数を含まない。したがって、定数で生成されることはあり得ない。
                            </li>
                        </ul>
                        <p className="mt-2 text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>
                        整域 <InlineMath math="D" /> 上の多項式 <InlineMath math="f(x) = a_n x^n + \dots + a_0" /> に対して、アイゼンシュタインの判定法を適用できるために素元 <InlineMath math="p" /> が満たすべき 3 つの条件を書け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 8.4-1 より、以下の条件を満たす素元 <InlineMath math="p" /> が存在すればよい。
                        </p>
                        <ol className="list-decimal list-inside space-y-1">
                            <li><InlineMath math="p \nmid a_n" /> （最高次係数を割り切らない）</li>
                            <li><InlineMath math="p \mid a_i" /> for all <InlineMath math="0 \leq i \leq n-1" /> （最高次以外のすべての係数を割り切る）</li>
                            <li><InlineMath math="p^2 \nmid a_0" /> （定数項を <InlineMath math="p^2" /> で割り切らない）</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="8" number={4}>
                    <p>
                        2変数多項式 <InlineMath math="f(x, y) = x^2 + y^2 - 1" /> が <InlineMath math="\mathbb{Q}[x, y]" /> において既約であることを示したい。
                        これを <InlineMath math="(\mathbb{Q}[y])[x]" /> と見て、次数に関する議論を用いて既約性を示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(x, y) = x^2 + (y^2 - 1)" /> と見る。これは <InlineMath math="R = \mathbb{Q}[y]" /> を係数環とする <InlineMath math="x" /> の2次式である。
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                もし <InlineMath math="f" /> が分解可能なら、<InlineMath math="x" /> に関する1次式の積 <InlineMath math="(x - \alpha(y))(x - \beta(y))" /> となる（<InlineMath math="\alpha, \beta \in \mathbb{Q}[y]" />）。
                            </li>
                            <li>
                                このとき <InlineMath math="x = \alpha(y)" /> は <InlineMath math="x^2 = 1 - y^2" /> の解であるはずである。すなわち <InlineMath math="\alpha(y)^2 = 1 - y^2" />。
                            </li>
                            <li>
                                しかし、多項式の次数を考えると、左辺の次数は偶数、右辺 <InlineMath math="1 - y^2" /> を自乗して作ることはできず（<InlineMath math="\deg(\alpha^2) = 2 \deg \alpha" />）、<InlineMath math="1-y^2" /> は <InlineMath math="\mathbb{Q}[y]" /> 内に自乗根を持たない。
                            </li>
                            <li>
                                よって、そのような1次式への分解は存在しない。
                            </li>
                        </ol>
                        <p className="mt-2 text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p>
                        ガウスの補題（Theorem 8.2-2）を用いて、「整係数の最高次係数が 1 の多項式（モニック多項式）が有理数の根を持つならば、その根は必ず整数である」ことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                根を <InlineMath math="\alpha \in \mathbb{Q}" /> とすると、<InlineMath math="\mathbb{Q}[x]" /> 内で <InlineMath math="(x - \alpha)" /> が因数となる。
                            </li>
                            <li>
                                <InlineMath math="f(x) = (x - \alpha) g(x)" /> （<InlineMath math="g(x) \in \mathbb{Q}[x]" />）と書ける。
                            </li>
                            <li>
                                ガウスの補題の系により、<InlineMath math="f" /> が原始的であり <InlineMath math="\mathbb{Q}[x]" /> で分解されるなら、<InlineMath math="\mathbb{Z}[x]" /> でも分解される。
                            </li>
                            <li>
                                つまり <InlineMath math="f(x) = (ax - b) h(x)" /> （<InlineMath math="a, b \in \mathbb{Z}, h(x) \in \mathbb{Z}[x]" />）と書け、<InlineMath math="\alpha = b/a" /> である。
                            </li>
                            <li>
                                最高次係数が 1 なので、展開したときの最高次 <InlineMath math="a \times (\text{hの最高次})" /> より <InlineMath math="a" /> は 1 の約数、すなわち <InlineMath math="a = \pm 1" />。
                            </li>
                            <li>
                                したがって <InlineMath math="\alpha = \pm b" /> となり、根は整数である。
                            </li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>
                        多項式 <InlineMath math="f(x) = x^3 + 3x + 3" /> の <InlineMath math="\mathbb{Q}" /> 上での既約性をアイゼンシュタインの判定法を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            アイゼンシュタインの判定法（Theorem 8.4-1）において素数 <InlineMath math="p = 3" /> を選ぶ。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>最高次係数は 1 であり、<InlineMath math="3 \nmid 1" /> である。</li>
                            <li>他の係数（<InlineMath math="x^2" /> の係数 0、<InlineMath math="x" /> の係数 3、定数項 3）はすべて 3 で割り切れる。</li>
                            <li>定数項は 3 であり、<InlineMath math="3^2 = 9" /> では割り切れない。</li>
                        </ul>
                        <p className="mt-2">
                            すべての条件を満たすため、<InlineMath math="f(x)" /> は <InlineMath math="\mathbb{Q}[x]" /> において既約である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={7}>
                    <p>
                        一意分解整域 <InlineMath math="R" /> に対して、多変数多項式環 <InlineMath math="R[x, y]" /> も UFD になることを、本章の定理を用いて簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Theorem 8.3-1 により、「<InlineMath math="R" /> が UFD ならば 1変数多項式環 <InlineMath math="R[x]" /> も UFD」である。
                            </li>
                            <li>
                                多変数多項式環は <InlineMath math="R[x, y] = (R[x])[y]" /> と定義される（Definition 8.1-1）。
                            </li>
                            <li>
                                <InlineMath math="R" /> が UFD なので <InlineMath math="R[x]" /> は UFD であり、さらにその上の1変数多項式環 <InlineMath math="(R[x])[y]" /> も再び Theorem 8.3-1 により UFD となる。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="8" number={8}>
                    <p>
                        自然数 <InlineMath math="n \geq 2" /> と素数 <InlineMath math="p" /> に対して、多項式 <InlineMath math="f(x) = x^n - p" /> が <InlineMath math="\mathbb{Q}[x]" /> で既約であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            アイゼンシュタインの判定法を素数 <InlineMath math="p" /> を用いて適用する。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>最高次係数は 1。素数 <InlineMath math="p" /> は 1 を割り切らない（<InlineMath math="p \nmid 1" />）。</li>
                            <li>中間の係数はすべて 0 であり、<InlineMath math="p" /> の倍数である。</li>
                            <li>定数項は <InlineMath math="-p" />。これは <InlineMath math="p" /> で割り切れるが、<InlineMath math="p^2" /> では割り切れない（<InlineMath math="p^2 \nmid -p" />）。</li>
                        </ul>
                        <p className="mt-2">
                            すべての条件が満たされるため、アイゼンシュタインの判定法により <InlineMath math="x^n - p" /> は <InlineMath math="\mathbb{Q}[x]" /> で既約である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={9}>
                    <p>
                        素数 <InlineMath math="p" /> に対する円分多項式 <InlineMath math="\Phi_p(x) = \frac{x^p - 1}{x - 1}" /> の既約性を示す際、なぜ直接アイゼンシュタインの判定法を適用せず、変数変換 <InlineMath math="x = y + 1" /> を行うのかを理由とともに説明せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                円分多項式 <InlineMath math="\Phi_p(x) = x^{p-1} + x^{p-2} + \dots + 1" /> の係数はすべて 1 である。
                            </li>
                            <li>
                                アイゼンシュタインの判定法の条件 (2)「最高次以外の係数が素数 <InlineMath math="p" /> で割り切れる」を確認すると、すべての係数が 1 なので、いかなる素数 <InlineMath math="p" /> に対してもこの条件を満たさない。
                            </li>
                            <li>
                                変数変換 <InlineMath math="x = y+1" /> を行うと、<InlineMath math="\Phi_p(y+1)" /> の係数は二項係数 <InlineMath math="\binom{p}{k}" /> となり、最高次と最下次を除く係数がすべて <InlineMath math="p" /> の倍数となるため、アイゼンシュタインの判定法が適用可能になる（Example 8.4-2）。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={10}>
                    <p>
                        整係数多項式 <InlineMath math="f(x) \in \mathbb{Z}[x]" /> が原始多項式であるとき、次が同値であることを §8.2 の定理を用いて説明せよ：
                        <br />「<InlineMath math="f(x)" /> が <InlineMath math="\mathbb{Z}[x]" /> で既約である」 ⟺ 「<InlineMath math="f(x)" /> が <InlineMath math="\mathbb{Q}[x]" /> で既約である」
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 8.2-2（ガウスの補題の系）に基づき議論する。
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <b>[⟸]：</b> もし <InlineMath math="\mathbb{Z}[x]" /> で既約でなければ、<InlineMath math="f = gh" /> （<InlineMath math="g, h" /> は非単元）と分解できる。これらは定数ではない（原始多項式なので）ため、<InlineMath math="\mathbb{Q}[x]" /> においても非単元の積となり、可約となる。
                            </li>
                            <li>
                                <b>[⟹]：</b> （対偶をとる）もし <InlineMath math="\mathbb{Q}[x]" /> で可約なら、Theorem 8.2-2 により <InlineMath math="\mathbb{Z}[x]" /> においても同じ次数の多項式の積に分解できる。これは <InlineMath math="\mathbb{Z}[x]" /> で可約であることを意味する。
                            </li>
                        </ul>
                        <p className="mt-2">
                             したがって、原始多項式という条件下では両者の既約性は一致する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
