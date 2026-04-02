import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter13() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="13" number={1}>
                    <p>
                        実対称行列 <InlineMath math="A" /> の互いに異なる固有値を <InlineMath math="\lambda_1, \dots, \lambda_k" /> とし、それぞれの固有空間への直交射影行列を <InlineMath math="P_1, \dots, P_k" /> とする。<br />
                        このとき、<InlineMath math="A" /> の「スペクトル分解」の式を記せ。また、射影行列 <InlineMath math="P_i" /> が満たすべき3つの基本的な性質を挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p><strong>スペクトル分解の式：</strong></p>
                        <BlockMath math="A = \lambda_1 P_1 + \lambda_2 P_2 + \dots + \lambda_k P_k = \sum_{i=1}^k \lambda_i P_i" />
                        <p className="mt-4"><strong>射影行列が満たす3つの性質：</strong></p>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li><InlineMath math="P_i^2 = P_i = P_i^T" /> （冪等かつ対称、すなわち直交射影である）</li>
                            <li><InlineMath math="i \neq j" /> のとき <InlineMath math="P_i P_j = O" /> （異なる固有空間への射影は互いに直交する）</li>
                            <li><InlineMath math="\sum_{i=1}^k P_i = I" /> （完全性の関係、全空間を覆う）</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="13" number={2}>
                    <p>
                        複素行列の世界において、実対称行列のように「互いに直交する固有空間への射影の和（スペクトル分解）」として表現できる（ユニタリ対角化可能である）ための必要十分条件となる行列のクラスを何と呼ぶか。また、その定義式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>正規行列（Normal Matrix）</strong>と呼ぶ。
                        </p>
                        <p className="mt-2">
                            定義式：
                        </p>
                        <BlockMath math="A A^* = A^* A" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="13" number={3}>
                    <p>
                        行列 <InlineMath math="A" /> がスペクトル分解 <InlineMath math="A = \sum_{i=1}^k \lambda_i P_i" /> を持つとき、任意のスカラー関数 <InlineMath math="f(x)" /> を用いて、行列関数 <InlineMath math="f(A)" /> はどのように定義されるか。式で答えよ。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="f(A) = \sum_{i=1}^k f(\lambda_i) P_i" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="13" number={4}>
                    <p>
                        実対称行列 <InlineMath math="A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}" /> のスペクトル分解 <InlineMath math="A = \lambda_1 P_1 + \lambda_2 P_2" /> を求めよ。<br />
                        （固有値 <InlineMath math="\lambda_1, \lambda_2" /> と、対応する直交射影行列 <InlineMath math="P_1, P_2" /> を具体的に成分で表せ。）
                    </p>
                    <ExerciseSolution>
                        <p><strong>1. 固有値の計算</strong></p>
                        <BlockMath math="\begin{aligned}
                            \det(A - \lambda I) &= (2-\lambda)^2 - 1 \\
                            &= \lambda^2 - 4\lambda + 3 \\
                            &= (\lambda-3)(\lambda-1) = 0
                            \end{aligned}
                        " />
                        <p>固有値は <InlineMath math="\lambda_1 = 3, \lambda_2 = 1" />。</p>

                        <p className="mt-4"><strong>2. 固有ベクトルと射影行列の計算</strong></p>
                        <p>・<InlineMath math="\lambda_1 = 3" /> のとき</p>
                        <InlineMath math="(A - 3I)\boldsymbol{x} = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \boldsymbol{0} \implies x = y" />。<br />
                        正規化された固有ベクトルは <InlineMath math="\boldsymbol{u}_1 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix}" />。<br />
                        射影行列 <InlineMath math="P_1" /> は <InlineMath math="\boldsymbol{u}_1 \boldsymbol{u}_1^T" /> により計算できる。
                        <BlockMath math="P_1 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix} \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}" />

                        <p className="mt-4">・<InlineMath math="\lambda_2 = 1" /> のとき</p>
                        <InlineMath math="(A - I)\boldsymbol{x} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \boldsymbol{0} \implies x = -y" />。<br />
                        正規化された固有ベクトルは <InlineMath math="\boldsymbol{u}_2 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \end{pmatrix}" />。<br />
                        射影行列 <InlineMath math="P_2" /> は <InlineMath math="\boldsymbol{u}_2 \boldsymbol{u}_2^T" /> により計算できる。
                        <BlockMath math="P_2 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \end{pmatrix} \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & -1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}" />

                        <p className="mt-4"><strong>3. 結論</strong></p>
                        <BlockMath math="A = 3 \left[ \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \right] + 1 \left[ \frac{1}{2} \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \right]" />
                        <p className="text-sm text-slate-500">（確認： 右辺を足し合わせると <InlineMath math="\frac{1}{2}\begin{pmatrix} 4 & 2 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} = A" /> となり一致する。また <InlineMath math="P_1 + P_2 = I" /> も満たしている。）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="13" number={5}>
                    <p>
                        前問（問題4）で求めたスペクトル分解を利用して、行列 <InlineMath math="A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}" /> の3乗 <InlineMath math="A^3" /> を計算せよ。<br />
                        （行列の直接の掛け算ではなく、スペクトル分解の性質 <InlineMath math="A^3 = \lambda_1^3 P_1 + \lambda_2^3 P_2" /> を用いること。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列関数 <InlineMath math="f(A) = A^3" /> の性質より、各固有値を3乗して射影行列と結合すればよい。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            A^3 &= 3^3 P_1 + 1^3 P_2 \\
                            &= 27 \left[ \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \right] + 1 \left[ \frac{1}{2} \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \right] \\
                            &= \frac{1}{2} \begin{pmatrix} 27 & 27 \\ 27 & 27 \end{pmatrix} + \frac{1}{2} \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \\
                            &= \frac{1}{2} \begin{pmatrix} 28 & 26 \\ 26 & 28 \end{pmatrix} \\
                            &= \begin{pmatrix} 14 & 13 \\ 13 & 14 \end{pmatrix}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="13" number={6}>
                    <p>
                        前問（問題4）で求めたスペクトル分解を利用して、行列の指数関数 <InlineMath math="e^A" /> を求めよ。（成分は <InlineMath math="e" /> を用いたままでよい）
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列関数 <InlineMath math="f(A) = e^A" /> の性質より、各固有値を指数関数の肩に乗せて射影行列と結合する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            e^A &= e^3 P_1 + e^1 P_2 \\
                            &= e^3 \left[ \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \right] + e \left[ \frac{1}{2} \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \right] \\
                            &= \frac{1}{2} \begin{pmatrix} e^3 + e & e^3 - e \\ e^3 - e & e^3 + e \end{pmatrix}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="13" number={7}>
                    <p>
                        前問（問題4）で求めたスペクトル分解を利用して、行列 <InlineMath math="A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}" /> の正定値平方根 <InlineMath math="\sqrt{A}" /> を求めよ。<br />
                        （まず、<InlineMath math="A" /> が平方根を持つための条件「半正定値であること」を満たしているか確認すること。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="A" /> の固有値は <InlineMath math="3, 1" /> であり、すべて正（<InlineMath math=">0" />）である。したがって <InlineMath math="A" /> は正定値行列（当然、半正定値行列でもある）であり、一意な正定値平方根 <InlineMath math="\sqrt{A}" /> が存在する。
                        </p>
                        <p>
                            行列関数 <InlineMath math="f(A) = \sqrt{A}" /> の性質より、各固有値の平方根を計算して射影行列と結合する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \sqrt{A} &= \sqrt{3} P_1 + \sqrt{1} P_2 \\
                            &= \sqrt{3} \left[ \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \right] + 1 \left[ \frac{1}{2} \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \right] \\
                            &= \frac{1}{2} \begin{pmatrix} \sqrt{3} + 1 & \sqrt{3} - 1 \\ \sqrt{3} - 1 & \sqrt{3} + 1 \end{pmatrix}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="13" number={8}>
                    <p>
                        <InlineMath math="A" /> が任意のスペクトル分解可能な実対称行列であるとする。このとき、行列の指数関数 <InlineMath math="e^A" /> は必ず<strong>正定値行列</strong>になることを証明せよ。<br />
                        （ヒント：<InlineMath math="e^A" /> が対称行列であることと、その固有値の符号を確認せよ。）
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="A" /> のスペクトル分解を <InlineMath math="A = \sum_{i=1}^k \lambda_i P_i" /> とする。ここで <InlineMath math="\lambda_i" /> は実数であり、<InlineMath math="P_i" /> は直交射影行列（<InlineMath math="P_i^T = P_i" />）である。
                        </p>
                        <p>
                            行列指数関数の定義より、
                        </p>
                        <BlockMath math="e^A = \sum_{i=1}^k e^{\lambda_i} P_i" />
                        <p>
                            まず、<InlineMath math="e^A" /> が対称行列であることを確認する。
                        </p>
                        <BlockMath math="(e^A)^T = \left( \sum_{i=1}^k e^{\lambda_i} P_i \right)^T = \sum_{i=1}^k e^{\lambda_i} P_i^T = \sum_{i=1}^k e^{\lambda_i} P_i = e^A" />
                        <p>
                            よって <InlineMath math="e^A" /> は対称行列である。
                        </p>
                        <p>
                            次に、定値性を判定するために固有値を調べる。この分解式自体が <InlineMath math="e^A" /> のスペクトル分解の形をしており、射影行列 <InlineMath math="P_i" /> に対する係数 <InlineMath math="e^{\lambda_i}" /> がそのまま <InlineMath math="e^A" /> の固有値となる。<br />
                            <InlineMath math="\lambda_i" /> は任意の実数であるが、実数の指数関数 <InlineMath math="e^x" /> の値は常に正（<InlineMath math=">0" />）である。
                        </p>
                        <p>
                            したがって、<InlineMath math="e^A" /> のすべての固有値 <InlineMath math="e^{\lambda_i}" /> は正である。<br />
                            対称行列のすべての固有値が正であるため、Theorem 12.2-1 より <InlineMath math="e^A" /> は<strong>正定値行列</strong>である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="13" number={9}>
                    <p>
                        <InlineMath math="A" /> が実対称行列であり、そのスペクトル分解を <InlineMath math="A = \sum_{i=1}^k \lambda_i P_i" /> とする。<br />
                        行列関数として <InlineMath math="\sin(A)" /> と <InlineMath math="\cos(A)" /> を定義したとき、「行列のピタゴラスの定理」とも呼べる以下の等式が成り立つことを、射影行列の性質を用いて証明せよ。
                    </p>
                    <BlockMath math="\sin^2(A) + \cos^2(A) = I" />
                    <ExerciseSolution>
                        <p>
                            行列関数の定義より、
                        </p>
                        <BlockMath math="\sin(A) = \sum_{i=1}^k \sin(\lambda_i) P_i, \quad \cos(A) = \sum_{i=1}^k \cos(\lambda_i) P_i" />
                        <p>
                            それぞれの2乗を計算する。このとき、射影行列の直交性（<InlineMath math="i \neq j" /> で <InlineMath math="P_i P_j = O" />）と冪等性（<InlineMath math="P_i^2 = P_i" />）を用いると、クロスタームがすべて消え、以下のようになる。
                        </p>
                        <BlockMath math="\sin^2(A) = \left( \sum_{i=1}^k \sin(\lambda_i) P_i \right)^2 = \sum_{i=1}^k \sin^2(\lambda_i) P_i" />
                        <BlockMath math="\cos^2(A) = \left( \sum_{i=1}^k \cos(\lambda_i) P_i \right)^2 = \sum_{i=1}^k \cos^2(\lambda_i) P_i" />
                        <p>
                            これらを足し合わせる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \sin^2(A) + \cos^2(A) &= \sum_{i=1}^k \sin^2(\lambda_i) P_i + \sum_{i=1}^k \cos^2(\lambda_i) P_i \\
                            &= \sum_{i=1}^k \left( \sin^2(\lambda_i) + \cos^2(\lambda_i) \right) P_i
                            \end{aligned}
                        " />
                        <p>
                            実数の三角関数の性質 <InlineMath math="\sin^2 \theta + \cos^2 \theta = 1" /> より、括弧の中はすべて <InlineMath math="1" /> になる。
                        </p>
                        <BlockMath math="= \sum_{i=1}^k 1 \cdot P_i = \sum_{i=1}^k P_i" />
                        <p>
                            射影行列の完全性の関係（全固有空間への射影の和は空間全体になる）より、<InlineMath math="\sum_{i=1}^k P_i = I" /> である。
                        </p>
                        <p>
                            したがって、<InlineMath math="\sin^2(A) + \cos^2(A) = I" /> が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="13" number={10}>
                    <p>
                        正定値行列 <InlineMath math="A" /> に対して、その一意な正定値平方根 <InlineMath math="R = \sqrt{A}" /> が存在する。<br />
                        <InlineMath math="A" /> が正定値であるため <InlineMath math="A" /> は逆行列 <InlineMath math="A^{-1}" /> を持つ。このとき、<InlineMath math="R" /> も逆行列 <InlineMath math="R^{-1}" /> を持ち、さらにそれが <InlineMath math="A^{-1}" /> の正定値平方根になっている（すなわち <InlineMath math="R^{-1} = \sqrt{A^{-1}}" /> である）ことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="A" /> のスペクトル分解を <InlineMath math="A = \sum \lambda_i P_i" /> とする。<InlineMath math="A" /> は正定値なので、すべての <InlineMath math="\lambda_i > 0" /> である。
                        </p>
                        <p>
                            正定値平方根 <InlineMath math="R" /> は <InlineMath math="R = \sum \sqrt{\lambda_i} P_i" /> で与えられる。<br />
                            <InlineMath math="\sqrt{\lambda_i} > 0" /> であるため、<InlineMath math="R" /> のすべての固有値は非ゼロであり、<InlineMath math="R" /> は正則（逆行列を持つ）である。<br />
                            行列関数の性質により、<InlineMath math="R^{-1}" /> は各固有値の逆数をとることで得られる。
                        </p>
                        <BlockMath math="R^{-1} = \sum \frac{1}{\sqrt{\lambda_i}} P_i" />
                        <p>
                            次に、<InlineMath math="R^{-1}" /> が <InlineMath math="A^{-1}" /> の正定値平方根であることを示すには、「(1) 2乗すると <InlineMath math="A^{-1}" /> になること」「(2) <InlineMath math="R^{-1}" /> 自身が正定値であること」を示せばよい。
                        </p>
                        <p>
                            (1) <InlineMath math="R^{-1}" /> を2乗する。
                        </p>
                        <BlockMath math="(R^{-1})^2 = \sum \left(\frac{1}{\sqrt{\lambda_i}}\right)^2 P_i = \sum \frac{1}{\lambda_i} P_i" />
                        <p>
                            右辺はまさに行列関数の定義による <InlineMath math="A^{-1}" /> そのものである。よって <InlineMath math="(R^{-1})^2 = A^{-1}" /> が成り立つ。
                        </p>
                        <p>
                            (2) <InlineMath math="R^{-1}" /> は対称行列（射影行列の線形結合）であり、その固有値は <InlineMath math="\frac{1}{\sqrt{\lambda_i}}" /> である。<InlineMath math="\lambda_i > 0" /> よりこれらもすべて正（<InlineMath math=">0" />）であるため、<InlineMath math="R^{-1}" /> は正定値行列である。
                        </p>
                        <p>
                            正定値行列の正定値平方根はただ一つ（一意的）であるため、この <InlineMath math="R^{-1}" /> こそが <InlineMath math="A^{-1}" /> の唯一の正定値平方根 <InlineMath math="\sqrt{A^{-1}}" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
