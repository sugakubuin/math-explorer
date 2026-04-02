import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter12() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="12" number={1}>
                    <p>
                        任意の二次形式 <InlineMath math="q(\boldsymbol{x})" /> は、ある実対称行列 <InlineMath math="A" /> を用いて行列とベクトルの積の形でどのように表されるか（Proposition 12.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>列ベクトルを <InlineMath math="\boldsymbol{x}" /> として、次のように表される。</p>
                        <BlockMath math="q(\boldsymbol{x}) = \boldsymbol{x}^T A \boldsymbol{x}" />
                        <p>（または内積を用いて <InlineMath math="\langle \boldsymbol{x}, A\boldsymbol{x} \rangle" /> とも書ける）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={2}>
                    <p>
                        Theorem 12.2-1 によれば、実対称行列 <InlineMath math="A" /> が「正定値（Positive Definite）」であることは、その固有値についてどのような条件が成り立つことと同値か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="A" /> の<strong>すべての固有値が正（<InlineMath math="\lambda_i > 0" />）</strong>であることと同値である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={3}>
                    <p>
                        二次形式の標準化において、変数変換に用いる正則行列を変えたとしても「標準形の正の係数の個数と負の係数の個数は変わらない」という法則を何と呼ぶか（Theorem 12.4-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>シルベスターの慣性法則</strong>（Sylvester's Law of Inertia）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="12" number={4}>
                    <p>
                        次の二次形式 <InlineMath math="q(x, y, z) = 2x^2 + 5y^2 + 3z^2 - 4xy + 6xz - 8yz" /> を、実対称行列 <InlineMath math="A" /> を用いて <InlineMath math="q(\boldsymbol{x}) = \boldsymbol{x}^T A \boldsymbol{x}" /> の形に表したとき、行列 <InlineMath math="A" /> の成分をすべて答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            2乗の項の係数はそのまま対角成分へ、交差項（クロスターム）の係数は半分にして対称な非対角成分へ配置する。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><InlineMath math="x^2, y^2, z^2" /> の係数 2, 5, 3 は対角成分 <InlineMath math="a_{11}, a_{22}, a_{33}" /></li>
                            <li><InlineMath math="xy" /> の係数 -4 は半分にして <InlineMath math="-2" /> を <InlineMath math="a_{12}" /> と <InlineMath math="a_{21}" /> へ</li>
                            <li><InlineMath math="xz" /> の係数 6 は半分にして <InlineMath math="3" /> を <InlineMath math="a_{13}" /> と <InlineMath math="a_{31}" /> へ</li>
                            <li><InlineMath math="yz" /> の係数 -8 は半分にして <InlineMath math="-4" /> を <InlineMath math="a_{23}" /> と <InlineMath math="a_{32}" /> へ</li>
                        </ul>
                        <p>したがって、対称行列 <InlineMath math="A" /> は次のようになる。</p>
                        <BlockMath math="A = \begin{pmatrix} 2 & -2 & 3 \\ -2 & 5 & -4 \\ 3 & -4 & 3 \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={5}>
                    <p>
                        二次形式 <InlineMath math="q(x, y) = 3x^2 + 8xy + 7y^2" /> は正定値であるかどうかを、「シルベスターの判定法（首座小行列式）」を用いて判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、二次形式を対称行列 <InlineMath math="A" /> で表す。<InlineMath math="xy" /> の係数 <InlineMath math="8" /> を半分にして非対角成分に配置する。
                        </p>
                        <BlockMath math="A = \begin{pmatrix} 3 & 4 \\ 4 & 7 \end{pmatrix}" />
                        <p>
                            シルベスターの判定法に従い、首座小行列式を計算する。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>第1次首座小行列式：<InlineMath math="D_1 = |3| = 3 > 0" /></li>
                            <li>第2次首座小行列式：<InlineMath math="D_2 = \det \begin{pmatrix} 3 & 4 \\ 4 & 7 \end{pmatrix} = 3(7) - 4(4) = 21 - 16 = 5 > 0" /></li>
                        </ul>
                        <p>
                            すべての首座小行列式が正であるため、この二次形式（行列 <InlineMath math="A" />）は<strong>正定値である</strong>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={6}>
                    <p>
                        二次形式 <InlineMath math="q(x, y) = x^2 + 4xy + y^2" /> を直交変換 <InlineMath math="\boldsymbol{x} = Q\boldsymbol{y}" /> によって標準化（<InlineMath math="\lambda_1 y_1^2 + \lambda_2 y_2^2" /> の形に変形）せよ。<br />
                        （変換後の標準形だけを答えればよい。変換行列 <InlineMath math="Q" /> を具体的に求める必要はない。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            二次形式に対応する対称行列 <InlineMath math="A" /> は次のようになる。
                        </p>
                        <BlockMath math="A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}" />
                        <p>
                            標準形の係数は、この行列の固有値である。特性方程式を解く。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A - \lambda I) &= \det \begin{pmatrix} 1 - \lambda & 2 \\ 2 & 1 - \lambda \end{pmatrix} \\
                            &= (1 - \lambda)^2 - 4 = \lambda^2 - 2\lambda - 3 \\
                            &= (\lambda - 3)(\lambda + 1) = 0
                            \end{aligned}
                        " />
                        <p>
                            固有値は <InlineMath math="\lambda = 3, -1" /> である。<br />
                            したがって、直交変換による標準形は次のようになる。
                        </p>
                        <BlockMath math="q(y_1, y_2) = 3y_1^2 - y_2^2" />
                        <p className="mt-2 text-sm text-slate-500">（※ 固有値の順番を入れ替えた <InlineMath math="-y_1^2 + 3y_2^2" /> も正解である。）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={7}>
                    <p>
                        前問（問題6）の二次形式 <InlineMath math="q(x, y) = x^2 + 4xy + y^2" /> の定値性を、その固有値から判定せよ。（正定値、半正定値、負定値、半負定値、不定のいずれか）
                    </p>
                    <ExerciseSolution>
                        <p>
                            前問より、行列の固有値は <InlineMath math="\lambda = 3, -1" /> である。<br />
                            正の固有値（<InlineMath math="3" />）と負の固有値（<InlineMath math="-1" />）が混在しているため、Theorem 12.2-1 の基準に従い、この二次形式は<strong>不定（Indefinite）</strong>である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="12" number={8}>
                    <p>
                        <InlineMath math="A" /> と <InlineMath math="B" /> がともに <InlineMath math="n \times n" /> の正定値実対称行列であるとき、その和 <InlineMath math="C = A + B" /> も正定値行列であることを、正定値の定義（二次形式が常に正）を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="C = A + B" /> は実対称行列の和であるため、転置をとっても <InlineMath math="C^T = (A+B)^T = A^T + B^T = A + B = C" /> となり実対称行列である。
                        </p>
                        <p>
                            <InlineMath math="C" /> が正定値であることを示すには、任意の非零ベクトル <InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" /> に対して <InlineMath math="\boldsymbol{x}^T C \boldsymbol{x} > 0" /> となることを示せばよい。
                        </p>
                        <p>
                            左辺に <InlineMath math="C = A + B" /> を代入して展開する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \boldsymbol{x}^T C \boldsymbol{x} &= \boldsymbol{x}^T (A + B) \boldsymbol{x} \\
                            &= \boldsymbol{x}^T A \boldsymbol{x} + \boldsymbol{x}^T B \boldsymbol{x}
                            \end{aligned}
                        " />
                        <p>
                            仮定より <InlineMath math="A" /> は正定値であるため、任意の <InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" /> について <InlineMath math="\boldsymbol{x}^T A \boldsymbol{x} > 0" /> である。<br />
                            同様に <InlineMath math="B" /> も正定値であるため、<InlineMath math="\boldsymbol{x}^T B \boldsymbol{x} > 0" /> である。
                        </p>
                        <p>
                            したがって、それらの和も必ず正になる。
                        </p>
                        <BlockMath math="\boldsymbol{x}^T A \boldsymbol{x} + \boldsymbol{x}^T B \boldsymbol{x} > 0 + 0 = 0" />
                        <p>
                            ゆえに <InlineMath math="\boldsymbol{x}^T C \boldsymbol{x} > 0" /> であり、<InlineMath math="C = A + B" /> は正定値行列である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={9}>
                    <p>
                        二次形式 <InlineMath math="q(x, y) = 5x^2 - 4xy + 8y^2" /> を標準化するための<strong>直交行列 <InlineMath math="Q" /></strong> を求め、変数変換 <InlineMath math="\begin{pmatrix} x \\ y \end{pmatrix} = Q \begin{pmatrix} y_1 \\ y_2 \end{pmatrix}" /> を行ったときの標準形を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            対応する対称行列 <InlineMath math="A" /> は <InlineMath math="A = \begin{pmatrix} 5 & -2 \\ -2 & 8 \end{pmatrix}" /> である。固有値と固有ベクトルを求める。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A - \lambda I) &= (5-\lambda)(8-\lambda) - 4 \\
                            &= \lambda^2 - 13\lambda + 40 - 4 \\
                            &= \lambda^2 - 13\lambda + 36 \\
                            &= (\lambda - 4)(\lambda - 9) = 0
                            \end{aligned}
                        " />
                        <p>固有値は <InlineMath math="\lambda = 4, 9" />。</p>
                        <p>
                            ・<InlineMath math="\lambda = 4" /> の固有ベクトル：<br />
                            <InlineMath math="\begin{pmatrix} 1 & -2 \\ -2 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \boldsymbol{0} \implies x - 2y = 0 \implies \begin{pmatrix} 2 \\ 1 \end{pmatrix}" />。<br />
                            正規化して <InlineMath math="\boldsymbol{u}_1 = \frac{1}{\sqrt{5}} \begin{pmatrix} 2 \\ 1 \end{pmatrix}" />。
                        </p>
                        <p>
                            ・<InlineMath math="\lambda = 9" /> の固有ベクトル：<br />
                            <InlineMath math="\begin{pmatrix} -4 & -2 \\ -2 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \boldsymbol{0} \implies 2x + y = 0 \implies \begin{pmatrix} -1 \\ 2 \end{pmatrix}" />。<br />
                            正規化して <InlineMath math="\boldsymbol{u}_2 = \frac{1}{\sqrt{5}} \begin{pmatrix} -1 \\ 2 \end{pmatrix}" />。
                        </p>
                        <p>
                            したがって、直交行列 <InlineMath math="Q" /> は以下となる。
                        </p>
                        <BlockMath math="Q = \frac{1}{\sqrt{5}} \begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}" />
                        <p>
                            この変換による標準形は、固有値を係数とするため、以下のようになる。
                        </p>
                        <BlockMath math="q(y_1, y_2) = 4y_1^2 + 9y_2^2" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="12" number={10}>
                    <p>
                        実対称行列 <InlineMath math="A = \begin{pmatrix} 2 & k & 0 \\ k & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}" /> が<strong>正定値</strong>となるような、実数の定数 <InlineMath math="k" /> の値の範囲を求めよ。<br />
                        ヒント：シルベスターの判定法（首座小行列式）を用いると計算が早い。
                    </p>
                    <ExerciseSolution>
                        <p>
                            シルベスターの判定法によれば、すべての首座小行列式が正（<InlineMath math=">0" />）であることが正定値の必要十分条件である。
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-4">
                            <li>
                                第1次首座小行列式：<br />
                                <InlineMath math="D_1 = |2| = 2" />。<br />
                                これは無条件で <InlineMath math="2 > 0" /> を満たす。
                            </li>
                            <li>
                                第2次首座小行列式：<br />
                                <InlineMath math="D_2 = \det \begin{pmatrix} 2 & k \\ k & 2 \end{pmatrix} = 4 - k^2" />。<br />
                                正定値であるためには <InlineMath math="4 - k^2 > 0 \implies k^2 < 4 \implies -2 < k < 2" /> が必要である。
                            </li>
                            <li>
                                第3次首座小行列式（行列式全体）：<br />
                                行列の形から第3行で余因子展開すると簡単である。<br />
                                <InlineMath math="D_3 = \det A = 3 \cdot \det \begin{pmatrix} 2 & k \\ k & 2 \end{pmatrix} = 3(4 - k^2)" />。<br />
                                これが正である条件は <InlineMath math="3(4 - k^2) > 0 \implies 4 - k^2 > 0" /> となり、第2次の場合と全く同じ条件 <InlineMath math="-2 < k < 2" /> が導かれる。
                            </li>
                        </ul>
                        <p className="mt-4">
                            すべての条件を同時に満たす範囲が求める答えである。
                        </p>
                        <p className="mt-2 font-bold">
                            答． <InlineMath math="-2 < k < 2" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
