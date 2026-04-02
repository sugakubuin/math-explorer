import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        写像 <InlineMath math="f: V \to W" /> が「線形写像」であるための2つの条件（加法性と斉次性）を、式を用いて述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-1 より、以下の2条件を満たすことである。
                        </p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>加法性：</strong> 任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対し、<InlineMath math="f(\boldsymbol{x} + \boldsymbol{y}) = f(\boldsymbol{x}) + f(\boldsymbol{y})" /></li>
                            <li><strong>斉次性：</strong> 任意の <InlineMath math="\boldsymbol{x} \in V" /> と任意のスカラー <InlineMath math="c" /> に対し、<InlineMath math="f(c\boldsymbol{x}) = c f(\boldsymbol{x})" /></li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        線形写像 <InlineMath math="f: V \to W" /> の「核（<InlineMath math="\ker f" />）」の定義を述べよ。<br />
                        また、<InlineMath math="f" /> が単射であることは、核を用いてどのように判定できるか（Proposition 3.2-3）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>核の定義：</strong><br />
                            <InlineMath math="f" /> によって <InlineMath math="W" /> の零ベクトル <InlineMath math="\boldsymbol{0}_W" /> に移されるような <InlineMath math="V" /> の要素全体の集合。<br />
                            （<InlineMath math="\ker f = \{ \boldsymbol{v} \in V \mid f(\boldsymbol{v}) = \boldsymbol{0}_W \}" />）
                        </p>
                        <p className="mt-4">
                            <strong>単射の判定条件：</strong><br />
                            <InlineMath math="f" /> が単射であるための必要十分条件は、核が零ベクトルのみからなること（<InlineMath math="\ker f = \{\boldsymbol{0}_V\}" />）である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        有限次元ベクトル空間 <InlineMath math="V" /> から <InlineMath math="W" /> への線形写像 <InlineMath math="f" /> について、次元定理（核ー像定理）の等式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.3-1 より、以下の等式が成り立つ。
                        </p>
                        <BlockMath math="\dim V = \dim (\ker f) + \dim (\mathrm{Im}\, f)" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        写像 <InlineMath math="f: \mathbb{R}^2 \to \mathbb{R}^2" /> を <InlineMath math="f\left(\begin{pmatrix} x \\ y \end{pmatrix}\right) = \begin{pmatrix} x + y \\ x - 1 \end{pmatrix}" /> と定義する。<br />
                        この写像 <InlineMath math="f" /> は線形写像であるか。理由とともに判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            線形写像ではない。
                        </p>
                        <p>
                            <strong>理由：</strong><br />
                            線形写像であれば、Proposition 3.1-1 より零ベクトルは零ベクトルに移らなければならない（<InlineMath math="f(\boldsymbol{0}) = \boldsymbol{0}" />）。<br />
                            しかし、<InlineMath math="\boldsymbol{0} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" /> を代入すると、
                        </p>
                        <BlockMath math="f\left(\begin{pmatrix} 0 \\ 0 \end{pmatrix}\right) = \begin{pmatrix} 0 + 0 \\ 0 - 1 \end{pmatrix} = \begin{pmatrix} 0 \\ -1 \end{pmatrix} \neq \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
                        <p>
                            となり、原点が原点に移らない。したがって線形写像ではない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        線形写像 <InlineMath math="f: \mathbb{R}^3 \to \mathbb{R}^2" /> が行列 <InlineMath math="A = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 4 & -2 \end{pmatrix}" /> を用いて <InlineMath math="f(\boldsymbol{x}) = A\boldsymbol{x}" /> と表されている。
                    </p>
                    <p className="mt-2">(1) この写像の核 <InlineMath math="\ker f" /> の次元（退化次数）を求めよ。</p>
                    <p className="mt-2">(2) 次元定理を用いて、像 <InlineMath math="\mathrm{Im}\, f" /> の次元（階数）を求めよ。</p>
                    <ExerciseSolution>
                        <p><strong>(1)</strong></p>
                        <p>
                            <InlineMath math="\ker f" /> は <InlineMath math="A\boldsymbol{x} = \boldsymbol{0}" /> の解空間である。<br />
                            行列 <InlineMath math="A" /> を行基本変形する。2行目から1行目の2倍を引くと、
                        </p>
                        <BlockMath math="\begin{pmatrix} 1 & 2 & -1 \\ 0 & 0 & 0 \end{pmatrix}" />
                        <p>
                            方程式は <InlineMath math="x_1 + 2x_2 - x_3 = 0" /> のみとなる。自由変数は <InlineMath math="x_2" /> と <InlineMath math="x_3" /> の2つである。<br />
                            したがって、解空間の次元（<InlineMath math="\ker f" /> の次元）は <strong>2</strong> である。
                        </p>
                        <p className="mt-4"><strong>(2)</strong></p>
                        <p>
                            写像の定義域は <InlineMath math="V = \mathbb{R}^3" /> なので <InlineMath math="\dim V = 3" />。<br />
                            次元定理 <InlineMath math="\dim V = \dim (\ker f) + \dim (\mathrm{Im}\, f)" /> に代入する。
                        </p>
                        <BlockMath math="3 = 2 + \dim (\mathrm{Im}\, f) \implies \dim (\mathrm{Im}\, f) = 1" />
                        <p>
                            よって、像の次元は <strong>1</strong> である。（行列のランクに一致する）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        2次元ベクトル空間 <InlineMath math="V" /> と <InlineMath math="W" /> のそれぞれの基底 <InlineMath math="B_V, B_W" /> に関する線形写像 <InlineMath math="f: V \to W" /> の表現行列が <InlineMath math="A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}" /> であるとする。
                    </p>
                    <p>
                        基底 <InlineMath math="B_V" /> における座標ベクトルが <InlineMath math="[\boldsymbol{x}]_{B_V} = \begin{pmatrix} 4 \\ 2 \end{pmatrix}" /> であるベクトル <InlineMath math="\boldsymbol{x}" /> を <InlineMath math="f" /> で写したとき、その行き先 <InlineMath math="f(\boldsymbol{x})" /> の基底 <InlineMath math="B_W" /> における座標ベクトル <InlineMath math="[f(\boldsymbol{x})]_{B_W}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Remark (表現行列の意味) より、座標ベクトルに表現行列を左から掛けることで、写像先の座標ベクトルが得られる。
                        </p>
                        <BlockMath math="[f(\boldsymbol{x})]_{B_W} = A [\boldsymbol{x}]_{B_V}" />
                        <p>
                            これを計算する。
                        </p>
                        <BlockMath math="\begin{aligned}
                            [f(\boldsymbol{x})]_{B_W} &= \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} 4 \\ 2 \end{pmatrix} \\
                            &= \begin{pmatrix} 2(4) + (-1)(2) \\ 1(4) + 3(2) \end{pmatrix} \\
                            &= \begin{pmatrix} 8 - 2 \\ 4 + 6 \end{pmatrix} \\
                            &= \begin{pmatrix} 6 \\ 10 \end{pmatrix}
                        \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        線形写像 <InlineMath math="f: U \to V" /> の表現行列が <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}" />、<InlineMath math="g: V \to W" /> の表現行列が <InlineMath math="B = \begin{pmatrix} 1 & 0 & -1 \\ 2 & 1 & 0 \end{pmatrix}" /> である。
                    </p>
                    <p>
                        このとき、合成写像 <InlineMath math="g \circ f: U \to W" /> の表現行列を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 3.4-1 より、合成写像 <InlineMath math="g \circ f" /> の表現行列は、それぞれの表現行列の積 <InlineMath math="BA" /> となる。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            BA &= \begin{pmatrix} 1 & 0 & -1 \\ 2 & 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 1 \end{pmatrix} \\
                            &= \begin{pmatrix} 1(1)+0(0)+(-1)(1) & 1(2)+0(1)+(-1)(1) \\ 2(1)+1(0)+0(1) & 2(2)+1(1)+0(1) \end{pmatrix} \\
                            &= \begin{pmatrix} 1 - 1 & 2 - 1 \\ 2 + 0 & 4 + 1 \end{pmatrix} \\
                            &= \begin{pmatrix} 0 & 1 \\ 2 & 5 \end{pmatrix}
                            \end{aligned}
                        " />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        線形写像 <InlineMath math="f: V \to W" /> を考える。<InlineMath math="V" /> の任意の部分空間 <InlineMath math="U" /> に対し、その像 <InlineMath math="f(U) = \{ f(\boldsymbol{u}) \mid \boldsymbol{u} \in U \}" /> が <InlineMath math="W" /> の部分空間となることを証明せよ。（Proposition 3.2-2 の一般化）
                    </p>
                    <ExerciseSolution>
                        <p>
                            部分空間の3条件を満たすことを確認する。
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>零ベクトルを含む：</strong> <InlineMath math="U" /> は部分空間なので <InlineMath math="\boldsymbol{0}_V \in U" /> である。線形写像の性質より <InlineMath math="f(\boldsymbol{0}_V) = \boldsymbol{0}_W" /> なので、<InlineMath math="\boldsymbol{0}_W \in f(U)" /> である。
                            </li>
                            <li>
                                <strong>和について閉じている：</strong> 任意の <InlineMath math="\boldsymbol{w}_1, \boldsymbol{w}_2 \in f(U)" /> をとる。定義より <InlineMath math="\boldsymbol{w}_1 = f(\boldsymbol{u}_1), \boldsymbol{w}_2 = f(\boldsymbol{u}_2)" /> となる <InlineMath math="\boldsymbol{u}_1, \boldsymbol{u}_2 \in U" /> が存在する。<br />
                                <InlineMath math="\boldsymbol{w}_1 + \boldsymbol{w}_2 = f(\boldsymbol{u}_1) + f(\boldsymbol{u}_2) = f(\boldsymbol{u}_1 + \boldsymbol{u}_2)" /> （加法性）。<br />
                                <InlineMath math="U" /> は和について閉じているため <InlineMath math="\boldsymbol{u}_1 + \boldsymbol{u}_2 \in U" /> であり、よって <InlineMath math="\boldsymbol{w}_1 + \boldsymbol{w}_2 \in f(U)" /> である。
                            </li>
                            <li>
                                <strong>スカラー倍について閉じている：</strong> 任意の <InlineMath math="\boldsymbol{w} \in f(U)" /> とスカラー <InlineMath math="c" /> をとる。<InlineMath math="\boldsymbol{w} = f(\boldsymbol{u})" /> （<InlineMath math="\boldsymbol{u} \in U" />）とおける。<br />
                                <InlineMath math="c\boldsymbol{w} = cf(\boldsymbol{u}) = f(c\boldsymbol{u})" /> （斉次性）。<br />
                                <InlineMath math="U" /> はスカラー倍について閉じているため <InlineMath math="c\boldsymbol{u} \in U" /> であり、よって <InlineMath math="c\boldsymbol{w} \in f(U)" /> である。
                            </li>
                        </ul>
                        <p>
                            以上より、<InlineMath math="f(U)" /> は <InlineMath math="W" /> の部分空間である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        有限次元ベクトル空間 <InlineMath math="V, W" /> が <InlineMath math="\dim V = \dim W" /> を満たすとする。
                        次元定理を用いて、「線形写像 <InlineMath math="f: V \to W" /> が単射ならば全射である」ことを証明せよ。（Corollary 3.3-1 の一部）
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f" /> が単射であると仮定する。Proposition 3.2-3 より、<InlineMath math="f" /> が単射であることは <InlineMath math="\ker f = \{\boldsymbol{0}_V\}" /> であることと同値である。
                            したがって、核の次元は <InlineMath math="\dim (\ker f) = 0" /> である。
                        </p>
                        <p>
                            次元定理 <InlineMath math="\dim V = \dim (\ker f) + \dim (\mathrm{Im}\, f)" /> に代入すると、
                        </p>
                        <BlockMath math="\dim V = 0 + \dim (\mathrm{Im}\, f) \implies \dim (\mathrm{Im}\, f) = \dim V" />
                        <p>
                            仮定より <InlineMath math="\dim V = \dim W" /> であるため、<InlineMath math="\dim (\mathrm{Im}\, f) = \dim W" /> となる。
                        </p>
                        <p>
                            像 <InlineMath math="\mathrm{Im}\, f" /> は <InlineMath math="W" /> の部分空間であり、その次元が <InlineMath math="W" /> 全体の次元と等しいため、Proposition 2.4-1(2) より <InlineMath math="\mathrm{Im}\, f = W" /> となる。
                        </p>
                        <p>
                            像が値域全体に一致することは、<InlineMath math="f" /> が全射であることの定義そのものである。ゆえに示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> 上の線形変換 <InlineMath math="f" /> について、標準基底 <InlineMath math="E = \{\boldsymbol{e}_1, \boldsymbol{e}_2\}" /> に関する表現行列が <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 2 \end{pmatrix}" /> であるとする。
                    </p>
                    <p>
                        新しい基底を <InlineMath math="E' = \{\boldsymbol{u}_1, \boldsymbol{u}_2\}" /> （ただし <InlineMath math="\boldsymbol{u}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \boldsymbol{u}_2 = \begin{pmatrix} -2 \\ 3 \end{pmatrix}" />）とする。
                    </p>
                    <p>
                        Theorem 3.5-1 に従い、基底変換行列 <InlineMath math="P" /> を求め、新しい基底 <InlineMath math="E'" /> に関する <InlineMath math="f" /> の表現行列 <InlineMath math="A' = P^{-1} A P" /> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            新しい基底ベクトル <InlineMath math="\boldsymbol{u}_1, \boldsymbol{u}_2" /> は標準基底を用いてそのまま成分として表されるため、基底変換行列 <InlineMath math="P" /> はこれらを並べた行列となる。
                        </p>
                        <BlockMath math="P = \begin{pmatrix} 1 & -2 \\ 1 & 3 \end{pmatrix}" />
                        <p>
                            次に、<InlineMath math="P" /> の逆行列 <InlineMath math="P^{-1}" /> を求める。<InlineMath math="\det(P) = 1(3) - (-2)(1) = 5" /> より、
                        </p>
                        <BlockMath math="P^{-1} = \frac{1}{5} \begin{pmatrix} 3 & 2 \\ -1 & 1 \end{pmatrix}" />
                        <p>
                            公式 <InlineMath math="A' = P^{-1} A P" /> に従って計算する。先に <InlineMath math="AP" /> を計算する。
                        </p>
                        <BlockMath math="\begin{aligned}
                            AP &= \begin{pmatrix} 1 & 2 \\ 3 & 2 \end{pmatrix} \begin{pmatrix} 1 & -2 \\ 1 & 3 \end{pmatrix} \\
                            &= \begin{pmatrix} 1(1)+2(1) & 1(-2)+2(3) \\ 3(1)+2(1) & 3(-2)+2(3) \end{pmatrix} \\
                            &= \begin{pmatrix} 3 & 4 \\ 5 & 0 \end{pmatrix}
                        \end{aligned}" />
                        <p>
                            次に左から <InlineMath math="P^{-1}" /> を掛ける。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            A' &= P^{-1} (AP) = \frac{1}{5} \begin{pmatrix} 3 & 2 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} 3 & 4 \\ 5 & 0 \end{pmatrix} \\
                            &= \frac{1}{5} \begin{pmatrix} 3(3)+2(5) & 3(4)+2(0) \\ -1(3)+1(5) & -1(4)+1(0) \end{pmatrix} \\
                            &= \frac{1}{5} \begin{pmatrix} 19 & 12 \\ 2 & -4 \end{pmatrix} \\
                            &= \begin{pmatrix} 19/5 & 12/5 \\ 2/5 & -4/5 \end{pmatrix}
                            \end{aligned}
                        " />
                        <p>
                            よって、新しい基底での表現行列は <InlineMath math="A' = \begin{pmatrix} 19/5 & 12/5 \\ 2/5 & -4/5 \end{pmatrix}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
