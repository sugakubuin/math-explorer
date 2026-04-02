import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_15_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="7" number={1}>
                    <p>圏 <InlineMath math="\mathcal{C}" /> 上のモナド <InlineMath math="(T, \mu, \eta)" /> を構成する3つの要素（自己関手と2つの自然変換）を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 7.1-1 より、以下の3つである。</p>
                        <ul className="list-disc list-inside">
                            <li>自己関手 <InlineMath math="T : \mathcal{C} \to \mathcal{C}" /></li>
                            <li>乗法（Multiplication）： <InlineMath math="\mu : T^2 \Rightarrow T" /></li>
                            <li>単位（Unit）： <InlineMath math="\eta : \mathrm{Id}_\mathcal{C} \Rightarrow T" /></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="7" number={2}>
                    <p>モナドが満たすべき2つの公理「結合律」と「単位律」を形式的に記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 7.1-1 より以下の通りである。</p>
                        <ul className="list-disc list-inside">
                            <li>結合律： <InlineMath math="\mu \circ T\mu = \mu \circ \mu T" /></li>
                            <li>単位律： <InlineMath math="\mu \circ T\eta = \mathrm{id}_T = \mu \circ \eta T" /></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="7" number={3}>
                    <p>随伴関係 <InlineMath math="F \dashv G" /> （単位 <InlineMath math="\eta" />、余単位 <InlineMath math="\varepsilon" />）から誘導されるモナドの <InlineMath math="T" /> および <InlineMath math="\mu" /> の構成方法を記せ。</p>
                    <ExerciseSolution>
                        <p>Theorem 7.2-1 より以下の通りである。</p>
                        <ul className="list-disc list-inside">
                            <li><InlineMath math="T = G \circ F" /></li>
                            <li><InlineMath math="\mu = G \varepsilon F : G \circ F \circ G \circ F \Rightarrow G \circ F" /></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="7" number={4}>
                    <p>集合の圏におけるべき集合モナド <InlineMath math="T = \mathcal{P}" /> において、単位 <InlineMath math="\eta_A(a)" /> と 乗法 <InlineMath math="\mu_A(\mathcal{S})" /> （ここで <InlineMath math="\mathcal{S} \in \mathcal{P}(\mathcal{P}(A))" />）の具体的な定義を記せ。</p>
                    <ExerciseSolution>
                        <p>Example 7.1-1 より以下の通りである。</p>
                        <ul className="list-disc list-inside">
                            <li><InlineMath math="\eta_A(a) = \{a\}" /> （一点集合をとる）</li>
                            <li><InlineMath math="\mu_A(\mathcal{S}) = \bigcup \mathcal{S}" /> （和集合をとる）</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="7" number={5}>
                    <p>クライスリ圏 <InlineMath math="\mathcal{C}_T" /> における、対象 <InlineMath math="A" /> から <InlineMath math="B" /> への射の定義、および対象 <InlineMath math="A" /> における恒等射の定義を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 7.3-1 より以下の通りである。</p>
                        <ul className="list-disc list-inside">
                            <li>射： 元の圏 <InlineMath math="\mathcal{C}" /> における射 <InlineMath math="f : A \to T(B)" /></li>
                            <li>恒等射： モナドの単位 <InlineMath math="\eta_A : A \to T(A)" /></li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="7" number={6}>
                    <p>自由群モナド <InlineMath math="T = U \circ F" /> において、乗法 <InlineMath math="\mu_S" /> が果たす役割を「平坦化」という言葉を使って説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 7.2-2 より、<InlineMath math="T(T(S))" /> は「語（文字列）を文字として構成された語（入れ子状の単語）」を表す。乗法 <InlineMath math="\mu_S" /> は、この入れ子の境界を無視して、ただ一つの長い文字列へと平坦化（flatten）する操作に対応する。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="7" number={7}>
                    <p>モナド <InlineMath math="T" /> に対する <InlineMath math="T" />-代数（Eilenberg-Moore 代数） <InlineMath math="(A, \alpha)" /> が満たすべき単位律の図式的（あるいは数式的）条件を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 7.3-2 より、構造射 <InlineMath math="\alpha : T(A) \to A" /> と 単位 <InlineMath math="\eta_A : A \to T(A)" /> の合成が恒等射となることである：</p>
                        <BlockMath math="\alpha \circ \eta_A = \mathrm{id}_A" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="7" number={8}>
                    <p>随伴 <InlineMath math="F \dashv G" /> （単位 <InlineMath math="\eta" />、余単位 <InlineMath math="\varepsilon" />）から誘導されるモナドにおいて、単位律 <InlineMath math="\mu \circ T\eta = \mathrm{id}_T" /> が成り立つことを、随伴の三角恒等式を用いて証明せよ。</p>
                    <ExerciseSolution>
                        <p>モナドの定義（Theorem 7.2-1）より、<InlineMath math="T = GF" /> および <InlineMath math="\mu = G\varepsilon F" /> である。</p>
                        <p>単位律の左辺を計算すると、
                            <BlockMath math="\mu \circ T\eta = (G\varepsilon F) \circ (GF\eta)" />
                            となる。ここでウィスカリングの性質（自然変換の水平合成）により、これは以下のようにも書ける：
                            <BlockMath math="\mu \circ T\eta = G(\varepsilon F \circ F\eta)" />
                            括弧内の <InlineMath math="\varepsilon F \circ F\eta : F \Rightarrow F" /> に注目すると、これは随伴の三角恒等式の一つ
                            <BlockMath math="(\varepsilon F) \circ (F\eta) = \mathrm{id}_F" />
                            そのものである。したがって、
                            <BlockMath math="\mu \circ T\eta = G(\mathrm{id}_F) = \mathrm{id}_{GF} = \mathrm{id}_T" />
                            となり、単位律が示された。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="7" number={9}>
                    <p>クライスリ圏における射の合成の定義
                        <BlockMath math="g \circ_T f = \mu_C \circ T(g) \circ f" />
                        が結合法則を満たすことを証明せよ。すなわち、<InlineMath math="h \circ_T (g \circ_T f) = (h \circ_T g) \circ_T f" /> であることを示せ。</p>
                    <ExerciseSolution>
                        <p><InlineMath math="f : A \to T(B), g : B \to T(C), h : C \to T(D)" /> とする。</p>
                        <p>右辺の内側を計算すると：</p>
                        <BlockMath math="(h \circ_T g) = \mu_D \circ T(h) \circ g" />
                        <p>これと <InlineMath math="f" /> の合成は：</p>
                        <BlockMath math="\begin{aligned} (h \circ_T g) \circ_T f &= \mu_D \circ T(\mu_D \circ T(h) \circ g) \circ f \\ &= \mu_D \circ T\mu_D \circ T^2h \circ Tg \circ f \end{aligned}" />
                        <p>一方、左辺の内側を計算すると：</p>
                        <BlockMath math="(g \circ_T f) = \mu_C \circ T(g) \circ f" />
                        <p>これと <InlineMath math="h" /> の合成は：</p>
                        <BlockMath math="\begin{aligned} h \circ_T (g \circ_T f) &= \mu_D \circ T(h) \circ (\mu_C \circ T(g) \circ f) \\ &= \mu_D \circ Th \circ \mu_C \circ Tg \circ f \end{aligned}" />
                        <p>ここで <InlineMath math="Th \circ \mu_C = \mu_D \circ T^2h" /> （<InlineMath math="\mu" /> の自然性）を用いると：</p>
                        <BlockMath math="\text{左辺} = \mu_D \circ \mu_D T \circ T^2h \circ Tg \circ f" />
                        <p>モナドの結合律 <InlineMath math="\mu \circ T\mu = \mu \circ \mu T" /> より、左辺と右辺の <InlineMath math="\mu_D \circ T\mu_D" /> と <InlineMath math="\mu_D \circ \mu_D T" /> が一致するため、両者は等しい。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="7" number={10}>
                    <p>べき集合モナド <InlineMath math="T = \mathcal{P}" /> のクライスリ圏 <InlineMath math="\mathbf{Set}_{\mathcal{P}}" /> が、集合と二項関係の圏 <InlineMath math="\mathbf{Rel}" /> と同値であることを説明せよ。</p>
                    <ExerciseSolution>
                        <p><InlineMath math="\mathbf{Rel}" /> の対象は集合であり、射 <InlineMath math="R : A \to B" /> は <InlineMath math="A \times B" /> の部分集合である。これに対し、<InlineMath math="\mathbf{Set}_{\mathcal{P}}" /> の射 <InlineMath math="f : A \to \mathcal{P}(B)" /> は各 <InlineMath math="a \in A" /> に対して部分集合 <InlineMath math="f(a) \subseteq B" /> を対応させる写像である。</p>
                        <p>この二者は <InlineMath math="\{ (a, b) \mid b \in f(a) \}" /> という関係 <InlineMath math="R" /> を通じて一対一に対応する。また、<InlineMath math="\mathbf{Rel}" /> における関係の合成 <InlineMath math="S \circ R" /> は <InlineMath math=" (a, c) \in S \circ R \iff \exists b, (a, b) \in R \land (b, c) \in S " /> で定義される。</p>
                        <p>一方、クライスリ合成 <InlineMath math="g \circ_{\mathcal{P}} f" /> は <InlineMath math="\mu \circ \mathcal{P}(g) \circ f" /> であり、ある要素 <InlineMath math="a" /> の行き先は <InlineMath math="\bigcup_{b \in f(a)} g(b)" /> となる。これはまさに「ある <InlineMath math="b \in f(a)" /> を経由して <InlineMath math="g(b)" /> へ至る要素の集合」であり、二項関係の合成と一致する。単位射 <InlineMath math="\eta_A(a) = \{a\}" /> も恒等関係 <InlineMath math="a R b \iff a=b" /> に対応する。</p>
                        <p>以上より、両圏は対象と射の対応、および合成の定義において完全に一致するため、同値（実際には同型）である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
