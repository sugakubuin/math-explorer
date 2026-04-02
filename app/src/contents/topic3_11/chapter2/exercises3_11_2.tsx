import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_11_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        Definition 2.1-1 より、写像 <InlineMath math="f: V \times W \to U" /> が双線形写像であるための条件を簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            写像 <InlineMath math="f" /> が双線形写像であるとは、各々の変数（第1変数および第2変数）について独立して線形性を持つことである。すなわち、片方の変数を固定したとき、残りの変数に関して線形写像となる写像である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        ベクトル空間 <InlineMath math="V, W" /> に定義されるテンソル積空間 <InlineMath math="V \otimes W" />（Definition 2.2-1）は、
                        どのような写像を線形写像に変換する普遍性を持つ空間として定義されるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.2-1 より、テンソル積 <InlineMath math="V \otimes W" /> は、<InlineMath math="V \times W" /> から任意のベクトル空間 <InlineMath math="U" /> への「双線形写像」を、<InlineMath math="V \otimes W" /> から <InlineMath math="U" /> への「線形写像」へと一意的に分解して変換する普遍性を持つ空間として定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        次元がそれぞれ <InlineMath math="\dim V = 3" />, <InlineMath math="\dim W = 4" /> のベクトル空間のテンソル積 <InlineMath math="V \otimes W" /> の次元はいくつか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.3-1 より、テンソル積空間の次元は元の空間の次元の積となるため、
                            <BlockMath math="\dim(V \otimes W) = \dim V \cdot \dim W = 3 \times 4 = 12" />
                            である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> の標準基底を <InlineMath math="e_1, e_2" /> とする。
                        テンソル積空間 <InlineMath math="\mathbb{R}^2 \otimes \mathbb{R}^2" /> において、二つの純粋テンソル
                        <InlineMath math="T_1 = (2e_1 + e_2) \otimes (e_1 - e_2)" /> 
                        を基底 <InlineMath math="e_i \otimes e_j" /> の線形結合として展開せよ（Proposition 2.3-1, Theorem 2.3-1 による双線形性の活用）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            テンソル積 <InlineMath math="\otimes" /> は双線形性（Definition 2.3-2 の商の構造）を持つため、代数的に展開できる。
                        </p>
                        <BlockMath math="\begin{aligned} (2e_1 + e_2) \otimes (e_1 - e_2) &= 2e_1 \otimes (e_1 - e_2) + e_2 \otimes (e_1 - e_2) \\ &= 2(e_1 \otimes e_1) - 2(e_1 \otimes e_2) + 1(e_2 \otimes e_1) - 1(e_2 \otimes e_2) \end{aligned}" />
                        <p>
                            よって <InlineMath math="T_1 = 2 e_1 \otimes e_1 - 2 e_1 \otimes e_2 + e_2 \otimes e_1 - e_2 \otimes e_2" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        有限次元の内積空間 <InlineMath math="V" /> とその双対空間 <InlineMath math="V^*" /> について、テンソル <InlineMath math="T \in V^* \otimes V" /> が
                        <InlineMath math="T = e^1 \otimes e_1 + 3 e^2 \otimes e_2" /> と与えられている。
                        ここで <InlineMath math="e_1, e_2" /> は基底、<InlineMath math="e^1, e^2" /> は双対基底である。
                        Definition 2.4-2 を用いて、このテンソルの縮約 <InlineMath math="\mathrm{tr}(T)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.4-2 より、縮約の計算はペアリング <InlineMath math="\langle \phi, v \rangle = \phi(v)" /> を用いて線形に行われる（Example 2.4-1 参照）。
                        </p>
                        <BlockMath math="\begin{aligned} \mathrm{tr}(e^1 \otimes e_1 + 3 e^2 \otimes e_2) &= \mathrm{tr}(e^1 \otimes e_1) + 3\mathrm{tr}(e^2 \otimes e_2) \\ &= \langle e^1, e_1 \rangle + 3\langle e^2, e_2 \rangle \\ &= e^1(e_1) + 3e^2(e_2) \end{aligned}" />
                        <p>
                            双対基底の性質より <InlineMath math="e^i(e_i) = 1" /> であるため、
                            <BlockMath math="1 + 3(1) = 4" />
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        <InlineMath math="\mathbb{R}^3" /> に標準内積 <InlineMath math="g(v,w) = v^T w" /> が定義されている。<InlineMath math="v = (1, 2, 3)^T" /> のとき、
                        内積が導く同型写像 <InlineMath math="\phi_g: V \to V^*" />（Proposition 2.4-1）による <InlineMath math="v" /> の像 <InlineMath math="\phi_g(v)" /> を考える。
                        この線形形式による <InlineMath math="u = (-1, 0, 1)^T" /> の評価値 <InlineMath math="\phi_g(v)(u)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 2.4-1 の証明より、同型写像は <InlineMath math="\phi_g(v) = g(v, \cdot)" /> によって与えられる。
                        </p>
                        <p>
                            したがって、<InlineMath math="\phi_g(v)(u)" /> は <InlineMath math="g(v, u)" /> に等しい（Example 2.4-2 参照）。
                        </p>
                        <BlockMath math="\phi_g(v)(u) = (1)(-1) + (2)(0) + (3)(1) = -1 + 0 + 3 = 2" />
                        <p>
                            よって評価値は 2 である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        <InlineMath math="\mathbb{R}^2 \otimes \mathbb{R}^2" /> のベクトル空間において、成分の等しいテンソル
                        <InlineMath math="x \otimes (y+z)" /> と <InlineMath math="x \otimes y + x \otimes z" /> が同一の元であることを、
                        テンソル積空間の構成（Definition 2.3-2）から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.3-2 より、テンソル積空間 <InlineMath math="V \otimes W" /> は自由ベクトル空間 <InlineMath math="F(V \times W)" /> を
                            部分空間 <InlineMath math="R" /> で割った商空間として定義される。
                        </p>
                        <p>
                            剰余類をとる基底として、<InlineMath math="R" /> の生成元に
                            <InlineMath math="(v, w_1 + w_2) - (v, w_1) - (v, w_2)" />
                            が含まれている。
                        </p>
                        <p>
                            商空間においては <InlineMath math="R" /> の元は 0 に等しいため、これが <InlineMath math="0" /> と見なされ、
                            <BlockMath math="(x, y+z) - (x, y) - (x, z) \in R" />
                            であることから、同値類として <InlineMath math="x \otimes (y+z) = x \otimes y + x \otimes z" /> が成り立つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        テンソル積空間における商空間の構成（Definition 2.3-2）を用いて、任意のベクトル <InlineMath math="w \in W" /> に対し
                        <InlineMath math="0 \otimes w = 0" />
                        となることを証明せよ（ここで左辺の <InlineMath math="0" /> は <InlineMath math="V" /> の零ベクトル、右辺の <InlineMath math="0" /> は <InlineMath math="V \otimes W" /> の零元である）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            テンソル積空間の構成から、スカラー倍に関する性質 <InlineMath math="(\lambda v) \otimes w = \lambda(v \otimes w)" /> が成り立つ（Definition 2.3-2）。
                        </p>
                        <p>
                            <InlineMath math="V" /> の零ベクトルは任意のベクトル <InlineMath math="v \in V" /> とスカラー <InlineMath math="0" /> を用いて <InlineMath math="0_V = 0 \cdot v" /> と書ける。
                        </p>
                        <p>
                            したがって、
                            <BlockMath math="0_V \otimes w = (0 \cdot v) \otimes w = 0 \cdot (v \otimes w)" />
                            となる。一方で、任意のベクトル空間においてスカラーの <InlineMath math="0" /> を掛けたものは空間の零ベクトルに等しいため、<InlineMath math="0 \cdot (v \otimes w) = 0_{V \otimes W}" /> である。
                        </p>
                        <p>
                            よって <InlineMath math="0 \otimes w = 0" /> が示された（Example 2.3-1 も参照）。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        <InlineMath math="\mathbb{R}^2 \otimes \mathbb{R}^2" /> の元 <InlineMath math="T = e_1 \otimes e_2 + e_2 \otimes e_1" /> を考える。
                        このテンソルが純粋テンソル <InlineMath math="v \otimes w" /> の形に書けないことを証明せよ。
                        （ただし <InlineMath math="e_1, e_2" /> は一次独立とする）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            背理法による。<InlineMath math="T = v \otimes w" /> と書けたと仮定する。
                        </p>
                        <p>
                            <InlineMath math="v = a e_1 + b e_2" />, <InlineMath math="w = c e_1 + d e_2" /> とおいて展開すると、
                            <BlockMath math="v \otimes w = (ac)e_1 \otimes e_1 + (ad)e_1 \otimes e_2 + (bc)e_2 \otimes e_1 + (bd)e_2 \otimes e_2" />
                            となる。
                        </p>
                        <p>
                            これが <InlineMath math="T" /> と等しいため、各基底の係数を比較する（Theorem 2.3-1 の線形独立性）。
                        </p>
                        <BlockMath math="\begin{cases} ac = 0 \\ ad = 1 \\ bc = 1 \\ bd = 0 \end{cases}" />
                        <p>
                            第2式と第3式より、<InlineMath math="a, b, c, d" /> のいずれも 0 ではない。
                            しかし第1式は <InlineMath math="ac = 0" /> であり、これは <InlineMath math="a=0" /> または <InlineMath math="c=0" /> を意味する。
                            これは矛盾である（§2.3 備考 参照）。
                        </p>
                        <p>
                            したがって、<InlineMath math="T" /> は純粋テンソルの形では表せない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        有限次元の内積空間 <InlineMath math="V" /> において、非退化な内積 <InlineMath math="g" /> が引き起こす同型 <InlineMath math="\phi_g: V \to V^*" /> を考える（Proposition 2.4-1）。
                        任意の線形形式 <InlineMath math="\psi \in V^*" /> に対して、写像 <InlineMath math="v \mapsto \phi_g(v)" /> が全射であることを次元の定理を用いて直接証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 2.4-1 の証明より、<InlineMath math="\phi_g(v) = 0 \implies v = 0" /> が単射性を示している。
                        </p>
                        <p>
                            線形写像の次元の定理により、
                            <BlockMath math="\dim V = \dim(\ker \phi_g) + \dim(\mathrm{Im} \phi_g)" />
                            が成り立つ。
                        </p>
                        <p>
                            <InlineMath math="\phi_g" /> が単射であるため <InlineMath math="\ker \phi_g = \{0\}" /> であり、<InlineMath math="\dim(\ker \phi_g) = 0" />。
                            よって <InlineMath math="\dim(\mathrm{Im} \phi_g) = \dim V" /> となる。
                        </p>
                        <p>
                            一方、Theorem 1.1-1 で示したように有限次元空間では <InlineMath math="\dim V = \dim V^*" /> である。
                            したがって <InlineMath math="\dim(\mathrm{Im} \phi_g) = \dim V^*" /> となる。
                        </p>
                        <p>
                            <InlineMath math="\mathrm{Im} \phi_g" /> は <InlineMath math="V^*" /> の部分空間であり、全体と同じ次元を持つため <InlineMath math="\mathrm{Im} \phi_g = V^*" />。すなわち全射である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
