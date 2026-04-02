import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_15_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="5" number={1}>
                    <p>添字圏 <InlineMath math="\mathcal{J}" /> から圏 <InlineMath math="\mathcal{C}" /> への関手 <InlineMath math="D : \mathcal{J} \to \mathcal{C}" /> のことを、<InlineMath math="\mathcal{C}" /> における何と呼ぶか答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 5.1-1 より、これを <strong><InlineMath math="\mathcal{J}" />-型図式（diagram）</strong> という。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="5" number={2}>
                    <p>図式 <InlineMath math="D" /> に対する錐（Cone）を構成する2つの要素を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 5.1-2 より、以下の2つである。</p>
                        <ul className="list-disc list-inside">
                            <li><InlineMath math="\mathcal{C}" /> の対象 <InlineMath math="N" />（頂点）</li>
                            <li><InlineMath math="\mathcal{J}" /> の各対象 <InlineMath math="j" /> ごとに定まる射の族 <InlineMath math="\lambda_j : N \to D(j)" /> （図式の任意の射 <InlineMath math="f : j \to k" /> に対して <InlineMath math="D(f) \circ \lambda_j = \lambda_k" /> を満たすもの）</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="5" number={3}>
                    <p>図式 <InlineMath math="D" /> の極限（Limit） <InlineMath math="L" /> が満たすべき「普遍性」とは、どのような錐の中でどのような対象であることを意味するか答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 5.2-1 より、図式 <InlineMath math="D" /> 上のすべての錐の中で<strong>終対象</strong>であることを意味する。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="5" number={4}>
                    <p>離散 2 点圏に対する図式（対象のペア <InlineMath math="A, B" />）の極限が、私たちがよく知る「積（Product）」 <InlineMath math="A \times B" /> となることを、錐の射（射影）を用いて説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 5.2-1 より、離散圏には恒等射以外の射がないため、錐の可換性条件は自明である。したがって錐とは単なる射の対 <InlineMath math="(N \to A, N \to B)" /> である。これらの中で終対象となるもの、すなわち任意の射の対に対してそこへの一意な射が存在するものが、積の普遍性そのものである。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="5" number={5}>
                    <p>集合の圏 <InlineMath math="\mathbf{Set}" /> において、並列射 <InlineMath math="f, g : A \rightrightarrows B" /> の極限である「等化子（Equalizer）」は具体的にどのような集合として構成されるか答えよ。</p>
                    <ExerciseSolution>
                        <p>Example 5.2-2 より、<InlineMath math="f" /> と <InlineMath math="g" /> による値が一致する元の集合として構成される。</p>
                        <BlockMath math="\mathrm{Eq}(f,g) = \{a \in A \mid f(a) = g(a)\}" />
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="5" number={6}>
                    <p>スパン <InlineMath math="A \leftarrow C \to B" /> の余極限を、集合の圏における直感的な言葉（単語のペアの貼り合わせなど）を用いて説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 5.3-2 より、これを押し出し（Pushout）と呼ぶ。集合の圏では、<InlineMath math="A" /> と <InlineMath math="B" /> の非交和をとり、<InlineMath math="C" /> の元が送られる先のペアを同一視することで「貼り合わせた」ものに対応する。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="5" number={7}>
                    <p>関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> が極限を保存する（preserve limits, Definition 5.4-1）ことの定義を簡潔に述べよ。</p>
                    <ExerciseSolution>
                        <p>元の圏で作った極限錐を関手で送ったものが、移った先の圏でも極限錐になっていることである。即ち <InlineMath math="F(\varprojlim D) \cong \varprojlim F(D)" /> が成立することである。</p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="5" number={8}>
                    <p>空圏（対象も射も持たない圏）からの図式に対する極限が、終対象になることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>空圏 <InlineMath math="\mathcal{J} = \emptyset" /> からの図式を考える。対象 <InlineMath math="N" /> に対し、<InlineMath math="\mathcal{J}" /> 上の錐を形成するための射の族 <InlineMath math="\{ \lambda_j : N \to D(j) \}_{j \in \mathcal{J}}" /> は空の集合であり、可換条件も空であるから、すべての対象 <InlineMath math="N \in \mathcal{C}" /> は一意に定まる（空な情報の）錐をなす。</p>
                        <p>極限 <InlineMath math="L" /> はこれらすべての錐の中での終対象であるので、任意の錐（任意の対象 <InlineMath math="N" />）から <InlineMath math="L" /> への一意な射が存在しなければならない。これは終対象の定義そのものである。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="5" number={9}>
                    <p>任意の対象 <InlineMath math="A" /> に対して、共変 hom 関手 <InlineMath math="\mathrm{Hom}(A, -) : \mathcal{C} \to \mathbf{Set}" /> はすべての極限を保存することを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 5.4-1 の証明と同様に、極限の普遍性を用いる。<InlineMath math="L = \varprojlim D" /> とすると、<InlineMath math="\mathrm{Hom}(A, L)" /> は錐 <InlineMath math="(A, \{\lambda_j\})" /> の集合と全単射である。</p>
                        <p>一方で、<InlineMath math="\mathbf{Set}" /> における極限 <InlineMath math="\varprojlim \mathrm{Hom}(A, D(-))" /> の元は、写像の族 <InlineMath math="\{ f_j : A \to D(j) \}" /> であって、任意の <InlineMath math="\mathcal{J}" /> の射 <InlineMath math="g : j \to k" /> に対し <InlineMath math="D(g) \circ f_j = f_k" /> を満たすものである。これはまさに <InlineMath math="A" /> を頂点とする図式 <InlineMath math="D" /> 上の錐の定義そのものである。</p>
                        <p>よって <InlineMath math="\mathrm{Hom}(A, \varprojlim D) \cong \varprojlim \mathrm{Hom}(A, D(-))" /> が示された。
                        したがって <InlineMath math="f \mapsto ( \pi_j \circ f )_j" /> という全単射が存在し、この関手は極限を保存する。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
                <ExerciseProblem chapterId="5" number={10}>
                    <p>圏 <InlineMath math="\mathcal{C}" /> における2つの対象 <InlineMath math="A, B" /> の積 <InlineMath math="A \times B" /> が存在すれば、それは同型を除いて一一に定まることを、極限が「終対象」であるという性質を用いて証明せよ。</p>
                    <ExerciseSolution>
                        <p>積は、添字圏 <InlineMath math="\mathcal{J} = \{1, 2\}" /> からの図式 <InlineMath math="D(1)=A, D(2)=B" /> に対する極限、即ち図式上の錐の圏（錐を対象、錐を保存する射を射とする圏）における終対象である。</p>
                        <p>一般に圏における終対象は、存在すれば（対象の間の唯一の同型射を除いて）一意に定まる（Proposition 1.3-2 の双対または系）。</p>
                        <p>したがって、もし2つの極限錐 <InlineMath math="(P, p_1, p_2)" /> と <InlineMath math="(Q, q_1, q_2)" /> が存在すれば、それらの間には唯一の同型射 <InlineMath math="\phi : P \cong Q" /> が存在して、錐の構造を保つ（<InlineMath math="q_i \circ \phi = p_i" />）。したがって対象としての <InlineMath math="P" /> と <InlineMath math="Q" /> は同型である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
