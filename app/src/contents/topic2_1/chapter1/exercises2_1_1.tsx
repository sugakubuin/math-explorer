import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        ベクトル空間の公理（Definition 1.1-1）において、「零ベクトルの存在」とはどのような性質を指すか。式を用いて簡潔に答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-1 より、ある <InlineMath math="\boldsymbol{0} \in V" /> が存在して、すべてのベクトル <InlineMath math="\boldsymbol{u} \in V" /> に対して
                        </p>
                        <BlockMath math="\boldsymbol{u} + \boldsymbol{0} = \boldsymbol{u}" />
                        <p>
                            を満たすことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        Theorem 1.3-1 において、ベクトル空間 <InlineMath math="V" /> の部分集合 <InlineMath math="W" /> が <InlineMath math="V" /> の部分空間であるための3つの必要十分条件を答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.3-1 より、以下の3条件を満たすことである。
                        </p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>零ベクトルを含む（<InlineMath math="\boldsymbol{0} \in W" />）</li>
                            <li>和について閉じている（<InlineMath math="\boldsymbol{u}, \boldsymbol{v} \in W \implies \boldsymbol{u} + \boldsymbol{v} \in W" />）</li>
                            <li>スカラー倍について閉じている（<InlineMath math="\boldsymbol{u} \in W, c \in K \implies c\boldsymbol{u} \in W" />）</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        有限次元ベクトル空間 <InlineMath math="V" /> の部分空間 <InlineMath math="W_1, W_2" /> について、和空間の次元定理（Theorem 1.5-1）の公式を記せ。また、この和が直和 <InlineMath math="W_1 \oplus W_2" /> となる場合、この公式はどのように簡略化されるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            和空間の次元定理の公式は以下の通りである。
                        </p>
                        <BlockMath math="\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2)" />
                        <p>
                            また、和が直和であるとき、共通部分は零ベクトルのみからなるため <InlineMath math="\dim(W_1 \cap W_2) = 0" /> となる。したがって公式は次のように簡略化される。
                        </p>
                        <BlockMath math="\dim(W_1 \oplus W_2) = \dim W_1 + \dim W_2" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        次の集合が実数体 <InlineMath math="\mathbb{R}" /> 上のベクトル空間（部分空間）であるかどうかを判定し、その理由を述べよ。
                    </p>
                    <p className="mt-2">
                        (1) <InlineMath math="W_1 = \{ (x,y) \in \mathbb{R}^2 \mid y = 2x + 1 \}" />
                    </p>
                    <p className="mt-2">
                        (2) <InlineMath math="W_2 = \{ (x,y,z) \in \mathbb{R}^3 \mid x + y + z = 0 \}" />
                    </p>
                    <ExerciseSolution>
                        <p><strong>(1) について：</strong></p>
                        <p>
                            部分空間ではない。<br />
                            理由：零ベクトル <InlineMath math="(0,0)" /> について、<InlineMath math="0 = 2(0) + 1" /> は成り立たない。すなわち <InlineMath math="\boldsymbol{0} \notin W_1" /> であるため、部分空間の条件を満たさない。（原点を通らない直線は部分空間にならない）
                        </p>
                        <p className="mt-4"><strong>(2) について：</strong></p>
                        <p>
                            部分空間である。<br />
                            理由：
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><InlineMath math="0 + 0 + 0 = 0" /> より、<InlineMath math="\boldsymbol{0} = (0,0,0) \in W_2" />。</li>
                            <li><InlineMath math="\boldsymbol{u} = (x_1, y_1, z_1), \boldsymbol{v} = (x_2, y_2, z_2) \in W_2" /> とすると、<InlineMath math="x_1+y_1+z_1=0, x_2+y_2+z_2=0" />。<br />
                            和の成分の和は <InlineMath math="(x_1+x_2) + (y_1+y_2) + (z_1+z_2) = (x_1+y_1+z_1) + (x_2+y_2+z_2) = 0 + 0 = 0" /> となり、<InlineMath math="\boldsymbol{u} + \boldsymbol{v} \in W_2" />（和について閉じている）。</li>
                            <li>スカラー <InlineMath math="c" /> について、<InlineMath math="cx_1 + cy_1 + cz_1 = c(x_1+y_1+z_1) = c(0) = 0" /> となり、<InlineMath math="c\boldsymbol{u} \in W_2" />（スカラー倍について閉じている）。</li>
                        </ul>
                        <p>以上より3条件を満たすため、部分空間である。（原点を通る平面）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> のベクトル <InlineMath math="\boldsymbol{v}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}" /> と <InlineMath math="\boldsymbol{v}_2 = \begin{pmatrix} 3 \\ 1 \end{pmatrix}" /> について、ベクトル <InlineMath math="\boldsymbol{u} = \begin{pmatrix} 7 \\ 4 \end{pmatrix}" /> を <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2" /> の線形結合として表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\boldsymbol{u} = c_1 \boldsymbol{v}_1 + c_2 \boldsymbol{v}_2" /> とおく。
                        </p>
                        <BlockMath math="
                            \begin{pmatrix} 7 \\ 4 \end{pmatrix} = c_1 \begin{pmatrix} 1 \\ 2 \end{pmatrix} + c_2 \begin{pmatrix} 3 \\ 1 \end{pmatrix}
                        " />
                        <p>
                            成分ごとの連立方程式を立てる。
                        </p>
                        <BlockMath math="
                            \begin{cases}
                            c_1 + 3c_2 = 7 \quad \dots (1) \\
                            2c_1 + c_2 = 4 \quad \dots (2)
                            \end{cases}
                        " />
                        <p>
                            (1)より <InlineMath math="c_1 = 7 - 3c_2" />。これを(2)に代入する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            2(7 - 3c_2) + c_2 &= 4 \\
                            14 - 6c_2 + c_2 &= 4 \\
                            -5c_2 &= -10 \implies c_2 = 2
                            \end{aligned}
                        " />
                        <p>
                            これを(1)に代入して、<InlineMath math="c_1 = 7 - 3(2) = 1" />。
                        </p>
                        <p>
                            したがって、求める線形結合は
                        </p>
                        <BlockMath math="\boldsymbol{u} = 1\boldsymbol{v}_1 + 2\boldsymbol{v}_2 \quad (\text{または単に } \boldsymbol{v}_1 + 2\boldsymbol{v}_2)" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        変数 <InlineMath math="x" /> についての2次以下の多項式空間 <InlineMath math="P_2(x)" /> の部分集合 <InlineMath math="W" /> を、次のように定める。
                    </p>
                    <BlockMath math="W = \{ p(x) \in P_2(x) \mid p(1) = 0 \}" />
                    <p>
                        <InlineMath math="W" /> が <InlineMath math="P_2(x)" /> の部分空間であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.3-1 の3条件を確認する。
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>零ベクトルの包含：</strong> <InlineMath math="P_2(x)" /> の零ベクトルは定数関数 <InlineMath math="0(x) = 0" /> である。このとき <InlineMath math="0(1) = 0" /> となるので、零ベクトルは <InlineMath math="W" /> に含まれる。
                            </li>
                            <li>
                                <strong>和について閉じている：</strong> <InlineMath math="p(x), q(x) \in W" /> とする。すなわち <InlineMath math="p(1) = 0, q(1) = 0" />。
                                このとき、和の関数 <InlineMath math="(p+q)(x) = p(x) + q(x)" /> について <InlineMath math="x=1" /> を代入すると、
                                <InlineMath math="(p+q)(1) = p(1) + q(1) = 0 + 0 = 0" />。よって <InlineMath math="p(x)+q(x) \in W" /> である。
                            </li>
                            <li>
                                <strong>スカラー倍について閉じている：</strong> <InlineMath math="p(x) \in W" /> （<InlineMath math="p(1)=0" />）とスカラー <InlineMath math="c" /> について、
                                スカラー倍された関数 <InlineMath math="(cp)(x) = c \cdot p(x)" /> に <InlineMath math="x=1" /> を代入すると、
                                <InlineMath math="(cp)(1) = c \cdot p(1) = c \cdot 0 = 0" />。よって <InlineMath math="cp(x) \in W" /> である。
                            </li>
                        </ul>
                        <p>
                            以上より、<InlineMath math="W" /> は部分空間である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        <InlineMath math="V = \mathbb{R}^3" /> において、次の2つの部分空間 <InlineMath math="W_1, W_2" /> を考える。
                    </p>
                    <BlockMath math="W_1 = \{ (x,y,0) \mid x,y \in \mathbb{R} \} \quad (\text{xy平面})" />
                    <BlockMath math="W_2 = \{ (0,y,z) \mid y,z \in \mathbb{R} \} \quad (\text{yz平面})" />
                    <p>
                        (1) 共通部分 <InlineMath math="W_1 \cap W_2" /> を求め、その次元を答えよ。
                    </p>
                    <p>
                        (2) 和空間 <InlineMath math="W_1 + W_2" /> の次元を、次元定理を用いて求めよ。
                    </p>
                    <ExerciseSolution>
                        <p><strong>(1)</strong></p>
                        <p>
                            <InlineMath math="\boldsymbol{v} = (x,y,z) \in W_1 \cap W_2" /> とすると、<InlineMath math="\boldsymbol{v} \in W_1" /> より <InlineMath math="z = 0" /> であり、<InlineMath math="\boldsymbol{v} \in W_2" /> より <InlineMath math="x = 0" /> である。
                            したがって <InlineMath math="y" /> 成分だけが自由になり、
                        </p>
                        <BlockMath math="W_1 \cap W_2 = \{ (0,y,0) \mid y \in \mathbb{R} \}" />
                        <p>
                            これはy軸を表す1次元の部分空間である。よって <InlineMath math="\dim(W_1 \cap W_2) = 1" />。
                        </p>
                        <p className="mt-4"><strong>(2)</strong></p>
                        <p>
                            <InlineMath math="W_1" /> はxy平面なので <InlineMath math="\dim W_1 = 2" />。<InlineMath math="W_2" /> はyz平面なので <InlineMath math="\dim W_2 = 2" /> である。<br />
                            和空間の次元定理（Theorem 1.5-1）より、
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            \dim(W_1 + W_2) &= \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2) \\
                            &= 2 + 2 - 1 = 3
                            \end{aligned}
                        " />
                        <p>
                            （実際、和空間 <InlineMath math="W_1+W_2" /> は <InlineMath math="\mathbb{R}^3" /> 全体となる）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        ベクトル空間 <InlineMath math="V" /> の2つの部分空間 <InlineMath math="W_1, W_2" /> について、共通部分 <InlineMath math="W_1 \cap W_2" /> が部分空間になることを、部分空間の3条件（Theorem 1.3-1）を用いて証明せよ。（Proposition 1.5-1 の証明）
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 1.3-1 の3条件を満たすことを示す。
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>零ベクトルを含む：</strong> <InlineMath math="W_1" /> および <InlineMath math="W_2" /> はそれぞれ部分空間であるため、ともに零ベクトル <InlineMath math="\boldsymbol{0}" /> を含む。したがって <InlineMath math="\boldsymbol{0} \in W_1 \cap W_2" /> である。
                            </li>
                            <li>
                                <strong>和について閉じている：</strong> 任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in W_1 \cap W_2" /> をとる。定義より <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in W_1" /> かつ <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in W_2" /> である。
                                <InlineMath math="W_1" /> は部分空間なので <InlineMath math="\boldsymbol{x} + \boldsymbol{y} \in W_1" /> であり、同様に <InlineMath math="W_2" /> も部分空間なので <InlineMath math="\boldsymbol{x} + \boldsymbol{y} \in W_2" /> である。
                                両方に属するため、<InlineMath math="\boldsymbol{x} + \boldsymbol{y} \in W_1 \cap W_2" /> となる。
                            </li>
                            <li>
                                <strong>スカラー倍について閉じている：</strong> 任意の <InlineMath math="\boldsymbol{x} \in W_1 \cap W_2" /> と任意のスカラー <InlineMath math="c" /> をとる。
                                同様に <InlineMath math="\boldsymbol{x} \in W_1" /> かつ <InlineMath math="\boldsymbol{x} \in W_2" /> であり、それぞれ部分空間であるため <InlineMath math="c\boldsymbol{x} \in W_1" /> かつ <InlineMath math="c\boldsymbol{x} \in W_2" /> となる。
                                したがって <InlineMath math="c\boldsymbol{x} \in W_1 \cap W_2" /> である。
                            </li>
                        </ul>
                        <p>
                            以上3条件を満たすため、<InlineMath math="W_1 \cap W_2" /> は <InlineMath math="V" /> の部分空間である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        <InlineMath math="\mathbb{R}^3" /> の部分空間 <InlineMath math="W_1 = \{ (x, y, 0) \mid x, y \in \mathbb{R} \}" /> と <InlineMath math="W_2 = \{ (0, 0, z) \mid z \in \mathbb{R} \}" /> を考える。
                        このとき、和空間 <InlineMath math="W_1 + W_2" /> が直和 <InlineMath math="W_1 \oplus W_2" /> になることを、同値条件（Theorem 1.5-2 の条件3：共通部分が零ベクトルのみであること）を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="W_1 \cap W_2" /> を調べる。<br />
                            任意のベクトル <InlineMath math="\boldsymbol{v} \in W_1 \cap W_2" /> をとる。
                        </p>
                        <p>
                            <InlineMath math="\boldsymbol{v} \in W_1" /> より、<InlineMath math="\boldsymbol{v} = (x, y, 0)" /> と書ける。<br />
                            また、<InlineMath math="\boldsymbol{v} \in W_2" /> より、<InlineMath math="\boldsymbol{v} = (0, 0, z)" /> と書ける。
                        </p>
                        <p>
                            これらが同じベクトルを表すため、成分を比較すると
                        </p>
                        <BlockMath math="x = 0, \quad y = 0, \quad 0 = z" />
                        <p>
                            となる。したがって、<InlineMath math="\boldsymbol{v} = (0, 0, 0) = \boldsymbol{0}" /> のみである。
                        </p>
                        <p>
                            よって <InlineMath math="W_1 \cap W_2 = \{\boldsymbol{0}\}" /> が成り立つ。Theorem 1.5-2 より、共通部分が零ベクトルのみであることは和が直和であることと同値であるため、
                            <InlineMath math="W_1 + W_2 = W_1 \oplus W_2" /> となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
