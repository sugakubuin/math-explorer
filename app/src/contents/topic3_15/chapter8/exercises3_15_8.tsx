import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_15_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="8" number={1}>
                    <p>加法圏（Additive Category）にさらに2つの条件「核と余核の存在」「同型定理の成立（正則性）」を追加した圏を何と呼ぶか答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 8.1-2 より、これを <strong>アーベル圏（Abelian Category）</strong> という。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="8" number={2}>
                    <p>アーベル圏における射の列 <InlineMath math="\cdots \to A \xrightarrow{f} B \xrightarrow{g} C \to \cdots" /> が「完全（exact）」であるための条件を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 8.3-1 より、すべての連続する2射において <InlineMath math="\mathrm{Im}(f) = \ker(g)" /> が成立することである。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="8" number={3}>
                    <p>境界射の列 <InlineMath math="\cdots \to C_{n+1} \xrightarrow{d_{n+1}} C_n \xrightarrow{d_n} C_{n-1} \to \cdots" /> が鎖複体（Chain Complex）であるための代数的な条件式を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 8.4-1 より、すべての <InlineMath math={ "n" } /> について <InlineMath math="d_n \circ d_{n+1} = 0" /> が成り立つことである。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="8" number={4}>
                    <p>加法圏における「零対象（Zero Object）」とはどのような対象か説明し、具体例を一つ挙げよ。</p>
                    <ExerciseSolution>
                        <p>Definition 8.1-1 より、始対象であり、同時に終対象でもある対象のことである。具体例として、アーベル群の圏における自明群 <InlineMath math="\{0\}" /> や、ベクトル空間の圏における零次元空間がある。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="8" number={5}>
                    <p>短完全系列 <InlineMath math="0 \to A \xrightarrow{f} B \xrightarrow{g} C \to 0" /> において、<InlineMath math="f" /> が単射（モノ射）であり、<InlineMath math="g" /> が全射（エピ射）であることを完全性の定義を用いて示せ。</p>
                    <ExerciseSolution>
                        <p>Example 8.3-1 より以下の通りである。</p>
                        <ul className="list-disc list-inside">
                            <li><InlineMath math="0 \to A \xrightarrow{f} B" /> が完全であるとは、<InlineMath math="\ker f = \mathrm{Im}(0 \to A) = 0" /> であることを意味し、これは <InlineMath math="f" /> がモノ射であることを意味する。</li>
                            <li><InlineMath math="B \xrightarrow{g} C \to 0" /> が完全であるとは、<InlineMath math="\mathrm{Im} g = \ker(C \to 0) = C" /> であることを意味し、これは <InlineMath math="g" /> がエピ射であることを意味する。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="8" number={6}>
                    <p>鎖複体 <InlineMath math="C_\bullet" /> における <InlineMath math="n" /> 次のホモロジー群 <InlineMath math="H_n(C_\bullet)" /> の定義式を記せ。</p>
                    <ExerciseSolution>
                        <p>Definition 8.4-2 より以下の通りである。</p>
                        <BlockMath math="H_n(C_\bullet) = \ker d_n / \mathrm{Im}\, d_{n+1}" />
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="8" number={7}>
                    <p>ホモロジー群 <InlineMath math="H_n(C_\bullet)" /> が 0 であることは、列のその箇所においてどのような性質を持つことと同値か答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 8.4-2 より、<InlineMath math="\ker d_n = \mathrm{Im}\, d_{n+1}" /> となることと同値であり、これは列が第 <InlineMath math="n" /> 項において<strong>完全</strong>であることを意味する。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="8" number={8}>
                    <p>アーベル群の圏 <InlineMath math="\mathbf{Ab}" /> はアーベル圏であるが、一般の群の圏 <InlineMath math="\mathbf{Grp}" /> は加法圏ですらない。その主たる理由を答えよ。</p>
                    <ExerciseSolution>
                        <p>Example 8.2-2 より。加法圏であるためには hom 集合がアーベル群の構造を持たなければならないが、群が非可換である場合、準同型 <InlineMath math="f, g : G \to H" /> の和 <InlineMath math="(f+g)(x) = f(x)g(x)" /> が演算を保つとは限らない。実際に、
                        <InlineMath math="(f+g)(xy) = f(xy)g(xy) = f(x)f(y)g(x)g(y)" />
                        であり、これが
                        <InlineMath math="(f+g)(x)(f+g)(y) = f(x)g(x)f(y)g(y)" />
                        と等しくなるためには <InlineMath math="f(y)g(x) = g(x)f(y)" /> が任意の <InlineMath math="x, y" /> で成り立つ必要があり、これは一般には成立しない。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="8" number={9}>
                    <p>スネークの補題において、連結準同型 <InlineMath math="\partial : \ker \gamma \to \mathrm{coker}\, \alpha" /> を構成するための5つのステップ（§8.3 Proof参照）のうち、ステップ2における <InlineMath math="b'" /> の選び方が well-defined である（すなわち、最終的な剰余類 <InlineMath math="[a]" /> が <InlineMath math="b'" /> の選択に依存しない）ことを証明せよ。</p>
                    <ExerciseSolution>
                        <p>別の <InlineMath math="b''_1, b''_2 \in B'" /> を、<InlineMath math="g'(b''_1) = g'(b''_2) = c'" /> となるように選んだとする。<InlineMath math="b' = b''_1 - b''_2" /> とおくと、<InlineMath math="g'(b') = 0" /> である。</p>
                        <p>上段の完全性より <InlineMath math="\ker g' = \mathrm{Im} f'" /> なので、<InlineMath math="b' = f'(a')" /> となる <InlineMath math="a' \in A'" /> が存在する。このとき、図式の可換性 <InlineMath math="\beta \circ f' = f \circ \alpha" /> より、</p>
                        <BlockMath math="\beta(b') = \beta(f'(a')) = f(\alpha(a'))" />
                        <p>となる。</p>
                        <p>ステップ4において、<InlineMath math="\beta(b''_1) = f(a_1)" /> および <InlineMath math="\beta(b''_2) = f(a_2)" /> となる <InlineMath math="a_1, a_2" /> をとったとすると：</p>
                        <BlockMath math="f(a_1 - a_2) = \beta(b''_1 - b''_2) = \beta(b') = f(\alpha(a'))" />
                        <p><InlineMath math="f" /> は単射なので、<InlineMath math="a_1 - a_2 = \alpha(a')" /> が成り立つ。これは <InlineMath math="a_1" /> と <InlineMath math="a_2" /> の差が <InlineMath math="\mathrm{Im} \alpha" /> に含まれることを意味する。</p>
                        <p>したがって、<InlineMath math="\mathrm{coker}\, \alpha = A / \mathrm{Im} \alpha" /> における類は <InlineMath math="[a_1] = [a_2]" /> となり、<InlineMath math="\partial(c')" /> は well-defined である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="8" number={10}>
                    <p>鎖複体の短完全系列 <InlineMath math="0 \to A_\bullet \to B_\bullet \to C_\bullet \to 0" /> からホモロジーの長完全系列が導かれる際、スネークの補題をどのように適用するか説明せよ。</p>
                    <ExerciseSolution>
                        <p>次数 <InlineMath math="n" /> における図式（境界射と短完全系列）に注目する。ミッチェル埋め込み定理に基づき成分で考えると、
                        境界射 <InlineMath math="d_n" /> は可換図式</p>
                        <BlockMath math="\begin{matrix} & A_n & \xrightarrow{f_n} & B_n & \xrightarrow{g_n} & C_n & \to 0 \\ & \downarrow{d^A_n} & & \downarrow{d^B_n} & & \downarrow{d^C_n} & \\ 0 \to & A_{n-1} & \xrightarrow{f_{n-1}} & B_{n-1} & \xrightarrow{g_{n-1}} & C_{n-1} & \end{matrix}" />
                        <p>を形成する。
                        スネークの補題を適用すると、核と余核を繋ぐ系列</p>
                        <BlockMath math="\ker d^A_n \to \ker d^B_n \to \ker d^C_n \xrightarrow{\partial} \mathrm{coker}\, d^A_n \to \mathrm{coker}\, d^B_n \to \mathrm{coker}\, d^C_n" />
                        <p>が得られる。
                        ここで <InlineMath math="H_n(A) = \ker d^A_n / \mathrm{Im} d^A_{n+1}" /> であることに注意する。<InlineMath math="\mathrm{coker}\, d_{n+1} = \text{対象} / \mathrm{Im} d_{n+1}" /> なので、連結準同型等にさらなる全射・単射性を組み合わせることで、最終的にホモロジー群の間の長完全系列</p>
                        <BlockMath math="\cdots \to H_n(A) \to H_n(B) \to H_n(C) \xrightarrow{\partial} H_{n-1}(A) \to \cdots" />
                        <p>が構成される。これはホモロジーが複体間の射の「核と余核の親分」であることを示している。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
