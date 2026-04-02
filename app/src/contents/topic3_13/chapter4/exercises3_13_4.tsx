import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_13_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        正則曲面 <InlineMath math="\mathbf{x}(u, v)" /> において、第二基本形式（second fundamental form）の係数 <InlineMath math="e, f, g" /> の、2階偏微分ベクトルと単位法ベクトル <InlineMath math="\mathbf{N}" /> を用いた定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.1-1 より、第二基本形式の係数 <InlineMath math="e, f, g" /> は次のように定義される。
                        </p>
                        <BlockMath math="e = \mathbf{x}_{uu} \cdot \mathbf{N}" />
                        <BlockMath math="f = \mathbf{x}_{uv} \cdot \mathbf{N} = \mathbf{x}_{vu} \cdot \mathbf{N}" />
                        <BlockMath math="g = \mathbf{x}_{vv} \cdot \mathbf{N}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        主曲率 <InlineMath math="\kappa_1, \kappa_2" /> を用いたガウス曲率 <InlineMath math="K" /> および平均曲率 <InlineMath math="H" /> の定義式を記述せよ。また、これらを第一・第二基本形式の係数（<InlineMath math="E, F, G, e, f, g" />）のみを用いて表す公式を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.3-1 より、定義式は以下の通りである。
                        </p>
                        <BlockMath math="K = \kappa_1 \kappa_2, \quad H = \frac{\kappa_1 + \kappa_2}{2}" />
                        <p>
                            基本形式の係数を用いた公式は次のように与えられる。
                        </p>
                        <BlockMath math="K = \frac{eg - f^2}{EG - F^2}, \quad H = \frac{eG - 2fF + gE}{2(EG - F^2)}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        主曲率 <InlineMath math="\kappa_1, \kappa_2" /> と、それに対応する直交する主方向をもつ点において、一方の主方向から角度 <InlineMath math="\theta" /> だけ傾いた方向の法曲率 <InlineMath math="\kappa_n(\theta)" /> を求める「オイラーの公式」を記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.4-1 より、オイラーの公式は次のように表される。
                        </p>
                        <BlockMath math="\kappa_n(\theta) = \kappa_1 \cos^2\theta + \kappa_2 \sin^2\theta" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        単位法ベクトル <InlineMath math="\mathbf{N}" /> の微分を用いた第二基本形式の係数の別表現（Proposition 4.1-1: <InlineMath math="e = -\mathbf{x}_u \cdot \mathbf{N}_u" /> 等）が成り立つ理由を、積の微分公式を用いて簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            接ベクトル <InlineMath math="\mathbf{x}_u" /> と単位法ベクトル <InlineMath math="\mathbf{N}" /> は常に直交するため、内積は <InlineMath math="\mathbf{x}_u \cdot \mathbf{N} = 0" /> である。
                            この両辺を <InlineMath math="u" /> で微分すると、積の微分公式より
                        </p>
                        <BlockMath math="\frac{\partial}{\partial u}(\mathbf{x}_u \cdot \mathbf{N}) = \mathbf{x}_{uu} \cdot \mathbf{N} + \mathbf{x}_u \cdot \mathbf{N}_u = 0" />
                        <p>
                            となる。ここで <InlineMath math="e = \mathbf{x}_{uu} \cdot \mathbf{N}" /> であるから、<InlineMath math="e + \mathbf{x}_u \cdot \mathbf{N}_u = 0" /> より
                        </p>
                        <BlockMath math="e = -\mathbf{x}_u \cdot \mathbf{N}_u" />
                        <p>
                            が得られる。<InlineMath math="f, g" /> についても同様である（§4.1 参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        半径 <InlineMath math="r" /> の球面 <InlineMath math="S^2(r)" /> の主曲率およびガウス曲率、平均曲率をそれぞれ求めよ。ただし、法ベクトルは内向き（曲率が正となる向き）にとるものとする。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 4.2-1 および Example 4.3-1 より、半径 <InlineMath math="r" /> の球面ではすべての方向に関して主曲率は一定であり、
                        </p>
                        <BlockMath math="\kappa_1 = \kappa_2 = \frac{1}{r}" />
                        <p>
                            となる。したがって、
                        </p>
                        <BlockMath math="\begin{aligned} \text{ガウス曲率 } K &= \kappa_1 \kappa_2 = \frac{1}{r} \cdot \frac{1}{r} = \frac{1}{r^2} \\ \text{平均曲率 } H &= \frac{\kappa_1 + \kappa_2}{2} = \frac{1/r + 1/r}{2} = \frac{1}{r} \end{aligned}" />
                        <p>
                            を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        半径 <InlineMath math="R" /> の円柱面上の点において、主方向（周方向と軸方向）のひとつから 60 度（<InlineMath math="\pi/3" />）傾いた方向の法曲率 <InlineMath math="\kappa_n" /> を求めよ。ただし、円柱の主曲率は周方向で <InlineMath math="1/R" />、軸方向で <InlineMath math="0" /> とする。
                    </p>
                    <ExerciseSolution>
                        <p>
                            主曲率を <InlineMath math="\kappa_1 = 1/R, \kappa_2 = 0" /> とし、角度 <InlineMath math="\theta = \pi/3" /> をオイラーの公式（Theorem 4.4-1）に代入する。
                        </p>
                        <BlockMath math="\begin{aligned} \kappa_n &= \kappa_1 \cos^2\left(\frac{\pi}{3}\right) + \kappa_2 \sin^2\left(\frac{\pi}{3}\right) \\ &= \frac{1}{R} \cdot \left(\frac{1}{2}\right)^2 + 0 \cdot \left(\frac{\sqrt{3}}{2}\right)^2 \\ &= \frac{1}{4R} \end{aligned}" />
                        <p>
                            したがって、法曲率は <InlineMath math="1/(4R)" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        ある曲面の点において、ガウス曲率が <InlineMath math="K < 0" /> であるとする。この点における曲面の形状（局所的な形）はどのようになっているか。また、主曲率の符号について何が言えるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            §4.3 備考「ガウス曲率の符号と曲面の局所的形状」より、ガウス曲率が負（双曲点）である場合、曲面は<strong>鞍（ポテトチップス）のような形状</strong>をしており、接平面と突き抜けて交差する。
                            主曲率に関しては、積 <InlineMath math="K = \kappa_1 \kappa_2 < 0" /> であることから、2つの主曲率は<strong>互いに異符号</strong>（一方が正で他方が負）であることがわかる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        形状作用素 <InlineMath math="S_p(v) = -d\mathbf{N}_p(v)" /> は、第一基本形式の内積に関して自己共役（self-adjoint）な線形写像であること、すなわち任意の接ベクトル <InlineMath math="v, w" /> に対して <InlineMath math="\langle S_p(v), w \rangle = \langle v, S_p(w) \rangle" /> が成り立つことを、基底ベクトルに対する性質を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            線形性より、基底ベクトル <InlineMath math="\mathbf{x}_u, \mathbf{x}_v" /> に対して等式が成り立つことを示せば十分である。
                            まず、定義より <InlineMath math="S_p(\mathbf{x}_u) = -\mathbf{N}_u, S_p(\mathbf{x}_v) = -\mathbf{N}_v" /> である。
                            左辺を計算すると、Proposition 4.1-1 の別表現より
                        </p>
                        <BlockMath math="\langle S_p(\mathbf{x}_u), \mathbf{x}_v \rangle = \langle -\mathbf{N}_u, \mathbf{x}_v \rangle = -\mathbf{N}_u \cdot \mathbf{x}_v = f" />
                        <p>
                            となる。一方、右辺を計算すると
                        </p>
                        <BlockMath math="\langle \mathbf{x}_u, S_p(\mathbf{x}_v) \rangle = \langle \mathbf{x}_u, -\mathbf{N}_v \rangle = -\mathbf{x}_u \cdot \mathbf{N}_v = f" />
                        <p>
                            を得る。ここで <InlineMath math="f = \mathbf{x}_{uv} \cdot \mathbf{N} = \mathbf{x}_{vu} \cdot \mathbf{N}" /> は対称であるため、両辺は一致する。
                            同様に、自己の内積（<InlineMath math="v=w" /> の場合）についても対称性が成り立つ。
                            以上より、形状作用素は自己共役であることが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        すべての点において平均曲率がゼロ（<InlineMath math="H \equiv 0" />）であるような曲面を極小曲面という。極小曲面上の任意の点において、ガウス曲率 <InlineMath math="K" /> が常に <InlineMath math="K \leq 0" /> を満たすことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            平均曲率の定義（Definition 4.3-1）より、主曲率 <InlineMath math="\kappa_1, \kappa_2" /> を用いて
                        </p>
                        <BlockMath math="H = \frac{\kappa_1 + \kappa_2}{2} = 0" />
                        <p>
                            が成り立つ。したがって、主曲率の間には常に <InlineMath math="\kappa_2 = -\kappa_1" /> という関係がある。
                            ガウス曲率 <InlineMath math="K" /> は主曲率の積であるから、
                        </p>
                        <BlockMath math="K = \kappa_1 \kappa_2 = \kappa_1 (-\kappa_1) = -\kappa_1^2" />
                        <p>
                            実数の2乗は常に 0 以上であるため、<InlineMath math="\kappa_1^2 \geq 0" /> より
                        </p>
                        <BlockMath math="K = -\kappa_1^2 \leq 0" />
                        <p>
                            となる。したがって、極小曲面上のガウス曲率は至る所 0 以下であることが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        曲面上の点 <InlineMath math="p" /> において、法曲率 <InlineMath math="\kappa_n(\theta)" /> がすべての方向 <InlineMath math="\theta" /> について一定の値 <InlineMath math="c" /> をとるならば、その点は臍点（固有値が重解の点）であり、2つの主曲率はともに <InlineMath math="\kappa_1 = \kappa_2 = c" /> であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            オイラーの公式（Theorem 4.4-1）より、法曲率は次のように表される。
                        </p>
                        <BlockMath math="\kappa_n(\theta) = \kappa_1 \cos^2\theta + \kappa_2 \sin^2\theta" />
                        <p>
                            仮定より、すべての <InlineMath math="\theta" /> について <InlineMath math="\kappa_n(\theta) = c" /> であるから、特に <InlineMath math="\theta = 0" /> と <InlineMath math="\theta = \pi/2" /> を代入すると
                        </p>
                        <BlockMath math="\begin{aligned} \kappa_n(0) &= \kappa_1 (1)^2 + \kappa_2 (0)^2 = \kappa_1 = c \\ \kappa_n(\pi/2) &= \kappa_1 (0)^2 + \kappa_2 (1)^2 = \kappa_2 = c \end{aligned}" />
                        <p>
                            となる。したがって主曲率は一致し、<InlineMath math="\kappa_1 = \kappa_2 = c" /> である。
                            このときオイラーの公式は
                        </p>
                        <BlockMath math="\kappa_n(\theta) = c \cos^2\theta + c \sin^2\theta = c(\cos^2\theta + \sin^2\theta) = c" />
                        <p>
                            となり、確かに任意の方向で一定値をとることが確認できる。
                            2つの主曲率が等しい点は臍点の定義（Example 4.2-1 参照）そのものである。
                            よって題意は示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
