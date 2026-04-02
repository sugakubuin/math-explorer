import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        正方行列 <InlineMath math="A" /> と固有値 <InlineMath math="\lambda" /> に対して、広義固有空間（一般化固有空間）<InlineMath math="\widetilde{W}(\lambda)" /> はどのように定義されるか。Definition 7.1-1 を参考に簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="(A - \lambda I)" /> を複数回掛けることで零ベクトルになるようなベクトルの集合（<InlineMath math="\ker((A - \lambda I)^k)" /> の極限）として定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        Theorem 7.1-1 によれば、広義固有空間 <InlineMath math="\widetilde{W}(\lambda)" /> の次元は、行列の特性方程式におけるどの値と必ず一致するか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            その固有値 <InlineMath math="\lambda" /> の<strong>代数的重複度</strong>（特性多項式における重解の個数）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        サイズ <InlineMath math="3 \times 3" /> で、固有値が <InlineMath math="\lambda = 4" /> であるジョルダン細胞 <InlineMath math="J(4, 3)" /> の行列の成分をすべて書き下せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            対角成分に固有値が並び、その一つ上の副対角成分に <InlineMath math="1" /> が並ぶ。それ以外はすべて <InlineMath math="0" /> である。
                        </p>
                        <BlockMath math="
                            J(4, 3) = \begin{pmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{pmatrix}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        ケーリー・ハミルトンの定理（Theorem 7.3-1）とはどのような定理か。行列 <InlineMath math="A" /> とその特性多項式 <InlineMath math="\Phi_A(t)" /> を用いて式で表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列 <InlineMath math="A" /> 自身がその特性多項式の零点になるという定理である。
                        </p>
                        <BlockMath math="\Phi_A(A) = O" />
                        <p>（<InlineMath math="O" /> は零行列）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        ある <InlineMath math="5 \times 5" /> 行列 <InlineMath math="A" /> の特性多項式が <InlineMath math="\Phi_A(t) = (t - 2)^5" /> であり、固有値 <InlineMath math="\lambda = 2" /> の幾何的重複度（固有空間の次元）が 2 であった。<br />
                        このとき、この行列のジョルダン標準形には、いくつのジョルダン細胞が含まれているか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ジョルダン標準形におけるジョルダン細胞の「個数」は、その固有値の幾何的重複度（線形独立な固有ベクトルの数）に等しい。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> 2 個
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        前問（問題5）の行列 <InlineMath math="A" /> について、さらに最小多項式が <InlineMath math="\mu_A(t) = (t - 2)^3" /> であることがわかった。<br />
                        この行列のジョルダン標準形 <InlineMath math="J" /> を推測し、ブロック行列の形で書き下せ（対角成分の並び順は問わない）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            与えられた情報から以下のことが分かる。
                        </p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>代数的重複度が 5：ジョルダン細胞のサイズの合計は 5</li>
                            <li>幾何的重複度が 2：ジョルダン細胞の個数は 2 個</li>
                            <li>最小多項式の次数が 3：最も大きいジョルダン細胞のサイズは 3</li>
                        </ul>
                        <p>
                            「サイズ 3」の細胞が1つあり、残り1つの細胞で合計サイズを 5 にするためには、もう一つの細胞のサイズは <InlineMath math="5 - 3 = 2" /> でなければならない。<br />
                            したがって、ジョルダン細胞の構成は「3次細胞と2次細胞」である。
                        </p>
                        <BlockMath math="
                            J = \begin{pmatrix} 2 & 1 & 0 & 0 & 0 \\ 0 & 2 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 0 & 2 \end{pmatrix}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 1 & 1 \\ -1 & 3 \end{pmatrix}" /> の特性多項式を求め、この行列が対角化不可能であることを示せ。<br />
                        さらに、この行列のジョルダン標準形 <InlineMath math="J" /> を求めよ。（変換行列 <InlineMath math="P" /> を求める必要はない）
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. 特性多項式と代数的重複度</strong></p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A - \lambda I) &= \det \begin{pmatrix} 1 - \lambda & 1 \\ -1 & 3 - \lambda \end{pmatrix} \\
                            &= (1 - \lambda)(3 - \lambda) - (1)(-1) \\
                            &= \lambda^2 - 4\lambda + 3 + 1 \\
                            &= \lambda^2 - 4\lambda + 4 = (\lambda - 2)^2
                            \end{aligned}
                        " />
                        <p>固有値は <InlineMath math="\lambda = 2" />（重解）であり、<strong>代数的重複度は 2</strong> である。</p>

                        <p className="mt-4"><strong>2. 幾何的重複度と対角化の判定</strong></p>
                        <BlockMath math="
                            (A - 2I)\boldsymbol{x} = \begin{pmatrix} -1 & 1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
                        " />
                        <p>
                            これより <InlineMath math="-x + y = 0 \implies x = y" />。<br />
                            固有ベクトルは <InlineMath math="c \begin{pmatrix} 1 \\ 1 \end{pmatrix}" /> の1本のみであるため、<strong>幾何的重複度は 1</strong> である。<br />
                            幾何的重複度 (1) <InlineMath math="<" /> 代数的重複度 (2) であるため、この行列は<strong>対角化不可能</strong>である。
                        </p>

                        <p className="mt-4"><strong>3. ジョルダン標準形</strong></p>
                        <p>
                            代数的重複度が2で、固有ベクトルが1本しか取れないため、サイズ2のジョルダン細胞が1つ形成される。
                        </p>
                        <BlockMath math="
                            J = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        前問（問題7）の行列 <InlineMath math="A = \begin{pmatrix} 1 & 1 \\ -1 & 3 \end{pmatrix}" /> について、ジョルダン標準形への変換行列（ジョルダン基底） <InlineMath math="P" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            固有値 <InlineMath math="\lambda = 2" /> の真の固有ベクトルは、前問より <InlineMath math="\boldsymbol{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}" /> である。
                        </p>
                        <p>
                            次に、ランク2の一般化固有ベクトル <InlineMath math="\boldsymbol{v}_2" /> を求めるため、方程式 <InlineMath math="(A - 2I)\boldsymbol{v}_2 = \boldsymbol{v}_1" /> を解く。
                        </p>
                        <BlockMath math="
                            \begin{pmatrix} -1 & 1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}
                        " />
                        <p>
                            これより <InlineMath math="-x + y = 1 \implies y = x + 1" /> を得る。<br />
                            <InlineMath math="x = 0" /> と選ぶと、<InlineMath math="y = 1" /> となるため、<InlineMath math="\boldsymbol{v}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}" /> とする。
                        </p>
                        <p>
                            これらを順番に並べて変換行列 <InlineMath math="P" /> を構成する。
                        </p>
                        <BlockMath math="
                            P = (\boldsymbol{v}_1, \boldsymbol{v}_2) = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}
                        " />
                        <p className="mt-2 text-sm text-slate-500">
                            （確認： 
                            <BlockMath math="\begin{aligned}
                                P^{-1} A P &= \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ -1 & 3 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} \\
                                &= \begin{pmatrix} 1 & 1 \\ -2 & 2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} \\
                                &= \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} = J
                            \end{aligned}" />
                            となり、正しくジョルダン標準形が得られる。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        ある行列 <InlineMath math="A" /> の特性多項式が <InlineMath math="\Phi_A(t) = t^3" /> であり、最小多項式が <InlineMath math="\mu_A(t) = t^2" /> であるとする。<br />
                        このとき、この行列 <InlineMath math="A" /> が<strong>べき零行列（ある自然数 <InlineMath math="k" /> に対して <InlineMath math="A^k = O" /> となる行列）</strong>であることを示せ。<br />
                        また、<InlineMath math="A \neq O" /> かつ <InlineMath math="A^2 = O" /> となる理由を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ケーリー・ハミルトンの定理より、行列 <InlineMath math="A" /> は自身の特性多項式を満たすため、
                        </p>
                        <BlockMath math="\Phi_A(A) = A^3 = O" />
                        <p>
                            となる。したがって <InlineMath math="A" /> はべき零行列である。
                        </p>
                        <p className="mt-4">
                            最小多項式 <InlineMath math="\mu_A(t) = t^2" /> の定義より、<InlineMath math="\mu_A(A) = A^2 = O" /> が成り立つ。<br />
                            また、最小多項式は「<InlineMath math="A" /> を代入して零行列になる<strong>最も次数の低い</strong>多項式」である。もし <InlineMath math="A = O" /> であれば、最小多項式は1次の多項式 <InlineMath math="t" /> になるはずである。<br />
                            しかし最小多項式は <InlineMath math="t^2" /> であるため、1次の多項式 <InlineMath math="t" /> では <InlineMath math="A" /> は零行列にならない。よって <InlineMath math="A \neq O" /> である。
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            （補足：この行列のジョルダン標準形は、サイズ2のジョルダン細胞とサイズ1のジョルダン細胞の組み合わせ <InlineMath math="\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}" /> になる。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
