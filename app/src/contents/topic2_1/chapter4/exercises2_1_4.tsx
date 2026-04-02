import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        スカラー体 <InlineMath math="K" /> 上のベクトル空間 <InlineMath math="V" /> について、線形汎関数（Definition 4.1-1）とはどのような写像のことか。写像の定義域と値域を明記して答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.1-1 より、ベクトル空間 <InlineMath math="V" /> を定義域とし、スカラー体 <InlineMath math="K" /> を値域とする線形写像のことである。<br />
                            （式で表すと <InlineMath math="f: V \to K" /> となる）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        有限次元ベクトル空間 <InlineMath math="V" /> の次元が <InlineMath math="n" /> であるとき、その双対空間 <InlineMath math="V^*" /> の次元はいくつか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.2-1 より、双対空間の次元は元の空間の次元と等しくなる。
                        </p>
                        <p className="mt-2">
                            <strong>答．</strong> <InlineMath math="n" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        二重双対空間における「自然な埋め込み写像 <InlineMath math="J: V \to V^{**}" />」は、ベクトル <InlineMath math="\boldsymbol{x} \in V" /> をどのような関数 <InlineMath math="\Phi_{\boldsymbol{x}}" /> に対応させるか。
                        <InlineMath math="\Phi_{\boldsymbol{x}}" /> の働きを、任意の線形汎関数 <InlineMath math="f \in V^*" /> を用いた式で表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.4-2 より、線形汎関数 <InlineMath math="f" /> にベクトル <InlineMath math="\boldsymbol{x}" /> を代入した値を返す関数として定義される。
                        </p>
                        <BlockMath math="\Phi_{\boldsymbol{x}}(f) = f(\boldsymbol{x})" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        <InlineMath math="V = \mathbb{R}^3" /> 上の関数 <InlineMath math="f: \mathbb{R}^3 \to \mathbb{R}" /> を、<InlineMath math="\boldsymbol{x} = (x_1, x_2, x_3)^T" /> に対して
                    </p>
                    <BlockMath math="f(\boldsymbol{x}) = 2x_1 - x_2 + 4x_3" />
                    <p>
                        と定める。これが線形汎関数であることを、加法性と斉次性の2つの条件を満たすことを確認して示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>加法性の確認：</strong><br />
                            任意のベクトル <InlineMath math="\boldsymbol{x} = (x_1, x_2, x_3)^T, \boldsymbol{y} = (y_1, y_2, y_3)^T" /> に対して、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            f(\boldsymbol{x} + \boldsymbol{y}) &= f(x_1+y_1, x_2+y_2, x_3+y_3) \\
                            &= 2(x_1+y_1) - (x_2+y_2) + 4(x_3+y_3) \\
                            &= (2x_1 - x_2 + 4x_3) + (2y_1 - y_2 + 4y_3) \\
                            &= f(\boldsymbol{x}) + f(\boldsymbol{y})
                            \end{aligned}
                        " />
                        <p>よって加法性を満たす。</p>
                        <p className="mt-4">
                            <strong>斉次性の確認：</strong><br />
                            スカラー <InlineMath math="c" /> に対して、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            f(c\boldsymbol{x}) &= f(cx_1, cx_2, cx_3) \\
                            &= 2(cx_1) - (cx_2) + 4(cx_3) \\
                            &= c(2x_1 - x_2 + 4x_3) \\
                            &= c f(\boldsymbol{x})
                            \end{aligned}
                        " />
                        <p>よって斉次性を満たす。</p>
                        <p>
                            これらより、<InlineMath math="f" /> は線形汎関数である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> の標準基底 <InlineMath math="\boldsymbol{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \boldsymbol{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}" /> に対する双対基底を <InlineMath math="\boldsymbol{e}_1^*, \boldsymbol{e}_2^*" /> とする。<br />
                        線形汎関数 <InlineMath math="f \in (\mathbb{R}^2)^*" /> が <InlineMath math="f(x, y) = 3x - 5y" /> で与えられているとき、この <InlineMath math="f" /> を双対基底 <InlineMath math="\boldsymbol{e}_1^*, \boldsymbol{e}_2^*" /> の線形結合として表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            双対基底 <InlineMath math="\boldsymbol{e}_1^*, \boldsymbol{e}_2^*" /> はそれぞれ第1成分、第2成分を取り出す関数である。
                        </p>
                        <BlockMath math="\boldsymbol{e}_1^*(\boldsymbol{x}) = x, \quad \boldsymbol{e}_2^*(\boldsymbol{x}) = y" />
                        <p>
                            与えられた関数 <InlineMath math="f" /> を変形すると、
                        </p>
                        <BlockMath math="
                            f(\boldsymbol{x}) = 3x - 5y = 3\boldsymbol{e}_1^*(\boldsymbol{x}) - 5\boldsymbol{e}_2^*(\boldsymbol{x})
                        " />
                        <p>
                            となる。これはすべての <InlineMath math="\boldsymbol{x}" /> に対して成り立つため、関数としての等式
                        </p>
                        <BlockMath math="f = 3\boldsymbol{e}_1^* - 5\boldsymbol{e}_2^*" />
                        <p>
                            が得られる。
                        </p>
                        <p className="text-sm mt-2">（※別解として、係数は <InlineMath math="c_i = f(\boldsymbol{e}_i)" /> で求まるため、<InlineMath math="f(\boldsymbol{e}_1) = f(1,0) = 3" />、<InlineMath math="f(\boldsymbol{e}_2) = f(0,1) = -5" /> と計算してもよい）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        線形写像 <InlineMath math="f: \mathbb{R}^2 \to \mathbb{R}^2" /> を <InlineMath math="f\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x - y \\ x + 3y \end{pmatrix}" /> とする。<br />
                        <InlineMath math="(\mathbb{R}^2)^*" /> の元である線形汎関数 <InlineMath math="g(s, t) = 4s + t" /> に対して、双対写像 <InlineMath math="f^*(g)" /> はどのような関数になるか。変数 <InlineMath math="x, y" /> の式で表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            双対写像の定義（Definition 4.3-1）より、任意のベクトル <InlineMath math="\boldsymbol{x} = (x, y)^T" /> に対して
                        </p>
                        <BlockMath math="(f^*(g))(\boldsymbol{x}) = g(f(\boldsymbol{x}))" />
                        <p>
                            となる。<InlineMath math="f(\boldsymbol{x})" /> の結果を <InlineMath math="g" /> に代入すればよい。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            g(f(x, y)) &= g(2x - y, \, x + 3y) \\
                            &= 4(2x - y) + 1(x + 3y) \\
                            &= 8x - 4y + x + 3y \\
                            &= 9x - y
                            \end{aligned}
                        " />
                        <p>
                            したがって、求める関数は <InlineMath math="(x, y) \mapsto 9x - y" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        <InlineMath math="V = \mathbb{R}^2" /> の基底を <InlineMath math="\boldsymbol{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \boldsymbol{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}" /> とする。<br />
                        この基底に対する双対基底 <InlineMath math="\boldsymbol{v}_1^*, \boldsymbol{v}_2^*" /> を求めよ。
                        すなわち、任意のベクトル <InlineMath math="\boldsymbol{x} = \begin{pmatrix} x \\ y \end{pmatrix}" /> を入力したときにスカラーを返す関数として、<InlineMath math="\boldsymbol{v}_1^*(x, y)" /> と <InlineMath math="\boldsymbol{v}_2^*(x, y)" /> を具体的に <InlineMath math="x, y" /> の式で表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            双対基底の定義（Theorem 4.2-1）より、以下の条件を満たす必要がある。
                        </p>
                        <BlockMath math="\boldsymbol{v}_1^*(\boldsymbol{v}_1) = 1, \quad \boldsymbol{v}_1^*(\boldsymbol{v}_2) = 0" />
                        <BlockMath math="\boldsymbol{v}_2^*(\boldsymbol{v}_1) = 0, \quad \boldsymbol{v}_2^*(\boldsymbol{v}_2) = 1" />
                        <p>
                            線形汎関数を <InlineMath math="\boldsymbol{v}_1^*(x,y) = ax + by" /> とおく。条件を代入すると、
                        </p>
                        <BlockMath math="
                            \begin{cases}
                            a(1) + b(1) = 1 \\
                            a(1) + b(-1) = 0
                            \end{cases}
                        " />
                        <p>
                            これを解くと、2式の和から <InlineMath math="2a = 1 \implies a = 1/2" />。差から <InlineMath math="2b = 1 \implies b = 1/2" />。
                        </p>
                        <p>
                            同様に <InlineMath math="\boldsymbol{v}_2^*(x,y) = cx + dy" /> とおく。条件より、
                        </p>
                        <BlockMath math="
                            \begin{cases}
                            c(1) + d(1) = 0 \\
                            c(1) + d(-1) = 1
                            \end{cases}
                        " />
                        <p>
                            これを解くと、2式の和から <InlineMath math="2c = 1 \implies c = 1/2" />。差から <InlineMath math="2d = -1 \implies d = -1/2" />。
                        </p>
                        <p>
                            したがって、求める双対基底は以下の関数となる。
                        </p>
                        <BlockMath math="\boldsymbol{v}_1^*(x, y) = \frac{1}{2}x + \frac{1}{2}y" />
                        <BlockMath math="\boldsymbol{v}_2^*(x, y) = \frac{1}{2}x - \frac{1}{2}y" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        関数空間 <InlineMath math="V" /> を、実数全体で定義された2次以下の多項式の集合 <InlineMath math="\mathbb{R}[x]_{\leq 2}" /> とする。<br />
                        <InlineMath math="V" /> 上の線形汎関数 <InlineMath math="f_1, f_2, f_3" /> を次のように定義する。
                    </p>
                    <BlockMath math="f_1(p) = \int_0^1 p(x) dx, \quad f_2(p) = p'(0), \quad f_3(p) = p(1)" />
                    <p>
                        多項式 <InlineMath math="p(x) = 2x^2 - 3x + 1" /> に対して、これらの汎関数の値 <InlineMath math="f_1(p), f_2(p), f_3(p)" /> をそれぞれ計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            それぞれ定義に従って計算する。
                        </p>
                        <p><strong><InlineMath math="f_1(p)" /> の計算：</strong></p>
                        <BlockMath math="
                            \begin{aligned}
                            f_1(p) &= \int_0^1 (2x^2 - 3x + 1) dx \\
                            &= \left[ \frac{2}{3}x^3 - \frac{3}{2}x^2 + x \right]_0^1 \\
                            &= \frac{2}{3} - \frac{3}{2} + 1 = \frac{4 - 9 + 6}{6} = \frac{1}{6}
                            \end{aligned}
                        " />
                        <p><strong><InlineMath math="f_2(p)" /> の計算：</strong></p>
                        <p>導関数は <InlineMath math="p'(x) = 4x - 3" /> である。これに <InlineMath math="x=0" /> を代入する。</p>
                        <BlockMath math="
                            f_2(p) = p'(0) = 4(0) - 3 = -3
                        " />
                        <p><strong><InlineMath math="f_3(p)" /> の計算：</strong></p>
                        <p><InlineMath math="x=1" /> を代入する。</p>
                        <BlockMath math="
                            f_3(p) = p(1) = 2(1)^2 - 3(1) + 1 = 2 - 3 + 1 = 0
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
