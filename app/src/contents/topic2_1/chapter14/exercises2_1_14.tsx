import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter14() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="14" number={1}>
                    <p>
                        実行列 <InlineMath math="A" /> の<strong>特異値</strong>（singular value） <InlineMath math="\sigma_i" /> は、ある対称行列の固有値 <InlineMath math="\lambda_i" /> を用いてどのように定義されるか（Definition 14.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            対称行列 <InlineMath math="A^T A" /> の固有値 <InlineMath math="\lambda_i" /> の非負の平方根として定義される。
                        </p>
                        <BlockMath math="\sigma_i = \sqrt{\lambda_i}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="14" number={2}>
                    <p>
                        エッカート・ヤングの定理（Theorem 14.3-1）によれば、行列 <InlineMath math="A" /> をランク <InlineMath math="k" /> 以下の行列で近似したとき、フロベニウスノルムでの誤差を最小にする最適な近似行列 <InlineMath math="A_k" /> は、特異値分解を用いてどのように表されるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            特異値分解 <InlineMath math="A = \sum_{i=1}^r \sigma_i \boldsymbol{u}_i \boldsymbol{v}_i^T" /> の上位 <InlineMath math="k" /> 個の項を取り出した（打ち切った）和として表される。
                        </p>
                        <BlockMath math="A_k = \sum_{i=1}^k \sigma_i \boldsymbol{u}_i \boldsymbol{v}_i^T" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="14" number={3}>
                    <p>
                        行列 <InlineMath math="A" /> の特異値分解が <InlineMath math="A = U \Sigma V^T" /> で与えられているとき、ムーア・ペンローズ擬逆行列 <InlineMath math="A^+" /> を <InlineMath math="U, \Sigma^+, V" /> を用いて表せ（Definition 14.4-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="A^+ = V \Sigma^+ U^T" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="14" number={4}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 3 & 4 \\ 0 & 5 \end{pmatrix}" /> のすべての特異値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>まず <InlineMath math="A^T A" /> を計算する。</p>
                        <BlockMath math="A^T A = \begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix} \begin{pmatrix} 3 & 4 \\ 0 & 5 \end{pmatrix} = \begin{pmatrix} 9 & 12 \\ 12 & 41 \end{pmatrix}" />
                        <p>この行列の固有値を求めるため、特性方程式を解く。</p>
                        <BlockMath math="
                            \begin{aligned}
                            \det(A^T A - \lambda I) &= \det \begin{pmatrix} 9 - \lambda & 12 \\ 12 & 41 - \lambda \end{pmatrix} \\
                            &= (9 - \lambda)(41 - \lambda) - 144 \\
                            &= \lambda^2 - 50\lambda + 369 - 144 \\
                            &= \lambda^2 - 50\lambda + 225 = 0
                            \end{aligned}
                        " />
                        <p>因数分解すると <InlineMath math="(\lambda - 45)(\lambda - 5) = 0" /> となるため、固有値は <InlineMath math="\lambda_1 = 45, \lambda_2 = 5" />。</p>
                        <p>特異値はこれらの正の平方根であるため、</p>
                        <BlockMath math="\sigma_1 = \sqrt{45} = 3\sqrt{5}, \quad \sigma_2 = \sqrt{5}" />
                        <p>となる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="14" number={5}>
                    <p>
                        特異値分解 <InlineMath math="A = U \Sigma V^T" /> は、幾何学的に「3つの変換の組み合わせ」として解釈できる。<br />
                        ベクトル <InlineMath math="\boldsymbol{x}" /> に <InlineMath math="A" /> を掛ける操作（<InlineMath math="A\boldsymbol{x}" />）において、<InlineMath math="V^T" />、<InlineMath math="\Sigma" />、<InlineMath math="U" /> はそれぞれどのような幾何学的操作（回転・スケール変換など）を表しているか、順に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>ベクトルに対して右側から順に作用するため、以下の順で変換が行われる。</p>
                        <ol className="list-decimal pl-5 mt-2 space-y-2">
                            <li><strong><InlineMath math="V^T" /> の作用：</strong> 座標軸の<strong>回転</strong>（および鏡映）を行う直交変換。</li>
                            <li><strong><InlineMath math="\Sigma" /> の作用：</strong> 各座標軸方向への<strong>スケール変換（伸縮）</strong>。特異値 <InlineMath math="\sigma_i" /> の倍率で引き伸ばしや圧縮を行う。</li>
                            <li><strong><InlineMath math="U" /> の作用：</strong> できあがった図形に対する、空間内での最終的な<strong>回転</strong>（および鏡映）を行う直交変換。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="14" number={6}>
                    <p>
                        対角行列 <InlineMath math="\Sigma = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}" /> （サイズは <InlineMath math="2 \times 3" />）のムーア・ペンローズ擬逆行列 <InlineMath math="\Sigma^+" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            擬逆行列 <InlineMath math="\Sigma^+" /> は、元の行列の転置の形（この場合は <InlineMath math="3 \times 2" />）を持ち、非ゼロの特異値部分だけを逆数にした行列である。<br />
                            特異値は <InlineMath math="\sigma_1 = 2" /> のみであり、逆数は <InlineMath math="\frac{1}{2}" /> である。ゼロ成分はゼロのままにして転置の形を作る。
                        </p>
                        <BlockMath math="\Sigma^+ = \begin{pmatrix} \frac{1}{2} & 0 \\ 0 & 0 \\ 0 & 0 \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="14" number={7}>
                    <p>
                        正方行列 <InlineMath math="A" /> の特異値分解が <InlineMath math="A = U \Sigma V^T" /> であるとする。<br />
                        この行列の極分解を <InlineMath math="A = QS" /> （<InlineMath math="Q" /> は直交行列、<InlineMath math="S" /> は半正定値対称行列）としたとき、<InlineMath math="Q" /> と <InlineMath math="S" /> を特異値分解の構成要素（<InlineMath math="U, \Sigma, V" />）を用いて表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            特異値分解の式に <InlineMath math="V^T V = I" /> を挿入して変形する。
                        </p>
                        <BlockMath math="A = U \Sigma V^T = (U V^T) (V \Sigma V^T)" />
                        <p>
                            ここで、左側の <InlineMath math="UV^T" /> は直交行列同士の積であるため直交行列である。また、右側の <InlineMath math="V \Sigma V^T" /> は対称であり、特異値が非負であることから半正定値対称行列である。<br />
                            したがって、極分解の要素は以下のように表される。
                        </p>
                        <BlockMath math="Q = U V^T" />
                        <BlockMath math="S = V \Sigma V^T" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="14" number={8}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}" /> の特異値分解 <InlineMath math="A = U \Sigma V^T" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. 特異値の計算</strong></p>
                        <BlockMath math="A^T A = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}" />
                        <p>固有値は <InlineMath math="\det(A^T A - \lambda I) = (1-\lambda)^2 - 1 = \lambda(\lambda - 2) = 0" /> より <InlineMath math="\lambda_1 = 2, \lambda_2 = 0" />。<br />
                        したがって、特異値は <InlineMath math="\sigma_1 = \sqrt{2}, \sigma_2 = 0" />。</p>
                        <BlockMath math="\Sigma = \begin{pmatrix} \sqrt{2} & 0 \\ 0 & 0 \end{pmatrix}" />

                        <p className="mt-4"><strong>2. 右特異ベクトル <InlineMath math="V" /> の計算</strong></p>
                        <p>・<InlineMath math="\lambda_1 = 2" /> の固有ベクトル： <InlineMath math="\begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \boldsymbol{0} \implies \boldsymbol{v}_1 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}" /></p>
                        <p>・<InlineMath math="\lambda_2 = 0" /> の固有ベクトル： <InlineMath math="\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \boldsymbol{0} \implies \boldsymbol{v}_2 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \end{pmatrix}" /></p>
                        <BlockMath math="V = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" />

                        <p className="mt-4"><strong>3. 左特異ベクトル <InlineMath math="U" /> の計算</strong></p>
                        <p>非ゼロ特異値に対応する左特異ベクトルは <InlineMath math="\boldsymbol{u}_i = \frac{1}{\sigma_i} A \boldsymbol{v}_i" /> で求まる。</p>
                        <BlockMath math="\boldsymbol{u}_1 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 2 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}" />
                        <p><InlineMath math="\boldsymbol{u}_2" /> は <InlineMath math="\boldsymbol{u}_1" /> と直交する正規化ベクトルを選ぶため、<InlineMath math="\boldsymbol{u}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}" /> とすればよい。</p>
                        <BlockMath math="U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I" />

                        <p className="mt-4"><strong>4. 結論</strong></p>
                        <BlockMath math="A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} \sqrt{2} & 0 \\ 0 & 0 \end{pmatrix} \left[ \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \right]^T" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="14" number={9}>
                    <p>
                        任意の行列 <InlineMath math="A" /> とその転置行列 <InlineMath math="A^T" /> は、<strong>全く同じ非ゼロ特異値</strong>を持つことを、特異値分解の式を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列 <InlineMath math="A" /> の特異値分解を <InlineMath math="A = U \Sigma V^T" /> とする。<br />
                            この式の両辺の転置をとる。積の転置の公式 <InlineMath math="(XYZ)^T = Z^T Y^T X^T" /> を用いる。
                        </p>
                        <BlockMath math="A^T = (U \Sigma V^T)^T = (V^T)^T \Sigma^T U^T = V \Sigma^T U^T" />
                        <p>
                            ここで、<InlineMath math="V" /> と <InlineMath math="U" /> は直交行列であるため、この形 <InlineMath math="V (\Sigma^T) U^T" /> はそれ自体が <InlineMath math="A^T" /> の特異値分解の構造を満たしている（左特異ベクトルが <InlineMath math="V" />、右特異ベクトルが <InlineMath math="U" /> に入れ替わった状態）。
                        </p>
                        <p>
                            中央の行列 <InlineMath math="\Sigma^T" /> は、元の <InlineMath math="\Sigma" /> を転置したものであるが、対角成分にある特異値 <InlineMath math="\sigma_i" /> の値は転置してもそのまま対角線上に配置される。<br />
                            したがって、<InlineMath math="A^T" /> の特異値分解に現れる特異値行列は <InlineMath math="\Sigma^T" /> であり、含まれる非ゼロの特異値は <InlineMath math="A" /> と完全に一致することが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="14" number={10}>
                    <p>
                        行列 <InlineMath math="A" /> の擬逆行列 <InlineMath math="A^+" /> を用いて作られる行列 <InlineMath math="P = A^+ A" /> について考える。<br />
                        この行列 <InlineMath math="P" /> が<strong>直交射影行列</strong>であることを証明せよ。すなわち、(1) 対称であること（<InlineMath math="P^T = P" />）、(2) 冪等であること（<InlineMath math="P^2 = P" />）を示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="A = U \Sigma V^T" />、<InlineMath math="A^+ = V \Sigma^+ U^T" /> を代入して <InlineMath math="P = A^+ A" /> を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            P &= (V \Sigma^+ U^T) (U \Sigma V^T) \\
                            &= V \Sigma^+ (U^T U) \Sigma V^T \\
                            &= V \Sigma^+ \Sigma V^T \quad (\because U^T U = I)
                            \end{aligned}
                        " />
                        <p>
                            ここで <InlineMath math="\Sigma^+ \Sigma" /> を考える。<InlineMath math="\Sigma^+" /> は非ゼロの <InlineMath math="\sigma_i" /> を <InlineMath math="\sigma_i^{-1}" /> にしたものであり、<InlineMath math="\Sigma" /> と掛けると、非ゼロ特異値のあった場所（<InlineMath math="i \leq r" />）は <InlineMath math="1" /> になり、それ以外は <InlineMath math="0" /> となる対角行列になる。
                        </p>
                        <BlockMath math="D_r = \Sigma^+ \Sigma = \begin{pmatrix} I_r & O \\ O & O \end{pmatrix}" />
                        <p>
                            したがって <InlineMath math="P = V D_r V^T" /> と書ける。この性質を用いて2つの条件を示す。
                        </p>
                        <p><strong>(1) 対称性の証明：</strong></p>
                        <BlockMath math="P^T = (V D_r V^T)^T = (V^T)^T D_r^T V^T = V D_r V^T = P" />
                        <p>（※ <InlineMath math="D_r" /> は対角行列なので <InlineMath math="D_r^T = D_r" />）。よって対称である。</p>

                        <p className="mt-4"><strong>(2) 冪等性の証明：</strong></p>
                        <BlockMath math="\begin{aligned}
                            P^2 &= (V D_r V^T) (V D_r V^T) \\
                            &= V D_r (V^T V) D_r V^T \\
                            &= V D_r^2 V^T
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="D_r" /> は対角成分が1か0の対角行列なので、何度掛けても変わらない（<InlineMath math="D_r^2 = D_r" />）。
                        </p>
                        <BlockMath math="P^2 = V D_r V^T = P" />
                        <p>
                            よって冪等である。以上より、<InlineMath math="P = A^+ A" /> は直交射影行列であることが示された。
                        </p>
                        <p className="mt-2 text-sm text-slate-500">（※ 幾何学的には、この <InlineMath math="P" /> は <InlineMath math="A" /> の行空間への直交射影を表している。）</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
