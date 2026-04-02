import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_10_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        1 の 12 乗根のうち、原始 12 乗根となるものをすべて挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.1-1 より、1 の原始 <InlineMath math="n" /> 乗根は <InlineMath math="\zeta_n^k" /> （<InlineMath math="\gcd(k, n) = 1" />）の形をしている。
                        </p>
                        <p>
                            <InlineMath math="n = 12" /> と互いに素な <InlineMath math="k" /> （<InlineMath math="1 \leq k < 12" />）を求めると、
                        </p>
                        <BlockMath math="k = 1, 5, 7, 11" />
                        <p>
                            である。（オイラー関数の値 <InlineMath math="\varphi(12) = 12(1-1/2)(1-1/3) = 4" /> 個）
                        </p>
                        <p>
                            よって、原始 12 乗根は <strong><InlineMath math="\zeta_{12}^1, \zeta_{12}^5, \zeta_{12}^7, \zeta_{12}^{11}" /></strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        公式 <InlineMath math="x^n - 1 = \prod_{d \mid n} \Phi_d(x)" /> を用いて、6 次円分多項式 <InlineMath math="\Phi_6(x)" /> を具体的に求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            6 の約数は 1, 2, 3, 6 である。
                        </p>
                        <BlockMath math="x^6 - 1 = \Phi_1(x) \Phi_2(x) \Phi_3(x) \Phi_6(x)" />
                        <p>
                            Example 6.1-1 より、<InlineMath math="\Phi_1(x) = x-1" />、<InlineMath math="\Phi_2(x) = x+1" />、<InlineMath math="\Phi_3(x) = x^2+x+1" /> である。
                        </p>
                        <p>
                            積を計算すると <InlineMath math="\Phi_1 \Phi_2 \Phi_3 = (x^2-1)(x^2+x+1) = x^4 + x^3 + x^2 - x^2 - x - 1 = x^4 + x^3 - x - 1" />。
                        </p>
                        <p>
                            割り算 <InlineMath math="(x^6-1) / (x^4+x^3-x-1)" /> を行う：
                        </p>
                        <BlockMath math="(x^6-1) = (x^2-x+1)(x^4+x^3-x-1)" />
                        <p>
                            よって、<strong><InlineMath math="\Phi_6(x) = x^2 - x + 1" /></strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        20 次円分体 <InlineMath math="\mathbb{Q}(\zeta_{20})" /> の有理数体上の拡大次数を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.1-1 より、円分体の拡大次数は <InlineMath math="\varphi(n)" /> に等しい。
                        </p>
                        <p>
                            <InlineMath math="n = 20 = 2^2 \cdot 5" /> であるから、
                        </p>
                        <BlockMath math="\varphi(20) = 20 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{5}\right) = 20 \cdot \frac{1}{2} \cdot \frac{4}{5} = 8" />
                        <p>
                            したがって、拡大次数は <strong>8</strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        素数 <InlineMath math="p" /> に対して <InlineMath math="\Phi_p(x) = x^{p-1} + x^{p-2} + \dots + 1" /> が <InlineMath math="\mathbb{Q}" /> 上既約であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 6.1-2 の方針で、<InlineMath math="x \mapsto x+1" /> の平行移動を行う。
                        </p>
                        <BlockMath math="\Phi_p(x+1) = \frac{(x+1)^p - 1}{(x+1) - 1} = \frac{\sum_{k=1}^p \binom{p}{k} x^k}{x} = \sum_{k=1}^p \binom{p}{k} x^{k-1}" />
                        <p>
                            この多項式の展開式は <InlineMath math="x^{p-1} + p x^{p-2} + \dots + \binom{p}{2}x + p" /> となる。
                        </p>
                        <p>
                            1. 最高次係数は 1 であり、素数 <InlineMath math="p" /> で割り切れない。
                        </p>
                        <p>
                            2. 中間の係数 <InlineMath math="\binom{p}{k}" /> （<InlineMath math="1 \leq k \leq p-1" />）はすべて <InlineMath math="p" /> で割り切れる。
                        </p>
                        <p>
                            3. 定数項は <InlineMath math="p" /> であり、<InlineMath math="p" /> で割り切れるが、<InlineMath math="p^2" /> では割り切れない。
                        </p>
                        <p>
                            アイゼンシュタインの判定法により、<InlineMath math="\Phi_p(x+1)" /> は既約であり、したがって <InlineMath math="\Phi_p(x)" /> も既約である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        <InlineMath math="n = 8" /> 次円分体のガロア群 <InlineMath math="\mathrm{Gal}(\mathbb{Q}(\zeta_8)/\mathbb{Q})" /> の構造を決定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.2-1 より、ガロア群は <InlineMath math="(\mathbb{Z}/8\mathbb{Z})^\times = \{1, 3, 5, 7\}" /> に同型である。
                        </p>
                        <p>
                            各元の位数を計算する。
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li><InlineMath math="3^2 = 9 \equiv 1 \pmod{8}" /></li>
                            <li><InlineMath math="5^2 = 25 \equiv 1 \pmod{8}" /></li>
                            <li><InlineMath math="7^2 = 49 \equiv 1 \pmod{8}" /></li>
                        </ul>
                        <p>
                            すべての非単位元の位数が 2 である。位数 4 の群で、すべての元の平方が単位元になるのは<strong>クラインの 4 群</strong> <InlineMath math="(\mathbb{Z}/2\mathbb{Z})^2" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        5 次円分拡大 <InlineMath math="\mathbb{Q}(\zeta_5)/\mathbb{Q}" /> に対応するガロア群の部分群を <InlineMath math="H = \{1, 4\} \subset (\mathbb{Z}/5\mathbb{Z})^\times" /> とする。この部分群による固定体 $E$ は 2 次体であることを示し、その生成元をひとつ挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ガロアの基本定理（Theorem 5.3-1）より、拡大次数は部分群の指数に等しい。
                        </p>
                        <BlockMath math="[E : \mathbb{Q}] = [(\mathbb{Z}/5\mathbb{Z})^\times : H] = 4/2 = 2" />
                        <p>
                            固定体の元は、自己同型 <InlineMath math="\sigma_4" /> （<InlineMath math="\zeta_5 \mapsto \zeta_5^4" />）で不変である。
                        </p>
                        <p>
                            <InlineMath math="\alpha = \zeta_5 + \zeta_5^4 = \zeta_5 + \zeta_5^{-1} = 2\cos(2\pi/5)" /> とおくと、
                        </p>
                        <BlockMath math="\sigma_4(\alpha) = \zeta_5^4 + \zeta_5^{16} = \zeta_5^4 + \zeta_5 = \alpha" />
                        <p>
                            となり不変である。よって固定体は <strong><InlineMath math="\mathbb{Q}(\zeta_5 + \zeta_5^4)" /></strong> である。（※この値は黄金比に関係し、具体的には <InlineMath math="\frac{-1+\sqrt{5}}{2}" /> となり、<InlineMath math="\mathbb{Q}(\sqrt{5})" /> に一致する）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        オイラー関数 <InlineMath math="\varphi(n)" /> の値を用いて、正 9 角形および正 17 角形が定規とコンパスで作図可能か判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            作図条件は 「<InlineMath math="\varphi(n)" /> が 2 のべき乗であること」である（Theorem 6.3-1）。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li><strong>正 9 角形：</strong> <InlineMath math="\varphi(9) = 9(1-1/3) = 6" />。 6 は 2 のべき乗ではないため、作図<strong>不可能</strong>である。</li>
                            <li><strong>正 17 角形：</strong> <InlineMath math="\varphi(17) = 17(1-1/17) = 16 = 2^4" />。 16 は 2 のべき乗であるため、作図<strong>可能</strong>である。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        <InlineMath math="n = 12" /> の場合に、公式 <InlineMath math="\prod_{d \mid 12} \Phi_d(x) = x^{12} - 1" /> が成り立つことを直接計算せずに論理的に示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            多項式 <InlineMath math="x^{12} - 1" /> の根は 1 の 12 乗根全体、すなわち <InlineMath math="\{\zeta_{12}^k \mid 1 \leq k \leq 12\}" /> である。
                        </p>
                        <p>
                            各複素数 <InlineMath math="\zeta_{12}^k" /> に対して、それが「初めて 1 になる指数」を <InlineMath math="d" /> とする。このとき <InlineMath math="d" /> は 12 の約数であり、その元は定義 6.1-1 より原始 <InlineMath math="d" /> 乗根である。
                        </p>
                        <p>
                            逆に、どの原始 <InlineMath math="d" /> 乗根（<InlineMath math="d \mid 12" />）も 12 乗すれば 1 になるので、<InlineMath math="x^{12}-1" /> の根の集合に含まれる。
                        </p>
                        <p>
                            原始 <InlineMath math="d" /> 乗根をすべて集めた多項式が <InlineMath math="\Phi_d(x)" /> であるから、すべての約数 <InlineMath math="d" /> についてこれらを掛け合わせれば、重根を持たない <InlineMath math="x^{12}-1" /> の根すべてを網羅し、高次係数も 1 なので一致する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        <InlineMath math="n \geq 3" /> のとき、円分体 <InlineMath math="K = \mathbb{Q}(\zeta_n)" /> と実数体 <InlineMath math="\mathbb{R}" /> の共通部分 <InlineMath math="E = K \cap \mathbb{R}" /> （最大実部分体）の拡大次数を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\mathbb{Q}(\zeta_n)/\mathbb{Q}" /> の自己同型の中で、複素共役 <InlineMath math="\tau(\zeta_n) = \zeta_n^{-1} = \zeta_n^{n-1}" /> を考える。
                        </p>
                        <p>
                            中間体 <InlineMath math="E = K \cap \mathbb{R}" /> は、この複素共役によって固定される元全体の集合、すなわち部分群 <InlineMath math="H = \{1, n-1\}" /> による固定体に相当する。
                        </p>
                        <p>
                            <InlineMath math="n \geq 3" /> のとき、<InlineMath math="\zeta_n \neq \zeta_n^{-1}" /> なので、この部分群の位数は 2 である。
                        </p>
                        <p>
                            ガロアの基本定理より、
                        </p>
                        <BlockMath math="[E : \mathbb{Q}] = \frac{[\mathbb{Q}(\zeta_n) : \mathbb{Q}]}{|H|} = \frac{\varphi(n)}{2}" />
                        <p>
                            となる。これにより、円分体は常にその実部分体上の 2 次拡大であることがわかる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        正 17 角形の作図可能性に関して、有理数体から出発して 2 次拡大を 4 回繰り返すことで円分体 <InlineMath math="\mathbb{Q}(\zeta_{17})" /> に到達できることを、ガロア群の構造から示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ガロア群 <InlineMath math="G = \mathrm{Gal}(\mathbb{Q}(\zeta_{17})/\mathbb{Q})" /> は <InlineMath math="(\mathbb{Z}/17\mathbb{Z})^\times \cong \mathbb{Z}/16\mathbb{Z}" /> （位数 16 の巡回群）である。
                        </p>
                        <p>
                            巡回群は、各約数の位数を持つ部分群をただひとつ持ち、かつそれらは入れ子（正規列）になる。
                        </p>
                        <BlockMath math="G = G_0 \supset G_1 \supset G_2 \supset G_3 \supset G_4 = \{e\}" />
                        <p>
                            ここで <InlineMath math="|G_i| = 2^{4-i}" /> ととると、各ステップの指数 <InlineMath math="[G_i : G_{i+1}]" /> は 2 である。
                        </p>
                        <p>
                            ガロア対応により、中間体の塔
                        </p>
                        <BlockMath math="\mathbb{Q} = E_0 \subset E_1 \subset E_2 \subset E_3 \subset E_4 = \mathbb{Q}(\zeta_{17})" />
                        <p>
                            が存在し、拡大次数は <InlineMath math="[E_{i+1} : E_i] = [G_i : G_{i+1}] = 2" /> となる。
                        </p>
                        <p>
                            2 次拡大の連鎖によって到達可能な数は作図可能であるため、正 17 角形は作図可能である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
