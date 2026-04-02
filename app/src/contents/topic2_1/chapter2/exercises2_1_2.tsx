import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        ベクトル空間 <InlineMath math="V" /> のベクトル <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n" /> が「線形独立（一次独立）である」とはどういうことか。スカラー <InlineMath math="c_1, c_2, \dots, c_n" /> を用いた関係式 <InlineMath math="c_1 \boldsymbol{v}_1 + c_2 \boldsymbol{v}_2 + \dots + c_n \boldsymbol{v}_n = \boldsymbol{0}" /> に触れながら簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-1 より、関係式 <InlineMath math="c_1 \boldsymbol{v}_1 + c_2 \boldsymbol{v}_2 + \dots + c_n \boldsymbol{v}_n = \boldsymbol{0}" /> が成り立つようなスカラーの組が、
                            <InlineMath math="c_1 = c_2 = \dots = c_n = 0" /> のただ1通りしかない（自明な解しかもたない）ことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        あるベクトルの集合 <InlineMath math="B" /> がベクトル空間 <InlineMath math="V" /> の「基底」であるための2つの条件を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.3-1 より、以下の2条件を満たすことである。
                        </p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li><InlineMath math="V" /> の生成系（スパン）であること（<InlineMath math="V" /> の任意のベクトルが <InlineMath math="B" /> の線形結合で表せること）。</li>
                            <li>線形独立であること。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        古い基底 <InlineMath math="B" /> から新しい基底 <InlineMath math="B'" /> への基底変換行列を <InlineMath math="P" /> とする。あるベクトル <InlineMath math="\boldsymbol{x}" /> の古い基底に関する座標ベクトル <InlineMath math="[\boldsymbol{x}]_B" /> と新しい基底に関する座標ベクトル <InlineMath math="[\boldsymbol{x}]_{B'}" /> の間に成り立つ関係式を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.5-1 より、以下の関係が成り立つ。
                        </p>
                        <BlockMath math="[\boldsymbol{x}]_B = P [\boldsymbol{x}]_{B'}" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        次の <InlineMath math="\mathbb{R}^3" /> のベクトルの組が線形独立か線形従属か判定せよ。
                    </p>
                    <BlockMath math="\boldsymbol{v}_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \quad \boldsymbol{v}_2 = \begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\boldsymbol{v}_2 = 2 \boldsymbol{v}_1" /> であるため、<InlineMath math="2\boldsymbol{v}_1 - \boldsymbol{v}_2 = \boldsymbol{0}" /> という関係式が成り立つ。
                            これは係数が <InlineMath math="(2, -1)" /> であり、すべてが0ではないため、定義より<strong>線形従属</strong>である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        <InlineMath math="\mathbb{R}^3" /> における次の3つのベクトルが線形独立かどうかを行基本変形を用いて判定せよ。
                    </p>
                    <BlockMath math="\boldsymbol{v}_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \quad \boldsymbol{v}_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \quad \boldsymbol{v}_3 = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}" />
                    <ExerciseSolution>
                        <p>
                            これらを列ベクトルとする行列 <InlineMath math="A" /> を作り、行基本変形を行う。
                        </p>
                        <BlockMath math="
                            A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix}
                        " />
                        <p>
                            3行目から1行目を引く。
                        </p>
                        <BlockMath math="
                            \longrightarrow \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}
                        " />
                        <p>
                            3行目から2行目を引く。
                        </p>
                        <BlockMath math="
                            \longrightarrow \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}
                        " />
                        <p>
                            ピボットの数は2個であり、ベクトルの本数（列の数）の3より小さい（<InlineMath math="r = 2 < 3" />）。
                            Proposition 2.2-1 より、これらは<strong>線形従属</strong>である。
                        </p>
                        <p className="text-sm mt-2">（実際、<InlineMath math="\boldsymbol{v}_1 + \boldsymbol{v}_2 = \boldsymbol{v}_3" /> となっている）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        行列 <InlineMath math="A = \begin{pmatrix} 1 & -2 \\ -3 & 6 \end{pmatrix}" /> の零空間 <InlineMath math="\mathrm{Ker}(A)" /> を求め、その次元を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\mathrm{Ker}(A)" /> は連立方程式 <InlineMath math="A\boldsymbol{x} = \boldsymbol{0}" /> を満たす <InlineMath math="\boldsymbol{x}" /> の集合である。
                            <InlineMath math="\boldsymbol{x} = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}" /> とおくと、
                        </p>
                        <BlockMath math="
                            \begin{pmatrix} 1 & -2 \\ -3 & 6 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
                        " />
                        <p>
                            2行目は1行目の-3倍なので、実質的な方程式は <InlineMath math="x_1 - 2x_2 = 0" /> のみである。<br />
                            <InlineMath math="x_2 = t" /> （<InlineMath math="t" /> は任意の実数）とおくと、<InlineMath math="x_1 = 2t" /> となる。
                        </p>
                        <BlockMath math="
                            \boldsymbol{x} = \begin{pmatrix} 2t \\ t \end{pmatrix} = t \begin{pmatrix} 2 \\ 1 \end{pmatrix}
                        " />
                        <p>
                            よって、零空間は
                        </p>
                        <BlockMath math="\mathrm{Ker}(A) = \left\{ t \begin{pmatrix} 2 \\ 1 \end{pmatrix} \;\middle|\; t \in \mathbb{R} \right\} = \mathrm{Span}\left\{ \begin{pmatrix} 2 \\ 1 \end{pmatrix} \right\}" />
                        <p>
                            基底を構成するベクトルが1つなので、次元は <InlineMath math="\dim \mathrm{Ker}(A) = 1" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        部分空間の次元の性質（Proposition 2.4-1）について考える。
                        ベクトル空間 <InlineMath math="V = \mathbb{R}^4" /> の部分空間 <InlineMath math="W" /> の次元が4であった場合、<InlineMath math="W" /> と <InlineMath math="V" /> の関係はどうなるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 2.4-1 の2番目の性質より、部分空間の次元が全体空間の次元と一致する（<InlineMath math="\dim W = \dim V = 4" />）ならば、その部分空間は全体空間そのものである。
                        </p>
                        <p>
                            よって、<strong><InlineMath math="W = V" />（または <InlineMath math="W = \mathbb{R}^4" />）</strong>となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        <InlineMath math="\mathbb{R}^3" /> の線形独立なベクトルの組 <InlineMath math="\left\{ \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} \right\}" /> に、標準基底のベクトルを1つ付け加えて（拡張して）、<InlineMath math="\mathbb{R}^3" /> の基底を作れ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            追加するベクトルを <InlineMath math="\boldsymbol{e}_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}" /> としてみる。
                            この3つのベクトルが線形独立であるかを行列の階数（ピボットの数）で判定する。
                        </p>
                        <BlockMath math="
                            A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
                        " />
                        <p>
                            この行列はすでに階段行列（上三角行列）の形をしており、対角成分がすべて1（0でない）である。
                            したがってピボットの数は3であり、これら3つのベクトルは線形独立である。
                        </p>
                        <p>
                            <InlineMath math="\mathbb{R}^3" /> において3つの線形独立なベクトルは基底となるため（定理2.4-1）、
                            拡張された基底の1つの例は以下のようになる。
                        </p>
                        <BlockMath math="
                            \left\{ \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} \right\}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        2次以下の多項式空間 <InlineMath math="\mathbb{R}[x]_{\leq 2}" /> を考える。<br />
                        古い基底を <InlineMath math="B = \{1, x, x^2\}" />、新しい基底を <InlineMath math="B' = \{1, 1+x, 1+x+x^2\}" /> とする。
                    </p>
                    <p className="mt-2">(1) 基底 <InlineMath math="B" /> から <InlineMath math="B'" /> への基底変換行列 <InlineMath math="P" /> を求めよ。</p>
                    <p className="mt-2">(2) 多項式 <InlineMath math="p(x) = 2 - x + 3x^2" /> について、古い基底での座標ベクトル <InlineMath math="[p]_B" /> を求めよ。</p>
                    <p className="mt-2">(3) 行列の計算を用いて、新しい基底での座標ベクトル <InlineMath math="[p]_{B'}" /> を求めよ。（<InlineMath math="P^{-1}" /> を計算して用いること）</p>
                    <ExerciseSolution>
                        <p><strong>(1)</strong></p>
                        <p>
                            新しい基底の要素を古い基底で展開する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \boldsymbol{u}_1 &= 1 = 1\cdot 1 + 0\cdot x + 0\cdot x^2 \\
                            \boldsymbol{u}_2 &= 1+x = 1\cdot 1 + 1\cdot x + 0\cdot x^2 \\
                            \boldsymbol{u}_3 &= 1+x+x^2 = 1\cdot 1 + 1\cdot x + 1\cdot x^2
                            \end{aligned}
                        " />
                        <p>
                            これらの係数を列ベクトルとして並べたものが基底変換行列 <InlineMath math="P" /> である。
                        </p>
                        <BlockMath math="P = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}" />

                        <p className="mt-4"><strong>(2)</strong></p>
                        <p>
                            <InlineMath math="p(x) = 2\cdot 1 + (-1)\cdot x + 3\cdot x^2" /> であるから、基底 <InlineMath math="B" /> に関する座標ベクトルは
                        </p>
                        <BlockMath math="[p]_B = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}" />

                        <p className="mt-4"><strong>(3)</strong></p>
                        <p>
                            Theorem 2.5-1 より、<InlineMath math="[p]_B = P [p]_{B'}" /> である。よって <InlineMath math="[p]_{B'} = P^{-1} [p]_B" /> を計算すればよい。<br />
                            <InlineMath math="P" /> の逆行列 <InlineMath math="P^{-1}" /> を求める。
                        </p>
                        <BlockMath math="
                            \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}
                        " />
                        <p>
                            これを用いて座標ベクトルを計算する。
                        </p>
                        <BlockMath math="\begin{aligned}
                            [p]_{B'} &= \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix} \\
                            &= \begin{pmatrix} 2 - (-1) + 0 \\ 0 + (-1) - 3 \\ 0 + 0 + 3 \end{pmatrix} = \begin{pmatrix} 3 \\ -4 \\ 3 \end{pmatrix}
                        \end{aligned}" />
                        <p className="mt-2 text-sm">
                            （確認：<InlineMath math="3(1) - 4(1+x) + 3(1+x+x^2) = 3 - 4 - 4x + 3 + 3x + 3x^2 = 2 - x + 3x^2 = p(x)" /> となり一致する）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
