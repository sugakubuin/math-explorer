import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_5_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="8" number={1}>
                    <p>位相空間 <InlineMath math="X" /> が<b>連結 (Connected)</b> であることの定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 8.1-1 より：</p>
                        <p className="mt-2 ml-4">
                            互いに素で空でない 2 つの開集合 <InlineMath math="U, V \subset X" /> が存在して、<InlineMath math="X = U \cup V" /> となることがないとき、<InlineMath math="X" /> は連結であるという。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>実数直線 <InlineMath math="\mathbb{R}" /> において、連結な部分集合はどのようなものに限られるか述べよ。</p>
                    <ExerciseSolution>
                        <p>Example 8.1-2 より：</p>
                        <p className="mt-2 ml-4">
                            実数直線 <InlineMath math="\mathbb{R}" /> の連結な部分集合は、<b>区間</b>（開区間、閉区間、半開区間、点集合、空集合）に限られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>位相空間 <InlineMath math="X" /> が<b>弧状連結 (Path-connected)</b> であることの定義、および <b>道 (Path)</b> の定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 8.3-1 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>弧状連結：</b> 任意の 2 点 <InlineMath math="x, y \in X" /> に対して、それらを結ぶ道が存在すること。</li>
                            <li><b>道：</b> 閉区間からの連続写像 <InlineMath math="\gamma: [0, 1] \to X" /> で、<InlineMath math="\gamma(0) = x, \gamma(1) = y" /> を満たすもの。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="8" number={4}>
                    <p>位相空間の間の連続写像 <InlineMath math="f: X \to Y" /> について、<InlineMath math="X" /> が連結であれば像 <InlineMath math="f(X)" /> も連結であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 8.2-1 より：</p>
                        <p>像 <InlineMath math="f(X)" /> が非連結であると仮定し、分割を <InlineMath math="(U, V)" /> とする。<InlineMath math="U, V" /> は <InlineMath math="f(X)" /> の開集合であり、<InlineMath math="f(X) = U \cup V" />, <InlineMath math="U \cap V = \emptyset" />, <InlineMath math="U, V \neq \emptyset" /> を満たす。</p>
                        <p className="mt-2">写像 <InlineMath math="f" /> の連続性より、逆像 <InlineMath math="A = f^{-1}(U)" /> と <InlineMath math="B = f^{-1}(V)" /> は <InlineMath math="X" /> の開集合である。このとき、<InlineMath math="A \cup B = f^{-1}(U \cup V) = X" />, <InlineMath math="A \cap B = \emptyset" />, <InlineMath math="A, B \neq \emptyset" /> が成り立つため、<InlineMath math="(A, B)" /> は <InlineMath math="X" /> の分割を与える。これは <InlineMath math="X" /> が連結であることに矛盾する。よって像 <InlineMath math="f(X)" /> は連結である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p><b>中間値の定理</b>を用いて、方程式 <InlineMath math="x^3 + x = 1" /> が閉区間 <InlineMath math="[0, 1]" /> 内に少なくとも一つの解を持つことを示せ。</p>
                    <ExerciseSolution>
                        <p>Example 8.2-1 と同様の手法を用いる：</p>
                        <p>関数 <InlineMath math="g(x) = x^3 + x - 1" /> を考える。これは多項式なので <InlineMath math="[0, 1]" /> 上で連続である。</p>
                        <p className="mt-2"><InlineMath math="g(0) = -1 < 0" />, <InlineMath math="g(1) = 1 + 1 - 1 = 1 > 0" /> である。<InlineMath math="[0, 1]" /> は連結であり、中間値の定理（Corollary 8.2-1）より <InlineMath math="g(x) = 0" /> を満たす <InlineMath math="x \in [0, 1]" /> が存在する。これは <InlineMath math="x^3 + x = 1" /> の解である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>弧状連結な空間は必ず連結であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 8.3-1 より：</p>
                        <p><InlineMath math="X" /> を弧状連結とし、非連結であると仮定する。分割を <InlineMath math="(U, V)" /> とし、<InlineMath math="a \in U, b \in V" /> をとる。<InlineMath math="X" /> は弧状連結なので道 <InlineMath math="\gamma: [0, 1] \to X" /> で <InlineMath math="\gamma(0)=a, \gamma(1)=b" /> となるものが存在する。</p>
                        <p className="mt-2">像 <InlineMath math="\Gamma = \gamma([0, 1])" /> は、連結集合 <InlineMath math="[0, 1]" /> の連続像であるため連結である。しかし <InlineMath math="\Gamma \cap U" /> と <InlineMath math="\Gamma \cap V" /> はいずれも空でなく、<InlineMath math="\Gamma" /> の分割を与えてしまう。連結集合が分割されることは矛盾である。よって <InlineMath math="X" /> は連結である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={7}>
                    <p>有理数全体の集合 <InlineMath math="\mathbb{Q}" /> において、点 <InlineMath math="x" /> を含む <b>連結成分 (Connected Component)</b> は一点集合 <InlineMath math="\{x\}" /> に限られることを説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 8.1-2 および Definition 8.4-1 より：</p>
                        <p><InlineMath math="\mathbb{Q}" /> において、2点以上を含む任意の部分集合 <InlineMath math="A" /> は、その間に存在する無理数 <InlineMath math="\alpha" /> を用いて分離することができ、非連結となる。したがって、<InlineMath math="\mathbb{Q}" /> 内の任意の連結部分集合は空集合または一点集合に限られる。よって連結成分（極大連結集合）は一点集合である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="8" number={8}>
                    <p>位相空間 <InlineMath math="X" /> が連結であるための必要十分条件は、<InlineMath math="X" /> の <b>開かつ閉な部分集合 (Clopen set)</b> が、空集合と全体集合のみであることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 8.1-1 の証明より：</p>
                        <p>1) (<InlineMath math="\implies" />) <InlineMath math="X" /> が連結であるとし、自明でない開閉集合 <InlineMath math="A" />（<InlineMath math="\emptyset, X" /> 以外）が存在すると仮定する。このとき <InlineMath math="U = A, V = X \setminus A" /> とおくと、ともに空でない開集合（<InlineMath math="A" /> は閉なので補集合は開）であり、<InlineMath math="X" /> の分割を与える。これは連結性に矛盾する。</p>
                        <p className="mt-2">2) (<InlineMath math="\impliedby" />) 自明な開閉集合のみが存在するとする。もし <InlineMath math="X" /> が非連結であれば分割 <InlineMath math="(U, V)" /> が存在する。<InlineMath math="U" /> は開集合であり、かつ補集合 <InlineMath math="V" /> も開集合であるため、<InlineMath math="U" /> は閉集合でもある。これは自明でない開閉集合が存在することを意味し、仮定に矛盾する。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={9}>
                    <p>連結部分集合 <InlineMath math="A \subset X" /> について、その <b>閉包</b> <InlineMath math="\overline{A}" /> もまた連結であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>連結集合の閉包の連結性（Proposition 8.4-1 の証明内言及）を示す：</p>
                        <p><InlineMath math="\overline{A}" /> が非連結であると仮定し、分割を <InlineMath math="(U, V)" /> とする。<InlineMath math="U, V" /> は <InlineMath math="\overline{A}" /> における相対開集合である。</p>
                        <p className="mt-2"><InlineMath math="A" /> は <InlineMath math="\overline{A}" /> の部分集合なので、<InlineMath math="A = (A \cap U) \cup (A \cap V)" /> と分割される。各項は <InlineMath math="A" /> における開集合である。<InlineMath math="A" /> は連結なので、一方が空でなければならない。仮に <InlineMath math="A \cap V = \emptyset" /> とすると、<InlineMath math="A \subset U" /> である。</p>
                        <p className="mt-2"><InlineMath math="U" /> は閉包 <InlineMath math="\overline{A}" /> における閉集合でもある（<InlineMath math="V" /> が開であるため）。閉集合の定義より、<InlineMath math="A \subset U" /> ならば <InlineMath math="\overline{A} \subset U" /> である。これは <InlineMath math="V \cap \overline{A}" /> が空であることを意味し、<InlineMath math="V \neq \emptyset" /> に矛盾する。よって閉包は連結である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={10}>
                    <p><b>局所連結空間</b>（Definition 8.4-2）において、各連結成分は開集合であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 8.4-2 より：</p>
                        <p><InlineMath math="C" /> を局所連結空間 <InlineMath math="X" /> の連結成分とする。任意の <InlineMath math="x \in C" /> をとる。局所連結性より、点 <InlineMath math="x" /> を含む連結な開近傍 <InlineMath math="V" /> が存在する。</p>
                        <p className="mt-2"><InlineMath math="x \in V \subset X" /> かつ <InlineMath math="V" /> は連結である。連結成分 <InlineMath math="C" /> は <InlineMath math="x" /> を含む極大な連結集合であるから、包含関係により <InlineMath math="V \subset C" /> となる。よって、各点 <InlineMath math="x \in C" /> は内点であり、連結成分 <InlineMath math="C" /> は開集合である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
