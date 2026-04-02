import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_15_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="3" number={1}>
                    <p>2つの関手 <InlineMath math="F, G : \mathcal{C} \to \mathcal{D}" /> の間の自然変換 <InlineMath math="\eta : F \Rightarrow G" /> において、各対象 <InlineMath math="A \in \mathcal{C}" /> に割り当てられる射 <InlineMath math="\eta_A" /> のことを何と呼ぶか答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 3.1-1 より、これらを自然変換の<strong>成分（component）</strong>と呼ぶ。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="3" number={2}>
                    <p>自然変換 <InlineMath math="\eta : F \Rightarrow G" /> が満たすべき自然性条件（Naturality condition）を式で表せ。ただし、射を <InlineMath math="f : A \to B" /> とする。</p>
                    <ExerciseSolution>
                        <p>Definition 3.1-1 より、以下の可換図式に対応する式が成り立つ必要がある。</p>
                        <BlockMath math="G(f) \circ \eta_A = \eta_B \circ F(f)" />
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="3" number={3}>
                    <p>自然変換が「自然同型」であるための条件を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 3.1-2 より、そのすべての成分 <InlineMath math="\eta_A" /> が同型射であることである。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="3" number={4}>
                    <p>行列式 <InlineMath math="\det" /> が、関手 <InlineMath math="GL_n" /> から <InlineMath math="(-)^\times" /> への自然変換である（Example 3.2-1）とはどういうことか、「環準同型 <InlineMath math="f : R \to S" />」という言葉を用いて説明せよ。</p>
                    <ExerciseSolution>
                        <p>環 <InlineMath math="R" /> 上で行列式を計算してから、その結果を環準同型 <InlineMath math="f" /> で送ることと、最初に行列の各成分に <InlineMath math="f" /> を適用してから、環 <InlineMath math="S" /> 上で行列式を計算することが、常に一致するということである。</p>
                        <p>数式では <InlineMath math="f(\det_R(M)) = \det_S(f(M))" /> と表される。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="3" number={5}>
                    <p>ベクトル空間 <InlineMath math="V" /> から二重双対空間 <InlineMath math="V^{**}" /> への評価写像 <InlineMath math="\mathrm{ev}_V : v \mapsto (\phi \mapsto \phi(v))" /> が、基底の取り方に依存しない理由を述べよ。</p>
                    <ExerciseSolution>
                        <p>写像の定義（ベクトルに汎関数を代入する操作）において、基底の選択というプロセスが一切介入していないため。これは圏論的には恒等関手から二重双対関手への自然変換（Example 3.2-2）として表現される。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="3" number={6}>
                    <p>関手圏 <InlineMath math="[\mathcal{C}, \mathcal{D}]" />（Definition 3.3-1）における「射」とは何か答えよ。</p>
                    <ExerciseSolution>
                        <p>関手 <InlineMath math="F" /> から関手 <InlineMath math="G" /> へのすべての<strong>自然変換</strong>である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="3" number={7}>
                    <p>自然変換の垂直合成（Vertical Composition）<InlineMath math="(\mu \circ \eta)" /> の、対象 <InlineMath math="A" /> における成分の定義式を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 3.3-1 より、成分ごとの合成として定義される。</p>
                        <BlockMath math="(\mu \circ \eta)_A = \mu_A \circ \eta_A" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="3" number={8}>
                    <p>垂直合成 <InlineMath math="\mu \circ \eta" /> が再び自然変換の条件を満たすことを証明せよ。ただし、自然変換を <InlineMath math="\eta : F \Rightarrow G" />, <InlineMath math="\mu : G \Rightarrow H" /> とし、射を <InlineMath math="f : A \to B" /> とする。</p>
                    <ExerciseSolution>
                        <p>合成 <InlineMath math="\mu \circ \eta" /> が自然性条件を満たすことを示す。すなわち、<InlineMath math="H(f) \circ (\mu \circ \eta)_A = (\mu \circ \eta)_B \circ F(f)" /> を導く。</p>
                        <p>左辺を変形すると、</p>
                        <BlockMath math="\begin{aligned} H(f) \circ (\mu_A \circ \eta_A) &= (H(f) \circ \mu_A) \circ \eta_A \\ &= (\mu_B \circ G(f)) \circ \eta_A \quad (\because \mu \text{ は自然変換}) \\ &= \mu_B \circ (G(f) \circ \eta_A) \\ &= \mu_B \circ (\eta_B \circ F(f)) \quad (\because \eta \text{ は自然変換}) \\ &= (\mu_B \circ \eta_B) \circ F(f) \\ &= (\mu \circ \eta)_B \circ F(f) \end{aligned}" />
                        <p>となり、右辺に一致する。したがって <InlineMath math="\mu \circ \eta" /> は自然変換である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="3" number={9}>
                    <p>Proposition 3.2-1（評価写像の自然性）を証明せよ。すなわち、任意の線形写像 <InlineMath math="f : V \to W" /> に対して <InlineMath math="f^{**} \circ \mathrm{ev}_V = \mathrm{ev}_W \circ f" /> が成り立つことを示せ。</p>
                    <ExerciseSolution>
                        <p>任意の元 <InlineMath math="v \in V" /> と汎関数 <InlineMath math="\psi \in W^*" /> に対して、両辺が同じ結果を返すことを示す。</p>
                        <p>右辺：<InlineMath math="(\mathrm{ev}_W \circ f)(v)(\psi) = \mathrm{ev}_W(f(v))(\psi) = \psi(f(v))" /></p>
                        <p>左辺：二重双対写像 <InlineMath math="f^{**} = (f^*)^*" /> の定義より、<InlineMath math="f^{**}(\mathrm{ev}_V(v))(\psi) = \mathrm{ev}_V(v)(f^*(\psi))" /> である。</p>
                        <p>ここで双対写像の定義から <InlineMath math="f^*(\psi) = \psi \circ f" /> なので、</p>
                        <BlockMath math="\mathrm{ev}_V(v)(\psi \circ f) = (\psi \circ f)(v) = \psi(f(v))" />
                        <p>が得られる。両辺の値が一致するため、自然性が示された。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="3" number={10}>
                    <p>自然変換の水平合成（Definition 3.3-2）において、成分の2つの定義式が一致することを示せ。すなわち、関手 <InlineMath math="F, G : \mathcal{C} \to \mathcal{D}, H, K : \mathcal{D} \to \mathcal{E}" /> および自然変換 <InlineMath math="\eta : F \Rightarrow G, \mu : H \Rightarrow K" /> が与えられたとき、対象 <InlineMath math="A \in \mathcal{C}" /> について以下が成り立つことを証明せよ。</p>
                    <BlockMath math="\mu_{G(A)} \circ H(\eta_A) = K(\eta_A) \circ \mu_{F(A)}" />
                    <ExerciseSolution>
                        <p>この式は、<InlineMath math="\mathcal{D}" /> の射 <InlineMath math="\eta_A : F(A) \to G(A)" /> に関する、<InlineMath math="\mathcal{E}" /> の関手間の自然変換 <InlineMath math="\mu" /> の自然性条件そのものである。</p>
                        <p><InlineMath math="\mu" /> は <InlineMath math="H" /> から <InlineMath math="K" /> への自然変換なので、Definition 3.1-1 より、<InlineMath math="\mathcal{D}" /> の任意の射 <InlineMath math="f : X \to Y" /> に対して以下を満たす。</p>
                        <BlockMath math="K(f) \circ \mu_X = \mu_Y \circ H(f)" />
                        <p>ここで、<InlineMath math="f = \eta_A" /> （したがって <InlineMath math="X = F(A), Y = G(A)" />）と置くと、</p>
                        <BlockMath math="K(\eta_A) \circ \mu_{F(A)} = \mu_{G(A)} \circ H(\eta_A)" />
                        <p>が得られ、2つの定義式が等価であることが証明された。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
