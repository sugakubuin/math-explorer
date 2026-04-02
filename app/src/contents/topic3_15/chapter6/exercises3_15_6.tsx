import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_15_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="6" number={1}>
                    <p>関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> が関手 <InlineMath math="G : \mathcal{D} \to \mathcal{C}" /> の左随伴である（<InlineMath math="F \dashv G" />）ことの、hom 集合を用いた定義を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 6.1-1 より、任意の対象 <InlineMath math="A \in \mathcal{C}" /> と <InlineMath math="B \in \mathcal{D}" /> 間に以下の自然な全単射が存在することである。</p>
                        <BlockMath math="\mathrm{Hom}_\mathcal{D}(F(A), B) \cong \mathrm{Hom}_\mathcal{C}(A, G(B))" />
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="6" number={2}>
                    <p>随伴 <InlineMath math="F \dashv G" /> における「単位（Unit）」 <InlineMath math="\eta" /> と 「余単位（Counit）」 <InlineMath math="\varepsilon" /> のそれぞれの定義域と値域（自然変換としての型）を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 6.1-2 より以下の通りである。</p>
                        <ul className="list-disc list-inside">
                            <li>単位： <InlineMath math="\eta : \mathrm{Id}_\mathcal{C} \Rightarrow G \circ F" /></li>
                            <li>余単位： <InlineMath math="\varepsilon : F \circ G \Rightarrow \mathrm{Id}_\mathcal{D}" /></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="6" number={3}>
                    <p>随伴の単位 <InlineMath math="\eta" /> と余単位 <InlineMath math="\varepsilon" /> が満たすべき「三角恒等式（Triangle Identities）」を2つ記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 6.1-2 より、以下の合成が恒等自然変換となる必要がある。</p>
                        <BlockMath math="(\varepsilon F) \circ (F\eta) = \mathrm{id}_F \quad \text{および} \quad (G\varepsilon) \circ (\eta G) = \mathrm{id}_G" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="6" number={4}>
                    <p>自由群随伴 <InlineMath math="F \dashv U" /> の単位 <InlineMath math="\eta_S : S \to U(F(S))" />（Example 6.1-2）が、集合論的にはどのような写像であるか説明せよ。</p>
                    <ExerciseSolution>
                        <p>集合 <InlineMath math="S" /> の各要素を、その要素そのものを生成元（長さ1の単語）とする自由群の対象に埋め込む包含写像としての役割を持つ写像である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="6" number={5}>
                    <p>集合の圏における随伴 <InlineMath math="(- \times A) \dashv (-)^A" />（Example 6.2-2）が、プログラミングなどの文脈で「カリー化（Currying）」と呼ばれる理由を述べよ。</p>
                    <ExerciseSolution>
                        <p>2変数の関数 <InlineMath math="X \times A \to Y" /> を、引数 <InlineMath math="X" /> を受け取ってから「引数 <InlineMath math="A" /> を受け取って <InlineMath math="Y" /> を返す関数」を返す操作（高階関数）に一対一で変換することと同義であるため。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="6" number={6}>
                    <p>自由関手（左随伴）と忘却関手（右随伴）のうち、直積（極限）を必ず保存するのはどちらか答えよ。またその具体例を一つ述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 5.4-1 (RAPL) より、右随伴である<strong>忘却関手</strong>が極限を保存する。</p>
                        <p>具体例として、群の直積 <InlineMath math="G \times H" /> の台集合をとる操作は、各群の台集合をとってから集合の直積をとる操作と一致する（ <InlineMath math="U(G \times H) \cong U(G) \times U(H)" /> ）。一方で自由群の直和は非交和（台集合の余積）とは一致しない。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="6" number={7}>
                    <p>ある関手が左随伴を持てば、それは同型を除いて一一に定まる理由を簡潔に述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 6.3-1 より、随伴の構成要素である hom 集合の全単射が米田埋め込みと同型（表現可能関手の同型）を与えるため、米田の補題（対象の一意性）によって対象としての随伴関手が一意に決まるからである。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="6" number={8}>
                    <p>Theorem 6.3-1（随伴の一意性）を、米田の補題を用いて証明せよ。すなわち、関手 <InlineMath math="F" /> の右随伴が <InlineMath math="G" /> と <InlineMath math="G'" /> の 2 つ存在すれば、<InlineMath math="G \cong G'" /> であることを示せ。</p>
                    <ExerciseSolution>
                        <p>任意の <InlineMath math="A \in \mathcal{C}, B \in \mathcal{D}" /> に対し、随伴の定義より以下の全単射が <InlineMath math="A" /> について自然に成り立つ。</p>
                        <BlockMath math="\mathrm{Hom}_\mathcal{C}(A, G(B)) \cong \mathrm{Hom}_\mathcal{D}(F(A), B) \cong \mathrm{Hom}_\mathcal{C}(A, G'(B))" />
                        <p>これをまとめると、自然同型 <InlineMath math="\alpha_B : \mathrm{Hom}_\mathcal{C}(-, G(B)) \cong \mathrm{Hom}_\mathcal{C}(-, G'(B))" /> が得られる。</p>
                        <p>米田埋め込み <InlineMath math="\mathcal{Y} : \mathcal{C} \to [\mathcal{C}^{op}, \mathbf{Set}]" /> は充満忠実であり、したがって「同型を反映する（reflects isomorphisms）」。</p>
                        <p>すなわち <InlineMath math="\mathcal{Y}(G(B)) \cong \mathcal{Y}(G'(B))" /> であれば <InlineMath math="G(B) \cong G'(B)" /> である。この同型は <InlineMath math="B" /> についても自然であるため、関手として <InlineMath math="G \cong G'" /> である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="6" number={9}>
                    <p>随伴 <InlineMath math="(F, G, \Phi)" /> において、全単射 <InlineMath math="\Phi_{A,B} : \mathrm{Hom}(F(A), B) \to \mathrm{Hom}(A, G(B))" /> から単位の成分 <InlineMath math="\eta_A = \Phi_{A,F(A)}(\mathrm{id}_{F(A)})" /> を定義したとき、任意の射 <InlineMath math="f : F(A) \to B" /> に対して <InlineMath math="\Phi(f) = G(f) \circ \eta_A" /> が成り立つことを証明せよ。</p>
                    <ExerciseSolution>
                        <p>全単射 <InlineMath math="\Phi" /> は <InlineMath math="B" /> について自然であるから、任意の射 <InlineMath math="f : B \to B'" /> について以下の可換性が成り立つ（右随伴関手の成分としての自然性）。</p>
                        <BlockMath math="\Phi_{A,B'}(f \circ -) = G(f) \circ \Phi_{A,B}(-)" />
                        <p>ここで <InlineMath math="B = F(A), B' = B, f = f" /> とおき、入力として恒等射 <InlineMath math=" \mathrm{id}_{F(A)} " /> を代入する。</p>
                        <BlockMath math="\Phi_{A,B}(f \circ \mathrm{id}_{F(A)}) = G(f) \circ \Phi_{A,F(A)}(\mathrm{id}_{F(A)})" />
                        <p>左辺は恒等射の性質より <InlineMath math="\Phi(f)" /> となり、右辺の後半部分は単位の定義 <InlineMath math="\eta_A" /> そのものである。</p>
                        <p>したがって <InlineMath math="\Phi(f) = G(f) \circ \eta_A" /> が示された。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="6" number={10}>
                    <p>Theorem 5.4-1 (RAPL) の証明の核心部分：任意の対象 <InlineMath math="A" /> に対して <InlineMath math="\mathrm{Hom}(A, G(\varprojlim D)) \cong \mathrm{Hom}(A, \varprojlim (G \circ D))" /> であることを、随伴の定義と hom 関手の性質を用いて厳密に証明せよ。</p>
                    <ExerciseSolution>
                        <p>随伴関係 <InlineMath math="F \dashv G" /> の全単射 <InlineMath math="\Phi" /> を用いる。</p>
                        <BlockMath math="\begin{aligned} &\mathrm{Hom}_\mathcal{C}(A, G(\varprojlim D)) \\ &\cong \mathrm{Hom}_\mathcal{D}(F(A), \varprojlim D) \quad (\because \text{随伴}) \\ &\cong \varprojlim \mathrm{Hom}_\mathcal{D}(F(A), D(-)) \quad (\because \text{hom 関手による極限保存}) \\ &\cong \varprojlim \mathrm{Hom}_\mathcal{C}(A, G(D(-))) \quad (\because \text{随伴の全単射の自然性}) \\ &\cong \mathrm{Hom}_\mathcal{C}(A, \varprojlim (G \circ D)) \quad (\because \text{hom 関手による極限保存}) \end{aligned}" />
                        <p>ここで <InlineMath math="A" /> は任意なので、米田の補題より対象として <InlineMath math="G(\varprojlim D) \cong \varprojlim (G \circ D)" /> である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
