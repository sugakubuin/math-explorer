import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_2_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        <InlineMath math="n" /> 変数関数 <InlineMath math="f(x_1, \dots, x_n)" /> が2階偏微分可能であるとき、そのヘッセ行列 <InlineMath math="H" /> の定義を、2階偏導関数 <InlineMath math="f_{x_i x_j}" /> を成分とする行列の形で記せ（Definition 6.1-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="H = \begin{pmatrix} 
                        f_{x_1 x_1} & f_{x_1 x_2} & \cdots & f_{x_1 x_n} \\
                        f_{x_2 x_1} & f_{x_2 x_2} & \cdots & f_{x_2 x_n} \\
                        \vdots & \vdots & \ddots & \vdots \\
                        f_{x_n x_1} & f_{x_n x_2} & \cdots & f_{x_n x_n}
                        \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        関数 <InlineMath math="f(\boldsymbol{x})" /> が定義域の内点 <InlineMath math="\boldsymbol{a}" /> で極値をとるための必要条件（<InlineMath math="\boldsymbol{a}" /> が臨界点であること）を、勾配ベクトル <InlineMath math="\nabla f(\boldsymbol{a})" /> を用いた数式で述べよ（Proposition 6.2-1）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="\nabla f(\boldsymbol{a}) = \boldsymbol{0}" />
                        <p>（すなわち、すべての成分について偏導関数が <InlineMath math="0" /> であること。）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        2変数関数 <InlineMath math="f(x, y)" /> の臨界点 <InlineMath math="(a, b)" /> におけるヘッセ行列の行列式を <InlineMath math="D = f_{xx}(a,b) f_{yy}(a,b) - (f_{xy}(a,b))^2" /> とおく。<br />
                        <InlineMath math="D > 0" /> かつ <InlineMath math="f_{xx}(a,b) > 0" /> のとき、関数 <InlineMath math="f" /> は <InlineMath math="(a, b)" /> で極大値をとるか、極小値をとるか答えよ（Corollary 6.3-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>極小値</strong>をとる（このときヘッセ行列は正定値である）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        関数 <InlineMath math="f(x, y) = x^3 y + x y^2" /> のヘッセ行列 <InlineMath math="H(x, y)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、1階偏導関数を計算する。
                        </p>
                        <BlockMath math="f_x = 3x^2 y + y^2, \quad f_y = x^3 + 2xy" />
                        <p>
                            次に、2階偏導関数を計算する。
                        </p>
                        <BlockMath math="f_{xx} = \frac{\partial}{\partial x}(3x^2 y + y^2) = 6xy" />
                        <BlockMath math="f_{yy} = \frac{\partial}{\partial y}(x^3 + 2xy) = 2x" />
                        <BlockMath math="f_{xy} = \frac{\partial}{\partial y}(3x^2 y + y^2) = 3x^2 + 2y" />
                        <BlockMath math="f_{yx} = \frac{\partial}{\partial x}(x^3 + 2xy) = 3x^2 + 2y" />
                        <p>
                            したがって、ヘッセ行列は次のようになる。
                        </p>
                        <BlockMath math="H(x, y) = \begin{pmatrix} 6xy & 3x^2 + 2y \\ 3x^2 + 2y & 2x \end{pmatrix}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        関数 <InlineMath math="f(x, y) = x^2 + xy + y^2 - 3x" /> の臨界点を求め、その点での極値を判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>Step 1: 臨界点を求める</strong>
                        </p>
                        <BlockMath math="f_x = 2x + y - 3 = 0" />
                        <BlockMath math="f_y = x + 2y = 0 \implies x = -2y" />
                        <p>
                            <InlineMath math="x = -2y" /> を第1式に代入する。
                        </p>
                        <BlockMath math="2(-2y) + y - 3 = 0 \implies -3y = 3 \implies y = -1" />
                        <p>
                            このとき <InlineMath math="x = -2(-1) = 2" />。<br />
                            よって臨界点は <InlineMath math="(2, -1)" /> のみである。
                        </p>
                        <p className="mt-2">
                            <strong>Step 2: ヘッセ行列による判定</strong>
                        </p>
                        <BlockMath math="f_{xx} = 2, \quad f_{yy} = 2, \quad f_{xy} = 1" />
                        <p>
                            行列式 <InlineMath math="D" /> を計算する。
                        </p>
                        <BlockMath math="D = f_{xx}f_{yy} - (f_{xy})^2 = (2)(2) - (1)^2 = 3" />
                        <p>
                            <InlineMath math="D = 3 > 0" /> かつ <InlineMath math="f_{xx} = 2 > 0" /> であるため、関数 <InlineMath math="f" /> は点 <InlineMath math="(2, -1)" /> で<strong>極小値</strong>をとる。<br />
                            その値は <InlineMath math="f(2, -1) = 2^2 + 2(-1) + (-1)^2 - 3(2) = 4 - 2 + 1 - 6 = -3" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        関数 <InlineMath math="f(x, y) = x^2 - 2xy" /> の臨界点を求め、ヘッセ行列を用いて極大・極小・鞍点を判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>Step 1: 臨界点を求める</strong>
                        </p>
                        <BlockMath math="f_x = 2x - 2y = 0 \implies x = y" />
                        <BlockMath math="f_y = -2x = 0 \implies x = 0" />
                        <p>
                            よって、臨界点は <InlineMath math="(0, 0)" /> のみである。
                        </p>
                        <p className="mt-2">
                            <strong>Step 2: ヘッセ行列による判定</strong>
                        </p>
                        <BlockMath math="f_{xx} = 2, \quad f_{yy} = 0, \quad f_{xy} = -2" />
                        <p>
                            行列式 <InlineMath math="D" /> を計算する。
                        </p>
                        <BlockMath math="D = f_{xx}f_{yy} - (f_{xy})^2 = (2)(0) - (-2)^2 = -4" />
                        <p>
                            <InlineMath math="D = -4 < 0" /> であるため、点 <InlineMath math="(0, 0)" /> は<strong>鞍点</strong>であり、極値をとらない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        ある3変数関数の臨界点におけるヘッセ行列が次のように与えられたとする。
                    </p>
                    <BlockMath math="H = \begin{pmatrix} 3 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}" />
                    <p>
                        シルヴェスターの判定条件（首座行列式）を用いて、この行列が正定値であるか判定し、この臨界点が極小点であるか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            シルヴェスターの判定条件により、左上から順に首座小行列式 <InlineMath math="D_1, D_2, D_3" /> を計算する。
                        </p>
                        <p className="mt-2">
                            1次：
                        </p>
                        <BlockMath math="D_1 = 3 > 0" />
                        <p className="mt-2">
                            2次：
                        </p>
                        <BlockMath math="D_2 = \begin{vmatrix} 3 & 1 \\ 1 & 2 \end{vmatrix} = 6 - 1 = 5 > 0" />
                        <p className="mt-2">
                            3次（行列式全体）：
                        </p>
                        <BlockMath math="\begin{aligned}
                            D_3 &= \det H \\
                            &= 3 \begin{vmatrix} 2 & 1 \\ 1 & 2 \end{vmatrix} - 1 \begin{vmatrix} 1 & 1 \\ 0 & 2 \end{vmatrix} + 0 \\
                            &= 3(4 - 1) - 1(2 - 0) \\
                            &= 9 - 2 = 7 > 0
                        \end{aligned}
                        " />
                        <p>
                            すべての首座小行列式が正（<InlineMath math="D_1 > 0, D_2 > 0, D_3 > 0" />）であるため、ヘッセ行列 <InlineMath math="H" /> は<strong>正定値</strong>である。
                        </p>
                        <p>
                            したがって、この臨界点では<strong>極小値</strong>をとる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        関数 <InlineMath math="f(x, y) = x^4 + y^4 - 4xy" /> の極値をすべて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>Step 1: 臨界点を求める</strong>
                        </p>
                        <BlockMath math="f_x = 4x^3 - 4y = 0 \implies y = x^3" />
                        <BlockMath math="f_y = 4y^3 - 4x = 0 \implies x = y^3" />
                        <p>
                            <InlineMath math="y = x^3" /> を <InlineMath math="x = y^3" /> に代入すると、<InlineMath math="x = (x^3)^3 = x^9" /> となる。
                        </p>
                        <BlockMath math="\begin{aligned}
                            x^9 - x = 0 &\implies x(x^8 - 1) = 0 \\
                            &\implies x(x^4 - 1)(x^4 + 1) = 0
                        \end{aligned}
                        " />
                        <p>
                            実数解は <InlineMath math="x = 0, 1, -1" /> である。これに対応する <InlineMath math="y = x^3" /> を求めると、臨界点は <InlineMath math="(0,0)" />, <InlineMath math="(1,1)" />, <InlineMath math="(-1,-1)" /> の3点である。
                        </p>
                        <p className="mt-2">
                            <strong>Step 2: 2階偏導関数と行列式を計算する</strong>
                        </p>
                        <BlockMath math="f_{xx} = 12x^2, \quad f_{yy} = 12y^2, \quad f_{xy} = -4" />
                        <BlockMath math="\begin{aligned}
                            D(x, y) &= f_{xx}f_{yy} - (f_{xy})^2 \\
                            &= (12x^2)(12y^2) - (-4)^2 \\
                            &= 144x^2 y^2 - 16
                        \end{aligned}
                        " />
                        <p className="mt-2">
                            <strong>Step 3: 各臨界点での判定</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>
                                点 <InlineMath math="(0, 0)" /> について：<br />
                                <InlineMath math="D(0, 0) = -16 < 0" />。<br />
                                したがって鞍点であり極値ではない。
                            </li>
                            <li>
                                点 <InlineMath math="(1, 1)" /> について：<br />
                                <InlineMath math="D(1, 1) = 144(1)(1) - 16 = 128 > 0" />。かつ <InlineMath math="f_{xx}(1, 1) = 12 > 0" />。<br />
                                したがって<strong>極小値</strong>をとる。値は <InlineMath math="f(1, 1) = 1 + 1 - 4 = -2" />。
                            </li>
                            <li>
                                点 <InlineMath math="(-1, -1)" /> について：<br />
                                <InlineMath math="D(-1, -1) = 144(-1)^2(-1)^2 - 16 = 128 > 0" />。かつ <InlineMath math="f_{xx}(-1, -1) = 12 > 0" />。<br />
                                したがって<strong>極小値</strong>をとる。値は <InlineMath math="f(-1, -1) = (-1)^4 + (-1)^4 - 4(-1)(-1) = 1 + 1 - 4 = -2" />。
                            </li>
                        </ul>
                        <p className="mt-2">
                            <strong>結論：</strong> 点 <InlineMath math="(1,1)" /> および点 <InlineMath math="(-1,-1)" /> で極小値 <InlineMath math="-2" /> をとる。極大値はない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        3変数関数 <InlineMath math="f(x,y,z) = x^2 + y^2 + 2z^2 - xy - yz - zx" /> について、原点 <InlineMath math="(0,0,0)" /> は臨界点である。原点におけるヘッセ行列 <InlineMath math="H" /> を求めよ。<br />
                        また、シルヴェスターの判定条件を用いて、関数 <InlineMath math="f" /> が原点で極小値をとるか判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、2階偏導関数を計算する。
                        </p>
                        <BlockMath math="f_x = 2x - y - z \implies f_{xx} = 2, \quad f_{xy} = -1, \quad f_{xz} = -1" />
                        <BlockMath math="f_y = 2y - x - z \implies f_{yy} = 2, \quad f_{yz} = -1" />
                        <BlockMath math="f_z = 4z - x - y \implies f_{zz} = 4" />
                        <p>
                            よって、ヘッセ行列 <InlineMath math="H" /> はすべての点で一定であり、次のようになる。
                        </p>
                        <BlockMath math="H = \begin{pmatrix} 2 & -1 & -1 \\ -1 & 2 & -1 \\ -1 & -1 & 4 \end{pmatrix}" />
                        <p>
                            シルヴェスターの判定条件を用いて、首座小行列式の符号を調べる。
                        </p>
                        <BlockMath math="D_1 = 2 > 0" />
                        <BlockMath math="D_2 = \begin{vmatrix} 2 & -1 \\ -1 & 2 \end{vmatrix} = 4 - 1 = 3 > 0" />
                        <BlockMath math="
                            \begin{aligned}
                            D_3 &= \det H \\
                            &= 2 \begin{vmatrix} 2 & -1 \\ -1 & 4 \end{vmatrix} - (-1) \begin{vmatrix} -1 & -1 \\ -1 & 4 \end{vmatrix} + (-1) \begin{vmatrix} -1 & 2 \\ -1 & -1 \end{vmatrix} \\
                            &= 2(8 - 1) + 1(-4 - 1) - 1(1 - (-2)) \\
                            &= 2(7) - 5 - 3 = 14 - 8 = 6 > 0
                            \end{aligned}
                        " />
                        <p>
                            すべての首座小行列式が正であるため、ヘッセ行列 <InlineMath math="H" /> は正定値である。
                        </p>
                        <p>
                            したがって、関数 <InlineMath math="f" /> は原点 <InlineMath math="(0,0,0)" /> で<strong>極小値</strong>をとる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        臨界点 <InlineMath math="\boldsymbol{a}" /> における関数 <InlineMath math="f" /> の2次テイラー近似式
                    </p>
                    <BlockMath math="f(\boldsymbol{a} + \boldsymbol{h}) \approx f(\boldsymbol{a}) + \frac{1}{2} \boldsymbol{h}^T H \boldsymbol{h}" />
                    <p>
                        を考える。<br />
                        ヘッセ行列 <InlineMath math="H" /> が正定値であるとき、なぜ関数が <InlineMath math="\boldsymbol{a}" /> で極小値をとると言えるのか、2次形式 <InlineMath math="Q(\boldsymbol{h}) = \boldsymbol{h}^T H \boldsymbol{h}" /> の性質を用いて直感的に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            臨界点 <InlineMath math="\boldsymbol{a}" /> では1階偏導関数がすべて <InlineMath math="0" />（<InlineMath math="\nabla f(\boldsymbol{a}) = \boldsymbol{0}" />）であるため、テイラー展開における1次の項は消滅し、周囲の関数の高低は2次の項 <InlineMath math="\frac{1}{2} \boldsymbol{h}^T H \boldsymbol{h}" /> の符号によって決まる。
                        </p>
                        <p>
                            ヘッセ行列 <InlineMath math="H" /> が正定値であるとは、<InlineMath math="\boldsymbol{h} \neq \boldsymbol{0}" /> である任意のベクトル <InlineMath math="\boldsymbol{h}" />（すなわち、どの方向への微小な移動）に対しても、2次形式 <InlineMath math="Q(\boldsymbol{h}) = \boldsymbol{h}^T H \boldsymbol{h} > 0" /> となることを意味する。
                        </p>
                        <p>
                            このため、<InlineMath math="\boldsymbol{a}" /> からどの方向に少し移動しても、近似式において <InlineMath math="f(\boldsymbol{a} + \boldsymbol{h})" /> は <InlineMath math="f(\boldsymbol{a})" /> よりも真に大きな値（正の値が足される）をとることになる。
                        </p>
                        <p>
                            つまり、点 <InlineMath math="\boldsymbol{a}" /> は周囲のすべての点よりも関数の値が小さく、幾何学的には「お椀の底」のような形状をしているため、関数は <InlineMath math="\boldsymbol{a}" /> で極小値をとるのである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
