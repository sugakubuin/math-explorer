import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter11() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="11" number={1}>
                    <p>
                        Theorem 11.1-1 によれば、実対称行列 <InlineMath math="A" /> （<InlineMath math="A^T = A" />）の特性方程式を解いて得られる固有値は、必ずどのような数になることが保証されているか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            必ず<strong>実数</strong>になる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={2}>
                    <p>
                        Theorem 11.2-1 によれば、実対称行列 <InlineMath math="A" /> の「異なる固有値」に属する2つの固有ベクトル <InlineMath math="\boldsymbol{x}_1, \boldsymbol{x}_2" /> は、幾何学的にどのような位置関係にあるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            互いに<strong>直交</strong>する（内積が <InlineMath math="0" /> になる）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={3}>
                    <p>
                        Theorem 11.4-1（スペクトル定理）によれば、複素行列 <InlineMath math="A" /> がユニタリ行列を用いて対角化可能であるための「必要十分条件」は何か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列 <InlineMath math="A" /> が<strong>正規行列</strong>であること（すなわち <InlineMath math="AA^* = A^*A" /> を満たすこと）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="11" number={4}>
                    <p>
                        実対称行列 <InlineMath math="A = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}" /> の固有値を求め、それぞれに対応する固有ベクトルが直交していることを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. 固有値を求める</strong></p>
                        <BlockMath math="\begin{aligned}
                            \det(A - \lambda I) &= \det \begin{pmatrix} 2 - \lambda & 2 \\ 2 & 5 - \lambda \end{pmatrix} \\
                            &= (2 - \lambda)(5 - \lambda) - 4 \\
                            &= \lambda^2 - 7\lambda + 6 \\
                            &= (\lambda - 1)(\lambda - 6) = 0
                            \end{aligned}
                        " />
                        <p>よって、固有値は <InlineMath math="\lambda = 1, 6" /> である。</p>

                        <p className="mt-4"><strong>2. 固有ベクトルを求める</strong></p>
                        <p>・<InlineMath math="\lambda = 1" /> のとき</p>
                        <BlockMath math="\begin{aligned}
                            \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} 
                            &\implies x + 2y = 0 \\
                            &\implies \boldsymbol{v}_1 = \begin{pmatrix} -2 \\ 1 \end{pmatrix}
                            \end{aligned}
                        " />

                        <p className="mt-4">・<InlineMath math="\lambda = 6" /> のとき</p>
                        <BlockMath math="\begin{aligned}
                            \begin{pmatrix} -4 & 2 \\ 2 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} 
                            &\implies -2x + y = 0 \\
                            &\implies \boldsymbol{v}_2 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}
                            \end{aligned}
                        " />

                        <p className="mt-4"><strong>3. 直交性の確認</strong></p>
                        <p>得られた固有ベクトル <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2" /> の標準内積を計算する。</p>
                        <BlockMath math="\langle \boldsymbol{v}_1, \boldsymbol{v}_2 \rangle = (-2)(1) + (1)(2) = -2 + 2 = 0" />
                        <p>内積が0となるため、確かに直交していることが確認できた。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={5}>
                    <p>
                        前問（問題4）の行列 <InlineMath math="A = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}" /> を<strong>直交対角化</strong>せよ。<br />
                        すなわち、直交行列 <InlineMath math="Q" /> と対角行列 <InlineMath math="\Lambda" /> を用いて <InlineMath math="Q^T A Q = \Lambda" /> の形にせよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            前問で求めた固有ベクトル <InlineMath math="\boldsymbol{v}_1 = \begin{pmatrix} -2 \\ 1 \end{pmatrix}, \boldsymbol{v}_2 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}" /> をそれぞれ正規化（長さ1に）して、正規直交基底を構成する。
                        </p>
                        <BlockMath math="\| \boldsymbol{v}_1 \| = \sqrt{(-2)^2 + 1^2} = \sqrt{5} \implies \boldsymbol{u}_1 = \frac{1}{\sqrt{5}} \begin{pmatrix} -2 \\ 1 \end{pmatrix}" />
                        <BlockMath math="\| \boldsymbol{v}_2 \| = \sqrt{1^2 + 2^2} = \sqrt{5} \implies \boldsymbol{u}_2 = \frac{1}{\sqrt{5}} \begin{pmatrix} 1 \\ 2 \end{pmatrix}" />
                        <p>
                            これらを列ベクトルとして並べて直交行列 <InlineMath math="Q" /> を作る。
                        </p>
                        <BlockMath math="Q = \frac{1}{\sqrt{5}} \begin{pmatrix} -2 & 1 \\ 1 & 2 \end{pmatrix}" />
                        <p>
                            対応する固有値を対角線に並べた対角行列 <InlineMath math="\Lambda" /> を作る。
                        </p>
                        <BlockMath math="\Lambda = \begin{pmatrix} 1 & 0 \\ 0 & 6 \end{pmatrix}" />
                        <p>
                            これらを用いると、<InlineMath math="Q^T A Q = \Lambda" /> の形で直交対角化される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={6}>
                    <p>
                        次の複素行列 <InlineMath math="A = \begin{pmatrix} 2 & i \\ -i & 2 \end{pmatrix}" /> について、<InlineMath math="A" /> がエルミート行列であることを確認し、その固有値がすべて実数になることを計算によって確かめよ。
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. エルミート行列の確認</strong></p>
                        <p><InlineMath math="A" /> の共役転置行列 <InlineMath math="A^*" /> を計算する。</p>
                        <BlockMath math="A^* = \overline{A}^T = \begin{pmatrix} 2 & -i \\ i & 2 \end{pmatrix}^T = \begin{pmatrix} 2 & i \\ -i & 2 \end{pmatrix} = A" />
                        <p>よって <InlineMath math="A^* = A" /> であり、エルミート行列である。</p>

                        <p className="mt-4"><strong>2. 固有値の計算</strong></p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A - \lambda I) &= \det \begin{pmatrix} 2 - \lambda & i \\ -i & 2 - \lambda \end{pmatrix} \\
                            &= (2 - \lambda)^2 - (i)(-i) \\
                            &= (2 - \lambda)^2 - 1 = 0
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="(2 - \lambda)^2 = 1 \implies 2 - \lambda = \pm 1 \implies \lambda = 2 \mp 1" />。
                        </p>
                        <p>
                            よって固有値は <InlineMath math="\lambda = 1, 3" /> であり、確かにすべて実数であることが確認できた。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={7}>
                    <p>
                        行列 <InlineMath math="B = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}" /> が正規行列であるかどうかを判定し、この行列がユニタリ対角化可能かどうかを答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>正規行列の定義 <InlineMath math="BB^* = B^*B" /> （実数の場合は <InlineMath math="BB^T = B^TB" />）を満たすか確認する。</p>
                        <BlockMath math="BB^T = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 2 & 4 \end{pmatrix}" />
                        <BlockMath math="B^TB = \begin{pmatrix} 1 & 0 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 5 \end{pmatrix}" />
                        <p>
                            <InlineMath math="BB^T \neq B^TB" /> であるため、<InlineMath math="B" /> は<strong>正規行列ではない</strong>。<br />
                            スペクトル定理（Theorem 11.4-1）より、ユニタリ対角化可能であるための必要十分条件は正規行列であることなので、この行列は<strong>ユニタリ対角化不可能</strong>である。<br />
                            （※ 異なる固有値 1, 2 を持つため「一般の対角化」は可能だが、直交する固有ベクトル基底は取れない。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="11" number={8}>
                    <p>
                        実行列 <InlineMath math="A" /> が交代行列（歪対称行列）、すなわち <InlineMath math="A^T = -A" /> を満たすとする。<br />
                        このとき、<InlineMath math="A" /> の（複素数の範囲における）固有値は、必ず「純虚数」または「<InlineMath math="0" />」になることを証明せよ。<br />
                        ヒント：Theorem 11.1-1 の証明方針（<InlineMath math="\overline{\lambda}" /> と <InlineMath math="\lambda" /> の関係を導く）を参考にせよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="A" /> の固有値を <InlineMath math="\lambda \in \mathbb{C}" />、固有ベクトルを <InlineMath math="\boldsymbol{x} \in \mathbb{C}^n" />（<InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" />）とする。すなわち <InlineMath math="A\boldsymbol{x} = \lambda\boldsymbol{x}" />。<br />
                            エルミート内積 <InlineMath math="\langle A\boldsymbol{x}, \boldsymbol{x} \rangle = \boldsymbol{x}^* A \boldsymbol{x}" /> を2通りの方法で計算する。
                        </p>
                        <p>
                            方法A（そのまま代入）：
                        </p>
                        <BlockMath math="\boldsymbol{x}^* (A\boldsymbol{x}) = \boldsymbol{x}^* (\lambda\boldsymbol{x}) = \lambda \boldsymbol{x}^* \boldsymbol{x} = \lambda \|\boldsymbol{x}\|^2" />
                        <p>
                            方法B（随伴行列への移動）：
                        </p>
                        <p>
                            <InlineMath math="A" /> は実行列なので <InlineMath math="A^* = A^T" /> である。さらに交代行列なので <InlineMath math="A^* = -A" /> である。
                        </p>
                        <BlockMath math="\begin{aligned}
                            \boldsymbol{x}^* A \boldsymbol{x} &= (A^* \boldsymbol{x})^* \boldsymbol{x} = (-A \boldsymbol{x})^* \boldsymbol{x} = - (A \boldsymbol{x})^* \boldsymbol{x} \\
                            &= - (\lambda \boldsymbol{x})^* \boldsymbol{x} = -\overline{\lambda} \boldsymbol{x}^* \boldsymbol{x} = -\overline{\lambda} \|\boldsymbol{x}\|^2
                            \end{aligned}
                        " />
                        <p>
                            これら2つの結果は等しいので、
                        </p>
                        <BlockMath math="\lambda \|\boldsymbol{x}\|^2 = -\overline{\lambda} \|\boldsymbol{x}\|^2" />
                        <p>
                            <InlineMath math="\|\boldsymbol{x}\|^2 > 0" /> より割ることができ、
                        </p>
                        <BlockMath math="\lambda = -\overline{\lambda}" />
                        <p>
                            移項すると <InlineMath math="\lambda + \overline{\lambda} = 0" />。複素数 <InlineMath math="\lambda = a + bi" /> を代入すると、<InlineMath math="(a + bi) + (a - bi) = 2a = 0 \implies a = 0" /> となる。<br />
                            実部が0であるため、<InlineMath math="\lambda" /> は純虚数（<InlineMath math="bi" />、<InlineMath math="b \neq 0" />）または 0（<InlineMath math="b = 0" />）である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="11" number={9}>
                    <p>
                        シューアの補題（Lemma 11.4-1）によれば、任意の複素行列 <InlineMath math="A" /> はユニタリ行列 <InlineMath math="U" /> を用いて上三角行列 <InlineMath math="T" /> に変形できる（<InlineMath math="U^* A U = T" />）。<br />
                        「相似変換によって行列のトレース（対角成分の和）は変化しない」という事実（<InlineMath math="\mathrm{tr}(P^{-1} A P) = \mathrm{tr}(A)" />）を用いて、<strong>「任意の行列 <InlineMath math="A" /> のトレースは、そのすべての固有値の総和に等しい」</strong>ことを証明せよ。<br />
                        （※上三角行列 <InlineMath math="T" /> の対角成分が、<InlineMath math="A" /> の固有値に一致することも説明に含めること。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            シューアの補題より、<InlineMath math="U^* A U = T" /> となる上三角行列 <InlineMath math="T" /> が存在する。<br />
                            相似変換によって特性多項式は変化しないため、<InlineMath math="A" /> と <InlineMath math="T" /> の特性多項式は同一である。<br />
                            <InlineMath math="\Phi_A(t) = \det(tI - A) = \det(tI - T)" />
                        </p>
                        <p>
                            <InlineMath math="T" /> は上三角行列であるため、<InlineMath math="tI - T" /> も上三角行列である。上三角行列の行列式は対角成分の積となる。
                        </p>
                        <BlockMath math="\det(tI - T) = (t - t_{11})(t - t_{22}) \cdots (t - t_{nn})" />
                        <p>
                            これが <InlineMath math="A" /> の特性方程式の因数分解そのものであるため、<InlineMath math="T" /> の対角成分 <InlineMath math="t_{11}, \dots, t_{nn}" /> は、まさに <InlineMath math="A" /> の固有値 <InlineMath math="\lambda_1, \dots, \lambda_n" /> のことである。
                        </p>
                        <p>
                            次にトレースの性質を用いる。<InlineMath math="U^* = U^{-1}" /> であるため、これは相似変換であり、トレースは保存される。
                        </p>
                        <BlockMath math="\mathrm{tr}(A) = \mathrm{tr}(U T U^*) = \mathrm{tr}(T)" />
                        <p>
                            <InlineMath math="T" /> のトレースは対角成分の和であるため、
                        </p>
                        <BlockMath math="\mathrm{tr}(T) = t_{11} + t_{22} + \dots + t_{nn} = \lambda_1 + \lambda_2 + \dots + \lambda_n" />
                        <p>
                            以上より、<InlineMath math="\mathrm{tr}(A) = \sum_{i=1}^n \lambda_i" /> が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
